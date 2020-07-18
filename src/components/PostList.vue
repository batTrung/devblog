<template>
    <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 my-2" v-for="(post, index) in posts.slice(0, num_post)" :key="index">
            <div
                class="card h-100 d-flex flex-column justify-content-between shadow-sm"
                @mouseover="hoverPostId = index"
                @mouseleave="hoverPostId = null">
                <a
                    :href="post.link"
                    target="_blank"
                    class="position-relative">
                    <img
                        :src="post.photo"
                        class="card-img-top p-1"
                        :alt="post.title"
                        style="width: 100%; height: 169px">
                </a>
                <div class="v-add left" v-show="hoverPostId == index" v-tooltip="'Thích bài viết'"><i class="far fa-heart text-gray"></i></div>
                <b-dropdown variant="link" class="v-add right" right v-show="hoverPostId == index">
                    <template v-slot:button-content>
                        <i class="fas fa-plus"></i>
                    </template>
                    <b-dropdown-item href="#" class="py-2 p-0"><i class="ti ti-timer mr-2"></i> Xem sau</b-dropdown-item>
                    <div class="dropdown-divider"></div>
                    <b-dropdown-item href="#" class="py-2 p-0"><i class="ti ti-layers-alt mr-2"></i> Thêm vào danh sách</b-dropdown-item>
                </b-dropdown>
                <div class="card-body">
                    <div class="post-meta mb-2 small text-gray">
                        <span class="mr-3"><i class="ti ti-eye text-dark mr-1"></i>{{ post.views }}</span>
                        <span class="mr-3"><i class="far fa-heart text-danger mr-1"></i>{{ post.users_saved.length }}</span>
                        <span class=""><i class="ti ti-timer text-primary mr-1"></i>{{ post.timesince }} trước</span>
                    </div>
                    <a :href="post.link" target="_blank">
                        <div class="mb-2 h6 font-weight-normal">{{ post.title }}</div>
                    </a>
                    <div class="small">
                        <b-avatar button variant="primary" text="FF" class="align-baseline mr-1"></b-avatar>
                        <a href="">{{ post.website|truncatechars(25) }}</a>
                    </div>
                </div>
            </div>
        </div>
        <VLoading :show="isLoading" />
    </div>

</template>
<script>
import { mapGetters } from "vuex"
import { FETCH_POSTS } from "../store/actions.type"
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
            page: 2,
            isLoading: false,
        }
    },
    computed: {
        ...mapGetters(["posts"])

    },
    mounted() {
        this.fetchPosts()
        this.scroll()
    },
    methods: {
        fetchPosts() {
            this.$store.dispatch(FETCH_POSTS)
        },
        scroll() {
            let loadMore = true
             window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 200 > document.documentElement.offsetHeight;
                if (bottomOfWindow && loadMore) {
                    loadMore = false
                    PostsService.query({'page': this.page})
                        .then(({ data }) => {
                            this.isLoading = true
                            setTimeout(() => {
                                this.isLoading = false
                                this.posts.push(...data.results)
                            }, 1000)
                            this.page++
                            if (data.has_next) {
                                setTimeout(() => {
                                    loadMore = true
                                }, 1000)
                            }
                        })
                }
             }
        },
    },
}
</script>