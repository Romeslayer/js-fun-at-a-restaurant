function nameMenuItem(name) {
  name = 'Delicious ' + name;
  return name;
}

function createMenuItem(name, price, type) {
  var item = {};
  item.name = name;
  item.price = price;
  item.type = type;
  return item;
}

function addIngredients(ingredient, arr) {
if(!arr.includes(ingredient)) {
  arr.push(ingredient);
}
}

function formatPrice(price) {
  return "$" + price;
}

function decreasePrice(price) {
  return price - (price * .1) ;
}

function createRecipe(title, ingredients, menuItemType) {
  var obj = {};
  obj.title = title;
  obj.ingredients = ingredients;
  obj.type = menuItemType;

  return obj;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
