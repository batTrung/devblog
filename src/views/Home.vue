<template>
    <div>
        <div class="page">
            <div class="d-flex justify-content-between">
                <ul class="list-inline mb-2">
                    <li class="list-inline-item mr-3">
                        <router-link :to="{ name: 'posts' }" class="h5">Bài viết</router-link>
                    </li>
                    <li class="list-inline-item mr-3 active">
                        <a href="" class="active">Mới nhất</a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a href="">Xem nhiều</a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a href="">Most stars</a>
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
            <PostList :num_post="8" />
        </div>
        <div class="page">
            <ul class="list-inline mb-2">
                <li class="list-inline-item mr-3">
                    <router-link :to="{ name: 'play-list' }" class="h5">Danh sách</router-link>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="" class="active">Phổ biến</a>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="">Mới nhất</a>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="">Xem nhiều</a>
                </li>
            </ul>
            <PlayListList :playLists="4" />
        </div>
        <div class="page">
            <ul class="list-inline mb-2">
                <li class="list-inline-item mr-3">
                    <router-link :to="{ name: 'pages' }" class="h5">Trang</router-link>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="" class="active">Phổ biến</a>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="">Mới nhất</a>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="">Xem nhiều</a>
                </li>
            </ul>
            <PageList :pages="3" />
        </div>
    </div>
</template>
<script>
import PostList from '@/components/PostList';
import PageList from '@/components/PageList'
import PlayListList from '@/components/PlayListList'

export default {
    name: 'Home',
    title: 'DevBat - Tổng hợp các bài viết lập trình',
    components: {
        PostList,
        PageList,
        PlayListList,
    },
}
</script>