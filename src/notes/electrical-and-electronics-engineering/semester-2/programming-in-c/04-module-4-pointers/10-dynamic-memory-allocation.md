---
title: "Dynamic Memory Allocation."
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9912"
status: "completed"
scrapedAt: "2026-05-23T16:09:37.340Z"
---
# PROGRAMMING IN C - MODULE 4: POINTERS

## Topic: Dynamic Memory Allocation

Welcome back, everyone! In this session, we're going to dive into one of the most powerful and, frankly, sometimes tricky aspects of C programming: **Dynamic Memory Allocation**. You've already got a solid grasp of pointers from our earlier discussions, and believe me, that foundation is absolutely crucial for understanding what we're about to cover.

You see, for a long time, we've been allocating memory for our variables directly when we declare them. Think about an array like `int arr[10];`. When the program starts executing, the compiler *knows* exactly how much memory to set aside for those 10 integers. This is called **static memory allocation**, or sometimes **compile-time memory allocation**. It's predictable, it's safe, but it has a significant limitation: the size of the memory is fixed *before* the program even runs.

What if you don't know how much memory you'll need until your program is actually running? For instance, imagine you're writing a program to read student records, but you don't know how many students there will be until the user tells you. Or maybe you're building a data structure like a linked list or a tree, where nodes are added and removed as needed. In these scenarios, static allocation just won't cut it. We need a way to ask the operating system for memory *while the program is running*. This, my friends, is where **dynamic memory allocation** comes in.

This topic directly ties into our **Course Outcome 4 (CO4): Develop C programs using pointers for dynamic data handling.** By the end of this session, you'll be equipped to manage memory flexibly, which is a hallmark of efficient C programming.

Let's get started by understanding the core functions that make this magic happen.

### The Core Functions: `malloc()`, `calloc()`, `realloc()`, and `free()`

These are the workhorses of dynamic memory allocation in C. They are all declared in the `<stdlib.h>` header file, so the first thing you'll always need is:

```c
#include <stdlib.h>
```

#### 1. `malloc()`: The "Make a Block" Function

Think of `malloc()` as asking the system to "make you a block" of memory of a specific size. The name `malloc` actually stands for "memory allocation."

**How it works:**
`malloc()` takes a single argument: the number of *bytes* you want to allocate. It then searches the "heap" (a region of memory available for dynamic allocation) for a contiguous block of memory of that size. If it finds one, it returns a **pointer** to the *beginning* of that block. If it can't find enough contiguous memory, it returns `NULL`.

**Syntax:**
```c
void* malloc(size_t size);
```
Notice the return type is `void*`. This is important! `malloc()` doesn't know what *type* of data you intend to store in this memory block. It just gives you raw bytes. So, you *must* cast this `void*` pointer to the specific type of pointer you need.

**An Analogy:** Imagine you need to store 5 oranges. You go to a grocery store and say, "I need space for 5 oranges." The store gives you a box. They don't fill the box with oranges; they just give you the *box* (the memory). You then take your oranges and put them in the box. Similarly, `malloc()` gives you the memory space, and you use a pointer of the correct type (like `int*`, `char*`, `struct node*`) to point to it and store your data.

**Example:** Allocating memory for a single integer.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr; // Declare a pointer to an integer

    // Allocate memory for ONE integer.
    // sizeof(int) gives the number of bytes an integer needs.
    ptr = (int*)malloc(sizeof(int));

    // Crucial check: Did malloc succeed?
    if (ptr == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // Indicate an error
    }

    // Now we can use the allocated memory
    *ptr = 100; // Store the value 100 in the dynamically allocated memory
    printf("Value stored at dynamically allocated memory: %d\n", *ptr);

    // IMPORTANT: We MUST free the memory when we are done with it.
    free(ptr);
    ptr = NULL; // Good practice to set the pointer to NULL after freeing

    return 0;
}
```

**Explanation:**
*   We declare `ptr` as an `int*`.
*   `malloc(sizeof(int))` asks for enough bytes to hold one integer.
*   `(int*)` casts the `void*` returned by `malloc()` to an `int*`.
*   The `if (ptr == NULL)` check is absolutely vital. If `malloc` fails (e.g., out of memory), it returns `NULL`, and dereferencing a `NULL` pointer leads to a crash.
*   `*ptr = 100;` uses the pointer to store data.
*   `free(ptr);` is the counterpart to `malloc()`. We'll discuss this more in a moment.

**Common Pitfall:** Forgetting to cast the `void*` pointer returned by `malloc()`. This can lead to type-mismatch errors. Another common mistake is forgetting the `NULL` check.

#### Allocating Memory for an Array

This is where `malloc()` really shines, allowing us to create arrays whose size isn't fixed at compile time.

**Example:** Allocating memory for an array of 5 integers.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr_ptr;
    int n = 5; // Let's say we need an array of 5 integers

    // Allocate memory for n integers
    // size_t bytes_needed = n * sizeof(int);
    arr_ptr = (int*)malloc(n * sizeof(int));

    if (arr_ptr == NULL) {
        printf("Memory allocation for array failed!\n");
        return 1;
    }

    // Now arr_ptr points to the beginning of a block of memory
    // that can hold 5 integers. We can access it like an array.
    printf("Enter %d integers:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr_ptr[i]); // Or scanf("%d", arr_ptr + i);
    }

    printf("You entered:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr_ptr[i]); // Or printf("%d ", *(arr_ptr + i));
    }
    printf("\n");

    // Free the allocated memory
    free(arr_ptr);
    arr_ptr = NULL;

    return 0;
}
```
**Key Point:** When allocating for an array, remember you need `number_of_elements * size_of_one_element` bytes. So, `n * sizeof(int)` is the correct calculation.

