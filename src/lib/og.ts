import fs from "fs";
import path from "path";
import sharp from "sharp";
import { chromium } from "playwright";
import { SITE_CONTENT } from "@/lib/constants";

const outDir = "public/projects";
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 736, height: 483 },
  });

  for (const project of SITE_CONTENT.projects) {
    const { hosted_url, name, description } = project;

    const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const webpPath = path.join(outDir, `${safeName}.webp`);

    if (fs.existsSync(webpPath)) {
      console.log(`✅ ${safeName}.webp already exists, skipping...`);
      continue;
    }

    if (!hosted_url || hosted_url.includes("github.com")) {
      console.log(`📄 Generating OG placeholder for ${name}...`);

      const width = 736;
      const height = 483;
      const bgColor = hosted_url?.includes("github.com")
        ? "#24292f"
        : "#4a5568";
      const textColor = "#ffffff";

      const svgText = `
        <svg width="${width}" height="${height}">
          <rect width="100%" height="100%" fill="${bgColor}" rx="20" ry="20"/>
          <text x="50%" y="50%" font-size="48" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif">
            ${name}
          </text>
          <text x="50%" y="65%" font-size="24" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif"></text>
            ${description ?? ""}
          </text>
        </svg>
      `;

      await sharp(Buffer.from(svgText)).webp({ quality: 90 }).toFile(webpPath);

      console.log(`✅ Saved OG placeholder: ${webpPath}`);
      continue;
    }

    console.log(`📸 Capturing ${hosted_url}...`);
    const page = await context.newPage();
    await page.goto(hosted_url, { waitUntil: "networkidle" });
    const screenshotBuffer = await page.screenshot({ fullPage: false });
    await sharp(screenshotBuffer).webp({ quality: 90 }).toFile(webpPath);
    await page.close();

    console.log(`✅ Saved screenshot as WebP: ${webpPath}`);
  }

  await browser.close();
  console.log("🎉 All project images generated as WebP!");
})();
