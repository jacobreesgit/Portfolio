import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const portfolioDir = 'public/portfolio';
const files = readdirSync(portfolioDir).filter(f => f.endsWith('.png'));

console.log(`Found ${files.length} PNG files to optimize\n`);

for (const file of files) {
  const inputPath = join(portfolioDir, file);
  const baseName = file.replace('.png', '');

  // Create thumbnail (quality 60) for page display
  const thumbPath = join(portfolioDir, `${baseName}-thumb.webp`);

  // Create high-res (quality 85) for lightbox
  const highResPath = join(portfolioDir, `${baseName}.webp`);

  try {
    const inputSize = statSync(inputPath).size;
    console.log(`📸 ${file} (${(inputSize / 1024 / 1024).toFixed(2)}MB)`);

    // Generate thumbnail
    await sharp(inputPath)
      .webp({ quality: 60, effort: 6 })
      .toFile(thumbPath);

    const thumbSize = statSync(thumbPath).size;
    console.log(`  → thumb: ${(thumbSize / 1024).toFixed(0)}KB (quality 60)`);

    // Generate high-res
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(highResPath);

    const highResSize = statSync(highResPath).size;
    console.log(`  → high-res: ${(highResSize / 1024).toFixed(0)}KB (quality 85)`);
    console.log();
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}\n`);
  }
}

console.log('✨ Done!');
