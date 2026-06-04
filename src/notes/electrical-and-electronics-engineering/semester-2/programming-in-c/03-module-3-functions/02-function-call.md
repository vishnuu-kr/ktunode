---
title: "Function call"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f98fc"
status: "completed"
scrapedAt: "2026-05-23T16:09:19.776Z"
---
# PROGRAMMING IN C: Module 3 - Functions

## Topic: Function Call

Welcome, everyone, to our exploration of Functions in C! We've already laid the groundwork for what functions are and why they are so crucial in programming. Now, we're going to dive deep into the heart of how we *use* these functions – the **function call**. Think of a function as a recipe for a specific task. The function call is like actually *using* that recipe to prepare a dish. Without calling it, the recipe remains just a set of instructions on paper; it doesn't actually *do* anything.

This topic is foundational for achieving **Course Outcome 3 (CO3)**, which is all about utilizing functions to solve computational problems by breaking them down into modules. Understanding function calls is the key to making those modules work together. It also indirectly supports **CO1** (inferring problems and developing programs using basic constructs) as functions themselves are a fundamental construct.

Let's imagine you're building a small house. You have separate blueprints for the plumbing, the electrical work, and the structural framework. Each blueprint is like a function – it defines a specific set of tasks. When the construction crew needs to install the plumbing, they don't rewrite the entire plumbing plan from scratch; they simply "call" the plumbing blueprint to execute that set of tasks. Similarly, in C, we define a function once and then "call" it whenever we need its specific job done.

### What Exactly is a Function Call?

A function call is a C statement that transfers program control to a predefined function. It's how you tell the program, "Hey, go do this specific job that you already know how to do." When a function is called, the program execution pauses at the point of the call, and control is transferred to the named function. The called function then executes its statements. Once the called function finishes its work, control is returned back to the original program flow, right after the point where it was called.

This process is elegantly explained in textbooks like "Programming with C" by Byron S. Gottfried, which emphasizes that functions allow for modularity and reusability, and the call mechanism is how this modularity is put into action.

### The Anatomy of a Function Call

A function call in C has a very specific structure, and it's quite straightforward. You'll typically see it in this form:

```c
function_name(argument_list);
```

Let's break this down:

*   **`function_name`**: This is simply the name you gave your function when you defined it. It's like calling out the name of a specific team member to perform a task.
*   **`()`**: These parentheses are *mandatory*. They signify that you are indeed trying to invoke a function. Even if the function doesn't require any input, you *must* still include the empty parentheses.
*   **`argument_list` (optional)**: This is where you pass information *to* the function so it can work with specific data. Think of it as giving your team member the tools or materials they need. If the function requires data to operate, you supply it here, separated by commas.

Consider a simple example. Suppose we have a function called `calculate_sum` that adds two numbers.

**Function Definition:**

```c
int calculate_sum(int num1, int num2) {
    int sum = num1 + num2;
    return sum;
}
```

**Function Call:**

Now, to use this function, we would call it like this:

```c
int result;
result = calculate_sum(10, 20); // This is the function call!
```

Here, `calculate_sum` is the `function_name`, and `(10, 20)` is the `argument_list`. The values `10` and `20` are passed to the function `calculate_sum`.

### Passing Information: Arguments and Parameters

The terms "arguments" and "parameters" are often used interchangeably, but there's a subtle difference.

*   **Parameters**: These are the variables listed inside the parentheses in the function *definition*. They act as placeholders for the values that will be passed into the function when it's called. In our `calculate_sum` example, `int num1` and `int num2` are the parameters.
*   **Arguments**: These are the actual values or variables that you pass to the function when you make the function call. In `calculate_sum(10, 20)`, `10` and `20` are the arguments.

The number, type, and order of arguments in the function call must match the number, type, and order of parameters in the function definition. This is a critical point, and a mismatch here is a common source of errors. It's like trying to hand a chef a screwdriver when they asked for a whisk – it just won't work! Kernighan and Ritchie, in their seminal work "The C Programming Language," stress the importance of this correspondence for correct program execution.

