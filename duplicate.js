const fs = require('fs');
let c = fs.readFileSync('data/mock.ts', 'utf8');
const m = c.match(/export const products: Product\[\] = (\[[\s\S]*?\]);\n\n\/\//);
if (m) {
  let p;
  try {
    p = eval('const products = ' + m[1] + '; products;');
  } catch(e){
    console.error(e);
  }
  let n = [];
  p.forEach((pr) => {
    let copy = JSON.parse(JSON.stringify(pr));
    copy.id = copy.id + '-copy';
    copy.name = copy.name + ' (Bulk)';
    copy.slug = copy.slug + '-bulk';
    copy.price = Math.round((copy.price * 0.9) * 100) / 100;
    copy.sku = copy.sku + '-B';
    n.push(copy);
  });
  let all = [...p, ...n];
  fs.writeFileSync('data/mock.ts', c.replace(/export const products: Product\[\] = \[[\s\S]*?\];\n\n\/\//, 'export const products: Product[] = ' + JSON.stringify(all, null, 2).replace(/"([A-Za-z_]+)":/g, '$1:') + ';\n\n//'));
}
