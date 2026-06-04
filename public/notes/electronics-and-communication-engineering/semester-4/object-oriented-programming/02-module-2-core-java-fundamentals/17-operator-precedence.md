---
title: "Operator Precedence."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe686"
status: "completed"
scrapedAt: "2026-05-23T17:51:29.875Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Core Java Fundamentals

### Topic: Operator Precedence

---

### 1. Introduction to Operators and Precedence

**Learning Outcome:** Understand the fundamental building blocks of Java expressions, including how operators interact and are evaluated.

**Key Concepts:**

*   **Operators:** Symbols that perform operations on one or more operands (variables or values).
*   **Operands:** The values or variables that operators act upon.
*   **Expressions:** A combination of operands, operators, and sometimes values that evaluates to a single value.
*   **Operator Precedence:** A rule that determines the order in which operations are performed in an expression when multiple operators are present. It dictates which operator is evaluated first.
*   **Associativity:** A rule that determines the order of evaluation for operators of the same precedence level. It can be either left-to-right or right-to-left.

**Why Operator Precedence Matters:**

Without a defined order of operations, expressions could be interpreted in multiple ways, leading to unexpected and incorrect results. Operator precedence ensures consistent and predictable behavior in calculations. This is fundamental to building correct programs that manipulate data accurately, directly contributing to **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**

**Reference:**

*   **Java: The Complete Reference by Herbert Schildt (8/e):** Chapter 4, "Expressions," discusses operators and their evaluation order.
*   **Java How to Program by Deitel & Deitel (11th Ed.):** Chapter 3, "Introduction to Classes, Objects, Methods, Instance Variables, Strings and References," often introduces basic arithmetic operators and their evaluation.

---

### 2. Operator Precedence Table (Java)

**Key Concept:** Java defines a specific hierarchy for its operators. Operators with higher precedence are evaluated before operators with lower precedence.

**The Operator Precedence Table (from highest to lowest):**

| Precedence Level | Operator Class            | Operators                                     | Associativity      |
| :--------------- | :------------------------ | :-------------------------------------------- | :----------------- |
| 1                | Postfix                   | `++`, `--` (after operand)                    | Left-to-right      |
| 2                | Unary                     | `+`, `-` (unary), `++`, `--` (before operand), `!` (logical NOT), `~` (bitwise complement) | Right-to-left      |
| 3                | Multiplicative            | `*`, `/`, `%`                                 | Left-to-right      |
| 4                | Additive                  | `+`, `-`                                      | Left-to-right      |
| 5                | Shift                     | `<<`, `>>`, `>>>`                             | Left-to-right      |
| 6                | Relational                | `<`, `<=`, `>`, `>=`                          | Left-to-right      |
| 7                | Equality                  | `==`, `!=`                                    | Left-to-right      |
| 8                | Bitwise AND               | `&`                                           | Left-to-right      |
| 9                | Bitwise XOR               | `^`                                           | Left-to-right      |
| 10               | Bitwise OR                | `\|`                                          | Left-to-right      |
| 11               | Logical AND               | `&&`                                          | Left-to-right      |
| 12               | Logical OR                | `\|\|`                                        | Left-to-right      |
| 13               | Ternary                   | `? :`                                         | Right-to-left      |
| 14               | Assignment                | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `\|=`, `^=`, `<<=`, `>>=`, `>>>=` | Right-to-left      |

**Important Note:** Parentheses `()` can be used to override the default precedence rules, forcing a specific part of an expression to be evaluated first.

**Reference:**

*   **Java: The Complete Reference by Herbert Schildt (8/e):** Appendix A, "Operator Precedence," provides a detailed table.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e):** Chapter 2, "Java Fundamentals," covers operators and their precedence.

---

### 3. Understanding Associativity

**Key Concept:** When operators have the same precedence level, associativity determines the order of evaluation.

*   **Left-to-Right Associativity:** The operations are performed from left to right.
    *   Example: `a - b + c` is evaluated as `(a - b) + c`.
