<script setup lang="ts">
const {supabase} = useSupabase()
const {user} = useAuth()

const notesInput = reactive({
  title: '',
  note: '',
});

const handleSubmit = async () => {
  if (!notesInput.title || !notesInput.note) return;
  await supabase.from('notes').insert({
    title: notesInput.title,
    note: notesInput.note,
    user_id: user.value.id
  })

  notesInput.title = ''
  notesInput.note = ''
}
</script>

<template>
  <NCard class="card">
    <input type="text" class="input" placeholder="My notes title" v-model="notesInput.title" />
    <textarea class="input" placeholder="My note" v-model="notesInput.note"></textarea>
    <NButton @click="handleSubmit">Save Note</NButton>
  </NCard>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
.input {
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.2rem;
}
</style>