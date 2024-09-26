<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-6">Эмулятор чата</h1>
    <div class="flex space-x-4 w-full max-w-4xl">
      <ChatWindow user="User1" />
      <ChatWindow user="User2" />
    </div>
  </div>
</template>

<script setup>
import ChatWindow from './components/ChatWindow.vue'
</script>
