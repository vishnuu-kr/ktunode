---
title: "Operator Precedence"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf8c"
status: "completed"
scrapedAt: "2026-05-20T16:55:52.837Z"
---
# Object-Oriented Programming: Module 1 - Introduction to Java

## Topic: Operator Precedence

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the concept of operator precedence in Java.
*   Identify the order of evaluation for different types of operators.
*   Predict the outcome of expressions involving multiple operators.
*   Use parentheses to explicitly control the order of evaluation.
*   Write clear and unambiguous expressions by understanding precedence rules.

### 1. What is Operator Precedence?

Operator precedence is a set of rules that dictates the order in which operations are performed in an expression. When an expression contains multiple operators, precedence rules determine which operator is evaluated first. This is crucial for ensuring that your programs produce the intended results.

**Analogy:** Think of mathematical equations. In `2 + 3 * 4`, multiplication (`*`) has a higher precedence than addition (`+`), so `3 * 4` is calculated first (12), and then `2` is added to it, resulting in `14`. If you wanted addition first, you'd write `(2 + 3) * 4`.

### 2. The Operator Precedence Table (Java)

Understanding the precedence of operators is key. Here's a simplified table, generally ordered from highest precedence (evaluated first) to lowest precedence (evaluated last).

| Precedence Level | Operators                                   | Description                                                              | Associativity |
| :--------------- | :------------------------------------------ | :----------------------------------------------------------------------- | :------------ |
| 1                | `()`                                        | Parentheses (grouping)                                                   | Left-to-Right |
| 2                | `++`, `--` (postfix)                        | Postfix increment/decrement                                              | Left-to-Right |
| 3                | `+`, `-` (unary), `++`, `--` (prefix)       | Unary plus, unary minus, prefix increment/decrement                      | Right-to-Left |
| 4                | `*`, `/`, `%`                               | Multiplication, Division, Modulo (remainder)                             | Left-to-Right |
| 5                | `+`, `-`                                    | Addition, Subtraction                                                    | Left-to-Right |
| 6                | `<`, `<=`, `>`, `>=`                         | Relational (less than, less than or equal to, greater than, greater than or equal to) | Left-to-Right |
| 7                | `==`, `!=`                                  | Equality (equal to, not equal to)                                        | Left-to-Right |
| 8                | `&`                                         | Bitwise AND                                                              | Left-to-Right |
| 9                | `^`                                         | Bitwise XOR                                                              | Left-to-Right |
| 10               | `|`                                         | Bitwise OR                                                               | Left-to-Right |
| 11               | `&&`                                        | Logical AND                                                              | Left-to-Right |
| 12               | `||`                                        | Logical OR                                                               | Left-to-Right |
| 13               | `? :`                                       | Ternary conditional operator                                             | Right-to-Left |
| 14               | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `^=`, `|=`, `<<=`, `>>=`, `>>>=` | Assignment operators                                                     | Right-to-Left |

**Important Note:** This is a simplified table. A more comprehensive table includes many more operators (like bitwise shifts, logical NOT, etc.) but this covers the most common ones you'll encounter in introductory Java.

### 3. Associativity

When two operators have the same precedence level, **associativity** determines the order of evaluation.

*   **Left-to-Right Associativity:** Operators are evaluated from left to right. For example, in `a - b + c`, subtraction and addition have the same precedence. Left-to-right associativity means `(a - b) + c` is evaluated.
*   **Right-to-Left Associativity:** Operators are evaluated from right to left. This is common for unary operators and assignment operators. For example, in `a = b = c`, assignment has right-to-left associativity, meaning `a = (b = c)` is evaluated.

### 4. Understanding and Predicting Expression Outcomes

Let's break down some examples:

**Example 1: Basic Arithmetic**

```java
int result = 5 + 3 * 2;
```

*   **Precedence:** `*` has higher precedence than `+`.
*   **Evaluation:**
    1.  `3 * 2` is evaluated first, resulting in `6`.
    2.  `5 + 6` is evaluated, resulting in `11`.
*   **Output:** `result` will be `11`.

**Example 2: Combining Arithmetic Operators**

```java
int x = 10;
int y = 5;
int z = 2;
int output = x / y * z;
```

*   **Precedence:** `/` and `*` have the same precedence.
*   **Associativity:** Both are left-to-right.
*   **Evaluation:**
    1.  `x / y` (10 / 5) is evaluated first, resulting in `2`.
    2.  `2 * z` (2 * 2) is evaluated, resulting in `4`.
*   **Output:** `output` will be `4`.

**Example 3: Unary Operators and Arithmetic**

```java
int a = 10;
int b = -a++; // Note the order: postfix increment, then negation
int c = --a;   // Prefix decrement
```

*   **Precedence:** Unary operators (`-`, `++` prefix) have higher precedence than arithmetic operators (except for postfix `++` and `--`). Postfix `++` and `--` have higher precedence than prefix `++` and `--`.
*   **Associativity:**
    *   `a++` (postfix): Left-to-right (but acts on `a` after its current value is used).
    *   `-` (unary): Right-to-left.
    *   `--a` (prefix): Right-to-left.
