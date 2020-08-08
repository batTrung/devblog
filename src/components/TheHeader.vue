<template>
    <div class="nav-scroller bg-white box-shadow border-bottom position-sticky">
        <div class="container">
            <div class="d-flex justify-content-between">
                <nav class="nav nav-underline">
                    <div class="nav-link text-dark mb-0">
                        Go to:
                    </div>
                    <a class="nav-link text-dark mb-0 h5" href="#" v-tooltip="'Bài viết xem sau'">
                        <i class="far fa-clock"></i>
                    </a>
                    <router-link
                        :to="{ name: 'my-playlist' }"
                        class="nav-link text-dark mb-0 h5"
                        v-tooltip="'Danh sách của tôi'">
                        <i class="fas fa-layer-group"></i>
                    </router-link>
                    <router-link
                        :to="{ name: 'posts-liked' }"
                        class="nav-link text-dark mb-0 h5"
                        v-tooltip="'Bài viết đã thích'">
                        <i class="far fa-heart"></i>
                    </router-link>
                </nav>
                <div class="my-1">
                    <a href="#" class="icon icon-shape icon-shape-success rounded-circle">
                      <i class="fas fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'TheHeader',
    computed: {
      ...mapGetters(['currentUser'])
    },
}
</script>

<style>
.position-sticky {
    position: -webkit-sticky !important;
    position: sticky !important;
    top: 0;
    z-index: 100;
}
</style>