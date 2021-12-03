function takeOrder(order, arr) {
  if(arr.length < 3) {
    arr.push(order)
  }
  return arr;
}

function refundOrder(orderNumb, arr) {
// Loop through each element in Array
  arr.forEach(function(element, index) {
    // Function checks if property orderNumber is the same as parameter orderNumb
    if(element.orderNumber === orderNumb) {
      // If the statement above is true remove element of array
      arr.splice(index, 1)
    }
  }
)
}

function listItems(arr) {
  var string = "";
  for(var i = 0; i < arr.length; i++) {
    string += `${arr[i].item}, `;
  }
  string = string.slice(0, -2)
  return string;
}

function searchOrder() {

}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
