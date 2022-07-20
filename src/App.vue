<template>
  <main class="main">
    <HelloWorld />
    <c-button
      text="Create"
      bgColor="#008CFF"
      textColor="#fff"
      @click="showMenu ? showMenu = false : showMenu = true">
      <template v-slot:prepend>
        <q-icon name="circle"/>
      </template>
      <template v-slot:append>
        <c-avatar size="sm" :link="headerAvatarLink"/>
      </template>
    </c-button>
    <c-menu :modelValue="showMenu" @update:modelValue="showMenu = $event"></c-menu>
    <CCard v-for="(card, index) in cards" :key="index" v-bind="card"/>
  </main>
</template>

<script lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import CButton from './components/CButton.vue';
import CAvatar from './components/CAvatar.vue';
import CMenu from './components/CMenu.vue';
import CCard from './components/CCard.vue';

import { CARDS } from './fakeApi';

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld,
    CButton,
    CAvatar,
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
    };
  },

  methods: {
    switch(val: boolean): void {
      console.log(val);
    },
  },
};
</script>
