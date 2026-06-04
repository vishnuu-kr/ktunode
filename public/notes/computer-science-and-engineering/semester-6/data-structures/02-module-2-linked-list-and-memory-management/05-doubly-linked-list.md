---
title: "Doubly Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be9c"
status: "completed"
scrapedAt: "2026-05-20T16:51:57.599Z"
---
# Data Structures: Module 2 - Linked List and Memory Management

## Topic: Doubly Linked List

### 1. Introduction to Doubly Linked Lists

**1.1 What is a Doubly Linked List?**

*   A **doubly linked list** is a type of linked list where each node contains a reference (or pointer) to the **next node** in the sequence, and also a reference to the **previous node**.
*   This is in contrast to a singly linked list, where each node only points to the next node.
*   The first node is called the **head**, and the last node is called the **tail**. The `next` pointer of the tail is `NULL`, and the `prev` pointer of the head is `NULL`.

**1.2 Structure of a Doubly Linked List Node**

Each node in a doubly linked list typically consists of three parts:

*   **Data:** The information stored in the node.
*   **Next Pointer (`next`):** A reference to the subsequent node in the list.
*   **Previous Pointer (`prev`):** A reference to the preceding node in the list.

```
+-------+-------+-------+
| prev  | Data  | next  |
+-------+-------+-------+
```

**1.3 Key Characteristics**

*   **Bidirectional Traversal:** Can be traversed both forwards (from head to tail) and backwards (from tail to head).
*   **Efficient Insertion/Deletion:** Insertion and deletion of nodes are generally efficient, especially when the position of the node is known.
*   **Increased Memory Usage:** Requires more memory per node compared to a singly linked list due to the additional `prev` pointer.

### 2. Operations on Doubly Linked Lists

**2.1 Creating a Doubly Linked List**

*   A doubly linked list is typically initialized with an empty list, where both `head` and `tail` pointers are `NULL`.

**2.2 Insertion**

Insertion can occur at various positions:

*   **At the Beginning (Insertion at Head):**
    1.  Create a new node with the given data.
    2.  If the list is empty:
        *   Set `head` and `tail` to the new node.
    3.  If the list is not empty:
        *   Set the `next` pointer of the new node to the current `head`.
        *   Set the `prev` pointer of the current `head` to the new node.
        *   Update the `head` pointer to point to the new node.

    *   **Example:** Inserting `10` into `[20]->[30]`
        *   Current: `head` -> 20, `tail` -> 30. Node 20: `prev=NULL`, `next=30`. Node 30: `prev=20`, `next=NULL`.
        *   New Node: `newNode` with data `10`.
        *   `newNode.next = head` (points to 20).
        *   `head.prev = newNode` (node 20's `prev` now points to `newNode`).
        *   `head = newNode` (head is now `newNode`).
        *   Result: `[10] <-> [20] <-> [30]`

*   **At the End (Insertion at Tail):**
    1.  Create a new node with the given data.
    2.  If the list is empty:
        *   Set `head` and `tail` to the new node.
    3.  If the list is not empty:
        *   Set the `next` pointer of the current `tail` to the new node.
        *   Set the `prev` pointer of the new node to the current `tail`.
        *   Update the `tail` pointer to point to the new node.

    *   **Example:** Inserting `40` into `[10] <-> [20]`
        *   Current: `head` -> 10, `tail` -> 20. Node 10: `prev=NULL`, `next=20`. Node 20: `prev=10`, `next=NULL`.
        *   New Node: `newNode` with data `40`.
        *   `tail.next = newNode` (node 20's `next` now points to `newNode`).
        *   `newNode.prev = tail` (points to 20).
        *   `tail = newNode` (tail is now `newNode`).
        *   Result: `[10] <-> [20] <-> [40]`

*   **After a Given Node:**
    1.  Create a new node with the given data.
    2.  Let the given node be `targetNode`.
    3.  If `targetNode` is `NULL`, insertion is not possible.
    4.  Set the `next` pointer of the new node to the `next` pointer of `targetNode`.
    5.  Set the `prev` pointer of the new node to `targetNode`.
    6.  If `targetNode.next` is not `NULL` (i.e., `targetNode` is not the tail):
        *   Set the `prev` pointer of `targetNode.next` to the new node.
    7.  Set the `next` pointer of `targetNode` to the new node.
    8.  If `targetNode` was the tail, update the `tail` pointer to the new node.

    *   **Example:** Inserting `25` after node `20` in `[10] <-> [20] <-> [30]`
        *   Current: `head` -> 10, `tail` -> 30. Node 20: `prev=10`, `next=30`. Node 30: `prev=20`, `next=NULL`.
        *   New Node: `newNode` with data `25`. `targetNode` is the node with data `20`.
        *   `newNode.next = targetNode.next` (points to 30).
        *   `newNode.prev = targetNode` (points to 20).
        *   `targetNode.next.prev = newNode` (node 30's `prev` now points to `newNode`).
        *   `targetNode.next = newNode` (node 20's `next` now points to `newNode`).
        *   Result: `[10] <-> [20] <-> [25] <-> [30]`

*   **Before a Given Node:**
    1.  Create a new node with the given data.
    2.  Let the given node be `targetNode`.
    3.  If `targetNode` is `NULL`, insertion is not possible.
    4.  Set the `prev` pointer of the new node to the `prev` pointer of `targetNode`.
    5.  Set the `next` pointer of the new node to `targetNode`.
    6.  Set the `prev` pointer of `targetNode` to the new node.
    7.  If `targetNode.prev` is not `NULL`:
        *   Set the `next` pointer of `targetNode.prev` to the new node.
    8.  If `targetNode` was the head, update the `head` pointer to the new node.

    *   **Example:** Inserting `15` before node `20` in `[10] <-> [20] <-> [30]`
        *   Current: `head` -> 10, `tail` -> 30. Node 10: `prev=NULL`, `next=20`. Node 20: `prev=10`, `next=30`.
        *   New Node: `newNode` with data `15`. `targetNode` is the node with data `20`.
        *   `newNode.prev = targetNode.prev` (points to 10).
        *   `newNode.next = targetNode` (points to 20).
        *   `targetNode.prev = newNode` (node 20's `prev` now points to `newNode`).
        *   `targetNode.prev.next = newNode` (node 10's `next` now points to `newNode`).
        *   Result: `[10] <-> [15] <-> [20] <-> [30]`

**2.3 Deletion**

Deletion can occur by value or by node reference:

*   **By Value:**
    1.  Search for the node with the specified data.
    2.  If the node is found, proceed with deletion.

*   **By Node Reference:**
    1.  Let the node to be deleted be `nodeToDelete`.
    2.  If `nodeToDelete` is `NULL`, nothing to delete.
    3.  **Case 1: Deleting the Head Node:**
        *   Update `head` to `head.next`.
        *   If the new `head` is not `NULL`, set `head.prev` to `NULL`.
        *   If the list becomes empty after deletion, set `tail` to `NULL`.
    4.  **Case 2: Deleting the Tail Node:**
        *   Update `tail` to `tail.prev`.
        *   Set `tail.next` to `NULL`.
        *   If the list becomes empty after deletion, set `head` to `NULL`.
    5.  **Case 3: Deleting a Middle Node:**
        *   Update `nodeToDelete.prev.next` to `nodeToDelete.next`.
        *   Update `nodeToDelete.next.prev` to `nodeToDelete.prev`.

    *   **Example:** Deleting node `20` from `[10] <-> [20] <-> [30]`
        *   Current: `head` -> 10, `tail` -> 30. Node 20: `prev=10`, `next=30`. Node 10: `prev=NULL`, `next=20`. Node 30: `prev=20`, `next=NULL`.
        *   `nodeToDelete` is the node with data `20`.
        *   `nodeToDelete.prev.next = nodeToDelete.next` (node 10's `next` now points to 30).
        *   `nodeToDelete.next.prev = nodeToDelete.prev` (node 30's `prev` now points to 10).
        *   Result: `[10] <-> [30]`

**2.4 Traversal**

*   **Forward Traversal:** Start from the `head` and follow the `next` pointers until `NULL` is encountered.
*   **Backward Traversal:** Start from the `tail` and follow the `prev` pointers until `NULL` is encountered.

**2.5 Searching**

*   Can search for a node by its data value, traversing either forwards or backwards.

### 3. Advantages and Disadvantages of Doubly Linked Lists

**3.1 Advantages:**

*   **Bidirectional Traversal:** Easily move forwards and backwards in the list. This is useful for operations like finding the previous element.
*   **Efficient Deletion:** Deletion of a node is efficient (O(1)) if a pointer to that node is available, as you can directly access its `prev` and `next` nodes. In singly linked lists, deletion requires traversing from the head to find the *previous* node (O(n)).
*   **Easier Implementation of Some Operations:** Operations like inserting/deleting at a specific position or reversing a linked list can be simpler to implement compared to singly linked lists due to the `prev` pointer.

**3.2 Disadvantages:**

*   **Increased Memory Usage:** Each node requires an extra pointer (`prev`), leading to more memory consumption compared to singly linked lists.
*   **More Complex Implementation:** The logic for insertion and deletion becomes slightly more complex due to managing both `next` and `prev` pointers, increasing the chance of bugs.

### 4. Memory Management Considerations

*   **Dynamic Allocation:** Nodes in a doubly linked list are typically allocated dynamically on the heap using functions like `malloc` (in C) or `new` (in C++ or Java).
*   **Deallocation/Garbage Collection:** It's crucial to deallocate memory for nodes when they are no longer needed to prevent memory leaks.
    *   In languages with manual memory management (like C), you must explicitly `free` or `delete` nodes.
    *   In languages with automatic garbage collection (like Java, Python), the garbage collector will reclaim memory for nodes that are no longer reachable.
*   **Memory Leaks:** If a node is removed from the list but its memory is not deallocated, it leads to a memory leak. This is particularly important when implementing a doubly linked list in languages without automatic garbage collection.

### 5. Applications of Doubly Linked Lists

*   **Browser History:** Back and Forward buttons in web browsers often use doubly linked lists to navigate between pages.
*   **Undo/Redo Functionality:** Implementing undo/redo features in applications.
*   **Implementing Other Data Structures:** Can be used as a basis for implementing stacks, queues, or even hash tables.
*   **Music Playlists:** Navigating to the previous or next song.
*   **Task Scheduling:** Managing a list of processes that can be moved forward or backward in priority.

### 6. Practice Questions

**Question 1:**

Consider a doubly linked list with nodes storing integers. If you have a pointer to a node that is *not* the head and *not* the tail, what is the time complexity of deleting that node? Explain your reasoning.

**Answer 1:**
The time complexity is O(1).
Reasoning: To delete a node in a doubly linked list when you have a pointer to it, you need to adjust the `next` pointer of the previous node and the `prev` pointer of the next node. Since each node in a doubly linked list stores pointers to both its predecessor and successor, these adjustments can be made directly in constant time without needing to traverse the list to find them.

**Question 2:**

Write down the steps involved in inserting a new node after a given node `X` in a doubly linked list. Assume you have pointers to the `head`, `tail`, `X`, and you are creating a `newNode` with specific data.

**Answer 2:**
Let `newNode` be the node to be inserted after `X`.
1.  **Check if `X` is NULL:** If `X` is NULL, you cannot insert after it. Handle this error or condition.
2.  **Link `newNode` to `X`:** Set `newNode.prev = X`.
3.  **Link `newNode` to `X`'s next:**
    *   Store the current `next` node of `X` in a temporary variable, say `nextNode = X.next`.
    *   Set `newNode.next = nextNode`.
4.  **Link `X` to `newNode`:** Set `X.next = newNode`.
5.  **Link `nextNode` to `newNode` (if `nextNode` exists):** If `nextNode` is not NULL (meaning `X` was not the tail of the list), set `nextNode.prev = newNode`.
6.  **Update `tail` if necessary:** If `X` was the original tail of the list (`X.next` was NULL before insertion), then `newNode` becomes the new tail. So, set `tail = newNode`.

**Question 3:**

What is the primary advantage of a doubly linked list over a singly linked list in terms of traversal capabilities?

**Answer 3:**
The primary advantage is **bidirectional traversal**. A doubly linked list allows traversal in both forward (head to tail) and backward (tail to head) directions. A singly linked list only allows forward traversal.

**Question 4:**

Describe a scenario where the memory overhead of a doubly linked list might be a concern.

**Answer 4:**
The memory overhead of a doubly linked list is a concern when:
*   **Memory is highly constrained:** In embedded systems or environments with very limited RAM, the extra space required for the `prev` pointer in every node can become significant, potentially preventing the storage of a larger number of elements.
*   **The number of elements is extremely large:** Even if memory isn't critically constrained, storing millions or billions of nodes with an extra pointer per node can lead to a substantial increase in overall memory usage compared to a singly linked list.
*   **The `prev` pointer is rarely needed:** If the application's logic rarely or never needs to traverse backward or efficiently delete nodes given only a pointer to them, the benefits of the doubly linked list might not outweigh the memory cost.

### 7. Important Points to Remember

*   **Structure:** `prev` -> `data` -> `next`.
*   **Null Pointers:** `head.prev` is `NULL`, `tail.next` is `NULL`.
*   **Bidirectional:** Can traverse forward and backward.
*   **Efficient Deletion (with node pointer):** O(1) time complexity.
*   **Memory Cost:** Higher than singly linked lists due to the extra `prev` pointer.
*   **Careful pointer manipulation:** Essential for correct insertion and deletion to avoid breaking the list's integrity and causing memory leaks.
*   **Updating `head` and `tail`:** Always remember to update these pointers correctly during insertions and deletions at the boundaries.
