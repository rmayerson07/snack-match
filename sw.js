// Offline support: cache the whole app on first visit, serve from cache after.
const CACHE = "snack-match-v1";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "fonts/bowlby-one.woff2",
  "fonts/nunito-500.woff2",
  "fonts/nunito-700.woff2",
  "fonts/nunito-800.woff2",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first for the page (so updates show up), cache first for everything else.
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("index.html", copy)); return res; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
