<template>
  <section class="container">
    <p class="lead text-center pb-4">Encontrá las recetas ideales y dejate sorprender por nuevos sabores, prepara cócteles desde tu casa y disfruta de increíbles bebidas con vodka, tequila, whisky, ron, ginebra y más. Descubre los sabores del mundo y tu cocktail ideal.</p>
    <div class="container text-center" v-for="(category, i) in categories" :key="i">
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
  padding-top: 4rem;
  min-height: 100%;
  width: 100%;
}
</style>
