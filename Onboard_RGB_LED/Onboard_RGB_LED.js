/*
WioLTE.setLEDPower(true);
WioLTE.LED(r,g,b); // r,g,b range between 0 to 255
*/

WioLTE.setLEDPower(true);

var rgb = new Uint8ClampedArray(3);
var pos = 0;
function getPattern() {
  pos++;
  for (var i=0;i<rgb.length;) {
    rgb[i++] = (1 + Math.sin((i+pos)*0.1324)) * 10;
    rgb[i++] = (1 + Math.sin((i+pos)*0.1654)) * 10;
    rgb[i++] = (1 + Math.sin((i+pos)*0.1)) * 10;
  }
  return rgb;
}
setInterval(function() {
  var color = getPattern();
  WioLTE.LED(color[0], color[1], color[2]);
}, 100);
