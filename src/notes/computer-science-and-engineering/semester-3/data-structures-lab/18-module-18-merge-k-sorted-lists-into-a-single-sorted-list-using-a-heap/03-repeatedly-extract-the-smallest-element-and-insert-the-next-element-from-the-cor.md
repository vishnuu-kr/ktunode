---
title: "Repeatedly extract the smallest element and insert the next element from the corresponding list into the heap until all lists are merged."
subject: "DATA STRUCTURES LAB"
module: "Module 18: Merge K sorted lists into a single sorted list using a heap."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae95"
status: "completed"
scrapedAt: "2026-05-20T16:23:38.673Z"
---
# DATA STRUCTURES LAB - Module 18: Merge K Sorted Lists Using a Heap

**Topic:** Repeatedly extract the smallest element and insert the next element from the corresponding list into the heap until all lists are merged.

**Description:** This module covers the algorithm to merge `K` sorted lists into a single sorted list using a min-heap (priority queue). The core idea is to maintain a heap of the smallest elements from each list and repeatedly extract the minimum element from the heap, adding it to the merged list, and then replacing the extracted element with the next element from the list it originated from. This continues until all lists are exhausted.

**Learning Outcomes:**

*   Understand the concept of merging K sorted lists.
*   Learn how to use a min-heap to efficiently merge K sorted lists.
*   Implement the algorithm for merging K sorted lists using a heap.
*   Analyze the time and space complexity of the algorithm.
*   Apply the algorithm to solve relevant problems.

## 1. Key Concepts and Definitions

*   **Sorted List:** A list where elements are arranged in a specific order (ascending or descending).
*   **K Sorted Lists:** A collection of `K` individual lists, where each list is already sorted.
*   **Min-Heap (Priority Queue):** A complete binary tree data structure where the value of each node is less than or equal to the value of its children.  The root node always contains the smallest element.
*   **Heapify:** The process of converting a binary tree into a heap (either min-heap or max-heap).
*   **Heap Operations:**
    *   **Insert (Push):** Adds a new element to the heap and maintains the heap property.
    *   **Extract-Min (Pop):** Removes the minimum element from the heap (the root node) and maintains the heap property.
    *   **Peek (Top):** Returns the minimum element without removing it.

## 2. Algorithm for Merging K Sorted Lists using a Heap

**Input:** `K` sorted lists (e.g., `lists = [[1,4,5], [1,3,4], [2,6]]`)

**Output:** A single sorted list containing all elements from the input lists.

**Steps:**

1.  **Create a Min-Heap:** Initialize a min-heap to store the smallest element from each of the `K` sorted lists. The heap will store tuples: `(value, list_index, element_index)`.
    *   `value`: The value of the element.
    *   `list_index`: The index of the list from which the element came.
    *   `element_index`: The index of the element within that list.

2.  **Initialize the Heap:** Insert the first element from each of the `K` lists into the min-heap.  If a list is empty, skip it.

3.  **Repeatedly Extract and Insert:**  While the min-heap is not empty:
    *   **Extract-Min:** Remove the minimum element (root node) from the heap. Let's call this element `(value, list_index, element_index)`.
    *   **Append to Result:** Add the `value` to the final merged sorted list.
    *   **Insert Next Element:**  If there are more elements in the list with index `list_index`, insert the *next* element from that list into the min-heap. The new tuple will be `(next_value, list_index, element_index + 1)`. If the `list_index` is out of bounds for that list, don't insert anything.

4.  **Return the Merged List:** After the heap is empty, return the merged sorted list.

## 3. Example

Let's illustrate with `lists = [[1,4,5], [1,3,4], [2,6]]`

1.  **Heap Initialization:** The heap initially contains:
    *   `(1, 0, 0)`  (from list 0, index 0)
    *   `(1, 1, 0)`  (from list 1, index 0)
    *   `(2, 2, 0)`  (from list 2, index 0)

2.  **Iterations:**

    *   **Iteration 1:**
        *   Extract-Min: `(1, 0, 0)`
        *   Merged List: `[1]`
        *   Insert Next: `(4, 0, 1)` (from list 0, index 1)
        *   Heap: `[(1, 1, 0), (2, 2, 0), (4, 0, 1)]`

    *   **Iteration 2:**
        *   Extract-Min: `(1, 1, 0)`
        *   Merged List: `[1, 1]`
        *   Insert Next: `(3, 1, 1)` (from list 1, index 1)
        *   Heap: `[(2, 2, 0), (3, 1, 1), (4, 0, 1)]`

    *   **Iteration 3:**
        *   Extract-Min: `(2, 2, 0)`
        *   Merged List: `[1, 1, 2]`
        *   Insert Next: `(6, 2, 1)` (from list 2, index 1)
        *   Heap: `[(3, 1, 1), (4, 0, 1), (6, 2, 1)]`

    *   **Iteration 4:**
        *   Extract-Min: `(3, 1, 1)`
        *   Merged List: `[1, 1, 2, 3]`
        *   Insert Next: `(4, 1, 2)` (from list 1, index 2)
        *   Heap: `[(4, 0, 1), (4, 1, 2), (6, 2, 1)]`

    *   **Iteration 5:**
        *   Extract-Min: `(4, 0, 1)`
        *   Merged List: `[1, 1, 2, 3, 4]`
        *   Insert Next: `(5, 0, 2)` (from list 0, index 2)
        *   Heap: `[(4, 1, 2), (5, 0, 2), (6, 2, 1)]`

    *   **Iteration 6:**
        *   Extract-Min: `(4, 1, 2)`
        *   Merged List: `[1, 1, 2, 3, 4, 4]`
        *   Insert Next: `(None, 1, 3)` (No more elements in list 1)
        *   Heap: `[(5, 0, 2), (6, 2, 1)]`

    *   **Iteration 7:**
        *   Extract-Min: `(5, 0, 2)`
        *   Merged List: `[1, 1, 2, 3, 4, 4, 5]`
        *   Insert Next: `(None, 0, 3)` (No more elements in list 0)
        *   Heap: `[(6, 2, 1)]`

    *   **Iteration 8:**
        *   Extract-Min: `(6, 2, 1)`
        *   Merged List: `[1, 1, 2, 3, 4, 4, 5, 6]`
        *   Insert Next: `(None, 2, 2)` (No more elements in list 2)
        *   Heap: `[]` (Empty)

