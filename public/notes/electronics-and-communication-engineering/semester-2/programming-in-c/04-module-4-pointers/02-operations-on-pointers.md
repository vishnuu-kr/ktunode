---
title: "Operations on pointers"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da37f"
status: "completed"
scrapedAt: "2026-05-23T17:42:29.062Z"
---
# PROGRAMMING IN C: Module 4 - Pointers
## Topic: Operations on Pointers

Welcome, everyone, to Module 4, where we dive deep into one of the most powerful, and perhaps initially intimidating, features of C programming: **Pointers**. Today, we're going to unravel the mysteries of *operations on pointers*. Understanding these operations is crucial because it directly empowers us to tackle dynamic data handling, a key aspect of our Course Outcome 4 (CO4). We'll see how pointers aren't just memory addresses, but tools that allow us to manipulate data in incredibly flexible ways.

Think of memory like a vast city, and each house in this city has a unique address. A regular variable is like living in a house – you know its contents (the value of the variable), but you might not always know its precise street address. A **pointer**, on the other hand, is like a **notebook where you jot down the address of a house**. This notebook itself occupies a space in memory, and what it *holds* is an address.

### What is a Pointer? A Quick Recap

Before we start operating on them, let's quickly solidify what pointers are.

*   **Definition:** A pointer is a variable that stores the **memory address of another variable**.
*   **Declaration:** We declare a pointer using the asterisk (`*`) symbol. For example, `int *ptr;` declares `ptr` as a pointer that can hold the address of an integer variable.

### The Core Operations: What Can We Do with Pointers?

The power of pointers lies in the operations we can perform on them. These operations allow us to navigate memory, access and modify data indirectly, and manage dynamic memory allocation. Let's explore them one by one.

#### 1. The Address-Of Operator (`&`)

This is our fundamental tool for getting started. The `&` operator, when placed before a variable name, gives you the **memory address of that variable**. It's like asking, "Where is this variable located in memory?"

**Analogy:** Imagine you have a friend, Alice, who lives in a house. You know Alice (the variable), but to send her a letter, you need her house number and street name (her memory address). The `&` operator is like looking up Alice's address in the phone book or asking someone for it.

**Example:**

```c
int age = 30;
int *ptr_age; // Declare a pointer to an integer

ptr_age = &age; // Store the address of 'age' in 'ptr_age'

printf("The value of age is: %d\n", age);
printf("The address of age is: %p\n", &age); // Using %p for addresses
printf("The value stored in ptr_age is: %p\n", ptr_age); // ptr_age holds the address of age
```

**Why is this important?** This is the very first step to using pointers effectively. We need to know *where* the data is before we can point to it. This directly relates to CO4, as it’s the foundation for dynamic data handling. You're learning to manage *where* data resides, not just *what* the data is.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


#### 2. The Dereference Operator (`*`)

This is the counterpart to the address-of operator. The `*` operator, when placed before a pointer variable, is called the **dereference operator** or **indirection operator**. It lets you access the **value stored at the memory address** that the pointer is holding. It's like saying, "Go to the address stored in this notebook, and tell me what's inside that house."

**Analogy:** Continuing our Alice analogy, `ptr_age` is your notebook with Alice's address. If you want to know Alice's age (the value), you'd go to that address and find out. The dereference operator `*ptr_age` is you actually *visiting* the house at the address stored in `ptr_age` and retrieving its contents.

**Example (continuing from above):**

```c
// Assuming ptr_age already holds the address of age:
printf("The value pointed to by ptr_age is: %d\n", *ptr_age);
```

Here, `*ptr_age` evaluates to the value of `age` (which is 30).

**Key Concept:** When a pointer is declared, `*` is part of its *type*. When used with a pointer variable, `*` is the *operator* to access the value. This distinction is subtle but vital. Herbert Schildt's "C: The Complete Reference" emphasizes this: the `*` operator is what gives pointers their "power to indirectly access data."

