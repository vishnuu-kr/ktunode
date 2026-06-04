---
title: "Control Statements - Selection Statements, Iteration Statements and Jump Statements"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf8d"
status: "completed"
scrapedAt: "2026-05-20T16:55:53.565Z"
---
# Object-Oriented Programming (OOP)

## Module 1: Introduction to Java

### Topic: Control Statements - Selection, Iteration, and Jump Statements

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the purpose of control statements in Java.
*   Explain and utilize selection statements (`if`, `if-else`, `if-else-if`, `switch`).
*   Explain and utilize iteration statements (`for`, `while`, `do-while`).
*   Explain and utilize jump statements (`break`, `continue`, `return`).
*   Apply these control statements to solve programming problems.

---

### 1. Introduction to Control Statements

*   **Definition:** Control statements are programming constructs that allow you to alter the normal sequential flow of execution in a program. They enable you to make decisions, repeat blocks of code, and exit from specific sections of your code.
*   **Purpose:**
    *   **Decision Making:** Executing different code blocks based on certain conditions.
    *   **Repetition:** Executing a block of code multiple times.
    *   **Flow Control:** Directing the program's execution path.

---

### 2. Selection Statements (Conditional Statements)

Selection statements allow your program to make decisions by executing different code blocks based on whether a specified condition is true or false.

#### 2.1. `if` Statement

*   **Purpose:** To execute a block of code only if a specified condition is true.
*   **Syntax:**

    ```java
    if (condition) {
        // code to be executed if condition is true
    }
    ```

*   **Explanation:**
    *   `condition`: A boolean expression that evaluates to either `true` or `false`.
    *   If the `condition` is `true`, the code inside the curly braces `{}` is executed.
    *   If the `condition` is `false`, the code inside the curly braces is skipped.

*   **Example:**

    ```java
    int age = 18;
    if (age >= 18) {
        System.out.println("You are an adult.");
    }
    ```

#### 2.2. `if-else` Statement

*   **Purpose:** To execute one block of code if a condition is true, and another block of code if the condition is false.
*   **Syntax:**

    ```java
    if (condition) {
        // code to be executed if condition is true
    } else {
        // code to be executed if condition is false
    }
    ```

*   **Explanation:**
    *   If the `condition` is `true`, the code in the `if` block is executed.
    *   If the `condition` is `false`, the code in the `else` block is executed.

*   **Example:**

    ```java
    int score = 75;
    if (score >= 60) {
        System.out.println("You passed the exam.");
    } else {
        System.out.println("You failed the exam.");
    }
    ```

#### 2.3. `if-else-if` Ladder (Chained `if` Statements)

*   **Purpose:** To check multiple conditions in sequence. The first condition that evaluates to `true` will have its corresponding code block executed.
*   **Syntax:**

    ```java
    if (condition1) {
        // code to be executed if condition1 is true
    } else if (condition2) {
        // code to be executed if condition2 is true
    } else if (condition3) {
        // code to be executed if condition3 is true
    } // ... and so on
    else {
        // code to be executed if none of the above conditions are true
    }
    ```

*   **Explanation:**
    *   The conditions are evaluated from top to bottom.
    *   As soon as a `true` condition is encountered, its corresponding code block is executed, and the rest of the ladder is skipped.
    *   The optional `else` block at the end is executed if none of the preceding conditions are `true`.

*   **Example:**

    ```java
    int marks = 85;
    if (marks >= 90) {
        System.out.println("Grade: A");
    } else if (marks >= 80) {
        System.out.println("Grade: B");
    } else if (marks >= 70) {
        System.out.println("Grade: C");
    } else {
        System.out.println("Grade: D");
    }
    ```

#### 2.4. `switch` Statement

*   **Purpose:** To select one of many code blocks to be executed based on the value of an expression. It's often used when you have a single variable or expression that needs to be compared against multiple constant values.
*   **Syntax:**

    ```java
    switch (expression) {
        case value1:
            // code to be executed if expression matches value1
            break; // Exits the switch statement
        case value2:
            // code to be executed if expression matches value2
            break;
        // ... other cases
        default:
            // code to be executed if no case matches
    }
    ```

*   **Explanation:**
    *   `expression`: Must be of a type that can be compared to constants (e.g., `byte`, `short`, `char`, `int`, `String`, `enum`).
    *   `case value`: Compares the `expression` with `value`. If they match, the code following the `case` is executed.
    *   `break`: **Crucial!** It terminates the `switch` statement. Without `break`, execution "falls through" to the next `case`.
    *   `default`: An optional block executed if none of the `case` values match the `expression`.

