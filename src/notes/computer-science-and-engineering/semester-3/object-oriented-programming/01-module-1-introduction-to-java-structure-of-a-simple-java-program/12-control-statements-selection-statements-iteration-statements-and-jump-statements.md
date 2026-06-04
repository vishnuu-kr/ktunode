---
title: "Control Statements - Selection Statements, Iteration Statements and Jump Statements"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac93"
status: "completed"
scrapedAt: "2026-05-20T16:26:59.948Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 1: Introduction to Java - Control Statements

## Topic: Control Statements - Selection, Iteration, and Jump Statements

### Learning Outcomes:

*   Understand the purpose and types of control statements in Java.
*   Be able to use `if`, `if-else`, `if-else-if`, and `switch` statements for conditional execution.
*   Be able to use `for`, `while`, and `do-while` loops for repetitive execution.
*   Understand the use of `break`, `continue`, and `return` statements for altering control flow.
*   Apply control statements to solve simple programming problems.

---

### 1. Introduction to Control Statements

*   **Definition:** Control statements are constructs in a programming language that allow you to control the flow of execution of your code.  They determine which statements are executed and in what order.  They are essential for creating programs that can make decisions and repeat actions.

*   **Purpose:** To provide structure and logic to programs, enabling them to handle different scenarios and perform repetitive tasks efficiently.

*   **Types of Control Statements in Java:**
    *   **Selection Statements (Conditional Statements):** Used to execute different blocks of code based on certain conditions. Examples: `if`, `if-else`, `if-else-if`, `switch`.
    *   **Iteration Statements (Looping Statements):** Used to repeat a block of code multiple times. Examples: `for`, `while`, `do-while`.
    *   **Jump Statements:** Used to transfer control to another part of the program unconditionally. Examples: `break`, `continue`, `return`.

---

### 2. Selection Statements (Conditional Statements)

#### 2.1. `if` Statement

*   **Syntax:**

    ```java
    if (condition) {
        // Code to be executed if the condition is true
    }
    ```

*   **Explanation:**
    *   The `condition` is a boolean expression (evaluates to `true` or `false`).
    *   If the `condition` is `true`, the code inside the curly braces `{}` (the `if` block) is executed.
    *   If the `condition` is `false`, the `if` block is skipped.

*   **Example:**

    ```java
    int age = 20;
    if (age >= 18) {
        System.out.println("You are eligible to vote.");
    }
    ```

    **Output:**  You are eligible to vote.

#### 2.2. `if-else` Statement

*   **Syntax:**

    ```java
    if (condition) {
        // Code to be executed if the condition is true
    } else {
        // Code to be executed if the condition is false
    }
    ```

*   **Explanation:**
    *   If the `condition` is `true`, the code inside the `if` block is executed.
    *   If the `condition` is `false`, the code inside the `else` block is executed.

*   **Example:**

    ```java
    int age = 16;
    if (age >= 18) {
        System.out.println("You are eligible to vote.");
    } else {
        System.out.println("You are not eligible to vote.");
    }
    ```

    **Output:** You are not eligible to vote.

#### 2.3. `if-else-if` Ladder

*   **Syntax:**

    ```java
    if (condition1) {
        // Code to be executed if condition1 is true
    } else if (condition2) {
        // Code to be executed if condition2 is true
    } else if (condition3) {
        // Code to be executed if condition3 is true
    } else {
        // Code to be executed if none of the conditions are true
    }
    ```

*   **Explanation:**
    *   The `if-else-if` ladder allows you to check multiple conditions in sequence.
    *   Conditions are evaluated from top to bottom.
    *   If a condition is `true`, the corresponding block of code is executed, and the rest of the ladder is skipped.
    *   If none of the conditions are `true`, the code inside the final `else` block is executed (if present).

*   **Example:**

    ```java
    int marks = 75;
    if (marks >= 80) {
        System.out.println("Grade A");
    } else if (marks >= 60) {
        System.out.println("Grade B");
    } else if (marks >= 40) {
        System.out.println("Grade C");
    } else {
        System.out.println("Fail");
    }
    ```

    **Output:** Grade B

#### 2.4. `switch` Statement

*   **Syntax:**

    ```java
    switch (expression) {
        case value1:
            // Code to be executed if expression equals value1
            break;
        case value2:
            // Code to be executed if expression equals value2
            break;
        // ... more cases
        default:
            // Code to be executed if expression doesn't match any value
    }
    ```

