<template>
  <div class="c-avatar">
    <q-avatar :size="size">
      <img :src="link">
    </q-avatar>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CAvatar',
  props: {
    size: {
      type: String,
      default: (): string => 'sm',
    },
    link: {
      type: String,
      default: (): string => '',
    },
  },
};
</script>

<style>

</style>
