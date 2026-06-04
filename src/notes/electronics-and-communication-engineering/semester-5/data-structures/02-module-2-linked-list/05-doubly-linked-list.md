---
title: "Doubly Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea0c"
status: "completed"
scrapedAt: "2026-05-23T17:55:05.444Z"
---
# DATA STRUCTURES - Module 2: Linked List

## Topic: Doubly Linked List

---

### 1. Introduction to Doubly Linked Lists

A doubly linked list is a linear data structure where each element (node) contains data and *two* pointers: one pointing to the *previous* node and another pointing to the *next* node in the sequence. This is in contrast to a singly linked list, where each node only points to the next node.

#### 1.1 Key Concepts and Definitions

*   **Node:** The fundamental building block of a doubly linked list. Each node typically consists of:
    *   `data`: The value stored in the node.
    *   `next`: A pointer to the subsequent node in the list.
    *   `prev` (or `previous`): A pointer to the preceding node in the list.

*   **Header Node:** Often, a special node called a header node is used. It doesn't store any actual data but serves as an entry point to the list and can simplify operations like insertion and deletion at the beginning. The `prev` pointer of the header node is usually `NULL` (or points to itself), and its `next` pointer points to the first actual data node.

*   **Tail Node:** The last node in the list. Its `next` pointer is `NULL` (or points to the header node in a circular doubly linked list).

*   **Head Pointer:** A pointer that always points to the header node (or the first data node if no header is used).

*   **NULL Pointer:** Indicates the end of the list (or the beginning if referring to the `prev` pointer of the first node).

#### 1.2 Advantages of Doubly Linked Lists over Singly Linked Lists

*   **Bidirectional Traversal:** Nodes can be traversed in both forward and backward directions. This is the primary advantage.
*   **Efficient Deletion:** Deleting a node is more efficient. In a singly linked list, to delete a node, you need access to its *predecessor*. In a doubly linked list, you can directly access the predecessor using the `prev` pointer, eliminating the need for a separate traversal to find it. (This directly impacts **CO2** by offering a more efficient solution for certain operations).
*   **Efficient Insertion at End:** While insertion at the end of a singly linked list requires traversing to the last node, a doubly linked list can maintain a `tail` pointer, allowing for O(1) insertion at the end.

#### 1.3 Disadvantages of Doubly Linked Lists

*   **Increased Memory Overhead:** Each node requires an extra pointer (`prev`), leading to higher memory consumption compared to singly linked lists.
*   **More Complex Implementation:** Managing two pointers (`next` and `prev`) makes insertion and deletion operations slightly more complex to implement correctly.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


#### 1.4 Textbook References

*   **Horowitz, Sahni, & Anderson-Freed (2/e, 2008):** Chapter 3 discusses linked lists and will likely cover doubly linked lists with their structure and basic operations.
*   **Samanta (2/e, 2009):** Chapter 4, "Linked Lists," will provide a comprehensive overview of various linked list types, including doubly linked lists.

---

### 2. Doubly Linked List Operations

We will consider the operations in the context of a doubly linked list with a header node.

**Node Structure (C-style pseudocode):**

```c
typedef struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
} Node;
```

**List Structure (often just a pointer to the header):**

```c
Node* header; // Points to the header node
```

#### 2.1 Insertion

Insertion can occur at the beginning, end, or at a specific position.

##### 2.1.1 Insertion at the Beginning (Pre-pending)

This operation inserts a new node as the first data node in the list.

**Steps:**
1.  Create a new node.
2.  Set the `data` of the new node.
3.  Make the `next` pointer of the new node point to the current first data node (which is `header->next`).
4.  Make the `prev` pointer of the current first data node (if it exists) point to the new node.
5.  Make the `next` pointer of the header node point to the new node.
6.  Make the `prev` pointer of the new node point to the header node.

**Pseudocode:**

```
function insertAtBeginning(list, newData):
    newNode = createNode(newData)
    newNode.next = list.header.next
    newNode.prev = list.header

    if list.header.next is not NULL:
        list.header.next.prev = newNode

    list.header.next = newNode
```

