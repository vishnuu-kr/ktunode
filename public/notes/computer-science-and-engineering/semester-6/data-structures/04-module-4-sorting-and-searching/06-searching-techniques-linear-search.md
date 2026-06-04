---
title: "Searching Techniques - Linear Search"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beae"
status: "completed"
scrapedAt: "2026-05-20T16:52:09.092Z"
---
# Data Structures: Module 4 - Sorting and Searching

## Topic: Searching Techniques - Linear Search

---

### 1. Introduction to Searching

**What is Searching?**

Searching is the process of finding a specific element (often called the "key" or "target value") within a collection of data, such as an array, list, or other data structure. The goal is to determine if the element exists and, if so, to locate its position.

**Why is Searching Important?**

Searching is a fundamental operation in computer science. It's used in countless applications, including:

*   **Database queries:** Finding records that match specific criteria.
*   **Web search engines:** Locating relevant web pages based on keywords.
*   **File systems:** Finding specific files or directories.
*   **User interface interactions:** Searching for items in a dropdown menu or contact list.
*   **Algorithms:** Many sorting and other algorithms rely on searching as a sub-operation.

**Types of Searching:**

Searching algorithms can be broadly categorized into two main types:

*   **Sequential (or Linear) Searching:** These algorithms examine each element in the collection one by one until the target element is found or the end of the collection is reached.
*   **Non-Sequential (or Binary) Searching:** These algorithms require the collection to be sorted and divide the search space in half with each step, making them significantly faster for large datasets.

---

### 2. Linear Search (Sequential Search)

**Definition:**

Linear search, also known as sequential search, is the simplest searching algorithm. It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched.

**How it Works:**

1.  Start at the beginning of the data collection (usually the first element).
2.  Compare the current element with the target value.
3.  If the current element matches the target value, the search is successful, and the index (position) of the element is returned.
4.  If the current element does not match, move to the next element in the collection.
5.  Repeat steps 2-4 until either the target value is found or the end of the collection is reached.
6.  If the end of the collection is reached without finding the target value, the search is unsuccessful.

**Algorithm (Pseudocode):**

```
function linear_search(array, target):
    for i from 0 to length(array) - 1:
        if array[i] == target:
            return i  // Target found at index i
    return -1 // Target not found
```

---

### 3. Illustrative Examples

**Example 1: Simple Array Search**

Let's search for the number `25` in the following array:

`[10, 5, 20, 25, 15, 30]`

*   **Step 1:** Compare `10` with `25`. No match.
*   **Step 2:** Compare `5` with `25`. No match.
*   **Step 3:** Compare `20` with `25`. No match.
*   **Step 4:** Compare `25` with `25`. **Match found!**
*   **Result:** The target `25` is found at index `3`.

**Example 2: Target Not Found**

Let's search for the number `50` in the same array:

`[10, 5, 20, 25, 15, 30]`

*   **Step 1:** Compare `10` with `50`. No match.
*   **Step 2:** Compare `5` with `50`. No match.
*   **Step 3:** Compare `20` with `50`. No match.
*   **Step 4:** Compare `25` with `50`. No match.
*   **Step 5:** Compare `15` with `50`. No match.
*   **Step 6:** Compare `30` with `50`. No match.
*   **End of Array:** The end of the array is reached.
*   **Result:** The target `50` is not found.

---

### 4. Time Complexity of Linear Search

**Definition of Time Complexity:**

Time complexity is a measure of how the execution time of an algorithm grows with the size of the input. It is typically expressed using Big O notation.

**Analysis of Linear Search:**

*   **Best Case:** The target element is the very first element in the array. In this case, only one comparison is needed.
    *   Time Complexity: **O(1)** (Constant time)

*   **Worst Case:** The target element is the last element in the array, or the target element is not present in the array at all. In this case, the algorithm has to check every element in the array. If the array has `n` elements, `n` comparisons are made.
    *   Time Complexity: **O(n)** (Linear time)

*   **Average Case:** On average, if the element is present, it will be found somewhere in the middle of the array. This also results in a linear growth of time with the input size.
    *   Time Complexity: **O(n)** (Linear time)

**Key Takeaway:** Linear search has a linear time complexity, meaning its performance degrades proportionally to the size of the input data.

---

### 5. Space Complexity of Linear Search

**Definition of Space Complexity:**

Space complexity is a measure of the amount of memory an algorithm uses with respect to the size of the input.

**Analysis of Linear Search:**

Linear search uses a constant amount of extra memory, regardless of the input size. It only needs a variable to store the loop counter (index) and potentially the target value.

*   Space Complexity: **O(1)** (Constant space)

**Key Takeaway:** Linear search is very memory-efficient.

