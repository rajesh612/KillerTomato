
import oracle.jsp.runtime.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;


public class _mvlogon extends com.orionserver.http.OrionHttpJspPage {


  // ** Begin Declarations


  // ** End Declarations

  public void _jspService(HttpServletRequest request, HttpServletResponse response) throws java.io.IOException, ServletException {

    response.setContentType( "text/html;charset=utf-8");
    /* set up the intrinsic variables using the pageContext goober:
    ** session = HttpSession
    ** application = ServletContext
    ** out = JspWriter
    ** page = this
    ** config = ServletConfig
    ** all session/app beans declared in globals.jsa
    */
    PageContext pageContext = JspFactory.getDefaultFactory().getPageContext( this, request, response, null, true, JspWriter.DEFAULT_BUFFER, true);
    // Note: this is not emitted if the session directive == false
    HttpSession session = pageContext.getSession();
    int __jsp_tag_starteval;
    ServletContext application = pageContext.getServletContext();
    JspWriter out = pageContext.getOut();
    _mvlogon page = this;
    ServletConfig config = pageContext.getServletConfig();

    com.evermind.server.http.JspCommonExtraWriter __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
    try {


      __ojsp_s_out.write(__oracle_jsp_text[0]);
      __ojsp_s_out.write(__oracle_jsp_text[1]);
      out.print( request.getContextPath()+"/myicons/mapviewer_admin.gif" );
      __ojsp_s_out.write(__oracle_jsp_text[2]);
       if(request.getParameter("retry") !=null) { 
      __ojsp_s_out.write(__oracle_jsp_text[3]);
       } 
      __ojsp_s_out.write(__oracle_jsp_text[4]);
      out.print(request.getContextPath()+"/faces/home.jspx");
      __ojsp_s_out.write(__oracle_jsp_text[5]);
      out.print(request.getContextPath() + "/logonhelp.html");
      __ojsp_s_out.write(__oracle_jsp_text[6]);

    }
    catch (Throwable e) {
      if (!(e instanceof javax.servlet.jsp.SkipPageException)){
        try {
          if (out != null) out.clear();
        }
        catch (Exception clearException) {
        }
        pageContext.handlePageException(e);
      }
    }
    finally {
      OracleJspRuntime.extraHandlePCFinally(pageContext, true);
      JspFactory.getDefaultFactory().releasePageContext(pageContext);
    }

  }
  private static final byte __oracle_jsp_text[][]=new byte[7][];
  static {
    try {
    __oracle_jsp_text[0] = 
    "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n\"http://www.w3.org/TR/html4/loose.dtd\">\n".getBytes("UTF8");
    __oracle_jsp_text[1] = 
    "\n<html>\n  <head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\n    <title>OracleAS MapViewer Console</title>\n  </head>\n  <body><p>\n      <img src='".getBytes("UTF8");
    __oracle_jsp_text[2] = 
    "'\n           alt=\"logon page for MapViewer admin\" />\n    </p><p>\n      <strong><em>Login</em></strong>\n\n".getBytes("UTF8");
    __oracle_jsp_text[3] = 
    "\n  <p>    <font color=\"#ff0000\">Invalid logon. Please try again. </font> </p>\n".getBytes("UTF8");
    __oracle_jsp_text[4] = 
    "\n\n    </p><hr/><form action=\"j_security_check\" method=\"post\">\n      <table cellspacing=\"2\" cellpadding=\"3\" border=\"0\" width=\"50%\">\n        <tr>\n          <td nowrap=\"nowrap\">User Name</td>\n          <td>\n            <input type=\"text\" name=\"j_username\" maxlength=\"32\"/>\n          </td>\n        </tr>\n        <tr>\n          <td>Password</td>\n          <td>\n            <input type=\"password\" name=\"j_password\" maxlength=\"32\"/>\n          </td>\n        </tr>\n      </table>\n      <input type=\"submit\" value=\"Log In\"/>\n      <A href='".getBytes("UTF8");
    __oracle_jsp_text[5] = 
    "'> Cancel </a> \n    </form>\n    \n<p> <p>\n    <A href='".getBytes("UTF8");
    __oracle_jsp_text[6] = 
    "' > can't login? </A> \n    </body>\n</html>\n".getBytes("UTF8");
    }
    catch (Throwable th) {
      System.err.println(th);
    }
}
}
