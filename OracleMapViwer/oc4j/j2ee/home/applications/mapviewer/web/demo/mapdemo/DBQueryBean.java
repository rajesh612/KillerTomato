/*@lineinfo:filename=DBQueryBean*//*@lineinfo:user-code*//*@lineinfo:1^1*//* $Header: DBQueryBean.java 16-sep-2005.10:54:22 lqian Exp $ */

/* Copyright (c) 2003, 2005, Oracle. All rights reserved.  */

/*
   DESCRIPTION
     DBQueryBean handles all database accesses that might happen during
     territory realignment.

   PRIVATE CLASSES
     none.

   NOTES
     <other useful comments, qualifications, etc.>

   MODIFIED    (MM/DD/YY)
    lqian       09/16/05 - lqian_reorg_ear_files
    jxyang      01/26/05 - report counties does not has any store 
    jxyang      01/25/05 - not delete entry from territories where deleting a 
                           territory 
    jxyang      01/17/05 - fix draft merge conflicts 
    jxyang      12/09/04 - add drafts control capability 
    jxyang      07/13/04 - jxyang_terr_demo
    lqian       06/29/04 - use container datasource
    jxyang      06/15/04 - created for mapviewer territory management demo
 */
package mapdemo;
import javax.sql.DataSource;
import sqlj.runtime.*;
import sqlj.runtime.ref.*;
import java.sql.*;
import oracle.sqlj.runtime.*;
import java.util.*;
import javax.naming.*;

public class DBQueryBean 
{
  DataSource ds = null ;
  Connection connection=null;
  private DefaultContext connContext = null;
  
  public DBQueryBean()
    throws Exception
  {
    Context ic = new InitialContext();
    /* the data source needs to be configured properly in file
     * $OC4J_HOME/j2ee/home/config/data-sources.xml
     */
    ds = (DataSource) ic.lookup("jdbc/MVDemoDS");
  }

  /* create db connection. */
  private Connection dbConnection() 
    throws SQLException
  {
    // Create a connection  object.      
    connection = ds.getConnection();
    // Get a default context using above connection to execute SQLJ statement.      
    connContext = new DefaultContext(connection);
    // Set the above connection context as the default context for this      
    // application.      
    DefaultContext.setDefaultContext(connContext);
    return connection; 
  }
  
  /* Select the list of territory ids and representative names from table
   * TERRITORIES. rep_id is used as territory id.
   * @return list of '<territory id>-<representative name>' strings.
   */
  public ArrayList getTerritoryList(String draft)
    throws SQLException
  {
    ArrayList list = new ArrayList(100);
    dbConnection() ;
    if(draft==null || draft.length()==0)
      draft="LIVE" ;
    /*@lineinfo:generated-code*//*@lineinfo:75^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"0mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:75^45*/
    /*@lineinfo:generated-code*//*@lineinfo:76^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class TerritoryIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public TerritoryIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    rep_idNdx = findColumn("rep_id");
    rep_nameNdx = findColumn("rep_name");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public long rep_id()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(rep_idNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int rep_idNdx;
  public String rep_name()
    throws java.sql.SQLException
  {
    return m_rs.getString(rep_nameNdx);
  }
  private int rep_nameNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:76^61*/
    TerritoryIter t = null ;
    /*@lineinfo:generated-code*//*@lineinfo:78^5*/

//  ************************************************************
//  #sql t = { select rep_id, rep_name from territories order by rep_name };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select rep_id, rep_name from territories order by rep_name";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"1mapdemo.DBQueryBean",theSqlTS);
   // execute query
   t = new TerritoryIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"1mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:78^71*/
    if(t!=null)
    {
      while(t.next())
      {
        list.add(t.rep_id()+"-"+t.rep_name());
      }
    }
    t.close() ;
    /*@lineinfo:generated-code*//*@lineinfo:87^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"2mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:87^45*/
    connection.close();
    return list ;
  }
  
  /* Select the ids and names of those employees who do not have any territories
   * assigned, from table EMPLOYEES. 
   * @return list of '<employee id>-<employee name>' strings
   */
  public ArrayList getEmployeeList(String draft)
    throws SQLException
  {
    if(draft==null || draft.length()==0)
      draft="LIVE" ;
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:102^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"3mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:102^45*/
    ArrayList list = new ArrayList(100);
    /*@lineinfo:generated-code*//*@lineinfo:104^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class TerritoryIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public TerritoryIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    empnoNdx = findColumn("empno");
    enameNdx = findColumn("ename");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public long empno()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(empnoNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int empnoNdx;
  public String ename()
    throws java.sql.SQLException
  {
    return m_rs.getString(enameNdx);
  }
  private int enameNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:104^57*/
    TerritoryIter t = null ;
    /*@lineinfo:generated-code*//*@lineinfo:106^5*/

//  ************************************************************
//  #sql t = { select empno, ename from employees where empno not in (select rep_id from territories) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select empno, ename from employees where empno not in (select rep_id from territories)";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"4mapdemo.DBQueryBean",theSqlTS);
   // execute query
   t = new TerritoryIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"4mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:106^99*/
    if(t!=null)
    {
      while(t.next())
      {
        list.add(t.empno()+"-"+t.ename());
      }
    }
    t.close() ;
    /*@lineinfo:generated-code*//*@lineinfo:115^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"5mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:115^45*/
    connection.close();          
    return list ;
  }
  
  /*
   * Get the center of the territory. Return the longitude and latitude of the
   * center in a double array. Return null if the territory is empty.
   * @param: territory  the id of the territory to be realigned
   */
  public double[] getTerritoryCenter(String territory, String draft)
    throws SQLException
  {
    if(draft==null || draft.length()==0)
      draft="LIVE" ;
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:131^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"6mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:131^45*/
    /*@lineinfo:generated-code*//*@lineinfo:132^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class terrIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public terrIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    xNdx = findColumn("x");
    yNdx = findColumn("y");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public double x()
    throws java.sql.SQLException
  {
    double __sJtmp = m_rs.getDouble(xNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int xNdx;
  public double y()
    throws java.sql.SQLException
  {
    double __sJtmp = m_rs.getDouble(yNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int yNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:132^46*/
    terrIter t=null ;
    ArrayList countyStateList = new ArrayList(50);
    ArrayList terrList = new ArrayList(50);
    /*@lineinfo:generated-code*//*@lineinfo:136^5*/

//  ************************************************************
//  #sql t = { select a.geom.sdo_point.x x, a.geom.sdo_point.y y
//              from 
//                (SELECT sdo_geom.sdo_centroid(geometry, 0.05) geom 
//                 from territories where rep_id=:territory) a
//              where geom is not null and rownum<2 };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select a.geom.sdo_point.x x, a.geom.sdo_point.y y\n            from \n              (SELECT sdo_geom.sdo_centroid(geometry, 0.05) geom \n               from territories where rep_id= :1 ) a\n            where geom is not null and rownum<2";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"7mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,territory);
   // execute query
   t = new terrIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"7mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:140^48*/
    double coords[] = null ;
    if(t!=null)
    {
      if(t.next())
      {
        coords = new double[2] ;
        coords[0] = t.x() ;
        coords[1] = t.y() ;
      }
    }
    /*@lineinfo:generated-code*//*@lineinfo:151^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"8mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:151^45*/
    connection.close();          
    return coords ;
  }
  
