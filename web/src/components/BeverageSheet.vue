<template>
  <div class="row bg-light">
  <div class="col-lg-4">
     <progressive-img :src="imgPath" :placeholder="imgPath" class="sheet-img" />
  </div>
  <div class="col-lg-4 align-self-center">
    <div>
      <h5>{{ beverage.name }}</h5>
      <p class="text-justify">{{ beverage.description }}</p>
    </div>
  </div>

  <div class="col-lg-4 align-self-center">
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


