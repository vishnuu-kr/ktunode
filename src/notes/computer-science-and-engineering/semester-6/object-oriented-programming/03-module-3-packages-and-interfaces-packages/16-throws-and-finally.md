---
title: "throws and finally"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces  – Packages "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfbd"
status: "completed"
scrapedAt: "2026-05-20T16:56:27.253Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 3: Packages and Interfaces

### Topic: `throws` and `finally`

This section delves into two crucial aspects of exception handling in Java: the `throws` keyword and the `finally` block. Understanding these concepts is vital for writing robust and resilient Java applications.

---

### Learning Outcomes Covered:

*   **Understanding the `throws` keyword:** How to declare that a method might throw an exception.
*   **Purpose of `throws`:** Specifying potential exceptions to the caller, enabling them to handle them.
*   **Checked vs. Unchecked Exceptions:** Differentiating between them and how `throws` applies.
*   **The `finally` block:** Its role in ensuring code execution regardless of exceptions.
*   **Usage of `finally`:** How to guarantee cleanup operations.
*   **Interaction between `throws` and `finally`:** How they work together in exception handling scenarios.

---

## 1. The `throws` Keyword

The `throws` keyword is used in a method signature to declare that the method *might* throw one or more exceptions. It's essentially a promise to the calling code that it needs to be prepared to handle these specific exceptions.

### Key Concepts and Definitions:

*   **Exception Declaration:** `throws` is used to declare exceptions that a method can throw.
*   **Method Signature:** It's part of the method's declaration, appearing after the parameter list and before the method body.
*   **Propagating Exceptions:** When a method declares `throws`, it doesn't handle the exception itself. Instead, it passes the responsibility of handling it up the call stack to the method that invoked it.
*   **Checked vs. Unchecked Exceptions:**
    *   **Checked Exceptions:** These are exceptions that the Java compiler *forces* you to handle. If a method can throw a checked exception, it **must** either catch it or declare it using `throws`. Examples include `IOException`, `FileNotFoundException`, `ClassNotFoundException`.
    *   **Unchecked Exceptions (Runtime Exceptions):** These are exceptions that the compiler does not force you to handle. They typically arise from programming errors or unexpected conditions at runtime. Examples include `NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException`.
        *   **Important Point:** While you *can* use `throws` with unchecked exceptions, it's generally not recommended unless you have a specific reason to delegate the handling. The primary use of `throws` is for checked exceptions.

### Syntax:

```java
returnType methodName(parameters) throws ExceptionType1, ExceptionType2, ... {
    // Method body
    // May throw exceptions
}
```

### Examples:

**Example 1: Declaring `FileNotFoundException` (Checked Exception)**

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileProcessor {

    // This method declares that it might throw FileNotFoundException
    public void readFileContent(String filePath) throws FileNotFoundException {
        File file = new File(filePath);
        Scanner scanner = new Scanner(file); // This line can throw FileNotFoundException

        while (scanner.hasNextLine()) {
            System.out.println(scanner.nextLine());
        }
        scanner.close();
    }

    public static void main(String[] args) {
        FileProcessor processor = new FileProcessor();
        String fileName = "mydata.txt";

        try {
            processor.readFileContent(fileName); // Caller must handle or declare FileNotFoundException
        } catch (FileNotFoundException e) {
            System.err.println("Error: File not found at " + fileName);
            // Handle the exception appropriately (e.g., create the file, inform user)
        }
    }
}
```

**Explanation:**

*   The `readFileContent` method declares `throws FileNotFoundException`.
*   The `main` method calls `readFileContent`.
*   Since `readFileContent` declared the exception, the `main` method is obligated to handle it using a `try-catch` block.

**Example 2: Declaring Multiple Exceptions**

```java
public class DataHandler {

    public void processData(String data) throws IllegalArgumentException, NullPointerException {
        if (data == null) {
            throw new NullPointerException("Input data cannot be null.");
        }
        if (data.length() < 5) {
            throw new IllegalArgumentException("Input data must be at least 5 characters long.");
        }
        System.out.println("Processing: " + data);
    }

    public static void main(String[] args) {
        DataHandler handler = new DataHandler();

        try {
            handler.processData("Hello");
            handler.processData(null); // This will throw NullPointerException
            handler.processData("Short"); // This will throw IllegalArgumentException
        } catch (NullPointerException e) {
            System.err.println("Caught NullPointerException: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.err.println("Caught IllegalArgumentException: " + e.getMessage());
        }
    }
}
```

**Explanation:**

*   `processData` declares that it can throw both `NullPointerException` and `IllegalArgumentException`.
*   The `main` method uses separate `catch` blocks to handle each type of exception.

**Example 3: Using `throws` with Unchecked Exceptions (Less Common)**

```java
public class Calculator {

