<template>
  <transition name="fade-in" appear>
    <div id="app">
      <media-queries v-if="debug" />
      <transition name="page-navigation-animation">
        <page-navigation v-if="showPageNavigation" />
      </transition>
      <transition :name="animationDirection">
        <router-view />
      </transition>
    </div>
  </transition>
</template>

<script>
  import _capitalize from 'lodash/capitalize'
  import MediaQueries from 'components/MediaQueries'
  import PageNavigation from 'components/PageNavigation'

  export default {
    name: 'App',
    components: {
      MediaQueries,
      PageNavigation
    },
    data () {
      return {
        title: 'Robert Kirsz',
        // TODO: maybe use 'computed' for this? Need to learn more about that
        showPageNavigation: this.$route.path !== '/' && this.$route.path !== '/nav',
        animationDirection: null, // Used to determine animation direction
        debug: true // Shows media queries
      }
    },
    watch: {
      '$route' (to, from) {
        this.showPageNavigation = to.path !== '/' && to.path !== '/nav'
        // Update document title
        // TODO: Show just Robert Kirsz on home page
        this.title = `Robert Kirsz - ${_capitalize(to.path.substr(1))}`
        // Determine animation direction based on route indexes
        this.animationDirection =
          to.meta.routeIndex < from.meta.routeIndex
            ? 'route-animation-left'
            : 'route-animation-right'
      },
      title (value) {
        document.title = value
      }
    }
  }
</script>

<style lang="scss">
  @import "styles/animations";
  @import "styles/main";


  .header-animation-leave-active {
    @extend .headerHide;
  }

  .navigation-tiles-animation-enter-active {
    @extend .slideInBottom;
  }

  #app {
    @extend %full-size;
    @extend %transition;
    position: relative;
    perspective: 1200px;
    transform-style: preserve-3d;
    overflow: hidden;
  }

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

  .route-animation {
    &-left {
      &-enter-active { @extend .slideInLeft; }
      &-leave-active { @extend .slideOutRight; }
    }
    &-right {
      &-enter-active { @extend .slideInRight; }
      &-leave-active { @extend .slideOutLeft; }
    }
  }

  .page-navigation-animation {
    &-enter-active { @extend .fadeIn; }
    &-leave-active { @extend .fadeOut; }
  }
</style>
