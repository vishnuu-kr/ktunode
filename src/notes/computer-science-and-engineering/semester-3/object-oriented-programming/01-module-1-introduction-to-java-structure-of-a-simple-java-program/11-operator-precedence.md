---
title: "Operator Precedence"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac92"
status: "completed"
scrapedAt: "2026-05-20T16:26:58.315Z"
---
## Object-Oriented Programming: Module 1 - Operator Precedence

**Topic:** Operator Precedence in Java

**Learning Outcomes:**

*   Understand the concept of operator precedence in Java.
*   Be able to determine the order in which operators are evaluated in an expression.
*   Apply operator precedence rules to write correct and predictable Java code.
*   Recognize the use of parentheses to override default operator precedence.

---

### 1. Introduction to Operator Precedence

*   **Definition:** Operator precedence is the set of rules that determine the order in which different operators are evaluated in a complex expression in a programming language.  It ensures that expressions are evaluated unambiguously.

*   **Importance:**  Understanding operator precedence is crucial for writing correct and predictable Java code. Without knowing the order in which operators are applied, the result of an expression might be different than intended, leading to bugs and incorrect program behavior.

### 2. Java Operator Precedence Table

The following table lists Java operators from highest to lowest precedence. Operators on the same row have equal precedence and are evaluated from left to right (except for assignment operators, which are evaluated from right to left).

| Precedence | Operator(s)                                                                                                                                      | Description                                                                                                     | Associativity |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------- |
| 1          | `[]`, `.`, `()` (method call)                                                                                                                    | Array index, member access, method call                                                                        | Left-to-right |
| 2          | `++`, `--` (postfix)                                                                                                                              | Postfix increment, postfix decrement                                                                            | Left-to-right |
| 3          | `++`, `--` (prefix), `+`, `-` (unary), `!`, `~`                                                                                                  | Prefix increment, prefix decrement, unary plus, unary minus, logical NOT, bitwise NOT                             | Right-to-left |
| 4          | `*`, `/`, `%`                                                                                                                                     | Multiplication, division, modulus (remainder)                                                                  | Left-to-right |
| 5          | `+`, `-`                                                                                                                                     | Addition, subtraction                                                                                             | Left-to-right |
| 6          | `<<`, `>>`, `>>>`                                                                                                                                | Left shift, signed right shift, unsigned right shift                                                            | Left-to-right |
| 7          | `<`, `<=`, `>`, `>=`, `instanceof`                                                                                                              | Relational operators (less than, less than or equal to, greater than, greater than or equal to), instanceof operator | Left-to-right |
| 8          | `==`, `!=`                                                                                                                                     | Equality, inequality                                                                                            | Left-to-right |
| 9          | `&`                                                                                                                                        | Bitwise AND                                                                                                     | Left-to-right |
| 10         | `^`                                                                                                                                        | Bitwise XOR (exclusive OR)                                                                                      | Left-to-right |
| 11         | `\|`                                                                                                                                       | Bitwise OR                                                                                                      | Left-to-right |
| 12         | `&&`                                                                                                                                       | Logical AND                                                                                                     | Left-to-right |
| 13         | `\|\|`                                                                                                                                      | Logical OR                                                                                                      | Left-to-right |
| 14         | `?:`                                                                                                                                       | Ternary conditional operator                                                                                    | Right-to-left |
| 15         | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `^=`, `|=`, `<<=`, `>>=`, `>>>=`                                                                     | Assignment operators                                                                                            | Right-to-left |

### 3. Key Concepts and Definitions

*   **Associativity:**  Determines the order in which operators of the same precedence are evaluated.

    *   **Left-to-right:**  Operators are evaluated from left to right (e.g., `a - b + c` is equivalent to `(a - b) + c`).
    *   **Right-to-left:** Operators are evaluated from right to left (e.g., `a = b = c` is equivalent to `a = (b = c)`).

*   **Parentheses `()`:**  Parentheses have the highest precedence.  Expressions within parentheses are always evaluated first, regardless of the precedence of other operators.  Using parentheses is the best way to control the order of evaluation and improve code readability.

### 4. Examples

**Example 1: Arithmetic Operators**

