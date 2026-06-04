---
title: "throws and finally."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6a1"
status: "completed"
scrapedAt: "2026-05-23T17:51:48.528Z"
---
# Module 3: More Features of Java: `throws` and `finally`

## Introduction

This module delves into crucial aspects of Java's error handling mechanisms, specifically focusing on the `throws` keyword and the `finally` block. Understanding these concepts is vital for writing robust, reliable, and well-behaved Java applications. Exception handling is a fundamental part of writing good Java code, allowing you to gracefully manage unexpected situations that can disrupt the normal flow of program execution.

**Course Outcomes Addressed:**
*   **CO3:** Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files. (Knowledge Level: K3)

## 1. The `throws` Keyword

The `throws` keyword is used in a method signature to declare that the method *might* throw one or more types of checked exceptions. It signals to the caller of the method that they are responsible for handling these potential exceptions.

### Key Concepts and Definitions:

*   **Checked Exceptions:** These are exceptions that the Java compiler forces you to handle. They typically represent recoverable conditions that are outside the normal program flow but are not necessarily programming errors. Examples include `IOException`, `FileNotFoundException`, `ClassNotFoundException`, etc.
*   **Unchecked Exceptions (Runtime Exceptions):** These exceptions are not required to be declared using `throws` or caught using `try-catch`. They usually indicate programming errors. Examples include `NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException`, etc.
*   **Method Signature:** The part of a method declaration that includes the method name, the number and types of its parameters, and the return type.
*   **Exception Propagation:** If an exception is not caught within a method, it "propagates" up the call stack to the calling method. If it reaches the `main` method and is still not caught, the program will terminate.

### How `throws` Works:

1.  **Declaration:** When you declare a method with `throws ExceptionType1, ExceptionType2, ...`, you are essentially saying, "This method might throw these specific types of exceptions."
2.  **Delegation of Responsibility:** The responsibility of handling these declared exceptions is passed on to the method that calls this method. The calling method must either:
    *   Catch the exception using a `try-catch` block.
    *   Declare that it also `throws` the exception.
    *   Use `try-finally` or `try-with-resources` (for `AutoCloseable` resources).

### Syntax:

```java
return_type method_name(parameter_list) throws ExceptionType1, ExceptionType2, ... {
    // method body
}
```

### Examples:

Let's consider a scenario where we want to read a file. File operations can lead to `FileNotFoundException` (a checked exception).

**Example 1: Declaring `throws`**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileHandler {

    // This method declares that it might throw IOException
    public void readFileContent(String filePath) throws IOException {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(filePath));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } finally {
            // Ensure the reader is closed even if an exception occurs
            if (reader != null) {
                reader.close(); // close() can also throw IOException
            }
        }
    }

    public static void main(String[] args) {
        FileHandler handler = new FileHandler();
        String existingFile = "my_document.txt";
        String nonExistentFile = "non_existent.txt";

        // Call the method and handle the declared exception
        try {
            System.out.println("Attempting to read: " + existingFile);
            handler.readFileContent(existingFile);
        } catch (IOException e) {
            System.err.println("Error reading file '" + existingFile + "': " + e.getMessage());
        }

        System.out.println("\n--------------------\n");

        // Call the method for a file that doesn't exist
        try {
            System.out.println("Attempting to read: " + nonExistentFile);
            handler.readFileContent(nonExistentFile);
        } catch (IOException e) {
            System.err.println("Error reading file '" + nonExistentFile + "': " + e.getMessage());
            // e.printStackTrace(); // More detailed error information
        }
    }
}
```

**Explanation:**

*   The `readFileContent` method declares `throws IOException`. This means any code calling `readFileContent` *must* either catch `IOException` or also declare `throws IOException`.
*   In the `main` method, we use a `try-catch` block to handle the `IOException` that `readFileContent` might throw.
*   If `my_document.txt` exists, it will be read. If it doesn't exist, a `FileNotFoundException` (a subclass of `IOException`) will be thrown, and the `catch` block will execute.

**Example 2: Chaining `throws`**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.FileNotFoundException;

public class FileReaderService {

    // This method calls another method that throws IOException
    public void processFile(String filePath) throws FileNotFoundException, IOException {
        BufferedReader reader = null;
        try {
            reader = new FileReader(filePath); // Can throw FileNotFoundException
            // ... read operations ...
        } finally {
            if (reader != null) {
                reader.close(); // Can throw IOException
            }
        }
    }

    // This method calls processFile and further propagates the exceptions
    public void serveFile(String path) throws IOException { // Catches FileNotFoundException implicitly as it's an IOException
        processFile(path);
    }

    public static void main(String[] args) {
        FileReaderService service = new FileReaderService();
        try {
            service.serveFile("some_file.txt");
        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}
```

