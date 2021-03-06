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

      const findById = function (idNum) {
        // console.log('this is: ', this);
        // console.log('store is: ', store);
        
        let myId = this.items.find(ourItem => {
          return idNum === ourItem.id;
        });
        // console.log(myId);
        return myId;

      };

      const addItem = function (itemName) {
        try {
          Item.validateName(itemName);
          this.items.push(Item.create(itemName));
          // console.log(store);
          // console.log('testing the find ' + store.items[0].id);

        } catch (e) {
          // console.log(e);
        }
      };
      const findAndToggleChecked = function (findId) {
        //store.findAndToggleChecked(store.item[0].id);
        // console.log('the find by id is '+findId);
        // console.log('find to toggle is ' + itemToToggle);
        const itemToToggle = this.findById(findId);
        // console.log(itemToToggle);
        
        itemToToggle.checked = !itemToToggle.checked;
        return store.items;
      };

      const findAndUpdateName = function (id, newName) {
        try {
          Item.validateName(newName);
          const itemToEdit = this.findById(id);
          return itemToEdit.name = newName;
        } catch (error) {
          // console.log('Failed to update item ' + error);
        }
      };

      const findAndDelete = function (id) {
        this.items = this.items.filter(
          ourElement => ourElement.id!==id
          );
        return store.items;
        };
      
      const toggleCheckedFilter = function(){
      	// console.log('checked filter before',store);
      	// console.log('this is',this);
      	this.hideCheckedItems = !this.hideCheckedItems;
      	// console.log('checked filter after',store);
      	return this.hideCheckedItems;
      };
      const setSearchTerm = function(searchTerm){
      	this.searchTerm = searchTerm;

      }


        return {
          items: store.items,
          hideCheckedItems: store.hideCheckedItems,
          searchTerm: store.searchTerm,
          findById: findById,
          addItem: addItem,
          findAndToggleChecked: findAndToggleChecked,
          findAndUpdateName: findAndUpdateName,
          findAndDelete: findAndDelete,
          toggleCheckedFilter:toggleCheckedFilter,
          setSearchTerm:setSearchTerm,
        };
      }());




    // console.log(Stores);
    // console.log(foo);