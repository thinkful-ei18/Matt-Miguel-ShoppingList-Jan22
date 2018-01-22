/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

shoppingList.render();
store.addItem('eggs!!');
let ourIdNum = store.items[0].id;
console.log(ourIdNum+' this is our id num for apples');
console.log(store.findById(ourIdNum));
console.log(store.findAndToggleChecked(ourIdNum));

let ourEditNum = store.items[1].id;
console.log(store.findAndDelete(ourEditNum));

shoppingList.render()
