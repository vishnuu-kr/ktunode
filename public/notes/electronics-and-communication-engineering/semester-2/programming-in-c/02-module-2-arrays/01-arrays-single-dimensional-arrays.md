---
title: "Arrays - Single dimensional arrays"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da361"
status: "completed"
scrapedAt: "2026-05-23T17:41:57.494Z"
---
# Programming in C: Module 2 - Arrays

## Topic: Single Dimensional Arrays

Welcome, everyone, to Module 2! Today, we're diving into a fundamental data structure in C programming: **Arrays**. If you've ever worked with collections of similar data, you'll find arrays incredibly useful. Think of them as a way to organize and manage multiple pieces of information of the *same type* efficiently.

### 1. What is an Array? The Need for Organized Data

Imagine you're a shopkeeper and you need to keep track of the daily sales for each of your 30 products. Without a system, you might end up with 30 separate variables: `sales_product1`, `sales_product2`, ..., `sales_product30`. This is not only tedious to declare but also a nightmare to manage, especially if you need to calculate the total sales or find the product with the highest sales.

This is where arrays come to our rescue! An array is a **collection of elements of the same data type, stored in contiguous memory locations**. What does "contiguous" mean? It means they are placed one after another in memory, like seats in a cinema hall or boxes in a warehouse. This contiguity is a key feature that makes arrays so powerful for processing collections of data.

**Connecting to Course Outcomes:**
*   **CO1 (Infer a computational problem and develop C programs using basic constructs):** Understanding arrays helps us infer that problems involving lists of items (like student scores, inventory counts, temperature readings) are best solved using this data structure.
*   **CO2 (Develop C programs using arrays):** This entire module is dedicated to this! We'll learn how to declare, initialize, and manipulate arrays to solve problems.

### 2. Declaring a Single Dimensional Array: Giving it a Name and Size

Before we can use an array, we need to tell the C compiler two crucial things about it:
1.  **The data type of the elements:** Are we storing integers, characters, floating-point numbers, or something else?
2.  **The size of the array:** How many elements will it hold?

The general syntax for declaring a single-dimensional array looks like this:

```c
data_type array_name[size];
```

Let's break this down:

*   `data_type`: This is the type of data each element in the array will hold. For instance, `int` for whole numbers, `float` for decimal numbers, `char` for single characters.
*   `array_name`: This is a valid C identifier (just like variable names) that you choose to represent your array. Make it descriptive! If you're storing student marks, `studentMarks` is a good name.
*   `[size]`: This is the crucial part. It's a constant integer expression that specifies the number of elements the array will contain. **Important Note:** The size must be a positive integer. C arrays are zero-indexed, meaning the *first* element is at index 0, the second at index 1, and so on, up to `size - 1`.

**Example:**
Let's say we want to store the marks of 5 students. We can declare an integer array:

```c
int studentMarks[5];
```

This declaration tells the compiler: "I need a block of memory large enough to hold 5 integers, and I want to refer to this block using the name `studentMarks`."

**Think of it like this:** If `studentMarks` were a row of mailboxes, there would be 5 mailboxes, labeled 0, 1, 2, 3, and 4. Each mailbox can hold a single integer.

**Referencing Textbooks:**
Both Gottfried ("Programming with C") and Kernighan & Ritchie ("The C Programming Language") emphasize that arrays provide a way to handle collections, and the declaration is the first step in reserving that contiguous memory space. They also highlight the importance of specifying the size at declaration.

### 3. Accessing Array Elements: The Power of Indexing

Once an array is declared, how do we put data into it or retrieve data from it? This is where **array indexing** comes in. Each element in the array has a unique index, starting from 0. We use the array name followed by the index enclosed in square brackets `[]` to refer to a specific element.

**Syntax:**

```c
array_name[index];
```

Where `index` is an integer value ranging from `0` to `size - 1`.

**Example (Continuing `studentMarks[5]`):**

*   To access the first student's marks, we would use `studentMarks[0]`.
*   To access the third student's marks, we would use `studentMarks[2]`.
*   The last student's marks would be accessed using `studentMarks[4]` (since the size is 5, the indices go from 0 to 4).

**Putting Data In (Assignment):**

```c
studentMarks[0] = 85;  // Assigning 85 to the first student's marks
studentMarks[1] = 92;  // Assigning 92 to the second student's marks
studentMarks[4] = 78;  // Assigning 78 to the fifth student's marks
```

