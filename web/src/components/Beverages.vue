<template>
  <section class="container-fluid d-flex">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center bg-transparent">
          <li v-for="category in beverages" :key="category.name" class="breadcrumb-item"><a>{{ category.name }}</a></li>
        </ol>
      </nav>

    <div class="card-deck">
      <template v-for="category in beverages.slice(0, 1)">
        <div :key="category.name" class="bg-white d-flex flex-column justify-content-center">
          <div class="row bg-light">
            <div class="col-lg-7">
              <h3>{{category.name}}</h3>
              <p class="lead text-justify pr">{{category.description}}</p>
            </div>
          <div class="col-lg-5 bg-dark"></div>
      </div>
    </div>

    <BeverageSheet :key="category.name"/>

    <figure :key="category.name" class="pointer d-inline-block float-left d-flex justify-content-center align-items-center p-0">
      <i class="fa fa-chevron-left"></i>
    </figure>
    <Beverage :item="item" v-for="item in category.marks" :key="item.img"></Beverage>
    <figure :key="category.name" class="pointer d-inline-block float-left d-flex justify-content-center align-items-center p-0">
      <i class="fa fa-chevron-right"></i>
    </figure>
    </template>

      </div>
    </div>
  </section>
</template>

<script>
import Beverage from './Beverage'
import BeverageSheet from './BeverageSheet'
import beverages from '../data/beverages.js';

export default {
  name: 'beverages',
  components: { Beverage, BeverageSheet
  },
  data () {
    return {
      beverages, BeverageSheet, Beverage,
    }
  }
}
</script>

<style scoped lang="scss">
.breadcrumb >
  li+li:before {
    content: '|';
  }

section {
  padding: 2rem;
  text-align: center;
  min-height: 100%;
  width: 100%;
}

.fa-chevron-right, .fa-chevron-left {
  font-size: 2rem;
}
</style>
