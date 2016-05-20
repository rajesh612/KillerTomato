<%-- Copyright (C) Oracle Corporation 2002. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer Territory Management Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   jxyang      06/15/02 - created for mapviewer territory demo  --%>
<%@ page contentType="text/html;csetharset=windows-1252"%>
<%@ page import="java.io.*"%>
<%@ page import="java.net.*"%>
<%@ page import="java.util.*"%>
<%@ page import="mapdemo.*"%>
<%
  String rowids = request.getParameter("countyids");
  String rectcoords = request.getParameter("rect");
  String polycoords = request.getParameter("poly");
  String draftName = request.getParameter("draft");

  boolean newSession = false;
  DBQueryBean queryBean = (DBQueryBean)session.getAttribute("querybean");
  if(queryBean==null)
  {
    queryBean = new DBQueryBean() ;
    session.setAttribute("querybean", queryBean);
  }

  Calendar cal = Calendar.getInstance(TimeZone.getDefault());
  String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
  java.text.SimpleDateFormat sdf = 
        new java.text.SimpleDateFormat(DATE_FORMAT);
  sdf.setTimeZone(TimeZone.getDefault());   
%>
<html>
<HEAD>
<LINK href="terrimages/terr.css" type=text/css rel=stylesheet>
</head>
<body>
<center><font class=OraHeader>Territory Report<%= draftName!=null?"(Draft:"+draftName+")":""%></font></center>
<center><font class=OraTipText><%= sdf.format(cal.getTime()) %>(<%=sdf.getTimeZone().getDisplayName()%>)</font></center>
<table>
  <tr bgcolor="cccc99">
    <td class=OraDarkHeaderSubSub align="center">Territory Id</td>
    <td class=OraDarkHeaderSubSub align="center">Representative</td>
    <td class=OraDarkHeaderSubSub align="center">Number of Stores</td>
    <td class=OraDarkHeaderSubSub align="center">Total Sales (thouthand dollar)</td>
    <td class=OraDarkHeaderSubSub align="center">Number of counties</td>
    <td class=OraDarkHeaderSubSub align="center">Size (sqare miles)</td>
    <td class=OraDarkHeaderSubSub align="center">Population</td>
  </tr>
<%
  if(rowids!=null)
  {
%>
<%= "  "+queryBean.getTerrReportByRowids(rowids, draftName) %>
<%
  }
  else if(rectcoords!=null)
  {
%>
<%= "  "+queryBean.getTerrReportByRectangle(rectcoords, draftName) %>
<%
  }
  else if(polycoords!=null)
  {
%>
<%= "  "+queryBean.getTerrReportByPolygon(polycoords, draftName) %>
<%
  }
  else
  {
%>
<%= "  "+queryBean.getTerrReportByTerr(draftName) %>
<%
  }
%>
</body>
</html>
