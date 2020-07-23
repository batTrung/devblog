<template>
    <b-overlay :show="isShowOverlay" opacity="0.6" rounded="sm">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 my-2" v-for="(post, index) in posts.slice(0, num_post)" :key="index">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm" @mouseover="hoverPostId = index" @mouseleave="hoverPostId = null">
                    <a :href="post.link" target="_blank" class="position-relative">
                        <img :src="post.photo_url" class="card-img-top p-1" :alt="post.title" style="width: 100%; height: 169px">
                    </a>
                    <div
                        @click="onLikePost(post.slug)"
                        class="v-add left"
                        v-show="hoverPostId == index && isAuthenticated" v-tooltip="'Thích bài viết'">
                        <i
                            v-if="post.users_like.includes(currentUser.username)"
                            class="fas fa-heart text-danger"
                            >
                        </i>
                        <i class="far fa-heart text-gray" v-else></i>
                    </div>
                    <div
                        class="v-add right text-gray"
                        @click="$bvModal.show('post-modal')"
                        v-show="hoverPostId == index && isAuthenticated">
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="card-body">
                        <div class="post-meta mb-2 small text-gray">
                            <span class="mr-3"><i class="ti ti-eye text-dark mr-1"></i>{{ post.views }}</span>
                            <span class="mr-3"><i class="far fa-heart text-danger mr-1"></i>{{ post.users_like.length }}</span>
                            <span class=""><i class="ti ti-timer text-primary mr-1"></i>{{ post.timesince }} trước</span>
                        </div>
                        <a :href="post.link" target="_blank">
                            <div class="mb-2 h6 font-weight-normal">{{ post.title }}</div>
                        </a>
                        <router-link
                            class="small"
                            :to="{ name: 'page-detail', params: { name: post.website.name }}">
                            <b-avatar
                                :src="post.website.photo_url"
                                class="mr-1">   
                            </b-avatar>
                            {{ post.website.name|truncatechars(25) }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-12" v-show="!num_post">
                <VLoading :show="isLoading" />
            </div>
            <b-modal
                id="post-modal"
                centered title="Lưu bài viết"
                size="sm">
                <b-form-checkbox
                    name="checkbox-1"
                    value="accepted"
                    size="lg"
                    >
                    <div class="d-flex justify-content-between">
                        <small>Xem sau</small>
                        <i class="ti ti-timer float-right"></i>
                    </div>
                </b-form-checkbox>
                <b-form-checkbox
                    name="checkbox-1"
                    value="accepted"
                    size="lg"
                    >
                    <small>I accept the terms and use dsd sd sd ssds </small>
                    <i class="ti ti-layers-alt"></i>
                </b-form-checkbox>
                <template v-slot:modal-footer
                    class="text-center d-block">
                    <i class="fas fa-plus text-gray mr-2"></i> Tạo danh sách mới
                </template>
            </b-modal>
        </div>
    </b-overlay>
</template>
<script>
import { mapGetters } from "vuex"
import {
    FETCH_POSTS,
    POST_LIKE,
} from "../store/actions.type"
import { PostsService } from "@/common/api.service"
import { truncatechars } from '@/common/filters'
import VLoading from '@/components/VLoading'

export default {
    name: 'PostList',
    props: {
        num_post: {
            type: Number,
            required: false,
        },
        website: {
            type: String,
            required: false,
            default: '',
        },
        query: {
            type: Object,
            required: false,
            default: () => {
                return {
                    ordering: '-created',
                    language: '',
                    search: '',
                    topic: '',
                }
            },
        },
    },
    filters: {
        truncatechars,
    },
    components: {
        VLoading,
    },
    data() {
        return {
            hoverPostId: null,
            page: 1,
            isLoading: false,
            isShowOverlay: false,
            hasNext: true,
        }
    },
    watch: {
        query: {
            handler() {
                this.isShowOverlay = true
                setTimeout(() => {
                    this.isShowOverlay = false
                }, 300)
                this.fetchPosts()
            },
            deep: true,
        },
    },
    computed: {
        getParams() {
            return Object.assign(this.query, { website: this.website })
        },
        ...mapGetters(['posts', 'currentUser', 'isAuthenticated'])
    },
    mounted() {
        this.fetchPosts()
        this.scroll()
    },
    methods: {
        fetchPosts() {
            this.page = 1
            this.hasNext = true
            this.$store.dispatch(FETCH_POSTS, this.getParams)
        },
        onLikePost(slug) {
            if (this.isAuthenticated) {
                this.$store.dispatch(POST_LIKE, `${slug}/like`)
            } else {
                this.gotoLogin()
            }
        },
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 200 > document.documentElement.offsetHeight;
                if (bottomOfWindow && this.hasNext) {
                    this.hasNext = false
                    const params = Object.assign(
                        { page: this.page + 1 },
                        this.getParams,
                    )
                    PostsService.query(params)
                        .then(({ data }) => {
                            this.isLoading = true
                            setTimeout(() => {
                                this.isLoading = false
                                this.posts.push(...data.results)
                            }, 700)
                            this.page++
                            if (data.has_next) {
                                setTimeout(() => {
                                    this.hasNext = true
                                }, 1000)
                            }
                        })
                }
            }
        },
    },
}
</script>