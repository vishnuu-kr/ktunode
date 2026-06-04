---
title: "Java Built-in Exceptions"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces  – Packages "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfbe"
status: "completed"
scrapedAt: "2026-05-20T16:56:28.039Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 3: Packages and Interfaces – Packages

### Topic: Java Built-in Exceptions

---

**Learning Outcomes:**

By the end of this topic, you will be able to:

*   Understand the concept of exceptions in Java.
*   Differentiate between checked and unchecked exceptions.
*   Identify common types of built-in Java exceptions and their causes.
*   Explain the purpose of the `Throwable` class and its hierarchy.
*   Utilize the `try-catch` block for exception handling.
*   Understand the role of the `finally` block.
*   Explore exception propagation.

---

### 1. Understanding Exceptions in Java

#### What are Exceptions?

*   An **exception** is an event that occurs during the execution of a program that disrupts the normal flow of the program's instructions.
*   It's an abnormal condition that can be caused by various runtime events, such as invalid user input, hardware failures, or network problems.
*   Java's exception handling mechanism provides a way to handle these runtime errors gracefully, preventing program crashes and allowing for recovery or appropriate action.

#### Why Handle Exceptions?

*   **Robustness:** Makes your program more resilient to unexpected situations.
*   **Error Recovery:** Allows you to gracefully recover from errors instead of terminating the program abruptly.
*   **User Experience:** Provides a better experience for the user by displaying informative error messages.
*   **Code Maintainability:** Separates error-handling code from the main program logic, making the code cleaner and easier to maintain.

---

### 2. The `Throwable` Class and its Hierarchy

*   All exceptions and errors in Java inherit from the `Throwable` class.
*   `Throwable` has two direct subclasses:
    *   `Error`: Represents serious problems that a reasonable application should not try to catch. These are typically unrecoverable (e.g., `OutOfMemoryError`, `StackOverflowError`).
    *   `Exception`: Represents conditions that a reasonable application might want to catch. These are typically recoverable.

#### `Exception` Subclasses:

The `Exception` class further branches into two main categories:

*   **Checked Exceptions:**
    *   These are exceptions that the compiler *forces* you to handle.
    *   They represent predictable but potentially problematic situations that are often outside the direct control of the program (e.g., file I/O operations, network connectivity issues).
    *   If a method can throw a checked exception, it must either:
        *   Handle it using a `try-catch` block.
        *   Declare that it throws the exception using the `throws` keyword.
    *   Examples: `IOException`, `FileNotFoundException`, `ClassNotFoundException`, `SQLException`.

*   **Unchecked Exceptions (Runtime Exceptions):**
    *   These are exceptions that the compiler *does not* force you to handle.
    *   They typically represent programming errors or logical flaws (e.g., dividing by zero, accessing an array out of bounds).
    *   While you *can* catch them, it's often better to fix the underlying bug.
    *   They inherit from `RuntimeException`.
    *   Examples: `NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException`, `IllegalArgumentException`, `ClassCastException`.

#### **Important Point to Remember:**

*   **`Error` vs. `Exception` vs. `RuntimeException`:**
    *   `Error`: Serious, unrecoverable system-level problems. Don't catch these.
    *   `Exception`: Conditions that can be handled by the application.
    *   `RuntimeException`: Exceptions that are typically due to programming bugs and are not mandatory to catch.

---

### 3. Common Built-in Java Exceptions and Their Causes

Here are some frequently encountered built-in exceptions:

