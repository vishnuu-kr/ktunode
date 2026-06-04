---
title: "Doubly Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List: Self"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363e4"
status: "completed"
scrapedAt: "2026-05-23T16:20:40.158Z"
---
# Data Structures: Module 2: Linked Lists - Doubly Linked List

This module focuses on Doubly Linked Lists, a fundamental data structure with enhanced capabilities compared to singly linked lists. We will explore its structure, operations, advantages, disadvantages, and applications.

---

## 1. Introduction to Doubly Linked List

A **doubly linked list** is a linear data structure where each node contains a data element and two pointers: one pointing to the **previous node** and another pointing to the **next node** in the sequence. This bidirectional linking allows traversal in both forward and backward directions.

**Key Concepts & Definitions:**

*   **Node:** The basic building block of a linked list. In a doubly linked list, a node typically consists of:
    *   `data`: The value stored in the node.
    *   `next`: A pointer to the next node in the list.
    *   `prev`: A pointer to the previous node in the list.

*   **Header Node:** An optional special node often used at the beginning of a linked list. It doesn't store actual data but helps simplify operations like insertion at the beginning and deletion of the first element.

*   **Tail Node:** Similarly, a special node (or simply the last node) at the end of the list.

*   **Traversal:** The process of visiting each node in the list. In a doubly linked list, traversal can be done in both forward (using `next` pointers) and backward (using `prev` pointers) directions.

**Comparison with Singly Linked List (Implicitly covered by understanding DLL properties):**

*   **Bidirectional Traversal:** DLLs allow moving backward, unlike singly linked lists.
*   **Deletion Efficiency:** Deleting a node in a DLL is more efficient if you have a pointer to the node itself, as you can directly access its previous node. In a singly linked list, you'd need to traverse from the beginning to find the preceding node.

---

## 2. Structure of a Doubly Linked List Node

Let's illustrate the structure of a node in a doubly linked list.

**Example (Conceptual C-style structure):**

```c
struct Node {
    int data;          // Data to be stored in the node
    struct Node* next; // Pointer to the next node
    struct Node* prev; // Pointer to the previous node
};
```

**Important Point to Remember:** The presence of the `prev` pointer is the defining characteristic of a doubly linked list.

---

## 3. Operations on Doubly Linked List

We will cover the fundamental operations performed on a doubly linked list.

### 3.1. Insertion

Insertion can occur at various positions: beginning, end, or a specific position.

#### 3.1.1. Insertion at the Beginning

**Description:** Adds a new node at the head of the list.

**Steps:**

1.  Create a new node and allocate memory for it.
2.  Set the `data` field of the new node.
3.  Set the `next` pointer of the new node to point to the current head of the list.
4.  Set the `prev` pointer of the new node to `NULL` (as it will be the new head).
5.  If the list is not empty, update the `prev` pointer of the current head to point to the new node.
6.  Update the head of the list to point to the new node.

**Example (Illustrative Pseudocode):**

```
function insertAtBeginning(head, data):
    newNode = createNode(data)
    newNode.next = head
    newNode.prev = NULL

    if head is not NULL:
        head.prev = newNode

    head = newNode
    return head
```

**Textbook Reference:** Horowitz, Sahni, & Freed (Section 3.3, page 71) discusses various insertion methods for linked lists, which can be adapted for doubly linked lists.

#### 3.1.2. Insertion at the End

**Description:** Adds a new node at the tail of the list.

**Steps:**

1.  Create a new node and allocate memory for it.
2.  Set the `data` field of the new node.
3.  Set the `next` and `prev` pointers of the new node to `NULL`.
4.  If the list is empty, the new node becomes both the head and the tail.
5.  If the list is not empty, traverse the list to find the last node (where `next` is `NULL`).
6.  Set the `next` pointer of the last node to point to the new node.
7.  Set the `prev` pointer of the new node to point to the last node.

**Example (Illustrative Pseudocode):**

```
function insertAtEnd(head, data):
    newNode = createNode(data)
    newNode.next = NULL
    newNode.prev = NULL

    if head is NULL:
        head = newNode
        return head

    last = head
    while last.next is not NULL:
        last = last.next

    last.next = newNode
    newNode.prev = last
    return head
```

#### 3.1.3. Insertion After a Given Node

**Description:** Inserts a new node after a specified node in the list.

**Steps:**