**Modifying Values via Pointers:** The dereference operator is not just for reading; you can also *write* to the memory location.

```c
*ptr_age = 35; // This changes the value at the address stored in ptr_age
printf("The new value of age is: %d\n", age); // Output will be 35
```

This is a core aspect of CO4 – manipulating data dynamically. You're not directly changing `age`; you're changing the value *at the address* that `ptr_age` points to, and because `ptr_age` points to `age`, `age` itself is updated. This indirect modification is powerful for functions that need to change the values of variables passed to them (think pass-by-reference, which we'll see later with functions).

**Common Pitfall:** Dereferencing a null pointer (a pointer that doesn't point to any valid memory location) or an uninitialized pointer can lead to a **segmentation fault** or **undefined behavior**. This is like trying to visit an address that doesn't exist or isn't assigned to a house – your program crashes. Always ensure your pointers are pointing to valid memory.

#### 3. Pointer Arithmetic

This is where pointers become truly dynamic and useful for things like arrays and dynamic memory. Pointer arithmetic involves performing arithmetic operations (addition, subtraction) on pointers. However, it's not like regular integer arithmetic. It's **scaled by the size of the data type the pointer points to**.

**The Rule:** When you add `n` to a pointer `ptr` of type `T*`, the address actually changes by `n * sizeof(T)`. Similarly, when you subtract `n`, the address changes by `n * sizeof(T)`. Subtracting two pointers of the same type gives the number of *elements* between them.

**Analogy:** Imagine a train with many identical carriages. Each carriage is the same size. If you're standing at the front of the train (pointer to the first carriage) and you want to move forward by 3 carriages, you don't just move 3 steps. You move forward by the length of 3 carriages. The `sizeof(T)` is the length of one carriage.

**Example: Incrementing a Pointer**

```c
int numbers[] = {10, 20, 30, 40, 50};
int *ptr_num;

ptr_num = numbers; // 'numbers' itself decays to a pointer to its first element, equivalent to &numbers[0]

printf("Value at ptr_num: %d\n", *ptr_num); // Output: 10

ptr_num++; // Move ptr_num to point to the next integer
printf("Value after increment: %d\n", *ptr_num); // Output: 20 (because it moved by sizeof(int))

ptr_num = ptr_num + 2; // Move ptr_num two elements forward from its current position
printf("Value after adding 2: %d\n", *ptr_num); // Output: 40 (points to numbers[3])
```

**How this relates to Arrays:** Kernighan and Ritchie’s "The C Programming Language" beautifully illustrates how array indexing is fundamentally implemented using pointer arithmetic. `arr[i]` is equivalent to `*(arr + i)`. This equivalence is a cornerstone of C programming and is directly leveraged in CO2 (arrays, matrices, strings) and CO4 (dynamic data handling). When you access elements of an array using an index, the compiler is performing pointer arithmetic behind the scenes!

**Example: Pointer Arithmetic with Subtraction**

```c
int numbers[] = {10, 20, 30, 40, 50};
int *ptr1 = &numbers[1]; // Points to 20
int *ptr2 = &numbers[3]; // Points to 40

// Calculate the number of elements between ptr1 and ptr2
// ptr2 - ptr1 will give the difference in the number of 'int' elements
ptrdiff_t diff = ptr2 - ptr1; // ptrdiff_t is a type to hold pointer differences

printf("Difference in elements: %td\n", diff); // Output: 2 (because ptr2 is 2 elements ahead of ptr1)
```

**Important Notes on Pointer Arithmetic:**

*   You can only perform arithmetic on pointers that point to elements of the **same array** or one element past the end of the array. Performing arithmetic on pointers that don't belong to the same array leads to undefined behavior.
*   You can add or subtract an integer to a pointer.
*   You can subtract one pointer from another (of the same type) to get the number of elements between them.
*   You **cannot** add two pointers. What would that even mean?
*   You **cannot** multiply or divide pointers.

This concept is crucial for efficient traversal of arrays and other data structures, especially when working with dynamic memory.

#### 4. Pointer Comparison

Pointers can also be compared using relational operators (`==`, `!=`, `<`, `<=`, `>`, `>=`). This comparison is meaningful when the pointers point to elements within the **same array**.

**Analogy:** Imagine two people on a specific staircase. You can ask if they are on the same step (`==`), or if one is on a higher step than the other (`>`). This comparison only makes sense if they are on the same staircase.

**Example:**

```c
int numbers[] = {10, 20, 30, 40, 50};
int *p1 = &numbers[0]; // Points to 10
int *p2 = &numbers[2]; // Points to 30
int *p3 = &numbers[0]; // Points to 10

if (p1 == p2) {
    printf("p1 and p2 point to the same location.\n");
} else {
    printf("p1 and p2 point to different locations.\n"); // This will be printed
}

if (p1 == p3) {
    printf("p1 and p3 point to the same location.\n"); // This will be printed
} else {
    printf("p1 and p3 point to different locations.\n");
}

if (p1 < p2) {
    printf("p1 points to an address earlier in memory than p2.\n"); // This will be printed
}
```

**Where is this used?** This is useful for loop conditions, for example, to iterate through an array until a pointer reaches a specific element or goes past the end.

#### 5. Pointers and Functions

This is a significant application area for pointer operations, directly impacting CO3 (functions) and CO4 (dynamic data handling).

**a) Passing Pointers to Functions (Call by Reference)**

In C, when you pass a variable to a function, by default, it's **call by value**. This means the function receives a *copy* of the variable. If the function modifies its parameter, the original variable outside the function remains unchanged.

However, if you pass a *pointer* to a variable, the function receives a *copy of the address*. By dereferencing this pointer inside the function, you can access and modify the *original* variable. This is called **call by reference**.

**Analogy:** You have a valuable artifact at your home.
*   **Call by Value:** You make a perfect replica of the artifact and give it to a friend. Your friend can do whatever they want to the replica, but your original artifact is safe.
*   **Call by Reference:** You give your friend the *address* of your house. Your friend goes to your house and, if authorized, can clean, modify, or even break your original artifact.

**Example: A Swap Function**

```c
// Function to swap two integers using pointers
void swap(int *a, int *b) {
    int temp;
    temp = *a;  // Dereference a to get its value
    *a = *b;    // Dereference b, get its value, and store it in the memory location pointed to by a
    *b = temp;  // Dereference b, and store the temp value in the memory location pointed to by b
}

int main() {
    int x = 10, y = 20;
    printf("Before swap: x = %d, y = %d\n", x, y);

    // Pass the addresses of x and y to the swap function
    swap(&x, &y);

    printf("After swap: x = %d, y = %d\n", x, y); // Output: After swap: x = 20, y = 10
    return 0;
}
```

**Why is this crucial?** It allows functions to modify the actual variables passed to them, enabling more sophisticated programming. Without call by reference, many algorithms and data structure manipulations would be significantly more cumbersome. This is a direct manifestation of CO4, as it’s how you’ll manipulate data in place, a key aspect of dynamic data handling.

**b) Returning Pointers from Functions**

