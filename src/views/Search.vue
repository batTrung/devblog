<template>
    <div>
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
                      <b-form-checkbox-group
                        v-model="searchQuery.language"
                        name="language"
                        :options="options.language"
                        stacked>
                      </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Chủ đề</span>
                    </div>
                    <b-form-group class="ml-2">
                        <b-form-checkbox-group
                          id="topic"
                          v-model="searchQuery.topic"
                          name="topic"
                          :options="getTopicOptions"
                          stacked
                        >
                        </b-form-checkbox-group>
                    </b-form-group>
                </div>
            </aside>
            <div class="col-12 col-lg-9">
                <b-overlay :show="isShowOverlay" opacity="0.7" rounded="sm">
                    <div class="post">
                        <h6>{{ posts.length }} <span class="font-weight-bold">Bài viết</span></h6>
                        <div class="row">
                            <div
                                class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2"
                                v-for="(post, index) in posts"
                                :key="index">
                                <div class="card h-100 d-flex flex-column justify-content-between border-light bb-red">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-12 col-lg-6 col-xl-4 p-2">
                                            <a :href="post.link" class="position-relative">
                                                <img 
                                                    :src="post.photo_url"
                                                    :alt="post.title"
                                                    class="card-img p-2"
                                                    style="max-height: 240px">
                                            </a>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-8">
                                            <div class="card-body">
                                               <a :href="post.link">
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
                        </div>
                        <div class="d-flex justify-content-center mb-3">
                            <button class="btn-custom btn-success-custom"><i class="fas fa-arrow-down"></i> +5 More</button>
                        </div>
                        <hr>
                    </div>
                    <div class="website">
                        <h6>20 <span class="font-weight-bold">Trang</span></h6>
                        <div class="row">
                            <div class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2">
                                <div class="card h-100 d-flex flex-column justify-content-between border-light bb-red">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-12 col-lg-6 col-xl-4 text-center p-2">
                                            <a href="#">
                                                <b-avatar src="https://themesberg.com/docs/spaces/assets/img/private-office.jpg" size="10rem"></b-avatar>
                                            </a>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-8">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <a href="#">
                                                        <h4 class="h5">Dev.tube</h4>
                                                    </a>
                                                    <button class="btn-custom btn-danger-custom btn-sm">Đăng ký</button>
                                                </div>
                                                <p class="my-3">
                                                    I kinda love this github new feature about readme profile files. So i decided to create profile views counter, but then
                                                </p>
                                                <div class="d-flex justify-content-between">
                                                    <div class="col pl-0">
                                                        <span class="text-muted font-small d-block mb-2">Lượt xem</span>
                                                        <span class="h5 text-dark font-weight-bold">500$</span>
                                                    </div>
                                                    <div class="col">
                                                        <span class="text-muted font-small d-block mb-2">Bài viết</span>
                                                        <span class="h5 text-dark font-weight-bold">12</span>
                                                    </div>
                                                    <div class="col pr-0">
                                                        <span class="text-muted font-small d-block mb-2">Đăng ký</span>
                                                        <span class="h5 text-dark font-weight-bold">1200</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mb-3">
                            <button class="btn-custom btn-success-custom"><i class="fas fa-arrow-down"></i> +5 More</button>
                        </div>
                        <hr>
                    </div>
                    <div class="playlist">
                        <h6>3 <span class="font-weight-bold">Danh sách</span></h6>
                        <div class="row">
                            <div class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2">
                                <div class="card h-100 d-flex flex-column justify-content-between border-light bb-red">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-12 col-lg-6 col-xl-4 p-2">
                                            <div class="b-playlist">
                                                <div class="v-img">
                                                    <img src="http://azyrusthemes.com/circlevideo/images/playlist-1.png" alt="" class="l-1">
                                                    <img src="http://azyrusthemes.com/circlevideo/images/video1-2.png" alt="" class="l-2">
                                                    <a href="">
                                                        <img src="http://azyrusthemes.com/circlevideo/images/video1-2.png" alt="" class="l-3">
                                                    </a>
                                                    <div class="items">3</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-8">
                                            <div class="card-body">
                                                <a href="#">
                                                        <h4 class="h5">Dev.tube</h4>
                                                    </a>
                                                <div class="d-flex my-3">
                                                    <div class="post-meta mb-2 small text-gray"><span class="mr-3"><i class="ti ti-eye text-dark mr-1"></i>3</span><span class="mr-3"><i class="fas fa-star text-warning mr-1"></i>0</span><span><i class="ti ti-timer text-primary mr-1"></i>10&nbsp;giờ, 28&nbsp;phút trước</span></div>
                                                </div>
                                                <a href="/pages/viblo.asia" class="small"><span class="b-avatar mr-1 badge-secondary rounded-circle" style="width: 2.5em; height: 2.5em;"><span class="b-avatar-img"><img src="http://localhost:8000/media/websites/filters.png" alt="avatar"></span>
                                                    </span> viblo.asia </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mb-3">
                            <button class="btn-custom btn-success-custom"><i class="fas fa-arrow-down"></i> +5 More</button>
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
import {
    FETCH_TOPICS,
    FETCH_POSTS,
    FETCH_PAGES,
    FETCH_PLAYLISTS,
} from "../store/actions.type"

export default {
    name: 'Search',
    data() {
      return {
        isShowOverlay: false,
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
          language: [],
          topic: [],
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
                size: '4',
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
                size: '4'
            }
        },
        getPlayListsQuery() {
            const ordering = this.searchQuery.ordering
            const ordering_data = ['-created', '-views', '-users_star']
            let setOrdering = ordering_data.includes(ordering)
            return {
                search: this.search,
                ordering: setOrdering ? ordering : '-users_star',
                size: '4'
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
        ...mapGetters(['search', 'topics', 'posts', 'pages', 'playLists'])
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
    },
}
</script>