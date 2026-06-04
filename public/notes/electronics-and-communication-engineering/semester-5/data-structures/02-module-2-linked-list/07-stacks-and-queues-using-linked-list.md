---
title: "Stacks and Queues using Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea0e"
status: "completed"
scrapedAt: "2026-05-23T17:55:06.859Z"
---
# DATA STRUCTURES: Module 2 - Linked List

## Topic: Stacks and Queues using Linked List

### Introduction

This module explores the implementation of two fundamental abstract data types (ADTs), Stacks and Queues, utilizing the power of Linked Lists. While arrays can also be used for these ADTs, linked lists offer certain advantages, especially when dealing with dynamic data sizes. We will delve into the core concepts, operations, and practical applications of stacks and queues implemented with linked lists.

---

### 1. Stacks using Linked List

#### 1.1. What is a Stack?

*   **Definition:** A Stack is a linear data structure that follows the **Last-In, First-Out (LIFO)** principle. This means the last element added to the stack is the first one to be removed.
*   **Analogy:** Imagine a stack of plates. You can only add a new plate to the top, and you can only remove a plate from the top.
*   **Key Operations:**
    *   **Push:** Adds an element to the top of the stack.
    *   **Pop:** Removes and returns the element from the top of the stack.
    *   **Peek/Top:** Returns the element at the top of the stack without removing it.
    *   **isEmpty:** Checks if the stack is empty.
    *   **isFull (if applicable):** Checks if the stack is full (more relevant for array-based implementations, but conceptually exists).

#### 1.2. Implementing Stacks using Linked List

*   **Why Linked Lists?**
    *   **Dynamic Sizing:** Linked lists can grow or shrink dynamically, unlike fixed-size arrays. This is advantageous when the maximum size of the stack is not known beforehand.
    *   **Efficient Insertions/Deletions at the Beginning:** Adding or removing elements at the beginning of a linked list is an O(1) operation, which perfectly aligns with stack operations.

*   **Node Structure:**
    Each element in the linked list will be stored in a `Node`, which typically contains:
    *   `data`: The actual value to be stored.
    *   `next`: A pointer to the next node in the list.

    ```c
    // Example Node structure (C-like pseudocode)
    struct Node {
        int data;
        struct Node* next;
    };
    ```

*   **Stack Representation:**
    A stack can be represented by a pointer to its **top** node. The `top` pointer always points to the most recently added element.

    ```c
    // Example Stack structure (C-like pseudocode)
    struct Stack {
        struct Node* top;
    };
    ```

#### 1.3. Stack Operations with Linked List Implementation

*   **`push(stack, element)`:**
    1.  Create a new node with the given `element`.
    2.  If the stack is empty, set the `top` of the stack to point to the new node.
    3.  If the stack is not empty, set the `next` pointer of the new node to point to the current `top` of the stack.
    4.  Update the `top` of the stack to point to the new node.

    *   **Time Complexity:** O(1)

    *   **Pseudocode:**
        ```
        function push(stack, element):
            newNode = createNode(element)
            newNode.next = stack.top
            stack.top = newNode
        ```

*   **`pop(stack)`:**
    1.  Check if the stack is empty. If so, return an error or a special value indicating underflow.
    2.  Store the `top` node in a temporary variable (e.g., `temp`).
    3.  Update the `top` of the stack to point to the next node (`stack.top.next`).
    4.  Free the memory occupied by the `temp` node (to prevent memory leaks).
    5.  Return the `data` from the `temp` node.

    *   **Time Complexity:** O(1)

    *   **Pseudocode:**
        ```
        function pop(stack):
            if isEmpty(stack):
                return ERROR // Underflow
            temp = stack.top
            data = temp.data
            stack.top = stack.top.next
            free(temp)
            return data
        ```

*   **`peek(stack)` (or `top(stack)`)**:
    1.  Check if the stack is empty. If so, return an error or a special value.
    2.  Return the `data` of the node pointed to by `stack.top`.

    *   **Time Complexity:** O(1)

    *   **Pseudocode:**
        ```
        function peek(stack):
            if isEmpty(stack):
                return ERROR // Stack is empty
            return stack.top.data
        ```

*   **`isEmpty(stack)`:**
    1.  Return `true` if `stack.top` is `NULL` (or `nullptr`), otherwise return `false`.

    *   **Time Complexity:** O(1)

    *   **Pseudocode:**
        ```
        function isEmpty(stack):
            return (stack.top == NULL)
        ```

