---
title: "Precedence"
subject: "PROGRAMMING LANGUAGES"
module: "Module 1: Introduction "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c679"
status: "completed"
scrapedAt: "2026-05-20T17:09:17.643Z"
---
# PROGRAMMING LANGUAGES: Module 1: Introduction - Precedence

## 1. Understanding Operator Precedence

### 1.1 Key Concepts and Definitions

*   **Operator:** A symbol that tells the compiler to perform a specific mathematical, relational, or logical operation. Examples include `+`, `-`, `*`, `/`, `%`, `==`, `!=`, `>`, `<`, `&&`, `||`, `!`.
*   **Operand:** A value on which an operator acts. For example, in `5 + 3`, `5` and `3` are operands.
*   **Expression:** A combination of operands and operators that evaluates to a single value. For example, `5 + 3 * 2` is an expression.
*   **Precedence:** A set of rules that determine the order in which operations are performed in an expression. Operators with higher precedence are evaluated before operators with lower precedence.
*   **Associativity:** A set of rules that determine the order in which operators of the same precedence are evaluated. Associativity can be left-to-right or right-to-left.

### 1.2 Why is Precedence Important?

Operator precedence is crucial for **unambiguously interpreting expressions**. Without it, the same expression could have multiple different meanings, leading to incorrect program behavior. Understanding precedence ensures that your code behaves as intended.

### 1.3 Common Precedence Levels (Illustrative, actual order varies by language)

While the exact order can differ slightly between programming languages, here's a general hierarchy, from highest precedence (evaluated first) to lowest:

*   **Parentheses `()`:** Always evaluated first. They override all other precedence rules.
*   **Unary Operators:**
    *   `+` (positive), `-` (negative), `!` (logical NOT), `~` (bitwise NOT)
*   **Multiplication `*`, Division `/`, Modulo `%`:** Evaluated from left to right (if same precedence).
*   **Addition `+`, Subtraction `-`:** Evaluated from left to right (if same precedence).
*   **Relational Operators:**
    *   `<`, `<=`, `>`, `>=` (evaluated from left to right)
*   **Equality Operators:**
    *   `==`, `!=` (evaluated from left to right)
*   **Logical AND `&&`:**
*   **Logical OR `||`:**
*   **Assignment Operators:**
    *   `=`, `+=`, `-=`, etc. (often have the lowest precedence and are right-associative)

**IMPORTANT POINT TO REMEMBER:** **Always consult the specific documentation for the programming language you are using to confirm the exact precedence and associativity rules.**

### 1.4 Examples

Let's consider the expression: `a = 5 + 3 * 2`

Without understanding precedence, you might evaluate it in two ways:

*   **Incorrect (Left-to-Right without considering precedence):**
    1.  `5 + 3` becomes `8`
    2.  `8 * 2` becomes `16`
    3.  `a = 16`

*   **Correct (Considering precedence):**
    1.  **Multiplication has higher precedence than addition.** So, `3 * 2` is evaluated first, resulting in `6`.
    2.  The expression becomes `5 + 6`.
    3.  **Addition is then performed:** `5 + 6` becomes `11`.
    4.  `a = 11`

Another example: `result = 10 / 2 * 5`

*   **Both `/` and `*` have the same precedence.**
*   **Associativity for these operators is left-to-right.**
*   **Evaluation:**
    1.  `10 / 2` becomes `5`.
    2.  The expression becomes `5 * 5`.
    3.  `5 * 5` becomes `25`.
    4.  `result = 25`

**Using Parentheses to Override Precedence:**

If you wanted the addition to happen first in `5 + 3 * 2`, you would use parentheses:

`a = (5 + 3) * 2`

*   **Evaluation:**
    1.  The expression within the parentheses `(5 + 3)` is evaluated first, resulting in `8`.
    2.  The expression becomes `8 * 2`.
    3.  `8 * 2` becomes `16`.
    4.  `a = 16`

## 2. Associativity

### 2.1 Key Concepts and Definitions

*   **Associativity:** When an expression contains multiple operators of the *same precedence*, associativity rules determine the order of evaluation.
*   **Left-to-Right Associativity:** Operators are evaluated from left to right. This is the most common type of associativity.
*   **Right-to-Left Associativity:** Operators are evaluated from right to left. This is less common and is typically seen with assignment operators.

### 2.2 Examples of Associativity

**Left-to-Right Associativity:**

