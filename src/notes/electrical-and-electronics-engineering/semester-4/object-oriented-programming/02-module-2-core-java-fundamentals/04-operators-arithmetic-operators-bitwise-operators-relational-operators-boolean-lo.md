---
title: "Operators - Arithmetic Operators, Bitwise Operators, Relational Operators, Boolean Logical Operators, Assignment Operator, Conditional (Ternary) Operator, Operator Precedence."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36009"
status: "completed"
scrapedAt: "2026-05-23T16:17:31.085Z"
---
## OBJECT ORIENTED PROGRAMMING: Module 2: Core Java Fundamentals

---

### Topic: Operators in Java

**Objective:** To understand and utilize various operators in Java for performing operations on data.

**Learning Outcomes:**

*   Understand the different categories of operators in Java.
*   Apply arithmetic operators for mathematical calculations.
*   Utilize bitwise operators for manipulating individual bits of data.
*   Employ relational operators for comparison between values.
*   Implement boolean logical operators to combine or negate conditional expressions.
*   Understand and use the assignment operator for variable assignment.
*   Apply the conditional (ternary) operator for concise conditional assignments.
*   Understand and apply operator precedence rules to resolve expression evaluation order.

---

### 1. Arithmetic Operators

These operators perform basic mathematical operations. They are used to manipulate numerical data.

*   **Operators:**
    *   `+` : Addition
    *   `-` : Subtraction
    *   `*` : Multiplication
    *   `/` : Division
    *   `%` : Modulus (Remainder of a division)

*   **Data Types:** Primarily used with integral types (`byte`, `short`, `int`, `long`) and floating-point types (`float`, `double`).

*   **Important Notes:**
    *   Integer division (`/`) truncates any fractional part.
    *   The modulus operator (`%`) can be used with both integers and floating-point numbers. For floating-point numbers, it computes the remainder of the division.
    *   The `+` operator can also be used for string concatenation.

*   **Examples:**

    ```java
    int a = 10;
    int b = 5;

    int sum = a + b;      // sum = 15
    int difference = a - b; // difference = 5
    int product = a * b;    // product = 50
    int quotient = a / b;   // quotient = 2
    int remainder = a % b;  // remainder = 0

    double x = 10.0;
    double y = 3.0;

    double doubleQuotient = x / y; // doubleQuotient = 3.333...
    double doubleRemainder = x % y; // doubleRemainder = 1.0

    String firstName = "John";
    String lastName = "Doe";
    String fullName = firstName + " " + lastName; // fullName = "John Doe"
    ```

*   **References:**
    *   *Java: The Complete Reference* by Herbert Schildt (Chapter 4: Operators)
    *   *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (Chapter 4: Introduction to Classes, Objects, and Methods – covers basic operations which implicitly use arithmetic operators)

---

### 2. Bitwise Operators

These operators operate on individual bits of their operands. They are often used for low-level manipulation of data.

