---
title: "Stacks and Queues using Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be9a"
status: "completed"
scrapedAt: "2026-05-20T16:51:56.182Z"
---
# Data Structures: Module 2 - Linked List and Memory Management

## Topic: Stacks and Queues using Linked List

---

### Learning Outcomes:

*   **LO1:** Understand the fundamental principles of Stacks and Queues data structures.
*   **LO2:** Implement Stacks and Queues using Linked Lists.
*   **LO3:** Analyze the time and space complexity of Stack and Queue operations implemented with Linked Lists.
*   **LO4:** Compare and contrast the performance of Linked List-based Stacks and Queues with array-based implementations.
*   **LO5:** Discuss real-world applications of Stacks and Queues.

---

### 1. Introduction to Stacks and Queues

Both Stacks and Queues are linear data structures that follow specific rules for adding and removing elements. They are abstract data types (ADTs), meaning their functionality is defined by the operations they support, not by their underlying implementation.

#### 1.1 Stacks

*   **Definition:** A Stack is a linear data structure that follows the **LIFO (Last-In, First-Out)** principle. The last element added to the stack is the first one to be removed.
*   **Analogy:** Think of a stack of plates. You can only add a new plate to the top, and when you take a plate, you take it from the top.
*   **Key Operations:**
    *   **Push:** Adds an element to the top of the stack.
    *   **Pop:** Removes and returns the element from the top of the stack.
    *   **Peek/Top:** Returns the element at the top of the stack without removing it.
    *   **isEmpty:** Checks if the stack is empty.
    *   **isFull (optional for linked lists):** Checks if the stack is full (relevant for array-based implementations).
*   **Conceptual Representation:**

    ```
    Top -> [Element 3]
           [Element 2]
           [Element 1]
    ```

#### 1.2 Queues

*   **Definition:** A Queue is a linear data structure that follows the **FIFO (First-In, First-Out)** principle. The first element added to the queue is the first one to be removed.
*   **Analogy:** Think of a queue of people waiting in line. The person who arrived first is the first one to be served.
*   **Key Operations:**
    *   **Enqueue:** Adds an element to the rear (back) of the queue.
    *   **Dequeue:** Removes and returns the element from the front of the queue.
    *   **Front/Peek:** Returns the element at the front of the queue without removing it.
    *   **isEmpty:** Checks if the queue is empty.
    *   **isFull (optional for linked lists):** Checks if the queue is full (relevant for array-based implementations).
*   **Conceptual Representation:**

    ```
    Front -> [Element 1] -> [Element 2] -> [Element 3] <- Rear
    ```

---

### 2. Implementing Stacks using Linked Lists

A singly linked list is a natural fit for implementing a stack. The operations can be performed efficiently at the head of the list.

#### 2.1 Data Structure Representation

We'll use a `Node` structure for the linked list, containing `data` and a `next` pointer. The stack itself will have a `top` pointer.

```c++
struct Node {
    int data;
    Node* next;
};

class Stack {
private:
    Node* top; // Pointer to the top of the stack

public:
    Stack() : top(nullptr) {} // Constructor
    ~Stack(); // Destructor (important for memory management)

    void push(int value);
    int pop();
    int peek();
    bool isEmpty();
};
```

#### 2.2 Stack Operations (Linked List Implementation)

*   **Push:**
    *   **Algorithm:**
        1.  Create a new node with the given `value`.
        2.  If the stack is empty, set `top` to the new node.
        3.  Otherwise, set the `next` pointer of the new node to the current `top`.
        4.  Update `top` to point to the new node.
    *   **Example:** Pushing 10, then 20, then 30.

        ```
        Initial: top -> nullptr

        Push(10): top -> [10] -> nullptr

        Push(20): top -> [20] -> [10] -> nullptr

        Push(30): top -> [30] -> [20] -> [10] -> nullptr
        ```
    *   **Time Complexity:** O(1) - Constant time, as we only manipulate the head of the list.
    *   **Space Complexity:** O(1) for the operation itself (creating one node).

