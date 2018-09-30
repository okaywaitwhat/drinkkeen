<template>
   <section>
        <b-navbar toggleable="md" class="navbar-light bg-light">
            <!-- router-link es un componente de Vue que genera un link a una vista del router, en este caso nos lleva al default `/` -->
            <router-link to="/">
                <img :src="require(`../assets/media/navbrand.png`)">
            </router-link>
            <b-navbar-toggle target="nav_collapse" right></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item class="hover-scale" to="/beverages">Bebidas</b-nav-item>
                    <b-nav-item class="hover-scale" to="/cocteleria">Recetas</b-nav-item>
                    <b-nav-item class="hover-scale" to="/products">Productos</b-nav-item>
                    <b-nav-item class="hover-scale" to="/quotes">Quotes</b-nav-item>
                    <!-- el @ sirve como shorthand de `v-on:` -->
                    <b-nav-item class="hover-scale" @click="prox()">Calculadora</b-nav-item>
                    <!-- la funcion se puede pasar con `()` o sin ellos -->
                    <b-nav-item class="hover-scale" to="/jobs">Empleo</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item right>
                       <router-link tag="a" to="/login"><u>Ingresar</u></router-link> o  <router-link to="/"><u>registrarse</u></router-link>
                    </b-nav-item>
                    </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </section>
</template>

<script>
export default {
  methods: {
    prox () {
        alert('Próximamente')
    }
  }
}

</script>

<style scoped lang="scss" src="../styles/navbar.scss"></style>
