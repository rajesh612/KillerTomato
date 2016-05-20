// turn on or off single selection
function switchSingleSelStatus()
{
  if(disabled)
    return ;
  if(singleselect)
  {
    // turn off
    document.getElementById('sselimage').src="images/singlesel.gif";
    singleselect = false ;
    svgmap.disableFeatureSelect() ;
    var list = svgmap.getSelectedIdList("COUNTIES_TERR") ;
    // deselect any selected feature, if there is any.
    if(list!=null) 
    {
      for(i=0; i<list.length; i++)
        svgmap.selectFeature('COUNTIES_TERR', list[i]);
    }
  }
  else
  {
    // turn on
    document.getElementById('sselimage').src="images/singleselon.gif";
    singleselect = true ;
    svgmap.enableFeatureSelect() ;
    if(freeformselect)
      switchFreeFormStatus() ;
    if(rectselect)
      switchRectStatus();
  }
}
// turn on or off rectangle selection
function switchRectStatus()
{
  if(disabled)
    return ;
  if(rectselect)
  {
    // turn off
    document.getElementById('rectimage').src="images/rect.gif";
    rectselect = false ;
    svgmap.disableRectangleSelect() ;
  }
  else
  {
    // turn on
    document.getElementById('rectimage').src="images/recton.gif";
    rectselect = true ;
    svgmap.enableRectangleSelect() ;
    if(singleselect)
      switchSingleSelStatus() ;
    if(freeformselect)
      switchFreeFormStatus();
  }
}
// turn on or off the free form selection
function switchFreeFormStatus()
{
  if(disabled)
    return ;
  if(freeformselect)
  {
    // turn off
    document.getElementById('fformimage').src="images/poly.gif";
    freeformselect = false ;
    svgmap.disablePolygonSelect() ;
  }
  else
  {
    // turn on
    document.getElementById('fformimage').src="images/polyon.gif";
    freeformselect = true ;
    svgmap.enablePolygonSelect() ;
    if(singleselect)
      switchSingleSelStatus() ;
    if(rectselect)
      switchRectStatus();
  }
}
// return selected territory from the territory list
function getSelectedTerritory()
{
  var tlist = document.getElementById("terrlist") ;
  if(tlist.selectedIndex==-1)
    return "" ;
  else
    return tlist.options[tlist.selectedIndex].value;
}
// return the attribute value in the info string. the attribute is identified
// by its name, attrName
function getAttributeFromInfo(info, attrName)
{
  if(info==null)
    return null ;
  var i= info.indexOf(attrName);
  if(i<0)
    return null ;
  var info=info.substring(i+attrName.length+1, info.length) ;
  return info.substring(0, info.indexOf('\\n'));
}
// return the string that contains ids of all selected features on the map.
// the ids are seperated by ";"
function getSelectedIdListStr()
{
  var list = svgmap.getSelectedIdList('COUNTIES_TERR');
  if(list!=null && list.length>0)
  {
    var l = list[0] ;
    for(i=1; i<list.length; i++)
      l = l+';'+list[i] ;
    return l ;
  }
  else
    return "" ;
}
// return the string that contains the coordinates of the upper left corner
// and the lower right corner of the selection rectangle on the map.
function getSelectRectCoordStr()
{
  // get rectangle coordinates 
  var rect = svgmap.getSelectRectangle() ;
  if(rect==null)
    return "" ;
  return rect[0]+','+rect[1]+','+rect[2]+','+rect[3];
}
// return the string that contains coordinates of all shape points of the
// free draw polygon on the map.
function getSelectPolyCoordStr()
{
  // get rectangle coordinates 
  var poly = svgmap.getSelectPolygon() ;
  if(poly==null)
    return "" ;
  var result = poly[0] ;
  for(i=1; i<poly.length; i++)
    result = result+','+poly[i];
  return result ;
}
// add selected countiess to a territory
function addToTerritory()
{
  var terr = getSelectedTerritory() ;
  if(terr=="")
  {
    alert("A territory must be selected first! Please try again!");
    return ;
  }
  form.territory.value= terr ;
  if(singleselect)
  {
    var list = svgmap.getSelectedIdList("COUNTIES_TERR") ;
    if(list==null)
    {
      alert("At least one county must be selected! Please try again!");
      return ;
    }
    form.operation.value="realign" ;
    setHiddenInputs();
    form.centerX.value= rcx + ((cx-width/2.0)/(height*1.0))*mapSize ;
    form.centerY.value= rcy + ((height/2.0-cy)/(height*1.0))*mapSize ;
    document.form.submit();
  }
  else if(rectselect||freeformselect)
  {
    var coords = null ;
    if(rectselect)
      coords = getSelectRectCoordStr() ;
    else
      coords = getSelectPolyCoordStr() ;
    if(coords=="")
    {
      alert("No county is selected!");
      return ;
    }
    form.operation.value="realign" ;
    setHiddenInputs();
    form.centerX.value= rcx + ((cx-width/2.0)/(height*1.0))*mapSize ;
    form.centerY.value= rcy + ((height/2.0-cy)/(height*1.0))*mapSize ;
    document.form.submit();
  }
}
// recenter the current map to select territory
function recenterToTerritory()
{
  var terr = getSelectedTerritory() ;
  if(terr=="")
  {
    alert("A territory must be selected first! Please try again!");
    return ;
  }
  form.territory.value= terr ;
  form.operation.value="recenter" ;
  form.submit() ;
}
// display territory report in a popup window
function viewReport(draft)
{
  var urlStr;
  var windowParam = 'width=600,height=400,scrollbars=yes,resizable=yes' ;
  if(draft!="")
    urlStr = 'terrreport.jsp?draft='+draft+'&' ;
  else
    urlStr = 'terrreport.jsp?' ;

  if(singleselect)
  {
    var list = svgmap.getSelectedIdList("COUNTIES_TERR") ;
    if(list==null)
    {
      alert("At least one county must be selected! Please try again!");
      return;
    }
    var idstr=list[0] ;
    for(i=1; i<list.length;i++)
    {
      idstr=idstr+";"+list[i] ;
    }
    window.open(urlStr+'countyids='+escape(idstr).replace(/\+/g, '%2b').replace(/\"/g,'%22').replace(/\'/g, '%27'), 
                'terrdata', windowParam);
  }
  else if(rectselect||freeformselect)
  {
    var coords = "" ;
    if(rectselect)
      coords = getSelectRectCoordStr() ;
    else
      coords = getSelectPolyCoordStr() ;
    if(coords=="")
    {
      alert("No county is selected!");
      return  ;
    }
    if(rectselect)
      window.open(urlStr+'rect='+coords, 'terrdata', windowParam);
    else
      window.open(urlStr+'poly='+coords, 'terrdata', windowParam);
  }
  else
    window.open(urlStr, 'terrdata', windowParam);
}
// remove a territory
function removeTerritory()
{
  var terr = getSelectedTerritory() ;
  if(terr=="")
  {
    alert("A territory must be selected first! Please try again!");
    return ;
  }
  var answer = confirm("Are you sure you want to remove territory "+terr+"?") ;
  if(answer)
  {
    form.territory.value= terr ;
    form.operation.value="removeterritory" ;
    setHiddenInputs();
    document.form.submit();
  }
}
// create a new territory
function newTerritory()
{
  form.operation.value="inputterritory" ;
  form.action="terrnew.jsp" ;
  setHiddenInputs();
  document.form.submit();
}
//go to the draft list page
function gotoDrafts()
{
  document.form.action="terrdrafts.jsp" ;
  document.form.operation.value="" ;
  setHiddenInputs();
  document.form.submit();
}
//go to the home page showing live data
function returnHome()
{
  form.draft.value="" ;
  form.selection.value="" ;
  form.submit() ;
}
//delete the current draft and go to the draft list page
function deleteDraft()
{
  var answer = confirm("Are you sure you want to delete draft "+
                       document.form.draft.value + "?")
  if(answer)
  {
    document.form.action="terrdrafts.jsp" ;
    document.form.operation.value="deletedraft" ;
    form.submit() ;
  }
}
//merge the current draft to live data and go to the live data view
function mergeDraft()
{
  var answer = confirm("Are you sure you want to apply the changes made in this draft to live data set?")
  if(answer)
  {
    document.form.operation.value="mergedraft" ;
    form.submit() ;
  }
}
