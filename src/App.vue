<template>
    <div>
        <component :is="this.$route.meta.layout || 'base-layout'"></component>
        <VMessageBottom />
    </div>
</template>

<script>
import Base from './layouts/Base.vue'
import VMessageBottom from '@/components/VMessageBottom'

export default {
  name: 'App',
  components: {
    'base-layout': Base,
    VMessageBottom,
  },
}
</script>
