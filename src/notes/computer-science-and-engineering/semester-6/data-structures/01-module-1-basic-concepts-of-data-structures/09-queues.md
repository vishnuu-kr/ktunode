---
title: "Queues"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be95"
status: "completed"
scrapedAt: "2026-05-20T16:51:53.345Z"
---
# Data Structures: Module 1 - Basic Concepts of Data Structures

## Topic: Queues

---

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   **Define** what a queue is.
*   **Identify** the basic operations performed on a queue.
*   **Explain** the working principle of a queue (FIFO).
*   **Discuss** the applications of queues.
*   **Implement** a queue using arrays.
*   **Implement** a queue using linked lists.

---

### 1. Introduction to Queues

#### 1.1 What is a Queue?

A **queue** is a linear data structure that follows a specific order in which operations are performed. This order is known as **First-In, First-Out (FIFO)**.

*   **Analogy:** Think of a queue of people waiting for a bus. The first person to join the line is the first person to get on the bus.
*   **Data Storage:** Elements are added at one end and removed from the other.

#### 1.2 Key Terminology

*   **Front (or Head):** The end of the queue from which elements are removed.
*   **Rear (or Tail):** The end of the queue to which new elements are added.
*   **Enqueue:** The operation of adding an element to the rear of the queue.
*   **Dequeue:** The operation of removing an element from the front of the queue.
*   **Peek (or Front):** The operation of viewing the element at the front of the queue without removing it.
*   **IsEmpty:** Checks if the queue is empty.
*   **IsFull:** Checks if the queue is full (relevant for array-based implementations).

#### 1.3 Working Principle: FIFO (First-In, First-Out)

The FIFO principle is the core concept of a queue.

*   **Insertion:** Elements are added at the **rear**.
*   **Deletion:** Elements are removed from the **front**.

---

### 2. Basic Operations on a Queue

Let's detail the fundamental operations:

#### 2.1 Enqueue (Add Element)

*   **Description:** Adds an element to the rear of the queue.
*   **Process:**
    1.  Check if the queue is full. If it is, an error (overflow) occurs.
    2.  If the queue is not full, increment the rear pointer.
    3.  Insert the new element at the position indicated by the rear pointer.
    4.  If the queue was previously empty, also update the front pointer to the new element's position.

#### 2.2 Dequeue (Remove Element)

*   **Description:** Removes and returns the element from the front of the queue.
*   **Process:**
    1.  Check if the queue is empty. If it is, an error (underflow) occurs.
    2.  If the queue is not empty, retrieve the element at the front.
    3.  Increment the front pointer to the next element.
    4.  If the queue becomes empty after the removal, reset both front and rear pointers to their initial (empty) state.

#### 2.3 Peek (View Front Element)

*   **Description:** Returns the element at the front of the queue without removing it.
*   **Process:**
    1.  Check if the queue is empty. If it is, return an error or a special value.
    2.  If the queue is not empty, return the element at the front position.

#### 2.4 IsEmpty

*   **Description:** Checks if the queue contains any elements.
*   **Condition:** Returns `true` if the front pointer is in an "empty" state (e.g., `-1` or indicates no elements), `false` otherwise.

#### 2.5 IsFull

*   **Description:** Checks if the queue has reached its maximum capacity.
*   **Condition:** Relevant for array-based queues. Returns `true` if the rear pointer has reached the last index of the array, `false` otherwise. (More complex logic for circular queues).

---

### 3. Applications of Queues

Queues are widely used in computer science and real-world scenarios:

*   **Task Scheduling:** Operating systems use queues to manage processes waiting for CPU time (e.g., Round Robin scheduling).
*   **Printer Spooling:** Documents sent to a printer are placed in a queue to be printed in the order they were received.
*   **Breadth-First Search (BFS):** A graph traversal algorithm that uses a queue to explore nodes level by level.
*   **Buffering:** In data streaming or input/output operations, queues act as buffers to handle differences in data production and consumption rates.
*   **Call Centers:** Managing incoming calls in the order they are received.
*   **Simulations:** Modeling real-world waiting lines or processes.
*   **Web Server Requests:** Handling incoming requests to a web server.

