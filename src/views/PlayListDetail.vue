<template>
    <div class="section bg-main min-vh-100">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="card bg-transparent border-0">
                        <div class="b-playlist">
                            <div
                                class="v-img"
                                @mouseover="hoverPlayListId = true"
                                @mouseleave="hoverPlayListId = false">
                                <img
                                    v-for="(post, index) in playlist.posts.slice(1, 3)"
                                    :key="index"
                                    v-lazy="post.photo"
                                    :class="'l-' + (2 - index)">
                                <router-link
                                    :to="{ name: 'playlist-detail', params: { slug: playlist.slug } }">
                                    <img v-lazy="playlist.posts[0].photo" class="l-3">
                                </router-link>
                                <div class="items">{{ playlist.posts.length }}</div>
                                <div
                                    class="v-add left"
                                    @click="onStar(playlist.user.username, playlist.slug)"
                                    v-show="hoverPlayListId == true">
                                    <i
                                        class="fas fa-star text-warning"
                                        v-tooltip="'Xóa star ' + playlist.title"
                                        v-if="playlist.users_star.includes(currentUser.username)">
                                    </i>
                                    <i
                                        v-tooltip="'Thêm star ' + playlist.title"
                                        class="far fa-star text-gray"
                                        v-else></i>
                                </div>
                            </div>
                        </div>
                        <div class="card-body bg-white shadow-sm">
                            <div class="post-meta mb-2 small text-gray">
                                <span class="mr-3"><i class="ti ti-eye text-dark mr-1"></i>{{ playlist.views }}</span>
                                <span class="mr-3"><i class="fas fa-star text-warning mr-1"></i>{{ playlist.users_star.length }}</span>
                                <span class=""><i class="ti ti-timer text-primary mr-1"></i>{{ playlist.timesince }} trước</span>
                            </div>
                            <router-link
                                :to="{ name: 'playlist-detail', params: { slug: playlist.slug } }">
                                <h6 class="font-weight-normal">{{ playlist.title }}</h6>
                            </router-link>
                            <div class="small d-flex align-items-center py-2">
                                <b-avatar button :variant="playlist.user.username|generateColor" :src="playlist.user.photo" class="align-baseline mr-1" v-if="playlist.user.photo"></b-avatar>
                                <b-avatar button :variant="playlist.user.username|generateColor" :text="playlist.user.username|generateAvatar" class="align-baseline mr-1" v-else></b-avatar>
                                <a href="javascript:void(0)">{{ playlist.user.username }}</a>
                            </div>
                            <div v-show="playlist.user.username == currentUser.username">
                                <div
                                    class="d-flex align-items-center justify-content-between text-muted small">
                                    <div>
                                        <i class="fas fa-lock fa-sm mr-1"></i> {{ playlist.status_display }}
                                    </div>
                                    <b-dropdown
                                        variant="link"
                                        no-caret
                                        right>
                                        <template v-slot:button-content>
                                            <i class="fas fa-ellipsis-v text-gray"></i>
                                        </template>
                                        <b-dropdown-item>
                                            <div
                                                class="d-flex justify-content-between"
                                                v-b-modal.delete-playlist>
                                                Xóa
                                                <i class="fas fa-trash-alt text-danger"></i>
                                            </div>
                                        </b-dropdown-item>
                                        <b-dropdown-item>
                                            <div
                                                class="d-flex justify-content-between"
                                                v-b-modal.edit-playlist
                                                @click="onEditPlayList(playlist)">
                                                Sửa
                                                <i class="far fa-edit text-primary"></i>
                                            </div>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <b-modal
                    id="delete-playlist"
                    title="Xóa danh sách"
                    hide-footer
                    centered>
                    <p>
                        Bạn có chắc muốn xóa danh sách "{{ playlist.title }}"
                    </p>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-secondary mr-2" @click="$bvModal.hide('delete-playlist')">Quay lại</button>
                        <button class="btn btn-danger" @click="deletePlayList()">Xóa</button>
                    </div>
                </b-modal>
                <b-modal
                    id="edit-playlist"
                    title="Sửa danh sách"
                    hide-footer
                    centered>
                    <b-form>
                        <b-form-group
                            label="Tên danh sách">
                            <b-form-input v-model="playListForm.title"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Trạng thái">
                            <b-form-select v-model="playListForm.status">
                                <b-form-select-option value="public">Công khai</b-form-select-option>
                                <b-form-select-option value="private">Ẩn</b-form-select-option>
                            </b-form-select>
                        </b-form-group>
                    </b-form>
                    <div class="d-flex justify-content-end">
                        <button
                            class="btn btn-secondary mr-2"
                            @click="$bvModal.hide('edit-playlist')">
                            Quay lại
                        </button>
                        <button
                            class="btn btn-success"
                            @click="onSubmitPlayListForm()"
                            >
                            Cập nhật
                        </button>
                    </div>
                </b-modal>
                <div class="col-12 col-md-8">
                    <b-overlay
                        :show="isShowOverlay"
                        opacity="0.8"
                        rounded="sm">
                        <div class="d-flex justify-content-between mb-3">
                            <h6 class="mt-3">{{ playlist.posts.length }} <span class="font-weight-bold">Bài viết</span></h6>
                            <b-nav>
                                <b-nav-item-dropdown right>
                                <template slot="button-content">
                                    Sắp xếp <i class="fas fa-sort-amount-up"></i>
                                </template>
                                <b-dropdown-item
                                    :class="getActiveClass(postsQuery.ordering, '-created')"
                                    @click.prevent="postsQuery.ordering = '-created'">Mới cập nhật</b-dropdown-item>
                                <b-dropdown-item
                                    :class="getActiveClass(postsQuery.ordering, '-views')"
                                    @click.prevent="postsQuery.ordering = '-views'">Xem nhiều</b-dropdown-item>
                                <b-dropdown-item
                                    :class="getActiveClass(postsQuery.ordering, '-users_like')"
                                    @click.prevent="postsQuery.ordering = '-users_like'">Nhiều lượt thích</b-dropdown-item>
                            </b-nav-item-dropdown>
                            </b-nav>
                        </div>
                        <div class="row"
                            v-if="posts.length">
                            <div
                                class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2"
                                v-for="(post, index) in posts"
                                :key="index">
                                <div
                                    class="card h-100 d-flex flex-column justify-content-between border-light bb-red"
                                    @mouseover="hoverPostId = index"
                                    @mouseleave="hoverPostId = null">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-12 col-lg-6 col-xl-4 p-2">
                                            <a
                                                target="_blank"
                                                :href="post.link"
                                                class="position-relative">
                                                <img 
                                                    v-lazy="post.photo"
                                                    :alt="post.title"
                                                    class="card-img p-2"
                                                    style="max-height: 240px">
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
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-8">
                                            <div class="card-body">
                                               <a :href="post.link" target="_blank">
                                                    <h4 class="h5">{{ post.title }}</h4>
                                                </a>
                                                <div class="d-flex my-3">
                                                    <div class="post-meta mb-2 small text-gray">
                                                        <span class="mr-3">
                                                            <i class="ti ti-eye text-dark mr-1"></i>
                                                            {{ post.views }}
                                                        </span>
                                                        <span class="mr-3">
                                                            <i class="far fa-heart text-danger mr-1"></i>
                                                            {{ post.users_like.length }}
                                                        </span>
                                                        <span>
                                                            <i class="ti ti-timer text-primary mr-1"></i>
                                                            {{ post.timesince }} trước
                                                        </span>
                                                    </div>
                                                </div>
                                                <router-link
                                                    class="small"
                                                    :to="{ name: 'page-detail', params: { name: post.website.name }}">
                                                    <b-avatar
                                                        :src="post.website.photo"
                                                        class="mr-1">   
                                                    </b-avatar>
                                                    {{ post.website.name }}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-12 pb-4">
                                <VLoading :show="isLoading" />
                            </div>
                        </div>
                        <div class="text-center" v-else>
                            <p>Danh sách trống</p>
                        </div>
                    </b-overlay>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { generateAvatar, generateColor } from '@/common/filters'
