<template>
    <div>
        <b-navbar toggleable="lg" type="light" style="background-color: #e3f2fd;">
            <div class="container">
                <b-navbar-brand :to="{name: 'home'}">DevBlog</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item :to="{name: 'home'}">Trang</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>
                        <b-nav-item-dropdown text="trungbat" right>
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
                <nav class="nav nav-underline">
                    <a class="nav-link text-dark active" href="#">
                        <i class="ti ti-heart"></i>
                    </a>
                    <a class="nav-link text-dark" href="#">
                        <ti class="ti ti-timer"></ti>
                    </a>
                    <a class="nav-link text-dark" href="#">
                        <ti class="ti ti-list"></ti>
                    </a>
                    <a class="nav-link text-dark" href="#">
                        <ti class="ti ti-save"></ti>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheNav'
}
</script>