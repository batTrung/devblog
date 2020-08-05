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

export const onScroll = {
  data() {
    return {
      lastScrollTop: 0,
      isUp: true,
    }
  },
  methods: {
      scroll(service, items) {
        window.onscroll = () => {

          // Fetch Data
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 200 > document.documentElement.offsetHeight;
          if (bottomOfWindow && this.hasNext) {
            this.hasNext = false
            const params = Object.assign(
              { page: this.page + 1 },
              this.getParams,
            )
            service.query(params)
              .then(({ data }) => {
                this.isLoading = true
                setTimeout(() => {
                  this.isLoading = false
                  items.push(...data.results)
                }, 700)
                this.page++
                if (data.has_next) {
                  setTimeout(() => {
                    this.hasNext = true
                  }, 1000)
                }
              })
          }

          // Auto hide and show navbar
          const navbar = document.getElementsByClassName('smart-scroll')
          if (navbar.length > 0) {
              let scrollTop = window.scrollY
              this.isUp = scrollTop < this.lastScrollTop
              console.log(this.isUp)
              this.lastScrollTop = scrollTop
          }
        }
      },
  },
}