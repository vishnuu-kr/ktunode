---
title: "Sorting and Hashing"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea1d"
status: "completed"
scrapedAt: "2026-05-23T17:55:16.057Z"
---
# Data Structures: Module 4 - Sorting and Hashing

This module delves into two fundamental techniques for organizing and accessing data: **Sorting** and **Hashing**. Understanding these concepts is crucial for efficient algorithm design and data management.

## Module Objectives:

*   To understand various sorting algorithms and their performance characteristics.
*   To learn about hashing techniques for efficient data retrieval.

## Course Outcomes Addressed:

*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2)** - We will analyze the time and space complexity of sorting algorithms using Big-O, Big-Omega, and Big-Theta notations.
*   **CO4: Apply and compare various techniques for searching and sorting. (Knowledge Level: K3)** - This module will focus heavily on applying and comparing different sorting algorithms.
*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3)** - We will explore various hashing techniques and their application.

---

## 1. Sorting

Sorting is the process of arranging elements of a list in a specific order, typically in ascending or descending order. It's a fundamental operation used in many applications, from database management to searching.

### 1.1 Importance of Sorting

*   **Efficient Searching:** Sorted lists allow for much faster searching (e.g., binary search) compared to unsorted lists.
*   **Data Analysis:** Facilitates easy identification of minimum/maximum values, median, and other statistical measures.
*   **Duplicate Removal:** Sorting brings identical elements together, simplifying duplicate detection.
*   **Foundation for other Algorithms:** Many advanced algorithms rely on sorted input.

### 1.2 Analysis of Sorting Algorithms

We will use asymptotic notations (from CO1) to analyze the efficiency of sorting algorithms in terms of time complexity (number of operations) and space complexity (memory usage).

*   **Time Complexity:**
    *   **Best Case:** The minimum number of operations.
    *   **Average Case:** The expected number of operations over all possible inputs.
    *   **Worst Case:** The maximum number of operations.
*   **Space Complexity:** The amount of auxiliary memory used by the algorithm.

### 1.3 Major Sorting Algorithms

We will explore several sorting algorithms, categorizing them into **Comparison Sorts** (which rely on comparing elements) and **Non-Comparison Sorts** (which do not rely solely on comparisons).

#### 1.3.1 Comparison Sorts

**A. Bubble Sort**

*   **Description:** Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
*   **How it works:**
    1.  Iterate through the list from the first element to the second-to-last.
    2.  Compare the current element with the next element.
    3.  If the current element is greater than the next element, swap them.
    4.  After the first pass, the largest element will be at the end of the list.
    5.  Repeat the process for the remaining unsorted portion of the list, excluding the last element which is now sorted.
*   **Example:** Sorting `[5, 1, 4, 2, 8]`
    *   Pass 1:
        *   (5, 1) -> swap: `[1, 5, 4, 2, 8]`
        *   (5, 4) -> swap: `[1, 4, 5, 2, 8]`
        *   (5, 2) -> swap: `[1, 4, 2, 5, 8]`
        *   (5, 8) -> no swap: `[1, 4, 2, 5, 8]` (8 is at the end)
    *   Pass 2:
        *   (1, 4) -> no swap: `[1, 4, 2, 5, 8]`
        *   (4, 2) -> swap: `[1, 2, 4, 5, 8]`
        *   (4, 5) -> no swap: `[1, 2, 4, 5, 8]` (5 is now in place)
    *   Pass 3:
        *   (1, 2) -> no swap: `[1, 2, 4, 5, 8]`
        *   (2, 4) -> no swap: `[1, 2, 4, 5, 8]` (4 is now in place)
*   **Time Complexity:**
    *   Best Case: O(n) (if the array is already sorted and we use a flag to detect no swaps)
    *   Average Case: O(n^2)
    *   Worst Case: O(n^2)
*   **Space Complexity:** O(1) (in-place sorting)
*   **Textbook Reference:** *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Section on elementary sorting methods).