    // Declaring ArithmeticException, which is unchecked
    public int divide(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        return a / b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        try {
            int result = calc.divide(10, 0); // Will throw ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.err.println("Error during division: " + e.getMessage());
        }
    }
}
```

**Explanation:**

*   While `ArithmeticException` is unchecked, `divide` declares it.
*   The `main` method still needs to handle it because the `throws` clause makes it a declared exception from the perspective of the caller.

---

## 2. The `finally` Block

The `finally` block is a fundamental part of exception handling in Java. It is a block of code that is **always executed**, regardless of whether an exception occurred in the `try` block or if an exception was caught and handled.

### Key Concepts and Definitions:

*   **Guaranteed Execution:** The primary purpose of `finally` is to ensure that essential cleanup code always runs.
*   **Resource Management:** It's commonly used for releasing resources such as closing files, database connections, or network sockets, which might otherwise be left open if an exception occurs.
*   **Execution Scenarios:** The `finally` block executes in the following situations:
    1.  No exception occurs in the `try` block.
    2.  An exception occurs in the `try` block and is caught by a `catch` block.
    3.  An exception occurs in the `try` block but is **not** caught by any `catch` block (it will propagate up the call stack, but `finally` still executes before the exception is re-thrown).
    4.  A `return`, `break`, or `continue` statement is encountered in the `try` block.

### Syntax:

```java
try {
    // Code that might throw an exception
} catch (ExceptionType1 e1) {
    // Handle ExceptionType1
} catch (ExceptionType2 e2) {
    // Handle ExceptionType2
} finally {
    // Code that will always execute
}
```

### Examples:

**Example 1: `finally` for Resource Cleanup**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ResourceCloser {

    public void readFileAndProcess(String filePath) {
        BufferedReader reader = null; // Declare reader outside try for finally access
        try {
            reader = new BufferedReader(new FileReader(filePath));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("Read: " + line);
                // Potential for IOException here (e.g., disk error)
            }
            System.out.println("File read successfully.");
        } catch (IOException e) {
            System.err.println("An error occurred while reading the file: " + e.getMessage());
        } finally {
            // This block will always execute
            if (reader != null) {
                try {
                    reader.close(); // Close the resource
                    System.out.println("BufferedReader closed.");
                } catch (IOException e) {
                    System.err.println("Error closing BufferedReader: " + e.getMessage());
                }
            }
        }
    }

    public static void main(String[] args) {
        ResourceCloser closer = new ResourceCloser();
        closer.readFileAndProcess("sample.txt"); // Assume sample.txt exists or doesn't exist
    }
}
```

**Explanation:**

*   The `BufferedReader` is initialized to `null`.
*   The `try` block attempts to read from the file.
*   The `catch` block handles potential `IOException`s.
*   The `finally` block ensures that `reader.close()` is called, releasing the file handle, even if an exception occurred during reading.
*   **Important Note:** The `finally` block itself might throw an exception (e.g., during `reader.close()`). If this happens, and there was a prior uncaught exception from the `try` block, the exception from `finally` will mask the original exception. This is why the `close()` operation is often wrapped in its own `try-catch`.

**Example 2: `finally` with a `return` statement in `try`**

```java
public class ReturnFinallyDemo {

    public int calculateValue(int input) {
        try {
            if (input < 0) {
                throw new IllegalArgumentException("Input cannot be negative.");
            }
            System.out.println("Inside try block.");
            return input * 2; // Returning from try
        } catch (IllegalArgumentException e) {
            System.err.println("Caught exception: " + e.getMessage());
            return -1; // Returning from catch
        } finally {
            // This will execute EVEN THOUGH a return statement was encountered in try or catch
            System.out.println("Inside finally block.");
        }
    }

    public static void main(String[] args) {
        ReturnFinallyDemo demo = new ReturnFinallyDemo();
        System.out.println("Result for 5: " + demo.calculateValue(5));
        System.out.println("Result for -2: " + demo.calculateValue(-2));
    }
}
```

**Output:**

```
Inside try block.
Inside finally block.
Result for 5: 10
Inside try block.
Inside finally block.
Caught exception: Input cannot be negative.
Result for -2: -1
```

**Explanation:**

*   Even though the `try` block has a `return` statement, the `finally` block is executed before the method actually returns the value.
*   The same applies if a `return` statement is in the `catch` block.

---

## 3. Interaction between `throws` and `finally`

The `throws` keyword and the `finally` block work together to manage exceptions and ensure critical operations.

*   **`throws` delegates:** The `throws` keyword passes the responsibility of handling a declared exception to the caller.
*   **`finally` guarantees execution:** The `finally` block executes regardless of whether the exception declared by `throws` (or any other exception) is caught by the caller.

### Key Points:

*   If a method declares an exception using `throws`, and that exception is thrown within the method's `try` block:
    *   The `finally` block will execute.
    *   If the exception is **not caught** by a `catch` block within the same method, it will be propagated up the call stack as specified by the `throws` clause.
*   **Using `finally` to clean up resources related to exceptions declared by `throws` is a common and effective pattern.**

### Example: Combining `throws` and `finally`

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CombinedExceptionHandling {

    // Declares IOException, a checked exception
    public String readFirstLine(String filePath) throws IOException {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(filePath));
            String firstLine = reader.readLine();
            if (firstLine == null) {
                throw new IOException("File is empty."); // Throwing another IOException
            }
            return firstLine;
        } finally {
            // This will always execute to close the reader
            if (reader != null) {
                try {
                    reader.close();
                    System.out.println("Reader closed in finally block.");
                } catch (IOException e) {
                    // If closing fails, we might have an issue, but the original exception
                    // declared by the method will still propagate if not caught.
                    System.err.println("Error during closing: " + e.getMessage());
                    // Depending on requirements, you might re-throw this or log it.
                }
            }
        }
    }

    public static void main(String[] args) {
        CombinedExceptionHandling handler = new CombinedExceptionHandling();
        String fileName = "myconfig.txt"; // Assume this file exists or doesn't

        try {
            String firstLine = handler.readFirstLine(fileName);
            System.out.println("First line of " + fileName + ": " + firstLine);
        } catch (IOException e) {
            System.err.println("Handling the IOException declared by readFirstLine: " + e.getMessage());
        }
    }
}
```

**Explanation:**

1.  `readFirstLine` declares `throws IOException`.
2.  It attempts to read a line from the file.
3.  The `finally` block ensures the `BufferedReader` is closed, regardless of whether `readLine()` succeeded, returned `null` (which we then handle by throwing an `IOException`), or if the `FileReader` itself caused an `IOException`.
4.  The `main` method catches the `IOException` that `readFirstLine` declared and might throw.

---

## Practice Questions & Exercises:

1.  **Question:** What is the primary purpose of the `throws` keyword in a Java method signature?
    *   **Answer:** The `throws` keyword declares that a method might throw one or more specific exceptions. It signals to the caller that they need to handle these exceptions, either by catching them or by declaring them further up the call stack.

2.  **Question:** Differentiate between a checked exception and an unchecked exception in the context of the `throws` keyword.
    *   **Answer:** For checked exceptions (like `IOException`), the compiler enforces that any method throwing them must either catch them or declare them using `throws`. For unchecked exceptions (like `NullPointerException`), the compiler does not enforce this, so `throws` is optional but can still be used for explicit declaration.

3.  **Question:** What is the main benefit of using a `finally` block?
    *   **Answer:** The main benefit is to guarantee the execution of critical cleanup code (e.g., closing resources) regardless of whether an exception occurred in the `try` block or if it was caught.

4.  **Question:** Consider the following code. What will be printed, and why?

    ```java
    public class TestFinallyReturn {
        public int getValue() {
            try {
                System.out.println("In try");
                return 10;
            } finally {
                System.out.println("In finally");
            }
        }

        public static void main(String[] args) {
            TestFinallyReturn t = new TestFinallyReturn();
            System.out.println("Value: " + t.getValue());
        }
    }
    ```
    *   **Answer:**
        ```
        In try
        In finally
        Value: 10
        ```
        **Explanation:** The `finally` block executes *after* the `return` statement in the `try` block has been prepared to execute, but *before* the method actually returns the value.

5.  **Question:** Write a Java method that attempts to read a character from a specific index of a string. The method should declare that it can throw `IndexOutOfBoundsException` and use a `finally` block to print a message indicating whether the operation was attempted.

    *   **Solution:**

    ```java
    public class StringReader {

        public char readCharAtIndex(String text, int index) throws IndexOutOfBoundsException {
            char result = '\0'; // Default value
            try {
                if (text == null) {
                    throw new NullPointerException("String cannot be null.");
                }
                result = text.charAt(index); // This can throw IndexOutOfBoundsException
                System.out.println("Successfully accessed character at index " + index);
            } finally {
                // This will always execute
                System.out.println("Attempted to read character at index " + index);
            }
            return result;
        }

        public static void main(String[] args) {
            StringReader reader = new StringReader();
            String message = "Hello World";

            try {
                char c1 = reader.readCharAtIndex(message, 6);
                System.out.println("Character is: " + c1);

                char c2 = reader.readCharAtIndex(message, 20); // This will throw IndexOutOfBoundsException
                System.out.println("Character is: " + c2);
            } catch (IndexOutOfBoundsException e) {
                System.err.println("Caught expected exception: " + e.getMessage());
            }
        }
    }
    ```

---

## Important Points to Remember:

*   **`throws` is a declaration, not a handling mechanism.** It informs the caller about potential exceptions.
*   **Checked exceptions must be handled or declared.** Use `throws` for checked exceptions when you cannot or do not want to handle them within the method.
*   **`finally` guarantees execution.** Use it for resource cleanup to prevent leaks.
*   The `finally` block executes even if a `return`, `break`, or `continue` is present in the `try` or `catch` blocks.
*   Be cautious if an exception occurs within the `finally` block itself, as it can mask earlier exceptions. Wrap risky operations within `finally` in their own `try-catch` if necessary.
*   While you *can* declare unchecked exceptions with `throws`, it's generally better to let them propagate naturally or handle them where they occur unless you have a specific design reason to do otherwise.
