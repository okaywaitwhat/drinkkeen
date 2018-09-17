<template>
  <footer class="bg-light w-100 d-flex flex-column align-items-center justify-content-center">
    <div class="m-1">
      <img src="../assets/media/navbrand.png">
    </div>
    <div class="pt-2">
      <a v-for="link in links" :href="link.href" :key="link.href" class="p-3 text-dark text-uppercase">
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
          icon:'fa-instagram'
        },
        {
          href: 'https://www.facebook.com/drinkkeen',
          icon:'fa-twitter'
         },
        {
          href: 'https://www.facebook.com/drinkkeen',
          icon:'fa-facebook-official'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

footer {
  height: 100px;
  text-align: center;
  img {
    width: 150px;
  }
}

i {
  font-size: 1.2rem;
}

</style>
