---
title: "Operators and its precedence"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals  "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f98df"
status: "completed"
scrapedAt: "2026-05-23T16:08:56.700Z"
---
# PROGRAMMING IN C: Module 1: C Fundamentals

## Topic: Operators and their Precedence

Welcome, everyone! Today, we're diving into a really fundamental, yet incredibly powerful, aspect of C programming: **Operators**. Think of operators as the glue that holds our expressions together, the verbs that tell the computer what to *do* with the data we give it. Without operators, our programs would just be a collection of numbers and symbols, unable to perform any meaningful computation.

This topic is crucial because it directly impacts how our programs behave. Understanding operators and their precedence is like learning the grammar of C. If you misuse them, or don't understand the order in which they're evaluated, your programs might produce unexpected results, leading to bugs that can be quite tricky to track down. This is why it's so important to grasp this concept thoroughly, as it's the bedrock for building more complex logic.

In C, we have a rich set of operators, each designed for specific tasks. We'll explore these, and then crucially, we'll tackle the concept of **operator precedence** – the rules that dictate which operation gets performed first when you have multiple operators in a single expression. This is key to understanding how C evaluates complex mathematical and logical statements, and it directly supports our **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language**. Why? Because solving a problem often involves combining different operations, and knowing the rules ensures our C code translates your logical steps accurately.

Let's start by categorizing the operators we commonly use in C. We can think of them in a few broad groups.

### 1. Arithmetic Operators

These are the workhorses for calculations, just like the ones you're used to in mathematics.

*   **Addition (`+`):** Combines two values.
    *   *Example:* `int sum = 10 + 5;` (Here, `+` adds 10 and 5).
    *   *Relatable:* Imagine you have 10 apples in one basket and 5 in another. The `+` operator tells you how many apples you have in total if you combine them.

*   **Subtraction (`-`):** Finds the difference between two values.
    *   *Example:* `int difference = 20 - 7;` (Here, `-` subtracts 7 from 20).
    *   *Relatable:* If you started with 20 cookies and ate 7, the `-` operator helps you calculate how many you have left.

*   **Multiplication (`*`):** Finds the product of two values.
    *   *Example:* `int product = 6 * 3;` (Here, `*` multiplies 6 by 3).
    *   *Relatable:* If you have 6 boxes, and each box contains 3 pencils, the `*` operator tells you the total number of pencils.

*   **Division (`/`):** Divides one value by another. This one has a slight twist depending on the data types involved.
    *   *Example (integer division):* `int result = 10 / 3;` (This will result in `3`, not `3.33...`. Why? Because both operands are integers, C performs integer division, discarding any fractional part).
    *   *Example (floating-point division):* `float result = 10.0 / 3;` (This will result in approximately `3.33333`. Notice one of the operands is a float, forcing floating-point division).
    *   *Relatable:* Imagine dividing 10 candies equally among 3 friends. If you can only give whole candies, everyone gets 3, and there's 1 left over. That's integer division! If you could cut the candies, then it would be a fractional amount, like floating-point division.

*   **Modulo (`%`):** This is an interesting one! It gives you the *remainder* of an integer division.
    *   *Example:* `int remainder = 10 % 3;` (This will result in `1`. When 10 is divided by 3, the quotient is 3, and the remainder is 1).
    *   *Relatable:* Going back to the candy example, when you gave 3 candies to each of the 3 friends from your 10, the `%` operator tells you how many candies are *left over*. It's super useful for checking divisibility or for tasks that involve cycles.

**Key Takeaway for Arithmetic Operators:** Be mindful of integer division versus floating-point division. This is a common source of errors for beginners!

### 2. Relational (Comparison) Operators

These operators are used to compare two values and return a boolean result: either `true` (represented by 1 in C) or `false` (represented by 0). These are fundamental for making decisions in your programs and directly relate to **CO1** for control flow.

