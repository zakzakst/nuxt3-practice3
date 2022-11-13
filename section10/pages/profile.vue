<script setup lang="ts">
const {supabase} = useSupabase()
const {user} = useAuth()

const notesResponse = ref()

if (process.client) {
  notesResponse.value = await supabase.from('notes').select().eq('user_id', user.value.id)
}

definePageMeta({
  middleware: 'auth'
})
</script>
<template>
  <div>
    <div class="container">
      <h3>My Notes</h3>
      <NotesFrom />
      <div v-if="notesResponse.data">
        <NCard v-for="note in notesResponse.data" :key="note.id">
          <h2>{{note.title}}</h2>
          <p>{{note.note}}</p>
        </NCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  padding: 3rem 0;
  height: 90vh;
}
h3 {
  font-size: 2rem;
}
</style>
