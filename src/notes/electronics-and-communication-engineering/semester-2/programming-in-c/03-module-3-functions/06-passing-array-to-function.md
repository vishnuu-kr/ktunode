---
title: "Passing array to function"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da374"
status: "completed"
scrapedAt: "2026-05-23T17:42:17.419Z"
---
# PROGRAMMING IN C: Module 3: Functions - Passing Arrays to Functions

Welcome, everyone, to Module 3! We've been exploring the power of functions to break down complex problems into manageable pieces. Today, we're diving into a crucial aspect of using functions: how to pass arrays into them. This is incredibly common in C programming, so mastering it is key.

Think about it: often, you'll have a collection of data, like a list of student scores, a series of sensor readings, or a set of customer records. This collection is naturally represented by an array. Now, you’ll want to perform operations on this entire collection – maybe sort it, find the average, or search for a specific value. A function is the perfect tool for this. But how do we tell that function about our array? That’s what we’ll explore today.

This topic directly ties into several of our course outcomes:

*   **CO2: Develop C programs using arrays, matrices, and strings.** Passing arrays to functions is a fundamental technique for manipulating these data structures effectively.
*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.** By passing arrays, we make our functions more general and reusable, a core principle of modular programming. We can write a single function that works on *any* array of integers, for example, without knowing its size beforehand.

Let's get started!

## Understanding How Arrays Behave in C Functions

This is where things can get a little tricky, and it's a common stumbling block for beginners. When you pass an array to a function in C, you're not actually passing a *copy* of the entire array. Instead, you're passing the **memory address** of the **first element** of the array.

Why is this important? Because it means any changes you make to the array *inside* the function will directly affect the *original* array in the calling part of your program. This is called **pass-by-reference** for arrays. Contrast this with passing simple data types like integers or characters, which are typically **pass-by-value** (a copy is made).

Imagine you have a recipe book (your array) and you want a friend to help you bake a cake. If you give your friend a *copy* of the recipe book (pass-by-value), they can make notes or changes in their copy, and your original book remains untouched. But if you give them the *actual* book and tell them which page to start on (pass-by-reference, like with arrays), any highlighting or scribbling they do *is* on your book!

This behavior is efficient, as it avoids the overhead of copying potentially large amounts of data. Kernighan and Ritchie, in "The C Programming Language," highlight this efficiency as a key reason for this design.

## Declaring and Defining Functions that Accept Arrays

So, how do we tell a function that it's expecting an array? There are a few common ways to declare the array parameter in the function's prototype and definition.

### Method 1: Using Square Brackets `[]`

This is the most intuitive way. When you declare a function parameter as an array, you can use empty square brackets `[]` after the data type.

**Function Prototype:**

```c
void processArray(int arr[]); // Or void processArray(int[]);
```

**Function Definition:**

```c
void processArray(int arr[]) {
    // Inside this function, 'arr' refers to the first element's address
    // We can access elements like arr[0], arr[1], etc.
}
```

**What does `int arr[]` really mean here?** It's a hint to the compiler that `arr` is expected to be an array. However, internally, C treats this parameter as a **pointer to the first element** of the array. So, `void processArray(int arr[])` is essentially equivalent to `void processArray(int *arr)`. This is a crucial point!

### Method 2: Using a Pointer `*`

As we just discussed, since passing an array is equivalent to passing a pointer to its first element, you can also declare the function parameter as a pointer.

**Function Prototype:**

```c
void processArray(int *arr);
```

**Function Definition:**

```c
void processArray(int *arr) {
    // 'arr' is a pointer to the first element of the array.
    // We can access elements using pointer arithmetic:
    // arr[0] is the same as *arr
    // arr[1] is the same as *(arr + 1)
}
```

Both methods achieve the same result. The `[]` notation is often preferred for readability when you know you're working with an array, as it clearly signals the intent.

### The Missing Piece: The Array Size!

Here’s the catch: When you pass an array this way, the function *only* knows where the array starts in memory. It has no inherent knowledge of how many elements are in that array. This is a critical limitation.

**Why is this a problem?** If you try to access elements beyond the actual size of the array, you'll be reading (or writing!) into memory that doesn't belong to your array. This can lead to unpredictable behavior, crashes, or corrupted data – classic examples of **undefined behavior**.

Think back to our recipe book analogy. If you give your friend the book but don't tell them how many pages are in the recipe section, they might start reading pages for a completely different book, or even just blank pages, thinking they are part of the recipe.

**How do we solve this?** We must explicitly pass the **size** of the array as another argument to the function.

