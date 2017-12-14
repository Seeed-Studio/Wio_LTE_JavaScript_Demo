WioLTE.setGrovePower(true);
var dht = require("DHT11").connect(WioLTE.D38[0]);

/*
A issue may not update with the online DHT11.js, if this demo turns back as
"Temp is -1 and RH is -1", please uncomment the block below for rewrite the read method"
*/

/*
dht.read = function (cb, n) {
  if (!n) n=10;
  var d = "";
  var ht = this;
  pinMode(ht.pin); // set pin state to automatic
  digitalWrite(ht.pin, 0);

  setTimeout(function() {
    this.watch = setWatch(function(t) {
      d+=0|(t.time-t.lastTime>0.00005);
    }, ht.pin, {edge:'falling',repeat:true} );
  },18);
  // setTimeout(function() {pinMode(ht.pin,'input_pullup');},1);
  setTimeout(function() {
    clearWatch(ht.watch);
    delete ht.watch;
    var cks =
        parseInt(d.substr(2,8),2)+
        parseInt(d.substr(10,8),2)+
        parseInt(d.substr(18,8),2)+
        parseInt(d.substr(26,8),2);
    if (cks&&((cks&0xFF)==parseInt(d.substr(34,8),2))) {
      cb({
        raw : d,
        rh : parseInt(d.substr(2,8),2),
        temp : parseInt(d.substr(18,8),2)
      });
    } else {
      if (n>1) setTimeout(function() {ht.read(cb,--n);},500);
      else cb({err:true, checksumError:cks>0, raw:d, temp:-1, rh:-1});
    }
  }, 50);
};
*/

setInterval(function(){
  dht.read(function (a) {
  console.log("Temp is "+a.temp.toString()+" and RH is "+a.rh.toString());
});
}, 3000);