---
title: "Circular Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List: Self"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363e5"
status: "completed"
scrapedAt: "2026-05-23T16:20:40.921Z"
---
# Module 2: Linked Lists - Circular Linked List

This module delves into the fascinating world of linked lists, exploring their variations and applications. Specifically, this topic focuses on **Circular Linked Lists**, a variation that offers unique advantages in certain scenarios.

## 1. Introduction to Circular Linked Lists

**Definition:** A circular linked list is a linked list where the last node points back to the first node (head) instead of pointing to NULL. This creates a circular chain of nodes.

**Key Concepts:**

*   **Tail points to Head:** The crucial difference from a standard linear linked list is that the `next` pointer of the last node in the list points to the first node (the head).
*   **No NULL termination:** Unlike linear linked lists, there is no explicit NULL pointer to signify the end of the list. The traversal continues until we reach the starting node again.
*   **Single Circular Linked List:** In this type, each node contains a data field and a pointer to the next node in the sequence.
*   **Double Circular Linked List:** Each node contains a data field and two pointers: one to the next node and one to the previous node. The last node's `next` pointer points to the head, and the head's `previous` pointer points to the last node.

**Visual Representation:**

```
      +------+       +------+       +------+
  --->| Data |----->| Data |----->| Data |---+
      | next |       | next |       | next |   |
      +------+       +------+       +------+   |
        ^                                    |
        |------------------------------------|
```

## 2. Operations on Circular Linked Lists

The operations on circular linked lists are similar to those on linear linked lists, with slight modifications due to the circular nature.

### 2.1. Traversal

Traversing a circular linked list involves starting from a given node (usually the head) and moving through the list using the `next` pointers until we return to the starting node.

**Algorithm:**

1.  If the list is empty, do nothing.
2.  Start from the head node.
3.  Print the data of the current node.
4.  Move to the `next` node.
5.  Repeat steps 3 and 4 until the current node is the head node again.

**Example (Pseudocode):**

```
function traverseCircularLinkedList(head):
  if head is NULL:
    print("List is empty")
    return

  current = head
  do:
    print(current.data)
    current = current.next
  while current is not head
```

**Reference Incorportaion:**
*   **Horowitz, Sahni, and Anderson-Freed (Fundamentals of Data Structures in C):** Chapter 5 discusses linked lists and their variations. While specific examples of circular linked lists might be less explicit, the fundamental principles of node manipulation and traversal are directly applicable. They emphasize the importance of careful pointer management, which is crucial in circular lists to avoid infinite loops.

### 2.2. Insertion

Insertion can occur at the beginning, end, or in the middle of a circular linked list.

#### 2.2.1. Insertion at the Beginning

**Algorithm:**

1.  Create a new node with the given data.
2.  If the list is empty:
    *   Set the `next` pointer of the new node to itself (making it a list of one element).
    *   Set the head to the new node.
3.  If the list is not empty:
    *   Find the last node (the one whose `next` pointer points to the head).
    *   Set the `next` pointer of the new node to the current head.
    *   Set the `next` pointer of the last node to the new node.
    *   Update the head to point to the new node.

**Example (Pseudocode):**

```
function insertAtBeginning(head, data):
  newNode = createNode(data)

  if head is NULL:
    newNode.next = newNode  // New node points to itself
    return newNode

  last = head
  while last.next is not head:
    last = last.next

  newNode.next = head       // New node points to old head
  last.next = newNode       // Last node points to new node
  return newNode            // New node becomes the new head
```

#### 2.2.2. Insertion at the End

**Algorithm:**

1.  Create a new node with the given data.
2.  If the list is empty:
    *   Set the `next` pointer of the new node to itself.
    *   Set the head to the new node.
3.  If the list is not empty:
    *   Find the last node.
    *   Set the `next` pointer of the new node to the current head.
    *   Set the `next` pointer of the last node to the new node.
    *   (The head remains unchanged, but the new node becomes the new tail.)

**Example (Pseudocode):**

```
function insertAtEnd(head, data):
  newNode = createNode(data)

  if head is NULL:
    newNode.next = newNode
    return newNode

  last = head
  while last.next is not head:
    last = last.next

  newNode.next = head       // New node points to head
  last.next = newNode       // Last node points to new node
  return head               // Head remains the same
```

