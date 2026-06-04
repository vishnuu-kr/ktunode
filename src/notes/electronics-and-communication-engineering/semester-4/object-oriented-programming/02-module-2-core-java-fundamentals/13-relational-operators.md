---
title: "Relational Operators"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe682"
status: "completed"
scrapedAt: "2026-05-23T17:51:27.059Z"
---
# OBJECT ORIENTED PROGRAMMING
## Module 2: Core Java Fundamentals
### Topic: Relational Operators

---

### 1. Introduction to Relational Operators

Relational operators are used to establish a relationship between two operands. In Java, these operators are crucial for **comparison** and are fundamental to controlling the flow of execution in programs, particularly within conditional statements (`if`, `else if`, `else`) and loops (`while`, `for`).

**Key Concept:** Relational operators evaluate to a boolean value (`true` or `false`).

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. Relational operators are a key type of operator used with data types and control statements.

**Reference (Conceptual):**
*   **Java: The Complete Reference (Schildt, 8/e):** Discusses operators as building blocks for expressions and their role in decision-making.
*   **Java How to Program (Deitel & Deitel, 11/e):** Explains how relational operators are used in conditional statements to control program flow.

---

### 2. Types of Relational Operators in Java

Java provides six relational operators:

| Operator | Description              | Example        | Result if true |
| :------- | :----------------------- | :------------- | :------------- |
| `==`     | Equal to                 | `a == b`       | `true`         |
| `!=`     | Not equal to             | `a != b`       | `true`         |
| `>`      | Greater than             | `a > b`        | `true`         |
| `<`      | Less than                | `a < b`        | `true`         |
| `>=`     | Greater than or equal to | `a >= b`       | `true`         |
| `<=`     | Less than or equal to    | `a <= b`       | `true`         |

**Key Concepts:**
*   **Operands:** The values or variables on which the operator acts. They can be primitive data types (like `int`, `double`, `char`, `boolean`) or objects.
*   **Boolean Result:** The outcome of any relational operation is always a `boolean` value (`true` or `false`).

**Examples:**

```java
int age = 25;
double salary = 50000.50;
char grade = 'A';

// Equality
System.out.println(age == 25);       // Output: true
System.out.println(salary != 50000); // Output: true

// Inequality
System.out.println(age != 25);       // Output: false
System.out.println(salary == 50000.50); // Output: true

// Greater than
System.out.println(age > 18);        // Output: true
System.out.println(salary > 60000.00); // Output: false

// Less than
System.out.println(age < 30);        // Output: true
System.out.println(salary < 40000.25); // Output: false

// Greater than or equal to
System.out.println(age >= 18);       // Output: true
System.out.println(age >= 30);       // Output: false

// Less than or equal to
System.out.println(age <= 30);       // Output: true
System.out.println(age <= 20);       // Output: false

// Comparing characters (based on their ASCII/Unicode values)
System.out.println(grade <= 'Z');    // Output: true (ASCII of 'A' is less than 'Z')
```

**Reference (Specific):**
*   **Java: The Complete Reference (Schildt, 8/e), Chapter 3 - Operators:** Provides a detailed overview of all Java operators, including relational operators.
*   **Java How to Program (Deitel & Deitel, 11/e), Chapter 4 - Introduction to Classes, Objects, Methods, Instance Variables, and Strings:** While focusing on classes, this chapter implicitly uses relational operators for comparisons within methods.
*   **Introduction to Java Programming (Liang, 7/e), Chapter 3 - Expressions and Operator Precedence:** Lists and explains relational operators with examples.

---

### 3. Relational Operators with Different Data Types

Relational operators can be used with various primitive data types:

*   **Numeric Types (`byte`, `short`, `int`, `long`, `float`, `double`):** Comparisons are straightforward based on their numerical values. Type promotion may occur if operands are of different numeric types.
*   **`char` Type:** Characters are compared based on their Unicode values. For example, `'a'` is less than `'b'`, and `'A'` is less than `'a'`.
*   **`boolean` Type:**
    *   `true == true` is `true`.
    *   `false == false` is `true`.
    *   `true == false` is `false`.
    *   `!=` works similarly.
