---
title: "Circular Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea0d"
status: "completed"
scrapedAt: "2026-05-23T17:55:06.150Z"
---
# DATA STRUCTURES - Module 2: Linked List - Circular Linked List

---

## 1. Introduction to Circular Linked Lists

**What is a Circular Linked List?**

A circular linked list is a variation of a singly or doubly linked list where the *last node's next pointer points back to the first node (head)*, forming a closed loop. In a standard linked list, the last node's next pointer is NULL.

**Key Characteristics:**

*   **No NULL Termination:** Unlike traditional linked lists, there is no NULL pointer at the end. The list effectively wraps around.
*   **Traversal:** Any node can be a starting point for traversal. To traverse the entire list, you start from a node and keep moving to the next until you return to the starting node.
*   **Head Pointer:** Typically, a pointer to *any* node in the list is maintained. This pointer can be to the first node (head) or any arbitrary node. However, maintaining a pointer to the *last* node is often more convenient for certain operations.

**Why use Circular Linked Lists?**

*   **Efficient access to the first node:** From the last node, you can directly access the first node.
*   **Round-robin scheduling:** Useful for applications like round-robin CPU scheduling, where processes are processed in a cyclical manner.
*   **Traversing all elements:** Allows for straightforward traversal of all elements without needing a separate flag to detect the end.
*   **Applications:** Implementing queues, managing game turns, managing memory buffers.

---

## 2. Types of Circular Linked Lists

Circular linked lists can be implemented based on singly or doubly linked lists.

### 2.1. Circular Singly Linked List

*   **Structure:** Each node contains data and a pointer to the *next* node. The last node's `next` pointer points to the first node.
*   **Node Structure (C-like pseudocode):**

    ```c
    struct Node {
        DataType data;
        struct Node* next;
    };
    ```

*   **Head Pointer:** Often, a pointer to the *last* node is maintained. Let's call this `last`. The head node can then be accessed as `last->next`.

### 2.2. Circular Doubly Linked List

*   **Structure:** Each node contains data, a pointer to the *next* node, and a pointer to the *previous* node. The last node's `next` pointer points to the first node, and the first node's `previous` pointer points to the last node.
*   **Node Structure (C-like pseudocode):**

    ```c
    struct Node {
        DataType data;
        struct Node* next;
        struct Node* prev;
    };
    ```

*   **Head Pointer:** Similar to the singly linked list, maintaining a pointer to either the first or last node is common.

---

## 3. Operations on Circular Linked Lists

Let's focus on common operations for a **Circular Singly Linked List**, assuming we maintain a pointer to the `last` node.

### 3.1. Node Creation

A function to create a new node.

**Pseudocode:**

```
function createNode(data):
  newNode = allocate memory for a Node
  newNode.data = data
  newNode.next = NULL // Will be set later
  return newNode
```

### 3.2. Insertion

#### 3.2.1. Inserting at the Beginning