**B. Selection Sort**

*   **Description:** Divides the input list into two parts: a sorted sublist built from right to left at the front of the list and a sublist of the remaining unsorted items that it iterates through. Initially, the sorted sublist is empty. In each iteration, the algorithm finds the minimum element from the unsorted sublist and swaps it with the first unsorted element.
*   **How it works:**
    1.  Find the minimum element in the unsorted portion of the list.
    2.  Swap the minimum element with the first element of the unsorted portion.
    3.  Move the boundary between the sorted and unsorted portions one element to the right.
    4.  Repeat until the entire list is sorted.
*   **Example:** Sorting `[64, 25, 12, 22, 11]`
    *   Pass 1: Min element is 11. Swap 11 with 64. `[11, 25, 12, 22, 64]`
    *   Pass 2: Min element in remaining (25, 12, 22, 64) is 12. Swap 12 with 25. `[11, 12, 25, 22, 64]`
    *   Pass 3: Min element in remaining (25, 22, 64) is 22. Swap 22 with 25. `[11, 12, 22, 25, 64]`
    *   Pass 4: Min element in remaining (25, 64) is 25. Swap 25 with 25. `[11, 12, 22, 25, 64]`
*   **Time Complexity:**
    *   Best Case: O(n^2)
    *   Average Case: O(n^2)
    *   Worst Case: O(n^2)
*   **Space Complexity:** O(1) (in-place sorting)
*   **Textbook Reference:** *Classic Data Structures* by Samanta D (Chapter on Sorting).

**C. Insertion Sort**

*   **Description:** Builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:
    *   Simple implementation.
    *   Efficient for small datasets.
    *   Effective for data sets that are already substantially sorted.
    *   Stable: does not change the relative order of elements with equal keys.
*   **How it works:**
    1.  Iterate from the second element to the end of the list.
    2.  Take the current element as a "key".
    3.  Compare the key with its preceding elements.
    4.  If the preceding element is greater than the key, shift the preceding element one position to the right.
    5.  Continue shifting until a preceding element is found that is less than or equal to the key, or until the beginning of the list is reached.
    6.  Insert the key into the correct position.
*   **Example:** Sorting `[12, 11, 13, 5, 6]`
    *   `[12]` (sorted)
    *   `[12, 11]` -> compare 11 with 12. 12 > 11, shift 12. `[11, 12]` (sorted)
    *   `[11, 12, 13]` -> compare 13 with 12. 12 < 13, no shift. `[11, 12, 13]` (sorted)
    *   `[11, 12, 13, 5]` -> compare 5 with 13, 12, 11.
        *   13 > 5, shift 13: `[11, 12, 13, 13]`
        *   12 > 5, shift 12: `[11, 12, 12, 13]`
        *   11 > 5, shift 11: `[11, 11, 12, 13]`
        *   Insert 5: `[5, 11, 12, 13]` (sorted)
    *   `[5, 11, 12, 13, 6]` -> compare 6 with 13, 12, 11, 5.
        *   13 > 6, shift 13: `[5, 11, 12, 13, 13]`
        *   12 > 6, shift 12: `[5, 11, 12, 12, 13]`
        *   11 > 6, shift 11: `[5, 11, 11, 12, 13]`
        *   5 < 6, insert 6: `[5, 6, 11, 12, 13]` (sorted)
*   **Time Complexity:**
    *   Best Case: O(n) (already sorted)
    *   Average Case: O(n^2)
    *   Worst Case: O(n^2)
*   **Space Complexity:** O(1) (in-place sorting)
*   **Textbook Reference:** *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Section on elementary sorting methods).

**D. Merge Sort**

*   **Description:** A divide-and-conquer algorithm. It divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted). It then repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
*   **How it works:**
    1.  **Divide:** If the list has more than one element, split it into two halves.
    2.  **Conquer:** Recursively sort the two halves using Merge Sort.
    3.  **Combine:** Merge the two sorted halves into a single sorted list.