**Explanation:**

*   `processFile` declares that it can throw `FileNotFoundException` and `IOException`.
*   `serveFile` calls `processFile` and declares `throws IOException`. Since `FileNotFoundException` is a subclass of `IOException`, declaring `throws IOException` in `serveFile` covers both possibilities from `processFile`.
*   The `main` method catches `IOException`, handling any `FileNotFoundException` or other `IOException` thrown by `serveFile`.

### Important Points to Remember about `throws`:

*   **Checked vs. Unchecked:** `throws` is primarily used for checked exceptions. You *can* declare that a method throws an unchecked exception, but it's generally not necessary or conventional.
*   **Not Catching:** `throws` is an alternative to catching an exception within the method itself.
*   **Call Stack:** It propagates the exception up the call stack.
*   **`Error` Class:** You generally should not declare that your methods throw `Error` subclasses (like `OutOfMemoryError`), as these indicate serious problems with the JVM.
*   **Abstraction:** Using `throws` can help abstract away the low-level error handling details from the caller, allowing them to focus on the core logic.

**Textbook Reference:**
*   **Java: The Complete Reference by Herbert Schildt:** Chapter on Exception Handling discusses `throws` extensively, explaining its role in exception propagation and declaration.
*   **Java How to Program by Deitel & Deitel:** This textbook provides a thorough explanation of checked exceptions and how `throws` is used to indicate potential exceptions.

## 2. The `finally` Block

The `finally` block is an essential part of Java's exception handling. It contains code that *always* executes, regardless of whether an exception was thrown or caught within the `try` block. It's commonly used for cleanup operations.

### Key Concepts and Definitions:

*   **Cleanup Operations:** Tasks like closing files, releasing network connections, closing database connections, or freeing up system resources that must be performed regardless of the program's execution path.
*   **Guaranteed Execution:** The code within the `finally` block is guaranteed to execute, even if:
    *   No exception is thrown in the `try` block.
    *   An exception is thrown and caught in a `catch` block.
    *   An exception is thrown and *not* caught.
    *   The `try` block is exited via a `return`, `break`, or `continue` statement.

### How `finally` Works:

The `finally` block is associated with a `try` block. It can be used with one or more `catch` blocks or even without any `catch` blocks.

### Syntax:

```java
try {
    // Code that might throw an exception
} catch (ExceptionType1 e1) {
    // Handle exception 1
} catch (ExceptionType2 e2) {
    // Handle exception 2
} finally {
    // Code that will always execute (cleanup)
}
```

Or without `catch` blocks:

```java
try {
    // Code that might throw an exception
} finally {
    // Code that will always execute (cleanup)
}
```

### Examples:

**Example 1: `finally` with `try-catch`**

```java
public class FinallyExample1 {

    public static void main(String[] args) {
        int[] numbers = {10, 20, 30};

        try {
            System.out.println("Accessing element at index 1:");
            System.out.println("Value: " + numbers[1]); // No exception here

            System.out.println("Accessing element at index 5:");
            System.out.println("Value: " + numbers[5]); // This will throw ArrayIndexOutOfBoundsException

            System.out.println("This line will not be printed.");

        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("Caught an exception: " + e.getMessage());
        } finally {
            System.out.println("This is the finally block. It always executes.");
        }

        System.out.println("Program continues after the try-catch-finally block.");
    }
}
```

**Output:**

```
Accessing element at index 1:
Value: 20
Accessing element at index 5:
Caught an exception: Index 5 out of bounds for length 3
This is the finally block. It always executes.
Program continues after the try-catch-finally block.
```

**Explanation:**

*   The `try` block attempts to access array elements.
*   `numbers[1]` executes successfully.
*   `numbers[5]` throws an `ArrayIndexOutOfBoundsException`, which is caught by the `catch` block.
*   Crucially, the `finally` block executes *after* the `catch` block, printing its message.
*   The program then continues to the statement after the entire `try-catch-finally` structure.

