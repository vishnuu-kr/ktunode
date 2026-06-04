---
title: "Merge K sorted lists into a single sorted list using a heap."
subject: "DATA STRUCTURES LAB"
module: "Module 18: Merge K sorted lists into a single sorted list using a heap."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae93"
status: "completed"
scrapedAt: "2026-05-20T16:23:37.242Z"
---
## DATA STRUCTURES LAB - Module 18: Merge K Sorted Lists Using a Heap

**Topic:** Merge K sorted lists into a single sorted list using a heap.

**Learning Outcomes:**

*   Understand the problem of merging K sorted lists.
*   Explain the use of a min-heap data structure for merging K sorted lists.
*   Implement an algorithm to merge K sorted lists using a min-heap.
*   Analyze the time and space complexity of the heap-based merge algorithm.

---

**1. Understanding the Problem**

*   **Definition:** Given *K* sorted lists, the goal is to merge them into a single sorted list containing all the elements from the input lists in ascending order.
*   **Input:** A list of *K* sorted lists (e.g., `[[1, 4, 5], [1, 3, 4], [2, 6]]`).
*   **Output:** A single sorted list containing all elements from the *K* input lists (e.g., `[1, 1, 2, 3, 4, 4, 5, 6]`).
*   **Naive Approach:** Concatenate all the lists and then sort the resulting list. However, this has a time complexity of O(N log N), where N is the total number of elements across all lists.  This isn't optimal when lists are already sorted.

**2. The Role of the Min-Heap**

*   **Min-Heap Definition:** A binary tree-based data structure that satisfies the min-heap property: the value of each node is less than or equal to the values of its children.  The root node always contains the smallest element.
*   **Why a Min-Heap?** The min-heap allows us to efficiently keep track of the smallest element among the *K* lists.  By repeatedly extracting the minimum element from the heap and adding it to the result, we can maintain a sorted order.
*   **Heap Operations:**
    *   `insert(value)`: Inserts a new element into the heap and maintains the min-heap property (typically O(log K)).
    *   `extract_min()`: Removes and returns the minimum element from the heap (typically O(log K)).
    *   `heapify(list)`: Constructs a min-heap from an unsorted list (O(K), though generally, constructing using iterative insertion is used in this specific problem).
    *   `peek_min()`: Returns the minimum value from the heap without removing it.

**3. Algorithm for Merging K Sorted Lists Using a Min-Heap**

Here's a step-by-step breakdown of the algorithm:

1.  **Initialization:**
    *   Create a min-heap.
    *   Insert the first element (and its list index) from each of the *K* sorted lists into the min-heap.  Specifically, insert a tuple/object containing: (value, list_index, element_index). `value` is the element value, `list_index` is which list the element is from, and `element_index` is the index of element in its original list.
2.  **Iteration:**
    *   While the min-heap is not empty:
        *   Extract the minimum element from the heap.
        *   Add the extracted element's value to the resulting sorted list.
        *   Identify the list from which the extracted element came from.
        *   If the list has more elements:
            *   Insert the next element from that list into the min-heap (along with its list index and new element index).
3.  **Termination:**
    *   The resulting sorted list will now contain all elements from the *K* sorted lists in ascending order.

**4. Implementation (Python Example)**

```python
import heapq

def merge_k_sorted_lists(lists):
    """
    Merges K sorted lists into a single sorted list using a min-heap.

    Args:
        lists: A list of sorted lists.

    Returns:
        A single sorted list containing all elements from the input lists.
    """
    heap = []
    result = []

    # Initialize the heap with the first element from each list
    for i in range(len(lists)):
        if lists[i]:  # Check if the list is not empty
            heapq.heappush(heap, (lists[i][0], i, 0))  # (value, list_index, element_index)

    # Process the heap until it's empty
    while heap:
        value, list_index, element_index = heapq.heappop(heap)
        result.append(value)

        # Add the next element from the same list, if it exists
        if element_index + 1 < len(lists[list_index]):
            next_element = lists[list_index][element_index + 1]
            heapq.heappush(heap, (next_element, list_index, element_index + 1))

    return result

# Example Usage:
lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
merged_list = merge_k_sorted_lists(lists)
print(f"Merged List: {merged_list}")  # Output: Merged List: [1, 1, 2, 3, 4, 4, 5, 6]

lists2 = [[], [1], [2,3,4]]
merged_list2 = merge_k_sorted_lists(lists2)
print(f"Merged List 2: {merged_list2}") # Output: Merged List 2: [1, 2, 3, 4]

lists3 = [[],[]]
merged_list3 = merge_k_sorted_lists(lists3)
print(f"Merged List 3: {merged_list3}") # Output: Merged List 3: []
```

