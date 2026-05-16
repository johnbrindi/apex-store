const fs = require('fs');

const originalContent = fs.readFileSync('original_mock_utf8.ts', 'utf8');
const productsMatch = originalContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);\n\n\/\//);

let originalProducts = [];
if (productsMatch) {
  try {
    // We can evaluate it to get the array
    const evalStr = "const products = " + productsMatch[1] + "; products;";
    originalProducts = eval(evalStr);
  } catch (e) {
    console.log("Error evaling products", e);
  }
}

// Generate new products
const newImageUrls = [
  // Session 1
  'https://steroids-uk.com/wp-content/uploads/2022/03/kamagra-effervescent-100mg-tablets-1-500x500-1-300x300.webp',
  'https://steroids-uk.com/wp-content/uploads/2017/11/Super-Kamagra-300x300.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/cialis-300x300.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/11/prilimed-30_blister-300x300.webp',
  'https://steroids-uk.com/wp-content/uploads/2023/01/b-lgd-4033-ligandrol-pharmaqo-300x300.webp',
  'https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/05/Proscalpin-1-agm22mL-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/02/finax_1mg_tablet_30s_35081_0_1-300x300.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/09/testosterone-gel-500x500-1.webp',
  'https://steroids-uk.com/wp-content/uploads/2021/12/anastrazol-neola-front.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/10/liv-52-himalaya-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2015/11/terpafen-clomifenec-citrate-50-mg-500x500-1.webp',
  'https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ibutamorenmk677_1024x1024@2x-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-cardarinegw501516_1024x1024@2x-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2020/08/S-23_1024x1024@2x-700x700.webp',
  // Session 2
  'https://steroids-uk.com/wp-content/uploads/2026/01/oxy-caps-V2-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/anapolon-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/02/Winstrol-Lite-Beligas-1-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-caps-V2-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2015/11/PROVIRON3-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/05/post-cycle-therapy-pct-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2020/08/zymoplex-500x500-500x500-500x500-1.webp',
  'https://steroids-uk.com/wp-content/uploads/2022/02/Nolvadex-D-AStra-700x700.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/05/tamoxifen-uk.webp',
  'https://steroids-uk.com/wp-content/uploads/2022/05/Pro-Turinabol-10_front-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2023/12/pharmaqo-labs-turinabol-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2022/03/pro-dianabol-10-front-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/07/Test-C-5-2-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-CYP-200-scaled-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/02/Cypo-Testosterone-200mg-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/05/TRT-Formula-510x510.jpg-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-ENAN-300-scaled-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/10/Test-E-5-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/07/Tren-E-5-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TREN-A-100-scaled-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-thex-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-tritren150-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/03/Tren-A-5-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-p-100-2-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-P-100-scaled-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/03/Dros-P-5-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-e-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/07/Dros-E-5-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-drosta-enan200-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-E-200-scaled-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/11/Quant-Equipoise-300mg-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/02/NPP-beligas100mg-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-npp100-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TESTMIX5-400-scaled-1-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-sustanon300-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2024/05/Testosterone-AQ-50-510x510.jpg-150x150.webp'
];

let nextId = 17;
const newProducts = newImageUrls.map(url => {
  let name = url.split('/').pop().replace(/\.(webp|jpg)$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  let catId = 'cat-1'; // Default oral
  let slug = url.split('/').pop().replace(/\.(webp|jpg)$/, '').toLowerCase();
  
  if (name.match(/Cyp|Test|Enan|Sustanon|TRT/i)) catId = 'cat-2'; // Injectable
  else if (name.match(/Tren|Equipoise/i)) catId = 'cat-2-3'; // Tren or Injectable
  else if (name.match(/NPP|Deca/i)) catId = 'cat-2-5';
  else if (name.match(/Masteron|Dros|Master/i)) catId = 'cat-2';
  else if (name.match(/Kamagra|Cialis/i)) catId = 'cat-8'; // Sexual Wellness
  else if (name.match(/Ligandrol|Lgd|Ibutamoren|Mk677|Cardarine|Gw501516|S 23/i)) catId = 'cat-4'; // SARMs
  else if (name.match(/Liv 52|Nolvadex|Tamoxifen|Proviron|Zymoplex|Pct/i)) catId = 'cat-5'; // PCT
  else if (name.match(/Proscalpin|Finax/i)) catId = 'cat-5'; // PCT & Support (Hair)
  else if (name.match(/Oxy|Anapolon|Winstrol|Turinabol|Dianabol/i)) catId = 'cat-1'; // Oral
  else if (name.match(/Anastrazol|Terpafen/i)) catId = 'cat-5-2'; // PCT

  return {
    id: 'prod-' + (nextId++),
    name: name,
    slug: slug + '-' + Math.floor(Math.random()*1000),
    short_description: 'Premium performance product.',
    description: 'High quality compound for serious athletes.',
    price: Math.floor(Math.random() * 20) + 30 + .90, // We will use original-style prices (30-60)
    compare_at_price: null,
    sku: slug.substring(0, 8).toUpperCase() + '-' + nextId,
    stock_quantity: 50,
    in_stock: true,
    is_featured: false,
    is_on_sale: false,
    category_id: catId,
    primary_image: url,
    images: [{ id: 'img-n-' + nextId, product_id: 'prod-' + nextId, url: url, position: 0, is_primary: true }],
    tags: ['new', 'premium'],
    rating: 4.8,
    review_count: Math.floor(Math.random() * 100),
    created_at: '2024-02-01T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z',
  };
});

// For Drostanolone and Testosterone Enanthate, let's use the exact text provided by user.
newProducts.forEach(p => {
  if (p.name.match(/Master|Dros/i)) {
    p.description = "What Is Masteron?\nMasteron, also known as Drostanolone, is an anabolic androgenic steroid. It was initially developed as a medical therapeutic drug... Masteron provides a myriad of benefits that make it popular among bodybuilders. It lowers body fat percentage significantly while preserving muscle mass...";
    p.price = 55.90;
    p.category_id = 'cat-2';
  }
  if (p.name.match(/Enan|Test E/i)) {
    p.description = "Testosterone Enanthate is a synthetic anabolic–androgenic steroid (AAS) designed to mimic the effects of the naturally occurring hormone testosterone. Esteemed for its slow-release properties, this ester of testosterone is a go-to for sustainable muscle growth and improved athletic performance...";
    p.price = 45.90;
    p.category_id = 'cat-2-1';
  }
});

const allProducts = [...originalProducts, ...newProducts];

let newFileContent = originalContent.replace(
  /export const products: Product\[\] = \[[\s\S]*?\];\n\n\/\//, 
  "export const products: Product[] = " + JSON.stringify(allProducts, null, 2).replace(/"([^"]+)":/g, '$1:') + ";\n\n//"
);

// We must also restore the fact that ShopClient filtering works. I already modified ShopClient to handle parent categories appropriately.
// Write to mock.ts
fs.writeFileSync('data/mock.ts', newFileContent);
