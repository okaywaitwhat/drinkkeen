<template>
  <section>
    <ProductSheet v-if="selectedProduct" :product="selectedProduct"/>
    <div class="container">
      <div class="card-columns pt-4">
        <Product :product="product" v-for="product in stock" :key="product.name" />
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
      stock: Products[0].stock,
    }
  },
  computed: {
    selectedProduct () {
      return this.stock.find(product => product.id === this.$route.params.productId)
    }
  }
}
</script>

<style scoped lang="scss">
section {
  padding-top: 1rem;
  min-height: 100%;
  align-items: center;
}

.center {
 display: flex;
}
</style>
