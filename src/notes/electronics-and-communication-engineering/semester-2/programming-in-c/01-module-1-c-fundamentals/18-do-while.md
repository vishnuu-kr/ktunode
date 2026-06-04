---
title: "do-while"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals  "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da35c"
status: "completed"
scrapedAt: "2026-05-23T17:41:53.525Z"
---
# Module 1: C Fundamentals - The `do-while` Loop

Welcome back, everyone! Today, we're going to dive into another crucial control flow statement in C: the `do-while` loop. We've already explored `while` loops and `for` loops, and `do-while` offers a slightly different flavor, which can be incredibly useful in specific situations.

Think about the other loops we've discussed. With `while` and `for`, the condition is checked *before* the loop's body executes. This means there's a possibility that the loop's code might never run if the condition is initially false. But what if you absolutely need to execute the code inside the loop *at least once*, regardless of whether the condition is true or false initially? That's precisely where `do-while` shines!

## Understanding the `do-while` Loop: Guaranteed Execution

The `do-while` loop is an *exit-controlled* loop. This is a key distinction! Unlike `while` (which is an *entry-controlled* loop), the condition in a `do-while` loop is checked *after* the loop's body has executed.

Let's visualize this. Imagine you're trying to guess a secret number. You want to keep guessing until you get it right. With a `while` loop, you might first check if you *haven't* guessed it correctly, and then make a guess. But what if you just want to make your *first* guess, and *then* check if you were right? The `do-while` loop fits this perfectly. You *do* something (make a guess), and *then* you check the condition (was it correct?).

### The Syntax of `do-while`

The structure of a `do-while` loop in C is quite straightforward:

```c
do {
    // Code to be executed at least once
    // This is the loop body
    // ...
    // statements that update loop control variables
} while (condition); // Semicolon is crucial here!
```

Let's break this down:

*   **`do`**: This keyword signals the beginning of the loop's body.
*   **`{ ... }`**: The curly braces enclose the statements that will be executed. This block of code is guaranteed to run at least once.
*   **`while (condition)`**: This is where the magic happens. After the `do` block finishes, the `condition` is evaluated.
    *   If the `condition` is true, the loop jumps back to the `do` statement and executes the body again.
    *   If the `condition` is false, the loop terminates, and program execution continues with the statement immediately following the `while (condition);` line.
*   **`;`**: Don't forget that semicolon after the closing parenthesis of the `while` condition! This is a common mistake that beginners make.

### How it Works: A Step-by-Step Analogy

Think of it like this: You have a special vending machine. You insert a coin, and *then* you press the button for your snack. The machine dispenses your snack, and *then* it checks if you put in enough money for another item.

1.  **Execute the `do` block:** You always get your snack first.
2.  **Evaluate the `while` condition:** The machine checks if you have enough credit for another round.
3.  **Repeat or Exit:** If you have enough credit, you get to go through the process again. If not, you're done with the vending machine for now.

This "do first, check later" approach is what distinguishes `do-while` from `while` and `for` loops.

### Connecting to Course Outcomes

This concept directly supports **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.** When you encounter a problem where a task *must* be performed at least once before checking if it needs to be repeated, `do-while` is your tool. For instance, getting user input for a specific value and then validating it is a classic scenario. You need to get the input (do), and then check if it's valid (while).

## When to Use `do-while`? Practical Scenarios

So, when would you reach for a `do-while` loop instead of a `while` or `for` loop?

