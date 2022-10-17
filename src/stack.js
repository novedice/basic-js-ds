const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stackAr = [];
    this.stackLength = 0;
    this.stackHead = null;
  }
  push(element) {
   this.stackAr.push(element);
   this.stackLength +=1;
   this.stackHead = element;
   return this;
  }

  pop() {
    this.stackLength -= 1;
    if (this.stackLength <0) {return undefined};
    if (this.stackLength == 0) {
      this.stackHead = null;
      return this.stackAr.pop();
    };
    if (this.stackLength > 0) {
      this.stackHead = this.stackAr[this.stackAr.length-2];
      return this.stackAr.pop();
    };
  }

  peek() {
   return this.stackHead;
  }
}

module.exports = {
  Stack
};

