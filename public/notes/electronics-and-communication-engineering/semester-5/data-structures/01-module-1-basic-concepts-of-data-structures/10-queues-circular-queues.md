---
title: "Queues-Circular Queues"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea03"
status: "completed"
scrapedAt: "2026-05-23T17:54:59.690Z"
---
# Data Structures: Module 1 - Basic Concepts of Data Structures

## Topic: Queues - Circular Queues

This topic delves into the implementation and behavior of circular queues, a space-efficient variation of the standard linear queue. Understanding circular queues is crucial for solving real-world problems that involve managing data in a first-in, first-out (FIFO) manner with limited memory resources.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of a circular queue and its advantages over a linear queue.
*   Implement a circular queue using an array.
*   Perform essential operations on a circular queue: Enqueue, Dequeue, IsEmpty, IsFull.
*   Analyze the time and space complexity of circular queue operations.
*   Apply circular queues to solve practical problems.

### Course Outcomes Alignment:

*   **CO2: Solve real-world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues.** (Knowledge Level: K3) - This topic directly contributes to solving problems where efficient FIFO management is required, especially in constrained memory environments.

---

### 1. Introduction to Circular Queues

A standard linear queue, when implemented using an array, suffers from a problem: even if the queue is logically empty, the physical memory occupied by dequeued elements at the beginning of the array cannot be reused. This leads to wasted space.

**Example:**
Consider an array of size 5.
Initially: `[ ] [ ] [ ] [ ] [ ]`
Enqueue A: `[A] [ ] [ ] [ ] [ ]` (Front=0, Rear=0)
Enqueue B: `[A] [B] [ ] [ ] [ ]` (Front=0, Rear=1)
Enqueue C: `[A] [B] [C] [ ] [ ]` (Front=0, Rear=2)
Dequeue A: `[ ] [B] [C] [ ] [ ]` (Front=1, Rear=2)
Dequeue B: `[ ] [ ] [C] [ ] [ ]` (Front=2, Rear=2)
Enqueue D: `[ ] [ ] [C] [D] [ ]` (Front=2, Rear=3)
Enqueue E: `[ ] [ ] [C] [D] [E]` (Front=2, Rear=4)
Now, if we try to enqueue F, the queue appears full even though there's an empty slot at index 0.

A **circular queue** overcomes this limitation by treating the array as a circular buffer. The last position of the array is considered to be adjacent to the first position. This allows for efficient reuse of space.

#### 1.1 Concept of Circularity

In a circular queue, we use two pointers: `front` and `rear`.

*   `front`: Points to the index of the first element in the queue.
*   `rear`: Points to the index of the last element in the queue.

When we increment `rear` or `front`, we use the modulo operator (`%`) with the size of the array to wrap around to the beginning of the array.

**Formulas for Circularity:**
*   To increment `rear`: `rear = (rear + 1) % MAX_SIZE`
*   To increment `front`: `front = (front + 1) % MAX_SIZE`

Where `MAX_SIZE` is the capacity of the underlying array.

#### 1.2 Advantages of Circular Queues

*   **Space Efficiency:** Utilizes the array space more effectively by allowing elements to wrap around.
*   **Reduced Wasted Space:** Avoids the problem of unused slots at the beginning of the array when elements are dequeued.
*   **Improved Performance (in some scenarios):** Can lead to more consistent performance for enqueue and dequeue operations as they don't get blocked by the end of the array.

---

### 2. Implementation of Circular Queues Using Arrays

A circular queue can be implemented using a fixed-size array. We need to keep track of the `front` and `rear` pointers, as well as the current number of elements or the maximum size.

#### 2.1 Data Structure Representation

```c
#define MAX_SIZE 10 // Example maximum size

typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
    int count; // To keep track of the number of elements
} CircularQueue;
```

**Alternative Representation (without explicit `count`):**
In some implementations, `count` is not explicitly maintained. Instead, the relative positions of `front` and `rear` are used to determine if the queue is empty or full. This requires careful handling of the wrap-around logic.

