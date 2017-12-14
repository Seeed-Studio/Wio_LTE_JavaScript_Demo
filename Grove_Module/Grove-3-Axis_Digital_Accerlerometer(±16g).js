WioLTE.setGrovePower(true);
I2C1.setup({scl:WioLTE.I2C[0], sda:WioLTE.I2C[1]});
var accel = require("ADXL345").connect(I2C1,0,0);
accel.measure(true);
setInterval(function(){
  console.log(accel.read());
},2000);