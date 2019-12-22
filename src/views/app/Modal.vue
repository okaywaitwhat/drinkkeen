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
          <b-form-input type="date" v-model="birthDate" @keyup.enter="access()"/>
        </div>

        <p v-if="errors.length">
          <span class="error" v-for="error in errors" :key="error">{{ error }}</span>
        </p>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark"
        :class="{ disabled: !validDate }"
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
      birthDate: null,
    }
  },
  computed: {
    validDate () {
      var dateFormat = "YYYY/MM/DD";
      if (moment(this.birthDate, dateFormat).isValid()) {
        return true
      } else {
        return false
      };
    },
  },
  methods: {
    access () {
      if (this.validDate) {
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