3.  **Final Result:** `[1, 1, 2, 3, 4, 4, 5, 6]`

## 4. Python Implementation

```python
import heapq

def merge_k_sorted_lists(lists):
    """
    Merges K sorted lists into a single sorted list using a min-heap.

    Args:
        lists: A list of sorted lists.

    Returns:
        A single sorted list.
    """
    heap = []
    merged_list = []

    # Initialize the heap with the first element from each list
    for i, lst in enumerate(lists):
        if lst: # Check if the list is not empty
            heapq.heappush(heap, (lst[0], i, 0))  # (value, list_index, element_index)

    while heap:
        val, list_index, element_index = heapq.heappop(heap)
        merged_list.append(val)

        # Insert the next element from the corresponding list
        if element_index + 1 < len(lists[list_index]):
            next_val = lists[list_index][element_index + 1]
            heapq.heappush(heap, (next_val, list_index, element_index + 1))

    return merged_list

# Example usage:
lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
merged_list = merge_k_sorted_lists(lists)
print(f"Merged list: {merged_list}")  # Output: Merged list: [1, 1, 2, 3, 4, 4, 5, 6]

lists = [[1, 2, 3], [], [4, 5, 6]]
merged_list = merge_k_sorted_lists(lists)
print(f"Merged list: {merged_list}")  # Output: Merged list: [1, 2, 3, 4, 5, 6]
```

## 5. Time and Space Complexity Analysis

*   **Time Complexity:** O(N log K), where N is the total number of elements across all lists and K is the number of lists.
    *   `N` elements are added to the merged list
    *   Each addition requires a `heapq.heappop` and (potentially) a `heapq.heappush`
    *   Both `heapq.heappop` and `heapq.heappush` take O(log K) time in the worst case because the heap size is at most K.
*   **Space Complexity:** O(K), for storing the elements in the min-heap. In the worst-case scenario, the heap will contain one element from each list.  We also have O(N) for storing the `merged_list`.  The dominant term is often considered O(N) as N > K in most practical scenarios.

## 6. Practice Questions/Exercises

1.  **Question:**  Merge the following lists using the heap-based algorithm: `lists = [[2, 4, 6], [1, 3, 5], [7, 8, 9]]`

    **Answer:**  `[1, 2, 3, 4, 5, 6, 7, 8, 9]`

2.  **Question:** Implement the `merge_k_sorted_lists` function in a different programming language (e.g., Java, C++).

3.  **Question:**  Modify the `merge_k_sorted_lists` function to handle cases where some lists may be empty.  (See the Python example for an implemented version of this)

4.  **Question:** Analyze the performance of the heap-based merging algorithm when the lists have highly varying lengths (e.g., one list is significantly longer than the others).

    **Answer:** The time complexity will still be O(N log K), but if one list is much longer, the heap will primarily contain elements from that list for a significant portion of the execution. The `log K` factor will still apply to operations on this long list.

5.  **Question:**  Consider the scenario where the elements in the lists are linked lists instead of arrays.  How would this affect the implementation and performance of the heap-based merging algorithm?

    **Answer:**  If lists are linked lists, accessing the next element would be O(1). The heap will still hold indexes, but instead of `lists[list_index][element_index]`, you'd need to maintain pointers to the *current node* of each list.  The time complexity would remain O(N log K), but with potentially slightly different constant factors.

## 7. Important Points to Remember

*   **Min-Heap is Key:** The min-heap is crucial for efficiently finding the smallest element among all lists at each step.
*   **Tuple Representation:** Using tuples `(value, list_index, element_index)` (or similar) to store the element's value, origin list, and index within that list is essential for tracking and inserting the next element correctly.
*   **Handling Empty Lists:**  Remember to handle cases where some input lists might be empty to avoid errors. This is often done during the heap initialization.
*   **Heapify Importance:** Make sure the heap property is maintained after each insertion and extraction to guarantee that the root node always contains the smallest element. Standard libraries like `heapq` in Python handle this automatically.
*   **Complexity Trade-offs:**  The heap-based algorithm is generally more efficient than simpler merging strategies (like repeatedly merging two lists at a time) when K is large.

These comprehensive notes provide a solid foundation for understanding and implementing the algorithm to merge K sorted lists using a heap. Good luck!
