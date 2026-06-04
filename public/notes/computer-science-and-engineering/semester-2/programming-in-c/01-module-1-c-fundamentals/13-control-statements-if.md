---
title: "Control Statements - if"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e36"
status: "completed"
scrapedAt: "2026-05-20T16:35:08.321Z"
---
# PROGRAMMING IN C: Module 1: C Fundamentals
## Topic: Control Statements - The `if` Statement

Welcome, everyone, to our exploration of C programming! Today, we're diving into a really fundamental aspect of making our programs smart and responsive: **Control Statements**. Think of them as the decision-makers in your code. Without them, your program would just run from top to bottom, no matter what. Control statements allow us to guide the flow of execution, making our programs react to different situations.

In this session, we're going to focus on the most basic yet incredibly powerful control statement: the **`if` statement**. This is where your programs start to learn how to make choices.

### Why Do We Need Decisions in Programming?

Imagine you're writing a program to check if a student has passed an exam. What do you need? You need to look at their score and decide: "If the score is greater than or equal to, say, 40, then the student has passed. Otherwise, they've failed." This "if... then... otherwise" logic is precisely what control statements help us implement in C.

This ability to make decisions and execute different blocks of code based on certain conditions is crucial for solving a vast range of computational problems. It directly relates to our **Course Outcome 1 (CO1): Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.** Every time you use an `if` statement, you're taking a step towards building more intelligent and problem-solving programs.

### Understanding the `if` Statement: The Basics

The `if` statement in C allows a program to execute a certain piece of code **only if** a specified condition is true. If the condition is false, that piece of code is skipped.

Let's break down its structure. The fundamental syntax looks like this:

```c
if (condition) {
    // Code to be executed if the condition is true
}
```

Let's unpack this:

*   **`if`**: This is a keyword in C. It signals the start of a conditional check.
*   **`(condition)`**: This is where the magic happens! The condition is an expression that evaluates to either true or false. In C, any non-zero value is considered true, and zero is considered false. We'll use **relational operators** (like `>`, `<`, `==`, `!=`, `>=`, `<=`) and **logical operators** (like `&&`, `||`, `!`) to build these conditions. Think of these operators as your tools for asking questions of your data.
*   **`{ ... }`**: These curly braces define a **block of code**. Any statements placed within these braces will be executed if the `condition` evaluates to true. If there's only a single statement to be executed, the braces are optional, but it's generally a good practice to include them to avoid confusion and potential errors, especially as your programs grow.

**Remember this:** The `if` statement is all about conditional execution. It’s like saying, "If this situation is happening, then do this."

#### Example: Checking for a Positive Number

Let's say we want to write a small C program that tells us if a number entered by the user is positive.

```c
#include <stdio.h>

int main() {
    int number;

    printf("Enter an integer: ");
    scanf("%d", &number);

    // Here's our if statement!
    if (number > 0) {
        printf("The number %d is positive.\n", number);
    }

    printf("Program finished.\n"); // This line will always execute

    return 0;
}
```

In this example, the `condition` is `number > 0`.
*   If the user enters `5`, `number > 0` is true, so the message "The number 5 is positive." will be printed.
*   If the user enters `-3`, `number > 0` is false, so the message is skipped, and only "Program finished." is printed.
*   If the user enters `0`, `number > 0` is also false, so the message is skipped.

Notice how the `if` statement controls whether a specific line of output appears. This is a direct application of CO1, where we're inferring a problem (identifying positive numbers) and using a basic construct (`if`) to solve it.

### The `if-else` Statement: Making a Choice

What if we want to do something when the condition is *false*? That's where the **`if-else` statement** comes in. It provides a way to execute one block of code if the condition is true, and a *different* block of code if the condition is false. It’s the complete "if... then... else..." structure.

The syntax for `if-else` is:

```c
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}
```

Let's revisit our student passing example.

#### Example: Student Pass/Fail

```c
#include <stdio.h>

int main() {
    int score;

    printf("Enter the student's score: ");
    scanf("%d", &score);

    // The if-else statement!
    if (score >= 40) {
        printf("Congratulations! You passed the exam.\n");
    } else {
        printf("Sorry, you did not pass the exam. Better luck next time!\n");
    }

    return 0;
}
```

Here:
*   If `score` is `65`, `score >= 40` is true. The first block executes, printing "Congratulations! You passed the exam."
*   If `score` is `30`, `score >= 40` is false. The `else` block executes, printing "Sorry, you did not pass the exam. Better luck next time!"

The `if-else` statement is incredibly useful for creating programs that offer distinct paths of execution. This is a fundamental concept for achieving CO1, as it allows us to handle mutually exclusive outcomes of a condition.

### The `if-else if-else` Statement: Chaining Decisions

What happens when we have more than two possible outcomes? For instance, grading a student where we have A, B, C, D, and Fail. We need to check multiple conditions sequentially. This is where the **`if-else if-else` ladder** (or chain) is invaluable.

The structure looks like this:

```c
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition1 is false AND condition2 is true
} else if (condition3) {
    // Code if condition1 and condition2 are false AND condition3 is true
}
// ... you can have many else if blocks ...
else {
    // Code if all preceding conditions are false
}
```

