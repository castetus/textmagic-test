<template>
  <div class="c-button">
    <slot name="prepend"></slot>
      <span class="c-button__text">{{text}}</span>
    <slot name="append"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CButton',
  props: {
    size: {
      type: String,
      default: (): string => 'md',
    },
    bgColor: {
      type: String,
      default: (): string => '',
    },
    iconSize: {
      type: String,
      default: (): string => '',
    },
    iconName: {
      type: String,
      default: (): string => '',
    },
    text: {
      type: String,
      default: (): string => '',
    },
    textColor: {
      type: String,
      default: (): string => '#6E7191',
    },
  },
};
</script>

<style scoped lang="scss">
  .c-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background: v-bind(bgColor);
    color: v-bind(textColor);
    border-radius: 4px;
    padding: 7px 12px;
    cursor: pointer;
    &__text {
    }
    // &:hover {

    // }
  }
</style>
