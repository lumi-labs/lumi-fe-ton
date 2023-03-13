<template>
  <div>
    <q-dialog v-model="showDialog"  persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6 text-black">Count</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense type="number" v-model="count" class="text-black" autofocus />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Donate" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</div>
</template>
<script>

import { ref } from 'vue'

export default {
  name: 'Donate',
  props: {
    note: {
      type: Object,
      required: true,
    },
    flavor: {
      type: String,
      default: 'list',
    },
  },
  setup() {
    return {
      count: ref(''),
      showDialog: ref(false)
    }
  },
  computed: {

  },
  methods: {
    show() {
      this.showDialog = true
    }
  }

}
</script>

<style lang="scss" scoped>
::v-deep .q-dialog__backdrop   {
  background: rgba(0,0,0,.8);
}

</style>
