<template>
    <section id="productsSection">
        <section>
            <div class="container">
                <div class="card-columns">
                    <Product :product="product" v-for="product in store" :key="product.name"></Product>  
                </div>
            </div>
        </section>
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
  float: center;
  background: #e9ecef;
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;
  min-height: 100%;
  width: 100%;
}

</style>