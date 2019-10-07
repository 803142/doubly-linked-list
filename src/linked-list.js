const Node = require("./node");

class LinkedList {
  constructor() {
    this._tail = null;
    this._head = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      newNode.prev = this._tail;

      this._tail = newNode;
    }
    this.length++;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return false;
    } else {
      if (index === 0) {
        return this._head.data;
      } else {
        let ccurrent = this.head;
        let position = 0;
      }
    }
  }

  insertAt(index, data) {}

  isEmpty() {}

  clear() {}

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;
