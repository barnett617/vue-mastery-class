<template>
  <div>
    Search for <input type="text" v-model="searchInput" />
    <div>
      <p>Numbers of events: {{ results }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watchEffect } from 'vue'
import eventApi from '../api/event.js'
export default {
  setup() {
    const searchInput = ref('')
    const results = ref(0)

    watchEffect(() => {
      results.value = eventApi.getEventCount(searchInput.value)
    })

    return { searchInput, results }
  }
}
</script>