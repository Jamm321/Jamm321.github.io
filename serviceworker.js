const urlsToCache = [
    // List of assets to cache.
    "/",
    "IMG/apple-touch-icon.png",
    "IMG/favicon.ico",
    "IMG/icon-192-maskable.png",
    "IMG/icon-192.png",
    "IMG/icon-512-maskable.png",
    "IMG/icon-512.png",
  ];
   
  self.addEventListener("install", (event) => {
    let cacheUrls = async () => {
       const cache = await caches.open("pwa-assets");
       return cache.addAll(urlsToCache);
    };
    event.waitUntil(cacheUrls());
  });
   
  self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request));
  });