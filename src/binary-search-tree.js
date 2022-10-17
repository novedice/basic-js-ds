const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor () {
    this.root = null;
    // this.node = {
    //   data: data,
    //   left: null,
    //   right: null
    // }
  }

  // root() {
  //   return this.root;
  // }

  add(data) {
   this.root = addFunction (this.root, data);
   function addFunction (node, data) {
      if (!node) {return new Node (data)};
      if (node.val === data) {
        return node;
      }
      if (data > node.val) {
        node.right = addFunction(node.right, data);
      } else {
        node.left = addFunction(node.left, data);
      };
      return node;
   };
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(3);
      console.log(tree.add(4));
      // console.log (tree.root());