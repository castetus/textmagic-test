<template>
  <q-layout view="lHh lpr lFf">
    <c-header>
    </c-header>
    <c-drawer :items="menuItems"></c-drawer>
    <q-page-container :style="`background: ${mainBackground}`">
      <section class=""></section>
      <c-menu :modelValue="showMenu" @update:modelValue="showMenu = $event"></c-menu>
      <CCard v-for="(card, index) in cards" :key="index" v-bind="card"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';
import CHeader from './components/CHeader.vue';
import CDrawer from './components/CDrawer.vue';
import CButton from './components/CButton.vue';
import CAvatar from './components/CAvatar.vue';
import CMenu from './components/CMenu.vue';
import CCard from './components/CCard.vue';

import { CARDS, MENU_ITEMS } from './fakeApi';

export default {
  name: 'LayoutDefault',

  components: {
    CHeader,
    CDrawer,
    CMenu,
    CCard,
  },

  data() {
    return {
      showMenu: false,
    };
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
      // eslint-disable-next-line global-require
      headerAvatarLink: require('./assets/user_avatar_small.png'),
      cards: CARDS,
      menuItems: MENU_ITEMS,
    };
  },

  computed: {
    mainBackground() {
      return '#E5E8EA';
    },
  },

  methods: {
    switch(val: boolean): void {
      console.log(val);
    },
  },
};
</script>
