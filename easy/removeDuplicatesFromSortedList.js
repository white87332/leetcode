/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head)
{
    if (head === null || head.next === null)
    {
        return head;
    }

    let cur = head;

    while (cur.next !== null)
    {
        // 如果目前Node的值與下一個相同，跳過下一個
        if (cur.val == cur.next.val)
        {
            cur.next = cur.next.next;
        }
        else
        {
            cur = cur.next;
        }
    }
    return head;
};
