<script setup>
import {} from 'vue'
</script>

<template>
  <div class="Login">
    <form>
      <h2>Logga In</h2>
      <div class="">
        <label for="username">Användarnamn:</label>
        <input id="username" type="text" placeholder="Ange ditt användarnamn" />
      </div>
      <div>
        <label for="password">Lösenord:</label>
        <input id="password" type="password" placeholder="Ange ditt lösenord" />
      </div>
      <button type="submit">Logga In</button>
    </form>
  </div>
</template>

<style scoped>
.Login {
  background: rgb(233, 230, 230);
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
