<template>
  <q-page class="community">
    <h1>community</h1>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Community',
  components: {

  },
  setup() {
    return {

    }
  },
  data() {
    return {

    }
  },

  watch: {
    activeTab() {
      this.$router.replace({
        params: {
          tab: this.activeTab,
        },
      })
    },
  },

})
</script>

<style lang="scss" scoped>
@import "assets/theme/colors.scss";
@import "assets/variables.scss";


@media screen and (max-width: $phone-lg) {
  .profile {
    &-header {
      display: flex;
      padding: 1rem;
      &-avatar {
        height: 96px;
        width: 96px;
      }
    }
  }
}
</style>
