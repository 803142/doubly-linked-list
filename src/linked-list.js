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
		return this;
	}

	head() {
		if (this._head) {
			return this._head.data;
		} else return null;
	}

	tail() {
		if (this._tail) {
			return this._tail.data;
		} else return null;
	}

	at(index) {
		if (index < 0 || index >= this.length) {
			return false;
		} else {
			if (index === 0) {
				return this._head.data;
			} else {
				let current = this._head;
				let prev = null;
				let position = 0;

				while (position < index) {
					prev = current;
					current = current.next;
					position++;
				}
				return current.data;
			}
		}
	}

	insertAt(index, data) {
		console.log(this._head);
		const newNode = new Node(data);

		if (index < 0 || index > this.length) {
			return false;
		} else {
			if (index === 0) {
				newNode.next = this._head;
				if (this._head) {
					this._head.prev = newNode;
				}

				this._head = newNode;
			} else if (index === this.length) {
				this._tail.next = newNode;
				newNode.prev = this._tail;
				this._tail = newNode;
			} else {
				let current = this._head;
				let prev = null;
				let position = 0;

				while (position < index) {
					prev = current;
					current = current.next;
					position++;
				}
				newNode.prev = prev;
				newNode.next = current;

				prev.next = newNode;
				current.prev = newNode;
			}
		}

		this.length++;
		return this;
	}

	isEmpty() {
		return this.length === 0;
	}

	clear() {
		this._tail = null;
		this._head = null;
		this.length = 0;
		return this;
	}

	deleteAt(index) {
		if (index < 0 || index > this.length) {
			return this;
		} else {
			if (index === 0) {
				this._head = this._head.next;
			} else {
				if (index === this.length) {
					this._tail = this._tail.prev;
					this._tail.next = null;
				} else {
					let current = this._head;
					let prev = null;
					let position = 0;
					while (position < index) {
						prev = current;
						current = current.next;
						position++;
					}

					prev.next = current.next;
					current.next.prev = prev;
				}
			}
		}

		this.length--;
		return this;
	}

	reverse() {
		let current = this._head;
		let tempPrev = null;
		let index = 0;
		if (this.length > 1)
			while (current.next != null) {
				current.prev = current.next;
				current.next = tempPrev;
				current = current.prev;
				tempPrev = current.prev;
				index++;
			}
		current.prev = current.next;
		current.next = tempPrev;
		tempPrev = this._head;
		this._head = this._tail;
		this._tail = tempPrev;
		return this;
	}

	indexOf(data) {
		let current = this._head;
		let index = 0;

		while (current) {
			if (current.data === data) {
				return index;
			}

			current = current.next;
			index++;
		}
		return -1;
	}
}

module.exports = LinkedList;
