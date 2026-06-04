---
title: "Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea08"
status: "completed"
scrapedAt: "2026-05-23T17:55:02.580Z"
---
# Module 2: Linked List - Comprehensive Study Notes

## 1. Introduction to Linked Lists

### 1.1 What is a Linked List?

A linked list is a **linear data structure** where elements are not stored at contiguous memory locations. Instead, each element, called a **node**, contains two parts:
*   **Data:** The actual value stored in the node.
*   **Pointer (or Link):** A reference to the next node in the sequence.

The last node in the list points to `NULL` (or a similar indicator), signifying the end of the list.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

### 1.2 Advantages over Arrays

Arrays store elements contiguously, leading to certain limitations that linked lists address:

*   **Dynamic Size:** Linked lists can grow or shrink dynamically during runtime, unlike arrays which have a fixed size upon declaration. This is particularly useful when the number of elements is not known beforehand.
*   **Efficient Insertions/Deletions:** Inserting or deleting an element in a linked list (especially in the middle) is generally more efficient than in an array. In an array, insertions/deletions often require shifting subsequent elements, which can be an O(n) operation. In a linked list, only the pointers need to be updated (O(1) if the node is found).

**(Refer to Horowitz et al., Chapter 5; Gilberg & Forouzan, Chapter 7)**

### 1.3 Disadvantages compared to Arrays

*   **No Random Access:** Accessing an element at a specific index in a linked list requires traversing from the beginning of the list, making it an O(n) operation. Arrays provide O(1) random access.
*   **Extra Memory Overhead:** Each node in a linked list requires extra memory to store the pointer, which can be significant if the data stored in each node is small.
*   **Cache Performance:** Due to non-contiguous memory allocation, linked lists can have poorer cache performance compared to arrays, where elements are stored together.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

## 2. Types of Linked Lists

### 2.1 Singly Linked List

*   **Definition:** Each node contains data and a pointer to the *next* node. Traversal is possible only in the forward direction.
*   **Structure:**
    ```
    [Data | Next Pointer] -> [Data | Next Pointer] -> ... -> [Data | NULL]
    ```
*   **Key Components:**
    *   **Head Pointer:** A pointer that points to the first node of the list. If the list is empty, the head pointer is `NULL`.
    *   **Nodes:** Each node is typically a structure or class containing data and a `next` pointer.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4; Gilberg & Forouzan, Chapter 7)**

### 2.2 Doubly Linked List

*   **Definition:** Each node contains data and *two* pointers: one to the *previous* node and one to the *next* node. This allows for traversal in both forward and backward directions.
*   **Structure:**
    ```
    [NULL | Data | Next Pointer] <-> [Prev Pointer | Data | Next Pointer] <-> ... <-> [Prev Pointer | Data | NULL]
    ```
*   **Key Components:**
    *   **Head Pointer:** Points to the first node.
    *   **Tail Pointer:** Often maintained to point to the last node for efficient operations at the end of the list.
    *   **Nodes:** Each node contains data, a `next` pointer, and a `prev` pointer.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4; Gilberg & Forouzan, Chapter 7)**

### 2.3 Circular Linked List

*   **Definition:** In a singly circular linked list, the `next` pointer of the last node points to the first node (head) instead of `NULL`. In a doubly circular linked list, the `prev` pointer of the first node points to the last node.
*   **Structure (Singly Circular):**
    ```
    [Data | Next Pointer] -> [Data | Next Pointer] -> ... -> [Data | Points to Head]
    ```
*   **Structure (Doubly Circular):**
    ```
    [Points to Tail | Data | Next Pointer] <-> [Prev Pointer | Data | Next Pointer] <-> ... <-> [Prev Pointer | Data | Points to Head]
    ```
*   **Applications:** Useful for implementing queues, round-robin scheduling, etc.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4; Aho et al., Chapter 2)**

## 3. Operations on Linked Lists

This section will primarily focus on **Singly Linked Lists** as they form the foundation for other types.

### 3.1 Node Structure (Conceptual C-like Representation)

```c
struct Node {
    DataType data;       // Holds the actual data
    struct Node* next;   // Pointer to the next node
};
```

