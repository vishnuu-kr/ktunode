---
title: "Pointer to pointer"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e64"
status: "completed"
scrapedAt: "2026-05-20T16:35:39.296Z"
---
All right, class! Welcome back to Module 4, where we've been diving deep into the fascinating world of pointers. We've seen how pointers are like magical addresses that help us directly access and manipulate data in our computer's memory. Today, we're going to take it a step further, and perhaps a bit mind-bendingly, into the realm of **"Pointer to Pointer."**

Now, you might be thinking, "Another layer of indirection? Why would we ever need *that*?" Well, as we'll discover, pointer-to-pointer is an incredibly powerful tool that unlocks some very advanced programming techniques, particularly when dealing with dynamic memory allocation, passing arrays to functions, and managing complex data structures. It's a concept that, once you grasp it, will significantly boost your understanding of how C truly works under the hood and directly relates to our **Course Outcome 4 (CO4): Develop C programs using pointers for dynamic data handling.**

### What is a Pointer to Pointer?

Let's start with a quick recap. A standard pointer, say `int *ptr;`, is a variable that stores the *memory address* of another variable, like an integer.

```c
int num = 10;
int *ptr = &num; // ptr now holds the address of num
```

So, `ptr` "points to" `num`. Simple enough, right?

Now, imagine we want to store the *address of the pointer itself*. That's precisely what a **pointer to pointer** is! It's a variable that stores the memory address of *another pointer*.

Think of it like this:

*   **Variable:** A house.
*   **Pointer:** The address written on a piece of paper that tells you where that house is.
*   **Pointer to Pointer:** Another piece of paper, this time holding the address of the *first piece of paper*.

So, if `ptr` holds the address of `num`, then a **pointer to pointer**, let's call it `ptr_to_ptr`, will hold the address of `ptr`.

### Declaring and Using a Pointer to Pointer

The syntax for declaring a pointer to pointer is straightforward, though it might look a little intimidating at first. You simply add another asterisk `*` before the variable name.

For an integer pointer, a pointer to that pointer would be declared as:

```c
int **ptr_to_ptr;
```

Here, `ptr_to_ptr` is a pointer to an `int *` (a pointer to an integer).

Let's walk through an example, building on our previous `num` and `ptr`:

```c
#include <stdio.h>

int main() {
    int num = 10;       // A regular integer variable
    int *ptr = &num;    // ptr is a pointer to an integer, storing the address of num

    // Now, let's declare a pointer to a pointer
    // It needs to store the address of ptr, which is an int*
    int **ptr_to_ptr;

    // Assign the address of ptr to ptr_to_ptr
    ptr_to_ptr = &ptr;

    // Let's see what we have:
    printf("Value of num: %d\n", num);               // Output: 10
    printf("Address of num: %p\n", &num);            // Output: address of num
    printf("Value of ptr: %p\n", ptr);               // Output: address of num (same as above)
    printf("Address of ptr: %p\n", &ptr);            // Output: address of ptr
    printf("Value of ptr_to_ptr: %p\n", ptr_to_ptr); // Output: address of ptr (same as above)

    // Now, let's DE-reference these pointers to get back to the original value!
    // This is where the magic happens.

    // To get num using ptr:
    printf("Value of num via ptr: %d\n", *ptr);       // Dereferencing ptr once gives us the value pointed to by ptr (which is num)

    // To get num using ptr_to_ptr:
    // ptr_to_ptr points to ptr.
    // So, *ptr_to_ptr gives us the value of ptr (which is the address of num).
    // Then, *( *ptr_to_ptr ) gives us the value pointed to by (the address of num), which is num.
    printf("Value of num via ptr_to_ptr: %d\n", **ptr_to_ptr); // Dereferencing twice!

    // We can also change the value of num using ptr_to_ptr
    **ptr_to_ptr = 25;
    printf("Value of num after changing via ptr_to_ptr: %d\n", num); // Output: 25

    return 0;
}
```

**Key takeaway here:** To access the original value through a pointer-to-pointer, you need to dereference it *twice*. The first dereference (`*ptr_to_ptr`) gives you the pointer it points to, and the second dereference (`*(*ptr_to_ptr)`) gives you the actual value. This is a fundamental aspect, and understanding this is crucial for your exams. Many students get confused here.

### Why Use Pointer to Pointer? Real-World Scenarios and Connections to CO4

Now, let's get to the "why." Why go through this complexity? This is where we directly tie into **CO4: Develop C programs using pointers for dynamic data handling.**