1.  **Menu-Driven Programs:** Imagine a program that presents a user with a menu of options (e.g., "1. Add", "2. Subtract", "3. Exit"). The program must display the menu and get a choice at least once, even if the user's first input is an "Exit" command.
    *   **Example:** You want to ask a user to enter a number between 1 and 10. You need to prompt them to enter a number *first*, and *then* check if the number they entered is within the valid range. If it's not, you ask them again.

    Let's look at a simple code snippet for this:

    ```c
    #include <stdio.h>

    int main() {
        int num;

        do {
            printf("Please enter a number between 1 and 10: ");
            scanf("%d", &num);

            if (num < 1 || num > 10) {
                printf("Invalid input! ");
            }
        } while (num < 1 || num > 10); // Keep asking as long as the number is out of range

        printf("You entered %d, which is a valid number.\n", num);

        return 0;
    }
    ```

    In this example, the `printf` and `scanf` statements are inside the `do` block. They will *always* execute at least once. The `while` condition `(num < 1 || num > 10)` is checked *after* the input is received. If the user enters `0` (which is less than 1), the `if` statement prints an error, and the loop condition is checked. Since `0 < 1` is true, the loop repeats, prompting the user again. If the user enters `5`, the `if` condition is false, but the loop condition `(5 < 1 || 5 > 10)` is also false, so the loop terminates, and the success message is printed.

2.  **Reading from a File (at least once):** Sometimes, when reading data, you might need to read the first record or byte and *then* check if you've reached the end-of-file (EOF) marker before deciding to read further.
    *   As per Herbert Schildt's "C: The Complete Reference," `do-while` is often suitable for situations where you need to perform an operation and then check a condition related to the result of that operation, which aligns perfectly with reading and checking for EOF.

3.  **Interactive Programs Requiring Initial Action:** Any program where the very first step is an action, and subsequent actions depend on the outcome of that first action.

### What if the condition is initially false?

Let's say in our number-guessing example, the user *somehow* managed to enter a valid number on their *first* try (e.g., `5`).
*   The `do` block executes: "Please enter a number between 1 and 10: " is printed, and `scanf` reads `5`.
*   The `while (num < 1 || num > 10)` condition is evaluated: `(5 < 1 || 5 > 10)` evaluates to `(false || false)`, which is `false`.
*   The loop terminates.
*   "You entered 5, which is a valid number." is printed.

This demonstrates that even if the condition is immediately false, the code within the `do` block still executes once.

## Comparison with `while` Loop

It's important to reiterate the difference between `do-while` and `while`:

*   **`while` loop:**
    ```c
    while (condition) {
        // statements
    }
    ```
    The `condition` is checked *before* the loop body. If `condition` is initially false, the loop body never executes. This is called an *entry-controlled* loop.

*   **`do-while` loop:**
    ```c
    do {
        // statements
    } while (condition);
    ```
    The `condition` is checked *after* the loop body. The loop body *always* executes at least once. This is called an *exit-controlled* loop.

The textbook "The C Programming Language" by Kernighan and Ritchie often emphasizes understanding the flow control precisely. They would highlight that `do-while` is used when "an iteration should occur at least once."

Think of it like this:
*   **`while`:** "IF the door is unlocked, THEN open it and walk through." (You check first.)
*   **`do-while`:** "OPEN the door and walk through, THEN check IF it was locked behind you." (You do it first, then check.)

## Potential Pitfalls and Common Mistakes

As mentioned, the most frequent error with `do-while` is forgetting the semicolon at the end of the `while` statement. This is a syntax error that the compiler will catch, but it's easy to overlook.

Another conceptual misunderstanding can be using `do-while` when a `while` or `for` loop would be more appropriate. If your logic dictates that the loop might *never* need to run, using `do-while` would lead to an unnecessary first execution, potentially causing issues or incorrect results. Always ask yourself: "Does this task *need* to happen at least once?" If the answer is yes, `do-while` is a strong candidate.

## `do-while` and Course Outcomes Revisited

Let's explicitly tie `do-while` back to our course outcomes:

*   **CO1 (Basic Constructs & Control Statements):** This is the most direct link. `do-while` is a fundamental control statement. Understanding its "execute once, then check" behavior allows you to solve problems that require this specific execution pattern, like interactive input validation or menu systems as discussed. You can write programs where the program must *do* something (like display a prompt) and *then* check if the user's action meets a certain criterion.

*   **CO2 (Arrays, Matrices, Strings):** While `do-while` itself doesn't directly involve arrays or strings, it can be used in conjunction with them. For example, you might loop through an array using `do-while` to process its elements, ensuring you at least look at the first element before checking if you've reached the end of the array.

