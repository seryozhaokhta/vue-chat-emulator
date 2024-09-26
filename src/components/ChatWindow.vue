<template>
    <div class="flex flex-col h-full border rounded-lg p-4">
        <div class="flex-1 overflow-y-auto mb-4">
            <MessageItem v-for="(message, index) in messages" :key="index" :message="message" :currentUser="user"
                :index="index" @deleteMessage="deleteMessage" />
        </div>
        <form @submit.prevent="sendMessage" class="flex">
            <input v-model="newMessage" @keyup.enter="sendMessage" type="text" placeholder="Введите сообщение..."
                class="flex-1 border rounded-l px-2 py-1 focus:outline-none" />
            <button type="submit" class="bg-blue-500 text-white px-4 py-1 rounded-r">
                Отправить
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useChatStore } from "../stores/chatStore.js";
import MessageItem from "./MessageItem.vue";

const props = defineProps({
    user: {
        type: String,
        required: true,
    },
});

const chatStore = useChatStore();
const messages = chatStore.messages;
const newMessage = ref("");

function sendMessage() {
    const text = newMessage.value.trim();
    if (text !== "") {
        chatStore.addMessage(props.user, text);
        newMessage.value = "";
    }
}

function deleteMessage(index) {
    chatStore.deleteMessage(index);
}
</script>

