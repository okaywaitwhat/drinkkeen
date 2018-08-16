<template>
<section class="container d-flex">

  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb justify-content-center">
        <li v-for="category in beverages" :key="category.name" class="breadcrumb-item"><a>{{ category.name }}</a></li>
      </ol>
    </nav>
    <div class="card-deck">
      <template v-for="category in beverages">
      <Beverage :item="item" v-for="item in category.marks" :key="item.img"></Beverage>
      </template>
    </div>
  </div>
</section>
</template>

<script>
import Beverage from './Beverage'
import beverages from '../data/beverages.js';

export default {
  name: 'beverages',
  components: { Beverage },
  data () {
    return {
      beverages,
    }
  }
}
</script>

<style scoped lang="scss">

section {
  float: center;
  background: #e9ecef;
  padding: 4rem;
  text-align: center;
  min-height: 100%;
  width: 100%;
}

</style>
