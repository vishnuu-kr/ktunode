---
title: "Control Statements  - Selection Statements"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe687"
status: "completed"
scrapedAt: "2026-05-23T17:51:30.602Z"
---
# Object Oriented Programming: Module 2: Core Java Fundamentals

## Topic: Control Statements - Selection Statements

### Introduction

Control statements are fundamental to programming as they dictate the flow of execution within a program. Selection statements, also known as conditional statements, allow programs to make decisions based on whether certain conditions are true or false. This enables programs to exhibit dynamic behavior and respond to different scenarios. This module focuses on the core Java selection statements.

**Reference:** This section aligns with **CO2**, which emphasizes the utilization of control statements in Java to develop programs.

### Key Concepts and Definitions

*   **Control Flow:** The order in which the individual statements, instructions, or function calls of a program are executed or evaluated.
*   **Selection Statement:** A control flow statement that allows a program to choose between different paths of execution based on a boolean condition.
*   **Boolean Expression:** An expression that evaluates to either `true` or `false`.
*   **Conditional Execution:** The execution of a block of code only if a specific condition is met.

### Types of Selection Statements in Java

Java provides three primary selection statements:

1.  **`if` Statement**
2.  **`if-else` Statement**
3.  **`switch` Statement**

#### 1. The `if` Statement

The `if` statement is the most basic selection statement. It executes a block of code only if a specified boolean expression evaluates to `true`.

**Syntax:**

```java
if (condition) {
    // code to be executed if condition is true
}
```

*   `condition`: A boolean expression.
*   If the `condition` evaluates to `true`, the code block within the curly braces `{}` is executed.
*   If the `condition` evaluates to `false`, the code block is skipped.
*   The curly braces `{}` are optional if the `if` statement encloses only a single line of code. However, it's a best practice to always use them to avoid ambiguity and potential errors.

**Example:**

```java
public class IfExample {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18) {
            System.out.println("You are an adult.");
        }

        int score = 85;
        if (score > 90)
            System.out.println("Excellent!"); // Single statement, braces optional (but not recommended)
    }
}
```

**Important Point:** The `if` statement allows for conditional execution of a code block.

**Reference:**
*   **Schildt, Chapter 5: Control Statements:** Introduces the fundamental `if` statement and its syntax.
*   **Deitel & Deitel, Chapter 4: Introduction to Classes, Objects, and Programs:** Discusses decision making with the `if` statement in the context of early object-oriented programming.

#### 2. The `if-else` Statement

The `if-else` statement provides an alternative block of code to execute when the `if` condition is `false`.

**Syntax:**

```java
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
```

*   If the `condition` is `true`, the code in the `if` block is executed.
*   If the `condition` is `false`, the code in the `else` block is executed.

**Example:**

```java
public class IfElseExample {
    public static void main(String[] args) {
        int temperature = 25;

        if (temperature > 30) {
            System.out.println("It's a hot day!");
        } else {
            System.out.println("It's a pleasant day.");
        }
    }
}
```

**The `if-else if-else` Chain:**
This structure allows for checking multiple conditions in sequence.

**Syntax:**

```java
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition1 is false and condition2 is true
} else if (condition3) {
    // code if condition1 and condition2 are false, and condition3 is true
} else {
    // code if all preceding conditions are false
}
```

The conditions are evaluated from top to bottom. As soon as a condition is found to be `true`, its corresponding block of code is executed, and the rest of the `else if` chain is skipped. If none of the conditions are `true`, the final `else` block (if present) is executed.

**Example:**

```java
public class IfElseIfExample {
    public static void main(String[] args) {
        int percentage = 75;

        if (percentage >= 90) {
            System.out.println("Grade: A");
        } else if (percentage >= 80) {
            System.out.println("Grade: B");
        } else if (percentage >= 70) {
            System.out.println("Grade: C");
        } else if (percentage >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
    }
}
```

**The Ternary Operator (Conditional Operator):**
A shorthand for the `if-else` statement, particularly useful for simple assignments.

**Syntax:**

```java
variable = (condition) ? expression1 : expression2;
```

*   If `condition` is `true`, `expression1` is evaluated, and its result is assigned to `variable`.
*   If `condition` is `false`, `expression2` is evaluated, and its result is assigned to `variable`.

**Example:**