*   **Example:** Sorting `[38, 27, 43, 3, 9, 82, 10]`
    *   Divide: `[38, 27, 43, 3]` and `[9, 82, 10]`
    *   Recursive calls...
    *   Merge `[27, 38, 43]` and `[3]` -> `[3, 27, 38, 43]`
    *   Merge `[9]` and `[10, 82]` -> `[9, 10, 82]`
    *   Merge `[3, 27, 38, 43]` and `[9, 10, 82]` -> `[3, 9, 10, 27, 38, 43, 82]`
*   **Time Complexity:**
    *   Best Case: O(n log n)
    *   Average Case: O(n log n)
    *   Worst Case: O(n log n)
*   **Space Complexity:** O(n) (due to the auxiliary array used for merging)
*   **Textbook Reference:** *Classic Data Structures* by Samanta D (Chapter on Sorting). *Data Structures: A Pseudocode Approach with C* by Gilberg and Forouzan (Section on Merge Sort).

**E. Quick Sort**

*   **Description:** Another divide-and-conquer algorithm. It picks an element as a "pivot" and partitions the given array around the picked pivot. The pivot element is in its correct sorted position. It then recursively sorts the sub-array before and after the pivot.
*   **How it works:**
    1.  **Choose a Pivot:** Select an element from the array (e.g., the last element, the first element, a random element, or the median of three).
    2.  **Partition:** Rearrange the array so that all elements less than the pivot come before it, and all elements greater than the pivot come after it. The pivot is now in its final sorted position.
    3.  **Recurse:** Recursively apply Quick Sort to the sub-array of elements smaller than the pivot and the sub-array of elements greater than the pivot.
*   **Example:** Sorting `[10, 7, 8, 9, 1, 5]` (Pivot = 5)
    *   Partition: `[5, 7, 8, 9, 10]` (elements less than 5 are before it, greater are after it)
    *   Recurse on `[1]` and `[7, 8, 9, 10]`
*   **Time Complexity:**
    *   Best Case: O(n log n)
    *   Average Case: O(n log n)
    *   Worst Case: O(n^2) (occurs when the pivot is always the smallest or largest element, e.g., already sorted or reverse sorted array with the first/last element as pivot).
*   **Space Complexity:** O(log n) on average (for recursion stack), O(n) in the worst case.
*   **Textbook Reference:** *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Section on Quick Sort). *Classic Data Structures* by Samanta D (Chapter on Sorting).

**F. Heap Sort**

*   **Description:** A comparison-based sorting algorithm that uses a binary heap data structure. It is similar to selection sort, as it finds the largest element and places it at the end. The algorithm repeats this process for the remaining elements.
*   **How it works:**
    1.  **Build a Max Heap:** Construct a max heap from the input array. A max heap is a binary tree structure where the value of each node is greater than or equal to the values of its children.
    2.  **Extract Max and Heapify:**
        *   Swap the root element (the largest element) with the last element of the heap.
        *   Reduce the heap size by one.
        *   Heapify the root element to maintain the max heap property.
    3.  Repeat step 2 until the heap size is one.
*   **Example:** Sorting `[4, 10, 3, 5, 1]`
    *   Build Max Heap: `[10, 5, 3, 4, 1]`
    *   Swap 10 with 1: `[1, 5, 3, 4, 10]`. Heap size = 4. Heapify root (1). Max heap: `[5, 4, 3, 1, 10]`
    *   Swap 5 with 1: `[1, 4, 3, 5, 10]`. Heap size = 3. Heapify root (1). Max heap: `[4, 1, 3, 5, 10]`
    *   Swap 4 with 3: `[3, 1, 4, 5, 10]`. Heap size = 2. Heapify root (3). Max heap: `[3, 1, 4, 5, 10]`
    *   Swap 3 with 1: `[1, 3, 4, 5, 10]`. Heap size = 1. Heapify root (1). Max heap: `[1, 3, 4, 5, 10]`
