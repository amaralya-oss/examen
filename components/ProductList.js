app.component('product-list', {

    props: ['products'],

    template: `
    <div class="product-list">

        <product-card
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="$emit('add-to-cart', $event)"
            @view-detail="$emit('view-detail', $event)">
        </product-card>

    </div>
    `

})