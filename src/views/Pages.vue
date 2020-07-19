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
                        v-model="pagesQuery.search">
                </div>
            </div>
            <div>
                <b-nav>
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            Sắp xếp <i class="fas fa-sort-amount-up"></i>
                        </template>
                        <b-dropdown-item
                            :class="getActiveClass(pagesQuery.ordering, '-created')"
                            @click.prevent="pagesQuery.ordering = '-created'">Mới cập nhật</b-dropdown-item>
                        <b-dropdown-item
                            :class="getActiveClass(pagesQuery.ordering, '-subscribers')"
                            @click.prevent="pagesQuery.ordering = '-subscribers'">Phổ biến</b-dropdown-item>
                        <b-dropdown-item>Xem nhiều</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            Ngôn ngữ <i class="ti ti-world "></i>
                        </template>
                        <b-dropdown-item
                            :class="getActiveClass(pagesQuery.language, '')"
                            @click.prevent="pagesQuery.language = ''">Tất cả</b-dropdown-item>
                        <b-dropdown-item
                            :class="getActiveClass(pagesQuery.language, 'vi')"
                            @click.prevent="pagesQuery.language = 'vi'">Tiếng Việt</b-dropdown-item>
                        <b-dropdown-item
                            :class="getActiveClass(pagesQuery.language, 'en')"
                            @click.prevent="pagesQuery.language = 'en'">Tiếng Anh</b-dropdown-item>
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
        <PageList
            :query="pagesQuery" />
    </div>
</template>

<script>
import PageList from '@/components/PageList'

export default {
    name: 'Pages',
    title: 'Trang',
    components: {
        PageList,
    },
    data() {
        return {
            pagesQuery: {
                ordering: '-created',
                language: '',
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
