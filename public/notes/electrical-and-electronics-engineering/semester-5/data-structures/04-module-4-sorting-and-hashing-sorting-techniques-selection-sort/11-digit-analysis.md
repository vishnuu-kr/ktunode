---
title: "Digit Analysis"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing: Sorting Techniques – Selection Sort"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363fd"
status: "completed"
scrapedAt: "2026-05-23T16:20:57.264Z"
---
## DATA STRUCTURES: Module 4: Sorting and Hashing - Sorting Techniques: Selection Sort & Digit Analysis

This module delves into fundamental sorting algorithms and hashing techniques, crucial for efficient data management. We will begin by understanding Selection Sort and then explore the concept of Digit Analysis, which is often used in conjunction with certain sorting algorithms like Radix Sort.

**Module 4 Learning Outcomes:**

*   Understand the concept of Selection Sort and its working principle.
*   Analyze the time and space complexity of Selection Sort.
*   Discuss the advantages and disadvantages of Selection Sort.
*   Introduce the concept of Digit Analysis as a technique used in certain sorting algorithms.
*   Relate Digit Analysis to the context of sorting numerical data.

**Course Outcomes Alignment:**

*   **CO1 (K2):** While Selection Sort is a basic algorithm, understanding its complexity helps in comparing it with others using asymptotic notations.
*   **CO2 (K3):** Selection Sort is a direct application of array manipulation, demonstrating how to solve a real-world problem of ordering data.
*   **CO4 (K3):** This entire topic directly addresses the application and comparison of sorting techniques.

---

### 1. Selection Sort

**1.1 Introduction**

Selection Sort is a simple, in-place comparison-based sorting algorithm. It divides the input list into two parts: a sorted sublist which is built up from left to right at the front of the list, and a sublist of the remaining unsorted items that occupy the rest of the list.

**Key Concept:** At each step, Selection Sort finds the minimum element (or maximum) from the unsorted part and swaps it with the element at the beginning of the unsorted part.

**Analogy:** Imagine you have a deck of cards, and you want to sort them in ascending order. You would pick up the smallest card and place it at the beginning. Then, from the remaining cards, you would pick up the next smallest and place it after the first one, and so on.

**1.2 How Selection Sort Works**

The algorithm proceeds as follows:

1.  **Find the Minimum:** Iterate through the unsorted portion of the array to find the index of the minimum element.
2.  **Swap:** Swap the found minimum element with the first element of the unsorted portion.
3.  **Repeat:** Repeat steps 1 and 2 for the remaining unsorted portion of the array. The boundary between the sorted and unsorted portions moves one element to the right at each step.

**Example:** Sorting the array `[64, 25, 12, 22, 11]`

*   **Pass 1:**
    *   Unsorted portion: `[64, 25, 12, 22, 11]`
    *   Minimum element is `11` at index `4`.
    *   Swap `64` (at index `0`) with `11` (at index `4`).
    *   Array becomes: `[11, 25, 12, 22, 64]`
    *   Sorted portion: `[11]`
    *   Unsorted portion: `[25, 12, 22, 64]`

*   **Pass 2:**
    *   Unsorted portion: `[25, 12, 22, 64]`
    *   Minimum element is `12` at index `2`.
    *   Swap `25` (at index `1`) with `12` (at index `2`).
    *   Array becomes: `[11, 12, 25, 22, 64]`
    *   Sorted portion: `[11, 12]`
    *   Unsorted portion: `[25, 22, 64]`

*   **Pass 3:**
    *   Unsorted portion: `[25, 22, 64]`
    *   Minimum element is `22` at index `3`.
    *   Swap `25` (at index `2`) with `22` (at index `3`).
    *   Array becomes: `[11, 12, 22, 25, 64]`
    *   Sorted portion: `[11, 12, 22]`
    *   Unsorted portion: `[25, 64]`

*   **Pass 4:**
    *   Unsorted portion: `[25, 64]`
    *   Minimum element is `25` at index `3`.
    *   Swap `25` (at index `3`) with `25` (at index `3`). No actual swap occurs.
    *   Array becomes: `[11, 12, 22, 25, 64]`
    *   Sorted portion: `[11, 12, 22, 25]`
    *   Unsorted portion: `[64]`

The array is now sorted.

**1.3 Pseudocode**

```
selectionSort(arr, n):
  for i from 0 to n-2:
    minIndex = i
    for j from i+1 to n-1:
      if arr[j] < arr[minIndex]:
        minIndex = j
    // Swap arr[i] and arr[minIndex]
    swap(arr[i], arr[minIndex])
```

