<%-- Copyright (C) Oracle Corporation 2004. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo with dynamic info tip --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--  jxyang       09/30/04 - created       --%>

<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page session="true" %>

<%@ page import="java.util.Enumeration" %>
<%@ page import="java.awt.geom.Point2D" %>
<%@ page import="java.awt.Dimension" %>
<%@ page import="oracle.lbs.mapclient.MapViewer" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title>
MapViewer JSP demo (using mapclient library)
</title>
<style type="text/css">
#infowindowdv{
position: absolute;
width: 150px;
border: 1px solid grey;
padding: 2px;
background-color: #DFDFDF;
visibility: hidden;
z-index: 100;
}
</style>
</head>
<body>
<script type="text/javascript" language="JavaScript">
/* This function is called when the map image is clicked.
 * It handles regular map navigation driven by mouse clicks.
 */
function mapClicked(event)
{
  if (!event)
    event = window.event;
  var target = event.srcElement;
  if (!target) 
    target = event.currentTarget; 

  if (!target)
    return false;

  var cx, cy;

  if (event.layerX) 
  {
    cx = event.layerX;
    cy = event.layerY;
  } 
  else 
  {
    cx = event.offsetX;
    cy = event.offsetY;
  }
  document.getElementById("clickX").value= cx ;
  document.getElementById("clickY").value= cy ;
  document.mapform.submit();
  return true ;
}
/* This function is called when a clickable area is clicked.
 * If "Open a new window" option is selected, a new browser
 * window will be opened and the info tip string will be 
 * forwarded as a parameter to "clicked.jsp". If "Navigate on
 * the map" is selected, the control will be forwarded to 
 * function mapClicked to do normal map navigation.
 *
 * This is simple example of areaClicked() function. You can
 * customize it and do more sophisticated things. For example,
 * you can extract certain attributes from the info string and
 * forward these attributes as parameters to some URL, where 
 * certain query is performed and the result is presented in 
 * a new web browser window.
 */