*   **Equal to (`==`):** Checks if two values are equal.
    *   *Example:* `if (x == 5) { ... }` (This block will execute only if the value of `x` is exactly 5).
    *   *Important:* Notice it's `==` (two equals signs), not just `=` (which is the assignment operator!). This is a critical distinction.

*   **Not equal to (`!=`):** Checks if two values are not equal.
    *   *Example:* `if (status != 'E') { ... }` (This block executes if the `status` is anything other than the character 'E').

*   **Greater than (`>`):** Checks if the left operand is greater than the right.
    *   *Example:* `if (score > 90) { ... }`

*   **Less than (`<`):** Checks if the left operand is less than the right.
    *   *Example:* `if (age < 18) { ... }`

*   **Greater than or equal to (`>=`):** Checks if the left operand is greater than or equal to the right.
    *   *Example:* `if (temperature >= 100) { ... }`

*   **Less than or equal to (`<=`):** Checks if the left operand is less than or equal to the right.
    *   *Example:* `if (salary <= 50000) { ... }`

**Relatable Analogy:** Think of a vending machine. You want a snack that costs $1.50.
*   `amount_inserted == 1.50` checks if you've inserted the exact amount.
*   `amount_inserted > 1.50` checks if you've put in too much.
*   `amount_inserted < 1.50` checks if you haven't put in enough.
*   `amount_inserted != 1.50` checks if the amount is anything other than $1.50.

These comparisons are the foundation of all decision-making in programs, whether it's choosing a path in an `if` statement or repeating a task in a `while` loop.

### 3. Logical Operators

These operators combine the results of two or more relational expressions. They are essential for building complex conditions, again supporting **CO1**.

*   **Logical AND (`&&`):** Returns `true` (1) only if *both* operands are `true`.
    *   *Example:* `if (age >= 18 && has_license) { ... }` (This means you must be 18 or older *and* have a license to proceed).
    *   *Relatable:* To get into a concert, you need both a ticket (`has_ticket`) AND to be over 16 (`age >= 16`). Both conditions must be met.

