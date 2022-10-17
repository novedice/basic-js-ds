const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.arrQueue = [];
    // this.arrLength = 0;
    // this.headQueue = null;
    // this.tailQueue = null
  }


  getUnderlyingList() {
    return this.arrQueue;
  }

  enqueue(value) {
    // if (!this.headQueue) {
      // this.headQueue = new ListNode (value);
      // this.tailQueue = this.headQueue;
      // this.arrQueue.push(this.tailQueue);
      // this.arrLength += 1;
      // return
    // };
    // let prev = this.tailQueue;
    // this.tailQueue = new ListNode (value);
    // this.arrQueue.push(this.tailQueue);
    // prev.next = this.tailQueue;
    // this.arrLength +=1;
    this.arrQueue.push(new ListNode(value));
    return
  }

  dequeue() {
    // if (!this.headQueue) {
    //   return null
    // };
    // this.headQueue = this.headQueue.next;
    // this.arrLength -= 1;
    return this.arrQueue.shift().value;
  }
}

module.exports = {
  Queue
};
// const queue = new Queue();
 
//  console.log(queue.enqueue(1)); // adds the element to the queue
//  console.log(queue.arrLength);
//  console.log(queue.headQueue);
//  console.log(queue.tailQueue);
//  console.log(queue.enqueue(3)); // adds the element to the queue
//  console.log(queue.arrLength);
//  console.log(queue.headQueue);
//  console.log(queue.tailQueue);
//  console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
//  console.log(queue.arrLength);
//  console.log(queue.headQueue);
//  console.log(queue.tailQueue);
//  console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }console.log(