function areaClicked(event, info)
{
  thmaction = document.mapform.thmaction;
  if(thmaction[0].checked) // navigate
    return mapClicked(event) ;
  else // open new window
    window.open('clicked.jsp?info='+escape(info),'mywindow','width=400,height=250') ;
}
</script>
   <!-------------------------------------------------------------------------
                  Output page header (stuff you really dont need)
    -------------------------------------------------------------------------->
      <span style="width:100%">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
      <tr><td>
          <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
            <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td></tr>
            <tr><td valign="bottom"><A href=".."><img src="../myicons/mapviewer.gif" border="0" /></A>
               <FONT color="#449922" size="+2"><b>JSP Demo (with mapclient lib)</b></FONT> <FONT size="-1"><A href="dmap.jsp.txt">source file</A></FONT></td></tr>
          </table>
          </td>
      </tr>
      <tr><td valign="top">
          <table cellpadding="0" cellspacing="0" border="0" summary="">
            <tr><td align="center"><img src="../myicons/t.gif" border="0" /></td></tr>
          </table> </td>
      </tr>
      </table>
      <hr>
      </span>

   <!-------------------------------------------------------------------------
                  Process the incoming map request
    -------------------------------------------------------------------------->
    <%
       boolean newSession = false;

       String dataSrc = request.getParameter("datasrc");
       // retrieve mapviewer client handle from session
       MapViewer mv = (MapViewer) session.getAttribute("mvhandle");
       MapViewer clkmv = (MapViewer) session.getAttribute("clkmvhandle") ;
       
       String clickableTheme = request.getParameter("clickabletheme") ;
       /*if(clickableTheme!=null && clickableTheme.trim().length()==0)
        clickableTheme = null ;*/

       if(mv==null || request.getParameter("initflag")!=null)
       {
         if(request.getParameter("initflag")==null)
         { //session expired; sending user back to mapinit.jsp
    %>
           <B> Session Expired. </B> 
                 Please  go back to the <A href="mapinit.jsp">mapinit.jsp</A> page.
          <%  
           return;
         }

         //initializes MapViewer bean instance
	       newSession = true;
         String mvURL = request.getParameter("mvurl");
         String baseMap = request.getParameter("basemap");
         if(baseMap==null) baseMap = "demo_map";
         
         int width=500, height=375;
         String _width = request.getParameter("width") ;
         String _height = request.getParameter("height") ;         
         if(_width!=null && _height!=null)
         {
            try{
              width = Integer.parseInt(_width);
              height = Integer.parseInt(_height);
            }catch(Exception e){}
         }
         
         String _cx = request.getParameter("centerX"),   
                      _cy = request.getParameter("centerY"),   
          _size = request.getParameter("initsize");   
         double cx = -122.40, cy = 37.80, size = 1.5;
         if(_cx!=null && _cy!=null)
               {
           cx = Double.parseDouble(_cx);
                 cy = Double.parseDouble(_cy);
               }
               if(_size!=null)
                 size = Double.parseDouble(_size);

         // create a new mapviewer client handle
         mv = new MapViewer(mvURL); 
         mv.setDataSourceName(dataSrc);
         mv.setMapTitle("Oracle MapViewer Demo");
         mv.setAntiAliasing(true);
         mv.setImageFormat(MapViewer.FORMAT_PNG_URL);
         mv.setCenterAndSize(cx, cy, size); // initial center & size
         mv.addThemesFromBaseMap(baseMap);      // initial themes (from an existing base map)
         mv.setDeviceSize(new Dimension(width, height));
         session.setAttribute("mvhandle", mv);  // keep client handle in the session

         /* create a new mapviewer client handle for clickable theme.
          * This mapviewer client requests SVG fragment representation
          * of the selected theme from mapviewer server. The SVG 
          * fragment result is stored as a string, which is later
          * converted to HTML AREA definition.
          */
         clkmv = new MapViewer(mvURL); 
         clkmv.setDataSourceName(dataSrc);
         clkmv.setCenterAndSize(cx, cy, size); 
         // set the request type to svg layer fragment with styling and label info
         clkmv.setSVGFragmentType(MapViewer.SVG_STYLED_LAYERS_WITH_LABELS) ;
         // get result in device coordinate system
         clkmv.setSVGFragmentInDeviceCoord(true); 
         // initial themes (from an existing base map)
         clkmv.addThemesFromBaseMap(baseMap);     
         clkmv.setDeviceSize(new Dimension(width, height));
         String[] themes = clkmv.getThemeNames() ;
         // disable all themes, because there is no theme selected as
         // the clickable theme at the beginning.
         for(int i=0; i<themes.length; i++)
          clkmv.setThemeEnabled(false, themes[i]);
         session.setAttribute("clkmvhandle", clkmv); 
        }

        if(clickableTheme!=null)
        {
          // Enable the selected clickable theme only
          String[] themes = clkmv.getThemeNames() ;
          for(int i=0; i<themes.length; i++)
          {
            // Disable any other theme that might have been enabled
            clkmv.setThemeEnabled(false, themes[i]);
            // Set the minimal distance(in pixel) between any two shape
            // points in the area definition. This is used to generalize
            // the geometry to control the number of result coordinates. 
            clkmv.setThemeMinDistForSVG(themes[i], 2);
          }
          clkmv.setThemeEnabled(true, clickableTheme);
        }
        
        // enable only user selected themes
        String[] checkedThemes = request.getParameterValues("_mthemev_");
        if(checkedThemes!=null && checkedThemes.length>0)
        {
          mv.enableThemes(checkedThemes);        
        }

        String[][] info = null;  // stores identified feature attributes
        
        // process user request        
        String action = request.getParameter("action");
        String thmaction = request.getParameter("thmaction") ;
        
        if(action==null) action = "recenter";  // init to recenter
        if(thmaction==null) thmaction = "navigate" ;

        if(!newSession && 
           request.getParameter("clickX")!=null &&
           request.getParameter("clickX").length()>0) // user clicked on map
        {
          int x = Integer.parseInt(request.getParameter("clickX"));
          int y = Integer.parseInt(request.getParameter("clickY"));
                    
          if(action.equals("recenter"))
          {
            mv.setBackgroundImageURL(null);
            mv.pan(x,y);
            clkmv.pan(x,y) ;
          }
          else if(action.equals("zoomin"))
          { mv.setBackgroundImageURL(null);
            mv.zoomIn(x,y, 2.0);
            clkmv.zoomIn(x,y,2.0) ;
          }
          else if(action.equals("zoomout"))
          { mv.setBackgroundImageURL(null);
            mv.zoomOut(x,y, 2.0);
            clkmv.zoomOut(x,y, 2.0) ;
          }
          else if(action.equals("identify"))
          {
            //mark where user clicked upon on the map
            Point2D p2 = mv.getUserPoint(x,y);
            // srid is set to 8307 since that is the srid of our demo dataset.
            mv.addPointFeature(p2.getX(), p2.getY(), 8307, 
                               "M.CYAN PIN",  //a Pin marker style
                               null, null, null);
            /* For identifying purpose: use a previously generated map as backdrop
               to avoid requerying & rendering all the base themes.
             */
            if(mv.getBackgroundImageURL()==null)
              mv.setBackgroundImageURL(mv.getGeneratedMapImageURL());
            String[] enabledThemes = mv.getEnabledThemes();
            mv.setAllThemesEnabled(false);  //temporarily disable all themes
            
            mv.run();  // re-issue map request to draw a pin marker
            //simply (but maybe incorrectly) re-enable all themes
            mv.enableThemes(enabledThemes);  
            try{
              //retrieve the actual attributes of the feature being identified
              String[] colsToSelect = new String[]{"City", "Pop90 Population", "State_abrv state"};
              info = mv.identify(dataSrc, 
                                 "cities",      //which table
                                 colsToSelect,  //which columns to identify
                                 "location",    //which geometry column
                                 8307,          //srid of the geometry column
                                 x,y            //mouse click position on screen
                                );
            }catch(Exception e)
            {
              e.printStackTrace(System.err);
            }
          }
          
          mv.removeAllPointFeatures();  // remove any marker from previous identfy
        }
        else
        {
          mv.run();  
          clkmv.run();
        }

    %>


      <!----------------------------------------------------------------------
              Generate the result web page with map image and controls
       ----------------------------------------------------------------------->
      <table border="1"  cellpadding="0"  cellspacing="0">
      <tr>
        <td valign="center">
          <% 
            // Get the HTML AREA definition of the selected theme
            String areas = clkmv.getThemeAsHTMLAreas(clickableTheme, true) ;
          %>
          <MAP NAME="mvmap">
            <%= areas==null?"":areas %>
            <area shape="rect" 
             coords="0,0,<%=mv.getDeviceSize().width%>,<%=mv.getDeviceSize().height%>"
             onclick="return mapClicked(event);">
          </MAP>
          <div id="infowindowdv"></div>
          <script language="JavaScript1.2">
          <!--
            if(!document.all)
              document.write('<div id="map_container" style="position: relative;">');
          //-->
          </script>
          <script type="text/javascript" language="JavaScript" src="mvscript.js"></script>
          <img src="<%=mv.getGeneratedMapImageURL() %>" 
               width="<%=mv.getDeviceSize().width%>" 
               height="<%=mv.getDeviceSize().height%>" 
               border="0"
               usemap="#mvmap"
          >
          <script language="JavaScript1.2">
          <!--
            if(!document.all)
              document.write('</div>');
          //-->
          </script>
        </td>
      <form action="dmap.jsp" name="mapform" method="post">
        <td valign="top">
            <FONT color="#449922" size="+1"> <B>Theme list:</B> </FONT><br>
            <% String[] ts = mv.getThemeNames();
               for(int i=0; i<ts.length; i++)
               {%>
                 <input type="checkbox" name="_mthemev_" 
                        value="<%=ts[i]%>" 
                        <%=mv.getThemeEnabled(ts[i])?"checked":""%> > <%= ts[i] %><br>
             <%}%>
            <BR>
            <FONT color="#449922" size="+1"> <B>Select clickable theme:</B></FONT><br>
            <select name="clickabletheme">
                 <option value="">NONE</option>
            <% 
               for(int i=0; i<ts.length; i++)
               {%>
                 <option value="<%= ts[i] %>" <%=ts[i].equals(clickableTheme)?"selected":"" %>><%= ts[i] %></option>
             <%}%>
            </select>
        </td>
      </tr>
      <tr>
        <td> 
          <FONT color="#449922"><B>Click on the clickable theme to:</B></FONT>
          <input type="radio" name="thmaction" value="navigate"   <%= thmaction.equals("navigate")?"checked":""%> ><B>Navigate on the map</B>
          <input type="radio" name="thmaction" value="newwindow" <%= thmaction.equals("newwindow")?"checked":""%> ><B>Open a new window</B>          
          <br>
          <FONT color="#449922"><B>Click on the map to:</B></FONT>
          <input type="radio" name="action" value="zoomin"   <%= action.equals("zoomin")?"checked":""%> ><B>Zoom In</B>
          <input type="radio" name="action" value="recenter" <%= action.equals("recenter")?"checked":""%> ><B>Re-center</B>
          <input type="radio" name="action" value="zoomout"  <%= action.equals("zoomout")?"checked":""%> ><B>Zoom Out</B>
          <input type="radio" name="action" value="identify"  <%= action.equals("identify")?"checked":""%> ><B>Identify</B>
        </td>
        <td align="right"> <input type="submit" alt="submit map request"  value="Submit"> </td>
      </tr>
      <tr>
        <td colspan="2">
          <I>Datasource</I>[<B><%=mv.getDataSourceName()%></B>]
          <I>Center</I>[<B><%=mv.getRequestCenter().getX()+", "+mv.getRequestCenter().getY()%></B>]
          <I>Scale</I>[<B><%=mv.getMapScale()%></B>]
        </td>
      </tr>
      <tr>
      <input type="hidden" name="mvurl" value="<%=mv.getServiceURL()%>" >
      <input type="hidden" name="datasrc" value="<%=mv.getDataSourceName()%>" >
      <input type="hidden" id="clickX" name="clickX" value="" >
      <input type="hidden" id="clickY" name="clickY" value="" >
      </tr>
      </table>
      </form>
      <br>
      <font size="-1"> <I> To "identify", click on any circle representing a city.</I></font>
      <br><br>
      <font size="-1"> <I> To enable dynamic info tips, select a polygon or point 
      theme from "clickable theme" list and click "Submit".  
      After the map is refreshed, move the mouse over the theme and you'll see 
      dynamic info tips. The dynamic info tip is implemeneted using HTML AREA/MAP.
      Circle, rectangle and polygon are the only shapes that HTML AREA suppots.
      The current dynamic info implementation only works with point or polygon themes.</I></font>

      <% // display identified feature attributes if present
      if(info!=null && info.length>0)
      {
        out.print("<CENTER> <TABLE border=\"1\">\n");        
        for(int i=0; i<info.length; i++)
        {
          if(i==0) out.print("<TR BGCOLOR=\"#FFFF00\">");
          else out.print("<TR>\n");
          String[] row = info[i];
          for(int k=0; k<row.length; k++)
            out.print("<TD>"+row[k]+"</TD>");
          out.print("</TR>\n");
        }
        out.print("</TABLE></CENTER>");
      }
      %>
      
      </body>
</html>
