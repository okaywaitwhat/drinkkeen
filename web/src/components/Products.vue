<template>
    <section>
            <div class="container p-5">
                <div class="card-columns">
                    <Product :product="product" v-for="product in store" :key="product.name"></Product>
                </div>
            </div>
    </section>
</template>

<script>
import Product from './Product'
import Products from '../data/products.js';

export default {
  name: 'products',
  components: {
    Product,
  },
  data () {
    return {
      store: Products[0].stock,
    }
  }
}
</script>

<style scoped lang="scss">

section {
  padding: 4rem;
  min-height: 100%;
  width: 100%;
}
</style>

