export class linkedListNode {
	constructor(data) {
		this.data = data;
		this.upcomingNode = null;
	}
	setNextNode(node) {
		this.upcomingNode = node;
	}
	get nextNode() {
		return this.upcomingNode;
	}
}
