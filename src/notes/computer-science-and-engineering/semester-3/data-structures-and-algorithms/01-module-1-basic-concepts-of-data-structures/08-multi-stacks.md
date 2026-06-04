---
title: "Multi-Stacks"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 1: Basic Concepts of Data Structures"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac2a"
status: "completed"
scrapedAt: "2026-05-20T16:22:47.799Z"
---
# DATA STRUCTURES AND ALGORITHMS - Module 1: Basic Concepts of Data Structures - Multi-Stacks

## Topic: Multi-Stacks

**Learning Outcomes:**

*   Understand the concept of a multi-stack data structure.
*   Describe the advantages and disadvantages of using multi-stacks.
*   Implement a multi-stack using a single array.
*   Analyze the time and space complexity of multi-stack operations (push, pop).
*   Apply multi-stacks to solve practical problems.

---

### 1. Key Concepts and Definitions

*   **Stack:** A linear data structure that follows the Last-In, First-Out (LIFO) principle. Operations include `push` (add to the top) and `pop` (remove from the top).

*   **Multi-Stack:** A data structure that allows implementing multiple stacks within a single, contiguous memory space (usually an array).  This provides the flexibility of multiple stacks without the overhead of managing individual memory allocations for each.

*   **Single Array Representation:** A key characteristic of multi-stacks. All the stacks within the multi-stack share the same underlying array.

*   **Top Pointers:** Each stack within the multi-stack has its own `top` pointer or index, indicating the index of the topmost element of that particular stack within the shared array.

*   **Space Management:**  Important considerations in multi-stack implementation include efficiently managing space allocation and preventing stack overflow within the shared array.  Strategies need to be in place to ensure that one stack doesn't grow so large that it overwrites the memory used by another stack.

### 2. Advantages and Disadvantages of Multi-Stacks

**Advantages:**

*   **Space Efficiency:**  Dynamically allocates space to different stacks as needed, potentially leading to better space utilization compared to allocating fixed-size arrays for each stack individually.  If one stack doesn't need much space, that space can be utilized by another stack.
*   **Flexibility:**  Allows for a variable number of stacks, depending on the problem requirements.
*   **Reduced Overhead:** Less overhead in terms of memory management compared to creating and managing multiple individual stacks, especially when dealing with a large number of stacks.
*   **Easy to implement:** Can be easily implemented using a single array, making it relatively straightforward to integrate into larger programs.

**Disadvantages:**

*   **Complexity:** Implementation can be more complex than implementing individual stacks, especially when managing space allocation and preventing overflow.
*   **Potential for Overflow:** If one stack grows too large, it can cause an overflow, potentially corrupting data in other stacks. Requires careful management of boundaries.
*   **Difficult to Predict Space Requirements:**  It can be difficult to accurately predict the maximum size needed for each stack in advance, making it challenging to optimize space allocation.
*   **Debugging:** Debugging multi-stack implementations can be more challenging than debugging individual stacks, as errors in one stack can potentially affect other stacks due to the shared memory space.
*   **Fixed Number of Stacks (Usually):** While the space is dynamically allocated between the stacks, typically the number of stacks is fixed at the time of implementation. Dynamically adding or removing stacks requires more complex memory management.

### 3. Implementing a Multi-Stack using a Single Array

Here's a common approach to implement a multi-stack using a single array:

*   **Array:** Create a single array of a fixed size. `arr[SIZE]`
*   **Top Pointers:**  Maintain an array of `top` pointers, one for each stack. `top[k]` where k is the stack number.
*   **Stack Division:** Divide the array logically into sections for each stack.  Common strategies are:

    *   **Fixed Division:** Divide the array into equal-sized segments, with each stack allocated a fixed portion. Simple to implement but may lead to wasted space or overflow if stacks have unequal usage.

    *   **Variable Division (More Complex):**  Allocate space dynamically to each stack. This requires more sophisticated memory management but can lead to better space utilization. This is less commonly taught at the introductory level.

**Example Implementation (Fixed Division):**

Let's say we want to implement `k` stacks using an array of size `SIZE`.

*   `stackSize = SIZE / k` (the fixed size allocated to each stack)

*   `top[i] = i * stackSize - 1`  (initial top pointer for stack `i` (0-indexed).  -1 represents an empty stack)

    *   Stack 0: `top[0] = -1`
    *   Stack 1: `top[1] = stackSize - 1`
    *   Stack 2: `top[2] = 2 * stackSize - 1`
    *   ...
    *   Stack k-1: `top[k-1] = (k-1) * stackSize - 1`

**Push Operation (Stack `i`, Element `x`):**

1.  Check for overflow: `if (top[i] == (i+1) * stackSize - 1) {  // Overflow }`
2.  Increment `top[i]`: `top[i]++;`
3.  Insert the element: `arr[top[i]] = x;`

**Pop Operation (Stack `i`):**

1.  Check for underflow: `if (top[i] == (i * stackSize) - 1) {  // Underflow }`
2.  Retrieve the element: `x = arr[top[i]];`
3.  Decrement `top[i]`: `top[i]--;`
4.  Return the element: `return x;`

**C++ Example (Fixed Division):**

