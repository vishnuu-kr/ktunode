---
title: "Singly Linked List- Operations on Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List: Self"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363e3"
status: "completed"
scrapedAt: "2026-05-23T16:20:39.403Z"
---
# DATA STRUCTURES: Module 2: Linked List: Self

## Topic: Singly Linked List - Operations on Linked List

This module focuses on understanding and performing various operations on Singly Linked Lists. We will explore how to manipulate these fundamental data structures to solve real-world problems efficiently.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the structure of a singly linked list.
*   Implement basic operations on a singly linked list.
*   Analyze the time complexity of these operations.
*   Apply singly linked lists to solve practical problems.

### Key Concepts and Definitions:

#### 1. Singly Linked List:

*   **Definition:** A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element is a separate object, called a **node**.
*   **Node Structure:** A node in a singly linked list typically consists of two parts:
    *   **Data Field:** Stores the actual value of the element.
    *   **Link/Next Pointer:** Stores the address of the next node in the sequence. The last node's link points to `NULL` (or a special sentinel value) to indicate the end of the list.

    ```
    [ Data | Next Pointer ] --> [ Data | Next Pointer ] --> ... --> [ Data | NULL ]
    ```

*   **Head Pointer:** A special pointer, usually named `head`, which points to the first node of the linked list. If the list is empty, `head` is `NULL`.

#### 2. Advantages of Linked Lists over Arrays:

*   **Dynamic Size:** Linked lists can grow or shrink dynamically during runtime, unlike arrays which have a fixed size.
*   **Efficient Insertions/Deletions:** Inserting or deleting an element in the middle of a linked list is efficient (O(1) if you have a pointer to the preceding node) as it only requires updating a few pointers. In arrays, this operation often requires shifting elements, leading to O(n) complexity.

#### 3. Disadvantages of Linked Lists compared to Arrays:

*   **Random Access:** Linked lists do not support direct random access to elements. To access an element at a specific position, you need to traverse the list from the beginning, which takes O(n) time. Arrays provide O(1) random access.
*   **Memory Overhead:** Each node in a linked list requires extra memory for the pointer, which can be significant for small data elements.
*   **Cache Locality:** Due to non-contiguous memory allocation, linked lists can have poorer cache performance compared to arrays.

### Operations on Singly Linked List:

We will explore the implementation and analysis of common operations. For each operation, we will assume a singly linked list structure defined as follows (conceptual C-like structure):

```c
struct Node {
    int data;       // Or any other data type
    struct Node* next;
};

struct Node* head = NULL; // Global or passed pointer to the start of the list
```

#### 1. Traversal (Displaying the List)

*   **Description:** Visiting each node in the linked list, typically to display its data.
*   **Algorithm:**
    1.  Start with a temporary pointer, say `current`, initialized to `head`.
    2.  While `current` is not `NULL`:
        a.  Process the data in the `current` node (e.g., print it).
        b.  Move `current` to the next node: `current = current->next`.
*   **Time Complexity:** O(n), where n is the number of nodes in the list, because each node is visited exactly once.
*   **Textbook Reference:** Horowitz, Sahni, & Freed (Chapter 2, Section 2.5 - Linked Lists) discusses traversal as a fundamental operation for accessing list elements.

#### 2. Insertion

Insertion can be done at various positions:

*   **a) Insertion at the Beginning:**
    *   **Description:** Adding a new node at the start of the list.
    *   **Algorithm:**
        1.  Create a new node and store the data in it.
        2.  Set the `next` pointer of the new node to point to the current `head`.
        3.  Update `head` to point to the new node.
    *   **Time Complexity:** O(1) because it only involves creating a node and updating a few pointers, regardless of the list's size.
    *   **Example:**
        *   Initial List: `head -> [10 | next] -> [20 | NULL]`
        *   Insert 5:
            1.  New node `[5 | ?]` created.
            2.  `new_node->next = head` (points to the node with 10).
            3.  `head = new_node`.
        *   Result: `head -> [5 | next] -> [10 | next] -> [20 | NULL]`
    *   **Textbook Reference:** Samanta D (Chapter 3, Section 3.2 - Operations on Linked Lists) provides pseudocode for insertion at the beginning.

