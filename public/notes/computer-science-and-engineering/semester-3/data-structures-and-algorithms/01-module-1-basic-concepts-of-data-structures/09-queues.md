---
title: "Queues"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac2b"
status: "completed"
scrapedAt: "2026-05-20T16:22:48.517Z"
---
# DATA STRUCTURES AND ALGORITHMS - Module 1: Basic Concepts of Data Structures - Queues

## Learning Outcomes:

*   Understand the concept of a Queue data structure.
*   Differentiate between linear and circular queues.
*   Implement queue operations (enqueue, dequeue, peek, isEmpty, isFull).
*   Understand the applications of queues in real-world scenarios.
*   Analyze the time and space complexity of queue operations.

## 1. Introduction to Queues

*   **Definition:** A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle.  This means the first element added to the queue is the first element to be removed. Think of it like a waiting line - the person who joined the line first is the first to be served.

*   **Key Concepts:**
    *   **FIFO (First-In, First-Out):** The fundamental principle governing queue behavior.
    *   **Enqueue:** The operation of adding an element to the rear (back) of the queue.
    *   **Dequeue:** The operation of removing an element from the front of the queue.
    *   **Front (Head):** The index (or pointer) to the first element in the queue.  The element to be dequeued.
    *   **Rear (Tail):** The index (or pointer) to the last element in the queue. The location where a new element will be enqueued.
    *   **Empty Queue:** A queue containing no elements.
    *   **Full Queue:** A queue where all available slots are occupied.  This is relevant for fixed-size queue implementations.

## 2. Types of Queues

*   **2.1 Linear Queue:**
    *   **Description:**  A simple queue implemented using an array where the front and rear pointers move forward as elements are enqueued and dequeued.
    *   **Limitation:**  A major drawback is that after repeated enqueues and dequeues, the rear pointer can reach the end of the array, even if there are empty slots at the beginning. This leads to the "full" condition, even though space is available. This wasted space is a significant inefficiency.

    *   **Example:** Imagine an array of size 5. After enqueueing 5 elements and then dequeuing the first 2, the rear pointer will be at index 4. Even though indices 0 and 1 are now free, you cannot enqueue more elements unless you shift all the remaining elements to the beginning (which is inefficient).

*   **2.2 Circular Queue:**
    *   **Description:**  An improved version of the linear queue that overcomes the space wastage issue.  It treats the array as if it were circular, allowing the rear pointer to wrap around to the beginning of the array when it reaches the end, provided there are empty slots available.
    *   **Implementation:**  Uses the modulo operator (%) to handle the circular movement of the front and rear pointers.
    *   **Advantages:** Efficiently utilizes available space, avoids shifting elements.
    *   **Formula:** `rear = (rear + 1) % size`, `front = (front + 1) % size` (where 'size' is the size of the array).
    *   **Differentiation between Empty and Full:** Careful handling is required to distinguish between an empty and a full queue, especially when `front == rear`. A common technique is to keep one slot empty.
        *   **Empty:** `front == rear`
        *   **Full:**  `front == (rear + 1) % size`

## 3. Queue Operations

*   **3.1 Enqueue (Adding an element):**
    *   **Algorithm:**
        1.  Check if the queue is full. If full, display an "Overflow" error and exit.
        2.  Increment the rear pointer (`rear = (rear + 1) % size` for circular queue).
        3.  Insert the new element at the rear position in the queue.

    *   **Example (Circular Queue):**
        ```python
        def enqueue(queue, element, front, rear, size):
          if (rear + 1) % size == front:
            print("Queue is full")
            return front, rear
          rear = (rear + 1) % size
          queue[rear] = element
          if front == -1: # First element being added
            front = 0
          return front, rear
        ```

*   **3.2 Dequeue (Removing an element):**
    *   **Algorithm:**
        1.  Check if the queue is empty. If empty, display an "Underflow" error and exit.
        2.  Retrieve the element at the front position in the queue.
        3.  Increment the front pointer (`front = (front + 1) % size` for circular queue).
        4.  If after incrementing the front pointer equals the rear pointer, the queue becomes empty, so reset both `front` and `rear` to -1.
        5.  Return the dequeued element.

    *   **Example (Circular Queue):**
        ```python
        def dequeue(queue, front, rear, size):
          if front == -1:
            print("Queue is empty")
            return -1, -1, None
          element = queue[front]
          if front == rear:  # Last element being removed
            front = -1
            rear = -1
          else:
            front = (front + 1) % size
          return front, rear, element
        ```

*   **3.3 Peek (Accessing the front element):**
    *   **Algorithm:**
        1.  Check if the queue is empty. If empty, return an error message or `None`.
        2.  Return the element at the front position (without removing it).

    *   **Example (Circular Queue):**
        ```python
        def peek(queue, front):
          if front == -1:
            print("Queue is empty")
            return None
          return queue[front]
        ```

*   **3.4 isEmpty (Checking if the queue is empty):**
    *   **Algorithm:**
        1.  Check if `front == -1`. If true, the queue is empty.

    *   **Example:**
        ```python
        def isEmpty(front):
          return front == -1
        ```

