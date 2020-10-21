<template>
<teleport to="#end-of-body" :disabled="!showText">
  This should be at the end.
</teleport>
<div>
  This should be at the top.
</div>
<button @click="showText = !showText">
  Toggle showText
</button>
</template>

<script>
export default {
  data() {
    return {
      showText: false
    };
  }
};
</script>
