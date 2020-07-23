<template>
    <b-overlay :show="isShowOverlay" opacity="0.6" rounded="sm">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 my-2"
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
                                :src="post.photo_url"
                                :class="'l-' + (2 - index)">
                            <a href="#">
                                <img :src="playlist.posts[0].photo_url" class="l-3">
                            </a>
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
                    <div class="card-body bg-white shadow-sm">
                        <div class="post-meta mb-2 small text-gray">
                            <span class="mr-3"><i class="ti ti-eye text-dark mr-1"></i>{{ playlist.views }}</span>
                            <span class="mr-3"><i class="fas fa-star text-warning mr-1"></i>{{ playlist.users_star.length }}</span>
                            <span class=""><i class="ti ti-timer text-primary mr-1"></i>{{ playlist.timesince }} trước</span>
                        </div>
                        <a href="">
                            <h6 class="font-weight-normal">{{ playlist.title }}</h6>
                        </a>
                        <div class="small d-flex align-items-center">
                            <b-avatar button :variant="playlist.user.username|generateColor" :src="playlist.user.photo" class="align-baseline mr-1" v-if="playlist.user.photo"></b-avatar>
                            <b-avatar button :variant="playlist.user.username|generateColor" :text="playlist.user.username|generateAvatar" class="align-baseline mr-1" v-else></b-avatar>
                            <a target="_blank" href="">{{ playlist.user.username }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-show="!numPlayList">
                <VLoading :show="isLoading" />
            </div>
        </div>
    </b-overlay>
</template>
<script>
import { mapGetters } from "vuex"
import VLoading from '@/components/VLoading'
import { generateAvatar, generateColor } from '@/common/filters'
import {
    FETCH_PLAYLISTS,
} from "../store/actions.type"
import { PlayListsService } from "@/common/api.service"

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
    data() {
        return {
            page: 1,
            hoverPlayListId: null,
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
                this.fetchPlayLists()
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
    mounted() {
        this.fetchPlayLists()
        this.scroll()
    },
    methods: {
        fetchPlayLists() {
            this.page = 1
            this.hasNext = true
            this.$store.dispatch(FETCH_PLAYLISTS, this.getParams)
        },
        onStar(username, slug) {
            if (this.isAuthenticated) {
                PlayListsService.update(`${username}/${slug}/star`)
                    .then(() => {
                        this.fetchPlayLists()
                    })
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
                    PlayListsService.query(params)
                        .then(({ data }) => {
                            this.isLoading = true
                            setTimeout(() => {
                                this.isLoading = false
                                this.playLists.push(...data.results)
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