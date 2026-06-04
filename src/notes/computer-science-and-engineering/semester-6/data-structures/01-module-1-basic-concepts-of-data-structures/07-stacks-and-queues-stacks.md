---
title: "Stacks and Queues - Stacks"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be93"
status: "completed"
scrapedAt: "2026-05-20T16:51:51.924Z"
---
# Data Structures: Module 1 - Basic Concepts
## Topic: Stacks - Introduction and Operations

---

### 1. Introduction to Stacks

A **stack** is a linear data structure that follows a particular order in which operations are performed. The order is **Last-In, First-Out (LIFO)**. This means that the last element added to the stack will be the first element removed.

Think of a stack of plates. You can only add a new plate to the top, and when you want to take a plate, you also take it from the top.

**Key Concepts:**

*   **Linear Data Structure:** Elements are arranged in a sequential order.
*   **LIFO (Last-In, First-Out):** The element that was added most recently is the first one to be accessed or removed.
*   **Abstract Data Type (ADT):** A logical description of what a data structure does, independent of how it is implemented. Stacks are often defined as ADTs.

---

### 2. Core Operations on a Stack

There are a few fundamental operations that can be performed on a stack. These operations define the behavior of a stack.

**Primary Operations:**

*   **Push:** Adds an element to the top of the stack.
    *   **Definition:** Inserts a new item at the top of the stack.
    *   **Process:**
        1.  Check if the stack is full (if using a fixed-size array implementation).
        2.  If not full, increment the stack pointer (which points to the top element).
        3.  Insert the new element at the new top position.
    *   **Example:** If a stack contains [A, B, C] and you `push(D)`, the stack becomes [A, B, C, D].

*   **Pop:** Removes and returns the element from the top of the stack.
    *   **Definition:** Removes the item from the top of the stack and returns it.
    *   **Process:**
        1.  Check if the stack is empty. If it is, an error (underflow) occurs.
        2.  If not empty, retrieve the element at the current top position.
        3.  Decrement the stack pointer.
        4.  Return the retrieved element.
    *   **Example:** If a stack contains [A, B, C, D] and you `pop()`, the stack becomes [A, B, C], and the value D is returned.

*   **Peek (or Top):** Returns the element at the top of the stack without removing it.
    *   **Definition:** Returns the item at the top of the stack without altering the stack's state.
    *   **Process:**
        1.  Check if the stack is empty. If it is, an error (underflow) occurs.
        2.  If not empty, return the element at the current top position.
    *   **Example:** If a stack contains [A, B, C, D], `peek()` will return D, and the stack remains [A, B, C, D].

*   **isEmpty:** Checks if the stack is empty.
    *   **Definition:** Returns `true` if the stack contains no elements, `false` otherwise.
    *   **Process:** Checks if the stack pointer is at its initial position (indicating an empty stack).

*   **isFull (optional):** Checks if the stack is full.
    *   **Definition:** Returns `true` if the stack has reached its maximum capacity, `false` otherwise. This is only relevant for array-based implementations with a fixed size.
    *   **Process:** Checks if the stack pointer has reached the maximum allowed index.

---

### 3. Implementation of Stacks

Stacks can be implemented using various underlying data structures. The two most common are:

**A. Array-Based Implementation:**

*   **Concept:** Uses a static-sized array to store stack elements. A variable (often called `top`) keeps track of the index of the topmost element.
*   **Advantages:**
    *   Simpler to implement.
    *   Efficient access to elements if indices are known.
*   **Disadvantages:**
    *   Fixed size: Cannot grow dynamically. If the array fills up, `push` operations will fail (overflow).
    *   Wasted space: If the array is larger than the number of elements stored, the unused space is wasted.

*   **Representation:**
    ```
    [element1, element2, ..., elementN, __ , __]
                         ^
                         top
    ```
    *   `top` typically points to the index of the last inserted element. If the stack is empty, `top` is often initialized to -1.

*   **Example Code Snippet (Conceptual - Python-like):**

    ```python
    class StackArray:
        def __init__(self, capacity):
            self.capacity = capacity
            self.stack = [None] * capacity # Initialize array with None
            self.top = -1 # Stack is initially empty

        def is_empty(self):
            return self.top == -1

        def is_full(self):
            return self.top == self.capacity - 1

        def push(self, item):
            if self.is_full():
                print("Stack Overflow!")
                return
            self.top += 1
            self.stack[self.top] = item
            print(f"{item} pushed to stack.")

        def pop(self):
            if self.is_empty():
                print("Stack Underflow!")
                return None
            item = self.stack[self.top]
            self.stack[self.top] = None # Optional: Clear the popped element
            self.top -= 1
            return item

        def peek(self):
            if self.is_empty():
                print("Stack is empty!")
                return None
            return self.stack[self.top]
    ```

**B. Linked List-Based Implementation:**

