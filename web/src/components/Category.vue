<template>
    <section class="p-lg-5">
        <section class="d-flex">
          <section class="recipes-cards-cont">
            <div class="card-columns">
              <Recipe :recipe="recipe" v-for="recipe in category.data" :key="recipe.name"></Recipe>
            </div>
          </section>
        </section>
    </section>
</template>

<script>
import Recipe from './Recipe'

export default {
  name: 'category',
  components: {
    Recipe
  },
  props: [ 'category' ],
  computed: {
    sortedCocktails: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      return this.category.sort(compare);
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
