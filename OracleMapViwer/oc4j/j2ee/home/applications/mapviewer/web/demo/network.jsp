<%-- Copyright (C) Oracle Corporation 2004. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   jpaiva      05/03/04 - Creation      --%>

<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page language="java" %>
<%@ page import="java.net.*, java.io.*, java.util.StringTokenizer" %>

<%
  // Initial dynamic request variables
  String jspName = "network.jsp";
  String mapRequest = "";
  String mapResponse = "";
  String imgURL = "";
  double imgCX = 0;
  double imgCY = 0;
  int width = 500;
  int height = 500;

  String shownodes = "false";
  String showlinks = "false";
  String showlklabels = "false";
  String showndlabels = "false";
  String showdir = "false";
  String showpath = "false";
  String ndlbstyle = "T.STREET NAME";
  String lklbstyle = "T.STATE NAME";
  String ndlbcolumn = "node_id";
  String runanalysis = "false";

  // Load input parameters
  String mapViewerURL = request.getParameter("mapViewerURL")!= null ?
              request.getParameter("mapViewerURL") : "http://"+
	      request.getServerName()+":"+request.getServerPort()+
              request.getContextPath()+"/omserver";
  String dataSource = request.getParameter("dataSource")!=null ?
              request.getParameter("dataSource") : "";
  String title= request.getParameter("title")!=null ?
              request.getParameter("title") : "";
  String networkName = request.getParameter("networkName")!=null ?
              request.getParameter("networkName") : "";
  double cx = request.getParameter("cx")!=null ?
              Double.valueOf(request.getParameter("cx")).doubleValue() : -73.8454;
  double cy = request.getParameter("cy")!=null ?
              Double.valueOf(request.getParameter("cy")).doubleValue() : 40.7390;
  double size = request.getParameter("size")!=null ?
              Double.valueOf(request.getParameter("size")).doubleValue() : 0.015;

  double boxLLX = request.getParameter("boxLLX")!= null ?
              Double.valueOf(request.getParameter("boxLLX")).doubleValue():0.0;
  double boxLLY = request.getParameter("boxLLY")!=null ?
              Double.valueOf(request.getParameter("boxLLY")).doubleValue():0.0;
  double boxURX = request.getParameter("boxURX")!= null ?
              Double.valueOf(request.getParameter("boxURX")).doubleValue():0.0;
  double boxURY = request.getParameter("boxURY")!= null ?
              Double.valueOf(request.getParameter("boxURY")).doubleValue():0.0;

  String dirsize = request.getParameter("dirsize"); 
  String pathid = request.getParameter("pathid");
  String nodesize = request.getParameter("nodesize");
  String algorithm = request.getParameter("algorithm");
  String startnode = request.getParameter("startnode");
  String endnode = request.getParameter("endnode");
  String cost = request.getParameter("cost");
  
  if(request.getParameter("Links") == null)
    showlinks = "false";
  else
    showlinks = "true";

  if(request.getParameter("LinkDir") == null)
    showdir = "false";
  else
    showdir = "true";

  if(request.getParameter("LinkLabels") == null)
    showlklabels = "false";
  else
    showlklabels = "true";
    
  if(request.getParameter("Nodes") == null)
    shownodes = "false";
  else
    shownodes = "true";

  if(request.getParameter("NodeLabels") == null)
    showndlabels = "false";
  else
    showndlabels = "true";

  if(request.getParameter("Paths") == null)
    showpath = "false";
  else
    showpath = "true";

  if(request.getParameter("RunAnalysis") == null)
    runanalysis = "false";
  else
    runanalysis = "true";

  String srid = request.getParameter("srid"); 

  if(srid != null && srid.trim().length() > 0)
  {
    try
    {
      int id = Integer.parseInt(srid);
    } catch (Exception e)
    {
      srid = "0";
    }
  }
  else
    srid = "8307";
    
  // URL rewrite of this page
  String jspURL = response.encodeURL(jspName);

  // Handle submit from form
  String sub = request.getParameter("submit");

  if (sub != null) {
    if (sub.equals("Zm In")) {
      size = size/2;
    } else if (sub.equals("Zm Out")) {
      size = size*2;
    } else if (sub.equals("Pan W.")) {
      cx = cx - size/2;
    } else if (sub.equals("Pan N.")) {
      cy = cy + size/2;
    } else if (sub.equals("Pan S.")) {
      cy = cy - size/2;
    } else if (sub.equals("Pan E.")) {
      cx = cx + size/2;
    }
  } else {
    // Process "submit" from server-side image map: get the new center in
    // screen coordinates from the request and compute the new map center
    // in map coordinates
    if (request.getParameter("imageCenter.x")!=null &&
        request.getParameter("imageCenter.y")!=null) {
      imgCX = Integer.valueOf(request.getParameter("imageCenter.x")).intValue();
      imgCY = Integer.valueOf(request.getParameter("imageCenter.y")).intValue();
      //mapResponse = mapResponse +
      //  "Computing new center from screen coords("+imgCX+","+imgCY+")\n";
      cx = boxLLX+imgCX/width*(boxURX-boxLLX);
      cy = boxURY-imgCY/height*(boxURY-boxLLY);
    }
  }
  
  // Construct a map request
  mapRequest = "xml_request=" +
            "<?xml version=\"1.0\" standalone=\"yes\" ?>\n"      +
            "<map_request \n"                                    +
            "      title=\""      + title      + "\"\n"          +
            "      datasource=\"" + dataSource + "\"\n"          +
            "      width=\""      + width      + "\"\n"          +
            "      height=\""     + height     + "\"\n"          +
            "      format=\"PNG_URL\" >\n"                       +
            "    <center size=\"" + size + "\">\n"               +
            "      <geoFeature>\n"                               +
            "        <geometricProperty typeName=\"center\">\n"  +
            "          <Point>\n"                                +
            "            <coordinates>\n"                        +
            "              " + cx + ", " + cy + "\n"             +
            "            </coordinates>\n"                       +
            "          </Point>\n"                               +
            "        </geometricProperty>\n"                     +
            "      </geoFeature>\n"                              +
            "    </center>\n"                                    +      
            "<themes> \n"                                           +
            "  <theme name=\"net_theme\" user_clickable=\"false\"> \n"  +
            "     <jdbc_network_query \n"                        +
            "       network_name=\"" + networkName + "\"\n"      +
            "       network_level=\"1\" \n"                      +
            "       jdbc_srid=\"" + srid + "\"\n"                +
            "       datasource=\"" + dataSource + "\"\n"         +
            (showlinks.equals("true")?
             ("     link_style=\"C.RED\"\n") : "") +
            (showlinks.equals("true") && showdir.equals("true")?
             ("     direction_style=\"M.IMAGE105_BW\"\n" +
              "     direction_position=\"0.75\"\n" +
              "     direction_markersize=\""  + dirsize + "\"\n") : "") +
            (showlinks.equals("true") && showlklabels.equals("true")?
             ("      link_labelstyle=\""    + lklbstyle    + "\"\n" +
              "      link_labelcolumn=\"link_id\"\n") : "") + 
            (shownodes.equals("true") ?
             ("      node_style=\"M.CITY HALL 4\"\n" +
              "      node_markersize=\"" + nodesize + "\"\n") : "") +
            (shownodes.equals("true") && showndlabels.equals("true")?
             ("      node_labelstyle=\""    + ndlbstyle    + "\"\n" +
              "      node_labelcolumn=\"" + ndlbcolumn + "\"\n") : "") + 
            (showpath.equals("true") ?
             ("      path_ids=\""    + pathid    + "\"\n" +
              "      path_styles=\"L.PH\"\n") : "") +
            "       asis=\"false\"></jdbc_network_query> \n"     +
            "   </theme> \n"                                     +
            (runanalysis.equals("true") && 
              (algorithm.equals("DIJKSTRA") || algorithm.equals("ASEARCH")) ?
            (" <theme name=\"spath_theme\" user_clickable=\"false\"> \n"  +
             "     <jdbc_network_query \n"                        +
             "       network_name=\"" + networkName + "\"\n"      +
             "       network_level=\"1\" \n"                      +
             "       jdbc_srid=\"" + srid + "\"\n"                +
             "       datasource=\"" + dataSource + "\"\n"         +
             "       analysis_algorithm=\"" + algorithm + "\"\n"  + 
             "       shortestpath_style=\"L.DPH\"\n"              +
             "       shortestpath_startnode=\"" + startnode + "\"\n"         +
             "       shortestpath_endnode=\"" + endnode + "\"\n"         +
             "       shortestpath_startstyle=\"M.STAR\"\n"         +
             "       shortestpath_endstyle=\"M.CIRCLE\"\n"         +
            "        asis=\"false\"></jdbc_network_query> \n"     +
            "   </theme> \n") : "")                               + 
            (runanalysis.equals("true") && algorithm.equals("WITHINCOST") ?
            (" <theme name=\"wcost_theme\" user_clickable=\"false\"> \n"  +
             "     <jdbc_network_query \n"                        +
             "       network_name=\"" + networkName + "\"\n"      +
             "       network_level=\"1\" \n"                      +
             "       jdbc_srid=\"0\" \n"                          +
             "       datasource=\"" + dataSource + "\"\n"         +
             "       analysis_algorithm=\"" + algorithm + "\"\n"  + 
             "       withincost_style=\"L.DPH\"\n"              +
             "       withincost_startnode=\"" + startnode + "\"\n"         +
             "       withincost_cost=\"" + cost + "\"\n"         +
             "       withincost_startstyle=\"M.STAR\"\n"         +
            "        asis=\"false\"></jdbc_network_query> \n"     +
            "   </theme> \n") : "")                               +           
            "</themes>\n"                                        +
            "</map_request>\n";

  // Process a map request. If a SUCCESS map response is received,
  // extract the image URL from map content and re-compute the center of the map
  // from the box coordinates. Record the response to display in the text area.

  if (dataSource.trim().length()>0 &&
      mapViewerURL.trim().length()>0) {
    URL               url      = null;
    HttpURLConnection hurlc    = null;
    InputStream       is       = null;
    OutputStream      os       = null;
    StringBuffer      sb       = new StringBuffer();
    int               c;
    String resp = null;
    String errorCodeSucc = "error_code=\"SUCCESS\"";
    String urlStart = "url=\"";
    String urlEnd = "\" />";
    String coordStart = "<coordinates>";
    String coordEnd = "</coordinates>";
    int urlStartIdx = -1;
    int urlEndIdx = -1;
    int coordStartIdx = -1;
    int coordEndIdx = -1;
    String box = null;
    boolean err = false;
    StringTokenizer st = null;

    try{
      url = new URL(mapViewerURL);
      hurlc = (HttpURLConnection) url.openConnection();
      hurlc.setDoOutput(true);
      hurlc.setDoInput(true);
      hurlc.setUseCaches(false);
      hurlc.setRequestMethod("POST");
      os = hurlc.getOutputStream();
      os.write(mapRequest.getBytes());
      os.flush();
      os.close();
      is = hurlc.getInputStream();
      while ((c = is.read()) != -1)
        sb.append((char) (byte) c);
      is.close();
      resp = "xml_response=" + sb.toString();
      // check for SUCCESS, extract mapContent URL and recompute center from
      // the box coordinates
      if (resp.indexOf(errorCodeSucc)== -1) {
        err = true;
      } else if ((urlStartIdx=resp.indexOf(urlStart))==-1) {
        err = true;
      } else {
        urlStartIdx += urlStart.length();
        if ((urlEndIdx=resp.indexOf(urlEnd,urlStartIdx))!=-1) {
          imgURL = new String(resp.substring(urlStartIdx, urlEndIdx));
          //resp = resp + imgURL + "\n";
          if ((coordStartIdx=resp.indexOf(coordStart))!=-1) {
            coordStartIdx += coordStart.length();
            if ((coordEndIdx=resp.indexOf(coordEnd,coordStartIdx))!=-1) {
              box = resp.substring(coordStartIdx, coordEndIdx);
              st = new StringTokenizer(box,", \n\t\r\f");
              try {
                boxLLX = Double.valueOf(st.nextToken()).doubleValue();
                boxLLY = Double.valueOf(st.nextToken()).doubleValue();
                boxURX = Double.valueOf(st.nextToken()).doubleValue();
                boxURY = Double.valueOf(st.nextToken()).doubleValue();
                cx = (boxLLX+boxURX)/2;
                cy = (boxLLY+boxURY)/2;
                //resp = resp + "Re-centered to: (" + cx + " ," + cy + ")\n";
              } catch(Exception e) {
                //ignore it
              }
            }
          } else {
            err = true;
          }
        }
      }
    } catch (Exception e) {
      err = true;
      resp = resp + e.getMessage();
    }

    try{
      if (os != null) os.close();
      if (is != null) is.close();
    } catch (Exception ee) {
    }
    mapResponse = mapResponse + resp;
  }
