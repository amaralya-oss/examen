app.component('product-detail', {

    props: ['product'],

    template: `
    <div class="modal-overlay">

        <div class="product-detail">

            <button class="product-detail__close" @click="$emit('close')">
                <span class="material-symbols-outlined">close</span>
            </button>

            <div class="product-detail__layout">

                <img class="product-detail__image" :src="product.image" :alt="product.name">

                <div class="product-detail__info">

                    <h2 class="product-detail__name">{{ product.name }}</h2>

                    <p class="product-detail__category">{{ product.category }}</p>

                    <p class="product-detail__price">$ {{ product.price }}</p>

                    <p class="product-detail__stock">Stock disponible: {{ product.stock }}</p>

                    <p class="product-detail__description">{{ product.description }}</p>

                    <button class="btn btn--outline" @click="$emit('add-to-cart', product)">
                        <span class="material-symbols-outlined">add</span>
                        Agregar al carro
                    </button>

                </div>

            </div>

        </div>

    </div>
    `

})