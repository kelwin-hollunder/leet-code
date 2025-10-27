/** Provided by Leetcode
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(!lists?.length) return null;

    const allNodes: ListNode[] = [];
    for(let i = 0; i < lists.length; i++) {
        let node = lists[i];

        while(node) {
            allNodes.push(node);
            node = node.next;
        }
    }

    const sortedNodes = allNodes.sort((a, b) => a.val - b.val);

    const response = sortedNodes[0] ?? null;

    for(let i = 0; i < sortedNodes.length; i++) {
        let node = sortedNodes[i];
        if(sortedNodes[i+1]) node.next = sortedNodes[i+1];
    }

    return response;
};
