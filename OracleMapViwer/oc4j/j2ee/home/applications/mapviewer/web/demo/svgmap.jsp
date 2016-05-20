<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="java.io.*"%>
<%@ page import="java.net.*"%>
<%@ page import="java.util.*"%>
<%@ page import="oracle.lbs.mapclient.*"%>
<%@ page import="oracle.lbs.mapcommon.MapResponse"%>
<%@ page import="java.awt.Dimension"%>
<%
  String sizeStr = request.getParameter("size") ;
  String scaleStr = request.getParameter("scale") ;
  String cxStr = request.getParameter("centerX") ;
  String cyStr = request.getParameter("centerY") ;
  String baseMap = request.getParameter("basemap");
  String _width = request.getParameter("width") ;
  String _height = request.getParameter("height") ;
  String _infoon = request.getParameter("infoon") ;
  String action = request.getParameter("action");
  String linePathStr = request.getParameter("linepath");
  boolean infoon = _infoon==null?true:(_infoon.equalsIgnoreCase("yes")) ;
  boolean recenter = false ;
  boolean zoomin = false ;
  boolean straightdist = false ;
  boolean polylinedist = false ;

  if("zoomin".equals(action))
    zoomin = true ;
  else if("recenter".equals(action))
    recenter = true ;
  else if("straightdist".equals(action))
    straightdist = true ;
  else if("polylinedist".equals(action))
    polylinedist = true ;
    
  int width = 640 ;
  int height = 480 ;
  if(_width!=null && _height!=null)
  {
    try
    {
      width = Integer.parseInt(_width) ;
    }
    catch(Exception e){}
    try
    {
      height = Integer.parseInt(_height) ;
    }
    catch(Exception e){}
  }
  if(baseMap==null) baseMap = "demo_map";

  double size = 0.02 ;
  try
  {
    size = Double.parseDouble(sizeStr) ;
  }
  catch(Exception e){}
  
  double scale = 2 ;
  try
  {
    scale = Double.parseDouble(scaleStr) ;
  }
  catch(Exception e){}
  
  double cx = -122.2615 ;
  try
  {
    cx = Double.parseDouble(cxStr) ;
  }
  catch(Exception e){}

  double cy = 37.5266 ;
  try
  {
    cy = Double.parseDouble(cyStr) ;
  }
  catch(Exception e){}
  
  String dataSrc = request.getParameter("datasrc");
  boolean newSession = false;

  // retrieve mapviewer client handle from session
  MapViewer mv = (MapViewer) session.getAttribute("mvhandle");
  boolean sessionExpired = false ;

  if(mv==null || request.getParameter("initflag")!=null)
  {
    if(request.getParameter("initflag")==null)
      sessionExpired = true ;
    else
    {
      //initializes MapViewer bean instance
      newSession = true;
      String mvURL = request.getParameter("mvurl");
  
      // create a new mapviewer client handle
      mv = new MapViewer(mvURL); 
      mv.setDataSourceName(dataSrc);
      mv.setImageFormat(MapResponse.FORMAT_SVG_URL);
      /* the javascript function svgClicked will be called when the svg map
         is clicked. svgClicked is defined in this page, it recenters or zoomins
         the map. */
      mv.setSVGOnClick("svgClicked") ;  
      /* initial themes (from an existing base map) */
      mv.addThemesFromBaseMap(baseMap); 
      mv.setSVGZoomLevels(3);
      /* disable the builtin navigation bar */
      mv.setShowSVGNavBar(false) ;
      mv.setMapTitle("  ");
      mv.setMapLegend(
      "<legend bgstyle=\"fill:#ffffff;stroke:#ff0000\" profile=\"MEDIUM\" position=\"SOUTH_EAST\">"+
      "    <column>"+
      "      <entry text=\"Map Legend\" is_title=\"true\" />"+
      "      <entry style=\"M.CITY HALL 3\" text=\"cities\" />"+
      "      <entry style=\"M.CITY HALL 4\" text=\"big cities\" />"+
      "      <entry style=\"L.PH\" text=\"interstate highway\" />"+
      "    </column></legend>");
      mv.setDeviceSize(new Dimension(width, height));
    	ScaleBarDef scaleBar = new ScaleBarDef();
      scaleBar.setMode("DUAL_MODES");  //or METRIC_MODE, US_MODE
      scaleBar.setLabelHaloSize(2.5f);
      mv.setScaleBar(scaleBar);
      session.setAttribute("mvhandle", mv);  // keep client handle in the session
    }
  }
  String themes[] = new String[0] ;
  if(!sessionExpired)
  {
    themes = mv.getThemeNames() ;
    mv.setCenter(cx, cy);
    mv.setSize(size);
    mv.setSVGZoomRatio(scale) ;
    mv.setSVGShowInfo(infoon);
    String[] checkedThemes = request.getParameterValues("_mthemev_");
    if(checkedThemes!=null && checkedThemes.length>0)
    {
      Hashtable checked = new Hashtable(30) ;
      for(int i=0; i<checkedThemes.length; i++)
        checked.put(checkedThemes[i], checkedThemes[i]) ;
      for(int i=0; i<themes.length; i++)
      {
        if(checked.get(themes[i])!=null)
          mv.setThemeVisibleInSVG(themes[i], true);        
        else
          mv.setThemeVisibleInSVG(themes[i], false) ;
      }
    }
    mv.run() ;
  }
