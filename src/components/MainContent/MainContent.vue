<template>
  <div>
    <page-navigation />
    <transition :name="animationDirection">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import PageNavigation from './PageNavigation'

  export default {
    name: 'MainContent',
    components: { PageNavigation },
    data () {
      return {
        animationDirection: null // Used to determine animation direction
      }
    },
    watch: {
      '$route' (to, from) {
        // Determine animation direction based on route indexes
        this.animationDirection =
          to.meta.routeIndex < from.meta.routeIndex
            ? 'slide-left'
            : 'slide-right'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/animations";

  .page {
    @extend %absolute;
    @extend %full-size;
    @include flex(column, nowrap, flex-start, center);
    z-index: 1;
    &:after {
      content: "";
      display: block;
      position: fixed;
      right: 0; bottom: 0; left: 0;
      height: 150px;
    }
  }

  .slide-right-enter-active {
    @extend .slideInRight;
  }

  .slide-right-leave-active {
    @extend .slideOutLeft;
  }

  .slide-left-enter-active {
    @extend .slideInLeft;
  }

  .slide-left-leave-active {
    @extend .slideOutRight;
  }
</style>
