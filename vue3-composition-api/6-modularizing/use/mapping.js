import { ref } from 'vue'
export default function useMapping() {
  const embedId = ref(1)
  function map () {
    console.log('map')
  }
  return { map, embedId }
}