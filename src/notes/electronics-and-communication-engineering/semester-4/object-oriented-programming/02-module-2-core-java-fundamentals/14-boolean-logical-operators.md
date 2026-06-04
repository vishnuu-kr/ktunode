---
title: "Boolean Logical Operators"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe683"
status: "completed"
scrapedAt: "2026-05-23T17:51:27.694Z"
---
# OBJECT ORIENTED PROGRAMMING: Module 2: Core Java Fundamentals

## Topic: Boolean Logical Operators

This topic delves into the fundamental building blocks of decision-making in Java: **Boolean Logical Operators**. These operators are crucial for evaluating conditions and controlling the flow of execution in your programs, directly contributing to **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**

---

### 1. Introduction to Boolean Logic and Expressions

In programming, we often need to make decisions based on whether a condition is true or false. This is where Boolean logic comes into play.

*   **Boolean Data Type:** In Java, the `boolean` data type can hold one of two values: `true` or `false`.
    *   *Referenced from: Java: The Complete Reference by Herbert Schildt, 8/e, 2011. (Chapter 5: Data Types, Variables, and Arrays)*
    *   *Referenced from: Java How to Program, Early Objects by Paul Deitel, Harvey Deitel, 11th Edition, 2018. (Chapter 3: Java Basic Structure)*
*   **Boolean Expression:** A Boolean expression is any expression that evaluates to either `true` or `false`. These are often formed using relational operators.

### 2. Relational Operators

Relational operators are used to compare two values. The result of a comparison is always a `boolean` value.

| Operator | Description         | Example              | Result (if x=10, y=5) |
| :------- | :------------------ | :------------------- | :-------------------- |
| `>`      | Greater than        | `x > y`              | `true`                |
| `<`      | Less than           | `x < y`              | `false`               |
| `>=`     | Greater than or equal to | `x >= y`             | `true`                |
| `<=`     | Less than or equal to | `x <= y`             | `false`               |
| `==`     | Equal to            | `x == y`             | `false`               |
| `!=`     | Not equal to        | `x != y`             | `true`                |

*   **Example:**
    ```java
    int x = 10;
    int y = 5;

    boolean isXGreaterThanY = x > y; // isXGreaterThanY will be true
    boolean isXEqualToY = x == y;   // isXEqualToY will be false
    ```
*   *Referenced from: Fundamentals of Software Engineering by Rajib Mall, 4th edition, 2014. (Chapter 4: Programming Constructs)*
*   *Referenced from: Introduction to Java Programming by Y. Daniel Liang, 7/e, 2013. (Chapter 2: Java Programming Basics)*

### 3. Boolean Logical Operators

Boolean logical operators are used to combine or modify Boolean expressions. They allow you to create more complex conditions for decision-making.

#### 3.1. Logical AND (`&&`)

*   **Description:** The logical AND operator (`&&`) returns `true` only if **both** of its operands are `true`. Otherwise, it returns `false`.
*   **Truth Table:**
    | Operand 1 | Operand 2 | Result (`&&`) |
    | :-------- | :-------- | :------------ |
    | `true`    | `true`    | `true`        |
    | `true`    | `false`   | `false`       |
    | `false`   | `true`    | `false`       |
    | `false`   | `false`   | `false`       |
*   **Example:**
    ```java
    int age = 25;
    boolean hasLicense = true;

    if (age >= 18 && hasLicense) {
        System.out.println("You are eligible to drive.");
    } else {
        System.out.println("You are not eligible to drive.");
    }
    // Output: You are eligible to drive.
    ```
*   **Short-Circuiting Behavior:** If the first operand of `&&` is `false`, the second operand is **not** evaluated because the overall result will always be `false`. This is known as short-circuiting.
    *   *Referenced from: Java in A Nutshell by Flanagan D, 5/e, 2005. (Chapter 3: Expressions)*

#### 3.2. Logical OR (`||`)

