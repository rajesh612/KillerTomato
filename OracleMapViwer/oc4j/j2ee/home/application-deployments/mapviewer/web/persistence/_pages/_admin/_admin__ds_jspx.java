package _admin;

import oracle.jsp.runtime.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;


public class _admin__ds_jspx extends com.orionserver.http.OrionHttpJspPage {


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
    _admin__ds_jspx page = this;
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
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuBarTag id value startDepth var
      oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuBarTag __jsp_tag_ctru15 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuBarTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuBarTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag text action
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag __jsp_tag_ctru16 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandMenuItemTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuListTag id value startDepth var
      oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuListTag __jsp_tag_ctru17 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuListTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreMenuListTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag layout
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag __jsp_tag_ctru18 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag text action
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag __jsp_tag_ctru19 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag width height
      oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag __jsp_tag_ctru20 = (oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag width text
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag __jsp_tag_ctru21 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag width emptyText banding bandingInterval selectionListener var value binding
      oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag __jsp_tag_ctru22 = (oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag formatType headerText sortable
      oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag __jsp_tag_ctru23 = (oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.data.CoreTableSelectOneTag text
      oracle.adfinternal.view.faces.taglib.core.data.CoreTableSelectOneTag __jsp_tag_ctru24 = (oracle.adfinternal.view.faces.taglib.core.data.CoreTableSelectOneTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.data.CoreTableSelectOneTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag text partialSubmit useWindow windowWidth windowHeight action returnListener launchListener
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag __jsp_tag_ctru25 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag layout
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag __jsp_tag_ctru26 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelFormTag width labelWidth fieldWidth partialTriggers
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelFormTag __jsp_tag_ctru27 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelFormTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelFormTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelButtonBarTag
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelButtonBarTag __jsp_tag_ctru28 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelButtonBarTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelButtonBarTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag text action actionListener
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag __jsp_tag_ctru29 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag label required value
      oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag __jsp_tag_ctru30 = (oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneRadioTag id layout label autoSubmit required valueChangeListener value
      oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneRadioTag __jsp_tag_ctru31 = (oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneRadioTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneRadioTag.class, "compiletime");
      // usage : com.sun.faces.taglib.jsf_core.SelectItemsTag value
      com.sun.faces.taglib.jsf_core.SelectItemsTag __jsp_tag_ctru32 = (com.sun.faces.taglib.jsf_core.SelectItemsTag) OracleJspRuntime.getTagHandler(pageContext, com.sun.faces.taglib.jsf_core.SelectItemsTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag wrap label tip value rendered
      oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag __jsp_tag_ctru33 = (oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag wrap label value rendered
      oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag __jsp_tag_ctru34 = (oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag label value rendered
      oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag __jsp_tag_ctru35 = (oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag label value
      oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag __jsp_tag_ctru36 = (oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag label tip value rendered
      oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag __jsp_tag_ctru37 = (oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreInputTextTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreMessagesTag
      oracle.adfinternal.view.faces.taglib.core.output.CoreMessagesTag __jsp_tag_ctru38 = (oracle.adfinternal.view.faces.taglib.core.output.CoreMessagesTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreMessagesTag.class, "compiletime");
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
                  __jsp_tag_ctru2.setTitle("OracleAS MapViewer Admin");
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
                          __jsp_tag_ctru5.setTitle("Manage data sources");
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
                                              __jsp_tag_ctru9.setRendered("#{menuTab.shown and                                        menuTab.type=='default'                                     }");
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
                                    __jsp_tag_ctru12.setSource("/myicons/mapviewer_admin.gif");
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
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("menu2");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru15.setPageContext(pageContext);
                                    __jsp_tag_ctru15.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru15.setId("menuSubTabsArea");
                                    __jsp_tag_ctru15.setValue("#{menuModel.model}");
                                    __jsp_tag_ctru15.setStartDepth("1");
                                    __jsp_tag_ctru15.setVar("menuSubTab");
                                    __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                                    if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                    {
                                      {
                                        __jsp_tag_ctru8.setPageContext(pageContext);
                                        __jsp_tag_ctru8.setParent(__jsp_tag_ctru15);
                                        __jsp_tag_ctru8.setName("nodeStamp");
                                        __jsp_tag_starteval=__jsp_tag_ctru8.doStartTag();
                                        if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                        {
                                          do {
                                            {
                                              __jsp_tag_ctru16.setPageContext(pageContext);
                                              __jsp_tag_ctru16.setParent(__jsp_tag_ctru8);
                                              __jsp_tag_ctru16.setText("#{menuSubTab.label}");
                                              __jsp_tag_ctru16.setAction("#{menuSubTab.getOutcome}");
                                              __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                              if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          } while (__jsp_tag_ctru8.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                                        }
                                        if (__jsp_tag_ctru8.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                          return;
                                      }
                                    }
                                    if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
                              __jsp_tag_ctru6.setName("menu3");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru17.setPageContext(pageContext);
                                    __jsp_tag_ctru17.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru17.setId("menuListArea");
                                    __jsp_tag_ctru17.setValue("#{menuModel.model}");
                                    __jsp_tag_ctru17.setStartDepth("2");
                                    __jsp_tag_ctru17.setVar("menuListItem");
                                    __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                    if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                    {
                                      {
                                        __jsp_tag_ctru8.setPageContext(pageContext);
                                        __jsp_tag_ctru8.setParent(__jsp_tag_ctru17);
                                        __jsp_tag_ctru8.setName("nodeStamp");
                                        __jsp_tag_starteval=__jsp_tag_ctru8.doStartTag();
                                        if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                        {
                                          do {
                                            {
                                              __jsp_tag_ctru16.setPageContext(pageContext);
                                              __jsp_tag_ctru16.setParent(__jsp_tag_ctru8);
                                              __jsp_tag_ctru16.setText("#{menuListItem.label}");
                                              __jsp_tag_ctru16.setAction("#{menuListItem.getOutcome}");
                                              __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                              if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          } while (__jsp_tag_ctru8.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                                        }
                                        if (__jsp_tag_ctru8.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                          return;
                                      }
                                    }
                                    if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                      return;
                                  }
                                } while (__jsp_tag_ctru6.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                              }
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru18.setPageContext(pageContext);
                              __jsp_tag_ctru18.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru18.setLayout("vertical");
                              __jsp_tag_starteval=__jsp_tag_ctru18.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                {
                                  __jsp_tag_ctru19.setPageContext(pageContext);
                                  __jsp_tag_ctru19.setParent(__jsp_tag_ctru18);
                                  __jsp_tag_ctru19.setText("#{mvbundle.refresh}");
                                  __jsp_tag_ctru19.setAction("#{adminDataSrcs.refresh}");
                                  __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                  if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru20.setPageContext(pageContext);
                                  __jsp_tag_ctru20.setParent(__jsp_tag_ctru18);
                                  __jsp_tag_ctru20.setWidth("10");
                                  __jsp_tag_ctru20.setHeight("12");
                                  __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                  if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru21.setPageContext(pageContext);
                                  __jsp_tag_ctru21.setParent(__jsp_tag_ctru18);
                                  __jsp_tag_ctru21.setWidth("90%");
                                  __jsp_tag_ctru21.setText("Existing data sources");
                                  __jsp_tag_starteval=__jsp_tag_ctru21.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru22.setPageContext(pageContext);
                                      __jsp_tag_ctru22.setParent(__jsp_tag_ctru21);
                                      __jsp_tag_ctru22.setWidth("100%");
                                      __jsp_tag_ctru22.setEmptyText("No items were found");
                                      __jsp_tag_ctru22.setBanding("row");
                                      __jsp_tag_ctru22.setBandingInterval("1");
                                      __jsp_tag_ctru22.setSelectionListener("#{adminDataSrcs.markCurrentRow}");
                                      __jsp_tag_ctru22.setVar("row");
                                      __jsp_tag_ctru22.setValue("#{adminDataSrcs.dataSources}");
                                      __jsp_tag_ctru22.setBinding("#{adminDataSrcs.uiTable}");
                                      __jsp_tag_starteval=__jsp_tag_ctru22.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru23.setPageContext(pageContext);
                                          __jsp_tag_ctru23.setParent(__jsp_tag_ctru22);
                                          __jsp_tag_ctru23.setFormatType("text");
                                          __jsp_tag_ctru23.setHeaderText("Name");
                                          __jsp_tag_ctru23.setSortable("false");
                                          __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru23);
                                              __jsp_tag_ctru13.setValue("#{row.name}");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru23.setPageContext(pageContext);
                                          __jsp_tag_ctru23.setParent(__jsp_tag_ctru22);
                                          __jsp_tag_ctru23.setFormatType("text");
                                          __jsp_tag_ctru23.setHeaderText("User");
                                          __jsp_tag_ctru23.setSortable("false");
                                          __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru23);
                                              __jsp_tag_ctru13.setValue("#{row.user}");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru23.setPageContext(pageContext);
                                          __jsp_tag_ctru23.setParent(__jsp_tag_ctru22);
                                          __jsp_tag_ctru23.setFormatType("text");
                                          __jsp_tag_ctru23.setHeaderText("OC4J DS");
                                          __jsp_tag_ctru23.setSortable("false");
                                          __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru23);
                                              __jsp_tag_ctru13.setValue("#{row.containerDS}");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru23.setPageContext(pageContext);
                                          __jsp_tag_ctru23.setParent(__jsp_tag_ctru22);
                                          __jsp_tag_ctru23.setFormatType("text");
                                          __jsp_tag_ctru23.setHeaderText("JDBC Url");
                                          __jsp_tag_ctru23.setSortable("false");
                                          __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru23);
                                              __jsp_tag_ctru13.setValue("#{row.url}");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru23.setPageContext(pageContext);
                                          __jsp_tag_ctru23.setParent(__jsp_tag_ctru22);
                                          __jsp_tag_ctru23.setFormatType("text");
                                          __jsp_tag_ctru23.setHeaderText("TNS name");
                                          __jsp_tag_ctru23.setSortable("false");
                                          __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru23);
                                              __jsp_tag_ctru13.setValue("#{row.tnsName}");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru23.setPageContext(pageContext);
                                          __jsp_tag_ctru23.setParent(__jsp_tag_ctru22);
                                          __jsp_tag_ctru23.setFormatType("number");
                                          __jsp_tag_ctru23.setHeaderText("Mappers");
                                          __jsp_tag_ctru23.setSortable("false");
                                          __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru23);
                                              __jsp_tag_ctru13.setValue("#{row.numMappers}");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru23.setPageContext(pageContext);
                                          __jsp_tag_ctru23.setParent(__jsp_tag_ctru22);
                                          __jsp_tag_ctru23.setFormatType("number");
                                          __jsp_tag_ctru23.setHeaderText("Max conns");
                                          __jsp_tag_ctru23.setSortable("false");
                                          __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru13.setPageContext(pageContext);
                                              __jsp_tag_ctru13.setParent(__jsp_tag_ctru23);
                                              __jsp_tag_ctru13.setValue("#{row.maxConn}");
                                              __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                              if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru6.setPageContext(pageContext);
                                          __jsp_tag_ctru6.setParent(__jsp_tag_ctru22);
                                          __jsp_tag_ctru6.setName("selection");
                                          __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            do {
                                              {
                                                __jsp_tag_ctru24.setPageContext(pageContext);
                                                __jsp_tag_ctru24.setParent(__jsp_tag_ctru6);
                                                __jsp_tag_ctru24.setText("Select a data source and ");
                                                __jsp_tag_starteval=__jsp_tag_ctru24.doStartTag();
                                                if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                {
                                                  {
                                                    __jsp_tag_ctru19.setPageContext(pageContext);
                                                    __jsp_tag_ctru19.setParent(__jsp_tag_ctru24);
                                                    __jsp_tag_ctru19.setText("Edit");
                                                    __jsp_tag_ctru19.setAction("#{adminDataSrcs.edit}");
                                                    __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                                    if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                      return;
                                                  }
                                                  {
                                                    __jsp_tag_ctru25.setPageContext(pageContext);
                                                    __jsp_tag_ctru25.setParent(__jsp_tag_ctru24);
                                                    __jsp_tag_ctru25.setText("Delete");
                                                    __jsp_tag_ctru25.setPartialSubmit("false");
                                                    __jsp_tag_ctru25.setUseWindow("true");
                                                    __jsp_tag_ctru25.setWindowWidth("400");
                                                    __jsp_tag_ctru25.setWindowHeight("220");
                                                    __jsp_tag_ctru25.setAction("dialog:deleteWarn");
                                                    __jsp_tag_ctru25.setReturnListener("#{adminDataSrcs.deleteDialogDone}");
                                                    __jsp_tag_ctru25.setLaunchListener("#{adminDataSrcs.handleDialogLaunch}");
                                                    __jsp_tag_starteval=__jsp_tag_ctru25.doStartTag();
                                                    if (__jsp_tag_ctru25.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                      return;
                                                  }
                                                  {
                                                    __jsp_tag_ctru19.setPageContext(pageContext);
                                                    __jsp_tag_ctru19.setParent(__jsp_tag_ctru24);
                                                    __jsp_tag_ctru19.setText("Purge cached metadata");
                                                    __jsp_tag_ctru19.setAction("#{adminDataSrcs.clearMetadataCache}");
                                                    __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                                    if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                      return;
                                                  }
                                                }
                                                if (__jsp_tag_ctru24.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                  return;
                                              }
                                            } while (__jsp_tag_ctru6.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                                          }
                                          if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru22.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru21.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru20.setPageContext(pageContext);
                                  __jsp_tag_ctru20.setParent(__jsp_tag_ctru18);
                                  __jsp_tag_ctru20.setWidth("10");
                                  __jsp_tag_ctru20.setHeight("15");
                                  __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                  if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru21.setPageContext(pageContext);
                                  __jsp_tag_ctru21.setParent(__jsp_tag_ctru18);
                                  __jsp_tag_ctru21.setWidth("90%");
                                  __jsp_tag_ctru21.setText("Create a dynamic data source");
                                  __jsp_tag_starteval=__jsp_tag_ctru21.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru26.setPageContext(pageContext);
                                      __jsp_tag_ctru26.setParent(__jsp_tag_ctru21);
                                      __jsp_tag_ctru26.setLayout("vertical");
                                      __jsp_tag_starteval=__jsp_tag_ctru26.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru27.setPageContext(pageContext);
                                          __jsp_tag_ctru27.setParent(__jsp_tag_ctru26);
                                          __jsp_tag_ctru27.setWidth("75%");
                                          __jsp_tag_ctru27.setLabelWidth("40%");
                                          __jsp_tag_ctru27.setFieldWidth("60%");
                                          __jsp_tag_ctru27.setPartialTriggers("DSrcTypeCreate");
                                          __jsp_tag_starteval=__jsp_tag_ctru27.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru6.setPageContext(pageContext);
                                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru6.setName("footer");
                                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                do {
                                                  {
                                                    __jsp_tag_ctru28.setPageContext(pageContext);
                                                    __jsp_tag_ctru28.setParent(__jsp_tag_ctru6);
                                                    __jsp_tag_starteval=__jsp_tag_ctru28.doStartTag();
                                                    if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                    {
                                                      {
                                                        __jsp_tag_ctru29.setPageContext(pageContext);
                                                        __jsp_tag_ctru29.setParent(__jsp_tag_ctru28);
                                                        __jsp_tag_ctru29.setText("Submit");
                                                        __jsp_tag_ctru29.setAction("#{newDataSrc.createNewDS}");
                                                        __jsp_tag_ctru29.setActionListener("#{newDataSrc.createDataSrc_submitted}");
                                                        __jsp_tag_starteval=__jsp_tag_ctru29.doStartTag();
                                                        if (__jsp_tag_ctru29.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                          return;
                                                      }
                                                    }
                                                    if (__jsp_tag_ctru28.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                      return;
                                                  }
                                                } while (__jsp_tag_ctru6.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                                              }
                                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru20.setWidth("10");
                                              __jsp_tag_ctru20.setHeight("8");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru30.setPageContext(pageContext);
                                              __jsp_tag_ctru30.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru30.setLabel("Name:");
                                              __jsp_tag_ctru30.setRequired("false");
                                              __jsp_tag_ctru30.setValue("#{newDataSrc.name}");
                                              __jsp_tag_starteval=__jsp_tag_ctru30.doStartTag();
                                              if (__jsp_tag_ctru30.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru20.setWidth("10");
                                              __jsp_tag_ctru20.setHeight("8");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru31.setPageContext(pageContext);
                                              __jsp_tag_ctru31.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru31.setId("DSrcTypeCreate");
                                              __jsp_tag_ctru31.setLayout("horizontal");
                                              __jsp_tag_ctru31.setLabel("Based on:");
                                              __jsp_tag_ctru31.setAutoSubmit("true");
                                              __jsp_tag_ctru31.setRequired("true");
                                              __jsp_tag_ctru31.setValueChangeListener("#{newDataSrc.typeChanged}");
                                              __jsp_tag_ctru31.setValue("#{newDataSrc.type}");
                                              __jsp_tag_starteval=__jsp_tag_ctru31.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru32.setPageContext(pageContext);
                                                  __jsp_tag_ctru32.setParent(__jsp_tag_ctru31);
                                                  __jsp_tag_ctru32.setValue("#{newDataSrc.dataSrcTypes}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru32.doStartTag();
                                                  if (__jsp_tag_ctru32.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru31.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru20.setWidth("10");
                                              __jsp_tag_ctru20.setHeight("8");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru33.setPageContext(pageContext);
                                              __jsp_tag_ctru33.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru33.setWrap("off");
                                              __jsp_tag_ctru33.setLabel("J2EE ds:");
                                              __jsp_tag_ctru33.setTip("#{mvbundle.j2eeds}");
                                              __jsp_tag_ctru33.setValue("#{newDataSrc.containerDS}");
                                              __jsp_tag_ctru33.setRendered("#{newDataSrc.type=='J2EE DS'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru33.doStartTag();
                                              if (__jsp_tag_ctru33.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru34.setPageContext(pageContext);
                                              __jsp_tag_ctru34.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru34.setWrap("off");
                                              __jsp_tag_ctru34.setLabel("TNS Name:");
                                              __jsp_tag_ctru34.setValue("#{newDataSrc.tnsName}");
                                              __jsp_tag_ctru34.setRendered("#{newDataSrc.type=='TNS name'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru34.doStartTag();
                                              if (__jsp_tag_ctru34.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru35.setPageContext(pageContext);
                                              __jsp_tag_ctru35.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru35.setLabel("Host:");
                                              __jsp_tag_ctru35.setValue("#{newDataSrc.host}");
                                              __jsp_tag_ctru35.setRendered("#{newDataSrc.type=='JDBC URL'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru35.doStartTag();
                                              if (__jsp_tag_ctru35.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru35.setPageContext(pageContext);
                                              __jsp_tag_ctru35.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru35.setLabel("Port:");
                                              __jsp_tag_ctru35.setValue("#{newDataSrc.port}");
                                              __jsp_tag_ctru35.setRendered("#{newDataSrc.type=='JDBC URL'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru35.doStartTag();
                                              if (__jsp_tag_ctru35.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru35.setPageContext(pageContext);
                                              __jsp_tag_ctru35.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru35.setLabel("Sid:");
                                              __jsp_tag_ctru35.setValue("#{newDataSrc.sid}");
                                              __jsp_tag_ctru35.setRendered("#{newDataSrc.type=='JDBC URL'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru35.doStartTag();
                                              if (__jsp_tag_ctru35.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru35.setPageContext(pageContext);
                                              __jsp_tag_ctru35.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru35.setLabel("User:");
                                              __jsp_tag_ctru35.setValue("#{newDataSrc.user}");
                                              __jsp_tag_ctru35.setRendered("#{newDataSrc.type=='JDBC URL' or newDataSrc.type=='TNS name'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru35.doStartTag();
                                              if (__jsp_tag_ctru35.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru35.setPageContext(pageContext);
                                              __jsp_tag_ctru35.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru35.setLabel("Password:");
                                              __jsp_tag_ctru35.setValue("#{newDataSrc.password}");
                                              __jsp_tag_ctru35.setRendered("#{newDataSrc.type=='JDBC URL' or newDataSrc.type=='TNS name'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru35.doStartTag();
                                              if (__jsp_tag_ctru35.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru36.setPageContext(pageContext);
                                              __jsp_tag_ctru36.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru36.setLabel("# Mappers:");
                                              __jsp_tag_ctru36.setValue("#{newDataSrc.numMappers}");
                                              __jsp_tag_starteval=__jsp_tag_ctru36.doStartTag();
                                              if (__jsp_tag_ctru36.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru37.setPageContext(pageContext);
                                              __jsp_tag_ctru37.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru37.setLabel("Max Connections:");
                                              __jsp_tag_ctru37.setTip("#{mvbundle.maxconns}");
                                              __jsp_tag_ctru37.setValue("#{newDataSrc.maxConns}");
                                              __jsp_tag_ctru37.setRendered("#{newDataSrc.type=='JDBC URL' or newDataSrc.type=='TNS name'}");
                                              __jsp_tag_starteval=__jsp_tag_ctru37.doStartTag();
                                              if (__jsp_tag_ctru37.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru27);
                                              __jsp_tag_ctru20.setWidth("10");
                                              __jsp_tag_ctru20.setHeight("10");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru27.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru26.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru21.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru20.setPageContext(pageContext);
                                  __jsp_tag_ctru20.setParent(__jsp_tag_ctru18);
                                  __jsp_tag_ctru20.setWidth("10");
                                  __jsp_tag_ctru20.setHeight("15");
                                  __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                  if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                              }
                              if (__jsp_tag_ctru18.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                return;
                            }
                            {
                              __jsp_tag_ctru6.setPageContext(pageContext);
                              __jsp_tag_ctru6.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru6.setName("messages");
                              __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                do {
                                  {
                                    __jsp_tag_ctru38.setPageContext(pageContext);
                                    __jsp_tag_ctru38.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_starteval=__jsp_tag_ctru38.doStartTag();
                                    if (__jsp_tag_ctru38.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                      return;
                                  }
                                } while (__jsp_tag_ctru6.doAfterBody()==javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN);
                              }
                              if (__jsp_tag_ctru6.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
}
