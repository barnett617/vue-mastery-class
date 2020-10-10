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
import { ref } from 'vue'
export default {
  setup() {
    const capacity = ref(3)
    const attending = ref(["Tim", "Bob", "Joe"])
    function increaseCapacity() {
      capacity.value++
    }

    return { capacity, increaseCapacity, attending }
  },
  computed: {
    spacesLeft() {
      return this.capacity - this.attending.length
    }
  }
}
</script>