const app = Vue.createApp({
    data() {
        const saved = localStorage.getItem('ecotracker_products')
        const initialProducts = saved ? JSON.parse(saved) : [...products]


        return {
            products: initialProducts,

            cart: [],

            cartOpen: false,
            showToast: false,
            showModal: false,

            selectedCategory: "Todos",

            selectedProduct: null
        }
    },


    /* Lógica del toast (UI) */
    methods: {

        addToCart(product) {

            const existing = this.cart.find(item => item.id === product.id)

            if (existing) {
                existing.quantity++
            } else {
                this.cart.push({
                    ...product,
                    quantity: 1
                })
            }

            this.showToast = true

            setTimeout(() => {
                this.showToast = false
            }, 2500)
        },

        checkout() {
            if (this.cart.length === 0) return

            this.cart.forEach(cartItem => {
                const product = this.products.find(p => p.id === cartItem.id)
                if (product && product.stock > 0) {
                    product.stock--
                }
            })

            localStorage.setItem('ecotracker_products', JSON.stringify(this.products))

            this.cart = []
            this.cartOpen = false
            this.showModal = true
        },

        closeCart() {
            this.cartOpen = false
        },
        increaseQty(id) {
            const item = this.cart.find(i => i.id === id)
            if (item) item.quantity++
        },

        decreaseQty(id) {
            const item = this.cart.find(i => i.id === id)

            if (!item) return

            if (item.quantity > 1) {
                item.quantity--
            } else {
                this.removeFromCart(id)
            }
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(i => i.id !== id)
        }


    },

    computed: {
        categories() {
            const cats = this.products.map(p => p.category)
            return ["Todos", ...new Set(cats)]
        },

        filteredProducts() {
            if (this.selectedCategory === "Todos") {
                return this.products
            }

            return this.products.filter(
                p => p.category === this.selectedCategory
            )
        },

        cartTotal() {
            return this.cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            )
        }
    }


})

