---
title: "Stacks and Queues using Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List: Self"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363e6"
status: "completed"
scrapedAt: "2026-05-23T16:20:41.678Z"
---
# DATA STRUCTURES - Module 2: Linked List: Self
## Topic: Stacks and Queues using Linked List

---

### **Introduction to Stacks and Queues**

Stacks and Queues are fundamental **Abstract Data Types (ADTs)** that are used extensively in computer science. They are linear data structures, meaning their elements are arranged in a sequential order. While both involve adding and removing elements, the *order* of these operations differentiates them.

**Key Concepts:**

*   **Abstract Data Type (ADT):** A mathematical model for data types that defines the operations on the data but not its implementation. It specifies *what* operations can be performed, not *how*.
*   **Linear Data Structure:** Data elements are arranged sequentially, and each element is connected to its previous and next element.
*   **LIFO (Last-In, First-Out):** The last element added to the structure is the first one to be removed. This principle governs Stacks.
*   **FIFO (First-In, First-Out):** The first element added to the structure is the first one to be removed. This principle governs Queues.

---

### **Stacks using Linked List**

A stack is a linear data structure that follows the LIFO principle. Imagine a stack of plates; you add a new plate to the top, and you also remove a plate from the top.

**Key Operations:**

1.  **Push:** Adds an element to the top of the stack.
2.  **Pop:** Removes and returns the element from the top of the stack.
3.  **Peek/Top:** Returns the element at the top of the stack without removing it.
4.  **IsEmpty:** Checks if the stack is empty.
5.  **IsFull (Optional for Linked List):** Checks if the stack has reached its maximum capacity (not usually a concern with linked lists as they grow dynamically).

**Implementation using Linked List:**

A linked list is a suitable data structure for implementing a stack because adding and removing elements at one end (the head) is an O(1) operation.

*   **Node Structure:** Each element in the linked list will be stored in a node, which typically contains:
    *   `data`: The actual value being stored.
    *   `next`: A pointer to the next node in the list.

*   **Stack Representation:** The stack can be represented by a pointer to the first node, often called `top` or `head`.

**Detailed Operations and Implementation (Conceptual):**

**1. Push Operation:**

*   Create a new node to store the `item`.
*   Set the `next` pointer of the new node to the current `top` of the stack.
*   Update the `top` pointer to point to the new node.

```
// Conceptual C++ like pseudocode
Node* newNode = new Node(item); // Create a new node
newNode->next = top;          // Link the new node to the current top
top = newNode;                // Update top to the new node
```

**Example:**
If stack is empty: `top = NULL`
Push 10: `top` points to node(10, NULL)
Push 20: `top` points to node(20, node(10, NULL))
Push 30: `top` points to node(30, node(20, node(10, NULL)))

**2. Pop Operation:**

*   Check if the stack is empty. If it is, an underflow error occurs.
*   Store the `data` from the `top` node.
*   Create a temporary pointer `temp` to the `top` node.
*   Update `top` to point to the next node (`top->next`).
*   Delete the `temp` node to free memory.
*   Return the stored `data`.

```
// Conceptual C++ like pseudocode
if (isEmpty()) {
    // Underflow error
}
Item data = top->data;     // Get data from top
Node* temp = top;           // Save current top
top = top->next;            // Move top to next node
delete temp;                // Free memory of the old top node
return data;                // Return the data
```

**Example:**
Stack: `top` -> node(30, node(20, node(10, NULL)))
Pop:
  * `data = 30`
  * `temp` points to node(30, ...)
  * `top` now points to node(20, node(10, NULL))
  * node(30, ...) is deleted.
  * Return 30.

**3. Peek/Top Operation:**

*   Check if the stack is empty. If it is, an underflow error occurs.
*   Return the `data` from the `top` node without modifying the stack.

```
// Conceptual C++ like pseudocode
if (isEmpty()) {
    // Underflow error
}
return top->data; // Return data of the top node
```

**4. IsEmpty Operation:**

*   Return `true` if `top` is `NULL`, `false` otherwise.

```
// Conceptual C++ like pseudocode
bool isEmpty() {
    return (top == NULL);
}
```

**Textbook References for Stacks using Linked List:**

*   **Horowitz, Sahni, Anderson-Freed (Fundamentals of Data Structures in C):** Chapter 5 discusses stacks and their applications. They cover linked list implementation, highlighting the efficiency of push and pop at the head.
*   **Samanta (Classic Data Structures):** Chapter 4 details stacks and queues. The linked list implementation for stacks is presented with clear diagrams and C code examples.

**Course Outcome Alignment:**

*   **CO2:** This topic directly addresses solving real-world problems using stacks (e.g., function call stack, expression evaluation). Implementing them with linked lists allows for dynamic sizing, crucial for efficiency. (Knowledge Level: K3)

---

### **Queues using Linked List**

