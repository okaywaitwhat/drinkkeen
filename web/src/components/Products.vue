<template>
    <section>
      <ProductSheet v-if="productId" :productId="productId"/>
            <div class="container">
                <div class="card-columns pt-4">
                    <Product :product="product" v-for="product in store" :key="product.name" />
                </div>
            </div>
    </section>
</template>

<script>
import Product from './Product'
import ProductSheet from './ProductSheet'
import Products from '../data/products.js';
import products from '../data/products.js';

export default {
  name: 'products',
  components: {
    Product, ProductSheet,
  },
  data () {
    return {
      store: Products[0].stock,
    }
  },
  computed: {
    productId () {
      return this.$route.params.product
    },
  }
}
</script>

<style scoped lang="scss">
section {
  padding-top: 4rem;
  min-height: 100%;
  width: 100%;
}
</style>

