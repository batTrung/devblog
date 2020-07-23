<template>
    <component :is="this.$route.meta.layout || 'base-layout'"></component>
</template>

<script>
import Base from './layouts/Base.vue'

export default {
  name: 'App',
  components: {
    'base-layout': Base,
  },
}
</script>
