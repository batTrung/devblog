import { mapGetters } from "vuex"
import {
  SET_ERRORS,
} from '@/store/mutations.type'
import {
    FETCH_TOPICS,
} from '@/store/actions.type'

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
      document.title = `DevBlog - ${title}`
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

export const activeClass = {
  methods: {
    getActiveClass(a, b) {
      return a == b ? 'color-active' : ''
    },
  },
}

export const getTopics = {
  computed: {
    ...mapGetters(['topics'])
  },
  mounted() {
    this.$store.dispatch(FETCH_TOPICS)
  },
}