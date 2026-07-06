const CACHE = "buen-pastor-v1";

self.addEventListener("install", () => {
  self.skipWaiting()
})

self.addEventListener("activate", (e) => {
  e.waitUntil(clients.claim())
})

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true })
      .then((r) => r || fetch(e.request))
      .catch(() => caches.match("/index.html"))
  )
})
