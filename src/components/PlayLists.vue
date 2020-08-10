<template>
    <b-overlay
        :show="isShowOverlay"
        opacity="0.8"
        rounded="sm">
        <div class="row" v-if="playLists.length !== 0">
            <div
                class="col-lg-3 col-md-4 col-sm-6 my-2"
                v-for="(playlist, index) in playLists.slice(0, numPlayList)"
                :key="index">
                <div class="card h-100 d-flex flex-column justify-content-between bg-transparent border-0">
                    <div class="b-playlist">
                        <div
                            class="v-img"
                            @mouseover="hoverPlayListId = index"
                            @mouseleave="hoverPlayListId = null">
                            <img
                                v-for="(post, index) in playlist.posts.slice(1, 3)"
                                :key="index"
                                v-lazy="post.photo"
                                :class="'l-' + (2 - index)">
                            <router-link
                                :to="{ name: 'playlist-detail', params: { slug: playlist.slug }, query: getQuery() }">
                                <img
                                    v-lazy="playlist.posts[0].photo"
                                    class="l-3">
                            </router-link>
                            <div class="items">{{ playlist.posts.length }}</div>
                            <div
                                class="v-add left"
                                @click="onStar(playlist.user.username, playlist.slug)"
                                v-show="hoverPlayListId == index">
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
                    <div class="card-body bg-white shadow-sm border-bottom">
                        <div class="post-meta mb-2 small text-gray">
                            <span class="mr-3">
                                <i class="ti ti-eye text-dark mr-1"></i>
                                {{ playlist.views }}
                            </span>
                            <span class="mr-3">
                                <i class="fas fa-star text-warning mr-1"></i>
                                {{ playlist.users_star.length }}
                            </span>
                            <span>
                                <i class="ti ti-timer text-primary mr-1"></i>
                                {{ playlist.timesince }} trước
                            </span>
                        </div>
                        <router-link :to="{ name: 'playlist-detail', params: { slug: playlist.slug }, query: getQuery() }">
                            <h6 class="font-weight-normal">{{ playlist.title }}</h6>
                        </router-link>
                        <div class="small d-flex align-items-center">
                            <b-avatar
                                class="align-baseline mr-1"
                                button
                                :variant="playlist.user.username|generateColor"
                                :src="playlist.user.photo"
                                v-if="playlist.user.photo">
                            </b-avatar>
                            <b-avatar
                                class="align-baseline mr-1"
                                button
                                :variant="playlist.user.username|generateColor"
                                :text="playlist.user.username|generateAvatar"
                                v-else>
                            </b-avatar>
                            <a href="javascript:void(0)">{{ playlist.user.username }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-show="!numPlayList">
                <VLoading :show="isLoading" />
            </div>
        </div>
        <div class="text-center" v-else>
            <p>Không tìm thấy danh sách nào</p>
        </div>
    </b-overlay>
</template>
<script>
import { mapGetters } from 'vuex'
import VLoading from '@/components/VLoading'
import { generateAvatar, generateColor } from '@/common/filters'
import {
    FETCH_PLAYLISTS,
} from '../store/actions.type'
import { PlayListsService } from '@/common/api.service'
import { onScroll } from '@/common/mixins'

export default {
    name: 'PlayLists',
    props: {
        numPlayList: {
            type: Number,
            required: false,
        },
        owner: {
            required: false,
            default: '',
        },
        query: {
            type: Object,
            required: false,
            default: () => {
                return {
                    ordering: '-users_star',
                    search: '',
                }
            },
        },
    },
    filters: {
        generateAvatar,
        generateColor,
    },
    components: {
        VLoading,
    },
    mixins: [
        onScroll,
    ],
    data() {
        return {
            page: 1,
            hoverPlayListId: null,
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
                    this.fetchPlayLists()
                    this.isShowOverlay = false
                }, 300)
            },
            deep: true,
        },
    },
    computed: {
        getParams() {
            return this.owner ? Object.assign(this.query, { owner: this.owner }) : this.query
        },
        ...mapGetters(['playLists', 'isAuthenticated', 'currentUser'])
    },
    methods: {
        fetchPlayLists() {
            this.page = 1
            this.hasNext = true
            return this.$store.dispatch(FETCH_PLAYLISTS, this.getParams)
        },
        onStar(username, slug) {
            if (this.isAuthenticated) {
                const vslug = `${username}/${slug}/star` 
                PlayListsService.update(vslug)
                    .then(() => {
                        this.fetchPlayLists()
                    })
            } else {
                this.gotoLogin()
            }
        },
        getQuery() {
            return this.owner ? { owner: this.owner } : {}
        },
    },
    mounted() {
        this.fetchPlayLists()
            .then(() => {
              this.isShowOverlay = false
              this.scroll(PlayListsService, this.playLists)
            })
    },
}
</script>