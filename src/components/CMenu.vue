<template>
  <div class="c-menu">
    <slot name="button" :toggle="toggleHandler"></slot>
    <q-menu v-model="showMenu">
      <slot name="menu"></slot>
    </q-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleHandler() {
      // eslint-disable-next-line no-unused-expressions
      this.showMenu ? this.showMenu = true : this.showMenu = false;
    },
  },
});
</script>

<style></style>
