<template>
  <footer class="bg-light w-100 d-flex flex-column justify-content-center align-items-center text-align-left">
    <div class="row container m-4">
      <div class="col-lg-6">
      <p class="text-left">Y la de da de da de day oh!</p>
      <SubscriptionForm />
      </div>
      <div class="col-lg-6 bg-dark">
        lelelele
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
import SubscriptionForm from './SubscriptionForm'

export default {
  name: 'foot',
  components: { SubscriptionForm,
  },
  data () {
    return {
      SubscriptionForm,
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
  height: 250px;
  text-align: center;
  img {
    width: 150px;
  }
}

i {
  font-size: 1.2rem;
}

</style>
