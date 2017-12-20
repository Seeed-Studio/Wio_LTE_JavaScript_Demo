digitalWrite(B2, 1);
var board;

function wiolteStart(debug_quectel, debug_at) {
  board = require('wiolte').connect(function(err) {
    console.log("connectCB entered...");
    if (err) console.log(err);
    setTimeout(onStart,3000);
  });
  board.debug(debug_quectel, debug_at);
}

function onStart(){
  // fetch longitude, latitude every 10 s
  board.geoLocStart(10000);
  setInterval(GeoLoc, 2000);
}

function GeoLoc() {
  var coord="";
  board.geoLocGet(function(err, coord) {
    if(err) throw err;
    console.log("longitude latitude = " + coord.lat,coord.lng);
  });
}

wiolteStart();
