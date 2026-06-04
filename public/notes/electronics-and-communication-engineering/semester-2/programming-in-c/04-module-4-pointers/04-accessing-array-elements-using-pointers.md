---
title: "Accessing array elements using pointers"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da381"
status: "completed"
scrapedAt: "2026-05-23T17:42:30.902Z"
---
# Module 4: Pointers - Accessing Array Elements Using Pointers

Welcome back, everyone! In our journey through C programming, we've already explored the power of arrays for storing collections of data. Now, we're diving into one of the most fundamental and, frankly, most exciting concepts in C: **pointers**. And today, we’re going to see how these powerful tools, pointers, can be used to access and manipulate the elements within our arrays. This is a crucial link to **CO4: Develop C programs using pointers for dynamic data handling**, as understanding how pointers interact with arrays is the bedrock for managing memory effectively, especially when dealing with data structures of varying sizes.

Let's start by recalling what an array is. Think of an array as a row of mailboxes, all lined up neatly. Each mailbox has a number (its index), starting from 0, and can hold a letter (a data element). For example, if we have an array of integers called `numbers`, declared as `int numbers[5];`, we can imagine five mailboxes labeled 0, 1, 2, 3, and 4, each capable of holding an integer.

Now, remember how we typically access these elements? We use the index, right? `numbers[0]` gives us the first element, `numbers[1]` the second, and so on. This is straightforward and familiar. But what if I told you there’s a more direct, often more efficient, way to get to these mailboxes? This is where pointers come in!

## The Address of the Array: A Gateway

Every variable in C, including an array, resides somewhere in the computer's memory. Each location in memory has a unique address. The array name itself, when used in certain contexts, actually represents the **base address** of the array. The base address is simply the memory address of the *first element* of the array.

Let’s revisit our `numbers` array: `int numbers[5];`
When the compiler sets aside memory for this array, it’s like allocating a contiguous block of memory. The name `numbers` effectively points to the very first byte of this block, which is the location of `numbers[0]`.

### Understanding Pointer Arithmetic

Here's where the magic starts. A pointer is a variable that stores a memory address. If we declare a pointer that can hold the address of an integer, we can make it point to the first element of our integer array.

Let’s say we have:
```c
int numbers[5] = {10, 20, 30, 40, 50};
int *ptr; // Declare an integer pointer
```

Now, to make `ptr` point to the first element of `numbers`, we can do this:
```c
ptr = numbers; // The array name itself gives the base address
```
Alternatively, and more explicitly, we can use the address-of operator (`&`):
```c
ptr = &numbers[0]; // Get the address of the first element
```
Both statements achieve the same result: `ptr` now holds the memory address of `numbers[0]`.

But here’s the crucial part, and this is something that Kernighan and Ritchie beautifully explain in "The C Programming Language" (their foundational text). When you have a pointer and you increment it, it doesn't just move to the *next byte* in memory. Instead, it moves forward by the *size of the data type it points to*. This is called **pointer arithmetic**.

If `ptr` is an `int *` (an integer pointer), and each integer takes up, say, 4 bytes of memory, then `ptr++` will advance `ptr` by 4 bytes. This is incredibly powerful because it automatically aligns the pointer to the *next integer element* in the array, not just the next byte.

Think of it like this: If your mailboxes are numbered 0, 1, 2, 3, 4, and the base address points to mailbox 0. When you increment your pointer, it's like saying "move to the next *type* of mailbox," which automatically takes you to mailbox 1, then mailbox 2, and so on, regardless of how many bytes each mailbox occupies. This ensures you're always pointing to the start of a valid array element.

## Accessing Array Elements Using Pointers

So, how do we actually *get* the value at the address a pointer is holding? We use the **dereference operator** (`*`).

If `ptr` points to `numbers[0]`, then `*ptr` will give us the value stored at that address, which is the value of `numbers[0]`.

Let's see this in action:
```c
int numbers[5] = {10, 20, 30, 40, 50};
int *ptr;

ptr = numbers; // ptr now holds the address of numbers[0]

printf("Value at *ptr: %d\n", *ptr); // Output: Value at *ptr: 10
```

Now, let's use pointer arithmetic to access the *next* element. Remember, `ptr` is an `int *`.

```c
ptr++; // Move ptr to point to the next integer element (numbers[1])
printf("Value at *ptr after increment: %d\n", *ptr); // Output: Value at *ptr after increment: 20
```

We can continue this:
```c
ptr++; // Now points to numbers[2]
printf("Value at *ptr again: %d\n", *ptr); // Output: Value at *ptr again: 30
```

### The Intrinsic Link: `array[i]` vs. `*(array + i)`

