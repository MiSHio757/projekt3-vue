<script setup>
import HeroBanner from './components/HeroBanner.vue'
import DropdownButton from './components/DropdownButton.vue'

import { ref, defineEmits } from 'vue'

const emit = defineEmits(['search'])
const searchQuery = ref('')
const onSearch = () => {
  emit('search', searchQuery.value)
}

const isActive = ref(false)
const isClicked = ref(false)
let timeoutId = null

const onIconClick = () => {
  isActive.value = true
  isClicked.value = true
  onSearch()

  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    if (!document.querySelector('.search-input').matches(':focus')) {
      isActive.value = false
      isClicked.value = false
    }
  }, 500)
}
</script>

<template>
  <div class="app-container">
    <!-- Header Section -->
    <header class="header">
      <DropdownButton />

      <div class="logo">
        <img src="../img/logo.png" alt="Snusjakt-logo" />
        <h1>Snusjakt</h1>
      </div>
      <div class="search-container">
        <input
          type="text"
          placeholder="Sök snus..."
          v-model="searchQuery"
          @input="onSearch"
          @keydown.enter="onEnterPress"
          @blur="onBlur"
          @focus="onFocus"
          :class="{ active: isActive }"
          class="search-input"
        />
        <i
          class="fas fa-search search-icon"
          @click="onIconClick"
          :class="{ 'active-icon': isActive }"
        ></i>
      </div>
      <div class="header-info">
        <a href="">Kundservice</a>
        <a href="">Snus i Laget</a>
        <button class="loggin-button">Logga in</button>
      </div>
    </header>
    <div class="under-header">
      <i class="fa-sharp fa-solid fa-check"></i>
      <p>Fri frakt över 200 kr</p>
      <i class="fa-sharp fa-solid fa-check"></i>
      <p>Leverans normalt 1-3 vardagar</p>
      <i class="fa-sharp fa-solid fa-check"></i>
      <p>Största Snus e-butik</p>
    </div>
    <div class="under-header-titel">
      <h2>SNUS ONLINE - HANDLA SNUS PÅ NÄTET - SNUSJAKT.SE</h2>
    </div>

    <!-- Main Content Section -->
    <main class="main-content">
      <div class="content-layout">
        <!-- Left-Side Filter Section -->
        <aside class="filter-sidebar">
          <p>dada</p>
        </aside>

        <!-- Main Product Content -->
        <div class="product-content">
          <HeroBanner />
          <div class="hero-text">
            <h2>Hitta ditt favorit snus till bästa pris!</h2>
            <p>Upptäck erbjudanden och kampanjer på dina favoriter.</p>
            <button class="cta-button">Utforska nu</button>
          </div>
          <div class="popular-categories">
            <h2>Populära-Kategorier</h2>
            <div class="button-categories-container">
              <button>Vitt snus</button>
              <button>Portionssnus</button>
              <button>White Portion</button>
              <button>Lössnus</button>
              <button>Alla produkter</button>
            </div>
          </div>
          <footer class="footer">
            <div class="footer-content">
              <p>&copy; 2024 Snusjakt. Alla rättigheter förbehållna.</p>
            </div>
          </footer>
        </div>
        <aside class="ad-sidebar">
          <p>dadadad</p>
        </aside>
      </div>
    </main>

    <!-- Footer Section -->
  </div>
</template>

<style scoped></style>
