<template>
   <section v-if="seen">  
        <b-navbar toggleable="md" class="navbar-light bg-light">
            <img :src="require(`../assets/media/navbrand.png`)">
            <b-navbar-toggle target="nav_collapse" right></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item>Bebidas</b-nav-item>
                    <b-nav-item>Recetas</b-nav-item>
                    <b-nav-item>Productos</b-nav-item>
                    <!-- el @ sirve como shorthand de `v-on:` -->
                    <b-nav-item @click="prox()">Calculadora</b-nav-item>
                    <!-- la funcion se puede pasar con `()` o sin ellos -->
                    <b-nav-item @click="prox()">Contacto</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                        <a>User</a>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                    </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </section> 
</template>

<script>
export default {
  data () {
    return {
        seen: true,
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

.dropdown-item,
.navbar-toggler {
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
  margin-top: 3px;
  margin-bottom: 3px;
  margin-right: 10px;
  margin-left: 10px;
}

</style>