This is a fundamental concept and a common exam question! The C language designers built a direct relationship between array indexing and pointer arithmetic. The expression `array[i]` is actually syntactic sugar for `*(array + i)`.

Let's break that down:
*   `array`: This represents the base address of the array.
*   `array + i`: This is pointer arithmetic. It calculates the memory address of the i-th element. The compiler knows the size of the array's element type and multiplies `i` by that size, then adds it to the base address. So, `array + i` evaluates to the memory address of `array[i]`.
*   `*(array + i)`: The dereference operator (`*`) then retrieves the value stored at the calculated address.

So, `numbers[2]` is exactly equivalent to `*(numbers + 2)`.

Let's test this:
```c
int numbers[5] = {10, 20, 30, 40, 50};

printf("numbers[2] = %d\n", numbers[2]);       // Output: numbers[2] = 30
printf("*(numbers + 2) = %d\n", *(numbers + 2)); // Output: *(numbers + 2) = 30
```
See? They yield the same result! This equivalence is key to understanding how arrays and pointers are intertwined in C. This directly supports **CO2: Develop C programs using arrays, matrices, and strings**, by showing a more advanced way to handle array elements, and contributes to **CO4: Develop C programs using pointers for dynamic data handling** by demonstrating pointer arithmetic on contiguous memory blocks.

### Iterating Through Arrays with Pointers

We can use this understanding to iterate through an entire array using a pointer. Instead of using a loop counter with the `[]` operator, we can use a pointer that increments.

Consider this example:
```c
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int *ptr;

    // Initialize ptr to the beginning of the array
    ptr = numbers;

    printf("Array elements using pointer arithmetic:\n");
    for (int i = 0; i < 5; i++) {
        // The expression (ptr + i) calculates the address of the i-th element
        // The * dereferences it to get the value
        printf("%d ", *(ptr + i));
    }
    printf("\n");
    // Output: Array elements using pointer arithmetic:
    // 10 20 30 40 50

    // Alternatively, incrementing the pointer itself within the loop
    printf("Array elements by incrementing pointer:\n");
    ptr = numbers; // Reset ptr to the start
    for (int i = 0; i < 5; i++) {
        printf("%d ", *ptr); // Print the value at the current pointer location
        ptr++;              // Move the pointer to the next element
    }
    printf("\n");
    // Output: Array elements by incrementing pointer:
    // 10 20 30 40 50

    return 0;
}
```

