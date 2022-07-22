<template>
  <div class="c-card">
    <div class="c-card__icon-wrapper">
      <div class="c-card__status-icon">
        <q-icon :name="icon"></q-icon>
      </div>
      <div class="c-card__icon-tale"></div>
    </div>
    <div class="c-card__header">
      <span class="c-card__type">{{cardType}}</span>
      <span class="c-card__date">{{dateToDisplay}}</span>
    </div>
    <div class="c-card__title">{{cardTitle}}</div>
    <div class="c-card__subtitle">{{cardSubtitle}}</div>
    <div class="c-card__footer">
      <div class="c-card__footer-content">
        <c-card-status v-if="cardStatus.length" :text="cardStatus"/>
        <span class="c-card__footer-text">{{cardFootertext}}</span>
        <span class="c-card__priority"
          >
          <q-icon :name="cardPriorityIcon.icon" :style="`color: ${cardPriorityIcon.color}`"/>
          {{capitalizedPriority}}
        </span>
      </div>
      <div class="c-card__footer-avatar">
        <c-avatar size="sm" :link="cardAvatarLink"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { capitalize } from '../utils/helpers';
import CCardStatus from './CCardStatus.vue';
import CAvatar from './CAvatar.vue';

type PriorityType = {
  icon: string,
  color: string
}

const CARD_TYPE_MAP = {
  task: 'check_box',
  deal: 'monetization_on',
  ticket: 'email',
  campaign: 'campaign',
};

const CARD_PRIORITY_MAP = {
  low: {
    icon: 'south',
    color: '#69BC35',
  },
  high: {
    icon: 'nord',
    color: '#69BC35',
  },
  urgent: {
    icon: 'keyboard_double_arrow_up',
    color: '#ED6A61',
  },
};

export default defineComponent({
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
    dateToDisplay(): string {
      return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(this.cardDate);
    },
    icon(): string {
      return CARD_TYPE_MAP[this.cardType as keyof typeof CARD_TYPE_MAP];
    },
    capitalizedPriority(): string {
      return capitalize(this.cardPriority);
    },
    cardPriorityIcon(): PriorityType {
      return CARD_PRIORITY_MAP[this.cardPriority as keyof typeof CARD_PRIORITY_MAP];
    },
  },
});
</script>

<style scoped lang="scss">
  .c-card {
    position: relative;
    background: $BGWhite;
    max-width: 644px;
    margin: 0 0 8px 46px;
    padding: 16px 16px 18px;
    border-radius: 4px;
    &__icon-wrapper {
      height: 100%;
      padding-top: 10px;
      position: absolute;
      top: 0;
      align-items: center;
      left: -46px;
      display: flex;
      flex-direction: column;
    }
    &__status-icon {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $BGWhite;
      color: $textIconDistinct;
      margin-bottom: 8px;
    }
    &__icon-tale {
      width: 1px;
      height: calc(100% - 46px);
      background: $softGrey;
    }
    &__header, &__footer, &__footer-content {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
    &__type {
      font: $captionCaps12;
      text-transform: uppercase;
    }
    &__date {
      font: $textRegular14;
    }
    &__title {
      font: $subheadSemibold16;
    }
    &__subtitle {
      width: calc(100% - 60px);
      font: $textRegular14;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__status-icon {

    }
    &__footer-text {
      font: $textSemibold14;
      margin-right: 16px;
    }
    &__priority {

    }
  }
</style>
