---
title: "Stacks"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea02"
status: "completed"
scrapedAt: "2026-05-23T17:54:58.980Z"
---
# Data Structures: Module 1 - Basic Concepts of Data Structures - Stacks

This module introduces fundamental data structures, starting with the abstract data type (ADT) known as a Stack. We will explore its properties, operations, and various implementation strategies.

## 1. Introduction to Stacks

A **Stack** is a linear data structure that follows a particular order in which its operations are performed. The order is **Last-In, First-Out (LIFO)**. This means that the last element added to the stack will be the first element removed.

**Analogy:** Think of a stack of plates. You can only add a new plate to the top, and you can only remove a plate from the top. The last plate you put on is the first one you take off.

### 1.1 Abstract Data Type (ADT) - Stack

An **Abstract Data Type (ADT)** is a mathematical model for a data type that defines a set of values and a set of operations on those values. It specifies *what* operations can be performed but not *how* they are performed.

**Stack ADT:** The Stack ADT defines the following conceptual operations:

*   **Push(item):** Adds an `item` to the top of the stack.
*   **Pop():** Removes and returns the item from the top of the stack.
*   **Peek() / Top():** Returns the item from the top of the stack without removing it.
*   **IsEmpty():** Returns `true` if the stack is empty, `false` otherwise.
*   **IsFull():** Returns `true` if the stack is full (for fixed-size implementations), `false` otherwise.
*   **Size():** Returns the number of items currently in the stack.

### 1.2 Key Concepts

*   **LIFO (Last-In, First-Out):** The fundamental principle of a stack.
*   **Top:** The end of the stack where elements are added (pushed) and removed (popped).
*   **Underflow:** Occurs when an attempt is made to pop or peek from an empty stack.
*   **Overflow:** Occurs when an attempt is made to push an element onto a full stack (in fixed-size implementations).

## 2. Applications of Stacks

Stacks are widely used in computer science for various purposes, often related to undoing operations, parsing expressions, and managing function calls.

*   **Expression Evaluation:**
    *   **Infix to Postfix Conversion:** Converting an arithmetic expression from infix notation (e.g., `a + b * c`) to postfix notation (e.g., `a b c * +`).
    *   **Postfix Expression Evaluation:** Evaluating an expression already in postfix notation.
    *   *(Relates to CO2: Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues.)*
*   **Function Call Management (Call Stack):** When a function is called, its local variables and return address are pushed onto the call stack. When the function returns, these are popped off.
    *   *(Relates to CO2)*
*   **Recursion:** Recursive function calls are managed using the call stack.
    *   *(Relates to CO2)*
*   **Backtracking Algorithms:** Used in algorithms where you need to explore multiple possibilities and undo choices if a path doesn't lead to a solution (e.g., maze solving, N-Queens problem).
    *   *(Relates to CO2)*
*   **Undo/Redo Functionality:** In applications like text editors, each action can be pushed onto a stack. "Undo" pops the last action, and "Redo" might use a separate stack.
    *   *(Relates to CO2)*
*   **Syntax Analysis (Parsing):** Compilers use stacks to check the grammatical correctness of code, ensuring that parentheses, brackets, and braces are properly matched.
    *   *(Relates to CO2)*

## 3. Implementation of Stacks

Stacks can be implemented using different underlying data structures. The choice of implementation can affect performance and flexibility.

### 3.1 Array-Based Implementation

A stack can be implemented using a fixed-size array. An index (often called `top`) keeps track of the index of the top element in the stack.

**Structure:**

```
[ element1 | element2 | ... | elementN | Empty | Empty | ... ]
          ^
          |
         top
```

**Key Considerations:**

*   **`top` pointer:** Points to the index of the last inserted element.
*   **Empty Stack:** When `top` is -1 (or some other sentinel value indicating an empty stack).
*   **Full Stack:** When `top` reaches `MAX_SIZE - 1`.

**Operations (Pseudocode):**

Let `S` be the array representing the stack, `top` be the index of the top element, and `MAX_SIZE` be the maximum capacity of the array.

*   **`IsEmpty()`:**
    ```
    function IsEmpty(S):
        return top == -1
    ```
*   **`IsFull()`:**
    ```
    function IsFull(S):
        return top == MAX_SIZE - 1
    ```
