const fs = require('fs');
let content = fs.readFileSync('data/mock.ts', 'utf8');

// Ensure all prices are >= 90
content = content.replace(/price:\s*(\d+\.\d+),/g, (match, p1) => {
  let price = parseFloat(p1);
  if (price < 90) {
    return 'price: ' + (90 + (price % 10)).toFixed(2) + ',';
  }
  return match;
});

// Update an image to the needles image
content = content.replace(/'https:\/\/steroids-uk\.com\/wp-content\/uploads\/2025\/10\/2\.png'/g, "'https://steroids-uk.com/wp-content/uploads/2016/03/needles-front.webp'");

// Update another image to the kamagra image
content = content.replace(/'https:\/\/steroids-uk\.com\/wp-content\/uploads\/2025\/10\/1\.png'/g, "'https://steroids-uk.com/wp-content/uploads/2017/11/kamagra50-front-300x300.webp'");

fs.writeFileSync('data/mock.ts', content);
