import type { Product, Category, BlogPost } from '@/types'

// Categories
export const categories: Category[] = [
  { id: 'cat-1', name: 'Oral Compounds', slug: 'oral-compounds', description: 'Premium oral performance supplements', image_url: 'https://steroids-uk.com/wp-content/uploads/2022/03/kamagra-effervescent-100mg-tablets-1-500x500-1-300x300.webp', product_count: 24, children: [{ id: 'cat-1-1', name: 'Strength Tablets', slug: 'strength-tablets', parent_id: 'cat-1', product_count: 8 }, { id: 'cat-1-2', name: 'Recovery Tabs', slug: 'recovery-tabs', parent_id: 'cat-1', product_count: 6 }, { id: 'cat-1-3', name: 'Lean Mass Oral', slug: 'lean-mass-oral', parent_id: 'cat-1', product_count: 5 }, { id: 'cat-1-4', name: 'PCT Tablets', slug: 'pct-tablets', parent_id: 'cat-1', product_count: 5 },], },
  { id: 'cat-2', name: 'Injectable Solutions', slug: 'injectable-solutions', description: 'Professional-grade injectable formulations', image_url: 'https://steroids-uk.com/wp-content/uploads/2017/11/Super-Kamagra-300x300.webp', product_count: 38, children: [{ id: 'cat-2-1', name: 'Test Enanthate', slug: 'test-enanthate', parent_id: 'cat-2', product_count: 10 }, { id: 'cat-2-2', name: 'Test Cypionate', slug: 'test-cypionate', parent_id: 'cat-2', product_count: 8 }, { id: 'cat-2-3', name: 'Tren Series', slug: 'tren-series', parent_id: 'cat-2', product_count: 7 }, { id: 'cat-2-4', name: 'Blend Formulas', slug: 'blend-formulas', parent_id: 'cat-2', product_count: 6 }, { id: 'cat-2-5', name: 'Deca & NPP', slug: 'deca-npp', parent_id: 'cat-2', product_count: 7 },], },
  { id: 'cat-3', name: 'Fat Burners', slug: 'fat-burners', description: 'Advanced thermogenic and metabolic boosters', image_url: 'https://steroids-uk.com/wp-content/uploads/2026/01/cialis-300x300.webp', product_count: 12, children: [{ id: 'cat-3-1', name: 'Thermogenics', slug: 'thermogenics', parent_id: 'cat-3', product_count: 5 }, { id: 'cat-3-2', name: 'Metabolic Support', slug: 'metabolic-support', parent_id: 'cat-3', product_count: 4 }, { id: 'cat-3-3', name: 'GLP-1 Peptides', slug: 'glp1-peptides', parent_id: 'cat-3', product_count: 3 },], },
  { id: 'cat-4', name: 'SARMs', slug: 'sarms', description: 'Selective androgen receptor modulators', image_url: 'https://steroids-uk.com/wp-content/uploads/2025/11/prilimed-30_blister-300x300.webp', product_count: 18, children: [{ id: 'cat-4-1', name: 'Bulking SARMs', slug: 'bulking-sarms', parent_id: 'cat-4', product_count: 6 }, { id: 'cat-4-2', name: 'Cutting SARMs', slug: 'cutting-sarms', parent_id: 'cat-4', product_count: 5 }, { id: 'cat-4-3', name: 'Recomp SARMs', slug: 'recomp-sarms', parent_id: 'cat-4', product_count: 4 }, { id: 'cat-4-4', name: 'SARMs Stacks', slug: 'sarms-stacks', parent_id: 'cat-4', product_count: 3 },], },
  { id: 'cat-5', name: 'PCT & Support', slug: 'pct-support', description: 'Post-cycle therapy and ancillary support', image_url: 'https://steroids-uk.com/wp-content/uploads/2023/01/b-lgd-4033-ligandrol-pharmaqo-300x300.webp', product_count: 15, children: [{ id: 'cat-5-1', name: 'Post Cycle Therapy', slug: 'post-cycle-therapy', parent_id: 'cat-5', product_count: 6 }, { id: 'cat-5-2', name: 'Estrogen Control', slug: 'estrogen-control', parent_id: 'cat-5', product_count: 5 }, { id: 'cat-5-3', name: 'Liver Support', slug: 'liver-support', parent_id: 'cat-5', product_count: 4 },], },
  { id: 'cat-6', name: 'HGH & Peptides', slug: 'hgh-peptides', description: 'Growth hormone and research peptides', image_url: 'https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300.webp', product_count: 10, },
  { id: 'cat-7', name: 'Pre-Made Stacks', slug: 'pre-made-stacks', description: 'Expertly formulated combination packages', image_url: 'https://steroids-uk.com/wp-content/uploads/2024/05/Proscalpin-1-agm22mL-150x150.webp', product_count: 8, },
  { id: 'cat-8', name: 'Sexual Wellness', slug: 'sexual-wellness', description: 'Performance and vitality products', image_url: 'https://steroids-uk.com/wp-content/uploads/2024/02/finax_1mg_tablet_30s_35081_0_1-300x300.webp', product_count: 7, },
]

