<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb justify-content-center bg-transparent p-0">
      <li v-for="category in drinks" :key="category.name" class="breadcrumb-item pointer">
        <router-link :to="`/drinks/${category.id}`">{{ category.name }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
import drinks from '../../../data/drinks.js'

export default {
  name: 'drinksnav',
  data () {
    return { drinks }
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

