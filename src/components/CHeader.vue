<template>
  <header class="c-header">
    <q-header>
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
    </q-header>
  </header>
</template>

<script lang="ts">
import CButton from './CButton.vue';
import CAvatar from './CAvatar.vue';

export default {
  name: 'CHeader',
  components: {
    CButton,
    CAvatar,
  },
  computed: {
    headerAvatarLink(): string {
      // eslint-disable-next-line global-require
      return require('../assets/user_avatar_small.png');
    },
  },
};
</script>

<style scoped lang="scss">
  .q-header {
    padding: 8px 32px;
    background: $BGWhite;
  }
</style>
