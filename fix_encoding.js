const fs = require('fs');
// Read as buffer to detect/strip BOM
let buf = fs.readFileSync('data/mock.ts');
// Strip UTF-8 BOM if present (EF BB BF)
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
  buf = buf.slice(3);
  console.log('Stripped UTF-8 BOM');
}
// Strip UTF-16 BOM if present (FF FE or FE FF)
if ((buf[0] === 0xFF && buf[1] === 0xFE) || (buf[0] === 0xFE && buf[1] === 0xFF)) {
  // Re-read as UTF-16 and re-encode as UTF-8
  let str = fs.readFileSync('data/mock.ts', 'utf16le');
  fs.writeFileSync('data/mock.ts', str, { encoding: 'utf8' });
  console.log('Re-encoded from UTF-16 to UTF-8');
  process.exit(0);
}
// Write back as clean UTF-8
let str = buf.toString('utf8');
fs.writeFileSync('data/mock.ts', str, { encoding: 'utf8' });
console.log('Saved as clean UTF-8. Length:', str.length);
