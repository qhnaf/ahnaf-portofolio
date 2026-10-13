import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const inputPath = 'public/ahnaf.JPG';
const outputPath = 'public/ahnaf.webp';

try {
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  console.log(`Original: ${metadata.width}x${metadata.height}`);

  await image
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);

  const stats = readFileSync(outputPath);
  console.log(`WebP created: ${outputPath}`);
  console.log(`Size: ${(stats.length / 1024).toFixed(1)} KiB`);
} catch (err) {
  console.error('Error:', err.message);
}
