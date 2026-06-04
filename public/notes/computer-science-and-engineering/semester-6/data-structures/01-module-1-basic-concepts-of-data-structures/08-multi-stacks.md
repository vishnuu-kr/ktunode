---
title: "Multi-Stacks"
subject: "DATA STRUCTURES"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be94"
status: "completed"
scrapedAt: "2026-05-20T16:51:52.633Z"
---
# Data Structures: Module 1 - Basic Concepts of Data Structures

## Topic: Multi-Stacks

---

### **1. Introduction to Multi-Stacks**

*   **What is a Multi-Stack?**
    *   A multi-stack is an extension of the traditional stack data structure.
    *   Instead of a single stack, a multi-stack allows you to manage **multiple independent stacks** within a single contiguous block of memory (usually an array).
    *   This is particularly useful when you need to maintain several distinct collections of data that behave like stacks, but you want to optimize memory usage.

*   **Why Use Multi-Stacks?**
    *   **Memory Efficiency:** By using a single array for all stacks, you avoid allocating separate memory for each individual stack, which can be wasteful if stacks have varying sizes or if you have many small stacks.
    *   **Simplified Memory Management:** Instead of managing multiple separate array allocations, you manage one.
    *   **Flexibility:** Can be used in scenarios where multiple stacks are naturally required, such as parsing expressions with different types of delimiters or managing call stacks for different functions in a recursive process.

---

### **2. Representation of Multi-Stacks**

The most common and efficient way to implement multi-stacks is by using a **single array**. The key challenge is to manage the boundaries and growth of each individual stack within this shared array.

There are several common approaches for allocating space within the single array:

#### **2.1. Fixed Partitioning**

*   **Concept:** The single array is divided into fixed-size partitions, with each partition dedicated to a specific stack.
*   **Implementation:**
    *   The array is pre-allocated.
    *   Each stack is assigned a contiguous block of memory.
    *   **Example:** An array `arr` of size `N` can be partitioned for `k` stacks.
        *   Stack 1: `arr[0]` to `arr[N/k - 1]`
        *   Stack 2: `arr[N/k]` to `arr[2*(N/k) - 1]`
        *   ... and so on.
*   **Pros:** Simple to implement. Each stack operates independently within its partition.
*   **Cons:** **Memory Inefficiency:** If one stack uses its entire partition while another partition is largely unused, it leads to wasted memory. There's no dynamic sharing of space.

#### **2.2. Dynamic Partitioning (or Shared Array)**

*   **Concept:** The single array is used as a shared pool of memory for all stacks. Stacks grow and shrink dynamically, and their spaces can intermingle within the array.
*   **Implementation:** This is the more flexible and memory-efficient approach.
    *   We need to keep track of the **top** element of each stack.
    *   We also need to manage the **free space** in the array.
    *   **Approach 1: Stacks grow towards each other from opposite ends.**
        *   Let `arr` be the single array of size `N`.
        *   Let `k` be the number of stacks.
        *   **Stack 1:** Grows from the **beginning** of the array (index 0 upwards).
            *   `top1` starts at -1 and increases.
        *   **Stack 2:** Grows from the **end** of the array (index `N-1` downwards).
            *   `top2` starts at `N` and decreases.
        *   **Stack 3:** Could grow from the beginning after Stack 1 (e.g., after `top1 + 1`).
        *   **Stack 4:** Could grow from the end before Stack 2 (e.g., before `top2 - 1`).
        *   **Collision:** The array is full when the tops of adjacent stacks meet or cross. For two stacks, this is when `top1 + 1 == top2`.
    *   **Approach 2: Stacks grow from the beginning, with explicit free list management.**
        *   This is more complex and typically involves a separate data structure to manage free blocks. Less common for multi-stacks specifically compared to general dynamic array management.

