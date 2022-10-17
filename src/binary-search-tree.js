const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor () {
    this.rootBST = null;
  }
  root() {
    if (this.rootBST === null) {return null};
    return this.rootBST
  }
  add(data) {
   function addFunction (node, data) {
      if (!node) {return new Node (data)};
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        node.right = addFunction(node.right, data);
      } else {
        node.left = addFunction(node.left, data);
      };
      return node;
   };
   this.rootBST = addFunction (this.rootBST, data);
   console.log('add this->', this)

   return
  }

  has(data) {
    function searchFunc (node, data) {
      if (!node) {return false};
      if (node.data == data) {return true};
      if (data > node.data) {
        return searchFunc(node.right, data);
      };
      if (data < node.data) {
        return searchFunc(node.left, data);
      }
    }
    return searchFunc (this.rootBST, data);
  }

  find(data) {
    function findFunc (node, data) {
      if (!node) {return null};
      if (node.data === data) {return node};
      if (data > node.data) {return findFunc(node.right, data)};
      if (data < node.data) {return findFunc(node.left, data)};
    }
    return findFunc (this.rootBST, data);
  }

  remove(data) {
    function removeFunc (data, node) {
      if (!node) {return null};
      if (data>node.data) {
        node.right = removeFunc(data, node.right);
        return node;
      };
      if (data< node.data) {
        node.left = removeFunc(data, node.left);
        return node;
      };
      if (data === node.data) {
        if ((!node.left) && (!node.right)) {
          return null
        } else if (!node.right) {
          node=node.left;
          return node;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else {
          let maxLeft = node.left;
          while (maxLeft.right) {
            maxLeft = maxLeft.right; 
          };
          node.data = maxLeft.data;
          node.left = removeFunc(maxLeft.data, node.left);
          return node;
         }
      }
    }
    this.rootBST = removeFunc(data, this.rootBST); 
  }

  min() {
    if (this.rootBST === null) { return null};
    let minimum = this.rootBST;
    while (minimum.left) {
      minimum = minimum.left;
    }
    return minimum.data;
  }

  max() {
    if (this.rootBST == null) { return null};
    let maximum = this.rootBST;
    while(maximum.right) {
      maximum = maximum.right;
    }
    return maximum.data;
  }
}

module.exports = {
  BinarySearchTree
};
