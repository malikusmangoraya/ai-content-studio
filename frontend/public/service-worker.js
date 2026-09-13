const CACHE_NAME = 'generated-website-008-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Add other critical static assets here for precaching
  // For Vite, assets often include hashes (e.g., '/assets/index-xxxxxxxx.js')
  // which are best dynamically cached or added during build process.
  // This basic setup focuses on the main entry point.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      // No cache match, fetch from network
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  // Optional: Perform cleanup of old caches during activation
});
