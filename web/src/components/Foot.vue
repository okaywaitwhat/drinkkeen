<template>
  <footer class="bg-light w-100 d-flex flex-column justify-content-center align-items-center">
    <div class="row container m-4">
      <div class="col-lg-6">
        <h5 class="text-left mt-4">La de da de</h5>
        <p class="text-left">Sit omnis vitae reiciendis assumenda, illo inventore nostrum, quia veritatis doloribus quasi ipsum dicta non doloremque mollitia quae perferendis accusamus, delectus modi!</p>
      <SubscriptionForm />
      </div>
      <div class="col-lg-3 mt-3">
        <h5>La de da de</h5>
        <dl>
          <dt>1234</dt>
          <dt>1234</dt>
          <dt>1234</dt>
        </dl>
      </div>
      <div class="col-lg-3 mt-3">
        <h5>La de da de</h5>
        <dl>
          <dt>1234</dt>
          <dt>1234</dt>
          <dt>1234</dt>
        </dl>
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
  min-height: 250px;
  text-align: center;
  img {
    width: 140px;
  }
}

i {
  font-size: 1.1rem;
}

</style>