  /* Realign the input territory by adding all counties coverd by the input 
   * selection polygon. 
   * @param: territory  the id of the territory to be realigned
   * @param: polyCoords the String that contains the coordinates of all shape 
   *                    points of the polygon.
   */
  public void reAlignTerritoryByPolygon(String territory, String polyCoords, String draft)
    throws SQLException
  {
    if(polyCoords==null || polyCoords.trim().length()==0)
      return ;
    reAlignTerritoryByGeometry(territory, getGeometryFromPolyCoords(polyCoords), draft) ;
  }
  
  /* Realign the input territory by adding all counties coverd by the input 
   * selection rectangle. 
   * @param: territory  the id of the territory to be realigned
   * @param: rectCoords the String that contains the coordinates of the upper
   *                    left corner and lower right corner of the rectangle.
   */
  public void reAlignTerritoryByRect(String territory, String rectCoords, String draft)
    throws SQLException
  {
    reAlignTerritoryByPolygon(territory, getPolyCoordsFromRect(rectCoords), draft) ;
  }
  
  /* Realign the input territory by adding all counties specified by the input
   * counties ids.
   * @param: territory  the id of the territory to be realigned
   * @param: ids        the string of ids of the selected counties. The ids
   *                    are seperated by ",". They are ROWIDs in table COUNTIES
   *                    and RIDs in view COUNTIES_REP.
   */
  public void reAlignTerritoryByIDs(String territory, String ids, String draft)
    throws SQLException
  {
    StringBuffer idListSB = new StringBuffer(ids.length()*2) ;
    /* construct a where clause string that selects all counties with the given
     * rids
     */
    for(int sidx=0,eidx=0;sidx>=0; sidx=eidx)
    {
      if(sidx>0)
      {
        sidx++;
        idListSB.append(",");
      }
      eidx=ids.indexOf(";", sidx);
      if(eidx>0)
        idListSB.append("'"+ids.substring(sidx, eidx).trim()+"'");
      else
        idListSB.append("'"+ids.substring(sidx).trim()+"'");
    }
    // where clause
    String whereString = "rid in ("+idListSB.toString()+")";
    /* select represenative ids, and '<county>,<state>' strings from view
     * COUNTIES_REP. Representative ids are used as territory ids.
     */
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:215^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"9mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:215^45*/
    /*@lineinfo:generated-code*//*@lineinfo:216^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class terrIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public terrIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    rep_idNdx = findColumn("rep_id");
    county_stateNdx = findColumn("county_state");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public long rep_id()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(rep_idNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int rep_idNdx;
  public String county_state()
    throws java.sql.SQLException
  {
    return m_rs.getString(county_stateNdx);
  }
  private int county_stateNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:216^60*/
    terrIter t=null ;
    ArrayList countyStateList = new ArrayList(50);
    ArrayList terrList = new ArrayList(50);
    /*@lineinfo:generated-code*//*@lineinfo:220^5*/

//  ************************************************************
//  #sql t = { select distinct rep_id, county||','||state_abrv county_state from counties_rep where :whereString };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   java.lang.StringBuffer __sjT_sb = new java.lang.StringBuffer();
   __sjT_sb.append("select distinct rep_id, county||','||state_abrv county_state from counties_rep where  ");
   __sjT_sb.append(whereString);
   String __sjT_sql = __sjT_sb.toString();
   String __sjT_tag = "10mapdemo.DBQueryBean:" + __sjT_sql;
  try {
   String theSqlTS = __sjT_sql;
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,__sjT_tag,theSqlTS);
   // set IN parameters
   // execute query
   t = new terrIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,__sjT_tag,null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:220^112*/
    if(t!=null)
    {
      while(t.next())
      {
        countyStateList.add(t.county_state());
        terrList.add(""+t.rep_id());
      }
    }
    t.close() ;
    reAlignTerritory(territory, countyStateList, terrList);
    /*@lineinfo:generated-code*//*@lineinfo:231^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"11mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:231^45*/
    connection.close();          
  }
  
  /* Realign the input territory by adding all counties coverd by the input 
   * geometry. 
   * @param: territory  the id of the territory to be realigned
   * @param: geometry   the SDO_GEOMETRY string representation of the selection
   *                    geometry
   */
  private void reAlignTerritoryByGeometry(String territory, String geometry, String draft)
    throws SQLException
  {
    /* select all counties intersecting with the input geometry and the ids of 
     * their current territories from table counties_rep
     */
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:248^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"12mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:248^45*/
    String whereString = "SDO_RELATE(geom,"+geometry+",'mask=anyinteract')='TRUE'";
    /*@lineinfo:generated-code*//*@lineinfo:250^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class countyIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public countyIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    rep_idNdx = findColumn("rep_id");
    county_stateNdx = findColumn("county_state");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public long rep_id()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(rep_idNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int rep_idNdx;
  public String county_state()
    throws java.sql.SQLException
  {
    return m_rs.getString(county_stateNdx);
  }
  private int county_stateNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:250^62*/
    countyIter t=null ;
    ArrayList countyStateList = new ArrayList(200);
    ArrayList terrList = new ArrayList(200);
    /*@lineinfo:generated-code*//*@lineinfo:254^5*/

//  ************************************************************
//  #sql t = { select distinct rep_id, county||','||state_abrv county_state from counties_rep where :whereString };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   java.lang.StringBuffer __sjT_sb = new java.lang.StringBuffer();
   __sjT_sb.append("select distinct rep_id, county||','||state_abrv county_state from counties_rep where  ");
   __sjT_sb.append(whereString);
   String __sjT_sql = __sjT_sb.toString();
   String __sjT_tag = "13mapdemo.DBQueryBean:" + __sjT_sql;
  try {
   String theSqlTS = __sjT_sql;
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,__sjT_tag,theSqlTS);
   // set IN parameters
   // execute query
   t = new countyIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,__sjT_tag,null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:254^112*/
    if(t!=null)
    {
      while(t.next())
      {
        countyStateList.add(t.county_state());
        terrList.add(""+t.rep_id());
      }
    }
    t.close() ;
    // realign the territory boundaries 
    reAlignTerritory(territory, countyStateList, terrList);
    /*@lineinfo:generated-code*//*@lineinfo:266^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"14mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:266^45*/
    connection.close();          
  }
  
