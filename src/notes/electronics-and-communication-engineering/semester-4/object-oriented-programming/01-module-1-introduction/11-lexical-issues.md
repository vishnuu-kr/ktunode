---
title: "Lexical Issues."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe674"
status: "completed"
scrapedAt: "2026-05-23T17:51:17.789Z"
---
# Object-Oriented Programming (OOP) - Module 1: Introduction - Lexical Issues

## 1. Introduction to OOP and Lexical Issues

Object-Oriented Programming (OOP) is a programming paradigm that structures a program around **objects**, rather than functions and logic. Objects are instances of **classes**, which are blueprints that define the properties (data members or attributes) and behaviors (methods or functions) that objects of that class will have.

**Lexical issues** in programming refer to the fundamental elements of a programming language that the compiler or interpreter must recognize to understand the source code. These are the building blocks of any program. For Java, understanding these lexical elements is crucial for writing correct and readable code.

This module will introduce you to the basic lexical components of Java, which are essential for building upon in later modules to achieve the course outcomes.

### 1.1 Learning Outcomes Covered in this Topic

While this specific topic focuses on lexical elements, it lays the groundwork for several learning outcomes:

*   **CO1 (Knowledge Level: K2): Summarize the object-oriented concepts...** Understanding basic Java syntax and lexical elements is the first step in comprehending how object-oriented concepts like classes and objects are represented in code.
*   **CO2 (Knowledge Level: K3): Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.** Lexical elements directly relate to data types, operators, and the syntax of control statements and class definitions.

---

## 2. Key Lexical Elements in Java

The lexical structure of a Java program consists of several fundamental components. The Java compiler uses these elements to parse and understand your code.

### 2.1 Whitespace

Whitespace characters are generally ignored by the Java compiler, except when they separate tokens. They are used to make code readable and organized.

*   **Types of Whitespace:**
    *   Space (` `)
    *   Tab (`\t`)
    *   Newline (`\n`)
    *   Carriage return (`\r`)

*   **Purpose:**
    *   Separates tokens.
    *   Improves code readability and formatting.

*   **Example:**

    ```java
    int  myVariable = 10; // Whitespace between 'int', 'myVariable', '=', and '10' is ignored except for separation.
    ```

### 2.2 Comments

Comments are non-executable statements in the source code that are used to explain the code or to prevent certain parts of the code from being executed. The Java compiler completely ignores comments.

*   **Types of Comments:**
    *   **Single-line comments:** Start with `//` and extend to the end of the line.
        ```java
        // This is a single-line comment.
        ```
    *   **Multi-line comments:** Start with `/*` and end with `*/`. They can span multiple lines.
        ```java
        /*
         This is a
         multi-line comment.
        */
        ```
    *   **Documentation comments (Javadoc):** Start with `/**` and end with `*/`. These are used to generate API documentation. They are specifically designed for generating documentation using the `javadoc` tool.
        ```java
        /**
         * This method calculates the sum of two integers.
         * @param a The first integer.
         * @param b The second integer.
         * @return The sum of a and b.
         */
        ```

*   **Purpose:**
    *   Explain the functionality of code.
    *   Temporarily disable code blocks.
    *   Generate API documentation.

*   **Referencing:** Herbert Schildt's "Java: The Complete Reference" extensively covers the importance of comments for code maintainability and documentation (Chapter 2, 8/e).

### 2.3 Identifiers

Identifiers are names given to various programming entities such as classes, methods, variables, and packages.

*   **Rules for Identifiers:**
    *   Must start with a letter (a-z, A-Z), an underscore (`_`), or a dollar sign (`$`).
    *   Subsequent characters can be letters, digits (0-9), underscores, or dollar signs.
    *   Identifiers are case-sensitive (e.g., `myVariable` is different from `myvariable`).
    *   Cannot be a Java keyword.
    *   Should not contain spaces.