*   **Time Complexity:**
    *   Best Case: O(n log n)
    *   Average Case: O(n log n)
    *   Worst Case: O(n log n)
*   **Space Complexity:** O(1) (in-place sorting)
*   **Textbook Reference:** *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Chapter on Trees, specifically Heap). *Classic Data Structures* by Samanta D (Chapter on Sorting).

#### 1.3.2 Non-Comparison Sorts

These algorithms have a better theoretical time complexity than comparison sorts but have limitations on the types of data they can sort.

**A. Counting Sort**

*   **Description:** Works by counting the number of occurrences of each unique element in the input array and using that information to place the elements directly into their sorted positions. It's efficient when the range of input values is not significantly larger than the number of elements.
*   **How it works:**
    1.  Find the maximum element in the input array to determine the range of values.
    2.  Create a `count` array of size `max_element + 1` and initialize all its elements to 0.
    3.  Iterate through the input array. For each element, increment the corresponding count in the `count` array.
    4.  Modify the `count` array such that each element at index `i` contains the actual position of that element in the output array. This is done by adding the previous count to the current count.
    5.  Create an `output` array of the same size as the input array.
    6.  Iterate through the input array in reverse. For each element, place it at its correct position in the `output` array (using the modified `count` array) and decrement the count for that element.
    7.  Copy the `output` array back to the original input array.
*   **Example:** Sorting `[4, 2, 2, 8, 3, 3, 1]`
    *   Max element = 8. Count array size = 9.
    *   Count array: `[0, 1, 2, 2, 1, 0, 0, 0, 1]` (after step 3)
    *   Modified count array: `[0, 1, 3, 5, 6, 6, 6, 6, 7]` (after step 4)
    *   Output array construction:
        *   Element 1: `output[0] = 1`. count[0] becomes 0.
        *   Element 3: `output[4] = 3`. count[3] becomes 4.
        *   Element 3: `output[3] = 3`. count[3] becomes 3.
        *   Element 8: `output[7] = 8`. count[8] becomes 6.
        *   Element 2: `output[2] = 2`. count[2] becomes 2.
        *   Element 2: `output[1] = 2`. count[2] becomes 1.
        *   Element 4: `output[5] = 4`. count[4] becomes 5.
    *   Output array: `[1, 2, 2, 3, 3, 4, 8]`
*   **Time Complexity:** O(n + k), where n is the number of elements and k is the range of input values.
*   **Space Complexity:** O(k) (for the count array).
*   **Limitations:** Not suitable for large ranges of values or if the data is not integers.
*   **Textbook Reference:** *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Section on non-comparison sorts).

**B. Radix Sort**

*   **Description:** Sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. Radix sort is a non-comparative sorting algorithm. It is stable if the underlying sorting algorithm used for sorting digits is stable.
*   **How it works (LSD - Least Significant Digit first):**
    1.  Find the maximum number to know the number of digits.
    2.  Iterate through each digit position (from rightmost to leftmost).
    3.  For each digit position, sort the array based on that digit using a stable sorting algorithm like Counting Sort.
*   **Example:** Sorting `[170, 45, 75, 90, 802, 24, 2, 66]`
    *   Max number is 802, has 3 digits.
    *   **Pass 1 (Units digit):** Sort by units digit (0, 5, 5, 0, 2, 4, 2, 6) using Counting Sort.
        *   `[170, 90, 802, 2, 24, 45, 75, 66]`
    *   **Pass 2 (Tens digit):** Sort by tens digit (7, 9, 0, 0, 2, 4, 7, 6) using Counting Sort.
        *   `[802, 2, 24, 45, 66, 170, 75, 90]`
    *   **Pass 3 (Hundreds digit):** Sort by hundreds digit (8, 0, 0, 0, 0, 1, 0, 0) using Counting Sort.
        *   `[2, 24, 45, 66, 75, 90, 170, 802]`