#### 2.2.3. Insertion in the Middle (After a specific node)

**Algorithm:**

1.  Create a new node with the given data.
2.  If the list is empty, insertion at the "middle" is not well-defined; usually, it defaults to insertion at the beginning.
3.  If the list is not empty and `prevNode` is provided:
    *   Set the `next` pointer of the new node to the `next` pointer of `prevNode`.
    *   Set the `next` pointer of `prevNode` to the new node.

**Example (Pseudocode):**

```
function insertAfter(prevNode, data):
  if prevNode is NULL:
    print("Previous node cannot be NULL")
    return

  newNode = createNode(data)
  newNode.next = prevNode.next
  prevNode.next = newNode
```

**Reference Incorportaion:**
*   **Samanta D (Classic Data Structures):** This textbook provides detailed C implementations of various linked list operations, including insertions and deletions in circular linked lists. Samanta emphasizes the conceptual clarity of pointer manipulations, which is crucial for understanding how to correctly link nodes in a circular fashion.

### 2.3. Deletion

Deletion can occur from the beginning, end, or by specifying the node to be deleted.

#### 2.3.1. Deletion from the Beginning

**Algorithm:**

1.  If the list is empty, do nothing.
2.  If there's only one node:
    *   Free the single node.
    *   Return NULL (indicating an empty list).
3.  If there are multiple nodes:
    *   Find the last node.
    *   Set the `next` pointer of the last node to the `next` pointer of the head node.
    *   Store the head node in a temporary pointer.
    *   Update the head to be the next node.
    *   Free the temporary pointer (the old head).

**Example (Pseudocode):**

```
function deleteFromBeginning(head):
  if head is NULL:
    return NULL

  if head.next is head: // Only one node
    free(head)
    return NULL

  last = head
  while last.next is not head:
    last = last.next

  temp = head
  last.next = head.next // Last node points to the second node
  head = head.next      // Update head
  free(temp)
  return head
```

#### 2.3.2. Deletion from the End

**Algorithm:**

1.  If the list is empty, do nothing.
2.  If there's only one node:
    *   Free the single node.
    *   Return NULL.
3.  If there are multiple nodes:
    *   Find the second-to-last node (the one whose `next` pointer points to the last node).
    *   Find the last node.
    *   Set the `next` pointer of the second-to-last node to the head.
    *   Store the last node in a temporary pointer.
    *   Free the temporary pointer (the old last node).

**Example (Pseudocode):**

```
function deleteFromEnd(head):
  if head is NULL:
    return NULL

  if head.next is head: // Only one node
    free(head)
    return NULL

  secondLast = head
  while secondLast.next.next is not head:
    secondLast = secondLast.next

  last = secondLast.next
  secondLast.next = head // Second last node points to the head
  free(last)
  return head
```

#### 2.3.3. Deletion of a Specific Node

**Algorithm:**

1.  If the list is empty, do nothing.
2.  If the node to be deleted is the head:
    *   Handle as deletion from the beginning.
3.  If the node to be deleted is not the head:
    *   Traverse the list to find the node preceding the node to be deleted.
    *   Set the `next` pointer of the preceding node to the `next` pointer of the node to be deleted.
    *   Free the node to be deleted.

**Example (Pseudocode):**

```
function deleteNode(head, nodeToDelete):
  if head is NULL:
    return NULL

  if head is nodeToDelete: // Deleting the head
    return deleteFromBeginning(head)

  current = head
  while current.next is not head and current.next is not nodeToDelete:
    current = current.next

  if current.next is nodeToDelete: // Node found
    current.next = nodeToDelete.next // Bypass the nodeToDelete
    free(nodeToDelete)
    return head
  else:
    print("Node not found")
    return head
```

**Reference Incorportaion:**
*   **Gilberg and Forouzan (Data Structures: A Pseudocode Approach with C):** This book is excellent for understanding the step-by-step logic of operations. Their pseudocode examples for circular linked list deletions will clearly illustrate the pointer reassignments needed to maintain the circular structure after removing a node. They often highlight edge cases, such as deleting the only node or the head node.

