<template>
  <button class="button is-primary" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'my-button',
};
</script>

<style>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
