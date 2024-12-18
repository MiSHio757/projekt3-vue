<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import productsJson from '../../../backend-node/database.json'

const route = useRoute()
const productId = route.params.id

const product = ref(null)

onMounted(() => {
  product.value = productsJson.find((item) => item.id === parseInt(productId))
})
</script>

<template>
  <div class="snus-details">
    <router-link to="/" class="back-link">← Tillbaka till startsidan</router-link>

    <div v-if="product" class="details-container">
      <img :src="product.img" :alt="product.name" class="product-image" />
      <h1>{{ product.name }}</h1>
      <p>Kategori: {{ product.type }}</p>
      <p>
        <strong> Pris:{{ product.price }} kr</strong>
      </p>
      <button class="buy-now-button">Köp nu</button>
      <p>Popularitet: {{ product.popularity }}</p>
      <p>Omdöme: {{ product.rating }} ⭐</p>
      <p>{{ product.description }}</p>
    </div>
    <div v-else class="loading">
      <p>Hämtar produktinformation...</p>
    </div>
  </div>
</template>

<style scoped>
.snus-details {
  padding: 2rem;
  font-family: Arial, sans-serif;
  text-align: center;
}

.details-container {
  max-width: 600px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.back-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #0056b3;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.back-link:hover {
  background-color: #004494;
}

.back-icon {
  margin-right: 0.5rem;
  font-size: 16px;
}

.back-link:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(255, 165, 0, 0.6);
}

.buy-now-button {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buy-now-button:hover {
  background-color: #218838;
}

.buy-now-button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.6);
}
</style>