*   **Pop:**
    *   **Algorithm:**
        1.  Check if the stack is empty. If so, throw an error or return a sentinel value.
        2.  Store the `top` node in a temporary pointer.
        3.  Update `top` to point to the next node (`top->next`).
        4.  Store the data from the temporary node.
        5.  Delete the temporary node (freeing memory).
        6.  Return the stored data.
    *   **Example:** Popping from the stack above.

        ```
        Stack: top -> [30] -> [20] -> [10] -> nullptr

        Pop():
            temp = [30] -> [20] -> [10] -> nullptr
            top = [20] -> [10] -> nullptr
            popped_data = 30
            delete temp (Node with 30)
            Return 30

        Stack after pop: top -> [20] -> [10] -> nullptr
        ```
    *   **Time Complexity:** O(1) - Constant time, as we only manipulate the head of the list.
    *   **Space Complexity:** O(1) for the operation itself (temporary pointers).

*   **Peek:**
    *   **Algorithm:**
        1.  Check if the stack is empty. If so, throw an error or return a sentinel value.
        2.  Return the `data` of the `top` node.
    *   **Time Complexity:** O(1)
    *   **Space Complexity:** O(1)

*   **isEmpty:**
    *   **Algorithm:**
        1.  Return `true` if `top` is `nullptr`, `false` otherwise.
    *   **Time Complexity:** O(1)
    *   **Space Complexity:** O(1)

*   **Destructor (`~Stack()`):**
    *   **Purpose:** To deallocate all nodes in the linked list when the stack object goes out of scope, preventing memory leaks.
    *   **Algorithm:**
        1.  Iterate through the linked list, starting from `top`.
        2.  In each iteration, store the current node in a `temp` pointer.
        3.  Move `top` to the next node (`top = top->next`).
        4.  Delete the `temp` node.
        5.  Repeat until `top` becomes `nullptr`.

#### 2.3 Important Point to Remember (Stacks)

*   **Efficiency:** Linked list implementation of stacks is very efficient because all critical operations (push, pop, peek) happen at the head of the list, which takes constant time (O(1)).
*   **Dynamic Size:** Unlike array-based stacks, linked list stacks can grow or shrink dynamically without a fixed capacity.

---

### 3. Implementing Queues using Linked Lists

A singly linked list can also implement a queue. We'll need pointers to both the `front` and `rear` of the queue for efficient enqueue and dequeue operations.

#### 3.1 Data Structure Representation

```c++
struct Node {
    int data;
    Node* next;
};

class Queue {
private:
    Node* front; // Pointer to the front of the queue
    Node* rear;  // Pointer to the rear of the queue

public:
    Queue() : front(nullptr), rear(nullptr) {} // Constructor
    ~Queue(); // Destructor

    void enqueue(int value);
    int dequeue();
    int peek();
    bool isEmpty();
};
```

#### 3.2 Queue Operations (Linked List Implementation)

*   **Enqueue:**
    *   **Algorithm:**
        1.  Create a new node with the given `value`.
        2.  If the queue is empty (`front` is `nullptr`):
            *   Set both `front` and `rear` to the new node.
        3.  Otherwise:
            *   Set the `next` pointer of the current `rear` node to the new node.
            *   Update `rear` to point to the new node.
    *   **Example:** Enqueuing 10, then 20, then 30.

        ```
        Initial: front -> nullptr, rear -> nullptr

        Enqueue(10): front -> [10] <- rear, front->next -> nullptr

        Enqueue(20): front -> [10] -> [20] <- rear, front->next->next -> nullptr

        Enqueue(30): front -> [10] -> [20] -> [30] <- rear, front->next->next->next -> nullptr
        ```
    *   **Time Complexity:** O(1) - Constant time, as we only manipulate the `rear` pointer.
    *   **Space Complexity:** O(1) for the operation itself (creating one node).

*   **Dequeue:**
    *   **Algorithm:**
        1.  Check if the queue is empty. If so, throw an error or return a sentinel value.
        2.  Store the `front` node in a temporary pointer.
        3.  Store the data from the `front` node.
        4.  Update `front` to point to the next node (`front = front->next`).
        5.  If the queue becomes empty after dequeueing (`front` is now `nullptr`), also set `rear` to `nullptr`.
        6.  Delete the temporary node (freeing memory).
        7.  Return the stored data.
    *   **Example:** Dequeueing from the queue above.

        ```
        Queue: front -> [10] -> [20] -> [30] <- rear

        Dequeue():
            temp = [10] -> [20] -> [30] <- rear
            dequeued_data = 10
            front = [20] -> [30] <- rear
            delete temp (Node with 10)
            Return 10

        Queue after dequeue: front -> [20] -> [30] <- rear
        ```
    *   **Time Complexity:** O(1) - Constant time, as we only manipulate the `front` pointer.
    *   **Space Complexity:** O(1) for the operation itself (temporary pointers).

