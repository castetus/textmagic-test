<template>
<div class="c-create-menu">
  <q-list style="min-width: 100px">
    <q-item
      clickable
      v-ripple
      v-for="(item, index) in items"
      :key="index"
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" size="xs"/>
      </q-item-section>
      <q-item-section>{{item.text}}</q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import { TOP_SECTION_BUTTONS } from '../fakeApi';

export default defineComponent({
  data() {
    return {
      items: TOP_SECTION_BUTTONS,
    };
  },
});
</script>

<style scoped lang="scss">
  .c-create-menu {
    min-width: 188px;
    & .q-icon {
      color: $textIconDistinct;
    }
    & .q-item__section--main {
      font: $textSemibold14;
      color: $textIconNeutral;
    }
  }
</style>
