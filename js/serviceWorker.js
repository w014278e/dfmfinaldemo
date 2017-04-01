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


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/js/serviceWorker.js").then(function(registration) {
        console.log("Serive worker enabled");
    }).catch(function(error) {
        console.log("Service worker not enabled", error);
    })
}