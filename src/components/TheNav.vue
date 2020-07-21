<template>
    <b-navbar toggleable="lg" type="dark" class="border-bottom bg-nav-green">
        <div class="container">
            <b-navbar-brand :to="{name: 'home'}">DevBlog</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{ name: 'posts' }">Bài viết</b-nav-item>
                    <b-nav-item :to="{ name: 'pages' }">Trang</b-nav-item>
                    <b-nav-item :to="{ name: 'play-list' }">Danh sách</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form @submit.prevent="onSubmit($event)">
                        <div class="input-group bg-white rounded-pill mr-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-transparent border-0">
                                    <i class="ti ti-search"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                class="form-control border-0 pb-2 mr-4 pl-0"
                                name="search"
                                placeholder="Tìm kiếm">
                            <span style="margin-right: 5px; margin-top: 6px;">
                                <b-button type="submit" pill variant="primary" size="sm">Search</b-button>
                            </span>
                        </div>
                    </b-nav-form>
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            <b-avatar size="2rem"></b-avatar>
                        </template>
                        <b-dropdown-item>Đăng xuất</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-button
                    :to="{ name: 'register' }"
                    variant="link"
                    class="btn-custom btn-primary mr-2 animate-up-1"
                    size="sm">
                    Đăng ký
                </b-button>
                <b-button
                    :to="{ name: 'login' }"
                    variant="link"
                    class="btn-custom btn-success animate-up-1"
                    size="sm">
                    Đăng nhập
                </b-button>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
import {
    SET_SEARCH,
} from '@/store/mutations.type'

export default {
    name: 'TheNav',
    methods: {
        onSubmit(event) {
            let textSearch = event.target.search.value
            this.$store.commit(SET_SEARCH, textSearch)
            if (this.$route.name !== 'search') {
                this.$router.replace({ name: 'search' })
            }
        },
    }
}
</script>
