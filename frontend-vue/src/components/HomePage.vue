<script setup>
import HeroBanner from './HeroBanner.vue'
import SnusComponets from './SnusComponents.vue'
</script>

<template>
  <div class="app-container">
    <!-- Main Content Section -->

    <main class="main-content">
      <aside class="filter-sidebar"></aside>
      <article class="main-article">
        <div class="content-layout">
          <!-- Left-Side Filter Section -->

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
                <div class="categories-snus">
                  <a href="#">Vittsnus</a>
                  <img class="snus-image" src="../../img/vitsnus.jpg" />
                </div>
                <div class="categories-snus">
                  <a href="#">Lössnus</a>
                  <img class="snus-image" src="../../img/lössnus.jpg" />
                </div>
                <div class="categories-snus">
                  <a href="#">Portionsnus</a>
                  <img class="snus-image" src="../../img/portionsnus.jpg" />
                </div>
                <div class="categories-snus">
                  <a href="#">Whiteportion</a>
                  <img class="snus-image" src="../../img/whiteportion.jpg" />
                </div>
                <div class="categories-snus">
                  <a href="#">Alla produkter</a>
                  <img class="snus-image" src="../../img/allaprodukter.webp" />
                </div>
              </div>
              <SnusComponets />
            </div>
          </div>
        </div>
      </article>
      <aside class="ad-sidebar">
        <div class="ad-container">
          <a
            href="https://www.electrolux.se/promotions/?utm_source=prisjakt&utm_medium=banner&utm_campaign=christmas_sale&utm_term=christmassale&utm_content=300x600&d2cSellable=true"
          >
            <img src="../../img/ad1.jpg" />
          </a>
        </div>
      </aside>
    </main>
  </div>
</template>

<style scoped></style>