| Exception Type                 | Description                                                                                                   | Common Causes                                                                                                                              | Example Scenario                                                                                                      |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **`ArithmeticException`**      | Thrown when an exceptional arithmetic condition occurs.                                                       | Integer division by zero.                                                                                                                  | `int result = 10 / 0;`                                                                                                |
| **`NullPointerException`**   | Thrown when an application attempts to use `null` anywhere it expects an object.                              | Calling a method on a `null` object reference; accessing a field of a `null` object; using a `null` array; getting `null` from a method. | `String str = null; System.out.println(str.length());`                                                               |
| **`ArrayIndexOutOfBoundsException`** | Thrown to indicate that an array has been accessed with an illegal index.                                     | Trying to access an array element at an index less than 0 or greater than or equal to the array's length.                                | `int[] numbers = {1, 2, 3}; System.out.println(numbers[3]);`                                                          |
| **`StringIndexOutOfBoundsException`** | Thrown by `String` methods to indicate that an index is either negative or greater than the length of the string. | Accessing a character in a string at an invalid index.                                                                                     | `String text = "Hello"; System.out.println(text.charAt(5));`                                                          |
| **`NumberFormatException`**  | Thrown to indicate that the string representation of a number cannot be parsed into an integer or double.      | Attempting to convert a non-numeric string to a number (e.g., using `Integer.parseInt()`).                                                 | `int number = Integer.parseInt("abc");`                                                                              |
| **`ClassNotFoundException`** | Thrown when the Java Virtual Machine (JVM) tries to load a class but cannot find the class definition.      | Missing a required class file at runtime, or a class name is misspelled.                                                                   | `Class.forName("MyMissingClass");`                                                                                    |
| **`IOException`**            | Thrown when an input/output error occurs.                                                                     | File not found, permission issues, network errors, failure to read/write data.                                                           | `FileInputStream fis = new FileInputStream("non_existent_file.txt");`                                                 |
| **`FileNotFoundException`**  | A subclass of `IOException` that is thrown when an attempt to open a file denoted by a specified pathname fails because it does not exist. | Trying to open a file that isn't present.                                                                                                  | `FileReader reader = new FileReader("missing_config.properties");`                                                    |
| **`IllegalArgumentException`** | Thrown to indicate that a method has been passed an illegal or inappropriate argument.                        | Passing a value that is outside the expected range or format.                                                                              | `public void setAge(int age) { if (age < 0) throw new IllegalArgumentException("Age cannot be negative."); }` |

---

### 4. Exception Handling Mechanisms: `try-catch`

The primary mechanism for handling exceptions in Java is the `try-catch` block.

#### The `try` Block

*   The code that might throw an exception is placed inside the `try` block.
*   If an exception occurs within the `try` block, the normal execution flow is interrupted, and the control is transferred to the corresponding `catch` block.
*   If no exception occurs in the `try` block, the `catch` block is skipped.

#### The `catch` Block

*   The `catch` block is executed only if an exception of the specified type (or its subclass) occurs in the `try` block.
*   You can have multiple `catch` blocks to handle different types of exceptions.
*   The `catch` block must specify the type of exception it can handle.

**Syntax:**

```java
try {
    // Code that might throw an exception
} catch (ExceptionType1 exceptionVariable1) {
    // Handle exception of type ExceptionType1
} catch (ExceptionType2 exceptionVariable2) {
    // Handle exception of type ExceptionType2
} // ... and so on
```

**Example:**

```java
public class ExceptionHandlingDemo {
    public static void main(String[] args) {
        try {
            int numerator = 10;
            int denominator = 0;
            int result = numerator / denominator; // This will throw ArithmeticException
            System.out.println("Result: " + result); // This line will not be executed
        } catch (ArithmeticException e) {
            System.err.println("Error: Cannot divide by zero!");
            // e.getMessage() would return " / by zero"
            // e.printStackTrace() would print the full stack trace
        }
        System.out.println("Program continues after the try-catch block.");
    }
}
```

**Output:**

```
Error: Cannot divide by zero!
Program continues after the try-catch block.
```

**Catching Multiple Exceptions:**

```java
public class MultipleCatchDemo {
    public static void main(String[] args) {
        try {
            String[] names = {"Alice", "Bob"};
            System.out.println(names[2]); // ArrayIndexOutOfBoundsException

            String numStr = "hello";
            int number = Integer.parseInt(numStr); // NumberFormatException
            System.out.println("Parsed number: " + number);

        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("Error: Array index is out of bounds.");
        } catch (NumberFormatException e) {
            System.err.println("Error: Invalid number format.");
        } catch (Exception e) { // Catching a general Exception
            System.err.println("An unexpected error occurred: " + e.getMessage());
        }
        System.out.println("Execution continues.");
    }
}
```

