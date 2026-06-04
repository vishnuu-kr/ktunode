---
title: "Arrays - Single dimensional arrays"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e40"
status: "completed"
scrapedAt: "2026-05-20T16:35:14.767Z"
---
Alright everyone, settle in! Welcome back to our journey through the fascinating world of Programming in C. Today, we're diving into a fundamental data structure that's going to unlock a whole new level of power in your C programs: **Arrays**. Specifically, we'll be focusing on **Single-Dimensional Arrays**.

Think of your C programs as having to manage information. Sometimes you need to store just one piece of data, like a single temperature reading or a student's grade. But what happens when you need to store *many* similar pieces of data? For instance, the scores of all students in a class, the daily temperatures for a month, or a list of your favorite songs. This is where arrays come in, and understanding them is crucial for achieving our Course Outcomes.

Remember **CO2: Develop C programs using arrays, matrices, and strings**? This entire module is dedicated to that! And by mastering single-dimensional arrays, you're building the foundation for understanding matrices (which are essentially arrays of arrays!) and even how strings are handled in C. You'll also see how arrays can be used in conjunction with functions (**CO3**) and pointers (**CO4**), making them incredibly versatile.

### What Exactly is an Array? The Need for Organization

Let's start with a relatable analogy. Imagine you're in a library. Instead of just having books scattered everywhere, a library organizes them on shelves. Each shelf has a specific position, and within that shelf, each book has a place. This organization makes it easy to find any specific book.

In C, a **single-dimensional array** is like a row of these shelves. It's a collection of elements of the **same data type**, stored in **contiguous memory locations**. "Contiguous" means they are right next to each other in the computer's memory.

Why is this important? If you had to store, say, 100 student names, you could declare 100 separate `char` arrays, `name1[50]`, `name2[50]`, and so on. This would be incredibly tedious, difficult to manage, and nearly impossible to write loops for processing. Arrays give us a way to group related data under a single name, making our code much cleaner, more efficient, and easier to work with. It’s all about efficient data management, a core aspect of programming.

Gottfried's "Programming with C" emphasizes that arrays provide a structured way to handle collections of data, and this structure is key to solving problems systematically. Think about it: how would you calculate the average score of all students without a way to easily access each score? You'd be lost in a sea of individual variables.

### Declaring a Single-Dimensional Array: The Blueprint

Before you can use an array, you need to tell the C compiler what it is. This is called **declaration**. When you declare an array, you need to specify two crucial things:

1.  **The data type of the elements:** What kind of data will this array hold? Integers (`int`), floating-point numbers (`float`), characters (`char`)? All elements in a single array must be of the same type.
2.  **The size of the array:** How many elements will this array hold? This is a fixed number.

The syntax for declaring a single-dimensional array is:

```c
dataType arrayName[arraySize];
```

Let's break this down with a concrete example. Suppose you want to store the marks of 5 students in an integer array.

```c
int studentMarks[5];
```

Here:
*   `int` is the **data type** – each element will be an integer.
*   `studentMarks` is the **array name** – a meaningful identifier for our collection of marks.
*   `[5]` is the **array size** – it tells the compiler to reserve space for 5 integer elements.

**Important Point:** The size specified here must be a constant expression. You can't declare an array like `int grades[numberOfStudents];` if `numberOfStudents` is a variable that might change during program execution (unless you're using more advanced concepts like Variable Length Arrays, which we'll touch upon later, but for now, think fixed size). This relates to how memory is allocated when the program starts.

### Accessing Array Elements: The Power of Indexing

Once an array is declared, it's like we have those 5 empty boxes labeled `studentMarks`. But how do we refer to each individual box? This is where **indices** come in.

Each element in an array is assigned a unique index, which is its position within the array. In C, array indexing is **zero-based**. This is a critical detail to remember! It means the first element is at index `0`, the second at index `1`, and so on, up to `size - 1`.

So, for our `studentMarks[5]` array:
*   `studentMarks[0]` refers to the first element.
*   `studentMarks[1]` refers to the second element.
*   `studentMarks[2]` refers to the third element.
*   `studentMarks[3]` refers to the fourth element.
*   `studentMarks[4]` refers to the fifth element.

The valid indices for an array of size `N` are always `0` through `N-1`.

Let's visualize this. If `studentMarks[5]` is declared, the memory looks something like this:

| Memory Address | Variable Name | Index | Value   |
| :------------- | :------------ | :---- | :------ |
| (e.g., 1000)   | `studentMarks`| `0`   | (empty) |
| (e.g., 1004)   | `studentMarks`| `1`   | (empty) |
| (e.g., 1008)   | `studentMarks`| `2`   | (empty) |
| (e.g., 1012)   | `studentMarks`| `3`   | (empty) |
| (e.g., 1016)   | `studentMarks`| `4`   | (empty) |