### 3.2 Creating a Linked List

A linked list is typically initialized with a `head` pointer set to `NULL` (representing an empty list).

### 3.3 Traversing a Linked List

To traverse the list, start from the `head` and follow the `next` pointers until `NULL` is encountered.

**Algorithm:**
1.  Initialize a temporary pointer `current` to `head`.
2.  While `current` is not `NULL`:
    *   Process `current->data`.
    *   Move `current` to `current->next`.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4; Gilberg & Forouzan, Chapter 7)**

### 3.4 Inserting a Node

Insertions can occur at the beginning, end, or a specific position.

#### 3.4.1 Insertion at the Beginning

1.  Create a new node with the given data.
2.  Set the `next` pointer of the new node to the current `head`.
3.  Update `head` to point to the new node.

**Time Complexity:** O(1)

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

#### 3.4.2 Insertion at the End

1.  Create a new node with the given data. Its `next` pointer will be `NULL`.
2.  If the list is empty, set `head` to the new node.
3.  Otherwise, traverse the list to find the last node.
4.  Set the `next` pointer of the last node to the new node.

**Time Complexity:** O(n) (to find the last node)
*   **Optimization:** If a `tail` pointer is maintained, this becomes O(1).

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

#### 3.4.3 Insertion After a Given Node

1.  Create a new node with the given data.
2.  If the given node is `NULL`, return (or handle as an error).
3.  Set the `next` pointer of the new node to the `next` pointer of the given node.
4.  Set the `next` pointer of the given node to the new node.

**Time Complexity:** O(1) (assuming the position of the given node is known)

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

#### 3.4.4 Insertion Before a Given Node (Singly Linked List)

1.  Create a new node with the given data.
2.  If the list is empty or the given node is the `head`, insert at the beginning.
3.  Traverse the list to find the node *previous* to the given node.
4.  Set the `next` pointer of the new node to the given node.
5.  Set the `next` pointer of the previous node to the new node.

**Time Complexity:** O(n) (to find the previous node)

**(Refer to Horowitz et al., Chapter 5)**

### 3.5 Deletion of a Node

Deletion can occur from the beginning, end, or by value.

#### 3.5.1 Deletion from the Beginning

1.  If the list is empty, do nothing.
2.  Store the `head` node in a temporary pointer `temp`.
3.  Update `head` to point to `head->next`.
4.  Free the memory occupied by `temp`.

**Time Complexity:** O(1)

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

#### 3.5.2 Deletion from the End

1.  If the list is empty, do nothing.
2.  If the list has only one node, set `head` to `NULL` and free the node.
3.  Otherwise, traverse the list to find the second-to-last node.
4.  Let the last node be pointed to by `current->next`.
5.  Set `current->next` to `NULL`.
6.  Free the last node.

**Time Complexity:** O(n)
*   **Optimization:** If a `tail` pointer is maintained, this becomes more complex. You would need to find the node *before* the tail, which still requires traversal, unless you have a doubly linked list.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

#### 3.5.3 Deletion of a Specific Node (by value)

1.  If the list is empty, return.
2.  **Case 1: Node to be deleted is the head.**
    *   Update `head` to `head->next`.
    *   Free the original `head` node.
3.  **Case 2: Node to be deleted is not the head.**
    *   Traverse the list with two pointers: `current` and `previous`. `current` points to the node to be deleted, and `previous` points to the node before it.
    *   When `current->data` matches the target value:
        *   Set `previous->next` to `current->next`.
        *   Free `current`.
        *   Break the loop.
    *   If the end of the list is reached without finding the node, it's not present.

**Time Complexity:** O(n)

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4; Gilberg & Forouzan, Chapter 7)**

### 3.6 Searching for a Node

To search for a node with a specific value:
1.  Start from the `head`.
2.  Traverse the list, comparing the `data` of each node with the target value.
3.  If a match is found, return a pointer to that node (or `true`/index).
4.  If the end of the list is reached without a match, return `NULL` (or `false`/indicate not found).

**Time Complexity:** O(n)

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

