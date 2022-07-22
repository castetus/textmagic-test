<template>
  <div class="c-icon-button">
    <q-btn
      flat
      round
      :icon="icon"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'CIconButton',
  props: {
    icon: {
      type: String,
      default: (): string => '',
    },
    color: {
      type: String,
      default: (): string => '#6E7191',
    },
  },
};
</script>

<style>
  .c-icon-button {
    color: v-bind(color);
  }
</style>