*   **Concept:** Uses a linked list where each node contains an element and a pointer to the next node. The `top` of the stack is represented by the head of the linked list.
*   **Advantages:**
    *   Dynamic size: Can grow or shrink as needed. No risk of overflow due to fixed capacity.
    *   Memory efficiency: Only uses memory for the elements actually stored.
*   **Disadvantages:**
    *   Slightly more complex to implement due to pointer management.
    *   Requires extra memory for pointers in each node.

*   **Representation:**
    ```
    [Node(Data=A, Next=ptr_to_B)] -> [Node(Data=B, Next=ptr_to_C)] -> [Node(Data=C, Next=None)]
                                    ^
                                    top (head)
    ```

*   **Example Code Snippet (Conceptual - Python-like):**

    ```python
    class Node:
        def __init__(self, data):
            self.data = data
            self.next = None

    class StackLinkedList:
        def __init__(self):
            self.top = None # Head of the linked list is the top of the stack

        def is_empty(self):
            return self.top is None

        def push(self, item):
            new_node = Node(item)
            new_node.next = self.top # New node points to the current top
            self.top = new_node       # New node becomes the new top
            print(f"{item} pushed to stack.")

        def pop(self):
            if self.is_empty():
                print("Stack Underflow!")
                return None
            popped_item = self.top.data
            self.top = self.top.next # Move top to the next node
            return popped_item

        def peek(self):
            if self.is_empty():
                print("Stack is empty!")
                return None
            return self.top.data
    ```

---

### 4. Applications of Stacks

Stacks are used in various computational tasks due to their LIFO property.

*   **Function Call Stack:** When functions are called in a program, their activation records (containing local variables, parameters, and return addresses) are pushed onto a call stack. When a function returns, its record is popped off the stack. This is crucial for managing program execution flow.
    *   **Example:**
        ```
        main() calls funcA()
        funcA() calls funcB()

        Stack:
        [ ... ]
        [ funcB activation record ]  <- Top
        [ funcA activation record ]
        [ main activation record ]
        ```

*   **Expression Evaluation:**
    *   **Infix to Postfix Conversion:** Stacks are used to convert arithmetic expressions from infix notation (e.g., `a + b * c`) to postfix notation (e.g., `a b c * +`).
    *   **Postfix Expression Evaluation:** Stacks are used to evaluate expressions already in postfix notation.

*   **Backtracking Algorithms:** Many algorithms that involve exploring possibilities and reverting if a path leads to a dead end (e.g., maze solving, Sudoku solvers) use stacks to keep track of the current state.

*   **Undo/Redo Functionality:** In text editors or other applications, actions can be pushed onto a stack. The "undo" operation pops the last action, and a "redo" operation (often using a second stack) can reapply it.

*   **Browser History:** The "back" button in a web browser can be thought of as a stack. Each visited page is pushed onto the history stack, and pressing "back" pops the current page and returns to the previous one.

---

### 5. Practice Questions & Exercises

**Question 1:**
Which property does a stack follow?
a) FIFO (First-In, First-Out)
b) LIFO (Last-In, First-Out)
c) Both FIFO and LIFO
d) None of the above

**Question 2:**
What is the operation called when an element is added to a stack?
a) Pop
b) Push
c) Peek
d) Insert

**Question 3:**
If a stack is empty and you try to `pop()` an element, what type of error occurs?
a) Stack Overflow
b) Stack Empty Error
c) Stack Underflow
d) Index Out of Bounds

**Question 4:**
Consider an empty stack. The following operations are performed: `push(10)`, `push(20)`, `pop()`, `push(30)`, `peek()`. What is the value returned by `peek()`?
a) 10
b) 20
c) 30
d) Error

**Question 5:**
Describe a real-world scenario (other than a stack of plates) where the LIFO principle is applied.

---

### 6. Answers to Practice Questions

**Answer 1:**
b) LIFO (Last-In, First-Out)

**Answer 2:**
b) Push

**Answer 3:**
c) Stack Underflow

**Answer 4:**
c) 30
    *   `push(10)`: Stack = [10]
    *   `push(20)`: Stack = [10, 20]
    *   `pop()`: Returns 20, Stack = [10]
    *   `push(30)`: Stack = [10, 30]
    *   `peek()`: Returns 30, Stack = [10, 30]

**Answer 5:**
A common real-world example is the **back button functionality in a web browser or in a file explorer**. When you navigate through web pages or folders, each visited location is pushed onto a history stack. When you press the back button, the current location is popped from the stack, and you are taken to the previous location. The most recently visited page/folder is the first one you go back to.

---

### 7. Important Points to Remember

*   **LIFO is the defining characteristic of a stack.**
*   The primary operations are `push`, `pop`, and `peek`.
*   `pop` removes and returns an element, while `peek` only returns it.
*   **Stack Overflow** occurs when trying to `push` onto a full stack (in array implementations).
*   **Stack Underflow** occurs when trying to `pop` or `peek` from an empty stack.
*   Stacks are crucial for managing function calls, expression evaluation, and backtracking.
*   They can be implemented efficiently using arrays (fixed size) or linked lists (dynamic size).

---