#### 1.4. Example: Mathematical Expression Evaluation (Infix to Postfix)

*   **Concept:** Stacks are crucial for converting infix expressions (like `a + b * c`) to postfix expressions (like `a b c * +`). The LIFO nature helps in managing operator precedence and parentheses.
*   **How it works (briefly):**
    1.  Scan the infix expression from left to right.
    2.  If an operand is encountered, append it to the postfix output.
    3.  If an opening parenthesis `(` is encountered, push it onto the stack.
    4.  If a closing parenthesis `)` is encountered, pop operators from the stack and append them to the output until an opening parenthesis is found. Pop and discard the opening parenthesis.
    5.  If an operator is encountered:
        *   While the stack is not empty, the top element is not `(` and the precedence of the top element is greater than or equal to the current operator, pop the top element and append it to the output.
        *   Push the current operator onto the stack.
    6.  After scanning the entire expression, pop any remaining operators from the stack and append them to the output.

*   **Reference:** This is a classic application discussed in Horowitz, Sahni, and Anderson-Freed, as well as Samanta D.

#### 1.5. Important Points to Remember (Stacks)

*   LIFO principle.
*   Primary operations: Push, Pop, Peek.
*   Linked list implementation uses a `top` pointer.
*   All fundamental operations are O(1).
*   Applications: Function call stack, expression evaluation, undo/redo functionality, backtracking algorithms.

---

### 2. Queues using Linked List

#### 2.1. What is a Queue?

*   **Definition:** A Queue is a linear data structure that follows the **First-In, First-Out (FIFO)** principle. This means the first element added to the queue is the first one to be removed.
*   **Analogy:** Imagine a queue (line) at a ticket counter. The person who arrives first is the first one to be served.
*   **Key Operations:**
    *   **Enqueue:** Adds an element to the **rear** (back) of the queue.
    *   **Dequeue:** Removes and returns the element from the **front** of the queue.
    *   **Front/Peek:** Returns the element at the front of the queue without removing it.
    *   **Rear:** Returns the element at the rear of the queue without removing it.
    *   **isEmpty:** Checks if the queue is empty.
    *   **isFull (if applicable):** Checks if the queue is full (more relevant for array-based implementations).

#### 2.2. Implementing Queues using Linked List

*   **Why Linked Lists?**
    *   **Dynamic Sizing:** Similar to stacks, linked lists handle dynamic resizing efficiently.
    *   **Efficient Insertions/Deletions at Both Ends:** Linked lists allow for O(1) insertion at the rear and O(1) deletion from the front if we maintain pointers to both the `front` and `rear` of the list.

*   **Node Structure:** (Same as for Stack)
    ```c
    // Example Node structure (C-like pseudocode)
    struct Node {
        int data;
        struct Node* next;
    };
    ```

*   **Queue Representation:**
    A queue can be represented by two pointers:
    *   `front`: Points to the first node in the queue (where dequeue happens).
    *   `rear`: Points to the last node in the queue (where enqueue happens).

    ```c
    // Example Queue structure (C-like pseudocode)
    struct Queue {
        struct Node* front;
        struct Node* rear;
    };
    ```

#### 2.3. Queue Operations with Linked List Implementation

*   **`enqueue(queue, element)`:**
    1.  Create a new node with the given `element`.
    2.  If the queue is empty, set both `front` and `rear` to point to the new node.
    3.  If the queue is not empty, set the `next` pointer of the current `rear` node to point to the new node.
    4.  Update the `rear` of the queue to point to the new node.

    *   **Time Complexity:** O(1)

    *   **Pseudocode:**
        ```
        function enqueue(queue, element):
            newNode = createNode(element)
            if isEmpty(queue):
                queue.front = newNode
                queue.rear = newNode
            else:
                queue.rear.next = newNode
                queue.rear = newNode
        ```

*   **`dequeue(queue)`:**
    1.  Check if the queue is empty. If so, return an error or a special value indicating underflow.
    2.  Store the `front` node in a temporary variable (e.g., `temp`).
    3.  Store the `data` from the `temp` node.
    4.  Update the `front` of the queue to point to the next node (`queue.front.next`).
    5.  If the queue becomes empty after dequeueing (i.e., `queue.front` becomes `NULL`), also set `queue.rear` to `NULL`.
    6.  Free the memory occupied by the `temp` node.
    7.  Return the stored `data`.

    *   **Time Complexity:** O(1)

    *   **Pseudocode:**
        ```
        function dequeue(queue):
            if isEmpty(queue):
                return ERROR // Underflow
            temp = queue.front
            data = temp.data
            queue.front = queue.front.next
            if queue.front == NULL: // Queue became empty
                queue.rear = NULL
            free(temp)
            return data
        ```

