<template>
  <div class="c-status-menu">
    <c-status-menu-item
      text="text"
      :toggler="true"
    >
      <template v-slot:icon>
        <img :src="OnlineStatusIcon" />
      </template>
    </c-status-menu-item>
  </div>
</template>

<script>
import CStatusMenuItem from './CStatusMenuItem.vue';
import OnlineStatusIcon from '../assets/status_online.svg';
import OfflineStatusIcon from '../assets/status_offline.svg';
import DndStatusIcon from '../assets/status_dnd.svg';
import AwayStatusIcon from '../assets/status_away.svg';

export default {
  components: {
    CStatusMenuItem,
  },
  setup() {
    return {
      OnlineStatusIcon,
      OfflineStatusIcon,
      DndStatusIcon,
      AwayStatusIcon,
      statuses: ['online', 'away', 'do not disturb', 'offline'],
      options: ['calls', 'chats'],
      currentStatus: 'online',
    };
  },
  methods: {
    clickHandler(status) {
      this.currentStatus = status;
    },
  },
};
</script>

<style scoped lang="scss">
  .c-status-menu {
    width: 188px;
    padding: 4px 0;
  }
</style>
