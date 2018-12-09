<template>
  <section class="container-fluid">
    <transition name="fade">
    <p v-if="!categoryId" class="lead pb-4 pt-5 pl-lg-5 pr-lg-5"><span class="second-font">La esencia de las bebidas se mezclan para adentrarte a un nuevo mundo.</span><span class="second-font">Desde el whisky hasta la ginebra, inicia un recorrido que será el comienzo de infinitas e inovidables historias.</span></p>
    </transition>
    <CategoryImage
      v-if="!categoryId"
      v-for="category in beverages"
      :key="category.name"
      :category="category"/>
    <BeveragesView
      v-if="categoryId"
      :categoryId="categoryId" />
  </section>
</template>

<script>
import beverages from '../../data/beverages.js'
import BeveragesView from './components/BeveragesView.vue'
import CategoryImage from './components/CategoryImage'

export default {
  name: 'beverages',
  components: { BeveragesView, CategoryImage, },
  data () {
    return {
      beverages,
      showTitle: true,
    }
  },
  computed: {
    categoryId () {
      return this.$route.params.category
    }
  }
}
</script>

<style scoped lang="scss">
section {
  padding-top: 1rem;
  text-align: center;
  min-height: 100%;
  width: 100%;
  text-align: center;
}

.router-link-active {
  font-size: 19px;
  margin-left: 1rem;
  margin-right: 1rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