*   **`front(queue)` (or `peek(queue)`)**:
    1.  Check if the queue is empty. If so, return an error or a special value.
    2.  Return the `data` of the node pointed to by `queue.front`.

    *   **Time Complexity:** O(1)

    *   **Pseudocode:**
        ```
        function front(queue):
            if isEmpty(queue):
                return ERROR // Queue is empty
            return queue.front.data
        ```

*   **`isEmpty(queue)`:**
    1.  Return `true` if `queue.front` is `NULL` (or `nullptr`), otherwise return `false`.

    *   **Time Complexity:** O(1)

    *   **Pseudocode:**
        ```
        function isEmpty(queue):
            return (queue.front == NULL)
        ```

#### 2.4. Example: Operating System Process Scheduling

*   **Concept:** Operating systems often use queues to manage processes that are waiting for the CPU. Processes are enqueued as they become ready and dequeued when they are allocated CPU time. This ensures fair allocation of resources according to a First-Come, First-Served (FCFS) policy.
*   **How it works:**
    1.  When a new process arrives, it's `enqueued`.
    2.  The CPU scheduler picks the process at the `front` of the ready queue for execution.
    3.  When a process finishes or needs to wait for an I/O operation, it might be `dequeued` and potentially `enqueued` again later if it needs to resume execution.

*   **Reference:** This is a practical application discussed in various systems and data structures texts.

#### 2.5. Example: Breadth-First Search (BFS) Algorithm

*   **Concept:** BFS is a graph traversal algorithm that explores a graph level by level. A queue is essential for BFS to keep track of the nodes to visit next.
*   **How it works:**
    1.  Start with a source node, mark it as visited, and enqueue it.
    2.  While the queue is not empty:
        *   Dequeue a node.
        *   Process the dequeued node (e.g., print it).
        *   For each unvisited neighbor of the dequeued node:
            *   Mark the neighbor as visited and enqueue it.

*   **Reference:** Aho, Hopcroft, and Ullman's book extensively covers graph algorithms like BFS.

#### 2.6. Important Points to Remember (Queues)

*   FIFO principle.
*   Primary operations: Enqueue, Dequeue, Front.
*   Linked list implementation uses `front` and `rear` pointers.
*   All fundamental operations are O(1).
*   Applications: CPU scheduling, I/O buffering, BFS algorithm, handling requests in order.

---

### 3. Comparison: Stacks vs. Queues

| Feature        | Stack (Linked List)                   | Queue (Linked List)                     |
| :------------- | :------------------------------------ | :-------------------------------------- |
| **Principle**  | Last-In, First-Out (LIFO)             | First-In, First-Out (FIFO)              |
| **Insertion**  | At the **top** (beginning of list)    | At the **rear** (end of list)           |
| **Delection**  | From the **top** (beginning of list)  | From the **front** (beginning of list)  |
| **Pointers**   | `top`                                 | `front`, `rear`                         |
| **Efficiency** | All operations O(1)                   | All operations O(1)                     |
| **Analogy**    | Stack of plates, undo history         | Waiting line, print spooler             |

---

### 4. Course Outcome Alignment

*   **CO2: Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues.**
    *   This topic directly addresses CO2 by providing the foundation for implementing and using stacks and queues, which are essential for solving many real-world problems (e.g., process scheduling, expression evaluation, function call management). The linked list implementation ensures efficiency (O(1) operations).

*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2)**
    *   Understanding the O(1) time complexity of stack and queue operations using linked lists is a direct application of asymptotic notation. This knowledge helps in comparing their performance against other potential implementations (like array-based) or other data structures.

---

### 5. Practice Questions

