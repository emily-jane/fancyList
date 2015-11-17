var FancyList = function() {

  this.list = [];
  this.listType = null;

  this.setList(arguments);
  this.setListType();

};

FancyList.prototype.setList = function(arguments) {
  if (arguments[0] instanceof Array) {
    this.list = arguments[0];
  } else {
    this.list = arguments;
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

FancyList.prototype.
