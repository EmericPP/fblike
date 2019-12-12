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
@mixin circleIt($size) {
  width: $size;
  height: $size;
  border-radius: $size;
}
$sizes: ("xs": 30px, "s": 40px, "m": 50px, "l": 60px);
.avatar {
  $defaultSize: map-get($sizes, "m");
  @include circleIt($defaultSize);
  @each $key, $value in $sizes {
    &--#{$key} {
      @include circleIt($value);
    }
  }
  background: red;
}
</style>