**Revised Function Declaration (using `[]` notation):**

```c
void processArray(int arr[], int size);
```

**Revised Function Definition:**

```c
void processArray(int arr[], int size) {
    // Now we know how many elements to process, from arr[0] to arr[size-1]
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]); // Safe access within bounds
    }
    printf("\n");
}
```

**Revised Function Declaration (using `*` notation):**

```c
void processArray(int *arr, int size);
```

**Revised Function Definition:**

```c
void processArray(int *arr, int size) {
    // 'arr' is the pointer to the first element, 'size' tells us how many.
    for (int i = 0; i < size; i++) {
        printf("%d ", *(arr + i)); // Accessing using pointer arithmetic
    }
    printf("\n");
}
```

**Important Note:** When you pass an array to a function, the compiler doesn't enforce the size limit. It's *your responsibility* as a programmer to ensure you don't go out of bounds, usually by passing the size and using it correctly in loops. This is a common area where bugs creep into C programs, and it's something examiners often test.

### Passing a String to a Function

Remember that strings in C are just arrays of characters, terminated by a null character `\0`. So, passing a string to a function is no different from passing any other character array.

```c
void printString(char str[]); // Equivalent to char *str
// or
void printString(char *str);
```

When you pass a string, you typically don't need to pass its size explicitly because the function can detect the null terminator `\0` to know where the string ends. This is built into many standard string manipulation functions.

## Example: Calculating the Sum of Array Elements

Let's put this into practice with a common task: calculating the sum of all elements in an array.

Suppose we have an array of daily temperatures for a week. We want a function to compute the total temperature.

```c
#include <stdio.h>

// Function to calculate the sum of array elements
// It takes the array (as a pointer to its first element) and its size.
int sumArray(int numbers[], int count) {
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += numbers[i]; // Accessing elements using array notation
        // Alternatively, using pointer arithmetic: total += *(numbers + i);
    }
    return total; // We return the calculated sum
}

int main() {
    int temperatures[] = {25, 28, 30, 29, 27, 26, 24};
    int numDays = sizeof(temperatures) / sizeof(temperatures[0]); // Calculate the number of elements

    // Call the function, passing the array and its size
    int weeklySum = sumArray(temperatures, numDays);

    printf("The weekly temperatures were: ");
    for (int i = 0; i < numDays; i++) {
        printf("%d ", temperatures[i]);
    }
    printf("\n");

    printf("The total weekly temperature is: %d degrees Celsius.\n", weeklySum);

    return 0;
}
```

**Explanation:**

1.  **`int temperatures[] = {25, 28, 30, 29, 27, 26, 24};`**: This declares and initializes our array.
2.  **`int numDays = sizeof(temperatures) / sizeof(temperatures[0]);`**: This is a standard C idiom to find the number of elements in an array. `sizeof(temperatures)` gives the total bytes occupied by the array, and `sizeof(temperatures[0])` gives the bytes occupied by a single element. Dividing them gives us the count. This is a crucial technique to remember for array manipulation.
3.  **`int sumArray(int numbers[], int count)`**: This is our function definition. `numbers[]` indicates it accepts an integer array (or a pointer to an int), and `count` is the number of elements it should process.
4.  **`total += numbers[i];`**: Inside the loop, we safely access each element using its index, from `0` up to `count - 1`. Because we have `count`, we are guaranteed not to go out of bounds.
5.  **`return total;`**: The function returns the computed sum.
6.  **`int weeklySum = sumArray(temperatures, numDays);`**: In `main`, we call `sumArray`, passing the `temperatures` array and its calculated size `numDays`.

This example shows how a function can effectively process an array without knowing its specific declaration in `main`, thanks to passing the array (its starting address) and its size. This aligns with **CO3** by creating a modular and reusable solution for summing array elements.

## Passing Multidimensional Arrays

What about arrays with more than one dimension, like matrices? Passing multidimensional arrays to functions requires a bit more care, specifically with the dimensions.

When you pass a 2D array, say `int matrix[ROWS][COLS]`, to a function, you *must* specify all dimensions except the first one in the function parameter.

**Function Prototype:**

```c
void processMatrix(int mat[][COLS], int rows); // COLS must be a known constant or value
// or
void processMatrix(int (*mat)[COLS], int rows); // Equivalent pointer notation
```

**Function Definition:**

