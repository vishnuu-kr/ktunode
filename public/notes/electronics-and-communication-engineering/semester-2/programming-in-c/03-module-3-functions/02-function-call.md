---
title: "Function call"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da370"
status: "completed"
scrapedAt: "2026-05-23T17:42:11.962Z"
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

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


#### Pass-by-Reference (Using Pointers)

Although C primarily uses pass-by-value, we can *simulate* pass-by-reference using pointers. This allows a function to modify the original variable in the calling function. To achieve this, you pass the *address* of the variable as an argument, and the function parameter is declared as a pointer.

Let’s revisit the `increment` example, but this time modify the original variable.

```c
#include <stdio.h>

void increment_by_reference(int *ptr_value) { // Parameter is a pointer
    *ptr_value = *ptr_value + 1; // Dereferencing the pointer to modify the original value
    printf("Inside function: value pointed to = %d\n", *ptr_value);
}

int main() {
    int my_number = 5;
    printf("Before calling function: my_number = %d\n", my_number);
    increment_by_reference(&my_number); // Passing the ADDRESS of my_number
    printf("After calling function: my_number = %d\n", my_number); // my_number is now changed!
    return 0;
}
```

**Output:**

```
Before calling function: my_number = 5
Inside function: value pointed to = 6
After calling function: my_number = 6
```

Here, `&my_number` passes the memory address of `my_number`. The `increment_by_reference` function receives this address in its `ptr_value` parameter. By using the dereference operator `*` (i.e., `*ptr_value`), the function can access and modify the value stored at that address, which is the original `my_number` in `main`. This technique is essential for tasks like swapping two numbers or modifying array elements within a function, directly supporting **CO4** (developing C programs using pointers).

### Why Function Calls are Crucial for Course Outcomes

Let's explicitly link our understanding of function calls back to the course outcomes:

*   **CO3 (Utilize functions to find solution to computational problems by dividing it into a number of modules and abstract data types.)**: Function calls are the *mechanism* by which we connect these modules. Without calling a function, a module remains isolated. We define a function (a module) to perform a specific task (like sorting an array), and then we *call* that function from `main` or another function to execute that task. This allows us to abstract away complex logic. For example, instead of writing a complex sorting algorithm directly in `main`, we write it once as a `sort_array` function and then simply *call* `sort_array(my_array, size)` whenever we need to sort. This directly addresses the "dividing into modules" aspect.
*   **CO1 (Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.)**: Functions are a fundamental construct. Developing programs often involves breaking down a large problem into smaller, manageable functions. The ability to call these functions efficiently is key to building the overall program logic, which relies on basic constructs and control statements.
*   **CO4 (Develop C programs using pointers for dynamic data handling.)**: As we saw with pass-by-reference, function calls involving pointers are critical for dynamic data manipulation. If you need a function to modify an array or an object dynamically, you'll likely pass pointers, demonstrating the interplay between pointers and function calls.

### Common Pitfalls and Exam Focus Areas

When preparing for exams, keep these points in mind regarding function calls:

1.  **Mismatched Arguments**: Ensure the number, type, and order of arguments in the call match the parameters in the definition. A classic error!
2.  **Missing Parentheses**: Forgetting the `()` after a function name when calling it is a common mistake. Remember, `function_name;` is not a call, but `function_name();` or `function_name(args);` is.
3.  **Pass-by-Value vs. Pass-by-Reference**: Understand when and why you would use pointers to achieve pass-by-reference. Exams often test your ability to predict output based on whether a function modifies its arguments or not.
4.  **Return Type and Return Value**: If a function is declared to return a value (e.g., `int calculate_sum(...)`), ensure the calling code properly receives and uses that returned value (e.g., `result = calculate_sum(...)`). If a function is `void`, it should not have a `return` statement with a value, or if it does, it should be `return;` to simply exit the function.
5.  **Function Prototypes**: While not strictly part of the *call* itself, remember that for a function to be called before its definition (a common scenario when functions are organized into multiple files or when `main` calls functions defined later), a **function prototype** (or declaration) must precede the call. This tells the compiler about the function's signature (name, return type, and parameter types) so it can correctly check the call. E. Balagurusamy's "Programming In Ansi C" often highlights this necessity for program structure.

### Thinking in Terms of Modules

Let's do a quick mental exercise. Suppose you need to write a program that calculates the area of a circle, a rectangle, and a triangle. How would you approach this using functions?

1.  **Problem Decomposition**: We can see three distinct tasks: calculating circle area, rectangle area, and triangle area.
2.  **Function Design**: We can create a function for each:
    *   `double circle_area(double radius)`
    *   `double rectangle_area(double length, double width)`
    *   `double triangle_area(double base, double height)`
