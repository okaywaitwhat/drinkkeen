<template>
  <div>
    <CategorySheet :category="category" :key="category.name" />
    <BeverageSheet :beverage="category.marks[0]" :key="category.marks[0].img" />
    <div class="card-deck" :key="category.name">
      <figure :key="category.name" class="pointer d-flex align-items-center">
        <i class="fa fa-chevron-left" style="display:none"></i>
      </figure>
        <Beverage class="bottle-img"
          :item="beverage" v-for="beverage in category.marks" :key="beverage.img"
          :class="{ show: bottlesLoaded === category.marks.length }"
          @load="bottleImageLoad()"
          />
      <figure :key="category.name" class="pointer d-flex align-items-center">
        <i class="fa fa-chevron-right" style="display:none"></i>
      </figure>
    </div>
  </div>
</template>

<script>
import beverages from '../data/beverages.js'

import Beverage from './Beverage'
import BeverageSheet from './BeverageSheet'
import CategorySheet from './CategorySheet'

export default {
  name: 'beverage-view',
  components: { Beverage, CategorySheet, BeverageSheet },
  props: [ 'categoryId' ],
  data () {
    return {
      bottlesLoaded: 0
    }
  },
  computed: {
    category () {
      return beverages.find(category => category.id === this.categoryId)
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

.bottle-img {
  opacity: 0;
  transition: opacity .5s ease;
}

.show {
  opacity: 1 !important;
}
</style>
