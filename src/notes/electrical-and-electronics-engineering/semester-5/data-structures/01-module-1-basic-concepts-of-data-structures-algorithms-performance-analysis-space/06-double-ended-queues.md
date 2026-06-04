---
title: "Double Ended Queues"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures: Algorithms, Performance Analysis, Space Complexity, Time Complexity, Asymptotic Notations"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363df"
status: "completed"
scrapedAt: "2026-05-23T16:20:37.149Z"
---
# Data Structures: Module 1 - Basic Concepts, Algorithms, and Performance Analysis

## Topic: Double Ended Queues (Deques)

This module introduces fundamental concepts of data structures, focusing on algorithms, performance analysis, and asymptotic notations. This topic specifically delves into Double Ended Queues (Deques), a versatile linear data structure.

---

### 1. Introduction to Deques

A **Double Ended Queue (Deque)**, also known as a **head-tail linked list** or **deck**, is a linear data structure that generalizes the queue. Unlike a standard queue where elements can only be added at the rear and removed from the front, a deque allows insertion and deletion operations at **both ends**.

This flexibility makes deques suitable for a wider range of applications compared to standard queues or stacks.

**Key Characteristics:**

*   **Linear Data Structure:** Elements are arranged in a sequential order.
*   **Bidirectional Access:** Supports operations at both the front and rear.
*   **Dynamic Size:** Can grow or shrink as needed (typically implemented using dynamic memory allocation).

---

### 2. Operations on Deques

The fundamental operations supported by a deque are:

*   **`insertFront(element)`:** Inserts an element at the front of the deque.
*   **`insertRear(element)`:** Inserts an element at the rear of the deque.
*   **`deleteFront()`:** Removes and returns the element from the front of the deque.
*   **`deleteRear()`:** Removes and returns the element from the rear of the deque.
*   **`getFront()`:** Returns the element at the front of the deque without removing it.
*   **`getRear()`:** Returns the element at the rear of the deque without removing it.
*   **`isEmpty()`:** Checks if the deque is empty.
*   **`isFull()`:** Checks if the deque is full (relevant for array-based implementations).
*   **`size()`:** Returns the number of elements in the deque.

---

### 3. Implementations of Deques

Deques can be implemented using two primary approaches:

#### 3.1. Array-Based Implementation

In an array-based implementation, a fixed-size array is used to store the deque elements. We need to manage indices to keep track of the front and rear.

**Considerations:**

*   **Circular Array:** To efficiently utilize the array space and handle wrap-around, a circular array is often employed.
*   **Front and Rear Pointers:** Two pointers, `front` and `rear`, are used to indicate the positions of the front and rear elements.

**Array-Based Deque - Conceptual Example:**

Let's say we have an array `dequeArray` of size 5.

*   **Initial State:** `dequeArray = [_, _, _, _, _]`, `front = -1`, `rear = -1`, `count = 0`
*   **`insertFront(A)`:**
    *   If `front` is -1, it's the first element: `front = 0`, `rear = 0`.
    *   Otherwise, `front = (front - 1 + capacity) % capacity`.
    *   `dequeArray[front] = A`.
    *   Increment `count`.
*   **`insertRear(B)`:**
    *   If `front` is -1, it's the first element: `front = 0`, `rear = 0`.
    *   Otherwise, `rear = (rear + 1) % capacity`.
    *   `dequeArray[rear] = B`.
    *   Increment `count`.
*   **`deleteFront()`:**
    *   If deque is empty, return an error.
    *   Store `dequeArray[front]` in a temporary variable.
    *   If `front == rear` (only one element), reset `front = -1`, `rear = -1`.
    *   Otherwise, `front = (front + 1) % capacity`.
    *   Decrement `count`.
    *   Return the stored element.
*   **`deleteRear()`:**
    *   If deque is empty, return an error.
    *   Store `dequeArray[rear]` in a temporary variable.
    *   If `front == rear` (only one element), reset `front = -1`, `rear = -1`.
    *   Otherwise, `rear = (rear - 1 + capacity) % capacity`.
    *   Decrement `count`.
    *   Return the stored element.

**Time Complexity (Array-Based):**

*   **`insertFront`, `insertRear`, `deleteFront`, `deleteRear`:** O(1) (amortized for `insert` if resizing is needed, but basic operations are O(1)).
*   **`getFront`, `getRear`, `isEmpty`, `isFull`, `size`:** O(1).

**Space Complexity (Array-Based):** O(N), where N is the capacity of the array.