  /* Realign the input territory by adding all counties specified in countyStateList 
   * @param: territory         the id of the territory to be realigned
   * @param: countyStateList   the list of '<county>,<state>' strings of the 
   *                           counties that needed to be realigned.
   * @param: terrList          the list of territories where the counties are 
   *                           orignally located.
   */
  private void reAlignTerritory(String territory, ArrayList countyStateList, ArrayList terrList)
    throws SQLException
  {
    if(territory==null || countyStateList==null || countyStateList.size()==0||terrList==null||terrList.size()==0)
      return ;
    StringBuffer countyStateListSB=new StringBuffer(500) ;
    int terrIdx = 0 ;
    /* find all ids of counties that need to be merged into the given territory.
     * only those counties that currently belong to other territories need to
     * be merged.
     */
    for(int i=0; i<countyStateList.size(); i++)
    {
      String terr = (String)terrList.get(i) ;
      if(!territory.equals(terr))
      {
        if(countyStateListSB.length()==0)
        {
          countyStateListSB.append("('"+countyStateList.get(i)+"'") ;
          terrIdx = i ;
        }
        else
          countyStateListSB.append(",'"+countyStateList.get(i)+"'") ;
      }
      else
      {
        /* the county is already in this territory */
        terrList.remove(i);
        countyStateList.remove(i);
        i--;
      }
    }
    if(countyStateListSB.length()>0)
      countyStateListSB.append(")") ;
    else
      return ;
      
    String whereString = "county||','||state_abrv in "+countyStateListSB ;
    // merge the counties into the territory
    /*@lineinfo:generated-code*//*@lineinfo:316^5*/

//  ************************************************************
//  #sql { update territories 
//            set geometry=
//              sdo_geom.sdo_union(
//                geometry,
//                (select sdo_aggr_union(sdoaggrtype(geom, 0.05)) geom from (
//                   select sdo_aggr_union(sdoaggrtype(geom, 0.05))geom from (
//                     select sdo_aggr_union(sdoaggrtype(geom, 0.05)) geom from (
//                       select sdo_aggr_union(sdoaggrtype(a.geom, 0.05)) geom 
//                       from counties a 
//                       where : whereString group by mod(rownum, 32))            
//                     group by mod(rownum, 8)) 
//                   group by mod(rownum,2))),
//                0.05)
//            where rep_id=:territory  };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   java.lang.StringBuffer __sjT_sb = new java.lang.StringBuffer();
   __sjT_sb.append("update territories \n          set geometry=\n            sdo_geom.sdo_union(\n              geometry,\n              (select sdo_aggr_union(sdoaggrtype(geom, 0.05)) geom from (\n                 select sdo_aggr_union(sdoaggrtype(geom, 0.05))geom from (\n                   select sdo_aggr_union(sdoaggrtype(geom, 0.05)) geom from (\n                     select sdo_aggr_union(sdoaggrtype(a.geom, 0.05)) geom \n                     from counties a \n                     where  ");
   __sjT_sb.append( whereString);
   __sjT_sb.append("  group by mod(rownum, 32))            \n                   group by mod(rownum, 8)) \n                 group by mod(rownum,2))),\n              0.05)\n          where rep_id= ?");
   String __sjT_sql = __sjT_sb.toString();
   String __sjT_tag = "15mapdemo.DBQueryBean:" + __sjT_sql;
   String theSqlTS = __sjT_sql;
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,__sjT_tag,theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,territory);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:329^35*/ 

