<template>
<section>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <img src="../assets/media/smlogo.png">
      </div>

      <div class="modal-body">
        <p>Pedirte que te identifiques forma parte de nuestro compromiso con el consumo responsable.</p>
        <p>Introduce tu fecha de nacimiento:</p>

        <div class="form-group form-inline">
          <!-- v-model hace que se sincronicen en el codigo y en el input siempre -->
          <input type="text" v-model.number="day" class="form-control m-1" placeholder="DD" size="3" autocomplete='off' @keyup.enter="access()"> /
          <input type="text" v-model.number="month" class="form-control m-1" placeholder="MM" size="3" autocomplete='off' @keyup.enter="access()"> /
          <input type="text" v-model.number="year" class="form-control m-1" placeholder="AAAA" size="4" autocomplete='off' @keyup.enter="access()">
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark"
        :class="{ disabled: !isValid }"
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
    }
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
</style>


