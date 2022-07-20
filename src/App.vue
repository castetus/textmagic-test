<template>
  <main class="main">
    <HelloWorld />
    <c-button
      text="Create"
      bgColor="#008CFF"
      textColor="#fff">
      <template v-slot:prepend>
        <q-icon name="circle"/>
      </template>
      <template v-slot:append>
        <c-avatar size="sm" :link="headerAvatarLink"/>
      </template>
    </c-button>
  </main>
</template>

<script>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import CButton from './components/CButton.vue';
import CAvatar from './components/CAvatar.vue';

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld,
    CButton,
    CAvatar,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
      // eslint-disable-next-line global-require
      headerAvatarLink: require('./assets/user_avatar_small.png'),
    };
  },
};
</script>
