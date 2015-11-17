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

FancyList.prototype.getItemAt = function(index) {
  console.log(this.list[index]);
};

FancyList.prototype.getItemsAt = function(index, numberOfItems) {
  console.log(this.list.slice(index, index + numberOfItems));
};

FancyList.prototype.addItem = function(item) {
  if (typeof item === this.listType) {
    this.list.push(item);
  } else {
    console.log('Item ' + item + ' has not been added to the list. You must enter an item of type ' + this.listType);
  };
};

FancyList.prototype.addItems = function() {
  this.itemsToAdd = this.setList(arguments);
  for (var i = 0; i < this.itemsToAdd.length; i++) {
    if (typeof this.itemsToAdd[i] === this.listType) {
      this.list.push(this.itemsToAdd[i]);
    } else {
      console.log('Item ' + this.itemsToAdd[i] + ' has not been added to the list. You must enter an item of type ' + this.listType);
    };
  };
  console.log(this.list);
};
