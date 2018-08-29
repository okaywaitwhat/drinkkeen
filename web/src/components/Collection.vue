<template>
  <div class="d-inline-flex flex-column justify-content-center">
    <h4 class="ml-2 mr-auto">Coctelería {{ category.title }} <span class="badge badge-secondary">Nuevo</span></h4>
    <section class="d-flex justify-content-center">
      <figure class="big-img d-inline-block">
        <img class="rounded h-100 w-100" :src="bigImgPath">
      </figure>
      <div class="previews-wrapper d-none d-lg-inline-block">
        <figure class="mini-card d-inline-block float-left" v-for="(recipe, i) in category.data.slice(0, 7)" :key="i">
          <img class="recipe-img rounded h-100 w-100" :src="miniImgPath">
        </figure>
        <figure class="mini-card d-inline-block float-left d-flex justify-content-center align-items-center">
          <font-awesome-icon icon="chevron-right" size="4x" />
        </figure>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'collection',
  props: [ 'category' ],
  computed: {
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

section {
  width: $lg-width;
  height: $height;
}

.big-img {
  padding: $space;
  width: $height;
}

.mini-card,
.icon-wrapper {
  $size: ($height / 2) - ($space * 2);
  margin: $space;
  height: $size;
  width: $size;
  cursor: pointer;
}

.previews-wrapper {
  width: calc(100% - #{$height})
}

.recipe-img:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 700px) {
  section {
    width: 100%;
  }
}
</style>
