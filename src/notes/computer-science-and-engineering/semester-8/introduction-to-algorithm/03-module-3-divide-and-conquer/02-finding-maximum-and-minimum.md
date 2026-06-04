---
title: "Finding Maximum and Minimum"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 3: Divide and Conquer "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbce"
status: "completed"
scrapedAt: "2026-05-20T17:25:13.452Z"
---
# Introduction to Algorithms: Module 3 - Divide and Conquer

## Topic: Finding Maximum and Minimum

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the basic idea of the Divide and Conquer paradigm.
*   Apply the Divide and Conquer strategy to the problem of finding the maximum and minimum elements in a list.
*   Analyze the time complexity of the Divide and Conquer algorithm for finding maximum and minimum.
*   Compare the efficiency of the Divide and Conquer approach with a simple linear scan approach.

---

### 1. The Divide and Conquer Paradigm

The Divide and Conquer (D&C) paradigm is a powerful algorithmic technique that solves a problem by breaking it down into smaller, more manageable subproblems of the same type. The general steps involved are:

*   **Divide:** Break the problem into two or more smaller subproblems of roughly equal size.
*   **Conquer:** Solve the subproblems recursively. If the subproblems are small enough, solve them directly (base case).
*   **Combine:** Combine the solutions to the subproblems to obtain the solution to the original problem.

---

### 2. Finding Maximum and Minimum: The Problem

The problem is to find both the largest (maximum) and smallest (minimum) elements in a given list or array of numbers.

**Input:** A list of numbers, $A = [a_1, a_2, ..., a_n]$.
**Output:** The maximum element and the minimum element in $A$.

---

### 3. Divide and Conquer Approach for Max/Min

Let's apply the Divide and Conquer strategy to find the maximum and minimum elements.

#### 3.1. Divide

*   If the list $A$ has only one element, that element is both the maximum and minimum.
*   If the list $A$ has two elements, compare them to find the maximum and minimum.
*   If the list $A$ has more than two elements, divide the list into two halves:
    *   Left half: $A[1..n/2]$
    *   Right half: $A[n/2+1 .. n]$ (assuming integer division for $n/2$)

#### 3.2. Conquer

*   Recursively find the maximum and minimum in the left half. Let these be `max_left` and `min_left`.
*   Recursively find the maximum and minimum in the right half. Let these be `max_right` and `min_right`.

#### 3.3. Combine

*   The overall maximum is the maximum of `max_left` and `max_right`.
*   The overall minimum is the minimum of `min_left` and `min_right`.

---

### 4. Algorithm Pseudocode

```
FIND-MAX-MIN(A, low, high):
  // Base case: If the array has only one element
  if low == high:
    return (A[low], A[low]) // (min, max)

  // Base case: If the array has two elements
  if high == low + 1:
    if A[low] < A[high]:
      return (A[low], A[high]) // (min, max)
    else:
      return (A[high], A[low]) // (min, max)

  // Divide: Find the middle point
  mid = floor((low + high) / 2)

  // Conquer: Recursively find max/min in left and right halves
  (min_left, max_left) = FIND-MAX-MIN(A, low, mid)
  (min_right, max_right) = FIND-MAX-MIN(A, mid + 1, high)

  // Combine: Find the overall min and max
  overall_min = min(min_left, min_right)
  overall_max = max(max_left, max_right)

  return (overall_min, overall_max)
```

**Initial Call:** `FIND-MAX-MIN(A, 1, n)` where `n` is the size of the array `A`.

---

### 5. Example Walkthrough

Let's find the maximum and minimum of the array $A = [3, 5, 1, 9, 4, 7, 2, 8]$.

**Call 1:** `FIND-MAX-MIN(A, 1, 8)`
*   `mid = 4`
*   **Left Half:** `FIND-MAX-MIN(A, 1, 4)` -> `[3, 5, 1, 9]`
*   **Right Half:** `FIND-MAX-MIN(A, 5, 8)` -> `[4, 7, 2, 8]`

**Call 2 (Left Half):** `FIND-MAX-MIN(A, 1, 4)`
*   `mid = 2`
*   **Left Sub-half:** `FIND-MAX-MIN(A, 1, 2)` -> `[3, 5]`
    *   Base case (2 elements): `3 < 5`, returns `(3, 5)` (min_left_left, max_left_left)