*   **Valid Identifiers:** `myVariable`, `_count`, `$amount`, `ClassName`, `calculateSum`.
*   **Invalid Identifiers:** `1stVariable` (starts with a digit), `my Variable` (contains a space), `class` (keyword).

*   **Naming Conventions (Good Practice):**
    *   Class names: Start with an uppercase letter (e.g., `Car`, `Account`).
    *   Method names: Start with a lowercase letter, and subsequent words start with an uppercase letter (camelCase) (e.g., `calculateArea`, `displayDetails`).
    *   Variable names: Similar to method names, camelCase (e.g., `totalAmount`, `userName`).
    *   Constants: All uppercase letters, with words separated by underscores (e.g., `MAX_SIZE`, `PI`).

*   **Referencing:** Herbert Schildt (8/e, Chapter 2) emphasizes proper identifier naming for code clarity. Balagurusamy's "Programming JAVA a Primer" (5/e, Chapter 2) also covers this fundamental aspect.

### 2.4 Keywords (Reserved Words)

Keywords are predefined words that have a special meaning to the Java compiler. They cannot be used as identifiers.

*   **Examples:** `class`, `public`, `static`, `void`, `int`, `float`, `if`, `else`, `while`, `for`, `return`, `new`, `this`, `super`, `package`, `import`, `try`, `catch`, `finally`, `throw`, `throws`.

*   **Important Note:** Keywords are always in lowercase.

*   **Referencing:** Deitel & Deitel's "Java How to Program" (11th Edition, Chapter 2) provides a comprehensive list and explanation of Java keywords.

### 2.5 Literals

Literals are fixed values that are written directly in the source code. They represent constants.

*   **Types of Literals:**
    *   **Integer Literals:** Represent whole numbers. They can be decimal, octal (prefixed with `0`), or hexadecimal (prefixed with `0x` or `0X`).
        *   Decimal: `10`, `123`, `-50`
        *   Octal: `010` (equivalent to 8 in decimal)
        *   Hexadecimal: `0xAF` (equivalent to 175 in decimal)
        *   **Note:** Java allows you to append `l` or `L` to denote a `long` literal (e.g., `10000000000L`).

    *   **Floating-Point Literals:** Represent numbers with a fractional part. They can be written in decimal notation or scientific notation.
        *   Decimal: `3.14`, `1.23E2` (which is 1.23 \* 10^2 = 123.0), `-0.5`
        *   **Note:** By default, floating-point literals are treated as `double`. To specify a `float` literal, append `f` or `F` (e.g., `3.14f`).

    *   **Character Literals:** Represent a single character enclosed in single quotes.
        *   Example: `'a'`, `'Z'`, `'5'`, `'$'`, `'\n'` (newline character), `'\t'` (tab character), `'\u0041'` (Unicode for 'A').

    *   **String Literals:** Represent a sequence of characters enclosed in double quotes.
        *   Example: `"Hello, World!"`, `"Java programming"`, `""` (empty string).

    *   **Boolean Literals:** Represent truth values.
        *   `true`
        *   `false`

    *   **Null Literal:** Represents the absence of a value for object references.
        *   `null`

*   **Referencing:** Herbert Schildt (8/e, Chapter 2) and Y. Daniel Liang's "Introduction to Java Programming" (7/e, Chapter 2) provide detailed explanations of Java literals.

### 2.6 Operators

Operators are symbols that perform operations on operands (variables or values).

