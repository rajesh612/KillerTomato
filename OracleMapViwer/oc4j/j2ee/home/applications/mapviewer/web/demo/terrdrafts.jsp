<%-- Copyright (C) Oracle Corporation 2002. All Rights Reserved --%>

<%-- DESCRIPTION: MapViewer Territory Management Demo --%>
<%-- MODIFIED:    (MM/DD/YY)                --%>
<%--   jxyang      06/15/02 - created for mapviewer territory demo  --%>

<%@ page contentType="text/html;csetharset=windows-1252"%>
<%@ page import="java.io.*"%>
<%@ page import="java.net.*"%>
<%@ page import="java.util.*"%>
<%@ page import="oracle.lbs.mapclient.*"%>
<%@ page import="oracle.lbs.mapcommon.MapResponse"%>
<%@ page import="java.awt.Dimension"%>
<%@ page import="mapdemo.*"%>
<%
  String sizeStr = request.getParameter("size") ;
  String scaleStr = request.getParameter("scale") ;
  String cxStr = request.getParameter("centerX") ;
  String cyStr = request.getParameter("centerY") ;
  String scxStr = request.getParameter("scenterX") ;
  String scyStr = request.getParameter("scenterY") ;
  String baseMap = request.getParameter("basemap");
  String _width = request.getParameter("width") ;
  String _height = request.getParameter("height") ;
  String _infoon = request.getParameter("infoon") ;
  String operation = request.getParameter("operation");
  String territory = request.getParameter("territory");
  String idlist = request.getParameter("idlist");
  String rectcoords = request.getParameter("rect");
  String polycoords = request.getParameter("polygon");
  String selection = request.getParameter("selection") ;
  String newDraftName = request.getParameter("newdraft") ;
  String comment = request.getParameter("comment") ;
  String[] checkedDrafts = request.getParameterValues("seldraft");
  boolean infoon = _infoon==null?true:(_infoon.equalsIgnoreCase("yes")) ;

  int width = 640 ;
  int height = 480 ;
  if(_width!=null && _height!=null)
  {
    try
    {
      width = Integer.parseInt(_width) ;
    }
    catch(Exception e){}
    try
    {
      height = Integer.parseInt(_height) ;
    }
    catch(Exception e){}
  }

  if(comment==null)
    comment="" ;
    
  boolean sessionExpired = false ;
  DBQueryBean queryBean = null ;
  queryBean = (DBQueryBean)session.getAttribute("querybean");
  if(request.getParameter("initflag")!=null || queryBean==null)
    sessionExpired = true ;
%>
<html>
<HEAD>
<LINK href="images/terr.css" type=text/css rel=stylesheet>
<script type="text/javascript"> 
/* this function is called when the user clicks "create draft" button */
function newDraft()
{
  form.operation.value="newdraft" ;
  form.submit() ;
}
/* this function is called when the user clicks the delete button */
function deleteDraft()
{
  var selCount = 0 ;
  if(form.seldraft==null)
  {
    alert("No draft to be deleted!")
    return ;
  }
  if(form.seldraft.checked)
    selCount++ ;

  for(i=0; i<form.seldraft.length; i++)
  {
    if(form.seldraft[i].checked)
      selCount ++ ;
  }
  if(selCount>0)
  {
    var answer = confirm("Are you sure you want to delete select draft(s)?") ;
    if(answer)
    {
      form.operation.value="deletedraft" ;
      form.submit() ;
    }
  }
  else
    alert("No draft is selected!") ;
}
/* this function is called when user clicks the submit button in the new draft
   page. it validates user input.
*/
function verifyNewDraft()
{
  if(form.newdraft.value==null || form.newdraft.value=='')
    alert("Draft name cannot be empty!") ;
  else
  {
    form.submit() ;
  }
}
/* cancel the current draft creation and go back to the draft list */
function cancel()
{
  form.operation.value="none" ;
  form.submit() ;
}
/* go  back to the home page showing the live data */
function returnHome()
{
  form.action="terrmap.jsp" ;
  form.submit() ;
}
/* go to the draft page that shows the draft map and editting buttons. */
function gotoDraft(draft)
{
  form.action="terrmap.jsp" ;
  form.draft.value=draft ;
  form.submit() ;
}
</script>
</head>
<body>
   <!-------------------------------------------------------------------------
                  Output page header (stuff you really dont need)
    -------------------------------------------------------------------------->
