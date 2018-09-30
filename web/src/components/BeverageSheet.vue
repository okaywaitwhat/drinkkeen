<template>
  <div class="row">
  <div class="col-12 col-lg-4">
     <img :src="imgPath" :placeholder="imgPath" class="sheet-img">
  </div>
  <div class="col-12 col-lg-4 pt-lg-5">
    <div>
      <h3 class="tab-title">{{ beverage.name }}</h3>
      <p class="text-justify">{{ beverage.description }}</p>
    </div>
  </div>
  <div class="col-12 col-lg-4 pt-lg-5 pt-4 pb-4 pb-lg-0">
    <BeverageCard :beverage="beverage"/>
  </div>
  </div>
</template>

<script>
import BeverageCard from './BeverageCard'

export default {
  name: 'BeverageSheet',
  components: { BeverageCard },
  props: [ 'beverage' ],
  data () {
    return {
      BeverageCard,
    }
  },
  computed: {
    imgPath () {
      return require ('../assets/mediabebidas/' + this.beverage.img + '-min.png')
    }
  },
}
</script>

<style lang="scss" scoped>
.sheet-img {
  width: 180px;
}
</style>


