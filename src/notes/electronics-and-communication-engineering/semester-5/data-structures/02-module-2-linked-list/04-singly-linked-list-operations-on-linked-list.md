---
title: "Singly Linked List- Operations on Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea0b"
status: "completed"
scrapedAt: "2026-05-23T17:55:04.726Z"
---
# DATA STRUCTURES - Module 2: Linked List - Singly Linked List Operations

## Introduction to Singly Linked Lists

A singly linked list is a linear data structure where elements are stored in nodes. Each node contains two parts:
1.  **Data:** The actual value stored in the node.
2.  **Next Pointer:** A reference (or pointer) to the next node in the sequence. The last node's next pointer typically points to `NULL` (or `nullptr` in C++).

The list is accessed through a pointer to the **first node**, often called the `head`.

**Key Concepts:**

*   **Node:** The basic building block of a linked list, containing data and a pointer to the next node.
*   **Head:** A pointer to the first node in the linked list. If the list is empty, `head` is `NULL`.
*   **Tail:** The last node in the linked list. Its `next` pointer is `NULL`.
*   **NULL/nullptr:** A special value indicating the end of the list or an empty pointer.

**Why use Linked Lists?**

*   **Dynamic Size:** Unlike arrays, linked lists can grow or shrink dynamically during runtime.
*   **Efficient Insertions/Deletions:** Inserting or deleting elements in the middle of a linked list is generally more efficient than in arrays, as it only requires updating pointers, not shifting elements.

**Textbook References:**

*   **Horowitz, Sahni, & Anderson-Freed:** Chapter 6 introduces linked lists, covering their definition, representation, and basic operations.
*   **Samanta:** Chapter 4 provides a comprehensive overview of singly linked lists, their structure, and fundamental operations.

---

## Operations on Singly Linked Lists

This section details the fundamental operations performed on a singly linked list. For each operation, we'll consider its implementation, time complexity, and relevant examples.

### 1. Traversing a Linked List

**Description:** Visiting each node in the linked list sequentially from the head to the tail.

**Algorithm:**
1.  Initialize a temporary pointer, say `current`, to the `head` of the list.
2.  While `current` is not `NULL`:
    *   Process the data in `current` (e.g., print it).
    *   Move `current` to the next node: `current = current->next`.

**Example:** Printing the elements of a list `10 -> 20 -> 30 -> NULL`.

```
current = head (points to node with 10)
print 10
current = current->next (points to node with 20)
print 20
current = current->next (points to node with 30)
print 30
current = current->next (points to NULL)
Stop.
```

**Time Complexity:** O(n), where 'n' is the number of nodes in the list, as each node is visited once.
**Space Complexity:** O(1), as only a single temporary pointer is used.

**Reference:** Horowitz, Sahni, & Anderson-Freed (Chapter 6.2) provides the basic traversal algorithm.

---

### 2. Inserting a Node

Insertion can occur at the beginning, end, or in the middle of the list.

#### 2.1 Insertion at the Beginning

**Description:** Adding a new node at the front of the list.

**Algorithm:**
1.  Create a new node with the given data.
2.  Set the `next` pointer of the new node to point to the current `head`.
3.  Update the `head` of the list to point to the new node.

**Example:** Inserting `5` into `10 -> 20 -> 30 -> NULL`.
*   Initial: `head -> 10 -> 20 -> 30 -> NULL`
*   New node: `newNode(5)`
*   `newNode->next = head` (newNode points to 10)
*   `head = newNode` (head now points to 5)
*   Result: `head -> 5 -> 10 -> 20 -> 30 -> NULL`

**Time Complexity:** O(1), as it involves a fixed number of pointer manipulations.
**Space Complexity:** O(1), for the new node.

**Reference:** Samanta (Chapter 4.2) details insertion at the beginning.

#### 2.2 Insertion at the End

**Description:** Adding a new node at the end of the list.

**Algorithm:**
1.  Create a new node with the given data.
2.  If the list is empty (`head == NULL`):
    *   Set `head = newNode`.
