const CACHE = "buen-pastor-v1";

self.addEventListener("install", (e) => {
  self.skipWaiting()
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(["/", "/index.html"]))
  )
})

self.addEventListener("activate", (e) => {
  e.waitUntil(clients.claim())
})

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request))
  )
})
