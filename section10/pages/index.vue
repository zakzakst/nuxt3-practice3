<script setup lang="ts">
const { supabase } = useSupabase();
// supabase.auth.sign
</script>

<template>
  <div>
  {{supabase}}
    <div class="container">
      <AuthCard />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
