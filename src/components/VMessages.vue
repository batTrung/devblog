<template>
  <div>
    <div
      :class="'alert alert-block alert-' + name"
      v-if="messages.length">
      <ul class="m-0">
        <li
          v-for="(message, index) in messages"
          :key="index">
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VMessages',
  props: {
    messages: {
      type: Array,
      default: () => {
        return []
      },
    },
    name: {
      type: String,
      required: false,
      default: 'danger',
    }
  },
}
</script>

