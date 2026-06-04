---
title: "break & continue"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals  "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f98ec"
status: "completed"
scrapedAt: "2026-05-23T16:09:07.170Z"
---
# PROGRAMMING IN C: Module 1: C Fundamentals - break & continue

Welcome to our session on two very useful control flow statements in C: `break` and `continue`. Think of them as your tools for finely tuning loops and switch statements, allowing you to exit early or skip a particular iteration when needed. Understanding these will significantly enhance your ability to write efficient and logic-driven C programs, directly impacting your grasp of **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**

## 1. Understanding Control Flow: A Quick Recap

Before we dive into `break` and `continue`, let's briefly recall where we're heading. In programming, we often need to make decisions and repeat actions. That's where control flow statements come in. We've already explored conditional statements like `if`, `else if`, `else`, and `switch`, which help us make decisions. And we've looked at loop structures like `for`, `while`, and `do-while`, which allow us to repeat blocks of code.

Now, `break` and `continue` are special keywords that give us *even more* control over how these loops and `switch` statements execute. They let us alter the normal, sequential flow of a program.

## 2. The `break` Statement: Exiting Early

Imagine you're searching for a specific book in a library. You don't want to check every single book on every single shelf if you find your book on the first aisle, right? You'd stop searching. The `break` statement works very much like that.

### 2.1. What is `break`?

The `break` statement is used to **terminate** the innermost enclosing `switch` statement or loop (`for`, `while`, `do-while`). When `break` is encountered, the program immediately exits that `switch` or loop and continues execution with the statement immediately following the terminated structure.

### 2.2. `break` in Loops

Let's say you're writing a program to find the first occurrence of a specific number in a large list of numbers. You could loop through the entire list, but once you find the number, there's no need to continue searching. This is where `break` shines!

**Example:** Finding the first occurrence of a number.

```c
#include <stdio.h>

int main() {
    int numbers[] = {10, 25, 5, 40, 15, 30, 50};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int target = 40;
    int found_at = -1; // Initialize to -1, indicating not found

    printf("Searching for %d in the array...\n", target);

    for (int i = 0; i < size; i++) {
        if (numbers[i] == target) {
            found_at = i; // Store the index where it's found
            printf("Found %d at index %d!\n", target, i);
            break; // Exit the loop immediately once found
        }
    }

    if (found_at == -1) {
        printf("%d was not found in the array.\n", target);
    }

    return 0;
}
```

**Explanation:**
In this example, the `for` loop iterates through the `numbers` array. Inside the loop, we check if the current element `numbers[i]` matches our `target` value (40). If it does, we print a message, record the index, and then crucially, `break`. This `break` statement immediately stops the `for` loop. Without `break`, the loop would continue to the end of the array, even though we've already found what we were looking for. This makes our program more efficient, especially with large datasets. This directly relates to **CO1**, as we're using control statements to manage program flow based on a condition.

**Common Pitfall:** Remember that `break` only exits the *innermost* loop or `switch`. If you have nested loops, `break` will only exit the loop it's directly inside.

### 2.3. `break` in `switch` Statements

The `switch` statement is designed to execute a specific block of code based on the value of an expression. After a case is matched and its code is executed, you usually want to exit the `switch` to prevent "fall-through" to subsequent cases. `break` is essential here.

**Example:** Simple day of the week display.

```c
#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\n");
            break; // Exit switch after printing Monday
        case 2:
            printf("Tuesday\n");
            break; // Exit switch after printing Tuesday
        case 3:
            printf("Wednesday\n");
            break; // Exit switch after printing Wednesday
        case 4:
            printf("Thursday\n");
            break; // Exit switch after printing Thursday
        case 5:
            printf("Friday\n");
            break; // Exit switch after printing Friday
        case 6:
            printf("Saturday\n");
            break; // Exit switch after printing Saturday
        case 7:
            printf("Sunday\n");
            break; // Exit switch after printing Sunday
        default:
            printf("Invalid day number.\n");
            // No break needed here as it's the last case
    }

    printf("End of the program.\n");
    return 0;
}
```

