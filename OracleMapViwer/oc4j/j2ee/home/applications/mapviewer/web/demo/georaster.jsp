<%-- Copyright (C) Oracle Corporation 2004. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   jpaiva      05/10/04 - Creation      --%>

<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page language="java" %>
<%@ page import="java.net.*, java.io.*, java.util.StringTokenizer" %>

<%
  // Initial dynamic request variables
  String jspName = "georaster.jsp";
  String mapRequest = "";
  String mapResponse = "";
  String imgURL = "";
  double imgCX = 0;
  double imgCY = 0;
  int width = 400;
  int height = 360;
  
  // Load input parameters
  String mapViewerURL = request.getParameter("mapViewerURL")!= null ?
              request.getParameter("mapViewerURL") : "http://"+
	      request.getServerName()+":"+request.getServerPort()+
              request.getContextPath()+"/omserver";
  String dataSource = request.getParameter("dataSource")!=null ?
              request.getParameter("dataSource") : "";
  String title= request.getParameter("title")!=null ?
              request.getParameter("title") : "";
  String srid = request.getParameter("srid")!=null ?
              request.getParameter("srid") : "";
  double cx = request.getParameter("cx")!=null ?
              Double.valueOf(request.getParameter("cx")).doubleValue() : .0;
  double cy = request.getParameter("cy")!=null ?
              Double.valueOf(request.getParameter("cy")).doubleValue() : .0;
  double size = request.getParameter("size")!=null ?
              Double.valueOf(request.getParameter("size")).doubleValue() : 1.0;

  double boxLLX = request.getParameter("boxLLX")!= null ?
              Double.valueOf(request.getParameter("boxLLX")).doubleValue():0.0;
  double boxLLY = request.getParameter("boxLLY")!=null ?
              Double.valueOf(request.getParameter("boxLLY")).doubleValue():0.0;
  double boxURX = request.getParameter("boxURX")!= null ?
              Double.valueOf(request.getParameter("boxURX")).doubleValue():0.0;
  double boxURY = request.getParameter("boxURY")!= null ?
              Double.valueOf(request.getParameter("boxURY")).doubleValue():0.0;
 
  String georasterTable = request.getParameter("georastertable");
  String georasterColumn = request.getParameter("georastercolumn");
  String rasterId = request.getParameter("rasterid");
  String rasterTable = request.getParameter("rastertable");
  String rasterPyramid = request.getParameter("rasterpyramid");
  String rasterBands = request.getParameter("rasterbands");
  String whereClause = request.getParameter("whereclause");
  String showmode = request.getParameter("showmode");
  
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
    srid = "0";
    
  if(rasterPyramid != null)
  {
    if(rasterPyramid.trim().length() < 1)
      rasterPyramid = null;
    else
    {
      try
      {
        int level = Integer.parseInt(rasterPyramid);
      } catch (Exception e)
      {
        rasterPyramid = null;
      }
    }
  }
  
  if(rasterBands != null && rasterBands.trim().length() < 1)
    rasterBands = null;
    
  if(showmode != null && showmode.equals("QUERY"))
  {
    String query = "select " + georasterColumn + 
                   " from " + georasterTable;
    if(whereClause != null && whereClause.trim().length() > 0)
      query += " where " + whereClause;
      
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
            "<themes> \n"                                        +
            "  <theme name=\"geor_theme\" > \n"                    +
            "     <jdbc_georaster_query \n"                      +
            "       jdbc_srid=\"" + srid + "\"\n"                +
            "       datasource=\"" + dataSource + "\"\n"         +
            "       georaster_table=\"" + georasterTable + "\"\n"         +
            "       georaster_column=\"" + georasterColumn + "\"\n"      +
            (rasterPyramid != null ?
            ("       raster_pyramid=\"" + rasterPyramid + "\"\n") : "")     +
            (rasterBands != null ?
            ("       raster_bands=\"" + rasterBands + "\"\n") : "")     +
            "       asis=\"false\"> " + query + "\n"             +
            "     </jdbc_georaster_query> \n"                     +
            "   </theme> \n"                                     +           
            "</themes>\n"                                        +
            "</map_request>\n";
    }
    else  //RASTERID
    {
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
            "<themes> \n"                                        +
            "  <theme name=\"geor_theme\" > \n"                    +
            "     <jdbc_georaster_query \n"                      +
            "       jdbc_srid=\"" + srid + "\"\n"                +
            "       datasource=\"" + dataSource + "\"\n"         +
            "       georaster_table=\"" + georasterTable + "\"\n"         +
            "       georaster_column=\"" + georasterColumn + "\"\n"         +
            "       raster_id=\"" + rasterId + "\"\n"         +
            "       raster_table=\"" + rasterTable + "\"\n"         +
            (rasterPyramid != null ?
            ("       raster_pyramid=\"" + rasterPyramid + "\"\n") : "")     +
            (rasterBands != null ?
            ("       raster_bands=\"" + rasterBands + "\"\n") : "")     +
            "       asis=\"false\">\n"                           +
            "     </jdbc_georaster_query> \n"                     +
            "   </theme> \n"                                     +           
            "</themes>\n"                                        +
            "</map_request>\n";
    }

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
<title>MapViewer GeoRaster JSP Client Demo</title>
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
      <font size="+2"><strong>Oracle AS 10<i>g</i> MapViewer Demo - GeoRaster</strong></font>
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
             "window.status='I.e., http://host:port/mapviewer/servlet/oms';return true"
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
    <td width="300">
      <table width="300">
        <tr>
            <td width="240">
              Request Mode:
              <select name="showmode" size="1">
                <option value="RASTERID" <%= (showmode==null || showmode.equals("RASTERID"))?"selected":"" %>>RasterId</option>
                <option value="QUERY" <%= (showmode!=null && showmode.equals("QUERY"))?"selected":"" %>>Query</option>
              </select>
            </td>
        </tr> 
        <tr>
            <td width="240">
              GeoRaster Table:
            </td>
        </tr>
        <tr>
            <td width="240">
              <input type="text" name="georastertable" maxlength="30" size="20" 
                     value="<%= georasterTable==null?"":georasterTable %>" />
            </td>
        </tr>
        <tr>
            <td width="240">
              GeoRaster Column:
            </td>
        </tr>
        <tr>
            <td width="240">
              <input type="text" name="georastercolumn" maxlength="30" size="20" 
                     value="<%= georasterColumn==null?"georaster":georasterColumn %>"/>
            </td>
        </tr>
        <tr>
            <td width="240">
              Raster ID:
            </td>
        </tr>
        <tr>
            <td width="240">
              <input type="text" name="rasterid" maxlength="30" size="20" 
                     value="<%= rasterId==null?"1":rasterId %>" />
            </td>
        </tr>
        <tr>
            <td width="240">
              Raster Table:
            </td>
        </tr>
        <tr>
            <td width="240">
              <input type="text" name="rastertable" maxlength="30" size="20" 
                     value="<%= rasterTable==null?"":rasterTable %>" />
            </td>
        </tr>
        <tr>
            <td width="240">
              Pyramid Level:
            </td>
        </tr>
        <tr>
            <td width="240">             
              <input type="text" name="rasterpyramid" maxlength="30" size="20" 
                     value="<%= rasterPyramid==null?"":rasterPyramid %>"/>
            </td>
        </tr>
        <tr>
            <td width="240">
              Bands (Ex. 0,1,2 or 1):
            </td>
        </tr>
        <tr>
            <td width="240">
              <input type="text" name="rasterbands" maxlength="30" size="20" 
                     value="<%= rasterBands==null?"":rasterBands %>"/>
            </td>
        </tr>
        <tr>
            <td width="240">
              Query Condition:
            </td>
        </tr>
        <tr>
            <td width="240">
              <input type="text" name="whereclause" maxlength="30" size="20" 
                     value="<%= whereClause==null?"georid = 1":whereClause %>"/>
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
