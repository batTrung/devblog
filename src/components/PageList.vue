<template>
    <b-overlay :show="isShowOverlay" opacity="0.6" rounded="sm">
        <div class="row">
            <div class="col-md-4 col-sm-6 my-2"
                v-for="(page, index) in pages.slice(0, num_page)"
                :key="index">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm border-light" style="border-radius: .35rem;">
                    <div class="card-body d-flex flex-column pb-0">
                        <router-link
                            :to="{ name: 'page-detail', params: { name: page.name }}">
                            <b-avatar
                                size="lg" 
                                :src="page.photo"
                                class="mr-2">   
                            </b-avatar>
                            {{ page.name }}
                        </router-link>
                        <p class="my-3">
                            {{ page.description }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                            <div class="col pl-0">
                                <span class="font-small d-block text-muted mb-2">Lượt xem</span>
                                <span class="h5 text-dark">
                                    3,3k
                                </span>
                            </div>
                            <div class="col">
                                <span class="font-small d-block text-muted mb-2">Bài viết</span>
                                <span class="h5 text-dark font-weight-bold">10</span>
                            </div>
                            <div class="col pr-0">
                                <span class="font-small d-block text-muted mb-2">Đăng ký</span>
                                <span class="h5 text-dark font-weight-bold">100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-show="!num_page">
                <VLoading :show="isLoading" />
            </div>
        </div>
    </b-overlay>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_PAGES } from "../store/actions.type"
import VLoading from '@/components/VLoading'

export default {
    name: 'PageList',
    props: {
        num_page: {
            type: Number,
            required: false,
        },
        ordering: {
            type: String,
            required: false,
            default: '-subscribers',
        }
    },
    components: {
        VLoading,
    },
    data() {
        return {
            page: 1,
            isLoading: false,
            isShowOverlay: false,
            hasNext: true,
        }
    },
    watch: {
        ordering() {
            this.isShowOverlay = true
            setTimeout(() => {
                this.isShowOverlay = false
            }, 300)
            this.fetchPages({ ordering: this.ordering })
        }
    },
    computed: {
        ...mapGetters(["pages"])
    },
    mounted() {
        this.fetchPages({ ordering: this.ordering })
    },
    methods: {
        fetchPages(params) {
            this.$store.dispatch(FETCH_PAGES, params)
            this.page = 1
            this.hasNext = true
        },
    },
}
</script>