**Example:**
Initial list: `HEADER <-> A <-> B <-> NULL`
Insert `X` at beginning: `HEADER <-> X <-> A <-> B <-> NULL`

##### 2.1.2 Insertion at the End (Appending)

This operation appends a new node to the end of the list. Requires a pointer to the last node for O(1) efficiency, or traversal to find the last node. Assuming we traverse to find the tail.

**Steps:**
1.  Create a new node.
2.  Set the `data` of the new node.
3.  Traverse the list from the header node until the `next` pointer is `NULL`. Let this be `currentLastNode`.
4.  Make the `next` pointer of `currentLastNode` point to the new node.
5.  Make the `prev` pointer of the new node point to `currentLastNode`.
6.  Make the `next` pointer of the new node `NULL`.

**Pseudocode:**

```
function insertAtEnd(list, newData):
    newNode = createNode(newData)
    newNode.next = NULL

    if list.header.next is NULL: // List is empty
        newNode.prev = list.header
        list.header.next = newNode
    else:
        currentNode = list.header
        while currentNode.next is not NULL:
            currentNode = currentNode.next
        // currentNode is now the last node
        newNode.prev = currentNode
        currentNode.next = newNode
```

**Example:**
Initial list: `HEADER <-> A <-> B <-> NULL`
Insert `Y` at end: `HEADER <-> A <-> B <-> Y <-> NULL`

##### 2.1.3 Insertion After a Specific Node

This operation inserts a new node after a given existing node.

**Steps:**
1.  Create a new node.
2.  Set the `data` of the new node.
3.  Let the given node be `givenNode`.
4.  Make the `next` pointer of the new node point to `givenNode.next`.
5.  Make the `prev` pointer of `givenNode.next` (if it exists) point to the new node.
6.  Make the `next` pointer of `givenNode` point to the new node.
7.  Make the `prev` pointer of the new node point to `givenNode`.

**Pseudocode:**

```
function insertAfterNode(givenNode, newData):
    if givenNode is NULL:
        return // Cannot insert after a NULL node

    newNode = createNode(newData)
    newNode.next = givenNode.next
    newNode.prev = givenNode

    if givenNode.next is not NULL:
        givenNode.next.prev = newNode

    givenNode.next = newNode
```

**Example:**
Initial list: `HEADER <-> A <-> B <-> C <-> NULL`
Insert `Z` after `B`: `HEADER <-> A <-> B <-> Z <-> C <-> NULL`

##### 2.1.4 Insertion Before a Specific Node

This operation inserts a new node before a given existing node.

**Steps:**
1.  Create a new node.
2.  Set the `data` of the new node.
3.  Let the given node be `givenNode`.
4.  Make the `next` pointer of the new node point to `givenNode`.
5.  Make the `prev` pointer of the new node point to `givenNode.prev`.
6.  Make the `next` pointer of `givenNode.prev` point to the new node.
7.  Make the `prev` pointer of `givenNode` point to the new node.

**Pseudocode:**

```
function insertBeforeNode(givenNode, newData):
    if givenNode is NULL:
        return // Cannot insert before a NULL node

    newNode = createNode(newData)
    newNode.next = givenNode
    newNode.prev = givenNode.prev

    givenNode.prev.next = newNode
    givenNode.prev = newNode
```

**Example:**
Initial list: `HEADER <-> A <-> B <-> C <-> NULL`
Insert `W` before `B`: `HEADER <-> A <-> W <-> B <-> C <-> NULL`

---

### 3. Deletion

Deletion involves removing a node from the list.

#### 3.1 Deletion of a Node (given a pointer to the node)

This is where doubly linked lists shine due to direct access to the predecessor.

**Steps:**
1.  Let the node to be deleted be `nodeToDelete`.
2.  Update the `next` pointer of the preceding node (`nodeToDelete.prev`) to point to the succeeding node (`nodeToDelete.next`).
3.  Update the `prev` pointer of the succeeding node (`nodeToDelete.next`) to point to the preceding node (`nodeToDelete.prev`).
4.  Free the memory occupied by `nodeToDelete`.

**Pseudocode:**

