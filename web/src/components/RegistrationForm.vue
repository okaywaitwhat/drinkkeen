<template>
  <div class="p-4 bg-light rounded">
    <div class="form-group">
      <label for="username">Nombre de usuario</label>
      <input type="text" class="form-control font-weight-light" id="username" placeholder="Ej: beerkeen">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control font-weight-light" id="email" placeholder="Ej: alguien@ejemplo.com">
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" class="form-control font-weight-light" id="password" placeholder="Contraseña">
      <small class="form-text text-muted font-weight-light">Y la de da de da de da de day oh!</small>
    </div>
    <button class="btn btn-dark">Registrarme</button>
    <small class="form-text text-muted font-weight-light">¿Ya tenés cuenta? <u>Ingresa acá</u>.</small>
  </div>
</template>

<script>
  export default {
  name: 'registrationform'
}
</script>

<style lang="scss" scoped>
.btn {
  margin-bottom: 1rem;
}
</style>
