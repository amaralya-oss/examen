app.component('product-card', {

    props: ['product'],

    template: `
    <div class="product-card" @click="$emit('view-detail', product)">

        <img class="product-card__image" :src="product.image" :alt="product.name">

        <h3 class="product-card__name">{{ product.name }}</h3>

        <p class="product-card__category">{{ product.category }}</p>

        <p class="product-card__price">$ {{ product.price }}</p>

    </div>
    `

})