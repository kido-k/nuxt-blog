<template>
  <div>
    <TheHeader />
    <div class="wrapper">
      <nuxt class="container"/>
    </div>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>
