import Vue from 'vue'
import VueRouter from 'vue-router'

import Quotes from './views/quotes/Quotes'
import Jobs from './views/jobs/JobsView'
import Social from './views/social/SocialView'
import Glossary from './views/glossary/GlossaryView'
import Registration from './views/registration/Registration'
import Drinks from './views/drinks/DrinksView'
import Products from './views/products/ProductsView'
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
    name: 'drinks',
    path: '/drinks/:category?/:drink?',
    component: Drinks
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
