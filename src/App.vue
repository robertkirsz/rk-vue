<template>
  <transition name="fade-in" appear>
    <div id="app">
      <media-queries v-if="debug" />
      <transition name="fade-in">
        <intro-content v-if="!showMainContent" @pageChosen="pageChosen" />
        <main-content v-else />
      </transition>
    </div>
  </transition>
</template>

<script>
  import MainContent  from 'components/MainContent/MainContent'
  import IntroContent from 'components/IntroContent/IntroContent'
  import MediaQueries from 'components/MediaQueries'

  export default {
    name: 'App',
    components: {
      MainContent,
      IntroContent,
      MediaQueries
    },
    data () {
      return {
        showMainContent: this.$route.path !== '/', // Shows main routes with navbar
        debug: true // Shows media queries
      }
    },
    methods: {
      pageChosen () {
        this.showMainContent = true
      }
    }
  }
</script>

<style lang="scss">
  @import "styles/animations";
  @import "styles/main";

  #app {
    @extend %full-size;
    @extend %transition;
    position: relative;
    perspective: 1200px;
    transform-style: preserve-3d;
    overflow: hidden;
  }

  .fade-in-enter-active {
    @extend .fadeIn;
  }
</style>