*   **Focus on Approach 1 (Stacks grow from opposite ends):** This is the most common and intuitive dynamic partitioning method for multi-stacks.

    *   **Data Structures Required:**
        *   A single array (`arr`) to store elements of all stacks.
        *   An array (`tops`) of size `k` to store the index of the top element for each of the `k` stacks.
        *   An array (`bottoms`) or calculated start indices for each stack. (For the opposite ends approach, we only need `N` and `k`, and the starting points are implicitly 0 for the first, `N-1` for the second, etc.)

    *   **Key Variables for `k` Stacks:**
        *   `arr[MAX_SIZE]`
        *   `tops[k]` : Stores the index of the top element of each stack. `tops[i]` = -1 if stack `i` is empty.
        *   `bottoms[k]` : Stores the index of the bottom element of each stack. (Or calculated).
        *   Let's consider the case of **2 stacks** first for simplicity.
            *   `arr[MAX_SIZE]`
            *   `top1`: Index of the top element of stack 1. Starts at -1.
            *   `top2`: Index of the top element of stack 2. Starts at `MAX_SIZE`.

        *   **For `k` stacks growing from opposite ends:**
            *   Imagine dividing the array into `k` conceptual segments.
            *   Stack 1: `[0, end1)`
            *   Stack 2: `[end1, end2)`
            *   ...
            *   Stack k: `[end(k-1), MAX_SIZE)`
            *   This is still a form of partitioning, but the boundaries are not fixed by size but by the "current occupied space."
            *   A better way to think about the "grow from opposite ends" for *multiple* stacks is to have stacks alternate growing from the start and end.
            *   Example: 3 stacks.
                *   Stack 1: Grows from `0` upwards. `top1` starts at -1.
                *   Stack 2: Grows from `MAX_SIZE - 1` downwards. `top2` starts at `MAX_SIZE`.
                *   Stack 3: Grows from `top1 + 1` upwards. `top3` starts at `top1`. (This becomes tricky to manage efficiently).

            *   **The most common and efficient "multi-stack" implementation often refers to the "two stacks growing towards each other" or a generalized version where `k` stacks have defined start and end pointers within the array.**

            *   Let's stick to the **most practical and common interpretation** of multi-stacks where we have:
                *   `k` stacks.
                *   A single array `arr` of size `N`.
                *   `top[k]` array where `top[i]` is the index of the top element of stack `i`.
                *   Each stack `i` has a defined **start index** `start[i]` and an **end index** `end[i]` within the array.
                *   Stack `i` occupies the range `[start[i], end[i])`.
                *   `top[i]` is initialized to `start[i] - 1` for an empty stack.
                *   **Overflow condition:** For stack `i`, `top[i] + 1 == end[i]`.
                *   **Underflow condition:** For stack `i`, `top[i] == start[i] - 1`.

                *   **A common way to initialize `start` and `end` for `k` stacks using a single array:**
                    *   `start[0] = 0`
                    *   `end[0] = N/k`
                    *   `start[1] = N/k`
                    *   `end[1] = 2 * (N/k)`
                    *   ...
                    *   `start[i] = i * (N/k)`
                    *   `end[i] = (i+1) * (N/k)`
                    *   This is **fixed partitioning**.

                *   **Dynamic Allocation for `k` Stacks (More sophisticated):**
                    *   This is often achieved by managing a free list of available array slots.
                    *   Alternatively, and simpler for multi-stacks:
                        *   Stack 0: Grows from index 0 upwards. `top[0]`.
                        *   Stack 1: Grows from index `N-1` downwards. `top[1]`.
                        *   Stack 2: Grows from index `top[0] + 1` upwards. `top[2]`.
                        *   Stack 3: Grows from index `top[1] - 1` downwards. `top[3]`.
                        *   And so on, alternating directions.

                        *   Let's focus on the **two-stack-growing-towards-each-other** as the primary example of dynamic partitioning for multi-stacks, as it's the most common and conceptually clear.

### **3. Implementation of Multi-Stacks (Focus on 2 Stacks)**

This section details the implementation of two stacks sharing a single array.

*   **Data Members:**
    *   `arr`: The single array of a fixed maximum size.
    *   `size`: The maximum capacity of the array.
    *   `top1`: Index of the top element of the first stack. Initialized to `-1`.
    *   `top2`: Index of the top element of the second stack. Initialized to `size`.

*   **Operations:**

    *   **`push1(value)`:**
        *   **Check for Overflow:** If `top1 < top2 - 1`, there is space.
        *   **Increment `top1`:** `top1++`.
        *   **Insert element:** `arr[top1] = value`.
        *   **Overflow Case:** If `top1 == top2 - 1`, the array is full. Raise an error or return false.

    *   **`push2(value)`:**
        *   **Check for Overflow:** If `top1 < top2 - 1`, there is space.
        *   **Decrement `top2`:** `top2--`.
        *   **Insert element:** `arr[top2] = value`.
        *   **Overflow Case:** If `top1 == top2 - 1`, the array is full. Raise an error or return false.

    *   **`pop1()`:**
        *   **Check for Underflow:** If `top1 == -1`, the first stack is empty. Raise an error or return a sentinel value (e.g., `INT_MIN`).
        *   **Get value:** `value = arr[top1]`.
        *   **Decrement `top1`:** `top1--`.
        *   **Return value:** Return `value`.

    *   **`pop2()`:**
        *   **Check for Underflow:** If `top2 == size`, the second stack is empty. Raise an error or return a sentinel value (e.g., `INT_MIN`).
        *   **Get value:** `value = arr[top2]`.
        *   **Increment `top2`:** `top2++`.
        *   **Return value:** Return `value`.

    *   **`peek1()`:**
        *   Returns the element at `arr[top1]` without removing it. Handles underflow.

    *   **`peek2()`:**
        *   Returns the element at `arr[top2]` without removing it. Handles underflow.

    *   **`isFull()`:**
        *   Returns `true` if `top1 == top2 - 1`, `false` otherwise.

    *   **`isEmpty1()`:**
        *   Returns `true` if `top1 == -1`, `false` otherwise.

    *   **`isEmpty2()`:**
        *   Returns `true` if `top2 == size`, `false` otherwise.

