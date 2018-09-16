<template>
  <section>
    <div class="container justify-content">
      <div class="intro-wrapper p-4">
        <h1 class="display-4">La de da de da 🍸</h1>
        <p class="lead">Descubre nuevas experiencias y sabores con nuestras recetas, artículos, tendencias y lo más relevante del mundo de la mixología. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint impedit eligendi quidem suscipit nostrum itaque nihil voluptatibus. Quos ipsum maxime, eum nesciunt, tempora dolores placeat iusto vero doloribus, sapiente totam.</p>
      </div>
      <div class="form-wrapper p-4">
        <Form />
      </div>
    </div>
  </section>
</template>

<script>
import Form from './RegistrationForm'

export default {
  name: 'registration',
  components: {
    Form,
  },
}
</script>

<style lang="scss" scoped>
section {
  padding-top: 4rem;
  padding-bottom: 4rem;
  height: 100%;
  width: 100%;
}

.justify-content {
  justify-content: space-between;
  display: flex;
}

.intro-wrapper {
  width: 40rem;
}

.form-wrapper {
  width: 28rem;
}
</style>
