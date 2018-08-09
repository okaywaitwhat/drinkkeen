<template>
<section class="container d-flex">

  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb justify-content-center">
        <li v-for="item in drinks" :key="item.name" class="breadcrumb-item"><a>{{ item.name }}</a></li> 
      </ol>
    </nav>
    <div class="card-deck">
      <Drink :item="item" v-for="item in vermouth" :key="item.img"></Drink> 
      <Drink :item="item" v-for="item in whisky" :key="item.img"></Drink>  
      <Drink :item="item" v-for="item in vodka" :key="item.img"></Drink>  
      <Drink :item="item" v-for="item in ron" :key="item.img"></Drink>  
      <Drink :item="item" v-for="item in gin" :key="item.img"></Drink>  
      <Drink :item="item" v-for="item in mezcal" :key="item.img"></Drink>  
      <Drink :item="item" v-for="item in tequila" :key="item.img"></Drink>  
      <Drink :item="item" v-for="item in licores" :key="item.img"></Drink>  
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
      vermouth: drinks[0].marks,
      whisky: drinks[1].marks,
      vodka: drinks[2].marks,
      ron: drinks[3].marks,
      gin: drinks[4].marks,
      tequila: drinks[5].marks,
      mezcal: drinks[6].marks,
      tequila: drinks[7].marks,
      licores: drinks[8].marks,
      drinks,
    }
  },
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