*   **Time Complexity:** O(nk), where n is the number of elements and k is the number of digits in the maximum element.
*   **Space Complexity:** O(n + b), where b is the base of the number system (e.g., 10 for decimal).
*   **Limitations:** Primarily for integers. Performance depends on the number of digits.
*   **Textbook Reference:** *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Section on non-comparison sorts).

### 1.4 Sorting Algorithm Comparison Table

| Algorithm       | Best Case Time | Average Case Time | Worst Case Time | Space Complexity | Stability | In-place |
| :-------------- | :------------- | :---------------- | :-------------- | :--------------- | :-------- | :------- |
| Bubble Sort     | O(n)           | O(n^2)            | O(n^2)          | O(1)             | Yes       | Yes      |
| Selection Sort  | O(n^2)         | O(n^2)            | O(n^2)          | O(1)             | No        | Yes      |
| Insertion Sort  | O(n)           | O(n^2)            | O(n^2)          | O(1)             | Yes       | Yes      |
| Merge Sort      | O(n log n)     | O(n log n)        | O(n log n)      | O(n)             | Yes       | No       |
| Quick Sort      | O(n log n)     | O(n log n)        | O(n^2)          | O(log n) avg     | No        | Yes      |
| Heap Sort       | O(n log n)     | O(n log n)        | O(n log n)      | O(1)             | No        | Yes      |
| Counting Sort   | O(n + k)       | O(n + k)          | O(n + k)        | O(k)             | Yes       | Yes      |
| Radix Sort      | O(nk)          | O(nk)             | O(nk)           | O(n + b)         | Yes       | Yes      |

---

## 2. Hashing

Hashing is a technique used to index information by computing an index into an array of buckets or slots. The computed index is called a hash value or hash code. Hashing is often used to implement **symbol tables**, **dictionaries**, and **sets**.

### 2.1 Key Concepts in Hashing

*   **Hash Function:** A function that maps input data of arbitrary size to output data of fixed size. The output is the hash value. A good hash function should:
    *   Be fast to compute.
    *   Distribute keys uniformly across the hash table.
    *   Produce different hash values for different keys (ideally).
*   **Hash Table (or Hash Map):** A data structure that implements an associative array abstract data type, a structure that can store key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
*   **Collisions:** Occur when the hash function generates the same hash value for two different keys. Collisions are inevitable in practice because the number of possible keys is usually much larger than the number of available slots in the hash table.
*   **Collision Resolution:** Techniques used to handle collisions and store multiple keys that hash to the same index.

### 2.2 Hash Functions

A hash function takes a key (which can be of any data type) and returns an integer hash code.

*   **For Integers:**
    *   **Division Method:** `h(k) = k mod m`, where `m` is the size of the hash table. This is simple and often effective.
    *   **Multiplication Method:** `h(k) = floor(m * (k * A mod 1))`, where A is a constant between 0 and 1.
*   **For Strings:**
    *   **Summation Method:** Sum the ASCII values of the characters in the string. This is a weak hash function as it doesn't consider the order of characters. `h("cat")` and `h("act")` would be the same.
    *   **Polynomial Rolling Hash:** `h(S) = (s_0 * p^(n-1) + s_1 * p^(n-2) + ... + s_{n-1} * p^0) mod m`, where `s_i` are character codes, `p` is a prime number, and `n` is the length of the string. This is a better approach.
*   **For Floating-Point Numbers:** Convert them to their binary representation and then hash them as integers.

**Important Point:** The choice of hash function significantly impacts the performance of a hash table. A good hash function minimizes collisions. (CO5)

### 2.3 Collision Resolution Techniques

**A. Separate Chaining**

*   **Description:** Each slot in the hash table points to a linked list (or another data structure like a balanced binary search tree) containing all keys that hash to that slot.
*   **How it works:**
    1.  When inserting a key-value pair, compute the hash value of the key.
    2.  If the slot is empty, create a new linked list at that slot and add the key-value pair.
    3.  If the slot is not empty, traverse the linked list. If the key already exists, update its value. Otherwise, add the new key-value pair to the end of the linked list.
    4.  Searching involves computing the hash value and then searching the linked list at that slot.