*   **Logic:**
    1.  Create a new node.
    2.  If the list is empty (`last` is NULL):
        *   Set `last` to the new node.
        *   Set `new_node.next` to `new_node` (forms a loop of one node).
    3.  If the list is not empty:
        *   Set `new_node.next` to `last.next` (points to the current head).
        *   Set `last.next` to `new_node` (updates the last node's next pointer to point to the new head).
        *   The `last` pointer remains unchanged.

*   **Pseudocode:**

    ```
    function insertAtBeginning(last, data):
      newNode = createNode(data)
      if last is NULL: // List is empty
        last = newNode
        newNode.next = newNode
      else: // List is not empty
        newNode.next = last.next // New node points to the old head
        last.next = newNode     // Last node points to the new node
      return last
    ```

#### 3.2.2. Inserting at the End

*   **Logic:**
    1.  Create a new node.
    2.  If the list is empty (`last` is NULL):
        *   Set `last` to the new node.
        *   Set `new_node.next` to `new_node`.
    3.  If the list is not empty:
        *   Set `new_node.next` to `last.next` (the new node points to the current head).
        *   Set `last.next` to `new_node` (the current last node points to the new node).
        *   Update `last` to point to `new_node`.

*   **Pseudocode:**

    ```
    function insertAtEnd(last, data):
      newNode = createNode(data)
      if last is NULL: // List is empty
        last = newNode
        newNode.next = newNode
      else: // List is not empty
        newNode.next = last.next // New node points to the head
        last.next = newNode     // Old last node points to the new node
        last = newNode          // Update last to the new node
      return last
    ```

#### 3.2.3. Inserting After a Given Node

*   **Logic:**
    1.  Create a new node.
    2.  If the list is empty, this operation is not meaningful in the context of inserting *after* a node. Handle as an error or treat as insert at beginning/end.
    3.  If the list is not empty and `givenNode` is valid:
        *   Set `new_node.next` to `givenNode.next`.
        *   Set `givenNode.next` to `new_node`.
        *   If `givenNode` was the `last` node, update `last` to `new_node`.

*   **Pseudocode:**

    ```
    function insertAfterNode(last, givenNode, data):
      if givenNode is NULL:
        print "Given node cannot be NULL."
        return last

      newNode = createNode(data)
      newNode.next = givenNode.next
      givenNode.next = newNode

      if givenNode == last: // If we inserted after the last node
        last = newNode
      return last
    ```

---

### 3.3. Deletion

*   **Important Note:** Deleting the *only* node in the list requires special handling.

#### 3.3.1. Deleting a Node with a Given Value

*   **Logic:**
    1.  Handle the empty list case.
    2.  If the node to be deleted is the *only* node:
        *   Free the node.
        *   Set `last` to NULL.
    3.  If the node to be deleted is the *head* node (i.e., `last.next` is the node to delete):
        *   Find the *previous* node (which will be `last`).
        *   Set `last.next` to `last.next.next`.
        *   Free the original head node.
    4.  If the node to be deleted is *not* the head node:
        *   Traverse the list to find the node *before* the one to be deleted (let's call it `prevNode`).
        *   Set `prevNode.next` to `nodeToDelete.next`.
        *   Free `nodeToDelete`.
        *   If the deleted node was the `last` node, update `last` to `prevNode`.

*   **Pseudocode (assuming we search for the node to delete):**

    ```
    function deleteNode(last, value):
      if last is NULL:
        print "List is empty."
        return NULL

      // Case 1: Only one node in the list
      if last.next == last: // Points to itself
        if last.data == value:
          free(last)
          return NULL // List is now empty
        else:
          print "Value not found."
          return last

      // Case 2: Node to be deleted is the head
      if last.next.data == value:
        nodeToDelete = last.next
        last.next = nodeToDelete.next // Update last to point to the next node
        free(nodeToDelete)
        return last

      // Case 3: Node to be deleted is somewhere in the middle or end
      prevNode = last
      currentNode = last.next

      while currentNode != last:
        if currentNode.data == value:
          prevNode.next = currentNode.next
          free(currentNode)
          // If the deleted node was the last node, update last
          if currentNode == last:
            last = prevNode
          return last
        prevNode = currentNode
        currentNode = currentNode.next

      // If the loop finishes and we haven't returned, the value was not found
      print "Value not found."
      return last
    ```

#### 3.3.2. Deleting the Head Node

*   **Logic:** This is a specific case of deleting a node with a given value, where the value is known to be at the head.
    1.  Handle empty list.
    2.  Handle list with one node (delete the only node, `last` becomes NULL).
    3.  If multiple nodes:
        *   Store the head node (`last.next`).
        *   Update `last.next` to point to the second node (`last.next.next`).
        *   Free the original head node.

*   **Pseudocode:**

    ```
    function deleteHead(last):
      if last is NULL:
        print "List is empty."
        return NULL

      // Case 1: Only one node
      if last.next == last:
        free(last)
        return NULL

      // Case 2: Multiple nodes
      nodeToDelete = last.next
      last.next = nodeToDelete.next
      free(nodeToDelete)
      return last
    ```

#### 3.3.3. Deleting the Last Node

*   **Logic:**
    1.  Handle empty list.
    2.  Handle list with one node (delete the only node, `last` becomes NULL).
    3.  If multiple nodes:
        *   Traverse the list to find the *second to last* node. The second to last node is the one whose `next` pointer points to the `last` node.
        *   Let `secondLastNode` be this node.
        *   Set `secondLastNode.next` to `last.next` (which is the head).
        *   Free the `last` node.
        *   Update `last` to `secondLastNode`.

*   **Pseudocode:**

    ```
    function deleteLast(last):
      if last is NULL:
        print "List is empty."
        return NULL

      // Case 1: Only one node
      if last.next == last:
        free(last)
        return NULL

      // Case 2: Multiple nodes
      secondLastNode = last
      while secondLastNode.next != last:
        secondLastNode = secondLastNode.next

      // secondLastNode is now pointing to the second to last node
      free(last)
      last = secondLastNode
      last.next = last.next // Connect the new last node to the head
      return last
    ```

---

### 3.4. Traversal

*   **Logic:** Start from any node, move to its `next` pointer, and repeat until you return to the starting node.
*   **Pseudocode (using the `last` pointer):**

    ```
    function traverse(last):
      if last is NULL:
        print "List is empty."
        return

      currentNode = last.next // Start from the head
      print "List elements: "
      do:
        print currentNode.data, " "
        currentNode = currentNode.next
      while currentNode != last.next // Stop when we loop back to the head

      // Alternatively, if we start traversal from 'last' itself:
      // currentNode = last
      // print "List elements: "
      // do:
      //   print currentNode.data, " "
      //   currentNode = currentNode.next
      // while currentNode != last
    ```

*   **Example:** If `last` points to a node with data 3, and the list is 1 -> 2 -> 3 -> (1), and we start traversal from `last.next` (node 1):
    *   Print 1
    *   Move to node 2
    *   Print 2
    *   Move to node 3
    *   Print 3
    *   Move to node 1 (since `3.next` points to 1)
    *   The condition `currentNode != last.next` (which is 1) becomes false, and the loop terminates.

---

### 3.5. Searching

*   **Logic:** Similar to traversal, but we check the data of each node.
*   **Pseudocode:**

    ```
    function search(last, value):
      if last is NULL:
        return false // Not found

      currentNode = last.next
      do:
        if currentNode.data == value:
          return true // Found
        currentNode = currentNode.next
      while currentNode != last.next

      return false // Not found after checking all nodes
    ```

---

## 4. Applications of Circular Linked Lists

*   **Round Robin Scheduling:** Processes waiting for CPU time can be managed in a circular linked list. The CPU executes a process for a fixed time slice, then moves to the next process in the list. The executed process is moved to the end of the list.
*   **Queue Implementation:** A circular linked list can efficiently implement a queue. The `front` pointer points to the head, and the `rear` pointer points to the tail. Insertion happens at the `rear`, and deletion happens at the `front`. Because it's circular, the `rear` can easily point back to the `front`.
*   **Memory Management:** In some operating systems, free memory blocks can be managed using a circular linked list.
*   **Game Development:** Managing turns for players in a game.
*   **Printer Spooling:** Managing print jobs in a cyclical order.

---

## 5. Comparison with other Linked List Variations

| Feature             | Singly Linked List | Doubly Linked List | Circular Singly Linked List | Circular Doubly Linked List |
| :------------------ | :----------------- | :----------------- | :-------------------------- | :-------------------------- |
| **End Termination** | NULL               | NULL               | Wraps around to head        | Wraps around to head & prev |
| **Traversal**       | Forward only       | Forward & Backward | Forward only                | Forward & Backward          |
| **Memory Overhead** | Low (1 pointer/node) | Medium (2 pointers/node) | Low (1 pointer/node)        | Medium (2 pointers/node)    |
| **Insertion (End)** | O(N) without tail pointer, O(1) with tail pointer | O(1) with tail pointer | O(1) with `last` pointer | O(1) with `last` pointer |
| **Deletion (End)**  | O(N)               | O(1) with tail pointer | O(N) (need to find prev) | O(1) with `last` pointer |
| **Access to Head**  | O(1)               | O(1)               | O(1) (from `last` node)     | O(1) (from `last` node)     |
| **Use Cases**       | Stacks, Queues, simple lists | Bidirectional iteration, Undo/Redo | Round Robin, Queues, Game turns | More complex navigation     |

---

## 6. Practice Questions

1.  **Question:** Describe the advantage of maintaining a pointer to the *last* node in a circular singly linked list compared to a pointer to the *first* node. (CO2, K3)
    **Answer:** Maintaining a pointer to the last node allows for O(1) insertion at the end of the list and simplifies the logic for updating the list when the last node is deleted or modified, as the last node's `next` pointer directly links to the head.

2.  **Question:** Write a pseudocode function to insert a new node at the beginning of a circular singly linked list, given a pointer `last` to the last node. (CO2, K3)
    **Answer:** (See section 3.2.1)

3.  **Question:** How would you delete the *last* node in a circular singly linked list if you only have a pointer to the `last` node? (CO2, K3)
    **Answer:** You need to traverse the list from the head (`last.next`) to find the node whose `next` pointer points to the `last` node (the second-to-last node). Once found, update its `next` pointer to point to the head, free the original `last` node, and then update the `last` pointer to the second-to-last node. Handle the single-node and empty list cases separately. (See section 3.3.3)

4.  **Question:** Explain a scenario where a circular linked list would be a more suitable data structure than a standard singly linked list. (CO2, K3)
    **Answer:** A scenario like round-robin CPU scheduling is ideal for circular linked lists. When a process finishes its time slice, it's moved from the front of the execution queue to the back. With a circular list, this move (delete from front, insert at end) can be done efficiently in O(1) time, especially when using a pointer to the tail.

5.  **Question:** What is the time complexity for traversing all elements in a circular singly linked list if you are given a pointer to any node? (CO1, K2)
    **Answer:** O(N), where N is the number of nodes in the list. You must visit each node exactly once until you return to the starting node.

---

## 7. Important Points to Remember

*   **No NULL Pointer:** The defining characteristic is the absence of a NULL pointer at the end; the last node points back to the head.
*   **`last` Pointer Advantage:** In singly circular linked lists, maintaining a pointer to the *last* node is often more convenient for O(1) insertions at the end and managing deletions.
*   **Empty List:** An empty circular linked list can be represented by `last` being NULL.
*   **Single Node List:** In a single-node circular list, the node's `next` pointer points to itself.
*   **Traversal Loop:** The traversal loop condition must ensure you don't loop infinitely and stop after visiting all nodes. A `do-while` loop starting from the head (`last.next`) and checking against the head is common.
*   **Deletion of `last`:** Deleting the last node requires finding the second-to-last node, which can take O(N) time if you only have the `last` pointer.
*   **Circular Doubly Linked List:** Offers O(1) insertion/deletion at both ends if `first` and `last` pointers are maintained.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 8. Textual References

This material is aligned with concepts covered in:

*   **Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed:** Discusses linked list variations and their operations, including circular lists, emphasizing their implementation and efficiency.
*   **Classic Data Structures by Samanta D:** Provides detailed explanations and pseudocode for various linked list operations, often covering circular lists in the context of implementing queues or handling specific scheduling problems.
*   **Data Structures: A Pseudocode Approach with C by Gilberg and Forouzan:** Offers clear pseudocode implementations for linked list operations, likely including circular variations, with a focus on practical applications.

The applications discussed (like queues, scheduling) directly relate to **Course Outcome 2 (CO2)**, enabling students to solve real-world problems efficiently. The time complexity analysis for operations relates to **Course Outcome 1 (CO1)**.

---