%>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>MapView JSP Client Demo</title>
</head>

<script language="JavaScript">
<!--

function checkForm() {
  if (document.viewerForm.mapViewerURL.value=="" ||
      document.viewerForm.dataSource.value=="" ) {
    alert("You can't leave Map Viewer URL and/or Data Source empty.")
    return false
  }
  var fpValue = Number(document.viewerForm.cx.value)
  if (isNaN(fpValue)) {
    alert("Try entering Center of X Coord. again.")
    return false
  }
  fpValue = Number(document.viewerForm.cy.value)
  if (isNaN(fpValue)) {
    alert("Try entering Center of Y Coord. again.")
    return false
  }
  fpValue = Number(document.viewerForm.size.value)
  if (isNaN(fpValue) || fpValue==0) {
    alert("Try entering Size again.")
    return false
  }
  return true
}

function clearIOFields() {
  document.viewerForm.mapViewerURL.value=""
  document.viewerForm.dataSource.value=""
  document.viewerForm.title.value=""
  document.viewerForm.networkName.value=""
  document.viewerForm.srid.value="0"
  document.viewerForm.cx.value="0.0"
  document.viewerForm.cy.value="0.0"
  document.viewerForm.size.value="1.0"
  document.viewerForm.status.value=""
  document.viewerForm.boxLLX.value="0.0"
  document.viewerForm.boxLLY.value="0.0"
  document.viewerForm.boxURX.value="0.0"
  document.viewerForm.boxURY.value="0.0"
  document.viewerForm.imgURL.value=""
  return false
}

