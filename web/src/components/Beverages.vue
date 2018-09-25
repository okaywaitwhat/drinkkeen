<template>
  <section class="container-fluid d-flex">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center bg-transparent p-0">
          <li v-for="category in beverages" :key="category.name" class="breadcrumb-item pointer"><a>{{ category.name }}</a></li>
        </ol>
      </nav>
      <div>

      <CategorySheet :category="category" v-for="category in beverages.slice(0, 1)" :key="category.name" />

      <template v-for="category in beverages.slice(0, 1)">

        <BeverageSheet :beverage="beverage" v-for="beverage in category.marks.slice(0,1)" :key="beverage.img"/>

          <div class="card-deck" :key="category.name">
            <figure :key="category.name" class="pointer d-inline-block float-left d-flex justify-content-center align-items-center p-0">
              <i class="fa fa-chevron-left"></i>
            </figure>

            <Beverage :item="item" v-for="item in category.marks" :key="item.img" 
              class="bottle-img"
              :class="{ show: bottlesLoaded === bottlesToShow(category) }"
              @load="bottleImageLoad()" />

            <figure :key="category.name" class="pointer d-inline-block float-left d-flex justify-content-center align-items-center p-0">
              <i class="fa fa-chevron-right"></i>
            </figure>
          </div>
        </template>

      </div>
    </div>
  </section>
</template>

<script>
import Beverage from './Beverage'
import BeverageSheet from './BeverageSheet'
import CategorySheet from './CategorySheet'
import beverages from '../data/beverages.js'

export default {
  name: 'beverages',
  components: { Beverage, CategorySheet, BeverageSheet
  },
  data () {
    return {
      beverages, CategorySheet, BeverageSheet, Beverage,
      bottlesLoaded: 0
    }
  },
  methods: {
    bottlesToShow (category) {
      return category.marks.length // cambiar aca cuando querramos mostrar menos eventualmente
    },
    bottleImageLoad () {
      this.bottlesLoaded++
    }
  }
}

</script>

<style scoped lang="scss">

/*
  > == "hijo directo"
  + == "hermano"
  :before |
          |-> pseudoelementos
  :after  |
*/

.breadcrumb >
  li+li:before {
    content: '|';
  }

section {
  padding: 4rem;
  text-align: center;
  min-height: 100%;
  width: 100%;
}

.fa-chevron-right, .fa-chevron-left {
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
