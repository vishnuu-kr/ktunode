---
title: "Array of pointers"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e65"
status: "completed"
scrapedAt: "2026-05-20T16:35:40.024Z"
---
# Module 4: Pointers - Arrays of Pointers

Welcome, everyone! We're continuing our journey into the fascinating world of pointers in C. So far, we've understood what pointers are, how they work with individual variables, and even how they relate to arrays. Today, we're going to build on that foundation and explore a particularly powerful and flexible concept: **arrays of pointers**.

Think of it like this: you've been managing a collection of individual items (like numbers or characters). Now, imagine you have a whole filing cabinet where each drawer is labeled and holds a different item. An array of pointers is like having a master index for that filing cabinet. Instead of the index directly pointing to the item, it points to the *location* of the item. This might seem a bit abstract at first, but trust me, once you grasp it, you'll see how it unlocks so many possibilities in your C programming.

This topic is absolutely crucial for achieving **Course Outcome CO4: Develop C programs using pointers for dynamic data handling.** Arrays of pointers are a cornerstone of dynamic memory allocation and are fundamental to building complex data structures. They also directly support **CO2: Develop C programs using arrays, matrices, and strings** by providing more sophisticated ways to manage these data types.

## What Exactly is an Array of Pointers?

Let's break it down. We know what an array is: a collection of elements of the *same* data type, stored contiguously in memory. And we know what a pointer is: a variable that stores the memory address of another variable.

So, an **array of pointers** is simply an array where *each element is a pointer*. What kind of pointers? Well, it depends on what you want to point to! You can have an array of pointers to integers (`int *`), an array of pointers to characters (`char *`), an array of pointers to floats (`float *`), or even an array of pointers to other arrays or structures!

To put it formally, from our textbook, Byron S. Gottfried's "Programming with C," an array of pointers is an array whose elements are memory addresses. Think of it as an array of addresses. This is a fundamental concept for managing collections of data where the data itself might be of varying sizes or locations.

### Visualizing an Array of Pointers

Imagine you have a few separate sentences, each stored somewhere in memory. Instead of copying all those sentences into one big array, which can be inefficient, you can create an array of pointers, where each pointer in the array holds the starting address of one of those sentences.

Let's draw this out in our minds, like we would on a blackboard.

**Scenario:** You want to store a list of names.
**Traditional Array of Characters (Fixed Size Strings):**
```c
char names[3][20]; // An array of 3 strings, each up to 19 characters + null terminator
strcpy(names[0], "Alice");
strcpy(names[1], "Bob");
strcpy(names[2], "Charlie");
```
This works, but what if "Alice" was 5 characters and "Christopher" was 11? You'd still allocate 20 characters for "Alice," wasting space.

**Array of Pointers to Characters (Dynamic Size Strings):**
```c
char *names[3]; // An array of 3 pointers, each pointing to a char (start of a string)
names[0] = "Alice";     // names[0] stores the address of 'A' in "Alice"
names[1] = "Bob";       // names[1] stores the address of 'B' in "Bob"
names[2] = "Charlie";   // names[2] stores the address of 'C' in "Charlie"
```
Here, `names` is an array that can hold 3 `char *` (pointers to characters). Each pointer is assigned the starting address of a string literal. The strings themselves ("Alice", "Bob", "Charlie") are stored elsewhere in memory (typically in the read-only data segment). This is much more memory-efficient if your strings have varying lengths.

Notice the syntax: `type *array_name[size];`
For an array of pointers to integers: `int *ptr_array[5];`
For an array of pointers to characters: `char *char_ptr_array[10];`

This is a key distinction. The type before the `*` specifies what the pointer *points to*, and the `[]` after the pointer declaration means it's an array of such pointers.

## Declaring and Initializing Arrays of Pointers

Declaring them is straightforward once you understand the syntax. Initialization requires a bit more thought, especially when dealing with dynamically allocated memory, but for string literals, it's quite clean.

Let's consider initializing an array of pointers to integers. Suppose we want to point to several integer variables scattered across our program.

