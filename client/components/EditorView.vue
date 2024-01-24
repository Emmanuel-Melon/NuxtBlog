<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
<template>
    <p class="p-4">
        <h3>Editor</h3>
    </p>
    <button class="btn btn-primary" @click="increment">Increase {{ count }}</button>
</template>