/**
 * This bean implements simple map navigation logic, using the MapViewer client
 * API. It is used by the mapclient.jsp page. 
 */
package mapdemo;

import java.awt.geom.Point2D;
import javax.servlet.http.*;
import oracle.lbs.mapclient.*;   

public class MapClientBean 
{
  // public bean properties; these are automatically populated each time a 
  // request is received by the mapclient.jsp page through the 
  // following statement:
  // <jsp:setProperty name="mcb" property="*" />
  private String  mapViewerServerURL;    // server url
  private String  action;                // user requested action: pan/zoom 
  private double  centerX;               // map center x
  private double  centerY;               // map center y
  private double  size;                  // map image size

  private boolean success;            
  private String  errorMsg; 
  
  // the MapViewer client handle. Not a public bean property.
  private MapViewer mv;  
    
  public MapClientBean() {}
  
  public String getMapViewerServerURL()
  {
    return mapViewerServerURL;
  }  

  public void   setMapViewerServerURL(String url)
  {
    if( mapViewerServerURL==null || mapViewerServerURL.length()==0 ||
       !url.equals(mapViewerServerURL) )
    { //mapviewer server url has changed; we must create a new MapViewer client.
      mapViewerServerURL = url; 
      mv = new MapViewer(mapViewerServerURL);       // new mapviewer handle
      mv.setImageFormat(MapViewer.FORMAT_GIF_URL);  // or FORMAT_PNG_URL            
    }
  }
  
  public void   setAction(String action)
  {
    this.action = action;
  }
  public String getAction()
  {
    return action;
  }
  
  public String getDataSource()
  {
    return (mv.getDataSourceName()==null)?"" : mv.getDataSourceName();
  }
  
  public void   setDataSource(String dsrc)
  {
    mv.setDataSourceName(dsrc);
  }
  
  public String getBaseMap()
  {
    return (mv.getBaseMapName()==null)?"" : mv.getBaseMapName();
  }
  
  public void   setBaseMap(String map)
  {
    mv.setBaseMapName(map);
  }
  
  public String getTitle()
  {
    return (mv.getMapTitle()==null)? "" : mv.getMapTitle();
  }
  public void   setTitle(String t)
  {
    mv.setMapTitle(t);
  }
  
  public String getMapImageURL()
  {
    return mv.getGeneratedMapImageURL();
  }

  public String getXMLRequest()
  {
    return mv.getMapRequestString();
  }
  
  public String getXMLResponse()
  {
    return mv.getMapResponseString();
  }
  
  public double getCenterX()
  {
    return centerX;
  }
  public void   setCenterX(double x)
  {
    centerX = x;
  }
  
  public double getCenterY()
  {
    return centerY;
  }
  public void   setCenterY(double y)
  {
    centerY = y;
  }

  public double getSize()
  {
    return size;
  }
  public void   setSize(double s)
  {
    size = s;
  }

  public boolean getSuccess()
  {
    return success;
  }  
  public void    setSuccess(boolean v)
  {
    success = v;
  }
  
  public int     getImageW()
  {
    return (int)mv.getDeviceSize().getWidth();
  }  
  public int     getImageH()
  {
    return (int)mv.getDeviceSize().getHeight();
  }

  public String  getErrorMsg()
  {
    return errorMsg;
  }

  /**
   * Determines the mapviewer server url. assuming that this demo is accessed
   * from the same web application of mapviewer server.
   * @param request
   * @return 
   */
  public String  determineURL(HttpServletRequest request)
  {
    String url = "http://"+request.getHeader("host")+request.getContextPath()+"/omserver";
    return url;
  }

  /**
   * Implements the actual map navigation logic.
   * @param request
   */
  public void processRequest(HttpServletRequest request)
  {
    // do nothing if not initialized or session has expired.
    if(mv==null || request.getSession().isNew())
    {
      errorMsg = "Session has expired (or is new). Please fill in the form and "+
                 "click on the Submit button.";            
      return;
    }
         
    success = false;
    errorMsg = null;
    if(action!=null) // user clicked an action button
    {
      if("Submit".equalsIgnoreCase(action))
        doSubmit();
      else if("Zm In".equalsIgnoreCase(action))
        doZoomIn();
      else if("Zm Out".equalsIgnoreCase(action))
        doZoomOut();    
      else if("Pan W.".equalsIgnoreCase(action))
        doPanHalf('W');
      else if("Pan E.".equalsIgnoreCase(action))
        doPanHalf('E');
      else if("Pan S.".equalsIgnoreCase(action))
        doPanHalf('S');
      else if("Pan N.".equalsIgnoreCase(action))
        doPanHalf('N');
    }
    else if(request.getParameter("mouseClick.x")!=null)
    {
      // user clicked on the map itself: recenter
      doRecenter(request);
    }
        
    if(success)
    {
      //reset action
      action = null;
      //update map size for display purpose
      size = mv.getRequestSize();
      //update center x,y for display purpose
      Point2D p = mv.getRequestCenter();
      if(p !=null)
      {
        centerX = p.getX();
        centerY = p.getY();
      }
    }
  }

  private void doSubmit()
  {
    try
    {
      mv.setCenter(centerX, centerY);
      mv.setSize(size);
      success = mv.run();      
    }catch(Exception ex) { errorMsg = ex.getMessage(); }
  }
  
  private void doZoomIn()
  {
    try{
      success = mv.zoomIn(1.5);
    }catch(Exception ex) { errorMsg = ex.getMessage(); }
  }
  
  private void doZoomOut()
  {
    try{
      success = mv.zoomOut(1.5);
    }catch(Exception ex) { errorMsg = ex.getMessage(); }
  }

  private void doRecenter(HttpServletRequest request)
  {    
    //user must have clicked on the map: do recenter
    int x = 0, y =0;
    x = Integer.parseInt(request.getParameter("mouseClick.x"));
    y = Integer.parseInt(request.getParameter("mouseClick.y"));
    // p is the world coordinate corresponding to the mouse click
    Point2D p = mv.getUserPoint(x,y);    
    mv.setCenter(p.getX(), p.getY());    
    try{
      success = mv.run();    
    }catch(Exception ex) { 
      errorMsg = ex.getMessage();
    }
  }
  
  private void doPanHalf(char c)
  {
    if(c=='E')
      centerX += size/2.0;
    else if(c=='N')
      centerY += size/2.0;
    else if(c=='S')
      centerY -= size/2.0;
    else if(c=='W')
      centerX -= size/2.0;
      
    mv.setCenter(centerX, centerY);
    try
    {
      success = mv.run();
    }catch(Exception ex) {
      errorMsg = ex.getMessage();
    }
  }
}