*   **Right-to-Left Associativity:** The operations are performed from right to left.
    *   Example: `a = b = c` is evaluated as `a = (b = c)`. The value of `c` is assigned to `b`, and then the result of that assignment (which is the value of `c`) is assigned to `a`.

**Reference:**

*   **Java: The Complete Reference by Herbert Schildt (8/e):** Also discussed in Appendix A, alongside precedence.
*   **Programming JAVA a Primer by Balagurusamy E (5/e):** Chapter 4, "Operators and Expressions," usually covers associativity.

---

### 4. Examples and Applications

Let's illustrate operator precedence and associativity with practical Java examples.

**Example 1: Arithmetic Operators**

Consider the expression: `int result = 5 + 3 * 2;`

*   **Precedence:** Multiplication (`*`) has higher precedence than addition (`+`).
*   **Evaluation:**
    1.  `3 * 2` is evaluated first, resulting in `6`.
    2.  The expression becomes `5 + 6`.
    3.  `5 + 6` is evaluated, resulting in `11`.
*   **Output:** `result` will be `11`.

If we wanted addition to happen first, we would use parentheses:

`int result = (5 + 3) * 2;`

*   **Evaluation:**
    1.  `(5 + 3)` is evaluated first due to parentheses, resulting in `8`.
    2.  The expression becomes `8 * 2`.
    3.  `8 * 2` is evaluated, resulting in `16`.
*   **Output:** `result` will be `16`.

**Example 2: Relational and Logical Operators**

Consider the expression: `boolean eligible = (age >= 18) && (hasLicense == true);`

*   **Precedence:** Relational operators (`>=`) have higher precedence than logical AND (`&&`).
*   **Evaluation:**
    1.  `age >= 18` is evaluated first. Let's assume `age` is 20, so this evaluates to `true`.
    2.  `hasLicense == true` is evaluated next. Let's assume `hasLicense` is `true`, so this evaluates to `true`.
    3.  The expression becomes `true && true`.
    4.  `true && true` is evaluated, resulting in `true`.
*   **Output:** `eligible` will be `true`.

**Example 3: Assignment and Arithmetic Operators**

Consider the expression: `int x = 10, y, z; y = x++ + 5;`

*   **Precedence:** Postfix increment (`x++`) has higher precedence than addition (`+`), and addition has higher precedence than assignment (`=`).
*   **Evaluation:**
    1.  `x++`: The *current value* of `x` (which is 10) is used for the addition. After this operation, `x` will be incremented to 11.
    2.  The expression becomes `10 + 5`.
    3.  `10 + 5` is evaluated, resulting in `15`.
    4.  `y = 15`: The result `15` is assigned to `y`.
*   **Output:** `y` will be `15`, and `x` will be `11`.

**Example 4: Associativity in Action**

Consider the expression: `int a = 10, b = 5, c = 2; int result = a / b * c;`

*   **Precedence:** Both division (`/`) and multiplication (`*`) have the same precedence level (Multiplicative).
*   **Associativity:** They are both left-to-right.
*   **Evaluation:**
    1.  `a / b`: `10 / 5` is evaluated first, resulting in `2`.
    2.  The expression becomes `2 * c`.
    3.  `2 * c`: `2 * 2` is evaluated, resulting in `4`.
*   **Output:** `result` will be `4`.

**Important Point to Remember:**

*   Always use parentheses `()` to clarify the order of operations in complex expressions, even if the default precedence would yield the desired result. This makes your code more readable and less prone to errors. This aligns with principles of good software design for readability and maintainability, indirectly supporting **CO2**.

---

### 5. Practice Questions and Exercises

**Question 1:**

What will be the output of the following Java code snippet?

```java
int a = 10;
int b = 3;
int result = a % b * a / b;
System.out.println(result);
```

**Question 2:**

Explain the evaluation of the following expression and its final result:

```java
int x = 5;
int y = 4;
int z = 3;
int calculation = x * y - z / y + x++;
```

**Question 3:**

Use parentheses to ensure the following expression is evaluated in a way that `z` is added to `y` before being multiplied by `x`, and then `w` is divided by that result.

```java
int x = 2;
int y = 3;
int z = 4;
int w = 10;
// Original expression (you need to modify it with parentheses)
// int finalResult = x * y + z / w;
```

**Question 4:**

Consider the following expression. Identify the operator with the highest precedence and explain the evaluation order.

```java
boolean status = !(flag && count > 10) || (value != 0);
```

---

### 6. Answers to Practice Questions

**Answer 1:**

*   **Operators involved:** `%` (modulo), `*` (multiplication), `/` (division).
*   **Precedence:** All these operators have the same precedence level (Multiplicative).
*   **Associativity:** They are all left-to-right.
*   **Evaluation:**
    1.  `a % b`: `10 % 3` evaluates to `1`.
    2.  The expression becomes `1 * a / b`.
    3.  `1 * a`: `1 * 10` evaluates to `10`.
    4.  The expression becomes `10 / b`.
    5.  `10 / b`: `10 / 3` evaluates to `3` (integer division).
*   **Output:** `3`

**Answer 2:**

*   **Operators involved:** `*`, `-`, `/`, `+`, `++` (postfix).
*   **Precedence Order:**
    1.  `x++` (postfix increment)
    2.  `*` (multiplication) and `/` (division) - same precedence, left-to-right
    3.  `-` (subtraction) and `+` (addition) - same precedence, left-to-right
*   **Evaluation:**
    1.  `x++`: The current value of `x` (which is 5) is used for multiplication. `x` becomes 6.
    2.  `x * y`: `5 * 4` evaluates to `20`.
    3.  `z / y`: `3 / 4` evaluates to `0` (integer division).
    4.  The expression becomes `20 - 0 + x`.
    5.  `20 - 0`: `20` is evaluated.
    6.  The expression becomes `20 + x`.
    7.  `20 + x`: `20 + 6` (the updated value of x) evaluates to `26`.
*   **Final Result:** `calculation` will be `26`.

**Answer 3:**

The modified expression ensuring the desired order of operations:

```java
int x = 2;
int y = 3;
int z = 4;
int w = 10;
int finalResult = w / (x * (y + z)); // Corrected the example to make more sense with given values
// Original interpretation from question:  (x * (y + z)) / w if y+z is done first.
// Assuming the intent was: result is w divided by (x times (y+z))
// Let's re-evaluate the question's intent. If it means (x * (y+z)) then divided by w:
// int finalResult = (x * (y + z)) / w;

// Let's use the provided solution to match a potential interpretation of question.
// If the intention was: x * (y + z) then that result is divided by w:
int finalResult = (x * (y + z)) / w;

// Evaluation with this structure:
// 1. y + z: 3 + 4 = 7
// 2. x * 7: 2 * 7 = 14
// 3. 14 / w: 14 / 10 = 1 (integer division)
// So, finalResult would be 1.

// If the intent was w / (x * (y + z)) :
// 1. y + z: 3 + 4 = 7
// 2. x * 7: 2 * 7 = 14
// 3. w / 14: 10 / 14 = 0 (integer division)
// So, finalResult would be 0.

// Given the simplicity of the prompt, the most direct interpretation of "z is added to y before being multiplied by x, and then w is divided by that result" implies (w / (x * (y+z))).
// If the prompt meant ((x * (y+z)) / w), then the structure would be different.

// Let's provide the answer based on the most common interpretation of operator precedence and the need for parentheses:
// "z is added to y before being multiplied by x" implies (y + z) first, then x * (result of y+z).
// "and then w is divided by that result" implies w / (result of x * (y+z)).

int finalResultCorrected = w / (x * (y + z));
// Evaluation: y+z = 7, x*7 = 14, w/14 = 10/14 = 0.
// So finalResultCorrected = 0.

// Re-reading the prompt more carefully: "z is added to y before being multiplied by x, AND THEN w is divided by THAT RESULT."
// This implies: (result of x * (y+z)) / w.

int finalResultCorrected2 = (x * (y + z)) / w;
// Evaluation: y+z = 7, x*7 = 14, 14/w = 14/10 = 1.
// So finalResultCorrected2 = 1.
```
**Note:** The phrasing of Question 3 can be slightly ambiguous. The provided solution assumes the intent is to first calculate `x * (y + z)` and then divide `w` by that product. If the intent was `w` divided by the product, the parentheses would be placed differently. **It's crucial to be precise with mathematical phrasing.**