*(Note: The actual memory addresses will vary, and if `int` is 2 bytes, the addresses would be 1000, 1002, 1004, etc. The important part is they are contiguous.)*

To access or modify an element, you use the array name followed by the index in square brackets:

```c
// Assigning a value to the first element
studentMarks[0] = 85;

// Assigning a value to the third element
studentMarks[2] = 92;

// Reading the value of the fifth element
int fifthStudentScore = studentMarks[4];
```

Kernighan and Ritchie, in "The C Programming Language," highlight how arrays and their indexing provide a powerful mechanism for direct memory access and manipulation, which is fundamental to C's efficiency.

### Initializing Arrays: Giving Them a Head Start

Often, you'll want to give your array elements some initial values when you declare the array. This is called **initialization**. You can do this using curly braces `{}`.

```c
// Declaring and initializing an array of integers
int numbers[5] = {10, 20, 30, 40, 50};

// Declaring and initializing an array of characters (a string literal)
char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'}; // '\0' is the null terminator for strings
```

What if you provide fewer initializers than the array size?
*   The remaining elements are automatically initialized to **zero** (or the null character `\0` for `char` arrays).

```c
int scores[5] = {90, 88, 75}; // scores[0]=90, scores[1]=88, scores[2]=75, scores[3]=0, scores[4]=0
```

What if you provide *more* initializers than the array size?
*   This is a **compile-time error**. The compiler will complain because you're trying to put more items into the box than it can hold.

**A very common shorthand:** If you provide initializers, you can often let the compiler figure out the size of the array for you.

```c
int primes[] = {2, 3, 5, 7, 11, 13}; // Compiler automatically counts 6 elements
```

This is a great way to declare and initialize arrays without having to manually count the elements. It’s less prone to errors!

### Looping Through Arrays: Automating Repetitive Tasks

This is where arrays truly shine and directly connect to **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.** Arrays are almost always used in conjunction with loops (like `for` loops) to process all their elements.

Imagine you want to print all the student marks we stored earlier, or calculate their sum. You wouldn't want to write `printf("%d", studentMarks[0]); printf("%d", studentMarks[1]);` etc., 100 times if you had 100 students.

The `for` loop is perfect for this because it allows us to iterate through the array using its index.

Let's say we have our `studentMarks` array (size 5) initialized with some values:

```c
#include <stdio.h>

int main() {
    int studentMarks[5] = {85, 92, 78, 90, 88};
    int i; // Loop counter

    printf("Student Marks:\n");

    // Loop through the array from index 0 to 4 (size - 1)
    for (i = 0; i < 5; i++) {
        printf("Student %d: %d\n", i + 1, studentMarks[i]); // Displaying student number (1-based)
    }

    // Let's calculate the sum of the marks
    int sum = 0;
    for (i = 0; i < 5; i++) {
        sum = sum + studentMarks[i]; // or sum += studentMarks[i];
    }
    printf("Total Marks: %d\n", sum);

    // Calculate the average
    float average = (float)sum / 5; // Important: Cast to float for floating-point division
    printf("Average Marks: %.2f\n", average);

    return 0;
}
```

**Key takeaways from this example:**

*   The loop runs from `i = 0` up to `i < 5`. This ensures we cover all valid indices `0, 1, 2, 3, 4`.
*   Notice `i + 1` when printing "Student X". This is because humans usually count from 1, while arrays are 0-indexed. It's a good practice to translate the internal index to a more user-friendly representation when needed.
*   Calculating the sum involves accumulating values in a `sum` variable. This is a classic pattern when processing arrays.
*   When calculating the average, we perform a **type cast** `(float)sum`. Why? If both `sum` (an `int`) and `5` (an `int`) are integers, C will perform integer division, which truncates any decimal part. Casting `sum` to `float` *before* the division ensures we get a floating-point result, giving us the accurate average. This is a common pitfall!

**Remember this:** When working with array sizes in loops, always use the array's size, and the loop condition should be `i < arraySize` (not `i <= arraySize`), because the last valid index is `arraySize - 1`.

Balagurusamy's "Programming in ANSI C" provides numerous examples of using `for` loops with arrays, underscoring their symbiotic relationship.

### Array Boundaries: The Danger Zone

We've stressed that C arrays have a fixed size and are 0-indexed. What happens if you try to access an element *outside* these valid indices?

For example, in `studentMarks[5]`, valid indices are 0 to 4. If you try to access `studentMarks[5]` or `studentMarks[-1]`, you are performing **array out-of-bounds access**.