## 4. Operations on Doubly Linked Lists

Doubly linked lists enhance deletion and insertion operations.

### 4.1 Node Structure (Conceptual C-like Representation)

```c
struct DNode {
    DataType data;
    struct DNode* next;
    struct DNode* prev;
};
```

### 4.2 Insertion (Doubly Linked List)

*   **At the beginning:** Similar to singly linked list, but update `prev` pointer of the old head.
*   **At the end:** If `tail` is maintained, simply update `tail->next` and `new_node->prev`.
*   **After a node:** Update `next` and `prev` pointers of the new node, the given node, and the node after the given node.

**Time Complexity:** O(1) for beginning/end (with tail), O(1) for insertion after a known node.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

### 4.3 Deletion (Doubly Linked List)

*   **From the beginning:** Update `head` and `head->next->prev`.
*   **From the end:** Update `tail` and `tail->prev->next`.
*   **A specific node (given pointer):** Update `node->prev->next` and `node->next->prev`. This is very efficient if you have a pointer to the node itself.

**Time Complexity:** O(1) if the node to be deleted is known (e.g., you have a pointer to it), or if deleting from head/tail (with tail pointer). O(n) if deleting by value (requires searching first).

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

## 5. Operations on Circular Linked Lists

### 5.1 Traversal

Start from the `head`. The loop condition should check if the `current` node is the `head` again, or if `current->next` is the `head` to process the last node correctly.

**Algorithm (Singly Circular):**
1.  If list is empty, return.
2.  Initialize `current` to `head`.
3.  Do:
    *   Process `current->data`.
    *   `current = current->next`.
4.  While `current != head`.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

### 5.2 Insertion/Deletion

Operations are similar to singly/doubly linked lists, but the pointers of the last node and the head node need special handling to maintain the circularity.

*   **Insertion at the end:** The new node becomes the last node. Its `next` points to the original head. The previous last node's `next` should point to the new node.
*   **Deletion of the last node:** The node before the last node's `next` pointer needs to be updated to point to the head.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4)**

## 6. Applications of Linked Lists

Linked lists are fundamental and used in various scenarios:

*   **Implementing other data structures:** Stacks, queues, hash tables (chaining).
*   **Dynamic memory allocation:** Managing free memory blocks.
*   **Undo/Redo functionality:** Storing a sequence of operations.
*   **Browser history:** Navigating back and forth.
*   **Music playlists:** Playing songs sequentially, skipping, repeating.
*   **Representing polynomials:** Each term can be a node with coefficient and exponent.
*   **CPU scheduling:** Round-robin scheduling using circular linked lists.

**(Refer to Horowitz et al., Chapter 5; Samanta, Chapter 4; Gilberg & Forouzan, Chapter 7; Aho et al., Chapter 2)**

## 7. Relating to Course Outcomes (COs)

*   **CO2 (Solve real-world problems efficiently):** Linked lists are efficient for dynamic size and insertions/deletions, making them suitable for many dynamic data management problems (e.g., managing a list of tasks, browser history).
    *   *Example:* Implementing a music player playlist where songs can be added or removed easily at any position.
*   **CO1 (Compare performance using asymptotic notations):** Understanding the O(1) vs O(n) complexities of linked list operations (insertion/deletion at beginning/middle/end, search) allows comparison with arrays and other structures.
*   **CO3 (Nonlinear data structures):** While linked lists are linear, they are often building blocks for nonlinear structures like trees (where each node can have multiple child pointers) and graphs (where nodes can point to many other nodes).
*   **CO4 (Searching and Sorting):** Linked lists can be used to implement sorting algorithms, though they are generally less efficient than arrays for in-place sorting due to the lack of random access. Bubble sort, insertion sort can be adapted, but quicksort and mergesort are more complex to implement efficiently on linked lists. Searching is O(n).

## 8. Important Points to Remember