```c
int num1 = 10, num2 = 20, num3 = 30;
int *ptr_array[3]; // Declare an array of 3 pointers to integers

ptr_array[0] = &num1; // Pointer to num1
ptr_array[1] = &num2; // Pointer to num2
ptr_array[2] = &num3; // Pointer to num3
```

Now, `ptr_array[0]` holds the address of `num1`, `ptr_array[1]` holds the address of `num2`, and so on.

We can also initialize it directly during declaration, similar to regular arrays:

```c
int num1 = 10, num2 = 20, num3 = 30;
int *ptr_array[3] = {&num1, &num2, &num3}; // Direct initialization
```

This is a very common and useful pattern.

### String Array Example revisited

When dealing with arrays of strings, the direct initialization is incredibly handy:

```c
char *colors[] = {"Red", "Green", "Blue", "Yellow"};
```

In this case, the size of the array is automatically determined by the number of initializers (4 in this case). Each element `colors[i]` is a `char *` that points to the beginning of the respective string literal. This is a technique often highlighted in Kernighan and Ritchie's "The C Programming Language" for its conciseness and efficiency in handling string lists.

## Accessing Elements Through Arrays of Pointers

This is where the power really shines. Since each element of our array is a pointer, we can use it to access the data it points to.

If `ptr_array` is an array of pointers to integers, and `ptr_array[i]` holds the address of an integer, then `*ptr_array[i]` will give us the *value* stored at that address.

Let's go back to our `ptr_array` holding addresses of `num1`, `num2`, `num3`:

```c
int num1 = 10, num2 = 20, num3 = 30;
int *ptr_array[3] = {&num1, &num2, &num3};

printf("Value of num1 is: %d\n", *ptr_array[0]); // Output: 10
printf("Value of num2 is: %d\n", *ptr_array[1]); // Output: 20
printf("Value of num3 is: %d\n", *ptr_array[2]); // Output: 30
```

We can also iterate through the array of pointers to process the pointed-to values:

```c
// Continuing from above
printf("Printing all values using a loop:\n");
for (int i = 0; i < 3; i++) {
    printf("Value at index %d: %d\n", i, *ptr_array[i]);
}
```

This demonstrates how we can treat the array of pointers as a gateway to a collection of data, even if that data is not contiguous in memory. This is a direct application of **CO4**, enabling us to manage diverse data locations.

### Using Arrays of Pointers with Strings

When working with strings (which are essentially `char` arrays terminated by `\0`), an array of `char *` is very common.

```c
char *fruits[] = {"Apple", "Banana", "Cherry"};

printf("The first fruit is: %s\n", fruits[0]); // %s prints a null-terminated string
printf("The second fruit is: %s\n", fruits[1]);
printf("The third fruit is: %s\n", fruits[2]);

// Iterating through the array of strings
printf("\nList of fruits:\n");
for (int i = 0; i < 3; i++) {
    printf("%s\n", fruits[i]);
}
```

Here, `fruits[0]` is a `char *` pointing to the 'A' of "Apple". The `%s` format specifier in `printf` knows how to traverse a `char *` until it hits the null terminator (`\0`), printing the entire string.

This aligns perfectly with **CO2**, offering a more flexible way to handle lists of strings compared to fixed-size character arrays.

## Modifying Values Through Arrays of Pointers

Just as we can read values, we can also modify them using arrays of pointers. If `ptr_array[i]` points to a variable, `*ptr_array[i] = newValue;` will change the value of that variable.

Let's modify our integer example:

```c
int num1 = 10, num2 = 20, num3 = 30;
int *ptr_array[3] = {&num1, &num2, &num3};

printf("Original values:\n");
for (int i = 0; i < 3; i++) {
    printf("%d ", *ptr_array[i]);
}
printf("\n");

// Modify values
*ptr_array[0] = 100; // Changes num1
*ptr_array[1] = 200; // Changes num2

printf("Modified values:\n");
for (int i = 0; i < 3; i++) {
    printf("%d ", *ptr_array[i]);
}
printf("\n");

// Let's see the original variables directly to confirm
printf("Original num1: %d, num2: %d, num3: %d\n", num1, num2, num3); // num1 is 100, num2 is 200
```

