/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let recordMap = new Set();
    while(head !== null)
    {
        if (recordMap.has(head))
        {
            return true;
        }
        else
        {
            recordMap.add(head);
            head = head.next;
        }
    }
    return false;
};
