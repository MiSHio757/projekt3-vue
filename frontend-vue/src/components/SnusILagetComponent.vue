<script setup>
import { ref } from 'vue'
import HeroBanner from './HeroBanner.vue'

// Normalize the images array with a structure
const images = ref([
  { img: '../img/snusILaget/snus1.jpg', text: 'Snus 1' },
  { img: '../img/snusILaget/snus2.jpg', text: 'Snus 2' },
  { img: '../img/snusILaget/snus3.jpg', text: 'Snus 3' },
  { img: '../img/snusILaget/snus4.jpg', text: 'Snus 4' },
  { img: '../img/snusILaget/snus5.jpg', text: 'Snus 5' },
  { img: '../img/snusILaget/snus6.jpg', text: 'Snus 6' },
  { img: '../img/snusILaget/snus7.jpg', text: 'Snus 7' },
  { img: '../img/snusILaget/snus8.jpg', text: 'Snus 8' },
  { img: '../img/snusILaget/snus9.jpg', text: 'Snus 9' },
  { img: '../img/snusILaget/snus10.jpg', text: 'Snus 10' },
  { img: '../img/snusILaget/snus11.jpg', text: 'Snus 11' },
  { img: '../img/snusILaget/snus12.jpg', text: 'Snus 12' },
  { img: '../img/snusILaget/snus13.jpg', text: 'Snus 13' },
  { img: '../img/snusILaget/snus14.jpg', text: 'Snus 14' },
  { img: '../img/snusILaget/snus15.jpg', text: 'Snus 15' },
  { img: '../img/snusILaget/snus16.jpg', text: 'Snus 16' },
  { img: '../img/snusILaget/snus17.jpg', text: 'Snus 17' },
  { img: '../img/snusILaget/snus18.jpg', text: 'Snus 18' },
  { img: '../img/snusILaget/snus19.jpg', text: 'Snus 19' },
  { img: '../img/snusILaget/snus20.jpg', text: 'Snus 20' },
  { img: '../img/snusILaget/snus21.jpg', text: 'Snus 21' },
  { img: '../img/snusILaget/snus22.jpg', text: 'Snus 22' },
  { img: '../img/snusILaget/snus23.jpg', text: 'Snus 23' },
  { img: '../img/snusILaget/snus24.jpg', text: 'Snus 24' },
  { img: '../img/snusILaget/snus25.jpg', text: 'Snus 25' },
  { img: '../img/snusILaget/snus26.jpg', text: 'Snus 26' },
  { img: '../img/snusILaget/snus27.jpg', text: 'Snus 27' },
  { img: '../img/snusILaget/snus28.jpg', text: 'Snus 28' },
])
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

    <main class="content">
      <HeroBanner />

      <!-- Benefits Section -->
      <section class="benefits">
        <div class="benefits-grid">
          <div class="benefit">
            <img src="../../img/delivery.png" alt="Snabba leveranser" />
            <h3>Snabba leveranser</h3>
            <p>Vi levererar dina beställningar inom 1–3 arbetsdagar.</p>
          </div>
          <div class="benefit">
            <img class="free" src="../../img/frifrakt.png" alt="Fri frakt" />
            <h3>Fri frakt</h3>
            <p>Njut av fri frakt på alla beställningar över 200 kr.</p>
          </div>
        </div>
      </section>

      <!-- Image Grid Section -->
      <section class="image-grid-section">
        <h2>Utforska Vårt Sortiment</h2>
        <div class="image-grid">
          <div class="image-card" v-for="(item, index) in images" :key="index">
            <img :src="item.img" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Bas-styling */
.snus-i-laget {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
  color: #333;
}

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

.benefits {
  margin-bottom: 3rem;
}

.benefits-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.benefit {
  flex: 1 1 calc(33.333% - 2rem);
  background-color: #5aa3f6;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
}

.benefit img {
  width: 100%;
  max-width: 10rem;
  height: auto;
  margin-bottom: 1rem;
}

.benefit h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.benefit p {
  font-size: 1rem;
}
/* Image Grid Section */
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
  flex: 1 1 calc(25% - 1.5rem); /* 4 images per row */ /* 8 images per row */
  background-color: #fff;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
}

.image-card img {
  width: 100%;
  max-width: 10rem;
  height: auto;
  margin-bottom: 0.5rem;
}

.image-card p {
  font-size: 0.9rem;
  color: #333;
  font-weight: bold;
}

.bulk-orders {
  margin-bottom: 3rem;
}

.bulk-orders h2 {
  font-size: 2rem;
  color: #ff6600;
  text-align: center;
  margin-bottom: 2rem;
}

.bulk-grid {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.bulk-grid img {
  flex: 1 1 50%;
  max-width: 20rem;
  height: auto;
  border-radius: 0.5rem;
}

.bulk-text {
  flex: 1 1 50%;
}

.bulk-text p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.cta-button {
  background-color: #0056b3;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #ff6600;
}

@media (max-width: 768px) {
  .benefit {
    flex: 1 1 100%;
  }

  .bulk-grid {
    flex-direction: column;
  }

  .bulk-grid img {
    max-width: 100%;
  }
}
</style>
