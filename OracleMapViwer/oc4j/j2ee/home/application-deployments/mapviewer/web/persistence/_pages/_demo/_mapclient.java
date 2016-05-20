package _demo;

import oracle.jsp.runtime.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;


public class _mapclient extends com.orionserver.http.OrionHttpJspPage {


  // ** Begin Declarations


  // ** End Declarations

  public void _jspService(HttpServletRequest request, HttpServletResponse response) throws java.io.IOException, ServletException {

    response.setContentType( "text/html;charset=UTF-8");
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
    _mapclient page = this;
    ServletConfig config = pageContext.getServletConfig();

    com.evermind.server.http.JspCommonExtraWriter __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
    try {


      __ojsp_s_out.write(__oracle_jsp_text[0]);
      __ojsp_s_out.write(__oracle_jsp_text[1]);
      __ojsp_s_out.write(__oracle_jsp_text[2]);
      __ojsp_s_out.write(__oracle_jsp_text[3]);
      __ojsp_s_out.write(__oracle_jsp_text[4]);
      __ojsp_s_out.write(__oracle_jsp_text[5]);
      __ojsp_s_out.write(__oracle_jsp_text[6]);
      mapdemo.MapClientBean mcb;
      synchronized (session) {
        if ((mcb = (mapdemo.MapClientBean) pageContext.getAttribute( "mcb", PageContext.SESSION_SCOPE)) == null) {
          mcb = (mapdemo.MapClientBean) new mapdemo.MapClientBean();
          pageContext.setAttribute( "mcb", mcb, PageContext.SESSION_SCOPE);
          __ojsp_s_out.write(__oracle_jsp_text[7]);
          mcb.setMapViewerServerURL(OracleJspRuntime.toStr( mcb.determineURL(request)));
          __ojsp_s_out.write(__oracle_jsp_text[8]);
          pageContext.setAttribute( "mcb", mcb, PageContext.SESSION_SCOPE);
        }
      }
      __ojsp_s_out.write(__oracle_jsp_text[9]);
      {
        String[] __paramList = request.getParameterValues( "mapViewerServerURL");
        if ((__paramList != null) && (__paramList[0] != null) && (__paramList[0].length() > 0)) {
          mcb.setMapViewerServerURL(__paramList[0]);
        }
      }
      __ojsp_s_out.write(__oracle_jsp_text[10]);
      OracleJspRuntime.__jspSetAllParams(request, (Object)mcb, true);
      __ojsp_s_out.write(__oracle_jsp_text[11]);
      
        mcb.processRequest(request);
      
      __ojsp_s_out.write(__oracle_jsp_text[12]);
      out.print(mcb.getMapViewerServerURL());
      __ojsp_s_out.write(__oracle_jsp_text[13]);
      out.print( mcb.getDataSource() );
      __ojsp_s_out.write(__oracle_jsp_text[14]);
      out.print( mcb.getTitle() );
      __ojsp_s_out.write(__oracle_jsp_text[15]);
      out.print( mcb.getBaseMap() );
      __ojsp_s_out.write(__oracle_jsp_text[16]);
      out.print( mcb.getCenterX() );
      __ojsp_s_out.write(__oracle_jsp_text[17]);
      out.print( mcb.getCenterY() );
      __ojsp_s_out.write(__oracle_jsp_text[18]);
      out.print( mcb.getSize() );
      __ojsp_s_out.write(__oracle_jsp_text[19]);
      out.print(mcb.getImageW());
      __ojsp_s_out.write(__oracle_jsp_text[20]);
       if (mcb.getSuccess()) { 
      __ojsp_s_out.write(__oracle_jsp_text[21]);
      out.print( mcb.getMapImageURL() );
      __ojsp_s_out.write(__oracle_jsp_text[22]);
      out.print( mcb.getImageW() );
      __ojsp_s_out.write(__oracle_jsp_text[23]);
      out.print( mcb.getImageH() );
      __ojsp_s_out.write(__oracle_jsp_text[24]);
       } else { 
      __ojsp_s_out.write(__oracle_jsp_text[25]);
       } 
      __ojsp_s_out.write(__oracle_jsp_text[26]);
      out.print( mcb.getImageW() );
      __ojsp_s_out.write(__oracle_jsp_text[27]);
      out.print( mcb.getImageW() );
      __ojsp_s_out.write(__oracle_jsp_text[28]);
      out.print(mcb.getXMLRequest());
      __ojsp_s_out.write(__oracle_jsp_text[29]);
      out.print(mcb.getXMLResponse());
      __ojsp_s_out.write(__oracle_jsp_text[30]);
      
        if(mcb.getErrorMsg()!=null && mcb.getDataSource()!=null)
        {
      
      __ojsp_s_out.write(__oracle_jsp_text[31]);
      out.print(mcb.getErrorMsg());
      __ojsp_s_out.write(__oracle_jsp_text[32]);
      
        }
      
      __ojsp_s_out.write(__oracle_jsp_text[33]);

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
  private static final byte __oracle_jsp_text[][]=new byte[34][];
  static {
    try {
    __oracle_jsp_text[0] = 
    "\n\n".getBytes("UTF8");
    __oracle_jsp_text[1] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[2] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[3] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[4] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[5] = 
    "\n\n".getBytes("UTF8");
    __oracle_jsp_text[6] = 
    "\n\n<!-- \n      Invokes the MapClientBean. \n-->\n".getBytes("UTF8");
    __oracle_jsp_text[7] = 
    "\n  ".getBytes("UTF8");
    __oracle_jsp_text[8] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[9] = 
    "\n\n<!--\n      Ensures that a correct MapViewer client handle is created prior to\n      setting other properties.\n-->\n".getBytes("UTF8");
    __oracle_jsp_text[10] = 
    "\n\n<!--\n      Sets all the properties of the bean (and the MapViewer client handle)\n      from the matching request parameters.\n-->\n".getBytes("UTF8");
    __oracle_jsp_text[11] = 
    "\n\n<!--\n      The bean performs the actual processing.\n-->\n".getBytes("UTF8");
    __oracle_jsp_text[12] = 
    "\n\n<!-- \n      Now we simply present the demo page, based on various properties and\n      processed results in the bean.\n-->\n\n<html>\n\n<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n<title>MapView JSP Client Demo</title>\n</head>\n\n<script language=\"JavaScript\">\n<!--\nfunction checkForm() {\n  if (document.viewerForm.mapViewerServerURL.value==\"\" ||\n      document.viewerForm.dataSource.value==\"\" ) {\n    alert(\"You can't leave Map Viewer URL and/or Data Source empty.\")\n    return false\n  }\n  var fpValue = Number(document.viewerForm.centerX.value)\n  if (isNaN(fpValue)) {\n    alert(\"Try entering Center of X Coord. again.\")\n    return false\n  }\n  fpValue = Number(document.viewerForm.centerY.value)\n  if (isNaN(fpValue)) {\n    alert(\"Try entering Center of Y Coord. again.\")\n    return false\n  }\n  fpValue = Number(document.viewerForm.size.value)\n  if (isNaN(fpValue) || fpValue==0) {\n    alert(\"Try entering Size again.\")\n    return false\n  }\n  return true\n}\n\nfunction clearIOFields() {\n  document.viewerForm.mapViewerServerURL.value=\"\"\n  document.viewerForm.dataSource.value=\"\"\n  document.viewerForm.title.value=\"\"\n  document.viewerForm.baseMap.value=\"\"\n  document.viewerForm.centerX.value=\"0.0\"\n  document.viewerForm.centerY.value=\"0.0\"\n  document.viewerForm.size.value=\"1.0\"\n  document.viewerForm.status.value=\"\"\n  return false\n}\n\n//-->\n</script>\n\n<noscript>\n<b>Your browser has JavaScript turned off.</b><br>\nYou won't able to clear the text fields in the window.\n<hr>\n</noscript>\n\n<!-- Output the HTML content -->\n\n</head>\n\n<body>\n   <!-------------------------------------------------------------------------\n                  Output page header (stuff you really dont need)\n    -------------------------------------------------------------------------->\n      <span style=\"width:100%\">\n      <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" summary=\"\">\n      <tr><td>\n          <table cellpadding=\"0\" cellspacing=\"2\" border=\"0\" width=\"100%\" summary=\"\">\n            <tr><td valign=\"top\"><img src=\"../myicons/oracle_logo.gif\" border=\"0\" /> </td></tr>\n            <tr><td valign=\"bottom\"><A href=\"..\"><img src=\"../myicons/mapviewer.gif\" border=\"0\" /></A>\n               <FONT color=\"#449922\" size=\"+2\"><b>OracleAS 10<i>g</i> MapViewer JSP Client Demo</b></FONT> </td></tr>\n          </table>\n          </td>\n      </tr>\n      <tr><td valign=\"top\">\n          <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" summary=\"\">\n            <tr><td align=\"center\"><img src=\"../myicons/t.gif\" border=\"0\" /></td></tr>\n          </table> </td>\n      </tr>\n      </table>\n      <hr>\n      </span>\n\n\n\n<form name=\"viewerForm\" method=\"post\" onSubmit=\"return checkForm()\">\n\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\">\n  <tr>\n    <td width=\"640\">\n      <table width=\"240\">\n        <tr>\n          <td width=\"240\">\n            MapViewer URL:\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            <input type=\"text\" name=\"mapViewerServerURL\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[13] = 
    "\"\n             size=\"34\" onFocus=\n             \"window.status='I.e., http://host:port/mapviewer/omserver';return true\"\n            />\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            Data Source:\n          </td>\n        </tr>\n        <tr>\n         <td width=\"240\">\n           <input type=\"text\" name=\"dataSource\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[14] = 
    "\"  size=\"34\" />\n         </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            Title:\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            <input type=\"text\" name=\"title\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[15] = 
    "\" size=\"34\" />\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            Base Map:\n          </td>\n        </tr>\n        <tr>\n         <td width=\"240\">\n           <input type=\"text\" name=\"baseMap\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[16] = 
    "\" size=\"34\" />\n         </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            Map Center X:\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            <input type=\"text\" name=\"centerX\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[17] = 
    "\" size=\"34\" />\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            Map Center Y:\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            <input type=\"text\" name=\"centerY\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[18] = 
    "\" size=\"34\" />\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            Map Size:\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\">\n            <input type=\"text\" name=\"size\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[19] = 
    "\" size=\"34\"\n             onFocus=\n             \"window.status='Map size in unit of map coordiates';return true\"\n            />\n          </td>\n        </tr>\n        <tr>\n          <td width=\"240\" align=\"center\">\n            <input type=\"button\" name=\"clear\" value=\"Clear\"\n             onClick=\"clearIOFields()\">\n            <input type=\"submit\" name=\"action\" value=\"Submit\">\n          </td>\n        </tr>\n      </table>\n    </td>\n    <td width=\"".getBytes("UTF8");
    __oracle_jsp_text[20] = 
    "\">\n      ".getBytes("UTF8");
    __oracle_jsp_text[21] = 
    "\n        <input type=\"image\" src=\"".getBytes("UTF8");
    __oracle_jsp_text[22] = 
    "\" name=\"mouseClick\"\n         width=\"".getBytes("UTF8");
    __oracle_jsp_text[23] = 
    "\" height=\"".getBytes("UTF8");
    __oracle_jsp_text[24] = 
    "\" alt=\"Click to Recenter\">\n      ".getBytes("UTF8");
    __oracle_jsp_text[25] = 
    "\n        <image name=\"imageCenter\"  alt=\"Cannot Get Map Image\" >\n      ".getBytes("UTF8");
    __oracle_jsp_text[26] = 
    "\n    </td>\n  </tr>\n  <tr>\n    <td>\n    MapViewer XML Request:\n    </td>\n    <td width=\"".getBytes("UTF8");
    __oracle_jsp_text[27] = 
    "\" align=\"center\">\n      <table width=\"".getBytes("UTF8");
    __oracle_jsp_text[28] = 
    "\">\n        <tr>\n          <td>\n            <input type=\"submit\" name=\"action\" value=\"Zm In\">\n          </td>\n          <td>\n            <input type=\"submit\" name=\"action\" value=\"Zm Out\">\n          </td>\n          <td>\n            <input type=\"submit\" name=\"action\" value=\"Pan W.\">\n          </td>\n          <td>\n            <input type=\"submit\" name=\"action\" value=\"Pan N.\">\n          </td>\n          <td>\n            <input type=\"submit\" name=\"action\" value=\"Pan S.\">\n          </td>\n          <td>\n            <input type=\"submit\" name=\"action\" value=\"Pan E.\">\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n  <tr>\n    <td width=\"240\" colspan=\"2\" align=\"center\">\n      <textarea name=\"request\" rows=\"6\" cols=\"80\" wrap>".getBytes("UTF8");
    __oracle_jsp_text[29] = 
    "\n      </textarea>\n    </td>\n  </tr>\n  <tr> \n    <td> MapViewer Response/Message:</td>\n  </tr>\n  <tr>\n    <td colspan=\"2\">\n      <textarea name=\"status\" rows=\"6\" cols=\"80\" wrap> ".getBytes("UTF8");
    __oracle_jsp_text[30] = 
    "\n      </textarea>\n    </td>\n  </tr>\n</table>\n</form>\n\n\n".getBytes("UTF8");
    __oracle_jsp_text[31] = 
    "\n    <P> <Font color=\"#ff0000\" size=\"+1\"> ".getBytes("UTF8");
    __oracle_jsp_text[32] = 
    " </Font>\n".getBytes("UTF8");
    __oracle_jsp_text[33] = 
    "\n\n</body>\n\n</html>\n".getBytes("UTF8");
    }
    catch (Throwable th) {
      System.err.println(th);
    }
}
}
