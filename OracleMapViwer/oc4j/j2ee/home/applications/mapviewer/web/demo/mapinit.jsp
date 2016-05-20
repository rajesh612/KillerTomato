<%-- Copyright (C) Oracle Corporation 2002. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   lqian       08/27/02 - created       --%>

<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page session="true" %>
<%@ page import="java.util.Enumeration" %>
<%@ page import="oracle.lbs.mapclient.MapViewer" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>
MapViewer JSP Demo Init Page
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
            <tr><td valign="bottom"><a href="../index.html"> <img src="../myicons/mapviewer.gif" border="0" /> </a><FONT color="#449922" size="+2"><b>JSP Demo - Init </b></FONT> <FONT size="-1"> <A href="mapinit.jsp.txt">source file</A></FONT></td>
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
      <hr>
      </span>

   <!-------------------------------------------------------------------------
                  Process the incoming map request
    -------------------------------------------------------------------------->
    <% 
       String mvURL = request.getParameter("mvurl");

       if(mvURL==null || mvURL.length()==0)  //ask for URL if not present
       {
        mvURL = "http://"+ request.getServerName()+":"+request.getServerPort()+
              request.getContextPath()+"/omserver";
        
       %>
          <form action="mapinit.jsp" name="urlform" method="get">
           <table>
           <tr>
              <td><B>Type MapViewer service URL</B>: </td>
              <td><input type="text" name="mvurl" size="48" value="<%=mvURL%>"></td>
           </tr>      
           <tr>
              <Td><B>Datasource:</B>: </Td>
              <td><input type="text" name="datasrc" value="mvdemo" size="48" maxlength="48"></td>
          </tr>
           <tr>
              <Td><B>Basemap:</B>: </Td>
              <td><input type="text" name="basemap" value="demo_map" size="48" maxlength="48"></td>
          </tr>
           <tr>
              <Td><B>Center X:</B>: </Td>
              <td><input type="text" name="centerX" value="-122.40" size="48" maxlength="48"></td>
          </tr>
              <Td><B>Center Y:</B>: </Td>
              <td><input type="text" name="centerY" value="37.80" size="48" maxlength="48"></td>
          </tr>
          </tr>
              <Td><B>Initial Map Size:</B>: </Td>
              <td><input type="text" name="initsize" value="0.2" size="48" maxlength="48"></td>
          </tr>
          </tr>
              <Td><B>Map width:</B>: </Td>
              <td><input type="text" name="width" value="500" size="48" maxlength="48"></td>
          </tr>
          </tr>
              <Td><B>Map height:</B>: </Td>
              <td><input type="text" name="height" value="400" size="48" maxlength="48"></td>
          </tr>
          </tr>
              <Td><B>Map SRID:</B>: </Td>
              <td><input type="text" name="srid" value="0" size="48" maxlength="48"></td>
          </tr>
          </tr>
              <Td><B>Map type:</B>: </Td>
              <td>
                <select name="type">
                  <option value="IMAGE" selected>Regular image
                  <option value="DIMAGE">Image with dynamic info
                  <option value="SVG">SVG
                </select> <font color="#ff0000">try svg!</font></td>
          </tr>
          <tr> <td> <input type="submit" name="submit" value="Proceed..."> </td></tr>
          </table>

          </form>
          <%return;        
        }
        String dataSrc = request.getParameter("datasrc");        
        String baseMap = request.getParameter("basemap");
        String centerX = request.getParameter("centerX");
        String centerY = request.getParameter("centerY");
        String size = request.getParameter("initsize");   
        String width = request.getParameter("width") ;
        String height = request.getParameter("height") ;
        String type = request.getParameter("type") ;
        String srid = request.getParameter("srid") ;
        String forwardJSP = "map.jsp" ;
        if(type!=null && type.equals("SVG"))
          forwardJSP = "svgmap.jsp" ;
        else if("DIMAGE".equals(type))
          forwardJSP = "dmap.jsp" ;
    %>
       <jsp:forward page="<%=forwardJSP%>">
       <jsp:param name="mvurl" value="<%=mvURL%>" />
       <jsp:param name="datasrc" value="<%=dataSrc%>" />
       <jsp:param name="basemap" value="<%=baseMap%>" />
       <jsp:param name="centerX" value="<%=centerX%>" />
       <jsp:param name="centerY" value="<%=centerY%>" />
       <jsp:param name="size" value="<%=size%>" />
       <jsp:param name="width" value="<%=width%>" />
       <jsp:param name="height" value="<%=height%>" />
       <jsp:param name="srid" value="<%=srid%>" />
       <jsp:param name="initflag" value="true" />
       </jsp:forward>
</body>
</html>
