---
title: "Stacks"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures: Algorithms, Performance Analysis, Space Complexity, Time Complexity, Asymptotic Notations"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363dc"
status: "completed"
scrapedAt: "2026-05-23T16:20:34.668Z"
---
# DATA STRUCTURES: Module 1 - Basic Concepts & Stacks

This module introduces fundamental concepts in Data Structures, focusing on algorithms, performance analysis, and a specific linear data structure: Stacks. We will explore how to measure the efficiency of algorithms and delve into the operations and applications of stacks.

## 1.1 Algorithms

**Definition:** An algorithm is a step-by-step procedure or a set of rules for solving a problem or accomplishing a task. It must be:
*   **Unambiguous:** Each step must be clear and have only one interpretation.
*   **Finite:** The algorithm must terminate after a finite number of steps.
*   **Effective:** Each step must be feasible and executable.
*   **Input:** Zero or more quantities are externally supplied.
*   **Output:** At least one quantity is produced.

**Relationship with Data Structures:** Algorithms operate on data structures. The choice of data structure significantly impacts the efficiency of an algorithm.

**Reference:**
*   **Horowitz, Sahni, & Anderson-Freed:** Emphasizes the importance of designing efficient algorithms to work with data structures.
*   **Gilberg & Forouzan:** Discusses algorithms as the backbone of data manipulation.

---

## 1.2 Performance Analysis

Performance analysis is crucial for understanding how efficient an algorithm is in terms of time and space.

### 1.2.1 Time Complexity

**Definition:** Time complexity measures the amount of time an algorithm takes to execute as a function of the input size. It's typically expressed using asymptotic notations.

**How to Measure:**
*   **Counting Operations:** We count the number of elementary operations performed by the algorithm.
*   **Input Size (n):** The primary factor influencing execution time.

**Example:** Consider an algorithm that iterates through an array of `n` elements. The loop will execute `n` times, so the time complexity would be related to `n`.

**Reference:**
*   **Samanta:** Provides a detailed explanation of how to analyze the time taken by different algorithmic constructs (loops, conditional statements).
*   **Aho, Hopcroft, & Ullman:** Introduces systematic methods for analyzing the running time of algorithms.

### 1.2.2 Space Complexity

**Definition:** Space complexity measures the amount of memory an algorithm requires to execute as a function of the input size. This includes both the space for input and auxiliary space (additional space used by the algorithm).

**How to Measure:**
*   **Counting Memory Units:** We count the number of memory units (e.g., bytes, words) required.
*   **Input Size (n):** The primary factor influencing memory usage.

**Example:** An algorithm that creates a copy of an array of `n` elements will have a space complexity related to `n`.

**Reference:**
*   **Lipschuts:** Explains how to analyze memory requirements for different data structures and algorithms.
*   **Brass:** Discusses advanced concepts related to memory management and its impact on algorithm performance.

---

## 1.3 Asymptotic Notations

Asymptotic notations are used to describe the behavior of algorithms for large input sizes, ignoring constant factors and lower-order terms. This allows for a generalized comparison of algorithm efficiency.

### 1.3.1 Big-O Notation (O) - Upper Bound

**Definition:** $f(n) = O(g(n))$ means that there exist positive constants $c$ and $n_0$ such that $0 \le f(n) \le c \cdot g(n)$ for all $n \ge n_0$.
*   It represents the **worst-case** time or space complexity.
*   We are interested in the upper limit on the growth rate.

**Example:**
*   If an algorithm takes $3n^2 + 5n + 2$ operations, its Big-O complexity is $O(n^2)$. We ignore the constants $3, 5, 2$ and the lower-order term $5n$.

### 1.3.2 Big-Omega Notation ($\Omega$) - Lower Bound

**Definition:** $f(n) = \Omega(g(n))$ means that there exist positive constants $c$ and $n_0$ such that $0 \le c \cdot g(n) \le f(n)$ for all $n \ge n_0$.
*   It represents the **best-case** time or space complexity.
*   We are interested in the lower limit on the growth rate.

**Example:**
*   If an algorithm guarantees to perform at least $n^2$ operations, its Big-Omega complexity is $\Omega(n^2)$.

### 1.3.3 Big-Theta Notation ($\Theta$) - Tight Bound

**Definition:** $f(n) = \Theta(g(n))$ means that there exist positive constants $c_1, c_2$ and $n_0$ such that $0 \le c_1 \cdot g(n) \le f(n) \le c_2 \cdot g(n)$ for all $n \ge n_0$.
*   It represents the **average-case** or **tight bound** of the time or space complexity.
*   The algorithm's growth rate is bounded both from above and below by the same function.

