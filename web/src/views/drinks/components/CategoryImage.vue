<template>
  <div class="item fadeIn p-2 text-center d-inline-block">
    <router-link :to="`/drinks/${category.id}`">
      <img
      :src="imgPath"
      alt="name"
      :title="category.name">
    </router-link>
    <div class="card-body p-0">
       <h4 class="second-font">{{ category.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryimage",
  props: [ 'category' ],
  computed: {
    imgPath () {
      return require ('../../../assets/mediabebidas/categorias/' + this.category.id + '-min.png')
    }
  },
}
</script>

<style lang="scss" scoped>
.item {
  transform: scale(1);
  transition: transform .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}
img {
  width: 16rem;
  padding: 0rem 1.5rem; /* cuando ponemos dos valores solos son padding eje Y (arriba/abajo) y padding eje X (izq/der) */
}

</style>

