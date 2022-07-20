<template>
  <div class="c-menu">
    <q-menu v-model="model">
      text
    </q-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: {},

  props: {

    modelValue: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
  },

  emits: ['update:modelValue'],

  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(value: boolean) {
        console.log(value);
        this.$emit('update:modelValue', value);
      },
    },
  },
});
</script>

<style>

</style>
