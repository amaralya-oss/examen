app.component('product-detail', {

    props: ['product'],

    template: `
    <div class="modal-overlay">

        <div class ="product-detail">

            <button class= "close-btn" @click="$emit('close')"><span class="material-symbols-outlined">
                        close
                    </span></button>

            <div class ="detail-layout">

                <img :src="product.image" :alt="product.name">

                <div class="detail-info">

                    <h2 class="product-name">{{ product.name }}</h2>

                    <p class="product-category">{{ product.category }}</p>
                    
                    <p class="product-price">$ {{ product.price }}</p>

                    <p class="product-stock">Stock disponible: {{ product.stock }}</p>

                    <p class="product-description">{{ product.description }}</p>
                

                    <button class="btn btn-outline"
        @click="$emit('add-to-cart', product)"> <span class="material-symbols-outlined">add</span>
                        Agregar al carro
                    </button > 

                </div>

            </div>

        </div>

    </div>

`

})
