<template>
  <div>
    <section v-if="category">
      <!-- TODO: sacar el style -->
      <div v-if="recipe" style="padding: 5% 25%;">
        <Recipe :recipe="recipe" />
      </div>
      <Category v-else :category="category" />
    </section>
    <section v-else class="collections container-fluid">
      <p class="lead pb-4 pt-5 pl-lg-5 pr-lg-5"><span class="second-font">Descubre los sabores del mundo y tu cocktail ideal.</span><span class="second-font">Encontrá las recetas ideales y dejate sorprender por nuevos sabores, prepara cócteles desde tu casa y disfruta de increíbles bebidas.</span></p>
      <div class="container text-center" v-for="(category, i) in categories" :key="i">
        <Collection :category="category" />
        <hr class="mt-5 mb-5">
      </div>
    </section>
  </div>
</template>

<script>
import Recipe from './Recipe.vue'
import Category from './Category.vue'
import Collection from './Collection.vue'
import author from '../data/recipes/authorcocktails.js'
import classic from '../data/recipes/classiccocktails.js'
import modern from '../data/recipes/moderncocktails.js'
import molecular from '../data/recipes/molecularcocktails.js'

const cocktails = {
  author,
  classic,
  modern,
  molecular
}

export default {
  name: 'cocktailsview',
  components: { Collection, Category, Recipe },
  data () {
    return {
      categories: { classic, modern, author, molecular }
    }
  },
  computed: {
    category () {
      const categoryId = this.$route.params.category
      return categoryId && cocktails[categoryId]
    },
    recipe () {
      const recipeId = this.$route.params.recipe
      return this.category.data.find((recipe) => {
        // TODO: crear propiedad `id` y hacer `recipe.id === recipeId`
        // lo que hace es buscar todos (g) los espacios (\s)
        return recipe.name.toLowerCase().replace(/\s/g, '-') === recipeId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.collections {
  padding-top: 1rem;
  min-height: 100%;
  width: 100%;
  text-align: center;
}
</style>
