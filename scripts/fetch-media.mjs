import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imagesDir = path.join(process.cwd(), "public", "images");
fs.mkdirSync(imagesDir, { recursive: true });

const assets = [
  ["https://framerusercontent.com/images/0uSDaL3e7ghh7B28A1SaTeJpljE.jpg", "hero-1.jpg", { width: 1600, quality: 82 }],
  ["https://framerusercontent.com/images/lVp7GCTy8pKtr3a1NWvr89oOx8.jpg", "hero-2.jpg", { width: 1600, quality: 82 }],
  ["https://framerusercontent.com/images/ElZcgMWFId1G7bzxDH72V3K9VsI.jpg", "hero-3.jpg", { width: 1600, quality: 82 }],
  ["https://framerusercontent.com/images/E8drnMWMY9x9cQXnHPdKgRkkKc.jpg", "about-video-poster.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/uqxHx9SvtbZgP4rrfEZdejMVB4.jpg", "about-clinic.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/DLx122khxvKEAZUU6Z1CDmEXLb8.jpg", "service-1.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/sFoHyOlrW8XU34irM7ewH2vM.jpg", "service-2.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/dz9dwoqEWzgRyI4sBS5AVyfg95k.jpg", "service-3.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/VieQQS1OftE7gvxDTT0Zqyv2n0.jpg", "service-4.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/OI9ljAQ1cSn3SFZDGsf4OzFre4.jpg", "gallery-1.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/wqHXFwZUEufVNTxHyS9dB6iepP4.jpg", "gallery-3.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/Opl9flfaTQ2XaZ05HSVol3qJg.jpg", "gallery-4.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/X0n6pDRDWmYL9RtedS5EjqDwa0.jpg", "gallery-6.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/SqEl7zba8M2R2Gctqx7ecQqB7SY.jpg", "team-1.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/dQzHv2zOY0RdwJ9FBviwH4anY.jpg", "team-2.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/YcRUjY7E7u9PDLifSsUlHxA.jpg", "team-3.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg", "avatar-1.jpg", { width: 160, height: 160, cover: true, quality: 80 }],
  ["https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg", "avatar-2.jpg", { width: 160, height: 160, cover: true, quality: 80 }],
  ["https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg", "avatar-3.jpg", { width: 160, height: 160, cover: true, quality: 80 }],
  ["https://framerusercontent.com/images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg", "avatar-4.jpg", { width: 160, height: 160, cover: true, quality: 80 }],
  ["https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg", "avatar-5.jpg", { width: 160, height: 160, cover: true, quality: 80 }],
  ["https://framerusercontent.com/images/Pbr2AkdZwasNKwN6CO03CgTL4BY.jpg", "faq-portrait.jpg", { width: 960, quality: 82 }],
  ["https://framerusercontent.com/images/38Rf81jOiOh9I05GCqzFsQ428.jpg", "newsletter-specialist.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/mphXLZ7GtYcpYQPU9g1KRyYNses.jpg", "blog-1.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/dQiBng8eBLVnoGOb7lnF1FAHQ.jpg", "blog-2.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/3MzOuvd51RpA8Jk7kPYopPNOg.jpg", "blog-4.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/29abp1SLegHIWChoMGDbmJ1k2Mk.jpg", "blog-5.jpg", { width: 1000, quality: 82 }],
  ["https://framerusercontent.com/images/d1WczXfBvcoIUYYihV1f8MIvaA.png", "404-bg.png", { width: 800, png: true }],
];

const avatar5 = path.join(imagesDir, "avatar-5.jpg");
const alreadyOptimized =
  fs.existsSync(avatar5) &&
  fs.statSync(avatar5).size < 30000 &&
  assets.every(([, filename]) => {
    const dest = path.join(imagesDir, filename);
    return fs.existsSync(dest) && fs.statSync(dest).size > 0;
  });

if (alreadyOptimized) {
  console.log("Media assets already optimized.");
  process.exit(0);
}

let processed = 0;
await Promise.all(
  assets.map(async ([url, filename, opts]) => {
    const dest = path.join(imagesDir, filename);
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${filename}: HTTP ${res.status}`);
    }
    const raw = Buffer.from(await res.arrayBuffer());
    let pipeline = sharp(raw).rotate();

    if (opts.cover && opts.height) {
      pipeline = pipeline.resize({
        width: opts.width,
        height: opts.height,
        fit: "cover",
        position: "attention",
      });
    } else {
      pipeline = pipeline.resize({
        width: opts.width,
        withoutEnlargement: true,
      });
    }

    const out = opts.png
      ? await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await pipeline.jpeg({ quality: opts.quality ?? 82, mozjpeg: true }).toBuffer();

    fs.writeFileSync(dest, out);
    processed += 1;
  })
);

console.log(`Media assets fetched & optimized (${processed} files).`);
