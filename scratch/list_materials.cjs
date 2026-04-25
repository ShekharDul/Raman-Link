const fs = require('fs');

const content = fs.readFileSync('../src/data/materials.js', 'utf8');
const matches = [...content.matchAll(/id:\s*'([^']+)'/g)];
const ids = matches.map(m => m[1]);

console.log(`Total materials: ${ids.length}`);
console.log(ids.join(', '));
