<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page session="true" %>

<%@ page import="java.util.Enumeration" %>
<%@ page import="java.awt.geom.Point2D" %>
<%@ page import="java.awt.Dimension" %>
<%@ page import="oracle.lbs.mapclient.MapViewer" %>

<html>
<head>

<!-- flooble Color Picker header start --> 
<script language="Javascript">
// Color Picker Script from Flooble.com
// For more information, visit 
//	http://www.flooble.com/scripts/colorpicker.php
// Copyright 2003 Animus Pactum Consulting inc.
// You may use and distribute this code freely, as long as
// you keep this copyright notice and the link to flooble.com
// if you chose to remove them, you must link to the page
// listed above from every web page where you use the color
// picker code.
//---------------------------------------------------------
     var perline = 9;
     var divSet = false;
     var curId;
     var colorLevels = Array('0', '3', '6', '9', 'C', 'F');
     var colorArray = Array();
     var ie = false;
     var nocolor = 'none';
	 if (document.all) { ie = true; nocolor = ''; }
	 function getObj(id) {
		if (ie) { return document.all[id]; } 
		else {	return document.getElementById(id);	}
	 }

     function addColor(r, g, b) {
     	var red = colorLevels[r];
     	var green = colorLevels[g];
     	var blue = colorLevels[b];
     	addColorValue(red, green, blue);
     }

     function addColorValue(r, g, b) {
     	colorArray[colorArray.length] = '#' + r + r + g + g + b + b;
     }
     
     function setColor(color) {
     	var link = getObj(curId);
     	var field = getObj(curId + 'field');
     	var picker = getObj('colorpicker');
     	field.value = color;
     	if (color == '') {
	     	link.style.background = nocolor;
	     	link.style.color = nocolor;
	     	color = nocolor;
     	} else {
	     	link.style.background = color;
	     	link.style.color = color;
	    }
     	picker.style.display = 'none';
	    eval(getObj(curId + 'field').title);
     }
        
     function setDiv() {     
     	if (!document.createElement) { return; }
        var elemDiv = document.createElement('div');
        if (typeof(elemDiv.innerHTML) != 'string') { return; }
        genColors();
        elemDiv.id = 'colorpicker';
	    elemDiv.style.position = 'absolute';
        elemDiv.style.display = 'none';
        elemDiv.style.border = '#000000 1px solid';
        elemDiv.style.background = '#FFFFFF';
        elemDiv.innerHTML = '<span style="font-family:Verdana; font-size:11px;">Pick a color: ' 
          	+ '(<a href="javascript:setColor(\'\');">No color</a>)<br>' 
        	+ getColorTable() 
        	+ '</span>';

        document.body.appendChild(elemDiv);
        divSet = true;
     }
     
     function pickColor(id) {
     	if (!divSet) { setDiv(); }
     	var picker = getObj('colorpicker');     	
		if (id == curId && picker.style.display == 'block') {
			picker.style.display = 'none';
			return;
		}
     	curId = id;
     	var thelink = getObj(id);
     	picker.style.top = getAbsoluteOffsetTop(thelink) + 20;
     	picker.style.left = getAbsoluteOffsetLeft(thelink);     
	picker.style.display = 'block';
     }
     
     function genColors() {
        addColorValue('0','0','0');
        addColorValue('3','3','3');
        addColorValue('6','6','6');
        addColorValue('8','8','8');
        addColorValue('9','9','9');                
        addColorValue('A','A','A');
        addColorValue('C','C','C');
        addColorValue('E','E','E');
        addColorValue('F','F','F');                                
			
        for (a = 1; a < colorLevels.length; a++)
			addColor(0,0,a);
        for (a = 1; a < colorLevels.length - 1; a++)
			addColor(a,a,5);

        for (a = 1; a < colorLevels.length; a++)
			addColor(0,a,0);
        for (a = 1; a < colorLevels.length - 1; a++)
			addColor(a,5,a);
			
        for (a = 1; a < colorLevels.length; a++)
			addColor(a,0,0);
        for (a = 1; a < colorLevels.length - 1; a++)
			addColor(5,a,a);
			
			
        for (a = 1; a < colorLevels.length; a++)
			addColor(a,a,0);
        for (a = 1; a < colorLevels.length - 1; a++)
			addColor(5,5,a);
			
        for (a = 1; a < colorLevels.length; a++)
			addColor(0,a,a);
        for (a = 1; a < colorLevels.length - 1; a++)
			addColor(a,5,5);

        for (a = 1; a < colorLevels.length; a++)
			addColor(a,0,a);			
        for (a = 1; a < colorLevels.length - 1; a++)
			addColor(5,a,5);
			
       	return colorArray;
     }
     function getColorTable() {
         var colors = colorArray;
      	 var tableCode = '';
         tableCode += '<table border="0" cellspacing="1" cellpadding="1">';
         for (i = 0; i < colors.length; i++) {
              if (i % perline == 0) { tableCode += '<tr>'; }
              tableCode += '<td bgcolor="#000000"><a style="outline: 1px solid #000000; color: ' 
              	  + colors[i] + '; background: ' + colors[i] + ';font-size: 10px;" title="' 
              	  + colors[i] + '" href="javascript:setColor(\'' + colors[i] + '\');">&nbsp;&nbsp;&nbsp;</a></td>';
              if (i % perline == perline - 1) { tableCode += '</tr>'; }
         }
         if (i % perline != 0) { tableCode += '</tr>'; }
         tableCode += '</table>';
      	 return tableCode;
     }
     function relateColor(id, color) {
     	var link = getObj(id);
     	if (color == '') {
	     	link.style.background = nocolor;
	     	link.style.color = nocolor;
	     	color = nocolor;
     	} else {
	     	link.style.background = color;
	     	link.style.color = color;
	    }
	    eval(getObj(id + 'field').title);
     }
     function getAbsoluteOffsetTop(obj) {
     	var top = obj.offsetTop;
     	var parent = obj.offsetParent;
     	while (parent != document.body) {
     		top += parent.offsetTop;
     		parent = parent.offsetParent;
     	}
     	return top;
     }
     
     function getAbsoluteOffsetLeft(obj) {
     	var left = obj.offsetLeft;
     	var parent = obj.offsetParent;
     	while (parent != document.body) {
     		left += parent.offsetLeft;
     		parent = parent.offsetParent;
     	}
     	return left;
     }


