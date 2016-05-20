<%-- Copyright (C) Oracle Corporation 2002. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   lqian       08/27/02 - created       --%>

<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page session="true" %>

<%
  String dataSrc = request.getParameter("datasrc");
  String mapTileLayer = request.getParameter("mapTileLayer");
  String width = request.getParameter("width") ;
  String height = request.getParameter("height") ;         
  String cx = request.getParameter("centerX");
  String cy = request.getParameter("centerY");   
  String zoomLevel = request.getParameter("zoomLevel");   
  int srid = 0 ;
  try
  {
    srid = Integer.parseInt(request.getParameter("srid"));
  }
  catch(Exception e){}
%>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>
Oracle Maps Demo Page
</title>
</head>
<body <%= mapTileLayer!=null?"onload='showMap()'":""%>>
   <!-------------------------------------------------------------------------
                  Output page header
    -------------------------------------------------------------------------->
      <span style="width:100%">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
      <tr><td>
          <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
            <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td></tr>
            <tr><td valign="bottom"><a href="../index.html"> <img src="../myicons/mapviewer.gif" border="0" /></a><FONT color="#449922" size="+2"><b>Oracle Maps Demo</b></FONT> <FONT size="-1"></td></tr>
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

<%
  if(mapTileLayer==null)
  {
%>
   <!-------------------------------------------------------------------------
                  Process the incoming map request
    -------------------------------------------------------------------------->
         <form action="omaps.jsp" name="urlform" method="get">
           <table>
           <tr>
              <Td><B>Datasource:</B>: </Td>
              <td><input type="text" name="datasrc" value="mvdemo" size="48" maxlength="48"></td>
          </tr>
           <tr>
              <Td><B>Map Tile Layer:</B>: </Td>
              <td><input type="text" name="mapTileLayer" value="demo_map" size="48" maxlength="48"></td>
          </tr>
           <tr>
              <Td><B>Center X:</B>: </Td>
              <td><input type="text" name="centerX" value="-122.40" size="48" maxlength="48"></td>
          </tr>
          <tr>
              <Td><B>Center Y:</B>: </Td>
              <td><input type="text" name="centerY" value="37.80" size="48" maxlength="48"></td>
          </tr>
          <tr>
              <Td><B>Map SRID:</B>: </Td>
              <td><input type="text" name="srid" value="8307" size="48" maxlength="48"></td>
          </tr>
          <tr>
              <Td><B>Initial Zoom Level:</B>: </Td>
              <td><input type="text" name="zoomLevel" value="4" size="10" maxlength="10"></td>
          </tr>
          <tr>
              <Td><B>Map width:</B>: </Td>
              <td><input type="text" name="width" value="800" size="48" maxlength="48"></td>
          </tr>
          <tr>
              <Td><B>Map height:</B>: </Td>
              <td><input type="text" name="height" value="600" size="48" maxlength="48"></td>
          </tr>
          <tr> <td> <input type="submit" name="submit" value="Proceed..."> </td></tr>
          </table>
          </form>
<%
  }
  else
  {
%>
<script language="Javascript" src="jslib/oraclemaps.js"></script>

<script language=javascript>
  var mapview;
  var baseURL;
  function showMap()
  {	
    baseURL  = "http://"+document.location.host+"/mapviewer";
    var mapCenterLon = <%=cx%>;
    var mapCenterLat = <%=cy%>;
    var mapZoom      = <%=zoomLevel%>;
<%
    if(srid>0)
    {
%>
    var mpoint = MVSdoGeometry.createPoint(mapCenterLon,mapCenterLat,<%=srid%>);
<%
    }
    else
    {
%>
    var mpoint = MVSdoGeometry.createPoint(mapCenterLon,mapCenterLat);
<%
    }
%>
    mapview = new MVMapView(document.getElementById("map"), baseURL);
    mapview.addMapTileLayer(new MVMapTileLayer("<%=dataSrc%>.<%=mapTileLayer%>")); 
    mapview.setCenter(mpoint); 
    mapview.setZoomLevel(mapZoom);    
    mapview.addNavigationPanel('WEST');
    mapview.addEventListener("mouse_click", mouseclick);
    mapview.display();  			
  
    function mouseclick()
    {
      var mouseLoc = mapview.getMouseLocation();
      var latLngStr = 'zoom: '+mapview.getZoomLevel()+' <p>mouse location:' + mouseLoc.getPointX() + ', ' + mouseLoc.getPointY() ;
      document.getElementById("message").innerHTML = latLngStr;
    }
    
  }
  
</script>
<div id="map" style="width:<%=width%>; height:<%=height%>"></div><br>
<div id="message" style="width:500; height:30"></div><br>
<%
  }
%>
<p id="myzoom"></p>
</body>
</html>
