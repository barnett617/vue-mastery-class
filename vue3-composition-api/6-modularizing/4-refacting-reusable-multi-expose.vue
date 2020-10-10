<template>
  <div></div>
</template>
<script>
import useSpaceEvent from './use/event-space.js'
import useMapping from './use/mapping.js'
export default {
  setup() {
    const { capacity, attending, spacesLeft, increaseCapacity } = useSpaceEvent()
    const { map, embedId } = useMapping()
    return { capacity, attending, spacesLeft, increaseCapacity, map, embedId }
  }
}
</script> 