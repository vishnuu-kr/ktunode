---
title: "Heaps and Related Structures – Binomial heap"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 2: Advanced Tree Data Structures  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b367"
status: "completed"
scrapedAt: "2026-05-20T16:10:07.616Z"
---
# ADVANCED DATA STRUCTURES - Module 2: Advanced Tree Data Structures - Binomial Heap

## Topic: Heaps and Related Structures – Binomial Heap

**Learning Outcomes:**

*   Understand the structure and properties of Binomial Heaps.
*   Explain the concept of Binomial Trees and their role in Binomial Heaps.
*   Implement and analyze the time complexity of basic Binomial Heap operations (insert, merge, find minimum, delete minimum, decrease key).
*   Compare and contrast Binomial Heaps with Binary Heaps.
*   Apply Binomial Heaps to solve relevant problems.

---

### 1. Introduction to Binomial Heaps

*   **Definition:** A Binomial Heap is a collection of Binomial Trees where:
    *   Each Binomial Tree in the heap obeys the min-heap property (the key of a node is greater than or equal to the key of its parent).
    *   There is at most one Binomial Tree of any given order (degree).

*   **Motivation:** Binomial Heaps provide efficient merging capabilities, making them useful for priority queue implementations where frequent merging operations are required. They offer better performance for some operations than simple Binary Heaps (especially merge).

### 2. Binomial Trees

*   **Definition:** A Binomial Tree of order *k* (denoted as Bk) is defined recursively as follows:
    *   B0: A single node.
    *   Bk: Two Binomial Trees of order k-1, where the root of one is made the leftmost child of the root of the other.  The root with the smaller key becomes the root of Bk.

*   **Properties of Binomial Tree Bk:**
    *   Number of nodes: 2<sup>k</sup>
    *   Height: k
    *   Number of nodes at depth i: (k choose i) (i.e., binomial coefficient)
    *   Root has degree k (k children)
    *   B(k-1) is a subtree of Bk

*   **Example:**
    *   B0:  `Node(Value)`
    *   B1:  `Node(Value) -> Node(Value)` (Root points to child)
    *   B2:  `Node(Value) -> Node(Value) -> Node(Value_2 -> Node(Value))` (Root points to two children, one is a root itself)

    *Visualization (Simplified)*

    ```
    B0:      4

    B1:      2
            /
           4

    B2:      1
           /  \
          2    3
         /
        4

    B3:      0
           /   \
          1      5
         /  \   /
        2    3 6
       /
      4
    ```

*   **Key Takeaway:** The structure of a Binomial Tree is crucial for the efficient merge operation in Binomial Heaps. Each order represents a power of 2.

### 3. Structure of a Binomial Heap

*   **Representation:** A Binomial Heap is represented as a linked list of Binomial Trees, sorted in increasing order of their degrees (orders).  The "head" of this linked list is a pointer to the tree of smallest order.

*   **Example:**  A Binomial Heap containing 13 nodes (1101 in binary) will consist of Binomial Trees B0, B2, and B3.

    *   13 (decimal) = 1101 (binary) = 2<sup>3</sup> + 2<sup>2</sup> + 2<sup>0</sup> = B3 + B2 + B0

*   **Heap Pointer (Minimum Pointer):**  The Binomial Heap also maintains a pointer to the node with the minimum key among all the root nodes of the Binomial Trees in the heap.  This makes the `find minimum` operation very efficient.

### 4. Binomial Heap Operations

*   **a) Insert(key):**
    1.  Create a new Binomial Heap containing a single Binomial Tree B0 (a single node with the given key).
    2.  Merge the new Binomial Heap with the existing Binomial Heap.
    3.  Update the minimum pointer if necessary.

    *   **Time Complexity:** O(log n) (due to the merge operation)

*   **b) Merge(Heap1, Heap2):**
    1.  Merge the root lists of Heap1 and Heap2 into a single sorted list (sorted by degree).
    2.  Perform a series of linking operations to ensure that there is at most one Binomial Tree of each degree. This involves iterating through the merged list and handling cases where there are two or three trees of the same degree.  If there are two, link them. If there are three, only link two of them and leave the third for the next iteration.
    3.  Update the minimum pointer.

    *   **Time Complexity:** O(log n)

*   **c) Find Minimum():**
    1.  Return the key pointed to by the minimum pointer.

    *   **Time Complexity:** O(1)

*   **d) Delete Minimum():**
    1.  Find the Binomial Tree whose root contains the minimum key.
    2.  Remove the Binomial Tree from the root list of the Binomial Heap.
    3.  Remove the root node from the Binomial Tree, resulting in a forest of Binomial Trees (its children).  Reverse the order of these children.
    4.  Create a new Binomial Heap from this forest.
    5.  Merge the new Binomial Heap with the original Binomial Heap.
    6.  Update the minimum pointer.

    *   **Time Complexity:** O(log n)

