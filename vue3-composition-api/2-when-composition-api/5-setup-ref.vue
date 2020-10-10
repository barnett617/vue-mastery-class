<template>
  <div>Capacity: {{ capacity }}</div>
</template>
<script>
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const capacity = ref(3)
    return { capacity }
  }
}
</script>