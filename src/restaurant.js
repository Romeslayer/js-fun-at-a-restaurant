function createRestaurant(name) {
  var restaurant = {};
  restaurant.name = name;
  restaurant.menus = {
    breakfast: [],
    lunch: [],
    dinner: []
  };

  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  var restaurantMenuRef = restaurant.menus[menuItem.type]
  if(restaurantMenuRef.length === 0) {
    restaurantMenuRef.push(menuItem);
    return
  } else {
    var boolean = true;
    // Loop through array and check if array has an element with the same name property as menuItem
    for (var i = 0; i < restaurantMenuRef.length; i++) {
      if (restaurantMenuRef[i].name === menuItem.name) {
        boolean = false;
      }
    }

    if(boolean) {
      restaurantMenuRef.push(menuItem);
    }
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