    /*@lineinfo:generated-code*//*@lineinfo:331^5*/

//  ************************************************************
//  #sql { update terr_counties
//            set (rep_id, rep_name)=(select rep_id, rep_name from territories 
//                 where rep_id=:territory)
//            where : whereString };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   java.lang.StringBuffer __sjT_sb = new java.lang.StringBuffer();
   __sjT_sb.append("update terr_counties\n          set (rep_id, rep_name)=(select rep_id, rep_name from territories \n               where rep_id= ? )\n          where  ");
   __sjT_sb.append( whereString);
   String __sjT_sql = __sjT_sb.toString();
   String __sjT_tag = "16mapdemo.DBQueryBean:" + __sjT_sql;
   String theSqlTS = __sjT_sql;
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,__sjT_tag,theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,territory);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:334^33*/ 
    
    // update all territories that have counties taken out
    while(countyStateList.size()>0)
    {
      countyStateListSB.delete(0, countyStateListSB.length()) ;
      String curTerr = (String)terrList.get(0) ;
      for(int i=0; i<countyStateList.size(); i++)
      {
        String terr = (String)terrList.get(i) ;
        if(terr==null)
          continue ;
        else if(curTerr.equals(terr))
        {
          if(countyStateListSB.length()==0)
            countyStateListSB.append("('"+countyStateList.get(i)+"'") ;
          else
            countyStateListSB.append(",'"+countyStateList.get(i)+"'") ;
          terrList.remove(i) ;
          countyStateList.remove(i) ;
          i-- ;
        }
      }
      if(countyStateListSB.length()>0)
        countyStateListSB.append(")") ;
      else
        return ;
        
      whereString = "county||','||state_abrv in "+countyStateListSB ;
      // remove counties from the territory
      /*@lineinfo:generated-code*//*@lineinfo:364^7*/

//  ************************************************************
//  #sql { update territories 
//              set geometry=
//                    sdo_geom.sdo_difference(
//                      geometry,
//                      (select sdo_aggr_union(sdoaggrtype(geom, 0.05)) geom from (
//                         select sdo_aggr_union(sdoaggrtype(geom, 0.05))geom from (
//                           select sdo_aggr_union(sdoaggrtype(geom, 0.05)) geom from (
//                             select sdo_aggr_union(sdoaggrtype(a.geom, 0.05)) geom 
//                             from counties a 
//                             where : whereString group by mod(rownum, 32))            
//                           group by mod(rownum, 8)) 
//                         group by mod(rownum,2))),
//                      0.05)
//              where rep_id=:curTerr  };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   java.lang.StringBuffer __sjT_sb = new java.lang.StringBuffer();
   __sjT_sb.append("update territories \n            set geometry=\n                  sdo_geom.sdo_difference(\n                    geometry,\n                    (select sdo_aggr_union(sdoaggrtype(geom, 0.05)) geom from (\n                       select sdo_aggr_union(sdoaggrtype(geom, 0.05))geom from (\n                         select sdo_aggr_union(sdoaggrtype(geom, 0.05)) geom from (\n                           select sdo_aggr_union(sdoaggrtype(a.geom, 0.05)) geom \n                           from counties a \n                           where  ");
   __sjT_sb.append( whereString);
   __sjT_sb.append("  group by mod(rownum, 32))            \n                         group by mod(rownum, 8)) \n                       group by mod(rownum,2))),\n                    0.05)\n            where rep_id= ?");
   String __sjT_sql = __sjT_sb.toString();
   String __sjT_tag = "17mapdemo.DBQueryBean:" + __sjT_sql;
   String theSqlTS = __sjT_sql;
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,__sjT_tag,theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,curTerr);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:377^35*/ 
    }
  }
  
  /* create a SDO_GEOMETRY String literal for the input selection polygon 
   * using the given coordinates, which are seperated by "," in polyCoords
   * @param polyCoords  the coordinates string of the selection polygon
   * @return the SDO_GEOMETRY string literal
   */
  private String getGeometryFromPolyCoords(String polyCoords)
  {
    StringTokenizer st = new StringTokenizer(polyCoords, ",") ;
    ArrayList coords = new ArrayList(400) ;
    while(st.hasMoreTokens())
      coords.add(st.nextToken());
    
    /* compute the signed area of the input geometry to determine the orientation
     * of the input polygon.
     * if the signed area is negative, the polygon is in clockwise order, it 
     * should be resersed so that it is in counterclockwise order. 
     */
    double area = 0 ;
    for(int i=0; i<coords.size()/2-1; i++)
    {
      try
      {
        double x1=Double.parseDouble((String)coords.get(i*2)) ;
        double y1=Double.parseDouble((String)coords.get(i*2+1)) ;
        double x2=Double.parseDouble((String)coords.get(i*2+2)) ;
        double y2=Double.parseDouble((String)coords.get(i*2+3)) ;
        area += (x1*y2-x2*y1) ;
      }
      catch(Exception e)
      {
      }
    }
    if(area<0) // need to reverse the order of shape points?
    {
      /* reverse the order of shape points */
      StringBuffer sb = new StringBuffer(polyCoords.length()) ;
      for(int i=coords.size()/2-1; i>=0; i--)
        sb.append(","+coords.get(i*2)+","+coords.get(i*2+1)) ;
      polyCoords=sb.substring(1,sb.length()) ;
    }
    return "SDO_GEOMETRY(2003,8307,NULL,SDO_ELEM_INFO_ARRAY(1,1003,1),"+
           "SDO_ORDINATE_ARRAY("+polyCoords+"))" ;
  }
  
  /* create a polygon vertices representation of a rectangle, which is defined
   * by the two corner vertices.
   * @param rectCoords  the string that contains the coordinates of the two shape
   *                    points of the selection rectangle
   * @return the string that contains the coordinates of all 4 shape points of
   *         the selection rectangle.
   */ 
  private String getPolyCoordsFromRect(String rectCoords)
  {
    StringTokenizer st = new StringTokenizer(rectCoords, ",") ;
    String coords[] = new String[4] ;
    for(int i=0; i<4 && st.hasMoreTokens(); i++)
      coords[i]=st.nextToken() ;
    return coords[0]+','+coords[1]+','+coords[0]+','+coords[3]+','+
           coords[2]+','+coords[3]+','+coords[2]+','+coords[1]+','+
           coords[0]+','+coords[1] ;
  }
  
  private String getReportEntry(int idx, String territoryId, String repName, 
                               long countyNum, double land, long population,
                               int storeCount, double sales)
  {
    String bgColor = (idx%2==1?" bgcolor=#f7f7e7":" bgcolor=#ffffdd") ;
    if(territoryId.equals("0"))
    {
      territoryId="Not assigned" ;
      repName="Not assigned" ;
    }
    return "<tr"+bgColor+" align=right><td class=OraFieldText>"+territoryId+
           "</td><td class=OraFieldText>"+repName+
           "</td><td class=OraFieldText>"+storeCount+
           "</td><td class=OraFieldText>"+sales+
           "</td><td class=OraFieldText>"+countyNum+
           "</td><td class=OraFieldText>"+(long)land+
           "</td><td class=OraFieldText>"+population+"</td></tr>" ;
  }
  
  /* return an html string that describes the aggregate information about the
   * selected counties
   * @param rowids ids of selected counties
   */
  public String getTerrReportByRowids(String rowids, String draft)
    throws SQLException
  { 
    if(rowids==null || rowids.trim().length()==0)
      return "No county is selected!";
    if(draft==null || draft.length()==0)
      draft="LIVE" ;
    StringTokenizer st = new StringTokenizer(rowids, ";") ;
    StringBuffer sb = new StringBuffer(200) ;
    sb.append("(") ;
    while(st.hasMoreTokens())
    {
      if(sb.length()>1)
        sb.append(",") ;
      sb.append("'"+st.nextToken().trim()+"'") ;
    }
    sb.append(")") ;
    String whereString = " rid in "+sb ;
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:485^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"18mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:485^45*/
    /*@lineinfo:generated-code*//*@lineinfo:486^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class countyIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public countyIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    county_cntNdx = findColumn("county_cnt");
    landNdx = findColumn("land");
    popNdx = findColumn("pop");
    rep_idNdx = findColumn("rep_id");
    rep_nameNdx = findColumn("rep_name");
    store_cntNdx = findColumn("store_cnt");
    salesNdx = findColumn("sales");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public long county_cnt()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(county_cntNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int county_cntNdx;
  public double land()
    throws java.sql.SQLException
  {
    double __sJtmp = m_rs.getDouble(landNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int landNdx;
  public long pop()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(popNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int popNdx;
  public String rep_id()
    throws java.sql.SQLException
  {
    return m_rs.getString(rep_idNdx);
  }
  private int rep_idNdx;
  public String rep_name()
    throws java.sql.SQLException
  {
    return m_rs.getString(rep_nameNdx);
  }
  private int rep_nameNdx;
  public int store_cnt()
    throws java.sql.SQLException
  {
    int __sJtmp = m_rs.getInt(store_cntNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int store_cntNdx;
  public double sales()
    throws java.sql.SQLException
  {
    double __sJtmp = m_rs.getDouble(salesNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int salesNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:486^129*/
    countyIter t=null ;
 
     /*@lineinfo:generated-code*//*@lineinfo:489^6*/

//  ************************************************************
//  #sql t = { select 
//                 count(1) county_cnt, sum(landsqmi) land, sum(totpop) pop, 
//                 rep_id, rep_name, sum(store_cnt) store_cnt, sum(sales) sales 
//               from
//                 (select 
//                   landsqmi, totpop, a.county, rep_id, rep_name, count(1) store_cnt, sum(sales) sales 
//                  from counties_rep a, customers b 
//                  where upper(a.county)=b.county and : whereString 
//                  group by landsqmi, totpop, a.county, rep_id, rep_name)
//                group by rep_id, rep_name order by rep_id };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   java.lang.StringBuffer __sjT_sb = new java.lang.StringBuffer();
   __sjT_sb.append("select \n               count(1) county_cnt, sum(landsqmi) land, sum(totpop) pop, \n               rep_id, rep_name, sum(store_cnt) store_cnt, sum(sales) sales \n             from\n               (select \n                 landsqmi, totpop, a.county, rep_id, rep_name, count(1) store_cnt, sum(sales) sales \n                from counties_rep a, customers b \n                where upper(a.county)=b.county and  ");
   __sjT_sb.append( whereString);
   __sjT_sb.append("  \n                group by landsqmi, totpop, a.county, rep_id, rep_name)\n              group by rep_id, rep_name order by rep_id");
   String __sjT_sql = __sjT_sb.toString();
   String __sjT_tag = "19mapdemo.DBQueryBean:" + __sjT_sql;
  try {
   String theSqlTS = __sjT_sql;
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,__sjT_tag,theSqlTS);
   // set IN parameters
   // execute query
   t = new countyIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,__sjT_tag,null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:498^56*/
    
    StringBuffer outsb = new StringBuffer(1000);
    if(t!=null)
    {
      int count=0 ;
      while(t.next())
      {
        outsb.append(getReportEntry(count, t.rep_id(), t.rep_name(), t.county_cnt(), t.land(), t.pop(), t.store_cnt(), t.sales()));
        count++ ;
      }
      t.close() ;
    }
    else
      return "No county is selected!" ;
    /*@lineinfo:generated-code*//*@lineinfo:513^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"20mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:513^45*/
    connection.close();         
    return outsb.length()==0?"No county is selected!":outsb.toString() ;
  }

  /* return an html string that describes the aggregate information about the
   * selected territories
   * @param rectCoords  coordinates of the selection rectangle
   */
  public String getTerrReportByRectangle(String rectCoords, String draft)
    throws SQLException
  { 
    if(rectCoords==null || rectCoords.trim().length()==0)
      return "No store is selected!";
    return getTerrReportByPolygon(getPolyCoordsFromRect(rectCoords), draft);
  }
  
  /* return an html string that describes the aggregate information about the
   * selected territories
   * @param polyCoords  coordinates of the selection polygon
   */
  public String getTerrReportByPolygon(String polyCoords, String draft)
    throws SQLException
  { 
    if(polyCoords==null || polyCoords.trim().length()==0)
      return "No store is selected!";
    if(draft==null || draft.length()==0)
      draft="LIVE" ;
    String whereString = " SDO_RELATE(a.geom,"+getGeometryFromPolyCoords(polyCoords)+",'mask=anyinteract')='TRUE'";
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:543^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"21mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:543^45*/
    /*@lineinfo:generated-code*//*@lineinfo:544^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class countyIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public countyIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    county_cntNdx = findColumn("county_cnt");
    landNdx = findColumn("land");
    popNdx = findColumn("pop");
    rep_idNdx = findColumn("rep_id");
    rep_nameNdx = findColumn("rep_name");
    store_cntNdx = findColumn("store_cnt");
    salesNdx = findColumn("sales");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public long county_cnt()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(county_cntNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int county_cntNdx;
  public double land()
    throws java.sql.SQLException
  {
    double __sJtmp = m_rs.getDouble(landNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int landNdx;
  public long pop()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(popNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int popNdx;
  public String rep_id()
    throws java.sql.SQLException
  {
    return m_rs.getString(rep_idNdx);
  }
  private int rep_idNdx;
  public String rep_name()
    throws java.sql.SQLException
  {
    return m_rs.getString(rep_nameNdx);
  }
  private int rep_nameNdx;
  public int store_cnt()
    throws java.sql.SQLException
  {
    int __sJtmp = m_rs.getInt(store_cntNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int store_cntNdx;
  public double sales()
    throws java.sql.SQLException
  {
    double __sJtmp = m_rs.getDouble(salesNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int salesNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:544^129*/
    countyIter t=null ;
 
     /*@lineinfo:generated-code*//*@lineinfo:547^6*/

//  ************************************************************
//  #sql t = { select 
//                 count(1) county_cnt, sum(landsqmi) land, sum(totpop) pop, 
//                 rep_id, rep_name, sum(store_cnt) store_cnt, sum(sales) sales 
//               from
//                 (select 
//                   landsqmi, totpop, a.county, rep_id, rep_name, count(1) store_cnt, sum(sales) sales 
//                  from counties_rep a, customers b 
//                  where upper(a.county)=b.county and : whereString 
//                  group by landsqmi, totpop, a.county, rep_id, rep_name)
//                group by rep_id, rep_name order by rep_id };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   java.lang.StringBuffer __sjT_sb = new java.lang.StringBuffer();
   __sjT_sb.append("select \n               count(1) county_cnt, sum(landsqmi) land, sum(totpop) pop, \n               rep_id, rep_name, sum(store_cnt) store_cnt, sum(sales) sales \n             from\n               (select \n                 landsqmi, totpop, a.county, rep_id, rep_name, count(1) store_cnt, sum(sales) sales \n                from counties_rep a, customers b \n                where upper(a.county)=b.county and  ");
   __sjT_sb.append( whereString);
   __sjT_sb.append("  \n                group by landsqmi, totpop, a.county, rep_id, rep_name)\n              group by rep_id, rep_name order by rep_id");
   String __sjT_sql = __sjT_sb.toString();
   String __sjT_tag = "22mapdemo.DBQueryBean:" + __sjT_sql;
  try {
   String theSqlTS = __sjT_sql;
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,__sjT_tag,theSqlTS);
   // set IN parameters
   // execute query
   t = new countyIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,__sjT_tag,null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:556^56*/
    
    StringBuffer outsb = new StringBuffer(1000);
    if(t!=null)
    {
      int count=0 ;
      while(t.next())
      {
        outsb.append(getReportEntry(count, t.rep_id(), t.rep_name(), t.county_cnt(), t.land(), t.pop(), t.store_cnt(), t.sales()));
        count ++ ;
      }
      t.close() ;
    }
    else
      return "No county is selected!" ;
    /*@lineinfo:generated-code*//*@lineinfo:571^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"23mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:571^45*/
    connection.close();         
    return outsb.length()==0?"No county is selected!":outsb.toString() ;
  }
  
  /* return an html string that describes the aggregate information about the
   * selected territories
   */
  public String getTerrReportByTerr(String draft)
    throws SQLException
  { 
    if(draft==null || draft.length()==0)
      draft="LIVE" ;
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:585^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"24mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:585^45*/
    /*@lineinfo:generated-code*//*@lineinfo:586^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class countyIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public countyIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    county_cntNdx = findColumn("county_cnt");
    landNdx = findColumn("land");
    popNdx = findColumn("pop");
    rep_idNdx = findColumn("rep_id");
    rep_nameNdx = findColumn("rep_name");
    store_cntNdx = findColumn("store_cnt");
    salesNdx = findColumn("sales");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public long county_cnt()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(county_cntNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int county_cntNdx;
  public double land()
    throws java.sql.SQLException
  {
    double __sJtmp = m_rs.getDouble(landNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int landNdx;
  public long pop()
    throws java.sql.SQLException
  {
    long __sJtmp = m_rs.getLong(popNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int popNdx;
  public String rep_id()
    throws java.sql.SQLException
  {
    return m_rs.getString(rep_idNdx);
  }
  private int rep_idNdx;
  public String rep_name()
    throws java.sql.SQLException
  {
    return m_rs.getString(rep_nameNdx);
  }
  private int rep_nameNdx;
  public int store_cnt()
    throws java.sql.SQLException
  {
    int __sJtmp = m_rs.getInt(store_cntNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int store_cntNdx;
  public double sales()
    throws java.sql.SQLException
  {
    double __sJtmp = m_rs.getDouble(salesNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int salesNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:586^129*/
    countyIter t=null ;
    StringBuffer outsb = new StringBuffer(1000);
    int count=0 ;
 
    /*@lineinfo:generated-code*//*@lineinfo:591^5*/

//  ************************************************************
//  #sql t = { select 
//                 count(1) county_cnt, sum(landsqmi) land, sum(totpop) pop, 
//                 rep_id, rep_name, 0 store_cnt, 0 sales
//              from counties_rep 
//              where rep_id not in(select distinct rep_id 
//                                   from counties_rep a, customers b 
//                                   where upper(a.county)=b.county and a.state_abrv=b.state)
//              group by rep_id, rep_name
//              order by rep_id };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select \n               count(1) county_cnt, sum(landsqmi) land, sum(totpop) pop, \n               rep_id, rep_name, 0 store_cnt, 0 sales\n            from counties_rep \n            where rep_id not in(select distinct rep_id \n                                 from counties_rep a, customers b \n                                 where upper(a.county)=b.county and a.state_abrv=b.state)\n            group by rep_id, rep_name\n            order by rep_id";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"25mapdemo.DBQueryBean",theSqlTS);
   // execute query
   t = new countyIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"25mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:599^28*/  
    if(t!=null)
    {
      while(t.next())
      {
        outsb.append(getReportEntry(count, t.rep_id(), t.rep_name(), t.county_cnt(), t.land(), t.pop(), t.store_cnt(), t.sales()));
        count ++ ;
      }
      t.close() ;
    }
    
    /*@lineinfo:generated-code*//*@lineinfo:610^5*/

//  ************************************************************
//  #sql t = { select 
//                 0 county_cnt, 0 land, 0 pop, rep_id, rep_name, 0 store_cnt, 0 sales
//              from territories  
//              where geometry is null
//              order by rep_id };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select \n               0 county_cnt, 0 land, 0 pop, rep_id, rep_name, 0 store_cnt, 0 sales\n            from territories  \n            where geometry is null\n            order by rep_id";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"26mapdemo.DBQueryBean",theSqlTS);
   // execute query
   t = new countyIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"26mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:614^28*/  
    if(t!=null)
    {
      while(t.next())
      {
        outsb.append(getReportEntry(count, t.rep_id(), t.rep_name(), t.county_cnt(), t.land(), t.pop(), t.store_cnt(), t.sales()));
        count ++ ;
      }
      t.close() ;
    }
    
    /*@lineinfo:generated-code*//*@lineinfo:625^5*/

//  ************************************************************
//  #sql t = { select 
//                  count(1) county_cnt, sum(landsqmi) land, sum(totpop) pop, 
//                  rep_id, rep_name, sum(store_cnt) store_cnt, sum(sales) sales 
//                from
//                  (select 
//                    landsqmi, totpop, a.county, rep_id, rep_name, count(1) store_cnt, sum(sales) sales 
//                   from counties_rep a, customers b 
//                   where upper(a.county)=b.county and a.state_abrv=b.state 
//                   group by landsqmi, totpop, a.county, rep_id, rep_name)
//               group by rep_id, rep_name order by rep_id };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select \n                count(1) county_cnt, sum(landsqmi) land, sum(totpop) pop, \n                rep_id, rep_name, sum(store_cnt) store_cnt, sum(sales) sales \n              from\n                (select \n                  landsqmi, totpop, a.county, rep_id, rep_name, count(1) store_cnt, sum(sales) sales \n                 from counties_rep a, customers b \n                 where upper(a.county)=b.county and a.state_abrv=b.state \n                 group by landsqmi, totpop, a.county, rep_id, rep_name)\n             group by rep_id, rep_name order by rep_id";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"27mapdemo.DBQueryBean",theSqlTS);
   // execute query
   t = new countyIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"27mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:634^55*/
    if(t!=null)
    {
      while(t.next())
      {
        outsb.append(getReportEntry(count, t.rep_id(), t.rep_name(), t.county_cnt(), t.land(), t.pop(), t.store_cnt(), t.sales()));
        count ++ ;
      }
      t.close() ;
    }
    
    /*@lineinfo:generated-code*//*@lineinfo:645^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"28mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:645^45*/
    connection.close();         
    return outsb.length()==0?"No Territory!":outsb.toString() ;
  }
  
  /* create a new territory for the given representative, which is specified by
   * repid.
   * @param repid the id of the representative for whom the territory is created
   *        repid is also used as the id of the newly created territory.
   */
  public void createNewTerritory(String repid, String draft)
    throws SQLException
  {
    dbConnection() ;
    // insert a new row into table TERRITORIES
    /*@lineinfo:generated-code*//*@lineinfo:660^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"29mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:660^45*/
    /*@lineinfo:generated-code*//*@lineinfo:661^5*/

//  ************************************************************
//  #sql { insert into TERRITORIES select empno, ename, null from employees where empno=:repid };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   String theSqlTS = "insert into TERRITORIES select empno, ename, null from employees where empno= :1";
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,"30mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,repid);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:661^94*/
    /*@lineinfo:generated-code*//*@lineinfo:662^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"31mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:662^45*/
    connection.close(); 
  }
  
  /* remove an existing territory
   * @param territory the id of the territory to be removed
   */
  public void removeTerritory(String territory, String draft)
    throws SQLException
  {
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:673^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"32mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:673^45*/
    // territory is identified by rep_id
    /*@lineinfo:generated-code*//*@lineinfo:675^5*/

//  ************************************************************
//  #sql { delete from TERRITORIES where rep_id=:territory };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   String theSqlTS = "delete from TERRITORIES where rep_id= :1";
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,"33mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,territory);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:675^58*/
    /*@lineinfo:generated-code*//*@lineinfo:676^5*/

//  ************************************************************
//  #sql { update terr_counties set rep_id=0, rep_name=' ' where rep_id=:territory };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   String theSqlTS = "update terr_counties set rep_id=0, rep_name=' ' where rep_id= :1";
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,"34mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,territory);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:676^82*/
    /*@lineinfo:generated-code*//*@lineinfo:677^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"35mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:677^45*/
    connection.close(); 
  }
  
  /*
   * Get the list of saved drafts 
   */
  public ArrayList getDrafts()
    throws SQLException
  {
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:688^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"36mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:688^45*/
    /*@lineinfo:generated-code*//*@lineinfo:689^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class draftIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public draftIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    workspaceNdx = findColumn("workspace");
    createtimeNdx = findColumn("createtime");
    descriptionNdx = findColumn("description");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public String workspace()
    throws java.sql.SQLException
  {
    return m_rs.getString(workspaceNdx);
  }
  private int workspaceNdx;
  public String createtime()
    throws java.sql.SQLException
  {
    return m_rs.getString(createtimeNdx);
  }
  private int createtimeNdx;
  public String description()
    throws java.sql.SQLException
  {
    return m_rs.getString(descriptionNdx);
  }
  private int descriptionNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:689^84*/
    draftIter t=null ;
    /*@lineinfo:generated-code*//*@lineinfo:691^5*/

//  ************************************************************
//  #sql t = { select workspace, createtime, description from user_workspaces order by createtime };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select workspace, createtime, description from user_workspaces order by createtime";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"37mapdemo.DBQueryBean",theSqlTS);
   // execute query
   t = new draftIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"37mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:691^95*/
    ArrayList results = new ArrayList(10) ;
    if(t!=null)
    {
      while(t.next())
      {
        results.add(t.workspace());
        results.add(t.createtime()) ;
        results.add(t.description()) ;
      }
      t.close() ;
    }
    connection.close();         
    return results ;
  }
  
  /* 
   * Delete selected drafts 
   * @param drafts list of draft names to be deleted
   */
  public void deleteDrafts(String[] drafts)
    throws SQLException
  {
    if(drafts==null || drafts.length==0)
      return ;
      
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:718^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"38mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:718^45*/
    // territory is identified by rep_id
    for(int i=0; i<drafts.length; i++)
    {
      String draft = drafts[i] ;
      /*@lineinfo:generated-code*//*@lineinfo:723^7*/

//  ************************************************************
//  #sql { call DBMS_WM.RemoveWorkspace(:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.RemoveWorkspace( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"39mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:723^49*/
    }
    connection.close() ;
  }
  
  /*
   * Merge draft into live data
   * @param draft the name of the draft to be merged
   */
  public void mergeDraft(String draft)
    throws SQLException
  {
    if(draft==null)
      return ;
    dbConnection() ;
    /* There could be conflicts when merging a draft if another draft has been
     * previously merged. To simplify this demo, we always resolve the conflicts
     * by replacing the conflicting records with the records from the current 
     * draft.
     */
    /*@lineinfo:generated-code*//*@lineinfo:743^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace (:draft) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace ( :1 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"40mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:743^46*/
    /*@lineinfo:generated-code*//*@lineinfo:744^5*/

//  ************************************************************
//  #sql { truncate table territories_tmp };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "truncate table territories_tmp";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"41mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:744^41*/
    /*@lineinfo:generated-code*//*@lineinfo:745^5*/

//  ************************************************************
//  #sql { truncate table terr_counties_tmp };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "truncate table terr_counties_tmp";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"42mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:745^43*/
    /*@lineinfo:generated-code*//*@lineinfo:746^5*/

//  ************************************************************
//  #sql { insert into territories_tmp select * from territories };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   String theSqlTS = "insert into territories_tmp select * from territories";
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,"43mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:746^64*/
    /*@lineinfo:generated-code*//*@lineinfo:747^5*/

//  ************************************************************
//  #sql { insert into terr_counties_tmp select * from terr_counties };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   String theSqlTS = "insert into terr_counties_tmp select * from terr_counties";
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,"44mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:747^68*/
    /*@lineinfo:generated-code*//*@lineinfo:748^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace ('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace ('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"45mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:748^46*/
    /*@lineinfo:generated-code*//*@lineinfo:749^5*/

//  ************************************************************
//  #sql { delete from territories };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   String theSqlTS = "delete from territories";
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,"46mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:749^34*/ 
    /*@lineinfo:generated-code*//*@lineinfo:750^5*/

//  ************************************************************
//  #sql { insert into territories select * from territories_tmp };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   String theSqlTS = "insert into territories select * from territories_tmp";
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,"47mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:750^64*/
    /*@lineinfo:generated-code*//*@lineinfo:751^5*/

//  ************************************************************
//  #sql { update terr_counties a set (rep_id, rep_name)=(select rep_id, rep_name from terr_counties_tmp b where b.key=a.key) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
   String theSqlTS = "update terr_counties a set (rep_id, rep_name)=(select rep_id, rep_name from terr_counties_tmp b where b.key=a.key)";
   __sJT_st = __sJT_ec.prepareOracleBatchableStatement(__sJT_cc,"48mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteBatchableUpdate();
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:751^125*/
    /*@lineinfo:generated-code*//*@lineinfo:752^5*/

//  ************************************************************
//  #sql { commit };
//  ************************************************************

  ((sqlj.runtime.ref.DefaultContext.getDefaultContext().getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : sqlj.runtime.ref.DefaultContext.getDefaultContext().getExecutionContext().getOracleContext()).oracleCommit(sqlj.runtime.ref.DefaultContext.getDefaultContext());


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:752^17*/
    connection.close();
  }
  
  /*
   * Create a new draft
   * @param draft name of the draft
   * @param notes comments
   */
  public void createDraft(String draft, String notes)
    throws SQLException
  {
    if(draft==null)
      return ;
    dbConnection() ;
    /*@lineinfo:generated-code*//*@lineinfo:767^5*/

//  ************************************************************
//  #sql { call DBMS_WM.gotoWorkspace('LIVE') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.gotoWorkspace('LIVE')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"49mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:767^45*/
    /*@lineinfo:generated-code*//*@lineinfo:768^5*/

//  ************************************************************
//  #sql { call DBMS_WM.CreateWorkspace(:draft, :notes) };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.CreateWorkspace( :1 ,  :2 )\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"50mapdemo.DBQueryBean",theSqlTS);
   // set IN parameters
   __sJT_st.setString(1,draft);
   __sJT_st.setString(2,notes);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:768^55*/
    /*@lineinfo:generated-code*//*@lineinfo:769^5*/

//  ************************************************************
//  SQLJ iterator declaration:
//  ************************************************************

class versionedIter
extends sqlj.runtime.ref.ResultSetIterImpl
implements sqlj.runtime.NamedIterator
{
  public versionedIter(sqlj.runtime.profile.RTResultSet resultSet)
    throws java.sql.SQLException
  {
    super(resultSet);
    cntNdx = findColumn("cnt");
    m_rs = (oracle.jdbc.OracleResultSet) resultSet.getJDBCResultSet();
  }
  private oracle.jdbc.OracleResultSet m_rs;
  public int cnt()
    throws java.sql.SQLException
  {
    int __sJtmp = m_rs.getInt(cntNdx);
    if (m_rs.wasNull()) throw new sqlj.runtime.SQLNullException(); else return __sJtmp;
  }
  private int cntNdx;
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:769^40*/
    versionedIter t=null ;
    /*@lineinfo:generated-code*//*@lineinfo:771^5*/

//  ************************************************************
//  #sql t = { select count(1) cnt from user_wm_versioned_tables where table_name='TERRITORIES' };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select count(1) cnt from user_wm_versioned_tables where table_name='TERRITORIES'";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"51mapdemo.DBQueryBean",theSqlTS);
   // execute query
   t = new versionedIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"51mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:771^93*/
    t.next() ;
    if(t.cnt()==0)
    {
      /*@lineinfo:generated-code*//*@lineinfo:775^7*/

//  ************************************************************
//  #sql { call DBMS_WM.enableVersioning('territories') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.enableVersioning('territories')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"52mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:775^57*/
    }
    /*@lineinfo:generated-code*//*@lineinfo:777^5*/

//  ************************************************************
//  #sql t = { select count(1) cnt from user_wm_versioned_tables where table_name='TERR_COUNTIES' };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "select count(1) cnt from user_wm_versioned_tables where table_name='TERR_COUNTIES'";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"53mapdemo.DBQueryBean",theSqlTS);
   // execute query
   t = new versionedIter(new sqlj.runtime.ref.OraRTResultSet(__sJT_ec.oracleExecuteQuery(),__sJT_st,"53mapdemo.DBQueryBean",null));
  } finally { __sJT_ec.oracleCloseQuery(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:777^95*/
    t.next() ;
    if(t.cnt()==0)
    {
      /*@lineinfo:generated-code*//*@lineinfo:781^7*/

//  ************************************************************
//  #sql { call DBMS_WM.enableVersioning('terr_counties') };
//  ************************************************************

{
  // declare temps
  oracle.jdbc.OraclePreparedStatement __sJT_st = null;
  sqlj.runtime.ref.DefaultContext __sJT_cc = sqlj.runtime.ref.DefaultContext.getDefaultContext(); if (__sJT_cc==null) sqlj.runtime.error.RuntimeRefErrors.raise_NULL_CONN_CTX();
  sqlj.runtime.ExecutionContext.OracleContext __sJT_ec = ((__sJT_cc.getExecutionContext()==null) ? sqlj.runtime.ExecutionContext.raiseNullExecCtx() : __sJT_cc.getExecutionContext().getOracleContext());
  try {
   String theSqlTS = "BEGIN DBMS_WM.enableVersioning('terr_counties')\n; END;";
   __sJT_st = __sJT_ec.prepareOracleStatement(__sJT_cc,"54mapdemo.DBQueryBean",theSqlTS);
 // execute statement
   __sJT_ec.oracleExecuteUpdate();
  } finally { __sJT_ec.oracleClose(); }
}


//  ************************************************************

/*@lineinfo:user-code*//*@lineinfo:781^59*/
    }
    connection.close();
  }
}/*@lineinfo:generated-code*/