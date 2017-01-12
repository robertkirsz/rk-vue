<template>
  <div class="page me-page">
    {{ text }}
    <!-- <counter /> -->
  </div>
</template>

<script>
  import Counter from 'components/Counter'

  export default {
    name: 'MePage',
    data () {
      return {
        text: 'Me'
      }
    },
    components: {
      Counter
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";

  .me-page {
    background: $green;
  }
</style>
