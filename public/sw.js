const CACHE = "buen-pastor-v3";

self.addEventListener("install", (e) => {
  self.skipWaiting()
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(["/", "/index.html"])))
})

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(nombres.map((n) => n !== CACHE && caches.delete(n)))
    )
  )
  e.waitUntil(clients.claim())
})

self.addEventListener("fetch", (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => caches.match('/index.html')))
    return
  }
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true })
      .then((r) => r || fetch(e.request))
  )
})