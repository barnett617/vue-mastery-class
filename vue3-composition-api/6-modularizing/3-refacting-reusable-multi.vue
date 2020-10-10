<template>
  <div></div>
</template>
<script>
import useSpaceEvent from './use/event-space.js'
import useMapping from './use/mapping.js'
export default {
  setup() {
    // return useSpaceEvent()
    return { ...useSpaceEvent(), ...useMapping() }
  }
}
</script>