#### 1. Modifying a Pointer Passed to a Function

This is perhaps the most common and important use case. Imagine you have a function that's supposed to change *which variable a pointer points to*.

Let's say you want a function to point a pointer to a *newly allocated memory block* or to redirect it to a different variable altogether. If you pass a pointer directly to a function, the function receives a *copy* of that pointer. Changing the copy inside the function won't affect the original pointer outside.

Consider this:

```c
#include <stdio.h>
#include <stdlib.h> // For malloc

// Function that TRIES to change where ptr points
void tryToChangePointer(int *p) {
    int another_var = 100;
    p = &another_var; // This changes the LOCAL copy of p, not the original
    printf("Inside function: p now points to address %p\n", p);
}

int main() {
    int var1 = 10;
    int var2 = 20;
    int *my_ptr = &var1; // my_ptr initially points to var1

    printf("Before function: my_ptr points to address %p (value %d)\n", my_ptr, *my_ptr);

    tryToChangePointer(my_ptr); // Passing the pointer

    printf("After function: my_ptr still points to address %p (value %d)\n", my_ptr, *my_ptr); // It still points to var1!

    return 0;
}
```

The output clearly shows that `my_ptr` in `main` did not change. The `tryToChangePointer` function only modified its local parameter `p`.

**This is where pointer-to-pointer comes to the rescue!** If we pass the *address of the pointer* (`&my_ptr`) to the function, the function can then modify the original pointer.

```c
#include <stdio.h>
#include <stdlib.h> // For malloc

// Function that ACTUALLY changes where ptr points
// It receives the ADDRESS of the pointer (a pointer to an int pointer)
void changePointer(int **pp) {
    int another_var = 100;
    // pp holds the address of my_ptr.
    // *pp dereferences pp to give us my_ptr.
    // So, *pp = &another_var means: my_ptr = &another_var
    *pp = &another_var;
    printf("Inside function: *pp now points to address %p\n", *pp);
}

int main() {
    int var1 = 10;
    int var2 = 20;
    int *my_ptr = &var1; // my_ptr initially points to var1

    printf("Before function: my_ptr points to address %p (value %d)\n", my_ptr, *my_ptr);

    // Pass the ADDRESS of my_ptr
    changePointer(&my_ptr);

    printf("After function: my_ptr now points to address %p (value %d)\n", my_ptr, *my_ptr); // It now points to another_var!

    return 0;
}
```

See the difference? By passing `&my_ptr` and using `*pp` inside the function, we are directly manipulating `my_ptr` itself. This is essential for functions that need to allocate memory dynamically using `malloc` and return the pointer to that allocated memory. The function signature would look something like `void allocateMemory(int **dataPtr, int size)`.

This directly relates to **CO4** because you are handling memory dynamically. You might allocate an array dynamically, and a function needs to update the pointer to this array after allocation.

#### 2. Dynamic Memory Allocation with `malloc` and `calloc`

When you use `malloc` or `calloc` to allocate memory, they return a `void *` pointer. You then cast this `void *` to the desired pointer type. If you're allocating memory for an array of pointers (like a 2D array represented by an array of pointers), or if you're managing a complex data structure where a pointer needs to be updated after allocation, you'll often use pointer-to-pointer.

For example, allocating a dynamic array of integers:

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *dynamic_array;
    int size = 5;

    // Allocate memory for 5 integers. malloc returns void*
    // We need to cast it to int*
    dynamic_array = (int *)malloc(size * sizeof(int));

    if (dynamic_array == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // Indicate error
    }

    // Now dynamic_array points to the beginning of the allocated block.
    // If a function needed to allocate this for us and update our 'dynamic_array' variable,
    // we'd pass &dynamic_array to it.

    printf("Successfully allocated memory for %d integers.\n", size);

    // Example of using a function to allocate and initialize
    int *my_dynamic_array_ptr = NULL; // Initially points to nothing
    allocateAndInitialize(&my_dynamic_array_ptr, 10, 77); // Pass the address of the pointer

    if (my_dynamic_array_ptr != NULL) {
        printf("Array allocated by function: ");
        for (int i = 0; i < 10; i++) {
            printf("%d ", my_dynamic_array_ptr[i]);
        }
        printf("\n");
        free(my_dynamic_array_ptr); // Don't forget to free!
    }

    free(dynamic_array); // Free the first allocation

    return 0;
}

