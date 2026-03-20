app.component('navbar', {
    
    props: ['cart'], 

    emits: ['open-cart'],

    template: `
            <nav class="navbar">
            <div class="navbar__brand"><a href="#">ecotracker</a></div>

            <ul class="navbar__links">
                <li class="navbar__item"><a class="navbar__link" href="#about">Sobre Ecotracker</a></li>
                <li class="navbar__item"><a class="navbar__link" href="#how-it-works">Cómo funciona</a></li>
                <li class="navbar__item"><a class="navbar__link" href="#catalog">Tienda</a></li>
                <li class="navbar__item"><a class="navbar__link" href="#site-footer">Descarga la app</a></li>
            </ul>

            <button class="navbar__cart" @click="$emit('open-cart')">
                <span class="material-symbols-outlined">shopping_bag</span>
                <span class="navbar__cart-count">{{ cart.length }}</span>
            </button>
        </nav>
 `
})
