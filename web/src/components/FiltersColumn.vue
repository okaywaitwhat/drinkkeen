<template>
    <aside class="filters" id="recipesFilters">
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
                <span>Bebida</span>
                        <nav>
                            <dl class="filters_group">
                                <dt aria-current="page">
                                    <label>
                                        <span>Todo</span>
                                        <input class="recipes-filter form-control-label" type="checkbox" name="recipes-filter" value="vermouth">
                                    </label>
                                </dt>
                                <dt v-for="item in drinks" :key="item.drinks" aria-current="page">
                                    <label>
                                        <span>{{ item.name }}</span>
                                        <input class="recipes-filter form-control-label" type="checkbox" name="recipes-filter" value="vermouth">
                                    </label>
                                </dt>
                            </dl>
                        </nav>
            </aside>
</template>

<script>
import drinks from '../data/drinks.js';
import cocktails from '../data/cocktails.js';

export default {
  name: 'filterscol',
  data () {
    return {
        drinks, cocktails,
    }
  }
}

</script>

<style lang="scss" scoped>

aside {
  background: #e9ecef;
  float: left;
  text-align: left;
}

@media screen and (max-width: 700px) {
  aside {
    display: none !important;
  }
}
</style>