**Example 2: `finally` with `return` in `try`**

```java
public class FinallyExample2 {

    public static int demonstrateFinallyWithReturn() {
        try {
            System.out.println("Inside try block.");
            return 10; // Attempting to return from try
        } finally {
            System.out.println("Inside finally block.");
            // Even though we return from try, finally will execute before the return value is actually passed back.
        }
    }

    public static void main(String[] args) {
        int result = demonstrateFinallyWithReturn();
        System.out.println("Return value: " + result);
    }
}
```

**Output:**

```
Inside try block.
Inside finally block.
Return value: 10
```

**Explanation:**

*   Even though the `try` block contains a `return` statement, the `finally` block executes *before* the method actually returns the value `10`. This ensures cleanup code runs.

**Example 3: `finally` with `return` in `finally` (Discouraged)**

```java
public class FinallyExample3 {

    public static int demonstrateFinallyWithReturnInFinally() {
        try {
            System.out.println("Inside try block.");
            // Integer.parseInt("abc"); // Uncomment to see exception case
            return 10;
        } finally {
            System.out.println("Inside finally block.");
            return 20; // Returning from finally overrides the return from try!
        }
    }

    public static void main(String[] args) {
        int result = demonstrateFinallyWithReturnInFinally();
        System.out.println("Return value: " + result);
    }
}
```

**Output (with `return 10;` in try):**

```
Inside try block.
Inside finally block.
Return value: 20
```

**Explanation:**

*   If a `return` statement is present in the `finally` block, it will **override** any `return` statement in the `try` or `catch` blocks. This can lead to confusing behavior and is generally discouraged.

**Example 4: `finally` with `try-with-resources` (Java 7+)**

