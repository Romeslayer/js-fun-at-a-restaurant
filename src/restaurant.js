function createRestaurant(name) {
  var resturant = {};
  resturant.name = name;
  resturant.menus = {
    breakfast: [],
    lunch: [],
    dinner: []
  };

  return resturant;
}

module.exports = {
  createRestaurant,
  // addMenuItem,
  // removeMenuItem
}
