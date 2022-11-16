/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = [];
    while (head !== null)
    {
        str.push(head.val);
        head = head.next;
    }

    return str.join('') === str.reverse().join('')? true : false;
};
