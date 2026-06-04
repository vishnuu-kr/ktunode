---
title: "Double Ended Queues"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea05"
status: "completed"
scrapedAt: "2026-05-23T17:55:01.134Z"
---
# Data Structures: Module 1 - Basic Concepts of Data Structures

## Topic: Double Ended Queues (Deques)

---

### 1. Introduction to Deques

*   **Definition:** A Double Ended Queue (Deque), pronounced "deck," is a linear data structure that allows for the insertion and deletion of elements from both the front (head) and the rear (tail) ends. It is a generalization of a queue, where operations are restricted to one end for insertion and the other for deletion.

*   **Relationship to Other Data Structures:**
    *   **Queue:** A deque can be used to implement a standard queue by restricting operations to only one end for insertion and the other for deletion.
    *   **Stack:** A deque can be used to implement a stack by restricting operations to always use one end for both insertion and deletion.

*   **Analogy:** Imagine a line of people where new people can join at the front or the back, and people can leave from the front or the back.

---

### 2. Abstract Data Type (ADT) of a Deque

The Deque ADT specifies the operations that can be performed on a deque, independent of its underlying implementation.

**Key Operations:**

*   **`create_deque()`:** Creates an empty deque.
*   **`is_empty(D)`:** Returns `True` if deque `D` is empty, `False` otherwise.
*   **`is_full(D)`:** Returns `True` if deque `D` is full, `False` otherwise (relevant for array-based implementations).
*   **`insert_front(D, item)`:** Inserts `item` at the front of deque `D`.
*   **`insert_rear(D, item)`:** Inserts `item` at the rear of deque `D`.
*   **`delete_front(D)`:** Removes and returns the element from the front of deque `D`.
*   **`delete_rear(D)`:** Removes and returns the element from the rear of deque `D`.
*   **`peek_front(D)`:** Returns the element at the front of deque `D` without removing it.
*   **`peek_rear(D)`:** Returns the element at the rear of deque `D` without removing it.

---

### 3. Implementations of Deques

Deques can be implemented using various underlying data structures:

#### 3.1 Array-Based Implementation

*   **Concept:** A fixed-size array is used to store the elements. Two pointers, `front` and `rear`, are maintained to track the beginning and end of the deque. Circular arrays are often used to efficiently handle wrap-around conditions.

*   **Circular Array Implementation Details:**
    *   **`front`:** Index of the first element.
    *   **`rear`:** Index of the last element.
    *   **`size`:** Current number of elements in the deque.
    *   **`capacity`:** Maximum number of elements the array can hold.

*   **Operations (Conceptual):**

    *   **`insert_front(item)`:**
        *   If the deque is full, report an error.
        *   If the deque is empty, set `front` and `rear` to 0.
        *   Otherwise, decrement `front` circularly: `front = (front - 1 + capacity) % capacity`.
        *   Place `item` at `array[front]`.
        *   Increment `size`.

    *   **`insert_rear(item)`:**
        *   If the deque is full, report an error.
        *   If the deque is empty, set `front` and `rear` to 0.
        *   Otherwise, increment `rear` circularly: `rear = (rear + 1) % capacity`.
        *   Place `item` at `array[rear]`.
        *   Increment `size`.

    *   **`delete_front()`:**
        *   If the deque is empty, report an error.
        *   Get the item from `array[front]`.
        *   Increment `front` circularly: `front = (front + 1) % capacity`.
        *   Decrement `size`.
        *   If `size` becomes 0, reset `front` and `rear` (e.g., to -1).
        *   Return the item.

    *   **`delete_rear()`:**
        *   If the deque is empty, report an error.
        *   Get the item from `array[rear]`.
        *   Decrement `rear` circularly: `rear = (rear - 1 + capacity) % capacity`.
        *   Decrement `size`.
        *   If `size` becomes 0, reset `front` and `rear` (e.g., to -1).
        *   Return the item.

    *   **`peek_front()`:** Returns `array[front]` if not empty, else error.
    *   **`peek_rear()`:** Returns `array[rear]` if not empty, else error.

*   **Advantages:**
    *   Efficient access to elements if the underlying array is used directly.
    *   Good memory locality.

*   **Disadvantages:**
    *   Fixed capacity; resizing can be costly.
    *   Potential for wasted space if not fully utilized.

#### 3.2 Doubly Linked List-Based Implementation

*   **Concept:** Each node in the deque contains the data, a pointer to the previous node, and a pointer to the next node. Pointers to the `head` (front) and `tail` (rear) of the list are maintained.