A queue is a linear data structure that follows the FIFO principle. Imagine a queue of people waiting in line; the person who arrived first is the first to be served.

**Key Operations:**

1.  **Enqueue (or Add/Insert):** Adds an element to the **rear** (or back) of the queue.
2.  **Dequeue (or Remove/Delete):** Removes and returns the element from the **front** of the queue.
3.  **Front (or Peek):** Returns the element at the front of the queue without removing it.
4.  **IsEmpty:** Checks if the queue is empty.
5.  **IsFull (Optional for Linked List):** Checks if the queue has reached its maximum capacity.

**Implementation using Linked List:**

A linked list is also an excellent choice for implementing a queue. To achieve O(1) time complexity for both enqueue and dequeue, we need pointers to both the **front** and the **rear** of the queue.

*   **Node Structure:** Same as for the stack: `data` and `next` pointer.
*   **Queue Representation:**
    *   `front`: A pointer to the first node in the queue (where elements are dequeued).
    *   `rear`: A pointer to the last node in the queue (where elements are enqueued).

**Detailed Operations and Implementation (Conceptual):**

**1. Enqueue Operation:**

*   Create a new node to store the `item`.
*   If the queue is empty (`front` is `NULL`):
    *   Set both `front` and `rear` to point to the new node.
*   If the queue is not empty:
    *   Set the `next` pointer of the current `rear` node to the new node.
    *   Update the `rear` pointer to point to the new node.

```
// Conceptual C++ like pseudocode
Node* newNode = new Node(item); // Create new node

if (isEmpty()) {
    front = newNode;
    rear = newNode;
} else {
    rear->next = newNode; // Link last node to new node
    rear = newNode;       // Update rear to the new node
}
```

**Example:**
Queue is empty: `front = NULL`, `rear = NULL`
Enqueue 10: `front` points to node(10, NULL), `rear` points to node(10, NULL)
Enqueue 20: `front` points to node(10, node(20, NULL)), `rear` points to node(20, NULL)
Enqueue 30: `front` points to node(10, node(20, node(30, NULL))), `rear` points to node(30, NULL)

**2. Dequeue Operation:**

*   Check if the queue is empty. If it is, an underflow error occurs.
*   Store the `data` from the `front` node.
*   Create a temporary pointer `temp` to the `front` node.
*   Update `front` to point to the next node (`front->next`).
*   If `front` becomes `NULL` after dequeuing (meaning the last element was removed), also set `rear` to `NULL`.
*   Delete the `temp` node to free memory.
*   Return the stored `data`.

```
// Conceptual C++ like pseudocode
if (isEmpty()) {
    // Underflow error
}
Item data = front->data;     // Get data from front
Node* temp = front;          // Save current front
front = front->next;         // Move front to next node

if (front == NULL) {         // If queue becomes empty
    rear = NULL;
}
delete temp;                 // Free memory of the old front node
return data;                 // Return the data
```

**Example:**
Queue: `front` -> node(10, node(20, node(30, NULL))), `rear` -> node(30, NULL)
Dequeue:
  * `data = 10`
  * `temp` points to node(10, ...)
  * `front` now points to node(20, node(30, NULL))
  * `rear` remains node(30, NULL) (since front is not NULL)
  * node(10, ...) is deleted.
  * Return 10.

**3. Front Operation:**

*   Check if the queue is empty. If it is, an underflow error occurs.
*   Return the `data` from the `front` node without modifying the queue.

```
// Conceptual C++ like pseudocode
if (isEmpty()) {
    // Underflow error
}
return front->data; // Return data of the front node
```

**4. IsEmpty Operation:**

*   Return `true` if `front` is `NULL`, `false` otherwise.

```
// Conceptual C++ like pseudocode
bool isEmpty() {
    return (front == NULL);
}
```

**Textbook References for Queues using Linked List:**

*   **Horowitz, Sahni, Anderson-Freed (Fundamentals of Data Structures in C):** Chapter 5 covers queues. The linked list implementation is detailed, emphasizing the need for both front and rear pointers for efficiency.
*   **Samanta (Classic Data Structures):** Chapter 4 provides a thorough explanation of queues and their linked list implementation, including edge cases like an empty queue or a queue with a single element.
*   **Gilberg, Forouzan (Data Structures: A Pseudocode Approach with C):** Chapter 6 (Queues) and Chapter 7 (Linked Lists) would provide complementary information. Their pseudocode approach can be very helpful for understanding the logic.

**Course Outcome Alignment:**

*   **CO2:** Similar to stacks, this directly addresses solving real-world problems using queues (e.g., CPU scheduling, printer spooling). The linked list implementation ensures efficient dynamic management of queue elements. (Knowledge Level: K3)

---

### **Comparison: Stacks vs. Queues using Linked Lists**

