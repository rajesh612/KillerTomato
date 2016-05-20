
import oracle.jsp.runtime.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;


public class _demos_jspx extends com.orionserver.http.OrionHttpJspPage {


  // ** Begin Declarations


  // ** End Declarations

  public void _jspService(HttpServletRequest request, HttpServletResponse response) throws java.io.IOException, ServletException {

    response.setContentType( "text/html;charset=windows-1252");
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
    _demos_jspx page = this;
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
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuTabsTag id value var
      oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuTabsTag __jsp_tag_ctru7 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuTabsTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuTabsTag.class, "compiletime");
      // usage : javax.faces.webapp.FacetTag name
      javax.faces.webapp.FacetTag __jsp_tag_ctru8 = (javax.faces.webapp.FacetTag) OracleJspRuntime.getTagHandler(pageContext, javax.faces.webapp.FacetTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag text action rendered
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag __jsp_tag_ctru9 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuButtonsTag id value var
      oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuButtonsTag __jsp_tag_ctru10 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuButtonsTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuButtonsTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag text icon type action rendered
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag __jsp_tag_ctru11 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreObjectImageTag source
      oracle.adfinternal.view.faces.taglib.core.output.CoreObjectImageTag __jsp_tag_ctru12 = (oracle.adfinternal.view.faces.taglib.core.output.CoreObjectImageTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreObjectImageTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreOutputTextTag value
      oracle.adfinternal.view.faces.taglib.core.output.CoreOutputTextTag __jsp_tag_ctru13 = (oracle.adfinternal.view.faces.taglib.core.output.CoreOutputTextTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreOutputTextTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag styleUsage value
      oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag __jsp_tag_ctru14 = (oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag width
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag __jsp_tag_ctru15 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag.class, "compiletime");
      // usage : com.sun.faces.taglib.jsf_core.VerbatimTag
      com.sun.faces.taglib.jsf_core.VerbatimTag __jsp_tag_ctru16 = (com.sun.faces.taglib.jsf_core.VerbatimTag) OracleJspRuntime.getTagHandler(pageContext, com.sun.faces.taglib.jsf_core.VerbatimTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreGoLinkTag text destination
      oracle.adfinternal.view.faces.taglib.core.nav.CoreGoLinkTag __jsp_tag_ctru17 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreGoLinkTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreGoLinkTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag width height
      oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag __jsp_tag_ctru18 = (oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag.class, "compiletime");
      // compile tag reuse - end


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
                  __jsp_tag_ctru2.setTitle("OracleAS MapViewer Home");
                  __jsp_tag_starteval=__jsp_tag_ctru2.doStartTag();
                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                  {
                    out.write( "<meta"+ " http-equiv=\"" + "Content-Type"+ "\"" + " content=\"" + "text/html; charset=windows-1252"+ "\"" +"/>");
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
                          __jsp_tag_ctru5.setTitle("Demos");
                          __jsp_tag_starteval=__jsp_tag_ctru5.doStartTag();
                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                          {
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("menu1");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru7.setPageContext(pageContext);
                                    __jsp_tag_ctru7.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru7.setId("menuTabsArea");
                                    __jsp_tag_ctru7.setValue("#{menuModel.model}");
                                    __jsp_tag_ctru7.setVar("menuTab");
                                    __jsp_tag_starteval=__jsp_tag_ctru7.doStartTag();
                                    if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                    {
                                      {
                                        __jsp_tag_ctru8.setPageContext(pageContext);
                                        __jsp_tag_ctru8.setParent(__jsp_tag_ctru7);
                                        __jsp_tag_ctru8.setName("nodeStamp");
                                        __jsp_tag_starteval=__jsp_tag_ctru8.doStartTag();
                                        if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                        {
                                          do {
                                            {
                                              __jsp_tag_ctru9.setPageContext(pageContext);
                                              __jsp_tag_ctru9.setParent(__jsp_tag_ctru8);
                                              __jsp_tag_ctru9.setText("#{menuTab.label}");
                                              __jsp_tag_ctru9.setAction("#{menuTab.getOutcome}");
                                              __jsp_tag_ctru9.setRendered("#{menuTab.shown and                                                    menuTab.type=='default'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru9.doStartTag();
                                              if (__jsp_tag_ctru9.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          } while (__jsp_tag_ctru8.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                                        }
                                        if (__jsp_tag_ctru8.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                          return;
                                      }
                                    }
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
                              __jsp_tag_ctru6.setName("menuGlobal");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru10.setPageContext(pageContext);
                                    __jsp_tag_ctru10.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru10.setId("menuButtsArea");
                                    __jsp_tag_ctru10.setValue("#{menuModel.model}");
                                    __jsp_tag_ctru10.setVar("menuButton");
                                    __jsp_tag_starteval=__jsp_tag_ctru10.doStartTag();
                                    if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                    {
                                      {
                                        __jsp_tag_ctru8.setPageContext(pageContext);
                                        __jsp_tag_ctru8.setParent(__jsp_tag_ctru10);
                                        __jsp_tag_ctru8.setName("nodeStamp");
                                        __jsp_tag_starteval=__jsp_tag_ctru8.doStartTag();
                                        if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                        {
                                          do {
                                            {
                                              __jsp_tag_ctru11.setPageContext(pageContext);
                                              __jsp_tag_ctru11.setParent(__jsp_tag_ctru8);
                                              __jsp_tag_ctru11.setText("#{menuButton.label}");
                                              __jsp_tag_ctru11.setIcon("#{menuButton.icon}");
                                              __jsp_tag_ctru11.setType("global");
                                              __jsp_tag_ctru11.setAction("#{menuButton.getOutcome}");
                                              __jsp_tag_ctru11.setRendered("#{menuButton.type=='global'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru11.doStartTag();
                                              if (__jsp_tag_ctru11.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          } while (__jsp_tag_ctru8.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                                        }
                                        if (__jsp_tag_ctru8.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                          return;
                                      }
                                    }
                                    if (__jsp_tag_ctru10.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
                              __jsp_tag_ctru6.setName("branding");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru12.setPageContext(pageContext);
                                    __jsp_tag_ctru12.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru12.setSource("/myicons/oracle_logo.gif");
                                    __jsp_tag_starteval=__jsp_tag_ctru12.doStartTag();
                                    if (__jsp_tag_ctru12.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
                              __jsp_tag_ctru6.setName("brandingApp");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru12.setPageContext(pageContext);
                                    __jsp_tag_ctru12.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru12.setSource("/myicons/mapviewer.gif");
                                    __jsp_tag_starteval=__jsp_tag_ctru12.doStartTag();
                                    if (__jsp_tag_ctru12.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru13.setPageContext(pageContext);
                                    __jsp_tag_ctru13.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru13.setValue("#{mvbundle.copyright}");
                                    __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                    if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("brandingAppContextual");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru14.setPageContext(pageContext);
                                    __jsp_tag_ctru14.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru14.setStyleUsage("inContextBranding");
                                    __jsp_tag_ctru14.setValue("#{mvbundle.loclocloc}");
                                    __jsp_tag_starteval=__jsp_tag_ctru14.doStartTag();
                                    if (__jsp_tag_ctru14.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                      return;
                                  }
                                } while (__jsp_tag_ctru6.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                              }
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru15.setPageContext(pageContext);
                              __jsp_tag_ctru15.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru15.setWidth("90%");
                              __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                {
                                  __jsp_tag_ctru16.setPageContext(pageContext);
                                  __jsp_tag_ctru16.setParent(__jsp_tag_ctru15);
                                  __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                  if (OracleJspRuntime.checkStartBodyTagEval(__jsp_tag_starteval))
                                  {
                                    out=OracleJspRuntime.pushBodyIfNeeded(pageContext,__jsp_tag_ctru16,__jsp_tag_starteval,out);
                                    __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
                                    do {
                                      out.write( "<table" + " cellspacing=\"" + "2"+ "\"" + " cellpadding=\"" + "3"+ "\"" + " border=\"" + "1"+ "\"" + " align=\"" + "default"+ "\"" + " width=\"" + "100%"+ "\"" +">");
                                      out.write( "<tr>");
                                      out.write( "<th>");
                                      __ojsp_s_out.write(__oracle_jsp_text[0]);
                                      out.write( "</th>");
                                      out.write( "<th>");
                                      __ojsp_s_out.write(__oracle_jsp_text[1]);
                                      out.write( "</th>");
                                      out.write( "<th>");
                                      __ojsp_s_out.write(__oracle_jsp_text[2]);
                                      out.write( "</th>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/jview.jsp"+ "\"" + " target=\"" + "_blank"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[3]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[4]);
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/jview.jsp.txt"+ "\"" + " target=\"" + "_blank"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[5]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[6]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/fsmc/omaps.jsp"+ "\"" + " target=\"" + "_blank"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[7]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[8]);
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[9]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/mapclient.jsp"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[10]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[11]);
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[12]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/mapinit.jsp"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[13]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/mapinit.jsp.txt"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[14]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[15]);
                                      out.write( "<font" + " color=\"" + "#ff0000"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[16]);
                                      out.write( "</font>");
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/tagmap.jsp"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[17]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/tagmap.jsp.txt"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[18]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[19]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/faces/fsmc/oraclemaps.jspx"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[20]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[21]);
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[22]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/terrinit.jsp"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[23]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[24]);
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[25]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/topology.jsp"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[26]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[27]);
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[28]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/network.jsp"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[29]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[30]);
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[31]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "<tr>");
                                      out.write( "<td>");
                                      out.write( "<a" + " href=\"" + "/mapviewer/demo/georaster.jsp"+ "\"" +">");
                                      __ojsp_s_out.write(__oracle_jsp_text[32]);
                                      out.write( "</a>");
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[33]);
                                      out.write( "</td>");
                                      out.write( "<td>");
                                      __ojsp_s_out.write(__oracle_jsp_text[34]);
                                      out.write( "</td>");
                                      out.write( "</tr>");
                                      out.write( "</table>");
                                    } while (__jsp_tag_ctru16.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                                    out=OracleJspRuntime.popBodyIfNeeded(pageContext,out);
                                    __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
                                  }
                                  if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru17.setPageContext(pageContext);
                                  __jsp_tag_ctru17.setParent(__jsp_tag_ctru15);
                                  __jsp_tag_ctru17.setText("Oracle Maps tutorial");
                                  __jsp_tag_ctru17.setDestination("/fsmc/tutorial/index.html");
                                  __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                  if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                              }
                              if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru18.setPageContext(pageContext);
                              __jsp_tag_ctru18.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru18.setWidth("10");
                              __jsp_tag_ctru18.setHeight("10");
                              __jsp_tag_starteval=__jsp_tag_ctru18.doStartTag();
                              if (__jsp_tag_ctru18.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
  private static final byte __oracle_jsp_text[][]=new byte[35][];
  static {
    try {
    __oracle_jsp_text[0] = 
    "\n                       Demo\n                    ".getBytes("Cp1252");
    __oracle_jsp_text[1] = 
    "\n                       Source code\n                    ".getBytes("Cp1252");
    __oracle_jsp_text[2] = 
    "\n                       Description\n                    ".getBytes("Cp1252");
    __oracle_jsp_text[3] = 
    "JView".getBytes("Cp1252");
    __oracle_jsp_text[4] = 
    "                       \n                      ".getBytes("Cp1252");
    __oracle_jsp_text[5] = 
    "\n                        view\n                      ".getBytes("Cp1252");
    __oracle_jsp_text[6] = 
    "A simple SQL geometry viewer. Write a SQL query, display its result on a map.".getBytes("Cp1252");
    __oracle_jsp_text[7] = 
    "OMaps".getBytes("Cp1252");
    __oracle_jsp_text[8] = 
    "                       \n                    ".getBytes("Cp1252");
    __oracle_jsp_text[9] = 
    "A simple viewer for testing/previewing your base map cache instances. ".getBytes("Cp1252");
    __oracle_jsp_text[10] = 
    "mapclient".getBytes("Cp1252");
    __oracle_jsp_text[11] = 
    " ".getBytes("Cp1252");
    __oracle_jsp_text[12] = 
    "A simple JSP demo that uses a Java bean. This demo\n                        works with any Oracle Spatial dataset as long as you\n                        have defined a datasource for it.".getBytes("Cp1252");
    __oracle_jsp_text[13] = 
    "mapinit".getBytes("Cp1252");
    __oracle_jsp_text[14] = 
    "view".getBytes("Cp1252");
    __oracle_jsp_text[15] = 
    "A JSP demo using the MapViewer Java client API. This demo\n                      works only if you have imported the demo dataset and\n                      defined a datasource named \"mvdemo\".\n                      ".getBytes("Cp1252");
    __oracle_jsp_text[16] = 
    "\n                        SVG in action!\n                      ".getBytes("Cp1252");
    __oracle_jsp_text[17] = 
    "tagmap".getBytes("Cp1252");
    __oracle_jsp_text[18] = 
    "\n                        view\n                      ".getBytes("Cp1252");
    __oracle_jsp_text[19] = 
    "A demo using MapViewer JSP tags and the Java client\n                        API. This demo works only if you have imported the demo\n                        dataset and defined a datasource named \"mvdemo\".".getBytes("Cp1252");
    __oracle_jsp_text[20] = 
    "maps and faces".getBytes("Cp1252");
    __oracle_jsp_text[21] = 
    " ".getBytes("Cp1252");
    __oracle_jsp_text[22] = 
    "A demo using the new Oracle Maps JavaScript API and the\n                        Oracle ADF Faces technology. You must have performed the Oracle Maps tutorial setup before running this demo. \n                    ".getBytes("Cp1252");
    __oracle_jsp_text[23] = 
    "region manager".getBytes("Cp1252");
    __oracle_jsp_text[24] = 
    " ".getBytes("Cp1252");
    __oracle_jsp_text[25] = 
    " A powerful & interactive Region Management demo using MapViewer's SVG capabilities (requires 10g database)".getBytes("Cp1252");
    __oracle_jsp_text[26] = 
    "topology".getBytes("Cp1252");
    __oracle_jsp_text[27] = 
    " ".getBytes("Cp1252");
    __oracle_jsp_text[28] = 
    " A simple JSP demo that you can use to view Oracle Spatial 10g Topology data".getBytes("Cp1252");
    __oracle_jsp_text[29] = 
    "network".getBytes("Cp1252");
    __oracle_jsp_text[30] = 
    " ".getBytes("Cp1252");
    __oracle_jsp_text[31] = 
    " A simple JSP demo that you can use to view any Oracle Spatial Network Data Model data".getBytes("Cp1252");
    __oracle_jsp_text[32] = 
    "georaster".getBytes("Cp1252");
    __oracle_jsp_text[33] = 
    " ".getBytes("Cp1252");
    __oracle_jsp_text[34] = 
    " A simple JSP demo that you can use to view any Oracle Spatial GeoRaster data ".getBytes("Cp1252");
    }
    catch (Throwable th) {
      System.err.println(th);
    }
}
}
