<template>
  <img
    :alt="alt"
    :src="src"
    :class="classWithModifiers('avatar', classModifiers)"
  >
</template>

<script lang="ts">
import { classWithModifiers } from '@/utils/css';

export default {
  name: 'Avatar',
  methods: {
    classWithModifiers,
  },
  props: {
    src: {
      default: '',
      type: String,
    },
    classModifiers: {
      default: () => [],
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>

$sizes: ("xs": 3rem, "s": 4rem, "m": 5rem, "l": 6rem); //map
.avatar {
  $defaultSize: map-get($sizes, "m");
  @include circleIt($defaultSize);
  @each $key, $value in $sizes { // @each
    &--#{$key} {
      @include circleIt($value);
    }
  }
}
</style>
