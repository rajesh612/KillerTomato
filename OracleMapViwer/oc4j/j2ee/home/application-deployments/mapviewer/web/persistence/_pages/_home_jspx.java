
import oracle.jsp.runtime.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;


public class _home_jspx extends com.orionserver.http.OrionHttpJspPage {


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
    _home_jspx page = this;
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
      // usage : oracle.adfinternal.view.faces.taglib.html.HtmlBodyTag inlineStyle
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
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag text type action rendered
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
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag layout
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag __jsp_tag_ctru15 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag layout
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag __jsp_tag_ctru16 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag value
      oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag __jsp_tag_ctru17 = (oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag width height
      oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag __jsp_tag_ctru18 = (oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag __jsp_tag_ctru19 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag width text
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag __jsp_tag_ctru20 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelListTag maxColumns
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelListTag __jsp_tag_ctru21 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelListTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelListTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreOutputTextTag truncateAt value rendered
      oracle.adfinternal.view.faces.taglib.core.output.CoreOutputTextTag __jsp_tag_ctru22 = (oracle.adfinternal.view.faces.taglib.core.output.CoreOutputTextTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreOutputTextTag.class, "compiletime");
      // usage : com.sun.faces.taglib.jsf_core.VerbatimTag
      com.sun.faces.taglib.jsf_core.VerbatimTag __jsp_tag_ctru23 = (com.sun.faces.taglib.jsf_core.VerbatimTag) OracleJspRuntime.getTagHandler(pageContext, com.sun.faces.taglib.jsf_core.VerbatimTag.class, "compiletime");
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
                  __jsp_tag_ctru3.setInlineStyle("background-image:url(myicons/bgearth.gif);");
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
                          __jsp_tag_ctru5.setTitle("Welcome!");
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
                                              __jsp_tag_ctru9.setType("default");
                                              __jsp_tag_ctru9.setAction("#{menuTab.getOutcome}");
                                              __jsp_tag_ctru9.setRendered("#{menuTab.shown and                                                    menuTab.type=='default'                                                   }");
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
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru14.setPageContext(pageContext);
                                    __jsp_tag_ctru14.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru14.setStyleUsage("inContextBranding");
                                    __jsp_tag_ctru14.setValue("OracleAS MapViewer Version: #{mvconfig.version}");
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
                              __jsp_tag_ctru15.setLayout("vertical");
                              __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                {
                                  __jsp_tag_ctru16.setPageContext(pageContext);
                                  __jsp_tag_ctru16.setParent(__jsp_tag_ctru15);
                                  __jsp_tag_ctru16.setLayout("vertical");
                                  __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru17.setPageContext(pageContext);
                                      __jsp_tag_ctru17.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_ctru17.setValue("Your MapViewer server is now running and you can start viewing your Oracle Spatial managed data.");
                                      __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                      if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                    {
                                      __jsp_tag_ctru17.setPageContext(pageContext);
                                      __jsp_tag_ctru17.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_ctru17.setValue("MapViewer is a component of Oracle Application Server.");
                                      __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                      if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                    {
                                      __jsp_tag_ctru6.setPageContext(pageContext);
                                      __jsp_tag_ctru6.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_ctru6.setName("separator");
                                      __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                                      if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                    {
                                      __jsp_tag_ctru17.setPageContext(pageContext);
                                      __jsp_tag_ctru17.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_ctru17.setValue("It provides powerful geospatial data visualization services.");
                                      __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                      if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru18.setPageContext(pageContext);
                                  __jsp_tag_ctru18.setParent(__jsp_tag_ctru15);
                                  __jsp_tag_ctru18.setWidth("100%");
                                  __jsp_tag_ctru18.setHeight("10");
                                  __jsp_tag_starteval=__jsp_tag_ctru18.doStartTag();
                                  if (__jsp_tag_ctru18.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru19.setPageContext(pageContext);
                                  __jsp_tag_ctru19.setParent(__jsp_tag_ctru15);
                                  __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru20.setPageContext(pageContext);
                                      __jsp_tag_ctru20.setParent(__jsp_tag_ctru19);
                                      __jsp_tag_ctru20.setWidth("60%");
                                      __jsp_tag_ctru20.setText("Getting started");
                                      __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru13.setPageContext(pageContext);
                                          __jsp_tag_ctru13.setParent(__jsp_tag_ctru20);
                                          __jsp_tag_ctru13.setValue("Here are a few things that can get you started.");
                                          __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                          if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru21.setPageContext(pageContext);
                                          __jsp_tag_ctru21.setParent(__jsp_tag_ctru20);
                                          __jsp_tag_ctru21.setMaxColumns("1");
                                          __jsp_tag_starteval=__jsp_tag_ctru21.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru22.setPageContext(pageContext);
                                              __jsp_tag_ctru22.setParent(__jsp_tag_ctru21);
                                              __jsp_tag_ctru22.setTruncateAt("0");
                                              __jsp_tag_ctru22.setValue("Use MapBuilder to import some spatial data into an Oracle database that you have access to.");
                                              __jsp_tag_ctru22.setRendered("true");
                                              __jsp_tag_starteval=__jsp_tag_ctru22.doStartTag();
                                              if (__jsp_tag_ctru22.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru21);
                                              __jsp_tag_ctru13.setValue("Create a data source so that MapViewer can connect to the database. Please log into the Admin page to do so.");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru21);
                                              __jsp_tag_ctru13.setValue("Use the JView demo to quickly view your spatial data. You can find it under the Demos tab.");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru21);
                                              __jsp_tag_ctru13.setValue("Start developing your first MapViewer applications.");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru21.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                    {
                                      __jsp_tag_ctru18.setPageContext(pageContext);
                                      __jsp_tag_ctru18.setParent(__jsp_tag_ctru19);
                                      __jsp_tag_ctru18.setWidth("10");
                                      __jsp_tag_ctru18.setHeight("15");
                                      __jsp_tag_starteval=__jsp_tag_ctru18.doStartTag();
                                      if (__jsp_tag_ctru18.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                    {
                                      __jsp_tag_ctru20.setPageContext(pageContext);
                                      __jsp_tag_ctru20.setParent(__jsp_tag_ctru19);
                                      __jsp_tag_ctru20.setWidth("60%");
                                      __jsp_tag_ctru20.setText("What is Oracle Maps");
                                      __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru13.setPageContext(pageContext);
                                          __jsp_tag_ctru13.setParent(__jsp_tag_ctru20);
                                          __jsp_tag_ctru13.setValue("Oracle Maps is a new feature of MapViewer.                   It consists of a free scrolling AJAX-based web mapping interface,                    a flexible and open JavaScript API, a server-side map image                    caching engine and a Feature of Interest (FOI) server.");
                                          __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                          if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru23.setPageContext(pageContext);
                                          __jsp_tag_ctru23.setParent(__jsp_tag_ctru20);
                                          __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                          if (OracleJspRuntime.checkStartBodyTagEval(__jsp_tag_starteval))
                                          {
                                            out=OracleJspRuntime.pushBodyIfNeeded(pageContext,__jsp_tag_ctru23,__jsp_tag_starteval,out);
                                            __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
                                            do {
                                              out.write( "<UL>");
                                              out.write( "<LI>");
                                              out.write( "<a" + " href=\"" + "/mapviewer/fsmc/tutorial/index.html"+ "\"" + " target=\"" + "_blank"+ "\"" +">");
                                              __ojsp_s_out.write(__oracle_jsp_text[0]);
                                              out.write( "</a>");
                                              out.write( "</LI>");
                                              out.write( "<LI>");
                                              out.write( "<a" + " href=\"" + "/mapviewer/fsmc/apidoc/index.html"+ "\"" + " target=\"" + "_blank"+ "\"" +">");
                                              __ojsp_s_out.write(__oracle_jsp_text[1]);
                                              out.write( "</a>");
                                              out.write( "</LI>");
                                              out.write( "</UL>");
                                            } while (__jsp_tag_ctru23.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                                            out=OracleJspRuntime.popBodyIfNeeded(pageContext,out);
                                            __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
                                          }
                                          if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                              }
                              if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
  private static final byte __oracle_jsp_text[][]=new byte[2][];
  static {
    try {
    __oracle_jsp_text[0] = 
    "\n                      Oracle Maps Tutorial\n                    ".getBytes("UTF8");
    __oracle_jsp_text[1] = 
    "\n                      Oracle Maps API Reference\n                    ".getBytes("UTF8");
    }
    catch (Throwable th) {
      System.err.println(th);
    }
}
}