%>
<html>
<HEAD>
<script type="text/javascript"> 
var mapSize = <%= size %> ;
var scale = <%= scale %> ;
var width=<%= width%> ;
var height=<%= height%> ;
var rcx = <%= cx %> ;
var rcy = <%= cy %> ;
var cx = <%= width/2%> ;
var cy = <%= height/2%> ;
var disabled = true ;
var themeVisibleArray = new Array(<%=themes.length%>) ;
var info = <%= infoon %> ;
var legend = false ;
var clickZoomin = <%= zoomin %> ;
var clickRecenter = <%= recenter %> ;
<%
  for(int i=0; i<themes.length; i++)
  {
%>
themeVisibleArray[<%=i%>]='<%=mv.getThemeVisibleInSVG(themes[i])%>' ;
<%
  }
%>
// set the hidden input fields, these values are useful when a new map is needed
function setHiddenInputs()
{
  form.size.value= mapSize ;
  form.scale.value= scale ;
  form.centerX.value= rcx ;
  form.centerY.value= rcy ;
  form.linepath.value= svgmap.getLinePath() ;
}
function enableSimpleDistance()
{
  svgmap.enableSimpleLineDrawing() ;
  svgmap.showDistance("METRIC");
}
function enablePolylineDistance()
{
  svgmap.enablePolylineDrawing() ;
  svgmap.showDistance("METRIC");
}
function enableClickZoominNew()
{
  svgmap.disableSimpleLineDrawing();
  svgmap.disablePolylineDrawing();
  svgmap.hideDistance();
  enableClickZoomin();
}
function enableClickRecenterNew()
{
  svgmap.disableSimpleLineDrawing();
  svgmap.disablePolylineDrawing();
  svgmap.hideDistance();
  enableClickRecenter();
}
function init()
{
  enableButtons();
  svgmap.hideMouseCoord();
  svgmap.showMouseCoord();
<%
  if(straightdist)
  {
%>
  enableSimpleDistance();
<%
  }
  if(polylinedist)
  {
%>
  enablePolylineDistance();
<%
  }
  if(linePathStr!=null&&linePathStr.length()>0&&!linePathStr.equals("null"))
  {
%>
  var path = '<%=linePathStr%>' ;
  svgmap.setLinePath(path.split(","));
  svgmap.showDistance("METRIC");
<%
  }
%>
}
</script>
<script type="text/javascript" src="svgnav.js"></script>
</head>
<body onLoad="init()">
<!-------------------------------------------------------------------------
                Output page header (stuff you really dont need)
-------------------------------------------------------------------------->
<span style="width:100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
  <tr>
    <td>
      <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
        <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td></tr>
        <tr><td valign="bottom"><A href=".."><img src="../myicons/mapviewer.gif" border="0" /></A>
           <FONT color="#449922" size="+2"><b>JSP Demo (with mapclient lib)</b></FONT> <FONT size="-1"><A href="svgmap.jsp.txt">source file</A></FONT></td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <table cellpadding="0" cellspacing="0" border="0" summary="">
        <tr><td align="center"><img src="../myicons/t.gif" border="0" /></td></tr>
      </table> 
    </td>
  </tr>
</table>
<hr>
</span>

<!-------------------------------------------------------------------------
                  Process the incoming map request
-------------------------------------------------------------------------->
<%
  if(sessionExpired)
  {
%>
<B> Session Expired. </B> 
Please  go back to the <A href="mapinit.jsp">mapinit.jsp</A> page.
<%
    return ;
  }
%>
<!----------------------------------------------------------------------
              Generate the result web page with map image and controls
