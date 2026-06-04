---
title: "Java Built-in Exceptions"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acc4"
status: "completed"
scrapedAt: "2026-05-20T16:29:09.306Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 3: Packages and Interfaces - Packages
## Topic: Java Built-in Exceptions

**Learning Outcomes:**

*   Understand the concept of exceptions in Java and why they are used.
*   Identify and explain the different categories of built-in exceptions in Java.
*   Recognize common built-in exceptions (checked and unchecked) and their causes.
*   Describe how to handle built-in exceptions using `try-catch` blocks.
*   Explain the importance of exception handling for robust program development.

### 1. Introduction to Exceptions

*   **What is an Exception?**
    *   An exception is an *event*, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions.  It's a signal that an unexpected or error condition has arisen.
    *   Exceptions are *objects* in Java.  They represent errors or unusual conditions.

*   **Why Use Exceptions?**
    *   **Error Handling:** Provides a structured way to handle errors and prevent program crashes.
    *   **Robustness:** Makes programs more robust by allowing them to gracefully recover from errors.
    *   **Code Clarity:** Separates error handling logic from normal program logic, making the code cleaner and easier to understand.
    *   **Propagation:** Allows errors to be passed up the call stack to be handled by a more appropriate part of the program.

*   **Key Concepts:**
    *   **Throwing an Exception:**  An exception is "thrown" when an error condition is detected.  This essentially interrupts the normal flow of execution and passes control to an exception handler.
    *   **Catching an Exception:** An exception is "caught" by a piece of code designed to handle that specific type of exception (or a more general type). This involves the use of `try` and `catch` blocks.
    *   **Exception Handling:** The process of catching and responding to exceptions.

### 2. Categories of Built-in Exceptions

Java's built-in exceptions are organized into a hierarchy, with `Throwable` as the root class.  The two main branches are `Error` and `Exception`.

*   **`Throwable`:**
    *   The superclass of all errors and exceptions in Java.
    *   Subclasses: `Error` and `Exception`.

*   **`Error`:**
    *   Indicates serious problems that a reasonable application should *not* try to catch.
    *   Usually indicates a fatal system error, such as `OutOfMemoryError`, `StackOverflowError`, or `VirtualMachineError`.  These errors are typically unrecoverable.
    *   Programs should generally *not* attempt to handle `Error`s.  Recovery is often impossible.

*   **`Exception`:**
    *   Indicates conditions that a reasonable application *might* want to catch.
    *   Represents problems that can be anticipated and recovered from.
    *   Subdivided into:
        *   **Checked Exceptions:** (Compile-time Exceptions)  Exceptions that the compiler forces you to handle (either by catching them in a `try-catch` block or declaring that your method `throws` them).  Represents problems the programmer *should* anticipate and explicitly handle.
        *   **Unchecked Exceptions:** (Runtime Exceptions)  Exceptions that the compiler does *not* force you to handle. They typically indicate programming errors.
        *   **`RuntimeException`:** A subclass of `Exception`.  All unchecked exceptions are subclasses of `RuntimeException`.

### 3. Common Built-in Exceptions

#### 3.1 Checked Exceptions

*   **`IOException`:**
    *   Represents errors that can occur during input or output operations.
    *   Examples: `FileNotFoundException`, `EOFException` (End of File Exception).
    *   *Example:* Trying to read from a file that doesn't exist.

    ```java
    import java.io.*;

    public class CheckedExceptionExample {
        public static void main(String[] args) {
            try {
                BufferedReader reader = new BufferedReader(new FileReader("nonexistent_file.txt"));
                String line = reader.readLine();
                System.out.println(line);
                reader.close();
            } catch (FileNotFoundException e) {
                System.err.println("File not found: " + e.getMessage());
            } catch (IOException e) {
                System.err.println("IO Exception: " + e.getMessage());
            }
        }
    }
    ```

*   **`ClassNotFoundException`:**
    *   Occurs when the Java Virtual Machine (JVM) or a `ClassLoader` tries to load a class definition, but cannot find it.
    *   Usually happens when the classpath is not set correctly or the class file is missing.

    ```java
    public class ClassNotFoundExample {
        public static void main(String[] args) {
            try {
                Class.forName("NonExistentClass");
            } catch (ClassNotFoundException e) {
                System.err.println("Class not found: " + e.getMessage());
            }
        }
    }
    ```