*   **Logical OR (`||`):** Returns `true` (1) if *at least one* of the operands is `true`.
    *   *Example:* `if (day == 'S' || day == 's') { ... }` (This checks if the `day` variable is either an uppercase 'S' or a lowercase 's', perhaps to determine if it's a weekend).
    *   *Relatable:* You can pay for your coffee with either cash (`paid_with_cash`) OR a credit card (`paid_with_credit_card`). If either is true, the payment is accepted.

*   **Logical NOT (`!`):** Reverses the logical state of its operand. If the operand is `true`, `!` makes it `false`, and vice-versa.
    *   *Example:* `if (!is_logged_in) { ... }` (This block executes if the user is *not* logged in).
    *   *Relatable:* If a light switch is ON, `!` turns it OFF. If it's OFF, `!` turns it ON.

**Important Note on Logical Operators:** C evaluates logical expressions from left to right. If the outcome can be determined from the first operand (e.g., the left operand is `false` in a `&&` operation, or `true` in a `||` operation), the second operand is *not* evaluated. This is called **short-circuit evaluation**, and it's a neat optimization C provides.

### 4. Assignment Operators

These are used to assign values to variables.

*   **Simple Assignment (`=`):** Assigns the value of the right operand to the left operand.
    *   *Example:* `int count = 0;` (Assigns the value 0 to the variable `count`).
    *   *Relatable:* This is like saying, "This box (variable) will hold this value (0)."

*   **Compound Assignment Operators:** These are shorthand operators that combine an arithmetic or bitwise operation with an assignment. They are very common in C programming for conciseness and efficiency.

    *   **`+=` (Add and Assign):** `x += 5;` is equivalent to `x = x + 5;`
        *   *Relatable:* If `x` is your current score, `x += 5` means "add 5 to my current score and update my score."

    *   **`-=` (Subtract and Assign):** `y -= 2;` is equivalent to `y = y - 2;`
        *   *Relatable:* If `y` is the number of items in stock, `y -= 2` means "reduce the stock by 2."

    *   **`*=` (Multiply and Assign):** `z *= 3;` is equivalent to `z = z * 3;`
        *   *Relatable:* If `z` is your salary multiplier, `z *= 3` means "triple your salary."

    *   **`/=` (Divide and Assign):** `a /= 4;` is equivalent to `a = a / 4;`
        *   *Relatable:* If `a` is a total cost to be split among 4 people, `a /= 4` means "calculate each person's share."

    *   **`%=` (Modulo and Assign):** `b %= 7;` is equivalent to `b = b % 7;`
        *   *Relatable:* If `b` is a day number (0-6 for Monday-Sunday), `b %= 7` can help wrap it around if you add days.

These compound assignment operators not only make your code shorter but can also sometimes be more efficient as the compiler can optimize them.

### 5. Increment and Decrement Operators

These are specialized operators for adding or subtracting 1 from a variable. They are incredibly common in C, especially in loops, and are a key part of **CO1**.

*   **Increment (`++`):** Adds 1 to the variable.
*   **Decrement (`--`):** Subtracts 1 from the variable.

Now, these operators have two forms: **prefix** and **postfix**. This is where operator precedence starts to become very important!

*   **Prefix Increment (`++variable`):** The variable is incremented *first*, and then its *new value* is used in the expression.
    *   *Example:* `int a = 5; int b = ++a;`
        *   First, `a` becomes 6.
        *   Then, the new value of `a` (which is 6) is assigned to `b`.
        *   So, after this, `a` is 6 and `b` is 6.

*   **Postfix Increment (`variable++`):** The variable's *current value* is used in the expression *first*, and then the variable is incremented.
    *   *Example:* `int a = 5; int b = a++;`
        *   First, the current value of `a` (which is 5) is assigned to `b`.
        *   Then, `a` is incremented to 6.
        *   So, after this, `a` is 6 and `b` is 5.

The same logic applies to decrement operators (`--`).

**Prefix Decrement (`--variable`):** Decrement first, then use the new value.
    *   *Example:* `int x = 10; int y = --x;` (x becomes 9, then y becomes 9. x=9, y=9)

**Postfix Decrement (`variable--`):** Use current value first, then decrement.
    *   *Example:* `int x = 10; int y = x--;` (y becomes 10, then x becomes 9. x=9, y=10)

**Relatable Analogy:** Imagine you're at a counter.
*   **Prefix (`++a`):** The cashier takes the next number from the ticket dispenser (increments the number), then calls that new number.
*   **Postfix (`a++`):** The cashier calls the *current* number, then takes the next number from the dispenser.

These are frequently tested concepts in exams, so understanding the difference between prefix and postfix is crucial!

### 6. Bitwise Operators

These operators work directly on the individual bits of integers. While not as commonly used in everyday problem-solving for beginners, they are powerful for low-level operations, system programming, and certain algorithms, and can be relevant to more advanced aspects of **CO2** (manipulating data at a lower level) or **CO4** (understanding how data is represented).

*   **Bitwise AND (`&`):** Performs AND operation on each corresponding bit of two operands.
*   **Bitwise OR (`|`):** Performs OR operation on each corresponding bit.
*   **Bitwise XOR (`^`):** Performs XOR (exclusive OR) operation on each corresponding bit.
*   **Bitwise NOT (`~`):** Inverts all the bits of an operand.
*   **Left Shift (`<<`):** Shifts bits to the left, effectively multiplying by powers of 2.
*   **Right Shift (`>>`):** Shifts bits to the right, effectively dividing by powers of 2.

*Example:*
Let's say `a = 5` (binary `0101`) and `b = 3` (binary `0011`).
*   `a & b`: `0101 & 0011` = `0001` (which is 1)
*   `a | b`: `0101 | 0011` = `0111` (which is 7)
*   `a ^ b`: `0101 ^ 0011` = `0110` (which is 6)
*   `~a`: `~0101` = `1010` (depending on integer size, this would be a negative number, e.g., -6 for an 8-bit signed integer)
*   `a << 1`: `0101 << 1` = `1010` (which is 10, same as 5 * 2)
*   `a >> 1`: `0101 >> 1` = `0010` (which is 2, same as 5 / 2 using integer division)

These are more advanced, but it's good to know they exist.

### 7. Miscellaneous Operators

C also has a few other important operators.

*   **Conditional (Ternary) Operator (`? :`)**
    This is a shorthand for an `if-else` statement. It's very useful for simple conditional assignments.
    *   *Syntax:* `expression1 ? expression_if_true : expression_if_false`
    *   *Example:* `int max = (a > b) ? a : b;` (If `a` is greater than `b`, assign `a` to `max`; otherwise, assign `b` to `max`).
    *   *Relatable:* It's like saying, "If you pass the test (condition), you get a reward (value if true); otherwise, you get a different outcome (value if false)." This is a great tool for making your code more compact, supporting **CO1**.

*   **Sizeof Operator (`sizeof`)**
    This operator returns the size, in bytes, of a variable or a data type. It's crucial for understanding memory usage and can be indirectly related to **CO4** when dealing with dynamic memory.
    *   *Example:* `int num; printf("%zu", sizeof(num));` (This will print the size of an integer on your system, typically 4 bytes).
    *   *Example:* `printf("%zu", sizeof(float));` (This will print the size of a float, typically 4 bytes).
    *   *Note:* We use `%zu` as the format specifier for `sizeof` as it returns a `size_t` type.

*   **Comma Operator (`,`)**
    The comma operator evaluates its operands from left to right. The value of the entire expression is the value of the right operand. It's not used very often, but it can be useful in `for` loop initializations or conditions to combine multiple expressions.
    *   *Example:* `x = (y = 5, y + 10);`
        *   First, `y` is assigned 5.
        *   Then, `y + 10` (which is 15) is evaluated.
        *   Finally, this value (15) is assigned to `x`. So, `y` becomes 5 and `x` becomes 15.
    *   *Common Use Case:* In `for` loops: `for (i = 0, j = 10; i < j; i++, j--) { ... }` Here, the comma operator allows us to initialize and update two variables (`i` and `j`) within the same `for` loop structure.

*   **Pointer Operators (`*` and `&`)**
    These are fundamental to pointer manipulation, supporting **CO4**.
    *   **Address-of Operator (`&`):** Returns the memory address of a variable.
        *   *Example:* `int var = 10; int *ptr = &var;` (Here, `&var` gives the memory address where `var` is stored, and this address is assigned to the pointer variable `ptr`).
    *   **Dereference Operator (`*`):** Accesses the value stored at the memory address pointed to by a pointer.
        *   *Example:* `printf("%d", *ptr);` (This will print the value stored at the address `ptr` is pointing to, which is the value of `var`, so it prints 10).

### Operator Precedence and Associativity

Now, let's talk about the rules of engagement when you have multiple operators in a single expression. Just like in math where multiplication happens before addition (e.g., `2 + 3 * 4` is `2 + 12 = 14`, not `(2 + 3) * 4 = 20`), C has its own hierarchy. This is **operator precedence**.

**Operator precedence** determines the order in which operations are performed. Operators with higher precedence are evaluated before operators with lower precedence.

**Associativity** determines the order of evaluation when operators have the same precedence. It can be either **left-to-right** or **right-to-left**.

Why is this so important? Imagine you're building a complex calculation for a physics simulation or a financial model. If you don't understand precedence, your formula might be evaluated in a way that produces completely wrong results, even if the individual operators are correct. This is a direct application of **CO1** – translating a problem's logic into code.

Let's look at a table of common C operators, ordered by precedence (highest at the top).

| Precedence | Operators                                      | Associativity     | Description                                              |
| :--------- | :--------------------------------------------- | :---------------- | :------------------------------------------------------- |
| 1          | `()` `[]` `->` `.`                             | Left-to-right     | Parentheses, Array subscript, Member access            |
| 2          | `!` `~` `++` `--` `+` `-` `*` `&` `sizeof`     | Right-to-left     | Unary operators (Logical NOT, Bitwise NOT, Inc/Dec, Unary +/- , Dereference, Address-of, Sizeof) |
| 3          | `*` `/` `%`                                    | Left-to-right     | Multiplicative operators                                 |
| 4          | `+` `-`                                        | Left-to-right     | Additive operators                                       |
| 5          | `<<` `>>`                                      | Left-to-right     | Bitwise shift operators                                  |
| 6          | `<` `<=` `>` `>=`                               | Left-to-right     | Relational operators                                     |
| 7          | `==` `!=`                                      | Left-to-right     | Equality operators                                       |
| 8          | `&`                                            | Left-to-right     | Bitwise AND                                              |
| 9          | `^`                                            | Left-to-right     | Bitwise XOR                                              |
| 10         | `\|`                                           | Left-to-right     | Bitwise OR                                               |
| 11         | `&&`                                           | Left-to-right     | Logical AND                                              |
| 12         | `\|\|`                                         | Left-to-right     | Logical OR                                               |
| 13         | `?:`                                           | Right-to-left     | Conditional (Ternary) operator                           |
| 14         | `=` `+=` `-=` `*=` `/=` `%=` `&=` `|=` `^=` `<<=` `>>=` | Right-to-left     | Assignment operators                                     |
| 15         | `,`                                            | Left-to-right     | Comma operator                                           |

*(Note: This is a simplified table; the full C standard defines precedence for all operators.)*

Let's break down some key precedence examples:

**Example 1: Mixed Arithmetic Operators**
Consider the expression: `int result = 5 + 3 * 2;`

1.  Multiplication (`*`) has higher precedence than addition (`+`).
2.  So, `3 * 2` is evaluated first, resulting in `6`.
3.  The expression becomes `result = 5 + 6;`.
4.  Then, addition (`+`) is evaluated, resulting in `11`.
5.  So, `result` will be `11`.

If we wanted `(5 + 3) * 2` (which is `8 * 2 = 16`), we would use parentheses to override the default precedence: `int result = (5 + 3) * 2;`. This highlights the power of parentheses!

**Example 2: Unary Operators and Arithmetic**
Consider: `int a = 10; int b = 5; int c = -a++ * b;`

This expression combines multiple operators with different precedences and associativities. Let's trace it carefully:

*   **`a++`**: This is a postfix increment operator (Precedence 2, Right-to-left associativity). The *current* value of `a` (10) is used, and *then* `a` is incremented to 11. So, the expression effectively becomes `c = -10 * b;`.
*   **`-a++`**: The unary minus operator (Precedence 2, Right-to-left associativity) applies to the value of `a++`. Since `a++` evaluates to 10 (before `a` becomes 11), the unary minus makes it `-10`. So, the expression is now `c = -10 * b;`.
*   **`* b`**: The multiplication operator (`*`) has higher precedence (Precedence 3, Left-to-right associativity) than the assignment operator. So, `-10 * b` is evaluated. Since `b` is 5, this is `-10 * 5`, which equals `-50`.
*   **`c = -50`**: Finally, the assignment operator (`=`) (Precedence 14, Right-to-left associativity) assigns the value `-50` to `c`.

After this statement:
*   `a` would be `11` (due to `a++`)
*   `b` would still be `5`
*   `c` would be `-50`

This example demonstrates why understanding the order is vital. Even a small oversight can lead to unexpected outcomes.

**Example 3: Logical Operators and Relational Operators**
Consider: `int x = 10, y = 20, z = 30; int result = x < y && y < z;`

1.  Relational operators (`<`) have higher precedence (Precedence 6) than logical AND (`&&`) (Precedence 11).
2.  So, `x < y` is evaluated first: `10 < 20` is true (1).
3.  Then, `y < z` is evaluated: `20 < 30` is true (1).
4.  The expression becomes `result = 1 && 1;`.
5.  The logical AND (`&&`) is evaluated: `1 && 1` is true (1).
6.  So, `result` will be `1`.

If we had `int result = x < y && y > z;`:
1.  `x < y` is `10 < 20`, which is true (1).
2.  `y > z` is `20 > 30`, which is false (0).
3.  The expression becomes `result = 1 && 0;`.
4.  `1 && 0` is false (0).
5.  So, `result` will be `0`.

**Common Pitfalls and Exam Tips:**

*   **`=` vs. `==`:** The most common error! `=` is for assignment, `==` is for comparison. `if (x = 5)` is syntactically valid but usually a bug, as it assigns 5 to `x` and then checks if 5 is "true" (which it always is for non-zero values), making the condition always true. The correct form is `if (x == 5)`.
*   **Integer Division:** Remember `10 / 3` is `3`, not `3.33...`. Cast to `float` or `double` if you need floating-point results.
*   **Prefix vs. Postfix:** Carefully analyze where the increment/decrement happens relative to its use in the expression. This is a staple for exam questions testing understanding.
*   **Parentheses:** When in doubt, use parentheses to explicitly define the order of operations. It makes your code clearer and less prone to precedence errors.
*   **Operator Precedence Table:** While you don't need to memorize the entire table, know the common ones: unary operators, multiplication/division, addition/subtraction, relational, logical AND/OR, and assignment.

Understanding operators and their precedence is a cornerstone of C programming. It empowers you to write correct, efficient, and predictable code, forming a solid foundation for all subsequent modules and supporting **CO1** by enabling you to accurately translate computational problems into executable C programs.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
What is the difference between the `==` operator and the `=` operator in C?

**Answer:**
The `=` operator is the **assignment operator**. It is used to assign a value to a variable. For example, `x = 10;` assigns the value 10 to the variable `x`.
The `==` operator is the **equality comparison operator**. It is used to check if two values are equal. It returns `1` (true) if they are equal and `0` (false) if they are not. For example, `if (x == 10)` checks if the value of `x` is equal to 10. A common mistake is using `=` where `==` is intended within conditional statements (`if`, `while`, etc.), which often leads to logical errors.

**Question 2 (Exam-Oriented - Precedence):**
What will be the output of the following C code snippet?

```c
#include <stdio.h>

int main() {
    int a = 5;
    int b = 10;
    int result = a * b++ - ++a;
    printf("%d\n", result);
    return 0;
}
```

**Answer:**
Let's trace the evaluation of `result = a * b++ - ++a;`
The initial values are `a = 5`, `b = 10`.

1.  **`++a` (Prefix Increment):** `a` is incremented first. `a` becomes `6`. The value used in the expression is `6`.
2.  **`b++` (Postfix Increment):** The current value of `b` (`10`) is used first in the expression, and *then* `b` is incremented to `11`.
3.  The expression now effectively looks like: `result = 5 * 10 - 6;` (using the pre-incremented value of `a` but the original value of `b` for the multiplication, and the post-incremented value of `a` for the subtraction).

    *Hold on a moment!* The order of evaluation of operands for operators with different precedences and associativities can be tricky, especially with side effects (like `++` and `--`). Let's break down the standard precedence rules.

    The expression is `a * b++ - ++a`.
    Operators involved: `*`, `-`, `++` (postfix), `++` (prefix).

    Precedence order:
    *   `++a` (prefix) is highest among these, evaluated first: `a` becomes 6. The expression effectively becomes `a * b++ - 6`.
    *   `a` (now 6) `*` `b++`: The `*` operator has higher precedence than `-` and assignment. The postfix `b++` uses `b`'s current value (10) and then increments `b` to 11. The `a` in `a * b++` still refers to its *original* value *before* the `--` is considered in the overall chain if it were `a-- * b`. However, because `++a` comes *after* the `*`, the evaluation might be slightly different.

    Let's re-evaluate using a strict left-to-right scan for operators of the same precedence level when their evaluation order matters:

    Consider `a * b++ - ++a`
    1.  `++a`: `a` becomes 6. Expression state: `6 * b++ - 6`
    2.  `b++`: `b`'s current value is 10, then `b` becomes 11. Expression state: `6 * 10 - 6`
    3.  `*` operator (precedence 3) is evaluated before `-` (precedence 4): `6 * 10` = `60`. Expression state: `60 - 6`.
    4.  `-` operator: `60 - 6` = `54`.
    5.  Assignment `=`: `result = 54`.

    Therefore, the output will be **54**.

    *(Self-correction/Refinement)*: The key is that prefix `++a` modifies `a` *before* it's used in the expression. Postfix `b++` uses `b`'s value *before* it's modified. When multiple side effects occur, the order can be compiler-dependent if not strictly defined by precedence. However, for `a * b++ - ++a`, standard interpretation is:
    *   `++a` evaluates to 6. `a` becomes 6.
    *   `b++` evaluates to 10. `b` becomes 11.
    *   `a` in `a *` refers to its value *after* the `++a` operation, which is 6.
    *   So, `6 * 10 - 6` (where 6 is from `++a`, 10 from `b++`, and the final 6 from the conceptually pre-incremented `a` used in subtraction).
    *   The evaluation is `(6 * 10) - 6 = 60 - 6 = 54`.

**Question 3 (Conceptual):**
Explain the purpose of the `sizeof` operator and provide an example of its use.

**Answer:**
The `sizeof` operator is a compile-time operator in C that returns the size, in bytes, of a variable, data type, or expression. It's used to determine how much memory is allocated for a particular piece of data. This is important for memory management, portability (as sizes of data types can vary between systems), and understanding data structures.

**Example:**
```c
#include <stdio.h>

int main() {
    int my_integer;
    float my_float;
    char my_char;

    printf("Size of int: %zu bytes\n", sizeof(my_integer));
    printf("Size of float: %zu bytes\n", sizeof(float));
    printf("Size of char: %zu bytes\n", sizeof(my_char));

    return 0;
}
```
In this example, `sizeof(my_integer)` will return the number of bytes an `int` occupies on the specific system where the code is compiled and run (commonly 4 bytes). `sizeof(float)` typically returns 4 bytes, and `sizeof(my_char)` typically returns 1 byte. The `%zu` format specifier is used because `sizeof` returns a `size_t` type, which is an unsigned integer type guaranteed to be large enough to hold the size of any object.

**Question 4 (Conceptual/Exam-Oriented):**
What is operator precedence, and why is it important in C programming? Provide an example showing how parentheses can alter the order of evaluation.

**Answer:**
Operator precedence is a set of rules that dictate the order in which operations are performed in an expression containing multiple operators. Operators with higher precedence are evaluated before operators with lower precedence. When operators have the same precedence, associativity (left-to-right or right-to-left) determines the order.

Operator precedence is crucial because it ensures that expressions are evaluated consistently and predictably, producing the intended results. Without these rules, the same expression could be interpreted in different ways, leading to incorrect program behavior. Understanding precedence allows you to write complex expressions correctly and to debug issues arising from unexpected evaluation orders.

**Example:**
Consider the expression: `int x = 10 + 2 * 3;`
According to precedence rules, multiplication (`*`) has higher precedence than addition (`+`).
1.  `2 * 3` is evaluated first, resulting in `6`.
2.  The expression becomes `x = 10 + 6;`.
3.  Then, `10 + 6` is evaluated, resulting in `16`.
4.  So, `x` will be assigned the value `16`.

Now, consider using parentheses to change the order: `int y = (10 + 2) * 3;`
1.  The expression inside the parentheses `(10 + 2)` is evaluated first due to the higher precedence of parentheses. This results in `12`.
2.  The expression becomes `y = 12 * 3;`.
3.  Then, `12 * 3` is evaluated, resulting in `36`.
4.  So, `y` will be assigned the value `36`.

This example clearly shows how parentheses can override the default operator precedence to achieve a different calculation.