**Explanation:**
When `day` is 3, the `case 3:` matches. "Wednesday" is printed. Then, `break` is encountered, and the program immediately exits the `switch` statement. Execution continues with the `printf("End of the program.\n");` line. If we didn't have `break` after `case 3:`, the program would "fall through" and also print "Thursday", "Friday", and so on, until it hit a `break` or the end of the `switch`. This is almost always undesirable. The text by Kernighan and Ritchie in "The C Programming Language" emphasizes the importance of `break` in `switch` statements to prevent unintended fall-through.

**Key takeaway for `break`:** Use `break` when you want to exit a loop or `switch` statement completely as soon as a certain condition is met or a specific case is handled.

## 3. The `continue` Statement: Skipping an Iteration

Now, let's consider a different scenario. Suppose you are processing a list of numbers, and you want to perform an operation on all numbers *except* for the negative ones. You don't want to stop the entire process just because you encountered a negative number; you just want to skip that particular number and move on to the next one. This is where `continue` is your friend.

### 3.1. What is `continue`?

The `continue` statement is used within loops (`for`, `while`, `do-while`). When `continue` is encountered, the program **skips the rest of the current iteration** of the loop and proceeds to the next iteration.

*   For `for` loops, `continue` skips the rest of the loop body and proceeds directly to the **update** expression (e.g., `i++`).
*   For `while` and `do-while` loops, `continue` skips the rest of the loop body and proceeds directly to the **condition** check.

### 3.2. `continue` in Loops

Let's revisit our list processing example. Suppose we want to sum up only the positive numbers in a list.

**Example:** Summing only positive numbers.

```c
#include <stdio.h>

int main() {
    int numbers[] = {10, -5, 20, 15, -10, 30, 45};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int sum_positive = 0;

    printf("Summing positive numbers...\n");

    for (int i = 0; i < size; i++) {
        if (numbers[i] < 0) {
            printf("Skipping negative number: %d\n", numbers[i]);
            continue; // Skip the rest of this iteration if the number is negative
        }
        // This part of the loop will only execute for non-negative numbers
        sum_positive += numbers[i];
        printf("Added %d. Current sum: %d\n", numbers[i], sum_positive);
    }

    printf("\nTotal sum of positive numbers: %d\n", sum_positive);

    return 0;
}
```

**Explanation:**
Here, the `for` loop iterates through the `numbers` array. Inside the loop, we check if `numbers[i]` is less than 0. If it is, we print a message indicating we're skipping it, and then `continue` is executed. This `continue` statement immediately stops the current iteration. The line `sum_positive += numbers[i];` and the subsequent `printf` are skipped for that negative number. The loop then proceeds to the `i++` part and checks the condition `i < size` again for the next number. If the number is *not* negative (i.e., `numbers[i] >= 0`), the `continue` is not executed, and the number is added to `sum_positive`. This is a very direct application of **CO1**, showing how we use control statements to refine the execution of a repetitive task. Herbert Schildt's "C: The Complete Reference" highlights `continue` as a way to bypass parts of a loop.

**Analogy:** Think of it like a conveyor belt. You're sorting items. If an item is flawed (negative number), you toss it aside (using `continue`) and let the belt move to the next item, rather than stopping the entire conveyor belt and the sorting process.

### 3.3. `continue` in `while` and `do-while` Loops

The behavior of `continue` in `while` and `do-while` loops is similar in that it skips the rest of the current iteration. However, the key difference is where execution jumps to:

*   In `while (condition)`: `continue` jumps directly to re-evaluating `condition`.
*   In `do { ... } while (condition)`: `continue` jumps directly to re-evaluating `condition`.

It's crucial to ensure that any operations necessary for the loop's condition (like incrementing a counter) are performed *before* a `continue` if they are placed after it in the loop body, otherwise, you risk an infinite loop.

**Example:** A `while` loop with `continue`.

```c
#include <stdio.h>

int main() {
    int count = 0;
    int limit = 5;

    printf("Counting up, skipping multiples of 3...\n");

    while (count < 10) {
        count++; // Increment count FIRST

        if (count % 3 == 0) {
            printf("Skipping multiple of 3: %d\n", count);
            continue; // Skip the print statement for multiples of 3
        }

        // This will be skipped for multiples of 3
        printf("Current count: %d\n", count);
    }

    return 0;
}
```

