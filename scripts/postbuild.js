const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const indexFile = path.join(docsDir, 'index.html');
const fallbackFile = path.join(docsDir, '404.html');

if (!fs.existsSync(indexFile)) {
  console.error('build output not found:', indexFile);
  process.exit(1);
}

fs.copyFileSync(indexFile, fallbackFile);
console.log('Copied index.html to 404.html for SPA fallback');