*   **Types of Operators (Brief Overview):**
    *   **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%` (modulus)
    *   **Relational Operators:** `==`, `!=`, `>`, `<`, `>=`, `<=`
    *   **Logical Operators:** `&&` (AND), `||` (OR), `!` (NOT)
    *   **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`
    *   **Increment/Decrement Operators:** `++`, `--`
    *   **Bitwise Operators:** `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
    *   **Conditional (Ternary) Operator:** `? :`
    *   **Instanceof Operator:** Checks if an object is an instance of a class or interface.

*   **Purpose:** To perform calculations, comparisons, and logical operations.

*   **Referencing:** CO2 specifically mentions utilizing operators. Deitel & Deitel (11th Edition, Chapter 3) offer extensive coverage of Java operators. Balagurusamy (5/e, Chapter 3) also details operators.

### 2.7 Separators

Separators are symbols used to organize and structure Java code.

*   **Common Separators:**
    *   `;` (Semicolon): Terminates statements.
    *   `{ }` (Braces): Define code blocks (e.g., class bodies, method bodies, control structures).
    *   `( )` (Parentheses): Used for method calls, method parameters, and grouping expressions.
    *   `[ ]` (Brackets): Used for array declarations and accessing array elements.
    *   `,` (Comma): Separates multiple declarations on a single line or elements in lists.
    *   `.` (Dot): Used to access members (fields and methods) of objects or classes.

*   **Purpose:** To structure and delimit different parts of the code.

*   **Referencing:** Schildt (8/e, Chapter 2) and Liang (7/e, Chapter 2) cover the role of separators.

---

## 3. Important Points to Remember

*   **Case Sensitivity:** Java is case-sensitive. `MyClass` is different from `myclass`.
*   **Keywords:** Never use keywords as identifiers.
*   **Comments:** Use comments to make your code understandable. Javadoc comments are vital for API documentation.
*   **Whitespace:** Use whitespace effectively to improve code readability.
*   **Literals:** Understand the different types of literals and their usage. Pay attention to `f`/`F` for floats and `l`/`L` for longs.
*   **Identifiers:** Follow naming conventions for better code maintainability.

---

## 4. Practice Questions and Exercises

**Instructions:** Answer the following questions.

**Question 1:**
Identify the valid and invalid identifiers from the following list:
a) `_userName`
b) `1st_place`
c) `myClass`
d) `public`
e) `calculate-sum`
f) `myVariable_2`
g) `$value`

**Question 2:**
Write a single-line comment explaining the purpose of a Java `main` method.

**Question 3:**
What is the difference between a single-line comment and a multi-line comment? Provide an example of each.

**Question 4:**
Which type of literal would you use for each of the following values?
a) The number of days in a week (7)
b) The value of Pi (approximately 3.14159)
c) A single character 'X'
d) The text "Java"
e) A truth value indicating "false"

**Question 5:**
Explain the purpose of the `.` (dot) separator in Java with an example.

---

## 5. Answers to Practice Questions

**Answer 1:**
Valid identifiers:
a) `_userName`
c) `myClass`
f) `myVariable_2`
g) `$value`

Invalid identifiers:
b) `1st_place` (starts with a digit)
d) `public` (is a keyword)
e) `calculate-sum` (contains a hyphen, which is not allowed)

**Answer 2:**
```java
// The main method is the entry point for program execution.
```

**Answer 3:**
*   **Single-line comment:** Starts with `//` and extends to the end of the line.
    ```java
    // This line explains the following statement.
    int count = 0;
    ```
*   **Multi-line comment:** Starts with `/*` and ends with `*/`, can span multiple lines.
    ```java
    /*
     This is a block of code
     that performs a calculation.
     The result is stored in 'total'.
    */
    double total = price * quantity;
    ```

**Answer 4:**
a) Integer literal (e.g., `7` or `7L` for long)
b) Floating-point literal (e.g., `3.14159` or `3.14159f` for float)
c) Character literal (e.g., `'X'`)
d) String literal (e.g., `"Java"`)
e) Boolean literal (e.g., `false`)

**Answer 5:**
The `.` (dot) separator is used to access the members (fields or methods) of an object or a class.

*   **Example:**
    ```java
    String message = "Hello";
    int length = message.length(); // Accessing the 'length()' method of the String object 'message'.
    ```
    In this example, `message.length()` uses the dot operator to call the `length()` method on the `message` object.

---

This concludes the introductory notes on Lexical Issues in Java. Understanding these fundamental building blocks is crucial for your journey into Object-Oriented Programming. In subsequent modules, you will build upon this knowledge to explore more complex OOP concepts and Java programming constructs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