*   **Objects:**
    *   **`==` and `!=`:** When applied to objects, these operators compare **references** (memory addresses), not the actual content of the objects. They check if two object variables point to the exact same object instance in memory.
    *   To compare the **content** of objects (e.g., strings), you must use the `equals()` method.
    *   The relational operators `>`, `<`, `>=`, `<=` cannot be used directly on arbitrary objects. They are defined for primitive types and can be used with objects if the object's class implements specific interfaces (like `Comparable`) that define ordering.

**Examples:**

```java
// Numeric types
int x = 10;
double y = 10.0;
System.out.println(x == y); // Output: true (due to type promotion)

// Char types
char c1 = 'p';
char c2 = 'q';
System.out.println(c1 < c2); // Output: true

// Boolean types
boolean flag1 = true;
boolean flag2 = false;
System.out.println(flag1 != flag2); // Output: true

// Objects (String comparison)
String str1 = new String("Java");
String str2 = new String("Java");
String str3 = str1;

System.out.println(str1 == str2); // Output: false (different object instances)
System.out.println(str1.equals(str2)); // Output: true (same content)
System.out.println(str1 == str3); // Output: true (same object instance)

// Cannot use <, >, <=, >= directly on String for content comparison
// System.out.println(str1 > str2); // Compile-time error
```

**Reference (Specific):**
*   **Java: The Complete Reference (Schildt, 8/e), Chapter 5 - Operators:** Discusses the behavior of operators with different data types.
*   **Java How to Program (Deitel & Deitel, 11/e), Chapter 6 - Arrays and Chapter 7 - Object-Oriented Programming:** Covers object comparison using `==`, `!=`, and `equals()`, and introduces the concept of comparable objects.
*   **Introduction to Java Programming (Liang, 7/e), Chapter 3 - Expressions and Operator Precedence & Chapter 10 - Objects and Classes:** Explains primitive vs. object comparison.
*   **Head First Java (Sierra, 2/e), Chapter 2 - Java Building Blocks:** Demonstrates basic comparisons, including how `==` works for primitives and objects.

---

### 4. Relational Operators in Control Flow Statements

Relational operators are most commonly used within control flow statements to make decisions and control the repetition of code.

#### 4.1. `if` and `if-else` Statements

These statements execute a block of code based on whether a condition (often involving relational operators) evaluates to `true` or `false`.

**Syntax:**

```java
if (condition) {
    // Code to execute if condition is true
}

if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

**Example:**

```java
int studentScore = 75;

if (studentScore >= 60) {
    System.out.println("Student has passed the exam.");
} else {
    System.out.println("Student has failed the exam.");
}
```

#### 4.2. `while` and `for` Loops

These loops continue to execute a block of code as long as a given condition remains `true`.

**Syntax:**

```java
// while loop
while (condition) {
    // Code to execute repeatedly
    // Update variables involved in the condition
}

// for loop
for (initialization; condition; update) {
    // Code to execute repeatedly
}
```

**Example:**

```java
int count = 1;

// Using while loop
while (count <= 5) {
    System.out.println("Count is: " + count);
    count++; // Relational operator (<=) is used in condition, increment updates the variable
}

