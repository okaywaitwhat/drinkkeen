<template>
  <section class="p-2 zoomInSoft">
    <router-link :to="subpath">
      <div class="card">
        <img :src="imgPath">
        <div class="card-body">
          <h5 class="card-title second-font">{{ recipe.name }}</h5>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'cocktail',
  props: [ 'recipe', 'category' ],
computed: {
    imgPath () {
      return require ('../assets/mediarecetas/' + this.recipe.img + '.jpg')
    },
    subpath () {
      return `/cocktails/${this.$route.params.category}/${this.recipe.id}`
    },
  }
}
</script>

<style lang="scss" scoped>

img {
  width: 100%;
}

.card {
  overflow: hidden;
  text-align: center;
  width: 100%;
  border: 0;
  border-radius: 0;
  p {
    margin: 0;
  }
  i {
    margin: 5px;
    font-size: 18px;
    transition: all .09s ease;
    &:hover {
    transform: scale(1.2);
    }
  }
}
</style>