**1.4 Time Complexity**

*   **Best Case:** O(n^2)
*   **Average Case:** O(n^2)
*   **Worst Case:** O(n^2)

**Explanation:**
Selection Sort performs a fixed number of comparisons in each pass regardless of the input array's initial order. There are `n-1` passes, and in each pass `i`, we perform `n-1-i` comparisons. The total number of comparisons is approximately `(n-1) + (n-2) + ... + 1 = n(n-1)/2`, which is O(n^2). The number of swaps is at most `n-1`, which is O(n). Therefore, the dominant factor in the time complexity is the comparisons, making it O(n^2).

**1.5 Space Complexity**

*   **In-place:** O(1)

**Explanation:**
Selection Sort sorts the array in-place, meaning it does not require any additional auxiliary data structures proportional to the input size. It only uses a constant amount of extra space for variables like `minIndex`, `i`, and `j`.

**1.6 Advantages of Selection Sort**

*   **Simple to understand and implement:** Its logic is straightforward.
*   **Efficient in terms of swaps:** It performs at most `n-1` swaps, which can be beneficial if swap operations are expensive.
*   **Good for small datasets:** For very small arrays, its O(n^2) complexity might not be a significant drawback.
*   **Not affected by the initial order of elements:** The number of comparisons is always the same.

**1.7 Disadvantages of Selection Sort**

*   **Inefficient for large datasets:** The O(n^2) time complexity makes it very slow for large inputs compared to algorithms like Merge Sort or Quick Sort.
*   **Does not adapt to partially sorted data:** It performs the same number of comparisons even if the array is already sorted.

**1.8 Reference Content (Textbooks & Reference Books)**

*   **Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed:** This book likely explains Selection Sort with a focus on its procedural implementation in C, emphasizing the loop structures and swap operations. You can expect detailed examples and analysis of its time complexity.
*   **Classic Data Structures by Samanta D:** Samanta's book is known for its clear explanations. It will likely present Selection Sort with visual aids and step-by-step examples, possibly using pseudocode and then translating it into a C implementation. The analysis of its performance will be a key takeaway.
*   **Data Structures: A Pseudocode Approach with C by Gilberg and Forouzan:** This book is an excellent resource for understanding algorithms through pseudocode. You'll find a concise pseudocode representation of Selection Sort and a clear explanation of its working mechanism and complexity.

---

### 2. Digit Analysis (as a precursor to Radix Sort)

**2.1 Introduction**

Digit Analysis, in the context of sorting, refers to the process of examining the digits of numbers to facilitate sorting. While Selection Sort itself doesn't directly use digit analysis, this concept is fundamental to understanding certain other sorting algorithms, most notably **Radix Sort**. This section introduces the idea so you are prepared when you encounter algorithms that leverage it.

**Key Concept:** Instead of comparing entire numbers, digit analysis breaks down numbers into their constituent digits and sorts based on these individual digits, typically starting from the least significant digit.

**2.2 How Digit Analysis is Used in Sorting**

Algorithms like Radix Sort use digit analysis to sort numbers efficiently. The general idea is:

1.  **Determine the Maximum Number of Digits:** Find the largest number in the dataset to know the maximum number of digits that need to be considered.
2.  **Iterative Sorting by Digit:** Sort the array based on each digit, starting from the least significant digit (LSD) and moving towards the most significant digit (MSD).
3.  **Stable Sorting:** A crucial requirement for this process is that the sorting algorithm used in each pass (e.g., Counting Sort or Bucket Sort) must be **stable**. A stable sort preserves the relative order of elements with equal keys. This ensures that when we sort by the next digit, numbers that were already ordered correctly by previous digits maintain their order.

**Example:** Sorting `[170, 45, 75, 90, 802, 24, 2, 66]` using LSD Radix Sort (which heavily relies on digit analysis).

*   **Identify Max Digits:** The largest number is `802`, which has 3 digits. So, we need to sort by units, tens, and hundreds digits.

*   **Pass 1: Sort by Units Digit:**
    *   Numbers: `[170, 45, 75, 90, 802, 24, 2, 66]`
    *   Units digits: `[0, 5, 5, 0, 2, 4, 2, 6]`
    *   Using a stable sort (like Counting Sort) on the units digit:
        *   `0`s come first: `170`, `90`
        *   `2`s come next: `802`, `2`
        *   `4` comes next: `24`
        *   `5`s come next: `45`, `75`
        *   `6` comes last: `66`
    *   Array after Pass 1: `[170, 90, 802, 2, 24, 45, 75, 66]`