This is dangerous! C doesn't have built-in checks for this. When you access an out-of-bounds element, you might:
*   Read garbage data from memory that happens to be there.
*   Overwrite important data in other parts of your program, leading to bizarre bugs that are very hard to track down.
*   Cause your program to crash (segmentation fault).

**Why is this so critical to understand for exams?** Questions about array indexing, valid ranges, and potential errors often appear. Be absolutely sure you know the `0` to `N-1` rule for an array of size `N`. Hanly & Koffman's "Problem Solving and Program Design in C" strongly advises careful boundary checking in programming practice precisely to avoid these issues.

**Common Pitfall:** Forgetting the null terminator (`\0`) when treating a `char` array as a string. If you declare `char name[5]` and try to store "Hello", which has 5 characters plus the `\0`, you'll overflow the array. You'd need `char name[6]`.

### Passing Arrays to Functions: Sharing Data

In real-world programming, we often break down complex tasks into smaller, manageable functions. How do we pass an array (a collection of data) to a function so it can work with it?

When you pass an array to a function in C, you're not actually passing a copy of the entire array. Instead, you pass the **memory address of the first element** of the array. This is incredibly efficient, especially for large arrays.

Let's say we want a function that calculates the sum of elements in an integer array.

```c
#include <stdio.h>

// Function to calculate the sum of elements in an integer array
// The function receives the array and its size
int calculateSum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int myNumbers[5] = {10, 20, 30, 40, 50};
    int arraySize = 5;
    int total;

    // Call the function, passing the array and its size
    total = calculateSum(myNumbers, arraySize);

    printf("The sum of the array elements is: %d\n", total);

    return 0;
}
```

In the function declaration `int calculateSum(int arr[], int size)`, notice `int arr[]`. This is the standard way to indicate that `arr` is an array parameter. Inside the function, `arr` now holds the memory address of the first element of `myNumbers` from `main`. Because arrays are passed by address, any modifications made to the array *inside* the function will affect the *original* array in the calling function (`main` in this case). This is powerful but also means you need to be careful! This concept is a direct link to **CO3: Utilize functions to find solution to the computational problems**.

**Alternative Syntax for Array Parameters:**
You might also see the function declaration written as `int calculateSum(int *arr, int size)`. This is functionally equivalent! It explicitly states that the function expects a pointer to an integer (which is what passing an array essentially does). Gottfried's book often uses the `*arr` notation when discussing array parameters, emphasizing the pointer nature.

**Crucial Point for Functions:** When passing an array to a function, you *must* also pass its size. The function itself doesn't inherently know how big the array is, because it only receives the address of the first element. Without the size, the function wouldn't know when to stop processing elements and could run into out-of-bounds issues.

### Example Scenario: Finding the Maximum Value

Let's consolidate our understanding with a practical example. Suppose we're managing sales figures for a week, and we want to find the day with the highest sales. This directly maps to **CO2** and **CO1**.

```c
#include <stdio.h>

// Function to find the maximum element in an integer array
int findMax(int sales[], int numDays) {
    if (numDays <= 0) {
        printf("Error: Cannot find maximum in an empty array.\n");
        return -1; // Or some other indicator of error
    }

    int maxSales = sales[0]; // Assume the first day has the max sales initially

    for (int i = 1; i < numDays; i++) { // Start from the second element (index 1)
        if (sales[i] > maxSales) {
            maxSales = sales[i]; // Found a new maximum
        }
    }
    return maxSales;
}

int main() {
    int weeklySales[7] = {1500, 1750, 1600, 1900, 2100, 1800, 1700};
    int numberOfDays = 7;
    int highestSales;

    // Find the highest sales using our function
    highestSales = findMax(weeklySales, numberOfDays);

    if (highestSales != -1) { // Check if the function returned a valid result
        printf("The highest sales for the week were: $%d\n", highestSales);

        // Optional: Find which day had the highest sales
        printf("This occurred on day(s): ");
        for (int i = 0; i < numberOfDays; i++) {
            if (weeklySales[i] == highestSales) {
                printf("%d ", i + 1); // Print day number (1-7)
            }
        }
        printf("\n");
    }

    return 0;
}
```

In this `findMax` function:
*   We initialize `maxSales` with the *first* element. This is a common technique for finding the minimum or maximum.
*   The loop starts from `i = 1` because we've already considered `sales[0]`.
*   Inside the loop, we compare the current element `sales[i]` with our current `maxSales`. If `sales[i]` is greater, we update `maxSales`.
*   We also added a basic error check for an empty array (`numDays <= 0`), which is good practice.

This example clearly demonstrates how you can use arrays and loops within functions to solve a practical problem, fulfilling **CO1** and **CO2**.