---

### 6. Advantages and Disadvantages of Linear Search

**Advantages:**

*   **Simplicity:** It is very easy to understand and implement.
*   **No Pre-sorting Required:** It works on unsorted arrays, which is a significant advantage when sorting the data is costly or unnecessary.
*   **Effective for Small Datasets:** For small lists or arrays, the difference in performance between linear search and more complex algorithms is negligible.

**Disadvantages:**

*   **Inefficiency for Large Datasets:** Its linear time complexity makes it very slow for large collections of data.
*   **Not Suitable for Real-time Applications:** In scenarios where quick retrieval is critical (e.g., real-time systems), linear search might be too slow.

---

### 7. Applications of Linear Search

Despite its limitations, linear search is used in several scenarios:

*   **Searching in Small Lists:** When the number of elements is small, the overhead of more complex algorithms isn't justified.
*   **Searching Unsorted Data:** If the data is not sorted and sorting it would be more expensive than performing a linear search, linear search is a practical choice.
*   **Educational Purposes:** It's often the first searching algorithm taught due to its simplicity.
*   **Finding the First Occurrence:** If you need to find the *first* instance of an element in an unsorted list, linear search is naturally suited for this.

---

### 8. Practice Questions and Exercises

**Question 1:**
Describe the basic principle of how linear search works.

**Question 2:**
What is the time complexity of linear search in the worst-case scenario? Explain why.

**Question 3:**
What is the space complexity of linear search?

**Question 4:**
Consider the array: `[7, 2, 9, 1, 5, 3]`
Perform a linear search for the element `9`. Trace the steps and state the index where it is found.

**Question 5:**
Consider the array: `[7, 2, 9, 1, 5, 3]`
Perform a linear search for the element `8`. Trace the steps and state the result (whether it was found or not).

**Question 6:**
When would you choose to use linear search over a more advanced searching algorithm like binary search?

---

### 9. Answers to Practice Questions

**Answer 1:**
Linear search works by sequentially checking each element of a data collection, starting from the first element, and comparing it with the target value. If a match is found, the search stops and returns the position of the element. If the entire collection is traversed without finding a match, the search is considered unsuccessful.

**Answer 2:**
The time complexity of linear search in the worst-case scenario is **O(n)**, where 'n' is the number of elements in the collection. This occurs when the target element is the last element in the collection or when the target element is not present in the collection at all. In these cases, the algorithm must examine every single element.

**Answer 3:**
The space complexity of linear search is **O(1)** (constant space). This is because it only requires a fixed amount of extra memory for variables like the loop counter, regardless of the size of the input data.

**Answer 4:**
Array: `[7, 2, 9, 1, 5, 3]`
Target: `9`

*   **Step 1:** Compare `7` with `9`. No match.
*   **Step 2:** Compare `2` with `9`. No match.
*   **Step 3:** Compare `9` with `9`. **Match found!**
*   **Result:** The element `9` is found at index **2**.

**Answer 5:**
Array: `[7, 2, 9, 1, 5, 3]`
Target: `8`

*   **Step 1:** Compare `7` with `8`. No match.
*   **Step 2:** Compare `2` with `8`. No match.
*   **Step 3:** Compare `9` with `8`. No match.
*   **Step 4:** Compare `1` with `8`. No match.
*   **Step 5:** Compare `5` with `8`. No match.
*   **Step 6:** Compare `3` with `8`. No match.
*   **End of Array:** The end of the array is reached.
*   **Result:** The element `8` is **not found**.

**Answer 6:**
You would choose linear search over a more advanced algorithm like binary search in the following situations:

*   **When the data is unsorted:** Binary search requires the data to be sorted, which adds an initial sorting cost. If the data is already unsorted and you only need to perform a few searches, linear search might be more efficient than sorting the entire dataset first.
*   **When the dataset is small:** For very small lists, the performance difference is negligible, and the simplicity of linear search makes it a good choice.
*   **When you need to find the first occurrence of an element:** Linear search naturally finds the first instance of an element as it traverses from the beginning.
*   **When memory is extremely constrained:** Linear search has a constant space complexity, making it very memory-efficient.

---

### 10. Important Points to Remember

*   **Linear search is also called sequential search.**
*   It works by checking **each element one by one**.
*   It is **simple to implement**.
*   It **does not require the data to be sorted**.
*   **Best-case time complexity is O(1)** (element is the first one).
*   **Worst-case and average-case time complexity is O(n)** (element is the last one, or not present).
*   **Space complexity is O(1)** (constant space).
*   It is **suitable for small datasets or unsorted data** where the cost of sorting is prohibitive.
*   For **large, sorted datasets, binary search is significantly more efficient.**
