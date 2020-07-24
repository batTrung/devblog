<template>
  <div
    class="message-bottom"
    v-show="message && dismissCountDown">
    <b-alert
        :show="message && dismissCountDown"
        variant="success"
        dismissible
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
        >
        {{ message }}
    </b-alert>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import {
    MESSAGE_SET,
} from '@/store/mutations.type'
export default {
  name: 'VMessageBottom',
  data() {
    return {
        dismissCountDown: 0,
    }
  },
  computed: {
    ...mapGetters(['message'])
  },
  watch: {
    message() {
        console.log('message on change: ', this.message)
        this.dismissCountDown = 5
        console.log('dismissCountDown: ', this.dismissCountDown)
    },
  },
  methods: {
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        if (dismissCountDown === 0) {
            this.$store.commit(
                MESSAGE_SET,
                '',
            )
        }
      },
  },
}
</script>