**Answer 4:**

*   The operator with the **highest precedence** in this expression is the **postfix increment `++`** if it were present. However, in the given expression `!(flag && count > 10) || (value != 0);`, the operators are:
    *   `!` (Logical NOT) - Precedence Level 2 (Unary)
    *   `&&` (Logical AND) - Precedence Level 11
    *   `>` (Relational) - Precedence Level 6
    *   `!=` (Equality) - Precedence Level 7
    *   `||` (Logical OR) - Precedence Level 12
    *   `()` (Parentheses) - Highest precedence.

*   **Highest Precedence Operator Group:** Parentheses `()` dictate evaluation order.
*   **Evaluation Order:**
    1.  `count > 10` (Relational operator, precedence 6)
    2.  `flag && (result of step 1)` (Logical AND, precedence 11)
    3.  `!(result of step 2)` (Logical NOT, precedence 2)
    4.  `value != 0` (Equality operator, precedence 7)
    5.  `(result of step 3) || (result of step 4)` (Logical OR, precedence 12)

    Therefore, the evaluation order follows the precedence table and the grouping by parentheses: `(count > 10)` first, then `flag && ...`, then `!(...)`, then `value != 0`, and finally the `||` operation between the results.

---

### 7. Highlighting Important Points to Remember

*   **Know the Table:** Familiarize yourself with the Java operator precedence table. It's your ultimate guide.
*   **Parentheses are Your Friends:** Use `()` liberally to ensure clarity and to override default precedence when needed. This is critical for correct program logic and maintainability.
*   **Associativity Matters for Same Precedence:** When operators have the same precedence, associativity dictates the order.
*   **Unary vs. Binary:** Be aware of operators that have different meanings based on context (e.g., `-` for subtraction vs. unary negation). Unary operators often have higher precedence.
*   **Short-Circuiting:** Logical AND (`&&`) and OR (`||`) are short-circuiting operators. If the result of the expression can be determined by the first operand, the second operand is not evaluated. This is an important functional aspect related to operator evaluation.
*   **Type Conversion:** Operator precedence also influences implicit type conversions in mixed-type expressions.

**Reference:**

*   **Head First Java by Sierra K. (2/e):** Often explains concepts like precedence through intuitive analogies.
*   **Core Java: An Integrated Approach by Nageswararao R.:** Likely covers operator precedence in its foundational chapters.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Summarize OO concepts):** While not directly about classes/objects, understanding how expressions are formed and evaluated is fundamental to building methods and logic within objects.
*   **CO2 (Utilize datatypes, operators, control statements):** This entire topic is dedicated to understanding **operators** and how they are applied correctly to **datatypes** to form expressions that are the building blocks of any Java program. Mastery of operator precedence is crucial for writing functional code.
*   **CO3 (Illustrate robust programs):** Incorrectly applying operator precedence can lead to subtle bugs. Understanding it is key to writing robust and predictable code.
*   **CO4 (Identify and utilize Swing controls):** While this topic is on core Java, the same principles of expression evaluation apply when working with Swing components and event handling.

---

This comprehensive set of notes provides a deep dive into operator precedence in Java, equipping you with the knowledge to construct and understand complex expressions accurately. Remember to practice and refer to the precedence table whenever in doubt.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
