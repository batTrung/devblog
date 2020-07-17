<template>
  <div id="app" class="bg-light">
    <TheNav class="mb-6" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNav from './components/TheNav.vue'

export default {
  name: 'App',
  components: {
    TheNav
  }
}
</script>

