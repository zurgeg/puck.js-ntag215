# puck.js-ntag215
Messing with my puck.js

## WARNING!
Since this is designed mainly for storing amiibo, **a full backdoor is active**. Read/write-locking **is not implemented**. Everything is **fully open**. ***I MAKE NO PROMISES WHEN IT COMES TO SECURITY***

## What is this?
Simple, this is an attempt at emulating NTAG21x with a puck.js. See https://www.nxp.com/docs/en/data-sheet/NTAG213_215_216.pdf. 

## Completion (37.5% complete)
You can find the respective branches for the implementation (if there is one) linked
### Read (25%)
- [x] `READ` - 0x30
- [ ] [`FAST_READ`](https://github.com/zurgeg/puck.js-ntag215/tree/implement-fast_read) - 0x3a
- [ ] `READ_CNT` - 0x39
- [ ] `READ_SIG` - 0x3c

### Write (50%)
- [ ] `COMP_WRITE` - 0xa0
- [x] `WRITE` - 0xa2

### Misc. (50%)
- [x] `GET_VERSION` - 0x60
- [ ] `PWD_AUTH` - 0x1b


