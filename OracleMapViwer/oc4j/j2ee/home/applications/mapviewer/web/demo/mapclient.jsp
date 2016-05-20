<%-- Copyright (C) Oracle Corporation 2003. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   lqian       09/20/03 - re-architect using bean --%>
<%--   lqian       02/14/02 - fill-in server url --%>
<%--   fjlee       12/14/01 - Creation      --%>

<%@ page contentType="text/html;charset=UTF-8"%>

<!-- 
      Invokes the MapClientBean. 
-->
<jsp:useBean id="mcb" scope="session" class="mapdemo.MapClientBean" >
  <jsp:setProperty name="mcb" property="mapViewerServerURL"
                              value="<%=mcb.determineURL(request)%>" />
</jsp:useBean>

<!--
      Ensures that a correct MapViewer client handle is created prior to
      setting other properties.
-->
<jsp:setProperty name="mcb"  property="mapViewerServerURL" 
                             param="mapViewerServerURL" />

<!--
      Sets all the properties of the bean (and the MapViewer client handle)
      from the matching request parameters.
-->
<jsp:setProperty name="mcb" property="*" />

<!--
      The bean performs the actual processing.
-->
<%
  mcb.processRequest(request);
%>

<!-- 
      Now we simply present the demo page, based on various properties and
      processed results in the bean.
-->

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>MapView JSP Client Demo</title>
</head>

<script language="JavaScript">
<!--
function checkForm() {
  if (document.viewerForm.mapViewerServerURL.value=="" ||
      document.viewerForm.dataSource.value=="" ) {
    alert("You can't leave Map Viewer URL and/or Data Source empty.")
    return false
  }
  var fpValue = Number(document.viewerForm.centerX.value)
  if (isNaN(fpValue)) {
    alert("Try entering Center of X Coord. again.")
    return false
  }
  fpValue = Number(document.viewerForm.centerY.value)
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
  document.viewerForm.mapViewerServerURL.value=""
  document.viewerForm.dataSource.value=""
  document.viewerForm.title.value=""
  document.viewerForm.baseMap.value=""
  document.viewerForm.centerX.value="0.0"
  document.viewerForm.centerY.value="0.0"
  document.viewerForm.size.value="1.0"
  document.viewerForm.status.value=""
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
   <!-------------------------------------------------------------------------
                  Output page header (stuff you really dont need)
    -------------------------------------------------------------------------->
      <span style="width:100%">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
      <tr><td>
          <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
            <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td></tr>
            <tr><td valign="bottom"><A href=".."><img src="../myicons/mapviewer.gif" border="0" /></A>
               <FONT color="#449922" size="+2"><b>OracleAS 10<i>g</i> MapViewer JSP Client Demo</b></FONT> </td></tr>
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



<form name="viewerForm" method="post" onSubmit="return checkForm()">

<table border="0" cellpadding="0" cellspacing="0" width="640">
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
            <input type="text" name="mapViewerServerURL" value="<%=mcb.getMapViewerServerURL()%>"
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
           <input type="text" name="dataSource" value="<%= mcb.getDataSource() %>"  size="34" />
         </td>
        </tr>
        <tr>
          <td width="240">
            Title:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="title" value="<%= mcb.getTitle() %>" size="34" />
          </td>
        </tr>
        <tr>
          <td width="240">
            Base Map:
          </td>
        </tr>
        <tr>
         <td width="240">
           <input type="text" name="baseMap" value="<%= mcb.getBaseMap() %>" size="34" />
         </td>
        </tr>
        <tr>
          <td width="240">
            Map Center X:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="centerX" value="<%= mcb.getCenterX() %>" size="34" />
          </td>
        </tr>
        <tr>
          <td width="240">
            Map Center Y:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="centerY" value="<%= mcb.getCenterY() %>" size="34" />
          </td>
        </tr>
        <tr>
          <td width="240">
            Map Size:
          </td>
        </tr>
        <tr>
          <td width="240">
            <input type="text" name="size" value="<%= mcb.getSize() %>" size="34"
             onFocus=
             "window.status='Map size in unit of map coordiates';return true"
            />
          </td>
        </tr>
        <tr>
          <td width="240" align="center">
            <input type="button" name="clear" value="Clear"
             onClick="clearIOFields()">
            <input type="submit" name="action" value="Submit">
          </td>
        </tr>
      </table>
    </td>
    <td width="<%=mcb.getImageW()%>">
      <% if (mcb.getSuccess()) { %>
        <input type="image" src="<%= mcb.getMapImageURL() %>" name="mouseClick"
         width="<%= mcb.getImageW() %>" height="<%= mcb.getImageH() %>" alt="Click to Recenter">
      <% } else { %>
        <image name="imageCenter"  alt="Cannot Get Map Image" >
      <% } %>
    </td>
  </tr>
  <tr>
    <td>
    MapViewer XML Request:
    </td>
    <td width="<%= mcb.getImageW() %>" align="center">
      <table width="<%= mcb.getImageW() %>">
        <tr>
          <td>
            <input type="submit" name="action" value="Zm In">
          </td>
          <td>
            <input type="submit" name="action" value="Zm Out">
          </td>
          <td>
            <input type="submit" name="action" value="Pan W.">
          </td>
          <td>
            <input type="submit" name="action" value="Pan N.">
          </td>
          <td>
            <input type="submit" name="action" value="Pan S.">
          </td>
          <td>
            <input type="submit" name="action" value="Pan E.">
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td width="240" colspan="2" align="center">
      <textarea name="request" rows="6" cols="80" wrap><%=mcb.getXMLRequest()%>
      </textarea>
    </td>
  </tr>
  <tr> 
    <td> MapViewer Response/Message:</td>
  </tr>
  <tr>
    <td colspan="2">
      <textarea name="status" rows="6" cols="80" wrap> <%=mcb.getXMLResponse()%>
      </textarea>
    </td>
  </tr>
</table>
</form>


<%
  if(mcb.getErrorMsg()!=null && mcb.getDataSource()!=null)
  {
%>
    <P> <Font color="#ff0000" size="+1"> <%=mcb.getErrorMsg()%> </Font>
<%
  }
%>

</body>

</html>
