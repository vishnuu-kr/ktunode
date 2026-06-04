---
title: "Insertion Sort"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac4b"
status: "completed"
scrapedAt: "2026-05-20T16:23:09.945Z"
---
# DATA STRUCTURES AND ALGORITHMS: Module 4 - Sorting and Searching: Insertion Sort

## Learning Outcomes:

*   Understand the principle of the Insertion Sort algorithm.
*   Be able to trace the execution of Insertion Sort on a given data set.
*   Implement the Insertion Sort algorithm in a programming language.
*   Analyze the time and space complexity of Insertion Sort.
*   Identify the scenarios where Insertion Sort is a suitable choice for sorting.
*   Compare and contrast Insertion Sort with other sorting algorithms.

## 1. Introduction to Insertion Sort

*   **Definition:** Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.  It iterates through the input data, taking each element and inserting it into its correct position within the already sorted portion of the array.

*   **Analogy:** Think of sorting a hand of playing cards.  You pick up a card, and you insert it into the correct position among the cards already in your hand, which are sorted.

*   **In-Place Sorting:** Insertion Sort is an *in-place* sorting algorithm, meaning it requires only a constant amount of extra space. It sorts the array directly, without creating a separate copy.

*   **Stable Sorting:** Insertion Sort is a *stable* sorting algorithm.  This means that if two elements have the same value, their relative order in the sorted array will be the same as their relative order in the input array.

## 2. Principle of Insertion Sort

The algorithm works as follows:

1.  **Start with the second element (index 1).** Consider the first element (index 0) as already sorted.

2.  **Compare the second element with the element to its left.** If the second element is smaller, swap them.

3.  **Move to the third element (index 2).** Compare it with the elements to its left (index 1, then index 0), shifting larger elements to the right to make space for the third element to be inserted in its correct position.

4.  **Repeat step 3 for each subsequent element in the array.**  For each element, iterate through the sorted portion of the array (to its left) and find the correct position to insert it.

## 3. Tracing the Execution of Insertion Sort (Example)

Let's sort the array `[5, 2, 4, 6, 1, 3]` using Insertion Sort.

*   **Initial Array:** `[5, 2, 4, 6, 1, 3]`

*   **Iteration 1 (i=1, element = 2):**
    *   Compare 2 with 5.  Since 2 < 5, swap them.
    *   Array: `[2, 5, 4, 6, 1, 3]`

*   **Iteration 2 (i=2, element = 4):**
    *   Compare 4 with 5. Since 4 < 5, swap them.
    *   Array: `[2, 4, 5, 6, 1, 3]`

*   **Iteration 3 (i=3, element = 6):**
    *   Compare 6 with 5. Since 6 > 5, no swap.
    *   Array: `[2, 4, 5, 6, 1, 3]`

*   **Iteration 4 (i=4, element = 1):**
    *   Compare 1 with 6. Since 1 < 6, shift 6 to the right.
    *   Compare 1 with 5. Since 1 < 5, shift 5 to the right.
    *   Compare 1 with 4. Since 1 < 4, shift 4 to the right.
    *   Compare 1 with 2. Since 1 < 2, shift 2 to the right.
    *   Insert 1 at the beginning.
    *   Array: `[1, 2, 4, 5, 6, 3]`

*   **Iteration 5 (i=5, element = 3):**
    *   Compare 3 with 6. Since 3 < 6, shift 6 to the right.
    *   Compare 3 with 5. Since 3 < 5, shift 5 to the right.
    *   Compare 3 with 4. Since 3 < 4, shift 4 to the right.
    *   Compare 3 with 2. Since 3 > 2, insert 3 after 2.
    *   Array: `[1, 2, 3, 4, 5, 6]`

*   **Sorted Array:** `[1, 2, 3, 4, 5, 6]`

## 4. Implementation of Insertion Sort (Python Example)

```python
def insertion_sort(arr):
  """Sorts an array using the Insertion Sort algorithm."""
  n = len(arr)
  for i in range(1, n):
    key = arr[i]
    j = i - 1
    while j >= 0 and key < arr[j]:
      arr[j + 1] = arr[j]  # Shift elements to the right
      j -= 1
    arr[j + 1] = key  # Insert the key into the correct position
  return arr

# Example Usage
my_array = [5, 2, 4, 6, 1, 3]
sorted_array = insertion_sort(my_array)
print("Sorted array:", sorted_array) # Output: Sorted array: [1, 2, 3, 4, 5, 6]
```

**Explanation:**

*   The outer `for` loop iterates through the unsorted portion of the array (starting from the second element).
*   `key` holds the element to be inserted into the sorted portion.
*   The inner `while` loop iterates through the sorted portion (to the left of `key`) and shifts elements larger than `key` to the right to create space for `key`.
*   Finally, `key` is inserted into its correct position.

## 5. Time and Space Complexity

*   **Time Complexity:**
    *   **Best Case:** O(n) - When the array is already sorted. The inner loop will not execute.
    *   **Average Case:** O(n<sup>2</sup>) - When the array is randomly ordered.
    *   **Worst Case:** O(n<sup>2</sup>) - When the array is sorted in reverse order. The inner loop executes the maximum number of times.
