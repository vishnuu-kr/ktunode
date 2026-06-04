---
title: "Passing structure to function"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e59"
status: "completed"
scrapedAt: "2026-05-20T16:35:32.145Z"
---
Ah, Module 3: Functions! We've already seen how functions are the building blocks of well-structured C programs, allowing us to break down complex problems into manageable, reusable pieces. Remember our discussion on modularity and abstraction? That's precisely what functions help us achieve (CO3). Today, we're going to take that a step further by exploring how to pass **structures** to functions. This is a crucial concept because structures, as you know, allow us to group related data items of different types under a single name. Think of them as custom data types, like a blueprint for a "student" with their roll number, name, and marks, or a "point" with its x and y coordinates.

When we want to perform operations on these composite data types, we'll naturally want to pass them into functions. So, let's dive into the nitty-gritty of passing structures to functions in C.

## Passing Structures to Functions: A Deep Dive

You've mastered passing basic data types like integers and floats to functions. Passing a structure might seem a bit different at first, but the underlying principles are the same. The key is understanding *how* C handles the transfer of data to and from functions.

### 1. Passing by Value: The Default and Safest Approach

Just like with individual variables, the most common and generally safest way to pass a structure to a function in C is **by value**.

**What does "passing by value" mean in this context?**

Imagine you have a structure representing a student's record. When you pass this structure to a function by value, C creates an *exact copy* of the original structure and passes this copy to the function. The function then works with this copy.

Think of it like this: You have a recipe card for your grandma's famous apple pie. If you want a friend to make a copy of the recipe, you don't give them your original, worn-out card, do you? You make a photocopy. Your friend can then scribble notes, stain it with flour, or even accidentally tear it – but your original recipe card remains perfectly intact. That's exactly what passing by value does for structures.

**How does it work in code?**

You declare your function to accept a parameter of the structure type, and when you call the function, you simply pass the structure variable as an argument.

Let's illustrate with a simple example. Suppose we have a `Point` structure to represent coordinates:

```c
#include <stdio.h>

// Define the structure for a point
struct Point {
    int x;
    int y;
};

// Function to display point coordinates (passed by value)
void displayPoint(struct Point p) {
    printf("Point coordinates: (%d, %d)\n", p.x, p.y);
    // Let's try to modify the copied structure (this won't affect the original)
    p.x = 100;
    p.y = 200;
    printf("Inside function after modification: (%d, %d)\n", p.x, p.y);
}

int main() {
    // Declare and initialize a Point structure
    struct Point myPoint = {10, 20};

    printf("Original point before function call: (%d, %d)\n", myPoint.x, myPoint.y);

    // Call the function, passing myPoint by value
    displayPoint(myPoint);

    printf("Original point after function call: (%d, %d)\n", myPoint.x, myPoint.y);

    return 0;
}
```

**What do we observe here?**

*   We define `struct Point` with `x` and `y` integer members.
*   The `displayPoint` function is declared to accept a `struct Point` parameter named `p`. Notice there are no pointers involved here.
*   In `main`, we create `myPoint` and initialize it.
*   When `displayPoint(myPoint)` is called, a *copy* of `myPoint` is created and assigned to the `p` parameter inside the `displayPoint` function.
*   We print the coordinates *before* the modification inside `displayPoint`.
*   We then modify `p.x` and `p.y` within `displayPoint`.
*   Crucially, when we print `myPoint` in `main` *after* the function call, we see that its original values (`10`, `20`) remain unchanged. The modifications only affected the local copy within the `displayPoint` function.

**This is incredibly important for maintaining data integrity!** By default, passing by value ensures that your original data remains untouched by the function. This aligns perfectly with CO3, where we aim to utilize functions to solve problems by abstracting operations and ensuring that our core data structures are handled safely. This is a fundamental concept, so remember: **Passing by value means the function gets a copy, not the original.**

**Textbook Connection:** Gottfried's "Programming with C" (Chapter 6 on Functions, Section 6.6 "Pass-by-value and pass-by-reference") would elaborate on this, highlighting that when a structure is passed by value, a complete copy of the structure is made, consuming memory and potentially time for large structures. Hanly and Koffman also emphasize this in their discussions on function arguments, where primitive types and aggregate types (like structures) are passed by value by default.
