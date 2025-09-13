import { copyFileSync, existsSync } from "fs";
import { join } from "path";
const out = "dist/public";
const from = join(out, "index.html");
const to = join(out, "404.html");
if (existsSync(from)) {
  copyFileSync(from, to);
  console.log("SPA fallback: copied index.html to 404.html");
} else {
  console.error("index.html not found in dist/public. Did the build run?");
  process.exit(1);
}