*   **Example:** Hash table of size 7. Keys: (key=10, val="A"), (key=20, val="B"), (key=17, val="C"), (key=30, val="D"), (key=24, val="E"). Hash function: `h(k) = k mod 7`.
    *   `h(10) = 10 mod 7 = 3`. Slot 3: `[ (10, "A") ]`
    *   `h(20) = 20 mod 7 = 6`. Slot 6: `[ (20, "B") ]`
    *   `h(17) = 17 mod 7 = 3`. Collision at slot 3. Add to list: Slot 3: `[ (10, "A") -> (17, "C") ]`
    *   `h(30) = 30 mod 7 = 2`. Slot 2: `[ (30, "D") ]`
    *   `h(24) = 24 mod 7 = 3`. Collision at slot 3. Add to list: Slot 3: `[ (10, "A") -> (17, "C") -> (24, "E") ]`
*   **Performance:**
    *   Average Search/Insert/Delete: O(1 + α), where α is the load factor (number of elements / number of slots). If the load factor is kept small, performance is close to O(1).
    *   Worst Case: O(n), if all keys hash to the same slot.
*   **Space Complexity:** O(n) for storing elements.
*   **Textbook Reference:** *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Chapter on Hashing). *Classic Data Structures* by Samanta D (Chapter on Hashing).

**B. Open Addressing (or Closed Hashing)**

In open addressing, all elements are stored directly in the hash table array. When a collision occurs, we probe for an alternative slot in the table itself.

*   **Probing Sequences:**
    1.  **Linear Probing:** If `h(k)` is occupied, try `(h(k) + 1) mod m`, then `(h(k) + 2) mod m`, and so on.
        *   **Problem:** Primary clustering (long runs of occupied slots that lead to longer probe sequences).
        *   **Example:** Keys `[10, 20, 17, 30, 24]`, m=7, h(k)=k mod 7.
            *   10 -> slot 3: `[_, _, _, 10, _, _, _]`
            *   20 -> slot 6: `[_, _, _, 10, _, _, 20]`
            *   17 -> slot 3 occupied, try slot 4: `[_, _, _, 10, 17, _, 20]`
            *   30 -> slot 2: `[_, _, 30, 10, 17, _, 20]`
            *   24 -> slot 3 occupied, slot 4 occupied, try slot 5: `[_, _, 30, 10, 17, 24, 20]`
    2.  **Quadratic Probing:** If `h(k)` is occupied, try `(h(k) + c1*i + c2*i^2) mod m` for `i = 1, 2, 3, ...`, where `c1` and `c2` are constants.
        *   **Problem:** Secondary clustering (keys that hash to the same initial location follow the same probe sequence).
        *   **Common Form:** `(h(k) + i^2) mod m`
        *   **Requirement:** `m` should be a prime number, and the load factor should be at most 0.5 to guarantee finding an empty slot.
    3.  **Double Hashing:** If `h1(k)` is occupied, use a second hash function `h2(k)` to determine the step size: `(h1(k) + i * h2(k)) mod m` for `i = 1, 2, 3, ...`.
        *   **Benefit:** Reduces clustering significantly as different keys that collide at `h1(k)` will likely have different step sizes from `h2(k)`.
        *   **Requirement:** `h2(k)` should never return 0, and `h2(k)` should be relatively prime to `m`.

*   **Performance (Open Addressing):**
    *   Average Search/Insert/Delete: Depends on the load factor (α). As α approaches 1, performance degrades rapidly. Typically much better than O(n) if α is kept low.
    *   Worst Case: O(n).
*   **Space Complexity:** O(n) for storing elements.
*   **Textbook Reference:** *Fundamentals of Data Structures in C* by Horowitz, Sahni, and Anderson-Freed (Chapter on Hashing). *Classic Data Structures* by Samanta D (Chapter on Hashing).

