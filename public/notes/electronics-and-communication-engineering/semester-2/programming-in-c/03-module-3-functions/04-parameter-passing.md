---
title: "Parameter passing"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da372"
status: "completed"
scrapedAt: "2026-05-23T17:42:14.812Z"
---
# Module 3: Functions - Parameter Passing

Welcome back, everyone! In our journey through C programming, we've learned that functions are like little self-contained machines that perform specific tasks. They help us break down complex problems into smaller, manageable pieces, making our code more organized, readable, and reusable. This directly ties into **Course Outcome 3 (CO3)**, where we aim to "Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types."

Now, a crucial aspect of using functions is how they *talk* to each other. How does a function receive the information it needs to do its job, and how does it potentially send back a result? This is where **parameter passing** comes in. Think of it as the communication protocol between different parts of your program.

Let's dive in and understand how this works.

## What are Parameters?

Before we talk about *passing* them, let's clarify what parameters actually are. When we declare a function, we can specify that it needs certain pieces of information to operate. These are called **parameters**. They act as placeholders in the function's definition, ready to receive values when the function is called.

For example, if we want to write a function to calculate the area of a rectangle, it clearly needs the length and the width. So, our function definition might look something like this:

```c
void calculateRectangleArea(int length, int width) {
    // ... calculation logic ...
}
```

Here, `length` and `width` are the **parameters** of the `calculateRectangleArea` function. They are expecting to receive integer values.

## Arguments vs. Parameters: A Quick Clarification

It's a common point of confusion, so let's clear it up.

*   **Parameters** are the variables listed in the function's definition (the placeholders).
*   **Arguments** are the actual values that are passed to the function when it is called.

So, when we call our `calculateRectangleArea` function like this:

```c
calculateRectangleArea(10, 5);
```

Here, `10` and `5` are the **arguments**. The value `10` will be assigned to the parameter `length`, and `5` will be assigned to the parameter `width` within the function's scope.

This understanding is fundamental to **CO1**, which involves inferring computational problems and developing C programs using basic constructs, including functions. Knowing how functions receive input is key to building them correctly.

## The Two Major Ways of Passing Parameters in C

C offers two primary mechanisms for passing parameters to functions:

1.  **Pass by Value**
2.  **Pass by Reference** (though C doesn't *directly* support pass by reference in the same way some other languages do, we achieve it using pointers.)

Let's explore each of these in detail.

### 1. Pass by Value

This is the default and most common way parameters are passed in C.

**What it means:** When you pass arguments to a function using pass by value, the *values* of the arguments are copied from the calling function into the parameters of the called function. The called function works with these copies, not the original variables.

**Analogy:** Imagine you have a favorite recipe book (your main program) with a specific cake recipe (a variable holding, say, the number of eggs). You want to give a friend a copy of *just that recipe* to try out. You photocopy the recipe page and give it to your friend. Your friend can then modify their copy of the recipe (change the number of eggs, add sprinkles) without affecting the original recipe in your book.

**How it works in C:**

Let's say we have a variable `a` with a value, and we want to pass it to a function `modifyValue`.

```c
#include <stdio.h>

void modifyValue(int num) {
    printf("Inside function (before modification): %d\n", num);
    num = num * 2; // Modifying the local copy
    printf("Inside function (after modification): %d\n", num);
}

int main() {
    int a = 10;
    printf("Before calling function: %d\n", a);
    modifyValue(a); // Passing 'a' by value
    printf("After calling function: %d\n", a); // 'a' remains unchanged
    return 0;
}
```

**Output:**

```
Before calling function: 10
Inside function (before modification): 10
Inside function (after modification): 20
After calling function: 10
```

**Explanation:**

*   In `main`, `a` is initialized to `10`.
*   When `modifyValue(a)` is called, the *value* of `a` (which is `10`) is copied into the parameter `num` within `modifyValue`.
*   Inside `modifyValue`, `num` is changed to `20`. This change only affects the local copy `num`.
*   When `modifyValue` finishes, the `num` variable (the copy) is destroyed.
*   Back in `main`, the original variable `a` remains `10` because it was never directly modified.

**Key Takeaways for Pass by Value:**

*   **Safety:** The original data in the calling function is protected from accidental modification by the called function. This is a good thing!
*   **No side effects:** Changes made to parameters within the function do not affect the original variables outside the function.
*   **Efficiency for small data types:** Copying small data types like `int`, `float`, `char` is generally efficient.
*   **Limitations:** You cannot directly modify the original variables outside the function using this method. This is where pass by reference becomes useful.

**Relevance to Course Outcomes:**

*   **CO1:** Understanding pass by value is crucial for writing functions that perform calculations or operations on input data without altering the source.
*   **CO3:** This is the fundamental way functions receive input to perform their modular tasks. If a function needs to process a number, pass by value is the standard approach.

**From the Textbooks:**
Gottfried's "Programming with C" and Kernighan & Ritchie's "The C Programming Language" both emphasize pass by value as the default mechanism. They illustrate how function calls create new scopes and how variables within those scopes are local to the function. Schildt's "C: The Complete Reference" also details this, highlighting its importance in protecting original data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 2. Pass by Reference (Using Pointers)

As mentioned, C doesn't have a direct "pass by reference" keyword like C++ or Java. However, we can *simulate* pass by reference using **pointers**. This is a very powerful technique and directly supports **Course Outcome 4 (CO4)**: "Develop C programs using pointers for dynamic data handling."

**What it means:** Instead of passing the *value* of a variable, you pass its *memory address*. The function then uses this address (via a pointer) to access and modify the original variable directly.

**Analogy:** Remember the recipe book example? Now, instead of giving your friend a photocopy of the recipe, you give them the *exact location* of your recipe book and tell them, "Go to page 50, line 7, and change the number of eggs there." Your friend, armed with this address, can go directly to your book and alter the original recipe.

**How it works in C (using pointers):**

To achieve pass by reference, you need to:
1.  In the calling function, get the memory address of the variable using the `&` (address-of) operator.
2.  In the function definition, declare the parameters as pointers (`*` type).
3.  Inside the function, use the `*` (dereference) operator to access or modify the value at the memory address.

Let's rewrite our previous example to modify the original variable:

```c
#include <stdio.h>

// Function expects a pointer to an integer
void modifyValueByReference(int *ptrNum) {
    printf("Inside function (before modification): %d\n", *ptrNum); // Dereference to get value
    *ptrNum = *ptrNum * 2; // Modify the value at the address
    printf("Inside function (after modification): %d\n", *ptrNum);
}

int main() {
    int a = 10;
    printf("Before calling function: %d\n", a);
    // Pass the address of 'a' using '&'
    modifyValueByReference(&a);
    printf("After calling function: %d\n", a); // 'a' is now changed
    return 0;
}
```

**Output:**

```
Before calling function: 10
Inside function (before modification): 10
Inside function (after modification): 20
After calling function: 20
```

**Explanation:**

*   In `main`, `a` is initialized to `10`.
*   When `modifyValueByReference(&a)` is called, the *memory address* of `a` is passed to the function.
*   The parameter `ptrNum` inside `modifyValueByReference` is a pointer that now holds the address of `a`.
*   `printf("Inside function: %d\n", *ptrNum);` uses the dereference operator (`*`) to get the *value stored at the address* that `ptrNum` holds. So, it prints `10`.
*   `*ptrNum = *ptrNum * 2;` again uses the dereference operator to access the value at `ptrNum`'s address, changes it (to `20`), and stores it back at that same address. This directly modifies the original variable `a`.
*   When `modifyValueByReference` finishes, the pointer `ptrNum` is destroyed, but the original variable `a` in `main` has been permanently changed.

**Key Takeaways for Pass by Reference (using Pointers):**

*   **Ability to modify originals:** The primary advantage is that the function can directly alter the original variables in the calling function. This is essential for functions that need to return multiple values or modify states.
*   **Efficiency for large data structures:** Passing a pointer (which is just an address, typically 4 or 8 bytes) to a large array or structure is much more efficient than copying the entire data structure by value. This is a significant performance consideration, as highlighted in texts like Balagurusamy's "Programming In Ansi C".
*   **Potential for errors:** Because you are directly manipulating memory, incorrect pointer usage can lead to serious bugs (e.g., accessing invalid memory, causing crashes). This is a crucial point often tested in exams.
*   **Common use cases:**
    *   Functions that need to return more than one value.
    *   Functions that modify parameters (like sorting functions).
    *   Working with arrays and strings (where you often pass pointers to the first element).

**Relevance to Course Outcomes:**

*   **CO3:** Essential for modular programming where functions might need to update shared data.
*   **CO4:** This is the core of passing by reference in C. Without understanding pointers, you cannot implement this effectively.
*   **CO1:** Developing programs that modify data through function calls requires understanding how parameters are passed.

**From the Textbooks:**
Kernighan & Ritchie's "The C Programming Language" is the seminal work that thoroughly explains pointers and their use in simulating pass by reference. Gottfried and Schildt also provide extensive coverage, often with examples of functions that swap values or modify arrays. Kamthane and Yashavant Kanetkar's books frequently offer practical examples of using pointers for passing arrays and strings, which are common interview and exam topics.

### When to Use Which?

*   **Pass by Value:** Use it when the function only needs to read the data and doesn't need to change the original variable. This is the safer default choice. For example, a function to calculate the square of a number.
*   **Pass by Reference (using Pointers):** Use it when the function needs to modify the original variable, or when you are passing large data structures (like arrays or strings) to improve efficiency. For example, a function to swap two numbers, or a function to sort an array.

## Parameter Passing with Arrays and Strings

Arrays and strings in C are special. When you pass an array (or a string, which is just an array of characters) to a function, you are actually passing a **pointer to its first element**.

This means that arrays and strings are *implicitly* passed by reference in C. Any modifications made to the array *inside* the function will affect the original array in the calling function.

Let's see an example with an array:

```c
#include <stdio.h>

// Function expects an integer array (which is treated as a pointer to the first element)
void modifyArray(int arr[], int size) {
    printf("Inside function (modifying elements):\n");
    for (int i = 0; i < size; i++) {
        arr[i] = arr[i] * 10; // Modifying elements of the original array
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    printf("Before calling function:\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    // Passing the array 'numbers'
    modifyArray(numbers, size);

    printf("After calling function:\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]); // The original array is modified
    }
    printf("\n");

    return 0;
}
```

**Output:**

```
Before calling function:
1 2 3 4 5
Inside function (modifying elements):
10 20 30 40 50
After calling function:
10 20 30 40 50
```

**Explanation:**

When `modifyArray(numbers, size)` is called, the name `numbers` decays into a pointer to its first element (`&numbers[0]`). So, the function `modifyArray` receives the address of the first element. Inside the function, `arr[i]` is equivalent to `*(arr + i)`, which directly accesses and modifies the elements of the original `numbers` array.

**Relevance to Course Outcomes:**

*   **CO2:** Directly relates to how functions interact with arrays and strings. Understanding this is key to performing operations on collections of data.
*   **CO3:** Demonstrates how functions can modify shared data structures, a common requirement in modular programming.
*   **CO4:** Reinforces the concept that array names act as pointers, and passing them to functions is a direct application of pointer usage.

**Exam Tip:** Be ready for questions asking about array passing and the potential for modifying arrays within functions. This is a very common area for exam questions.

## Common Pitfalls and Important Reminders

*   **Forgetting to dereference:** A very common mistake when using pass by reference (with pointers) is forgetting to use the `*` operator when you want to access or modify the value at the memory address. This often leads to the pointer itself being modified instead of the value it points to, or incorrect assignment.
    *   *Incorrect:* `ptrNum = ptrNum * 2;` (This tries to multiply an address by 2, which is usually meaningless and can crash your program.)
    *   *Correct:* `*ptrNum = *ptrNum * 2;` (This multiplies the value *at* the address by 2.)
*   **Null Pointers:** Always ensure your pointers are pointing to valid memory locations before dereferencing them. Passing `NULL` or an uninitialized pointer can cause segmentation faults.
*   **Arrays vs. Pointers:** While array names decay to pointers when passed to functions, it's good practice to pass the size of the array explicitly to the function, as the function itself doesn't inherently know the array's size when only given a pointer.
*   **Scope:** Remember that even when passing by reference, the pointer variable itself is local to the function. It's the *data* it points to that is shared.

**Remember this:** Pass by value is safe and protects your original data. Pass by reference (via pointers) gives you the power to modify original data and is efficient for large data structures. For arrays and strings, C behaves as if they are passed by reference by default.

---

## Sample Questions with Answers

**Conceptual Questions:**

1.  **Question:** Explain the difference between parameters and arguments in C functions.
    **Answer:** Parameters are the variables declared in the function's definition, acting as placeholders for incoming data. Arguments are the actual values passed to the function when it is called. For example, in `void func(int x)`, `x` is a parameter. When you call `func(10)`, `10` is an argument.

2.  **Question:** What is the primary advantage of pass by value?
    **Answer:** The primary advantage of pass by value is data protection. It ensures that the original variables in the calling function are not modified by the called function, preventing unintended side effects.

3.  **Question:** How can you achieve "pass by reference" functionality in C?
    **Answer:** In C, "pass by reference" is achieved by passing the memory address of a variable (using the `&` operator) to a function. The function then receives this address as a pointer and uses the dereference operator (`*`) to access and modify the original variable's data.

4.  **Question:** When you pass an array to a function in C, what is actually passed?
    **Answer:** When an array is passed to a function, a pointer to its first element is passed. This means the function receives the memory address of the beginning of the array, and any modifications made to the array elements within the function will affect the original array.

**Exam-Oriented Questions:**

5.  **Question:** Consider the following C code. What will be the output, and why?

    ```c
    #include <stdio.h>

    void swap_val(int a, int b) {
        int temp;
        temp = a;
        a = b;
        b = temp;
        printf("Inside swap_val: a = %d, b = %d\n", a, b);
    }

    int main() {
        int x = 10, y = 20;
        printf("Before swap: x = %d, y = %d\n", x, y);
        swap_val(x, y);
        printf("After swap: x = %d, y = %d\n", x, y);
        return 0;
    }
    ```
    **Answer:**
    **Output:**
    ```
    Before swap: x = 10, y = 20
    Inside swap_val: a = 20, b = 10
    After swap: x = 10, y = 20
    ```
    **Reasoning:** The `swap_val` function uses **pass by value**. When `swap_val(x, y)` is called, copies of `x` (10) and `y` (20) are passed into the parameters `a` and `b` respectively. Inside the function, `a` and `b` are swapped. However, these changes only affect the local copies within `swap_val`. The original variables `x` and `y` in `main` remain unchanged because their values were copied, not their memory addresses.

6.  **Question:** Modify the `swap_val` function from the previous question to correctly swap the values of `x` and `y` in `main`. Show the modified function and explain the change.
    **Answer:**
    **Modified Function:**
    ```c
    void swap_ref(int *a, int *b) { // Parameters are now pointers
        int temp;
        temp = *a; // Dereference to get the value at address a
        *a = *b;   // Dereference to assign the value at address b to address a
        *b = temp; // Dereference to assign temp to address b
        printf("Inside swap_ref: *a = %d, *b = %d\n", *a, *b);
    }
    ```
    **Modified `main` call:**
    ```c
    // ... in main ...
    printf("Before swap: x = %d, y = %d\n", x, y);
    swap_ref(&x, &y); // Pass the addresses of x and y
    printf("After swap: x = %d, y = %d\n", x, y);
    // ...
    ```
    **Explanation:** The function signature is changed to accept pointers (`int *a`, `int *b`). Inside the function, the dereference operator (`*`) is used to access and modify the values stored at the memory addresses passed to the function. In `main`, we pass the addresses of `x` and `y` using `&x` and `&y`. This ensures that the original variables `x` and `y` are swapped.

7.  **Question:** Write a C function that takes an array of integers and its size as input and returns the sum of all its elements. Explain the parameter passing mechanism used for the array.
    **Answer:**
    **Function:**
    ```c
    int sumArray(int arr[], int size) {
        int sum = 0;
        for (int i = 0; i < size; i++) {
            sum += arr[i]; // Accessing elements directly
        }
        return sum;
    }
    ```
    **Explanation of Parameter Passing:**
    The array `arr` is passed to the `sumArray` function. In C, when an array is passed to a function, a pointer to its first element is passed. This means `arr` inside the function is effectively a pointer to the start of the original array. The function can then access and iterate through the array's elements using array indexing (`arr[i]`) or pointer arithmetic (`*(arr + i)`). Since it's effectively pass by reference for the array's data, the function can read the array's contents, but in this specific `sumArray` function, it does not modify the original array. This demonstrates how functions can efficiently work with array data without the overhead of copying the entire array.