*   **Evaluation:**
    1.  `a++`: The **current value** of `a` (10) is used for the rest of the expression involving `a`. Then, `a` is incremented to `11`.
    2.  `-a`: The negated value of the *current* `a` (which is 11 after the increment) is taken. So, `-11`.
    3.  `b` is assigned `-11`.
    4.  `a` is currently `11`.
    5.  `--a`: `a` is decremented first, becoming `10`. Then, this new value (`10`) is used.
    6.  `c` is assigned `10`.
*   **Output:** `b` will be `-11`, and `c` will be `10`. (Initial `a` was 10, after `a++` it's 11, then `--a` makes it 10).

**Example 4: Relational and Logical Operators**

```java
int age = 20;
boolean isAdult = (age >= 18) && (age < 65);
```

*   **Precedence:** Relational operators (`>=`, `<`) have higher precedence than logical AND (`&&`).
*   **Associativity:** Left-to-right for both.
*   **Evaluation:**
    1.  `age >= 18` (20 >= 18) evaluates to `true`.
    2.  `age < 65` (20 < 65) evaluates to `true`.
    3.  `true && true` evaluates to `true`.
*   **Output:** `isAdult` will be `true`.

### 5. Using Parentheses to Control Evaluation Order

When you're unsure about precedence rules or want to make your code more readable, you can use parentheses `()` to explicitly define the order of operations. Parentheses always have the highest precedence.

```java
int result1 = 5 + 3 * 2;       // Precedence: 3 * 2 first -> 11
int result2 = (5 + 3) * 2;     // Parentheses: 5 + 3 first -> 16
```

*   Both `result1` and `result2` will have different values because of the parentheses.

### 6. Importance of Operator Precedence

*   **Correctness:** Ensures your calculations and logical decisions are performed in the intended order, preventing bugs.
*   **Readability:** While understanding precedence is good, using parentheses for complex expressions makes your code easier for others (and your future self) to understand.
*   **Predictability:** Allows you to reliably predict the outcome of any Java expression.

### 7. Practice Questions

**Question 1:** What will be the value of `result` in the following Java code?

```java
int result = 10 * 2 + 5 / 5 - 3;
```

**Question 2:** What will be the value of `output` in the following Java code?

```java
int x = 7;
int y = 3;
int output = x % y + x / y;
```

**Question 3:** What will be the value of `val` in the following Java code?

```java
int count = 5;
int val = count++ * 2 + --count;
```

**Question 4:** Explain the difference in output between these two expressions:
    *   `System.out.println(10 / 2 * 5);`
    *   `System.out.println(10 / (2 * 5));`

### 8. Answers to Practice Questions

**Answer 1:**

```
10 * 2 + 5 / 5 - 3
(10 * 2) + (5 / 5) - 3  // Multiplication and Division have higher precedence
20 + 1 - 3
(20 + 1) - 3          // Addition and Subtraction have same precedence, evaluated left-to-right
21 - 3
18
```
**Result:** `18`

**Answer 2:**

```
x % y + x / y
(x % y) + (x / y)  // Modulo and Division have same precedence, evaluated left-to-right
(7 % 3) + (7 / 3)
2 + 2             // Integer division: 7 / 3 = 2
4
```
**Result:** `4`

**Answer 3:**

```java
int count = 5;
// count++ * 2 + --count;

// Step 1: count++
// The current value of count (5) is used for the first operation.
// Then, count is incremented to 6.
// Expression becomes: 5 * 2 + --count

// Step 2: --count
// count is currently 6. It is decremented first, becoming 5.
// The new value (5) is used for the operation.
// Expression becomes: 5 * 2 + 5

// Step 3: 5 * 2
// Multiplication has higher precedence than addition.
// Expression becomes: 10 + 5

// Step 4: 10 + 5
// Addition is performed.
// Expression becomes: 15

// Step 5: val = 15
```
**Result:** `val` will be `15`. (After these operations, `count` will be `5`).

**Answer 4:**

*   `System.out.println(10 / 2 * 5);`
    *   Division and Multiplication have the same precedence and are evaluated left-to-right.
    *   `(10 / 2) * 5`
    *   `5 * 5`
    *   **Output:** `25`

*   `System.out.println(10 / (2 * 5));`
    *   Parentheses have the highest precedence.
    *   `10 / (10)`
    *   `1`
    *   **Output:** `1`

The difference is due to the order of operations dictated by precedence and parentheses.

### 9. Important Points to Remember

*   **Precedence Hierarchy:** Always refer to the operator precedence table when in doubt.
*   **Associativity Matters:** Especially for operators with the same precedence level.
*   **Parentheses are Your Friend:** Use them to clarify intent and avoid ambiguity, even if they aren't strictly necessary according to precedence rules. This leads to more readable and maintainable code.
*   **Integer Division:** Remember that division between two integers (`/`) in Java results in an integer (truncating any decimal part).
*   **Postfix vs. Prefix:** Be mindful of the subtle but important difference between postfix (`variable++`) and prefix (`++variable`) increment/decrement operators, especially in complex expressions.
