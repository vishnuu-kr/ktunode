---
title: "if-else"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e37"
status: "completed"
scrapedAt: "2026-05-20T16:35:09.046Z"
---
Welcome, everyone! Today, we're diving into a fundamental building block of programming: the `if-else` statement in C. This is where our programs start to make decisions, to react differently based on the data they're working with. It's the gateway to creating truly intelligent and interactive software.

You'll recall from our earlier discussions that computers, at their core, follow instructions precisely. But what if we want our program to do one thing if a certain condition is met, and another thing if it's not? That's precisely what `if-else` allows us to do. Think of it like navigating through life – you make choices all the time. If it's raining, you take an umbrella; otherwise, you leave it at home. The `if-else` statement in C is the programming equivalent of that decision-making process.

This topic is absolutely crucial for achieving **Course Outcome 1 (CO1): "Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements."** Without `if-else`, our programs would be rigid, executing the same sequence of steps every single time. By mastering `if-else`, we gain the power to imbue our programs with the ability to adapt and respond to varying circumstances, a key aspect of problem-solving in C.

Let's start by understanding the core of it all: **conditional execution**.

## Understanding Conditional Execution with `if-else`

At its heart, programming is about solving problems. Many problems require us to make decisions. For example, in a student grading system, we need to decide if a student has passed or failed based on their marks. If the marks are greater than or equal to a passing threshold (say, 40), the student passes. If not, they fail. This "if-then-else" logic is what `if-else` statements in C implement.

### The Basic `if` Statement: The "If This, Then That" Scenario

Let's begin with the simplest form: the `if` statement. This is for situations where you only want to do something *if* a specific condition is true.

**Syntax:**

```c
if (condition) {
    // Code to be executed if the condition is true
}
```

Here, `condition` is an expression that evaluates to either true (non-zero) or false (zero). If the `condition` is true, the statements within the curly braces `{}` are executed. If the `condition` is false, those statements are simply skipped, and the program continues with whatever comes after the `if` block.

**Analogy:** Imagine you're at a buffet. You see a dish you like. *If* you like it (the condition), *then* you take a portion. If you don't like it, you just move on to the next dish.

**Example:** Let's say we want to check if a student has passed a subject.

```c
#include <stdio.h>

int main() {
    int marks = 75;

    if (marks >= 40) {
        printf("Congratulations! You have passed.\n");
    }

    printf("End of program.\n"); // This will always print

    return 0;
}
```

In this example, `marks >= 40` is our condition. Since `marks` is 75, which is indeed greater than or equal to 40, the condition is true, and the message "Congratulations! You have passed." will be printed. The program then proceeds to print "End of program.".

What if `marks` was 30?

```c
#include <stdio.h>

int main() {
    int marks = 30;

    if (marks >= 40) {
        printf("Congratulations! You have passed.\n");
    }

    printf("End of program.\n"); // This will always print

    return 0;
}
```

Here, `marks >= 40` (30 >= 40) is false. So, the `printf` statement inside the `if` block is skipped. The program directly jumps to "End of program.". See? Our program is already making a decision!

**Textbook Connection:** Both Gottfried's "Programming with C" and Hanly & Koffman's "Problem Solving and Program Design in C" emphasize that the `if` statement is the most basic form of selection. They'd point out that the condition is typically a relational expression (like `>=`, `<`, `==`, `!=`, `<=`, `>=`) or a logical expression.

### The `if-else` Statement: The "If This, Then That; Otherwise, Do Something Else" Scenario

Now, what if we want our program to do one thing if the condition is true, and a *different* thing if the condition is false? This is where the `else` part comes in.

**Syntax:**

```c
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}
```

If the `condition` is true, the statements in the first block (under `if`) are executed, and the `else` block is skipped. If the `condition` is false, the `if` block is skipped, and the statements in the `else` block are executed.