**Explanation:**
In this `while` loop, we increment `count` at the beginning. If `count` is a multiple of 3, we print a skip message and `continue`. This skips the `printf("Current count: %d\n", count);`. The `continue` then jumps back to the `while (count < 10)` condition check. If `count` is not a multiple of 3, the `continue` is not executed, and the current count is printed. Notice how `count++` is placed *before* the `if (count % 3 == 0)` check. If it were after, and we hit a `continue`, the `count++` would be skipped, potentially leading to an infinite loop if `count` remained less than 10 and was always a multiple of 3. This emphasizes the careful placement of statements when using `continue` in `while` loops.

**Key takeaway for `continue`:** Use `continue` when you want to skip the remainder of the current loop iteration and proceed to the next one, based on a specific condition.

## 4. Combining `break` and `continue`

You can, of course, use both `break` and `continue` within the same loop, allowing for complex control flow. For instance, you might want to process positive numbers but stop the entire process if you encounter a very large number.

**Example:** Process positive numbers, stop if a number is 100 or more.

```c
#include <stdio.h>

int main() {
    int data[] = {5, 10, 15, -5, 20, 25, 100, 30};
    int size = sizeof(data) / sizeof(data[0]);
    int sum = 0;

    printf("Processing data...\n");

    for (int i = 0; i < size; i++) {
        if (data[i] < 0) {
            printf("Skipping negative number: %d\n", data[i]);
            continue; // Skip negative numbers
        }

        if (data[i] >= 100) {
            printf("Encountered a large number (%d), stopping processing.\n", data[i]);
            break; // Stop the entire loop if number is 100 or more
        }

        // Only positive numbers less than 100 are processed
        sum += data[i];
        printf("Added %d. Current sum: %d\n", data[i], sum);
    }

    printf("\nFinal sum: %d\n", sum);

    return 0;
}
```

**Explanation:**
In this scenario, the loop first checks for negative numbers using `continue`. If a number isn't negative, it then checks if it's 100 or greater. If it is, `break` terminates the loop. Only numbers that are positive and less than 100 are added to the `sum`. This demonstrates a practical use case where both statements work in tandem to control loop execution precisely. This intricate control of repetitive tasks is fundamental to **CO1**.

## 5. Relevance to Course Outcomes

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    *   Both `break` and `continue` are fundamental control statements. They allow you to implement precise logic for decision-making within loops and `switch` statements, enabling you to solve a wider range of computational problems efficiently. Whether it's optimizing a search, filtering data, or controlling complex iterative processes, these statements are indispensable.

*   **CO2: Develop C programs using arrays, matrices, and strings.**
    *   When working with arrays, matrices, or strings, you will often need to iterate through them. `break` and `continue` are crucial for optimizing these iterations, for example, stopping a string search once a character is found, or skipping non-alphanumeric characters in a string processing loop.

*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    *   While `break` and `continue` are typically used within loops or `switch` statements inside functions, their presence allows functions to perform their tasks more efficiently and correctly. For example, a function searching for an element in an array would use `break` once the element is found.

*   **CO4: Develop C programs using pointers for dynamic data handling.**
    *   When dealing with dynamically allocated memory or complex data structures accessed via pointers, you'll often use loops. `break` and `continue` help manage these loops, ensuring that memory is processed correctly and efficiently, and that operations terminate under specific conditions.

*   **CO5: Use files in C to permanently store and manipulate data.**
    *   When reading from or writing to files, you’ll commonly use loops. `break` can be used to stop reading a file once a specific marker or end-of-data condition is met, while `continue` might be used to skip corrupted or irrelevant lines in a file during processing.

## 6. Exam Focus & Quick Recall

*   **What's the difference between `break` and `continue`?** This is a very common question.
    *   `break`: **Exits** the entire loop or `switch`.
    *   `continue`: **Skips** the rest of the *current iteration* and moves to the next.
*   **Where can `break` be used?** In `switch`, `for`, `while`, `do-while`.
*   **Where can `continue` be used?** Only in `for`, `while`, `do-while`. (Crucially, not in `switch`).
*   **What happens with nested loops?** `break`/`continue` only affect the *innermost* loop.
*   **Common Pitfall:** Infinite loops with `continue` in `while` loops if the update expression is skipped. Always ensure loop control variables are handled correctly before or after `continue`.

