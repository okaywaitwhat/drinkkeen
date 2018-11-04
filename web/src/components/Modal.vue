<template>
<section>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <img src="../assets/media/smlogo.png">
      </div>

      <div class="modal-body">
        <p>Pedirte que te identifiques como mayor de edad forma parte de nuestro compromiso con el consumo responsable.</p>
        <p>Introduce tu fecha de nacimiento:</p>

        <div class="form-group form-inline">
          <!-- v-model hace que se sincronicen en el codigo y en el input siempre -->
          <input type="text" v-model.number="day.val" class="form-control m-1" :class="{ error: day.error }" placeholder="Día" size="3" autocomplete='off' @keyup="validate()" @keyup.enter="access()"> /
          <input type="text" v-model.number="month.val" class="form-control m-1" :class="{ error: month.error }" placeholder="Mes" size="3" autocomplete='off' @keyup="validate()" @keyup.enter="access()"> /
          <input type="text" v-model.number="year.val" class="form-control m-1" :class="{ error: year.error }" placeholder="Año" size="4" autocomplete='off' @keyup="validate()" @keyup.enter="access()">
        </div>

        <p v-if="hasErrors">
          <span class="error" v-show="day.error">{{ day.error }}</span>
          <span class="error" v-show="month.error">{{ month.error }}</span>
          <span class="error" v-show="year.error">{{ year.error }}</span>
        </p>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark"
        @click="access()" :class="{ disabled: !isComplete || hasErrors }">Acceder</button>
        <button type="button" class="btn btn-dark"
        @click="backToIntro()">Cancelar</button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      day: {
        val: '',
        error: ''
      },
      month: {
        val: '',
        error: ''
      },
      year: {
        val: '',
        error: ''
      }
    }
  },
  computed: {
    isComplete () {
      return this.day.val && this.month.val && this.year.val
    },
    hasErrors () {
      return this.day.error || this.month.error || this.year.error
    },
  },
  methods: {
    validate () {
      // day
      if (this.day.val && this.day.val > 31) {
        this.day.error = 'El día ingresado no es válido.'
      } else {
        this.day.error = ''
      }
      // month
      if (this.month.val && this.month.val > 12) {
        this.month.error = 'El mes ingresado no es válido.'
      } else {
        this.month.error = ''
      }
      // year
      if (this.year.val && (this.year.val > 2000 || this.year.val < 1900)) {
        this.year.error = 'El año ingresado no es válido.'
      } else {
        this.year.error = ''
      }
    },
    access () {
      if (this.isComplete && !this.hasErrors) {
        this.$emit('dismissModal')
      }
    },
    backToIntro () {
      this.$emit('dontDismissIntro')
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: rgba(gray, .5);
  position: fixed;
  z-index: 2;
  top: 0; // distancia con el borde superior
  left: 0; // distancia con el borde izquierdo
  right: 0; // distancia con el borde derecho
  bottom: 0; // distancia con el borde inferior
  display: flex;
  align-items: center;
}

img {
  width: 100px;
}

.form-inline {
  flex-flow: row nowrap;
  width: 15rem;
}

.error {
  color: rgb(165, 37, 37);
}

.form-control:focus {
  border-color: transparent;
  box-shadow: 0 0 0 0.1rem rgba(77, 77, 77, 0.25);
}
</style>


