<template>
  <section
    :style="{'background-image': `url(${require('../assets/media/maitai.png')})`}">
    <div class="container d-flex flex-column justify-content-center pt-5">
      <div class="row">
        <div class="col-lg-7">
          <div class="p-4">
            <h2 class="display-4">Bienvenido</h2>
            <p class="lead text-justify pr">Drink Keen es el lugar ideal para inspirarse y preparar sofisticados cocktails. Disfruta de esta experiencia, compartila con amigos y familiares creando momentos memorables con una serie de servicios y sabores perfectos. Las bebidas excelentes siempre son increíblemente versátiles, así que, sea cual sea la ocasión, quienquiera que te acompañe, siempre habrá una bebida ideal y la encontrarás acá, en Drink Keen.</p>
          </div>
        </div>
        <div class="col-lg-5">
          <RegistrationForm class="p-4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegistrationForm from './RegistrationForm'

export default {
  name: 'registration',
  components: {
    RegistrationForm,
  },
}
</script>

<style lang="scss" scoped>
section {
  background: bottom left no-repeat;
  background-size: 16.5rem;
}
</style>
