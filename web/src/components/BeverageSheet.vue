<template>
  <div class="row p-5 zoom">
    <div class="col-12 p-4 col-lg-4">
      <div class="cropped bg-light">
      <img :src="imgPath" :placeholder="imgPath" class="sheet-img">
      </div>
    </div>
  <div class="col-12 col-lg-5 p-4 pt-lg-5">
    <div>
      <h3 class="tab-title pb-3">{{ beverage.name }}</h3>
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
  width: 25rem;
  height: 25rem;
  overflow: hidden;
  border-radius: 50%;
  margin-top: 4rem;
}

.zoom {
  animation: zoomIn 2s ease-in-out;
  animation-fill-mode: forwards;
}

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
</style>


