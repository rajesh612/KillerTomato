/****************************************************
 * This is a sample class to demonstrate how to
 * implement a spatial provider to be used with
 * MapBuilder and MapViewer.
 * A Spatial provider allows MapViewer to render
 * data in native format using Custom geometry themes.
 * 
 * Refer to MapViewer documentation about Custom 
 * Geometry themes for additional information about
 * spatial providers.
 ****************************************************/

/** This sample provider parses a XML file with the following format
 
 <?xml version="1.0" standalone="yes"?>
 <spatial_data>

  <data_attributes>
    <attribute name="city" type="string" />
    <attribute name="state_abrv" type="string" />
    <attribute name="pop90" type="double" />
  </data_attributes>

  <data_extents>
     <xmin> -122.49586 </xmin>
     <ymin> 29.45765 </ymin>
     <xmax> -73.943849 </xmax>
     <ymax> 42.3831 </ymax>
  </data_extents>

  <geoFeature>
    <attributes> New York,NY,7322564 </attributes>
    <geometricProperty>
      <Point>
        <coordinates>-73.943849, 40.6698</coordinates>
      </Point>
     </geometricProperty>
   </geoFeature>

  <geoFeature>
    ...
  </geoFeature>
  
  ...
 </spatial_data>
 
 */
 
package spatialprovider.samples;

import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.io.File;
import java.util.ArrayList;
import java.util.Properties;
import java.util.StringTokenizer;
import java.util.Vector;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import oracle.mapviewer.share.Field;
import oracle.mapviewer.share.ext.SDataProvider;
import oracle.mapviewer.share.ext.SDataSet;
import oracle.mapviewer.share.ext.SObject;
import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import oracle.spatial.geometry.JGeometry;
import oracle.spatial.util.GML;

public class CustomSpatialProviderSample implements SDataProvider
{
  private double []extents = null;          // data MBR
  private Vector<Field> attributes = new Vector<Field>(); // data attribute names
  private Vector<Object[]> attributeValues = new Vector<Object[]>();  // attribute values for each geometry
  private Vector<JGeometry> geometries = new Vector<JGeometry>(); // geometries

  private Document        doc=null;         //the parsed Document
  private DocumentBuilder parser=null;      //the parser

  private String dataDirectory = null;           // init parameter - default data directory
  private boolean dataParsed = false;

  /**
   * empty Constructor.
   */
  public CustomSpatialProviderSample()
  {
    try{
      DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
      
      factory.setIgnoringComments(true);
      factory.setIgnoringElementContentWhitespace(true);
      factory.setCoalescing(true);
      factory.setNamespaceAware(true);
      
      parser = factory.newDocumentBuilder();
    } catch(Exception ex)
    {  
      System.err.println(ex.getMessage());
      doc = null;
      parser = null;
    }    
  }

  /**
   * Returns the initialization parameters for the provider.
   * @return
   */
  public String[] getInitParameterNames()
  {
    return new String[]{ "datadir" };
  }

  /**
   * Returns runtime parameter names. Runtime parameters are additional parameters
   * that the provider may use when retrieving the data objects.
   * @return
   */
  public String[] getRuntimeParameterNames()
  {
    return new String[]{ "filename" };
  }
  
  /**
   * Initializes the provider
   * @param params  init properties
   * @return
   */
  public boolean init(Properties params)
  {
    dataDirectory = null;
    
    if(params == null)
      return true;
    
    dataDirectory = params.getProperty("datadir");
    if(dataDirectory == null || dataDirectory.trim().length() == 0)
    {
      // try upper case
      dataDirectory = params.getProperty("DATADIR");
      if(dataDirectory == null || dataDirectory.trim().length() == 0)
        System.out.println("FINE: Init properties does not define \"datadir\" parameter.");
    }
      
    return true;
  }

