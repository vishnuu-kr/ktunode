---
title: "Parameter passing"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f98fe"
status: "completed"
scrapedAt: "2026-05-23T16:09:21.369Z"
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
