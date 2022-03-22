// based off of https://www.espruino.com/Web+NFC

var amiibo = new Uint8Array(540); // Amiibo sized
var header = NRF.nfcStart(); // init nfc
var data = require("AmiiboConf"); // grab data from amiibo conf

var CMD_READ = 0x30;
var CMD_WRITE = 0xa2;

amiibo.set(data, 0); // load data

NRF.on("NFCrx", function (rx) {
  var cmd = rx[0];
  var idx = rx[1] * 4;
  switch (cmd){
    case CMD_READ:
      NRF.nfcSend(new Uint8Array(data.buffer, idx, 16));
      break;
    case CMD_WRITE:
      written = true;
      if(idx > data.length) {
        NRF.nfcSend(0x0);
      } else {
        data.set(new Uint8Array(rx, 2, 4), idx);
        NRF.nfcSend(0xA);
      }
      break;
  }
}
      
      
