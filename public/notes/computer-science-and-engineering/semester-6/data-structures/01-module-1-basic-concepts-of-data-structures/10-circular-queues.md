---
title: "Circular Queues"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be96"
status: "completed"
scrapedAt: "2026-05-20T16:51:54.055Z"
---
# Data Structures: Module 1 - Basic Concepts

## Topic: Circular Queues

### Learning Outcomes:

*   Understand the concept of a circular queue.
*   Differentiate between a linear queue and a circular queue.
*   Explain the advantages of using a circular queue.
*   Implement a circular queue using an array.
*   Perform basic operations on a circular queue: enqueue, dequeue, peek, isEmpty, isFull.

---

### 1. Introduction to Queues

Before diving into circular queues, let's briefly recap linear queues:

*   **Queue:** A linear data structure that follows the **First-In, First-Out (FIFO)** principle.
*   **Operations:**
    *   **Enqueue:** Adding an element to the rear of the queue.
    *   **Dequeue:** Removing an element from the front of the queue.
    *   **Peek/Front:** Viewing the element at the front of the queue without removing it.
    *   **isEmpty:** Checking if the queue is empty.
    *   **isFull:** Checking if the queue is full (applicable to array-based implementations).
*   **Linear Queue Issues:** In an array-based linear queue, once the rear reaches the end of the array, even if the front has been dequeued, we cannot add new elements, leading to **wastage of space**.

---

### 2. What is a Circular Queue?

A **Circular Queue** (also known as a Ring Buffer) is a linear data structure that follows the FIFO principle, but it overcomes the space wastage issue of linear queues by treating the underlying array as a **circular** structure.

*   **Concept:** The rear of the queue "wraps around" to the beginning of the array when it reaches the end. Similarly, the front can also wrap around.

---

### 3. Differentiating Linear and Circular Queues

| Feature        | Linear Queue                                   | Circular Queue                                        |
| :------------- | :--------------------------------------------- | :---------------------------------------------------- |
| **Structure**  | Linear, sequential array usage.                | Treats the array as circular, allowing wrap-around.   |
| **Space Usage**| Can lead to wasted space if front moves forward. | Efficient space utilization, no wasted space.         |
| **Rear Reaching End** | If rear reaches `MAX_SIZE - 1`, cannot enqueue even if space is available at the beginning. | Rear can wrap around to index 0 if space is available. |
| **Front Reaching End** | Front can move, but it doesn't affect rear's ability to reach the end. | Front can also wrap around.                           |
| **Complexity** | Slightly simpler to implement conceptually.    | Requires modulo arithmetic for index calculations.     |

---

### 4. Advantages of Circular Queues

*   **Efficient Space Utilization:** The primary advantage is that it utilizes the array space much more effectively. It avoids the problem of "fullness" caused by elements being dequeued from the front but the rear being at the end of the array.
*   **No Wasted Slots:** All slots in the array can potentially be used.

---

### 5. Implementing a Circular Queue Using an Array

We typically use two pointers/indices:

*   `front`: Points to the index of the element to be dequeued (the front of the queue).
*   `rear`: Points to the index where the next element will be enqueued (the rear of the queue).

We also need:

*   An array to store the queue elements.
*   A variable `maxSize` to store the maximum capacity of the queue.

**Key Idea for Circularity:**

When incrementing `front` or `rear`, we use the **modulo operator (`%`)** to wrap around the array.

*   If `rear` is at `maxSize - 1`, the next position is `(rear + 1) % maxSize`, which will be `0`.
*   Similarly, if `front` is at `maxSize - 1`, the next position is `(front + 1) % maxSize`, which will be `0`.

**Initialization:**

*   Typically, both `front` and `rear` are initialized to `-1` to indicate an empty queue.

**Helper Function: `isFull()`**

The condition for a full circular queue needs careful consideration.
If `front` is at index `i` and `rear` is at index `j`:

*   If the queue is `rear = (front + k) % maxSize`, then there are `k+1` elements.
*   A queue is full when the next position for `rear` is the `front`.
*   This translates to `(rear + 1) % maxSize == front`.

