<template>
  <section>
    <div class="text-center" v-for="(category, i) in categories" :key="i">
      <Collection :category="category" />
      <hr class="mt-5 mb-5">
    </div>
  </section>
</template>

<script>
import Collection from './Collection';
import classic from '../data/recipes/classiccocktails.js';
import modern from '../data/recipes/moderncocktails.js';
import author from '../data/recipes/authorcocktails.js';
import molecular from '../data/recipes/molecularcocktails.js';

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

<style lang="scss" scoped>
section {
  padding: 4rem;
  min-height: 100%;
  width: 100%;
}
</style>