**Getting Data Out (Reading):**

```c
printf("The first student's marks are: %d\n", studentMarks[0]);
int marks_of_third_student = studentMarks[2]; // Storing the third student's marks in another variable
printf("Third student's marks: %d\n", marks_of_third_student);
```

**Common Pitfall:**
Accessing an index *outside* the valid range (e.g., `studentMarks[5]` or `studentMarks[-1]`) is a very common mistake. This leads to **undefined behavior** – your program might crash, produce incorrect results, or seem to work fine but corrupt other data. C doesn't automatically protect you from this! Always remember the indices go from `0` to `size - 1`.

**Connecting to Course Outcomes:**
*   **CO2 (Develop C programs using arrays):** This is the core mechanism for interacting with array elements.
*   **CO1 (Infer a computational problem):** Knowing how to access elements allows us to think about problems like "find the highest mark" or "calculate the average mark."

### 4. Initializing Arrays: Giving them Values from the Start

You can initialize an array at the time of its declaration. This is often more convenient than assigning values one by one later.

**Method 1: Explicitly listing all elements:**

```c
int primes[5] = {2, 3, 5, 7, 11};
```

Here, `primes[0]` will be 2, `primes[1]` will be 3, and so on.

**Method 2: Partial Initialization:**
If you provide fewer initializers than the array size, the remaining elements are automatically initialized to zero (for numeric types) or the null character `\0` (for `char` arrays).

```c
int numbers[7] = {10, 20, 30}; // numbers[0]=10, numbers[1]=20, numbers[2]=30, numbers[3]=0, numbers[4]=0, numbers[5]=0, numbers[6]=0
```

**Method 3: Letting the compiler determine the size (less common for single-dimensional, but good to know):**
You can omit the size if you provide an initializer list. The compiler will automatically determine the size based on the number of elements in the list.

```c
float temperatures[] = {98.6, 100.1, 99.5}; // This creates an array of size 3
```
However, for clarity and exam purposes, it's generally recommended to explicitly state the size.

**Initializing Character Arrays (Strings):**
When initializing a `char` array, you can use either individual characters in single quotes or a string literal in double quotes.

```c
char greeting[] = {'H', 'e', 'l', 'l', 'o', '\0'}; // Array of characters
char message[] = "Hello"; // String literal, compiler automatically adds '\0'
```
Remember that for a C string (a sequence of characters terminated by `\0`), the array must be large enough to hold all characters *plus* the null terminator. So, `"Hello"` needs an array of size 6.

**Referencing Textbooks:**
Schildt ("C The Complete Reference") dedicates significant space to initialization techniques, highlighting that it's a powerful way to pre-populate arrays. Balagurusamy ("Programming In Ansi C") also covers this, stressing that initialization makes code cleaner.

### 5. Iterating Through Arrays: The Loop's Best Friend

The real power of arrays is unlocked when you process all their elements. This is where loops, particularly `for` loops, shine. Since arrays have a fixed size and elements are accessed by an index that increments sequentially, `for` loops are a natural fit.

**Example: Summing all elements in an array**

Let's say we want to calculate the sum of the marks of our 5 students:

```c
#include <stdio.h>

int main() {
    int studentMarks[5] = {85, 92, 78, 95, 88};
    int sum = 0;
    int i; // Loop counter

    // Iterate through the array from index 0 to 4
    for (i = 0; i < 5; i++) {
        sum = sum + studentMarks[i]; // Add the current element's value to sum
        // Alternatively: sum += studentMarks[i];
    }

    printf("The sum of student marks is: %d\n", sum);

    return 0;
}
```

**Explanation:**
1.  We declare `studentMarks` and initialize it.
2.  We initialize a `sum` variable to 0. This is important; starting with 0 ensures our sum calculation is accurate.
3.  The `for` loop starts with `i = 0` (the first index).
4.  The loop continues as long as `i` is less than 5 (the size). This means `i` will take values 0, 1, 2, 3, and 4, covering all valid indices.
5.  In each iteration, `studentMarks[i]` (the element at the current index) is added to `sum`.
6.  `i` is incremented by 1, moving to the next element.
7.  Once `i` becomes 5, the condition `i < 5` is false, and the loop terminates.

**Example: Finding the highest mark**

How would we find the highest mark?

