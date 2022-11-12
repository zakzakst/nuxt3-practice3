<script setup lang="ts">
const {signOut, isLoggedIn} = useAuth();
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">Profile</NuxtLink>
      </li>
      <li v-if="isLoggedIn()" @click="signOut">Logout</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #000;
  height: 10vh;
}
ul {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 5rem;
}
li {
  color: white;
  margin-right: 2re;
}
</style>