*   **Pass 2: Sort by Tens Digit:**
    *   Numbers: `[170, 90, 802, 2, 24, 45, 75, 66]`
    *   Tens digits (handle single-digit numbers as having a 0 in the tens place): `[7, 9, 0, 0, 2, 4, 7, 6]`
    *   Using a stable sort on the tens digit:
        *   `0`s: `802`, `2`
        *   `2`s: `24`
        *   `4`s: `45`
        *   `6`s: `66`
        *   `7`s: `170`, `75` (maintaining their relative order from Pass 1: `170` before `75`)
        *   `9`s: `90`
    *   Array after Pass 2: `[802, 2, 24, 45, 66, 170, 75, 90]`

*   **Pass 3: Sort by Hundreds Digit:**
    *   Numbers: `[802, 2, 24, 45, 66, 170, 75, 90]`
    *   Hundreds digits (handle numbers with fewer digits as having 0s): `[8, 0, 0, 0, 0, 1, 0, 0]`
    *   Using a stable sort on the hundreds digit:
        *   `0`s: `2`, `24`, `45`, `66`, `75`, `90` (maintaining their relative order from Pass 2)
        *   `1`s: `170`
        *   `8`s: `802`
    *   Array after Pass 3: `[2, 24, 45, 66, 75, 90, 170, 802]`

The array is now sorted.

**2.3 Digit Analysis Functions:**

To implement Radix Sort, you typically need helper functions:

*   `getDigit(number, digitPosition)`: Returns the digit at a specific position (e.g., units, tens).
*   `getMaxDigits(array)`: Returns the number of digits in the largest number.

**2.4 Relevance to Course Outcomes**

*   **CO1 (K2):** Understanding the complexity of Radix Sort (which relies on digit analysis) involves concepts like the number of digits and the efficiency of the underlying stable sort.
*   **CO4 (K3):** Digit analysis is a key technique that differentiates Radix Sort from comparison-based sorts like Selection Sort. It highlights alternative approaches to sorting.

**2.5 Reference Content (Textbooks & Reference Books)**

*   **Classic Data Structures by Samanta D:** Samanta often provides detailed explanations of non-comparison sorts, including Radix Sort. You'll likely find a section on how numbers are broken down into digits and how this is used to group and sort elements.
*   **Data Structures and Algorithms by Aho, Hopcroft, and Ullman:** This classic text will offer a rigorous theoretical treatment of sorting algorithms. It will likely discuss Radix Sort and the underlying principles of digit manipulation and stability.
*   **Introduction to Data Structures with Applications by Tremblay and Sorenson:** This book is known for its broad coverage. You can expect a clear introduction to digit-based sorting methods, explaining the importance of digit place value and the process of sorting by digits.

---

### 3. Important Points to Remember

*   **Selection Sort:**
    *   Always O(n^2) time complexity, regardless of input order.
    *   Excellent for minimizing swaps (O(n) swaps).
    *   In-place sorting (O(1) space complexity).
    *   Not stable.
*   **Digit Analysis:**
    *   A technique for sorting numbers by examining their digits.
    *   Essential for algorithms like Radix Sort.
    *   Requires a stable sorting algorithm for intermediate passes.
    *   Complexity of Radix Sort depends on the number of digits and the range of digits.

---

### 4. Practice Questions and Exercises

**Section 1: Selection Sort**

1.  **Trace Selection Sort:** Trace the execution of Selection Sort on the following array: `[30, 10, 40, 20, 50]`
    *   Show the state of the array after each pass.
    *   List the number of comparisons and swaps performed.

2.  **Complexity Analysis:**
    *   Explain why the best-case, average-case, and worst-case time complexities of Selection Sort are all O(n^2).
    *   If swapping two elements takes 10 units of time and comparing two elements takes 1 unit of time, which sorting algorithm would be preferred for an array of 1000 elements if minimizing swaps is critical? (Consider Selection Sort vs. Bubble Sort).

3.  **Stability:** Is Selection Sort a stable sorting algorithm? Justify your answer.

4.  **Implementation:** Write pseudocode for Selection Sort that finds the maximum element and swaps it with the last element of the unsorted portion (descending order sort).

**Section 2: Digit Analysis (Conceptual)**

5.  **Digit Extraction:** Given the number `789`, what is the digit at the units place? What is the digit at the tens place? What is the digit at the hundreds place? How would you represent the tens digit for the number `5` if sorting by tens digit?

6.  **Radix Sort Requirement:** Why is a **stable** sorting algorithm crucial when using digit analysis for sorting numbers with multiple digits? Provide an example scenario where an unstable sort would fail.

