<template>
  <div>
    <h1>(404) Page not found!</h1>
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
</template>

<script>
export default {
  name: '404',
}
</script>
