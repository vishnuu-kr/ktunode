---
title: "Allocation"
subject: "PROGRAMMING LANGUAGES"
module: "Module 3: Expressions and Statements "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c69e"
status: "completed"
scrapedAt: "2026-05-20T17:09:43.076Z"
---
# PROGRAMMING LANGUAGES: Module 3: Expressions and Statements - Allocation

---

## 1. Introduction to Allocation

### 1.1 What is Allocation?

Allocation refers to the process of reserving memory space for data elements, variables, functions, or other program entities during the execution of a program. This memory space is necessary for the program to store and access its data and instructions.

### 1.2 Why is Allocation Important?

*   **Data Storage:** Programs need memory to store values of variables, intermediate results of computations, and data structures.
*   **Execution Context:** Functions require memory for their local variables, parameters, and return addresses.
*   **Dynamic Behavior:** Many programming tasks involve creating and destroying data during runtime, necessitating flexible memory allocation.
*   **Resource Management:** Efficient allocation is crucial for managing system resources, preventing memory leaks, and ensuring program stability.

### 1.3 Key Concepts Related to Allocation

*   **Memory:** The physical or virtual space where data and instructions are stored.
*   **Address:** A unique identifier for a specific location in memory.
*   **Variable:** A named storage location that can hold a value.
*   **Data Type:** Determines the size and interpretation of the data stored in a variable.
*   **Scope:** The region of a program where a variable is accessible.
*   **Lifetime:** The duration for which a variable or memory allocation exists.

---

## 2. Types of Allocation

Programming languages employ different strategies for allocating memory. The primary types are:

### 2.1 Static Allocation (Compile-Time Allocation)

*   **Definition:** Memory is allocated and deallocated at compile time. The size and lifetime of statically allocated entities are fixed and known before the program starts executing.
*   **Characteristics:**
    *   **Fixed Size:** The amount of memory is determined by the compiler based on declarations.
    *   **Known Lifetime:** Entities exist for the entire duration of the program's execution.
    *   **Efficient:** Fastest allocation/deallocation as it's done by the compiler.
    *   **Less Flexible:** Cannot accommodate dynamically sized data or structures.
*   **Where it's used:**
    *   **Global variables:** Variables declared outside any function.
    *   **Static variables:** Variables declared with the `static` keyword (their value persists across function calls).
    *   **Code segment:** The memory for the program's instructions.
*   **Example (Conceptual C-like syntax):**

    ```c
    int global_counter = 0; // Statically allocated

    void myFunction() {
        static int static_local_var = 0; // Statically allocated, persists across calls
        // ...
    }
    ```

### 2.2 Stack Allocation (Automatic Allocation)

*   **Definition:** Memory is allocated and deallocated automatically on a data structure called the "stack" during function calls and returns.
*   **Characteristics:**
    *   **LIFO (Last-In, First-Out):** Memory is allocated and deallocated in a specific order.
    *   **Automatic Management:** The compiler/runtime system handles allocation and deallocation.
    *   **Fast:** Allocation/deallocation is typically a simple increment/decrement of a stack pointer.
    *   **Local Variables:** Primarily used for function parameters and local variables within functions.
    *   **Limited Size:** The stack has a finite size, and excessive recursion or large local variables can lead to a "stack overflow" error.
*   **How it works (during function call):**
    1.  Arguments are pushed onto the stack.
    2.  The return address (where to resume execution after the function finishes) is pushed onto the stack.
    3.  Space is allocated for the function's local variables.
*   **How it works (during function return):**
    1.  Local variables are deallocated.
    2.  The return address is popped from the stack.
    3.  Control is transferred back to the caller.
*   **Example (Conceptual C-like syntax):**

    ```c
    void calculateSum(int a, int b) {
        int sum = a + b; // 'sum' is allocated on the stack
        // 'a' and 'b' are also on the stack as parameters
        // When calculateSum returns, 'sum', 'a', and 'b' are deallocated
    }

    int main() {
        int x = 10; // 'x' is allocated on the stack
        calculateSum(x, 5);
        // When main returns, 'x' is deallocated
        return 0;
    }
    ```

