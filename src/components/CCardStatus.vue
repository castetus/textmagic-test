<template>
  <div class="c-card-status">
    <q-chip
      outline
      :color="color"
      :text-color="color"
    >
      {{text}}
    </q-chip>
  </div>
</template>

<script>
export default {
  name: 'CCardStatus',
  props: {
    text: {
      type: String,
    },
    color: {
      type: String,
    },
    BGColor: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
  .c-card-status {
    margin-right: 25px;
  }
</style>

<style>
  .c-card-status .q-chip__content {
    text-transform: uppercase;
    font: normal 10px/14px "SegoeUIBold", serif;
    letter-spacing: 0.6px;
  }
</style>
