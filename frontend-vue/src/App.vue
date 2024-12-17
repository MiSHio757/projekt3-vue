<script setup>
import DropdownButton from './components/DropdownButton.vue'
import SearchComponent from './components/SearchComponent.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="app-container">
    <!-- Header Section -->
    <header class="header">
      <div class="main-header">
        <DropdownButton />

        <router-link to="/" class="logo">
          <img src="../img/logo.png" alt="Snusjakt-logo" />
          <h1>Snusjakt</h1>
          <div class="symbol-18">
            <img src="../img/18.png" alt="18plus" />
          </div>
        </router-link>
        <SearchComponent />
        <div class="header-info">
          <router-link to="/kundservice">Kundservice</router-link>
          <router-link to="/snus-i-laget">Snus i Laget</router-link>
          <button class="loggin-button" @click="goToLogin">Logga in</button>
        </div>
      </div>
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
    </header>

    <!-- Main Content Section -->

    <router-view></router-view>

    <!-- Footer Section -->
    <footer class="footer">
      <p class="footer-copyright">&copy; 2024 Snusjakt. Alla rättigheter förbehållna.</p>
    </footer>
  </div>
</template>

<style scoped></style>