*   **Peek:**
    *   **Algorithm:**
        1.  Check if the queue is empty. If so, throw an error or return a sentinel value.
        2.  Return the `data` of the `front` node.
    *   **Time Complexity:** O(1)
    *   **Space Complexity:** O(1)

*   **isEmpty:**
    *   **Algorithm:**
        1.  Return `true` if `front` is `nullptr`, `false` otherwise.
    *   **Time Complexity:** O(1)
    *   **Space Complexity:** O(1)

*   **Destructor (`~Queue()`):**
    *   **Purpose:** To deallocate all nodes in the linked list when the queue object goes out of scope, preventing memory leaks.
    *   **Algorithm:**
        1.  Iterate through the linked list, starting from `front`.
        2.  In each iteration, store the current node in a `temp` pointer.
        3.  Move `front` to the next node (`front = front->next`).
        4.  Delete the `temp` node.
        5.  Repeat until `front` becomes `nullptr`.

#### 3.3 Important Point to Remember (Queues)

*   **Efficiency:** Linked list implementation of queues is also very efficient for `enqueue` and `dequeue` operations, both taking constant time (O(1)) because we maintain pointers to both the front and rear.
*   **Dynamic Size:** Similar to linked list stacks, linked list queues can dynamically grow or shrink.

---

### 4. Comparison with Array-Based Implementations

| Feature           | Stack (Linked List)         | Stack (Array)              | Queue (Linked List)         | Queue (Array)             |
| :---------------- | :-------------------------- | :------------------------- | :-------------------------- | :------------------------ |
| **Push/Enqueue**  | O(1)                        | O(1)                       | O(1)                        | O(1) (if not full)        |
| **Pop/Dequeue**   | O(1)                        | O(1)                       | O(1)                        | O(1) (if not full)        |
| **Peek/Front**    | O(1)                        | O(1)                       | O(1)                        | O(1)                      |
| **isEmpty**       | O(1)                        | O(1)                       | O(1)                        | O(1)                      |
| **Memory Usage**  | Dynamic, overhead per node. | Fixed size (can be wasted). | Dynamic, overhead per node. | Fixed size (can be wasted). |
| **Insertion/Deletion** | Always at the head.       | At the top (stack).        | Add at rear, remove at front. | Add at rear, remove at front. |
| **Resizing**      | Automatic.                  | Might require copying.     | Automatic.                  | Might require copying.    |
| **Complexity**    | Simpler for dynamic growth. | Simpler to implement.      | Simpler for dynamic growth. | Simpler to implement.     |

**Key Takeaways for Comparison:**

*   **Dynamic Sizing:** Linked lists excel in dynamic sizing. When you don't know the maximum number of elements beforehand, linked lists are generally preferred. Arrays have a fixed size, and if it's exceeded, you might need to reallocate and copy elements, which can be inefficient.
*   **Memory Overhead:** Linked lists have a slight memory overhead per element due to the storage of the `next` pointer. Arrays store elements contiguously, which can be more memory-efficient if the array is nearly full.
*   **Implementation Simplicity:** Array-based implementations are often simpler to code for basic stack and queue functionalities.

---

### 5. Real-World Applications

#### 5.1 Stacks

*   **Function Call Stack:** When a program executes functions, the return addresses and local variables are stored on a stack.
*   **Expression Evaluation:** Converting infix expressions to postfix or prefix, and evaluating postfix/prefix expressions.
    *   Example: `(A + B) * C` -> `AB+C*` (Infix to Postfix)
*   **Undo/Redo Functionality:** In text editors or other applications, each action can be pushed onto a stack, and "undo" pops the last action.
*   **Backtracking Algorithms:** Algorithms like maze solving or finding paths often use stacks to keep track of visited paths.
*   **Browser History:** The "back" button in a web browser uses a stack to store previously visited pages.

#### 5.2 Queues