This is a powerful way to indirectly update multiple variables through a single array structure.

### Important Note on String Literals

While we can modify the variables that pointers point to, we **cannot** modify string literals directly. For example, if you have `char *myString = "Hello";` and you try `myString[0] = 'J';`, this will lead to undefined behavior and likely a crash (segmentation fault). String literals are often stored in read-only memory.

If you need to modify strings, you should use character arrays or dynamically allocated character arrays, and have your pointers point to those.

```c
// This is BAD and will likely crash:
// char *immutableString = "Immutable";
// immutableString[0] = 'X'; // DO NOT DO THIS!

// This is GOOD if you need mutable strings:
char mutableString[] = "Mutable"; // Array on the stack
char *ptr_to_mutable = mutableString;
ptr_to_mutable[0] = 'X'; // This is perfectly fine!
printf("Modified mutable string: %s\n", ptr_to_mutable); // Output: Xutable
```

This distinction is critical and often a source of bugs for beginners. Herbert Schildt's "C: The Complete Reference" often emphasizes these subtle points regarding memory and string manipulation.

## Applications of Arrays of Pointers

Why are these structures so useful? Let's look at some common scenarios where they shine.

### 1. Array of Strings (as we've seen)

This is the most common and intuitive use. Imagine a program that needs to display different messages, menu options, or process commands. An array of `char *` is ideal.

### 2. Passing Arrays of Pointers to Functions

This is a powerful way to pass collections of data to functions, especially when the data might be dynamically sized or when you want to operate on a group of related items without copying them.

Let's say we have a function that doubles all the values in a list of integers, but these integers are not necessarily in a contiguous array.

```c
void double_values(int *ptr_array[], int size) {
    for (int i = 0; i < size; i++) {
        // Dereference the pointer in the array element, then double the value
        *ptr_array[i] *= 2;
    }
}

int main() {
    int a = 5, b = 10, c = 15;
    int *my_pointers[3] = {&a, &b, &c};

    printf("Before doubling: a=%d, b=%d, c=%d\n", a, b, c);

    double_values(my_pointers, 3); // Pass the array of pointers and its size

    printf("After doubling: a=%d, b=%d, c=%d\n", a, b, c);
    // Output:
    // Before doubling: a=5, b=10, c=15
    // After doubling: a=10, b=20, c=30

    return 0;
}
```

This function `double_values` receives an array of pointers (`int *ptr_array[]`) and its size. It can then iterate through these pointers and modify the original values of `a`, `b`, and `c`. This is a direct application of **CO3** (using functions to solve problems) and **CO4** (dynamic data handling).

### 3. Implementing a "Jagged" Array (Array of Arrays)

A traditional 2D array in C, like `int matrix[3][4]`, requires all rows to have the same number of columns. What if you need a structure where each "row" can have a different number of elements? This is often called a "jagged array."

You can achieve this using an array of pointers. Each pointer in the outer array points to the beginning of a separate, dynamically sized array (or even a fixed-size array of a different size).

```c
#include <stdio.h>
#include <stdlib.h> // For malloc and free

int main() {
    // An array of pointers to integers
    int *jagged_array[3];

    // First row: 2 integers
    jagged_array[0] = (int *)malloc(2 * sizeof(int));
    jagged_array[0][0] = 10;
    jagged_array[0][1] = 20;

    // Second row: 4 integers
    jagged_array[1] = (int *)malloc(4 * sizeof(int));
    jagged_array[1][0] = 1;
    jagged_array[1][1] = 2;
    jagged_array[1][2] = 3;
    jagged_array[1][3] = 4;

    // Third row: 1 integer
    jagged_array[2] = (int *)malloc(1 * sizeof(int));
    jagged_array[2][0] = 99;

    // Print the jagged array
    printf("Jagged Array Contents:\n");
    printf("Row 0: %d %d\n", jagged_array[0][0], jagged_array[0][1]);
    printf("Row 1: %d %d %d %d\n", jagged_array[1][0], jagged_array[1][1], jagged_array[1][2], jagged_array[1][3]);
    printf("Row 2: %d\n", jagged_array[2][0]);

    // IMPORTANT: Free the dynamically allocated memory
    free(jagged_array[0]);
    free(jagged_array[1]);
    free(jagged_array[2]);

    return 0;
}
```

