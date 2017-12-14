digitalWrite(B2, 1); // Set the modem power pin when Wio LTE board under v1.2
var board;
var APN = "CMAPN";
var USERNAME = "";
var PASSWORD = "";

function wiolteStart(debug_quectel, debug_at) {
  debug_quectel = debug_quectel || false;
  debug_at = debug_at || false;

  board = require('wiolte').connect(function(err) {
    console.log("connectCB entered...");
    if (err) throw err;
    setTimeout(doConnect,3000);
  });

  board.debug(debug_quectel, debug_at);

}

function doConnect() {
  board.connect(APN, USERNAME, PASSWORD, function(err) {
    console.log("connectCB entered...");
    if (err) throw err;
    board.getIP(print);

    // work after connected
    setTimeout(onConnected, 5000);

  });
}

function onConnected(){

  board.SMS.send("18583826402", "HOW R U",function(err) {
    console.log(err);
  });

  // Handle SMS coming
  board.on('message', function(id){
    board.SMS.read(id, function(d, sms){
      if(d !== "OK") throw new Error(d);
      console.log('SMS from:', sms.oaddr);
      console.log(':', sms.text);
    });
  });

}

wiolteStart();