  /**
   * Returns the data set (geometries plus attributes) that intersects the 
   * query window. In this sample, the data is loaded on initialization and
   * there is no spatial index for searching. The search is sequential.
   * @param queryWin  search area
   * @param nonSpatialColumns   attribute columns
   * @param params      runtime properties
   * @return
   */
  public SDataSet buildDataSet(Rectangle2D queryWin,
                               String []nonSpatialColumns,
                               Properties params)
  {
    if(!dataParsed)
    {
      dataParsed = parseData(params);
      if(!dataParsed)
        return null;
    }
    
    if(geometries.size() == 0)
      return null;

    SDataSet dataset = new SDataSet();
    
    boolean fullExtent = isFullExtent(queryWin);
    
    if(fullExtent)
    {
      for(int i=0;i<geometries.size();i++)
      {
        JGeometry geom = (JGeometry)geometries.get(i);
        SObject obj = new SObject(geom,getGeometryAttributes(nonSpatialColumns,i));
        dataset.addObject(obj);  
      }
    }
    else
    {
      for(int i=0;i<geometries.size();i++)
      {
        JGeometry geom = (JGeometry)geometries.get(i);
        double []mbr = geom.getMBR();
        if(mbr == null)
          continue;
        Rectangle2D.Double rect = new Rectangle2D.Double(mbr[0],mbr[1],
                                    mbr[2]-mbr[0],
                                    mbr[3]-mbr[1]);
        
        if(rect.getWidth() == 0. && rect.getHeight() == 0.)
        {
          Point2D.Double pt = new Point2D.Double(mbr[0],mbr[1]);
          if(queryWin.contains(pt))
          {
            SObject obj = new SObject(geom,getGeometryAttributes(nonSpatialColumns,i));
            dataset.addObject(obj);            
          }
        }
        else if(queryWin.contains(rect) || queryWin.intersects(rect))
        {
          SObject obj = new SObject(geom,getGeometryAttributes(nonSpatialColumns,i));
          dataset.addObject(obj);
        }
      }      
    }
    
    if(dataset.getSize() == 0)
      return null;
      
    return dataset;
  }

  /**
   * Returns the data provider attribute list.
   * @return
   */
  public Field[] getAttributeList(Properties params)
  {
    if(!dataParsed)
    {
      dataParsed = parseData(params);
      if(!dataParsed)
        return null;
    }
    
    if(attributes.size() == 0)
      return null;

    return (Field[])attributes.toArray(new Field[attributes.size()]);
  }

  /**
   * Returns the data extents.
   * @return
   */
  public Rectangle2D getDataExtents(Properties params)
  {
    if(!dataParsed)
    {
      dataParsed = parseData(params);
      if(!dataParsed)
        return null;
    }
    
    if(extents == null || extents.length < 4)
      return null;
    else
      return new Rectangle2D.Double(extents[0],extents[1],
                                    extents[2]-extents[0],
                                    extents[3]-extents[1]);
  }

  /**
   * Builds a spatial index for the data. In this sample there is no
   * spatial index. The data is loaded into memry during initialization of
   * the provider.
   * @return
   */
  public boolean buildSpatialIndex(Properties params)
  {
    return true;
  }

  /**
   * Clears provider data.
   */
  private void clearData()
  {
    extents = null;
    attributes.clear();
    attributeValues.clear();
    geometries.clear();
  }

  /**
   * Parse the file contents to load the data.
   * @param params
   * @return
   */
  private boolean parseData(Properties params)
  {
    if(dataParsed)
      return true;
      
    clearData();

    String fileName = params.getProperty("filename");
    if(fileName == null)
    {
      // try upper case
      fileName = params.getProperty("FILENAME");
      if(fileName == null)
      {
        System.out.println("ParseData: Input properties must define \"filename\" parameter.");
        return false;
      }
    }
    
    String filename = fileName;    

    if(parser == null)
    {
      System.out.println("ParseData: Document buider parser is null. Unable to parse file.");
      return false;
    }

    File f = new File(filename);
    if(!f.exists())
    {
      System.out.println("ParseData: Can not access file: " + filename);
      // try the provider default data directory
       if(dataDirectory == null)
        return false;

       int lastindex = filename.lastIndexOf("/");
       if(lastindex < 0)
        lastindex = filename.lastIndexOf("\\");
       if(lastindex == -1)
        filename = dataDirectory + java.io.File.separator + filename;
       else
        filename = dataDirectory + java.io.File.separator + filename.substring(lastindex+1,filename.length());
       System.out.println("ParseData: File to be parsed: " + filename);
       f = new File(filename);
       if(!f.exists())
       {
         System.out.println("ParseData: File can not be accessed on provider data directory. Copy files there.");
         return false;
       }         
    }
    try
    {
      doc = parser.parse(f);
      Node root = getRootNode();
      if(root == null)
      {
        System.out.println("ParseData: Unable to get root node <spatial_data> tag.");
        return false;
      }

      NodeList childNodes = root.getChildNodes();
      if(childNodes == null || childNodes.getLength() == 0)
      {
        System.out.println("ParseData: Root node has no children nodes. Invalid file.");
        return false;
      }

      for(int j=0; j<childNodes.getLength(); j++)
      {
        Node child = childNodes.item(j);
        
        if(child.getNodeName().trim().equalsIgnoreCase("data_attributes"))
          parseDataAttributes(child);
        else if(child.getNodeName().trim().equalsIgnoreCase("data_extents"))
          parseDataExtents(child);
        else if(child.getNodeName().trim().equalsIgnoreCase("geofeature"))
          parseGeoFeature(child);
      }
      
    } catch (Exception e)
    {
      System.out.println(e.getMessage());
      doc = null;
      return false;
    }
    
    return true;
  }