3.  Else:
    *   Traverse the list to find the last node (where `current->next == NULL`).
    *   Set the `next` pointer of the last node to `newNode`.
    *   Set the `next` pointer of `newNode` to `NULL`.

**Example:** Inserting `40` into `10 -> 20 -> 30 -> NULL`.
*   Initial: `head -> 10 -> 20 -> 30 -> NULL`
*   New node: `newNode(40)`
*   Traverse to find the last node (30).
*   `30->next = newNode` (30 now points to 40)
*   `newNode->next = NULL` (40 points to NULL)
*   Result: `head -> 10 -> 20 -> 30 -> 40 -> NULL`

**Time Complexity:** O(n), because in the worst case, we need to traverse the entire list to find the last node. If a `tail` pointer is maintained, this operation becomes O(1).
**Space Complexity:** O(1), for the new node.

**Reference:** Gilberg & Forouzan (Chapter 7.3) discusses inserting at the end, highlighting the potential need for a `tail` pointer for efficiency.

#### 2.3 Insertion in the Middle (After a Given Node)

**Description:** Adding a new node after a specified existing node.

**Algorithm:**
1.  Create a new node with the given data.
2.  Let `prevNode` be the node after which the new node is to be inserted.
3.  Set the `next` pointer of the new node to point to `prevNode->next`.
4.  Set the `next` pointer of `prevNode` to point to the new node.

**Example:** Inserting `25` after node `20` in `10 -> 20 -> 30 -> NULL`.
*   Initial: `head -> 10 -> 20 -> 30 -> NULL`
*   New node: `newNode(25)`
*   `prevNode` is the node with data `20`.
*   `newNode->next = prevNode->next` (newNode points to 30)
*   `prevNode->next = newNode` (20 now points to 25)
*   Result: `head -> 10 -> 20 -> 25 -> 30 -> NULL`

**Precondition:** The `prevNode` must exist in the list. If `prevNode` is `NULL`, this operation is effectively insertion at the beginning.

**Time Complexity:** O(1), given that the `prevNode` is known. If we need to find `prevNode` first (e.g., by its data value), it becomes O(n).
**Space Complexity:** O(1), for the new node.

**Reference:** Lipschuts (Chapter 3) covers various insertion scenarios, including insertion after a specific node.

---

### 3. Deleting a Node

Deletion can also occur at the beginning, end, or in the middle of the list.

#### 3.1 Deletion at the Beginning

**Description:** Removing the first node from the list.

**Algorithm:**
1.  If the list is empty (`head == NULL`), do nothing.
2.  Create a temporary pointer, `temp`, that points to the `head`.
3.  Update `head` to point to the next node: `head = head->next`.
4.  Free the memory occupied by the node pointed to by `temp`.

**Example:** Deleting the first node from `10 -> 20 -> 30 -> NULL`.
*   Initial: `head -> 10 -> 20 -> 30 -> NULL`
*   `temp = head` (temp points to 10)
*   `head = head->next` (head now points to 20)
*   Free `temp` (node with 10 is removed)
*   Result: `head -> 20 -> 30 -> NULL`

**Time Complexity:** O(1), as it involves a fixed number of pointer manipulations and memory deallocation.
**Space Complexity:** O(1).

**Reference:** Horowitz, Sahni, & Anderson-Freed (Chapter 6.3) describes deletion at the head.

#### 3.2 Deletion at the End

**Description:** Removing the last node from the list.

**Algorithm:**
1.  If the list is empty (`head == NULL`), do nothing.
2.  If the list has only one node (`head->next == NULL`):
    *   Free `head`.
    *   Set `head = NULL`.
3.  Else:
    *   Traverse the list using two pointers: `current` and `prev`. `current` points to the current node, and `prev` points to the node before `current`.
    *   Stop when `current->next == NULL` (meaning `current` is the last node).
    *   Set `prev->next = NULL` (disconnecting the last node).
    *   Free the memory occupied by `current`.

