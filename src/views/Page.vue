<template>
    <div>
        <section class="section bg-nav pb-7">
            <div class="container text-center my-5">
                <h1 class="mb-3 text-white py-4">{{ page.name }}</h1>
            </div>
            <div
                class="pattern bottom"
                v-lazy:background-image="require('@/assets/images/wave.svg')">
            </div>
        </section>
        <section class="section">      
            <div class="container">
                <div class="card text-center mb-4">
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
                            <li v-for="(social, index) of page.socials"
                                :key="index">
                                <a :href="social.link" :class="'mr-3 icon-' + social.name">
                                    <span :class="'fab fa-' + social.icon"></span>
                                </a>
                            </li>
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
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control border-0 pb-2 mr-4 pl-0"
                                placeholder="Tìm kiếm bài viết" v-model.lazy="postsQuery.search"
                                @keyup="postsQuery.search = $event.target.value">
                        </div>
                    </b-form>
                </div>
                <PostList
                    :query="postsQuery"
                    :website="page.name" />
            </div>
        </section>  
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import PostList from '@/components/PostList'
import {
    FETCH_PAGE,
} from '@/store/actions.type'
import store from '@/store'
import { activeClass } from '@/common/mixins'

export default {
    name: 'Page',
    title() {
        return this.$route.params.name
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([
            store.dispatch(FETCH_PAGE, to.params.name),
        ]).then(() => {
            next()
        })
    },
    components: {
        PostList,
    },
    mixins: [
        activeClass,
    ],
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
}
</script>
