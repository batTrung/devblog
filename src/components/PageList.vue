<template>
    <b-overlay
        :show="isShowOverlay"
        opacity="0.8"
        rounded="sm">
        <div class="row" v-if="pages.length !== 0">
            <div class="col-md-4 col-sm-6 my-2"
                v-for="(page, index) in pages.slice(0, numPage)"
                :key="index">
                <div
                    class="card h-100 d-flex flex-column justify-content-between shadow-sm border-light"
                    style="border-radius: .35rem;">
                    <div class="card-body d-flex flex-column pb-0">
                        <router-link :to="{ name: 'page-detail', params: { name: page.name }}">
                            <b-avatar
                                size="lg" 
                                :src="page.photo"
                                class="mr-2">
                            </b-avatar>
                            {{ page.name }}
                        </router-link>
                        <p class="my-3">
                            {{ page.description|truncatewords(30) }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-end">
                            <button
                                v-if="page.subscribers.includes(currentUser.username)"
                                class="btn-custom btn-light btn-sm mb-3 d-inline animate-up-2"
                                @click="onSubscribe(page.name)">
                                <i class="fas fa-check"></i> Đã đăng ký
                            </button>
                            <button
                                v-else
                                class="btn-custom btn-danger btn-sm mb-3 d-inline animate-up-2"
                                @click="onSubscribe(page.name)">
                                Đăng ký <i class="far fa-bell"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="col pl-0">
                                <span class="font-small d-block text-muted mb-2">Lượt xem</span>
                                <span class="h5 text-dark">
                                    {{ page.countViews }}
                                </span>
                            </div>
                            <div class="col">
                                <span class="font-small d-block text-muted mb-2">Bài viết</span>
                                <span class="h5 text-dark font-weight-bold">{{ page.post_count }}</span>
                            </div>
                            <div class="col pr-0">
                                <span class="font-small d-block text-muted mb-2">Đăng ký</span>
                                <span class="h5 text-dark font-weight-bold">{{ page.subscribers.length }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-show="!numPage">
                <VLoading :show="isLoading" />
            </div>
        </div>
        <div class="text-center" v-else>
            <p>Không tìm thấy trang nào</p>
        </div>
    </b-overlay>
</template>

<script>
import { mapGetters } from "vuex"
import { truncatewords } from '@/common/filters'
import { FETCH_PAGES } from "../store/actions.type"
import VLoading from '@/components/VLoading'
import { PagesService } from "@/common/api.service"

export default {
    name: 'PageList',
    props: {
        numPage: {
            type: Number,
            required: false,
        },
        query: {
            type: Object,
            required: false,
            default: () => {
                return {
                    ordering: '-subscribers',
                    language: '',
                    search: '',
                    topic: '',
                }
            },
        },
    },
    filters: {
        truncatewords,
    },
    components: {
        VLoading,
    },
    data() {
        return {
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
                this.fetchPages()
                    .then(() => {
                        this.isShowOverlay = false
                    })
            },
            deep: true,
        },
    },
    computed: {
        getParams() {
            return this.query
        },
        ...mapGetters(['pages', 'isAuthenticated', 'currentUser'])
    },
    methods: {
        fetchPages() {
            this.page = 1
            this.hasNext = true 
            return this.$store.dispatch(FETCH_PAGES, this.getParams)
        },
        onSubscribe(pageName) {
            if (this.isAuthenticated) {
                const vslug = `${pageName}/subscribe`
                PagesService.update(vslug)
                    .then(() => {
                        this.fetchPages()
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
                    PagesService.query(params)
                        .then(({ data }) => {
                            this.isLoading = true
                            setTimeout(() => {
                                this.isLoading = false
                                this.pages.push(...data.results)
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
        this.fetchPages()
            .then(() => {
                this.isShowOverlay = false
                this.scroll()
            })
    },
}
</script>