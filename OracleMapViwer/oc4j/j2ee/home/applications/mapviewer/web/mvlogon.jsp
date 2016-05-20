<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=utf-8"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>OracleAS MapViewer Console</title>
  </head>
  <body><p>
      <img src='<%= request.getContextPath()+"/myicons/mapviewer_admin.gif" %>'
           alt="logon page for MapViewer admin" />
    </p><p>
      <strong><em>Login</em></strong>

<% if(request.getParameter("retry") !=null) { %>
  <p>    <font color="#ff0000">Invalid logon. Please try again. </font> </p>
<% } %>

    </p><hr/><form action="j_security_check" method="post">
      <table cellspacing="2" cellpadding="3" border="0" width="50%">
        <tr>
          <td nowrap="nowrap">User Name</td>
          <td>
            <input type="text" name="j_username" maxlength="32"/>
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input type="password" name="j_password" maxlength="32"/>
          </td>
        </tr>
      </table>
      <input type="submit" value="Log In"/>
      <A href='<%=request.getContextPath()+"/faces/home.jspx"%>'> Cancel </a> 
    </form>
    
<p> <p>
    <A href='<%=request.getContextPath() + "/logonhelp.html"%>' > can't login? </A> 
    </body>
</html>
