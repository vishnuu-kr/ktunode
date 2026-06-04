---
title: "Circular Queues"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac2c"
status: "completed"
scrapedAt: "2026-05-20T16:22:49.219Z"
---
# Data Structures and Algorithms - Module 1: Basic Concepts of Data Structures - Circular Queues

These notes cover the concept of Circular Queues within the broader context of Data Structures and Algorithms.

**Learning Outcomes:**

*   Understand the concept of a circular queue and its advantages over a linear queue.
*   Be able to implement a circular queue using arrays.
*   Understand the enqueue and dequeue operations in a circular queue.
*   Understand how to handle overflow and underflow conditions in a circular queue.
*   Be able to analyze the time complexity of circular queue operations.
*   Identify and apply circular queues in relevant real-world scenarios.

## 1. Introduction to Queues

*   **Definition:** A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the rear (enqueue) and removed from the front (dequeue).

*   **Linear Queue Limitations:**
    *   **Wastage of Space:** In a linear queue implemented using an array, if elements are frequently enqueued and dequeued, the array's front section might become empty, leading to memory wastage. If the `rear` pointer reaches the end of the array, even if there are empty spaces at the beginning, we cannot insert new elements without shifting existing ones.

## 2. Circular Queues: Concept and Advantages

*   **Definition:** A circular queue is a linear data structure that overcomes the space wastage issue of a linear queue. It treats the array as a circular structure, allowing the reuse of empty spaces at the beginning of the array.

*   **Key Concept:** The `rear` pointer, after reaching the end of the array, wraps around to the beginning if there are empty spaces.  This avoids the "queue full" condition prematurely.

*   **Advantages over Linear Queues:**
    *   **Efficient Memory Utilization:**  Reuses empty spaces, maximizing the use of available memory.
    *   **Avoids Shifting:** Avoids the need to shift elements when the front of the queue has empty spaces.

## 3. Implementation of Circular Queue using Arrays

*   **Data Members:**
    *   `queue`: An array to store the queue elements.
    *   `front`: An integer variable pointing to the front of the queue. Initialized to -1.
    *   `rear`: An integer variable pointing to the rear of the queue. Initialized to -1.
    *   `capacity`: An integer representing the maximum size of the queue.

*   **Methods:**
    *   `enqueue(data)`: Adds an element to the rear of the queue.
    *   `dequeue()`: Removes an element from the front of the queue.
    *   `isFull()`: Checks if the queue is full.
    *   `isEmpty()`: Checks if the queue is empty.
    *   `peek()`: Returns the element at the front of the queue without removing it.

*   **Circular Movement:**  The crucial aspect is how `front` and `rear` are updated using the modulo operator (`%`) to wrap around the array:

    ```
    rear = (rear + 1) % capacity;
    front = (front + 1) % capacity;
    ```

## 4. Enqueue and Dequeue Operations

*   **Enqueue (Adding an element):**

    1.  **Check for Overflow:** `if (isFull())`: If the queue is full, return an overflow error.
    2.  **If Empty:**  `if (isEmpty())`: If the queue is initially empty (both `front` and `rear` are -1), set `front = rear = 0`.
    3.  **Otherwise:** `rear = (rear + 1) % capacity;`  Move the `rear` pointer in a circular manner.
    4.  **Insert Element:** `queue[rear] = data;`  Insert the element at the new `rear` position.

*   **Dequeue (Removing an element):**

    1.  **Check for Underflow:** `if (isEmpty())`: If the queue is empty, return an underflow error.
    2.  **If Single Element:** `if (front == rear)`: If there's only one element in the queue, set `front = rear = -1`.
    3.  **Otherwise:** `front = (front + 1) % capacity;` Move the `front` pointer in a circular manner.
    4.  **Return the dequeued element (optional):** Before incrementing the `front`, store the value at `queue[front]`, then increment `front`.

## 5. Overflow and Underflow Conditions

*   **Overflow:** Occurs when the queue is full and you try to enqueue an element.

    *   **Condition:** `(rear + 1) % capacity == front` or `(front == 0 && rear == capacity - 1) || (front == rear + 1)`

*   **Underflow:** Occurs when the queue is empty and you try to dequeue an element.

    *   **Condition:** `front == -1` or `rear == -1` (both are -1 when empty).

## 6. Time Complexity Analysis

*   **enqueue()**: O(1) - Constant time.
*   **dequeue()**: O(1) - Constant time.
*   **isFull()**: O(1) - Constant time.
*   **isEmpty()**: O(1) - Constant time.

## 7. Real-world Applications

*   **Operating Systems:**
    *   **CPU Scheduling:**  Process scheduling often uses circular queues to give each process a fair share of CPU time.
    *   **Disk Scheduling:** Disk request scheduling algorithms like "Circular SCAN" use the principles of circular queues.

*   **Traffic Management:**
    *   Simulating traffic flow at intersections.

*   **Resource Management:**
    *   Managing shared resources in a circular manner.

*   **Call Centers:** Distributing incoming calls to available agents in a fair, cyclical order.

## 8. Important Points to Remember

*   **Initialization:**  Always initialize `front` and `rear` to -1 when the queue is created.

*   **Modulo Operator:** The modulo operator (`%`) is crucial for achieving the circular behavior.

