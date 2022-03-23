# puck.js-ntag215
Messing with my puck.js

## What is this?
Simple, this is an attempt at emulating NTAG21x with a puck.js. See https://www.nxp.com/docs/en/data-sheet/NTAG213_215_216.pdf

## Completion (37.5% complete)
### Read (25% complete)
- [x] `READ` - 0x30
- [ ] `FAST_READ` - 0x3a
- [ ] `READ_CNT` - 0x39
- [ ] `READ_SIG` - 0x3c

### Write (50%)
- [x] WRITE - WRITE 0xa2
- [ ] COMP_WRITE - 0xa0

### Misc. (50%)
- [ ] PWD_AUTH - 0x1b
- [x] GET_VERSION - 0x60


