<template>
    <div class="page">
        <div class="row">
            <aside class="col-12 col-lg-3 d-none d-lg-block order-2">
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Sắp xếp</span>
                    </div>
                    <b-form-group class="ml-2">
                      <b-form-radio-group
                        v-model="searchQuery.ordering"
                        name="ordering"
                        :options="options.ordering"
                        stacked>
                      </b-form-radio-group>
                    </b-form-group>
                </div>
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Loại tìm kiếm</span>
                    </div>
                    <b-form-group class="ml-2">
                      <b-form-checkbox-group
                        v-model="searchQuery.category"
                        name="category"
                        :options="options.category"
                        stacked>
                      </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Ngôn ngữ</span>
                    </div>
                    <b-form-group class="ml-2">
                      <b-form-radio-group
                        v-model="searchQuery.language"
                        name="language"
                        :options="options.language"
                        stacked>
                      </b-form-radio-group>
                    </b-form-group>
                </div>
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Chủ đề</span>
                    </div>
                    <b-form-group class="ml-2">
                        <b-form-radio-group
                          id="topic"
                          v-model="searchQuery.topic"
                          name="topic"
                          :options="getTopicOptions"
                          stacked
                        >
                        </b-form-radio-group>
                    </b-form-group>
                </div>
            </aside>
            <div class="col-12 col-lg-9">
                <b-overlay :show="isShowOverlay" opacity="0.7" rounded="sm">
                    <div
                        class="post"
                        v-show="posts.length && checkCategory('post')">
                        <h6>{{ countPost }} <span class="font-weight-bold">Bài viết</span></h6>
                        <div class="row">
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
                                                    :src="post.photo_url"
                                                    :alt="post.title"
                                                    class="card-img p-2"
                                                    style="max-height: 240px">
                                            </a>
                                            <div class="v-add left" v-show="hoverPostId == index && isAuthenticated" v-tooltip="'Thích bài viết'"><i class="far fa-heart text-gray"></i></div>
                                            <b-dropdown variant="link" class="v-add right" right v-show="hoverPostId == index && isAuthenticated">
                                                <template v-slot:button-content>
                                                    <i class="fas fa-plus"></i>
                                                </template>
                                                <b-dropdown-item href="#" class="py-2 p-0"><i class="ti ti-timer mr-2"></i> Xem sau</b-dropdown-item>
                                                <div class="dropdown-divider"></div>
                                                <b-dropdown-item href="#" class="py-2 p-0"><i class="ti ti-layers-alt mr-2"></i> Thêm vào danh sách</b-dropdown-item>
                                            </b-dropdown>
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
                                                        :src="post.website.photo_url"
                                                        class="mr-1">   
                                                    </b-avatar>
                                                    {{ post.website.name }}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isPostLoading">
                            <VLoading :show="isPostLoading" class='pb-4' />
                        </div>
                        <div v-show="hasNextPost" v-else>
                            <div class="d-flex justify-content-center mb-3">
                                <button
                                    class="btn-custom btn-success"
                                    @click="loadPost()">
                                    <i class="fas fa-arrow-down"></i>
                                    +{{ numRestPost }} More
                                </button>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div
                        class="website"
                        v-show="pages.length && checkCategory('page')">
                        <h6>{{ countPage }} <span class="font-weight-bold">Trang</span></h6>
                        <div class="row">
                            <div
                                class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2"
                                v-for="(page, index) in pages"
                                :key="index">
                                <div class="card h-100 d-flex flex-column justify-content-between border-light bb-red">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-12 col-lg-6 col-xl-4 text-center p-2">
                                            <router-link
                                                :to="{ name: 'page-detail', params: { name: page.name }}">
                                                <b-avatar
                                                    size="10rem" 
                                                    :src="page.photo_url"
                                                    class="mr-2">   
                                                </b-avatar>
                                            </router-link>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-8">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <router-link
                                                        :to="{ name: 'page-detail', params: { name: page.name }}">
                                                        <h4 class="h5">{{ page.name }}</h4>
                                                    </router-link>
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
                                                <p class="my-3">
                                                    {{ page.description|truncatewords(20) }}
                                                </p>
                                                <div class="d-flex justify-content-between">
                                                    <div class="col pl-0">
                                                        <span class="text-muted font-small d-block mb-2">Lượt xem</span>
                                                        <span class="h5 text-dark font-weight-bold">
                                                            {{ page.countViews }}
                                                        </span>
                                                    </div>
                                                    <div class="col">
                                                        <span class="text-muted font-small d-block mb-2">Bài viết</span>
                                                        <span class="h5 text-dark font-weight-bold">
                                                            {{ page.post_count }}
                                                        </span>
                                                    </div>
                                                    <div class="col pr-0">
                                                        <span class="text-muted font-small d-block mb-2">Đăng ký</span>
                                                        <span class="h5 text-dark font-weight-bold">
                                                            {{ page.subscribers.length }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isPageLoading">
                            <VLoading :show="isPageLoading" class='pb-4' />
                        </div>
                        <div v-show="hasNextPage" v-else>
                            <div class="d-flex justify-content-center mb-3">
                                <button
                                    class="btn-custom btn-success"
                                    @click="loadPage()">
                                    <i class="fas fa-arrow-down"></i>
                                    +{{ numRestPage }} More
                                </button>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div
                        class="playlist"
                        v-show="playLists.length && checkCategory('playlist')">
                        <h6>{{ countPlayList }} <span class="font-weight-bold">Danh sách</span></h6>
                        <div class="row">
                            <div
                                class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2"
                                v-for="(playlist, index) in playLists"
                                :key="index">
                                <div
                                    class="card h-100 d-flex flex-column justify-content-between border-light bb-red"
                                    @mouseover="hoverPlayListId = index"
                                    @mouseleave="hoverPlayListId = null">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-12 col-lg-6 col-xl-4 p-2">
                                            <div class="b-playlist">
                                                <div class="v-img">
                                                    <img
                                                        v-for="(post, index) in playlist.posts.slice(1, 3)"
                                                        :key="index"
                                                        :src="post.photo_url"
                                                        :class="'l-' + (2 - index)">
                                                    <a href="#">
                                                        <img :src="playlist.posts[0].photo_url" class="l-3">
                                                    </a>
                                                    <div class="items">{{ playlist.posts.length }}</div>
                                                    <div class="v-add left" v-show="hoverPlayListId == index && isAuthenticated" v-tooltip="'Thêm sao cho danh sách'"><i class="fas fa-star text-warning"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-8">
                                            <div class="card-body">
                                                <a href="">
                                                    <h4 class="h5">{{ playlist.title }}</h4>
                                                </a>
                                                <div class="d-flex my-3">
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
                                                </div>
                                                <a href="" class="small">
                                                    <span class="b-avatar mr-1 badge-secondary rounded-circle" style="width: 2.5em; height: 2.5em;"><span class="b-avatar-img"><img src="http://localhost:8000/media/websites/filters.png" alt="avatar"></span>
                                                    </span> {{ playlist.user }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isPlayListLoading">
                            <VLoading :show="isPlayListLoading" class='pb-4' />
                        </div>
                        <div v-show="hasNextPlayList" v-else>
                            <div class="d-flex justify-content-center mb-3">
                                <button
                                    class="btn-custom btn-success"
                                    @click="loadPlayList()">
                                    <i class="fas fa-arrow-down"></i>
                                    +{{ numRestPlayList }} More
                                </button>
                            </div>
                        </div>
                        <hr>
                    </div>
                </b-overlay>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { truncatewords } from '@/common/filters'
import {
    PostsService,
    PagesService,
    PlayListsService,
} from "@/common/api.service"
import VLoading from '@/components/VLoading'
import {
    FETCH_TOPICS,
    FETCH_POSTS,
    FETCH_PAGES,
    FETCH_PLAYLISTS,
    PAGE_SUBSCRIBE,
} from "../store/actions.type"
import {
    SET_INFO_POST,
    SET_INFO_PAGE,
    SET_INFO_PLAYLIST,
} from '@/store/mutations.type'

export default {
    name: 'Search',
    data() {
      return {
        hoverPostId: null,
        hoverPlayListId: null,
        isPostLoading: false,
        isPageLoading: false,
        isPlayListLoading: false,
        isShowOverlay: false,
        num_post_each_page: 4,
        num_web_each_page: 3,
        num_playlist_each_page: 3,
        postsQuery: {
            search: '',
            ordering: '-created',
            language: '',
            topic: '',
        },
        pagesQuery: {
            search: '',
            ordering: '-subscribers',
            language: '',
            topic: '',
        },
        playlistsQuery: {
            search: '',
            ordering: '-users_star',
        },
        searchQuery: {
          search: '',
          ordering: '-created',
          category: [],
          language: '',
          topic: '',
        },
        options: {
          ordering: [
            { text: 'Mới cập nhật', value: '-created'},
            { text: 'Lượt xem', value: '-views'},
            { text: 'Lượt thích', value: '-users_like'},
            { text: 'Lượt đăng ký', value: '-subscribers'},
            { text: 'Nhiều sao', value: '-users_star'},
          ],
          category: [
              { text: 'Bài viết', value: 'post'},
              { text: 'Trang', value: 'page'},
              { text: 'Danh sách', value: 'playlist'},
          ],
          language: [
            { text: 'Tiếng Việt', value: 'vi'},
            { text: 'English', value: 'en'},
          ],
        }
      }
    },
    components: {
        VLoading,
    },
    filters: {
        truncatewords,
    },
    computed: {
        getPostsQuery() {
            const ordering = this.searchQuery.ordering
            const ordering_data = ['-created', '-views', '-users_like']
            let setOrdering = ordering_data.includes(ordering)
            return {
                search: this.search,
                ordering: setOrdering ? ordering : '-created',
                language: this.searchQuery.language,
                topic: this.searchQuery.topic,
                size: this.num_post_each_page,
            }
        },
        getPagesQuery() {
            const ordering = this.searchQuery.ordering
            const ordering_data = ['-created', '-views', '-subscribers']
            let setOrdering = ordering_data.includes(ordering)
            return {
                search: this.search,
                ordering: setOrdering ? ordering : '-subscribers',
                language: this.searchQuery.language,
                topic: this.searchQuery.topic,
                size: this.num_web_each_page,
            }
        },
        getPlayListsQuery() {
            const ordering = this.searchQuery.ordering
            const ordering_data = ['-created', '-views', '-users_star']
            let setOrdering = ordering_data.includes(ordering)
            return {
                search: this.search,
                ordering: setOrdering ? ordering : '-users_star',
                size: this.num_playlist_each_page,
            }
        },
        getTopicOptions() {
            return this.topics.map(
                topic => ({
                    text: topic.title,
                    value: topic.title,
                })
            )
        },
        numRestPost() {
            const isLast = this.pagePost === this.numPagePost - 1
            return isLast ? this.countPost - this.pagePost*this.num_post_each_page : this.num_post_each_page
        },
        numRestPage() {
            const isLast = this.pageWeb === this.numPageWeb - 1
            return isLast ? this.countPage - this.pageWeb*this.num_web_each_page : this.num_web_each_page
        },
        numRestPlayList() {
            const isLast = this.pagePlayList === this.numPagePlayList - 1
            return isLast ? this.countPlayList - this.pagePlayList*this.num_playlist_each_page : this.num_playlist_each_page
        },
        ...mapGetters([
            'isAuthenticated',
            'currentUser',
            'search',
            'topics',
            'posts',
            'pagePost',
            'numPagePost',
            'countPost',
            'hasNextPost',
            'pages',
            'pageWeb',
            'numPageWeb',
            'countPage',
            'hasNextPage',
            'playLists',
            'pagePlayList',
            'numPagePlayList',
            'countPlayList',
            'hasNextPlayList',
        ])
    },
    watch: {
      searchQuery: {
        handler() {
          this.fetchData()
        },
        deep: true,
      },
      search() {
        this.fetchData()
      },
    },
    mounted() {
        this.$store.dispatch(FETCH_TOPICS, { website: true })
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.isShowOverlay = true
            setTimeout(() => {
                this.isShowOverlay = false
            }, 500)
            this.$store.dispatch(FETCH_POSTS, this.getPostsQuery)
            this.$store.dispatch(FETCH_PAGES, this.getPagesQuery)
            this.$store.dispatch(FETCH_PLAYLISTS, this.getPlayListsQuery)
        },
        checkCategory(value) {
            const categories = this.searchQuery.category
            return categories.length === 3
                || categories.length === 0
                || categories.includes(value)
        },
        loadPost() {
            const params = Object.assign(
                { page: this.pagePost + 1 },
                this.getPostsQuery
            )
            PostsService.query(params)
                .then(({ data }) => {
                    this.isPostLoading = true
                    setTimeout(() => {
                        this.isPostLoading = false
                        this.posts.push(...data.results)
                        this.$store.commit(SET_INFO_POST, data)
                    }, 700)
                })
        },
        loadPage() {
            const params = Object.assign(
                { page: this.pageWeb + 1 },
                this.getPagesQuery
            )
            PagesService.query(params)
                .then(({ data }) => {
                    this.isPageLoading = true
                    setTimeout(() => {
                        this.isPageLoading = false
                        this.pages.push(...data.results)
                        this.$store.commit(SET_INFO_PAGE, data)
                    }, 700)
                })
        },
        loadPlayList() {
            const params = Object.assign(
                { page: this.pagePlayList + 1 },
                this.getPlayListsQuery
            )
            PlayListsService.query(params)
                .then(({ data }) => {
                    this.isPlayListLoading = true
                    setTimeout(() => {
                        this.isPlayListLoading = false
                        this.playLists.push(...data.results)
                        this.$store.commit(SET_INFO_PLAYLIST, data)
                    }, 700)
                })
        },
        onSubscribe(pageName) {
            if (this.isAuthenticated) {
                this.$store.dispatch(PAGE_SUBSCRIBE, `${pageName}/subscribe`)
            } else {
                this.gotoLogin()
            }
        },
    },
}
</script>
