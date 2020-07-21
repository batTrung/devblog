<template>
    <div id="app" class="bg-main" style="min-height: 100vh">
      <TheNav />
      <TheHeader
        class="mb-6"
        v-show="isAuthenticated" />
      <main class="container my-4">
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

