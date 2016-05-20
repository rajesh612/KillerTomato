/* zoom in the current map by 1 zoom level */
function zoomin()
{
  if(disabled)
    return ;
  var reload = false ;
    
  /* check whether a new map is needed from MapViewer. A new map is
     needed when the svg map scale is greater than 4 or the end of the map
     has been reached. */
  if(scale<2) 
  {
    scale = scale * 2 ;
    svgmap.setZoomRatio(scale) ;

    /*check whether the end of the map has been reached */
    if(cx+width/(2*scale)>width || cx-width/(2*scale)<0)
    {
      rcx = rcx + ((cx-width/2)*1.0/height)*mapSize ;
      reload = true ;
    }
    if(cy-height/(2*scale)<0 || cy+height/(2*scale)>height)
    {
      rcy = rcy + ((height/2-cy)*1.0/height)*mapSize ;
      reload = true ;
    }
  }
  else
  {
    // need a new map
    rcx = rcx + ((cx-width/2)*1.0/height)*mapSize ;
    rcy = rcy + ((height/2-cy)*1.0/height)*mapSize ;
    mapSize = mapSize/2.0 ;
    reload = true ;
    scale = 2 ;
  }
  setHiddenInputs();
  if(reload)
  {
    svgmap.showLoadingBar() ;
    document.form.submit();
    disabled = true ;
  }
}
/* zoom out the current map by 1 zoom level */
function zoomout()
{
  if(disabled)
    return ;

  /* check whether a new map is needed from MapViewer. A new map is
     needed when the svg map scale is less than 1 or the end of the map
     has been reached. */
  if(scale<=1)
  {
    rcx = rcx + ((cx-width/2)*1.0/height)*mapSize ;
    rcy = rcy + ((height/2-cy)*1.0/height)*mapSize ;
    mapSize = mapSize*4.0 ;
    scale=2 ;
    setHiddenInputs();
    svgmap.showLoadingBar();
    document.form.submit();
    disabled = true ;
  }
  else
  {
    scale = scale / 2 ;
    //svgmap.setZoomRatio(scale) ;
    svgmap.setZoomRatio(scale);
    var reload = false ;

    /*check whether the edge of the map has been reached */
    if(cx+width/(2*scale)>width || cx-width/(2*scale)<0)
    {
      rcx = rcx + ((cx-width/2)*1.0/height)*mapSize ;
      reload = true ;
    }
    if(cy-height/(2*scale)<0 || cy+height/(2*scale)>height)
    {
      rcy = rcy + ((height/2-cy)*1.0/height)*mapSize ;
      reload = true ;
    }
    setHiddenInputs();
    if(reload)
    {
      svgmap.showLoadingBar();
      document.form.submit();
      disabled = true ;
    }
  }
}
/* recenter the current map */
function panning(direction)
{
  if(disabled)
    return ;
    
  if(direction=='E')
    cx = cx + width/(4*scale) ;
  else if(direction=='W')
    cx = cx - width/(4*scale) ;
  else if(direction=='N')
    cy = cy - height/(4*scale) ;
  else if(direction=='S')
    cy = cy + height/(4*scale) ;
  else if(direction=='NE')
  {
    cx = cx + width/(4*scale) ;
    cy = cy - height/(4*scale) ;
  }
  else if(direction=='NW')
  {
    cy = cy - height/(4*scale) ;
    cx = cx - width/(4*scale) ;
  }
  else if(direction=='SE')
  {
    cy = cy + height/(4*scale) ;
    cx = cx + width/(4*scale) ;
  }
  else 
  {
    cy = cy + height/(4*scale) ;
    cx = cx - width/(4*scale) ;
  }
  svgmap.recenter(cx, cy) ;
  
  /* check whether a new map is needed from MapViewer. A new map is
     needed when the edge of the map has been reached. */
  if(cx+width/(2*scale)>width || cx-width/(2*scale)<0 ||
     cy-height/(2*scale)<0 || cy+height/(2*scale)>height)
  {
    rcx = rcx + ((cx-width/2.0)/(height*1.0))*mapSize ;
    rcy = rcy + ((height/2.0-cy)/(height*1.0))*mapSize ;
    setHiddenInputs();
    svgmap.showLoadingBar() ;
    document.form.submit();
    disabled = true ;
  }
  else
    setHiddenInputs();
}
/* hide the give theme on the map */
function hideTheme(theme, idx)
{
  if(themeVisibleArray[idx]=='true')
  {
    themeVisibleArray[idx]='false';
    svgmap.hideTheme(theme) ;
  }
  else
  {
    themeVisibleArray[idx]='true';
    svgmap.showTheme(theme) ;
  }
}
/* disable all buttons. this is called when the page is refreshed */
function disableButtons()
{
  disabled = true ;
}
/* enable all buttons */
function enableButtons()
{
  disabled = false ;
}
/* switch info tip status */
function switchInfoStatus()
{
  if(disabled)
    return ;
  if(info)
  {
    document.getElementById('infoimage').src="images/info.gif" ;
    form.infoon.value="no" ;
    info = false ;
  }
  else  
  {
    document.getElementById('infoimage').src="images/infoon.gif" ;
    form.infoon.value="yes" ;
    info = true ;
  }
  svgmap.switchInfoStatus() ;
}
/* switch (turn on/off) legend */
function switchLegendStatus()
{
  if(disabled)
    return ;
  if(legend)
  {
    document.getElementById('legendimage').src="images/legend.gif" ;
    legend = false ;
  }
  else  
  {
    document.getElementById('legendimage').src="images/legendon.gif" ;
    legend = true ;
  }
  svgmap.switchLegendStatus() ;
}
/* enable click zoomin. this is called when user chooses Click on the map to
   zoom in. if click zoomin is enabled, map will be zoomed in when user clicks
   on the map.
*/
function enableClickZoomin()
{
  clickZoomin=true ;
  clickRecenter=false ;
}
/* enable click recenter. this is called when user chooses Click on the map to
   recenter. if click recenter is enabled, map will be recentered when user 
   clicks on the map.
*/
function enableClickRecenter()
{
  clickZoomin=false ;
  clickRecenter=true ;
}
/* this function is called from the SVG map, when the svg map is clicked. it
   recenter or zoomin the map at the point where the map is clicked. */
function svgClicked(x,y)
{
  cx = cx + (x-width/2)/scale ; 
  cy = cy + (y-height/2)/scale ; 
  
  if(clickRecenter) /* recenter? */
  {
    svgmap.recenter(cx, cy) ;
    if(cx+width/(2*scale)>width || cx-width/(2*scale)<0 ||
       cy-height/(2*scale)<0 || cy+height/(2*scale)>height)
    {
      form.size.value= mapSize ;
      form.scale.value= scale ;
      rcx = rcx + ((cx-width/2.0)/(height*1.0))*mapSize ;
      rcy = rcy + ((height/2.0-cy)/(height*1.0))*mapSize ;
      form.centerX.value= rcx ;
      form.centerY.value= rcy ;
      setHiddenInputs();
      svgmap.showLoadingBar() ;
      document.form.submit();
      disabled = true ;
    }
    else
      setHiddenInputs();
  }
  else if(clickZoomin) /* zoom in ? */
  {
    svgmap.recenter(cx, cy) ;
    zoomin();
  }
}