  /**
   * Parses the data attribute names.
   * @param nd
   * @return
   */
  private boolean parseDataAttributes(Node nd)
  {
    attributes.clear();
    if(nd == null)
      return false;

    if(nd == null)
      return false;
    
    NodeList childNodes = nd.getChildNodes();
    if(childNodes == null || childNodes.getLength() == 0)
    {
      System.out.println("Data attributes node has no children nodes. Invalid file.");
      return false;
    }

    for(int j=0; j<childNodes.getLength(); j++)
    {
      Node child = childNodes.item(j);

      if(child.getNodeName().trim().equalsIgnoreCase("attribute"))
      {
        NamedNodeMap map = child.getAttributes();
        if(map == null || map.getLength()==0)
          continue;

        // parameter name          
        Node attrNode = map.getNamedItem("name");
        if(attrNode == null)
        {
          System.out.println("Name parameter is not defined for attribute index " + j + ". Ignored.");
          continue; 
        }
        String name = attrNode.getNodeValue();
        
        // parameter type
        attrNode = map.getNamedItem("type");
        Field field = null;
        Class javaType = null;
        if(attrNode != null)
        {
          String type = attrNode.getNodeValue();
          if(type == null || type.trim().length() == 0)
            javaType = String.class;
          else
          {
            if(type.trim().equalsIgnoreCase("integer"))
              javaType = Integer.class;
            else if(type.trim().equalsIgnoreCase("float"))
              javaType = Float.class;
            else if(type.trim().equalsIgnoreCase("double"))
              javaType = Double.class;
            else
              javaType = String.class;
          }
        }
        else
          javaType = String.class;

        field = new Field();
        field.setName(name);
        field.setJavaType(javaType);
        
        attributes.add(field);
      }
    }
    
    return true;
  }
 
  /**
   * Parses the data extent values.
   * @param nd
   * @return
   */
  private boolean parseDataExtents(Node nd)
  {
    extents = null;
    
    if(nd == null)
      return false;

    double xmin = Double.NaN;
    double xmax = Double.NaN;
    double ymin = Double.NaN;
    double ymax = Double.NaN;
    
    NodeList childNodes = nd.getChildNodes();
    if(childNodes == null || childNodes.getLength() == 0)
    {
      System.out.println("Data extent node has no children nodes. Invalid file.");
      return false;
    }

    for(int j=0; j<childNodes.getLength(); j++)
    {
      Node child = childNodes.item(j);
      Node extent = child.getFirstChild();
      if(extent == null)
        continue;
      if(child.getNodeName().trim().equalsIgnoreCase("xmin"))
        xmin  = getDoubleValue(extent.getNodeValue());
      else if(child.getNodeName().trim().equalsIgnoreCase("ymin"))
        ymin = getDoubleValue(extent.getNodeValue());
      else if(child.getNodeName().trim().equalsIgnoreCase("xmax"))
        xmax = getDoubleValue(extent.getNodeValue());
      else if(child.getNodeName().trim().equalsIgnoreCase("ymax"))
        ymax = getDoubleValue(extent.getNodeValue());
    }
    
    if(xmin == Double.NaN || ymin == Double.NaN ||
       xmax == Double.NaN || ymax == Double.NaN)
    {
      extents = null;
      return false;
    }
    else
    {
      extents = new double[4];
      extents[0] = xmin;
      extents[1] = ymin;
      extents[2] = xmax;
      extents[3] = ymax;
      return true;
    }
  }