*   **b) Insertion at the End:**
    *   **Description:** Adding a new node at the end of the list.
    *   **Algorithm:**
        1.  Create a new node and store the data in it.
        2.  If the list is empty (`head == NULL`):
            a.  Set `head` to the new node.
        3.  If the list is not empty:
            a.  Traverse the list from `head` to the last node (where `next` is `NULL`).
            b.  Set the `next` pointer of the last node to point to the new node.
        4.  Set the `next` pointer of the new node to `NULL`.
    *   **Time Complexity:** O(n) in the worst case (empty list or list with one element) because we need to traverse to the end of the list. If a `tail` pointer is maintained, this operation becomes O(1).
    *   **Example:**
        *   Initial List: `head -> [10 | next] -> [20 | NULL]`
        *   Insert 30:
            1.  New node `[30 | NULL]` created.
            2.  Traverse to the node with 20.
            3.  `last_node->next = new_node`.
        *   Result: `head -> [10 | next] -> [20 | next] -> [30 | NULL]`
    *   **Textbook Reference:** Gilberg & Forouzan (Chapter 5, Section 5.3 - Operations on Linked Lists) emphasizes the need to traverse to the last node for insertion at the end.

*   **c) Insertion After a Given Node:**
    *   **Description:** Inserting a new node after a specified existing node.
    *   **Algorithm:**
        1.  Create a new node and store the data in it.
        2.  Set the `next` pointer of the new node to point to the `next` pointer of the given node.
        3.  Set the `next` pointer of the given node to point to the new node.
    *   **Precondition:** A valid pointer to the node *after which* the insertion should occur must be available.
    *   **Time Complexity:** O(1) because we already have a pointer to the insertion point.
    *   **Example:**
        *   Initial List: `head -> [10 | next] -> [20 | next] -> [30 | NULL]`
        *   Insert 25 after the node with 20 (let `prev_node` point to the node with 20):
            1.  New node `[25 | ?]` created.
            2.  `new_node->next = prev_node->next` (points to the node with 30).
            3.  `prev_node->next = new_node`.
        *   Result: `head -> [10 | next] -> [20 | next] -> [25 | next] -> [30 | NULL]`
    *   **Textbook Reference:** Tremblay & Sorenson (Chapter 4, Section 4.3 - Linked Lists) might discuss this as a method to insert at a specific position.

*   **d) Insertion Before a Given Node:**
    *   **Description:** Inserting a new node before a specified existing node.
    *   **Algorithm:**
        1.  Create a new node and store the data in it.
        2.  If the given node is the `head`:
            a.  Insert at the beginning (as described in 2.a).
        3.  If the given node is not the `head`:
            a.  Traverse the list to find the node *preceding* the given node.
            b.  Set the `next` pointer of the preceding node to point to the new node.
            c.  Set the `next` pointer of the new node to point to the given node.
    *   **Time Complexity:** O(n) in the worst case, as we need to find the preceding node.
    *   **Example:**
        *   Initial List: `head -> [10 | next] -> [20 | next] -> [30 | NULL]`
        *   Insert 15 before the node with 20:
            1.  New node `[15 | ?]` created.
            2.  Traverse to find the node preceding 20 (which is the node with 10). Let this be `prev_node`.
            3.  `prev_node->next = new_node`.
            4.  `new_node->next = node_to_insert_before`.
        *   Result: `head -> [10 | next] -> [15 | next] -> [20 | next] -> [30 | NULL]`
    *   **Textbook Reference:** Lipschutz S. (Chapter 3, Section 3.3 - Linked Lists) might cover this operation, highlighting the search for the predecessor.

*   **e) Insertion at a Specific Position:**
    *   **Description:** Inserting a new node at a given index (position) in the list.
    *   **Algorithm:**
        1.  Create a new node.
        2.  If the position is 0 (or 1, depending on 0-based or 1-based indexing):
            a.  Insert at the beginning.
        3.  If the position is greater than 0:
            a.  Traverse the list to reach the node *before* the desired insertion position.
            b.  If the position is invalid (beyond the list's end), handle appropriately (e.g., insertion at the end or an error).
            c.  Perform insertion after the found preceding node.
    *   **Time Complexity:** O(n) in the worst case, as traversal to the specific position is required.
    *   **Textbook Reference:** Horowitz, Sahni, & Freed (Chapter 2, Section 2.5 - Linked Lists) often presents this as a general insertion method.

#### 3. Deletion

Deletion can be done based on value or position:

*   **a) Deletion of the First Node:**
    *   **Description:** Removing the first node from the list.
    *   **Algorithm:**
        1.  Check if the list is empty. If so, do nothing.
        2.  Store the `head` node in a temporary pointer, say `temp`.
        3.  Update `head` to point to the next node: `head = head->next`.
        4.  Free the memory occupied by the `temp` node.
    *   **Time Complexity:** O(1) because it only involves updating the `head` pointer and freeing memory.
    *   **Example:**
        *   Initial List: `head -> [10 | next] -> [20 | next] -> [30 | NULL]`
        *   Delete first node:
            1.  `temp = head` (points to node with 10).
            2.  `head = head->next` (points to node with 20).
            3.  Free `temp`.
        *   Result: `head -> [20 | next] -> [30 | NULL]`
    *   **Textbook Reference:** Samanta D (Chapter 3, Section 3.2 - Operations on Linked Lists) covers deletion of the first node.