7.  **Application:** Imagine you have a list of phone numbers (all 10 digits long). If you were to use digit analysis to sort them, on which digit would you start the sorting process? Why?

---

### Answers to Practice Questions

**Section 1: Selection Sort**

1.  **Trace:**
    *   Initial Array: `[30, 10, 40, 20, 50]`
    *   **Pass 1:**
        *   Unsorted: `[30, 10, 40, 20, 50]`
        *   Min is `10` at index 1. Swap `30` and `10`.
        *   Array: `[10, 30, 40, 20, 50]`
        *   Comparisons: 4, Swaps: 1
    *   **Pass 2:**
        *   Unsorted: `[30, 40, 20, 50]`
        *   Min is `20` at index 3. Swap `30` and `20`.
        *   Array: `[10, 20, 40, 30, 50]`
        *   Comparisons: 3, Swaps: 1
    *   **Pass 3:**
        *   Unsorted: `[40, 30, 50]`
        *   Min is `30` at index 3. Swap `40` and `30`.
        *   Array: `[10, 20, 30, 40, 50]`
        *   Comparisons: 2, Swaps: 1
    *   **Pass 4:**
        *   Unsorted: `[40, 50]`
        *   Min is `40` at index 3. Swap `40` and `40` (no change).
        *   Array: `[10, 20, 30, 40, 50]`
        *   Comparisons: 1, Swaps: 0
    *   Total Comparisons: 4 + 3 + 2 + 1 = 10
    *   Total Swaps: 1 + 1 + 1 + 0 = 3

2.  **Complexity Analysis:**
    *   **O(n^2):** Selection Sort makes `n-1` passes. In pass `i` (starting from 0), it performs `n-1-i` comparisons to find the minimum in the remaining unsorted part. The total number of comparisons is `(n-1) + (n-2) + ... + 1 = n(n-1)/2`, which is O(n^2). The number of swaps is always at most `n-1`, which is O(n). Since comparisons dominate, the time complexity is O(n^2) in all cases.
    *   **Swap Preference:** For an array of 1000 elements, Selection Sort performs at most 999 swaps, while Bubble Sort (in its standard implementation) can perform up to O(n^2) swaps. If swaps are expensive, Selection Sort would be preferred as its swap count is significantly lower.

3.  **Stability:** Selection Sort is **not a stable** sorting algorithm. This is because when the minimum element is found, it is swapped with the element at the beginning of the unsorted portion. If there are duplicate elements, this swap can change their relative order. For example, if you have `[5a, 3, 5b, 1]` (where `5a` and `5b` are equal values but represent distinct entities), the `1` is swapped with `5a` resulting in `[1, 3, 5b, 5a]`. The original order of `5a` before `5b` is lost.

4.  **Implementation (Descending Order):**

    ```
    selectionSortDescending(arr, n):
      for i from 0 to n-2:
        maxIndex = i
        for j from i+1 to n-1:
          if arr[j] > arr[maxIndex]: // Compare for maximum
            maxIndex = j
        // Swap arr[i] and arr[maxIndex]
        swap(arr[i], arr[maxIndex])
    ```

**Section 2: Digit Analysis (Conceptual)**

5.  **Digit Extraction:**
    *   Number: `789`
    *   Units digit: `9`
    *   Tens digit: `8`
    *   Hundreds digit: `7`
    *   For the number `5`, the tens digit would be considered `0` (e.g., `05`).

6.  **Radix Sort Requirement:** A stable sorting algorithm is crucial because Radix Sort sorts numbers digit by digit. If the sorting algorithm used in an intermediate pass is unstable, the relative order of numbers that have the same digit at the current position will be scrambled. This would mean that the sorting already achieved in previous passes (based on less significant digits) could be undone. For instance, if you have `[21, 12]` and sort by the tens digit, both have a `2` and `1` respectively. If an unstable sort puts `12` before `21` (because they are both "2" in the tens place, but `12` happened to appear first in the array), and later you sort by units digit, the original order of `21` might be disrupted. With a stable sort, `[21, 12]` would remain `[21, 12]` if sorted by tens digit (as `2` and `1` are distinct), or if there were multiple numbers with the same digit, their relative order would be preserved.

7.  **Application:** If sorting phone numbers (10 digits), you would typically start sorting by the **least significant digit (LSD)**, which is the units digit of the last digit of the phone number. Then you would proceed to the tens digit, hundreds digit, and so on, up to the most significant digit (the first digit of the phone number). This LSD Radix Sort approach ensures that the numbers are progressively ordered correctly from right to left.
