<template>
<section>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <img src="../../assets/media/smlogo.png">
      </div>

      <div class="modal-body">
        <p>Pedirte que te identifiques como mayor de edad forma parte de nuestro compromiso con el consumo responsable.</p>
        <p>Introduce tu fecha de nacimiento:</p>

        <div class="form-group form-inline">
          <!-- v-model hace que se sincronicen en el codigo y en el input siempre -->
          <input type="text" ref="day" v-model.number="day" class="form-control m-1" placeholder="Día" size="3" autocomplete='off' @keyup.enter="access()"> /
          <input type="text" ref="month" v-model.number="month" class="form-control m-1" placeholder="Mes" size="3" autocomplete='off' @keyup.enter="access()"> /
          <input type="text" ref="year" v-model.number="year" class="form-control m-1" placeholder="Año" size="4" autocomplete='off' @keyup.enter="access()">
        </div>

        <p v-if="errors.length">
          <span class="error" v-for="error in errors" :key="error">{{ error }}</span>
        </p>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark"
        :class="{ disabled: !isValid, hasErrors }"
        @click="access()">Acceder</button>
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
      errors: [],
      day: '',
      month: '',
      year: ''
    }
  },
  computed: {
    isValid () {
      if (this.day > 31) return false
      if (this.month > 12) return false
      if (this.year > 2000 || this.year < 1900) return false
      return this.day && this.month && this.year
      // return this.day !== '' && this.month !== '' && this.year !== ''
    },
    hasErrors () {
      this.errors = [];
      if (this.day > 31) {
        this.errors.push('El día ingresado no es válido.')
        //this.$refs.day.style.color = 'rgb(165, 37, 37)';
      }
      if (this.month > 12) {
        this.errors.push('El mes ingresado no es válido.')
      }
      if (this.year > 2000) {
        this.errors.push('El año ingresado no es válido.')
      }
    },
  },
  methods: {
    access () {
      if (this.isValid) {
        this.$emit('dismissModal')
      }
    },
    backToIntro () {
        this.$emit('dontDismissIntro')
    },
  },
  mounted() {
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        this.access();
      }
    });
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


