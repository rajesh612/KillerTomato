# KillerTomato
Create KillerTomato Using Spatial DataBase and Oracle MapViewer
## Create KillerTomato DataBase Table Using SQL
    CREATE TABLE killer_tomato_tbl(
    id NUMBER PRIMARY KEY,
    name VARCHAR(32),
    shape MDSYS.SDO_GEOMETRY);
	
#### Insert Values into Killer Tomato Table Using Insert Command.
    INSERT INTO killer_tomato_tbl VALUES(
    1, 'tfoot1', MDSYS.SDO_GEOMETRY (2003, NULL, NULL,
       MDSYS.SDO_ELEM_INFO_ARRAY(1, 1003, 1),
       MDSYS.SDO_ORDINATE_ARRAY(150,30, 150,40, 180,40, 180,30, 150, 30))
    );

## Run Oracle MapViewer
#### Edit start batch file and change path of Java Home in Oracle MapViewer and Oracle DataBase Java Path.
   cd C:\OracleMapViwer\oc4j\j2ee\home
   "C:\app\RajeshKumar\product\11.2.0\dbhome_1\jdk\bin\java" -server -Xmx768M -jar oc4j.jar
#### Run start batch file and provide new password.

#### Open ReadMe Text Document in Oracle MapViewer folder and open URL http://localhost:8888/mapviewer in your browser to launch Oracle Map Viewer.
#### Login to MapViewer as admin by providing oc4jadmin as Username and password.
#### Add a DataBase connection as a data source.
#### Click Demos tab and goto JView Demo to get Spatial Query Visualizer.
#### Select the datasource and enter SQL SELECT Query to get Killer Tomato Local Coordinates Figure.
     
	 select * from killer_tomato_tbl

#### User can get Spatial Geometry Objects Using SQL.