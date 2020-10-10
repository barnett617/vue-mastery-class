import { ref, computed } from 'vue'

export default function useSpaceEvent() {
  const capacity = ref(3)
  const attending = ref(["Tim", "Bob", "Joe"])
  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length
  })
  function increaseCapacity() { capacity.value++ }
  return { capacity, increaseCapacity, attending, spacesLeft }
}