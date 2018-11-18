<template>
  <div>
    <section v-if="category">
      <Category :category="category" />
    </section>
    <Collections v-else />
  </div>
</template>

<script>
import Collections from './Collections.vue'
import Category from './Category.vue'
import author from '../data/recipes/authorcocktails.js'
import classic from '../data/recipes/classiccocktails.js'
import modern from '../data/recipes/moderncocktails.js'
import molecular from '../data/recipes/molecularcocktails.js'

const cocktails = {
  author,
  classic,
  modern,
  molecular
}

export default {
  name: 'cocktailsview',
  components: { Collections, Category },
  computed: {
    category () {
      const id = this.$route.params.category
      return id && cocktails[id]
    }
  }
}
</script>
