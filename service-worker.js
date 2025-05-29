const cacheName = "abdo-training-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/manifest.json",
  "/https://i.pinimg.com/736x/1e/55/a5/1e55a584f7f02fb17ea209607fbc6a7a.jpg",
  "/https://i.pinimg.com/736x/1e/55/a5/1e55a584f7f02fb17ea209607fbc6a7a.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
