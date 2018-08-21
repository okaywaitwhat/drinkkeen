<template>
<section>
  <template>
    <Collection></Collection>
  </template>
</section>
</template>

<script>
import Collection from './Collection'
import classic from '../data/classiccocktails.js';

export default {
  name: 'collections',
  components: { Collection },
  data () {
    return {
      classic,
      categorys: {
        classic, modern, author, molecular,
      }
    }
  }
}
</script>