*   **Explanation:**
    *   The `expression` is evaluated once.
    *   The value of the `expression` is compared to the values of each `case`.
    *   If a match is found, the code associated with that `case` is executed.
    *   The `break` statement is crucial; it exits the `switch` statement. If `break` is omitted, execution continues to the next `case` (fall-through).
    *   The `default` case is executed if no `case` matches the `expression`.

*   **Rules:**
    *   The `expression` must be of type `byte`, `short`, `int`, `char`, `String` (since Java 7) or an enum type.
    *   The `value`s in the `case` labels must be constant expressions.
    *   Duplicate `case` values are not allowed.
    *   The `default` case is optional.

*   **Example:**

    ```java
    int day = 3;
    String dayString;
    switch (day) {
        case 1:
            dayString = "Monday";
            break;
        case 2:
            dayString = "Tuesday";
            break;
        case 3:
            dayString = "Wednesday";
            break;
        case 4:
            dayString = "Thursday";
            break;
        case 5:
            dayString = "Friday";
            break;
        case 6:
            dayString = "Saturday";
            break;
        case 7:
            dayString = "Sunday";
            break;
        default:
            dayString = "Invalid day";
    }
    System.out.println(dayString);
    ```

    **Output:** Wednesday

---

### 3. Iteration Statements (Looping Statements)

#### 3.1. `for` Loop

*   **Syntax:**

    ```java
    for (initialization; condition; increment/decrement) {
        // Code to be executed repeatedly
    }
    ```

*   **Explanation:**
    *   **Initialization:**  Executed only once, at the beginning of the loop.  Typically used to initialize a loop counter variable.
    *   **Condition:**  Evaluated before each iteration of the loop.  If the condition is `true`, the loop body is executed. If the condition is `false`, the loop terminates.
    *   **Increment/Decrement:**  Executed after each iteration of the loop.  Typically used to update the loop counter variable.

*   **Example:**

    ```java
    for (int i = 1; i <= 5; i++) {
        System.out.println("Iteration: " + i);
    }
    ```

    **Output:**

    ```
    Iteration: 1
    Iteration: 2
    Iteration: 3
    Iteration: 4
    Iteration: 5
    ```

#### 3.2. `while` Loop

*   **Syntax:**

    ```java
    while (condition) {
        // Code to be executed repeatedly
    }
    ```

*   **Explanation:**
    *   The `condition` is evaluated before each iteration.
    *   If the `condition` is `true`, the loop body is executed.
    *   If the `condition` is `false`, the loop terminates.
    *   **Important:** Ensure the `condition` eventually becomes `false` to avoid an infinite loop.

*   **Example:**

    ```java
    int i = 1;
    while (i <= 5) {
        System.out.println("Iteration: " + i);
        i++;
    }
    ```

    **Output:**

    ```
    Iteration: 1
    Iteration: 2
    Iteration: 3
    Iteration: 4
    Iteration: 5
    ```

#### 3.3. `do-while` Loop

*   **Syntax:**

    ```java
    do {
        // Code to be executed repeatedly
    } while (condition);
    ```

*   **Explanation:**
    *   The loop body is executed *at least once*, regardless of the initial value of the `condition`.
    *   The `condition` is evaluated *after* each iteration.
    *   If the `condition` is `true`, the loop continues.
    *   If the `condition` is `false`, the loop terminates.

*   **Example:**

    ```java
    int i = 1;
    do {
        System.out.println("Iteration: " + i);
        i++;
    } while (i <= 5);
    ```

    **Output:**

    ```
    Iteration: 1
    Iteration: 2
    Iteration: 3
    Iteration: 4
    Iteration: 5
    ```

---

### 4. Jump Statements

#### 4.1. `break` Statement

*   **Purpose:**  To terminate the innermost loop ( `for`, `while`, `do-while` ) or `switch` statement immediately.

*   **Example (Loop):**

    ```java
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break; // Exit the loop when i is 5
        }
        System.out.println("Iteration: " + i);
    }
    System.out.println("Loop finished.");
    ```

    **Output:**

    ```
    Iteration: 1
    Iteration: 2
    Iteration: 3
    Iteration: 4
    Loop finished.
    ```

