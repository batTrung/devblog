<template>
    <div class="page">
        <div class="d-flex justify-content-between">
            <ul class="list-inline mb-2">
                <li class="list-inline-item mr-3">
                    <h5>Trang</h5>
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
            <div class="row">
                <div class="col-md-4 col-sm-6 my-2">
                    <div class="card h-100 d-flex flex-column justify-content-between shadow-sm border-light" style="border-radius: .35rem;">
                        <div class="card-body d-flex flex-column pb-0">
                            <div class="media">
                                <div class="avatar-lg mr-2">
                                    <img class="img-fluid rounded-circle" src="https://avatars2.githubusercontent.com/u/27804?v=4" alt="avatar">
                                </div>
                                <p class="mt-2" style="position: relative;"><a target="_blank" href="https://github.com/django/django">dev.to</a></p>
                            </div>
                            <p class="my-3">
                                Miêu tả trang
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between">
                                <div class="col pl-0">
                                    <span class="font-small d-block text-muted mb-2">Lượt xem</span>
                                    <span class="h5 text-dark">
                                        3,3k
                                    </span>
                                </div>
                                <div class="col">
                                    <span class="font-small d-block text-muted mb-2">Bài viết</span>
                                    <span class="h5 text-dark font-weight-bold">10</span>
                                </div>
                                <div class="col pr-0">
                                    <span class="font-small d-block text-muted mb-2">Đăng ký</span>
                                    <span class="h5 text-dark font-weight-bold">100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 my-2">
                    <div class="card h-100 d-flex flex-column justify-content-between shadow-sm border-light" style="border-radius: .35rem;">
                        <div class="card-body d-flex flex-column pb-0">
                            <div class="media">
                                <div class="avatar-lg mr-2">
                                    <img class="img-fluid rounded-circle" src="https://avatars2.githubusercontent.com/u/27804?v=4" alt="avatar">
                                </div>
                                <p class="mt-2" style="position: relative;"><a target="_blank" href="https://github.com/django/django">simplebetterthancomplex.com</a></p>
                            </div>
                            <p class="my-3">
                                Miêu tả trang
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between">
                                <div class="col pl-0">
                                    <span class="font-small d-block text-muted mb-2">Lượt xem</span>
                                    <span class="h5 text-dark">
                                        3,3k
                                    </span>
                                </div>
                                <div class="col">
                                    <span class="font-small d-block text-muted mb-2">Bài viết</span>
                                    <span class="h5 text-dark font-weight-bold">10</span>
                                </div>
                                <div class="col pr-0">
                                    <span class="font-small d-block text-muted mb-2">Đăng ký</span>
                                    <span class="h5 text-dark font-weight-bold">100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 my-2">
                    <div class="card h-100 d-flex flex-column justify-content-between shadow-sm border-light" style="border-radius: .35rem;">
                        <div class="card-body d-flex flex-column pb-0">
                            <div class="media">
                                <div class="avatar-lg mr-2">
                                    <img class="img-fluid rounded-circle" src="https://avatars2.githubusercontent.com/u/27804?v=4" alt="avatar">
                                </div>
                                <p class="mt-2" style="position: relative;"><a target="_blank" href="https://github.com/django/django">djangobat</a></p>
                            </div>
                            <p class="my-3">
                                Miêu tả trang
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between">
                                <div class="col pl-0">
                                    <span class="font-small d-block text-muted mb-2">Lượt xem</span>
                                    <span class="h5 text-dark">
                                        3,3k
                                    </span>
                                </div>
                                <div class="col">
                                    <span class="font-small d-block text-muted mb-2">Bài viết</span>
                                    <span class="h5 text-dark font-weight-bold">10</span>
                                </div>
                                <div class="col pr-0">
                                    <span class="font-small d-block text-muted mb-2">Đăng ký</span>
                                    <span class="h5 text-dark font-weight-bold">100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Pages',
}
</script>
