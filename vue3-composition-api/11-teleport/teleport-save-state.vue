<template>
<teleport to="#end-of-body" :disabled="!showText">
  <video autoplay="true" loop="true" width="250">
    <source src="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" type="video/mp4">
  </video>
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
