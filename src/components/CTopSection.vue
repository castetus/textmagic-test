<template>
  <section class="top-section">
    <div class="top-section__title">
      <CAvatar size="56px" :link="userAvatarLink" />
      <div class="top-section__content">
        <div class="top-section__username">{{userName}}</div>
        <div class="top-section__companyname">
          {{companyName}}
          <q-icon name="north_east"></q-icon>
        </div>
      </div>
    </div>
    <div class="top-section__actions">
      <div class="top-section__tabs">
        <q-tabs no-caps v-model="currentTab">
          <q-tab
            v-for="(tab, index) in tabs"
            :key="index"
            :name="tab.name"
            :label="tab.text"
          >
            <q-badge
              v-if="tab.counter"
              color="transparent"
              floating
            >
              {{tab.counter}}
            </q-badge>
          </q-tab>
        </q-tabs>
      </div>
      <div class="top-section__buttons">
        <c-button
          v-for="(button, index) in buttons"
          :key="index"
          :text="button.text"
          size="sm"
        >
          <template v-slot:prepend>
            <q-icon :name="button.icon"/>
          </template>
        </c-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CButton from './CButton.vue';
import CAvatar from './CAvatar.vue';

export default defineComponent({
  name: 'TopSection',
  props: {
    userName: {
      type: String,
      default: (): string => '',
    },
    companyName: {
      type: String,
      default: (): string => '',
    },
    buttons: {
      type: Array,
      default: (): [] => [],
    },
    tabs: {
      type: Array,
      default: (): [] => [],
    },
    modelValue: {
      type: String,
      default: (): string => '',
    },
  },
  components: {
    CButton,
    CAvatar,
  },
  computed: {
    userAvatarLink(): string {
      return require('../assets/user_avatar_big.png');
    },
    currentTab: {
      get(): string {
        return this.modelValue;
      },
      set(value: string): void {
        this.$emit('update:modelValue', value);
      },
    },
  },
});
</script>

<style scoped lang="scss">
  .top-section {
    width: 100%;
    height: 160px;
    background-image: url('../assets/background_pattern.png');
    padding: 32px 32px 8px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
    }
    &__username {
      font: $pageTitle20;
      letter-spacing: -0.3px;
    }
    &__companyname {
      font: $textRegular14;
    }
    &__content {
      margin-left: 16px;
    }
    &__actions {
      display: flex;
      justify-content: space-between;
    }
    &__buttons {
      display: flex;
      justify-content: end;
      align-items: end;
    }
    &__tabs {
      position: relative;
      top: 8px;
      font: $textSemibold14;
      & .q-tab {
        padding: 0;
        margin-right: 32px;
      }
      & .q-tab__indicator {
        color: $fillsAction;
      }
      & .q-tab .q-badge {
        color: $textIconLight;
        bottom: 4px;
      }
    }
    & .c-button {
      margin-left: 8px;
    }
  }
</style>