#### 2. `calloc()`: The "Contiguous Allocation" Function

`calloc()` is very similar to `malloc()`, but it has two key differences:

1.  **Arguments:** It takes *two* arguments: the number of elements and the size of each element.
2.  **Initialization:** It initializes all the allocated memory bytes to **zero**.

**Syntax:**
```c
void* calloc(size_t num_elements, size_t element_size);
```

**Why is initialization to zero important?**
Sometimes, especially when dealing with structures or arrays where you want default values, this pre-initialization can save you an extra step. Think of it like getting a box of pencils that are already sharpened, versus getting an empty box and having to sharpen them yourself.

**Example:** Allocating and initializing an array of 5 integers to zero.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr_ptr;
    int n = 5;

    // Allocate memory for n integers AND initialize them to 0
    arr_ptr = (int*)calloc(n, sizeof(int));

    if (arr_ptr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    printf("Array elements after calloc:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr_ptr[i]); // All will be 0
    }
    printf("\n");

    // You can then assign other values
    arr_ptr[0] = 10;
    arr_ptr[1] = 20;
    // ...

    free(arr_ptr);
    arr_ptr = NULL;

    return 0;
}
```

**Recall from Textbooks:**
*   **Gottfried's "Programming with C"** often emphasizes the byte-level nature of `malloc()` and the need for `sizeof` in calculations.
*   **Kernighan & Ritchie (K&R)**, the classics, introduce these functions as essential tools for building flexible data structures, making the point that the C runtime library provides these powerful capabilities. They might show you how `calloc` is particularly useful for initializing structures where you might have `NULL` pointers or zeroed-out integer members.

**When to use `malloc()` vs. `calloc()`?**
*   Use `malloc()` when you don't need the memory zero-initialized. It's often slightly faster because it skips the initialization step.
*   Use `calloc()` when you want the memory initialized to zero (or `NULL` for pointers). This can prevent bugs related to uninitialized data.

#### 3. `realloc()`: The "Resize That Block" Function

What happens if you've allocated memory, but later realize you need more space? Or perhaps you've allocated too much and want to give some back? This is where `realloc()` comes in. It allows you to **resize** a previously allocated memory block.

**How it works:**
`realloc()` takes two arguments: a pointer to the existing memory block and the new size (in bytes) you want for that block. It attempts to resize the block *in place*. If it can't, it allocates a *new* block of the requested size, copies the contents from the old block to the new block, and then frees the old block. It then returns a pointer to the (potentially new) resized block.

**Syntax:**
```c
void* realloc(void* ptr, size_t new_size);
```
*   `ptr`: A pointer to the memory block previously allocated by `malloc()`, `calloc()`, or `realloc()`. If `ptr` is `NULL`, `realloc()` behaves like `malloc(new_size)`.
*   `new_size`: The new size in bytes for the memory block.

**Important Considerations with `realloc()`:**

*   **Return Value:** Like `malloc()` and `calloc()`, `realloc()` returns a `void*` pointer. You must cast it.
*   **Failure:** If `realloc()` fails (e.g., not enough memory to resize), it returns `NULL`. The *original* memory block pointed to by `ptr` is **still valid** and **unchanged**. This is a critical point!
*   **The "Double Pointer" Trick:** Because `realloc()` might return a *new* address, it's a common and safe practice to use a temporary pointer for the result of `realloc()` to avoid losing the original block if `realloc` fails.

**Example:** Resizing an array.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr_ptr;
    int initial_size = 5;
    int new_size = 10;

    // Allocate initial memory
    arr_ptr = (int*)malloc(initial_size * sizeof(int));
    if (arr_ptr == NULL) {
        printf("Initial allocation failed!\n");
        return 1;
    }

    // Fill initial array
    for (int i = 0; i < initial_size; i++) {
        arr_ptr[i] = i + 1;
    }
    printf("Initial array: ");
    for (int i = 0; i < initial_size; i++) {
        printf("%d ", arr_ptr[i]);
    }
    printf("\n");

    // Resize the array
    int *temp_ptr = (int*)realloc(arr_ptr, new_size * sizeof(int));

    // Check if realloc was successful
    if (temp_ptr == NULL) {
        printf("Memory reallocation failed!\n");
        // arr_ptr is STILL valid and contains the original data
        // We should free it here before exiting
        free(arr_ptr);
        return 1;
    } else {
        // Realloc was successful, update our main pointer
        arr_ptr = temp_ptr;
        printf("Array resized successfully.\n");

        // Now arr_ptr points to the new, larger block.
        // The first 'initial_size' elements are preserved.
        // The new elements are uninitialized.

        // Fill the new part of the array
        for (int i = initial_size; i < new_size; i++) {
            arr_ptr[i] = (i + 1) * 10;
        }

        printf("Resized array: ");
        for (int i = 0; i < new_size; i++) {
            printf("%d ", arr_ptr[i]);
        }
        printf("\n");

        // Free the memory
        free(arr_ptr);
        arr_ptr = NULL;
    }

    return 0;
}
```