### 2.3 Heap Allocation (Dynamic Allocation)

*   **Definition:** Memory is allocated and deallocated explicitly by the programmer during runtime. This provides flexibility for managing data whose size or lifetime is not known at compile time.
*   **Characteristics:**
    *   **Explicit Control:** Programmer requests memory (e.g., `malloc`, `new`) and must release it (e.g., `free`, `delete`).
    *   **Flexible Size:** Can allocate memory of any size required at runtime.
    *   **Flexible Lifetime:** Memory persists until explicitly deallocated.
    *   **Slower:** Allocation/deallocation involves more complex algorithms and can be slower than stack allocation.
    *   **Fragmentation:** Over time, the heap can become fragmented into small, unusable blocks, reducing available contiguous memory.
    *   **Memory Leaks:** If allocated memory is not deallocated, it becomes inaccessible and wasted, leading to a memory leak.
    *   **Dangling Pointers:** If memory is deallocated but a pointer still points to it, dereferencing that pointer leads to undefined behavior.
*   **Common Operations:**
    *   **Allocation:** Requesting a block of memory from the heap.
    *   **Deallocation:** Returning a previously allocated block of memory to the heap.
    *   **Reallocation:** Changing the size of an already allocated block.
*   **Examples in various languages:**
    *   **C:** `malloc()`, `calloc()`, `realloc()`, `free()`
    *   **C++:** `new`, `delete`, `new[]`, `delete[]`
    *   **Java:** `new` (managed by Garbage Collector)
    *   **Python:** `list.append()`, `dict` (managed by Garbage Collector)
*   **Example (Conceptual C++ syntax):**

    ```c++
    int main() {
        // Allocate memory for an integer on the heap
        int* dynamicInt = new int;
        *dynamicInt = 100;

        // Allocate memory for an array of 5 integers on the heap
        int* dynamicArray = new int[5];
        for (int i = 0; i < 5; ++i) {
            dynamicArray[i] = i * 2;
        }

        // ... use dynamicInt and dynamicArray ...

        // Deallocate the memory explicitly
        delete dynamicInt;
        delete[] dynamicArray; // Use delete[] for arrays

        return 0;
    }
    ```

---

## 3. Memory Management and Garbage Collection

### 3.1 Manual Memory Management (C, C++)

*   **Concept:** The programmer is solely responsible for allocating and deallocating memory.
*   **Pros:**
    *   Fine-grained control over memory.
    *   Potentially higher performance when managed perfectly.
*   **Cons:**
    *   Error-prone: prone to memory leaks, dangling pointers, double frees.
    *   Increases development complexity and debugging time.

### 3.2 Automatic Memory Management (Garbage Collection - Java, Python, C#)

*   **Concept:** A runtime mechanism automatically detects and reclaims memory that is no longer being used by the program.
*   **How it works (general idea):**
    *   **Reference Counting:** Tracks how many references point to an object. When the count drops to zero, the object is eligible for collection.
    *   **Mark and Sweep:** The garbage collector (GC) periodically traverses the graph of reachable objects. Objects that are not reachable are marked for deletion.
    *   **Generational GC:** Divides objects into generations based on their age. Younger objects are collected more frequently, as they are more likely to become unreachable quickly.
*   **Pros:**
    *   Reduces memory-related bugs (leaks, dangling pointers).
    *   Simplifies development.
*   **Cons:**
    *   Can introduce unpredictable pauses (GC cycles).
    *   May consume more memory overall.
    *   Less control over exact memory deallocation times.

---

## 4. Memory Allocation in Different Language Paradigms

*   **Procedural Languages (C):** Primarily relies on static and stack allocation for local variables and global data. Heap allocation is explicit using `malloc`/`free`.
*   **Object-Oriented Languages (C++, Java):**
    *   **C++:** Supports static, stack, and heap allocation. `new` and `delete` operators are used for heap management. Constructors and destructors play a role in managing object lifetimes.
    *   **Java:** Objects are always allocated on the heap using `new`. Memory management is entirely handled by the garbage collector. Primitive types can be stack-allocated or part of heap objects.
