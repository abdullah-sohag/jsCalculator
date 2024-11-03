self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then( s => {
            return s.addAll(['./','https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css','./css/style.css','./assets/images.png','./assets/images2.png','./assets/images.svg','https://unpkg.com/vue@3/dist/vue.global.js','.https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js','./js/main.js'])
        })
    )
    
})

self.addEventListener('fetch', e => {
    

    e.respondWith(
        caches.match(e.request).then( r => {
            return r || fetch(e.request)
        })
    )
})