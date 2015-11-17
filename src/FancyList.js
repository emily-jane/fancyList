var FancyList = function() {

  this.listType = null;

  this.list = this.setList(arguments);
  this.setListType();

};

FancyList.prototype.setList = function(arguments) {
  if (arguments[0] instanceof Array) {
    return Array.prototype.slice.call(arguments[0]);
  } else {
    return Array.prototype.slice.call(arguments);
  };
};

FancyList.prototype.setListType = function() {
  if (this.list[0] !== 'undefined') {
    this.listType = typeof this.list[0];
  };
  for (var i = 0; i < this.list.length; i++) {
    if (typeof this.list[i] !== this.listType) {
      console.log('You must only enter one type of argument');
      this.list = [];
      this.listType = null;
      break;
    };
  };
};

FancyList.prototype.editingEmptyList = function(item) {
  if (this.listType === 'undefined') {
    this.listType = typeof item;
  }
};

FancyList.prototype.getItemAt = function(index) {
  console.log(this.list[index]);
};

FancyList.prototype.getItemsAt = function(index, numberOfItems) {
  console.log(this.list.slice(index, index + numberOfItems));
};

FancyList.prototype.addItem = function(item) {
  this.editingEmptyList(item);
  if (typeof item === this.listType) {
    this.list.push(item);
  } else {
    console.log('Item ' + item + ' has not been added to the list. You must enter an item of type ' + this.listType);
  };
};

FancyList.prototype.addItems = function() {
  var itemsToAdd = this.setList(arguments);
  this.editingEmptyList(itemsToAdd[0]);
  for (var i = 0; i < itemsToAdd.length; i++) {
    if (typeof itemsToAdd[i] === this.listType) {
      this.list.push(itemsToAdd[i]);
    } else {
      console.log('Item ' + itemsToAdd[i] + ' has not been added to the list. You must enter an item of type ' + this.listType);
    };
  };
};

FancyList.prototype.insertItemAt = function(index, item) {
  this.editingEmptyList(item);
  if (typeof item === this.listType) {
    if (typeof this.list[index - 1] !== 'undefined' || index === 0) {
      this.list.splice(index, 0, item);
    } else {
      console.log('The list has ' + this.list.length + ' items, please enter another index.')
    };
  } else {
    console.log('Item ' + item + ' has not been added to the list. You must enter an item of type ' + this.listType);
  };
};

FancyList.prototype.insertItemsAt = function() {
  var indexNo = arguments[0];
  var itemsToInsert = this.setList(arguments);
  itemsToInsert.splice(0,1);
  this.editingEmptyList(itemsToInsert[0]);
  for (var i = 0; i < itemsToInsert.length; i++) {
    if (typeof itemsToInsert[i] === this.listType) {
      if (typeof this.list[indexNo - 1] !== 'undefined' || indexNo === 0) {
        this.list.splice(indexNo, 0, itemsToInsert[i]);
        indexNo ++;
      } else {
        console.log('The list has ' + this.list.length + ' items, please enter another index.')
      };
    } else {
      console.log('Item ' + itemsToInsert[i] + ' has not been added to the list. You must enter an item of type ' + this.listType);
    };
  }
};

FancyList.prototype.removeItemAt = function(index) {
  if (typeof this.list[0] !== 'undefined') {
    if (typeof this.list[index - 1] !== 'undefined' || index === 0) {
      this.list.splice(index,1);
    } else {
      console.log('The list has ' + this.list.length + ' items, please enter another index, or add some items to the list.')
    };
  } else {
    console.log('This list is empty, please add some items.')
  };
};

FancyList.prototype.removeItemsAt = function(index, numberOfItems) {
  if (typeof this.list[0] !== 'undefined') {
    if (typeof this.list[index + numberOfItems] !== 'undefined' || index === 0) {
      for (var i = 0; i < numberOfItems; i++) {
        this.list.splice(index,1);
      };
    } else {
      console.log('The list has ' + this.list.length + ' items, please enter another index, or add some items to the list.')
    };
  } else {
    console.log('This list is empty, please add some items.')
  };
};

FancyList.prototype.removeItem = function(item) {
  var indexNo = this.list.indexOf(item);
  if (typeof this.list[0] !== 'undefined') {
    if (indexNo > -1) {
      this.list.splice(indexNo,1);
    } else {
      console.log('This item does not exist in the list.')
    }
  } else {
    console.log('This list is empty, please add some items.')
  };
};

FancyList.prototype.removeItems = function() {
  var itemsToRemove = this.setList(arguments);
  if (typeof this.list[0] !== 'undefined') {
    for (var i = 0; i < itemsToRemove.length; i++) {
      var indexNo = this.list.indexOf(itemsToRemove[i]);
      if (indexNo > -1) {
        this.list.splice(indexNo,1);
      } else {
        console.log('Item ' + itemsToRemove[i] + ' does not exist in the list.')
      }
    };
  } else {
    console.log('This list is empty, please add some items.')
  };

}
