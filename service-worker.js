const CACHE_NAME = "nelsonbot-cache-v1";
const ASSETS_TO_CACHE = [
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json",
  "/assets/icons/icon-192x192.png",
  "/assets/icons/icon-512x512.png"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  console.log("[ServiceWorker] Installed and assets cached.");
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
  console.log("[ServiceWorker] Activated.");
});

// Fetch requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});