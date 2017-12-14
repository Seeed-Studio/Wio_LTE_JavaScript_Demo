/*
position start form 0.00 to 1.00
*/
function setServo(pin,pos) {

 if (pos<0) pos=0;
 if (pos>1) pos=1;

 analogWrite(pin, (pos * 2.0 + 0.5) / 20, {freq:50});
}

pos = 0.0;
setInterval(function(){
  if(pos >= 1.0) {
    pos = 0.0;
  }
  setServo(WioLTE.D38[0], pos+=0.01);  
},20);