```cpp
#include <iostream>
#include <vector>

class MultiStack {
private:
    std::vector<int> arr;
    std::vector<int> top;
    int numStacks;
    int stackSize;
    int totalSize;

public:
    MultiStack(int numStacks, int totalSize) : numStacks(numStacks), totalSize(totalSize) {
        if (totalSize % numStacks != 0) {
            std::cerr << "Total size must be divisible by the number of stacks for fixed division." << std::endl;
            exit(1); // Or throw an exception
        }
        this->stackSize = totalSize / numStacks;
        arr.resize(totalSize);
        top.resize(numStacks);

        for (int i = 0; i < numStacks; ++i) {
            top[i] = (i * stackSize) - 1;  // Initial top positions
        }
    }

    void push(int stackNum, int value) {
        if (stackNum < 0 || stackNum >= numStacks) {
            std::cerr << "Invalid stack number." << std::endl;
            return;
        }

        if (top[stackNum] == ((stackNum + 1) * stackSize) - 1) {
            std::cerr << "Stack " << stackNum << " is full." << std::endl;
            return;
        }

        top[stackNum]++;
        arr[top[stackNum]] = value;
    }

    int pop(int stackNum) {
        if (stackNum < 0 || stackNum >= numStacks) {
            std::cerr << "Invalid stack number." << std::endl;
            return -1; // Or throw an exception
        }

        if (top[stackNum] == ((stackNum * stackSize) - 1)) {
            std::cerr << "Stack " << stackNum << " is empty." << std::endl;
            return -1; // Or throw an exception
        }

        int value = arr[top[stackNum]];
        top[stackNum]--;
        return value;
    }

    int peek(int stackNum) {
        if (stackNum < 0 || stackNum >= numStacks) {
            std::cerr << "Invalid stack number." << std::endl;
            return -1; // Or throw an exception
        }

        if (top[stackNum] == ((stackNum * stackSize) - 1)) {
            std::cerr << "Stack " << stackNum << " is empty." << std::endl;
            return -1; // Or throw an exception
        }

        return arr[top[stackNum]];
    }

    bool isEmpty(int stackNum) {
        if (stackNum < 0 || stackNum >= numStacks) {
            std::cerr << "Invalid stack number." << std::endl;
            return true; // Or throw an exception
        }
         return top[stackNum] == ((stackNum * stackSize) - 1);
    }
};


int main() {
    MultiStack ms(3, 15); // 3 stacks, total size 15 (each stack has size 5)

    ms.push(0, 10);
    ms.push(0, 20);
    ms.push(1, 30);
    ms.push(2, 40);
    ms.push(2, 50);

    std::cout << "Stack 0 top: " << ms.peek(0) << std::endl; // Output: 20
    std::cout << "Stack 1 top: " << ms.peek(1) << std::endl; // Output: 30
    std::cout << "Stack 2 top: " << ms.peek(2) << std::endl; // Output: 50

    std::cout << "Popped from stack 0: " << ms.pop(0) << std::endl; // Output: 20
    std::cout << "Stack 0 top: " << ms.peek(0) << std::endl; // Output: 10

    return 0;
}
```

**Important Considerations:**

*   **Error Handling:**  The implementation *must* include error handling to prevent stack overflow and underflow.
*   **Stack Overflow:** Handle the case where a stack tries to push an element when it's already full.
*   **Stack Underflow:** Handle the case where a stack tries to pop an element when it's empty.
*   **Invalid Stack Number:** Check if the stack number provided is valid.

### 4. Time and Space Complexity

*   **Time Complexity:**
    *   `push`: O(1)
    *   `pop`: O(1)
    *   `peek`: O(1) -  access the top element without removing it.
    *   `isEmpty`: O(1)

*   **Space Complexity:**
    *   O(SIZE), where SIZE is the size of the array used to store all the stacks. This is because we are using a single array to store all stacks.  Additionally O(k) where k is the number of stacks for the top pointers.

### 5. Applications of Multi-Stacks

*   **Memory Management:**  Multi-stacks can be used to manage memory allocation for multiple processes or threads in an operating system.
*   **Expression Evaluation:** Can be used to evaluate complex expressions involving multiple operators and operands.
*   **Compiler Design:**  Can be used in compilers to manage symbol tables and other data structures.
*   **Undo/Redo Functionality:** Implementing undo/redo features in applications, where each stack represents a history of actions for different parts of the application.
*   **Game Development:** Managing multiple game states or entities in a game application.  For example, you might have separate stacks for different game levels.

### 6. Practice Questions/Exercises

1.  **Implement a multi-stack with 3 stacks and a total array size of 21 using fixed division.** Write the `push` and `pop` functions.  Include overflow and underflow checks.

    *   **Answer:**  Follow the C++ example provided above. Stack size will be 7.

2.  **What are the advantages and disadvantages of using a multi-stack compared to using individual stacks for each data set?**

    *   **Answer:** See section 2.

3.  **Explain how the `top` pointers are used in a multi-stack implementation.**

    *   **Answer:** Each stack has a `top` pointer that indicates the index of the top element of that stack within the shared array. The initial value of each `top` pointer depends on the implementation strategy (fixed division, etc.). The `top` pointers are updated during `push` and `pop` operations.

4.  **Describe the error conditions that need to be handled when implementing a multi-stack.**

    *   **Answer:** Stack overflow (attempting to push onto a full stack) and stack underflow (attempting to pop from an empty stack), invalid stack number.

5.  **Given a multi-stack with 4 stacks and a total size of 20, what is the initial value of the `top` pointer for stack 2 in the fixed division implementation?**

    *   **Answer:** Stack size = 20 / 4 = 5.  `top[2] = 2 * 5 - 1 = 9`.

### 7. Important Points to Remember

*   Multi-stacks provide a way to implement multiple stacks within a single array.
*   Fixed division is a simple but potentially wasteful strategy for dividing space among stacks.
*   Error handling (overflow, underflow) is critical for robust multi-stack implementations.
*   Time complexity for basic stack operations (push, pop) is typically O(1).
*   Space complexity is determined by the size of the underlying array.
*   The choice between using a multi-stack versus separate stacks depends on the specific application requirements and trade-offs between space efficiency and complexity.
