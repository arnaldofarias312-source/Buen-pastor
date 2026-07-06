const CACHE = "buen-pastor-v2";

self.addEventListener("install", () => {
  self.skipWaiting()
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
