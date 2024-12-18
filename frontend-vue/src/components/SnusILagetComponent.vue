<script setup>
import { ref, computed, watchEffect } from 'vue'
import HeroBanner from './HeroBanner.vue'
import productsJson from '../../../backend-node/database.json'
import { useRoute } from 'vue-router'

const products = ref(productsJson)

const route = useRoute()
const filtertype = ref(route.query.category || 'All')
const sortBy = ref('None')

const filteredProducts = computed(() => {
  return filtertype.value === 'All'
    ? products.value
    : products.value.filter((product) => product.type === filtertype.value)
})

const sortedProducts = computed(() => {
  let result = [...filteredProducts.value]
  if (sortBy.value === 'popularitet') {
    result.sort((a, b) => b.popularity - a.popularity)
  } else if (sortBy.value === 'omdöme') {
    result.sort((a, b) => b.rating - a.rating)
  } else if (sortBy.value === 'pris') {
    result.sort((a, b) => b.price - a.price)
  }
  return result
})

const categories = ref(['All', ...new Set(products.value.map((item) => item.type))])

function getStars(rating) {
  const filledStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const totalStars = 5
  return {
    filled: filledStars,
    half: hasHalfStar,
    empty: totalStars - filledStars - (hasHalfStar ? 1 : 0),
  }
}
const headerText = computed(() => {
  if (filtertype.value === 'All') {
    return 'Utforska Vårt Sortiment'
  } else {
    return `Produkter inom ${filtertype.value}`
  }
})
watchEffect(() => {
  filtertype.value = route.query.category || 'All'
})
</script>

<template>
  <div class="snus-i-laget">
    <header class="header">
      <h1>Snus i Laget</h1>
      <p>
        Välkommen till Snus i Laget! Upptäck fördelarna med att beställa snus i stora mängder till
        bästa priser.
      </p>
    </header>

    <!-- Filter- och sorteringssektion -->

    <main class="content">
      <HeroBanner />
      <section class="filter-sort-section">
        <div class="controls">
          <!-- Filtersektion -->
          <div class="filter">
            <label for="typeFilter">Filtera efter kategori:</label>
            <select id="typeFilter" v-model="filtertype">
              <option v-for="type in categories" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>

          <!-- Sorteringssektion -->
          <div class="sort">
            <label for="sortSelect">Sortera efter:</label>
            <select id="sortSelect" v-model="sortBy">
              <option value="None">Ingen sortering</option>
              <option value="popularitet">Popularitet</option>
              <option value="omdöme">Omdöme</option>
              <option value="pris">Pris</option>
            </select>
          </div>
        </div>
      </section>
      <!-- Grid Sektion -->
      <section class="image-grid-section">
        <h2>{{ headerText }}</h2>
        <div class="image-grid">
          <router-link
            v-for="(item, index) in sortedProducts"
            :key="index"
            :to="`/snus/${item.id}`"
            class="image-card"
          >
            <img :src="item.img" alt="Produktbild" />
            <p>
              <strong>{{ item.name }}</strong>
            </p>
            <!-- Omdöme: Stjärnor + numeriskt omdöme -->
            <p class="price">{{ item.price }} kr</p>
            <div class="stars">
              <span
                v-for="n in getStars(item.rating).filled"
                :key="'filled' + n"
                class="star filled"
                >★</span
              >
              <span v-if="getStars(item.rating).half" class="star half">★</span>
              <span v-for="n in getStars(item.rating).empty" :key="'empty' + n" class="star"
                >☆</span
              >
              <span class="rating-number">{{ item.rating.toFixed(1) }}</span>
            </div>
            <p class="popularity">
              Popularitet: {{ item.popularity }}
              <span class="per-day">per day</span>
            </p>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Grundstilar */
.snus-i-laget {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
  color: #333;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  color: #0056b3;
}

.header p {
  font-size: 1.2rem;
  margin-top: 1rem;
}

/* Filter & Sorteringssektion */
.filter-sort-section {
  margin: 2rem 0;
  text-align: center;
}

.controls {
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.filter,
.sort {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter label,
.sort label {
  font-size: 1rem;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Grid Layout */
.image-grid-section {
  margin-bottom: 3rem;
}

.image-grid-section h2 {
  font-size: 2rem;
  color: #ff6600;
  text-align: center;
  margin-bottom: 2rem;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.image-card {
  flex: 1 1 calc(25% - 1.5rem);
  background-color: #fff;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.image-card:hover {
  transform: scale(1.05);
}

.image-card img {
  width: 100%;
  max-width: 10rem;
  height: auto;
  margin-bottom: 0.5rem;
}

.image-card p {
  font-size: 0.9rem;
  color: #555;
}

.stars {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 0.5rem 0;
}

.star {
  font-size: 1.2rem;
  color: #d3d3d3;
}

.star.filled {
  color: #ffa500;
}

.star.half {
  background: linear-gradient(to right, #ffa500 50%, #d3d3d3 50%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1em;
  font-size: 1.2rem;
  text-align: center;
}

.rating-number {
  font-size: 1rem;
  color: #333;
  margin-left: 8px;
  font-weight: bold;
}

.price {
  font-size: 1rem;
  color: #ff6600;
  margin: 0.5rem 0;
  font-weight: bold;
}

.popularity {
  font-size: 1rem;
  color: #ff6600;
  margin: 0.5rem 0;
  font-weight: bold;
}

.per-day {
  font-size: 0.9rem;
  color: #555;
  margin-left: 0.3rem;
  font-weight: normal;
}
</style>
