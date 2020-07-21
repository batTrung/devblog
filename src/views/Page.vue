<template>
    <div>
        <div class="container-fluid" style="background-color: #758AA2">
            <div class="row pb-5">
                <div class="container my-5 text-center">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="card border-light text-center mb-4">
                <div class="profile-thumbnail mx-auto mt-n6">
                    <b-avatar :src="page.photo" size="8rem" class="card-img-top"></b-avatar>
                </div>
                <div class="card-body pt-0">
                    <a
                        :href="page.root_url"
                        target="_blank"
                        class="h4 card-title mb-2 page-title">
                        {{ page.name }}
                    </a>
                    <ul class="list-unstyled d-flex justify-content-center mt-3 mb-0">
                        <li><a href="#" aria-label="facebook social link" class="icon-facebook mr-3"><span class="fab fa-facebook-f"></span></a></li>
                        <li><a href="#" aria-label="twitter social link" class="icon-twitter mr-3"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="#" aria-label="dribbble social link" class="icon-google mr-3"><span class="fab fa-google"></span></a></li>
                    </ul>
                    <p class="my-2">{{ page.description }}</p>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <ul class="list-inline mt-2">
                    <li class="list-inline-item mr-3">
                        <h5>Bài viết</h5>
                    </li>
                    <li class="list-inline-item mr-3 active">
                        <a href="" :class="getActiveClass(postsQuery.ordering, '-created')" @click.prevent="postsQuery.ordering = '-created'">Mới cập nhật</a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a href="" :class="getActiveClass(postsQuery.ordering, '-views')" @click.prevent="postsQuery.ordering = '-views'">Xem nhiều</a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a href="" :class="getActiveClass(postsQuery.ordering, '-users_like')" @click.prevent="postsQuery.ordering = '-users_like'">Nhiều lượt thích</a>
                    </li>
                </ul>
                <b-form>
                    <div class="input-group bg-white rounded-pill border mr-2 mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-transparent border-0">
                                <i class="ti ti-search"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            class="form-control border-0 pb-2 mr-4 pl-0"
                            placeholder="Tìm kiếm bài viết" v-model="postsQuery.search">
                    </div>
                </b-form>
            </div>
            <PostList
                :query="postsQuery"
                :website="page.name" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

import PostList from '@/components/PostList'
import {
    CHANGE_LAYOUT,
    FETCH_PAGE,
} from '@/store/actions.type'

import store from '@/store'

export default {
    name: 'Page',
    title() {
        return this.$route.params.name
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
            store.dispatch(CHANGE_LAYOUT, 'nav-layout'),
            store.dispatch(FETCH_PAGE, to.params.name),
        ]).then(() => {
            next()
        })
    },
    beforeRouteLeave(to, from, next) {
        store.dispatch(CHANGE_LAYOUT, 'base-layout')
        next()
    },
    components: {
        PostList,
    },
    data() {
        return {
            postsQuery: {
                ordering: '-created',
                language: '',
                search: '',
            },
        }
    },
    computed: {
        ...mapGetters(['page'])
    },
    methods: {
        getActiveClass(a, b) {
            return a == b ? 'color-active' : ''
        },
    }
}
</script>
