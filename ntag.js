// based off of https://www.espruino.com/Web+NFC

var amiibo = new Uint8Array(504); // ntag215
var header = NRF.nfcStart(); // init nfc
var data = require("AmiiboConf"); // grab data from amiibo conf

// 0x30 - 0x3c: read commands
var CMD_READ = 0x30; // implemented
var CMD_FAST_READ = 0x3a; // unimplemented

// 0xa0 - 0xa2: write
var CMD_WRITE = 0xa2; // implemented

// other commands
var CMD_GET_VERSION = 0x60; // implemented
var PWD_AUTH = 0x1b // unimplemented


amiibo.set(data, 0); // load data

// load config into vars for ease of use
config_page = new Uint8Array(amiibo.buffer, 0x83, 16); // page 0x83-0x86
cfg0 = new Uint8Array(config_page.buffer, 0x0, 4); // page 0x83
access = new Uint8Array(config_page.buffer, 0x4, 4); // page 0x84
pwd = new Uint8Array(config_page.buffer, 0x8, 4); // page 0x85
pack = new Uint8Array(config_page.buffer, 0xc, 4); // page 0x86


NRF.on("NFCrx", function (rx) {
  var cmd = rx[0];
  var idx = rx[1] * 4;
  switch (cmd){
    case CMD_READ:
      NRF.nfcSend(new Uint8Array(amiibo.buffer, idx, 16));
      break;
    case CMD_WRITE:
      written = true;
      if(idx > amiibo.length) {
        NRF.nfcSend(0x0);
      } else {
        amiibo.set(new Uint8Array(rx, 2, 4), idx);
        NRF.nfcSend(0xA);
      }
      break;
    case CMD_GET_VERSION:
      NRF.nfcSend(0x0004040201001103); 
      // header (always 0x00) - 0x00
      // vendor ID (always 0x04, NXP Semiconducters) - 0x04
      // product type (always 0x04, NTAG) - 0x04
      // product version (always 0x0100) - 1 major, 0 minor
      // storage size - 0x11
      // procotol (always 0x03) - 0x03
    default:
      NRF.nfcSend()
      break;
  }
}
      
      
