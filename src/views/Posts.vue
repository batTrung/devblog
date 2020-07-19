<template>
    <div class="page">
        <div class="d-flex justify-content-between">
            <ul class="list-inline mb-2">
                <li class="list-inline-item mr-3">
                    <h5>Bài viết</h5>
                </li>
                <li class="list-inline-item mr-3 active">
                    <a
                        href=""
                        :class="getActiveClass(postsOrder, 'created')"
                        @click.prevent="postsOrder = 'created'">Mới nhất</a>
                </li>
                <li class="list-inline-item mr-3">
                    <a
                        href=""
                        :class="getActiveClass(postsOrder, '-views')"
                        @click.prevent="postsOrder = '-views'">Xem nhiều</a>
                </li>
                <li class="list-inline-item mr-3">
                    <a
                        href=""
                        :class="getActiveClass(postsOrder, '-users_saved')"
                        @click.prevent="postsOrder = '-users_saved'">Nhiều lượt thích</a>
                </li>
            </ul>
            <b-nav>
                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        Chủ đề
                    </template>
                    <b-dropdown-item>Tất cả</b-dropdown-item>
                    <b-dropdown-item>Web Deveopment</b-dropdown-item>
                    <b-dropdown-item>Deep Learning</b-dropdown-item>
                    <b-dropdown-item>Machine Learning</b-dropdown-item>
                    <b-dropdown-item>DevOps</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>
        </div>
        <PostList :ordering="postsOrder" />
    </div>
</template>
<script>
import PostList from '@/components/PostList'

export default {
    name: 'Posts',
    title: 'Bài viết',
    components: {
        PostList,
    },
    data() {
        return {
            postsOrder: 'created',
        }
    },
    methods: {
        getActiveClass(a, b) {
            return a == b ? 'active' : ''
        },
    }
}
</script>
