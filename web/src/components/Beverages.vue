<template>
  <section class="container">
    <Search />
    <p class="lead pb-4">La esencia de las bebidas se mezclan para adentrarte a un nuevo mundo. Desde el whisky hasta la ginebra, incia un recorrido que será el comienzo de infinitas e inovidables historias.</p>
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center bg-transparent p-0">
          <li v-for="category in beverages" :key="category.name" class="breadcrumb-item pointer">
            <router-link :to="`/beverages/${category.id}`">{{ category.name }}</router-link>
          </li>
        </ol>
      </nav>
      <BeverageView v-if="categoryId" :categoryId="categoryId" />
    </div>
  </section>
</template>

<script>
import beverages from '../data/beverages.js'
import BeverageView from './BeverageView.vue'
import Search from './Search.vue'

export default {
  name: 'beverages',
  components: { BeverageView, Search },
  data () {
    return { beverages }
  },
  computed: {
    categoryId () {
      return this.$route.params.category
    }
  }
}
</script>

<style scoped lang="scss">

/*
  > == "hijo directo"
  + == "hermano"
  :before |
          |-> pseudoelementos
  :after  |
*/

.breadcrumb >
  li+li:before {
    content: '|';
  }

section {
  padding-top: 4rem;
  text-align: center;
  min-height: 100%;
  width: 100%;
  text-align: center;
}

a {
  color: #3f4347;
  text-decoration: none;
  background-color: transparent;
}

.search {
  max-width: 20rem;
}
</style>
