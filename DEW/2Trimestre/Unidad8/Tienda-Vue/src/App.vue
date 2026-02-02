<script setup>
import { ref, computed, onMounted } from 'vue'
import DrinkCard from './components/DrinkCard.vue'

const drinks = ref([])
const cart = ref([])

const totalItems = computed(() =>
  cart.value.reduce((acc, item) => acc + item.qty, 0)
)

const getDrinks = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
  )
  const data = await response.json()
  drinks.value = data.drinks
}

const addToCart = (drink) => {
  const key = `cartItem_${drink.idDrink}`
  const item = localStorage.getItem(key)

  if (item) {
    const parsed = JSON.parse(item)
    parsed.qty++
    localStorage.setItem(key, JSON.stringify(parsed))
  } else {
    localStorage.setItem(
      key,
      JSON.stringify({
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        qty: 1
      })
    )
  }

  loadCart()
}

const loadCart = () => {
  cart.value = Object.keys(localStorage)
    .filter(key => key.startsWith('cartItem_'))
    .map(key => JSON.parse(localStorage.getItem(key)))
}

const removeFromCart = (id) => {
  const key = `cartItem_${id}`
  const item = JSON.parse(localStorage.getItem(key))

  if (item.qty > 1) {
    item.qty--
    localStorage.setItem(key, JSON.stringify(item))
  } else {
    localStorage.removeItem(key)
  }

  loadCart()
}

onMounted(() => {
  getDrinks()
  loadCart()
})
</script>

<template>
  <header class="bg-dark text-white p-4">
    <h1 class="fw-bold">
      Tienda de
      <span class="text-decoration-line-through text-warning">Amiibos</span>
      <span class="text-warning"> Cócteles</span>
    </h1>
  </header>

  <main class="container mt-4">
    <button
      class="btn btn-primary mb-4"
      data-bs-toggle="offcanvas"
      data-bs-target="#cartCanvas"
      @click="loadCart"
    >
      Ver carrito
      <span class="badge bg-light text-dark ms-2">
        {{ totalItems }}
      </span>
    </button>

    <div class="row">
      <DrinkCard
        v-for="drink in drinks"
        :key="drink.idDrink"
        :drink="drink"
        @add-to-cart="addToCart"
      />
    </div>

    <!-- Offcanvas carrito -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="cartCanvas">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>

      <div class="offcanvas-body">
        <p v-if="cart.length === 0" class="text-muted">
          El carrito está vacío
        </p>

        <ul class="list-group" v-else>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="item in cart"
            :key="item.id"
          >
            {{ item.name }}
            <img
              :src="item.image"
              class="img-fluid rounded"
              style="width: 50px"
            >
            <span class="badge bg-primary">{{ item.qty }}</span>
            <button
              class="btn btn-danger btn-sm"
              @click="removeFromCart(item.id)"
            >
              Borrar 1
            </button>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>