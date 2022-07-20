<template>
  <q-layout view="lHh lpr lFf">
    <c-header>
    </c-header>
    <c-drawer :items="menuItems"></c-drawer>
    <q-page-container :style="`background: ${mainBackground}`">
      <CTopSection
        :buttons="topSectionButtons"
        :tabs="topSectionTabs"
        userName="User Name"
        companyName="Company Name"
      />
      <c-menu :modelValue="showMenu" @update:modelValue="showMenu = $event"></c-menu>
      <CCard v-for="(card, index) in cards" :key="index" v-bind="card"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';
import CHeader from './components/CHeader.vue';
import CDrawer from './components/CDrawer.vue';
import CTopSection from './components/CTopSection.vue';
import CAvatar from './components/CAvatar.vue';
import CMenu from './components/CMenu.vue';
import CCard from './components/CCard.vue';

import {
  CARDS, MENU_ITEMS, TOP_SECTION_BUTTONS, TOP_SECTION_TABS,
} from './fakeApi';

export default {
  name: 'LayoutDefault',

  components: {
    CHeader,
    CDrawer,
    CTopSection,
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
      topSectionButtons: TOP_SECTION_BUTTONS,
      topSectionTabs: TOP_SECTION_TABS,
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
