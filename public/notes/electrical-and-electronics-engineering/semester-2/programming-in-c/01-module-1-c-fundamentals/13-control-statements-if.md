---
title: "Control Statements  - if"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals  "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f98e5"
status: "completed"
scrapedAt: "2026-05-23T16:09:01.594Z"
---
# PROGRAMMING IN C: Module 1: C Fundamentals - Control Statements: The `if` Statement

Welcome, future C programmers! In this session, we're going to dive into one of the most fundamental building blocks of any programming language: **decision making**. Think about your own lives – you make decisions all the time, right? "If it's raining, I'll take an umbrella." "If I'm hungry, I'll eat something." Programming languages need to do the same thing. They need to be able to execute different sets of instructions based on whether certain conditions are true or false. This is where **control statements** come in, and today, we're starting with the king of conditional control: the `if` statement.

This is directly related to our **Course Outcome 1 (CO1)**: "Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements." Understanding `if` is absolutely crucial for making your C programs intelligent and responsive.

## 1. The Need for Decision Making: Why `if`?

Imagine you're writing a program to grade student exams. You can't just have one set of instructions for everyone. A student who scores 90 or above needs a different message ("Excellent!") than a student who scores 50-60 ("Pass"). This is a classic scenario where a program needs to make a decision.

Before `if`, our programs would execute instructions in a strictly linear fashion, one after another. This is like a recipe that you follow exactly from start to finish, no matter what. But real-world problems, and therefore real-world programs, are rarely that simple. We need a way to *branch* the execution path.

The `if` statement allows us to say: "Hey C, *if* this condition is true, then do these specific things. Otherwise, maybe do nothing, or maybe do something else." It gives our programs the ability to *react* to different situations.

## 2. The Basic `if` Statement: Simple Choices

The most straightforward form of the `if` statement in C is the **simple `if` statement**. It's designed for situations where you have one condition, and if that condition is met, you execute a block of code.

The general structure looks like this:

```c
if (condition) {
    // Code to be executed if the condition is true
    statement1;
    statement2;
    // ... and so on
}
```

Let's break this down:

*   **`if`**: This is the keyword that tells the C compiler we're about to make a decision.
*   **`(` and `)`**: The parentheses are mandatory. They enclose the *condition* that we want to evaluate.
*   **`condition`**: This is an expression that evaluates to either true (non-zero value) or false (zero value). We'll talk more about what can be a condition in a moment.
*   **`{` and `}`**: The curly braces define a **block of code**. All the statements within these braces will be executed *only if* the `condition` is true. If the condition is false, the program will simply skip over this entire block.

**What makes a `condition` true or false?**

In C, any expression that results in an integer value can be considered a condition.
*   A non-zero value is treated as `true`.
*   A zero value is treated as `false`.

Typically, we use **relational operators** and **equality operators** to create these conditions. You've likely seen these before:

*   `<` : Less than
*   `>` : Greater than
*   `<=` : Less than or equal to
*   `>=` : Greater than or equal to
*   `==` : Equal to (Careful! This is *two* equals signs. A single equals sign `=` is for assignment.)
*   `!=` : Not equal to

For example, if we have two integer variables, `score1` and `score2`:

*   `score1 > score2` : This condition is true if the value in `score1` is numerically greater than the value in `score2`.
*   `score1 == 100` : This condition is true if `score1` holds the value 100.

Let's revisit our grading example. Suppose we have a variable `student_score`.

```c
int student_score = 85;

if (student_score >= 90) {
    printf("Congratulations! You got an A!\n");
}

printf("End of grading.\n");
```

If `student_score` is 85, the condition `student_score >= 90` is false. So, the `printf` statement inside the `if` block is skipped. The program proceeds directly to `printf("End of grading.\n");`.

Now, what if `student_score` was 92?

```c
int student_score = 92;

if (student_score >= 90) {
    printf("Congratulations! You got an A!\n");
}

printf("End of grading.\n");
```

In this case, `student_score >= 90` is true. The program enters the `if` block and executes `printf("Congratulations! You got an A!\n");`. Then, it proceeds to `printf("End of grading.\n");`.