---

### **4. Examples**

Let's consider a single array `arr` of size `10` for two stacks.
*   `size = 10`
*   `top1 = -1`
*   `top2 = 10`

**Operations:**

1.  `push1(5)`:
    *   `top1` becomes `0`. `arr[0] = 5`.
    *   `arr: [5, _, _, _, _, _, _, _, _, _]`
    *   `top1 = 0`, `top2 = 10`

2.  `push2(15)`:
    *   `top2` becomes `9`. `arr[9] = 15`.
    *   `arr: [5, _, _, _, _, _, _, _, _, 15]`
    *   `top1 = 0`, `top2 = 9`

3.  `push1(7)`:
    *   `top1` becomes `1`. `arr[1] = 7`.
    *   `arr: [5, 7, _, _, _, _, _, _, _, 15]`
    *   `top1 = 1`, `top2 = 9`

4.  `push2(20)`:
    *   `top2` becomes `8`. `arr[8] = 20`.
    *   `arr: [5, 7, _, _, _, _, _, _, 20, 15]`
    *   `top1 = 1`, `top2 = 8`

5.  `push1(10)`:
    *   `top1` becomes `2`. `arr[2] = 10`.
    *   `arr: [5, 7, 10, _, _, _, _, _, 20, 15]`
    *   `top1 = 2`, `top2 = 8`

6.  `push2(25)`:
    *   `top2` becomes `7`. `arr[7] = 25`.
    *   `arr: [5, 7, 10, _, _, _, _, 25, 20, 15]`
    *   `top1 = 2`, `top2 = 7`

7.  **Check for Full:** `top1` (2) is not equal to `top2 - 1` (6). Not full.

8.  Now, let's fill it up:
    `push1(12)`: `top1=3`, `arr[3]=12`
    `push2(30)`: `top2=6`, `arr[6]=30`
    `push1(14)`: `top1=4`, `arr[4]=14`
    `push2(35)`: `top2=5`, `arr[5]=35`

    Now `arr` looks like: `[5, 7, 10, 12, 14, 35, 30, 25, 20, 15]`
    `top1 = 4`, `top2 = 5`

9.  **Check for Full:** `top1` (4) is now `top2 - 1` (5 - 1 = 4). The array is full.
    *   `push1(99)` will cause an overflow.
    *   `push2(88)` will cause an overflow.

10. **`pop1()`:**
    *   Returns `arr[4]` (which is `14`).
    *   `top1` becomes `3`.
    *   `arr: [5, 7, 10, 12, _, 35, 30, 25, 20, 15]`
    *   `top1 = 3`, `top2 = 5`

11. **`pop2()`:**
    *   Returns `arr[5]` (which is `35`).
    *   `top2` becomes `6`.
    *   `arr: [5, 7, 10, 12, _, _, 30, 25, 20, 15]`
    *   `top1 = 3`, `top2 = 6`

---

### **5. Practice Questions & Exercises**

**Question 1:**
What is the primary advantage of using a multi-stack implementation over separate individual stacks?

**Answer 1:**
Memory efficiency. Multi-stacks use a single contiguous block of memory (like an array) to store elements of multiple stacks, avoiding the overhead and potential wastage of allocating separate memory for each stack, especially when stack sizes vary.

---

**Question 2:**
Consider a multi-stack implementation with two stacks sharing an array of size 15.
`top1` is initialized to `-1` and `top2` is initialized to `15`.

Trace the state of `top1`, `top2`, and the array contents (represented by `_` for empty slots) after the following operations:
1.  `push1(10)`
2.  `push2(100)`
3.  `push1(20)`
4.  `push2(200)`
5.  `push1(30)`
6.  `pop2()`
7.  `push2(300)`
8.  `push1(40)`
9.  `push2(400)`
10. `push1(50)`
11. `push2(500)`

**Answer 2:**

Initial state:
`arr: [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _]`
`size = 15`
`top1 = -1`
`top2 = 15`

