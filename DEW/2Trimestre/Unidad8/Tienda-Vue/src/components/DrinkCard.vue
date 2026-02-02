<script setup>
defineProps({
  drink: Object
})
</script>

<template>
  <div class="col-md-4 col-lg-3 mb-4">
    <div class="card h-100 shadow-sm">
      <img
        :src="drink.strDrinkThumb"
        class="card-img-top"
        :alt="drink.strDrink"
      >
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ drink.strDrink }}</h5>
        <p class="text-muted">ID: {{ drink.idDrink }}</p>
        <button
          class="btn btn-primary mt-auto"
          @click="$emit('add-to-cart', drink)"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  </div>
</template>