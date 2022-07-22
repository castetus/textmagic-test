<template>
<div class="test">
  <q-list style="min-width: 100px">
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="primary" name="bluetooth" />
      </q-item-section>
      <q-item-section>Icon as avatar</q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>
