WioLTE.setGrovePower(true);
var relay = new (require('GroveRelay'))(WioLTE.D38);
setInterval(function() {
  relay.off();
  relay.pulse(1000, function() {
    console.log("Done!");
});
}, 2000);