*   **b) Deletion of the Last Node:**
    *   **Description:** Removing the last node from the list.
    *   **Algorithm:**
        1.  Check if the list is empty. If so, do nothing.
        2.  If the list has only one node (`head->next == NULL`):
            a.  Free the `head` node.
            b.  Set `head = NULL`.
        3.  If the list has more than one node:
            a.  Traverse the list until you reach the second-to-last node (the node whose `next` pointer points to the last node). Let this be `prev`.
            b.  Store the last node in a temporary pointer, say `last`.
            c.  Set `prev->next = NULL`.
            d.  Free the `last` node.
    *   **Time Complexity:** O(n) because traversal to the second-to-last node is required. If a `tail` pointer is maintained, this operation becomes O(1) (though we'd also need a pointer to the second-to-last node to update its `next` pointer to `NULL`).
    *   **Example:**
        *   Initial List: `head -> [10 | next] -> [20 | next] -> [30 | NULL]`
        *   Delete last node:
            1.  Traverse until the node before 30 (node with 20). Let `prev` point to node 20.
            2.  `last = prev->next` (points to node 30).
            3.  `prev->next = NULL`.
            4.  Free `last`.
        *   Result: `head -> [10 | next] -> [20 | NULL]`
    *   **Textbook Reference:** Gilberg & Forouzan (Chapter 5, Section 5.3 - Operations on Linked Lists) discusses deletion from the end, often mentioning the need for the preceding node.

*   **c) Deletion of a Given Node (by Value):**
    *   **Description:** Removing the first occurrence of a node with a specific data value.
    *   **Algorithm:**
        1.  Check if the list is empty.
        2.  If the node to be deleted is the `head`:
            a.  Call the deletion of the first node.
        3.  If the node to be deleted is not the `head`:
            a.  Traverse the list, keeping track of the previous node (`prev`) and the current node (`current`).
            b.  Stop when `current->data` matches the target value or `current` becomes `NULL`.
            c.  If a match is found:
                i.  Set `prev->next = current->next`.
                ii. Free the `current` node.
            d.  If no match is found, do nothing.
    *   **Time Complexity:** O(n) in the worst case, as we might need to traverse the entire list to find the node or its predecessor.
    *   **Example:**
        *   Initial List: `head -> [10 | next] -> [20 | next] -> [30 | next] -> [20 | NULL]`
        *   Delete node with value 20:
            1.  `head` is not 20.
            2.  Traverse: `prev` points to 10, `current` points to first 20.
            3.  Match found. `prev->next = current->next` (node 10's next becomes node 30).
            4.  Free `current` (the first node with 20).
        *   Result: `head -> [10 | next] -> [30 | next] -> [20 | NULL]`
    *   **Textbook Reference:** Horowitz, Sahni, & Freed (Chapter 2, Section 2.5 - Linked Lists) typically provides a detailed algorithm for deleting a node with a specified value.

*   **d) Deletion at a Specific Position:**
    *   **Description:** Removing the node at a given index.
    *   **Algorithm:**
        1.  Check if the list is empty.
        2.  If the position is 0 (or 1):
            a.  Call the deletion of the first node.
        3.  If the position is greater than 0:
            a.  Traverse the list to reach the node *before* the node to be deleted (at `position - 1`). Let this be `prev`.
            b.  If `prev` or `prev->next` is `NULL`, the position is invalid.
            c.  Store the node to be deleted in `temp = prev->next`.
            d.  Set `prev->next = temp->next`.
            e.  Free the `temp` node.
    *   **Time Complexity:** O(n) in the worst case, as traversal to the desired position is required.
    *   **Textbook Reference:** Tremblay & Sorenson (Chapter 4, Section 4.3 - Linked Lists) may also describe deletion by position.

#### 4. Searching