Functions can also return pointers. However, this is an area where you must be extremely careful!

**The Danger:** If a function returns a pointer to a **local variable** (a variable declared inside the function), that pointer will become a **dangling pointer** after the function returns. This is because local variables are allocated on the stack, and that memory is deallocated once the function finishes execution.

**Analogy:** A function is like a temporary workshop. If the workshop creates a tool (a local variable) and gives you its blueprint (a pointer to it), but the workshop is then demolished, the blueprint is useless because the tool no longer exists.

**Correct Way:** You should only return pointers to:
*   **Dynamically allocated memory** (using `malloc`, `calloc`). This memory exists on the heap and persists until explicitly freed.
*   **Global variables**.
*   **Static local variables**.

**Example (Illustrating the Danger - DO NOT DO THIS IN REAL CODE):**

```c
// DANGEROUS EXAMPLE: Returns a pointer to a local variable
int *create_and_return_local_pointer() {
    int local_val = 100;
    return &local_val; // BAD PRACTICE! local_val will cease to exist after the function returns
}

int main() {
    int *ptr = create_and_return_local_pointer();
    // ptr now points to memory that is no longer valid!
    // printf("Value: %d\n", *ptr); // This will likely cause a crash or show garbage
    return 0;
}
```

**Example (Correct Way: Using `malloc`)**

