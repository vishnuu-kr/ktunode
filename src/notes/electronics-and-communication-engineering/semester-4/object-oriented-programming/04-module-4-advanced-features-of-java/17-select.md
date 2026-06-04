---
title: "select."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: Advanced features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6b8"
status: "completed"
scrapedAt: "2026-05-23T17:52:04.341Z"
---
# Object Oriented Programming: Module 4 - Advanced Features of Java

## Topic: Select

**Introduction:**
In Java, the term "select" isn't a direct keyword or a standalone feature as it might be in database querying languages. Instead, the concept of *selection* in Java programming refers to the ability to make choices and execute different blocks of code based on certain conditions. This is primarily achieved through **conditional statements** and **control flow structures**. This module will delve into these fundamental aspects of making decisions within your Java programs, which are crucial for building dynamic and responsive applications.

---

### 1. Learning Outcomes

This module aims to equip you with the understanding and practical skills to:

*   **Understand and implement conditional execution:** Learn how to control the flow of program execution based on evaluated conditions.
*   **Utilize selection statements effectively:** Master the use of `if`, `else`, `else if`, and `switch` statements for decision-making.
*   **Explore the ternary operator:** Discover a concise way to express simple conditional assignments.
*   **Apply logical operators:** Combine multiple conditions to create more complex decision-making logic.
*   **Relate selection to problem-solving:** Understand how selection mechanisms are used to solve real-world programming problems.

---

### 2. Key Concepts and Definitions

#### 2.1 Conditional Statements

Conditional statements are programming constructs that allow you to execute a block of code only if a specified condition is true. They are the building blocks of decision-making in any programming language, including Java.

#### 2.2 Control Flow

Control flow refers to the order in which statements in a program are executed. Selection statements alter the default sequential flow by allowing the program to "choose" which path to take based on conditions.

---

### 3. Selection Statements in Java

Java provides several types of selection statements:

#### 3.1 The `if` Statement

The `if` statement is the most basic selection statement. It executes a block of code if a specified boolean expression evaluates to `true`.

**Syntax:**

```java
if (condition) {
    // code to be executed if condition is true
}
```

**Explanation:**

*   `condition`: A boolean expression that evaluates to either `true` or `false`.
*   If the `condition` is `true`, the code block inside the curly braces `{}` is executed.
*   If the `condition` is `false`, the code block is skipped.

**Example (from Herbert Schildt, Java: The Complete Reference, 8/e, Chapter 4):**

```java
int age = 18;

if (age >= 18) {
    System.out.println("You are eligible to vote.");
}
```

**Note:** If the code block consists of only a single statement, the curly braces are optional. However, it's good practice to always use them to avoid potential errors.

#### 3.2 The `if-else` Statement

The `if-else` statement provides an alternative block of code to execute when the `if` condition is `false`.

**Syntax:**

```java
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
```

**Example:**

```java
int score = 75;

if (score >= 60) {
    System.out.println("Congratulations! You passed.");
} else {
    System.out.println("Sorry, you did not pass. Please try again.");
}
```

#### 3.3 The `if-else if-else` Statement

This structure allows for multiple conditions to be checked in sequence. The first condition that evaluates to `true` will have its corresponding code block executed, and the rest of the chain will be skipped.

**Syntax:**

```java
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else if (condition3) {
    // code if condition3 is true
} else {
    // code if all conditions are false
}
```

**Example (from Paul Deitel, Harvey Deitel, Java How to Program, 11th Edition, Chapter 4):**

```java
int grade = 85;
char letterGrade;

if (grade >= 90) {
    letterGrade = 'A';
} else if (grade >= 80) {
    letterGrade = 'B';
} else if (grade >= 70) {
    letterGrade = 'C';
} else if (grade >= 60) {
    letterGrade = 'D';
} else {
    letterGrade = 'F';
}

System.out.println("Your letter grade is: " + letterGrade); // Output: Your letter grade is: B
```

**Important Point:** The `else` block at the end is optional. If none of the `if` or `else if` conditions are met, and there's no `else` block, the program simply continues to the next statement after the `if-else if` chain.

#### 3.4 The `switch` Statement

