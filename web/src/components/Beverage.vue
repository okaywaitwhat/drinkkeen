<template>
    <div>
       <img :src="imgPath" alt="name" :title="item.name">
    </div>
</template>

<script>

export default {
  name: 'beverage',
  props: [
    'item',
  ],
   computed: {
    imgPath () {
      return require ('../assets/mediabebidas/' + this.item.img + '-min.png')
    }
  },
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