| Feature        | Stack (Linked List)                                   | Queue (Linked List)                                        |
| :------------- | :---------------------------------------------------- | :--------------------------------------------------------- |
| **Principle**  | LIFO (Last-In, First-Out)                             | FIFO (First-In, First-Out)                                 |
| **Key Pointers** | `top` (or `head`)                                     | `front` and `rear`                                         |
| **Push/Add**   | At the `top` (head) of the list                       | At the `rear` of the list                                  |
| **Pop/Remove** | From the `top` (head) of the list                     | From the `front` of the list                               |
| **Time Complexity (Push/Enqueue)** | O(1)                                                  | O(1) (with `rear` pointer)                                 |
| **Time Complexity (Pop/Dequeue)** | O(1)                                                  | O(1) (with `front` pointer)                                |
| **Space Complexity** | O(n) for n elements                                   | O(n) for n elements                                        |
| **Analogy**    | Stack of plates, Browser back button                | Waiting line, Printer spooler                              |

---

### **Applications of Stacks and Queues**

**Stacks:**

*   **Function Call Stack:** Managing function calls and local variables during program execution.
*   **Expression Evaluation:** Converting infix expressions to postfix/prefix and evaluating them.
*   **Backtracking:** Used in algorithms like maze solving or Sudoku solvers.
*   **Undo/Redo Functionality:** In text editors or software applications.
*   **Browser History:** The "back" button often uses a stack.

**Queues:**

*   **CPU Scheduling:** Processes waiting for CPU time.
*   **Printer Spooling:** Print jobs waiting to be printed.
*   **Breadth-First Search (BFS):** Graph traversal algorithm.
*   **Buffering:** In data transmission (e.g., streaming audio/video).
*   **Call Center/Customer Service Lines:** Managing incoming calls.

**Textbook References for Applications:**

*   **Horowitz, Sahni, Anderson-Freed (Fundamentals of Data Structures in C):** Chapter 5 provides detailed examples of stack applications like expression evaluation.
*   **Aho, Hopcroft, Ullman (Data Structures and Algorithms):** Discusses applications in compiler design and algorithms, including queue usage in BFS.
*   **Lipschutz (Schaum's Series):** Offers numerous solved problems demonstrating stack and queue applications.

**Course Outcome Alignment:**

*   **CO2:** Understanding these applications helps in choosing the appropriate data structure for real-world problems. (Knowledge Level: K3)

---

### **Important Points to Remember**

*   **Linked List Advantage:** For stacks and queues, linked lists offer dynamic resizing, unlike static arrays. Adding/removing from the head (stack) or head/tail (queue) is efficient (O(1)).
*   **Stack Pointer:** Only the `top` pointer is needed for a linked list stack.
*   **Queue Pointers:** Both `front` and `rear` pointers are crucial for an O(1) linked list queue. Without `rear`, enqueue would be O(n).
*   **Underflow:** Be mindful of trying to pop from an empty stack or dequeue from an empty queue.
*   **Memory Management:** Always deallocate nodes when they are no longer needed (e.g., in pop/dequeue) to prevent memory leaks.

---

### **Practice Questions and Exercises**

**Question 1:**
Which of the following operations is NOT typically associated with a stack?
a) Push
b) Pop
c) Enqueue
d) Peek

**Answer:** c) Enqueue

**Question 2:**
For a queue implemented using a singly linked list, why is it essential to maintain a pointer to the `rear` of the queue?

**Answer:** To allow for O(1) insertion (enqueue) at the end of the queue. Without the `rear` pointer, we would have to traverse the entire list to find the last node, making enqueue an O(n) operation.

**Question 3:**
Consider a stack implemented using a linked list. If you push the elements 10, 20, and 30, and then pop twice, what will be the value returned by the second pop operation?

**Answer:** 20 (The order of operations is: push 10, push 20, push 30. The stack looks like: 30 -> 20 -> 10. First pop returns 30. The stack becomes: 20 -> 10. Second pop returns 20.)

**Question 4:**
Write a pseudocode for the `enqueue` operation for a queue implemented using a linked list, assuming the queue has `front` and `rear` pointers and a `Node` structure with `data` and `next` fields.

**Answer:**

```pseudocode
procedure Enqueue(Queue Q, Item x):
  // Create a new node
  newNode = new Node()
  newNode.data = x
  newNode.next = NULL

  // If the queue is empty, the new node is both front and rear
  if Q.front is NULL:
    Q.front = newNode
    Q.rear = newNode
  else:
    // Link the current rear to the new node
    Q.rear.next = newNode
    // Update the rear pointer to the new node
    Q.rear = newNode
```

**Question 5:**
What is the time complexity of the `push` operation on a stack implemented using a linked list?

**Answer:** O(1)

**Question 6:**
Describe a scenario where a queue would be a more appropriate data structure than a stack.

**Answer:** A customer service call center. When customers call, they are placed in a queue. The first customer to call is the first customer to be served (FIFO). Using a stack would mean the last person to call would be served first, which is not practical for a service line.

---