```c
void processMatrix(int mat[][COLS], int rows) {
    // 'mat' is a pointer to an array of COLS integers.
    // We need 'rows' to know how many such arrays (rows) there are.
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < COLS; j++) {
            printf("%d ", mat[i][j]);
            // Using pointer arithmetic here is more complex for 2D,
            // but conceptually it's like *(mat + i*COLS + j)
        }
        printf("\n");
    }
}
```

**Why the fixed column size?** When C accesses `mat[i][j]`, it calculates the memory address. For a 2D array, the calculation is roughly: `address_of_mat + (i * number_of_columns * sizeof(element_type)) + (j * sizeof(element_type))`. If the number of columns (`COLS`) isn't known at compile time for the function, it cannot perform this address calculation correctly.

**Example: Summing elements of a 2D array.**

Let's say we want to sum all elements in a 3x4 matrix.

```c
#include <stdio.h>

#define ROWS 3
#define COLS 4

// Function to sum all elements in a 2D array
int sumMatrix(int matrix[][COLS], int numRows) {
    int total = 0;
    for (int i = 0; i < numRows; i++) {
        for (int j = 0; j < COLS; j++) {
            total += matrix[i][j];
        }
    }
    return total;
}

int main() {
    int myMatrix[ROWS][COLS] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };

    // When calling, we pass the matrix and the number of rows.
    // The column size (COLS) is fixed in the function definition.
    int matrixSum = sumMatrix(myMatrix, ROWS);

    printf("The sum of all elements in the matrix is: %d\n", matrixSum);

    return 0;
}
```

