---
title: "Iteration Statements and 
Jump Statements."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe688"
status: "completed"
scrapedAt: "2026-05-23T17:51:31.314Z"
---
# Module 2: Core Java Fundamentals: Iteration Statements and Jump Statements

## Introduction

This module delves into the fundamental control flow mechanisms in Java that allow programs to execute blocks of code repeatedly (iteration) or alter the normal sequential execution flow (jump statements). Understanding these constructs is crucial for writing dynamic and efficient Java programs, directly contributing to **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**

## 1. Iteration Statements (Loops)

Iteration statements, commonly known as loops, are used to execute a block of code multiple times. Java provides four primary loop constructs: `for`, `while`, `do-while`, and the enhanced `for` loop (for-each loop).

### 1.1. `for` Loop

The `for` loop is typically used when you know the number of times a block of code needs to be executed.

**Syntax:**

```java
for (initialization; condition; increment/decrement) {
    // Code to be executed
}
```

**Components:**

*   **Initialization:** Executed once before the loop starts. Usually used to declare and initialize a loop control variable.
*   **Condition:** Evaluated before each iteration. If true, the loop body is executed. If false, the loop terminates.
*   **Increment/Decrement:** Executed after each iteration. Usually used to update the loop control variable.

**Example:** Printing numbers from 1 to 5.

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

**Output:**
```
1
2
3
4
5
```

**Variations:**

*   **Infinite `for` loop:** Omitting all three parts of the `for` loop creates an infinite loop.

    ```java
    for (;;) {
        System.out.println("This will print forever!");
    }
    ```
*   **Multiple initializations/increments/decrements:** You can use comma-separated expressions.

    ```java
    for (int i = 0, j = 10; i < 5 && j > 5; i++, j--) {
        System.out.println("i: " + i + ", j: " + j);
    }
    ```

**Reference:** Herbert Schildt's "Java: The Complete Reference" extensively covers the `for` loop and its nuances, including variations and potential pitfalls.

### 1.2. `while` Loop

The `while` loop executes a block of code as long as a specified condition is true. The condition is checked *before* each iteration.

**Syntax:**

```java
while (condition) {
    // Code to be executed
}
```

**Key Characteristic:** If the condition is initially false, the loop body will never execute.

**Example:** Printing numbers from 1 to 5.

```java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++; // Important: update the loop variable to avoid infinite loop
}
```

**Output:**
```
1
2
3
4
5
```

**Reference:** Deitel & Deitel's "Java How to Program" emphasizes the importance of ensuring loop conditions eventually become false to avoid infinite loops, a common mistake with `while` loops.

### 1.3. `do-while` Loop

The `do-while` loop is similar to the `while` loop, but it guarantees that the loop body will execute at least once, regardless of the condition. The condition is checked *after* each iteration.

**Syntax:**

```java
do {
    // Code to be executed
} while (condition); // Note the semicolon!
```

**Key Characteristic:** Always executes at least once.

**Example:** Getting user input until a valid number is entered.

```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int number;

do {
    System.out.print("Enter a positive number: ");
    number = scanner.nextInt();
} while (number <= 0);

System.out.println("You entered: " + number);
```

**Reference:** Rajib Mall's "Fundamentals of Software Engineering" highlights `do-while` loops for scenarios where a minimum of one execution is required, such as input validation.

### 1.4. Enhanced `for` Loop (for-each Loop)

The enhanced `for` loop provides a simpler way to iterate over arrays and collections (like `ArrayList`, `HashSet`, etc.) without the need to manage an index.

**Syntax:**

```java
for (dataType element : collectionOrArray) {
    // Code to be executed for each element
}
```

**Key Characteristic:** Simplifies iteration over elements without explicit index management.

**Example:** Iterating over an array of strings.

```java
String[] fruits = {"Apple", "Banana", "Cherry"};
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

**Output:**
```
Apple
Banana
Cherry
```

**Important Note:** The enhanced `for` loop is read-only. You cannot modify the elements of the underlying collection or array directly using this loop.

**Reference:** Balagurusamy's "Programming JAVA a Primer" offers clear examples of the enhanced `for` loop for iterating through collections, showcasing its ease of use.

**Connecting to Learning Outcomes:**
*   **CO2:** Demonstrates the use of control statements to manage program flow.

## 2. Jump Statements

Jump statements alter the normal flow of execution by transferring control to another part of the program. Java supports three jump statements: `break`, `continue`, and `return`.

### 2.1. `break` Statement

The `break` statement is used to terminate the current loop (`for`, `while`, `do-while`) or `switch` statement immediately. Execution resumes at the statement immediately following the terminated construct.

**Usage:**

*   **Exiting Loops:** Terminates the innermost loop it is contained within.
*   **Exiting `switch`:** Terminates the `switch` statement.

**Example:** Searching for a value in an array and stopping once found.

```java
int[] numbers = {10, 20, 30, 40, 50};
int searchVal = 30;
boolean found = false;

