export class linkedList {
	constructor(headOfList) {
		this.headOfList = headOfList || null;
		this.tailOfList = headOfList;
		this.sizeOfList = 1;
	}

	prepend(node) {
		if (this.sizeOfList < 2) {
			node.setNextNode(this.headOfList);
			node.setNextNode(this.tailOfList);
			this.headOfList = node;
		} else {
			node.setNextNode(this.headOfList);
			this.headOfList = node;
		}
		this.sizeOfList++;
	}
	get size() {
		return this.sizeOfList;
	}

	get head() {
		return this.headOfList;
	}

	get tail() {
		return this.tailOfList;
	}

	setTail(node) {
		this.tailOfList = node;
	}

	atIndex(index) {
		let currentNode = this.headOfList;
		let i = 0;

		if (index == 0) {
			return currentNode;
		}

		if (index > this.size) {
			console.error("----Request is out of bounds----");
			return null;
		}

		while (i < index) {
			currentNode = currentNode.nextNode;
			i++;
		}
		return currentNode;
	}
	popElement() {
		let tempHead = this.headOfList;
		this.headOfList = this.headOfList.nextNode;
		this.sizeOfList--;
		return tempHead;
	}
	contains(value) {
		let currentNode = this.head;
		while (currentNode) {
			if (value == currentNode.data) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	}
	find(value) {
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.data == value) {
				return currentNode;
			}
			currentNode = currentNode.nextNode;
		}
		let errMsg = "Node not found";
		return errMsg;
	}
	toString() {
		let currentNode = this.head;
		let linkedListString = "";
		while (currentNode) {
			linkedListString += currentNode.data;
			if (currentNode.nextNode !== null) {
				linkedListString += "->";
			}
			currentNode = currentNode.nextNode;
		}
		return linkedListString;
	}

	// // Extra Credit
	insertAt(inputNode, index) {
		if (index == 0) {
			this.prepend(inputNode);
		} else {
			let nodeBeforeIndex = this.atIndex(index - 1);
			let nodeAtIndex = this.atIndex(index);
			nodeBeforeIndex.setNextNode(inputNode);
			inputNode.setNextNode(nodeAtIndex);
		}
	}
	removeAt(index) {
		let nodeAtIndex = this.atIndex(index);
		let beforeIndex = index - 1;
		let afterIndex = index + 1;

		if (index == 0) {
			this.popElement();
		} else if (afterIndex > this.size) {
			let nodeBeforeIndex = this.atIndex(beforeIndex);
			this.setTail(nodeBeforeIndex);
			nodeBeforeIndex.setNextNode(null);
		} else {
			let nodeBeforeIndex = this.atIndex(beforeIndex);
			let nodeAfterIndex = this.atIndex(afterIndex);
			nodeBeforeIndex.setNextNode(nodeAfterIndex);
		}
	}
}