## 7. Sample Questions and Answers

**Question 1:** What is the output of the following C code snippet?

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue;
        }
        if (i == 5) {
            break;
        }
        printf("%d ", i);
    }
    printf("Done\n");
    return 0;
}
```

**Answer:**
The loop starts with `i = 1`.
*   `i = 1`: Not 3, not 5. Prints "1 ".
*   `i = 2`: Not 3, not 5. Prints "2 ".
*   `i = 3`: `i == 3` is true. `continue` is executed, skipping the rest of this iteration (including `if (i == 5)` and `printf`).
*   `i = 4`: Not 3. `i == 5` is false. Prints "4 ".
*   `i = 5`: Not 3. `i == 5` is true. `break` is executed, exiting the loop.
After the loop, "Done" is printed.

Therefore, the output is:
`1 2 4 Done`

**Reasoning:** The `continue` at `i=3` skips printing 3 and moves to the next iteration. The `break` at `i=5` exits the loop before 5 can be printed.

---

**Question 2:** Explain the primary difference between `break` and `continue` in the context of loops, and provide a scenario where each would be appropriately used.

**Answer:**
The primary difference lies in their effect on loop execution:

*   **`break`:** Terminates the loop entirely. Execution continues with the statement immediately following the loop.
    *   **Appropriate Use Scenario:** Searching for a specific item in a large list. Once the item is found, `break` is used to stop the search, preventing unnecessary further iterations and improving efficiency. For example, finding the first occurrence of a character in a string.

*   **`continue`:** Skips the rest of the current loop iteration. Execution proceeds to the next iteration (e.g., the loop condition check or update expression).
    *   **Appropriate Use Scenario:** Processing a list of numbers where certain numbers should be ignored. For example, calculating the sum of only positive numbers in an array; `continue` would be used to skip negative numbers without stopping the entire summation process.

---

**Question 3:** Can the `continue` statement be used inside a `switch` statement? Explain why or why not.

**Answer:**
No, the `continue` statement **cannot** be used inside a `switch` statement.

**Reasoning:** The `continue` statement is designed to control the flow of loops (`for`, `while`, `do-while`). It is meant to skip an iteration of a loop. A `switch` statement, on the other hand, is a selection statement that executes a block of code based on a matching case. It doesn't have "iterations" in the same sense as a loop. If you try to use `continue` within a `switch`, the compiler will issue an error because it's not a valid context for this statement. The statement used to exit a `switch` is `break`.

---

**Question 4:** What is the output of the following code?

```c
#include <stdio.h>

int main() {
    int i = 0;
    while (i < 10) {
        i += 2; // Increment i by 2
        if (i % 4 == 0) {
            continue; // Skip if i is a multiple of 4
        }
        printf("%d ", i);
        if (i > 7) {
            break; // Exit if i is greater than 7
        }
    }
    printf("End\n");
    return 0;
}
```

**Answer:**
Let's trace the execution:
*   `i = 0`. Loop starts (`i < 10`).
*   `i += 2` makes `i = 2`. `2 % 4 != 0`. Print "2 ". `i > 7` (2 > 7) is false.
*   `i += 2` makes `i = 4`. `4 % 4 == 0`. `continue` is executed, skipping the `printf` and `if (i > 7)`. Loop goes to check condition `i < 10`.
*   `i += 2` makes `i = 6`. `6 % 4 != 0`. Print "6 ". `i > 7` (6 > 7) is false.
*   `i += 2` makes `i = 8`. `8 % 4 == 0`. `continue` is executed, skipping the `printf` and `if (i > 7)`. Loop goes to check condition `i < 10`.
*   `i += 2` makes `i = 10`. `i < 10` (10 < 10) is false. Loop terminates.
Finally, "End" is printed.

Therefore, the output is:
`2 6 End`

**Reasoning:** The `continue` statement skips printing when `i` becomes 4 and 8 because they are multiples of 4. The `break` statement is never reached because the loop condition `i < 10` becomes false when `i` is updated to 10, before the `break` condition `i > 7` could cause an exit. Notice how `i += 2` happens *before* the checks, controlling the values of `i` that are considered for printing or skipping. This is a good example of how the order of operations within a loop body matters.
