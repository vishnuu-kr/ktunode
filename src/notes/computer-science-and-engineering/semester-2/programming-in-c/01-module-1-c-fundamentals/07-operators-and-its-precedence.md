---
title: "Operators and its precedence"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e30"
status: "completed"
scrapedAt: "2026-05-20T16:35:03.966Z"
---
Alright everyone, settle in! Today we're diving into a topic that's absolutely foundational to C programming, and frankly, to programming in general: **Operators and their Precedence**. Think of operators as the tools in your C programming toolbox. They allow you to perform actions on data – to add, subtract, compare, manipulate, and so much more. Without them, your programs would be static; they wouldn't be able to *do* anything. And understanding *how* these tools work together, especially when you use several at once, is crucial for writing correct and predictable code. This topic directly supports our first Course Outcome, CO1: "Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements." Operators are the heart of those basic constructs!

Let's get started!

## Module 1: C Fundamentals - Operators and Their Precedence

### What are Operators? The Building Blocks of Operations

In C, an **operator** is a symbol that tells the compiler to perform a specific mathematical, relational, or logical operation. The data items on which operators act are called **operands**.

Consider a simple arithmetic expression like `5 + 3`. Here, `+` is the operator, and `5` and `3` are the operands. The `+` operator tells the compiler to add the values of its operands.

But C offers a rich variety of operators, each designed for a specific purpose. We can broadly categorize them based on the type of operation they perform.

### Categories of Operators in C

Let's explore the main families of operators you'll encounter:

#### 1. Arithmetic Operators

These are the most familiar ones, dealing with numerical calculations.

