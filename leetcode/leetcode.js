//1.请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

var twoSum = function(nums, target) {
    var arr = [];
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i]+nums[j] == target){
                arr = [i,j];
                return arr;
            }
        }
    }
};

const twoSum = function(nums, target) {
    // target , 一重循环， nums[i],  target-nums[i]
    let map = {}; //对象字面量
    // map[key] = value 
    nums.forEach(function(e, i) {
      console.log(e, i); 
      map[e] = i; // map[]
    })
    // console.log(map);
    for (let i = 0; i < nums.length; i++) {
      // 若map[key]存在 且不等于i
      let j = map[target - nums[i]];
      if (j && j !== i) {
        return [i, j];
      }
    }
  }
//   twoSum([2,7,9,13],9);
//   时间复杂度 O(n)



//2.两数相加 给出两个非空的链表用来表示两个非负的整数。
// 其中，它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var node = new ListNode('head');
    var temp = node, sum = 0, n = 0;
    while (l1 || l2){
      const n1 = l1?l1.val : 0;
      const n2 = l2?l2.val : 0;
      sum = n1 + n2 + n;
      temp.next = new ListNode(sum % 10);
      temp = temp.next; //?
      n = parseInt(sum/10);
      if(l1) l1 = l1.next;
      if(l2) l2 = l2.next;
    }
    if(n>0) temp.next = new ListNode(n)
    return node.next;//?
};



//3.给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let max = 0;
  for(let item of s){
      if(arr.includes(item)){
          let index = arr.indexOf(item);
          arr.splice(0, index + 1);
      }
      arr.push(item);
      max = max > arr.length ? max : arr.length;
  }
  return max;
};

//哈希表实现数组去重
var quchong = function (target) {
  var temp = {}
  for (let i in target){
    let target[i] = result;
    if(!temp[result]){
      temp.push(result);
    }
  }
  return temp;
}
quchong([1,2,1,4,5,2]);
