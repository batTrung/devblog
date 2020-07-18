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
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 my-2">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a href="/courses/authentication-with-django-react-and-docker-19/" class="position-relative">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                    </a>
                    <div class="v-add left"><i class="far fa-star text-gray"></i></div>
                    <b-dropdown variant="link" class="v-add right" right>
                        <template v-slot:button-content>
                            <i class="fas fa-plus"></i>
                        </template>
                        <b-dropdown-item href="#" class="py-2 p-0"><i class="ti ti-timer mr-2"></i> Xem sau</b-dropdown-item>
                        <div class="dropdown-divider"></div>
                        <b-dropdown-item href="#" class="py-2 p-0"><i class="ti ti-layers-alt mr-2"></i> Thêm vào danh sách</b-dropdown-item>
                    </b-dropdown>
                    <div class="card-body">
                        <div class="post-meta mb-2 small text-gray">
                            <span class="mr-3"><i class="ti ti-eye text-dark mr-2"></i>1</span>
                            <span class="mr-3"><i class="far fa-star text-warning mr-2"></i>31</span>
                            <span class=""><i class="ti ti-timer text-primary mr-2"></i>31</span>
                        </div>
                        <a href="/courses/authentication-with-django-react-and-docker-19/">
                            <div class="mb-2 h6 font-weight-normal">Authentication with Django, React, and Docker-19</div>
                        </a>
                        <div class="small">
                            <b-avatar button variant="primary" text="FF" class="align-baseline mr-1"></b-avatar>
                            <a target="_blank" href="">simplebetterthancomplex.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 my-2">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a href="/courses/authentication-with-django-react-and-docker-19/" class="position-relative">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                        <span class="badge badge-secondary position-absolute listing-badge"></span>
                    </a>
                    <div class="card-body">
                        <div class="post-meta mb-2 small">
                            <a class="mr-3"><i class="ti ti-eye text-dark mr-2"></i>1</a>
                            <span class="font-small"><i class="ti ti-timer text-primary mr-2"></i>31</span>
                        </div>
                        <a href="/courses/authentication-with-django-react-and-docker-19/">
                            <div class="mb-2 h6 font-weight-normal">Authentication with Django, React, and Docker-19</div>
                        </a>
                        <div class="post-meta">
                            <div class="media mr-2">
                                <div class="avatar-sm mr-1">
                                    <a class="text-center" href="">
                                        <div class="text-white rounded-circle mb-2 bg-primary">
                                            U
                                        </div>
                                    </a>
                                </div>
                                <div class="avatar-name">
                                    <a class="text-gray small" href="#">dev.to</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 my-2">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a href="/courses/authentication-with-django-react-and-docker-19/" class="position-relative">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                        <span class="badge badge-secondary position-absolute listing-badge"></span>
                    </a>
                    <div class="card-body">
                        <div class="post-meta mb-2 small">
                            <a class="mr-3"><i class="ti ti-eye text-dark mr-2"></i>1</a>
                            <span class="font-small"><i class="ti ti-timer text-primary mr-2"></i>31</span>
                        </div>
                        <a href="/courses/authentication-with-django-react-and-docker-19/">
                            <div class="mb-2 h6 font-weight-normal">Authentication with Django, React, and Docker-19</div>
                        </a>
                        <div class="post-meta">
                            <div class="media mr-2">
                                <div class="avatar-sm mr-1">
                                    <a class="text-center" href="">
                                        <div class="text-white rounded-circle mb-2 bg-primary">
                                            U
                                        </div>
                                    </a>
                                </div>
                                <div class="avatar-name">
                                    <a class="text-gray small" href="#">dev.to</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 my-2">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a href="/courses/authentication-with-django-react-and-docker-19/" class="position-relative">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                        <span class="badge badge-secondary position-absolute listing-badge"></span>
                    </a>
                    <div class="card-body">
                        <div class="post-meta mb-2 small">
                            <a class="mr-3"><i class="ti ti-eye text-dark mr-2"></i>1</a>
                            <span class="font-small"><i class="ti ti-timer text-primary mr-2"></i>31</span>
                        </div>
                        <a href="/courses/authentication-with-django-react-and-docker-19/">
                            <div class="mb-2 h6 font-weight-normal">Authentication with Django, React, and Docker-19</div>
                        </a>
                        <div class="post-meta">
                            <div class="media mr-2">
                                <div class="avatar-sm mr-1">
                                    <a class="text-center" href="">
                                        <div class="text-white rounded-circle mb-2 bg-primary">
                                            U
                                        </div>
                                    </a>
                                </div>
                                <div class="avatar-name">
                                    <a class="text-gray small" href="#">dev.to</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 my-2">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a href="/courses/authentication-with-django-react-and-docker-19/" class="position-relative">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                        <span class="badge badge-secondary position-absolute listing-badge"></span>
                    </a>
                    <div class="card-body">
                        <div class="post-meta mb-2 small text-gray">
                            <span class="mr-3"><i class="ti ti-eye text-dark mr-2"></i>1</span>
                            <span><i class="ti ti-timer text-primary mr-2"></i>31</span>
                        </div>
                        <a href="/courses/authentication-with-django-react-and-docker-19/">
                            <div class="mb-2 h6 font-weight-normal">Authentication with Django, React, and Docker-19</div>
                        </a>
                        <div class="post-meta">
                            <div class="media mr-2">
                                <div class="avatar-sm mr-1">
                                    <a class="text-center" href="">
                                        <div class="text-white rounded-circle mb-2 bg-primary">
                                            U
                                        </div>
                                    </a>
                                </div>
                                <div class="avatar-name">
                                    <a class="text-gray small" href="#">dev.to</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 my-2">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a href="/courses/authentication-with-django-react-and-docker-19/" class="position-relative">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                        <span class="badge badge-secondary position-absolute listing-badge"></span>
                    </a>
                    <div class="card-body">
                        <div class="post-meta mb-2 small">
                            <a class="mr-3"><i class="ti ti-eye text-dark mr-2"></i>1</a>
                            <span class="font-small"><i class="ti ti-timer text-primary mr-2"></i>31</span>
                        </div>
                        <a href="/courses/authentication-with-django-react-and-docker-19/">
                            <div class="mb-2 h6 font-weight-normal">Authentication with Django, React, and Docker-19</div>
                        </a>
                        <div class="post-meta">
                            <div class="media mr-2">
                                <div class="avatar-sm mr-1">
                                    <a class="text-center" href="">
                                        <div class="text-white rounded-circle mb-2 bg-primary">
                                            U
                                        </div>
                                    </a>
                                </div>
                                <div class="avatar-name">
                                    <a class="text-gray small" href="#">dev.to</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 my-2">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a href="/courses/authentication-with-django-react-and-docker-19/" class="position-relative">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                        <span class="badge badge-secondary position-absolute listing-badge"></span>
                    </a>
                    <div class="card-body">
                        <div class="post-meta mb-2 small">
                            <a class="mr-3"><i class="ti ti-eye text-dark mr-2"></i>1</a>
                            <span class="font-small"><i class="ti ti-timer text-primary mr-2"></i>31</span>
                        </div>
                        <a href="/courses/authentication-with-django-react-and-docker-19/">
                            <div class="mb-2 h6 font-weight-normal">Authentication with Django, React, and Docker-19</div>
                        </a>
                        <div class="post-meta">
                            <div class="media mr-2">
                                <div class="avatar-sm mr-1">
                                    <a class="text-center" href="">
                                        <div class="text-white rounded-circle mb-2 bg-primary">
                                            U
                                        </div>
                                    </a>
                                </div>
                                <div class="avatar-name">
                                    <a class="text-gray small" href="#">dev.to</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 my-2">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a href="/courses/authentication-with-django-react-and-docker-19/" class="position-relative">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                        <span class="badge badge-secondary position-absolute listing-badge"></span>
                    </a>
                    <div class="card-body">
                        <div class="post-meta mb-2 small">
                            <a class="mr-3"><i class="ti ti-eye text-dark mr-2"></i>1</a>
                            <span class="font-small"><i class="ti ti-timer text-primary mr-2"></i>31</span>
                        </div>
                        <a href="/courses/authentication-with-django-react-and-docker-19/">
                            <div class="mb-2 h6 font-weight-normal">Authentication with Django, React, and Docker-19</div>
                        </a>
                        <div class="post-meta">
                            <div class="media mr-2">
                                <div class="avatar-sm mr-1">
                                    <a class="text-center" href="">
                                        <div class="text-white rounded-circle mb-2 bg-primary">
                                            U
                                        </div>
                                    </a>
                                </div>
                                <div class="avatar-name">
                                    <a class="text-gray small" href="#">dev.to</a>
                                </div>
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
    name: 'Posts',
}
</script>