1.  `push1(10)`: `top1 = 0`, `arr[0] = 10`
    `arr: [10, _, _, _, _, _, _, _, _, _, _, _, _, _, _]`
    `top1 = 0`, `top2 = 15`

2.  `push2(100)`: `top2 = 14`, `arr[14] = 100`
    `arr: [10, _, _, _, _, _, _, _, _, _, _, _, _, _, 100]`
    `top1 = 0`, `top2 = 14`

3.  `push1(20)`: `top1 = 1`, `arr[1] = 20`
    `arr: [10, 20, _, _, _, _, _, _, _, _, _, _, _, _, 100]`
    `top1 = 1`, `top2 = 14`

4.  `push2(200)`: `top2 = 13`, `arr[13] = 200`
    `arr: [10, 20, _, _, _, _, _, _, _, _, _, _, _, 200, 100]`
    `top1 = 1`, `top2 = 13`

5.  `push1(30)`: `top1 = 2`, `arr[2] = 30`
    `arr: [10, 20, 30, _, _, _, _, _, _, _, _, _, _, 200, 100]`
    `top1 = 2`, `top2 = 13`

6.  `pop2()`: Returns `200`. `top2 = 14`.
    `arr: [10, 20, 30, _, _, _, _, _, _, _, _, _, _, _, 100]`
    `top1 = 2`, `top2 = 14`

7.  `push2(300)`: `top2 = 13`, `arr[13] = 300`
    `arr: [10, 20, 30, _, _, _, _, _, _, _, _, _, _, 300, 100]`
    `top1 = 2`, `top2 = 13`

8.  `push1(40)`: `top1 = 3`, `arr[3] = 40`
    `arr: [10, 20, 30, 40, _, _, _, _, _, _, _, _, _, 300, 100]`
    `top1 = 3`, `top2 = 13`

9.  `push2(400)`: `top2 = 12`, `arr[12] = 400`
    `arr: [10, 20, 30, 40, _, _, _, _, _, _, _, _, 400, 300, 100]`
    `top1 = 3`, `top2 = 12`

10. `push1(50)`: `top1 = 4`, `arr[4] = 50`
    `arr: [10, 20, 30, 40, 50, _, _, _, _, _, _, _, 400, 300, 100]`
    `top1 = 4`, `top2 = 12`

11. `push2(500)`: `top2 = 11`, `arr[11] = 500`
    `arr: [10, 20, 30, 40, 50, _, _, _, _, _, _, 500, 400, 300, 100]`
    `top1 = 4`, `top2 = 11`

**Final State:**
`arr: [10, 20, 30, 40, 50, _, _, _, _, _, _, 500, 400, 300, 100]`
`top1 = 4`
`top2 = 11`

---

**Question 3:**
What condition indicates that a two-stack system (growing from opposite ends of an array) is full?

**Answer 3:**
The array is full when the top of the first stack (`top1`) and the top of the second stack (`top2`) are adjacent to each other, meaning `top1 + 1 == top2`.

---

**Question 4:**
Can multi-stacks be implemented using linked lists? If so, how would it conceptually work?

**Answer 4:**
Yes, multi-stacks can be implemented using linked lists.
Conceptually:
*   Each stack would have its own separate linked list.
*   A data structure (e.g., an array of pointers or a linked list of stack heads) would be used to manage the heads of these individual linked lists.
*   Each linked list would operate as a standard stack (push adds to the head, pop removes from the head).
*   **Advantage:** Dynamic memory allocation for each stack, no fixed array size limit.
*   **Disadvantage:** Potentially more memory overhead due to node pointers compared to an array-based implementation when memory is contiguous. Less memory efficient in terms of raw storage compared to the shared array approach for multiple small stacks.

---

### **6. Important Points to Remember**

*   **Purpose:** Multi-stacks are for managing multiple stacks efficiently within a single memory block.
*   **Primary Implementation:** Usually done using a single array.
*   **Dynamic Partitioning (Opposite Ends):** The most common and memory-efficient method for multi-stacks involves having stacks grow towards each other from opposite ends of the array (e.g., Stack 1 from start, Stack 2 from end).
*   **Overflow Condition (Opposite Ends):** The array is full when the top pointers of adjacent stacks meet or cross (`top1 + 1 == top2`).
*   **Underflow Condition:** Each individual stack experiences underflow when it's empty (e.g., `top1 == -1` for stack 1).
*   **Fixed Partitioning:** Simpler but less memory-efficient if stack sizes are dynamic or vary significantly.
*   **Alternative Implementations:** Linked lists can be used, but the core benefit of shared contiguous memory is lost.

---