```c
#include <stdlib.h> // For malloc and free

// Function that returns a pointer to dynamically allocated memory
int *create_and_return_dynamic_pointer() {
    int *dynamic_val = (int *)malloc(sizeof(int)); // Allocate memory on the heap
    if (dynamic_val == NULL) { // Always check if malloc was successful
        printf("Memory allocation failed!\n");
        return NULL;
    }
    *dynamic_val = 100; // Store a value in the allocated memory
    return dynamic_val; // Return the pointer to the heap memory
}

int main() {
    int *ptr = create_and_return_dynamic_pointer();

    if (ptr != NULL) {
        printf("Value: %d\n", *ptr); // Output: Value: 100
        free(ptr); // Release the dynamically allocated memory
        ptr = NULL; // Good practice to set pointer to NULL after freeing
    }
    return 0;
}
```
This directly ties into CO4, showing how to manage dynamic memory allocation and deallocation, a core responsibility when working with pointers for dynamic data.

#### 6. Pointers to Arrays

A pointer can be made to point to an entire array. However, the behavior of incrementing such a pointer is special.

*   If `p` is a pointer to the first element of an array of type `T` (i.e., `T *p = arr;`), then `p++` moves it to the *next element*.
*   If `p` is a pointer to an array of `N` elements of type `T` (i.e., `int (*p)[N] = &arr;`), then `p++` moves it to the *next array*, advancing by `N * sizeof(T)` bytes.

**Example:**

```c
int arr[5] = {10, 20, 30, 40, 50};
int (*ptr_to_array)[5]; // Declare a pointer to an array of 5 integers

ptr_to_array = &arr; // ptr_to_array now points to the entire array 'arr'

// To access elements:
printf("First element: %d\n", *(*ptr_to_array));      // Output: 10
// Or, equivalently and more commonly:
printf("Second element: %d\n", *(*ptr_to_array + 1)); // Output: 20
// Or, using array notation on the dereferenced pointer:
printf("Third element: %d\n", (*ptr_to_array)[2]);    // Output: 30

// Now, if we had another array of 5 integers, say 'arr2'
// ptr_to_array++; // This would move ptr_to_array to point to arr2
```

This is less commonly used for basic operations but becomes relevant when dealing with multi-dimensional arrays or when passing arrays to functions in a more structured way.

#### 7. Pointers to Pointers

Just as a pointer stores the address of a variable, a pointer to a pointer stores the address of another pointer.

**Analogy:** Imagine your first notebook has Alice's address. Now, imagine a second notebook where you've written down the address of your *first notebook*. That's a pointer to a pointer.

**Declaration:** `int **ptr_to_ptr;`

**Example:**

```c
int num = 10;
int *ptr_num = &num;       // ptr_num stores the address of num
int **ptr_to_ptr = &ptr_num; // ptr_to_ptr stores the address of ptr_num

printf("Value of num: %d\n", num);                 // Output: 10
printf("Address of num: %p\n", &num);
printf("Value of ptr_num: %p\n", ptr_num);         // Address of num
printf("Address of ptr_num: %p\n", &ptr_num);
printf("Value of ptr_to_ptr: %p\n", ptr_to_ptr);     // Address of ptr_num

// Accessing num via ptr_to_ptr
printf("Value via **ptr_to_ptr: %d\n", **ptr_to_ptr); // Output: 10
```