### 2.4 Load Factor

*   **Definition:** The ratio of the number of stored elements (n) to the number of slots in the hash table (m). `Load Factor (α) = n / m`.
*   **Impact:** A low load factor leads to fewer collisions but wastes space. A high load factor saves space but increases the probability of collisions, leading to slower performance.
*   **Guidelines:**
    *   For Separate Chaining, a load factor around 1 is often acceptable.
    *   For Open Addressing, the load factor should ideally be kept below 0.5 or 0.7 to maintain good performance.
*   **Rehashing:** When the load factor exceeds a certain threshold, the hash table can be resized (usually doubled) and all existing elements are re-hashed into the new, larger table. This is an expensive operation but amortizes the cost over many insertions.

---

## Practice Questions and Exercises

**Sorting:**

1.  **Question (CO4):** Given the array `[3, 1, 4, 1, 5, 9, 2, 6]`, show the state of the array after each pass of **Bubble Sort**.
    *   **Answer:**
        *   Initial: `[3, 1, 4, 1, 5, 9, 2, 6]`
        *   Pass 1: `[1, 3, 1, 4, 5, 2, 6, 9]`
        *   Pass 2: `[1, 1, 3, 4, 2, 5, 6, 9]`
        *   Pass 3: `[1, 1, 3, 2, 4, 5, 6, 9]`
        *   Pass 4: `[1, 1, 2, 3, 4, 5, 6, 9]`
        *   Pass 5: `[1, 1, 2, 3, 4, 5, 6, 9]` (already sorted)

2.  **Question (CO1, CO4):** What is the time complexity of **Insertion Sort** in the best case and worst case? Explain why.
    *   **Answer:**
        *   **Best Case: O(n)**. This occurs when the array is already sorted. In each pass, the current element is compared only with its immediate predecessor, and no shifts are needed. The loop runs `n-1` times, and each inner loop comparison is constant.
        *   **Worst Case: O(n^2)**. This occurs when the array is sorted in reverse order. For each element, it has to be compared with all the preceding elements and shifted all the way to the beginning. The number of comparisons and shifts grows quadratically with `n`.

3.  **Question (CO1):** Compare the space complexity of **Merge Sort** and **Heap Sort**. Which one is an in-place sorting algorithm?
    *   **Answer:**
        *   **Merge Sort:** Has a space complexity of O(n) because it requires an auxiliary array to merge the sorted sub-arrays.
        *   **Heap Sort:** Has a space complexity of O(1) as it sorts the array in-place by building a heap within the array itself. Heap Sort is the in-place algorithm.

4.  **Question (CO4):** Explain the concept of "pivot" in **Quick Sort** and how its choice affects performance.
    *   **Answer:** The pivot is an element chosen from the array, around which the array is partitioned. Elements smaller than the pivot are moved to its left, and elements larger are moved to its right.
        *   **Good Pivot Choice:** If the pivot is close to the median, the array is divided into roughly equal halves, leading to a balanced recursion tree and O(n log n) time complexity.
        *   **Bad Pivot Choice:** If the pivot is always the smallest or largest element (e.g., in an already sorted or reverse-sorted array when picking the first/last element), the partition becomes unbalanced (one sub-array has `n-1` elements, the other has 0). This leads to a degenerate recursion tree and O(n^2) time complexity.

**Hashing:**

5.  **Question (CO5):** You have a hash table of size `m = 10` and use the division method `h(k) = k mod 10`. Insert the keys `[12, 22, 32, 42, 52]` using **separate chaining**. Show the final state of the hash table.
    *   **Answer:**
        *   `h(12) = 12 mod 10 = 2`
        *   `h(22) = 22 mod 10 = 2`
        *   `h(32) = 32 mod 10 = 2`
        *   `h(42) = 42 mod 10 = 2`
        *   `h(52) = 52 mod 10 = 2`
        *   Hash Table:
            *   Slot 0: []
            *   Slot 1: []
            *   Slot 2: `[ (12, val) -> (22, val) -> (32, val) -> (42, val) -> (52, val) ]`
            *   Slot 3: []
            *   ...
            *   Slot 9: []