</script>
<!-- flooble Color Picker header end -->      

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title>
Simple Geometry Visualizer
</title>
</head>


<body>
      <span style="width:100%">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" summary="">
      <tr><td>
          <table cellpadding="0" cellspacing="2" border="0" width="100%" summary="">
            <tr><td valign="top"><img src="../myicons/oracle_logo.gif" border="0" /> </td></tr>
            <tr><td valign="bottom"><A href=".."><img src="../myicons/mapviewer.gif" border="0" /></A>
               <FONT color="#449922" size="+1"><b>Simple Spatial Query Visualizer</b></FONT> <FONT size="-1"><A href="jview.jsp.txt">source file</A></FONT></td></tr>
          </table>
          </td>
      </tr>
      <tr><td valign="top">
          <table cellpadding="0" cellspacing="0" border="0" summary="">
            <tr><td align="center"><img src="../myicons/t.gif" border="0" /></td></tr>
          </table> </td>
      </tr>
      </table>
      <hr>
      </span>

   <!-------------------------------------------------------------------------
                  Process the incoming map request
    -------------------------------------------------------------------------->
    
    <%
    
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
    %>
    
      <p><p>
      <!----------------------------------------------------------------------
              Generate the result web page with map image and controls
       ----------------------------------------------------------------------->
      <form action="jview.jsp" name="jview" method="post">
        <%
             if(url!=null)
             {
               int w = (int)mv.getDeviceSize().getWidth(), h = (int)mv.getDeviceSize().getHeight();
        %>
              <TABLE border="0" width="<%=w%>" cellpadding=0 cellspacing=0>
              <TR>
                <TD width=<%=w%>> 
                <input type="image" border="1" SRC="<%=url%>" name="userClick" width="<%=w%>" height="<%=h%>" >
                </TD>
              </TR>
              <tr>
                <td> Click on the map to:
                  <input type="radio" name="action" value="zoomin"   <%= action.equals("zoomin")?"checked":""%> ><B><img src="../myicons/zoomin.gif" alt="zoom in"></B>
                  <input type="radio" name="action" value="recenter" <%= action.equals("recenter")?"checked":""%> ><B><img src="../myicons/pan.gif" alt="re-center"></B>
                  <input type="radio" name="action" value="zoomout"  <%= action.equals("zoomout")?"checked":""%> ><B><img src="../myicons/zoomout.gif" alt="zoom out"></B>
                </td>
              </tr>
              <tr><td height="15">&nbsp;</td></tr>
              </TABLE>
        <%   }
        %>
      <table border="0"  cellpadding="2"  cellspacing="1">
      <tr> <td>      
            <img src="../myicons/dbconnect.gif"><FONT COLOR="#ff0000"> Datasource: </FONT> 
            <SELECT single size="1" name="datasrc-select">
            <%
              if(dataSrcList!=null)
              {
                for (int i = 0; i < dataSrcList.length; i++) 
                {
                  String selected = (dataSrcList[i].equals(dataSrc))? "selected " :"";
            %>    <OPTION <%=selected%> value="<%=dataSrcList[i]%>"> <%=dataSrcList[i]%> </OPTION>
            <%  }
                
              }
            %>
            </SELECT> 
            
            &nbsp;&nbsp;
            map width: <input type="TEXT" size="4" name="map_width"  value="<%=(int)mv.getDeviceSize().getWidth()%>" > &nbsp;
            height: <input type="TEXT" size="4" name="map_height"  value="<%=(int)mv.getDeviceSize().getHeight()%>" >
            &nbsp;&nbsp;
            <INPUT TYPE="checkbox" NAME="map_aa" <%=(mv.getAntiAliasing())?"CHECKED":""%> >AA
           </td>
           
           <td>       <INPUT type=submit value=Submit> </td>
      </tr>
      <tr bgcolor="#ffffcc">
          <td  rowspan="4" valign="top" > query 1: <TEXTAREA cols=60 name=query_1 rows=6><%=(query1!=null)?query1:""%></TEXTAREA>
          </td>
          <td>Line: 
                <a href="javascript:pickColor('pick1097113087');" id="pick1097113087"
                  style="border: 1px solid #000000; font-family:Verdana; font-size:10px;
                  text-decoration: none;">&nbsp;&nbsp;&nbsp;</a>
                  <input id="pick1097113087field" size="7" 
                  type="hidden" title="color" name="stroke_1" value="<%=stroke1%>">
                  <script language="javascript">relateColor('pick1097113087', getObj('pick1097113087field').value);</script>                  
          </td> 
          <td>Fill: 
                <a href="javascript:pickColor('pick1097113085');" id="pick1097113085"
                  style="border: 1px solid #000000; font-family:Verdana; font-size:10px;
                  text-decoration: none;">&nbsp;&nbsp;&nbsp;</a>
                  <input id="pick1097113085field" size="7" 
                  type="hidden" title="color" name="fill_1" value="<%=fill1%>">
                  <script language="javascript">relateColor('pick1097113085', getObj('pick1097113085field').value);</script>
          </td>
      </tr>
      <tr bgcolor="#ffffcc">
          <td  colspan="2"> <INPUT TYPE="checkbox" NAME="tr_1" <%=(tr1!=null)?"CHECKED":""%> >translucent</td>
      </tr>
      <tr bgcolor="#ffffcc"> 
      </tr>
      <tr bgcolor="#ffffcc">
          <td  colspan="2"> Label Column: <INPUT name="lc_1" size="9" value="<%=(labelc1!=null)?labelc1:""%>">
          </td>
      </tr>

      <tr bgcolor="#ccffff">
          <td rowspan="4" valign="top" > query 2: <TEXTAREA cols=60 name=query_2 rows=6><%=(query2!=null)?query2:""%></TEXTAREA>
          </td>
          <td>Line:
                <a href="javascript:pickColor('pick109711307');" id="pick109711307"
                  style="border: 1px solid #000000; font-family:Verdana; font-size:10px;
                  text-decoration: none;">&nbsp;&nbsp;&nbsp;</a>
                  <input id="pick109711307field" size="7" 
                  type="hidden" title="color" name="stroke_2" value="<%=stroke2%>">
                  <script language="javascript">relateColor('pick109711307', getObj('pick109711307field').value);</script>                  
          </td> 
          <td>Fill:
                <a href="javascript:pickColor('pick1097113');" id="pick1097113"
                  style="border: 1px solid #000000; font-family:Verdana; font-size:10px;
                  text-decoration: none;">&nbsp;&nbsp;&nbsp;</a>
                  <input id="pick1097113field" size="7" 
                  type="hidden" title="color" name="fill_2" value="<%=fill2%>">
                  <script language="javascript">relateColor('pick1097113', getObj('pick1097113field').value);</script>
          </td>
      </tr>
      <tr bgcolor="#ccffff">
          <td  colspan="2"> <INPUT TYPE="checkbox" NAME="tr_2" <%=(tr2!=null)?"CHECKED":""%> >translucent</td>
      </tr>
      <tr bgcolor="#ccffff">  
      </tr>
      <tr bgcolor="#ccffff">
          <td  colspan="2"> Label Column: <INPUT name="lc_2" size="9" value="<%=(labelc2!=null)?labelc2:""%>">
          </td>
      </tr>

      <tr bgcolor="#ffffcc">
          <td rowspan="4" valign="top" > query 3: <TEXTAREA cols=60 name=query_3 rows=6><%=(query3!=null)?query3:""%></TEXTAREA>
          </td>
          <td>Line:
                <a href="javascript:pickColor('pick1097');" id="pick1097"
                  style="border: 1px solid #000000; font-family:Verdana; font-size:10px;
                  text-decoration: none;">&nbsp;&nbsp;&nbsp;</a>
                  <input id="pick1097field" size="7" 
                  type="hidden" title="color" name="stroke_3" value="<%=stroke3%>">
                <script language="javascript">relateColor('pick1097', getObj('pick1097field').value);</script>                  
          </td> 
          <td>Fill: 
                <a href="javascript:pickColor('pick1097119');" id="pick1097119"
                  style="border: 1px solid #000000; font-family:Verdana; font-size:10px;
                  text-decoration: none;">&nbsp;&nbsp;&nbsp;</a>
                  <input id="pick1097119field" size="7" 
                  type="hidden" title="color" name="fill_3" value="<%=fill3%>">
                  <script language="javascript">relateColor('pick1097119', getObj('pick1097119field').value);</script>
          </td>
      </tr>
      <tr bgcolor="#ffffcc">
          <td  colspan="2"> <INPUT TYPE="checkbox" NAME="tr_3" <%=(tr3!=null)?"CHECKED":""%> >translucent</td>
      </tr>
      <tr bgcolor="#ffffcc">   
      </tr>
      <tr bgcolor="#ffffcc">
          <td  colspan="2"> Label Column: <INPUT name="lc_3" size="9" value="<%=(labelc3!=null)?labelc3:""%>">
          </td>
      </tr>
      
      <tr> <td>Server URL: <%=(mvURL==null)?"":mvURL%> </td> </tr>
      <tr> <td  height="10"></td></tr>
      </table>
      </form>

