---
title: "Implement Queue, DEQUEUE, and Circular Queue using arrays."
subject: "DATA STRUCTURES LAB"
module: "Module 4: Implement Queue, DEQUEUE, and Circular Queue using arrays."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae6c"
status: "completed"
scrapedAt: "2026-05-20T16:23:19.198Z"
---
# DATA STRUCTURES LAB - MODULE 4: QUEUES, DEQUEUES, AND CIRCULAR QUEUES USING ARRAYS

## Introduction

This module focuses on implementing fundamental queue data structures using arrays. We'll cover the standard Queue, the Double-Ended Queue (Dequeue), and the Circular Queue. Understanding these implementations is crucial for efficient data management in various applications.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the concepts of Queue, Dequeue, and Circular Queue.
*   Implement Queue, Dequeue, and Circular Queue using arrays.
*   Analyze the time and space complexity of array-based queue operations.
*   Apply these data structures to solve practical problems.

## 1. Queues (FIFO - First-In, First-Out)

### 1.1 Key Concepts and Definitions

*   **Queue:** A linear data structure that follows the First-In, First-Out (FIFO) principle. Elements are added to the rear (enqueue) and removed from the front (dequeue).
*   **Enqueue:** The operation of adding an element to the rear of the queue.
*   **Dequeue:** The operation of removing an element from the front of the queue.
*   **Front:** The index of the first element in the queue.
*   **Rear:** The index of the last element in the queue.
*   **Empty Queue:** A queue containing no elements.
*   **Full Queue:** A queue that has reached its maximum capacity.
*   **Overflow:** The condition that occurs when trying to enqueue an element into a full queue.
*   **Underflow:** The condition that occurs when trying to dequeue an element from an empty queue.

### 1.2 Array-Based Implementation

We can implement a queue using an array.  We need two indices: `front` and `rear`.

*   **Data Members:**
    *   `arr`: An array to store the queue elements.
    *   `front`: An integer representing the index of the front element.
    *   `rear`: An integer representing the index of the rear element.
    *   `capacity`:  The maximum size of the queue.
    *   `size`: The current number of elements in the queue.

*   **Initialization:**
    *   `front = 0`
    *   `rear = -1`
    *   `capacity = (given size)`
    *   `size = 0`

*   **Operations:**

    *   **`enqueue(element)`:**
        1.  Check if the queue is full (`size == capacity`). If full, handle overflow.
        2.  Increment `rear` (`rear++`).
        3.  Add the element to `arr[rear]`.
        4. Increment `size` (`size++`).

    *   **`dequeue()`:**
        1.  Check if the queue is empty (`size == 0`). If empty, handle underflow.
        2.  Store the element at `arr[front]` (optional, if you need to return it).
        3.  Increment `front` (`front++`).
        4.  Decrement `size` (`size--`).

    *   **`peek()`/`front()`:** Returns the element at the front of the queue without removing it (returns `arr[front]`). Checks for empty queue first.

    *   **`isEmpty()`:** Returns `true` if the queue is empty (`size == 0`), `false` otherwise.

    *   **`isFull()`:** Returns `true` if the queue is full (`size == capacity`), `false` otherwise.

### 1.3 Example (Java)

```java
class Queue {
    private int[] arr;
    private int front;
    private int rear;
    private int capacity;
    private int size;

    public Queue(int size) {
        arr = new int[size];
        capacity = size;
        front = 0;
        rear = -1;
        this.size = 0;
    }

    public void enqueue(int element) {
        if (isFull()) {
            System.out.println("Overflow! Queue is full.");
            return;
        }
        rear = (rear + 1) % capacity; // for circular queue implementation
        arr[rear] = element;
        size++;
        System.out.println(element + " enqueued to queue");
    }

    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Underflow! Queue is empty.");
            return -1; // Or throw an exception
        }
        int element = arr[front];
        front = (front + 1) % capacity; //for circular queue implementation
        size--;
        System.out.println(element + " dequeued from queue");
        return element;
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return -1; // Or throw an exception
        }
        return arr[front];
    }


    public boolean isEmpty() {
        return (size == 0);
    }

    public boolean isFull() {
        return (size == capacity);
    }

    public int size(){
        return this.size;
    }
}

public class Main {
    public static void main(String[] args) {
        Queue queue = new Queue(5);

        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.enqueue(40);

        System.out.println("Front element is: " + queue.peek());

        queue.dequeue();
        System.out.println("Front element is: " + queue.peek());


        queue.enqueue(50);
        queue.enqueue(60); // This will cause an overflow because the queue is full

    }
}
```

### 1.4 Time and Space Complexity

*   **Enqueue:** O(1)
*   **Dequeue:** O(1)
*   **Peek:** O(1)
*   **isEmpty:** O(1)
*   **isFull:** O(1)
*   **Space Complexity:** O(N), where N is the maximum capacity of the queue.

### 1.5 Limitation of Basic Array Implementation

