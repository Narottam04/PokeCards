
const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    'CSS/style.css',
    'javascript/app.js',
    'javascript/cardPack.js',
    'javascript/index.js',
    'https://images.pokemontcg.io/base1/logo.png',
    'https://images.pokemontcg.io/base2/logo.png',
    'https://images.pokemontcg.io/basep/logo.png',
    'https://images.pokemontcg.io/base3/logo.png',
    'https://images.pokemontcg.io/base4/logo.png',
    'https://images.pokemontcg.io/base5/logo.png',
    'https://images.pokemontcg.io/gym1/logo.png',
    'https://images.pokemontcg.io/gym2/logo.png',
    'https://images.pokemontcg.io/neo1/logo.png',
    'https://images.pokemontcg.io/neo2/logo.png',
    'https://images.pokemontcg.io/si1/logo.png',
    'https://images.pokemontcg.io/neo3/logo.png',
    'https://images.pokemontcg.io/neo4/logo.png',
    'https://images.pokemontcg.io/base6/logo.png',
    'https://images.pokemontcg.io/ecard1/logo.png',
    'https://images.pokemontcg.io/ecard2/logo.png',
    'https://images.pokemontcg.io/ecard3/logo.png',
    'https://images.pokemontcg.io/ex1/logo.png',
    'https://images.pokemontcg.io/ex2/logo.png',
    'https://images.pokemontcg.io/ex3/logo.png',
    'https://images.pokemontcg.io/np/logo.png',
    'https://images.pokemontcg.io/ex4/logo.png',
    'https://images.pokemontcg.io/ex5/logo.png',
    'https://images.pokemontcg.io/ex6/logo.png',
    'https://images.pokemontcg.io/pop1/logo.png',
    'https://images.pokemontcg.io/ex7/logo.png',
    'https://images.pokemontcg.io/ex8/logo.png',
    'https://images.pokemontcg.io/ex9/logo.png',
    'https://images.pokemontcg.io/ex10/logo.png',
    'https://images.pokemontcg.io/pop2/logo.png',
    'https://images.pokemontcg.io/ex11/logo.png',
    'https://images.pokemontcg.io/ex12/logo.png',
    'https://images.pokemontcg.io/pop3/logo.png',
    'https://images.pokemontcg.io/ex13/logo.png',
    'https://images.pokemontcg.io/ex14/logo.png',
    'https://images.pokemontcg.io/pop4/logo.png',
    'https://images.pokemontcg.io/ex15/logo.png',
    'https://images.pokemontcg.io/pop5/logo.png',
    'https://images.pokemontcg.io/ex16/logo.png',
    'https://images.pokemontcg.io/dp1/logo.png',
    'https://images.pokemontcg.io/dpp/logo.png',
    'https://images.pokemontcg.io/dp2/logo.png',
    'https://images.pokemontcg.io/pop6/logo.png',
    'https://images.pokemontcg.io/dp3/logo.png',
    'https://images.pokemontcg.io/dp4/logo.png',
    'https://images.pokemontcg.io/pop7/logo.png',
    'https://images.pokemontcg.io/dp5/logo.png',
    'https://images.pokemontcg.io/dp6/logo.png',
    'https://images.pokemontcg.io/pop8/logo.png',
    'https://images.pokemontcg.io/dp7/logo.png',
    'https://images.pokemontcg.io/pl1/logo.png',
    'https://images.pokemontcg.io/pop9/logo.png',
    'https://images.pokemontcg.io/pl2/logo.png',
    'https://images.pokemontcg.io/pl3/logo.png',
    'https://images.pokemontcg.io/pl4/logo.png',
    'https://images.pokemontcg.io/ru1/logo.png',
    'https://images.pokemontcg.io/hgss1/logo.png',
    'https://images.pokemontcg.io/hsp/logo.png',
    'https://images.pokemontcg.io/hgss2/logo.png',
    'https://images.pokemontcg.io/hgss3/logo.png',
    'https://images.pokemontcg.io/hgss4/logo.png',
    'https://images.pokemontcg.io/col1/logo.png',
    'https://images.pokemontcg.io/bwp/logo.png',
    'https://images.pokemontcg.io/bw1/logo.png',
    'https://images.pokemontcg.io/mcd11/logo.png',
    'https://images.pokemontcg.io/bw2/logo.png',
    'https://images.pokemontcg.io/bw3/logo.png',
    'https://images.pokemontcg.io/bw4/logo.png',
    'https://images.pokemontcg.io/bw5/logo.png',
    'https://images.pokemontcg.io/mcd12/logo.png',
    'https://images.pokemontcg.io/bw6/logo.png',
    'https://images.pokemontcg.io/dv1/logo.png',
    'https://images.pokemontcg.io/bw7/logo.png',
    'https://images.pokemontcg.io/bw8/logo.png',
    'https://images.pokemontcg.io/bw9/logo.png',
    'https://images.pokemontcg.io/bw10/logo.png',
    'https://images.pokemontcg.io/xyp/logo.png',
    'https://images.pokemontcg.io/bw11/logo.png',
    'https://images.pokemontcg.io/xy0/logo.png',
    'https://images.pokemontcg.io/xy1/logo.png',
    'https://images.pokemontcg.io/xy2/logo.png',
    'https://images.pokemontcg.io/xy3/logo.png',
    'https://images.pokemontcg.io/xy4/logo.png',
    'https://images.pokemontcg.io/xy5/logo.png',
    'https://images.pokemontcg.io/dc1/logo.png',
    'https://images.pokemontcg.io/xy6/logo.png',
    'https://images.pokemontcg.io/xy7/logo.png',
    'https://images.pokemontcg.io/xy8/logo.png',
    'https://images.pokemontcg.io/xy9/logo.png',
    'https://images.pokemontcg.io/g1/logo.png',
    'https://images.pokemontcg.io/xy10/logo.png',
    'https://images.pokemontcg.io/xy11/logo.png',
    'https://images.pokemontcg.io/mcd16/logo.png',
    'https://images.pokemontcg.io/xy12/logo.png',
    'https://images.pokemontcg.io/sm1/logo.png',
    'https://images.pokemontcg.io/smp/logo.png',
    'https://images.pokemontcg.io/sm2/logo.png',
    'https://images.pokemontcg.io/sm3/logo.png',
    'https://images.pokemontcg.io/sm35/logo.png',
    'https://images.pokemontcg.io/sm4/logo.png',
    'https://images.pokemontcg.io/sm5/logo.png',
    'https://images.pokemontcg.io/sm6/logo.png',
    'https://images.pokemontcg.io/sm7/logo.png',
    'https://images.pokemontcg.io/sm75/logo.png',
    'https://images.pokemontcg.io/sm8/logo.png',
    'https://images.pokemontcg.io/sm9/logo.png',
    'https://images.pokemontcg.io/det1/logo.png',
    'https://images.pokemontcg.io/sm10/logo.png',
    'https://images.pokemontcg.io/sm11/logo.png',
    'https://images.pokemontcg.io/sm115/logo.png',
    'https://images.pokemontcg.io/sma/logo.png',
    'https://images.pokemontcg.io/mcd19/logo.png',
    'https://images.pokemontcg.io/sm12/logo.png',
    'https://images.pokemontcg.io/swshp/logo.png',
    'https://images.pokemontcg.io/swsh1/logo.png',
    'https://images.pokemontcg.io/swsh2/logo.png',
    'https://images.pokemontcg.io/swsh3/logo.png',
    'https://images.pokemontcg.io/swsh35/logo.png',
    'https://images.pokemontcg.io/swsh4/logo.png',
    'https://images.pokemontcg.io/swsh45/logo.png',
    'https://images.pokemontcg.io/swsh45sv/logo.png',
    'https://images.pokemontcg.io/swsh5/logo.png',
    'https://images.pokemontcg.io/swsh6/logo.png',
    'https://images.pokemontcg.io/base1/symbol.png'
];

// install event
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});


// activate event 
self.addEventListener('activate', evt => {
    console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});