**Why the `temp_ptr`?**
If `realloc(arr_ptr, ...)` were to fail, it would return `NULL`. If we had written `arr_ptr = realloc(arr_ptr, ...);` directly, then `arr_ptr` would now be `NULL`. We would have lost the pointer to the original, valid memory block, and couldn't `free()` it, leading to a memory leak! Using `temp_ptr` prevents this catastrophic loss. **Remember this pattern!**

**Shrinking Memory:** You can also use `realloc()` to shrink a block. If you pass `0` as the `new_size` and a non-NULL pointer, it's equivalent to calling `free(ptr)` and returns `NULL`.

#### 4. `free()`: The "Release That Memory" Function

This is the most critical function for preventing memory leaks. Just as you needed to `malloc` or `calloc` memory, you absolutely *must* `free` it when you are finished with it.

**How it works:**
`free()` takes a single argument: a pointer to a memory block that was previously allocated by `malloc()`, `calloc()`, or `realloc()`. It returns the memory block to the system (the heap), making it available for future allocations.

**Syntax:**
```c
void free(void* ptr);
```

**Key Rules and Best Practices:**

*   **Don't `free()` memory that wasn't dynamically allocated.** Freeing memory on the stack (like local variables) or static/global memory will cause a crash.
*   **Don't `free()` the same memory twice.** This is called a "double free," and it's a serious error that can corrupt your program's memory management.
*   **Don't access memory after it has been freed.** Any attempt to read from or write to freed memory is undefined behavior and will likely crash your program.
*   **Set the pointer to `NULL` after freeing.** This is a good defensive programming practice. If you accidentally try to use the pointer again, you'll be dereferencing `NULL` (which is bad but often detectable), rather than a dangling pointer that might point to garbage or memory that's been reallocated for something else.

**Example (revisited):**
```c
// ... after using the dynamically allocated memory ...
free(ptr);     // Release the memory
ptr = NULL;    // Set the pointer to NULL to prevent dangling pointer issues
```

**Analogy:** Imagine renting a storage unit. You pay for it and use it. When you're done with your stuff, you have to tell the storage company you're leaving so they can clean it and rent it to someone else. If you just walk away without telling them, they might think you're still renting it (memory leak), or worse, if they reassign that unit to someone else and you later try to access it, you'll be in a mess! `free()` is like telling the storage company you're done.

**When is this Exam-Oriented?**
Understanding *when* and *how* to use these functions is fundamental. Expect questions on:
*   The purpose of each function (`malloc`, `calloc`, `realloc`, `free`).
*   The syntax and parameters of each function.
*   The meaning of the `void*` return type and the need for casting.
*   The importance of the `NULL` check after allocation.
*   How to calculate the correct number of bytes for arrays (`n * sizeof(type)`).
*   The danger of memory leaks and how `free()` prevents them.
*   The risks of double frees and accessing freed memory.
*   The "temporary pointer" pattern for `realloc()`.

### Connecting to Course Outcomes

Let's reiterate how this topic directly supports our course objectives:

*   **CO4: Develop C programs using pointers for dynamic data handling.** This entire module is dedicated to this. By mastering `malloc`, `calloc`, `realloc`, and `free`, you gain the ability to manage memory precisely when needed, which is essential for complex data structures and efficient memory usage. You're moving beyond fixed-size arrays into truly flexible data handling.

### Common Data Structures Using Dynamic Memory Allocation

You'll find dynamic memory allocation is the backbone of many advanced data structures. Just to give you a taste:

