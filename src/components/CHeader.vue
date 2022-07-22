<template>
  <header class="c-header">
    <q-header>
      <q-toolbar>

        <c-menu>
          <template v-slot:button={toggle}>
            <c-button
              text="Create"
              bgColor="#008CFF"
              textColor="#fff"
              @click="toggle">
            </c-button>
          </template>
          <template v-slot:menu>
            <CCreateMenu/>
          </template>
        </c-menu>

        <CTextField prependIcon="search" label="Search TextMagic workspace" />
        <q-space />

        <c-menu>
          <template v-slot:button={toggle}>
            <c-button
              :text="currentStatus"
              bgColor="#F7F7FC"
              textColor="#6E7191">
              <template v-slot:prepend>
                <q-icon name="circle"/>
              </template>
            </c-button>
          </template>
          <template v-slot:menu>
            <CStatusMenu/>
          </template>
        </c-menu>

        <CIconButton icon="today"/>
        <CIconButton icon="notifications"/>
        <CIconButton icon="settings"/>

        <c-menu>
          <template v-slot:button={toggle}>
            <c-button
              text="TextMagic"
              bgColor="#ffffff"
              textColor="#6E7191">
              <template v-slot:append>
                <c-avatar size="sm" :link="headerAvatarLink"/>
              </template>
            </c-button>
          </template>
          <template v-slot:menu>
            <CUserMenu/>
          </template>
        </c-menu>

      </q-toolbar>
    </q-header>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CButton from './CButton.vue';
import CAvatar from './CAvatar.vue';
import CTextField from './CTextField.vue';
import CIconButton from './CIconButton.vue';
import CMenu from './CMenu.vue';
import CCreateMenu from './CCreateMenu.vue';
import CUserMenu from './CUserMenu.vue';
import CStatusMenu from './CStatusMenu.vue';

export default defineComponent({
  name: 'CHeader',
  components: {
    CButton,
    CAvatar,
    CTextField,
    CIconButton,
    CMenu,
    CCreateMenu,
    CUserMenu,
    CStatusMenu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    headerAvatarLink(): string {
      return require('../assets/user_avatar_small.png');
    },
    currentStatus(): string {
      return 'Online';
    },
  },
  methods: {
    toggle() {
      console.log('test');
    },
  },
});
</script>

<style scoped lang="scss">
  .q-header {
    padding: 8px 32px;
    background: $BGWhite;
  }
</style>
