     OracleFMW MapViewer 11.1.1.5.1
        Quick Start Instructions
               
-- Contents
  
   This kit includes OC4J standalone 10.1.3.5 production 
   release, with MapViewer 11g patch 4 (11.1.1.5.1) pre-deployed and
   ready to run.

   The exact build of MapViewer is: LBS_11.1.1.5.0_GENERIC_110531.1111.

-- System Requirements

   Java SDK 1.5 or later is required to run this kit. JDK 6 is
   recommended.

-- How to start MapViewer

To start MapViewer on Unix/Linux/Mac OS X, please use the
script start.sh. Make sure to modify the location of your Java executable
accordingly before launching the script.

To start MapViewer on Windows, please use the script start.bat.
Make sure to modify the location of your Java executable
accordingly before launching the script.


-- How to access MapViewer

  After MapViewer is up and running,  go to 
http://localhost:8888/mapviewer to access its functions. 
If your browser disables access to "localhost", you may have
to use the real host name or 127.0.0.1 as the host in the URL.

The first thing you want to do is probably adding a data 
source to MapViewer; you can do this from MapViewer's Admin 
page.  

-- Password for the MapViewer Admin Page

The default login for the MapViewer Admin page is oc4jadmin,
the password is what you set when you first start this
quick start kit. It is the same as OC4J's admin account.

You can change the passwd by typing the following from the 
oc4j/j2ee/home direcotory:

java -jar oc4j.jar -install

It will prompt for a new password.


-- How to stop MapViewer


To stop the MapViewer server, simply kill the process (Ctrl-C
the terminal, or close the command line window on Windows).


-- Web Resources

Please post your questions regarding this kit or MapViewer to
the Oracle Spatial Discussion Forum on OTN. The URL for the 
forum is: 
  http://forums.oracle.com/forums/forum.jspa?forumID=727

More resources are available on OTN's MapViewer page:

http://www.oracle.com/technetwork/middleware/mapviewer/overview/index.html

-- Disclaimer

This kit is intended for demonstration, tutorial and 
development purposes only.


Thank you,

OracleFMS MapViewer team
May 31, 2011.

