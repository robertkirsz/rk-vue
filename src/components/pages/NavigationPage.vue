<template>
  <div
    class="navigation-page"
    :class="chosenLink && 'opened'"
  >
    <router-link
      v-for="link in links"
      @click.native="click(link)"
      tag="div"
      :to="`/${link}`"
      class="tile"
      :class="[
        `tile--${link}`,
        { 'opened': chosenLink === link }
      ]"
    >
      <span class="tile__content">
        {{ link }}
      </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavigationPage',
    data () {
      return {
        links: ['me', 'skills', 'works', 'contact'],
        chosenLink: null
      }
    },
    methods: {
      click (link) {
        this.chosenLink = link
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";

  .navigation-page {
    @extend %absolute;
    @extend %transition;
    @extend %full-size;
    &.opened .tile:not(.opened) { background: #333; }
    .tile {
      @extend %flex-center;
      @extend %transition;
      position: absolute;
      cursor: pointer;
      z-index: 10;
      &--me {
        top: 0; right: 50%; bottom: 50%; left: 0;
        background: $green;
      }
      &--skills {
        top: 0; right: 0; bottom: 50%; left: 50%;
        background: $orange;
      }
      &--works {
        top: 50%; right: 50%; bottom: 0; left: 0;
        background: $red;
      }
      &--contact {
        top: 50%; right: 0; bottom: 0; left: 50%;
        background: $blue;
      }
      &.opened {
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: 11;
        .tile__content { opacity: 0; }
      }
      &__content {
        @extend %temp-font;
        @extend %transition;
        text-transform: capitalize;
      }
    }
  }
</style>
