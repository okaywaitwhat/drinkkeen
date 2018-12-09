import Vue from 'vue'
import VueRouter from 'vue-router'

import Quotes from './views/quotes/Quotes'
import Jobs from './views/jobs/Jobs'
import Social from './views/social/Social'
import Glossary from './views/glossary/Glossary'
import Registration from './views/registration/Registration'
import Beverages from './views/beverages/Beverages'
import Products from './views/products/Products'
import Login from './views/login/Login'
import CocktailsView from './views/cocktails/CocktailsView'

Vue.use(VueRouter)

/* definimos todos los paths (www.drinkkeen/path) y el componente que queremos que se muestre en esa ruta */
const routes = [
  /* nuestra vista por defecto es quotes */
  { path: '/', component: Registration },
  { path: '/quotes', component: Quotes },
  { path: '/jobs', component: Jobs },
  { path: '/social', component: Social },
  { path: '/glosario', component: Glossary },
  {
    name: 'beverages',
    path: '/beverages/:category?/:beverage?',
    component: Beverages
  },
  {
    name: 'products',
    path: '/products/:productId?',
    component: Products
  },
  {
    path: '/cocktails/:category?/:recipe?',
    name: 'cocktails',
    component: CocktailsView
  },
  { path: '/login', component: Login },
]

export default new VueRouter({
  routes,
  mode: 'history'
})
