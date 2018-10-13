<template>
  <footer class="bg-light w-100 d-flex flex-column justify-content-left align-items-center">
    <div class="row container m-4">
      <div class="col-lg-5">
        <h5 class="text-left mt-4">Siempre sirviendo responsablemente</h5>
        <p class="text-left">Por favor no comparta contenido con personas por debajo de la edad legal para consumir alcohol. Beba responsablemente.</p>
      </div>
      <div class="col-lg-2"></div>
      <div class="col-lg-3 mt-3 text-left">
      <h5>Contacto</h5>
      <ul class="font-weight-light">
        <li>hello@drinkkeen.com</li>
        <li>Teléfono: (011) 15-3863-5211</li>
        <br>
        <li>© 2018 Buenos Aires, Argentina</li>
      </ul>
      </div>
      <div class="col-lg-2 mt-3 text-left">
        <h5>Otros</h5>
        <ul class="font-weight-light">
          <li>Condiciones de uso</li>
          <li>Accesibilidad</li>
          <li>Glosario</li>
          <li>Acerca de nosotros</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 align-items-center">
      <img src="../assets/media/navbrand.png">
    </div>
    <div class="p-2">
      <a v-for="link in links" :href="link.href" :key="link.href" class="p-3 text-dark text-uppercase" target="_blank">
        <i :class="`fa ${link.icon}`"></i>
      </a>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'foot',
  data () {
    return {
      links: [
        {
          href: 'https://www.facebook.com/drinkkeen',
          icon:'fa-facebook-official'
        },
        {
          href: 'https://www.twitter.com/drinkkeen',
          icon:'fa-twitter'
         },
        {
          href: 'https://www.instagram.com/drinkkeen',
          icon:'fa-instagram'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

footer {
  min-height: 250px;
  text-align: center;
  img {
    width: 140px;
  }
}

i {
  font-size: 1.1rem;
}

ul {
  list-style-type: none;
  padding: 0;
 }
</style>
