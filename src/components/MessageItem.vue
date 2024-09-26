<template>
    <div :class="messageClass" class="relative p-2 border rounded-md">
        <div class="flex items-start">
            <div class="flex-1">
                <span :class="textColorClass">{{ message.user }}:</span>
                <span>{{ message.text }}</span>
                <div class="text-xs text-gray-400">{{ formatTimestamp(message.timestamp) }}</div>
            </div>

            <button v-if="message.user === currentUser" @click="deleteMessage"
                class="ml-4 text-red-500 text-sm self-start hover:underline">
                Удалить
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    message: {
        type: Object,
        required: true,
    },
    currentUser: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(['deleteMessage']);

const messageClass = computed(() => {
    return props.message.user === props.currentUser ? 'text-right mb-2' : 'text-left mb-2';
});

const textColorClass = computed(() => {
    return props.message.user === props.currentUser ? 'text-blue-500' : 'text-green-500';
});

function deleteMessage() {
    emit('deleteMessage', props.index);
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
}
</script>