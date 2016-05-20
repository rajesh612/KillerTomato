<%-- Copyright (C) Oracle Corporation 2002. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   jxyang      06/24/05 - created       --%>

<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page session="true" %>
<%@ page import="java.util.Enumeration" %>
<%@ page import="oracle.lbs.mapclient.MapViewer" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>
Map Cache Server JSP Demo Init Page
</title>
</head>
<body>

   <!-------------------------------------------------------------------------
                  Output page header
    -------------------------------------------------------------------------->
      <span style="width:100%">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
      <tr><td>
          <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
            <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td></tr>
            <tr><td valign="bottom"><a href="index.html"> <img src="../myicons/mapviewer.gif" border="0" /> </a>
               <FONT color="#449922" size="+2"><b>Map Cache Server JSP Demo</b></FONT> <FONT size="-1"> <A href="mapinit.jsp.txt">source file</A></FONT></td></tr>
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
   String mcsURL = request.getParameter("mcsurl");

   if(mcsURL==null || mcsURL.length()==0)  //ask for URL if not present
   {
     mcsURL = "http://"+ request.getServerName()+":"+request.getServerPort()+
          request.getContextPath()+"/mcserver";
    
%>
    <form action="mcsdemo.jsp" name="urlform" method="get">
     <table>
     <tr>
        <td><B>Type Map Cache Server URL</B>: </td>
        <td><input type="text" name="mcsurl" size="48" value="<%=mcsURL%>"></td>
     </tr>      
     <tr>
        <Td><B>Map Source:</B>: </Td>
        <td><input type="text" name="mapsrc" value="ext_elocation" size="48" maxlength="48"></td>
    </tr>
     <tr>
        <Td><B>Center X:</B>: </Td>
        <td><input type="text" name="cx" value="-122.40" size="48" maxlength="48"></td>
    </tr>
        <Td><B>Center Y:</B>: </Td>
        <td><input type="text" name="cy" value="37.80" size="48" maxlength="48"></td>
    </tr>
    </tr>
        <Td><B>Map width:</B>: </Td>
        <td><input type="text" name="width" value="500" size="48" maxlength="48"></td>
    </tr>
    </tr>
        <Td><B>Map height:</B>: </Td>
        <td><input type="text" name="height" value="400" size="48" maxlength="48"></td>
    </tr>
    <tr> <td> <input type="submit" name="submit" value="Proceed..."> </td></tr>
    </table>

    </form>
<%
    return;        
  }
%>
   <!-------------------------------------------------------------------------
                  Process the incoming map request
    -------------------------------------------------------------------------->
<%
  int MAX_ZOOM_LEVEL=7 ;
  int MIN_ZOOM_LEVEL=0 ;
  String mapSrc = request.getParameter("mapsrc");        
  String centerXStr = request.getParameter("cx");
  String centerYStr = request.getParameter("cy");
  String zoomLevelStr = request.getParameter("zoomlevel");
  String widthStr = request.getParameter("width");
  String heightStr = request.getParameter("height");
  int zoomLevel = 5 ;
  double zoomLevelScales[] = {21,70,210,520,2100,7000,21040,52600} ;
  
  try
  {
    zoomLevel = Integer.parseInt(zoomLevelStr);
  }
  catch(Exception e)
  {
  }
  
  if(zoomLevel>MAX_ZOOM_LEVEL)
    zoomLevel = MAX_ZOOM_LEVEL ;
  else if(zoomLevel < MIN_ZOOM_LEVEL)
    zoomLevel = MIN_ZOOM_LEVEL ;
    
  int width = 600 ;
  int height = 500 ;
  if(widthStr!=null && widthStr!=null)
  {
    try
    {
      width = Integer.parseInt(widthStr);
      height = Integer.parseInt(heightStr);
    }catch(Exception e){}
  }
  double cx = -122.40, cy = 37.80 ;
  if(centerXStr!=null && centerYStr!=null)
  {
    cx = Double.parseDouble(centerXStr);
    cy = Double.parseDouble(centerYStr);
  }
  
  // process user request
  String action = request.getParameter("action");
  if(action==null) action = "recenter";  // init to recenter
  
  if(request.getParameter("userClick.x")!=null) // user clicked on map
  {
    int x = Integer.parseInt(request.getParameter("userClick.x"));
    int y = Integer.parseInt(request.getParameter("userClick.y"));

    cx = cx +(x-width/2)/zoomLevelScales[zoomLevel] ;
    cy = cy -(y-height/2)/zoomLevelScales[zoomLevel] ;
    
    if(action.equals("recenter"))
    {
    }
    else if(action.equals("zoomin"))
    {
      if(zoomLevel>=MAX_ZOOM_LEVEL)
        zoomLevel = MAX_ZOOM_LEVEL ;
      else
        zoomLevel ++ ;
    }
    else if(action.equals("zoomout"))
    {
      if(zoomLevel<=MIN_ZOOM_LEVEL)
        zoomLevel = MIN_ZOOM_LEVEL ;
      else
        zoomLevel -- ;
    }
  }
  String mapURL = mcsURL + "?request=getmap&mapsource="+mapSrc+
                  "&format=PNG&zoomlevel="+zoomLevel+"&cx="+cx+
                  "&cy="+cy+"&width="+width+"&height="+height ;
%>


  <!----------------------------------------------------------------------
          Generate the result web page with map image and controls
   ----------------------------------------------------------------------->
  <form action="mcsdemo.jsp" name="mapimage" method="post">
  <table border="1"  cellpadding="0"  cellspacing="0">
  <tr>
    <td valign="center">
      <input type="image" border="0"
             src="<%=mapURL%>" 
             name="userClick" 
             width="<%=width%>" 
             height="<%=height%>" 
             alt="Click on the map for selected action"
      >
    </td>
  </tr>
  <tr>
    <td> <FONT color="#449922"><B>Click on the map to:</B></FONT>
      <input type="radio" name="action" value="zoomin"   <%= action.equals("zoomin")?"checked":""%> ><B>Zoom In</B>
      <input type="radio" name="action" value="recenter" <%= action.equals("recenter")?"checked":""%> ><B>Re-center</B>
      <input type="radio" name="action" value="zoomout"  <%= action.equals("zoomout")?"checked":""%> ><B>Zoom Out</B>
    </td>
  </tr>
  <tr>
  <input type="hidden" name="mcsurl" value="<%=mcsURL%>" >
  <input type="hidden" name="mapsrc" value="<%=mapSrc%>" >
  <input type="hidden" name="zoomlevel" value="<%=zoomLevel%>" >
  <input type="hidden" name="cx" value="<%=cx%>" >
  <input type="hidden" name="cy" value="<%=cy%>" >
  <input type="hidden" name="width" value="<%=width%>" >
  <input type="hidden" name="height" value="<%=height%>" >
  </tr>
  </table>
  </form>
</body>
</html>
