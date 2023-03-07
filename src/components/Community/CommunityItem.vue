<template>
  <div>
    <q-card class="text-white" style="width: 100%;background:#15202b">
      <q-card-section>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <span class=" q-ml-md">Title</span>
        <div class="text-h6 q-mt-md">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
        <q-btn color="white" text-color="black" class="q-mt-md" label="Join Community" />
        <q-btn color="white" text-color="black" class="q-mt-md q-ml-md" label="Join Chat" />

      </q-card-section>
    </q-card>
  </div>
</template>

<script>

export default {
  name: 'CommunityItem',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {

  },
}
</script>

<style lang="scss"></style>