This way of iterating is very common in C, especially when dealing with functions that accept arrays (as we'll see in CO3). Herbert Schildt, in "C The Complete Reference," emphasizes that understanding this pointer-based iteration is crucial for efficiency and for writing idiomatic C code.

### Pointer to Pointer? Not quite for simple array access.

Now, you might wonder, if `ptr` is an integer pointer (`int *`), could we use a pointer-to-pointer (`int **`)? For simply accessing array elements like we've shown, a single pointer is sufficient. A pointer-to-pointer is typically used when you want to modify *which* array a pointer points to, from within a function, or when dealing with arrays of pointers (like a 2D array where each row is a separate array). For this topic, focus on the `int *` pointing to `int` elements.

## Why Use Pointers for Array Access?

You might be thinking, "Why go through all this trouble? `array[i]` is so simple!" That's a great question! While `array[i]` is perfectly valid and often easier to read, understanding pointer access offers several advantages:

1.  **Efficiency:** In some scenarios, especially in low-level programming or performance-critical code, directly manipulating pointers can be slightly more efficient as it bypasses some of the intermediate steps the compiler might take with array indexing. It's a closer-to-the-metal approach.
2.  **Flexibility with Functions:** This is a big one for **CO3: Utilize functions...**. When you pass an array to a function in C, you're actually passing the *base address* of the array (a pointer to its first element). Inside the function, you receive this pointer, and you'll often use pointer arithmetic to access its elements. So, understanding this concept is vital for writing effective functions that work with arrays.
3.  **Foundation for Dynamic Memory Allocation:** As we move towards **CO4**, where we deal with dynamically allocated memory (memory requested from the system at runtime using `malloc`, `calloc`, etc.), we will exclusively be working with pointers. These dynamically allocated blocks of memory are essentially just memory addresses, and we access their contents using pointer arithmetic, just like with arrays.
4.  **Clarity in Complex Data Structures:** For more complex data structures built on arrays, like multi-dimensional arrays or arrays of structures, pointer manipulation can often lead to clearer and more manageable code.

Byron S. Gottfried, in "Programming with C," dedicates significant attention to this connection, highlighting how mastering pointer access to arrays unlocks a deeper understanding of how C manages memory and data.

## Common Pitfalls and Exam Tips

*   **Off-by-One Errors:** Be super careful when incrementing pointers. If you have an array of size `N`, valid indices are `0` to `N-1`. If your pointer goes beyond `N-1` (i.e., points to the memory *after* the last element), you’re in "undefined behavior" territory. The program might crash, or worse, behave erratically. Always ensure your loop conditions (`i < size` or `ptr != end_of_array`) are correct.
*   **Forgetting Dereferencing:** A common mistake is to have a pointer `ptr` and try to use it as if it were the value itself. For instance, `printf("%d", ptr);` instead of `printf("%d", *ptr);`. Remember, `ptr` holds an address; `*ptr` gives you the value at that address.
*   **Confusing `ptr` and `*ptr`:** This is the most frequent one. `ptr` is the address (like the mailbox number), `*ptr` is the content inside the mailbox.
*   **Array Name vs. Pointer:** While `array` often decays into a pointer to its first element, it's not *exactly* the same. For example, `sizeof(array)` will give you the total size of the array in bytes, whereas `sizeof(ptr)` (where `ptr = array`) will give you the size of a pointer variable (typically 4 or 8 bytes). This distinction is important, especially in function arguments.
*   **`*(array + i)` vs. `array[i]`:** Understand their equivalence. Exams often test this direct mapping.

**Remember this:** The array name is the base address. Pointer arithmetic automatically accounts for the size of the data type. `*(array + i)` is the pointer-based equivalent of `array[i]`.

## Sample Questions with Answers

**Question 1 (Conceptual):**
Explain the relationship between the `[]` array subscript operator and pointer arithmetic in C.

**Answer:**
In C, the array subscript operator `array[i]` is directly related to pointer arithmetic. The expression `array[i]` is essentially a shorthand for `*(array + i)`. Here's the breakdown:
*   `array` represents the base memory address of the array.
*   `array + i` uses pointer arithmetic. The compiler knows the size of the elements in `array` and calculates the memory address of the `i`-th element by taking the base address and adding `i` times the size of an element.
*   The dereference operator `*` then retrieves the value stored at this calculated address.
Thus, `array[i]` and `*(array + i)` are functionally equivalent for accessing array elements. This equivalence is fundamental to understanding how arrays are managed in C and is a cornerstone for working with pointers and dynamic memory.

**Question 2 (Practical/Exam-Oriented):**
Write a C program that declares an integer array of size 5, initializes it with values, and then prints all its elements using a pointer, demonstrating both `*(ptr + i)` and incrementing pointer methods.

**Answer:**
```c
#include <stdio.h>

int main() {
    int numbers[5] = {100, 200, 300, 400, 500};
    int *ptr;

    printf("--- Method 1: Using *(ptr + i) ---\n");
    ptr = numbers; // ptr points to the first element (numbers[0])

    for (int i = 0; i < 5; i++) {
        // Calculate address of i-th element and dereference
        printf("Element %d: %d\n", i, *(ptr + i));
    }

    printf("\n--- Method 2: Incrementing Pointer ---\n");
    ptr = numbers; // Reset ptr to the start of the array

    for (int i = 0; i < 5; i++) {
        // Print value at current pointer location
        printf("Element %d: %d\n", i, *ptr);
        // Move pointer to the next element
        ptr++;
    }

    // Example of a common pitfall: ptr is now out of bounds!
    // printf("\nValue after last increment: %d\n", *ptr); // Dangerous!

    return 0;
}
```

**Reasoning:**
*   The program initializes an integer array `numbers`.
*   An integer pointer `ptr` is declared.
*   **Method 1:** `ptr` is set to the base address of `numbers`. The loop iterates from `i = 0` to `4`. In each iteration, `*(ptr + i)` calculates the address of the `i`-th element relative to the base address `ptr` and then dereferences it to fetch the value.
*   **Method 2:** `ptr` is reset to the base address. The loop iterates, printing the value at the current `*ptr` and then incrementing `ptr` using `ptr++`. Because `ptr` is an `int *`, `ptr++` automatically advances the pointer by the size of an integer, ensuring it points to the next valid element.
*   The commented-out line `printf("\nValue after last increment: %d\n", *ptr);` is included to highlight a potential pitfall. After the loop in Method 2 finishes, `ptr` would have been incremented 5 times, making it point to the memory location *immediately after* the last element of the array. Dereferencing this pointer leads to undefined behavior, as it's accessing memory that doesn't belong to the array. This demonstrates the importance of correct loop bounds.

This understanding of accessing array elements via pointers is fundamental and directly addresses learning outcomes related to pointer usage and array manipulation, paving the way for more advanced C programming concepts. Keep practicing these concepts, and you'll find your ability to control data and memory in C grow significantly!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
