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

</style>