### How Control Flows: The Journey of a Function Call

Let's trace the execution step-by-step when a function is called. This is fundamental to understanding how your C programs actually run.

1.  **Execution Halts at Call Site**: When the program encounters a function call (like `result = calculate_sum(10, 20);`), it stops executing the current sequence of statements.
2.  **Argument Evaluation**: Before control jumps to the function, the expressions in the argument list are evaluated. So, `10` and `20` are evaluated (they are already constants, but if they were variables or expressions, they'd be computed first).
3.  **Parameter Initialization**: The evaluated arguments are then copied into the corresponding parameters of the called function. So, `num1` inside `calculate_sum` gets the value `10`, and `num2` gets the value `20`. This is known as **pass-by-value**.
4.  **Function Body Execution**: Control is transferred to the first statement of the called function (`calculate_sum` in our example). The statements within the function's body are executed sequentially.
5.  **Return Statement**: When the function encounters a `return` statement, it stops executing. The expression following `return` (if any) is evaluated.
6.  **Value Returned**: The evaluated value from the `return` statement is sent back to the calling program.
7.  **Control Returns to Caller**: Program execution resumes in the calling function at the statement immediately following the function call. The returned value can then be used, perhaps assigned to a variable as we did with `result = ...`.

Let's visualize this with a slightly more involved scenario. Imagine a function `display_greeting` that prints a personalized message.

**Function Definition:**

```c
void display_greeting(char *name) {
    printf("Hello, %s! Welcome aboard.\n", name);
    // No return value needed here since the return type is void
}
```

**Calling the Function:**

```c
char userName[20] = "Alice";
display_greeting(userName); // Function call
printf("Greeting displayed.\n");
```

**Execution Flow:**

1.  The program is executing `printf("Greeting displayed.\n");`.
2.  It encounters `display_greeting(userName);`. Execution pauses.
3.  The argument `userName` is evaluated. Its value (the string "Alice") is passed.
4.  Control jumps to `display_greeting`. The parameter `name` is initialized with the value "Alice".
5.  Inside `display_greeting`, `printf("Hello, %s! Welcome aboard.\n", name);` is executed. It prints: "Hello, Alice! Welcome aboard."
6.  The `display_greeting` function finishes (since there are no more statements and no explicit `return` is needed for `void` functions).
7.  Control returns to the `main` function, right after the `display_greeting(userName);` line.
8.  The program continues execution with `printf("Greeting displayed.\n");`, printing: "Greeting displayed."

This sequential transfer of control is the essence of how functions enable structured programming. It’s a concept that underlies many of the examples in "Let Us C" by Yashavant Kanetkar, which often focuses on demonstrating modular programming with practical scenarios.

### Types of Function Calls

While the syntax looks similar, function calls can behave slightly differently based on what the function does with the values passed. The most common mechanism, as we've seen, is **pass-by-value**.

#### Pass-by-Value

In pass-by-value, the actual values of the arguments are copied into the function's parameters. Any modifications made to the parameters *inside* the function do **not** affect the original arguments in the calling function. This is the default behavior in C and is generally preferred for its safety and predictability. It’s like giving someone a photocopy of a document; they can write on the photocopy all they want, but the original document remains untouched.

```c
#include <stdio.h>

void increment(int value) {
    value = value + 1; // Modifying the parameter inside the function
    printf("Inside function: value = %d\n", value);
}

int main() {
    int my_number = 5;
    printf("Before calling function: my_number = %d\n", my_number);
    increment(my_number); // Passing a copy of my_number
    printf("After calling function: my_number = %d\n", my_number); // my_number remains unchanged
    return 0;
}
```

**Output:**

```
Before calling function: my_number = 5
Inside function: value = 6
After calling function: my_number = 5
```

Notice how `my_number` in `main` is still `5` even after `increment` was called. This is the power of pass-by-value! This concept is fundamental to understanding how data is manipulated across different program modules, as Herbert Schildt explains in "C: The Complete Reference."
