<%-- Copyright (C) Oracle Corporation 2002. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer JSP Client Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   lqian       09/15/02 - created       --%>

<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page session="true" %>
<%@ page import="oracle.lbs.mapclient.MapViewer" %>

<%@ taglib uri="/WEB-INF/mvtaglib.tld"   prefix="mv" %>

<HTML>
<HEAD>
  <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=WINDOWS-1252">
  <META NAME="GENERATOR" CONTENT="Oracle9iAS MapViewer">
</HEAD>
<BODY>

<%
  if( request.getParameter("inited") == null )
  {
    String
    mvURL = "http://"+ request.getServerName()+":"+request.getServerPort()+
              request.getContextPath()+"/omserver";
%>
    Initializing client MapViewer handle. Save the handle in the session
    using key "mvHandle"....<br>
    <mv:init url="<%=mvURL%>"
             datasource="mvdemo" id="mvHandle" />
    
    Setting mapviewer parameters...<p>
    <mv:setParam title="Hello World!" bgcolor="#ffffff" width="500" height="375" 
                 antialiasing="true" />

    Adding themes from a base map...<p>
    <mv:importBaseMap name="density_map"/>

    Setting initial map center and size...<p>
    <mv:setParam centerX="-122.0" centerY="37.8" size="1.5" />

    Generating a map legend image. Save the url to the image in session using 
    key "myLegend"... <p>
    <mv:makeLegend id="myLegend">
        <legend bgstyle="fill:#ffffff;stroke:#ff0000" profile="MEDIUM" >
          <column>
            <entry text="Map Legend" is_title="true" />
            <entry style="M.STAR" text="center point" />
            <entry style="M.CITY HALL 3" text="cities" />
            <entry style="M.CITY HALL 4" text="big cities" />
            <entry is_separator="true" />
            <entry style="C.ROSY BROWN STROKE" text="state boundary" />
            <entry style="L.PH" text="interstate highway" />
            <entry text="County population:" />
            <entry style="V.COUNTY_POP_DENSITY" tab="1" />
          </column>
        </legend>
    </mv:makeLegend>
<%
  }

  MapViewer mvHandle = (MapViewer) session.getAttribute("mvHandle");
  String myLegend = (String) session.getAttribute("myLegend");
%>

 Displaying map:  <B> <%=mvHandle.getMapTitle()%> </B> <A href="tagmap.jsp.txt">source code</A>

<%
    String action = request.getParameter("action");
    String x = request.getParameter("userClick.x"),  
           y = request.getParameter("userClick.y");
%>

  <!-- issue a map request -->
<% if("identify".equals(action))
   {
%>
     <mv:identify id="attrs" style="M.CYAN PIN" 
                  table="cities" spatial_column="location" srid="8307"
                  x="<%=x%>" y="<%=y%>" >
        City, Pop90 Population, State_abrv state
     </mv:identify>
<%
        if(attrs!=null && attrs.length>0)
        {
          out.print("<CENTER> <TABLE border=\"1\">\n");        
          for(int i=0; i<attrs.length; i++)
          {
            if(i==0) out.print("<TR BGCOLOR=\"#FFFF00\">");
            else out.print("<TR>\n");
            String[] row = attrs[i];
            for(int k=0; k<row.length; k++)
              out.print("<TD>"+row[k]+"</TD>");
            out.print("</TR>\n");
          }
          out.print("</TABLE></CENTER>");
        }

   }
   else 
   {
%>
     <mv:run action="<%=action%>" x="<%=x%>" y="<%=y%>" />
<% } %>

  <!----------------------------------------------------------------------
          Generate the result web page with map image and legend
   ----------------------------------------------------------------------->
  <form action="tagmap.jsp" name="mapimage" method="post">
  <table border="1"  cellpadding="0"  cellspacing="0">
  <tr>
    <td valign="center">
      <input type="image" border="0"
             src="<mv:getMapURL />" 
             name="userClick" 
             width="<%=mvHandle.getDeviceSize().width%>" 
             height="<%=mvHandle.getDeviceSize().height%>" 
             alt="Click on the map for selected action"
      >
    </td>
    <td valign="top">
      <img src="<%=myLegend%>" align="top">
    </td>
  </tr>
  <tr>
    <td> <FONT color="#449922"><B>Click on the map to:</B></FONT>
      <input type="radio" name="action" value="zoomin"   <%= "zoomin".equals(action)?"checked":""%> ><B>Zoom In</B>
      <input type="radio" name="action" value="recenter" <%= "recenter".equals(action)?"checked":""%> ><B>Re-center</B>
      <input type="radio" name="action" value="zoomout"  <%= "zoomout".equals(action)?"checked":""%> ><B>Zoom Out</B>
      <input type="radio" name="action" value="identify"  <%= "identify".equals(action)?"checked":""%> ><B>Identify</B>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <I>Datasource</I>[<B><%=mvHandle.getDataSourceName()%></B>]
      <I>Center</I>[<B><%=mvHandle.getRequestCenter().getX()+", "+mvHandle.getRequestCenter().getY()%></B>]
    </td>
  </tr>
  <tr>
  <input type="hidden" name="inited" value="true" >
  </tr>
  </table>
  </form>
            
 </BODY>
</HTML>
