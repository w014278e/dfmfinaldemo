var cacheName = "offline";

self.addEventListener("install", function(event) {
                      event.waitUntil(
                      caches.open(cacheName).then(function(cache) {
    return cache.addAll([
        "/index.html",
        "/styles.css"
    ]);
})
)
})

self.addEventListener("fetch", function(event) {
                      event.respondWith(
                      caches.open(cacheName).then(function(cache) {
    return cache.match(event.request);
})
);
});


