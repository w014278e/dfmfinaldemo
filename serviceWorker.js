var cacheName = "offline";

self.addEventListener("install", Function(event) {
                      event.waitUntil(
                      caches.open(cacheName).then(function(cache) {
    return cache.addAll([
        "/index.html",
        "/css/styles.css"
    ]);
})
)
})

self.addEventListener("fetch", Function(event) {
                      event.respondWith(
                      caches.open(cacheName).then(function(cache) {
    return cache.match(event.request);
})
);
});


