const staticCacheName = 'site-static'
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    'css/style.css',
    'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap',
    'https://use.fontawesome.com/releases/v5.8.1/css/all.css',

]


self.addEventListener('install', evt => {
    console.log('service worker has been installed')
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        })
    )
    
})

self.addEventListener('activate', evt => {
    console.log('service worker has been activated')
})

self.addEventListener('fetch', evt => {
    /* console.log('fetch event', evt) */
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request)
        })
    )
})