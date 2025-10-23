# LeetCode Problem #02: Add Two Numbers Solution

## 💻 Problem Description

The problem asks us to add two **non-negative numbers** represented as **singly-linked lists**. The digits are stored in **reverse order**, and each node contains a single digit. We need to return the sum as a new linked list, also with digits in reverse order.

For example:
Input: $(2 \to 4 \to 3) + (5 \to 6 \to 4)$
The numbers are $342 + 465 = 807$.
Output: $(7 \to 0 \to 8)$

---

## ✨ Solution Overview

This solution uses an **iterative** approach, simulating the manual process of adding numbers column by column, from right to left, while managing a **carry-over** (or *exceed*) value.

### Key Concepts

1.  **Iterative Addition:** We traverse both input lists ($l1$ and $l2$) simultaneously using a `while` loop. The loop continues as long as there are digits remaining in either list or a carry-over value (`exceed`) is present.
2.  **Carry Management:** A variable, `exceed`, tracks the carry-over from the previous digit addition. This is initialized to $0$.
3.  **New Linked List Construction:** A **dummy head** node (`pointerToOriginalNode`) is created to simplify the insertion of the first digit. The pointer (`node`) then moves along the newly constructed list.

---

## 🛠️ Implementation Details

The core of the logic resides within the `while` loop:

1.  **Calculate Total:** In each iteration, the `total` sum for the current position is calculated by adding:
    * The current `exceed` value.
    * The digit from $l1$ (if $l1$ is not `null`).
    * The digit from $l2$ (if $l2$ is not `null`).
2.  **Update Input Pointers:** After adding the digits, the pointers $l1$ and $l2$ are advanced to their `.next` nodes.
3.  **Determine New Exceed:** The new carry-over (`exceed`) is calculated as $\lfloor \frac{\text{total}}{10} \rfloor$ (the integer part of the division). This is the digit that will be carried to the next column.
4.  **Create New Node:** A new `ListNode` is created with the digit $\text{total} \pmod{10}$ (the remainder of the division). This is the *current* position's digit in the sum.
5.  **Append and Advance:** The new node is appended to the result list (`node.next = new ListNode(...)`), and the `node` pointer is moved to this new node (`node = node.next`) to prepare for the next iteration.
6.  **Return Value:** The function returns `pointerToOriginalNode.next`, effectively skipping the dummy head node and returning the actual start of the sum list.

### Time and Space Complexity

* **Time Complexity:** $\mathcal{O}(\max(N, M))$, where $N$ and $M$ are the lengths of the two input linked lists. We iterate through both lists at most once.
* **Space Complexity:** $\mathcal{O}(\max(N, M))$, as the length of the new linked list is at most $\max(N, M) + 1$ (in case of a final carry-over).
