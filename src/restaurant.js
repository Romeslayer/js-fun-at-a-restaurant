function createRestaurant(name) {
  var restaurant = {};
  restaurant.name = name;
  restaurant.menus = {
    breakfast: [],
    lunch: [],
    dinner: []
  };

  return restaurant;
};

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
};

function removeMenuItem (restaurant, item, type) {
  var arr = restaurant.menus[type];
  var newArr = [];
  var boolean = false;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].name === item) {
      boolean = true;
    } else {
      newArr.push(arr[i]);
    }
  };

  restaurant.menus[type] = newArr;

  if (boolean) {
    return 'No one is eating our ' + item + " - it has been removed from the " + type + " menu!";
  } else {
    return 'Sorry, we don\'t sell ' + item + ', try adding a new recipe!';
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
