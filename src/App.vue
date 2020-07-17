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

<style>
  .avatar-sm {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.5rem;
    color: #fff;
    text-align: center;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  color: #2a354f;
}
.text-gray, .text-gray:hover {
    color: #869ab8!important;
}
.page {
  border-bottom: solid 1px #eceff0;
  padding-top: 24px;
}
</style>