#### 3.2. Doubly Linked List Implementation

A doubly linked list is a natural fit for implementing deques because each node has pointers to both the next and previous nodes, allowing efficient insertion and deletion at both ends.

**Structure of a Node:**

```
struct Node {
    DataType data;
    Node* next;
    Node* prev;
};
```

**Deque Structure:**

```
struct Deque {
    Node* head; // Points to the front of the deque
    Node* tail; // Points to the rear of the deque
    int count;  // Number of elements
};
```

**Doubly Linked List Deque - Conceptual Example:**

*   **Initial State:** `head = nullptr`, `tail = nullptr`, `count = 0`
*   **`insertFront(A)`:**
    *   Create a new node `newNode` with data `A`.
    *   If deque is empty: `head = tail = newNode`.
    *   Else: `newNode->next = head`, `head->prev = newNode`, `head = newNode`.
    *   Increment `count`.
*   **`insertRear(B)`:**
    *   Create a new node `newNode` with data `B`.
    *   If deque is empty: `head = tail = newNode`.
    *   Else: `newNode->prev = tail`, `tail->next = newNode`, `tail = newNode`.
    *   Increment `count`.
*   **`deleteFront()`:**
    *   If deque is empty, return error.
    *   Store `head->data` in `temp`.
    *   Let `oldHead = head`.
    *   If `head == tail` (only one element): `head = tail = nullptr`.
    *   Else: `head = head->next`, `head->prev = nullptr`.
    *   Delete `oldHead`.
    *   Decrement `count`.
    *   Return `temp`.
*   **`deleteRear()`:**
    *   If deque is empty, return error.
    *   Store `tail->data` in `temp`.
    *   Let `oldTail = tail`.
    *   If `head == tail` (only one element): `head = tail = nullptr`.
    *   Else: `tail = tail->prev`, `tail->next = nullptr`.
    *   Delete `oldTail`.
    *   Decrement `count`.
    *   Return `temp`.

**Time Complexity (Doubly Linked List):**

*   **`insertFront`, `insertRear`, `deleteFront`, `deleteRear`:** O(1).
*   **`getFront`, `getRear`:** O(1).
*   **`isEmpty`, `size`:** O(1).

**Space Complexity (Doubly Linked List):** O(N), where N is the number of elements, as each element requires a node with data and two pointers.

---

### 4. Applications of Deques

Deques are used in various scenarios due to their flexibility:

*   **Implementing Stacks and Queues:** A deque can easily simulate both a stack (by using only one end for insertions and deletions) and a queue (by using `insertRear` and `deleteFront`).
*   **Palindrome Checking:** You can add characters to both ends of a deque. If the deque is empty after removing characters from both ends and they always match, the original string is a palindrome.
*   **Breadth-First Search (BFS):** While a standard queue is typically used for BFS, a deque can also be employed.
*   **Sliding Window Problems:** In problems where you need to maintain a window of elements and efficiently find the maximum or minimum within that window, deques are very useful. For example, finding the maximum in all subarrays of size k.
*   **Task Scheduling:** In some operating systems, deques can be used to manage tasks with different priorities.
*   **Browser History:** Implementing "back" and "forward" functionality can be conceptually mapped to deque operations.

---

### 5. Performance Analysis and Asymptotic Notations (Recap from Module 1)

While not specific to Deques themselves, understanding these concepts is crucial for evaluating their performance.

*   **Algorithms:** A set of well-defined instructions to solve a problem.
*   **Performance Analysis:** The study of how efficiently an algorithm uses resources (time and space).
*   **Time Complexity:** Measures the execution time of an algorithm as a function of the input size.
*   **Space Complexity:** Measures the amount of memory an algorithm uses as a function of the input size.

**Asymptotic Notations (CO1 - Knowledge Level: K2):**

These notations describe the behavior of functions in the limit, especially as the input size grows very large.

*   **Big-O Notation (O):** Provides an **upper bound** on the growth rate of a function. If $f(n) = O(g(n))$, then for sufficiently large $n$, $f(n)$ is bounded above by a constant multiple of $g(n)$.
    *   *Example:* An algorithm with $T(n) = 3n^2 + 5n + 2$ has a time complexity of $O(n^2)$.

*   **Big-Omega Notation ($\Omega$):** Provides a **lower bound** on the growth rate of a function. If $f(n) = \Omega(g(n))$, then for sufficiently large $n$, $f(n)$ is bounded below by a constant multiple of $g(n)$.
    *   *Example:* An algorithm that must at least look at every element once has a time complexity of $\Omega(n)$.

