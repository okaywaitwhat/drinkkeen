<template>
  <div class="row">
    <div class="col-12 p-4 col-lg-5">
      <div class="cropped bg-light">
      <img :src="imgPath" :placeholder="imgPath" class="sheet-img">
      </div>
    </div>
  <div class="col-12 col-lg-4 p-4 pt-lg-5">
    <div>
      <h3 class="tab-title">{{ beverage.name }}</h3>
      <p class="text-justify">{{ beverage.description }}</p>
    </div>
  </div>
  <div class="col-12 col-lg-3 pt-lg-5 p-4 pb-lg-0">
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

.cropped {
  position: relative;
  width: 27rem;
  height: 27rem;
  overflow: hidden;
  border-radius: 50%;
  margin-top: 3rem;
}
</style>