## 3. Applications of Circular Linked Lists

Circular linked lists are particularly useful in scenarios where continuous cycling or a fixed-size queue is required.

### 3.1. Implementing Queues (Round Robin Scheduling)

Circular linked lists are ideal for implementing queues that follow a Round Robin scheduling algorithm. In Round Robin, each process gets a small unit of CPU time (time quantum), and when the time is up, it's moved to the end of the ready queue.

**How it works:**

1.  The head of the circular linked list represents the currently executing process.
2.  When a process's time quantum expires, it's moved from the front of the list to the rear.
3.  This cyclical movement ensures that each process gets a fair share of the CPU.

**Example:** Imagine a CPU scheduler managing four processes (P1, P2, P3, P4). The circular linked list might look like: P1 -> P2 -> P3 -> P4 -> P1. If P1's time quantum ends, it's moved to the end: P2 -> P3 -> P4 -> P1 -> P2.

**Reference Incorportaion:**
*   **Aho, Hopcroft, and Ullman (Data Structures and Algorithms):** This foundational text might not have specific examples of Round Robin scheduling with circular linked lists, but it lays the groundwork for understanding data structures used in operating systems and scheduling algorithms. The concept of efficient manipulation of sequential data is core to their discussion.

### 3.2. Game Applications (e.g., Josephus Problem)

The Josephus problem is a classic problem where people are standing in a circle, and every k-th person is eliminated until only one remains. A circular linked list is a natural fit for simulating this.

**How it works:**

1.  Represent the people in the circle as nodes in a circular linked list.
2.  Start counting from a designated person.
3.  Move `k-1` steps around the circle, identify the person to be eliminated, and remove them from the list.
4.  The person immediately after the eliminated one becomes the new starting point for counting.
5.  Repeat until only one person remains.

