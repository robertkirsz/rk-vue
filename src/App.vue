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
        showPageNavigation: this.$route.path !== '/' && this.$route.path !== '/nav',
        animationDirection: null, // Used to determine animation direction
        debug: false // Shows media queries
      }
    },
    watch: {
      '$route' (to, from) {
        // Determine whether to show page navigation
        this.showPageNavigation = to.path !== '/' && to.path !== '/nav'
        // Update document title
        this.title = this.showPageNavigation
          ? `Robert Kirsz - ${_capitalize(to.path.substr(1))}`
          : 'Robert Kirsz'
        // Determine animation direction based on route indexes
        this.animationDirection =
          to.meta.routeIndex < 1
            ? to.meta.routeIndex < from.meta.routeIndex
              ? 'route-animation-top'
              : 'route-animation-bottom'
            : to.meta.routeIndex < from.meta.routeIndex
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
    @extend %temp-font;
    @include flex(column, nowrap, center, center);
    &:after {
      content: "";
      display: block;
      position: fixed;
      right: 0; bottom: 0; left: 0;
      height: 150px;
    }
  }

  .intro-page { z-index: 1; }
  .navigation-page { z-index: 2; }
  .page { z-index: 3; }
  .pages-navigation { z-index: 4; }

  .route-animation {
    &-top {
      &-enter-active {
        @extend .slideInTop;
        &.intro-page { @extend .headerShow; }
      }
      &-leave-active {
        @extend .slideOutBottom;
      }
    }
    &-bottom {
      &-enter-active { @extend .slideInBottom; }
      &-leave-active {
        @extend .slideOutTop;
        &.intro-page { @extend .headerHide; }
      }
    }
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