*   **Right Sub-half:** `FIND-MAX-MIN(A, 3, 4)` -> `[1, 9]`
    *   Base case (2 elements): `1 < 9`, returns `(1, 9)` (min_left_right, max_left_right)
*   **Combine (Left Half):**
    *   `overall_min = min(3, 1) = 1`
    *   `overall_max = max(5, 9) = 9`
    *   Returns `(1, 9)` (min_left, max_left)

**Call 3 (Right Half):** `FIND-MAX-MIN(A, 5, 8)`
*   `mid = 6`
*   **Left Sub-half:** `FIND-MAX-MIN(A, 5, 6)` -> `[4, 7]`
    *   Base case (2 elements): `4 < 7`, returns `(4, 7)` (min_right_left, max_right_left)
*   **Right Sub-half:** `FIND-MAX-MIN(A, 7, 8)` -> `[2, 8]`
    *   Base case (2 elements): `2 < 8`, returns `(2, 8)` (min_right_right, max_right_right)
*   **Combine (Right Half):**
    *   `overall_min = min(4, 2) = 2`
    *   `overall_max = max(7, 8) = 8`
    *   Returns `(2, 8)` (min_right, max_right)

**Combine (Original Call):**
*   `min_left = 1`, `max_left = 9` (from Call 2)
*   `min_right = 2`, `max_right = 8` (from Call 3)
*   `overall_min = min(1, 2) = 1`
*   `overall_max = max(9, 8) = 9`

**Result:** The minimum element is 1 and the maximum element is 9.

---

### 6. Time Complexity Analysis

Let $T(n)$ be the time complexity for finding the maximum and minimum in a list of size $n$.

*   **Divide:** Splitting the list takes constant time, $O(1)$.
*   **Conquer:** We recursively solve two subproblems of size $n/2$. This takes $2T(n/2)$ time.
*   **Combine:** Finding the minimum of two minimums and the maximum of two maximums takes constant time, $O(1)$.

The recurrence relation is:
$T(n) = 2T(n/2) + O(1)$

With base cases:
*   $T(1) = O(1)$
*   $T(2) = O(1)$

Using the Master Theorem or by expansion, we can solve this recurrence relation.

**Master Theorem Case 2:**
Here $a=2$, $b=2$, and $f(n) = O(1) = O(n^0)$.
We compare $f(n)$ with $n^{\log_b a} = n^{\log_2 2} = n^1$.
Since $f(n) = O(n^0)$ and $n^0 = O(n^1)$, this falls into Case 2 where $f(n) = O(n^{\log_b a - \epsilon})$ for $\epsilon=1$.

Therefore, the time complexity is $T(n) = \Theta(n^{\log_b a}) = \Theta(n^1) = \Theta(n)$.

**More Detailed Analysis (Comparison Count):**

Let $C(n)$ be the number of comparisons.
*   **Base Case (n=1):** $C(1) = 0$ comparisons.
*   **Base Case (n=2):** $C(2) = 1$ comparison.

For $n > 2$:
$C(n) = C(n/2) + C(n/2) + \text{comparisons in combine}$
In the combine step, we need one comparison to find the minimum of two minimums and one comparison to find the maximum of two maximums. So, 2 comparisons.

$C(n) = 2C(n/2) + 2$

Let's expand this for $n = 2^k$:
$C(2^k) = 2C(2^{k-1}) + 2$
Divide by $2^k$:
$C(2^k)/2^k = C(2^{k-1})/2^{k-1} + 2/2^k$
$C(2^k)/2^k = C(2^{k-1})/2^{k-1} + 1/2^{k-1}$

Let $S(k) = C(2^k)/2^k$.
$S(k) = S(k-1) + 1/2^{k-1}$

Expanding this:
$S(k) = S(k-1) + 1/2^{k-1}$
$S(k) = S(k-2) + 1/2^{k-2} + 1/2^{k-1}$
...
$S(k) = S(0) + 1/2^0 + 1/2^1 + ... + 1/2^{k-1}$

$S(0) = C(2^0)/2^0 = C(1)/1 = 0$.
$S(k) = 0 + (1 + 1/2 + 1/4 + ... + 1/2^{k-1})$
This is a geometric series with first term $a=1$, ratio $r=1/2$, and $k$ terms.
The sum is $a(1-r^k)/(1-r) = 1 * (1 - (1/2)^k) / (1 - 1/2) = (1 - 1/2^k) / (1/2) = 2(1 - 1/2^k) = 2 - 2/2^k = 2 - 1/2^{k-1}$.

