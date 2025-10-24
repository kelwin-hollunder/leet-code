# LeetCode Problem #19: Remove Nth Node From End of List Solution

## 💻 Problem Description

The challenge is to **remove the $n^{\text{th}}$ node from the end** of a singly-linked list and return the head of the modified list.

**Constraints:**
* The value of $n$ is always valid (i.e., it will be between 1 and the number of nodes).

---

## ✨ Solution Overview

This solution employs the **two-pointer technique** to solve the problem in a **single pass**. This approach avoids the need to first calculate the total length of the list, making it highly efficient.

The core idea is to create a gap of **$n$ nodes** between two pointers. When the leading pointer reaches the end of the list, the trailing pointer will automatically be positioned right *before* the node we need to remove.

### Key Concepts

1.  **Two Pointers:** We use two pointers, effectively **$head$** (the fast/leading pointer) and **$node$** (the slow/trailing pointer).
2.  **Dummy Head (Implicit):** To simplify the logic for removing the *actual* head of the list (when $n$ equals the list length), the solution uses a slight trick: the `$node` pointer is initialized to a copy of the list's structure, which acts similar to a **dummy head** for the removal operation.
3.  **$n$-Node Gap:** We first advance the **$head$** pointer $n$ steps ahead. This establishes the required gap.

---

## 🛠️ Implementation Details

The solution breaks down into three key phases:

### 1. Establish the Gap

A new variable, `response` (acting as the starting point for our manipulation, similar to a dummy head), is created, and the `node` pointer is set to it.

// Advance 'head' by 'n' steps to create the gap
for (let i = 0; i < n; i++) {
    head = head.next;
}

After this loop, the `$head` pointer is $n$ nodes ahead of the `$node` pointer.

### 2. Handle Edge Case: Removing the Head

If `$head` is now `null` after the initial $n$ steps, it means **$n$ was equal to the length of the list**. In this case, the first node is the one to be removed.

if (!head) return response.next;

We return `response.next`, which is the second node of the original list, thus effectively removing the first node.

### 3. Move Pointers Simultaneously

Now, both pointers move one step at a time until the `$head` pointer reaches the end of the list (`null`).

while (head) {
    head = head.next;
    // ... logic for 'node'
}

* When `$head.next` is not `null` (i.e., `$head` still has a node), both pointers advance.
* When `$head` becomes `null`, the `$node` pointer is now positioned **one node before** the node to be removed.

### 4. Perform the Removal

When the `while` loop terminates (i.e., when $head$ becomes `null`), the pointer `$node` is exactly at the node *before* the target node.

else {
    node.next = node.next.next;
}

By setting `$node.next` to `$node.next.next`, we bypass the target node, effectively removing it from the list.

The function finally returns the potentially modified list starting from `response`, which correctly handles all cases.

### Time and Space Complexity

* **Time Complexity:** $\mathcal{O}(L)$, where $L$ is the length of the list. We only make a single pass with the pointers.
* **Space Complexity:** $\mathcal{O}(1)$, as we only use a few extra pointers (`head`, `node`, `response`) regardless of the list size.