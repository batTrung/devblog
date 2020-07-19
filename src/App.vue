<template>
  <div id="app" class="bg-main">
    <TheNav class="mb-6" />
    <main class="container my-4" style="min-height: 100vh">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheNav from './components/TheNav.vue'

export default {
  name: 'App',
  components: {
    TheNav,
  }
}
</script>