<p>
<P>
<HR size="1">
<TABLE width="60%" border="0">
<TR> <TD ALIGN="left"><FONT size="+1"><B>Instructions</B></FONT></TD></TR>

<TR>
  <TD ALIGN="left">
        A data source must be selected from the <font color="#ff0000">Datasource</font> dropdown list. All
        the queries will be executed on the selected data source.
        <p>
        If the Datasource dropdown list is empty, then 
        go <A HREF="../admin.html"> here </A> and add a new data source. <p>        
        
        Up to three SQL queries, one for each text area, can be entered. Note that 
        each query must select only one column or expression that is 
        of <b>SDO_GEOMETRY</b> type. <B> <Font color="#ff0000"> Do NOT end your SQL query with ';' </Font></B>  <p>
        
        Each query's results are rendered using the stroking and/or filling color you picked. 
        The results of the first query will be drawn first, followed by those of query 2 and 3. <p>
        
        Once a map has been displayed, you can click on the map image to zoom in, out or recenter.
        Note that each click will result in all of the queries being executed again. <p>
        
        Use the <b>Submit</b> button to refresh or reset the map after modifying any of
        the following:
        <ul>
        <li> datasource name
        <li> any of the queries
        <li> color, translucency or label column setting for any of the queries
        </ul>
        <p>
        
        The result geometries can also be labeled. To do this, the name of a column or
        expression supplying the label strings must be entered in the corresponding
        <B>Label Column</B> field, as well as the query's SELECT list. <p>
  </TD>
  </TR>

  <TR>
  <TD>
        To change the size of the result map, simply enter new values (in pixel)
        in the map width and height fields. If you want the result map to be
        rendered in antialised mode (often results in smoother maps), 
        check the AA checkbox. <p>
  </TD>
  </TR>
  <TR>
  <TD>
  </TD>
  </TR>
  <TR>
  <TD> &nbsp;<p><Font size="+1"><B>Disclaimer:</B></FONT> <p> This is a demo intended for quicking viewing 
       of your spatial data. No attempts were made in the code to take advantage of MapViewer's full capabilities and optimize the performance or 
       enhance the look & feel of the generated maps.
  </TD>
  </TR>
</TABLE>

<p>
<font size="-1"><i>This demos uses Color Picker Script from Flooble.com</i></font>
</body>
</html>
