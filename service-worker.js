const CACHE_NAME = 'tvmaze-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/img/tvmaze192.png',
  '/img/tvmaze512.png',
  '/img/TvMaze.png',
  '/img/TvMazeSplash.png',
  '/js/api.js',
  '/js/favoritos.js',
  '/js/views.js',
  '/js/navegacion.js',
  '/js/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
