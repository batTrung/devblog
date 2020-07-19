<template>
    <div class="page">
        <div class="d-flex justify-content-between">
            <ul class="list-inline mt-2">
                <li class="list-inline-item mr-3">
                    <h5>Bài viết</h5>
                </li>
                <li class="list-inline-item mr-3 active">
                    <a
                        href=""
                        :class="getActiveClass(postsOrder, 'created')"
                        @click.prevent="postsOrder = 'created'">Mới cập nhật</a>
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
            <b-form>
                <div class="input-group bg-white rounded-pill border mr-2 mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent border-0">
                            <i class="ti ti-search"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control border-0 pb-2 mr-4 pl-0" placeholder="Tìm kiếm bài viết" required="">
                </div>
            </b-form>
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
