<template>
<section class="container d-flex">

  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb justify-content-center">
        <li v-for="category in drinks" :key="category.name" class="breadcrumb-item"><a>{{ category.name }}</a></li> 
      </ol>
    </nav>
    <div class="card-deck">
      <template v-for="category in drinks"> 
      <Drink :item="item" v-for="item in category.marks" :key="item.img"></Drink>  
      </template>
    </div>
  </div>
</section>
</template>

<script>
import Drink from './Drink'
import drinks from '../data/drinks.js';

export default {
  name: 'drinks',
  components: { Drink },
  data () {
    return {
      drinks,
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