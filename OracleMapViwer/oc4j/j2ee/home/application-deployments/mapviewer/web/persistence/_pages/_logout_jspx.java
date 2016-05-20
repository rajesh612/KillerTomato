
import oracle.jsp.runtime.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;


public class _logout_jspx extends com.orionserver.http.OrionHttpJspPage {


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
    _logout_jspx page = this;
    ServletConfig config = pageContext.getServletConfig();

    com.evermind.server.http.JspCommonExtraWriter __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
    try {
      // compile time tag reuse - begin
      // usage : com.sun.faces.taglib.jsf_core.ViewTag
      com.sun.faces.taglib.jsf_core.ViewTag __jsp_tag_ctru0 = (com.sun.faces.taglib.jsf_core.ViewTag) OracleJspRuntime.getTagHandler(pageContext, com.sun.faces.taglib.jsf_core.ViewTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.html.HtmlHtmlTag
      oracle.adfinternal.view.faces.taglib.html.HtmlHtmlTag __jsp_tag_ctru1 = (oracle.adfinternal.view.faces.taglib.html.HtmlHtmlTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.html.HtmlHtmlTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.html.HtmlHeadTag title
      oracle.adfinternal.view.faces.taglib.html.HtmlHeadTag __jsp_tag_ctru2 = (oracle.adfinternal.view.faces.taglib.html.HtmlHeadTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.html.HtmlHeadTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.html.HtmlBodyTag
      oracle.adfinternal.view.faces.taglib.html.HtmlBodyTag __jsp_tag_ctru3 = (oracle.adfinternal.view.faces.taglib.html.HtmlBodyTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.html.HtmlBodyTag.class, "compiletime");
      // usage : com.sun.faces.taglib.html_basic.FormTag
      com.sun.faces.taglib.html_basic.FormTag __jsp_tag_ctru4 = (com.sun.faces.taglib.html_basic.FormTag) OracleJspRuntime.getTagHandler(pageContext, com.sun.faces.taglib.html_basic.FormTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelPageTag title
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelPageTag __jsp_tag_ctru5 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelPageTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelPageTag.class, "compiletime");
      // usage : javax.faces.webapp.FacetTag name
      javax.faces.webapp.FacetTag __jsp_tag_ctru6 = (javax.faces.webapp.FacetTag) OracleJspRuntime.getTagHandler(pageContext, javax.faces.webapp.FacetTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreObjectImageTag source
      oracle.adfinternal.view.faces.taglib.core.output.CoreObjectImageTag __jsp_tag_ctru7 = (oracle.adfinternal.view.faces.taglib.core.output.CoreObjectImageTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreObjectImageTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag __jsp_tag_ctru8 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelButtonBarTag
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelButtonBarTag __jsp_tag_ctru9 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelButtonBarTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelButtonBarTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag text action
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag __jsp_tag_ctru10 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag.class, "compiletime");
      // compile tag reuse - end


      __ojsp_s_out.write(__oracle_jsp_text[0]);
      {
        __jsp_tag_ctru0.setPageContext(pageContext);
        __jsp_tag_ctru0.setParent(null);
        __jsp_tag_starteval=__jsp_tag_ctru0.doStartTag();
        if (OracleJspRuntime.checkStartBodyTagEval(__jsp_tag_starteval))
        {
          out=OracleJspRuntime.pushBodyIfNeeded(pageContext,__jsp_tag_ctru0,__jsp_tag_starteval,out);
          __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
          do {
            {
              __jsp_tag_ctru1.setPageContext(pageContext);
              __jsp_tag_ctru1.setParent(__jsp_tag_ctru0);
              __jsp_tag_starteval=__jsp_tag_ctru1.doStartTag();
              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
              {
                {
                  __jsp_tag_ctru2.setPageContext(pageContext);
                  __jsp_tag_ctru2.setParent(__jsp_tag_ctru1);
                  __jsp_tag_ctru2.setTitle("logout");
                  __jsp_tag_starteval=__jsp_tag_ctru2.doStartTag();
                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                  {
                    out.write( "<meta"+ " http-equiv=\"" + "Content-Type"+ "\"" + " content=\"" + "text/html; charset=UTF-8"+ "\"" +"/>");
                  }
                  if (__jsp_tag_ctru2.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                    return;
                }
                {
                  __jsp_tag_ctru3.setPageContext(pageContext);
                  __jsp_tag_ctru3.setParent(__jsp_tag_ctru1);
                  __jsp_tag_starteval=__jsp_tag_ctru3.doStartTag();
                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                  {
                    {
                      __jsp_tag_ctru4.setPageContext(pageContext);
                      __jsp_tag_ctru4.setParent(__jsp_tag_ctru3);
                      __jsp_tag_starteval=__jsp_tag_ctru4.doStartTag();
                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                      {
                        {
                          __jsp_tag_ctru5.setPageContext(pageContext);
                          __jsp_tag_ctru5.setParent(__jsp_tag_ctru4);
                          __jsp_tag_ctru5.setTitle("Log out");
                          __jsp_tag_starteval=__jsp_tag_ctru5.doStartTag();
                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                          {
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("menu1");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("menuGlobal");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("branding");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("brandingApp");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru7.setPageContext(pageContext);
                                    __jsp_tag_ctru7.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru7.setSource("/myicons/mapviewer_admin.gif");
                                    __jsp_tag_starteval=__jsp_tag_ctru7.doStartTag();
                                    if (__jsp_tag_ctru7.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                      return;
                                  }
                                } while (__jsp_tag_ctru6.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                              }
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("appCopyright");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("appPrivacy");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("appAbout");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru8.setPageContext(pageContext);
                              __jsp_tag_ctru8.setParent(__jsp_tag_ctru5);
                              __jsp_tag_starteval=__jsp_tag_ctru8.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                {
                                  __jsp_tag_ctru9.setPageContext(pageContext);
                                  __jsp_tag_ctru9.setParent(__jsp_tag_ctru8);
                                  __jsp_tag_starteval=__jsp_tag_ctru9.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru10.setPageContext(pageContext);
                                      __jsp_tag_ctru10.setParent(__jsp_tag_ctru9);
                                      __jsp_tag_ctru10.setText("Confirm");
                                      __jsp_tag_ctru10.setAction("#{userInfo.logout}");
                                      __jsp_tag_starteval=__jsp_tag_ctru10.doStartTag();
                                      if (__jsp_tag_ctru10.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                    {
                                      __jsp_tag_ctru10.setPageContext(pageContext);
                                      __jsp_tag_ctru10.setParent(__jsp_tag_ctru9);
                                      __jsp_tag_ctru10.setText("Cancel");
                                      __jsp_tag_ctru10.setAction("menu_admin");
                                      __jsp_tag_starteval=__jsp_tag_ctru10.doStartTag();
                                      if (__jsp_tag_ctru10.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru9.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                              }
                              if (__jsp_tag_ctru8.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                          }
                          if (__jsp_tag_ctru5.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                            return;
                        }
                      }
                      if (__jsp_tag_ctru4.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                        return;
                    }
                  }
                  if (__jsp_tag_ctru3.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                    return;
                }
              }
              if (__jsp_tag_ctru1.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                return;
            }
          } while (__jsp_tag_ctru0.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
          out=OracleJspRuntime.popBodyIfNeeded(pageContext,out);
          __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
        }
        if (__jsp_tag_ctru0.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
          return;
      }

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
  private static final byte __oracle_jsp_text[][]=new byte[1][];
  static {
    try {
    __oracle_jsp_text[0] = 
    "\n     <!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"> \n  ".getBytes("UTF8");
    }
    catch (Throwable th) {
      System.err.println(th);
    }
}
}
