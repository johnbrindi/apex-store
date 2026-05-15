const fs = require('fs');
const newImages = [
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
  'https://steroids-uk.com/wp-content/uploads/2020/08/S-23_1024x1024@2x-700x700.webp'
];
let content = fs.readFileSync('data/mock.ts', 'utf8');

let imgIndex = 0;
// Note: Some products might have multiple images, but the regex targets the primary image and the first image in the array.
// To be safe, we'll just replace the URLs directly.
content = content.replace(/primary_image:\s*'([^']+)'/g, (match, oldUrl) => {
  const newUrl = newImages[imgIndex % newImages.length];
  imgIndex++;
  return `primary_image: '${newUrl}'`;
});

imgIndex = 0;
content = content.replace(/url:\s*'([^']+)'/g, (match, oldUrl) => {
  const newUrl = newImages[imgIndex % newImages.length];
  imgIndex++;
  return `url: '${newUrl}'`;
});

fs.writeFileSync('data/mock.ts', content);
