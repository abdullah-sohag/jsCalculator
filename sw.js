self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then( s => {
            return s.addAll(['./','./css/bootstrap.min.css','./css/style.css','./assets/rsz_proweber_md_abdullah_sohag.png','./assets/images.png','./assets/images2.png','./assets/images.svg','./js/vue.global.js','./js/bootstrap.min.js','./js/main.js'])
        })
    )
    // console.log('install')
})

self.addEventListener('fetch', e => {
    // console.log(`Intercapting fetch request for: ${e.request.url}`)

    e.respondWith(
        caches.match(e.request).then( r => {
            return r || fetch(e.request)
        })
    )
})