**5. Time and Space Complexity Analysis**

*   **Time Complexity:** O(N log K), where N is the total number of elements across all lists, and K is the number of lists.
    *   Initializing the heap takes O(K log K) in the worst case (inserting K elements). However, the overall runtime is dominated by the `while` loop.
    *   We extract the minimum element N times, and each `heapq.heappop` operation takes O(log K) time.
    *   We insert elements into the heap N times in the worst case and each `heapq.heappush` operation takes O(log K) time.
    *   Therefore, the overall time complexity is O(K log K + N log K), which simplifies to O(N log K) if N > K
*   **Space Complexity:** O(K) for the min-heap to store at most one element from each of the *K* lists. The `result` list takes O(N) space. Thus the total space complexity is O(N+K).

**6. Important Points to Remember**

*   The heap stores tuples (or objects) containing the element value, the list index, and element index from the source lists, which are essential for tracking where each element originated.
*   The algorithm efficiently leverages the fact that the input lists are already sorted.
*   The heap provides an efficient way to determine the smallest element across all the lists at any given time.
*   The code handles edge cases like empty lists gracefully by skipping empty lists during initialization.

**7. Practice Questions/Exercises**

1.  **Implementation Challenge:** Implement the `merge_k_sorted_lists` function in a different programming language (e.g., Java, C++).
2.  **Modify the Code:** Modify the code to handle descendingly sorted lists.  (Hint: Use a max-heap instead of a min-heap).
    ```python
    import heapq

    def merge_k_sorted_lists_desc(lists):
        """
        Merges K sorted lists (descending order) into a single sorted list using a max-heap.
        Important Note:  Python's heapq module only provides min-heap functionalities directly.
                         We need to trick it into behaving like a max-heap by negating the values.

        Args:
            lists: A list of sorted lists (descending).

        Returns:
            A single sorted list containing all elements from the input lists (descending).
        """
        heap = []
        result = []

        # Initialize the heap with the first element from each list (negated for max-heap behavior)
        for i in range(len(lists)):
            if lists[i]:
                heapq.heappush(heap, (-lists[i][0], i, 0))  # Negate the value

        # Process the heap until it's empty
        while heap:
            neg_value, list_index, element_index = heapq.heappop(heap)
            value = -neg_value # Revert the negation to get the correct value
            result.append(value)

            # Add the next element from the same list, if it exists
            if element_index + 1 < len(lists[list_index]):
                next_element = lists[list_index][element_index + 1]
                heapq.heappush(heap, (-next_element, list_index, element_index + 1))  # Negate next_element

        return result

    # Example usage for descendingly sorted lists
    desc_lists = [[5, 4, 1], [4, 3, 1], [6, 2]]
    merged_desc_list = merge_k_sorted_lists_desc(desc_lists)
    print(f"Merged Descending List: {merged_desc_list}")  # Output: Merged Descending List: [6, 5, 4, 4, 3, 2, 1, 1]
    ```
3.  **Test Cases:** Create several test cases, including edge cases like empty lists, lists with duplicate elements, and very large lists, to thoroughly test your implementation.
4.  **Alternative Approaches:** Research other algorithms for merging K sorted lists and compare their time and space complexities to the heap-based approach.  One example is using a divide and conquer approach, where you merge lists in pairs.
5.  **Complexity Analysis:**  Explain *why* the time complexity is O(N log K). Break down the operations and their associated costs.

**Answers to Practice Questions (Conceptual):**

1.  Implementing in different languages will primarily involve understanding the heap implementation in that language (e.g., `PriorityQueue` in Java, `std::priority_queue` in C++). The core logic remains the same.
2.  Using a max-heap involves slightly modifying the algorithm. Since standard `heapq` in Python is a min-heap, you can negate the numbers before pushing them onto the heap and then negate them again when popping.  Other languages will have direct max-heap implementations.
3.  Test cases should cover various scenarios to ensure the robustness of the algorithm.
4.  Divide and Conquer (merge lists in pairs recursively) has a time complexity of O(N log K), where N is total elements and K is the number of lists.  Each merge operation takes O(n) time, where n is the number of elements being merged, and there are log K levels of merging.
5.  O(N log K) because: Each element from each list is eventually added to the merged result.  For *each* element, we perform a heap insertion and a heap extraction.  Each heap operation is O(log K) since the heap contains *at most* K elements (one element from each list). Since there are N total elements, and each element involves a O(log K) heap operation, the total time complexity becomes O(N log K).
