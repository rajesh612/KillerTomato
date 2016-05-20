package _demo;

import oracle.jsp.runtime.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.Enumeration;
import java.awt.geom.Point2D;
import java.awt.Dimension;
import oracle.lbs.mapclient.MapViewer;


public class _jview extends com.orionserver.http.OrionHttpJspPage {


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
    _jview page = this;
    ServletConfig config = pageContext.getServletConfig();

    com.evermind.server.http.JspCommonExtraWriter __ojsp_s_out = (com.evermind.server.http.JspCommonExtraWriter) out;
    try {


      __ojsp_s_out.write(__oracle_jsp_text[0]);
      __ojsp_s_out.write(__oracle_jsp_text[1]);
      __ojsp_s_out.write(__oracle_jsp_text[2]);
      __ojsp_s_out.write(__oracle_jsp_text[3]);
      __ojsp_s_out.write(__oracle_jsp_text[4]);
      __ojsp_s_out.write(__oracle_jsp_text[5]);
      
          
             String dataSrc = request.getParameter("datasrc-select");
             String mvURL = request.getParameter("mvurl");
             if(mvURL==null || mvURL.length()==0)
               mvURL = "http://"+ request.getServerName()+":"+request.getServerPort()+
                  request.getContextPath()+"/omserver";
             
             
             boolean newSession = false;
             
             // retrieve mapviewer client handle from session
             MapViewer mv = (MapViewer) session.getAttribute("gvis_mvhandle");
             if(mv==null)
             {         
               // create a new mapviewer client handle
               mv = new MapViewer(mvURL); 
               mv.setImageFormat(MapViewer.FORMAT_PNG_URL); 
               mv.setMapTitle(" ");
               session.setAttribute("gvis_mvhandle", mv);     // keep client handle in session                  
               newSession = true;
             }
      
             String action = request.getParameter("action");
             if(action==null) action = "recenter";
             
             String[] dataSrcList = null;       
             
             String mapW_ = request.getParameter("map_width"), mapH_=request.getParameter("map_height");
             int mapW = 500, mapH = 375;
             try{
               mapW = Integer.parseInt(mapW_);
               mapH = Integer.parseInt(mapH_);
             }catch(Exception e){}
             
             mv.setDeviceSize(new Dimension(mapW, mapH));
             
             String aa_ = request.getParameter("map_aa");
             boolean aa = false;
             if(aa_!=null && "on".equalsIgnoreCase(aa_))
              aa = true;
             mv.setAntiAliasing(aa);
             
             String query1=null, stroke1="#000000", fill1=null, tr1=null, labelc1=null, asis1,
                    query2=null, stroke2="#000000", fill2=null, tr2=null, labelc2=null, asis2,
                    query3=null, stroke3="#000000", fill3=null, tr3=null, labelc3=null, asis3;
      
               query1 = request.getParameter("query_1");
               stroke1 = request.getParameter("stroke_1");
               fill1 = request.getParameter("fill_1");
               if(stroke1==null && fill1==null)
                 stroke1 = "#000000";   //default to black stroke
               tr1 = request.getParameter("tr_1");
               labelc1 = request.getParameter("lc_1");         
               int opacity1 = (tr1!=null && tr1.equals("on"))? 128 : -1;
               String style1 = "gvis_"+("NONE".equals(stroke1)?"" : stroke1) + "_"+
                               ("NONE".equals(fill1)?"" : fill1) + 
                               ((opacity1>0)?"128" : "");
               asis1 = request.getParameter("asis_1");
               
               query2 = request.getParameter("query_2");
               stroke2 = request.getParameter("stroke_2");
               fill2 = request.getParameter("fill_2"); 
               if(stroke2==null && fill2==null)
                stroke2 = "#000000";          
               tr2 = request.getParameter("tr_2");
               labelc2 = request.getParameter("lc_2");
               int opacity2 = (tr2!=null && tr2.equals("on"))? 128 : -1;
               String style2 = "gvis_"+("NONE".equals(stroke2)?"" : stroke2) + "_"+
                               ("NONE".equals(fill2)?"" : fill2) + 
                               ((opacity2>0)?"128" : "");
               asis2 = request.getParameter("asis_2");
             
               query3 = request.getParameter("query_3");
               stroke3 = request.getParameter("stroke_3");
               fill3 = request.getParameter("fill_3");
               if(stroke3==null && fill3==null)
                stroke3 = "#000000";
               tr3 = request.getParameter("tr_3");
               labelc3 = request.getParameter("lc_3");
               int opacity3 = (tr3!=null && tr3.equals("on"))? 128 : -1;       
               String style3 = "gvis_"+("NONE".equals(stroke3)?"" : stroke3) + "_"+
                               ("NONE".equals(fill3)?"" : fill3) + 
                               ((opacity3>0)?"128" : "");
               asis3 = request.getParameter("asis_3");
      
               dataSrcList = mv.getDataSources();
                
              // start processing the actual request
                    
              if(!newSession && request.getParameter("userClick.x")!=null) // user clicked on map
              {
                int x = Integer.parseInt(request.getParameter("userClick.x"));
                int y = Integer.parseInt(request.getParameter("userClick.y"));
                
                
                if(action.equals("recenter"))
                { 
                  mv.pan(x,y);
                }
                else if(action.equals("zoomin"))
                { 
                  mv.zoomIn(x,y, 1.5);
                }
                else if(action.equals("zoomout"))
                { 
                  mv.zoomOut(x,y, 1.5);
                }
              }
              else if(!newSession) // user submitted new queries
              {
             
                if(mvURL!=null && mvURL.length()>0 &&
                  !mv.getServiceURL().equals(mvURL))
                {
                  mv.setServiceURL(mvURL);
                  
                }
                
                
                if(dataSrc!=null && dataSrc.length()>0)
                  mv.setDataSourceName(dataSrc);
      
               
               if(query1!=null && query1.length()>9 && !mv.styleExists(style1))
               {
                  mv.addColorStyle(style1, stroke1, fill1, opacity1, opacity1);
               }
               if(query2!=null && query2.length()>9 && !mv.styleExists(style2))
               {
                  mv.addColorStyle(style2, stroke2, fill2, opacity2, opacity2);
               }
               if(query3!=null && query3.length()>9 && !mv.styleExists(style3))
               {
                  mv.addColorStyle(style3, stroke3, fill3, opacity3, opacity3);
               }
      
               //add a temporary text style for labeling
               mv.addTextStyleWithHalo("_gvis_style_text_", "PLAIN", "Serif", "12", "PLAIN", "#0000ff", 2.0);
               
               mv.deleteAllThemes();       
               if(query1!=null && query1.length()>9)
               {
                  String query1_ = query1;
                  if(labelc1!=null && labelc1.length()>0) 
                  {
                    int idx1 = query1.toUpperCase().indexOf("FROM");
                    int idx2 = query1.toUpperCase().indexOf(labelc1.toUpperCase());
                    if(idx2>0 && idx2 <  idx1){}  // already in the user query
                    else
                    {
                      query1_ = query1.substring(0, idx1) + ", "+labelc1+" "+
                                query1.substring(idx1, query1.length());
                    }
                  } else
                    labelc1 = null;
                    
                  mv.addJDBCTheme(dataSrc, "theme1", query1_, null, null, 
                                  style1, labelc1, "_gvis_style_text_", true);
                                
               }
               if(query2!=null && query2.length()>9)
               {
                  String query2_ = query2;
                  if(labelc2!=null && labelc2.length()>0)
                  {
                    int idx1 = query2.toUpperCase().indexOf("FROM");
                    int idx2 = query2.toUpperCase().indexOf(labelc2.toUpperCase());
                    if(idx2>0 && idx2 <  idx1){}  // already in the user query
                    else
                    {
                      query2_ = query2.substring(0, idx1) + ", "+labelc2+" "+
                                query2.substring(idx1, query2.length());
                    }
                  } else 
                    labelc2 = null;
      
                  mv.addJDBCTheme(dataSrc, "theme2", query2_, null, null, 
                                  style2, labelc2, "_gvis_style_text_", true);
                                
               }
               if(query3!=null && query3.length()>9)
               {
                  String query3_ = query3;
                  if(labelc3!=null && labelc3.length()>0)
                  {
                    int idx1 = query3.toUpperCase().indexOf("FROM");
                    int idx2 = query3.toUpperCase().indexOf(labelc3.toUpperCase());
                    if(idx2>0 && idx2 <  idx1){}  // already in the user query
                    else
                    {
                      query3_ = query3.substring(0, idx1) + ", "+labelc3+" "+
                                query3.substring(idx1, query3.length());
                    }
                  } else 
                    labelc3 = null;
      
                  mv.addJDBCTheme(dataSrc, "theme3", query3_, null, null, 
                                  style3, labelc3, "_gvis_style_text_", true);
                                
               }
      
               if(dataSrc!=null)
               {
                 try{
                    mv.setFullExtent();
                    mv.run();
                  }catch(Exception e){out.println(e.getMessage()); }
               }
          }  //user submitted  queries
      
          String url = mv.getGeneratedMapImageURL();
          
      __ojsp_s_out.write(__oracle_jsp_text[6]);
      
                   if(url!=null)
                   {
                     int w = (int)mv.getDeviceSize().getWidth(), h = (int)mv.getDeviceSize().getHeight();
              
      __ojsp_s_out.write(__oracle_jsp_text[7]);
      out.print(w);
      __ojsp_s_out.write(__oracle_jsp_text[8]);
      out.print(w);
      __ojsp_s_out.write(__oracle_jsp_text[9]);
      out.print(url);
      __ojsp_s_out.write(__oracle_jsp_text[10]);
      out.print(w);
      __ojsp_s_out.write(__oracle_jsp_text[11]);
      out.print(h);
      __ojsp_s_out.write(__oracle_jsp_text[12]);
      out.print( action.equals("zoomin")?"checked":"");
      __ojsp_s_out.write(__oracle_jsp_text[13]);
      out.print( action.equals("recenter")?"checked":"");
      __ojsp_s_out.write(__oracle_jsp_text[14]);
      out.print( action.equals("zoomout")?"checked":"");
      __ojsp_s_out.write(__oracle_jsp_text[15]);
         }
              
      __ojsp_s_out.write(__oracle_jsp_text[16]);
      
                    if(dataSrcList!=null)
                    {
                      for (int i = 0; i < dataSrcList.length; i++) 
                      {
                        String selected = (dataSrcList[i].equals(dataSrc))? "selected " :"";
                  
      __ojsp_s_out.write(__oracle_jsp_text[17]);
      out.print(selected);
      __ojsp_s_out.write(__oracle_jsp_text[18]);
      out.print(dataSrcList[i]);
      __ojsp_s_out.write(__oracle_jsp_text[19]);
      out.print(dataSrcList[i]);
      __ojsp_s_out.write(__oracle_jsp_text[20]);
        }
                      
                    }
                  
      __ojsp_s_out.write(__oracle_jsp_text[21]);
      out.print((int)mv.getDeviceSize().getWidth());
      __ojsp_s_out.write(__oracle_jsp_text[22]);
      out.print((int)mv.getDeviceSize().getHeight());
      __ojsp_s_out.write(__oracle_jsp_text[23]);
      out.print((mv.getAntiAliasing())?"CHECKED":"");
      __ojsp_s_out.write(__oracle_jsp_text[24]);
      out.print((query1!=null)?query1:"");
      __ojsp_s_out.write(__oracle_jsp_text[25]);
      out.print(stroke1);
      __ojsp_s_out.write(__oracle_jsp_text[26]);
      out.print(fill1);
      __ojsp_s_out.write(__oracle_jsp_text[27]);
      out.print((tr1!=null)?"CHECKED":"");
      __ojsp_s_out.write(__oracle_jsp_text[28]);
      out.print((labelc1!=null)?labelc1:"");
      __ojsp_s_out.write(__oracle_jsp_text[29]);
      out.print((query2!=null)?query2:"");
      __ojsp_s_out.write(__oracle_jsp_text[30]);
      out.print(stroke2);
      __ojsp_s_out.write(__oracle_jsp_text[31]);
      out.print(fill2);
      __ojsp_s_out.write(__oracle_jsp_text[32]);
      out.print((tr2!=null)?"CHECKED":"");
      __ojsp_s_out.write(__oracle_jsp_text[33]);
      out.print((labelc2!=null)?labelc2:"");
      __ojsp_s_out.write(__oracle_jsp_text[34]);
      out.print((query3!=null)?query3:"");
      __ojsp_s_out.write(__oracle_jsp_text[35]);
      out.print(stroke3);
      __ojsp_s_out.write(__oracle_jsp_text[36]);
      out.print(fill3);
      __ojsp_s_out.write(__oracle_jsp_text[37]);
      out.print((tr3!=null)?"CHECKED":"");
      __ojsp_s_out.write(__oracle_jsp_text[38]);
      out.print((labelc3!=null)?labelc3:"");
      __ojsp_s_out.write(__oracle_jsp_text[39]);
      out.print((mvURL==null)?"":mvURL);
      __ojsp_s_out.write(__oracle_jsp_text[40]);

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
  private static final byte __oracle_jsp_text[][]=new byte[41][];
  static {
    try {
    __oracle_jsp_text[0] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[1] = 
    "\n\n".getBytes("UTF8");
    __oracle_jsp_text[2] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[3] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[4] = 
    "\n".getBytes("UTF8");
    __oracle_jsp_text[5] = 
    "\n\n<html>\n<head>\n\n<!-- flooble Color Picker header start --> \n<script language=\"Javascript\">\n// Color Picker Script from Flooble.com\n// For more information, visit \n//\thttp://www.flooble.com/scripts/colorpicker.php\n// Copyright 2003 Animus Pactum Consulting inc.\n// You may use and distribute this code freely, as long as\n// you keep this copyright notice and the link to flooble.com\n// if you chose to remove them, you must link to the page\n// listed above from every web page where you use the color\n// picker code.\n//---------------------------------------------------------\n     var perline = 9;\n     var divSet = false;\n     var curId;\n     var colorLevels = Array('0', '3', '6', '9', 'C', 'F');\n     var colorArray = Array();\n     var ie = false;\n     var nocolor = 'none';\n\t if (document.all) { ie = true; nocolor = ''; }\n\t function getObj(id) {\n\t\tif (ie) { return document.all[id]; } \n\t\telse {\treturn document.getElementById(id);\t}\n\t }\n\n     function addColor(r, g, b) {\n     \tvar red = colorLevels[r];\n     \tvar green = colorLevels[g];\n     \tvar blue = colorLevels[b];\n     \taddColorValue(red, green, blue);\n     }\n\n     function addColorValue(r, g, b) {\n     \tcolorArray[colorArray.length] = '#' + r + r + g + g + b + b;\n     }\n     \n     function setColor(color) {\n     \tvar link = getObj(curId);\n     \tvar field = getObj(curId + 'field');\n     \tvar picker = getObj('colorpicker');\n     \tfield.value = color;\n     \tif (color == '') {\n\t     \tlink.style.background = nocolor;\n\t     \tlink.style.color = nocolor;\n\t     \tcolor = nocolor;\n     \t} else {\n\t     \tlink.style.background = color;\n\t     \tlink.style.color = color;\n\t    }\n     \tpicker.style.display = 'none';\n\t    eval(getObj(curId + 'field').title);\n     }\n        \n     function setDiv() {     \n     \tif (!document.createElement) { return; }\n        var elemDiv = document.createElement('div');\n        if (typeof(elemDiv.innerHTML) != 'string') { return; }\n        genColors();\n        elemDiv.id = 'colorpicker';\n\t    elemDiv.style.position = 'absolute';\n        elemDiv.style.display = 'none';\n        elemDiv.style.border = '#000000 1px solid';\n        elemDiv.style.background = '#FFFFFF';\n        elemDiv.innerHTML = '<span style=\"font-family:Verdana; font-size:11px;\">Pick a color: ' \n          \t+ '(<a href=\"javascript:setColor(\\'\\');\">No color</a>)<br>' \n        \t+ getColorTable() \n        \t+ '</span>';\n\n        document.body.appendChild(elemDiv);\n        divSet = true;\n     }\n     \n     function pickColor(id) {\n     \tif (!divSet) { setDiv(); }\n     \tvar picker = getObj('colorpicker');     \t\n\t\tif (id == curId && picker.style.display == 'block') {\n\t\t\tpicker.style.display = 'none';\n\t\t\treturn;\n\t\t}\n     \tcurId = id;\n     \tvar thelink = getObj(id);\n     \tpicker.style.top = getAbsoluteOffsetTop(thelink) + 20;\n     \tpicker.style.left = getAbsoluteOffsetLeft(thelink);     \n\tpicker.style.display = 'block';\n     }\n     \n     function genColors() {\n        addColorValue('0','0','0');\n        addColorValue('3','3','3');\n        addColorValue('6','6','6');\n        addColorValue('8','8','8');\n        addColorValue('9','9','9');                \n        addColorValue('A','A','A');\n        addColorValue('C','C','C');\n        addColorValue('E','E','E');\n        addColorValue('F','F','F');                                \n\t\t\t\n        for (a = 1; a < colorLevels.length; a++)\n\t\t\taddColor(0,0,a);\n        for (a = 1; a < colorLevels.length - 1; a++)\n\t\t\taddColor(a,a,5);\n\n        for (a = 1; a < colorLevels.length; a++)\n\t\t\taddColor(0,a,0);\n        for (a = 1; a < colorLevels.length - 1; a++)\n\t\t\taddColor(a,5,a);\n\t\t\t\n        for (a = 1; a < colorLevels.length; a++)\n\t\t\taddColor(a,0,0);\n        for (a = 1; a < colorLevels.length - 1; a++)\n\t\t\taddColor(5,a,a);\n\t\t\t\n\t\t\t\n        for (a = 1; a < colorLevels.length; a++)\n\t\t\taddColor(a,a,0);\n        for (a = 1; a < colorLevels.length - 1; a++)\n\t\t\taddColor(5,5,a);\n\t\t\t\n        for (a = 1; a < colorLevels.length; a++)\n\t\t\taddColor(0,a,a);\n        for (a = 1; a < colorLevels.length - 1; a++)\n\t\t\taddColor(a,5,5);\n\n        for (a = 1; a < colorLevels.length; a++)\n\t\t\taddColor(a,0,a);\t\t\t\n        for (a = 1; a < colorLevels.length - 1; a++)\n\t\t\taddColor(5,a,5);\n\t\t\t\n       \treturn colorArray;\n     }\n     function getColorTable() {\n         var colors = colorArray;\n      \t var tableCode = '';\n         tableCode += '<table border=\"0\" cellspacing=\"1\" cellpadding=\"1\">';\n         for (i = 0; i < colors.length; i++) {\n              if (i % perline == 0) { tableCode += '<tr>'; }\n              tableCode += '<td bgcolor=\"#000000\"><a style=\"outline: 1px solid #000000; color: ' \n              \t  + colors[i] + '; background: ' + colors[i] + ';font-size: 10px;\" title=\"' \n              \t  + colors[i] + '\" href=\"javascript:setColor(\\'' + colors[i] + '\\');\">&nbsp;&nbsp;&nbsp;</a></td>';\n              if (i % perline == perline - 1) { tableCode += '</tr>'; }\n         }\n         if (i % perline != 0) { tableCode += '</tr>'; }\n         tableCode += '</table>';\n      \t return tableCode;\n     }\n     function relateColor(id, color) {\n     \tvar link = getObj(id);\n     \tif (color == '') {\n\t     \tlink.style.background = nocolor;\n\t     \tlink.style.color = nocolor;\n\t     \tcolor = nocolor;\n     \t} else {\n\t     \tlink.style.background = color;\n\t     \tlink.style.color = color;\n\t    }\n\t    eval(getObj(id + 'field').title);\n     }\n     function getAbsoluteOffsetTop(obj) {\n     \tvar top = obj.offsetTop;\n     \tvar parent = obj.offsetParent;\n     \twhile (parent != document.body) {\n     \t\ttop += parent.offsetTop;\n     \t\tparent = parent.offsetParent;\n     \t}\n     \treturn top;\n     }\n     \n     function getAbsoluteOffsetLeft(obj) {\n     \tvar left = obj.offsetLeft;\n     \tvar parent = obj.offsetParent;\n     \twhile (parent != document.body) {\n     \t\tleft += parent.offsetLeft;\n     \t\tparent = parent.offsetParent;\n     \t}\n     \treturn left;\n     }\n\n\n</script>\n<!-- flooble Color Picker header end -->      \n\n<meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">\n<title>\nSimple Geometry Visualizer\n</title>\n</head>\n\n\n<body>\n      <span style=\"width:100%\">\n      <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" summary=\"\">\n      <tr><td>\n          <table cellpadding=\"0\" cellspacing=\"2\" border=\"0\" width=\"100%\" summary=\"\">\n            <tr><td valign=\"top\"><img src=\"../myicons/oracle_logo.gif\" border=\"0\" /> </td></tr>\n            <tr><td valign=\"bottom\"><A href=\"..\"><img src=\"../myicons/mapviewer.gif\" border=\"0\" /></A>\n               <FONT color=\"#449922\" size=\"+1\"><b>Simple Spatial Query Visualizer</b></FONT> <FONT size=\"-1\"><A href=\"jview.jsp.txt\">source file</A></FONT></td></tr>\n          </table>\n          </td>\n      </tr>\n      <tr><td valign=\"top\">\n          <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" summary=\"\">\n            <tr><td align=\"center\"><img src=\"../myicons/t.gif\" border=\"0\" /></td></tr>\n          </table> </td>\n      </tr>\n      </table>\n      <hr>\n      </span>\n\n   <!-------------------------------------------------------------------------\n                  Process the incoming map request\n    -------------------------------------------------------------------------->\n    \n    ".getBytes("UTF8");
    __oracle_jsp_text[6] = 
    "\n    \n      <p><p>\n      <!----------------------------------------------------------------------\n              Generate the result web page with map image and controls\n       ----------------------------------------------------------------------->\n      <form action=\"jview.jsp\" name=\"jview\" method=\"post\">\n        ".getBytes("UTF8");
    __oracle_jsp_text[7] = 
    "\n              <TABLE border=\"0\" width=\"".getBytes("UTF8");
    __oracle_jsp_text[8] = 
    "\" cellpadding=0 cellspacing=0>\n              <TR>\n                <TD width=".getBytes("UTF8");
    __oracle_jsp_text[9] = 
    "> \n                <input type=\"image\" border=\"1\" SRC=\"".getBytes("UTF8");
    __oracle_jsp_text[10] = 
    "\" name=\"userClick\" width=\"".getBytes("UTF8");
    __oracle_jsp_text[11] = 
    "\" height=\"".getBytes("UTF8");
    __oracle_jsp_text[12] = 
    "\" >\n                </TD>\n              </TR>\n              <tr>\n                <td> Click on the map to:\n                  <input type=\"radio\" name=\"action\" value=\"zoomin\"   ".getBytes("UTF8");
    __oracle_jsp_text[13] = 
    " ><B><img src=\"../myicons/zoomin.gif\" alt=\"zoom in\"></B>\n                  <input type=\"radio\" name=\"action\" value=\"recenter\" ".getBytes("UTF8");
    __oracle_jsp_text[14] = 
    " ><B><img src=\"../myicons/pan.gif\" alt=\"re-center\"></B>\n                  <input type=\"radio\" name=\"action\" value=\"zoomout\"  ".getBytes("UTF8");
    __oracle_jsp_text[15] = 
    " ><B><img src=\"../myicons/zoomout.gif\" alt=\"zoom out\"></B>\n                </td>\n              </tr>\n              <tr><td height=\"15\">&nbsp;</td></tr>\n              </TABLE>\n        ".getBytes("UTF8");
    __oracle_jsp_text[16] = 
    "\n      <table border=\"0\"  cellpadding=\"2\"  cellspacing=\"1\">\n      <tr> <td>      \n            <img src=\"../myicons/dbconnect.gif\"><FONT COLOR=\"#ff0000\"> Datasource: </FONT> \n            <SELECT single size=\"1\" name=\"datasrc-select\">\n            ".getBytes("UTF8");
    __oracle_jsp_text[17] = 
    "    <OPTION ".getBytes("UTF8");
    __oracle_jsp_text[18] = 
    " value=\"".getBytes("UTF8");
    __oracle_jsp_text[19] = 
    "\"> ".getBytes("UTF8");
    __oracle_jsp_text[20] = 
    " </OPTION>\n            ".getBytes("UTF8");
    __oracle_jsp_text[21] = 
    "\n            </SELECT> \n            \n            &nbsp;&nbsp;\n            map width: <input type=\"TEXT\" size=\"4\" name=\"map_width\"  value=\"".getBytes("UTF8");
    __oracle_jsp_text[22] = 
    "\" > &nbsp;\n            height: <input type=\"TEXT\" size=\"4\" name=\"map_height\"  value=\"".getBytes("UTF8");
    __oracle_jsp_text[23] = 
    "\" >\n            &nbsp;&nbsp;\n            <INPUT TYPE=\"checkbox\" NAME=\"map_aa\" ".getBytes("UTF8");
    __oracle_jsp_text[24] = 
    " >AA\n           </td>\n           \n           <td>       <INPUT type=submit value=Submit> </td>\n      </tr>\n      <tr bgcolor=\"#ffffcc\">\n          <td  rowspan=\"4\" valign=\"top\" > query 1: <TEXTAREA cols=60 name=query_1 rows=6>".getBytes("UTF8");
    __oracle_jsp_text[25] = 
    "</TEXTAREA>\n          </td>\n          <td>Line: \n                <a href=\"javascript:pickColor('pick1097113087');\" id=\"pick1097113087\"\n                  style=\"border: 1px solid #000000; font-family:Verdana; font-size:10px;\n                  text-decoration: none;\">&nbsp;&nbsp;&nbsp;</a>\n                  <input id=\"pick1097113087field\" size=\"7\" \n                  type=\"hidden\" title=\"color\" name=\"stroke_1\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[26] = 
    "\">\n                  <script language=\"javascript\">relateColor('pick1097113087', getObj('pick1097113087field').value);</script>                  \n          </td> \n          <td>Fill: \n                <a href=\"javascript:pickColor('pick1097113085');\" id=\"pick1097113085\"\n                  style=\"border: 1px solid #000000; font-family:Verdana; font-size:10px;\n                  text-decoration: none;\">&nbsp;&nbsp;&nbsp;</a>\n                  <input id=\"pick1097113085field\" size=\"7\" \n                  type=\"hidden\" title=\"color\" name=\"fill_1\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[27] = 
    "\">\n                  <script language=\"javascript\">relateColor('pick1097113085', getObj('pick1097113085field').value);</script>\n          </td>\n      </tr>\n      <tr bgcolor=\"#ffffcc\">\n          <td  colspan=\"2\"> <INPUT TYPE=\"checkbox\" NAME=\"tr_1\" ".getBytes("UTF8");
    __oracle_jsp_text[28] = 
    " >translucent</td>\n      </tr>\n      <tr bgcolor=\"#ffffcc\"> \n      </tr>\n      <tr bgcolor=\"#ffffcc\">\n          <td  colspan=\"2\"> Label Column: <INPUT name=\"lc_1\" size=\"9\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[29] = 
    "\">\n          </td>\n      </tr>\n\n      <tr bgcolor=\"#ccffff\">\n          <td rowspan=\"4\" valign=\"top\" > query 2: <TEXTAREA cols=60 name=query_2 rows=6>".getBytes("UTF8");
    __oracle_jsp_text[30] = 
    "</TEXTAREA>\n          </td>\n          <td>Line:\n                <a href=\"javascript:pickColor('pick109711307');\" id=\"pick109711307\"\n                  style=\"border: 1px solid #000000; font-family:Verdana; font-size:10px;\n                  text-decoration: none;\">&nbsp;&nbsp;&nbsp;</a>\n                  <input id=\"pick109711307field\" size=\"7\" \n                  type=\"hidden\" title=\"color\" name=\"stroke_2\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[31] = 
    "\">\n                  <script language=\"javascript\">relateColor('pick109711307', getObj('pick109711307field').value);</script>                  \n          </td> \n          <td>Fill:\n                <a href=\"javascript:pickColor('pick1097113');\" id=\"pick1097113\"\n                  style=\"border: 1px solid #000000; font-family:Verdana; font-size:10px;\n                  text-decoration: none;\">&nbsp;&nbsp;&nbsp;</a>\n                  <input id=\"pick1097113field\" size=\"7\" \n                  type=\"hidden\" title=\"color\" name=\"fill_2\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[32] = 
    "\">\n                  <script language=\"javascript\">relateColor('pick1097113', getObj('pick1097113field').value);</script>\n          </td>\n      </tr>\n      <tr bgcolor=\"#ccffff\">\n          <td  colspan=\"2\"> <INPUT TYPE=\"checkbox\" NAME=\"tr_2\" ".getBytes("UTF8");
    __oracle_jsp_text[33] = 
    " >translucent</td>\n      </tr>\n      <tr bgcolor=\"#ccffff\">  \n      </tr>\n      <tr bgcolor=\"#ccffff\">\n          <td  colspan=\"2\"> Label Column: <INPUT name=\"lc_2\" size=\"9\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[34] = 
    "\">\n          </td>\n      </tr>\n\n      <tr bgcolor=\"#ffffcc\">\n          <td rowspan=\"4\" valign=\"top\" > query 3: <TEXTAREA cols=60 name=query_3 rows=6>".getBytes("UTF8");
    __oracle_jsp_text[35] = 
    "</TEXTAREA>\n          </td>\n          <td>Line:\n                <a href=\"javascript:pickColor('pick1097');\" id=\"pick1097\"\n                  style=\"border: 1px solid #000000; font-family:Verdana; font-size:10px;\n                  text-decoration: none;\">&nbsp;&nbsp;&nbsp;</a>\n                  <input id=\"pick1097field\" size=\"7\" \n                  type=\"hidden\" title=\"color\" name=\"stroke_3\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[36] = 
    "\">\n                <script language=\"javascript\">relateColor('pick1097', getObj('pick1097field').value);</script>                  \n          </td> \n          <td>Fill: \n                <a href=\"javascript:pickColor('pick1097119');\" id=\"pick1097119\"\n                  style=\"border: 1px solid #000000; font-family:Verdana; font-size:10px;\n                  text-decoration: none;\">&nbsp;&nbsp;&nbsp;</a>\n                  <input id=\"pick1097119field\" size=\"7\" \n                  type=\"hidden\" title=\"color\" name=\"fill_3\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[37] = 
    "\">\n                  <script language=\"javascript\">relateColor('pick1097119', getObj('pick1097119field').value);</script>\n          </td>\n      </tr>\n      <tr bgcolor=\"#ffffcc\">\n          <td  colspan=\"2\"> <INPUT TYPE=\"checkbox\" NAME=\"tr_3\" ".getBytes("UTF8");
    __oracle_jsp_text[38] = 
    " >translucent</td>\n      </tr>\n      <tr bgcolor=\"#ffffcc\">   \n      </tr>\n      <tr bgcolor=\"#ffffcc\">\n          <td  colspan=\"2\"> Label Column: <INPUT name=\"lc_3\" size=\"9\" value=\"".getBytes("UTF8");
    __oracle_jsp_text[39] = 
    "\">\n          </td>\n      </tr>\n      \n      <tr> <td>Server URL: ".getBytes("UTF8");
    __oracle_jsp_text[40] = 
    " </td> </tr>\n      <tr> <td  height=\"10\"></td></tr>\n      </table>\n      </form>\n\n<p>\n<P>\n<HR size=\"1\">\n<TABLE width=\"60%\" border=\"0\">\n<TR> <TD ALIGN=\"left\"><FONT size=\"+1\"><B>Instructions</B></FONT></TD></TR>\n\n<TR>\n  <TD ALIGN=\"left\">\n        A data source must be selected from the <font color=\"#ff0000\">Datasource</font> dropdown list. All\n        the queries will be executed on the selected data source.\n        <p>\n        If the Datasource dropdown list is empty, then \n        go <A HREF=\"../admin.html\"> here </A> and add a new data source. <p>        \n        \n        Up to three SQL queries, one for each text area, can be entered. Note that \n        each query must select only one column or expression that is \n        of <b>SDO_GEOMETRY</b> type. <B> <Font color=\"#ff0000\"> Do NOT end your SQL query with ';' </Font></B>  <p>\n        \n        Each query's results are rendered using the stroking and/or filling color you picked. \n        The results of the first query will be drawn first, followed by those of query 2 and 3. <p>\n        \n        Once a map has been displayed, you can click on the map image to zoom in, out or recenter.\n        Note that each click will result in all of the queries being executed again. <p>\n        \n        Use the <b>Submit</b> button to refresh or reset the map after modifying any of\n        the following:\n        <ul>\n        <li> datasource name\n        <li> any of the queries\n        <li> color, translucency or label column setting for any of the queries\n        </ul>\n        <p>\n        \n        The result geometries can also be labeled. To do this, the name of a column or\n        expression supplying the label strings must be entered in the corresponding\n        <B>Label Column</B> field, as well as the query's SELECT list. <p>\n  </TD>\n  </TR>\n\n  <TR>\n  <TD>\n        To change the size of the result map, simply enter new values (in pixel)\n        in the map width and height fields. If you want the result map to be\n        rendered in antialised mode (often results in smoother maps), \n        check the AA checkbox. <p>\n  </TD>\n  </TR>\n  <TR>\n  <TD>\n  </TD>\n  </TR>\n  <TR>\n  <TD> &nbsp;<p><Font size=\"+1\"><B>Disclaimer:</B></FONT> <p> This is a demo intended for quicking viewing \n       of your spatial data. No attempts were made in the code to take advantage of MapViewer's full capabilities and optimize the performance or \n       enhance the look & feel of the generated maps.\n  </TD>\n  </TR>\n</TABLE>\n\n<p>\n<font size=\"-1\"><i>This demos uses Color Picker Script from Flooble.com</i></font>\n</body>\n</html>\n".getBytes("UTF8");
    }
    catch (Throwable th) {
      System.err.println(th);
    }
}
}