---

### 4. Implementing Queues

Queues can be implemented using either arrays or linked lists.

#### 4.1 Array-Based Implementation

*   **Concept:** A fixed-size array is used to store the queue elements. Two pointers, `front` and `rear`, are maintained to track the beginning and end of the queue.

*   **Basic Structure (Conceptual):**

    ```
    // Assuming a fixed-size array 'arr' of size 'MAX_SIZE'
    int front = -1; // Indicates an empty queue
    int rear = -1;  // Indicates an empty queue
    int arr[MAX_SIZE];
    ```

*   **Operations:**

    *   **Enqueue(element):**
        *   If `rear == MAX_SIZE - 1`: Queue is full.
        *   Else if `front == -1`: `front = 0;`
        *   `rear++;`
        *   `arr[rear] = element;`

    *   **Dequeue():**
        *   If `front == -1`: Queue is empty.
        *   Else:
            *   `element_to_remove = arr[front];`
            *   If `front == rear`: `front = -1; rear = -1;` // Queue becomes empty
            *   Else: `front++;`
            *   Return `element_to_remove;`

    *   **Peek():**
        *   If `front == -1`: Queue is empty.
        *   Else: Return `arr[front];`

    *   **IsEmpty():** Return `front == -1;`
    *   **IsFull():** Return `rear == MAX_SIZE - 1;`

*   **Limitations of Simple Array Implementation:**
    *   **Wasted Space:** Once an element is dequeued, the space at the front of the array remains unused unless the entire queue is emptied and reset.
    *   **Fixed Size:** The capacity is fixed at compile time.

*   **Improved Array Implementation: Circular Queue**
    *   **Concept:** To overcome the wasted space issue, a circular queue uses the array as if its ends were connected. The `front` and `rear` pointers "wrap around" when they reach the end of the array.
    *   **Pointers:** `front` points to the first element, `rear` points to the last element.
    *   **Modulo Operator (`%`):** Used to manage the wrap-around behavior.
    *   **Structure:**
        ```
        int front = -1;
        int rear = -1;
        int arr[MAX_SIZE];
        ```
    *   **Operations (Circular Queue):**
        *   **Enqueue(element):**
            *   If `(rear + 1) % MAX_SIZE == front`: Queue is full.
            *   Else if `front == -1`: `front = 0; rear = 0;`
            *   Else: `rear = (rear + 1) % MAX_SIZE;`
            *   `arr[rear] = element;`

        *   **Dequeue():**
            *   If `front == -1`: Queue is empty.
            *   Else:
                *   `element_to_remove = arr[front];`
                *   If `front == rear`: `front = -1; rear = -1;` // Queue becomes empty
                *   Else: `front = (front + 1) % MAX_SIZE;`
                *   Return `element_to_remove;`

        *   **IsEmpty():** Return `front == -1;`
        *   **IsFull():** Return `(rear + 1) % MAX_SIZE == front;`

#### 4.2 Linked List Implementation

*   **Concept:** Each element is stored in a `Node` structure, which contains the data and a pointer to the next node. The queue is managed by pointers to the `front` and `rear` nodes.

*   **Node Structure (Conceptual):**

    ```c++
    struct Node {
        int data;
        Node* next;
    };
    ```

*   **Queue Structure (Conceptual):**

    ```c++
    Node* front = nullptr;
    Node* rear = nullptr;
    ```