for (int num : numbers) {
    if (num == searchVal) {
        found = true;
        break; // Exit the loop once the value is found
    }
    System.out.println("Checking: " + num);
}

if (found) {
    System.out.println("Value " + searchVal + " found!");
} else {
    System.out.println("Value " + searchVal + " not found.");
}
```

**Output:**
```
Checking: 10
Checking: 20
Value 30 found!
```

**Labeled `break`:** Allows you to break out of an outer loop from within an inner loop.

```java
outerLoop: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.println("i: " + i + ", j: " + j);
        if (i == 2 && j == 2) {
            break outerLoop; // Breaks out of the outerLoop
        }
    }
}
```

**Output:**
```
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
i: 2, j: 1
i: 2, j: 2
```

**Reference:** Flanagan's "Java in A Nutshell" provides concise explanations and examples of `break` and its labeled variant, emphasizing control flow management.

### 2.2. `continue` Statement

The `continue` statement is used to skip the rest of the current iteration of a loop and proceed to the next iteration.

**Usage:**

*   **Skipping Iterations:** Skips the remaining code in the loop body for the current iteration.

**Example:** Printing only even numbers from 1 to 10.

```java
for (int i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        continue; // Skip the rest of the loop if i is odd
    }
    System.out.println(i);
}
```

**Output:**
```
2
4
6
8
10
```

**Labeled `continue`:** Allows you to skip to the next iteration of an outer loop from within an inner loop.

```java
outerLoop: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            continue outerLoop; // Skips to the next iteration of outerLoop
        }
        System.out.println("i: " + i + ", j: " + j);
    }
}
```

**Output:**
```
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
i: 2, j: 1
i: 3, j: 1
i: 3, j: 2
i: 3, j: 3
```

**Reference:** Sierra's "Head First Java" uses relatable analogies to explain how `continue` works, making it easier to grasp the concept of skipping an iteration.

### 2.3. `return` Statement

The `return` statement is used to exit a method. It can also be used to return a value from a method if the method's return type is not `void`.

**Usage:**

*   **Exiting Methods:** Terminates the execution of the current method.
*   **Returning Values:** Optionally returns a value to the caller.

**Example:** A method that returns the square of a number.

```java
public int calculateSquare(int num) {
    if (num < 0) {
        System.out.println("Cannot calculate square of a negative number.");
        return -1; // Return an error indicator
    }
    return num * num; // Return the calculated square
}

// In another method:
int result = calculateSquare(5);
System.out.println("Square is: " + result); // Output: Square is: 25