```java
public class TernaryOperatorExample {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;

        int max = (num1 > num2) ? num1 : num2; // Assigns 20 to max
        System.out.println("Maximum number is: " + max);

        String status = (num1 == num2) ? "Equal" : "Not Equal";
        System.out.println("Numbers are: " + status);
    }
}
```

**Important Points:**
*   The `if-else` statement provides an alternative execution path.
*   The `if-else if-else` chain allows for multiple conditional checks.
*   The ternary operator offers a concise way to write simple `if-else` logic.

**Reference:**
*   **Schildt, Chapter 5: Control Statements:** Covers `if-else`, `if-else if-else`, and the ternary operator.
*   **Deitel & Deitel, Chapter 4: Introduction to Classes, Objects, and Programs:** Discusses the `if-else` and `if-else if-else` structures with illustrative examples.
*   **Liang, Chapter 2: Programming Structures:** Explains control flow, including selection statements like `if`, `if-else`, and `if-else if-else`.

#### 3. The `switch` Statement

The `switch` statement is a multi-way selection statement that allows a variable (or expression) to be tested for equality against a list of values. It provides an alternative to long `if-else if-else` chains when checking the value of a single variable against multiple discrete possibilities.

**Syntax:**

```java
switch (expression) {
    case constant1:
        // code to be executed if expression matches constant1
        break; // Optional, but usually necessary

    case constant2:
        // code to be executed if expression matches constant2
        break;

    // ... more cases

    default: // Optional
        // code to be executed if no case matches
}
```

*   `expression`: An expression that evaluates to a primitive type (byte, short, char, int) or a String.
*   `case constant`: Each `case` label specifies a unique constant value. The `expression` is compared against each `constant`.
*   `break`: The `break` statement is crucial. When encountered, it terminates the `switch` statement. Without `break`, execution "falls through" to the next `case` statement, which is usually not desired.
*   `default`: The `default` label is optional. If provided, its code block is executed if none of the `case` values match the `expression`. It can be placed anywhere within the `switch` statement, but it's common practice to put it at the end.

**Example:**

```java
public class SwitchExample {
    public static void main(String[] args) {
        char grade = 'B';

        switch (grade) {
            case 'A':
                System.out.println("Excellent!");
                break;
            case 'B':
                System.out.println("Good!"); // This case will be executed
                break;
            case 'C':
                System.out.println("Fair.");
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
    }
}
```

**Switching on Strings (Java 7+):**
In Java 7 and later, you can also use `switch` statements with `String` objects.

**Example:**

```java
public class SwitchStringExample {
    public static void main(String[] args) {
        String dayOfWeek = "Monday";

        switch (dayOfWeek) {
            case "Monday":
                System.out.println("Start of the week.");
                break;
            case "Friday":
                System.out.println("End of the work week.");
                break;
            default:
                System.out.println("Mid-week.");
        }
    }
}
```

**Important Points:**
*   The `switch` statement is efficient for testing a single variable against multiple constant values.
*   The `break` statement is essential to prevent fall-through.
*   The `default` case handles situations where no `case` matches.
*   `switch` can be used with primitive integer types, `char`, and `String` (since Java 7).

**Reference:**
*   **Schildt, Chapter 5: Control Statements:** Provides a detailed explanation of the `switch` statement, including its syntax and the importance of `break`.
*   **Deitel & Deitel, Chapter 4: Introduction to Classes, Objects, and Programs:** Explains the `switch` statement as an alternative to complex `if-else if` chains.
*   **Balagurusamy, Chapter 4: Control Structures:** Covers selection structures, including `switch`, with clear examples.
*   **Liang, Chapter 2: Programming Structures:** Discusses the `switch` statement as a multi-way selection mechanism.

### Linking to Course Outcomes

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**
    *   This entire module directly addresses CO2 by teaching the fundamental control statements (`if`, `if-else`, `switch`) which are essential for developing programs that make decisions and control their execution flow. Understanding these statements allows students to create more sophisticated and responsive Java applications.

### Important Points to Remember

*   **Boolean Expressions:** All selection statements rely on boolean expressions that evaluate to `true` or `false`.
*   **Curly Braces `{}`:** Always use curly braces for `if`, `else if`, and `else` blocks, even for single statements, to prevent common errors.
*   **`break` in `switch`:** Never forget the `break` statement in `switch` cases unless intentional fall-through is required (which is rare).
*   **`switch` Limitations:** The `switch` statement can only compare against constants, not ranges or variables. The expression must be of a compatible type (byte, short, char, int, String).
*   **Readability:** Choose the control statement that best suits the logic and makes the code most readable. For multiple conditions on the same variable, `switch` is often clearer than a long `if-else if` chain.

