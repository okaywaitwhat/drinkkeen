<template>
  <div class="d-inline-flex flex-column justify-content-center">
    <h4 class="ml-2 mr-auto">Coctelería {{ category.title }} <span v-if="category.nueva" class="badge badge-secondary">Nuevo</span></h4>
    <section class="d-flex justify-content-center">
      <figure class="big-img d-inline-block">
        <img class="rounded h-100 w-100" :src="bigImgPath">
      </figure>
      <div class="previews-wrapper">
        <figure class="mini-card pointer d-inline-block float-left" v-for="(recipe, i) in category.data.slice(0, 7)" :key="i">
          <img class="recipe-img rounded h-100 w-100" :src="miniImgPath">
        </figure>
        <router-link :to="subpath">
          <figure class="mini-card pointer d-inline-block float-left d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="chevron-right" size="4x" />
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
  },
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

.previews-wrapper {
  display: inline-block;
  width: calc(100% - #{$height})
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