Here, `COLS` must be a defined constant (or passed as a parameter if you're using Variable Length Arrays, a C99 feature not covered in detail here, but good to be aware of). This example reinforces **CO2** and **CO3** by enabling modular matrix operations.

## Modifying Arrays Inside Functions

As we discussed, arrays are passed by reference. This means that if a function modifies an element of the array, the original array in the calling function will also be modified. This is a powerful feature, but also one that requires careful use.

Consider a function that doubles each element of an array.

```c
#include <stdio.h>

// Function to double each element of an integer array
void doubleArrayElements(int arr[], int size) {
    printf("Inside doubleArrayElements: Array before modification:\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // Modify the array elements
    for (int i = 0; i < size; i++) {
        arr[i] = arr[i] * 2; // Directly modifies the original array
    }

    printf("Inside doubleArrayElements: Array after modification:\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int count = sizeof(numbers) / sizeof(numbers[0]);

    printf("In main: Array before calling function:\n");
    for (int i = 0; i < count; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n\n");

    // Call the function to modify the array
    doubleArrayElements(numbers, count);

    printf("\nIn main: Array after calling function:\n");
    for (int i = 0; i < count; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    return 0;
}
```

**Output:**

```
In main: Array before calling function:
10 20 30 40 50 

Inside doubleArrayElements: Array before modification:
10 20 30 40 50 
Inside doubleArrayElements: Array after modification:
20 40 60 80 100 

In main: Array after calling function:
20 40 60 80 100 
```

As you can see, the `numbers` array in `main` is indeed modified by the `doubleArrayElements` function. This is the power and the pitfall of pass-by-reference for arrays. It's essential to be aware of this side effect. Herbert Schildt, in "C: The Complete Reference," emphasizes that functions that modify array contents can be very useful for in-place sorting or transformation algorithms.

If you *don't* want the original array to be modified, you would need to:
1.  Create a copy of the array in `main` before passing it.
2.  Or, inside the function, create a local copy of the array and work on that (but then you'd need a way to return the modified copy, perhaps via a pointer to a result array, or by returning the modified copy itself if it's not a huge array).

This concept is fundamental to **CO3**, enabling functions to act as robust data transformers.

## Key Takeaways and Exam Tips

Let's summarize the most important points:

*   **Arrays are passed by reference:** When you pass an array to a function, you are passing the address of its first element, not a copy of the entire array.
*   **Size is crucial:** Functions don't automatically know the size of an array. Always pass the size as a separate argument.
*   **Syntax:** You can declare array parameters as `type arr[]` or `type *arr`. Both are treated as pointers to the first element.
*   **Modifications stick:** Changes made to array elements inside a function directly affect the original array. Be mindful of this side effect.
*   **Multidimensional arrays:** Require all dimensions except the first to be specified in the function parameter declaration.

**Exam Focus:**

*   **Why are arrays passed by reference in C?** (Efficiency, direct modification)
*   **How do you pass the size of an array to a function?** (As an additional argument)
*   **What happens if you don't pass the size and iterate beyond the array bounds?** (Undefined behavior, potential crash, data corruption)
*   **Show how to declare and define a function that takes a 1D array and its size.** (Demonstrate `type arr[]` and `type *arr` syntax)
*   **Show how to declare and define a function that takes a 2D array.** (Demonstrate fixed second dimension syntax)
*   **Write a simple function that modifies an array in place (e.g., reverses it, sorts it, doubles elements).**

Always remember to calculate the array size correctly using `sizeof(array) / sizeof(array[0])` when calling functions that expect it.

This covers the essentials of passing arrays to functions in C. It's a foundational skill that you'll use constantly as you write more complex C programs.

---

## Sample Questions and Answers

**Question 1 (Conceptual):**

Explain the difference between passing a simple integer variable and passing an array to a C function in terms of how the data is handled.

**Answer:**
When a simple integer variable (like `int x`) is passed to a function, C typically uses **pass-by-value**. This means a *copy* of the variable's value is sent to the function. Any modifications made to the parameter inside the function do not affect the original variable outside the function.

In contrast, when an array is passed to a function, C uses **pass-by-reference**. The function receives the *memory address* of the first element of the array. This allows the function to directly access and modify the elements of the original array. Think of it as giving the function the "location" of the array, rather than a duplicate. This is more memory-efficient for large arrays as it avoids copying.

**Question 2 (Exam-Oriented):**

Write a C program that defines a function `findMax` which accepts an integer array and its size, and returns the largest element in the array. Demonstrate its usage in `main`.

**Answer:**

```c
#include <stdio.h>
#include <limits.h> // For INT_MIN

// Function to find the maximum element in an integer array
// Parameters:
//   arr[]: The integer array
//   size: The number of elements in the array
// Returns:
//   The largest integer found in the array
int findMax(int arr[], int size) {
    if (size <= 0) {
        // Handle empty or invalid size case, returning a sensible default or error indicator
        // For simplicity, we'll return INT_MIN to indicate an issue or very small value.
        // In real-world, you might print an error or use an error code.
        return INT_MIN;
    }

    int maxElement = arr[0]; // Assume the first element is the maximum initially

    // Iterate through the rest of the array starting from the second element
    for (int i = 1; i < size; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i]; // Update maxElement if a larger value is found
        }
    }
    return maxElement; // Return the largest element found
}

int main() {
    int scores[] = {75, 92, 88, 64, 95, 78, 85};
    // Calculate the number of elements in the scores array
    int numScores = sizeof(scores) / sizeof(scores[0]);

    // Call the findMax function, passing the array and its size
    int maximumScore = findMax(scores, numScores);

    printf("The scores are: ");
    for (int i = 0; i < numScores; i++) {
        printf("%d ", scores[i]);
    }
    printf("\n");

    printf("The maximum score is: %d\n", maximumScore);

    // Example with an empty array (to test the edge case)
    int emptyArray[] = {};
    int numEmpty = sizeof(emptyArray) / sizeof(emptyArray[0]); // This will be 0 for an empty array
    int maxEmpty = findMax(emptyArray, numEmpty);
    printf("The maximum in an empty array (or with invalid size) is: %d\n", maxEmpty);


    return 0;
}
```

**Reasoning:**
This solution demonstrates the core principles:
1.  **Function Definition:** `findMax` is defined to accept an array (`int arr[]`) and its size (`int size`).
2.  **Pass-by-Reference:** The `arr` parameter receives the address of the `scores` array.
3.  **Array Traversal:** A `for` loop iterates from the second element (`i=1`) up to `size-1` (because `i < size`). This ensures all elements are checked safely.
4.  **Max Finding Logic:** The `maxElement` variable is initialized with the first element and updated whenever a larger element is encountered.
5.  **Return Value:** The function returns the final `maxElement`.
6.  **`main` Usage:** `main` initializes an array, calculates its size using the `sizeof` trick, calls `findMax` with the array and size, and prints the result.
7.  **Edge Case Handling:** Added a check for `size <= 0` to prevent potential issues with empty arrays. `INT_MIN` from `<limits.h>` is a good way to signify an error or a very small value in such cases.

**Question 3 (Conceptual/Pitfall):**

If a function modifies an array passed to it, does the original array in the calling function change? Explain why or why not.

**Answer:**
Yes, the original array in the calling function *will* change. This is because arrays in C are passed by **reference**, not by value. When you pass an array to a function, you are effectively passing a pointer to the first element of that array. The function then uses this pointer to access the actual elements of the original array in memory. Therefore, any modifications made to the array elements inside the function are performed directly on the original data. This is a fundamental characteristic of how arrays behave in C function calls.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