1.  Check if the given node is `NULL`. If so, do nothing or return an error.
2.  Create a new node and allocate memory for it.
3.  Set the `data` field of the new node.
4.  Set the `next` pointer of the new node to point to the `next` node of the given node.
5.  Set the `prev` pointer of the new node to point to the given node.
6.  If the `next` node of the given node is not `NULL`, update its `prev` pointer to point to the new node.
7.  Update the `next` pointer of the given node to point to the new node.

**Example (Illustrative Pseudocode):**

```
function insertAfterNode(givenNode, data):
    if givenNode is NULL:
        print "Given node cannot be NULL"
        return

    newNode = createNode(data)
    newNode.next = givenNode.next
    newNode.prev = givenNode

    if givenNode.next is not NULL:
        givenNode.next.prev = newNode

    givenNode.next = newNode
```

#### 3.1.4. Insertion Before a Given Node

**Description:** Inserts a new node before a specified node in the list.

**Steps:**

1.  Check if the given node is `NULL`. If so, do nothing or return an error.
2.  Create a new node and allocate memory for it.
3.  Set the `data` field of the new node.
4.  Set the `next` pointer of the new node to point to the given node.
5.  Set the `prev` pointer of the new node to point to the `prev` node of the given node.
6.  If the `prev` node of the given node is not `NULL`, update its `next` pointer to point to the new node.
7.  Update the `prev` pointer of the given node to point to the new node.
8.  If the given node was the head of the list, update the head to be the new node.

**Example (Illustrative Pseudocode):**

```
function insertBeforeNode(head, givenNode, data):
    if givenNode is NULL:
        print "Given node cannot be NULL"
        return head

    newNode = createNode(data)
    newNode.next = givenNode
    newNode.prev = givenNode.prev

    if givenNode.prev is not NULL:
        givenNode.prev.next = newNode
    else: // givenNode was the head
        head = newNode

    givenNode.prev = newNode
    return head
```

**Course Outcome Alignment:** CO2: Solving real-world problems efficiently using appropriate data structures. Insertion operations are crucial for dynamic data management.

---

### 3.2. Deletion

Deletion involves removing a node from the list.

#### 3.2.1. Deletion of a Node with a Given Value

**Description:** Removes the first occurrence of a node with a specific data value.

**Steps:**

1.  Traverse the list to find the node to be deleted.
2.  If the node is not found, return.
3.  **Case 1: Node to be deleted is the head.**
    *   Update the head to be the next node.
    *   If the new head is not `NULL`, set its `prev` pointer to `NULL`.
    *   Free the memory of the deleted node.
4.  **Case 2: Node to be deleted is the tail.**
    *   Get the previous node of the node to be deleted.
    *   Set the `next` pointer of the previous node to `NULL`.
    *   Free the memory of the deleted node.
5.  **Case 3: Node to be deleted is in the middle.**
    *   Get the previous and next nodes of the node to be deleted.
    *   Set the `next` pointer of the previous node to point to the next node.
    *   Set the `prev` pointer of the next node to point to the previous node.
    *   Free the memory of the deleted node.

**Example (Illustrative Pseudocode):**

```
function deleteNodeByValue(head, value):
    current = head

    // If the node to be deleted is the head itself
    if current is not NULL and current.data == value:
        head = current.next
        if head is not NULL:
            head.prev = NULL
        free(current)
        return head

    // Search for the node to be deleted, keep track of the previous node
    while current is not NULL and current.data != value:
        current = current.next

    // If the value was not found
    if current is NULL:
        return head

    // Unlink the node from the doubly linked list
    if current.next is not NULL:
        current.next.prev = current.prev

    if current.prev is not NULL:
        current.prev.next = current.next

    free(current)
    return head
```

**Textbook Reference:** Horowitz, Sahni, & Freed (Section 3.4, page 75) on deletion in linked lists can be adapted.

#### 3.2.2. Deletion of a Specific Node (Given Pointer)

**Description:** Removes a node when you have a direct pointer to it. This is more efficient than searching by value.

**Steps:**

1.  Check if the given node is `NULL`. If so, return.
2.  **Case 1: Node to be deleted is the head.**
    *   Update the head to be the next node.
    *   If the new head is not `NULL`, set its `prev` pointer to `NULL`.
3.  **Case 2: Node to be deleted is not the head.**
    *   Update the `next` pointer of the previous node (`nodeToDelete.prev.next`) to point to the node after the one being deleted (`nodeToDelete.next`).
    *   If the node after the one being deleted is not `NULL`, update its `prev` pointer (`nodeToDelete.next.prev`) to point to the node before the one being deleted (`nodeToDelete.prev`).
