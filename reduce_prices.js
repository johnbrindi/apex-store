const fs = require('fs');
let content = fs.readFileSync('data/mock.ts', 'utf8');

content = content.replace(/price:\s*([\d\.]+)/g, (match, priceStr) => {
  let p = parseFloat(priceStr);
  if (p >= 90) {
    p = Math.floor(Math.random() * 30) + 35 + 0.90; // Price between 35.90 and 64.90
  }
  return `price: ${p.toFixed(2)}`;
});

content = content.replace(/compare_at_price:\s*([\d\.]+)/g, (match, priceStr) => {
  let p = parseFloat(priceStr);
  if (p >= 90) {
    p = Math.floor(Math.random() * 30) + 65 + 0.90; // Compare price between 65.90 and 94.90
  }
  return `compare_at_price: ${p.toFixed(2)}`;
});

fs.writeFileSync('data/mock.ts', content);
