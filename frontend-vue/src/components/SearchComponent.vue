<script setup>
import { ref, computed } from 'vue'
import productsJson from '../../../backend-node/database.json'

const searchQuery = ref('')

const products = ref(productsJson)

const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return []
  }
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

function handleSearch() {
  console.log('Search triggered:', searchQuery.value, filteredProducts.value)
}
</script>

<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Sök efter tjänster..."
      @input="handleSearch"
      class="search-input"
    />
    <i class="fa fa-search search-icon" @click="handleSearch"></i>

    <!-- Results Dropdown -->
    <ul v-if="filteredProducts.length" class="search-results">
      <li style="color: black" v-for="product in filteredProducts" :key="product.id">
        <a :href="`/snus/${product.id}`" class="search-result-link">
          {{ product.name }} - {{ product.type }} ({{ product.price }} kr)
        </a>
      </li>
    </ul>
    <p v-else-if="searchQuery" class="no-results">Inga resultat hittades.</p>
  </div>
</template>

<style scoped>
.search-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
}

.search-input {
  width: 40rem;
  padding: 0.5rem;
  font-size: 15px;
  border-top-left-radius: 20px;
  outline: none;
  border: 1px solid #ddd;
  transition: color 0.3s ease;
}

.search-input:focus {
  border-color: #ff6600;
  border-top-left-radius: 20px;
  box-shadow: 0 0 5px rgba(255, 165, 0, 0.6);
}

.search-icon {
  position: absolute;
  right: 10px;
  color: #003366;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.search-input:focus + .search-icon {
  color: #ff6600;
  text-shadow: 0 0 5px rgba(255, 165, 0, 0.6);
}

.search-icon:focus {
  color: #ff6600;
}

.search-results {
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 15rem;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
}

.search-results li {
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;
}

.search-results li:hover {
  background-color: #f9f9f9;
}

.no-results {
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #fff;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #999;
  font-size: 14px;
}
</style>