*   **Distinguishing Full from Empty:**  A key challenge is distinguishing a full queue from an empty queue when `front` and `rear` are at the same position.  The condition `(rear + 1) % capacity == front` is typically used to detect a full queue.

*   **Alternative Implementations:** While arrays are common, circular queues can also be implemented using linked lists, offering dynamic resizing.

## 9. Examples

**C++ Example (Array Implementation):**

```cpp
#include <iostream>

class CircularQueue {
private:
    int *queue;
    int front;
    int rear;
    int capacity;

public:
    CircularQueue(int size) {
        capacity = size;
        queue = new int[capacity];
        front = rear = -1;
    }

    ~CircularQueue() {
        delete[] queue;
    }

    bool isFull() {
        return ((rear + 1) % capacity == front);
    }

    bool isEmpty() {
        return (front == -1);
    }

    void enqueue(int data) {
        if (isFull()) {
            std::cout << "Queue is full. Cannot enqueue." << std::endl;
            return;
        }
        if (isEmpty()) {
            front = rear = 0;
        } else {
            rear = (rear + 1) % capacity;
        }
        queue[rear] = data;
        std::cout << data << " enqueued to queue" << std::endl;
    }

    int dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty. Cannot dequeue." << std::endl;
            return -1; // Or throw an exception
        }
        int data = queue[front];
        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % capacity;
        }
        std::cout << data << " dequeued from queue" << std::endl;
        return data;
    }

    void displayQueue() {
        if (isEmpty()) {
            std::cout << "Queue is empty." << std::endl;
            return;
        }
        std::cout << "Elements in Circular Queue are: ";
        int i = front;
        do {
            std::cout << queue[i] << " ";
            i = (i + 1) % capacity;
        } while (i != (rear + 1) % capacity);
        std::cout << std::endl;
    }
};

int main() {
    CircularQueue q(5);
    q.enqueue(14);
    q.enqueue(22);
    q.enqueue(13);
    q.enqueue(-6);
    q.displayQueue();
    std::cout << "Deleting value = " << q.dequeue() << std::endl;
    std::cout << "Deleting value = " << q.dequeue() << std::endl;
    q.displayQueue();
    q.enqueue(9);
    q.enqueue(20);
    q.enqueue(5);
    q.displayQueue();
    q.enqueue(100); // Queue is full
    return 0;
}
```

## 10. Practice Questions/Exercises

1.  **Problem:** Implement a circular queue in Python using a list.

    **Answer:**

    ```python
    class CircularQueue:
        def __init__(self, capacity):
            self.capacity = capacity
            self.queue = [None] * capacity
            self.front = self.rear = -1

        def is_full(self):
            return (self.rear + 1) % self.capacity == self.front

        def is_empty(self):
            return self.front == -1

        def enqueue(self, data):
            if self.is_full():
                print("Queue is full")
                return

            if self.is_empty():
                self.front = self.rear = 0
            else:
                self.rear = (self.rear + 1) % self.capacity

            self.queue[self.rear] = data
            print(f"{data} enqueued to queue")


        def dequeue(self):
            if self.is_empty():
                print("Queue is empty")
                return None

            data = self.queue[self.front]
            if self.front == self.rear:
                self.front = self.rear = -1
            else:
                self.front = (self.front + 1) % self.capacity

            print(f"{data} dequeued from queue")
            return data

        def display(self):
          if self.is_empty():
              print("Queue is Empty")
          else:
            i = self.front
            while True:
              print(self.queue[i])
              if i == self.rear:
                break
              i = (i+1) % self.capacity



    # Example Usage
    cq = CircularQueue(5)
    cq.enqueue(10)
    cq.enqueue(20)
    cq.enqueue(30)
    cq.enqueue(40)
    cq.display()
    cq.dequeue()
    cq.display()
    cq.enqueue(50)
    cq.enqueue(60)  # Queue is full
    cq.display()
    ```

2.  **Problem:**  Explain how a circular queue can be used in round-robin CPU scheduling.

    **Answer:** In round-robin scheduling, each process gets a fixed time slice of CPU time. A circular queue can hold the processes ready to run. The scheduler dequeues a process from the front of the queue, allows it to run for its time slice, and then enqueues it back at the rear if it's still not finished.  This ensures that processes get fair access to the CPU in a cyclical manner.

3.  **Problem:** What are the advantages and disadvantages of using a circular queue compared to a linked list implementation of a queue?

    **Answer:**

    *   **Circular Queue (Array-based):**
        *   **Advantages:** Simpler implementation, potentially faster due to contiguous memory allocation and reduced overhead (no node creation/deletion).
        *   **Disadvantages:** Fixed size, requires knowing the maximum capacity beforehand.  Can lead to memory wastage if the maximum capacity is overestimated.

    *   **Linked List Queue:**
        *   **Advantages:** Dynamic size, grows and shrinks as needed, avoiding the fixed-size limitation of arrays.
        *   **Disadvantages:** More complex implementation, higher overhead due to node allocation/deallocation and pointer manipulation. Potentially slower due to non-contiguous memory access.

These notes provide a comprehensive understanding of circular queues, their implementation, and their advantages.  Practicing the example problems and exercises will solidify your knowledge. Remember the key concepts of circular movement using the modulo operator and distinguishing full/empty conditions. Good luck!