*   **Addition (`+`)**: Adds two operands. For example, `a + b`.
*   **Subtraction (`-`)**: Subtracts the second operand from the first. For example, `a - b`.
*   **Multiplication (`*`)**: Multiplies two operands. For example, `a * b`.
*   **Division (`/`)**: Divides the first operand by the second. Now, this one has a couple of interesting behaviors, especially with integers. If both operands are integers, C performs *integer division*, meaning it discards any fractional part. So, `7 / 3` results in `2`, not `2.333...`. If at least one operand is a floating-point number (like `float` or `double`), then it performs *floating-point division*. So, `7.0 / 3` or `7 / 3.0` will give you `2.333...`. This is a common point of confusion for beginners, so remember: **integer division truncates!**
*   **Modulo (`%`)**: This is also an integer operator. It returns the *remainder* of an integer division. For example, `7 % 3` results in `1` because `7` divided by `3` is `2` with a remainder of `1`. This is super useful for tasks like checking if a number is even or odd (if `number % 2 == 0`, it's even!).

**Example Scenario:** Imagine you're managing a small bakery. You have 10 croissants, and you want to pack them into boxes of 3. How many full boxes can you make? And how many croissants will be left over?
You'd use:
`numberOfBoxes = 10 / 3;` // Integer division gives you 3 full boxes
`leftOver = 10 % 3;`   // Modulo gives you the remainder, which is 1 croissant left over.

#### 2. Relational Operators

These operators are used to compare two operands. They evaluate to a boolean result: `1` (true) if the condition is met, and `0` (false) otherwise. These are the backbone of decision-making in programs, essential for control flow statements like `if` and `while`, directly impacting CO1.

*   **Less Than (`<`)**: `a < b` is true if `a` is less than `b`.
*   **Less Than or Equal To (`<=`)**: `a <= b` is true if `a` is less than or equal to `b`.
*   **Greater Than (`>`)**: `a > b` is true if `a` is greater than `b`.
*   **Greater Than or Equal To (`>=`)**: `a >= b` is true if `a` is greater than or equal to `b`.
*   **Equal To (`==`)**: `a == b` is true if `a` is exactly equal to `b`. **Crucial point here:** notice the double equals `==`. This is different from the assignment operator (`=`). You'll often see beginners mix these up. `x = 5;` assigns the value 5 to `x`, while `x == 5;` checks if `x` currently holds the value 5. This distinction is vital for writing correct logic.
*   **Not Equal To (`!=`)**: `a != b` is true if `a` is not equal to `b`.

**Example Scenario:** You're building a simple game where a player's score needs to be at least 100 to advance to the next level.
You'd write something like:
`if (playerScore >= 100) {`
`  // Player advances!`
`}`
This `if` statement uses the relational operator `>=` to make a decision based on the `playerScore`.

#### 3. Logical Operators

These operators combine the results of two or more relational expressions. They are also fundamental to control flow and CO1.

*   **Logical AND (`&&`)**: `condition1 && condition2` is true only if *both* `condition1` and `condition2` are true.
*   **Logical OR (`||`)**: `condition1 || condition2` is true if *at least one* of `condition1` or `condition2` is true (or if both are true).
*   **Logical NOT (`!`)**: `!condition` inverts the truth value of `condition`. If `condition` is true, `!condition` is false, and vice-versa.

**Example Scenario:** Let's say for a user to log in, they must have a valid username *AND* a correct password.
`if (isValidUsername && isPasswordCorrect) {`
`  // Allow login`
`}`
Or, maybe a student passes a course if they achieve a score in the "good" range (say, 70-85) OR if they get a special recommendation.
`if ((score >= 70 && score <= 85) || receivedRecommendation) {`
`  // Student passes with distinction`
`}`
Here, we've even nested logical operators, which brings us to our next critical concept.

#### 4. Assignment Operators

These are used to assign values to variables. The most basic is the single equals sign (`=`), which we've already seen. C also provides "compound assignment operators" that combine an arithmetic operation with an assignment. These are neat shortcuts and can sometimes make your code more readable.

*   **Assignment (`=`)**: `x = 10;` Assigns the value 10 to variable `x`.
*   **Add and Assign (`+=`)**: `x += 5;` is equivalent to `x = x + 5;`. It adds 5 to `x` and stores the result back in `x`.
*   **Subtract and Assign (`-=`)**: `x -= 5;` is equivalent to `x = x - 5;`.
*   **Multiply and Assign (`*=`)**: `x *= 5;` is equivalent to `x = x * 5;`.
*   **Divide and Assign (`/=`)**: `x /= 5;` is equivalent to `x = x / 5;`.
*   **Modulo and Assign (`%=`)**: `x %= 5;` is equivalent to `x = x % 5;`.

**Example Scenario:** Imagine you're tracking a counter that increases by 1 every time a certain event happens. Instead of `counter = counter + 1;`, you can more concisely write `counter += 1;`. Or if your budget is reduced by 10%, you could write `budget *= 0.90;` which is equivalent to `budget = budget * 0.90;`.

#### 5. Increment and Decrement Operators

These are specialized operators for increasing or decreasing a variable's value by exactly 1. They are very common in loops.

*   **Increment (`++`)**: `x++;` or `++x;` Increases the value of `x` by 1.
*   **Decrement (`--`)**: `x--;` or `--x;` Decreases the value of `x` by 1.

Here's where it gets a little subtle, and this is a *very* important point that often trips students up: the difference between *prefix* (`++x`, `--x`) and *postfix* (`x++`, `x--`).

*   **Prefix (`++x`, `--x`)**: The operation (increment/decrement) is performed *before* the value of the variable is used in the expression.
*   **Postfix (`x++`, `x--`)**: The operation is performed *after* the value of the variable is used in the expression.

Let's use an analogy. Imagine you have a magical candy dispenser.

*   **`++candyCount` (Prefix):** You press the button, the dispenser *first* adds one candy to your stash, and *then* it gives you the *new* total count.
*   **`candyCount++` (Postfix):** You press the button, the dispenser *first* gives you the *current* count of candies you have, and *then* it adds one to your stash.

**Example:**
Consider:
`int a = 5;`
`int b = ++a;` // `a` becomes 6, then `b` is assigned 6. So, `a` is 6, `b` is 6.

`int x = 5;`
`int y = x++;` // `y` is assigned 5 (the original value of `x`), then `x` becomes 6. So, `x` is 6, `y` is 5.

This difference is crucial when these operators are used within larger expressions or statements. If `++x` or `x++` is used as a standalone statement (e.g., `x++;`), there's no functional difference; `x` will just be incremented. But within an expression, like `y = x++ + 10;`, the order matters immensely!

#### 6. Bitwise Operators

These operators work on the individual bits of their operands. They are often used in low-level programming, device driver development, or for specific optimization tasks. While perhaps not as immediately relevant to basic problem-solving in CO1, understanding them will be beneficial for deeper C knowledge and potentially for more complex scenarios.

*   **Bitwise AND (`&`)**: Performs AND operation on each pair of corresponding bits.
*   **Bitwise OR (`|`)**: Performs OR operation on each pair of corresponding bits.
*   **Bitwise XOR (`^`)**: Performs XOR (exclusive OR) operation on each pair of corresponding bits.
*   **Bitwise Complement (`~`)**: Inverts all the bits of the operand.
*   **Left Shift (`<<`)**: Shifts bits to the left, filling the rightmost bits with zeros. Effectively multiplies by powers of 2.
*   **Right Shift (`>>`)**: Shifts bits to the right. For unsigned numbers, it fills the leftmost bits with zeros. For signed numbers, the behavior can be implementation-defined (either zero-fill or sign-extend).

**Example:** Let's say you have the number 5, which in binary is `00000101`.
`~5` (Bitwise Complement) would result in `11111010`. (Assuming 8-bit representation, this would be -6 in two's complement).
`5 << 1` (Left Shift by 1) would result in `00001010`, which is 10. It's like multiplying 5 by 2.

#### 7. Conditional Operator (Ternary Operator)

This is a unique operator that acts like a compact `if-else` statement. It's a shorthand for simple conditional assignments. It takes three operands.

*   **Syntax:** `condition ? value_if_true : value_if_false`

**How it works:**
1.  The `condition` is evaluated.
2.  If `condition` is true (non-zero), the expression evaluates to `value_if_true`.
3.  If `condition` is false (zero), the expression evaluates to `value_if_false`.

**Example Scenario:** You want to assign the maximum of two numbers, `a` and `b`, to a variable `maxVal`.
Instead of:
`int maxVal;`
`if (a > b) {`
`  maxVal = a;`
`} else {`
`  maxVal = b;`
`}`

You can write it concisely using the ternary operator:
`int maxVal = (a > b) ? a : b;`
This single line achieves the same result! It's a great way to simplify simple conditional assignments, directly supporting the "basic constructs" part of CO1.

#### 8. Other Operators

C also has other important operators:

*   **Sizeof Operator (`sizeof`)**: This is a compile-time operator that returns the size, in bytes, of a variable or a data type. For example, `sizeof(int)` will tell you how many bytes an `int` typically occupies on your system. This is useful for memory management and understanding data type footprints.
*   **Comma Operator (`,`)**: Allows you to separate multiple expressions in a context where only one expression is expected. The expressions are evaluated from left to right, and the result of the entire comma expression is the result of the rightmost expression.
    *   **Example:** `int x = (a = 5, b = 10, a + b);` Here, `a` becomes 5, `b` becomes 10, and then `a + b` (which is 15) becomes the value assigned to `x`. So `x` would be 15.
*   **Pointer Operators (`*` and `&`)**: We'll cover these in detail when we get to pointers (CO4), but briefly:
    *   `&` (Address-of operator): Returns the memory address of a variable.
    *   `*` (Dereference operator): Accesses the value stored at a memory address.
*   **Member Access Operators (`.` and `->`)**: Used with structures and unions to access their members. We'll touch on these when we discuss those data types.

### Operator Precedence and Associativity: The "Order of Operations"

Now, this is where things can get tricky, and where many programming errors hide! What happens when you have an expression with multiple operators, like `5 + 3 * 2`? Does the addition happen first, or the multiplication?

Just like in mathematics, C has rules for the **order of evaluation** of operators, known as **operator precedence**. Operators with higher precedence are evaluated before operators with lower precedence.

If two operators have the same precedence, their **associativity** determines the order of evaluation. Associativity can be either left-to-right or right-to-left.

**Why is this important?**
Understanding precedence and associativity ensures your expressions are evaluated as you intend. Without it, you might get unexpected results, leading to bugs that are hard to track down. This directly ties into writing correct programs as per CO1.

Let's look at a common precedence table. You don't need to memorize every single one, but get a good feel for the common ones.

**A Simplified Precedence Table (Highest to Lowest):**

| Precedence Level | Operators                                     | Associativity   | Description                                                                 |
| :--------------- | :-------------------------------------------- | :-------------- | :-------------------------------------------------------------------------- |
| 1                | `()` `[]` `->` `.`                            | Left-to-Right   | Parentheses, array subscripting, structure/union member access              |
| 2                | `++` `--` `!` `~` `+` `-` `*` `&` `sizeof`      | Right-to-Left   | Unary operators (prefix, logical NOT, bitwise NOT, unary plus/minus, address-of, sizeof) |
| 3                | `*` `/` `%`                                   | Left-to-Right   | Multiplication, Division, Modulo                                            |
| 4                | `+` `-`                                       | Left-to-Right   | Addition, Subtraction                                                       |
| 5                | `<<` `>>`                                     | Left-to-Right   | Bitwise Left Shift, Bitwise Right Shift                                     |
| 6                | `<` `<=` `>` `>=`                             | Left-to-Right   | Relational Operators (less than, less/equal, greater than, greater/equal)  |
| 7                | `==` `!=`                                     | Left-to-Right   | Relational Operators (equal to, not equal to)                               |
| 8                | `&` (Bitwise AND)                             | Left-to-Right   | Bitwise AND                                                                 |
| 9                | `^` (Bitwise XOR)                             | Left-to-Right   | Bitwise XOR                                                                 |
| 10               | `|` (Bitwise OR)                              | Left-to-Right   | Bitwise OR                                                                  |
| 11               | `&&`                                          | Left-to-Right   | Logical AND                                                                 |
| 12               | `||`                                          | Left-to-Right   | Logical OR                                                                  |
| 13               | `?:`                                          | Right-to-Left   | Conditional (Ternary) Operator                                              |
| 14               | `=` `+=` `-=` `*=` `/=` `%=` `&=` `|=` `^=` `<<=` `>>=` | Right-to-Left   | Assignment Operators                                                        |
| 15               | `,`                                           | Left-to-Right   | Comma Operator                                                              |

**Let's break this down with examples:**

**Example 1: `5 + 3 * 2`**
*   Multiplication (`*`) has higher precedence than Addition (`+`).
*   So, `3 * 2` is evaluated first, resulting in `6`.
*   Then, `5 + 6` is evaluated, giving `11`.
*   The calculation proceeds as: `5 + (3 * 2) = 5 + 6 = 11`.

**Example 2: `10 / 2 * 3`**
*   Division (`/`) and Multiplication (`*`) have the same precedence.
*   Their associativity is Left-to-Right.
*   So, `10 / 2` is evaluated first, resulting in `5`.
*   Then, `5 * 3` is evaluated, giving `15`.
*   The calculation proceeds as: `(10 / 2) * 3 = 5 * 3 = 15`.

**Example 3: `a = b = 5`**
*   The assignment operator (`=`) has right-to-left associativity.
*   So, `b = 5` is evaluated first. The value 5 is assigned to `b`, and the result of this assignment (which is 5) is then assigned to `a`.
*   This is equivalent to `a = (b = 5);`. Both `a` and `b` will become 5.

**Example 4: `x++ * 2` where `x` is 5.**
*   The postfix increment (`x++`) has higher precedence than multiplication (`*`).
*   However, because it's *postfix*, the value of `x` (which is 5) is used in the expression *before* `x` is incremented.
*   So, the expression becomes `5 * 2`.
*   The result is `10`.
*   *After* the expression is evaluated, `x` is then incremented to 6.
*   So, if `y = x++ * 2;`, then `y` will be 10, and `x` will be 6.

**Example 5: `++x * 2` where `x` is 5.**
*   The prefix increment (`++x`) also has higher precedence than multiplication (`*`).
*   Because it's *prefix*, `x` is incremented *before* its value is used in the expression.
*   So, `x` becomes 6.
*   The expression then becomes `6 * 2`.
*   The result is `12`.
*   So, if `y = ++x * 2;`, then `y` will be 12, and `x` will be 6.

**The Power of Parentheses!**
If you're ever unsure about the order of evaluation, or if you want to force a specific order, you can always use parentheses `()`. Parentheses have the highest precedence, so expressions within them are always evaluated first.

Consider `5 + 3 * 2`. We know this is 11.
But if we write `(5 + 3) * 2`:
*   `(5 + 3)` is evaluated first due to parentheses, resulting in `8`.
*   Then, `8 * 2` is evaluated, giving `16`.

So, parentheses give you explicit control over the order of operations, making your code clearer and preventing ambiguity. Always use them when you want to override default precedence or to make complex expressions easier to read!

### Connecting to Course Outcomes

Let's briefly revisit how this topic directly supports our course objectives:

*   **CO1 (Knowledge Level K2): Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    *   Operators are the fundamental tools for performing calculations, comparisons, and logical decisions. Understanding arithmetic operators, relational operators (for `if`, `while`), and logical operators (`&&`, `||`, `!`) is essential for building any meaningful logic in your C programs. The ternary operator provides a compact way to express simple conditional logic.
*   **CO2 (Knowledge Level K3): Develop C programs using arrays, matrices, and strings.**
    *   While not directly about arrays/strings themselves, operators are used *on* the elements within arrays, matrices, and strings. For example, you'll use arithmetic operators to sum elements in an array, relational operators to compare string characters, and potentially bitwise operators for specific string manipulations.
*   **CO3 (Knowledge Level K3): Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    *   Functions themselves contain expressions built with operators. The logic within functions relies heavily on the correct application of arithmetic, relational, and logical operators.
*   **CO4 (Knowledge Level K3): Develop C programs using pointers for dynamic data handling.**
    *   Pointer operators (`*` and `&`) are core to pointer manipulation. Understanding how these operators work is paramount for mastering pointers.
*   **CO5 (Knowledge Level K3): Use files in C to permanently store and manipulate data.**
    *   When reading from or writing to files, you'll often perform operations on the data read, using arithmetic, relational, and logical operators to process and make decisions about the file content.

Essentially, operators are woven into the fabric of every C program. Their correct understanding and application are non-negotiable for successful programming.

### Common Pitfalls and Exam Tips

*   **`=` vs. `==`**: This is the classic mistake. Always remember assignment is a single equals, comparison is a double equals. A common exam question might present a code snippet with this error.
*   **Integer Division**: Forgetting that `int / int` truncates. If you expect a decimal result, ensure at least one operand is a `float` or `double`.
*   **Prefix vs. Postfix Increment/Decrement**: Especially when used within expressions. If an exam asks for the value of a variable or another variable after a complex expression involving `++x` or `x++`, carefully trace the evaluation step-by-step.
*   **Operator Precedence**: If an expression looks complex, mentally (or on scratch paper) insert parentheses based on precedence rules. Or better yet, use parentheses in your code to make it explicit! If an exam question asks to evaluate an expression without parentheses, carefully apply the precedence and associativity rules.
*   **Logical Operators with Assignment**: Avoid `if (x = 5)`. This assigns 5 to `x` and then checks if the *result of the assignment* (which is 5, hence true) allows the `if` block to execute. It should almost always be `if (x == 5)`.

### Summary - What to Remember

*   Operators are symbols that perform operations on operands.
*   C has various operator categories: Arithmetic, Relational, Logical, Assignment, Increment/Decrement, Bitwise, Conditional, etc.
*   **Operator Precedence** dictates the order in which operators are evaluated.
*   **Associativity** determines the order for operators of the same precedence (left-to-right or right-to-left).
*   Parentheses `()` can be used to override precedence and ensure specific evaluation orders.
*   Be mindful of the `=` vs. `==` distinction and integer division.
*   The difference between prefix (`++x`) and postfix (`x++`) is critical when the operator's result is used in an expression.

Mastering operators and their precedence is like learning the alphabet and grammar of the C language. It empowers you to express complex instructions precisely and efficiently. Keep practicing, and you'll find yourself using them instinctively!

---

### Sample Questions with Answers

**Question 1 (Conceptual):** Explain the difference between the `=` and `==` operators in C. Why is this distinction important in programming?

**Answer:**
The `=` operator is the **assignment operator**. It is used to assign the value of the right operand to the left operand (which must be a variable). For example, `x = 10;` assigns the value 10 to the variable `x`.
The `==` operator is the **equality relational operator**. It is used to compare the values of its two operands. It returns `1` (true) if the operands are equal, and `0` (false) otherwise. For example, `if (x == 10)` checks if the current value of `x` is equal to 10.

This distinction is crucial because using `=` instead of `==` in a conditional statement (like `if` or `while`) leads to a **logical error**. Instead of comparing values, the code will attempt to assign a value, and the outcome of the assignment (which is the assigned value itself) will be used for the condition. This often results in unintended program behavior, as the condition might always evaluate to true or false unexpectedly. For instance, `if (x = 5)` will assign 5 to `x` and then evaluate the condition based on `5`, which is always true, causing the `if` block to execute regardless of `x`'s original value.

**Question 2 (Exam-Oriented - Evaluation):** What will be the output of the following C code snippet?

```c
#include <stdio.h>

int main() {
    int a = 7;
    int b = 3;
    int result1 = a / b;
    int result2 = a % b;
    printf("Result1: %d, Result2: %d\n", result1, result2);
    return 0;
}
```

**Answer:**
The output will be:
```
Result1: 2, Result2: 1
```
**Reasoning:**
*   `result1 = a / b;`: Here, `a` is 7 and `b` is 3. Both are integers. C performs **integer division** when both operands are integers. `7` divided by `3` is `2` with a remainder of `1`. Integer division discards the fractional part, so `7 / 3` evaluates to `2`.
*   `result2 = a % b;`: The modulo operator `%` gives the remainder of an integer division. `7 % 3` is `1`.
*   Therefore, `result1` becomes `2` and `result2` becomes `1`.

**Question 3 (Exam-Oriented - Precedence):** Evaluate the expression: `x = 10 + 5 * 3 - 6 / 2;` assuming `x` is an integer. What is the value of `x`?

**Answer:**
The value of `x` will be `25`.

**Reasoning:**
We need to follow operator precedence:
1.  **Multiplication and Division** have higher precedence than Addition and Subtraction, and they are evaluated from left to right.
    *   `5 * 3` evaluates to `15`.
    *   `6 / 2` evaluates to `3` (integer division).
    The expression becomes: `x = 10 + 15 - 3;`

2.  **Addition and Subtraction** have the next highest precedence and are evaluated from left to right.
    *   `10 + 15` evaluates to `25`.
    The expression becomes: `x = 25 - 3;`
    *   `25 - 3` evaluates to `22`.
    The expression becomes: `x = 22;`

Wait! Let me re-check my work. Oh, I made a mistake in my manual evaluation! Let's trace carefully again.

Correct Reasoning:
1.  **Multiplication (`*`) and Division (`/`)** have higher precedence than **Addition (`+`) and Subtraction (`-`)**. They are evaluated from left to right.
    *   `5 * 3` is `15`.
    *   `6 / 2` is `3` (integer division).
    The expression is now `x = 10 + 15 - 3;`

2.  **Addition (`+`) and Subtraction (`-`)** have the same precedence and are evaluated from left to right.
    *   `10 + 15` is `25`.
    The expression is now `x = 25 - 3;`
    *   `25 - 3` is `22`.
    The expression is now `x = 22;`

My apologies, I got excited and miscalculated in my explanation. The value of `x` is **22**.

*(Self-correction is important for all of us! This highlights why understanding the order is so crucial.)*

**Question 4 (Exam-Oriented - Increment/Decrement):** What will be the output of the following code?

```c
#include <stdio.h>

int main() {
    int i = 5;
    int j = i++ + ++i;
    printf("i = %d, j = %d\n", i, j);
    return 0;
}
```

**Answer:**
The output will be: `i = 7, j = 12`

**Reasoning:**
Let's trace the evaluation of `j = i++ + ++i;` step-by-step, keeping in mind `i` starts at 5.

1.  **`i++` (postfix increment):** The *current value* of `i` (which is 5) is used in the expression, and *then* `i` is incremented. So, the first part contributes `5` to the sum, and `i` becomes `6`.
    The expression conceptually becomes: `j = 5 + (++i);` (and `i` is now 6)

2.  **`++i` (prefix increment):** `i` is incremented *before* its value is used. Since `i` is currently `6`, it becomes `7`. This new value (`7`) is then used in the expression.
    The expression conceptually becomes: `j = 5 + 7;` (and `i` is now 7)

3.  **Addition:** `5 + 7` is evaluated, resulting in `12`. This value is assigned to `j`.
    So, `j` becomes `12`.

4.  **Final state:** `i` was incremented twice (once by `i++` and once by `++i`), so its final value is `7`. `j` received the sum `5 + 7`, which is `12`.

Therefore, the output is `i = 7, j = 12`.

**Question 5 (Conceptual):** What is the purpose of the conditional (ternary) operator in C? Provide an example.

**Answer:**
The conditional operator (ternary operator), denoted by `?:`, is a shorthand for a simple `if-else` statement that assigns a value to a variable. It allows for compact representation of conditional assignments.

**Syntax:** `condition ? value_if_true : value_if_false`

**Example:**
Suppose you want to determine if a number `score` is a "Pass" or "Fail". If the score is 50 or more, it's a pass; otherwise, it's a fail.

**Using if-else:**
```c
char grade[5]; // To store "Pass" or "Fail"
int score = 65;
if (score >= 50) {
    strcpy(grade, "Pass"); // Assuming string functions are used
} else {
    strcpy(grade, "Fail");
}
```

**Using the ternary operator:**
```c
char grade[5];
int score = 65;
strcpy(grade, (score >= 50) ? "Pass" : "Fail");
```
This single line using the ternary operator achieves the same result as the `if-else` block above, making the code more concise for simple conditional assignments.