```
function deleteNode(nodeToDelete):
    if nodeToDelete is NULL:
        return // Nothing to delete

    // Handle the case where nodeToDelete is the header's next (first data node)
    // or any other node. The logic is the same.

    nodeToDelete.prev.next = nodeToDelete.next
    if nodeToDelete.next is not NULL:
        nodeToDelete.next.prev = nodeToDelete.prev

    free(nodeToDelete)
```

**Example:**
Initial list: `HEADER <-> A <-> B <-> C <-> NULL`
Delete node `B`: `HEADER <-> A <-> C <-> NULL`
(The `prev` of `C` is now `A`, and the `next` of `A` is now `C`).

#### 3.2 Deletion of the First Node

This is a special case of deleting a node, where `nodeToDelete` is `header->next`.

**Steps:**
1.  Identify the first data node: `firstNode = header->next`.
2.  If `firstNode` is `NULL`, the list is empty, do nothing.
3.  Update the `next` pointer of the header to point to `firstNode->next`.
4.  If `firstNode->next` is not `NULL`, update its `prev` pointer to point to the header.
5.  Free `firstNode`.

**Pseudocode:**

```
function deleteFirstNode(list):
    if list.header.next is NULL:
        return // List is empty

    nodeToDelete = list.header.next
    list.header.next = nodeToDelete.next

    if nodeToDelete.next is not NULL:
        nodeToDelete.next.prev = list.header

    free(nodeToDelete)
```

#### 3.3 Deletion of the Last Node

Requires traversal to find the last node or a `tail` pointer.

**Steps (assuming traversal):**
1.  Traverse the list to find the last node (`lastNode`).
2.  If the list is empty (`header->next` is `NULL`), do nothing.
3.  If there's only one data node (`header->next->next` is `NULL`), treat it as deleting the first node.
4.  Update the `next` pointer of the second-to-last node (`lastNode.prev`) to `NULL`.
5.  Free `lastNode`.

**Pseudocode:**

```
function deleteLastNode(list):
    if list.header.next is NULL:
        return // List is empty

    currentNode = list.header
    while currentNode.next is not NULL:
        currentNode = currentNode.next
    // currentNode is now the last node

    if currentNode is list.header: // Only header exists, list is conceptually empty
        return

    if currentNode.prev is list.header: // Only one data node
        list.header.next = NULL
    else:
        currentNode.prev.next = NULL

    free(currentNode)
```

#### 3.4 Deletion by Value

Find the node with the specified value and then delete it.

**Steps:**
1.  Traverse the list to find the node containing the `valueToDelete`.
2.  If found, call `deleteNode` on that node.
3.  If not found, report an error.

**Pseudocode:**

```
function deleteByValue(list, valueToDelete):
    currentNode = list.header.next
    while currentNode is not NULL:
        if currentNode.data == valueToDelete:
            deleteNode(currentNode) // Using the node deletion function
            return
        currentNode = currentNode.next
    // Value not found
```

#### 3.5 Textbook References

*   **Horowitz, Sahni, & Anderson-Freed (2/e, 2008):** Chapter 3 will detail insertion and deletion algorithms.
*   **Samanta (2/e, 2009):** Chapter 4 will cover these operations, likely with C implementations.
*   **Gilberg & Forouzan (2/e, 2005):** Chapter 7, "Linked Lists," is a good source for pseudocode and C implementations of doubly linked list operations.

---

### 4. Traversal

Doubly linked lists allow traversal in both directions.

#### 4.1 Forward Traversal

Starting from the header, follow the `next` pointers.

**Pseudocode:**

```
function traverseForward(list):
    currentNode = list.header.next
    print "List (forward): "
    while currentNode is not NULL:
        print currentNode.data + " "
        currentNode = currentNode.next
    print NULL
```

#### 4.2 Backward Traversal

Starting from the last node, follow the `prev` pointers. This requires knowing the last node. If no `tail` pointer is maintained, you first need to traverse forward to find the last node.

**Pseudocode (assuming you know the last node, `tail`):**

```
function traverseBackward(list, tail):
    currentNode = tail
    print "List (backward): "
    while currentNode is not NULL and currentNode is not list.header: // Stop before header
        print currentNode.data + " "
        currentNode = currentNode.prev
    print NULL
```