**Example:** Deleting the last node from `10 -> 20 -> 30 -> NULL`.
*   Initial: `head -> 10 -> 20 -> 30 -> NULL`
*   `prev = NULL`, `current = head` (points to 10)
*   Loop:
    *   `prev = current` (prev points to 10), `current = current->next` (current points to 20)
    *   `prev = current` (prev points to 20), `current = current->next` (current points to 30)
    *   `current->next` is `NULL`, loop terminates.
*   `prev->next = NULL` (20->next becomes NULL)
*   Free `current` (node with 30 is removed)
*   Result: `head -> 10 -> 20 -> NULL`

**Time Complexity:** O(n), as we need to traverse the list to find the second-to-last node. If a `tail` pointer is maintained along with a pointer to the second-to-last node, this operation can be O(1).
**Space Complexity:** O(1).

**Reference:** Samanta (Chapter 4.3) covers the process of deleting the last node.

#### 3.3 Deletion of a Specific Node (by Value)

**Description:** Removing the first occurrence of a node with a given data value.

**Algorithm:**
1.  If the list is empty (`head == NULL`), do nothing.
2.  If the node to be deleted is the head node (`head->data == data`):
    *   Store `head` in a temporary pointer `temp`.
    *   Update `head` to `head->next`.
    *   Free `temp`.
3.  Else:
    *   Traverse the list using two pointers: `current` and `prev`. `current` points to the current node, and `prev` points to the node before `current`.
    *   Iterate until `current` is `NULL` or `current->data == data`.
    *   If `current` is `NULL` (data not found), do nothing.
    *   If `current->data == data`:
        *   Set `prev->next = current->next` (bypass the `current` node).
        *   Free `current`.

**Example:** Deleting node with data `20` from `10 -> 20 -> 30 -> NULL`.
*   Initial: `head -> 10 -> 20 -> 30 -> NULL`
*   `prev = NULL`, `current = head` (points to 10)
*   Loop:
    *   `current->data != 20`. `prev = current` (prev points to 10), `current = current->next` (current points to 20).
    *   `current->data == 20`. Loop terminates.
*   `prev->next = current->next` (10->next becomes 30)
*   Free `current` (node with 20 is removed)
*   Result: `head -> 10 -> 30 -> NULL`

**Time Complexity:** O(n) in the worst case, as we might need to traverse the entire list to find the node.
**Space Complexity:** O(1).

**Reference:** Aho, Hopcroft, & Ullman (Chapter 2.1) discusses list manipulation, including deletion of a specific element.

---

### 4. Searching for a Node

**Description:** Finding if a node with a specific data value exists in the linked list.

**Algorithm:**
1.  If the list is empty (`head == NULL`), return `NULL` (or false).
2.  Initialize a temporary pointer, `current`, to the `head`.
3.  While `current` is not `NULL`:
    *   If `current->data == search_value`, return `current` (or true).
    *   Move `current` to the next node: `current = current->next`.
4.  If the loop finishes without finding the value, return `NULL` (or false).

**Example:** Searching for `25` in `10 -> 20 -> 30 -> NULL`.
*   `current = head` (points to 10). `10 != 25`.
*   `current = current->next` (points to 20). `20 != 25`.
*   `current = current->next` (points to 30). `30 != 25`.
*   `current = current->next` (points to NULL). Loop terminates.
*   Return `NULL` (value not found).

**Example:** Searching for `20` in `10 -> 20 -> 30 -> NULL`.
*   `current = head` (points to 10). `10 != 20`.
*   `current = current->next` (points to 20). `20 == 20`.
*   Return `current` (pointer to node with 20).

**Time Complexity:** O(n) in the worst case, as we might need to scan the entire list.
**Space Complexity:** O(1).

**Reference:** Tremblay & Sorenson (Chapter 5) explains search operations on linked lists.

---

### 5. Reversing a Linked List

**Description:** Reversing the order of nodes in a singly linked list.

**Algorithm (Iterative Approach):**
1.  Initialize three pointers: `prev = NULL`, `current = head`, `next = NULL`.
2.  While `current` is not `NULL`:
    *   Store the next node: `next = current->next`.
    *   Reverse the current node's pointer: `current->next = prev`.
    *   Move `prev` and `current` one step forward: `prev = current`, `current = next`.
