<script>
import EditorView from './components/EditorView.vue';
import { ref } from 'vue'

export default {
    // `setup` is a special hook dedicated for the Composition API.
    setup() {
        const count = ref(0)

        function increment() {
            // .value is needed in JavaScript
            count.value++
        }

        // expose the ref to the template
        return {
            count,
            increment
        }
    }
}

</script>
<template >
    <EditorView />

</template>
