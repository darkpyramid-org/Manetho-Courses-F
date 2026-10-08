#!/usr/bin/env node
/**
 * Generate SVG cover images for Manetho.
 * Uses no external deps — pure Node built-in APIs.
 */
const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('.');

// Generate a colored SVG rectangle with text
function generateSvg(size, bgColor, fgColor, text) {
  const width = size;
  const height = size;
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${bgColor}"/>
    <text x="${width/2}" y="${height/2}" dominant-baseline="middle" text-anchor="middle" fill="${fgColor}" font-family="Georgia, serif" font-size="${Math.max(1, Math.round(size * 0.3))}" font-weight="bold">
      ${text}
    </text>
  </svg>`;
}

function ensureDir(dirPath) {
  try { fs.mkdirSync(dirPath, { recursive: true }); }
  catch {}
}

// 1. Course covers — 21 courses with category-based colors
const courseCoverSpec = [
  { id: 'foundations', bg: '#D7C19A', text: 'Foundations' },
  { id: 'egyptian-dynasties-explained', bg: '#F4EFE5', text: 'Dynasties' },
  { id: 'the-old-kingdom', bg: '#B08A3C', text: 'Old Kingdom' },
  { id: 'the-middle-kingdom', bg: '#9A5A3A', text: 'Middle Kingdom' },
  { id: 'the-new-kingdom', bg: '#245B67', text: 'New Kingdom' },
  { id: 'hatshepsut-female-kingship', bg: '#F4EFE5', text: 'Hatshepsut' },
  { id: 'amarna-period', bg: '#28231E', text: 'Amarna' },
  { id: 'tutankhamun-and-his-world', bg: '#F4EFE5', text: 'Tutankhamun' },
  { id: 'ramses-ii', bg: '#B08A3C', text: 'Ramesses II' },
  { id: 'egyptian-mythology', bg: '#245B67', text: 'Mythology' },
  { id: 'gods-of-ancient-egypt', bg: '#28231E', text: 'Gods' },
  { id: 'egyptian-religion-afterlife', bg: '#245B67', text: 'Afterlife' },
  { id: 'reading-hieroglyphs', bg: '#F4EFE5', text: 'Hieroglyphs' },
  { id: 'old-kingdom', bg: '#D7C19A', text: 'Old Kingdom' },
  { id: 'middle-kingdom', bg: '#D7C19A', text: 'Middle Kingdom' },
  { id: 'new-kingdom', bg: '#D7C19A', text: 'New Kingdom' },
  { id: 'tombs-and-burial-practices', bg: '#D7C19A', text: 'Tombs' },
  { id: 'archaeology-nile-valley', bg: '#D7C19A', text: 'Archaeology' },
  { id: 'valley-of-the-kings', bg: '#D7C19A', text: 'Valley' },
  { id: 'discovery-tutankhamun-tomb', bg: '#D7C19A', text: 'Discovery' },
  { id: 'daily-life-ancient-egypt', bg: '#D7C19A', text: 'Daily Life' },
  { id: 'egyptian-art-symbolism', bg: '#D7C19A', text: 'Art' },
  { id: 'temples-of-ancient-egypt', bg: '#D7C19A', text: 'Temples' },
];

ensureDir(path.join(baseDir, 'public', 'covers'));

for (const { id, bg, text } of courseCoverSpec) {
  const svg = generateSvg(400, bg, '#171512', text);
  try {
    fs.writeFileSync(path.join(baseDir, 'public', 'covers', `cover-${id}.svg`), svg);
  } catch (e) {
    console.error(`Failed to write cover-${id}.svg`, e);
  }
}

// 2. Topic images
const topicImageSpec = [
  { id: 'ancient-egypt', bg: '#D7C19A', text: 'Ancient Egypt' },
  { id: 'pharaohs', bg: '#F4EFE5', text: 'Pharaohs' },
  { id: 'archaeology', bg: '#B08A3C', text: 'Archaeology' },
  { id: 'mythology', bg: '#245B67', text: 'Mythology' },
  { id: 'hieroglyphs', bg: '#F4EFE5', text: 'Hieroglyphs' },
  { id: 'religion', bg: '#245B67', text: 'Religion' },
  { id: 'art-architecture', bg: '#B08A3C', text: 'Art & Architecture' },
  { id: 'daily-life', bg: '#D7C19A', text: 'Daily Life' },
  { id: 'egyptian-language', bg: '#F4EFE5', text: 'Language' },
  { id: 'discoveries', bg: '#B08A3C', text: 'Discoveries' },
  { id: 'pyramids', bg: '#D7C19A', text: 'Pyramids' },
  { id: 'afterlife', bg: '#245B67', text: 'Afterlife' },
];

ensureDir(path.join(baseDir, 'public', 'topics'));

for (const { id, bg, text } of topicImageSpec) {
  const svg = generateSvg(300, bg, '#171512', text);
  try {
    fs.writeFileSync(path.join(baseDir, 'public', 'topics', `${id}.svg`), svg);
  } catch (e) {
    console.error(`Failed to write topic-${id}.svg`, e);
  }
}

// 3. Hero SVG
const heroSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#171512"/>
  <text x="1200/2" y="630/2" dominant-baseline="middle" text-anchor="middle" fill="#F4EFE5" font-family="Georgia, serif" font-size="64" font-weight="bold">
    Manetho
  </text>
  <text x="1200/2" y="630/2 + 80" dominant-baseline="middle" text-anchor="middle" fill="#D7C19A" font-family="Georgia, serif" font-size="32" font-weight="normal">
    Learn Ancient Egypt
  </text>
</svg>`;
try {
  fs.writeFileSync(path.join(baseDir, 'public', 'hero.svg'), heroSvg);
} catch (e) {
  console.error('Failed to write hero.svg', e);
}

// 4. Favicon SVG (simple M initial)
const faviconSvg = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#F4EFE5"/>
  <text x="32" y="38" dominant-baseline="middle" text-anchor="middle" fill="#171512" font-family="Georgia, serif" font-size="32" font-weight="bold">
    M
  </text>
</svg>`;
try {
  fs.writeFileSync(path.join(baseDir, 'public', 'favicon.svg'), faviconSvg);
} catch (e) {
  console.error('Failed to write favicon.svg', e);
}

// 5. Gallery images
ensureDir(path.join(baseDir, 'public', 'gallery'));

const gallerySpec = [
  { prefix: 'tutankhamun', count: 4 },
  { prefix: 'discovery', count: 4 },
];

for (const { prefix, count } of gallerySpec) {
  for (let i = 1; i <= count; i++) {
    const svg = generateSvg(400, '#B08A3C', '#171512', `${prefix} ${i}`);
    try {
      fs.writeFileSync(path.join(baseDir, 'public', 'gallery', `${prefix}-${i}.svg`), svg);
    } catch (e) {
      console.error(`Failed to write ${prefix}-${i}.svg`, e);
    }
  }
}

console.log('SVG cover generation complete.');