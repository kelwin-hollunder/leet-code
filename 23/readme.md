================================================================================
# LeetCode Problem #23: Merge k Sorted Lists Solution
================================================================================

## 💻 Problem Description

The challenge is to **merge $k$ sorted singly-linked lists** into one single sorted linked list and return the head of the merged list.

Example:
Input: lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
Output: [1, 1, 2, 3, 4, 4, 5, 6]

---

## ✨ Solution Overview: Flatten, Sort, and Rebuild

This solution uses the **"Flatten and Sort"** approach, which is simple to implement but sacrifices some performance compared to solutions using a Min-Heap.

The strategy involves three main steps:

1.  **Flatten:** Extract all nodes from all $k$ lists into a single auxiliary array.
2.  **Sort:** Sort the array of nodes based on their numeric value (`val`).
3.  **Rebuild:** Reconstruct the final sorted linked list by updating the `.next` pointers of the now-sorted nodes.

---

## 🛠️ Implementation Details

### 1. Flattening (Extracting All Nodes)
All nodes from all $k$ lists are collected into the `allNodes` array by traversing each list.

### 2. Sorting
The `allNodes` array is sorted using the native sort function, comparing the `val` property of the `ListNode` objects.

const sortedNodes = allNodes.sort((a, b) => a.val - b.val);

### 3. Rebuilding the List
The loop iterates through the `sortedNodes` array, linking each node to its successor: `node.next = sortedNodes[i+1]`. The first element of the sorted array becomes the head of the new merged list.

### Time and Space Complexity (Flatten and Sort)

* Let $N$ be the **total number of nodes** across all lists.

* **Time Complexity:** $\mathcal{O}(N \log N)$. The array sorting step is the most time-consuming operation.
* **Space Complexity:** $\mathcal{O}(N)$. We store all $N$ nodes in the auxiliary array.