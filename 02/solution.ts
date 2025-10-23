/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
        l1?: ListNode, l2?: ListNode
    ): ListNode | null {
    let node: ListNode = new ListNode();
    let pointerToOriginalNode: ListNode = node;

    let exceed: number = 0;
    while(l1 || l2 || exceed > 0) {
        let total: number = exceed;

        if(l1) {
            total += l1.val;
            l1 = l1.next;
        }

        if(l2) {
            total += l2.val;
            l2 = l2.next;
        }

        exceed = Math.floor(total / 10);

        node.next = new ListNode(total % 10);
        node = node.next;
    }

    return pointerToOriginalNode.next;
}