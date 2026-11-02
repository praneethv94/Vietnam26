// Keeps the app working offline. Shows the saved copy instantly, then refreshes it in the background.
const CACHE = "vietnam26-mvzrv9su";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-512.png"];
// Bundled photos live in their own cache: file names are content hashes, so they survive app updates and download only once.
const PHOTOS = "vietnam26-photos", TILES = "vietnam26-osm", PHOTO_LIST = ["photos/px5843476.jpg","photos/px2494520.jpg","photos/px8104131.jpg","photos/px6564496.jpg","photos/px9295186.jpg","photos/px8062135.jpg","photos/px8119898.jpg","photos/px4141578.jpg","photos/px8933320.jpg","photos/px7142494.jpg","photos/px896162.jpg","photos/px3327447.jpg","photos/px5264542.jpg","photos/px3370930.jpg","photos/px6156123.jpg","photos/px2863788.jpg","photos/px2373727.jpg","photos/px1822133.jpg","photos/px1234321.jpg","photos/px4411988.jpg","photos/px2419454.jpg","photos/px3989110.jpg","photos/px2203445.jpg","photos/px7297356.jpg","photos/px5258079.jpg","photos/px4748099.jpg","photos/px5172531.jpg","photos/px250156.jpg","photos/px1398751.jpg","photos/px7692052.jpg","photos/px4995438.jpg","photos/px5454993.jpg","photos/px6945759.jpg","photos/px5981551.jpg","photos/px1234330.jpg","photos/px1234326.jpg","photos/px7112885.jpg","photos/px3829005.jpg","photos/px3908224.jpg","photos/px9069634.jpg","photos/px6564874.jpg","photos/px3039581.jpg","photos/px4131606.jpg","photos/px7924464.jpg","photos/px7022171.jpg","photos/px7022165.jpg","photos/px5104723.jpg","photos/px1270199.jpg","photos/px2835840.jpg","photos/px5111570.jpg","photos/px7447418.jpg","photos/px7678450.jpg","photos/px5057487.jpg","photos/px3371442.jpg","photos/px5712899.jpg","photos/px5129323.jpg","photos/px5240761.jpg","photos/px5240759.jpg","photos/px7561548.jpg","photos/px1524598.jpg","photos/px4411975.jpg","photos/px4411985.jpg","photos/px2350638.jpg","photos/px2483677.jpg","photos/px4933381.jpg","photos/px6696940.jpg","photos/px4912504.jpg","photos/px1093807.jpg","photos/px5833768.jpg","photos/px1714202.jpg","photos/px5833719.jpg","photos/px4954402.jpg","photos/px4881049.jpg","photos/px10545335.jpg","photos/px6520902.jpg","photos/px8088588.jpg","photos/px3039589.jpg","photos/px4961969.jpg","photos/px4670033.jpg","photos/px5925799.jpg","photos/px2158396.jpg","photos/px6520941.jpg","photos/px4792884.jpg","photos/px7665761.jpg","photos/px3609871.jpg","photos/px8612554.jpg","photos/px6396875.jpg","photos/px8003640.jpg","photos/px4176310.jpg","photos/px6924909.jpg","photos/px4559791.jpg","photos/px3559137.jpg","photos/px4867697.jpg","photos/px4870127.jpg","photos/px4417.jpg","photos/px4413.jpg","photos/px1673909.jpg","photos/px10258355.jpg","photos/px6674138.jpg","photos/px8447100.jpg","photos/px7386031.jpg","photos/px7057195.jpg","photos/px6822807.jpg","photos/px3559145.jpg","photos/px7154934.jpg","photos/px7154931.jpg","photos/px1671353.jpg","photos/px4824733.jpg","photos/px4859079.jpg","photos/px1673947.jpg","photos/px3344496.jpg","photos/px2767443.jpg","photos/px2767455.jpg","photos/px2767446.jpg","photos/px5222569.jpg","photos/px5222615.jpg","photos/px7084896.jpg","photos/px7149935.jpg","photos/px3344501.jpg","photos/px3344520.jpg","photos/px3344500.jpg","photos/px4166606.jpg","photos/px3798495.jpg","photos/px3798462.jpg","photos/px7103908.jpg","photos/px6762301.jpg","photos/px4364342.jpg","photos/px8105970.jpg","photos/px8105949.jpg","photos/px3059558.jpg","photos/px7205648.jpg","photos/px4856316.jpg","photos/px3851735.jpg","photos/px6559419.jpg","photos/px3875895.jpg","photos/px3013638.jpg","photos/px5568679.jpg","photos/px7860877.jpg","photos/px4252014.jpg","photos/px2681607.jpg","photos/px4722334.jpg","photos/px10421756.jpg","photos/px4965907.jpg","photos/px6729018.jpg","photos/px8021415.jpg","photos/px6760889.jpg","photos/px7575586.jpg","photos/px7735672.jpg","photos/px6760871.jpg","photos/px4965910.jpg","photos/px6754244.jpg","photos/px8351533.jpg","photos/px6947337.jpg","photos/px9264738.jpg","photos/px4084327.jpg","photos/px3060093.jpg","photos/px4559785.jpg","photos/px7730061.jpg","photos/px8471689.jpg","photos/px4559795.jpg","photos/px599202.jpg","photos/px8242672.jpg","photos/px519246.jpg","photos/px8449952.jpg","photos/px167616.jpg","photos/px2962214.jpg","photos/px2561705.jpg","photos/px7530625.jpg","photos/px4482349.jpg","photos/px4897451.jpg","photos/px4986455.jpg","photos/px3723049.jpg"];
async function savePhotos() {
  const c = await caches.open(PHOTOS), have = new Set((await c.keys()).map(r => new URL(r.url).pathname.split("/").pop()));
  const todo = PHOTO_LIST.filter(f => !have.has(f.split("/").pop()));
  let i = 0; const next = async () => { while (i < todo.length) { const f = todo[i++]; try { const r = await fetch(f); if (r.ok) await c.put(f, r); } catch (e) {} } };
  await Promise.all([next(), next(), next(), next()]);
}
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
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
  // The app page itself: try the network first (3 s), so updates show on the next open; fall back to the saved copy offline.
  if (same && req.mode === "navigate") {
    e.respondWith(caches.open(CACHE).then(async c => {
      const net = fetch(req).then(r => { if (r.ok) c.put("index.html", r.clone()); return r; });
      const timeout = new Promise(res => setTimeout(() => res(null), 3000));
      try { const r = await Promise.race([net, timeout]); if (r) return r; } catch (err) {}
      return (await c.match("index.html")) || net;
    }));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: same });
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || (req.mode === "navigate" ? c.match("index.html") : Response.error());
  }));
});
