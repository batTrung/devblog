<template>
  <div>
    <div
      :class="'alert alert-block alert-' + messages.name"
      v-if="messages.content.length">
      <ul class="m-0">
        <li
          v-for="(message, index) in messages.content"
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
      type: Object,
      default: () => {
        return {
          name: 'danger',
          content: [],
        }
      }
    },
  },
}
</script>

