app.component('product-card', {
    props: ['product'],
    template: `
    <div class="product-card" @click="$emit('view-detail', product)">

        <div class="product-card__image-wrapper">
            <img class="product-card__image" :src="product.image" :alt="product.name">
            <span class="product-card__badge" v-if="product.stock === 0">Agotado</span>
        </div>

        <h3 class="product-card__name">{{ product.name }}</h3>
        <p class="product-card__category">{{ product.category }}</p>
        <p class="product-card__price">$ {{ product.price.toLocaleString('es-CL') }}</p>

    </div>
    `
})