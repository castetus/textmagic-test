<template>
  <div class="c-text-field">
    <q-input
      outlined
      dense
      style="height: 36px"
    >
      <template v-slot:prepend>
        <q-icon :name="prependIcon" />
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CTextField',
  props: {
    prependIcon: {
      type: String,
      default: (): string => '',
    },
    label: {
      type: String,
      default: (): string => '',
    },
    height: {
      type: String,
      default: (): string => '36px',
    },
    width: {
      type: String,
      default: (): string => '',
    },
  },
};
</script>

<style scoped lang="scss">
  .q-field__control {
    height: v-bind(height);
  }
</style>
