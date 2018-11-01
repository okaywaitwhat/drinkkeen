<template>
  <section>
      <BeveragesNav />
      <CategorySheet :category="category" :key="category.name" />
      <div>
        <BeverageSheet
        v-if="selectedBeverage" :beverage="selectedBeverage"
        />
        <div class="card-deck p-5" :key="category.name">
            <figure :key="category.name" class="pointer d-flex align-items-center">
              <i class="fa fa-chevron-left"></i>
            </figure>
              <Beverage class="bottle-img"
                :beverage="beverage" v-for="beverage in category.marks" :key="beverage.img"
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
import beverages from '../data/beverages.js'

import Beverage from './Beverage'
import BeverageSheet from './BeverageSheet'
import CategorySheet from './CategorySheet'
import BeveragesNav from './BeveragesNav'

export default {
  name: 'beverages-view',
  components: { Beverage, CategorySheet, BeverageSheet, BeveragesNav },
  props: [ 'categoryId' ],
  data () {
    return {
      bottlesLoaded: 0
    }
  },
  computed: {
    category () {
      return beverages.find(category => category.id === this.categoryId)
    },
    selectedBeverage () {
      return this.category.marks.find(beverage => beverage.id === this.$route.params.beverage)
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