*   **Big-Theta Notation ($\Theta$):** Provides a **tight bound** on the growth rate of a function. If $f(n) = \Theta(g(n))$, then $f(n)$ is both $O(g(n))$ and $\Omega(g(n))$. This means $f(n)$ grows at the same rate as $g(n)$.
    *   *Example:* An algorithm with $T(n) = 5n + 10$ has a time complexity of $\Theta(n)$.

**How this applies to Deques:**

*   **Array-based Deque:** Most operations are $O(1)$, which is $\Theta(1)$.
*   **Doubly Linked List Deque:** All primary operations are $O(1)$, which is $\Theta(1)$.

**Important Point to Remember:** When an operation is $O(1)$, it means its execution time is constant and does not depend on the number of elements in the deque. This is a highly desirable property for efficient data structure operations.

---

### 6. Deques vs. Other Linear Structures

| Feature             | Stack                     | Queue                     | Deque                                  |
| :------------------ | :------------------------ | :------------------------ | :------------------------------------- |
| Insertion Point     | One (Top)                 | One (Rear)                | Two (Front & Rear)                     |
| Deletion Point      | One (Top)                 | One (Front)               | Two (Front & Rear)                     |
| LIFO/FIFO Behavior  | LIFO (Last-In, First-Out) | FIFO (First-In, First-Out) | Can simulate both LIFO and FIFO        |
| Primary Operations  | push, pop, peek           | enqueue, dequeue, peek    | insertFront, insertRear, deleteFront, deleteRear, getFront, getRear |
| Flexibility         | Limited                   | Limited                   | High                                   |
| Typical Implementations | Array, Linked List        | Array, Linked List        | Array (Circular), Doubly Linked List   |

**Relating to Course Outcomes:**

*   **CO2 (K3):** Deques demonstrate how to solve problems efficiently by providing operations at both ends, allowing us to adapt them to mimic stack or queue behavior when needed. For example, using `insertRear` and `deleteRear` makes it a stack, while `insertRear` and `deleteFront` make it a queue.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the fundamental difference between a queue and a double-ended queue (deque)?

**Answer 1:**
A queue allows insertions only at the rear and deletions only at the front. A deque allows insertions and deletions at both the front and the rear.

**Question 2:**
Consider a doubly linked list implementation of a deque. If you insert an element at the front, what is the time complexity of this operation? Justify your answer.

**Answer 2:**
The time complexity is O(1). This is because inserting at the front involves creating a new node, updating the `head` pointer, and adjusting the `prev` pointer of the old head. These are constant-time operations, regardless of the number of elements in the deque.

**Question 3:**
Describe how you would use a deque to check if a given string is a palindrome.

**Answer 3:**
1.  Insert all characters of the string into the rear of the deque.
2.  While the deque has more than one element:
    *   Remove a character from the front (`frontChar`).
    *   Remove a character from the rear (`rearChar`).
    *   If `frontChar` is not equal to `rearChar`, the string is not a palindrome. Return false.
3.  If the loop completes without returning false, the string is a palindrome. Return true.

**Question 4:**
What is the time complexity for `getFront()` and `getRear()` operations in both array-based and doubly linked list-based deque implementations?

**Answer 4:**
For both array-based and doubly linked list-based implementations, the time complexity for `getFront()` and `getRear()` is **O(1)**. This is because these operations only involve accessing the element at a specific pointer (front or rear) without iterating through the structure.

**Question 5:**
Which asymptotic notation is most appropriate for describing the "best-case" performance of an algorithm?

**Answer 5:**
The **Big-Omega notation ($\Omega$)** is most appropriate for describing the best-case performance of an algorithm, as it provides a lower bound on the growth rate.

---

### 8. Important Points to Remember

*   **Deques offer more flexibility than standard queues or stacks.**
*   **Doubly linked lists are a natural and efficient way to implement deques**, providing O(1) for all major operations.
*   **Array-based deques (using circular arrays) can also achieve O(1) for operations**, but require careful management of indices and handling of potential overflow.
*   **Asymptotic notations (O, $\Omega$, $\Theta$) are crucial for evaluating and comparing the efficiency of data structures and algorithms.**
*   **O(1) time complexity is the goal for most deque operations**, indicating constant-time performance.
*   **Applications range from simple simulations (stacks, queues) to more complex algorithms (palindrome checking, sliding window problems).**

---