So, $S(k) = 2 - 1/2^{k-1}$.
Now, $C(2^k) = 2^k * S(k) = 2^k * (2 - 1/2^{k-1}) = 2 \cdot 2^k - 2^k / 2^{k-1} = 2^{k+1} - 2$.

Since $n=2^k$, $k = \log_2 n$.
$C(n) = 2 \cdot 2^{\log_2 n} - 2 = 2n - 2$.

This formula holds for powers of 2. A more rigorous analysis considering the exact floor/ceil divisions shows that for any $n$, the number of comparisons is approximately $3n/2 - 2$.

For example, if $n=3$, $A=[3,1,2]$.
`FIND-MAX-MIN(A, 1, 3)`
`mid = 2`
Left: `FIND-MAX-MIN(A, 1, 2)` -> `[3,1]` -> returns `(1,3)` (1 comparison)
Right: `FIND-MAX-MIN(A, 3, 3)` -> `[2]` -> returns `(2,2)` (0 comparisons)
Combine: `min(1,2)=1`, `max(3,2)=3` (2 comparisons)
Total comparisons: $1 + 0 + 2 = 3$.
Formula $3n/2 - 2$: $3(3)/2 - 2 = 4.5 - 2 = 2.5$. This indicates the general trend.

For $n=4$, $A=[3,5,1,9]$.
`FIND-MAX-MIN(A, 1, 4)`
`mid = 2`
Left: `FIND-MAX-MIN(A, 1, 2)` -> `[3,5]` -> returns `(3,5)` (1 comparison)
Right: `FIND-MAX-MIN(A, 3, 4)` -> `[1,9]` -> returns `(1,9)` (1 comparison)
Combine: `min(3,1)=1`, `max(5,9)=9` (2 comparisons)
Total comparisons: $1 + 1 + 2 = 4$.
Formula $3n/2 - 2$: $3(4)/2 - 2 = 6 - 2 = 4$. Matches perfectly.

So, the number of comparisons is approximately $3n/2$.
This means the time complexity is $\Theta(n)$.

---

### 7. Comparison with Simple Linear Scan

A simple linear scan algorithm to find the maximum and minimum would be:

```
LINEAR-MAX-MIN(A, n):
  min_val = A[1]
  max_val = A[1]
  for i from 2 to n:
    if A[i] < min_val:
      min_val = A[i]
    if A[i] > max_val:
      max_val = A[i]
  return (min_val, max_val)
```

**Time Complexity of Linear Scan:**
This algorithm iterates through the array once. In each iteration, it performs at most two comparisons (one for minimum and one for maximum).
Total comparisons = $2(n-1) = 2n - 2$.

**Comparison:**

| Algorithm             | Time Complexity | Number of Comparisons (approx.) |
| :-------------------- | :-------------- | :-------------------------------- |
| Divide and Conquer    | $\Theta(n)$     | $3n/2 - 2$                        |
| Simple Linear Scan    | $\Theta(n)$     | $2n - 2$                          |

**Key Observation:** The Divide and Conquer approach is *more efficient* in terms of the number of comparisons required. It achieves this by processing elements in pairs. When comparing two elements $x$ and $y$:
*   If $x < y$: $x$ can only be the new minimum, $y$ can only be the new maximum.
*   If $x > y$: $y$ can only be the new minimum, $x$ can only be the new maximum.

This pairwise comparison reduces the total number of comparisons needed.

---

### 8. Important Points to Remember

*   **Divide and Conquer Strategy:** Break down, solve recursively, combine results.
*   **Base Cases are Crucial:** Handle lists of size 1 and 2 explicitly.
*   **Recurrence Relation:** $T(n) = 2T(n/2) + O(1)$ for time complexity.
*   **Comparison Count:** The D&C approach for Max/Min performs approximately $3n/2$ comparisons, which is better than the $2n$ comparisons of a simple linear scan.
*   **Overall Complexity:** Both algorithms have a linear time complexity, $\Theta(n)$. The D&C algorithm offers a constant factor improvement in the number of operations.
*   **Suitability:** While both are $\Theta(n)$, the D&C approach can be more instructive for understanding the D&C paradigm and can be more efficient in specific hardware architectures where parallel processing of the two halves is possible.