*   **3.5 isFull (Checking if the queue is full):**
    *   **Algorithm (Circular Queue):**
        1.  Check if `(rear + 1) % size == front`. If true, the queue is full.

    *   **Example (Circular Queue):**
        ```python
        def isFull(front, rear, size):
          return (rear + 1) % size == front
        ```

## 4. Applications of Queues

*   **Real-World Examples:**
    *   **Print queue:** Managing print jobs in a printer.  Jobs are printed in the order they were submitted.
    *   **Call center:** Handling incoming calls. Calls are answered in the order they were received.
    *   **Operating system process scheduling:**  Processes are queued for execution by the CPU.
    *   **Network packet processing:** Network packets are processed in the order they arrive.
    *   **Breadth-First Search (BFS) algorithm (Graph Traversal):** A queue is used to keep track of nodes to visit.
    *   **Cache Management:**  Least Recently Used (LRU) cache implementation can sometimes utilize queue-like structures (e.g., using a linked list with head and tail).

*   **Specific Applications:**
    *   **Buffering:** Temporary storage of data during transmission or processing.
    *   **Resource Allocation:** Managing access to shared resources (e.g., CPU time, memory).
    *   **Event Handling:**  Handling events in the order they occur.

## 5. Time and Space Complexity

*   **Time Complexity:**
    *   **Enqueue:** O(1) – Constant time
    *   **Dequeue:** O(1) – Constant time
    *   **Peek:** O(1) – Constant time
    *   **isEmpty:** O(1) – Constant time
    *   **isFull:** O(1) – Constant time

*   **Space Complexity:**
    *   O(N) – Where N is the maximum size of the queue (for array-based implementations). The space required is proportional to the maximum number of elements that can be stored.
    *   For linked list implementations, the space complexity is also O(N) where N is the number of elements currently in the queue.

## 6. Important Points to Remember

*   Queues follow the FIFO principle.
*   Linear queues can suffer from space wastage.
*   Circular queues efficiently utilize space by wrapping around.
*   Careful handling is needed to distinguish between empty and full states in circular queues.
*   Queue operations typically have O(1) time complexity, making them very efficient.
*   Understand the various real-world applications of queues.

## 7. Practice Questions and Exercises

**Question 1:**

Implement a circular queue using a Python list.  Include `enqueue`, `dequeue`, `peek`, `isEmpty`, and `isFull` functions.  Test your implementation with a sequence of enqueue and dequeue operations.

**Answer:**

```python
class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = -1
        self.rear = -1

    def enqueue(self, data):
        if (self.rear + 1) % self.capacity == self.front:
            print("Queue is full")
        elif self.front == -1:
            self.front = 0
            self.rear = 0
            self.queue[self.rear] = data
        else:
            self.rear = (self.rear + 1) % self.capacity
            self.queue[self.rear] = data

    def dequeue(self):
        if self.front == -1:
            print("Queue is empty")
            return None
        
        data = self.queue[self.front]
        self.queue[self.front] = None # Optional: Clear the dequeued element
        
        if self.front == self.rear:
            self.front = -1
            self.rear = -1
        else:
            self.front = (self.front + 1) % self.capacity
        return data

    def peek(self):
        if self.front == -1:
            print("Queue is empty")
            return None
        return self.queue[self.front]

    def isEmpty(self):
        return self.front == -1

    def isFull(self):
        return (self.rear + 1) % self.capacity == self.front


# Example Usage:
cq = CircularQueue(5)
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
print("Queue after enqueue:", cq.queue) #Output : [1, 2, 3, 4, None]
cq.dequeue()
print("Queue after dequeue:", cq.queue) #Output : [None, 2, 3, 4, None]
cq.enqueue(5)
print("Queue after enqueue:", cq.queue) #Output : [None, 2, 3, 4, 5]
cq.enqueue(6) # Queue is full
print("Peek:", cq.peek()) #Output: 2
```

**Question 2:**

Explain the difference between a linear queue and a circular queue.  Why is a circular queue more efficient in some scenarios?

**Answer:**

A linear queue has a fixed start and end, and once the rear reaches the end, even if there are empty slots at the beginning (due to dequeue operations), the queue is considered full.  This leads to wasted space.

A circular queue, on the other hand, treats the array as a circle, allowing the rear to wrap around to the beginning when it reaches the end. This avoids the space wastage problem and provides more efficient utilization of the available space.  Therefore, in scenarios where enqueue and dequeue operations are frequent, and the queue size is relatively fixed, a circular queue is generally more efficient than a linear queue.

**Question 3:**

Describe a real-world scenario where a queue data structure would be useful. Explain how the FIFO principle applies in that scenario.

**Answer:**

Consider a call center. Incoming calls are placed in a queue. The FIFO principle ensures that the call that has been waiting the longest is answered first. This is important for fairness and customer satisfaction, as it prevents newer calls from jumping ahead of those already waiting.  The call center agents dequeue calls from the queue and handle them one by one, maintaining the order in which the calls arrived.
