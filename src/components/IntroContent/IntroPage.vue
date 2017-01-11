<template>
  <div class="intro-page">
    <div class="content">
      <h1>Robert Kirsz</h1>
      <h2>Frontend developer</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IntroPage',
    data () {
      return {
        text: 'Header'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";

  .intro-page {
    @extend %flex-center;
    @extend %temp-font;
    @extend %transition;
    @extend %full-size;
    background: $light-blue;
    user-select: none;
    cursor: default;
    .content {
      text-align: center;
    }
  }
</style>
