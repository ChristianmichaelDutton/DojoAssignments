// setting up a SLL
function Linkedlist(){
  this.head=null;
}
// setting up a node
function ListNode(value){
  this.val = value;
  this.next = null;
}

// Determine if a list is empty or not
Linkedlist.prototype.isEmpty = function () {
  if (this.head === null) {
    return true;
  }
  else{
    return false;
  }
};

// Determine the size of a SLL
Linkedlist.prototype.size = function () {
  var current = this.head;
  var count = 0;
  while (current !== null){
    count ++;
    current = current.next;
  }
  return count;
};

// Moves a node to the front of the list
Linkedlist.prototype.prepend = function (val) {
  // 1. create a new node
  var newNode = {
    data:val,
    // 2. make the new node point to the current head
    next:this.head
  }
  // 3. update this.head to point the newNode
  this.head = newNode;
};

Linkedlist.prototype.append = function (val) {
  var newNode = {
    data:val,
    next:null
  }
  if (this.isEmpty()){
    this.head = newNode;
    return;
  }
  var current = this.head;
  while (current.next !== null){
    current = current.next;
  }
  current.next = newNode;
};

Linkedlist.prototype.contains = function (val) {
  var current = this.head;

  while (current !==null){
    if (current.val === val){
      return true;
    }
    current = current.next;
  }
  return false;
};

Linkedlist.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }

  if (this.head.data === val) {
    this.head = this.head.next;
    return;
  }

  var prev = null;
  var curr = this.head;

  while (curr.data !== val) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;
};

Linkedlist.prototype.print = function() {
  var output = '[';
  var current = this.head;

  while (current !== null) {
    output += current.data;
    if (current.next !== null) {
      output += ', ';
    }
    current = current.next;
  }

  output += ']';
  console.log(output);
};

var list = new Linkedlist();
list.append(10);
list.append(5);
list.append(18);
list.prepend(200);
list.append(300);
list.append(40);
list.contains(200);
list.remove(18);
list.remove(300);

console.log(list);
console.log(list.size());
console.log(list.isEmpty());
list.print();