### Practice Questions and Exercises

**Question 1:**
Write a Java program that takes an integer input from the user and checks if it is positive, negative, or zero using an `if-else if-else` statement.

**Answer:**

```java
import java.util.Scanner;

public class NumberChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int number = scanner.nextInt();

        if (number > 0) {
            System.out.println("The number is positive.");
        } else if (number < 0) {
            System.out.println("The number is negative.");
        } else {
            System.out.println("The number is zero.");
        }
        scanner.close();
    }
}
```

**Question 2:**
Using the ternary operator, write an expression to determine if a given number `x` is even or odd, and store the result ("Even" or "Odd") in a String variable called `parity`.

**Answer:**

```java
int x = 15;
String parity = (x % 2 == 0) ? "Even" : "Odd";
System.out.println("The number is: " + parity); // Output: The number is: Odd
```

**Question 3:**
Write a Java program that uses a `switch` statement to display the name of a month given its number (1 for January, 2 for February, etc.). If the number is not between 1 and 12, display "Invalid month number."

**Answer:**

```java
public class MonthDisplay {
    public static void main(String[] args) {
        int monthNumber = 7; // Example: July

        switch (monthNumber) {
            case 1:
                System.out.println("January");
                break;
            case 2:
                System.out.println("February");
                break;
            case 3:
                System.out.println("March");
                break;
            case 4:
                System.out.println("April");
                break;
            case 5:
                System.out.println("May");
                break;
            case 6:
                System.out.println("June");
                break;
            case 7:
                System.out.println("July");
                break;
            case 8:
                System.out.println("August");
                break;
            case 9:
                System.out.println("September");
                break;
            case 10:
                System.out.println("October");
                break;
            case 11:
                System.out.println("November");
                break;
            case 12:
                System.out.println("December");
                break;
            default:
                System.out.println("Invalid month number.");
        }
    }
}
```

**Question 4:**
Consider the following code snippet. What will be the output?

```java
int a = 10, b = 20;
if (a > 5) {
    if (b > 25) {
        System.out.print("1 ");
    } else {
        System.out.print("2 ");
    }
} else {
    System.out.print("3 ");
}
System.out.print("4");
```

**Answer:**
The output will be `2 4`.
*   The outer `if (a > 5)` is true (10 > 5).
*   The inner `if (b > 25)` is false (20 is not > 25).
*   Therefore, the `else` block of the inner `if` is executed, printing "2 ".
*   The outer `if-else` structure finishes.
*   The final `System.out.print("4");` is executed, printing "4".

**Question 5:**
Explain the difference between an `if-else` statement and a `switch` statement. When would you prefer to use one over the other?

**Answer:**
*   **`if-else` Statement:**
    *   Evaluates boolean expressions that can be complex (e.g., involving logical operators like `&&`, `||`, `!`, and relational operators like `<`, `>`, `==`, `!=`).
    *   Can check conditions involving ranges of values or multiple unrelated conditions.
    *   Each condition is checked independently (though chained `else if` creates a sequence).

*   **`switch` Statement:**
    *   Evaluates a single expression (variable) against a set of constant values.
    *   Primarily used for equality checks against discrete, known values.
    *   More efficient for a large number of discrete choices compared to a long `if-else if` chain.
    *   Requires `break` statements to prevent fall-through, which can be a source of errors if not handled properly.

**When to Prefer:**
*   Use `if-else` (or `if-else if-else`) when:
    *   You need to check ranges of values (e.g., `age >= 18`).
    *   You need to combine multiple conditions using logical operators (e.g., `if (score > 70 && attendance > 80)`).
    *   The conditions are not based on equality to a set of constants.
*   Use `switch` when:
    *   You are checking a single variable against multiple, specific, constant values (e.g., checking a character for a specific letter, or an integer for a specific number).
    *   The code involves selecting one of many possible execution paths based on the value of a variable.
    *   Readability and potential performance gains for many discrete choices are desired.

---
This concludes the notes on Selection Statements in Java. Mastery of these control structures is crucial for writing effective and dynamic Java programs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