*   **NULL Termination:** Crucial for singly linked lists to signify the end.
*   **Head Pointer:** Essential for accessing the list. If lost, the entire list is lost.
*   **Node Structure:** Always contains data and one or more pointers.
*   **Dynamic Nature:** Linked lists are not static like arrays.
*   **Traversal is Sequential:** No direct access to arbitrary elements.
*   **Pointer Manipulation:** Correctly updating pointers is key to all operations.
*   **Memory Management:** Always deallocate memory for deleted nodes to prevent memory leaks.
*   **Doubly Linked Lists:** Offer bidirectional traversal and easier deletion of specific nodes.
*   **Circular Linked Lists:** The last node links back to the head.

## 9. Practice Questions & Exercises

**Question 1 (Conceptual):**
What is the primary advantage of a linked list over an array in scenarios where elements are frequently inserted or deleted from the middle of the list? Explain why.

**Answer:**
The primary advantage is efficiency. In arrays, inserting or deleting an element in the middle requires shifting all subsequent elements, which takes O(n) time. In a singly linked list, if you have a pointer to the node *before* the insertion/deletion point, the operation only involves updating pointers, taking O(1) time.

**Question 2 (Implementation - Singly Linked List):**
Write a C-like pseudocode function to **insert a node at the end** of a singly linked list. Assume the `head` pointer is passed by reference or as a pointer to a pointer, and a `newNode` is already created.

```c
// Assume Node structure and head pointer are defined
// void insertAtEnd(struct Node** headRef, struct Node* newNode);
```

**Answer:**
```c
void insertAtEnd(struct Node** headRef, struct Node* newNode) {
    // If the list is empty, the new node becomes the head
    if (*headRef == NULL) {
        *headRef = newNode;
        newNode->next = NULL; // Ensure new node's next is NULL
        return;
    }

    // Traverse to the last node
    struct Node* current = *headRef;
    while (current->next != NULL) {
        current = current->next;
    }

    // Link the last node to the new node
    current->next = newNode;
    newNode->next = NULL; // Ensure new node's next is NULL
}
```

**Question 3 (Implementation - Singly Linked List):**
Write a C-like pseudocode function to **delete the first occurrence of a node with a specific data value** from a singly linked list.

```c
// Assume Node structure and head pointer are defined
// void deleteNodeByValue(struct Node** headRef, DataType value);
```

**Answer:**
```c
void deleteNodeByValue(struct Node** headRef, DataType value) {
    struct Node* temp = *headRef;
    struct Node* prev = NULL;

    // Case 1: Node to be deleted is the head
    if (temp != NULL && temp->data == value) {
        *headRef = temp->next; // Change head
        // free(temp); // In C, you'd free the memory
        return;
    }

    // Case 2: Search for the node to be deleted, keeping track of the previous node
    while (temp != NULL && temp->data != value) {
        prev = temp;
        temp = temp->next;
    }

    // If the value was not present in the list
    if (temp == NULL) {
        return;
    }

    // Unlink the node from the linked list
    prev->next = temp->next;

    // free(temp); // In C, you'd free the memory
}
```

**Question 4 (Doubly Linked List):**
What is the key advantage of using a doubly linked list for deleting a node when you only have a pointer to that specific node (and not its predecessor)?

**Answer:**
In a doubly linked list, each node has a pointer to its *previous* node. If you have a pointer to the node you want to delete, you can directly access its previous node (`node->prev`) and its next node (`node->next`). This allows you to update the `next` pointer of the previous node and the `prev` pointer of the next node in O(1) time, without needing to traverse the list to find the predecessors. This is a significant improvement over singly linked lists for this specific operation.

**Question 5 (Circular Linked List):**
Consider a singly circular linked list. If you want to insert a new node `newNode` **after** a given node `currentNode`, what pointer adjustments are needed?

**Answer:**
1.  `newNode->next = currentNode->next;` (The new node points to what `currentNode` was pointing to).
2.  `currentNode->next = newNode;` (The `currentNode` now points to the `newNode`).

**(Note:** If `currentNode` was the last node in a circular list, `currentNode->next` would have pointed to the head. This logic correctly inserts `newNode` between `currentNode` and the original `currentNode->next`, maintaining circularity.)

---
This concludes the study notes for Linked Lists. Remember to practice implementing these operations in your chosen programming language.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
