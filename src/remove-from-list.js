const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }
function removeKFromList(l, k ) {
  // for (let i=0; i<l.length; i++) {
  //   l[i] = new ListNode(l[i]);
  // };
  // console.log(l);
  // for (let i=0; i<l.length-1; i++) {
  //   l[i].next = l[i+1];
  // };
  let headList = l[0];
  for (let i=0; i<l.length; i++) {
    if (l[i]/*.value*/ === k) {
      if (i === 0) {
       l.shift()
      } else if (i === l.length - 1) {
        l.pop();
      } else {
         l.splice(i,1);
         } 
        }
    }
    for (let i=0; i<l.length-1; i++) {
      l[i].next = l[i+1];
      };
  
  console.log(l);
  // l = l.filter(elem => elem !== null);
  console.log(headList);
  // let values = [];
  // for (let elem of l ) {values.push(elem.value)}
  // console.log(values);
  return l;
  
}

module.exports = {
  removeKFromList
};
console.log(removeKFromList([3,1,2,3,4,5],3));