**Use Cases:** Pointers to pointers are essential for:
*   Modifying pointers themselves within functions. If you want a function to change *which variable* a pointer points to, you must pass a pointer to that pointer (call by reference for pointers).
*   Working with dynamic arrays of pointers, commonly used for implementing structures like dynamic 2D arrays or string arrays.

**Example: Modifying a pointer passed to a function**

```c
void change_pointer(int **p, int val) {
    // Allocate new memory for the pointer to point to
    *p = (int *)malloc(sizeof(int));
    if (*p == NULL) {
        printf("Memory allocation failed in change_pointer!\n");
        return;
    }
    **p = val; // Dereference twice to assign value to the newly allocated memory
}

int main() {
    int *my_ptr = NULL; // Initially points to nothing
    printf("my_ptr before: %p\n", my_ptr);

    change_pointer(&my_ptr, 50); // Pass the address of my_ptr

    if (my_ptr != NULL) {
        printf("my_ptr after: %p\n", my_ptr); // Will show a valid address
        printf("Value via my_ptr: %d\n", *my_ptr); // Output: 50
        free(my_ptr); // Free the allocated memory
        my_ptr = NULL;
    }
    return 0;
}
```
This is a powerful demonstration of how pointer operations, especially when combined with call-by-reference for pointers, allows for sophisticated memory management and data manipulation, a core aspect of CO4.

#### 8. `NULL` Pointers

A `NULL` pointer is a pointer that does not point to any valid memory location. It's a special value, often defined as `(void *)0`.

*   **Purpose:** It's used to indicate that a pointer is not currently referencing anything. This is crucial for safety, especially when dealing with pointers that might be assigned dynamically or might not always have a valid target.
*   **Safety Check:** Always check if a pointer is `NULL` before dereferencing it, especially if it's a pointer returned from `malloc` or a function that might fail.

**Example:**

```c
int *safe_ptr = NULL;

if (safe_ptr == NULL) {
    printf("safe_ptr is NULL, cannot dereference.\n");
}
// ... later, if memory is allocated ...
safe_ptr = (int *)malloc(sizeof(int));
if (safe_ptr != NULL) {
    *safe_ptr = 10;
    printf("Value: %d\n", *safe_ptr);
    free(safe_ptr);
    safe_ptr = NULL; // Good practice
}
```

### Connecting Operations to Course Outcomes

Let's quickly recap how these operations directly support our course objectives:

*   **CO1 (Basic Constructs):** While not directly about loops or `if`, understanding how `&` and `*` work is fundamental to building any C program that manipulates data beyond simple variables.
*   **CO2 (Arrays, Matrices, Strings):** Pointer arithmetic is the very engine that drives array and string manipulation in C. `arr[i]` is `*(arr + i)`, `strings` are `char` arrays, and pointer operations are key to processing them efficiently.
*   **CO3 (Functions):** Passing pointers to functions (call-by-reference) is a vital technique for enabling functions to modify external data, essential for modular programming.
*   **CO4 (Dynamic Data Handling):** This is where pointers truly shine. All operations – address-of, dereferencing, arithmetic, and pointers-to-pointers – are the tools we use to manage memory allocated on the heap using `malloc`, `calloc`, and `realloc`, and to build complex data structures like linked lists and trees.
*   **CO5 (Files):** While not directly performing operations *on file pointers* in this topic, the concepts of pointers are implicitly used when functions like `fopen` return file pointers, and you manipulate data within files using file stream pointers.

### Summary: Remember This!

*   **`&` (Address-of):** Gets the memory address of a variable.
*   **`*` (Dereference):** Accesses the value at a memory address held by a pointer.
*   **Pointer Arithmetic:** Addition/subtraction of an integer `n` to a pointer `ptr` moves the pointer by `n * sizeof(type_pointed_to)`. Essential for array traversal.
*   **Call by Reference:** Pass pointers (`&variable`) to functions to allow them to modify original variables.
*   **Dangling Pointers:** Avoid returning pointers to local variables. Use dynamic memory allocation (`malloc`) for data that needs to persist beyond function scope.
*   **`NULL` Pointers:** Use and check for `NULL` to prevent errors.

