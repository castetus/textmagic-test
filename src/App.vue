<template>
  <q-layout view="lHh lpr lFf">
    <c-header> </c-header>
    <c-drawer :items="menuItems"></c-drawer>
    <q-page-container :style="`background: ${mainBackground}`">
        <c-button
          text="Create"
          bgColor="#008CFF"
          textColor="#fff"
          @click="showMenu ? showMenu = false : showMenu = true">
          <template v-slot:prepend>
            <q-icon name="circle"/>
          </template>
        </c-button>
      <c-menu :modelValue="showMenu" @update:modelValue="showMenu = $event"></c-menu>
      <CTopSection
        :buttons="topSectionButtons"
        :tabs="topSectionTabs"
        userName="User Name"
        companyName="Company Name"
        :modelValue="currentTab"
        @update:modelValue="currentTab = $event"
      />
      <q-tab-panels v-model="currentTab" animated>
        <q-tab-panel name="activities">
          <div class="text-h6">Mails</div>
          <CCard v-for="(card, index) in cards" :key="index" v-bind="card" />
        </q-tab-panel>

        <q-tab-panel name="logs">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="visits">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="files">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';
import CHeader from './components/CHeader.vue';
import CDrawer from './components/CDrawer.vue';
import CTopSection from './components/CTopSection.vue';
import CButton from './components/CButton.vue';
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
    CButton,
  },

  data() {
    return {
      showMenu: false,
      currentTab: 'activities',
    };
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
      headerAvatarLink: require('./assets/user_avatar_small.png'),
      cards: CARDS,
      menuItems: MENU_ITEMS,
      topSectionButtons: TOP_SECTION_BUTTONS,
      topSectionTabs: TOP_SECTION_TABS,
    };
  },

  computed: {
    mainBackground(): string {
      return '#F7F7FC';
    },
  },
};
</script>
