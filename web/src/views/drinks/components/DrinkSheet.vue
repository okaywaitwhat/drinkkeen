<template>
  <div class="row p-3">
    <div class="col-12 p-1 col-lg-4 p-lg-5">
      <div class="cropped bg-light slideInUp">
      <img :src="imgPath" :placeholder="imgPath" class="sheet-img">
      </div>
    </div>
  <div class="col-12 p-1 col-lg-5 p-lg-5">
    <div class="slideInDown">
      <h3 class="tab-title pb-3 second-font">{{ drink.name }}</h3>
      <p class="text-justify second-font">{{ drink.description }}</p>
    </div>
  </div>
  <div class="col-12 p-1 col-lg-3 p-lg-5 p-4 pb-lg-0">
    <DrinkCard class="slideInUp" :drink="drink"/>
  </div>
  </div>
</template>

<script>
import DrinkCard from './DrinkCard'

export default {
  name: 'BeverageSheet',
  components: { DrinkCard },
  props: [ 'drink' ],
  data () {
    return {
      BeverageCard,
    }
  },
  computed: {
    imgPath () {
      return require ('../../../assets/mediabebidas/' + this.drink.img + '-min.png')
    }
  },
}
</script>

<style lang="scss" scoped>
.sheet-img {
  width: 11rem;
  margin-top: -2rem;
}

.cropped {
  width: 25rem;
  height: 25rem;
  overflow: hidden;
  border-radius: 50%;
  margin-top: 4rem;
}

.row {
  overflow: hidden;
}
</style>