#### 3.2 Unchecked Exceptions (Runtime Exceptions)

*   **`NullPointerException`:**
    *   Occurs when you try to access a member (method or field) of a `null` reference.
    *   A very common exception, often indicating a programming error.

    ```java
    public class NullPointerExceptionExample {
        public static void main(String[] args) {
            String str = null;
            try {
                System.out.println(str.length()); // This will cause a NullPointerException
            } catch (NullPointerException e) {
                System.err.println("NullPointerException: " + e.getMessage());
            }
        }
    }
    ```

*   **`ArrayIndexOutOfBoundsException`:**
    *   Occurs when you try to access an array element using an index that is outside the valid range (0 to array length - 1).

    ```java
    public class ArrayIndexOutOfBoundsExceptionExample {
        public static void main(String[] args) {
            int[] arr = {1, 2, 3};
            try {
                System.out.println(arr[5]); // This will cause an ArrayIndexOutOfBoundsException
            } catch (ArrayIndexOutOfBoundsException e) {
                System.err.println("ArrayIndexOutOfBoundsException: " + e.getMessage());
            }
        }
    }
    ```

*   **`IllegalArgumentException`:**
    *   Indicates that a method has been passed an illegal or inappropriate argument.

    ```java
    public class IllegalArgumentExceptionExample {
        public static void main(String[] args) {
            try {
                squareRoot(-10);
            } catch (IllegalArgumentException e) {
                System.err.println("IllegalArgumentException: " + e.getMessage());
            }
        }

        public static double squareRoot(double num) {
            if (num < 0) {
                throw new IllegalArgumentException("Cannot calculate square root of a negative number.");
            }
            return Math.sqrt(num);
        }
    }
    ```

*   **`NumberFormatException`:**
    *   Occurs when you try to convert a string to a numeric type, but the string does not have the correct format.

    ```java
    public class NumberFormatExceptionExample {
        public static void main(String[] args) {
            String str = "abc";
            try {
                int num = Integer.parseInt(str); // This will cause a NumberFormatException
            } catch (NumberFormatException e) {
                System.err.println("NumberFormatException: " + e.getMessage());
            }
        }
    }
    ```

*   **`ArithmeticException`:**
    *   Occurs during arithmetic operations, such as division by zero.

    ```java
    public class ArithmeticExceptionExample {
        public static void main(String[] args) {
            try {
                int result = 10 / 0; // This will cause an ArithmeticException
            } catch (ArithmeticException e) {
                System.err.println("ArithmeticException: " + e.getMessage());
            }
        }
    }
    ```

### 4. Handling Built-in Exceptions with `try-catch` Blocks

*   **`try` Block:**  Encloses the code that might throw an exception.
*   **`catch` Block:**  Follows the `try` block and contains the code that handles a specific type of exception.  You can have multiple `catch` blocks to handle different types of exceptions.
*   **`finally` Block (Optional):**  Contains code that will *always* be executed, regardless of whether an exception is thrown or caught.  This is typically used for cleanup operations (e.g., closing files or releasing resources).

```java
public class TryCatchExample {
    public static void main(String[] args) {
        try {
            // Code that might throw an exception
            int result = 10 / 0; // Potential ArithmeticException
            System.out.println("Result: " + result); // This line won't be reached if an exception is thrown
        } catch (ArithmeticException e) {
            // Handle the ArithmeticException
            System.err.println("An arithmetic exception occurred: " + e.getMessage());
        } catch (Exception e) {
            // Catch-all block for other exceptions (less specific)
            System.err.println("An unexpected exception occurred: " + e.getMessage());
        } finally {
            // Code that always executes, regardless of exceptions
            System.out.println("Finally block executed.");
        }

        System.out.println("Program continues..."); // Program execution continues here after handling the exception
    }
}
```

*   **`try-with-resources` (Automatic Resource Management):** Introduced in Java 7, this allows you to declare resources in the `try` statement.  The resources are automatically closed at the end of the `try` block (or when an exception is thrown), even if exceptions occur. This is especially useful for I/O operations.  The resource must implement the `AutoCloseable` interface.

