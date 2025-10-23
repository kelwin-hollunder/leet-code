🧮 Add Two Numbers (Linked List Problem)
📖 Description

This challenge is based on one of the most popular algorithm problems from LeetCode (#2 – Add Two Numbers).
The task is to add two non-negative integers represented as linked lists, where each node contains a single digit.

The digits are stored in reverse order, meaning the 1’s digit is at the head of the list.
The goal is to return the sum as a new linked list, also in reverse order.

Example

Input:

l1 = [2, 4, 3]
l2 = [5, 6, 4]


Explanation:

The numbers are 342 and 465.

342 + 465 = 807.

Output:

[7, 0, 8]

⚙️ How It Works

The function addTwoNumbers iterates through both linked lists, adding corresponding digits together along with any carry (overflow) from the previous addition.

Steps:

Initialize pointers for both lists (l1, l2) and a dummy node (node) to build the result.

Loop while there are remaining nodes in either list or a carry (exceed):

Add the current digits of both lists.

Include any previous carry in the sum.

Compute the new carry: exceed = Math.floor(total / 10).

Store the remainder (total % 10) as a new node in the resulting list.

Return the next node after the dummy, which represents the start of the result list.

💡 Example Walkthrough

For l1 = [2, 4, 3] and l2 = [5, 6, 4]:

Step	l1.val	l2.val	total	new digit	carry
1	2	5	7	7	0
2	4	6	10	0	1
3	3	4	8	8	0

Result: [7, 0, 8]

🧪 Complexity Analysis
Type	Complexity
Time	O(max(n, m)) — where n and m are the lengths of l1 and l2
Space	O(max(n, m)) — for the output linked list