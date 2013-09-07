
var doMyStuffAfterLoad = function() {
var url = document.location.href;
var regex = new RegExp(".*/events/(\\d+)/?");
eventId = regex.exec(url)[1];
console.log('loaded');

console.log('appending')
$('#contentCol .fbEventHeaderBlock').append('<div style="text-align:center; margin-top:5px; margin-bottom:5px;"><a class="uiToolbarItem uiButton" href="http://www.showmethechicks.com/?id='+eventId+'#/" target="new" role="button" style="background:pink;"><span class="uiButtonText">Show me the chicks</span></a></div>');
console.log('appended!');
//$('div.uiToolbarContent').children().children().append('<a class="uiToolbarItem uiButton" href="http://www.showmethechicks.com/#/?id='+eventId+'" target="new" role="button" style="background:pink;"><span class="uiButtonText">Show me the chicks</span></a>');
}

if (document.readyState == "complete") {
  doMyStuffAfterLoad();
} else {
  document.onreadystatechange = function() {
    if (document.readyState == "complete") {
      doMyStuffAfterLoad();
    }
  };
}