*   **CO3 (Functions & Modules):** A function might use a `do-while` loop internally to perform a task that requires at least one execution, such as repeatedly asking for valid input until a correct value is provided, and then returning that value. The caller function doesn't need to know *how* the validation happens, only that it gets a valid result.

*   **CO4 (Pointers & Dynamic Data):** When dealing with dynamically allocated memory, you might read data into a buffer. A `do-while` loop could be used to read at least one chunk of data, and then check if the end of the stream or a specific marker has been reached, using pointers to manage the buffer.

*   **CO5 (Files):** As hinted earlier, `do-while` is excellent for file operations where you want to read at least one record before checking for the end-of-file (EOF) marker. This ensures you don't miss the first piece of data if the file isn't empty.

Remember, the choice of loop structure (`while`, `for`, `do-while`) depends entirely on the problem's requirements. Each has its unique strength.

## Summary: Key Takeaways for `do-while`

*   **Guaranteed First Execution:** The body of a `do-while` loop is *always* executed at least once.
*   **Exit-Controlled:** The loop condition is checked *after* the loop body.
*   **Syntax:** `do { /* statements */ } while (condition);`
*   **Crucial Semicolon:** Don't forget the `;` after `while (condition)`.
*   **Best Use Cases:** Menu-driven programs, input validation, scenarios where an action must occur once before checking.

By understanding these nuances, you'll be well-equipped to choose the right loop for the job and write more efficient and accurate C programs.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual recall to application.

**Question 1 (Conceptual):** What is the primary difference between a `while` loop and a `do-while` loop in C?

**Answer:** The primary difference lies in when the loop condition is evaluated. A `while` loop checks the condition *before* executing its body (entry-controlled), meaning the body might never run. A `do-while` loop executes its body *first* and *then* checks the condition (exit-controlled), guaranteeing that the body runs at least once.

**Question 2 (Application):** Write a C program that prompts the user to enter a positive integer. If the user enters a non-positive integer, the program should display an error message and prompt again until a positive integer is entered. Use a `do-while` loop for this task.

**Answer:**

```c
#include <stdio.h>

int main() {
    int number;

    do {
        printf("Please enter a positive integer: ");
        scanf("%d", &number);

        if (number <= 0) {
            printf("Error: Input must be positive. ");
        }
    } while (number <= 0); // Loop continues as long as the number is not positive

    printf("You entered the positive integer: %d\n", number);

    return 0;
}
```

**Reasoning:** We use `do-while` because we must ask the user for input at least once. The `printf` and `scanf` are inside the `do` block. The `while (number <= 0)` condition checks if the entered number is not positive. If it's not, the error message is displayed, and the loop repeats the prompt. If a positive number is entered, the condition becomes false, and the loop terminates.

**Question 3 (Exam-Oriented/Pitfall):** What is the most common syntax error associated with the `do-while` loop?

**Answer:** The most common syntax error is forgetting to place a semicolon (`;`) immediately after the closing parenthesis of the `while` condition: `while (condition);`. The compiler will flag this as an error.

**Question 4 (Comparison):** Consider a scenario where you need to print numbers from 1 to 5. Which loop (`while`, `for`, or `do-while`) would be most appropriate and why?

**Answer:** Either a `while` loop or a `for` loop would be most appropriate. A `do-while` loop is not ideal here because there's no requirement for the loop's body to execute at least once. If the initial condition (e.g., `i <= 5`) were false from the start (though not in this specific example if `i` starts at 1), a `do-while` would still execute once unnecessarily.

*   **Using `for`:**
    ```c
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    ```
    This is concise and clearly shows the initialization, condition, and increment.

*   **Using `while`:**
    ```c
    int i = 1;
    while (i <= 5) {
        printf("%d ", i);
        i++;
    }
    ```
    This also works perfectly and explicitly separates the initialization, condition check, and update.

The choice between `for` and `while` here is largely stylistic, but `do-while` is less suitable because the "at least once" guarantee isn't needed.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