**Helper Function: `isEmpty()`**

*   The queue is empty if `front` is still `-1`.

**Detailed Operations:**

Let's assume `maxSize` is the capacity of the array (e.g., if array size is 5, `maxSize` = 5).

**a) Enqueue Operation (`enqueue(data)`)**

1.  **Check for Full:** If `(rear + 1) % maxSize == front`, the queue is full. Return an error or indicate fullness.
2.  **Handle Empty Queue:** If `front == -1` (queue is empty):
    *   Set `front = 0`.
    *   Set `rear = 0`.
3.  **Handle Normal Case:** If the queue is not empty:
    *   Update `rear = (rear + 1) % maxSize`.
4.  **Insert Element:** Place `data` at `arr[rear]`.

**Example Walkthrough (Enqueue):**

Assume `maxSize = 5`, array `arr[5]`, `front = -1`, `rear = -1`.

1.  `enqueue(10)`:
    *   Queue is empty.
    *   `front = 0`, `rear = 0`.
    *   `arr[0] = 10`.
    *   Queue: `[10, _, _, _, _]` (front=0, rear=0)

2.  `enqueue(20)`:
    *   Not full.
    *   `rear = (0 + 1) % 5 = 1`.
    *   `arr[1] = 20`.
    *   Queue: `[10, 20, _, _, _]` (front=0, rear=1)

3.  `enqueue(30)`:
    *   Not full.
    *   `rear = (1 + 1) % 5 = 2`.
    *   `arr[2] = 30`.
    *   Queue: `[10, 20, 30, _, _]` (front=0, rear=2)

4.  `enqueue(40)`:
    *   Not full.
    *   `rear = (2 + 1) % 5 = 3`.
    *   `arr[3] = 40`.
    *   Queue: `[10, 20, 30, 40, _]` (front=0, rear=3)

5.  `enqueue(50)`:
    *   Not full.
    *   `rear = (3 + 1) % 5 = 4`.
    *   `arr[4] = 50`.
    *   Queue: `[10, 20, 30, 40, 50]` (front=0, rear=4)

6.  `enqueue(60)`:
    *   Check for full: `(rear + 1) % maxSize == front`?
    *   `(4 + 1) % 5 == 0`? Yes, `0 == 0`. Queue is FULL.

---

**b) Dequeue Operation (`dequeue()`)**

1.  **Check for Empty:** If `front == -1` (queue is empty), return an error or special value (e.g., `null`, `-1`).
2.  **Store Element:** Store the element at `arr[front]` in a temporary variable.
3.  **Handle Single Element Case:** If `front == rear` (only one element in the queue):
    *   Reset `front = -1`.
    *   Reset `rear = -1`.
4.  **Handle Normal Case:** If there are multiple elements:
    *   Update `front = (front + 1) % maxSize`.
5.  **Return Element:** Return the stored element.

**Example Walkthrough (Dequeue):**

Continuing from the enqueue examples. Queue: `[10, 20, 30, 40, 50]` (front=0, rear=4).

1.  `dequeue()`:
    *   Not empty.
    *   Element to return: `arr[0]` which is `10`.
    *   `front == rear`? No (0 != 4).
    *   `front = (0 + 1) % 5 = 1`.
    *   Return `10`.
    *   Queue: `[_, 20, 30, 40, 50]` (front=1, rear=4)

2.  `dequeue()`:
    *   Not empty.
    *   Element to return: `arr[1]` which is `20`.
    *   `front == rear`? No (1 != 4).
    *   `front = (1 + 1) % 5 = 2`.
    *   Return `20`.
    *   Queue: `[_, _, 30, 40, 50]` (front=2, rear=4)

---

**c) Peek Operation (`peek()` or `front()`)**

1.  **Check for Empty:** If `front == -1`, return an error or special value.
2.  **Return Element:** Return the element at `arr[front]`.

**Example Walkthrough (Peek):**

Queue: `[_, _, 30, 40, 50]` (front=2, rear=4).

