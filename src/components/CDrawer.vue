<template>
  <div class="c-drawer">
    <q-drawer
      class="bg-image"
      :style="backgroundImage"
      v-model="show"
      show-if-above
      :mini="miniState"
      :width="234"
      :mini-width="68"
      bordered
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            v-for="(item, index) in items"
            :key="index"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
              <q-badge v-if="item.counter" color="red" floating rounded :style="badgeStyle">
                {{item.counter}}
              </q-badge>
            </q-item-section>
            <q-item-section>{{item.text}}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <div class="absolute" style="bottom: 15px; left: 18px">
        <q-btn
          dense
          unelevated
          no-caps
          :icon="miniState ? 'menu' : 'menu_open'"
          @click="drawerClick()"
        >
          {{buttonText}}
        </q-btn>
      </div>
    </q-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CDrawer',
  props: {
    items: {
      type: Array,
      default: (): [] => [],
    },
  },
  data() {
    return {
      show: true,
      miniState: true,
    };
  },
  computed: {
    buttonText() {
      if (!this.miniState) {
        return 'Minimize menu';
      }
      return '';
    },
    backgroundImage() {
      return `background-image: url(${require('../assets/admin_menu_back.png')})`;
    },
    badgeStyle() {
      if (this.miniState) {
        return 'top: 6px; right: 12px';
      }
      return 'top: 14px; right: 16px';
    },
  },
  methods: {
    drawerClick() {
      this.miniState = !this.miniState;
    },
  },
});
</script>

<style scoped lang="scss">
  .c-drawer {
    color: $TextIconLight;
  }
</style>
