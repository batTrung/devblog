<template>
    <div class="text-center mt-5">
      <div class="mt-12">
        <img src="../assets/images/404.png" alt="">
      </div>
      <h1 class="display-4">Oops! Page not found</h1>
      <b-button
        :to="{ name: 'home' }"
        variant="link"
        class="btn-custom btn-success my-4 animate-up-1">
        <i class="fas fa-arrow-left"></i>
        Trang chủ
      </b-button>
    </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>
