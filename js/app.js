const app = Vue.createApp({
    data() {
        return {
            products: [
                { id: 1, name: "Kit compostaje básico", category: "Starter Kits", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. " },
                { id: 2, name: "Kit compostaje urbano", category: "Starter Kits", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. " },
                { id: 3, name: "Sensor de humedad", category: "Tecnología", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. "  },
                { id: 4, name: "Sensor de temperatura", category: "Tecnología", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. "  },
                { id: 5, name: "Compostera doméstica (bin)", category: "Accesorios", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. "  },
                { id: 6, name: "Aireador", category: "Accesorios", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. "  },
                { id: 7, name: "Balde de residuos orgánicos", category: "Accesorios", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. "  },
                { id: 8, name: "Filtro de carbón anti olores", category: "Accesorios", price: 15000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. "  },
                { id: 9, name: "Guía digital", category: "Educación", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. "  },
                { id: 10, name: "Curso a domicilio", category: "Educación", price: 14000, image: "assets/images/product-1.png", stock: 20, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis ante, commodo et faucibus in, gravida ut neque. Nam sed tincidunt arcu. Pellentesque quis condimentum lectus. Aliquam eget felis vel lorem semper mattis. Donec tortor tellus, blandit quis odio a, auctor placerat risus. Vestibulum dapibus non ligula vel ultricies. "  },
            ],

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
            this.cart.push(product)

            this.showToast = true

            setTimeout(() => {
                this.showToast = false
            }, 2500)
        },

        checkout() {
            this.cart = []
            this.cartOpen = false
            this.showModal = true
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
        }
    }
})

