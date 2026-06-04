---
title: "Operators - Arithmetic, Bitwise, Relational, Boolean Logical, Assignment, Conditional (Ternary)"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf8b"
status: "completed"
scrapedAt: "2026-05-20T16:55:52.119Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 1: Introduction to Java

### Topic: Operators

**Description:** This topic explores the fundamental building blocks of expressions in Java: Operators. We will delve into various categories of operators, understanding their purpose, syntax, and how they manipulate data.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the role of operators in Java.
*   Categorize and explain different types of operators: Arithmetic, Bitwise, Relational, Boolean Logical, Assignment, and Conditional (Ternary).
*   Apply operator precedence and associativity to evaluate expressions correctly.
*   Utilize operators effectively in Java programs to perform calculations, comparisons, and logical operations.
*   Write simple Java expressions using various operators.

---

## 1. What are Operators?

Operators are special symbols that perform operations on one or more operands (values or variables). They are the essence of expressions, allowing us to manipulate data and perform computations.

**Key Concepts:**

*   **Operand:** A value or variable on which an operator acts.
*   **Expression:** A combination of operands, operators, and sometimes method calls that evaluates to a single value.

---

## 2. Types of Operators in Java

### 2.1. Arithmetic Operators

These operators are used to perform mathematical calculations.

| Operator | Description                                | Example                     | Result (if x=10, y=5) |
| :------- | :----------------------------------------- | :-------------------------- | :-------------------- |
| `+`      | Addition                                   | `x + y`                     | `15`                  |
| `-`      | Subtraction                                | `x - y`                     | `5`                   |
| `*`      | Multiplication                             | `x * y`                     | `50`                  |
| `/`      | Division                                   | `x / y`                     | `2`                   |
| `%`      | Modulus (Remainder of division)            | `x % y`                     | `0`                   |
| `++`     | Increment (Increases value by 1)           | `x++` (post-increment)      | `11` (after statement) |
|          |                                            | `++x` (pre-increment)       | `11` (before statement) |
| `--`     | Decrement (Decreases value by 1)           | `x--` (post-decrement)      | `9` (after statement)  |
|          |                                            | `--x` (pre-decrement)       | `9` (before statement)  |

**Important Notes on Increment/Decrement:**

*   **Pre-increment/decrement (`++x`, `--x`):** The operation is performed *before* the value is used in the expression.
*   **Post-increment/decrement (`x++`, `x--`):** The operation is performed *after* the value is used in the expression.

**Example:**

```java
int a = 10;
int b = 3;

System.out.println("a + b = " + (a + b));  // Output: a + b = 13
System.out.println("a / b = " + (a / b));  // Output: a / b = 3 (integer division)
System.out.println("a % b = " + (a % b));  // Output: a % b = 1

int x = 5;
int y = ++x; // Pre-increment
System.out.println("x: " + x + ", y: " + y); // Output: x: 6, y: 6

x = 5;
y = x++; // Post-increment
System.out.println("x: " + x + ", y: " + y); // Output: x: 6, y: 5
```

---

### 2.2. Bitwise Operators

These operators perform operations on individual bits of their operands. They are typically used for low-level manipulation, such as in graphics, encryption, or embedded systems.

