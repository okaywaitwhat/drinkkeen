import Vue from 'vue'
import VueRouter from 'vue-router'

import Quotes from './components/Quotes'
import Jobs from './components/Jobs'
import Social from './components/Social'
import Registration from './components/Registration'
import Beverages from './components/Beverages'
import Category from './components/Category'
import Collections from './components/Collections'
import Products from './components/Products'
import Login from './components/Login'

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
    path: '/beverages/:category?',
    component: Beverages
  },
  { path: '/cocteleria', component: Collections },
  { path: '/cocteleria/de-autor', name: 'author', component: Category },
  { path: '/cocteleria/clasica', name: 'classic', component: Category },
  { path: '/cocteleria/moderna', name: 'modern', component: Category },
  { path: '/cocteleria/molecular', name: 'molecular', component: Category },
  { path: '/products', component: Products },
  { path: '/login', component: Login },
]

export default new VueRouter({
  routes,
  mode: 'history'
})
