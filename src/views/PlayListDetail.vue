<template>
    <div>
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="card h-100 d-flex flex-column justify-content-between bg-transparent border-0">
                    <div class="b-playlist">
                        <div
                            class="v-img"
                            @mouseover="hoverPlayListId = true"
                            @mouseleave="hoverPlayListId = false">
                            <img
                                v-for="(post, index) in playlist.posts.slice(1, 3)"
                                :key="index"
                                :src="post.photo_url"
                                :class="'l-' + (2 - index)">
                            <router-link
                                :to="{ name: 'playlist-detail', params: { slug: playlist.slug } }">
                                <img :src="playlist.posts[0].photo_url" class="l-3">
                            </router-link>
                            <div class="items">{{ playlist.posts.length }}</div>
                            <div
                                class="v-add left"
                                @click="onStar(playlist.user.username, playlist.slug)"
                                v-show="hoverPlayListId == true">
                                <i
                                    class="fas fa-star text-warning"
                                    v-tooltip="'Xóa star ' + playlist.title"
                                    v-if="playlist.users_star.includes(currentUser.username)">
                                </i>
                                <i
                                    v-tooltip="'Thêm star ' + playlist.title"
                                    class="far fa-star text-gray"
                                    v-else></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body bg-white shadow-sm">
                        <div class="post-meta mb-2 small text-gray">
                            <span class="mr-3"><i class="ti ti-eye text-dark mr-1"></i>{{ playlist.views }}</span>
                            <span class="mr-3"><i class="fas fa-star text-warning mr-1"></i>{{ playlist.users_star.length }}</span>
                            <span class=""><i class="ti ti-timer text-primary mr-1"></i>{{ playlist.timesince }} trước</span>
                        </div>
                        <router-link
                            :to="{ name: 'playlist-detail', params: { slug: playlist.slug } }">
                            <h6 class="font-weight-normal">{{ playlist.title }}</h6>
                        </router-link>
                        <div class="small d-flex align-items-center py-2">
                            <b-avatar button :variant="playlist.user.username|generateColor" :src="playlist.user.photo" class="align-baseline mr-1" v-if="playlist.user.photo"></b-avatar>
                            <b-avatar button :variant="playlist.user.username|generateColor" :text="playlist.user.username|generateAvatar" class="align-baseline mr-1" v-else></b-avatar>
                            <a href="javascript:void(0)">{{ playlist.user.username }}</a>
                        </div>
                        <div v-show="playlist.user.username == currentUser.username">
                            <div
                                class="d-flex align-items-center justify-content-between text-muted small">
                                <div>
                                    <i class="fas fa-lock fa-sm mr-1"></i> {{ playlist.status_display }}
                                </div>
                                <b-dropdown
                                    variant="link"
                                    no-caret
                                    right>
                                    <template v-slot:button-content>
                                        <i class="fas fa-ellipsis-v text-gray"></i>
                                    </template>
                                    <b-dropdown-item>
                                        <div
                                            class="d-flex justify-content-between"
                                            v-b-modal.delete-playlist>
                                            Xóa
                                            <i class="fas fa-trash-alt text-danger"></i>
                                        </div>
                                    </b-dropdown-item>
                                    <b-dropdown-item>
                                        <div
                                            class="d-flex justify-content-between"
                                            v-b-modal.edit-playlist>
                                            Sửa
                                            <i class="far fa-edit text-primary"></i>
                                        </div>
                                    </b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <b-modal
                id="delete-playlist"
                title="Xóa danh sách"
                hide-footer
                centered>
                <p>
                    Bạn có chắc muốn xóa danh sách "{{ playlist.title }}"
                </p>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-secondary mr-2" @click="$bvModal.hide('delete-playlist')">Quay lại</button>
                    <button class="btn btn-danger">Xóa</button>
                </div>
            </b-modal>
            <b-modal
                id="edit-playlist"
                title="Sửa danh sách"
                hide-footer
                centered>
                <b-form>
                    <b-form-group
                        label="Tên danh sách">
                        <b-form-input v-model="playlist.title"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Trạng thái">
                        <b-form-select v-model="playlist.status">
                            <b-form-select-option value="Công khai">Công khai</b-form-select-option>
                            <b-form-select-option value="Ẩn">Ẩn</b-form-select-option>
                        </b-form-select>
                    </b-form-group>
                </b-form>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-secondary mr-2" @click="$bvModal.hide('edit-playlist')">Quay lại</button>
                    <button class="btn btn-success">Cập nhật</button>
                </div>
            </b-modal>
            <div class="col-12 col-md-8">
                <div class="d-flex justify-content-between mb-3">
                    <h6 class="mt-3">69 <span class="font-weight-bold">Bài viết</span></h6>
                    <b-nav>
                        <b-nav-item-dropdown right>
                        <template slot="button-content">
                            Sắp xếp <i class="fas fa-sort-amount-up"></i>
                        </template>
                        <b-dropdown-item>Mới cập nhật</b-dropdown-item>
                        <b-dropdown-item>Xem nhiều</b-dropdown-item>
                        <b-dropdown-item>Nhiều lượt thích</b-dropdown-item>
                    </b-nav-item-dropdown>
                    </b-nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import store from '@/store'
import { generateAvatar, generateColor } from '@/common/filters'
import {
    FETCH_PLAYLIST,
} from '@/store/actions.type'
import { PlayListsService } from "@/common/api.service"

export default {
    name: 'PlayListDetail',
    beforeRouteEnter(to, from, next) {
        Promise.all([
            store.dispatch(FETCH_PLAYLIST, to.params.slug),
        ]).then(() => {
            next()
        })
    },
    data() {
        return {
            hoverPlayListId: null,
        }
    },
    filters: {
        generateAvatar,
        generateColor,
    },
    computed: {
        ...mapGetters(['playlist', 'isAuthenticated', 'currentUser'])
    },
    methods: {
        onStar(username, slug) {
            if (this.isAuthenticated) {
                PlayListsService.update(`${username}/${slug}/star`)
                    .then(() => {
                        console.log('on star')
                    })
            } else {
                this.gotoLogin()
            }
        },
    },
}
</script>