```c
#define MAX_SIZE 10 // Example maximum size

typedef struct {
    int items[MAX_SIZE];
    int front; // Index of the first element
    int rear;  // Index of the last element
} CircularQueue;
```

We'll primarily use the `count` approach for clarity in explaining the states, but it's important to be aware of the alternative.

#### 2.3 Initialization

When a circular queue is initialized, both `front` and `rear` should indicate an empty state. A common convention is to set `front = -1` and `rear = -1`. If using a `count` variable, it should be initialized to 0.

**Initialization Function (with `count`):**

```c
void initializeQueue(CircularQueue *q) {
    q->front = -1;
    q->rear = -1;
    q->count = 0;
}
```

---

### 3. Operations on Circular Queues

#### 3.1 Enqueue (Insertion)

To enqueue an element:
1.  Check if the queue is full.
2.  If the queue is empty, set `front` to 0 and `rear` to 0.
3.  If the queue is not empty, update `rear` to the next position using `rear = (rear + 1) % MAX_SIZE`.
4.  Insert the element at the new `rear` position.
5.  Increment the `count`.

**Conditions:**
*   **Queue is empty:** `q->front == -1` (or `q->count == 0`)
*   **Queue is full:** `q->count == MAX_SIZE`
    *   Alternatively, when `(rear + 1) % MAX_SIZE == front` (if `count` is not used). This condition needs careful handling to distinguish between full and empty.

**Enqueue Function (with `count`):**

```c
int enqueue(CircularQueue *q, int item) {
    if (q->count == MAX_SIZE) {
        printf("Queue Overflow\n");
        return 0; // Indicate failure
    }

    if (q->front == -1) { // If queue is empty
        q->front = 0;
        q->rear = 0;
    } else {
        q->rear = (q->rear + 1) % MAX_SIZE; // Move rear circularly
    }

    q->items[q->rear] = item;
    q->count++;
    printf("Enqueued: %d\n", item);
    return 1; // Indicate success
}
```

**Enqueue Function (without `count`):**

This version is slightly trickier to handle the full/empty conditions. A common approach is to have `front` point to the first element and `rear` point to the *next available slot*.

```c
#define MAX_SIZE 10

typedef struct {
    int items[MAX_SIZE];
    int front; // Index of the first element
    int rear;  // Index of the next available slot
} CircularQueue;

void initializeQueue(CircularQueue *q) {
    q->front = 0; // Both point to the beginning initially
    q->rear = 0;
}

int enqueue(CircularQueue *q, int item) {
    if ((q->rear + 1) % MAX_SIZE == q->front) { // Check for full
        printf("Queue Overflow\n");
        return 0;
    }

    q->items[q->rear] = item;
    q->rear = (q->rear + 1) % MAX_SIZE; // Move rear to next slot
    printf("Enqueued: %d\n", item);
    return 1;
}
```

**Important Note:** The `front` and `rear` pointers can be confusing. The `count` method is generally safer and easier to reason about, especially for beginners. The second method where `rear` points to the *next available slot* is also common. Let's stick to the `count` method for our primary examples for clarity.

#### 3.2 Dequeue (Deletion)

To dequeue an element:
1.  Check if the queue is empty.
2.  If not empty, retrieve the element at the `front` position.
3.  Update `front` to the next position using `front = (front + 1) % MAX_SIZE`.
4.  If the queue becomes empty after dequeuing (i.e., `count` becomes 0), reset `front` and `rear` to -1.
5.  Decrement the `count`.

**Conditions:**
*   **Queue is empty:** `q->front == -1` (or `q->count == 0`)

**Dequeue Function (with `count`):**

```c
int dequeue(CircularQueue *q) {
    int dequeued_item;

    if (q->front == -1) { // If queue is empty
        printf("Queue Underflow\n");
        return -1; // Indicate failure or return a sentinel value
    }

    dequeued_item = q->items[q->front];
    printf("Dequeued: %d\n", dequeued_item);

    if (q->front == q->rear) { // If only one element was in the queue
        q->front = -1;
        q->rear = -1;
    } else {
        q->front = (q->front + 1) % MAX_SIZE; // Move front circularly
    }
    q->count--;
    return dequeued_item;
}
```