**Example:**
*   If an algorithm consistently takes approximately $5n^2$ operations, its Big-Theta complexity is $\Theta(n^2)$.

### 1.3.4 Little-o Notation (o) and Little-omega Notation ($\omega$)

*   **Little-o (o):** $f(n) = o(g(n))$ if $f(n)$ is strictly less than $g(n)$ for all sufficiently large $n$. This means $f(n)$ grows strictly slower than $g(n)$. ($f(n) = O(g(n))$ and $f(n) \ne \Theta(g(n))$)
*   **Little-omega ($\omega$):** $f(n) = \omega(g(n))$ if $f(n)$ is strictly greater than $g(n)$ for all sufficiently large $n$. This means $f(n)$ grows strictly faster than $g(n)$. ($f(n) = \Omega(g(n))$ and $f(n) \ne \Theta(g(n))$)

**Summary Table:**

| Notation | Meaning           | Bound Type |
| :------- | :---------------- | :--------- |
| $O$      | Upper Bound       | Worst-Case |
| $\Omega$ | Lower Bound       | Best-Case  |
| $\Theta$ | Tight Bound       | Average-Case (often) |
| $o$      | Strict Upper Bound|            |
| $\omega$ | Strict Lower Bound|            |

**Course Outcome Alignment:**
*   **CO1 (K2):** This section directly addresses the comparison of algorithm performance using asymptotic notations. Students are expected to understand and apply these notations to describe algorithm efficiency.

**Important Points to Remember:**
*   Asymptotic notations focus on the behavior for *large* input sizes.
*   Constants and lower-order terms are ignored because they become insignificant as `n` grows.
*   Understanding these notations is key to choosing efficient data structures and algorithms.

**Practice Questions (Asymptotic Notations):**

1.  What is the Big-O complexity of an algorithm that performs $2n^3 + 10n^2 - 5n + 100$ operations?
2.  If an algorithm has a best-case time complexity of $3n$ and a worst-case time complexity of $n^2$, what can you say about its $\Theta$ complexity?
3.  Is $O(n^2)$ the same as $\Theta(n^2)$? Explain.
4.  Determine the Big-O complexity for searching an element in a sorted array using binary search.

**Answers:**

1.  $O(n^3)$
2.  It doesn't have a $\Theta(n^2)$ complexity because the best case is much better. It might have a $\Theta(n)$ complexity if the average case is close to the best case, or it might not have a tight bound that is a single function. We can say it's $O(n^2)$ and $\Omega(n)$.
3.  No. $O(n^2)$ is an upper bound, while $\Theta(n^2)$ is a tight bound (both upper and lower bound). An algorithm with $\Theta(n^2)$ complexity is also $O(n^2)$, but not all algorithms that are $O(n^2)$ are $\Theta(n^2)$ (e.g., an algorithm that is actually $O(n)$ is also $O(n^2)$ but not $\Theta(n^2)$).
4.  $O(\log n)$

---

## 1.4 Stacks

A stack is a **linear data structure** that follows a particular order in which operations are performed. The order is **Last-In, First-Out (LIFO)**.

**Analogy:** Imagine a stack of plates. You can only add a new plate to the top, and you can only remove the top plate. The last plate you put on is the first one you take off.

### 1.4.1 Basic Operations

The primary operations on a stack are:

*   **`PUSH(item)`:** Adds an `item` to the top of the stack.
*   **`POP()`:** Removes and returns the item from the top of the stack. If the stack is empty, it usually results in an error (underflow).
*   **`PEEK()` / `TOP()`:** Returns the item from the top of the stack without removing it. If the stack is empty, it usually results in an error.
*   **`isEmpty()`:** Returns `true` if the stack is empty, `false` otherwise.
*   **`isFull()`:** (Applicable for array-based implementations) Returns `true` if the stack is full, `false` otherwise.

### 1.4.2 Abstract Data Type (ADT) for Stack

The abstract data type (ADT) defines the behavior of a stack without specifying its implementation details.

```
ADT Stack is
  Data:
    A finite ordered collection of elements.
    A designated "top" element.

  Operations:
    CreateStack(): Creates an empty stack.
    IsEmpty(S): Returns true if stack S is empty, false otherwise.
    IsFull(S): Returns true if stack S is full, false otherwise.
    Push(S, item): Adds item to the top of stack S.
    Pop(S): Removes and returns the top item from stack S.
    Peek(S): Returns the top item from stack S without removing it.
end
```

### 1.4.3 Implementation of Stacks

Stacks can be implemented using two primary methods:

#### 1.4.3.1 Array-Based Implementation

In this approach, a static array is used to store the stack elements. A variable (e.g., `top`) is used to keep track of the index of the topmost element.

