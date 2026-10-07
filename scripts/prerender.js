// Bakes the JS-rendered text (KPIs, project summaries, first log page, notes) into
// each language's HTML so crawlers and no-JS readers get the content.
// app.js re-renders the same markup on load, so the page looks identical.
// Run after editing data.js or app.js:  node scripts/prerender.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const src = ["assets/data.js", "assets/app.js"]
  .map((f) => fs.readFileSync(path.join(root, f), "utf8"))
  .join("\n");
const PAGES = { en: "index.html", es: "es/index.html", pt: "pt/index.html" };
// Elements filled with textContent need escaping; the rest are innerHTML.
const TEXT = new Set(["note-hour", "note-week", "log-count", "foot"]);
const esc = (s) =>
  String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

for (const [lang, file] of Object.entries(PAGES)) {
  const els = {};
  const node = () => ({
    innerHTML: "",
    textContent: "",
    value: "",
    hidden: false,
    clientWidth: 0,
    style: {},
    append() {},
    setAttribute() {},
    addEventListener() {},
  });
  const document = {
    documentElement: { lang },
    getElementById: (id) => (els[id] ||= node()),
    createElementNS: node,
  };
  vm.runInNewContext(src, {
    document,
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    addEventListener() {},
    matchMedia: () => ({ addEventListener() {} }),
    MutationObserver: class {
      observe() {}
    },
    setTimeout,
    clearTimeout,
    innerWidth: 1200,
    innerHeight: 800,
  });

  const p = path.join(root, file);
  let html = fs.readFileSync(p, "utf8");
  html = html.replace(
    /<!--pre:([\w-]+)-->[\s\S]*?<!--\/pre:\1-->/g,
    (_, id) => {
      const el = els[id];
      if (!el) throw new Error(`${file}: app.js never touched #${id}`);
      const out = TEXT.has(id) ? esc(el.textContent) : el.innerHTML;
      return `<!--pre:${id}-->${out}<!--/pre:${id}-->`;
    },
  );
  fs.writeFileSync(p, html);
  console.log(`${file}: ${Math.round(html.length / 1024)} KB`);
}