// Function to allocate and initialize an array
void allocateAndInitialize(int **arr_ptr, int size, int value) {
    *arr_ptr = (int *)malloc(size * sizeof(int)); // Allocate memory and assign to the pointer pointed to by arr_ptr
    if (*arr_ptr == NULL) {
        printf("Memory allocation failed inside function!\n");
        return;
    }
    for (int i = 0; i < size; i++) {
        (*arr_ptr)[i] = value; // Initialize elements
    }
    printf("Memory allocated and initialized successfully inside function.\n");
}
```

Here, `allocateAndInitialize` takes `int **arr_ptr`. Inside, `*arr_ptr = malloc(...)` means "take the pointer that `arr_ptr` points to (which is `my_dynamic_array_ptr` in `main`) and make it point to the newly allocated memory." This is a classic **CO4** application.

#### 3. Implementing Dynamic 2D Arrays (Arrays of Pointers)

This is a slightly more advanced topic but very relevant. A true 2D array in C is contiguous in memory. However, you can simulate a 2D array using an array of pointers, where each pointer in the array points to a separate row (which itself might be a dynamically allocated array).

To manage this structure, especially when passing it to functions or allocating it dynamically, pointer-to-pointer becomes essential.

Consider creating a dynamic 2D array where the number of rows and columns can be determined at runtime.

```c
#include <stdio.h>
#include <stdlib.h>

// Function to create a dynamic 2D array
// It needs to modify the array_of_pointers itself.
int **create2DArray(int rows, int cols) {
    // We need an array of pointers. Each pointer will point to a row (an array of ints).
    // So, we need an int**, which is a pointer to an int*
    int **array_of_pointers;

    // Allocate memory for the array of row pointers
    // This array_of_pointers will hold 'rows' number of int* pointers
    array_of_pointers = (int **)malloc(rows * sizeof(int *));
    if (array_of_pointers == NULL) {
        printf("Failed to allocate memory for row pointers.\n");
        return NULL;
    }

    // Now, for each row pointer, allocate memory for the columns
    for (int i = 0; i < rows; i++) {
        array_of_pointers[i] = (int *)malloc(cols * sizeof(int));
        if (array_of_pointers[i] == NULL) {
            printf("Failed to allocate memory for column %d.\n", i);
            // Important: If allocation fails for a column, we need to clean up
            // previously allocated memory to avoid leaks.
            for (int j = 0; j < i; j++) {
                free(array_of_pointers[j]);
            }
            free(array_of_pointers);
            return NULL;
        }
        // Initialize the row (optional, but good practice)
        for (int j = 0; j < cols; j++) {
            array_of_pointers[i][j] = 0; // Or some default value
        }
    }

    return array_of_pointers; // Return the pointer to the array of pointers
}

// Function to free the dynamic 2D array
void free2DArray(int **array, int rows) {
    if (array == NULL) return;
    for (int i = 0; i < rows; i++) {
        free(array[i]); // Free each row
    }
    free(array); // Free the array of pointers
}

