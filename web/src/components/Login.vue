<template>
    <section :style="{'background-image': `url(${require('../assets/media/login.jpg')})`}">
      <div class="container form-wrapper">
        <form class="bg-light p-5 rounded">
          <div class="form-group">
              <label for="exampleInputEmail1">Usuario</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
              </div>
              <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Usuario" aria-describedby="inputGroupPrepend2" required>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Recordarme</label>
          </div>
          <button type="submit" class="btn btn-dark">Ingresar</button>
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

.container {
  width: 300px;
}
.form-wrapper {
  width: 28rem;
}

</style>