*   **Operations:**

    *   **Enqueue(element):**
        1.  Create a new `Node` with the given `element`.
        2.  If the queue is empty (`front == nullptr`):
            *   `front = newNode;`
            *   `rear = newNode;`
        3.  Else:
            *   `rear->next = newNode;`
            *   `rear = newNode;`

    *   **Dequeue():**
        1.  If `front == nullptr`: Queue is empty.
        2.  Else:
            *   `temp = front;`
            *   `data_to_return = temp->data;`
            *   If `front == rear`: `front = nullptr; rear = nullptr;` // Queue becomes empty
            *   Else: `front = front->next;`
            *   `delete temp;` // Free memory
            *   Return `data_to_return;`

    *   **Peek():**
        1.  If `front == nullptr`: Queue is empty.
        2.  Else: Return `front->data;`

    *   **IsEmpty():** Return `front == nullptr;`

*   **Advantages of Linked List Implementation:**
    *   **Dynamic Size:** The queue can grow or shrink as needed, limited only by available memory.
    *   **No Wasted Space:** Memory is allocated only for the elements present in the queue.

---

### 5. Practice Questions & Exercises

**Question 1:**
Which data structure follows the First-In, First-Out (FIFO) principle?
a) Stack
b) Queue
c) Linked List
d) Tree

**Question 2:**
In a queue, where are new elements added?
a) Front
b) Rear
c) Middle
d) Top

**Question 3:**
What is the term for removing an element from a queue?
a) Push
b) Pop
c) Enqueue
d) Dequeue

**Question 4:**
Consider a circular queue implemented with an array of size 5. If `front` is at index 2 and `rear` is at index 4, what will be the new `rear` after an enqueue operation?
a) 0
b) 1
c) 3
d) 5

**Question 5:**
What is a common application of queues in operating systems?
a) Process scheduling
b) Memory management
c) File system operations
d) Network routing

**Question 6:**
If a queue is implemented using a linked list, and `front` points to the first node and `rear` points to the last node, describe the steps for enqueueing an element.

**Question 7:**
What is the main advantage of using a linked list over an array for implementing a queue?

**Question 8:**
Write the pseudo-code for the `Dequeue` operation of a simple array-based queue (not circular).

---

### 6. Answers to Practice Questions

**Answer 1:**
b) Queue

**Answer 2:**
b) Rear

**Answer 3:**
d) Dequeue

**Answer 4:**
a) 0
*Explanation:* With `front = 2` and `rear = 4`, the array indices are `[0, 1, 2, 3, 4]`. The `rear` is at the last position. In a circular queue, the next position after `4` wraps around to `0`. The enqueue operation would set `rear = (4 + 1) % 5 = 5 % 5 = 0`.

**Answer 5:**
a) Process scheduling

**Answer 6:**
1. Create a new node and store the element in its `data` field.
2. If the queue is empty (`front` is null), set both `front` and `rear` to point to the new node.
3. If the queue is not empty, set the `next` pointer of the current `rear` node to point to the new node.
4. Update the `rear` pointer to point to the new node.

**Answer 7:**
The main advantage is **dynamic sizing**. A linked list-based queue can grow or shrink dynamically, whereas an array-based queue has a fixed capacity. Linked lists also avoid the issue of wasted space that can occur with array-based implementations, especially when elements are frequently dequeued.

**Answer 8:**
```pseudo-code
Function Dequeue(Queue Q):
  If Q.front == -1:
    Print "Queue Underflow"
    Return ErrorValue // Or throw an exception
  Else:
    element_to_remove = Q.arr[Q.front]
    If Q.front == Q.rear: // If this was the last element
      Q.front = -1
      Q.rear = -1
    Else:
      Q.front = Q.front + 1
    Return element_to_remove
```

---

### 7. Important Points to Remember

*   **FIFO:** The defining characteristic of a queue.
*   **Two Ends:** Elements are added at the `rear` and removed from the `front`.
*   **Overflow:** Occurs when trying to enqueue into a full queue (especially in array implementations).
*   **Underflow:** Occurs when trying to dequeue or peek from an empty queue.
*   **Circular Queues:** An optimization for array-based queues to reuse space efficiently by wrapping around.
*   **Linked Lists:** Offer dynamic sizing, a significant advantage for queue implementations where the size is unpredictable.
*   **Applications:** Queues are fundamental for managing sequential processes and in algorithms like BFS.
