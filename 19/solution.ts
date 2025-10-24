/** Provided by Leet Code

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



function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    const response: ListNode = new ListNode(head.val, head.next);

    let node = response;

    for (let i = 0; i < n; i++) {
        head = head.next;
    }

    if (!head) return response.next;



    while (head) {

        head = head.next;



        if (head) {

            node = node.next;

        } else {

            node.next = node.next.next;

        }

    }

    return response;

};