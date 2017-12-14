WioLTE.setGrovePower(true);
var light = new (require('GroveLightSensor'))(WioLTE.A4);
setInterval(function() {
  console.log(r.read());
}, 500);