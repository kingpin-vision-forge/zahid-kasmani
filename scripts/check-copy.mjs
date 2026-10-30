// Scans the prerendered HTML (after `pnpm build`) for banned copy and checks SEO tag lengths.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../.next/server/app', import.meta.url));
const banned = [/—/, /–/, /visionary/i, /passionate/i, /results-driven/i, /dynamic leader/i, /unlocking potential/i, /fast-paced world/i, /\p{Extended_Pictographic}/u];
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk(root);

let failed = false;
const titles = new Map(), descs = new Map();
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  for (const re of banned) if (re.test(text)) { console.error(`BANNED ${re} in ${file}`); failed = true; }
  if (file.includes('_not-found')) continue;
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  const isArabic = file.includes('/ar/') || file.endsWith('/ar.html');
  // Arabic communicates the same idea in fewer characters than English.
  const titleOk = isArabic ? title.length >= 25 && title.length <= 70 : title.length >= 50 && title.length <= 60;
  const descOk = isArabic ? desc.length >= 90 && desc.length <= 180 : desc.length >= 150 && desc.length <= 160;
  const ok = titleOk && descOk && h1s === 1 && html.includes('rel="canonical"');
  if (!ok) { console.error(`SEO ${file}: title ${title.length}, desc ${desc.length}, h1 ${h1s}`); failed = true; }
  if (file.includes('/en')) {
    if (titles.has(title)) { console.error(`DUPLICATE title ${title}`); failed = true; }
    if (descs.has(desc)) { console.error(`DUPLICATE description ${desc}`); failed = true; }
    titles.set(title, file); descs.set(desc, file);
  }
}
console.log(`${files.length} pages checked`);
process.exit(failed ? 1 : 0);
