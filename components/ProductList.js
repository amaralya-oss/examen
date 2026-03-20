app.component('product-list', {

  props: ['products'], // Datos que el componente recibe desde afuera.


template: `
  <div class="grid"> 

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

