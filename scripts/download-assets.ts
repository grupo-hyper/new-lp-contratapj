import fs from "node:fs/promises";
import path from "node:path";
import https from "node:https";

const IMAGES = [
  // Logos
  "2025/03/LOGOB.png",
  "2025/03/Logo.png",
  // Brand mentions
  "2025/07/323634_1689418867.png",
  "2025/07/622105211f288975177934bd_GPinho-Normal.png",
  "2025/07/Allied-IT-colorido-1.png",
  "2025/07/Investidores.vc_-1-1.png",
  "2025/07/Logotipo_Solida_Sin_Tagline_RGB_Positivo_Color_Alta-1024x322-1.png",
  "2025/07/logo-proesc-Natalia-Mendonca-1-e1769459604184.png",
  "2025/07/logo2.png",
  // Hero background
  "2025/07/bg-banner_home.png",
  // Feature/section images
  "2025/07/img-home-contract.png",
  "2025/07/img-home-dash1-1024x765.png",
  "2025/07/img-home-dash2-1024x765.png",
  "2025/07/img-home-dash3-1024x765.png",
  "2025/07/img-home-notas-1.png",
  "2025/07/img-cta-final-1.png",
  // UI icons / decorations
  "2025/07/check.png",
  "2025/07/Rectangle-3.png",
  "2025/07/Rectangle-3-1.png",
  "2025/07/Rectangle-3-2.png",
  "2025/07/Rectangle-3-3.png",
  "2025/07/Rectangle-3-4.png",
  "2025/07/Rectangle-3-5.png",
];

const BASE = "https://contratapj.com.br/wp-content/uploads/";
const OUT_DIR = path.join(process.cwd(), "public", "images");

function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, dest).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`${res.statusCode} ${url}`));
        }
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", async () => {
          await fs.writeFile(dest, Buffer.concat(chunks));
          resolve();
        });
      })
      .on("error", reject);
  });
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (const rel of IMAGES) {
    const url = BASE + rel;
    const name = path.basename(rel);
    const dest = path.join(OUT_DIR, name);
    try {
      await download(url, dest);
      console.log("✓", name);
    } catch (err) {
      console.error("✗", name, (err as Error).message);
    }
  }
}

main();
