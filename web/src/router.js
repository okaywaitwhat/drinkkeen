import Vue from 'vue'
import VueRouter from 'vue-router'

import Quotes from './components/Quotes'
import Beverages from './components/Beverages'
import Recipes from './components/Recipes'
import Collections from './components/Collections'
import Products from './components/Products'
import Login from './components/Login'

Vue.use(VueRouter)

/* definimos todos los paths (www.drinkkeen/path) y el componente que queremos que se muestre en esa ruta */
const routes = [
  /* nuestra vista por defecto es quotes */
  { path: '/', component: Quotes },
  { path: '/beverages', component: Beverages },
  { path: '/recipes', component: Recipes },
  { path: '/collections', component: Collections },
  { path: '/products', component: Products },
  { path: '/login', component: Login },
]

export default new VueRouter({ routes })
