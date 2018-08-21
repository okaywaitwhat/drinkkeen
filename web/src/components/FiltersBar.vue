<template>
    <section>
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-light p-4">
                    <aside class="filters">
                        <h5>Filtrar por</h5>
                            <span>Tipo de mixología</span>
                                    <nav>
                                        <dl class="filters_group">
                                            <dt aria-current="page">
                                                <label>
                                                    <span>Todo</span>
                                                    <input class="recipes-filter" type="checkbox" name="recipes-filter" value="todaslasrecetas">
                                                </label>
                                            </dt>
                                            <dt v-for="item in cocktails" :key="item.cocktails" aria-current="page">
                                                <label>
                                                    <span>{{ item.name }}</span>
                                                    <input class="recipes-filter" type="checkbox" name="recipes-filter" value="clasicas">
                                                </label>
                                            </dt>
                                        </dl>
                                    </nav>
                            <span>Tipo de preparación</span>
                                    <nav>
                                        <dl class="filters_group">
                                            <dt aria-current="page">
                                                <label>
                                                    <span>Todo</span>
                                                    <input class="recipes-filter" type="checkbox" name="recipes-filter" value="shaken">
                                                </label>
                                            </dt>
                                            <dt aria-current="page">
                                                <label>
                                                    <span>Batido</span>
                                                    <input class="recipes-filter" type="checkbox" name="recipes-filter" value="shaken">
                                                </label>
                                            </dt>
                                            <dt aria-current="page">
                                                <label>
                                                    <span>Mezclado</span>
                                                    <input class="recipes-filter" type="checkbox" name="recipes-filter" value="mixed">
                                                </label>
                                            </dt>
                                            <dt aria-current="page">
                                                <label>
                                                    <span>Directo</span>
                                                    <input class="recipes-filter" type="checkbox" name="recipes-filter" value="direct">
                                                </label>
                                            </dt>
                                            <dt aria-current="page">
                                                <label>
                                                    <span>Frozen</span>
                                                    <input class="recipes-filter" type="checkbox" name="recipes-filter" value="frozen">
                                                </label>
                                            </dt>
                                        </dl>
                                    </nav>
                    </aside>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-light bg-light justify-content-center">
            <button class="btn btn-light" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-glass text-dark"></span></button>
        </nav>
    </section>
</template>

<script>
import cocktails from '../data/cocktails.js';

export default {
  name: 'filtersbar',
  data () {
    return {
        cocktails,
    }
  }
}
</script>


<style lang="scss" scoped>

section {
  float: center;
  background: #e9ecef;
}

@media screen and (min-width: 701px) {
  section {
    display: none;
  }
}

</style>




