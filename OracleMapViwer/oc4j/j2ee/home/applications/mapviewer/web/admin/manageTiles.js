var mapview=null;
var shouldValidateForm = false ;
var currentOperation = null ;
function showMap()
{
  document.getElementById('mapForm:showMap').value='true';
  var mapCenterX = parseFloat(document.getElementById('mapForm:mapCenterX').value);
  var mapCenterY = parseFloat(document.getElementById('mapForm:mapCenterY').value);
  var mapZoom    = parseInt(document.getElementById('mapForm:zoomLevel').value);
  var srid    = parseInt(document.getElementById('mapForm:mapSrid').value);
  var mpoint = MVSdoGeometry.createPoint(mapCenterX,mapCenterY,srid);
  mapview.setCenter(mpoint);   
  mapview.setZoomLevel(mapZoom);
  mapview.display();
}
function updateCenterAndZoomLevel()
{
  document.getElementById('mapForm:mapCenterX').value = mapview.getCenter().getPointX();
  document.getElementById('mapForm:mapCenterY').value = mapview.getCenter().getPointY();
  document.getElementById('mapForm:zoomLevel').value = mapview.getZoomLevel();
}
function toggleRectSelection(checkbox)
{
  document.getElementById('mapForm:selectedRect').value='' ;
  if(checkbox.checked)
  {
    rectangleTool.init();
    document.getElementById('mapForm:rectSelLabel').innerHTML = 'On' ;
  }
  else
  {
    rectangleTool.clear();
    document.getElementById('mapForm:rectSelLabel').innerHTML = 'Off' ;
  }
}
function setMapParameters()
{
  var center = mapview.getCenter();
  document.getElementById('mapForm:mapCenterX').value=center.getPointX()+'';
  document.getElementById('mapForm:mapCenterY').value=center.getPointY()+'';
  document.getElementById('mapForm:zoomLevel').value=mapview.getZoomLevel()+'';
  document.getElementById('mapForm:selectedRect').value=rectangleTool.getRectangle().getMBR()+'';
}
function initMapPage()
{
  document.getElementById('mapForm:mapSrid').value=document.getElementById('mapForm:defaultSrid').value;
  var baseURL  = location.href;
  baseURL = baseURL.substr(0,baseURL.lastIndexOf('/',baseURL.lastIndexOf('/', baseURL.lastIndexOf('/')-1)-1));
  mapview = new MVMapView(document.getElementById('mapDiv'), baseURL);
  mapCache = document.getElementById('mapForm:mapCacheName').value;
  mapview.addBaseMapLayer(new MVBaseMap(mapCache));   
  mapview.addNavigationPanel();
  mapview.addEventListener("recenter", updateCenterAndZoomLevel);
  mapview.addEventListener("zoom_level_change", updateCenterAndZoomLevel);
  rectangleTool = new MVRectangleTool();
  rectangleTool.addEventListener('on_finish', setMapParameters);
  mapview.addRectangleTool(rectangleTool);
  if(document.getElementById('mapForm:showMap').value=='true')
    showMap();
  toggleRectSelection(document.getElementById('mapForm:rectSelCheckBox')) ;
  deactivateProgressIndicators();
}
function ManageTilesValidator()
{
}

ManageTilesValidator.prototype.validate = function()
{
  if(!shouldValidateForm)
    return true ;
  var selectBox = document.getElementById('mapForm:zoomLevelSelection');
  var selected = false ;
  for(var i=0; i<selectBox.options.length; i++)
  {
    if(selectBox.options[i].selected)
    {
      selected = true ;
      break ;
    }
  }
  if(!selected) 
    return new ValidatorException('At least one zoom must be selected!');
  if(currentOperation!='clear' && document.getElementById('mapForm:selectedRect').value=='')
    return new ValidatorException('Please select a map area!');
}

function enableFormValidation(operation)
{
  shouldValidateForm = true ;
  currentOperation = operation ;
}
function disableFormValidation()
{
  shouldValidateForm = false ;
}
function deactivateProgressIndicators()
{
  if (self._pollManager)
  {
    document.getElementById('mapForm:statusPanel').style.display='none';
    _pollManager.deactivateAll();
  }
}

function reactivateProgressIndicators()
{
  if (self._pollManager)
  {
    document.getElementById('mapForm:statusPanel').style.display='';
    _pollManager.reactivateAll();
  }
}