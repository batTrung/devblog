<template>
    <div class="row">
        <div class="col-md-4 col-sm-6 my-2"
            v-for="(page, index) in pages"
            :key="index">
            <div class="card h-100 d-flex flex-column justify-content-between shadow-sm border-light" style="border-radius: .35rem;">
                <div class="card-body d-flex flex-column pb-0">
                    <div>
                        <b-avatar button size="lg" variant="primary" text="FF" class="align-baseline mr-2"></b-avatar>
                        <a target="_blank" href="">simplebetterthancomplex.com</a>
                    </div>
                    <p class="my-3">
                        Miêu tả trang {{ page }}
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
</template>

<script>
export default {
    name: 'PageList',
    props: {
        pages: Number,
    },
}
</script>