const CACHE_NAME = 'gymsolo-cache-v28';
const urlsToCache = [
  './index.html',
  './app.js',
  './admin.html',
  './manifest.json',
  './firebase-config.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Always fetch fresh JS/HTML if possible to prevent sticky caches during dev
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
