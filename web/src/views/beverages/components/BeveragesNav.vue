<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb justify-content-center bg-transparent p-0">
      <li v-for="category in beverages" :key="category.name" class="breadcrumb-item pointer">
        <router-link :to="`/beverages/${category.id}`">{{ category.name }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
import beverages from '../../../data/beverages.js'

export default {
  name: 'beveragesnav',
  data () {
    return { beverages }
  }
}
</script>

<style lang="scss" scoped>

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

a {
  color: #3f4347;
  text-decoration: none;
  background-color: transparent;
}
</style>

