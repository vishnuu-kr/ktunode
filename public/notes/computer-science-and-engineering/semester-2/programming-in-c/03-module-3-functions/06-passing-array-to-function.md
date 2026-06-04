---
title: "Passing array to function"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e53"
status: "completed"
scrapedAt: "2026-05-20T16:35:27.797Z"
---
Absolutely! Let's dive into Module 3, Topic: Passing Arrays to Functions in C. This is a crucial concept, and once you grasp it, you'll see how much cleaner and more manageable your programs become. Think of functions as little specialized workshops within your larger factory (your program). And arrays? They're like bins full of identical components. How do you get a workshop to work on those components? You pass the bin to them!

---

## Module 3: Functions - Passing Arrays to Functions

Welcome back, everyone! In this session, we're going to explore a very practical and important aspect of using functions in C: how to pass arrays to them. We've already learned about functions, how they help us break down complex problems into smaller, reusable pieces (that's **CO3** right there – breaking down problems into modules!). Now, we'll see how to get data into these modules, specifically when that data is organized in an array.

### Why Pass Arrays to Functions?

Imagine you have a program that needs to calculate the average of a list of numbers. You could write the averaging logic directly in your `main` function. But what if you need to calculate the average of *different* lists of numbers at various points in your program? Copy-pasting the same averaging code everywhere is messy, error-prone, and frankly, a waste of your valuable time.

This is where functions shine. You can create a single, well-defined function that knows how to calculate an average. Then, whenever you need to calculate an average, you simply *call* this function and give it the list of numbers it needs to work with. This is the essence of modularity and reusability, directly addressing **CO3**.

Now, when that list of numbers is stored in an array, we need a way to tell the function where that array is located in memory. This is precisely what "passing arrays to functions" is all about.

### How C Handles Passing Arrays: A Closer Look

This is a point where C might surprise you if you're coming from other languages. In C, when you pass an array to a function, you are *not* actually passing a copy of the entire array. Instead, what gets passed is the **memory address of the first element** of the array.

Think of it like this: Suppose you have a large box of crayons (your array). Instead of giving the entire box to your friend (the function), you only give them the address of the table where the box is placed. Your friend can then go to that table, find the box, and work with the crayons. Crucially, if your friend colors one of the crayons, it's the *original* crayon that's colored, not a copy. This means that any changes made to the array *inside* the function will affect the *original* array in the calling function. This is a very powerful concept and also a potential pitfall to be aware of!

This "passing by address" or "passing by reference" (though technically C doesn't have true pass-by-reference in the same way as C++ for all types) is fundamental. It's why when you modify an array within a function, the original array outside that function is also modified. This is a core mechanism for achieving **CO3** (utilizing functions for modular solutions) and indirectly supports **CO2** (developing C programs using arrays) by allowing functions to effectively manipulate array data.

### Declaring a Function to Accept an Array

When you declare a function that needs to receive an array, you need to specify that it's expecting an array and what type of elements it contains. Here's the common syntax:

```c
return_type function_name(data_type array_name[]);
```

or, more commonly and arguably clearer:

```c
return_type function_name(data_type *array_name);
```

Let's break this down:

*   **`return_type`**: This is the type of value the function will return, just like any other function.
*   **`function_name`**: The name you give to your function.
*   **`data_type array_name[]`**: This tells the compiler that `array_name` is an array of `data_type`. The square brackets `[]` are the key here.
*   **`data_type *array_name`**: This is an alternative declaration. Since passing an array essentially passes a pointer to its first element, you can declare the parameter as a pointer to the element type. This is often seen as more explicit about what's happening under the hood.

Both forms are equivalent when declaring function parameters. The first form, `array_name[]`, is often preferred for readability when you intend to work with an array. As Herbert Schildt often emphasizes in "C: The Complete Reference," understanding this equivalence between array names and pointers is crucial for mastering C.

### The Missing Piece: Array Size!

Here's a common stumbling block: when you declare a function parameter as `int arr[]`, the compiler doesn't know the size of the array being passed! It only knows it's an array of integers. It's like telling your friend, "Go get me a box of crayons from the table," but not specifying if it's a 12-pack or a 64-pack. Your friend might grab the wrong one or not know when to stop looking.

Because of this, you **must** pass the size of the array as a separate argument to the function. This is incredibly important. Without the size, your function wouldn't know how many elements to process, and it might try to read beyond the allocated memory, leading to unpredictable behavior or crashes (segmentation faults).

So, a more typical and practical function declaration looks like this:

```c
return_type function_name(data_type array_name[], int size);
```

or, using the pointer notation:

```c
return_type function_name(data_type *array_name, int size);
```

Here, `size` is an integer variable that tells the function exactly how many elements are in the array `array_name`. This directly helps us meet **CO3** by enabling functions to operate correctly on the array data passed to them.

### Example: Calculating the Sum of Array Elements

Let's put this into practice. Suppose we want a function `sumArray` that takes an array of integers and its size, and returns the sum of all its elements.

**The Function Definition:**

```c
// Function to calculate the sum of elements in an integer array
int sumArray(int arr[], int size) {
    int sum = 0; // Initialize sum to 0
    // Loop through each element of the array
    for (int i = 0; i < size; i++) {
        sum += arr[i]; // Add the current element to the sum
    }
    return sum; // Return the total sum
}
```

Here, `arr[]` signifies it's an array of integers, and `size` tells us how many elements to process. Inside the loop, `arr[i]` accesses the *i*-th element of the array passed from the calling function.

**The Calling Function (e.g., `main`):**

```c
#include <stdio.h>

// Function prototype (declaration)
int sumArray(int arr[], int size);

int main() {
    int numbers[] = {10, 20, 30, 40, 50}; // Our array of numbers
    int arraySize = sizeof(numbers) / sizeof(numbers[0]); // Calculate size

    // Call the sumArray function, passing the array and its size
    int totalSum = sumArray(numbers, arraySize);

    printf("The sum of the array elements is: %d\n", totalSum);

    return 0;
}

// Function definition (as shown above)
int sumArray(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}
```

**Let's Trace This:**

1.  In `main`, we declare `numbers` and initialize it.
2.  We calculate `arraySize`. `sizeof(numbers)` gives the total bytes of the array, and `sizeof(numbers[0])` gives the bytes of a single element. Dividing them gives us the number of elements. This is a common and robust way to get array size, as emphasized in textbooks like "Programming with C" by Byron S. Gottfried.
3.  We call `sumArray(numbers, arraySize)`. Here, `numbers` is the array being passed. Remember, it's actually the *address* of `numbers[0]` that's passed. `arraySize` (which is 5) is passed by value.
4.  Inside `sumArray`, `arr` now "points" to the same memory location as `numbers` in `main`, and `size` is 5.
5.  The loop iterates from `i = 0` to `i = 4`. In each iteration, `arr[i]` accesses the element of the *original* `numbers` array.
6.  The `sum` is calculated.
7.  The final `sum` (150 in this case) is returned to `main` and stored in `totalSum`.

This example clearly demonstrates how to pass an array and its size to a function for processing, directly linking to **CO2** (using arrays) and **CO3** (utilizing functions for modularity).

### Passing Arrays for Modification: The Side Effect

As we discussed, because arrays are passed by address, functions can *modify* the original array. This can be a very useful feature! For instance, you might have a function that sorts an array or fills it with default values.

Let's say we want a function to double every element in an array.

**Function to Double Array Elements:**

```c
// Function to double each element in an integer array
void doubleArrayElements(int arr[], int size) {
    printf("Inside doubleArrayElements: Array before modification.\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // Modify the array by doubling each element
    for (int i = 0; i < size; i++) {
        arr[i] = arr[i] * 2; // This modifies the original array!
    }

    printf("Inside doubleArrayElements: Array after modification.\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
```

Notice the `void` return type. This function's job is to *perform an action* (modify the array) rather than calculate and return a single value. This is a common pattern for functions that modify data structures.

**Calling Function Example:**

```c
#include <stdio.h>

// Function prototype
void doubleArrayElements(int arr[], int size);

int main() {
    int data[] = {5, 10, 15, 20};
    int dataSize = sizeof(data) / sizeof(data[0]);

    printf("In main: Array before calling doubleArrayElements.\n");
    for (int i = 0; i < dataSize; i++) {
        printf("%d ", data[i]);
    }
    printf("\n\n");

    // Call the function to modify the array
    doubleArrayElements(data, dataSize);

    printf("\nIn main: Array after calling doubleArrayElements.\n");
    for (int i = 0; i < dataSize; i++) {
        printf("%d ", data[i]);
    }
    printf("\n");

    return 0;
}

// Function definition (as shown above)
void doubleArrayElements(int arr[], int size) {
    // ... function body ...
}
```

**Output:**

```
In main: Array before calling doubleArrayElements.
5 10 15 20

Inside doubleArrayElements: Array before modification.
5 10 15 20
Inside doubleArrayElements: Array after modification.
10 20 30 40

In main: Array after calling doubleArrayElements.
10 20 30 40
```

See how the `data` array in `main` was changed? This is because the function received the memory address of the array. This is a direct consequence of C's mechanism for passing arrays, and it's a key aspect to understand for **CO3** when designing functions that manipulate data.

**Common Pitfall Alert!**
Always be mindful that modifying an array inside a function affects the original. If you *don't* want the original array to change, you'd need to pass a *copy* of the array. However, C doesn't have a built-in, simple way to pass an array by value directly like it does for basic types. You'd typically have to create a new array inside the calling function, copy the original array's elements into it, and then pass that new array to the function. This is more complex and less efficient, so it's usually better to design your functions to either modify the array or return a new result based on it.

### Using Pointers for Array Parameters

As mentioned earlier, declaring an array parameter as `data_type *array_name` is perfectly valid and often seen. Let's revisit the `sumArray` example using this pointer notation.

```c
#include <stdio.h>

// Function prototype using pointer notation
int sumArrayPtr(int *arr, int size);

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int arraySize = sizeof(numbers) / sizeof(numbers[0]);

    // Call the sumArrayPtr function
    int totalSum = sumArrayPtr(numbers, arraySize); // 'numbers' is treated as a pointer to its first element

    printf("The sum of the array elements is: %d\n", totalSum);

    return 0;
}

// Function definition using pointer notation
int sumArrayPtr(int *arr, int size) {
    int sum = 0;
    // 'arr[i]' is equivalent to '*(arr + i)' when arr is a pointer
    for (int i = 0; i < size; i++) {
        sum += *(arr + i); // Using pointer arithmetic
        // or simply: sum += arr[i]; // This also works and is more readable
    }
    return sum;
}
```

In this version, `int *arr` explicitly declares that `arr` is a pointer to an integer. When you access `*(arr + i)`, you are dereferencing the memory address that is `i` positions *after* the address stored in `arr`. This is exactly what `arr[i]` does under the hood.

Textbooks like "The C Programming Language" by Kernighan and Ritchie (K&R) often delve deeply into pointer arithmetic, explaining how array indexing is essentially a syntactic sugar for pointer arithmetic. This understanding is key to solidifying **CO4** (using pointers for dynamic data handling) and how it relates to array manipulation.

### Passing Multidimensional Arrays to Functions

What about arrays with more than one dimension, like matrices? This is where things get a bit more specific. When you pass a multidimensional array, you *must* specify the size of all dimensions except the first one.

Consider a 2D array (a matrix): `int matrix[3][4];`

If you want to pass this to a function, the declaration would look like:

```c
void processMatrix(int mat[][4], int rows);
```

Here, `mat[][4]` indicates that `mat` is an array of arrays, where each inner array has a size of 4. The `4` is mandatory. The compiler needs this to calculate the memory offset correctly for each row. The number of rows (`rows`) still needs to be passed separately.

**Example: Summing elements of a 2x3 matrix**

```c
#include <stdio.h>

// Function prototype for 2D array
void sumMatrix(int mat[][3], int rows, int cols); // Notice '3' is fixed

int main() {
    int myMatrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    int numRows = 2;
    int numCols = 3;

    printf("Matrix:\n");
    for (int i = 0; i < numRows; i++) {
        for (int j = 0; j < numCols; j++) {
            printf("%d ", myMatrix[i][j]);
        }
        printf("\n");
    }
    printf("\n");

    // Pass the matrix and its dimensions
    sumMatrix(myMatrix, numRows, numCols);

    return 0;
}

// Function definition for 2D array
void sumMatrix(int mat[][3], int rows, int cols) {
    int sum = 0;
    printf("Summing matrix elements...\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            // Accessing elements: mat[i][j] is equivalent to *(mat + i*3 + j) in memory layout
            sum += mat[i][j];
        }
    }
    printf("Total sum of matrix elements: %d\n", sum);
}
```

**Explanation:**

*   The `sumMatrix` function is declared to accept `int mat[][3]`. The `3` signifies that each row has 3 columns.
*   When the compiler needs to find `mat[i][j]`, it calculates the address. It knows how many elements are in a row (3), so to get to row `i`, it moves `i * 3` elements forward from the start of the matrix. Then, to get to column `j` within that row, it moves `j` more elements. This is why the column size is essential for the compiler to correctly interpret multidimensional array indexing.
*   This reinforces **CO2** (developing programs using matrices) and **CO3** (using functions to operate on data structures).

**Advanced Note:** If you need a function to handle matrices of arbitrary column sizes, you would typically pass a pointer to a pointer or use dynamic memory allocation for the matrix, which brings us closer to the concepts in **CO4**. For statically declared multidimensional arrays, fixing the sizes (except the first) is the way to go.

### Summary and Key Takeaways

Let's consolidate what we've learned today, which is fundamental for mastering arrays and functions in C.

*   **Arrays are passed by address:** When you pass an array to a function, only the address of its first element is sent. This means the function can access and, importantly, *modify* the original array. This is a core aspect of **CO3**.
*   **Size is crucial:** C functions don't inherently know the size of an array passed to them. You **must** pass the size as a separate argument to avoid errors and ensure correct processing. This is critical for **CO2** and **CO3**.
*   **Pointer equivalence:** An array name can be treated as a pointer to its first element. Function parameters can be declared as `data_type arr[]` or `data_type *arr`, and these are equivalent for array parameters. This connection is vital for **CO4**.
*   **Modifying arrays:** Functions can alter the contents of the original array passed to them. Be aware of this side effect and design your functions accordingly.
*   **Multidimensional arrays:** When passing multidimensional arrays, all dimensions except the first must be specified in the function parameter declaration.

Understanding these points will help you write robust, efficient, and modular C programs that effectively manage array data. Keep practicing these concepts, and don't hesitate to refer back to your textbooks, especially K&R and Gottfried, for deeper insights into the underlying mechanisms.

---

### Sample Questions with Answers

Here are a few questions to test your understanding, covering both conceptual and exam-oriented aspects:

**Q1. Conceptual: When you pass an array to a function in C, what is actually passed?**

*   **Answer:** The memory address of the first element of the array is passed. This is often referred to as "passing by address" or "passing by reference" in essence, though it's technically passing a pointer.
*   **Reasoning:** This is a fundamental C mechanism that allows functions to access and potentially modify the original array data efficiently. It directly relates to how C handles memory and data transfer between function scopes.

**Q2. Exam-Oriented: Write a C program that defines a function `reverseArray` that takes an integer array and its size, and reverses the elements of the array in place. The `main` function should declare an array, call `reverseArray`, and then print the reversed array.**

*   **Answer:**

    ```c
    #include <stdio.h>

    // Function to reverse an array in place
    void reverseArray(int arr[], int size) {
        int start = 0;
        int end = size - 1;
        int temp;

        // Swap elements from the start and end, moving inwards
        while (start < end) {
            // Swap arr[start] and arr[end]
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            // Move pointers towards the center
            start++;
            end--;
        }
    }

    int main() {
        int numbers[] = {1, 2, 3, 4, 5, 6};
        int arraySize = sizeof(numbers) / sizeof(numbers[0]);

        printf("Original array: ");
        for (int i = 0; i < arraySize; i++) {
            printf("%d ", numbers[i]);
        }
        printf("\n");

        // Call the function to reverse the array
        reverseArray(numbers, arraySize);

        printf("Reversed array: ");
        for (int i = 0; i < arraySize; i++) {
            printf("%d ", numbers[i]);
        }
        printf("\n");

        return 0;
    }
    ```
*   **Reasoning:** This program demonstrates **CO2** (using arrays) and **CO3** (using functions for modularity). The `reverseArray` function takes the array by address, allowing it to modify the original array elements directly. The swapping logic uses a common algorithm with two pointers (`start` and `end`) moving towards the center of the array. The `size` parameter is essential for the loop boundaries.

**Q3. Conceptual: Why is it necessary to pass the size of the array as a separate argument when passing an array to a function in C?**

*   **Answer:** Because the function signature `data_type arr[]` or `data_type *arr` only informs the compiler about the *type* of elements the array holds and that `arr` is a pointer to them. It does not carry information about how many elements are actually present in the memory block pointed to by `arr`. Without the size, the function wouldn't know where the array ends, leading to potential out-of-bounds reads or writes.
*   **Reasoning:** This addresses a fundamental limitation in how arrays are handled in C function parameters and is a key point for understanding array manipulation reliably. It reinforces the need for explicit size management.

**Q4. Exam-Oriented: Consider the following C code. What will be the output?**

```c
#include <stdio.h>

void modify(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        arr[i] *= 2;
    }
}

int main() {
    int my_arr[] = {10, 20, 30};
    int size = sizeof(my_arr) / sizeof(my_arr[0]);

    modify(my_arr, size);

    printf("%d %d %d\n", my_arr[0], my_arr[1], my_arr[2]);

    return 0;
}
```

*   **Answer:** `20 40 60`
*   **Reasoning:** The `modify` function receives the `my_arr` array by address. Inside `modify`, each element `arr[i]` is multiplied by 2. Because the original array is modified, when `main` prints `my_arr[0]`, `my_arr[1]`, and `my_arr[2]`, they will reflect the doubled values. This tests the understanding of **CO3** regarding functions modifying data.

**Q5. Conceptual: When declaring a function that accepts a 2D array, say `int matrix[3][5]`, what is the correct way to specify the parameter in the function signature?**

*   **Answer:** The correct way is `void functionName(int matrix[][5], int rows)` or `void functionName(int (*matrix)[5], int rows)`. The size of all dimensions except the first (in this case, `5`) must be specified.
*   **Reasoning:** This highlights the specific requirements for passing multidimensional arrays. The fixed column size (or inner dimension size) is critical for the compiler to calculate memory offsets correctly when accessing elements like `matrix[i][j]`. This relates to **CO2** and the practical use of matrices.

---

Keep practicing, and you'll find that passing arrays to functions becomes second nature. It's a cornerstone of building efficient and well-organized C programs!
