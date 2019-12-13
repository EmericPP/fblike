<template>
  <div :class="classWithModifiers('status', classModifiers)">
    <Avatar
      :alt="alt"
      :src="src"
      :classModifiers="classModifiers"
    />
    <div class="status__icon"></div>
  </div>
</template>

<script lang="ts">
import { classWithModifiers } from '@/utils/css';
import Avatar from './Avatar.vue';

export default {
  name: 'AvatarWithStatus',
  components: { Avatar },
  methods: {
    classWithModifiers,
  },
  props: {
    status: { default: false, type: Boolean },
    classModifiers: { default: () => [], type: Array },
    alt: { default: '', type: String },
    src: { default: '', type: String },
  },
};
</script>

<style lang="scss" scoped>
  .status {
    display: inline-block;
    position: relative;
    &__icon {
      position: absolute;
      bottom: 0;
      right: 0;
      @include circleIt(1rem);
      background: $color-green;
      border: 2px solid white;
    }
  }
</style>
