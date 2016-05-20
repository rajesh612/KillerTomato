<%@ page contentType="text/html; charset=windows-1252"
         import="java.io.File"
         import="java.io.FilenameFilter"
%>

<html>
<head>
<title>
Portlet Application Test Page
</title>
<body style="font-family:Arial,Helvetica,Geneva;sans-serif;">
<table border="0" width="50%">
<tr>
<td>
<h2 style="font-family:Arial,Helvetica,sans-serif;
font-size:170%;color:#336699;
background-color:#ffffff;
border: solid #cccc99;
border-width:0px 0px 2px 0px;
width:100%">
OracleAS 10<i>G</i> MapViewer Portlet Provider Information
</h2>
</td></tr>
<tr><td>&nbsp;&nbsp;</td></tr>
<tr><td>
This page lists the MapViewer portlet provider available in this web application. Use the registration URL in combination with the provider's service name to register the provider. Click on the service name link to view the provider's test page.
</td></tr>
</table>
<%
   String server = null;
   {
       StringBuffer buff = new StringBuffer();
       buff.append(request.getScheme()).append("://");
       buff.append(request.getServerName()).append(":");
       buff.append(request.getServerPort());
       buff.append(request.getContextPath());
       buff.append("/providers/");
       server = buff.toString();
   }
   String deployDirName = application.getRealPath("/WEB-INF/deployment");
   File deployDir = new File(deployDirName);
   File[] deploymentFiles = deployDir.listFiles(new FilenameFilter()
       {
           public boolean accept(File dir, String name)
           {
               if (name != null &&
                   name.endsWith(".properties") &&
                   !name.startsWith("_default"))
               {
                   return true;
               }
               return false;
           }
       });
%>
<blockquote>
<table border="0" cellpadding="1" cellspacing="1">
<tr>
<td style="font-family:Arial;font-size:12pt;
            font-weight:bold;color:#336699;
            background-color:#cccc99">
Registration URL
</td>
<td style="background-color:#f7f7e7;">&nbsp;&nbsp;</td>
<td style="background-color:#f7f7e7;"><%= server %>
</td></tr></table></blockquote>
<blockquote>
<table border="0" cellpadding="1" cellspacing="1">
<tr>
<th style="font-family:Arial;font-size:12pt;
            font-weight:bold;color:#336699;
            background-color:#cccc99">
Service Name
</th></tr>
<%
    String fileName = null;
    String name = null;
    for (int i = 0; i < deploymentFiles.length; i++)
    {
        fileName = deploymentFiles[i].getName();
        name = fileName.substring(0, fileName.indexOf(".properties"));
%>
<tr>
<td style="background-color:<%= (i%2 == 0 ? "#f7f7e7" : "#ffffff")%>">
<a href="<%= server + name %>"><%= name %></a>
</td></tr><% } %>
</table></blockquote>
<p><p>

<H3> Troubleshooting: </H3>
If clicking on the above service name url returns a "500 Internal Error" saying the "SOAPServlet" cannot be found, the most likely cause is that you have not specified the PDK Java library path for this MapViewer instance. Please follow one of the two options listed below and try again.

<h3> Case 1: Your MapViewer is running in a Standalone OC4J </h3>
<blockquote> Copy the two jar files named <b>pdkjava.jar</b> and <b>ptlshare.jar</b> from a PDK kit (downloadable from OTN) into the MapViewer library path: $MAPVIEWER/web/WEB-INF/lib. After you restart OC4J it should be all set. <BR>
The two jar files can also be obtained from a full Oracle Application Server Portal install. They should reside in the $OH/portal/pdkjava/v2/lib directory.
</blockquote> 

<h3> Case 2: You deployed MapViewer in a full Oracle Application Server through EM web site. </h3>

<blockquote> From the EM website, navigate to the OC4J instance where MapViewer is deployed. Select and enter the mapviewer application page. Then click and enter the "General" Properties web page.  There you will see an option to "Add Another Row" in the Library Path section. You need to add two rows here, each containing the absolute path to one of the two aforementioned jars of the portal/pdkjava/v2/lib directory from the same Application Server instance.
</blockquote>


</body></html>