**Dequeue Function (without `count` and `rear` points to next slot):**

```c
// Assuming the structure and initialization from the enqueue without count section

int dequeue(CircularQueue *q) {
    int dequeued_item;

    if (q->front == q->rear) { // If queue is empty
        printf("Queue Underflow\n");
        return -1;
    }

    dequeued_item = q->items[q->front];
    printf("Dequeued: %d\n", dequeued_item);
    q->front = (q->front + 1) % MAX_SIZE; // Move front circularly
    return dequeued_item;
}
```

#### 3.3 IsEmpty

Checks if the queue is empty.

**IsEmpty Function (with `count`):**

```c
int isEmpty(CircularQueue *q) {
    return (q->count == 0);
}
```

**IsEmpty Function (without `count` and `rear` points to next slot):**

```c
int isEmpty(CircularQueue *q) {
    return (q->front == q->rear);
}
```

#### 3.4 IsFull

Checks if the queue is full.

**IsFull Function (with `count`):**

```c
int isFull(CircularQueue *q) {
    return (q->count == MAX_SIZE);
}
```

**IsFull Function (without `count` and `rear` points to next slot):**

```c
int isFull(CircularQueue *q) {
    return ((q->rear + 1) % MAX_SIZE == q->front);
}
```

#### 3.5 Peek/Front

Returns the element at the front of the queue without removing it.

**Peek Function (with `count`):**

```c
int peek(CircularQueue *q) {
    if (isEmpty(q)) {
        printf("Queue is empty\n");
        return -1; // Or handle error appropriately
    }
    return q->items[q->front];
}
```

---

### 4. Time and Space Complexity

Consider a circular queue implemented with an array of size N.

*   **Space Complexity:** $O(N)$ (for storing N elements). This is constant with respect to the number of elements stored, given a fixed array size.

*   **Time Complexity of Operations:**
    *   **Enqueue:** $O(1)$ - Involves a few arithmetic operations and an array access.
    *   **Dequeue:** $O(1)$ - Involves a few arithmetic operations and an array access.
    *   **Peek/Front:** $O(1)$ - Involves accessing the element at the `front` index.
    *   **IsEmpty:** $O(1)$ - Constant time check.
    *   **IsFull:** $O(1)$ - Constant time check.

These constant time complexities for fundamental operations make circular queues very efficient for managing data in a FIFO manner.

---

### 5. Examples and Applications

Circular queues are used in various scenarios where cyclic buffering or efficient FIFO processing is needed:

*   **CPU Scheduling:** Processes waiting for CPU time can be managed in a circular queue.
*   **Memory Management:** Buffers in operating systems for I/O operations can be implemented as circular queues.
*   **Network Routers:** Packet buffering in routers often uses circular queues.
*   **Printer Spooling:** Jobs waiting to be printed are queued in a FIFO manner.
*   **Breadth-First Search (BFS) Algorithm:** BFS uses a queue to store nodes to visit. In a large graph, a circular queue can be advantageous for memory management.

**Example Scenario: Printer Queue**

Imagine a printer that can hold up to 5 print jobs. When jobs arrive, they are added to the queue. When the printer is ready, it prints the job at the front of the queue.

Let `MAX_SIZE = 5`.

