<template>
<section :style="{'background-image': `url(${require('../assets/media/intro.jpg')})`}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <img src="../assets/media/smlogo.png">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <p>Pedirte que te identifiques forma parte de nuestro compromiso con el consumo responsable.</p>
        <p>Introduce tu fecha de nacimiento:</p>

        <div class="form-group form-inline">
          <input type="text" class="form-control m-1" placeholder="dd" size="3" autocomplete='off'> /
          <input type="text" class="form-control m-1" placeholder="mm" size="3" autocomplete='off'> /
          <input type="text" class="form-control m-1" placeholder="aaaa" size="4" autocomplete='off'>
        </div>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Recordarme en este dispositivo</label>
            <small class="form-text text-muted font-weight-light">Al entrar aceptas nuestro aviso sobre política y cookies.</small>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark">Acceder</button>
        <button type="button" class="btn btn-dark">Cancelar</button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    name: 'Modal',
}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background: no-repeat center center fixed;
  background-size: cover;
}

img {
  width: 140px;
}
</style>


