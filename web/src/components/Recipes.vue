<template>
    <section>
      <FiltersBar></FiltersBar>
        <section id="recipesSection" class="d-flex">
        <FiltersColumn></FiltersColumn>
          <section class="recipes-cards-cont">
            <div class="card-columns">
                <Recipe :recipe="recipe" v-for="recipe in menu" :key="recipe.name"></Recipe>
            </div>
            <Modal></Modal>
          </section>
        </section>
    </section>
</template>

<script>
import Recipe from './Recipe'
import FiltersColumn from './FiltersColumn'
import FiltersBar from './FiltersBar'
import Modal from './Modal'
import Cocktails from '../data/cocktails.js';

export default {
  name: 'recipes',
  components: {
    FiltersBar, FiltersColumn, Recipe, Modal
  },
  data () {
    return {
      menu: Cocktails[0].menu,
    }
  },
}
</script>

<style scoped lang="scss">

#recipesSection { //fix 2 sections
  float: center;
  background: #e9ecef;
  padding: 4rem;
}

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