**Important Note on Catch Order:**

*   When using multiple `catch` blocks, the most specific exception types should come first.
*   If a superclass exception is caught before its subclass, the subclass will never be caught.
*   Catching `Exception` (or `Throwable`) as the last `catch` block acts as a general handler for all other unhandled exceptions.

---

### 5. The `finally` Block

*   The `finally` block is an optional block that can be used with `try-catch`.
*   The code within the `finally` block is **always executed**, regardless of whether an exception occurred in the `try` block or was caught by a `catch` block.
*   It's typically used for cleanup operations, such as closing files, releasing resources, or closing database connections, ensuring these actions happen even if errors occur.

**Syntax:**

```java
try {
    // Code that might throw an exception
} catch (ExceptionType e) {
    // Handle the exception
} finally {
    // Code that will always be executed
}
```

**Example:**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FinallyDemo {
    public static void main(String[] args) {
        BufferedReader reader = null; // Declare outside try to be accessible in finally
        try {
            reader = new BufferedReader(new FileReader("my_file.txt"));
            String line = reader.readLine();
            System.out.println("First line: " + line);
        } catch (IOException e) {
            System.err.println("An IO error occurred: " + e.getMessage());
        } finally {
            // This block will execute whether an exception occurred or not
            if (reader != null) {
                try {
                    reader.close(); // Close the resource
                    System.out.println("File reader closed.");
                } catch (IOException e) {
                    System.err.println("Error closing the file reader: " + e.getMessage());
                }
            }
        }
        System.out.println("Program finished.");
    }
}
```

**Key Scenarios for `finally`:**

*   **No Exception:** `try` executes, `catch` is skipped, `finally` executes.
*   **Exception Caught:** `try` executes up to the exception, `catch` executes, `finally` executes.
*   **Exception Not Caught:** `try` executes up to the exception, no `catch` handles it, `finally` executes, then the exception propagates up the call stack.
*   **`return`, `break`, `continue` in `try` or `catch`:** The `finally` block will still execute *before* the control flow is transferred out of the `try-catch` block.

---

### 6. Exception Propagation

*   When an exception is thrown but not caught by a `catch` block in the current method, it "propagates" up the call stack.
*   The JVM looks for a `catch` block in the calling method.
*   This process continues up the call stack until a suitable `catch` block is found.
*   If the exception reaches the top of the call stack (e.g., the `main` method) and is still not caught, the program will terminate, printing the exception's stack trace.

**Example of Propagation:**

```java
public class PropagationDemo {

    public static void method1() {
        System.out.println("Entering method1");
        method2(); // Call method2
        System.out.println("Exiting method1"); // This line won't be reached if method2 throws an uncaught exception
    }

    public static void method2() {
        System.out.println("Entering method2");
        int result = 10 / 0; // This will throw ArithmeticException
        System.out.println("Exiting method2"); // This line won't be reached
    }