*   **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%` are generally left-associative.
    *   Expression: `10 - 5 + 2`
    *   Evaluation: `(10 - 5) + 2 = 5 + 2 = 7`
*   **Relational Operators:** `<`, `<=`, `>`, `>=` are generally left-associative.
    *   Expression: `5 < 10 < 15`
    *   Evaluation: `(5 < 10) < 15`
        *   `5 < 10` evaluates to `true`.
        *   The expression becomes `true < 15`. In many languages, `true` might be implicitly converted to `1`.
        *   `1 < 15` evaluates to `true`.

**Right-to-Left Associativity:**

*   **Assignment Operators:** `=` is right-associative.
    *   Expression: `x = y = 5`
    *   Evaluation: `x = (y = 5)`
        *   `y = 5` is evaluated first, assigning `5` to `y`.
        *   The assignment operator `=` returns the assigned value (`5`).
        *   The expression becomes `x = 5`, assigning `5` to `x`.
*   **Some Unary Operators:** In some languages, unary operators might be right-associative (e.g., `! ( ! ( true ) )` where the innermost `!` is evaluated first).

## 3. Practice Questions & Exercises

**Instructions:** For each of the following expressions, determine the final value of the variable assuming standard operator precedence and associativity.

**Question 1:**

```
int x = 10 + 5 * 2;
```

**Question 2:**

```
int y = 20 / 4 - 2;
```

**Question 3:**

```
int z = 7 * 3 + 2 % 4;
```

**Question 4:**

```
bool result = true && false || true;
```

**Question 5:**

```
int a = 15;
int b = 10;
int c = 5;
int final_val = a - b + c;
```

**Question 6:**

```
int val1 = 10;
int val2 = 5;
int val3 = 2;
int calculated_val = val1 / val2 * val3;
```

**Question 7 (Using Parentheses):**

```
int exp_val = (10 + 5) * 2;
```

## 4. Answers to Practice Questions

**Answer 1:**

*   **Precedence:** Multiplication `*` has higher precedence than addition `+`.
*   **Evaluation:**
    1.  `5 * 2` = `10`
    2.  `10 + 10` = `20`
*   **Result:** `x = 20`

**Answer 2:**

*   **Precedence:** Division `/` has higher precedence than subtraction `-`.
*   **Evaluation:**
    1.  `20 / 4` = `5`
    2.  `5 - 2` = `3`
*   **Result:** `y = 3`

**Answer 3:**

*   **Precedence:** Multiplication `*`, Division `/`, and Modulo `%` have the same higher precedence. Addition `+` has lower precedence.
*   **Associativity:** `*`, `/`, `%` are left-associative.
*   **Evaluation:**
    1.  `7 * 3` = `21`
    2.  `2 % 4` = `2` (The remainder of 2 divided by 4 is 2)
    3.  `21 + 2` = `23`
*   **Result:** `z = 23`

**Answer 4:**

*   **Precedence:** Logical AND `&&` has higher precedence than Logical OR `||`.
*   **Evaluation:**
    1.  `true && false` = `false`
    2.  `false || true` = `true`
*   **Result:** `result = true`

**Answer 5:**

*   **Precedence:** Subtraction `-` and Addition `+` have the same precedence.
*   **Associativity:** Left-to-Right.
*   **Evaluation:**
    1.  `a - b` = `15 - 10` = `5`
    2.  `5 + c` = `5 + 5` = `10`
*   **Result:** `final_val = 10`

**Answer 6:**

*   **Precedence:** Division `/` and Multiplication `*` have the same precedence.
*   **Associativity:** Left-to-Right.
*   **Evaluation:**
    1.  `val1 / val2` = `10 / 5` = `2`
    2.  `2 * val3` = `2 * 2` = `4`
*   **Result:** `calculated_val = 4`

**Answer 7:**

*   **Precedence:** Parentheses `()` have the highest precedence.
*   **Evaluation:**
    1.  `(10 + 5)` = `15`
    2.  `15 * 2` = `30`
*   **Result:** `exp_val = 30`

## 5. Important Points to Remember

*   **Always Use Parentheses for Clarity:** Even when you are confident about precedence rules, using parentheses can make your code more readable and prevent subtle bugs. For example, `(a + b) * c` is much clearer than `a + b * c` if you intend for addition to happen first.
*   **Consult Language-Specific Documentation:** Precedence and associativity rules are defined by the programming language. If you are unsure, always check the official documentation.
*   **Watch Out for Mixed Operators:** Expressions with a mix of arithmetic, relational, and logical operators can be particularly tricky. Break them down step-by-step to ensure correct evaluation.
*   **Unary Operators:** Be mindful of unary operators, especially when they precede variables (e.g., `++x` vs. `x++` in C-like languages, which also involve sequencing, not just precedence).
*   **Assignment Operators:** Remember that assignment operators often have right-to-left associativity and return the assigned value, which can be used in complex expressions.
