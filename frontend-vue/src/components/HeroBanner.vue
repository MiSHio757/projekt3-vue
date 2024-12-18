<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const items = ref([
  {
    id: 1,
    img: '../img/herobaner.png',
    text: 'Xqs vitsnus ',
    price: '309kr - 10st',
    navigateId: 36,
  },
  {
    id: 2,
    img: '../img/herobaner1.jpg',
    text: 'Zyn vitsnus',
    price: '250kr - 10st',
    navigateId: 35,
  },
  {
    id: 3,
    img: '../img/herobaner2.png',
    text: 'X whiteportion',
    price: '230kr - 10st',
    navigateId: 34,
  },
  { id: 4, img: '../img/herobaner3.jpg', text: 'GOAT Snus', price: '299kr - 10st', navigateId: 33 },
])

const currentIndex = ref(0)

onMounted(() => {
  const intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % items.value.length
  }, 10000)

  onBeforeUnmount(() => {
    clearInterval(intervalId)
  })
})
</script>

<template>
  <section class="hero-banner">
    <div
      class="img-container"
      v-for="(item, index) in items"
      :key="index"
      :class="{ active: currentIndex === index }"
    >
      <img :src="item.img" :alt="'Hero Banner' + index" />
      <div class="text-overlay">
        <p>
          {{ item.text }} <span class="price">{{ item.price }}</span>
        </p>
        <router-link :to="{ path: `snus/${item.navigateId}` }">
          <button>Köp</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 300px;
  margin: 20px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 0;
}

.hero-banner .img-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 1;
}

.hero-banner .img-container.active {
  opacity: 1;
  z-index: 2;
}

.hero-banner img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.text-overlay {
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 10px 0;
  background-color: #0569ccfa;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 3;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.text-overlay p {
  width: auto;
  font-size: 25px;
  font-weight: bold;
  margin-right: 1rem;
}

.text-overlay button {
  background-color: #ff6600;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
}

.text-overlay button:hover {
  background-color: #ff4500;
}

.price {
  color: white;
}
</style>