*   **`Push(item)`:**
    ```
    function Push(S, item):
        if IsFull(S):
            // Handle overflow error
            print "Stack Overflow"
        else:
            top = top + 1
            S[top] = item
    ```
*   **`Pop()`:**
    ```
    function Pop(S):
        if IsEmpty(S):
            // Handle underflow error
            print "Stack Underflow"
            return null // Or some indicator of error
        else:
            item = S[top]
            top = top - 1
            return item
    ```
*   **`Peek()`:**
    ```
    function Peek(S):
        if IsEmpty(S):
            // Handle underflow error
            print "Stack Underflow"
            return null // Or some indicator of error
        else:
            return S[top]
    ```

**Advantages:**

*   Simpler to implement.
*   Faster access to elements due to contiguous memory allocation (good cache performance).

**Disadvantages:**

*   **Fixed Size:** The size of the stack is fixed at compile time. If you need more space than allocated, you get an overflow. If you allocate too much, memory is wasted.
*   **Wasted Space:** If the stack is rarely full, a significant portion of the array might remain unused.

*(Reference: Horowitz, Sahni, Anderson-Freed - Chapter 4: Stacks and Queues)*

### 3.2 Linked List-Based Implementation

A stack can be implemented using a linked list. Each node in the list contains an element and a pointer to the next node. The `top` of the stack is typically the head of the linked list.

**Structure:**

```
  Top --> [ Item1 | ptr ] --> [ Item2 | ptr ] --> [ Item3 | ptr ] --> NULL
```

**Key Considerations:**

*   **`Top` pointer:** Points to the first node (head) of the linked list.
*   **Insertion/Deletion at the Head:** Pushing and popping operations are performed at the beginning (head) of the list.

**Operations (Pseudocode):**

Let `top` be a pointer to the first node, and `Node` be a structure with `data` and `next` fields.

*   **`IsEmpty()`:**
    ```
    function IsEmpty(top):
        return top == NULL
    ```
*   **`Push(item)`:**
    ```
    function Push(top, item):
        newNode = create Node(item) // Allocate new node
        newNode.next = top
        top = newNode
        return top // New top
    ```
*   **`Pop()`:**
    ```
    function Pop(top):
        if IsEmpty(top):
            // Handle underflow error
            print "Stack Underflow"
            return null, top // Return null item and original top
        else:
            poppedItem = top.data
            temp = top
            top = top.next
            delete temp // Free the memory of the removed node
            return poppedItem, top // Return item and new top
    ```
*   **`Peek()`:**
    ```
    function Peek(top):
        if IsEmpty(top):
            // Handle underflow error
            print "Stack Underflow"
            return null
        else:
            return top.data
    ```

**Advantages:**

*   **Dynamic Size:** The stack can grow or shrink as needed. No fixed size limit (limited only by available memory).
*   **Efficient Memory Usage:** Memory is allocated only when needed, so no wasted space.

**Disadvantages:**

*   **Overhead:** Requires extra memory for pointers in each node.
*   **Slower Access:** Accessing elements might be slightly slower than array-based implementation due to pointer dereferencing and potential non-contiguous memory allocation.

*(Reference: Samanta D - Chapter 3: Stacks)*
*(Reference: Gilberg, Forouzan - Chapter 5: Stacks)*

## 4. Time Complexity Analysis

Let's analyze the time complexity of the primary stack operations for both implementations.

| Operation | Array-Based (Average) | Linked List-Based (Average) |
| :-------- | :-------------------- | :-------------------------- |
| **Push**  | O(1)                  | O(1)                        |
| **Pop**   | O(1)                  | O(1)                        |
| **Peek**  | O(1)                  | O(1)                        |
| **IsEmpty** | O(1)                  | O(1)                        |
| **IsFull** | O(1)                  | N/A (dynamic size)          |

**Important Note:** While array-based `Push` is amortized O(1), if the array needs to be resized (e.g., if you want a dynamically resizing array-based stack like `std::vector` in C++), the occasional resize operation can take O(n) time. However, for a fixed-size array, it's always O(1).

*(Relates to CO1: Compare performance of algorithms using asymptotic notations)*

## 5. Practice Questions and Exercises

**Question 1:**
What is the fundamental principle that governs the behavior of a stack?
a) First-In, First-Out (FIFO)
b) Last-In, First-Out (LIFO)
c) Random Access
d) Priority-Based Access

