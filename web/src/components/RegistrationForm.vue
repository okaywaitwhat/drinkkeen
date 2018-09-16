<template>
    <form class="p-4 bg-light rounded">
    <div class="form-group">
      <label for="exampleInputEmail1">Nombre de usuario</label>
      <input type="email" class="form-control font-weight-light" id="exampleInputEmail1" aria-describedby="userNamelHelp" placeholder="Ej: beerkeen">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" class="form-control font-weight-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ej: alguien@ejemplo.com">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Contraseña</label>
      <input type="password" class="form-control font-weight-light" id="exampleInputPassword1" placeholder="Contraseña">
      <small id="emailHelp" class="form-text text-muted font-weight-light">Y la de da de da de da de day oh!</small>
    </div>
    <button type="submit" class="btn btn-dark">Registrarme</button><small id="emailHelp" class="form-text text-muted font-weight-light">¿Ya tenés cuenta? <u>Ingresa acá</u>.</small>
  </form>
</template>

<script>
  export default {
  name: 'registrationform',
}
</script>

<style lang="scss" scoped>
.btn {
  margin-bottom: 1rem;
}
</style>
