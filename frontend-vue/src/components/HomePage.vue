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
              <a :href="`/snus-i-laget`">
                <button class="cta-button">Utforska nu</button>
              </a>
            </div>
            <div class="popular-categories">
              <h2>Populära-Kategorier</h2>
              <div class="button-categories-container">
                <div class="categories-snus">
                  <router-link :to="{ path: '/snus-i-laget', query: { category: 'Vittsnus' } }">
                    Vittsnus
                  </router-link>
                  <img class="snus-image" src="../../img/vitsnus.jpg" />
                </div>

                <div class="categories-snus">
                  <router-link :to="{ path: '/snus-i-laget', query: { category: 'Lössnus' } }">
                    Lössnus
                  </router-link>
                  <img class="snus-image" src="../../img/lössnus.jpg" />
                </div>

                <div class="categories-snus">
                  <router-link :to="{ path: '/snus-i-laget', query: { category: 'Portionsnus' } }">
                    Portionsnus
                  </router-link>
                  <img class="snus-image" src="../../img/portionsnus.jpg" />
                </div>

                <div class="categories-snus">
                  <router-link :to="{ path: '/snus-i-laget', query: { category: 'Whiteportion' } }">
                    Whiteportion
                  </router-link>
                  <img class="snus-image" src="../../img/whiteportion.jpg" />
                </div>

                <div class="categories-snus">
                  <a :href="`/snus-i-laget`">Alla produkter</a>
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

<style scoped>
/* Main Content */
.main-content {
  display: flex;
  flex-direction: row;
  font-family: Arial, Helvetica, sans-serif;
  min-height: calc(100vh - 13rem);
}

.content-layout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  position: relative;
  padding-top: 0px;
}

/* Filter-sidebar */

.main-article {
  width: calc(80vw);
  height: calc(100vh - 10rem);
  overflow-y: scroll;
}

.filter-sidebar {
  height: calc(100vh - 10rem);
  background-color: rgb(235, 235, 235);
  width: 3.4375rem;
}

.ad-sidebar {
  width: calc(20vw - 3.4375rem);
  height: calc(100vh - 10rem);
}

.ad-container {
  padding: 20px 10px;
}

.ad-container img {
  cursor: pointer;
}

/* Product Content*/
.product-content {
  flex-grow: 1;
  padding: 1.5rem 3rem;
}

.hero-text {
  background-color: #0057af15;
  font-size: 25px;
  font-weight: bold;
  border-radius: 10px;
  padding: 1rem;
}
.hero-text h2 {
  color: #5aa3f6;
}

.cta-button {
  background-color: #0057af;
  border: 2px solid #5aa3f6;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  padding: 0 20px;
  margin-right: 20px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
}

.popular-categories {
  border: 2px solid #5aa3f6;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  color: #5aa3f6;
}

.button-categories-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.popular-categories a {
  all: unset;
  cursor: pointer;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  background-color: #5aa3f6;
  color: white;
  font-weight: bold;
}

.popular-categories a:hover {
  background-color: #87bfff;
}

.categories-snus {
  border: solid 1px #5aa3f6;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
}

.snus-image {
  width: 250px;
  height: 250px;
}
</style>
