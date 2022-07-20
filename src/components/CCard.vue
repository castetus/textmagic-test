<template>
  <div class="c-card">
    <div class="c-card__header">
      <span class="c-card__type"></span>
      <span class="c-card__date">{{dateToDisplay}}</span>
    </div>
    <div class="c-card__title">{{cardTitle}}</div>
    <div class="c-card__subtitle">{{cardSubtitle}}</div>
    <div class="c-card__footer">
      <div class="c-card-footer-content">
        <c-card-status v-if="cardStatus.length" :text="cardStatus"/>
        <span class="c-card__footer-text">{{cardFootertext}}</span>
        <c-card-priority :priority="cardPriority"/>
      </div>
      <div class="c-card-footer-avatar">
        <c-avatar size="sm" :link="cardAvatarLink"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CCardStatus from './CCardStatus.vue';
import CAvatar from './CAvatar.vue';

export default {
  name: 'CCard',
  props: {
    cardType: {
      type: String,
      default: (): string => '',
    },
    cardStatus: {
      type: String,
      default: (): string => '',
    },
    cardDate: {
      type: Date,
      default: new Date(),
    },
    cardTitle: {
      type: String,
      default: (): string => '',
    },
    cardSubtitle: {
      type: String,
      default: (): string => '',
    },
    cardFootertext: {
      type: String,
      default: (): string => '',
    },
    cardPriority: {
      type: String,
      default: (): string => '',
    },
    cardAvatarLink: {
      type: String,
      default: (): string => '',
    },
  },
  components: {
    CCardStatus,
    CAvatar,
  },
  computed: {
    dateToDisplay() {
      return this.cardDate.toLocaleDateString();
    },
  },
};
</script>

<style scoped lang="scss">
  .c-card {
    background: $BGWhite;
    max-width: 644px;
    margin: 0 0 8px 46px;
    padding: 16px 16px 18px;
    &__header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
    &__footer {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
    &__type {

    }
    &__date {

    }
    &__title {

    }
    &__subtitle {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