**Reference Incorportaion:**
*   **Lipschuts S. (Schaum's Series: Theory and Problems of Data Structures):** Schaum's Outlines are known for their problem-solving focus. This book likely contains solved examples or problems related to simulating circular arrangements and eliminations, making it a great resource for understanding the application of circular linked lists in problems like the Josephus problem.

### 3.3. Maintaining a List of Active Users on a Server

A circular linked list can be used to manage a list of active users logged into a server. The server can cycle through the list to check the status of each user or send periodic updates.

### 3.4. Implementing Circular Buffers

Circular buffers, also known as ring buffers, are a data structure that uses a single, fixed-size buffer as if it were connected end-to-end. Circular linked lists can be used to implement these, especially when the buffer size is dynamic or requires efficient insertion/deletion at both ends.

**Reference Incorportaion:**
*   **Tremblay and Sorenson (Introduction to Data Structures with Applications):** This book often provides practical examples of data structure applications in real-world systems. They might discuss scenarios where circular data management is beneficial, aligning with the use of circular linked lists.

## 4. Advantages and Disadvantages

### 4.1. Advantages

*   **Efficient Traversal:** Any node can be the starting point for traversing the entire list.
*   **Queue Implementation:** Natural fit for implementing queues, especially in Round Robin scheduling.
*   **No Sentinel Node Required:** Unlike some linked list implementations, a sentinel node (an extra node at the beginning or end) is not strictly necessary for circular linked lists.
*   **Simpler Implementation for Certain Operations:** Operations like inserting at the end can sometimes be simpler than in a standard singly linked list if you maintain a pointer to the tail.

### 4.2. Disadvantages

*   **Complexity in Deletion:** Finding the node before the one to be deleted can require traversing almost the entire list.
*   **Risk of Infinite Loops:** If not implemented carefully, a programming error can lead to an infinite loop during traversal or operations.
*   **No Clear End:** The absence of a NULL terminator requires careful management to determine when a traversal has completed a full cycle.

**Important Point to Remember:** Always ensure that when operating on a circular linked list, you have a mechanism to detect when you've completed a full traversal (e.g., by checking if the current node is the same as the starting node).

## 5. Comparison with Linear Linked Lists

| Feature           | Linear Linked List                                  | Circular Linked List                                 |
| :---------------- | :-------------------------------------------------- | :--------------------------------------------------- |
| Last Node Pointer | Points to NULL                                      | Points to the Head node                              |
| Traversal End     | Reaches NULL                                        | Returns to the starting node                         |
| Queue Implement.  | Requires separate tail pointer for O(1) enqueue     | Naturally supports O(1) enqueue/dequeue if tail is known |
| Applications      | General purpose lists, stacks                       | Round Robin, Josephus problem, circular buffers      |
| Risk of Infinite Loop | Low (due to NULL termination)                       | Higher (requires careful pointer management)         |

## 6. Practice Questions

**Question 1:**
Explain why a circular linked list is preferred over a linear linked list for implementing a Round Robin scheduling algorithm. (CO2, K3)

**Answer:**
In Round Robin scheduling, processes are executed in a cyclical manner. Each process gets a time quantum, and if it doesn't complete, it's moved to the end of the ready queue. A circular linked list naturally models this cyclical behavior. The head of the list can represent the currently running process. When its time quantum expires, its node can be efficiently moved from the front to the rear of the list (by adjusting pointers). This can be done in O(1) time if a pointer to the tail is maintained. A linear linked list would require O(n) time to move a node from the front to the rear, as the last node needs to be found.

**Question 2:**
Write pseudocode to insert a node at the end of an empty circular linked list. (CO2, K3)

**Answer:**

```
function insertAtEndOfEmptyCircularList(head, data):
  newNode = createNode(data)
  newNode.next = newNode  // New node points to itself
  return newNode          // The new node is the head
```

**Question 3:**
What is the time complexity of traversing a circular linked list with N nodes starting from the head? (CO1, K2)

**Answer:**
The time complexity is O(N). To traverse the entire list and return to the starting node, you need to visit each of the N nodes exactly once.

**Question 4:**
Consider a circular linked list where the last node's `next` pointer points to the head. If you are given a pointer `ptr` to any node in the list, how would you find the last node of the list? (CO2, K3)

**Answer:**

```
function findLastNode(ptr):
  if ptr is NULL:
    return NULL // Or handle error appropriately

  current = ptr
  while current.next is not ptr:
    current = current.next
  return current // 'current' is now pointing to the last node
```
**Explanation:** Starting from any node `ptr`, we repeatedly move to the `next` node until we encounter the node whose `next` pointer points back to our starting node `ptr`. This node is the last node in the circular list.

**Question 5:**
Discuss a potential issue if the `next` pointer of the last node in a circular linked list is incorrectly set to `NULL` instead of the head. What would happen during traversal? (CO2, K3)

**Answer:**
If the `next` pointer of the last node is incorrectly set to `NULL`, the circular linked list effectively becomes a standard linear linked list, but with a critical flaw: the "end" (the node that was supposed to point to the head) is now `NULL`.

During traversal:
*   If you start from a node before the last one and try to traverse the entire "circular" list, you would eventually reach the node whose `next` pointer is `NULL`. The traversal would stop there, and you would not be able to cycle back to the beginning.
*   If your traversal logic relies on the condition `current.next != head` (or similar), and the list has become linear, this condition might still work until the last node. However, if the logic relies on `current.next != NULL`, it will terminate prematurely.
*   The intended circularity is broken, making operations that rely on it, such as Round Robin scheduling or continuous cycling, impossible or incorrect.

## 7. Key Points to Remember

*   **Pointer Manipulation:** The core of working with circular linked lists lies in correctly managing the `next` pointers, especially for the last node and when performing insertions/deletions.
*   **Termination Condition:** Always define a clear termination condition for traversals and operations to avoid infinite loops. For a list starting at `head`, a common condition is to stop when you return to `head`.
*   **Empty List Handling:** Special care must be taken when the list is empty or contains only one node, as these are edge cases that can cause errors if not handled properly.
*   **Tail Pointer Advantage:** Maintaining a pointer to the last node (tail) can significantly optimize certain operations like insertion at the end and deletion from the beginning to O(1) time complexity.

This comprehensive overview of circular linked lists should provide a solid foundation for understanding their structure, operations, applications, and potential pitfalls. Remember to practice implementing these operations to solidify your understanding.
