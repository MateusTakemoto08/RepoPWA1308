const CACHE_NAME = 'aviacao-cache-v1';
const urlsToCache = [
  '/RepoPWA1308/',
  '/RepoPWA1308/index.html',
  '/RepoPWA1308/style.css',
  '/RepoPWA1308/script.js',
  '/RepoPWA1308/manifest.json',
  '/RepoPWA1308/img/Logo-192x192.png',
  '/RepoPWA1308/img/Logo-512x512.png',
  // adicione outras imagens usadas no site
  '/RepoPWA1308/img/A380.jpg',
  '/RepoPWA1308/img/Cockpit_a380.jpg',
  '/RepoPWA1308/img/AirportA380.jpg'
];

self.addEventListener('install', event => {
  console.log('[SW] Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Arquivos em cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Serve do cache ou busca na rede
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Ativando novo Service Worker...');
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Deletando cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
