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
      console.log('node data',node, data);
      if (!node) {return false};
      console.log(node)
      if (node.data == data) {return true};
      if (data > node.data) {
        return searchFunc(node.right, data);
      };
      if (data < node.data) {
        return searchFunc(node.left, data);
      }
    }
    console.log('this->', this)
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
    // function removeFunc (data, node) {
    //   if (!node) {return null};
    //   if (data>node.data) {
    //     node.right = removeFunc(data, node.right);
    //   };
    //   if (data< node.data) {
    //     node.left = removeFunc(data, node.left);
    //   };
    //   if (data === node.data) {
    //     if ((!node.left) && (!node.right)) {
    //       return null
    //     } else if (!node.right) {
    //       node=node.left
    //     } else if (!node.left) {
    //       node = node.right
    //     } else {
    //       let maxLeft = node.left;
    //       while (maxLeft.right) {
    //         maxLeft = maxLeft.right; 
    //       };
    //       node.data = maxLeft.data;
    //       node.left = removeFunc(maxLeft.data, node.left);
    //       return node;
    //      }
    //   }
    // }
    // this.rootBST = removeFunc(data, this.rootBST); 
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
// const tree = new BinarySearchTree();
// console.log(tree);
//       console.log(tree.add(2));
//       console.log(tree);
//       console.log(tree.root());
//       console.log(tree.add(3));
//       console.log(tree.root().data);
//       console.log(tree.add(4));
//       console.log(tree.root().data);
//       console.log(tree.rootBST.right);
//       console.log(tree.find(4).data);
//       tree.add(8);
//       console.log(tree.find(8).data,' 8');
//       // console.log (tree.root());

const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      // tree.remove(14);
      // tree.remove(8);
      // tree.remove(9);
      console.log(tree.find(31).data)
      console.log(tree.has(14), '!false');
      console.log(tree.has(8), '!false');
      console.log(tree.has(9), '!false');
      console.log(tree.has(2), 'true');
      console.log(tree.has(6), 'true');
      console.log(tree.has(128), 'true');
      console.log(tree.has(31), 'true');
      console.log(tree.has(54),' true');
      console.log(tree.has(1), 'true')