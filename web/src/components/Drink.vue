<template>
    <div>
       <img :src="imgPath">
    </div>
</template>

<script>

export default {
  name: 'drink',
  data () {
    return {
    }
  },
  props: [
    'item',
  ],
   computed: 
  { imgPath () { 
    return require ('../assets/mediabebidas/' + this.item.img + '-min.png') 
    } 
  },
}
</script>

<style lang="scss" scoped>
img {
    width: 80px;
    padding: 5px;
    margin: 10px;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
}
</style>


