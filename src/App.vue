<template>
    <component :is="layout"></component>
</template>

<script>
import { mapGetters } from "vuex";

import Base from './layouts/Base.vue'
import Full from './layouts/Full.vue'
import Nav from './layouts/Nav.vue'

export default {
  name: 'App',
  components: {
    'base-layout': Base,
    'full-layout': Full,
    'nav-layout': Nav,
  },
  computed: {
    ...mapGetters(['layout'])
  },
}
</script>
