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

	const findById =function(idNum){
	let myId = store.items.find(ourItem=>{
		return idNum===ourItem.id;
	}
	);
	return myId;
	// console.log('the id was'+myId);

}

	const addItem =function(itemName){
	try{
		Item.validateName(itemName);
		this.items.push(Item.create(itemName));
		// console.log(store);
		console.log('testing the find '+store.items[0].id);

	}
	catch(e){
		console.log(e);
	}
}
	const findAndToggleChecked = function(findId){
  //store.findAndToggleChecked(store.item[0].id);
		// console.log('the find by id is '+findId);
		// console.log('find to toggle is ' + itemToToggle);
		const itemToToggle =this.findById(findId);
		return itemToToggle.checked = !itemToToggle.checked;
}
  return {
    items: store.items,
    hideCheckedItems: store.hideCheckedItems,
    searchTerm: store.searchTerm,
    findById: findById,
    addItem: addItem,
    findAndToggleChecked: findAndToggleChecked,
  };
}());


 

// console.log(Stores);
// console.log(foo);