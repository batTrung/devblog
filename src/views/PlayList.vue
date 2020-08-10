<template>
    <div class="section bg-main min-vh-100 mt-5">
        <div class="container mt-5">
            <div class="d-flex justify-content-between">
                <ul class="list-inline mt-2">
                    <li class="list-inline-item mr-3">
                        <h5>Danh sách</h5>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a 
                            href=""
                            :class="getActiveClass(playlistsQuery.ordering, '-updated')"
                            @click.prevent="playlistsQuery.ordering = '-updated'">Vừa cập nhật
                        </a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a 
                            href=""
                            :class="getActiveClass(playlistsQuery.ordering, '-users_star')"
                            @click.prevent="playlistsQuery.ordering = '-users_star'">Nhiều star
                        </a>
                    </li>
                    <li class="list-inline-item mr-3">
                        <a 
                            href=""
                            :class="getActiveClass(playlistsQuery.ordering, '-views')"
                            @click.prevent="playlistsQuery.ordering = '-views'">Xem nhiều
                        </a>
                    </li>
                </ul>
                <b-form>
                    <div class="input-group bg-white rounded-pill border mr-2 mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-transparent border-0">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            class="form-control border-0 pb-2 mr-4 pl-0"
                            placeholder="Tìm kiếm danh sách"
                            v-model.lazy="playlistsQuery.search"
                            @keyup="playlistsQuery.search = $event.target.value">
                    </div>
                </b-form>
            </div>
            <PlayLists
                :query="playlistsQuery" />
        </div>
    </div>
</template>
<script>
import PlayLists from '@/components/PlayLists'
import { activeClass } from '@/common/mixins'

export default {
    name: 'PlayList',
    title: 'Danh sách',
    components: {
        PlayLists,
    },
    mixins: [
        activeClass,
    ],
    data() {
        return {
            playlistsQuery: {
                ordering: '-updated',
                search: '',
            },
        }
    },
    methods: {
        getActiveClass(a, b) {
            return a == b ? 'color-active' : ''
        },
    },
}
</script>
