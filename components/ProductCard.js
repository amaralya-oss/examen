app.component('product-card', {

  props: ['product'], //recibe UN producto del list

  template: `
    <div class="product-card"
     @click="$emit('view-detail', product)">

        <img :src="product.image" :alt="product.name">

        <h3 class="product-name">{{ product.name }}</h3>

        <p class="product-category">{{ product.category }}</p>

        <p class="product-price">$ {{ product.price }}</p>

    </div>
`
})