    public static void main(String[] args) {
        System.out.println("Entering main");
        try {
            method1(); // Call method1
        } catch (ArithmeticException e) {
            System.err.println("Caught ArithmeticException in main: " + e.getMessage());
        }
        System.out.println("Exiting main");
    }
}
```

**Output:**

```
Entering main
Entering method1
Entering method2
Caught ArithmeticException in main: / by zero
Exiting main
```

**Explanation:**

1.  `main` calls `method1`.
2.  `method1` calls `method2`.
3.  In `method2`, `10 / 0` throws an `ArithmeticException`.
4.  `method2` has no `catch` block for `ArithmeticException`, so the exception propagates to `method1`.
5.  `method1` also has no `catch` block for `ArithmeticException`, so the exception propagates to `main`.
6.  The `try-catch` block in `main` catches the `ArithmeticException`.
7.  The error message is printed, and execution continues in `main`.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the difference between a checked and an unchecked exception in Java? Provide an example of each.

**Answer:**
*   **Checked Exceptions:** Must be declared using `throws` or handled with `try-catch`. They typically represent external conditions that a program might encounter (e.g., `IOException`).
    *   **Example:** `FileNotFoundException`
*   **Unchecked Exceptions (Runtime Exceptions):** Do not need to be declared or caught, though they can be. They usually indicate programming errors (e.g., `NullPointerException`).
    *   **Example:** `ArrayIndexOutOfBoundsException`

**Question 2:**
Explain the purpose of the `finally` block and in which scenarios it is guaranteed to execute.

**Answer:**
The `finally` block contains code that will always execute, regardless of whether an exception was thrown in the `try` block or caught in a `catch` block. It's used for cleanup operations. It is guaranteed to execute in the following scenarios:
*   When no exception occurs.
*   When an exception occurs and is caught.
*   When an exception occurs and is *not* caught (it executes before the exception propagates further).
*   Even if a `return`, `break`, or `continue` statement is encountered in the `try` or `catch` block.

**Question 3:**
Write a Java program that demonstrates handling a `NumberFormatException`. The program should prompt the user to enter a number, convert the input to an integer, and print it. If the input is not a valid number, it should catch the `NumberFormatException` and print an appropriate error message.

**Solution:**

```java
import java.util.Scanner;

public class NumberFormatExceptionHandler {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Please enter an integer: ");
        String input = scanner.nextLine();

        try {
            int number = Integer.parseInt(input); // Potential NumberFormatException
            System.out.println("You entered the number: " + number);
        } catch (NumberFormatException e) {
            System.err.println("Error: Invalid input. Please enter a valid integer.");
            // e.printStackTrace(); // Uncomment to see the stack trace
        } finally {
            scanner.close(); // Always close the scanner
            System.out.println("Scanner closed.");
        }
    }
}
```

**Question 4:**
Consider the following code. What will be the output?

```java
public class ExceptionFlow {
    public static void main(String[] args) {
        try {
            System.out.println("Block 1");
            int x = 10 / 0; // Exception here
            System.out.println("Block 2"); // This will not be printed
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException");
            throw e; // Re-throwing the exception
        } catch (Exception e) {
            System.out.println("Caught general Exception");
        } finally {
            System.out.println("Finally block");
        }
        System.out.println("End of program"); // This will not be printed if exception is re-thrown
    }
}
```

**Answer:**
```
Block 1
Caught ArithmeticException
Finally block
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at ExceptionFlow.main(ExceptionFlow.java:...)
```

**Explanation:**
1. "Block 1" is printed.
2. `10 / 0` throws an `ArithmeticException`.
3. The `catch (ArithmeticException e)` block is executed, printing "Caught ArithmeticException".
4. The `throw e;` statement re-throws the caught exception.
5. The `finally` block is executed *before* the re-thrown exception is propagated further, printing "Finally block".
6. Since the exception was re-thrown and there is no higher `try-catch` block in `main`, the JVM terminates the program and prints the stack trace of the re-thrown `ArithmeticException`. The lines "Block 2", "Caught general Exception", and "End of program" are never reached.

---

### Important Points to Remember:

*   **Always handle exceptions** that can be reasonably predicted and recovered from.
*   **Be specific** when catching exceptions. Catch the most specific exceptions first.
*   Use the **`finally` block** for crucial cleanup operations to ensure they are always performed.
*   **Avoid catching `Throwable` or `Exception`** unless you have a very good reason and a plan to handle all possible exceptions. It's often better to catch more specific exceptions.
*   **Do not suppress exceptions** unnecessarily. If you catch an exception, either handle it, log it, or re-throw it if it needs to be handled at a higher level.
*   **Understand exception propagation** to know how exceptions travel up the call stack.
*   **Checked exceptions** are for predictable, external conditions; **unchecked exceptions** are for programming errors. Focus on fixing bugs that cause unchecked exceptions rather than just catching them.