*   **Description:** The logical OR operator (`||`) returns `true` if **at least one** of its operands is `true`. It only returns `false` if both operands are `false`.
*   **Truth Table:**
    | Operand 1 | Operand 2 | Result (`||`) |
    | :-------- | :-------- | :------------ |
    | `true`    | `true`    | `true`        |
    | `true`    | `false`   | `true`        |
    | `false`   | `true`    | `true`        |
    | `false`   | `false`   | `false`       |
*   **Example:**
    ```java
    char grade = 'A';
    boolean isDistinction = true;

    if (grade == 'A' || isDistinction) {
        System.out.println("You have achieved excellence!");
    } else {
        System.out.println("Keep up the good work.");
    }
    // Output: You have achieved excellence!
    ```
*   **Short-Circuiting Behavior:** If the first operand of `||` is `true`, the second operand is **not** evaluated because the overall result will always be `true`.
    *   *Referenced from: Core Java: An Integrated Approach by Nageswararao R., 2008. (Chapter 4: Operators and Expressions)*

#### 3.3. Logical NOT (`!`)

*   **Description:** The logical NOT operator (`!`) is a unary operator that inverts the Boolean value of its operand. If the operand is `true`, it returns `false`, and if the operand is `false`, it returns `true`.
*   **Truth Table:**
    | Operand | Result (`!`) |
    | :------ | :----------- |
    | `true`  | `false`      |
    | `false` | `true`       |
*   **Example:**
    ```java
    boolean isSunny = false;

    if (!isSunny) {
        System.out.println("It might be raining. Take an umbrella.");
    } else {
        System.out.println("Enjoy the sunshine!");
    }
    // Output: It might be raining. Take an umbrella.
    ```

#### 3.4. Logical XOR (`^`)

*   **Description:** The logical XOR (exclusive OR) operator (`^`) returns `true` if **exactly one** of its operands is `true`. If both operands are the same (both `true` or both `false`), it returns `false`.
*   **Truth Table:**
    | Operand 1 | Operand 2 | Result (`^`) |
    | :-------- | :-------- | :----------- |
    | `true`    | `true`    | `false`      |
    | `true`    | `false`   | `true`       |
    | `false`   | `true`    | `true`       |
    | `false`   | `false`   | `false`      |
*   **Example:**
    ```java
    boolean isMember = true;
    boolean isSeniorCitizen = false;

    if (isMember ^ isSeniorCitizen) {
        System.out.println("You receive a special discount.");
    } else {
        System.out.println("No special discount applicable.");
    }
    // Output: You receive a special discount.
    ```
*   **Note:** While `^` can be used for Boolean logic, it's also used for bitwise XOR operations on integral types. For clarity in Boolean logic, `&&`, `||`, and `!` are more commonly used.
    *   *Referenced from: Head First Java by Sierra K., 2/e, 2005. (Chapter 4: More About Objects)*

### 4. Operator Precedence

When you have multiple operators in an expression, Java follows a specific order of operations. Relational operators generally have higher precedence than logical operators.

*   **General Precedence (Simplified for Boolean Logic):**
    1.  Parentheses `()`
    2.  Logical NOT `!`
    3.  Logical XOR `^`
    4.  Logical AND `&&`
    5.  Logical OR `||`

*   **Example:** In `(a > b) && !(c == d)`, the parentheses are evaluated first, then the `>` and `==` (relational operators, higher precedence than logical), then `!` (logical NOT), and finally `&&` (logical AND).

*   *Referenced from: Java: The Complete Reference by Herbert Schildt, 8/e, 2011. (Chapter 6: Control Statements)*

### 5. Using Logical Operators with Control Flow Statements

Boolean logical operators are fundamental to controlling the flow of execution in Java, particularly within `if`, `while`, and `for` statements.

*   **`if` Statements:** Used to execute a block of code only if a condition is met.
    ```java
    int x = 10, y = 20, z = 15;
    if (x < y && y > z) {
        System.out.println("y is the largest."); // This will be printed
    }
    ```
