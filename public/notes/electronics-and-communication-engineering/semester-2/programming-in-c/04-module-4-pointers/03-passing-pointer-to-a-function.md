---
title: "Passing pointer to a function"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da380"
status: "completed"
scrapedAt: "2026-05-23T17:42:29.974Z"
---
# PROGRAMMING IN C: Module 4 - Pointers: Passing Pointers to Functions

Welcome, everyone! Today, we're diving into a truly fundamental and, frankly, *powerful* aspect of C programming: **Passing Pointers to Functions**. This topic is absolutely crucial for mastering C and achieving the goals of our course, particularly **CO4: Develop C programs using pointers for dynamic data handling**. We'll also see how it directly supports **CO3: Utilize functions to find solution to the computational problems** by allowing functions to modify data outside their own scope.

Think of functions as specialized workers. Sometimes, you need a worker to do a specific job, like adding two numbers. That's fine, they can do that within their own little workshop. But what if you need a worker to go into *your* toolbox and replace a worn-out wrench? They need to know *where* your toolbox is, and *which* wrench to replace. That's where pointers come in when working with functions! They are the "addresses" that allow functions to interact with and modify data located elsewhere in your program.

## Why Pass Pointers to Functions?

Before we jump into the "how," let's solidify the "why." You already know that C functions, by default, use a mechanism called "pass-by-value." When you call a function with an argument, a *copy* of that argument's value is made and passed to the function's parameter.

Imagine you have a variable `int count = 10;` and you call `void increment(int num) { num++; }`. If you call `increment(count);`, inside `increment`, `num` becomes 11. But back in `main`, `count` will *still* be 10. Why? Because `increment` only worked on a *copy* of `count`. It was like giving someone a photocopy of your favorite book; they can write on the photocopy all they want, but your original book remains untouched.

This is perfectly fine for many situations. However, there are times when you *want* a function to be able to modify the original variable. This is essential for:

*   **Modifying Original Data:** The most direct reason. You want a function to change the value of a variable that exists outside its scope.
*   **Efficiency (especially with large data):** Passing large structures or arrays by value involves copying a lot of data. Passing a pointer to that data is much faster because you're only copying the memory address, which is typically a small, fixed size (e.g., 4 or 8 bytes). This is a key aspect of **CO4**.
*   **Returning Multiple Values:** While a C function can only `return` one value directly, you can use pointers to allow a function to "return" or update multiple pieces of data by passing pointers to variables that the function can then modify.

By passing a pointer, you're giving the function the *exact location* (the address) of the original variable. It's like giving the worker the actual key to your toolbox, not just a description of a wrench. This is how functions can indeed affect the "dynamic data handling" mentioned in **CO4**.

## How to Pass Pointers to Functions

The process is straightforward once you understand the concept:

1.  **In the calling function (e.g., `main`):**
    *   Declare a pointer variable.
    *   Assign the address of the variable you want to pass to this pointer using the address-of operator (`&`).
    *   Call the function, passing the *pointer variable* as the argument.

2.  **In the called function (the function definition):**
    *   Declare the parameter as a pointer type that matches the type of data the pointer points to.
    *   Inside the function, use the dereference operator (`*`) to access and modify the value at the memory location pointed to by the parameter.

Let's illustrate with an example. We'll create a simple function to swap the values of two variables. Without pointers, this is tricky. With pointers, it's a classic demonstration.

### Example: Swapping Two Numbers Using Pointers

Consider this scenario: You have two friends, Alice and Bob, with their favorite toys. You want to swap their toys, but you can only do it by telling a helper *exactly where* Alice and Bob are (their houses, represented by addresses). If you just tell the helper "Alice has a red ball" and "Bob has a blue car," the helper might take a *copy* of the toys and swap those, leaving Alice and Bob with their original toys. But if you give the helper the addresses of Alice's house and Bob's house, the helper can go to those specific houses and perform the swap.

Here's the C code:

```c
#include <stdio.h>

// Function that takes pointers to integers
void swap(int *ptrA, int *ptrB) {
    int temp; // Temporary variable to hold a value during swap

    // Access the values using dereference operator (*)
    // temp now holds the value at the address ptrA points to
    temp = *ptrA;

    // The value at the address ptrB points to is copied to the address ptrA points to
    *ptrA = *ptrB;

    // The original value of ptrA (stored in temp) is now assigned to the address ptrB points to
    *ptrB = temp;

    printf("\nInside swap function:\n");
    printf("Value at address %p is: %d\n", ptrA, *ptrA); // Displaying address and its content
    printf("Value at address %p is: %d\n", ptrB, *ptrB); // Displaying address and its content
}

int main() {
    int num1 = 10;
    int num2 = 20;

    int *pNum1 = &num1; // pNum1 now holds the address of num1
    int *pNum2 = &num2; // pNum2 now holds the address of num2

    printf("Before swap:\n");
    printf("num1 = %d, num2 = %d\n", num1, num2);
    printf("Address of num1: %p\n", pNum1); // Displaying the address stored in pNum1
    printf("Address of num2: %p\n", pNum2); // Displaying the address stored in pNum2

    // Calling the swap function, passing the addresses (pointers)
    swap(pNum1, pNum2);
    // Alternatively, you could directly pass the addresses:
    // swap(&num1, &num2);

    printf("\nAfter swap:\n");
    printf("num1 = %d, num2 = %d\n", num1, num2); // num1 and num2 are now swapped!

    return 0;
}
```

**Let's break this down:**

*   **`void swap(int *ptrA, int *ptrB)`**: Here, `ptrA` and `ptrB` are declared as pointers to `int`. This tells the `swap` function that it expects to receive memory addresses where `int` values are stored.
*   **`temp = *ptrA;`**: The `*` here is the *dereference operator*. It means "go to the address stored in `ptrA` and fetch the value found there." So, `temp` gets the value of `num1` (which is 10).
*   **`*ptrA = *ptrB;`**: This is the crucial part for modification. It means "go to the address stored in `ptrB` (which is the address of `num2`), get the value there (20), and then go to the address stored in `ptrA` (the address of `num1`) and store that value (20) there." Now, `num1` actually becomes 20.
*   **`*ptrB = temp;`**: Similarly, this takes the original value of `num1` (which we saved in `temp`) and puts it into the location pointed to by `ptrB` (which is `num2`). So, `num2` becomes 10.

**The output of this program will be:**

```
Before swap:
num1 = 10, num2 = 20
Address of num1: 0x7ffeea1b4c24  // (Address will vary)
Address of num2: 0x7ffeea1b4c28  // (Address will vary)

Inside swap function:
Value at address 0x7ffeea1b4c24 is: 20
Value at address 0x7ffeea1b4c28 is: 10

After swap:
num1 = 20, num2 = 10
```

Notice how `num1` and `num2` in `main` were successfully modified by the `swap` function. This is the power of passing pointers! This directly relates to **CO4** enabling dynamic data handling and **CO3** allowing functions to contribute to the overall solution by modifying data.

Herbert Schildt's "C The Complete Reference" often emphasizes how pointers provide a direct mechanism for manipulating memory, and this example is a prime illustration.

### Passing Arrays to Functions

Arrays are a bit special. When you pass an array name to a function, what is actually passed? Is it a copy of the entire array? No, it's not. The name of an array, in most contexts, *decays* into a pointer to its first element.

So, when you declare a function like `void processArray(int arr[])` or `void processArray(int *arr)`, both are effectively the same in terms of what the function receives: a pointer to the first element of the array.

This means that any modifications made to the array elements *inside* the function will affect the *original* array. This is a very common and efficient way to work with arrays in C. This is key for **CO2: Develop C programs using arrays, matrices, and strings**, and directly supported by **CO4**.

Let's see an example:

```c
#include <stdio.h>

// Function to double each element of an array
// 'arr' here receives a pointer to the first element of the array
void doubleArrayElements(int arr[], int size) {
    // We iterate through the array using pointer arithmetic or array indexing
    // Both are equivalent when working with pointers to array elements
    for (int i = 0; i < size; i++) {
        // arr[i] is equivalent to *(arr + i)
        arr[i] = arr[i] * 2;
        // Or using pointer arithmetic directly:
        // *(arr + i) = *(arr + i) * 2;
    }
    printf("\nInside doubleArrayElements function:\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]); // Values are doubled in the original array
    }
    printf("\n");
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int n = sizeof(numbers) / sizeof(numbers[0]); // Calculate number of elements

    printf("Before doubling:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    // Pass the array name (which decays to a pointer to the first element)
    doubleArrayElements(numbers, n);

    printf("\nAfter doubling:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", numbers[i]); // Original array is modified
    }
    printf("\n");

    return 0;
}
```

**Output:**

```
Before doubling:
1 2 3 4 5

Inside doubleArrayElements function:
2 4 6 8 10

After doubling:
2 4 6 8 10
```

As you can see, the `numbers` array in `main` is directly modified by the `doubleArrayElements` function. This is because `doubleArrayElements` received a pointer to the first element, and it used that pointer (implicitly via array indexing `arr[i]` or explicitly via pointer arithmetic `*(arr + i)`) to alter the original array's contents. This is a fundamental pattern in C programming, as covered in Brian Kernighan and Dennis Ritchie's "The C Programming Language."

### Passing Structures to Functions

Similar to arrays, if you want a function to modify a structure variable directly, you can pass a pointer to the structure. Passing structures by value would copy the entire structure, which can be inefficient for large structures.

Let's create a simple `Point` structure and a function to move it.

```c
#include <stdio.h>

// Define a structure for a point
typedef struct {
    int x;
    int y;
} Point;

// Function to move a point by given offsets, using a pointer to Point
void movePoint(Point *p, int dx, int dy) {
    // Access members using the arrow operator (->) when working with pointers to structures
    p->x = p->x + dx; // Equivalent to (*p).x = (*p).x + dx;
    p->y = p->y + dy; // Equivalent to (*p).y = (*p).y + dy;
}

int main() {
    Point myPoint = {10, 20};

    printf("Original point: (%d, %d)\n", myPoint.x, myPoint.y);

    // Get the address of myPoint and pass it to movePoint
    movePoint(&myPoint, 5, -3);

    printf("Moved point:    (%d, %d)\n", myPoint.x, myPoint.y);

    return 0;
}
```

**Output:**

```
Original point: (10, 20)
Moved point:    (15, 17)
```

**Key points here:**

*   **`typedef struct { ... } Point;`**: This creates a new type named `Point` for our structure.
*   **`void movePoint(Point *p, int dx, int dy)`**: The function `movePoint` expects a pointer to a `Point` structure.
*   **`p->x` and `p->y`**: When you have a pointer to a structure (like `p`), you use the **arrow operator (`->`)** to access its members. This is a shorthand for dereferencing the pointer and then accessing the member using the dot operator (e.g., `(*p).x`). The arrow operator is much cleaner!
*   **`movePoint(&myPoint, 5, -3);`**: We pass the address of `myPoint` to the function.

This allows `movePoint` to directly modify the `x` and `y` coordinates of the `myPoint` variable in `main`, demonstrating how pointers enable functions to interact with and alter complex data types. This is a cornerstone for **CO4** and aligns with how functions are used to solve problems as per **CO3**.

## Common Pitfalls and Things to Remember

Working with pointers can be a bit tricky at first, and passing pointers to functions is no exception. Here are some common issues and essential reminders:

*   **Null Pointers:** If a function receives a `NULL` pointer, attempting to dereference it (`*ptr`) will lead to a segmentation fault or a crash. Always check if a pointer is `NULL` before dereferencing it, especially if the pointer is passed as an argument.
    *   *Example Check:* `if (ptr != NULL) { /* do something */ }`