**Data Members:**
*   `arr[]`: An array to store stack elements.
*   `top`: An integer representing the index of the top element. Initially, `top` is -1 for an empty stack.
*   `capacity`: The maximum size of the array.

**Operations (Pseudocode):**

```pseudocode
// Assuming max_size is the capacity of the array

Stack = array of size max_size
top = -1

// Push operation
procedure Push(item):
  if top == max_size - 1:
    print "Stack Overflow"
  else:
    top = top + 1
    Stack[top] = item

// Pop operation
procedure Pop():
  if top == -1:
    print "Stack Underflow"
    return null // Or raise an exception
  else:
    item = Stack[top]
    top = top - 1
    return item

// Peek operation
procedure Peek():
  if top == -1:
    print "Stack is empty"
    return null // Or raise an exception
  else:
    return Stack[top]

// isEmpty operation
procedure isEmpty():
  return top == -1

// isFull operation
procedure isFull():
  return top == max_size - 1
```

**Time Complexity (Array-Based):**
*   `PUSH`: $O(1)$ (if not full)
*   `POP`: $O(1)$ (if not empty)
*   `PEEK`: $O(1)$ (if not empty)
*   `isEmpty`: $O(1)$
*   `isFull`: $O(1)$

**Space Complexity (Array-Based):**
*   $O(N)$, where $N$ is the maximum capacity of the array. This is a fixed space requirement.

**Advantages:**
*   Simple to implement.
*   Efficient $O(1)$ access time for operations.

**Disadvantages:**
*   **Fixed Capacity:** The size of the stack is fixed at compile time. If the stack exceeds this capacity, overflow occurs. If the capacity is much larger than needed, it wastes memory.
*   **Wasted Space:** If the stack is rarely full, a significant portion of the array might remain unused.

**Reference:**
*   **Horowitz, Sahni, & Anderson-Freed:** Discusses array-based implementation with clear diagrams and C code examples.
*   **Samanta:** Provides detailed explanations and examples of array implementation, including handling overflow.
*   **Gilberg & Forouzan:** Covers the array-based stack with practical C implementations.

#### 1.4.3.2 Linked List-Based Implementation

In this approach, a linked list is used to implement the stack. Each node in the list stores an element and a pointer to the next node. The `top` pointer points to the head of the linked list.

**Data Members:**
*   `top`: A pointer to the first node (top element) of the linked list.
*   `Node`: Structure containing `data` and `next` pointer.

**Operations (Pseudocode):**

```pseudocode
// Node structure
structure Node:
  data
  next pointer to Node

// Stack structure
structure Stack:
  top pointer to Node // Points to the top element

// Create an empty stack
procedure CreateStack():
  S.top = null

// Push operation
procedure Push(S, item):
  newNode = new Node
  newNode.data = item
  newNode.next = S.top
  S.top = newNode

// Pop operation
procedure Pop(S):
  if S.top == null:
    print "Stack Underflow"
    return null // Or raise an exception
  else:
    item = S.top.data
    temp = S.top
    S.top = S.top.next
    delete temp
    return item

// Peek operation
procedure Peek(S):
  if S.top == null:
    print "Stack is empty"
    return null // Or raise an exception
  else:
    return S.top.data

// isEmpty operation
procedure isEmpty(S):
  return S.top == null
```

**Time Complexity (Linked List-Based):**
*   `PUSH`: $O(1)$
*   `POP`: $O(1)$
*   `PEEK`: $O(1)$
*   `isEmpty`: $O(1)$

**Space Complexity (Linked List-Based):**
*   $O(n)$, where `n` is the number of elements currently in the stack. Space is allocated dynamically as needed.

**Advantages:**
*   **Dynamic Size:** The stack can grow or shrink as needed, without a predefined capacity. No overflow due to fixed size, only due to available memory.
*   **Efficient Memory Usage:** Only the required memory is used.

**Disadvantages:**
*   **Overhead:** Each element requires extra space for the `next` pointer, which adds overhead compared to the array implementation.
*   **Slightly Slower:** Pointer manipulations can be marginally slower than direct array access due to memory management.

**Reference:**
*   **Horowitz, Sahni, & Anderson-Freed:** Explains linked list implementation and its dynamic nature.
*   **Tremblay & Sorenson:** Covers various linked list applications, including stacks, with detailed explanations.
*   **Classic Data Structures by Samanta:** Offers a comprehensive comparison of array and linked list implementations for stacks.

**Course Outcome Alignment:**
*   **CO2 (K3):** Students are expected to solve real-world problems using stacks, which requires understanding and applying their implementation. They should be able to choose between array and linked list implementations based on problem requirements.

**Practice Questions (Stacks):**

