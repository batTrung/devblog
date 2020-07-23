import {
  SET_ERRORS,
} from '@/store/mutations.type'

function getTitle(vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function' ? title.call(vm) : title
  }
}

export const titleMixin = {
  created() {
    const title = getTitle(this)
    if (title) {
      document.title = `DevBat - ${title}`
    }
  }
}

export const doLogin = {
  methods: {
    gotoLogin() {
      this.$router.push(
          {
              name: 'login',
              query: { redirect: this.$route.path },
          }
      ),
      this.$store.commit(
        SET_ERRORS,
        ['Bạn phải đăng nhập để tiếp tục'],
      )
    }
  }
}
