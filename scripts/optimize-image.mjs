import sharp from 'sharp';
import { statSync } from 'fs';
import { resolve } from 'path';

/**
 * Image optimization script
 * Usage: npm run optimize-image -- <input> <output> [quality]
 * Example: npm run optimize-image -- "path/to/input.png" "public/images/output.webp" 85
 */

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: npm run optimize-image -- <input> <output> [quality]');
  console.error('Example: npm run optimize-image -- "input.png" "public/images/output.webp" 85');
  process.exit(1);
}

const inputPath = resolve(args[0]);
const outputPath = resolve(args[1]);
const quality = parseInt(args[2]) || 85;

console.log('🖼️  Optimizing image...');
console.log(`Input: ${inputPath}`);
console.log(`Output: ${outputPath}`);
console.log(`Quality: ${quality}`);

try {
  // Get input file size
  const inputSize = statSync(inputPath).size;
  console.log(`Original size: ${(inputSize / 1024 / 1024).toFixed(2)}MB`);

  // Optimize based on output extension
  const ext = outputPath.toLowerCase().split('.').pop();
  let sharpInstance = sharp(inputPath);

  if (ext === 'webp') {
    sharpInstance = sharpInstance.webp({ quality, effort: 6 });
  } else if (ext === 'jpg' || ext === 'jpeg') {
    sharpInstance = sharpInstance.jpeg({ quality, mozjpeg: true });
  } else if (ext === 'png') {
    sharpInstance = sharpInstance.png({ quality, compressionLevel: 9 });
  } else {
    // Default to WebP
    sharpInstance = sharpInstance.webp({ quality, effort: 6 });
  }

  await sharpInstance.toFile(outputPath);

  // Get output file size
  const outputSize = statSync(outputPath).size;
  const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

  console.log(`✅ Optimized size: ${(outputSize / 1024).toFixed(2)}KB`);
  console.log(`📉 Size reduction: ${reduction}%`);
  console.log('✨ Done!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