The basic array implementation of a queue has a significant drawback: after several enqueue and dequeue operations, the `front` index keeps increasing, and eventually, the available space at the beginning of the array cannot be utilized even if the actual number of elements in the queue is less than the array's capacity. This can lead to premature overflow.  The circular queue addresses this limitation.

## 2. Dequeue (Double-Ended Queue)

### 2.1 Key Concepts and Definitions

*   **Dequeue:** A double-ended queue allows insertions and deletions from both the front and the rear.
*   **Operations:**
    *   `enqueueFront(element)`: Adds an element to the front of the queue.
    *   `enqueueRear(element)`: Adds an element to the rear of the queue.
    *   `dequeueFront()`: Removes an element from the front of the queue.
    *   `dequeueRear()`: Removes an element from the rear of the queue.
    *   `getFront()`: Returns the element at the front without removing it.
    *   `getRear()`: Returns the element at the rear without removing it.

### 2.2 Array-Based Implementation

*   **Data Members:** Same as the queue (arr, front, rear, capacity, size)

*   **Initialization:** Same as the queue (front = 0, rear = -1, capacity, size=0)

*   **Operations:**

    *   **`enqueueFront(element)`:**
        1. Check if the queue is full (`size == capacity`). If full, handle overflow.
        2. If the queue is empty set front and rear to 0. Otherwise decrement front (be careful of index 0; if already at 0, wrap around to capacity-1).
        3.  `front = (front - 1 + capacity) % capacity;`
        4.  Add the element to `arr[front]`.
        5.  Increment `size` (`size++`).

    *   **`enqueueRear(element)`:** Same as `enqueue` for a standard queue.

    *   **`dequeueFront()`:** Same as `dequeue` for a standard queue.

    *   **`dequeueRear()`:**
        1.  Check if the queue is empty (`size == 0`). If empty, handle underflow.
        2.  Store the element at `arr[rear]` (optional, if you need to return it).
        3.  Decrement `rear` (`rear--`).
        4.  `rear = (rear - 1 + capacity) % capacity;` // wrap around to capacity - 1.
        5.  Decrement `size` (`size--`).

    *   **`getFront()`:** Returns `arr[front]`. Handles empty queue condition.

    *   **`getRear()`:** Returns `arr[rear]`. Handles empty queue condition.

    *   **`isEmpty()`:** Returns `true` if the queue is empty (`size == 0`), `false` otherwise.

    *   **`isFull()`:** Returns `true` if the queue is full (`size == capacity`), `false` otherwise.

### 2.3 Example (Java)

```java
class Dequeue {
    private int[] arr;
    private int front;
    private int rear;
    private int capacity;
    private int size;

    public Dequeue(int size) {
        arr = new int[size];
        capacity = size;
        front = 0;
        rear = -1;
        this.size = 0;
    }

    public void enqueueFront(int element) {
         if (isFull()) {
            System.out.println("Overflow! Queue is full.");
            return;
        }
         if (isEmpty()){
            front = 0;
            rear = 0;
         }
         else {
            front = (front - 1 + capacity) % capacity;
         }
         arr[front] = element;
         size++;
         System.out.println(element + " enqueued to front");
    }


    public void enqueueRear(int element) {
         if (isFull()) {
            System.out.println("Overflow! Queue is full.");
            return;
        }

         rear = (rear + 1) % capacity;
         arr[rear] = element;
         size++;
         System.out.println(element + " enqueued to rear");
    }


    public int dequeueFront() {
        if (isEmpty()) {
            System.out.println("Underflow! Queue is empty.");
            return -1;
        }
        int element = arr[front];
        front = (front + 1) % capacity;
        size--;
        System.out.println(element + " dequeued from front");
        return element;
    }

    public int dequeueRear() {
         if (isEmpty()) {
            System.out.println("Underflow! Queue is empty.");
            return -1;
        }
        int element = arr[rear];
        rear = (rear - 1 + capacity) % capacity;
        size--;
        System.out.println(element + " dequeued from rear");
        return element;
    }


    public int getFront() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return -1;
        }
        return arr[front];
    }


    public int getRear() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return -1;
        }
        return arr[rear];
    }


    public boolean isEmpty() {
        return (size == 0);
    }

    public boolean isFull() {
        return (size == capacity);
    }

    public int size(){
        return this.size;
    }
}

public class Main {
    public static void main(String[] args) {
        Dequeue dq = new Dequeue(5);

        dq.enqueueFront(10);
        dq.enqueueRear(20);
        dq.enqueueFront(30);
        dq.enqueueRear(40);

        System.out.println("Front element is: " + dq.getFront());
        System.out.println("Rear element is: " + dq.getRear());

        dq.dequeueFront();
        dq.dequeueRear();

        System.out.println("Front element is: " + dq.getFront());
        System.out.println("Rear element is: " + dq.getRear());

        dq.enqueueFront(50);
        dq.enqueueRear(60); // This will cause an overflow because the queue is full
    }
}
```

