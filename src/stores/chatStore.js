import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useChatStore = defineStore("chat", () => {
  const messages = ref(JSON.parse(localStorage.getItem("chatMessages")) || []);

  function addMessage(user, text) {
    messages.value.push({ user, text, timestamp: new Date() });
  }

  function deleteMessage(index) {
    messages.value.splice(index, 1);
  }

  watch(
    messages,
    (newMessages) => {
      localStorage.setItem("chatMessages", JSON.stringify(newMessages));
    },
    { deep: true }
  );

  return { messages, addMessage, deleteMessage };
});
