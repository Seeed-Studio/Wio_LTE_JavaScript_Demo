WioLTE.setGrovePower(true);
var rotation = new (require("GroveRotation"))(WioLTE.A4);
setInterval(function() {
  console.log(rotation.read());
}, 500);