*   **e) Decrease Key(node, new_key):**
    1.  Decrease the key of the given node to `new_key`.
    2.  Repeatedly compare the node's key with the key of its parent. If the node's key is smaller than the parent's key, swap the node with its parent. This "bubbles up" the node until the heap property is satisfied.

    *   **Time Complexity:** O(log n) (height of the binomial tree)

### 5. Comparison with Binary Heaps

| Feature          | Binary Heap        | Binomial Heap      |
| ---------------- | ------------------- | ------------------ |
| Structure        | Complete Binary Tree | Collection of Binomial Trees |
| Merge            | O(n)               | O(log n)          |
| Insert           | O(log n)           | O(log n)          |
| Find Minimum    | O(1)               | O(1)              |
| Delete Minimum   | O(log n)           | O(log n)          |
| Decrease Key     | O(log n)           | O(log n)          |
| Space Complexity | O(n)               | O(n)              |

*   **Key Takeaways:**
    *   Binomial Heaps offer significantly better performance for the *merge* operation compared to Binary Heaps.
    *   Binary Heaps are generally simpler to implement.
    *   Binary Heaps can be implemented using arrays, while Binomial Heaps typically require pointer-based implementations.

### 6. Applications of Binomial Heaps

*   **Priority Queues:**  Similar to Binary Heaps, but advantageous when merging queues is a frequent operation.
*   **Dijkstra's Algorithm:**  Can be used for the priority queue in Dijkstra's shortest path algorithm, particularly beneficial in scenarios with frequent merging of path information.
*   **Network Routing:**  In network routing algorithms, maintaining and merging route tables can benefit from the efficient merge operation of Binomial Heaps.

### 7. Practice Questions/Exercises

**Question 1:**

Draw a Binomial Heap containing the following keys: 10, 5, 12, 3, 7, 1, 8, 2, 4, 9, 6, 11, 13.

**Answer:**

First, we need to represent the number of nodes (13) in binary: 13 = 1101 = 2<sup>3</sup> + 2<sup>2</sup> + 2<sup>0</sup>. This means the Binomial Heap will contain B3, B2, and B0.  Building the individual Binomial Trees and then linking them appropriately (maintaining min-heap property) will result in the following (visual representation):

```
B3:      1
         /   \
        2      5
       /  \   /
      3    4 6
     /
    7

B2:      8
       /  \
      9    10
     /
    11

B0:      12
```

The Binomial Heap would be a linked list of these trees, and the Minimum pointer would point to the root of B3 (value 1).

**Question 2:**

What is the maximum degree of any node in a Binomial Heap with n nodes?

**Answer:**

The maximum degree of any node in a Binomial Heap with *n* nodes is  floor(log<sub>2</sub> n).  This is because the largest Binomial Tree that can be part of the heap represents the highest power of 2 less than or equal to *n*.  The root of that tree has a degree equal to its order, which is floor(log<sub>2</sub> n).

**Question 3:**

Describe the steps involved in deleting the minimum key from a Binomial Heap.

**Answer:**

1. **Find the Binomial Tree containing the minimum key.**  This is achieved by traversing the root list of the heap, starting from the head, and comparing the keys of the roots of each binomial tree with the current minimum.
2. **Remove the Binomial Tree.** Remove the tree found in step 1 from the root list.
3. **Create a new Binomial Heap from the removed root's children.** The root's children themselves form a list of binomial trees. These must be reversed in order. This list then becomes a Binomial Heap.
4. **Merge the new Binomial Heap.** Merge the binomial heap formed from the children with the original binomial heap (with the original min tree removed).
5. **Update Minimum Pointer.** Find the new minimum and update the minimum pointer to point to that node's key.

**Question 4:**

Explain why the merge operation in a Binomial Heap has a time complexity of O(log n).

**Answer:**

The merge operation involves two primary steps:

1.  **Merging the root lists:** The root lists of the two Binomial Heaps are already sorted by degree.  Merging these two sorted lists takes O(log n) time, as the number of trees in each heap is at most log n.
2.  **Linking trees of equal degree:** This step involves iterating through the merged list and linking trees of the same degree to maintain the Binomial Heap property.  Since the number of trees is at most log n, this iteration and linking process also takes O(log n) time.

Therefore, the overall time complexity of the merge operation is O(log n).

### 8. Important Points to Remember

*   Binomial Heaps are a collection of Binomial Trees, with at most one tree of each order.
*   Each Binomial Tree obeys the min-heap property.
*   The root list of a Binomial Heap is sorted by the degree of the trees.
*   Binomial Heaps excel in merge operations (O(log n)).
*   Understanding the binary representation of the number of nodes is key to understanding the structure of a Binomial Heap.
*   Binomial heaps are often implemented using linked lists due to their dynamic nature.

---
