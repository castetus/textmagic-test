<template>
  <div class="c-status-menu-item">
    <div class="c-status-menu-item__content">
      <div class="c-status-menu-item__icon">
        <slot name="icon"></slot>
      </div>
      <div class="c-status-menu-item__text">{{text}}</div>
    </div>
    <div class="c-status-menu-item__toggler" v-if="toggler">
      <q-toggle
        v-model="value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: String,
    toggler: Boolean,
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get(): boolean {
        return this.value;
      },
      set(val: boolean) {
        this.$emit('update:modelValue', val);
      },
    },
  },
});
</script>

<style scoped lang="scss">
  .c-status-menu-item {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__icon {
      padding: 13px 10px 11px 12px;
    }
  }
</style>