import {
    PLAYLIST_DELETE,
    FETCH_PLAYLIST,
    FETCH_POSTS,
} from '@/store/actions.type'
import {
    MESSAGE_SET,
} from '@/store/mutations.type'
import { PlayListsService, PostsService } from '@/common/api.service'
import VLoading from '@/components/VLoading'
import { activeClass, onScroll } from '@/common/mixins'

export default {
    name: 'PlayListDetail',
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    beforeRouteEnter(to, from, next) {
        const payload = {
            params: to.query,
            slug: to.params.slug,
        }
        Promise.all([
            store.dispatch(FETCH_PLAYLIST, payload),
        ]).then(() => {
            next();
        })
        .catch(() => {
            next({
                name: 'not-found',
            })
        });
    },
    mixins: [
        activeClass,
        onScroll,
    ],
    data() {
        return {
            page: 1,
            hasNext: true,
            isLoading: false,
            hoverPostId: null,
            isShowOverlay: true,
            hoverPlayListId: null,
            playListForm: {
                title: '',
                status: '',
            },
            postsQuery: {
                ordering: '-created',
            },
        }
    },
    filters: {
        generateAvatar,
        generateColor,
    },
    components: {
        VLoading,
    },
    watch: {
        postsQuery: {
            handler() {
                this.isShowOverlay = true
                this.fetchPosts()
                    .then(() => {
                        this.isShowOverlay = false
                    })
            },
            deep: true,
        },
    },
    computed: {
        getPayload() {
            return {
                params: this.$route.query,
                slug: this.slug,
            }
        },
        getParams() {
            return Object.assign(
                { playlist: this.slug },
                this.postsQuery,
            )
        },
        ...mapGetters(['playlist', 'isAuthenticated', 'currentUser', 'posts'])
    },
    methods: {
        fetchPosts() {
            return this.$store.dispatch(
                FETCH_POSTS,
                this.getParams,
            )
        },
        fetchPlayList() {
            this.$store.dispatch(FETCH_PLAYLIST, this.getPayload)
                .catch(() => {
                    this.$router.push({ name: 'not-found' })
                })
        },
        onStar(username, slug) {
            if (this.isAuthenticated) {
                const vslug = `${username}/${slug}/star`
                PlayListsService.update(vslug)
                    .then(() => {
                        this.fetchPlayList()
                    })
            } else {
                this.gotoLogin()
            }
        },
        deletePlayList() {
            this.$store.dispatch(PLAYLIST_DELETE, this.slug)
                .then(() => {
                    this.$store.commit(
                        MESSAGE_SET,
                        `Danh sách đã được xóa`,
                    )
                    this.$bvModal.hide('delete-playlist')
                    this.$router.push({ name: 'my-playlist' })
                })
        },
        onEditPlayList(playlist) {
            this.playListForm.title = playlist.title
            this.playListForm.status = playlist.status
        },
        onSubmitPlayListForm() {
            PlayListsService.update(this.slug, this.playListForm)
                .then(() => {
                    this.fetchPlayList()
                    this.$bvModal.hide('edit-playlist')
                })
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
    },
    mounted() {
        this.fetchPosts()
            .then(() => {
                this.isShowOverlay = false
                this.scroll(PostsService, this.posts)
            })
    },
}
</script>
