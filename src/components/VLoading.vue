<template>
    <div class="col-12 my-5" v-show="show">
        <b-overlay :show="show" rounded="sm">
        </b-overlay>
    </div>
</template>
<script>
export default {
    name: 'VLoading',
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false,
        }
    }
}
</script>