int main() {
    int rows = 3;
    int cols = 4;

    // Create a 2D array using pointer to pointer concept
    int **my_2d_array = create2DArray(rows, cols);

    if (my_2d_array != NULL) {
        printf("Dynamic 2D array created.\n");

        // Accessing elements: my_2d_array[row][col]
        my_2d_array[0][0] = 1;
        my_2d_array[1][2] = 5;
        my_2d_array[2][3] = 10;

        printf("Elements:\n");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                printf("%d ", my_2d_array[i][j]);
            }
            printf("\n");
        }

        // Free the memory
        free2DArray(my_2d_array, rows);
        printf("Dynamic 2D array freed.\n");
    }

    return 0;
}
```

In `create2DArray`, `int **array_of_pointers` is declared. The first `malloc` allocates memory for `rows` number of `int *` pointers. Then, in the loop, `array_of_pointers[i]` is assigned the result of `malloc` for each row. This `array_of_pointers` is what you would pass around if you needed a function to manage the 2D array's creation or deletion. This is a powerful illustration of **CO4** and how pointers build up complex data structures.

#### 4. Array of Pointers

Similarly, if you have an array where each element is itself a pointer, managing this array or passing it to functions might involve pointer-to-pointer. For example, if you have an array of strings (where each string is a `char *`), you'd have `char *arrayOfStrings[N]`. If you wanted a function to modify this entire array (e.g., sort it, or reassign pointers within it), you might pass `char **arrayOfStrings`.

This is also relevant to **CO2: Develop C programs using arrays, matrices, and strings** and **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules**, as you'll often write functions to manipulate arrays of strings.

### Analogy Check: The Library Card Catalog

Let's revisit our analogy to solidify understanding.

*   **The Book:** Your actual data (e.g., `int num = 10;`)
*   **The Shelf Number:** The address of the book (`&num`). This is what a simple pointer (`int *ptr`) holds.
*   **The Card in the Card Catalog:** A card that says "Book X is at Shelf Y." This card *is* the pointer. Its address on the shelf where the card is kept is `&ptr`.
*   **The Card Catalog Drawer:** The location where the "pointer card" is stored. The *address* of this card is what a pointer-to-pointer (`int **ptr_to_ptr`) holds.

If you have `ptr_to_ptr`, and you go to that drawer, you find the card (`ptr`). Then, you take that card and go to the shelf number written on it, and there you find the book (`num`). That's dereferencing twice!

### Common Pitfalls and Exam Focus

*   **Confusing `*` and `&`:** This is the most common error. Remember `&` gives you the address, and `*` (when used with a pointer) gives you the value at that address.
*   **Double Dereferencing:** Always remember that `**ptr_to_ptr` is needed to get the original value. A common mistake is to only use `*ptr_to_ptr`, which will give you the *address* of the original pointer, not its value.
*   **Memory Leaks:** When dealing with dynamic memory allocation using `malloc` and pointer-to-pointer, it's crucial to `free` the memory correctly. If you reallocate a pointer that was previously pointing to memory, and you don't `free` the old memory first, you'll leak memory. This is a critical aspect of **CO4**.
*   **Null Pointers:** Always check if pointers are `NULL` after `malloc` or before dereferencing, especially in functions that return pointers or modify pointers passed to them.
*   **Function Signatures:** For exam questions involving functions that modify pointers, pay close attention to whether the function expects a pointer (`int *`) or a pointer-to-pointer (`int **`).

### Quick Recall Tips

*   `int var;` -> `int *ptr = &var;` -> `int **ptr_to_ptr = &ptr;`
*   `var` is the value.
*   `&var` is the address of `var`.
*   `ptr` holds `&var`.
*   `*ptr` gives `var`.
*   `&ptr` is the address of `ptr`.
*   `ptr_to_ptr` holds `&ptr`.
*   `*ptr_to_ptr` gives `ptr`.
*   `**ptr_to_ptr` gives `var`.

### Connecting to Other Course Outcomes

*   **CO1 (Knowledge Level K2):** Understanding what a pointer to pointer *is* and how to declare it.
*   **CO2 (Knowledge Level K3):** Applying pointer-to-pointer concepts to manage arrays, especially dynamic 2D arrays or arrays of strings.
*   **CO3 (Knowledge Level K3):** Creating functions that can modify the pointers passed to them, thus managing data structures more effectively.
*   **CO4 (Knowledge Level K3):** This is the primary focus. Pointer-to-pointer is fundamental for advanced dynamic memory handling, such as allocating and managing complex data structures where pointers themselves need to be managed.
*   **CO5 (Knowledge Level K3):** While not directly about files, the techniques learned here (like passing pointers to functions to modify them) are transferable to file handling operations where file pointers might need to be updated or managed within functions.

### Summary

Pointer-to-pointer is a powerful concept that allows us to indirectly access and modify pointers themselves. This is critical for functions that need to change the target of a pointer, for dynamic memory allocation, and for building complex data structures like dynamic 2D arrays. Mastering pointer-to-pointer is a significant step in becoming a proficient C programmer and is directly tied to your ability to handle data dynamically. It's a concept that, once demystified, opens up a whole new level of programming capability!

---

## Sample Questions and Answers

**Q1. Conceptual Understanding:** What is a pointer to pointer, and how is it declared in C?

**Answer:** A pointer to pointer is a variable that stores the memory address of another pointer variable. If a pointer stores the address of a data type (e.g., `int *ptr` stores the address of an `int`), a pointer to pointer stores the address of such a pointer (e.g., `int **ptr_to_ptr` stores the address of an `int *`).

It is declared by using an additional asterisk. For example, to declare a pointer to a pointer to an integer, you would write: `int **variable_name;`.

---

**Q2. Practical Application (CO4):** Write a C function that takes a pointer to an integer pointer (`int **`) and allocates memory for an integer, assigns a value to it, and updates the original pointer.

**Answer:**

```c
#include <stdio.h>
#include <stdlib.h>

