import Vue from 'vue'
import VueRouter from 'vue-router'

import Quotes from './components/Quotes'
import Jobs from './components/Jobs'
import Social from './components/Social'
import Registration from './components/Registration'
import Beverages from './components/Beverages'
import Products from './components/Products'
import Login from './components/Login'
import CocktailsView from './components/CocktailsView'

Vue.use(VueRouter)

/* definimos todos los paths (www.drinkkeen/path) y el componente que queremos que se muestre en esa ruta */
const routes = [
  /* nuestra vista por defecto es quotes */
  { path: '/', component: Registration },
  { path: '/quotes', component: Quotes },
  { path: '/jobs', component: Jobs },
  { path: '/social', component: Social },
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