*   **Node Structure:**
    ```
    struct Node {
        Data data;
        Node* prev;
        Node* next;
    };
    ```

*   **Deque Structure:**
    ```
    struct Deque {
        Node* head;
        Node* tail;
        int size;
    };
    ```

*   **Operations (Conceptual):**

    *   **`insert_front(item)`:**
        *   Create a new node `newNode` with `item`.
        *   If the deque is empty:
            *   Set `head = tail = newNode`.
        *   Else:
            *   `newNode->next = head`.
            *   `head->prev = newNode`.
            *   `head = newNode`.
        *   Increment `size`.

    *   **`insert_rear(item)`:**
        *   Create a new node `newNode` with `item`.
        *   If the deque is empty:
            *   Set `head = tail = newNode`.
        *   Else:
            *   `newNode->prev = tail`.
            *   `tail->next = newNode`.
            *   `tail = newNode`.
        *   Increment `size`.

    *   **`delete_front()`:**
        *   If the deque is empty, report an error.
        *   Store the `head` node in a temporary pointer `temp`.
        *   Get `item = temp->data`.
        *   If `head == tail` (only one element):
            *   Set `head = tail = NULL`.
        *   Else:
            *   `head = head->next`.
            *   `head->prev = NULL`.
        *   Decrement `size`.
        *   Delete `temp`.
        *   Return `item`.

    *   **`delete_rear()`:**
        *   If the deque is empty, report an error.
        *   Store the `tail` node in a temporary pointer `temp`.
        *   Get `item = temp->data`.
        *   If `head == tail` (only one element):
            *   Set `head = tail = NULL`.
        *   Else:
            *   `tail = tail->prev`.
            *   `tail->next = NULL`.
        *   Decrement `size`.
        *   Delete `temp`.
        *   Return `item`.

    *   **`peek_front()`:** Returns `head->data` if not empty, else error.
    *   **`peek_rear()`:** Returns `tail->data` if not empty, else error.

*   **Advantages:**
    *   Dynamic size; no need to pre-allocate capacity.
    *   Efficient insertion and deletion at both ends.

*   **Disadvantages:**
    *   Requires extra memory for pointers in each node.
    *   Potentially poorer cache performance compared to arrays due to scattered memory allocation.

---

### 4. Time Complexity Analysis

| Operation        | Array-Based (Circular) | Doubly Linked List-Based |
| :--------------- | :--------------------- | :----------------------- |
| `insert_front`   | O(1)                   | O(1)                     |
| `insert_rear`    | O(1)                   | O(1)                     |
| `delete_front`   | O(1)                   | O(1)                     |
| `delete_rear`    | O(1)                   | O(1)                     |
| `peek_front`     | O(1)                   | O(1)                     |
| `peek_rear`      | O(1)                   | O(1)                     |
| `is_empty`       | O(1)                   | O(1)                     |
| `is_full`        | O(1)                   | N/A (dynamic)            |
| `create_deque`   | O(1)                   | O(1)                     |

**Important Note:** While array-based implementations have O(1) complexity for basic operations, the `is_full` check is crucial. If resizing is implemented for array-based deques (similar to dynamic arrays/vectors), then insertion operations might have an amortized O(1) complexity.

---

### 5. Applications of Deques

Deques are versatile and find applications in various areas:

*   **Implementing Stacks and Queues:** As mentioned earlier, deques can be used to simulate both stacks and queues with restricted operations.
*   **Breadth-First Search (BFS):** While a standard queue is sufficient, a deque can be used to manage the nodes to visit.
*   **Palindrome Checking:** Elements can be inserted into a deque from both ends, and then checked for palindromic properties by comparing elements removed from opposite ends.
*   **Sliding Window Problems:** In problems where you need to maintain a window of elements and efficiently find the maximum or minimum within that window, a deque is very useful. For example, the "Sliding Window Maximum" problem.
*   **Task Scheduling:** In some scheduling algorithms, tasks might be added or removed from either the front or the back of a priority list.
*   **Browser History:** Back and forward navigation in a web browser can be conceptualized using deques.

---

### 6. Deques vs. Queues and Stacks

| Feature        | Queue                               | Stack                               | Deque                                     |
| :------------- | :---------------------------------- | :---------------------------------- | :---------------------------------------- |
| **Access Ends**| FIFO (First-In, First-Out)          | LIFO (Last-In, First-Out)           | Both front and rear access                |
| **Insert**     | Rear (Enqueue)                      | Top (Push)                          | Front or Rear                             |
| **Delete**     | Front (Dequeue)                     | Top (Pop)                           | Front or Rear                             |
| **Operations** | Enqueue, Dequeue, Peek Front        | Push, Pop, Peek Top                 | Insert Front/Rear, Delete Front/Rear, Peek Front/Rear |