// Function to allocate and set a value for an integer pointed to by **ptr_to_int_ptr
void allocateAndSetValue(int **ptr_to_int_ptr, int value) {
    // Allocate memory for one integer
    *ptr_to_int_ptr = (int *)malloc(sizeof(int));

    // Check if allocation was successful
    if (*ptr_to_int_ptr == NULL) {
        printf("Memory allocation failed!\n");
        return; // Exit if allocation failed
    }

    // Assign the value to the newly allocated memory
    **ptr_to_int_ptr = value; // Dereference twice to access the integer
    printf("Inside function: Allocated memory at %p and set value to %d\n", *ptr_to_int_ptr, **ptr_to_int_ptr);
}

int main() {
    int *my_int_ptr = NULL; // Initialize pointer to NULL

    printf("Before function call: my_int_ptr is %p\n", (void *)my_int_ptr);

    // Call the function, passing the address of our pointer
    allocateAndSetValue(&my_int_ptr, 42);

    // Check if the pointer was updated and if the value is correct
    if (my_int_ptr != NULL) {
        printf("After function call: my_int_ptr points to %p and its value is %d\n", (void *)my_int_ptr, *my_int_ptr);
        // Clean up the allocated memory
        free(my_int_ptr);
        my_int_ptr = NULL; // Good practice to set to NULL after freeing
    }

    return 0;
}
```

**Reasoning:**
The function `allocateAndSetValue` takes `int **ptr_to_int_ptr`.
1.  `*ptr_to_int_ptr` dereferences the pointer-to-pointer, giving us access to the original `int *my_int_ptr` in `main`. We assign the result of `malloc` to `*ptr_to_int_ptr`, making `my_int_ptr` point to the new memory.
2.  `**ptr_to_int_ptr` dereferences twice: the first `*` gets `my_int_ptr`, and the second `*` accesses the integer memory `my_int_ptr` points to. This is where we store the `value`.
3.  The `main` function demonstrates calling this by passing `&my_int_ptr`, the address of the pointer itself.

---

**Q3. Debugging Scenario:** Consider the following code snippet. What is the output, and why? Identify any potential issues.

```c
#include <stdio.h>

int main() {
    int x = 5;
    int *p1 = &x;
    int **p2 = &p1;

    printf("p1: %p, *p1: %d\n", (void *)p1, *p1);
    printf("p2: %p, *p2: %p, **p2: %d\n", (void *)p2, (void *)*p2, **p2);

    *p2 = NULL; // Attempt to NULL the pointer p1

    printf("After *p2 = NULL:\n");
    printf("p1: %p, *p1: ?\n", (void *)p1); // What happens to *p1?

    return 0;
}
```

**Answer:**

**Output:**

```
p1: <address of x>, *p1: 5
p2: <address of p1>, *p2: <address of x>, **p2: 5
After *p2 = NULL:
p1: <address of p1's memory location>, *p1: ?
```

*(Note: The actual addresses will vary each time the program runs)*

**Explanation:**

*   The first `printf` block correctly shows the value of `p1` (address of `x`), `*p1` (value of `x`, which is 5).
*   The second `printf` block shows the value of `p2` (address of `p1`), `*p2` (which dereferences `p2` once, giving us the value of `p1`, i.e., the address of `x`), and `**p2` (which dereferences `p2` twice, giving us the value of `x`, which is 5).
*   The statement `*p2 = NULL;` is key. `*p2` dereferences `p2` once, meaning it accesses the pointer that `p2` points to. Since `p2` points to `p1`, `*p2` is effectively `p1`. So, this line is equivalent to `p1 = NULL;`.
*   After `p1 = NULL;`, the pointer `p1` no longer points to a valid memory location (`&x`).
*   The final `printf` will attempt to print `*p1`. Since `p1` is now `NULL`, dereferencing `NULL` is **undefined behavior**. In many systems, this will cause a segmentation fault or a crash. If it doesn't crash, it might print garbage values or an address related to `NULL`.

**Potential Issues:**

1.  **Undefined Behavior:** Dereferencing a `NULL` pointer is a critical error. The program is not guaranteed to behave predictably.
2.  **Memory Leak (Not in this specific snippet, but a related danger):** If `p1` had been allocated memory using `malloc` before being set to `NULL`, that memory would be leaked. In this case, `p1` points to `x` on the stack, so no leak occurs.

This question highlights the importance of being careful when modifying pointers via pointer-to-pointers and the consequences of dereferencing invalid pointers.

---