6.  **Question (CO5):** Using the same hash table (`m = 10`, `h(k) = k mod 10`) and keys `[12, 22, 32, 42, 52]`, insert them using **linear probing**. Show the final state of the hash table.
    *   **Answer:**
        *   `h(12) = 2`. Slot 2: `[_, _, 12, _, _, _, _, _, _, _]`
        *   `h(22) = 2`. Slot 2 occupied. Try slot 3: `[_, _, 12, 22, _, _, _, _, _, _]`
        *   `h(32) = 2`. Slots 2, 3 occupied. Try slot 4: `[_, _, 12, 22, 32, _, _, _, _, _]`
        *   `h(42) = 2`. Slots 2, 3, 4 occupied. Try slot 5: `[_, _, 12, 22, 32, 42, _, _, _, _]`
        *   `h(52) = 2`. Slots 2, 3, 4, 5 occupied. Try slot 6: `[_, _, 12, 22, 32, 42, 52, _, _, _]`
        *   Final Hash Table (showing occupied slots):
            *   Slot 2: 12
            *   Slot 3: 22
            *   Slot 4: 32
            *   Slot 5: 42
            *   Slot 6: 52

7.  **Question (CO1, CO5):** What is a "collision" in hashing, and why is it important to choose a good hash function?
    *   **Answer:** A collision occurs when a hash function maps two or more different keys to the same hash value (i.e., the same index in the hash table).
    *   It is important to choose a good hash function because:
        *   **Minimizes Collisions:** A good hash function distributes keys uniformly across the hash table, reducing the frequency of collisions.
        *   **Improves Performance:** Fewer collisions lead to shorter probe sequences in open addressing and shorter linked lists in separate chaining, resulting in faster average-case performance (closer to O(1) for search, insert, and delete).
        *   **Avoids Worst-Case Scenarios:** A poorly designed hash function can lead to most keys hashing to the same few slots, effectively degrading the hash table's performance to that of a linked list (O(n)).

---

## Important Points to Remember

*   **Sorting:** Crucial for efficient searching and data processing. Understand the trade-offs between O(n log n) algorithms (Merge Sort, Quick Sort, Heap Sort) and O(n^2) algorithms (Bubble, Selection, Insertion Sort). Non-comparison sorts (Counting, Radix) offer better theoretical bounds but are data-dependent.
*   **Hashing:** Provides average O(1) time complexity for search, insert, and delete operations.
*   **Hash Function Quality:** A uniform distribution of keys is key.
*   **Collision Resolution:** Essential for handling multiple keys mapping to the same index. Separate chaining and open addressing (linear probing, quadratic probing, double hashing) are common methods.
*   **Load Factor:** A critical metric for hash table performance. Rehashing is a strategy to manage it.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## References

*   **Horowitz, Sahni, and Anderson-Freed:** Provides a thorough explanation of basic sorting algorithms and an introduction to hashing techniques, particularly from a C implementation perspective.
*   **Samanta:** Offers a good overview of sorting algorithms with clear explanations and examples.
*   **Gilberg and Forouzan:** Presents algorithms with pseudocode, which can be helpful for understanding the logic of sorting and hashing.
*   **Aho, Hopcroft, and Ullman:** A classic text, offering a rigorous theoretical foundation for algorithms and data structures, including sorting.
*   **Brass:** A more advanced text that might cover variations or more complex hashing schemes.
*   **Lipschuts (Schaum's Series):** Excellent for concise explanations, numerous examples, and practice problems.

This module provides a strong foundation for understanding how to efficiently organize and retrieve data, which are fundamental skills for any computer scientist.