1.  **Initialize:** `front = -1`, `rear = -1`, `count = 0`
2.  **Enqueue "DocA":** `front = 0`, `rear = 0`, `count = 1`. Queue: `[DocA, _, _, _, _]`
3.  **Enqueue "DocB":** `front = 0`, `rear = 1`, `count = 2`. Queue: `[DocA, DocB, _, _, _]`
4.  **Enqueue "DocC":** `front = 0`, `rear = 2`, `count = 3`. Queue: `[DocA, DocB, DocC, _, _]`
5.  **Dequeue:** Prints "DocA". `front = 1`, `rear = 2`, `count = 2`. Queue: `[_, DocB, DocC, _, _]`
6.  **Enqueue "DocD":** `front = 1`, `rear = 3`, `count = 3`. Queue: `[_, DocB, DocC, DocD, _]`
7.  **Enqueue "DocE":** `front = 1`, `rear = 4`, `count = 4`. Queue: `[_, DocB, DocC, DocD, DocE]`
8.  **Enqueue "DocF":** `front = 1`, `rear = 0` (wraps around), `count = 5`. Queue: `[DocF, DocB, DocC, DocD, DocE]`
    *   Queue is now full.
9.  **Enqueue "DocG":** "Queue Overflow" (since `count == MAX_SIZE`).

This example illustrates how the `rear` pointer wraps around, allowing `DocF` to be placed at index 0 after `DocA` was dequeued.

---

### 6. Important Points to Remember

*   **Circular Nature:** The key is the wrap-around behavior using the modulo operator (`%`).
*   **Pointer Management:** Correctly updating `front` and `rear` is crucial.
*   **Empty vs. Full Distinction:** When not using an explicit `count`, the conditions `(rear + 1) % MAX_SIZE == front` (for full) and `front == rear` (for empty) can be ambiguous. Using a `count` variable or reserving one slot in the array (making the capacity `MAX_SIZE - 1`) helps resolve this. The `count` approach is generally preferred for clarity.
*   **Initialization:** Ensure `front` and `rear` are initialized to an invalid state (e.g., -1) or a consistent state that signifies an empty queue.
*   **Underflow/Overflow:** Always check for empty (underflow) before dequeuing and full (overflow) before enqueuing.

---

### 7. Practice Questions and Exercises

**Instructions:** Answer the following questions, providing explanations and/or code snippets where appropriate. Assume a circular queue implementation using an array with `MAX_SIZE = 5` and the `count` variable approach.

**Question 1:**
What is the primary advantage of a circular queue over a linear queue implemented with an array?

**Answer:**
The primary advantage of a circular queue is its **space efficiency**. Unlike a linear queue where dequeued elements at the beginning of the array leave empty slots that cannot be reused, a circular queue treats the array as a circular buffer, allowing elements to wrap around to the beginning. This enables efficient reuse of previously occupied memory slots, preventing wasted space.

**Question 2:**
Consider a circular queue with `MAX_SIZE = 5`.
Initial state: `front = -1`, `rear = -1`, `count = 0`.
The following operations are performed:
`enqueue(10)`, `enqueue(20)`, `enqueue(30)`, `dequeue()`, `enqueue(40)`, `enqueue(50)`, `enqueue(60)`.

Trace the values of `front`, `rear`, and `count` after each operation, and show the state of the `items` array (use `_` for empty slots).

**Answer:**

Initial: `front = -1`, `rear = -1`, `count = 0`. Array: `[_, _, _, _, _]`

1.  **`enqueue(10)`:**
    *   `front = 0`, `rear = 0`, `count = 1`.
    *   Array: `[10, _, _, _, _]`

2.  **`enqueue(20)`:**
    *   `front = 0`, `rear = 1`, `count = 2`.
    *   Array: `[10, 20, _, _, _]`

3.  **`enqueue(30)`:**
    *   `front = 0`, `rear = 2`, `count = 3`.
    *   Array: `[10, 20, 30, _, _]`

4.  **`dequeue()`:** (Removes 10)
    *   `front = 1`, `rear = 2`, `count = 2`.
    *   Array: `[_, 20, 30, _, _]` (Element 10 is logically removed, but the array slot might still hold it).

5.  **`enqueue(40)`:**
    *   `front = 1`, `rear = 3`, `count = 3`.
    *   Array: `[_, 20, 30, 40, _]`

6.  **`enqueue(50)`:**
    *   `front = 1`, `rear = 4`, `count = 4`.
    *   Array: `[_, 20, 30, 40, 50]`

