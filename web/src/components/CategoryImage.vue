<template>
  <div class="item fadeIn">
    <router-link :to="`/beverages/${category.id}`">
      <img :src="imgPath" alt="name" :title="category.name">
    </router-link>
    <div class="card-body">
       <span>{{ category.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryimage",
  props: [ 'category' ],
  computed: {
    imgPath () {
      return require ('../assets/mediabebidas/categorias/' + this.category.id + '.png')
    }
  },
}
</script>

<style lang="scss" scoped>
div.item {
    vertical-align: top;
    display: inline-block;
    text-align: center;
}
img {
    width: 16rem;
    padding: 0rem 1.5rem 0rem 1.5rem;
}

</style>