*   **Functional Languages (Haskell, Lisp):** Often favor immutability. Memory allocation tends to be more dynamic and managed by sophisticated garbage collectors. Stack allocation can still occur for local computations.
*   **Scripting Languages (Python, JavaScript):** Typically rely heavily on dynamic allocation and automatic memory management (garbage collection). Variables often refer to objects that reside on the heap.

---

## 5. Practice Questions and Exercises

**Question 1:**
Which type of memory allocation is suitable for global variables that need to persist throughout the program's execution?
A. Stack Allocation
B. Heap Allocation
C. Static Allocation
D. Dynamic Allocation

**Question 2:**
What is the primary risk associated with excessive use of stack allocation for local variables or deep recursion?
A. Memory Fragmentation
B. Memory Leak
C. Stack Overflow
D. Dangling Pointer

**Question 3:**
In languages like Java or Python, how is memory for objects typically managed?
A. Manual allocation and deallocation by the programmer.
B. Automatic memory management through garbage collection.
C. Allocation only on the stack.
D. Allocation only on the static memory segment.

**Question 4:**
Consider the following C++ code snippet:
```c++
void processData() {
    int local_var = 10;
    int* heap_ptr = new int;
    *heap_ptr = 20;
    // ... use local_var and *heap_ptr ...
    delete heap_ptr; // Deallocation
}
```
Describe the memory allocation for `local_var` and `heap_ptr` and their respective lifetimes.

**Question 5:**
Explain the concept of a "memory leak" and how it can occur in programs that use manual heap allocation.

---

## 6. Answers to Practice Questions

**Answer 1:**
C. Static Allocation
**Explanation:** Static allocation reserves memory at compile time for entities whose size and lifetime are known beforehand, making it ideal for global variables.

**Answer 2:**
C. Stack Overflow
**Explanation:** The stack has a fixed, limited size. Deep recursion or very large local variables can exhaust this space, leading to a stack overflow error.

**Answer 3:**
B. Automatic memory management through garbage collection.
**Explanation:** Languages with garbage collection automatically reclaim memory that is no longer referenced, simplifying memory management for the programmer.

**Answer 4:**
*   `local_var`: Is allocated on the **stack** (automatic allocation). Its lifetime is confined to the `processData` function. It is automatically deallocated when the function returns.
*   `heap_ptr`: `heap_ptr` itself (the pointer variable) is allocated on the **stack**. However, the memory it *points to* (the `int` allocated with `new int`) is allocated on the **heap** (dynamic allocation). The lifetime of the memory on the heap is controlled by the programmer via explicit `delete heap_ptr;`. If `delete` were not called, this memory would remain allocated even after the function returns, potentially causing a memory leak.

**Answer 5:**
A memory leak occurs when memory that is allocated from the heap is no longer needed by the program but is not deallocated. This happens when a programmer forgets to call the deallocation function (e.g., `free` in C, `delete` in C++). The leaked memory becomes inaccessible to the program and cannot be reused, gradually reducing the available memory and potentially leading to program slowdowns or crashes.

---

## 7. Important Points to Remember

*   **Static Allocation:** Compile-time, fixed size, program's lifetime, efficient. For global and static variables.
*   **Stack Allocation:** Runtime (function calls), automatic, LIFO, fast, limited size. For local variables and function parameters. Prone to stack overflow.
*   **Heap Allocation:** Runtime (explicit requests), dynamic size, programmer-controlled lifetime, slower, flexible. For data with uncertain lifetimes or sizes. Prone to memory leaks and dangling pointers.
*   **Garbage Collection:** Automates heap deallocation, reduces programmer burden, but can introduce pauses and less precise control.
*   **Choose the right allocation strategy:** Static for known, fixed data. Stack for temporary local data. Heap for flexible, dynamic data.
*   **Manual memory management requires diligence:** Be careful with `free`/`delete` to avoid leaks and dangling pointers.
*   **Understand your language's memory model:** Different languages have different default behaviors and tools for memory management.
