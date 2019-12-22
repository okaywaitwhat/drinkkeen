<template>
    <section :style="{'background-image': `url(${require('../../assets/media/login.jpg')})`}">
      <div class="container form-wrapper">
        <form class="bg-transparent rounded">
          <h4 class="lead text-light mb-3">Iniciar sesión</h4>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
              </div>
              <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Usuario" aria-describedby="inputGroupPrepend2" required>
            </div>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
          </div>
          <div class="form-group form-check">
          <b-form-checkbox class="text-light"
                           id="checkbox1"
                           v-model="status"
                           value="accepted"
                           unchecked-value="not_accepted">
          Recordarme
          </b-form-checkbox>
          </div>
          <button type="submit" class="btn btn-light">Ingresar</button>
        </form>
      </div>
    </section>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {

    }
  }
}

</script>

<style scoped lang="scss">

section {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  float: center;
  background-size: cover;
  text-align: center;
  font-weight: 300;
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .form-control {
    margin-bottom: 1rem;
  }

  .input-group-text {
    margin-bottom: 1rem;
  }
}

.form-wrapper {
  width: 20rem;
}

form {
  padding: 2rem;
 }
</style>
