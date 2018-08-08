<template>
    <blockquote class="blockquote mb-0">
    <li v-for="item in drinks" :key="item.drinks">{{item.name}}</li>
  </blockquote>
</template>

<script>
import drinks from '../data/drinks.js';

export default {
  name: 'drinks',
  data () {
    return {
      drinks,
    }
  }
}
</script>

<style scoped lang="scss">

</style>