*   **Dangling Pointers:** Be careful not to let a pointer point to memory that has been deallocated or is no longer valid. If a function receives a pointer to a local variable of another function, and that other function finishes, the memory for the local variable is reclaimed. The pointer then becomes "dangling."
    *   *Think:* If you pass a pointer to a cup of water, but the person who owned the cup throws it away, your pointer is now pointing to nothing useful.

*   **Mismatched Pointer Types:** If you declare a pointer of type `int *` and try to assign it the address of a `char` variable, or pass it to a function expecting `float *`, you're asking for trouble. The compiler might issue warnings, but it's your responsibility to ensure type compatibility when dealing with pointers. Gottfried's "Programming with C" has excellent sections on type safety with pointers.

*   **Forgetting the `&` or `*`:** This is super common for beginners.
    *   If a function expects a pointer (e.g., `void func(int *p)`), and you pass `func(num)` instead of `func(&num)`, you're passing the value, not the address. This leads to the "pass-by-value" behavior, and the original variable won't be modified.
    *   Inside the function, if you intend to modify the original value, you *must* use the dereference operator (`*p`). If you forget it (e.g., `p = p + 1;` instead of `*p = *p + 1;`), you're just changing what the pointer `p` points to, not the value at the original address.

*   **"Pass-by-Pointer" vs. "Pass-by-Address":** While we often say "passing a pointer," it's more accurate to say we are passing the *value* of a pointer (which is a memory address). The function then *uses* this address (via dereferencing) to access or modify the original data. This subtle distinction is important for a deep understanding.

*   **Exam Tip:** Questions involving swapping values, modifying array elements, or operating on structures using functions almost always require passing pointers. Be prepared to write functions that take pointer arguments and to call them with the `&` operator. Also, understanding how array names decay into pointers is vital for array-based questions.

## Connection to Course Outcomes

Let's explicitly tie this back to our course objectives:

*   **CO1 (Infer a computational problem and develop C programs...):** Understanding how to pass pointers allows us to tackle problems where multiple parts of a program need to share and modify data, making our problem-solving more robust. For instance, if a sensor reading needs to be updated by a separate function, passing a pointer is the way to go.
*   **CO2 (Develop C programs using arrays, matrices, and strings):** As we saw, arrays and strings are naturally handled via pointers when passed to functions. This is how functions can efficiently process and manipulate collections of data.
*   **CO3 (Utilize functions to find solution to the computational problems...):** By allowing functions to modify data outside their immediate scope, passing pointers significantly enhances the utility of functions. We can create modular code where helper functions perform essential tasks like data validation, sorting, or updating, directly impacting the main program's data.
*   **CO4 (Develop C programs using pointers for dynamic data handling):** This topic is the very essence of **CO4**. Passing pointers is how we achieve dynamic data manipulation, allowing functions to interact with data that might be allocated dynamically (using `malloc`, `calloc`) or simply data that needs to be shared and modified across different parts of the program. It's the mechanism for functions to have a "memory" or "effect" beyond their local scope.
*   **CO5 (Use files in C...):** While not directly covered in this *specific* topic, understanding pointers is foundational for file handling. Functions that read from or write to files often take pointers to buffers or file structures, allowing them to manage the data flow.

## Summary

To recap, passing pointers to functions in C is a technique that allows functions to directly access and modify variables in the calling scope. It's achieved by passing the *address* of a variable to a function parameter declared as a pointer. We use the dereference operator (`*`) within the function to work with the original data. This is a powerful tool for efficiency, for allowing functions to alter data, and for returning multiple values indirectly. Remember the `&` to get an address and the `*` to dereference it. Master this, and you unlock a significant level of control and capability in your C programs!

---

## Sample Questions and Answers

Here are some questions to test your understanding, ranging from conceptual to exam-style:

**Question 1 (Conceptual):**
What is the primary difference between passing a variable by value and passing it by reference (using a pointer) to a function in C?

