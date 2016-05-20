<%-- Copyright (C) Oracle Corporation 2002. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer Territory Management Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   jxyang      06/15/02 - created for mapviewer territory demo  --%>

<%@ page contentType="text/html;csetharset=windows-1252"%>
<%@ page import="java.io.*"%>
<%@ page import="java.net.*"%>
<%@ page import="java.util.*"%>
<%@ page import="oracle.lbs.mapclient.*"%>
<%@ page import="oracle.lbs.mapcommon.MapResponse"%>
<%@ page import="java.awt.Dimension"%>
<%@ page import="mapdemo.*"%>
<%
  String sizeStr = request.getParameter("size") ;
  String scaleStr = request.getParameter("scale") ;
  String cxStr = request.getParameter("centerX") ;
  String cyStr = request.getParameter("centerY") ;
  String scxStr = request.getParameter("scenterX") ;
  String scyStr = request.getParameter("scenterY") ;
  String _infoon = request.getParameter("infoon") ;
  String clickaction = request.getParameter("clickaction");
  String operation = request.getParameter("operation");
  String repId = request.getParameter("repid");
  String territory = request.getParameter("territory");
  String idlist = request.getParameter("idlist");
  String rectcoords = request.getParameter("rect");
  String polycoords = request.getParameter("polygon");
  String selection = request.getParameter("selection") ;
  String draftName = request.getParameter("draft") ;
  boolean infoon = _infoon==null?true:(_infoon.equalsIgnoreCase("yes")) ;
  boolean recenter = false ;
  boolean zoomin = false ;
  boolean isDraft = (!"mergedraft".equals(operation) && 
                     draftName!=null&&draftName.length()>0) ;

  if("zoomin".equals(clickaction) && operation.length()==0)
    zoomin = true ;
  else
    recenter = true ;
    
  int width = 500 ;
  int height = 400 ;
  
  double size = 2 ;
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
  double scx = 250 ;
  try
  {
    scx = Double.parseDouble(scxStr) ;
  }
  catch(Exception e){}

  double scy = 200 ;
  try
  {
    scy = Double.parseDouble(scyStr) ;
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
      /* initializes MapViewer bean instance */
      newSession = true;
      String mvURL = request.getParameter("mvurl");
  
      /* create a new mapviewer client handle */
      mv = new MapViewer(mvURL); 
      mv.setDataSourceName(dataSrc);
      mv.setImageFormat(MapResponse.FORMAT_SVG_URL);
      /* The javascript function svgClicked will be called when the svg map
         is clicked. svgClicked is defined in svgnav.js, it recenters or 
         zoomins the map based on the value of clickaction. */
      mv.setSVGOnClick("svgClicked") ;  
      /* initial themes (from an existing base map) */
      mv.addThemesFromBaseMap("terr_map"); 
      /* Set the number of zoom levels that the SVG map can be zoomed to 
         locally. */
      mv.setSVGZoomLevels(2);
      /* Disable the builtin navigation bar */
      mv.setShowSVGNavBar(false) ;
      mv.setMapTitle("  ");
      mv.setMapLegend(
      "<legend bgstyle=\"fill:#ffffff;stroke:#ff0000\" profile=\"MEDIUM\" position=\"SOUTH_EAST\">"+
      "    <column>"+
      "      <entry text=\"Map Legend\" is_title=\"true\" />"+
      "      <entry style=\"M.SMALL CIRCLE\" text=\"Customers\" />"+
      "      <entry style=\"M.CITY HALL 3\" text=\"Cities\" />"+
      "      <entry style=\"M.CITY HALL 4\" text=\"Big cities\" />"+
      "      <entry style=\"L.PH\" text=\"Interstate Highway\" />"+
      "      <entry style=\"L.MAJOR STREET\" text=\"Territory Boundary\" />"+
      "    </column></legend>");
      mv.setDeviceSize(new Dimension(width, height));
      session.setAttribute("mvhandle", mv);  // keep client handle in the session
    }
  }

  String themes[] = new String[0] ;
  ArrayList territoryList = null ;
  DBQueryBean queryBean = null ;
  if(!sessionExpired && !"inputterritory".equals(operation))
  {
    queryBean = (DBQueryBean)session.getAttribute("querybean");
    if(queryBean==null)
    {
      queryBean = new DBQueryBean() ;
      session.setAttribute("querybean", queryBean);
    }
    if("newterritory".equals(operation))
    {
      /* create a new territory */
      queryBean.createNewTerritory(repId, draftName);
      territoryList = queryBean.getTerritoryList(draftName) ;
    }
    else if("donothing".equals(operation))
    {
      territoryList = queryBean.getTerritoryList(draftName) ;
    }
    else
    {
      if("removeterritory".equals(operation))
        /* remove a territory */
        queryBean.removeTerritory(territory, draftName);
      territoryList = queryBean.getTerritoryList(draftName) ;
      if("realign".equals(operation))
      {
        /* realign territory boundaries */
        if(idlist!=null && idlist.trim().length()>0)
          queryBean.reAlignTerritoryByIDs(territory, idlist, draftName);
        else if(rectcoords!=null && rectcoords.trim().length()>0)
          queryBean.reAlignTerritoryByRect(territory, rectcoords, draftName) ;
        else if(polycoords!=null && polycoords.trim().length()>0)
          queryBean.reAlignTerritoryByPolygon(territory, polycoords, draftName) ;
      }
      else if("recenter".equals(operation))
      {
        double[] centerCoords = queryBean.getTerritoryCenter(territory, draftName) ;
        if(centerCoords!=null)
        {
          cx = centerCoords[0] ;
          cy = centerCoords[1] ;
        }
      }
      else if("mergedraft".equals(operation))
      {
        queryBean.mergeDraft(draftName);
      }
      themes = mv.getThemeNames() ;
      mv.setCenter(cx, cy);
      mv.setSize(size);
      mv.setSVGZoomRatio(scale) ;
      mv.setSVGShowInfo(infoon);
      if(isDraft)
      {
        mv.setThemeWorkspace("TERRITORIES", draftName);
        mv.setThemeWorkspace("COUNTIES_TERR", draftName);
      }
      else
      {
        mv.setThemeWorkspace("TERRITORIES", null);
        mv.setThemeWorkspace("COUNTIES_TERR", null);
      }
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
  }
%>
<html>
<HEAD>
<LINK href="images/terr.css" type=text/css rel=stylesheet>
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
var singleselect = false ;
var rectselect = false ;
var freeformselect = false ;
var clickZoomin = <%= zoomin %> ;
var clickRecenter = <%= recenter %> ;
var selectidstr = <%=idlist==null||idlist.length()==0?"null":("'"+idlist+"'") %>;
var selectrectstr = <%=rectcoords==null||rectcoords.length()==0?"null":("'"+rectcoords+"'") %>;
var selectpolystr = <%=polycoords==null||polycoords.length()==0?"null":("'"+polycoords+"'") %>;
<%
  for(int i=0; i<themes.length; i++)
  {
%>
themeVisibleArray[<%=i%>]='<%=mv.getThemeVisibleInSVG(themes[i])%>' ;
<%
  }
%>
var svgmap;
function getSVGWindow(svg)
{
  var svgdoc = svg.getSVGDocument();
  var svgwin = null ;
  if (svgdoc && svgdoc.defaultView)  // try the W3C standard way first
    svgwin = svgdoc.defaultView;
  else if (svg.window)
    svgwin = svg.window;
  else
    svgwin = svg.getWindow();
  return svgwin ;
}
function init()
{
  svgmap = getSVGWindow(document.getElementById("map"));
  enableButtons() ;
<%
  if("donothing".equals(operation) || "newterritory".equals(operation))
  {
%>
    cx= <%= scxStr %>;
    cy= <%= scyStr %>;
    svgmap.recenter(cx, cy) ;
    svgmap.setZoomRatio(scale) ;
<%
  }
%>
  if(selectidstr!=null)
  {
    // select the features that are selected in the previous map
    // store the list of features that are no longer on the current map
    switchSingleSelStatus() ;
    var ids = selectidstr.split(";");
    selectidstr="" ;
    if(ids!=null)
    {
      for(i=0; i<ids.length; i++)
      {
        if(svgmap.getInfo("COUNTIES_TERR", ids[i])==null)
        {
          if(selectidstr==null)
            selectidstr=ids[i] ;
          else
            selectidstr=selectidstr+";"+ids[i] ;
        }
        else
          svgmap.selectFeature("COUNTIES_TERR", ids[i]) ;
      }
    }
  }
  else if(selectrectstr!=null)
  {
    // redraw the rectangle on the new map
    switchRectStatus() ;
    svgmap.setSelectRectangle(selectrectstr.split(","));
  }
  else if(selectpolystr!=null)
  {
    // redraw the polygon on the new map
    switchFreeFormStatus();
    svgmap.setSelectPolygon(selectpolystr.split(","));
  }
}
// set the hidden input fields, these values are useful when a new map is needed
function setHiddenInputs()
{
  form.size.value= mapSize ;
  form.scale.value= scale ;
  form.centerX.value= rcx ;
  form.centerY.value= rcy ;
  form.scenterX.value= cx ;
  form.scenterY.value= cy ;
  form.selection.value= "" ;
  form.idlist.value= "" ;
  form.rect.value= "" ;
  form.polygon.value= "" ;
  if(singleselect)
  {
    form.selection.value= "single" ;
    var idstr = getSelectedIdListStr() ;
    if(selectidstr!=null)
    {
      if(idstr=="")
        idstr=selectidstr;
      else
        idstr=selectidstr+";"+idstr;
    }
    if(idstr!="")
      form.idlist.value= idstr ;
  }
  else if(rectselect)
  {
    form.selection.value= "rect" ;
    form.rect.value = getSelectRectCoordStr()
  }
  else if(freeformselect)
  {
    form.selection.value= "polygon" ;
    form.polygon.value = getSelectPolyCoordStr()
  }
}
</script>
<script type="text/javascript" src="svgnav.js"></script>
<script type="text/javascript" src="terr.js"></script>
</head>
<%
  if(!sessionExpired)
  {
%>
<body onLoad="init()">
<%
  }
  else
  {
%>
<body>
<%
  }
%>
   <!-------------------------------------------------------------------------
                  Output page header (stuff you really dont need)
    -------------------------------------------------------------------------->
<span style="width:100%">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
    <tr><td>
          <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
            <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td>
            <td><FONT class="OraHeader">MapViewer Territory Management Demo</FONT> 
               <a href="terrsource.html">Source Code</a></td>
            </tr>
          </table>
          </td>
    </tr>
    <tr><td valign="top">
          <table cellpadding="0" cellspacing="0" border="0" summary="">
            <tr><td align="center"><img src="../myicons/t.gif" border="0" /></td></tr>
          </table> </td>
    </tr>
  </table>
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
    <TBODY>
    <TR><!-- Navgiation Tabs Bar -->
      <TD vAlign=bottom align=right>
  
        <TABLE cellSpacing=0 cellPadding=0 height=22 border=0>
          <TBODY>
          <TR>
<%
  if(isDraft)
  {
%>
            <td align=right noWrap width=16><img height=22
             src="images/green-head.gif" width=12></td>
            <td background=images/green-content.gif class=OraNav1Enabled
             noWrap><a href="javascript:returnHome();" class="OraNav1Enabled">Home</a></td>
            <td align=right noWrap width=16><img height=22
              src="images/green-blue.gif" width=16></td>
            <td background=images/blue-content.gif class=OraNav1Selected
             noWrap>Drafts</td>
            <td align=left noWrap width=12><img height=22
             src="images/blue-end.gif" width=12></td>
<%
  }
  else
  {
%>
            <td align=right noWrap width=16><img height=22
             src="images/blue-head.gif" width=12></td>
            <td background=images/blue-content.gif class=OraNav1Selected
             noWrap>Home</td>
            <td align=right noWrap width=16><img height=22
              src="images/blue-green.gif" width=16></td>
            <td background=images/green-content.gif class=OraNav1Enabled
             noWrap><a href="javascript:gotoDrafts();" class="OraNav1Enabled">Drafts</a></td>
            <td align=left noWrap width=12><img height=22
             src="images/green_end.gif" width=12></td>
<%
  }
%>
            <td noWrap width=9>&nbsp;</td>
          </TR>
          </TBODY>
        </TABLE>
      </TD>
    </TR>
    </TBODY>
  </TABLE>
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
    <TBODY>
    <TR>
      <TD vAlign=bottom height=24>
        <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
          <TBODY>
          <TR>
            <TD vAlign=bottom noWrap width="52%" bgColor=#336699
            height=30>&nbsp;</TD>
            <TD vAlign=top noWrap width="48%" background=images/asysrtb.gif
            height=30><IMG height=30 src="images/asysrt.gif" width=40
              border=0></TD>
            <TD width=8 height=30
            xbackground="images/rhshadow.gif"><IMG
              height=30 src="images/asylrhs.gif" width=8 border=0></TD></TR>
          <TR>
  
            <TD vAlign=top noWrap background=images/asylttb.gif
              height=10><IMG height=10 src="images/asyllhs.gif" width=12></TD>
            <TD vAlign=top noWrap height=10><IMG src="images/asysrb.gif"
              width=40 border=0></TD>
            <TD vAlign=top align=left width=5><IMG height=1
              src="images/pixel.gif" width=1></TD></TR></TBODY>
        </TABLE>
      </TD>
    </TR>
    </TBODY>
  </TABLE>
</span>

   <!-------------------------------------------------------------------------
                  Process the incoming map request
    -------------------------------------------------------------------------->
<%
  if(sessionExpired)
  {
%>
<B> Session Expired. </B> 
Please  go back to the <A href="terrinit.jsp">terrinit.jsp</A> page.
<%
    return ;
  }
%>
      <!----------------------------------------------------------------------
              Generate the result web page with map image and controls
       ----------------------------------------------------------------------->
<table border="0"  cellpadding="0"  cellspacing="0">
  <tr>
    <td valign="top" width="130" bgColor="#cccc99">
      <table width="100%" border="0">
        <tr>
          <td align="center">
            <FONT class="OraHeaderSubSub">Territory List</FONT><br>
            <select id="terrlist" size=12 bgColor="#f7f7e7">
<%
  if(territoryList!=null)
  {
    for(int i=0; i<territoryList.size(); i++)
    {
      String terr = (String)territoryList.get(i) ;
%>
                <option bgColor="#f7f7e7" value="<%=terr.substring(0,terr.indexOf("-"))%>"><%=terr%></option>
<%
    }
  }
%>
            </select><br><br>
<%
  if(isDraft)
  {
%>
            <a href="javascript:addToTerritory()"><img border=0 src="images/addtoterritory.gif"/></a>
            <a href="javascript:newTerritory()"><img border=0 src="images/createterritory.gif"/></a>
            <a href="javascript:removeTerritory()"><img border=0 src="images/deleteterritory.gif"/></a>
<%
  }
%>
            <a href="javascript:viewReport(<%= isDraft?"'"+draftName+"'":"''"%>)"><img border=0 src="images/viewreport.gif"/></a>
            <a href="javascript:recenterToTerritory()"><img border=0 src="images/recentermap.gif"/></a>
<%
  if(isDraft)
  {
%>
            <br>
            <hr>
            <FONT class="OraHeaderSubSub">Draft Control</FONT><br>
            <a href="javascript:mergeDraft()"><img border=0 src="images/mergedraft.gif"/></a>
            <a href="javascript:deleteDraft()"><img border=0 src="images/deletedraft.gif"/></a>
            <a href="javascript:gotoDrafts()"><img border=0 src="images/otherdrafts.gif"/></a>
<%
  }
%>
          </td>
        </tr>
      </table>
    </td>
    <td valign="top">
      <table cellSpacing=0 cellPadding=0 border=0>
        <tr valign="top">
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
                <td><embed id="map" src="<%= mv.getGeneratedMapImageURL() %>" type='image/svg+xml' width="<%= width %>" height="<%= height %>"></embed></td>
                <td><input type="image" src="images/east.gif" onclick="javascript:panning('E');" alt="pan east"/></td>
              </tr>
              <tr bgcolor="#666699">
                <td><input type="image" src="images/southwest.gif" onclick="javascript:panning('SW');" alt="pan southwest"/></td>
                <td align="center"><input type="image" src="images/south.gif" onclick="javascript:panning('S');" alt="pan south"/></td>
                <td><input type="image" src="images/southeast.gif" onclick="javascript:panning('SE');" alt="pan southeast"/></td>
              </tr>
            </tbody></table>
          </td>
        </tr>
        <tr>
          <td align="center">
            <input type="image" id="zminimage" alt="zoom in" src="images/zoomin.gif" onclick="zoomin()"/>
            <input type="image" id="zmoutimage" alt="zoom out" src="images/zoomout.gif" onclick="zoomout()"/>
            <input type="image" id="sselimage" alt="single select" src="images/singlesel.gif" onclick="switchSingleSelStatus()"/>
            <input type="image" id="rectimage" alt="rectangle select" src="images/rect.gif" onclick="switchRectStatus()"/>
            <input type="image" id="fformimage" alt="free draw select" src="images/poly.gif" onclick="switchFreeFormStatus()"/>
            <input type="image" id="infoimage" alt="info tips" src="<%= (infoon?"images/infoon.gif":"images/info.gif") %>" onclick="switchInfoStatus()"/>
            <input type="image" id="legendimage" alt="legend" src="images/legend.gif" onclick="switchLegendStatus()"/>
          </td>
        </tr>
        <tr>
          <td align="center">
            <FORM name="form" action=terrmap.jsp method=post onsubmit="javascript:disableButtons(true)">
              <FONT class="OraPromptText">Click on the map to:
              <input type="radio" name="clickaction" value="zoomin" <%= zoomin?"checked":"" %> onclick="enableClickZoomin()" ><B>Zoom In</B>
              <input type="radio" name="clickaction" value="recenter" <%= recenter?"checked":"" %> onclick="enableClickRecenter()" ><B>Re-center</B></FONT>
          <td>
        </tr>
        <tr>
          <td colspan="2" align=center>
            <br>
            <font class=OraTipText>Center[<%=mv.getRequestCenter().getX()+", "+mv.getRequestCenter().getY()%>]</font>
          </td>
        </tr>
        <tr>
          <input type="hidden" name="mvurl" value="<%=mv.getServiceURL()%>" >
          <input type="hidden" name="datasrc" value="<%=mv.getDataSourceName()%>" >
        </tr>
      </table>
    </td>
    <td valign="top">
      <table>
<%
  if(isDraft)
  {
%>
        <tr valign="top">
          <td valign="top"  bgColor="#f7f7e7">
            <FONT class="OraHeaderSubSub">Draft Name</FONT><br>
            <font class="OraDataText"><%= draftName%></font>
            <hr>
          </td>
        </tr>
<%
  }
%>
        <tr valign="top">
          <td valign="top"  bgColor="#f7f7e7">
            <FONT class="OraHeaderSubSub">Theme List</FONT><br>
            <hr>
            <font class="OraFieldText">
               <% String[] ts = mv.getThemeNames();
                 for(int i=0; i<ts.length; i++)
                 {%>
                   <input type="checkbox" name="_mthemev_" 
                          value="<%=ts[i]%>" onclick="hideTheme('<%=ts[i]%>', <%=i%>)" 
                          <%=mv.getThemeVisibleInSVG(ts[i])?"checked":""%> > <%= ts[i] %><br>
               <%}%>
               <br>
            </font>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td> 
      <input type="hidden" name="width" value="<%=width%>"/>
      <input type="hidden" name="height" value="<%=height%>"/>                              
      <input type="hidden" name="centerX" value="<%=cxStr%>"/>
      <input type="hidden" name="centerY" value="<%=cyStr%>"/>
      <input type="hidden" name="scenterX" value="<%= scxStr %>"/>
      <input type="hidden" name="scenterY" value="<%= scyStr %>"/>
      <input type="hidden" name="size" value="<%=sizeStr%>"/>
      <input type="hidden" name="scale" value="<%=scaleStr%>"/>         
      <input type="hidden" name="infoon" value="<%=(infoon?"yes":"no")%>" />
      <input type="hidden" name="operation" value=""/>
      <input type="hidden" name="idlist" value="<%=idlist==null?"":idlist%>"/>
      <input type="hidden" name="rect" value="<%=rectcoords==null?"":rectcoords%>"/>
      <input type="hidden" name="polygon" value="<%=polycoords==null?"":polycoords%>"/>
      <input type="hidden" name="territory" value=""/>
      <input type="hidden" name="selection" value=""/>
<%
  if(isDraft)
  {
%>
      <input type="hidden" name="draft" value="<%= draftName %>"/>
      <input type="hidden" name="seldraft" value="<%= draftName %>"/>
<%
  }
%>
 </FORM>
    </td>
    <td align="right"></td>
  </tr>
</table>
</body>
</html>