```java
import java.io.*;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("my_file.txt"))) { // Resource declared in try
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            // reader.close() is automatically called here, even if an exception occurs
        } catch (IOException e) {
            System.err.println("IOException: " + e.getMessage());
        }
    }
}
```

### 5. Importance of Exception Handling

*   **Program Stability:** Prevents programs from crashing due to unexpected errors.
*   **Data Integrity:**  Allows programs to maintain data integrity even when errors occur.  For example, a transaction can be rolled back if an exception occurs during a database update.
*   **User Experience:** Provides a better user experience by displaying meaningful error messages instead of abruptly terminating the program.
*   **Debugging:**  Exceptions provide valuable information for debugging, including the type of error, the location in the code where the error occurred, and the call stack.
*   **Maintainability:**  Well-structured exception handling makes code easier to understand and maintain.

### 6. Practice Questions/Exercises

**Question 1:** What is the difference between a checked exception and an unchecked exception in Java? Give an example of each.

**Answer:**

*   **Checked Exception:** Must be handled by the programmer using `try-catch` or declared in the method's `throws` clause. The compiler enforces this. Example: `IOException`.
*   **Unchecked Exception:**  Not required to be handled by the programmer. They often indicate programming errors. The compiler does not enforce handling. Example: `NullPointerException`.

**Question 2:**  Write a Java program that attempts to read an integer from user input. Use a `try-catch` block to handle a `NumberFormatException` if the user enters a non-integer value.

**Answer:**

```java
import java.util.Scanner;

public class NumberFormatHandler {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");

        try {
            String input = scanner.nextLine();
            int number = Integer.parseInt(input);
            System.out.println("You entered: " + number);
        } catch (NumberFormatException e) {
            System.err.println("Invalid input. Please enter a valid integer.");
        } finally {
            scanner.close(); // Always close the scanner
        }
    }
}
```

**Question 3:**  Explain the purpose of the `finally` block in exception handling.  Provide an example.

**Answer:**

The `finally` block contains code that is *always* executed, regardless of whether an exception is thrown or caught in the `try` block. It's typically used for cleanup operations, such as closing files, releasing resources, or resetting state.

*Example:* See the `NumberFormatHandler` example above. The `scanner.close()` call is in the `finally` block, ensuring the `Scanner` object is closed even if the `parseInt` method throws a `NumberFormatException`.  This prevents resource leaks.

**Question 4:**  What are the advantages of using `try-with-resources` statement?

**Answer:**

*   **Automatic Resource Management:**  Ensures that resources are closed automatically, even if exceptions occur, preventing resource leaks.
*   **Simplified Code:**  Reduces boilerplate code for closing resources in `finally` blocks.
*   **Improved Readability:** Makes the code cleaner and easier to understand.

**Question 5:**  What is the difference between `throw` and `throws` keywords in Java?

**Answer:**

*   `throw`: Used to *explicitly throw* an exception from within a method.  It's used to signal an error condition.  `throw new ExceptionType("Error message");`
*   `throws`: Used in the method signature to *declare* that a method might throw a specific exception (or a superclass of that exception).  It indicates that the caller of the method is responsible for handling the exception.  `public void myMethod() throws IOException { ... }`

### 7. Important Points to Remember

*   **Handle Exceptions Appropriately:** Don't just catch exceptions and ignore them.  Handle them in a way that makes sense for your application, such as logging the error, displaying an error message to the user, or retrying the operation.
*   **Catch Specific Exceptions:**  Catch more specific exception types before catching more general types (e.g., catch `FileNotFoundException` before `IOException`).  This allows you to handle different errors in different ways.
*   **Use `finally` for Cleanup:** Use the `finally` block to ensure that resources are always released, even if exceptions occur.  Consider using `try-with-resources` for automatic resource management.
*   **Don't Overuse Exceptions:**  Exceptions should be used for exceptional conditions, not for normal program flow. Avoid using exceptions for control flow, as it can be less efficient than using normal conditional statements.
*   **Document Exceptions:** Document which exceptions your methods might throw, so that callers know how to handle them.
*   **Unchecked Exceptions:** While you don't *have* to catch unchecked exceptions, it's good practice to consider the possibility of them occurring and to take steps to prevent them if possible (e.g., by checking for `null` before accessing an object's members).  Handle them gracefully or prevent them altogether when possible.