*   **Example (Switch):** (Already shown in the `switch` statement example)

#### 4.2. `continue` Statement

*   **Purpose:** To skip the rest of the current iteration of a loop ( `for`, `while`, `do-while` ) and proceed to the next iteration.

*   **Example:**

    ```java
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue; // Skip the iteration when i is 3
        }
        System.out.println("Iteration: " + i);
    }
    ```

    **Output:**

    ```
    Iteration: 1
    Iteration: 2
    Iteration: 4
    Iteration: 5
    ```

#### 4.3. `return` Statement

*   **Purpose:** To terminate the execution of a method and return to the calling method.

*   **Example:**

    ```java
    public class ReturnExample {
        public static int add(int a, int b) {
            return a + b; // Return the sum of a and b
        }

        public static void main(String[] args) {
            int sum = add(5, 3);
            System.out.println("Sum: " + sum);
        }
    }
    ```

    **Output:** Sum: 8

---

### 5. Important Points to Remember

*   **Indentation:** Use proper indentation to make your code more readable and easier to understand the structure of control statements.
*   **Braces:** Always use curly braces `{}` to define the blocks of code associated with control statements, even if the block contains only one statement.  This improves readability and avoids potential errors.
*   **Infinite Loops:** Be careful to avoid creating infinite loops, especially with `while` and `do-while` loops.  Make sure the loop condition eventually becomes `false`.
*   **`break` vs. `continue`:** Understand the difference between `break` (exits the loop) and `continue` (skips to the next iteration).
*   **`switch` Fall-Through:** Be aware of the fall-through behavior in `switch` statements.  Use `break` to prevent unintended execution of subsequent `case` blocks.
*   **`return`:**  The `return` statement not only exits the method, but also returns a value (if the method has a return type other than `void`).

---

### 6. Practice Questions/Exercises

1.  **Write a Java program to check if a number is positive, negative, or zero using `if-else-if` statements.**

    ```java
    import java.util.Scanner;

    public class CheckNumber {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
            System.out.print("Enter a number: ");
            double number = input.nextDouble();

            if (number > 0) {
                System.out.println("The number is positive.");
            } else if (number < 0) {
                System.out.println("The number is negative.");
            } else {
                System.out.println("The number is zero.");
            }
        }
    }
    ```

2.  **Write a Java program to print the numbers from 1 to 10 using a `for` loop.**

    ```java
    public class PrintNumbers {
        public static void main(String[] args) {
            for (int i = 1; i <= 10; i++) {
                System.out.println(i);
            }
        }
    }
    ```

3.  **Write a Java program to calculate the sum of numbers from 1 to 5 using a `while` loop.**

    ```java
    public class SumNumbers {
        public static void main(String[] args) {
            int i = 1;
            int sum = 0;
            while (i <= 5) {
                sum += i;
                i++;
            }
            System.out.println("Sum: " + sum);
        }
    }
    ```

4.  **Write a Java program to print the multiplication table of a number entered by the user.  Use a `do-while` loop.**

    ```java
    import java.util.Scanner;

    public class MultiplicationTable {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
            System.out.print("Enter a number: ");
            int number = input.nextInt();

            int i = 1;
            do {
                System.out.println(number + " * " + i + " = " + (number * i));
                i++;
            } while (i <= 10);
        }
    }
    ```

5.  **Write a Java program that uses a `switch` statement to determine the name of a month based on its number (1-12).**

    ```java
    import java.util.Scanner;

    public class MonthName {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
            System.out.print("Enter month number (1-12): ");
            int month = input.nextInt();
            String monthString;

            switch (month) {
                case 1:
                    monthString = "January";
                    break;
                case 2:
                    monthString = "February";
                    break;
                case 3:
                    monthString = "March";
                    break;
                case 4:
                    monthString = "April";
                    break;
                case 5:
                    monthString = "May";
                    break;
                case 6:
                    monthString = "June";
                    break;
                case 7:
                    monthString = "July";
                    break;
                case 8:
                    monthString = "August";
                    break;
                case 9:
                    monthString = "September";
                    break;
                case 10:
                    monthString = "October";
                    break;
                case 11:
                    monthString = "November";
                    break;
                case 12:
                    monthString = "December";
                    break;
                default:
                    monthString = "Invalid month";
            }
            System.out.println(monthString);
        }
    }
    ```

---