*   **Operators:**
    *   `&` : Bitwise AND
    *   `|` : Bitwise OR
    *   `^` : Bitwise XOR (Exclusive OR)
    *   `~` : Bitwise Complement (One's Complement)
    *   `<<`: Left Shift
    *   `>>`: Signed Right Shift
    *   `>>>`: Unsigned Right Shift

*   **Data Types:** Operate on integral types (`byte`, `short`, `int`, `long`).

*   **Explanation of Operators:**
    *   **Bitwise AND (`&`):** Returns 1 if both corresponding bits are 1, otherwise 0.
    *   **Bitwise OR (`|`):** Returns 1 if at least one of the corresponding bits is 1, otherwise 0.
    *   **Bitwise XOR (`^`):** Returns 1 if the corresponding bits are different, otherwise 0.
    *   **Bitwise Complement (`~`):** Flips each bit (0 becomes 1, 1 becomes 0).
    *   **Left Shift (`<<`):** Shifts the bits of the left operand to the left by the number of positions specified by the right operand. Vacated bits on the right are filled with zeros. Equivalent to multiplying by 2 raised to the power of the shift amount.
    *   **Signed Right Shift (`>>`):** Shifts the bits of the left operand to the right by the number of positions specified by the right operand. Vacated bits on the left are filled with the sign bit (0 for positive numbers, 1 for negative numbers). Equivalent to dividing by 2 raised to the power of the shift amount (preserving the sign).
    *   **Unsigned Right Shift (`>>>`):** Shifts the bits of the left operand to the right by the number of positions specified by the right operand. Vacated bits on the left are always filled with zeros, regardless of the sign.

*   **Examples:**

    Let's consider `a = 60` (binary `0011 1100`) and `b = 13` (binary `0000 1101`).

    ```java
    int a = 60; // 0011 1100
    int b = 13; // 0000 1101

    int andResult = a & b;  // andResult = 12 (0000 1100)
    int orResult = a | b;   // orResult = 61 (0011 1101)
    int xorResult = a ^ b;  // xorResult = 49 (0011 0001)
    int complementA = ~a;  // complementA = -61 (1100 0011 - two's complement representation)

    int leftShiftA = a << 2; // leftShiftA = 240 (1111 0000) - 60 * 2^2
    int rightShiftA = a >> 2; // rightShiftA = 15 (0000 1111) - 60 / 2^2
    int unsignedRightShiftA = a >>> 2; // unsignedRightShiftA = 15 (0000 1111)
    ```

*   **References:**
    *   *Java: The Complete Reference* by Herbert Schildt (Chapter 4: Operators)
    *   *Fundamentals of Software Engineering* by Rajib Mall (Less emphasis on bitwise, but foundational concepts of data representation are relevant.)
    *   *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (Chapter 4: Introduction to Classes, Objects, and Methods)

---

### 3. Relational Operators

These operators compare two values and return a boolean result (`true` or `false`). They are fundamental for controlling program flow using conditional statements.

*   **Operators:**
    *   `==` : Equal to
    *   `!=` : Not equal to
    *   `>`  : Greater than
    *   `<`  : Less than
    *   `>=` : Greater than or equal to
    *   `<=` : Less than or equal to

*   **Data Types:** Can be used with all primitive data types and objects (for `==` and `!=`, which compare references for objects).

*   **Examples:**

    ```java
    int x = 10;
    int y = 20;
    String s1 = "Hello";
    String s2 = "Hello";
    String s3 = new String("Hello");

    boolean isEqual = (x == y);       // isEqual = false
    boolean isNotEqual = (x != y);    // isNotEqual = true
    boolean isGreater = (y > x);      // isGreater = true
    boolean isLess = (x < y);         // isLess = true
    boolean isGreaterOrEqual = (x >= 10); // isGreaterOrEqual = true
    boolean isLessOrEqual = (y <= 20); // isLessOrEqual = true

    // For objects, == compares references (memory addresses)
    boolean areReferencesEqual = (s1 == s2); // areReferencesEqual = true (literal pool)
    boolean areReferencesEqual2 = (s1 == s3); // areReferencesEqual2 = false (s3 is a new object)

    // To compare String content, use .equals()
    boolean areContentsEqual = s1.equals(s2); // areContentsEqual = true
    boolean areContentsEqual2 = s1.equals(s3); // areContentsEqual2 = true
    ```

*   **References:**
    *   *Java: The Complete Reference* by Herbert Schildt (Chapter 4: Operators)
    *   *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (Chapter 4: Introduction to Classes, Objects, and Methods)
    *   *Introduction to Java Programming* by Y. Daniel Liang (Chapter 3: Expressions and Control Statements)

---

### 4. Boolean Logical Operators

These operators are used to combine or negate `boolean` expressions. They are essential for creating complex conditional logic.

*   **Operators:**
    *   `&&` : Logical AND (Short-circuiting)
    *   `||` : Logical OR (Short-circuiting)
    *   `!`  : Logical NOT
    *   `&`  : Bitwise AND (can be used with booleans, but not short-circuiting)
    *   `|`  : Bitwise OR (can be used with booleans, but not short-circuiting)
    *   `^`  : Bitwise XOR (can be used with booleans)

*   **Data Types:** Operate on `boolean` operands.

*   **Explanation of Operators:**
    *   **Logical AND (`&&`):** Returns `true` if both operands are `true`, otherwise `false`. **Short-circuiting:** If the left operand is `false`, the right operand is not evaluated because the result will always be `false`.
    *   **Logical OR (`||`):** Returns `true` if at least one operand is `true`, otherwise `false`. **Short-circuiting:** If the left operand is `true`, the right operand is not evaluated because the result will always be `true`.
    *   **Logical NOT (`!`):** Reverses the boolean value of the operand.
    *   **Bitwise AND/OR with Booleans (`&`, `|`):** When used with booleans, they perform the same logic as `&&` and `||` respectively, but they are **not short-circuiting**. Both operands are always evaluated.
    *   **Bitwise XOR with Booleans (`^`):** Returns `true` if the operands are different, `false` if they are the same. Not short-circuiting.

*   **Examples:**

    ```java
    int age = 25;
    boolean isStudent = true;

    // Logical AND
    boolean eligibleForDiscount = (age > 18) && isStudent; // eligibleForDiscount = true

    // Logical OR
    boolean canEnter = (age > 18) || isStudent; // canEnter = true (even if age was 15, it would be true due to isStudent)

    // Logical NOT
    boolean isNotStudent = !isStudent; // isNotStudent = false

    // Short-circuiting example
    int count = 0;
    // (count++ == 0) is true, but count++ causes count to become 1.
    // If the right side (count++ == 1) was evaluated, it would also be true.
    // With &&, the right side IS evaluated.
    boolean testAnd = (count++ == 0) && (count++ == 1); // testAnd = true, count is now 2

    count = 0;
    // If the left side was false, the right side would not be evaluated.
    // Example where short-circuiting matters:
    boolean testShortCircuit = (count++ == 1) && (count++ == 0); // testShortCircuit = false, count is 0 (second count++ never executed)

    // Non-short-circuiting example with &
    count = 0;
    boolean testBitwiseAnd = (count++ == 0) & (count++ == 1); // testBitwiseAnd = true, count is 2 (both count++ are evaluated)
    ```

*   **References:**
    *   *Java: The Complete Reference* by Herbert Schildt (Chapter 4: Operators)
    *   *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (Chapter 4: Introduction to Classes, Objects, and Methods)
    *   *Introduction to Java Programming* by Y. Daniel Liang (Chapter 3: Expressions and Control Statements)

---

### 5. Assignment Operator

The assignment operator is used to assign a value to a variable.

*   **Primary Operator:**
    *   `=` : Assignment

*   **Compound Assignment Operators:** These combine an arithmetic or bitwise operation with assignment. They provide a more concise way to write assignments.
    *   `+=` : Add and assign
    *   `-=` : Subtract and assign
    *   `*=` : Multiply and assign
    *   `/=` : Divide and assign
    *   `%=` : Modulus and assign
    *   `&=` : Bitwise AND and assign
    *   `|=` : Bitwise OR and assign
    *   `^=` : Bitwise XOR and assign
    *   `<<=` : Left shift and assign
    *   `>>=` : Signed right shift and assign
    *   `>>>=` : Unsigned right shift and assign

*   **Data Types:** Applicable to all primitive types and object references.

*   **Examples:**

    ```java
    int num = 10; // Simple assignment

    num = num + 5;   // Equivalent to: num += 5;  (num becomes 15)
    num = num - 3;   // Equivalent to: num -= 3;  (num becomes 12)
    num = num * 2;   // Equivalent to: num *= 2;  (num becomes 24)
    num = num / 4;   // Equivalent to: num /= 4;  (num becomes 6)
    num = num % 5;   // Equivalent to: num %= 5;  (num becomes 1)

    int bitNum = 5; // Binary: 0000 0101
    bitNum <<= 1;   // Equivalent to: bitNum = bitNum << 1; (bitNum becomes 10, Binary: 0000 1010)
    ```

*   **References:**
    *   *Java: The Complete Reference* by Herbert Schildt (Chapter 4: Operators)
    *   *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (Chapter 4: Introduction to Classes, Objects, and Methods)
    *   *Introduction to Java Programming* by Y. Daniel Liang (Chapter 3: Expressions and Control Statements)

---

### 6. Conditional (Ternary) Operator

This operator provides a concise way to write simple conditional assignments. It's a shorthand for an `if-else` statement that assigns a value.

*   **Syntax:** `condition ? expression1 : expression2`

*   **Explanation:**
    1.  The `condition` (a boolean expression) is evaluated.
    2.  If the `condition` is `true`, `expression1` is evaluated, and its value becomes the result of the operator.
    3.  If the `condition` is `false`, `expression2` is evaluated, and its value becomes the result of the operator.

*   **Data Types:** The types of `expression1` and `expression2` must be compatible. The result will be of the common type.

*   **Examples:**

    ```java
    int score = 75;
    String grade;

    // Using if-else
    if (score >= 60) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }
    // grade is now "Pass"

    // Using the ternary operator
    grade = (score >= 60) ? "Pass" : "Fail";
    // grade is now "Pass"

    int a = 10;
    int b = 20;
    int max = (a > b) ? a : b; // max is 20
    ```

*   **References:**
    *   *Java: The Complete Reference* by Herbert Schildt (Chapter 4: Operators)
    *   *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (Chapter 4: Introduction to Classes, Objects, and Methods)
    *   *Introduction to Java Programming* by Y. Daniel Liang (Chapter 3: Expressions and Control Statements)

---

### 7. Operator Precedence

Operator precedence determines the order in which operators are evaluated in an expression. When an expression contains multiple operators, precedence rules dictate which operator is applied first.

*   **Importance:** Understanding precedence is crucial to ensure that expressions are evaluated as intended, preventing unexpected results. Parentheses `()` can be used to override default precedence.

*   **Precedence Table (from highest to lowest):**

    | Precedence | Operator                | Description                    |
    | :--------- | :---------------------- | :----------------------------- |
    | 1          | `()`                    | Parentheses                    |
    | 2          | `++`, `--` (postfix)    | Postfix increment/decrement    |
    | 3          | `+`, `-` (unary)        | Unary plus/minus               |
    | 3          | `++`, `--` (prefix)    | Prefix increment/decrement     |
    | 3          | `!`, `~`                | Logical NOT, Bitwise Complement |
    | 4          | `*`, `/`, `%`           | Multiplication, Division, Modulus |
    | 5          | `+`, `-`                | Addition, Subtraction          |
    | 6          | `<<`, `>>`, `>>>`       | Left Shift, Right Shifts       |
    | 7          | `<`, `<=`, `>`, `>=`    | Relational Operators           |
    | 8          | `==`, `!=`              | Equality Operators             |
    | 9          | `&`                     | Bitwise AND                    |
    | 10         | `^`                     | Bitwise XOR                    |
    | 11         | `|`                     | Bitwise OR                     |
    | 12         | `&&`                    | Logical AND (short-circuit)    |
    | 13         | `||`                    | Logical OR (short-circuit)     |
    | 14         | `? :`                   | Ternary Operator               |
    | 15         | `=`, `+=`, `-=`, etc.   | Assignment Operators           |

*   **Associativity:** When operators have the same precedence, associativity rules determine the order. Most binary operators are left-associative (evaluated from left to right), while assignment and the ternary operator are right-associative.

*   **Examples:**

    Consider the expression: `int result = 5 + 3 * 2;`

    *   According to precedence, multiplication (`*`) has higher precedence than addition (`+`).
    *   Therefore, `3 * 2` is evaluated first, resulting in `6`.
    *   Then, `5 + 6` is evaluated, resulting in `11`.
    *   `result` will be `11`.

    Consider the expression: `int x = 10, y = 20, z = 30; int expression = x + y * z / 2;`

    *   Precedence: `*` and `/` are higher than `+`.
    *   Associativity: `*` and `/` are left-associative.
    *   Evaluation:
        1.  `y * z` (20 * 30 = 600)
        2.  `600 / 2` (300)
        3.  `x + 300` (10 + 300 = 310)
    *   `expression` will be `310`.

    To force a different order: `int expression2 = (x + y) * z / 2;`

    *   Parentheses override precedence.
    *   Evaluation:
        1.  `x + y` (10 + 20 = 30)
        2.  `30 * z` (30 * 30 = 900)
        3.  `900 / 2` (450)
    *   `expression2` will be `450`.

*   **References:**
    *   *Java: The Complete Reference* by Herbert Schildt (Chapter 4: Operators)
    *   *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (Chapter 4: Introduction to Classes, Objects, and Methods)
    *   *Introduction to Java Programming* by Y. Daniel Liang (Chapter 3: Expressions and Control Statements)

---

### Practice Questions

**1. Arithmetic Operators:**
   Given `int a = 15; int b = 4;`. What will be the output of `System.out.println(a / b);` and `System.out.println(a % b);`?

   **Answer:**
   `a / b` will be `3` (integer division truncates the decimal part).
   `a % b` will be `3` (15 divided by 4 is 3 with a remainder of 3).

**2. Bitwise Operators:**
   If `byte x = 10;` (binary `0000 1010`), what is the result of `x << 2`?

   **Answer:**
   `x << 2` shifts the bits of `x` two positions to the left, filling the vacated positions with zeros.
   `0000 1010` becomes `0010 1000`, which is the decimal value `40`.

**3. Relational Operators:**
   Given `String name1 = "Java"; String name2 = "java";`. What will `name1.equals(name2)` and `name1 == name2` output?

   **Answer:**
   `name1.equals(name2)` will be `false` because `equals()` is case-sensitive.
   `name1 == name2` will be `false` because they refer to different string objects in memory (even though their content would be the same if case were ignored).

**4. Boolean Logical Operators:**
   Consider `boolean p = true; boolean q = false;`. What is the output of `!(p || q)`?

   **Answer:**
   `p || q` evaluates to `true || false`, which is `true`.
   `!(true)` evaluates to `false`.

**5. Assignment Operators:**
   What is the final value of `int value = 100; value /= 2; value -= 10;`?

   **Answer:**
   `value /= 2;` makes `value` `50`.
   `value -= 10;` makes `value` `40`.
   The final value is `40`.

**6. Conditional (Ternary) Operator:**
   Write a ternary operator expression to assign the larger of two integers `num1` and `num2` to a variable `maximum`.

   **Answer:**
   `int maximum = (num1 > num2) ? num1 : num2;`

**7. Operator Precedence:**
   Determine the value of `x` in the following expression: `int x = 5 * 2 + 10 / 2 - 3;`

   **Answer:**
   Evaluation order based on precedence:
   1. `5 * 2` = `10`
   2. `10 / 2` = `5`
   3. `10 + 5` = `15`
   4. `15 - 3` = `12`
   So, `x` will be `12`.

---

### Important Points to Remember:

*   **Type Promotion:** When operators operate on operands of different primitive types, Java promotes the operands to a common type before the operation. For example, in `int + double`, the `int` is promoted to `double`.
*   **Short-Circuiting:** Logical AND (`&&`) and OR (`||`) are short-circuiting. This means the second operand is not evaluated if the result can be determined from the first operand alone. This is important for efficiency and to prevent errors (e.g., division by zero).
*   **Object Comparison:** Relational operators `==` and `!=` for objects compare references (memory addresses), not the content of the objects. Use the `.equals()` method to compare object content, especially for Strings.
*   **Parentheses:** Always use parentheses `()` to clarify the order of operations and override default precedence rules to ensure your expressions are evaluated as intended.
*   **Compound Assignment Operators:** Use compound assignment operators (`+=`, `-=`, etc.) for conciseness and to make your code more readable.

---

This module provides a foundational understanding of operators, which are the building blocks of expressions in Java. Mastering these operators is crucial for implementing logic and performing calculations within your Java programs, directly contributing to Course Outcome CO2.