**Answer 1:**
When a variable is passed by **value**, a *copy* of the variable's value is created and passed to the function. Any modifications made to the parameter within the function affect only this copy, not the original variable.
When a variable is passed by **reference** (by passing a pointer to it), the *memory address* of the original variable is passed to the function. The function can then use this address (via dereferencing) to access and modify the *original* variable's data.

**Question 2 (Exam-Style - Code Interpretation):**
Consider the following C code snippet:

```c
#include <stdio.h>

void modify(int *x, int y) {
    *x = *x + 5;
    y = y + 10;
    printf("Inside modify: *x = %d, y = %d\n", *x, y);
}

int main() {
    int a = 10;
    int b = 20;
    modify(&a, b);
    printf("In main: a = %d, b = %d\n", a, b);
    return 0;
}
```
What will be the output of this program? Explain why.

**Answer 2:**
**Output:**
```
Inside modify: *x = 15, y = 30
In main: a = 15, b = 20
```
**Explanation:**
1.  In `main`, `a` is 10 and `b` is 20.
2.  `modify(&a, b)` is called.
    *   `&a` (the address of `a`) is passed to the pointer parameter `*x`. So, `*x` inside `modify` refers to the original `a`.
    *   `b` (the value 20) is passed to the value parameter `y`. So, `y` inside `modify` is a copy of `b`.
3.  Inside `modify`:
    *   `*x = *x + 5;` dereferences `x` (which points to `a`), adds 5, and stores it back into `a`. So, `a` becomes `10 + 5 = 15`.
    *   `y = y + 10;` adds 10 to the local copy `y`. So, `y` becomes `20 + 10 = 30`.
    *   The `printf` inside `modify` shows the current state: `*x` (which is `a`) is 15, and `y` (the copy) is 30.
4.  Back in `main`:
    *   The `printf` shows the values of `a` and `b`. Since `a` was modified via its pointer (`*x`), its value is now 15.
    *   Since `b` was passed by value, the modification to `y` inside `modify` did not affect the original `b`. So, `b` remains 20.

**Question 3 (Conceptual/Application):**
Why is it more efficient to pass a large structure to a function using a pointer rather than passing it by value?

**Answer 3:**
Passing a large structure by value involves creating a complete copy of all its members and passing that copy to the function. This can consume significant memory and processor time, especially for very large structures.
Passing a pointer to the structure, on the other hand, involves copying only the memory address of the structure. Addresses are typically small, fixed-size values (like 4 or 8 bytes), regardless of the structure's size. This makes passing by pointer much more memory-efficient and faster, particularly when dealing with large data aggregates. This directly supports **CO4** for efficient data handling.

**Question 4 (Exam-Style - Code Writing):**
Write a C function that takes a pointer to an integer and increments the value pointed to by that pointer. Then, write the `main` function to demonstrate its use by initializing an integer variable, calling your function with its address, and printing the original and modified values.

**Answer 4:**

```c
#include <stdio.h>

// Function to increment the value pointed to by ptr
void incrementValue(int *ptr) {
    // Check if the pointer is valid before dereferencing
    if (ptr != NULL) {
        (*ptr)++; // Dereference ptr, increment the value, and store back
    }
}

int main() {
    int myNumber = 50;
    int *pMyNumber = &myNumber; // Pointer to myNumber

    printf("Before calling incrementValue: myNumber = %d\n", myNumber);

    // Call the function, passing the address of myNumber
    incrementValue(pMyNumber);
    // Alternatively, pass address directly: incrementValue(&myNumber);

    printf("After calling incrementValue:  myNumber = %d\n", myNumber);

    return 0;
}
```
**Reasoning:**
The `incrementValue` function accepts an `int *ptr`. Inside, `(*ptr)++` is used. The parentheses around `*ptr` are crucial. If we wrote `*ptr++`, it would increment the pointer itself (making it point to the next integer memory location), not the value it points to. By correctly dereferencing and then incrementing, the original `myNumber` in `main` is modified. This is a direct application of passing pointers for modification as required by **CO4**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
