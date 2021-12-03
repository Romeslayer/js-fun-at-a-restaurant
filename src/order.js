function takeOrder(order, arr) {
  if(arr.length < 3) {
    arr.push(order)
  }
  return arr;
}

function refundOrder() {

}


module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