<span style="width:100%">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
    <tr><td>
          <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
            <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td>
            <td><FONT class="OraHeader">MapViewer Territory Management Demo</FONT> 
               <a href="terrsource.html">Source Code</a></td>
            </tr>
          </table>
          </td>
    </tr>
    <tr><td valign="top">
          <table cellpadding="0" cellspacing="0" border="0" summary="">
            <tr><td align="center"><img src="../myicons/t.gif" border="0" /></td></tr>
          </table> </td>
    </tr>
  </table>
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
    <TBODY>
    <TR><!-- Navgiation Tabs Bar -->
      <TD vAlign=bottom align=right>
  
        <TABLE cellSpacing=0 cellPadding=0 height=22 border=0>
          <TBODY>
          <TR>
            <td align=right noWrap width=16><img height=22
             src="images/green-head.gif" width=12></td>
            <td background=images/green-content.gif class=OraNav1Enabled
             noWrap><a href="javascript:returnHome();" class="OraNav1Enabled">Home</a></td>
            <td align=right noWrap width=16><img height=22
              src="images/green-blue.gif" width=16></td>
            <td background=images/blue-content.gif class=OraNav1Selected
             noWrap>Drafts</td>
            <td align=left noWrap width=12><img height=22
             src="images/blue-end.gif" width=12></td>
  
            <td noWrap width=9>&nbsp;</td>
          </TR>
          </TBODY>
        </TABLE>
      </TD>
    </TR>
    </TBODY>
  </TABLE>
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
    <TBODY>
    <TR>
      <TD vAlign=bottom height=24>
        <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
          <TBODY>
          <TR>
            <TD vAlign=bottom noWrap width="52%" bgColor=#336699
            height=30>&nbsp;</TD>
            <TD vAlign=top noWrap width="48%" background=images/asysrtb.gif
            height=30><IMG height=30 src="images/asysrt.gif" width=40
              border=0></TD>
            <TD width=8 height=30
            xbackground="images/rhshadow.gif"><IMG
              height=30 src="images/asylrhs.gif" width=8 border=0></TD></TR>
          <TR>
  
            <TD vAlign=top noWrap background=images/asylttb.gif
              height=10><IMG height=10 src="images/asyllhs.gif" width=12></TD>
            <TD vAlign=top noWrap height=10><IMG src="images/asysrb.gif"
              width=40 border=0></TD>
            <TD vAlign=top align=left width=5><IMG height=1
              src="images/pixel.gif" width=1></TD></TR></TBODY>
        </TABLE>
      </TD>
    </TR>
    </TBODY>
  </TABLE>
</span>
<%
  if(sessionExpired)
  {
%>
<B> Session Expired. </B> 
Please  go back to the <A href="terrinit.jsp">terrinit.jsp</A> page.
<%
    return ;
  }