**Important Note on the Block (`{}`)**: If your `if` statement only has *one* statement to execute when the condition is true, you can technically omit the curly braces.

```c
int student_score = 92;

if (student_score >= 90)
    printf("Congratulations! You got an A!\n"); // Only this line is controlled by the if

printf("End of grading.\n");
```

However, and this is a *very* important point that many beginners overlook, it's a common source of bugs. If you later add another statement and forget the braces, that new statement will *always* execute, regardless of the `if` condition.

```c
int student_score = 92;

if (student_score >= 90)
    printf("Congratulations! You got an A!\n");
    printf("Keep up the good work!\n"); // PROBLEM: This line is NOT controlled by the if!

printf("End of grading.\n");
```

In the above code, even if `student_score` is 80, the second `printf` will still execute because it's not within the `if`'s scope. **To avoid this confusion and potential errors, it's a best practice to *always* use curly braces for `if` statements, even if there's only one statement inside.** This makes your code clearer and safer, aligning with good programming practices discussed in texts like Kernighan and Ritchie.

This also directly supports **CO1 (Knowledge Level: K2)**, as understanding how to use `if` to control program flow is a fundamental application of basic C constructs.

## 3. The `if-else` Statement: Two-Way Choices

What if we need to do one thing if a condition is true, and *another* thing if it's false? This is where the `if-else` statement comes in. It's like saying, "If it's raining, take an umbrella, *else* (otherwise) wear sunglasses."

The structure is:

```c
if (condition) {
    // Code to execute if the condition is true
    statement_if_true_1;
    statement_if_true_2;
    // ...
} else {
    // Code to execute if the condition is false
    statement_if_false_1;
    statement_if_false_2;
    // ...
}
```

Here, if the `condition` is true, the block of code within the first set of curly braces is executed. If the `condition` is false, the program *skips* the first block and executes the code within the `else` block. Critically, only *one* of the two blocks will ever be executed.

Let's go back to our grading example with `student_score`. We want to print one message for a passing grade and another for a failing grade. A passing grade might be 50 or above.

```c
int student_score = 45;

if (student_score >= 50) {
    printf("You passed the exam!\n");
} else {
    printf("You did not pass. Better luck next time.\n");
}

printf("Exam results processed.\n");
```

If `student_score` is 45:
1.  The condition `student_score >= 50` is false.
2.  The `if` block is skipped.
3.  The `else` block is executed: `printf("You did not pass. Better luck next time.\n");` is printed.
4.  The program continues after the `if-else` structure: `printf("Exam results processed.\n");` is printed.

If `student_score` was 70:
1.  The condition `student_score >= 50` is true.
2.  The `if` block is executed: `printf("You passed the exam!\n");` is printed.
3.  The `else` block is *skipped*.
4.  The program continues after the `if-else` structure: `printf("Exam results processed.\n");` is printed.

Notice how in both scenarios, exactly one of the two `printf` statements is executed. This is the power of `if-else`. This directly relates to **CO1 (Knowledge Level: K2)**, extending our ability to make decisions in programs.

### The `else if` Ladder: Handling Multiple Conditions

What if you have more than two possibilities? For instance, grading with A, B, C, D, and F. You can't do this with a single `if-else`. You need to check multiple conditions sequentially. This is where the `else if` structure, often called an "else if ladder" or "nested if-else," comes into play.

The pattern looks like this:

```c
if (condition1) {
    // Execute if condition1 is true
} else if (condition2) {
    // Execute if condition1 is false AND condition2 is true
} else if (condition3) {
    // Execute if condition1 and condition2 are false AND condition3 is true
} else {
    // Execute if all preceding conditions are false
}
```

The C compiler checks these conditions from top to bottom. As soon as it finds a condition that is true, it executes the corresponding block of code and then *skips the rest of the entire `if-else if-else` chain*. If none of the `if` or `else if` conditions are met, the `else` block (if present) is executed.

Let's extend our grading example to include letter grades:

```c
int student_score = 78; // Let's say the score is 78

if (student_score >= 90) {
    printf("Grade: A\n");
} else if (student_score >= 80) { // condition1 (score >= 90) is false
    printf("Grade: B\n");
} else if (student_score >= 70) { // condition2 (score >= 80) is false, but condition3 (score >= 70) is TRUE
    printf("Grade: C\n"); // This block will be executed
} else if (student_score >= 60) { // This condition (and the final else) will be skipped
    printf("Grade: D\n");
} else { // This condition (score >= 60) is false
    printf("Grade: F\n");
}

printf("Final grade determined.\n");
```

Let's trace this for `student_score = 78`:
1.  `student_score >= 90` (78 >= 90) is false.
2.  The program moves to the first `else if`. `student_score >= 80` (78 >= 80) is false.
3.  The program moves to the next `else if`. `student_score >= 70` (78 >= 70) is true!
4.  The block associated with this condition is executed: `printf("Grade: C\n");`.
5.  Crucially, because a true condition was found, the rest of the `else if` statements and the final `else` are skipped entirely.
6.  The program then prints `printf("Final grade determined.\n");`.

This structure allows for a clean way to handle multiple exclusive conditions. It's important to note the order matters. If we had `else if (student_score >= 70)` before `else if (student_score >= 80)`, a score of 85 would incorrectly get a 'C' because `85 >= 70` is true, and the `85 >= 80` check would never be reached. This highlights the analytical aspect related to **CO1 (Knowledge Level: K2)**, ensuring the logic correctly represents the problem.

As Herbert Schildt mentions in "C: The Complete Reference," these structures are fundamental for creating dynamic and interactive programs that can adapt to varying inputs.

## 4. Nested `if` Statements: Decisions within Decisions

Sometimes, the action you take based on one condition might itself depend on another condition. This is where **nested `if` statements** come in. It means placing an `if` statement inside another `if` statement (or inside an `if` block, `else` block, or `else if` block).

Consider a scenario where you're checking if a person is eligible for a loan. First, they must be employed. Then, if they are employed, you might check their income.

```c
int is_employed = 1; // 1 means true, 0 means false
int income = 35000;

if (is_employed == 1) { // Outer if: Check if employed
    printf("Person is employed. Checking income...\n");
    if (income >= 30000) { // Inner if: Check income
        printf("Income is sufficient. Loan approved!\n");
    } else { // Inner else: Income not sufficient
        printf("Income is too low. Loan denied.\n");
    }
} else { // Outer else: Not employed
    printf("Person is not employed. Loan denied.\n");
}
```

Let's trace this with `is_employed = 1` and `income = 35000`:
1.  The outer `if (is_employed == 1)` is true.
2.  The program enters the outer `if` block.
3.  It prints "Person is employed. Checking income...\n".
4.  Now, it encounters the nested `if (income >= 30000)`. Since `income` is 35000, this condition (35000 >= 30000) is true.
5.  The inner `if` block executes: `printf("Income is sufficient. Loan approved!\n");`.
6.  The inner `else` block is skipped.
7.  The outer `else` block is also skipped.

Now, let's trace with `is_employed = 1` and `income = 25000`:
1.  The outer `if (is_employed == 1)` is true.
2.  The program enters the outer `if` block.
3.  It prints "Person is employed. Checking income...\n".
4.  It encounters the nested `if (income >= 30000)`. Since `income` is 25000, this condition (25000 >= 30000) is false.
5.  The inner `if` block is skipped.
6.  The inner `else` block executes: `printf("Income is too low. Loan denied.\n");`.
7.  The outer `else` block is skipped.

Finally, let's trace with `is_employed = 0` and `income = 50000` (the income here is irrelevant for the first decision):
1.  The outer `if (is_employed == 1)` is false.
2.  The outer `if` block is skipped.
3.  The outer `else` block executes: `printf("Person is not employed. Loan denied.\n");`.

