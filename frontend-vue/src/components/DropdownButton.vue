<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isDropdownVisible = ref(false)

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
}

const closeDropdown = (event) => {
  if (!event.target.closest('.dropdown-button') && !event.target.closest('.dropdown-menu')) {
    isDropdownVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <button class="dropdown-button" @click="toggleDropdown" :class="{ active: isDropdownVisible }">
    <i :class="isDropdownVisible ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down'"></i>
  </button>
  <div :class="{ 'dropdown-menu': true, show: isDropdownVisible }">
    <div class="dropdown-section">
      <h3>Kategori 1</h3>
      <ul>
        <li><a href="#">Underkategori 1</a></li>
        <li><a href="#">Underkategori 2</a></li>
        <li><a href="#">Underkategori 3</a></li>
      </ul>
    </div>
    <div class="dropdown-section">
      <h3>Kategori 2</h3>
      <ul>
        <li><a href="#">Underkategori 1</a></li>
        <li><a href="#">Underkategori 2</a></li>
        <li><a href="#">Underkategori 3</a></li>
      </ul>
    </div>
    <div class="dropdown-section">
      <h3>Kategori 3</h3>
      <ul>
        <li><a href="#">Underkategori 1</a></li>
        <li><a href="#">Underkategori 2</a></li>
        <li><a href="#">Underkategori 3</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dropdown-button {
  background-color: transparent;
  color: white;
  border: none;
  padding: 30px 20px;
  cursor: pointer;
}

.dropdown-button i {
  font-size: 20px;
}

.dropdown-button:hover {
  background-color: #043f7a;
}

.dropdown-button:active {
  background-color: #f9f9f9;
  color: #5aa3f6;
  border: none;
}
.dropdown-button i:active {
  transform: rotate(180deg);
  background-color: #f9f9f9;
  color: #5aa3f6;
  border: none;
}
.header {
  position: relative;
}

/* Mega Dropdown */
.dropdown-menu {
  position: absolute;
  top: 5rem;
  left: 0;
  width: 99.9%;
  height: 500px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 999999;
  display: none;
}
.dropdown-menu.show {
  display: block;
}

.dropdown-section {
  margin-right: 15px;
}

.dropdown-section h3 {
  font-size: 18px;
  color: #0057af;
  margin-bottom: 10px;
}

.dropdown-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-section ul li {
  margin-bottom: 8px;
}

.dropdown-section ul li a {
  text-decoration: none;
  color: #333;
}

.dropdown-section ul li a:hover {
  color: #0057af;
}
</style>
