<template>
    <div>
        <b-navbar toggleable="lg" type="light" style="background-color: #e3f2fd;">
            <div class="container">
                <b-navbar-brand :to="{name: 'home'}">DevBlog</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item>Bài viết</b-nav-item>
                        <b-nav-item>Trang</b-nav-item>
                        <b-nav-item>Danh sách</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <div class="input-group bg-white rounded-pill mr-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-transparent border-0">
                                        <i class="ti ti-search"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control border-0 pb-2 mr-4 pl-0" placeholder="Tìm kiếm" required="">
                            </div>
                            <b-nav-item-dropdown right>
                                <template slot="button-content">
                                    <i class="ti ti-world mr-1"></i>
                                </template>
                                <b-dropdown-item>Tiếng Việt</b-dropdown-item>
                                <b-dropdown-item>Tiếng Anh</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-nav-form>
                        <b-nav-item-dropdown right>
                            <template slot="button-content">
                                <a href="#" class="icon icon-shape icon-shape-dark rounded-circle">
                                    <i class="ti ti-user"></i>
                                </a>
                            </template>
                            <b-dropdown-item>Trang cá nhân</b-dropdown-item>
                            <b-dropdown-item>Cài đặt</b-dropdown-item>
                            <div class="dropdown-divider"></div>
                            <b-dropdown-item>Đăng xuất</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
        <div class="nav-scroller bg-white box-shadow">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <nav class="nav nav-underline">
                        <div class="nav-link text-dark mb-0">
                            Go to:
                        </div>
                        <a class="nav-link text-dark mb-0 h5" href="#" v-tooltip="'Bài viết xem sau'">
                            <i class="ti ti-timer"></i>
                        </a>
                        <a class="nav-link text-dark mb-0 h5" href="#" v-tooltip="'Danh sách đã lưu'">
                            <i class="ti ti-layers-alt"></i>
                        </a>
                        <a class="nav-link text-dark mb-0 h5" href="#" v-tooltip="'Bài viết đã lưu'">
                            <i class="ti ti-save"></i>
                        </a>
                        <a class="nav-link text-dark mb-0 h5" href="#" v-tooltip="'Xem lịch sử'">
                            <i class="ti ti-filter"></i>
                        </a>
                    </nav>
                    <div class="mt-1">
                        <a href="#" class="icon icon-shape icon-shape-success rounded-circle">
                            <i class="ti ti-plus"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheNav'
}
</script>