//-->
</script>

<noscript>
<b>Your browser has JavaScript turned off.</b><br>
You won't able to clear the text fields in the window.
<hr>
</noscript>

<!-- Output the HTML content -->

</head>

<body>

<form name="viewerForm" method="post" action="<%= jspURL %>"
 onSubmit="return checkForm()">

<table border="0" cellpadding="0" cellspacing="0" width="640">
  <tr>
    <td width="640" colspan=3 align="center">
      <font size="+2"><strong>Oracle AS 10<i>g</i> MapViewer Demo - Network</strong></font>
    </td>
  </tr>
  <tr>
    <td width="640">
      <table width="240">
        <tr>
          <td width="240">
            MapViewer URL:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="mapViewerURL" value="<%= mapViewerURL %>"
             size="34" onFocus=
             "window.status='I.e., http://host:port/mapviewer/omserver';return true"
            />
          </td>
        </tr>
        <tr>
          <td width="240">
            Data Source:
          </td>
        </tr>
        <tr>
         <td width="240">
           <input type="text" name="dataSource" value="<%= dataSource %>"
            size="34" />
         </td>
        </tr>
        <tr>
          <td width="240">
            Title:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="title" value="<%= title %>" size="34" />
          </td>
        </tr>
        <tr>
          <td width="240">
            Network Name:
          </td>
        </tr>
        <tr>
         <td width="240">
           <input type="text" name="networkName" value="<%= networkName %>" size="34" />
         </td>
        </tr>
        <tr>
          <td width="240">
            Spatial Reference ID (SRID):
          </td>
        </tr>
        <tr>
         <td width="240">
           <input type="text" name="srid" value="<%= srid %>" size="34" />
         </td>
        </tr>
        <tr>
          <td width="240">
            Map Center X Coord:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="cx" value="<%= cx %>" size="34" />
          </td>
        </tr>
        <tr>
          <td width="240">
            Map Center Y Coord:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="cy" value="<%= cy %>" size="34" />
          </td>
        </tr>
        <tr>
          <td width="240">
            Map Size:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="size" value="<%= size %>" size="34"
             onFocus=
             "window.status='Map size in unit of map coordiates';return true"
            />
          </td>
        </tr>
        <tr>
          <td width="240" align="center">
            <input type="button" name="clear" value="Clear"
             onClick="clearIOFields()">
            <input type="submit" name="submit" value="Submit">
          </td>
        </tr>
      </table>
    </td>
    <td width="<%= width %>">
      <% if (imgURL.trim().length()!=0) { %>
        <input type="image" src="<%= imgURL %>" name="imageCenter"
         width="<%= width %>" height="<%= height %>" alt="Click to Recenter">
      <% } else { %>
        <image width="<%= width %>" height="<%= height %>" name="imageCenter"
         alt="Map Image" >
      <% } %>
    </td>
    <td width="240">
      <table width="240">
        <tr>
            <td width="240">
              <input type="checkbox" name="Links"  
                        <%=showlinks.equals("true")?"checked":""%>/>Links</td>
        </tr>
        <tr>
            <td width="240">
              <input type="checkbox" name="LinkLabels"  
                        <%=showlklabels.equals("true")?"checked":""%>/>Link Labels</td>
        </tr>
        <tr>
            <td width="240">
              <input type="checkbox" name="LinkDir"  
                        <%=showdir.equals("true")?"checked":""%>/>Link Directions</td>
        </tr>
        <tr>
            <td width="240">
              <input type="checkbox" name="Nodes" 
                          <%=shownodes.equals("true")?"checked":""%>/>Nodes
            </td>
        </tr>
        <tr>
            <td width="240">
              <input type="checkbox" name="NodeLabels" 
                          <%=showndlabels.equals("true")?"checked":""%>/>Node Labels
            </td>
        </tr>
        <tr>
            <td width="240">
              <input type="checkbox" name="Paths"
                    <%=showpath.equals("true")?"checked":""%>/>Path
            </td>
        </tr>
        <tr>
            <td>
              <input type="checkbox" name="RunAnalysis" 
                          <%=runanalysis.equals("true")?"checked":""%>/>Run Analysis
            </td>
        </tr>
        <tr>
            <td width="240">
              Direction Marker Size:
              <select name="dirsize" size="1">
                <option value="5" <%= (dirsize!=null && dirsize.equals("5"))?"selected":"" %>>5</option>
                <option value="8" <%= (dirsize==null || dirsize.equals("8"))?"selected":"" %>>8</option>
                <option value="12" <%= (dirsize!=null && dirsize.equals("12"))?"selected":"" %>>12</option>
              </select>
            </td>
        </tr>
        <tr>
            <td width="240">
              Node Size:
              <select name="nodesize" size="1">
                <option value="5" <%= (nodesize!=null && nodesize.equals("5"))?"selected":"" %>>5</option>
                <option value="8" <%= (nodesize==null || nodesize.equals("8"))?"selected":"" %>>8</option>
                <option value="12" <%= (nodesize!=null && nodesize.equals("12"))?"selected":"" %>>12</option>
                <option value="15" <%= (nodesize!=null && nodesize.equals("15"))?"selected":"" %>>15</option>
                <option value="20" <%= (nodesize!=null && nodesize.equals("20"))?"selected":"" %>>20</option>
              </select>
            </td>
        </tr>
        <tr>
            <td width="240">
              Path ID:
              <input type="text" name="pathid" maxlength="30" size="20" 
                     value="<%= pathid==null?"1":pathid %>"/>
            </td>
        </tr>
        <tr>
            <td width="240">
              Algorithm:
              <select name="algorithm" size="1">
                <option value="DIJKSTRA" <%= (algorithm==null || algorithm.equals("DIJKSTRA"))?"selected":"" %>>Shortest Path-Dijskstra</option>
                <option value="ASEARCH" <%= (algorithm!=null && algorithm.equals("ASEARCH"))?"selected":"" %>>Shortest Path-ASearch</option>
                <option value="WITHINCOST" <%= (algorithm!=null && algorithm.equals("WITHINCOST"))?"selected":"" %>>Within Cost</option>
              </select>
            </td>
        </tr>
        <tr>
            <td width="240">
              Start Node ID:
              <input type="text" name="startnode" maxlength="30" size="15" 
                     value="<%= startnode==null?"1":startnode %>"/>
            </td>
        </tr>
        <tr>
            <td width="240">
              End Node ID:
              <input type="text" name="endnode" maxlength="30" size="15" 
                     value="<%= endnode==null?"2":endnode %>"/>
            </td>
        </tr>
        <tr>
            <td width="240">
              Cost:
              <input type="text" name="cost" maxlength="30" size="20" 
                     value="<%= cost==null?"1":cost %>"/>
            </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td width="240">
    Request/Response/Msg:
    </td>
    <td width="<%= width %>" align="center">
      <table width="<%= width %>">
        <tr>
          <td>
            <input type="submit" name="submit" value="Zm In">
          </td>
          <td>
            <input type="submit" name="submit" value="Zm Out">
          </td>
          <td>
            <input type="submit" name="submit" value="Pan W.">
          </td>
          <td>
            <input type="submit" name="submit" value="Pan N.">
          </td>
          <td>
            <input type="submit" name="submit" value="Pan S.">
          </td>
          <td>
            <input type="submit" name="submit" value="Pan E.">
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td width="<%= width %>" colspan="3" align="center">
      <textarea name="status" rows="6" cols="80" wrap><%=
      imgURL.trim().length()==0?mapResponse:(mapRequest + "\n" + mapResponse)%>
      </textarea>
    </td>
  </tr>
</table>

<input type="hidden" name="boxLLX" value="<%= boxLLX %>">
<input type="hidden" name="boxLLY" value="<%= boxLLY %>">
<input type="hidden" name="boxURX" value="<%= boxURX %>">
<input type="hidden" name="boxURY" value="<%= boxURY %>">
<input type="hidden" name="imgURL" value="<%= imgURL %>">

</form>

</body>

</html>
