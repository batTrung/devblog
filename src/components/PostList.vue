<template>
    <b-overlay
        :show="isShowOverlay"
        opacity="0.8"
        rounded="sm">
        <div class="row" v-if="posts.length !== 0">
            <div class="col-lg-3 col-md-4 col-sm-6 my-2" v-for="(post, index) in posts.slice(0, numPost)" :key="index">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm" @mouseover="hoverPostId = index" @mouseleave="hoverPostId = null">
                    <a :href="post.link" @click="increaseViewPost(post.slug)" target="_blank" class="position-relative">
                        <img v-lazy="post.photo" class="card-img-top p-1" :alt="post.title" style="width: 100%; height: 169px">
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
                        <a :href="post.link" @click="increaseViewPost(post.slug)" target="_blank">
                            <div class="mb-2 h6 font-weight-normal">{{ post.title }}</div>
                        </a>
                        <router-link
                            class="small"
                            :to="{ name: 'page-detail', params: { name: post.website.name }}">
                            <b-avatar
                                :src="post.website.photo"
                                class="mr-1">   
                            </b-avatar>
                            {{ post.website.name|truncatechars(25) }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div
                class="col-12"
                v-show="!numPost">
                <VLoading :show="isLoading" />
            </div>
            <b-modal
                id="post-modal"
                centered
                title="Lưu bài viết"
                size="sm"
                no-stacking>
                <b-form-checkbox
                    name="checkbox-1"
                    value="accepted"
                    size="lg"
                    >
                    <div class="d-flex justify-content-between">
                        <small>Xem sau</small>
                        <i class="ti ti-timer ml-3"></i>
                    </div>
                </b-form-checkbox>
                <b-form-checkbox
                    name="checkbox-1"
                    value="accepted"
                    size="lg">
                    <div class="d-flex justify-content-between">
                        <small>Danh sách mới</small>
                        <i class="ti ti-layers-alt ml-3"></i>
                    </div>
                </b-form-checkbox>
                <template
                    v-slot:modal-footer
                    class="text-center d-block">
                    <a
                        href="javascript:void(0)"
                        v-b-modal.add-playlist>
                        <i class="fas fa-plus text-gray mr-2"></i> Tạo danh sách mới
                    </a>
                </template>
            </b-modal>
            <b-modal
                id="add-playlist"
                title="Tạo danh sách mới"
                hide-footer>
                <b-form>
                    <b-form-group
                        label="Tên danh sách">
                        <b-form-input></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Trạng thái">
                        <b-form-select>
                            <b-form-select-option value="public">Công khai</b-form-select-option>
                            <b-form-select-option value="private">Ẩn</b-form-select-option>
                        </b-form-select>
                    </b-form-group>
                </b-form>
                <div class="d-flex justify-content-end">
                    <button
                        class="btn btn-secondary mr-2"
                        @click="$bvModal.hide('add-playlist')">
                        Đóng
                    </button>
                    <button class="btn btn-primary">Lưu</button>
                </div>
            </b-modal>
        </div>
        <div class="text-center" v-else>
            <p>Không tìm thấy bài viết nào</p>
        </div>
    </b-overlay>
</template>
<script>
import { mapGetters } from "vuex"
import {
    FETCH_POSTS,
} from "../store/actions.type"
import { PostsService } from "@/common/api.service"
import { truncatechars } from '@/common/filters'
import VLoading from '@/components/VLoading'

export default {
    name: 'PostList',
    props: {
        numPost: {
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
                    liked: '',
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
            isShowOverlay: true,
            hasNext: true,
        }
    },
    watch: {
        query: {
            handler() {
                this.isShowOverlay = true
                setTimeout(() => {
                    this.fetchPosts()
                    this.isShowOverlay = false
                }, 300)
            },
            deep: true,
        },
    },
    computed: {
        getParams() {
            return Object.assign(
                this.query,
                { website: this.website },
            )
        },
        ...mapGetters(['posts', 'currentUser', 'isAuthenticated'])
    },
    methods: {
        fetchPosts() {
            this.page = 1
            this.hasNext = true
            return this.$store.dispatch(FETCH_POSTS, this.getParams)
        },
        onLikePost(slug) {
            if (this.isAuthenticated) {
                PostsService.update(`${slug}/like`)
                    .then(() => {
                        this.fetchPosts()
                    })
            } else {
                this.gotoLogin()
            }
        },
        increaseViewPost(slug) {
            PostsService.update(`${slug}/view`)
        },
        scroll() {
            window.onscroll = () => {
                const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 200 > document.documentElement.offsetHeight
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
    mounted() {
        this.fetchPosts()
            .then(() => {
                this.isShowOverlay = false
                this.scroll()
            })
    },
}
</script>
