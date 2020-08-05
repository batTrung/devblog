<template>
    <div id="app">
      <TheNav />
      <TheHeader
        class="mb-6"
        v-show="isAuthenticated" />
      <main>
        <router-view />
      </main>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

import TheNav from '@/components/TheNav.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'Base',
  computed: {
      ...mapGetters(['isAuthenticated'])
  },
  components: {
    TheNav,
    TheHeader,
  },
}
</script>

