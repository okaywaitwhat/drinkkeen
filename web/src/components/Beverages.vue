<template>
  <section class="container-fluid d-flex">
    <div class="container">
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

export default {
  name: 'beverages',
  components: { BeverageView },
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
  padding: 4rem;
  text-align: center;
  min-height: 100%;
  width: 100%;
}

a {
  color: #3f4347;
  text-decoration: none;
  background-color: transparent;
}
</style>