The `switch` statement is used for **multi-way branching**. It allows you to select one of many code blocks to be executed based on the value of an expression. It is often more efficient and readable than a long `if-else if-else` chain when dealing with multiple distinct values.

**Syntax:**

```java
switch (expression) {
    case value1:
        // code for value1
        break; // exits the switch statement
    case value2:
        // code for value2
        break;
    // ... more cases
    default: // optional
        // code if no case matches
}
```

**Explanation:**

*   `expression`: An expression that evaluates to a primitive type (`byte`, `short`, `char`, `int`) or a String.
*   `case value`: Each `case` label specifies a possible value for the `expression`.
*   `break`: This keyword is crucial. It terminates the `switch` statement. If `break` is omitted, the execution "falls through" to the next `case` block, which can lead to unintended behavior.
*   `default`: This is an optional block that executes if none of the `case` values match the `expression`.

**Example (from Y. Daniel Liang, Introduction to Java Programming, 7/e, Chapter 5):**

```java
char grade = 'B';

switch (grade) {
    case 'A':
        System.out.println("Excellent!");
        break;
    case 'B':
        System.out.println("Good!");
        break;
    case 'C':
        System.out.println("Average.");
        break;
    case 'D':
        System.out.println("Needs Improvement.");
        break;
    case 'F':
        System.out.println("Failed.");
        break;
    default:
        System.out.println("Invalid grade.");
}
// Output: Good!
```

**Important Points for `switch`:**

*   The `expression` in a `switch` statement can only be of types: `byte`, `short`, `char`, `int`, `String`, `enum`.
*   Case labels must be unique constant expressions.
*   The `break` statement is essential for preventing fall-through.
*   The `default` case is optional but recommended for handling unexpected values.

#### 3.5 The Ternary Operator (Conditional Operator)

The ternary operator `? :` provides a shorthand way to write simple `if-else` statements, especially for assigning values to a variable.

**Syntax:**

```java
variable = (condition) ? value_if_true : value_if_false;
```

**Explanation:**

*   `condition`: A boolean expression.
*   If `condition` is `true`, the `value_if_true` is assigned to `variable`.
*   If `condition` is `false`, the `value_if_false` is assigned to `variable`.

**Example (from Java in A Nutshell by D. Flanagan, 5/e, Chapter 5):**

```java
int age = 20;
String status;

status = (age >= 18) ? "Adult" : "Minor";

System.out.println("The person is an " + status); // Output: The person is an Adult
```

**Important Point:** While concise, the ternary operator should be used for simple conditional assignments. For more complex logic, `if-else` statements are more readable.

---

### 4. Logical Operators

Logical operators are used to combine or modify boolean expressions, allowing for more complex decision-making.

| Operator | Description                                    | Example                       |
| :------- | :--------------------------------------------- | :---------------------------- |
| `&&`     | Logical AND (true if both operands are true)   | `(age > 18) && (hasLicense)`  |
| `||`     | Logical OR (true if at least one operand is true) | `(isWeekend || isHoliday)`    |
| `!`      | Logical NOT (reverses the boolean value)       | `!isLoggedIn`                 |

**Short-circuiting:**

Java's `&&` and `||` operators are **short-circuiting**. This means:

*   For `&&`: If the left operand is `false`, the right operand is not evaluated because the entire expression will be `false` anyway.
*   For `||`: If the left operand is `true`, the right operand is not evaluated because the entire expression will be `true` anyway.

This short-circuiting behavior is important for preventing errors, such as division by zero, when the second operand's evaluation depends on the first.

**Example (demonstrating short-circuiting):**

```java
int numerator = 10;
int denominator = 0;

// Without checking denominator, this would cause an ArithmeticException
// if (numerator / denominator > 5) { ... }

// Using short-circuiting AND to prevent division by zero:
if (denominator != 0 && (numerator / denominator) > 5) {
    System.out.println("Result is greater than 5.");
} else {
    System.out.println("Cannot divide by zero or result is not greater than 5.");
}
// Output: Cannot divide by zero or result is not greater than 5.
```

---

### 5. Relation to Course Outcomes

This module directly supports the following Course Outcomes:

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**
    *   This module focuses on control statements (`if`, `else`, `switch`, ternary operator) and operators (`&&`, `||`, `!`) which are fundamental for developing any Java program. (Knowledge Level: K3)