*   `peek()`:
    *   Not empty.
    *   Return `arr[2]` which is `30`.
    *   Queue remains: `[_, _, 30, 40, 50]` (front=2, rear=4)

---

**d) isEmpty Operation (`isEmpty()`)**

*   Returns `true` if `front == -1`, `false` otherwise.

---

**e) isFull Operation (`isFull()`)**

*   Returns `true` if `(rear + 1) % maxSize == front`, `false` otherwise.

---

**f) Display Operation (for visualization)**

This is not a standard queue operation but useful for debugging and understanding.

1.  If `isEmpty()`, print "Queue is empty".
2.  If `rear >= front`:
    *   Iterate from `front` to `rear` and print elements.
3.  If `rear < front` (wrap-around case):
    *   Iterate from `front` to `maxSize - 1` and print elements.
    *   Iterate from `0` to `rear` and print elements.

---

### 6. Code Snippet (Conceptual - C++ like pseudocode)

```cpp
class CircularQueue {
private:
    int* arr;       // Array to store queue elements
    int front;      // Index of the front element
    int rear;       // Index of the rear element
    int maxSize;    // Maximum capacity of the queue

public:
    CircularQueue(int size) {
        maxSize = size;
        arr = new int[size];
        front = -1;
        rear = -1;
    }

    ~CircularQueue() {
        delete[] arr;
    }

    bool isEmpty() {
        return front == -1;
    }

    bool isFull() {
        // The condition for fullness: the next position after rear is front
        return (rear + 1) % maxSize == front;
    }

    void enqueue(int data) {
        if (isFull()) {
            cout << "Queue Overflow!" << endl;
            return;
        }

        if (isEmpty()) { // If queue is empty, initialize front and rear
            front = 0;
            rear = 0;
        } else {
            // Increment rear circularly
            rear = (rear + 1) % maxSize;
        }
        arr[rear] = data;
        cout << data << " enqueued to queue." << endl;
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow!" << endl;
            return -1; // Or throw an exception
        }

        int data = arr[front];

        if (front == rear) { // If only one element was in the queue
            front = -1;
            rear = -1;
        } else {
            // Increment front circularly
            front = (front + 1) % maxSize;
        }
        cout << data << " dequeued from queue." << endl;
        return data;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty." << endl;
            return -1; // Or throw an exception
        }
        return arr[front];
    }

    void display() {
        if (isEmpty()) {
            cout << "Queue is empty." << endl;
            return;
        }

        cout << "Queue elements: ";
        if (rear >= front) {
            // Normal case: front to rear
            for (int i = front; i <= rear; ++i) {
                cout << arr[i] << " ";
            }
        } else {
            // Wrap-around case
            for (int i = front; i < maxSize; ++i) {
                cout << arr[i] << " ";
            }
            for (int i = 0; i <= rear; ++i) {
                cout << arr[i] << " ";
            }
        }
        cout << endl;
    }
};
```

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary advantage of using a circular queue over a linear queue implemented with an array?
A. Faster enqueue operations.
B. Faster dequeue operations.
C. Better space utilization.
D. Easier implementation.

**Question 2:**
Consider a circular queue with a maximum size of 5. If `front` is at index 3 and `rear` is at index 1, what is the state of the queue? (Hint: Consider wrap-around)

**Question 3:**
In a circular queue of size `N`, when is the queue considered full?
A. When `rear == N - 1`.
B. When `front == 0` and `rear == N - 1`.
C. When `(rear + 1) % N == front`.
D. When `front == rear`.

**Question 4:**
Given a circular queue of size 4, initially empty (`front = -1`, `rear = -1`). Trace the `front` and `rear` pointers and the array contents after the following operations:
`enqueue(10)`, `enqueue(20)`, `enqueue(30)`, `dequeue()`, `enqueue(40)`, `dequeue()`, `enqueue(50)`.

**Question 5:**
What is the output of `peek()` operation in Question 4 after all operations are completed?

---

### 8. Answers to Practice Questions