1.  Describe the LIFO principle of a stack.
2.  What is the difference between `POP` and `PEEK` operations?
3.  Explain the concept of "Stack Overflow" and "Stack Underflow."
4.  Consider an array-based stack with a capacity of 5. If you perform the following operations: `PUSH(10)`, `PUSH(20)`, `POP()`, `PUSH(30)`, `PUSH(40)`, `PUSH(50)`, `PUSH(60)`. What will be the output of each operation, and what will be the state of the stack (values and `top` index) after the last operation?
5.  Which implementation (array-based or linked list-based) would you prefer for a stack if you don't know the maximum number of elements beforehand and want to avoid wasting memory? Justify your answer.

**Answers:**

1.  LIFO stands for Last-In, First-Out. This means the last element added to the stack is the first element to be removed.
2.  `POP` removes and returns the top element, while `PEEK` only returns the top element without removing it.
3.  *   **Stack Overflow:** Occurs when you try to `PUSH` an element onto a stack that is already full (in array-based implementations).
    *   **Stack Underflow:** Occurs when you try to `POP` or `PEEK` an element from an empty stack.
4.  Operations and Stack State:
    *   `PUSH(10)`: Stack: [10], top: 0
    *   `PUSH(20)`: Stack: [10, 20], top: 1
    *   `POP()`: Returns 20. Stack: [10], top: 0
    *   `PUSH(30)`: Stack: [10, 30], top: 1
    *   `PUSH(40)`: Stack: [10, 30, 40], top: 2
    *   `PUSH(50)`: Stack: [10, 30, 40, 50], top: 3
    *   `PUSH(60)`: Stack Overflow! (Capacity is 5, array indices 0-4. Current top is 3, trying to push to index 4, then next push would be index 5 which is out of bounds.) The stack remains: [10, 30, 40, 50], top: 3.
5.  The **linked list-based implementation** would be preferred.
    *   **Justification:** A linked list-based stack uses dynamic memory allocation. It grows as needed and only allocates memory for the elements that are actually stored. This avoids the problem of a fixed capacity (leading to overflow) and the potential waste of memory that can occur with an array-based stack if its capacity is set too high and not fully utilized.

---

## 1.5 Applications of Stacks

Stacks are versatile and find numerous applications in computer science:

*   **Expression Evaluation:**
    *   **Infix to Postfix/Prefix Conversion:** Converting mathematical expressions from infix notation (e.g., `a + b`) to postfix (e.g., `ab+`) or prefix notation.
    *   **Postfix Expression Evaluation:** Evaluating expressions already in postfix notation.
*   **Function Call Management (Call Stack):** When a function calls another function, the current function's state (return address, local variables) is pushed onto the call stack. When the called function returns, its state is popped off, and control returns to the caller.
*   **Backtracking Algorithms:** Used in algorithms where you need to explore possibilities and revert if a path leads to a dead end (e.g., maze solving, N-Queens problem).
*   **Syntax Parsing:** Compilers use stacks to check the syntax of programming languages, ensuring proper nesting of parentheses, brackets, etc.
*   **Undo/Redo Functionality:** In text editors or graphic software, operations can be pushed onto a stack for undo, and popped for redo.
*   **Depth-First Search (DFS) in Graphs and Trees:** While recursion implicitly uses the call stack for DFS, an explicit stack can also be used for iterative DFS.

**Reference:**
*   **Gilberg & Forouzan:** Provides detailed examples of stack applications like expression evaluation and syntax checking.
*   **Aho, Hopcroft, & Ullman:** Discusses the role of stacks in parsing and compiler design.
*   **Lipschuts:** Offers various problems and solutions involving stacks, showcasing their diverse applications.

**Course Outcome Alignment:**
*   **CO2 (K3):** Understanding these applications helps students solve real-world problems by recognizing when a stack is the appropriate data structure.

---

## Module Summary and Key Takeaways

*   **Algorithms:** Step-by-step procedures for solving problems.
*   **Performance Analysis:** Crucial for understanding algorithm efficiency in terms of time and space.
*   **Asymptotic Notations ($O, \Omega, \Theta$):** Tools to describe the growth rate of algorithms for large inputs, enabling performance comparison.
*   **Stacks:** Linear data structures following the LIFO principle.
*   **Stack Operations:** `PUSH`, `POP`, `PEEK`, `isEmpty`.
*   **Implementations:** Array-based (fixed size, $O(1)$) and Linked List-based (dynamic size, $O(1)$).
*   **Applications:** Expression evaluation, function calls, backtracking, parsing, undo/redo.

---
This concludes Module 1's introduction to basic concepts and stacks. The next modules will build upon these foundational elements.