*   **Example:**

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
            System.out.println("Fair.");
            break;
        default:
            System.out.println("Needs Improvement.");
    }
    ```

---

### 3. Iteration Statements (Looping Statements)

Iteration statements allow you to execute a block of code repeatedly.

#### 3.1. `for` Loop

*   **Purpose:** To execute a block of code a fixed number of times. It's typically used when you know the number of iterations beforehand.
*   **Syntax:**

    ```java
    for (initialization; condition; update) {
        // code to be executed in each iteration
    }
    ```

*   **Explanation:**
    *   `initialization`: Executed once before the loop starts. Usually used to initialize a loop counter.
    *   `condition`: Evaluated before each iteration. If `true`, the loop body is executed. If `false`, the loop terminates.
    *   `update`: Executed after each iteration. Usually used to increment or decrement the loop counter.

*   **Example:** Printing numbers from 1 to 5.

    ```java
    for (int i = 1; i <= 5; i++) {
        System.out.println("Number: " + i);
    }
    ```

    **Execution Flow:**
    1.  `i` is initialized to `1`.
    2.  `i <= 5` (1 <= 5) is `true`. Execute the loop body. Print "Number: 1".
    3.  `i` is incremented to `2`.
    4.  `i <= 5` (2 <= 5) is `true`. Execute the loop body. Print "Number: 2".
    5.  ...
    6.  `i` is incremented to `6`.
    7.  `i <= 5` (6 <= 5) is `false`. The loop terminates.

*   **Enhanced `for` Loop (For-Each Loop):**
    *   **Purpose:** To iterate over elements of arrays or collections without needing an index.
    *   **Syntax:**

        ```java
        for (dataType variable : arrayOrCollection) {
            // code to be executed for each element
        }
        ```

    *   **Example:** Iterating over an array.

        ```java
        int[] numbers = {10, 20, 30, 40};
        for (int num : numbers) {
            System.out.println(num);
        }
        ```

#### 3.2. `while` Loop

*   **Purpose:** To execute a block of code as long as a specified condition is true. The condition is checked *before* each iteration.
*   **Syntax:**

    ```java
    while (condition) {
        // code to be executed as long as condition is true
        // IMPORTANT: The condition must eventually become false,
        // otherwise, it will be an infinite loop.
    }
    ```

*   **Explanation:**
    *   If the `condition` is initially `false`, the loop body will never be executed.

*   **Example:** Printing numbers from 1 to 5.

    ```java
    int count = 1;
    while (count <= 5) {
        System.out.println("Count: " + count);
        count++; // Increment to avoid infinite loop
    }
    ```

#### 3.3. `do-while` Loop

*   **Purpose:** Similar to `while` loop, but the condition is checked *after* the loop body has been executed at least once. This guarantees that the loop body executes at least one time, regardless of the condition.
*   **Syntax:**

    ```java
    do {
        // code to be executed
        // IMPORTANT: The condition must eventually become false
    } while (condition);
    ```

*   **Explanation:**
    *   The code within the `do` block is executed first.
    *   Then, the `condition` is evaluated. If `true`, the loop continues. If `false`, the loop terminates.

*   **Example:**

    ```java
    int j = 1;
    do {
        System.out.println("Loop iteration: " + j);
        j++;
    } while (j <= 5);
    ```

    **When to use which loop?**
    *   **`for`:** When you know the exact number of iterations.
    *   **`while`:** When you need to repeat as long as a condition is true, and the number of iterations isn't fixed beforehand.
    *   **`do-while`:** When you need to execute the loop body at least once, even if the condition is initially false.

---

### 4. Jump Statements

Jump statements are used to transfer control from one part of a program to another.

#### 4.1. `break` Statement

*   **Purpose:** To terminate the execution of the innermost enclosing loop (`for`, `while`, `do-while`) or `switch` statement. Control is transferred to the statement immediately following the terminated construct.
*   **Use Cases:**
    *   Exiting a loop prematurely when a certain condition is met.
    *   Exiting a `switch` statement after a `case` has been matched.
*   **Example:**

    ```java
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break; // Exit the loop when i is 5
        }
        System.out.println(i);
    }
    // Output: 1 2 3 4
    ```

    **Nested Loops:** `break` only exits the innermost loop.

    ```java
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            if (i == 2 && j == 2) {
                break; // Exits the inner loop (for j)
            }
            System.out.println("i: " + i + ", j: " + j);
        }
    }
    ```

#### 4.2. `continue` Statement

*   **Purpose:** To skip the current iteration of a loop and proceed to the next iteration. Control is transferred to the loop's update expression (for `for` loops) or to the condition check (for `while` and `do-while` loops).
*   **Use Cases:**
    *   Skipping specific iterations based on a condition.
*   **Example:** Printing only odd numbers from 1 to 10.

    ```java
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) { // If i is even
            continue; // Skip to the next iteration
        }
        System.out.println(i);
    }
    // Output: 1 3 5 7 9
    ```

    **Nested Loops:** `continue` only skips the current iteration of the innermost loop.

    ```java
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            if (j == 2) {
                continue; // Skips j=2 in the inner loop
            }
            System.out.println("i: " + i + ", j: " + j);
        }
    }
    ```

#### 4.3. `return` Statement

*   **Purpose:**
    1.  To exit the current method (or function).
    2.  To return a value from a method that has a non-`void` return type.
*   **Use Cases:**
    *   Terminating a method's execution.
    *   Providing a result back to the caller.
*   **Example:**

    ```java
    public class ReturnExample {
        public static int add(int a, int b) {
            int sum = a + b;
            return sum; // Returns the calculated sum
        }

        public static void main(String[] args) {
            int result = add(5, 3);
            System.out.println("The sum is: " + result); // Output: The sum is: 8

            // Example of return in a void method
            printMessage("Hello");
        }

        public static void printMessage(String message) {
            System.out.println(message);
            return; // Explicitly exits the void method (optional, it exits automatically)
        }
    }
    ```

---

### 5. Practice Questions and Exercises

**Instructions:** Attempt these questions to test your understanding. The answers are provided below.

1.  **Selection Statement:** Write a Java program that takes an integer as input and prints whether the number is positive, negative, or zero.
2.  **`switch` Statement:** Write a Java program that takes a day of the week (e.g., "Monday", "Tuesday") as a string input and prints whether it's a weekday or a weekend. Assume the input will be one of the seven days.
3.  **`for` Loop:** Write a Java program to print the multiplication table of a given number (e.g., the table of 7).
4.  **`while` Loop:** Write a Java program to calculate the sum of all even numbers between 1 and 100 (inclusive).
5.  **`do-while` Loop:** Write a Java program that simulates a simple guessing game. The program picks a random number between 1 and 10, and the user has to guess it. The program should tell the user if their guess is too high, too low, or correct. The game should continue until the user guesses correctly, and it should prompt for input at least once.
6.  **`break` and `continue`:** Write a Java program that iterates through numbers from 1 to 20. It should print all odd numbers, but skip any number that is divisible by 5. If it encounters the number 15, it should stop the program entirely.

---

### Answers to Practice Questions

**1. Selection Statement:**

```java
import java.util.Scanner;