**Answer 1:**
C. Better space utilization.
**Explanation:** Circular queues avoid the wasted space issue by allowing the rear to wrap around to the beginning of the array.

**Answer 2:**
Assuming `maxSize = 5`, and `front = 3`, `rear = 1`.
This implies that elements were enqueued, and then some were dequeued causing `front` to move. The elements in the queue are likely at indices 3, 4, 0, 1 (in that order).
Example:
1. `enqueue(A)`, `enqueue(B)`, `enqueue(C)`, `enqueue(D)`, `enqueue(E)`: `F=0, R=4`, `[A, B, C, D, E]`
2. `dequeue()`: `F=1, R=4`, `[_, B, C, D, E]`
3. `dequeue()`: `F=2, R=4`, `[_, _, C, D, E]`
4. `enqueue(F)`: `F=2, R=0`, `[F, _, C, D, E]` (rear wrapped around)
5. `enqueue(G)`: `F=2, R=1`, `[F, G, C, D, E]` (rear wrapped around)
So, `front = 2`, `rear = 1` would mean indices 2, 3, 4, 0, 1 contain elements.
*If the question meant `front` at index 3 and `rear` at index 1:*
Indices that could contain data: `3`, `4`, `0`, `1`.
The order of elements would be from `front` to `rear` considering the wrap-around.
If `front = 3`, elements are at `3`, `4`, `0`, `1`.
The elements would be `arr[3]`, `arr[4]`, `arr[0]`, `arr[1]`.

**Answer 3:**
C. When `(rear + 1) % N == front`.
**Explanation:** This condition signifies that the next position where `rear` would move to enqueue an element is already occupied by `front`, meaning the array is full.

**Answer 4:**
Initial state: `front = -1`, `rear = -1`, `arr = [_, _, _, _]` (size 4)

1.  `enqueue(10)`:
    *   `front = 0`, `rear = 0`
    *   `arr = [10, _, _, _]`
2.  `enqueue(20)`:
    *   `rear = (0 + 1) % 4 = 1`
    *   `arr = [10, 20, _, _]`
3.  `enqueue(30)`:
    *   `rear = (1 + 1) % 4 = 2`
    *   `arr = [10, 20, 30, _]`
4.  `dequeue()`:
    *   Returns `10`.
    *   `front = (0 + 1) % 4 = 1`
    *   `arr = [_, 20, 30, _]` (front=1, rear=2)
5.  `enqueue(40)`:
    *   `rear = (2 + 1) % 4 = 3`
    *   `arr = [_, 20, 30, 40]` (front=1, rear=3)
6.  `dequeue()`:
    *   Returns `20`.
    *   `front = (1 + 1) % 4 = 2`
    *   `arr = [_, _, 30, 40]` (front=2, rear=3)
7.  `enqueue(50)`:
    *   `rear = (3 + 1) % 4 = 0` (wrap-around)
    *   `arr = [50, _, 30, 40]` (front=2, rear=0)

Final state: `front = 2`, `rear = 0`, `arr = [50, _, 30, 40]`
The elements in the queue are at indices 2, 3, and 0.

**Answer 5:**
The `peek()` operation returns the element at the `front`. In the final state of Question 4, `front` is at index 2.
The element at `arr[2]` is `30`.
Output of `peek()`: `30`.

---

### 9. Important Points to Remember

*   **FIFO:** Always remember the fundamental First-In, First-Out principle.
*   **Modulo Arithmetic:** The `%` operator is crucial for achieving the circular behavior of indices.
*   **Full Condition:** The `(rear + 1) % maxSize == front` condition is key for detecting a full circular queue.
*   **Empty Condition:** `front == -1` (or equivalent initial state) signifies an empty queue.
*   **Single Element Case:** Handle the scenario where `front == rear` during dequeue to correctly reset the queue to an empty state.
*   **Space Efficiency:** Circular queues are preferred over linear queues when array space utilization is a concern.
*   **Initialization:** Correctly initializing `front` and `rear` (often to `-1`) is vital for proper functioning.

---
