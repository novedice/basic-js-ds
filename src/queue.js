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
    this.headQueue = null;
    this.tailQueue = null;
  }


  getUnderlyingList() {
    return this.headQueue;
  }

  enqueue(value) {

    if (!this.headQueue) {
      this.headQueue = new ListNode (value);
      this.tailQueue = this.headQueue;
      return;
    } else {
        let cur = this.tailQueue;
        this.tailQueue = new ListNode(value);
        cur.next = this.tailQueue;
        return;
    }
  }

  dequeue() {
    let current = this.headQueue;
    this.headQueue = this.headQueue.next;
    return current.value;
  }
}

module.exports = {
  Queue
};
 
 