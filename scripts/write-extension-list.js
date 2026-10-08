// Writes the extension list as static/generated-extension-list.json, so the desktop editor
// can show this gallery's extensions in its own Extensions tab (it can't read src/lib/extensions.js).
import fs from 'node:fs';
import extensions from '../src/lib/extensions.js';

fs.writeFileSync(
    new URL('../static/generated-extension-list.json', import.meta.url),
    JSON.stringify(extensions)
);
console.log(`generated-extension-list.json: ${extensions.length} extensions`);
