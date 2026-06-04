---
title: "Parameter passing"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e51"
status: "completed"
scrapedAt: "2026-05-20T16:35:26.359Z"
---
Absolutely! Let's dive into the fascinating world of parameter passing in C functions. This is a cornerstone concept, and understanding it deeply will unlock the power of modular programming and help you tackle more complex problems. Think of it as learning how to effectively communicate between different parts of your C program.

---

# Module 3: Functions - Parameter Passing

Welcome back! In this session, we're going to focus on a critical aspect of functions: **parameter passing**. This is how we get information into a function and, sometimes, how we get information back out. It's the lifeline that connects different pieces of your program, allowing them to work together harmoniously.

You'll recall from our previous discussions that functions are like mini-programs within your larger program. They encapsulate a specific task. But how does that task know what to operate on? That's where parameters come in!

## Why Do We Need Parameters?

Imagine you're trying to bake a cake. You need ingredients, right? Flour, sugar, eggs, milk. The recipe itself is like your function – it tells you *how* to bake the cake. But without the ingredients, the recipe is just a set of instructions for an empty kitchen!

Parameters are the "ingredients" that we pass to our functions. They provide the data that the function needs to perform its task.

Think about our **Course Outcome CO3**: "Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types." Parameter passing is the mechanism that enables this modularity. It allows us to create reusable code blocks (functions) that can operate on different data inputs. This is a huge step towards solving complex problems by breaking them down into manageable pieces.

## Types of Parameter Passing

In C, there are fundamentally two ways we can pass parameters to a function:

1.  **Pass by Value**
2.  **Pass by Pointer (or Pass by Reference)**

Let's explore each of these in detail.

### 1. Pass by Value: Sending a Copy

This is the most common and often the default way we think about passing parameters in C. When you pass a variable "by value," what you're actually doing is sending a *copy* of that variable's value to the function.

**How it Works:**

When a function is called with arguments passed by value, the actual values of those arguments are copied into the function's local parameters. Inside the function, these parameters act as entirely separate variables. Any changes made to these parameters *within* the function do not affect the original variables in the calling part of the program.

**Analogy Time:**

Imagine you have a treasured photograph. You want to show it to a friend, but you don't want them to accidentally smudge or tear your original. So, you make a photocopy of the photograph and give the photocopy to your friend. Your friend can then draw on the photocopy, cut it, or even lose it – your original, precious photograph remains completely untouched.

In this analogy:
*   Your original photograph is the **original variable** in your main program.
*   The photocopy is the **copy of the value** passed to the function.
*   Your friend who receives the photocopy is the **function's local parameter**.

**Let's Look at Code:**

```c
#include <stdio.h>

// Function definition: 'num' is a parameter of type int
void incrementByValue(int num) {
    printf("Inside the function (before increment): num = %d\n", num);
    num = num + 1; // Modifying the local copy
    printf("Inside the function (after increment): num = %d\n", num);
}

int main() {
    int myVariable = 10;

    printf("Before calling the function: myVariable = %d\n", myVariable);

    // Calling the function with myVariable by value
    incrementByValue(myVariable);

    printf("After calling the function: myVariable = %d\n", myVariable); // Notice this value hasn't changed!

    return 0;
}
```

**Expected Output:**

```
Before calling the function: myVariable = 10
Inside the function (before increment): num = 10
Inside the function (after increment): num = 11
After calling the function: myVariable = 10
```

**Key Takeaway for Pass by Value:**

*   The function operates on a **copy** of the original data.
*   Changes made to parameters inside the function **do not affect** the original variables outside the function.
*   This is excellent for **read-only** operations where you want to use a value without risking its modification. It aligns with **CO3** by allowing functions to process data without side effects on the caller's state.

**When is Pass by Value good?**

It's ideal when a function needs to use a value but shouldn't alter the original. For example, if you have a function `calculateArea(int length, int width)`, you pass `length` and `width` by value. The function uses them to compute the area, but it doesn't need to change the original `length` or `width` variables.

**Common Pitfall:** If you *expect* a function to modify your original variable and it doesn't, you've likely used pass by value when pass by pointer was needed.
