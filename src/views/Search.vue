<template>
    <div>
        <div class="row">
            <aside class="col-12 col-lg-3 d-none d-lg-block order-2">
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Sắp xếp</span>
                    </div>
                    <b-form-group class="ml-2">
                      <b-form-radio-group
                        v-model="searchQuery.ordering"
                        name="ordering"
                        :options="options.ordering"
                        stacked>
                      </b-form-radio-group>
                    </b-form-group>
                </div>
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Loại tìm kiếm</span>
                    </div>
                    <b-form-group class="ml-2">
                      <b-form-checkbox-group
                        v-model="searchQuery.category"
                        name="category"
                        :options="options.category"
                        stacked>
                      </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Ngôn ngữ</span>
                    </div>
                    <b-form-group class="ml-2">
                      <b-form-checkbox-group
                        v-model="searchQuery.language"
                        name="language"
                        :options="options.language"
                        stacked>
                      </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <div class="card border-light p-3 mb-3">
                    <div class="mb-2">
                      <span class="h6 font-weight-bold text-underline text-uppercase">Chủ đề</span>
                    </div>
                    <b-form-group class="ml-2">
                        <b-form-checkbox-group
                          id="topic"
                          v-model="searchQuery.topic"
                          name="topic"
                          :options="options.topic"
                          stacked
                        >
                        </b-form-checkbox-group>
                    </b-form-group>
                </div>
            </aside>
            <div class="col-12 col-lg-9">
                <h6>300 <span class="font-weight-bold">Kết quả</span></h6>
                <div class="row">
                    <div class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2">
                        <div class="card h-100 d-flex flex-column justify-content-between border-light bb-red">
                            <div class="row no-gutters align-items-center">
                                <div class="col-12 col-lg-6 col-xl-4 p-2">
                                    <a href="#">
                                        <img src="https://themesberg.com/docs/spaces/assets/img/private-office.jpg" alt="private office" class="card-img p-2">
                                    </a>
                                </div>
                                <div class="col-12 col-lg-6 col-xl-8">
                                    <div class="card-body">
                                       <a href="#">
                                            <h4 class="h5">Giới thiệu về React Spectrum, design system của Adobe</h4>
                                        </a>
                                        <div class="d-flex my-3">
                                            <div class="post-meta mb-2 small text-gray"><span class="mr-3"><i class="ti ti-eye text-dark mr-1"></i>0</span><span class="mr-3"><i class="far fa-heart text-danger mr-1"></i>0</span><span><i class="ti ti-timer text-primary mr-1"></i>18&nbsp;phút trước</span></div>
                                        </div>
                                        <a href="/pages/viblo.asia" class="small"><span class="b-avatar mr-1 badge-secondary rounded-circle" style="width: 2.5em; height: 2.5em;"><span class="b-avatar-img"><img src="http://localhost:8000/media/websites/filters.png" alt="avatar"></span>
                                            </span> viblo.asia </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2">
                        <div class="card h-100 d-flex flex-column justify-content-between border-light bb-red">
                            <div class="row no-gutters align-items-center">
                                <div class="col-12 col-lg-6 col-xl-4 text-center p-2">
                                    <a href="#">
                                        <b-avatar src="https://themesberg.com/docs/spaces/assets/img/private-office.jpg" size="10rem"></b-avatar>
                                    </a>
                                </div>
                                <div class="col-12 col-lg-6 col-xl-8">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between">
                                            <a href="#">
                                                <h4 class="h5">Dev.tube</h4>
                                            </a>
                                            <button class="btn btn-danger btn-sm">Đăng ký</button>
                                        </div>
                                        <p class="my-3">
                                            I kinda love this github new feature about readme profile files. So i decided to create profile views counter, but then
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            <div class="col pl-0">
                                                <span class="text-muted font-small d-block mb-2">Lượt xem</span>
                                                <span class="h5 text-dark font-weight-bold">500$</span>
                                            </div>
                                            <div class="col">
                                                <span class="text-muted font-small d-block mb-2">Bài viết</span>
                                                <span class="h5 text-dark font-weight-bold">12</span>
                                            </div>
                                            <div class="col pr-0">
                                                <span class="text-muted font-small d-block mb-2">Đăng ký</span>
                                                <span class="h5 text-dark font-weight-bold">1200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-10 col-md-6 col-lg-12 mb-2">
                        <div class="card h-100 d-flex flex-column justify-content-between border-light bb-red">
                            <div class="row no-gutters align-items-center">
                                <div class="col-12 col-lg-6 col-xl-4 p-2">
                                    <div class="b-playlist">
                                        <div class="v-img">
                                            <img src="http://azyrusthemes.com/circlevideo/images/playlist-1.png" alt="" class="l-1">
                                            <img src="http://azyrusthemes.com/circlevideo/images/video1-2.png" alt="" class="l-2">
                                            <a href="">
                                                <img src="http://azyrusthemes.com/circlevideo/images/video1-2.png" alt="" class="l-3">
                                            </a>
                                            <div class="items">3</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-xl-8">
                                    <div class="card-body">
                                        <a href="#">
                                                <h4 class="h5">Dev.tube</h4>
                                            </a>
                                        <div class="d-flex my-3">
                                            <div class="post-meta mb-2 small text-gray"><span class="mr-3"><i class="ti ti-eye text-dark mr-1"></i>3</span><span class="mr-3"><i class="fas fa-star text-warning mr-1"></i>0</span><span><i class="ti ti-timer text-primary mr-1"></i>10&nbsp;giờ, 28&nbsp;phút trước</span></div>
                                        </div>
                                        <a href="/pages/viblo.asia" class="small"><span class="b-avatar mr-1 badge-secondary rounded-circle" style="width: 2.5em; height: 2.5em;"><span class="b-avatar-img"><img src="http://localhost:8000/media/websites/filters.png" alt="avatar"></span>
                                            </span> viblo.asia </a>
                                    </div>
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
    name: 'Search',
    data() {
      return {
        searchQuery: {
          search: '',
          ordering: '-created',
          category: [],
          language: [],
          topic: [],
        },
        options: {
          ordering: [
            { text: 'Mới cập nhật', value: '-created', disabled: false },
            { text: 'Lượt xem', value: '-views', disabled: false },
            { text: 'Lượt thích', value: '-users_saved', disabled: false },
            { text: 'Lượt đăng ký', value: '-subscribers', disabled: false },
            { text: 'Nhiều sao', value: '-users_like', disabled: false },
          ],
          category: [
              { text: 'Bài viết', value: 'post', disabled: false },
              { text: 'Trang', value: 'page', disabled: false },
              { text: 'Danh sách', value: 'playlist', disabled: false },
          ],
          language: [
            { text: 'Tiếng Việt', value: 'vi', disabled: false },
            { text: 'English', value: 'en', disabled: false },
          ],
          topic: [
              { text: 'Web Development', value: 'web-development', disabled: false },
              { text: 'Machine Learning', value: 'machine-learning', disabled: false },
              { text: 'Programming Languages', value: 'programming-languages', disabled: false },
              { text: 'Software Engineering', value: 'software-engineering', disabled: false },
              { text: 'Design & illustration', value: 'design-illustration', disabled: false },
              { text: 'Computers & Technology', value: 'computers-technology', disabled: false },
          ],
        }
      }
    },
    watch: {
      searchQuery: {
        handler() {
          console.log("change query: ", this.searchQuery)
        },
        deep: true,
      },
    },
}
</script>