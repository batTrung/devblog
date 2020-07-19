<template>
    <div class="page">
        <div class="d-flex justify-content-between">
            <div>
                <div class="input-group bg-white rounded-pill border mr-2 mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent border-0">
                            <i class="ti ti-search"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control border-0 pb-2 mr-4 pl-0"
                        placeholder="Tìm kiếm bài viết"
                        v-model="postsQuery.search">
                </div>
            </div>
            <div>
                <b-nav>
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            Sắp xếp <i class="fas fa-sort-amount-up"></i>
                        </template>
                        <b-dropdown-item
                            :class="getActiveClass(postsQuery.ordering, 'created')"
                            @click.prevent="postsQuery.ordering = 'created'">Mới cập nhật</b-dropdown-item>
                        <b-dropdown-item
                            :class="getActiveClass(postsQuery.ordering, '-views')"
                            @click.prevent="postsQuery.ordering = '-views'">Xem nhiều</b-dropdown-item>
                        <b-dropdown-item
                            :class="getActiveClass(postsQuery.ordering, '-users_saved')"
                            @click.prevent="postsQuery.ordering = '-users_saved'">Nhiều lượt thích</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            Ngôn ngữ <i class="ti ti-world "></i>
                        </template>
                        <b-dropdown-item
                            :class="getActiveClass(postsQuery.language, '')"
                            @click.prevent="postsQuery.language = ''">Tất cả</b-dropdown-item>
                        <b-dropdown-item
                            :class="getActiveClass(postsQuery.language, 'vi')"
                            @click.prevent="postsQuery.language = 'vi'">Tiếng Việt</b-dropdown-item>
                        <b-dropdown-item
                            :class="getActiveClass(postsQuery.language, 'en')"
                            @click.prevent="postsQuery.language = 'en'">Tiếng Anh</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown left>
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
        </div>
        <PostList 
            :query="postsQuery" />
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
            postsQuery: {
                ordering: 'created',
                language: '',
                search: '',
                website: '',
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
