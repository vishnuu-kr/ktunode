const CACHE_NAME = "ktunode-cache-v1";
const STATIC_ASSETS = [
  "/",
  "/manifest.json",
  "/logo.webp",
  "/fonts/Inter-Bold.ttf",
  "/fonts/Inter-Medium.ttf",
  "/hero-bg.webp",
  "/hero-bg-dark.webp",
];

// Install Event: pre-cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: cache interception
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // We only intercept GET requests
  if (event.request.method !== "GET") {
    return;
  }

  // 1. Static chunks and assets: Cache First
  if (
    requestUrl.pathname.startsWith("/_next/static/") ||
    requestUrl.pathname.endsWith(".js") ||
    requestUrl.pathname.endsWith(".css") ||
    requestUrl.pathname.endsWith(".png") ||
    requestUrl.pathname.endsWith(".jpg") ||
    requestUrl.pathname.endsWith(".webp") ||
    requestUrl.pathname.endsWith(".svg") ||
    requestUrl.pathname.endsWith(".woff2")
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        }).catch(() => {
          return new Response("Offline asset not found", { status: 404 });
        });
      })
    );
    return;
  }

  // 2. API requests (notes, subjects, etc.): Network First with Cache Fallback
  if (requestUrl.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return new Response(JSON.stringify({ error: "Offline and no cached data available" }), {
              status: 503,
              headers: { "Content-Type": "application/json" }
            });
          });
        })
    );
    return;
  }

  // 3. Navigation, Route HTML, and Next.js RSC payloads: Network First with Cache Fallback
  const isRsc = requestUrl.searchParams.has("_rsc") || 
                event.request.headers.has("RSC") || 
                event.request.headers.has("Next-Router-State-Tree");

  if (
    event.request.mode === "navigate" || 
    isRsc ||
    (event.request.headers.get("accept") && event.request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return caches.match("/");
          });
        })
    );
    return;
  }
});
