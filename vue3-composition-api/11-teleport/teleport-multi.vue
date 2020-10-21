<template>
  <teleport to="#end-of-body" :disabled="!showText" v-if="showText">
    This should be at the end.
  </teleport>
  <teleport to="#end-of-body" :disabled="!showText2" v-if="showText2">
    This should be at the end too.
  </teleport>
  <div>
    This should be at the top.
  </div>
  <button @click="showText = !showText">
      Toggle showText
  </button>
  <button @click="showText2 = !showText2">
      Toggle showText2
  </button>
</template>
<script>
export default {
  data() {
    return {
      showText: false,
      showText2: false
    };
  }
};
</script>