7.  **`enqueue(60)`:**
    *   Queue is full (`count = 5 == MAX_SIZE`). "Queue Overflow" message is printed.
    *   `front = 1`, `rear = 4`, `count = 4`.
    *   Array: `[_, 20, 30, 40, 50]` (No change due to overflow).

**Question 3:**
If `front = 2` and `rear = 4` in a circular queue with `MAX_SIZE = 5`, and `count = 3`, what are the indices of the elements in the queue?

**Answer:**
Given `front = 2`, `rear = 4`, and `count = 3`, the elements are located at indices `front`, `(front+1)%MAX_SIZE`, and `(front+2)%MAX_SIZE`.

*   First element: index `front` = **2**
*   Second element: index `(2 + 1) % 5` = `3 % 5` = **3**
*   Third element: index `(2 + 2) % 5` = `4 % 5` = **4**

So, the elements are at indices 2, 3, and 4.

**Question 4:**
Write the C code snippet for the `isFull` function of a circular queue implemented using an array and a `count` variable.

**Answer:**

```c
// Assuming CircularQueue structure with 'count' and 'MAX_SIZE' defined

int isFull(CircularQueue *q) {
    return (q->count == MAX_SIZE);
}
```

**Question 5:**
Consider the state where `front = 4` and `rear = 1` in a circular queue with `MAX_SIZE = 5`. What can you infer about the queue? Is it empty, full, or something else? What are the indices of the elements?

**Answer:**
*   **Interpretation:** In this state (`front = 4`, `rear = 1`), and assuming `count` is not explicitly used for this check, the condition `(rear + 1) % MAX_SIZE == front` holds true: `(1 + 1) % 5 == 4` which is `2 % 5 == 4` (False). This suggests the queue is **not full** by this definition alone. However, if `front` points to the first element and `rear` points to the last, this configuration (where `rear` is "behind" `front` in the linear sense but "ahead" in the circular sense) implies elements are present.

*   **Using `count` (if available):** If a `count` variable is maintained:
    *   If `count == 0`, it's empty.
    *   If `count == MAX_SIZE`, it's full.
    *   Otherwise, it contains `count` elements.

*   **Most Common Interpretation (without `count`, `rear` points to last element):**
    *   When `front = 4` and `rear = 1`, it means elements were enqueued, `front` moved past some elements, and `rear` wrapped around.
    *   If `front == -1`, it's empty.
    *   If `front == rear`, it might be empty or contain one element, depending on convention.
    *   If `(rear + 1) % MAX_SIZE == front`, it's full.
    *   In the specific state `front = 4, rear = 1`, assuming the queue is not empty and not full (meaning `count < MAX_SIZE`), the elements would be at indices:
        *   `front = 4`
        *   `(4 + 1) % 5 = 0`
        *   `(0 + 1) % 5 = 1` (which is `rear`)

    *   So, the elements are at indices **4, 0, and 1**. The queue is neither strictly empty nor strictly full based on these pointers alone without a `count` or a convention that reserves one slot. If this state occurred after a series of operations, it implies the queue currently holds 3 elements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. References

*   **Fundamentals of Data Structures in C by Ellis Horowitz, Sartaj Sahni and Susan Anderson-Freed:** Provides a solid theoretical foundation for data structures, including queues and their array-based implementations. (Chapter 5 discusses arrays and their applications).
*   **Classic Data Structures by Samanta D:** Offers detailed explanations and pseudocode for various data structures, including circular queues and their operations. (Chapter 3 covers linear data structures like queues).
*   **Data Structures: A Pseudocode Approach with C by Richard F. Gilberg, Behrouz A. Forouzan:** Presents concepts clearly with C pseudocode, making it easy to understand the logic behind circular queue implementation. (Chapter 6 discusses queues).
*   **Theory and Problems of Data Structures by Lipschuts S. (Schaum’s Series):** Excellent for problem-solving and understanding the nuances of data structure implementations, including practice problems on queues. (Chapter 4 covers queues).

---
This concludes the study notes for Circular Queues. Remember to practice implementing these operations and applying them to solve problems.