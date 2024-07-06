import { linkedList } from "../linked-list";
import { linkedListNode } from "../linked-list-node";

let node = new linkedListNode("Nodey The Nodeman", null);
let node2 = new linkedListNode("Noder", null);
let node3 = new linkedListNode("Real Boomer Hours", null);
let node4 = new linkedListNode("Nodester", null);
let list = new linkedList(node);
let number = list.size;

console.log("----PREPEND TESTING----");
console.log("Before Prepend: " + list.toString());
list.prepend(node2);
number = list.size;
console.log(`List size: ${number} //should be 2`);
console.log("After prepend: " + list.toString());
list.prepend(node3);
number = list.size;
console.log(`List size: ${number} //should be 3`);
console.log("After prepend: " + list.toString());
list.prepend(node4);
number = list.size;
console.log(`List size: ${number} //should be 4`);
console.log("After prepend: " + list.toString());

console.log("----FIND TESTING----");
console.log(list.find("Noder"));
console.log(list.find("Nodester"));
console.log(list.find("NODDDERS") + " SB: Node not found");

console.log("----POP TESTING----");
let poppedNode = list.popElement();
console.log(`Popped Node: ${poppedNode.data}`);
number = list.size;
console.log(`List size: ${number} //should be 3`);
console.log(list.toString());

console.log("----AT INDEX TESTING----");
console.log(list.atIndex(90));
console.log(list.atIndex(0).data + " SB: Real Boomer Hours");
console.log(list.atIndex(1).data + " SB: Noder");
console.log(list.atIndex(2).data + " SB: Nodey The Nodeman");

console.log("----TAIL TESTING----");
console.log(list.tail.data + " SB: Nodey the Nodeman");

console.log("---INSERT AT TESTING---");
console.log(list.toString());
let node5 = new linkedListNode("icecream", null);
list.insertAt(node5, 1);
console.log(list.toString());
let node6 = new linkedListNode("Poppers");
list.insertAt(node6, 0);
console.log(list.toString());

console.log("---REMOVE AT TESTING---");
console.log(list.toString());
list.removeAt(list.size);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