Mastering these operations is your gateway to truly understanding memory management and building efficient, dynamic C programs. Keep practicing, and don't be afraid to experiment!

---

## Sample Questions with Answers

Here are a few questions to test your understanding of operations on pointers, covering both conceptual recall and application.

**1. Conceptual Question:**
What is the difference between `*ptr` and `ptr` when `ptr` is an `int *`?

**Answer:**
*   `ptr` itself is a variable that holds a **memory address**. Its type is `int *`.
*   `*ptr` is an **expression** that uses the dereference operator. It accesses the **value** stored at the memory address that `ptr` is holding. The type of `*ptr` is `int` (the type of data being pointed to).

**Reasoning:** This question probes the fundamental distinction between a pointer (the address) and the data it points to (the value). Understanding this is key to using both operators correctly.

**2. Application Question:**
Write a C program that takes two integers as input and prints the larger of the two using a function that accepts pointers to these integers.

**Answer:**

```c
#include <stdio.h>

// Function to find the larger of two integers using pointers
void find_larger(int *num1, int *num2, int *larger) {
    if (*num1 > *num2) {
        *larger = *num1; // Store the value of num1 (via dereferencing) into the location pointed to by larger
    } else {
        *larger = *num2; // Store the value of num2 (via dereferencing) into the location pointed to by larger
    }
}

int main() {
    int a, b, max_val;

    printf("Enter the first integer: ");
    scanf("%d", &a);

    printf("Enter the second integer: ");
    scanf("%d", &b);

    // Pass the addresses of a, b, and max_val to the function
    find_larger(&a, &b, &max_val);

    printf("The larger of %d and %d is: %d\n", a, b, max_val);

    return 0;
}
```

**Reasoning:** This program demonstrates the application of passing pointers to a function (call-by-reference) and using the dereference operator within the function to modify a variable passed by reference. It directly addresses CO3 and CO4 by showing how functions can manipulate external data using pointers.

**3. Pitfall Question:**
Consider the following code snippet. What is the likely output, and why?

```c
#include <stdio.h>
#include <stdlib.h>

int *get_number() {
    int x = 10;
    return &x;
}

int main() {
    int *ptr;
    ptr = get_number();
    printf("Value is: %d\n", *ptr);
    return 0;
}
```

**Answer:**
The program will likely **crash** or print **garbage/incorrect values**.

**Reasoning:** The function `get_number()` declares `x` as a local variable. Local variables are allocated on the stack, and their memory is deallocated as soon as the function returns. When `get_number()` returns `&x`, it's returning an address that is no longer valid. The pointer `ptr` in `main` then points to this deallocated memory space (a dangling pointer). Attempting to dereference `ptr` to read `*ptr` is accessing invalid memory, leading to undefined behavior (often a segmentation fault). This illustrates a critical pitfall in returning pointers to local variables, directly related to dynamic data handling safety in CO4.

**4. Pointer Arithmetic Question:**
An array `int arr[10];` is declared. If `int *p = arr;`, what will be the value of `*(p + 5)`? Explain using pointer arithmetic.

**Answer:**
The value of `*(p + 5)` will be the 6th element of the array `arr` (i.e., `arr[5]`).

**Explanation:**
When `p = arr;`, `p` points to the first element of the array, `arr[0]`.
Pointer arithmetic dictates that `p + 5` will advance the pointer `p` by `5 * sizeof(int)` bytes. This means `p + 5` will point to the memory location of the `(0 + 5)`-th element, which is `arr[5]`.
The dereference operator `*` then accesses the value stored at this location. Therefore, `*(p + 5)` is equivalent to `arr[5]`.

**Reasoning:** This question tests the understanding of how pointer arithmetic is scaled by the size of the data type. It's a core concept for array manipulation and directly relates to CO2 and CO4.