4.  Free the memory of the deleted node.

**Example (Illustrative Pseudocode):**

```
function deleteSpecificNode(head, nodeToDelete):
    if nodeToDelete is NULL:
        return head

    // If nodeToDelete is the head node
    if nodeToDelete == head:
        head = nodeToDelete.next
        if head is not NULL:
            head.prev = NULL
        free(nodeToDelete)
        return head

    // If nodeToDelete is not the head node
    if nodeToDelete.next is not NULL:
        nodeToDelete.next.prev = nodeToDelete.prev

    if nodeToDelete.prev is not NULL:
        nodeToDelete.prev.next = nodeToDelete.next

    free(nodeToDelete)
    return head
```

**Course Outcome Alignment:** CO2: Solving real-world problems efficiently. Efficient deletion by pointer is a key advantage.

---

### 3.3. Traversal

Traversing a doubly linked list allows accessing and processing each node.

#### 3.3.1. Forward Traversal

**Description:** Starts from the head and moves towards the tail using `next` pointers.

**Steps:**

1.  Start with a pointer to the `head`.
2.  While the pointer is not `NULL`:
    *   Process the data of the current node.
    *   Move the pointer to the next node (`pointer = pointer.next`).

**Example (Illustrative Pseudocode):**

```
function traverseForward(head):
    current = head
    while current is not NULL:
        print current.data
        current = current.next
```

#### 3.3.2. Backward Traversal

**Description:** Starts from the tail and moves towards the head using `prev` pointers. This is a key advantage over singly linked lists.

**Steps:**

1.  First, find the tail node (traverse from head until `next` is `NULL`).
2.  Start with a pointer to the tail.
3.  While the pointer is not `NULL`:
    *   Process the data of the current node.
    *   Move the pointer to the previous node (`pointer = pointer.prev`).

**Example (Illustrative Pseudocode):**

```
function traverseBackward(head):
    if head is NULL:
        return

    // Find the tail
    tail = head
    while tail.next is not NULL:
        tail = tail.next

    // Traverse backward from tail
    current = tail
    while current is not NULL:
        print current.data
        current = current.prev
```

**Textbook Reference:** Samanta, D. (Classic Data Structures, 2/e) covers traversal techniques in detail, which are directly applicable to doubly linked lists.

**Course Outcome Alignment:** CO2: Solving real-world problems efficiently. Bidirectional traversal is useful in scenarios like undo/redo functionalities or navigating through history.

---

## 4. Advantages and Disadvantages of Doubly Linked List

**Advantages:**

*   **Bidirectional Traversal:** Can traverse in both forward and backward directions. This is the primary advantage over singly linked lists.
*   **Efficient Deletion:** Deleting a node is more efficient (O(1)) if a pointer to the node is already available, as the previous node can be directly accessed.
*   **Easier Implementation of Certain Operations:** Operations like inserting before a node or deleting a specific node are simpler to implement.

**Disadvantages:**

*   **More Memory Overhead:** Each node requires an extra pointer (`prev`) compared to a singly linked list, leading to increased memory consumption.
*   **More Complex Implementation:** The logic for maintaining both `next` and `prev` pointers during operations can be more intricate, increasing the chance of errors.

---

## 5. Applications of Doubly Linked List

Doubly linked lists are used in various applications where bidirectional traversal or efficient deletion is important:

*   **Implementing Undo/Redo Functionality:** Each action can be a node, allowing easy movement back and forth through a history.
*   **Browser History Navigation:** Similar to undo/redo, back and forward buttons in web browsers can be implemented using DLLs.
*   **Doubly Ended Queues (Deques):** A deque is a data structure that allows insertion and deletion from both ends, which can be efficiently implemented using a doubly linked list.
*   **Music Player Playlists:** Allows easy navigation to the next and previous songs.
*   **Implementing LRU (Least Recently Used) Cache:** Used in conjunction with a hash map for efficient lookups and removals.

---

## 6. Practice Questions and Exercises

**Question 1:**

Write a C function to insert a new node at the end of a doubly linked list. Assume the doubly linked list is represented by a `head` pointer.

**Answer:**

