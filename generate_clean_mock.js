const fs = require('fs');

const originalContent = fs.readFileSync('rebuild_mock.js', 'utf8');

const baseContent = `import type { Product, Category, BlogPost } from '@/types'

// Categories
export const categories: Category[] = [
  { id: 'cat-1', name: 'Oral Compounds', slug: 'oral-compounds', description: 'Premium oral performance supplements', image_url: 'https://steroids-uk.com/wp-content/uploads/2022/03/kamagra-effervescent-100mg-tablets-1-500x500-1-300x300.webp', product_count: 24, children: [ { id: 'cat-1-1', name: 'Strength Tablets', slug: 'strength-tablets', parent_id: 'cat-1', product_count: 8 }, { id: 'cat-1-2', name: 'Recovery Tabs', slug: 'recovery-tabs', parent_id: 'cat-1', product_count: 6 }, { id: 'cat-1-3', name: 'Lean Mass Oral', slug: 'lean-mass-oral', parent_id: 'cat-1', product_count: 5 }, { id: 'cat-1-4', name: 'PCT Tablets', slug: 'pct-tablets', parent_id: 'cat-1', product_count: 5 }, ], },
  { id: 'cat-2', name: 'Injectable Solutions', slug: 'injectable-solutions', description: 'Professional-grade injectable formulations', image_url: 'https://steroids-uk.com/wp-content/uploads/2017/11/Super-Kamagra-300x300.webp', product_count: 38, children: [ { id: 'cat-2-1', name: 'Test Enanthate', slug: 'test-enanthate', parent_id: 'cat-2', product_count: 10 }, { id: 'cat-2-2', name: 'Test Cypionate', slug: 'test-cypionate', parent_id: 'cat-2', product_count: 8 }, { id: 'cat-2-3', name: 'Tren Series', slug: 'tren-series', parent_id: 'cat-2', product_count: 7 }, { id: 'cat-2-4', name: 'Blend Formulas', slug: 'blend-formulas', parent_id: 'cat-2', product_count: 6 }, { id: 'cat-2-5', name: 'Deca & NPP', slug: 'deca-npp', parent_id: 'cat-2', product_count: 7 }, ], },
  { id: 'cat-3', name: 'Fat Burners', slug: 'fat-burners', description: 'Advanced thermogenic and metabolic boosters', image_url: 'https://steroids-uk.com/wp-content/uploads/2026/01/cialis-300x300.webp', product_count: 12, children: [ { id: 'cat-3-1', name: 'Thermogenics', slug: 'thermogenics', parent_id: 'cat-3', product_count: 5 }, { id: 'cat-3-2', name: 'Metabolic Support', slug: 'metabolic-support', parent_id: 'cat-3', product_count: 4 }, { id: 'cat-3-3', name: 'GLP-1 Peptides', slug: 'glp1-peptides', parent_id: 'cat-3', product_count: 3 }, ], },
  { id: 'cat-4', name: 'SARMs', slug: 'sarms', description: 'Selective androgen receptor modulators', image_url: 'https://steroids-uk.com/wp-content/uploads/2025/11/prilimed-30_blister-300x300.webp', product_count: 18, children: [ { id: 'cat-4-1', name: 'Bulking SARMs', slug: 'bulking-sarms', parent_id: 'cat-4', product_count: 6 }, { id: 'cat-4-2', name: 'Cutting SARMs', slug: 'cutting-sarms', parent_id: 'cat-4', product_count: 5 }, { id: 'cat-4-3', name: 'Recomp SARMs', slug: 'recomp-sarms', parent_id: 'cat-4', product_count: 4 }, { id: 'cat-4-4', name: 'SARMs Stacks', slug: 'sarms-stacks', parent_id: 'cat-4', product_count: 3 }, ], },
  { id: 'cat-5', name: 'PCT & Support', slug: 'pct-support', description: 'Post-cycle therapy and ancillary support', image_url: 'https://steroids-uk.com/wp-content/uploads/2023/01/b-lgd-4033-ligandrol-pharmaqo-300x300.webp', product_count: 15, children: [ { id: 'cat-5-1', name: 'Post Cycle Therapy', slug: 'post-cycle-therapy', parent_id: 'cat-5', product_count: 6 }, { id: 'cat-5-2', name: 'Estrogen Control', slug: 'estrogen-control', parent_id: 'cat-5', product_count: 5 }, { id: 'cat-5-3', name: 'Liver Support', slug: 'liver-support', parent_id: 'cat-5', product_count: 4 }, ], },
  { id: 'cat-6', name: 'HGH & Peptides', slug: 'hgh-peptides', description: 'Growth hormone and research peptides', image_url: 'https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300.webp', product_count: 10, },
  { id: 'cat-7', name: 'Pre-Made Stacks', slug: 'pre-made-stacks', description: 'Expertly formulated combination packages', image_url: 'https://steroids-uk.com/wp-content/uploads/2024/05/Proscalpin-1-agm22mL-150x150.webp', product_count: 8, },
  { id: 'cat-8', name: 'Sexual Wellness', slug: 'sexual-wellness', description: 'Performance and vitality products', image_url: 'https://steroids-uk.com/wp-content/uploads/2024/02/finax_1mg_tablet_30s_35081_0_1-300x300.webp', product_count: 7, },
]

export const blogPosts: BlogPost[] = [
  { id: 'blog-1', title: 'The Complete Guide to Bulking and Cutting Cycles', slug: 'complete-guide-bulking-cutting-cycles', excerpt: 'Understanding the fundamentals of bulking and cutting is essential for any serious athlete. Learn how to structure your cycles for maximum results with minimal risk.', content: '# The Complete Guide to Bulking and Cutting Cycles\\n\\nFor any serious athlete or bodybuilder, understanding how to structure anabolic cycles is fundamental to achieving your physique goals safely and effectively.\\n\\n## What is a Bulking Cycle?\\n\\nA bulking cycle focuses on maximising muscle mass gain over a defined period. During this phase, athletes typically run a caloric surplus alongside anabolic compounds that enhance protein synthesis and nitrogen retention in muscle tissue.\\n\\n### Key Principles of Bulking\\n\\n1. **Caloric Surplus** - Consuming more calories than you burn\\n2. **Progressive Overload** - Consistently increasing training volume and intensity\\n3. **Recovery Priority** - Adequate sleep and rest periods\\n4. **Compound Selection** - Choosing appropriate anabolics for mass gain\\n\\n## What is a Cutting Cycle?\\n\\nA cutting cycle aims to shed body fat while preserving lean muscle mass. This requires a caloric deficit combined with compounds that support fat metabolism and anti-catabolic properties.\\n\\n## Post-Cycle Therapy\\n\\nAfter any cycle, restoring your bodys natural hormonal balance is essential. PCT protocols typically involve SERMs and other support compounds over 4-6 weeks.', cover_image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', category: 'Training Guides', tags: ['bulking', 'cutting', 'cycles', 'guide'], published: true, published_at: '2026-05-07T00:00:00Z', created_at: '2026-05-07T00:00:00Z', },
  { id: 'blog-2', title: 'Understanding Post Cycle Therapy: A Complete Protocol', slug: 'understanding-post-cycle-therapy-protocol', excerpt: 'Post cycle therapy is one of the most critical aspects of responsible compound use. Here is everything you need to know about running an effective PCT protocol.', content: '# Understanding Post Cycle Therapy\\n\\nPCT is arguably the most important phase of any anabolic compound protocol. Failing to run proper PCT can result in prolonged hormonal suppression and related health issues.\\n\\n## Why PCT Matters\\n\\nAnabolic compounds suppress the bodys natural testosterone production through the HPG axis feedback loop. PCT uses specific compounds to stimulate LH and FSH release from the pituitary, which in turn signals the testes to resume testosterone production.\\n\\n## Standard PCT Protocol\\n\\n- **SERMs** (Tamoxifen, Clomiphene) - Primary PCT agents\\n- **HCG** - Used on-cycle or immediately pre-PCT to maintain testicular volume\\n- **Ancillaries** - Vitamins, minerals, and liver support compounds\\n\\n## PCT Timeline\\n\\nPCT should begin after the last compound has cleared your system. Timing depends on the esters used in your cycle.', cover_image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', category: 'PCT Guide', tags: ['pct', 'recovery', 'hormones'], published: true, published_at: '2026-05-05T00:00:00Z', created_at: '2026-05-05T00:00:00Z', },
  { id: 'blog-3', title: 'SARMs vs Steroids: Key Differences Explained', slug: 'sarms-vs-steroids-key-differences', excerpt: 'Both SARMs and traditional anabolic steroids are used for muscle building and performance enhancement, but they work very differently. Here is a clear comparison.', content: '# SARMs vs Steroids: Key Differences Explained\\n\\nBoth SARMs (Selective Androgen Receptor Modulators) and traditional anabolic steroids interact with androgen receptors to promote muscle growth, but their mechanisms and side effect profiles differ significantly.\\n\\n## How Traditional Steroids Work\\n\\nAnabolic-androgenic steroids bind to androgen receptors throughout the body - not just in muscle tissue. This systemic binding is what causes both the desired anabolic effects and the androgenic side effects.\\n\\n## How SARMs Work\\n\\nSARMs are designed to selectively target androgen receptors in muscle and bone tissue while minimising activity in other tissues like the prostate and skin.\\n\\n## Key Comparisons\\n\\n| Factor | Steroids | SARMs |\\n|--------|----------|-------|\\n| Anabolic potency | Very high | Moderate-high |\\n| Suppression | Significant | Mild-moderate |\\n| Research history | Extensive | Limited |\\n| Administration | Oral/injectable | Oral |\\n\\n## Which Is Right For You?\\n\\nThe choice depends on your experience level, goals, and risk tolerance. Beginners often start with SARMs before progressing to traditional anabolics.', cover_image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80', category: 'Education', tags: ['sarms', 'steroids', 'comparison', 'education'], published: true, published_at: '2026-05-04T00:00:00Z', created_at: '2026-05-04T00:00:00Z', },
]

export const faqs = [
  { id: 'faq-1', category: 'Ordering & Payment', question: 'What payment methods do you accept?', answer: 'We accept bank transfers, cryptocurrency (Bitcoin, Ethereum, USDT), and Revolut payments. Pay with Revolut to receive a 5% discount and a free product with your order.', },
  { id: 'faq-2', category: 'Ordering & Payment', question: 'Is my order and payment information secure?', answer: 'Yes. All transactions are processed through encrypted channels. We do not store card details and our checkout process uses bank-grade SSL encryption.', },
  { id: 'faq-3', category: 'Delivery', question: 'How fast is delivery?', answer: 'Standard delivery is 1-3 business days. Orders placed before 2PM on a weekday with next-day delivery selected will typically arrive the following business day. Orders of £149+ qualify for free next-day delivery with code DELIVERY5.', },
  { id: 'faq-4', category: 'Delivery', question: 'How is my order packaged?', answer: 'All orders are shipped in plain, unmarked packaging with no external indication of contents. Return address is listed as a generic fulfilment address for complete discretion.', },
  { id: 'faq-5', category: 'Products', question: 'Are your products laboratory tested?', answer: 'Yes. We maintain a library of third-party laboratory test results for our stocked products. You can view lab reports on individual product pages or in our Lab Tests section.', },
  { id: 'faq-6', category: 'Products', question: 'Do you guarantee product authenticity?', answer: 'We source directly from verified manufacturers and authorised distributors only. Every batch is verified before being added to stock. We do not sell counterfeit or underground lab products.', },
  { id: 'faq-7', category: 'Account', question: 'Do I need an account to order?', answer: 'Guest checkout is available for most payment methods. However, creating an account allows you to track orders, save addresses, manage your wishlist, and access order history.', },
  { id: 'faq-8', category: 'Account', question: 'How do I track my order?', answer: 'Once your order ships, you will receive an email with tracking information. You can also log into your account and view the Orders section for real-time status updates.', },
  { id: 'faq-9', category: 'Returns & Refunds', question: 'What is your returns policy?', answer: 'We accept returns on sealed, unopened products within 14 days of delivery if the product is damaged or incorrect. Please contact our support team with your order number and photos of the issue.', },
  { id: 'faq-10', category: 'Returns & Refunds', question: 'What if my order arrives damaged?', answer: 'In the rare event of a damaged delivery, please contact us within 48 hours with photographic evidence. We will arrange a replacement or refund at no additional cost.', },
]

export const navigationItems = [
  { label: 'All Products', href: '/shop', },
  { label: 'Manufacturers', href: '/shop/manufacturers', children: [ { label: 'Apex Labs', href: '/shop/manufacturers/apex-labs' }, { label: 'Precision Pharma', href: '/shop/manufacturers/precision-pharma' }, { label: 'Synergy Bio', href: '/shop/manufacturers/synergy-bio' }, { label: 'Elite Research', href: '/shop/manufacturers/elite-research' }, { label: 'Nova Compounds', href: '/shop/manufacturers/nova-compounds' }, ], },
  { label: 'Oral Compounds', href: '/shop/oral-compounds', children: [ { label: 'Strength Tablets', href: '/shop/oral-compounds/strength-tablets' }, { label: 'Lean Mass Oral', href: '/shop/oral-compounds/lean-mass-oral' }, { label: 'PCT Tablets', href: '/shop/oral-compounds/pct-tablets' }, { label: 'All Oral Compounds', href: '/shop/oral-compounds' }, ], },
  { label: 'Injectable Solutions', href: '/shop/injectable-solutions', children: [ { label: 'Testosterone Enanthate', href: '/shop/injectable-solutions/test-enanthate' }, { label: 'Testosterone Cypionate', href: '/shop/injectable-solutions/test-cypionate' }, { label: 'Tren Series', href: '/shop/injectable-solutions/tren-series' }, { label: 'Deca & NPP', href: '/shop/injectable-solutions/deca-npp' }, { label: 'All Injectables', href: '/shop/injectable-solutions' }, ], },
  { label: 'Fat Burners', href: '/shop/fat-burners', children: [ { label: 'Thermogenics', href: '/shop/fat-burners/thermogenics' }, { label: 'Metabolic Support', href: '/shop/fat-burners/metabolic-support' }, { label: 'GLP-1 Peptides', href: '/shop/fat-burners/glp1-peptides' }, { label: 'All Fat Burners', href: '/shop/fat-burners' }, ], },
  { label: 'SARMs', href: '/shop/sarms', children: [ { label: 'Bulking SARMs', href: '/shop/sarms/bulking-sarms' }, { label: 'Cutting SARMs', href: '/shop/sarms/cutting-sarms' }, { label: 'Recomp SARMs', href: '/shop/sarms/recomp-sarms' }, { label: 'SARMs Stacks', href: '/shop/sarms/sarms-stacks' }, { label: 'All SARMs', href: '/shop/sarms' }, ], },
  { label: 'More', href: '#', children: [ { label: 'PCT & Support', href: '/shop/pct-support' }, { label: 'HGH & Peptides', href: '/shop/hgh-peptides' }, { label: 'Pre-Made Stacks', href: '/shop/pre-made-stacks' }, { label: 'Sexual Wellness', href: '/shop/sexual-wellness' }, { label: 'Best for Bulking', href: '/shop?goal=bulking' }, { label: 'Best for Cutting', href: '/shop?goal=cutting' }, ], },
  { label: 'Resources', href: '#', children: [ { label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Delivery Info', href: '/shipping' }, { label: 'Payment Info', href: '/payments' }, { label: 'Contact Us', href: '/contact' }, ], },
]

export const promoMessages = [
  'Pay with Revolut: Receive FREE product + 5% discount — Code: REVO10',
  'Free Next-Day Delivery on orders £149+ — Code: DELIVERY5',
  'All products independently lab tested for purity and accuracy',
  'Discreet plain packaging — no external branding',
  '1,000+ products in stock — Same day dispatch before 2PM',
]
`;

