<template>
  <div>Capacity: {{ capacity }}</div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const capacity = ref(3)
    return { capacity }
  }
}
</script>