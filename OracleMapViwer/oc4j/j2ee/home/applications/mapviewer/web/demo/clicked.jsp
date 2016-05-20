<%@ page contentType="text/html;charset=US-ASCII"%>
<%
  String info = request.getParameter("info") ;
%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
    <title>Theme clicked!</title>
  </head>
  <body>
  <h2>You have just clicked an area on the map!</h2> 
  The info tip associated with this area is: <b>"<%= info %>"</b>.<br><br>
  This string can be more than a info tip. You can use the attributes inside it as input parameters to do more sophisticated things.
  </body>
</html>