Nested `if` statements can become complex quickly. While powerful, it's essential to keep them readable. Overly deep nesting can make code hard to follow. Byron Gottfried's "Programming with C" emphasizes clarity and structure when using nested control statements. Sometimes, using logical operators (which we'll cover later) can simplify nested structures. This concept is crucial for **CO1 (Knowledge Level: K2)** as it allows for more intricate problem-solving by breaking down conditions.

## 5. Conditional Operator (`? :`) - A Concise Alternative

While `if-else` is standard, C provides a more compact way to express simple `if-else` logic using the **conditional operator**, also known as the **ternary operator**. It's often used for assigning values or performing simple actions based on a condition.

The syntax is:

`condition ? expression_if_true : expression_if_false;`

Let's take our simple `if-else` example of assigning a grade status:

```c
int student_score = 75;
char grade_status[20]; // A buffer to hold the status string

if (student_score >= 50) {
    strcpy(grade_status, "Passed"); // Assuming you've included <string.h>
} else {
    strcpy(grade_status, "Failed");
}
printf("Student status: %s\n", grade_status);
```

We can rewrite this using the conditional operator:

```c
int student_score = 75;
char grade_status[20];

// Using the conditional operator
(student_score >= 50) ? strcpy(grade_status, "Passed") : strcpy(grade_status, "Failed");

printf("Student status: %s\n", grade_status);
```

This single line does exactly what the `if-else` block did. It evaluates `student_score >= 50`. If true, it executes `strcpy(grade_status, "Passed")`. If false, it executes `strcpy(grade_status, "Failed")`.

You can also use it directly in `printf` for simple output:

```c
int student_score = 75;
printf("Student status: %s\n", (student_score >= 50) ? "Passed" : "Failed");
```

This is incredibly concise! However, like nested `if`s, overuse or complex expressions within the conditional operator can reduce readability. It's best suited for simple assignments or expressions. E. Balagurusamy's "Programming In Ansi C" often highlights such operators for efficiency and conciseness in specific contexts. This is an advanced aspect of **CO1 (Knowledge Level: K2)**, showing alternative ways to implement control flow.

## 6. Common Pitfalls and Best Practices

As you start using `if` statements, it's easy to stumble into common traps. Let's highlight a few:

*   **Using `=` instead of `==`**: This is probably the most frequent error. Remember, `=` is for assignment, and `==` is for comparison.
    ```c
    int x = 5;
    if (x = 10) { // WRONG! This assigns 10 to x, which is non-zero (true)
        printf("This will always print!\n");
    }
    // Correct:
    if (x == 10) { // Correct comparison
        printf("x is indeed 10!\n");
    }
    ```
    This mistake is insidious because it often doesn't cause a compile-time error, but your program's logic will be completely wrong. Kernighan and Ritchie are very clear on the distinction between assignment and equality.

*   **Missing Curly Braces**: As discussed earlier, if your `if` or `else` block contains only one statement, you *can* omit the braces. But it's risky! Always use them for clarity and to prevent future bugs. This is a key takeaway for writing robust code, supporting **CO1 (Knowledge Level: K2)** in terms of writing reliable programs.

*   **Incorrect Order in `else if` Ladders**: The sequence of checks in an `else if` chain matters critically. Always test from the most specific or highest value condition downwards (or lowest upwards), depending on your logic.

*   **Floating-Point Comparisons**: Comparing floating-point numbers (like `float` or `double`) directly using `==` or `!=` can be problematic due to precision issues. For example, `0.1 + 0.2` might not be *exactly* equal to `0.3`. Instead, you should check if the absolute difference between the two numbers is within a small tolerance (epsilon). We'll touch on this more when we discuss data types, but for `if` statements involving floats, be cautious.

*   **Readability**: Complex nested `if` statements or convoluted conditional operator usage can make your code hard to understand. Stick to the KISS principle: **Keep It Simple, Stupid**. When in doubt, breaking a complex condition into multiple simpler `if` statements or using intermediate boolean variables can improve clarity.

## 7. Connection to Course Outcomes

Let's summarize how `if` statements tie into our **Course Outcomes**:

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    *   The `if` statement is the primary tool for implementing decisions identified from a problem. Whether it's grading, checking input validity, or deciding game actions, `if` allows us to translate these conditional requirements into executable C code. Understanding simple `if`, `if-else`, `else if` ladders, and nested `if`s directly addresses the "basic constructs" and "control statements" requirement. The conditional operator shows alternative ways to achieve the same, enhancing understanding.

*   **CO2: Develop C programs using arrays, matrices, and strings.**
    *   While `if` itself doesn't directly use arrays or strings, it's almost always used *in conjunction* with them. For example, you might use `if` to check if an array element is positive, or if a string contains a specific character. This is where your **K3 (Application)** level of understanding comes in – you'll be applying `if` to manipulate these data structures.

*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    *   Functions often encapsulate conditional logic. A `check_eligibility()` function might heavily use `if` statements internally. Your `if` statement usage would be within these modules.

*   **CO4: Develop C programs using pointers for dynamic data handling.**
    *   When dealing with pointers, `if` statements are often used to check if a pointer is valid (e.g., not NULL) before dereferencing it, or to compare values pointed to by different pointers. Again, this is an application of `if` within a broader context.

*   **CO5: Use files in C to permanently store and manipulate data.**
    *   When reading data from files, `if` statements are essential for checking for end-of-file conditions, validating data read from the file, or deciding what to do based on file content.

Essentially, the `if` statement is the bedrock of making your C programs "smart." It's how you tell your program what to do when things aren't always the same.

## Sample Questions with Answers

Let's test your understanding with a few questions, ranging from conceptual to exam-style.

**Question 1 (Conceptual):**
Explain the difference between `if (x = 5)` and `if (x == 5)` in C.

**Answer:**
The expression `if (x = 5)` uses the assignment operator `=`. This statement assigns the value `5` to the variable `x`. Since `5` is a non-zero value, the condition is evaluated as true, and the block of code within the `if` statement will be executed. The original value of `x` is lost.
The expression `if (x == 5)` uses the equality operator `==`. This statement compares the current value of `x` with `5`. If `x` holds the value `5`, the condition is true, and the `if` block executes. If `x` holds any other value, the condition is false, and the `if` block is skipped. This is the correct way to check for equality.

**Question 2 (Exam-Style - Trace):**
Consider the following C code snippet. What will be printed to the console if `num = 12`?

```c
#include <stdio.h>

int main() {
    int num = 12;
    if (num % 3 == 0) {
        printf("Divisible by 3.\n");
        if (num % 4 == 0) {
            printf("Also divisible by 4.\n");
        } else {
            printf("Not divisible by 4.\n");
        }
    } else {
        printf("Not divisible by 3.\n");
    }
    return 0;
}
```

**Answer:**
Let's trace the execution:
1.  `num` is initialized to `12`.
2.  The outer `if` condition is `num % 3 == 0`. `12 % 3` is `0`. So, `0 == 0` is true.
3.  The program enters the outer `if` block.
4.  `printf("Divisible by 3.\n");` is executed.
5.  Now, the nested `if` condition is checked: `num % 4 == 0`. `12 % 4` is `0`. So, `0 == 0` is true.
6.  The inner `if` block executes: `printf("Also divisible by 4.\n");`.
7.  The inner `else` block is skipped.
8.  The outer `else` block is skipped.
9.  The program finishes.

**Output:**
```
Divisible by 3.
Also divisible by 4.
```

**Question 3 (Application/Problem Solving):**
Write a C program that asks the user for their age. If the age is 18 or greater, it should print "You are an adult." Otherwise, it should print "You are a minor."

**Answer:**

```c
#include <stdio.h>

int main() {
    int age;

    // Prompt the user for input
    printf("Please enter your age: ");
    scanf("%d", &age); // Read the integer input and store it in 'age'

    // Use if-else to check the age and print the appropriate message
    if (age >= 18) {
        printf("You are an adult.\n");
    } else {
        printf("You are a minor.\n");
    }

    return 0; // Indicate successful execution
}
```

**Explanation:**
This program directly applies the `if-else` structure. It first declares an integer variable `age`. It then prompts the user to enter their age using `printf`. The `scanf("%d", &age);` statement reads the integer the user types and stores it in the `age` variable. Finally, the `if (age >= 18)` statement checks if the entered age is 18 or more. If it is, "You are an adult." is printed. If not, the `else` block is executed, printing "You are a minor." This is a simple but effective demonstration of **CO1 (Knowledge Level: K2)**.

Keep practicing these `if` statements with different conditions and scenarios. They are fundamental to everything you will do in C programming!
