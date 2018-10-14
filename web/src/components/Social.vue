<template>
    <section>
      <div class="container-fluid">
        <div class="row">
            <Meeting :post="meeting" v-for="meeting in posts" :key="meeting.title" />
        </div>
      </div>
    </section>
</template>

<script>
import Meeting from './Meeting'
import posts from '../data/socialevents.js';

export default {
  name: 'social',
  components: {
    Meeting,
  },
  data () {
    return {
      posts,
    }
  }
}
</script>

<style scoped lang="scss">
section {
  padding-top: 4rem;
  min-height: 100%;
  width: 100%;
}
</style>
