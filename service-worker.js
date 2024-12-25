const CACHE_NAME = 'nelsonbot-cache';
const assets = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});