**Question 2:**
Consider the following sequence of operations on an initially empty stack:
1. Push(5)
2. Push(10)
3. Pop()
4. Push(15)
5. Peek()
What is the value returned by the Peek() operation?

**Question 3:**
When an attempt is made to remove an element from an empty stack, what error condition occurs?
a) Overflow
b) Underflow
c) Timeout
d) InvalidOperation

**Question 4:**
Which data structure is often implemented using a stack to manage function calls and their associated data?
a) Queue
b) Heap
c) Call Stack
d) Hash Table

**Question 5:**
Discuss the trade-offs between array-based and linked-list-based implementations of a stack.

**Question 6:**
Convert the following infix expression to postfix notation using a stack: `A + B * C - D / E`

**Question 7:**
Evaluate the following postfix expression using a stack: `5 2 * 3 +`

---

### Answers to Practice Questions

**Answer 1:**
b) Last-In, First-Out (LIFO)

**Answer 2:**
Let's trace the operations:
1. `Push(5)`: Stack: [5], Top: 5
2. `Push(10)`: Stack: [5, 10], Top: 10
3. `Pop()`: Removes 10. Stack: [5], Top: 5
4. `Push(15)`: Stack: [5, 15], Top: 15
5. `Peek()`: Returns the top element, which is 15.
**Result: 15**

**Answer 3:**
b) Underflow

**Answer 4:**
c) Call Stack

**Answer 5:**
**Array-Based Stack:**
*   **Advantages:** Simpler implementation, faster access (better cache locality).
*   **Disadvantages:** Fixed size, potential for wasted space or overflow.
**Linked List-Based Stack:**
*   **Advantages:** Dynamic size, efficient memory usage (no wasted space).
*   **Disadvantages:** Extra memory overhead for pointers, slightly slower access due to pointer dereferencing.

**Answer 6:**
Infix to Postfix Conversion: `A + B * C - D / E`

| Operator | Stack        | Output       |
| :------- | :----------- | :----------- |
| A        |              | A            |
| +        | +            | A            |
| B        | +            | A B          |
| *        | + *          | A B          |
| C        | + *          | A B C        |
| -        | +            | A B C *      |
| D        | +            | A B C * D    |
| /        | + /          | A B C * D    |
| E        | + /          | A B C * D E  |
| End      |              | A B C * D E - / |

**Postfix:** `A B C * D E / -`

*(This involves understanding operator precedence and associativity, which can be implemented using a stack.)*

**Answer 7:**
Postfix Evaluation: `5 2 * 3 +`

| Token | Stack       | Operation   | Result |
| :---- | :---------- | :---------- | :----- |
| 5     | [5]         |             |        |
| 2     | [5, 2]      |             |        |
| \*    | []          | 5 * 2       | 10     |
| 3     | [10, 3]     |             |        |
| +     | []          | 10 + 3      | 13     |

**Result: 13**

## 6. Important Points to Remember

*   Stacks are LIFO structures.
*   The primary operations are `Push` and `Pop`.
*   `Peek` allows viewing the top element without removal.
*   Underflow and Overflow are key error conditions.
*   Array-based stacks have fixed size, while linked-list-based stacks are dynamic.
*   All essential stack operations have a time complexity of O(1).
*   Stacks are fundamental for expression evaluation, recursion, and backtracking.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 7. Textbook and Reference Integration

*   **Horowitz, Sahni, Anderson-Freed:** Provides a solid foundation for the basic concepts, including array-based implementations and applications like expression evaluation. (Section on Stacks and Queues)
*   **Samanta D:** Offers clear explanations of both array and linked list implementations, with detailed pseudocode and examples. (Chapter on Stacks)
*   **Gilberg, Forouzan:** Excellent for understanding the ADT concept and practical C implementations of stacks. (Chapter on Stacks)
*   **Aho, Hopcroft, Ullman:** A classic reference, useful for understanding the theoretical underpinnings and algorithmic applications of stacks, particularly in parsing. (Chapters on Stack Automata and Parsing)
*   **Lipschuts S. (Schaum's Series):** A great resource for practice problems and concise summaries of concepts, including stack applications and conversions. (Chapter on Stacks)

---

This concludes the notes for the "Stacks" topic. Remember to practice the conversion and evaluation exercises to solidify your understanding of how stacks are used in expression manipulation.