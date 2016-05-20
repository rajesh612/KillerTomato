/* Copyright (c) 2004, 2005, Oracle. All rights reserved.  
 *
 *  DESCRIPTION: MapViewer jsp demo javascript functions
 *  MODIFIED:    (MM/DD/YY) 
 *   jxyang       09/30/04
 */
var ie=document.all ;
var ns6=document.getElementById && !document.all ;
var infoEnabled=false ;
var infoWindow ;
var yOffset=20 ;
if(ie)
  infoWindow = document.all["infowindowdv"] ;
else if(document.getElementById)
  infoWindow = document.getElementById("infowindowdv") ;
else
  infoWindow = null ;
var ieWindow ;
if(document.compatMode && document.compatMode!="BackCompat")
  ieWindow = document.documentElement ;
else 
  ieWindow = document.body ;

/*
 * Determine the width(in pixels) of the info window
 */
function setInfoWindowSize(text)
{
  var maxLen = 0 ;

  /* break the info text into lines seperated by <br>
   * find the longest line and use the length as the width
   * of the info window
   */

  var lines=text.split('<br>') ;
  if (lines.length>1)
  {
    for (i=0;i<lines.length;i++)
    {
      if(lines[i].length > maxLen)
        maxLen = lines[i].length ;
    }
  }
  else
    maxLen = text.length ;

  /* Let's assume each charactor is 7 pixels wide and you can change it 
   * if it doesn't fit for your font setting.
   */
  infoWindow.style.width = maxLen*8 ;
}

function formatText(thetext)
{
  if(!thetext)
    return thetext ;
  var result = "" ;
  var equalIdx ;
  result = "<table>" ;
  var maxAttNameLen=0, maxAttValueLen=0 ;
  
  while(thetext.length>0)
  {
    equalIdx = thetext.indexOf('="') ;
    if(equalIdx<0)
    {
      result = result + thetext ;
      maxAttNameLen = thetext.length ;
      maxAttValueLen = 0 ;
      break ;
    }
    
    var attName = thetext.substring(0, equalIdx) ;
    if(attName.length>maxAttNameLen)
      maxAttNameLen = attName.length ;
      
    result = result + "<tr><td>"+attName+":</td><td>" ;
    thetext = thetext.substring(equalIdx+2, thetext.length) ;
    var quoteIdx = thetext.indexOf('"') ;
    var attValue = "" ;
    while(quoteIdx>0 && thetext.charAt(quoteIdx-1)=='\\') 
    {
      // deal with escaped double quote
      attValue = attValue + thetext.substring(0, quoteIdx-1) + '"' ;
      thetext = thetext.substring(quoteIdx+1, thetext.length) ;
      quoteIdx = thetext.indexOf('"') ;
    }
    if(quoteIdx<0)
    {
      attValue = attValue + thetext ;
      if(attValue.length > maxAttValueLen)
        maxAttValueLen = attValue.length ;
      break ;
    }
    else
    {
      attValue = attValue + thetext.substring(0, quoteIdx) ;
      if(attValue.length > maxAttValueLen)
        maxAttValueLen = attValue.length ;
        
      result = result + attValue + "</td></tr>" ;
      if(quoteIdx+1<thetext.length)
        thetext = thetext.substring(quoteIdx+2, thetext.length) ;
      else
        break ;
    }
  }
  infoWindow.style.width = (maxAttNameLen+maxAttValueLen)*10 ;
  return result+"</table>" ;
}
/*
 * Display the info window with infoText in it
 */
function showInfo(thetext)
{
  if (ns6||ie)
  {
    thetext = formatText(thetext) ;
    //setInfoWindowSize(thetext) ;
    infoWindow.innerHTML=thetext ;
    infoEnabled=true ;
    return false ;
  }
}

function moveInfo(e)
{
  if (infoEnabled)
  {
    /* Place the info window at the location where the mouse is located. 
     * Adjust the info window placement if the mouse is too close to the lower
     * right corner of the browser window.
     */

    // Get the mouse location
    var x, y ;
    if(ns6)
    {
      x = e.pageX ;
      y = e.pageY ;
    }
    else
    {
      x = event.x+ieWindow.scrollLeft;
      y = event.y+ieWindow.scrollTop;
    }

    /* Move the info window to the left of its current location if the right 
     * edge of the info window exceeds the right edge of the browser window
     */
    if(ie&&!window.opera)
    {
      if(event.clientX+infoWindow.offsetWidth > ieWindow.clientWidth)
        infoWindow.style.left = ieWindow.clientWidth-infoWindow.offsetWidth+"px" ;
      else
        infoWindow.style.left=x+"px" ;
    }
    else
    {
      if(e.clientX+infoWindow.offsetWidth > window.innerWidth) 
        infoWindow.style.left = window.innerWidth-infoWindow.offsetWidth+"px" ;
      else
        infoWindow.style.left = x+"px" ;
    }

    /* move the info window above its current location if the bottom of the info 
     * window exceeds the bottom of the browser window
     */
    if(ie&&!window.opera)
    {
      if(event.clientY+infoWindow.offsetHeight+yOffset > ieWindow.clientHeight)
        infoWindow.style.top = ieWindow.clientHeight-infoWindow.offsetHeight+"px" ;
      else
        infoWindow.style.top = y+yOffset+"px" ;
    }
    else
    {
      if(e.clientY+infoWindow.offsetHeight+yOffset > window.innerHeight)
        infoWindow.style.top = window.innerHeight-infoWindow.offsetHeight+"px" ;
      else
        infoWindow.style.top = y+yOffset+"px" ;
    }
    infoWindow.style.visibility="visible" ;
  }
}

/*
 * Hide the info window
 */
function hideInfo()
{
  if (infoWindow)
  {
    infoEnabled=false
    infoWindow.style.visibility="hidden"
    infoWindow.style.left="-1000px"
  }
}

function openWindow(x)
{
  window.open('http://www.domain.com?'+x,'mywindow','scrollbars=yes,menubar=yes,height=600,width=800,resizable=yes,toolbar=no,location=yes,status=no'); 
}

document.onmousemove=moveInfo
