<template>
   <section>  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img :src="require(`../assets/media/navbrand.png`)">
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul id="dropdown" class="navbar-nav">
                    <li v-for="item in dropdowns" :key="item.dropdown" class="nav-item dropdown font-weight-light">
                        <a class="nav-link dropdown-toggle">{{item.dropdown}}</a>
                    </li>
                    <li v-for="item in links" :key="item.link">
                        <a class="nav-link">{{item.link}}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </section>
</template>

<script>

export default {
  name: 'intro',
  data () {
    return {
        dropdowns: [
            {
                dropdown: 'Bebidas'
            },
            {
                dropdown: 'Recetas'
            },
            {
                dropdown: 'Productos'
            },
        ],

        links: [
            {
                link: 'Calculadora'
            },
            {
                link: 'Contacto'
            },
        ],
    }
  }
}

</script>

<style scoped>

section {
  float: center;
  background: #ffff;
  text-align: center;
  font-weight: 300;
}

img {
  width: 120px !important;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}

.dropdown-menu {
  margin-top: 7px;
  position: absolute;
  top: 46px;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 8rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 0;
}

.navbar-nav li {
  padding-left: 10px;
  padding-right: 10px;
}

</style>
