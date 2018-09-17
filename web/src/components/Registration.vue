<template>
  <section class="container bg-white d-flex flex-column justify-content-center">
    <div class="row">
      <div class="col-lg-7">
        <div class="p-4">
          <h1 class="display-4">La de da de da</h1>
          <p class="lead text-justify pr">Descubre nuevas experiencias y sabores con nuestras recetas, artículos, tendencias y lo más relevante del mundo de la mixología. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint impedit eligendi quidem suscipit nostrum itaque nihil voluptatibus. Quos ipsum maxime, eum nesciunt, tempora dolores placeat iusto vero doloribus, sapiente totam.</p>
        </div>
      </div>
      <div class="col-lg-5">
        <RegistrationForm class="p-4" />
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
</style>
