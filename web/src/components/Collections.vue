<template>
  <section>
    <div class="text-center p-5" v-for="(category, i) in categories" :key="i">
      <Collection :category="category" />
    </div>
  </section>
</template>

<script>
import Collection from './Collection';
import classic from '../data/classiccocktails.js';
import modern from '../data/moderncocktails.js';
import author from '../data/authorcocktails.js';
import molecular from '../data/molecularcocktails.js';

export default {
  name: 'collections',
  components: { Collection },
  data() {
    return {
      categories: { classic, modern, author, molecular }
    }
  }
}
</script>

<style lang="scss" scoped></style>
