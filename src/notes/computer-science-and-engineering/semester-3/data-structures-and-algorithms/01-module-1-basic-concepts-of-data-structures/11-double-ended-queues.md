---
title: "Double Ended Queues"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac2d"
status: "completed"
scrapedAt: "2026-05-20T16:22:49.924Z"
---
# DATA STRUCTURES AND ALGORITHMS

## Module 1: Basic Concepts of Data Structures

### Topic: Double Ended Queues (Deques)

**Description:**  This topic focuses on Double Ended Queues (Deques), a data structure that allows insertions and deletions from both ends. We'll explore their properties, implementations, and common use cases.

**Learning Outcomes:**

*   Understand the definition and properties of a Double Ended Queue (Deque).
*   Differentiate between input-restricted and output-restricted Deques.
*   Implement Deques using arrays (linear and circular).
*   Understand the advantages and disadvantages of Deques compared to regular Queues and Stacks.
*   Identify real-world applications of Deques.

---

**1. Key Concepts and Definitions**

*   **Definition:** A Double Ended Queue (Deque), pronounced "deck," is a linear data structure that allows insertion and deletion operations to be performed at both ends: the front (head) and the rear (tail).

*   **Contrast with Queue:**  A regular Queue follows the FIFO (First-In, First-Out) principle. A Deque violates this and provides more flexibility.

*   **Contrast with Stack:** A Stack follows the LIFO (Last-In, First-Out) principle. A Deque does not adhere to LIFO.

*   **Properties:**
    *   Elements can be added to the front.
    *   Elements can be added to the rear.
    *   Elements can be removed from the front.
    *   Elements can be removed from the rear.

**2. Types of Deques**

*   **Input-Restricted Deque:** A Deque where insertion is restricted to only one end (either front or rear), but deletion can happen from both ends.

*   **Output-Restricted Deque:** A Deque where deletion is restricted to only one end (either front or rear), but insertion can happen from both ends.

    *   **Example (Input-Restricted):** You can only add elements to the rear of the Deque but can remove elements from either the front or the rear.
    *   **Example (Output-Restricted):** You can only remove elements from the front of the Deque but can add elements to either the front or the rear.

**3. Implementations of Deques**

*   **A. Array Implementation (Linear):**

    *   **Concept:** Uses a fixed-size array to store elements.  Requires shifting elements upon insertion or deletion at the front, which can be inefficient.
    *   **Operations:**
        *   `insertFront(item)`: Insert `item` at the beginning of the array. (Requires shifting existing elements)
        *   `insertRear(item)`: Insert `item` at the end of the array.
        *   `deleteFront()`: Delete the element at the beginning of the array. (Requires shifting existing elements)
        *   `deleteRear()`: Delete the element at the end of the array.
        *   `getFront()`: Returns the element at the front.
        *   `getRear()`: Returns the element at the rear.
        *   `isEmpty()`: Returns true if the Deque is empty.
        *   `isFull()`: Returns true if the Deque is full.
    *   **Limitations:**
        *   Fixed size.
        *   Shifting elements for `insertFront` and `deleteFront` can be time-consuming (O(n) in worst case).

*   **B. Array Implementation (Circular):**

    *   **Concept:** Treats the array as a circular buffer.  Uses modulo arithmetic to wrap around the array boundaries, avoiding unnecessary shifting of elements.  More efficient than the linear array implementation.
    *   **Pointers:**  Two pointers, `front` and `rear`, are used to track the front and rear ends of the Deque.
    *   **Operations:**
        *   `insertFront(item)`:  `front = (front - 1 + MAX_SIZE) % MAX_SIZE; array[front] = item;`
        *   `insertRear(item)`:  `rear = (rear + 1) % MAX_SIZE; array[rear] = item;`
        *   `deleteFront()`:  `front = (front + 1) % MAX_SIZE;`
        *   `deleteRear()`:  `rear = (rear - 1 + MAX_SIZE) % MAX_SIZE;`
        *   `getFront()`: Returns the element at `array[front]`.
        *   `getRear()`: Returns the element at `array[rear]`.
        *   `isEmpty()`: Returns true if `front == -1`. (Or a similar condition based on your implementation)
        *   `isFull()`: Returns true if `(rear + 1) % MAX_SIZE == front`.
    *   **Advantages:**
        *   More efficient than the linear array implementation as it avoids shifting.  Operations are typically O(1) time complexity.
    *   **Limitations:**
        *   Fixed size.

*   **C. Linked List Implementation:**

    *   **Concept:** Uses a doubly linked list to store elements.  Each node contains the data and pointers to both the previous and the next node.
    *   **Advantages:**
        *   Dynamic size: No fixed size limitation.
        *   Efficient insertion and deletion at both ends: O(1) time complexity.  No shifting required.
    *   **Disadvantages:**
        *   Requires more memory due to the overhead of storing pointers.
    *   **Operations:**
        *   `insertFront(item)`:  Create a new node and insert it at the beginning of the list. Update the `head` pointer.
        *   `insertRear(item)`:  Create a new node and insert it at the end of the list. Update the `tail` pointer.
        *   `deleteFront()`:  Remove the node at the beginning of the list. Update the `head` pointer.
        *   `deleteRear()`:  Remove the node at the end of the list. Update the `tail` pointer.
        *   `getFront()`: Returns the data of the first node.
        *   `getRear()`: Returns the data of the last node.
        *   `isEmpty()`: Returns true if the `head` is NULL.

**4. Advantages and Disadvantages of Deques**

*   **Advantages (compared to Queues and Stacks):**
    *   Flexibility:  Can behave as both a Queue and a Stack, or neither.
    *   Efficient for certain problems where elements need to be added or removed from both ends.