// Using for loop
for (int i = 10; i >= 5; i--) {
    System.out.println("Countdown: " + i); // Relational operator (>=) is used in condition
}
```

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. This section directly addresses the use of operators with control statements.

**Reference (Specific):**
*   **Java: The Complete Reference (Schildt, 8/e), Chapter 6 - Control Flow Statements:** Explains how relational operators are integral to `if`, `while`, and `for` statements.
*   **Java How to Program (Deitel & Deitel, 11/e), Chapter 4 - Control-Flow Statements:** Details the use of relational operators in conditional statements and loops.
*   **Introduction to Java Programming (Liang, 7/e), Chapter 5 - Control Statements:** Provides extensive examples of relational operators within control flow structures.

---

### 5. Important Points to Remember

*   **Comparison Only:** Relational operators only compare their operands; they do not modify them.
*   **Boolean Result:** The output of a relational operation is always `true` or `false`.
*   **`=` vs. `==`:** A common mistake is using the assignment operator (`=`) when the equality operator (`==`) is intended. This will lead to syntax errors or logical errors in conditional statements.
*   **Object Reference vs. Content:** Remember the distinction between `==` (reference comparison for objects) and `.equals()` (content comparison for objects, especially strings).
*   **Operator Precedence:** When multiple operators are in an expression, their order of evaluation is determined by precedence rules. Relational operators generally have lower precedence than arithmetic operators but higher precedence than logical operators.

**Reference (Highlight):**
*   **Java: The Complete Reference (Schildt, 8/e), Chapter 5 - Operators:** Explicitly mentions common pitfalls like `=` vs. `==`.
*   **Head First Java (Sierra, 2/e), Chapter 2 - Java Building Blocks:** Emphasizes the difference between assignment and equality operators with clear analogies.

---

### 6. Practice Questions

1.  What will be the output of the following Java code snippet?
    ```java
    int a = 15;
    int b = 10;
    System.out.println(a > b && a != 15);
    ```
    a) `true`
    b) `false`
    c) Compile-time error
    d) `true && false`

2.  Which relational operator checks if two operands are not equal?
    a) `!=`
    b) `==`
    c) `<>`
    d) `><`

3.  Consider the following code:
    ```java
    String name1 = "Java";
    String name2 = new String("Java");
    System.out.println(name1 == name2);
    System.out.println(name1.equals(name2));
    ```
    What will be the output?
    a) `false` followed by `true`
    b) `true` followed by `false`
    c) `true` followed by `true`
    d) `false` followed by `false`

4.  What is the primary purpose of relational operators in Java?
    a) To perform arithmetic calculations.
    b) To establish relationships and compare values between operands.
    c) To assign values to variables.
    d) To manipulate individual bits of data.

5.  Can relational operators be used to compare two `boolean` variables in Java? If yes, provide a small example.

---

### 7. Answers to Practice Questions

1.  **b) `false`**
    *   **Explanation:** `a > b` (15 > 10) is `true`. `a != 15` (15 != 15) is `false`. The `&&` (logical AND) operator requires both sides to be `true` for the overall result to be `true`. Since one side is `false`, the result is `false`.

2.  **a) `!=`**
    *   **Explanation:** The `!=` operator is the "not equal to" operator.

3.  **a) `false` followed by `true`**
    *   **Explanation:** `name1 == name2` compares the memory addresses of the two `String` objects. Since `name2` is created using `new String()`, it's a different object instance than `name1`, even though their content is the same. Hence, `name1 == name2` is `false`. `name1.equals(name2)` compares the actual content of the strings, which is "Java" for both, so it returns `true`.

4.  **b) To establish relationships and compare values between operands.**
    *   **Explanation:** This is the definition of relational operators.

5.  **Yes, relational operators can be used to compare two `boolean` variables.**
    *   **Example:**
        ```java
        boolean isRaining = true;
        boolean isSunny = false;

        System.out.println("Is it raining and not sunny? " + (isRaining && !isSunny)); // Using logical operators, but relational can be used for equality
        System.out.println("Are both states the same? " + (isRaining == isRaining)); // true
        System.out.println("Are both states different? " + (isRaining != isSunny));   // true
        ```
    *   **Explanation:** `true == true` evaluates to `true`, `false == false` evaluates to `true`, and `true == false` evaluates to `false`. The `!=` operator works inversely.

---

### 8. Alignment with Course Outcomes and Knowledge Levels

*   **CO2 (K3):** This entire topic directly supports CO2 by demonstrating the utilization of operators (`==`, `!=`, `>`, `<`, `>=`, `<=`) in conjunction with primitive data types and within control statements (`if`, `while`, `for`) to build functional Java programs. Understanding these operators is essential for any meaningful programming in Java.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