----------------------------------------------------------------------->
<table border="1"  cellpadding="0"  cellspacing="0">
  <tr>
    <td valign="center">
      <table>
        <tr>
          <td>
            <table cellSpacing=0 cellPadding=0 border=0>
              <tbody>
                <tr bgcolor="#666699">
                  <td><input type="image" src="images/northwest.gif" onclick="javascript:panning('NW');" alt="pan northwest"/></td>
                  <td align="center"><input type="image" src="images/north.gif" onclick="javascript:panning('N');" alt="pan north"/></td>
                  <td><input type="image" src="images/northeast.gif" onclick="javascript:panning('NE');" alt="pan northeast"/></td>
                </tr>
                <tr bgcolor="#666699">
                  <td><input type="image" src="images/west.gif" onclick="javascript:panning('W');" alt="pan west"/></td>
                  <td><embed id="map" src="<%= mv.getGeneratedMapImageURL() %>" name='svgmap' type='image/svg+xml' width="<%= width %>" height="<%= height %>"></embed></td>
                  <td><input type="image" src="images/east.gif" onclick="javascript:panning('E');" alt="pan east"/></td>
                </tr>
                <tr bgcolor="#666699">
                  <td><input type="image" src="images/southwest.gif" onclick="javascript:panning('SW');" alt="pan southwest"/></td>
                  <td align="center"><input type="image" src="images/south.gif" onclick="javascript:panning('S');" alt="pan south"/></td>
                  <td><input type="image" src="images/southeast.gif" onclick="javascript:panning('SE');" alt="pan southeast"/></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center">
            <input type="image" id="zminimage" src="images/zoomin.gif" onclick="zoomin()"/>
            <input type="image" id="zmoutimage" src="images/zoomout.gif" onclick="zoomout()"/>
            <input type="image" id="infoimage" src="<%= (infoon?"images/infoon.gif":"images/info.gif") %>" onclick="switchInfoStatus()"/>
            <input type="image" id="legendimage" src="images/legend.gif" onclick="switchLegendStatus()"/><br>
          </td>
        </tr>
        <tr>
          <td>
            <FONT color="#449922"><B>Click on the map to:</B></FONT>
              <FORM name="form" action=svgmap.jsp method=post onsubmit="javascript:disableButtons(true)">
              <input type="radio" name="action" value="zoomin" <%= zoomin?"checked":"" %> onclick="enableClickZoominNew()" ><B>Zoom In</B>
              <input type="radio" name="action" value="recenter" <%= recenter?"checked":"" %> onclick="enableClickRecenterNew()" ><B>Re-center</B>
              <input type="radio" name="action" value="straightdist" <%= straightdist?"checked":"" %> onclick="enableSimpleDistance()" ><B>Measure straight distance</B>
              <input type="radio" name="action" value="polylinedist" <%= polylinedist?"checked":"" %> onclick="enablePolylineDistance()" ><B>Measure polyline distance</B>
          <td>
        </tr>
      </table>
    </td>
    <td valign="top">
      <FONT color="#449922" size="+1"> <B>Theme list:</B> </FONT><br>
<% 
  String[] ts = mv.getThemeNames();
  for(int i=0; i<ts.length; i++)
  {
%>
         <input type="checkbox" name="_mthemev_" 
           value="<%=ts[i]%>" onclick="hideTheme('<%=ts[i]%>', <%=i%>)" 
         <%=mv.getThemeVisibleInSVG(ts[i])?"checked":""%> > <%= ts[i] %><br>
<%
  }
%>
    </td>
  </tr>
  <tr heigth="90">
    <td> 
      <input type="hidden" name="width" value="<%=width%>"/>
      <input type="hidden" name="height" value="<%=height%>"/>                              
      <input type="hidden" name="centerX" value=""/>
      <input type="hidden" name="centerY" value=""/>
      <input type="hidden" name="size" value=""/>
      <input type="hidden" name="scale" value=""/>         
      <input type="hidden" name="infoon" value="<%=(infoon?"yes":"no")%>" />
      <input type="hidden" name="linepath" value=""/>         
    </td>
    <td align="right"></td>
  </tr>
  <tr>
    <td colspan="2">
      <I>Datasource</I>[<B><%=mv.getDataSourceName()%></B>]
      <I>Center</I>[<B><%=mv.getRequestCenter().getX()+", "+mv.getRequestCenter().getY()%></B>]
      <I>Scale</I>[<B><%=mv.getMapScale()%></B>]
    </td>
  </tr>
</table>
<input type="hidden" name="mvurl" value="<%=mv.getServiceURL()%>" >
<input type="hidden" name="datasrc" value="<%=mv.getDataSourceName()%>" >
</form>
<br>
<A HREF="http://www.adobe.com/svg/viewer/install/main.html"><IMG BORDER="0" HEIGHT="31" WIDTH="88" SRC="../myicons/svgdownload.gif" ALT="Download SVG Viewer"></A>
</body>
</html>