```java
int x = 5 + 3 * 2;  // Multiplication has higher precedence than addition.
System.out.println(x); // Output: 11 (3 * 2 = 6, then 5 + 6 = 11)

int y = (5 + 3) * 2; // Parentheses force addition to be performed first.
System.out.println(y); // Output: 16 (5 + 3 = 8, then 8 * 2 = 16)
```

**Example 2: Logical Operators**

```java
boolean a = true;
boolean b = false;
boolean c = a || b && false; // && has higher precedence than ||
System.out.println(c); // Output: true (b && false is false, then true || false is true)

boolean d = (a || b) && false; // Parentheses change the order.
System.out.println(d); // Output: false (true || false is true, then true && false is false)
```

**Example 3: Increment and Assignment Operators**

```java
int i = 5;
int j = i++; // Postfix increment: j gets the original value of i (5), then i is incremented.
System.out.println("i: " + i); // Output: i: 6
System.out.println("j: " + j); // Output: j: 5

int k = 5;
int l = ++k; // Prefix increment: k is incremented first, then l gets the new value of k.
System.out.println("k: " + k); // Output: k: 6
System.out.println("l: " + l); // Output: l: 6
```

**Example 4: Bitwise and Logical Operators**

```java
int num1 = 5; // 0101 in binary
int num2 = 3; // 0011 in binary

int result1 = num1 & num2;  // Bitwise AND
System.out.println("Bitwise AND: " + result1);  // Output: 1 (0101 & 0011 = 0001)

boolean bool1 = true;
boolean bool2 = false;

boolean result2 = bool1 && bool2; // Logical AND
System.out.println("Logical AND: " + result2); // Output: false
```

### 5. Practice Questions/Exercises

**Question 1:** What is the value of `result` after the following code is executed?

```java
int a = 10;
int b = 5;
int c = 2;
int result = a + b * c;
System.out.println("Question 1 " +result);
```

**Answer:**  `20` (Multiplication has higher precedence: 5 * 2 = 10, then 10 + 10 = 20)

**Question 2:** What is the value of `result` after the following code is executed?

```java
int a = 10;
int b = 5;
int c = 2;
int result = (a + b) * c;
System.out.println("Question 2 " +result);
```

**Answer:** `30` (Parentheses force addition first: 10 + 5 = 15, then 15 * 2 = 30)

**Question 3:** What is the output of the following code?

```java
boolean x = true;
boolean y = false;
boolean z = x && y || x;
System.out.println("Question 3 "+z);
```

**Answer:** `true` (&& has higher precedence than ||, so `x && y` is evaluated first, resulting in `false`.  Then `false || x` is evaluated, which results in `true`)

**Question 4:** What is the output of the following code?

```java
int i = 5;
int j = ++i + i++;
System.out.println("Question 4.1 "+i);
System.out.println("Question 4.2 "+j);
```

**Answer:**

*   `i: 7`
*   `j: 12`

Explanation:  `++i` increments `i` to 6 first.  Then `i++` evaluates to 6, but *after* the addition, `i` is incremented to 7. Therefore, `j = 6 + 6 = 12`.

**Question 5:**  Rewrite the following expression using parentheses to explicitly show the order of evaluation, and determine the result:  `a + b / c - d * e`  (Assume `a = 10`, `b = 20`, `c = 5`, `d = 2`, `e = 3`).

**Answer:**

Rewritten Expression: `(a + (b / c)) - (d * e)`

Calculation:

1.  `b / c = 20 / 5 = 4`
2.  `d * e = 2 * 3 = 6`
3.  `a + (b / c) = 10 + 4 = 14`
4.  `(a + (b / c)) - (d * e) = 14 - 6 = 8`

Result: `8`

### 6. Important Points to Remember

*   **Memorization is not always necessary:**  It's more important to understand the *concept* of operator precedence and how to use the precedence table as a reference when needed.
*   **Use parentheses:**  When in doubt, or when the order of operations is not immediately clear, use parentheses to explicitly define the order of evaluation. This enhances code readability and reduces the risk of errors.
*   **Readability is key:** Even if you know the operator precedence rules perfectly, using parentheses can make your code easier to understand, especially for complex expressions.
*   **Refer to the Java documentation:** The official Java documentation provides a definitive list of operator precedence rules.

By understanding and applying the concepts of operator precedence, you can write clear, correct, and predictable Java code. Always prioritize readability and use parentheses to avoid ambiguity and ensure your code behaves as intended.
