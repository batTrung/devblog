<template>
    <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 my-2"
                v-for="(post, index) in posts"
                :key="index">
                <div class="card h-100 d-flex flex-column justify-content-between shadow-sm">
                    <a
                        :href="post"
                        class="position-relative"
                        @mouseover="hoverPostId = index"
                        @mouseleave="hoverPostId = null">
                        <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top p-1" alt="Authentication with Django, React, and Docker-19">
                    </a>
                    <div class="v-add left" v-show="hoverPostId == index"><i class="far fa-star text-gray"></i></div>
                    <b-dropdown variant="link" class="v-add right" right v-show="hoverPostId == index">
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
                            <span class="mr-3"><i class="fas fa-star text-warning mr-2"></i>31</span>
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
        </div>
</template>

<script>
export default {
    name: 'PostList',
    props: {
        posts: Number,
    },
    data() {
        return {
            hoverPostId: null,
        }
    }
}
</script>