import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, '..', 'docs');
const indexFile = path.join(docsDir, 'index.html');
const fallbackFile = path.join(docsDir, '404.html');

if (!fs.existsSync(indexFile)) {
  console.error('build output not found:', indexFile);
  process.exit(1);
}

fs.copyFileSync(indexFile, fallbackFile);
console.log('Copied index.html to 404.html for SPA fallback');