public class PositiveNegativeZero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int number = scanner.nextInt();

        if (number > 0) {
            System.out.println(number + " is positive.");
        } else if (number < 0) {
            System.out.println(number + " is negative.");
        } else {
            System.out.println("The number is zero.");
        }
        scanner.close();
    }
}
```

**2. `switch` Statement:**

```java
import java.util.Scanner;

public class DayOfWeek {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a day of the week (e.g., Monday): ");
        String day = scanner.nextLine();

        switch (day.toLowerCase()) { // Convert to lowercase for case-insensitivity
            case "saturday":
            case "sunday":
                System.out.println(day + " is a weekend.");
                break;
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                System.out.println(day + " is a weekday.");
                break;
            default:
                System.out.println("Invalid day entered.");
        }
        scanner.close();
    }
}
```

**3. `for` Loop:**

```java
import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number for its multiplication table: ");
        int number = scanner.nextInt();

        System.out.println("Multiplication Table of " + number + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " * " + i + " = " + (number * i));
        }
        scanner.close();
    }
}
```

**4. `while` Loop:**

```java
public class SumOfEvenNumbers {
    public static void main(String[] args) {
        int sum = 0;
        int i = 1;
        while (i <= 100) {
            if (i % 2 == 0) { // Check if the number is even
                sum += i;
            }
            i++;
        }
        System.out.println("The sum of even numbers between 1 and 100 is: " + sum);
    }
}
```

**5. `do-while` Loop:**

```java
import java.util.Scanner;
import java.util.Random;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int secretNumber = random.nextInt(10) + 1; // Generates a number between 1 and 10
        int guess;
        boolean correctGuess = false;

        System.out.println("Welcome to the Guessing Game!");

        do {
            System.out.print("Guess a number between 1 and 10: ");
            guess = scanner.nextInt();

            if (guess < secretNumber) {
                System.out.println("Too low!");
            } else if (guess > secretNumber) {
                System.out.println("Too high!");
            } else {
                System.out.println("Congratulations! You guessed the correct number!");
                correctGuess = true;
            }
        } while (!correctGuess); // Loop continues as long as correctGuess is false

        scanner.close();
    }
}
```

**6. `break` and `continue`:**

```java
public class BreakContinueExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            if (i == 15) {
                System.out.println("Encountered 15. Stopping the program.");
                break; // Exits the loop entirely
            }
            if (i % 5 == 0) { // If divisible by 5 (and not 15, which is handled by break)
                continue; // Skip to the next iteration
            }
            if (i % 2 != 0) { // If odd
                System.out.println(i);
            }
        }
    }
}
```

---

### Important Points to Remember:

*   **Curly Braces `{}`:** Use them for blocks of code, especially with `if`, `else`, `switch`, and loops. Even for single statements, it's good practice to use them to avoid potential errors when modifying the code later.
*   **Boolean Expressions:** Conditions in `if`, `while`, and `for` loops must evaluate to `true` or `false`.
*   **`break` in `switch`:** **Crucial!** Always use `break` to prevent unintended fall-through.
*   **Infinite Loops:** Be careful with `while` and `do-while` loops. Ensure that the condition will eventually become `false`, or use `break` to exit if necessary.
*   **`continue` vs. `break`:** `continue` skips the *rest of the current iteration*, while `break` exits the *entire loop or switch*.
*   **`return` in methods:** It exits the method and can optionally return a value.
*   **Enhanced `for` loop:** A cleaner way to iterate over arrays and collections when you don't need the index.

---