| Operator | Description                                   | Example (binary: 1010 & 1100) | Result (binary) | Result (decimal) |
| :------- | :-------------------------------------------- | :---------------------------- | :-------------- | :--------------- |
| `&`      | Bitwise AND                                   | `a & b`                       | `1000`          | `8`              |
| `|`      | Bitwise OR                                    | `a | b`                       | `1110`          | `14`             |
| `^`      | Bitwise XOR (Exclusive OR)                    | `a ^ b`                       | `0110`          | `6`              |
| `~`      | Bitwise Complement (One's Complement)         | `~a` (e.g., ~1010)            | `0101` (assuming 4-bit) | `5`              |
| `<<`     | Left Shift (Shifts bits to the left)          | `a << 1` (1010 << 1)          | `10100`         | `20`             |
| `>>`     | Signed Right Shift (Shifts bits to the right) | `a >> 1` (1010 >> 1)          | `0101`          | `5`              |
| `>>>`    | Unsigned Right Shift (Shifts bits to the right) | `a >>> 1` (1010 >>> 1)        | `0101`          | `5`              |

**Important Notes on Bitwise Operators:**

*   The `~` operator inverts all the bits of its operand.
*   `<<` shifts bits to the left, filling the vacant positions on the right with zeros. It's equivalent to multiplying by 2<sup>n</sup>, where n is the number of shifts.
*   `>>` shifts bits to the right. For positive numbers, it fills the vacant positions on the left with zeros. For negative numbers, it fills with ones (to preserve the sign). It's equivalent to dividing by 2<sup>n</sup>.
*   `>>>` always fills the vacant positions on the left with zeros, regardless of the sign of the number.

**Example:**

```java
int num1 = 10; // Binary: 1010
int num2 = 12; // Binary: 1100

System.out.println("Bitwise AND: " + (num1 & num2));  // Output: Bitwise AND: 8
System.out.println("Bitwise OR: " + (num1 | num2));   // Output: Bitwise OR: 14
System.out.println("Bitwise XOR: " + (num1 ^ num2));  // Output: Bitwise XOR: 6
System.out.println("Bitwise NOT: " + (~num1));        // Output: Bitwise NOT: -11 (for 32-bit int)

int shiftLeft = 5; // Binary: 0101
System.out.println("Left Shift: " + (shiftLeft << 2)); // Output: Left Shift: 20 (0101 -> 010100)

int shiftRight = -8; // Binary representation of -8 (depends on system, but conceptually)
System.out.println("Signed Right Shift: " + (shiftRight >> 1)); // Output: Signed Right Shift: -4
System.out.println("Unsigned Right Shift: " + (shiftRight >>> 1)); // Output: Unsigned Right Shift: 2147483644
```

---

### 2.3. Relational Operators

These operators are used to compare two values. They return a boolean result (`true` or `false`).

| Operator | Description                | Example | Result (if x=10, y=5) |
| :------- | :------------------------- | :------ | :-------------------- |
| `==`     | Equal to                   | `x == y`| `false`               |
| `!=`     | Not equal to               | `x != y`| `true`                |
| `>`      | Greater than               | `x > y` | `true`                |
| `<`      | Less than                  | `x < y` | `false`               |
| `>=`     | Greater than or equal to   | `x >= y`| `true`                |
| `<=`     | Less than or equal to      | `x <= y`| `false`               |

**Example:**

```java
int age = 20;
int requiredAge = 18;

System.out.println("Is age >= requiredAge? " + (age >= requiredAge)); // Output: Is age >= requiredAge? true
System.out.println("Is age == 18? " + (age == 18));                 // Output: Is age == 18? false
```

---

### 2.4. Boolean Logical Operators

These operators are used to combine or modify boolean expressions. They operate on boolean operands and return a boolean result.

| Operator | Description                                    | Example                                | Result (if a=true, b=false) |
| :------- | :--------------------------------------------- | :------------------------------------- | :-------------------------- |
| `&&`     | Logical AND (Short-circuiting)                 | `a && b`                               | `false`                     |
| `||`     | Logical OR (Short-circuiting)                  | `a || b`                               | `true`                      |
| `!`      | Logical NOT (Negation)                         | `!a`                                   | `false`                     |
| `&`      | Bitwise AND (also used as logical AND)         | `a & b`                                | `false`                     |
| `|`      | Bitwise OR (also used as logical OR)           | `a | b`                                | `true`                      |
| `^`      | Bitwise XOR (also used as logical XOR)         | `a ^ b`                                | `true`                      |

**Important Notes on Logical Operators:**

*   **Short-circuiting (`&&`, `||`):** If the result of the expression can be determined from the first operand, the second operand is not evaluated.
    *   For `&&`, if the first operand is `false`, the entire expression is `false` without checking the second operand.
    *   For `||`, if the first operand is `true`, the entire expression is `true` without checking the second operand.
*   The bitwise operators (`&`, `|`, `^`) when used with boolean operands, always evaluate both operands. This is useful when you need to ensure both conditions are evaluated, even if the first one would short-circuit.

**Example:**

```java
boolean hasLicense = true;
boolean isAdult = true;
boolean canDrive = false;

// Using short-circuiting AND
canDrive = hasLicense && isAdult;
System.out.println("Can drive (&&): " + canDrive); // Output: Can drive (&&): true

int num = 10;
// Example of short-circuiting: the second condition (num > 5) is not evaluated because the first is false
System.out.println(false && (num > 5)); // Output: false

// Using non-short-circuiting AND (for demonstration)
// Let's imagine a scenario where we NEED both to be evaluated
boolean result = (10 < 5) & (20 > 15); // The second part (20 > 15) WILL be evaluated even though (10 < 5) is false.
System.out.println("Non-short-circuiting AND: " + result); // Output: Non-short-circuiting AND: false
```

---

### 2.5. Assignment Operators

These operators are used to assign values to variables.

| Operator | Description                     | Example     | Equivalent to      |
| :------- | :------------------------------ | :---------- | :----------------- |
| `=`      | Assigns the right operand value to the left operand | `x = 10`    | `x = 10`           |
| `+=`     | Adds right operand to left and assigns the result | `x += 5`    | `x = x + 5`        |
| `-=`     | Subtracts right operand from left and assigns the result | `x -= 3`    | `x = x - 3`        |
| `*=`     | Multiplies left operand by right and assigns the result | `x *= 2`    | `x = x * 2`        |
| `/=`     | Divides left operand by right and assigns the result | `x /= 4`    | `x = x / 4`        |
| `%=`     | Modulus of left by right and assigns the result | `x %= 3`    | `x = x % 3`        |
| `&=`     | Bitwise AND assignment          | `x &= 2`    | `x = x & 2`        |
| `|=`     | Bitwise OR assignment           | `x |= 2`    | `x = x | 2`        |
| `^=`     | Bitwise XOR assignment          | `x ^= 2`    | `x = x ^ 2`        |
| `<<=`    | Left shift assignment           | `x <<= 1`   | `x = x << 1`       |
| `>>=`    | Signed right shift assignment   | `x >>= 1`   | `x = x >> 1`       |
| `>>>=`   | Unsigned right shift assignment | `x >>>= 1`  | `x = x >>> 1`      |

**Example:**

```java
int score = 100;
score += 10; // score is now 110
System.out.println("Score: " + score); // Output: Score: 110

score *= 2; // score is now 220
System.out.println("Score: " + score); // Output: Score: 220
```

---

### 2.6. Conditional (Ternary) Operator

The ternary operator is a shorthand for an `if-else` statement. It takes three operands.

**Syntax:**

`condition ? expression1 : expression2`

*   **`condition`:** A boolean expression.
*   **`expression1`:** The value returned if the `condition` is `true`.
*   **`expression2`:** The value returned if the `condition` is `false`.

**Example:**

```java
int a = 10;
int b = 20;
int max;

// Using if-else
if (a > b) {
    max = a;
} else {
    max = b;
}
System.out.println("Max (if-else): " + max); // Output: Max (if-else): 20

// Using ternary operator
max = (a > b) ? a : b;
System.out.println("Max (ternary): " + max); // Output: Max (ternary): 20

int age = 15;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println("Status: " + status); // Output: Status: Minor
```

**Important Note:** The ternary operator is best used for simple assignments and when the expressions are concise. For complex logic, `if-else` statements are more readable.

---

## 3. Operator Precedence and Associativity

When an expression contains multiple operators, the order in which they are evaluated is determined by their **precedence** and **associativity**.

*   **Precedence:** Determines which operator is applied first. Operators with higher precedence are evaluated before operators with lower precedence.
*   **Associativity:** Determines the order of evaluation for operators of the same precedence. Most Java operators are left-associative.

**Common Precedence Order (from highest to lowest):**

1.  `()` (Parentheses)
2.  `++`, `--` (Unary operators: pre-increment/decrement, `+`, `-`, `!`, `~`)
3.  `*`, `/`, `%` (Arithmetic operators)
4.  `+`, `-` (Arithmetic operators)
5.  `<<`, `>>`, `>>>` (Bitwise shift operators)
6.  `<`, `<=`, `>`, `>=` (Relational operators)
7.  `==`, `!=` (Equality operators)
8.  `&` (Bitwise AND)
9.  `^` (Bitwise XOR)
10. `|` (Bitwise OR)
11. `&&` (Logical AND)
12. `||` (Logical OR)
13. `? :` (Ternary operator)
14. `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `<<=`, `>>=`, `>>>=` (Assignment operators)

**Associativity:**

*   Most binary operators are **left-associative**. This means `a op1 b op2 c` is evaluated as `(a op1 b) op2 c`.
    *   Example: `10 - 5 - 2` is `(10 - 5) - 2 = 5 - 2 = 3`.
*   Assignment operators and the ternary operator are **right-associative**. This means `a = b = c` is evaluated as `a = (b = c)`.

**Using Parentheses:**

You can always use parentheses `()` to explicitly control the order of evaluation, overriding the default precedence and associativity rules. This improves code readability and clarity.

**Example:**

```java
int result = 10 + 5 * 2; // Multiplication has higher precedence
// Evaluated as: 10 + (5 * 2) = 10 + 10 = 20

result = (10 + 5) * 2; // Parentheses override precedence
// Evaluated as: (15) * 2 = 30
```

---

## 4. Practice Questions and Exercises

**Question 1:**
What will be the output of the following Java code snippet?

```java
int a = 15;
int b = 4;
System.out.println(a / b);
System.out.println(a % b);
```

**Question 2:**
Explain the difference between `++x` and `x++` with a simple example.

**Question 3:**
Given `boolean flag1 = true;` and `boolean flag2 = false;`, what will be the result of `flag1 || flag2` and `flag1 && flag2`?

**Question 4:**
Write a Java statement using the ternary operator to assign the larger of two integer variables `x` and `y` to a variable `largerValue`.

**Question 5:**
What is the output of `(10 << 2)`? What does this operation represent?

**Question 6:**
Evaluate the following expression, considering operator precedence: `10 * 2 + 15 / 3 - 2`.

---

## 5. Answers to Practice Questions

**Answer 1:**
```
3
3
```
**Explanation:**
*   `a / b` performs integer division, so `15 / 4` results in `3` (the fractional part is discarded).
*   `a % b` is the modulus operator, which gives the remainder of the division. `15 % 4` is `3` (since 4 goes into 15 three times with a remainder of 3).

**Answer 2:**
`++x` (pre-increment) increments the value of `x` *before* it is used in the expression. `x++` (post-increment) increments the value of `x` *after* it is used in the expression.

**Example:**
```java
int x = 5;
int y = ++x; // x becomes 6, then y is assigned 6
System.out.println("x: " + x + ", y: " + y); // Output: x: 6, y: 6

x = 5;
y = x++; // y is assigned 5, then x becomes 6
System.out.println("x: " + x + ", y: " + y); // Output: x: 6, y: 5
```

**Answer 3:**
*   `flag1 || flag2` (logical OR): `true || false` results in `true`.
*   `flag1 && flag2` (logical AND): `true && false` results in `false`.

**Answer 4:**
```java
int largerValue = (x > y) ? x : y;
```

**Answer 5:**
The output of `(10 << 2)` is `40`.
This operation is a **left bit shift**. It shifts the binary representation of 10 (which is `1010`) two positions to the left. The vacant positions on the right are filled with zeros, resulting in `101000`, which is 40 in decimal. This is equivalent to multiplying the number by 2 raised to the power of the shift amount (10 * 2² = 10 * 4 = 40).

**Answer 6:**
The expression is `10 * 2 + 15 / 3 - 2`.
Following operator precedence:
1.  Multiplication and Division (from left to right):
    *   `10 * 2` = `20`
    *   `15 / 3` = `5`
    The expression becomes: `20 + 5 - 2`
2.  Addition and Subtraction (from left to right):
    *   `20 + 5` = `25`
    *   `25 - 2` = `23`

The final output is `23`.

---

## 6. Important Points to Remember:

*   **Integer Division:** When dividing two integers in Java, the result is an integer, and any fractional part is truncated. Use floating-point types (like `double` or `float`) if you need decimal results.
*   **Increment/Decrement Order:** Be mindful of the difference between pre- and post-increment/decrement operators, especially within expressions.
*   **Short-Circuiting:** Understand when `&&` and `||` short-circuit and when you might need `&` and `|` instead for guaranteed evaluation of both operands.
*   **Operator Precedence:** Always consider operator precedence rules when writing expressions. Use parentheses `()` to clarify complex expressions and ensure the intended order of operations.
*   **Type Compatibility:** Operators generally work with operands of compatible data types. Java often performs implicit type conversions (widening conversions), but explicit casting might be necessary in some cases.
*   **Bitwise Operations:** Primarily for low-level manipulation; use them judiciously.
*   **Ternary Operator:** A concise way to write simple `if-else` assignments; avoid for complex logic.
