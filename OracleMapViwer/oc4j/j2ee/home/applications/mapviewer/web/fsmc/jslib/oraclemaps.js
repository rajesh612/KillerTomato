//Version: Ver11.1.1.4_B110527
MVMessages=new Array();
MVMessages["MAPVIEWER-05500"]="Oracle Maps client internal error.";
MVMessages["MAPVIEWER-05501"]="Map tile layer not found. Check map tile layer name and/or data source name.";
MVMessages["MAPVIEWER-05502"]="Cannot get map tile layer config information.";
MVMessages["MAPVIEWER-05503"]="FOI ID cannot be null.";
MVMessages["MAPVIEWER-05504"]="MapViewer server base URL is not defined.";
MVMessages["MAPVIEWER-05505"]="Wrong map center point specified. It should be an MVSdoGeometry point.";
MVMessages["MAPVIEWER-05506"]="Invalid zoom level.";
MVMessages["MAPVIEWER-05507"]="Map tile layer name cannot be null. ";
MVMessages["MAPVIEWER-05508"]="FOI Id is already used, please pick a new Id.";
MVMessages["MAPVIEWER-05509"]="Theme-based FOI layer name is used, please pick a new name.";
MVMessages["MAPVIEWER-05510"]="Cannot find theme-based FOI layer.";
MVMessages["MAPVIEWER-05511"]="Error occurred when sending request to MapViewer server.";
MVMessages["MAPVIEWER-05512"]="Not enough points have been drawn.";
MVMessages["MAPVIEWER-05513"]="Not a valid line or polygon type MVSdoGeometry.";
MVMessages["MAPVIEWER-05514"]="Must have a filtering geometry when in high-light only mode.";
MVMessages["MAPVIEWER-05515"]="Oracle Maps client notification.";
MVMessages["MAPVIEWER-05516"]="Synchronized remote call is not supported when using Oracle Maps' non-AJAX remoting.";
MVMessages["MAPVIEWER-05517"]="Request string is too long for Oracle Maps' non-AJAX remoting.";
MVMessages["MAPVIEWER-05518"]="Map tile layer hasn't been successfully added.";
MVMessages["MAPVIEWER-05519"]="One or more parameter is missing or invalid.";
MVMessages["MAPVIEWER-05520"]="Geometry SRID is null.";
MVMessages["MAPVIEWER-05521"]="Call back function cannot be null when browser's builtin XMLHttp/XMLHttpRequest is disabled.";
MVMessages["MAPVIEWER-05522"]="Client side coordinate system conversion not supported.";
MVMessages["MAPVIEWER-05523"]="Cannot process response from MapViewer server.";
MVMessages["MAPVIEWER-05524"]="Theme feature highlighting is disabled for this theme.";
MVMessages["MAPVIEWER-05525"]="Theme has not been added to a MVMapView instance.";
MVMessages["MAPVIEWER-05526"]="Map has not been initialized. Please try again later.";
MVMessages["MAPVIEWER-05527"]="Wrong parameter data type. ";
MVMessages["MAPVIEWER-05528"]="Map tile layers have different zoom level definitions. Only the map tile layer added later will be added to the map.";
MVMessages["marqueeZoomHint"]="Click on the rectangle to zoom in!";
MVMessages["panNWInfoTip"]="Pan NorthWest";
MVMessages["panNInfoTip"]="Pan North";
MVMessages["panNEInfoTip"]="Pan NorthEast";
MVMessages["panWInfoTip"]="Pan West";
MVMessages["panEInfoTip"]="Pan East";
MVMessages["panSWInfoTip"]="Pan SouthWest";
MVMessages["panSInfoTip"]="Pan South";
MVMessages["panSEInfoTip"]="Pan SouthEast";
MVMessages["panCenterInfoTip"]="Home";
MVMessages["sliderBarInfoTip"]="Click to change zoom level";
MVMessages["sliderInfoTip"]="Drag to change zoom level";
MVMessages["zoomInInfoTip"]="Zoom in";
MVMessages["zoomOutInfoTip"]="Zoom out";
MVMessages["scaleBarInfoTip"]="Scale at the center of the map";
MVMessages["kilometers"]="km";
MVMessages["miles"]="mi";
MVMessages["meters"]="m";
MVMessages["feet"]="ft";
MVMessages["delete"]="Delete";
MVMessages["addPoint"]="Add Point";
MVMessages["finish"]="Finish";
MVMessages["clear"]="Clear";
MVMessages["totalDistance"]="Total Distance:";
MVMessages["km"]="km";
MVMessages["m"]="m";
MVMessages["cm"]="cm";
MVMessages["mi"]="mi";
MVMessages["yd"]="yd";
MVMessages["ft"]="ft";
MVMessages["clearButton"]="Clear Button";
MVMessages["redlineTool"]="Redline Tool";
MVMessages["distanceTool"]="Distance Tool";
MVMessages["circleTool"]="Circle Tool";
MVMessages["retangleTool"]="Retangle Tool";
MVMessages["marqueeZoomTool"]="Marquee Zoom Tool";
MVMessages["number_format"]="1,000.1";
function MVXMLHttpRequest()
{
this.onreadystatechange=null;
this._f464=0;
this.url=null;
this.status=0;
this.readyState=0;
this._f465=null;
this.responseText=null;
}
MVXMLHttpRequest._f466=new Array();
MVXMLHttpRequest._f467=0;
MVXMLHttpRequest._f468=Math.round(Math.random()*10000);
MVXMLHttpRequest.callBack=function(id,x0,x1)
{
while(MVXMLHttpRequest._f466.length>0)
{
var x2=MVXMLHttpRequest._f466[0];
if(!x2.onreadystatechange)
{
if(x2._f465)
{
document.body.removeChild(x2._f465);
x2._f465=null;
}
MVXMLHttpRequest._f466.shift();
}
else
 break;
}
var x3=0;
for(;x3<MVXMLHttpRequest._f466.length;x3++)
{
if(MVXMLHttpRequest._f466[x3]._f464==id)
{
var x2=MVXMLHttpRequest._f466[x3];
document.body.removeChild(x2._f465);
x2._f465=null;
if(x3==0)
MVXMLHttpRequest._f466.shift();
x2.status=200;
x2.readyState=4;
x2.responseText=x0;
if(x2.onreadystatechange&&!x1)
{
x2.onreadystatechange();
}
x2.onreadystatechange=null;
return ;
}
}
}
MVXMLHttpRequest.prototype.abort=function()
{
MVXMLHttpRequest.callBack(this._f464,null,true);
}
MVXMLHttpRequest.prototype.open=function(x4,x5,x6)
{
if(!x6)
throw "[MVXMLHttpRequest.open] "+MVi18n._f469("MAPVIEWER-05516");
else
 this.url=x5;
}
MVXMLHttpRequest.prototype.send=function(x7)
{
if(!this.url)
return ;
this._f464=MVXMLHttpRequest._f468+"_"+MVXMLHttpRequest._f467++;
var x8=this.url;
if(x8.indexOf("?")>0)
x8+="&";
else
 x8+="?";
x8+="callback_id="+this._f464;
x8+="&"+x7;
if(x8.length>_f65._f470)
{
throw "[MVXMLHttpRequest.send] "+MVi18n._f469("MAPVIEWER-05517");
return ;
}
var x9=document.createElement("script");
x9.src=x8;
x9.type='text/javascript';
x9.charset='utf-8';
this._f465=x9;
MVXMLHttpRequest._f466.push(this);
document.body.appendChild(x9);
if(MVMapView.debug)
MVi18n.alert("MVXMLHttpRequest. URL:"+x8);
}
MVXMLHttpRequest.prototype.setRequestHeader=function(x10)
{
}
if(typeof(_f588)=='undefined')
_f588=0;
if(typeof(_f572)=='undefined')
_f572=new Array(30);
if(typeof(_f589)=='undefined')
_f589=new Array(30);
if(typeof(_f590)=='undefined')
_f590=null;
function _f65(){}
_f65._f374=document.all?(document.getElementById?2:1):(document.layers?3:0);
_f65._f591=navigator.userAgent.toLowerCase();
_f65._f592=null;
_f65._f593=null;
_f65._f594=new Array(30);
_f65._f312="MVInfoWindowStyle1";
_f65._f595=new Array(30);
_f65._f473=function()
{
return _f590;
}
_f65._f539=function(x0)
{
if(!_f590)
_f590=x0;
}
_f65._f507=function(x1)
{
_f65._f592=_f65._f591.indexOf(x1)+1;
_f65._f593=x1;
return _f65._f592;
}
if(_f65._f507('safari'))
_f65._f66="SF";
else if(_f65._f507('opera'))
_f65._f66="OS";
else if(_f65._f507('msie'))
_f65._f66="IF";
else if(!_f65._f507('compatible'))
{
_f65._f66="NS";
_f65._f596=_f65._f591.substring(8,11);}
else _f65._f66="unknown";
_f65.isIOS=_f65._f591.indexOf("iphone")>0||_f65._f591.indexOf("ipad")>0||_f65._f591.indexOf("ipod")>0;
if(!_f65._f596)
_f65._f596=_f65._f591.substring(_f65._f592+_f65._f593.length,
_f65._f592+_f65._f593.length+3);
_f65._f597=0;
if(_f65._f596)
{
var i=_f65._f596.indexOf(".");
if(i>=0)
_f65._f597=parseInt(_f65._f596.substring(0,i));
else
 _f65._f597=parseInt(_f65._f596);
}
_f65._f64=function()
{
return _f65._f66=="IF"&&_f65._f597<7;
}
_f65._f594["SQ_MM"]=.000001;
_f65._f594["SQ_KILOMETER"]=1000000;
_f65._f594["SQ_CENTIMETER"]=.0001;
_f65._f594["SQ_MILLIMETER"]=.000001;
_f65._f594["SQ_CH"]=404.6856;
_f65._f594["SQ_FT"]=.09290304;
_f65._f594["SQ_IN"]=.00064516;
_f65._f594["SQ_LI"]=.04046856;
_f65._f594["SQ_CHAIN"]=404.6856;
_f65._f594["SQ_FOOT"]=.09290304;
_f65._f594["SQ_INCH"]=.00064516;
_f65._f594["SQ_LINK"]=.04046856;
_f65._f594["SQ_MILE"]=2589988;
_f65._f594["SQ_ROD"]=25.29285;
_f65._f594["SQ_SURVEY_FOOT"]=.09290341;
_f65._f594["SQ_YARD"]=.8361274;
_f65._f594["ACRE"]=4046.856;
_f65._f594["HECTARE"]=10000;
_f65._f594["PERCH"]=25.29285;
_f65._f594["ROOD"]=1011.714;
_f65._f594["M"]=1;
_f65._f594["METER"]=1;
_f65._f594["KM"]=1000;
_f65._f594["KILOMETER"]=1000;
_f65._f594["CM"]=.01;
_f65._f594["CENTIMETER"]=.01;
_f65._f594["MM"]=.001;
_f65._f594["MILLIMETER"]=.001;
_f65._f594["MILE"]=1609.344;
_f65._f594["NAUT_MILE"]=1852;
_f65._f594["SURVEY_FOOT"]=.3048006096012;
_f65._f594["FOOT"]=.3048;
_f65._f594["INCH"]=.0254;
_f65._f594["YARD"]=.9144;
_f65._f594["CHAIN"]=20.1168;
_f65._f594["ROD"]=5.0292;
_f65._f594["LINK"]=.201166195;
_f65._f594["MOD_USFT"]=.304812253;
_f65._f594["CL_FT"]=.304797265;
_f65._f594["IND_FT"]=.304799518;
_f65._f594["LINK_BEN"]=.201167651;
_f65._f594["LINK_SRS"]=.201167651;
_f65._f594["CHN_BEN"]=20.1167825;
_f65._f594["CHN_SRS"]=20.1167651;
_f65._f594["IND_YARD"]=.914398554;
_f65._f594["SRS_YARD"]=.914398415;
_f65._f594["FATHOM"]=1.8288;
_f65._f594["SQ_M"]=1;
_f65._f594["SQ_METER"]=1;
_f65._f594["SQ_KM"]=1000000;
_f65._f594["SQ_CM"]=.0001;
_f65._f476=function(x2)
{
if(x2)
x2=x2.toUpperCase();
else
 return 0;
if(_f65._f594[x2])
return _f65._f594[x2];
else
 return 0;
}
_f65._f598=function(x3,x4)
{
x3=x3.toUpperCase();
_f572[x3]=x4;
if(x4.coordSys.srid)
_f589[x4.coordSys.srid]=x4.coordSys;
}
_f65._f474=function(x5)
{
if(x5&&_f589[x5])
return _f589[x5];
else
 return null;
}
_f65._f600=function(basemap,callBack,_f7)
{
if(basemap._f423==null||basemap._f105==null||MVUtil._f241(basemap._f105)=="")
{
basemap._f105="null";
_f572[basemap._f105]=null;return;
}
basemap._f105=basemap._f105.toUpperCase();
if(_f572[basemap._f105])
{
if(_f572[basemap._f105].transparent)
basemap._f425=true;
if(callBack)
callBack(_f572[basemap._f105]);
return _f572[basemap._f105];
}
var formatStr;
var _f601=basemap._f562;
var requestStr="xml_request="+encodeURIComponent("<?xml version=\"1.0\" standalone=\"yes\"?>"
+"<map_cache_admin_request><get_client_config map_cache_names=\""+basemap._f105
+"\" format=\"JSON\"/></map_cache_admin_request>");
var request=null;
var localDomain=MVUtil.isLocalDomain(basemap._f423);
var xmlHttp=localDomain||MVMapView._f117;
var configLoaded=function()
{
try
{
var resp=xmlHttp?request.responseText:this.responseText;
eval("var result="+resp);
if(result.length==0)
{
MVi18n._f6("MVGlobalVariables.getMapCacheConfig","MAPVIEWER-05501",basemap._f105,_f7);
_f572[basemap._f105]=null;result=null;
return;
}
if(result[0].transparent)
basemap._f425=true;
_f65._f598(basemap._f105,result[0]);
result=null;
}
catch(e)
{
MVi18n._f6("MVGlobalVariables.getMapCacheConfig","MAPVIEWER-05523",
basemap._f105+":"+request.responseText,_f7);
return ;
}
if(callBack)
callBack(_f572[basemap._f105]);
}
try
{
request=MVUtil.getXMLHttpRequest(xmlHttp);
if(!xmlHttp)
request.onreadystatechange=configLoaded;
request.open("POST",MVUtil._f119(_f601),!xmlHttp);
request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
request.send(MVUtil._f120(_f601,requestStr));
}catch(e)
{
MVi18n._f6("MVGlobalVariables.getMapCacheConfig","MAPVIEWER-05511",e,_f7);
return ;
}
if(xmlHttp)
{
if(request.status==200)
{
configLoaded();
}
else
 {
_f572[basemap._f105]=null;MVi18n._f6("MVGlobalVariables.getMapCacheConfig","MAPVIEWER-05511",
basemap._f105+":"+request.responseText,_f7);
}
}
request=null;
}
_f65._f315=180;
_f65._f316=100;
_f65.infoWindowTabsWidth=240;
_f65.infoWindowTabsHeight=130;
_f65._f602=14;
_f65._f603=112;
_f65._f604=14;
_f65._f605=14;
_f65._f606=14;
_f65._f607=14;
_f65._f608=14;
_f65._f609=14;
_f65._f610=14;
_f65._f611=14;
_f65._f390=600;
_f65._f391=600;
_f65._f392=30;
_f65._f393=16;
_f65._f394=600;
_f65._f395=1;
_f65._f396=1;
_f65._f397=600;
_f65._f398=1;
_f65._f399=10;
_f65._f505=true;
_f65._f141="/fsmc/images/";
_f65._f612="/fsmc/images/";
_f65._f323=0;
_f65._f362=null;
_f65._f613="bulls-eye.png";
_f65._f614=38;
_f65._f615=38;
_f65._f369=5;
_f65._f368="-redline-point-marker";
_f65._f371="-redline-line-style";
_f65._f372="-redline-area-style";
_f65._f501=0;
_f65._f616=0;
_f65._f470=2000;
_f65._f554=null;
_f65._f471=null;
_f65._f472=function()
{
if(!_f65._f554)
_f65._f554=document.location.protocol+"//"+document.location.host+"/mapviewer/foi";
return _f65._f554;
}
_f65._f617=function()
{
if(!_f65._f471)
_f65._f471=document.location.protocol+"//"+document.location.host+"/mapviewer";
return _f65._f471;
}
_f65._f618="/mapviewer/proxy";
_f65._f619=null;
_f65._f116=function()
{
if(!_f65._f619)
{
_f65._f619=_f65._f618;
}
return _f65._f619;
}
if(document.getElementsByTagName("html")[0].getAttribute("xmlns")=="http://www.w3.org/1999/xhtml")
_f65._f620=true;
else
 _f65._f620=false;
_f65._f419=function(x6,x7,x8)
{
var x9=_f65._f595[x6];
if(!x9)
x9=_f65._f595[x6]=new Array();
x9[x7]=x8;
}
_f65._f475=function(x10,x11)
{
var x12=_f65._f595[x10];
if(x12)
return x12[x11];
else
 return null;
}
_f65._f621=0;
_f65._f622=false;
_f65.getHost=function(x13)
{
if(!x13||x13.indexOf("/")==0)
{
var x14=window.location.protocol;
if(x14.indexOf("//")<0)
x14+="//";
return x14+window.location.host;
}
else
 {
var x15=x13.substring(0,x13.indexOf("//")+2);
x13=x13.substring(x13.indexOf("//")+2);
return x15+x13.substring(0,x13.indexOf("/"));
}
}
var nodes=document.getElementsByTagName("script");
for(var i=0;i<nodes.length;i++)
{
var node=nodes[i];
if(node.src&&node.src.indexOf("oraclemaps.js")>=0&&node.src.indexOf("/mapviewer/")>=0)
{
_f65._f141=_f65.getHost(node.src)+"/mapviewer/fsmc/images/";
break;
}
}
_f65.touchSupported=false;
var agent=_f65._f591;
if(agent.indexOf('iphone')>=0||agent.indexOf('ipad')>=0)
{
_f65.touchSupported=true;
}
_f65._f623=16;
_f65._f624=16;
_f65._f625=false;
if(agent.indexOf('iphone')>=0||agent.indexOf('ipod')>=0)
{
_f65._f602=30;
_f65._f603=200;
_f65._f604=30;
_f65._f605=30;
_f65._f606=30;
_f65._f607=30;
_f65._f608=30;
_f65._f609=30;
_f65._f610=30;
_f65._f611=30;
_f65._f623=26;
_f65._f624=26;
_f65._f625=true;
}
else if(agent.indexOf('ipad')>=0)
{
_f65._f602=20;
_f65._f603=160;
_f65._f604=20;
_f65._f605=20;
_f65._f606=20;
_f65._f607=20;
_f65._f608=20;
_f65._f609=20;
_f65._f610=20;
_f65._f611=20;
_f65._f623=20;
_f65._f624=20;
}
_f65._f180=800
function MVUtil(){}
MVUtil._f309=function(x0,x1,x2,x3,x4,x5,x6,x7,x8)
{
var x9=(x7-x1)*x5/(x3-x1)-x0._f139;
var x10=(x4-x8)*x6/(x4-x2)-x0._f140;
var x11=MVSdoGeometry.createPoint(x9,x10);
return x11.sdo_point;
}
MVUtil._f164=function(x12,x13,x14,x15,x16,x17,x18,x19,x20)
{
var x21=(x19-x13)*x17/(x15-x13)-x12._f139;
var x22=(x16-x20)*x18/(x16-x14)-x12._f140;
return [x21,x22];
}
MVUtil.getNumber=function(x23)
{
x23=x23+"";
if(x23.indexOf("px")>0)
x23=x23.substring(0,x23.length-2);
return parseInt(""+x23);
}
MVUtil._f80=function(x24)
{
var x25=x24.style.left;
if(x25.indexOf("px")>0)
x25=x25.substring(0,x25.length-2);
return parseInt(""+x25);
}
MVUtil._f81=function(x26)
{
var x27=x26.style.top;
if(x27.indexOf("px")>0)
x27=x27.substring(0,x27.length-2);
return parseInt(""+x27);
}
MVUtil.getZIndex=function(x28)
{
var x29=x28.style.zIndex;
if(!x29)
return 0;
return parseInt(""+x29);
}
MVUtil._f70=function(x30,x31,x32)
{
if(_f65._f374==2)
{
x30.style.pixelLeft=x31;
x30.style.pixelTop=x32;
}
else
 {
x30.style.left=MVUtil._f26(x31);
x30.style.top=MVUtil._f26(x32);
}
}
MVUtil._f705=function(x33,x34,x35,x36,x37,x38,x39)
{
x33.style.left=MVUtil._f26(x34);
x33.style.top=MVUtil._f26(x35);
x33.style.width=MVUtil._f26(x36);
x33.style.height=MVUtil._f26(x37);
if(x38)
x33.style.zIndex=x38;
if(x39)
x33.style.fontSize=MVUtil._f26(x39);
}
MVUtil._f662=function(x40)
{
x40.style.position="absolute";
x40.unselectable="on";
x40.onselectstart=MVUtil._f720;
x40.style.fontFamily="Arial, sans serif";
x40.style.MozUserSelect="none";
x40.align="left";
}
MVUtil._f720=function()
{
return false;
}
MVUtil._f162=function(x41,x42)
{
try
{
if(x42.indexOf(".")>-1)
{
x42="url(\""+x42+"\"),auto";
}
x41.style.cursor=x42;
}
catch(_exception)
{
if(x42=="pointer")
{
MVUtil._f162(x41,"hand");
}
}
}
MVUtil._f515=function(x43)
{
var x44={"x":0,"y":0};
var x45=x43;
while(x43)
{
x44.x+=x43.offsetLeft;
x44.y+=x43.offsetTop;
x43=x43.offsetParent;
}
x43=x45;
while(x43&&x43.tagName!="BODY")
{
x44.x-=x43.scrollLeft;
x44.y-=x43.scrollTop;
x43=x43.parentNode;
}
return x44;
}
function _f301(x0,x1,x2,x3,x4,x5,x6)
{
var x7=null;
if(x6&&_f65._f64())
{
x7=document.createElement("div");
x7.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x0+"', sizingMethod='scale');";
}
else
 {
x7=document.createElement("img");
x7.src=x0;
}
if(x1&&x2)
{
x7.style.width=MVUtil._f26(x1);
x7.style.height=MVUtil._f26(x2);
x7.width=x1;
x7.height=x2;
}
if(x4||(x3||(x4==0||x3==0)))
{
x7.style.position="absolute";
x7.style.left=MVUtil._f26(x3);
x7.style.top=MVUtil._f26(x4);
}
if(x5||x5==0)
{
x7.style.zIndex=x5;
}
if(_f65._f66=="IF"){
x7.unselectable="on";
x7.onselectstart=MVUtil._f720;}
else{
x7.style.MozUserSelect="none";
}
if(_f65._f66=="IF")
{
x7.galleryImg="no"}
x7.style.border="0";
x7.style.padding="0";
x7.style.margin="0";
x7.oncontextmenu=MVUtil._f720;
return x7;
}
MVUtil._f721=function(x46,x47)
{
if(x47)
{
var x48=null;
if(x47.type!=undefined)
x48=x46._f234(x47);
else
 x48=x47;
var x49=MVSdoGeometry.createPoint(x48.left,x48.top);
return x49.sdo_point;
}
else
 {
var x48=x46._f234(window.event);
var x49=MVSdoGeometry.createPoint(x48.left,x48.top);
return x49.sdo_point;
}
}
MVUtil.getMouseLocation=function(x50,x51)
{
var x52=MVUtil._f721(x50,x51);
var x53=x52.x-x50._f106()/2;
var x54=x53/x50._f72+x50._f90;
x53=x52.y-x50._f107()/2;
var x55=((-1.0)*x53)/x50._f74+x50._f91;
var x56=MVSdoGeometry.createPoint(x54,x55);
return x56;
}
MVUtil._f181=function(x57)
{
x57=(x57)?x57:((window.event)?event:null);
var x58=0;
var x59=0;
if(x57.touches)
{
var x60=null;
if(x57.touches.length==0)
{
if(x57.changedTouches&&x57.changedTouches.length>0)
x60=x57.changedTouches[0];
else
 return null;
}
else
 x60=x57.touches[0];
x58=x60.pageX;
x59=x60.pageY;
}
if(x57.pageX)
{
x58=x57.pageX;
x59=x57.pageY;
}
else if(x57.clientX)
{
x58=x57.clientX+document.body.scrollLeft-document.body.clientLeft;
x59=x57.clientY+document.body.scrollTop-document.body.clientTop;
if(document.body.parentElement&&(document.body.parentElement.clientLeft
||document.body.parentElement.clientTop))
{
var x61=document.body.parentElement;
x58+=x61.scrollLeft-x61.clientLeft;
x59+=x61.scrollTop-x61.clientTop;
}
}
return MVSdoGeometry.createPoint(x58,x59).sdo_point;
}
MVUtil.keepInCSBoundary=function(x62,x63)
{
var x64=x62.msi._f165-x62.msi._f166;
while(x63<x62.msi._f166)
{
x63=x63+x64;
}
while(x63>x62.msi._f165)
{
x63-=x64;
}
return x63;
}
MVUtil.keepOrdinatesInCSBoundary=function(x65,x66)
{
var x67=new Array();
for(var x68=0;x68<x66.length;)
{
x67.push(MVUtil.keepInCSBoundary(x65,parseFloat(x66[x68++])));
x67.push(x66[x68++]);
}
return x67;
}
MVUtil._f722=0;
MVUtil._f723=function(x69)
{
var x70=document.createElement("div");
x70.style.zIndex=1000;
x70.style.width=200;
x70.style.backgroundColor="#ffffff";
x70.style.position="absolute";
x70.style.left=0;
x70.style.top=((MVUtil._f722++)*20)%550;
x70.innerHTML=x69;
document.body.appendChild(x70);
}
MVUtil.getXMLHttpRequest=function(x71)
{
if(!x71)
return new MVXMLHttpRequest();
else
 {
if(window.ActiveXObject)
{
var x72=null;
try
{
x72=new ActiveXObject("Microsoft.XMLHTTP");
}
catch(e)
{
x72=new ActiveXObject("Msxml2.XMLHTTP");
}
return x72;
}
else
 return new XMLHttpRequest();
}
}
MVUtil._f175=function(x73)
{
if(x73)
{
if(_f65._f66=="IF")
x73.cancelBubble=true;
else if(x73.stopPropagation)
x73.stopPropagation();
if(x73.preventDefault)
x73.preventDefault();
else
 x73.returnValue=false;
}
}
MVUtil._f26=function(x74)
{
return Math.round(x74)+"px";
}
MVUtil._f724=function(x75,x76)
{
var x77=0;
var x78=-1;
while((x78=x75.indexOf(x76,x78+1))!=-1)
{
x77++;
}
return x77;
}
MVUtil._f725=function(x79)
{
var x80=x79.indexOf('<');
if(x80==-1)
return "";
var x81=x79.indexOf(' ',x80+1);
if(x81==-1)
return "";
return '</'+MVUtil._f241(x79.substring(x80+1,x81))+'>';
}
MVUtil._f241=function(x82)
{
return x82.replace(/(^[\s]*)|([\s]*$)/g,"");
}
MVUtil._f153=function(x83,x84)
{
return x83.substring(0,x84.length)==x84;
}
MVUtil._f5=function(x85,x86)
{
return x85.substring(x85.length-x86.length,x85.length)==x86;
}
MVUtil._f726=function(x87,x88)
{
return x88+x87+MVUtil._f725(x88);
}
MVUtil._f43=function(x89,x90,x91)
{
if(!x89)
return x89;
var x92;
x92=x89.indexOf(x90);
if(x92>-1)
{
var x93=x89.substring(0,x92);
var x94=x89.substring(x92+x90.length,x89.length);
x89=x93+x91+MVUtil._f43(x94,x90,x91);
}
return x89;
}
MVUtil._f39=function(x95)
{
if(x95.indexOf(".")>=0)
return x95.substring(0,x95.indexOf("."));
else
 return x95;
}
MVUtil._f38=function(x96)
{
if(x96.indexOf(".")>=0)
return x96.substring(x96.indexOf(".")+1,x96.length);
else
 return x96;
}
MVUtil.objArray=new Array();
MVUtil._f200=new Array();
MVUtil._f727=new Array();
MVUtil._f161=function(x97)
{
if(_f65._f66!="IF")
return;
var x98=MVUtil._f200.length;
if(x97._f728)
{
x98=(x97._f728);
}
else
 x97._f728=-1;
if((x97._f728)==-1&&(MVUtil._f727.length)>0)
x98=MVUtil._f727.pop();
x97._f728=x98;
MVUtil._f200[x98]=x97;
}
MVUtil.MVUnload=function()
{
if(typeof(MVUtil._f200)!="undefined"&&(MVUtil._f200!=null))
{
for(var x99=0;MVUtil._f200&&x99<MVUtil._f200.length;x99++)
{
if(MVUtil._f200[x99])
{
MVUtil._f201(MVUtil._f200[x99]);
MVUtil._f200[x99]=null;
}
}
}
while(MVUtil.objArray.length>0)
{
var x100=MVUtil.objArray.pop();
x100._f170();
}
}
window.onunload=function()
{
MVUtil.MVUnload();
}
MVUtil._f103=function(x101,x102)
{
if(_f65._f66!="IF")
{
return function()
{
return x102.apply(x101,arguments);
}
}
if(!(MVUtil._f729))
{
MVUtil._f729=new Array();
MVUtil._f730=new Array();
MVUtil._f731=new Array();
}
if(!(MVUtil._f732))
{
MVUtil._f732=new Array();
MVUtil._f733=new Array();
MVUtil._f734=new Array();
}
try
{
var x103=(MVUtil._f729.length);
if(x101._f728)
{
x103=(x101._f728);
}
else
 x101._f728=-1;
if((x101._f728)==-1&&(MVUtil._f731.length)>0)
x103=MVUtil._f731.pop();
MVUtil._f729[x103]=x101;
MVUtil._f729[x103]._f728=x103;
if(!(MVUtil._f730[x103]))
MVUtil._f730[x103]=new Array();
var x104=(MVUtil._f730[x103].length);
MVUtil._f730[x103][x104]=x102;
x101=null;
x102=null;
return function()
{
return MVUtil._f730[x103][x104].apply(MVUtil._f729[x103],arguments);
}
}
catch(e)
{
var x103=(MVUtil._f732.length);
if((MVUtil._f734.length)>0)
x103=MVUtil._f734.pop();
MVUtil._f732[x103]=x101;
MVUtil._f733[x103]=x102;
x101=null;
x102=null;
return function()
{
return MVUtil._f733[x103].apply(MVUtil._f732[x103],arguments);
}
}
}
MVUtil._f322=function(x105)
{
if(_f65._f66=="IF")
{
if(x105._f728)
{
var x106=(x105._f728);
for(var x107=(MVUtil._f730[x106].length);x107>0;--x107)
{
MVUtil._f730[x106][x107-1]=null;
MVUtil._f730[x106].pop();
}
MVUtil._f730[x106]=null;
x105._f728=null;
x105=null;
MVUtil._f729[x106]=null;
MVUtil._f731.push(x106);
}
}
}
MVUtil.gc=function()
{
if(_f65._f66=="IF"&&MVUtil._f732)
{
var x108=0;
if(MVUtil._f735)
x108=(MVUtil._f735);
if((MVUtil._f732.length)<x108)
return;
for(var x109=0;x109<(MVUtil._f732.length);++x109)
{
if((MVUtil._f732[x109])&&(MVUtil._f732[x109].readyState)&&(MVUtil._f732[x109].readyState)==4)
{
MVUtil._f732[x109]=null;
MVUtil._f733[x109]=null;
MVUtil._f734.push(x109);
}
}
}
}
MVUtil._f736=function(x110,x111)
{
if(_f65._f66!="IF")
return;
if(x110=="time")
{
if(MVUtil._f737)
{
clearInterval(MVUtil._f737);
MVUtil._f737=setInterval(MVUtil.gc,x111);
}
else
 MVUtil._f737=setInterval(MVUtil.gc,x111);
}
if(x110=="totalNum")
{
MVUtil._f735=x111;
}
}
MVUtil._f286=function(x112)
{
if(x112!=null)
{
delete x112;
}
}
MVUtil._f145=function(x113)
{
if(_f65._f66=="NS")
{
x113.style.MozUserSelect="none";
}
else if(_f65._f66=="SF")
{
x113.style.KhtmlUserSelect="none";
}
else if(_f65._f66=="IF")
{
x113.unselectable="on";
}
else
 {
return false;
}
return true;
}
MVUtil._f738=function(x114)
{
if(_f65._f66=="NS")
{
x114.style.MozUserSelect="";
}
else if(_f65._f66=="SF")
{
x114.style.KhtmlUserSelect="";
}
else if(_f65._f66=="IF")
{
x114.unselectable="off";
}
else
 {
return false;
}
return true;
}
MVUtil._f739=function(x115)
{
if(!x115)
return null;
var x116=x115.indexOf("://");
if(x116>0)
{
x116+=3;
var x117=x115.indexOf("/",x116);
if(x117>0)
return x115.substring(x116,x117);
else
 return x115.substring(x116);
}
else
 return null;
}
MVUtil._f129=function(x118,x119)
{
if(!x118)
return ;
var x120=x118.childNodes;
if(x120!=null)
{
while(x120.length>0)
{
MVUtil._f201(x120[0],x119);
x118.removeChild(x120[0]);
}
}
}
MVUtil._f201=function(x121,x122)
{
if(!x121)
return ;
var x123=x121.childNodes;
if(x123!=null)
{
while(x123.length>0)
{
MVUtil._f201(x123[0],x122);
x121.removeChild(x123[0]);
}
}
MVUtil._f693(x121,x122);
}
MVUtil._f693=function(x124,x125)
{
if(!x124)
return ;
try
{
if(x124.onload)
x124.onload=null;
if(x124.onmouseover)
x124.onmouseover=null;
if(x124.onmouseout)
x124.onmouseout=null;
if(x124.onmousedown)
x124.onmousedown=null;
if(x124.onmouseup)
x124.onmouseup=null;
if(x124.oncontextmenu)
x124.oncontextmenu=null;
if(x124.ondblclick)
x124.ondblclick=null;
if(x124.onclick)
x124.onclick=null;
if(x124.onkeyup)
x124.onkeyup=null;
if(x124.onkeydown)
x124.onkeydown=null;
if(x124.onkeypressed)
x124.onkeypressed=null;
if(_f65._f66=="IF")
{
if(x124.style&&x124.style.filter)
x124.style.filter=null;
if(x124._f728)
{
MVUtil._f727.push(x124._f728)
MVUtil._f200[x124._f728]=null;
}
}
}catch(error)
{
MVi18n._f6("MVUtil.clearListeners","MAPVIEWER-05500",x124.nodeName+","+x124.nodeType+"\n"+error,x125);
}
}
MVUtil._f87=MVUtil._f201;
MVUtil._f740=function(x126)
{
var x127=document.createElement("table");
var x128=document.createElement("tr");
var x129=document.createElement("td");
x129.innerHTML=x126;
x128.appendChild(x129);
x127.appendChild(x128);
return x127;
}
MVUtil.getEvent=function(x130)
{
return x130?x130:((window.event)?event:null);
}
MVUtil.isIE7=function()
{
if(navigator.userAgent&&navigator.userAgent.indexOf("MSIE 7")>=0)
return true;
else
 return false;
}
MVUtil.getNumber=function(x131)
{
var x132=0;
if(typeof(x131)=="string")
{
if(x131.indexOf("px")>0)
x131=x131.substring(0,x131.length-2);
if(x131.indexOf(".")>0)
x132=parseFloat(x131);
else
 x132=parseInt(x131);
if(isNaN(x132))
x132=0;
return x132;
}
else if(typeof(x131)=="number")
x132=x131;
return x132;
}
MVUtil.trapEvent=function(x133)
{
x133=(x133)?x133:((window.event)?event:null);
if(_f65._f66=="IF")
x133.cancelBubble=true;
else if(x133.stopPropagation)
x133.stopPropagation();
}
MVUtil._f172=function(x134,x135,x136)
{
var x137=(_f65._f64()&&x135)?
document.createElement('div'):document.createElement('img');
if(_f65._f64()&&x135)
{
var x138=x136?"scale":"image"
if(x134)
x137.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x134+"', sizingMethod='"+x138+"');";
}
else
 {
x137.src=x134;
}
if(_f65._f66=="IF"&&!x135)
{
x137.galleryImg="no"}
return x137;
}
if(!_f65.touchSupported)
{
MVUtil.attachEvent=function(x139,x140,x141,x142)
{
if(!x142)
x142=false;
if(_f65._f66=="IF")
{
x140="on"+x140;
x139.attachEvent(x140,x141);
}
else
 {
x139.addEventListener(x140,x141,!x142);
}
};
MVUtil.detachEvent=function(x143,x144,x145,x146)
{
if(!x146)
x146=false;
if(_f65._f66=="IF")
{
x144="on"+x144;
x143.detachEvent(x144,x145);
}
else
 {
x143.removeEventListener(x144,x145,!x146);
}
}
MVUtil.setListener=function(x147,x148,x149)
{
x148="on"+x148;
x147[x148]=x149;
};
MVUtil.getListener=function(x150,x151)
{
x151="on"+x151;
return x150[x151];
};
}
else
{
MVUtil.attachEvtLsnr=function(x152,x153,x154,x155)
{
if(!x155)
x155=false;
if(_f65._f66=="IF")
{
x153="on"+x153;
x152.attachEvent(x153,x154);
}
else
 {
x152.addEventListener(x153,x154,!x155);
}
}
MVUtil.detachEvtLsnr=function(x156,x157,x158,x159)
{
if(!x159)
x159=false;
if(_f65._f66=="IF")
{
x157="on"+x157;
x156.detachEvent(x157,x158);
}
else
 {
x156.removeEventListener(x157,x158,!x159);
}
}
MVUtil.attachEvent=function(x160,x161,x162,x163)
{
if(!x163)
x163=false;
if(x161=="mousedown")
{
MVUtil.attachEvtLsnr(x160,x161,x162,x163);
x161="touchstart";
}
else if(x161=="mouseup")
{
MVUtil.attachEvtLsnr(x160,x161,x162,x163);
x161="touchend";
}
else if(x161=="mousemove")
{
MVUtil.attachEvtLsnr(x160,x161,x162,x163);
x161="touchmove";
}
if(x161=="click")
{
MVUtil.attachEvtLsnr(x160,x161,x162,x163);
x162.MV_TOUCHSTART=function(x164)
{
x164.preventDefault()
x164=MVUtil.getEvent(x164);
x160.touchLoc=MVUtil._f181(x164);
};
MVUtil.attachEvtLsnr(x160,"touchstart",x162.MV_TOUCHSTART,true);
x162.MV_TOUCHEND=function(x165)
{
x165=MVUtil.getEvent(x165);
if(x160.touchLoc)
{
x165.preventDefault()
var x166=MVUtil._f181(x165);
if(Math.abs(x166.x-x160.touchLoc.x)<=2&&
Math.abs(x166.y-x160.touchLoc.y)<=2)
{
x162(x165);
}
x160.touchLoc=null;
}
}
MVUtil.attachEvtLsnr(x160,"touchend",x162.MV_TOUCHEND,true);
}
else
 MVUtil.attachEvtLsnr(x160,x161,x162,x163);
};
MVUtil.detachEvent=function(x167,x168,x169,x170)
{
if(!x170)
x170=false;
if(x168=="mousedown")
{
MVUtil.detachEvtLsnr(x167,x168,x169,x170);
x168="touchstart";
}
else if(x168=="mouseup")
{
MVUtil.detachEvtLsnr(x167,x168,x169,x170);
x168="touchend";
}
else if(x168=="mousemove")
{
MVUtil.detachEvtLsnr(x167,x168,x169,x170);
x168="touchmove";
}
if(x168=="click")
{
MVUtil.detachEvtLsnr(x167,x168,x169,x170);
if(x169.MV_TOUCHSTART)
MVUtil.detachEvtLsnr(x167,"touchstart",x169.MV_TOUCHSTART,x170);
if(x169.MV_TOUCHSTART)
MVUtil.detachEvtLsnr(x167,"touchend",x169.MV_TOUCHEND,x170);
}
else
 MVUtil.detachEvtLsnr(x167,x168,x169,x170);
};
MVUtil.setListener=function(x171,x172,x173)
{
if(x172=="mousedown")
x172="touchstart";
else if(x172=="mouseup")
x172="touchend";
else if(x172=="mousemove")
x172="touchmove";
x172="on"+x172;
x171[x172]=x173;
};
MVUtil.getListener=function(x174,x175)
{
if(x175=="mousedown")
x175="touchstart";
else if(x175=="mouseup")
x175="touchend";
else if(x175=="mousemove")
x175="touchmove";
x175="on"+x175;
return x174[x175];
};
}
MVUtil.mouseLeftKeyPressed=function(x176)
{
if(x176.touches)
return true;
else if(_f65._f66=="IF")
return x176.button==1;
else
 return x176.which==1;
}
MVUtil.mouseRightKeyPressed=function(x177)
{
if(_f65._f66=="IF")
return x177.button==2;
else
 return x177.which==3;
}
MVUtil.formatNum=function(x178)
{
if(x178==null||x178=="undefine")
return;
if(Math.abs(x178)>=1000)
x178=Math.round(x178);
else if(Math.abs(x178)>=100)
x178=Math.round(x178*10)/10.0;
else if(Math.abs(x178)>=10)
x178=Math.round(x178*100)/100.0;
else if(Math.abs(x178)>=1)
x178=Math.round(x178*1000)/1000.0;
else if(Math.abs(x178)>=0.1)
x178=Math.round(x178*10000)/10000.0;
else if(Math.abs(x178)>=0.01)
x178=Math.round(x178*100000)/100000.0;
else if(Math.abs(x178)>=0.001)
x178=Math.round(x178*1000000)/1000000.0;
else
 x178=Math.round(x178*10000000)/10000000.0;
var x179=MVMessages["number_format"].charAt(1);
var x180=MVMessages["number_format"].charAt(5);
x178=new String(x178);
if(x178.indexOf(".00")>0)
{
x178=x178.substring(0,x178.indexOf(".00"));
}
var x181,x182,x183;
if(x178.indexOf(".")>0)
{
x181=x178.split(".");
x182=x181[0];
x183=x181[1];
}
else
 {x182=x178;
x183=null;
}
var x184=x182.length-1-3-3;
var x185;
if(x182.length<=3)
x185=x182;
else{
x185=x179.concat(x182.slice(-3));
while(x184>-1)
{
var x186=x182.substr(x184+1,3);
x185=x179.concat(x186,x185);
x184=x184-3;
}
if(x182.length%3!=0)
x185=x182.substr(0,(x182.length%3)).concat(x185);
else
 x185=x182.substr(0,3).concat(x185);
}
if(x183!=null)
{
var x187=3;
var x188;
if(x183.length<=3)
x188=x183;
else{
x188=x183.slice(0,3);
while(x187<=x183.length-1-3)
{
var x186=x183.substr(x187,3);
x188=x188.concat(x179,x186);
x187=x187+3;
}
if(x183.length%3!=0)
x188=x188.concat(x179,x183.slice(-x183.length%3));
else
 x188=x188.concat(x179,x183.slice(-3));
}
}
if(x183==null)
return x185;
else
 return x185.concat(x180,x188);
}
MVUtil.getEventSource=function(x189)
{
if(_f65._f66=="IF")
{
return x189.srcElement;
}
else
 {
return x189.target;
}
}
MVUtil.unique_array=function(x190)
{
var x191=x190;
var x192;
for(var x193=0;x193<x190.length;x193++)
{
for(var x194=0;x194<x190.length;x194++)
{
x192=x190[x193];
if((x193+x194+1)<x190.length&&x192==x190[x193+x194+1])x191.splice(x193+x194+1,1);}
}
return x191;
}
MVUtil.runListeners=function(x195,x196,x197)
{
if(x195)
{
var x198=x195[x196];
if(x198!=null)
{
for(var x199=0;x199<x198.length;x199++)
{
if(x197!=undefined)
(x198[x199]).apply(x198[x199],x197);
else
 (x198[x199]).apply(x198[x199]);
}
}
}
}
MVUtil.detachEventListener=function(x200,x201,x202)
{
var x203=x200[x201];
if(x203)
{
for(var x204=0;x204<x203.length;x204++)
{
if(x202==x203[x204])
{
x203.splice(x204,1);
}
}
if(x203.length==0)
x200[x201]=null;
}
}
MVUtil.attachEventListener=function(x205,x206,x207)
{
x205[x206]?
x205[x206].push(x207):x205[x206]=[x207];
x205[x206]=MVUtil.unique_array(x205[x206]);
}
MVUtil.getMVIndFOIsControlAndFOI=function(x208)
{
var x209=x208.ifctl;
while(!x209&&x208.parentNode){x208=x208.parentNode;
x209=x208.ifctl;
}
var x210;
if(x209&&x208.groupid>=0)
{
var x211=x209.parent.getFOIGroup(x208.groupid);
x210=x211._f278(x208.orgid?x208.orgid:x208.id);
}
else if(x208.parentNode&&x209)
x210=x209._f279(x208.orgid?x208.orgid:x208.id);
if(x210&&x210.origFOI)
x210=x210.origFOI;
return {ifctl:x209,foi:x210};
}
MVUtil.transOrdinatesOnWarpAroungMap=function(x212,x213)
{
var x214=x212.msi._f165-x212.msi._f166;
var x215=x214/2;
var x216=x212.msi._f166+x215;
var x217=new Array();
if(x213.length<4)
return x213;
var x218=x213[0];
var x219;
x217.push(x218);
x217.push(x213[1]);
for(var x220=2;x220<x213.length;x220++)
{
x219=x213[x220];
if(Math.abs(x219-x218)>x215)
{
if((x219-x218)<0)
x219+=x214;
else
 x219-=x214;
}
x218=x219;
x217.push(x219);
x217.push(x213[++x220]);
}
return x217;
}
MVUtil.transLongitudeOnWarpAroungMap=function(x221,x222,x223)
{
var x224=x221.msi._f165-x221.msi._f166;
var x225=x224/2;
var x226=x221.msi._f166+x225;
while(Math.abs(x223-x222)>x225)
{
if((x223-x222)<0)
{
x223+=x224;
}
else
 {
x223-=x224;
}
}
return x223;
}
MVUtil.crossDateLine=function(x227,x228)
{
var x229=x227.msi._f165-x227.msi._f166;
var x230=x229/2;
var x231=x227.msi._f166+x230;
if(x228.length<4)
return false;
var x232=x228[0];
var x233;
for(var x234=2;x234<x228.length;x234+=2)
{
x233=x228[x234];
if(Math.abs(x233-x232)>x230)
{
return true
}
else if(x232>x227.msi._f166&&x232<x227.msi._f165
&&(x233>x227.msi._f165||x233<x227.msi._f166)){
return true;
}
x232=x233;
}
return false;
}
MVUtil.duplicateCrossDateLineOrds=function(x235,x236,x237)
{
var x238=x235.msi._f165-x235.msi._f166;
var x239=x238/2;
var x240=x235.msi._f166+x239;
var x241=new Array();
var x242=false;
if(x237[0]<x235.msi._f165&&x237[2]>x235.msi._f165)
x242=true;
for(var x243=0;x243<x236.length;x243++)
{
x=x236[x243];
if(x242)
x241.push(parseFloat(x)-x238);
else
 x241.push(parseFloat(x)+x238);
x241.push(x236[++x243]);
}
return x241;
}
MVUtil.cloneObject=function(x244)
{
var x245={};
for(property in x244)x245[property]=x244[property];
return x245;
}
MVUtil.calAreaCodeFromCenter=function(x246,x247)
{
var x248=null;
if(x246.wraparound)
{
var x249=x246.msi._f165-x246.msi._f166;
var x250=x246._f260.centerArea;
var x251=x246._f260.maparea[x250].n;
var x252=MVUtil.keepInCSBoundary(x246,x246._f236())+x249*x251;
var x253=x246.msi._f166+x249*x251;
var x254=x246.msi._f165+x249*x251;
var x255=x247-x252;
var x256=0;
while(Math.abs(x255)>x249/2)
{
if(x255<0)
{
x247=x247+x249;
x256--;
}
else
 {
x247=x247-x249;
x256++;
}
x255=x247-x252;
}
if(x247<x253)
x248=x250-1+x256;
else if(x247>x254)
x248=x250+1+x256;
else
 x248=x250+x256;
}
return x248;
}
MVUtil.isNumber=function(x257)
{
if(x257!=null&&typeof x257=="number")
return true;
else
 return false;
}
MVUtil.isNumberArray=function(x258)
{
if(!x258)
return true;
if(typeof x258=="object")
if(x258.length==0||MVUtil.isNumber(x258[0]))
return true;
return false;
}
MVUtil.getImageSize=function(x259,x260)
{
var x261=new Image();
x261.src=x259
x261.onload=function(){
var x262=this.width;
var x263=this.height;
x261.onload=null;
x261=null;
x260(x262,x263);
}
}
MVUtil.canBeCombined=function(x264,x265)
{
if(x264._f564||x265._f564)
return false;
if(x264.getType()!="MVMapTileLayer"||x265.getType()!="MVMapTileLayer"||
!x264.layerControl||!x265.layerControl||
!(x264.layerControl instanceof _f420)||
!(x265.layerControl instanceof _f420))
return false;
if(x264._f423!=x265._f423)
return false;
var x266=x264.config;
var x267=x265.config;
if(x266.clientTileAccess||x267.clientTileAccess)
return false;
if(x266.dataSource!=x266.dataSource)
return false;
if(x266.format!="PNG"||x267.format!="PNG")
return false;
if(x264.opacity!=x265.opacity)
return false;
if(x266.coordSys.srid!=x267.coordSys.srid||
x266.coordSys.minX!=x267.coordSys.minX||
x266.coordSys.minY!=x267.coordSys.minY)
return false;
if(x266.zoomLevels.length!=x266.zoomLevels.length)
return false;
for(var x268=0;x268<x266.zoomLevels.length;x268++)
{
if(x266.zoomLevels[x268].tileWidth!=x267.zoomLevels[x268].tileWidth||
x266.zoomLevels[x268].tileHeight!=x267.zoomLevels[x268].tileHeight||
x266.zoomLevels[x268].tileImageWidth!=x267.zoomLevels[x268].tileImageWidth||
x266.zoomLevels[x268].tileImageHeight!=x267.zoomLevels[x268].tileImageHeight)
return false;
}
return true;
}
MVUtil.getImageURL=function(x269)
{
if(x269.indexOf("/")==0||x269.indexOf("http://")==0||
x269.indexOf("https://")==0||x269.indexOf("../")==0||
x269.indexOf("./")==0)
return x269;
else
 return _f65._f141+x269;
}
MVUtil.isLocalDomain=function(x270)
{
x270=MVUtil._f241(x270);
if(x270.toLowerCase().indexOf("http://")==0||x270.toLowerCase().indexOf("https://")==0)
{
var x271=_f65._f617();
return (MVUtil._f739(x271)==MVUtil._f739(x270));
}
else
 return true;
}
MVUtil.getRealOrdinates=function(x272,x273,x274)
{
var x275=x272.msi._f165-x272.msi._f166;
var x276=0
while(x273<x272.msi._f166)
{
x276++;
x273+=x275;
}
while(x273>x272.msi._f165)
{
x276--;
x273-=x275;
}
return x274-x276*x275;
}
MVUtil.checkRealSize=function(x277,x278)
{
var x279=x278.style.visibility;
x278.style.visibility="hidden";
x277._f307.appendChild(x278);
var x280=MVUtil.getRealSize(x278)
x277._f307.removeChild(x278);
x278.style.visibility=x279;
return x280;
}
MVUtil.getRealSize=function(x281)
{
var x282=x281.offsetWidth;
var x283=x281.offsetHeight;
for(var x284=0;x284<x281.childNodes.length;x284++)
{
x282=Math.max(x282,x281.childNodes[x284].offsetWidth);
x283=Math.max(x283,x281.childNodes[x284].offsetHeight);
}
return {width:x282,height:x283};
}
MVUtil._f119=function(x285)
{
if(MVUtil.isLocalDomain(x285)||!MVMapView._f117)
return x285;
else
 return _f65._f116();
}
MVUtil._f120=function(x286,x287)
{
if(MVUtil.isLocalDomain(x286)||!MVMapView._f117)
return x287;
else
 return "rtarget="+x286+"&"+x287;
}
MVUtil.getAbsoluteURL=function(x288)
{
x288=MVUtil._f241(x288);
if(x288.toLowerCase().indexOf("http://")==0||x288.toLowerCase().indexOf("https://")==0)
return x288;
else
 {
if(x288.charAt(0)=='/')
return document.location.protocol+"//"+document.location.host+x288;
else
 {
var x289=document.location+"";
var x290=x289.lastIndexOf("/");
return x289.substring(0,x290)+"/"+x288;
}
}
}
MVUtil.loadScriptByUrl=function(x291)
{
var x292=document.createElement("script");
x292.setAttribute("type","text/javascript");
x292.src=x291;
document.body.appendChild(x292);
}
MVUtil.isTouchEvent=function(x293)
{
if(_f65.touchSupported)
return true;
else
 return false;
}
function _f375()
{
}
_f375._f376=6372795;
_f375._f377=function(x0,x1,x2)
{
var x0=_f375._f378(x0);
var x3=x0.x;
var x4=x0.y;
var x5=x1/_f375._f376;
var x6=Math.asin(Math.sin(x4)*Math.cos(x5)+Math.cos(x4)*Math.sin(x5)*Math.cos(x2));
var x7=x3+Math.atan2(Math.sin(x2)*Math.sin(x5)*Math.cos(x4),Math.cos(x5)-Math.sin(x4)*Math.sin(x6));
return _f375._f379(new MVSdoPointType(x7,x6,0));
}
_f375._f378=function(x8)
{
var x9=x8.x;
var x10=x8.y;
while(x9<-180)x9+=360;
while(x9>180)x9-=360;
x9=x9*Math.PI/180;
x10=x10*Math.PI/180;
return new MVSdoPointType(x9,x10,0);
}
_f375._f379=function(x11)
{
var x12=x11.x;
var x13=x11.y;
x13=x13*180/Math.PI;
x12=x12*180/Math.PI;
return new MVSdoPointType(x12,x13,0);
}
_f375._f380=function(x14,x15)
{
x14=_f375._f378(x14);
x15=_f375._f378(x15);
var x16=x15.x-x14.x;
var x17=x15.y-x14.y;
var x18=Math.sin(x17/2);
var x19=Math.sin(x16/2);
var x20=x18*x18+Math.cos(x14.y)*Math.cos(x15.y)*x19*x19;
var x21=2*Math.atan2(Math.sqrt(x20),Math.sqrt(1-x20));
return x21*_f375._f376;
}
_f375._f381=function(x22)
{
var x23=0;
for(i=0;i<x22.length-2;i+=2)
{
x23+=_f375._f380(new MVSdoPointType(x22[i],x22[i+1]),new MVSdoPointType(x22[i+2],x22[i+3]));
}
return x23;
}
_f375.getSphericalArea=function(x24)
{
var x25=q.length/2;
var x26,x27,x28;
var x29;
var x30,x31,x32;
var x33;
var x34;
var x35=0.;
var x36;
var x37=0.;
for(x31=0,x30=x25-1,x32=1,dP=q+2;x31<x25;++x31,++x30,++x32,dP+=3)
{
x30%=x25;
x32%=x25;
var x38=MVGeoUtil.get3DVector(q[2*x31],q[2*x31+1]);
var x39=MVGeoUtil.get3DVector(q[2*x30],q[2*x30+1]);
var x40=MVGeoUtil.get3DVector(q[2*x32],q[2*x32+1]);
x37+=x38.z;
x26=MVGeoUtil.mdsphcp(x38,x38);
x29=MVGeoUtil.MAGNITUDE(x26);
x27=MVGeoUtil.mdsphcp(x38,x40);
x29*=MVGeoUtil.MAGNITUDE(x27);
x36=MVGeoUtil.DOTPRODUCT(x26,x27)/x29;
if(x36>1.)x36=1.;
if(x36<-1.)x36=-1.;
x33=Math.acos(x36);
x28=MVGeoUtil.mdsphcp(x26,x27);
if(Math.abs(x28.x)<1.e-9*x29&&Math.abs(x28.y)<1.e-9*x29&&
Math.abs(x28.z)<1.e-9*x29)
{
if(x36>0.)
x35-=Math.PI;
}
else
 {
if(MVGeoUtil.DOTPRODUCT(x28,x38)<0.)
x35+=x33-Math.PI;
else
 x35+=Math.PI-x33;
}
}
x37/=x25*1.0;
if(x35<0.)x35+=2.*Math.PI;
else x35-=2.*Math.PI;
}
_f375.mdsphcp=function(x41,x42)
{
var x43={"x":0,"y":0,"z":0};
if((x41.x==x42.x)&&(x41.y==x42.y)&&(x41.z==x42.z))
{
x43.x=x43.y=x43.z=0.0;
}
else
 {
x43.x=x41.y*x42.z-x41.z*x42.y;
x43.y=x41.z*x42.x-x41.x*x42.z;
x43.z=x41.x*x42.y-x41.y*x42.x;
}
return x43;
}
_f375.get3DVector=function(x44,x45)
{
var x46={"x":x44,"y":x45};
var x47=_f375._f378(x46);
x47.z=Math.sin(x47.y);
return x47;
}
_f375.MAGNITUDE=function(x48)
{
return Math.sqrt(x48.x*x48.x+x48.y*x48.y+x48.z*x48.z);
}
_f375.DOTPRODUCT=function(x49,x50)
{
return x49.x*x50.x+x49.y*x50.y+x49.z*x50.z;
}
function _f570(x0)
{
this._f571=x0;
this.mapConfig=_f572[x0];
this._f166=this._f49();
this._f292=this._f50();
this._f165=this._f51();
this._f291=this._f52();
this._f573=this._f51()-this._f49();
this._f574=this._f52()-this._f50();
this.zoomCount=_f572[this._f571].zoomLevels.length;
}
_f570.prototype._f575=function()
{
return this._f571;
}
_f570.prototype._f576=function(x0)
{
return _f572[x0].format;
}
_f570.prototype._f577=function()
{
return this._f573;
}
_f570.prototype._f578=function()
{
return this._f574;
}
_f570.prototype._f49=function()
{
return _f572[this._f571].coordSys.minX;
}
_f570.prototype._f50=function()
{
return _f572[this._f571].coordSys.minY;
}
_f570.prototype._f51=function()
{
return _f572[this._f571].coordSys.maxX;
}
_f570.prototype._f52=function()
{
return _f572[this._f571].coordSys.maxY;
}
_f570.prototype._f442=function()
{
return _f572[this._f571].mapCache;
}
_f570.prototype.getSrid=function()
{
return _f572[this._f571].coordSys.srid;
}
_f570.prototype._f579=function()
{
return _f572[this._f571].coordSys.type;
}
_f570.prototype._f580=function()
{
return _f572[this._f571].coordSys.distConvFactor;
}
_f570.prototype.getMaxZoomLevel=function()
{
return _f572[this._f571].zoomLevels.length;
}
_f570.prototype._f581=function(x1)
{
return _f572[this._f571].zoomLevels[x1].tileWidth;
}
_f570.prototype._f582=function(x2)
{
return _f572[this._f571].zoomLevels[x2].tileHeight;
}
_f570.prototype._f583=function(x3)
{
return _f572[this._f571].zoomLevels[x3].tileImageWidth;
}
_f570.prototype._f584=function(x4)
{
return _f572[this._f571].zoomLevels[x4].tileImageHeight;
}
_f570.prototype._f585=function(x5)
{
return _f572[this._f571].zoomLevels[x5]._f586;
}
_f570.prototype._f587=function(x6,x7,x8,x9)
{
this._f166=x6;
this._f292=x7;
this._f165=x8;
this._f291=x9;
}
_f570.prototype.getAllScales=function()
{
var x10=_f572[this._f571].zoomLevels;
var x11="";
for(var x12=0;x12<x10.length;x12++){
var x13=x10[x12].tileWidth;
var x14=x10[x12].tileImageWidth;
var x15=x14/x13
var x16=x10[x12].tileHeight;
var x17=x10[x12].tileImageHeight;
var x18=x17/x16;
if(x15==x18)
x11+=x15+";";
else
 x11+=x15+":"+x18+";";
}
return x11.length>0?x11.substring(0,x11.length-1):x11;
}
function MVEvent(){}
MVEvent.START="start";
MVEvent.FINISH="finish";
MVEvent.DRAG="drag";
MVEvent.NEW_SHAPE_POINT="new_shape_point";
MVEvent.MODIFY="modify";
MVEvent.MOUSE_CLICK="mouse_click";
MVEvent.MOUSE_RIGHT_CLICK="mouse_right_click";
MVEvent.MOUSE_OVER="mouse_over";
MVEvent.MOUSE_OUT="mouse_out";
MVEvent.COLLAPSE="collapse";
MVEvent.AFTER_COLLAPSE="after_collapse";
MVEvent.RESTORE="restore";
MVEvent.AFTER_RESTORE="after_restore";
MVEvent.DRAG_START="drag_start";
MVEvent.DRAG_END="drag_end";
MVEvent.RECENTER="recenter";
MVEvent.ZOOM_LEVEL_CHANGE="zoom_level_change";
MVEvent.BEFORE_ZOOM_LEVEL_CHANGE="before_zoom_level_change";
MVEvent.MOUSE_DOUBLE_CLICK="mouse_double_click";
MVEvent.INITIALIZE="initialize";
MVEvent.MOUSE_MOVE="mouse_move";
MVEvent.MOUSE_DOWN="mouse_down";
MVEvent.MOUSE_UP="mouse_up";
MVEvent.CLEAR="clear"
MVEvent.BEFORE_REFRESH="before_refresh";
MVEvent.AFTER_REFRESH="after_refresh";
MVEvent.BUTTON_DOWN="button_down";
MVEvent.BUTTON_UP="button_up";
MVEvent.INIT="init";
MVEvent.MARQUEEZOOM_FINISH="marqueezoom_finish";
function _f382(x0,x1,x2,x3)
{
this._f383=x0.zoomLevels[x3].tileWidth;
this._f384=x0.zoomLevels[x3].tileHeight;this._f385=Math.floor((x1-x0.coordSys.minX)/this._f383);
this._f386=Math.floor((x2-x0.coordSys.minY)/this._f384);
this._f387=x3;
this.minX=this._f385*this._f383+x0.coordSys.minX;
this.minY=this._f386*this._f384+x0.coordSys.minY;}
_f382.prototype._f388=function(x0,x1)
{
this._f385=this._f385+x0;
this._f386=this._f386+x1;
}
function MVMapTileLayer(x0,x1)
{
this._f105=x0;
this._f423="";
this._f562="";
if(x1&&x1!="")
{
this._f423=x1;
this._f562=x1;
if(MVUtil._f5(x1,'/'))
{
this._f423=x1.substring(0,x1.length-1);
this._f562=x1.substring(0,x1.length-1);
}
}
this.parent="";
this._f425=false;
this.visible=true;
this._f424="PNG";
this.minVisibleLevel=null;
this.maxVisibleLevel=null;
this._f450=null;
this.layerControl=null;
this._f563=null;
this._f452=null;
this._f564=true;
this.opacity=1;
this.mapType=0;
}
MVMapTileLayer.prototype.getType=function()
{
return "MVMapTileLayer";
}
MVMapTileLayer.prototype.setCombinable=function(x0)
{
if(x0)
this._f564=false;
else
 this._f564=true;
}
MVMapTileLayer.prototype.setTransparent=function(x1)
{
this._f425=x1;
}
MVMapTileLayer.prototype.setVisible=function(x2)
{
if(this.parent)
{
if(this.layerControl)
{
this.visible=x2;
this.layerControl.setVisible(x2);
}
else if(this.isExtAPITileLayer())
{
this.visible=x2;
if(this.layerDiv)
{
if(x2)
{
this.layerDiv.style.visibility="visible";
var x3=this.parent.getCenter();
this.parent._f565(this,x3.getPointX(),x3.getPointY(),this.parent._f53);
}
else
 this.layerDiv.style.visibility="hidden";
}
}
else if(this._f563)
{
var x4=this._f563.isVisible();
this.visible=x2;
var x5=this._f563.isVisible();
if(x4!=x5)
this._f563.setVisible(x5);
var x6=this._f563.getTransparent();
if(this._f563.layerControl)
this._f563.layerControl._f425=x6;
if(x5)
this._f563.refresh(true);
}
this.parent._f566();
}
else
 this.visible=x2;
}
MVMapTileLayer.prototype.isVisible=function()
{
if(!this._f452)
return this.visible;
else
 {
for(var x7=0;x7<this._f452.length;x7++)
{
if(this._f452[x7].visible)
return true;
}
return false;
}
}
MVMapTileLayer.prototype.setVisibleZoomLevelRange=function(x8,x9)
{
this.minVisibleLevel=x8;
this.maxVisibleLevel=x9;
if(this.layerControl)
{
this.layerControl.minVisibleLevel=this.minVisibleLevel;
this.layerControl.maxVisibleLevel=this.maxVisibleLevel;
}
}
MVMapTileLayer.prototype.refresh=function(x10)
{
if(!x10)
this._f450=Math.round(Math.random()*10000000000);
if(this.parent)
{
if(this.layerControl&&!this._f563)
{
if(this.layerControl.zoomControl)
this.layerControl.zoomControl.removeCloneTiles();
this.layerControl._f445(this.parent._f106(),this.parent._f107(),
this.parent._f90,this.parent._f91);
}
}
}
MVMapTileLayer.prototype.getName=function()
{
return this._f442();
}
MVMapTileLayer.prototype._f442=function()
{
if(this._f452)
{
var x11=null;
for(var x12=0;x12<this._f452.length;x12++)
{
if(this._f452[x12].visible
&&(this._f452[x12].minVisibleLevel==null
||this._f452[x12].minVisibleLevel<=this.parent._f53)
&&(this._f452[x12].maxVisibleLevel==null
||this._f452[x12].maxVisibleLevel>=this.parent._f53))
{
if(x11)
x11+=";"+this._f452[x12]._f105;
else
 x11=this._f452[x12]._f105;
}
}
return x11;
}
else
 return this._f105;
}
MVMapTileLayer.prototype.clone=function()
{
var x13=new MVMapTileLayer(this._f105,this._f423);
x13._f425=this._f425;
x13._f424=this._f424;
x13.minVisibleLevel=this.minVisibleLevel;
x13.maxVisibleLevel=this.maxVisibleLevel;
x13._f564=this._f564;
x13.zIndex=this.zIndex;
if(this.config)
x13.config=this.config;
return x13;
}
MVMapTileLayer.prototype._f170=function()
{
if(this.layerControl)
{
this.layerControl._f170();
this.layerControl=null;
}
else if(this.layerDiv)
{
MVUtil._f201(this.layerDiv,this.parent._f7);
this.layerDiv.parentNode.removeChild(this.layerDiv);
this.layerDiv=null;
if(this._f233)
this._f233();
}
}
MVMapTileLayer.prototype._f448=function()
{
if(this.layerControl)
this.layerControl._f448();
}
MVMapTileLayer.prototype.isExtAPITileLayer=function()
{
return this.getType()=="MVExternalAPIMapTileLayer";
}
MVMapTileLayer.prototype.getTransparent=function()
{
if(this._f452)
{
for(var x14=0;x14<this._f452.length;x14++)
{
if(!this._f452[x14]._f425&&this._f452[x14].isVisble)
{
this._f425=false;
return false;
}
}
this._f425=true;
}
return this._f425;
}
MVMapTileLayer.prototype.setOpacity=function(x15)
{
if(isNaN(x15))
{
return;
}
if(x15>1||x15<0)
return;
if(this.opacity==x15)
return;
this.opacity=x15;
if(this.layerControl)
{
this.layerControl._f451();
return;
}
if(this._f563&&this._f563._f452.length>1)
{
var x16=this._f563.layerControl.parent;
x16.removeMapTileLayer(this);
x16.addMapTileLayer(this);
}
else if(this._f563&&this._f563.layerControl)
{
this._f563.opacity=this.opacity;
this._f563.layerControl._f451();
}
}
MVMapTileLayer.prototype.setMapType=function(x17)
{
this.mapType=x17;
if(this.layerControl&&this.layerControl.setMapType)
this.layerControl.setMapType(x17);
}
MVMapTileLayer.prototype.getMapType=function()
{
if(this.layerControl&&this.layerControl.getMapType)
return this.layerControl.getMapType();
else
 return this.mapType;
}
MVBaseMap=MVMapTileLayer;
function MVCustomMapTileLayer(x0,x1)
{
var x2=x0.dataSource?x0.dataSource+"."+x0.mapTileLayer:x0.mapTileLayer;
MVMapView.addMapTileLayerDefinition(x0);
this.layerDefinition=x0;
this._f559=MVMapTileLayer;
this._f559(x2);
this.tileURLProvider=x1;
}
MVCustomMapTileLayer.prototype=new MVMapTileLayer;
MVCustomMapTileLayer.prototype.getType=function()
{
return "MVCustomMapTileLayer";
}
MVCustomMapTileLayer.prototype.clone=function()
{
return new MVCustomMapTileLayer(this.layerDefinition,this.tileURLProvider);
}
function _f420(x0,x1)
{
this.basemap=x1;
this.mapConfig=x1.config;
this.visible=true;
this._f421;
this._f422;
this._f423="";
this.parent=x0;
if(this.mapConfig.clientTileAccess)
{
var x2=this.mapConfig.clientTileAccess;
this._f423=x2.tileServerURL;
if(x2.tile_layer_name)
this._f105=x2.tile_layer_name;
else
 this._f105=x2.tileLayerName;
}
else if(x1._f423)
{
this._f423=x1._f423;
this._f105=x1._f105;
}
else
 {
MVi18n._f6("MVMapTilesControl.constructor","MAPVIEWER-05504",null,x0._f7);
return ;
}
if(x1.getType()=="MVMapTileLayer")
this._f424=this.mapConfig.format;
else if(x1.getType()=="MVThemeTileLayer")
this._f424=x1.config.format
this._f425=x1._f425;
this._f426;
this._f427;
this._f428;
this._f429;
this._f430;
this._f431;
this.tileWidth;
this.tileHeight;
this._f432=true;
this._f433=[];
this._f434=0;
this._f435=0;
this._f436;
this._f437;
this._f22;
this._f23;
this._f438=null;
this.zIndex=x1.zIndex;this._f439=x0._f440.src;
this.visible=x1.isVisible();
this.minVisibleLevel=x1.minVisibleLevel;
this.maxVisibleLevel=x1.maxVisibleLevel;
this.zoomControl=new MVZoomControl(x0,this);
this.tileNumInCSBoun=null;
this.coverPixel=null;
}
_f420.prototype._f441=function()
{
return this._f423;
}
_f420.prototype._f442=function()
{
return this._f105;
}
_f420.prototype._f443=function()
{
return this._f444;
}
_f420.prototype.setVisible=function(x0)
{
this.visible=x0;
if(!this.visible)
{
if(this._f444)
this._f444.style.visibility="hidden";
}
else
 {
if(this._f444)
this._f444.style.visibility="visible";
if(this.parent._f88)
this._f445(this.parent._f106(),this.parent._f107(),this.parent._f90,this.parent._f91);
}
}
_f420.prototype.isVisible=function()
{
return this.visible;
}
_f420.prototype._f446=function(x1,x2)
{
if(this.parent.wraparound)
{
if(x2<0||x2>=(this.mapConfig.coordSys.maxY-this.mapConfig.coordSys.minY)/this._f438._f384)
return this._f439;
else if(x1<0)
{
while(true)
{
x1=parseInt(Math.ceil((this.mapConfig.coordSys.maxX-this.mapConfig.coordSys.minX)/this._f438._f383))+x1;
if(x1>=0)
break;
}
}
else if(x1>=(this.mapConfig.coordSys.maxX-this.mapConfig.coordSys.minX)/this._f438._f383)
{
while(true)
{
x1=x1-parseInt(Math.ceil((this.mapConfig.coordSys.maxX-this.mapConfig.coordSys.minX)/this._f438._f383));
if(x1<(this.mapConfig.coordSys.maxX-this.mapConfig.coordSys.minX)/this._f438._f383)
break;
}
}
}
else if(x1<0||x1>=(this.mapConfig.coordSys.maxX-this.mapConfig.coordSys.minX)/this._f438._f383||
x2<0||x2>=(this.mapConfig.coordSys.maxY-this.mapConfig.coordSys.minY)/this._f438._f384)
return this._f439;
var x3=this._f438._f387;
if(this.basemap.tileURLProvider)
{
var x4=this.basemap.tileURLProvider(
this.mapConfig.coordSys.minX+x1*this._f438._f383,
this.mapConfig.coordSys.minY+x2*this._f438._f384,
this._f438._f383,this._f438._f384,x3);
if(!x4)
return this._f439;
else
 return x4;
}
else
 {
var x5=null;
if(this.mapConfig.clientTileAccess)
x5=this._f105;
else
 x5=this.basemap._f442();
return String(this._f423+"?request=gettile&format="+this._f424+"&zoomlevel="+x3+"&mapcache="+x5+"&mx="+x1+"&my="+x2);
}
}
_f420.prototype._f445=function(x6,x7,x8,x9)
{
if(this._f282())
return;
if(this.parent._f53>=this.mapConfig.zoomLevels.length)
return;
this.tileWidth=this.mapConfig.zoomLevels[this.parent._f53].tileImageWidth;
this.tileHeight=this.mapConfig.zoomLevels[this.parent._f53].tileImageHeight;
this._f426=x8;this._f427=x9;
this._f421=Math.ceil(this.tileWidth/2);
this._f422=Math.ceil(this.tileHeight/2);
this._f436=x6;this._f437=x7;
this._f22=x8;this._f23=x9;
this._f430=Math.ceil((x6+this._f421*2)/this.tileWidth);
this._f438=null;
this._f438=new _f382(this.mapConfig,x8,x9,this.parent._f53);
this.tileNumInCSBoun=Math.ceil((this.mapConfig.coordSys.maxX-this.mapConfig.coordSys.minX)/this._f438._f383);
this.parent._f72=this.tileWidth/this._f438._f383;this.parent._f74=this.tileHeight/this._f438._f384;
this.coverPixel=(this._f438._f383*this.tileNumInCSBoun-(this.mapConfig.coordSys.maxX-this.mapConfig.coordSys.minX))*this.parent._f72;
if(this.parent.wraparound)
{
var x10=(this._f430/this.tileNumInCSBoun)*this.coverPixel;
var x11=(this.tileWidth/2);
this._f430=this._f430+Math.ceil(x10/x11)+1;
}
this._f431=Math.ceil((x7+this._f422*2)/this.tileHeight);
this._f434=0;this._f435=0;
this.origParLeft=this.parent._f139;this.origParTop=this.parent._f140;
this._f447();
var x12=Math.floor(this._f430/2);
var x13=Math.floor(this._f431/2);
var x14=this._f436/2.0-(x8-this._f438.minX)*this.parent._f72;
var x15=this._f437/2.0+(x9-this._f438.minY)*this.parent._f74-this.tileHeight;
while(true)
{
var x16=x14-x12*this.tileWidth;
if(x16>0)
{
x12++;
continue;
}
var x17=x15-x13*this.tileHeight;
if(x17>0)
{
x13++;
continue;
}
var x18=x14+(this._f430-x12)*this.tileWidth-this._f436;
if(x18<0)
{
x12--;
continue;
}
var x19=x15+(this._f431-x13)*this.tileHeight-this._f437;
if(x19<0)
{
x13--;
continue;
}
var x20=x18+x16,x21=x19+x17;
if(x20>this.tileWidth)
{
x12++
continue;
}
else if(x20<(-1)*this.tileWidth)
{
x12--;
continue;
}
if(x21>this.tileHeight)
{
x13++;
continue;
}
if(x21<(-1)*this.tileHeight)
{
x13--;
continue;
}
break;
}
this._f428=x14-x12*this.tileWidth-this.parent._f139;
this._f429=x15-x13*this.tileHeight-this.parent._f140;
MVUtil._f70(this._f444,this._f428,this._f429);
this._f172(x12,x13,
this.tileWidth,this.tileHeight,
x12*this.tileWidth,x13*this.tileHeight);
this._f438._f388(-1,1);
var x22=Math.max(x12,this._f430-x12);
var x23=Math.max(x13,this._f431-x13);
for(_f206=1;_f206<=Math.max(x22,x23);_f206++)
{
for(xx=x12-_f206,yy=x13-_f206;
xx<=x12+_f206;xx++)
{
if(!(xx<0||xx>=this._f430||yy<0||yy>=this._f431))
{
this._f172(xx,yy,
this.tileWidth,this.tileHeight,
xx*this.tileWidth,yy*this.tileHeight);
}
this._f438._f388(1,0);
}
this._f438._f388(-(_f206*2+1),-1);
for(xx=x12-_f206,yy=x13-_f206+1;
yy<=x13+_f206-1;yy++)
{
if(!(xx<0||xx>=this._f430||yy<0||yy>=this._f431))
{
this._f172(xx,yy,
this.tileWidth,this.tileHeight,
xx*this.tileWidth,yy*this.tileHeight);
}
this._f438._f388(0,-1);
}
for(xx=x12-_f206,yy=x13+_f206;
xx<=x12+_f206;xx++)
{
if(!(xx<0||xx>=this._f430||yy<0||yy>=this._f431))
{
this._f172(xx,yy,
this.tileWidth,this.tileHeight,
xx*this.tileWidth,yy*this.tileHeight);
}
this._f438._f388(1,0);
}
this._f438._f388(-1,1);
for(xx=x12+_f206,yy=x13+_f206-1;
yy>=x13-_f206+1;yy--)
{
if(!(xx<0||xx>=this._f430||yy<0||yy>=this._f431))
{
this._f172(xx,yy,
this.tileWidth,this.tileHeight,
xx*this.tileWidth,yy*this.tileHeight);
}
this._f438._f388(0,1);
}
this._f438._f388(-(_f206*2+1),1);
}
this._f438._f388(_f206,-(_f206));
this._f438._f388(-x12+Math.floor(this._f430/2),
x13-Math.floor(this._f431/2));
}
_f420.prototype._f448=function()
{
if(this._f282())
return;
var x24=this.parent._f139+this._f434+this._f428;
var x25=this.parent._f140+this._f435+this._f429;
var x26=0,x27=0;
while(true)
{
var x28=x24-x26*this.tileWidth;
if(x28>0)
{
x26++;
continue;
}
var x29=x25-x27*this.tileHeight;
if(x29>0)
{
x27++;
continue;
}
var x30=x24+(this._f430-x26)*this.tileWidth-this._f436;
if(x30<0)
{
x26--;
continue;
}
var x31=x25+(this._f431-x27)*this.tileHeight-this._f437;
if(x31<0)
{
x27--;
continue;
}
var x32=x30+x28,x33=x31+x29;
if(x32>this.tileWidth)
{
x26++
continue;
}
else if(x32<(-1)*this.tileWidth)
{
x26--;
continue;
}
if(x33>this.tileHeight)
{
x27++;
continue;
}
if(x33<(-1)*this.tileHeight)
{
x27--;
continue;
}
break;
}
if(x26==0&&x27==0)
return ;
var x34=Math.floor(this._f430/2);
var x35=Math.floor(this._f431/2);
var x36=this._f438._f385-x34;
var x37=this._f438._f386+x35;
var x38;
if(x26!=0)
{
for(x38=0;(x26>0?x38<x26:x38>x26);(x26>0?x38++:x38--))
{
var x39;
var x40;
var x41;
if(x26>0)
{
x40=this._f434-(x38+1)*this.tileWidth;
}
else
 {
x40=this._f434+(this._f430-x38)*this.tileWidth;
}
if(x26>0)
{
this.leftNum--;
}
else
 {
this.leftNum++;
}
if(x26>0)
{
x39=this._f433[this._f433.length-1];
this._f433.pop();
for(var x42=0;x42<x39.length;x42++)
{
this._f449(x39[x42],null);
if(x27==0||
(x27>0&&x42<x39.length-x27)||
(x27<0&&x42>=-x27))
{
this._f449(x39[x42],this._f446(x36-x38-1,x37-x42));
}if(this.parent.wraparound)
{
x39[x42].style.zIndex=x36-x38-1;
x41=this._f433[0][x42].style.zIndex;
if(x41%this.tileNumInCSBoun==0)
x39[x42].style.left=MVUtil._f26(parseInt(this._f433[0][x42].style.left)-this.tileWidth+this.coverPixel);
else
 x39[x42].style.left=MVUtil._f26(parseInt(this._f433[0][x42].style.left)-this.tileWidth);
}
else
 x39[x42].style.left=MVUtil._f26(x40);
}
this._f433.unshift(x39);
}
else
 {
x39=this._f433[0];
this._f433.shift();
for(var x42=0;x42<x39.length;x42++)
{
this._f449(x39[x42],null);
if(x27==0||
(x27>0&&x42<x39.length-x27)||
(x27<0&&x42>=-x27))
{
this._f449(x39[x42],this._f446(x36+this._f430-x38,x37-x42));
}
if(this.parent.wraparound)
{
x39[x42].style.zIndex=x36+this._f430-x38;
x41=this._f433[this._f433.length-1][x42].style.zIndex;
if(x41%this.tileNumInCSBoun==(this.tileNumInCSBoun-1)||x41%this.tileNumInCSBoun==-1)
x39[x42].style.left=MVUtil._f26(parseInt(this._f433[this._f433.length-1][x42].style.left)+this.tileWidth-this.coverPixel);
else
 x39[x42].style.left=MVUtil._f26(parseInt(this._f433[this._f433.length-1][x42].style.left)+this.tileWidth);
}
else
 x39[x42].style.left=MVUtil._f26(x40);
}
this._f433.push(x39);
}
}
}
if(x27!=0)
{
var x43;
for(x43=0;(x27>0?x43<x27:x43>x27);(x27>0?x43++:x43--))
{
var x44;
if(x27>0)
{
x44=this._f435-(x43+1)*this.tileHeight;
this.topNum++;
}
else
 {
x44=this._f435+(this._f431-x43)*this.tileHeight;
this.topNum--;
}
for(x38=0;x38<this._f433.length;x38++)
{
var x39=this._f433[x38];
var x45;
if(x27>0)
{
x45=x39[x39.length-1];
this._f449(x45,null);
x39.pop();
x39.unshift(x45);
x45.style.top=MVUtil._f26(x44);
this._f449(x45,this._f446(x36-x26+x38,x37+x43+1));
}
else
 {
x45=x39[0];
this._f449(x45,null);
x39.shift();
x39.push(x45);
x45.style.top=MVUtil._f26(x44);
this._f449(x45,this._f446(x36-x26+x38,x37-this._f431+x43));
}
}
}
}
if(this.parent.wraparound)
this._f434=parseInt(this._f433[0][0].style.left);
else
 this._f434=this._f434-x26*this.tileWidth;
this._f435=this._f435-x27*this.tileHeight;
this._f438._f388(-x26,x27);
}
_f420.prototype._f172=function(x46,x47,x48,x49,x50,x51)
{
if(x46==0&&x47==0)
{
this.leftNum=this._f438._f385;
this.topNum=this._f438._f386;
}
var x52=this._f446(this._f438._f385,this._f438._f386);
var x53=this._f433[x46][x47];
if(x53==null)
{
x53=(_f65._f64()&&this._f425)?
document.createElement('div'):document.createElement('img');
this._f444.appendChild(x53);
this._f433[x46][x47]=x53;
}
_f65.c=0;
if(_f65._f66=="IF"&&!this._f425)
{
x53.galleryImg="no"}
else
 {
x53.style.MozUserSelect="none";
}
MVUtil._f145(x53);
x53.style.position="absolute";
if(this.parent.wraparound)
{
x53.style.zIndex=this._f438._f385;
if(this._f438._f385<0)
{
x53.style.left=MVUtil._f26(x50-this.coverPixel*Math.floor(x53.style.zIndex/this.tileNumInCSBoun));
}
else if(this._f438._f385>=(this.mapConfig.coordSys.maxX-this.mapConfig.coordSys.minX)/this._f438._f383)
{
x53.style.left=MVUtil._f26(x50-this.coverPixel*Math.floor(x53.style.zIndex/this.tileNumInCSBoun));
}
else
 {
x53.style.left=MVUtil._f26(x50);
}
}
else
 x53.style.left=MVUtil._f26(x50);
x53.style.top=MVUtil._f26(x51);
if(_f65._f66=="IF")
{
x53.style.width=MVUtil._f26(x48);
x53.style.height=MVUtil._f26(x49);
}
if((this.zoomControl)&&(this.zoomControl.zooming))
x53.style.display='none';
var x54=this;
x53.imgLoadFinished=false;
x53.onload=function()
{
x53.imgLoadFinished=true;
x53.onload=null;
x53.style.display='';
};
this._f449(x53,x52);
return x53;
}
_f420.prototype._f447=function()
{
if(this._f444&&!(this._f444.zooming)){
this._f444.parentNode.removeChild(this._f444);
MVUtil._f87(this._f444);
}
this._f444=document.createElement("div");
this._f444.style.position="absolute";
this.parent.div.appendChild(this._f444);
this._f444.style.zIndex=this.zIndex;
this._f433=new Array();
for(var x55=0;x55<this._f430;x55++)
{
var x56=new Array();
for(var x57=0;x57<this._f431;x57++)
{
var x58;
if(_f65._f64())
{
x58=MVUtil._f172(null,this._f425);
}
else
 {
x58=MVUtil._f172(this._f439,this._f425);
}
this._f444.appendChild(x58);
x56.push(x58);
}
this._f433.push(x56);
}
}
_f420.prototype._f170=function()
{
while(this._f433.length>0)
{
var x59=this._f433.pop();
while(x59.length>0)
{
if(_f65._f64()&&this._f425)
{
MVUtil._f87(x59.pop());
}
else
 {
var x60=x59.pop();
if(x60!=null)
{
this._f444.removeChild(x60);
delete x60;
}
}}}
if(this._f444)
{
this._f444.mapsource=null;
this._f444.ttbfc=null;
this._f444.parentNode.removeChild(this._f444);
this._f444=null;
}
this.zIndex=null;
}
_f420.prototype.getXMLForPrint=function()
{
var x61="<map_cache_theme map_cache_name=\""+this.basemap._f105+"\" snap_to_cache_scale=\"true\" ";
if(this.basemap._f423!="")
{
var x62=this.basemap._f423.substring(0,this.basemap._f423.lastIndexOf("/"));
if(x62!=this.parent._f4)
{
x62+="/";
x61+="mapviewer_url=\""+x62+"\"";
}
}
return x61+"/>";
}
_f420.prototype._f449=function(x63,x64)
{
if(x64)
{
x63.imgSrc=x64;
x63.style.opacity=this.basemap.opacity;
if(this.basemap.opacity<1&&this.basemap.opacity>0)
x63.style.filter="alpha(opacity="+this.basemap.opacity*100+")";
else
 x63.style.filter=""
if(this.basemap._f450)
{
x64=x64+"&reload="+this.basemap._f450;
}
}
if(_f65._f64()&&this._f425)
{
if(x64)
{
var x65;
if(x63.childNodes.length>0)
x65=x63.childNodes[0];
else
 x65=document.createElement("div");
x65.style.width=x63.style.width;
x65.style.height=x63.style.height;
x65.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x64+"', sizingMethod='image')";
x63.appendChild(x65);
}
else
 x63.style.filter="";;
}
else
 {
if(x64)
x63.src=x64;
else
 x63.src=this._f439;
}
}
_f420.prototype._f451=function()
{
for(var x66=0;x66<this._f430;x66++)
for(var x67=0;x67<this._f431;x67++)
{
var x68=this._f433[x66][x67];
this._f449(x68,x68.imgSrc);
}
}
_f420.prototype._f282=function(x69)
{
if(!this.basemap._f452)
{
if(!this.visible)
return true;
if(this.minVisibleLevel!=null&&this.minVisibleLevel>this.parent._f53)
{
if(this._f444)
this._f444.style.visibility="hidden";
return true;
}
if(this.maxVisibleLevel!=null&&this.maxVisibleLevel<this.parent._f53)
{
if(this._f444)
this._f444.style.visibility="hidden";
return true;
}
}
else
 {
for(var x70=0;x70<this.basemap._f452.length;x70++)
{
if(this.basemap._f452[x70].visible&&
(this.basemap._f452[x70].minVisibleLevel==null
||this.basemap._f452[x70].minVisibleLevel<=this.parent._f53)
&&(this.basemap._f452[x70].maxVisibleLevel==null
||this.basemap._f452[x70].maxVisibleLevel>=this.parent._f53))
return false;
}
if(this._f444)
this._f444.style.visibility="hidden";
return true;
}
}
_f420.zIndexCount=1;
_f420.prototype.getLeftTopPoint=function()
{
return {
x:this.leftNum*this._f438._f383+this.mapConfig.coordSys.minX,
y:(this.topNum+1)*this._f438._f384+this.mapConfig.coordSys.minY};
}
_f420.prototype.getBoundingBox=function()
{
return {
minX:this.leftNum*this._f438._f383+this.mapConfig.coordSys.minX,
minY:(this.topNum+1-this._f431)*this._f438._f384+this.mapConfig.coordSys.minY,
maxX:(this.leftNum+this._f430)*this._f438._f383+this.mapConfig.coordSys.minX,
maxY:(this.topNum+1)*this._f438._f384+this.mapConfig.coordSys.minY
};
}
function MVArrayParameter(x0,x1,x2)
{
this.array=x0;
this.elementType=x1;
if(x2==undefined||!x2)
{
if(x1==MVArrayParameter.STRING_ARRAY)
x2='MV_STRINGLIST';
else
 x2='MV_NUMBERLIST';
}
this.sqlType=x2;
}
function ArrayParameter(x0,x1,x2)
{
this.array=x0;
this.elementType=x1;
this.sqlType=x2;
}
MVArrayParameter.STRING_ARRAY='sarray';
MVArrayParameter.NUMBER_ARRAY='narray';
function MVThemeBasedFOI(x0,x1,x2)
{
if(!x1)
{
MVi18n._f6("MVThemeBasedFOI.constructor","MAPVIEWER-05519","theme");
return ;
}
this.name=x0;
this.parent=null;
this._f3=x2;
this._f54=-1;
this._f55=100;
this._f194=true;
this.minX=0;
this.minY=0;
this.maxX=0;
this.maxY=0;
this._f93=new Object();
this._f92=null;
this._f135=null;
this._f185=null;
this._f189=null;
this._f191=null;
this._f197=null;
this._f154=null;
this._f37=null;
this._f45=2;
this._f46=2;
this._f158=true;
this._f186=true;
this._f69=true;
this._f42=null;
this._f101=null;
this._f125=null;
this._f318=null;
this._f100=null;
this._f67=-1;
this._f99=-1;
this._f877=false;
this._f878=false;
this._f109=new Array();
this._f108=null;
this._f880=true;
this.visible=true;
this._f174=true;
this.cursorStyle="pointer";
this._f97=false;
this._f98=null;
this._f68=true;
this.renderLabels=false;
this._f192=false;
this._f110=true;
this._f319=true;
this._f320=null;
this._f255=null;
this._f35=false;
this.isCustomTheme=false;
if(x1!=null)
{
this._f37=x1;
if(typeof x1=="string"&&x1.indexOf("</jdbc_query>")>=0)
this._f35=true;
else if(typeof x1=="object")
this.isCustomTheme=true;
}
this._f122=null;
this._f8=null;
this.xOffset=0;
this.yOffset=0;
this._f195=false;
this._f188=true;
this._f199=0;
this._f169=new Array();
this._f96=null;
this._f131=null;
this.queryParameterArray=null;
this._f62=null;
this.bgColor=null;
this._f111=false;
this._f112=-1;
this._f113=-1;
this._f114=false;
this._f115="N";
this.reuseIENode=false;
this.langCode=null;
this.opacity=1;
this.htmlmapIdSuffix=0;
}
MVThemeBasedFOI.prototype.setLayoutCustomizer=function(x0)
{
this._f154=x0;
this.reuseIENode=false;
}
MVThemeBasedFOI.prototype.enableHighlight=function(x1,x2)
{
if(!x1)
this.deHighlight();
this._f195=x1;
if(x2!=undefined)
this._f188=x2;
}
MVThemeBasedFOI.prototype.setHighlightMode=function(x3)
{
switch(x3)
{
case "single":
this._f199=-1;
break;
case "multiple":
this._f199=0;
break;
default:
MVi18n._f6("MVThemeBasedFOI.setHighlightMode","MAPVIEWER-05519","mode",
this.parent?this.parent._f7:null);
}
}
MVThemeBasedFOI.prototype.setHighlightStyle=function(x4)
{
var x5=false;
if(x4!=null)
{
if(typeof(x4)=="object"&&x4.getXMLString!=null)
this._f96=encodeURIComponent(x4.getXMLString());
else if(typeof(x4)=="string")
this._f96=encodeURIComponent(x4);
else
 x5=true;
}
else
 x5=true;
if(x5)
MVi18n._f6("MVThemeBasedFOI.setHighlightStyle","MAPVIEWER-05519","highliteStyle",
this.parent?this.parent._f7:null);
this.reuseIENode=false;
}
MVThemeBasedFOI.prototype.setHighlightMarkerImage=function(x6,x7,x8)
{
this._f131=null;
var x9=true;
if(!x6||typeof(x6)!="string")
x9=false;
if(x9)
this._f131=new _f133(x6,x7,x8);
else
 MVi18n._f6("MVThemeBasedFOI.setHighlightMarkerImage","MAPVIEWER-05519",null,
this.parent?this.parent._f7:null);
this.reuseIENode=false;
}
MVThemeBasedFOI.prototype.highlight=function(x10)
{
if(!this._f195)
{
MVi18n._f6("MVThemeBasedFOI.highlight","MAPVIEWER-05524",null,
this.parent?this.parent._f7:null);
return;
}
var x11=false;
if(x10==null)
{
x11=true;
}
else if(typeof(x10)!="object"||(len=x10.length)==null||x10.length<1)
{
MVi18n._f6("MVThemeBasedFOI.highlight","MAPVIEWER-05519","foiIdArray",
this.parent?this.parent._f7:null);
return;
}
var x12=this._f169;
var x13=this._f125.foiarray;
var x14=x13.length;
for(var x15=0;x15<x14;++x15)
{
var x16=x13[x15];
var x17=x11;
if(x16._f152)
continue;
else {
for(var x18=0;x18<x12.length;x18++)
if(x16==x12[x18])
{
x16._f152=true;
x16=null;
break;
}
}
if(x16!=null&&x16.id!=null)
{
if(!x17)
{
for(var x18=0;x18<x10.length;x18++)
if(x16.id==x10[x18])
{
x17=true;
break;
}
}
if(x16.nodeId!=null&&x17)
{
x12.push(x16);
x16._f152=true;
this._f8.highlightFOI(this._f8,x16);
}
}
}
}
MVThemeBasedFOI.prototype.deHighlight=function(x19)
{
if(!this._f195)
{
MVi18n._f6("MVThemeBasedFOI.deHighlight","MAPVIEWER-05524",null,
this.parent?this.parent._f7:null);
return;
}
var x20=this._f169;
var x21=x20.length;
if(x21<1)
return;
var x22=null;
if(x19!=null&&(typeof(x19)!="object"||(x22=x19.length)==null))
{
MVi18n._f6("MVThemeBasedFOI.deHighlight","MAPVIEWER-05519","foiIdArray",
this.parent?this.parent._f7:null);
return;
}
if(x19!=null&&x22<1)
return;
var x23=false;
if(x19==null){
x23=true;
}
for(var x24=x20.length;x24>=0;x24--)
{
var x25=x20[x24];
var x26=x23;
if(x25!=null&&x25.id!=null)
{
if(!x26)
{
for(var x27=0;x27<x19.length;x27++)
if(x25.id==x19[x27])
{
x26=true;
break;
}
}
if(x26)
{
x20[x24]=null;
x20.pop();
x25._f152=false;
if(x25!=null&&x25.node!=null&&x25.imgurl!=null)
this._f8.deHighlightFOI(this._f8,x25);
}
}
}
}
MVThemeBasedFOI.prototype.getHighlightedFOIData=function()
{
var x28=new Array();
if(this._f169!=null)
{
for(var x29=0;x29<this._f169.length;x29++)
if(this._f169[x29]!=null)
x28.push(this._f169[x29]);
}
return x28;
}
MVThemeBasedFOI.prototype.setQueryParameters=function()
{
if(arguments.length<=0)
return ;
this._f42="&paramnum="+arguments.length;
this.queryParameterArray=new Array(arguments.length);
for(var x30=0;x30<arguments.length;x30++)
{
if(arguments[x30]==null){
this._f42+="&param"+(x30+1)+"="+null;
continue;
}
if(typeof arguments[x30]=="object")
{
this._f42+=this.setObjectQueryParameters(arguments[x30],x30+1);
if(arguments[x30].gtype!=undefined)
this.queryParameterArray[x30]={type:"geometry",value:arguments[x30]};
else
 {
var x31=arguments[x30].elementType==MVArrayParameter.STRING_ARRAY?"String":"double";
this.queryParameterArray[x30]={elemtype:x31,value:arguments[x30].array,type:arguments[x30].sqlType};
}
}
else
 {
this._f42+="&param"+(x30+1)+"="+encodeURIComponent(arguments[x30]);
this.queryParameterArray[x30]={value:arguments[x30]};
}
}
return this._f42;
}
MVThemeBasedFOI.prototype.setObjectQueryParameters=function(x32,x33)
{
if(!x32)
return "";
if(x32.gtype!=undefined)
{
x32=x32.densify();
return "&param"+x33+"="+encodeURI(x32)+"&paramtype"+x33+"=geometry";
}
else
 {
var x34="";
if(x32.array)
{
if(x32.array.substring!=undefined)
x34=x32.array;
else
 {
this.escapeQuote(x32.array);
for(var x35=0;x35<x32.array.length;x35++)
{
if(x35>0)
x34+=",";
x34+="\""+x32.array[x35]+"\"";
}
}
}
return "&param"+x33+"="+encodeURIComponent(x34)+"&paramtype"+x33+"="+x32.elementType+
"&sqltype"+x33+"="+x32.sqlType;
}
}
MVThemeBasedFOI.prototype.getQueryParameters=function()
{
return this._f42;
}
MVThemeBasedFOI.prototype.setMinVisibleZoomLevel=function(x36)
{
this._f54=x36;
}
MVThemeBasedFOI.prototype.setMaxVisibleZoomLevel=function(x37)
{
this._f55=x37;
}
MVThemeBasedFOI.prototype.setBringToTopOnMouseOver=function(x38)
{
this._f194=x38;
}
MVThemeBasedFOI.prototype.setMaxWholeImageLevel=function(x39)
{
this._f67=x39;
this._f111=false;
}
MVThemeBasedFOI.prototype.setMinClickableZoomLevel=function(x40)
{
this._f99=x40;
}
MVThemeBasedFOI.prototype.enableInfoTip=function(x41)
{
this._f158=x41;
}
MVThemeBasedFOI.prototype.enableInfoWindow=function(x42)
{
this._f186=x42;
}
MVThemeBasedFOI.prototype.enableInfoWindowForMouseOver=function(x43)
{
this._f192=x43;
}
MVThemeBasedFOI.prototype.setClickable=function(x44)
{
this._f69=x44;
if(this._f8)
{
this._f8._f124();
if(this._f8._f28)
{
if(x44&&this.isVisible())
this._f8._f28.style.visibility="visible";
else if(!x44)
this._f8._f28.style.visibility="hidden";
}
}
}
MVThemeBasedFOI.prototype.addEventListener=function(x45,x46)
{
this.setEventListener(x45,x46);
}
MVThemeBasedFOI.prototype.setEventListener=function(x47,x48)
{
if(x47==MVEvent.BEFORE_REFRESH)
{
this._f92=x48;
}
else if(x47==MVEvent.AFTER_REFRESH)
{
this._f135=x48;
}
else if(x47==MVEvent.MOUSE_CLICK)
{
this._f185=x48;
}
else if(x47==MVEvent.MOUSE_RIGHT_CLICK)
{
this._f189=x48;
}
else if(x47==MVEvent.MOUSE_OVER)
{
this._f191=x48;
}
else if(x47==MVEvent.MOUSE_OUT)
{
this._f197=x48;
}
}
MVThemeBasedFOI.prototype.attachEventListener=function(x49,x50)
{
MVUtil.attachEventListener(this._f93,x49,x50)
}
MVThemeBasedFOI.prototype.detachEventListener=function(x51,x52)
{
MVUtil.detachEventListener(this._f93,x51,x52);
}
MVThemeBasedFOI.prototype.setQueryWindowMultiplier=function(x53)
{
this._f45=x53;
this._f46=x53;
}
MVThemeBasedFOI.prototype.getQueryWindow=function()
{
if(!this.parent)
{
MVi18n._f6("MVThemeBasedFOI.getQueryWindow","MAPVIEWER-05525",this.name,
this.parent?this.parent._f7:null);
return ;
}
var x54=MVSdoGeometry.createRectangle(this.minX,this.minY,this.maxX,this.maxY,this.parent.srid);
return x54;
}
MVThemeBasedFOI.prototype.getLayerMBR=MVThemeBasedFOI.prototype.getQueryWindow;
MVThemeBasedFOI.prototype.getMBR=function()
{
if(this._f122)
return MVSdoGeometry.createRectangle(this._f122[0],this._f122[1],this._f122[2],this._f122[3],this.parent.srid);
else
 return null;
}
MVThemeBasedFOI.prototype.setMarkerImage=function(x55,x56,x57)
{
if(x55)
this._f101=new _f133(x55,x56,x57);
else
 this._f101=null;
this.reuseIENode=false;
}
MVThemeBasedFOI.prototype.getThemeName=function()
{
return this._f37;
}
function _f133(x0,x1,x2)
{
this._f102=x0;
var x3=this;
if((!x1||isNaN(x1))||(!x2||isNaN(x2))){
var x4=function(x5,x6){
if(!x1||isNaN(x1))
x1=x5;
if(!x2||isNaN(x2))
x2=x6;
x3.width=x1;
x3.height=x2;
x3=null;
}
MVUtil.getImageSize(x0,x4);
}else{
this.width=x1;
this.height=x2;
}
}
MVThemeBasedFOI.prototype.getFOIMarker=function()
{
return this._f101;
}
MVThemeBasedFOI.prototype.setVisible=function(x58)
{
this.visible=x58;
if(this.parent&&this.parent._f76)
this.parent._f76._f308();
if(this._f8)
this._f8.setVisible(this.parent,x58);
}
MVThemeBasedFOI.prototype.setInfoWindowStyle=function(x59,x60)
{
this._f318=x59;
this._f255=x60;
}
MVThemeBasedFOI.prototype.isVisible=function()
{
if(this._f8)
{
return this._f8.isVisible();
}
else
 return this.visible;
}
MVThemeBasedFOI.prototype.refresh=function(x61)
{
if(!this.parent)
{
MVi18n._f6("MVThemeBasedFOI.refresh","MAPVIEWER-05525",this.name,
this.parent?this.parent._f7:null);
return ;
}
if(!this.parent._f88){
this.parent._f873(this,"refresh",true);
return;
}
this.parent._f126();
if(this._f8)
{
var x62=this._f8;
var x63=this.parent._f874(x62);
if(x61)
x61=true;
else
 x61=false;
x62._f75(this.parent,x63[0],x63[1],x63[2],x63[3],true,x61,!x61);
}
}
MVThemeBasedFOI.prototype.getFOIData=function()
{
if(this._f125==null||this._f125.foiarray==null)
{
return null;
}
else
 return this._f125.foiarray;
}
MVThemeBasedFOI.prototype.setNSDP=function(x64)
{
this._f100=x64;
}
MVThemeBasedFOI.prototype.setBoundingTheme=function(x65,x66)
{
this._f877=x65;
if(x66)
this._f878=true;
else
 this._f878=false;
}
MVThemeBasedFOI.prototype.zoomToTheme=function()
{
if(!this.parent)
{
MVi18n._f6("MVThemeBasedFOI.zoomToTheme","MAPVIEWER-05525",this.name,
this.parent?this.parent._f7:null);
return ;
}
this.refresh(true);
}
MVThemeBasedFOI.prototype.centerToTheme=function()
{
if(!this.parent)
{
MVi18n._f6("MVThemeBasedFOI.centerToTheme","MAPVIEWER-05525",this.name,
this.parent?this.parent._f7:null);
return ;
}
this.parent._f126();
if(this._f8)
{
var x67=this._f8;
var x68=this.parent._f874(x67);
x67._f75(this.parent,x68[0],x68[1],x68[2],x68[3],true,true,false,false,true);
}
}
MVThemeBasedFOI.prototype.addStyle=function(x69)
{
var x70=this._f109.concat(x69);
this._f109=null;
this._f109=x70;
}
MVThemeBasedFOI.prototype.deleteStyle=function(x71)
{
var x72=-1;
for(var x73=0;x73<this._f109.length;x73++)
{
var x74=this._f109[x73];
if(x74!=null&&x74==x71)
{
x72=x73;
break;
}
}
if(x72<0)
return;
var x75=0;
var x76=new Array(this._f109.length-1);
for(var x73=0;x73<this._f109.length;x73++)
{
if(x73!=x72)
{
x76[x75]=this._f109[x73];
x75++;
}
}
this._f109=null;
this._f109=x76;
}
MVThemeBasedFOI.prototype.deleteAllStyles=function()
{
for(var x77=0;x77<this._f109.length;x77++)
this._f109[x77]=null;
this._f109=new Array();
}
MVThemeBasedFOI.prototype.setRenderingStyle=function(x78)
{
this._f108=x78;
this.reuseIENode=false;
}
MVThemeBasedFOI.prototype.setAutoRefresh=function(x79)
{
this._f880=x79;
}
MVThemeBasedFOI.prototype.enableEventPropagation=function(x80)
{
this._f174=x80;
}
MVThemeBasedFOI.prototype.setMouseCursorStyle=function(x81)
{
this.cursorStyle=x81;
if(this._f8)
{
MVUtil._f162(this._f8.div,x81);
if(this._f125&&this._f125.foiarray&&this._f8._f163)
{
for(var x82=0;x82<this._f125.foiarray.length;x82++)
{
if(this._f125.foiarray[x82]&&this._f125.foiarray[x82].areaNode)
{
var x83=this._f125.foiarray[x82].areaNode;
if(x83 instanceof Array)
{
for(var x84=0;x84<x83.length;x84++)
MVUtil._f162(this._f125.foiarray[x82].areaNode[x84],x81);
}
else
 MVUtil._f162(this._f125.foiarray[x82].areaNode,x81);
}
}
}
}
}
MVThemeBasedFOI.prototype.setHighlightOnly=function(x85)
{
this._f97=x85;
}
MVThemeBasedFOI.prototype.setFilteringGeom=function(x86)
{
this._f98=x86;
}
MVThemeBasedFOI.prototype.getFilteringGeom=function()
{
return this._f98;
}
MVThemeBasedFOI.prototype.enableImageRendering=function(x87)
{
this._f68=x87;
}
MVThemeBasedFOI.prototype.enableLabels=function(x88)
{
this.renderLabels=x88;
}
MVThemeBasedFOI.prototype.enableImageCaching=function(x89)
{
this._f110=x89;
}
MVThemeBasedFOI.prototype.getLayerName=function()
{
return this.name;
}
MVThemeBasedFOI.prototype.getName=function()
{
return this.getLayerName();
}
MVThemeBasedFOI.prototype.setInfoWindowTitle=function(x90)
{
this._f320=x90;
}
MVThemeBasedFOI.prototype.setScreenOffset=function(x91,x92)
{
if(x91==undefined||isNaN(x91))
x91=0;
if(x92==undefined||isNaN(x92))
x92=0;
this.xOffset=parseInt(x91);
this.yOffset=parseInt(x92);
}
MVThemeBasedFOI.prototype.setNameAsInfoWindowTitle=function(x93)
{
this._f319=x93;
}
MVThemeBasedFOI.prototype.setImageFormat=function(x94,x95)
{
if(x94)
{
this._f62=x94.toUpperCase();
if(this._f62=="PNG8"&&x95)
this.bgColor=x95;
}
this.reuseIENode=false;
}
MVThemeBasedFOI.prototype.enableAutoWholeImage=function(x96,x97,x98)
{
if(x97!=undefined)
this._f112=x97;
if(x98!=undefined)
this._f113=x98;
this._f111=x96;
}
MVThemeBasedFOI.prototype.abort=function()
{
if(this._f8)
this._f8.abort();
}
MVThemeBasedFOI.prototype.enableMarkerSequence=function(x99,x100)
{
this._f114=x99;
if(x99)
{
if(x100)
this._f115=x100;
}
}
MVThemeBasedFOI.prototype.escapeQuote=function(x101)
{
if(x101&&x101.length>0&&x101.indexOf==undefined)
{
for(var x102=0;x102<x101.length;x102++)
{
if(x101[x102]&&x101[x102].length!=undefined)
x101[x102]=MVUtil._f43(x101[x102],"\"","\\\"");
}
}
}
MVThemeBasedFOI.prototype.getAllStyles=function()
{
return this._f109;
}
MVThemeBasedFOI.prototype.getStyleByName=function(x103)
{
if(x103==null||x103=="")
return;
for(var x104=0;x104<this._f109.length;x104++)
{
var x105=this._f109[x104];
if(x105!=null&&x105.name==x103)
{
return x105;
break;
}
}
}
MVThemeBasedFOI.prototype.isWholeImage=function()
{
if(this._f8)
return this._f8.isWholeImage();
else
 return false;
}
MVThemeBasedFOI.prototype.setLabelLanguageCode=function(x106)
{
this.langCode=x106;
}
MVThemeBasedFOI.prototype.zoomToFeatures=function(x107)
{
if(!x107||!x107.length||!this.parent)
return ;
var x108=null,x109=null,x110=null,x111=null;
for(var x112=0;x112<x107.length;x112++)
{
var x113=x107[x112].rw?x107[x112].rw:x107[x112].width;
var x114=x107[x112].rh?x107[x112].rh:x107[x112].height;
var x115=x107[x112].x;
var x116=x107[x112].y-x114/this.parent.getPixelsPerYUnit();
var x117=x107[x112].x+x113/this.parent.getPixelsPerXUnit();
var x118=x107[x112].y;
if(x108==null)
x108=x115;
else if(x108>x115)
x108=x115;
if(x109==null)
x109=x116;
else if(x109>x116)
x109=x116;
if(x110==null)
x110=x117;
else if(x110<x117)
x110=x117;
if(x111==null)
x111=x118;
else if(x111<x118)
x111=x118;
}
if(x108!=null&&x109!=null&&x110!=null&&x111!=null)
this.parent.zoomToRectangle(MVSdoGeometry.createRectangle(x108,x109,x110,x111));
}
MVThemeBasedFOI.prototype.reDraw=function(x119)
{
if(this._f8&&this._f125)
{
var x120=this;
var x121=function(x122){
if(x122.hidden)
x120._f8.clearFOINode(x122);
else if(x120._f8.parent.wraparound){
x120._f8.clearFOINode(x122);
x120._f8._f134(x122);
}
else{
var x123=new Object();
x123.shown=true;
x123.node=x122.node;
x123.labelNode=x122.labelNode;
x123.areaNode=x122.areaNode;
x120._f8._f134(x122,x123);
if(x123.shown==false){
x120._f8.clearFOINode(x123);
}
}
}
if(x119)
{
x121(x119);
}
else if(this._f125&&this._f125.foiarray)
{
var x124=this._f125.foiarray
for(var x125=0;x125<x124.length;x125++)
{
x121(x124[x125]);
}
}
}
}
MVThemeBasedFOI.prototype.enableMultiFeatureMarker=function(x126,x127)
{
this._f130=x126
if(x127)
{
if(typeof(x127)=="string"||x127 instanceof MVXMLStyle||
x127 instanceof MVStyleMarker)
x127={style:x127};
if(x127.style)
{
this.overLappingStyle=x127.style;
if(this._f8&&this._f8.overLappingMarker)
this._f8.overLappingMarker=null;
}
if(x127.listWidth)
{
this.listWidth=x127.listWidth;
}
if(x127.listHeight)
{
this.listHeight=x127.listHeight;
}
}
}
MVThemeBasedFOI.prototype.setOpacity=function(x128)
{
var x129=this.opacity;
if(isNaN(x128))
{
return;
}
if(x128>1||x128<0)
return;
else
 this.opacity=x128;
if(this._f8&&this._f8.div)
{
this._f8.div.style.opacity=x128;
if(x128==1)
this._f8.div.style.filter="";
else
 this._f8.div.style.filter="alpha(opacity="+this.opacity*100+")";
if(_f65._f66=="IF")
{
if(x129==1&&this.opacity!=1)
{
this._f8.div.style.width=MVUtil._f26(this._f8._f9);
this._f8.div.style.height=MVUtil._f26(this._f8._f10);
}
else if(x129!=1&&this.opacity==1)
{
this._f8.div.style.width="";
this._f8.div.style.height="";
}
}
}
}
function _f0(x0,x1)
{
this.parent=x0;
this._f2=false;
if(!x1._f3)
{
if(this.parent._f4)
{
if(MVUtil._f5(this.parent._f4,'/'))
x1._f3=this.parent._f4+'foi';
else
 x1._f3=this.parent._f4+'/foi';
}
else
 {
MVi18n._f6("MVThemeBasedFOIControl.constructor","MAPVIEWER-05504",null,x0._f7);
return ;
}
}
x1._f8=this;
this._f1=x1;
this._f9=0;
this._f10=0;
this.width=0;
this.height=0;
this.minX=0;
this.minY=0;
this.maxX=0;
this.maxY=0;
this._f11=0;
this._f12=0;
this._f13=0;
this._f14=0;
this._f15=true;
this._f16=true;
this._f17=false;
this._f18=0;
this._f19=0;
this._f20=0;
this._f21=0;
this._f22=0;
this._f23=0;
this._f24=false;
this._f25=1;this.div=document.createElement("div");
this.div.style.position="absolute";
this.div.style.left=MVUtil._f26(0);
this.div.style.top=MVUtil._f26(0);
this.div.style.opacity=this._f1.opacity;
if(this._f1.opacity==1)
this.div.style.filter="";
else
 this.div.style.filter="alpha(opacity="+this._f1.opacity*100+")";
this._f27=0;
if(!x1.visible)
this.div.style.visibility="hidden";
this.parent.div.appendChild(this.div);
this._f28=null;
this._f29=null;
this._f30=false;
this.themeId=null;
this.abortionSupported=true;
this._f31();
this._f32=true;
this._f33=false;
this.t1=0;
this.t2=0;
this.t3=0
this.mouseL1=MVSdoGeometry.createPoint(0,0);
this.mouseL2=this.mouseL1;
this.labelStyle=null;
this.currentIndex=0;
}
_f0.prototype._f34=function(x0)
{
if(this._f1._f35)
return this._f36(this._f1._f37);
else
 {
var x1="<theme name=\""+this._f1.name+
"\" template_theme=\""+MVUtil._f38(this._f1._f37)+
"\" render_labels=\""+this._f1.renderLabels+"\" datasource=\""+
MVUtil._f39(this._f1._f37)+"\""+
this._f40(x0)+
this._f41()+">\n";
if(this._f1._f42==null)
x1+="</theme>";
else
 {
x1+="  <binding_parameters>\n";
for(var x2=0;x2<this._f1.queryParameterArray.length;x2++)
{
var x3=this._f1.queryParameterArray[x2];
x1+="<parameter ";
if(x3.type==undefined)
x1+="value=\""+x3.value+"\">";
else
 {
x1+="type=\""+x3.type+"\" ";
if(x3.type=="geometry")
{
x1+=">"+x3.value.toGML();
}
else {
x1+="elemtype=\""+x3.elemtype+"\" ";
if(!x3.value)
x1+=">";
else
 {
if(x3.value.substring!=undefined)
{
var x4=x3.value;
if(x3.elemtype=="String")
{
var x5=x3.value.split(",");
finalvalue="";
for(var x6=0;x6<x5.length;x6++)
{
if(x6>0)
finalvalue+=",";
var x7=x5[x6].indexOf("\"");
var x8=x5[x6].lastIndexOf("\"");
finalvalue+=x5[x6].substring(x7+1,x8);
}
x4=finalvalue;
}
x1+="value=\""+MVUtil._f43(x4,"\"","&quot;")+"\">";
}
else
 {
x1+=">";
for(var x6=0;x6<x3.value.length;x6++)
x1+="<elem>"+x3.value[x6]+"</elem>";
}
}
}
}
x1+="</parameter>";
}
x1+="  </binding_parameters>\n";
x1+="</theme>";
}
return x1;
}
}
_f0.prototype.setSize=function(x9,x10)
{
this.width=x9;
this.height=x10;
}
_f0.prototype._f44=function(x11,x12)
{
{
if(this._f1._f45==1&&this._f1._f46==1)
{
this._f9=this.width;
this._f10=this.height;
}
else
 {
this._f9=x11;
this._f10=x12;
}
}
}
_f0.prototype._f47=function()
{
return this._f24;
}
_f0.prototype._f48=function()
{
return this.request;
}
_f0.prototype._f49=function()
{
return this.minX;
}
_f0.prototype._f50=function()
{
return this.minY;
}
_f0.prototype._f51=function()
{
return this.maxX;
}
_f0.prototype._f52=function()
{
return this.maxY;
}
_f0.prototype.isVisible=function()
{
var x13=this.parent._f53;
if(x13<this._f1._f54||x13>this._f1._f55)
return false;
else
 return !(this.div.style.visibility=='hidden');
}
_f0.prototype._f56=function()
{
return this.div;
}
_f0.prototype.getThemeBasedFOI=function()
{
return this._f1;
}
_f0.prototype._f57=function()
{
return this._f20;
}
_f0.prototype._f58=function()
{
return this._f21;
}
_f0.prototype._f59=function(x14)
{
this._f20=x14;
}
_f0.prototype._f60=function(x15)
{
this._f21=x15;
}
_f0.prototype._f61=function()
{
return this._f1._f62?this._f1._f62:this.parent._f63;
}
_f0.prototype._f64=function()
{
return _f65._f66=="IF"&&this._f61()=="PNG24";
}
_f0.prototype.isWholeImage=function()
{
return this._f1._f67>=this.parent._f53||this._f30;
}
_f0.prototype.setVisible=function(x16,x17)
{
if(x17)
{
if(!this.isVisible())
{
if(this._f17)
{
if((!this._f64()&&this._f1.getFOIData()!=null&&
this._f1.getFOIData()[0].gtype%10!=1)||
this.isWholeImage()||!this._f1._f68)
{
if(this._f1._f69&&this._f28)
this._f28.style.visibility="visible";
}
}
this.div.style.visibility="visible";
if(!this._f16)
{
MVUtil._f70(this.div,Math.ceil((this.minX-this.parent._f71)*this.parent._f72),
-Math.ceil((this.maxY-this.parent._f73)*this.parent._f74));
this._f75(this.parent,this.minX,this.minY,this.maxX,this.maxY,true);
}
}
}
else
 {
if(this._f17)
{
if((!this._f64()&&this._f1.getFOIData()!=null&&
this._f1.getFOIData()[0].gtype%10!=1)||
this.isWholeImage()||!this._f1._f68)
{
if(this._f28)
this._f28.style.visibility="hidden";
if(this.parent._f76._f77.length>0)
{
for(var x18=0;x18<this.parent._f78.childNodes.length;x18++)
{
if(this.parent._f76._f77[0].nid==this.parent._f78.childNodes[x18].id)
{
this.parent._f76.deleteInfoWindow(this.parent._f76._f77[0]);
break;
}
}
}
}
else if(this.parent._f76._f77.length>0)
{
for(var x19=0;x19<this.div.childNodes.length;x19++)
{
if(this.parent._f76._f77[0].nid==this.div.childNodes[x19].id)
{
this.parent._f76.deleteInfoWindow(this.parent._f76._f77[0]);
break;
}
}
}
}
this.div.style.visibility="hidden";
this._f24=false;
this.parent._f79();
}
}
_f0.prototype._f80=function()
{
if(this._f24)
return this._f18;
else
 return MVUtil._f80(this.div);
}
_f0.prototype._f81=function()
{
if(this._f24)
return this._f19;
else
 return MVUtil._f81(this.div);
}
_f0.prototype._f82=function(x20)
{
if(this._f24)
this._f18=x20;
}
_f0.prototype._f83=function(x21)
{
if(this._f24)
this._f19=x21;
}
_f0.prototype._f84=function()
{
return this.width;
}
_f0.prototype._f85=function()
{
return this.height;
}
_f0.prototype._f86=function()
{
this.clearAll();
while(this.div.childNodes.length>0)
{
var x22=this.div.childNodes[0];
this.div.removeChild(x22);
if(this.parent._f76._f77.length>0)
if(this.parent._f76._f77[0].nid==x22.id)
{
this.parent._f76.deleteInfoWindow(this.parent._f76._f77[0]);
}
MVUtil._f87(x22);
}
}
_f0.prototype.clearAll=function(x23)
{
this.clearAllStarted=true;
var x24=null;
if(this.div.parentNode)
{
x24=this.div.parentNode;
x24.removeChild(this.div);
}
while(this.div.childNodes.length>0)
{
var x25=this.div.childNodes[0];
this.div.removeChild(x25);
while(x25.childNodes.length>0)
{
var x26=x25.childNodes[0];
x25.removeChild(x26);
MVUtil._f87(x26);
}
MVUtil._f87(x25);
}
this.wholeImage=null;
if(this._f25!=1&&!x23)
{
this.clearTransImageLayer();
}
if(x24)
x24.appendChild(this.div);
this.clearAllStarted=false;
}
_f0.prototype.clearTransImageLayer=function()
{
if(this._f28&&this._f28.parentNode)
{
this._f28.parentNode.removeChild(this._f28);
MVUtil._f87(this._f28);
}
this._f28=null;
this._f29=null;
}
_f0.prototype.getImageParameters=function()
{
var x27="";
var x28=this._f61();
if(x28=="PNG8")
x27+="&format="+x28;
if(this._f1.bgColor)
x27+="&bgcolor="+this._f1.bgColor;
return x27;
}
_f0.prototype._f75=function(x29,x30,x31,x32,x33,x34,
x35,x36,x37,x38)
{
this._f33=false;
this._f30=false;
var x39=this;
var x40=function()
{
if(!x39.themeId&&x39.abortionSupported)
{
setTimeout(x40,50);
return ;
}
if(!x38)
x38=false;
if(!x37&&!x29._f88)
{
var x41=[x29,x30,x31,x32,x33,x34,x35,x36,x38];
var x42=x39._f75;
var x43={obj:x39,func:"refreshFOIs",params:x41};
x29._f89.push(x43);
return ;
}
x39._f24=true;
{
x39._f1.minX=x39.minX=x30;
x39._f1.minY=x39.minY=x31;
x39._f1.maxX=x39.maxX=x32;
x39._f1.maxY=x39.maxY=x33;
}
x39._f18=Math.ceil((x39.minX-x39.parent._f71)*x39.parent._f72);
x39._f19=-Math.ceil((x39.maxY-x39.parent._f73)*x39.parent._f74);
MVUtil._f70(x39.div,x39._f18,x39._f19);
x39.div.style.display='none';
x39._f22=x39.parent._f90;
x39._f23=x39.parent._f91;
if(x39._f1._f92)
{
x39._f1._f92();
}
if(x39._f1)
MVUtil.runListeners(x39._f1._f93,MVEvent.BEFORE_REFRESH);
x39._f15=x34;
var x44=x39.parent._f53;
x39._f94();
x39.around=x39.parent.wrapAroundLayer(x39._f84());
if(!x39._f1.visible||
!x35&&(x44<x39._f1._f54||x44>x39._f1._f55))
{
x39._f16=false;
x39._f2=false;
x39.clearAll();
return;
}
x39._f16=true;
if(x39._f2)
{
x39._f95();
return ;
}
x39.adjustBBox(x35);
if(_f65._f66=="IF"&&x39._f1.opacity<1)
{
x39.div.style.width=MVUtil._f26(x39._f9);
x39.div.style.height=MVUtil._f26(x39._f10);
}
if(x39.adjustedRealWidth<=0||x39.adjustedRealHeight<=0)
return;
var x45="request=getfoi&version=1.0"+x39.getImageParameters()+"&bbox="+
x39._f11+":"+x39._f12+":"+
x39._f13+":"+x39._f14+
"&width="+x39.adjustedRealWidth+"&height="+x39.adjustedRealHeight;
if(!x39._f1.isCustomTheme)
x45+="&theme="+encodeURIComponent(x39._f1._f37);
else
 {
for(p in x39._f1._f37)
x45+="&"+p+"="+encodeURIComponent(""+x39._f1._f37[p]);
}
if(x39.adjustedMinX2)
x45+="&bbox2="+x39.adjustedMinX2+":"+x39._f12+":"+
x39.adjustedMaxX2+":"+x39._f14;
if(x39._f1._f96!=null)
x45+="&hilitestyle="+x39._f1._f96;
if(x39._f1._f97==true){
if(!x39._f1._f98)
{
MVi18n._f6("MVThemeBasedFOIControl.refreshFOIs","MAPVIEWER-05514",null,x39.parent._f7);
return;
}
x39._f1.setQueryParameters(x39._f1._f98);
x45+="&hilite=yes";
}
if(x39._f1.getQueryParameters())
{
x45+=x39._f1.getQueryParameters();
}
if((x39._f1.getFOIMarker()&&x39._f1._f67<x44)||
!x39._f1._f68)
{
x45+="&renderimg=no";
}
if(x39._f1._f99<=x44)
{
x45+="&clickable=yes";
}
else
 {
x45+="&clickable=no";
}
if(!x39._f64()||
x39._f1._f67>=x44||
!x39._f1._f68)
{
x45+="&area=yes";
}
else
 {
x45+="&area=no";
}
x45+="&dstsrid="+x39.parent.srid;
if(x39._f1._f100!=null)
{
x45+="&nsdp="+encodeURIComponent(x39._f1._f100.getFlatString());
}
if(x39._f1._f67>=x44)
{
x45+="&wholeimage=yes";
if(x39._f1._f101)
{
var x46=x39._f1.name+"_customedmarker";
if(x39._f1.getStyleByName(x46)==null)
{
var x47=new MVStyleMarker(x46,"image");
x47.setImageUrl(x39._f1._f101._f102);
x47.setSize(x39._f1._f101.width,x39._f1._f101.height);
x39._f1.addStyle(x47);
}
x39._f1.setRenderingStyle(x46);
}
}
if(x39._f1.renderLabels)
x45+="&renderlabels=yes";
x39.startLoad=MVUtil._f103(this,function()
{
x39._f95();
});
if(x35){
var x48=x39.parent._f104()
if(x48)
x45+="&mapcache="+encodeURI(x48.basemap._f105);
else
 x45+="&mapcache="+encodeURI(x39.parent.msi.mapConfig.mapTileLayer);
x45+="&boundingtheme=yes"+
"&mapwinwidth="+x39.parent._f106()+
"&mapwinheight="+x39.parent._f107()+
"&wholeimagelevel="+x39._f1._f67;
if(x38)
x45+="&recenteronly=yes";
}
if(x39._f1._f108!=null)
{
x45+="&trs="+encodeURIComponent(x39._f1._f108);
}
var x49=x39._f1._f109;
if(x49.length>0)
{
x45+="&tempstyles=";
var x50="<styles>";
for(var x51=0;x51<x49.length;x51++)
{
x50+=x49[x51].getXMLString();
}
x50+="</styles>";
x45+=encodeURIComponent(x50);
}
if(!x39._f1._f110||x36)
x45+="&refresh="+Math.round(Math.random()*100000);
if(x39._f1._f110&&x39._f1._f67<x44)
x45+="&cachefoi=yes";
if(x39.abortionSupported)
x45+="&tid="+x39.themeId;
if(!x39._f1._f111)
x45+="&aw=no";
if(x39._f1._f112>0)
x45+="&mw="+x39._f1._f112;
if(x39._f1._f113>0)
x45+="&mu="+x39._f1._f113;
if(x39._f1._f114)
{
x45+="&sq=y";
x45+="&st="+x39._f1._f115;
}
if(x39._f1.langCode)
{
x45+="&lang="+x39._f1.langCode;
}
var x52=(x39._f1._f3.indexOf(_f65._f116())<0&&
MVUtil.isLocalDomain(x39._f1._f3));
var x53=x52||MVMapView._f117;
if(MVMapView._f118)
x39.t1=new Date();
if(MVMapView.debug)
MVi18n.alert("Sending Theme Based FOI request. URL:"+x39._f1._f3+" Parameters:"+x45);
try
{
x39.parent.setLoadingIconVisible(true);
if(x39.request)
{
x39.request.onreadystatechange=null;
x39.request.abort();
x39.request=null;
}
}
catch(e)
{
}
try
{
x39.request=MVUtil.getXMLHttpRequest(x53);
x39.request.onreadystatechange=x39.startLoad;
x39.request.open("POST",MVUtil._f119(x39._f1._f3),true);
x39.request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
x39.request.send(MVUtil._f120(x39._f1._f3,x45));
}
catch(e)
{
MVi18n._f6("MVThemeBasedFOIControl.refreshFOIs","MAPVIEWER-05511",e,x39.parent._f7);
x39._f24=false;
x39.parent._f79();
return ;
}
}
x40();
}
_f0.prototype.clearAllParallelly=function(){
this.clearAll();
}
_f0.prototype.getElementByIdInDiv=function(id){
var x54=[];
var x55=document.getElementById(id);
if(!x55)return x55;
while(x55&&((x55.parentNode!=this.div)||(x55.id!=id))){
x54.push({i:x55.id,e:x55});
x55.id='';
x55=document.getElementById(id);
}
for(j=0,jj=x54.length;j<jj;j++)x54[j].e.id=x54[j].i;
x54=null;
return x55;
}
_f0.prototype._f95=function()
{
if(!this.request)
return ;
if(this.request.readyState==4||this._f2)
{
if(this.request.status==200||this._f2)
{
var _f53=this.parent._f53;
if(this._f33)
{
this._f24=false;
this.parent._f79();
return ;
}
var oldFois=new Object();
var removeAllNodesFirst=false;
if(this.parent.wraparound&&!this.isWholeImage())
{
removeAllNodesFirst=true;
var data=this._f1.getFOIData();
if(data)
for(var i=0;i<data.length;i++)
{
(data[i]).node=null;
(data[i]).labelNode=null;
}
}
else if(this._f1.getFOIData())
{
for(var i=0;i<this._f1.getFOIData().length;i++)
{
var foi=this._f1.getFOIData()[i];
if(oldFois['_'+foi.nodeId])
{
oldFois=new Object();
removeAllNodesFirst=true;
break;
}
else
 {
oldFois['_'+foi.nodeId]=foi;
oldFois['_'+foi.nodeId].shown=false;
}
}
}
var result=null;
if(MVMapView._f118)
this.t2=new Date();
if(!this._f2)
{
try
{
eval("result="+this.request.responseText);
if(MVMapView._f118)
{
this.t3=new Date();
MVi18n.alert("Time taken to fetch "+this._f1.name+":"+(this.t2-this.t1)+".\n"+
"Time taken to load the FOI data:"+(this.t3-this.t2)+".");
}
}
catch(e)
{
MVi18n._f6("MVThemeBasedFOIControl.foiLoaded","MAPVIEWER-05523",
this.request.responseText,this.parent._f7);
this._f24=false;
this.parent._f79();
return ;
}
this.boundingThemeResult=result;
}
else
 result=this.boundingThemeResult;
if(MVMapView._f121&&this._f32&&this._f1._f68&&
!this._f1._f111&&!this.isWholeImage()&&result.foiarray.length>50)
{
var maxFOINum=0;
if(result.foiarray[0].gtype%10==1)
maxFOINum=750;
else
 maxFOINum=200;
if(result.foiarray.length>maxFOINum)
{
var answer=confirm("You are showing too many FOIs for theme "+this._f1.name+" at the current level.\n"+
"It might take a long time to render these FOIs. You might want to consider rendering\n"+
"these FOIs as a whole image by invoking methods MVThemeBasedFOI.enableAutoWholeImage\n"+
"or MVThemeBasedFOI.setMaxWholeImageLevel.\n\n"+
"Do you want to continue to render the FOIs and ignore this message from now on?\n\n"+
"   Note: You can permanently disable warnings like this by invoking method\n"+
"   MVMapView.enableCodingHints(false).");
if(!answer)
{
this._f24=false;
this.parent._f79();
return ;
}
else
 this._f32=false;
}
}
if(this._f1)
this._f1._f122=result.themeMBR;
else
 return ;
if(result.labelStyle)
this.labelStyle=result.labelStyle;
if(result.isWholeImg)
this._f30=true;
else
 this._f30=false;
if(result.minx!=undefined&&!this._f2)
{
this._f2=true;
var tcx=(result.minx+result.maxx)/2;
var tcy=(result.miny+result.maxy)/2;
if(result.adjlevel!=undefined)
_f53=result.adjlevel;
if(_f53<0||
_f53>=0&&_f53<this._f1._f99&&
_f53>=this._f1._f99)
{
this._f2=false;
this.parent.zoomToRectangle(
MVSdoGeometry.createRectangle(result.minx,result.miny,result.maxx,result.maxy,this.parent.srid));
return ;
}
else
 {
this._f1.minX=this.minX=this._f11=result.minx;
this._f1.minY=this.minY=this._f12=result.miny;
this._f1.maxX=this.maxX=this._f13=result.maxx;
this._f1.maxY=this.maxY=this._f14=result.maxy;
this.parent.reCenterTag=true;
this.parent.setCenterAndZoomLevel(MVSdoGeometry.createPoint(tcx,tcy,this.parent.srid),_f53);
return ;
}
}
this._f123=true;
this._f2=false;
if(!this.div)
return ;
this._f124();
if(MVMapView._f118)
this.t1=new Date();
if(result.foiarray.length>=1)
{
this._f1._f125=result;
this.parent._f126();
if(this.isWholeImage()||!this._f1._f68||
(!this._f64()&&result.foiarray[0].gtype%10!=1))
{
this._f25=2;
if(this._f1._f99<=_f53)
{
this._f127(result);
}
else{
this.clearTransImageLayer();
}
}
else
 {
this.clearTransImageLayer();
this._f25=1;
}
if(this.wholeImage!=null)
{
if(this.wholeImage instanceof Array)
{
for(var i=0;i<this.wholeImage.length;i++)
{
this.div.removeChild(this.wholeImage[i]);
MVUtil._f87(this.wholeImage[i]);
}
}
else
 {
this.div.removeChild(this.wholeImage);
MVUtil._f87(this.wholeImage);
}
this.wholeImage=null;
}
if(this.isWholeImage()&&this._f1._f68)
{
this._f128(result.foiarray[0].imgurl);
}
if(!this.isWholeImage()||
this._f1._f99<=_f53&&result.foiarray.length>0)
{
var divParent=this.div.parentNode;
divParent.removeChild(this.div);
if(removeAllNodesFirst&&!this.isWholeImage())
MVUtil._f129(this.div,this.parent._f7);
for(var i=0;i<result.foiarray.length;i++)
{
if(this._f33)
{
this._f24=false;
this.parent._f79();
return ;
}
result.foiarray[i].attrnames=result.attrnames;
if(this._f1._f130&&result.foiarray[i].overlay)
continue;
result.foiarray[i].hiliteImgPref=result.hiliteImgPref;
result.foiarray[i].hiliteMW=result.hiliteMW;
result.foiarray[i].hiliteMH=result.hiliteMH;
if(this._f25==1&&!this._f64()&&result.foiarray[i].gtype%10!=1)
{
this._f25=3;
this._f127(result);
}
if(this._f25==1&&this._f1._f131)
{
result.foiarray[i].hiliteImgPref=this._f1._f131._f102;
result.foiarray[i].hiliteMW=this._f1._f131.width;
result.foiarray[i].hiliteMH=this._f1._f131.height;
}
var cfoi=result.foiarray[i];
if(cfoi.scid!=undefined)
cfoi.nodeId=cfoi.id+"_scid_"+cfoi.scid;
else
 cfoi.nodeId=cfoi.id;
var ofoi=oldFois['_'+cfoi.nodeId];
var flag=false;
if(ofoi)
{
flag=_f65._f66=="IF"?this._f1.reuseIENode:true;
}
if(this.parent.wraparound)
{
this._f132(cfoi);
}
var overLayFOIs=null;
if(this._f1._f130&&this._f25==1)
{
for(var m=i+1;m<result.foiarray.length;m++)
{
if(result.foiarray[i].overlayer)
continue;
if(result.foiarray[i].x==result.foiarray[m].x&&
result.foiarray[i].y==result.foiarray[m].y)
{
result.foiarray[i].overlay=true;
result.foiarray[m].overlay=true;
if(overLayFOIs==null)
{
overLayFOIs=new Array(result.foiarray[i]);
}
overLayFOIs.push(result.foiarray[m]);
}
}
if(overLayFOIs!=null&&overLayFOIs.length>1)
{
var newFOI={id:"-OL"+result.foiarray[i].id};
newFOI.wr=result.foiarray[i].wr
newFOI.nodeId=newFOI.id;
newFOI.gtype=result.foiarray[i].gtype;
newFOI.x=result.foiarray[i].x;
newFOI.y=result.foiarray[i].y;
if(this._f1.overLappingStyle)
{
if(!this.overLappingMarker)
{
if(this.loadingOverLappingMarker)
{
this.overLappingFOIArray.push(newFOI);
}
else
 {
this.loadingOverLappingMarker=true;
this.overLappingFOIArray=new Array(newFOI);
var styleStr=null;
if(this._f1.overLappingStyle.getXMLString)
styleStr=this._f1.overLappingStyle.getXMLString();
else
 styleStr=this._f1.overLappingStyle;
if(styleStr)
{
var markerURL=this._f1._f3+"?request=getpoiimage&version=1.0"+
"&poistyle="+encodeURIComponent(styleStr)+"&refresh ="+(new Date()).getTime();;
var tbf=this;
var setFOISize=function(x56,x57)
{
tbf.overLappingMarker=new _f133(markerURL,x56,x57);
tbf.loadingOverLappingMarker=false;
var x58=tbf.overLappingFOIArray.length;
for(var x59=0;x59<x58;x59++)
{
tbf.overLappingFOIArray[x59].width=tbf.overLappingMarker.height;
tbf.overLappingFOIArray[x59].height=tbf.overLappingMarker.width;
tbf.overLappingFOIArray[x59].imgurl=tbf.overLappingMarker._f102;
tbf._f134(tbf.overLappingFOIArray[x59]);
}
tbf.overLappingFOIArray=null;
}
MVUtil.getImageSize(markerURL,setFOISize);
}
}
}
else
 {
newFOI.width=this.overLappingMarker.height;
newFOI.height=this.overLappingMarker.width;
newFOI.imgurl=this.overLappingMarker._f102;
this._f134(newFOI);
}
}
newFOI.overLayFOIs=overLayFOIs;
continue;
}
}
if(flag){
ofoi.shown=true;
this._f134(cfoi,ofoi);
}
else
 {
this._f134(cfoi);
}
}
divParent.appendChild(this.div);
for(var key in oldFois)
{
foi=oldFois[key];
if(foi.shown==false)
{
this.clearFOINode(foi);
}
}
}
else
 {
for(key in oldFois)
{
foi=oldFois[key];
this.clearFOINode(foi);
}
}
this.makeFOIsVisiable();
this._f17=true;
}
else
 {
this._f1._f125=null;
this.clearAll();
}
if(MVMapView._f118)
{
this.t2=new Date();
MVi18n.alert("Time taken to render "+this._f1.name+":"+(this.t2-this.t1)+".\n"+
"wholeImage:"+this.isWholeImage()+", clickable:"+(this._f1._f99<=_f53));
}
this.addTransparentLayer();
this._f24=false;
this.parent._f79();
if(this._f1._f135)
{
this._f1._f135();
}
if(this._f1)
MVUtil.runListeners(this._f1._f93,MVEvent.AFTER_REFRESH);
this.request=null;
this._f1.reuseIENode=true;
}
}
}
_f0.prototype.makeFOIsVisiable=function(){
var x60=true;
for(var x61=0;x61<this.parent._f136.length;x61++)
{
if(this.parent._f136[x61].layerControl&&
!this.parent._f136[x61].layerControl.zoomControl.hasZoomFinished())
{
x60=false;
break;
}
}
if(x60)
{
this.div.style.display='';
}
else
 {
var x62=this;
setTimeout(function(){x62.makeFOIsVisiable.apply(x62)},70);
}
}
_f0.prototype._f127=function(x63)
{
this.clearTransImageLayer();
this._f28=document.createElement("div");
var x64=this.adjustedRealWidth;
var x65=this.adjustedRealHeight;
if(this.around)
{
x64=this._f9;
}
MVUtil._f70(this.parent._f78,0,0);
if(this._f1.visible&&this._f1._f69)
this._f28.style.visibility="visible";
else
 this._f28.style.visibility="hidden";
this._f28.style.position="absolute";
this._f28.id=this._f1.name;
var x66=(this._f11-this.minX)*this.parent._f72;
if(this.around)
{
if(this.maparea.length!=2)
{
var x67=this.minX;
this.htmlMapXoffset=(this._f11-x67)*this.parent._f72;
}
else
 this.htmlMapXoffset=0;
x66=0;
}
else
 this.htmlMapXoffset=0;
var x68=(this.maxY-this._f14)*this.parent._f74;
var x69=(this.parent._f90-this._f22)*this.parent._f72;
var x70=(this.parent._f91-this._f23)*this.parent._f74;
MVUtil._f70(this._f28,this._f18-this.parent._f139-x69+x66,
this._f19-this.parent._f140+x70+x68);
this._f28.style.zIndex=this.div.style.zIndex;
var x71=_f65._f141+"transparent.gif";
var x72=this.parent._f53;
if(this._f1._f99>x72)
return ;
if(_f65._f66=="IF"&&
(!this._f64()||this.isWholeImage()||
!this._f1._f68))
{
var x73=document.createElement("div");
x73.style.zIndex="127";
var x74=document.createElement("img");
x74.width=MVUtil._f26(x64)
x74.height=MVUtil._f26(x65);
x74.style.width=MVUtil._f26(x64);
x74.style.height=MVUtil._f26(x65);
x74.style.border=0;
x74.src=_f65._f141+"transparent.gif";
x74.setAttribute("usemap","#polygonMap"+this.parent._f144+"_"+this.currentIndex+"_"+this._f1.htmlmapIdSuffix,0);
x73.style.position="absolute";
MVUtil._f70(x73,0,0);
x73.appendChild(x74);
MVUtil._f145(x74);
this._f28.appendChild(x73);
}
else
 {
this._f146=document.createElement("img");
this._f146.src=x71;
this._f146.setAttribute("usemap","#polygonMap"+this.parent._f144+"_"+this.currentIndex+"_"+this._f1.htmlmapIdSuffix);
this._f146.width=x64;
this._f146.height=x65;
this._f146.style.width=MVUtil._f26(x64);
this._f146.style.height=MVUtil._f26(x65);
this._f146.style.border=0;
MVUtil._f145(this._f146);
this._f28.appendChild(this._f146);
}
this._f29=document.createElement("map");
this._f29.setAttribute("name","polygonMap"+this.parent._f144+"_"+this.currentIndex+"_"+this._f1.htmlmapIdSuffix);
this._f29.setAttribute("id","polygonMap"+this.parent._f144+"_"+this.currentIndex+"_"+this._f1.htmlmapIdSuffix);
this._f28.setAttribute("theme",this._f1.name);
if(_f65._f66=="SF")
{
this._f1.htmlmapIdSuffix++;
}
this._f28.appendChild(this._f29);
}
_f0.prototype.addTransparentLayer=function()
{
if(this._f28)
{
this.parent._f78.style.zIndex=Math.max(MVUtil.getZIndex(this.div)+1,MVUtil.getZIndex(this.parent._f78));
this.parent._f78.appendChild(this._f28);
}
}
var _f147=0;
_f0.prototype.setTimeout=function(_f148,_f149)
{
var Ie="tempVar"+_f147;
_f147++;
eval(Ie+" = this;");
var oi=_f148.replace(/\\/g,"\\\\");
oi=oi.replace(/\"/g,'\\"');
return window.setTimeout(Ie+'._setTimeoutDispatcher("'+oi+'");'+Ie+" = null;",_f149);
}
_f0.prototype._setTimeoutDispatcher=function(func)
{
eval(func);
}
_f0.prototype._f150=function(x75)
{
this._f151=0;
this.result=x75;
this.startDisplayGroupFoi();
}
_f0.prototype.startDisplayGroupFoi=function()
{
for(var x76=0;x76<180;x76++)
{
if(this._f151<this.result.foiarray.length)
{
this.result.foiarray[this._f151].attrnames=this.result.attrnames;
this._f134(this.result.foiarray[this._f151]);
this._f151++;
}
else
 {
return;
}
}
this.setTimeout("this.startDisplayGroupFoi()",2);
}
_f0.prototype._f134=function(x77,x78)
{
if(!x77.node&&x77.hidden)
return ;
if(!(this._f1._f68)&&(x78)&&(x78.node))
{
node=x78.node;
x77._f152=x78._f152;
x78.shown=false;
}
if(this.isWholeImage()||x77.imgurl||x77.area||
this._f1.getFOIMarker()||!this._f1._f68)
{
x77.imgurl4Hilite=null;
x77.highlightImageWidth=x77.hw?x77.hw:x77.hiliteMW;
x77.highlightImageHeight=x77.hh?x77.hh:x77.hiliteMH;
x77.pngType4Hilite=true;
x77.normalPngType4Hilite=false;
x77.hilitePngType4Hilite=false;
x77.recalSizePos4Hilite=false;
if(this._f25==1&&this._f1._f131)
x77.imgurl4Hilite=x77.hiliteImgPref;
if(this._f25==1&&this._f1.getFOIMarker())
{
x77.width=this._f1.getFOIMarker().width;
x77.height=this._f1.getFOIMarker().height;
}
if(x77.highlightImageWidth&&x77.highlightImageHeight
&&(x77.width)&&(x77.height)
&&((x77.width!=x77.highlightImageWidth)
||(x77.height!=x77.highlightImageHeight)))
{
x77.recalSizePos4Hilite=true;
}
if(!x77.recalSizePos4Hilite&&x78&&x78.node&&
(x78.highlightImageWidth!=x77.highlightImageWidth
||x78.highlightImageHeight!=x77.highlightImageHeight))
{
x77.recalSizePos4Hilite=true;
}
var x79=this;
var x80=null;
if(!this.isWholeImage()&&this._f1._f68&&!(!x77.imgurl&&x77.scid))
{
if(!(x77.imgurl4Hilite)&&x77.imgurl&&x77.hiliteImgPref)
{
var x81=x77.imgurl.lastIndexOf("/");
if(x81!=-1)
{
x77.imgurl4Hilite=x77.imgurl.substring(0,(x81+1))+x77.hiliteImgPref+x77.imgurl.substr((x81+1));
}
}
if(this._f1.getFOIMarker()&&!MVUtil._f153(x77.id,"-OL"))
{
x77.imgurl=this._f1.getFOIMarker()._f102;
}
var x82=x77.imgurl.toLowerCase().indexOf('.png')==-1?false:true;
if(MVUtil._f153(x77.id,"-OL"))
x82=true;
x77.normalPngType4Hilite=x82;
if(x77.imgurl4Hilite)
x77.hilitePngType4Hilite=x77.imgurl4Hilite.toLowerCase().indexOf('.png')==-1?false:true;
x77.pngType4Hilite=(x77.normalPngType4Hilite)?true:(x77.hilitePngType4Hilite);
var x83="IMG";
if((this._f64()&&x77.pngType4Hilite)||
(x79._f1._f154&&x77.gtype%10==1)||x79._f1._f154)
x83="DIV";
if((x78)&&(x78.node))
{
if(x78.node.tagName==x83){
x80=x78.node;
x77._f152=x78._f152;
}
else{
x78.shown=false;
}
}
if(!x80)
{
if(x83=='DIV')
x80=document.createElement('div');
else
 x80=document.createElement('img');
}
x77.node=x80;
x80.className="noprint";
MVUtil._f145(x80);
x80.style.position="absolute";
if(_f65._f66=="IF"&&!x79._f1._f154)
{
if(x77.width==null)
x77.width=10;
if(x77.height==null)
x77.height=10
x80.style.width=MVUtil._f26(x77.width);
x80.style.height=MVUtil._f26(x77.height);
}
if(x77.nodeId&&x77.nodeId!=null)
x80.id=x77.nodeId;
x80._f155=x77.x;
x80._f156=x77.y;
var x84=this._f157(x77)
x77.loc=x84;
if(x77.gtype%10==1)
MVUtil._f70(x80,Math.ceil(x77.loc[0]-x77.width/2.0),Math.ceil(x77.loc[1]-x77.height/2.0));
else
 MVUtil._f70(x80,x77.loc[0],x77.loc[1]);
x80.style.zIndex=160;
}
else
 {
if(!this.isWholeImage()&&this._f1._f68&&
(!x77.imgurl&&x77.scid)&&this.shouldNotUseHTMLMap(x77))
return ;
}
if(x80){
x80.tbf=x79;
x80.foi=x77;
}
var x85="";
if(x77.name&&x77.name!="null")
x85=x77.name;
if((_f65._f66=="IF"||_f65._f66=="NS")
&&x79._f1._f158&&x77.name&&x77.name!="null"&&x80)
{
x80.title=x85;
}
var x86="";
if(x77.name)
x86=MVUtil._f43(x77.name," ","&nbsp;");
if(x80&&this.shouldNotUseHTMLMap(x77))
{
this.div.appendChild(x80);
if(!x79._f1._f154)
{
if(this._f64()&&x77.pngType4Hilite)
{
if(x82)
x80.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x77.imgurl+"', sizingMethod='image');";
else
 x80.innerHTML="<img src=\""+encodeURIComponent(x77.imgurl)+"\"/>";
}
else
 x80.src=x77.imgurl;
if(!x79._f1._f154)
{
x80.setAttribute("id",x77.nodeId);
x80.setAttribute("border",0);
}
if(x77.lox!=null&&x77.loy!=null)
{
var x87;
if((x78)&&(x78.labelNode))
x87=x78.labelNode;
else
 x87=document.createElement("div");
x87.innerHTML=x86;
x87.style.cssText=this.labelStyle;
x87.style.position="absolute";
x87.style.cursor="default";
x87.style.zIndex=x80.style.zIndex;
x77.labelNode=x87;
MVUtil._f70(x87,parseInt(x80.style.left)+x77.lox,parseInt(x80.style.top)+x77.loy);
this.div.appendChild(x87);
}
else if((x78)&&(x78.labelNode))
{
x78.labelNode.parentNode.removeChild(x78.labelNode);
x78.labelNode=null;
}
}
else
 {
x79._f1._f154(x77);
if(x77.xoffset==undefined||isNaN(x77.xoffset))
x77.xoffset=0;
else
 x77.xoffset=parseInt(x77.xoffset);
if(x77.yoffset==undefined||isNaN(x77.yoffset))
x77.yoffset=0;
else
 x77.yoffset=parseInt(x77.yoffset);
this._f159(x77,x78,x80);
}
this._f160(x80,x77);
MVUtil._f161(x80);
}
else {
var x88=x85;
var x89=Math.floor((x77.x-this.minX)*this.parent._f72+0.5);
var x90=Math.floor((this.maxY-x77.y)*this.parent._f74+0.5);
var x91="";
if(this._f1._f99<=this.parent._f53)
{
var x92=null;
if((x78)&&(x78.areaNode))
{
x77._f152=x78._f152;
}
x92=document.createElement("area");
x92.tbf=x79;
x92.foi=x77;
x92.node=x80;
MVUtil._f162(x92,this._f1.cursorStyle);
x77.areaNode=x92;
this._f163=true;
x92.setAttribute("border",0);
if(_f65._f66!="OS")
{
if((_f65._f66=="IF"||_f65._f66=="NS")
&&x79._f1._f158&&x77.name&&x77.name!="null")
{
x92.setAttribute("title",x88);
}
x92.setAttribute("href","javascript:void(0)");
}
if(x77.gtype%10==1)
{
var x84;
if(x77.wr&&x77.wr.length>0)
x84=MVUtil._f164(this.parent,this.minX,this._f12,this.maxX,this._f14,
this._f9,this.adjustedRealHeight,x77.x+x77.wr[0]*(this.parent.msi._f165-this.parent.msi._f166),
x77.y);
else
 x84=MVUtil._f164(this.parent,this._f11,this._f12,
this._f13,this._f14,
this.adjustedRealWidth,this.adjustedRealHeight,
x77.x,x77.y);
var x93=0;
x84[0]+=this.parent._f139+this._f1.xOffset-x93;
x84[1]+=this.parent._f140+this._f1.yOffset;
x92.setAttribute("shape","rect");
var x94=parseInt(x77.width);
var x95=parseInt(x77.height);
x94=x94<10?10:x94;
x95=x95<10?10:x95;
x94=x94/2;
x95=x95/2;
var x96=(x84[0]-x94)+","+(x84[1]-x95)+","+
(x84[0]+x94)+","+(x84[1]+x95);
x92.setAttribute("coords",x96);
}
else
 {
var x97="";
if(typeof(x77.area)=='undefined'||x77.area==null||x77.area=='')
x97="-1000,-1000";
else
 {
x97=x77.area;
if(x79._f1._f154&&!this.isWholeImage())
{
x79._f1._f154(x77);
}
if(x77.xoffset==undefined||isNaN(x77.xoffset))
x77.xoffset=0;
else
 x77.xoffset=parseInt(x77.xoffset);
if(x77.yoffset==undefined||isNaN(x77.yoffset))
x77.yoffset=0;
else
 x77.yoffset=parseInt(x77.yoffset);
var x98=this.htmlMapXoffset+x77.xoffset+this._f1.xOffset;
if(x77.wr&&x77.wr.length>0&&this.maparea.length!=2)
x98+=x77.wr[0]*(this.parent.msi._f165-this.parent.msi._f166)*this.parent._f72;
var x99=x77.yoffset+this._f1.yOffset;
x97=this._f167(x97,x98,x99);
}
x92.setAttribute("shape","poly");
x92.setAttribute("coords",x97);
}
this._f160(x92,x77);
MVUtil._f161(x92);
this._f29.appendChild(x92);
}
else
 {
if(x77.areaNode)
x77.areaNode=null;
}
if(x80)
{
MVUtil._f70(x80,x84[0],x84[1]);
x80.style.position="absolute";
x80.style.width=MVUtil._f26(x77.width);
x80.style.height=MVUtil._f26(x77.height);
x80.id=x77.nodeId;
if(x79._f1._f154)
this._f159(x77,x78,x80);
else
 x80.src=x77.imgurl;
x80.style.zIndex=125;
this.div.appendChild(x80);
}
}
this._f168(x80,x77);
if(x80!=null&&x80.id!=null)
{
for(var x100=0;x100<x79._f1._f169.length;x100++)
{
if(x77.id==x79._f1._f169[x100].id
&&x79._f1._f169[x100]._f152)
{
var x101=true;
if(x77.attrs&&x79._f1._f169[x100].attrs)
{
var x102=x79._f1._f169[x100].attrs.length;
if(x77.attrs.length==x102)
{
for(var x103=0;x103<x102;x103++)
if(x77.attrs[x103]!=x79._f1._f169[x100].attrs[x103])
{
x101=false;
break;
}
}
else
 x101=false;
}
if(x101)
{
x77._f152=true;
x79._f1._f169[x100]=x77;
this.highlightFOI(x79,x77,x80);
break;
}
}
}
}
}
}
_f0.prototype._f170=function()
{
this._f86();
if(this.request)
{
this.request.onreadystatechange=function(){};
this.request.abort();
this.request=null;
}
if(this._f1._f125&&this._f1._f125.foiarray)
{
while(this._f1._f125.foiarray.length>0)
{
var x104=this._f1._f125.foiarray.pop();
if(x104.node)
x104.node=null;
if(x104.areaNode)
x104.areaNode=null;
}
}
this._f1._f125=null;
this._f1=null;
if(this.parent)
{
if(this.parent.div&&this.div)
{
try{this.parent.div.removeChild(this.div);}catch(error){}
}
this.div=null;
this.parent._f79();
this.parent=null;
}
this._f29=null;
this._f28=null;
this._f146=null;
}
_f0.prototype.adjustBBox=function(x105)
{
var x106=false;
var x107=this.parent.msi.mapConfig.coordSys;
this.adjustedMinX2=0;
this.adjustedMaxX2=0;
if(this.parent.wraparound&&!x105)
{
if(this.maparea.length>=3)
{
this._f11=x107.minX;
this._f13=x107.maxX;
}
else if(this.maparea.length==2)
{
var x108=x107.maxX-x107.minX;
if(this.parent.maptype!="PROJECTED")
{
this._f11=this.maparea[0].minx;
if(this.maparea[0].minx<this.maparea[1].maxx)
this._f13=this.maparea[0].minx+x108;
else
 this._f13=this.maparea[1].maxx+x108;
}
else
 {
this._f11=this.maparea[0].minx;
this._f13=this.maparea[0].maxx;
if(this.maparea[1].maxx<this.maparea[0].minx)
{
this.adjustedMinX2=this.maparea[1].minx;
this.adjustedMaxX2=this.maparea[1].maxx;
}
else if(this.maparea[1].minx<this.maparea[0].minx)
{
this.adjustedMinX2=this.maparea[1].minx;
this.adjustedMaxX2=this.maparea[0].minx;
}
}
}
else
 {
this._f11=this.maparea[0].minx;
this._f13=this.maparea[0].maxx;
}
x106=true;
}
else
 {
if(!x105&&this.minX<x107.minX)
{
this._f11=x107.minX;
x106=true;
}
else
 this._f11=this.minX;
if(!x105&&this.maxX>x107.maxX)
{
this._f13=x107.maxX;
x106=true;
}
else
 this._f13=this.maxX;
}
if(!x105&&this.minY<x107.minY)
{
this._f12=x107.minY;
x106=true;
}
else
 this._f12=this.minY;
if(!x105&&this.maxY>x107.maxY)
{
this._f14=x107.maxY;
x106=true;
}
else
 this._f14=this.maxY;
if(this.adjustedMinX2)
this.adjustedRealWidth=Math.round(this._f9*
(this._f13-this._f11+this.adjustedMaxX2-this.adjustedMinX2)/(this.maxX-this.minX));
else
 this.adjustedRealWidth=Math.round(this._f9*
(this._f13-this._f11)/(this.maxX-this.minX));
this.adjustedRealHeight=Math.round(this._f10*
(this._f14-this._f12)/(this.maxY-this.minY));
}
_f0.prototype._f36=function(x109)
{
if(!x109)
return x109;
if(x109.indexOf("<themes>")>=0)
x109=x109.substring(x109.indexOf("<themes>")+8,x109.indexOf("</themes>"));
if(this._f1._f108)
{
var x110=x109.indexOf(" render_style");
if(x110>0)
{
var x111="\"";
var x112=x109.indexOf(x111,x110);
var x113=x109.indexOf("'",x110);
if(x112<0||x113<x112)
{
x111="'";
x112=x113;
}
var x114=x109.indexOf(x111,x112+1);
x109=x109.substring(0,x110)+x109.substring(x114+1);
}
else
 x110=x109.indexOf("<jdbc_query")+11;
return x109.substring(0,x110)
+" render_style=\""+this._f1._f108+"\""
+x109.substring(x110);
}
else
 return x109;
}
_f0.prototype._f128=function(x115)
{
var x116=-(this._f14-this.parent._f171)*this.parent._f74;
x116=x116-MVUtil._f81(this.div)+this._f1.yOffset;
var x117=this;
var x118=function(x119)
{
var x120=null;
if(x117._f64())
x120=MVUtil._f172(x115,true);
else
 {
x120=document.createElement('img');
x120.src=x115;
}
x120.style.width=MVUtil._f26(x117.adjustedRealWidth);
x120.style.height=MVUtil._f26(x117.adjustedRealHeight);
x120.style.position="absolute";
MVUtil._f70(x120,x119,x116);
x117.div.appendChild(x120);
return x120;
}
this.clearAll(true);
if(!this.parent.wraparound)
{
var x121=(this._f11-this.parent._f173)*this.parent._f72;
x121=x121-MVUtil._f80(this.div)+this._f1.xOffset;
this.wholeImage=x118(x121);
}
else{
var x122=this.parent.msi.mapConfig.coordSys;
var x123=x122.maxX-x122.minX;
var x124=this.maparea.length;
if(x124>=3)
{
this.wholeImage=new Array();
for(var x125=0;x125<x124;x125++)
{
var x121=(this.maparea[x125].minx+this.maparea[x125].n*x123-(this.maparea[x125].minx-this._f11)-this.parent._f173)*this.parent._f72;
x121=x121-MVUtil._f80(this.div)+this._f1.xOffset;
var x126=x118(x121);
this.wholeImage.push(x126);
}
}
else if(x124==2)
{
var x121=(this.maparea[0].minx+this.maparea[0].n*x123-this.parent._f173)*this.parent._f72;
x121=x121-MVUtil._f80(this.div)+this._f1.xOffset;
var x126=x118(x121);
if(this.maparea[0].minx<this.maparea[1].maxx)
{
this.wholeImage=new Array(x126);
var x127=(this.maparea[0].minx+(this.maparea[0].n+1)*x123-this.parent._f173)*this.parent._f72;
x127=x127-MVUtil._f80(this.div)+this._f1.xOffset;
var x126=x118(x127);
this.wholeImage.push(x126);
}
else
 {
this.wholeImage=x126;
}
}
else
 {
var x121=(this.maparea[0].minx+this.maparea[0].n*x123-this.parent._f173)*this.parent._f72;
x121=x121-MVUtil._f80(this.div)+this._f1.xOffset;
this.wholeImage=x118(x121);
}
}
}
_f0.prototype._f31=function(x128)
{
var x129="request=getthemeid";
var x130=(this._f1._f3.indexOf(_f65._f116())<0&&
MVUtil.isLocalDomain(this._f1._f3));
var x131=x130||MVMapView._f117;
var x132=null;
var x133=this;
var x134=function()
{
if(x132.readyState==4&&x132.status==200)
{
x133.themeId=x132.responseText;
if(x133.themeId.lastIndexOf("\n")==x133.themeId.length-1)
x133.themeId=x133.themeId.substr(0,x133.themeId.length-1);
if(x133.themeId&&x133.themeId.indexOf("MAPVIEWER-06011")>=0)
{
x133.abortionSupported=false;
}
if(x128)
x128();
x132=null;
}
}
try
{
x132=MVUtil.getXMLHttpRequest(x131);
x132.onreadystatechange=x134;
x132.open("POST",MVUtil._f119(this._f1._f3),true);
x132.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
x132.send(MVUtil._f120(this._f1._f3,x129));
}
catch(e)
{
MVi18n._f6("MVThemeBasedFOIControl.getThemeId","MAPVIEWER-05511",e,this.parent._f7);
}
}
_f0.prototype.abort=function()
{
if(!this.abortionSupported)
return ;
var x135="request=abort&tid="+this.themeId;
var x136=(this._f1._f3.indexOf(_f65._f116())<0&&
MVUtil.isLocalDomain(this._f1._f3));
var x137=x136||MVMapView._f117;
var x138=null;
var x139=this;
this._f33=true;
try
{
x138=MVUtil.getXMLHttpRequest(x137);
x138.open("POST",MVUtil._f119(this._f1._f3),true);
x138.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
x138.send(MVUtil._f120(this._f1._f3,x135));
x138=null;
}
catch(e)
{
MVi18n._f6("MVThemeBasedFOIControl.abort","MAPVIEWER-05511",e,this.parent._f7);
}
}
_f0.prototype._f124=function()
{
if(this._f1._f99<=this.parent._f53&&this._f1._f69)
MVUtil._f162(this.div,this._f1.cursorStyle);
else
 MVUtil._f162(this.div,"default");
}
_f0.prototype._f159=function(x140,x141,x142)
{
if(x141!=null&&x141.layoutListenerDiv!=null){
if(x141.layoutListenerDiv.parentNode!=null)
{
x141.layoutListenerDiv.parentNode.removeChild(x141.layoutListenerDiv);
}
MVUtil._f87(x141.layoutListenerDiv);
x141.layoutListenerDiv=null;
}
var x143=document.createElement("div");
x143.style.position="absolute";
x143.tag="layout";
var x144=this;
var x145=x140.xoffset+x144._f1.xOffset;
var x146=x140.yoffset+x144._f1.yOffset;
x143.style.left=MVUtil._f26(x145);
x143.style.top=MVUtil._f26(x146);
x143.style.padding=MVUtil._f26(0);
x143.innerHTML=""+x140.html+"";
x142.appendChild(x143);
x140.layoutListenerDiv=x143;
}
_f0.prototype.stopPropagation=function(x147)
{
x147=(x147)?x147:((window.event)?event:null);
var x148=MVUtil.getEventSource(x147);
var x149=x148.tbf;
while(!x149&&x148.parentNode){x148=x148.parentNode;
x149=x148.tbf;
}
if(x147&&!x149._f1._f174)
{
if(_f65._f66=="IF")
x147.cancelBubble=true;
else if(x147.stopPropagation)
x147.stopPropagation();
}
}
_f0.prototype._f175=function(x150)
{
x150=(x150)?x150:((window.event)?event:null);
var x151=MVUtil.getEventSource(x150);
var x152=x151.tbf;
while(!x152&&x151.parentNode){x151=x151.parentNode;
x152=x151.tbf;
}
if(!x152||!x152._f1||x150&&!x152._f1._f174)
{
MVUtil._f175(x150);
}
}
_f0.prototype._f176=function(x153)
{
x153=(x153)?x153:((window.event)?event:null);
var x154=MVUtil.getEventSource(x153);
var x155=x154.tbf;
while(!x155&&x154.parentNode){x154=x154.parentNode;
x155=x154.tbf;
}
if(!x155)
return;
var x156=function()
{
x155._f177=null;
x155._f178(x153);
}
if(MVUtil.isTouchEvent(x153))
{
if(x155._f177)
x155._f179();
else
 x155._f177=setTimeout(x156,_f65._f180);
}
var x157=x154.foi;
x155.mouseL1=MVUtil._f181(x153);
x155._f175(x153);
}
_f0.prototype.tFoiMouseUp=function(x158)
{
x158=(x158)?x158:((window.event)?event:null);
var x159=MVUtil.getEventSource(x158);
var x160=x159.tbf;
while(!x160&&x159.parentNode){x159=x159.parentNode;
x160=x159.tbf;
}
if(!x160)
return;
if(MVUtil.isTouchEvent(x158))
{
if(!x160._f177)
{
return ;
}
else
 {
x160._f179();
}
}
var x161=x159.foi;
if(!x160._f1._f69||x160.parent._f182)
return ;
x160.mouseL2=MVUtil._f181(x158);
if(x158.button==2)
{
if(!x160.shouldNotUseHTMLMap(x161)&&_f65._f66=='IF')
x160.tFoiRightClick(x158);
return;
}
if(!x160.mouseL2||x160.mouseL1.x==x160.mouseL2.x&&x160.mouseL1.y==x160.mouseL2.y)
{
x160.parent._f183();
if(x160.parent.getBrowserType()=="NS")
{
x160.parent._f184=null;
}
var x162=MVUtil.getMouseLocation(x160.parent,x158);
if(x161.overlay&&x159.point)
x162=x159.point;
if(x160._f1._f185||x160._f1._f93[MVEvent.MOUSE_CLICK])
{
var x163=MVSdoGeometry.createPoint(x162.sdo_point.x,x162.sdo_point.y,x160.parent.srid);
if(x160._f1._f185)
x160._f1._f185(x163,x161,MVUtil.getEvent(x158));
if(x160._f1)
MVUtil.runListeners(x160._f1._f93,MVEvent.MOUSE_CLICK,[x163,x161,MVUtil.getEvent(x158)]);
}
else
 {
if(x161.attrs!=null)
{
if(x161.attrs.length>=1&&x160._f1._f186)
{
var x164=x161.name==null?"":MVUtil._f43(x161.name," ","&nbsp;");
x160.parent._f76._f187(x161.attrs,x161.attrnames,x161.id,
x164,x162.sdo_point.x,x162.sdo_point.y,null,null,
x160._f1,300);
}
}
}
if(!x160._f1)
{
x160._f175(x158);
return ;
}
var x165=x159;
if(!x160.shouldNotUseHTMLMap(x161))
{
x165=x159.node;
}
if(x160._f1._f188)
{
x160.mouseUpHighLight(x160,x161,x165);
}
}
}
_f0.prototype.tFoiRightClick=function(x166)
{
x166=(x166)?x166:((window.event)?event:null);
var x167=MVUtil.getEventSource(x166);
var x168=x167.tbf;
while(!x168&&x167.parentNode){x167=x167.parentNode;
x168=x167.tbf;
}
if(!x168)
return;
var x169=x167.foi;
if(!x168._f1._f69)
return ;
var x170=MVUtil.getMouseLocation(x168.parent,x166);
if(x169.overlay&&x167.point)
x170=x167.point;
var x171=MVSdoGeometry.createPoint(x170.sdo_point.x,x170.sdo_point.y,x168.parent.srid);
if(x168._f1._f189)
{
x168._f1._f189(x171,x169,MVUtil.getEvent(x166));
}
if(x168._f1)
MVUtil.runListeners(x168._f1._f93,MVEvent.MOUSE_RIGHT_CLICK,[x171,x169,MVUtil.getEvent(x166)]);
x168._f175(x166);
};
_f0.prototype.tFoiMouseOver=function(x172)
{
x172=(x172)?x172:((window.event)?event:null);
var x173=MVUtil.getEventSource(x172);
var x174=x173.tbf;
var x175=0;
while(!x174&&x173.parentNode){x173=x173.parentNode;
x174=x173.tbf;
x175++;
}
if(!x174)
return;
var x176=x173.foi;
var x177=x173;
if(!x174.shouldNotUseHTMLMap(x176)){
x177=x173.node;
if(!x174._f1._f69)
return ;
}
var x178=MVUtil.getMouseLocation(x174.parent,x172);
if(x176.overlay&&x173.point)
x178=x173.point;
var x179=MVSdoGeometry.createPoint(x178.sdo_point.x,x178.sdo_point.y,x174.parent.srid);
if(x176.overLayFOIs)
{
var x180=MVUtil.getRealOrdinates(x174.parent,x178.sdo_point.x,x176.x)
x179=MVSdoGeometry.createPoint(x180,x176.y,x174.parent.srid);
x174._f190(x179,x176.overLayFOIs);
}
else
 {
if(x174._f1._f191)
{
x174._f1._f191(x179,x176,MVUtil.getEvent(x172));
}
if(x174._f1)
MVUtil.runListeners(x174._f1._f93,MVEvent.MOUSE_OVER,[x179,x176,MVUtil.getEvent(x172)]);
}
if(x174._f1._f192&&
!(x174.parent._f76._f193()&&!x174.parent._f76.mouseOver))
{
if(x176.attrs!=null)
{
if(x176.attrs.length>=1&&x174._f1._f186)
{
var x181=x176.name==null?"":MVUtil._f43(x176.name," ","&nbsp;");
x174.parent._f76._f187(x176.attrs,x176.attrnames,x176.id,
x181,x178.sdo_point.x,x178.sdo_point.y,null,null,
x174._f1,300,true);
}
}
}
if(x174.shouldNotUseHTMLMap(x176)&&x174._f1._f194)
{
x173.style.zIndex=161;
}
if(!x173.title&&x176.name&&x176.name!="null"&&x174._f1._f158&&!x176.overlay)
{
var x181=x176.name==null?"":MVUtil._f43(x176.name," ","&nbsp;");
x174.parent._f76.showTextTip(x181,x178.sdo_point.x,x178.sdo_point.y);
}
if(x174._f1.enableMouseOverHighlightMode&&x174._f1._f195)
{
if(x177&&x176.imgurl4Hilite)
x174.highlightFOI(x174,x176,x177);
else if(x176.scid)
{
var x176=x174.getMainFOI(x176);
if(x176)
x174.highlightFOI(x174,x176,x176.node);
}
}
};
_f0.prototype.tFoiMouseOut=function(x182)
{
x182=(x182)?x182:((window.event)?event:null);
var x183=MVUtil.getEventSource(x182);
var x184=x183.tbf;
while(!x184&&x183.parentNode){x183=x183.parentNode;
x184=x183.tbf;
}
if(!x184)
return;
var x185=x183.foi;
var x186=x183;
if(!x184.shouldNotUseHTMLMap(x185)){
x186=x183.node;
if(!x184._f1._f69)
return ;
}
var x187=MVUtil.getMouseLocation(x184.parent,x182);
if(x185.overlay&&x183.point)
x187=x183.point;
var x188=MVSdoGeometry.createPoint(x187.sdo_point.x,x187.sdo_point.y,x184.parent.srid);
if(x185.overLayFOIs)
{
x184._f196(x188,x185.overLayFOIs);
}
else
 {
if(x184._f1._f197)
{
x184._f1._f197(x188,x185,MVUtil.getEvent(x182));
}
if(x184._f1)
MVUtil.runListeners(x184._f1._f93,MVEvent.MOUSE_OUT,[x188,x185,MVUtil.getEvent(x182)]);
}
if(x184._f1._f192&&
!(x184.parent._f76._f193()&&!x184.parent._f76.mouseOver))
{
if(x185.attrs!=null)
{
if(x185.attrs.length>=1&&x184._f1._f186)
{
x184.parent.removeInfoWindow();
}
}
}
if(x184.shouldNotUseHTMLMap(x185))
{
x183.style.zIndex=160;
}
x184.parent._f76._f198();
if(x184._f1.enableMouseOverHighlightMode&&x184._f1._f195)
{
if(x186&&x185.imgurl4Hilite!=null&&!(x185._f152))
x184.deHighlightFOI(x184,x185,x186);
else if(x185.scid)
{
var x185=x184.getMainFOI(x185);
if(x185&&!(x185._f152))
x184.deHighlightFOI(x184,x185,x185.node);
}
}
};
_f0.prototype.shouldNotUseHTMLMap=function(x189)
{
return ((this._f64()||x189.gtype%10==1)&&this._f1._f68&&!this.isWholeImage())
}
_f0.prototype.mouseUpHighLight=function(x190,x191,x192)
{
if(x190._f1._f195&&!x190._f1._f154)
{
if(x191.imgurl4Hilite!=null)
{
var x193=x190._f1._f169.length;
var x194=x190._f1._f199;
var x195=false;
var x196=null;
if(x193>0)
{var x197=x190._f1._f169;
var x198=null;
var x199=null;
for(var x200=0;x200<x197.length;x200++)
{
if(x197[x200]==x191)
{
x195=true;
x196=x200;
break;
}
}
if(x194==-1||x193<=x194){
var x201=x190._f1._f125.foiarray;
for(var x200=0;x200<x197.length;x200++)
{
var x202=x197[x200];
x202._f152=false;
if(x202!=null&&x202.node!=null&&x202.imgurl!=null)
{
x190.deHighlightFOI(x190,x202);
}
}
x190._f1._f169=new Array();
x193=0;
}
else if(x194>0)
{
for(var x200=1;x200<=x194;++x200)
{
x198=x197[x193-x200];
x198._f152=false;if(x198!=null&&x198.node!=null&&x198.imgurl!=null)
{
x190.deHighlightFOI(x190,x198);
}
}
x190._f1._f169=x197.slice(0,(0-x194));
x193-=x194;
}
}
if(!x195)
{
x191._f152=true;x190._f1._f169[x193++]=x191;
x190.highlightFOI(x190,x191);
}
else if(x194==0)
{
if(x196!=null){
x190._f1._f169[x196]._f152=false;
x190._f1._f169.splice(x196,1);
}
x190.deHighlightFOI(x190,x191);
}
}
else if(x191.scid)
{
var x191=x190.getMainFOI(x191);
if(x191)
x190.mouseUpHighLight(x190,x191,x191.node);
}
}
}
_f0.prototype.deHighlightFOI=function(x203,x204)
{
if(!x204.highlight)
return;
var x205=x204.node;
x204.highlight=false;
var x206=function(x207,x208)
{
if(x203.shouldNotUseHTMLMap(x204))
{
if(x204!=null&&x204.imgurl!=null)
{
if(x203._f64()&&x204.pngType4Hilite)
{
if(x204.normalPngType4Hilite)
{
x207.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x204.imgurl+"', sizingMethod='image');";
x207.src=x204.imgurl;
x207.innerHTML="";
}
else
 {
x207.onmouseover=null;
x207.onmouseout=null;
x207.style.filter=null;
x207.src=null;
x207.innerHTML="<img src=\""+encodeURIComponent(x204.imgurl)+"\"/>";
var x209=function(){
x207.onmouseover=x203.tFoiMouseOver;
x207.onmouseout=x203.tFoiMouseOut;
}
window.setTimeout(x209,50);
}
}
else
 x207.src=x204.imgurl;
if(x204.recalSizePos4Hilite&&(x204.gtype%10==1))
{
var x210=0;
if(x208&&x208!=0)
{
x210=x208*(x203.parent.msi._f165-x203.parent.msi._f166)*x203.parent._f72;
}
MVUtil._f70(x207,Math.ceil(x204.loc[0]-x204.width/2.0+x210),Math.ceil(x204.loc[1]-x204.height/2.0));
x207.style.width=MVUtil._f26(x204.width);
x207.style.height=MVUtil._f26(x204.height);
}
}
}
else
 {
if(x204!=null&&x204.imgurl!=null)
{
if(x203._f64()&&_f200.pngType4Hilite)
{
x207.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x204.imgurl+"', sizingMethod='image');";
}
x207.src=x204.imgurl;
}
}
}
if(x205 instanceof Array)
{
for(var x211=0;x211<x205.length;x211++)
x206(x205[x211],x211);
}
else
 x206(x205);
}
_f0.prototype.highlightFOI=function(x212,x213)
{
if(x213.highlight)
return;
var x214=x213.node;
x213.highlight=true;
var x215=function(x216,x217)
{
if(x212.shouldNotUseHTMLMap(x213)&&x213.imgurl4Hilite)
{
if(x212._f64()&&x213.pngType4Hilite)
{
if(x213.hilitePngType4Hilite)
{
x216.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x213.imgurl4Hilite+"', sizingMethod='image');";
x216.src=x213.imgurl4Hilite;
x216.innerHTML="";
}
else
 {
x216.onmouseout=null;
x216.onmouseover=null;
x216.style.filter=null;
x216.src=null;
x216.innerHTML="<img src=\""+encodeURIComponent(x213.imgurl4Hilite)+"\"/>";
var x218=function(){
x216.onmouseout=x212.tFoiMouseOut;
x216.onmouseover=x212.tFoiMouseOver;
}
window.setTimeout(x218,10);
}
}
else
 {
x216.src=x213.imgurl4Hilite;
}
if(x213.recalSizePos4Hilite&&(x213.gtype%10==1))
{
var x219=0;
if(x217&&x217!=0)
{
x219=x217*(x212.parent.msi._f165-x212.parent.msi._f166)*x212.parent._f72;
}
MVUtil._f70(x216,Math.ceil(x213.loc[0]-x213.highlightImageWidth/2.0+x219),Math.ceil(x213.loc[1]-x213.highlightImageHeight/2.0));
x216.style.width=MVUtil._f26(x213.highlightImageWidth);
x216.style.height=MVUtil._f26(x213.highlightImageHeight);
}
}
else if(x216!=null&&(x213.imgurl4Hilite))
{
if(x212._f64()&&x213.pngType4Hilite)
{
x216.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x213.imgurl4Hilite+"', sizingMethod='image');";
}
x216.src=x213.imgurl4Hilite;
}
}
if(x214 instanceof Array)
{
for(var x220=0;x220<x214.length;x220++)
x215(x214[x220],x220);
}
else if(x214)
x215(x214);
}
_f0.prototype._f94=function()
{
this.maparea=new Array();
var x221=this.minX;
var x222=this.maxX;
if(this.parent.msi!=null)
{
var x223=this.parent.msi._f166;
var x224=this.parent.msi._f165;
var x225=x224-x223;
var x226=0;
if(x221<x223)
{
x226=Math.ceil((x223-x221)/x225);
x221+=x225*x226;
x222+=x225*x226;
x226=0-x226;
}
else if(x221>=x224)
{
x226=Math.ceil((x221-x224)/x225);
x221-=x225*x226;
if(x221==x224)
{
x226++;
x221=x223;
}
x222-=x225*x226;
}
if(x222<=x224&&x221!=x222){
this.maparea.push({minx:x221,maxx:x222,n:x226});
}
else{
this.maparea.push({minx:x221,maxx:x224,n:x226});
x222-=x225;
x226++;
while(x222>x224)
{
this.maparea.push({minx:x223,maxx:x224,n:x226});
x222-=x225;
x226++;
}
this.maparea.push({minx:x223,maxx:x222,n:x226});
}
}
}
_f0.prototype._f168=function(x227,x228,x229)
{
var x230=this;
if(x228.areaNode)
{
var x231=x228.areaNode;
var x232=x231.getAttribute("coords");
var x233=x231.getAttribute("shape");
if(x228.wr&&x228.wr.length>1)
{
if(!x229)
{
x229=1;
}
if(x229==1)
{
x228.areaNode=new Array(x231);
}
for(var x234=x229;x234<x228.wr.length;x234++)
{
var x235=x231.cloneNode(true);
MVUtil._f162(x235,this._f1.cursorStyle);
var x236=x234*(this.parent.msi._f165-this.parent.msi._f166)*this.parent._f72;
var x237=this._f167(x232,x236,0);
if(_f65._f66=='IF')x235.setAttribute("shape",x233);
x235.setAttribute("coords",x237);
var x238=x235.getAttribute("coords");
if(x227)
x235.node=x227;
this._f160(x235,x228);
MVUtil._f161(x235);
this._f29.appendChild(x235);
x228.areaNode.push(x235);
}
}
}
if(!x227)
return;
if(x228.wr&&x228.wr.length>1)
{
var x239=false;
if(!x229)
{
x229=1;
}
if(x229==1)
{
x228.node=new Array(x227);
if(x228.lox!=null&&x228.loy!=null)
{
x228.labelNode=new Array(x228.labelNode);
}
}
for(var x234=x229;x234<x228.wr.length;x234++)
{
var x240=x227.cloneNode(true);
x240.id=x240.id+"clone"+x234;
var x241=parseInt(x227.style.left);
x240.style.left=MVUtil._f26(x241+x234*(this.parent.msi._f165-this.parent.msi._f166)*this.parent._f72);
this.div.appendChild(x240);
x240.orgid=x227.id;
this._f160(x240,x228);
x228.node.push(x240);
MVUtil._f161(x227);
if(x228.lox!=null&&x228.loy!=null&&!x230._f1._f154)
{
var x242=x228.labelNode[0].cloneNode(true);
var x243=parseInt(x242.style.left);
x242.style.left=MVUtil._f26(x243+x234*(this.parent.msi._f165-this.parent.msi._f166)*this.parent._f72);
x228.labelNode.push(x242);
this.div.appendChild(x242);
}
}
}
}
_f0.prototype._f160=function(x244,x245)
{
var x246=this;
x244.tbf=x246;
x244.foi=x245;
x244.onmouseover=x246.tFoiMouseOver;
x244.onmouseout=x246.tFoiMouseOut;
x244.onmousemove=x246.tFoiMouseMove;
if(this._f1._f99<=this.parent._f53)
{
MVUtil.setListener(x244,"mousedown",x246._f176);
MVUtil.setListener(x244,"mouseup",x246.tFoiMouseUp);
if(_f65._f66=='IF'&&!x246.shouldNotUseHTMLMap(x245))
x244.oncontextmenu=function(){return false;};
else
 x244.oncontextmenu=x246.tFoiRightClick;
x244.ondblclick=x246._f175;
x244.onclick=x246.stopPropagation;
x244.onkeyup=x246.stopPropagation;
}
else
 {
MVUtil.setListener(x244,"mousedown",null);
MVUtil.setListener(x244,"mouseup",null);
if(_f65._f66=='IF'&&!x246.shouldNotUseHTMLMap(x245))
x244.oncontextmenu=function(){return false;};
else
 x244.oncontextmenu=null;
x244.ondblclick=null;
x244.onclick=null;
x244.onkeyup=null;
}
}
_f0.prototype._f132=function(x247)
{
x247.wr=new Array();
var x248=0;
var x249=this.parent.msi._f166;
var x250=this.parent.msi._f165;
var x251=x250-x249;
var x252=this.parent.msi._f166+x251/2;
var x253=x247.x+x247.width;
var x254=x247.x;
var x255=false;
if(x254<=x249||x253>=x250)
{
x247.wr.push(this.maparea[0].n);
if(x254<x252&&x253<x252)
{
x253=x247.x+x251;
x254=x247.x+x247.width;
}
else if(x254>x252&&x253>x252)
{
x253=x247.x;
x254=x247.x+x247.width-x251;
}
for(var x256=1;x256<this.maparea.length;x256++)
{
if(this.maparea[x256].maxx>x254)
x247.wr.push(this.maparea[x256].n);
}
}
else
 {
for(var x256=0;x256<this.maparea.length;x256++)
{
if((x254>this.maparea[x256].minx&&x254<this.maparea[x256].maxx)||(x253>this.maparea[x256].minx&&x253<this.maparea[x256].maxx))
x247.wr.push(this.maparea[x256].n);
}
}
}
_f0.prototype._f167=function(x257,x258,x259)
{
if(x258!=0||x259!=0)
{
var x260="";
var x261=x257.split(" ");
for(var x262=0;x262<x261.length;x262++)
{
var x263=x261[x262].split(",");
for(var x264=0;x264<x263.length;){
x263[x264]=parseInt(x263[x264++])+x258;
x263[x264]=parseInt(x263[x264++])+x259;
}
x260+=x263.toString()+" ";
}
if(x260.length>0)
x260=x260.substring(0,x260.length-1);
return x260;
}
else
 return x257;
}
_f0.prototype._f41=function()
{
if(this._f1._f114)
return " marker_sequence=\""+this._f1._f115+"\"";
else
 return "";
}
_f0.prototype._f40=function(x265)
{
if(x265!=null)
return " render_style=\""+x265+"\"";
else if(this._f1._f108)
return " render_style=\""+this._f1._f108+"\"";
else
 return "";
}
_f0.prototype.getMainFOI=function(x266)
{
for(var x267=0;x267<this._f1._f125.foiarray.length;x267++)
{
if(!this._f1._f125.foiarray[x267].scid&&this._f1._f125.foiarray[x267].id==x266.id){
return this._f1._f125.foiarray[x267];
}
}
return null
}
_f0.prototype.tFoiMouseMove=function(x268)
{
x268=(x268)?x268:((window.event)?event:null);
var x269=MVUtil.getEventSource(x268);
var x270=x269.tbf;
while(!x270&&x269.parentNode){x269=x269.parentNode;
x270=x269.tbf;
}
if(!x270)
return;
var x271=x269.foi;
if(!x270.shouldNotUseHTMLMap(x271)){
node=x269.node;
if(!x270._f1._f69)
return ;
}
var x272=MVUtil.getMouseLocation(x270.parent,x268);
if(x271.overlay&&x269.point)
x272=x269.point;
var x273=MVSdoGeometry.createPoint(x272.sdo_point.x,x272.sdo_point.y,x270.parent.srid);
if(x270._f1)
MVUtil.runListeners(x270._f1._f93,MVEvent.MOUSE_MOVE,[x273,x271,MVUtil.getEvent(x268)]);
};
_f0.prototype.clearFOINode=function(x274)
{
var x275=x274.node;
tbf=this;
var x276=function(x277)
{
MVUtil._f201(x277,tbf.parent._f7);
if(x277.parentNode){
x277.parentNode.removeChild(x277);
}
}
if(x275)
{
if(x275 instanceof Array){
for(var x278=0;x278<x275.length;x278++)
x276(x275[x278]);
}
else
 x276(x275);
x274.node=null;
}
x275=x274.labelNode;
if(x275)
{
if(x275 instanceof Array){
for(var x278=0;x278<x275.length;x278++)
x276(x275[x278]);
}
else
 x276(x275);
x274.labelNode=null;
}
x275=x274.areaNode;
if(x275)
{
if(x275 instanceof Array){
for(var x278=0;x278<x275.length;x278++)
x276(x275[x278]);
}
else
 x276(x275);
x274.areaNode=null;
}
}
_f0.prototype._f190=function(x279,x280)
{
var x281=document.createElement("table");
var x282=document.createElement("tbody");
x281.appendChild(x282);
var x283=this;
for(var x284=0;x284<x280.length;x284++)
{
var x285=x280[x284];
var x286=null;
var x287=x285.imgurl;
var x288=x285.name!=null&&x285.name!=""?MVUtil._f43(x285.name," ","&nbsp;"):x285.id;
var x289=document.createElement("tr");
x282.appendChild(x289);
var x290=document.createElement("td");
var x291=document.createElement("td");
x289.appendChild(x290);
x289.appendChild(x291);
if(x283._f25==1&&x283._f1.getFOIMarker())
{
x287=x283._f1.getFOIMarker()._f102;
x285.width=x283._f1.getFOIMarker().width;
x285.height=x283._f1.getFOIMarker().height;
}
var x292=null
var x293=x287.toLowerCase().indexOf('.png')==-1?false:true;
if(_f65._f66=="IF"&&x293)
x292=MVUtil._f172(x287,true);
else
 {
x292=document.createElement("img");
x292.src=x287;
}
x292.style.width=MVUtil._f26(x285.width);
x292.style.height=MVUtil._f26(x285.height);
x292.tbf=x283;
x292.foi=x285;
x292.onmouseover=x283.tFoiMouseOver;
x292.onmouseout=x283.tFoiMouseOut;
x292.onmousemove=x283.tFoiMouseMove;
x292.point=x279;
if(x283._f1._f99<=x283.parent._f53)
{
if(x283._f1._f69)
x292.style.cursor=x283._f1.cursorStyle;
MVUtil.setListener(x292,"mousedown",x283._f176,true);
MVUtil.setListener(x292,"mouseup",x283.tFoiMouseUp,true);
if(_f65._f66=='IF'&&!x283.shouldNotUseHTMLMap(x285))
x292.oncontextmenu=function(){
return false;
};
else
 x292.oncontextmenu=x283.tFoiRightClick;
x292.ondblclick=x283._f175;
x292.onclick=x283.stopPropagation;
x292.onkeyup=x283.stopPropagation;
}
else
 {
MVUtil.setListener(x292,"mousedown",null);
MVUtil.setListener(x292,"mouseup",null);
if(_f65._f66=='IF'&&!x283.shouldNotUseHTMLMap(x285))
x292.oncontextmenu=function(){return false;};
else
 x292.oncontextmenu=null;
x292.ondblclick=null;
x292.onclick=null;
x292.onkeyup=null;
}
x290.appendChild(x292);
var x294=document.createElement("a");
x294.style.cssText="font:11px normal Tahoma;color: #000000";
x294.href="javascript:void(0);";
x294.index=x284;
x294.onclick=function(x295)
{
x295=(x295)?x295:((window.event)?event:null);
if(!x283._f1._f69)
return
 var x296=x280[this.index];
if(x296._f185||(x283._f1._f93[MVEvent.MOUSE_CLICK]!=null
&&x283._f1._f93[MVEvent.MOUSE_CLICK].length!=0))
{
x283.parent._f183();
if(x283._f1._f185)
x283._f1._f185(x279,x296,MVUtil.getEvent(x295));
MVUtil.runListeners(x283._f1._f93,MVEvent.MOUSE_CLICK,[x279,x296,MVUtil.getEvent(x295)]);
}
else if(x296.attrs!=null&&x296.attrs.length>=1&&x283._f1._f186)
{
var x297=new MVInfoWindowTab(x296._f202,x296._f203);
var x298=new Array(x297);
var x299=x296.name==null?"":MVUtil._f43(x296.name," ","&nbsp;");
x283.parent._f76._f187(x296.attrs,x296.attrnames,x296.id,
x299,x279.sdo_point.x,x279.sdo_point.y,null,null,
x283._f1,300);
return;
}
}
x294.innerHTML=x288;
x291.appendChild(x294)
}
var x300=MVUtil.checkRealSize(x283.parent,x281);
if(x300.width+MVInfoWindowStyle4.MultiFeatureListTotalMarginWidth<x283._f1.listWidth
&&x300.height+MVInfoWindowStyle4.TotalMarginHeight<x283._f1.listHeight)
x283.parent.showOverLayerMarkWindow(x279,x281);
else
 x283.parent.showOverLayerMarkWindow(x279,x281,x283._f1.listWidth,x283._f1.listHeight);
}
_f0.prototype._f196=function(x301,x302)
{
var x303=this.parent;
var x304=function()
{
if(x303._f76&&x303._f76._f204||
x303.infoLayer2&&x303.infoLayer2._f204)
x303.removeOverLayerWindow=setTimeout(x304,100);
else
 {
x303.removeOverLayerMarkWindow();
clearTimeout(x303.removeOverLayerWindowTime);
}
}
x303.removeOverLayerWindow=setTimeout(x304,100);
}
_f0.prototype._f157=function(x305)
{
var x306=(this.parent._f90-this._f22)*this.parent._f72;
var x307=(this.parent._f91-this._f23)*this.parent._f74;
var x308;
if(x305.wr&&x305.wr.length>0)
x308=MVUtil._f164(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this._f9,this._f10,x305.x+x305.wr[0]*(this.parent.msi._f165-this.parent.msi._f166),
x305.y);
else
 x308=MVUtil._f164(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this._f9,this._f10,x305.x,x305.y);
x308[0]-=x306;
x308[1]+=x307;
x308[0]+=this._f1.xOffset;
x308[1]+=this._f1.yOffset;
if(_f65._f66=="IF")
{
x308[1]++;}
else
 {
}
if(x305.height%2==0)
x308[1]--;
return x308;
}
_f0.prototype._f178=function(x309)
{
var x310=MVUtil.getEventSource(x309);
var x311=x310.tbf;
while(!x311&&x310.parentNode){x310=x310.parentNode;
x311=x310.tbf;
}
if(!x311)
return;
x311.parent._f179();
if(!x311.parent._f205||!x311.parent._f205.touchHold||
x311.parent._f205.touchHold=="mouse_right_click")
x311.tFoiRightClick(x309);
else if(x311.parent._f205.touchHold=="mouse_over")
x311.tFoiMouseOver(x309);
}
_f0.prototype._f179=function()
{
if(this._f177)
{
clearTimeout(this._f177);
this._f177=null;
}
}
function _f305(x0,id,x1,x2)
{
this.minX;
this.minY;
this.maxX;
this.maxY;
this.width=x0._f106();
this.height=x0._f107();
this.parent=x0;
this._f306=null;
this.div=document.createElement("div");
this.div.style.position="absolute";
this.div.style.zIndex="3000";
this.parent._f307.appendChild(this.div);
this._f158=document.createElement("div");
this._f158.style.position="absolute";
this._f158.style.backgroundColor="#FFFFDF";
this._f158.style.border="inset black 1px";
this._f158.style.visibility="hidden";
this._f158.style.zIndex="1200";
this.parent.div.appendChild(this._f158);
MVUtil._f70(this._f158,0,0);
this._f77=new Array(0);
this._f174=false;
this.mouseOver=false;
this.id=id
}
_f305.prototype.enableEventPropagation=function(x0)
{
this._f174=x0;
}
_f305.prototype._f308=function()
{}
_f305.prototype._f198=function()
{
this._f158.style.visibility='hidden';
}
_f305.prototype.refresh=function(x1,x2,x3,x4,x5,x6)
{
MVUtil._f70(this.div,0,0);
this.minX=x1;
this.minY=x2;
this.maxX=x3;
this.maxY=x4;
this.width=x5;
this.height=x6;
var x7=0;
for(;x7<this._f77.length;x7++)
{
var x8=MVUtil._f309(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this.width,this.height,this._f77[x7].winX,this._f77[x7].winY);
this._f77[x7].style.visibility="hidden";
MVUtil._f70(this._f77[x7],x8.x,x8.y);
if(this._f77[x7].winX>=this.parent._f71&&this._f77[x7].winX<=this.parent._f304&&
this._f77[x7].winY>=this.parent._f310&&this._f77[x7].winY<=this.parent._f73)
this._f77[x7].style.visibility="visible";
}
}
_f305.prototype._f56=function()
{
return this.div;
}
_f305.prototype.showTextTip=function(x9,x10,x11)
{
this._f158.innerHTML=x9;
if(_f65._f66=="NS"&&navigator.userAgent.toLowerCase().indexOf("netscape")>0)
{
var x12=MVUtil._f43(x9.toLowerCase(),"&nbsp;"," ").length;
this._f158.style.width=MVUtil._f26(x12*8+8);
}
var x13=MVUtil._f309(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this.width,this.height,x10,x11);
MVUtil._f70(this._f158,x13.x+10,x13.y+5);
this._f158.style.visibility="visible";
}
_f305.prototype._f193=function()
{
return this._f77.length>0;
}
_f305.prototype._f248=function(id,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24)
{
if(MVInfoWindowStyle1._f311)
{
clearTimeout(MVInfoWindowStyle1._f311);
MVInfoWindowStyle1._f311=null;
}
var x25=this.parent._f144+"_"+this.id;;
if(MVInfoWindowStyle4._f311&&MVInfoWindowStyle4._f311[x25])
{
clearTimeout(MVInfoWindowStyle4._f311[x25]);
MVInfoWindowStyle4._f311[x25]=null;
}
if(x20==null||x20=="")
{
x20=_f65._f312;
}
if(x22)
this.mouseOver=true;
else
 this.mouseOver=false;
this._f198();
var x26=this.parent;
if(x16==null||x16.length==0)
return ;
if(!x17)
x17=0;
else if(x17<0)
x17=0;
else if(x17>x16.length-1)
x17=x16.length-1;
var x27=0;
for(;x27<this._f77.length;x27++)
{
if(id&&this._f77[x27].nid==id){
this.deleteInfoWindow(this._f77[x27]);
return ;
}
}
if(this._f77.length>0)
this.deleteInfoWindow(this._f77[0]);
var x28=document.createElement("div");
var x29=this;
var x30=function(x31)
{
x31=(x31)?x31:((window.event)?event:null);
var x32=!x29._f174;
if(x31&&!x29._f174)
{
if(_f65._f66=="IF")
x31.cancelBubble=true;
else if(x31.stopPropagation)
x31.stopPropagation();
}
}
var x33=function(x34)
{
x29._f204=true;
if(x29.div)
x29.div.style.zIndex=3001;
x30(x34);
}
var x35=function(x36)
{
x29._f204=false;
if(x29.div)
x29.div.style.zIndex=3000;
x30(x36);
}
x28.id="mvinfodiv"+this.id;
x28.onmousedown=MVUtil._f103(x28,x30);
x28.onmouseup=MVUtil._f103(x28,x30);
x28.onmousemove=MVUtil._f103(x28,x30);
x28.onmouseover=MVUtil._f103(x28,x33);
x28.onmouseout=MVUtil._f103(x28,x35);
x28.ondblclick=MVUtil._f103(x28,x30);
x28.onclick=MVUtil._f103(x28,x30);
x28.onkeyup=MVUtil._f103(x28,x30);
if(_f65._f66=="OS")
x28.onkeypress=MVUtil._f103(x28,x30);
else
 x28.onkeydown=MVUtil._f103(x28,x30);
var x37=MVUtil._f309(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this.width,this.height,x14,x15);
x28.style.position="absolute";
x28.style.visibility="hidden";
this.div.appendChild(x28);
if(x20!="MVInfoWindowStyle1"&&x20!="MVInfoWindowStyle4")
{
var x38=document.createElement("div");
if(x18)
x38.style.width=x18;
if(x19)
x38.style.height=x19;
x38.innerHTML=x16[0].getContent();
x28.appendChild(x38);
var x39=document.getElementById("mvinfotable_"+this.parent._f144);
var x40=document.getElementById("mvinfotable1_"+this.parent._f144);
var x41=0,x42=0;
if(x39!=null&&x40!=null)
{
if(x39.offsetWidth<=x40.offsetWidth)
x41=x40.offsetWidth+45;
else
 x41=x39.offsetWidth+45;
x18=x41;
}
if(x41>x18)
x18=x41;
if(x39!=null&&x40!=null)
{
x39.style.width=x18+"px";
if(x39.offsetHeight<=x40.offsetHeight)
x42=x40.offsetHeight+40;
else
 x42=x39.offsetHeight+40;
}
if(x42>x19)
x19=x42;
x28.removeChild(x38);
}
this._f306=null;
if(this.domDiv)
{
this._f306=new _f314(x28,0,0,null,x17,x18,x19,x20,false,this,x37,{hideCloseButton:true},this.domDiv,this.id);
}
else
 {
if(x20=="MVInfoWindowStyle4"&&x16.length>1){
if(!x18||x18=="undefined"||x18<_f65.infoWindowTabsWidth)
x18=_f65.infoWindowTabsWidth;
if(!x19||x19=="undefined"||x19<_f65.infoWindowTabsHeight)
x19=_f65.infoWindowTabsHeight;
}
this._f306=new _f314(x28,0,0,x16,x17,x18,x19,x20,x22,this,x37,x23,null,this.id);
}
this._f77.push(x28);
x28.nid=id;
x28.winX=x14;
x28.winY=x15;
MVUtil._f70(x28,x37.x,x37.y);
x28.style.visibility="visible";
x28.style.zIndex="1200";
if(!x22)
{
var x43=0;
var x44=0;
var x39=null;
if(x20=="MVInfoWindowStyle1")
x39=document.getElementById("infowindow3table_"+this.parent._f144);
else if(x20=="MVInfoWindowStyle4")
x39=document.getElementById("infowindow4_"+this.parent._f144+"_"+this.id);
if(x39!=null)
{
x18=x39.offsetWidth;
x39.style.width=MVUtil._f26(x18);
x19=x39.offsetHeight;
x43=MVUtil._f80(x39);
x44=MVUtil._f81(x39);
}
if(x24&&(x20=="MVInfoWindowStyle1"||x20=="MVInfoWindowStyle4"))
return ;
var x45=x18;
var x46=x19;
var x47=this.parent._f139+x37.x+x43;
var x48=this.parent._f140+x37.y+x44;
var x49=0;
var x50=0;
if(x47<0)
{
if(this.parent._f139+x37.x<x47)
x49=this.parent._f139+x37.x-10;
else
 x49=x47;
}
else if(this.parent._f139+x37.x<0)
x49=this.parent._f139+x37.x-10;
else if(x47+x45>this.width)
{
if(this.parent._f139+x37.x>x47+x45)
x49=this.parent._f139+x37.x-this.width+10;
else
 x49=x47+x45-this.width;
}
else if(this.parent._f139+x37.x>this.width)
x49=this.parent._f139+x37.x-this.width+10;
if(x48<0)
{
if(this.parent._f140+x37.y<x48)
x50=this.parent._f140+x37.y-10;
else
 x50=x48;
}
else if(this.parent._f140+x37.y<0)
x50=this.parent._f140+x37.y-10;
else if(x48+x46>this.height)
{
if(this.parent._f140+x37.y>this.height)
x50=this.parent._f140+x37.y-this.height+10;
else
 x50=x48+x46-this.height;
}
else if(this.parent._f140+x37.y>this.height)
x50=this.parent._f140+x37.y-this.height+10;
if(x21)
this.setTimeout("this.parent.smoothScroll("+x49+","+x50+")",x21);
else
 this.parent.smoothScroll(x49,x50);
}
}
_f305.prototype._f303=function(x51,x52,x53,x54,x55,x56,x57,x58,x59,x60)
{
if(x58==null||x58=="")
{
x58=_f65._f312;
}
if(x51.length==0)
return;
if(x56&&x57)
{
this._f248(x51,x52,x53,x54,x55,x56,x57,x58,null,null,x60,true);
}
else if(x58=="MVInfoWindowStyle4")
this._f248(x51,x52,x53,x54,x55,0,0,x58,null,null,x60,true);
else
 this._f248(x51,x52,x53,x54,x55,_f65._f315,_f65._f316,x58,null,null,x60,true);
}
_f305.prototype._f317=function(x61,x62,x63,x64,x65,x66,x67)
{
var x68=new Array(4);
if(!x62)
x62="null";
x62=MVUtil._f43(x62," &nbsp;","  ");
var x69=0;
var x70=0;
var x71="";
var x72=12;
if(x62!="null")
{
if(x66)
x68[3]=x62;
else
 {
x69=x62.length;
x70++;
x71="<tr><td>"+this.replaceWhiteSpace(x62)+"</td></tr>";
}
}
x71="<table id='mvinfotable_"+this.parent._f144+"'>"+x71;
if(x63==null||x63.length==0){
x68[0]=x71;
if(x67=="MVInfoWindowStyle1")
{
x68[1]=0;
x68[2]=0;
}
else
 {
x68[1]=x62.length*x72+36;
x68[2]=27+30;
}
return x68;
}
var x73=0;
var x74=0;
x70+=x63.length;
x71+="<tr><td><table id='mvinfotable1_"+this.parent._f144+"'>";
for(var x75=0;x75<x63.length;x75++)
{
var x76="#bbbbbb";
if(x75%2==0)
x76="#dddddd";
if(x64!=null&&x64[x75]!=null&&x64[x75].length>x73)
x73=x64[x75].length;
if(x63[x75]==null)
x63[x75]="";
if(x63[x75].length>x74)
x74=x63[x75].length;
var x77=this.replaceWhiteSpace(x63[x75]);
x71=x71+"<tr bgcolor="+x76+">";
if(x64!=null)
{
var x78="";
if(x64[x75]==null)
x78="&nbsp;";
else
 x78=this.replaceWhiteSpace(x64[x75])+":";
x71=x71+"<td>"+x78+"</td>";
}
x71=x71+"<td align=left>"+x77+"</td></tr>";
}
var x79;
if(x69>(x73+x74))
x79=(x69+1)*x72+40;
else
 x79=(x73+x74+1)*x72+40;
x68[0]=x71+"</table></td></tr></table>";
if(x67=="MVInfoWindowStyle1"||x67=="MVInfoWindowStyle4")
{
x68[1]=0;
x68[2]=0;
}
else
 {
x68[1]=x79;
x68[2]=x70*11+80;
}
return x68;
}
_f305.prototype._f187=function(x80,x81,x82,x83,x84,x85,
x86,x87,x88,x89,
x90)
{
var x91=x88._f37;
var x92=x88._f318?x88._f318:_f65._f312;
var x93=x88._f319;
var x94=x88._f320;
var x95=x88._f255;
if(x82.length==0&&x83.length==0)
return ;
if(x86&&x87)
{
var x96=new MVInfoWindowTab(x94,x80);
var x97=new Array(x96);
this._f248(x82,x84,x85,x96,0,x86,x87,x92,x89,x90,x95,true);
}
else
 {
var x98=this._f317(x82,x83,x80,x81,x91,(x92=="MVInfoWindowStyle1"||x92=="MVInfoWindowStyle4")&&x93,x92);
var x96=new MVInfoWindowTab(x94?x94:x98[3],x98[0]);
var x97=new Array(x96);
if(x98[1]>0&&x98[2]>0||x92=="MVInfoWindowStyle1"||x92=="MVInfoWindowStyle4")
{
this._f248(x82,x84,x85,x97,0,x98[1],x98[2],x92,x89,x90,x95,true);
}
else
 this._f248(x82,x84,x85,x97,0,_f65._f315,
_f65._f316,x92,x89,x90,x95,true);
}
}
_f305.prototype._f321=function(x99,x100,x101,x102,x103,x104,x105,x106)
{
var x107=new MVInfoWindowTab(x105,x99);
var x108=new Array(x107);
this._f248("",x100,x101,x108,0,x102,x103,x104,null,null,x106);
}
_f305.prototype.deleteInfoWindow=function(x109)
{
if(MVInfoWindowStyle1._f311)
{
clearTimeout(MVInfoWindowStyle1._f311);
MVInfoWindowStyle1._f311=null;
}
var x110=this.parent._f144+"_"+this.id;;
if(MVInfoWindowStyle4._f311&&MVInfoWindowStyle4._f311[x110])
{
clearTimeout(MVInfoWindowStyle4._f311[x110]);
MVInfoWindowStyle4._f311[x110]=null;
}
var x111=0;
for(x111=0;x111<this._f77.length;x111++)
{
if(this._f77[x111]==x109){
this._f77.splice(x111,1);
}
}
MVUtil._f322(x109);
MVUtil._f201(x109,this.parent._f7);
this.div.removeChild(x109);
this._f204=false;
}
_f305.prototype.setTimeout=function(_f148,_f149)
{
var Ie="tempVar"+_f281;
_f281++;
eval(Ie+" = this;");
var oi=_f148.replace(/\\/g,"\\\\");
oi=oi.replace(/\"/g,'\\"');
return window.setTimeout(Ie+'._setTimeoutDispatcher("'+oi+'");'+Ie+" = null;",_f149);
}
_f305.prototype._setTimeoutDispatcher=function(func)
{
eval(func);
}
_f305.prototype.scrollInfoLayer=function()
{
for(var x112=0;x112<this._f77.length;x112++)
{
if(this._f77[x112].winX<this.parent._f71||this._f77[x112].winX>this.parent._f304||
this._f77[x112].winY<this.parent._f310||this._f77[x112].winY>this.parent._f73)
this._f77[x112].style.visibility="hidden";
else
 this._f77[x112].style.visibility="visible";
}
}
_f305.prototype.replaceWhiteSpace=function(x113)
{
var x114=x113.indexOf("<");
if(x114>=0&&x113.indexOf(">",x114)>=0)return x113;
x113=x113.replace(" ","&nbsp;");
return MVUtil._f43(x113,"  "," &nbsp;");
}
_f305.prototype._f170=function()
{
MVUtil._f201(this.div,this.parent._f7);
MVUtil._f201(this._f158,this.parent._f7);
this._f158=null;
this.div=null;
if(this._f77&&this._f77.length>0)
this._f77.pop();
}
_f305.prototype.showTabbedHtmlWindow=function(x115,x116,x117,x118,x119,x120,x121,x122)
{
this._f248(null,x116,x117,x121,x122,x118,x119,"MVInfoWindowStyle4",null,null,x120);
}
function MVFOI(x0,x1,x2,x3,x4,x5)
{
if(!x0||x0.length==0)
{
MVi18n._f6("MVFOI.constructor","MAPVIEWER-05503");
return null;
}
this.parent=null;
this.id=MVUtil._f241(x0);
this._f242=x1;
this.gtype=x1.getGType();
this.style=x2;
this._f3=x3;
this._f102="";
this._f203=null;
this.html="";
this._f243="";
this._f244="";
this.area="";
this._f245=null;
this._f246=new Array(4);
this._f158=null;
this.width=0;
this.height=0;
this._f69=true;
this.visible=true;
this._f88=false;
this._f247=false;
this._f248=true;
this._f249=true;
this._f185=null;
this._f189=null;
this._f191=null;
this._f197=null;
this._f93=new Object();
this._f194=true;
this._f250=0;
this._f251=0;
this._f174=true;
this.cursorStyle=null;
this._f252=null;
this._f253=null;
this.node=null;
if(this.gtype%10==1)
{
if(!x4)
this.width=10;
else if(x4>0)
this.width=x4;
if(!x5)
this.height=10;
else if(x5>0)
this.height=x5;
}
this._f254=null;
this._f202=null;
this._f255=null;
this._f256=100;
this._f257=100;
this._f62=null;
this.bgColor=null;
this.isHTMLFOI=null;
this.origgeom=null;
this.wr=null;
this.origFOI=null;
this.cloneFOI=null;
this.areacode=null;
this.createMarker=false;
this.opacity=1;
this.htmlmapIdSuffix=0;
}
MVFOI.prototype.setHTMLElement=function(x0,x1,x2)
{
this.html=x0;
if(x1)
this._f243=x1;
if(x2)
this._f244=x2;
}
MVFOI.createMarkerFOI=function(id,x3,x4,x5,x6)
{
var x7=new MVFOI(id,x3,"",x4,x5,x6);
x7.createMarker=true;
if((!x5||isNaN(x5))||(!x6||isNaN(x6))){
x7._f258=true;
var x8=function(x9,x10){
if(!x5||isNaN(x5))
x5=x9;
if(!x6||isNaN(x6))
x6=x10;
x7.width=x5;
x7.height=x6;
x7._f258=false;
x7=null;
}
MVUtil.getImageSize(x4,x8);
}
return x7;
}
MVFOI.createHTMLFOI=function(id,x11,x12,x13,x14)
{
var x15=new MVFOI(id,x11,"","",0,0);
x15.setHTMLElement(x12,x13,x14);
x15.isHTMLFOI=true;
return x15;
}
MVFOI.prototype.addEventListener=function(x16,x17)
{
this.setEventListener(x16,x17);
}
MVFOI.prototype.setEventListener=function(x18,x19)
{
if(x18==MVEvent.MOUSE_CLICK)
{
this._f185=x19;
}
else if(x18==MVEvent.MOUSE_RIGHT_CLICK)
{
this._f189=x19;
}
else if(x18==MVEvent.MOUSE_OVER)
{
this._f191=x19;
}
else if(x18==MVEvent.MOUSE_OUT)
{
this._f197=x19;
}
if(this._f88)
{
this._f252._f259(this);
}
}
MVFOI.prototype.attachEventListener=function(x20,x21)
{
MVUtil.attachEventListener(this._f93,x20,x21)
if(this._f88&&this._f252)
{
this._f252._f259(this);
}
}
MVFOI.prototype.detachEventListener=function(x22,x23)
{
MVUtil.detachEventListener(this._f93,x22,x23);
}
MVFOI.prototype.setBringToTopOnMouseOver=function(x24)
{
this._f194=x24;
}
MVFOI.prototype.setTopFlag=function(x25)
{
this._f247=x25;
}
MVFOI.prototype.enableInfoWindow=function(x26)
{
this._f248=x26;
}
MVFOI.prototype.enableInfoTip=function(x27)
{
this._f249=x27;
}
MVFOI.prototype.setFOIOrds=function(x28)
{
this._f245=MVUtil._f241(x28).toUpperCase();
}
MVFOI.prototype.setFOIGtype=function(x29)
{
this.gtype=x29;
}
MVFOI.prototype.setVisible=function(x30)
{
this.visible=x30;
if(this.parent)
this.parent._f260._f261(this,x30);
}
MVFOI.prototype.isVisible=function()
{
return this.visible;
}
MVFOI.prototype.getId=function()
{
return this.id;
}
MVFOI.prototype.setClickable=function(x31)
{
this._f69=x31;
}
MVFOI.prototype.setInfoTip=function(x32)
{
if(x32)
this._f69=true;
this._f158=x32;
}
MVFOI.prototype.setInfoWindow=function(x33,x34,x35,x36,x37,x38)
{
this._f203=x33;
this._f250=x34;
this._f251=x35;
this._f254=x36;
this._f202=x37;
this._f255=x38;
}
MVFOI.prototype.enableEventPropagation=function(x39)
{
this._f174=x39;
}
MVFOI.prototype.setZIndex=function(x40)
{
this._f256=x40;
if(this.node)
this.node.zIndex=x40;
}
MVFOI.prototype.setImageFormat=function(x41,x42)
{
if(x41)
{
this._f62=x41.toUpperCase();
if(this._f62=="PNG8"&&x42)
this.bgColor=x42;
}
}
MVFOI.prototype.getMBR=function()
{
var x43=new Array(4);
if(this.gtype%10==3&&this.elemInfo[2]==4)
{
x43[0]=parseFloat(this._f245[4]);
x43[1]=parseFloat(this._f245[3])-
Math.abs((parseFloat(this._f245[0])-parseFloat(this._f245[4])));
x43[2]=parseFloat(this._f245[0]);
x43[3]=parseFloat(this._f245[3]);
}
else
 {
x43[0]=parseFloat(this._f245[0]);
x43[1]=parseFloat(this._f245[1]);
x43[2]=parseFloat(this._f245[0]);
x43[3]=parseFloat(this._f245[1]);
for(var x44=2;x44<this._f245.length;x44=x44+2)
{
if(parseFloat(this._f245[x44])<x43[0])x43[0]=parseFloat(this._f245[x44]);
if(parseFloat(this._f245[x44])>x43[2])x43[2]=parseFloat(this._f245[x44]);
if(parseFloat(this._f245[x44+1])<x43[1])x43[1]=parseFloat(this._f245[x44+1]);
if(parseFloat(this._f245[x44+1])>x43[3])x43[3]=parseFloat(this._f245[x44+1]);
}
}
return x43;
}
MVFOI.prototype._f262=function(x45){
var x46=x45;
var x47="";
var x48=x46.length;
for(var x49=this.elemInfo.length;x49>0;x49=x49-3)
{
var x50=0;
if(this.elemInfo[x49-2]%10==3&&this.elemInfo[x49-1]==3){
for(var x51=0;x51<this.elemInfo[x49-3]-1;x51++)
x50=x46.indexOf(",",x50)+1;
var x52=x50;var x53=x50;if(x49==this.elemInfo.length){
x52=x46.length;
for(var x54=0;x54<2;x54++)
x53=x46.indexOf(",",x53)+1;
x53--;
}
else
 {
for(var x55=0;x55<4;x55++)
{
x52=x46.indexOf(",",x52)+1;
if(x55==1)
x53=x52;
}
x52--;
x53--;
}
x47=x46.substring(x50,x52);
var x56=new Array(4);
var x57=1;
var x58=1;
for(var x59=0;x59<4;x59++){
x58=x47.indexOf(",",x57);
if(x59==3)x58=x47.length;
if(x59==0)x57--;
x56[x59]=x47.substring(x57,x58);
x57=x58+1;
}
var x60=x56[0]+","+x56[3];
var x61=x56[2]+","+x56[1];
this.elemInfo[x49-1]=1;
if(x49==this.elemInfo.length){
x46=x46+","+x61;
}
else
 {
this.elemInfo[x49-3+3]=this.elemInfo[x49-3+3]*1+4;
x46=x46.substring(0,x52)+","+x61+","+
x46.substring(x52+1,x46.length);
}
x46=x46.substring(0,x53)+","+x60+","+
x46.substring(x53+1,x46.length);
}
}
return x46;
}
MVFOI.prototype._f263=function(x62){
var x63=x62[0]+","+x62[1];
var x64="";
for(var x65=this.elemInfo.length;x65>0;x65=x65-3)
{
var x66=this.elemInfo[x65-3]-1;var x67=this.elemInfo[x65]-1;if(x65==this.elemInfo.length)
{
x67=x62.length;}
var x68=x62[x66]+","+x62[x66+1];
var x69="";
var x70=x67-1;
for(var x71=x66;x71<=x70;x71++)
{
x69+=x62[x71]+",";
}
var x72=false;
if(x62[x66]!=x62[x67-1]||x62[x66+1]!=x62[x67])
{
x69+=x68;
x72=true;
}
if(this.elemInfo.length==3)
{
return x69;
}
if(x65==3){
x64=x69+","+x64;
}
else
 {
if(x72)
x69+=","+x63;
else
 x69+=x63;
if(x65==this.elemInfo.length)
{
x64=x69;
}
else
 {
x64=x69+","+x64;
}
}
}
return x64;
}
MVFOI.prototype._f264=function(x73)
{
var x74=new Array(this._f245.length);
var x75=new Array(this._f246[0],this._f246[1],this._f246[2],this._f246[3]);if(x75[0]<x73._f260.minX)x75[0]=x73._f260.minX;
if(x75[1]<x73._f260.minY)x75[1]=x73._f260.minY;
if(x75[3]>x73._f260.maxY)x75[3]=x73._f260.maxY;
var x76=x75[3]-x75[1];
for(var x77=0;x77<this._f245.length;x77++)
{
if(x77%2==0)
{
x74[x77]=Math.floor((this._f245[x77]-x75[0])*x73._f72+0.5);
}
else
 x74[x77]=Math.floor((x76-(this._f245[x77]-x75[1]))*x73._f74+0.5);
}
x75=null;
return x74;
}
function _f265(x0,x1)
{
var x2=new Array(x1[0],x1[1],x1[2],x1[3]);if(x2[0]<x0._f260.minX)x2[0]=x0._f260.minX;
if(x2[1]<x0._f260.minY)x2[1]=x0._f260.minY;
if(x2[3]>x0._f260.maxY)x2[3]=x0._f260.maxY;
var x3=(x1[2]+x1[0])/2;
var x4=(x1[3]+x1[1])/2
var x5=(x1[2]-x1[0])/2;
var x6=x2[3]-x2[1];
var x7;
var x8="";
var x9=2*Math.PI;
for(var x10=0;x10<90;x10++)
{
if(x10%2==0){
x7=Math.floor((x3+x5*Math.cos((x9*x10)/90)-x2[0])*
x0._f72+0.5);
}
else
 {
x7=Math.floor((x6-(x4+x5*Math.sin((x9*x10)/90)-
x2[1]))*x0._f74+0.5);
}
if(x10==0)x8+=x7;
else
 x8+=","+x7;
}
x2=null;
return x8;
}
MVFOI.prototype._f266=function(x78)
{
if(this.area==null||this.area=="")
{
this.area="";
if(this.gtype%10==3&&this.elemInfo[2]==4)
{
this.area=_f265(x78,this._f246);
}
else if(this.gtype%10==3||this.gtype%10==7)
{
var x79=this._f264(x78);
this.area=this._f263(x79);
}
}
}
MVFOI.prototype.animateToNewLocation=function(x80,x81)
{
var x82=this;
var x83=this._f252;
var x84=function(x85)
{
if(x85)
x80=x85;
if(x80.equals(x82._f242))
return;
if(x82.overlayFOI)
{
var x86=x83.parent.getFOIGroup(x82._f267);
x86._f268(x82);
x83._f269(x82);
}
if(x81==null)
x81=100;
x83.parent._f260.foiToNewLocation(x82,x80,x81);
}
if(this.overlayFOI)
x83=this.overlayFOI._f252;
if(!x80.srid)
x80.srid=x83.parent.getSrid();
if(x80.srid&&(x80.srid!=this._f242.srid))
x80=x83.parent.transformGeom(x80,this._f242.srid,null,x84);
else
 x84();
}
MVFOI.prototype.stopAnimation=function()
{
if(this.move_id!=null){
clearTimeout(this.move_id);
this.move_id=null;
var x87=this;
}
}
MVFOI.prototype.setMouseCursorStyle=function(x88)
{
this.cursorStyle=x88;
if(this._f270)
{
if(this._f270 instanceof Array)
{
for(var x89=0;x89<this._f270.length;x89++)
{
MVUtil._f162(this._f270[x89],x88);
}
}
else
 MVUtil._f162(this._f270,x88);
}
if(this.cloneFOI)
this.cloneFOI.setMouseCursorStyle(x88);
}
MVFOI.prototype.getGeometry=function()
{
if(this.origgeom)
return this.origgeom;
return this._f242;
}
MVFOI.prototype.setRenderingStyle=function(x90,x91,x92)
{
this.style=x90;
if(typeof x91!='undefined')
{
if(x91)
this.width=x91;
else
 this.width=0;
}
if(typeof x92!='undefined')
{
if(x92)
this.height=x92;
else
 this.height=0;
}
}
MVFOI.prototype.setWidth=function(x93)
{
if(!x93)
x93=0;
this.width=x93;
}
MVFOI.prototype.setHeight=function(x94)
{
if(!x94)
x94=0;
this.height=x94;
}
MVFOI.prototype.updateImageURL=function(x95,x96,x97)
{
this._f102=x95;
var x98=0;
var x99=0;
if(x96)
{
x98=this.width-x96;
this.width=x96;
}
if(x97)
{
x99=this.height-x97;
this.height=x97;
}
var x100=function(x101,x102,x103,x104,x105,x106)
{
if(x101)
{
var x107=MVUtil._f80(x101)+x102/2;
var x108=MVUtil._f81(x101)+x103/2;
if(x106)
{
x106.src=x95;
MVUtil._f70(x101,x107,x108);
}
else if(x101.src)
{
x101.src=x95;
MVUtil._f70(x101,x107,x108);
}
else if(x101.childNodes.length>0&&x101.childNodes[0].style.filter)
{
var x109=MVUtil._f43(x95,"(","%28");
x109=MVUtil._f43(x109,")","%29");
x101.childNodes[0].style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x109+"', sizingMethod='image');";
MVUtil._f70(x101,x107,x108);
}
else
 {
x104._f271(x105.id);
x104._f272(x105);
}
}
}
if(this.node instanceof Array)
{
for(var x110=0;x110<this.node.length;x110++)
{
var x111
if(this._f253)
x111=this._f253[x110];
x100(this.node[x110],x98,x99,this._f252,this,x111);
}
}
else if(this.node)
x100(this.node,x98,x99,this._f252,this,this._f253);
else if(this.overlayFOI)
{
this._f3=x95;
this.width=x96;
this.height=x97;
}
}
MVFOI.prototype.updateGeometry=function(x112)
{
var x113=this._f242;
this._f242=x112;
if(this._f88)
{
var x114=this;
var x115=this._f252;
var x116=function(x117)
{
if(x117)
x114._f242=x117;
if(x114._f242.getGType()==1&&x113.getGType()==1){
if(x114._f242.equals(x113))
return;
var x118;
x114.x=x114._f242.getPointX();
x114.x=MVUtil.keepInCSBoundary(x115.parent,x114.x);
x114.y=x114._f242.getPointY();
x114._f245=x114._f242.getFirstPoint();
x114._f245=MVUtil.keepOrdinatesInCSBoundary(x115.parent,x114._f245);
x114._f242.sdo_ordinates=x114._f245;
if(x114._f245.length>0)
x114._f242.sdo_point.x=x114._f245[0];
var x119=(x115.parent._f90-x115._f22)*x115.parent._f72;
var x120=(x115.parent._f91-x115._f23)*x115.parent._f74;
if(x114.overlayFOI)
{
var x121=x115.parent.getFOIGroup(x114._f267);
x121._f268(x114);
if(!x121._f273(x114))
x115._f269(x114);
return;
}
if(x115.around)
{
var x122=x114.wr;
var x123=0;
var x124=x115.parent.msi._f166;
var x125=x115.parent.msi._f165;
var x126=x125-x124;
x114.wr=new Array();
if(x114.areacode!=null){
var x123=x115.maparea[0].n;
x123+=x114.areacode;
x114.wr.push(x123)
}
else
 for(var x127=0;x127<x115.maparea.length;x127++){
if(x114.x>x115.maparea[x127].minx&&x114.x<x115.maparea[x127].maxx)
{
x114.wr.push(x115.maparea[x127].n);
}
}
var x128=x122==null?0:x122.length;
var x129=x128<x114.wr.length?x128:x114.wr.length;
for(var x127=0;x127<x129;x127++)
{
x118=MVUtil._f164(x115.parent,x115.minX,x115.minY,
x115.maxX,x115.maxY,
x115.width,x115.height,
x114.x+x114.wr[x127]*(x125-x124),x114.y);
x118[0]-=x119;
x118[1]+=x120;
if(x114.node instanceof Array)
MVUtil._f70(x114.node[x127],x118[0]-x114.width/2,x118[1]-x114.height/2);
else if(x114.node)
MVUtil._f70(x114.node,x118[0]-x114.width/2,x118[1]-x114.height/2);
}
if(x128<x114.wr.length)
{
x115._f168(x114.node,x114,x114._f252,x128);
}
else
 {
for(var x127=x128-1;x127>=x114.wr.length;x127--)
{
x114.node[x127].parentNode.removeChild(x114.node[x127]);
MVUtil._f87(x114.node[x127]);
x114.node.pop();
x114._f253.pop();
x114._f270.pop();
}
}
}
else
 {
x118=MVUtil._f164(x115.parent,x115.minX,x115.minY,
x115.maxX,x115.maxY,
x115.width,x115.height,
x114.x,x114.y);
x118[0]-=x119;
x118[1]+=x120;
MVUtil._f70(x114.node,x118[0]-x114.width/2,x118[1]-x114.height/2);
}
}
else
 {
x114.gtype=x114._f242.getGType()
x114.reDraw();
}
}
if(this.overlayFOI)
x115=this.overlayFOI._f252;
if(!this._f242.srid)
this._f242.srid=x115.parent.getSrid();
if(this._f242.srid!=x115.parent.getSrid())
{
x115.parent.transformGeom(this._f242,x115.parent.srid,null,x116);
}
else
 x116();
}
}
MVFOI.prototype.reDraw=function()
{
if(this._f88)
{
if(this._f267>=0)
{
if(this._f252==null)
{
return;
}
var x130=this._f252.parent.getFOIGroup(this._f267);
x130.removeFOI(this);
x130.addFOI(this);
return;
}
this._f252._f271(this.id);
this._f252._f272(this);
}
}
MVFOI.prototype.setOpacity=function(x131)
{
if(isNaN(x131))
{
return;
}
if(x131>1||x131<0)
return;
else
 this.opacity=x131;
if(this._f88)
{
var x132=function(x133)
{
x133.style.opacity=x131;
if(x131==1)
x133.style.filter="";
else
 x133.style.filter="alpha(opacity="+x131*100+")";
}
if(this.node instanceof Array)
{
for(var x134=0;x134<this.node.length;x134++)
x132(this.node[x134]);
}
else
 x132(this.node);
}
}
MVFOI.prototype._f274=function()
{
if(this._f185||(this._f93[MVEvent.MOUSE_CLICK]!=null&&this._f93[MVEvent.MOUSE_CLICK].length!=0)||
this._f189||(this._f93[MVEvent.MOUSE_RIGHT_CLICK]!=null&&this._f93[MVEvent.MOUSE_RIGHT_CLICK].length!=0)||
this._f191||(this._f93[MVEvent.MOUSE_OVER]!=null&&this._f93[MVEvent.MOUSE_OVER].length!=0)||
this._f197||(this._f93[MVEvent.MOUSE_OUT]!=null&&this._f93[MVEvent.MOUSE_OUT].length!=0)||
(this._f93[MVEvent.MOUSE_MOVE]!=null&&this._f93[MVEvent.MOUSE_MOVE].length!=0)||
this._f203||this._f158||this.cursorStyle)
return true;
else
 return false;
}
MVFOI.prototype._f170=function()
{
this.node=null;
this._f270=null;
this._f253=null;
}
function _f275(x0)
{
this._f276=[];
this.parent=x0;
var x1=null;
this.minX=0;
this.minY=0;
this.maxX=0;
this.maxY=0;
this._f18=0;
this._f19=0;
this._f47=false;
this.div=document.createElement("div");
this.width=0;
this.height=0;
this.count=0;
this._f22=this.parent._f90;
this._f23=this.parent._f91;
this._f92=null;
this._f93=new Object();
this.div.style.position="absolute";
this.div.style.zIndex=120;
this._f277=document.createElement("div");
this._f277.style.position="absolute";
this._f277.style.zIndex=180;
this.move_id=null;
this.time=20;
if(this.parent.div.appendChild)
{
this.parent.div.appendChild(this.div);
this.parent.div.appendChild(this._f277);
}
else
 {
document.body.appendChild(this.div);
document.body.appendChild(this._f277);
}
this.mouseL1=MVSdoGeometry.createPoint(0,0);
this.mouseL2=this.mouseL1;
this.maparea=null;
this.around=false;
}
_f275.prototype.foiToNewLocation=function(x135,x136,x137)
{
if(x137)
x135.time=x137;
else
 x135.time=this.time;
var x138=new Array();
var x139=new Array();
if(x136.getFirstPoint()){
x138.push(x136.getPointX());
x139.push(x136.getPointY());
}
else
 {
var x140=x136.getDimensions();
for(var x141=0;x141<=x136.getOrdinates().length-x140;x141=x141+x140)
{
x138.push(x136.getOrdinates()[x141]);
x139.push(x136.getOrdinates()[x141+1]);
}
}
var x142=0;
if(x138.length<=x142||x139.length<=x142)
return;
if(x135.move_id)
{
clearTimeout(x135.move_id);
x135.move_id=null;
}
x135.startX=x135.x;
x135.startY=x135.y;
x135.move_xarray=x138;
x135.move_yarray=x139;
x135.move_seq=x142;
var x143=x135.id;
if(x135._f267>=0)
x143+=","+x135._f267;
x135.move_id=this.setTimeout("this.moveFoi(\""+x143+"\")",x135.time);
}
_f275.prototype.moveFoi=function(x144)
{
var x145=null;
var x146=x144.split(",");
if(x146.length>1)
{
var x147=this.parent.getFOIGroup(x146[1]);
x145=x147._f278(x146[0]);
}
else
 x145=this._f279(x146[0]);
var x148=x145.node;
if(x148 instanceof Array)
x148=x148[0];
var x149=parseInt(x148.style.left);
var x150=parseInt(x148.style.top);
var x151=x145.move_seq;
var x152=x145.move_xarray;
var x153=x145.move_yarray;
var x154=x152[x151];
var x155=x153[x151];
if(x145.tx&&x145.tx.length>0)
x154+=x145.wr[0]*(this.parent.msi._f165-this.parent.msi._f166);
var x156=0;
x154=MVUtil.transLongitudeOnWarpAroungMap(this.parent,x145.x,x154);
if(this.around)
{
x156=x145.wr[0]*(this.parent.msi._f165-this.parent.msi._f166);
}
var x157=MVUtil._f164(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this.width,this.height,x154+x156,x153[x151]);
var x158=(this.parent._f90-this._f22)*this.parent._f72;
var x159=(this.parent._f91-this._f23)*this.parent._f74;
x157[0]=Math.round(x157[0]-x158-x145.width/2);
x157[1]=Math.round(x157[1]+x159-x145.height/2);
var x160=x157[0]-x149;
var x161=x157[1]-x150;
var x162=Math.sqrt(x160*x160+x161*x161);
var x163=40;
if(x163>x162)
{
x148.style.left=MVUtil._f26(x157[0]);
x148.style.top=MVUtil._f26(x157[1]);
if(x145.node instanceof Array)
{
for(var x164=1;x164<x145.node.length;x164++)
{
x145.node[x164].style.left=MVUtil._f26(parseInt(x145.node[x164].style.left)+x160);
x145.node[x164].style.top=MVUtil._f26(parseInt(x145.node[x164].style.top)+x161);
}
}
clearTimeout(x145.move_id);
x145.move_id=null;
x145._f242.sdo_point.x=x152[x151];
x145._f242.sdo_point.y=x153[x151];
x145.x=x152[x151];
x145.y=x153[x151];
x151++;
if(x152.length<=x151||x153.length<=x151)
{
return;
}
if(x152.length>1)
x145.startX=x152[x151-1];
if(x153.length>1)
x145.startY=x153[x151-1];
x145.move_seq=x151;
var x144=x145.id
if(x145._f267>=0)
x144+=","+x145._f267;
x145.move_id=this.setTimeout("this.moveFoi(\""+x144+"\")",x145.time);
}
else
 {
var x165=Math.round(x163*x160/x162);
var x166=Math.round(x163*x161/x162);
var x167=parseInt(x148.style.left)+x165;
var x168=parseInt(x148.style.top)+x166;
x148.style.left=MVUtil._f26(x167);
x148.style.top=MVUtil._f26(x168);
if(x145.node instanceof Array)
{
for(var x164=1;x164<x145.node.length;x164++)
{
x145.node[x164].style.left=MVUtil._f26(parseInt(x145.node[x164].style.left)+x165);
x145.node[x164].style.top=MVUtil._f26(parseInt(x145.node[x164].style.top)+x166);
}
}
x145.x=(x154-x145.x)/x160*x165+x145.x;
x145.y=(x155-x145.startY)*(x145.x-x145.startX)/(x154-x145.startX)+x145.startY;
if(this.around)
{
var x169=MVUtil.keepInCSBoundary(this.parent,x145.x);
var x170;
if(x169>x145.x)
x170=-1;
else if(x169<x145.x)
x170=1;
if(x170)
{
x145.x=x169;
if(x145.wr)
for(var x164=0;x164<x145.wr.length;x164++)
x145.wr[x164]+=x170;
}
}
else
 {
var x171=this.parent.msi._f165-this.parent.msi._f166;
if(x145.x<this.parent.msi._f166)
{
x145.x+=x171;
x148.style.left=MVUtil._f26(x167+x171*this.parent._f72);
}
else if(x145.x>this.parent.msi._f165)
{
x145.x-=x171;
x148.style.left=MVUtil._f26(x167-x171*this.parent._f72);
}
}
x145._f242.sdo_point.x=x145.x;
x145._f242.sdo_point.y=x145.y;
var x144=x145.id
if(x145._f267>=0)
x144+=","+x145._f267;
x145.move_id=this.setTimeout("this.moveFoi(\""+x144+"\")",x145.time);
}
}
_f275.prototype.setTimeout=function(_f148,_f149)
{
var Ie="tempVar"+_f281;
_f281++;
eval(Ie+" = this;");
var oi=_f148.replace(/\\/g,"\\\\");
oi=oi.replace(/\"/g,'\\"');
return window.setTimeout(Ie+'._setTimeoutDispatcher("'+oi+'");'+Ie+" = null;",_f149);
}
_f275.prototype._setTimeoutDispatcher=function(func)
{
eval(func);
}
_f275.prototype.setSize=function(x172,x173)
{
this.width=x172;
this.height=x173;
}
_f275.prototype._f261=function(x174,x175)
{
var x176=x174.id;
for(var x177=0;x177<this._f276.length;x177++)
{
if(this._f276[x177].id==x176)
{
this._f276[x177].visible=x175;
if(!x175&&this.parent._f76._f77.length>0)
if(this.parent._f76._f77[0].nid==x176)
{
this.parent._f76.deleteInfoWindow(this.parent._f76._f77[0]);
}
}
}
var x178=x174.node
if(x174._f267>=0)
{
var x179=this.parent.getFOIGroup(x174._f267);
x175=x175&&x179._f282();
}
if(!x178&&x175&&(!x174.cloneFOI||!x174.cloneFOI.node))
{
if(this.parent._f283)
{
this.parent._f260._f269(x174,true);
}
return ;
}
if(x178 instanceof Array)
{
for(var x180=0;x180<x178.length;x180++)
{
if(x175)
x178[x180].style.visibility="visible";
else
 x178[x180].style.visibility="hidden";
}
}
else
 {
if(x178){
if(x175)
x178.style.visibility="visible";
else
 x178.style.visibility="hidden";
}
if(x174.cloneFOI&&x174.cloneFOI.node)
{
if(x175)
x174.cloneFOI.node.style.visibility="visible";
else
 x174.cloneFOI.node.style.visibility="hidden";
}
}
}
_f275.prototype._f47=function()
{
return this._f47;
}
_f275.prototype._f80=function()
{
if(this._f47)
return this._f18;
else
 return MVUtil._f80(this.div);
}
_f275.prototype._f81=function()
{
if(this._f47)
return this._f19;
else
 return MVUtil._f81(this.div);
}
_f275.prototype._f84=function()
{
return this.width;
}
_f275.prototype._f85=function()
{
return this.height;
}
_f275.prototype._f49=function()
{
return this.minX;
}
_f275.prototype._f50=function()
{
return this.minY;
}
_f275.prototype._f51=function()
{
return this.maxX;
}
_f275.prototype._f52=function()
{
return this.maxY;
}
_f275.prototype._f56=function()
{
return this.div;
}
_f275.prototype.getTopContainer=function()
{
return this._f277;
}
_f275.prototype._f284=function(x181)
{
this._f92=x181;
}
_f275.prototype._f285=function(x182)
{
for(var x183=0;x183<this.div.childNodes.length;x183++)
{
if(x182==(this.div.childNodes[x183]).id)
{
var x184=this.div.childNodes[x183];
this.div.removeChild(x184);
MVUtil._f87(x184);
return;
}
}
for(var x183=0;x183<this._f277.childNodes.length;x183++)
{
if(x182==(this._f277.childNodes[x183]).id)
{
var x184=this._f277.childNodes[x183];
this._f277.removeChild(x184);
MVUtil._f87(x184);
return;
}
}
}
_f275.prototype._f86=function()
{
var x185=this._f276.length;
for(var x186=0;x186<x185;x186++)
{
var x187=this._f276.pop();
MVUtil._f286(x187);
if(this.parent._f76._f77.length>0)
if(this.parent._f76._f77[0].nid==x187.id)
{
this.parent._f76.deleteInfoWindow(this.parent._f76._f77[0]);
}
}
MVUtil._f201(this.div,this.parent._f7);
MVUtil._f201(this._f277,this.parent._f7);
}
_f275.prototype._f271=function(x188,x189)
{
var x190=null;
if(x189==null)
{
for(var x191=0;x191<this._f276.length;x191++)
{
if(this._f276[x191].id==x188)
{
x190=this._f276[x191];
if(x190.cloneFOI)
{
this._f271(x190.cloneFOI.id);
x190.cloneFOI.origFOI=null;
x190.cloneFOI._f252=null;
x190.cloneFOI=null;
}
if(this.parent._f76._f77.length>0)
if(this.parent._f76._f77[0].nid==x188)
{
this.parent._f76.deleteInfoWindow(this.parent._f76._f77[0]);
}
this._f276[x191]=this._f276[this._f276.length-1];
x190.parent=null;
MVUtil._f286(this._f276.pop());
break;
}
}
}
else
 x190=x189;
if(x190)
{
if(x190.move_id!=null){
clearTimeout(x190.move_id);
x190.move_id=null;
}
if(x190.node)
{
var x192=x190.node
if(x192 instanceof Array)
{
for(var x193=0;x193<x192.length;x193++)
{
x192[x193].parentNode.removeChild(x192[x193]);
MVUtil._f87(x192[x193]);
}
}
else if(x190.node.parentNode)
{
x192.parentNode.removeChild(x192);
MVUtil._f87(x192);
}
}
x190._f170();
if(x189)
return x190;
for(var x194=0;x194<this._f277.childNodes.length;x194++)
{
if(this._f277.childNodes[x194].id==x188)
{
var x195=this._f277.childNodes[x194];
this._f277.removeChild(x195);
MVUtil._f87(x195);
x195=null;
break;
}
}
}
return x190;
}
_f275.prototype._f279=function(x196)
{
for(var x197=0;x197<this._f276.length;x197++)
{
if(x196==this._f276[x197].id)
{
return this._f276[x197];
}
}
return null;
}
_f275.prototype._f272=function(x198)
{
x198.parent=this.parent;
this._f276.push(x198);
if(this.parent._f283&&(x198.visible==true))
{
this._f269(x198,true);
}
}
_f275.prototype._f287=function(x199)
{
var x200=x199._f246[0];
var x201=x199._f246[1];
var x202=x199._f246[2];
var x203=x199._f246[3];
var x204=(this.minX==0?x200:this.minX);
var x205=(this.minY==0?x201:this.minY);
var x206=(this.maxX==0?x202:this.maxX);
var x207=(this.maxY==0?x203:this.maxY);
var x208=x200<x204?x204:x200;
var x209=x201<x205?x205:x201;
var x210=x202<x206?x202:x206;
var x211=x203<x207?x203:x207;
var x212;
if(this.around)
x212=Math.abs(x202-x200);
else
 x212=Math.abs(x210-x208);
var x213=Math.abs(x211-x209);
var x214={"x":x208,"y":x211,"width":x212,"height":x213}
return x214;
}
_f275.prototype._f269=function(x215,x216)
{
if(!x215._f242.srid)
x215._f242.srid=this.parent.getSrid();
var x217=this;
var x218=false;
var x219=function(x220)
{
if(x220)
x215._f242=x220;
if(x215.gtype%10==1)
{
x215._f245=x215._f242.getFirstPoint();
x215._f245=MVUtil.keepOrdinatesInCSBoundary(x217.parent,x215._f245);
x215._f242.sdo_ordinates=x215._f245;
if(x215._f245.length>0)
x215._f242.sdo_point.x=x215._f245[0];
}
else
 {
x215.elemInfo=x215._f242.sdo_elem_info.toString().split(",");
var x221=x215._f242.sdo_ordinates;
if(!x215.origFOI)
{
x221=MVUtil.keepOrdinatesInCSBoundary(x217.parent,x221);
if(x217.parent.wraparound)
{
x215.origgeom=x215._f242.clone();
x215._f242.sdo_ordinates=x221;
var x222=x215._f242.getOrdinatesOfElements();
x221=new Array();
for(var x223=0;x223<x222.length;x223++)
x221=x221.concat(MVUtil.transOrdinatesOnWarpAroungMap(x217.parent,x222[x223]));
x215._f242.sdo_ordinates=x221;
}
else if(!x217.parent.wraparound&&MVUtil.crossDateLine(x217.parent,x221))
{
x215.origgeom=x215._f242.clone();
var x222=x215._f242.getOrdinatesOfElements();
x221=new Array();
for(var x223=0;x223<x222.length;x223++)
x221=x221.concat(MVUtil.transOrdinatesOnWarpAroungMap(x217.parent,x222[x223]));
x215._f242.sdo_ordinates=x221;
x218=true;
}
}
x221=x221.toString();
while(x221.indexOf(" ")!=-1)
{
x221=MVUtil._f43(x221," ","");
}
for(var x224=0;x224<x215.elemInfo.length;x224+=3){
if(x215.elemInfo[x224+2]*1==3){
x221=x215._f262(x221);
break;
}
}
x215._f245=x221.split(",");
}
x215._f246=x215.getMBR();
if(x218&&x215._f245.length>0&&!x215.cloneFOI)
{
var x225=x215._f242.clone();
x225.sdo_ordinates=MVUtil.duplicateCrossDateLineOrds(x217.parent,x215._f245,x215._f246);
var x226=MVUtil.cloneObject(x215);
x226.id="-CL"+x215.id;
x226._f242=x225;
x226.origFOI=x215;
x215.cloneFOI=x226;
x217._f272(x226);
}
x215.x=x215._f246[0];
x215.y=x215._f246[3];
if(x215.gtype%10!=1)
{
x215.width=x215._f246[2]-x215._f246[0];
x215.height=x215._f246[3]-x215._f246[1];
}
x217._f288(x215,x216);
}
if(x215._f242.srid&&(x215._f242.srid!=this.parent.srid))
this.parent.transformGeom(x215._f242,this.parent.srid,null,x219);
else
 x219();
}
_f275.prototype._f288=function(foi,check)
{
var styleStr=null;
if(foi.style)
{
if(foi.style.getXMLString)
styleStr=foi.style.getXMLString();
else
 styleStr=foi.style;
}
if(foi.gtype%10==1)
{
if(styleStr)
{
foi._f102=foi._f3+"?request=getpoiimage&version=1.0"+
"&poistyle="+encodeURIComponent(styleStr)+
this.getImageParameters(foi);
if(!(foi.id.length>3&&MVUtil._f153(foi.id,"-OL")))
foi._f102+="&width="+foi.width+"&height="+foi.height;
}
if(this.around||foi.wr)
{
foi.wr=new Array();
if(foi.areacode==null)
{
var n=0;
var bbminx=this.parent.msi._f166;
var bbmaxx=this.parent.msi._f165;
for(var i=0;i<this.maparea.length;i++){
if(foi.x>this.maparea[i].minx&&foi.x<this.maparea[i].maxx){
foi.wr.push(this.maparea[i].n);
}
}
}
else{
var n=this.maparea[0].n;
n+=foi.areacode;
foi.wr.push(n)
}
}
else
 foi.wr=null;
this._f289(foi);
return;
}
var _f290=foi._f242.toString();
var url;
var reqParas;
if(this.around||foi.wr)
this._f132(foi);
else
 foi.wr=null;
var reqMinX=this.minX;
var reqMaxX=this.maxX;
if(foi.wr&&foi.wr.length>0)
{
var coverWidth=this.parent.msi._f165-this.parent.msi._f166;
var tOrds=foi._f242.sdo_ordinates;
var crossdl=MVUtil.crossDateLine(this.parent,tOrds);
var middle=this.parent.msi._f166+coverWidth/2;
if(crossdl){
if((this.maparea.length>1||(this.maparea.length==1&&foi._f246[2]<this.maparea[0].minx))
&&foi.x<middle&&foi.x<this.parent.msi._f166){
foi.wr[0]++;
}
else if((this.maparea.length==1&&foi._f246[0]>this.maparea[0].maxx)
&&(foi.x>middle||foi._f246[2]>middle))
{
foi.wr[0]--;
}
if(foi.width>(this.maxX-this.minX)){
reqMinX=this.minX-foi.wr[0]*coverWidth;
reqMaxX=this.maxX-foi.wr[0]*coverWidth;
if(reqMinX>foi.x)
foi.x=reqMinX;
}else{
reqMinX=foi._f246[0];
reqMaxX=foi._f246[2];
}
}else if(!crossdl&&foi.width>(this.maxX-this.minX)){
reqMinX=this.minX-foi.wr[0]*coverWidth;
reqMaxX=this.maxX-foi.wr[0]*coverWidth;
if(reqMinX>foi.x)
foi.x=reqMinX;
}else{
reqMinX=foi._f246[0];
reqMaxX=foi._f246[2];
}
}
else
 {
if(this.maxX>this.parent.msi._f165)
reqMaxX=this.parent.msi._f165;
if(this.minX<this.parent.msi._f166)
reqMinX=this.parent.msi._f166;
if(foi._f246[2]>this.parent.msi._f165)
foi._f246[2]=this.parent.msi._f165;
if(foi._f246[0]<this.parent.msi._f166)
{
foi._f246[0]=this.parent.msi._f166;
foi.x=foi._f246[0];
}
}
var reqMinY=this.minY;
var reqMaxY=this.maxY;
if(this.maxY>this.parent.msi._f291)
reqMaxY=this.parent.msi._f291;
if(this.minY<this.parent.msi._f292)
reqMinY=this.parent.msi._f292;
if(foi._f246[1]<this.parent.msi._f292)
foi._f246[1]=this.parent.msi._f292;
if(foi._f246[3]>this.parent.msi._f291)
{
foi._f246[3]=this.parent.msi._f291;
foi.y=foi._f246[3];
}
reqMinX=Math.floor(reqMinX*this.parent._f72)/this.parent._f72;
reqMaxX=Math.ceil(reqMaxX*this.parent._f72)/this.parent._f72;
reqParas="&version=1.0"+"&ratx="+this.parent._f72+"&raty="+
this.parent._f74+'&bbox='+
reqMinX+':'+reqMinY+':'+reqMaxX+':'+reqMaxY+
this.getImageParameters(foi);
url=foi._f3+"?request=getfigimage"+reqParas+"&figord="+_f290;
if(_f65._f66=="IF")
url+="&figstyle="+encodeURIComponent(encodeURIComponent(styleStr));
else
 url+="&figstyle="+encodeURIComponent(styleStr);
try
{
var _f293=this;
var localDomain=MVUtil.isLocalDomain(foi._f3);
var xmlHttp=localDomain||MVMapView._f117;
var _f294=MVUtil.getXMLHttpRequest(xmlHttp);
_f294.open("POST",MVUtil._f119(foi._f3),true);
_f294.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
_f294.onreadystatechange=MVUtil._f103(_f294,function()
{
try
{
if(this.readyState!=4){
return;
}
if(this.status==200)
{
if(this.responseText.indexOf("imgurl")>=0)
{
var res=null;
eval("res="+this.responseText);
foi._f102=res.imgurl;
if(res.area&&res.area!="")
foi.area=res.area;
if(res.io)
foi.io=res.io;
if(check)
{
if(foi._f247)
for(var td=0;td<_f293._f277.childNodes.length;td++)
{
if(_f293._f277.childNodes[td].id==foi.id)
{
_f293._f277.removeChild(_f293._f277.childNodes[td]);
break;
}
}
else
 for(var td=0;td<_f293.div.childNodes.length;td++)
{
if(_f293.div.childNodes[td].id==foi.id)
{
_f293.div.removeChild(_f293.div.childNodes[td]);
break;
}
}
}
_f293._f289(foi);
}
}
}
catch(e)
{
MVi18n._f6("MVIndFOIsControl.postAddAndDisplayIndFOI","MAPVIEWER-05500",e,
_f293.parent?_f293.parent._f7:null);
}
});
_f294.send(MVUtil._f120(foi._f3,"request=getfig"+reqParas+"&figord="+_f290+"&figstyle="+encodeURIComponent(styleStr)));
}
catch(ex)
{
MVi18n._f6("MVIndFOIsControl.postAddAndDisplayIndFOI","MAPVIEWER-05511",ex,
this.parent?this.parent._f7:null);
}
}
_f275.prototype._f295=function()
{
return this._f276;
}
_f275.prototype._f296=function(x227,x228,x229,x230)
{
this._f47=true;
this.parent._f126();
this.minX=x227;
this.minY=x228;
this.maxX=x229;
this.maxY=x230;
this._f22=this.parent._f90;
this._f23=this.parent._f91;
this._f18=Math.ceil((this.minX-this.parent._f71)*this.parent._f72);
this._f19=-Math.ceil((this.maxY-this.parent._f73)*this.parent._f74);
MVUtil._f70(this.div,this._f18,this._f19);
MVUtil._f70(this._f277,this._f18,this._f19);
MVUtil._f201(this.div,this.parent._f7);
MVUtil._f201(this._f277,this.parent._f7);
this._f94();
this.around=this.parent.wrapAroundLayer(this._f84());
if(this._f92)
this._f92;
MVUtil.runListeners(this._f93,"refreshFOI");
MVUtil._f201(this.div,this.parent._f7);
MVUtil._f201(this._f277,this.parent._f7);
for(var x231=0;x231<this._f276.length;x231++)
{
var x232=this._f276[x231];
x232.node=null;
if(x232.move_id!=null){
clearTimeout(x232.move_id);
}
this._f269(x232,true);
}
}
_f275.prototype._f259=function(x233)
{
var x234=this;
if(x233._f69)
{
var x235=function(x236)
{
if(x233._f102&&x233.gtype%10!=1&&!x234._f64(x233))
{
var x237="0,0";
if(x233.area.length>0)
x237=x233.area;
x236.setAttribute("shape","poly");
x236.setAttribute("coords",x237);
if((x233._f185||(x233._f93[MVEvent.MOUSE_CLICK]!=null&&x233._f93[MVEvent.MOUSE_CLICK].length!=0)||((x233._f248&&x233._f203)))
&&_f65._f66!="OS")
{
x236.setAttribute("href","javascript:void(0)");
}
}
if(x233._f185||(x233._f93[MVEvent.MOUSE_CLICK]!=null&&x233._f93[MVEvent.MOUSE_CLICK].length!=0)||(x233._f248&&x233._f203))
{
MVUtil._f162(x236,"pointer");
}
MVUtil.attachEvent(x236,"mousedown",x234._f176,true);
MVUtil.attachEvent(x236,"mouseup",x234.IndMouseUp,true);
x236.oncontextmenu=x234.IndRightClick;
}
if(x233._f270 instanceof Array)
{
for(var x238=0;x238<x233._f270.length;x238++)
x235(x233._f270[x238]);
}
else
 x235(x233._f270)
}
if(x233.cursorStyle)
{
if(x233._f270 instanceof Array)
{
for(var x238=0;x238<x233._f69.length;x238++)
MVUtil._f162(x233._f270[x238],x233.cursorStyle);
}
else
 MVUtil._f162(x233._f270,x233.cursorStyle);
}
}
_f275.prototype._f289=function(x239)
{
if(x239.parent==null||x239.parent!=this.parent)
return;
x239._f88=true;
x239._f252=this;
var x240;
if(x239.wr&&x239.wr.length>0)
x240=MVUtil._f164(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this.width,this.height,x239.x+x239.wr[0]*(this.parent.msi._f165-this.parent.msi._f166),
x239.y);
else
 x240=MVUtil._f164(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this.width,this.height,x239.x,x239.y);
var x241=(this.parent._f90-this._f22)*this.parent._f72;
var x242=(this.parent._f91-this._f23)*this.parent._f74;
var x243;
var x244=MVUtil._f5(x239._f102.toLowerCase(),'png');
if(!(_f65._f66=='IF'&&(x239.style!=""||x244))&&!x239.html)
{
if(x239.gtype%10==1)
x243=document.createElement('img');
else
 x243=document.createElement('div');
}
else
 x243=document.createElement('div');
var x245=x239.visible;
if(x239._f267>=0)
{
var x246=this.parent.getFOIGroup(x239._f267);
x245=x245&&x246._f282();
}
if(x245)x243.style.visibility="visible";
else
 x243.style.visibility="hidden";
x243.style.position="absolute";
var x247=false;
for(var x248=0;x248<this.parent._f136.length;x248++)
{
if(this.parent._f136[x248].layerControl&&this.parent._f136[x248].layerControl.zoomControl&&
!this.parent._f136[x248].layerControl.zoomControl.hasZoomFinished())
{
x247=true;
x243.style.display='none';
break;
}
}
x243.ifctl=this;
if(x239._f267>=0)
x243.groupid=x239._f267;
var x249=this;
var x250=x239._f174;
x239._f270=x243;
if(x239._f102)
{
x243.className="noprint";
if(!x245)
x243.style.visibility="hidden";
if(x239.id&&x239.id!=null)
x243.id=x239.id;
x243._f155=x239.x;
x243._f156=x239.y;
x243.style.zIndex=x239._f256;
if(x239._f267>=0)
{
var x246=this.parent.getFOIGroup(x239._f267);
x246._f298(x243,x239);
}
else if(x239._f247)
this._f277.appendChild(x243);
else
 this.div.appendChild(x243);
if(x239.gtype%10!=1)
{
this.displayPolygonIndFOI(x243,x240,x241,x242,x239);
}
else
 {
var x251=function()
{
if(x239._f258)
{
setTimeout(x251,200);
return ;
}
x249.displayPointIndFOI(x243,x240,x241,x242,x239);
}
x251();
}
}
else if(x239.gtype%10==1)
{
x243.style.zIndex=x239._f256;
this.displayHTMLIndFOI(x243,x240,x241,x242,x239);
}
x239.node=x243;
this._f168(x243,x239,x249);
if(x239.move_id!=null)
{
var x252=MVUtil._f164(this.parent,this.minX,this.minY,this.maxX,this.maxY,
this.width,this.height,x239.move_xarray[x239.move_seq],x239.move_yarray[x239.move_seq]);
var x253=Math.round(x252[0]-x239.width/2);
var x254=Math.round(x252[1]-x239.height/2);
var x255=x239.id
if(x239._f267>=0)
x255+=","+x239._f267;
x239.move_id=this.setTimeout("this.moveFoi(\""+x255+"\")",x239.time);
}
}
_f275.prototype._f34=function()
{
var x256="";
for(var x257=0;x257<this._f276.length-1;x257++)
{
for(var x258=1;x258<this._f276.length;x258++)
{
if(this._f276[x257]._f247&&!this._f276[x258]._f247)
{
var x259=this._f276[x257];
this._f276[x257]=this._f276[x258];
this._f276[x258]=x259;
}
}
}
for(var x257=0;x257<this._f276.length;x257++)
{
if((this._f276[x257].style||this._f276[x257].createMarker)
&&this._f276[x257].visible)
{
var x260=this._f276[x257].createMarker?
"indfoi_"+this._f276[x257].id+"_style":
this._f276[x257].style.name==null?
MVUtil._f38(this._f276[x257].style):
this._f276[x257].style.name;
x256+=this._f299(this._f276[x257]._f242,x260);
}
}
return x256;
}
_f275.prototype._f299=function(x261,x262)
{
var x263=x261.toGML();
if(x262.getXMLString)
x262=x262.name;
var x264="<geoFeature render_style=\""+x262+"\"><geometricProperty>"+x263+"</geometricProperty></geoFeature>"
return x264;
}
_f275.prototype._f170=function()
{
this._f86();
this._f276=null;
this.div=null;
this._f277=null;
}
_f275.prototype._f61=function(x265)
{
return x265._f62?x265._f62:this.parent._f63;
}
_f275.prototype._f64=function(x266)
{
return _f65._f66=="IF"&&this._f61(x266)=="PNG24";
}
_f275.prototype.getImageParameters=function(x267)
{
var x268="";
var x269=this._f61(x267);
if(x269=="PNG8")
x268+="&format="+x269;
if(x267.bgColor)
x268+="&bgcolor="+x267.bgColor;
return x268;
}
_f275.prototype.displayHTMLIndFOI=function(x270,x271,x272,x273,x274)
{
var x275=x270.ifctl;
x270.id=x274.id;
x270.style.width=MVUtil._f26(x274.width);
x270.style.height=MVUtil._f26(x274.height);
x270.style.opacity=x274.opacity;
if(x274.opacity<1)
x270.style.filter="alpha(opacity="+x274.opacity*100+")";
x271[0]-=x272;
x271[1]+=x273;
MVUtil._f70(x270,x271[0]-x274.width/2,x271[1]-x274.height/2);
if(x274._f267>=0)
{
var x276=this.parent.getFOIGroup(x274._f267);
x276._f298(x270,x274)
}
else
 this._f277.appendChild(x270);
x270.onkeyup=x275.IndStopPropagation;
if(_f65._f66=="OS")
x270.onkeypress=x275.IndStopPropagation;
else
 {
x270.onkeydown=x275.IndStopPropagation;
x270.oncontextmenu=x275.IndStopPropagation;
}
if(_f65._f66=="IF")
x270.onselectstart=x275.IndStopPropagation;
if(x274._f158&&x274._f249&&_f65._f66!="OS")
{
x270.title=x274._f158;
}
this.setIndFOIListners(x274,x270);
if(x274.html)
{
var x277=document.createElement("div");
x277.style.position="absolute";
var x278=x274._f243;
var x279=x274._f244;
x277.style.left=MVUtil._f26(x278);
x277.style.top=MVUtil._f26(x279);
x277.style.padding=MVUtil._f26(0);
x274.foiDiv=x277;
x277.innerHTML=x274.html;
x270.appendChild(x277);
}
}
_f275.prototype.displayPolygonIndFOI=function(x280,x281,x282,x283,x284,x285)
{
var x286=this;
var x287=this._f287(x284);
x280.style.width=MVUtil._f26(Math.round(x287.width*this.parent._f72+0.5));
x280.style.height=MVUtil._f26(Math.round(x287.height*this.parent._f74+0.5));
var x288;
var x289;
var x290=x284._f246;
if(x284.wr&&x284.wr.length>0)
{
var x291=this.parent.msi._f165-this.parent.msi._f166;
x290[0]+=x284.wr[0]*x291;
x290[2]+=x284.wr[0]*x291;
}
if((x290[0]>this.maxX||x290[2]<this.minX||
x290[1]>this.maxY||x290[3]<this.minY)&&!this.around)
{
return;
}
if(x284.wr&&x284.wr.length>0)
x288=x281[0];
else if(x281[0]>-this.parent._f139&&x281[0]<-this.parent._f139+this.width)
{
x288=x281[0];
}
else if(x281[0]<-this.parent._f139)
{
x288=-this.parent._f139;
}
else {
return;
}
if(x281[1]>-this.parent._f140&&x281[1]<-this.parent._f140+this.height)
{
x289=x281[1];
}
else if(x281[1]<-this.parent._f140)
{
x289=-this.parent._f140;
}
else {
return;
}
x288=Math.floor(x288+0.5);
x289=Math.floor(x289+0.5);
x288-=x282;
x289+=x283;
if(x284.io)
{
x288+=x284.io;
x289+=x284.io;
}
MVUtil._f70(x280,x288,x289);
if(this._f64(x284))
{
var x292=MVUtil._f43(x284._f102,"(","%28");
x292=MVUtil._f43(x292,")","%29");
if(x284.opacity<1)
x280.style.filter="alpha(opacity="+x284.opacity*100+")";
var x293=document.createElement("div");
x280.appendChild(x293);
x284._f270=x293;
x293.style.width=x280.style.width;
x293.style.height=x280.style.height;
x293.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x292+"', sizingMethod='image');";
if(x284._f158&&x284._f249)
{
x293.setAttribute("title",x284._f158);
}
this.setIndFOIListners(x284,x293);
x293.onkeyup=x286.IndStopPropagation;
if(_f65._f66=="OS")
x293.onkeypress=x286.IndStopPropagation;
else
 x293.onkeydown=x286.IndStopPropagation;
}
else
 {
var x294=_f301(x284._f102,0,0,0,0,10);
x280.appendChild(x294);
x280.style.opacity=x284.opacity;
if(x284.opacity<1)
x280.style.filter="alpha(opacity="+x284.opacity*100+")";
x284.node=x280;
if(!x284._f274())
return ;
x284._f266(x286.parent);
var x295=document.createElement("map");var x296=document.createElement("area");
x295.setAttribute("name","f"+x284.id+"_"+x284.htmlmapIdSuffix);
x295.setAttribute("id","f"+x284.id+"_"+x284.htmlmapIdSuffix);
x296.setAttribute("border",0);
if(x284._f158&&x284._f249)
{
if(_f65._f66!="OS")
x296.setAttribute("title",x284._f158);
}
x284._f270=x296;
var x297="0,0";
if(x284._f69&&x284._f274())
{
if(x284.area.length>0)
x297=x284.area;
if((x284._f185||(x284._f93[MVEvent.MOUSE_CLICK]!=null&&x284._f93[MVEvent.MOUSE_CLICK].length!=0)||((x284._f248&&x284._f203)))
&&_f65._f66!="OS")
x296.setAttribute("href","javascript:void(0)");
}
x296.setAttribute("shape","poly");
x296.setAttribute("coords",x297);
this.setIndFOIListners(x284,x296);
x294.setAttribute("usemap","#f"+x284.id+"_"+x284.htmlmapIdSuffix,0);
x284.htmlmapIdSuffix++;
x280.style.border=0;
x280.appendChild(x295);
x295.appendChild(x296);
}
}
_f275.prototype.displayPointIndFOI=function(x298,x299,x300,x301,x302)
{
var x303=this;
x299[0]-=x300;
x299[1]+=x301;
MVUtil._f70(x298,x299[0]-x302.width/2,x299[1]-x302.height/2);
var x304=MVUtil._f5(x302._f102.toLowerCase(),'png');
var x305=function(x306,x307)
{
var x308=document.createElement("div");
x308.style.position="absolute";
var x309=x306._f243;
var x310=x306._f244;
x308.style.left=MVUtil._f26(x309);
x308.style.top=MVUtil._f26(x310);
x308.style.padding=MVUtil._f26(0);
x306.foiDiv=x308;
x308.innerHTML=x306.html;
x307.appendChild(x308);
}
if((_f65._f66=='IF')&&
(x302.style!=""||x304))
{
if(!x302.width)
x298.style.width=MVUtil._f26(100);
else
 x298.style.width=MVUtil._f26(x302.width);
if(!x302.height)
x298.style.height=MVUtil._f26(100);
else
 x298.style.height=MVUtil._f26(x302.height);
var x311=MVUtil._f43(x302._f102,"(","%28");
x311=MVUtil._f43(x311,")","%29");
if(x302.opacity<1)
x298.style.filter="alpha(opacity="+x302.opacity*100+")";
var x312=document.createElement("div");
x312.style.width=x298.style.width;
x312.style.height=x298.style.height;
x298.appendChild(x312);
x302._f270=x312;
if(x302._f158&&x302._f249&&_f65._f66!="OS")
{
x312.setAttribute("title",x302._f158);
}
x312.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
x311+"', sizingMethod='image');";
if(x302.html)
{
x305(x302,x312);
}
x303.setIndFOIListners(x302,x312);
}
else
 {
x298.style.opacity=x302.opacity;
if(x302.opacity<1)
x298.style.filter="alpha(opacity="+x302.opacity*100+")";
if(x302._f158&&x302._f249&&_f65._f66!="OS")
{
x298.setAttribute("title",x302._f158);
}
if(x302.html)
{
var x313=document.createElement("img");
x302._f253=x313;
x313.style.position="relative";
x313.style.left=MVUtil._f26(0);
x313.style.top=MVUtil._f26(0);
x313.setAttribute("id",x302.id);
x313.src=x302._f102;
x313.setAttribute("border",0);
x313.foi=x298.foi;
x313.ifctl=x298.ifctl;
x313.groupid=x298.groupid;
x298.appendChild(x313);
x305(x302,x298);
x303.setIndFOIListners(x302,x302._f253);
}
else
 {
x298.src=x302._f102;
x298.setAttribute("border",0);
x303.setIndFOIListners(x302,x298);
}
}
}
_f275.prototype.IndStopPropagation=function(x314)
{
x314=(x314)?x314:((window.event)?event:null);
var x315=MVUtil.getEventSource(x314);
var x316=MVUtil.getMVIndFOIsControlAndFOI(x315);
var x317=x316.ifctl;
if(!x317)
return;
var x318=x316.foi;
if(x314&&x318&&!x318._f174)
{
if(_f65._f66=="IF")
x314.cancelBubble=true;
else if(x314.stopPropagation)
x314.stopPropagation();
}
}
_f275.prototype.IndStopEvent=function(x319)
{
x319=(x319)?x319:((window.event)?event:null);
var x320=MVUtil.getEventSource(x319);
var x321=MVUtil.getMVIndFOIsControlAndFOI(x320);
var x322=x321.ifctl;
if(!x322)
return;
var x323=x321.foi;
if(x319&&x323&&!x323._f174)
{
MVUtil._f175(x319);
}
}
_f275.prototype._f176=function(x324)
{
x324=(x324)?x324:((window.event)?event:null);
var x325=MVUtil.getEventSource(x324);
var x326=MVUtil.getMVIndFOIsControlAndFOI(x325);
var x327=x326.ifctl;
if(!x327)
return;
var x328=function()
{
x327._f177=null;
x327._f178(x324);
}
if(MVUtil.isTouchEvent(x324))
{
if(x327._f177)
x327._f179();
else
 x327._f177=setTimeout(x328,_f65._f180);
}
var x329=x326.foi;
x327.mouseL1=MVUtil._f181(x324);
MVUtil.runListeners(x329._f93,MVEvent.MOUSE_DOWN,[x327.mouseL1,x329,MVUtil.getEvent(x324)]);
x327.IndStopPropagation(x324);
}
_f275.prototype.IndMouseUp=function(x330)
{
x330=(x330)?x330:((window.event)?event:null);
var x331=MVUtil.getEventSource(x330);
var x332=MVUtil.getMVIndFOIsControlAndFOI(x331);
var x333=x332.ifctl;
if(!x333)
return;
if(MVUtil.isTouchEvent(x330))
{
if(!x333._f177)
{
return ;
}
else
 {
x333._f179();
}
}
var x334=x332.foi;
x333.mouseL2=MVUtil._f181(x330);
if(x333.mouseL1.x==x333.mouseL2.x&&x333.mouseL1.y==x333.mouseL2.y)
{
if(x330.button==2)
return;
if(!x334._f302&&x333.parent._f182)
return;
var x335=MVUtil.getMouseLocation(x333.parent,x330);
if(x334.clickPoint)
x335=x334.clickPoint;
if(x334._f185||(x334._f93[MVEvent.MOUSE_CLICK]!=null&&x334._f93[MVEvent.MOUSE_CLICK].length!=0))
{
x333.parent._f183();
var x336=MVSdoGeometry.createPoint(x335.sdo_point.x,x335.sdo_point.y,x333.parent.srid);
if(x334._f185)
x334._f185(x336,x334,MVUtil.getEvent(x330));
MVUtil.runListeners(x334._f93,MVEvent.MOUSE_CLICK,[x336,x334,MVUtil.getEvent(x330)]);
}
else if(x334._f248&&x334._f203)
{
var x337=new MVInfoWindowTab(x334._f202,x334._f203);
var x338=new Array(x337);
if(x334._f250>0&&x334._f251>0)
x333.parent._f76._f303(x334.id,x335.sdo_point.x,x335.sdo_point.y,
x338,0,x334._f250,x334._f251,x334._f254,x334._f202);
else
 x333.parent._f76._f303(x334.id,x335.sdo_point.x,x335.sdo_point.y,
x338,0,null,null,x334._f254,x334._f202);
return;
}
}
x333.IndStopEvent(x330);
}
_f275.prototype.IndMouseOver=function(x339)
{
x339=(x339)?x339:((window.event)?event:null);
var x340=MVUtil.getEventSource(x339);
var x341=MVUtil.getMVIndFOIsControlAndFOI(x340);
var x342=x341.ifctl;
if(!x342)
return;
var x343=x341.foi;
var x344=MVUtil.getMouseLocation(x342.parent,x339);
if(x343.clickPoint)
x344=x343.clickPoint;
var x345=MVSdoGeometry.createPoint(x344.sdo_point.x,x344.sdo_point.y,x342.parent.srid);
if(x343.overLayFOIs)
MVUtil.runListeners(x343._f93,MVEvent.MOUSE_OVER,[x345,x343.overLayFOIs,MVUtil.getEvent(x339)]);
else
 {
if(x343._f191)
{
x343._f191(x345,x343,MVUtil.getEvent(x339));
}
MVUtil.runListeners(x343._f93,MVEvent.MOUSE_OVER,[x345,x343,MVUtil.getEvent(x339)]);
}
if(x343._f194)
{
var x346=x343.node
if(x346 instanceof Array)
{
x343._f257=new Array();
for(var x347=0;x347<x346.length;x347++)
{
x343._f257.push(x346[x347].style.zIndex);
x346[x347].style.zIndex=1000;
}
}
else
 {
if(x346){
x343._f257=x343.node.style.zIndex;
x343.node.style.zIndex=1000;
}
if(x343.cloneFOI&&x343.cloneFOI.node)
{
x343.cloneFOI.node.style.zIndex=1000;
}
}
}
if(x343._f158&&x343._f249&&_f65._f66=="OS")
x342.parent._f76.showTextTip(x343._f158,x344.sdo_point.x,x344.sdo_point.y);
};
_f275.prototype.IndMouseOut=function(x348)
{
x348=(x348)?x348:((window.event)?event:null);
var x349=MVUtil.getEventSource(x348);
var x350=MVUtil.getMVIndFOIsControlAndFOI(x349);
var x351=x350.ifctl;
if(!x351)
return;
var x352=x350.foi;
var x353=MVUtil.getMouseLocation(x351.parent,x348);
if(x352.clickPoint)
x353=x352.clickPoint;
var x354=MVSdoGeometry.createPoint(x353.sdo_point.x,x353.sdo_point.y,x351.parent.srid);
if(x352.overLayFOIs)
MVUtil.runListeners(x352._f93,MVEvent.MOUSE_OUT,[x354,x352.overLayFOIs,MVUtil.getEvent(x348)]);
else
 {
if(x352._f197)
{
x352._f197(x354,x352,MVUtil.getEvent(x348));
}
MVUtil.runListeners(x352._f93,MVEvent.MOUSE_OUT,[x354,x352,MVUtil.getEvent(x348)]);
}
if(x352._f194)
{
var x355=x352.node
if(x355 instanceof Array)
{
for(var x356=0;x356<x355.length;x356++)
{
x355[x356].style.zIndex=x352._f257[x356];
}
}
else
 {
if(x355)
x355.style.zIndex=x352._f257;
if(x352.cloneFOI&&x352.cloneFOI.node)
{
x352.cloneFOI.node.style.zIndex=x352._f257
}
}
}
if(x352._f158)
x351.parent._f76._f198();
};
_f275.prototype.IndRightClick=function(x357)
{
x357=(x357)?x357:((window.event)?event:null);
var x358=MVUtil.getEventSource(x357);
var x359=MVUtil.getMVIndFOIsControlAndFOI(x358);
var x360=x359.ifctl;
if(!x360)
return;
var x361=x359.foi;
if(x361._f189||(x361._f93[MVEvent.MOUSE_RIGHT_CLICK]!=null&&x361._f93[MVEvent.MOUSE_RIGHT_CLICK].length!=0))
{
var x362=MVUtil.getMouseLocation(x360.parent,x357);
if(x361.clickPoint)
x362=x361.clickPoint;
var x363=MVSdoGeometry.createPoint(x362.sdo_point.x,x362.sdo_point.y,x360.parent.srid);
if(x361._f189)
x361._f189(x363,x361,MVUtil.getEvent(x357));
MVUtil.runListeners(x361._f93,MVEvent.MOUSE_RIGHT_CLICK,[x363,x361,MVUtil.getEvent(x357)]);
}
x360.IndStopEvent(x357);
}
_f275.prototype._f94=function()
{
this.maparea=new Array();
this.parent._f126();
var x364=(this._f84()-
this.parent._f106())*0.5/this.parent._f72;
var x365=this.parent._f71-x364;
var x366=this.parent._f304+x364;
if(this.parent.msi!=null)
{
var x367=this.parent.msi._f166;
var x368=this.parent.msi._f165;
var x369=x368-x367;
var x370=0;
if(x365<x367)
{
x370=Math.ceil((x367-x365)/x369);
x365+=x369*x370;
x366+=x369*x370;
x370=0-x370;
}
else if(x365>x368)
{
x370=Math.ceil((x365-x368)/x369);
x365-=x369*x370;
x366-=x369*x370;
}
if(x366<=x368){
this.maparea.push({minx:x365,maxx:x366,n:x370});
}
else{
this.maparea.push({minx:x365,maxx:x368,n:x370});
x366-=x369;
x370++;
while(x366>x368)
{
this.maparea.push({minx:x367,maxx:x368,n:x370});
x366-=x369;
x370++;
}
this.maparea.push({minx:x367,maxx:x366,n:x370});
}
}
var x371=this.maparea.length;
var x372=parseInt(x371/2);
if(x371>0&&x372==x371/2)
{
var x373=this.maparea[0].maxx-this.maparea[0].minx;
var x374=this.maparea[x371-1].maxx-this.maparea[x371-1].minx;
if(x373>x374)
this.centerArea=x371/2-1;
else
 this.centerArea=x371/2
}
else
 this.centerArea=Math.floor(x371/2);
}
_f275.prototype.setIndFOIListners=function(x375,x376)
{
if(x375.origFOI)
x375=x375.origFOI;
x376.onmouseover=this.IndMouseOver;
x376.onmouseout=this.IndMouseOut;
x376.ondblclick=this.IndStopEvent;
x376.onclick=this.IndStopEvent;
x376.onmousemove=this.IndMouseMove;
if(x375._f69&&x375._f274())
{
if((x375._f93[MVEvent.MOUSE_CLICK]!=null&&x375._f93[MVEvent.MOUSE_CLICK].length!=0)||x375._f185||((x375._f248&&x375._f203)))
MVUtil._f162(x376,"pointer")
MVUtil.attachEvent(x376,"mousedown",this._f176,true);
MVUtil.attachEvent(x376,"mouseup",this.IndMouseUp,true);
x376.oncontextmenu=this.IndRightClick;
}
if(x375.cursorStyle)
MVUtil._f162(x376,x375.cursorStyle);
MVUtil._f161(x376);
}
_f275.prototype._f132=function(x377)
{
x377.wr=new Array();
if(x377.areacode!=null)
{
var x378=this.maparea[0].n;
x378+=x377.areacode;
x377.wr.push(x378)
return;
}
var x378=0;
var x379=this.parent.msi._f166;
var x380=this.parent.msi._f165;
var x381=x380-x379;
var x382=this.parent.msi._f166+x381/2;
var x383=x377._f246[2];
var x384=x377._f246[0];
var x385=false;
if(x384<x379||x383>x380)
{
x377.wr.push(this.maparea[0].n);
if(x384<x382&&x383<x382)
{
for(var x386=1;x386<this.maparea.length;x386++)
{
if(this.maparea[x386].maxx>(x384+x381))
x377.wr.push(this.maparea[x386].n);
}
}
else{
for(var x386=1;x386<this.maparea.length;x386++)
{
if(this.maparea[x386].maxx>x384)
x377.wr.push(this.maparea[x386].n);
}
}
}
else
 {
for(var x386=0;x386<this.maparea.length;x386++)
{
if((x384>this.maparea[x386].minx&&x384<this.maparea[x386].maxx)||(x383>this.maparea[x386].minx&&x383<this.maparea[x386].maxx)
||(x384<this.maparea[x386].minx&&x383>this.maparea[x386].maxx))
x377.wr.push(this.maparea[x386].n);
}
}
}
_f275.prototype._f168=function(x387,x388,x389,x390)
{
var x391=parseInt(x387.style.left);
if(x388.wr&&x388.wr.length>1)
{
var x392=false;
if(x388._f253)
{
x392=true;
}
if(!x390)
{
x390=1;
}
if(x390==1)
{
x388.node=new Array(x387);
x388._f270=new Array(x388._f270);
if(x392)
{
x388._f253=new Array(x388._f253);
}
}
for(var x393=x390;x393<x388.wr.length;x393++)
{
var x394=x387.cloneNode(true);
x394.id=x394.id+"clone"+x393;
x394.groupid=x388._f267;
x394.style.left=MVUtil._f26(x391+x393*(this.parent.msi._f165-this.parent.msi._f166)*this.parent._f72);
if(x388._f267>=0)
{
var x395=this.parent.getFOIGroup(x388._f267);
x395._f298(x394,x388);
}
else if(x388._f247)
this._f277.appendChild(x394);
else
 this.div.appendChild(x394);
x394.ifctl=x389;
x394.orgid=x387.id;
if(x392&&x394.childNodes.length>0)
{
x388._f253.push(x394.childNodes[0]);
}
if(x388.gtype%10==1||this._f64(x388)||!x388.area)
{
this.setIndFOIListners(x388,x394);
x388._f270.push(x394);
}
else if(x394.childNodes.length>1)
{
var x396=x394.childNodes[0];
var x397=x394.childNodes[1];
this.setIndFOIListners(x388,x397);
x396.setAttribute("usemap","#f"+x388.id+"clone"+x393+"_"+x388.htmlmapIdSuffix,0);
x397.setAttribute("name","f"+x388.id+"clone"+x393+"_"+x388.htmlmapIdSuffix);
x397.setAttribute("id","f"+x388.id+"clone"+x393+"_"+x388.htmlmapIdSuffix);
if(x397.childNodes.length>0)
{
x388._f270.push(x397.childNodes[0]);
}
}
x388.node.push(x394);
}
}
}
_f275.prototype.detachEventListener=function(x398,x399)
{
MVUtil.detachEventListener(this._f93,x398,x399);
}
_f275.prototype.attachEventListener=function(x400,x401)
{
MVUtil.attachEventListener(this._f93,x400,x401)
}
_f275.prototype.IndMouseMove=function(x402)
{
x402=(x402)?x402:((window.event)?event:null);
var x403=MVUtil.getEventSource(x402);
var x404=MVUtil.getMVIndFOIsControlAndFOI(x403);
var x405=x404.ifctl;
if(!x405)
return;
var x406=x404.foi;
var x407=MVUtil.getMouseLocation(x405.parent,x402);
if(x406.clickPoint)
x407=x406.clickPoint;
var x408=MVSdoGeometry.createPoint(x407.sdo_point.x,x407.sdo_point.y,x405.parent.srid);
MVUtil.runListeners(x406._f93,MVEvent.MOUSE_MOVE,[x408,x406,MVUtil.getEvent(x402)]);
}
_f275.prototype._f178=function(x409)
{
var x410=MVUtil.getEventSource(x409);
var x411=MVUtil.getMVIndFOIsControlAndFOI(x410);
var x412=x411.ifctl;
if(!x412)
return;
x412.parent._f179();
if(!x412.parent._f205||!x412.parent._f205.touchHold||
x412.parent._f205.touchHold=="mouse_right_click")
x412.IndRightClick(x409);
else if(x412.parent._f205.touchHold=="mouse_over")
x412.IndMouseOver(x409);
}
_f275.prototype._f179=function()
{
if(this._f177)
{
clearTimeout(this._f177);
this._f177=null;
}
}
function MVRedlineTool(linestyle,areastyle,foiServerURL)
{
var _f323=eval(_f65._f323);
_f65._f323=(++_f323);
this.id=_f323;
this._f324=0;
this._f325=0;
this.parent="";
this._f3=foiServerURL;
this._f326=null;
this._f327=linestyle;
this._f328=areastyle;
this.lon=0;
this.lat=0;
this._f329=0;
this._f330=0;
this.mouseDownX=0;
this.mouseDownY=0;
this.pointdx=0;
this.pointdy=0;
this._f331=new Array();
this.state=0;
this._f152=0;
this._f332=0;
this._f333=0;
this._f334=null;
this._f335=5;
this._f336=5;
this._f337=false;
this._f338=false;
this._f339=null;
var _f340=this;
this._f93=new Object();
this._f341=null;
this._f342=null;
this._f343=new Array();
this._f344=new Array();
this.gtype=3;
this._f345=null;
this._f346=null;
this._f347=null;
this._f348=null;
this._f349=null;
this._f350=false;
this.textStyle="";
this._f351=null;
this._f352=true;
this.editingMode={deletePoint:true,dragPoint:true,deleteLine:true,dragLine:true};
this.pointGenerateOnTopZIndex=101;
this._f353=function(x0,x1,x2)
{
if(!_f340.editingMode)
return ;
var x3=x1.objType4RedLineTool;
switch(x3)
{
case -1:
if(!_f340.editingMode.deletePoint)
return ;
break;
case -2:
if(!_f340.editingMode.deleteLine)
return ;
break;
}
_f340._f345=x1;
var x4=x0.getPointX();
var x5=MVUtil.calAreaCodeFromCenter(_f340.parent,x4);
var x6=new MVMenu(_f340.parent,x0,x5);
_f340._f347=x6.menuFOIId;
switch(x3)
{
case -1:
x6.addMenuItem(MVi18n._f354("delete"),_f340._f355);
break;
case -2:
x0.sdo_ordinates[0]=x4;
x0.sdo_point.x=x4;
_f340._f346=x0;
x6.addMenuItem(MVi18n._f354("delete"),_f340._f356);
x6.addMenuItem(MVi18n._f354("addPoint"),_f340._f357);
break;
}
MVUtil._f175(x2);
}
this._f358=function(x7,x8,x9)
{
if(!_f340.editingMode)
{
return ;
}
var x10=x8.objType4RedLineTool;
switch(x10)
{
case -1:
if(!_f340.editingMode.dragPoint)
return ;
break;
case -2:
if(!_f340.editingMode.dragLine)
return ;
break;
}
if(_f340._f333!=0&&_f340._f333!=1)
return;
_f340._f333=1;
_f340.parent.draggingEnabled=false;
_f340._f345=x8;
}
this._f359=function(x11,x12,x13)
{
if(_f340._f333!=1)
return;
_f340._f333=0;
_f340._f345=null;
MVUtil._f175(x13);
}
this._f356=function()
{
var x14=_f340._f345;
if(!x14)
return;
var x15=x14.objType4RedLineTool;
if(x15==-2)
{
_f340.removeEdge(x14);
}
}
this._f355=function()
{
var x16=_f340._f345;
if(!x16)
return;
var x17=x16.objType4RedLineTool;
if(x17==-1)
{
_f340.removeVertex(x16);
}
}
this._f357=function()
{
var x18=_f340._f345;
if(!x18)
return;
var x19=x18.objType4RedLineTool;
if(x19==-2)
{
var x20=_f340._f360(x18);
if(x20[0])
{
var x21=_f340._f346;
var x22=null;
var x23=null;
if(x21)
{
x22=x21.getPointX();
x23=x21.getPointY();
}
if(x22&&x23)
_f340.addVertex(x20[1]+1,x22,x23);
}
}
}
this._f361=function(x24)
{
x24=(x24)?x24:((window.event)?event:null);
var x25=MVUtil._f181(x24);
_f340.mouseDownX=x25.x;
_f340.mouseDownY=x25.y;
if(_f340._f333==1||
(_f340._f333==0&&_f340._f345!=null&&_f340._f345.node==MVUtil.getEventSource(x24))
)
{
_f65._f362=_f340;
_f340._f333=2;
_f340.parent._f363(x24);
_f340.lon=_f340.parent._f364();
_f340.lat=_f340.parent._f365();
MVUtil._f175(x24);
return;
}
if((_f65._f362)!=_f340||
(x24!=null&&x24.button==2))
return;
MVUtil._f175(x24);
_f340._f152=1;
_f340._f332=1;
var x25=MVUtil._f181(x24);
_f340._f329=x25.x;
_f340._f330=x25.y;
}
this.keepTwoPointsInHalfEarth=function(x26,x27,x28)
{
if(_f340.parent.wraparound)
{
if(_f340.parent._f260.maparea.length==1)
{
x27.areacode=_f340.parent._f260.centerArea;
return;
}
var x29=_f340.parent.msi._f165-_f340.parent.msi._f166;
var x30;
if(x28)
x30=x28.areacode;
else
 x30=_f340.parent._f260.centerArea;
var x31=MVUtil.keepInCSBoundary(_f340.parent,x27.getGeometry().getPointX());
var x32;
if(x28)
x32=MVUtil.keepInCSBoundary(_f340.parent,x28.getGeometry().getPointX());
else
 x32=MVUtil.keepInCSBoundary(_f340.parent,_f340.parent._f236());;
_f340._f331[x26*2]=x31;
x27.areacode=x30;
var x33=x31-x32;
while(Math.abs(x33)>x29/2)
{
if(x33<0)
{
x31=x31+x29;
x27.areacode=x30+1;
}
else
 {
x31=x31-x29;
x27.areacode=x30-1;
}
x33=x31-x32;
}
}
}
this.refreshRedline=function(x34)
{
var x35=function(x36,x37)
{
x36=MVUtil.keepInCSBoundary(_f340.parent,x36);
x37=MVUtil.keepInCSBoundary(_f340.parent,x37);
var x38=x37-x36;
if(x38>0)
x36=x36+(_f340.parent.msi._f165-_f340.parent.msi._f166);
else
 x37=x37+(_f340.parent.msi._f165-_f340.parent.msi._f166);
if(Math.abs(x37-x36)>Math.abs(x38))
return Math.abs(x38);
else
 return Math.abs(x37-x36);
}
if(_f340.parent.wraparound)
{
var x39=_f340._f343;
if(_f340.getStatus()==1)
{
if(x39.length!=0)
{
var x40=0;
var x41=Number.MAX_VALUE;
var x42=MVUtil.keepInCSBoundary(_f340.parent,_f340.parent._f236());
for(var x43=0;x43<x39.length;x43++)
{
var x44=Math.abs(MVUtil.keepInCSBoundary(_f340.parent,x39[x43].getGeometry().getPointX())-x42);
if(x41>x44)
{
x41=x44;
x40=x43;
}
}
_f340.keepTwoPointsInHalfEarth(x40,x39[x40],null);
if(x40>0)
{
for(var x43=x40-1;x43>=0;x43--)
{
_f340.keepTwoPointsInHalfEarth(x43,x39[x43],x39[x43+1]);
}
}
if(x40<x39.length)
{
for(var x43=x40+1;x43<x39.length;x43++)
{
_f340.keepTwoPointsInHalfEarth(x43,x39[x43],x39[x43-1]);
}
}
}
_f340.refreshLines(x34);
}
else if(_f340.getStatus()==2)
{
if(_f340.parent.getFOI("-RL2RL"+_f340.id))
{
var x45=_f340.parent.getFOI("-RL2RL"+_f340.id);
var x46=Number.MAX_VALUE;
var x47=0;
for(var x43=0;x43<x39.length;x43++)
{
var x44=x35(x39[x43].getGeometry().getPointX(),_f340.parent._f236());
if(x46>x44)
{
x46=x44;
x47=x43;
}
}
_f340.keepTwoPointsInHalfEarth(x47,x39[x47],null);
if(x47>0)
{
for(var x43=x47-1;x43>=0;x43--)
{
_f340.keepTwoPointsInHalfEarth(x43,x39[x43],x39[x43+1]);
}
}
if(x47<x39.length)
{
for(var x43=x47+1;x43<x39.length;x43++)
{
_f340.keepTwoPointsInHalfEarth(x43,x39[x43],x39[x43-1]);
}
}
var x48=new Array();
var x49=Number.MAX_VALUE;
for(var x43=0;x43<x39.length;x43++)
{
if(x39[x43].areacode<x49)
x49=x39[x43].areacode;
}
for(var x43=0;x43<x39.length;x43++)
{
if(x39[x43].areacode==x49)
x48.push([x43,x39[x43]]);
}
var x50=0;
var x51=Number.MAX_VALUE;
for(var x43=0;x43<x48.length;x43++)
{
var x52=(x48[x43])[1];
if(MVUtil.keepInCSBoundary(_f340.parent,x52.getGeometry().getPointX())<x51)
{
x51=MVUtil.keepInCSBoundary(_f340.parent,x52.getGeometry().getPointX());
x50=(x48[x43])[0];
}
}
x45.areacode=x39[x50].areacode;
}
}
}
}
this.refreshLines=function(x53)
{
var x54=_f340._f344;
var x55=_f340._f343;
if(x54.length!=0)
{
for(var x56=0;x56<x54.length;x56++)
{
x54[x56].areacode=(x55[x56].areacode<x55[x56+1].areacode)?x55[x56].areacode:x55[x56+1].areacode;
if(x53)
x54[x56].updateGeometry(MVSdoGeometry.createLineString(_f340._f331.slice(x56*2,(x56*2+4)),(_f340.parent.srid)));
}
}
}
this._f366=function(x57)
{
_f340.parent.draggingEnabled=true;
if(_f340._f333==3)
{
_f340.parent._f367();
}
_f340._f333=0;
x57=(x57)?x57:((window.event)?event:null);
if((_f65._f362)!=_f340||_f340._f332!=1||
(x57!=null&&x57.button==2))
{
if(_f340._f348)
{
_f340._f348();
_f340._f348=null;
}
return;
}
_f340._f332=0;
if(_f340._f152==1&&_f340.state==1)
{
MVUtil._f175(x57);
_f340.parent._f184=null;
_f340._f152=0;
_f340.lon=_f340.parent._f364();
_f340.lat=_f340.parent._f365();
if(_f340.lat>_f340.parent.msi._f291)
_f340.lat=_f340.parent.msi._f291;
else if(_f340.lat<_f340.parent.msi._f292)
_f340.lat=_f340.parent.msi._f292;
if(_f340.gtype==1)
{
while(_f340._f343.length>0)
{
var x58=_f340._f343.pop();
_f340.parent.removeFOI(x58);
}
while(_f340._f344.length>0)
{
var x58=_f340._f344.pop();
_f340.parent.removeFOI(x58);
}
_f340._f343=new Array();
_f340._f344=new Array();
_f340.parent.removeFOI("-RL2RL"+_f340.id);
_f340.parent.removeFOI("-RL10RL"+_f340.id);
_f340._f331=new Array();
}
if(_f340._f331!=null&&_f340._f331.length>=2
&&_f340.lon==_f340._f331[_f340._f331.length-2]
&&_f340.lat==_f340._f331[_f340._f331.length-1])
return;
var x59=null;
var x60="-RL8RL"+_f340.id+"_"+(++_f340._f324);
if(_f340._f334)
{
x59=new MVFOI(x60,
MVSdoGeometry.createPoint(_f340.lon,_f340.lat,_f340.parent.srid),"",
_f340._f334,_f340._f335,_f340._f336);
}
else
 {
if(!_f340._f326)
{
_f340._f326=new MVStyleMarker(_f65._f368,"vector");
_f340._f326.setStrokeColor("000000");
_f340._f326.setStrokeWidth(1.5);
_f340._f326.setFillColor("ff5555");
_f340._f326.setVectorShape("c:30");
}
x59=new MVFOI(x60,MVSdoGeometry.createPoint(_f340.lon,_f340.lat,_f340.parent.srid),
_f340._f326,null,12,12);
}
x59.enableInfoTip(false);
x59._f302=true;
x59.enableInfoWindow(false);
x59.objType4RedLineTool=-1;
x59.setEventListener(MVEvent.MOUSE_RIGHT_CLICK,_f340._f353);
x59.attachEventListener(MVEvent.MOUSE_DOWN,_f340._f358);
x59.setEventListener(MVEvent.MOUSE_OUT,_f340._f359);
x59.setMouseCursorStyle("pointer");
x59.setBringToTopOnMouseOver(false);
x59.setTopFlag(true);
if(_f340._f350)
x59.setZIndex(_f340.pointGenerateOnTopZIndex);
if(_f340._f337&&_f340._f343.length==0)
{
x59.setEventListener(MVEvent.MOUSE_CLICK,function()
{
_f340._f333=0;
if(_f340._f331.length<=2)
return;
_f340._f331.push(_f340._f331[0]);
_f340._f331.push(_f340._f331[1]);
_f340.generate();
if(_f340._f342)
_f340._f342();
MVUtil.runListeners(_f340._f93,MVEvent.FINISH);
return ;
});
}
_f340._f343.push(x59);
_f340._f331.push(_f340.lon);
_f340._f331.push(_f340.lat);
if(_f340._f343.length==0)
_f340.keepTwoPointsInHalfEarth(0,x59,null);
else
 _f340.keepTwoPointsInHalfEarth(_f340._f343.length-1,x59,_f340._f343[_f340._f343.length-2]);
_f340.parent.addFOI(x59);
FOILineLen=(_f340._f331.length);
if(FOILineLen>=4)
{
var x61=new MVFOI(("-RL6RL"+_f340.id+"_"+(++_f340._f325)),
MVSdoGeometry.createLineString(_f340._f331.slice((FOILineLen-4)),
(_f340.parent.srid)),_f340._f327,_f340._f3);
x61.setTopFlag(_f340._f350);
x61.enableInfoTip(false);
x61.enableInfoWindow(false);
x61.objType4RedLineTool=-2;
x61.setEventListener(MVEvent.MOUSE_RIGHT_CLICK,_f340._f353);
x61.setEventListener(MVEvent.MOUSE_OVER,_f340._f358);
x61.setEventListener(MVEvent.MOUSE_OUT,_f340._f359);
x61.setMouseCursorStyle("pointer");
x61.setBringToTopOnMouseOver(false);
if(_f340._f343[_f340._f343.length-2].areacode<_f340._f343[_f340._f343.length-1].areacode)
x61.areacode=_f340._f343[_f340._f343.length-2].areacode;
else
 x61.areacode=_f340._f343[_f340._f343.length-1].areacode;
_f340.parent.addFOI(x61);
_f340._f344.push(x61);
}
if(_f340._f338&&FOILineLen>4)
{
var x62=new Array(FOILineLen+2);
for(var x63=0;x63<FOILineLen;x63++)
x62[x63]=_f340._f331[x63];
x62[FOILineLen]=_f340._f331[0];
x62[FOILineLen+1]=_f340._f331[1];
_f340._f339.updateGeometry(MVSdoGeometry.createPolygon(x62,_f340.parent.srid));
}
if(_f340._f351&&!_f340._f351.isVisible()&&_f340._f352)
_f340._f351.setVisible(true);
if(_f340._f341)
_f340._f341();
MVUtil.runListeners(_f340._f93,MVEvent.NEW_SHAPE_POINT);
}
}
this.mouse_move=function(x64)
{
x64=(x64)?x64:((window.event)?event:null);
if((_f340._f333==2)||(_f340._f333==3))
{
_f65._f362=_f340;
_f340.parent._f363(x64);
var x65=_f340._f345;
var x66=x65.objType4RedLineTool;
switch(x66)
{
case -1:
_f340.moveVertex(x65,(_f340.parent._f364()),(_f340.parent._f365()));
break;
case -2:
var x67=(_f340.parent._f364());
var x68=(_f340.parent._f365());
var x69=x67-(_f340.lon);
var x70=x68-(_f340.lat);
_f340.lon=x67;
_f340.lat=x68;
var x71=MVUtil._f181(x64);
_f340.pointdx=x71.x-_f340.mouseDownX;
_f340.pointdy=x71.y-_f340.mouseDownY;
_f340.moveEdge(x65,x69,x70);
break;
}
MVUtil._f175(x64);
if(_f340._f333==2)
{
_f340._f333=3;
_f340.parent._f229.onmousemove=function(x72){};
if(_f340.parent._f229.attached!=true)
{
if(_f65._f66=="IF")
{
_f340.parent._f229.attachEvent("onmousemove",_f340.mouse_move);
_f340.parent._f229.attached=true;
}
else
 {
_f340.parent._f229.addEventListener("mousemove",_f340.mouse_move,false);
_f340.parent._f229.attached=true;
}
}
}
return;
}
if((_f65._f362)!=_f340||
(x64!=null&&x64.button==2))
return;
if(_f340._f332==1)
{
var x69=0;
var x70=0;
var x71=MVUtil._f181(x64);
x69=x71.x-_f340._f329;
x70=x71.y-_f340._f330;
var x73=_f65._f369;
if((x69*x69+x70*x70)>(x73*x73))
_f340._f332=2;
}
}
this.getStatus=function()
{
return this.state;
}
this.init=function(x74)
{
if(!_f340._f351)
{
_f340._f351=new MVMapDecoration("<div id=\"redline_cpan_div_"+this.id+"\" style=\"padding:3px 2px 2px 3px; border:1px solid black;font-size:9pt;background-color:white;filter:alpha(opacity=80);-moz-opacity:.80;opacity:.80;"
+this.textStyle+"\"><a id=\"finishLink_"+this.id+"\" href=\"javascript:void(0);\"> "+MVi18n._f354("finish")+"</a> / <a id=\"clearLink_"
+this.id+"\" href=\"javascript:void(0);\">"+MVi18n._f354("clear")+" </a></div>",0.4,0.9);
_f340._f351.afterDisAction=_f340.redlineInfoLink;
_f340.parent.addMapDecoration(_f340._f351);
_f340._f351.setDraggable(true);
_f340._f351.setDraggable(true);
_f340._f351.setVisible(false);
}
switch(x74)
{
case 1:
this.gtype=x74;
break;
case 2:
this.gtype=x74;
break;
default:
this.gtype=x74=3;
}
if(!this._f326)
this.setRenderingStyle(MVRedlineTool.STYLE_POINT,null);
if(!this._f327)
this.setRenderingStyle(MVRedlineTool.STYLE_LINE,null);
if(!this._f328)
this.setRenderingStyle(MVRedlineTool.STYLE_AREA,null);
this.parent._f182=true;
if(this.state==0)
{
MVUtil.attachEvent(this.parent._f229,"mousedown",this._f361,true);
MVUtil.attachEvent(this.parent._f229,"mouseup",this._f366,true);
MVUtil.attachEvent(this.parent._f229,"mousemove",this.mouse_move,true);
}
_f65._f362=this;
if(this._f338)
{
this._f339=new MVFOI("-RL10RL"+this.id,
MVSdoGeometry.createPolygon([0,0,0,0,0,0,0,0],this.parent.srid),
this._f328,
this._f3);
this._f339.enableInfoTip(false);
this._f339.enableInfoWindow(false);
this._f339.setClickable(false);
this.parent.addFOI(this._f339);
}
while(this._f343.length>0)
{
var x75=this._f343.pop();
this.parent.removeFOI(x75);
}
while(this._f344.length>0)
{
var x75=this._f344.pop();
this.parent.removeFOI(x75);
}
this._f343=new Array();
this._f344=new Array();
this.parent.removeFOI("-RL2RL"+this.id);
this.parent.removeFOI("-RL10RL"+this.id);
if(this._f347!=null)
this.parent.removeFOI(this._f347);
this._f331=new Array();
this.state=1;
this.parent._f260.attachEventListener("refreshFOI",this.refreshRedline);
MVUtil.runListeners(this._f93,MVEvent.INIT,[MVToolBar.BUILTIN_REDLINE]);
}
this.setTextStyle=function(x76)
{
_f340.textStyle=x76;
}
this.setControlPanelVisible=function(x77)
{
this._f352=x77;
if(this._f351)
this._f351.setVisible(x77);
}
this.redlineInfoLink=function()
{
var x78=document.getElementById("finishLink_"+_f340.id);
var x79=document.getElementById("clearLink_"+_f340.id);
MVUtil.attachEvent(x78,"click",function()
{
if(_f340.finishLinkClick)
{
_f340.finishLinkClick();
}
_f340.generate();
if(_f340.getStatus()!=2)
_f340.clear();
},true);
MVUtil.attachEvent(x79,"click",function()
{
if(_f340.clearLinkClick)
{
_f340.clearLinkClick();
}
_f340.clear();
},true);
}
this.getInfoDecorationDiv=function()
{
return document.getElementById("redline_cpan_div_"+this.id);
}
this.generate=function()
{
var x80=this.gtype;
if(this.state==1)
{
if(x80==3&&this._f331.length<6)
{
MVi18n._f6("MVRedlineTool.generate","MAPVIEWER-05512",null,this.parent?this.parent._f7:null);
return;
}
else if(x80==2&&this._f331.length<4)
{
MVi18n._f6("MVRedlineTool.generate","MAPVIEWER-05512",null,this.parent?this.parent._f7:null);
return;
}
else if(x80==1&&this._f331.length<2)
{
MVi18n._f6("MVRedlineTool.generate","MAPVIEWER-05512",null,this.parent?this.parent._f7:null);
return;
}
var x81=this;
var x82=function()
{
if(x81._f344.length>0)
{
if(!x81._f344[x81._f344.length-1].node)
{
setTimeout(x82,50);
return ;
}
}
var x83=null;
if(x81._f343&&x81._f343[0])
{
x83=x81._f343[0].areacode;
for(var x84=1;x84<x81._f343.length;x84++)
{
if(x81._f343[x84]&&(x81._f343[x84].areacode<x83))
x83=x81._f343[x84].areacode;
}
}
x81.state=2;
for(var x84=0;x84<x81._f343.length;x84++)
{
var x85=x81._f343[x84];
x81.parent.removeFOI(x85);
}
while(x81._f344.length>0)
{
var x85=x81._f344.pop();
x81.parent.removeFOI(x85);
}
x81._f344=new Array();
if(x81._f347!=null)
x81.parent.removeFOI(x81._f347);
x81.parent.removeFOI("-RL10RL"+x81.id);
var x86=x81._f331.length;
if(x80==3&&(x81._f331[0]!=x81._f331[x86-2]||x81._f331[1]!=x81._f331[x86-1]))
{
x81._f331.push(x81._f331[0]);
x81._f331.push(x81._f331[1]);
}
var x87=null;
switch(x80)
{
case 1:
if(x81._f334)
x87=new MVFOI("-RL2RL"+x81.id,MVSdoGeometry.createPoint(x81._f331[0],x81._f331[1],x81.parent.srid),"",x81._f334,x81._f335,x81._f336);
else
 x87=new MVFOI("-RL2RL"+x81.id,MVSdoGeometry.createPoint(x81._f331[0],x81._f331[1],x81.parent.srid),x81._f326,x81._f3);
break;
case 2:
x87=new MVFOI("-RL2RL"+x81.id,MVSdoGeometry.createLineString(x81._f331,x81.parent.srid),x81._f327,x81._f3);
break;
case 3:
x87=new MVFOI("-RL2RL"+x81.id,MVSdoGeometry.createPolygon(x81._f331,x81.parent.srid),x81._f328,x81._f3);
break;
}
x87.areacode=x83;
x87.enableInfoTip(false);
x87.enableInfoWindow(false);
x87.setClickable(false);
x87.setTopFlag(x81._f350);
x81.parent.addFOI(x87);
x81.parent._f182=false;
if(_f340._f342)
_f340._f342();
MVUtil.runListeners(_f340._f93,MVEvent.FINISH);
}
x82();
}
}
this.generateArea=this.generate;
this.clear=function()
{
if(!this.parent)
return ;
var x88=false;
while(this._f343.length>0)
{
var x89=this._f343.pop();
this.parent.removeFOI(x89);
x88=true;
}
while(this._f344.length>0)
{
var x89=this._f344.pop();
this.parent.removeFOI(x89);
x88=true;
}
if(this.parent.getFOI("-RL2RL"+this.id))
x88=true;
this.parent.removeFOI("-RL2RL"+this.id);
if(this.parent.getFOI("-RL10RL"+this.id))
x88=true;
this.parent.removeFOI("-RL10RL"+this.id);
if(this._f347!=null)
this.parent.removeFOI(this._f347);
MVUtil.detachEvent(this.parent._f229,"mousedown",this._f361,true);
MVUtil.detachEvent(this.parent._f229,"mouseup",this._f366,true);
MVUtil.detachEvent(this.parent._f229,"mousemove",this.mouse_move,true);
if(_f340._f351)
{
_f340._f351.setVisible(false);
var x90=_f340._f351.getContainerDiv();
for(var x91=0;x91<x90.childNodes.length;x91++)
{
if(x90.childNodes[x91].tagName=="IMG")
{
x90.childNodes[x91].style.visibility="hidden";
}
}
}
if(this.getStatus()==1||x88)
MVUtil.runListeners(_f340._f93,MVEvent.CLEAR);
this.state=0;
this.parent._f182=false;
this._f343=new Array();
this._f344=new Array();
this._f331=new Array();
}
this.setMarkerImage=function(x92,x93,x94)
{
this._f334=x92;
this._f335=x93;
this._f336=x94;
}
this.getPolygon=function()
{
var x95=this._f331.length;
if(x95>=6&&this._f331[0]==this._f331[x95-2]&&this._f331[1]==this._f331[x95-1])
{
var x96=MVSdoGeometry.createPolygon(this._f331,this.parent.srid);
return x96;
}
else
 return null;
}
this.getSdoGeometry=function()
{
var x97=this._f331.length;
var x98=null;
if(x97>=6&&this._f331[0]==this._f331[x97-2]&&this._f331[1]==this._f331[x97-1])
x98=MVSdoGeometry.createPolygon(this._f331,this.parent.srid);
else if(x97>=4)
x98=MVSdoGeometry.createLineString(this._f331,this.parent.srid);
else if(x97==2)
x98=MVSdoGeometry.createPoint(this._f331,this.parent.srid);
return x98;
}
this.getPolygonFOI=function()
{
if(this.gtype==3)
return this.parent.getFOI("-RL2RL"+this.id);
else
 return null;
}
this.getFOI=function()
{
return this.parent.getFOI("-RL2RL"+this.id);
}
this.getOrdinates=function()
{
return this._f331;
}
this.addEventListener=function(x99,x100)
{
this.setEventListener(x99,x100);
}
this.setEventListener=function(x101,x102)
{
if(x101==MVEvent.NEW_SHAPE_POINT||x101==MVEvent.MOUSE_CLICK)
this._f341=x102;
else if(x101=="on_finish"||x101==MVEvent.FINISH)
this._f342=x102;
else if(x101==MVEvent.MODIFY)
this._f349=x102;
}
this.attachEventListener=function(x103,x104)
{
MVUtil.attachEventListener(_f340._f93,x103,x104)
}
this.detachEventListener=function(x105,x106)
{
MVUtil.detachEventListener(_f340._f93,x105,x106);
}
}
MVRedlineTool.prototype.setAutoClose=function(x0)
{
this._f337=x0;
}
MVRedlineTool.prototype.setEditingMode=function(x1)
{
if(!x1)
this.editingMode={deletePoint:false,dragPoint:false,deleteLine:false,dragLine:false};
else
 this.editingMode=x1;
}
MVRedlineTool.prototype.getEditingMode=function()
{
return this.editingMode;
}
MVRedlineTool.prototype.setGeneratePolygonTop=function(x2)
{
this._f350=x2;
}
MVRedlineTool.prototype.setFillArea=function(x3)
{
this._f338=x3;
}
MVRedlineTool.prototype.getPointNumber=function()
{
return this._f343.length;
}
MVRedlineTool.prototype.getPointFOIs=function()
{
return this._f343;
}
MVRedlineTool.prototype.getLineFOIs=function()
{
return this._f344;
}
MVRedlineTool.prototype.setRenderingStyle=function(x4,x5)
{
if(x5&&!(typeof(x5)=="string"||(typeof(x5)=="object"
&&x5.getXMLString!=null)))
{
MVi18n._f6("MVRedlineTool.setRenderingStyle","MAPVIEWER-05519","objStyle",
this.parent?this.parent._f7:null);
}
else
 {
switch(x4)
{
case MVRedlineTool.STYLE_POINT:
if(!x5)
{
var x6=new MVStyleMarker(_f65._f368,"vector");
x6.setStrokeColor("000000");
x6.setStrokeWidth(1.5);
x6.setFillColor("ff5555");
x6.setVectorShape("c:30");
this._f326=x6;
}
else
 this._f326=x5;
break;
case MVRedlineTool.STYLE_LINE:
if(!x5)
{
var x7='<svg width="1in" height="1in"><desc/><g class="line" style="stroke-width:1.0">'+
'<line class="base" style="fill:#000066;stroke-width:1.0" dash="5.0,3.0"/></g></svg>';
var x8=new MVXMLStyle(_f65._f371,x7);
this._f327=x8;}
else
 this._f327=x5;
break;
case MVRedlineTool.STYLE_AREA:
if(!x5)
{
var x8=new MVStyleColor(_f65._f372,"FF0000","FF0000");
x8.setFillOpacity(100);
this._f328=x8;
}
else
 this._f328=x5;
break;
}
}
}
MVRedlineTool.prototype._f373=function(x9)
{
var x10=this._f343.length;
var x11=null;
var x12=null;
if(x9!=null)
{
if(isNaN(x9))
{
var x13=0;
for(;x13<x10;++x13)
{
if(this._f343[x13]==x9)
{
x11=x9;
x12=x13;
break;
}
}
}
else if(x9<x10&&x9>=0)
{
x11=this._f343[x9];
x12=x9;
}
else if(x9==x10)
{
x12=x9;
}
}
return [x11,x12];
}
MVRedlineTool.prototype._f360=function(x14)
{
var x15=this._f344.length;
var x16=null;
var x17=-1;
if(x14!=null)
{
if(isNaN(x14))
{
var x18=0;
for(;x18<x15;++x18)
{
if(this._f344[x18]==x14)
{
x16=x14;
x17=x18;
break;
}
}
}
else if(x14<x15&&x14>=0)
{
x16=this._f343[x14];
x17=x14;
}
}
return [x16,x17];
}
MVRedlineTool.prototype.removeVertex=function(x19)
{
if(!this.editingMode.deletePoint)
return;
var x20=this._f373(x19);
if(!x20||!x20[0])
return;
var x21=x20[0];
var x22=x20[1];
var x23=this._f343.length;
this._f343.splice(x22,1);
var x24=(x22*2);
this._f331.splice(x24,2);
this.parent.removeFOI(x21);
var x25=x22>0?true:false;
var x26=(x22<(x23-1))?true:false;
var x27=null;
if(x25&&x26)
{
x27=this._f344[x22-1];
if(!this.parent.wraparound)
{
x27.updateGeometry(MVSdoGeometry.createLineString(this._f331.slice((x24-2),(x24+2)),
(this.parent.srid)));
}
x27=this._f344[x22];
this.parent.removeFOI(x27);
this._f344.splice(x22,1);
}
else if(x25)
{
x27=this._f344[x22-1];
this.parent.removeFOI(x27);
this._f344.splice((x22-1),1);
}
else if(x26)
{
x27=this._f344[x22];
this.parent.removeFOI(x27);
this._f344.splice(x22,1);
}
if(this.parent.wraparound)
{
this.refreshRedline(true);
}
if(this._f349)
this._f349();
MVUtil.runListeners(this._f93,MVEvent.MODIFY);
}
MVRedlineTool.prototype.removeEdge=function(x28,x29)
{
if(!this.editingMode.deleteLine)
return;
var x30=this._f360(x28);
if(!x30||!x30[0])
return;
var x31=x30[0];
var x32=x30[1];
if(x29=="left")
this.removeVertex(x32);
else
 this.removeVertex(x32+1);
}
MVRedlineTool.prototype.moveVertex=function(x33,x34,x35)
{
if(!this.editingMode.dragPoint)
return;
var x36=this._f373(x33);
if(!x36||!x36[0])
return;
var x37=x36[0];
var x38=x36[1];
if(x35>this.parent.msi._f291)
x35=this.parent.msi._f291;
else if(x35<this.parent.msi._f292)
x35=this.parent.msi._f292;
x37.areacode=MVUtil.calAreaCodeFromCenter(this.parent,x34);
x37.updateGeometry(MVSdoGeometry.createPoint(x34,x35,(this.parent.srid)));
var x39=(x38*2);
this._f331[x39]=x34;
this._f331[x39+1]=x35;
var x40=this._f343.length;
var x41=x38>0?true:false;
var x42=(x38<(x40-1))?true:false;
var x43=null;
var x44=this;
this._f348=function()
{
x44.moveToNewEdge(x41,x42,x38,x39,x37,x34,x35);
if(x44._f349)
x44._f349();
MVUtil.runListeners(x44._f93,MVEvent.MODIFY);
};
}
MVRedlineTool.prototype.moveToNewEdge=function(x45,x46,x47,x48,x49,x50,x51)
{
if(this.parent.wraparound)
{
this.refreshRedline(true);
}
else
 {
if(x45)
{
var x52=this._f344[x47-1];
x52.updateGeometry(MVSdoGeometry.createLineString(this._f331.slice((x48-2),(x48+2)),
(this.parent.srid)));
}
if(x46)
{
var x52=this._f344[x47];
x52.updateGeometry(MVSdoGeometry.createLineString(this._f331.slice(x48,(x48+4)),
(this.parent.srid)));
}
}
}
MVRedlineTool.prototype.moveEdge=function(x53,x54,x55)
{
if(!this.editingMode.dragLine)
return;
var x56=this._f360(x53);
if(!x56||!x56[0])
return;
var x57=x56[0];
var x58=x56[1];
var x59=(x58*2);
this._f331[x59]=this._f331[x59]+x54;
this._f331[x59+1]=this._f331[x59+1]+x55;
if(this._f331[x59+1]>this.parent.msi._f291)
this._f331[x59+1]=this.parent.msi._f291;
else if(this._f331[x59+1]<this.parent.msi._f292)
this._f331[x59+1]=this.parent.msi._f292;
this._f331[x59+2]=this._f331[x59+2]+x54;
this._f331[x59+3]=this._f331[x59+3]+x55;
if(this._f331[x59+3]>this.parent.msi._f291)
this._f331[x59+3]=this.parent.msi._f291;
else if(this._f331[x59+3]<this.parent.msi._f292)
this._f331[x59+3]=this.parent.msi._f292;
var x60=x57.node;
if(_f65._f374==2)
{
if(!(x53.mouseDownX))
{
x53.mouseDownX=x60.style.pixelLeft;
x53.mouseDownY=x60.style.pixelTop;
}
x60.style.pixelLeft=x53.mouseDownX+this.pointdx;
x60.style.pixelTop=x53.mouseDownY+this.pointdy;
}
else
 {
if(!(x53.mouseDownX))
{
x53.mouseDownX=MVUtil._f80(x60);
x53.mouseDownY=MVUtil._f81(x60);
}
x60.style.left=(x53.mouseDownX+this.pointdx)+'px';
x60.style.top=(x53.mouseDownY+this.pointdy)+'px';
}
var x61=this._f343.length;
var x62=x58>0?true:false;
var x63=(x58<(x61-2))?true:false;
var x64=null;
var x65=this;
this._f348=function()
{
x65.moveToNewEdge2(x62,x63,x58,x59,x57);
if(x65._f349)
x65._f349();
MVUtil.runListeners(x65._f93,MVEvent.MODIFY);
};
}
MVRedlineTool.prototype.moveToNewEdge2=function(x66,x67,x68,x69,x70){
this._f343[x68].areacode=MVUtil.calAreaCodeFromCenter(this.parent,this._f331[x69]);
this._f343[x68+1].areacode=MVUtil.calAreaCodeFromCenter(this.parent,this._f331[x69+2]);
this._f343[x68].updateGeometry(MVSdoGeometry.createPoint(this._f331[x69],this._f331[x69+1],
(this.parent.srid)));
this._f343[x68+1].updateGeometry(MVSdoGeometry.createPoint(this._f331[x69+2],this._f331[x69+3],
(this.parent.srid)));
if(this.parent.wraparound)
{
this.refreshRedline(true);
}
else
 {
x70.updateGeometry(MVSdoGeometry.createLineString(this._f331.slice(x69,(x69+4)),
(this.parent.srid)));
if(x66)
{
var x71=this._f344[x68-1];
x71.updateGeometry(MVSdoGeometry.createLineString(this._f331.slice((x69-2),(x69+2)),
(this.parent.srid)));
}
if(x67)
{
var x71=this._f344[x68+1];
x71.updateGeometry(MVSdoGeometry.createLineString(this._f331.slice(x69+2,(x69+6)),
(this.parent.srid)));
}
}
x70.mouseDownX=null;
x70.mouseDownY=null;
}
MVRedlineTool.prototype.addVertex=function(x72,x73,x74)
{
var x75=this._f373(x72);
if(!x75||!x75[1]&&x72!=this._f343.length)
return;
var x76=x75[0];
var x77=x75[1];
var x78=this._f343.length;
var x79=null;
var x80="-RL8RL"+this.id+"_"+(++this._f324);
if(this._f334)
x79=new MVFOI(x80,MVSdoGeometry.createPoint(x73,x74,this.parent.srid),
"",this._f334,this._f335,this._f336);
else
 x79=new MVFOI(x80,MVSdoGeometry.createPoint(x73,x74,this.parent.srid),
this._f326,null,12,12);
if(this._f350)
x79.setZIndex(this.pointGenerateOnTopZIndex);
x79.enableInfoTip(false);
x79._f302=true;
x79.enableInfoWindow(false);
x79.objType4RedLineTool=-1;
x79.setEventListener(MVEvent.MOUSE_RIGHT_CLICK,this._f353);
x79.setEventListener(MVEvent.MOUSE_OVER,this._f358);
x79.setEventListener(MVEvent.MOUSE_OUT,this._f359);
x79.setMouseCursorStyle("pointer");
x79.setBringToTopOnMouseOver(false);
x79.setTopFlag(true);
x79.areacode=MVUtil.calAreaCodeFromCenter(this.parent,x73);
this._f343.splice(x77,0,x79);
var x81=x77*2;
this._f331.splice(x81,0,x73,x74);
this.parent.addFOI(x79);
if(this._f351&&!this._f351.isVisible()&&this._f352)
this._f351.setVisible(true);
if(this._f343.length==1)
return ;
var x82=x77<x78?true:false;
var x83=null;
if(x82)
{
x83=this._f344[x77-1];
x83.updateGeometry(MVSdoGeometry.createLineString(this._f331.slice((x81-2),(x81+2)),
(this.parent.srid)));
x83=new MVFOI(("-RL6RL"+this.id+"_"+(++this._f325)),
MVSdoGeometry.createLineString(this._f331.slice(x81,(x81+4)),
(this.parent.srid)),this._f327,this._f3);
x83.setTopFlag(this._f350);
x83.enableInfoTip(false);
x83.enableInfoWindow(false);
x83.objType4RedLineTool=-2;
x83.setEventListener(MVEvent.MOUSE_RIGHT_CLICK,this._f353);
x83.setEventListener(MVEvent.MOUSE_OVER,this._f358);
x83.setEventListener(MVEvent.MOUSE_OUT,this._f359);
x83.setMouseCursorStyle("pointer");
x83.setBringToTopOnMouseOver(false);
x83.areacode=this._f343[x77].areacode;
this.parent.addFOI(x83);
this._f344.splice(x77,0,x83);
}
else
 {
x83=new MVFOI(("-RL6RL"+this.id+"_"+(++this._f325)),
MVSdoGeometry.createLineString(this._f331.slice(x81-2,(x81+2)),
(this.parent.srid)),this._f327,this._f3);
x83.setTopFlag(this._f350);
x83.enableInfoTip(false);
x83.enableInfoWindow(false);
x83.objType4RedLineTool=-2;
x83.setEventListener(MVEvent.MOUSE_RIGHT_CLICK,this._f353);
x83.setEventListener(MVEvent.MOUSE_OVER,this._f358);
x83.setEventListener(MVEvent.MOUSE_OUT,this._f359);
x83.setMouseCursorStyle("pointer");
x83.setBringToTopOnMouseOver(false);
x83.areacode=this._f343[x77].areacode;
this.parent.addFOI(x83);
this._f344.push(x83);
}
}
MVRedlineTool.STYLE_POINT="point";
MVRedlineTool.STYLE_LINE="line";
MVRedlineTool.STYLE_AREA="area";
function MVRectangleTool(rectStyle,_f488)
{
this.parent=null;
this._f690=document.createElement("div");
this.innerRectangleDiv=null;
this._f690.style.position="absolute";
this._f690.style.zIndex=5000;
this._f690.style.border="#FF0000 2px dashed";
this._f690.style.visibility="hidden";
this._f491=2;
this._f488=_f488;
this._f328=rectStyle;
this._f492=0;
this._f493=0;
this._f494=0;
this._f495=0;
this._f496=0;
this._f497=0;
this._f93=new Object();
this._f498=null;
this._f342=null;
this._f499=null;
this.mouseupHandler=null;
this._f370=null;
var _f616=eval(_f65._f616);
++_f616;
_f65._f616=_f616;
this.id=_f616;
this._f503=0;
this._f66="NS";
var rt=this;
this._f504=function(x0)
{
x0=(x0)?x0:((window.event)?event:null);
if(rt.parent._f505)
MVUtil._f175(x0);
};
this._f506=function()
{
if(this.netscape==null)
{
if(_f65._f507("netscape"))
this.netscape=true;
else
 this.netscape=false;
}
if(this.netscape)
{
window.addEventListener("keypress",this._f504,false);
}
}
this._f508=function()
{
if(this.netscape==null)
{
if(_f65._f507("netscape"))
this.netscape=true;
else
 this.netscape=false;
}
if(this.netscape)
window.removeEventListener("keypress",this._f504,false);
}
this.refreshRetangle=function()
{
var x1=rt.parent;
if(x1.wraparound)
{
if(rt.getStatus()==3)
{
var x2=rt.getRectangleFOI();
if(x2)
{
x2.areacode=rt.parent._f260.centerArea;
}
}
}
}
}
MVRectangleTool.prototype.setDivBorderStyle=function(x0,x1,x2)
{
var x3="#FF0000";
if(x0&&x0!="")
{
x3=x0;
}
var x4="1px";
if(x1)
{
x4=x1+"px";
this._f491=x1;
}
var x5="dashed";
if(x2!="")
x5=x2;
this._f690.style.border=x3+" "+x4+" "+x5;
}
MVRectangleTool.prototype.setDivFillColor=function(x6,x7)
{
if(!this.innerRectangleDiv)
{
this.innerRectangleDiv=document.createElement("div");
this.innerRectangleDiv.style.width="100%";
this.innerRectangleDiv.style.height="100%";
this._f690.appendChild(this.innerRectangleDiv);
}
if(x6&&x6!="")
{
if(this.innerRectangleDiv.style.setAttribute)
this.innerRectangleDiv.style.cssText+=";background-color:"+x6;
else
 this.innerRectangleDiv.style.backgroundColor=x6;
}
if(isNaN(x7)||x7<0||x7>1)
{
MVi18n._f6("MVRectangleTool.setDivFillColor","MAPVIEWER-05519","opacity",
this.parent?this.parent._f7:null);
return ;
}
else
 {
if(window.ActiveXObject)
{
this.innerRectangleDiv.style.filter="alpha(opacity="+(x7*100)+")";
}
else
 {
this.innerRectangleDiv.style.opacity=x7;
}
}
}
MVRectangleTool.prototype.setAreaStyle=function(x8)
{
this._f328=x8;
}
MVRectangleTool.prototype._f509=function()
{
this._f492=this.parent._f364();
this._f493=this.parent._f365();
}
MVRectangleTool.prototype._f510=function()
{
this._f494=this.parent._f364();
this._f495=this.parent._f365();
var x9=Math.abs(this._f494-this._f492);
var x10=this.parent.msi._f165-this.parent.msi._f166;
if(x9>x10)
{
if(this._f492<this._f494)
this._f494=this._f492+x10;
else
 this._f494=this._f492-x10;
}
}
MVRectangleTool.prototype._f691=function()
{
this._f690.style.width="0px";
this._f690.style.height="0px";
this._f690.style.clip="rect(0px, 0px, 0px, 0px)";
this._f690.style.visibility="hidden";
}
MVRectangleTool.prototype._f692=function()
{
if(this._f503!=3)
{
return;
}
var x11=(this._f492-this.parent._f236())*this.parent._f72+
(this.parent._f106()/2);
var x12=(this._f493-this.parent._f237())*(-this.parent._f74)+
(this.parent._f107()/2);
var x13=(this._f494-this.parent._f236())*this.parent._f72+
(this.parent._f106()/2);
var x14=(this._f495-this.parent._f237())*(-this.parent._f74)+
(this.parent._f107()/2);
var x15=Math.abs(x11-x13);
var x16=Math.abs(x12-x14);
x15=Math.round(x15);
x16=Math.round(x16);
var x17=(x11<x13?x11:x13);
var x18=(x12<x14?x12:x14);
x17=Math.round(x17);
x18=Math.round(x18);
this._f690.style.left=x17-1-MVUtil._f80(this.parent.div)+'px';
this._f690.style.top=x18-1-MVUtil._f81(this.parent.div)+'px';
if(x15>0)
x15++;
if(x16>0)
x16++;
if(this._f66=="NS")
{
if(x15==0)
x15=(2*this._f491);
if(x16==0)
x16=(2*this._f491);
this._f690.style.width=Math.abs(x15-(2*this._f491))+'px';
this._f690.style.height=Math.abs(x16-(2*this._f491))+'px';
this._f690.style.clip="rect(0px, "+(x15)+"px, "+
(x16)+"px, 0px)";
}
else
 {
this._f690.style.width=x15+'px';
this._f690.style.height=x16+'px';
this._f690.style.clip="rect(0px, "+(x15+(2*this._f491))+"px, "+
(x16+(2*this._f491))+"px, 0px)";
}
this._f690.style.visibility="visible";
}
MVRectangleTool.prototype.generateArea=function()
{
if(this._f503!=3)
return;
this.parent.removeFOI("MVRectangleTool"+this.id);
if(!this._f328)
return;
this._f691();
if(this._f492!=this._f494&&this._f493!=this._f495)
{
this.getRectangle();
var x19=new MVFOI("MVRectangleTool"+this.id,this._f370,this._f328,this._f488);
x19.areacode=MVUtil.calAreaCodeFromCenter(this.parent,this._f492<this._f494?this._f492:this._f494);
x19.setClickable(false);
x19.enableInfoTip(false);
this.parent.addFOI(x19);
}
else
 this._f370=null;
}
MVRectangleTool.prototype.init=function()
{
this._f691();
this.parent.removeFOI("MVRectangleTool"+this.id);
this._f503=0;
this.parent._f367();
this._f503=1;
MVUtil._f693(this._f690);
var x20=this.parent;
var x21=x20._f229;
var x22=this;
this._f492=this._f493=this._f494=this._f495=0;
var x23;
MVUtil.runListeners(x22._f93,MVEvent.INIT,[MVToolBar.BUILTIN_RECTANGLE]);
this._f66=this.parent.getBrowserType();
var x24=function()
{
x20._f505=true;
var x25=x20._f236();
var x26=x20._f237();
if((x22._f496)!=x25||(x22._f497)!=x26)
{
if(x22._f503==2)
{
x22._f503=3;
}
x22._f494+=(x25-x22._f496);
x22._f495+=(x26-x22._f497);
x22._f496=x25;
x22._f497=x26;
x22._f692();
}
}
MVUtil.setListener(x21,"mousedown",MVUtil._f103(x21,function(x27)
{
x20.removeFOI("MVRectangleTool"+x22.id);
x22._f503=2;
x27=(x27)?x27:((window.event)?event:null);
var x28=x20._f234(x27);
x20.mouseDownLoc=x28;
x20._f514(x27);
x22._f509();
x22._f510();
x22._f690.style.visibility="hidden";
if(x22._f498!=null)
(x22._f498)();
MVUtil.runListeners(x22._f93,MVEvent.START);
x22._f496=x20._f236();
x22._f497=x20._f237();
var x29=5;
x23=setInterval(x24,x29);
x22._f506();
return false;
}));
MVUtil.setListener(x21,"mousemove",MVUtil._f103(x21,function(x30)
{
if(x22._f503==2)
x22._f503=3;
if(x22._f503==3)
{
x30=(x30)?x30:((window.event)?event:null);
x20._f514(x30);
x22._f510();
x22._f692();
if(x22._f499)
x22._f499();
MVUtil.runListeners(x22._f93,MVEvent.DRAG);
}
return false;
}));
var x31=MVUtil._f103(x21,function(x32)
{
if(x22._f503==0||x22._f503==1)
return false;
x32=(x32)?x32:((window.event)?event:null);
var x33=x20._f234(x32);
x20.mouseUpLoc=x33;
x20._f514(x32);
x22._f510();
x22.generateArea();
clearInterval(x23);
MVUtil.detachEvent(x21,"mouseup",x31,false);
x20._f367();
x22._f508();
if(x22._f342){
(x22._f342)();
}
MVUtil.runListeners(x22._f93,MVEvent.FINISH);
return false;
});
if(this.mouseupHandler)
MVUtil.detachEvent(x21,"mouseup",this.mouseupHandler,false);
MVUtil.attachEvent(x21,"mouseup",x31,false);
this.mouseupHandler=x31;
x21.onmouseout=MVUtil._f103(x21,function(x34)
{
if(x22._f503!=3)
return false;
if(x22._f66=="NS"||x22._f66=="OS")
{
x34=(x34)?x34:((window.event)?event:null);
var x35=x34.clientX;
var x36=x34.clientY;
var x37=x20._f106();
var x38=x20._f107();
var x39=MVUtil._f515(this);
var x40=x34.pageX-x39.x;
var x41=x34.pageY-x39.y;
if(x40<=0||x40>=x37||
x41<=0||x41>=x38||
x35<=0||x35>=document.body.clientWidth||
x36<=0||x36>=document.body.clientHeight)
{
return this.onmouseup(x34);
}
}
});
this.parent._f260.attachEventListener("refreshFOI",this.refreshRetangle);
MVUtil.runListeners(x22._f93,MVEvent.START,[MVToolBar.BUILTIN_DISTANCE]);
}
MVRectangleTool.prototype.clear=function()
{
this._f691();
this.parent.removeFOI("MVRectangleTool"+this.id);
this._f503=0;
this.parent._f367();
MVUtil.runListeners(this._f93,MVEvent.CLEAR);
}
MVRectangleTool.prototype.getRectangle=function()
{
if(this._f492!=this._f494&&this._f493!=this._f495)
{
var x42=this.parent.msi._f165-this.parent.msi._f166;
if((this._f494-this._f492)<x42/2)
{
this._f370=MVSdoGeometry.createRectangle(
this._f492,this._f493,this._f494,this._f495,this.parent.srid);
return this._f370;
}
else
 {
var x43=this._f492;
var x44=this._f493;
var x45=this._f494;
var x46=this._f495;
var x47=(x45-x43)/3;
var x48=(x45-x43)/3*2;
var x49=[x43,x44,x43,x46,x43+x47,x46,x43+x48,x46,x45,x46,x45,x44,x43+x48,x44,x43+x47,x44];
this._f370=MVSdoGeometry.createPolygon(x49,this.parent.srid);
return this._f370;
}
}
else
 return null;
}
MVRectangleTool.prototype.getRectangleFOI=function()
{
return this.parent.getFOI("MVRectangleTool"+this.id);
}
MVRectangleTool.prototype.getRectangleDIV=function()
{
return this._f690;
}
MVRectangleTool.prototype.addEventListener=function(x50,x51)
{
this.setEventListener(x50,x51);
}
MVRectangleTool.prototype.setEventListener=function(x52,x53)
{
if(x52=="on_start"||x52==MVEvent.START)
this._f498=x53;
else if(x52=="on_finish"||x52==MVEvent.FINISH)
this._f342=x53;
else if(x52=="on_drag"||x52==MVEvent.DRAG)
this._f499=x53;
}
MVRectangleTool.prototype.attachEventListener=function(x54,x55)
{
MVUtil.attachEventListener(this._f93,x54,x55)
}
MVRectangleTool.prototype.detachEventListener=function(x56,x57)
{
MVUtil.detachEventListener(this._f93,x56,x57);
}
MVRectangleTool.prototype.getStatus=function()
{
return this._f503;
}
MVRectangleTool.prototype.getWidth=function(x58)
{
if(!x58)
{
return Math.abs(this._f492-this._f494);
}
else
 {
return MVSdoGeometry.getDistance(this._f492,this._f493,
MVUtil.transLongitudeOnWarpAroungMap(this.parent,this._f492,this._f494),
this._f493,this.parent.srid,x58);
}
}
MVRectangleTool.prototype.getHeight=function(x59)
{
var x60=this._f493;
var x61=this._f495
if(x60>this.parent.msi._f291)
x60=this.parent.msi._f291;
else if(x60<this.parent.msi._f292)
x60=this.parent.msi._f292;
if(x61>this.parent.msi._f291)
x61=this.parent.msi._f291
else if(x61<this.parent.msi._f292)
x61=this.parent.msi._f292
if(!x59)
return Math.abs(x60-x61);
else
 return MVSdoGeometry.getDistance(this._f492,x60,this._f492,x61,this.parent.srid,x59);
}
MVRectangleTool.prototype.setDivStyle=function(x62)
{
var x63="#FF0000";
var x64=2;
var x65="dashed";
var x66="#555555";
var x67=0.3;
if(x62.borderColor!=undefined)
x63=x62.borderColor;
if(x62.borderWidth!=undefined)
x64=x62.borderWidth;
if(x62.borderDashed!=undefined)
{
if(!x62.borderDashed)
x65="solid";
}
if(x62.fillColor!=undefined)
x66=x62.fillColor;
if(x62.fillOpacity!=undefined)
x67=x62.fillOpacity;
this.setDivFillColor(x66,x67);
this.setDivBorderStyle(x63,x64,x65);
}
function MVCircleTool(circleStyle,_f488)
{
this.parent=null;
this._f489=document.createElement("div");
this._f489.style.position="absolute";
this._f489.style.visibility="hidden";
this._f489.style.zIndex=5000;
this._f490=new Object();
this._f490._f491=2;
this._f490.divHeight=2;
this._f490.zIndex=5001;
this._f490.backgroundColor="#FF0000";
this._f490.opacity=null;
this._f488=_f488;
this._f328=circleStyle;
this._f492=0;
this._f493=0;
this._f494=0;
this._f495=0;
this.stepPx=6;
this._f496=0;
this._f497=0;
this._f93=new Object();
this._f498=null;
this._f342=null;
this._f499=null;
this._f500=null;
this._f370=null;
var _f501=eval(_f65._f501);
_f65._f501=(++_f501);
this.id=_f501;
this._f502="MVCircleTool";
this._f503=0;
this.refresh=false;
var ct=this;
this._f504=function(x0)
{
x0=(x0)?x0:((window.event)?event:null);
if(ct.parent._f505)
MVUtil._f175(x0);
};
this._f506=function()
{
if(this.netscape==null)
{
if(_f65._f507("netscape"))
this.netscape=true;
else
 this.netscape=false;
}
if(this.netscape)
{
window.addEventListener("keypress",this._f504,false);
}
}
this._f508=function()
{
if(this.netscape==null)
{
if(_f65._f507("netscape"))
this.netscape=true;
else
 this.netscape=false;
}
if(this.netscape)
window.removeEventListener("keypress",this._f504,false);
}
this.refreshCircle=function()
{
var x1=ct.parent;
if(x1.wraparound)
{
if(ct.getStatus()==3)
{
var x2=ct.getCircleFOI();
if(x2)
{
x2.areacode=ct.parent._f260.centerArea;
}
}
}
}
}
MVCircleTool.prototype.setPlotDivSize=function(x0,x1)
{
if(x0!=null)
{
if(isNaN(x0))
{
MVi18n._f6("MVCircleTool.setPlotDivSize","MAPVIEWER-05519","width",
this.parent?this.parent._f7:null);
}
else
 {
x0=Math.round(x0);
this._f490._f491=x0;
}
}
if(x1!=null)
{
if(isNaN(x1))
{
MVi18n._f6("MVCircleTool.setPlotDivSize","MAPVIEWER-05519","height",
this.parent?this.parent._f7:null);
}
else
 {
x1=Math.round(x1);
this._f490.divHeight=x1;
}
}
}
MVCircleTool.prototype.setPlotDivFillColor=function(x2,x3)
{
if(x2!=null&&x2!="")
this._f490.backgroundColor=x2;
if(isNaN(x3)||x3<0||x3>1)
{
MVi18n._f6("MVCircleTool.setPlotDivFillColor","MAPVIEWER-05519","opacity",
this.parent?this.parent._f7:null);
}
else
 {
this._f490.opacity=x3;
}
}
MVCircleTool.prototype.setPlotDivZindex=function(x4)
{
if(x4!=null)
{
if(isNaN(x4))
{
MVi18n._f6("MVCircleTool.setPlotDivZindex","MAPVIEWER-05519","zindex",
this.parent?this.parent._f7:null);
}
else
 {
this._f490.zIndex=x4;
this._f489.style.zIndex=(x4-1);
}
}
}
MVCircleTool.prototype._f509=function()
{
this._f492=this.parent._f364();
this._f493=this.parent._f365();
}
MVCircleTool.prototype._f510=function()
{
this._f494=this.parent._f364();
this._f495=this.parent._f365();
}
MVCircleTool.prototype._f511=function()
{
if(this._f503!=3)
{
return;
}
var x5=this.parent._f72;
var x6=this.parent._f74;
var x7=Math.round((this._f492-this.parent._f236())*x5+(this.parent._f106()/2));
var x8=Math.round((this._f493-this.parent._f237())*(-x6)+(this.parent._f107()/2));
var x9=(this._f494-this._f492)*x5;
var x10=(this._f495-this._f493)*(-x6);
var x11=Math.round(Math.sqrt(x9*x9+x10*x10));
var x12=Math.floor(x5*(this.parent.msi._f165-this.parent.msi._f166)/2);
if(x11>x12)
{
x11=x12;
this._f500=Math.floor((this.parent.msi._f165-this.parent.msi._f166)/2);
}
else
 this._f500=x11/x5;
var x13=2*(x11+this._f490._f491);
var x14=2*(x11+this._f490.divHeight);
var x15=x7-x11-Math.round((this._f490._f491)/2);
var x16=x8-x11-Math.round((this._f490.divHeight)/2);
this._f489.style.left=x15+'px';
this._f489.style.top=x16+'px';
this._f489.style.width=x13+'px';
this._f489.style.height=x14+'px';
this._f489.style.clip="rect(0px, "+x14+"px, "+x13+"px, 0px)";
this._f489.style.visibility="visible";
var x17=(this._f502+this.id+"PlotsDiv");
var x18=document.getElementById(x17);
if(x18!=null)
this._f489.removeChild(x18);
x18=document.createElement("div");
x18.id=x17;
x18.style.position="absolute";
x18.style.left=0+'px';
x18.style.top=0+'px';
this._f489.appendChild(x18);
var x19=(this.stepPx)/x11;
x19=x19>1?1:x19;
var x20=Math.acos(x19);
var x21=Math.asin(x19);
var x22=x20<x21?x20:x21;
var x23=50;
if(x22==0)
x22=Math.PI/(2*x23);
var x24=Math.ceil(Math.PI/(2*x22));
for(var x25=0;x25<x24;++x25)
{
var x26=x25*x22;
x9=Math.round(x11*Math.cos(x26));
x10=Math.round(x11*Math.sin(x26));
this._f512((x11+x9),(x11+x10));
this._f512((x11+x9),(x11-x10));
this._f512((x11-x9),(x11+x10));
this._f512((x11-x9),(x11-x10));
}
}
MVCircleTool.prototype._f512=function(x27,x28)
{
var x29=(this._f502+this.id+"PlotsDiv");
var x30=document.getElementById(x29);
if(x30==null)
{
MVi18n._f6("MVCircleTool.plotPos","MAPVIEWER-05500","null plodsDiv found",
this.parent?this.parent._f7:null);
return;
}
var x31=document.createElement("DIV");
x31.style.position="absolute";
x31.style.zIndex=this._f490.zIndex;
if(this._f490.backgroundColor!=null)
x31.style.backgroundColor=this._f490.backgroundColor;
if((this._f490.opacity)!=null)
{
if(window.ActiveXObject)
{
x31.style.filter="alpha(opacity="+((this._f490.opacity)*100)+")";
}
else
 {
x31.style.opacity=this._f490.opacity;
}
}
x31.style.left=x27+"px";
x31.style.top=x28+"px";
x31.style.width=(this._f490._f491)+"px";
x31.style.height=(this._f490.divHeight)+"px";
x31.style.clip="rect(0px, "+(this._f490._f491)+"px, "+
(this._f490.divHeight)+"px, 0px)";
x30.appendChild(x31);
}
MVCircleTool.prototype.generateArea=function()
{
if(this._f503!=3)
{
return;
}
var x32=this._f502+this.id;
this.parent.removeFOI(x32);
var x33=this._f500;
this._f370=MVSdoGeometry.createCirclePolygon(this._f492,this._f493,x33,this.parent.srid);
if(!(this._f328))
return;
var x34=new MVFOI(x32,this._f370,this._f328,this._f488);
var x35=this._f492-x33;
x34.areacode=MVUtil.calAreaCodeFromCenter(this.parent,x35);
x34.setClickable(false);
x34.enableInfoTip(false);
this.parent.addFOI(x34);
}
MVCircleTool.prototype.init=function()
{
this.parent.removeFOI(this._f502+this.id);
this._f503=0;
this.parent._f367();
this._f503=1;
var x36=this.parent;
var x37=x36._f229;
var x38=this;
var x39;
MVUtil.runListeners(x38._f93,MVEvent.INIT,[MVToolBar.BUILTIN_CIRCLE]);
var x40=function()
{
x36._f505=true;
var x41=x36._f236();
var x42=x36._f237();
if((x38._f496)!=x41||(x38._f497)!=x42||(x38.refresh))
{
x38.refresh=false;
if(x38._f503==2)
{
x38._f503=3;
}
x38._f494+=(x41-x38._f496);
x38._f495+=(x42-x38._f497);
x38._f496=x41;
x38._f497=x42;
x38._f511();
}
}
MVUtil.setListener(x37,"mousedown",MVUtil._f103(x37,function(x43)
{
x36.removeFOI(x38._f502+x38.id);
x38._f503=2;
x43=(x43)?x43:((window.event)?event:null);
MVUtil._f175(x43);
x36._f514(x43);
x38._f509();
x38._f510();
x38._f489.style.visibility="hidden";
if(x38._f498!=null)
(x38._f498)();
MVUtil.runListeners(x38._f93,MVEvent.START);
x38._f496=x36._f236();
x38._f497=x36._f237();
var x44=5;
x39=setInterval(x40,x44);
x38._f506();
return false;
}),true);
MVUtil.setListener(x37,"mousemove",MVUtil._f103(x37,function(x45)
{
if(x38._f503==2)
{
x38._f503=3;
}
if(x38._f503==3)
{
x45=(x45)?x45:((window.event)?event:null);
x36._f514(x45);
x38._f510();
x38.refresh=true;
if(x38._f499)
x38._f499();
MVUtil.runListeners(x38._f93,MVEvent.DRAG);
}
return false;
}),true);
MVUtil.setListener(x37,"mouseup",MVUtil._f103(x37,function(x46)
{
x46=(x46)?x46:((window.event)?event:null);
MVUtil._f175(x46);
x36._f514(x46);
x38._f510();
x38.generateArea();
var x47=document.getElementById(x38._f502+x38.id+"PlotsDiv");
if(x47!=null)
x38._f489.removeChild(x47);
x38._f489.style.width="0px";
x38._f489.style.height="0px";
x38._f489.style.clip="rect(0px, 0px, 0px, 0px)";
x38._f489.style.visibility="hidden";
clearInterval(x39);
x36._f367();
x38._f508();
if(x38._f342!=null)
(x38._f342)();
MVUtil.runListeners(x38._f93,MVEvent.FINISH);
return false;
}),true);
x37.onmouseout=MVUtil._f103(x37,function(x48)
{
if(x38._f503!=3)
return false;
if(!(window.ActiveXObject))
{
x48=(x48)?x48:((window.event)?event:null);
var x49=x48.clientX;
var x50=x48.clientY;
var x51=x36._f106();
var x52=x36._f107();
var x53=MVUtil._f515(this);
var x54=x48.pageX-x53.x;
var x55=x48.pageY-x53.y;
if(x54<=0||x54>=x51||
x55<=0||x55>=x52||
x49<=0||x49>=document.body.clientWidth||
x50<=0||x50>=document.body.clientHeight)
{
return this.onmouseup(x48);
}
}
});
this.parent._f260.attachEventListener("refreshFOI",this.refreshCircle);
}
MVCircleTool.prototype.clear=function()
{
this.parent.removeFOI(this._f502+this.id);
this._f503=0;
this.parent._f367();
MVUtil.runListeners(this._f93,MVEvent.CLEAR);
}
MVCircleTool.prototype.getCircle=function()
{
if(this._f503==3&&this._f500)
return MVSdoGeometry.createCircle(this._f492,this._f493,this._f500,this.parent.srid);
else if(this._f370!=null)
return (this._f370);
else
 return null;
}
MVCircleTool.prototype.getCirclePolygon=function()
{
if(this._f503==3&&this._f500)
return MVSdoGeometry.createCirclePolygon(this._f492,this._f493,this._f500,this.parent.srid);
else if(this._f370!=null)
return (this._f370);
else
 return null;
}
MVCircleTool.prototype.getRadius=function(x56)
{
if(!x56)
return MVSdoGeometry.getDistance(this._f492,this._f493,this._f494,this._f495,this.parent.srid);
else
 return MVSdoGeometry.getDistance(this._f492,this._f493,this._f494,this._f495,this.parent.srid,x56);
}
MVCircleTool.prototype.getCenter=function()
{
return MVSdoGeometry.createPoint(this._f492,this._f493,this.parent.srid);
}
MVCircleTool.prototype.getCircleFOI=function()
{
return this.parent.getFOI(this._f502+this.id);
}
MVCircleTool.prototype.addEventListener=function(x57,x58)
{
this.setEventListener(x57,x58);
}
MVCircleTool.prototype.setEventListener=function(x59,x60)
{
if(x59=="on_start"||x59==MVEvent.START)
this._f498=x60;
else if(x59=="on_finish"||x59==MVEvent.FINISH)
this._f342=x60;
else if(x59=="on_drag"||x59==MVEvent.DRAG)
this._f499=x60;
}
MVCircleTool.prototype.attachEventListener=function(x61,x62)
{
MVUtil.attachEventListener(this._f93,x61,x62)
}
MVCircleTool.prototype.detachEventListener=function(x63,x64)
{
MVUtil.detachEventListener(this._f93,x63,x64);
}
MVCircleTool.prototype.getStatus=function()
{
return this._f503;
}
MVCircleTool.prototype.setAreaStyle=function(x65)
{
this._f328=x65;
}
function MVi18n()
{
}
MVi18n._f555=null;
MVi18n._f556=null;
MVi18n._f557=null;
MVi18n.URL=null;
MVi18n.language=null;
MVi18n.country=null;
MVi18n.fetched=false;
MVi18n.timeoutCount=0;
MVi18n.isFetched=function()
{
if(MVi18n.fetched)
return true;
MVi18n.timeoutCount++;
if(MVi18n.timeoutCount>10)
MVi18n.fetched=true;
return MVi18n.fetched;
}
MVi18n._f6=function(x0,x1,x2,x3)
{
if(x2)
x2=" ("+x2+")";
else
 x2="";
if(x3)
x3("["+x0+"] "+MVi18n._f469(x1)+x2);
else
 MVi18n.alert("["+x0+"] "+MVi18n._f469(x1)+x2);
}
MVi18n._f469=function(x4)
{
if(MVMessages[x4])
return x4+": "+MVMessages[x4];
else
 return x4;
}
MVi18n._f354=function(x5)
{
if(MVMessages[x5])
return MVMessages[x5];
else
 return '';
}
MVi18n._f558=function()
{
if(MVi18n.URL==null)
return;
var localDomain=MVUtil.isLocalDomain(MVi18n.URL);
var xmlHttp=localDomain||MVMapView._f117;
var url=null;
url=MVi18n.URL+"/mcserver";
try
{
var _f294=MVUtil.getXMLHttpRequest(xmlHttp);
_f294.open("POST",MVUtil._f119(url),true);
_f294.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
_f294.onreadystatechange=MVUtil._f103(_f294,function()
{
try
{
if(this.readyState!=4)
return;
if(this.status==200)
text=this.responseText;
MVUtil.gc();
eval(text);
MVi18n.fetched=true;
}
catch(e)
{
MVi18n.fetched=true;
return ;
}
});
var params="request=getinfomsgs";
if(MVi18n.language)
params=params+"&language="+MVi18n.language;
if(MVi18n.country)
params=params+"&country="+MVi18n.country;
_f294.send(MVUtil._f120(url,params));
}
catch(ex)
{
MVi18n._f6("MVi18n.fetchMessages","MAPVIEWER-05511",ex);
}
}
MVi18n.addBehavior=function(x6,x7,x8)
{
if(x6==null||(x6!="func"&&x6!="eval"))
{
MVi18n.alert("MethodType Error");
return;
}
if(!x7)
{
MVi18n.alert("MethodName Error");
return;
}
if(x8==null||((x8.toLowerCase())!="url"&&(x8.toLowerCase())!="text"))
{
MVi18n.alert("ArgType Error");
return;
}
MVi18n._f555=x6;
MVi18n._f556=x7;
MVi18n._f557=x8;
}
MVi18n.setURL=function(x9)
{
if(x9==null||x9=="")
{
MVi18n.alert("Parameter should not be null or empty. Error occurs in MVi18n.setURL(...)");
return;
}
MVi18n.URL=x9;
}
MVi18n.alert=function(x10)
{
if(MVi18n._f556)
{
var x11=MVi18n._f556;
x11(x10);
}
else
 alert(x10);
}
function MVMapView(x0,x1)
{
if(!x0)
{
MVi18n._f6("MVMapView.constructor","MAPVIEWER-05519","mapDiv");
return ;
}
this._f144=_f588++;
MVUtil.objArray.push(this);
var x2=this;
if(!MVi18n._f556)
MVi18n.addBehavior("func",alert,"text");
this.center=null;
this.originalCenter=null;
this.reCenterTag=false;
this._f90=0;
this._f91=0;
this._f72=0;
this._f74=0;
this.tileWidth=0;
this.tileHeight=0;
this._f741=200;
this._f742=200;
this._f743=0;
this._f744=0;
this._f745=1;
this._f746=0;
this._f747=0;
this._f53=0;
this._f748=false;
this._f283=false;
this._f714=0;
this._f715=0;
this._f749=null;
this._f750=null;
this._f751=0.0;
this._f752=0.0;
this._f753=0.0;
this._f754=0.0;
this._f755=0.0;
this._f756=0.0;
this._f71=0.0;
this._f310=0.0;
this._f304=0.0;
this._f73=0.0;
this._f757=false;
this.msi=null;
this._f758=false;
this._f759=true;
this._f184=null;
this._f760=new Array();
this._f761=new Array();
this._f762=null;
this._f136=new Array();
this.mapLayerNumber=0;
this._f763=new Array();
this._f76=null;
this._f260=null;
this._f701=null;
this._f696=2;
this._f697=4;
this._f698=4;
this._f764=null;
this._f204=false;
this._f765=0;
this._f88=false;
this._f766=new Array();
this._f225=null;
this._f226=false;
this._f230=true;
this._f767=null;
this.srid=null;
this._f768=null;
this._f769=0;
this._f770=true;
this._f771="one_time";
this._f772=false;
this._f773=null;
this._f774=false;
this._f775=false;
this._f776=false;
this._f777=false;
this._f778=null;
this._f779=1;
this.centerMarkUrl=null;
this.centerMarkW=0;
this.centerMarkH=0;
this._f93=new Object();
var x3=String(document.location);
var x4=x3.indexOf("//");
this._f471=_f65._f617();
this._f780=this._f471;
this._f4=this._f471;
this._f223="default";
this._f222="move";
this._f781="default";
if(x1)
{
this._f780=x1;
this._f4=x1;
if(MVUtil._f5(x1,'/'))
{
this._f780=x1.substring(0,x1.length-1);
this._f4=x1.substring(0,x1.length-1);
}
}
this._f4=MVUtil.getAbsoluteURL(this._f4);
_f65._f554=this._f4+"/foi";
if(_f65._f141==_f65._f612)
_f65._f141=this._f4+_f65._f612;
MVi18n.setURL(this._f4);
if(x0==null)
return null;
MVUtil._f201(x0);
this.real_base_div=x0;
if(this.real_base_div.style.position!="absolute")
{
this.real_base_div.style.position="relative";
}
this._f229=document.createElement("div");
this.real_base_div.appendChild(this._f229);
this._f229.style.position="absolute";
this._f229.style.left=MVUtil._f26(0);
this._f229.style.top=MVUtil._f26(0);
this._f229.style.width="100%";
this._f229.style.height="100%";
MVUtil._f145(this._f229);
MVUtil._f145(this.real_base_div);
this._f229.style.overflow="hidden";
this._f440=document.createElement("img");
this._f440.src=_f65._f141+"transparent."+(_f65._f66=="IF"?"gif":"png");
this._f440.src+="?refresh="+(new Date()).getTime();
this._f440.style.position="absolute";
this._f440.style.left=MVUtil._f26(0);
this._f440.style.top=MVUtil._f26(0);
this._f440.onload=MVUtil._f103(this,function(){_f65._f622=true;});
this._f229.appendChild(this._f440);
this._f307=document.createElement("div");
this._f307.style.position="absolute";
this._f307.style.left=MVUtil._f26(0);
this._f307.style.top=MVUtil._f26(0);
this.real_base_div.appendChild(this._f307);
this.div=null;
var x5=this.getBrowserType();
this.toolBarContainer=null;
this._f782();
MVUtil._f145(this.div);
this._f783="";
this._f315=0;
this._f316=0;
this._f542();
this._f700=null;
this._f78=document.createElement("div");
MVUtil._f145(this._f78);
this._f78.style.position="absolute";
this._f78.style.zIndex=125;
this.div.appendChild(this._f78);
this._f784=null;
this._f785=null;
this._f633=null;
this._f786=null;
this._f787=null;
this._f788=null;
this._f789=new _f790();
this._f791=true;
this.draggingEnabled=true;
this._f792="zoomin";
this._f408=null;
this._f793=true;
this._f794=null;
this._f795=false;
this._f796=null;
this._f797=null;
this._f798=0;
this._f799=0;
this._f800=false;
this._f801=0;
this._f802=null;
this._f803=5;
this._f182=false;
this._f89=new Array();
this.infoTipDiv=null;
this._f173=0;
this._f171=0;
this._f804=null;
this._f805=null;
this._f806=null;
this._f807=null;
this._f808=null;
this._f809=null;
this._f810=null;
this._f811=null;
this._f505=false;
this._f538=null;
this._f63="PNG24";
this.foiBgColor=null;
this.zoomAnimationEnabled=true;
this._f812=false;
this.dragCoords=null;
this.wraparound=false;
this.maptype=null;
this._f813=true;
this._f7=null;
this._f814=0;
this._f815=0;
this._f816=0;
this._f817=0;
this._f818=0;
this._f819=-1;
this._f820=-1;
this.foiGroupLayer=null;
this._f821=null;
this._f822=true;
this.lastTouch=0;
this.lastTouchLoc=null;
this._f823=new Array();
this._f824=0;
this._f825=1;
this.touchCount=0;
if(!MVi18n.isFetched())
MVi18n._f558();
return this;
}
MVMapView.prototype._f782=function()
{
if(_f65._f66=="IF"&&document.compatMode&&document.compatMode!="BackCompat")
{
document.body.style.height="100%";
}
if(this.real_base_div.style.backgroundColor=="")
this.real_base_div.style.backgroundColor="lightgrey";
this.div=document.createElement("div");
this.div.style.position="absolute";
this.div.style.zIndex=80;
this.div.style.left=MVUtil._f26(0);
this.div.style.top=MVUtil._f26(0);
this._f307.style.left=MVUtil._f26(0);
this._f307.style.top=MVUtil._f26(0);
this._f139=0;
this._f140=0;
this._f428=this._f139;
this._f429=this._f140;
this._f826=0;
this._f827=0;
this._f229.appendChild(this.div);
var x0=document.createElement("table");
x0.style.zIndex=9999;
x0.style.height=MVUtil._f26(15);
x0.style.position="absolute";
x0.style.right=MVUtil._f26(0);
x0.style.bottom=MVUtil._f26(0);
x0.style.backgroundColor="white";
this._f229.appendChild(x0);
var x1=document.createElement("tbody");
x0.appendChild(x1);
this.toolBarContainer=document.createElement("tr");
x1.appendChild(this.toolBarContainer);
}
MVMapView.prototype._f828=function(x2,x3)
{
this._f826=x2-this._f139;
this._f827=x3-this._f140;
}
MVMapView.prototype._f561=function(x4,x5)
{
this.reCenterTag=true;
this._f139=x4-this._f826;
this._f140=x5-this._f827;
this._f428=MVUtil._f80(this.div);
this._f429=MVUtil._f81(this.div);
var x6=this._f829(this._f428,this._f139,this._f429,this._f140);
this._f139=x6.left;
this._f140=x6.top;
var x7=this._f90+(this._f428-this._f139)/this._f72;
var x8=this._f91-(this._f429-this._f140)/this._f74;
this._f830(this._f139-this._f428,this._f140-this._f429,
x7,x8);
var x9=this._f90;
var x10=this._f91;
this._f90=x7;
this._f91=x8;
if(x9!=this._f90||x10!=this._f91)
{
this._f757=true;
}
MVUtil._f70(this.div,this._f139,this._f140);
MVUtil._f70(this._f307,this._f139,this._f140);
}
MVMapView.prototype.addEventListener=function(x11,x12)
{
this.setEventListener(x11,x12);
}
MVMapView.prototype.setEventListener=function(x13,x14)
{
if(x13==MVEvent.RECENTER)
{
this._f786=x14;
}
else if(x13==MVEvent.MOUSE_CLICK)
{
this._f633=x14;
}
else if(x13==MVEvent.MOUSE_RIGHT_CLICK)
{
this._f787=x14;
}
else if(x13==MVEvent.ZOOM_LEVEL_CHANGE)
{
this._f784=x14;
}
else if(x13==MVEvent.BEFORE_ZOOM_LEVEL_CHANGE)
{
this._f785=x14;
}
else if(x13==MVEvent.MOUSE_DOUBLE_CLICK)
{
this._f408=x14;
}
else if(x13==MVEvent.INITIALIZE)
{
this.initializeListener=x14;
}
}
MVMapView.prototype.attachEventListener=function(x15,x16)
{
MVUtil.attachEventListener(this._f93,x15,x16)
}
MVMapView.prototype.detachEventListener=function(x17,x18)
{
MVUtil.detachEventListener(this._f93,x17,x18);
}
MVMapView.prototype.init=function()
{
this.setFOILayersSize();
MVUtil._f70(this.div,0,0);
MVUtil._f70(this._f307,0,0);
if(this._f76._f77.length>0)
this._f76.deleteInfoWindow(this._f76._f77[0]);
this._f139=0;
this._f140=0;
this._f428=this._f139;
this._f429=this._f140;
this._f826=0;
this._f827=0;
this.setZoomLevel(this._f53);
this._f831();
var x19=MVSdoGeometry.createPoint(this._f90,this._f91,this.srid);
x19=this._f832(x19);
this._f90=x19.getPointX();
this._f91=x19.getPointY();
this._f798=this._f106();
this._f799=this._f107();
if(this._f802)
clearTimeout(this._f802);
this.setLoadingIconVisible(true);
this._f714=this._f746+(this._f743/2*this.tileWidth);
this._f715=this._f747+(this._f744/2*this.tileHeight);
this._f833();
if(!this._f88)
{
if(this._f834())
{
this._f834=true;
return ;
}
}
if(this._f701&&!this._f701._f628&&!this._f701._f123)
this._f835(this._f701);
if(this.navigationPanel&&!this.navigationPanel._f123)
this.navigationPanel.init(this._f229,this);
for(var x20=0;x20<this._f136.length;x20++)
{
if(this._f136[x20].layerControl)
{
this._f136[x20].layerControl._f445(this._f106(),this._f107(),
this._f90,this._f91);
if(this._f136[x20].layerControl&&this._f136[x20].layerControl.zoomControl.scaling)
{
this._f136[x20].layerControl.zoomControl.endScaling();
}
}
else if(this._f136[x20].isExtAPITileLayer())
{
this._f565(this._f136[x20],this._f90,this._f91,this._f53);
}
}
if(!this._f76)
this._f76=new _f305(this,"1");
if(!this.infoLayer2)
this.infoLayer2=new _f305(this,"2");
this._f126();
this._f173=this._f71;
this._f171=this._f73;
this._f78.style.zIndex=125;
this._f836();
this._f283=true;
this._f748=true;
if(this._f778!=null)
for(var x20=0;x20<this._f778.length;x20++)
if(this._f778[x20]!=null&&!this._f778[x20]._f88)
{
var id="_md_"+this._f779
this._f778[x20].init(id,this,this._f229);
this._f779++;
this._f778[x20]._f88=true;
if(this._f778[x20].afterDisAction)
{
this._f778[x20].afterDisAction();
}
}
if(this._f225!=null&&this._f225._f214==null)
this._f225.init(this._f225._f212,this);
this._f79();
this._f802=this.setTimeout("this.checkSize()",400);
if(!this._f88||this._f834)
{
this._f88=true;
this._f834=false;
if(this.initializeListener)
this.initializeListener();
MVUtil.runListeners(this._f93,MVEvent.INITIALIZE);
if(this.isSubmap==undefined||!this.isSubmap)
{
if(MVMapInitializers.length)
{
for(var x20=0;x20<MVMapInitializers.length;x20++)
{
if(MVMapInitializers[x20])
MVMapInitializers[x20](this);
}
}
}
}
window.status=' ';
}
MVMapView.prototype._f170=function()
{
while(this._f136&&this._f136.length>0)
{
var x21=this._f136.pop();
x21._f170();
}
this._f136=null;
if(!this._f76)
{
this._f76._f170();
this._f76=null;
}
while(this._f763&&this._f763.length>0)
{
var x22=this._f763.pop();
x22._f170();
}
while(this.foiGroupArray&&this.foiGroupArray.length>0)
{
var x23=this.foiGroupArray.pop();
x23._f170();
}
this._f763=null;
if(this._f260)
this._f260._f170();
this._f260=null;
if(this._f778)
while(this._f778.length>0)
{
var x24=this._f778.pop();
x24._f170();
}
this._f778=null;
if(this._f225)
{
this._f225._f170();
this._f225=null;
}
if(this.toolBar)
{
this.toolBar._f170();
this.toolBar=null;
}
MVUtil._f201(this._f229,this._f7);
this._f440=null;
this._f229=null;
this._f307=null;
this._f78=null;
this.div=null;
}
MVMapView.prototype._f831=function()
{
this.tileWidth=this._f760[this._f53];
this.tileHeight=this._f761[this._f53];
this._f837();
}
MVMapView.prototype._f837=function()
{
this._f746=-this.tileWidth*this._f745;
this._f747=-this.tileHeight*this._f745;
var x25=this._f106()/this.tileWidth;
this._f743=parseInt(Math.ceil(x25/2)+1)*2+1;
x25=this._f107()/this.tileHeight;
this._f744=parseInt(Math.ceil(x25/2)+1)*2+1;
this._f714=this._f746+(this._f743/2*this.tileWidth);this._f715=this._f747+(this._f744/2*this.tileHeight);var x26=this.msi.mapConfig.zoomLevels[this._f53];
this._f72=x26.tileImageWidth/x26.tileWidth;this._f74=x26.tileImageHeight/x26.tileHeight;}
MVMapView.prototype._f833=function()
{
this._f750=new _f382(this.msi.mapConfig,this._f90,this._f91,this._f53);this._f749=new _f382(this.msi.mapConfig,this._f90,this._f91,this._f53);this._f749._f388(-(Math.ceil(this._f743/2)-1),+Math.ceil(this._f744/2)-1);
}
MVMapView.prototype._f126=function()
{
this._f753=this._f749.minX;
this._f754=(this._f749.minY+this._f749._f384);
this._f755=(this._f749.minX+(this._f749._f383*this._f743));
this._f756=(this._f749.minY-(this._f749._f384*(this._f744-1)));
this._f71=this._f838(this._f90);
this._f310=this._f839(this._f91);
this._f304=this._f840(this._f90);
this._f73=this._f841(this._f91);
}
MVMapView.prototype.display=function()
{
var x27=this;
var x28=function()
{
var x29=0;
if(!x27._f229)
return ;
if(x27._f229.offsetWidth)
x29=parseInt(x27._f229.offsetWidth+"");
else if(typeof(x27._f229.offsetWidth)=="undefined")
x29=x27._f106();
var x30=0;
if(x27._f229.offsetHeight)
x30=parseInt(x27._f229.offsetHeight+"");
else if(typeof(x27._f229.offsetHeight)=="undefined")
x30=x27._f107();
if(!MVi18n.isFetched()||x29<=0||x30<=0||!x27.tileLayersConfigLoaded()||
!_f65._f622||!x27.msi)
{
setTimeout(x28,200);
return ;
}
var x31=function()
{
x27.init();
if(!x27._f777)
{
x27._f367();
x27._f777=true;
}
x27._f88=true;
while(x27._f89.length>0)
{
var x32=x27._f89.shift();
if(x32.func=="refreshFOIs")
x32.obj._f75(x32.params[0],x32.params[1],x32.params[2],x32.params[3],x32.params[4],x32.params[5],x32.params[6],x32.params[7],true,x32.params[8]);
else if(x32.func=="zoomToRectangle")
x32.obj.zoomToRectangle(x32.params[0],x32.params[1]);
else if(x32.func=="refresh")
x32.obj.refresh(x32.params[0]);
}
}
x27._f842(x31);
}
x28();
}
MVMapView.prototype.setCenter=function(x33,x34)
{
this.reCenterTag=true;
this.center=x33;
this.originalCenter=x33
if(this._f88)
this._f842(null,x34);
}
MVMapView.prototype._f842=function(x35,x36)
{
if(!this.center)
{
if(x35)
x35();
return ;
}
if(!this.msi)
{
MVi18n._f6("MVMapView.setCenter","MAPVIEWER-05518",null,this._f7);
return ;
}
this.srid=this.msi.getSrid();
var x37=this.center;
if(!this.reCenterTag&&this.originalCenter!=null)
x37=this.originalCenter;
if(x37)
{
if(!x37.srid)
x37.srid=this.srid;
this.center=null;
if(!(x37.sdo_point))
{
MVi18n._f6("MVMapView.setCenter","MAPVIEWER-05505",null,this._f7);
return ;
}
var x38=this;
var x39=function(x40)
{
if(x40)
x37=x40;
if(x38._f88)
x37=x38._f832(x37);
var x41=false
for(var x42=0;x42<x38._f136.length;x42++)
{
if(x38._f136[x42].isExtAPITileLayer())
x41=true;
}
if(!x38._f88){
x38._f90=x37.getPointX();
x38._f91=x37.getPointY();
x38._f843(x37.getPointX(),x37.getPointY());
}
else
 {
if(x38._f90!=x38.originalCenter.getPointX()||x38._f91!=x38.originalCenter.getPointY())
{
x38._f844=(x38._f90-x37.getPointX())*x38._f72;
x38._f845=(x38._f91-x37.getPointY())*x38._f74*(-1);
}
else
 {
x38._f844=0;
x38._f845=0;
}
x38._f846=x38._f106();
x38._f847=x38._f107();
if(Math.abs(x38._f844)<=(x38._f846+x38._f741)&&Math.abs(x38._f845)<=(x38._f847+x38._f742))
{
x38._f280=Math.sqrt(x38._f844*x38._f844+x38._f845*x38._f845);
x38._f848=20;
x38._f849=x38._f280>((x38._f846+x38._f847)/4)?300:200;
x38._f850=0;
x38._f851=0;
x38._f852=0;
x38.smoothPan(x36);
}
else
 {
x38._f90=x37.getPointX();
x38._f91=x37.getPointY();
x38.display();
if(x38._f786)
{
x38._f786();
}
MVUtil.runListeners(x38._f93,MVEvent.RECENTER);
}
if(x38._f701)
{
x38._f701._f709(x38);
}
}
if(x35)
x35();
}
if(this.srid!=x37.srid)
{
this.reCenterTag=true;
x37=this.transformGeom(x37,this.srid,null,x39);
}
else
 x39();
}
else
 {
if(x35)
x35();
}
}
MVMapView.prototype.setCenterLon=function(x43)
{
this._f90=x43;
}
MVMapView.prototype.setCenterLat=function(x44)
{
this._f91=x44;
}
MVMapView.prototype.setCenterMark=function(x45,x46,x47)
{
if(this._f853!=undefined)
{
this._f229.removeChild(this._f853);
delete this._f853;
}
if(x45==null)
return ;
this.centerMarkUrl=x45;
this.centerMarkW=x46;
this.centerMarkH=x47;
var x48=document.createElement("img");x48.src=x45;
x48.style.zIndex=2000;
x48.style.position="absolute";
x48.style.width=MVUtil._f26(x46);
x48.style.height=MVUtil._f26(x47);
x48.style.left=MVUtil._f26((this._f106()-x46)/2);
x48.style.top=MVUtil._f26((this._f107()-x47)/2);
this._f229.appendChild(x48);
this._f853=x48;
}
MVMapView.prototype.setZoomLevel=function(x49)
{
if(isNaN(x49))
{
MVi18n._f6("MVMapView.setZoomLevel","MAPVIEWER-05506",null,this._f7);
return;
}
if((!this._f88)&&this.msi==null)
{
this._f53=x49;
return ;
}
if(x49<0)
x49=0;
else if(x49>this._f765)
x49=this._f765;
if(this._f88)
this.zoomTo(x49);
else
 {
this._f53=x49;
this._f831();
}
}
MVMapView.prototype.setHomeMap=function(x50,x51)
{
this._f768=x50;
if(x51)
this._f769=x51;
}
MVMapView.prototype.setMapBuffer=function(x52,x53)
{
this._f741=x52;
this._f742=x53;
}
MVMapView.prototype._f854=function(x54,x55)
{
var x56=false;
var x57=this;
var x58=function(x59)
{
if(x59)
{
x57._f90=x59.getPointX();
x57._f91=x59.getPointY();
x57.center=x59;
}
x57.msi=x54.msi;
x57.srid=x57.msi.getSrid();
x57.maptype=x57.msi.mapConfig.coordSys.type;
if(x57._f53>(x57.msi.zoomCount-1))
{
x57._f53=x57.msi.zoomCount-1;
}
for(var x60=0;x60<x57.msi.getMaxZoomLevel();x60++)
{
x57._f760[x60]=x57.msi._f583(x57._f53);
x57._f761[x60]=x57.msi._f584(x57._f53);
}
x57._f831();
x57._f765=x57.msi.getMaxZoomLevel()-1;
x57._f833();
x55(x56);
}
if(!x54.msi)
x54.msi=new _f570(x54._f105);
if(this.msi)
{
if(x54.msi.mapConfig.coordSys.srid!=this.msi.mapConfig.coordSys.srid||x54.msi.mapConfig.zoomLevels.length!=this.msi.mapConfig.zoomLevels.length)
{
x56=true;
}
else
 {
for(var x61=0;x61<this.msi.mapConfig.zoomLevels.length;x61++)
{
var x62=x54.msi.mapConfig.zoomLevels[x61];
var x63=this.msi.mapConfig.zoomLevels[x61];
var x64=x62.tileWidth/x62.tileImageWidth;
var x65=x62.tileHeight/x62.tileImageHeight;
var x66=x63.tileWidth/x63.tileImageWidth;
var x67=x63.tileHeight/x63.tileImageHeight;
if(x64!=x66||x65!=x67)
{
x56=true;
break;
}
}
}
if(!x54.isVisible()||this.msi.getSrid()==x54.msi.getSrid())
{
x58();
return;
}
else
 {
x56=true;
var x68=MVSdoGeometry.createPoint(this._f90,this._f91,this.msi.getSrid());
if(!this.reCenterTag&&this.originalCenter!=null)
x68=this.originalCenter;
this.transformGeom(x68,x54.msi.getSrid(),null,x58);
}
}
else
 x58();
}
MVMapView.prototype.getMapBaseURL=function()
{
return this._f4;
}
MVMapView.prototype._f106=function()
{
var x69=0;
if(this._f229.style&&this._f229.style.width)
{
var x70=this._f229.style.width+"";
if(x70.indexOf("%")<0)
{
if(x70.indexOf("px")>0)
x69=parseInt(x70.substring(0,x70.indexOf("px")));
else
 x69=parseInt(x70);
if(x69)
return x69;
}
}
if(this._f229.offsetWidth)
x69=this._f229.offsetWidth;
else if(this._f229.width)
x69=parseInt(this._f229.width+"");
return x69;
}
MVMapView.prototype._f107=function()
{
var x71=0;
if(this._f229.style&&this._f229.style.height)
{
var x72=this._f229.style.height+"";
if(x72.indexOf("%")<0)
{
if(x72.indexOf("px")>0)
x71=parseInt(x72.substring(0,x72.indexOf("px")));
else
 x71=parseInt(x72);
if(x71)
return x71;
}
}
if(this._f229.offsetHeight)
x71=this._f229.offsetHeight;
else if(this._f229.width)
x71=parseInt(this._f229.width+"");
return x71;
}
MVMapView.prototype._f838=function(x73)
{
var x74=this._f106()/2;
return (0-x74)/this._f72+x73;
}
MVMapView.prototype._f839=function(x75)
{
var x76=this._f107()/2;
return -1.0*(x76-1)/this._f74+x75;
}
MVMapView.prototype._f840=function(x77)
{
var x78=this._f106()/2;
return (x78-1)/this._f72+x77;
}
MVMapView.prototype._f841=function(x79)
{
var x80=this._f107()/2;
return -1.0*(0-x80)/this._f74+x79;
}
MVMapView.prototype.getCenter=function()
{
var x81=MVSdoGeometry.createPoint(this._f90,this._f91,this.srid);
return x81;
}
MVMapView.prototype._f236=function()
{
return this._f90;
}
MVMapView.prototype._f237=function()
{
return this._f91;
}
MVMapView.prototype.getMapWindowBBox=function()
{
this._f126();
var x82=MVSdoGeometry.createRectangle(this._f71,this._f310,
this._f304,this._f73,this.srid);
return x82;
}
MVMapView.prototype.getMouseLocation=function()
{
var x83=MVSdoGeometry.createPoint(this._f751,this._f752,this.srid);
return x83;
}
MVMapView.prototype._f364=function()
{
return this._f751;
}
MVMapView.prototype._f365=function()
{
return this._f752;
}
MVMapView.prototype.getZoomLevel=function()
{
return this._f53;
}
MVMapView.prototype.getMaxZoomLevel=function()
{
if(!this.msi)
{
MVi18n._f6("MVMapView.getMaxZoomLevel","MAPVIEWER-05526",null,this._f7);
return -1;
}
else
 return this.msi.getMaxZoomLevel();
}
MVMapView.prototype.enableMapBoundConstraint=function(x84)
{
return this._f813=x84;
}
MVMapView.prototype.getBaseDiv=function()
{
return this._f229;
}
MVMapView.prototype._f855=function()
{
return this.div;
}
MVMapView.prototype._f856=function()
{
return this._f750._f384;
}
MVMapView.prototype._f857=function()
{
return this._f750._f383;
}
MVMapView.prototype._f858=function()
{
return this.msi;
}
MVMapView.prototype._f859=function()
{
return this._f753;
}
MVMapView.prototype._f860=function()
{
return this._f754;
}
MVMapView.prototype._f861=function()
{
return this._f755;
}
MVMapView.prototype._f862=function()
{
return this._f756;
}
MVMapView.prototype.getScreenMinLon=function()
{
return this._f71;
}
MVMapView.prototype._f863=function()
{
return this._f310;
}
MVMapView.prototype._f864=function()
{
return this._f304;
}
MVMapView.prototype._f865=function()
{
return this._f73;
}
MVMapView.prototype._f866=function()
{
return this._f72;
}
MVMapView.prototype._f867=function()
{
return this._f74;
}
MVMapView.prototype.zoomIn=function(x85)
{
this.zoomTo(this._f53+1,x85);
}
MVMapView.prototype.zoomOut=function(x86)
{
this.zoomTo(this._f53-1,x86);
}
MVMapView.prototype.setZoomAnimationEnabled=function(x87)
{
this.zoomAnimationEnabled=x87;
}
MVMapView.prototype.zoomTo=function(x88,x89,x90,x91)
{
var x92=this;
if(x92._f819<0)
x92._f819=x92._f53;
var x93=function()
{
x92._f868=0;
x92._f869=null;
if(x88>=x92._f765)
{
x88=x92._f765;
}
else if(x88<0)
{
x88=0;
}
if(!x91&&x92._f820==x92._f53&&x88==x92._f53&&!x89)
{
if(x92.navigationPanel)
x92.navigationPanel.updateSliderBar();
return false;
}
x92._f657();
x92._f53=x88;
if(x92.navigationPanel)
x92.navigationPanel.updateSliderBar();
x92._f53=x88;
x92._f831();
var x94=false;
var x95=MVSdoGeometry.createPoint(x92._f90,x92._f91,x92.srid);
var x96=function(x97)
{
if(x97)
x89=x97;
if(x92._f762)
{
clearTimeout(x92._f762);
x92._f762=null;
}
if(x89)
{
if(x89.getPointX()!=x92._f90||x89.getPointY()!=x92._f91)
{
x94=true;
}
x92._f90=x89.getPointX();
x92._f91=x89.getPointY();
}
if(x92._f785&&x92._f819!=x92._f53)
x92._f785(x92._f819,x92._f53);
if(x92._f819!=x92._f53)
MVUtil.runListeners(x92._f93,MVEvent.BEFORE_ZOOM_LEVEL_CHANGE,[x92._f819,x92._f53]);
var x98=function()
{
if(Math.abs(x92._f819-x92._f53)==1&&x92._f817<=1&&x92.zoomAnimationEnabled&&!x90)
{
for(var x99=0;x99<x92._f136.length;x99++)
{
if(x92._f136[x99].layerControl&&!x92._f136[x99].layerControl.zoomControl.scaling)
x92._f136[x99].layerControl.zoomControl.showTiles(x92._f819,x92._f53,x95,x89);
}
}
x92.display();
x92._f817=0;
x92._f818=null;
x92._f820=x92._f53;
if(x94)
{
if(x92._f786)
x92._f786();
MVUtil.runListeners(x92._f93,MVEvent.RECENTER);
}
if(x92._f225)
{
x92._f225._f240(x92._f819,x92._f53);
var x100=function(){
x92._f225._f239();
}
setTimeout(x100,200);
}
if(x92._f819!=x92._f53)
{
var x101=x92._f819;
x92._f819=-1;
if(x92._f784)
x92._f784(x101,x92._f53);
MVUtil.runListeners(x92._f93,MVEvent.ZOOM_LEVEL_CHANGE,[x101,x92._f53]);
}
}
if(!x92._f817)
x92._f817=0;
x92._f817++;
if(x92._f818)
clearTimeout(x92._f818);
x92._f818=setTimeout(x98,200);
if(x92._f701)
{
x92._f701._f709(x92);
}
}
if(x89)
{
x92.reCenterTag=true;
x92.srid=x92.msi.getSrid();
if(!x89.srid)
x89.srid=x92.srid;
if(!(x89.sdo_point))
{
MVi18n._f6("MVMapView.zoomTo","MAPVIEWER-05505",null,x92._f7);
return ;
}
if(x89.srid&&(x92.srid!=x89.srid))
x89=x92.transformGeom(x89,x92.srid,null,x96);
else
 x96();
}
else
 x96();
return true;
}
if(!this._f868)
this._f868=0;
this._f868++;
if(x92._f818)
{
clearTimeout(x92._f818);
x92._f818=null;
}
if(this._f869)
clearTimeout(this._f869);
if(this._f868<2)
this._f869=setTimeout(x93,200);
else
 {
x93();
return ;
}
}
MVMapView.prototype.zoomToAtLocation=function(x102,x103)
{
this.srid=this.msi.getSrid();
var x104=this;
var x105=function(x106)
{
if(x106)
x102=x106;
var x107=(x104._f90-x102.getPointX())*x104._f72;
var x108=(x104._f91-x102.getPointY())*x104._f74;
var x109=x104._f760[x103]/x104.msi._f581(x103);
var x110=x104._f761[x103]/x104.msi._f582(x103);
var x111=x107/x109+x102.getPointX();
var x112=x108/x110+x102.getPointY();
var x113=MVSdoGeometry.createPoint(x111,x112,x104.srid);
x104.zoomTo(x103,x113);
}
if(x102.srid&&(this.srid!=x102.srid))
x102=this.transformGeom(x102,this.srid,null,x105);
else
 x105();
}
MVMapView.prototype.setCenterAndZoomLevel=function(x114,x115)
{
if(!this._f88)
{
this.center=x114;
this._f53=x115;
this.originalCenter=x114;
return ;
}
this.srid=this.msi.getSrid();
if(!x114.srid)
x114.srid=this.srid;
var x116=this;
var x117=function(x118)
{
if(x118)
x114=x118;
if(x115==null)
{
x115=x116._f53;
}
if(!x116._f88)
{
x116.setCenter(x114);
x116.setZoomLevel(x115);
return ;
}
if(x115==x116._f53)
{
if(!x116._f748)
{
x116.zoomTo(x115,x114);
return;
}
else {
x116._f844=(x116._f90-x114.getPointX())*x116._f72
x116._f845=(x116._f91-x114.getPointY())*x116._f74*(-1);
x116._f846=x116._f106();
x116._f847=x116._f107();
if(Math.abs(x116._f844)<=(x116._f846+x116._f741)&&Math.abs(x116._f845)<=(x116._f847+x116._f742))
{
x116._f280=Math.sqrt(x116._f844*x116._f844+x116._f845*x116._f845);
x116._f848=20;
x116._f849=x116._f280>((x116._f846+x116._f847)/4)?300:200;
x116._f850=0;
x116._f851=0;
x116._f852=0;
x116.smoothPan();
return;
}
}
}
x116.zoomTo(x115,x114);
}
if(x114.srid&&(this.srid!=x114.srid))
x114=this.transformGeom(x114,this.srid,null,x117);
else
 x117();
}
MVMapView.prototype.addMapTileLayer=function(x119,x120)
{
if(x119.getType&&x119.getType()=="MVExternalAPIMapTileLayer")
this._f870(x119);
else
 {
if(x119._f105==undefined||
x119._f105==null||
MVUtil._f241(x119._f105)=="")
{
MVi18n._f6("MVMapView.addMapTileLayer","MAPVIEWER-05507",null,this._f7);
return ;
}
if(!this._f538&&this.compareBaseURL(x119._f423))
{
var x121=x119._f105.split(".");
if(x121.length>=2)
{
_f65._f539(x121[0]);
this._f539(x121[0]);
}
}
x119.parent=this;
if(!x119._f423)
{
if(this._f4)
{
if(MVUtil._f5(this._f4,'/'))
x119._f423=this._f4+'mcserver';
else
 x119._f423=this._f4+'/mcserver';
}
else
 {
MVi18n._f6("MVMapView.addMapTileLayer","MAPVIEWER-05504",null,this._f7);
return ;
}
}
x119._f562=x119._f423;
if(x119==null||!x119.getType)
{
MVi18n._f6("MVMapView.addMapTileLayer","MAPVIEWER-05519","mapTileLayer",this._f7);
return;
}
this._f136.push(x119);
}
var x122=this;
var x123=function()
{
x122.mapLayerNumber++;
if(!x119.zIndex)
x119.zIndex=x122._f136.length+1;
x122._f854(x119,AfterSetProvider);
x122._f566();
function AfterSetProvider(x0)
{
x119.config=_f572[x119._f105];
if(!x119.isExtAPITileLayer())
{
var x1=x122.getTileLayerControl(x119);
x119.layerControl=x1;
x122.combineTileLayers();
}
if(x0&&x122._f136.length>1)
{
if(!x122._f226)
MVi18n._f6("MVMapView.addMapTileLayer","MAPVIEWER-05528",null,this._f7);
for(var x2=0;x2<x122._f136.length;x2++)
{
if(x122._f136[x2]!=x119)
x122.removeMapTileLayer(x122._f136[x2]);
}
}
if(x122._f88)
{
if(!x0)
{
if(x119.isExtAPITileLayer())
{
var x3=function(x4)
{
x119.setCenterAndZoomLevel(x4.getPointX(),x4.getPointY(),x122._f53);
}
var x5=MVSdoGeometry.createPoint(x122._f90,x122._f91,x122.srid);
x122.transformGeom(x5,x119.srid,null,x3);
}
else
 {
if(x119.layerControl)
x119.layerControl._f445(x122._f106(),x122._f107(),x122._f90,x122._f91);
}
}
else
 {
x122.display();
}
if(x122._f701)
{
x122._f701._f709(x122);
}
if(x122.navigationPanel&&x122.navigationPanel.getMaxZoomLevel()!=x122._f765)
{
x122.navigationPanel.updateSlider();
}
}
if(x120)
x120();
if(x122._f225&&x122._f225._f216&&x122._f225._f216._f136.length==0)
x122._f225.addOverviewMapTileLayer();
if(x122._f225&&x122._f225._f216)
x122._f225._f232();
}
}
_f65._f600(x119,x123,this._f7);
}
MVMapView.prototype.addBaseMapLayer=MVMapView.prototype.addMapTileLayer;
MVMapView.prototype.getMapTileLayerDefinition=function(x124,x125,x126)
{
if(!x126)
x126=null;
var x127=new MVMapTileLayer(x125,x126);
if(!x127._f423)
{
if(this._f4)
{
if(MVUtil._f5(this._f4,'/'))
x127._f423=this._f4+'mcserver';
else
 x127._f423=this._f4+'/mcserver';
}
else
 {
MVi18n._f6("MVMapView.getMapTileLayerDefinition","MAPVIEWER-05504",null,this._f7);
return ;
}
}
x127._f562=x127._f423;
_f65._f600(x127,x124,this._f7);
}
MVMapView.prototype.removeMapTileLayer=function(x128)
{
var x129=0;
var x130=x128._f105;
var x131=x128._f423;
if(x128._f563){
var x132=x128._f563
for(var x133=0;x133<x132._f452.length;x133++)
{
if(x132._f452[x133]==x128)
{
if(x132._f452.length>1)
{
x132._f452[x133]=x132._f452[x132._f452.length-1];
x132._f452.pop();
var x134=x132.getTransparent();
if(x132.layerControl)
x132.layerControl._f425=x134;
x132.refresh(true);
if(this._f225)
this.removeOverviewMapTileLayer(x130,x131);
x128._f563=null;
return;
}
else
 {
x132._f452[x133]=null;
x132._f452.pop();
x128=x132;
x128._f563=null;
}
}
}
}
for(;x129<this._f136.length;x129++)
{
if(this._f136[x129]==x128)
{
var x135=this._f136[x129];
this._f136[x129]=this._f136[this._f136.length-1];
x135._f170();
this._f136.pop();
this.mapLayerNumber--;
if(this._f225)
this.removeOverviewMapTileLayer(x130,x131);
break;
}
}
this._f566();
if(this.msi._f571==x130&&this._f136.length>0)
{
var x136=this;
var x137=this._f136[this._f136.length-1];
function AfterSetProvider(x0)
{
if(x136._f88)
{
if(!x0)
{
if(x137.isExtAPITileLayer())
{
var x1=function(x2)
{
x137.setCenterAndZoomLevel(x2.getPointX(),x2.getPointY(),x136._f53);
}
var x3=MVSdoGeometry.createPoint(x136._f90,x136._f91,x136.srid);
x136.transformGeom(x3,x137.srid,null,x1);
}
else
 {
if(x137.layerControl)
x137.layerControl._f445(x136._f106(),x136._f107(),x136._f90,x136._f91);
}
}
else
 {
x136.display();
}
if(x136._f701)
{
x136._f701._f709(x136);
}
if(x136.navigationPanel&&x136.navigationPanel.getMaxZoomLevel()!=x136._f765)
{
x136.navigationPanel.updateSlider();
}
}
}
this._f854(x137,AfterSetProvider);
}
}
MVMapView.prototype.removeOverviewMapTileLayer=function(x138,x139)
{
if(this._f225._f216._f136.length>0)
{
var x140=this._f225._f216._f136[0];
if(x140._f105==x138&&x140._f423==x139)
{
this._f225._f216.removeMapTileLayer(x140);
this._f225._f232();
}
}
}
MVMapView.prototype._f542=function()
{
if(!this._f76)
this._f76=new _f305(this,"1");
if(!this.infoLayer2)
this.infoLayer2=new _f305(this,"2");
this._f260=new _f275(this);
this._f260.setSize(Math.ceil(2*(this._f106())),
Math.ceil(2*(this._f107())));
MVUtil._f70(this._f260._f56(),
(this._f106()-this._f260._f84())/2,
(this._f107()-this._f260._f85())/2);
}
MVMapView.prototype.addGroupFOI=function(x141)
{
this._f151=0;
this._f871=x141;
this.startAddGroupFOI();
}
MVMapView.prototype.startAddGroupFOI=function()
{
for(var x142=0;x142<11000;x142++)
{
if(this._f151<this._f871.length)
{
this.addFOI(this._f871[this._f151]);
this._f151++;
}
else
 {
this._f871=null;
this._f872=null;
return;
}
}
this.setTimeout("this.startAddGroupFOI()",5);
}
MVMapView.prototype.addFOI=function(x143)
{
if(!this._f538&&this.compareBaseURL(x143._f3)&&x143.style&&x143.style.indexOf!=undefined)
{
var x144=x143.style.split(".");
if(x144.length>=2)
{
_f65._f539(x144[0]);
this._f539(x144[0]);
}
}
if(!x143||!x143.id)
return false;
if(x143.gtype%10==1)
x143._f247=true;
if(x143.id!="")
{
var x145=x143.id.substr(0,3);
if(x145!="-RL")
{
for(var x146=0;x146<this._f260._f276.length;x146++)
{
if(this._f260._f276[x146].id==x143.id)
{
MVi18n._f6("MVMapView.addFOI","MAPVIEWER-05508","foi.id:"+x143.id,this._f7);
return false;
}
}
}
}
if(x143.gtype%10==1&&!x143.style)
{
x143._f102=x143._f3;
}
if(!x143._f3&&!x143.isHTMLFOI)
x143._f3=_f65._f472();
this._f260._f272(x143);
return true;
}
MVMapView.prototype.getFOI=function(id)
{
return this._f260._f279(id);
}
MVMapView.prototype.removeFOI=function(x147)
{
if(!x147)
return ;
if(x147.id)
this._f260._f271(x147.id);
else
 this._f260._f271(x147);
}
MVMapView.prototype.getAllFOIs=function()
{
return this._f260._f295();
}
MVMapView.prototype._f296=function()
{
this._f126();
if(this._f260!=null)
{
var x148=(this._f260._f84()-
this._f106())*0.5/this._f72;
var x149=(this._f260._f85()-
this._f107())*0.5/this._f74;
MVUtil._f70(this._f260._f56(),
(this._f106()-this._f260._f84())/2,
(this._f107()-this._f260._f85())/2);
MVUtil._f70(this._f260.getTopContainer(),
(this._f106()-this._f260._f84())/2,
(this._f107()-this._f260._f85())/2);
this._f260._f296(this._f71-x148,
this._f310-x149,this._f304+x148,
this._f73+x149);
}
}
MVMapView.prototype.removeAllFOIs=function()
{
this._f260._f86();
}
MVMapView.prototype.addRedLineTool=function(x150)
{
if(x150==null)
{
MVi18n._f6("MVMapView.addRedLineTool","MAPVIEWER-05519","redlineTool",this._f7);
return;
}
x150.parent=this;
if(!x150._f3)
x150._f3=_f65._f472();
}
MVMapView.prototype.addCircleTool=function(x151)
{
if(x151==null)
{
MVi18n._f6("MVMapView.addCircleTool","MAPVIEWER-05519","circleTool",this._f7);
return;
}
this._f229.appendChild(x151._f489);
x151.parent=this;
if(!x151._f488)
x151._f488=_f65._f472();
}
MVMapView.prototype.addRectangleTool=function(x152)
{
if(x152==null)
{
MVi18n._f6("MVMapView.addRectangleTool","MAPVIEWER-05519","rectangleTool",this._f7);
return;
}
this.div.appendChild(x152._f690);
x152.parent=this;
if(!x152._f488)
x152._f488=_f65._f472();
}
MVMapView.prototype.addDistanceTool=function(x153)
{
if(x153==null)
{
MVi18n._f6("MVMapView.addDistanceTool","MAPVIEWER-05519","distanceTool",this._f7);
return;
}
x153.parent=this;
if(!x153._f3)
x153._f3=_f65._f472();
}
MVMapView.prototype.addToolBar=function(x154)
{
if(x154==null)
{
MVi18n._f6("MVMapView.addToolBar","MAPVIEWER-05519","toolBar",this._f7);
return;
}
this.toolBar=x154;
x154.mapviewer=this;
x154.init();
this.addMapDecoration(x154.toolBarDecoration);
x154._f687();
if(this._f88)
x154._f686();
else
 x154.toolBarDecoration.afterDisAction=x154._f686;
}
MVMapView.prototype.stopMarqueeZoom=function()
{
this._f772=false;
if(this._f773)
this._f773.clear();
MVUtil.runListeners(this._f93,MVEvent.MARQUEEZOOM_FINISH);
}
MVMapView.prototype.startMarqueeZoom=function(x155,x156,x157)
{
if(!x155)
x155="one_time";
if(x157&&x157>0)
this._f803=x157;
this._f772=true;
this._f771=x155;
this.marqueeZoom(x156);
}
MVMapView.prototype.marqueeZoom=function(x158)
{
if(!this._f772)
return ;
this._f774=false;
this._f776=false;
var x159=this._f773;
if(!x159)
{
x159=new MVRectangleTool(null,null);
x159.setDivFillColor("#555555",0.3);
this.addRectangleTool(x159);
this._f773=x159;
}
if(x158)
x159.setDivStyle(x158);
x159.init();
var x160=MVUtil._f103(x159,function()
{
this.clear();
var x161=null;
if(this.parent.marqueeRectGeom)
x161=this.parent.marqueeRectGeom.getMBR();
if(x161&&
(this._f771=="prompt"||
Math.abs(x161[2]-x161[0])*this.parent._f72>=this.parent._f803&&
Math.abs(x161[3]-x161[1])*this.parent._f74>=this.parent._f803))
{
var x162=document.getElementById("mv_mrqzm_msg");
if(x162)
x162.parentNode.removeChild(x162);
this.parent.zoomToRectangle(this.parent.marqueeRectGeom);
}
if(this.parent._f771!="one_time")
{
this.parent.marqueeZoom();
}
});
var x163=MVUtil._f103(x159,function()
{
this.parent._f774=true;
this.parent.marqueeRectGeom=x159.getRectangle();
x160();
});
var x164=MVUtil._f103(x159,function()
{
this.parent.marqueeRectGeom=x159.getRectangle();
x160();
this._f772=false;
});
var x165=MVUtil._f103(x159,function(x166)
{
this.parent._f775=true;
x166=(x166)?x166:((window.event)?event:null);
MVUtil._f175(x166);
});
var x167=MVUtil._f103(x159,function(x168)
{
x168=(x168)?x168:((window.event)?event:null);
if(this.parent._f775)
{
MVUtil._f175(x168);
x160();
}
});
var x169=MVUtil._f103(x159,function()
{
this.parent._f774=true;
this.parent.marqueeRectGeom=x159.getRectangle();
if(!this.parent.marqueeRectGeom)
{
this.clear();
this.parent.marqueeZoom();
return ;
}
var x170=this.parent;
var x171=x159.getRectangleDIV();
MVUtil._f162(x171,"crosshair");
if(MVi18n._f354("marqueeZoomHint"))
{
x171.onmouseover=function(x172)
{
var x173=document.getElementById("mv_mrqzm_msg");
if(x173)
x173.parentNode.removeChild(x173);
x173=MVUtil._f740(MVi18n._f354("marqueeZoomHint"));
x173.id="mv_mrqzm_msg";
x173.style.border="1px solid #000000";
x173.style.backgroundColor="#FFFFCC";
x173.style.position="absolute";
var x174=MVUtil._f721(x170,x172);
x173.style.left=x174.x+"px";
x173.style.top=x174.y+"px";
x173.style.zIndex=9999;
x170._f229.appendChild(x173);
};
x171.onmouseout=function()
{
var x175=document.getElementById("mv_mrqzm_msg");
if(x175)
x175.parentNode.removeChild(x175);
};
}
this.parent._f775=false;
x171.onmousedown=x165;
x171.onmouseup=x167;
x171.onclick=function(x176)
{
MVUtil._f175(x176);
};
});
this._f775=false;
if(this._f771=="prompt")
x159.addEventListener("on_finish",x169);
else if(this._f771=="continuous")
x159.addEventListener("on_finish",x163);
else
 x159.addEventListener("on_finish",x164);
}
MVMapView.prototype.zoomToRectangle=function(x177)
{
if(!this._f88)
{
this._f873(this,"zoomToRectangle",x177);
return ;
}
var x178=this;
var x179=function(x180)
{
var x181=x180.getMBR();
var x182=Math.abs(x181[0]-x181[2]);
var x183=Math.abs(x181[1]-x181[3]);
var x184=x182*(x178._f72);
var x185=x183*(x178._f74);
var x186=x178._f106();
var x187=x178._f107();
var x188=x178._f53;
var x189=x188;
var x190=x178._f765;
if(x186<x184||x187<x185)
{
for(var x191=(x188-1);x191>=0;--x191)
{
x189=x191;
var x192=(x178._f760[x191]/x178.msi._f581(x191))*x182;
var x193=(x178._f761[x191]/x178.msi._f582(x191))*x183;
if(x192<=x186&&x193<=x187)
break;
}
}
else if(x186>x184&&x187>x185)
{
for(var x191=(x188+1);x191<=x190;++x191)
{
var x192=(x178._f760[x191]/x178.msi._f581(x191))*x182;
var x193=(x178._f761[x191]/x178.msi._f582(x191))*x183;
if(x192<=x186&&x193<=x187)
x189=x191;
else
 break;
}
}
var x194=(x181[0]+x181[2])/2;
var x195=(x181[1]+x181[3])/2;
var x196=MVSdoGeometry.createPoint(x194,x195,x178.srid);
x178.zoomTo(x189,x196);
}
if(!x177.srid)
x177.srid=this.srid;
if(x177.srid&&this.srid!=x177.srid)
this.transformGeom(x177,this.srid,null,x179);
else
 x179(x177);
}
MVMapView.prototype._f874=function(x197)
{
var x198=(x197._f84()-this._f106())*0.5/this._f72;
var x199=(x197._f85()-this._f107())*0.5/this._f74;
var x200=new Array();
if(x197._f1._f45==1&&x197._f1._f46==1)
{
x200[0]=this._f71;
x200[1]=this._f310;
x200[2]=this._f304;
x200[3]=this._f73;
}
else
 {
var x201=this._f875(this._f71-x198,this._f310-x199);
var x202=this._f876(this._f304+x198,this._f73+x199);
x200[0]=x201.x;
x200[1]=x201.y;
x200[2]=x202.x;
x200[3]=x202.y;
}
var x203=Math.floor((x200[2]-x200[0])*this._f72+0.5);
var x204=Math.floor((x200[3]-x200[1])*this._f74+0.5);
x197._f44(x203,x204);
return x200;
}
MVMapView.prototype._f834=function()
{
this._f126();
var x205=0;
for(x205=0;x205<this._f763.length;x205++)
{
var x206=this._f763[x205];
if(x206._f1._f877)
{
x206.clearTransImageLayer();
var x207=this._f874(x206);
x206._f75(this,x207[0],x207[1],x207[2],x207[3],true,true,null,true,x206._f1._f878);
return true;
}
}
return false;
}
MVMapView.prototype._f835=function(x208,x209)
{
var x210=this;
var x211=function(x212)
{
x212.style.position="absolute";
if(x210._f696==1||x210._f696==3)
x212.style.right=MVUtil._f26(x210._f697);
else
 x212.style.left=MVUtil._f26(x210._f697);
if(x210._f696==2||x210._f696==3)
x212.style.bottom=MVUtil._f26(x210._f698);
else
 x212.style.top=MVUtil._f26(x210._f698);
}
x208._f699(this,x209,x211);
}
MVMapView.prototype.addThemeBasedFOI=function(x213)
{
if(!this._f538&&this.compareBaseURL(x213._f3)&&
!x213._f35&&!x213.isCustomTheme)
{
var x214=x213._f37.split(".");
if(x214.length>=2)
{
_f65._f539(x214[0]);
this._f539(x214[0]);
}
}
if(this._f795)
{
this._f879(x213);
return ;
}
if(!x213)
{
MVi18n._f6("MVMapView.addThemeBasedFOI","MAPVIEWER-05519","themeBasedFOI",this._f7);
return ;
}
if(!this._f76)
this._f76=new _f305(this,"1");
for(var x215=0;x215<this._f763.length;x215++)
{
if(MVUtil._f241(this._f763[x215]._f1.name)==MVUtil._f241(x213.name))
{
MVi18n._f6("MVMapView.addThemeBasedFOI","MAPVIEWER-05509",MVUtil._f241(x213.name),this._f7);
return;
}
}
x213.parent=this;
var x216=new _f0(this,x213);
x216.currentIndex=this._f763.length;
if(this._f763.length<100)
{
x216.div.style.zIndex=this._f763.length*2+130;
x216._f27=this._f763.length;
}
else
 {
x216.div.style.zIndex=100*2+130;
x216._f27=100;
}
x216.setSize(parseInt(x213._f45*(this._f106())),
parseInt(x213._f46*(this._f107())));
this._f763[this._f763.length]=x216;
if(this._f88)
{
var x217=this._f874(x216);
MVUtil._f70(x216._f56(),Math.ceil((x217[0]-this._f71)*this._f72),
-Math.ceil((x217[3]-this._f73)*this._f74));
if(x213._f877)
x216._f75(this,x217[0],x217[1],
x217[2],x217[3],false,true,false,false,x213._f878);
else
 x216._f75(this,x217[0],x217[1],
x217[2],x217[3],false,false);
}
}
MVMapView.prototype.getThemeIndex=function(x218)
{
for(var x219=0;x219<this._f763.length;x219++)
{
if(MVUtil._f241(this._f763[x219]._f1.name)==MVUtil._f241(x218.name))
{
return x219+1;
}
}
MVi18n._f6("MVMapView.getThemeIndex","MAPVIEWER-05510",MVUtil._f241(x218.name),this._f7);
}
MVMapView.prototype.getOrigThemeIndex=function(x220)
{
for(var x221=0;x221<this._f763.length;x221++)
{
if(MVUtil._f241(this._f763[x221]._f1.name)==MVUtil._f241(x220.name))
{
return this._f763[x221]._f27;
}
}
MVi18n._f6("MVMapView.getOrigThemeIndex","MAPVIEWER-05510",MVUtil._f241(x220.name),this._f7);
}
MVMapView.prototype.setThemeIndex=function(x222,x223)
{
if(x223>100)
x223=100;
if(x223<1)
x223=1;
for(var x224=0;x224<this._f763.length;x224++)
{
if(MVUtil._f241(this._f763[x224]._f1.name)==MVUtil._f241(x222.name))
{
while(x224+1<this._f763.length&&x224+1<x223)
{
var x225=this._f763[x224];
this._f763[x224]=this._f763[x224+1];
this._f763[x224+1]=x225;
x224++;
}
while(x224+1>x223)
{
var x225=this._f763[x224];
this._f763[x224]=this._f763[x224-1];
this._f763[x224-1]=x225;
x224--;
}
break;
}
}
for(var x226=0;x226<this._f763.length;x226++)
{
this._f763[x226].div.style.zIndex=x226*2+130;
if(this._f763[x226]._f28)
this._f763[x226]._f28.style.zIndex=x226*2+130+1;
if(this._f763[x226]._f28&&this._f763[x226]._f25!=1&&
this._f763[x226]._f1._f99<=this._f53)
this._f78.style.zIndex=x226*2+130+1;
this._f763[x226].currentIndex=x226;
}
}
MVMapView.prototype.setToOrigThemeIndex=function(x227)
{
for(var x228=0;x228<this._f763.length;x228++)
{
if(MVUtil._f241(this._f763[x228]._f1.name)==MVUtil._f241(x227.name))
{
this._f763[x228].div.style.zIndex=this._f763[x228]._f27*2+130;
if(this._f763[x228]._f25==2&&_f65._f66!="IF"&&
this._f763[x228]._f28)
{
this._f763[x228]._f28.style.zIndex=this._f763[x228]._f27*2+130+1;
}
}
}
}
MVMapView.prototype.getThemeBasedFOI=function(x229)
{
for(var x230=0;x230<this._f763.length;x230++)
{
if(this._f763[x230].getThemeBasedFOI().name==x229)
{
return this._f763[x230].getThemeBasedFOI();
}
}
return null;
}
MVMapView.prototype.getThemeBasedFOIs=function()
{
var x231=new Array();
for(var x232=0;x232<this._f763.length;x232++)
{
x231.push(this._f763[x232].getThemeBasedFOI());
}
return x231;
}
MVMapView.prototype.enableInfoWindowEventPropagation=function(x233)
{
if(!this._f76)
this._f76=new _f305(this,"1");
this._f76.enableEventPropagation(x233);
}
MVMapView.prototype.refreshThemeBasedFOIs=function(x234)
{
if(this._f76)
this._f76._f308();
this._f126();
var x235=0;
for(x235=0;x235<this._f763.length;x235++)
{
var x236=this._f763[x235];
if(x236._f25!=1)
{
x236.clearTransImageLayer();
}
var x237=this._f874(x236);
var x238=x236._f1.getFOIData();
if(x238!=null)
{
if(!x236._f2&&
!x236._f1._f880&&x238[0].gtype%10==1&&
x236._f1._f67<this._f53){
x236.clearAll();
x236.div.style.display='none';
x236._f1.minX=x236.minX=x237[0];
x236._f1.minY=x236.minY=x237[1];
x236._f1.maxX=x236.maxX=x237[2];
x236._f1.maxY=x236.maxY=x237[3];
x236._f53=this._f53;
var x239=Math.ceil((x236.minX-this._f71)*this._f72);
var x240=-Math.ceil((x236.maxY-this._f73)*this._f74);
MVUtil._f70(x236._f56(),x239,x240);
x236._f22=this._f90;
x236._f23=this._f91;
for(var x241=0;x241<x238.length;x241++)
{
x236._f134(x238[x241]);
}
x236.makeFOIsVisiable();
x236._f2=false;
x236._f24=false;
continue;
}
}
x236._f75(this,x237[0],x237[1],x237[2],x237[3],x234,false,null,true);
}
}
MVMapView.prototype._f875=function(x242,x243)
{
var x244={"x":0,"y":0};
var x245=Math.floor((x242-this.msi._f49())/this.msi._f581(this._f53));
var x246=Math.floor((x243-this.msi._f50())/this.msi._f582(this._f53));
x244.x=this.msi._f49()+x245*this.msi._f581(this._f53);
x244.y=this.msi._f50()+x246*this.msi._f582(this._f53);
return x244;
}
MVMapView.prototype._f876=function(x247,x248)
{
var x249={"x":0,"y":0};
var x250=Math.floor((x247-this.msi._f49())/this.msi._f581(this._f53));
var x251=Math.floor((x248-this.msi._f50())/this.msi._f582(this._f53));
x249.x=this.msi._f49()+(x250+1)*this.msi._f581(this._f53);
x249.y=this.msi._f50()+(x251+1)*this.msi._f582(this._f53);
return x249;
}
MVMapView.prototype._f881=function()
{
if(this._f88)
{
for(var x252=0;x252<this._f763.length;x252++)
this._f763[x252].setVisible(false,false);
this.refreshThemeBasedFOIs(false);
}
while(this._f763.length>0)
{
this._f763[this._f763.length-1]._f170();
this._f763[this._f763.length-1]=null;
this._f763.pop();
}
while(this._f78.childNodes.length>0)
{
this._f78.removeChild(this._f78.childNodes[0]);
}
}
MVMapView.prototype.removeThemeBasedFOI=function(x253)
{
if(!x253)
return ;
for(var x254=0;x254<this._f763.length;x254++)
{
if(x253==this._f763[x254].getThemeBasedFOI())
{
this._f763[x254]._f170();
this._f763.splice(x254,1);
break;
}
}
for(var x255=0;x255<this._f78.childNodes.length;x255++)
{
if(this._f78.childNodes[x255].id==x253.name)
{
this._f78.removeChild(this._f78.childNodes[x255]);
x255--;
}
}
for(var x256=0;x256<this._f763.length;x256++)
{
this._f763[x256].div.style.zIndex=x256*2+130;
if(this._f763[x256]._f28&&this._f763[x256]._f25!=1&&
this._f763[x256]._f1._f99<=this._f53)
{
this._f763[x256]._f28.style.zIndex=x256*2+130+1;
this._f78.style.zIndex=x256*2+130+1;
}
this._f763[x256].currentIndex=x256;
}
}
MVMapView.prototype._f882=function()
{
if(this._f76)
this._f76._f308();
this._f126();
var x257=0;
var x258=false;
for(x257=0;x257<this._f763.length;x257++)
{
var x259=this._f763[x257];
if((
this._f71<x259._f49()||
this._f310<x259._f50()||
this._f304>x259._f51()||
this._f73>x259._f52())&&x259._f1._f880)
{
var x260=this._f874(x259);
if(x259._f25!=1)
{
x259.clearTransImageLayer();
}
x259._f75(this,x260[0],x260[1],x260[2],x260[3],true,false);
}
else if(x259._f2)
{
var x260=this._f874(x259);
x259._f75(this,x260[0],x260[1],x260[2],x260[3],true,false);
}
}
if(this._f71<this._f260.minX||
this._f310<this._f260.minY||
this._f304>this._f260.maxX||
this._f73>this._f260.maxY)
{
var x261=(this._f260._f84()-this._f106())*0.5/this._f72;
var x262=(this._f260._f85()-this._f107())*0.5/this._f74;
this._f260._f296(this._f71-x261,
this._f310-x262,
this._f304+x261,
this._f73+x262);
this.refreshGroupFOIs(false);
}
else if(this.wraparound){
var x261=(this._f260._f84()-this._f106())*0.5/this._f72;
var x263=x261-(this._f71-this._f260.minX);
var x264=x261-(this._f260.maxX-this._f304);
var x265=x263>0?x263:x264;
var x266=(this.msi._f165-this.msi._f166)/4;
if(x265>x266)
{
var x262=(this._f260._f85()-this._f107())*0.5/this._f74;
this._f260._f296(this._f71-x261,
this._f310-x262,
this._f304+x261,
this._f73+x262);
}
}
if(!x258)
{
this._f76.refresh(this._f71,this._f310,this._f304,
this._f73,this._f106(),this._f107());
this.infoLayer2.refresh(this._f71,this._f310,this._f304,
this._f73,this._f106(),this._f107());
x258=true;
}
}
MVMapView.prototype.getAllThemeBasedFOIs=function()
{
return this._f763;
}
MVMapView.prototype.setDefaultInfoWindowStyle=function(x267,x268)
{
_f65._f312=x267;
if(x267=="MVInfoWindowStyle1")
MVInfoWindowStyle1._f883=x268;
}
MVMapView.prototype.displayInfoWindow=function(x269,x270,x271,x272,x273,x274,x275)
{
if(this.infoWindowTimeout)
{
clearTimeout(this.infoWindowTimeout);
this.infoWindowTimeout=null;
}
var x276=this;
var x277=function(x278)
{
if(x278)
x269=x278;
x276._f76._f321(x270,x269.sdo_point.x,x269.sdo_point.y,x271,x272,x273,x274,x275);
}
var x279=function()
{
if(x276._f88&&!x276._f818&&!x276._f869&&!x276._f762)
{
if(!x269.srid)
x269.srid=x276.srid;
if(x269.srid&&(x276.srid!=x269.srid))
center=x276.transformGeom(x269,x276.srid,null,x277);
else
 x277();
}
else
 x276.infoWindowTimeout=setTimeout(x279,200);
}
x279();
}
MVMapView.prototype.displayTabbedInfoWindow=function(x280,x281,x282,x283,x284,x285)
{
if(this.infoWindowTimeout)
{
clearTimeout(this.infoWindowTimeout);
this.infoWindowTimeout=null;
}
var x286=this;
var x287=function(x288)
{
if(x288)
x280=x288;
x286._f76.showTabbedHtmlWindow(null,x280.sdo_point.x,x280.sdo_point.y,x283,x284,x285,x281,x282);
}
var x289=function()
{
if(x286._f88&&!x286._f818&&!x286._f869&&!x286._f762)
{
if(!x280.srid)
x280.srid=x286.srid;
if(x280.srid&&(x286.srid!=x280.srid))
center=x286.transformGeom(x280,x286.srid,null,x287);
else
 x287();
}
else
 x286.infoWindowTimeout=setTimeout(x289,200);
}
x289();
}
MVMapView.prototype.setInfoWindow=function(x290,x291,x292)
{
this._f783=x290;
this._f315=x291;
this._f316=x292;
}
MVMapView.prototype._f884=function(x293,x294)
{
_f65._f315=x293;
_f65._f316=x294;
}
MVMapView.prototype.removeInfoWindow=function()
{
if(this._f76._f77.length>0)
this._f76.deleteInfoWindow(this._f76._f77[0]);
}
MVMapView.prototype.addCSTransformFunction=function(x295,x296,x297)
{
_f65._f419(x296,x297,x295);
}
MVMapView.prototype.transformGeom=function(geometry,_f416,_f423,callBack,dataSource)
{
if(!geometry.srid)
{
if(!this.srid)
{
MVi18n._f6("MVMapView.transformGeom","MAPVIEWER-05520",null,this._f7);
return ;
}
geometry.srid=this.srid;
}
if(geometry.srid==_f416)
{
if(callBack)
{
callBack(geometry);
return ;
}
else
 return geometry;
}
var clientTrans=_f65._f475(geometry.srid,_f416);
if(clientTrans)
{
var _f242=null;
if(geometry.getGType()==1)
{
var result=clientTrans(geometry.getPointX(),geometry.getPointY(),this._f7);
_f242=MVSdoGeometry.createPoint(result.x,result.y,_f416);
}
else if((geometry.gtype%10==2||geometry.gtype%10==3)&&
geometry.sdo_elem_info.length==3&&geometry.sdo_elem_info[0]==1&&
(geometry.sdo_elem_info[1]==2||geometry.sdo_elem_info[1]==1003||geometry.sdo_elem_info[1]==2003)&&
geometry.sdo_elem_info[2]==1)
{
var ordinates=MVMapView._f477(clientTrans,geometry.sdo_ordinates,this._f7);
_f242=new MVSdoGeometry(geometry.gtype,_f416,geometry.sdo_elem_info,ordinates);
}
if(_f242)
{
if(callBack)
{
callBack(_f242);
return ;
}
else
 return _f242;
}
}
if(_f423)
{}
else if(this._f4)
{
if(MVUtil._f5(this._f4,'/'))
{
_f423=this._f4+'mcserver';
}
else
 {
_f423=this._f4+'/mcserver';
}
}
else
 {
MVi18n._f6("MVMapView.transformGeom","MAPVIEWER-05504",null,this._f7);
return ;
}
var localDomain=(MVUtil.isLocalDomain(_f423));
var xmlHttp=localDomain||MVMapView._f117;
if(!xmlHttp&&!callBack)
{
MVi18n._f6("MVMapView.transformGeom","MAPVIEWER-05521",null,this._f7);
return null;
}
var request=null;
var _f478;
var _f479;
var _f885;
if(dataSource)
_f885=dataSource;
else
 _f885=this._f538;
_f479=MVUtil._f43(geometry.toString(),"null","");
if(geometry.getGType()==1)
{
_f479=MVUtil._f43(_f479,"SdoPointType","");
}
else
 {
}
_f479=MVUtil._f43(_f479," ","");
var targetURL=_f423;
var _f886=_f423;
var params="request=cstransform&dstsrid="+
_f416+"&geometry="+_f479;
if(_f885)
params+="&datasource="+_f885;
var request=null;
var mv=this;
var transformed=MVUtil._f103(this,function()
{
if(request.readyState==4)
{
if(request.status==200)
{
try
{
var resp=request.responseText;
eval("var result="+resp);
_f478=result;
if(result.length==0)
{
result=null;
return;
}
var _f242=null;
if(_f478.SDO_GTYPE==1)
{
_f242=MVSdoGeometry.createPoint(_f478.SDO_POINT.X,_f478.SDO_POINT.Y,_f478.SDO_SRID);
}
else
 {
_f242=new MVSdoGeometry(2000+_f478.SDO_GTYPE,_f478.SDO_SRID,_f478.SDO_ELEM_INFO,_f478.SDO_ORDINATES,null)
}
result=null;
}
catch(e)
{
MVi18n._f6("MVMapView.transformGeom","MAPVIEWER-05523",request.responseText,mv._f7);
return ;
}
if(callBack)
callBack(_f242);
if(xmlHttp)
return _f242;
}
}
});
try
{
request=MVUtil.getXMLHttpRequest(xmlHttp);
if(callBack||!xmlHttp)
request.onreadystatechange=transformed;
request.open("POST",MVUtil._f119(_f886),callBack||!xmlHttp);
request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
request.send(MVUtil._f120(_f886,params));
}catch(e)
{
MVi18n._f6("MVMapView.transformGeom","MAPVIEWER-05511",e,this._f7);
return ;
}
if(!callBack&&xmlHttp)
{
if(request.status==200)
{
return transformed();
}
}
}
MVMapView.prototype.getSrid=function()
{
return this.srid;
}
MVMapView.prototype._f887=function()
{
MVUtil._f162(document.body,"wait");
MVUtil._f162(this._f229,"wait");
}
MVMapView.prototype._f888=function()
{
MVUtil._f162(document.body,"");
this.setTileLayerCursor(this._f223);
}
MVMapView.prototype.getMapTileLayer=function(x298)
{
var x299=x298.split(".");
if(x299.length<2){
return "";
}
else
 return x299[1];
}
MVMapView.prototype.getMapImageURL=function(x300,x301,x302,x303)
{
var x304=this.getMapAsXML(x301,x302,x303);
var x305=(this._f4==this._f780);
var x306=x305||MVMapView._f117;
var x307="";
if(MVMapView._f117&&!x305)
x307=this._f780;
else
 x307=this._f4;
if(MVUtil._f5(x307,'/'))
x307=x307+'omserver';
else
 x307=x307+'/omserver';
var x308=MVUtil.getXMLHttpRequest(x306);
x308.open("POST",MVUtil._f119(x307),true);
x308.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
x308.send(MVUtil._f120(x307,"xml_request="+encodeURIComponent(x304)));
var x309=this;
x308.onreadystatechange=function()
{
if(x308.readyState==4)
{
if(x308.status==200)
{
var x310=x308.responseText;
var x311=x310.indexOf("url=\"");
if(x311<0)
{
MVi18n._f6("MVMapView.getMapImageURL","MAPVIEWER-05519",x310,x309._f7);
return ;
}
var x312=x310.substring(x311+5,x310.indexOf("\"",x311+5));
x300(x312);
}
}
}
}
MVMapView.prototype.getMapAsXML=function(x313,x314,x315)
{
if(!x314)
x314=this._f106();
if(!x315)
x315=this._f107();
var x316="<?xml version=\"1.0\" standalone=\"yes\"?>"
var x317=this._f538?this._f538:MVMessages["default_datasource"];
x316=x316+"<map_request datasource=\""+x317+"\" format=\""+x313+"\" width=\""+
x314+"\" height=\""+x315+"\" antialiase=\"true\" "+
(this.getSrid()?"srid=\""+this.getSrid()+"\"":"");
var x318=null;
for(i=0;i<this._f136.length;i++)
{
var x319=this._f136[i];
if(x319 instanceof MVBingTileLayer)
x318=x319.getStaticMapURL();
if(x319 instanceof MVGoogleTileLayer)
x318=x319.getStaticMapURL();
}
if(x318!=null)
x316=x316+" bgimage=\""+x318+"\"";
var x320=this.getCopyright();
if(x320)
x316=x316+" footnote=\""+x320+"\"";
x316=x316+">"
var x321=parseInt(this._f107())/this._f74;
var x322=this.getCenter();
x316=x316+"<center size=\""+x321+"\"><geoFeature><geometricProperty typeName=\"center\"><Point><coordinates>"+x322.sdo_point.x+","+x322.sdo_point.y+"</coordinates></Point></geometricProperty></geoFeature></center>";
x316=x316+"<themes>";
for(i=0;i<this._f136.length;i++)
{
if(this._f136[i].isVisible()&&this._f136[i].layerControl&&
!(this._f136[i] instanceof MVCustomMapTileLayer))
x316=x316+"<theme name=\"cached_basemap"+i+"\">"+this._f136[i].layerControl.getXMLForPrint()+"</theme>";
}
var x323="";
var x324="";
var x325="";
for(var x326=0;x326<this._f763.length;x326++)
{
if(this._f763[x326].isVisible())
{
var x327=null;
if(this._f763[x326]._f1._f101)
{
x327=this._f763[x326]._f1._f37+"_markerstyle"
var x328=new MVStyleMarker(x327,"image");
var x329=this._f763[x326]._f1._f101;
x328.setImageUrl(x329._f102)
x328.setSize(x329.width,x329.height);
x324+=x328.getXMLString();
}
x323+=this._f763[x326]._f34(x327);
if(this._f763[x326]._f1._f100!=null)
x325+=this._f763[x326]._f1._f100.getXML(this._f763[x326]._f1);
var x330=this._f763[x326]._f1._f109;
if(x330.length>0)
{
for(var x331=0;x331<x330.length;x331++)
{
x324+=x330[x331].getXMLString();
}
}
}
}
for(var x326=0;x326<this._f260._f276.length;x326++)
{
if(this._f260._f276[x326].style&&
this._f260._f276[x326].style.getXMLString&&
this._f260._f276[x326].visible)
x324+=this._f260._f276[x326].style.getXMLString();
if(this._f260._f276[x326].createMarker)
{
var x327="indfoi_"+this._f260._f276[x326].id+"_style";
var x328=new MVStyleMarker(x327,"image");
x328.setImageUrl(this._f260._f276[x326]._f102);
x328.setSize(this._f260._f276[x326].width,this._f260._f276[x326].height);
x324+=x328.getXMLString();
}
}
x316=x316+x323+"</themes>";
if(x324!="")
x316+=" <styles>"+x324+"</styles>";
if(x325!="")
x316+=x325;
x316=x316+this._f260._f34();
if(this._f701)
{
var x332="SOUTH_WEST";
switch(this._f696)
{
case 1:x332="NORTH_EAST";
break;
case 3:x332="SOUTH_EAST";
break;
case 4:x332="NORTH_WEST";
break;
}
var x333="DUAL_MODES";
if(this._f701.format!=null&&this._f701.format=="METRIC")
x333="METRIC_MODE";
else if(this._f701.format!=null&&this._f701.format=="IMPERIAL")
x333="US_MODE";
x316=x316+"<scale_bar mode=\""+x333+"\" position=\""+x332+"\" ";
x316=x316+" color1=\"#000000\" color2=\"#FFFFFF\"";
x316=x316+" offset_x=\""+this._f697;
x316=x316+"\" offset_y=\""+this._f698+"\"";
if(this._f701._f694)
x316=x316+" length_hint=\""+this._f701._f694+"\"";
if(this.msi._f579()=="PROJECTED"&&this._f701._f410)
x316=x316+" transform_to_wgs84=\"true\"";
x316=x316+"/>";
}
x316=x316+"</map_request>";
return x316;
}
MVMapView.prototype._f34=function()
{
return this.getMapAsXML("GIF_URL");
}
MVMapView.prototype._f657=function()
{
this.real_base_div.className=null;
this._f889=null;
if(this._f700)
while(this._f700.childNodes.length>0)
{
var x334=this._f700.childNodes[0];
if(x334.src)
{
}
x334.onload=null;
this._f700.removeChild(x334);
MVUtil._f87(x334);
}
}
MVMapView.prototype._f890=function()
{
this.real_base_div.className=("noprint");
}
MVMapView.prototype.print=function(x335)
{
var x336=this;
if(x335.style.position!="absolute")
x335.style.position="relative";
x335.style.width=MVUtil._f26(this._f106());
x335.style.height=MVUtil._f26(this._f107());
if(!this._f891)
{
this._f887();
this._f657();
var x337=this._f34();
var x338=(this._f4==this._f780);
var x339=x338||MVMapView._f117;
var x340="";
if(MVMapView._f117&&!x338)
x340=this._f780;
else
 x340=this._f4;
if(MVUtil._f5(x340,'/'))
x340=x340+'omserver';
else
 x340=x340+'/omserver';
_f294=MVUtil.getXMLHttpRequest(x339);
_f294.open("POST",MVUtil._f119(x340),true);
_f294.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
_f294.send(MVUtil._f120(x340,"xml_request="+encodeURIComponent(x337)));
_f294.onreadystatechange=function()
{
if(_f294.readyState==4)
{
if(_f294.status==200)
{
x336._f700=x335;
var x341=document.createElement("img");
var x342=_f294.responseText;
var x343=x342.indexOf("url=\"");
if(x343<0)
{
MVi18n._f6("MVMapView.print","MAPVIEWER-05519",x342,x336._f7);
return ;
}
x341.src=x342.substring(x343+5,x342.indexOf("\"",x343+5));x341.style.position="absolute";
x341.style.left=MVUtil._f26(0);
x341.style.top=MVUtil._f26(0);
x336._f700.appendChild(x341);
x341.onload=MVUtil._f103(x341,function()
{
x336._f890();
if(x336._f778!=null)
for(var x344=0;x344<x336._f778.length;x344++)
{
if(x336._f778[x344]._f632&&x336._f778[x344].visible&&!x336._f778[x344].collapsed)
x336._f700.appendChild(x336._f778[x344]._f665());
}
x336._f888();
window.print();
x336._f891=false;
})
x336._f889=x341;
}
}
}
}
}
MVMapView.prototype._f892=function(x345)
{
var x346=document.createElement("span");
x346.className="copyright";
x346.style.zIndex=1999;
if(typeof x345=="string")
{
x346.innerHTML=" "+x345+" ";
this._f700.appendChild(x346);
}
else if(this.copyright!=undefined)
{
x346.innerHTML=" "+this.copyright.innerHTML+" ";
this._f700.appendChild(x346);
}
}
MVMapView.prototype.setMouseWheelZoomEnabled=function(x347)
{
this._f770=x347;
if(this._f88)
this._f367();
}
MVMapView.prototype._f367=function()
{
var x348=this;
var x349=this.getBrowserType();
this.real_base_div.tabIndex=0;
this.real_base_div.onfocus=MVUtil._f103(this._f229,function()
{
x348._f505=true;
});
this.real_base_div.onblur=MVUtil._f103(this._f229,function()
{
x348._f505=false;
});
this._f229.onmouseover=MVUtil._f103(this._f229,function()
{
x348._f505=true;
});
this._f229.onmouseout=MVUtil._f103(this._f229,function(x350)
{
x350=(x350)?x350:((window.event)?event:null);
var x351=x350.clientX;
var x352=x350.clientY;
var x353=x348._f106();
var x354=x348._f107();
var x355=x348._f234(x350);
if(x355.left<=0||x355.left>=x353||
x355.top<=0||x355.top>=x354||
x351<=1||x351>=document.body.clientWidth||
x352<=1||x352>=document.body.clientHeight)
{
x348._f893(x350);
x348._f505=false;
if(x348._f789.contains(37))x348._f789.remove(37);
if(x348._f789.contains(38))x348._f789.remove(38);
if(x348._f789.contains(39))x348._f789.remove(39);
if(x348._f789.contains(40))x348._f789.remove(40);
}
});
this._f229.onclick=MVUtil._f103(this._f229,function(x356)
{
if((x348.mouseDownLoc&&x348.mouseUpLoc&&
(Math.abs(x348.mouseDownLoc.left-x348.mouseUpLoc.left)>1||
Math.abs(x348.mouseUpLoc.top-x348.mouseUpLoc.top)>1))||
(Math.abs(x348.mouseDownScreenX-x348.mouseUpScreenX)>1||
Math.abs(x348.mouseDownScreenY-x348.mouseUpScreenY)>1))
return ;
if(x348._f633)
{
x348._f633(MVUtil.getEvent(x356));
}
MVUtil.runListeners(x348._f93,MVEvent.MOUSE_CLICK,[MVUtil.getEvent(x356)]);
});
if(!this._f807)
MVUtil.detachEvent(document.body,"mousedown",this._f807);
this._f807=MVUtil._f103(document.body,function()
{
x348._f505=false;
});
MVUtil.attachEvent(document.body,"mousedown",this._f807);
if(x349=="IF")
{
this._f229.onselectstart=MVUtil._f103(this._f229,function()
{
if((x348._f76&&x348._f76._f204)||
(x348.infoLayer2&&x348.infoLayer2._f204))
return true;
else
 return false;
});
this._f229.oncontextmenu=MVUtil._f103(this._f229,function(x357)
{
x348._f514(window.event);
if(x348._f787)
{
x348._f787(MVUtil.getEvent(x357));
}
MVUtil.runListeners(x348._f93,MVEvent.MOUSE_RIGHT_CLICK,[MVUtil.getEvent(x357)]);
if((x348._f76&&x348._f76._f204))
return true;
else
 return false;
});
if(this._f770)
this._f229.onmousewheel=MVUtil._f103(this._f229,function()
{
return x348._f894(window.event);
});
else
 this._f229.onmousewheel=null;
this._f229.onmousedown=MVUtil._f103(this._f229,function()
{
MVUtil._f175(window.event);
return x348._f363(window.event);
});
this._f229.onmousemove=MVUtil._f103(this._f229,function()
{
return x348._f895(window.event);
});
this._f229.onmouseup=MVUtil._f103(this._f229,function()
{
x348._f505=true;
MVUtil.runListeners(x348._f93,MVEvent.MOUSE_UP,[window.event]);
return x348._f893(window.event);
});
this._f229.ondblclick=MVUtil._f103(this._f229,function()
{
return x348._f896(window.event);
});
document.body.attachEvent('onmouseup',MVUtil._f103(document.body,function()
{
return x348._f893(window.event);
}));
if(!this._f226)
{
if(!this._f810)
MVUtil.detachEvent(document.body,"keydown",this._f810);
this._f810=MVUtil._f103(document.body,function()
{
return x348._f897(window.event);
});
MVUtil.attachEvent(document.body,"keydown",this._f810);
if(!this._f811)
MVUtil.detachEvent(document.body,"keyup",this._f811);
this._f811=MVUtil._f103(document.body,function()
{
return x348._f898(window.event);
});
MVUtil.attachEvent(document.body,"keyup",this._f811);
var x358=function()
{
x348._f899(window.event);
return false;
}
var x359=function()
{
if(x348._f815==document.body.offsetWidth)
{
x348._f814=0;
x358();
}
else
 {
x348._f816=window.setTimeout(x359,100);
}
}
if(!this._f804)
MVUtil.detachEvent(window,"resize",this._f804);
this._f804=MVUtil._f103(window,function(x360)
{
if(Math.abs(x348._f798-x348._f106())<=3||
Math.abs(x348._f799-x348._f107())<=3)
{
return ;
}
this._f814++;
this._f815=document.body.offsetWidth;
if(this._f814>1)
{
if(this._f816)
window.clearTimeout(this._f816);
MVUtil._f816=window.setTimeout(x359,100);
}
});
MVUtil.attachEvent(window,"resize",this._f804);
}
}
else if(x349=="NS")
{
this._f229.oncontextmenu=function(x361)
{
x348._f514(x361);
if(x348._f787)
{
x348._f787(MVUtil.getEvent(x361));
}
MVUtil.runListeners(x348._f93,MVEvent.MOUSE_RIGHT_CLICK,[MVUtil.getEvent(x361)]);
if((x348._f76&&x348._f76._f204))
return true;
else
 return false;
};
this._f229.onmousedown=function(x362)
{
x362.stopPropagation();
return x348._f363(x362);
};
this._f229.onmousemove=function(x363)
{
return x348._f895(x363);
};
this._f229.onmouseup=function(x364)
{
x348._f505=true;
MVUtil.runListeners(x348._f93,MVEvent.MOUSE_UP,[x364]);
return x348._f893(x364);
};
var x365=function(x366)
{
MVUtil._f175(x366);
if(!x348.lastWheelTime)
x348.lastWheelTime=new Date();
else
 {
var x367=new Date();
if(x367-x348.lastWheelTime<10)
return ;
}
x348.lastWheelTime=new Date();
x366.preventDefault();
if(x348._f770)
{
if(x366.detail<0)x348.zoomIn();
else x348.zoomOut();
}
}
if(this._f770)
{
this._f229.addEventListener("DOMMouseScroll",x365,false);
}
else
 this._f229.removeEventListener("DOMMouseScroll",x365,false);
this._f229.ondblclick=function(x368)
{
return x348._f896(x368);
};
if(!this._f805)
MVUtil.detachEvent(window.document,"mouseup",this._f805);
this._f805=function(x369)
{
return x348._f893(x369);
};
MVUtil.attachEvent(window.document,"mouseup",this._f805);
if(!this._f226)
{
if(!this._f808)
MVUtil.detachEvent(window.document,"keydown",this._f808);
this._f808=function(x370)
{
return x348._f897(x370);
};
MVUtil.attachEvent(window.document,"keydown",this._f808);
if(!this._f809)
MVUtil.detachEvent(window.document,"keyup",this._f809);
this._f809=function(x371)
{
return x348._f898(x371);
};
MVUtil.attachEvent(window.document,"keyup",this._f809);
if(!this._f804)
MVUtil.detachEvent(window,"resize",this._f804);
this._f804=function(x372)
{
if(Math.abs(x348._f798-x348._f106())<=3||
Math.abs(x348._f799-x348._f107())<=3)
{
return ;
}
x348._f899(x372);
return false;
};
MVUtil.attachEvent(window,"resize",this._f804);
}
}
else if(x349=="SF")
{
this._f229.oncontextmenu=function(x373)
{
x348._f514(x373);
if(x348._f787)
{
x348._f787(MVUtil.getEvent(x373));
}
MVUtil.runListeners(x348._f93,MVEvent.MOUSE_RIGHT_CLICK,[MVUtil.getEvent(x373)]);
if((x348._f76&&x348._f76._f204))
return true;
else
 return false;
};
this._f229.onmousedown=function(x374)
{
x374.stopPropagation();
return x348._f363(x374);
};
this._f229.onmousemove=function(x375)
{
return x348._f895(x375);
};
this._f229.onmouseup=function(x376)
{
x348._f505=true;
MVUtil.runListeners(x348._f93,MVEvent.MOUSE_UP,[x376]);
return x348._f893(x376);
};
var x377=function(x378)
{
x378.preventDefault();
if(x378.detail>0||x378.wheelDelta<0)
x348.zoomOut();
else
 x348.zoomIn();
}
if(this._f770)
this._f229.onmousewheel=x377;
else
 this._f229.onmousewheel=null;
this._f229.ondblclick=function(x379)
{
return x348._f896(x379);
};
if(!this._f805)
MVUtil.detachEvent(window.document,"mouseup",this._f805);
this._f805=function(x380)
{
return x348._f893(x380);
};
MVUtil.attachEvent(window.document,"mouseup",this._f805);
if(!this._f226)
{
if(!this._f808)
MVUtil.detachEvent(window.document,"keydown",this._f808);
this._f808=function(x381)
{
return x348._f897(x381);
};
MVUtil.attachEvent(window.document,"keydown",this._f808);
if(!this._f809)
MVUtil.detachEvent(window.document,"keyup",this._f809);
this._f809=function(x382)
{
return x348._f898(x382);
};
MVUtil.attachEvent(window.document,"keyup",this._f809);
if(!this._f804)
MVUtil.detachEvent(window,"resize",this._f804);
this._f804=function(x383)
{
if(Math.abs(x348._f798-x348._f106())<=3||
Math.abs(x348._f799-x348._f107())<=3)
{
return ;
}
x348._f899(x383);
return false;
};
MVUtil.attachEvent(window,"resize",this._f804);
}
}
if(x349=="OS")
{
this._f229.onmousedown=function()
{
window.event.stopPropagation();
return x348._f363(window.event);
};
this._f229.onmousemove=function()
{
return x348._f895(window.event);
};
this._f229.onmouseup=function()
{
x348._f505=true;
MVUtil.runListeners(x348._f93,MVEvent.MOUSE_UP,[window.event]);
return x348._f893(window.event);
};
this._f229.ondblclick=function()
{
return x348._f896(window.event);
};
if(!this._f805)
MVUtil.detachEvent(window.document,"mouseup",this._f805);
this._f805=function(x384)
{
return x348._f893(window.event);
};
MVUtil.attachEvent(window.document,"mouseup",this._f805);
if(!this._f226)
{
if(!this._f804)
MVUtil.detachEvent(window,"resize",this._f804);
this._f804=function(x385)
{
if(Math.abs(x348._f798-x348._f106())<=3||
Math.abs(x348._f799-x348._f107())<=3)
{
return ;
}
x348._f899(window.event);
return false;
};
MVUtil.attachEvent(window,"resize",this._f804);
}
this._f229.onkeypress=function()
{
return x348._f897(window.event);
};
this._f229.onkeyup=function()
{
return x348._f898(window.event);
};
}
this._f307.oncontextmenu=this._f229.oncontextmenu;
this._f307.onmousedown=this._f229.onmousedown;
this._f307.onmousemove=this._f229.onmousemove;
this._f307.onmouseup=this._f229.onmouseup;
this._f307.ondblclick=this._f229.ondblclick;
if(_f65.touchSupported)
{
MVUtil.setListener(this._f229,"touchstart",function(x386)
{
x348._f900(x386);
x386.preventDefault();
x386.stopPropagation();
return x348._f363(x386);
},true);
MVUtil.setListener(this._f229,"touchmove",function(x387)
{
x387.preventDefault();
x348._f179();
if(x348.touchCount==2)
{
x348._f901(x387);
var x388=x348._f825;
if(!x348.shouldPinchZoom(x388))
return ;
x348.pinchZooming=true;
for(var x389=0;x389<x348._f136.length;x389++)
{
if(x348._f136[x389].layerControl)
{
x348._f136[x389].layerControl.zoomControl.scaleTiles(x388);
}
}
return ;
}
return x348._f895(x387);
},true);
MVUtil.setListener(this._f229,"touchend",function(x390)
{
x390.preventDefault();
x348._f505=true;
x348._f902(x390);
if(x348.touchCount>0)
return ;
var x391=x348._f825;
if(x348.pinchZooming)
{
var x392=x348.getPinchZoomingLevel(x391);
x348.zoomTo(x392,null,true,true);
x348._f825=1;
x348.pinchZooming=false;
}
else
 {
var x393=x348.lastTouchLoc;
var x394=MVUtil._f181(x390);
x348.lastTouchLoc=x394;
var x395=x348.lastTouch;
var x396=(new Date()).getTime();
x348.lastTouch=x396;
if(x396-x395<500&&x393&&
Math.abs(x393.x-x394.x)<=10&&Math.abs(x393.y-x394.y)<=10){
x348._f896(x390);
}
else
 {
x348._f893(x390);
}
}
},true);
}
}
MVMapView.prototype._f894=function(x397)
{
if(x397.wheelDelta>0)this.zoomIn();
else this.zoomOut();
return false;
}
MVMapView.prototype._f899=function(x398)
{
this._f800=false;
this._f53=this.getZoomLevel();
if(this._f53>this._f765)
{
this._f53=this._f765;
return ;
}
MVUtil._f70(this.div,0,0);
MVUtil._f70(this._f307,0,0);
this._f139=0;
this._f140=0;
this._f428=this._f139;
this._f429=this._f140;
this._f826=0;
this._f827=0;
this.setZoomLevel(this._f53);
if(this._f853)
{
if(this.centerMarkUrl)
this.setCenterMark(this.centerMarkUrl,this.centerMarkW,this.centerMarkH);
else
 this.setCenterMark(_f65._f141+"center.gif",20,20);
}
if(this.navigationPanel)
this.navigationPanel.init(null,this);
this.display();
if(this._f701)
{
this._f701._f709(this);
}
if(this._f225)
{
this._f225._f216._f899();
this._f225._f232();
}
if(this._f778!=null)
for(var x399=0;x399<this._f778.length;x399++)
{
this._f778[x399]._f664();
}
return false;
}
MVMapView.prototype.getBrowserType=function()
{
return _f65._f66;
}
MVMapView.prototype.enableKeyboardPanning=function(x400)
{
this._f791=x400;
}
MVMapView.prototype._f897=function(x401)
{
if(!this._f505||!this._f791)
return true;
if(this._f903==undefined||this.scroll_up==undefined||this._f904==undefined||this._f905==undefined)
{
this._f903=0;
this.scroll_up=0;
this._f904=0;
this._f905=0;
this._f906=0;
}
var x402=(this.getBrowserType()!="OS")?96:48;
if(!x401.shiftKey)
{
if(x401.ctrlKey)
{
switch(x401.keyCode)
{
case 90:for(var x403=0;x403<this._f778.length;x403++)
if(this._f778[x403]._f631)
this._f778[x403]._f663();
break;
}
return true;
}
switch(x401.keyCode)
{
case 37:this._f903=1;this._f789.add(x401.keyCode);break;
case 38:this.scroll_up=1;this._f789.add(x401.keyCode);break;
case 39:this._f904=1;this._f789.add(x401.keyCode);break;
case 40:this._f905=1;this._f789.add(x401.keyCode);break;
case x402+1:this._f903=1;this._f905=1;
break;
case x402+2:this._f905=1;this._f789.add(x401.keyCode);
break;
case x402+3:this._f904=1;this._f905=1;
break;
case x402+4:this._f903=1;this._f789.add(x401.keyCode);
break;
case x402+5:break;
case x402+6:this._f904=1;this._f789.add(x401.keyCode);
break;
case x402+7:this._f903=1;this.scroll_up=1;
break;
case x402+8:this.scroll_up=1;this._f789.add(x401.keyCode);
break;
case x402+9:this.scroll_up=1;this._f904=1;
break;
default:return true;
}
this._f907();
return false;
}
else
 return true;
}
MVMapView.prototype._f898=function(x404)
{
if(!this._f505)return;
var x405=(this.getBrowserType()!="OS")?96:48;
if(x404.shiftKey)
{
switch(x404.keyCode)
{
case 37:this._f789.remove(x404.keyCode);
break;
case 38:this._f789.remove(x404.keyCode);break;
case 39:this._f789.remove(x404.keyCode);
break;
case 40:this._f789.remove(x404.keyCode);break;
default:return true;
}
}
else
 {
switch(x404.keyCode)
{
case 33:this.smoothScroll(0,-this._f107()/2);break;
case 34:this.smoothScroll(0,this._f107()/2);break;
case 35:this.smoothScroll(this._f106()/2,0);break;
case 36:this.smoothScroll(-this._f106()/2,0);break;
case 37:this._f789.remove(x404.keyCode);break;
case 38:this._f789.remove(x404.keyCode);
break;
case 39:this._f789.remove(x404.keyCode);
break;
case 40:this._f789.remove(x404.keyCode);break;
case x405+1:this._f903=0;
this._f905=0;
break;
case x405+2:this._f905=0;
this._f789.remove(x404.keyCode);
break;
case x405+3:this._f904=0;
this._f905=0;
break;
case x405+4:this._f903=0;
this._f789.remove(x404.keyCode);
break;
case x405+5:this._f903=0;
this.scroll_up=0;
this._f904=0;
this._f905=0;
break;
case x405+6:this._f904=0;
this._f789.remove(x404.keyCode);
break;
case x405+7:this._f903=0;
this.scroll_up=0;
break;
case x405+8:this.scroll_up=0;
this._f789.remove(x404.keyCode);
break;
case x405+9:this.scroll_up=0;
this._f789.remove(x404.keyCode);
this._f904=0;
break;
case 107:this.zoomIn();break;
case 187:this.zoomIn();break;
case 109:this.zoomOut();break;
case 189:this.zoomOut();break;
case 61:this.zoomIn();
break;
case 43:this.zoomIn();
break;
case 45:this.zoomOut();
break;
case 95:this.zoomOut();
break;
default:return true;
}
}return false;
}
MVMapView.prototype._f908=function(x406)
{
x406=(x406)?x406:((window.event)?event:null);
var x407=x406.clientX+document.body.scrollLeft-this._f229.offsetLeft;
return x407;
}
MVMapView.prototype._f909=function(x408)
{
x408=(x408)?x408:((window.event)?event:null);
var x409=x408.clientY+document.body.scrollTop-this._f229.offsetTop;
return x409;
}
MVMapView.prototype._f234=function(x410)
{
var x411={left:0,top:0};
absolutePosition=MVUtil._f515(this.real_base_div);
var x412=MVUtil._f181(x410);
x411.left=x412.x-absolutePosition.x;
x411.top=x412.y-absolutePosition.y;
return x411;
}
MVMapView.prototype._f363=function(x413)
{
x413=(x413)?x413:((window.event)?event:null);
var x414=this._f234(x413);
var x415=MVUtil._f181(x413);
this.mouseDownScreenX=x415.x;
this.mouseDownScreenY=x415.y;
this.mouseDownLoc=x414;
if(this._f772&&this._f774)
{
this._f776=true;
}
MVUtil.runListeners(this._f93,MVEvent.MOUSE_DOWN,[x413]);
if(this._f759==false)return;
if(!MVUtil.mouseLeftKeyPressed(x413))
{
return;
}
if((_f65._f66!="SF")&&(_f65._f66.indexOf("OS")!=0)&&
((_f65._f66=="IF"&&x413.button==4)||(_f65._f66!="IF"
&&x413.button==1)))
{
MVUtil._f175(x413);
return false;
}
for(var x416=0;x416<this._f763.length;x416++)
{
if(this._f763[x416]._f47())
{
this.setTileLayerCursor("wait");
}
}
if((_f65._f66.indexOf("OS")==0)&&x413.button==2)
{
_f910();
}
if(this._f762!=null)
{
clearInterval(this._f762);
this._f762=null;
}
this._f184=this;
this._f828(x414.left,x414.top);
this.dragCoords=this._f234(x413);
this._f514(x413);
if(_f65._f374==2)x413.returnValue=false;
if(this._f758)this._f184=null;
this._f911();
this.divLeftOrig=MVUtil._f80(this.div);
this.mapWindowMinXOrig=this._f71;
this.mapWindowMaxYOrig=this._f304;
this.mapCenterXOrig=this._f90;
return false;
}
MVMapView.prototype._f911=function()
{
if(this.fetchingMapId)
{
clearTimeout(this.fetchingMapId);
}
this.fetchingMapId=this.setTimeout("this.fetching()",400);
}
MVMapView.prototype.fetching=function()
{
this._f126();
for(var x417=0;x417<this._f136.length;x417++)
this._f136[x417]._f448();
this._f911();
}
function _f910(x0)
{
x0=(x0)?x0:((window.event)?event:null);
MVUtil._f175(x0);
return false;
}
MVMapView.prototype._f183=function()
{
if(this._f661)
{
this._f661._f183();
}
if(this._f772&&this._f776)
{
this._f773.clear();
this.marqueeZoom();
}
this._f184=null;
this.setTileLayerCursor(this._f223);
this._f812=false;
if(this._f78.parentNode==null||(_f65._f66=="IF"&&this._f78.parentNode.tagName!="DIV"))
this.div.appendChild(this._f78);
}
MVMapView.prototype._f895=function(x418)
{
this._f514(MVUtil.getEvent(x418));
if(this._f661)
{
MVUtil.runListeners(this._f93,MVEvent.MOUSE_MOVE,[x418]);
var x419=MVUtil._f181(x418);
this._f661._f70(
this._f661.dragStartLeft+(x419.x-this._f661.dragStartMouseLoc.x),
this._f661.dragStartTop+(x419.y-this._f661.dragStartMouseLoc.y));
if(this._f661._f639)
this._f661._f639(this._f661.getPosition());
MVUtil.runListeners(this._f661._f93,MVEvent.DRAG,[this._f661.getPosition()]);
return ;
}
if(this._f759==false||
!this._f184||this._f758||!this.draggingEnabled)
{
MVUtil.runListeners(this._f93,MVEvent.MOUSE_MOVE,[x418]);
return;
}
if(!this._f812)
{
this._f812=true;
this.div.removeChild(this._f78);
}
this._f657();
var x420=this._f234(x418);
if(this._f781!=this._f222)
{
this.setTileLayerCursor(this._f222);
this._f781=this._f222;
}
if(this._f772&&this._f774&&this._f776)
this._f776=false;
this._f561(x420.left,x420.top);
this.dragCoords=x420;
if(this._f225)
{
this._f225._f238(this._f428-this._f139,this._f429-this._f140)
}
if(this._f788)
{
this._f788(this._f428-this._f139,this._f429-this._f140);
}
return false;
}
MVMapView.prototype._f893=function(x421)
{
x421=(x421)?x421:((window.event)?event:null);
this.mouseUpLoc=this.dragCoords;
var x422=MVUtil._f181(x421);
this.mouseUpScreenX=x422.x;
this.mouseUpScreenY=x422.y;
if(this._f759==false)return;
this.setTileLayerCursor(this._f223);
this._f781=this._f223;
if(!this._f184&&!this._f758)return;
this._f183();
if(this.dragCoords)
{
this._f514(this.dragCoords);
this.dragCoords=null;
}
else
 {
this._f514(x421);
}
this._f126();
if(this._f757==true)
{
for(var x423=0;x423<this._f136.length;x423++)
this._f136[x423]._f448();
this._f882();
this._f757=false;
if(this._f225)
{
this._f225._f239();
}
if(this._f786)
{
this._f786();
}
MVUtil.runListeners(this._f93,MVEvent.RECENTER);
if(this._f701)
{
this._f701._f709(this);
}
}
if(this.fetchingMapId!=null)
{
clearTimeout(this.fetchingMapId);
}
this._f843(this._f90,this._f91,this._f53,true);
this._f657();
}
MVMapView.prototype.setDoubleClickAction=function(x424)
{
if(x424==null||(x424!='recenter'&&x424!='zoomin'))
{
MVi18n._f6("MVMapView.setDoubleClickAction","MAPVIEWER-05519","action",this._f7);
return ;
}
this._f792=x424;
}
MVMapView.prototype._f896=function(x425)
{
x425=(x425)?x425:((window.event)?event:null);
if((this._f93[MVEvent.MOUSE_DOUBLE_CLICK]!=null&&this._f93[MVEvent.MOUSE_DOUBLE_CLICK].length!=0)||this._f408)
{
if(this._f408){
this._f408(MVUtil.getEvent(x425));
}
MVUtil.runListeners(this._f93,MVEvent.MOUSE_DOUBLE_CLICK,[MVUtil.getEvent(x425)]);
return true;
}
if(!this._f226&&this._f792=="zoomin")
{
this.zoomIn(this.getMouseLocation());
return true;
}
if(this._f758)
{
this._f184=null;
this._f229.style.cursor=this._f223;
return true;
}
this._f229.style.cursor=this._f223;
if(this._f762!=null)
{
clearInterval(this._f762);
this._f762=null;
}
var x426=this._f234(x425);
var x427=x426.left;
var x428=x426.top;
this._f844=this._f106()/2-x427;
this._f845=this._f107()/2-x428;
this._f280=Math.sqrt(this._f844*this._f844+this._f845*this._f845);
this._f848=20;
this._f846=this._f106();
this._f847=this._f107();
this._f849=this._f280>((this._f846+this._f847)/4)?300:200;
this._f850=0;
this._f851=0;
this._f852=0;
this.smoothPan();
}
MVMapView.prototype.pan=function(x429,x430)
{
this.smoothScroll(x429,x430);
}
MVMapView.prototype.smoothScroll=function(x431,x432)
{
if(x431==0&&x432==0)
{
return;
}
if(this._f758)
{
this._f184=null;
this._f229.style.cursor=this._f223;
return true;
}
this._f229.style.cursor=this._f223;
if(this._f762!=null)
{
clearTimeout(this._f762);
this._f762=null;
}
this._f844=x431*(-1);
this._f845=x432*(-1);
this._f280=Math.sqrt(x431*x431+x432*x432);
this._f848=10;
this._f846=this._f106();
this._f847=this._f107();
this._f849=this._f280>((this._f846+this._f847)/4)?300:200;
this._f850=0;
this._f851=0;
this._f852=0;
this.smoothPan();
}
MVMapView.prototype.smoothPan=function(x433)
{
this._f850++;
var x434=x433?1:this._f850*this._f848/this._f849;
this.targetX=this._f844*(2*x434-x434*x434);
this.targetY=this._f845*(2*x434-x434*x434);
var x435=this._f846/2;
var x436=this._f847/2;
this._f828(x435,x436);
x435=Math.round(this.targetX-this._f851)+this._f846/2;
x436=Math.round(this.targetY-this._f852)+this._f847/2;
this._f561(x435,x436);
if(this._f225)
{
this._f225._f238(this._f428-this._f139,this._f429-this._f140)
}
if(this._f788)
{
this._f788(this._f428-this._f139,this._f429-this._f140);
}
this._f851=this.targetX;
this._f852=this.targetY;
this._f126();
for(i=0;i<this._f136.length;i++)
this._f136[i]._f448();
if(x434<1.0&&!(this._f844==0&&this._f845==0))
{
this._f762=this.setTimeout("this.smoothPan()",this._f848);
this._f795=true;
}
else
 {
clearTimeout(this._f762);
this._f762=null;
this._f882();
this._f757=false;
if(this._f225)
{
this._f225._f239();
}
if(this._f786)
{
this._f786();
}
MVUtil.runListeners(this._f93,MVEvent.RECENTER);
if(this._f701)
{
this._f701._f709(this);
}
this._f657();
this._f795=false;
return false;
}
}
MVMapView.prototype.smoothMove=function(x437,x438)
{
this.targetX=x437*(-1);
this.targetY=x438*(-1);
var x439=this._f106()/2;
var x440=this._f107()/2;
this._f828(x439,x440);
x439=Math.round(this.targetX+this._f106()/2);
x440=Math.round(this.targetY+this._f107()/2);
this._f561(x439,x440);
if(this._f788)
{
this._f788(this._f428-this._f139,this._f429-this._f140);
}
for(i=0;i<this._f136.length;i++)
this._f136[i]._f448();
}
var _f281=0;
MVMapView.prototype.setTimeout=function(_f148,_f149)
{
var Ie="tempVar"+_f281;
_f281++;
eval(Ie+" = this;");
var oi=_f148.replace(/\\/g,"\\\\");
oi=oi.replace(/\"/g,'\\"');
return window.setTimeout(Ie+'._setTimeoutDispatcher("'+oi+'");'+Ie+" = null;",_f149);
}
MVMapView.prototype._setTimeoutDispatcher=function(func)
{
eval(func);
}
MVMapView.prototype._f907=function(x441,x442)
{
if(!this._f762)
{
this._f762=this.setTimeout("this.arrowScroll()",5)
}
}
MVMapView.prototype.arrowScroll=function()
{
if(this._f758)
{
this._f184=null;
this._f229.style.cursor=this._f223;
return true;
}
this._f229.style.cursor=this._f223;
if(this._f762!=null)
{
clearTimeout(this._f762);
this._f762=null;
}
var x443=(this.getBrowserType()!="OS")?96:48;
if(this._f789.length>0)
{
var x444=((this._f789.contains(37)||this._f789.contains(x443+4))?1:0)+
((this._f789.contains(39)||this._f789.contains(x443+6))?-1:0);
var x445=((this._f789.contains(38)||this._f789.contains(x443+8))?1:0)+
((this._f789.contains(40)||this._f789.contains(x443+2))?-1:0);
this.moveOffsetX=(x444==1?15:0)+(x444==-1?-15:0);
this.moveOffsetY=(x445==1?15:0)+(x445==-1?-15:0);
this._f828(0,0);
this._f561(this.moveOffsetX,this.moveOffsetY);
if(this._f225)
{
this._f225._f238(this._f428-this._f139,this._f429-this._f140)
}
if(this._f788)
{
this._f788(this._f428-this._f139,this._f429-this._f140);
}
for(i=0;i<this._f136.length;i++)
this._f136[i]._f448();
this._f762=this.setTimeout("this.arrowScroll()",5)
}
else
 {
this._f657();
this._f762=null;
this._f126();
this._f882();
this._f757=false;
if(this._f225)
{
this._f225._f239();
}
if(this._f786)
{
this._f786();
}
MVUtil.runListeners(this._f93,MVEvent.RECENTER);
if(this._f701)
{
this._f701._f709(this);
}
}
}
MVMapView.prototype._f912=function(x446){
var x447=this._f234(x446);
var x448=x447.left;
var x449=x447.top;
if(((_f65._f66=="NS"))&&((x448<=0)||(x448>=
this._f106())||(x449<=0)||(x449>=
this._f107()))&&(this._f184))
{
this._f893();
}
}
MVMapView.prototype._f514=function(x450)
{
var x451=MVUtil.getMouseLocation(this,x450);
var x452=x451.sdo_point.x;
var x453=x451.sdo_point.y;
this._f751=x452;
this._f752=x453;
}
MVMapView.prototype._f913=function(x454)
{
this._f758=x454;
}
MVMapView.prototype.enableDragging=function(x455)
{
this.draggingEnabled=x455;
}
function _f790(x0)
{
this.length=0;
if(x0)
{
for(var x1=x0.length-1;x1>=0;--x1)
{
this.add(x0[x1]);
this.length++;
}
}
}
_f790.prototype.add=function(x456)
{
if(!this.contains(x456))
{
this["key"+x456]=1;
this.length++;
}
}
_f790.prototype.remove=function(x457)
{
if(this.exist(x457))
{
delete this["key"+x457];
this.length--;
}
}
_f790.prototype.contains=function(x458)
{
return this["key"+x458]==1;
}
_f790.prototype.exist=function(x459)
{
return this["key"+x459]==1||this["key"+x459]==2;
}
_f790.prototype.sleep=function()
{
for(prop in this)
{
if(typeof this[prop]!="function")
{
this[prop]=2;
}
}
}
_f790.prototype.wakeup=function()
{
for(prop in this)
{
if(typeof this[prop]!="function")
{
this[prop]=1;
}
}
}
MVMapView.prototype.addMapDecoration=function(x460)
{
if(this._f778==null)
this._f778=new Array();
this._f778.push(x460);
if(this._f88)
{
var id="_md_"+this._f779
x460.init(id,this,this._f229);
this._f779++;
x460._f88=true;
if(x460.afterDisAction)
{
x460.afterDisAction();
}
}
}
MVMapView.prototype.removeMapDecoration=function(x461)
{
if(x461==null||x461.id==null||this._f778==null)
{
return;
}
for(var x462=0;x462<this._f778.length;x462++)
if(this._f778[x462].id==x461.id)
{
if(this._f778[x462]._f632)
this._f657();
this._f778[x462]=this._f778[this._f778.length-1]
this._f778.pop();
x461._f233();
var x463=null;
if(x461._f631)
x463=x461._f655;
else
 x463=x461._f630;
x463.onclick=null;
x463.onmouseover=null;
x463.onmouseout=null;
this._f229.removeChild(x463);
MVUtil._f87(x463);
this._f658();
break;
}
}
MVMapView.prototype.addCopyRightNote=function(x464,x465)
{
this._f821=x464;
this._f914(x464,x465);
}
MVMapView.prototype.addOverviewMap=function(x466)
{
if(this._f225==null)
this._f225=x466;
else
 return;
if(this._f88)
this._f225.init(this._f225._f212,this);
}
function _f915(x0,x1,x2,x3,x4,x5)
{
this.div=document.createElement("img");
this.div.src=x1;
this.div.style.position="absolute";
this.div.style.zIndex=x4;
if(x5)
this.div.title=x5;
this.div.style.width=MVUtil._f26(x2);
this.div.style.height=MVUtil._f26(x3);
MVUtil._f145(this.div);
x0.appendChild(this.div);
return this.div;
}
MVMapView.prototype.addNavigationPanel=function(x467,x468,x469,x470,x471)
{
this.navigationPanel=new MVNavigationPanel(x468,x469,x470,x471);
if(!x467)
x467="WEST";
this.navigationPanel._f916=x467;
if(this._f88)
this.navigationPanel.init(this._f229,this);
}
MVMapView.prototype.addScaleBar=function(x472,x473,x474,x475)
{
if(this._f701)
return ;
this._f701=new MVScaleBar(x475);
this._f696=x472||this._f696;
this._f697=x473||this._f697;
this._f698=x474||this._f698;
if(this._f88)
this._f835(this._f701);
}
MVMapView.prototype.setMouseCursorStyle=function(x476,x477)
{
if(x477=="dragging")
this._f222=x476;
else if(x477=="default")
{
this._f223=x476;
this.setTileLayerCursor(x476);
}
}
MVMapView.prototype.enableLoadingIcon=function(x478)
{
this._f793=x478;
if(!x478)
this.setLoadingIconVisible(false);
}
MVMapView.prototype.setLoadingIconVisible=function(x479)
{
if(!this._f793)
x479=false;
if(!x479)
{
if(this._f794)
this._f794.style.visibility="hidden";
}
else
 {
if(!this._f794)
{
var x480=document.createElement("img");x480.src=_f65._f141+"loading.gif";
x480.style.zIndex=2001;
x480.style.position="absolute";
var x481=0,x482=0;
if(x480.width)
x481=x480.width;
if(x480.height)
x482=x480.height;
x480.style.left=MVUtil._f26((this._f106()-x481)/2);
x480.style.top=MVUtil._f26((this._f107()-x482)/2);
var x483=this;
x480.onload=function()
{
x480.style.left=MVUtil._f26((x483._f106()-x480.width)/2);
x480.style.top=MVUtil._f26((x483._f107()-x480.height)/2);
x480.onload=null;
};
this._f229.appendChild(x480);
this._f794=x480;
}
else
 {
this._f794.style.left=MVUtil._f26((this._f106()-this._f794.width)/2);
this._f794.style.top=MVUtil._f26((this._f107()-this._f794.height)/2);
this._f794.style.visibility="visible";
}
}
}
MVMapView.prototype.getMapCoordinates=function(x484)
{
return MVSdoGeometry.createPoint(x484.x/this._f72+this._f71,
this._f73-x484.y/this._f74,this.srid);
}
MVMapView.prototype.setDefaultFOIImageFormat=function(x485)
{
if(x485)
this._f63=x485.toUpperCase();
}
MVMapView.prototype.setErrorHandler=function(x486)
{
this._f7=x486;
}
MVMapView.prototype._f79=function()
{
var x487=true;
for(var x488=0;x488<this._f763.length;x488++)
{
var x489=this._f763[x488];
if(x489.div&&x489.isVisible()&&x489._f24)
{
x487=false;
break;
}
}
if(x487&&this.foiGroupArray)
{
for(var x488=0;x488<this.foiGroupArray.length;x488++)
{
var x490=this.foiGroupArray[x488];
if(x490._f24)
{
x487=false;
break;
}
}
}
if(x487)
this.setLoadingIconVisible(false);
}
MVMapView.prototype._f879=function(x491)
{
if(!this._f796)
this._f796=new Array();
this._f796.push(x491);
var x492=this;
var x493=function()
{
if(x492._f795)
return ;
clearInterval(x492._f797);
x492._f797=null;
while(x492._f796.length>0)
{
x492.addThemeBasedFOI(x492._f796.shift());
}
}
if(!this._f797)
this._f797=setInterval(x493,50);
}
MVMapView.prototype._f539=function(x494)
{
if(!this._f538)
this._f538=x494;
}
MVMapView.prototype.compareBaseURL=function(x495)
{
if(x495&&x495!=""&&x495.indexOf(this._f4)<0)
return false;
else
 return true;
}
MVMapView.prototype.checkSize=function()
{
clearTimeout(this._f802);
if(!this._f229)
return ;
if(Math.abs(this._f798-this._f106())>3||
Math.abs(this._f799-this._f107())>3)
{
this._f800=true;
this._f801=0.4;
this._f798=this._f106();
this._f799=this._f107();
}
else
 this._f801+=0.4;
if(this._f801>0.4&&this._f800)
{
this._f899();
this._f800=false;
this._f801=0;
}
this._f802=this.setTimeout("this.checkSize()",300);
}
MVMapView.prototype._f164=function(x496,x497)
{
return {x:(x496-this._f90)*this._f72+this._f106()/2,
y:(this._f91-x497)*this._f74+this._f107()/2};
}
MVMapView.prototype.showInfoTip=function(x498,x499)
{
if(this.infoTipDiv)
this.infoTipDiv.parentNode.removeChild(this.infoTipDiv);
this.infoTipDiv=MVUtil._f740(x498);
this.infoTipDiv.id="mv_mrqzm_msg";
this.infoTipDiv.style.border="1px solid #000000";
this.infoTipDiv.style.backgroundColor="#FFFFCC";
this.infoTipDiv.style.position="absolute";
var x500=MVUtil._f721(this,x499);
this.infoTipDiv.style.left=x500.x+"px";
this.infoTipDiv.style.top=x500.y+"px";
this.infoTipDiv.style.zIndex=9999;
this._f229.appendChild(this.infoTipDiv);
};
MVMapView.prototype._f198=function()
{
if(this.infoTipDiv)
{
this.infoTipDiv.parentNode.removeChild(this.infoTipDiv);
this.infoTipDiv=null;
}
};
MVMapView.prototype._f873=function()
{
if(arguments.length<2)
return ;
var x501=new Array();
for(var x502=2;x502<arguments.length;x502++)
x501[x502-2]=arguments[x502];
var x503={obj:arguments[0],func:arguments[1],params:x501};
this._f89.push(x503);
}
MVMapView.addMapTileLayerDefinition=function(x504)
{
var x505=x504.dataSource?x504.dataSource+"."+x504.mapTileLayer:x504.mapTileLayer;
if(x504)
_f65._f598(x505,x504)
}
MVMapView._f117=false;
MVMapView.enableXMLHTTP=function(x506)
{
MVMapView._f117=x506;
}
MVMapView.isXMLHTTPEnabled=function()
{
return MVMapView._f117;
}
MVMapView.setProxyPath=function(x507)
{
_f65._f618=x507;
}
MVMapView.setErrorHandler=function(x508)
{
MVi18n.addBehavior("func",x508,"text");
}
MVMapView._f121=true;
MVMapView.enableCodingHints=function(x509)
{
MVMapView._f121=x509;
}
MVMapView._f118=false;
MVMapView.enableTiming=function(x510)
{
MVMapView._f118=x510;
}
MVMapView.debug=false;
MVMapView.enableDebugMode=function(x511)
{
MVMapView.debug=x511;
}
MVMapView._f477=function(x512,x513,x514)
{
var x515=new Array(x513.length);
for(var x516=0;x516<x513.length;x516+=2)
{
var x517=x512(x513[x516],x513[x516+1],x514);
x515[x516]=x517.x;
x515[x516+1]=x517.y;
}
return x515;
}
MVMapView.prototype.getPixelsPerXUnit=function()
{
var x518=this.msi.mapConfig.zoomLevels[this._f53].tileImageWidth;
var x519=this.msi.mapConfig.zoomLevels[this._f53].tileWidth;
return x518/x519;
}
MVMapView.prototype.getPixelsPerYUnit=function()
{
var x520=this.msi.mapConfig.zoomLevels[this._f53].tileImageHeight;
var x521=this.msi.mapConfig.zoomLevels[this._f53].tileHeight;
return x520/x521;
}
MVMapView.prototype.wrapAroundLayer=function(x522)
{
if(!x522)
return false;
if(this.wraparound)
{
this._f126();
var x523=(x522-
this._f106())*0.5/this._f72;
var x524=this._f71-x523;
var x525=this._f304+x523;
var x526=this.msi._f166;
var x527=this.msi._f165;
var x528=x527-x526;
var x529=0;
if(x524<x526)
{
x529=Math.ceil((x526-x524)/x528);
x524+=x528*x529;
x525+=x528*x529;
x529=0-x529;
}
else if(x524>x527)
{
x529=Math.ceil((x524-x527)/x528);
x524-=x528*x529;
x525-=x528*x529;
}
if(x525>x527)
return true;
}
return false
}
MVMapView.prototype.enableMapWrapAround=function(x530)
{
this.wraparound=x530;
}
MVMapView._f917=0;
MVMapView.prototype._f870=function(x531,x532)
{
if(!x531)
return ;
this._f136.push(x531);
var x533=document.createElement("div");
this._f229.appendChild(x533);
if(!x531.visible)
x533.style.visibility="hidden";
x533.style.zIndex=this._f136.length;
x533.style.position="absolute";
x533.style.zIndex=1;
x533.style.left=MVUtil._f26(0);
x533.style.top=MVUtil._f26(0);
x533.style.width="100%";
x533.style.height="100%";
var x534=document.createElement("img");
x534.src=_f65._f141+"transparent."+(_f65._f66=="IF"?"gif":"png");
x534.style.position="absolute";
x534.style.zIndex=9999;
x534.style.left=MVUtil._f26(0);
x534.style.top=MVUtil._f26(0);
x534.style.width="100%";
x534.style.height="100%";
x533.appendChild(x534);
var x535=this;
x533.ondblclick=function(x536)
{
return x535._f896(x536);
};
var x537=document.createElement("div");
x531.layerDiv=x537;
x537.id="mvexttl_"+MVMapView._f917++;
x537.style.position="absolute";
x537.style.left=MVUtil._f26(0);
x537.style.top=MVUtil._f26(0);
x537.style.width="100%";
x537.style.height="100%";
x533.appendChild(x537);
if(this._f88)
{
x531.setCenterAndZoomLevel(this._f90,this._f91,this._f53,true);
x531.init(x537);
}
x531.parent=this;
MVMapView.addMapTileLayerDefinition(x531._f560);
}
MVMapView.prototype._f830=function(x538,x539,x540,x541)
{
for(var x542=0;x542<this._f136.length;x542++)
{
var x543=this._f136[x542];
if(x543.isExtAPITileLayer()&&x543.isVisible())
{
if(x543._f561)
x543._f561(x538,x539);
else
 {
var x544=function(x545)
{
x543.setCenter(x545.getPointX(),x545.getPointY());
}
var x546=MVSdoGeometry.createPoint(x540,x541,this.srid);
this.transformGeom(x546,x543.srid,null,x544);
}
}
}
}
MVMapView.prototype._f565=function(x547,x548,x549,x550,x551)
{
if(!x547.isVisible()&&!x551)
return ;
var x552=function(x553)
{
if(x551)
{
x547._f22=x553.getPointX();
x547._f23=x553.getPointY();
if(x550!=undefined&&x550!=null)
x547._f53=x550;
}
else
 {
if(x547.map)
{
if(x550!=undefined&&x550!=null)
{
x547.resize();
x547.setCenterAndZoomLevel(x553.getPointX(),x553.getPointY(),x550);
}
else
 {
x547.setCenter(x553.getPointX(),x553.getPointY());
}
}
else
 {
x547._f22=x553.getPointX();
x547._f23=x553.getPointY();
if(x550!=undefined&&x550!=null)
x547._f53=x550;
x547.init(x547.layerDiv);
}
}
}
var x554=MVSdoGeometry.createPoint(x548,x549,this.srid);
this.transformGeom(x554,x547.srid,null,x552);
}
MVMapView.prototype._f843=function(x555,x556,x557,x558)
{
for(var x559=0;x559<this._f136.length;x559++)
{
var x560=this._f136[x559];
if(x560.isExtAPITileLayer())
this._f565(x560,x555,x556,x557,x558);
}
}
MVMapView.prototype._f227=function()
{
if(this._f136.length>0)
return this._f136[0];
else
 return null;
}
MVMapView.prototype._f829=function(x561,x562,x563,x564)
{
var x565,x566;
if(this.wraparound||this._f226||!this._f813)
return {left:x562,top:x564};
if(x561==x562)
x565=x562;
else
 {
var x567=(x561-x562)/this._f72;
var x568=(x561<x562);
var x569=this.msi.mapConfig.coordSys.minX;
var x570=this.msi.mapConfig.coordSys.maxX;
var x571=(this.msi.mapConfig.coordSys.minX+this.msi.mapConfig.coordSys.maxX)/2;
var x572=this.msi.mapConfig.coordSys.maxX-this.msi.mapConfig.coordSys.minX;
var x573=this._f304-this._f71;
var x574=this._f90+x567;
var x575=x574-x573/2;
var x576=x574+x573/2;
if(x568)
{
if(x575<x569)
{
if(x573>x572)
{
if(x574<x571)
x574=x571;
}
else
 {
if(this._f71<x569)
x574=this._f90;
else
 x574=x574-(x575-x569);
}
}
}
else
 {
if(x576>x570)
{
if(x573>x572)
{
if(x574>x571)
x574=x571;
}
else
 {
if(this._f304>x570)
x574=this._f90;
else
 x574=x574-(x576-x570);
}
}
}
x567=x574-this._f90;
x565=x561-x567*this._f72;
}
if(x563==x564)
x566=x564;
else
 {
var x577=(x563-x564)/this._f74;
var x578=(x563<x564);
var x579=this.msi.mapConfig.coordSys.minY;
var x580=this.msi.mapConfig.coordSys.maxY;
var x581=(this.msi.mapConfig.coordSys.minY+this.msi.mapConfig.coordSys.maxY)/2;
var x582=this.msi.mapConfig.coordSys.maxY-this.msi.mapConfig.coordSys.minY;
var x583=this._f73-this._f310;
var x584=this._f91-x577;
var x585=x584-x583/2;
var x586=x584+x583/2;
if(!x578)
{
if(x585<x579)
{
if(x583>x582)
{
if(x584<x581)
x584=x581;
}
else
 {
if(this._f310<x579)
x584=this._f91;
else
 x584=x584-(x585-x579);
}
}
}
else
 {
if(x586>x580)
{
if(x583>x582)
{
if(x584>x581)
x584=x581;
}
else
 {
if(this._f73>x580)
x584=this._f91;
else
 x584=x584-(x586-x580);
}
}
}
x577=x584-this._f91;
x566=x563+x577*this._f74;
}
return {left:Math.round(x565),top:Math.round(x566)};
}
MVMapView.prototype._f832=function(x587)
{
if(this._f226)
this.reCenterTag=false;
if(this.wraparound||this._f226||!this._f813)
return x587;
if(this.originalCenter==null)
this.originalCenter=x587;
if(this.reCenterTag)
this.originalCenter=x587;
else
 x587=this.originalCenter;
this.reCenterTag=false;
var x588=this.msi.mapConfig.coordSys.minX;
var x589=this.msi.mapConfig.coordSys.maxX;
var x590=(this.msi.mapConfig.coordSys.minX+this.msi.mapConfig.coordSys.maxX)/2;
var x591=this.msi.mapConfig.coordSys.maxX-this.msi.mapConfig.coordSys.minX;
var x592=this._f106()/this._f72;
var x593=x587.getPointX();
var x594=x593-x592/2;
var x595=x593+x592/2;
if(x592>x591)
x593=x590;
else
 {
if(x594<x588)
x593=x588+x592/2;
else if(x595>x589)
x593=x589-x592/2;
}
var x596=this.msi.mapConfig.coordSys.minY;
var x597=this.msi.mapConfig.coordSys.maxY;
var x598=(this.msi.mapConfig.coordSys.minY+this.msi.mapConfig.coordSys.maxY)/2;
var x599=this.msi.mapConfig.coordSys.maxY-this.msi.mapConfig.coordSys.minY;
var x600=this._f107()/this._f74;
var x601=x587.getPointY();
var x602=x601-x600/2;
var x603=x601+x600/2;
if(x600>x599)
x601=x598;
else
 {
if(x602<x596)
x601=x596+x600/2;
else if(x603>x597)
x601=x597-x600/2;
}
return MVSdoGeometry.createPoint(x593,x601,this.srid);
}
MVMapView.prototype._f104=function()
{
for(var x604=0;x604<this._f136.length;x604++)
{
if(this._f136[x604].layerControl)
return this._f136[x604].layerControl;
}
return null;
}
MVMapView.prototype.combineTileLayers=function()
{
for(var x605=0;x605<this._f136.length;x605++)
{
if(this._f136[x605].layerControl)
{
for(var x606=x605+1;x606<this._f136.length;x606++)
{
if(MVUtil.canBeCombined(this._f136[x605],this._f136[x606]))
{
if(!this._f136[x605]._f452){
var x607=this._f136[x605].clone();
var x608=new _f420(this,x607);
x607.parent=this;
x607.layerControl=x608;
x607._f452=new Array();
x607._f452.push(this._f136[x605]);
this._f136[x605]._f170();
this._f136[x605]._f563=x607;
this._f136[x605]=x607;
}
this._f136[x605]._f452.push(this._f136[x606]);
this._f136[x605]._f425=this._f136[x605]._f425&&this._f136[x606]._f425;
this._f136[x606]._f170();
this._f136[x606]._f563=this._f136[x605];
this._f136.splice(x606,1);
if(this._f88)
this._f136[x605].refresh(true);
}
else
 break;
}
}
}
}
MVMapView.prototype.tileLayersConfigLoaded=function()
{
for(var x609=0;x609<this._f136.length;x609++)
{
if(!this._f136[x609].config)
return false;
}
return true;
}
MVMapView.prototype.enableMouseWheelZooming=function(x610)
{
this.setMouseWheelZoomEnabled(x610);
}
MVMapView.prototype.getMapTileLayers=function()
{
if(this._f136)
return this._f136.slice(0);
else
 return null;
}
MVMapView.prototype.addFOIGroup=function(x611)
{
if(this.foiGroupArray==null)
this.foiGroupArray=new Array();
this.foiGroupArray.push(x611);
x611.parent=this;
if(this.foiGroupLayer==null)
this.createFOIGroupLayer();
x611.init(this.foiGroupArray.length-1);
if(this._f88)
{
var x612=(x611._f84()-this._f106())*0.5/this._f72;
var x613=(x611._f85()-this._f107())*0.5/this._f74;
x611._f543((this._f106()-x611._f84())/2,
(this._f107()-x611._f85())/2);
x611.display(this._f71-x612,
this._f310-x613,this._f304+x612,
this._f73+x613,true);
}
}
MVMapView.prototype.refreshGroupFOIs=function(x614)
{
this._f126();
if(this.foiGroupArray!=null)
{
for(var x615=0;x615<this.foiGroupArray.length;x615++)
{
var x616=this.foiGroupArray[x615];
var x617=(x616._f84()-this._f106())*0.5/this._f72;
var x618=(x616._f85()-this._f107())*0.5/this._f74;
x616._f543((this._f106()-x616._f84())/2,
(this._f107()-x616._f85())/2);
x616.display(this._f71-x617,
this._f310-x618,this._f304+x617,
this._f73+x618,x614);
}
}
}
MVMapView.prototype.getFOIGroup=function(id)
{
if(this.foiGroupArray&&this.foiGroupArray.length>id)
return this.foiGroupArray[id];
else
 return null;
}
MVMapView.prototype.createFOIGroupLayer=function()
{
this.foiGroupLayer=document.createElement("div");
this.foiGroupLayer.style.position="absolute";
this.foiGroupLayer.style.zIndex=180;
this.foiGroupLayer.style.left=MVUtil._f26(0);
this.foiGroupLayer.style.top=MVUtil._f26(0);
this.div.appendChild(this.foiGroupLayer);
}
MVMapView.prototype.showOverLayerMarkWindow=function(x619,x620,x621,x622)
{
if(this.infoWindowTimeout2)
{
clearTimeout(this.infoWindowTimeout2);
this.infoWindowTimeout2=null;
}
var x623=this;
var x624=function(x625)
{
if(x625)
x619=x625;
x623.overlayMarker=true;
x623.infoLayer2.domDiv=x620;
if(x621==null)
x621=0;
if(x622==null)
x622=0;
x623.infoLayer2._f321("",x619.sdo_point.x,x619.sdo_point.y,x621,x622,"MVInfoWindowStyle4");
x623.overlayMarker=false;
x623.infoLayer2.domDiv=null;
}
var x626=function()
{
if(x623._f88)
{
if(!x619.srid)
x619.srid=x623.srid;
if(x619.srid&&(x623.srid!=x619.srid))
center=x623.transformGeom(x619,x623.srid,null,x624);
else
 x624();
}
else
 x623.infoWindowTimeout2=setTimeout(x626,200);
}
x626();
}
MVMapView.prototype.removeOverLayerMarkWindow=function()
{
if(this.infoLayer2._f77.length>0)
this.infoLayer2.deleteInfoWindow(this.infoLayer2._f77[0]);
}
MVMapView.setUtilImgURL=function(x627)
{
_f65._f141=x627;
}
MVMapView.prototype.getMapConfig=function()
{
if(!this._f136)
return null;
if(!this.msi.mapConfig)
MVi18n._f6("MVMapView.getMapConfig","MAPVIEWER-05526");
else
 return this.msi.mapConfig;
}
MVMapView.prototype._f836=function()
{
this.refreshThemeBasedFOIs(true);
this._f296();
this.refreshGroupFOIs(true);
this._f76.refresh(this._f71,this._f310,
this._f304,this._f73,
this._f106(),this._f107());
this.infoLayer2.refresh(this._f71,this._f310,
this._f304,this._f73,
this._f106(),this._f107());
}
MVMapView.setLocale=function(x628,x629)
{
if(MVi18n.language!=x628||MVi18n.country!=x629)
{
MVi18n.language=x628;
MVi18n.country=x629;
}
}
MVMapView.prototype.getCopyright=function()
{
if(this._f821!=null)
return this._f821;
else
 return this.getEmbeddedCopyright();
}
MVMapView.prototype.setTouchBehavior=function(x630)
{
this._f205=x630;
}
MVMapView.prototype._f914=function(x631,x632)
{
if(this.copyright!=undefined)
{
this._f229.removeChild(this.copyright);
delete this.copyright;
}
var x633=1;
var x634=1;
var x635=0;
var x636=0;
var x637=null;
if(x632)
{
if(x632.left!=undefined||x632.top!=undefined)
{
this._f822=false;
if(x632.left!=undefined)
x633=x632.left;
if(x632.top!=undefined)
x634=x632.top;
if(x632.xOffset!=undefined)
x635=x632.xOffset;
if(x632.yOffset!=undefined)
x636=x632.yOffset;
if(x632.style!=undefined)
x637=x632.style;
}
}
if(x637==null)
x637='position:absolute;z-index:2000;font-size:12';
var x638="<div class=MV_COPYRIGHT style='"+x637+"'>";
if(!this._f822)
{
cr=new MVMapDecoration(x638+x631+"</div>",x633,x634,500,null,x635,x636);
this.addMapDecoration(cr);
}
else
 {
var x639=document.createElement("SPAN");
x639.className="MV_COPYRIGHT";
x639.innerHTML=" "+x631+" ";
x639.setAttribute("style",x637);
x639.style.cssText=x637;
x639.style.position="absolute";
x639.style.bottom=MVUtil._f26(1);
this._f229.appendChild(x639);
this.copyright=x639;
this._f658();
}
}
MVMapView.prototype._f566=function()
{
if(this._f821!=null||this._f226)
return ;
var x640=this.getEmbeddedCopyright();
if(x640==null)
return ;
this._f914(x640);
}
MVMapView.prototype.getEmbeddedCopyright=function()
{
var x641="";
for(var x642=0;x642<this._f136.length;x642++)
{
var x643=this._f136[x642];
if(x643.isVisible()&&x643.config&&x643.config.copyright)
{
if(x641)
x641+="; "+x643.config.copyright;
else
 x641=x643.config.copyright;
}
}
return x641;
}
MVMapView.prototype._f658=function(x644)
{
if(x644==undefined)
x644=this;
if(x644==undefined||!x644._f822||!x644.copyright)
return ;
if(this._f778!=null)
{
for(var x645=0;x645<this._f778.length;x645++)
{
var x646=this._f778[x645];
if(x646._f629&&x646.visible&&!x646.collapsed)
{
x644.copyright.style.right=MVUtil._f26(x646.width+3);
return ;
}
}
}
if(x644._f225&&x644._f225.mapDec&&!x644._f225.mapDec.collapsed&&x644._f225.mapDec.visible)
x644.copyright.style.right=MVUtil._f26(x644._f225.mapDec.width+3);
else
 x644.copyright.style.right=MVUtil._f26(x644.toolBarContainer.offsetWidth+5);
}
MVMapView.prototype.setTileLayerCursor=function(x647)
{
if(this._f136)
{
for(var x648=0;x648<this._f136.length;x648++)
{
if(this._f136[x648].layerControl)
MVUtil._f162(this._f136[x648].layerControl._f444,x647);
else if(this._f136[x648].isExtAPITileLayer())
MVUtil._f162(this._f136[x648].layerDiv.parentNode,x647);
}
}
if(this.themelayers)
{
for(var x648=0;x648<this.themelayers.length;x648++)
{
if(this.themelayers[x648].layerControl)
MVUtil._f162(this.themelayers[x648].layerControl._f444,x647);
}
}
if(this._f763)
{
for(var x648=0;x648<this._f763.length;x648++)
{
if(this._f763[x648]._f29&&this._f763[x648].div)
{
MVUtil._f162(this._f763[x648].div,x647);
}
}
}
}
MVMapView.prototype.getTileLayerControl=function(x649)
{
if(x649.config.clientTileAccess)
{
var x650=x649.config.clientTileAccess;
var x651=null;
if(x650.lib_url&&x650.key)
x650.lib_url=x650.lib_url.replace("=$$key$$","="+x650.key);
var x652={key:x650.key,libURL:x650.lib_url};
if(x650.type=="google")
x651=new MVGoogleTileLayer(x652);
else if(x650.type=="bing")
x651=new MVBingTileLayer(x652);
else if(x650.type=="yahoo")
x651=new MVYahooTileLayer(x652);
if(x651)
{
x651.setKey(x650.key);
if(x649.mapType)
x651.setMapType(x649.mapType);
this.removeMapTileLayer(x649);
this.addMapTileLayer(x651);
return x651;
}
}
return new _f420(this,x649);
}
MVMapView.prototype.setFOILayersSize=function()
{
for(lc=0;lc<this._f763.length;lc++)
{
this._f763[lc].setSize(
parseInt(this._f763[lc]._f1._f45*(this._f106())),
parseInt(this._f763[lc]._f1._f46*(this._f107())));
}
this._f260.setSize(Math.ceil(2*(this._f106())),
Math.ceil(2*(this._f107())));
if(this.foiGroupArray!=null)
{
for(var x653=0;x653<this.foiGroupArray.length;x653++)
{
this.foiGroupArray[x653].setSize(Math.ceil(2*(this._f106())),
Math.ceil(2*(this._f107())));
}
}
}
MVMapView.prototype.shouldPinchZoom=function(x654)
{
if(x654==1||x654<=0)
return false;
var x655=this._f53;
if(x654>1&&x655<this._f765)
return true;
else if(x654<1&&x655>0)
return true;
else
 return false;
}
MVMapView.prototype.getPinchZoomingLevel=function(x656)
{
var x657=this._f53;
if(x656>0&&(x656<1&&x656>0.9||x656>1&&x656<1.1))
return x657;
var x658=x657;
var x659=this._f765;
var x660=this.msi._f581(x657);
var x661=x660/x656;
if(x656<1)
{
x658--;
for(var x662=x657-1;x662>=0;--x662)
{
var x663=this.msi._f581(x662);
if(x661>x663)
{
x658=x662;
x660=x663;
}
else
 {
var x664=x661/x660;
var x665=x663/x661;
if(x664>x665)
x658=x662;
break;
}
}
}
else if(x656>1)
{
x658++;
for(var x662=x657+1;x662<=x659;x662++)
{
var x663=this.msi._f581(x662);
if(x661<x663)
{
x658=x662;
x660=x663;
}
else
 {
var x664=x660/x661;
var x665=x661/x663;
if(x664>x665)
x658=x662;
break;
}
}
}
return x658;
}
MVMapView.prototype._f918=function(x666)
{
if(x666.type=="touchstart")
this.touchCount=x666.touches.length;
else if(x666.type=="touchend")
this.touchCount-=x666.changedTouches.length;
}
MVMapView.prototype._f900=function(x667)
{
this._f918(x667);
if(_f65.isIOS)
{
if(x667.touches.length>2)
{
this._f179();
return ;
}
this._f825=1;
if(x667.touches.length==1)
{
var x668=MVUtil._f181(x667.touches[0]);
this._f823.push(x668);
var x669=this;
var x670=function()
{
x669._f177=null;
x669._f178(x667);
x669._f919=true;
}
this._f177=setTimeout(x670,_f65._f180);
}
else if(x667.touches.length==2)
{
this._f179();
if(x667.changedTouches.length==1)
{
var x668=MVUtil._f181(x667.changedTouches[0]);
this._f823.push(x668);
}
else if(x667.changedTouches.length==2)
{
var x668=MVUtil._f181(x667.changedTouches[0]);
this._f823.push(x668);
x668=MVUtil._f181(x667.changedTouches[1]);
this._f823.push(x668);
}
}
if(this._f823.length==2)
{
var x671=this._f823[1].x-this._f823[0].x;
var x672=this._f823[1].y-this._f823[0].y;
this._f824=Math.sqrt(x671*x671+x672*x672);
}
}
}
MVMapView.prototype._f901=function(x673)
{
if(_f65.isIOS)
{
if(x673.touches.length==2)
{
var x674=MVUtil._f181(x673.touches[0]);
var x675=MVUtil._f181(x673.touches[1]);
var x676=x674.x-x675.x;
var x677=x674.y-x675.y;
var x678=Math.sqrt(x676*x676+x677*x677);
this._f825=x678/this._f824;
}
}
}
MVMapView.prototype._f902=function(x679)
{
MVUtil.runListeners(this._f93,MVEvent.MOUSE_UP,[MVUtil.getEvent(x679)]);
if(this._f919)
{
this._f179();
return ;
}
var x680=false;
if(this._f177)
x680=true;
this._f179();
this._f823.length=0;
this._f918(x679);
if(x680)
{
if(this._f633)
{
this._f633(MVUtil.getEvent(x679));
}
MVUtil.runListeners(this._f93,MVEvent.MOUSE_CLICK,[MVUtil.getEvent(x679)]);
}
}
MVMapView.prototype._f179=function(x681)
{
this._f919=false;
if(this._f177)
{
clearTimeout(this._f177);
this._f177=null;
}
this._f260._f179();
for(var x682=0;x682<this._f763.length;x682++)
{
var x683=this._f763[x682];
x683._f179();
}
}
MVMapView.prototype._f178=function(x684)
{
if(!this._f205||!this._f205.touchHold||
this._f205.touchHold=="mouse_right_click")
{
if(this._f787)
{
this._f787(MVUtil.getEvent(x684));
}
MVUtil.runListeners(this._f93,MVEvent.MOUSE_RIGHT_CLICK,[MVUtil.getEvent(x684)]);
}
}
var MVMapInitializers=MVMapInitializers||new Array();
function _f314(_f457,x,y,tabs,index,_width,_height,style,mouseOver,parent,screenLoc,parameters,domDiv,infoLayerId)
{
if(_width==null||_width<0)_width=0;
if(_height==null||_height<0)_height=0;
this._f313=parent.parent;
if(style!="MVInfoWindowStyle1"&&style!="MVInfoWindowStyle4")
{
if(!_width)
_width=_f65._f315;
if(!_height)
_height=_f65._f316;
eval(style+".init()");
this._f458=eval(style+".createWindow("+x+","+y+","+_width+","+_height+","+parent.parent._f144+")");
_f457.appendChild(this._f458);
}
var close=function(){
if(MVInfoWindowStyle1._f311)
{
clearTimeout(MVInfoWindowStyle1._f311);
MVInfoWindowStyle1._f311=null;
}
var id=parent.parent._f144+"_"+infoLayerId;
if(MVInfoWindowStyle4._f311&&MVInfoWindowStyle4._f311[id])
{
clearTimeout(MVInfoWindowStyle4._f311[id]);
MVInfoWindowStyle4._f311[id]=null;
}
MVInfoWindowStyle1.clear();
MVInfoWindowStyle4.clear();
parent.deleteInfoWindow(_f457);
}
if(style=="MVInfoWindowStyle1")
{
var _f458=this._f458;
var mvinfo=this;
var drawInfoWindow=function()
{
if(MVInfoWindowStyle1.sizeChanged(parent.parent._f144))
{
MVUtil._f129(_f457);
MVInfoWindowStyle1.init(parameters);
_f458=MVInfoWindowStyle1.createWindow(x,y,_width,_height,tabs.length,parent.parent._f144);
MVInfoWindowStyle1.setTitleStyle(tabs,index);
_f457.appendChild(_f458);
MVInfoWindowStyle1.addContent(_f457,tabs);
var x0=document.getElementById("infowindow3table_"+parent.parent._f144);
MVInfoWindowStyle1.getWindowSize(_width,_height,parent.parent._f144);
MVInfoWindowStyle1.removeInActiveTabs(index,parent.parent._f144);
if(x0)
{
if(!isNaN(screenLoc.x))
{
var x1=mvinfo.checkInfoWindowOverLayer(parent,infoLayerId,x0,screenLoc,MVInfoWindowStyle1._f459);
x0.style.left=MVUtil._f26(x1.x-screenLoc.x);
x0.style.top=MVUtil._f26(x1.y-screenLoc.y);
if(!mouseOver)
{
MVInfoWindowStyle1.addCloseButton(close);
MVInfoWindowStyle1._f460(_f457,parent.parent._f144);
}
}
else
 {
if(!mouseOver)
{
MVInfoWindowStyle1.addCloseButton(close);
MVInfoWindowStyle1._f460(_f457,parent.parent._f144);
}
}
}
}
MVInfoWindowStyle1._f311=setTimeout(drawInfoWindow,500);
}
drawInfoWindow();
this._f458=_f458;
}
else if(style=="MVInfoWindowStyle4")
{
var _f458=this._f458;
MVInfoWindowStyle4.init(parameters);
this._f144=parent.parent._f144+"_"+infoLayerId;
var mvinfo=this;
var autoResize=false;
if(_width==0||_height==0)
autoResize=true;
var drawInfoWindow=function()
{
var x2=mvinfo._f144;
if(autoResize==true)
{
_width=0;
_height=0;
}
if(MVInfoWindowStyle4.sizeChanged(x2))
{
if(domDiv&&domDiv.parentNode)
{
domDiv.parentNode.removeChild(domDiv);
}
MVUtil._f129(_f457);
_f458=document.createElement("div");
_f458.style.position="absolute";
_f458.style.left="0px";
_f458.style.top="0px";
_f458.style.zIndex="200";
var x3;
if(tabs==null&&domDiv!=null)
{
x3=MVInfoWindowStyle4.createContentByDiv(x2,domDiv,autoResize,_width,_height);
_f458.appendChild(x3);
_f457.appendChild(_f458);
}
else if(tabs.length==1)
{
x3=MVInfoWindowStyle4.createTitleAndContent(x2,tabs[0].getTitle(),tabs[0].getContent(),autoResize,_width,_height,close,mouseOver);
_f458.appendChild(x3);
_f457.appendChild(_f458);
var x4=document.getElementById(x2+"_title");
if(x4)
{
var x5=x4.offsetHeight;
if(_height&&_height-x5-26>0)
{
var x6=document.getElementById(x2+"_content");
x6.style.height=MVUtil._f26(_height-x5-26);
}
}
}
else
 {
if(_width==0)
_width=_f65._f315;
if(_height==0)
_height=_f65._f316;
_f457.appendChild(_f458);
x3=MVInfoWindowStyle4.createTabsAndContent(tabs,index,_width,_height,_f458,close);
}
if(autoResize)
{
_width=x3.offsetWidth;
if(_width<_f65._f315)
{
x3.style.width=MVUtil._f26(_f65._f315);
_width=_f65._f315;
}
_height=x3.offsetHeight;
if(_height<_f65._f316)
{
x3.style.height=MVUtil._f26(_f65._f316);
_height=_f65._f316;
}
}
var x7=MVInfoWindowStyle4.createWindow(x,y,_width,_height,tabs,x2,close,mouseOver);
_f458.appendChild(x7);
var x8=document.getElementById("infowindow4_"+x2);
if(x8)
{
MVInfoWindowStyle4._f315[x2]=x8.offsetWidth;
MVInfoWindowStyle4._f316[x2]=x8.offsetHeight;
if(!isNaN(screenLoc.x))
{
var x9=mvinfo.checkInfoWindowOverLayer(parent,infoLayerId,x8,screenLoc,MVInfoWindowStyle4._f459);
x8.style.left=MVUtil._f26(x9.x-screenLoc.x);
x8.style.top=MVUtil._f26(x9.y-screenLoc.y);
if(x3!=null)
{
x3.style.left=MVUtil._f26(x9.x-screenLoc.x);
x3.style.top=MVUtil._f26(x9.y-screenLoc.y);
}
if(!mouseOver)
{
MVInfoWindowStyle4._f460(_f457,x2);
}
}
else
 {
if(!mouseOver)
{
MVInfoWindowStyle4._f460(_f457,x2);
}
}
}
}
MVInfoWindowStyle4._f311[x2]=setTimeout(drawInfoWindow,500);
}
drawInfoWindow();
this._f458=_f458;
}
else
 {
div=this._f461(tabs[0].getContent(),_width);
eval(style+".addContent(div)");
if(!mouseOver)
{
eval(style+".addCloseButton(close)");
}
}
}
_f314.prototype._f461=function(x0,x1)
{
var x2=window.document.createElement("DIV");
x2.className="infowindow";
x2.style.position="absolute";
x2.style.zIndex=3;
x2.innerHTML="<table width="+x1+"px><tr><td > "+x0+"</td></tr></table>";
MVUtil._f162(x2,"auto");
return x2;
}
_f314.prototype._f462=function()
{
if(this._f458){
this._f458.style.display="none";
}
}
_f314.prototype._f463=function()
{
this._f458.style.display="";
this._f458.style.visibility="visible";
}
_f314.prototype.isVisible=function()
{
return this._f458&&this._f458.style.display!="none";
}
_f314.prototype.checkInfoWindowOverLayer=function(x3,x4,x5,x6,x7)
{
var x8=x5.offsetWidth;
var x9=x5.offsetHeight;
var x10=x3.parent._f139;
var x11=x3.parent._f140;
var x12=x3.width;
var x13=x3.height;
var x14=x6.x;
var x15=x6.y;
var x16=true;
var x17=true;
if(x10+x14>x12/2)
x16=false;
if(x11+x15<x13/2)
x17=false;
var x18=false;
if(!x3.parent.displayedWindow)
x3.parent.displayedWindow=new Array();
x4=parseInt(x4);
if(x4==2&&x3.parent.displayedWindow[1]||
x4==1&&x3.parent.displayedWindow[2])
{
if(x16==x3.parent.displayedWindow[3-x4].right&&
x17==x3.parent.displayedWindow[3-x4].top)
{
var x19=x10+x14-x12/2;
x19=x19/x12;
var x20=Math.abs(x19/2);
x19=x11+x15-x13/2;
x19=x19/x13;
var x21=Math.abs(x19/2);
if(x20>x21)
x17=!x17;
else
 x16=!x16;
}
}
x3.parent.displayedWindow[x4]={right:x16,top:x17,x:x6.x,y:x6.y};
if(x17)
{
if(x11+x15-x7-x9>=0)
x15=x15-x7-x9;
else
 {
x15=-x11+x7;
x18=true;
}
}
else
 {
if(x11+x15+x7+x9<=x13)
x15=x15+x7;
else
 {
x15=x13-x11-x7-x9;
x18=true;
}
}
if(x16)
{
if(x10+x14+x7+x8<=x12||x18)
x14=x14+x7;
else
 x14=x12-x10-x7-x8;
}
else
 {
if(x10+x14-x7-x8>=0||x18)
x14=x14-x7-x8;
else
 x14=-x10+x7;
}
return {x:x14,y:x15};
}
function MVSdoGeometry(x0,x1,x2,x3,x4)
{
if(!x0)
MVi18n._f6("MVSdoGeometry.constructor","MAPVIEWER-05519","gtype");
if(x2!=undefined&&x2!=null&&!MVUtil.isNumberArray(x2))
MVi18n._f6("MVSdoGeometry.constructor","MAPVIEWER-05527","sdo_elem_info");
if(x3!=undefined&&x3!=null&&!MVUtil.isNumberArray(x3))
MVi18n._f6("MVSdoGeometry.constructor","MAPVIEWER-05527","sdo_ordinates");
if(x4!=undefined&&x4!=null&&!(x4 instanceof MVSdoPointType))
MVi18n._f6("MVSdoGeometry.constructor","MAPVIEWER-05527","sdo_point");
this.gtype=x0;
this.srid=x1;
if(x4)
{
this.sdo_point=x4;
}
else
 this.sdo_point=null;
this.sdo_elem_info=x2;
this.sdo_ordinates=x3;
this.mbr=null;
}
MVSdoGeometry.prototype.clone=function()
{
return new MVSdoGeometry(this.gtype,this.srid,this.sdo_elem_info,this.sdo_ordinates,this.sdo_point);
}
MVSdoGeometry.prototype.equals=function(x0)
{
if(x0==null)return false;
if(this.gtype!=x0.gtype)return false;
if(this.srid!=x0.srid)return false;
if(!this.array_equals(this.getPoint(),x0.getPoint()))return false;
if(!this.array_equals(this.sdo_elem_info,x0.sdo_elem_info))return false;
if(this.gtype%10==1)
return true;
if(!this.array_equals(this.sdo_ordinates,x0.sdo_ordinates))return false;
return true;
}
MVSdoGeometry.prototype.getDimensions=function()
{
return parseInt(this.gtype/1000);
}
MVSdoGeometry.prototype.getFirstPoint=function()
{
if(!this.isPoint())return null;
var x1=[];
if(this.sdo_point!=null)
{
x1[0]=this.sdo_point.x;
x1[1]=this.sdo_point.y;
if(this.getDimensions()>2)x1[2]=this.sdo_point.z;
}
else
 {
for(var x2=0;x2<this.getDimensions();x2++)
x1[x2]=this.sdo_ordinates[x2];
}
return x1;
}
MVSdoGeometry.prototype.getLabelPoint=function()
{
if(this.sdo_point==null)return null;
return [this.sdo_point.x,this.sdo_point.y];
}
MVSdoGeometry.prototype.getLastPoint=function()
{
if(!this.isPoint())return null;
var x3=[];
if(this.sdo_point!=null)
{
x3[0]=this.sdo_point.x;
x3[1]=this.sdo_point.y;
if(this.getDimensions()>2)x3[2]=this.sdo_point.z;
}
else
 {
var x4=this.sdo_ordinates.length-this.getDimensions();
for(var x5=0;x5<this.getDimensions();x5++)
x3[x5]=this.sdo_ordinates[x4+x5];
}
return x3;
}
MVSdoGeometry.prototype.getMBR=function()
{
if(!this.mbr)
{
if(this.isPoint())
this.mbr=new Array(this.getPointX(),this.getPointY(),this.getPointX(),this.getPointY());
else
 {
if(this.sdo_ordinates)
{
var x6;var x7;var x8;var x9;
for(var x10=0;x10<this.sdo_ordinates.length;x10+=2)
{
if(!x6)
{
x6=this.sdo_ordinates[x10];
x8=x6;
x7=this.sdo_ordinates[x10+1];
x9=x7;
}
else
 {
if(this.sdo_ordinates[x10]<x6)
x6=this.sdo_ordinates[x10];
else if(this.sdo_ordinates[x10]>x8)
x8=this.sdo_ordinates[x10];
if(this.sdo_ordinates[x10+1]<x7)
x7=this.sdo_ordinates[x10+1];
else if(this.sdo_ordinates[x10+1]>x9)
x9=this.sdo_ordinates[x10+1];
}
}
this.mbr=new Array(x6,x7,x8,x9);
}
}
}
return this.mbr;
}
MVSdoGeometry.prototype.getNumPoints=function()
{
if(this.isPoint())return 1;
else return this.sdo_ordinates.length/this.getDimensions();
}
MVSdoGeometry.prototype.getOrdinates=function()
{
if(this.getGType()==1&&this.sdo_point)
return [this.sdo_point.x,this.sdo_point.y];
else
 return this.sdo_ordinates;
}
MVSdoGeometry.prototype.getOrdinatesOfElements=function()
{
var x11=[];
var x12=[];
if(this.sdo_elem_info.length==3)
{
x11[0]=this.sdo_ordinates;
}
else
 {
for(var x13=0;x13<(this.sdo_elem_info.length-3)/3;x13++)
{
var x14=this.sdo_elem_info[3*x13]-1;
var x15=this.sdo_elem_info[3*(x13+1)]-this.sdo_elem_info[3*x13];
for(var x16=0;x16<x15;x16++)
{
x12[x16]=this.sdo_ordinates[x14+x16];
}
x11[x13]=x12;
x12=[];
}
for(var x16=this.sdo_elem_info[this.sdo_elem_info.length-3]-1;x16<this.sdo_ordinates.length;x16++)
{
x12[x16-this.sdo_elem_info[this.sdo_elem_info.length-3]+1]=this.sdo_ordinates[x16];
}
x11[x13]=x12;
}
return x11;
}
MVSdoGeometry.prototype.getPoint=function()
{
if(!this.isPoint())return null;
return this.getFirstPoint();
}
MVSdoGeometry.prototype.getGType=function()
{
return parseInt(this.gtype%10);
}
MVSdoGeometry.prototype.setSrid=function(x17)
{
this.srid=x17;
}
MVSdoGeometry.prototype.isPoint=function()
{
return this.getGType()==1;
}
MVSdoGeometry.prototype.isCircle=function()
{
return this.sdo_elem_info&&this.sdo_elem_info.length==3&&
this.sdo_elem_info[0]==1&&this.sdo_elem_info[1]==1003&&this.sdo_elem_info[2]==4;
}
MVSdoGeometry.prototype.getPointX=function()
{
if(!this.isPoint())return null;
return this.getFirstPoint()[0];
}
MVSdoGeometry.prototype.getPointY=function()
{
if(!this.isPoint())return null;
return this.getFirstPoint()[1];
}
MVSdoGeometry.prototype.toString=function()
{
var x18="SdoGeometry(";
x18+=this.gtype+",";
x18+=this.srid+",";
x18+=this.sdo_point+",";
if(!this.isPoint()&&this.sdo_elem_info!=null)
x18+="("+this.sdo_elem_info+"),";
else
 x18+=",";
if(!this.isPoint()&&this.sdo_ordinates!=null)
x18+="("+this.sdo_ordinates+"))";
else
 x18+=")";
return x18;
}
MVSdoGeometry.prototype.array_equals=function(x19,x20)
{
if(x19==null&&x20==null)return true;
if(x19==null||x20==null)return false;
if(x19.length!=x20.length)return false;
for(var x21=0;x21<x19.length;x21++)
{
if(x19[x21]!=x20[x21])return false;
}
return true;
}
MVSdoGeometry.createPoint=function(x22,x23,x24)
{
if(!MVUtil.isNumber(x22))
{
MVi18n._f6("MVSdoGeometry.createPoint","MAPVIEWER-05527","x");
return null;
}
if(!MVUtil.isNumber(x23))
{
MVi18n._f6("MVSdoGeometry.createPoint","MAPVIEWER-05527","y");
return null;
}
return new MVSdoGeometry(2001,x24,null,null,new MVSdoPointType(x22,x23,null));
}
MVSdoGeometry.createLineString=function(x25,x26)
{
if(!MVUtil.isNumberArray(x25))
{
MVi18n._f6("MVSdoGeometry.createLineString","MAPVIEWER-05527","ordinatesArray");
return null;
}
return new MVSdoGeometry(2002,x26,[1,2,1],x25,null);
}
MVSdoGeometry.createPolygon=function(x27,x28)
{
if(!MVUtil.isNumberArray(x27))
{
MVi18n._f6("MVSdoGeometry.createPolygon","MAPVIEWER-05527","ordinatesArray");
return null;
}
if(x27.length<=2)
return null;
if(x27[0]!=x27[x27.length-2]&&
x27[1]!=x27[x27.length-1])
{
x27.push(x27[0]);
x27.push(x27[1]);
}
return new MVSdoGeometry(2003,x28,[1,1003,1],x27,null);
}
MVSdoGeometry.createRectangle=function(x29,x30,x31,x32,x33)
{
if(!MVUtil.isNumber(x29))
{
MVi18n._f6("MVSdoGeometry.createRectangle","MAPVIEWER-05527","minX");
return null;
}
if(!MVUtil.isNumber(x31))
{
MVi18n._f6("MVSdoGeometry.createRectangle","MAPVIEWER-05527","maxX");
return null;
}
if(!MVUtil.isNumber(x30))
{
MVi18n._f6("MVSdoGeometry.createRectangle","MAPVIEWER-05527","minY");
return null;
}
if(!MVUtil.isNumber(x32))
{
MVi18n._f6("MVSdoGeometry.createRectangle","MAPVIEWER-05527","maxY");
return null;
}
var x34;
if(x29>x31)
{
x34=x31;
x31=x29;
x29=x34;
}
if(x30>x32)
{
x34=x32;
x32=x30;
x30=x34;
}
return new MVSdoGeometry(2003,x33,[1,1003,1],[x29,x30,x29,x32,x31,x32,x31,x30,x29,x30],null);
}
MVSdoGeometry.createRectangleByGCD=function(x35,x36,x37,x38,x39)
{
if(!MVUtil.isNumber(x35))
{
MVi18n._f6("MVSdoGeometry.createRectangleByGCD","MAPVIEWER-05527","minLon");
return null;
}
if(!MVUtil.isNumber(x36))
{
MVi18n._f6("MVSdoGeometry.createRectangleByGCD","MAPVIEWER-05527","minLat");
return null;
}
if(!MVUtil.isNumber(x37))
{
MVi18n._f6("MVSdoGeometry.createRectangleByGCD","MAPVIEWER-05527","width");
return null;
}
if(!MVUtil.isNumber(x38))
{
MVi18n._f6("MVSdoGeometry.createRectangleByGCD","MAPVIEWER-05527","height");
return null;
}
if(!x39)
x39=8307;
var x40=_f375._f377(new MVSdoPointType(x35,x36,0),x38,0);
var x41=_f375._f377(new MVSdoPointType(x35,x36,0),x37,Math.PI/2);
var x42=x35;var x43=x36;var x44=x41.x;var x45=x40.y;
return new MVSdoGeometry(2003,x39,[1,1003,1],[x42,x43,x42,x45,x44,x45,x44,x43,x42,x43],null);
}
MVSdoGeometry.createCircle=function(x46,x47,x48,x49)
{
if(!MVUtil.isNumber(x46))
{
MVi18n._f6("MVSdoGeometry.createCircle","MAPVIEWER-05527","cx");
return null;
}
if(!MVUtil.isNumber(x47))
{
MVi18n._f6("MVSdoGeometry.createCircle","MAPVIEWER-05527","cy");
return null;
}
if(!MVUtil.isNumber(x48))
{
MVi18n._f6("MVSdoGeometry.createCircle","MAPVIEWER-05527","radius");
return null;
}
return new MVSdoGeometry(2003,x49,[1,1003,4],[x46+x48,x47,x46,x47+x48,x46-x48,x47],null);
}
MVSdoGeometry.createCirclePolygon=function(x50,x51,x52,x53)
{
if(!MVUtil.isNumber(x50))
{
MVi18n._f6("MVSdoGeometry.createCirclePolygon","MAPVIEWER-05527","cx");
return null;
}
if(!MVUtil.isNumber(x51))
{
MVi18n._f6("MVSdoGeometry.createCirclePolygon","MAPVIEWER-05527","cy");
return null;
}
if(!MVUtil.isNumber(x52))
{
MVi18n._f6("MVSdoGeometry.createCirclePolygon","MAPVIEWER-05527","radius");
return null;
}
if(!x53)
x53=8307;
var x54=new Array();
for(i=0;i<36;i++)
{
var x55=i*Math.PI/18;
x54[i*2]=x50+x52*Math.cos(x55);
x54[i*2+1]=x51+x52*Math.sin(x55);
}
x54[72]=x54[0];
x54[73]=x54[1];
return new MVSdoGeometry(2003,x53,[1,1003,1],x54,null);
}
MVSdoGeometry.createGeodeticCirclePolygon=function(x56,x57,x58,x59)
{
if(!MVUtil.isNumber(x56))
{
MVi18n._f6("MVSdoGeometry.createGeodeticCirclePolygon","MAPVIEWER-05527","longitude");
return null;
}
if(!MVUtil.isNumber(x57))
{
MVi18n._f6("MVSdoGeometry.createGeodeticCirclePolygon","MAPVIEWER-05527","latitude");
return null;
}
if(!MVUtil.isNumber(x58))
{
MVi18n._f6("MVSdoGeometry.createGeodeticCirclePolygon","MAPVIEWER-05527","radius");
return null;
}
if(!x59)
x59=8307;
var x60=new Array();
for(i=0;i<36;i++)
{
var x61=_f375._f377(new MVSdoPointType(x56,x57,0),x58,i*Math.PI/18);
x60[i*2]=x61.x;
x60[i*2+1]=x61.y;
}
x60[72]=x60[0];
x60[73]=x60[1];
return new MVSdoGeometry(2003,x59,[1,1003,1],x60,null);
}
MVSdoGeometry.createPointAtBearing=function(x62,x63,x64,x65,x66)
{
if(!MVUtil.isNumber(x62))
{
MVi18n._f6("MVSdoGeometry.createPointAtBearing","MAPVIEWER-05527","longitude");
return null;
}
if(!MVUtil.isNumber(x63))
{
MVi18n._f6("MVSdoGeometry.createPointAtBearing","MAPVIEWER-05527","latitude");
return null;
}
if(!MVUtil.isNumber(x64))
{
MVi18n._f6("MVSdoGeometry.createPointAtBearing","MAPVIEWER-05527","bearing");
return null;
}
if(!MVUtil.isNumber(x65))
{
MVi18n._f6("MVSdoGeometry.createPointAtBearing","MAPVIEWER-05527","distance");
return null;
}
if(!x66)
x66=8307;
var x67=_f375._f377(new MVSdoPointType(x62,x63,0),x65,x64);
return MVSdoGeometry.createPoint(x67.x,x67.y,x66);
}
MVSdoGeometry.prototype.getRequestURL=function(x68)
{
var x69=String(document.location);
if(!x68)
x68=_f65._f472();
return x68;
}
MVSdoGeometry.prototype.getLength=function(unit,_f410,foiURL,callBack,dataSource)
{
if(!dataSource)
dataSource=_f65._f473();
if(!this.srid)
{
var len=MVSdoGeometry.calcLength(this.sdo_ordinates);
if(callBack)
callBack(len);
return len;
}
var srs=_f65._f474(this.srid);
var clientTransFunc=null;
if(_f410)
clientTransFunc=_f65._f475(this.srid,8307);
if(!_f410||this.srid==8307||this.srid==8265||
_f410&&clientTransFunc)
{
if((srs||this.srid==8307||this.srid==8265||_f410&&clientTransFunc)&&
(this.gtype%10==2||this.gtype%10==3)&&
this.sdo_elem_info.length==3&&this.sdo_elem_info[0]==1&&
(this.sdo_elem_info[1]==2||this.sdo_elem_info[1]==1003||this.sdo_elem_info[1]==2003)&&
this.sdo_elem_info[2]==1)
{
var convFactor=0;
if(!unit||unit=="")
convFactor=1;
else
 {
convFactor=_f65._f476(unit);
if(srs&&srs.distConvFactor&&!_f410)
convFactor=convFactor/srs.distConvFactor;
}
var ordinates=this.sdo_ordinates;
if(clientTransFunc)
ordinates=MVMapView._f477(clientTransFunc,ordinates);
if(convFactor)
{
var len=0;
if(srs&&srs.type!='GEODETIC'&&!_f410)
len=MVSdoGeometry.calcLength(ordinates)/convFactor;
else
 len=_f375._f381(ordinates)/convFactor;
if(callBack)
callBack(len);
return len;
}
}
}
var request=null;
var _f478;
var _f479=MVUtil._f43(this.toString(),"null","");
if(this.gtype%10!=2&&this.gtype%10!=6&&this.gtype%10!=3&&this.gtype%10!=7)
{
MVi18n._f6("MVSdoGeometry.getLength","MAPVIEWER-05513");
return 0;
}
else
 {
_f479=MVUtil._f43(_f479," ","");
}
var _f480=this.getRequestURL(foiURL);
var localDomain=(_f480.indexOf(_f65._f116())<0&&
MVUtil.isLocalDomain(_f480));
var xmlHttp=localDomain||MVMapView._f117;
if(!xmlHttp&&!callBack)
{
MVi18n._f6("MVSdoGeometry.getLength","MAPVIEWER-05521");
return -1;
}
var requestStr="request=getlength&version=1.1&figord="+encodeURIComponent(_f479)+"";
if(unit)
{
requestStr=requestStr+"&unit="+unit;
}
if(_f410)
{
var trans=(_f410==true)?"yes":"no";
requestStr=requestStr+"&togeodetic="+trans;
}
if(dataSource)
requestStr=requestStr+"&datasource="+dataSource;
var request=null;
var respLoaded=function()
{
if(request.readyState==4)
{
if(request.status==200)
{
var resp=xmlHttp?request.responseText:this.responseText;
try
{
eval("var result="+resp);
_f478=result;
if(result.length==0)
{
result=null;
return;
}
result=null;
}
catch(e)
{
MVi18n._f6("MVSdoGeometry.getLength","MAPVIEWER-05523",resp+"\n"+e);
return ;
}
if(callBack)
callBack(_f478);
if(xmlHttp)
return _f478;
}
}
};
try
{
request=MVUtil.getXMLHttpRequest(xmlHttp);
if(callBack||!xmlHttp)
request.onreadystatechange=respLoaded;
request.open("POST",MVUtil._f119(_f480),callBack||!xmlHttp);
request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
request.send(MVUtil._f120(_f480,requestStr));
}catch(e)
{
MVi18n._f6("MVSdoGeometry.getLength","MAPVIEWER-05511",e);
}
if(!callBack&&xmlHttp)
{
if(request.status==200)
{
return respLoaded();
}
}
}
MVSdoGeometry.prototype.getArea=function(unit,_f410,foiURL,callBack,dataSource)
{
if(!dataSource)
dataSource=_f65._f473();
var request=null;
var _f478;
var _f479=MVUtil._f43(this.toString(),"null","");
if(this.gtype%10!=3&&this.gtype%10!=7)
{
MVi18n._f6("MVSdoGeometry.getArea","MAPVIEWER-05513");
return 0;
}
else
 {
_f479=MVUtil._f43(_f479," ","");
}
var _f480=this.getRequestURL(foiURL);
var localDomain=(_f480.indexOf(_f65._f116())<0&&
MVUtil.isLocalDomain(_f480));
var xmlHttp=localDomain||MVMapView._f117;
if(!xmlHttp&&!callBack)
{
MVi18n._f6("MVSdoGeometry.getArea","MAPVIEWER-05521")
return -1;
}
var requestStr="request=getarea&version=1.1&figord="+encodeURIComponent(_f479)+"";
if(unit)
{
requestStr=requestStr+"&unit="+unit;
}
if(_f410)
{
var trans=(_f410==true)?"yes":"no";
requestStr=requestStr+"&togeodetic="+trans;
}
if(dataSource)
requestStr=requestStr+"&datasource="+dataSource;
var request=null;
var respLoaded=function()
{
if(request.readyState==4)
{
if(request.status==200)
{
var resp=xmlHttp?request.responseText:this.responseText;
try
{
eval("var result="+resp);
_f478=result;
if(result.length==0)
{
result=null;
return;
}
result=null;
}
catch(e)
{
MVi18n._f6("MVSdoGeometry.getArea","MAPVIEWER-05523",resp+"\n"+e);
}
if(callBack)
callBack(_f478);
if(xmlHttp)
return _f478;
}
}
};
try
{
request=MVUtil.getXMLHttpRequest(xmlHttp);
if(callBack||!xmlHttp)
request.onreadystatechange=respLoaded;
request.open("POST",MVUtil._f119(_f480),callBack||!xmlHttp);
request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
request.send(MVUtil._f120(_f480,requestStr));
}catch(e)
{
MVi18n._f6("MVSdoGeometry.getArea","MAPVIEWER-05511",e);
}
if(!callBack&&xmlHttp)
{
if(request.status==200)
{
return respLoaded();
}
}
}
MVSdoGeometry.prototype.densify=function()
{
var x70=this.getGType();
if(x70<=1||x70==5)
return this;
var x71=_f65._f474(this.srid);
if(this.srid!=8307&&this.srid!=8265&&(!x71||x71.type!='GEODETIC'&&x71.type!='PROJECTED'))
return this;
if(!this.sdo_elem_info||this.sdo_elem_info.length<3||!this.sdo_ordinates)
return this;
var x72=this.sdo_point?this.sdo_point.clone():null;
var x73=this.sdo_elem_info.slice();
var x74=this.sdo_ordinates;
var x75=this.getComponents(x73,x74);
if(x75==null||x75.length<=0)
return null;
var x76=null;
var x77=1;
if(x71&&x71.type=='PROJECTED')
x77=100000*x71.distConvFactor;
for(var x78=0;x78<x75.length;x78++)
{
var x79=this.densifyComponent(x75[x78].elem_info,x75[x78].ordinates,x77);
if(x78==0)
x76=x79.ordinates;
else
 {
x73[x78*3]=x76.length+1;
x76=x76.concat(x79.ordinates);
}
}
return new MVSdoGeometry(this.gtype,this.srid,x73,x76,x72);
}
MVSdoGeometry.prototype.getComponents=function(x80,x81)
{
if(!x80||x80.length<3||!x81)
return {elem_info:x80,sdo_ordinates:x81};
var x82=new Array();
var x83=0;
for(var x84=0;x84<x80.length/3;x84++)
{
var x85=x81.length;
if(x84+1<x80.length/3)
x85=x80[(x84+1)*3]-1;
var x86=null;
if(x80[x84*3+1]%10==3&&x80[x84*3+2]==3)
{
x80[x84*3+2]=1;
var x86=new Array();
x86.push(x81[x83+0]);
x86.push(x81[x83+1]);
x86.push(x81[x83+0]);
x86.push(x81[x83+3]);
x86.push(x81[x83+2]);
x86.push(x81[x83+3]);
x86.push(x81[x83+2]);
x86.push(x81[x83+1]);
x86.push(x81[x83+0]);
x86.push(x81[x83+1]);
}
else
 x86=x81.slice(x83,x85);
var x87={elem_info:x80.slice(x84*3,x84*3+3),
ordinates:x86};
x82.push(x87);
x83=x85;
}
return x82;
}
MVSdoGeometry.prototype.densifyComponent=function(x88,x89,x90)
{
var x91=x88[1]%10;
var x92={elem_info:x88,ordinates:x89};
switch(x91)
{
case 0:
case 1:
break;
case 2:case 3:if(x88[2]==1)x92={elem_info:x88,ordinates:this.densifyOrdinates(x89,x90)};
break;
default:
break;
}
return x92;
}
MVSdoGeometry.prototype.densifyOrdinates=function(x93,x94)
{
if(!x93||x93.length<4)
return x93;
var x95=new Array();
for(var x96=0;x96<x93.length-2;x96+=2)
{
var x97=x93[x96];
var x98=x93[x96+1];
var x99=x93[x96+2];
var x100=x93[x96+3];
var x101=x99-x97;
var x102=x100-x98;
x95.push(x97);
x95.push(x98);
var x103=Math.ceil(Math.abs(x101)/x94);
if(x103>0)
{
x101=x101*1.0/x103;
x102=x102*1.0/x103;
for(var x104=0;x104<x103-1;x104++)
{
x97+=x101;
x98+=x102;
x95.push(x97);
x95.push(x98);
}
}
}
x95.push(x93[x93.length-2]);
x95.push(x93[x93.length-1]);
return x95;
}
MVSdoGeometry.prototype.toGML=function()
{
var x105=this.getGType();
var x106=""
switch(x105%10)
{
case 1:
x106=this._f481(this.getOrdinates());
break;
case 2:
x106=this._f482(this.getOrdinates());
break;
case 3:
if(this.sdo_elem_info[2]==4)
x106=this._f483(this.getOrdinates());
else
 x106=this._f484(this.getOrdinates());
break;
case 4:
break;
case 5:
x106=this._f481(this.getOrdinates());
break;
case 6:
x106=this._f485();
break;
case 7:
x106=this._f486();
break;
}
return x106;
}
MVSdoGeometry.prototype._f481=function(x107)
{
var x108=MVSdoGeometry._f487(x107);
var x109="<Point srsName=\"SDO:"+this.srid+"\" ><coordinates>";
x109=x109+x108+"</coordinates></Point>";
return x109;
}
MVSdoGeometry.prototype._f482=function(x110)
{
var x111=MVSdoGeometry._f487(x110);
var x112="<LineString srsName=\"SDO:"+this.srid+"\" ><coordinates>";
x112=x112+x111+"</coordinates></LineString>"
return x112;
}
MVSdoGeometry.prototype._f484=function(x113)
{
var x114=MVSdoGeometry._f487(x113);
var x115="<Polygon srsName=\"SDO:"+this.srid+"\" ><outerBoundaryIs><LinearRing><coordinates>";
x115=x115+x114+"</coordinates></LinearRing></outerBoundaryIs></Polygon>"
return x115;
}
MVSdoGeometry.prototype._f486=function()
{
var x116=this.getOrdinatesOfElements();
var x117="<MULTIPOLYGON srsName=\"SDO:"+this.srid+"\" >";
for(var x118=0;x118<x116.length;x118++)
{
x117=x117+"<polygonMember>";
x117=x117+this._f484(x116[x118]);
x117=x117+"</polygonMember>";
}
x117=x117+"</MULTIPOLYGON>";
return x117;
}
MVSdoGeometry.prototype._f485=function()
{
var x119=this.getOrdinatesOfElements();
var x120="<MultiLineString srsName=\"SDO:"+this.srid+"\" >";
for(var x121=0;x121<x119.length;x121++)
{
x120=x120+"<lineStringMember>";
x120=x120+this._f482(x119[x121]);
x120=x120+"</lineStringMember>";
}
x120=x120+"</MultiLineString>";
return x120;
}
MVSdoGeometry.prototype._f483=function(x122)
{
var x123=parseFloat(x122[2]);
var x124=parseFloat(x122[1]);
var x125=parseFloat(x122[0])-parseFloat(x122[2]);
var x126="";
var x127=2*Math.PI;
var x128=x123+x125*Math.cos((x127*0)/120);
for(var x129=1;x129<120;x129++)
{
if(x129%2==0)
{
x126=x123+x125*Math.cos((x127*x129)/120);
x128+=" "+x126;
}
else
 {
x126=x124+x125*Math.sin((x127*x129)/120);
x128+=","+x126;
}
}
var x130="<Polygon srsName=\"SDO:"+this.srid+"\" ><outerBoundaryIs><LinearRing><coordinates>";
x130+=x128+"</coordinates></LinearRing></outerBoundaryIs></Polygon>";
return x130;
}
MVSdoGeometry._f487=function(x131)
{
var x132=0;
var x133="";
for(;x132<x131.length;x132+=2)
{
if(x132>0)
x133+=" ";
x133+=x131[x132+0]+","+x131[x132+1];
}
return x133;
}
MVSdoGeometry.getDistance=function(x134,x135,x136,x137,x138,x139,x140,x141,x142)
{
if(!MVUtil.isNumber(x134))
{
MVi18n._f6("MVSdoGeometry.getDistance","MAPVIEWER-05527","x1");
return null;
}
if(!MVUtil.isNumber(x135))
{
MVi18n._f6("MVSdoGeometry.getDistance","MAPVIEWER-05527","y1");
return null;
}
if(!MVUtil.isNumber(x136))
{
MVi18n._f6("MVSdoGeometry.getDistance","MAPVIEWER-05527","x2");
return null;
}
if(!MVUtil.isNumber(x137))
{
MVi18n._f6("MVSdoGeometry.getDistance","MAPVIEWER-05527","y2");
return null;
}
var x143=new Array(x134,x135,x136,x137);
var x144=MVSdoGeometry.createLineString(x143,x138);
return x144.getLength(x139,x140,x141,x142);
}
MVSdoGeometry.calcLength=function(x145)
{
var x146=0,x147=2;
if(x145&&x145.length>3)
{
for(;x147<x145.length;x147+=2)
{
var x148=x145[x147]-x145[x147-2];
var x149=x145[x147+1]-x145[x147-1];
x146+=Math.sqrt(x148*x148+x149*x149);
}
return x146;
}
else
 return 0;
}
MVSdoGeometry.calcPolygonArea=function(x150,x151)
{
if(x150&&x150.length>=4)
{
var x152=0;
var x153=x150.length/2;
var x154;
for(x154=1;x154+1<x153;x154++)
{
var x155=x150[x154*2]-x150[0];
var x156=x150[x154*2+1]-x150[1];
var x157=x150[x154*2+2]-x150[0];
var x158=x150[x154*2+3]-x150[1];
var x159=x155*x158-x157*x156;
x152+=x159;
}
return Math.abs(x159/2.0);
}
else
 return 0;
}
function MVSdoPointType(x0,x1,x2)
{
if(!MVUtil.isNumber(x0))
MVi18n._f6("MVSdoPointType.constructor","MAPVIEWER-05527","x");
if(!MVUtil.isNumber(x1))
MVi18n._f6("MVSdoPointType.constructor","MAPVIEWER-05527","y");
this.x=x0;
this.y=x1;
this.z=x2;
}
MVSdoPointType.prototype.toString=function()
{
var x160="SdoPointType( ";
x160+=this.x+", ";
x160+=this.y+", ";
x160+=this.z+" )";
return x160;
}
MVSdoPointType.prototype.clone=function()
{
var x161=new MVSdoPointType(this.x,this.y,this.z);
}
function MVOverviewMap(x0,x1,x2)
{
if(x0&&!x0.style)
{
if(x1)
x2=x1;
x1=x0;
}
this.type="MVOverviewMap";
this._f213=true;
this._f212=x0?x0:null;
this._f214=null;
this._f215=x1?x1:4;
this._f216=null;
this.overviewMapTileLayer=x2;
this._f217=false;
this._f218=0;
this._f219=0;
this.coords=null;
this._f220=false;
this._f221=false;
this.borderStyle="2px solid red";
this.backgroundColor="red";
this._f222=null;
this._f223=null;
this._f224=null;
}
MVOverviewMap.prototype.init=function(x0,x1)
{
x1._f225=this;
if(x0)
this._f212=x0;
this._f212._f226=true;
this._f214=x1;
var x2=this._f214.getZoomLevel()-this._f215;
if(x2<0)
x2=0;
this._f216=new MVMapView(this._f212,this._f214._f4);
this._f216.isSubmap=true;
if(x1.wraparound)
this._f216.wraparound=true;
this._f216.enableLoadingIcon(false);
if(this._f223)
this._f216.setMouseCursorStyle(this._f223,"default");
if(this._f222)
this._f216.setMouseCursorStyle(this._f222,"dragging");
if(this.overviewMapTileLayer==null)
{
this.overviewMapTileLayer=this._f214._f227().clone();
}
this._f228=document.createElement("div");
this._f216._f229.appendChild(this._f228);
this._f228.style.zIndex=10000;
var x3=this;
var x4=function(x5,x6)
{
if(!x3._f221)
{
x3._f228.style.left=(parseInt(x3._f228.style.left)-x5)+"px";
x3._f228.style.top=(parseInt(x3._f228.style.top)-x6)+"px";
}
}
var x7=function(x8,x9)
{
var x10=x8-x9;
if(x9>x8&&x3._f214._f230)
{
x3._f216._f230=false;
x3._f214.setZoomLevel(MVOverviewMap._f231(x3._f214.getZoomLevel()-x10));
x3._f232();
}
else if(x9<x8&&x3._f214._f230)
{
x3._f216._f230=false;
if(x3._f214.getZoomLevel()-x8==x3._f215){
x3._f214.setZoomLevel(MVOverviewMap._f231(x3._f214.getZoomLevel()-x10));
}
else{
x3._f214.setZoomLevel(MVOverviewMap._f231(x8-x10+x3._f215));
}
x3._f232();
}
x3._f214._f230=true;
x3._f232();
}
var x11=function()
{
if(!x3._f221)
{
x3._f220=true;
x3._f214.setCenter(x3._f216.getCenter());
x3._f232();
}
x3._f221=false;
}
this._f216.setEventListener(MVEvent.RECENTER,x11);
this._f216.addEventListener(MVEvent.ZOOM_LEVEL_CHANGE,x7);
var x12=function()
{
var x13=x3._f214.getCenter();
x3._f216.setCenter(x13);
x3._f216.setZoomLevel(MVOverviewMap._f231(x2));
x3._f216._f226=true;
function setRectangle()
{
x3._f232();
}
x3._f216.setEventListener(MVEvent.INITIALIZE,setRectangle);
x3._f216.display();
}
var x14=this.overviewMapTileLayer;
if(x14.getType&&x14.getType()=='MVExternalAPIMapTileLayer')
{
if(x14.hideCopyRights)
x14.initializeListener=function(){x14.hideCopyRights();};
}
this._f216.addMapTileLayer(this.overviewMapTileLayer,x12);
}
MVOverviewMap.prototype.addOverviewMapTileLayer=function()
{
this.overviewMapTileLayer=this._f214._f227().clone();
this._f216.addMapTileLayer(this.overviewMapTileLayer);
}
MVOverviewMap.prototype._f233=function()
{
this._f170();
}
MVOverviewMap.prototype._f170=function()
{
if(this._f214)
this._f214._f225=null;
if(this._f216)
this._f216._f170();
MVUtil._f201(this._f212,this._f214?this._f214._f7:null);
this._f216=null;
}
MVOverviewMap.prototype._f232=function()
{
var x15=this._f214.getMapWindowBBox();
var x16=this._f216.getMapWindowBBox();
var x17=this;
var x18=function(x19)
{
var x20=x19.getMBR();
var x21=x16.getMBR();
x17.xRatio=(x20[2]-x20[0])/(x21[2]-x21[0]);
x17.yRatio=(x20[3]-x20[1])/(x21[3]-x21[1]);
var x22=x17.xRatio*x17._f216._f106();
var x23=x17.yRatio*x17._f216._f107();
x17._f228.style.position="absolute";
x17._f228.style.overflow="hidden";
x17._f228.style.zIndex=10000
x17._f228.style.left=((x17._f216._f106()-x22)/2)+"px";
x17._f228.style.top=((x17._f216._f107()-x23)/2)+"px";
x17._f228.style.width=x22+"px";
x17._f228.style.height=x23+"px";
x17._f228.style.border=x17.borderStyle;
if(_f65._f66=='NS')
x17._f228.innerHTML="<div  style='width: "+x22+"px; height: "+x23
+"px;opacity: 0.3;background-color:"+x17.backgroundColor+";'></div>";
else if(_f65._f66=='SF')
x17._f228.innerHTML="<div  style='width: "+x22+"px; height: "+x23
+"px;opacity: 0.3;background-color:"+x17.backgroundColor+";'></div>";
else if(_f65._f66=='IF')
x17._f228.innerHTML="<div  style='width: "+x22+"px; height: "+x23
+"px;filter:alpha(opacity=30);background-color:"+x17.backgroundColor+";'></div>";
if(x22>x17._f216._f106()||x23>x17._f216._f107())
x17._f228.style.visibility="hidden";
else
 x17._f228.style.visibility=x17._f216._f229.style.visibility;
MVUtil.attachEvent(x17._f228,"mousedown",MVUtil._f103(x17._f228,function(x24){
var x25=x17._f214.getCenter();
x24=(x24)?x24:((window.event)?event:null);
if(x24.button==2)
{
return;
}
x17.coords=x17._f216._f234(x24)
x17._f217=true;
MVUtil._f175(x24);
x17._f218=0;
x17._f219=0;
}),true);
MVUtil.attachEvent(x17._f228,"mouseup",MVUtil._f103(x17._f228,function(x26)
{
if(x17._f217)
{
x26=(x26)?x26:((window.event)?event:null);
x17._f217=false;
x26.cancelBubble=true;
x17._f228._f235();
}
}),true);
x17._f228._f235=MVUtil._f103(x17._f228,function()
{
x17._f217=false;
var x27=parseInt(this.style.left)+parseInt(this.style.width)/2;
var x28=parseInt(this.style.top)+parseInt(this.style.height)/2;
var x29=x17._f216;
var x30=x27-x29._f106()/2;
x30=x30/x29._f72;
var x31=x28-x29._f107()/2;
x31=x31/x29._f74;
var x32=x17._f216._f236()+x30;
var x33=x17._f216._f237()-x31;
var x34=MVSdoGeometry.createPoint(x32,x33,x17._f216.srid);
x17._f216.setCenter(x34);
})
if(!x17._f224)
MVUtil.detachEvent(window.document,"mouseup",x17._f224);
x17._f224=MVUtil._f103(window.document,function(x35)
{
if(x17._f217){
x17._f217=false;
x17._f228._f235();
}
});
MVUtil.attachEvent(window.document,"mouseup",x17._f224);
MVUtil.attachEvent(x17._f228,"mousemove",MVUtil._f103(x17._f228,function(x36)
{
x36=(x36)?x36:((window.event)?event:null);
if(x17._f217)
{
var x37=x17._f216._f234(x36);
x=x37.left-x17.coords.left;
y=x37.top-x17.coords.top;
x17.coords=x37;
this.style.left=(parseInt(this.style.left)+x)+"px";
this.style.top=(parseInt(this.style.top)+y)+"px";
x36.cancelBubble=true;
}
}),true);
}
if(x15.srid!=x16.srid)
{
this._f214.transformGeom(x15,x16.srid,null,x18);
}
else
 x18(x15);
}
MVOverviewMap.prototype._f238=function(x38,x39)
{
if(this.xRatio==undefined)
return ;
var x40=Math.floor(this.xRatio*x38*(this._f216._f106()/this._f214._f106()));
var x41=Math.floor(this.yRatio*x39*(this._f216._f107()/this._f214._f107()));
if(x40>=0)
x40=Math.floor(x40);
else
 x40=Math.ceil(x40);
if(x41>=0)
x41=Math.floor(x41);
else
 x41=Math.ceil(x41);
if(!this._f220)
{
this._f221=true;
this._f228.style.left=(parseInt(this._f228.style.left)+x40)+"px";
this._f228.style.top=(parseInt(this._f228.style.top)+x41)+"px";
}
}
MVOverviewMap.prototype._f239=function()
{
if(!this._f220)
{
this._f221=true;
this._f216.setCenter(this._f214.getCenter());
this._f232();
}
this._f220=false;
}
MVOverviewMap.prototype._f240=function(x42,x43,x44)
{
var x45=x42-x43;
if(x43>=x42&&this._f216._f230)
{
this._f214._f230=false;
if(x42-this._f216.getZoomLevel()==this._f215){
if(x44)
this._f216.setCenterAndZoomLevel(x44,MVOverviewMap._f231(this._f216.getZoomLevel()-x45));
else
 this._f216.setZoomLevel(MVOverviewMap._f231(this._f216.getZoomLevel()-x45));
}
else {
if(x44)
this._f216.setCenterAndZoomLevel(x44,MVOverviewMap._f231(x42-x45-this._f215));
else
 this._f216.setZoomLevel(MVOverviewMap._f231(x42-x45-this._f215));
}
}
else if(x43<x42&&this._f216._f230)
{
this._f214._f230=false;
if(x44)
this._f216.setCenterAndZoomLevel(x44,MVOverviewMap._f231(this._f216.getZoomLevel()-x45));
else
 this._f216.setZoomLevel(MVOverviewMap._f231(this._f216.getZoomLevel()-x45));
}
this._f216._f230=true;
}
MVOverviewMap.prototype.setRectangleStyle=function(x46,x47)
{
this.borderStyle=x46;
this.backgroundColor=x47;
}
MVOverviewMap.prototype.setMouseCursorStyle=function(x48,x49)
{
if(x49=="dragging")
this._f222=x48;
else if(x49=="default")
{
this._f223=x48;
MVUtil._f162(this._f229,x48);
}
}
MVOverviewMap._f231=function(x50)
{
if(!x50||x50<0)
return 0;
else
 return x50;
}
MVOverviewMap.prototype.getMapConfig=function()
{
if(!this.overviewMapTileLayer.config)
MVi18n._f6("MVOverviewMap.getMapConfig","MAPVIEWER-05526");
else
 return this.overviewMapTileLayer.config;
}
MVOverviewMap.prototype.getZoomLevel=function()
{
return this._f216.getZoomLevel();
}
function MVInfoWindowStyle1()
{
}
MVInfoWindowStyle1._f883=null;
MVInfoWindowStyle1.closeButtonImgURL=null;
MVInfoWindowStyle1._f936=function(x0)
{
if(x0&&x0.hideCloseButton)
this.hideCloseButton=true;
else
 this.hideCloseButton=false;
if(x0&&x0.closeButtonImageURL)
{
if(!this._f937||
this._f937!=x0.closeButtonImageURL)
{
this.closeButtonWidth=null;
this.closeButtonHeight=null;
}
this._f937=x0.closeButtonImageURL;
if(x0.closeButtonWidth)
this.closeButtonWidth=x0.closeButtonWidth;
if(x0.closeButtonHeight)
this.closeButtonHeight=x0.closeButtonHeight;
}
else
 {
if(!this._f937||
this._f937!=MVInfoWindowStyle1.closeButtonImgURL)
{
this.closeButtonWidth=null;
this.closeButtonHeight=null;
}
this._f937=MVInfoWindowStyle1.closeButtonImgURL;
this.closeButtonWidth=_f65._f623-2;
this.closeButtonHeight=_f65._f623-2;
}
if(x0&&x0.bodyStyle)
this._f938=x0.bodyStyle;
else
 this._f938="border:1px;border-color:#8794A3;background-color:#FFFFFF";
if(x0&&x0.titleBarStyle)
this._f939=x0.titleBarStyle;
else
 this._f939="background-color:#CFDCEB;font-weight:bold";
if(x0&&x0.coneStyle)
{
this._f940=x0.coneStyle;
var x1=x0.coneStyle.split(/;|:/);
if(x1)
{
for(i=0;i<x1.length;i++)
if(x1[i].indexOf("opacity")>=0&&i<x1.length)
{
this._f941=parseInt(x1[i+1]);
break;
}
}
}
else
 {
this._f940="background-color:#99CC33;opacity:30";
this._f941=30;
}
if(x0&&x0.offset)
MVInfoWindowStyle1._f459=x0.offset;
else
 MVInfoWindowStyle1._f459=20;
if(x0&&x0.activeTab)
this.style_activeTab=x0.activeTab;
else
 this.style_activeTab="background-color:#FFFFFF;font-weight:bold";
if(x0&&x0.inactiveTab)
this.style_inactiveTab=x0.inactiveTab;
else
 this.style_inactiveTab="background-color:#CFDCEB;font-weight:bold";
if(x0&&x0.tabBorder)
this.style_tabBorder=x0.tabBorder;
else
 this.style_tabBorder="1px solid #8794A3";
if(x0&&x0.contentStyle)
this.style_contentStyle=x0.contentStyle;
else
 this.style_contentStyle="padding:5px";
}
MVInfoWindowStyle1.init=function(x2)
{
if(!MVInfoWindowStyle1.closeButtonImgURL)
MVInfoWindowStyle1.closeButtonImgURL=_f65._f141+"infoicons/closeDialog_n.png";
if(x2)
MVInfoWindowStyle1._f936(x2);
else
 MVInfoWindowStyle1._f936(MVInfoWindowStyle1._f883);
MVInfoWindowStyle1._f315=null;
MVInfoWindowStyle1._f316=null;
MVInfoWindowStyle1._f311=null;
this._f942=null;
this._f943=null;
this.x=null;
this.y=null;
this._f944="";
this._f945=null;
this._f946=null;
}
MVInfoWindowStyle1.createWindow=function(x3,x4,x5,x6,x7,x8)
{
this.x=x3;
this.y=x4;
var x9=document.createElement("div");
var x10=document.createElement("table");
x10.id="infowindow3table_"+x8;
x10.style.cssText=this._f938;
x10.style.borderStyle="solid";
x10.style.cellSpacing="0px";
x10.style.borderSpacing="0px";
if(_f65._f66=='IF')
x10.style.borderCollapse="collapse";
x10.style.padding="0px";
if(!x10.style.width||x10.style.width==""||
x10.style.width=="0"||x10.style.width=="0px")
{
if(x5)
x10.style.width=MVUtil._f26(x5);
else
 x10.style.width=MVUtil._f26(_f65._f315);
}
if(!x10.style.height||x10.style.height==""||
x10.style.height=="0"||x10.style.height=="0px")
{
if(x6)
x10.style.height=MVUtil._f26(x6);
else
 x10.style.height=MVUtil._f26(_f65._f316);
}
var x11=document.createElement("tbody");
x10.appendChild(x11);
var x12=document.createElement("tr");
this.titleRow=x12;
x12.style.border="0px";
x12.style.padding="0px";
x12.style.height=MVUtil._f26(10);
x11.appendChild(x12);
this._f946=new Array();
var x13=this;
var x14=function(){
MVInfoWindowStyle1.pauseRedraw=true;
var x15=this.number;
var x16=x13._f946.length;
if(x15==x13.active)
{
MVInfoWindowStyle1.pauseRedraw=false;
return;
}
var x17=document.getElementById("infowindow3table_"+x8)
var x18=x17.childNodes[0];
if(x18.childNodes.length>1)
x18.removeChild(x18.childNodes[1]);
x18.appendChild(x13._f943[x15]);
x13._f946[x13.active].style.cssText=x13.style_inactiveTab;
x13._f946[x13.active].style.height=MVUtil._f26(10);x13._f946[x13.active].style.width=((100-10)/x16)+"%";
x13._f946[x13.active].style.borderBottom=x13.style_tabBorder;
x13._f946[x13.active].style.cursor="pointer";
if(x13.active+1==x13._f946.length)
x13._f946[x13.active].style.borderRight="none";
else
 x13._f946[x13.active].style.borderRight=x13.style_tabBorder;
x13._f946[x15].style.cssText=x13.style_activeTab;
x13._f946[x15].style.height=MVUtil._f26(10);x13._f946[x15].style.width=((100-10)/x16)+"%";
x13._f946[x15].style.borderBottom="none";
x13._f946[x15].style.borderRight=x13.style_tabBorder;
x13._f946[x15].style.cursor="default";
if(x15+1==x13._f946.length){
x13._f946[x15].style.borderRight=x13.style_tabBorder;
}
x13.active=x15;
MVInfoWindowStyle1.pauseRedraw=false;
MVInfoWindowStyle1._f315=x17.offsetWidth;MVInfoWindowStyle1._f316=x17.offsetHeight;x17.style.height=x17.offsetHeight}
for(var x19=0;x19<x7;x19++){
var x20=document.createElement("TD");
x20.align="center";
x20.number=x19;
this._f946.push(x20);
x12.appendChild(x20);
x20.onclick=MVUtil._f103(x20,x14);
}
var x21=document.createElement("TD");
x21.style.width="10%";
x21.align="right";
x21.vAlign="top";
x21.style.padding="2px";
x12.appendChild(x21);
this._f945=x21;
this._f943=new Array();
for(var x19=0;x19<x7;x19++){var x22=document.createElement("tr");
x12.style.border="0px";
x12.style.padding="0px";
x11.appendChild(x22);
var x23=document.createElement("td");
x23.colSpan=x7+1;
x23.style.cssText=this.style_contentStyle;
x22.appendChild(x23);
this._f943.push(x22);
}
x10.style.left=MVUtil._f26(x3-MVInfoWindowStyle1._f459);
x10.style.top=MVUtil._f26(x4+MVInfoWindowStyle1._f459);
x10.style.position='absolute';
x10.style.zIndex=200;
return x10;
}
MVInfoWindowStyle1.addCloseButton=function(x24)
{
if(this.hideCloseButton)
return ;
var x25=document.createElement("img");
x25.src=this._f937;
x25.style.cursor='pointer';
if(this.closeButtonWidth)
{
x25.width=this.closeButtonWidth;
x25.style.width=this.closeButtonWidth;
}
if(this.closeButtonHeight)
{
x25.height=this.closeButtonHeight;
x25.style.height=this.closeButtonHeight;
}
if(!this.closeButtonWidth&&!this.closeButtonHeight)
x25.onload=MVInfoWindowStyle1.setCloseButtonSize;
x25.onclick=x24;
this._f945.appendChild(x25);
}
MVInfoWindowStyle1.addContent=function(x26,x27)
{
var x28=true;
for(var x29=0;x29<x27.length;x29++){
var x30=this._f943[x29].childNodes[0];
var x26=this._f943[x29];
x26.removeChild(x30);
x30.innerHTML=x27[x29].getContent();
if(x26.childNodes.length>0)
x26.insertBefore(x30,x26.childNodes[0]);
else
 x26.appendChild(x30);
var x31=x27[x29].getTitle();
if(!x31)
x31="&nbsp;";
else
 x28=false;
x26=this._f946[x29].parentNode;
x26.removeChild(this._f946[x29]);
this._f946[x29].innerHTML=x31;
if(x26.childNodes.length>0)
x26.insertBefore(this._f946[x29],x26.childNodes[0]);
else
 x26.appendChild(this._f946[x29]);
}
if(x28&&this.hideCloseButton)
{
this.titleRow.parentNode.removeChild(this.titleRow);
MVUtil._f201(this.titleRow);
this.titleRow=null;
}
}
MVInfoWindowStyle1.setTitleStyle=function(x32,x33)
{
var x34=this._f946[0].parentNode;
var x35=this._f946.length;
if(x35>1){
x34.style.cssText=this._f939;
x34.style.border="0px none";
x34.style.padding="0px";
x34.style.height=MVUtil._f26(10);
for(var x36=0;x36<x35;x36++){
if(x36==x33){
this._f946[x36].style.cssText=this.style_activeTab;
}
else{
this._f946[x36].style.cssText=this.style_inactiveTab;
this._f946[x36].style.borderBottom=this.style_tabBorder;
this._f946[x36].style.cursor="pointer";
}
this._f946[x36].style.height=MVUtil._f26(10);this._f946[x36].style.width=((100-10)/x35)+"%";
if(x36+1!=x35||x36==x33){
this._f946[x36].style.borderRight=this.style_tabBorder;
}
}
this._f945.style.borderBottom=this.style_tabBorder;
this._f945.style.borderTop="none";
}
else if(x32[0].getTitle()){
x34.style.cssText=this._f939;
x34.style.border="0px none";
x34.style.padding="0px";
x34.style.height=MVUtil._f26(10);
}
}
MVInfoWindowStyle1._f460=function(x37,x38)
{
MVInfoWindowStyle1._f947(x37,this.x,this.y,x38);
}
MVInfoWindowStyle1._f947=function(x39,x40,x41,x42)
{
if(this._f941==0)
return ;
var x43=document.getElementById("infowindow3table_"+x42);
var x44=x43.style.zIndex-1;
var x45=x43.offsetLeft;
var x46=x43.offsetTop;
x45-=x40;
x46-=x41;
var x47=1;
var x48=1;
var x49=x43.offsetWidth;
var x50=x43.offsetHeight;
MVInfoWindowStyle1._f315=x49;
MVInfoWindowStyle1._f316=x50;
var x51=0;
var x52=50;
var x53=260;
var x54=340;
var x55=50;if(this._f942)
{
MVUtil._f201(this._f942);
this._f942.parentNode.removeChild(this._f942);
}
var x56=document.createElement("DIV");
x56.id=x43.id+'cones';
x56.style.position='absolute';
x56.style.left=x40+'px';
x56.style.top=x41+'px';
x56.style.border='0px solid #000000';
x56.style.zIndex=x44;
this._f942=x56;
x39.appendChild(x56);
zcounter=0;
var x57=x55;this._f944=Math.round((this._f941/x55)*7);
var x58=Math.abs(x45/x55);
var x59=Math.abs(x46/x55);
var x60=Math.abs(x58/x59);
var x61=0;
for(var x62=0;x62<x55;x62++)
{
var x63=((x45*1.0/x55)*x62);var x64=((x46*1.0/x55)*x62);x53=x47+Math.abs(((x49-x47)/x55*x62));x54=x48+Math.abs(((x50-x48)/x55*x62));
var x65=document.createElement("DIV");
x65.id=x43.id+'D'+x62;
x65.style.cssText=this._f940;
x65.style.position='absolute';
MVUtil._f705(x65,x63,x64,x53,x54);
x65.style.border='0px solid black';
x65.style.fontSize="1px";
x65.style.lineHeight=0;
x56.appendChild(x65);
MVInfoWindowStyle1._f948(x65);
x65.style.zIndex=zcounter;
zcounter++;
x61++;
x57-=x62;
}
coneDone=true;
}
MVInfoWindowStyle1._f948=function(x66)
{
if(_f65._f66=="IF"){
x66.style.opacity=0.05;
x66.style.filter='alpha(opacity = '+this._f944+')';
}else if(_f65._f66=="SF"){
var x67=this._f944/100;
x66.style.opacity=x67;
}else{
var x67=this._f944/100;
x66.style.MozOpacity=x67;
}
}
MVInfoWindowStyle1.sizeChanged=function(x68)
{
var x69=document.getElementById("infowindow3table_"+x68);
if(MVInfoWindowStyle1.pauseRedraw||(x69&&
MVInfoWindowStyle1._f315&&
Math.abs(MVInfoWindowStyle1._f315-x69.offsetWidth)<5&&
MVInfoWindowStyle1._f316&&
Math.abs(MVInfoWindowStyle1._f316-x69.offsetHeight)<5))
return false;
else
 return true;
}
MVInfoWindowStyle1.getWindowSize=function(x70,x71,x72)
{
var x73=document.getElementById("infowindow3table_"+x72);
if(x73)
{
var x74=x73.offsetWidth;
if(x74>(x70?x70:_f65._f315))
x73.style.width=MVUtil._f26(x74);
var x75=0;
var x76=this._f943[0].offsetHeight;
for(var x77=1;x77<this._f943.length;x77++){
if(this._f943[x75].offsetHeight<this._f943[x77].offsetHeight)
x75=x77;
x76+=this._f943[x77].offsetHeight;
}
var x78=x73.offsetHeight-x76+this._f943[x75].offsetHeight;
if(x78>(x71?x71:_f65._f316))
x73.style.height=MVUtil._f26(x78);
}
}
MVInfoWindowStyle1.setCloseButtonSize=function()
{
if(this.closeButtonWidth||!this._f945||!this._f945.firstChild)
return ;
this.closeButtonWidth=this._f945.firstChild.offsetWidth;
this.closeButtonHeight=this._f945.firstChild.offsetHeight;
}
MVInfoWindowStyle1.clear=function()
{
if(this._f942)
MVUtil._f201(this._f942);
this._f942=null;
if(this._f943)
MVUtil._f201(this._f943);
this._f943=null;
if(this._f945)
MVUtil._f201(this._f945);
this._f945=null;
if(this.titleRow)
MVUtil._f201(this.titleRow);
this.titleRow=null;
if(this._f946)
{
for(var x79=0;x79<this._f946.length;x79++)
this._f946[x79]=null;
}
this._f946=null;
}
MVInfoWindowStyle1.removeInActiveTabs=function(x80,x81)
{
var x82=document.getElementById("infowindow3table_"+x81);
var x83=this._f943.length;
if(x83>1){
for(var x84=0;x84<x83;x84++)
if(x84!=x80)
this._f943[x84].parentNode.removeChild(this._f943[x84]);
}
this.active=x80;
}
function MVInfoWindowStyle2()
{
}
MVInfoWindowStyle2.init=function()
{
this.window=null;
this._f389=null;
this.iw=_f65._f141+"/infoicons/";
this.iw_arrow=this.iw+"arrow_circle.gif";
this.iw_h=this.iw+"h.gif";
this.iw_v=this.iw+"v.gif";
this.iw_c=this.iw+"iw_c.gif";
this.iw_c1=this.iw+"iw_n.gif";
this.iw_c2=this.iw+"iw_s.gif";
this.iw_nw=this.iw+"tl.gif";
this.iw_sw=this.iw+"bl.gif";
this.iw_ne=this.iw+"tr.gif";
this.iw_se=this.iw+"br.gif";
this.closeImg=this.iw+"close_circle.gif";
this.cornerwidth=25;
this.cornerheight=25;
this.arrowwidth=41;
this.arrowheight=40;
this.arrowendheight=20;
}
MVInfoWindowStyle2.createWindow=function(x0,x1,x2,x3)
{
this.window=new Object();
this.window.arrow=_f301(this.iw_arrow,this.arrowwidth+2,this.arrowheight,1,7,0);
this.window.e=_f301(this.iw_v,1,x3+1-this.cornerheight*2,x2+this.arrowwidth,this.cornerheight,0);
this.window.w=_f301(this.iw_v,1,x3-this.cornerheight*2-20,this.arrowwidth,this.arrowendheight+this.cornerheight,0);
this.window.wu=_f301(this.iw_nw,this.cornerwidth,this.cornerheight,this.arrowwidth,0,0);
this.window.wd=_f301(this.iw_sw,this.cornerwidth,25,this.arrowwidth,x3+1-this.cornerheight,0);
this.window.eu=_f301(this.iw_ne,this.cornerwidth,this.cornerheight,x2+this.arrowwidth+1-this.cornerwidth,0,0);
this.window.ed=_f301(this.iw_se,this.cornerwidth,25,x2+this.arrowwidth+1-this.cornerwidth,x3+1-this.cornerheight,0);
this.window.c=_f301(this.iw_c,x2-1,x3+1-this.cornerheight*2,this.arrowwidth+1,this.cornerheight,0);
this.window.cu=_f301(this.iw_c1,x2+1-this.cornerwidth*2,this.cornerheight,this.arrowwidth+this.cornerwidth,0,0);
this.window.cd=_f301(this.iw_c2,x2+1-this.cornerwidth*2,25,this.arrowwidth+this.cornerwidth,x3-this.cornerheight+1,0);
this._f389=window.document.createElement("div");
this._f389.style.position="relative";
this._f389.style.left=MVUtil._f26(x0-1);
this._f389.style.top=MVUtil._f26(x1+2);
this._f389.appendChild(this.window.e);
this._f389.appendChild(this.window.wu);
this._f389.appendChild(this.window.w);
this._f389.appendChild(this.window.cu);
this._f389.appendChild(this.window.c);
this._f389.appendChild(this.window.cd);
this._f389.appendChild(this.window.wd);
this._f389.appendChild(this.window.ed);
this._f389.appendChild(this.window.eu);
this._f389.appendChild(this.window.arrow);
this.width=x2;
return this._f389;
}
MVInfoWindowStyle2.addCloseButton=function(x4)
{
this.closeButton=_f301(this.closeImg,16,16,this.width+10,10,4);
this.closeButton.style.position="absolute";
this.closeButton.onclick=MVUtil._f103(this.closeButton,
function(){x4();});
MVUtil._f162(this.closeButton,"pointer");
this._f389.appendChild(this.closeButton);
}
MVInfoWindowStyle2.addContent=function(x5)
{
x5.style.left=MVUtil._f26(55);
x5.style.top=MVUtil._f26(17);
this._f389.appendChild(x5);
}
MVInfoWindowStyle2.getWindow=function()
{
return this._f389;
}
function MVInfoWindowStyle3()
{
}
MVInfoWindowStyle3.init=function()
{
this.window=null;
this._f389=null;
this.iw=_f65._f141+"/infoicons/";
this.iw_arrow=this.iw+"arrow.gif";
this.iw_h=this.iw+"hline.gif";
this.iw_v=this.iw+"vline.gif";
this.iw_c=this.iw+"iw_c.gif";
this.closeImg=this.iw+"close.gif";
this._f390=600;
this._f391=600;
this._f392=30;
this._f393=16;
this._f394=600;
this._f395=1;
this._f396=1;
this._f397=600;
this._f398=1;
this._f399=10;
}
MVInfoWindowStyle3.createWindow=function(x0,x1,x2,x3)
{
this.window=new Object();
this.window.arrow=_f301(this.iw_arrow,this._f392,this._f393,1,this._f399,0);
this.window.n=_f301(this.iw_h,x2+1,1,this._f392+1,0,0);
this.window.s=_f301(this.iw_h,x2+1,1,this._f392+1,x3+1,0);
this.window.e=_f301(this.iw_v,1,x3+1,x2+this._f392+1,1,0);
this.window.wu=_f301(this.iw_v,1,this._f399,this._f392,0,0);
this.window.wd=_f301(this.iw_v,1,x3-this._f393-this._f399+2,this._f392+1,this._f393+this._f399,0);
this.window.c=_f301(this.iw_c,x2,x3,this._f392+1,1,0);
this._f389=window.document.createElement("div");
this._f389=window.document.createElement("div");
this._f389.style.position="relative";
this._f389.style.left=MVUtil._f26(x0);
this._f389.style.top=MVUtil._f26(x1);
this._f389.appendChild(this.window.n);
this._f389.appendChild(this.window.s);
this._f389.appendChild(this.window.e);
this._f389.appendChild(this.window.wu);
this._f389.appendChild(this.window.c);
this._f389.appendChild(this.window.wd);
this._f389.appendChild(this.window.arrow);
this.width=x2;
return this._f389;
}
MVInfoWindowStyle3.addCloseButton=function(x4)
{
this.closeButton=_f301(this.closeImg,15,15,this.width-1,10,4);
this.closeButton.style.position="absolute";
MVUtil._f162(this.closeButton,"pointer");
this._f389.appendChild(this.closeButton);
this.closeButton.onclick=MVUtil._f103(this.closeButton,
function(){x4();});
}
MVInfoWindowStyle3.addContent=function(x5)
{
x5.style.left=MVUtil._f26(50);
x5.style.top=MVUtil._f26(25);
this._f389.appendChild(x5);
}
function MVInfoWindowStyle4()
{
}
MVInfoWindowStyle4._f883=null;
MVInfoWindowStyle4.closeButtonImgURL=null;
MVInfoWindowStyle4._f315=new Object();
MVInfoWindowStyle4._f316=new Object();
MVInfoWindowStyle4._f311=new Object();
MVInfoWindowStyle4.pageDirection=null;
MVInfoWindowStyle4.TotalMarginHeight=20;
MVInfoWindowStyle4.MultiFeatureListTotalMarginWidth=15;
MVInfoWindowStyle4._f936=function(x0)
{
if(x0&&x0.hideCloseButton)
this.hideCloseButton=true;
else
 this.hideCloseButton=false;
if(x0&&x0.coneStyle)
{
this._f940=x0.coneStyle;
var x1=x0.coneStyle.split(/;|:/);
if(x1)
{
for(i=0;i<x1.length;i++)
if(x1[i].indexOf("opacity")>=0&&i<x1.length)
{
this._f941=parseInt(x1[i+1]);
break;
}
}
}
else
 {
this._f940="background-color:#a0a0a0;opacity:30";
this._f941=30;
}
if(x0&&x0.offset)
MVInfoWindowStyle4._f459=x0.offset;
else
 MVInfoWindowStyle4._f459=20;
if(x0&&x0.tabStyle!=undefined&&x0.tabStyle.toLowerCase()=="f")
this.tabStyle="f";
else
 this.tabStyle="p";
}
MVInfoWindowStyle4.init=function(x2)
{
MVInfoWindowStyle4.windowHeaderLeft=_f65._f141+"infoicons/dialog-header-left.png";
MVInfoWindowStyle4.windowHeaderMiddle=_f65._f141+"infoicons/dialog-header-middle.png";
MVInfoWindowStyle4.windowHeaderRight=_f65._f141+"infoicons/dialog-header-right.png";
MVInfoWindowStyle4.windowFooterLeft=_f65._f141+"infoicons/dialog-footer-left.png";
MVInfoWindowStyle4.windowFooterMiddle=_f65._f141+"infoicons/dialog-footer-middle.png";
MVInfoWindowStyle4.windowFooterRight=_f65._f141+"infoicons/dialog-footer-right.png";
MVInfoWindowStyle4.windowTabsHeaderLeft=_f65._f141+"infoicons/dialog-tabs-header-left.png";
MVInfoWindowStyle4.windowTabsHeaderMiddle=_f65._f141+"infoicons/dialog-tabs-header-middle.png";
MVInfoWindowStyle4.windowTabsHeaderRight=_f65._f141+"infoicons/dialog-tabs-header-right.png";
MVInfoWindowStyle4.closeButtonEnableImgURL=_f65._f141+"infoicons/close_ena.png";
MVInfoWindowStyle4.closeButtonOverImgURL=_f65._f141+"infoicons/close_ovr.png";
MVInfoWindowStyle4.closeButtonDownImgURL=_f65._f141+"infoicons/close_dwn.png";
MVInfoWindowStyle4.closeButtonImgURL=MVInfoWindowStyle4.closeButtonEnableImgURL;
MVInfoWindowStyle4.tabEnableStartImgURL=_f65._f141+"infoicons/t3_above_start_n.png";
MVInfoWindowStyle4.tabEnableMidImgURL=_f65._f141+"infoicons/t3_above_mid_n.png";
MVInfoWindowStyle4.tabEnableEndImgURL=_f65._f141+"infoicons/t3_above_end_n.png";
MVInfoWindowStyle4.tabDisableStartImgURL=_f65._f141+"infoicons/t3_above_start_d.png";
MVInfoWindowStyle4.tabDisableMidImgURL=_f65._f141+"infoicons/t3_above_mid_d.png";
MVInfoWindowStyle4.tabDisableEndImgURL=_f65._f141+"infoicons/t3_above_end_d.png";
MVInfoWindowStyle4.tabSelectedStartImgURL=_f65._f141+"infoicons/t3_above_start_a.png";
MVInfoWindowStyle4.tabSelectedMidImgURL=_f65._f141+"infoicons/t3_above_mid_a.png";
MVInfoWindowStyle4.tabSelectedEndImgURL=_f65._f141+"infoicons/t3_above_end_a.png";
MVInfoWindowStyle4.tabContentHeadStartImgURL=_f65._f141+"infoicons/ptts.png";
MVInfoWindowStyle4.tabContentHeadMidImgURL=_f65._f141+"infoicons/ptt.png";
MVInfoWindowStyle4.tabContentHeadEndImgURL=_f65._f141+"infoicons/ptte.png";
MVInfoWindowStyle4.tabContentMidStartImgURL=_f65._f141+"infoicons/pts.png";
MVInfoWindowStyle4.tabContentMidMidImgURL=_f65._f141+"infoicons/ptc.png";
MVInfoWindowStyle4.tabContentMidEndImgURL=_f65._f141+"infoicons/pte.png";
MVInfoWindowStyle4.tabContentFooterStartImgURL=_f65._f141+"infoicons/ptbs.png";
MVInfoWindowStyle4.tabContentFooterMidImgURL=_f65._f141+"infoicons/ptb.png";
MVInfoWindowStyle4.tabContentFooterEndImgURL=_f65._f141+"infoicons/ptbe.png";
MVInfoWindowStyle4.overFlowLeftEnable=_f65._f141+"infoicons/overflow_left_ena.png";
MVInfoWindowStyle4.overFlowLeftDown=_f65._f141+"infoicons/overflow_left_dwn.png";
MVInfoWindowStyle4.overFlowLeftOver=_f65._f141+"infoicons/overflow_left_ovr.png";
MVInfoWindowStyle4.overFlowRightEnable=_f65._f141+"infoicons/overflow_right_ena.png";
MVInfoWindowStyle4.overFlowRightDown=_f65._f141+"infoicons/overflow_right_dwn.png";
MVInfoWindowStyle4.overFlowRightOver=_f65._f141+"infoicons/overflow_right_ovr.png";
if(x2)
MVInfoWindowStyle4._f936(x2);
else
 MVInfoWindowStyle4._f936(MVInfoWindowStyle4._f883);
this._f942=null;
this.x=null;
this.y=null;
}
MVInfoWindowStyle4.createWindow=function(x3,x4,x5,x6,x7,x8,x9,x10)
{
this.x=x3;
this.y=x4;
this._f389=document.createElement("div");
this._f389.id="infowindow4_"+x8;
var x11=document.createElement("table");
x11.id="infowindow4table_"+x8;
x11.dir="ltr";
this._f389.appendChild(x11);
x11.style.borderSpacing="0px";
x11.cellPadding="0";
x11.cellSpacing="0";
x11.border="0";
x11.style.width=MVUtil._f26(x5);
x11.style.height=MVUtil._f26(x6);
var x12=document.createElement("tbody");
x11.appendChild(x12);
var x13=document.createElement("tr");
x12.appendChild(x13);
var x14=document.createElement("td");
x13.appendChild(x14);
var x15=null;
if(x7&&x7.length>1)
x15=new _f301(MVInfoWindowStyle4.windowTabsHeaderLeft,5,31,null,null,null,true)
else
 x15=new _f301(MVInfoWindowStyle4.windowHeaderLeft,5,31,null,null,null,true)
x14.appendChild(x15);
var x16=document.createElement("td");
x16.style.paddingTop=MVUtil._f26(6);
if(x7&&x7.length>1)
x16.style.backgroundImage="url("+MVInfoWindowStyle4.windowTabsHeaderMiddle+")";
else
 x16.style.backgroundImage="url("+MVInfoWindowStyle4.windowHeaderMiddle+")";
x16.style.backgroundRepeat="repeat-x";
x16.style.textAlign="right";
x16.style.verticalAlign="top";
x16.style.width="100%";
x13.appendChild(x16);
var x17=document.createElement("td");
x13.appendChild(x17);
var x18=null;
if(x7&&x7.length>1)
x18=new _f301(MVInfoWindowStyle4.windowTabsHeaderRight,5,31,null,null,null,true)
else
 x18=new _f301(MVInfoWindowStyle4.windowHeaderRight,5,31,null,null,null,true);
x17.appendChild(x18);
var x19=document.createElement("tr");
x12.appendChild(x19);
var x20=document.createElement("td");
x19.appendChild(x20);
x20.colSpan="3";
x20.style.backgroundColor="#EBEFF5";
x20.style.borderLeft="1px solid #C2C7D3";
x20.style.borderRight="1px solid #C2C7D3";
var x21=document.createElement("div");
x21.style.width=MVUtil._f26(x5-2);
x21.style.height=MVUtil._f26(x6-62>0?x6-62:0);
x20.appendChild(x21)
var x22=document.createElement("tr");
x12.appendChild(x22);
var x23=document.createElement("td");
x22.appendChild(x23);
var x24=new _f301(MVInfoWindowStyle4.windowFooterLeft,5,31,null,null,null,true)
x23.appendChild(x24);
var x25=document.createElement("td");
x22.appendChild(x25);
var x26=new _f301(MVInfoWindowStyle4.windowFooterMiddle,x5-5-5,31,null,null,null,true);
x25.appendChild(x26);
var x27=document.createElement("td");
x22.appendChild(x27);
var x28=new _f301(MVInfoWindowStyle4.windowFooterRight,5,31,null,null,null,true);
x27.appendChild(x28);
if(!x11.style.width||x11.style.width==""||
x11.style.width=="0"||x11.style.width=="0px")
{
if(x5)
x11.style.width=MVUtil._f26(x5);
else
 x11.style.width=MVUtil._f26(_f65._f315[x8]);
}
if(!x11.style.height||x11.style.height==""||
x11.style.height=="0"||x11.style.height=="0px")
{
if(x6)
x11.style.height=MVUtil._f26(x6);
else
 x11.style.height=MVUtil._f26(_f65._f316[x8]);
}
var x29=MVInfoWindowStyle4.createWindowShadow(x5,x6);
this._f389.appendChild(x29);
this._f389.style.left=MVUtil._f26(x3-MVInfoWindowStyle4._f459);
this._f389.style.top=MVUtil._f26(x4+MVInfoWindowStyle4._f459);
this._f389.style.position='absolute';
this._f389.style.zIndex=200;
return this._f389;
}
MVInfoWindowStyle4.createWindowShadow=function(x30,x31)
{
var x32=0;
var x33=0;
var x34=[24,16,12,10,8,6,6,4,4,4,4,2,2,2,2,2,2,2];
var x35=document.createElement("DIV");
x35.style.zIndex="-1";
x35.style.position="absolute";
x35.style.left=MVUtil._f26(3);
x35.style.top=MVUtil._f26(3);
for(var x36=0;x36<18;x36++)
{
var x37=document.createElement("DIV");
x37.style.backgroundColor="#000000";
x37.style.left=MVUtil._f26(x32);
x37.style.top=MVUtil._f26(x33);
x37.style.position="absolute";
x37.style.width=MVUtil._f26(x30-3);
x37.style.height=MVUtil._f26(x31-3);
var x38=x34[x36];
MVInfoWindowStyle4.setOpaque(x37,x38);
if(x36%2==0)
x32++;
else
 x33++;
x35.appendChild(x37);
}
return x35;
}
MVInfoWindowStyle4.createTitleAndContent=function(x39,x40,x41,x42,x43,x44,x45,x46)
{
var x47=document.createElement("table");
x47.id="infowindow4tablebutton_"+x39;
x47.style.left="0px";
x47.style.top="0px";
x47.style.width=MVUtil._f26(x43);
x47.style.height=MVUtil._f26(x44);
x47.style.position="absolute";
x47.style.zIndex="250";
x47.cellPadding="0";
x47.cellSpacing="0";
var x48=document.createElement("tbody");
x47.appendChild(x48);
var x49=document.createElement("tr");
x48.appendChild(x49);
var x50=document.createElement("td");
x49.appendChild(x50);
var x51=document.createElement("td");
x49.appendChild(x51);
if(x40==null||x40=="")
{
x50.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='10px'>";
x50.width=MVUtil._f26(10);
var x52=document.createElement("td");
x52.width=MVUtil._f26(13);
x52.height="100%";
if(!x46)
{
var x53=document.createElement("table");
x53.style.height="100%";
x53.cellPadding="0";
x53.cellSpacing="0";
x52.style.verticalAlign="top";
x52.appendChild(x53);
var x54=document.createElement("tbody");
x53.appendChild(x54);
var x55=document.createElement("tr");
x54.appendChild(x55);
var x56=document.createElement("td");
x56.height=MVUtil._f26(6);
x56.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='6px'>";
x55.appendChild(x56);
var x57=document.createElement("tr");
x54.appendChild(x57);
var x58=document.createElement("td");
x58.height=MVUtil._f26(13);
x57.appendChild(x58);
var x59=document.createElement("tr");
x54.appendChild(x59);
var x60=document.createElement("td");
x60.style.height="100%";
x60.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='5px'>";
x59.appendChild(x60);
var x61=MVInfoWindowStyle4.addCloseButton(x45);
if(x61!=null)
x58.appendChild(x61);
}
x49.appendChild(x52);
var x62=document.createElement("td");
x62.width=MVUtil._f26(5);
x62.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='5px'>";
x49.appendChild(x62);
var x63=document.createElement("table");
x63.cellPadding="0";
x63.cellSpacing="0";
x63.style.width="100%";
x63.style.height="100%";
x51.style.verticalAlign="top";
x51.appendChild(x63);
var x64=document.createElement("tbody");
x63.appendChild(x64);
var x65=document.createElement("tr");
x64.appendChild(x65);
var x66=document.createElement("td");
x66.height=MVUtil._f26(10);
x66.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='10px'>";
x65.appendChild(x66);
var x67=document.createElement("tr");
x64.appendChild(x67);
var x68=document.createElement("td");
x68.style.height="100%";
x68.style.verticalAlign="top";
x67.appendChild(x68);
var x69=document.createElement("div");
x69.style.overflow="auto";
x69.id=x39+"_content";
x69.innerHTML=x41;
if(x44&&x44>20)
x69.style.height=MVUtil._f26(x44-20);
if(x43&&x43>28)
x69.style.width=MVUtil._f26(x43-28);
x68.appendChild(x69);
var x70=document.createElement("tr");
x64.appendChild(x70);
var x71=document.createElement("td");
x71.height=MVUtil._f26(10);
x71.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='10px'>";
x70.appendChild(x71);
}
else
 {
x50.style.width=MVUtil._f26(6);
x51.style.height="100%";
x50.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='6px'>";
var x72=document.createElement("table");
x72.cellPadding="0";
x72.cellSpacing="0";
x72.style.width="100%";
x72.style.height="100%";
x51.appendChild(x72);
var x73=document.createElement("tbody");
x72.appendChild(x73);
var x74=document.createElement("tr");
x73.appendChild(x74);
var x75=document.createElement("td");
x75.width="100%";
x74.appendChild(x75);
var x76=document.createElement("table");
x76.style.width="100%";
x76.cellPadding="0";
x76.cellSpacing="0";
x75.appendChild(x76);
var x77=document.createElement("tbody");
x76.appendChild(x77);
var x78=document.createElement("tr");
x77.appendChild(x78);
var x79=document.createElement("td");
x79.style.width="100%";
x78.appendChild(x79);
var x80=document.createElement("table");
x80.style.width="100%";
x80.cellPadding="0";
x80.cellSpacing="0";
x79.appendChild(x80);
var x81=document.createElement("tbody");
x80.appendChild(x81);
var x82=document.createElement("tr");
x81.appendChild(x82);
var x83=document.createElement("td");
x83.height="6px";
x83.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='6px'>";
x82.appendChild(x83);
var x84=document.createElement("tr");
x81.appendChild(x84);
var x85=document.createElement("td");
x85.style.cssText="font-family: Tahoma; font-size: 12px;font-weight: bold; color:#3E403D";
x84.appendChild(x85);
x85.id=x39+"_title";
x85.innerHTML=x40;
var x86=document.createElement("tr");
x81.appendChild(x86);
var x87=document.createElement("td");
x87.height="10px";
x87.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='10px'>";
x86.appendChild(x87);
var x88=document.createElement("td");
x88.style.width=MVUtil._f26(18);
x78.appendChild(x88);
if(!x46)
{
var x53=document.createElement("table");
x53.cellPadding="0";
x53.cellSpacing="0";
x53.style.height="100%";
x53.style.width=MVUtil._f26(18);
x88.style.height="100%"
x88.appendChild(x53);
x88.style.verticalAlign="top";
var x54=document.createElement("tbody");
x53.appendChild(x54);
var x55=document.createElement("tr");
x54.appendChild(x55);
var x56=document.createElement("td");
x56.style.height=MVUtil._f26(6);
x56.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='6px'>";
x56.colSpan="2";
x55.appendChild(x56);
var x57=document.createElement("tr");
x54.appendChild(x57);
var x89=document.createElement("td");
x89.style.height=MVUtil._f26(13);
x89.style.width=MVUtil._f26(13);
x57.appendChild(x89);
var x90=document.createElement("td");
x90.style.width=MVUtil._f26(5);
x90.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='5px'>";
x57.appendChild(x90);
var x57=document.createElement("tr");
x54.appendChild(x57);
var x60=document.createElement("td");
x60.style.height="100%";
x60.colSpan="2";
x57.appendChild(x60);
var x61=MVInfoWindowStyle4.addCloseButton(x45);
if(x61!=null)
x89.appendChild(x61);
}
var x91=document.createElement("tr");
x73.appendChild(x91);
var x92=document.createElement("td");
x92.width="100%";
x92.height="100%";
x91.appendChild(x92);
var x93=document.createElement("tr");
x73.appendChild(x93);
var x94=document.createElement("td");
x94.height=MVUtil._f26(10);
x94.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='10px'>";
x93.appendChild(x94);
var x63=document.createElement("table");
x63.cellPadding="0";
x63.cellSpacing="0";
x63.style.height="100%";
x63.style.width="100%";
x92.style.verticalAlign="top";
x92.appendChild(x63);
var x64=document.createElement("tbody");
x63.appendChild(x64);
x65=document.createElement("tr");
x64.appendChild(x65);
x66=document.createElement("td");
x66.style.width=MVUtil._f26(4);
x66.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='4px'>";
x65.appendChild(x66);
x68=document.createElement("td");
x65.appendChild(x68);
x71=document.createElement("td");
x71.style.width=MVUtil._f26(5);
x71.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='5px'>";
x65.appendChild(x71);
var x69=document.createElement("div");
x69.style.overflow="auto";
x69.innerHTML=x41;
x69.id=x39+"_content";
if(x43&&x43>15)
x69.style.width=MVUtil._f26(x43-15);
x68.style.verticalAlign="top";
x68.appendChild(x69);
}
return x47;
}
MVInfoWindowStyle4.createTabsAndContent=function(x95,x96,x97,x98,x99,x100)
{
return MVInfoWindowStyle4.tabStyleOne(x95,x96,x97,x98,x99,x100,this.tabStyle);
}
MVInfoWindowStyle4.tabStyleTwo=function(x101,x102,x103,x104,x105,x106)
{
var x107=MVInfoWindowStyle4.addCloseButton(x106);
var x108=document.createElement("div");
var x109=null;
var x110=9;
var x111=30;
var x112=0;
var x113=0;
var x114=true;
var x115=document.createElement("div");
var x116=MVUtil._f172(MVInfoWindowStyle4.overFlowLeftEnable,true);
var x117=MVUtil._f172(MVInfoWindowStyle4.overFlowRightEnable,true);
var x118=null;
var x119=null;
var x120=null;
var x121={startImg:null,midImg:null,endImag:null};
var x122=0;
var x123=new Array();
var x124=x103-15-13-10-5;
var x125;
var x126=15;
var x127;
var x128;
MVInfoWindowStyle4.getPageDirection(x105);
var x129=MVUtil._f172(MVInfoWindowStyle4.tabSelectedStartImgURL,true);
x129.style.width=x126+"px";
x129.style.height="24px";
var x130=MVUtil._f172(MVInfoWindowStyle4.tabEnableStartImgURL,true);
x130.style.width=x126+"px";
x130.style.height="24px";
var x131=MVUtil._f172(MVInfoWindowStyle4.tabSelectedEndImgURL,true);
x131.style.width="36px";
x131.style.height="24px";
var x132=MVUtil._f172(MVInfoWindowStyle4.tabEnableEndImgURL,true);
x132.style.width="36px";
x132.style.height="24px";
if(x102!=null||x102!=undefined)
x112=x102;
for(var x133=0;x133<x101.length;x133++)
{
x123[x133]=MVInfoWindowStyle4.getRealWithOfOneTab(x105,x101[x133],x124);
}
x108.style.position="absolute";
x108.style.width=MVUtil._f26(x103);
x108.style.height=MVUtil._f26(x104);
x108.style.zIndex="220";
x105.appendChild(x108);
x108.appendChild(x115);
if(MVInfoWindowStyle4.pageDirection)
{
x115.style.cssText="float:left";
x115.style.direction="ltr";
}
else
 {
x115.style.cssText="float:right";
x115.style.direction="ltr";
}
x115.style.zIndex="210";
x115.style.position="absolute";
x115.style.top="5px";
x115.style.overflow="auto";
x115.style.width=x103-x110-15+"px";
x115.style.height=x104*0.3+"px";
x107.style.zIndex="300";
if(x107!=null)
{
x107.style.position="absolute";
x107.style.top="5px";
if(MVInfoWindowStyle4.pageDirection)
x107.style.right="10px";
else
 x107.style.left="10px";
x108.appendChild(x107);
}
if(MVInfoWindowStyle4.pageDirection)
{
x115.style.left="15px";
}
else
 {
x115.style.right="15px";
}
x119=document.createElement("div");
x119.style.position="absolute";
x119.style.borderColor="black";
x119.style.backgroundColor="#ffffe1";
x119.style.borderWidth="1px";
x119.style.borderStyle="solid";
x119.style.fontSize="14px";
x119.style.whiteSpace="nowrap";
x119.style.padding="2px";
x119.style.zIndex="300";
x119.style.fontFamily="Tahoma";
if(MVInfoWindowStyle4.pageDirection)
{
x119.style.direction="ltr";
}else
 {
x119.style.direction="rtl";
}
function mouseOver(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
x118=x1.style.color;
x1.style.color="#78c3ff";
if(x101[x1.parentNode.parentNode.indexInList].showTitle!=undefined)
{
x119.innerHTML=x101[x1.parentNode.parentNode.indexInList].title;
x119.style.top=x1.parentNode.parentNode.parentNode.offsetTop+30+"px";
if(MVInfoWindowStyle4.pageDirection)
{
x119.style.left=x1.parentNode.parentNode.offsetLeft+5+"px";
}else
 {
x119.style.right=x1.parentNode.parentNode.offsetLeft+5+"px";
}
x1.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(x119);
}
}
function mouseOut(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
x1.style.color=x118;
if(x101[x1.parentNode.parentNode.indexInList].showTitle!=undefined)
x1.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(x119);
}
function _f152(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
}
function mouseUp(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
x112=x1.parentNode.parentNode.indexInList;
x118="#00234c";
x1.parentNode.parentNode.style.zIndex=200;
x121.startImg.parentNode.style.zIndex=100;
if(x1.parentNode.parentNode.parentNode.style.zIndex!=x128)
{
x125.style.zIndex=x1.parentNode.parentNode.parentNode.style.zIndex;
x125.style.top=x1.parentNode.parentNode.parentNode.style.top;
x1.parentNode.parentNode.parentNode.style.zIndex=x128;
x1.parentNode.parentNode.parentNode.style.top=x127;
x125=x1.parentNode.parentNode.parentNode;
}
MVUtil._f201(x121.startImg);
x121.startImg.appendChild(x130.cloneNode(true));
if(MVInfoWindowStyle4.pageDirection)
{
x121.startImg=x1.parentNode.parentNode.firstChild;
}else
 {
x121.startImg=x1.parentNode.parentNode.childNodes[2];
}
MVUtil._f201(x121.startImg);
x121.startImg.appendChild(x129.cloneNode(true));
x121.midImg.style.backgroundImage="url('"+MVInfoWindowStyle4.tabEnableMidImgURL+"')";
x1.parentNode.style.backgroundImage="url('"+MVInfoWindowStyle4.tabSelectedMidImgURL+"')";
x121.midImg.firstChild.style.color="#e9f6fe";
x121.midImg=x1.parentNode;
x1.style.color="#00234c";
MVUtil._f201(x121.endImg);
x121.endImg.appendChild(x132.cloneNode(true));
if(MVInfoWindowStyle4.pageDirection)
{
x121.endImg=x1.parentNode.parentNode.childNodes[2];
}else
 {
x121.endImg=x1.parentNode.parentNode.firstChild;
}
MVUtil._f201(x121.endImg);
x121.endImg.appendChild(x131.cloneNode(true));
document.getElementById("realContentDivId").innerHTML=x101[x1.parentNode.parentNode.indexInList].content;
x115.scrollTop=x115.scrollHeight;
}
function createTabs(x0,x1)
{
var x2=document.createElement("div");
x0.appendChild(x2);
x2.style.position="absolute";
x2.style.zIndex=x122;
x2.style.top=x122*20+"px";
x127=x2.style.top;
x128=x2.style.zIndex;
x122++;
x109=5;
if(MVInfoWindowStyle4.pageDirection)
{
x2.style.left="0px";
}
else
 {
x2.style.right="0px";
}
for(var x3=0;x3<x1.length;x3++)
{
var x4=document.createElement("div");
var x5=document.createElement("div");
var x6=document.createElement("div");
var x7=document.createElement("div");
var x8=document.createElement("a");
var x9=x3*(-19);
var x10;
var x11;
x2.appendChild(x4);
if(MVInfoWindowStyle4.pageDirection)
{
x4.appendChild(x5);
x4.appendChild(x6);
x4.appendChild(x7);
x4.style.cssText="float:left;";
x4.style.left=x9+"px";
x5.style.cssText="float:left;";
x6.style.cssText="float:left;";
x7.style.cssText="float:left;";
}
else
 {
x4.appendChild(x7);
x4.appendChild(x6);
x4.appendChild(x5);
x4.style.cssText="float:right;";
x4.style.right=x9+"px";
x5.style.cssText="float:left;";
x6.style.cssText="float:left;";
x7.style.cssText="float:left;";
}
x4.indexInList=x1[x3];
if(x1[x3]==x112)
{
x4.style.zIndex="200";
}
else
 {
x4.style.zIndex="100";
}
x4.style.position="relative";
x5.style.width=x126+"px";
x5.style.height="24px";
x5.style.backgroundPosition="bottom";
x5.style.position="relative";
if(x1[x3]==x112)
x10=x129.cloneNode(true);
else
 x10=x130.cloneNode(true);
x5.appendChild(x10);
if(x1[x3]==x112)
x6.style.backgroundImage="url('"+MVInfoWindowStyle4.tabSelectedMidImgURL+"')";
else
 x6.style.backgroundImage="url('"+MVInfoWindowStyle4.tabEnableMidImgURL+"')";
x6.style.backgroundRepeat="repeat-x";
x6.style.position="relative";
x6.style.lineHeight="1.3em";
x6.style.height="24px";
if(MVInfoWindowStyle4.pageDirection)
{
x6.style.direction="ltr";
}else
 {
x6.style.direction="rtl";
}
x6.appendChild(x8);
x8.style.cursor="pointer";
x8.style.fontFamily="Tahoma";
x8.style.fontSize="11px";
x8.style.fontWeight="bold";
if(x1[x3]==x112)
x8.style.color="#00234c";
else
 x8.style.color="#e9f6fe";
if(x101[x1[x3]].showTitle!=undefined)
x8.innerHTML=x101[x1[x3]].showTitle.replace(/\s/g,"&nbsp;");
else
 x8.innerHTML=x101[x1[x3]].title.replace(/\s/g,"&nbsp;");
MVUtil.attachEvent(x8,"mouseover",mouseOver);
MVUtil.attachEvent(x8,"mouseout",mouseOut);
MVUtil.attachEvent(x8,"mousedown",_f152);
MVUtil.attachEvent(x8,"mouseup",mouseUp);
x7.style.width="36px";
x7.style.height="24px";
x7.style.backgroundPosition="bottom";
x7.style.position="relative";
if(x1[x3]==x112)
{
x11=x131.cloneNode(true);
}
else
 x11=x132.cloneNode(true);
x7.appendChild(x11);
x109=x109+x6.clientWidth+x126+36;
x2.style.width=x109+"px";
if(x1[x3]==x112)
{
x121.endImg=x7;
x121.startImg=x5;
x121.midImg=x6;
}
}
}
var x134=MVInfoWindowStyle4.groupingTabs(x123,x124);
for(var x135=0;x135<x134.length;x135++)
{
for(var x136=0;x136<x134[x135].length;x136++)
{
if(x134[x135][x136]==x112)
{
var x137=x134[x135][0];
x134[x135][0]=x134[x135][x136];
x134[x135][x136]=x137;
var x138=x134[x134.length-1];
x134[x134.length-1]=x134[x135];
x134[x135]=x138;
break;
}
}
}
for(var x133=0;x133<x134.length;x133++)
{
createTabs(x115,x134[x133]);
}
x125=x115.lastChild;
if(x115.clientHeight>=x115.scrollHeight)
{
x120=MVInfoWindowStyle4.createContentDiv(x103-x110,x104-x111-(x122-1)*20,x115.offsetTop+15+(x122-1)*20);
}
else
 {
x115.style.top=x115.offsetTop+13+"px";
x120=MVInfoWindowStyle4.createContentDiv(x103-x110,x104-x115.offsetTop-x115.offsetHeight-5,x115.offsetTop+x115.offsetHeight-6);
x115.scrollTop=x115.scrollHeight;
}
x108.appendChild(x120);
document.getElementById("realContentDivId").innerHTML=x101[x112].content;
return x108;
}
MVInfoWindowStyle4.tabStyleOne=function(x139,x140,x141,x142,x143,x144,x145)
{
var x146=MVInfoWindowStyle4.addCloseButton(x144);
var x147=document.createElement("div");
var x148=null;
var x149=9;
var x150=30;
var x151=0;
var x152=0;
var x153=true;
var x154=document.createElement("div");
var x155=document.createElement("div");
var x156=MVUtil._f172(MVInfoWindowStyle4.overFlowLeftEnable,true);
var x157=MVUtil._f172(MVInfoWindowStyle4.overFlowRightEnable,true);
var x158=null;
var x159=null;
var x160=null;
var x161=10;
var x162=20;
var x163=12;
var x164=4;
var x165=x163;
var x145=this.tabStyle;
var x166;
var x167;
var x168={startImg:null,midImg:null,endImag:null};
if(x140!=null||x140!=undefined)
x151=x140;
MVInfoWindowStyle4.getPageDirection(x143);
var x169=MVUtil._f172(MVInfoWindowStyle4.tabSelectedStartImgURL,true,true);
x169.style.width=x161+"px";
x169.style.height="24px";
var x170=MVUtil._f172(MVInfoWindowStyle4.tabEnableStartImgURL,true,true);
x170.style.width=x161+"px";
x170.style.height="24px";
var x171=MVUtil._f172(MVInfoWindowStyle4.tabSelectedEndImgURL,true,true);
x171.style.width=x162+"px";
x171.style.height="24px";
var x172=MVUtil._f172(MVInfoWindowStyle4.tabEnableEndImgURL,true,true);
x172.style.width=x162+"px";
x172.style.height="24px";
x147.style.position="absolute";
x147.style.width=MVUtil._f26(x141);
x147.style.height=MVUtil._f26(x142);
x147.style.zIndex="220";
x143.appendChild(x147);
for(var x173=0;x173<x139.length;x173++)
{
x165+=MVInfoWindowStyle4.getOrignalWithOfOneTab(x143,x139[x173])-x163;
}
x147.appendChild(x155);
x155.appendChild(x154);
if(MVInfoWindowStyle4.pageDirection)
{
x155.style.left="15px"
x154.style.cssText="float:left";
x154.style.direction="ltr";
}
else
 {
x155.style.right="15px"
x154.style.cssText="float:right";
x154.style.direction="ltr";
}
x155.style.position="absolute";
x155.style.zIndex="210";
x155.style.top="5px";
x155.style.height="24px";
x155.style.width=x141-2-13-25-13+"px";
x155.style.overflow="hidden";
x154.style.position="absolute";
x154.style.top="0px";
x160=MVInfoWindowStyle4.createContentDiv(x141-x149,x142-x150,20);
x147.appendChild(x160);
x146.style.zIndex="300";
if(x146!=null)
{
x146.style.position="absolute";
x146.style.top="5px";
if(MVInfoWindowStyle4.pageDirection)
x146.style.right="10px";
else
 x146.style.left="10px";
x147.appendChild(x146);
}
function mouseOverLeftOverflow(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(MVInfoWindowStyle4.pageDirection)
{
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowLeftOver;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftOver+"', sizingMethod='image');"
}
else
 {
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowRightOver;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightOver+"', sizingMethod='image');"
}
}
function mouseOutLeftOverflow(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(MVInfoWindowStyle4.pageDirection)
{
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowLeftEnable;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftEnable+"', sizingMethod='image');"
}
else
 {
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowRightEnable;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightEnable+"', sizingMethod='image');"
}
}
function mouseDownLeftOverflow(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(MVInfoWindowStyle4.pageDirection)
{
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowLeftDown;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftDown+"', sizingMethod='image');"
}
else
 {
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowRightDown;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightDown+"', sizingMethod='image');"
}
}
function mouseUpLeftOverflow(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(MVInfoWindowStyle4.pageDirection)
{
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowLeftEnable;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftEnable+"', sizingMethod='image');"
}
else
 {
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowRightEnable;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightEnable+"', sizingMethod='image');"
}
if(MVInfoWindowStyle4.pageDirection)
{
var x2=x154.style.left.toString();
var x3=parseInt(x2.substr(0,x2.length-2));
x154.style.left=MVUtil._f26(x3+30);
}
else
 {
var x2=x154.style.right.toString();
var x4=parseInt(x2.substr(0,x2.length-2));
x154.style.right=MVUtil._f26(x4+30);
}
if(x154.offsetLeft>=0)
x156.style.visibility="hidden";
else
 x156.style.visibility="visible";
var x5=document.getElementById("inforwindowtab_"+(x139.length-1));
if(x5.offsetLeft+x5.offsetWidth+x154.offsetLeft<=x155.offsetWidth)
x157.style.visibility="hidden";
else
 x157.style.visibility="visible";
}
x147.appendChild(x156);
if(MVInfoWindowStyle4.pageDirection)
x156.style.left="2px";
else
 {
x156.style.right="2px";
if(x156.tagName=='IMG')
x156.src=MVInfoWindowStyle4.overFlowRightEnable;
else if(x156.tagName=='DIV')
x156.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightEnable+"', sizingMethod='image')"
}
x156.style.width="13px";
x156.style.top="5px";
x156.style.position="absolute";
x156.style.zIndex=500;
x156.style.visibility="hidden";
MVUtil.attachEvent(x156,"mouseover",mouseOverLeftOverflow);
MVUtil.attachEvent(x156,"mouseout",mouseOutLeftOverflow);
MVUtil.attachEvent(x156,"mousedown",mouseDownLeftOverflow);
MVUtil.attachEvent(x156,"mouseup",mouseUpLeftOverflow);
function mouseOverRightOverflow(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(MVInfoWindowStyle4.pageDirection)
{
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowRightOver;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightOver+"', sizingMethod='image');"
}
else
 {
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowLeftOver;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftOver+"', sizingMethod='image');"
}
}
function mouseOutRightOverflow(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(MVInfoWindowStyle4.pageDirection)
{
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowRightEnable;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightEnable+"', sizingMethod='image');"
}
else
 {
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowLeftEnable;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftEnable+"', sizingMethod='image');"
}
}
function mouseDownRightOverflow(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(MVInfoWindowStyle4.pageDirection)
{
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowRightDown;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightDown+"', sizingMethod='image');"
}
else
 {
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowLeftDown;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftDown+"', sizingMethod='image');"
}
}
function mouseUpRightOverflow(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(MVInfoWindowStyle4.pageDirection)
{
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowRightEnable;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowRightEnable+"', sizingMethod='image');"
}
else
 {
if(x1.tagName=='IMG')
x1.src=MVInfoWindowStyle4.overFlowLeftEnable;
else if(x1.tagName=='DIV')
x1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftEnable+"', sizingMethod='image');"
}
if(MVInfoWindowStyle4.pageDirection)
{
var x2=x154.style.left.toString();
var x3=x2.substr(0,x2.length-2).valueOf();
x154.style.left=MVUtil._f26(x3-30);
if(x154.offsetLeft>=0)
x156.style.visibility="hidden";
else
 x156.style.visibility="visible";
var x4=document.getElementById("inforwindowtab_"+(x139.length-1));
if(x4.offsetLeft+x4.offsetWidth+x154.offsetLeft<=x155.offsetWidth)
x157.style.visibility="hidden";
else
 x157.style.visibility="visible";
}
else
 {
var x2=x154.style.right.toString();
var x5=x2.substr(0,x2.length-2).valueOf();
x154.style.right=MVUtil._f26(x5-30);
if(x154.offsetLeft>=0)
x156.style.visibility="hidden";
else
 x156.style.visibility="visible";
var x4=document.getElementById("inforwindowtab_"+(x139.length-1));
if(x4.offsetLeft+x4.offsetWidth+x154.offsetLeft<=x155.offsetWidth)
x157.style.visibility="hidden";
else
 x157.style.visibility="visible";
}
}
if(MVInfoWindowStyle4.pageDirection)
{
x157.style.right="25px";
}
else
 {
x157.style.left="25px";
if(x157.tagName=='IMG')
x157.src=MVInfoWindowStyle4.overFlowLeftEnable;
else if(x157.tagName=='DIV')
x157.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.overFlowLeftEnable+"', sizingMethod='image')"
}
x157.style.width="13px";
x157.style.top="5px";
x157.style.position="absolute";
x157.style.zIndex="500";
x157.style.visibility="hidden";
MVUtil.attachEvent(x157,"mouseover",mouseOverRightOverflow);
MVUtil.attachEvent(x157,"mouseout",mouseOutRightOverflow);
MVUtil.attachEvent(x157,"mousedown",mouseDownRightOverflow);
MVUtil.attachEvent(x157,"mouseup",mouseUpRightOverflow);
x147.appendChild(x157);
if(MVInfoWindowStyle4.pageDirection)
{
x154.style.left="0px";
}
else
 {
x154.style.right="0px";
}
x159=document.createElement("div");
x159.style.position="absolute";
x159.style.borderColor="black";
x159.style.backgroundColor="#ffffe1";
x159.style.borderWidth="1px";
x159.style.borderStyle="solid";
x159.style.fontSize="14px";
x159.style.whiteSpace="nowrap";
x159.style.padding="2px";
x159.style.zIndex="10000";
x159.style.fontFamily="Tahoma";
x159.id="TabbedInforwindowToolTip";
function mouseOver(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
x158=x1.style.color;
x1.style.color="#78c3ff";
x159.topOffset=15;
x159.leftOffset=15;
if(window.innerWidth)
{
x159.topOffset+=window.pageYOffset;
x159.leftOffset+=window.pageXOffset;
}else if(document.documentElement&&document.documentElement.clientWidth)
{
x159.topOffset+=document.documentElement.scrollTop;
x159.leftOffset+=document.documentElement.scrollLeft;
}else if(document.body.clientWidth)
{
x159.topOffset+=document.body.scrollTop;
x159.leftOffset+=document.body.scrollLeft;
}
x159.innerHTML=x139[x1.parentNode.parentNode.indexInList].title;
x159.style.top=x0.clientY+x159.topOffset+"px";
x159.style.left=x0.clientX+x159.leftOffset+"px";
document.body.appendChild(x159);
}
function mouseOut(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
x1.style.color=x158;
document.body.removeChild(x159);
}
function _f152(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
}
function mouseUp(x0){
x0=(x0)?x0:((window.event)?event:null);
var x1=MVUtil.getEventSource(x0);
if(x1.nodeName=='#text')x1=x1.parentNode;
x151=x1.parentNode.parentNode.indexInList;
x168.startImg.parentNode.style.zIndex=100;
x1.parentNode.parentNode.style.zIndex=200;
MVUtil._f201(x168.startImg);
x168.startImg.appendChild(x170.cloneNode(true));
if(MVInfoWindowStyle4.pageDirection)
{
x168.startImg=x1.parentNode.parentNode.firstChild;
}else
 {
x168.startImg=x1.parentNode.parentNode.childNodes[2];
}
MVUtil._f201(x168.startImg);
x168.startImg.appendChild(x169.cloneNode(true));
x168.midImg.style.backgroundImage="url('"+MVInfoWindowStyle4.tabEnableMidImgURL+"')";
x1.parentNode.style.backgroundImage="url('"+MVInfoWindowStyle4.tabSelectedMidImgURL+"')";
x168.midImg.firstChild.style.color="#e9f6fe";
x168.midImg=x1.parentNode;
x1.style.color="#00234c";
MVUtil._f201(x168.endImg);
x168.endImg.appendChild(x172.cloneNode(true));
if(MVInfoWindowStyle4.pageDirection)
{
x168.endImg=x1.parentNode.parentNode.childNodes[2];
}else
 {
x168.endImg=x1.parentNode.parentNode.firstChild;
}
MVUtil._f201(x168.endImg);
x168.endImg.appendChild(x171.cloneNode(true));
document.getElementById("realContentDivId").innerHTML=x139[x1.parentNode.parentNode.indexInList].content;
x158=x1.style.color;
}
function createTabs(x0,x1,x2,x3)
{
x148=0;
for(x173=0;x173<x0.length;x173++)
{
var x4=document.createElement("div");
var x5=document.createElement("div");
var x6=document.createElement("div");
var x7=document.createElement("div");
var x8=document.createElement("a");
var x9=x173*(-x163);
var x10;
var x11;
x1.appendChild(x4);
if(MVInfoWindowStyle4.pageDirection)
{
x4.appendChild(x5);
x4.appendChild(x6);
x4.appendChild(x7);
x4.style.cssText="float:left;";
x4.style.left=x9+"px";
x5.style.cssText="float:left;";
x6.style.cssText="float:left;";
x7.style.cssText="float:left;";
}
else
 {
x4.appendChild(x7);
x4.appendChild(x6);
x4.appendChild(x5);
x4.style.cssText="float:right;";
x4.style.right=x9+"px";
x5.style.cssText="float:left;";
x6.style.cssText="float:left;";
x7.style.cssText="float:left;";
}
x4.indexInList=x173;
if(x173==x151)
{
x4.style.zIndex="200";
x2.innerHTML=x0[x173].content;
}
else
 {
x4.style.zIndex="100";
}
x4.style.position="relative";
x5.style.width=x161+"px";
x5.style.height="24px";
x5.style.backgroundPosition="bottom";
x5.style.position="relative";
if(x173==x151)
x10=MVUtil._f172(MVInfoWindowStyle4.tabSelectedStartImgURL,true,true);
else
 x10=MVUtil._f172(MVInfoWindowStyle4.tabEnableStartImgURL,true,true);
x10.style.width=x161+"px";
x10.style.height="24px";
x5.appendChild(x10);
if(x173==x151)
x6.style.backgroundImage="url('"+MVInfoWindowStyle4.tabSelectedMidImgURL+"')";
else
 x6.style.backgroundImage="url('"+MVInfoWindowStyle4.tabEnableMidImgURL+"')";
x6.style.backgroundRepeat="repeat-x";
x6.style.position="relative";
x6.style.lineHeight="1.3em";
x6.style.height="24px";
x6.appendChild(x8);
x8.style.cursor="pointer";
x8.style.fontFamily="Tahoma";
x8.style.fontSize="11px";
x8.style.fontWeight="bold";
x8.style.whiteSpace="nowrap";
x8.id="tablinkid_"+x173;
if(x173==x151)
x8.style.color="#00234c";
else
 x8.style.color="#e9f6fe";
x8.innerHTML=x0[x173].title.replace(/\s/g,"&nbsp;");
if(x165>x155.offsetWidth+20&&x145=="p")
{
var x12=x6.clientWidth;
x8.innerHTML=x0[x173].title;
var x13;
if(x0[x173].title.length-2>x3)
x13=x0[x173].title.substr(0,x3)+"..";
else
 x13=x0[x173].title;
x8.innerHTML=x13;
}
MVUtil.attachEvent(x8,"mouseover",mouseOver);
MVUtil.attachEvent(x8,"mouseout",mouseOut);
MVUtil.attachEvent(x8,"mousedown",_f152);
MVUtil.attachEvent(x8,"mouseup",mouseUp);
x7.style.width=x162+"px";
x7.style.height="24px";
x7.style.backgroundPosition="bottom";
x7.style.position="relative";
if(x173==x151)
x11=MVUtil._f172(MVInfoWindowStyle4.tabSelectedEndImgURL,true,true);
else
 x11=MVUtil._f172(MVInfoWindowStyle4.tabEnableEndImgURL,true,true);
x11.style.width=x162+"px";
x11.style.height="24px";
x7.appendChild(x11);
x148=x148+x6.clientWidth+x161+x162;
x1.style.width=x148+"px";
x4.id="inforwindowtab_"+x173;
if(x173==x151)
{
x168.endImg=x7;
x168.startImg=x5;
x168.midImg=x6;
}
}
}
if(x165<=x155.offsetWidth+20||x145=="f")
{
createTabs(x139,x154,document.getElementById("realContentDivId"));
}
else
 {
createTabs(x139,x154,document.getElementById("realContentDivId"),1);
if(x154.offsetWidth-x163*(x139.length-1)<x155.offsetWidth+20)
{
MVUtil._f129(x154);
for(x167=2;x167<400;x167++)
{
createTabs(x139,x154,document.getElementById("realContentDivId"),x167);
if(x154.offsetWidth-x163*(x139.length-1)==x155.offsetWidth+20)
{
x155.style.width=x141-2-13-25-13+20+"px";
return x147;
}
else if(x154.offsetWidth-x163*(x139.length-1)>x155.offsetWidth+20)
{
for(var x174=1;;x174++)
{
for(var x173=0;x173<x139.length;x173++)
{
var x175=document.getElementById("tablinkid_"+x173);
var x176=x175.offsetWidth;
if(x139[x173].title.length-2>x167-x174)
x175.innerHTML=x139[x173].title.substr(0,x167-x174)+"..";
else
 x175.innerHTML=x139[x173].title;
var x177=x175.offsetWidth;
x154.style.width=x154.offsetWidth+x177-x176;
if(x154.offsetWidth-x163*(x139.length-1)<=x155.offsetWidth+20)
{
x155.style.width=x141-2-13-25-13+20+"px";
return x147;
}
}
if(x154.offsetWidth-x163*(x139.length-1)<=x155.offsetWidth+20)
{
x155.style.width=x141-2-13-25-13+20+"px";
return x147;
}
}
}
MVUtil._f129(x154);
}
}
else if(x154.offsetWidth-x163*(x139.length-1)>x155.offsetWidth+20)
{
MVUtil._f129(x154);
x167=4;
createTabs(x139,x154,document.getElementById("realContentDivId"),x167);
}
}
if(x154.offsetWidth-x163*(x139.length-1)>x155.offsetWidth+20)
x157.style.visibility="visible";
else if(x154.offsetWidth-x163*(x139.length-1)>x155.offsetWidth)
x155.style.width=x141-2-13-25+7+"px";
return x147;
}
MVInfoWindowStyle4.createContentDiv=function(x178,x179,x180)
{
var x181=document.createElement("div");
x181.style.left="5px";
x181.style.top=x180+"px";
x181.style.width=x178+"px";
if(x179<30)
x179=70;
x181.style.height=x179+"px";
x181.style.position="absolute";
var x182=document.createElement("div");
var x183=document.createElement("div");
var x184=MVUtil._f172(MVInfoWindowStyle4.tabContentHeadStartImgURL,true);
var x185=document.createElement("div");
var x186=document.createElement("div");
var x187=MVUtil._f172(MVInfoWindowStyle4.tabContentHeadEndImgURL,true);
x182.style.position="absolute";
x182.style.top="5px";
x183.style.width="5px";
x183.style.height="5px";
x183.style.position="absolute";
x184.style.width="5px";
x183.appendChild(x184);
x182.appendChild(x183);
x185.style.width=(x178-5-8)+"px";
x185.style.height="5px";
x185.style.position="absolute";
x185.style.backgroundRepeat="repeat-x";
x185.style.backgroundImage="url("+MVInfoWindowStyle4.tabContentHeadMidImgURL+")";
x182.appendChild(x185);
x186.style.width="8px";
x186.style.height="5px";
x186.style.position="absolute";
x187.style.width="8px";
x186.appendChild(x187);
x182.appendChild(x186);
x181.appendChild(x182);
var x188=document.createElement("div");
var x189=document.createElement("div");
var x190=document.createElement("div");
var x191=document.createElement("div");
var x192=document.createElement("div");
x188.style.position="absolute";
x188.style.top="10px";
x189.style.width="5px";
x189.style.height=(x179-5-7)+"px";
x189.style.position="absolute";
x189.style.backgroundImage="url("+MVInfoWindowStyle4.tabContentMidStartImgURL+")";
x188.appendChild(x189);
x190.style.width=(x178-5-8)+"px";
x190.style.height=(x179-5-7)+"px";
x190.style.position="absolute";
x190.style.backgroundRepeat="repeat-x";
x190.style.backgroundColor="#F8F8FB";
x190.style.backgroundImage="url("+MVInfoWindowStyle4.tabContentMidMidImgURL+")";
x191.style.overflow="auto";
x191.style.width=(x178-5-8)+"px";
x191.style.height=(x179-5-7-6-9)+"px";
x191.style.position="absolute";
x191.style.top="15px";
x191.style.left="0px";
x191.id="realContentDivId";
x190.appendChild(x191);
x188.appendChild(x190);
x192.style.width="8px";
x192.style.height=(x179-5-7)+"px";
x192.style.position="absolute";
x192.style.backgroundImage="url("+MVInfoWindowStyle4.tabContentMidEndImgURL+")";
x188.appendChild(x192);
x181.appendChild(x188);
var x193=document.createElement("div");
var x194=document.createElement("div");
var x195=MVUtil._f172(MVInfoWindowStyle4.tabContentFooterStartImgURL,true);
var x196=document.createElement("div");
var x197=document.createElement("div");
var x198=MVUtil._f172(MVInfoWindowStyle4.tabContentFooterEndImgURL,true);
x193.style.position="absolute";
x193.style.top=(x179-7+5)+"px";
x194.style.width="6px";
x194.style.height="7px";
x194.style.position="absolute";
x195.style.width="6px";
x194.appendChild(x195);
x193.appendChild(x194);
x196.style.width=(x178-6-8)+"px";
x196.style.height="7px";
x196.style.position="absolute";
x196.style.backgroundRepeat="repeat-x";
x196.style.backgroundImage="url("+MVInfoWindowStyle4.tabContentFooterMidImgURL+")";
x193.appendChild(x196);
x197.style.width="8px";
x197.style.height="7px";
x197.style.position="absolute";
x198.style.width="8px";
x197.appendChild(x198);
x193.appendChild(x197);
x181.appendChild(x193);
if(MVInfoWindowStyle4.pageDirection)
{
x182.style.left="0px";
x188.style.left="0px";
x193.style.left="0px";
x183.style.left="0px";
x189.style.left="0px";
x194.style.left="0px";
x185.style.left="5px";
x186.style.left=(x178-8)+"px";
x190.style.left="5px";
x192.style.left=(x178-8)+"px";
x196.style.left="6px";
x197.style.left=(x178-8)+"px";
}
else
 {
x182.style.right="0px";
x188.style.right="0px";
x193.style.right="0px";
x183.style.right="0px";
x189.style.right="0px";
x194.style.right="0px";
x185.style.right="5px";
x186.style.right=(x178-8)+"px";
x190.style.right="5px";
x192.style.right=(x178-8)+"px";
x196.style.right="6px";
x197.style.right=(x178-8)+"px";
}
return x181;
}
MVInfoWindowStyle4.addCloseButton=function(x199)
{
if(this.hideCloseButton)
return null;
var x200=MVUtil._f172(MVInfoWindowStyle4.closeButtonImgURL,true);
x200.style.width=MVUtil._f26(13);
x200.style.height=MVUtil._f26(13);
var x201=function(x202)
{
MVInfoWindowStyle4.closeButtonImgURL=MVInfoWindowStyle4.closeButtonOverImgURL;
x202=(x202)?x202:((window.event)?event:null);
var x203=MVUtil.getEventSource(x202);
if(x203.tagName=='IMG')
x203.src=MVInfoWindowStyle4.closeButtonImgURL;
else if(x203.tagName=='DIV')
x203.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.closeButtonImgURL;+"', sizingMethod='image');"
}
var x204=function(x205)
{
MVInfoWindowStyle4.closeButtonImgURL=MVInfoWindowStyle4.closeButtonEnableImgURL;
x205=(x205)?x205:((window.event)?event:null);
var x206=MVUtil.getEventSource(x205);
if(x206.tagName=='IMG')
x206.src=MVInfoWindowStyle4.closeButtonImgURL;
else if(x206.tagName=='DIV')
x206.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.closeButtonImgURL;+"', sizingMethod='image');"
}
var x207=function(x208)
{
MVInfoWindowStyle4.closeButtonImgURL=MVInfoWindowStyle4.closeButtonDownImgURL;
x208=(x208)?x208:((window.event)?event:null);
var x209=MVUtil.getEventSource(x208);
if(x209.tagName=='IMG')
x209.src=MVInfoWindowStyle4.closeButtonImgURL;
else if(x209.tagName=='DIV')
x209.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.closeButtonImgURL;+"', sizingMethod='image');"
}
var x210=function(x211)
{
MVInfoWindowStyle4.closeButtonImgURL=MVInfoWindowStyle4.closeButtonOverImgURL;
x211=(x211)?x211:((window.event)?event:null);
var x212=MVUtil.getEventSource(x211);
if(x212.tagName=='IMG')
x212.src=MVInfoWindowStyle4.closeButtonImgURL;
else if(x212.tagName=='DIV')
x212.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
MVInfoWindowStyle4.closeButtonImgURL;+"', sizingMethod='image');"
}
MVUtil.attachEvent(x200,"mouseover",x201);
MVUtil.attachEvent(x200,"mouseout",x204);
MVUtil.attachEvent(x200,"mousedown",x207);
MVUtil.attachEvent(x200,"mouseup",x210);
if(x199!=null)
MVUtil.attachEvent(x200,"click",x199);
return x200;
}
MVInfoWindowStyle4._f460=function(x213,x214)
{
MVInfoWindowStyle4._f947(x213,this.x,this.y,x214);
}
MVInfoWindowStyle4._f947=function(x215,x216,x217,x218)
{
if(this._f941==0)
return ;
var x219=document.getElementById("infowindow4_"+x218);
var x220=x219.style.zIndex-1;
var x221=x219.offsetLeft;
var x222=x219.offsetTop;
x221-=x216;
x222-=x217;
var x223=1;
var x224=1;
var x225=x219.offsetWidth;
var x226=x219.offsetHeight;
var x227=0;
var x228=50;
var x229=260;
var x230=340;
var x231=50;if(this._f942)
{
MVUtil._f201(this._f942);
if(this._f942.parentNode)
this._f942.parentNode.removeChild(this._f942);
}
var x232=document.createElement("DIV");
x232.id=x219.id+'cones';
x232.style.position='absolute';
x232.style.left=x216+'px';
x232.style.top=x217+'px';
x232.style.border='0px solid #000000';
x232.style.zIndex=x220;
this._f942=x232;
x215.appendChild(x232);
zcounter=0;
var x233=x231;var x234=Math.round((this._f941/x231)*7);
var x235=Math.abs(x221/x231);
var x236=Math.abs(x222/x231);
var x237=Math.abs(x235/x236);
var x238=0;
for(var x239=0;x239<x231;x239++)
{
var x240=((x221*1.0/x231)*x239);var x241=((x222*1.0/x231)*x239);x229=x223+Math.abs(((x225-x223)/x231*x239));x230=x224+Math.abs(((x226-x224)/x231*x239));
var x242=document.createElement("DIV");
x242.id=x219.id+'D'+x239;
x242.style.cssText=this._f940;
x242.style.position='absolute';
MVUtil._f705(x242,x240,x241,x229,x230);
x242.style.border='0px solid black';
x242.style.fontSize="1px";
x242.style.lineHeight=0;
x232.appendChild(x242);
MVInfoWindowStyle4.setOpaque(x242,x234);
x242.style.zIndex=zcounter;
zcounter++;
x238++;
x233-=x239;
}
coneDone=true;
}
MVInfoWindowStyle4.setOpaque=function(x243,x244)
{
if(_f65._f66=="IF"){
x243.style.filter='alpha(opacity = '+(x244)+')';
}else if(_f65._f66=="SF"){
x243.style.opacity=x244/100;
}else{
x243.style.MozOpacity=x244/100;
}
}
MVInfoWindowStyle4.sizeChanged=function(x245)
{
var x246=document.getElementById("infowindow4_"+x245);
if(x246)
{
var x247=document.getElementById(x245+"_content");
var x248=document.getElementById(x245+"_title");
if(x247!=null&&x247.parentNode!=null)
{
var x249=x247.parentNode.offsetWidth;
var x250=x247.parentNode.offsetHeight;
if(x248)
{
if(_f65._f66=='IF'&&
x246.style.height!="0px")
x250=x246.offsetHeight;
else
 x250+=x248.offsetHeight+26;
x249=x249+15>x248.offsetWidth+24?x249+15:x248.offsetWidth+24;
}
else
 {
if(_f65._f66=='IF'&&
x246.style.height!="0px")
x250=x246.offsetHeight;
else
 x250+=MVInfoWindowStyle4.TotalMarginHeight;
if(MVUtil._f5(x245,"2"))
x249+=MVInfoWindowStyle4.MultiFeatureListTotalMarginWidth;
else
 x249+=28;
}
if(Math.abs(x249-x246.offsetWidth)>=5)
return true;
if(Math.abs(x250-x246.offsetHeight)>=5)
return true;
}
}
if((x246&&
MVInfoWindowStyle4._f315[x245]&&
Math.abs(MVInfoWindowStyle4._f315[x245]-x246.offsetWidth)<5&&
MVInfoWindowStyle4._f316[x245]&&
Math.abs(MVInfoWindowStyle4._f316[x245]-x246.offsetHeight)<5))
return false;
else
 return true;
}
MVInfoWindowStyle4.clear=function()
{
if(this._f389)
{
MVUtil._f201(this._f389);
this._f389=null;
}
if(this._f942)
MVUtil._f201(this._f942);
this._f942=null;
}
MVInfoWindowStyle4.createContentByDiv=function(x251,x252,x253,x254,x255)
{
var x256=document.createElement("table");
x256.style.position="absolute";
x256.style.zIndex="300";
x256.cellPadding="0";
x256.cellSpacing="0";
var x257=document.createElement("tbody");
x256.appendChild(x257);
var x258=document.createElement("tr");
x257.appendChild(x258);
var x259=document.createElement("td");
x259.rowSpan="3";
x259.style.width=MVUtil._f26(10);
x259.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='10px'>";
x258.appendChild(x259);
var x260=document.createElement("td");
x260.style.height=MVUtil._f26(10);
x260.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='10px'>";
x258.appendChild(x260);
var x261=document.createElement("td");
x261.style.width=MVUtil._f26(5);
x261.rowSpan="3";
x261.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' width='5px'>";
x258.appendChild(x261);
var x262=document.createElement("tr");
x257.appendChild(x262);
var x263=document.createElement("td");
x263.style.verticalAlign="top";
var x264=document.createElement("div");
x264.id=x251+"_content";
x264.appendChild(x252);
x263.appendChild(x264);
x262.appendChild(x263);
var x265=document.createElement("tr");
var x266=document.createElement("td");
x266.style.height=MVUtil._f26(10);
x266.innerHTML="<img src='"+_f65._f141+"transparent.gif"+"' height='10px'>";
x265.appendChild(x266);
x257.appendChild(x265);
if(!x253)
{
x264.style.width=MVUtil._f26(x254-MVInfoWindowStyle4.MultiFeatureListTotalMarginWidth);
x264.style.height=MVUtil._f26(x255-MVInfoWindowStyle4.TotalMarginHeight);
x264.style.overflow="auto";
}
return x256;
}
MVInfoWindowStyle4.getPageDirection=function(x267)
{
if(MVInfoWindowStyle4.pageDirection==null)
{
var x268=document.createElement("table");
var x269=document.createElement("tr");
var x270=document.createElement("td");
var x271=document.createElement("td");
var x272=document.createElement("tbody");
x268.cellSpacing=0;
x268.cellPadding=0;
x270.innerHTML="fsdfsds";
x271.innerHTML="p";
x272.appendChild(x269);
x268.appendChild(x272);
x269.appendChild(x270);
x269.appendChild(x271);
x267.appendChild(x268);
var x273=x270.offsetLeft;
if(x273==0)
MVInfoWindowStyle4.pageDirection=true;
else
 MVInfoWindowStyle4.pageDirection=false;
x267.removeChild(x268);
}
if(!MVInfoWindowStyle4.pageDirection)
{
MVInfoWindowStyle4.tabEnableStartImgURL=_f65._f141+"infoicons/t3_above_start_n_r.png";
MVInfoWindowStyle4.tabEnableMidImgURL=_f65._f141+"infoicons/t3_above_mid_n_r.png";
MVInfoWindowStyle4.tabEnableEndImgURL=_f65._f141+"infoicons/t3_above_end_n_r.png";
MVInfoWindowStyle4.tabDisableStartImgURL=_f65._f141+"infoicons/t3_above_start_d_r.png";
MVInfoWindowStyle4.tabDisableMidImgURL=_f65._f141+"infoicons/t3_above_mid_d_r.png";
MVInfoWindowStyle4.tabDisableEndImgURL=_f65._f141+"infoicons/t3_above_end_d_r.png";
MVInfoWindowStyle4.tabSelectedStartImgURL=_f65._f141+"infoicons/t3_above_start_a_r.png";
MVInfoWindowStyle4.tabSelectedMidImgURL=_f65._f141+"infoicons/t3_above_mid_a_r.png";
MVInfoWindowStyle4.tabSelectedEndImgURL=_f65._f141+"infoicons/t3_above_end_a_r.png";
MVInfoWindowStyle4.tabContentHeadStartImgURL=_f65._f141+"infoicons/ptts_r.png";
MVInfoWindowStyle4.tabContentHeadMidImgURL=_f65._f141+"infoicons/ptt_r.png";
MVInfoWindowStyle4.tabContentHeadEndImgURL=_f65._f141+"infoicons/ptte_r.png";
MVInfoWindowStyle4.tabContentMidStartImgURL=_f65._f141+"infoicons/pts_r.png";
MVInfoWindowStyle4.tabContentMidMidImgURL=_f65._f141+"infoicons/ptc_r.png";
MVInfoWindowStyle4.tabContentMidEndImgURL=_f65._f141+"infoicons/pte_r.png";
MVInfoWindowStyle4.tabContentFooterStartImgURL=_f65._f141+"infoicons/ptbs_r.png";
MVInfoWindowStyle4.tabContentFooterMidImgURL=_f65._f141+"infoicons/ptb_r.png";
MVInfoWindowStyle4.tabContentFooterEndImgURL=_f65._f141+"infoicons/ptbe_r.png";
}
}
MVInfoWindowStyle4.getRealWithOfOneTab=function(x274,x275,x276)
{
var x277=0;
var x278=document.createElement("a");
var x279=document.createElement("div");
x279.style.position="absolute";
x278.style.cursor="pointer";
x278.style.fontFamily="Tahoma";
x278.style.fontSize="11px";
x278.style.fontWeight="bold";
x274.appendChild(x279);
x279.appendChild(x278);
var x280=(x276-9-36)/6;
x280=x280-x280%1+1;
if(x280>x275.title.length)
x280=x275.title.length;
x278.innerHTML=x275.title.replace(/\s/g,"&nbsp;");
x277=x279.offsetWidth+9+36;
while(x277>x276){
var x281=x275.title.substring(0,x280).replace(/\s/g,"&nbsp;")+"..";
x278.innerHTML=x281;
x277=x279.offsetWidth+9+36;
x275.showTitle=x281;
x280--;
}
x274.removeChild(x279);
return x277;
}
MVInfoWindowStyle4.getOrignalWithOfOneTab=function(x282,x283)
{
var x284=0;
var x285=document.createElement("a");
var x286=document.createElement("div");
var x287=10;
var x288=20;
x286.style.position="absolute";
x285.style.cursor="pointer";
x285.style.fontFamily="Tahoma";
x285.style.fontSize="11px";
x285.style.fontWeight="bold";
x285.style.whiteSpace="nowrap";
x282.appendChild(x286);
x286.appendChild(x285);
x285.innerHTML=x283.title.replace(/\s/g,"&nbsp;");
x284=x286.offsetWidth+x287+x288;
x282.removeChild(x286);
return x284;
}
MVInfoWindowStyle4.groupingTabs=function(x289,x290)
{
var x291;
var x292=new Array();
var x293;
var x294=0;
var x295=false;
for(var x296=0;x296<x289.length;x296++){
x292.push([x296,x289[x296]]);
x294=x294+x289[x296];
}
x292=x292.sort(
function(x297,x298){
return x298[1]-x297[1];
}
);
if(x294%x290==0)
x293=x294/x290;
else
 x293=(x294-x294%x290)/x290+1;
for(var x299=1;x299<=x289.length;x299++){
var x300=new Array(x299);
var x301=0;
var x302=x292.slice(0);
x291=new Array(x299);
for(var x303=0;x303<x291.length;x303++){
x291[x303]=new Array();
x300[x303]=0;
}
var x304=0;
while(true)
{
for(var x305=x304;x305<x299;x305++)
{
for(var x306=0;x306<x302.length;x306++)
{
x300[x305]+=x302[x306][1];
if(x301!=0)
x300[x305]-=19;
if(x300[x305]>x290)
{
x300[x305]-=x302[x306][1];
if(x301!=0)
x300[x305]+=19;
if(x306==x302.length-1)
x304=x305+1;
}
else
 {
x291[x305][x301]=x302[x306][0];
x302.splice(x306,1);
break;
}
}
}
if(x302.length==0)break;
if(x304==x299)break;
x301++;
}
if(x302.length==0)break;
}
return x291;
}
function MVNSDP(x0)
{
this.nsdp_id=x0;
this.nsdp_theme=null;
this.nsdp_keycol=null;
this.nsdp_rendersty=null;
this.nsdp_labelsty=null;
this.nsdp_params=null;
this.nsdp_timeout=20;
this.nsdp_smfo=true;
}
MVNSDP.prototype.setTheme=function(x0)
{
this.nsdp_theme=x0;
}
MVNSDP.prototype.setKeyColumn=function(x1)
{
this.nsdp_keycol=x1;
}
MVNSDP.prototype.setRenderStyle=function(x2)
{
this.nsdp_rendersty=x2;
}
MVNSDP.prototype.setLabelStyle=function(x3)
{
this.nsdp_labelsty=x3;
}
MVNSDP.prototype.setShowMatchedFeatureOnly=function(x4)
{
this.nsdp_smfo=x4;
}
MVNSDP.prototype.setParameters=function(x5)
{
this.nsdp_params=x5;
}
MVNSDP.prototype.setTimeout=function(x6)
{
this.nsdp_timeout=x6;
}
MVNSDP.prototype.getFlatString=function()
{
var x7="{";
x7+="\"nsdp_id\":"+"\""+this.nsdp_id+"\",";
x7+="\"nsdp_theme\":"+"\""+this.nsdp_theme+"\",";
x7+="\"nsdp_keycol\":"+"\""+this.nsdp_keycol+"\",";
if(this.nsdp_smfo!=null&&this.nsdp_smfo==false)
x7+="\"nsdp_smfo\":"+"\""+this.nsdp_smfo+"\",";
if(this.nsdp_rendersty!=null)
x7+="\"nsdp_rendersty\":"+"\""+this.nsdp_rendersty+"\",";
if(this.nsdp_labelsty!=null)
x7+="\"nsdp_labelsty\":"+"\""+this.nsdp_labelsty+"\",";
x7+="\"nsdp_timeout\":"+"\""+this.nsdp_timeout+"\"";
if(this.nsdp_params==null)
{
return x7+="}";
}
x7+=",\"nsdp_params\":[";
var x8=0;
for(p in this.nsdp_params)
{
var x9=this.nsdp_params[p];
var x10=MVUtil._f43(x9,"\"","\\\"");
x7+="{"+"\""+p+"\":"+"\""+x10+"\"},";
x8++;
}
if(x8>0)
x7=x7.substr(0,x7.length-1);
x7+="]}";
return x7;
}
MVNSDP.prototype.getXML=function(x11)
{
var x12="<ns_data_provider provider_id=\""+this.nsdp_id+"\" ";
x12+="time_out=\""+this.nsdp_timeout+"\">";
x12+="<for_theme name=\""+this.nsdp_theme+"\"/>";
var x13=null;
if(this.nsdp_rendersty!=null)
x13=this.nsdp_rendersty;
else if(x11&&x11._f108!=null)
x13=x11._f108;
if(x13)
x12+="<custom_rendering_style name=\""+x13+"\"/>";
x12+="<join spatial_key_column=\""+this.nsdp_keycol+"\"/>";
if(this.nsdp_smfo!=null&&this.nsdp_smfo==false)
x12+="<display_unmatched_features>true</display_unmatched_features>";
if(this.nsdp_params!=null)
{
x12+="<parameters>";
for(p in this.nsdp_params)
{
var x14=null;
if(p=="xml")
x14=this.nsdp_params[p].replace(/</g,"&lt;");
else
 x14=this.nsdp_params[p];
x12+="<parameter name=\""+p+"\" value=\""+x14+"\"/>";
}
x12+="</parameters>";
}
x12+="</ns_data_provider>";
return x12;
}
function MVXMLStyle(x0,x1)
{
this.name=x0;
this.xmlDef=x1;
}
MVXMLStyle.prototype.getXMLString=function()
{
var x0='<style name="'+this.name+'">'+
this.xmlDef+
'</style>';
return x0;
}
function MVStyleColor(x0,x1,x2)
{
this.name=x0;
this.type="color";
this.description=null;
if(x1==null)
this.fill=null;
else if(x1.charAt(0)=='#')
this.fill=x1.substring(1,x1.length);
else
 this.fill=x1;
this.fill_opacity=255;
if(x2==null)
this.stroke=null;
else if(x2.charAt(0)=='#')
this.stroke=x2.substring(1,x2.length);
else
 this.stroke=x2;
this.stroke_opacity=255;
this.stroke_width=1;
}
MVStyleColor.prototype.setStroke=function(x0)
{
if(x0==null)
this.stroke=null;
else if(x0.charAt(0)=='#')
this.stroke=x0.substring(1,x0.length);
else
 this.stroke=x0;
}
MVStyleColor.prototype.setStrokeOpacity=function(x1)
{
this.stroke_opacity=x1;
}
MVStyleColor.prototype.setFill=function(x2)
{
if(x2==null)
this.fill=null;
else if(x2.charAt(0)=='#')
this.fill=x2.substring(1,x2.length);
else
 this.fill=x2;
}
MVStyleColor.prototype.setFillOpacity=function(x3)
{
this.fill_opacity=x3;
}
MVStyleColor.prototype.setDescription=function(x4)
{
this.description=x4;
}
MVStyleColor.prototype.setStrokeWidth=function(x5)
{
this.stroke_width=x5;
}
MVStyleColor.prototype.getXMLString=function()
{
var x6=(this.stroke==null)?"":"stroke:0x"+this.stroke+";";
var x7=(this.fill==null)?"":"fill:0x"+this.fill+";";
var x8=this.stroke_opacity<255?"stroke-opacity:"+this.stroke_opacity+";":"";
var x9=this.fill_opacity<255?"fill-opacity:"+this.fill_opacity+";":"";
var x10=this.stroke_width!=1?"stroke-width:"+this.stroke_width:"";
var x11='<style name="'+this.name+'">'+
'<svg width="1in" height="1in">'+
'<g class="color" style="'+x6+x8+x7+x9+x10+'">'+
'</g></svg></style>';
return x11;
}
function MVStyleMarker(x0,x1)
{
this.name=x0;
if(x1==null)
this.type="image";
else
 this.type=x1.toLowerCase();
this.description=null;
this.fill=null;
this.fill_opacity=255;
this.stroke=null;
this.stroke_opacity=255;
this.stroke_width=1;
this.imageUrl=null;
this.vector=null;
this.width=16;
this.height=16;
}
MVStyleMarker.prototype.setName=function(x0)
{
if(x0!=null)
this.name=x0;
}
MVStyleMarker.prototype.setSize=function(x1,x2)
{
if(x1!=null)
this.width=x1;
if(x2!=null)
this.height=x2;
}
MVStyleMarker.prototype.setImageUrl=function(x3)
{
if(x3==null)
this.imageUrl=null;
else
 {
if(x3.indexOf("://")<0)
{
if(x3.indexOf("/")==0)
x3=document.location.protocol+"//"+document.location.host+x3;
else
 {
var x4=document.location+"";
var x5=x4.lastIndexOf("/");
if(x5>0)
x4=x4.substring(0,x5+1);
x3=x4+x3;
}
}
this.imageUrl=x3;
}
}
MVStyleMarker.prototype.setStrokeColor=function(x6,x7)
{
if(x6==null)
this.stroke=null;
else if(x6.charAt(0)=='#')
this.stroke=x6.substring(1,x6.length);
else
 this.stroke=x6;
this.stroke_opacity=x7;
}
MVStyleMarker.prototype.setFillColor=function(x8,x9)
{
if(x8==null)
this.fill=null;
else if(x8.charAt(0)=='#')
this.fill=x8.substring(1,x8.length);
else
 this.fill=x8;
if(x9!=null)
this.fill_opacity=x9;
}
MVStyleMarker.prototype.setDescription=function(x10)
{
this.description=x10;
}
MVStyleMarker.prototype.setStrokeWidth=function(x11)
{
this.stroke_width=x11;
}
MVStyleMarker.prototype.setVectorShape=function(x12)
{
if(x12==null)
this.vector=null;
else
 this.vector=x12;
}
MVStyleMarker.prototype.getXMLString=function()
{
var x13="width:"+this.width+";height:"+this.height+";";
var x14=(this.stroke==null)?"":"stroke:0x"+this.stroke+";";
var x15=(this.fill==null)?"":"fill:0x"+this.fill+";";
var x16=this.stroke_opacity<255?"stroke-opacity:"+this.stroke_opacity+";":"";
var x17=this.fill_opacity<255?"fill-opacity:"+this.fill_opacity+";":"";
var x18=this.stroke_width!=1?"stroke-width:"+this.stroke_width:"";
var x19="";
if(this.type=="image")
{
x19='  <image_marker url="'+this.imageUrl+'" />';
}
else if(this.type=="vector")
{
if(this.vector.charAt(0)=='c'||this.vector.charAt(0)=='C')
{
x19='  <circle cx="0" cy="0" r="1"/>';
}
else
 {
x19='  <polyline points="'+this.vector+'"/>';
}
}
var x20='<style name="'+this.name+'">'+
'<svg width="1in" height="1in">'+
'<g class="marker" style="'+x13+x14+x16+x15+x17+x18+'">'+
x19+
'</g></svg></style>';
return x20;
}
function MVBucketSeries(x0)
{
this._f568=null;
this._f569=new Array();
this._f567=x0;
if(x0!="SCHEME_CUSTOM"&&x0!="SCHEME_EQUAL_INTERVAL")
this._f567="SCHEME_CUSTOM";
}
MVBucketSeries.prototype.setBuckets=function(x0)
{
this._f569=x0;
}
MVBucketSeries.prototype.getBuckets=function()
{
return this._f569;
}
MVBucketSeries.prototype.getScheme=function()
{
return _f567;
}
MVBucketSeries.prototype.setDefaultRenderingStyle=function(x1)
{
this._f568=x1;
}
MVBucketSeries.prototype.getXMLString=function()
{
var x2=(this._f568==null)?"":' default_style="'+this._f568+'" ';
var x3="<Buckets"+x2+">";
for(var x4=0;x4<this._f569.length;x4++)
{
var x5=this._f569[x4];
if(x5!=null)
x3+=x5.getXMLString();
}
x3+="</Buckets>";
return x3;
}
function MVBucketStyle(x0,x1)
{
this.name=x0;
this._f569=x1;
}
MVBucketStyle.prototype.getXMLString=function()
{
var x0='<style name="'+this.name+'"><AdvancedStyle><BucketStyle>';
x0+=this._f569.getXMLString()+"</BucketStyle></AdvancedStyle></style>";
return x0;
}
function MVNumericRangedBucket(x0,x1,x2,x3)
{
this.low=x0;
this.high=x1;
this.renderingStyle=x2;
this.label=x3;
}
MVNumericRangedBucket.prototype.getXMLString=function()
{
var x0=(this.label==null)?"":'label="'+this.label+'" ';
var x1="<RangedBucket "+x0;
var x2=(this.low==null)?"":'low="'+this.low+'" ';
var x3=(this.high==null)?"":'high="'+this.high+'" ';
var x4=(this.renderingStyle==null)?"":'style="'+this.renderingStyle+'" ';
x1+=x2+x3+x4;
x1+="/>";
return x1;
}
function MVMapDecoration(x0,x1,x2,x3,x4,x5,x6)
{
this.mapControl=null;
this.html=null;
if(x0)
{
if(x0._f213)
{
x0._f628=true;
x0.mapDec=this;
this.mapControl=x0;
}
else if(x0.substr)
this.html=x0;
}
this._f629=false;
if(typeof(x1)!="number"&&typeof(x2)!="number")
this._f629=true;
if(typeof(x1)=="number")
this.left=x1;
else
 {
this.left=1;
if(!x5&&x3)
x5=-x3;
}
if(typeof(x2)=="number")
this.top=x2;
else
 {
this.top=1;
if(!x6&&x4)
x6=-x4;
}
this.width=x3;
this.height=x4;
this._f630=document.createElement("div");
this._f630.id=null;
this._f630.isMapDecoration=true;
this.parent=null;
this._f631=false;
this._f632=false
this._f93=new Object();
this._f633=null;
this._f634=null;
this._f635=null;
this._f636=null;
this.afterCollapseListener=null;
this._f637=null;
this.afterRestoreListener=null;
this._f638=null;
this._f639=null;
this._f640=null;
this.id=null;
this.visible=true;
this.xOffset=0;
this.yOffset=0;
this._f641=(_f65._f66=="IF")?_f65._f623+2:_f65._f623;
this._f642=0;
this._f643=0;
this._f644=40;
this._f645=0;
this._f646=null;
this.icon=null;
this._f647=null;
this._f174=false;
this._f648=false;
this._f649=null;
this._f650=null;
this._f651=null;
this.buffer=(_f65._f66=="IF")?5:7;
this.collapsed=false;
this._f429=0;
this._f428=0;
this.setOffset(x5,x6);
this._f652=null;
this._f653=false;
this.cursorStyle=null;
this.style={borderStyle:"1px solid #636661",
titleBgImg:"title_bg.png",titleBgImgMO:"title_bg_over.png",titleBgImgMD:"title_bg_over.png",
minBtnImg:"button_minimize.gif",minBtnImgMO:"button_minimize.gif",minBtnImgMD:"button_minimize.gif",
resBtnImg:"button_restore.gif",resBtnImgMO:"button_restore.gif",resBtnImgMD:"button_restore.gif",
dragIconImg:"pan.png"};
}
MVMapDecoration.prototype.setOffset=function(x0,x1)
{
if(!x0)
x0=0;
if(!x1)
x1=0;
this.xOffset=x0;
this.yOffset=x1;
}
MVMapDecoration.prototype.setPosition=function(x2,x3,x4,x5)
{
this._f629=false;
if(!x4)
x4=0;
if(!x5)
x5=0;
this.xOffset=x4;
this.yOffset=x5;
if(typeof(x2)=="number")
this.left=x2;
else
 {
this.left=1;
if(!x4&&this.width)
x4=-this.width;
}
if(typeof(x3)=="number")
this.top=x3;
else
 {
this.top=1;
if(!x5&&this.height)
x5=-this.height;
}
if(!this.parent)
return ;
if(this._f631)
{
if(!this.collapsed)
this._f654(this._f655);
}
else
 this._f654(this._f630);
}
MVMapDecoration.prototype.setPrintable=function(x6)
{
this._f632=x6;
}
MVMapDecoration.prototype.setCollapsible=function(x7,x8,x9)
{
this._f631=x7;
this._f648=x8;
if(x9!=undefined||x9)
{
if(x9.borderStyle)
this.style.borderStyle=x9.borderStyle;
if(x9.titleBgImg)
this.style.titleBgImg=x9.titleBgImg;
if(x9.titleBgImgMO)
this.style.titleBgImgMO=x9.titleBgImgMO;
else if(x9.titleBgImg)
this.style.titleBgImgMO=x9.titleBgImg;
if(x9.titleBgImgMD)
this.style.titleBgImgMD=x9.titleBgImgMD;
else
 this.style.titleBgImgMD=this.style.titleBgImgMO;
if(x9.minBtnImg)
this.style.minBtnImg=x9.minBtnImg;
if(x9.minBtnImgMO)
this.style.minBtnImgMO=x9.minBtnImgMO;
else if(x9.minBtnImg)
this.style.minBtnImgMO=x9.minBtnImg;
if(x9.minBtnImgMD)
this.style.minBtnImgMD=x9.minBtnImgMD;
else
 this.style.minBtnImgMD=this.style.minBtnImgMO;
if(x9.resBtnImg)
this.style.resBtnImg=x9.resBtnImg;
if(x9.resBtnImgMO)
this.style.resBtnImgMO=x9.resBtnImgMO;
else if(x9.resBtnImg)
this.style.resBtnImgMO=this.style.resBtnImg;
if(x9.resBtnImgMD)
this.style.resBtnImgMD=x9.resBtnImgMD;
else
 this.style.resBtnImgMD=this.style.resBtnImgMO;
}
}
MVMapDecoration.prototype.setTitleBar=function(x10,x11,x12)
{
if(x10)
this._f649=x10;
if(x11)
if(x11)
{
this._f650=x11;
this.style.resBtnImg=x11;
this.style.minBtnImg=x11;
}
if(!x12&&x10)
x12=x10;
this._f651=x12;
}
MVMapDecoration.prototype.setVisible=function(x13)
{
this.visible=x13;
if(this.parent!=null)
{
if(this.parent._f88)
this._f656();
if(this._f632)
this.parent._f657();
if(this._f630._f226||this.collapsed)
this.parent._f658(this.parent);
if(x13&&this._f629&&!this.collapsed)
this.parent._f658(this.parent);
}
}
MVMapDecoration.prototype.isVisible=function()
{
return this.visible;
}
MVMapDecoration.prototype.addEventListener=function(x14,x15)
{
this.setEventListener(x14,x15);
}
MVMapDecoration.prototype.setEventListener=function(x16,x17)
{
if(x16==MVEvent.MOUSE_CLICK)
this._f633=x17;
else if(x16==MVEvent.MOUSE_OVER)
this._f634=x17;
else if(x16==MVEvent.MOUSE_OUT)
this._f635=x17;
else if(x16==MVEvent.COLLAPSE)
this._f636=x17;
else if(x16==MVEvent.AFTER_COLLAPSE)
this.afterCollapseListener=x17;
else if(x16==MVEvent.RESTORE)
this._f637=x17;
else if(x16==MVEvent.AFTER_RESTORE)
this.afterRestoreListener=x17;
else if(x16==MVEvent.DRAG_START)
this._f638=x17;
else if(x16==MVEvent.DRAG)
this._f639=x17;
else if(x16==MVEvent.DRAG_END)
this._f640=x17;
}
MVMapDecoration.prototype.attachEventListener=function(x18,x19)
{
MVUtil.attachEventListener(this._f93,x18,x19)
}
MVMapDecoration.prototype.detachEventListener=function(x20,x21)
{
MVUtil.detachEventListener(this._f93,x20,x21);
}
MVMapDecoration.prototype.getContainerDiv=function()
{
return this._f630;
}
MVMapDecoration.prototype.enableEventPropagation=function(x22)
{
this._f174=x22;
}
MVMapDecoration.prototype.isCollapsed=function()
{
return this.collapsed;
}
MVMapDecoration.prototype.collapse=function()
{
if(this.collapsed)
return ;
this._f630.style.visibility="hidden";
MVUtil._f70(this._f655,
this.parent._f106()-this._f641-this.buffer,
this.parent._f107()-this._f641-this.buffer);
this._f659=false;
if(this._f647)
clearTimeout(this._f647);
this._f647=null;
this.collapsed=true;
this._f655.style.visibility="hidden";
if(this.visible)
this._f660();
if(this.afterCollapseListener)
this.afterCollapseListener();
MVUtil.runListeners(this._f93,MVEvent.COLLAPSE);
}
MVMapDecoration.prototype.setMouseCursorStyle=function(x23)
{
this.cursorStyle=x23;
if(this.contentDiv)
MVUtil._f162(this.contentDiv,x23);
else if(this._f630)
MVUtil._f162(this._f630,x23);
}
MVMapDecoration.prototype.isDraggable=function()
{
return this._f653;
}
MVMapDecoration.prototype.setDraggable=function(x24)
{
this._f629=false;
this._f653=x24;
if(this.parent&&this==this.parent._f661)
this._f183();
if(this.parent)
{
var x25=this._f630;
if(this._f631)
x25=this._f646;
if(this._f653)
MVUtil._f162(x25,"move");
else
 MVUtil._f162(x25,"default");
}
}
MVMapDecoration.prototype.getPosition=function()
{
var x26=this._f655;
if(!this._f631)
x26=this._f630;
var x27=this.collapsed?this._f428:MVUtil._f80(x26);
var x28=this.collapsed?this._f429:MVUtil._f81(x26);
return {x:x27,y:x28};
}
MVMapDecoration.prototype._f654=function(x29,x30)
{
var x31=(this.top==1)?this.xOffset-this.buffer/2:this.xOffset;
var x32=(this.top==1)?this.yOffset-this.buffer/2:this.yOffset;
this._f429=this.parent._f107()*this.top+x32;
this._f428=this.parent._f106()*this.left+x31;
if(!x30)
{
x29.style.top=MVUtil._f26(this._f429);
x29.style.left=MVUtil._f26(this._f428);
}
this._f645=this._f644*(this.parent._f107()-this._f429)/(this.parent._f106()-this._f428);
this._f642=Math.ceil(this._f644*this.width/(this.parent._f106()-this._f428));
this._f643=Math.ceil(this._f644*this.height/(this.parent._f106()-this._f428));
}
MVMapDecoration.prototype.init=function(id,x33,x34)
{
this.id=id;
this.parent=x33;
this._f630.id=this.id;
this._f630.style.zIndex=2000;
this._f630.style.position="absolute";
if(this._f631)
{
this._f655=document.createElement("div");
this._f655.style.position="absolute";
this._f655.style.zIndex=2000;
this._f655.style.width=(this.width+this.buffer)+"px";
this._f655.style.height=(this.height+this.buffer)+"px";
this._f655.style.backgroundColor="white";
x34.appendChild(this._f655);
this.realContdiv=document.createElement("div");
this.realContdiv.style.position="absolute";
this.realContdiv.style.zIndex=2000;
this.realContdiv.style.left="3px";
this.realContdiv.style.top="3px";
this.realContdiv.style.width=this.width+"px";
this.realContdiv.style.height=this.height+"px";
this.realContdiv.style.border=this.style.borderStyle;
this.realContdiv.style.backgroundColor="white";
this._f655.appendChild(this.realContdiv);
var x35=document.createElement("div");
x35.style.position="absolute";
x35.style.left=MVUtil._f26(0);
x35.style.top=MVUtil._f26(0);
x35.style.width="100%";
x35.style.height=this._f641+2+"px";
x35.style.overflow="hidden";
this._f646=document.createElement("div");
this._f646.style.position="absolute";
this._f646.style.left=MVUtil._f26(-1);
this._f646.style.top=MVUtil._f26(-1);
this._f646.style.width="110%";
this._f646.style.height=this._f641+"px";
this._f646.style.border=this.style.borderStyle;
if(this._f651)
this._f646.title=this._f651;
x35.appendChild(this._f646);
this.realContdiv.appendChild(x35);
this.titleBg=document.createElement("img");
this.titleBg.style.width="100%";
this.titleBg.style.height="100%";
this.titleBg.src=MVUtil.getImageURL(this.style.titleBgImg);
this._f646.appendChild(this.titleBg);
var x36=this;
var x37=document.createElement("img");
this.icon=x37;
x37.style.position="absolute";
x37.style.left=MVUtil._f26(2);
x37.style.top=MVUtil._f26(1);
x37.style.height=MVUtil._f26(this._f641-3);
x37.style.width=MVUtil._f26(this._f641-3);
this._f646.appendChild(x37);
MVUtil.setListener(this._f646,"mousedown",function(x38)
{
if(x36._f653)
{
x36.parent._f661=x36;
x36.dragStartMouseLoc=MVUtil._f181(x38);
x36.dragStartLeft=MVUtil._f80(x36._f655);
x36.dragStartTop=MVUtil._f81(x36._f655);
MVUtil._f162(x36._f646,"move");
if(x36._f638)
x36._f638(x36.getPosition());
MVUtil.runListeners(x36._f93,MVEvent.AFTER_RESTORE,[x36.getPosition()]);
}
MVUtil._f175(x38);
});
if(this._f653)
MVUtil._f162(this._f646,"move");
MVUtil._f162(x37,"pointer");
this.setIconImageListeners(false);
if(this._f649)
{
var x39=document.createElement("div");
x39.style.position="absolute";
x39.style.left=MVUtil._f26(this._f641);
x39.style.top=MVUtil._f26(-1);
x39.style.width=MVUtil._f26(this.width-2*this._f641);
x39.style.height=MVUtil._f26(this._f641);
x39.style.fontSize=MVUtil._f26(this._f641-(_f65._f66=="IF"?3:2));
this._f646.appendChild(x39);
x39.innerHTML="<center>"+this._f649+"</center>";
}
this._f630.style.left=MVUtil._f26(0);
this._f630.style.top=this._f641+((_f65._f66=="IF")?-1:1)+"px";
this._f630.style.border=MVUtil._f26(0);
if(_f65._f66=="NS"||_f65._f66=="IF")
{
this._f630.style.width=this.width-2+"px"
this._f630.style.height=(this.height-this._f641-1)+"px";
}
else
 {
this._f630.style.width=this.width-2+"px"
this._f630.style.height=(this.height-this._f641-2)+"px";
}
if(this.html)
this._f630.innerHTML=this.html;
this.realContdiv.appendChild(this._f630);
this._f659=true;
this.n=(this.height-this._f641)/this._f643+1;
this._f160(this.realContdiv);
this._f654(this._f655);
if(this._f648)
this.collapse();
else if(this._f630._f226||this._f629)
this.parent._f658(this.parent);
}
else
 {
if(this._f629)
this.parent._f658(this.parent);
if(this.html)
this._f630.innerHTML=this.html;
x34.appendChild(this._f630);
this._f654(this._f630);
if(this.width)
this._f630.style.width=MVUtil._f26(this.width);
if(this.height)
this._f630.style.height=MVUtil._f26(this.height);
this._f160(this._f630);
var x36=this;
var x40=document.createElement("img");
x40.src=MVUtil.getImageURL(this.style.dragIconImg);
MVUtil._f662(x40);
x40.style.zIndex=9999;
x40.style.left=MVUtil._f26(0);
x40.style.top=MVUtil._f26(-20);
x40.style.visibility="hidden";
if(_f65._f66=="NS")
{
MVUtil.setListener(x40,"mousedown",function(x41)
{
if(x36._f653)
{
x36.parent._f661=x36;
x36.dragStartMouseLoc=MVUtil._f181(x41);
x36.dragStartLeft=MVUtil._f80(x36._f630);
x36.dragStartTop=MVUtil._f81(x36._f630);
if(x36._f638)
x36._f638(x36.getPosition());
MVUtil.runListeners(x36._f93,MVEvent.AFTER_RESTORE,[x36.getPosition()]);
MVUtil._f175(x41);
}
});
}
this._f630.appendChild(x40);
var x42=this._f630.onmouseover;
this._f630.onmouseover=function(x43)
{
if(x42)
x42(x43);
if(x36._f653)
x40.style.visibility="visible";
};
var x44=this._f630.onmouseout;
this._f630.onmouseout=function(x45)
{
if(x44)
x44(x45);
if(x36.parent._f661!=x36)
x40.style.visibility="hidden";
};
if(this._f653)
MVUtil._f162(this._f630,"move");
else
 MVUtil._f162(this._f630,"default");
MVUtil.setListener(this._f630,"mousedown",function(x46)
{
if(x36._f653)
{
x36.parent._f661=x36;
x36.dragStartMouseLoc=MVUtil._f181(x46);
x36.dragStartLeft=MVUtil._f80(x36._f630);
x36.dragStartTop=MVUtil._f81(x36._f630);
if(x36._f638)
x36._f638(x36.getPosition());
MVUtil.runListeners(x36._f93,MVEvent.AFTER_RESTORE,[x36.getPosition()]);
MVUtil.trapEvent(x46);
}
else if(!x36._f174)
MVUtil.trapEvent(x46);
});
}
if(this.mapControl)
{
if(this.mapControl.setMouseCursorStyle&&this.cursorStyle)
this.mapControl.setMouseCursorStyle(this.cursorStyle,"default");
this.mapControl.init(this._f630,x33);
this.mapControl._f628=true;
}
if(!this._f648)
this._f656();
}
MVMapDecoration.prototype._f160=function(x47)
{
var x48=this;
var x49=function(x50)
{
if(!x48._f174)
MVUtil.trapEvent(x50);
}
MVUtil.attachEvent(x47,"click",function(x51)
{
x49(x51);
if(x48._f633)
{
x48.parent._f183();
x48._f633();
}
if(x48._f93[MVEvent.MOUSE_CLICK]!=null&&x48._f93[MVEvent.MOUSE_CLICK].length!=0)
{
x48.parent._f183();
MVUtil.runListeners(x48._f93,MVEvent.MOUSE_CLICK);
}
},true);
x47.onmouseover=function(x52)
{
x49(x52);
if(x48._f634)
x48._f634(x52);
MVUtil.runListeners(x48._f93,MVEvent.MOUSE_OVER,[x52]);
};
x47.onmouseout=function(x53)
{
x49(x53);
if(x48._f635)
x48._f635(x53);
MVUtil.runListeners(x48._f93,MVEvent.MOUSE_OUT,[x53]);
};
x47.ondblclick=x49;
MVUtil.setListener(x47,"mousedown",x49);
MVUtil.setListener(x47,"mouseup",function(x54)
{
x49(x54);
if(x48._f653)
x48._f183();
});
x47.onkeyup=x49
if(_f65._f66=="OS")
x47.onkeypress=x49;
else
 x47.onkeydown=x49;
if(_f65._f66=="IF")
{
x47.oncontextmenu=x49;
x47.onselectstart=x49;
}
}
MVMapDecoration.prototype.setIconImageListeners=function(x55)
{
var x56;
if(this._f650)
x56=this._f650;
else if(x55)
x56=MVUtil.getImageURL(this.style.resBtnImg);
else
 x56=MVUtil.getImageURL(this.style.minBtnImg);
var x57=null;
if(x55)
x57=this._f652;
else
 x57=this.icon;
x57.src=x56;
x57.width=_f65._f623;
x57.height=_f65._f624;
var x58=this;
if(x55)
{
x57.style.height=MVUtil._f26(this._f641-3);
x57.style.width=MVUtil._f26(this._f641-3);
x57.parentNode.onmouseover=MVUtil._f103(x57.parentNode,function()
{
x57.parentNode.style.backgroundImage="url("+MVUtil.getImageURL(x58.style.titleBgImgMO)+")";
x57.src=MVUtil.getImageURL(x58.style.resBtnImgMO);
});
x57.parentNode.onmouseout=MVUtil._f103(x57.parentNode,function()
{
x57.parentNode.style.backgroundImage="url("+MVUtil.getImageURL(x58.style.titleBgImg)+")";
x57.src=MVUtil.getImageURL(x58.style.resBtnImg);
});
MVUtil.setListener(x57,"mousedown",MVUtil._f103(x57.parentNode,function()
{
x57.parentNode.style.backgroundImage="url("+MVUtil.getImageURL(x58.style.titleBgImgMD)+")";
x57.src=MVUtil.getImageURL(x58.style.resBtnImgMD);
}));
var x59=this;
MVUtil.attachEvent(x57.parentNode,"click",MVUtil._f103(x57.parentNode,function(x60)
{
MVUtil._f175(x60);
x59._f663();
}),true);
}
else
 {
var x61=this.titleBg;
x57.parentNode.onmouseover=MVUtil._f103(x57.parentNode,function()
{
x61.src=MVUtil.getImageURL(x58.style.titleBgImgMO);
if(x55)
x57.src=MVUtil.getImageURL(x58.style.resBtnImgMO);
else
 x57.src=MVUtil.getImageURL(x58.style.minBtnImgMO);
});
x57.parentNode.onmouseout=MVUtil._f103(x57.parentNode,function()
{
x61.src=MVUtil.getImageURL(x58.style.titleBgImg);
x57.src=MVUtil.getImageURL(x58.style.minBtnImg);
});
MVUtil.setListener(x57,"mousedown",MVUtil._f103(x57.parentNode,function()
{
x61.src=MVUtil.getImageURL(x58.style.titleBgImgMD);
x57.src=MVUtil.getImageURL(x58.style.minBtnImgMD);
}));
var x59=this;
MVUtil.attachEvent(x57,"click",MVUtil._f103(x57,function()
{
x59._f663();
}),true);
}
}
MVMapDecoration.prototype._f233=function()
{
if(this.mapControl)
this.mapControl._f233();
if(this._f652)
{
this._f652.parentNode.parentNode.removeChild(this._f652.parentNode);
MVUtil._f201(this._f652.parentNode,this.parent._f7);
this._f652=null;
}
this.parent=null;
}
MVMapDecoration.prototype._f664=function()
{
this.setPosition(this.left,this.top,this.xOffset,this.yOffset);
}
MVMapDecoration.prototype._f665=function()
{
var x62=document.createElement("div");
x62.innerHTML=this.html;
x62.style.zIndex=2000;
x62.style.position="absolute";
if(this.collasible)
{
this._f666.style.right=MVUtil._f26(0);
this._f666.style.bottom=MVUtil._f26(0);
this._f666.style.width=MVUtil._f26(width);
this._f666.style.height=MVUtil._f26(height-this._f641);
this._f666.style.border="1px solid black";
this._f666.style.backgroundColor="white";
}
else{
this._f654(x62);
if(this.width)
x62.style.width=this.width;
if(this.height)
x62.style.height=this.height;
return x62;
}
}
MVMapDecoration.prototype._setTimeoutDispatcher=function(func)
{
eval(func);
}
MVMapDecoration.prototype._f656=function()
{
if(this.visible)
this._f630.style.visibility="visible";
else
 this._f630.style.visibility="hidden";
if(this._f631)
{
if(this.visible&&!this.collapsed)
this._f655.style.visibility="visible";
else
 this._f655.style.visibility="hidden";
if(!this.collapsed&&this.parent._f225&&this.parent._f225._f214&&
this._f630._f226&&this.parent)
{
this.parent._f225._f232();
}
if(this._f652&&!this.visible)
{
this._f652.parentNode.parentNode.removeChild(this._f652.parentNode);
MVUtil._f201(this._f652.parentNode,this.parent._f7);
this._f652=null;
}
else if(this.visible&&this.collapsed)
this._f660();
}
}
MVMapDecoration.prototype._f663=function(x63)
{
if(!this._f659)
{
var x64=this._f652;
x64.parentNode.parentNode.removeChild(x64.parentNode);
MVUtil._f201(x64.parentNode,this.parent._f7);
this._f652=null;
this._f655.style.visibility="visible";
}
if(this._f647!=null&&this._f647!="")
return;
var x65=15;
if(this._f659)
{
if(this._f636)
this._f636();
MVUtil.runListeners(this._f93,MVEvent.COLLAPSE);
this._f647=this.setTimeout("this.scrollElement(-1)",10);
}
else
 {
if(this._f637)
this._f637();
MVUtil.runListeners(this._f93,MVEvent.RESTORE);
this._f654(this._f655,true);
this._f647=this.setTimeout("this.scrollElement(1)",10);
}
}
MVMapDecoration.prototype._f660=function()
{
this._f652=document.createElement("img");
var x66=document.createElement("td");
x66.style.border=this.style.borderStyle;
x66.style.backgroundImage="url("+MVUtil.getImageURL(this.style.titleBgImg)+")";
x66.appendChild(this._f652);
if(this._f651)
x66.title=this._f651;
MVUtil._f162(x66,"pointer");
this.parent.toolBarContainer.appendChild(x66);
var x67=this.parent;
setTimeout(function(){x67._f658(x67);},100);
this.setIconImageListeners(true);
}
MVMapDecoration.prototype.scrollElement=function(x68)
{
var x69=parseInt(this._f655.style.height);
var x70=parseInt(this._f630.style.height);
var x71=parseInt(this._f655.style.width);
var x72=parseInt(this._f630.style.width);
var x73=MVUtil._f81(this._f655);
var x74=MVUtil._f80(this._f655);
if(x68<0)
{
if(x70>1)
{
if(x70>this._f643)
{
if(x73<this.parent._f107())
{
MVUtil._f70(this._f655,x74+this._f644,x73+this._f645);
this._f647=this.setTimeout("this.scrollElement(-1)",20);
}
else
 this.collapse();
}
else
 this.collapse();
}
else
 this.collapse();
}
if(x68>0)
{
x70+=this._f643;
x72+=this._f642;
x69+=this._f643;
x71+=this._f642;
x73-=this._f645;
x74-=this._f644;
var x75=false;
if(this._f429<x73)
MVUtil._f70(this._f655,x74,x73);
else
 x75=true;
if(x75)
{
this._f659=true;
clearTimeout(this._f647);
this._f647=null;
this.setIconImageListeners(false);
MVUtil._f70(this._f655,this._f428,this._f429);
this.collapsed=false;
this._f630.style.visibility="visible";
if(this._f630._f226&&this.parent)
{
var x76=this.parent.getCenter();
this.parent._f225._f221=true;
this.parent._f225._f216.setCenter(x76,true);
this.parent._f225._f221=false;
this.parent._f225._f216.display();
this.parent._f225._f232();
}
this.parent._f658(this.parent);
if(this.afterRestoreListener)
this.afterRestoreListener();
MVUtil.runListeners(this._f93,MVEvent.AFTER_RESTORE);
}
else
 {
this._f647=this.setTimeout("this.scrollElement(1)",20);
}
}
}
MVMapDecoration.prototype.setTimeout=function(_f148,_f149)
{
var Ie="tempVar"+_f281;
_f281++;
eval(Ie+" = this;");
var oi=_f148.replace(/\\/g,"\\\\");
oi=oi.replace(/\"/g,'\\"');
return window.setTimeout(Ie+'._setTimeoutDispatcher("'+oi+'");'+Ie+" = null;",_f149);
}
MVMapDecoration.prototype._f183=function()
{
var x77=this._f655;
if(!this._f631)
x77=this._f630;
this.left=(MVUtil._f80(x77)-this.xOffset)/this.parent._f106();
this.top=(MVUtil._f81(x77)-this.yOffset)/this.parent._f107();
this.parent._f661=null;
if(this._f640)
this._f640(this.getPosition());
MVUtil.runListeners(this._f93,MVEvent.DRAG,[this.getPosition()]);
}
MVMapDecoration.prototype._f70=function(x78,x79)
{
var x80=this._f655;
if(!this._f631)
x80=this._f630;
MVUtil._f70(x80,x78,x79);
}
MVMapDecoration.prototype._f170=function()
{
if(this._f631)
{
this.realContdiv.onselectstart=null;
MVUtil._f201(this._f655);
}
else
 {
this._f630.onselectstart=null;
MVUtil._f201(this._f630);
}
this.parent=null;
}
function MVBarInfo(x0,x1)
{
this.name=x0;
this.color=null;
if(x1)
{
if(x1.charAt(0)=='#')
this.color=x1.substring(1,x1.length);
else
 this.color=x1;
}
this.color_opacity=255;
}
function MVBarChartStyle(x0,x1,x2,x3)
{
this.name=x0;
this.width=x1;
this.height=x2;
this.bars=x3;
this.minValue=null;
this.maxValue=null;
this.shareScale=true;
this.showXAxis=false;
}
MVBarChartStyle.prototype.setMinValue=function(x0)
{
this.minValue=x0;
}
MVBarChartStyle.prototype.setMaxValue=function(x1)
{
this.maxValue=x1;
}
MVBarChartStyle.prototype.setShareScale=function(x2)
{
this.shareScale=x2;
}
MVBarChartStyle.prototype.setShowXAxis=function(x3)
{
this.showXAxis=x3;
}
MVBarChartStyle.prototype.getXMLString=function()
{
var x4=
'<style name="'+this.name+'">'+
'<AdvancedStyle><BarChartStyle'+
' width="'+this.width+'" height="'+this.height+'"';
if(this.shareScale==true)
{
x4=x4+' share_scale="true"';
}
if(this.maxValue!=null&&this.minValue!=null)
{
x4=x4+' min_value="'+this.minValue+'" max_value="'+this.maxValue+'"';
}
if(this.showXAxis)
{
x4=x4+' show_x_axis="true"';
}
x4=x4+'>';
if(this.bars!=null)
{
for(var x5=0;x5<this.bars.length;x5++)
{
var x6=this.bars[x5];
x4=x4+' <Bar name="'+x6.name+'"';
if(x6.color!=null)
x4=x4+' color="#'+x6.color+'"';
x4=x4+' />';
}
}
x4+=' </BarChartStyle></AdvancedStyle></style>';
return x4;
}
function MVPieSlice(x0,x1)
{
this.name=x0;
this.color=null;
if(x1)
{
if(x1.charAt(0)=='#')
this.color=x1.substring(1,x1.length);
else
 this.color=x1;
}
this.color_opacity=255;
}
MVPieSlice.prototype.setColorOpacity=function(x0)
{
this.color_opacity=x0;
}
function MVPieChartStyle(x0,x1,x2)
{
this.name=x0;
this._f206=x1;
this.slices=x2;
}
MVPieChartStyle.prototype.getXMLString=function()
{
var x1='<style name="'+this.name+'">'+
'<AdvancedStyle><PieChartStyle '+
'pieradius="'+this._f206+'">';
if(this.slices!=null)
{
for(var x2=0;x2<this.slices.length;x2++)
{
var x3=this.slices[x2];
if(x3!=null)
{
x1=x1+' <PieSlice name="'+x3.name+'"';
if(x3.color!=null)
x1=x1+' color="#'+x3.color+'" />';
}
}
}
x1=x1+' </PieChartStyle></AdvancedStyle></style>';
return x1;
}
function MVCollectionBucket(x0,x1,x2,x3)
{
if(x2==null)
this.type="string";
else
 this.type=x2;
if(x3==null)
this.delimiter=",";
else
 this.delimiter=x3;
this.renderingStyle=x0;
this.label=x1;
this.items=null;
}
MVCollectionBucket.prototype.setItems=function(x0)
{
if(x0==null)
this.items=null;
this.items=x0;
}
MVCollectionBucket.prototype.getXMLString=function()
{
var x1=(this.label==null)?"":'label="'+this.label+'" ';
var x2="<CollectionBucket "+x1;
var x3=(this.type==null)?"":'type="'+this.type+'" ';
var x4=(this.delimiter==null)?"":'delimiter="'+this.delimiter+'" ';
var x5=(this.renderingStyle==null)?"":'style="'+this.renderingStyle+'" ';
x2+=x3+x4+x5+">"+this.items+"</CollectionBucket>";
return x2;
}
function MVScaleBar(x0)
{
if(x0==null||x0=="undefined")
{
this.format="BOTH";
this._f694=(arguments.length==2&&typeof arguments[1]=="number")?arguments[1]:125;
this._f410=false;
}
else if(typeof x0=="object")
{
this.format=x0.format?x0.format:"BOTH";
this._f694=(x0.maxWidth&&(typeof x0.maxWidth=="number"))?x0.maxWidth:125;
this._f410=(x0._f410&&(typeof x0._f410=="boolean"))?x0._f410:false;
}
else
 {
this.format="BOTH";
this._f694=(arguments.length==2&&typeof arguments[1]=="number")?arguments[1]:125;
this._f410=(typeof x0=="boolean")?x0:false;
}
this.type="MVScaleBar";
this._f213=true;
this._f628=false;
this.textSize=11;
this._f695=null;
this._f123=false;
this.style=
{barStyle:"border-top:1px solid #AAAAAA;border-bottom:1px solid #555555;border-left:1px solid #AAAAAA;border-right:1px solid #555555;background-color:#D0E0F0",
barHeight:3,textStyle:"font-family: Tahoma;font-size:11px;font-weight:bold"};
this.barSpacing=7;
}
MVScaleBar.prototype.setStyle=function(x0)
{
if(x0)
{
if(x0.barStyle)
this.style.barStyle=x0.barStyle;
if(x0.barHeight)
this.style.barHeight=x0.barHeight;
if(x0.textStyle)
this.style.textStyle=x0.textStyle;
}
}
MVScaleBar.prototype.init=function(x1,x2)
{
this.div=x1;
if(x1.isMapDecoration)
{
var x3=x1.offsetLeft;
var x4=x1.offsetTop;
x2._f696=4;
x2._f697=x3;
x2._f698=x4;
}
this._f699(x2);
}
MVScaleBar.prototype._f699=function(x5,x6,x7)
{
if(!x6)
x5._f701=this;
this._f695=x5;
if(!this.div)
{
this.div=document.createElement("div");
this.div.style.zIndex=2000;
if(x6)
x6.appendChild(this.div);
else
 x5._f229.appendChild(this.div);
}
this._f702=document.createElement("div");
this._f703=document.createElement("div");
MVUtil._f662(this.div);
MVUtil._f662(this._f702);
MVUtil._f662(this._f703);
this.div.style.height=MVUtil._f26(40);
this.div.style.width=MVUtil._f26(125);
this.div.style.fontSize=MVUtil._f26(5);
var x8=this;
var x9=function(x10)
{
var x11=x10.fpsLength;
var x12=x10.metricLength;
var x13=Math.max(x11,x12);
var x14=3;
x8._f704(x8._f702,x10.fpsText);
x8._f702.style.cssText=x8.style.textStyle;
x8._f702.style.position="absolute";
MVUtil._f705(x8._f702,4,0,x13,x14,10);
x8.textSize=MVUtil.getNumber(x8._f702.style.fontSize);
var x15=x14+x8.textSize;
x8.topBar=x8._f706(x11,x8.style.barHeight,3,x15,x8.style.barStyle);
x8.bottomBar=x8._f706(x12,x8.style.barHeight,3,x15+x8.style.barHeight+x8.barSpacing,x8.style.barStyle);
x8._f704(x8._f703,x10.metricText);
x8._f703.style.cssText=x8.style.textStyle;
x8._f703.style.position="absolute";
MVUtil._f705(x8._f703,4,x15+2*x8.style.barHeight+x8.barSpacing+2,x13,0,10);
if(x8.format=="METRIC")
{
x8.div.appendChild(x8._f703);
x8._f703.style.top="0px";
x8.bottomBar.style.top=x15+"px";
x8.topBar.style.visibility="hidden";
}
else if(x8.format=="IMPERIAL")
{
x8.div.appendChild(x8._f702);
x8.bottomBar.style.visibility="hidden";
}
else
 {
x8.div.appendChild(x8._f703);
x8.div.appendChild(x8._f702);
}
x8.div.title=MVi18n._f354("scaleBarInfoTip");
x8._f707();
x8._f123=true;
if(x7)
x7(x8.div);
}
this._f708(x5,this._f694,x9);
}
MVScaleBar.prototype._f706=function(x16,x17,x18,x19,x20)
{
var x21=document.createElement("div");
x21.style.cssText=x20;
x21.style.position="absolute";
MVUtil._f70(x21,x18,x19);
x21.style.fontSize="1px";
x21.style.width=MVUtil._f26(x16);
x21.style.height=MVUtil._f26(x17);
this.div.appendChild(x21);
return x21;
}
MVScaleBar.prototype._f707=function()
{
if(!this.div)
return ;
var x22="black";
this._f702.style.color=x22;
this._f703.style.color=x22;
}
MVScaleBar.prototype._f709=function(x23)
{
if(!this.div||!this._f123)
return ;
var x24=this;
var x25=function(x26)
{
var x27=Math.max(x26.fpsLength,x26.metricLength);
x24._f704(x24._f702,x26.fpsText);
x24._f704(x24._f703,x26.metricText);
x24.width=x27+4;
x24.topBar.style.width=MVUtil._f26(x26.fpsLength);
x24.bottomBar.style.width=MVUtil._f26(x26.metricLength);
x24._f703.style.width=MVUtil._f26(x26.metricLength+2);
x24._f702.style.width=MVUtil._f26(x26.fpsLength+2);
}
this._f708(x23,this._f694,x25);
}
MVScaleBar.prototype._f708=function(x28,x29,x30)
{
var x31;
var x32;
var x33;
var x34;
var x35;
var x36;
var x37=x28.msi._f580();
var x38=x28.msi._f579();
var x39=this;
var x40=function()
{
x34=x39._f710(x33);
if(x34>=1000)
{
var x41=x39._f710(x33/1000);
var x42=x33/1000;
x36=Math.round(x39._f694*x41/x42);
x35=MVUtil.formatNum(x41)+" "+MVi18n._f354("kilometers");
}
else
 {
x36=Math.round(x39._f694*x34/x33);
x35=MVUtil.formatNum(x34)+" "+MVi18n._f354("meters");
}
var x43=x33/1609.344;
var x44=x33*3.28084;
var x45;
var x46;
if(x43>=1)
{
var x47=x39._f710(x43);
x45=Math.round(x39._f694*x47/x43);
x46=MVUtil.formatNum(x47)+" "+MVi18n._f354("miles");
}
else
 {
var x48=x39._f710(x44);
x45=Math.round(x39._f694*x48/x44);
x46=MVUtil.formatNum(x48)+" "+MVi18n._f354("feet");
}
return new _f711(x45,x36,x46,x35);
}
if(x38=='GEODETIC')
{
var x49=function(x50)
{
x32=x50;
var x51=6378137.0;
var x52=0.9966471893352525;
var x53=0.0033528106647474805;
x33=MVScaleBar._f712(x31,x32,x51,x52,x53);
x30(x40());
}
var x54=function(x55)
{
x31=x55;
MVScaleBar._f713(x28._f714+x29/2,x28._f715,x28,x49);
}
MVScaleBar._f713(x28._f714-x29/2,x28._f715,x28,x54);
return ;
}
else if(x38=='PROJECTED')
{
if(this._f410==true)
{
var x56=x29/2;
var x57=x28._f90-x56/x28._f72;
var x58=x56/x28._f72+x28._f90;
var x59=x28._f91;
var x60=MVSdoGeometry.createLineString([x57,x59,x58,x59],x28.srid);
var x61=function(x62)
{
x33=x62;
x30(x40());
}
x33=x60.getLength("meter",true,x28._f4+'/foi',x61);
return ;
}
else
 {
x33=x37*x29/x28._f72;
}
}
else if(x38=='LOCAL'||(x38=='UNDEFINED'&&x37!=0))
{
x33=x37*x29/x28._f72;
}
else if(x38=='UNDEFINED'&&x37==0)
{
x33=x29/x28._f72;
_f65._f716='';
_f65._f717='';
_f65._f718='';
_f65._f719='';
}
x30(x40());
}
MVScaleBar.prototype._f710=function(x63)
{
var x64=x63;
if(x64>1)
{
var x65=0;
while(x64>=10){x64=x64/10;x65=x65+1;}
if(x64>=5){x64=5;}
else if(x64>=2){x64=2;}
else {x64=1;}
while(x65>0){x64=x64*10;x65=x65-1;}
}
return x64;
}
MVScaleBar.prototype._f704=function(x66,x67)
{
if(x66.innerHTML!=x67)
{
if(x66.parentNode)
{
var x68=x66.parentNode;
x68.removeChild(x66);
x66.innerHTML=x67;
x68.appendChild(x66);
}
else
 x66.innerHTML=x67;
}
}
MVScaleBar.prototype._f233=function()
{
this._f695._f701=null;
}
MVScaleBar._f713=function(x69,x70,x71,x72)
{
var x73=MVSdoGeometry.createPoint(0,0,x71.srid);
x73.sdo_point.x=(x69-x71._f714)/x71._f72+x71._f90;
x73.sdo_point.y=x71._f91-(x70-x71._f715)/x71._f74;
var x74=function(x75)
{
if(x75)
x73=x75;
while(x73.sdo_point.x<-180)x73.sdo_point.x+=360;
while(x73.sdo_point.x>180)x73.sdo_point.x-=360;
x73.sdo_point.x=(x73.sdo_point.x)*Math.PI/180;
x73.sdo_point.y=(x73.sdo_point.y)*Math.PI/180;
x72(x73.sdo_point);
}
if(x73.srid&&x73.srid!=8307)
x73=x71.transformGeom(x73,8307,null,x74);
else
 x74();
}
MVScaleBar._f712=function(x76,x77,x78,x79,x80)
{
var x81;var x82;var x83;var x84;var x85;var x86;var x87;var x88;var x89;var x90;
var x91;var x92;var x93;var x94;var x95;
var x96;var x97;var x98;var x99;var x100;var x101;
var x102=Math.PI/2.0;
if(x102-Math.abs(x76.y)<1.e-10)
x94=x76.y;
else
 x94=Math.atan(x79*Math.tan(x76.y));
if(x102-Math.abs(x77.y)<1.e-10)
x95=x77.y;
else
 x95=Math.atan(x79*Math.tan(x77.y));
x82=(x94+x95)/2.0;
x83=(x94-x95)/2.0;
x81=Math.abs(x76.x-x77.x);
if(x81>Math.PI)
x81=2.0*Math.PI-x81;
x81/=2.0;
if(x81<5.e-8&&Math.abs(x83)<5.e-8)
return 0.0;
else if((x102-x81<5.e-8&&Math.abs(x82)<5.e-8)||
x102-Math.abs(x83)<5.e-8)
return -1.0;
x96=Math.sin(x82);
x97=Math.cos(x82);
x98=Math.sin(x83);
x99=Math.cos(x83);
x100=Math.sin(x81);
x84=x98*x98+x100*x100*(x99*x99-x96*x96);
x85=Math.acos(1.0-2.0*x84);
x101=Math.sin(x85);
x86=2.0*(1.0-2.0*x84);
x87=2.0*x96*x96*x99*x99/(1.0-x84);
x88=2.0*x98*x98*x97*x97/x84;
x89=x87+x88;
x90=x87-x88;
x91=x85/x101;
x92=4.0*x91*x91;
x93=x92*x86;
var x103=(x93+(x91-(x93-x86)/2.0)*x89);
return x78*x101*(x91-x80*(x91*x89-x90)/4.0+x80*x80*
(x89*x103-x90*(2.0*x92+x86*x90)+x92*x89*x90)/64.0);
}
function _f711(x0,x1,x2,x3)
{
this.fpsLength=x0;
this.metricLength=x1;
this.fpsText=x2;
this.metricText=x3;
}
function MVNavigationPanel(x0,x1,x2,x3)
{
this.type="MVNavigationPanel";
this._f213=true;
if(_f65._f625&&x0===undefined)
x0=0;
else if(x0==undefined||
x0!=0&&x0!=4&&x0!=8)
x0=8;
this._f926=x0;
if(_f65._f625&&x1===undefined)
x1=false;
this._f927=x1;
this._f928=x2;
if(_f65._f625&&x3===undefined)
x3=false;
this.zoomLevelBars=x3;
this._f929=null;
this._f916=null;
this._f695=null;
this.containerDiv=null;
this._f123=false;
this.infoTipDivs=new Object();
this.infoTipTexts=null;
this.infoTipTextStyle=null;
var x4=this;
this.hideInfoTimeOut;
this.enableZoomLevelInfoTip=true;
this.showInfoTip=function()
{
if(!x4.enableZoomLevelInfoTip)
return;
clearTimeout(x4.hideInfoTimeOut);
for(div in x4.infoTipDivs){
x4.infoTipDivs[div].style.visibility="";
}
}
this._f198=function()
{
x4.hideInfoTimeOut=setTimeout(x4.doHideInfoTip,500);
}
this.doHideInfoTip=function()
{
for(div in x4.infoTipDivs)
{
x4.infoTipDivs[div].style.visibility="hidden";
}
}
this.offsetTop=10;
}
MVNavigationPanel.prototype.setZoomLevelInfoTips=function(x0,x1)
{
this.infoTipTexts=x0;
this.infoTipTextStyle=x1;
if(this._f930){
MVUtil._f201(this._f930.div,this._f695._f7);
this._f930=new MVZoomBarAndPin(this);
}
}
MVNavigationPanel.prototype.enableZoomLevelInfoTips=function(x2)
{
this.enableZoomLevelInfoTip=x2;
}
MVNavigationPanel.prototype.setNavPosition=function(x3)
{
this._f916=x3;
}
MVNavigationPanel.prototype.init=function(x4,x5)
{
if(x4)
{
this.containerDiv=x4;
if(x4.isMapDecoration)
{
this.offsetTop=x4.offsetTop;
}
}
if(this._f929)
{
if(this._f929.parentNode)
this._f929.parentNode.removeChild(this._f929);
MVUtil._f201(this._f929,x5._f7);
}
this._f929=document.createElement('div');
this._f929.style.position='absolute';
this._f929.className="noprint";
this._f929.ondblclick=MVUtil._f103(this._f929,function(x6)
{
MVUtil._f175(MVUtil.getEvent(x6));
});
this._f929.onclick=MVUtil._f103(this._f929,function(x7)
{
MVUtil._f175(MVUtil.getEvent(x7));
});
this.containerDiv.appendChild(this._f929);
if(x5)
{
this._f695=x5;
x5.navigationPanel=this;
}
if(this._f916)
{
if(this._f916.toLowerCase()=="east")
{
if(this._f926==8)
this._f929.style.left=MVUtil._f26(this._f695._f106()-80);
else if(this._f926==4)
this._f929.style.left=MVUtil._f26(this._f695._f106()-80);
else if(this._f926==0)
this._f929.style.left=MVUtil._f26(this._f695._f106()-50);
}
else
 {
if(this._f926==8)
this._f929.style.left=MVUtil._f26(10);
else if(this._f926==8)
this._f929.style.left=MVUtil._f26(10);
else if(this._f926==0)
this._f929.style.left=MVUtil._f26(30);
}
this._f929.style.top=MVUtil._f26(10);
}
else
 {
this._f929.style.left=MVUtil._f26(0);
this._f929.style.top=MVUtil._f26(0);
}
this._f929.style.zIndex=2000;
MVUtil._f162(this._f929,"pointer");
this._f606=0;
this._f607=0;
var x5=this._f695;
var x8=function(x9)
{
if(x5._f772&&x5._f776)
{
x5._f773.clear();
x5.marqueeZoom();
}
x9=(x9)?x9:((window.event)?event:null);
MVUtil._f175(x9);
}
if(this._f926!=false)
{
this._f931();
}
this._f602=0;
this._f603=0;
if(this._f927!=false)
{
this._f602=_f65._f602;
this._f603=_f65._f603;
}
this._f610=0;
this._f611=0;
if(this._f928!=false)
{
this._f610=_f65._f610;
this._f611=_f65._f611;
var x10=new _f915(this._f929,src=_f65._f141+"navicons/zoomin.gif",
this._f610,this._f611,2000,MVi18n._f354("zoomInInfoTip"));
var x11=this._f926>0?(this._f606*3-this._f610)/2+1:0;
var x12=this._f926>0?this._f607*3+3:0;
MVUtil._f70(x10,x11,x12);
MVUtil.attachEvent(x10,"mousedown",MVUtil._f103(x10,function(x13)
{
x13=(x13)?x13:((window.event)?event:null);
MVUtil._f175(x13);
if(x5._f772&&x5._f774)
x5._f776=true;
x5.zoomIn();
}),true);
MVUtil.attachEvent(x10,"mouseup",MVUtil._f103(x10,function(x14)
{
x8(x14);
}),true);
x10.onmouseover=this.showInfoTip;
x10.onmouseout=this._f198;
var x15=new _f915(this._f929,_f65._f141+"navicons/zoomout.gif",
this._f610,this._f611,2000,MVi18n._f354("zoomOutInfoTip"));
MVUtil._f70(x15,x11,x12+this._f611+this._f603+1);
MVUtil.attachEvent(x15,"mousedown",MVUtil._f103(x15,function(x16)
{
x16=(x16)?x16:((window.event)?event:null);
MVUtil._f175(x16);
if(x5._f772&&x5._f774)
x5._f776=true;
x5.zoomOut();
}),true);
MVUtil.attachEvent(x15,"mouseup",MVUtil._f103(x15,function(x17)
{
x8(x17);
}),true);
x15.onmouseover=this.showInfoTip;
x15.onmouseout=this._f198;
}
if(this._f927!=false)
{
this._f930=new MVZoomBarAndPin(this);
}
this._f123=true;
}
MVNavigationPanel.prototype._f931=function()
{
this._f606=_f65._f606;
this._f607=_f65._f607;
var x18=this._f695;
var x19=function(x20)
{
if(x18._f772&&x18._f776)
{
x18._f773.clear();
x18.marqueeZoom();
}
x20=(x20)?x20:((window.event)?event:null);
MVUtil._f175(x20);
}
var x21=new _f915(this._f929,_f65._f141+"navicons/north.gif",
this._f606,this._f607,2000,MVi18n._f354("panNInfoTip"));
MVUtil._f70(x21,this._f606+1,0);
MVUtil.attachEvent(x21,"mousedown",MVUtil._f103(x21,function(x22)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.smoothScroll(0,(x18._f106()+x18._f107())*(-0.25));
x22=(x22)?x22:((window.event)?event:null);
MVUtil._f175(x22);
}),true);
MVUtil.attachEvent(x21,"mouseup",MVUtil._f103(x21,function(x23)
{
x19(x23);
}),true);
var x24=new _f915(this._f929,_f65._f141+"navicons/west.gif",
this._f606,this._f607,2000,MVi18n._f354("panWInfoTip"));
MVUtil._f70(x24,0,this._f607+1);
MVUtil.attachEvent(x24,"mousedown",MVUtil._f103(x24,function(x25)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.smoothScroll((x18._f106()+x18._f107())*(-0.25),0);
x25=(x25)?x25:((window.event)?event:null);
MVUtil._f175(x25);
}),true);
MVUtil.attachEvent(x24,"mouseup",MVUtil._f103(x24,function(x26)
{
x19(x26);
}),true);
var x27=new _f915(this._f929,_f65._f141+"navicons/east.gif",
this._f606,this._f607,2000,MVi18n._f354("panEInfoTip"));
MVUtil._f70(x27,this._f606*2+2,this._f607+1);
MVUtil.attachEvent(x27,"mousedown",MVUtil._f103(x27,function(x28)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.smoothScroll((x18._f106()+x18._f107())*(0.25),0);
x28=(x28)?x28:((window.event)?event:null);
MVUtil._f175(x28);
}),true);
MVUtil.attachEvent(x27,"mouseup",MVUtil._f103(x27,function(x29)
{
x19(x29);
}),true);
var x30=new _f915(this._f929,_f65._f141+"navicons/south.gif",
this._f606,this._f607,2000,MVi18n._f354("panSInfoTip"));
MVUtil._f70(x30,this._f606+1,this._f607*2+2);
MVUtil.attachEvent(x30,"mousedown",MVUtil._f103(x30,function(x31)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.smoothScroll(0,(x18._f106()+x18._f107())*(0.25));
x31=(x31)?x31:((window.event)?event:null);
MVUtil._f175(x31);
}),true);
MVUtil.attachEvent(x30,"mouseup",MVUtil._f103(x30,function(x32)
{
x19(x32);
}),true);
if(this._f926==4)
return ;
var x33=new _f915(this._f929,_f65._f141+"navicons/nw.gif",
this._f606,this._f607,200,MVi18n._f354("panNWInfoTip"));
MVUtil._f70(x33,0,0);
MVUtil.attachEvent(x33,"mousedown",MVUtil._f103(x33,function(x34)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.smoothScroll((x18._f106()+x18._f107())*(-0.18),(x18._f106()+x18._f107())*(-0.18));
x34=(x34)?x34:((window.event)?event:null);
MVUtil._f175(x34);
}),true);
MVUtil.attachEvent(x33,"mouseup",MVUtil._f103(x33,function(x35)
{
x19(x35);
}),true);
var x36=new _f915(this._f929,_f65._f141+"navicons/ne.gif",
this._f606,this._f607,2000,MVi18n._f354("panNEInfoTip"));
MVUtil._f70(x36,this._f606*2+2,0);
MVUtil.attachEvent(x36,"mousedown",MVUtil._f103(x36,function(x37)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.smoothScroll((x18._f106()+x18._f107())*(0.18),(x18._f106()+x18._f107())*(-0.18));
x37=(x37)?x37:((window.event)?event:null);
MVUtil._f175(x37);
}),true);
MVUtil.attachEvent(x36,"mouseup",MVUtil._f103(x36,function(x38)
{
x19(x38);
}),true);
var x39=new _f915(this._f929,_f65._f141+"navicons/sw.gif",
this._f606,this._f607,2000,MVi18n._f354("panSWInfoTip"));
MVUtil._f70(x39,0,this._f607*2+2);
MVUtil.attachEvent(x39,"mousedown",MVUtil._f103(x39,function(x40)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.smoothScroll((x18._f106()+x18._f107())*(-0.18),(x18._f106()+x18._f107())*(0.18));
x40=(x40)?x40:((window.event)?event:null);
MVUtil._f175(x40);
}),true);
MVUtil.attachEvent(x39,"mouseup",MVUtil._f103(x39,function(x41)
{
x19(x41);
}),true);
var x42=new _f915(this._f929,_f65._f141+"navicons/se.gif",
this._f606,this._f607,2000,MVi18n._f354("panSEInfoTip"));
MVUtil._f70(x42,this._f606*2+2,this._f607*2+2);
MVUtil.attachEvent(x42,"mousedown",MVUtil._f103(x42,function(x43)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.smoothScroll((x18._f106()+x18._f107())*(0.18),(x18._f106()+x18._f107())*(0.18));
x43=(x43)?x43:((window.event)?event:null);
MVUtil._f175(x43);
}),true);
MVUtil.attachEvent(x42,"mouseup",MVUtil._f103(x42,function(x44)
{
x19(x44);
}),true);
if(x18._f768){
var x45=new _f915(this._f929,_f65._f141+"navicons/center.gif",
this._f606,this._f607,2000,MVi18n._f354("panCenterInfoTip"));
MVUtil._f70(x45,this._f606+1,this._f607+1);
MVUtil.attachEvent(x45,"mousedown",MVUtil._f103(x45,function(x46)
{
if(x18._f772&&x18._f774)
x18._f776=true;
x18.setCenterAndZoomLevel(x18._f768,x18._f769);
x46=(x46)?x46:((window.event)?event:null);
MVUtil._f175(x46);
}),true);
MVUtil.attachEvent(x45,"mouseup",MVUtil._f103(x45,function(x47)
{
x19(x47);
}),true);
}
}
MVNavigationPanel.prototype.updateSliderBar=function()
{
if(!this._f123)
return ;
if(this._f930&&this._f930._f932)
{
var x48=this._f607!=0?3:0;
this._f930._f932.style.top=
MVUtil._f26(this._f607*3+x48+this._f611+
(this._f603-_f65._f605)*
(this._f695._f765-this._f695._f53)/this._f695._f765);
}
}
MVNavigationPanel.prototype._f233=function()
{
this._f695.navigationPanel=null;
}
MVNavigationPanel.prototype.getMaxZoomLevel=function()
{
if(this._f930.maxZoomlevel)
return this._f930.maxZoomleve;
else
 return this.parent._f765;
}
MVNavigationPanel.prototype.updateSlider=function()
{
if(this._f930){
MVUtil._f201(this._f930.div,this._f695._f7);
this._f930=new MVZoomBarAndPin(this);
}
}
function MVZoomBarAndPin(x0)
{
var x1=x0;
this.div=document.createElement("div");
var x2=x1._f926>0?(x1._f606*3-x1._f602)/2+1:0;
var x3=x1._f926>0?x1._f607*3+3+x1._f611:x1._f611;
this._f933=new _f915(this.div,_f65._f141+"navicons/zoombar.gif",
x1._f602,x1._f603,2000,MVi18n._f354("sliderBarInfoTip"));
this._f933.onmouseover=x0.showInfoTip;
this._f933.onmouseout=x0._f198;
MVUtil._f70(this._f933,x2,x3);
this.maxZoomlevel=x1._f695._f765;
for(var x4=0;x4<=x1._f695._f765;x4++)
{
var x5=x1._f602-4;
if(x0.zoomLevelBars!=false)
{
var x6=new _f915(this.div,_f65._f141+"navicons/zoomBarHoriz.gif",x5,10,1999);
MVUtil._f70(x6,x2+2,x3+2+x4*(x1._f603-14)/x1._f695._f765);
}
for(tipLevel in x0.infoTipTexts)
{
if(parseInt(tipLevel)==(x1._f695._f765-x4))
{
this.infoDiv=document.createElement("div");
this.infoDiv.style.height=16;
this.infoDiv.style.position="absolute";
this.infoDiv.style.opacity=0.6;
this.infoDiv.style.filter="alpha(opacity = 60)";
this.infoDivTable=document.createElement("Table");
this.infoDivTable.style.direction="LTR";
this.infoDivTable.cellSpacing=0;
this.infoDivTable.cellPadding=0;
this.infoDivTable.style.border=0;
this.infoDivRow=this.infoDivTable.insertRow(0);
this.infoDivLeft=this.infoDivRow.insertCell(0);
this.infoDivCenter=this.infoDivRow.insertCell(1);
this.infoDivCenter.style.background="url("+_f65._f141+"navicons/tip_center.gif"+") repeat-x";
this.infoDivRight=this.infoDivRow.insertCell(2);
this.infoDivCenter.innerHTML=x0.infoTipTexts[tipLevel];
this.infoDivCenter.style.fontSize="12px";
this.infoDivCenter.style.fontWeight="bold";
this.infoDivCenter.style.fontFamily="Verdana,Tahoma";
this.infoDivCenter.style.cssText=this.infoDivCenter.style.cssText+"; "+x0.infoTipTextStyle;
this.infoDiv.appendChild(this.infoDivTable);
if(x1._f916&&x1._f916.toLowerCase()=="east")
{
this.infoDivLeft.innerHTML='<img border="0" src="'+_f65._f141+'navicons/tip_east_end.gif"/>';
this.infoDivRight.innerHTML='<img border="0" src="'+_f65._f141+'navicons/tip_east_start.gif"/>';
this.infoDivCenter.style.textAlign="left";
this.infoDivCenter.style.align="left";
this.infoDivCenter.style.direction="RTL"
if(_f65._f374==2)
{
this.infoDiv.style.pixelRight=x2-22;
this.infoDiv.style.pixelTop=x3+x4*(x1._f603-16)/x1._f695._f765;
}
else
 {
this.infoDiv.style.right=MVUtil._f26(x2-22);
this.infoDiv.style.top=MVUtil._f26(x3+x4*(x1._f603-16)/x1._f695._f765);
}
}
else
 {
this.infoDivLeft.innerHTML='<img border="0" src="'+_f65._f141+'navicons/tip_start.gif"/>';
this.infoDivRight.innerHTML='<img border="0" src="'+_f65._f141+'navicons/tip_end.gif"/>';
this.infoDivCenter.style.textAlign="right";
this.infoDivCenter.style.align="right";
MVUtil._f70(this.infoDiv,x2+16,x3+x4*(x1._f603-16)/x1._f695._f765);
}
this.infoDiv.style.visibility="hidden";
this.infoDiv._f53=x1._f695._f765-x4;
this.div.appendChild(this.infoDiv);
x0.infoTipDivs["div"+x4]=this.infoDiv;
var x7=function(x8)
{
clearTimeout(x0.hideInfoTimeOut);
this.style.opacity=0.9;
this.style.filter="alpha(opacity = 90)";
this.style.zIndex=100;
}
var x9=function(x10)
{
this.style.opacity=0.6;
this.style.filter="alpha(opacity = 60)";
x0.hideInfoTimeOut=setTimeout(x0.doHideInfoTip,500);
this.style.zIndex=0;
}
var x11=function(x12)
{
x0._f695.zoomTo(this._f53)
x12=(x12)?x12:((window.event)?event:null);
MVUtil._f175(x12);
}
this.infoDiv.onmouseover=MVUtil._f103(this.infoDiv,x7);
this.infoDiv.onmouseout=MVUtil._f103(this.infoDiv,x9);
MVUtil.attachEvent(this.infoDiv,"mousedown",
MVUtil._f103(this.infoDiv,x11),true);
}
}
}
this._f932=new _f915(this.div,_f65._f141+"navicons/slider.gif",_f65._f604,
_f65._f605,2002);
this._f932.onmouseover=x0.showInfoTip;
this._f932.onmouseout=x0._f198;
MVUtil._f70(this._f932,x2,x3+
(x1._f603-_f65._f605)*
(x1._f695._f765-x1._f695._f53)/x1._f695._f765);
x1._f929.appendChild(this.div);
this._f934=Math.floor(_f65._f605/2);
var x13=0;
var x14=0;
var x15=function(x16)
{
x1._f695._f759=false;
x16=(x16)?x16:((window.event)?event:null);
var x17=x1._f695._f234(x16);
var x18=x17.top-x1._f930._f934-x1.offsetTop;var x19=x1._f607!=0?3:0;
var x20=x1._f607*3+x19+x1._f611;
if(x18<=x20)
x18=x20;
else if(x18>=x20+x1._f603-_f65._f605)
x18=x20+x1._f603-_f65._f605;
var x21=(x1._f603-_f65._f605);
x21=x21/x1._f695._f765;
var x22=Math.floor((x18-x20)/x21);
x18=x22*x21+x20;
var x23=x1._f695._f765-x22;
x1._f695.zoomTo(x23);
MVUtil._f175(x16);
if(x1._f695._f772&&x1._f695._f774)
{
x1._f695._f776=true;
x1._f695._f773.clear();
}
x1._f930._f932.style.top=MVUtil._f26(x18);
}
var x24=function(x25)
{
x25=(x25)?x25:((window.event)?event:null);
x1._f695._f759=false;
if(!x1._f930._f935)return;
var x26=x1._f695._f234(x25);
var x27=x26.top-x13+x14;
var x28=x1._f607!=0?3:0;
if(x27<=x1._f607*3+x28+x1._f611)
x27=x1._f607*3+x28+x1._f611;
else if(x27>=x1._f607*3+x28+x1._f611+
x1._f603-_f65._f605)
x27=x1._f607*3+x28+x1._f611+
x1._f603-_f65._f605;
x1._f930._f932.style.top=MVUtil._f26(x27);
MVUtil._f175(x25);
}
var x29=function(x30)
{
if(!x1._f930._f935)
return ;
x30=(x30)?x30:((window.event)?event:null);
x1._f695._f759=true;
x1._f930._f935=false;
var x31=MVUtil._f81(x1._f930._f932);
var x32=x1._f607!=0?3:0;
var x33=x1._f607*3+x32+x1._f611;
var x34=(x1._f603-_f65._f605);
x34=x34/x1._f695._f765;
var x35=Math.round((x31-x33)/x34);
x31=x35*x34+x33;
var x36=x1._f695._f765-x35;
x1._f695.zoomTo(x36);
x1._f930._f932.style.top=MVUtil._f26(x31);
x1._f695.zoomTo(x36);
MVUtil._f175(x30);
if(x1._f695._f772&&x1._f695._f776)
x1._f695.marqueeZoom();
}
var x37=function(x38)
{
x38=(x38)?x38:((window.event)?event:null);
x1._f695._f759=true;
if(x1._f930._f935)
{
x29(x38);
}
return false;
}
var x39=function(x40)
{
x40=(x40)?x40:((window.event)?event:null);
var x41=x1._f695._f234(x40);
x13=x41.top;
x14=MVUtil._f81(x1._f930._f932);
x1._f930._f935=true;
MVUtil._f175(x40);
}
MVUtil.attachEvent(this.div,"mousedown",MVUtil._f103(this.div,x15),true);
MVUtil.attachEvent(this.div,"mouseup",MVUtil._f103(this.div,x29),true);
MVUtil.attachEvent(this.div,"mousemove",MVUtil._f103(this.div,x24),true);
this.div.onmouseout=MVUtil._f103(this.div,x37);
MVUtil.attachEvent(this._f932,"mousedown",
MVUtil._f103(this._f932,x39),true);
this._f935=false;
}
function _f412()
{
}
_f412._f413=[
{srid:54004,params:[0,0,1,0,0]},
{srid:8307,params:[6378137,298.257223563]}
];
_f412._f414=function(x0,x1,x2,x3,x4)
{
var x5=_f412._f417(x3);
var x6=_f412._f417(x2);
if(!x5||!x6)
{
MVi18n._f6("MVCSTransformMercator.geodeticToMercator","MAPVIEWER-05522",x2+"->"+x3,x4);
return null;
}
var x7=_f375._f378({x:x0,y:x1});
x0=x7.x;
x1=x7.y;
var x8=x5[3];
var x9=x5[4];
var x10=x5[2];
var x11=x5[1];
var x12=x6[0];
var x13=1/x6[1];
var x14=Math.sqrt(2*x13-x13*x13);
var x15=x8+x12*x10*(x0-x11);
var x16=Math.sin(x1);
var x17=Math.tan(Math.PI/4+x1/2);
var x18=(1-x14*x16)/(1+x14*x16);
var x19=x14/2;
var x20=Math.pow(x18,x19);
var x21=x9+x12*x10*Math.log(x17*x20);
return {x:x15,y:x21};
}
_f412._f418=function(x22,x23,x24,x25,x26)
{
var x27=_f412._f417(x24);
var x28=_f412._f417(x25);
if(!x27||!x28)
{
MVi18n._f6("MVCSTransformMercator.mercatorToGeodetic","MAPVIEWER-05522",x24+"->"+x25,x26);
return null;
}
var x29=x27[3];
var x30=x27[4];
var x31=x27[2];
var x32=x27[1];
var x33=x28[0];
var x34=1/x28[1];
var x35=Math.sqrt(2*x34-x34*x34);
var x36=x23;
var x37=x22;
var x38=Math.E;
var x39=Math.pow(x38,((x30-x36)/(x33*x31)));
var x40=Math.PI/2-2*Math.atan2(x39,1.0);
var x41=Math.pow(x35,4.0);
var x42=Math.pow(x35,6.0);
var x43=Math.pow(x35,8.0);
var x44=x35*x35/2;
var x45=5*x41/24;
var x46=x42/12;
var x47=13*x43/360;
var x48=Math.sin(2*x40);
var x49=7*x41/48;
var x50=29*x42/240;
var x51=811*x43/11520;
var x52=Math.sin(2*x40);
var x53=7*x42/120;
var x54=81*x43/1120;
var x55=Math.sin(6*x40);
var x56=4279*x43/161280;
var x57=Math.sin(8*x40);
var x58=x40+(x44+x45+x46+x47)*x48+(x49+x50+x51)*x52+(x53+x54)*x55+x56*x57;
var x59=((x37-x29)/(x33*x31))+x32;
return _f375._f379({x:x59,y:x58});
}
_f412._f417=function(x60)
{
for(var x61=0;x61<_f412._f413.length;x61++)
{
if(_f412._f413[x61].srid==x60)
return _f412._f413[x61].params;
}
return null;
}
_f65._f419(54004,8307,function(x62,x63,x64){
return _f412._f418(x62,x63,54004,8307,x64);
});
_f65._f419(8307,54004,function(x65,x66,x67){
return _f412._f414(x65,x66,8307,54004,x67);
});
function MVZoomControl(x0,x1)
{
this.mapview=x0;
this.ldiff=0;
this.tdiff=0;
this.movedLeft=0;
this.movedTop=0;
this._f444=x1;
this._f433=null;
this.tileLayerDiv=null;
this.zoomStep=0.1
this.interval=40;
this.zooming=false;
this.oldTilesLoaded=false;
this.timeouts=new Array();
this.scaling=false;
this.layerLeft=0;
this.layerTop=0;
this.parentLeft=0;
this.parentTop=0;
}
MVZoomControl.prototype.computeTilesOffset=function()
{
var x0=this._f444._f433[0][0];
if(x0&&x0.parentNode)
{
this.ldiff=-x0.parentNode.offsetLeft
this.tdiff=-x0.parentNode.offsetTop;
this.movedLeft=-x0.parentNode.parentNode.offsetLeft;
this.movedTop=-x0.parentNode.parentNode.offsetTop;
}
}
MVZoomControl.prototype.getScreenCor=function(x1,x2,x3)
{
var x4=this.getPPXByZoomLevel(x3);
var x5=this.getPPYByZoomLevel(x3);
var x6=x1-this.mapview._f106()/2;
var x7=x2-this.mapview._f107()/2;
return {x:x6/x4+this.mapview._f90,
y:this.mapview._f91-x7/x5};
}
MVZoomControl.prototype._f164=function(x8,x9,x10)
{
var x11=this.getPPXByZoomLevel(x10);
var x12=this.getPPYByZoomLevel(x10);
return {x:(x8-this.mapview._f90)*x11+this.mapview._f106()/2,
y:(this.mapview._f91-x9)*x12+this.mapview._f107()/2};
}
MVZoomControl.prototype.getPPXByZoomLevel=function(x13)
{
var x14=this.mapview.msi.mapConfig.zoomLevels[x13].tileImageWidth;
var x15=this.mapview.msi.mapConfig.zoomLevels[x13].tileWidth;
var x16=x14/x15;
return x16;
}
MVZoomControl.prototype.getPPYByZoomLevel=function(x17){
var x18=this.mapview.msi.mapConfig.zoomLevels[x17].tileImageHeight;
var x19=this.mapview.msi.mapConfig.zoomLevels[x17].tileHeight;
var x20=x18/x19;
return x20;
}
MVZoomControl.prototype.initZoomInfo=function(x21,x22,x23)
{
var x24=this.getPPXByZoomLevel(x21);
var x25=this.getPPYByZoomLevel(x21);
var x26=this.getPPXByZoomLevel(x22);
var x27=this.getPPYByZoomLevel(x22);
var x28=this.mapview.msi.mapConfig.zoomLevels[x21].tileImageWidth;
var x29=this.mapview.msi.mapConfig.zoomLevels[x21].tileImageWidth;
var x30=this.mapview.msi.mapConfig.zoomLevels[x21].tileImageWidth*x26/x24;
var x31=this.mapview.msi.mapConfig.zoomLevels[x21].tileImageHeight*x27/x25;
var x32=MVUtil._f80(x23)-this.movedLeft;
var x33=MVUtil._f81(x23)-this.movedTop;
var x34=this.getScreenCor(x32-this.ldiff+this.movedLeft,x33-this.tdiff+this.movedTop,x21);
var x35=this._f164(x34.x,x34.y,x22);
var x36=x35.x+this.ldiff-this.movedLeft*x26/x24;
var x37=x35.y+this.tdiff-this.movedTop*x26/x24;
x23.oldZoomInfo=new Object();
x23.oldZoomInfo.lstart=x32;
x23.oldZoomInfo.tstart=x33;
x23.oldZoomInfo.lend=x36;
x23.oldZoomInfo.tend=x37;
x23.oldZoomInfo.fw=x28;
x23.oldZoomInfo.fh=x29;
x23.oldZoomInfo.tiw=x30;
x23.oldZoomInfo.tih=x31;
}
MVZoomControl.prototype.zoomToFactor=function(x38,x39)
{
if(x39>1)
{
return;
}
var x40=x38.oldZoomInfo;
var x41=(x40.lend-x40.lstart)*x39+x40.lstart;
var x42=(x40.tend-x40.tstart)*x39+x40.tstart;
var x43=(x40.tiw-x40.fw)*x39+x40.fw;
var x44=(x40.tih-x40.fh)*x39+x40.fh;
MVUtil._f70(x38,x41,x42);
x38.style.width=(x43+1)+'px';
x38.style.height=(x44+1)+'px';
}
MVZoomControl.prototype.copyTiles=function()
{
if(this.tileLayerDiv&&this.tileLayerDiv.parentNode)
{
this.tileLayerDiv.parentNode.removeChild(this.tileLayerDiv);
MVUtil._f87(this.tileLayerDiv);
}
this.tileLayerDiv=this._f444._f444;
this.tileLayerDiv.zooming=true;
this._f433=this._f444._f433;
this.tileLayerDiv.style.zIndex=200+this._f444.zIndex;
return;
}
MVZoomControl.prototype.zoomToNewCenter=function(x45,x46,x47)
{
if((x45)&&(x46)&&(x45.getPointX()!=x46.getPointX()||x45.getPointY()!=x46.getPointY()))
{
var x48=this._f164(x45.getPointX(),x45.getPointY(),x47);
var x49=this._f164(x46.getPointX(),x46.getPointY(),x47);
var x50=x49.x-x48.x;
var x51=x49.y-x48.y;
var x52=this.mapview.div;
if(_f65._f374==2)
{
x52.style.pixelLeft=x52.style.pixelLeft-x50;
x52.style.pixelTop=x52.style.pixelTop-x51;
}
else
 {
x52.style.left=(MVUtil._f80(x52)-x50)+'px';
x52.style.top=(MVUtil._f81(x52)-x51)+'px';
}
}
}
MVZoomControl.prototype.clearLastZoom=function(){
for(var x53=0;x53<this._f444._f433.length;x53++)
{
for(var x54=0;x54<this._f444._f433[x53].length;x54++)
{
if(!this.hasTileLoaded(this._f444._f433[x53][x54]))
{
var x55=_f65._f141+"transparent."+(_f65._f66=="IF"?"gif":"png");
this._f444._f433[x53][x54].src=x55;
this._f444._f433[x53][x54].imgLoadFinished=true;
}
}
}
for(var x53=0;x53<this.timeouts.length;x53++)
{
clearTimeout(this.timeouts[x53]);
}
this.timeouts=new Array();
}
MVZoomControl.prototype.showTiles=function(x56,x57,x58,x59)
{
if(!this._f444.isVisible()||this._f444._f433==''||Math.abs(x56-x57)>1||this._f444._f425)
{
this.reset();
return;
}
this._f444.setVisible(false);
this._f444._f444.style.visibility="visible";
this.zooming=true;
this.zoomToNewCenter(x58,x59,x56);
this.computeTilesOffset()
this.copyTiles();
this.clearLastZoom();
for(var x60=0;x60<this._f433.length;x60++)
{
for(var x61=0;x61<this._f433[x60].length;x61++)
{
this.initZoomInfo(x56,x57,this._f433[x60][x61]);
this.runZoom(this,x60,x61);
}
}
}
MVZoomControl.prototype.reset=function()
{
this.ldiff=0;
this.tdiff=0;
this.movedLeft=0;
this.movedTop=0;
if(this.tileLayerDiv&&this.tileLayerDiv.parentNode)
{
this.tileLayerDiv.parentNode.removeChild(this.tileLayerDiv);
MVUtil._f87(this.tileLayerDiv);
}
this._f433=null;
this.tileLayerDiv=null;
this.zoomStep=0.2
this.interval=100;
this.zooming=false;
this.oldTilesLoaded=false;
for(var x62=0;x62<this.timeouts.length;x62++)
{
clearTimeout(this.timeouts[x62]);
}
this.timeouts=new Array();
if(this._f444.basemap.isVisible())
this._f444.setVisible(true);
}
MVZoomControl.prototype.runZoom=function(x63,x64,x65,x66)
{
x66=(x66)?x66:x63.zoomStep;
var x67=x63._f433[x64][x65];
x63.zoomToFactor(x67,x66);
if(x66>=1)
{
x67.oldZoomInfo=null;
x67.zoomFinished=true;
if(this.hasZoomFinished())
{
this.startClear();
}
return;
}
else
 {
var x68=setTimeout(function(){x63.runZoom.call(x63,x63,x64,x65,x66+x63.zoomStep);},x63.interval);
this.timeouts.push(x68);
}
}
MVZoomControl.prototype.hasZoomFinished=function()
{
if(!(this._f433))
{
return true;
}
for(var x69=0;x69<this._f433.length;x69++)
{
for(var x70=0;x70<this._f433[x69].length;x70++)
{
if(!this._f433[x69][x70].zoomFinished)
{
return false;
}
}
}
return true;
}
MVZoomControl.prototype.hasTilesLoadFinished=function()
{
for(var x71=0;x71<this._f444._f433.length;x71++)
{
for(var x72=0;x72<this._f444._f433[x71].length;x72++)
{
if(!this.hasTileLoaded(this._f444._f433[x71][x72]))
{
return false;
}
}
}
return true;
}
MVZoomControl.prototype.hasTileLoaded=function(x73)
{
if(x73.src==this.mapview._f440.src)
return true;
if(_f65._f374==2){
return x73.imgLoadFinished;
}
else {
return (x73.offsetWidth==this._f444.tileWidth);
}
}
MVZoomControl.prototype.startClear=function()
{
this._f444.setVisible(true);
for(var x74=0;x74<this.mapview._f260._f276.length;x74++)
{
var x75=this.mapview._f260._f276[x74].node;
if(x75 instanceof Array)
{
for(var x76=0;x76<x75.length;x76++)
x75[x76].style.display='';
}
else if(x75!=null)
x75.style.display='';
}
if(this.mapview.foiGroupArray!=null)
{
for(var x74=0;x74<this.mapview.foiGroupArray.length;x74++)
{
var x77=this.mapview.foiGroupArray[x74];
for(var x76=0;x76<x77._f453.length;x76++)
{
var x78=x77._f453[x76];
if(x78._f88&&x78.node)
{
if(x78.node instanceof Array)
{
for(var x79=0;x79<x78.node.length;x79++)
x78.node[x79].style.display='';
}
else
 x78.node.style.display='';
}
}
for(var x76=0;x76<x77._f454.length;x76++)
{
var x78=x77._f454[x76];
if(x78._f88&&x78.node)
{
if(x78.node instanceof Array)
{
for(var x79=0;x79<x78.node.length;x79++)
x78.node[x79].style.display='';
}
else
 x78.node.style.display='';
}
}
if(x77._f455!=null)
{
for(var x76=0;x76<x77._f455.length;x76++)
{
var x78=x77._f455[x76];
if(x78.node instanceof Array)
{
for(var x79=0;x79<x78.node.length;x79++)
x78.node[x79].style.display='';
}
else
 x78.node.style.display='';
}
}
if(x77._f456!=null)
{
for(var x76=0;x76<x77._f456.length;x76++)
{
var x78=x77._f456[x76];
if(x78.node instanceof Array)
{
for(var x79=0;x79<x78.node.length;x79++)
x78.node[x79].style.display='';
}
else
 x78.node.style.display='';
}
}
}
}
if(_f65._f374==2){
for(var x74=0;x74<this._f444._f433.length;x74++)
{
for(var x76=0;x76<this._f444._f433[x74].length;x76++)
{
this._f444._f433[x74][x76].style.display='';
}
}
}
this.tileLayerDiv.style.zIndex=this._f444.zIndex;;
this.clearCloneTiles();
}
MVZoomControl.prototype.clearCloneTiles=function()
{
if(this.hasTilesLoadFinished())
{
for(var x80=0;x80<this._f444._f433.length;x80++)
{
for(var x81=0;x81<this._f444._f433[x80].length;x81++)
{
this._f444._f433[x80][x81].style.display='';
}
}
this.removeCloneTiles();
}
else
 {
var x82=this;
var x83=setTimeout(function(){x82.clearCloneTiles()},70);
this.timeouts.push(x83);
}
}
MVZoomControl.prototype.removeCloneTiles=function()
{
if(this.tileLayerDiv&&this.tileLayerDiv.parentNode)
{
this.tileLayerDiv.parentNode.removeChild(this.tileLayerDiv);
MVUtil._f87(this.tileLayerDiv);
this.tileLayerDiv=null;
}
this.zooming=false;
}
MVZoomControl.prototype.scaleTiles=function(x84)
{
if(!this.scaling&&(!this._f444.isVisible()||this._f444._f433==''))
{
reset();
return;
}
this._f444.setVisible(false);
this._f444._f444.style.visibility="visible";
if(!this.scaling)
{
this.computeTilesOffset()
this.copyTiles();
this.layerLeft=this.tileLayerDiv.offsetLeft;
this.layerTop=this.tileLayerDiv.offsetTop;
this.parentLeft=this.tileLayerDiv.parentNode.offsetLeft;
this.parentTop=this.tileLayerDiv.parentNode.offsetTop;
this.scaling=true;
for(var x85=0;x85<this._f433.length;x85++)
{
for(var x86=0;x86<this._f433[x85].length;x86++)
{
var x87=this._f433[x85][x86];
x87._f428=MVUtil._f80(x87);
x87._f429=MVUtil._f81(x87);
}
}
}
var x88=this.mapview.getZoomLevel();
var x89=this.mapview.msi.mapConfig.zoomLevels[x88].tileImageWidth*x84;
var x90=this.mapview.msi.mapConfig.zoomLevels[x88].tileImageWidth*x84;
var x91=this.mapview._f106()/2+this.ldiff+this.movedLeft;
var x92=this.mapview._f107()/2+this.tdiff+this.movedTop;
for(var x85=0;x85<this._f433.length;x85++)
{
for(var x86=0;x86<this._f433[x85].length;x86++)
{
var x87=this._f433[x85][x86];
this.scaleTile(x87,x84,x89,x90,x91,x92);
}
}
}
MVZoomControl.prototype.scaleTile=function(x93,x94,x95,x96,x97,x98)
{
x93.zoomFinished=true;
if(x94==1)
{
return;
}
var x99=x97-(x97-x93._f428)*x94;
var x100=x98-(x98-x93._f429)*x94;
MVUtil._f70(x93,x99,x100);
x93.style.width=(x95+1)+'px';
x93.style.height=(x96+1)+'px';
}
MVZoomControl.prototype.endScaling=function()
{
this.scaling=false;
this._f444.setVisible(true);
for(var x101=0;x101<this._f444._f433.length;x101++)
{
for(var x102=0;x102<this._f444._f433[x101].length;x102++)
{
this._f444._f433[x101][x102].style.display='';
}
}
var x103=this.tileLayerDiv.offsetLeft;
var x104=this.tileLayerDiv.offsetTop;
var x105=this.tileLayerDiv.parentNode.offsetLeft;
var x106=this.tileLayerDiv.parentNode.offsetTop;
MVUtil._f70(this.tileLayerDiv,x103+this.parentLeft,x104+this.parentTop);
this.startClear();
}
function _f920()
{
}
_f920._f414=function(x0,x1,x2)
{
var x3=_f375._f378({x:x0,y:x1});
x0=x3.x;
x1=x3.y;
var x4=Math.sin(x1);
var x5=Math.log((1+x4)/(1-x4));
var x6=x2*x0;
var x7=x5*x2/2;
return {x:x6,y:x7};
}
_f920._f418=function(x8,x9,x10)
{
var x11=x8/x10;
var x12=x9*2/x10;
var x13=Math.pow(Math.E,x12);
var x14=(x13-1)/(x13+1);
var x15=Math.asin(x14);
return _f375._f379({x:x11,y:x15});
}
_f65._f419(3785,8307,function(x16,x17){
return _f920._f418(x16,x17,6378137);
});
_f65._f419(8307,3785,function(x18,x19){
return _f920._f414(x18,x19,6378137);
});
_f65._f419(53004,8307,function(x20,x21){
return _f920._f418(x20,x21,6371000);
});
_f65._f419(8307,53004,function(x22,x23){
return _f920._f414(x22,x23,6371000);
});
_f65._f419(53004,54004,function(x24,x25){
var x26=_f920._f418(x24,x25,6371000);
return _f412._f414(x26.x,x26.y,8307,54004);
});
_f65._f419(54004,53004,function(x27,x28){
var x29=_f412._f418(x27,x28,54004,8307);
return _f920._f414(x29.x,x29.y,6371000);
});
_f65._f419(3785,54004,function(x30,x31){
var x32=_f920._f418(x30,x31,6378137);
return _f412._f414(x32.x,x32.y,8307,54004);
});
_f65._f419(54004,3785,function(x33,x34){
var x35=_f412._f418(x33,x34,54004,8307);
return _f920._f414(x35.x,x35.y,6378137);
});
function MVButtonGroup()
{
this._f207=new Object();
this.toolBar=null;
var x0=this;
this.add=function(x1)
{
x0._f207[x1._f208]=x1;
x1.group=x0;
x1._f209=x0._f210;
if(this.toolBar)
this.toolBar.addButton(x1);
}
this.addSeparator=function(x2)
{
var x3=new MVToolButton(x2,MVToolButton.SEPARATOR);
this.add(x3);
}
this.reset=function()
{
this._f210();
}
this._f210=function(x4)
{
if(x0._f207)
{
for(var x5 in x0._f207)
{
if(x4==undefined)
x0._f207[x5].reset();
else if(x4.substring(x4.lastIndexOf("bt_")+3)=="clear")
x0._f207[x5]._f211(x4,true);
else
 x0._f207[x5]._f211(x4);
}
}
}
}
function MVDistanceTool(x0,x1)
{
var x2=this;
this._f401=true;
this._f402=true;
this._f400=x0;
this._f3=x1;
this._f342=null;
this._f403=null;
this._f349=null;
this._f93=new Object();
this.srid=null;
this._f404=null;
this._f405=new MVRedlineTool(null,null,x1);
this._f405.setGeneratePolygonTop(false);
this.init=function()
{
x2.parent.addRedLineTool(x2._f405);
x2.srid=x2.parent.srid;
if(x2._f405.getStatus()!=0)
{
x2.clear();
}
x2._f405.finishLinkClick=x2.finish;
x2._f405.clearLinkClick=x2.clear;
x2._f405.init(2);
x2._f405._f333=-1;
x2._f405.setEventListener(MVEvent.NEW_SHAPE_POINT,x2._f406);
x2._f405.setEventListener(MVEvent.MODIFY,x2._f407);
if(x2._f402)
{
x2._f404=x2.parent._f408;
x2.parent.setEventListener(MVEvent.MOUSE_DOUBLE_CLICK,x2.finish);
}
MVUtil.runListeners(this._f93,MVEvent.INIT,[MVToolBar.BUILTIN_DISTANCE]);
}
this.setEventListener=function(x3,x4)
{
if(x3==MVEvent.NEW_SHAPE_POINT)
x2._f403=x4;
else if(x3==MVEvent.FINISH)
x2._f342=x4;
else if(x3==MVEvent.MODIFY)
x2._f349=x4;
}
this.attachEventListener=function(x5,x6)
{
MVUtil.attachEventListener(x2._f93,x5,x6)
}
this.detachEventListener=function(x7,x8)
{
MVUtil.detachEventListener(x2._f93,x7,x8);
}
this.setRenderingStyle=function(x9,x10)
{
this._f405.setRenderingStyle(x9,x10);
}
this.setTextStyle=function(x11)
{
x2._f405.setTextStyle(x11);
}
this.getOrdinates=function()
{
return x2._f405.getOrdinates();
}
this.getStatus=function()
{
return x2._f405.getStatus();
}
this.finish=function(x12)
{
if(x2._f405!=null&&x2.getStatus()!=2)
{
if(x2._f405.getOrdinates().length<=2)
{
x2.clear();
}
else
 {
x2._f405.generateArea();
if(x2._f342)
x2._f342();
MVUtil.runListeners(x2._f93,MVEvent.FINISH);
}
}
x2.parent._f408=x2._f404;
}
this.clear=function()
{
if(x2._f405!=null)
{
x2._f405.clear();
var x13=document.getElementById("distance_info_div_"+x2._f405.id);
if(x13)
x13.innerHTML="";
MVUtil.runListeners(x2._f93,MVEvent.CLEAR);
x2.parent._f408=x2._f404;
}
}
this._f406=function()
{
if(x2._f401)
{
if(x2._f405==null)
return;
var x14=x2._f405.getOrdinates();
if(x14==null||x14.length<4)
{
if(x2._f403)
x2._f403();
MVUtil.runListeners(x2._f93,MVEvent.NEW_SHAPE_POINT);
return;
}
var x15=MVSdoGeometry.createLineString(x14,x2.srid);
var x16=function(x17)
{
var x18=MVi18n._f354("totalDistance")+x2._f409(x17);
var x19=document.getElementById("distance_info_div_"+x2._f405.id);
if(!x19)
{
x19=document.createElement("div");
x19.id="distance_info_div_"+x2._f405.id;
x2._f405.getInfoDecorationDiv().appendChild(x19);
}
x19.innerHTML=x18;
}
if(x2._f400==MVDistanceTool.METRIC)
parseInt(x15.getLength("meter",true,x2._f3,x16));
else
 parseInt(x15.getLength("Yard",true,x2._f3,x16));
}
if(x2._f403)
x2._f403();
MVUtil.runListeners(x2._f93,MVEvent.NEW_SHAPE_POINT);
}
this.getDistance=function(x20,x21,x22)
{
if(x2._f405==null)
return 0;
var x23=x2._f405.getOrdinates();
if(x23==null||x23.length<4)
return 0;
var x24=x23.length;
var x25=new Array(4);
for(var x26=0;x26<4;x26++)
x25[x26]=x23[x24+x26-4];
var x27=MVSdoGeometry.createLineString(x25,x2.srid);
var x28;
var x29=function(x30)
{
x28=x30;
}
parseInt(x27.getLength(x20,x21,x22,x29));
return x28;
}
this._f411=function(x31,x32,x33)
{
if(x2._f405==null)
return 0;
var x34=x2._f405.getOrdinates();
if(x34==null||x34.length<4)
return 0;
var x35=MVSdoGeometry.createLineString(x34,x2.srid);
var x36;
var x37=function(x38)
{
x36=x38;
}
parseInt(x35.getLength(x31,x32,x33,x37));
return x36;
}
this._f409=function(x39)
{
if(x2._f400==MVDistanceTool.METRIC)
{
if(x39>1000)
return MVUtil.formatNum(x39/1000)+MVi18n._f354("km");
else if(x39>1)
return MVUtil.formatNum(x39)+MVi18n._f354("m");
else
 return MVUtil.formatNum(x39*10)+MVi18n._f354("cm");
}
else
 {
if(x39>1760)
return MVUtil.formatNum(x39/1760)+MVi18n._f354("mi");
else if(x39*3>1000)
return MVUtil.formatNum(x39)+MVi18n._f354("yd");
else if(x39*3>1)
return MVUtil.formatNum(x39*3)+MVi18n._f354("ft");
else
 return MVUtil.formatNum(x39*3*12)+MVi18n._f354("in");
}
}
this._f407=function()
{
if(x2._f401)
x2._f406();
else
 {
if(x2._f349)
x2._f349();
MVUtil.runListeners(x2._f93,MVEvent.MODIFY);
}
}
}
MVDistanceTool.prototype.setUnitStandard=function(x0)
{
this._f400=x0;
}
MVDistanceTool.METRIC=0;
MVDistanceTool.IMPERIAL=1;
function MVInfoWindowTab(x0,x1)
{
this.title=x0;
this.content=x1;
}
MVInfoWindowTab.prototype.getTitle=function()
{
return this.title;
}
MVInfoWindowTab.prototype.getContent=function()
{
return this.content;
}
function MVMenu(x0,x1,x2)
{
this.mapview=x0;
this.menuTableId="mvmenu_table_0";
this.menuTableBodyId="mvmenu_table_body_0";
this.menuFOIId="mvmenu_0";
x0.removeFOI(this.menuFOIId);
var x3="<table id='"+this.menuTableId+"' cellpadding=1 cellspacing=0 style='width:1px'><tr>"+
"<td style='border-width:1px;border-style:solid;border-color:black;background-color:white'>"+
"<table><tbody id='"+this.menuTableBodyId+"'></tbody></table>"+
"</td>"+
"</tr></table>"
var x4=MVFOI.createHTMLFOI(this.menuFOIId,x1,x3,0,0);
if(x2)
x4.areacode=x2;
x4.setInfoTip(null);
x4.setInfoWindow(null,0,0);
x4.setTopFlag(true);
x0.addFOI(x4);
var x5=this.menuFOIId;
var x6=function()
{
x0.removeFOI(x5);
}
x0.addEventListener(MVEvent.MOUSE_CLICK,x6);
}
MVMenu.count=0;
MVMenu.prototype.addMenuItem=function(x0,x1)
{
var x2=document.getElementById(this.menuTableBodyId);
var x3=document.getElementById(this.menuTableId).style.width;var x4=parseInt(x3.substr(0,x3.length-2));
if(x4<(x0.length*12))
document.getElementById(this.menuTableId).style.width=(x0.length*12)+"px";
var x5=document.createElement('tr');
x2.appendChild(x5);
x5.style.fontFamily="Arial, Helvetica, Geneva, sans-serif";
x5.style.fontSize="12px";
x5.style.cursor="pointer";
x5.align='left';
var x6=document.createElement("td");
x6.innerHTML=x0;
x5.appendChild(x6);
x5.onmouseover=function()
{
this.style.backgroundColor="#336699";
this.style.color="#ffffff";
}
x5.onmouseout=function()
{
this.style.backgroundColor="transparent";
this.style.color="#000000";
}
if(x1)
{
var x2=this;
x5.onmousedown=function(x7)
{
MVUtil._f175(x7);
x2.removeRightClickMenu();
x1();
}
}
}
MVMenu.prototype.removeRightClickMenu=function()
{
this.mapview.removeFOI(this.menuFOIId);
}
function MVToolBar(x0,x1,x2)
{
if(x2==MVToolBar.VERTICAL)
this.Direction=x2;
else
 this.Direction=MVToolBar.HORIZONTAL;
this._f667=x0;
this._f668=x1;
this.mapviewer=null;
this.toolBarDecoration=null;
this._f669;
this._f670=new Object();
var x3=this;
var x4=null;
this.visible=true;
this.clearButtonAdded=false;
var x5=_f65._f623;
var x6=_f65._f624;
this._f671=new MVToolButton(x0+"_bt_clear",MVToolButton.COMMAND,_f65._f141+"tbicons/clear.gif",_f65._f141+"tbicons/p_clear.gif",x5,x6);
this._f672=new MVToolButton(x0+"_bt_redline",MVToolButton.TOGGLE,_f65._f141+"tbicons/redline.gif",_f65._f141+"tbicons/p_redline.gif",x5,x6);
this._f673=new MVToolButton(x0+"_bt_distance",MVToolButton.TOGGLE,_f65._f141+"tbicons/distance.gif",_f65._f141+"tbicons/p_distance.gif",x5,x6);
this._f674=new MVToolButton(x0+"_bt_circle",MVToolButton.TOGGLE,_f65._f141+"tbicons/circle.gif",_f65._f141+"tbicons/p_circle.gif",x5,x6);
this._f675=new MVToolButton(x0+"_bt_rectangle",MVToolButton.TOGGLE,_f65._f141+"tbicons/rectangle.gif",_f65._f141+"tbicons/p_rectangle.gif",x5,x6);
this._f676=new MVToolButton(x0+"_bt_zoom",MVToolButton.TOGGLE,_f65._f141+"tbicons/zoom.gif",_f65._f141+"tbicons/p_zoom.gif",x5,x6);
this._f677=new MVButtonGroup();
this._f678=new Array();
this.buttonsToAdd=new Array();
this._f170=function()
{
this._f668=null;
this.mapviewer=null;
this.toolBarDecoration=null;
this._f669=null;
this._f670=null;
this._f671._f170();
this._f672._f170();
this._f673._f170();
this._f674._f170();
this._f675._f170();
this._f676._f170();
this._f671=null;
this._f672=null;
this._f673=null;
this._f674=null;
this._f675=null;
this._f676=null;
this._f677=null;
this._f678=null;
this.buttonsToAdd=null;
}
this.setPosition=function(x7,x8,x9,x10)
{
if(!x9)
x9=0;
if(!x10)
x10=0;
x3.toolBarDecoration.setPosition(x7,x8,x9,x10);
}
this.setVisible=function(x11)
{
if(x3.visible!=x11)
{
x3.toolBarDecoration.setVisible(x11);
x3.visible=x11;
}
}
this.isVisible=function()
{
return this.visible;
}
this.getBuiltInTool=function(x12)
{
if(x3._f668[MVToolBar.BUILTIN_ALL]==true||x3._f668[x12]==true)
{
var x13=null;
switch(x12)
{
case MVToolBar.BUILTIN_CIRCLE:
x13=x3._f674;
break;
case MVToolBar.BUILTIN_RECTANGLE:
x13=x3._f675;
break;
case MVToolBar.BUILTIN_REDLINE:
x13=x3._f672;
break;
case MVToolBar.BUILTIN_DISTANCE:
x13=x3._f673;
break;
}
if(x13)
return x13.tool;
else
 return null;
}
else
 return null;
}
this.addButton=function(x14)
{
if(x14._f679==MVToolButton.SEPARATOR)
{
if(x3.Direction==MVToolBar.HORIZONTAL)
x14._f680.setAttribute("src",_f65._f141+"tbicons/bk_v.png");
else
 x14._f680.setAttribute("src",_f65._f141+"tbicons/bk_h.png");
}
if(x4)
x3.addButtonToDOM(x14);
else
 x3.buttonsToAdd.push(x14);
}
this.addButtonToDOM=function(x15)
{
var x16=null;
var x17=null;
if(x3.Direction==MVToolBar.HORIZONTAL)
{
if(x4.childNodes.length==0)
{
x16=x4.insertRow(0);
}
else
 {
x16=x4.firstChild.firstChild;
}
x17=x16.insertCell(x16.childNodes.length);
x17.id="_td_"+x15._f208
}
else
 {
if(x4.childNodes.length==0)
x16=x4.insertRow(0);
else
 x16=x4.insertRow(x4.firstChild.childNodes.length);
x16.id="_tr_"+x15._f208;
x17=x16.insertCell(0);
}
x15._f681=x3;
x17.appendChild(x15._f682);
x3._f670[x15._f208]=x15;
x15._f681=x3;
}
this.addSeparator=function(x18)
{
var x19=new MVToolButton(x18,MVToolButton.SEPARATOR);
x3.addButton(x19);
}
this.getButton=function(x20)
{
return x3._f670[x20];
}
this.getBuiltInButton=function(x21)
{
if(x21==MVToolBar.BUILTIN_CLEAR&&this.clearButtonAdded)
return this._f671;
if(x3._f668[MVToolBar.BUILTIN_ALL]==true||x3._f668[x21]==true)
{
var x22=null;
switch(x21)
{
case MVToolBar.BUILTIN_CIRCLE:
x22=x3._f674;
break;
case MVToolBar.BUILTIN_RECTANGLE:
x22=x3._f675;
break;
case MVToolBar.BUILTIN_REDLINE:
x22=x3._f672;
break;
case MVToolBar.BUILTIN_DISTANCE:
x22=x3._f673;
break;
case MVToolBar.BUILTIN_MARQUEE_ZOOM:
x22=x3._f676;
break;
}
if(x22)
return x22;
else
 return null;
}
else
 return null;
}
this.removeButton=function(x23)
{
if(!x23)
return ;
delete x3._f670[x23._f208];
if(x23.group)
{
delete x23.group._f207[x23._f208];
x23.group=null;
}
if(x3.Direction==MVToolBar.HORIZONTAL)
{
if(x4.childNodes.length==0)
{
return;
}
else
 {
oTR=x4.firstChild.firstChild;
for(var x24=0;x24<oTR.childNodes.length;x24++)
{
if(oTR.childNodes[x24].id=="_td_"+x23._f208)
{
oTR.deleteCell(x24);
}
}
}
}
else
 {
if(x4.childNodes.length==0)
{
return;
}
else
 {
for(var x24=0;x24<x4.firstChild.childNodes.length;x24++)
{
if(x4.firstChild.childNodes[x24].id=="_tr_"+x23._f208)
{
x4.firstChild.deleteRow(x24);
}
}
}
}
}
this.getBuiltInButtonGroup=function()
{
return this._f677;
}
this.addButtonGroup=function(x25)
{
if(x25)
{
x25.toolBar=this;
this._f678.push(x25);
for(var x26 in x25._f207)
{
this.addButton(x25._f207[x26]);
}
}
}
this.removeButtonGroup=function(x27)
{
if(x27)
{
for(var x28=0;x28<this._f678.length;x28++)
{
if(this._f678[x28]==x27)
{
this._f678.splice(x28,1);
for(var x29 in x27._f207)
{
this.removeButton(x27._f207[x29]);
}
return ;
}
}
}
}
this.init=function()
{
x3.toolBarDecoration.setVisible(x3.visible);
x3.toolBarDecoration.setDraggable(true);
x4=document.createElement("Table");
x4.id="tb_"+x3._f667;
x4.style.backgroundColor="rgb(242, 237, 242)";
x4.cellSpacing=1;
x4.cellPadding=1;
x4.style.border="1px solid #7F9DB9";
x3._f683();
var x30=x3.buttonsToAdd;
while(x30.length>0)
{
var x31=x30.shift()
x3.addButtonToDOM(x31);
}
}
this._f683=function()
{
x3._f671.setToolTip(MVi18n._f354("clearButton"));
x3._f672.setToolTip(MVi18n._f354("redlineTool"));
x3._f673.setToolTip(MVi18n._f354("distanceTool"));
x3._f674.setToolTip(MVi18n._f354("circleTool"));
x3._f675.setToolTip(MVi18n._f354("retangleTool"));
x3._f676.setToolTip(MVi18n._f354("marqueeZoomTool"));
x3._f672.btName=MVToolBar.BUILTIN_REDLINE;
x3._f673.btName=MVToolBar.BUILTIN_DISTANCE;
x3._f674.btName=MVToolBar.BUILTIN_CIRCLE;
x3._f675.btName=MVToolBar.BUILTIN_RECTANGLE;
x3._f676.btName=MVToolBar.BUILTIN_MARQUEE_ZOOM;
x3._f671.attachEventListener(MVEvent.BUTTON_DOWN,x3._f684);
x3._f672.attachEventListener(MVEvent.BUTTON_DOWN,x3._f684);
x3._f673.attachEventListener(MVEvent.BUTTON_DOWN,x3._f684);
x3._f674.attachEventListener(MVEvent.BUTTON_DOWN,x3._f684);
x3._f675.attachEventListener(MVEvent.BUTTON_DOWN,x3._f684);
x3._f676.attachEventListener(MVEvent.BUTTON_DOWN,x3._f684);
x3._f672.attachEventListener(MVEvent.BUTTON_UP,x3._f685);
x3._f673.attachEventListener(MVEvent.BUTTON_UP,x3._f685);
x3._f674.attachEventListener(MVEvent.BUTTON_UP,x3._f685);
x3._f675.attachEventListener(MVEvent.BUTTON_UP,x3._f685);
x3._f676.attachEventListener(MVEvent.BUTTON_UP,x3._f685);
x3._f677.add(x3._f671);
x3._f677.add(x3._f672);
x3._f677.add(x3._f673);
x3._f677.add(x3._f674);
x3._f677.add(x3._f675);
x3._f677.add(x3._f676);
var x32=new MVCircleTool();
var x33=new MVStyleColor("_bt_circle_area_color",null,"FF0000");
x32.setAreaStyle(x33);
x3._f674.tool=x32;
var x34=new MVRectangleTool();
var x33=new MVStyleColor("_bt_rectangle_area_color",null,"FF0000");
x34.setAreaStyle(x33);
x3._f675.tool=x34;
var x35=new MVRedlineTool();
x3._f672.tool=x35;
var x36=new MVDistanceTool(MVDistanceTool.IMPERIAL);
var x37=new MVStyleMarker("_bt_distance_point","vector");
x37.setStrokeColor("ff0000");
x37.setFillColor("00FF00");
x37.setVectorShape("c:30");
x36.setRenderingStyle(MVRedlineTool.STYLE_POINT,x37);
var x38='<svg width="1in" height="1in"><desc/><g class="line" style="stroke-width:1.0">'+
'<line class="base" style="fill:#ff0000;stroke-width:1.0" /></g></svg>';
var x39=new MVXMLStyle("_bt_distance_line",x38);
x36.setRenderingStyle(MVRedlineTool.STYLE_LINE,x39);
x3._f673.tool=x36;
}
this._f686=function()
{
x3._f669=document.getElementById("div_"+x3._f667);
x3._f669.appendChild(x4);
}
this._f687=function(x40)
{
var x41=[false,false,false,false,false,false];
if(x40==null&&x3._f668)
{
for(var x42=0;x42<x3._f668.length;x42++)
{
x41[x3._f668[x42]]=true;
}
if(x41[MVToolBar.BUILTIN_ALL]==true)
{
x41=[true,true,true,true,true,true];
}
x3._f668=x41;
for(var x42=0;x42<x41.length;x42++)
{
if(x41[x42])
{
x3.addButton(x3._f671);
x3.clearButtonAdded=true;
break;
}
}
}
else if(x40!=null)
{
if(x3._f668==null)
{
x3._f668=[false,false,false,false,false,false];
x3._f668[x40.btName]=true;
x41=x3._f668;
for(var x42=0;x42<x41.length;x42++)
{
if(x41[x42])
{
x3.addButton(x3._f671);
x3.clearButtonAdded=true;
break;
}
}
}
else if(x3._f668[x40.btName]==true)
return;
else if(x3._f668[x40.btName]==false)
{
x3._f668[x40.btName]=true;
x41=[false,false,false,false,false,false];
x41[x40.btName]=true;
}
}
var x43=function(x44)
{
for(var x45 in x3._f670)
{
if(x3._f670[x45].tool)
{
var x46=x3._f670[x45]._f208;
if(x46.indexOf(x44)!=-1)
{
x3._f670[x45]._f211();
}
}
}
}
var x47=function()
{
x43("redline");
}
var x48=function()
{
x43("distance");
}
var x49=function()
{
x43("circle");
}
var x50=function()
{
x43("rectangle");
}
var x51=function()
{
if(x3._f672.tool.getPointFOIs().length>0)
x3._f672.tool.clear();
x43("redline");
}
var x52=function()
{
if(x3._f673.tool._f405.getPointFOIs().length>0)
x3._f673.tool.clear();
x43("distance");
}
var x53=function()
{
x43("circle");
if(x3._f674.tool.getStatus()!=0)
x3._f674.tool.clear();
}
var x54=function()
{
x43("rectangle");
if(x3._f675.tool.getStatus()!=0)
x3._f675.tool.clear();
}
var x55=function()
{
x43("zoom");
}
var x56=function(x57)
{
var x58=x3.getBuiltInButton(x57);
if(x58._f688==MVToolButton.UP)
{
x58.group.reset();
x58._f680.setAttribute("src",x58._f689);
x58._f688=MVToolButton.DOWN;
if(x58._f209)
x58._f209(x58._f208);
}
}
for(var x42=1;x42<x41.length;x42++)
{
if(x41[x42]==true)
{
x3.addSeparator("sp_builtIn_"+x42);
if(x42==MVToolBar.BUILTIN_CIRCLE)
{
x3.addButton(x3._f674);
x3.mapviewer.addCircleTool(x3._f674.tool);
x3._f674.tool.attachEventListener(MVEvent.FINISH,x49);
x3._f674.tool.attachEventListener(MVEvent.CLEAR,x53);
x3._f674.tool.attachEventListener(MVEvent.INIT,x56);
}
else if(x42==MVToolBar.BUILTIN_RECTANGLE)
{
x3.addButton(x3._f675);
x3.mapviewer.addRectangleTool(x3._f675.tool);
x3._f675.tool.attachEventListener(MVEvent.FINISH,x50);
x3._f675.tool.attachEventListener(MVEvent.CLEAR,x54);
x3._f675.tool.attachEventListener(MVEvent.INIT,x56);
}
else if(x42==MVToolBar.BUILTIN_REDLINE)
{
x3.addButton(x3._f672);
x3.mapviewer.addRedLineTool(x3._f672.tool);
x3._f672.tool.attachEventListener(MVEvent.FINISH,x47);
x3._f672.tool.attachEventListener(MVEvent.CLEAR,x51);
x3._f672.tool.attachEventListener(MVEvent.INIT,x56);
}
else if(x42==MVToolBar.BUILTIN_DISTANCE)
{
x3.addButton(x3._f673);
x3.mapviewer.addDistanceTool(x3._f673.tool);
x3._f673.tool.attachEventListener(MVEvent.FINISH,x48);
x3._f673.tool.attachEventListener(MVEvent.CLEAR,x52);
x3._f673.tool.attachEventListener(MVEvent.INIT,x56);
}
else if(x42==MVToolBar.BUILTIN_MARQUEE_ZOOM)
{
x3.addButton(x3._f676);
}
}
}
}
this._f684=function(x59)
{
if(x59==x0+"_bt_clear")
{
for(var x60 in x3._f670)
{
if(x3._f670[x60].tool)
{
var x61=x3._f670[x60]._f208;
if((x61==x0+"_bt_redline"||x61==x0+"_bt_distance"||
x61==x0+"_bt_circle"||x61==x0+"_bt_rectangle")&&
x3._f670[x60].tool.parent!=null)
x3._f670[x60].tool.clear();
}
}
}
else if(x59==x0+"_bt_redline")
{
if(x3.getButton(x59).tool)
{
var x62=x3.getButton(x59).tool;
x62.init();
}
}
else if(x59==x0+"_bt_distance")
{
var x63;
if(x3.getButton(x59).tool)
{
x63=x3.getButton(x59).tool;
x63.init();
}
}
else if(x59==x0+"_bt_circle")
{
var x64;
if(x3.getButton(x59).tool)
{
x64=x3.getButton(x59).tool;
x64.init();
}
}
else if(x59==x0+"_bt_rectangle")
{
var x65;
if(x3.getButton(x59).tool)
{
x65=x3.getButton(x59).tool;
x65.init();
}
}
else if(x59==x0+"_bt_zoom")
{
var x66=new Object();
x66.borderColor="#0000FF";
x66.borderWidth=2;
x66.borderDashed=false;
x66.fillColor="#FF0000";
x66.fillOpacity=0.5;
x3.mapviewer.startMarqueeZoom("continuous",x66);
var x67=function()
{
x3._f670[x59]._f211();
}
x3.mapviewer.attachEventListener(MVEvent.MARQUEEZOOM_FINISH,x67);
}
}
this._f685=function(x68)
{
if(x68==x0+"_bt_redline")
{
if(x3.getButton(x68).tool)
{
if(x3.getButton(x68).tool.getPointFOIs().length>=3)
x3.getButton(x68).tool.generateArea();
else
 x3.getButton(x68).tool.clear();
}
}
if(x68==x0+"_bt_distance")
{
if(x3.getButton(x68).tool)
{
x3.getButton(x68).tool.clear();
}
}
else if(x68==x0+"_bt_zoom")
{
x3.mapviewer.stopMarqueeZoom();
}
}
this.toolBarDecoration=new MVMapDecoration("<div id=\"div_"+x3._f667+"\" style=\"background: white;\"></div>",0.35,0.05);
}
MVToolBar.VERTICAL=0;
MVToolBar.HORIZONTAL=1;
MVToolBar.BUILTIN_ALL=0;
MVToolBar.BUILTIN_CIRCLE=1;
MVToolBar.BUILTIN_RECTANGLE=2;
MVToolBar.BUILTIN_REDLINE=3;
MVToolBar.BUILTIN_DISTANCE=4;
MVToolBar.BUILTIN_MARQUEE_ZOOM=5;
MVToolBar.BUILTIN_CLEAR=6;
function MVToolButton(x0,x1,x2,x3,x4,x5)
{
this._f208=x0;
this._f679=x1;
this._f921=x2;
this._f689=x3;
this._f688=MVToolButton.UP;
this._f681=null;
this._f93=new Object();
this._f922=null;
this._f923=null;
this._f209=null;
this._f682=document.createElement("div");
this._f680=document.createElement("img");
this._f924=document.createElement("div");
this.btName=null;
this.width=x4;
this.height=x5;
var x6=this;
this._f170=function()
{
MVUtil._f201(x6._f682);
x6._f682=null;
MVUtil._f201(x6._f680);
x6._f680=null;
MVUtil._f201(x6._f924);
x6._f924=null;
x6=null;
}
this.attachEventListener=function(x7,x8)
{
MVUtil.attachEventListener(x6._f93,x7,x8)
}
this.detachEventListener=function(x9,x10)
{
MVUtil.detachEventListener(x6._f93,x9,x10);
}
this.setToolTip=function(x11)
{
x6._f924.innerHTML=x11;
}
this.reset=function()
{
this._f211();
}
this._f925=function()
{
x6._f682.appendChild(x6._f680);
x6._f682.appendChild(x6._f924);
x6._f924.style.position="absolute";
x6._f924.style.display="none";
x6._f924.style.borderColor="black";
x6._f924.style.backgroundColor="#ffffe1";
x6._f924.style.borderWidth="1px";
x6._f924.style.borderStyle="solid";
x6._f924.style.fontSize="14px";
x6._f924.style.whiteSpace="nowrap";
x6._f924.style.padding="2px";
if(x6._f679!=MVToolButton.SEPARATOR)
{
x6._f680.setAttribute("src",x6._f921);
if(x6.width)
x6._f680.setAttribute("width",x6.width);
if(x6.height)
x6._f680.setAttribute("height",x6.height);
}
}
this._f680.onmouseover=function()
{
if(x6._f679!=MVToolButton.SEPARATOR)
{
MVUtil._f162(x6._f681._f669,"pointer");
if(x6._f924.innerHTML)
{
x6._f924.style.display="";
MVUtil._f70(x6._f924,x6._f682.parentNode.offsetLeft+5,x6._f682.parentNode.offsetTop+30);
}
}
else
 {
MVUtil._f162(x6._f681._f669,"default");
}
}
this._f680.onmouseout=function(x12)
{
if(x6._f688==MVToolButton.DOWN)
x6._f680.onmouseup(x12);
x6._f924.style.display="none";
}
MVUtil.setListener(this._f680,"mousedown",function(x13)
{
if(x6._f209)
x6._f209(x6._f208);
if(x6._f679==MVToolButton.COMMAND)
{
x6._f680.setAttribute("src",x6._f689);
x6._f688=MVToolButton.DOWN;
x13=(x13)?x13:((window.event)?event:null);
MVUtil._f175(x13);
if(x6._f922)
x6._f922(x6._f208);
MVUtil.runListeners(x6._f93,MVEvent.BUTTON_DOWN,[x6._f208]);
}
else if(x6._f679==MVToolButton.TOGGLE)
{
if(x6._f688==MVToolButton.UP)
{
x6._f680.setAttribute("src",x6._f689);
x6._f688=MVToolButton.DOWN;
x13=(x13)?x13:((window.event)?event:null);
MVUtil._f175(x13);
if(x6._f922)
x6._f922(x6._f208);
MVUtil.runListeners(x6._f93,MVEvent.BUTTON_DOWN,[x6._f208]);
}
else
 {
x6._f680.setAttribute("src",x6._f921);
x6._f688=MVToolButton.UP;
x13=(x13)?x13:((window.event)?event:null);
MVUtil._f175(x13);
if(x6._f923)
x6._f923(x6._f208);
MVUtil.runListeners(x6._f93,MVEvent.BUTTON_UP,[x6._f208]);
}
}
},true);
MVUtil.setListener(this._f680,"mouseup",function(x14)
{
if(x6._f679==MVToolButton.COMMAND&&x6._f688==MVToolButton.DOWN)
{
x6._f680.setAttribute("src",x6._f921);
if(x6._f923)
x6._f923(x6._f208);
MVUtil.runListeners(x6._f93,MVEvent.BUTTON_UP,[x6._f208]);
x6._f688=MVToolButton.UP;
}
},true);
this._f211=function(x15,x16)
{
if(x6._f679==MVToolButton.TOGGLE&&(x15==undefined||x6._f208!=x15))
{
if(x6._f688==MVToolButton.DOWN)
{
x6._f680.setAttribute("src",x6._f921);
x6._f688=MVToolButton.UP;
if(x16==null||!x16)
MVUtil.runListeners(x6._f93,MVEvent.BUTTON_UP,[x6._f208]);
}
}
}
x6._f925();
}
MVToolButton.COMMAND=0;
MVToolButton.TOGGLE=1;
MVToolButton.SEPARATOR=2;
MVToolButton.UP=0;
MVToolButton.DOWN=1;
MVGoogleTileLayer.LOADEDJS=false;
MVGoogleTileLayer.LOADING=false;
MVGoogleTileLayer.TYPES=null;
MVGoogleTileLayer.finishLoadJs=function()
{
MVGoogleTileLayer.LOADEDJS=true;
MVGoogleTileLayer.TYPES=new Array();
MVGoogleTileLayer.TYPES[MVGoogleTileLayer.TYPE_ROAD]=G_NORMAL_MAP;
MVGoogleTileLayer.TYPES[MVGoogleTileLayer.TYPE_SATELLITE]=G_SATELLITE_MAP;
MVGoogleTileLayer.TYPES[MVGoogleTileLayer.TYPE_HYBRID]=G_HYBRID_MAP;
MVGoogleTileLayer.TYPES[MVGoogleTileLayer.TYPE_SHADED]=G_PHYSICAL_MAP;
}
function MVGoogleTileLayer(config)
{
this.key="your_google_api_key";
this.libURL=null;
if(config&&config.key)
this.key=config.key;
if(eval("typeof GMap2")!="undefined")
MVGoogleTileLayer.finishLoadJs();
if(!MVGoogleTileLayer.LOADEDJS&&!MVGoogleTileLayer.LOADING)
{
MVGoogleTileLayer.LOADING=true;
if(config&&config.libURL)
{
this.libURL=config.libURL
MVUtil.loadScriptByUrl(this.libURL+"&key="+this.key+"&async=2&callback=MVGoogleTileLayer.finishLoadJs");
}
else
 MVUtil.loadScriptByUrl("http://maps.google.com/maps?file=api&v=2&key="+this.key+"&async=2&callback=MVGoogleTileLayer.finishLoadJs");
}
this._f560=
{
"mapTileLayer":"MV3785_1_19",
"format":"PNG",
"coordSys":
{
"srid":3785,
"type":"PROJECTED",
"distConvFactor":1.0,
"minX":-2.0037508E7,"minY":-2.0037508E7,
"maxX":2.0037508E7,"maxY":2.0037508E7
},
"zoomLevels":
[
{"zoomLevel":1,"name":"","tileWidth":2.0037508E7,"tileHeight":2.0037508E7,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":2,"name":"","tileWidth":1.0018754E7,"tileHeight":1.0018754E7,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":3,"name":"","tileWidth":5009377.0,"tileHeight":5009377.0,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":4,"name":"","tileWidth":2504688.5,"tileHeight":2504688.5,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":5,"name":"","tileWidth":1252344.25,"tileHeight":1252344.25,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":6,"name":"","tileWidth":626172.125,"tileHeight":626172.125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":7,"name":"","tileWidth":313086.0625,"tileHeight":313086.0625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":8,"name":"","tileWidth":156543.03125,"tileHeight":156543.03125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":9,"name":"","tileWidth":78271.515625,"tileHeight":78271.515625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":10,"name":"","tileWidth":39135.7578125,"tileHeight":39135.7578125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":11,"name":"","tileWidth":19567.87890625,"tileHeight":19567.87890625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":12,"name":"","tileWidth":9783.939453125,"tileHeight":9783.939453125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":13,"name":"","tileWidth":4891.9697265625,"tileHeight":4891.9697265625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":14,"name":"","tileWidth":2445.98486328125,"tileHeight":2445.98486328125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":15,"name":"","tileWidth":1222.992431640625,"tileHeight":1222.992431640625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":16,"name":"","tileWidth":611.4962158203125,"tileHeight":611.4962158203125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":17,"name":"","tileWidth":305.74810791015625,"tileHeight":305.74810791015625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":18,"name":"","tileWidth":152.87405395507812,"tileHeight":152.87405395507812,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":19,"name":"","tileWidth":76.43702697753906,"tileHeight":76.43702697753906,"tileImageWidth":256,"tileImageHeight":256}
]
};
this.srid=8307;
this._f559=MVMapTileLayer;
this._f559(this._f560.mapTileLayer);
this.mapType=MVGoogleTileLayer.TYPE_ROAD;
if(config&&config.mapType)
this.mapType=config.mapType;
this._f22=null;
this._f23=null;
this._f53=null;
this.initializeListener=null;
this.map=null;
this._f626=null;
this._f627=null;
this.clonedGmap=null;
}
MVGoogleTileLayer.prototype=new MVMapTileLayer;
MVGoogleTileLayer.prototype.setMapType=function(x0)
{
var x1=this;
var x2=function()
{
x1.mapType=x0;
if(x1.map)
{
x1.checkMapType();
if(x1.map)
x1.map.setMapType(MVGoogleTileLayer.TYPES[x1.mapType]);
if(x1.clonedGmap)
x1.clonedGmap.map.setMapType(MVGoogleTileLayer.TYPES[x1.mapType]);
}
else
 setTimeout(x2,1000);
}
x2();
}
MVGoogleTileLayer.prototype.getMapType=function()
{
return this.mapType;
}
MVGoogleTileLayer.prototype.setKey=function(x3)
{
if(x3)
this.key=x3;
}
MVGoogleTileLayer.prototype.getType=function()
{
return "MVExternalAPIMapTileLayer";
}
MVGoogleTileLayer.prototype.init=function(x4)
{
var x5=this;
var x6=function()
{
if(x5.map)
return;
x5.map=new GMap2(x4);
x5.checkMapType();
if(x5.mapType)
x5.map.setMapType(MVGoogleTileLayer.TYPES[x5.mapType]);
if(x5._f22!=null&&x5._f23!=null&&x5._f53!=null)
{
var x7=new GLatLng(x5._f23,x5._f22);
x5.map.setCenter(x7,x5._f53+1);
}
if(x5.initializeListener)
x5.initializeListener();
var x8=function()
{
if(x4.childNodes.length==2&&x5.parent._f226==false)
{
x5._f626=x4.lastChild;
x5._f626.id="google_copyright";
x4.removeChild(x5._f626);
x5._f626.style.zIndex="100";
x4.parentNode.parentNode.parentNode.appendChild(x5._f626);
x5._f627=x4.lastChild;
if(x5._f627&&x5._f627.id=="logocontrol")
{
x5._f627.id="google_logo";
x4.removeChild(x5._f627);
x5._f627.style.zIndex="100";
x4.parentNode.parentNode.appendChild(x5._f627);
}
}
}
setTimeout(x8,1000);
}
var x9=function()
{
if(MVGoogleTileLayer.LOADEDJS)
x6(x4);
else
 setTimeout(x9,1000);
};
x9();
}
MVGoogleTileLayer.prototype.setCenterAndZoomLevel=function(x10,x11,x12,x13)
{
this._f22=x10;
this._f23=x11;
this._f53=x12;
var x14=this;
var x15=function()
{
if(x14.map)
{
x14.map.setCenter(new GLatLng(x11,x10),x12+1);
}
else if(!x13)
setTimeout(x15,1000);
};
x15();
}
MVGoogleTileLayer.prototype._f561=function(x16,x17)
{
var x18=this;
var x19=function()
{
if(x18.map)
{
x18.map.getDragObject().moveBy(new GSize(x16,x17));
}
else
 setTimeout(x19,1000);
};
x19();
}
MVGoogleTileLayer.prototype.getCenter=function()
{
var x20=this.map.getCenter();
if(x20)
return MVSdoGeometry.createPoint(x20.lng(),x20.lat(),this.srid);
else
 return null;
}
MVGoogleTileLayer.prototype.setCenter=function(x21,x22)
{
this._f22=x21;
this._f23=x22;
var x23=this;
var x24=function()
{
if(x23.map)
{
x23.map.setCenter(new GLatLng(x22,x21));
}
else
 setTimeout(x24,1000);
};
x24();
}
MVGoogleTileLayer.prototype.resize=function()
{
var x25=this;
var x26=function()
{
if(x25.map)
{
x25.map.checkResize();
}
else
 setTimeout(x26,1000);
};
x26();
}
MVGoogleTileLayer.prototype.clone=function()
{
this.clonedGmap=new MVGoogleTileLayer({mapType:this.mapType,key:this.key,libURL:this.libURL});
return this.clonedGmap;
}
MVGoogleTileLayer.prototype.setVisible=function(x27)
{
MVMapTileLayer.prototype.setVisible.call(this,x27);
if(this._f626)
this._f626.style.display=x27?"":"none";
if(this._f627)
this._f627.style.display=x27?"":"none";
}
MVGoogleTileLayer.prototype._f170=function()
{
MVMapTileLayer.prototype._f170.call(this);
this.map=null;
if(this._f626)
{
if(this._f626.parentNode)
this._f626.parentNode.removeChild(this._f626);
this._f626=null;
}
if(this._f627)
{
if(this._f627.parentNode)
this._f627.parentNode.removeChild(this._f627);
this._f627=null;
}
GUnload();
}
MVGoogleTileLayer.prototype.getStaticMapURL=function()
{
var x28="http://maps.google.com/maps/api/staticmap?";
var x29=this.map.getCenter();
var x30="center="+x29.lat()+","+x29.lng();
var x31="zoom="+(this._f53+1);
var x32="size="+this.map.getSize().width+"x"+this.map.getSize().height;
var x33;
switch(this.mapType)
{
case MVGoogleTileLayer.TYPE_SATELLITE:
x33="satellite";
break;
case MVGoogleTileLayer.TYPE_HYBRID:
x33="hybrid";
break;
case MVGoogleTileLayer.TYPE_SHADED:
x33="terrain";
break;
default:
x33="roadmap";
}
x33="maptype="+x33;
var x34="sensor="+"false";
var x35="key="+this.key;
x28=x28+x30+"&amp;"+x31+"&amp;"+x32+"&amp;"+x33+"&amp;"+x34+"&amp;"+x35;
return x28;
}
MVGoogleTileLayer.prototype.checkMapType=function()
{
var x36=MVGoogleTileLayer.TYPES[this.mapType];
if(!x36)
{
for(t in MVGoogleTileLayer.TYPES)
{
if(MVGoogleTileLayer.TYPES[t]==this.mapType)
{
this.mapType=t;
break;
}
}
}
}
MVGoogleTileLayer.TYPE_ROAD="road";
MVGoogleTileLayer.TYPE_SATELLITE="satellite";
MVGoogleTileLayer.TYPE_HYBRID="hybrid";
MVGoogleTileLayer.TYPE_SHADED="shaded";
MVBingTileLayer.LOADING=false;
MVBingTileLayer.TYPES=null;
function MVBingTileLayer(config)
{
this.key="your_bing_api_key";
this.libURL=null;
if(eval("typeof VEMap")=="undefined"&&!MVBingTileLayer.LOADING)
{
if(config&&config.libURL)
{
this.libURL=config.libURL;
MVUtil.loadScriptByUrl(this.libURL);
}
else
 MVUtil.loadScriptByUrl("http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=6.3");
MVBingTileLayer.LOADING=true;
}
if(config&&config.key)
this.key=config.key;
this.mapType=MVBingTileLayer.TYPE_ROAD;
if(config&&config.mapType)
this.mapType=config.mapType;
this._f560=
{
"mapTileLayer":"MV3785_1_19",
"format":"PNG",
"coordSys":
{
"srid":3785,
"type":"PROJECTED",
"distConvFactor":1.0,
"minX":-2.0037508E7,"minY":-2.0037508E7,
"maxX":2.0037508E7,"maxY":2.0037508E7
},
"zoomLevels":
[
{"zoomLevel":0,"name":"","tileWidth":2.0037508E7,"tileHeight":2.0037508E7,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":1,"name":"","tileWidth":1.0018754E7,"tileHeight":1.0018754E7,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":2,"name":"","tileWidth":5009377.0,"tileHeight":5009377.0,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":3,"name":"","tileWidth":2504688.5,"tileHeight":2504688.5,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":4,"name":"","tileWidth":1252344.25,"tileHeight":1252344.25,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":5,"name":"","tileWidth":626172.125,"tileHeight":626172.125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":6,"name":"","tileWidth":313086.0625,"tileHeight":313086.0625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":7,"name":"","tileWidth":156543.03125,"tileHeight":156543.03125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":8,"name":"","tileWidth":78271.515625,"tileHeight":78271.515625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":9,"name":"","tileWidth":39135.7578125,"tileHeight":39135.7578125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":10,"name":"","tileWidth":19567.87890625,"tileHeight":19567.87890625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":11,"name":"","tileWidth":9783.939453125,"tileHeight":9783.939453125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":12,"name":"","tileWidth":4891.9697265625,"tileHeight":4891.9697265625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":13,"name":"","tileWidth":2445.98486328125,"tileHeight":2445.98486328125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":14,"name":"","tileWidth":1222.992431640625,"tileHeight":1222.992431640625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":15,"name":"","tileWidth":611.4962158203125,"tileHeight":611.4962158203125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":16,"name":"","tileWidth":305.74810791015625,"tileHeight":305.74810791015625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":17,"name":"","tileWidth":152.87405395507812,"tileHeight":152.87405395507812,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":18,"name":"","tileWidth":76.43702697753906,"tileHeight":76.43702697753906,"tileImageWidth":256,"tileImageHeight":256}
]
};
this.srid=8307;
this._f559=MVMapTileLayer;
this._f559(this._f560.mapTileLayer);
this._f22=null;
this._f23=null;
this._f53=null;
this.initializeListener=null;
this.map=null;
this.key=null;
this.clonedMap=null;
}
MVBingTileLayer.prototype=new MVMapTileLayer;
MVBingTileLayer.prototype.setMapType=function(x0)
{
var x1=this;
var x2=function()
{
x1.mapType=x0;
if(x1.map)
{
x1.checkMapType();
type=MVBingTileLayer.TYPES[x1.mapType];
if(x1.map)
x1.map.SetMapStyle(type);
if(x1.clonedMap&&x1.clonedMap.map)
x1.clonedMap.map.SetMapStyle(type);
}
else
 setTimeout(x2,1000);
}
x2();
}
MVBingTileLayer.prototype.getMapType=function()
{
return this.mapType;
}
MVBingTileLayer.prototype.setKey=function(x3)
{
if(x3)
this.key=x3;
}
MVBingTileLayer.prototype.getType=function()
{
return "MVExternalAPIMapTileLayer";
}
MVBingTileLayer.prototype.init=function(div)
{
var bing=this;
var init_bing=function(x4)
{
if(MVBingTileLayer.TYPES==null)
{
MVBingTileLayer.TYPES=new Array();
MVBingTileLayer.TYPES[MVBingTileLayer.TYPE_ROAD]=VEMapStyle.Road;
MVBingTileLayer.TYPES[MVBingTileLayer.TYPE_SHADED]=VEMapStyle.Shaded;
MVBingTileLayer.TYPES[MVBingTileLayer.TYPE_SATELLITE]=VEMapStyle.Aerial;
MVBingTileLayer.TYPES[MVBingTileLayer.TYPE_HYBRID]=VEMapStyle.Hybrid;
}
bing.map=new VEMap(x4.id);
bing.validateKey();
var x5=null;
if(bing._f22!=null&&bing._f23!=null)
x5=new VELatLong(bing._f23,bing._f22);
bing.checkMapType();
bing.map.LoadMap(x5,bing._f53+1,MVBingTileLayer.TYPES[bing.mapType],true);
if(bing.initializeListener)
bing.initializeListener();
}
var myInterval=setInterval(
function(){
if((eval("typeof VEMap")!="undefined")&&(document.getElementById(div.id).attachEvent!=undefined))
{
clearInterval(myInterval);
init_bing(div);
}},2000);
}
MVBingTileLayer.prototype.setCenterAndZoomLevel=function(x6,x7,x8,x9)
{
this._f22=x6;
this._f23=x7;
this._f53=x8;
var x10=this;
var x11=function()
{
if(x10.map)
{
x10.map.SetCenterAndZoom(new VELatLong(x7,x6),x8+1);
}
else if(!x9)
setTimeout(x11,1000);
};
x11();
}
MVBingTileLayer.prototype._f561=function(x12,x13)
{
var x14=this;
var x15=function()
{
if(x14.map)
{
x14.map.vemapcontrol.PanMap(-x12,-x13);
}
else
 setTimeout(x15,1000);
};
x15();
}
MVBingTileLayer.prototype.getCenter=function()
{
var x16=this.map.GetCenter();
return MVSdoGeometry.createPoint(x16.Longitude,x16.Latitude,this.srid);
}
MVBingTileLayer.prototype.setCenter=function(x17,x18)
{
this._f22=x17;
this._f23=x18;
var x19=this;
var x20=function()
{
if(x19.map)
{
x19.map.SetCenter(new VELatLong(x18,x17));
}
else
 setTimeout(x20,1000);
};
x20();
}
MVBingTileLayer.prototype.resize=function()
{
var x21=this;
var x22=function()
{
if(x21.map)
{
if(x21.layerDiv.parentNode.offsetWidth>0)
x21.map.Resize(x21.layerDiv.parentNode.offsetWidth,x21.layerDiv.parentNode.offsetHeight);
}
else
 setTimeout(x22,1000);
};
x22();
}
MVBingTileLayer.prototype.clone=function()
{
this.clonedMap=new MVBingTileLayer({mapType:this.mapType,key:this.key,libURL:this.libURL});
return this.clonedMap;
}
MVBingTileLayer.prototype.validateKey=function()
{
var x23="You have entered an invalid Bing Maps Key! Please replace it with a valid key.";
if(!this.map)
return ;
this.map.AttachEvent("oncredentialserror",function(){alert(x23)});
this.map.SetCredentials(this.key);
}
MVBingTileLayer.prototype.getStaticMapURL=function()
{
var x24="http://dev.virtualearth.net/REST/V1/Imagery/Map/";
var x25=this.getCenter();
var x26=x25.getPointY()+","+x25.getPointX();
var x27;
switch(this.mapType){
case MVBingTileLayer.TYPE_SATELLITE:
x27="Aerial";
break
case MVBingTileLayer.TYPE_HYBRID:
x27="AerialWithLabels";
break
default:
x27="Road";
}
var x28=this._f53+1;
var x29="mapSize="+this.map.GetWidth()+","+this.map.GetHeight();
var x30="key="+this.key;
x24=x24+x27+"/"+x26+"/"+x28+"?"+x29+"&amp;"+x30;
return x24;
}
MVBingTileLayer.prototype.checkMapType=function()
{
var x31=MVBingTileLayer.TYPES[this.mapType];
if(!x31)
{
for(t in MVBingTileLayer.TYPES)
{
if(MVBingTileLayer.TYPES[t]==this.mapType)
{
this.mapType=t;
break;
}
}
}
}
MVVirtualEarthTileLayer=MVBingTileLayer;
MVBingTileLayer.TYPE_ROAD="road";
MVBingTileLayer.TYPE_SHADED="shaded";
MVBingTileLayer.TYPE_SATELLITE="satellite";
MVBingTileLayer.TYPE_HYBRID="hybrid";
MVBingTileLayer.prototype._f170=function()
{
MVMapTileLayer.prototype._f170.call(this);
this.map=null;
}




function MVYahooTileLayer()
{

this._f560=
{
"mapTileLayer":"MV3785_1_17",
"format":"PNG",
"coordSys":
{
"srid":3785,
"type":"PROJECTED",
"distConvFactor":1.0,
"minX":-2.0037508E7,"minY":-2.0037508E7,
"maxX":2.0037508E7,"maxY":2.0037508E7
},
"zoomLevels":
[
{"zoomLevel":0,"name":"","tileWidth":2.0037508E7,"tileHeight":2.0037508E7,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":1,"name":"","tileWidth":1.0018754E7,"tileHeight":1.0018754E7,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":2,"name":"","tileWidth":5009377.0,"tileHeight":5009377.0,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":3,"name":"","tileWidth":2504688.5,"tileHeight":2504688.5,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":4,"name":"","tileWidth":1252344.25,"tileHeight":1252344.25,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":5,"name":"","tileWidth":626172.125,"tileHeight":626172.125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":6,"name":"","tileWidth":313086.0625,"tileHeight":313086.0625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":7,"name":"","tileWidth":156543.03125,"tileHeight":156543.03125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":8,"name":"","tileWidth":78271.515625,"tileHeight":78271.515625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":9,"name":"","tileWidth":39135.7578125,"tileHeight":39135.7578125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":10,"name":"","tileWidth":19567.87890625,"tileHeight":19567.87890625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":11,"name":"","tileWidth":9783.939453125,"tileHeight":9783.939453125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":12,"name":"","tileWidth":4891.9697265625,"tileHeight":4891.9697265625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":13,"name":"","tileWidth":2445.98486328125,"tileHeight":2445.98486328125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":14,"name":"","tileWidth":1222.992431640625,"tileHeight":1222.992431640625,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":15,"name":"","tileWidth":611.4962158203125,"tileHeight":611.4962158203125,"tileImageWidth":256,"tileImageHeight":256},
{"zoomLevel":16,"name":"","tileWidth":305.74810791015625,"tileHeight":305.74810791015625,"tileImageWidth":256,"tileImageHeight":256}
]
};

this.srid=8307;

this._f559=MVMapTileLayer;

this._f559(this._f560.mapTileLayer);

this.mapType=YAHOO_MAP_REG;

this._f22=null;

this._f23=null;

this._f53=null;

this.initializeListener=null;

this.map=null;
}
MVYahooTileLayer.prototype=new MVMapTileLayer;

MVYahooTileLayer.prototype.setMapType=function(x0)
{
this.mapType=x0;
if(this.map)
this.map.setMapType(x0);
}

MVYahooTileLayer.prototype.getMapType=function()
{
return this.mapType;
}

MVYahooTileLayer.prototype.getType=function()
{
return "MVExternalAPIMapTileLayer";
}

MVYahooTileLayer.prototype.init=function(x1)
{
this.map=new YMap(x1,this.mapType);
var x2=null;
if(this._f22!=null&&this._f23!=null)
{
x2=new YGeoPoint(this._f23,this._f22);
this.map.drawZoomAndCenter(x2,17-this._f53);
}
if(this.initializeListener)
this.initializeListener();
}

MVYahooTileLayer.prototype.setCenterAndZoomLevel=function(x3,x4,x5)
{
this._f22=x3;
this._f23=x4;
this._f53=x5;
if(this.map)
this.map.panToLatLon(new YGeoPoint(x4,x3),17-this._f53);
}

MVYahooTileLayer.prototype.getCenter=function()
{
var x6=this.map.getCenterLatLon();
return MVSdoGeometry.createPoint(x6.Lon,x6.Lat,this.srid);
}

MVYahooTileLayer.prototype._f561=function(x7,x8)
{
this.map.moveByXY(new YCoordPoint(x7,x8));
}

MVYahooTileLayer.prototype.setCenter=function(x9,x10)
{
this._f22=x9;
this._f23=x10;
if(this.map)
this.map.panToLatLon(new YGeoPoint(x10,x9));
}

MVYahooTileLayer.prototype.resize=function()
{
var x11=new YGeoPoint(this._f23,this._f22);
this.map.drawZoomAndCenter(x11,17-this._f53);

}

MVYahooTileLayer.prototype.clone=function()
{
var x12=new MVYahooTileLayer();
return x12;
}
function MVFOIGroup(x0)
{
this._f453=new Array();
this._f454=new Array();
this._f516=new Object();
if(x0 instanceof Array)
{
for(var x1=0;x1<x0.length;x1++)
{
var x2=x0[x1];
if(this._f517(x2,"MVFOIGroup"))
{
if(x2.gtype%10==1)
this._f453.push(x2);
else
 this._f454.push(x2);
}
}
}
this._f267=null;
this.zIndex=0;
this.div=null;
this.visible=true;
this._f518=100;
this._f519=-1;
this.time=300;
this._f520=null;
this._f24=false;
this._f521=40;
this._f522=null;
this._f523=2;
this._f524=100;
this._f455=new Array();
this._f456=new Array();
}
MVFOIGroup.prototype.clearAll=function()
{
this._f525();
this._f526();
this._f453=new Array();
this._f454=new Array();
this._f455=new Array();
this._f516=new Object();
if(this.clusters)
{
for(var x0=0;x0<this.clusters.length;x0++)
{
for(var x1=0;x1<this.clusters[x0].length;x1++)
{
this.clusters[x0][x1]=null;
}
}
}
for(var x0=0;x0<this._f456.length;x0++)
{
for(var x1=0;x1<this._f456[x0].overLayFOIs.length;x1++)
{
this._f456[x0].overLayFOIs[x1].overlayFOI=null;
}
this._f456[x0].overLayFOIs=null;
}
this._f456=new Array();
}
MVFOIGroup.prototype.addFOIs=function(x2)
{
for(var x3=0;x3<x2.length;x3++)
{
var x4=x2[x3];
if(this._f517(x4,"MVFOIGroup.addFOIs"))
{
if(x4.gtype%10==1)
this._f453.push(x4);
else
 this._f454.push(x4);
if(this.parent&&this._f267!=null)
this._f527(x4);
}
}
}
MVFOIGroup.prototype.addFOI=function(x5)
{
if(!this._f517(x5,"MVFOIGroup.addFOI"))
{
return;
}
if(x5.gtype%10==1)
this._f453.push(x5);
else
 this._f454.push(x5);
if(this.parent&&this._f267>=0)
{
if(this.parent._f88)
{
var x6=this;
var x7=function()
{
var x8=x5._f242.getPointX();
var x9=x5._f242.getPointY();
if(x6.clustering&&x6._f524>=x6.parent._f53
&&x5.gtype%10==1)
{
result=x6._f528(x5);
if(result!=null)
{
var x10=x6._f529(result.x,result.y);
var x11=x6.clusters[result.x][result.y];
if(x10==null)
{
x6._f530(x11);
}
else
 {
if(x11!=null)
{
x6._f530(x11);
}
else if(x6.clusters[result.x+x10.directionX][result.y+x10.directionY]!=null)
{
x6._f530(x6.clusters[result.x+x10.directionX][result.y+x10.directionY]);
}
else if(x6.clusters[result.x][result.y+x10.directionY]!=null)
{
x6._f530(x6.clusters[result.x][result.y+x10.directionY]);
}
else if(x6.clusters[result.x+x10.directionX][result.y]!=null)
{
x6._f530(x6.clusters[result.x+x10.directionX][result.y]);
}
}
x5._f88=true;
}
return;
}
else if(x5.gtype%10==1&&
(x8<x6.minX||x8>x6.maxX||x9<x6.minY||x9>x6.maxY))
{
return;
}
x5._f88=true;
if(x5.gtype%10==1&&x6._f531)
{
if(x6._f273(x5))
return;
}
x6.parent._f260._f269(x5);
if(x5.gtype%10==1&&(x6.pointDiv.parentNode==null
||x6.pointDiv.parentNode!=x6.div))
x6.div.appendChild(x6.pointDiv);
}
this._f527(x5,x7);
}
}
}
MVFOIGroup.prototype.removeFOI=function(x12)
{
if(!x12)
return ;
if(x12.id!=null&&x12.id!="")
{
this._f516[x12.id]=null;
}
var x13=false;
if(x12.gtype%10==1)
{
for(var x14=0;x14<this._f453.length;x14++)
if(this._f453[x14]==x12)
{
this._f453.splice(x14,1);
x13=true;
x12.parent=null;
break;
}
}
else
 {
for(var x14=0;x14<this._f454.length;x14++)
if(this._f454[x14]==x12)
{
this._f454.splice(x14,1);
x13=true;
x12.parent=null;
break;
}
}
if(x13&&x12._f88)
{
if(x12.gtype%10==1&&this.clustering
&&this._f524>=this.parent._f53&&this.clusters)
{
if(x12._f242.srid==null)
x12._f242.srid=this.parent.srid;
else if(x12._f242.srid!=this.parent.srid)
this.parent.transformGeom(x12._f242,this.parent.srid,null,callBack);
var x15=x12._f242.getPointX();
var x16=x12._f242.getPointY();
for(var x17=0;x17<this.clusters.length;x17++)
for(var x18=0;x18<this.clusters[x17].length;x18++)
{
var x19=this.clusters[x17][x18];
if(x19==null)
continue;
var x20=x19.removeFOI(x15,x16,x12);
if(x20)
{
var x21=x19.clusterFOIId;
if(x21==null)
{
this.parent._f260._f271(x12.id,x12);
break;
}
var x22=this._f278(x21);
if(x19.numberOfPoints<this._f523||x19.numberOfPoints==0)
{
this._f532(x19);
if(x19.numberOfPoints==0)
this.clusters[x17][x18]=null;
else
 {
x19.clusterFOIId=null;
this._f533(x19);
}
}
else
 {
x22.setHTMLElement(x19.numberOfPoints,10,10);
this.parent._f260._f271(x22.id,x22);
this.parent._f260._f269(x22);
}
break;
}
}
}
else if(this._f531&&x12.overlayFOI)
{
this._f268(x12);
}
else
 this.parent._f260._f271(x12.id,x12);
if(this.parent._f76._f77.length>0)
if(this.parent._f76._f77[0].nid==x12.id)
{
this.parent._f76.deleteInfoWindow(this.parent._f76._f77[0]);
}
}
}
MVFOIGroup.prototype.refresh=function()
{
if(this.parent&&this.parent._f88)
{
this.startNum=0;
if(this._f520!=null)
clearTimeout(this._f520);
this._f525();
this._f526();
var x23=this;
this.transformGeomNum=0;
if(this._f453.length>0)
{
this._f24=true;
this.parent.setLoadingIconVisible(true);
}
for(var x24=0;x24<this._f453.length;x24++)
{
var x25=this._f453[x24];
var x26=function(x27)
{
if(x27)
x25._f242=x27;
x23.transformGeomNum++;
if(x23.transformGeomNum<x23._f453.length)
{
return;
}
if(x23.clustering&&x23._f524>=x23.parent._f53)
{
x23._f534();
x23._f535();
try{
if(x23.pointDiv.parentNode==null||
x23.pointDiv.parentNode!=x23.div)
x23.div.appendChild(this.pointDiv);
}
catch(ex){
alert(ex);
}
x23._f536(1);
}
else
 x23.initializePointBatch();
}
if(x25._f242.srid==null)
x25._f242.srid=this.parent.srid;
if(x25._f242.srid!=this.parent.srid)
this.parent.transformGeom(x25._f242,this.parent.srid,null,x26);
else
 x26();
}
this._f537();
}
}
MVFOIGroup.prototype.setVisible=function(x28)
{
this.visible=x28;
if(this.div!=null)
{
if(this.visible)
{
this.refresh();
}
else
 {
var x29=this.pointDiv.childNodes;
for(var x30=0;x30<x29.length;x30++)
{
x29[x30].style.visibility="hidden";
}
x29=this.polygonDiv.childNodes;
for(var x30=0;x30<x29.length;x30++)
{
x29[x30].style.visibility="hidden";
}
}
}
}
MVFOIGroup.prototype.setMaxVisibleZoomLevel=function(x31)
{
this._f518=x31;
}
MVFOIGroup.prototype.setMinVisibleZoomLevel=function(x32)
{
this._f519=x32;
}
MVFOIGroup.prototype.setZIndex=function(x33)
{
this.zIndex=x33;
if(this.div!=null)
this.div.style.zIndex=this.zIndex;
}
MVFOIGroup.prototype.enableClustering=function(x34,x35)
{
this.clustering=x34;
if(x35&&x35._f521)
this._f521=x35._f521;
if(x35&&x35._f522)
this._f522=x35._f522;
if(x35&&x35._f523)
this._f523=x35._f523;
if(x35&&x35._f524)
this._f524=x35._f524;
}
MVFOIGroup.prototype.init=function(x36)
{
this._f267=x36
this.pointDiv=document.createElement("div");
this.pointDiv.style.position="absolute";
this.pointDiv.style.zIndex=20;
this.polygonDiv=document.createElement("div");
this.polygonDiv.style.position="absolute";
this.polygonDiv.style.zIndex=10;
this.div=document.createElement("div");
this.div.style.position="absolute";
this.div.style.zIndex=this.zIndex;
this.parent.foiGroupLayer.appendChild(this.div);
this.setSize(Math.ceil(2*(this.parent._f106())),
Math.ceil(2*(this.parent._f107())));
var x37=this;
var x38=function(x39)
{
for(var x40=0;x40<x39.length;x40++)
{
var x41=x39[x40];
x37._f527(x41);
}
}
x38(this._f453);
x38(this._f454);
}
MVFOIGroup.prototype._f517=function(x42,x43)
{
if(x42.id!=null&&x42.id!="")
{
var x44=this._f516[x42.id];
if(x44==null)
{
this._f516[x42.id]=x42.id;
return true;
}
else
 {
MVi18n._f6(x43,"MAPVIEWER-05508","foi.id:"+x42.id,null);
return false;
}
}
return true;
}
MVFOIGroup.prototype._f527=function(x45,x46)
{
if(!x45||!x45.id)
return;
if(!this.parent._f538&&this.parent.compareBaseURL(x45._f3)
&&x45.style&&x45.style.indexOf!=undefined)
{
var x47=x45.style.split(".");
if(x47.length>=2)
{
_f65._f539(x47[0]);
this.parent._f539(x47[0]);
}
}
x45._f267=this._f267;
x45.parent=this.parent;
if(x45.gtype%10==1&&!x45.style)
{
x45._f102=x45._f3;
}
if(!x45._f3&&!x45.isHTMLFOI)
x45._f3=_f65._f472();
if(this.parent._f88)
{
var x48=function(x49)
{
if(x49)
x45._f242=x49;
if(x46)
x46();
}
if(x45._f242.srid==null)
x45._f242.srid=this.parent.srid;
if(x45._f242.srid!=this.parent.srid)
this.parent.transformGeom(x45._f242,this.parent.srid,null,x48);
else
 x48();
}
}
MVFOIGroup.prototype.display=function(x50,x51,x52,x53,x54)
{
this.minX=x50;
this.minY=x51;
this.maxX=x52;
this.maxY=x53;
this.startNum=0;
if(this._f520!=null)
clearTimeout(this._f520);
var x55=this;
this.transformGeomNum=0;
if(this._f453.length>0)
{
this._f24=true;
this.parent.setLoadingIconVisible(true);
}
for(var x56=0;x56<this._f453.length;x56++)
{
var x57=this._f453[x56];
var x58=function(x59)
{
if(x59)
x57._f242=x59;
x55.transformGeomNum++;
if(x55.transformGeomNum<x55._f453.length)
{
return;
}
if(x55.clustering&&x55._f524>=x55.parent._f53)
{
x55._f525();
x55._f534();
x55._f535();
try{
if(x55.pointDiv.parentNode==null||
x55.pointDiv.parentNode!=x55.div)
x55.div.appendChild(x55.pointDiv);
}
catch(ex){
alert(ex);
}
x55._f536(1);
}
else if(x54||x55.parent.wrapAroundLayer(x55._f84()))
{
x55._f525();
x55.initializePointBatch();
}
else
 {
x55._f540();
}
}
if(x57._f242.srid==null)
x57._f242.srid=this.parent.srid;
if(x57._f242.srid!=this.parent.srid)
this.parent.transformGeom(x57._f242,this.parent.srid,null,x58);
else
 x58();
}
this._f526();
this._f537();
}
MVFOIGroup.prototype._f537=function()
{
var x60=this;
for(var x61=0;x61<this._f454.length;x61++)
{
var x62=this._f454[x61];
this.parent._f260._f269(x62);
}
this.div.appendChild(this.polygonDiv);
}
MVFOIGroup.prototype.initializePointBatch=function()
{
this._f536(0);
}
MVFOIGroup.prototype._f540=function()
{
this._f536(1);
}
MVFOIGroup.prototype._f536=function(x63)
{
for(var x64=this.startNum;x64<this._f453.length;x64++)
{
var x65=this._f453[x64];
var x66=this;
if(x63==0){
x65._f88=false;
x65.overlay=false;
}
}
var x67=0;
if(this._f531)
this._f541(this._f453);
this._f24=true;
for(var x64=this.startNum;x64<this._f453.length;x64++)
{
var x65=this._f453[x64];
var x66=this;
if(!x65._f88)
{
var x68=x65._f242.getPointX();
var x69=x65._f242.getPointY();
var x70=this.parent.wrapAroundLayer(this._f84());
if(this.parent.wraparound&&!x70)
{
this.minX=MVUtil.keepInCSBoundary(this.parent,this.minX);
this.maxX=MVUtil.keepInCSBoundary(this.parent,this.maxX);
}
if(x69>=this.minY&&x69<=this.maxY&&((x68>=this.minX&&x68<=this.maxX)||x70))
{
if(this.parent._f260==null)
this.parent._f542();
if(x67>=200&&x64<this._f453.length-1)
{
this.startNum=x64++;
if(this.pointDiv.parentNode==null||
this.pointDiv.parentNode!=x66.div)
this.div.appendChild(x66.pointDiv);
if(x63==0)
this._f520=this.setTimeout("this.initializePointBatch()",this.time);
else if(x63==1)
this._f520=this.setTimeout("this.refreshPointBatch()",this.time);
break;
}
else
 {
this.parent._f260._f269(x65);
x67++
}
}
}
}
if(x64>=this._f453.length)
{
this.startNum=0;
this._f24=false;
this.parent._f79();
try{
if(this.pointDiv.parentNode==null||
this.pointDiv.parentNode!=this.div)
this.div.appendChild(this.pointDiv);
}
catch(ex){
alert(ex);
}
}
}
MVFOIGroup.prototype._f298=function(x71,x72)
{
if(x72.gtype%10==1)
this.pointDiv.appendChild(x71);
else
 this.polygonDiv.appendChild(x71);
}
MVFOIGroup.prototype._f526=function()
{
MVUtil._f201(this.polygonDiv,this.parent._f7);
}
MVFOIGroup.prototype._f525=function()
{
MVUtil._f201(this.pointDiv,this.parent._f7);
}
MVFOIGroup.prototype._f278=function(id)
{
for(var x73=0;x73<this._f453.length;x73++)
{
if(this._f453[x73].id==id)
return this._f453[x73]
}
for(var x73=0;x73<this._f454.length;x73++)
{
if(this._f454[x73].id==id)
return this._f454[x73]
}
for(var x73=0;x73<this._f455.length;x73++)
{
if(this._f455[x73].id==id)
return this._f455[x73]
}
for(var x73=0;x73<this._f456.length;x73++)
{
if(this._f456[x73].id==id)
return this._f456[x73]
}
return null;
}
MVFOIGroup.prototype._f170=function()
{
this.clearAll();
this._f453=null;
this._f454=null;
this._f455=null;
this.clusters=null;
this._f516=null;
}
MVFOIGroup.prototype.setTimeout=function(_f148,_f149)
{
var Ie="tempVar"+_f281;
_f281++;
eval(Ie+" = this;");
var oi=_f148.replace(/\\/g,"\\\\");
oi=oi.replace(/\"/g,'\\"');
return window.setTimeout(Ie+'._setTimeoutDispatcher("'+oi+'");'+Ie+" = null;",_f149);
}
MVFOIGroup.prototype._setTimeoutDispatcher=function(func)
{
eval(func);
}
MVFOIGroup.prototype.setSize=function(x74,x75)
{
this.width=x74;
this.height=x75;
}
MVFOIGroup.prototype._f84=function()
{
return this.width;
}
MVFOIGroup.prototype._f85=function()
{
return this.height;
}
MVFOIGroup.prototype._f543=function(x76,x77)
{
MVUtil._f70(this.pointDiv,x76,x77);
MVUtil._f70(this.polygonDiv,x76,x77);
}
MVFOIGroup.prototype._f282=function()
{
if(this.visible&&this.parent._f53>=this._f519
&&this.parent._f53<=this._f518)
return true;
else
 return false;
}
MVFOIGroup.prototype._f544=function()
{
for(var x78=0;x78<foiArray.length;x78++)
{
var x79=foiArray[x78];
if(this._f517(x79,"MVFOIGroup.addFOIs"))
{
if(x79.gtype%10==1)
this._f453.push(x79);
else
 this._f454.push(x79);
if(this.parent&&this._f267!=null)
this._f527(x79);
}
}
}
MVFOIGroup.prototype._f534=function(){
this.gridSizeInX=this._f521/this.parent._f72;
this.gridSizeInY=this._f521/this.parent._f74;
if(this.parent.wraparound)
{
var x80=this.parent.wrapAroundLayer(this._f84());
if(!x80)
{
this.minX=MVUtil.keepInCSBoundary(this.parent,this.minX);
this.maxX=MVUtil.keepInCSBoundary(this.parent,this.maxX);
}
else
 {
this.minX=this.parent.msi._f166;
this.maxX=this.parent.msi._f165;
}
}
this.numInX=Math.ceil((this.maxX-this.minX)/this.gridSizeInX);
this.numInY=Math.ceil((this.maxY-this.minY)/this.gridSizeInY);
this.clusters=new Array();
for(var x81=0;x81<this.numInX;x81++)
{
var x82=new Array();
this.clusters.push(x82);
for(var x83=0;x83<this.numInY;x83++)
x82.push(null);
}
this.horizontalGrids=new Array(this.numInX);
this.horizontalGrids[0]=this.minX;
this.verticalGrids=new Array(this.numInY);
this.verticalGrids[0]=this.minY;
for(var x81=1;x81<=this.numInX;x81++)
this.horizontalGrids.push(this.horizontalGrids[x81-1]+this.gridSizeInX);
for(var x81=1;x81<=this.numInY;x81++)
this.verticalGrids.push(this.verticalGrids[x81-1]+this.gridSizeInY);
}
MVFOIGroup.prototype._f535=function()
{
for(var x84=0;x84<this._f453.length;x84++)
{
var x85=this._f453[x84];
this._f528(x85);
}
var x86=this._f545();
while(x86)
{
x86=this._f545();
}
this._f546();
}
MVFOIGroup.prototype._f545=function()
{
var x87=false;
for(var x88=0;x88<this.clusters.length;x88++)
{
for(var x89=0;x89<this.clusters[x88].length;x89++)
{
if(this.clusters[x88][x89]!=null)
{
var x90=this._f529(x88,x89);
if(x90!=null)
x87=true;
}
}
}
return x87;
}
MVFOIGroup.prototype._f529=function(x91,x92)
{
var x93=this.gridSizeInX*this.gridSizeInY;
var x94=x93;var x95=x93;var x96=x93;var x97=x93;var x98=x93;var x99=x93;var x100=x93;var x101=x93;if(x91+1<this.numInX&&this.clusters[x91+1][x92]!=null)
x94=this._f547(this.clusters[x91][x92],this.clusters[x91+1][x92]);
if(x92+1<this.numInY&&this.clusters[x91][x92+1]!=null)
x95=this._f547(this.clusters[x91][x92],this.clusters[x91][x92+1]);
if(x91-1>=0&&this.clusters[x91-1][x92]!=null)
x96=this._f547(this.clusters[x91][x92],this.clusters[x91-1][x92]);
if(x92-1>=0&&this.clusters[x91][x92-1]!=null)
x97=this._f547(this.clusters[x91][x92],this.clusters[x91][x92-1]);
if(x91+1<this.numInX&&x92+1<this.numInY&&this.clusters[x91+1][x92+1]!=null)
x98=this._f547(this.clusters[x91][x92],this.clusters[x91+1][x92+1]);
if(x91-1>=0&&x92+1<this.numInY&&this.clusters[x91-1][x92+1]!=null)
x99=this._f547(this.clusters[x91][x92],this.clusters[x91-1][x92+1]);
if(x91+1<this.numInX&&x92-1>=0&&this.clusters[x91+1][x92-1]!=null)
x100=this._f547(this.clusters[x91][x92],this.clusters[x91+1][x92-1]);
if(x91-1>=0&&x92-1>=0&&this.clusters[x91-1][x92-1]!=null)
x101=this._f547(this.clusters[x91][x92],this.clusters[x91-1][x92-1]);
var x102=
Math.min(x94,
Math.min(x95,
Math.min(x96,
Math.min(x97,
Math.min(x98,
Math.min(x99,
Math.min(x100,x101)))))));
if(x102<x93)
{
if(x94==x102)
{
this._f548(x91,x92,1);
return {directionX:1,directionY:0};
}
else if(x95==x102)
{
this._f549(x91,x92,1);
return {directionX:0,directionY:1};
}
else if(x96==x102)
{
this._f548(x91,x92,-1);
return {directionX:-1,directionY:0};
}
else if(x97==x102)
{
this._f549(x91,x92,-1);
return {directionX:0,directionY:-1};
}
else if(x98==x102)
{
this._f550(x91,x92,1,1);
return {directionX:1,directionY:1};
}
else if(x99==x102)
{
this._f550(x91,x92,-1,1);
return {directionX:-1,directionY:1};
}
else if(x100==x102)
{
this._f550(x91,x92,1,-1);
return {directionX:1,directionY:-1};
}
else
 {
this._f550(x91,x92,-1,-1);
return {directionX:-1,directionY:-1};
}
return null;
}
}
MVFOIGroup.prototype._f547=function(x103,x104)
{
return (x103.clusterX-x104.clusterX)*(x103.clusterX-x104.clusterX)+
(x103.clusterY-x104.clusterY)*(x103.clusterY-x104.clusterY);
}
MVFOIGroup.prototype._f548=function(x105,x106,x107)
{
this.clusters[x105][x106].addCluster(this.clusters[x105+1*x107][x106]);
if(this.clusters[x105][x106].clusterX<=this.horizontalGrids[x105+1*x107])
{
this._f532(this.clusters[x105+1*x107][x106]);
this.clusters[x105+1*x107][x106]=null;
}
else
 {
this._f532(this.clusters[x105+1*x107][x106]);
this.clusters[x105+1*x107][x106]=this.clusters[x105][x106];
this._f532(this.clusters[x105][x106]);
this.clusters[x105][x106]=null;
}
this.clusterCount--;
}
MVFOIGroup.prototype._f549=function(x108,x109,x110)
{
this.clusters[x108][x109].addCluster(this.clusters[x108][x109+1*x110]);
if(this.clusters[x108][x109].clusterY<=this.verticalGrids[x109+1*x110])
{
this._f532(this.clusters[x108][x109+1*x110]);
this.clusters[x108][x109+1*x110]=null;
}
else
 {
this._f532(this.clusters[x108][x109+1*x110]);
this.clusters[x108][x109+1*x110]=this.clusters[x108][x109];
this._f532(this.clusters[x108][x109]);
this.clusters[x108][x109]=null;
}
this.clusterCount--;
}
MVFOIGroup.prototype._f550=function(x111,x112,x113,x114)
{
this.clusters[x111][x112].addCluster(this.clusters[x111+1*x113][x112+1*x114]);
if(this.clusters[x111][x112].clusterX<=this.horizontalGrids[x111+1*x113]&&
this.clusters[x111][x112].clusterY<=this.verticalGrids[x112+1*x114])
{
this._f532(this.clusters[x111+1*x113][x112+1*x114]);
this.clusters[x111+1*x113][x112+1*x114]=null;
}
else if(this.clusters[x111][x112].clusterX>this.horizontalGrids[x111+1*x113]&&
this.clusters[x111][x112].clusterY>this.verticalGrids[x112+1*x114])
{
this._f532(this.clusters[x111+1*x113][x112+1*x114]);
this.clusters[x111+1*x113][x112+1*x114]=this.clusters[x111][x112];
this._f532(this.clusters[x111][x112]);
this.clusters[x111][x112]=null;
}
else
 {
if(this.clusters[x111][x112].clusterX<=this.horizontalGrids[x111+1*x113])
{
if(this.clusters[x111][x112+1*x114]==null)
this.clusters[x111][x112+1*x114]=this.clusters[x111][x112];
else
 {
this.clusters[x111][x112+1*x114].addCluster(this.clusters[x111][x112]);
this.clusterCount--;
}
}
else
 {
if(this.clusters[x111+1*x113][x112]==null)
this.clusters[x111+1*x113][x112]=this.clusters[x111][x112];
else
 {
this.clusters[x111+1*x113][x112].addCluster(this.clusters[x111][x112]);
this.clusterCount--;
}
}
this._f532(this.clusters[x111][x112]);
this.clusters[x111][x112]=null;
this._f532(this.clusters[x111+1*x113][x112+1*x114]);
this.clusters[x111+1*x113][x112+1*x114]=null;
}
this.clusterCount--;
}
MVFOIGroup.prototype._f546=function()
{
var x115=this.parent;
var x116=0;
this._f455=new Array();
for(var x117=0;x117<this.clusters.length;x117++)
{
for(var x118=0;x118<this.clusters[x117].length;x118++)
{
var x119=this.clusters[x117][x118];
if(x119!=null&&x119.numberOfPoints>=this._f523)
{
var x120=x119.createClusterFOI(this.parent,"-CL"+x116,this._f522,this._f267);
this._f551(x120);
x116++;
}
}
}
}
MVFOIGroup.prototype._f528=function(x121)
{
x121._f88=false;
if(x121._f242.srid==null)
x121._f242.srid=this.parent.srid;
else if(x121._f242.srid!=this.parent.srid)
this.parent.transformGeom(x121._f242,this.parent.srid,null,callBack);
var x122=x121._f242.getPointX();
var x123=x121._f242.getPointY();
if(this.parent.wraparound)
{
var x124=this.parent.wrapAroundLayer(this._f84());
if(!x124)
{
this.minX=MVUtil.keepInCSBoundary(this.parent,this.minX);
this.maxX=MVUtil.keepInCSBoundary(this.parent,this.maxX);
}
else
 {
this.minX=this.parent.msi._f166;
this.maxX=this.parent.msi._f165;
}
x122=MVUtil.keepInCSBoundary(this.parent,x122);
}
if(x123>=this.minY&&x123<=this.maxY&&((x122>=this.minX&&x122<=this.maxX)||x124))
{
var x125=Math.floor((x122-this.minX)/this.gridSizeInX);
var x126=Math.floor((x123-this.minY)/this.gridSizeInY);
var x127=this.clusters[x125][x126];
if(x127==null){
x127=new MVFOICluster(x122,x123,x121);
this.clusters[x125][x126]=x127;
}
else
 x127.addFOI(x122,x123,x121);
return {x:x125,y:x126};
}
return null;
}
MVFOIGroup.prototype._f551=function(x128)
{
this._f455.push(x128);
x128.parent=this.parent;
this.parent._f260._f269(x128);
for(var x129=0;x129<x128.cluster.foiArray.length;x129++)
{
x128.cluster.foiArray[x129]._f88=true;
}
}
MVFOIGroup.prototype._f532=function(x130)
{
var x131=x130.clusterFOIId;
if(x131==null)
{
for(var x132=0;x132<x130.foiArray.length-1;x132++)
{
if(x130.foiArray[x132]._f88)
this.parent._f260._f271(x130.foiArray[x132].id,x130.foiArray[x132]);
}
return;
}
var x133=this._f278(x131);
this.parent._f260._f271(x133.id,x133);
x130.clusterFOIId=null;
for(var x134=0;x134<this._f455.length;x134++)
{
if(this._f455[x134]==x133)
{
this._f455.splice(x134,1);
break;
}
}
}
MVFOIGroup.prototype._f533=function(x135)
{
for(var x136=0;x136<x135.foiArray.length;x136++)
{
this.parent._f260._f269(x135.foiArray[x136]);
x135.foiArray[x136]._f88=true;
}
}
MVFOIGroup.prototype._f530=function(x137)
{
if(x137==null)
return;
var x138=x137.clusterFOIId;
if(x138!=null&&x137.numberOfPoints>=this._f523)
{
var x139=this._f278(x138);
this.parent._f260._f271(x139.id,x139);
x139.setHTMLElement(x137.numberOfPoints,10,10);
this.parent._f260._f269(x139);
return;
}
this._f532(x137);
if(x137.numberOfPoints>=this._f523)
{
var x140=0;
var x141=this._f455.length;
if(x141>0)
x140=parseInt(this._f455[x141-1].id.substring(3))+1;
var x142=x137.createClusterFOI(this.parent,"-CL"+x140,this._f522,this._f267);
this._f551(x142);
}
else
 this._f533(x137);
}
MVFOIGroup.prototype.enableMultiFeatureMarker=function(x143,x144)
{
this._f531=x143;
if(x144)
{
if(typeof(x144)=="string"||x144 instanceof MVXMLStyle||
x144 instanceof MVStyleMarker)
x144={style:x144};
if(x144.style)
this._f552=x144.style
if(x144.listWidth)
this.listWidth=x144.listWidth;
if(x144.listHeight)
this.listHeight=x144.listHeight;
}
}
MVFOIGroup.prototype._f541=function(x145)
{
if(x145==null&&x145.length<2)
return;
for(var x146=0;x146<x145.length-1;x146++)
{
if(x145[x146].overlay||x145[x146]._f88||!this._f553(x145[x146]))
continue;
var x147=null;
for(var x148=x146+1;x148<x145.length;x148++)
{
if(x145[x148].overlay||x145[x148]._f88||!this._f553(x145[x148]))
continue;
if(x145[x146]._f242.equals(x145[x148]._f242))
{
x145[x146].overlay=true;
x145[x148].overlay=true;
if(x147==null)
{
x147=new Array(x145[x146]);
}
x147.push(x145[x148]);
}
}
if(x147!=null&&x147.length>1)
{
this._f130(x147);
}
}
}
MVFOIGroup.prototype._f130=function(x149)
{
var x150=x149[0]._f242.clone();
var x151=new MVFOI("-OL"+x149[0].id,x150,this._f552,_f65._f554);
x151.attachEventListener(MVEvent.MOUSE_OVER,this._f190);
x151.attachEventListener(MVEvent.MOUSE_OUT,this._f196);
x151.overLayFOIs=x149;
x151._f267=this._f267;
x151.parent=this.parent;
this._f456.push(x151);
this.parent._f260._f269(x151);
for(var x152=0;x152<x149.length;x152++)
{
x149[x152]._f88=true;
x149[x152].overlayFOI=x151;
}
}
MVFOIGroup.prototype._f190=function(x153,x154)
{
var x155=document.createElement("table");
var x156=document.createElement("tbody");
x155.appendChild(x156);
var x157=x154[0].parent;
var x158=x157.getFOIGroup(x154[0]._f267);
var x159=MVUtil.getRealOrdinates(x157,x153.sdo_point.x,x154[0]._f242.sdo_point.x);
x153=MVSdoGeometry.createPoint(x159,x154[0]._f242.sdo_point.y,x157.srid);
var x160=false;
for(var x161=0;x161<x154.length;x161++)
{
var x162=x154[x161];
var x163=null;
var x164=x162._f3;
if(x162.style)
{
if(x162.style.getXMLString)
x163=x162.style.getXMLString();
else
 x163=x162.style;
x164+="?request=getpoiimage&version=1.0"+
"&poistyle="+encodeURIComponent(x163)+
"&width="+x162.width+"&height="+x162.height;
}
var x165=x162._f158!=null&&x162._f158!=""?x162._f158:x162.id;
var x166=document.createElement("tr");
x156.appendChild(x166);
var x167=document.createElement("td");
var x168=document.createElement("td");
x166.appendChild(x167);
x166.appendChild(x168);
if(x164!="")
{
var x169=null
var x170=x164.toLowerCase().indexOf('.png')==-1?false:true;
if(_f65._f66=="IF"&&(x162.style!=""||x170))
x169=MVUtil._f172(x164,true);
else
 {
x169=document.createElement("img");
x169.src=x164;
}
x169.ifctl=x157._f260;
x169.groupid=x162._f267;
x169.id=x162.id;
x169.style.width=MVUtil._f26(x162.width);
x169.style.height=MVUtil._f26(x162.height);
x162.clickPoint=x153;
x157._f260.setIndFOIListners(x162,x169);
if(x162.html)
{
var x171=document.createElement("div");
x171.style.position="absolute";
var x172=x162._f243;
var x173=x162._f244;
x171.style.left=MVUtil._f26(x172);
x171.style.top=MVUtil._f26(x173);
x171.style.padding=MVUtil._f26(0);
x171.innerHTML=x162.html;
var x174=document.createElement("div");
x174.style.position="relative";
x174.style.width=MVUtil._f26(x162.width);
x174.style.height=MVUtil._f26(x162.height);
x174.appendChild(x169);
x174.appendChild(x171);
x167.appendChild(x174);
x167.style.verticalAlign="top";
}
else
 x167.appendChild(x169);
}
else if(x162.isHTMLFOI)
{
var x175=document.createElement("div");
x175.style.position="relative";
x175.innerHTML=x162.html;
var x176=MVUtil.checkRealSize(x162.parent,x175);
var x177=x176.width;
var x178=x176.height;
x175.ifctl=x157._f260;
x175.groupid=x162._f267;
x175.id=x162.id;
x175.style.width=MVUtil._f26(x177);
x162.clickPoint=x153;
x167.appendChild(x175);
x157._f260.setIndFOIListners(x162,x175);
x167.width=MVUtil._f26(x177);
x167.height=MVUtil._f26(x178);
var x179=x162.html.toLowerCase();
if(x179.indexOf("img")>0)
{
x160=true;
x167.id="_MFLC"+x161;
}
}
var x180=document.createElement("a");
x180.style.cssText="font:11px normal Tahoma;color: #000000";
x180.href="javascript:void(0)";
x180.index=x161;
x180.onclick=function(x181)
{
x181=(x181)?x181:((window.event)?event:null);
var x182=x154[this.index];
if(x182._f185||(x182._f93[MVEvent.MOUSE_CLICK]!=null&&x182._f93[MVEvent.MOUSE_CLICK].length!=0))
{
x157._f183();
if(x182._f185)
x182._f185(x153,x182,MVUtil.getEvent(x181));
MVUtil.runListeners(x182._f93,MVEvent.MOUSE_CLICK,[x153,x182,MVUtil.getEvent(x181)]);
}
else if(x182._f248&&x182._f203)
{
var x183=new MVInfoWindowTab(x182._f202,x182._f203);
var x184=new Array(x183);
if(x182._f250>0&&x182._f251>0)
x157._f76._f303(x182.id,x153.sdo_point.x,x153.sdo_point.y,
x184,0,x182._f250,x182._f251,x182._f254,x182._f202);
else
 x157._f76._f303(x182.id,x153.sdo_point.x,x153.sdo_point.y,
x184,0,null,null,x182._f254,x182._f202);
return;
}
}
x180.innerHTML=x165;
x168.appendChild(x180);
}
var x185=MVUtil.checkRealSize(x157,x155);
if(x185.width+MVInfoWindowStyle4.MultiFeatureListTotalMarginWidth<x158.listWidth
&&x185.height+MVInfoWindowStyle4.TotalMarginHeight<x158.listHeight)
x157.showOverLayerMarkWindow(x153,x155);
else
 x157.showOverLayerMarkWindow(x153,x155,x158.listWidth,x158.listHeight);
if(x160&&_f65._f66!="IF")
{
x158.redrawMultiFOIList=setTimeout(x158.checkSize,500,x153,x154);
}
}
MVFOIGroup.prototype.checkSize=function(x186,x187)
{
var x188=x187[0].parent;
var x189=x188.getFOIGroup(x187[0]._f267);
for(var x190=0;x190<x187.length;x190++)
{
var id="_MFLC"+x190;
var x191=document.getElementById(id);
if(x191&&x191.childNodes.length>0&&x191.childNodes[0])
{
var x192=x191.childNodes[0];
var x193=MVUtil.getRealSize(x192);
if(x191.offsetWidth<x193.width||x191.offsetHeight<x193.height)
{
x189._f190(x186,x187);
break;
}
}
}
}
MVFOIGroup.prototype._f196=function(x194,x195)
{
var x196=x195[0].parent;
var x197=x196.getFOIGroup(x195[0]._f267);
if(x197.redrawMultiFOIList)
clearTimeout(x197.redrawMultiFOIList);
var x198=function()
{
if(x196._f76&&x196._f76._f204||
x196.infoLayer2&&x196.infoLayer2._f204)
x196.removeOverLayerWindow=setTimeout(x198,100);
else
 {
x196.removeOverLayerMarkWindow();
clearTimeout(x196.removeOverLayerWindowTime);
}
}
x196.removeOverLayerWindow=setTimeout(x198,100);
}
MVFOIGroup.prototype._f553=function(x199)
{
var x200=x199._f242.getPointX();
var x201=x199._f242.getPointY();
var x202=this.parent.wrapAroundLayer(this._f84());
if(this.parent.wraparound&&!x202)
{
this.minX=MVUtil.keepInCSBoundary(this.parent,this.minX);
this.maxX=MVUtil.keepInCSBoundary(this.parent,this.maxX);
}
if(x201>=this.minY&&x201<=this.maxY&&((x200>=this.minX&&x200<=this.maxX)||x202))
return true;
else
 return false;
}
MVFOIGroup.prototype._f268=function(x203)
{
if(x203.overlayFOI)
{
for(var x204=0;x204<x203.overlayFOI.overLayFOIs.length;x204++)
{
if(x203.overlayFOI.overLayFOIs[x204]==x203)
{
x203.overlayFOI.overLayFOIs.splice(x204,1);
if(x203.overlayFOI.overLayFOIs.length<2)
{
var x205=x203.overlayFOI.overLayFOIs[0];
x205.overlayFOI=null;
this.parent._f260._f269(x205);
this.parent._f260._f271(x203.overlayFOI.id,x203.overlayFOI);
for(var x206=0;x206<this._f456.length;x206++)
{
if(this._f456[x206]==x203.overlayFOI)
{
this._f456.splice(x206,1);
break;
}
}
}
x203.overlayFOI=null;
return;
}
}
}
}
MVFOIGroup.prototype._f273=function(x207)
{
for(var x208=0;x208<this._f453.length;x208++)
{
if(this._f453[x208]._f88&&this._f453[x208]._f242.equals(x207._f242)
&&this._f453[x208].id!=x207.id)
{
if(this._f453[x208].overlayFOI)
{
this._f453[x208].overlayFOI.overLayFOIs.push(x207);
x207._f88=true;
x207.overlayFOI=this._f453[x208].overlayFOI;
}
else
 {
var x209=new Array(this._f453[x208]);
this.parent._f260._f271(this._f453[x208].id,this._f453[x208]);
x209.push(x207);
this._f130(x209);
}
return true;
}
}
return false;
}
MVMapView.version = "Ver11.1.1.4_B110527";
