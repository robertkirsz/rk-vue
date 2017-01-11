<template>
  <div>
    <transition name="header-animation">
      <intro-page
        v-if="headerVisible"
        @click.native="headerClick"
      />
    </transition>
    <transition name="navigation-tiles-animation">
      <navigation-tiles
        v-if="navigationTilesVisible"
        @pageChosen="pageChosen"
      />
    </transition>
  </div>
</template>

<script>
  import IntroPage       from './IntroPage'
  import NavigationTiles from './NavigationTiles'

  export default {
    name: 'IntroContent',
    components: {
      IntroPage,
      NavigationTiles
    },
    data () {
      return {
        headerVisible: true,
        navigationTilesVisible: false
      }
    },
    methods: {
      headerClick () {
        this.headerVisible = false
        this.navigationTilesVisible = true
      },
      pageChosen () {
        this.$emit('pageChosen')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/animations";

  .header-animation-leave-active {
    @extend .headerHide;
  }

  .navigation-tiles-animation-enter-active {
    @extend .slideInBottom;
  }
</style>