export const blogPosts: BlogPost[] = [
  { id: 'blog-1', title: 'The Complete Guide to Bulking and Cutting Cycles', slug: 'complete-guide-bulking-cutting-cycles', excerpt: 'Understanding the fundamentals of bulking and cutting is essential for any serious athlete. Learn how to structure your cycles for maximum results with minimal risk.', content: '# The Complete Guide to Bulking and Cutting Cycles\n\nFor any serious athlete or bodybuilder, understanding how to structure anabolic cycles is fundamental to achieving your physique goals safely and effectively.\n\n## What is a Bulking Cycle?\n\nA bulking cycle focuses on maximising muscle mass gain over a defined period. During this phase, athletes typically run a caloric surplus alongside anabolic compounds that enhance protein synthesis and nitrogen retention in muscle tissue.\n\n### Key Principles of Bulking\n\n1. **Caloric Surplus** - Consuming more calories than you burn\n2. **Progressive Overload** - Consistently increasing training volume and intensity\n3. **Recovery Priority** - Adequate sleep and rest periods\n4. **Compound Selection** - Choosing appropriate anabolics for mass gain\n\n## What is a Cutting Cycle?\n\nA cutting cycle aims to shed body fat while preserving lean muscle mass. This requires a caloric deficit combined with compounds that support fat metabolism and anti-catabolic properties.\n\n## Post-Cycle Therapy\n\nAfter any cycle, restoring your bodys natural hormonal balance is essential. PCT protocols typically involve SERMs and other support compounds over 4-6 weeks.', cover_image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', category: 'Training Guides', tags: ['bulking', 'cutting', 'cycles', 'guide'], published: true, medical_reviewer: 'Prof. J. Anderson, Ph.D. Endocrinology', published_at: '2026-05-07T00:00:00Z', created_at: '2026-05-07T00:00:00Z', },
  { id: 'blog-2', title: 'Understanding Post Cycle Therapy: A Complete Protocol', slug: 'understanding-post-cycle-therapy-protocol', excerpt: 'Post cycle therapy is one of the most critical aspects of responsible compound use. Here is everything you need to know about running an effective PCT protocol.', content: '# Understanding Post Cycle Therapy\n\nPCT is arguably the most important phase of any anabolic compound protocol. Failing to run proper PCT can result in prolonged hormonal suppression and related health issues.\n\n## Why PCT Matters\n\nAnabolic compounds suppress the bodys natural testosterone production through the HPG axis feedback loop. PCT uses specific compounds to stimulate LH and FSH release from the pituitary, which in turn signals the testes to resume testosterone production.\n\n## Standard PCT Protocol\n\n- **SERMs** (Tamoxifen, Clomiphene) - Primary PCT agents\n- **HCG** - Used on-cycle or immediately pre-PCT to maintain testicular volume\n- **Ancillaries** - Vitamins, minerals, and liver support compounds\n\n## PCT Timeline\n\nPCT should begin after the last compound has cleared your system. Timing depends on the esters used in your cycle.', cover_image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', category: 'PCT Guide', tags: ['pct', 'recovery', 'hormones'], published: true, medical_reviewer: 'Prof. J. Anderson, Ph.D. Endocrinology', published_at: '2026-05-05T00:00:00Z', created_at: '2026-05-05T00:00:00Z', },
  { id: 'blog-3', title: 'SARMs vs Steroids: Key Differences Explained', slug: 'sarms-vs-steroids-key-differences', excerpt: 'Both SARMs and traditional anabolic steroids are used for muscle building and performance enhancement, but they work very differently. Here is a clear comparison.', content: '# SARMs vs Steroids: Key Differences Explained\n\nBoth SARMs (Selective Androgen Receptor Modulators) and traditional anabolic steroids interact with androgen receptors to promote muscle growth, but their mechanisms and side effect profiles differ significantly.\n\n## How Traditional Steroids Work\n\nAnabolic-androgenic steroids bind to androgen receptors throughout the body - not just in muscle tissue. This systemic binding is what causes both the desired anabolic effects and the androgenic side effects.\n\n## How SARMs Work\n\nSARMs are designed to selectively target androgen receptors in muscle and bone tissue while minimising activity in other tissues like the prostate and skin.\n\n## Key Comparisons\n\n| Factor | Steroids | SARMs |\n|--------|----------|-------|\n| Anabolic potency | Very high | Moderate-high |\n| Suppression | Significant | Mild-moderate |\n| Research history | Extensive | Limited |\n| Administration | Oral/injectable | Oral |\n\n## Which Is Right For You?\n\nThe choice depends on your experience level, goals, and risk tolerance. Beginners often start with [SARMs](/shop/sarms) before progressing to traditional anabolics. Browse our full [SARMs range](/shop/sarms) or explore our [injectable solutions](/shop/injectable-solutions) for more advanced options.', cover_image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80', category: 'Education', tags: ['sarms', 'steroids', 'comparison', 'education'], published: true, medical_reviewer: 'Prof. J. Anderson, Ph.D. Endocrinology', published_at: '2026-05-04T00:00:00Z', created_at: '2026-05-04T00:00:00Z', },
  {
    id: 'blog-4',
    title: 'How to Buy Steroids Safely Online in the UK (2026 Guide)',
    slug: 'how-to-buy-steroids-safely-online-uk',
    excerpt: 'Buying anabolic steroids online in the UK requires knowing how to identify a legitimate, lab-tested source. This complete guide covers everything you need to check before placing an order.',
    content: '# How to Buy Steroids Safely Online in the UK\n\nWith hundreds of websites claiming to sell pharmaceutical-grade compounds, knowing how to buy steroids safely online in the UK has never been more important. This guide covers the essential checks every UK buyer should make before committing to any supplier.\n\n## 1. Always Verify Lab Test Certificates\n\nThe single most important factor when buying steroids online in the UK is independently verified laboratory testing. A reputable UK steroids supplier will always provide third-party Certificates of Analysis (CoAs) for every product batch.\n\n- Look for CoAs from accredited UK or EU labs\n- Check that the tested compound matches what is on the label\n- Verify the reported concentration (mg/ml or mg/tablet)\n\n## 2. Check for Pharmaceutical-Grade vs Underground Lab (UGL) Products\n\nPharmaceutical-grade compounds are manufactured under strict GMP conditions. Underground lab products vary wildly in purity and dosage accuracy. When you [buy steroids online in the UK](/shop), always prioritise suppliers who stock verifiable pharmaceutical-grade products.\n\n## 3. Discreet Packaging Is Non-Negotiable\n\nA trustworthy UK steroids shop will ship all orders in plain, unmarked packaging with no external branding or indication of contents. This protects your privacy from the moment your order leaves the warehouse.\n\n## 4. Payment Method Security\n\nLegitimate suppliers offer secure, traceable payment options. Avoid any supplier who only accepts untraceable cryptocurrency with no other options. Reputable UK suppliers typically offer bank transfer, crypto, and digital wallet options.\n\n## 5. Customer Reviews and Reputation\n\nSearch for independent forum reviews on UK bodybuilding communities. Long-established suppliers with consistent positive feedback from verified buyers are a far safer bet than new or anonymous storefronts.\n\n## What to Buy: Recommended Starting Points\n\nFor beginners looking to buy steroids online in the UK for the first time, [oral compounds](/shop/oral-compounds) are often the most approachable starting point due to their convenience and ease of dosing adjustment.\n\nMore experienced users frequently opt for [injectable solutions](/shop/injectable-solutions) such as Testosterone Enanthate, which offer superior bioavailability and more stable blood plasma levels.\n\nFor those focused on body recomposition without full suppression, our [SARMs range](/shop/sarms) provides a middle ground between natural supplementation and traditional anabolic cycles.\n\n## Summary\n\nBuying steroids safely online in the UK comes down to three pillars: verified lab testing, transparent sourcing, and a supplier with a proven track record. All products on our [online UK steroids shop](/shop) meet these standards.',
    cover_image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    category: 'Education',
    tags: ['buy steroids uk', 'steroids online uk', 'uk steroids', 'guide', 'safe buying'],
    published: true,
    published_at: '2026-05-10T00:00:00Z',
    created_at: '2026-05-10T00:00:00Z',
  },
  {
    id: 'blog-5',
    title: 'Injectable vs Oral Steroids UK: Which Should You Choose?',
    slug: 'injectable-vs-oral-steroids-uk',
    excerpt: 'Should you start with injectable or oral anabolic steroids? This in-depth guide breaks down the pros and cons of each administration method to help UK buyers make an informed decision.',
    content: '# Injectable vs Oral Steroids UK: Which Should You Choose?\n\nOne of the most common questions among UK performance athletes is whether to use [injectable steroids](/shop/injectable-solutions) or [oral steroids](/shop/oral-compounds). Both have distinct advantages and trade-offs that should inform your decision based on your experience level and goals.\n\n## Oral Steroids: Advantages and Drawbacks\n\n**Advantages:**\n- No injections required — ideal for first-time users in the UK\n- Faster to begin and end a cycle\n- Easier to adjust or discontinue dosing quickly\n- More convenient for travel\n\n**Drawbacks:**\n- Most oral anabolics are 17-alpha alkylated (17aa), placing additional strain on the liver\n- Shorter half-lives mean more frequent dosing\n- Generally less efficient than injectable esters\n\nPopular oral compounds available in the UK include Dianabol (Methandrostenolone), Anavar (Oxandrolone), and Winstrol (Stanozolol). Browse our full range of [oral compounds in the UK](/shop/oral-compounds).\n\n## Injectable Steroids: Advantages and Drawbacks\n\n**Advantages:**\n- Superior bioavailability — more of the compound reaches systemic circulation\n- Stable blood plasma levels with long-ester compounds\n- No first-pass liver metabolism\n- Greater flexibility in compound selection\n\n**Drawbacks:**\n- Requires proper injection technique and sterile equipment\n- Longer half-lives mean slower adjustment if side effects emerge\n- More preparation required\n\nPopular injectable steroids in the UK include [Testosterone Enanthate](/shop/injectable-solutions/test-enanthate), [Testosterone Cypionate](/shop/injectable-solutions/test-cypionate), Trenbolone, and Deca-Durabolin. View our complete [injectable steroids UK range](/shop/injectable-solutions).\n\n## Which Is Right For You?\n\nFor **beginners** buying steroids online in the UK for the first time, starting with a straightforward oral compound such as Anavar allows you to observe how your body responds with minimal commitment.\n\nFor **intermediate to advanced** users who have completed at least one cycle, moving to [injectable testosterone](/shop/injectable-solutions/test-enanthate) as a foundation provides superior results with better long-term health margins compared to continuous oral use.\n\n## PCT Is Always Required\n\nRegardless of whether you choose oral or injectable anabolic steroids, post-cycle therapy (PCT) is mandatory. Visit our [PCT & Support range](/shop/pct-support) to ensure you have the correct compounds for a safe recovery.',
    cover_image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    category: 'Education',
    tags: ['injectable steroids uk', 'oral steroids uk', 'buy steroids uk', 'anabolic steroids', 'comparison'],
    published: true,
    published_at: '2026-05-12T00:00:00Z',
    created_at: '2026-05-12T00:00:00Z',
  },
  {
    id: 'blog-6',
    title: 'Testosterone Enanthate UK: Dosage, Cycle & Where to Buy',
    slug: 'testosterone-enanthate-uk-guide',
    excerpt: 'Testosterone Enanthate is the most popular anabolic steroid in the UK. This guide covers everything you need to know about dosing, cycle length, expected results, and where to buy quality Test E in the UK.',
    content: '# Testosterone Enanthate UK: The Complete Guide\n\nTestosterone Enanthate (Test E) is the cornerstone of anabolic steroid cycles worldwide, and remains the most widely used injectable steroid in the UK. Its long ester makes it ideal for sustained muscle building cycles with minimal injection frequency.\n\n## What Is Testosterone Enanthate?\n\nTestosterone Enanthate is a synthetic form of testosterone with an enanthate ester attached. This ester controls the release rate of the hormone into the bloodstream, providing stable levels over 5-7 days per injection. As the foundational building block of most UK steroid cycles, it is an essential product for both beginners and experienced users.\n\n## Dosage Guidelines\n\nDosage recommendations for Testosterone Enanthate in the UK vary by experience level:\n\n- **Beginners:** 300–400mg per week (split into two injections)\n- **Intermediate:** 400–600mg per week\n- **Advanced:** 600–1000mg per week (with additional ancillaries)\n\nAlways start at the lower end of your range when using a new compound or source.\n\n## Typical Cycle Length\n\nA standard Test E cycle runs for **12–16 weeks**, followed by a 2-3 week clearance period before beginning PCT. The long ester requires time to fully clear the system.\n\n## Expected Results\n\nOver a properly structured 12-week Testosterone Enanthate cycle, users in the UK typically report:\n\n- **4–8kg of lean muscle mass** (diet dependent)\n- Significant increases in strength and training performance\n- Improved recovery between sessions\n- Enhanced nitrogen retention and protein synthesis\n\n## Where to Buy Testosterone Enanthate in the UK\n\nBuying Testosterone Enanthate online in the UK requires a trusted, lab-tested source. Our [Testosterone Enanthate range](/shop/injectable-solutions/test-enanthate) includes products from verified manufacturers with published CoAs, ensuring you receive exactly what is on the label.\n\nFor a complete [injectable steroids range in the UK](/shop/injectable-solutions), including Test Cypionate, Trenbolone, and Deca-Durabolin blends, browse our full catalogue.\n\n## Post-Cycle Therapy After Test E\n\nFollowing every Testosterone Enanthate cycle, a structured PCT protocol is essential. Begin PCT approximately 2 weeks after your last injection. View our [PCT & Support products](/shop/pct-support) to prepare your recovery stack before your cycle even begins.',
    cover_image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    category: 'Training Guides',
    tags: ['testosterone enanthate uk', 'test e uk', 'injectable steroids uk', 'buy testosterone uk', 'testosterone cycle'],
    published: true,
    published_at: '2026-05-14T00:00:00Z',
    created_at: '2026-05-14T00:00:00Z',
  },
  {
    id: 'blog-7',
    title: 'Best Steroids for Cutting in the UK (2026): Anavar, Winstrol & Clenbuterol',
    slug: 'best-steroids-cutting-uk',
    excerpt: 'Looking to get lean and shredded? This guide covers the best cutting steroids available in the UK in 2026, including Anavar, Winstrol, Clenbuterol, and Trenbolone Acetate — with dosage recommendations and stacking tips.',
    content: '# Best Steroids for Cutting in the UK (2026)\n\nWhen it comes to getting lean while maintaining hard-earned muscle mass, the right cutting compounds make all the difference. Here is our complete guide to the best steroids for cutting in the UK.\n\n## What Makes a Good Cutting Steroid?\n\nAn ideal cutting compound in the UK context has three properties:\n\n1. **Anti-catabolic** — prevents muscle breakdown during a caloric deficit\n2. **Fat-burning or metabolically active** — directly or indirectly promotes fat oxidation\n3. **Low water retention** — produces a dry, hard physique rather than a puffy look\n\n## Top Cutting Steroids Available in the UK\n\n### Anavar (Oxandrolone)\n\nAnavar is widely regarded as the best cutting steroid for beginners and women in the UK. Its mild androgenic profile, anti-catabolic properties, and direct fat-burning effects make it ideal for a lean cutting cycle. Available in our [oral compounds range](/shop/oral-compounds).\n\n**Typical dosage:** 40–80mg/day for men, 10–20mg/day for women\n**Cycle length:** 6–8 weeks\n\n### Winstrol (Stanozolol)\n\nWinstrol produces a notably dry, vascular physique with significant strength gains. It is available in both oral and injectable forms and is popular for pre-competition cutting phases among UK athletes. Browse [Winstrol products in our oral compounds section](/shop/oral-compounds).\n\n**Typical dosage:** 25–50mg/day\n**Cycle length:** 6–8 weeks maximum (oral)\n\n### Clenbuterol\n\nDespite not being a steroid, Clenbuterol is widely used in the UK for fat loss due to its potent thermogenic and beta-2 agonist properties. It works best in a pyramid dosing format and is available in our [fat burners range](/shop/fat-burners).\n\n**Typical dosage:** 20–120mcg/day (pyramid protocol)\n\n### Trenbolone Acetate\n\nTren Ace is the most powerful cutting compound available in the UK. Its ability to promote extreme fat loss while preserving — and even building — muscle mass simultaneously is unmatched. However, it carries a significant side effect profile and is only recommended for experienced users. View our [injectable solutions range](/shop/injectable-solutions).\n\n## Building a Cutting Stack\n\nThe most effective approach for lean, hard results combines multiple compounds:\n\n- **Mild cut:** Anavar + Clenbuterol\n- **Intermediate cut:** Testosterone Propionate + Winstrol + Clenbuterol\n- **Advanced cut:** Testosterone Propionate + Trenbolone Acetate + Winstrol\n\nBrowse our complete range of [pre-made stacks](/shop/pre-made-stacks) for ready-to-use cutting combinations.\n\n## Post-Cycle Therapy\n\nAll cutting steroids that cause hormonal suppression require PCT. View our [full PCT & Support range](/shop/pct-support) to plan your recovery protocol.',
    cover_image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    category: 'Training Guides',
    tags: ['best steroids for cutting uk', 'anavar uk', 'winstrol uk', 'clenbuterol uk', 'cutting cycle', 'buy steroids uk'],
    published: true,
    published_at: '2026-05-16T00:00:00Z',
    created_at: '2026-05-16T00:00:00Z',
  },
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
  { label: 'Manufacturers', href: '/shop/manufacturers', children: [{ label: 'Apex Labs', href: '/shop/manufacturers/apex-labs' }, { label: 'Precision Pharma', href: '/shop/manufacturers/precision-pharma' }, { label: 'Synergy Bio', href: '/shop/manufacturers/synergy-bio' }, { label: 'Elite Research', href: '/shop/manufacturers/elite-research' }, { label: 'Nova Compounds', href: '/shop/manufacturers/nova-compounds' },], },
  { label: 'Oral Compounds', href: '/shop/oral-compounds', children: [{ label: 'Strength Tablets', href: '/shop/oral-compounds/strength-tablets' }, { label: 'Lean Mass Oral', href: '/shop/oral-compounds/lean-mass-oral' }, { label: 'PCT Tablets', href: '/shop/oral-compounds/pct-tablets' }, { label: 'All Oral Compounds', href: '/shop/oral-compounds' },], },
  { label: 'Injectable Solutions', href: '/shop/injectable-solutions', children: [{ label: 'Testosterone Enanthate', href: '/shop/injectable-solutions/test-enanthate' }, { label: 'Testosterone Cypionate', href: '/shop/injectable-solutions/test-cypionate' }, { label: 'Tren Series', href: '/shop/injectable-solutions/tren-series' }, { label: 'Deca & NPP', href: '/shop/injectable-solutions/deca-npp' }, { label: 'All Injectables', href: '/shop/injectable-solutions' },], },
  { label: 'Fat Burners', href: '/shop/fat-burners', children: [{ label: 'Thermogenics', href: '/shop/fat-burners/thermogenics' }, { label: 'Metabolic Support', href: '/shop/fat-burners/metabolic-support' }, { label: 'GLP-1 Peptides', href: '/shop/fat-burners/glp1-peptides' }, { label: 'All Fat Burners', href: '/shop/fat-burners' },], },
  { label: 'SARMs', href: '/shop/sarms', children: [{ label: 'Bulking SARMs', href: '/shop/sarms/bulking-sarms' }, { label: 'Cutting SARMs', href: '/shop/sarms/cutting-sarms' }, { label: 'Recomp SARMs', href: '/shop/sarms/recomp-sarms' }, { label: 'SARMs Stacks', href: '/shop/sarms/sarms-stacks' }, { label: 'All SARMs', href: '/shop/sarms' },], },
  { label: 'More', href: '#', children: [{ label: 'PCT & Support', href: '/shop/pct-support' }, { label: 'HGH & Peptides', href: '/shop/hgh-peptides' }, { label: 'Pre-Made Stacks', href: '/shop/pre-made-stacks' }, { label: 'Sexual Wellness', href: '/shop/sexual-wellness' }, { label: 'Best for Bulking', href: '/shop?goal=bulking' }, { label: 'Best for Cutting', href: '/shop?goal=cutting' },], },
  { label: 'Resources', href: '#', children: [{ label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Delivery Info', href: '/shipping' }, { label: 'Payment Info', href: '/payments' }, { label: 'Contact Us', href: '/contact' },], },
]

export const promoMessages = [
  'Pay with Revolut: Receive FREE product + 5% discount — Code: REVO10',
  'Free Next-Day Delivery on orders £149+ — Code: DELIVERY5',
  'All products independently lab tested for purity and accuracy',
  'Discreet plain packaging — no external branding',
  '1,000+ products in stock — Same day dispatch before 2PM',
]

export const products: Product[] = [
  {
    "id": "prod-1",
    "name": "Kamagra Effervescent 100mg Tablets 1 500x500 1 300x300",
    "slug": "kamagra-effervescent-100mg-tablets-1-500x500-1-300x300-1",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25,
    "compare_at_price": null,
    "sku": "KAMAGRA--1",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": true,
    "is_on_sale": false,
    "category_id": "cat-8",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/03/kamagra-effervescent-100mg-tablets-1-500x500-1-300x300.webp",
    "images": [
      {
        "id": "img-1",
        "product_id": "prod-1",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/03/kamagra-effervescent-100mg-tablets-1-500x500-1-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 30,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-2",
    "name": "Super Kamagra 300x300",
    "slug": "super-kamagra-300x300-2",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.5,
    "compare_at_price": 42.06,
    "sku": "SUPER-KA-2",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": true,
    "is_on_sale": false,
    "category_id": "cat-8",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2017/11/Super-Kamagra-300x300.webp",
    "images": [
      {
        "id": "img-2",
        "product_id": "prod-2",
        "url": "https://steroids-uk.com/wp-content/uploads/2017/11/Super-Kamagra-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 106,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-3",
    "name": "Cialis 300x300",
    "slug": "cialis-300x300-3",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.99,
    "compare_at_price": null,
    "sku": "CIALIS-3-3",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": true,
    "is_on_sale": false,
    "category_id": "cat-8",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/cialis-300x300.webp",
    "images": [
      {
        "id": "img-3",
        "product_id": "prod-3",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/cialis-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 37,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-4",
    "name": "Prilimed 30 Blister 300x300",
    "slug": "prilimed-30_blister-300x300-4",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26,
    "compare_at_price": null,
    "sku": "PRILIMED-4",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": true,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/11/prilimed-30_blister-300x300.webp",
    "images": [
      {
        "id": "img-4",
        "product_id": "prod-4",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/11/prilimed-30_blister-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 22,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-5",
    "name": "B Lgd 4033 Ligandrol Pharmaqo 300x300",
    "slug": "b-lgd-4033-ligandrol-pharmaqo-300x300-5",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.5,
    "compare_at_price": null,
    "sku": "B-LGD-40-5",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": true,
    "is_on_sale": true,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2023/01/b-lgd-4033-ligandrol-pharmaqo-300x300.webp",
    "images": [
      {
        "id": "img-5",
        "product_id": "prod-5",
        "url": "https://steroids-uk.com/wp-content/uploads/2023/01/b-lgd-4033-ligandrol-pharmaqo-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 78,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-6",
    "name": "Imusclesarmsuk Ligandrollgd4033 1024x1024@2x 1 300x300",
    "slug": "imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300-6",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.99,
    "compare_at_price": null,
    "sku": "IMUSCLES-6",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": true,
    "is_on_sale": false,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300.webp",
    "images": [
      {
        "id": "img-6",
        "product_id": "prod-6",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 54,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-7",
    "name": "Proscalpin 1 Agm22mL 150x150",
    "slug": "proscalpin-1-agm22ml-150x150-7",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27,
    "compare_at_price": null,
    "sku": "PROSCALP-7",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": true,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/05/Proscalpin-1-agm22mL-150x150.webp",
    "images": [
      {
        "id": "img-7",
        "product_id": "prod-7",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/05/Proscalpin-1-agm22mL-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 75,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-8",
    "name": "Finax 1mg Tablet 30s 35081 0 1 300x300",
    "slug": "finax_1mg_tablet_30s_35081_0_1-300x300-8",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.5,
    "compare_at_price": 41.95,
    "sku": "FINAX_1M-8",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": true,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/02/finax_1mg_tablet_30s_35081_0_1-300x300.webp",
    "images": [
      {
        "id": "img-8",
        "product_id": "prod-8",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/02/finax_1mg_tablet_30s_35081_0_1-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 105,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-9",
    "name": "Testosterone Gel 500x500 1",
    "slug": "testosterone-gel-500x500-1-9",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.99,
    "compare_at_price": null,
    "sku": "TESTOSTE-9",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/09/testosterone-gel-500x500-1.webp",
    "images": [
      {
        "id": "img-9",
        "product_id": "prod-9",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/09/testosterone-gel-500x500-1.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 72,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-10",
    "name": "Anastrazol Neola Front",
    "slug": "anastrazol-neola-front-10",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28,
    "compare_at_price": null,
    "sku": "ANASTRAZ-10",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2021/12/anastrazol-neola-front.webp",
    "images": [
      {
        "id": "img-10",
        "product_id": "prod-10",
        "url": "https://steroids-uk.com/wp-content/uploads/2021/12/anastrazol-neola-front.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 96,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-11",
    "name": "Liv 52 Himalaya 700x700",
    "slug": "liv-52-himalaya-700x700-11",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.5,
    "compare_at_price": null,
    "sku": "LIV-52-H-11",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/10/liv-52-himalaya-700x700.webp",
    "images": [
      {
        "id": "img-11",
        "product_id": "prod-11",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/10/liv-52-himalaya-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 33,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-12",
    "name": "Terpafen Clomifenec Citrate 50 Mg 500x500 1",
    "slug": "terpafen-clomifenec-citrate-50-mg-500x500-1-12",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.99,
    "compare_at_price": null,
    "sku": "TERPAFEN-12",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2015/11/terpafen-clomifenec-citrate-50-mg-500x500-1.webp",
    "images": [
      {
        "id": "img-12",
        "product_id": "prod-12",
        "url": "https://steroids-uk.com/wp-content/uploads/2015/11/terpafen-clomifenec-citrate-50-mg-500x500-1.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 43,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-13",
    "name": "Imusclesarmsuk Ibutamorenmk677 1024x1024@2x 700x700",
    "slug": "imusclesarmsuk-ibutamorenmk677_1024x1024@2x-700x700-13",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29,
    "compare_at_price": null,
    "sku": "IMUSCLES-13",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ibutamorenmk677_1024x1024@2x-700x700.webp",
    "images": [
      {
        "id": "img-13",
        "product_id": "prod-13",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ibutamorenmk677_1024x1024@2x-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 28,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-14",
    "name": "Imusclesarmsuk Cardarinegw501516 1024x1024@2x 700x700",
    "slug": "imusclesarmsuk-cardarinegw501516_1024x1024@2x-700x700-14",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.5,
    "compare_at_price": null,
    "sku": "IMUSCLES-14",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-cardarinegw501516_1024x1024@2x-700x700.webp",
    "images": [
      {
        "id": "img-14",
        "product_id": "prod-14",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-cardarinegw501516_1024x1024@2x-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 100,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-15",
    "name": "S 23 1024x1024@2x 700x700",
    "slug": "s-23_1024x1024@2x-700x700-15",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.99,
    "compare_at_price": 37.06,
    "sku": "S-23_102-15",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/S-23_1024x1024@2x-700x700.webp",
    "images": [
      {
        "id": "img-15",
        "product_id": "prod-15",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/S-23_1024x1024@2x-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 102,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-16",
    "name": "Oxy Caps V2 700x700",
    "slug": "oxy-caps-v2-700x700-16",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 30,
    "compare_at_price": null,
    "sku": "OXY-CAPS-16",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/oxy-caps-V2-700x700.webp",
    "images": [
      {
        "id": "img-16",
        "product_id": "prod-16",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/oxy-caps-V2-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 69,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-17",
    "name": "Anapolon 700x700",
    "slug": "anapolon-700x700-17",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25,
    "compare_at_price": 35.52,
    "sku": "ANAPOLON-17",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/anapolon-700x700.webp",
    "images": [
      {
        "id": "img-17",
        "product_id": "prod-17",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/anapolon-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 94,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-18",
    "name": "Winstrol Lite Beligas 1 700x700",
    "slug": "winstrol-lite-beligas-1-700x700-18",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.5,
    "compare_at_price": null,
    "sku": "WINSTROL-18",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/02/Winstrol-Lite-Beligas-1-700x700.webp",
    "images": [
      {
        "id": "img-18",
        "product_id": "prod-18",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/02/Winstrol-Lite-Beligas-1-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 88,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-19",
    "name": "Winstrol 700x700",
    "slug": "winstrol-700x700-19",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.99,
    "compare_at_price": null,
    "sku": "WINSTROL-19",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-700x700.webp",
    "images": [
      {
        "id": "img-19",
        "product_id": "prod-19",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 76,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-20",
    "name": "Winstrol Caps V2 700x700",
    "slug": "winstrol-caps-v2-700x700-20",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26,
    "compare_at_price": 44.68,
    "sku": "WINSTROL-20",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-caps-V2-700x700.webp",
    "images": [
      {
        "id": "img-20",
        "product_id": "prod-20",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-caps-V2-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 73,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-21",
    "name": "PROVIRON3 700x700",
    "slug": "proviron3-700x700-21",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.5,
    "compare_at_price": 36.11,
    "sku": "PROVIRON-21",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2015/11/PROVIRON3-700x700.webp",
    "images": [
      {
        "id": "img-21",
        "product_id": "prod-21",
        "url": "https://steroids-uk.com/wp-content/uploads/2015/11/PROVIRON3-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 98,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-22",
    "name": "Post Cycle Therapy Pct 700x700",
    "slug": "post-cycle-therapy-pct-700x700-22",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.99,
    "compare_at_price": null,
    "sku": "POST-CYC-22",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/05/post-cycle-therapy-pct-700x700.webp",
    "images": [
      {
        "id": "img-22",
        "product_id": "prod-22",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/05/post-cycle-therapy-pct-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 31,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-23",
    "name": "Zymoplex 500x500 500x500 500x500 1",
    "slug": "zymoplex-500x500-500x500-500x500-1-23",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27,
    "compare_at_price": null,
    "sku": "ZYMOPLEX-23",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/zymoplex-500x500-500x500-500x500-1.webp",
    "images": [
      {
        "id": "img-23",
        "product_id": "prod-23",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/zymoplex-500x500-500x500-500x500-1.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 35,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-24",
    "name": "Nolvadex D AStra 700x700",
    "slug": "nolvadex-d-astra-700x700-24",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.5,
    "compare_at_price": null,
    "sku": "NOLVADEX-24",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/02/Nolvadex-D-AStra-700x700.webp",
    "images": [
      {
        "id": "img-24",
        "product_id": "prod-24",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/02/Nolvadex-D-AStra-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 51,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-25",
    "name": "Tamoxifen Uk",
    "slug": "tamoxifen-uk-25",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.99,
    "compare_at_price": null,
    "sku": "TAMOXIFE-25",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/05/tamoxifen-uk.webp",
    "images": [
      {
        "id": "img-25",
        "product_id": "prod-25",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/05/tamoxifen-uk.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 23,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-26",
    "name": "Pro Turinabol 10 Front 1 150x150",
    "slug": "pro-turinabol-10_front-1-150x150-26",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28,
    "compare_at_price": null,
    "sku": "PRO-TURI-26",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/05/Pro-Turinabol-10_front-1-150x150.webp",
    "images": [
      {
        "id": "img-26",
        "product_id": "prod-26",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/05/Pro-Turinabol-10_front-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 53,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-27",
    "name": "Pharmaqo Labs Turinabol 150x150",
    "slug": "pharmaqo-labs-turinabol-150x150-27",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.5,
    "compare_at_price": null,
    "sku": "PHARMAQO-27",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2023/12/pharmaqo-labs-turinabol-150x150.webp",
    "images": [
      {
        "id": "img-27",
        "product_id": "prod-27",
        "url": "https://steroids-uk.com/wp-content/uploads/2023/12/pharmaqo-labs-turinabol-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 19,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-28",
    "name": "Pro Dianabol 10 Front 150x150",
    "slug": "pro-dianabol-10-front-150x150-28",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.99,
    "compare_at_price": null,
    "sku": "PRO-DIAN-28",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/03/pro-dianabol-10-front-150x150.webp",
    "images": [
      {
        "id": "img-28",
        "product_id": "prod-28",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/03/pro-dianabol-10-front-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 17,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-29",
    "name": "Test C 5 2 150x150",
    "slug": "test-c-5-2-150x150-29",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29,
    "compare_at_price": 41.25,
    "sku": "TEST-C-5-29",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/07/Test-C-5-2-150x150.webp",
    "images": [
      {
        "id": "img-29",
        "product_id": "prod-29",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/07/Test-C-5-2-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 106,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-30",
    "name": "PROPER CYP 200 Scaled 1 150x150",
    "slug": "proper-cyp-200-scaled-1-150x150-30",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.5,
    "compare_at_price": 43.05,
    "sku": "PROPER-C-30",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-CYP-200-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-30",
        "product_id": "prod-30",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-CYP-200-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 109,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-31",
    "name": "Cypo Testosterone 200mg 150x150",
    "slug": "cypo-testosterone-200mg-150x150-31",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.99,
    "compare_at_price": null,
    "sku": "CYPO-TES-31",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/02/Cypo-Testosterone-200mg-150x150.webp",
    "images": [
      {
        "id": "img-31",
        "product_id": "prod-31",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/02/Cypo-Testosterone-200mg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 33,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-32",
    "name": "TRT Formula 510x510.Jpg 150x150",
    "slug": "trt-formula-510x510.jpg-150x150-32",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 30,
    "compare_at_price": 38.37,
    "sku": "TRT-FORM-32",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/05/TRT-Formula-510x510.jpg-150x150.webp",
    "images": [
      {
        "id": "img-32",
        "product_id": "prod-32",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/05/TRT-Formula-510x510.jpg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 97,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-33",
    "name": "PROPER ENAN 300 Scaled 1 150x150",
    "slug": "proper-enan-300-scaled-1-150x150-33",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25,
    "compare_at_price": 39.36,
    "sku": "PROPER-E-33",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-ENAN-300-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-33",
        "product_id": "prod-33",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-ENAN-300-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 58,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-34",
    "name": "Test E 5 1 150x150",
    "slug": "test-e-5-1-150x150-34",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.5,
    "compare_at_price": null,
    "sku": "TEST-E-5-34",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/10/Test-E-5-1-150x150.webp",
    "images": [
      {
        "id": "img-34",
        "product_id": "prod-34",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/10/Test-E-5-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 108,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-35",
    "name": "Tren E 5 150x150",
    "slug": "tren-e-5-150x150-35",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.99,
    "compare_at_price": 37.84,
    "sku": "TREN-E-5-35",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/07/Tren-E-5-150x150.webp",
    "images": [
      {
        "id": "img-35",
        "product_id": "prod-35",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/07/Tren-E-5-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 84,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-36",
    "name": "PROPER TREN A 100 Scaled 1 150x150",
    "slug": "proper-tren-a-100-scaled-1-150x150-36",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26,
    "compare_at_price": 36.93,
    "sku": "PROPER-T-36",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TREN-A-100-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-36",
        "product_id": "prod-36",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TREN-A-100-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 18,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-37",
    "name": "Steroids Ukcom Thex 150x150",
    "slug": "steroids-ukcom-thex-150x150-37",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.5,
    "compare_at_price": null,
    "sku": "STEROIDS-37",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-thex-150x150.webp",
    "images": [
      {
        "id": "img-37",
        "product_id": "prod-37",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-thex-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 13,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-38",
    "name": "Steroids Ukcom Tritren150 150x150",
    "slug": "steroids-ukcom-tritren150-150x150-38",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.99,
    "compare_at_price": 35.15,
    "sku": "STEROIDS-38",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-tritren150-150x150.webp",
    "images": [
      {
        "id": "img-38",
        "product_id": "prod-38",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-tritren150-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 11,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-39",
    "name": "Tren A 5 150x150",
    "slug": "tren-a-5-150x150-39",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27,
    "compare_at_price": null,
    "sku": "TREN-A-5-39",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/03/Tren-A-5-150x150.webp",
    "images": [
      {
        "id": "img-39",
        "product_id": "prod-39",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/03/Tren-A-5-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 69,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-40",
    "name": "Drostanolone P 100 2 150x150",
    "slug": "drostanolone-p-100-2-150x150-40",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.5,
    "compare_at_price": null,
    "sku": "DROSTANO-40",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-p-100-2-150x150.webp",
    "images": [
      {
        "id": "img-40",
        "product_id": "prod-40",
        "url": "https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-p-100-2-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 71,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-41",
    "name": "PROPER MASTER P 100 Scaled 1 150x150",
    "slug": "proper-master-p-100-scaled-1-150x150-41",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.99,
    "compare_at_price": 37.02,
    "sku": "PROPER-M-41",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-P-100-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-41",
        "product_id": "prod-41",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-P-100-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 31,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-42",
    "name": "Dros P 5 150x150",
    "slug": "dros-p-5-150x150-42",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28,
    "compare_at_price": null,
    "sku": "DROS-P-5-42",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/03/Dros-P-5-150x150.webp",
    "images": [
      {
        "id": "img-42",
        "product_id": "prod-42",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/03/Dros-P-5-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 40,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-43",
    "name": "Drostanolone E 1 150x150",
    "slug": "drostanolone-e-1-150x150-43",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.5,
    "compare_at_price": null,
    "sku": "DROSTANO-43",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-e-1-150x150.webp",
    "images": [
      {
        "id": "img-43",
        "product_id": "prod-43",
        "url": "https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-e-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 12,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-44",
    "name": "Dros E 5 150x150",
    "slug": "dros-e-5-150x150-44",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.99,
    "compare_at_price": null,
    "sku": "DROS-E-5-44",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/07/Dros-E-5-150x150.webp",
    "images": [
      {
        "id": "img-44",
        "product_id": "prod-44",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/07/Dros-E-5-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 22,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-45",
    "name": "Steroids Ukcom Drosta Enan200 150x150",
    "slug": "steroids-ukcom-drosta-enan200-150x150-45",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29,
    "compare_at_price": null,
    "sku": "STEROIDS-45",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-drosta-enan200-150x150.webp",
    "images": [
      {
        "id": "img-45",
        "product_id": "prod-45",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-drosta-enan200-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 82,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-46",
    "name": "PROPER MASTER E 200 Scaled 1 150x150",
    "slug": "proper-master-e-200-scaled-1-150x150-46",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.5,
    "compare_at_price": null,
    "sku": "PROPER-M-46",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-E-200-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-46",
        "product_id": "prod-46",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-E-200-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 22,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-47",
    "name": "Quant Equipoise 300mg 150x150",
    "slug": "quant-equipoise-300mg-150x150-47",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.99,
    "compare_at_price": 36.59,
    "sku": "QUANT-EQ-47",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/11/Quant-Equipoise-300mg-150x150.webp",
    "images": [
      {
        "id": "img-47",
        "product_id": "prod-47",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/11/Quant-Equipoise-300mg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 92,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-48",
    "name": "NPP Beligas100mg 150x150",
    "slug": "npp-beligas100mg-150x150-48",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 30,
    "compare_at_price": null,
    "sku": "NPP-BELI-48",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/02/NPP-beligas100mg-150x150.webp",
    "images": [
      {
        "id": "img-48",
        "product_id": "prod-48",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/02/NPP-beligas100mg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 20,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-49",
    "name": "Steroids Ukcom Npp100 150x150",
    "slug": "steroids-ukcom-npp100-150x150-49",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25,
    "compare_at_price": null,
    "sku": "STEROIDS-49",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-npp100-150x150.webp",
    "images": [
      {
        "id": "img-49",
        "product_id": "prod-49",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-npp100-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 36,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-50",
    "name": "PROPER TESTMIX5 400 Scaled 1 150x150",
    "slug": "proper-testmix5-400-scaled-1-150x150-50",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.5,
    "compare_at_price": null,
    "sku": "PROPER-T-50",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TESTMIX5-400-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-50",
        "product_id": "prod-50",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TESTMIX5-400-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 95,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-51",
    "name": "Steroids Ukcom Sustanon300 150x150",
    "slug": "steroids-ukcom-sustanon300-150x150-51",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.99,
    "compare_at_price": 39.96,
    "sku": "STEROIDS-51",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-sustanon300-150x150.webp",
    "images": [
      {
        "id": "img-51",
        "product_id": "prod-51",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-sustanon300-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 86,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-52",
    "name": "Testosterone AQ 50 510x510.Jpg 150x150",
    "slug": "testosterone-aq-50-510x510.jpg-150x150-52",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26,
    "compare_at_price": null,
    "sku": "TESTOSTE-52",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/05/Testosterone-AQ-50-510x510.jpg-150x150.webp",
    "images": [
      {
        "id": "img-52",
        "product_id": "prod-52",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/05/Testosterone-AQ-50-510x510.jpg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 89,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-53",
    "name": "26 Thymosin 150x150",
    "slug": "26_thymosin-150x150-53",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.5,
    "compare_at_price": null,
    "sku": "26_THYMO-53",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/11/26_thymosin-150x150.webp",
    "images": [
      {
        "id": "img-53",
        "product_id": "prod-53",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/11/26_thymosin-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 108,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-1-bulk",
    "name": "Kamagra Effervescent 100mg Tablets 1 500x500 1 300x300 (Wholesale Pack)",
    "slug": "kamagra-effervescent-100mg-tablets-1-500x500-1-300x300-1-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.99,
    "compare_at_price": null,
    "sku": "KAMAGRA--1-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-8",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/03/kamagra-effervescent-100mg-tablets-1-500x500-1-300x300.webp",
    "images": [
      {
        "id": "img-1",
        "product_id": "prod-1",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/03/kamagra-effervescent-100mg-tablets-1-500x500-1-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 30,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-2-bulk",
    "name": "Super Kamagra 300x300 (Wholesale Pack)",
    "slug": "super-kamagra-300x300-2-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27,
    "compare_at_price": 35.27,
    "sku": "SUPER-KA-2-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-8",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2017/11/Super-Kamagra-300x300.webp",
    "images": [
      {
        "id": "img-2",
        "product_id": "prod-2",
        "url": "https://steroids-uk.com/wp-content/uploads/2017/11/Super-Kamagra-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 106,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-3-bulk",
    "name": "Cialis 300x300 (Wholesale Pack)",
    "slug": "cialis-300x300-3-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.5,
    "compare_at_price": null,
    "sku": "CIALIS-3-3-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-8",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/cialis-300x300.webp",
    "images": [
      {
        "id": "img-3",
        "product_id": "prod-3",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/cialis-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 37,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-4-bulk",
    "name": "Prilimed 30 Blister 300x300 (Wholesale Pack)",
    "slug": "prilimed-30_blister-300x300-4-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.99,
    "compare_at_price": null,
    "sku": "PRILIMED-4-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/11/prilimed-30_blister-300x300.webp",
    "images": [
      {
        "id": "img-4",
        "product_id": "prod-4",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/11/prilimed-30_blister-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 22,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-5-bulk",
    "name": "B Lgd 4033 Ligandrol Pharmaqo 300x300 (Wholesale Pack)",
    "slug": "b-lgd-4033-ligandrol-pharmaqo-300x300-5-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28,
    "compare_at_price": null,
    "sku": "B-LGD-40-5-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2023/01/b-lgd-4033-ligandrol-pharmaqo-300x300.webp",
    "images": [
      {
        "id": "img-5",
        "product_id": "prod-5",
        "url": "https://steroids-uk.com/wp-content/uploads/2023/01/b-lgd-4033-ligandrol-pharmaqo-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 78,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-6-bulk",
    "name": "Imusclesarmsuk Ligandrollgd4033 1024x1024@2x 1 300x300 (Wholesale Pack)",
    "slug": "imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300-6-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.5,
    "compare_at_price": null,
    "sku": "IMUSCLES-6-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300.webp",
    "images": [
      {
        "id": "img-6",
        "product_id": "prod-6",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ligandrollgd4033_1024x1024@2x-1-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 54,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-7-bulk",
    "name": "Proscalpin 1 Agm22mL 150x150 (Wholesale Pack)",
    "slug": "proscalpin-1-agm22ml-150x150-7-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.99,
    "compare_at_price": null,
    "sku": "PROSCALP-7-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/05/Proscalpin-1-agm22mL-150x150.webp",
    "images": [
      {
        "id": "img-7",
        "product_id": "prod-7",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/05/Proscalpin-1-agm22mL-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 75,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-8-bulk",
    "name": "Finax 1mg Tablet 30s 35081 0 1 300x300 (Wholesale Pack)",
    "slug": "finax_1mg_tablet_30s_35081_0_1-300x300-8-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29,
    "compare_at_price": 38.54,
    "sku": "FINAX_1M-8-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/02/finax_1mg_tablet_30s_35081_0_1-300x300.webp",
    "images": [
      {
        "id": "img-8",
        "product_id": "prod-8",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/02/finax_1mg_tablet_30s_35081_0_1-300x300.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 105,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-9-bulk",
    "name": "Testosterone Gel 500x500 1 (Wholesale Pack)",
    "slug": "testosterone-gel-500x500-1-9-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.5,
    "compare_at_price": null,
    "sku": "TESTOSTE-9-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/09/testosterone-gel-500x500-1.webp",
    "images": [
      {
        "id": "img-9",
        "product_id": "prod-9",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/09/testosterone-gel-500x500-1.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 72,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-10-bulk",
    "name": "Anastrazol Neola Front (Wholesale Pack)",
    "slug": "anastrazol-neola-front-10-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.99,
    "compare_at_price": null,
    "sku": "ANASTRAZ-10-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2021/12/anastrazol-neola-front.webp",
    "images": [
      {
        "id": "img-10",
        "product_id": "prod-10",
        "url": "https://steroids-uk.com/wp-content/uploads/2021/12/anastrazol-neola-front.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 96,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-11-bulk",
    "name": "Liv 52 Himalaya 700x700 (Wholesale Pack)",
    "slug": "liv-52-himalaya-700x700-11-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 30,
    "compare_at_price": null,
    "sku": "LIV-52-H-11-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/10/liv-52-himalaya-700x700.webp",
    "images": [
      {
        "id": "img-11",
        "product_id": "prod-11",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/10/liv-52-himalaya-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 33,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-12-bulk",
    "name": "Terpafen Clomifenec Citrate 50 Mg 500x500 1 (Wholesale Pack)",
    "slug": "terpafen-clomifenec-citrate-50-mg-500x500-1-12-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25,
    "compare_at_price": null,
    "sku": "TERPAFEN-12-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2015/11/terpafen-clomifenec-citrate-50-mg-500x500-1.webp",
    "images": [
      {
        "id": "img-12",
        "product_id": "prod-12",
        "url": "https://steroids-uk.com/wp-content/uploads/2015/11/terpafen-clomifenec-citrate-50-mg-500x500-1.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 43,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-13-bulk",
    "name": "Imusclesarmsuk Ibutamorenmk677 1024x1024@2x 700x700 (Wholesale Pack)",
    "slug": "imusclesarmsuk-ibutamorenmk677_1024x1024@2x-700x700-13-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.5,
    "compare_at_price": null,
    "sku": "IMUSCLES-13-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ibutamorenmk677_1024x1024@2x-700x700.webp",
    "images": [
      {
        "id": "img-13",
        "product_id": "prod-13",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-ibutamorenmk677_1024x1024@2x-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 28,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-14-bulk",
    "name": "Imusclesarmsuk Cardarinegw501516 1024x1024@2x 700x700 (Wholesale Pack)",
    "slug": "imusclesarmsuk-cardarinegw501516_1024x1024@2x-700x700-14-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.99,
    "compare_at_price": null,
    "sku": "IMUSCLES-14-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-cardarinegw501516_1024x1024@2x-700x700.webp",
    "images": [
      {
        "id": "img-14",
        "product_id": "prod-14",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/imusclesarmsuk-cardarinegw501516_1024x1024@2x-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 100,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-15-bulk",
    "name": "S 23 1024x1024@2x 700x700 (Wholesale Pack)",
    "slug": "s-23_1024x1024@2x-700x700-15-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26,
    "compare_at_price": 38.37,
    "sku": "S-23_102-15-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-4",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/S-23_1024x1024@2x-700x700.webp",
    "images": [
      {
        "id": "img-15",
        "product_id": "prod-15",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/S-23_1024x1024@2x-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 102,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-16-bulk",
    "name": "Oxy Caps V2 700x700 (Wholesale Pack)",
    "slug": "oxy-caps-v2-700x700-16-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.5,
    "compare_at_price": null,
    "sku": "OXY-CAPS-16-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/oxy-caps-V2-700x700.webp",
    "images": [
      {
        "id": "img-16",
        "product_id": "prod-16",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/oxy-caps-V2-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 69,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-17-bulk",
    "name": "Anapolon 700x700 (Wholesale Pack)",
    "slug": "anapolon-700x700-17-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.99,
    "compare_at_price": 44.53,
    "sku": "ANAPOLON-17-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/anapolon-700x700.webp",
    "images": [
      {
        "id": "img-17",
        "product_id": "prod-17",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/anapolon-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 94,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-18-bulk",
    "name": "Winstrol Lite Beligas 1 700x700 (Wholesale Pack)",
    "slug": "winstrol-lite-beligas-1-700x700-18-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27,
    "compare_at_price": null,
    "sku": "WINSTROL-18-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/02/Winstrol-Lite-Beligas-1-700x700.webp",
    "images": [
      {
        "id": "img-18",
        "product_id": "prod-18",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/02/Winstrol-Lite-Beligas-1-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 88,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-19-bulk",
    "name": "Winstrol 700x700 (Wholesale Pack)",
    "slug": "winstrol-700x700-19-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.5,
    "compare_at_price": null,
    "sku": "WINSTROL-19-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-700x700.webp",
    "images": [
      {
        "id": "img-19",
        "product_id": "prod-19",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 76,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-20-bulk",
    "name": "Winstrol Caps V2 700x700 (Wholesale Pack)",
    "slug": "winstrol-caps-v2-700x700-20-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.99,
    "compare_at_price": 35.37,
    "sku": "WINSTROL-20-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-caps-V2-700x700.webp",
    "images": [
      {
        "id": "img-20",
        "product_id": "prod-20",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/winstrol-caps-V2-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 73,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-21-bulk",
    "name": "PROVIRON3 700x700 (Wholesale Pack)",
    "slug": "proviron3-700x700-21-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28,
    "compare_at_price": 42.30,
    "sku": "PROVIRON-21-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2015/11/PROVIRON3-700x700.webp",
    "images": [
      {
        "id": "img-21",
        "product_id": "prod-21",
        "url": "https://steroids-uk.com/wp-content/uploads/2015/11/PROVIRON3-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 98,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-22-bulk",
    "name": "Post Cycle Therapy Pct 700x700 (Wholesale Pack)",
    "slug": "post-cycle-therapy-pct-700x700-22-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.5,
    "compare_at_price": null,
    "sku": "POST-CYC-22-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/05/post-cycle-therapy-pct-700x700.webp",
    "images": [
      {
        "id": "img-22",
        "product_id": "prod-22",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/05/post-cycle-therapy-pct-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 31,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-23-bulk",
    "name": "Zymoplex 500x500 500x500 500x500 1 (Wholesale Pack)",
    "slug": "zymoplex-500x500-500x500-500x500-1-23-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.99,
    "compare_at_price": null,
    "sku": "ZYMOPLEX-23-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2020/08/zymoplex-500x500-500x500-500x500-1.webp",
    "images": [
      {
        "id": "img-23",
        "product_id": "prod-23",
        "url": "https://steroids-uk.com/wp-content/uploads/2020/08/zymoplex-500x500-500x500-500x500-1.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 35,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-24-bulk",
    "name": "Nolvadex D AStra 700x700 (Wholesale Pack)",
    "slug": "nolvadex-d-astra-700x700-24-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29,
    "compare_at_price": null,
    "sku": "NOLVADEX-24-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/02/Nolvadex-D-AStra-700x700.webp",
    "images": [
      {
        "id": "img-24",
        "product_id": "prod-24",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/02/Nolvadex-D-AStra-700x700.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 51,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-25-bulk",
    "name": "Tamoxifen Uk (Wholesale Pack)",
    "slug": "tamoxifen-uk-25-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.5,
    "compare_at_price": null,
    "sku": "TAMOXIFE-25-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/05/tamoxifen-uk.webp",
    "images": [
      {
        "id": "img-25",
        "product_id": "prod-25",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/05/tamoxifen-uk.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 23,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-26-bulk",
    "name": "Pro Turinabol 10 Front 1 150x150 (Wholesale Pack)",
    "slug": "pro-turinabol-10_front-1-150x150-26-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.99,
    "compare_at_price": null,
    "sku": "PRO-TURI-26-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/05/Pro-Turinabol-10_front-1-150x150.webp",
    "images": [
      {
        "id": "img-26",
        "product_id": "prod-26",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/05/Pro-Turinabol-10_front-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 53,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-27-bulk",
    "name": "Pharmaqo Labs Turinabol 150x150 (Wholesale Pack)",
    "slug": "pharmaqo-labs-turinabol-150x150-27-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 30,
    "compare_at_price": null,
    "sku": "PHARMAQO-27-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2023/12/pharmaqo-labs-turinabol-150x150.webp",
    "images": [
      {
        "id": "img-27",
        "product_id": "prod-27",
        "url": "https://steroids-uk.com/wp-content/uploads/2023/12/pharmaqo-labs-turinabol-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 19,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-28-bulk",
    "name": "Pro Dianabol 10 Front 150x150 (Wholesale Pack)",
    "slug": "pro-dianabol-10-front-150x150-28-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25,
    "compare_at_price": null,
    "sku": "PRO-DIAN-28-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/03/pro-dianabol-10-front-150x150.webp",
    "images": [
      {
        "id": "img-28",
        "product_id": "prod-28",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/03/pro-dianabol-10-front-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 17,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-29-bulk",
    "name": "Test C 5 2 150x150 (Wholesale Pack)",
    "slug": "test-c-5-2-150x150-29-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.5,
    "compare_at_price": 36.58,
    "sku": "TEST-C-5-29-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/07/Test-C-5-2-150x150.webp",
    "images": [
      {
        "id": "img-29",
        "product_id": "prod-29",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/07/Test-C-5-2-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 106,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-30-bulk",
    "name": "PROPER CYP 200 Scaled 1 150x150 (Wholesale Pack)",
    "slug": "proper-cyp-200-scaled-1-150x150-30-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.99,
    "compare_at_price": 37.00,
    "sku": "PROPER-C-30-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-CYP-200-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-30",
        "product_id": "prod-30",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-CYP-200-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 109,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-31-bulk",
    "name": "Cypo Testosterone 200mg 150x150 (Wholesale Pack)",
    "slug": "cypo-testosterone-200mg-150x150-31-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26,
    "compare_at_price": null,
    "sku": "CYPO-TES-31-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/02/Cypo-Testosterone-200mg-150x150.webp",
    "images": [
      {
        "id": "img-31",
        "product_id": "prod-31",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/02/Cypo-Testosterone-200mg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 33,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-32-bulk",
    "name": "TRT Formula 510x510.Jpg 150x150 (Wholesale Pack)",
    "slug": "trt-formula-510x510.jpg-150x150-32-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.5,
    "compare_at_price": 42.27,
    "sku": "TRT-FORM-32-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/05/TRT-Formula-510x510.jpg-150x150.webp",
    "images": [
      {
        "id": "img-32",
        "product_id": "prod-32",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/05/TRT-Formula-510x510.jpg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 97,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-33-bulk",
    "name": "PROPER ENAN 300 Scaled 1 150x150 (Wholesale Pack)",
    "slug": "proper-enan-300-scaled-1-150x150-33-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.99,
    "compare_at_price": 43.29,
    "sku": "PROPER-E-33-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-ENAN-300-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-33",
        "product_id": "prod-33",
        "url": "https://steroids-uk.com/wp-content/uploads/2022/03/PROPER-ENAN-300-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 58,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-34-bulk",
    "name": "Test E 5 1 150x150 (Wholesale Pack)",
    "slug": "test-e-5-1-150x150-34-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27,
    "compare_at_price": null,
    "sku": "TEST-E-5-34-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/10/Test-E-5-1-150x150.webp",
    "images": [
      {
        "id": "img-34",
        "product_id": "prod-34",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/10/Test-E-5-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 108,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-35-bulk",
    "name": "Tren E 5 150x150 (Wholesale Pack)",
    "slug": "tren-e-5-150x150-35-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.5,
    "compare_at_price": 36.80,
    "sku": "TREN-E-5-35-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/07/Tren-E-5-150x150.webp",
    "images": [
      {
        "id": "img-35",
        "product_id": "prod-35",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/07/Tren-E-5-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 84,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-36-bulk",
    "name": "PROPER TREN A 100 Scaled 1 150x150 (Wholesale Pack)",
    "slug": "proper-tren-a-100-scaled-1-150x150-36-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.99,
    "compare_at_price": 39.90,
    "sku": "PROPER-T-36-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TREN-A-100-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-36",
        "product_id": "prod-36",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TREN-A-100-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 18,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-37-bulk",
    "name": "Steroids Ukcom Thex 150x150 (Wholesale Pack)",
    "slug": "steroids-ukcom-thex-150x150-37-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28,
    "compare_at_price": null,
    "sku": "STEROIDS-37-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-thex-150x150.webp",
    "images": [
      {
        "id": "img-37",
        "product_id": "prod-37",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-thex-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 13,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-38-bulk",
    "name": "Steroids Ukcom Tritren150 150x150 (Wholesale Pack)",
    "slug": "steroids-ukcom-tritren150-150x150-38-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.5,
    "compare_at_price": 44.86,
    "sku": "STEROIDS-38-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-tritren150-150x150.webp",
    "images": [
      {
        "id": "img-38",
        "product_id": "prod-38",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-tritren150-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 11,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-39-bulk",
    "name": "Tren A 5 150x150 (Wholesale Pack)",
    "slug": "tren-a-5-150x150-39-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28.99,
    "compare_at_price": null,
    "sku": "TREN-A-5-39-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/03/Tren-A-5-150x150.webp",
    "images": [
      {
        "id": "img-39",
        "product_id": "prod-39",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/03/Tren-A-5-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 69,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-40-bulk",
    "name": "Drostanolone P 100 2 150x150 (Wholesale Pack)",
    "slug": "drostanolone-p-100-2-150x150-40-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29,
    "compare_at_price": null,
    "sku": "DROSTANO-40-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-p-100-2-150x150.webp",
    "images": [
      {
        "id": "img-40",
        "product_id": "prod-40",
        "url": "https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-p-100-2-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 71,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-41-bulk",
    "name": "PROPER MASTER P 100 Scaled 1 150x150 (Wholesale Pack)",
    "slug": "proper-master-p-100-scaled-1-150x150-41-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.5,
    "compare_at_price": 40.12,
    "sku": "PROPER-M-41-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-P-100-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-41",
        "product_id": "prod-41",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-P-100-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 31,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-42-bulk",
    "name": "Dros P 5 150x150 (Wholesale Pack)",
    "slug": "dros-p-5-150x150-42-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 29.99,
    "compare_at_price": null,
    "sku": "DROS-P-5-42-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/03/Dros-P-5-150x150.webp",
    "images": [
      {
        "id": "img-42",
        "product_id": "prod-42",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/03/Dros-P-5-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 40,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-43-bulk",
    "name": "Drostanolone E 1 150x150 (Wholesale Pack)",
    "slug": "drostanolone-e-1-150x150-43-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 30,
    "compare_at_price": null,
    "sku": "DROSTANO-43-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-e-1-150x150.webp",
    "images": [
      {
        "id": "img-43",
        "product_id": "prod-43",
        "url": "https://steroids-uk.com/wp-content/uploads/2023/12/drostanolone-e-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 12,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-44-bulk",
    "name": "Dros E 5 150x150 (Wholesale Pack)",
    "slug": "dros-e-5-150x150-44-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25,
    "compare_at_price": null,
    "sku": "DROS-E-5-44-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/07/Dros-E-5-150x150.webp",
    "images": [
      {
        "id": "img-44",
        "product_id": "prod-44",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/07/Dros-E-5-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 22,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-45-bulk",
    "name": "Steroids Ukcom Drosta Enan200 150x150 (Wholesale Pack)",
    "slug": "steroids-ukcom-drosta-enan200-150x150-45-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.5,
    "compare_at_price": null,
    "sku": "STEROIDS-45-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-drosta-enan200-150x150.webp",
    "images": [
      {
        "id": "img-45",
        "product_id": "prod-45",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-drosta-enan200-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 82,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-46-bulk",
    "name": "PROPER MASTER E 200 Scaled 1 150x150 (Wholesale Pack)",
    "slug": "proper-master-e-200-scaled-1-150x150-46-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 25.99,
    "compare_at_price": null,
    "sku": "PROPER-M-46-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-E-200-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-46",
        "product_id": "prod-46",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-MASTER-E-200-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 22,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-47-bulk",
    "name": "Quant Equipoise 300mg 150x150 (Wholesale Pack)",
    "slug": "quant-equipoise-300mg-150x150-47-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26,
    "compare_at_price": 38.46,
    "sku": "QUANT-EQ-47-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-3",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/11/Quant-Equipoise-300mg-150x150.webp",
    "images": [
      {
        "id": "img-47",
        "product_id": "prod-47",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/11/Quant-Equipoise-300mg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 92,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-48-bulk",
    "name": "NPP Beligas100mg 150x150 (Wholesale Pack)",
    "slug": "npp-beligas100mg-150x150-48-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.5,
    "compare_at_price": null,
    "sku": "NPP-BELI-48-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/02/NPP-beligas100mg-150x150.webp",
    "images": [
      {
        "id": "img-48",
        "product_id": "prod-48",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/02/NPP-beligas100mg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 20,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-49-bulk",
    "name": "Steroids Ukcom Npp100 150x150 (Wholesale Pack)",
    "slug": "steroids-ukcom-npp100-150x150-49-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 26.99,
    "compare_at_price": null,
    "sku": "STEROIDS-49-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-2-5",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-npp100-150x150.webp",
    "images": [
      {
        "id": "img-49",
        "product_id": "prod-49",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-npp100-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 36,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-50-bulk",
    "name": "PROPER TESTMIX5 400 Scaled 1 150x150 (Wholesale Pack)",
    "slug": "proper-testmix5-400-scaled-1-150x150-50-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27,
    "compare_at_price": null,
    "sku": "PROPER-T-50-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TESTMIX5-400-scaled-1-150x150.webp",
    "images": [
      {
        "id": "img-50",
        "product_id": "prod-50",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/01/PROPER-TESTMIX5-400-scaled-1-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 95,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-51-bulk",
    "name": "Steroids Ukcom Sustanon300 150x150 (Wholesale Pack)",
    "slug": "steroids-ukcom-sustanon300-150x150-51-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.5,
    "compare_at_price": 36.50,
    "sku": "STEROIDS-51-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-sustanon300-150x150.webp",
    "images": [
      {
        "id": "img-51",
        "product_id": "prod-51",
        "url": "https://steroids-uk.com/wp-content/uploads/2026/01/steroids-ukcom-sustanon300-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 86,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-52-bulk",
    "name": "Testosterone AQ 50 510x510.Jpg 150x150 (Wholesale Pack)",
    "slug": "testosterone-aq-50-510x510.jpg-150x150-52-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 27.99,
    "compare_at_price": null,
    "sku": "TESTOSTE-52-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": true,
    "category_id": "cat-2",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2024/05/Testosterone-AQ-50-510x510.jpg-150x150.webp",
    "images": [
      {
        "id": "img-52",
        "product_id": "prod-52",
        "url": "https://steroids-uk.com/wp-content/uploads/2024/05/Testosterone-AQ-50-510x510.jpg-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 89,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  },
  {
    "id": "prod-53-bulk",
    "name": "26 Thymosin 150x150 (Wholesale Pack)",
    "slug": "26_thymosin-150x150-53-bulk",
    "short_description": "Premium performance product. Highest purity guaranteed.",
    "description": "High quality compound for serious athletes. All our products are rigorously tested to ensure purity and accuracy.",
    "price": 28,
    "compare_at_price": null,
    "sku": "26_THYMO-53-B",
    "stock_quantity": 50,
    "in_stock": true,
    "is_featured": false,
    "is_on_sale": false,
    "category_id": "cat-1",
    "primary_image": "https://steroids-uk.com/wp-content/uploads/2025/11/26_thymosin-150x150.webp",
    "images": [
      {
        "id": "img-53",
        "product_id": "prod-53",
        "url": "https://steroids-uk.com/wp-content/uploads/2025/11/26_thymosin-150x150.webp",
        "position": 0,
        "is_primary": true
      }
    ],
    "tags": [
      "premium",
      "tested"
    ],
    "rating": 4.8,
    "review_count": 108,
    "created_at": "2024-02-01T00:00:00Z",
    "updated_at": "2024-02-01T00:00:00Z"
  }
];