1.  **(Stack)** Describe the steps involved in pushing an element onto an empty linked list-based stack. What is the time complexity?
2.  **(Stack)** Write pseudocode for a `pop` operation on a linked list-based stack, including error handling for an empty stack.
3.  **(Queue)** Explain the difference between `enqueue` and `dequeue` operations in a linked list-based queue.
4.  **(Queue)** If a linked list-based queue has only one element, what happens to the `front` and `rear` pointers after a `dequeue` operation?
5.  **(Comparison)** When would you prefer a linked list implementation of a stack over an array implementation, and vice-versa? Justify your answer based on performance characteristics.
6.  **(Application)** How can a stack be used to check if a given string of parentheses is balanced (e.g., `({[]})` is balanced, `([)]` is not)? Provide a brief explanation.
7.  **(Application)** Briefly describe how a queue is used in the context of managing web server requests.

---

### 6. Answers to Practice Questions

1.  **Steps for pushing onto an empty stack:**
    *   Create a new node.
    *   Set the `data` of the new node.
    *   Set the `next` pointer of the new node to `NULL` (as it's the only node).
    *   Set the `top` pointer of the stack to point to this new node.
    *   **Time Complexity:** O(1).

2.  **Pseudocode for `pop`:**
    ```
    function pop(stack):
        if stack.top == NULL:
            print "Error: Stack Underflow"
            return UNDEFINED_VALUE // Or some error indicator
        else:
            temp = stack.top
            poppedData = temp.data
            stack.top = temp.next
            free(temp) // Release memory
            return poppedData
    ```

3.  **Difference between `enqueue` and `dequeue`:**
    *   `enqueue`: Adds an element to the **rear** of the queue. In a linked list, this involves creating a new node and updating the `next` pointer of the current `rear` node, then updating the `rear` pointer itself.
    *   `dequeue`: Removes an element from the **front** of the queue. In a linked list, this involves taking the `front` node, returning its data, and updating the `front` pointer to point to the next node.

4.  **Pointers after dequeue on a single-element queue:**
    If a linked list-based queue has only one element, the `front` and `rear` pointers both point to that single node. After a `dequeue` operation:
    *   The `front` pointer is updated to `NULL` (since `temp.next` would be `NULL`).
    *   Because the queue becomes empty, the `rear` pointer should also be set to `NULL`.

5.  **Linked List vs. Array Implementation:**
    *   **Linked List Preferred:**
        *   When the size of the stack is **unknown or highly variable**. Linked lists avoid the overhead of pre-allocating a large array that might be mostly unused or the problem of running out of space if the array is too small.
        *   When **memory usage is a primary concern**, and we don't want to waste space with a large, potentially underutilized array.
    *   **Array Preferred:**
        *   When the **size of the stack is known and fixed** beforehand. Arrays offer better cache locality, potentially leading to slightly faster access times in practice, although asymptotically they are the same (O(1)).
        *   When **simplicity of implementation** is prioritized and dynamic resizing is not a critical requirement.

6.  **Parentheses Balancing using Stack:**
    *   Initialize an empty stack.
    *   Iterate through the string:
        *   If an opening parenthesis (`(`, `[`, `{`) is encountered, push it onto the stack.
        *   If a closing parenthesis (`)`, `]`, `}`) is encountered:
            *   If the stack is empty, the expression is unbalanced.
            *   Pop the top element from the stack.
            *   Check if the popped element is the corresponding opening parenthesis for the current closing parenthesis. If not, the expression is unbalanced.
    *   After iterating through the entire string, if the stack is empty, the expression is balanced; otherwise, it's unbalanced (unmatched opening parentheses).

7.  **Queue in Web Server Requests:**
    *   When a user sends a request to a web server, the server receives it and needs to process it.
    *   To handle multiple requests concurrently or sequentially without dropping any, the server places each incoming request into a **queue**.
    *   The server then processes requests from the **front** of the queue in the order they arrived (FCFS). This ensures fairness and prevents starvation of requests.
    *   If the server is busy processing another request, new requests are simply `enqueued`, waiting their turn.

---

### 8. Key Concepts and Definitions Recap

*   **Stack:** LIFO structure, Push, Pop, Peek, Top pointer.
*   **Queue:** FIFO structure, Enqueue, Dequeue, Front, Rear pointers.
*   **Linked List:** A sequence of nodes, where each node contains data and a pointer to the next node.
*   **Node:** The basic building block of a linked list.
*   **Time Complexity:** O(1) for all primary operations when implemented using linked lists with appropriate pointers.
*   **Applications:** Expression evaluation, function calls, process scheduling, BFS, managing tasks.

---
This comprehensive study material covers the core concepts of implementing Stacks and Queues using Linked Lists, aligning with the specified learning and course outcomes. Remember to practice coding these operations to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
