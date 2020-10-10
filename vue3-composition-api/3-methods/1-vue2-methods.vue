<template>
  <div>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      capacity: 3
    }
  },
  methods: {
    increaseCapacity() {
      this.capacity++
    }
  }
}
</script>