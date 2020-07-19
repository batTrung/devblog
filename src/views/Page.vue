<template>
    <div>
        <div class="container-fluid bg-green">
            <div class="row pb-5">
                <div class="container my-5 text-center">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="card border-light text-center mb-4">
                <div class="profile-thumbnail mx-auto mt-n6">
                    <img src="https://demo.themesberg.com/spaces/assets/img/team/profile-picture-1.jpg" class="card-img-top rounded-circle border-0" alt="Jose Avatar">
                </div>
                <div class="card-body">
                    <h2 class="h4 card-title mb-2">Jose Leos</h2>
                    <ul class="list-unstyled d-flex justify-content-center mt-3 mb-0">
                        <li><a href="#" target="_blank" aria-label="facebook social link" class="icon-facebook mr-3"><span class="fab fa-facebook-f"></span></a></li>
                        <li><a href="#" target="_blank" aria-label="twitter social link" class="icon-twitter mr-3"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="#" target="_blank" aria-label="dribbble social link" class="icon-google mr-3"><span class="fab fa-google"></span></a></li>
                    </ul>
                    <p class="my-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <ul class="list-inline mt-2">
                    <li class="list-inline-item mr-3">
                        <h5>Bài viết</h5>
                    </li>
                    <li class="list-inline-item mr-3 active">
                        <a href="" :class="getActiveClass(postsOrder, 'created')" @click.prevent="postsOrder = 'created'">Mới cập nhật</a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a href="" :class="getActiveClass(postsOrder, '-views')" @click.prevent="postsOrder = '-views'">Xem nhiều</a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a href="" :class="getActiveClass(postsOrder, '-users_saved')" @click.prevent="postsOrder = '-users_saved'">Nhiều lượt thích</a>
                    </li>
                </ul>
                <b-form>
                    <div class="input-group bg-white rounded-pill border mr-2 mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-transparent border-0">
                                <i class="ti ti-search"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control border-0 pb-2 mr-4 pl-0" placeholder="Tìm kiếm bài viết" required="">
                    </div>
                </b-form>
            </div>
            <PostList :ordering="postsOrder" />
        </div>
    </div>
</template>

<script>
import PostList from '@/components/PostList'
import {
    SET_LAYOUT,
} from '@/store/mutations.type'
import store from '@/store'

export default {
    name: 'Page',
    title() {
        return this.$route.params.name
    },
    beforeRouteEnter(to, from, next) {
        store.commit(SET_LAYOUT, 'nav-layout')
        next()
    },
    beforeRouteLeave(to, from, next) {
        store.commit(SET_LAYOUT, 'base-layout')
        next()
    },
    components: {
        PostList,
    },
    data() {
        return {
            postsOrder: 'created',
        }
    },
    methods: {
        getActiveClass(a, b) {
            return a == b ? 'active' : ''
        },
    }
}
</script>
