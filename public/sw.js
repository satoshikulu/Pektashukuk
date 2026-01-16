const CACHE_NAME = 'pektas-hukuk-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/justice-icon.svg',
  '/blog/index.html',
  'https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Spectral:wght@300;400;500;600&family=Dancing+Script:wght@400;600;700&display=swap'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.log('Service Worker: Cache install failed:', error);
      })
  );
});

// Activate Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Event - Network First Strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          // For HTML files, always try network first
          if (event.request.destination === 'document') {
            return fetch(event.request)
              .then(networkResponse => {
                // Update cache with new version
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(event.request, networkResponse.clone()));
                return networkResponse;
              })
              .catch(() => response); // If network fails, return cached version
          }
          return response;
        }

        // Fetch from network for non-HTML files
        return fetch(event.request)
          .then(networkResponse => {
            // Cache successful responses
            if (networkResponse.ok) {
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, networkResponse.clone()));
            }
            return networkResponse;
          })
          .catch(() => {
            // If network fails and it's an image, return a fallback
            if (event.request.destination === 'image') {
              return new Response('Image not available offline', {
                status: 404,
                statusText: 'Not Found'
              });
            }
            throw new Error('Network request failed');
          });
      })
      .catch(error => {
        console.log('Service Worker: Fetch failed:', error);
        throw error;
      })
  );
});

// Handle background sync (optional)
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle any background sync operations
      console.log('Service Worker: Background sync triggered')
    );
  }
});

// Handle push notifications (optional)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Yeni bir güncelleme var!',
    icon: '/justice-icon.svg',
    badge: '/justice-icon.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Siteyi Aç',
        icon: '/justice-icon.svg'
      },
      {
        action: 'close',
        title: 'Kapat',
        icon: '/justice-icon.svg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Avukat Halil Pektaş', options)
  );
});
