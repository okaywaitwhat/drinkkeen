<template>
    <section class="p-lg-5">
        <section class="d-flex">
          <section class="recipes-cards-cont">
            <div class="card-columns">
              <Recipe :recipe="recipe" v-for="recipe in menu.data" :key="recipe.name"></Recipe>
            </div>
          </section>
        </section>
    </section>
</template>

<script>
import Recipe from './Recipe'
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
  name: 'category',
  components: {
    Recipe
  },
  data () {
    return {
      // oye manue: require('../data/recipes/' + this.$router.currentRoute.name + 'cocktails.js'),
      menu: cocktails[this.$router.currentRoute.name]
    }
  },
  computed: {
    sortedCocktails: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      return this.menu.sort(compare);
    }
  }
}
</script>

<style scoped lang="scss">

.recipes-cards-cont {
  background-color: #fff;
  padding: 2rem !important;
  align-content: space-between;
}

@media screen and (max-width: 700px) {
  #recipesSection {
    padding: 1rem !important;
  }
}

</style>
