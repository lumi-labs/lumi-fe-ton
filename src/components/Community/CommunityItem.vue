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
        <q-btn  color="white" text-color="black" class="q-mt-md q-ml-md" label="Join Chat" />
        <q-btn @click="createRoom" color="white" text-color="black" class="q-mt-md q-ml-md" label="createRoom" />


      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import EventBuilder from 'src/nostr/EventBuilder'
import { useAppStore } from 'stores/App'
import { useNostrStore } from 'src/nostr/NostrStore'
export default {
  name: 'CommunityItem',
  components: {
  },
  data() {
    return {
    }
  },
  setup() {
    return {
      app: useAppStore(),
      nostr: useNostrStore(),
    }
  },
  methods: {
    async createRoom() {
      const content = '{"name": "Demo Channel", "about": "A test channel.", "picture": "https://placekitten.com/200/200"}'
      const event = EventBuilder.createRoom(this.app.myPubkey, content).build()
      console.log(event)
      await this.app.signEvent(event)
       await this.nostr.publish(event)
    }
  },
}
</script>

<style lang="scss"></style>
