var GroveTemperature = function(pins) {
  this.B=3975; // B value of the thermistor
  this.p = pins[0];
  // Get the temperature in degrees C
  this.get = function(){
    var a = analogRead(this.p);
    // get the resistance of the sensor;
    var resistance=(1-a)*10000/a;
    // convert to temperature via datasheet
    var temperature=1/(Math.log(resistance/10000)/this.B+1/298.15)-273.15;
    return temperature;
  };
  return this;
};

WioLTE.setGrovePower(true);
var t = GroveTemperature(WioLTE.A4);
setInterval(function() {
  console.log(t.get());
}, 2000);