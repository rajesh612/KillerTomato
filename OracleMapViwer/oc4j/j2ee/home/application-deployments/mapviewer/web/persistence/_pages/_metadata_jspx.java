
import oracle.jsp.runtime.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;


public class _metadata_jspx extends com.orionserver.http.OrionHttpJspPage {


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
    _metadata_jspx page = this;
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
      // usage : com.sun.faces.taglib.html_basic.PanelGridTag columns width
      com.sun.faces.taglib.html_basic.PanelGridTag __jsp_tag_ctru14 = (com.sun.faces.taglib.html_basic.PanelGridTag) OracleJspRuntime.getTagHandler(pageContext, com.sun.faces.taglib.html_basic.PanelGridTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag id text actionListener
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag __jsp_tag_ctru15 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag width background text icon
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag __jsp_tag_ctru16 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelBoxTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag __jsp_tag_ctru17 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag var value
      oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag __jsp_tag_ctru18 = (oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag
      oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag __jsp_tag_ctru19 = (oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag width height
      oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag __jsp_tag_ctru20 = (oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreObjectSpacerTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag emptyText var value rows
      oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag __jsp_tag_ctru21 = (oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag headerText sortable
      oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag __jsp_tag_ctru22 = (oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.data.CoreColumnTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag layout
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag __jsp_tag_ctru23 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag layout
      oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag __jsp_tag_ctru24 = (oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.layout.CorePanelGroupTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreOutputLabelTag value
      oracle.adfinternal.view.faces.taglib.core.output.CoreOutputLabelTag __jsp_tag_ctru25 = (oracle.adfinternal.view.faces.taglib.core.output.CoreOutputLabelTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreOutputLabelTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneChoiceTag required value
      oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneChoiceTag __jsp_tag_ctru26 = (oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneChoiceTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneChoiceTag.class, "compiletime");
      // usage : com.sun.faces.taglib.jsf_core.SelectItemsTag value
      com.sun.faces.taglib.jsf_core.SelectItemsTag __jsp_tag_ctru27 = (com.sun.faces.taglib.jsf_core.SelectItemsTag) OracleJspRuntime.getTagHandler(pageContext, com.sun.faces.taglib.jsf_core.SelectItemsTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag text actionListener
      oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag __jsp_tag_ctru28 = (oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.nav.CoreCommandButtonTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag var value rendered
      oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag __jsp_tag_ctru29 = (oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.data.CoreTableTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneChoiceTag onchange required valueChangeListener value
      oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneChoiceTag __jsp_tag_ctru30 = (oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneChoiceTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.input.CoreSelectOneChoiceTag.class, "compiletime");
      // usage : oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag styleUsage value
      oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag __jsp_tag_ctru31 = (oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag) OracleJspRuntime.getTagHandler(pageContext, oracle.adfinternal.view.faces.taglib.core.output.CoreOutputFormattedTag.class, "compiletime");
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
                          __jsp_tag_ctru5.setTitle("Metadata for MapViewer");
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
                              __jsp_tag_ctru14.setPageContext(pageContext);
                              __jsp_tag_ctru14.setParent(__jsp_tag_ctru5);
                              __jsp_tag_ctru14.setColumns("1");
                              __jsp_tag_ctru14.setWidth("100%");
                              __jsp_tag_starteval=__jsp_tag_ctru14.doStartTag();
                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                              {
                                {
                                  __jsp_tag_ctru15.setPageContext(pageContext);
                                  __jsp_tag_ctru15.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru15.setId("refresh1");
                                  __jsp_tag_ctru15.setText("#{mvbundle.refresh}");
                                  __jsp_tag_ctru15.setActionListener("#{metadata.refresh}");
                                  __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                                  if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru16.setPageContext(pageContext);
                                  __jsp_tag_ctru16.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru16.setWidth("80%");
                                  __jsp_tag_ctru16.setBackground("medium");
                                  __jsp_tag_ctru16.setText("Existing Data Sources");
                                  __jsp_tag_ctru16.setIcon("/myicons/info.gif");
                                  __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru17.setPageContext(pageContext);
                                      __jsp_tag_ctru17.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru18.setPageContext(pageContext);
                                          __jsp_tag_ctru18.setParent(__jsp_tag_ctru17);
                                          __jsp_tag_ctru18.setVar("ds");
                                          __jsp_tag_ctru18.setValue("#{metadata.dataSources}");
                                          __jsp_tag_starteval=__jsp_tag_ctru18.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru19.setPageContext(pageContext);
                                              __jsp_tag_ctru19.setParent(__jsp_tag_ctru18);
                                              __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru6.setPageContext(pageContext);
                                                  __jsp_tag_ctru6.setParent(__jsp_tag_ctru19);
                                                  __jsp_tag_ctru6.setName("header");
                                                  __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                  {
                                                    do {
                                                      {
                                                        __jsp_tag_ctru13.setPageContext(pageContext);
                                                        __jsp_tag_ctru13.setParent(__jsp_tag_ctru6);
                                                        __jsp_tag_ctru13.setValue("MapViewer Data Source");
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
                                                  __jsp_tag_ctru13.setPageContext(pageContext);
                                                  __jsp_tag_ctru13.setParent(__jsp_tag_ctru19);
                                                  __jsp_tag_ctru13.setValue("#{ds}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                                  if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru18.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru20.setPageContext(pageContext);
                                  __jsp_tag_ctru20.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru20.setWidth("10");
                                  __jsp_tag_ctru20.setHeight("15");
                                  __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                  if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru16.setPageContext(pageContext);
                                  __jsp_tag_ctru16.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru16.setWidth("80%");
                                  __jsp_tag_ctru16.setBackground("medium");
                                  __jsp_tag_ctru16.setText("Existing Map Image Cache instances");
                                  __jsp_tag_ctru16.setIcon("/myicons/info.gif");
                                  __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru17.setPageContext(pageContext);
                                      __jsp_tag_ctru17.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru21.setPageContext(pageContext);
                                          __jsp_tag_ctru21.setParent(__jsp_tag_ctru17);
                                          __jsp_tag_ctru21.setEmptyText("No items were found");
                                          __jsp_tag_ctru21.setVar("micache");
                                          __jsp_tag_ctru21.setValue("#{metadata.micInstances}");
                                          __jsp_tag_ctru21.setRows("5");
                                          __jsp_tag_starteval=__jsp_tag_ctru21.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru22.setPageContext(pageContext);
                                              __jsp_tag_ctru22.setParent(__jsp_tag_ctru21);
                                              __jsp_tag_ctru22.setHeaderText("Map image cache");
                                              __jsp_tag_ctru22.setSortable("false");
                                              __jsp_tag_starteval=__jsp_tag_ctru22.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru13.setPageContext(pageContext);
                                                  __jsp_tag_ctru13.setParent(__jsp_tag_ctru22);
                                                  __jsp_tag_ctru13.setValue("#{micache}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                                  if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
                                      }
                                      if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru20.setPageContext(pageContext);
                                  __jsp_tag_ctru20.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru20.setWidth("10");
                                  __jsp_tag_ctru20.setHeight("15");
                                  __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                  if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru16.setPageContext(pageContext);
                                  __jsp_tag_ctru16.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru16.setWidth("80%");
                                  __jsp_tag_ctru16.setBackground("medium");
                                  __jsp_tag_ctru16.setText("List base maps");
                                  __jsp_tag_ctru16.setIcon("/myicons/dbconnect.gif");
                                  __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru23.setPageContext(pageContext);
                                      __jsp_tag_ctru23.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_ctru23.setLayout("vertical");
                                      __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru24.setPageContext(pageContext);
                                          __jsp_tag_ctru24.setParent(__jsp_tag_ctru23);
                                          __jsp_tag_ctru24.setLayout("horizontal");
                                          __jsp_tag_starteval=__jsp_tag_ctru24.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru25.setPageContext(pageContext);
                                              __jsp_tag_ctru25.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru25.setValue("In data source: ");
                                              __jsp_tag_starteval=__jsp_tag_ctru25.doStartTag();
                                              if (__jsp_tag_ctru25.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru26.setPageContext(pageContext);
                                              __jsp_tag_ctru26.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru26.setRequired("#{metadata.numDataSrcs > 0}");
                                              __jsp_tag_ctru26.setValue("#{metadata.selectedDataSrc}");
                                              __jsp_tag_starteval=__jsp_tag_ctru26.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru27.setPageContext(pageContext);
                                                  __jsp_tag_ctru27.setParent(__jsp_tag_ctru26);
                                                  __jsp_tag_ctru27.setValue("#{metadata.dsrcList}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru27.doStartTag();
                                                  if (__jsp_tag_ctru27.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru26.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru28.setPageContext(pageContext);
                                              __jsp_tag_ctru28.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru28.setText("Submit");
                                              __jsp_tag_ctru28.setActionListener("#{metadata.fetchMaps}");
                                              __jsp_tag_starteval=__jsp_tag_ctru28.doStartTag();
                                              if (__jsp_tag_ctru28.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru15.setPageContext(pageContext);
                                              __jsp_tag_ctru15.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru15.setId("r_maps");
                                              __jsp_tag_ctru15.setText("Hide Results");
                                              __jsp_tag_ctru15.setActionListener("#{metadata.clearResults}");
                                              __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                                              if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru24.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru17.setPageContext(pageContext);
                                          __jsp_tag_ctru17.setParent(__jsp_tag_ctru23);
                                          __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru17);
                                              __jsp_tag_ctru20.setWidth("1");
                                              __jsp_tag_ctru20.setHeight("10");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru29.setPageContext(pageContext);
                                              __jsp_tag_ctru29.setParent(__jsp_tag_ctru17);
                                              __jsp_tag_ctru29.setVar("maps");
                                              __jsp_tag_ctru29.setValue("#{metadata.baseMaps}");
                                              __jsp_tag_ctru29.setRendered("true");
                                              __jsp_tag_starteval=__jsp_tag_ctru29.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru19.setPageContext(pageContext);
                                                  __jsp_tag_ctru19.setParent(__jsp_tag_ctru29);
                                                  __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                  {
                                                    {
                                                      __jsp_tag_ctru6.setPageContext(pageContext);
                                                      __jsp_tag_ctru6.setParent(__jsp_tag_ctru19);
                                                      __jsp_tag_ctru6.setName("header");
                                                      __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                      {
                                                        do {
                                                          {
                                                            __jsp_tag_ctru13.setPageContext(pageContext);
                                                            __jsp_tag_ctru13.setParent(__jsp_tag_ctru6);
                                                            __jsp_tag_ctru13.setValue("Base map");
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
                                                      __jsp_tag_ctru13.setPageContext(pageContext);
                                                      __jsp_tag_ctru13.setParent(__jsp_tag_ctru19);
                                                      __jsp_tag_ctru13.setValue("#{maps}");
                                                      __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                                      if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                        return;
                                                    }
                                                  }
                                                  if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru29.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru20.setPageContext(pageContext);
                                  __jsp_tag_ctru20.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru20.setWidth("10");
                                  __jsp_tag_ctru20.setHeight("15");
                                  __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                  if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru16.setPageContext(pageContext);
                                  __jsp_tag_ctru16.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru16.setWidth("80%");
                                  __jsp_tag_ctru16.setBackground("medium");
                                  __jsp_tag_ctru16.setText("List predefined themes");
                                  __jsp_tag_ctru16.setIcon("/myicons/dbconnect.gif");
                                  __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru23.setPageContext(pageContext);
                                      __jsp_tag_ctru23.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_ctru23.setLayout("vertical");
                                      __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru24.setPageContext(pageContext);
                                          __jsp_tag_ctru24.setParent(__jsp_tag_ctru23);
                                          __jsp_tag_ctru24.setLayout("horizontal");
                                          __jsp_tag_starteval=__jsp_tag_ctru24.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru25.setPageContext(pageContext);
                                              __jsp_tag_ctru25.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru25.setValue("In data source: ");
                                              __jsp_tag_starteval=__jsp_tag_ctru25.doStartTag();
                                              if (__jsp_tag_ctru25.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru26.setPageContext(pageContext);
                                              __jsp_tag_ctru26.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru26.setRequired("#{metadata.numDataSrcs > 0}");
                                              __jsp_tag_ctru26.setValue("#{metadata.selectedDataSrc2}");
                                              __jsp_tag_starteval=__jsp_tag_ctru26.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru27.setPageContext(pageContext);
                                                  __jsp_tag_ctru27.setParent(__jsp_tag_ctru26);
                                                  __jsp_tag_ctru27.setValue("#{metadata.dsrcList}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru27.doStartTag();
                                                  if (__jsp_tag_ctru27.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru26.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru28.setPageContext(pageContext);
                                              __jsp_tag_ctru28.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru28.setText("Submit");
                                              __jsp_tag_ctru28.setActionListener("#{metadata.fetchAllThemes}");
                                              __jsp_tag_starteval=__jsp_tag_ctru28.doStartTag();
                                              if (__jsp_tag_ctru28.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru15.setPageContext(pageContext);
                                              __jsp_tag_ctru15.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru15.setId("r_themes");
                                              __jsp_tag_ctru15.setText("Hide Results");
                                              __jsp_tag_ctru15.setActionListener("#{metadata.clearResults}");
                                              __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                                              if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru24.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru17.setPageContext(pageContext);
                                          __jsp_tag_ctru17.setParent(__jsp_tag_ctru23);
                                          __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru17);
                                              __jsp_tag_ctru20.setWidth("1");
                                              __jsp_tag_ctru20.setHeight("10");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru29.setPageContext(pageContext);
                                              __jsp_tag_ctru29.setParent(__jsp_tag_ctru17);
                                              __jsp_tag_ctru29.setVar("themes");
                                              __jsp_tag_ctru29.setValue("#{metadata.allThemes}");
                                              __jsp_tag_ctru29.setRendered("true");
                                              __jsp_tag_starteval=__jsp_tag_ctru29.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru19.setPageContext(pageContext);
                                                  __jsp_tag_ctru19.setParent(__jsp_tag_ctru29);
                                                  __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                  {
                                                    {
                                                      __jsp_tag_ctru6.setPageContext(pageContext);
                                                      __jsp_tag_ctru6.setParent(__jsp_tag_ctru19);
                                                      __jsp_tag_ctru6.setName("header");
                                                      __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                      {
                                                        do {
                                                          {
                                                            __jsp_tag_ctru13.setPageContext(pageContext);
                                                            __jsp_tag_ctru13.setParent(__jsp_tag_ctru6);
                                                            __jsp_tag_ctru13.setValue("Predefined Theme");
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
                                                      __jsp_tag_ctru13.setPageContext(pageContext);
                                                      __jsp_tag_ctru13.setParent(__jsp_tag_ctru19);
                                                      __jsp_tag_ctru13.setValue("#{themes}");
                                                      __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                                      if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                        return;
                                                    }
                                                  }
                                                  if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru29.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru20.setPageContext(pageContext);
                                  __jsp_tag_ctru20.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru20.setWidth("10");
                                  __jsp_tag_ctru20.setHeight("15");
                                  __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                  if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru16.setPageContext(pageContext);
                                  __jsp_tag_ctru16.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru16.setWidth("80%");
                                  __jsp_tag_ctru16.setBackground("medium");
                                  __jsp_tag_ctru16.setText("List predefined themes in a basemap");
                                  __jsp_tag_ctru16.setIcon("/myicons/dbconnect.gif");
                                  __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru23.setPageContext(pageContext);
                                      __jsp_tag_ctru23.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_ctru23.setLayout("vertical");
                                      __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru24.setPageContext(pageContext);
                                          __jsp_tag_ctru24.setParent(__jsp_tag_ctru23);
                                          __jsp_tag_ctru24.setLayout("horizontal");
                                          __jsp_tag_starteval=__jsp_tag_ctru24.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru25.setPageContext(pageContext);
                                              __jsp_tag_ctru25.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru25.setValue("In data source: ");
                                              __jsp_tag_starteval=__jsp_tag_ctru25.doStartTag();
                                              if (__jsp_tag_ctru25.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru30.setPageContext(pageContext);
                                              __jsp_tag_ctru30.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru30.setOnchange("submit();");
                                              __jsp_tag_ctru30.setRequired("#{metadata.numDataSrcs > 0}");
                                              __jsp_tag_ctru30.setValueChangeListener("#{metadata.dsrc3Changed}");
                                              __jsp_tag_ctru30.setValue("#{metadata.selectedDataSrc3}");
                                              __jsp_tag_starteval=__jsp_tag_ctru30.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru27.setPageContext(pageContext);
                                                  __jsp_tag_ctru27.setParent(__jsp_tag_ctru30);
                                                  __jsp_tag_ctru27.setValue("#{metadata.dsrcList}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru27.doStartTag();
                                                  if (__jsp_tag_ctru27.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru30.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru25.setPageContext(pageContext);
                                              __jsp_tag_ctru25.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru25.setValue("that are members of base map:");
                                              __jsp_tag_starteval=__jsp_tag_ctru25.doStartTag();
                                              if (__jsp_tag_ctru25.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru26.setPageContext(pageContext);
                                              __jsp_tag_ctru26.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru26.setRequired("#{metadata.numDataSrcs > 0}");
                                              __jsp_tag_ctru26.setValue("#{metadata.selectedMap3}");
                                              __jsp_tag_starteval=__jsp_tag_ctru26.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru27.setPageContext(pageContext);
                                                  __jsp_tag_ctru27.setParent(__jsp_tag_ctru26);
                                                  __jsp_tag_ctru27.setValue("#{metadata.mapList}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru27.doStartTag();
                                                  if (__jsp_tag_ctru27.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru26.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru28.setPageContext(pageContext);
                                              __jsp_tag_ctru28.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru28.setText("Submit");
                                              __jsp_tag_ctru28.setActionListener("#{metadata.fetchThemesInMaps}");
                                              __jsp_tag_starteval=__jsp_tag_ctru28.doStartTag();
                                              if (__jsp_tag_ctru28.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru15.setPageContext(pageContext);
                                              __jsp_tag_ctru15.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru15.setId("r_themes_in_map");
                                              __jsp_tag_ctru15.setText("Hide Results");
                                              __jsp_tag_ctru15.setActionListener("#{metadata.clearResults}");
                                              __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                                              if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru24.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru17.setPageContext(pageContext);
                                          __jsp_tag_ctru17.setParent(__jsp_tag_ctru23);
                                          __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru17);
                                              __jsp_tag_ctru20.setWidth("1");
                                              __jsp_tag_ctru20.setHeight("10");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru29.setPageContext(pageContext);
                                              __jsp_tag_ctru29.setParent(__jsp_tag_ctru17);
                                              __jsp_tag_ctru29.setVar("themes");
                                              __jsp_tag_ctru29.setValue("#{metadata.mapThemes}");
                                              __jsp_tag_ctru29.setRendered("true");
                                              __jsp_tag_starteval=__jsp_tag_ctru29.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru19.setPageContext(pageContext);
                                                  __jsp_tag_ctru19.setParent(__jsp_tag_ctru29);
                                                  __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                  {
                                                    {
                                                      __jsp_tag_ctru6.setPageContext(pageContext);
                                                      __jsp_tag_ctru6.setParent(__jsp_tag_ctru19);
                                                      __jsp_tag_ctru6.setName("header");
                                                      __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                      {
                                                        do {
                                                          {
                                                            __jsp_tag_ctru13.setPageContext(pageContext);
                                                            __jsp_tag_ctru13.setParent(__jsp_tag_ctru6);
                                                            __jsp_tag_ctru13.setValue("Predefined Theme");
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
                                                      __jsp_tag_ctru13.setPageContext(pageContext);
                                                      __jsp_tag_ctru13.setParent(__jsp_tag_ctru19);
                                                      __jsp_tag_ctru13.setValue("#{themes}");
                                                      __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                                      if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                        return;
                                                    }
                                                  }
                                                  if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru29.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru20.setPageContext(pageContext);
                                  __jsp_tag_ctru20.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru20.setWidth("10");
                                  __jsp_tag_ctru20.setHeight("15");
                                  __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                  if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru16.setPageContext(pageContext);
                                  __jsp_tag_ctru16.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru16.setWidth("80%");
                                  __jsp_tag_ctru16.setBackground("medium");
                                  __jsp_tag_ctru16.setText("List styles");
                                  __jsp_tag_ctru16.setIcon("/myicons/dbconnect.gif");
                                  __jsp_tag_starteval=__jsp_tag_ctru16.doStartTag();
                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                  {
                                    {
                                      __jsp_tag_ctru23.setPageContext(pageContext);
                                      __jsp_tag_ctru23.setParent(__jsp_tag_ctru16);
                                      __jsp_tag_ctru23.setLayout("vertical");
                                      __jsp_tag_starteval=__jsp_tag_ctru23.doStartTag();
                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                      {
                                        {
                                          __jsp_tag_ctru24.setPageContext(pageContext);
                                          __jsp_tag_ctru24.setParent(__jsp_tag_ctru23);
                                          __jsp_tag_ctru24.setLayout("horizontal");
                                          __jsp_tag_starteval=__jsp_tag_ctru24.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru25.setPageContext(pageContext);
                                              __jsp_tag_ctru25.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru25.setValue("In data source: ");
                                              __jsp_tag_starteval=__jsp_tag_ctru25.doStartTag();
                                              if (__jsp_tag_ctru25.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru26.setPageContext(pageContext);
                                              __jsp_tag_ctru26.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru26.setRequired("#{metadata.numDataSrcs > 0}");
                                              __jsp_tag_ctru26.setValue("#{metadata.selectedDataSrc4}");
                                              __jsp_tag_starteval=__jsp_tag_ctru26.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru27.setPageContext(pageContext);
                                                  __jsp_tag_ctru27.setParent(__jsp_tag_ctru26);
                                                  __jsp_tag_ctru27.setValue("#{metadata.dsrcList}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru27.doStartTag();
                                                  if (__jsp_tag_ctru27.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru26.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru25.setPageContext(pageContext);
                                              __jsp_tag_ctru25.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru25.setValue("that are of type:");
                                              __jsp_tag_starteval=__jsp_tag_ctru25.doStartTag();
                                              if (__jsp_tag_ctru25.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru26.setPageContext(pageContext);
                                              __jsp_tag_ctru26.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru26.setRequired("#{metadata.numDataSrcs > 0}");
                                              __jsp_tag_ctru26.setValue("#{metadata.selectedStyleType}");
                                              __jsp_tag_starteval=__jsp_tag_ctru26.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru27.setPageContext(pageContext);
                                                  __jsp_tag_ctru27.setParent(__jsp_tag_ctru26);
                                                  __jsp_tag_ctru27.setValue("#{metadata.styleTypes}");
                                                  __jsp_tag_starteval=__jsp_tag_ctru27.doStartTag();
                                                  if (__jsp_tag_ctru27.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru26.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru28.setPageContext(pageContext);
                                              __jsp_tag_ctru28.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru28.setText("Submit");
                                              __jsp_tag_ctru28.setActionListener("#{metadata.fetchStyles}");
                                              __jsp_tag_starteval=__jsp_tag_ctru28.doStartTag();
                                              if (__jsp_tag_ctru28.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru20.setWidth("14");
                                              __jsp_tag_ctru20.setHeight("1");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru15.setPageContext(pageContext);
                                              __jsp_tag_ctru15.setParent(__jsp_tag_ctru24);
                                              __jsp_tag_ctru15.setId("r_styles");
                                              __jsp_tag_ctru15.setText("Hide Results");
                                              __jsp_tag_ctru15.setActionListener("#{metadata.clearResults}");
                                              __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                                              if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru24.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                        {
                                          __jsp_tag_ctru17.setPageContext(pageContext);
                                          __jsp_tag_ctru17.setParent(__jsp_tag_ctru23);
                                          __jsp_tag_starteval=__jsp_tag_ctru17.doStartTag();
                                          if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                          {
                                            {
                                              __jsp_tag_ctru20.setPageContext(pageContext);
                                              __jsp_tag_ctru20.setParent(__jsp_tag_ctru17);
                                              __jsp_tag_ctru20.setWidth("1");
                                              __jsp_tag_ctru20.setHeight("10");
                                              __jsp_tag_starteval=__jsp_tag_ctru20.doStartTag();
                                              if (__jsp_tag_ctru20.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                            {
                                              __jsp_tag_ctru29.setPageContext(pageContext);
                                              __jsp_tag_ctru29.setParent(__jsp_tag_ctru17);
                                              __jsp_tag_ctru29.setVar("styles");
                                              __jsp_tag_ctru29.setValue("#{metadata.styles}");
                                              __jsp_tag_ctru29.setRendered("true");
                                              __jsp_tag_starteval=__jsp_tag_ctru29.doStartTag();
                                              if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                              {
                                                {
                                                  __jsp_tag_ctru19.setPageContext(pageContext);
                                                  __jsp_tag_ctru19.setParent(__jsp_tag_ctru29);
                                                  __jsp_tag_starteval=__jsp_tag_ctru19.doStartTag();
                                                  if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                  {
                                                    {
                                                      __jsp_tag_ctru6.setPageContext(pageContext);
                                                      __jsp_tag_ctru6.setParent(__jsp_tag_ctru19);
                                                      __jsp_tag_ctru6.setName("header");
                                                      __jsp_tag_starteval=__jsp_tag_ctru6.doStartTag();
                                                      if (OracleJspRuntime.checkStartTagEval(__jsp_tag_starteval))
                                                      {
                                                        do {
                                                          {
                                                            __jsp_tag_ctru13.setPageContext(pageContext);
                                                            __jsp_tag_ctru13.setParent(__jsp_tag_ctru6);
                                                            __jsp_tag_ctru13.setValue("Style");
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
                                                      __jsp_tag_ctru13.setPageContext(pageContext);
                                                      __jsp_tag_ctru13.setParent(__jsp_tag_ctru19);
                                                      __jsp_tag_ctru13.setValue("#{styles}");
                                                      __jsp_tag_starteval=__jsp_tag_ctru13.doStartTag();
                                                      if (__jsp_tag_ctru13.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                        return;
                                                    }
                                                  }
                                                  if (__jsp_tag_ctru19.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                    return;
                                                }
                                              }
                                              if (__jsp_tag_ctru29.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                                return;
                                            }
                                          }
                                          if (__jsp_tag_ctru17.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                            return;
                                        }
                                      }
                                      if (__jsp_tag_ctru23.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                        return;
                                    }
                                  }
                                  if (__jsp_tag_ctru16.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                                {
                                  __jsp_tag_ctru15.setPageContext(pageContext);
                                  __jsp_tag_ctru15.setParent(__jsp_tag_ctru14);
                                  __jsp_tag_ctru15.setId("refresh_2");
                                  __jsp_tag_ctru15.setText("Refresh");
                                  __jsp_tag_ctru15.setActionListener("#{metadata.refresh}");
                                  __jsp_tag_starteval=__jsp_tag_ctru15.doStartTag();
                                  if (__jsp_tag_ctru15.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
                                    return;
                                }
                              }
                              if (__jsp_tag_ctru14.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
                                    __jsp_tag_ctru31.setPageContext(pageContext);
                                    __jsp_tag_ctru31.setParent(__jsp_tag_ctru6);
                                    __jsp_tag_ctru31.setStyleUsage("inContextBranding");
                                    __jsp_tag_ctru31.setValue("#{mvbundle.loclocloc}");
                                    __jsp_tag_starteval=__jsp_tag_ctru31.doStartTag();
                                    if (__jsp_tag_ctru31.doEndTag()==javax.servlet.jsp.tagext.Tag.SKIP_PAGE)
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
