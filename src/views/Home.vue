<template>
    <div>
        <section class="welcome-area">
          <div
            class="welcome-bg"
            :style="{'background-image': 'url(' + require('@/assets/images/welcome.jpg') + ')'}">
              <div
                class="welcome-clip"
                :style="{'background': 'url(' + require('@/assets/images/bg-bottom.svg') + ') bottom center no-repeat'}">
                </div>
          </div>
          <div class="welcome-content">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <h1>DevBlog</h1>
                          <p>
                              Tổng hợp các bài viết từ các trang học lập trình phổ biến, giúp cho việc xem và cập nhật tin tức trở nên dễ dàng và tiện lợi.
                          </p>
                          <button class="btn btn-danger btn-rounded">Đăng ký</button>
                      </div>
                      <div class="offset-lg-1 col-lg-5 col-md-12 col-sm-12 col-xs-12 align-self-center">
                          <div class="apps">
                              <a href="" class="app-item">
                                  <div class="icon">
                                      <img src="../assets/images/apps/1.png" class="img-fluid" alt="">
                                  </div>
                                  <div class="base">
                                      <strong>djangobat</strong>
                                      <div class="platforms">
                                        <i class="far fa-file-code"></i>
                                        <i class="fab fa-app-store"></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="dark-app-single.html" class="app-item">
                                  <div class="icon">
                                      <img src="../assets/images/apps/1.png" class="img-fluid" alt="">
                                  </div>
                                  <div class="base">
                                      <strong>Q & A</strong>
                                      <div class="platforms">
                                        <i class="far fa-file-code"></i>
                                        <i class="fab fa-app-store"></i>
                                      </div>
                                  </div>
                              </a>
                              <a href="dark-app-single.html" class="app-item">
                                  <div class="icon">
                                      <img src="../assets/images/apps/1.png" class="img-fluid" alt="">
                                  </div>
                                  <div class="base">
                                      <strong>E-Commerce</strong>
                                      <div class="platforms">
                                        <i class="far fa-file-code"></i>
                                        <i class="fab fa-app-store"></i>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <ul class="list-inline mt-2">
                        <li class="list-inline-item mr-3">
                            <router-link
                                :to="{ name: 'posts' }"
                                class="h5">
                                Bài viết
                            </router-link>
                        </li>
                        <li class="list-inline-item mr-3 active">
                            <a
                                href="#"
                                :class="getActiveClass(postsQuery.ordering, '-created')"
                                @click.prevent="postsQuery.ordering = '-created'">
                                Mới cập nhật
                            </a>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a
                                href="#"
                                :class="getActiveClass(postsQuery.ordering, '-views')"
                                @click.prevent="postsQuery.ordering = '-views'">
                                Xem nhiều
                            </a>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a
                                href="#"
                                :class="getActiveClass(postsQuery.ordering, '-users_like')"
                                @click.prevent="postsQuery.ordering = '-users_like'">
                                Nhiều lượt thích
                            </a>
                        </li>
                    </ul>
                    <b-nav>
                        <b-nav-item-dropdown right>
                            <template slot="button-content">
                                Chủ đề
                            </template>
                            <b-dropdown-item
                                :class="getActiveClass(postsQuery.topic, '')"
                                @click.prevent="postsQuery.topic = ''">
                                Tất cả
                            </b-dropdown-item>
                            <b-dropdown-item
                                v-for="(topic, index) in topics"
                                :key="index"
                                :class="getActiveClass(postsQuery.topic, topic.title)"
                                @click.prevent="postsQuery.topic = topic.title">
                                {{ topic.title }}
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-nav>
                </div>
                <PostList
                    :numPost="8"
                    :query="postsQuery" />
            </div>
        </section>
        <section class="section bg-main">
            <div class="container">
                <ul class="list-inline mb-2">
                    <li class="list-inline-item mr-3">
                        <router-link :to="{ name: 'play-list' }" class="h5">Danh sách</router-link>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a 
                            href="#"
                            :class="getActiveClass(playlistsQuery.ordering, '-users_star')"
                            @click.prevent="playlistsQuery.ordering = '-users_star'">
                            Nhiều sao
                        </a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a 
                            href="#"
                            :class="getActiveClass(playlistsQuery.ordering, '-updated')"
                            @click.prevent="playlistsQuery.ordering = '-updated'">
                            Vừa cập nhật
                        </a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a 
                            href="#"
                            :class="getActiveClass(playlistsQuery.ordering, '-views')"
                            @click.prevent="playlistsQuery.ordering = '-views'">
                            Xem nhiều
                        </a>
                    </li>
                </ul>
                <PlayLists
                    :numPlayList="4"
                    :query="playlistsQuery" />
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <ul class="list-inline mb-2">
                        <li class="list-inline-item mr-3">
                            <router-link :to="{ name: 'pages' }" class="h5">Trang</router-link>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a
                                href=""
                                :class="getActiveClass(pagesQuery.ordering, '-subscribers')"
                                @click.prevent="pagesQuery.ordering = '-subscribers'">Nhiều lượt đăng ký
                            </a>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a
                                href=""
                                :class="getActiveClass(pagesQuery.ordering, '-created')"
                                @click.prevent="pagesQuery.ordering = '-created'">Mới cập nhật
                            </a>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a
                                href=""
                                :class="getActiveClass(pagesQuery.ordering, '-views')"
                                @click.prevent="pagesQuery.ordering = '-views'">Xem nhiều</a>
                        </li>
                    </ul>
                    <b-nav>
                        <b-nav-item-dropdown right>
                            <template slot="button-content">
                                Chủ đề
                            </template>
                            <b-dropdown-item
                                :class="getActiveClass(pagesQuery.topic, '')"
                                @click.prevent="pagesQuery.topic = ''">Tất cả</b-dropdown-item>
                            <b-dropdown-item
                                v-for="(topic, index) in topics"
                                :key="index"
                                :class="getActiveClass(pagesQuery.topic, topic.title)"
                                @click.prevent="pagesQuery.topic = topic.title">
                                {{ topic.title }}
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-nav>
                </div>
                <PageList
                    :numPage="3"
                    :query="pagesQuery" />
            </div>
        </section>
    </div>