This example uses `malloc` to allocate memory for each row independently. The `jagged_array` then stores the starting addresses of these allocated blocks. This is a prime example of dynamic data handling under **CO4** and demonstrates how arrays of pointers can manage non-uniform data structures, a concept also touched upon in Hanly and Koffman's "Problem Solving and Program Design in C."

### 4. Function Pointers (Advanced Application)

While not strictly within the basic "array of pointers" scope, it's worth mentioning that you can have an array of *function pointers*. This allows you to store a collection of functions and call them dynamically, perhaps based on user input or conditions. This is an advanced topic, but the underlying concept of an array holding addresses (this time, function addresses) is the same.

## Common Pitfalls and Exam Focus

When preparing for exams or writing robust code, keep these points in mind:

*   **Dereferencing Errors:** Always remember to dereference a pointer (`*ptr`) to access the value it points to, and use the address-of operator (`&variable`) to get the address. An array of pointers requires dereferencing *each pointer* within the array: `*ptr_array[i]`.
*   **String Literals vs. Character Arrays:** As discussed, you cannot modify string literals through pointers. If mutability is required, use `char array_name[]` or `malloc`.
*   **Memory Leaks:** When using `malloc` with arrays of pointers to allocate memory for the pointed-to data (like in the jagged array example), always remember to `free` that memory when it's no longer needed to prevent memory leaks. This is a core aspect of **CO4**.
*   **Initialization:** Ensure pointers are initialized (either to `NULL`, a valid address, or through direct initialization) before dereferencing them. Uninitialized pointers lead to undefined behavior.
*   **Pointer Arithmetic and Array Indexing:** Understand that `ptr_array[i]` is equivalent to `*(ptr_array + i)` and `*ptr_array[i]` is the value at the address stored at `ptr_array[i]`.
*   **Type Mismatch:** Ensure the pointer type matches the data type it points to. `int *` should point to `int`, `char *` to `char`, etc.

**Exam Questions often focus on:**

*   Declaring and initializing arrays of pointers.
*   Accessing and modifying data through arrays of pointers.
*   Writing functions that accept or return arrays of pointers.
*   Implementing dynamic data structures like jagged arrays using arrays of pointers.
*   Understanding the difference between an array of pointers and a pointer to an array. (A pointer to an array, e.g., `int (*ptr_to_array)[5]`, points to the *entire* array of 5 integers, whereas an array of pointers `int *ptr_array[5]` holds 5 *individual* pointers to integers).

Yashavant Kanetkar's "Let Us C" often provides excellent exercises for practicing these concepts, especially with string manipulations and dynamic memory.

## Summary

We've explored arrays of pointers, a powerful C construct that allows us to manage collections of addresses. This enables us to:

*   Efficiently store and manipulate lists of strings.
*   Create flexible data structures like jagged arrays.
*   Pass groups of related variables to functions for processing.
*   Achieve dynamic data handling and memory management.

Remember, an array of pointers is an array where each element holds a memory address. The type of the pointer determines what kind of data that address refers to. Mastering this topic is a significant step towards fulfilling **CO4** and building sophisticated C programs.

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
What is the fundamental difference between an array of integers and an array of pointers to integers?

**Answer:**
An array of integers, e.g., `int arr[5]`, stores the actual integer values directly. The memory occupied is `5 * sizeof(int)`. Each element `arr[i]` *is* an integer.