Let's apply this to a grading system.

#### Example: Assigning Grades

```c
#include <stdio.h>

int main() {
    int marks;
    char grade;

    printf("Enter marks (0-100): ");
    scanf("%d", &marks);

    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 50) {
        grade = 'D';
    } else {
        grade = 'F'; // Default case if none of the above are true
    }

    printf("Your grade is: %c\n", grade);

    return 0;
}
```

In this `if-else if-else` structure:
*   The conditions are evaluated from top to bottom.
*   The **first** condition that evaluates to true will have its corresponding block of code executed, and then the entire `if-else if-else` structure is exited.
*   If *none* of the `if` or `else if` conditions are true, and an `else` block is present, that `else` block will be executed.

This is a very common pattern in programming. It's efficient because once a true condition is found, no further checks are made. This type of structured decision-making is a cornerstone of CO1, enabling us to build programs that handle complex, multi-branched logic.

**Important Note on `if-else if`:** The `else if` is not a separate statement; it's part of the `if` statement. The `else` at the end is optional.

### Nested `if` Statements: Decisions Within Decisions

Sometimes, the action to be taken when a condition is true might itself involve another decision. This is where we use **nested `if` statements**. That is, an `if` statement placed inside another `if` or `else` block.

The structure can get a bit complex, so proper indentation is vital for readability.

```c
if (outer_condition) {
    // Code if outer_condition is true

    if (inner_condition) {
        // Code if outer_condition is true AND inner_condition is true
    } else {
        // Code if outer_condition is true AND inner_condition is false
    }
} else {
    // Code if outer_condition is false
}
```

#### Example: Simple ATM Withdrawal Logic

Let's imagine a simplified ATM scenario. We check if the user has sufficient balance *and* if they are withdrawing a positive amount.

```c
#include <stdio.h>

int main() {
    float balance = 1000.0;
    float withdrawal_amount;

    printf("Enter the amount to withdraw: $");
    scanf("%f", &withdrawal_amount);

    if (withdrawal_amount > 0) { // First check: is the amount valid?
        if (withdrawal_amount <= balance) { // Second check: do we have enough money?
            balance = balance - withdrawal_amount;
            printf("Withdrawal successful. Remaining balance: $%.2f\n", balance);
        } else {
            printf("Insufficient balance. Cannot withdraw $%.2f.\n", withdrawal_amount);
        }
    } else {
        printf("Invalid withdrawal amount. Please enter a positive number.\n");
    }

    return 0;
}
```

In this example, the decision to check the balance only happens *after* we've confirmed that the `withdrawal_amount` is positive. This nesting allows for very granular control over program flow, essential for building sophisticated applications that tackle CO1 problems.

**Pitfall to Avoid:** With nested `if`s, it’s easy to lose track of which `else` belongs to which `if`. Always use consistent indentation and consider using braces `{}` even for single statements to improve clarity.

### Relational and Logical Operators: Building Conditions

As we've seen, the `if` statement relies on conditions. These conditions are built using **relational operators** and **logical operators**.

**Relational Operators:** These compare two values.

| Operator | Meaning           | Example    |
| :------- | :---------------- | :--------- |
| `>`      | Greater than      | `a > b`    |
| `<`      | Less than         | `a < b`    |
| `==`     | Equal to          | `a == b`   |
| `!=`     | Not equal to      | `a != b`   |
| `>=`     | Greater than or equal to | `a >= b`   |
| `<=`     | Less than or equal to | `a <= b`   |

**Crucial Point:** Remember the difference between the assignment operator `=` and the equality operator `==`. A common mistake is using `=` inside an `if` condition, which usually leads to unexpected behavior because it assigns a value instead of comparing. For instance, `if (x = 5)` will assign `5` to `x`, and since `5` is non-zero (true), the block will execute, regardless of `x`'s original value. Always use `==` for comparison!

**Logical Operators:** These combine or modify Boolean expressions.

| Operator | Meaning                      | Example                 |
| :------- | :--------------------------- | :---------------------- |
| `&&`     | Logical AND                  | `(a > 5) && (b < 10)`   |
| `||`     | Logical OR                   | `(x == 0) || (y == 0)`  |
| `!`      | Logical NOT                  | `!(z > 10)`             |

The logical operators are perfect for creating more complex conditions, allowing us to build sophisticated decision-making logic. For example, to check if a number is between 10 and 20 (inclusive): `if (num >= 10 && num <= 20)`. This directly contributes to our ability to solve complex problems as per CO1.

### `if` Statement and the `switch` Statement

While we are focusing on `if` today, it's worth noting that for checking a single variable against multiple specific constant values, the `switch` statement is often a more readable and sometimes more efficient alternative. However, the `if-else if-else` ladder can handle a much wider range of conditions, including range checks and comparisons involving multiple variables, which `switch` cannot easily do. Understanding `if` is foundational, and it's always the go-to for general-purpose conditional logic.

### Summary and Key Takeaways

The `if` statement and its variations (`if-else`, `if-else if-else`, nested `if`s) are the bedrock of decision-making in C. They allow your programs to react dynamically to input and changing conditions.