**Pseudocode (if only header is known, find tail first):**

```
function traverseBackward(list):
    if list.header.next is NULL:
        print "List is empty"
        return

    // Find the last node
    lastNode = list.header
    while lastNode.next is not NULL:
        lastNode = lastNode.next

    currentNode = lastNode
    print "List (backward): "
    while currentNode is not list.header:
        print currentNode.data + " "
        currentNode = currentNode.prev
    print NULL
```

#### 4.3 Textbook References

*   **Samanta (2/e, 2009):** Chapter 4 will likely demonstrate traversal methods.
*   **Gilberg & Forouzan (2/e, 2005):** Chapter 7 will cover traversal aspects.

---

### 5. Applications of Doubly Linked Lists

Doubly linked lists are used in scenarios where bidirectional navigation or efficient deletion is crucial.

*   **Implementing Undo/Redo Functionality:** In text editors or software, a sequence of actions can be stored in a doubly linked list. Moving backward (undo) and forward (redo) is easily managed.
*   **Browser History:** Navigating back and forth between web pages uses a structure similar to a doubly linked list.
*   **Music Player Playlists:** Moving to the previous or next song is a direct application.
*   **Memory Management:** Some memory allocators use doubly linked lists to manage free blocks of memory.
*   **Implementing LRU (Least Recently Used) Cache:** By maintaining a doubly linked list of cache items and moving frequently accessed items to the front, LRU cache can be implemented efficiently. (This relates to **CO2** for efficient data access).
*   **Maintaining Sorted Lists:** Insertion and deletion in a sorted doubly linked list can be efficient.

#### 5.1 Textbook References

*   **Horowitz, Sahni, & Anderson-Freed (2/e, 2008):** Chapter 3 might touch upon applications.
*   **Samanta (2/e, 2009):** Chapter 4 will likely discuss applications.
*   **Aho, Hopcroft, & Ullman (1/e, 1983):** This classic text might discuss applications in algorithm design.
*   **Brass (2/e, 2018):** Advanced texts like this often delve into specific applications where doubly linked lists are beneficial.

---

### 6. Time Complexity Analysis

Let `n` be the number of nodes in the doubly linked list (excluding the header).

| Operation            | Best Case | Average Case | Worst Case |
| :------------------- | :-------- | :----------- | :--------- |
| Insertion (Beginning)| O(1)      | O(1)         | O(1)       |
| Insertion (End)      | O(1) (with tail ptr) / O(n) (without) | O(n)         | O(n)       |
| Insertion (After Node) | O(1)      | O(1)         | O(1)       |
| Insertion (Before Node)| O(1)      | O(1)         | O(1)       |
| Deletion (Node ptr)  | O(1)      | O(1)         | O(1)       |
| Deletion (First)     | O(1)      | O(1)         | O(1)       |
| Deletion (Last)      | O(1) (with tail ptr) / O(n) (without) | O(n)         | O(n)       |
| Deletion (by Value)  | O(1)      | O(n)         | O(n)       |
| Search (by Value)    | O(1)      | O(n)         | O(n)       |
| Traversal (Forward)  | O(n)      | O(n)         | O(n)       |
| Traversal (Backward) | O(n)      | O(n)         | O(n)       |

**Note:** The efficiency of insertion/deletion at the end depends heavily on whether a `tail` pointer is maintained. Without it, finding the last node requires O(n) traversal.

This complexity analysis is crucial for **CO1**, comparing performance.

---

### 7. Practice Questions

**Question 1 (CO2, K3):**
Write a pseudocode function to reverse a doubly linked list in-place. Explain your approach and analyze its time complexity.

**Answer 1:**
**Approach:**
To reverse a doubly linked list, we can iterate through the list. For each node, we swap its `next` and `prev` pointers. Additionally, we need to keep track of the `previous` node in the traversal sequence because after swapping, the original `next` pointer will point to the new `prev`. Finally, the header's `next` pointer should be updated to point to the new head of the reversed list (which was the original tail).

**Pseudocode:**

