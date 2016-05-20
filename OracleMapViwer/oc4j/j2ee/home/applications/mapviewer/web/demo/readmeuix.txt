/
/ $Header: readmeuix.txt 16-sep-2005.10:54:23 lqian Exp $
/
/ readmeuix.txt
/
/ Copyright (c) 2003, Oracle Corporation. All Rights Reserved.
/
/   NAME
/     readmeuix.txt - <one-line expansion of the name>
/
/   DESCRIPTION
/     readme file for the MapViewer JSP and UIX taglib demo
/
/   NOTES
/     <other useful comments, qualifications, etc.>
/
/   MODIFIED   (MM/DD/YY)
/   lqian       09/16/05 - lqian_reorg_ear_files
/   jsharma     09/12/03 - jsharma_add_uix_jsp_tag_demo 
/   jsharma     09/11/03 - Creation
/
Purpose of the demo.
The demo shows how one can use UIX JSP tags and MapViewer JSP tags together
to build a web application. It is identical in scope and content to tagmap.jsp.

Files required.
The jsp files are mapadminuixtags.jsp and mappageuixtags.jsp. The help files
that correspond to these are helpmapadmin.uix and helpmapnav.uix.

Prerequisites.
The demo requires UIX 2.2.1 or later. This must be installed in your OC4J instance.
There are a few other requirements.
(i) The uix.tld file should be placed in mapviewer/web/WEB-INF and the web.xml 
file in this directory should be modified to include the following lines.  

  <!-- Define the Servlet for the UIX web application -->
  <servlet>
    <servlet-name>uix</servlet-name>

    <!-- Specify the Servlet class -->
    <servlet-class>oracle.cabo.servlet.UIXServlet</servlet-class>

    <!-- Specify the PageBroker -->
    <init-param>
      <param-name>oracle.cabo.servlet.pageBroker</param-name>
      <param-value>oracle.cabo.servlet.xml.UIXPageBroker</param-value>
    </init-param>

  </servlet>

  <!-- Define mappings for uix files -->
  <servlet-mapping>
    <servlet-name>uix</servlet-name>
    <url-pattern>/uix/*</url-pattern>
  </servlet-mapping>

  <servlet-mapping>
    <servlet-name>uix</servlet-name>
    <url-pattern>*.uix</url-pattern>
  </servlet-mapping>

(ii) The resource files for uix must be placed in mapviewer/web. 
That is unzip uix2-install.zip in mapviewer/web. All the resource files will
then be in the directory named mapviewer/web/cabo

Running the demo.
Use mapadminuixtags.jsp as the starting page. That is, use 
http://<hostname>[:port]/mapviewer/demo/mapadminuixtags.jsp
and supply the requested parameters.
If you wish to use mappageuixtags.jsp directly then modify the 
hard coded parameters in it. 

