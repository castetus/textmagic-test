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
      default: (): string => '#fff',
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
  computed: {
    SIZES() {
      return {
        sm: '32px',
        md: '36px',
      };
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
    height: v-bind(SIZES[size]);
    background: v-bind(bgColor);
    color: v-bind(textColor);
    border-radius: 4px;
    padding: 7px 12px;
    font: $buttonMedium;
    cursor: pointer;
    &__text {
    }
    // &:hover {

    // }
  }
</style>