```c
#include <stdio.h>

int main() {
    int studentMarks[5] = {85, 92, 78, 95, 88};
    int highestMark = studentMarks[0]; // Assume the first mark is the highest initially
    int i;

    // Start from the second element (index 1) since we've already considered the first
    for (i = 1; i < 5; i++) {
        if (studentMarks[i] > highestMark) {
            highestMark = studentMarks[i]; // Update highestMark if we find a larger value
        }
    }

    printf("The highest mark is: %d\n", highestMark);

    return 0;
}
```

**Explanation:**
1.  We initialize `highestMark` with the value of the *first element* (`studentMarks[0]`). This is a common and good practice. Why? Because we need a starting point for comparison. If we initialized it to 0, and all actual marks were negative (which isn't the case for scores, but could be for other data), our result would be wrong.
2.  The loop starts from `i = 1` because we've already accounted for `studentMarks[0]`.
3.  Inside the loop, we compare the current element `studentMarks[i]` with `highestMark`.
4.  If `studentMarks[i]` is indeed greater, we update `highestMark` to this new higher value.

**Connecting to Course Outcomes:**
*   **CO2 (Develop C programs using arrays):** This is the primary way we process data within arrays.
*   **CO1 (Infer a computational problem):** Problems like finding averages, sums, minimums, maximums, or searching for specific values within a list are all solved using loops to iterate over arrays.
*   **Knowledge Level (K3):** Applying loops to arrays requires understanding how to control the flow of execution based on array indices.

### 6. Arrays and Functions: Passing Array Data

When you want to use an array in a function (which we'll cover in more detail later in the course!), you can pass the array to that function. However, C has a specific way of handling this. When you pass an array to a function, you are actually passing a **pointer to the first element** of the array.

**Example: A function to calculate the sum of array elements**

```c
#include <stdio.h>

// Function to calculate sum of elements in an integer array
// 'arr' is the array name (which decays to a pointer to its first element)
// 'size' is the number of elements in the array
int calculateSum(int arr[], int size) {
    int sum = 0;
    int i;
    for (i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int total;

    // Call the function, passing the array name and its size
    total = calculateSum(numbers, 5);

    printf("The sum of array elements is: %d\n", total);

    return 0;
}
```

**Key Points when passing arrays to functions:**

*   **The `[]` in the function parameter `int arr[]` or `int *arr` indicates that `arr` is expected to be an array (or a pointer to the first element).** Both notations are equivalent in function parameter declarations for arrays.
*   **You MUST pass the size of the array separately.** The function itself doesn't know how big the array is just by receiving the pointer. Without the size, the function wouldn't know when to stop processing elements. This is a critical detail!
*   **Changes made to the array elements *inside* the function will affect the original array in the `main` function (or wherever it was called from).** This is because the function is working directly on the original data via the pointer.

**Connecting to Course Outcomes:**
*   **CO2 (Develop C programs using arrays):** Shows how to integrate array usage with functions.
*   **CO3 (Utilize functions to find solution):** Demonstrates modularity by encapsulating array processing logic within a function.
*   **CO4 (Develop C programs using pointers):** This is a direct link. Passing an array to a function is a prime example of how pointers are used implicitly.

### 7. Summary: Key Takeaways for Single Dimensional Arrays

Let's recap the essence of single-dimensional arrays:

*   **What they are:** Ordered collections of elements of the *same data type*.
*   **Why use them:** To efficiently manage and process multiple related data items.
*   **Declaration:** `data_type array_name[size];` – specify type and how many elements.
*   **Indexing:** Access elements using `array_name[index]`, where `index` ranges from `0` to `size - 1`.
*   **Initialization:** You can provide initial values at declaration using `{}`.
*   **Iteration:** `for` loops are your best friends for processing all elements.
*   **With Functions:** Pass the array name and its size. The array name decays to a pointer to the first element.

**Remember this:** Arrays are fundamental. Mastering them is a crucial step towards solving more complex programming problems. Always be mindful of array bounds (the valid index range) to avoid runtime errors.

---

## Sample Questions and Answers

**Conceptual Questions:**

1.  **What is an array? Explain its significance in programming.**

    *   **Answer:** An array is a data structure that stores a fixed-size sequential collection of elements of the same data type. Its significance lies in its ability to organize and manage multiple related data items efficiently. Instead of using numerous individual variables, an array provides a single name to refer to a group of data, making code more readable, manageable, and allowing for easy processing using loops. For example, storing the scores of 100 students becomes straightforward with an array rather than 100 separate variables.

2.  **What are the two key pieces of information required when declaring an array in C?**

    *   **Answer:**
        1.  **Data Type:** The type of data that each element of the array will hold (e.g., `int`, `float`, `char`). All elements must be of the same type.
        2.  **Size:** The number of elements the array can store. This determines the total memory allocated for the array.

3.  **Explain the concept of "zero-based indexing" in C arrays. What is the valid range of indices for an array of size N?**

    *   **Answer:** Zero-based indexing means that the first element of an array is accessed using index `0`, the second element using index `1`, and so on. For an array of size `N`, the valid indices range from `0` to `N-1`. Accessing any index outside this range (e.g., `N` or negative indices) leads to undefined behavior.

4.  **Why is it important to pass the size of the array as a separate argument when passing an array to a function in C?**

    *   **Answer:** When an array is passed to a function in C, it "decays" into a pointer to its first element. The function only receives this pointer and does not inherently know the total number of elements the original array contained. Passing the size separately provides the function with the necessary information to iterate through all the elements of the array correctly and safely, preventing out-of-bounds access.

**Exam-Oriented Questions:**

5.  **Consider the following C code snippet:**

    ```c
    int data[6] = {10, 20, 30};
    printf("%d", data[3]);
    ```
    **What will be the output, and why?**

    *   **Answer:** The output will be `0`.
        *   **Reasoning:** The array `data` is declared with a size of 6. It is partially initialized with the values `{10, 20, 30}`. According to C's rules for partial initialization of numeric arrays, any elements that are not explicitly assigned a value are automatically initialized to `0`. Therefore, `data[0]` is 10, `data[1]` is 20, `data[2]` is 30, and `data[3]`, `data[4]`, and `data[5]` are all `0`. The `printf` statement accesses `data[3]`, which holds the value `0`.

6.  **Write a C program to find the sum and average of elements in a single-dimensional integer array of size 5.**

    *   **Answer:**

    ```c
    #include <stdio.h>

    int main() {
        int numbers[5];
        int i;
        int sum = 0;
        float average;

        printf("Enter 5 integer elements:\n");
        // Read elements from the user
        for (i = 0; i < 5; i++) {
            printf("Enter element %d: ", i + 1);
            scanf("%d", &numbers[i]);
        }

        // Calculate the sum
        for (i = 0; i < 5; i++) {
            sum += numbers[i];
        }

        // Calculate the average
        // Cast sum to float to ensure floating-point division
        average = (float)sum / 5;

        printf("Sum of the elements is: %d\n", sum);
        printf("Average of the elements is: %.2f\n", average); // %.2f for 2 decimal places

        return 0;
    }
    ```
    *   **Reasoning:** The program first declares an integer array `numbers` of size 5. It then uses a `for` loop to prompt the user to enter 5 integer values, storing each in the corresponding array element using `scanf`. A second `for` loop iterates through the array to accumulate the sum of all elements. Finally, the average is calculated by dividing the total `sum` by the number of elements (5). A type cast `(float)sum` is used to ensure that the division results in a floating-point number for an accurate average.

7.  **What is the potential problem with the following code? How would you fix it?**

    ```c
    #include <stdio.h>

    int main() {
        int values[10];
        int i;

        for (i = 0; i <= 10; i++) { // Potential issue here
            values[i] = i * 5;
        }

        // ... further processing ...

        return 0;
    }
    ```

    *   **Answer:**
        *   **Potential Problem:** The `for` loop iterates from `i = 0` up to and including `i = 10`. The array `values` has a size of 10, meaning its valid indices are from 0 to 9. When `i` becomes 10, the statement `values[i] = i * 5;` attempts to access `values[10]`, which is an **out-of-bounds access**. This is undefined behavior and can lead to crashes or corrupted data.
        *   **Fix:** The loop condition should be changed to `i < 10` (or `i <= 9`) to ensure that only valid indices (0 through 9) are accessed.

        ```c
        #include <stdio.h>

        int main() {
            int values[10];
            int i;

            // Corrected loop condition
            for (i = 0; i < 10; i++) {
                values[i] = i * 5;
            }

            // ... further processing ...
            printf("Elements of values array:\n");
            for (i = 0; i < 10; i++) {
                printf("%d ", values[i]);
            }
            printf("\n");

            return 0;
        }

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