  /**
   * Parses the gml geometry.
   * @param nd
   * @return
   */
  private boolean parseGeoFeature(Node nd)
  {
    if(nd == null)
      return false;

    NodeList childNodes = nd.getChildNodes();
    if(childNodes == null || childNodes.getLength() == 0)
    {
      System.out.println("Geofeature node has no children nodes. Invalid file.");
      return false;
    }

    JGeometry geom = null;
    Object []attrValues = null;
    for(int j=0; j<childNodes.getLength(); j++)
    {
      Node child = childNodes.item(j);

      if(child.getNodeName().trim().equalsIgnoreCase("attributes"))
      {
        Node attrsNode = child.getFirstChild();
        if(attrsNode == null)
        {
          System.out.println("Geofeature attributes node is null.");
          continue;
        }
        String value = attrsNode.getNodeValue();
        if(value == null || value.trim().length() == 0)
        {
          System.out.println("Geofeature attributes node without values.");
          continue;
        }

        StringTokenizer tk = new StringTokenizer(value.trim(), ",");
       
        ArrayList al = new ArrayList();
        while (tk.hasMoreTokens()) 
          al.add(tk.nextToken());
          
        if(al.size() > 0)
          attrValues = al.toArray();
         
      }
      else if(child.getNodeName().trim().equalsIgnoreCase("geometricproperty"))
      {
        try
        {
          geom = GML.fromNodeToGeometry(getFirstRealChildNode(child));
        }catch(Exception e) 
        {
          System.out.println(e.getMessage());
          continue;
        }
      }
 
    }
    
    if(geom == null || attrValues == null)
      return false;
    
    attributeValues.add(attrValues);
    geometries.add(geom);
    
    return true;
  }

  /**
   * Returns the xml root node.
   * @return
   */
  private Node getRootNode()
  {
    if(doc == null)
    {
      System.out.println("Document is null. Parse file first.");
      return null;
    }
    
    NodeList nl = doc.getElementsByTagName("spatial_data");
    if(nl!=null && nl.getLength()>0)
    {
      return nl.item(0);
    }
    else return null;
  }

  /**
   * Returns the first child node for the input node.
   * @param nd
   * @return
   */
  private Node getFirstRealChildNode(Node nd)
  {
    if(!nd.hasChildNodes())
      return null;
      
    NodeList nl = nd.getChildNodes();     
    for(int i=0; i<nl.getLength(); i++)
    {
      Node n = nl.item(i);
      if(n.getNodeType() == Node.ELEMENT_NODE)
        return n;
    }
    
    return null;    
  }

  /**
   * Returns a double value for the input string.
   * @param value
   * @return
   */
  private double getDoubleValue(String value)
  {
    if(value == null)
      return Double.NaN;
    
    try
    {
      return Double.parseDouble(value);
    } catch(Exception e)
    {
      return Double.NaN;
    }
  }

  /**
   * Returns if input window defines a valid area.
   * @param queryWin
   * @return
   */
  private boolean isFullExtent(Rectangle2D queryWin)
  {
    if(queryWin == null)
      return true;
    
    double xl = queryWin.getMinX();
    double yl = queryWin.getMinY();
    double xh = queryWin.getMaxX();
    double yh = queryWin.getMaxY();
    
    return (
            Double.isInfinite(xl) ||
            Double.isNaN(xl) ||
            Double.isInfinite(yl) ||
            Double.isNaN(yl) ||
            Double.isInfinite(xh) ||
            Double.isNaN(xh) ||
            Double.isInfinite(yh) ||
            Double.isNaN(yh)) ;
  }

  /**
   * Returns the geometry attributes
   * @param geomAttrs   attributes to be returned
   * @param geomIndex   geometry index.
   * @return
   */
  private Field[] getGeometryAttributes (String[]geomAttrs,int geomIndex)
  {
    if(geomAttrs == null || geometries.size() == 0 ||
      geomIndex < 0 || geomIndex > (geometries.size()-1) ||
      attributes.size() == 0)
      return null;

    Object []values = (Object[])attributeValues.get(geomIndex);
    if(values == null || values.length == 0)
      return null;

    Field[] attrs = getAttributeList(null);
    
    ArrayList<Field> fields = new ArrayList<Field>();
    for(int l=0;l<geomAttrs.length;l++)
    {
      String column = geomAttrs[l];
      Field f = null;
      for (int j=0; j < attrs.length; j++)
      {
         if(column.equalsIgnoreCase(attrs[j].getName()))
         {
           String value = null;
           if(values[j] != null)
            value = values[j].toString();
           
           if(attrs[j].getJavaType() == Integer.class)
            f = Field.createField(value,"integer");
           else if(attrs[j].getJavaType() == Float.class)
            f = Field.createField(value,"float");
           else if(attrs[j].getJavaType() == Double.class)
             f = Field.createField(value,"double");
           else
             f = Field.createField(value,"string");
           f.setName(attrs[j].getName());
         }

         if(f != null)
         {
            fields.add(f);
            break;
         }
       }
    }
    
    if(fields.size() == 0)
      return null;
    
    return (Field[])fields.toArray(new Field[fields.size()]);    
  }

}