<template>
    <section id="slideInfoSection">
        <div class="info-row container">                     
            <div class="col-md-6 mb-1">
                <h4 id="drinkName" class="my-6"></h4>
                <p id="drinkDescription" class="justify"></p>
            </div>
        
            <div class="col-md-6 mb-1">
                <h4 class="my-6">Características</h4>
                    <div class="card">
                        <div class="card-header">
                            Presentación
                        </div>
                            <ul class="list-group list-group-flush">
                                <li id="drinkVersion" class="list-group-item"></li>
                            </ul>
                        <div class="card-header">
                            Graduación Alcoholica
                        </div>
                            <ul class="list-group list-group-flush">
                                <li id="drinkGraduation" class="list-group-item"></li>
                            </ul>
                        <div class="card-header">
                            Notas de cata
                        </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Vista</li>
                                <li class="list-group-item">Aroma</li>
                                <li class="list-group-item">Gusto</li>
                            </ul>
            
                        </div>                
                    </div>
    </section>       
</template>

<script>
export default {
    name: 'slidesinfo',
  data () {
    return {
        
    }
  }
}

</script>

<style lang="scss" scoped>

#slideInfoSection {
  display: none;

.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  }

h4 {
  padding: 10px;
  }
}

</style>

