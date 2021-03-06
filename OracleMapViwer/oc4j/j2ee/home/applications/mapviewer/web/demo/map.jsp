<%-- Copyright (C) Oracle Corporation 2002. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   lqian       08/27/02 - created       --%>

<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page session="true" %>

<%@ page import="java.util.Enumeration" %>
<%@ page import="java.awt.geom.Point2D" %>
<%@ page import="java.awt.Dimension" %>
<%@ page import="oracle.lbs.mapclient.MapViewer" %>
<%@ page import="oracle.lbs.mapclient.ScaleBarDef" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title>
MapViewer JSP demo (using mapclient library)
</title>
</head>
<body>
   <!-------------------------------------------------------------------------
                  Output page header (stuff you really dont need)
    -------------------------------------------------------------------------->
      <span style="width:100%">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
      <tr><td>
          <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
            <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td></tr>
            <tr><td valign="bottom"><A href=".."><img src="../myicons/mapviewer.gif" border="0" /></A>
               <FONT color="#449922" size="+2"><b>JSP Demo (with mapclient lib)</b></FONT> <FONT size="-1"><A href="map.jsp.txt">source file</A></FONT></td></tr>
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

         String srid = request.getParameter("srid") ;  

         // create a new mapviewer client handle
         mv = new MapViewer(mvURL); 
         mv.setDataSourceName(dataSrc);
         mv.setMapTitle("Oracle MapViewer Demo");
         mv.setAntiAliasing(true);
         mv.setImageFormat(MapViewer.FORMAT_PNG_URL);
         mv.setCenterAndSize(cx, cy, size); // initial center & size
         mv.addThemesFromBaseMap(baseMap);      // initial themes (from an existing base map)
         mv.setDeviceSize(new Dimension(width, height));

         //setup scale bar (since version 11)
	 ScaleBarDef scaleBar = new ScaleBarDef();
         scaleBar.setMode("DUAL_MODES");  //or METRIC_MODE, US_MODE
         scaleBar.setLabelHaloSize(2.5f);
         mv.setScaleBar(scaleBar);

         if(srid != null)
         {
             try
             {
                int SRid = Integer.parseInt(srid);
                mv.setMapRequestSRID(SRid);
             } catch(Exception e) {}
         }
         session.setAttribute("mvhandle", mv);  // keep client handle in the session
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
        if(action==null) action = "recenter";  // init to recenter

        if(!newSession && request.getParameter("userClick.x")!=null) // user clicked on map
        {
          int x = Integer.parseInt(request.getParameter("userClick.x"));
          int y = Integer.parseInt(request.getParameter("userClick.y"));
                    
          if(action.equals("recenter"))
          { mv.setBackgroundImageURL(null);
            mv.pan(x,y);
          }
          else if(action.equals("zoomin"))
          { mv.setBackgroundImageURL(null);
            mv.zoomIn(x,y, 2.0);
          }
          else if(action.equals("zoomout"))
          { mv.setBackgroundImageURL(null);
            mv.zoomOut(x,y, 2.0);
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
          mv.run();  

    %>


      <!----------------------------------------------------------------------
              Generate the result web page with map image and controls
       ----------------------------------------------------------------------->
      <form action="map.jsp" name="mapimage" method="post">
      <table border="1"  cellpadding="0"  cellspacing="0">
      <tr>
        <td valign="center">
          <input type="image" border="0"
                 src="<%=mv.getGeneratedMapImageURL() %>" 
                 name="userClick" 
                 width="<%=mv.getDeviceSize().width%>" 
                 height="<%=mv.getDeviceSize().height%>" 
                 alt="Click on the map for selected action"
          >
        </td>
        <td valign="top">
            <FONT color="#449922" size="+1"> <B>Theme list:</B> </FONT><br>
            <% String[] ts = mv.getThemeNames();
               for(int i=0; i<ts.length; i++)
               {%>
                 <input type="checkbox" name="_mthemev_" 
                        value="<%=ts[i]%>" 
                        <%=mv.getThemeEnabled(ts[i])?"checked":""%> > <%= ts[i] %><br>
             <%}%>
        </td>
      </tr>
      <tr>
        <td> <FONT color="#449922"><B>Click on the map to:</B></FONT>
          <input type="radio" name="action" value="zoomin"   <%= action.equals("zoomin")?"checked":""%> ><B>Zoom In</B>
          <input type="radio" name="action" value="recenter" <%= action.equals("recenter")?"checked":""%> ><B>Re-center</B>
          <input type="radio" name="action" value="zoomout"  <%= action.equals("zoomout")?"checked":""%> ><B>Zoom Out</B>
          <input type="radio" name="action" value="identify"  <%= action.equals("identify")?"checked":""%> ><B>Identify</B>          
        </td>
        <td align="right"> <input type="submit" name="submit" alt="submit map request"  value="Submit"> </td>
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
      </tr>
      </table>
      </form>

      <font size="-1"> <I> to "identify", click on any circle representing a city</I></font>

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