3.  After the loop, `prev` will point to the new `head`. Update `head = prev`.

**Example:** Reversing `10 -> 20 -> 30 -> NULL`.
*   Initial: `head -> 10 -> 20 -> 30 -> NULL`, `prev = NULL`, `current = 10`
*   Iteration 1:
    *   `next = 20`
    *   `10->next = NULL`
    *   `prev = 10`, `current = 20`
*   Iteration 2:
    *   `next = 30`
    *   `20->next = 10`
    *   `prev = 20`, `current = 30`
*   Iteration 3:
    *   `next = NULL`
    *   `30->next = 20`
    *   `prev = 30`, `current = NULL`
*   Loop ends. `head = prev` (head becomes 30).
*   Result: `head -> 30 -> 20 -> 10 -> NULL`

**Time Complexity:** O(n), as each node is visited once.
**Space Complexity:** O(1).

**Reference:** Horowitz, Sahni, & Anderson-Freed (Chapter 6.7) provides a detailed explanation of reversing a linked list.

---

### 6. Merging Two Sorted Linked Lists

**Description:** Combining two sorted singly linked lists into a single sorted linked list.

**Algorithm:**
1.  Create a dummy node `dummyHead` to simplify the merging process.
2.  Initialize `current1` to `head1` and `current2` to `head2`.
3.  Initialize a `tail` pointer to `dummyHead`.
4.  While `current1` is not `NULL` AND `current2` is not `NULL`:
    *   If `current1->data <= current2->data`:
        *   `tail->next = current1`
        *   `current1 = current1->next`
    *   Else:
        *   `tail->next = current2`
        *   `current2 = current2->next`
    *   Move `tail` forward: `tail = tail->next`.
5.  If `current1` is not `NULL`, append the remaining part of the first list: `tail->next = current1`.
6.  If `current2` is not `NULL`, append the remaining part of the second list: `tail->next = current2`.
7.  The merged list starts from `dummyHead->next`.

**Example:** Merging `10 -> 20 -> 30 -> NULL` and `5 -> 15 -> 25 -> NULL`.

*   `dummyHead -> NULL`
*   `current1 = 10`, `current2 = 5`, `tail = dummyHead`
*   `5 <= 10`: `tail->next = 5`, `current2 = 15`, `tail = 5`
*   `10 <= 15`: `tail->next = 10`, `current1 = 20`, `tail = 10`
*   `15 <= 20`: `tail->next = 15`, `current2 = 25`, `tail = 15`
*   `20 <= 25`: `tail->next = 20`, `current1 = 30`, `tail = 20`
*   `25 <= 30`: `tail->next = 25`, `current2 = NULL`, `tail = 25`
*   `current2` is NULL. Append remaining `current1`: `tail->next = 30`.
*   Result: `dummyHead -> 5 -> 10 -> 15 -> 20 -> 25 -> 30 -> NULL`. Return `dummyHead->next`.

**Time Complexity:** O(m + n), where 'm' and 'n' are the lengths of the two lists, as each node is visited exactly once.
**Space Complexity:** O(1) (excluding the space for the new list itself, which is inherent). If creating a new list structure, it would be O(m+n).

**Reference:** Samanta (Chapter 4.5) provides a detailed walkthrough of merging sorted linked lists.

---

### 7. Concatenating Two Linked Lists

**Description:** Appending one linked list to the end of another.

**Algorithm:**
1.  If the first list is empty (`head1 == NULL`), the result is the second list (`head2`).
2.  If the second list is empty (`head2 == NULL`), the result is the first list (`head1`).
3.  Traverse the first list to find its last node.
4.  Set the `next` pointer of the last node of the first list to `head2`.
5.  The head of the concatenated list remains `head1`.

**Example:** Concatenating `10 -> 20 -> NULL` and `30 -> 40 -> NULL`.
*   List 1: `head1 -> 10 -> 20 -> NULL`
*   List 2: `head2 -> 30 -> 40 -> NULL`
*   Find last node of List 1 (node with 20).
*   Set `20->next = head2` (which is 30).
*   Result: `head1 -> 10 -> 20 -> 30 -> 40 -> NULL`

