app.component('product-list', {

    props: ['products'], // Datos que el componente recibe desde afuera.

    template: `
    <div class="catalog-grid"> 

      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product">
      </product-card>

    </div>
  `
})

console.log("hola")