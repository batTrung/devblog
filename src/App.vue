<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>