*   **Disadvantages (compared to Queues and Stacks):**
    *   More complex implementation than simple Queues or Stacks.
    *   Potentially less memory-efficient than simple Queues or Stacks (especially with linked list implementation) if not all the features are utilized.

**5. Real-World Applications of Deques**

*   **A-Steal Scheduling Algorithm:**  Used in work-stealing multithreaded runtime systems.  Threads maintain a Deque of tasks to execute.  When a thread runs out of work, it "steals" a task from the other end of another thread's Deque.
*   **Palindrome Checker:**  A Deque can be used to efficiently check if a string is a palindrome (reads the same forwards and backwards).
*   **Undo/Redo Functionality:** In text editors or graphics programs, a Deque can store the history of actions, allowing the user to undo or redo operations.
*   **Web Browser History:**  A Deque can be used to store the history of visited web pages, allowing the user to navigate back and forward.

**6. Examples**

*   **Palindrome Checker using Deque (Python):**

    ```python
    from collections import deque

    def is_palindrome(s):
        """Checks if a string is a palindrome using a Deque."""
        d = deque(s)
        while len(d) > 1:
            if d.popleft() != d.pop():
                return False
        return True

    print(is_palindrome("madam"))  # Output: True
    print(is_palindrome("racecar")) # Output: True
    print(is_palindrome("hello"))   # Output: False
    ```

*   **Simple Deque Implementation (Array/Circular) - Simplified Example (Python):**

    ```python
    class Deque:
        def __init__(self, capacity):
            self.capacity = capacity
            self.deque = [None] * capacity
            self.front = -1
            self.rear = 0
            self.size = 0

        def is_full(self):
            return self.size == self.capacity

        def is_empty(self):
            return self.size == 0

        def insert_front(self, item):
            if self.is_full():
                print("Deque is full")
                return

            if self.front == -1:
                self.front = 0
                self.rear = 0
            else:
                self.front = (self.front - 1 + self.capacity) % self.capacity

            self.deque[self.front] = item
            self.size += 1
            print(f"Inserted {item} at front")

        def insert_rear(self, item):
            if self.is_full():
                print("Deque is full")
                return

            if self.front == -1:
                self.front = 0
                self.rear = 0
            else:
                self.rear = (self.rear + 1) % self.capacity

            self.deque[self.rear] = item
            self.size += 1
            print(f"Inserted {item} at rear")

        def delete_front(self):
            if self.is_empty():
                print("Deque is empty")
                return

            item = self.deque[self.front]
            self.deque[self.front] = None  # Clear the slot (optional)

            if self.front == self.rear:
                self.front = -1
                self.rear = 0  # or -1 depending on the specific implementation to signal empty
            else:
                self.front = (self.front + 1) % self.capacity

            self.size -= 1
            print(f"Deleted {item} from front")

        def delete_rear(self):
            if self.is_empty():
                print("Deque is empty")
                return

            item = self.deque[(self.rear - 1 + self.capacity) % self.capacity ]
            self.deque[(self.rear - 1 + self.capacity) % self.capacity ] = None # Clear slot
            if self.front == self.rear:
                self.front = -1
                self.rear = 0
            else:
                self.rear = (self.rear -1 + self.capacity) % self.capacity
            self.size -= 1

            print(f"Deleted item {item} from the rear")

# Example usage:
d = Deque(5)
d.insert_front(1)
d.insert_rear(2)
d.insert_front(3)
d.insert_rear(4)
d.delete_front() # deletes 3
d.delete_rear() # deletes 4

    ```

**7. Practice Questions/Exercises**

1.  **Define a Double Ended Queue (Deque). How does it differ from a regular Queue?**
    *   *Answer:* A Deque allows insertion and deletion at both ends, unlike a regular Queue, which only allows insertion at the rear and deletion at the front.

2.  **Explain the difference between an input-restricted Deque and an output-restricted Deque.**
    *   *Answer:*  An input-restricted Deque allows insertions at only one end but deletions from both ends. An output-restricted Deque allows deletions at only one end but insertions from both ends.

3.  **Describe the advantages and disadvantages of implementing a Deque using a linear array versus a circular array.**
    *   *Answer:* A linear array requires shifting elements for `insertFront` and `deleteFront`, making it less efficient (O(n) in worst case). A circular array avoids shifting, offering O(1) time complexity for most operations, but both have a fixed size limit.

4.  **Implement the `insertFront()` and `deleteRear()` operations for a Deque using a circular array (pseudocode).**
    *   *Answer:* See the "Circular" example implementation above.

5.  **Describe a real-world application where a Deque would be a suitable data structure.**
    *   *Answer:* Palindrome checker, Undo/Redo functionality in software, or a-steal scheduling algorithms.

6.  **What are the advantages and disadvantages of using a linked list to implement a Deque?**
    *   *Answer:*  Advantages: dynamic size, efficient insertion/deletion at both ends (O(1)). Disadvantages: higher memory overhead due to pointers.

7.  **Given the following sequence of operations on a Deque (initially empty and of size 5), what is the final state of the Deque? Operations: insertFront(10), insertRear(20), insertFront(30), deleteRear(), insertRear(40), deleteFront().**
    *   *Answer: The remaining elements in the deque (from front to rear) are 10, 40* (assuming a circular array; the exact answer will depend on your specific implementation).

**8. Important Points to Remember**

*   Deques offer flexibility by allowing operations at both ends.
*   Circular array implementation is more efficient than linear array implementation due to avoiding shifting.
*   Linked list implementation provides dynamic size but consumes more memory.
*   Choose the implementation based on the specific requirements of the problem (size, performance, memory usage).
*   Understand the differences between general Deques, input-restricted Deques, and output-restricted Deques.
