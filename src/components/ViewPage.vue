<!--View page -->
<template>
  <div class="container">
    <h1>{{ page.pageTitle }}</h1>
    <div v-html="page.content"></div>
    <img v-if="page.pageTitle === 'About Tic-Tac-Toe'" :src="contentImage" alt="Content Image" class="content-image" />
  </div>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {
      contentImage: new URL('./icons/tic-tac-toe.png', import.meta.url).href // Update this path
    };
  }
}
</script>

<style scoped>
.container {
  margin: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

div[ v-html] {
  font-size: 16px;
  line-height: 1.5;
}

.content-image {
  width: 30%;
  max-width: 600px;
  display: block;
  margin: 20px 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8; /* Adjust opacity to make the image a bit transparent */
}
</style>