**Analogy:** Back to the buffet. *If* you like the dish (condition is true), you take a portion. *Else* (if you don't like it), you might decide to skip that entire section of the buffet and head straight for dessert.

**Example:** Let's refine our student passing scenario.

```c
#include <stdio.h>

int main() {
    int marks = 30;

    if (marks >= 40) {
        printf("Congratulations! You have passed.\n");
    } else {
        printf("Sorry, you did not pass. Please try again.\n");
    }

    printf("End of assessment.\n"); // This will always print

    return 0;
}
```

If `marks` is 30, `marks >= 40` is false. So, the `if` block is skipped, and the `else` block executes, printing "Sorry, you did not pass. Please try again.". Then, "End of assessment." is printed.

If `marks` were 75, the `if` block would execute ("Congratulations! You have passed."), and the `else` block would be skipped.

**Key Point:** The `if` and `else` blocks are mutually exclusive – only one of them will execute based on the condition. This is a fundamental concept for understanding program flow.

### The `if-else if-else` Ladder: Handling Multiple Conditions

What happens when you have more than two possible outcomes? For instance, grading students might involve not just passing or failing, but also categories like "Distinction," "First Class," "Second Class," "Pass," and "Fail." This requires checking a series of conditions in a specific order. This is where the `if-else if-else` structure, often called an "else-if ladder," comes in handy.

**Syntax:**

```c
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition1 is false AND condition2 is true
} else if (condition3) {
    // Code if condition1 and condition2 are false AND condition3 is true
}
// ... and so on ...
else {
    // Code if ALL preceding conditions are false (optional)
}
```

**How it works:** The conditions are evaluated from top to bottom. The first condition that evaluates to true will have its corresponding block of code executed, and then the entire `if-else if-else` structure is exited. If none of the `if` or `else if` conditions are true, and there is a final `else` block, then that `else` block will be executed.

**Analogy:** Imagine you're looking for a specific book in a library. You first check the "New Arrivals" shelf. *If* it's there, you take it. *Else if* it's not on "New Arrivals," you check the "Popular Fiction" section. *Else if* it's not there either, you check the "Classics" section. *Else* (if it's not in any of those), you might ask the librarian.

**Example:** Let's assign grades based on marks.

```c
#include <stdio.h>

int main() {
    int marks = 85; // Let's test with different values

    if (marks >= 90) {
        printf("Grade: A\n");
    } else if (marks >= 80) {
        printf("Grade: B\n");
    } else if (marks >= 70) {
        printf("Grade: C\n");
    } else if (marks >= 40) {
        printf("Grade: D (Pass)\n");
    } else {
        printf("Grade: F (Fail)\n");
    }

    return 0;
}
```

Let's trace this:
*   If `marks` is 85:
    *   `marks >= 90` (85 >= 90) is false.
    *   The program moves to the next `else if`. `marks >= 80` (85 >= 80) is true!
    *   "Grade: B" is printed.
    *   The rest of the `else if` and `else` blocks are skipped.

*   If `marks` is 65:
    *   `marks >= 90` is false.
    *   `marks >= 80` is false.
    *   `marks >= 70` (65 >= 70) is false.
    *   `marks >= 40` (65 >= 40) is true!
    *   "Grade: D (Pass)" is printed. The rest is skipped.

*   If `marks` is 35:
    *   All `if` and `else if` conditions (`>=90`, `>=80`, `>=70`, `>=40`) are false.
    *   The final `else` block executes, printing "Grade: F (Fail)".

**Important Note on Order:** The order of conditions in an `if-else if` ladder is critical. In our grading example, if we had `if (marks >= 40)` first, then any mark above 40 (like 85) would satisfy that condition, and the program would print "Grade: D (Pass)" and stop, never even checking if it deserved a 'B' or 'A'. Always arrange your conditions from the most specific or highest value to the least specific or lowest value. This is a common pitfall in exams!

**Reference:** Brian Kernighan and Dennis Ritchie, in "The C Programming Language," would likely present this structure as a way to implement multi-way branching, highlighting its efficiency and readability for sequential condition checking.

### Nested `if` Statements: Decisions within Decisions

Sometimes, you might need to make a decision based on a condition, and then, *within* that decision, make another decision. This is achieved through "nested `if` statements."

**Syntax:**

```c
if (outer_condition) {
    // Code for outer condition being true

    if (inner_condition) {
        // Code if both outer and inner conditions are true
    } else {
        // Code if outer is true but inner is false
    }
} else {
    // Code if outer condition is false
}
```

**Analogy:** Let's say you're deciding what to wear. *If* it's cold outside (outer condition), *then* you decide whether to wear a jacket or a sweater. *If* it's very cold (inner condition), you wear a jacket. *Else* (if it's just cool), you wear a sweater. *Else* (if it's not cold), you wear a t-shirt.

**Example:** Checking if a number is positive, negative, or zero, and then if it's even or odd.

```c
#include <stdio.h>

int main() {
    int num = -10;

    if (num >= 0) {
        // Number is non-negative
        if (num == 0) {
            printf("The number is zero.\n");
        } else {
            // Number is positive
            printf("The number is positive.\n");
            if (num % 2 == 0) {
                printf("It is also an even number.\n");
            } else {
                printf("It is also an odd number.\n");
            }
        }
    } else {
        // Number is negative
        printf("The number is negative.\n");
        if (num % 2 == 0) {
            printf("It is also an even number.\n");
        } else {
            printf("It is also an odd number.\n");
        }
    }

    return 0;
}
```

In this example:
*   If `num` is -10:
    *   `num >= 0` is false.
    *   The `else` block executes: "The number is negative." is printed.
    *   Then, the nested `if (num % 2 == 0)` checks -10 % 2, which is 0 (true).
    *   "It is also an even number." is printed.

*   If `num` is 15:
    *   `num >= 0` is true.
    *   `num == 0` is false, so the `else` block under the inner `if` executes: "The number is positive." is printed.
    *   Then, the next nested `if (num % 2 == 0)` checks 15 % 2, which is 1 (false).
    *   The `else` block under that executes: "It is also an odd number." is printed.

Nested `if` statements can make code complex quickly. While powerful, it's good practice to keep nesting levels reasonable for readability. Sometimes, you can simplify nested structures using logical operators (`&&` for AND, `||` for OR) which we'll cover later, or by restructuring the logic.

**Recall from Textbooks:** Hanly & Koffman often caution against excessive nesting, suggesting it can reduce program clarity. They might recommend breaking down complex decision logic into separate functions if nesting becomes too deep.

### Omitting Braces: A Subtle Trap!

You might see `if` or `else` statements without curly braces `{}`. This is perfectly valid in C, but it applies *only to the very next statement*.

**Example:**

```c
if (x > 10)
    printf("x is greater than 10.\n"); // Only this line is part of the if
printf("This line executes regardless.\n");
```

If `x` is 5, the first `printf` is skipped. If `x` is 15, the first `printf` executes, and *then* the second `printf` executes.

**The Danger:**

```c
if (x > 10)
    printf("x is greater than 10.\n");
    printf("This line is NOT part of the if, even though it's indented!\n");
```

In the above, if `x` is 5, *neither* of those `printf` statements will execute, because only the first one is conditionally dependent. However, if `x` is 15, *both* will execute. This is often not the intended behavior.

**Recommendation:** Always use curly braces `{}` for `if` and `else` blocks, even if there's only one statement. It improves readability and prevents subtle, hard-to-find bugs. This is a golden rule to live by! Yashavant Kanetkar, in "Let us C," often stresses the importance of good coding practices to avoid such pitfalls.

### Truth Values in C: What Does "True" and "False" Mean?

In C, there isn't a strict `boolean` type like in some other languages (though C99 introduced `_Bool` and `stdbool.h`). Instead, the concept of truth and falsehood is represented by integers:

*   **Zero (0):** Represents `false`.
*   **Any Non-Zero Value (positive or negative):** Represents `true`.

This is why expressions like `marks >= 40` work. If `marks` is 75, `marks >= 40` evaluates to `1` (true). If `marks` is 30, it evaluates to `0` (false).

Even a simple variable can be used as a condition:

```c
int flag = 1; // Represents true

if (flag) {
    printf("The flag is set.\n"); // This will execute
}

int counter = 0; // Represents false

if (counter) {
    printf("The counter is set.\n"); // This will NOT execute
}
```

This understanding is fundamental, as highlighted by Kernighan and Ritchie. It allows for flexible condition checking.

### Connecting to Course Outcomes:

*   **CO1 (Infer a computational problem and develop C programs using basic constructs, including control statements):** The `if-else` and `if-else if-else` structures are the primary tools for implementing decision-making logic, directly enabling us to solve problems that require conditional execution. From simple checks like "is the number positive?" to complex grading systems, these constructs are indispensable.
*   **CO2 (Develop C programs using arrays, matrices, and strings):** You'll often use `if-else` to process elements within arrays (e.g., "if the element is greater than 10, do X"), manipulate strings (e.g., "if the first character is 'A', do Y"), or check conditions within matrices.
*   **CO3 (Utilize functions to find solution...):** Functions themselves often contain `if-else` statements to determine what value to return or what action to perform based on their input parameters.

### Exam Preparation Tips:

1.  **Trace Execution:** Be prepared to trace the execution of code snippets with `if-else` statements, given specific input values. This is a very common exam question.
2.  **Order of Conditions:** Pay close attention to the order of conditions in `if-else if-else` ladders. Misordering is a frequent source of errors and is often tested.
3.  **Braces:** Understand the implication of using or not using braces. Be ready to identify potential bugs related to missing braces.
4.  **Logical Operators:** While we haven't covered them deeply yet, `if` statements often involve logical operators (`&&`, `||`, `!`) to combine multiple conditions. Be sure to review those when they are introduced.
5.  **Relational Operators:** Ensure you are comfortable with relational operators (`==`, `!=`, `<`, `>`, `<=`, `>=`).

Remember this: `if-else` is your program's brain. It's how you imbue your code with intelligence and the ability to respond dynamically to the world around it. Master these constructs, and you've unlocked a huge part of programming power!

---

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-style:

**Question 1 (Conceptual):** What is the fundamental purpose of an `if-else` statement in C?

**Answer 1:** The fundamental purpose of an `if-else` statement is to allow a program to make decisions. It enables the program to execute different blocks of code based on whether a specified condition evaluates to true or false, thereby controlling the program's flow of execution.

**Question 2 (Exam-style):** Consider the following C code snippet. What will be printed if the variable `score` is initialized to `75`?

```c
#include <stdio.h>

int main() {
    int score = 75;
    int bonus = 0;

    if (score > 80) {
        printf("Excellent! ");
        bonus = 10;
    } else if (score > 60) {
        printf("Good! ");
        bonus = 5;
    } else {
        printf("Needs improvement. ");
    }
    printf("Bonus: %d\n", bonus);

    return 0;
}
```

**Answer 2:**
Let's trace the execution with `score = 75`:
1.  The first condition `score > 80` (75 > 80) is false.
2.  The program moves to the next `else if`. The condition `score > 60` (75 > 60) is true.
3.  The code inside this `else if` block executes:
    *   `printf("Good! ");` prints "Good! ".
    *   `bonus = 5;` sets the `bonus` variable to 5.
4.  Since a true condition was found, the rest of the `else if` and `else` blocks are skipped.
5.  The final `printf("Bonus: %d\n", bonus);` executes, printing "Bonus: 5".

Therefore, the output will be:
`Good! Bonus: 5`

**Question 3 (Conceptual/Pitfall):** Explain why using curly braces `{}` with `if` and `else` statements is generally recommended, even when there's only a single statement to be executed.

**Answer 3:** It is recommended to use curly braces `{}` with `if` and `else` statements to clearly define the block of code that is conditionally executed. If braces are omitted, only the *very next* statement following the `if` or `else` is considered part of that block. This can lead to confusion and subtle bugs, especially if code indentation suggests that multiple statements are part of the block when, syntactically, only the first one is. Using braces removes ambiguity and makes the code more robust and easier to maintain, preventing accidental inclusion or exclusion of statements from the conditional logic.

**Question 4 (Exam-style):** Write a C program that takes an integer input from the user and prints whether the number is positive, negative, or zero.

**Answer 4:**

```c
#include <stdio.h>

int main() {
    int num;

    printf("Enter an integer: ");
    scanf("%d", &num);

    if (num > 0) {
        printf("The number is positive.\n");
    } else if (num < 0) {
        printf("The number is negative.\n");
    } else { // This handles the case where num is neither > 0 nor < 0, meaning it must be 0
        printf("The number is zero.\n");
    }

    return 0;
}
```

**Explanation:**
*   The program first prompts the user to `Enter an integer:` and reads the input into the `num` variable using `scanf`.
*   It then uses an `if-else if-else` structure to check the value of `num`:
    *   `if (num > 0)`: If `num` is greater than zero, it's positive.
    *   `else if (num < 0)`: If the first condition is false and `num` is less than zero, it's negative.
    *   `else`: If neither of the above conditions is true, `num` must be zero.

This demonstrates how `if-else` helps us categorize inputs and take appropriate actions, directly relating to CO1.
