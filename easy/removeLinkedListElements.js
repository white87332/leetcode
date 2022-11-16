var removeElements = function(head, val) {
    if (!head) return head;

    let node = new ListNode(0);
    let prev = node;
    node.next = head;

    while (head != null)
    {
        if (head.val != val)
        {
            // 目前節點與val不相等，往下一個
            prev = head;
            head = head.next;
        }
        else
        {
            // 目前節點與val相等，跳過目前節點
            prev.next = head.next;
            head = head.next;
        }
    }

    return node.next;
};
