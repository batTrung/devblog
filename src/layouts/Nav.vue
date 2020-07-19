<template>
    <div id="app" class="bg-main" style="min-height: 100vh">
        <TheNav class="mb-6" />
        <main>
          <router-view />
        </main>
    </div>
</template>

<script>
import TheNav from '@/components/TheNav.vue'

export default {
  name: 'Nav',
  components: {
    TheNav,
  }
}
</script>
