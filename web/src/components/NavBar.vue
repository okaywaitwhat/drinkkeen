<template>
   <section>  
        <b-navbar toggleable="md" class="navbar-light bg-light">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <img :src="require(`../assets/media/navbrand.png`)">

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Bebidas">
                        <b-dropdown-item v-for="item in drinks" :key="item.drinks" href="#">{{item.name}}</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Recipes">
                        <b-dropdown-item v-for="item in recipes" :key="item.recipes" href="#">{{item.name}}</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Productos">
                        <b-dropdown-item v-for="item in products" :key="item.products" href="#">{{item.name}}</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item v-on:click="prox">Calculadora</b-nav-item>
                    <b-nav-item v-on:click="prox" disabled>Contacto</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </section> 
</template>

<script>
import drinks from '../data/drinks.js';
import recipes from '../data/recipes.js';
import products from '../data/products.js';

export default {
  data () {
    return {
        drinks, recipes, products,
        visible: false,
        links: [
            {
                link: 'Calculadora'
            },
            {
                link: 'Contacto'
            },
        ],
    }
  },
  methods: {
    prox: function () {
      alert('Próximamente')
      }
    }
  }

</script>

<style scoped lang="scss">

.dropdown-item {
    outline: none;
}

section {
  float: center;
  background: #ffff;
  text-align: center;
  font-weight: 300;
}

img {
  width: 120px !important;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px;
}

</style>