result = calculateSquare(-3);
System.out.println("Result: " + result); // Output: Cannot calculate square of a negative number. Result: -1
```

**Reference:** Both Herbert Schildt and Deitel & Deitel provide comprehensive coverage of `return` statements within the context of methods and program termination.

**Connecting to Learning Outcomes:**
*   **CO2:** Reinforces the understanding of control statements for program logic.
*   **CO3:** While not directly about exception handling, `return` can be used to signal error conditions, a precursor to robust error management discussed in CO3.

## 3. Important Points to Remember

*   **Infinite Loops:** Be mindful of loop conditions. Always ensure there's a mechanism for the loop to terminate. Forgetting to increment/decrement a counter or setting an incorrect condition can lead to infinite loops, consuming system resources.
*   **`for` vs. `while`:** Use `for` when the number of iterations is known beforehand. Use `while` when the loop continues as long as a condition is true, and the number of iterations is not fixed.
*   **`do-while` Guarantee:** Remember that `do-while` executes its body at least once.
*   **Enhanced `for` Loop Readability:** Use the enhanced `for` loop for cleaner iteration over arrays and collections when you don't need the index.
*   **`break` and `continue` Scope:** These statements affect only the innermost loop or `switch` statement they are contained within, unless labeled `break` or `continue` is used.
*   **`return` in `void` Methods:** In methods declared as `void`, `return;` can be used to exit the method early without returning a value.
*   **Practice is Key:** Experiment with different loop structures and jump statements to solidify your understanding.

## 4. Practice Questions and Exercises

**Questions:**

1.  What is the primary difference between a `while` loop and a `do-while` loop?
2.  When would you choose to use an enhanced `for` loop over a traditional `for` loop?
3.  Explain the purpose of the `break` statement in Java.
4.  How does the `continue` statement differ from the `break` statement?
5.  Can a `break` statement be used to exit a method? Explain your answer.
6.  What is a labeled `break` statement, and why might it be useful?

**Exercises:**

1.  **Fibonacci Sequence:** Write a Java program that prints the first 10 numbers of the Fibonacci sequence using a `for` loop. The sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, 8, 13, 21, 34).
2.  **Sum of Odd Numbers:** Write a program to calculate the sum of all odd numbers between 1 and 100 (inclusive) using a `while` loop.
3.  **Prime Number Check:** Write a program that takes an integer as input from the user and determines if it is a prime number. Use a `for` loop and `break` if a divisor is found.
4.  **Pattern Printing:** Write a program to print the following pattern using nested loops:
    ```
    *
    **
    ***
    ****
    *****
    ```
5.  **Array Element Sum (Enhanced `for`):** Given an integer array `int[] numbers = {15, 25, 35, 45, 55};`, use an enhanced `for` loop to calculate and print the sum of all its elements.
6.  **Skip Multiples of 3:** Print numbers from 1 to 20, but skip printing any number that is a multiple of 3. Use the `continue` statement.

---

### Answers to Practice Questions

1.  **`while` vs. `do-while`:** A `while` loop checks the condition *before* executing the loop body, so the body might never execute. A `do-while` loop executes the body *at least once* before checking the condition.
2.  **Enhanced `for` loop choice:** Use it for simpler, more readable iteration over arrays or collections when you don't need direct access to the index. It's especially useful for iterating over collections like `ArrayList`.
3.  **`break` statement purpose:** It terminates the execution of the innermost loop (`for`, `while`, `do-while`) or `switch` statement it is within.
4.  **`continue` vs. `break`:** `break` exits the loop/switch entirely. `continue` skips the rest of the current iteration and proceeds to the next iteration of the loop.
5.  **`break` and methods:** No, a `break` statement cannot directly exit a method. The `return` statement is used to exit a method.
6.  **Labeled `break`:** A labeled `break` allows you to break out of an outer loop from within a nested inner loop by specifying the label of the outer loop. It's useful when you need to exit multiple levels of nested loops based on a condition in the innermost loop.

---

### Solutions to Exercises

**1. Fibonacci Sequence:**

```java
public class Fibonacci {
    public static void main(String[] args) {
        int n = 10;
        int firstTerm = 0, secondTerm = 1;

        System.out.println("First " + n + " Fibonacci numbers:");

        for (int i = 1; i <= n; ++i) {
            System.out.print(firstTerm + (i == n ? "" : ", "));
            int nextTerm = firstTerm + secondTerm;
            firstTerm = secondTerm;
            secondTerm = nextTerm;
        }
        System.out.println(); // New line at the end
    }
}
```

**2. Sum of Odd Numbers:**

```java
public class SumOfOdd {
    public static void main(String[] args) {
        int sum = 0;
        int i = 1;

        while (i <= 100) {
            if (i % 2 != 0) { // Check if the number is odd
                sum += i;
            }
            i++;
        }
        System.out.println("Sum of odd numbers between 1 and 100: " + sum);
    }
}
```

**3. Prime Number Check:**

```java
import java.util.Scanner;

public class PrimeChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a positive integer: ");
        int number = scanner.nextInt();

        boolean isPrime = true;

        if (number <= 1) {
            isPrime = false;
        } else {
            // We only need to check divisibility up to the square root of the number
            // For simplicity here, we check up to number/2. A more optimized version
            // would use Math.sqrt(number).
            for (int i = 2; i <= number / 2; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break; // Found a divisor, so it's not prime
                }
            }
        }

        if (isPrime) {
            System.out.println(number + " is a prime number.");
        } else {
            System.out.println(number + " is not a prime number.");
        }
        scanner.close();
    }
}
```

**4. Pattern Printing:**

```java
public class StarPattern {
    public static void main(String[] args) {
        int rows = 5;
        for (int i = 1; i <= rows; i++) { // Outer loop for rows
            for (int j = 1; j <= i; j++) { // Inner loop for stars in each row
                System.out.print("*");
            }
            System.out.println(); // Move to the next line after printing stars for a row
        }
    }
}
```

**5. Array Element Sum (Enhanced `for`):**

```java
public class ArraySum {
    public static void main(String[] args) {
        int[] numbers = {15, 25, 35, 45, 55};
        int sum = 0;

        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum of array elements: " + sum);
    }
}
```

**6. Skip Multiples of 3:**

```java
public class SkipMultiples {
    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            if (i % 3 == 0) {
                continue; // Skip the print statement if i is a multiple of 3
            }
            System.out.println(i);
        }
    }
}
```

---

This module equips you with essential tools for controlling program flow. Mastering iteration and jump statements is fundamental for building more complex and responsive Java applications, directly addressing **CO2**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