### Summary of Key Concepts

To wrap up our discussion on single-dimensional arrays:

*   **What they are:** A contiguous block of memory holding elements of the *same* data type.
*   **Declaration:** `dataType arrayName[arraySize];` – requires data type and a constant size.
*   **Access:** Use the array name and an index in square brackets: `arrayName[index]`.
*   **Indexing:** **Zero-based** (first element is at index 0, last is at `size - 1`).
*   **Initialization:** Use curly braces `{}` during declaration. If fewer values are provided, others are zero-initialized. If more values are provided, it's an error.
*   **Loops:** Essential for iterating through and processing all elements, typically with `for` loops using the index.
*   **Array Boundaries:** Crucial! Accessing elements outside the `0` to `size-1` range leads to undefined behavior and bugs.
*   **Functions:** Arrays are passed by the address of their first element. Always pass the array size to functions working with arrays.

Mastering single-dimensional arrays is your gateway to more complex data structures and algorithms in C. They are fundamental building blocks for tackling many computational problems.

---

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-style.

**Question 1 (Conceptual):**
What is the primary advantage of using an array over declaring many individual variables for storing similar data?

**Answer 1:**
The primary advantage is **organization and efficiency**. Arrays allow you to group related data of the same type under a single name. This makes it much easier to manage large collections of data, write loops to process them collectively, and write more concise and readable code. Instead of managing `var1`, `var2`, ..., `var100`, you manage `myArray[0]`, `myArray[1]`, ..., `myArray[99]`.

**Question 2 (Exam Style - Identification):**
Consider the following C code snippet:
```c
int data[10] = {5, 10, 15, 20, 25, 30, 35, 40, 45, 50};
printf("%d", data[9]);
```
What will be printed on the screen, and why?

**Answer 2:**
The output will be **`50`**.
**Reasoning:** The array `data` is declared with a size of 10. C uses zero-based indexing, meaning the valid indices range from `0` to `10 - 1`, which is `0` to `9`. The statement `data[9]` accesses the element at the last valid index, which is the 10th element in the array. In the initialization `data[10] = {5, 10, ..., 50}`, the value `50` is at index `9`.

**Question 3 (Exam Style - Error Identification):**
Identify the error in the following C code and explain how to fix it:
```c
#include <stdio.h>

int main() {
    int values[5];
    int i;

    for (i = 0; i <= 5; i++) { // Loop condition
        values[i] = i * 2;
        printf("%d ", values[i]);
    }
    return 0;
}
```

**Answer 3:**
**Error:** The error is in the `for` loop condition: `i <= 5`.
**Reasoning:** The array `values` has a size of 5, meaning its valid indices are `0, 1, 2, 3, 4`. When `i` becomes `5`, the expression `values[5]` attempts to access an element outside the array's bounds. This is an "array out-of-bounds" access, which can lead to unpredictable behavior or program crashes.
**Fix:** The loop condition should be changed to `i < 5`.
The corrected loop would be:
```c
    for (i = 0; i < 5; i++) {
        values[i] = i * 2;
        printf("%d ", values[i]);
    }
```
This ensures that the loop iterates for `i = 0, 1, 2, 3, 4`, accessing only valid elements.

**Question 4 (Application/CO2):**
Write a C program that declares an array of 10 floating-point numbers, initializes them with values read from the user, and then prints the sum of all elements in the array.

**Answer 4:**
```c
#include <stdio.h>

int main() {
    float numbers[10];
    int i;
    float sum = 0.0;

    printf("Enter 10 floating-point numbers:\n");

    // Read numbers from the user and store them in the array
    for (i = 0; i < 10; i++) {
        printf("Enter number %d: ", i + 1);
        scanf("%f", &numbers[i]); // Read into the current array element
    }

    // Calculate the sum of the array elements
    for (i = 0; i < 10; i++) {
        sum += numbers[i]; // Add the current element to the sum
    }

    // Print the sum
    printf("\nThe sum of the numbers is: %.2f\n", sum);

    return 0;
}
```
**Explanation:**
*   We declare a `float` array `numbers` of size 10.
*   The first `for` loop (from `i = 0` to `i < 10`) is used to prompt the user to enter each number and store it in the respective `numbers[i]` element using `scanf`.
*   The second `for` loop (also from `i = 0` to `i < 10`) iterates through the array again. In each iteration, it adds the current element `numbers[i]` to the `sum` variable.
*   Finally, `printf` displays the calculated `sum`, formatted to two decimal places. This program directly applies array concepts to read and process multiple inputs, aligning with **CO1** and **CO2**.

Keep practicing, and you'll find arrays become second nature! They are one of the most foundational tools in your C programming arsenal.
