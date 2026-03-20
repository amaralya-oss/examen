app.component('cart-drawer', {

    props: [
        'cart',
        'cartOpen',
        'cartTotal'
    ],

    emits: [
        'close-cart',
        'checkout',
        'increase',
        'decrease',
        'remove'
    ],

    template: `
    <div class="cart-drawer"
         :class="{ 'cart-drawer--open': cartOpen }">

      <div class="cart-drawer__header">
        Tu carrito
      </div>

      <button class="cart-drawer__close"
              @click="$emit('close-cart')">

        <span class="material-symbols-outlined">
          close
        </span>

      </button>

      <div class="cart-drawer__content">

        <p class="cart-drawer__empty"
           v-if="cart.length === 0">
          Tu carrito está vacío.
        </p>

        <ul class="cart-drawer__list" v-else>

<li class="cart-drawer__item"
    v-for="item in cart"
    :key="item.id">

  <img :src="item.image"
       alt=""
       class="cart-drawer__image">

  <div class="cart-drawer__info">

    <div class="cart-drawer__name">
      {{ item.name }}
    </div>

    <div class="cart-drawer__price">
      $ {{ item.price }}
    </div>

    <div class="cart-drawer__qty">

      <button @click="$emit('decrease', item.id)">−</button>

      <span>{{ item.quantity }}</span>

      <button @click="$emit('increase', item.id)">+</button>

      <button class="cart-drawer__remove"
              @click="$emit('remove', item.id)">
        Eliminar
      </button>

    </div>

  </div>

</li>

        </ul>

      </div>

      <div class="cart-drawer__footer">

        <span class="cart-drawer__total-price">
          $ {{ cartTotal }}
        </span>

        <button class="btn btn--primary"
                @click="$emit('checkout')">
          Ir al pago
        </button>

        <button class="btn btn--outline"
                @click="$emit('close-cart')">
          Continuar explorando
        </button>

      </div>

    </div>
  `
})