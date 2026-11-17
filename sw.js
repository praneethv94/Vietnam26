// Keeps the app working offline. Shows the saved copy instantly, then refreshes it in the background.
const CACHE = "vietnam26-mwdrbmyk";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-512.png", "fonts/barlow-condensed-800-vietnamese.woff2","fonts/barlow-condensed-800-latin.woff2","fonts/be-vietnam-pro-400-vietnamese.woff2","fonts/be-vietnam-pro-400-latin.woff2","fonts/be-vietnam-pro-600-vietnamese.woff2","fonts/be-vietnam-pro-600-latin.woff2","fonts/be-vietnam-pro-700-vietnamese.woff2","fonts/be-vietnam-pro-700-latin.woff2","fonts/be-vietnam-pro-800-vietnamese.woff2","fonts/be-vietnam-pro-800-latin.woff2","fonts/ibm-plex-mono-600-vietnamese.woff2","fonts/ibm-plex-mono-600-latin.woff2","fonts/ibm-plex-mono-700-vietnamese.woff2","fonts/ibm-plex-mono-700-latin.woff2","fonts/playfair-display-wght-vietnamese.woff2","fonts/playfair-display-wght-latin.woff2","fonts/anton-400-latin.woff2","fonts/anton-400-latin-ext.woff2","fonts/anton-400-vietnamese.woff2"];
// Bundled photos live in their own cache: file names are content hashes, so they survive app updates and download only once.
const PHOTOS = "vietnam26-photos", TILES = "vietnam26-osm", PHOTO_LIST = ["photos/px5843476.webp","photos/px2494520.webp","photos/px8104131.webp","photos/px6564496.webp","photos/px9295186.webp","photos/px8062135.webp","photos/px8119898.webp","photos/px4141578.webp","photos/px8933320.webp","photos/px7142494.webp","photos/px896162.webp","photos/px3327447.webp","photos/px5264542.webp","photos/px3370930.webp","photos/px6156123.webp","photos/px2863788.webp","photos/px2373727.webp","photos/px1822133.webp","photos/px1234321.webp","photos/px4411988.webp","photos/px2419454.webp","photos/px3989110.webp","photos/px2203445.webp","photos/px7297356.webp","photos/px5258079.webp","photos/px4748099.webp","photos/px5172531.webp","photos/px250156.webp","photos/px1398751.webp","photos/px7692052.webp","photos/px4995438.webp","photos/px5454993.webp","photos/px6945759.webp","photos/px5981551.webp","photos/px1234330.webp","photos/px1234326.webp","photos/px7112885.webp","photos/px3829005.webp","photos/px3908224.webp","photos/px9069634.webp","photos/px6564874.webp","photos/px3039581.webp","photos/px4131606.webp","photos/px7924464.webp","photos/px7022171.webp","photos/px7022165.webp","photos/px5104723.webp","photos/px1270199.webp","photos/px2835840.webp","photos/px5111570.webp","photos/px7447418.webp","photos/px7678450.webp","photos/px5057487.webp","photos/px3371442.webp","photos/px5712899.webp","photos/px5129323.webp","photos/px5240761.webp","photos/px5240759.webp","photos/px7561548.webp","photos/px1524598.webp","photos/px4411975.webp","photos/px4411985.webp","photos/px2350638.webp","photos/px2483677.webp","photos/px4933381.webp","photos/px6696940.webp","photos/px4912504.webp","photos/px1093807.webp","photos/px5833768.webp","photos/px1714202.webp","photos/px5833719.webp","photos/px4954402.webp","photos/px4881049.webp","photos/px10545335.webp","photos/px6520902.webp","photos/px8088588.webp","photos/px3039589.webp","photos/px4961969.webp","photos/px4670033.webp","photos/px5925799.webp","photos/px2158396.webp","photos/px6520941.webp","photos/px4792884.webp","photos/px7665761.webp","photos/px3609871.webp","photos/px8612554.webp","photos/px6396875.webp","photos/px8003640.webp","photos/px4176310.webp","photos/px6924909.webp","photos/px4559791.webp","photos/px3559137.webp","photos/px4867697.webp","photos/px4870127.webp","photos/px4417.webp","photos/px4413.webp","photos/px1673909.webp","photos/px10258355.webp","photos/px6674138.webp","photos/px8447100.webp","photos/px7386031.webp","photos/px7057195.webp","photos/px6822807.webp","photos/px3559145.webp","photos/px7154934.webp","photos/px7154931.webp","photos/px1671353.webp","photos/px4824733.webp","photos/px4859079.webp","photos/px1673947.webp","photos/px3344496.webp","photos/px2767443.webp","photos/px2767455.webp","photos/px2767446.webp","photos/px5222569.webp","photos/px5222615.webp","photos/px7084896.webp","photos/px7149935.webp","photos/px3344501.webp","photos/px3344520.webp","photos/px3344500.webp","photos/px4166606.webp","photos/px3798495.webp","photos/px3798462.webp","photos/px7103908.webp","photos/px6762301.webp","photos/px4364342.webp","photos/px8105970.webp","photos/px8105949.webp","photos/px3059558.webp","photos/px7205648.webp","photos/px4856316.webp","photos/px3851735.webp","photos/px6559419.webp","photos/px3875895.webp","photos/px3013638.webp","photos/px5568679.webp","photos/px7860877.webp","photos/px4252014.webp","photos/px2681607.webp","photos/px4722334.webp","photos/px10421756.webp","photos/px4965907.webp","photos/px6729018.webp","photos/px8021415.webp","photos/px6760889.webp","photos/px7575586.webp","photos/px7735672.webp","photos/px6760871.webp","photos/px4965910.webp","photos/px6754244.webp","photos/px8351533.webp","photos/px6947337.webp","photos/px9264738.webp","photos/px4084327.webp","photos/px3060093.webp","photos/px4559785.webp","photos/px7730061.webp","photos/px8471689.webp","photos/px4559795.webp","photos/px599202.webp","photos/px8242672.webp","photos/px519246.webp","photos/px8449952.webp","photos/px167616.webp","photos/px2962214.webp","photos/px2561705.webp","photos/px7530625.webp","photos/px4482349.webp","photos/px4897451.webp","photos/px4986455.webp","photos/px3723049.webp","photos/px8158018.webp","photos/px4282019.webp","photos/px4484180.webp","photos/px1748646.webp","photos/px7080277.webp","photos/px8104133.webp","photos/px6950328.webp","photos/px4926861.webp","photos/px3612031.webp","photos/px4916174.webp","photos/px5226184.webp","photos/px5018310.webp","photos/px2587288.webp","photos/px4487198.webp","photos/px1850039.webp","photos/px7792428.webp","photos/px6876592.webp","photos/px4860929.webp","photos/px2506727.webp","photos/px1641595.webp","photos/px6759684.webp","photos/px5000014.webp","photos/px2098004.webp","photos/usTko1SGy3CTE.webp","photos/usDs9P_c-lwMk.webp","photos/usbW5lwbwys1M.webp","photos/usoLF2wOjnhlg.webp","photos/usOp7Ep5nS75c.webp","photos/usNKcFjU8QvgI.webp","photos/us-e8kbAcdQzc.webp","photos/usZt-0TOx38KU.webp","photos/uspHW4rW9AMy0.webp","photos/usEu5mQPWWCbk.webp","eat/cuon.webp","eat/pho.webp","eat/rieu.webp","eat/xeo.webp"];
async function savePhotos() {
  const c = await caches.open(PHOTOS), have = new Set((await c.keys()).map(r => new URL(r.url).pathname.split("/").pop()));
  const todo = PHOTO_LIST.filter(f => !have.has(f.split("/").pop()));
  const keep = new Set(PHOTO_LIST.map(f => f.split("/").pop()));
  for (const r of await c.keys()) if (!keep.has(new URL(r.url).pathname.split("/").pop())) await c.delete(r);
  let i = 0; const next = async () => { while (i < todo.length) { const f = todo[i++]; try { const r = await fetch(f); if (r.ok) await c.put(f, r); } catch (e) {} } };
  await Promise.all([next(), next(), next(), next()]);
}
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== PHOTOS && k !== TILES).map(k => caches.delete(k)))).then(() => self.clients.claim()).then(() => { savePhotos(); })); });
async function saveTiles(urls) {
  const c = await caches.open(TILES); let i = 0;
  const next = async () => { while (i < urls.length) { const u = urls[i++]; try { if (!(await c.match(u))) { const r = await fetch(u, { mode: "cors" }); if (r.ok) await c.put(u, r); } } catch (e) {} } };
  await Promise.all([next(), next(), next(), next()]);
}
self.addEventListener("message", e => { if (e.data === "save-photos") e.waitUntil(savePhotos()); else if (e.data && e.data.type === "save-tiles") e.waitUntil(saveTiles(e.data.urls || [])); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin && (url.pathname.includes("/home/") || url.pathname.endsWith("/home"))) return; // "Out the door" checklist (Nov 12) is its own page
  if (url.hostname === "tile.openstreetmap.org") {
    e.respondWith(caches.open(TILES).then(async c => (await c.match(req.url)) || fetch(req).then(r => { if (r.ok) c.put(req.url, r.clone()); return r; }).catch(() => new Response("", { status: 504 }))));
    return;
  }
  const same = url.origin === location.origin, font = /(fonts\.(googleapis|gstatic)\.com|upload\.wikimedia\.org|en\.wikipedia\.org|api\.open-meteo\.com)$/.test(url.hostname);
  if (!same && !font) return;
  if (same && url.pathname.includes("/photos/")) {
    e.respondWith(caches.open(PHOTOS).then(async c => (await c.match(req, { ignoreSearch: true })) || fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; })));
    return;
  }
  if (same && url.pathname.endsWith("news.json")) {
    e.respondWith(caches.open(CACHE).then(c => fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => c.match(req))));
    return;
  }
  // The app page itself opens instantly from the saved copy. Updates arrive as a new sw.js (checked each time
  // the app comes to the front), which saves the new page and reloads the app once.
  if (same && req.mode === "navigate") {
    e.respondWith(caches.open(CACHE).then(async c => (await c.match("index.html")) || fetch(req).then(r => { if (r.ok) c.put("index.html", r.clone()); return r; })));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: same });
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || (req.mode === "navigate" ? c.match("index.html") : Response.error());
  }));
});
// Reminders (Nov 9): sent by the scheduled GitHub job, shown even when the app is closed.
self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (er) { d = { body: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.title || "Vietnam '26", { body: d.body || "", tag: d.tag || undefined, icon: "icon-180.png", badge: "icon-180.png", data: { url: d.url || "./#today" } }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close(); const url = new URL((e.notification.data || {}).url || "./", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => { for (const c of cs) if ("focus" in c) return c.focus(); return self.clients.openWindow(url); }));
});