### 2.4 Time and Space Complexity

*   **enqueueFront:** O(1)
*   **enqueueRear:** O(1)
*   **dequeueFront:** O(1)
*   **dequeueRear:** O(1)
*   **getFront:** O(1)
*   **getRear:** O(1)
*   **isEmpty:** O(1)
*   **isFull:** O(1)
*   **Space Complexity:** O(N), where N is the maximum capacity of the dequeue.

## 3. Circular Queue

### 3.1 Key Concepts and Definitions

*   **Circular Queue:** A queue that treats the array as circular. When the rear pointer reaches the end of the array, it wraps around to the beginning, provided the beginning slots are empty (due to dequeue operations). This avoids the problem of underutilization of array space in the simple queue implementation.

### 3.2 Array-Based Implementation

*   **Data Members:** Same as the queue (arr, front, rear, capacity, size).

*   **Initialization:** Same as the queue (front = 0, rear = -1, capacity, size=0)

*   **Operations:**

    *   **`enqueue(element)`:**
        1.  Check if the queue is full (`size == capacity`). If full, handle overflow.
        2.  Increment `rear` using the modulo operator: `rear = (rear + 1) % capacity;`.  This provides the wrap-around.
        3.  Add the element to `arr[rear]`.
        4.  Increment `size` (`size++`).

    *   **`dequeue()`:**
        1.  Check if the queue is empty (`size == 0`). If empty, handle underflow.
        2.  Store the element at `arr[front]` (optional, if you need to return it).
        3.  Increment `front` using the modulo operator: `front = (front + 1) % capacity;`.  This provides the wrap-around.
        4.  Decrement `size` (`size--`).

    *   **`peek()`/`front()`:** Returns the element at the front of the queue without removing it (returns `arr[front]`). Checks for empty queue first.

    *   **`isEmpty()`:** Returns `true` if the queue is empty (`size == 0`), `false` otherwise.

    *   **`isFull()`:** Returns `true` if the queue is full (`size == capacity`), `false` otherwise.

### 3.3 Example (Java)

*   The Java code example provided in Section 1.3 is already using modular arithmetic to handle `front` and `rear` index updates, making it a functional circular queue implementation.

### 3.4 Time and Space Complexity

*   **Enqueue:** O(1)
*   **Dequeue:** O(1)
*   **Peek:** O(1)
*   **isEmpty:** O(1)
*   **isFull:** O(1)
*   **Space Complexity:** O(N), where N is the maximum capacity of the circular queue.

## 4. Practice Questions/Exercises

1.  **Implement a Queue using an array in C++**.  (Solution: Similar to the Java example, but use C++ syntax. Remember to use `new` and `delete` appropriately for dynamic memory allocation if you choose to allocate the array dynamically.)

2.  **Modify the existing queue implementation to handle integer overflow for `front` and `rear` indices** (Solution: Use `front = (front + 1) % capacity` and `rear = (rear + 1) % capacity` whenever these indices are incremented. This is already implemented in the provided Java example for the queue, demonstrating how to make it circular)

3.  **Implement a Dequeue that handles characters instead of integers.** (Solution: Change the `arr` data member to `char[] arr` and modify the enqueue and dequeue functions to handle character data.)

4.  **Implement a function that reverses a queue using only queue operations (enqueue and dequeue).**

    ```java
    // Java example for reversing a queue using only queue operations

    public static Queue reverseQueue(Queue q) {
        if (q.isEmpty()) {
            return q;
        }
        int data = q.dequeue();
        q = reverseQueue(q); // Recursive call
        q.enqueue(data);
        return q;
    }

    // Usage Example
    public static void main(String[] args){
        Queue q = new Queue(5);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);
        q.enqueue(5);

        q = reverseQueue(q);

        System.out.println("Reversed Queue:");
        while(!q.isEmpty()){
            System.out.print(q.dequeue() + " ");
        }
    }
    ```

## 5. Important Points to Remember

*   **Overflow and Underflow Handling:**  Always check for overflow and underflow conditions before performing enqueue and dequeue operations.
*   **Circular Queue for Efficiency:** Use a circular queue to avoid wasting space in the array.
*   **Modulo Operator (%):** Essential for implementing circular queues and dequeues.
*   **Index Management:**  Carefully manage the `front` and `rear` indices to ensure correct behavior of the queue.
*   **Empty Queue Condition:** Check for an empty queue before attempting to peek or dequeue.
*   **Array Sizing**: Decide whether your array size is fixed (statically allocated) or dynamically allocated. Dynamic allocation gives you more flexibility.
*   **Data Type:** Consider the data type your queue or dequeue is storing, and modify your implementation accordingly.

By understanding these concepts and implementing these data structures using arrays, you will build a solid foundation for solving more complex problems in data structures and algorithms. Remember to practice and experiment to solidify your understanding. Good luck!