%>
<form name="form" action="terrdrafts.jsp" method="POST">
<%
  if("deletedraft".equals(operation))
    queryBean.deleteDrafts(checkedDrafts);

  ArrayList drafts = queryBean.getDrafts() ;
  if("newdraft".equals(operation))
  {
    boolean newDraftInputed = newDraftName!=null && newDraftName.trim().length()>0 ;
    
    if(newDraftInputed && drafts.indexOf(newDraftName)>=0)
    {
%>
<font class=OraHeaderSubSub>Draft with name "<%= newDraftName %>" already exists. Please choose another name!</font>
<br>
<br>
<%
    }
    if(!newDraftInputed || (newDraftInputed && drafts.indexOf(newDraftName)>=0))
    {
%>
<table>
<tr bgcolor="cccc99" >
<td class=OraDarkHeaderSubSub>New draft name</td><td class=OraDarkHeaderSubSub>Comment</td>
</tr>
<tr>
<td><input type="text" name="newdraft" size="10"></td><td><input type="text" name="comment" value="<%=comment%>" size="40"></td>
</tr>
</table>
<br>
  <a href="javascript:verifyNewDraft()"><img border=0 src="images/createdraft.gif"/></a>
  <a href="javascript:cancel()"><img border=0 src="images/cancel.gif"/></a><br>
  <input type="hidden" name="operation" value="newdraft"/>
  <input type="hidden" name="width" value="<%=width%>"/>
  <input type="hidden" name="height" value="<%=height%>"/>                              
  <input type="hidden" name="centerX" value="<%=cxStr%>"/>
  <input type="hidden" name="centerY" value="<%=cyStr%>"/>
  <input type="hidden" name="scenterX" value="<%=scxStr%>"/>
  <input type="hidden" name="scenterY" value="<%=scyStr%>"/>
  <input type="hidden" name="size" value="<%=sizeStr%>"/>
  <input type="hidden" name="scale" value="<%=scaleStr%>"/>         
  <input type="hidden" name="infoon" value="<%=(infoon?"yes":"no")%>" />
  <input type="hidden" name="idlist" value="<%=idlist%>"/>
  <input type="hidden" name="rect" value="<%=rectcoords%>"/>
  <input type="hidden" name="polygon" value="<%=polycoords%>"/>
  <input type="hidden" name="repid" value=""/>
  </FORM>
</html>
<%
      return ;
    }
    if(newDraftInputed && drafts.indexOf(newDraftName)<0)
    {
      queryBean.createDraft(newDraftName, comment);
      drafts = queryBean.getDrafts() ;
    }
  }
  if(drafts==null || drafts.size()==0)
  {
%>
<font class=OraHeaderSubSub>There is no saved draft! </font><br><br>
<%
  }
  else
  {
%>
  <table>
  <tbody>
    <tr bgcolor="cccc99">
      <td class=OraDarkHeaderSubSub>Select</td>
      <td class=OraDarkHeaderSubSub >Draft name</td>
      <td class=OraDarkHeaderSubSub >Creation time</td>
      <td class=OraDarkHeaderSubSub >Comment</td>
    </tr>
<%
    for(int i=0; i<drafts.size()/3; i++)
    {
       String draft = (String)drafts.get(i*3) ;
       String createTime = (String)drafts.get(i*3+1) ;
       comment = (String)drafts.get(i*3+2) ;
       if(comment==null)
        comment = "" ;
%>
    <tr bgcolor="#f7f7e7">
        <td><input type="checkbox" name="seldraft" value="<%=draft%>"></td>
        <td><a href="javascript:gotoDraft('<%=draft%>')"><%=draft%></a></td>
        <td class=OraFieldText><%=createTime%></td>
        <td class=OraFieldText><%=comment%></td>
    </tr>
<%
    }
  }
%>
    </tr>
  </tbody>
  </table>
  <br>
  <a href="javascript:newDraft()"><img border=0 src="images/createdraft.gif"/></a>
  <a href="javascript:deleteDraft()"><img border=0 src="images/deletedraft.gif"/></a><br>
  <input type="hidden" name="operation" value=""/>
  <input type="hidden" name="draft" value=""/>
  <input type="hidden" name="width" value="<%=width%>"/>
  <input type="hidden" name="height" value="<%=height%>"/>                              
  <input type="hidden" name="centerX" value="<%=cxStr%>"/>
  <input type="hidden" name="centerY" value="<%=cyStr%>"/>
  <input type="hidden" name="scenterX" value="<%=scxStr%>"/>
  <input type="hidden" name="scenterY" value="<%=scyStr%>"/>
  <input type="hidden" name="size" value="<%=sizeStr%>"/>
  <input type="hidden" name="scale" value="<%=scaleStr%>"/>         
  <input type="hidden" name="infoon" value="<%=(infoon?"yes":"no")%>" />
</FORM>
</html>
