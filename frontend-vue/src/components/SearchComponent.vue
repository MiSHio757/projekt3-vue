<script setup>
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
  border-radius: 20px;
  outline: none;
  transition: color 0.3s ease;
}

.search-input:focus {
  border-color: #ff6600;
  border-radius: 25px;
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
</style>
