<template>
  <div class="d-inline-flex flex-column justify-content-center">
    <h3 class="ml-2 mr-auto slideInLeft second-font">Coctelería {{ category.title }} <span v-if="category.nueva" class="badge badge-secondary">Nuevo</span></h3>
    <section class="d-flex justify-content-center">
      <router-link :to="subpath">
        <figure class="big-img d-inline-block">
          <progressive-img class="h-100 w-100" :src="bigImgPath" />
        </figure>
       </router-link>
      <div class="previews-wrapper">
        <figure class="mini-card pointer d-inline-block float-left" v-for="(recipe, i) in category.data.slice(0, smallImgsNumber)" :key="i">
          <img class="recipe-img h-100 w-100"
            :src="miniImgPath"
            :class="{ show: smallImgsLoaded === smallImgsNumber }"
            @load="smallImageLoad()" />
        </figure>
        <router-link :to="subpath">
          <figure class="mini-card pointer d-inline-block float-left d-flex justify-content-center align-items-center">
            <i class="fa fa-chevron-right flipInX"></i>
          </figure>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'collection',
  props: [ 'category' ],
  data () {
    return {
      smallImgsNumber: 7,
      smallImgsLoaded: 0,
    }
  },
  methods: {
    smallImageLoad () {
      this.smallImgsLoaded++
    }
  },
  computed: {
    subpath () {
      return `/cocteleria/${this.category.path}`
    },
    bigImgPath () {
      return require ('../assets/mediarecetas/' + this.category.img + '.jpg')
    },
    miniImgPath () {
      return require ('../assets/mediarecetas/' + this.category.img + '.jpg')
    }
  }
};
</script>

<style lang="scss" scoped>

$height: 300px;
$lg-width: 900px;
$space: 8px;

a {
  color: inherit;
}

section {
  width: $lg-width;
  height: $height;
}

.big-img {
  padding: $space;
  width: $height;
}

.mini-card {
  $size: ($height / 2) - ($space * 2);
  margin: $space;
  height: $size;
  width: $size;
}

.fa-chevron-right {
  font-size: 4rem;
}

.previews-wrapper {
  display: inline-block;
  width: calc(100% - #{$height});
}

.recipe-img {
  opacity: 0;
  transition: opacity .5s ease;
}

.show {
  opacity: 1 !important;
}

.recipe-img:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: #{$lg-width + 100px}) {
  section {
    width: 100%;
  }
  .previews-wrapper {
    display: none;
  }
}
</style>
