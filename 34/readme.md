# LeetCode Problem 34: Find First and Last Position of Element in Sorted Array

## 🚀 Problem Description

Given a sorted array of integers `nums` and an integer `target`, return an array of two integers representing the **starting and ending position** of the target value.

If the target is not found in the array, return `[-1, -1]`.

The solution **must** have an $O(\log n)$ runtime complexity.

## 💡 Solution Approach: Two-Pass Binary Search

The requirement for an $O(\log n)$ runtime complexity mandates the use of **Binary Search**. To find both the first and last positions efficiently, the solution performs **two modified binary searches**: one focused on finding the leftmost boundary, and one focused on finding the rightmost boundary.

This strategy ensures a highly efficient solution.

---

## 🔍 Implementation Details

### 1. Finding the First (Leftmost) Occurrence

This first pass aims to find the **smallest index** `i` such that `nums[i] == target`.

* **Initialization:** Set `left` to 0 and `right` to `nums.length - 1`.
* **Midpoint Bias:** Use a **left-biased** midpoint calculation: `mid = left + floor((right - left) / 2)`.
* **Search Logic:**
    * If `nums[mid]` is **greater than or equal to** the target, the first occurrence *could* be at `mid` or to its left. We narrow the search to the left by setting `right = mid`.
    * If `nums[mid]` is less than the target, the target must be to the right. We set `left = mid + 1`.
* **Result:** The loop terminates when `left` equals `right`. This final index is the potential starting position. A final check confirms if `nums[left]` is actually the target. If not, the target is absent.

### 2. Finding the Last (Rightmost) Occurrence

This second pass aims to find the **largest index** `i` such that `nums[i] == target`.

* **Re-Initialization:** Reset `left` to 0 and `right` to `nums.length - 1`.
* **Midpoint Bias (CRITICAL):** Use a **right-biased** midpoint calculation: `mid = left + floor((right - left) / 2) + 1$. This modification is crucial to prevent an infinite loop when the search space reduces to two elements and we update `left = mid`.
* **Search Logic:**
    * If `nums[mid]` is **greater than** the target, the last occurrence must be to the left. We set `right = mid - 1`.
    * If `nums[mid]` is **less than or equal to** the target, it means the last occurrence *could* be at `mid` or to its right. We narrow the search to the right by setting `left = mid`.
* **Result:** The loop terminates when `left` equals `right`. This final index is the ending position. This pass is typically executed only if the first pass successfully found the target.

---

## ⏱️ Complexity Analysis

### Time Complexity: $O(\log n)$

* The algorithm consists of **two independent binary search operations**.
* A single binary search on an array of size $n$ has a time complexity of $O(\log n)$ because it halves the search space in every step.
* Since the total time is the sum of the two searches: $O(\log n) + O(\log n) = O(\log n)$.
* This satisfies the problem's strict runtime requirement.

### Space Complexity: $O(1)$

* The algorithm only uses a fixed number of variables (`left`, `right`, `mid`, `responseArr`) regardless of the input array size $n$.
* Therefore, the auxiliary space used is constant, or $O(1)$.