// Build product array from scratch
const imageUrls = [
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
  'https://steroids-uk.com/wp-content/uploads/2024/05/Testosterone-AQ-50-510x510.jpg-150x150.webp',
  'https://steroids-uk.com/wp-content/uploads/2025/11/26_thymosin-150x150.webp'
];

let baseProducts = [];
let nextId = 1;

imageUrls.forEach((url) => {
  let name = url.split('/').pop().replace(/\.(webp|jpg)$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  let catId = 'cat-1'; // Default oral
  let slug = url.split('/').pop().replace(/\.(webp|jpg)$/, '').toLowerCase() + '-' + nextId;
  
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

  baseProducts.push({
    id: 'prod-' + nextId,
    name: name,
    slug: slug,
    short_description: 'Premium performance product. Highest purity guaranteed.',
    description: 'High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.',
    price: Math.floor(Math.random() * 50) + 40 + .90, 
    compare_at_price: Math.random() > 0.7 ? Math.floor(Math.random() * 50) + 100 + .90 : null,
    sku: slug.substring(0, 8).toUpperCase() + '-' + nextId,
    stock_quantity: 50,
    in_stock: true,
    is_featured: nextId <= 8, // Feature first 8
    is_on_sale: Math.random() > 0.7,
    category_id: catId,
    primary_image: url,
    images: [{ id: 'img-' + nextId, product_id: 'prod-' + nextId, url: url, position: 0, is_primary: true }],
    tags: ['premium', 'tested'],
    rating: 4.8,
    review_count: Math.floor(Math.random() * 100) + 10,
    created_at: '2024-02-01T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z',
  });
  nextId++;
});

// Create Bulk versions to get to 100+
let bulkProducts = [];
baseProducts.forEach(pr => {
  let copy = JSON.parse(JSON.stringify(pr));
  copy.id = copy.id + '-bulk';
  copy.name = copy.name + ' (Wholesale Pack)';
  copy.slug = copy.slug + '-bulk';
  copy.price = Math.round((copy.price * 2.5) * 100) / 100;
  if(copy.compare_at_price) copy.compare_at_price = Math.round((copy.compare_at_price * 2.5) * 100) / 100;
  copy.sku = copy.sku + '-B';
  copy.is_featured = false;
  bulkProducts.push(copy);
});

let allProducts = [...baseProducts, ...bulkProducts];

let finalContent = baseContent + '\nexport const products: Product[] = ' + JSON.stringify(allProducts, null, 2) + ';\n';

fs.writeFileSync('data/mock.ts', finalContent, 'utf8');
console.log('Created mock.ts with ' + allProducts.length + ' products.');
