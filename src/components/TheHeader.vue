<template>
    <div class="nav-scroller bg-white box-shadow border-bottom">
        <div class="container">
            <div class="d-flex justify-content-between">
                <nav class="nav nav-underline">
                    <div class="nav-link text-dark mb-0">
                        Go to:
                    </div>
                    <a class="nav-link text-dark mb-0 h5" href="#" v-tooltip="'Bài viết xem sau'">
                        <i class="ti ti-timer"></i>
                    </a>
                    <router-link
                        :to="{ name: 'my-playlist' }"
                        class="nav-link text-dark mb-0 h5"
                        v-tooltip="'Danh sách của tôi'">
                        <i class="ti ti-layers-alt"></i>
                    </router-link>
                    <router-link
                        :to="{ name: 'posts-liked' }"
                        class="nav-link text-dark mb-0 h5"
                        v-tooltip="'Bài viết đã thích'">
                        <i class="ti ti-heart"></i>
                    </router-link>
                </nav>
                <div class="mt-1">
                    <a href="#" class="icon icon-shape icon-shape-success rounded-circle">
                        <i class="ti ti-plus"></i>
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