---

### 7. Learning Outcomes Alignment

*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2)**
    *   The time complexity analysis (Section 4) directly addresses this outcome by comparing the performance of deque operations across different implementations using Big-O notation.

*   **CO2: Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues. (Knowledge Level: K3)**
    *   This topic on Deques expands the student's toolkit beyond basic queues and stacks. The applications discussed (Section 5) demonstrate how deques can solve specific real-world problems more efficiently than simpler structures. For instance, palindrome checking is a classic example where deque's dual-ended nature simplifies the logic.

---

### 8. Key Concepts and Definitions to Remember

*   **Deque:** A linear data structure allowing insertions and deletions at both ends.
*   **Front/Head:** The beginning of the deque.
*   **Rear/Tail:** The end of the deque.
*   **Circular Array:** An array implementation where indices wrap around, useful for efficient deque management.
*   **Doubly Linked List:** A linked list implementation where nodes have pointers to both previous and next nodes, suitable for dynamic deques.
*   **FIFO (First-In, First-Out):** Characteristic of a standard queue.
*   **LIFO (Last-In, First-Out):** Characteristic of a standard stack.
*   **Generalization:** Deques generalize both queues and stacks.

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary difference between a queue and a deque?

**Answer 1:**
A queue only allows insertions at the rear and deletions at the front (FIFO). A deque allows insertions and deletions at both the front and the rear.

**Question 2:**
Consider a deque implemented using a doubly linked list. If you need to insert an element at the front, what is the time complexity? Explain why.

**Answer 2:**
The time complexity is O(1). This is because you only need to create a new node, update the `head` pointer and the `prev` pointer of the original head node. These operations take constant time regardless of the number of elements in the deque.

**Question 3:**
You are given a string of characters. How could you use a deque to determine if the string is a palindrome?

**Answer 3:**
1.  Insert each character of the string into the rear of a deque.
2.  While the deque contains more than one element:
    *   Remove the character from the front.
    *   Remove the character from the rear.
    *   If the two removed characters are not the same, the string is not a palindrome.
3.  If the loop completes without finding mismatches, the string is a palindrome.

**Question 4:**
What are the potential advantages of using a circular array for a deque implementation over a simple array?

**Answer 4:**
A circular array allows for efficient wrap-around. Without it, inserting at the front would require shifting all existing elements, leading to an O(n) operation. With a circular array, insertion/deletion at either end remains O(1) by simply adjusting pointers and using the modulo operator to handle wrap-around. This prevents unused space at the beginning of the array from being a bottleneck for front operations.

**Question 5:**
Which data structure is more suitable for implementing a browser's "back" and "forward" navigation buttons: a queue, a stack, or a deque? Justify your answer.

**Answer 5:**
A deque is most suitable.
*   A **queue** (FIFO) would only allow moving forward.
*   A **stack** (LIFO) could handle "back" navigation (like undo), but not "forward" navigation if you go back multiple steps and then decide to go forward again.
*   A **deque** can manage both the history of visited pages (allowing "back" by deleting from the rear) and the forward history (allowing "forward" by deleting from the front). When you navigate to a new page after going back, the "forward" history is typically cleared, which a deque can also handle.

---

### 10. Important Points to Remember

*   Deques offer more flexibility than standard queues and stacks by allowing operations at both ends.
*   The choice between array-based and linked-list-based implementations depends on factors like the need for dynamic sizing versus memory overhead and cache performance.
*   Circular arrays are crucial for achieving O(1) performance in array-based deque implementations.
*   The applications of deques highlight their utility in solving problems that require efficient manipulation from both ends of a sequence.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 11. Textbook References

*   **Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed:** Likely discusses array-based and linked-list-based implementations, and the concept of circular arrays for queues and potentially deques.
*   **Classic Data Structures by Samanta D:** Will provide detailed explanations and perhaps pseudocode for both array and linked list implementations of deques, including handling edge cases and circularity.
*   **Data Structures: A Pseudocode Approach with C by Gilberg and Forouzan:** Offers clear pseudocode for deque operations, aiding in understanding the logic irrespective of a specific programming language.
*   **Introduction to Data Structures with Applications by Tremblay and Sorenson:** May cover the theoretical aspects and applications of deques, potentially relating them to other data structures.
*   **Theory and Problems of Data Structures by Lipschuts S. (Schaum’s Series):** A good resource for practice problems and concise explanations of concepts, including deques.

---