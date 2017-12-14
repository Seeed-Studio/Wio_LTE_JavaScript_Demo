WioLTE.setGrovePower(true);
var button = new (require("GroveButton"))(WioLTE.D38, function(e) {
  if (e.state) console.log("Pressed");
  else console.log("Released");
});