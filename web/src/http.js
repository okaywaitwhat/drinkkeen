/*
ejemplo en el mounted() de un componente

getCategories(this.$router.path.category)
  .then((categories) => {
    this.categories = categories
  })
*/

export function getCocktails (categoryId) {
  return fetch('https://api.drinkkeen.com/cocktails', { params: { categoryId: this.$router.path.category } })
    .then(res => res.json())
}
