const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Usage: node tools/optimize-images.js
// Converts JPG/JPEG in public/imgs to WebP and generates a thumbnail .thumb.webp

const IMGS_DIR = path.join(__dirname, '..', 'public', 'imgs');

async function processImage(file) {
  const inputPath = path.join(IMGS_DIR, file);
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const base = path.basename(file, ext);
  const webpPath = path.join(IMGS_DIR, `${base}.webp`);
  const thumbPath = path.join(IMGS_DIR, `${base}.thumb.webp`);

  try {
    // Full-size optimized webp (max width 1600)
    await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);

    // Thumbnail (width 600)
    await sharp(inputPath)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(thumbPath);

    console.log(`Optimized ${file} -> ${base}.webp, ${base}.thumb.webp`);
  } catch (err) {
    console.error(`Failed to process ${file}:`, err);
  }
}

async function main() {
  if (!fs.existsSync(IMGS_DIR)) {
    console.error('Images directory not found:', IMGS_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(IMGS_DIR);
  for (const file of files) {
    await processImage(file);
  }
}

main();