3.  **Function Calls**: In our `main` function, we'd prompt the user for inputs and then *call* these functions with the appropriate values:
    *   `double r = 5.0; double ca = circle_area(r);`
    *   `double l = 4.0, w = 6.0; double ra = rectangle_area(l, w);`
    *   `double b = 3.0, h = 7.0; double ta = triangle_area(b, h);`

This modular approach, enabled by function calls, makes the code cleaner, easier to understand, and more maintainable. It directly fulfills the aim of **CO3**.

### Summary and Key Takeaways

The function call is the engine that drives our modular C programs. It's the explicit instruction to execute a defined block of code. Remember:

*   A function call involves the function's name followed by parentheses `()`.
*   Arguments are passed within the parentheses to provide data to the function.
*   Parameters in the function definition receive these arguments.
*   **Pass-by-value** is the default and safest way, copying argument values.
*   **Pass-by-reference** (using pointers) allows functions to modify original variables.
*   The call transfers control, and control returns after the function completes.
*   Matching the signature of arguments and parameters is crucial for correct execution.

Mastering the function call is mastering the art of making your C programs dynamic and organized.

---

## Sample Questions and Answers

**Question 1 (Conceptual):** What is the primary purpose of a function call in C?

**Answer:** The primary purpose of a function call is to transfer program control to a defined function, allowing it to execute its specific set of instructions. It's the mechanism by which modularity is achieved, enabling code reuse and breaking down complex problems into smaller, manageable units.

**Reasoning:** This question tests the fundamental understanding of *why* we use function calls. The answer focuses on control transfer and modularity, key aspects of functions as discussed.

**Question 2 (Exam-Oriented - Output Prediction):**

```c
#include <stdio.h>

void modify_value(int a, int b) {
    a = a + 5;
    b = b * 2;
    printf("Inside modify_value: a = %d, b = %d\n", a, b);
}

int main() {
    int x = 10, y = 20;
    printf("Before call: x = %d, y = %d\n", x, y);
    modify_value(x, y);
    printf("After call: x = %d, y = %d\n", x, y);
    return 0;
}
```
Predict the output of the above program.

**Answer:**
```
Before call: x = 10, y = 20
Inside modify_value: a = 15, b = 40
After call: x = 10, y = 20
```

**Reasoning:** The `modify_value` function uses **pass-by-value**. When `modify_value(x, y)` is called, copies of `x` (10) and `y` (20) are passed to parameters `a` and `b`, respectively. Inside the function, `a` becomes `15` and `b` becomes `40`. However, these changes are only to the local copies within `modify_value`. Back in `main`, the original `x` and `y` remain unchanged at `10` and `20`. This demonstrates a clear understanding of pass-by-value.

**Question 3 (Conceptual - Knowledge Level K3):** Explain the difference between parameters and arguments in the context of a function call and why their types and number must match.

**Answer:**
*   **Parameters** are the variables declared in the function's definition signature (e.g., `int num1`, `char* name`). They act as placeholders for the data that the function expects to receive.
*   **Arguments** are the actual values or expressions that are passed to the function when it is called (e.g., `10`, `"Alice"`).

The number, type, and order of arguments in the function call **must match** the parameters in the function definition to ensure:
1.  **Correct Data Interpretation:** The function knows how to interpret the incoming data. If you pass an integer where a character is expected, the interpretation will be wrong, leading to unexpected behavior or errors.
2.  **Accurate Data Transfer:** The compiler needs to know how to pass the data. For pass-by-value, it knows how many bytes to copy and how to represent them. For pass-by-reference (using pointers), it knows to pass memory addresses.
3.  **Predictable Program Behavior:** Matching ensures that the function operates on the intended data, making the program's behavior predictable and reducing bugs. A mismatch can lead to memory corruption, crashes, or incorrect results, as the function might try to read or write data in unintended memory locations.

**Reasoning:** This question probes deeper into the mechanics of data transfer, directly linking to **CO3** and **CO4** (if pointers were discussed in the answer). It requires understanding the roles of parameters and arguments and the implications of mismatches, showcasing knowledge at the K3 level (understanding).

**Question 4 (Conceptual - Exam Focus):** If a function is defined as `void process_data(int *data_ptr)`, what does the `*data_ptr` in the definition signify, and how is this function typically called?

**Answer:** The `*data_ptr` in the function definition `void process_data(int *data_ptr)` signifies that `data_ptr` is a **pointer** to an integer. This means the function expects to receive a memory address of an integer variable.

This type of parameter indicates that the function is designed to operate using **pass-by-reference**. It allows the function to directly access and potentially modify the original integer variable whose address was passed.

To call this function, you would pass the **address** of an integer variable using the address-of operator `&`:

```c
int my_variable = 100;
process_data(&my_variable); // Calling the function by passing the address of my_variable
```

**Reasoning:** This question specifically targets the understanding of pointer usage within function calls, which is crucial for **CO4**. It tests the ability to interpret pointer declarations in function signatures and the correct syntax for calling such functions.