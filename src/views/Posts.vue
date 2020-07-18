<template>
    <div class="page">
        <div class="d-flex justify-content-between">
            <ul class="list-inline mb-2">
                <li class="list-inline-item mr-3">
                    <h5>Bài viết</h5>
                </li>
                <li class="list-inline-item mr-3">
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
                    <b-dropdown-item>Tất cả</b-dropdown-item>
                    <b-dropdown-item>Web Deveopment</b-dropdown-item>
                    <b-dropdown-item>Deep Learning</b-dropdown-item>
                    <b-dropdown-item>Machine Learning</b-dropdown-item>
                    <b-dropdown-item>DevOps</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>
        </div>
        <PostList :posts="20" />
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
}
</script>