---

### 9. Practice Questions

1.  **Trace the `FIND-MAX-MIN` algorithm for the array `A = [10, 2, 8, 5, 15, 3, 12]` and show the recursive calls and return values.**
2.  **What is the recurrence relation for the number of comparisons made by the Divide and Conquer algorithm to find the maximum and minimum of an array of size `n`?**
3.  **Calculate the exact number of comparisons performed by the Divide and Conquer algorithm for finding max/min for an array of size `n=5`.**
4.  **Compare the number of comparisons between the Divide and Conquer approach and the simple linear scan for `n=10`.**
5.  **Why is the Divide and Conquer approach generally preferred over the simple linear scan for finding both maximum and minimum, even though both have the same $\Theta(n)$ time complexity?**

---

### 10. Answers to Practice Questions

1.  **Trace for `A = [10, 2, 8, 5, 15, 3, 12]` (n=7):**
    *   `FIND-MAX-MIN(A, 1, 7)` -> `mid = 4`
        *   Left: `FIND-MAX-MIN(A, 1, 4)` -> `[10, 2, 8, 5]` -> `mid = 2`
            *   Left: `FIND-MAX-MIN(A, 1, 2)` -> `[10, 2]` -> returns `(2, 10)`
            *   Right: `FIND-MAX-MIN(A, 3, 4)` -> `[8, 5]` -> returns `(5, 8)`
            *   Combine: `min(2, 5)=2`, `max(10, 8)=10` -> returns `(2, 10)`
        *   Right: `FIND-MAX-MIN(A, 5, 7)` -> `[15, 3, 12]` -> `mid = 6`
            *   Left: `FIND-MAX-MIN(A, 5, 6)` -> `[15, 3]` -> returns `(3, 15)`
            *   Right: `FIND-MAX-MIN(A, 7, 7)` -> `[12]` -> returns `(12, 12)`
            *   Combine: `min(3, 12)=3`, `max(15, 12)=15` -> returns `(3, 15)`
        *   Combine: `min(2, 3)=2`, `max(10, 15)=15` -> returns `(2, 15)`

    **Result:** Minimum is 2, Maximum is 15.

2.  The recurrence relation for the number of comparisons is:
    *   $C(n) = 2C(n/2) + 2$ for $n > 2$
    *   $C(1) = 0$
    *   $C(2) = 1$

3.  For `n=5`:
    *   `FIND-MAX-MIN(A, 1, 5)` -> `mid = 3`
        *   Left: `FIND-MAX-MIN(A, 1, 3)` (n=3)
            *   Left: `FIND-MAX-MIN(A, 1, 2)` (n=2) -> 1 comparison
            *   Right: `FIND-MAX-MIN(A, 3, 3)` (n=1) -> 0 comparisons
            *   Combine: 2 comparisons
            *   Total for n=3: $1 + 0 + 2 = 3$ comparisons. Returns `(min_left, max_left)`
        *   Right: `FIND-MAX-MIN(A, 4, 5)` (n=2) -> 1 comparison. Returns `(min_right, max_right)`
        *   Combine: 2 comparisons.

    *   Total comparisons = (Comparisons for n=3) + (Comparisons for n=2) + (Combine comparisons)
    *   Total comparisons = $3 + 1 + 2 = 6$.

    Using the formula $3n/2 - 2$: $3(5)/2 - 2 = 7.5 - 2 = 5.5$. The exact value is 6.

4.  *   **Divide and Conquer:** For `n=10`, the number of comparisons is approximately $3(10)/2 - 2 = 15 - 2 = 13$.
    *   **Simple Linear Scan:** For `n=10`, the number of comparisons is $2(10) - 2 = 20 - 2 = 18$.

    The Divide and Conquer approach makes significantly fewer comparisons.

5.  The Divide and Conquer approach is generally preferred because it makes fewer comparisons ($ \approx 3n/2$) compared to a simple linear scan ($ \approx 2n$). While both have the same asymptotic time complexity ($\Theta(n)$), the constant factor in the number of operations is smaller for the Divide and Conquer method, making it more efficient in practice. This efficiency comes from processing elements in pairs during the recursive steps.