*   **Space Complexity:** O(1) - Insertion Sort is an in-place algorithm and requires only a constant amount of extra space for temporary variables.

## 6. Scenarios Where Insertion Sort is Suitable

*   **Small Data Sets:** Insertion Sort is very efficient for small data sets (typically less than 20 elements). The overhead of more complex algorithms outweighs their performance benefits for small inputs.
*   **Nearly Sorted Data:**  Insertion Sort performs well when the data is already nearly sorted. It will only need to make a few swaps and shifts.
*   **Online Sorting:** Insertion Sort can be used for online sorting, where data is received sequentially and needs to be sorted as it arrives.  You can insert each new element into its correct position in the already sorted portion.

## 7. Comparison with Other Sorting Algorithms

| Feature          | Insertion Sort | Bubble Sort | Selection Sort | Merge Sort | Quick Sort |
|-------------------|----------------|-------------|----------------|------------|------------|
| Time Complexity (Best) | O(n)          | O(n)        | O(n<sup>2</sup>)       | O(n log n) | O(n log n) |
| Time Complexity (Average) | O(n<sup>2</sup>)         | O(n<sup>2</sup>)       | O(n<sup>2</sup>)       | O(n log n) | O(n log n) |
| Time Complexity (Worst) | O(n<sup>2</sup>)         | O(n<sup>2</sup>)       | O(n<sup>2</sup>)       | O(n log n) | O(n<sup>2</sup>)       |
| Space Complexity    | O(1)          | O(1)        | O(1)           | O(n)       | O(log n)   |
| Stable             | Yes           | Yes         | No             | Yes        | No         |
| In-Place          | Yes           | Yes         | Yes            | No         | Yes (with optimization) |

**Key Takeaways:**

*   Insertion Sort, Bubble Sort, and Selection Sort all have O(n<sup>2</sup>) average and worst-case time complexity, making them less efficient than Merge Sort and Quick Sort for larger datasets.
*   Merge Sort and Quick Sort have O(n log n) average-case time complexity, but Merge Sort requires O(n) extra space, while Quick Sort requires O(log n) extra space on average.
*   Insertion Sort excels when the input data is nearly sorted or when dealing with small datasets, due to its simplicity and low overhead.

## 8. Important Points to Remember

*   Insertion Sort is an **in-place** and **stable** sorting algorithm.
*   It is efficient for **small datasets** and **nearly sorted data**.
*   Its time complexity is O(n<sup>2</sup>) in the average and worst cases, but O(n) in the best case.
*   Understand the inner workings of the algorithm and be able to trace its execution step-by-step.

## 9. Practice Questions/Exercises

**Question 1:**

Trace the execution of Insertion Sort on the following array: `[9, 5, 1, 4, 3]`.  Show the array after each iteration of the outer loop.

**Answer:**

*   Initial Array: `[9, 5, 1, 4, 3]`
*   Iteration 1 (i=1, element = 5): `[5, 9, 1, 4, 3]`
*   Iteration 2 (i=2, element = 1): `[1, 5, 9, 4, 3]`
*   Iteration 3 (i=3, element = 4): `[1, 4, 5, 9, 3]`
*   Iteration 4 (i=4, element = 3): `[1, 3, 4, 5, 9]`

**Question 2:**

Write a function in Python to sort a linked list using Insertion Sort.

**Answer:**

```python
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

def insertion_sort_linked_list(head):
    if head is None or head.next is None:
        return head

    sorted_list = None
    current = head

    while current is not None:
        next_node = current.next # Store the next node

        # Insert current in sorted linked list
        if sorted_list is None or sorted_list.data >= current.data:
            current.next = sorted_list
            sorted_list = current
        else:
            temp = sorted_list
            while temp.next is not None and temp.next.data < current.data:
                temp = temp.next
            current.next = temp.next
            temp.next = current

        current = next_node # Move to the next node in original linked list

    return sorted_list

# Example Usage:
# Create a linked list: 5 -> 2 -> 4 -> 1
head = Node(5)
head.next = Node(2)
head.next.next = Node(4)
head.next.next.next = Node(1)


sorted_head = insertion_sort_linked_list(head)

# Print the sorted list
curr = sorted_head
while curr:
  print(curr.data, end=" -> ")
  curr = curr.next
print("None") # Output: 1 -> 2 -> 4 -> 5 -> None
```

**Question 3:**

Explain why Insertion Sort is a good choice for sorting a small array but not a large array.

**Answer:**

For small arrays, the overhead of more complex sorting algorithms (like Merge Sort or Quick Sort) can outweigh their performance advantage. Insertion Sort has a simpler implementation with less overhead, making it faster for small datasets. However, the quadratic time complexity (O(n<sup>2</sup>)) of Insertion Sort means that its performance degrades significantly as the size of the array increases. For large arrays, the O(n log n) time complexity of Merge Sort or Quick Sort results in significantly faster sorting times.

**Question 4:**

What is the best-case scenario for Insertion Sort and what is its time complexity in that scenario?

**Answer:**

The best-case scenario for Insertion Sort is when the input array is already sorted. In this case, the inner `while` loop will never execute because each element will already be in its correct position.  The algorithm will simply iterate through the array once, resulting in a time complexity of O(n).