*   **Linked Lists:** Each "node" in a linked list is typically a `struct` allocated dynamically using `malloc` or `calloc`. Each node contains data and a pointer to the next node. This allows lists to grow and shrink easily.
*   **Trees (Binary Trees, etc.):** Similar to linked lists, each node in a tree is usually dynamically allocated. Pointers within the node (`left`, `right`, `parent`) connect the nodes, forming the tree structure.
*   **Dynamic Arrays/Vectors:** While C doesn't have a built-in dynamic array type like some other languages, you can implement one using `malloc`, `realloc`, and `free`. You'd start with a small array and then use `realloc` to expand it as needed when you run out of space.

### Review and Recap

Remember this:

*   **Static Allocation:** Memory fixed at compile time (e.g., `int arr[10];`).
*   **Dynamic Allocation:** Memory allocated at runtime using functions from `<stdlib.h>`.
*   **`malloc(size)`:** Allocates `size` bytes, returns `void*`. Does not initialize.
*   **`calloc(num, size)`:** Allocates memory for `num` elements of `size` bytes each, returns `void*`. Initializes to zero.
*   **`realloc(ptr, new_size)`:** Resizes block `ptr` to `new_size` bytes. Returns `void*` to the new block, or `NULL` on failure. Original block remains intact on failure.
*   **`free(ptr)`:** Releases dynamically allocated memory. **Crucial for preventing memory leaks.**
*   **Always check for `NULL` return values from allocation functions.**
*   **Use a temporary pointer with `realloc()` to prevent data loss on failure.**
*   **Always `free()` memory when done.** Set pointers to `NULL` afterward.

Mastering these concepts will significantly enhance your ability to write efficient and robust C programs. It's a fundamental skill for any serious C programmer.

---

## Sample Questions and Answers

Here are a few questions to test your understanding:

**Question 1 (Conceptual):** What is the primary difference between static memory allocation and dynamic memory allocation in C?

**Answer:** Static memory allocation occurs at compile time, where the size and lifetime of variables are fixed. Dynamic memory allocation occurs at runtime, allowing you to request memory as needed, making your programs more flexible. The size of dynamically allocated memory is not fixed before execution.

**Question 2 (Application):** You need to create a program that stores up to 100 student names, where each name can be up to 50 characters long. The number of students is not known until runtime. How would you allocate memory for this using dynamic allocation?

**Answer:** You would typically use `malloc` or `calloc` to allocate an array of character pointers, and then for each student name, allocate memory for the character array.

```c
#include <stdlib.h>
#include <stdio.h>

#define MAX_STUDENTS 100
#define MAX_NAME_LEN 50

int main() {
    char *student_names[MAX_STUDENTS]; // Array of character pointers
    int num_students = 0; // Let's say we read this from user input

    // Assume num_students is read and is <= MAX_STUDENTS

    for (int i = 0; i < num_students; i++) {
        // Allocate memory for each student's name (MAX_NAME_LEN + 1 for null terminator)
        student_names[i] = (char*)malloc((MAX_NAME_LEN + 1) * sizeof(char));

        if (student_names[i] == NULL) {
            printf("Memory allocation failed for student name %d!\n", i);
            // Handle error: maybe free previously allocated names and exit
            for (int j = 0; j < i; j++) {
                free(student_names[j]);
            }
            return 1;
        }
        // Now you can read the name into student_names[i] using scanf or strcpy
        // Example: strcpy(student_names[i], "Some Name");
    }

    // ... use the names ...

    // Free allocated memory for each name
    for (int i = 0; i < num_students; i++) {
        free(student_names[i]);
        student_names[i] = NULL; // Good practice
    }

    return 0;
}
```

**Question 3 (Analysis/Pitfall):** What is the danger of writing `ptr = realloc(ptr, new_size);` directly, without using a temporary pointer, and how can it be avoided?

**Answer:** The danger is that if `realloc` fails (returns `NULL`), the original `ptr` will be overwritten with `NULL`. This means you lose the pointer to the original, valid memory block, and you can no longer `free()` it, leading to a memory leak.

This can be avoided by using a temporary pointer:

```c
void *temp_ptr = realloc(ptr, new_size);
if (temp_ptr == NULL) {
    // Handle error - original 'ptr' is still valid
    // Don't proceed with using the reallocated memory
} else {
    ptr = temp_ptr; // Update the original pointer only if realloc succeeded
    // Proceed with using the reallocated memory pointed to by 'ptr'
}
```

**Question 4 (Identification):** Which function is typically used to initialize dynamically allocated memory to zero?

**Answer:** `calloc()`.

**Question 5 (Scenario):** You have allocated a block of memory using `malloc`. Later, you realize you have too many elements and want to reduce the size of the block. Which function should you use? If the reallocation fails, what happens to the original memory?

**Answer:** You should use the `realloc()` function to reduce the size of the block. If the reallocation fails, the original memory block pointed to by the pointer remains valid and unchanged. The `realloc()` function will return `NULL` in this case.