*   **Task Scheduling:** Operating systems use queues to manage processes waiting for CPU time (e.g., round-robin scheduling).
*   **Printer Spooling:** Documents sent to a printer are added to a queue and printed in the order they were received.
*   **Message Queues:** In distributed systems, messages are often sent and received via queues.
*   **Breadth-First Search (BFS):** A graph traversal algorithm that uses a queue to explore nodes level by level.
*   **Customer Service Lines:** Any real-world waiting line, like at a bank or a call center.
*   **Simulations:** Modeling systems where events happen in a sequence.

---

### 6. Practice Questions

**Question 1:**
Which of the following operations is NOT typically associated with a stack?
a) Push
b) Pop
c) Enqueue
d) Peek

**Question 2:**
In a linked list-based queue, where are new elements added?
a) At the front
b) At the rear
c) At the beginning of the list
d) Anywhere in the middle

**Question 3:**
What is the time complexity of the `pop` operation in a linked list-based stack?
a) O(n)
b) O(1)
c) O(log n)
d) O(n^2)

**Question 4:**
Consider a linked list-based queue. If the queue contains elements A, B, C (A at the front, C at the rear), what is the state of the `front` and `rear` pointers after calling `dequeue()`?
a) `front` points to B, `rear` points to C
b) `front` points to A, `rear` points to B
c) `front` points to C, `rear` points to A
d) `front` points to nullptr, `rear` points to C

**Question 5:**
Explain the LIFO principle and provide one real-world example of its application.

**Question 6:**
Describe the advantage of using a linked list over an array for implementing a queue that experiences frequent additions and deletions.

---

### 7. Answers to Practice Questions

**Answer 1:**
c) Enqueue - Enqueue is an operation for queues.

**Answer 2:**
b) At the rear - In a queue, elements are added to the rear (tail) and removed from the front (head).

**Answer 3:**
b) O(1) - The `pop` operation in a linked list-based stack involves removing the head node, which is a constant time operation.

**Answer 4:**
a) `front` points to B, `rear` points to C - After dequeuing A, B becomes the new front. C remains the rear.

**Answer 5:**
The LIFO (Last-In, First-Out) principle means that the last element added to a data structure is the first one to be removed. A classic real-world example is a stack of plates; you add a new plate to the top, and you take a plate from the top. Another example is the "back" button functionality in a web browser.

**Answer 6:**
The primary advantage of using a linked list over an array for a queue with frequent additions and deletions is its **dynamic sizing** and **efficient insertion/deletion at the ends**.
*   **Dynamic Sizing:** Linked lists can grow or shrink as needed, avoiding the need to pre-allocate a fixed size or reallocate and copy elements when the array capacity is reached or underutilized.
*   **Efficient End Operations:** In a linked list-based queue, adding to the rear (`enqueue`) and removing from the front (`dequeue`) are both O(1) operations because we maintain pointers to both the `front` and `rear`. In an array, if the array is implemented as a circular buffer to manage additions at the end and removals from the beginning efficiently, it can also achieve O(1) on average. However, if the array needs resizing (e.g., doubling its capacity), it involves copying all existing elements, which is an O(n) operation. Linked lists handle these changes more gracefully without such expensive reallocations.

---

### 8. Important Points to Remember

*   **Linked List Node Structure:** Always define a `Node` struct with `data` and a `next` pointer.
*   **Stack Top:** A stack implemented with a linked list typically uses a `top` pointer pointing to the head of the list.
*   **Queue Front and Rear:** A queue implemented with a linked list requires both `front` and `rear` pointers. `front` points to the head, and `rear` points to the tail.
*   **Empty List Handling:** Always check for an empty list (`top == nullptr` for stacks, `front == nullptr` for queues) before performing operations like `pop`, `peek`, `dequeue`, or `front`.
*   **Memory Management:** **Crucially, always deallocate memory for nodes when they are removed (`pop`, `dequeue`) or when the data structure is destroyed (destructor).** Failing to do so leads to memory leaks.
*   **Time Complexity:** Both stack and queue operations (push, pop, enqueue, dequeue) using linked lists are typically **O(1)**, provided you have the correct pointers (`top` for stack, `front`/`rear` for queue).
*   **Space Complexity:** The space complexity for individual operations is O(1), but the overall space complexity for storing `n` elements is **O(n)** for both linked list stacks and queues.
*   **LIFO vs. FIFO:** Remember the core principles: Stacks are LIFO, Queues are FIFO.
*   **Applications:** Understanding real-world use cases helps solidify the importance of these data structures.
