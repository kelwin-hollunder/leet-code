# LeetCode Problem 31: Next Permutation Explanation

---

## 💡 Problem Overview

The task is to find the **lexicographically next greater permutation** of numbers within a given array, modifying the array **in-place** and using only constant extra memory. If the current array arrangement is the largest possible permutation (i.e., sorted in descending order), the array must be rearranged into the **lowest possible order** (ascending order).

---

## 🧩 Algorithm Intuition

The approach centers on identifying the smallest necessary change to the array from the right to achieve the next larger permutation.

### 1. Identify the Pivot

We start by scanning the array backward from right to left to find the **first element** that is **smaller than its immediate successor**. We call this element the **pivot**.

* Let the index of this pivot element be $P$.
* The subarray starting from $P+1$ to the end is already sorted in descending order, representing the largest possible permutation for that suffix.
* If no such pivot is found (meaning the entire array is sorted in descending order), the array represents the largest possible permutation. In this case, we simply reverse the entire array to achieve the smallest possible permutation.

### 2. Find the Swap Element

If a pivot (at index $P$) is found, we need to swap it with an element from the suffix (starting at $P+1$) to create a larger number. To ensure this new number is the *next smallest greater* one, we must choose the smallest element in the suffix that is still **greater than the pivot**.

* We scan backward from the end of the array towards $P+1$.
* The first element encountered that is larger than the pivot is our **swap element**. Let its index be $K$.

### 3. Swap

We swap the element at the pivot index ($P$) with the element at the swap index ($K$). This single swap guarantees that the resulting prefix is the smallest possible prefix that is greater than the original.

### 4. Reverse the Suffix

After the swap, the subarray starting from $P+1$ remains in a relatively large order. To complete the process and achieve the *lexicographically next greater permutation*, we must arrange this suffix in the **smallest possible order** (ascending order).

* This is achieved by simply **reversing** the subarray starting from index $P+1$ up to the end of the array.

## ⏱ Complexity

* **Time Complexity:** $\mathcal{O}(n)$. The algorithm requires at most three passes over the array: one pass to find the pivot, one pass to find the swap element, and one pass (or half a pass for the swap implementation) to reverse the suffix. Since all operations are linear, the complexity is $\mathcal{O}(n)$.
* **Space Complexity:** $\mathcal{O}(1)$. The modifications are performed in-place, and only a constant amount of extra memory is used for temporary variables and pointers.

---

## 📝 Example Trace

Let's trace the algorithm with the input array: $\text{nums} = [1, 5, 8, 4, 7, 6, 5, 3, 1]$

**Initial Array:**
| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| :---: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Value | 1 | 5 | 8 | 4 | 7 | 6 | 5 | 3 | 1 |

### Step 1: Find the Pivot ($P$)

Scan backward to find the first $nums[i] < nums[i+1]$:
* $i=7$: $3 \not< 1$
* $i=6$: $5 \not< 3$
* $i=5$: $6 \not< 5$
* $i=4$: $7 \not< 6$
* $i=3$: **$4 < 7$**. This is the pivot.

* **Pivot Index ($P$):** 3
* **Pivot Value:** $nums[3] = 4$
* **Suffix to be modified:** $[7, 6, 5, 3, 1]$ (indices 4 through 8)

### Step 2: Find the Swap Element ($K$)

Scan the suffix $[7, 6, 5, 3, 1]$ backward to find the smallest element greater than the pivot (4):
* $nums[8] = 1$. Not greater than 4.
* $nums[7] = 3$. Not greater than 4.
* $nums[6] = 5$. **Greater than 4**. This is the swap element.

* **Swap Index ($K$):** 6
* **Swap Value:** $nums[6] = 5$

### Step 3: Swap $nums[P]$ and $nums[K]$

Swap $nums[3]$ (value 4) and $nums[6]$ (value 5).

**Array after Swap:**
| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| :---: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Value | 1 | 5 | 8 | **5** | 7 | 6 | **4** | 3 | 1 |

### Step 4: Reverse the Suffix

Reverse the subarray starting from index $P+1 = 4$: $[7, 6, 4, 3, 1]$.

* Swap $nums[4]$ and $nums[8]$ (7 and 1)
* Swap $nums[5]$ and $nums[7]$ (6 and 3)
* $nums[6]$ remains 4.

**Final Result (Next Permutation):**
| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| :---: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Value | 1 | 5 | 8 | 5 | **1** | **3** | 4 | **6** | **7** |

The next permutation of $[1, 5, 8, 4, 7, 6, 5, 3, 1]$ is $\mathbf{[1, 5, 8, 5, 1, 3, 4, 6, 7]}$.