<template>
    <section :style="{'background-image': `url(${require('../assets/media/login.jpg')})`}">
      <div class="container">
        <form>
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
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
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
  color: #f8f9fa;

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

</style>