</template>
<script>
import PostList from '@/components/PostList';
import PageList from '@/components/PageList'
import PlayLists from '@/components/PlayLists'
import { activeClass, getTopics } from '@/common/mixins'

export default {
    name: 'Home',
    title: 'Tổng hợp các bài viết lập trình',
    components: {
        PostList,
        PageList,
        PlayLists,
    },
    mixins: [
        activeClass,
        getTopics,
    ],
    data() {
        return {
            postsQuery: {
                ordering: '-created',
                language: '',
                search: '',
                topic: '',
            },
            pagesQuery: {
                ordering: '-subscribers',
                language: '',
                search: '',
                topic: '',
            },
            playlistsQuery: {
                ordering: '-users_star',
                search: '',
            },
        }
    },
}
</script>

<style>
.welcome-area {
    min-height: 520px;
    height: auto;
    position: relative;
}

.welcome-area .welcome-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.welcome-area .welcome-bg:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.85;
    background-image: linear-gradient(127deg, #4C4D59 0%, #313237 91%);
    z-index: 3;
}

.welcome-area .welcome-bg .welcome-clip {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    bottom: 0px;
}
.welcome-area .welcome-bg:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: none;
    z-index: 6;
}

.welcome-area .welcome-content {
    position: absolute;
    width: 100%;
    top: 30%;
    left: 0;
    z-index: 11;
    transform: perspective(1px) translateY(0%);
}

.welcome-area .welcome-content h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;
    letter-spacing: 1.4px;
    color: #fff;
    margin-bottom: 30px !important;
}

.welcome-area .welcome-content p {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: .88px;
    left: 0.53px;
    color: #fff;
    margin-bottom: 30px;
}

.align-self-center {
    align-self: center !important;
}

.welcome-area .welcome-content .apps {
    padding-top: 30px;
}

.welcome-area .welcome-content .apps .app-item {
    display: block;
    height: 70px;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    position: relative;
}

.welcome-area .welcome-content .apps .app-item .icon {
    width: 70px;
    float: left;
    position: relative;
    z-index: 2;
}

.welcome-area .welcome-content .apps .app-item .base {
    position: absolute;
    float: left;
    width: calc(100% - 60px);
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    top: 5px;
    right: 0px;
    z-index: 1;
    overflow: hidden;
}

.welcome-area .welcome-content .apps .app-item .base:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0px;
    background-image: linear-gradient(127deg, #16a167 0%, #3aca7a 91%);
}

.welcome-area .welcome-content .apps .app-item .base strong {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 30px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.7px;
    color: #3B566E;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.welcome-area .welcome-content .apps .app-item .base .platforms {
    float: right;
    height: 60px;
    margin-right: 20px;
}

.welcome-area .welcome-content .apps .app-item .base .platforms i {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
    color: #C4C7F1;
}

@media (max-width: 991px) {
    .welcome-area .welcome-content {
        position: relative;
        -webkit-transform: translateY(0%) !important;
        transform: translateY(0%) !important;
        padding-top: 100px;
    }
}
</style>
