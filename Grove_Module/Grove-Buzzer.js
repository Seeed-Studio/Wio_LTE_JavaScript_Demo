/*
// Beep for the time specified in ms, or 500ms if nothing supplied
GroveBuzzer.prototype.beep = function (delay, callback) { ... }

// Play at the specified frequency for the time specified in ms, or 500ms if nothing supplied
GroveBuzzer.prototype.freq = function (freq, delay) { ... }
*/

WioLTE.setGrovePower(true);
var buzzer = new (require("GroveBuzzer"))(WioLTE.D38);
buzzer.beep(100);
buzzer.freq(1000,1000);