*   **Description:** Finding a node with a specific data value.
*   **Algorithm:**
    1.  Start with a temporary pointer, `current`, initialized to `head`.
    2.  While `current` is not `NULL`:
        a.  If `current->data` matches the search value, return `current` (or `true`, or the position).
        b.  Move `current` to the next node: `current = current->next`.
    3.  If the loop finishes without finding the value, return `NULL` (or `false`).
*   **Time Complexity:**
    *   **Best Case:** O(1) (if the element is the first node).
    *   **Worst Case:** O(n) (if the element is the last node or not present).
    *   **Average Case:** O(n).
*   **Example:**
    *   Initial List: `head -> [10 | next] -> [20 | next] -> [30 | NULL]`
    *   Search for 20:
        1.  `current` starts at 10. `10 != 20`.
        2.  `current` moves to 20. `20 == 20`. Found! Return the node.
*   **Textbook Reference:** Aho, Hopcroft, & Ullman (Chapter 1, Section 1.3 - Lists) discuss sequential searching as a fundamental operation on lists.

#### 5. Reversing a Linked List

*   **Description:** Reordering the nodes so that the list's sequence is reversed.
*   **Algorithm (Iterative):**
    1.  Initialize three pointers: `prev = NULL`, `current = head`, `next_node = NULL`.
    2.  While `current` is not `NULL`:
        a.  Store the next node: `next_node = current->next`.
        b.  Reverse the current node's pointer: `current->next = prev`.
        c.  Move `prev` and `current` one step forward: `prev = current`, `current = next_node`.
    3.  After the loop, `prev` will point to the new `head`. Set `head = prev`.
*   **Time Complexity:** O(n) because each node is visited once.
*   **Space Complexity:** O(1) for the iterative approach.
*   **Example:**
    *   Initial List: `head -> [10 | next] -> [20 | next] -> [30 | NULL]`
    *   Reverse:
        *   Iteration 1: `prev=NULL`, `curr=10`, `next=20`. `10->next=NULL`, `prev=10`, `curr=20`. List: `NULL <- [10]   [20 | next] -> [30 | NULL]`
        *   Iteration 2: `prev=10`, `curr=20`, `next=30`. `20->next=10`, `prev=20`, `curr=30`. List: `NULL <- [10] <- [20]   [30 | NULL]`
        *   Iteration 3: `prev=20`, `curr=30`, `next=NULL`. `30->next=20`, `prev=30`, `curr=NULL`. List: `NULL <- [10] <- [20] <- [30]`
    *   New `head` is `prev` (node 30).
*   **Textbook Reference:** Brass Peter (Chapter 3, Section 3.2 - Linked Lists) might discuss reversal as an advanced operation. Lipschutz S. (Chapter 3, Section 3.4 - Linked List Reversal) is a good source for this.

#### 6. Counting Nodes

*   **Description:** Determining the total number of nodes in the list.
*   **Algorithm:**
    1.  Initialize `count = 0`.
    2.  Start with `current = head`.
    3.  While `current` is not `NULL`:
        a.  Increment `count`.
        b.  Move `current` to the next node.
    4.  Return `count`.
*   **Time Complexity:** O(n) because each node is visited once.
*   **Textbook Reference:** Samanta D (Chapter 3, Section 3.2 - Operations on Linked Lists) includes counting as a basic traversal-based operation.

### Course Outcome Alignment:

*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2)**
    *   This topic directly addresses CO1 by requiring the analysis of time complexity for various linked list operations (O(1), O(n)). Students learn to express performance using Big-O notation.

*   **CO2: Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues. (Knowledge Level: K3)**
    *   This topic provides the foundation for CO2. Understanding linked list operations allows students to implement solutions for problems that benefit from dynamic resizing and efficient insertions/deletions, such as managing a playlist, implementing a task scheduler, or managing a system's memory.

*   **CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications. (Knowledge Level: K3)**
    *   While this topic focuses on linear structures, the concepts of nodes and pointers are foundational for understanding non-linear structures like trees and graphs, which are covered in later modules.

*   **CO4: Apply and compare various techniques for searching and sorting. (Knowledge Level: K3)**
    *   This topic covers the "searching" aspect. Students will learn how searching is performed in a linked list and compare its efficiency (O(n)) with other data structures like arrays (O(1) for sorted arrays using binary search).

### Important Points to Remember:

*   **NULL Pointer:** Always check for `NULL` pointers before accessing data or the `next` field of a node to avoid segmentation faults.
*   **Memory Management:** Remember to `free` memory when nodes are deleted to prevent memory leaks.
*   **Head Pointer:** The `head` pointer is crucial for accessing the list. If `head` is lost, the entire list is lost.
*   **Edge Cases:** Pay special attention to edge cases like empty lists, single-node lists, and operations at the beginning/end of the list.
*   **Tail Pointer:** Maintaining a `tail` pointer can optimize insertion at the end to O(1).
*   **Recursion vs. Iteration:** Some operations, like reversal, can be implemented iteratively or recursively. Understand the trade-offs (e.g., recursion might use more stack space).

### Practice Questions & Exercises:

**1. Insertion & Deletion Scenario:**

*   **Question:** Given a singly linked list representing a queue (where `head` is the front and the last node is the rear), implement functions to:
    *   `enqueue(data)`: Add an element to the rear.
    *   `dequeue()`: Remove and return the element from the front.
    *   If the list is `10 -> 20 -> 30 -> NULL` (10 is front), and we `enqueue(40)` and then `dequeue()`, what is the resulting list and what is dequeued?
*   **Answer:**
    *   After `enqueue(40)`: `10 -> 20 -> 30 -> 40 -> NULL`.
    *   `dequeue()` removes 10.
    *   Resulting list: `20 -> 30 -> 40 -> NULL`. Dequeued value: 10.
    *   **Complexity Analysis:** `enqueue` (if using a tail pointer) is O(1). `dequeue` is O(1).

**2. Searching and Counting:**

*   **Question:** Write a function `countOccurrences(head, value)` that counts how many times a given `value` appears in a singly linked list.
*   **Answer:**
    ```c
    int countOccurrences(struct Node* head, int value) {
        int count = 0;
        struct Node* current = head;
        while (current != NULL) {
            if (current->data == value) {
                count++;
            }
            current = current->next;
        }
        return count;
    }
    ```
    *   **Complexity Analysis:** O(n).

**3. Reversal:**

*   **Question:** Write a function `reverseList(head)` that reverses a singly linked list and returns the new head.
*   **Answer:** (See the iterative algorithm described above).
    ```c
    struct Node* reverseList(struct Node* head) {
        struct Node *prev = NULL;
        struct Node *current = head;
        struct Node *next_node = NULL;

        while (current != NULL) {
            next_node = current->next; // Store next
            current->next = prev;      // Reverse current node's pointer
            prev = current;            // Move pointers one position ahead
            current = next_node;
        }
        head = prev; // Update head to the new first node
        return head;
    }
    ```
    *   **Complexity Analysis:** O(n) time, O(1) space.

**4. Insertion at a Specific Position:**

*   **Question:** Implement a function `insertAtPosition(head, data, position)` that inserts a new node with `data` at the given `position` (0-indexed). Handle invalid positions.
*   **Answer:**
    ```c
    struct Node* insertAtPosition(struct Node* head, int data, int position) {
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = data;
        newNode->next = NULL;

        if (position == 0) { // Insert at beginning
            newNode->next = head;
            return newNode; // New node is the new head
        }

        struct Node* current = head;
        // Traverse to the node *before* the insertion point
        for (int i = 0; current != NULL && i < position - 1; i++) {
            current = current->next;
        }

        // If position is more than number of nodes, or list is empty and position > 0
        if (current == NULL) {
            printf("Position out of bounds.\n");
            free(newNode); // Free allocated memory
            return head; // Return original head
        }

        newNode->next = current->next;
        current->next = newNode;
        return head;
    }
    ```
    *   **Complexity Analysis:** O(n) due to traversal.

**5. Deletion by Value:**

*   **Question:** Implement a function `deleteNodeByValue(head, value)` that deletes the first occurrence of a node with the given `value`.
*   **Answer:**
    ```c
    struct Node* deleteNodeByValue(struct Node* head, int value) {
        struct Node* temp = head;
        struct Node* prev = NULL;

        // If head node itself holds the value to be deleted
        if (temp != NULL && temp->data == value) {
            head = temp->next; // Changed head
            free(temp);        // Free old head
            return head;
        }

        // Search for the key to be deleted, keep track of the previous node
        while (temp != NULL && temp->data != value) {
            prev = temp;
            temp = temp->next;
        }

        // If key was not present in linked list
        if (temp == NULL) {
            return head; // Value not found
        }

        // Unlink the node from linked list
        prev->next = temp->next;
        free(temp); // Free memory

        return head;
    }
    ```
    *   **Complexity Analysis:** O(n).

This comprehensive set of notes covers the fundamental operations on singly linked lists, their implementation, complexity, and relevance to course outcomes, supported by textbook references and practice exercises.
