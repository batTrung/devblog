<template>
    <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 my-2"
            v-for="(playlist, index) in playLists.slice(0, numPlayList)"
            :key="index">
            <div class="card h-100 d-flex flex-column justify-content-between bg-transparent border-0">
                <div class="b-playlist">
                    <div class="v-img" @mouseover="hoverPlayListId = index" @mouseleave="hoverPlayListId = null">
                        <img src="http://azyrusthemes.com/circlevideo/images/playlist-1.png" alt="" class="l-1">
                        <img src="http://azyrusthemes.com/circlevideo/images/video1-2.png" alt="" class="l-2">
                        <a href="">
                            <img src="http://azyrusthemes.com/circlevideo/images/video1-2.png" alt="" class="l-3">
                        </a>
                        <div class="items">{{ playlist.posts.length }}</div>
                        <div class="v-add left" v-show="hoverPlayListId == index" v-tooltip="'Thích danh sách'"><i class="fas fa-star text-warning"></i></div>
                    </div>
                </div>
                <div class="card-body bg-white shadow-sm">
                    <a href="">
                        <h6 class="font-weight-normal">{{ playlist.title }}</h6>
                    </a>
                    <div class="small">
                        <b-avatar button variant="primary" text="FF" class="align-baseline mr-1"></b-avatar>
                        <a target="_blank" href="">{{ playlist.user }}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12" v-show="!numPlayList">
            <VLoading :show="isLoading" />
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
import VLoading from '@/components/VLoading'
import { FETCH_PLAYLISTS } from "../store/actions.type"

export default {
    name: 'PlayLists',
    props: {
        numPlayList: {
            type: Number,
            required: false,
        },
        query: {
            type: Object,
            required: false,
            default: () => {
                return {
                    ordering: '-users_like',
                    search: '',
                }
            },
        },
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
        ...mapGetters(["playLists"])
    },
    mounted() {
        this.fetchPlayLists()
    },
    methods: {
        fetchPlayLists() {
            this.$store.dispatch(FETCH_PLAYLISTS, this.query)
            this.page = 1
            this.hasNext = true
        },
    },
}
</script>