```
function reverseDoublyLinkedList(list):
    if list.header.next is NULL or list.header.next.next is NULL:
        return // List is empty or has only one element

    currentNode = list.header.next
    previousNode = NULL // To keep track of the node before the swap

    // Traverse till the end of the list
    while currentNode is not NULL:
        // Swap prev and next pointers
        temp = currentNode.next
        currentNode.next = currentNode.prev
        currentNode.prev = temp

        // Move to the next node in the original list (which is now stored in temp)
        previousNode = currentNode
        currentNode = temp // Move using the original next pointer

    // After the loop, previousNode is the last node of the original list (new head)
    // Update header's next pointer
    list.header.next = previousNode
```

**Time Complexity Analysis:**
The function iterates through each node of the list exactly once. For each node, a constant number of pointer operations are performed (swapping `next` and `prev`). Therefore, the time complexity is **O(n)**, where `n` is the number of nodes in the list. This is efficient for solving problems requiring list reversal.

**Question 2 (CO2, K3):**
Given a pointer to a node in a doubly linked list, delete the node. Your solution should be efficient.

**Answer 2:**
As discussed in Section 3.1, deletion of a node in a doubly linked list, given a pointer to the node itself, is very efficient because we have direct access to both the preceding and succeeding nodes.

**Pseudocode (from Section 3.1):**

```
function deleteNode(nodeToDelete):
    if nodeToDelete is NULL:
        return // Nothing to delete

    nodeToDelete.prev.next = nodeToDelete.next
    if nodeToDelete.next is not NULL:
        nodeToDelete.next.prev = nodeToDelete.prev

    free(nodeToDelete)
```

**Efficiency:**
This operation takes **O(1)** time because it involves a fixed number of pointer manipulations, regardless of the size of the list. This highlights the advantage of doubly linked lists for deletion.

**Question 3 (CO2, K3):**
Implement a function to insert a new node with a given value after a specified node in a doubly linked list.

**Answer 3:**
This is covered in Section 2.1.3.

**Pseudocode (from Section 2.1.3):**

```
function insertAfterNode(givenNode, newData):
    if givenNode is NULL:
        return // Cannot insert after a NULL node

    newNode = createNode(newData)
    newNode.next = givenNode.next
    newNode.prev = givenNode

    if givenNode.next is not NULL:
        givenNode.next.prev = newNode

    givenNode.next = newNode
```

**Efficiency:**
This operation is **O(1)** as it involves a constant number of pointer updates.

---

### 8. Important Points to Remember

*   **Bidirectional Traversal:** The key advantage of doubly linked lists.
*   **Node Structure:** Contains `data`, `next`, and `prev` pointers.
*   **Header Node:** Often used to simplify operations and handle edge cases.
*   **Efficient Deletion:** O(1) if a pointer to the node to be deleted is available.
*   **Memory Overhead:** Requires an extra pointer per node compared to singly linked lists.
*   **Implementation Complexity:** Requires careful management of both `next` and `prev` pointers during insertions and deletions.
*   **Traversal:** Can be done forward (using `next`) or backward (using `prev`). Backward traversal is efficient if the last node is known (e.g., via a `tail` pointer).

---

### 9. Alignment with Course Outcomes

*   **CO1 (Compare performance):** The time complexity analysis (Section 5) directly addresses this, allowing comparison with other data structures like singly linked lists or arrays.
*   **CO2 (Solve real-world problems efficiently):** Doubly linked lists are a direct tool for solving problems requiring efficient bidirectional traversal or deletion, as seen in the applications (Section 4) and demonstrated by the efficiency of operations.
*   **CO3 (Nonlinear data structures):** While doubly linked lists are *linear*, understanding them is a prerequisite for many nonlinear structures (like graphs where adjacency lists can be doubly linked).
*   **CO4 (Apply and compare techniques for searching and sorting):** Doubly linked lists can be used to implement sorting algorithms (though often less efficient than array-based sorts) and search algorithms. The O(n) search complexity is a key point of comparison.
*   **CO5 (Hash function):** Not directly related to doubly linked lists, but the course covers this as a separate topic.

---

This comprehensive study of doubly linked lists provides a solid foundation for understanding more complex data structures and algorithms. Remember to practice implementing these operations to solidify your understanding.