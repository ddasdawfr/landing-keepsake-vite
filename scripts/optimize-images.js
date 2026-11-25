import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('raw-images');
const outputDir = path.resolve('src/assets/images');
const widths = [400, 800];

async function optimizeImages() {
  await fs.mkdir(outputDir, { recursive: true });
  const files = await fs.readdir(inputDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const name = path.basename(file, ext);
    const inputPath = path.join(inputDir, file);

    for (const width of widths) {
      const pipeline = sharp(inputPath).resize({ width, withoutEnlargement: true });

      await pipeline
        .clone()
        .avif({ quality: 65 })
        .toFile(path.join(outputDir, `${name}-${width}.avif`));

      await pipeline
        .clone()
        .webp({ quality: 78 })
        .toFile(path.join(outputDir, `${name}-${width}.webp`));
    }

    // Запасний JPEG у максимальній ширині 800px
    await sharp(inputPath)
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true })
      .toFile(path.join(outputDir, `${name}-800.jpg`));

    console.log(`Оптимізовано: ${name}`);
  }
}

optimizeImages().catch((err) => {
  console.error('Помилка оптимізації зображень:', err);
  process.exit(1);
});