**Time Complexity:** O(n), where 'n' is the length of the first list, due to traversal to find the last node. If `tail1` is available, it's O(1).
**Space Complexity:** O(1).

**Reference:** Gilberg & Forouzan (Chapter 7.3) discusses concatenation as a list operation.

---

## Important Points to Remember

*   **Pointer Management:** The most crucial aspect of linked list operations is correct pointer manipulation. A single incorrect pointer update can break the list or lead to memory leaks.
*   **Handling Empty Lists:** Always consider the case where the list is empty (`head == NULL`) or a specific node pointer is `NULL` before dereferencing it.
*   **Memory Management:** In C/C++, remember to `free` (or `delete`) memory for nodes that are removed to prevent memory leaks.
*   **Sentinel/Dummy Nodes:** Using a dummy node (especially for operations like merging or insertion at the head) can simplify the code by avoiding special case handling for an empty list or the first node.
*   **Tail Pointer:** Maintaining a `tail` pointer can optimize operations like insertion at the end from O(n) to O(1).
*   **NULL Termination:** Ensure the last node's `next` pointer is always `NULL` to signify the end of the list.

---

## Practice Questions and Exercises

**Q1:** Write a C function to insert a node at the end of a singly linked list. Assume the linked list is represented by a `head` pointer.
**Answer:** (See Section 2.2: Insertion at the End)

```c
struct Node {
    int data;
    struct Node* next;
};

void insertAtEnd(struct Node** headRef, int newData) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\n");
        return;
    }
    newNode->data = newData;
    newNode->next = NULL;

    if (*headRef == NULL) {
        *headRef = newNode;
        return;
    }

    struct Node* last = *headRef;
    while (last->next != NULL) {
        last = last->next;
    }
    last->next = newNode;
}
```

**Q2:** Given the head of a singly linked list, write a function to delete the node with a specific data value.
**Answer:** (See Section 3.3: Deletion of a Specific Node)

**Q3:** Implement a function to reverse a singly linked list iteratively.
**Answer:** (See Section 5: Reversing a Linked List)

**Q4:** Write a function to merge two sorted singly linked lists.
**Answer:** (See Section 6: Merging Two Sorted Linked Lists)

**Q5:** What is the time complexity of traversing a singly linked list? What about insertion at the beginning?
**Answer:**
*   Traversal: O(n)
*   Insertion at the beginning: O(1)

---

## Relation to Course Outcomes (COs)

*   **CO1: Compare performance of algorithms using asymptotic notations:** This module focuses on understanding the time and space complexity of various linked list operations (traversal, insertion, deletion, search, reverse, merge), directly addressing CO1. For example, comparing O(n) for insertion at the end vs. O(1) for insertion at the beginning highlights performance differences.
*   **CO2: Solve real-world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues:** Linked lists are fundamental. Understanding their operations allows students to solve problems where dynamic sizing and efficient insertions/deletions are required. Examples include implementing dynamic lists for managing user accounts, transaction histories, or task queues where elements are frequently added or removed.
*   **CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications:** While this module focuses on linear structures, the concepts of nodes and pointers are foundational for understanding more complex nonlinear structures like trees and graphs, which often use similar node-pointer mechanisms internally.
*   **CO4: Apply and compare various techniques for searching and sorting:** Searching in a linked list is a direct application of search techniques (O(n)). While linked lists aren't ideal for most sorting algorithms (compared to arrays), understanding traversal and pointer manipulation is a prerequisite for more advanced sorting algorithm implementations on other data structures.
*   **CO5: Apply appropriate hash function to store and access a given dataset:** Hashing often uses linked lists to handle collisions (e.g., separate chaining). Understanding how to traverse and manipulate linked lists is essential for implementing hash tables effectively.

---

This concludes the study notes for Singly Linked List Operations. Remember to practice implementing these operations to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
