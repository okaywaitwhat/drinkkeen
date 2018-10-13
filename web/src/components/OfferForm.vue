<template>
  <form class="p-4 mb-4 bg-light rounded">
    <div class="form-group">
      <label for="exampleInputEmail1">Puesto</label>
      <input type="text" class="form-control font-weight-light" placeholder="Ej: Bartender">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Horario de trabajo</label>
      <input type="text" class="form-control font-weight-light" placeholder="Ej: 18:00pm a 02:00am">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Lugar de trabajo</label>
      <input type="text" class="form-control font-weight-light" placeholder="Ej: Colegiales">
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Descripción</label>
      <textarea class="form-control font-weight-light" rows="3" placeholder="Ej: Estamos en la búsqueda de..."></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Género</label>
      <select class="form-control font-weight-light" id="exampleFormControlSelect1">
        <option>Femenino</option>
        <option>Masculino</option>
        <option>Indistinto</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Edad</label>
      <input type="text" class="form-control font-weight-light" placeholder="Ej: 20 a 30 años">
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Mail de contacto</label>
      <input type="email" class="form-control font-weight-light" placeholder="Ej: ejemplo@ejemplo.com">
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Tareas a realizar</label>
      <textarea class="form-control font-weight-light" rows="3" placeholder="Ej: Despacho de pedidos, etc."></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Requisitos</label>
      <textarea class="form-control font-weight-light" rows="3" placeholder="Ej: Libreta Sanitaria, etc."></textarea>
    </div>
    <button type="submit" class="btn btn-dark">Enviar</button>
  </form>
</template>

<script>
export default {
  name: 'offerform'
}
</script>

