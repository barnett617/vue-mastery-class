<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} of {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const capacity = ref(3)
    const attending = ref(["Tim", "Bob", "Joe"])
    function increaseCapacity() {
      capacity.value++
    }
    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length
    })

    return { capacity, increaseCapacity, attending, spacesLeft }
  }
}
</script>