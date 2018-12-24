<template>
  <section>
      <DrinksNav />
      <CategorySheet :category="category" :key="category.name" />
      <div>
        <DrinkSheet
        v-if="selectedDrink" :drink="selectedDrink"
        />
        <div class="card-deck p-5" :key="category.name">
            <figure :key="category.name" class="pointer d-flex align-items-center">
              <i class="fa fa-chevron-left"></i>
            </figure>
              <Bottle class="bottle-img"
                :drink="drink" v-for="drink in category.marks" :key="drink.img"
                :class="{ show: bottlesLoaded === category.marks.length }"
                @load="bottleImageLoad()"
                :categoryId="categoryId"
                />
            <figure :key="category.name" class="pointer d-flex align-items-center">
              <i class="fa fa-chevron-right"></i>
            </figure>
        </div>
      </div>
   </section>
</template>

<script>
import drinks from '../../../data/drinks.js'

import Bottle from './DrinkBottle'
import DrinkSheet from './DrinkSheet'
import CategorySheet from './CategorySheet'
import DrinksNav from './DrinksNav'

export default {
  name: 'drinks-view',
  components: { Bottle, CategorySheet, DrinkSheet, DrinksNav },
  props: [ 'categoryId' ],
  data () {
    return {
      bottlesLoaded: 0
    }
  },
  computed: {
    category () {
      return drinks.find(category => category.id === this.categoryId)
    },
    selectedDrink () {
      return this.category.marks.find(drink => drink.id === this.$route.params.drink)
    }
  },
  methods: {
    bottleImageLoad () {
      this.bottlesLoaded++
    }
  },
  watch: {
    // para el efecto de aparecer de las imagenes de botellas abajo
    $route (to, from){
      this.bottlesLoaded = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-chevron-right,
.fa-chevron-left {
  font-size: 2rem;
}
</style>
