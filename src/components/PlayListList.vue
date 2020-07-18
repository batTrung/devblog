<template>
    <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 my-2"
            v-for="(playlist, index) in playLists"
            :key="index">
            <div class="card h-100 d-flex flex-column justify-content-between bg-transparent border-0">
                <div class="b-playlist">
                    <div class="v-img" @mouseover="hoverPlayListId = index" @mouseleave="hoverPlayListId = null">
                        <img src="http://azyrusthemes.com/circlevideo/images/playlist-1.png" alt="" class="l-1">
                        <img src="http://azyrusthemes.com/circlevideo/images/video1-2.png" alt="" class="l-2">
                        <a href="single-video-tabs.html"><img src="http://azyrusthemes.com/circlevideo/images/video1-2.png" alt="" class="l-3"></a>
                        <div class="items">20</div>
                        <div class="v-add left" v-show="hoverPlayListId == index"><i class="fas fa-star text-warning"></i></div>
                    </div>
                </div>
                <div class="card-body bg-white shadow-sm">
                    <a href="">
                        <h6 class="font-weight-normal">Authentication with Django, React, {{ playlist }}</h6>
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
    name: 'PlayListList',
    props: {
        playLists: Number,
    },
    data() {
        return {
            hoverPlayListId: null,
        }
    },
}
</script>