Java 7 introduced the `try-with-resources` statement, which simplifies resource management and implicitly handles `finally` blocks for resources that implement `AutoCloseable`.

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesExample {

    public static void main(String[] args) {
        String filePath = "my_document.txt"; // Make sure this file exists for successful execution

        // Using try-with-resources
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            System.out.println("Reading file using try-with-resources:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            // No explicit reader.close() needed here!
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
        System.out.println("Resource is automatically closed.");
    }
}
```

**Explanation:**

*   The `BufferedReader` is declared within the parentheses of the `try` statement.
*   The compiler automatically generates a `finally` block that calls `reader.close()`.
*   This is the preferred way to handle resources that need closing.

### Important Points to Remember about `finally`:

*   **Guaranteed Execution:** It is the primary purpose of `finally`.
*   **Resource Management:** Essential for closing resources.
*   **Order of Execution:** `finally` executes after `try` or `catch`, but before control is passed out of the `try-catch-finally` structure (e.g., by `return`, `break`, `continue`).
*   **Return in `finally`:** Avoid returning from a `finally` block, as it can mask exceptions or return values from the `try`/`catch` blocks.
*   **`try-with-resources`:** For resources implementing `AutoCloseable`, `try-with-resources` is generally preferred over explicit `finally` blocks for closing.

**Textbook Reference:**
*   **Java: The Complete Reference by Herbert Schildt:** Chapter on Exception Handling thoroughly explains the `finally` block and its behavior in various scenarios.
*   **Java How to Program by Deitel & Deitel:** Provides detailed examples of using `finally` for resource cleanup, illustrating its importance in creating robust code.
*   **Introduction to Java Programming by Y. Daniel Liang:** Discusses `finally` in the context of exception handling and its role in ensuring critical operations are performed.

## 3. Relationship between `throws`, `try-catch`, and `finally`

These three constructs work together to create a robust exception handling strategy:

*   **`try`:** Encloses the code that might cause an exception.
*   **`catch`:** Handles specific types of exceptions if they occur in the `try` block.
*   **`throws`:** Declares that a method might throw an exception, passing the responsibility to the caller.
*   **`finally`:** Contains code that *must* execute, regardless of whether an exception occurred or was caught, typically for cleanup.

**How they interact:**

1.  If an exception occurs in the `try` block:
    *   Execution of the `try` block is immediately terminated.
    *   The Java runtime searches for a matching `catch` block.
    *   If a `catch` block is found, it executes.
    *   The `finally` block *always* executes after the `try` or `catch` block.
    *   If no `catch` block handles the exception, and the method is not declared to `throws` it, the exception propagates up the call stack.
2.  If no exception occurs in the `try` block:
    *   The `catch` blocks are skipped.
    *   The `finally` block *always* executes.

**Example illustrating interaction:**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CombinedExceptionHandling {

    // Method that might throw an exception and declares it
    public void processFile(String filePath) throws IOException {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(filePath));
            String line = reader.readLine();
            if (line == null) {
                throw new IOException("File is empty"); // Throwing a checked exception
            }
            System.out.println("First line: " + line);
        }
        // No catch block here in this method
        finally {
            System.out.println("Closing reader in processFile's finally block.");
            if (reader != null) {
                reader.close(); // This close() can also throw IOException
            }
        }
    }

    public static void main(String[] args) {
        CombinedExceptionHandling handler = new CombinedExceptionHandling();
        String validFile = "my_document.txt";
        String emptyFile = "empty.txt"; // Assume this file exists but is empty
        String nonExistentFile = "non_existent.txt";

        // Scenario 1: Valid file
        System.out.println("--- Processing valid file ---");
        try {
            handler.processFile(validFile);
        } catch (IOException e) {
            System.err.println("Caught exception in main: " + e.getMessage());
        }

        System.out.println("\n--------------------\n");

        // Scenario 2: Empty file (throws IOException from processFile)
        System.out.println("--- Processing empty file ---");
        try {
            handler.processFile(emptyFile);
        } catch (IOException e) {
            System.err.println("Caught exception in main: " + e.getMessage());
        }

        System.out.println("\n--------------------\n");

        // Scenario 3: Non-existent file (throws FileNotFoundException from FileReader)
        System.out.println("--- Processing non-existent file ---");
        try {
            handler.processFile(nonExistentFile);
        } catch (IOException e) { // Catches both FileNotFoundException and our custom IOException
            System.err.println("Caught exception in main: " + e.getMessage());
        }
    }
}
```

**Explanation:**

*   `processFile` uses `try-finally` to ensure the `reader.close()` is always called. It declares `throws IOException` to pass the responsibility up.
*   The `main` method uses `try-catch` to handle the `IOException` propagated from `processFile`.
*   In all scenarios, the "Closing reader..." message from the `finally` block in `processFile` is displayed, demonstrating its guaranteed execution.

**Course Outcome Alignment:**

*   **CO3:** This entire module directly addresses CO3 by explaining how `throws` and `finally` (as part of the exception handling mechanism) contribute to writing robust Java programs. The examples illustrate how to manage potential errors, ensuring that resources are cleaned up, making the programs more resilient.

## Practice Questions

**Question 1:**
What is the primary purpose of the `throws` keyword in a Java method signature?
a) To catch and handle exceptions.
b) To declare that a method might throw certain exceptions and pass the responsibility to the caller.
c) To guarantee the execution of a block of code.
d) To automatically close resources.

**Question 2:**
Which of the following is NOT guaranteed to execute if placed inside a `finally` block?
a) Code that prints a message to the console.
b) Code that closes a file stream.
c) Code that executes after a `return` statement in the `try` block.
d) Code that executes after an exception is thrown and caught.

**Question 3:**
Consider the following code snippet:

```java
public void doSomething() throws IllegalArgumentException {
    if (true) { // Assume some condition
        throw new IllegalArgumentException("Invalid argument!");
    }
}

public static void main(String[] args) {
    try {
        // What should go here to call doSomething?
    } catch (IllegalArgumentException e) {
        System.out.println("Handled: " + e.getMessage());
    }
}
```
What should be placed in the `// What should go here` comment to correctly call `doSomething` and handle the potential `IllegalArgumentException`?
a) `doSomething();`
b) `new MyClass().doSomething();` (assuming `doSomething` is in `MyClass`)
c) `try { doSomething(); } catch (IllegalArgumentException e) {}`
d) `new MyClass().doSomething();` (assuming `doSomething` is in `MyClass` and the main method is within `MyClass`)

**Question 4:**
Explain the difference between checked and unchecked exceptions in Java and how the `throws` keyword relates to them.

**Question 5:**
Write a Java program that demonstrates the use of `finally` to ensure a database connection is closed, even if an error occurs during a query operation.