```c
#include <stdio.h>
#include <stdlib.h>

// Structure for a doubly linked list node
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (!newNode) {
        printf("Memory allocation failed!\n");
        return NULL;
    }
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

// Function to insert a node at the end of a doubly linked list
struct Node* insertAtEnd(struct Node* head, int data) {
    struct Node* newNode = createNode(data);
    if (!newNode) {
        return head; // Return original head if node creation failed
    }

    // If the list is empty
    if (head == NULL) {
        head = newNode;
        return head;
    }

    // Traverse to the last node
    struct Node* last = head;
    while (last->next != NULL) {
        last = last->next;
    }

    // Link the new node
    last->next = newNode;
    newNode->prev = last;

    return head;
}

// Helper function to print the list (for testing)
void printList(struct Node* head) {
    struct Node* temp = head;
    printf("List: ");
    while (temp != NULL) {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

// Example usage (optional, for demonstration)
int main() {
    struct Node* head = NULL;

    head = insertAtEnd(head, 10);
    head = insertAtEnd(head, 20);
    head = insertAtEnd(head, 30);

    printList(head); // Expected output: List: 10 <-> 20 <-> 30 <-> NULL

    // Clean up memory (important in real applications)
    struct Node* current = head;
    while (current != NULL) {
        struct Node* next = current->next;
        free(current);
        current = next;
    }

    return 0;
}
```

**Question 2:**

Explain the scenario where deleting a node in a doubly linked list is more efficient than in a singly linked list. Provide a brief pseudocode snippet.

**Answer:**

Deleting a node is more efficient in a doubly linked list when you have a direct pointer to the node to be deleted. In a singly linked list, to delete a node, you first need to find its *previous* node to update its `next` pointer. This typically requires traversing from the head.

In a doubly linked list, if you have a pointer to the node to be deleted (`nodeToDelete`), you can directly access its previous node using `nodeToDelete->prev` and its next node using `nodeToDelete->next`. This allows you to relink the surrounding nodes in O(1) time without a full traversal.

**Pseudocode Snippet (Deleting a specific node):**

```
function deleteSpecificNode(head, nodeToDelete):
    if nodeToDelete is NULL:
        return head

    // If nodeToDelete is the head node
    if nodeToDelete == head:
        head = nodeToDelete.next
        if head is not NULL:
            head.prev = NULL
        free(nodeToDelete)
        return head

    // Update next pointer of the previous node
    if nodeToDelete.prev is not NULL: // Check if it has a previous node
        nodeToDelete.prev.next = nodeToDelete.next

    // Update prev pointer of the next node
    if nodeToDelete.next is not NULL: // Check if it has a next node
        nodeToDelete.next.prev = nodeToDelete.prev

    free(nodeToDelete)
    return head
```

**Question 3:**

What is the memory overhead of a doubly linked list compared to a singly linked list, and why?

**Answer:**

The memory overhead of a doubly linked list compared to a singly linked list is that each node in a doubly linked list stores an **additional pointer** (the `prev` pointer).

*   **Singly Linked List Node:** Typically stores `data` and one `next` pointer.
*   **Doubly Linked List Node:** Stores `data`, one `next` pointer, and one `prev` pointer.

This extra `prev` pointer allows for backward traversal and more efficient deletion (when the node is known), but it increases the total memory used by the linked list, especially for large lists.

---

## 7. Important Points to Remember

*   A doubly linked list allows **bidirectional traversal**.
*   Each node has **two pointers**: `next` and `prev`.
*   **Insertion and deletion** are O(1) if you have a pointer to the node, but finding the node might still take O(n) if searching by value.
*   The **`prev` pointer** is crucial for efficient backward traversal and node deletion.
*   Doubly linked lists have **higher memory overhead** due to the extra pointer per node.
*   Be careful with **edge cases** like an empty list, deleting the head, or deleting the tail.
*   Always **deallocate memory** for deleted nodes to prevent memory leaks.

---

## 8. Alignment with Course Outcomes

*   **CO1 (Asymptotic Notations):** While not explicitly calculated here, understanding the O(1) nature of specific DLL operations (like deletion by pointer) vs. O(n) for traversal or search is a prerequisite for applying asymptotic notations.
*   **CO2 (Solving Real-World Problems):** The examples of undo/redo, browser history, and deques directly showcase how DLLs can be used to solve practical problems efficiently.
*   **CO3 (Non-linear Data Structures):** This module focuses on linear data structures.
*   **CO4 (Searching and Sorting):** While DLLs can be used in some sorting algorithms (e.g., as an auxiliary structure), their primary role here is data management and traversal, not direct sorting techniques themselves.
*   **CO5 (Hashing):** This module is independent of hashing.

This detailed study of Doubly Linked Lists equips you with the knowledge to implement and utilize this versatile data structure effectively.