An array of pointers to integers, e.g., `int *ptr_arr[5]`, stores memory addresses. Each element `ptr_arr[i]` is a pointer that holds the address of an `int`. The total memory occupied by the array itself is `5 * sizeof(int *)`. The actual integer data these pointers point to can be stored anywhere in memory, potentially even in different locations or of different types if not strictly `int *`. This provides flexibility in managing data that isn't necessarily contiguous.

**Question 2 (Application - String Handling):**
Write a C program that declares an array of pointers to strings, initializes it with the names of days of the week, and then prints the day name corresponding to a number entered by the user (e.g., 1 for Sunday, 2 for Monday, etc.). Handle invalid input.

**Answer:**

```c
#include <stdio.h>

int main() {
    // Array of pointers to strings (names of days)
    char *days[] = {
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    };

    int day_number;

    printf("Enter a day number (1-7): ");
    scanf("%d", &day_number);

    // Validate the input
    if (day_number >= 1 && day_number <= 7) {
        // Access the correct string using the array of pointers
        // Remember to adjust for 0-based indexing
        printf("Day %d is: %s\n", day_number, days[day_number - 1]);
    } else {
        printf("Invalid input. Please enter a number between 1 and 7.\n");
    }

    return 0;
}
```

**Reasoning:**
This program uses an array of `char *` to store string literals for the days of the week. User input is taken, and then validated. If valid, `days[day_number - 1]` accesses the correct `char *` pointer from the array. The `%s` format specifier in `printf` then correctly prints the null-terminated string pointed to by that pointer. This demonstrates efficient string handling and array indexing.

**Question 3 (Conceptual/Problem Solving):**
Explain how an array of pointers can be used to implement a jagged array in C. Provide a small code snippet illustrating the concept of accessing elements.

**Answer:**
A jagged array is a 2D array where each row can have a different number of columns. In C, standard 2D arrays require all rows to have the same size. We can overcome this limitation using an array of pointers. The outer array will be an array of pointers, and each pointer in this array will point to a separate, dynamically allocated array (or a fixed-size array of a different dimension).

**Code Snippet:**

```c
#include <stdio.h>
#include <stdlib.h> // Required for malloc and free

int main() {
    // Declare an array of pointers to integers
    int *jagged_data[3]; // Array can hold pointers to 3 rows

    // Allocate memory for the first row (e.g., 2 elements)
    jagged_data[0] = (int *)malloc(2 * sizeof(int));
    if (jagged_data[0] == NULL) { /* Handle allocation error */ return 1; }
    jagged_data[0][0] = 10;
    jagged_data[0][1] = 20;

    // Allocate memory for the second row (e.g., 4 elements)
    jagged_data[1] = (int *)malloc(4 * sizeof(int));
    if (jagged_data[1] == NULL) { /* Handle allocation error */ free(jagged_data[0]); return 1; }
    jagged_data[1][0] = 1;
    jagged_data[1][1] = 2;
    jagged_data[1][2] = 3;
    jagged_data[1][3] = 4;

    // Accessing an element:
    // jagged_data[0] gives the pointer to the first row's data
    // jagged_data[0][0] dereferences that pointer and accesses the first element of that row
    printf("Element at row 1, column 0 (0-indexed): %d\n", jagged_data[0][0]); // Output: 10
    printf("Element at row 2, column 2 (0-indexed): %d\n", jagged_data[1][2]); // Output: 3

    // Clean up memory
    free(jagged_data[0]);
    free(jagged_data[1]);
    // Note: If jagged_data[2] was also allocated, it would need freeing too.

    return 0;
}
```

**Reasoning:**
`jagged_data` is an array where each element (`jagged_data[0]`, `jagged_data[1]`, etc.) is a pointer. We use `malloc` to allocate memory for each row independently, and then store the address returned by `malloc` into the corresponding element of `jagged_data`. Accessing an element involves using the array index to get the correct row pointer (`jagged_data[row_index]`) and then using another index to access the specific element within that row (`[column_index]`). This pattern directly addresses **CO4** by enabling dynamic data handling for non-uniform structures.
