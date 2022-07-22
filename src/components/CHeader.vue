<template>
  <header class="c-header">
    <q-header>
      <q-toolbar>
        <c-button
          text="Create"
          bgColor="#008CFF"
          textColor="#fff"
          @click="showMenu ? showMenu = false : showMenu = true">
          <template v-slot:prepend>
            <q-icon name="circle"/>
          </template>
        </c-button>
        <CTextField prependIcon="search" label="Search TextMagic workspace" />
        <q-space />
        <c-button
          :text="currentStatus"
          bgColor="#F7F7FC"
          textColor="#6E7191"
          @click="showMenu ? showMenu = false : showMenu = true">
          <template v-slot:prepend>
            <q-icon name="circle"/>
          </template>
        </c-button>
        <CIconButton icon="today"/>
        <CIconButton icon="notifications"/>
        <CIconButton icon="settings"/>
        <c-button
          text="TextMagic"
          bgColor="#ffffff"
          textColor="#6E7191"
          @click="showMenu ? showMenu = false : showMenu = true">
          <template v-slot:append>
            <c-avatar size="sm" :link="headerAvatarLink"/>
          </template>
        </c-button>
      </q-toolbar>
    </q-header>
  </header>
</template>

<script lang="ts">
import CButton from './CButton.vue';
import CAvatar from './CAvatar.vue';
import CTextField from './CTextField.vue';
import CIconButton from './CIconButton.vue';

export default {
  name: 'CHeader',
  components: {
    CButton,
    CAvatar,
    CTextField,
    CIconButton,
  },
  computed: {
    headerAvatarLink(): string {
      return require('../assets/user_avatar_small.png');
    },
    currentStatus(): string {
      return 'Online';
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
