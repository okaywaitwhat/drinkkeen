<template>
    <div>
      <router-link :to="`/drinks/${categoryId}/${drink.id}`">
      <img @load="imgLoaded()" :src="imgPath" alt="name" :title="drink.id">
</router-link>
    </div>
</template>

<script>

export default {
  name: 'drink',
  props: [
    'drink', 'categoryId'
  ],
   computed: {
    imgPath () {
      return require ('../../../assets/mediabebidas/' + this.drink.img + '-min.png')
    }
  },
  methods: {
    imgLoaded () {
      /*
       * el padre va a "escuchar" al evento "load" y lo escucha con @load
       * [le podemos poner cualquier nombre pero load queda lindo]
       */
      this.$emit('load')
    }
  }
}
</script>

<style lang="scss" scoped>
img {
    width: 70px;
    padding: 5px;
    margin: 10px;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
}
</style>