*   **`while` Loops:** Used to repeatedly execute a block of code as long as a condition remains `true`.
    ```java
    int count = 0;
    while (count < 5 && !isFinished) {
        System.out.println("Counting...");
        count++;
    }
    ```
*   **`for` Loops:** Used for iteration with a specified start, condition, and increment/decrement.
    ```java
    for (int i = 0; i < 10 && !stopLoop; i++) {
        System.out.println("Iteration " + i);
    }
    ```

*   *Referenced from: Java How to Program, Early Objects by Paul Deitel, Harvey Deitel, 11th Edition, 2018. (Chapter 4: Control Programs: Introduction to Decisions)*
*   *Referenced from: Fundamentals of Software Engineering by Rajib Mall, 4th edition, 2014. (Chapter 4: Programming Constructs)*

### 6. Practice Questions

1.  **Question:** What will be the output of the following Java code snippet?
    ```java
    int a = 5, b = 10, c = 15;
    boolean result = (a < b) && (b < c);
    System.out.println(result);
    ```
    **Answer:** `true` (Because `a < b` is `true` and `b < c` is `true`, so `true && true` is `true`).

2.  **Question:** What will be the output of the following Java code snippet?
    ```java
    int x = 20, y = 10;
    boolean output = (x == y) || (x > y);
    System.out.println(output);
    ```
    **Answer:** `true` (Because `x == y` is `false`, but `x > y` is `true`. So `false || true` is `true`).

3.  **Question:** What will be the output of the following Java code snippet?
    ```java
    boolean isAvailable = false;
    System.out.println(!isAvailable);
    ```
    **Answer:** `true` (The `!` operator inverts `false` to `true`).

4.  **Question:** Write a Java `if` statement that checks if a variable `score` is between 70 and 80 (inclusive). Use logical AND operator.
    **Answer:**
    ```java
    int score = 75;
    if (score >= 70 && score <= 80) {
        System.out.println("Score is in the good range.");
    }
    ```

5.  **Question:** Explain the difference between `&` and `&&` in Java.
    **Answer:**
    *   `&` is a bitwise AND operator. When used with Booleans, it acts like a logical AND but **always** evaluates both operands, even if the first one is false.
    *   `&&` is a **short-circuiting** logical AND operator. If the first operand is `false`, it does not evaluate the second operand, improving efficiency.
    *   *Referenced from: Java: The Complete Reference by Herbert Schildt, 8/e, 2011. (Chapter 6: Control Statements)*

---

### 7. Important Points to Remember

*   Boolean logical operators (`&&`, `||`, `!`, `^`) operate on Boolean values (`true` or `false`).
*   Relational operators (`>`, `<`, `==`, `!=`, `>=`, `<=`) produce Boolean values.
*   **Short-circuiting** with `&&` and `||` is crucial for efficiency and preventing potential errors (e.g., division by zero if the divisor is calculated in the second operand).
*   Understand operator precedence to correctly evaluate complex Boolean expressions. Use parentheses to ensure clarity and control the order of evaluation.
*   These operators are fundamental for creating conditional logic and controlling program flow in Java, directly contributing to **CO2**.

---

### Alignment with Course Outcomes:

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.** This entire topic directly addresses the "operators" and "control statements" aspects of CO2. By understanding and applying Boolean logical operators, students can construct the conditional logic necessary to develop functional Java programs.
*   **CO1: Summarize the object-oriented concepts...** While not directly about classes/objects, the ability to form Boolean expressions is foundational for methods that might contain such logic within objects.
*   **CO3: Illustrate how robust programs can be written...** Understanding short-circuiting and proper operator usage contributes to writing more robust and efficient code.

---
This study material provides a comprehensive overview of Boolean Logical Operators, essential for understanding and implementing decision-making logic in Java, directly supporting your learning within the context of Object-Oriented Programming.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
