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
                                <dt aria-current="page">
                                    <label>
                                        <span>Clásica</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="clasicas">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Moderna</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="modernas">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Molecular</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="modernas">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>De autor</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="deautor">
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
                                <dt aria-current="page">
                                    <label>
                                        <span>Vermouth</span>
                                        <input class="recipes-filter form-control-label" type="checkbox" name="recipes-filter" value="vermouth">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Vodka</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="vodka">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Whiskey</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="whiskey">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Ron</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="ron">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Gin & Ginebra</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="ginginebra">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Tequila</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="tequila">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Mezcal</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="mezcal">
                                    </label>
                                </dt>
                                <dt aria-current="page">
                                    <label>
                                        <span>Licor</span>
                                        <input class="recipes-filter" type="checkbox" name="recipes-filter" value="licores">
                                    </label>
                                </dt>
                            </dl>
                        </nav>
            </aside>
</template>

<script>
export default {
  name: 'filterscol',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

#recipesFilters {
  background: #e9ecef;
  float: left;
  text-align: left;
  display: none;
}

</style>

