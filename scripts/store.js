/*global store, cuid*/
const store = (function () {
  const foo = 'bar';
  const store = {
    items: [{
        id: cuid(),
        name: 'apples',
        checked: false
      },
      {
        id: cuid(),
        name: 'oranges',
        checked: false
      },
      {
        id: cuid(),
        name: 'milk',
        checked: true
      },
      {
        id: cuid(),
        name: 'bread',
        checked: false
      }
    ],
    hideCheckedItems: false,
    searchTerm: ''
  };

  // console.log(store.hideCheckedItems);
  
  return {
    items: store.items,
    hideCheckedItems: store.hideCheckedItems,
    searchTerm: store.searchTerm
  }
}());

// console.log(Stores);
// console.log(foo);