*   **`if (condition)`**: Executes code only if `condition` is true.
*   **`if (condition) { ... } else { ... }`**: Executes one block if true, another if false.
*   **`if-else if-else` ladder**: Checks multiple conditions sequentially.
*   **Nested `if`s**: Allows decisions within decisions for complex logic.
*   **Conditions** are built using **relational** (`>`, `<`, `==`, etc.) and **logical** (`&&`, `||`, `!`) operators.
*   **Crucial:** Always use `==` for equality comparison, not `=`.

Mastering these forms of the `if` statement is essential for fulfilling **CO1**, as it empowers you to translate real-world problems requiring choices into working C code.

---

### Sample Questions with Answers

**1. Conceptual Question:**

Explain the difference between the `=` operator and the `==` operator in C, and provide an example of how using the wrong one in an `if` statement can lead to unexpected behavior.

**Answer:**

The `=` operator is the **assignment operator**. It assigns the value on its right to the variable on its left. For example, `x = 10;` assigns the value `10` to the variable `x`.

The `==` operator is the **equality comparison operator**. It checks if the value on its left is equal to the value on its right and evaluates to true (1) if they are equal, and false (0) if they are not. For example, `x == 10;` checks if the current value of `x` is `10`.

**Unexpected Behavior Example:**

```c
#include <stdio.h>

int main() {
    int number = 5;

    // Incorrect use of '='
    if (number = 10) {
        printf("This will print even if number was not 10 initially.\n");
    } else {
        printf("This will not print.\n");
    }

    printf("The value of number is now: %d\n", number);

    return 0;
}
```

**Reasoning:**
In the condition `if (number = 10)`, the assignment `number = 10` is performed first. This assignment evaluates to the value `10`. Since `10` is a non-zero value, it's treated as true in a boolean context. Therefore, the `if` block executes, printing "This will print even if number was not 10 initially." More importantly, the value of `number` itself is changed to `10`.

The correct way to check if `number` is `10` would be:
```c
if (number == 10) { ... }
```

**2. Exam-Oriented Question:**

Write a C program that takes an integer as input and prints whether the number is "Even" or "Odd".

**Answer:**

```c
#include <stdio.h>

int main() {
    int num;

    printf("Enter an integer: ");
    scanf("%d", &num);

    // An integer is even if it is perfectly divisible by 2
    // The modulo operator (%) gives the remainder of a division
    if (num % 2 == 0) {
        printf("%d is Even\n", num);
    } else {
        printf("%d is Odd\n", num);
    }

    return 0;
}
```

**Reasoning:**
*   The program prompts the user to enter an integer.
*   The `scanf` function reads the integer into the `num` variable.
*   The core logic is `if (num % 2 == 0)`. The modulo operator (`%`) calculates the remainder when `num` is divided by `2`.
*   If the remainder is `0` (meaning `num % 2 == 0` is true), the number is even, and the program prints "%d is Even".
*   Otherwise, if the remainder is not `0` (which for integers divided by 2 will always be 1), the `else` block is executed, and the program prints "%d is Odd". This utilizes `if-else` and the modulo operator to solve a common computational problem, aligning with **CO1**.

**3. Conceptual Question:**

Consider the following `if-else if-else` structure. What will be printed if the input value for `choice` is `2`?

```c
int choice = 2;

if (choice == 1) {
    printf("Option 1 selected.\n");
} else if (choice == 2) {
    printf("Option 2 selected.\n");
} else if (choice == 3) {
    printf("Option 3 selected.\n");
} else {
    printf("Invalid choice.\n");
}
```

**Answer:**

"Option 2 selected."

**Reasoning:**
The conditions are evaluated in sequence:
1.  `choice == 1`: `2 == 1` is false.
2.  `choice == 2`: `2 == 2` is true. The code block within this `else if` is executed, printing "Option 2 selected.".
3.  Since a true condition was found, the rest of the `else if` and the final `else` blocks are skipped. The program exits the `if-else if-else` structure. This demonstrates how the `if-else if-else` ladder works by executing the first true condition it encounters.

**4. Exam-Oriented Question:**

Trace the output of the following C code snippet:

```c
#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 15;

    if (a > b) {
        if (b > c) {
            printf("A");
        } else {
            printf("B");
        }
    } else {
        if (c > a) {
            printf("C");
        } else {
            printf("D");
        }
    }
    return 0;
}
```

**Answer:**

C

**Reasoning:**
Let's trace the execution:
1.  Initialize `a = 10`, `b = 20`, `c = 15`.
2.  The outermost `if` condition is `a > b` (is `10 > 20`?). This is false.
3.  Since the outer `if` condition is false, the program enters the outer `else` block.
4.  Inside the outer `else` block, the first condition is `c > a` (is `15 > 10`?). This is true.
5.  The `if` block associated with `c > a` is executed, which prints "C".
6.  The program then exits the entire `if-else if-else` structure. The inner `else` block (printing "D") is skipped.
7.  The final output is "C". This is an example of nested `if` statements, demonstrating how to analyze program flow with multiple levels of decision-making, relevant to **CO1**.
