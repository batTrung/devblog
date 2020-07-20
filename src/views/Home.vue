<template>
    <div>
        <div class="page">
            <div class="d-flex justify-content-between">
                <ul class="list-inline mt-2">
                    <li class="list-inline-item mr-3">
                        <router-link :to="{ name: 'posts' }" class="h5">Bài viết</router-link>
                    </li>
                    <li class="list-inline-item mr-3 active">
                        <a
                            href=""
                            :class="getActiveClass(postsQuery.ordering, '-created')"
                            @click.prevent="postsQuery.ordering = '-created'">Mới cập nhật</a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a
                            href=""
                            :class="getActiveClass(postsQuery.ordering, '-views')"
                            @click.prevent="postsQuery.ordering = '-views'">Xem nhiều</a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a
                            href=""
                            :class="getActiveClass(postsQuery.ordering, '-users_saved')"
                            @click.prevent="postsQuery.ordering = '-users_saved'">Nhiều lượt thích</a>
                    </li>
                </ul>
                <b-nav>
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            Chủ đề
                        </template>
                        <b-dropdown-item>Web Deveopment</b-dropdown-item>
                        <b-dropdown-item>Deep Learning</b-dropdown-item>
                        <b-dropdown-item>Machine Learning</b-dropdown-item>
                        <b-dropdown-item>DevOps</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-nav>
            </div>
            <PostList
                :num_post="8"
                :query="postsQuery" />
        </div>
        <div class="page">
            <ul class="list-inline mb-2">
                <li class="list-inline-item mr-3">
                    <router-link :to="{ name: 'play-list' }" class="h5">Danh sách</router-link>
                </li>
                <li class="list-inline-item mr-3">
                    <a 
                        href=""
                        :class="getActiveClass(playlistsQuery.ordering, '-users_like')"
                        @click.prevent="playlistsQuery.ordering = '-users_like'">Nhiều sao
                    </a>
                </li>
                <li class="list-inline-item mr-3">
                    <a 
                        href=""
                        :class="getActiveClass(playlistsQuery.ordering, '-updated')"
                        @click.prevent="playlistsQuery.ordering = '-updated'">Vừa cập nhật
                    </a>
                </li>
                <li class="list-inline-item mr-3">
                    <a 
                        href=""
                        :class="getActiveClass(playlistsQuery.ordering, '-views')"
                        @click.prevent="playlistsQuery.ordering = '-views'">Xem nhiều
                    </a>
                </li>
            </ul>
            <PlayLists
                :numPlayList="4"
                :query="playlistsQuery" />
        </div>
        <div class="page">
            <ul class="list-inline mb-2">
                <li class="list-inline-item mr-3">
                    <router-link :to="{ name: 'pages' }" class="h5">Trang</router-link>
                </li>
                <li class="list-inline-item mr-3">
                    <a
                        href=""
                        :class="getActiveClass(pagesQuery.ordering, '-subscribers')"
                        @click.prevent="pagesQuery.ordering = '-subscribers'">Nhiều lượt đăng ký
                    </a>
                </li>
                <li class="list-inline-item mr-3">
                    <a
                        href=""
                        :class="getActiveClass(pagesQuery.ordering, '-created')"
                        @click.prevent="pagesQuery.ordering = '-created'">Mới cập nhật
                    </a>
                </li>
                <li class="list-inline-item mr-3">
                    <a
                        href=""
                        :class="getActiveClass(pagesQuery.ordering, '-views')"
                        @click.prevent="pagesQuery.ordering = '-views'">Xem nhiều</a>
                </li>
            </ul>
            <PageList
                :num_page="3"
                :query="pagesQuery" />
        </div>
    </div>
</template>
<script>
import PostList from '@/components/PostList';
import PageList from '@/components/PageList'
import PlayLists from '@/components/PlayLists'

export default {
    name: 'Home',
    title: 'Tổng hợp các bài viết lập trình',
    components: {
        PostList,
        PageList,
        PlayLists,
    },
    data() {
        return {
            postsQuery: {
                ordering: '-created',
                language: '',
                search: '',
            },
            pagesQuery: {
                ordering: '-subscribers',
                language: '',
                search: '',
                topic: '',
            },
            playlistsQuery: {
                ordering: '-users_like',
                search: '',
            },
        }
    },
    methods: {
        getActiveClass(a, b) {
            return a == b ? 'color-active' : ''
        },
    }
}
</script>