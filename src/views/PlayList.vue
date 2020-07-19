<template>
    <div class="page">
        <div class="d-flex justify-content-between">
            <ul class="list-inline mt-2">
                <li class="list-inline-item mr-3">
                    <h5>Danh sách</h5>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="" class="active">Phổ biến</a>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="">Mới cập nhật</a>
                </li>
                <li class="list-inline-item mr-3">
                    <a href="">Xem nhiều</a>
                </li>
            </ul>
            <b-form>
                <div class="input-group bg-white rounded-pill border mr-2 mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent border-0">
                            <i class="ti ti-search"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control border-0 pb-2 mr-4 pl-0" placeholder="Tìm kiếm danh sách" required="">
                </div>
            </b-form>
        </div>
        <PlayListList :playLists="20" />
    </div>
</template>
<script>
import PlayListList from '@/components/PlayListList'

export default {
    name: 'PlayList',
    title: 'Danh sách',
    components: {
        PlayListList,
    },
}
</script>