## Answers to Practice Questions

**Answer 1:**
b) To declare that a method might throw certain exceptions and pass the responsibility to the caller.
*   `finally` is for guaranteed execution.
*   `try-catch` is for handling exceptions.
*   `try-with-resources` is for automatic resource closing.

**Answer 2:**
None of the above. All code within a `finally` block is *guaranteed* to execute unless the JVM itself terminates abruptly (e.g., `System.exit()` or a severe system error). The `finally` block executes even if:
*   A `return` statement is in the `try` or `catch` block.
*   An exception occurs and is caught.
*   An exception occurs and is not caught (it propagates *after* `finally` executes).

**Answer 3:**
d) `new MyClass().doSomething();` (assuming `doSomething` is in `MyClass` and the main method is within `MyClass`)
The `main` method in the example is likely inside a class. If `doSomething` is an instance method in the same class, calling `doSomething()` is sufficient. If it's in a different class, `new MyClass().doSomething()` would be correct. The `try-catch` around the call is handled by the `main` method itself. The `throws` in `doSomething` means the *caller* (in this case, `main`) must handle it.

**Answer 4:**
*   **Checked Exceptions:** These are exceptions that the compiler forces you to handle. They typically represent conditions that a program should anticipate and recover from, like `IOException` or `FileNotFoundException`. Methods that can throw checked exceptions must either catch them or declare that they `throws` them.
*   **Unchecked Exceptions (Runtime Exceptions):** These are exceptions that occur due to programming errors, such as `NullPointerException` or `ArrayIndexOutOfBoundsException`. The compiler does not force you to handle them, though you can choose to.
*   **Relation to `throws`:** The `throws` keyword is primarily used to declare that a method might throw *checked* exceptions. While you can use `throws` to declare unchecked exceptions, it's generally not necessary or good practice as they indicate bugs that should be fixed rather than handled by callers.

**Answer 5:**

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

public class DatabaseCleanup {

    public static void main(String[] args) {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            // --- Database Connection ---
            // Replace with your actual database connection details
            String dbUrl = "jdbc:mysql://localhost:3306/mydatabase";
            String dbUser = "username";
            String dbPassword = "password";

            System.out.println("Attempting to connect to the database...");
            connection = DriverManager.getConnection(dbUrl, dbUser, dbPassword);
            System.out.println("Database connection established.");

            // --- Executing a Query ---
            statement = connection.createStatement();
            String query = "SELECT * FROM users"; // Example query
            System.out.println("Executing query: " + query);
            resultSet = statement.executeQuery(query);

            // --- Processing Results ---
            System.out.println("Query executed successfully. Processing results...");
            while (resultSet.next()) {
                // Process each row
                System.out.println("User: " + resultSet.getString("username")); // Assuming a 'username' column
            }

        } catch (SQLException e) {
            System.err.println("A database error occurred: " + e.getMessage());
            // e.printStackTrace(); // Uncomment for detailed error
        } finally {
            System.out.println("Executing finally block for cleanup.");
            // --- Resource Cleanup ---
            try {
                if (resultSet != null) {
                    resultSet.close();
                    System.out.println("ResultSet closed.");
                }
            } catch (SQLException e) {
                System.err.println("Error closing ResultSet: " + e.getMessage());
            }
            try {
                if (statement != null) {
                    statement.close();
                    System.out.println("Statement closed.");
                }
            } catch (SQLException e) {
                System.err.println("Error closing Statement: " + e.getMessage());
            }
            try {
                if (connection != null) {
                    connection.close();
                    System.out.println("Database connection closed.");
                }
            } catch (SQLException e) {
                System.err.println("Error closing Connection: " + e.getMessage());
            }
        }
        System.out.println("Program finished.");
    }
}
```
**Explanation of the `finally` block:**
The `finally` block in this example is designed to close the `ResultSet`, `Statement`, and `Connection` objects. Each `close()` operation can potentially throw a `SQLException`, so each `close()` call is wrapped in its own `try-catch` block. This ensures that even if closing one resource fails, the program will still attempt to close the other resources. This exemplifies the guaranteed execution of the `finally` block for critical cleanup tasks.

This concludes the study notes for `throws` and `finally` in Java. Mastering these concepts is a significant step towards writing robust and error-resilient Java applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