---

### 6. Examples and Practice Questions

**Question 1:** Write a Java program that checks if a given year is a leap year. A year is a leap year if it is divisible by 4, but not by 100 unless it is also divisible by 400.

**Answer 1:**

```java
public class LeapYearChecker {
    public static void main(String[] args) {
        int year = 2024;

        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println(year + " is a leap year.");
        } else {
            System.out.println(year + " is not a leap year.");
        }
    }
}
```

**Question 2:** Using a `switch` statement, write a program that takes a character representing a day of the week (e.g., 'M', 'T', 'W', etc.) and prints the full name of the day. Include a `default` case for invalid input.

**Answer 2:**

```java
public class DayOfWeek {
    public static void main(String[] args) {
        char dayInitial = 'W';

        switch (dayInitial) {
            case 'M':
                System.out.println("Monday");
                break;
            case 'T':
                System.out.println("Tuesday or Thursday"); // Example of fall-through if no break
                // To be more precise, you'd need separate cases or a slightly different logic.
                // Let's refine this to be more specific for clarity.
                break;
            case 'W':
                System.out.println("Wednesday");
                break;
            case 'R': // For Thursday
                System.out.println("Thursday");
                break;
            case 'F':
                System.out.println("Friday");
                break;
            case 'S': // For Saturday or Sunday
                System.out.println("Saturday or Sunday");
                break;
            default:
                System.out.println("Invalid day initial.");
        }

        // A better approach for 'T' and 'S' would be:
        char dayInitial2 = 'T';
        switch (dayInitial2) {
            case 'M': System.out.println("Monday"); break;
            case 'T': System.out.println("Tuesday"); break; // Assuming 'T' means Tuesday
            case 'W': System.out.println("Wednesday"); break;
            case 'R': System.out.println("Thursday"); break;
            case 'F': System.out.println("Friday"); break;
            case 'A': System.out.println("Saturday"); break; // Using 'A' for Saturday
            case 'U': System.out.println("Sunday"); break; // Using 'U' for Sunday
            default: System.out.println("Invalid day initial.");
        }
    }
}
```
*(Note: The original question implied a single character for all days, which isn't ideal for Monday/Tuesday/Thursday. The refined answer shows a more practical approach.)*

**Question 3:** Use the ternary operator to find the larger of two integers.

**Answer 3:**

```java
public class FindLarger {
    public static void main(String[] args) {
        int num1 = 25;
        int num2 = 40;

        int larger = (num1 > num2) ? num1 : num2;

        System.out.println("The larger number is: " + larger); // Output: The larger number is: 40
    }
}
```

---

### 7. Important Points to Remember

*   **Conditional execution** is fundamental for creating dynamic programs.
*   The `if-else if-else` structure handles sequential conditional checks.
*   The `switch` statement is efficient for multi-way branching based on a single expression's value.
*   **Always use `break`** in `switch` statements to prevent fall-through, unless fall-through is intentionally desired.
*   The **ternary operator (`? :`)** is a concise way to perform simple conditional assignments.
*   **Logical operators (`&&`, `||`, `!`)** are used to combine and manipulate boolean expressions.
*   Be mindful of the **short-circuiting behavior** of `&&` and `||` for efficient and safe code execution.
*   Proper indentation and code formatting significantly improve the readability of selection statements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Textbook References and Content Incorporation

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011.):** Chapter 4 often covers control flow statements, including `if`, `else`, `else if`, and `switch`. The book provides detailed explanations of their syntax, semantics, and practical applications.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.):** Chapters 4 typically delve into control structures. The Deitels are known for their clear explanations and numerous examples, often illustrating how these statements are used to build complete programs, aligning with CO2.
*   **Introduction to Java Programming by Y. Daniel Liang (Pearson, 7/e, 2013.):** Similar to the other primary texts, Liang's book dedicates sections to control statements, providing a structured approach to understanding conditional logic.

This study material synthesizes the core concepts of selection statements as presented in these foundational Java textbooks, ensuring a comprehensive understanding of how to implement decision-making logic in Java programs. The examples and practice questions are designed to reinforce these concepts, directly contributing to achieving the K3 knowledge level for CO2.