---
title: "throws and finally"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acc3"
status: "completed"
scrapedAt: "2026-05-20T16:29:08.582Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 3: Packages and Interfaces – Packages

## Topic: `throws` and `finally`

### Introduction

This module delves into the concepts of `throws` and `finally` in Java's exception handling mechanism.  These are crucial for writing robust and maintainable code that gracefully handles errors.

### Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the purpose and usage of the `throws` keyword.
*   Explain when and why to use the `throws` keyword.
*   Understand the purpose and usage of the `finally` block.
*   Explain when and why to use the `finally` block.
*   Distinguish between checked and unchecked exceptions and how `throws` applies to each.
*   Understand how `throws` affects method signatures and exception propagation.
*   Write code that utilizes both `throws` and `finally` effectively to handle exceptions.
*   Comprehend the order of execution in `try-catch-finally` blocks.

---

### 1. Understanding the `throws` Keyword

*   **Definition:**  The `throws` keyword is used in a method declaration to specify that the method might throw a particular type of exception. It doesn't handle the exception itself but instead *declares* that the method might throw it and passes the responsibility of handling the exception to the calling method (or higher up the call stack).

*   **Syntax:**

    ```java
    access_modifier return_type method_name(parameter_list) throws ExceptionType1, ExceptionType2, ... {
        // Method body
    }
    ```

    *   `access_modifier`:  e.g., `public`, `private`, `protected`, or default (package-private).
    *   `return_type`: The data type returned by the method (or `void` if it doesn't return anything).
    *   `method_name`:  The name of the method.
    *   `parameter_list`:  The list of parameters the method accepts.
    *   `ExceptionType1, ExceptionType2, ...`:  A comma-separated list of exception classes that the method might throw.

*   **Purpose:**

    *   **Exception Propagation:**  The `throws` keyword allows exceptions to propagate up the call stack until a suitable `try-catch` block is found to handle them.  This is crucial for separating exception handling logic from the core functionality of a method.
    *   **API Design:** It informs users (other developers who use your method) about the potential exceptions they need to be aware of and handle when calling the method.
    *   **Checked vs. Unchecked Exceptions:**  The `throws` keyword is generally *required* for **checked exceptions**.  For **unchecked exceptions**, using `throws` is optional but still good practice for documentation purposes.

*   **Checked vs. Unchecked Exceptions:**

    *   **Checked Exceptions:** These are exceptions that the compiler *forces* you to handle (either with a `try-catch` block or by declaring them in the `throws` clause).  They typically represent foreseeable problems that a well-written program should anticipate and recover from (e.g., `IOException`, `SQLException`).  The Java compiler *enforces* the handling of these exceptions.
    *   **Unchecked Exceptions (Runtime Exceptions):** These are exceptions that the compiler *does not* force you to handle. They typically represent programming errors or conditions that are often difficult or impossible to recover from gracefully (e.g., `NullPointerException`, `ArrayIndexOutOfBoundsException`, `IllegalArgumentException`).  They are subclasses of `RuntimeException`.  While you *can* still use `try-catch` and `throws` with these, it's not mandatory.  The assumption is that it's usually better to fix the code to prevent these exceptions from occurring in the first place.

*   **Example:**

    ```java
    import java.io.BufferedReader;
    import java.io.FileReader;
    import java.io.IOException;

    public class ThrowsExample {

        public static String readFile(String filePath) throws IOException {
            BufferedReader br = new BufferedReader(new FileReader(filePath));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                sb.append(line).append("\n");
            }
            br.close();
            return sb.toString();
        }

        public static void main(String[] args) {
            try {
                String fileContent = readFile("myFile.txt"); // Might throw IOException
                System.out.println(fileContent);
            } catch (IOException e) {
                System.err.println("Error reading file: " + e.getMessage());
            }
        }
    }
    ```

    In this example:

    *   The `readFile` method declares that it `throws IOException`. This means that if an `IOException` occurs (e.g., the file doesn't exist), the method will not handle it internally. Instead, it passes the exception to the `main` method.
    *   The `main` method calls `readFile` inside a `try-catch` block to handle the potential `IOException`. If the exception occurs, the `catch` block will execute, printing an error message.

*   **Important Points:**

    *   If a method overrides a method that declares exceptions in its `throws` clause, the overriding method can declare the *same* exceptions, *subclasses* of those exceptions, or *no* exceptions at all.  It *cannot* declare new checked exceptions that were not present in the parent method's `throws` clause. (This maintains the Liskov Substitution Principle.)  Unchecked exceptions can always be thrown regardless.
    *   If a method doesn't throw the exception, the `throws` clause is effectively a contract.  The method *could* throw the exception under certain circumstances, and the caller must be prepared to handle it.

### 2. Understanding the `finally` Block

*   **Definition:** The `finally` block is a block of code that is *always* executed after the `try` block, *regardless* of whether an exception was thrown or caught.  It follows a `try` block and can optionally be followed by one or more `catch` blocks.

*   **Syntax:**

    ```java
    try {
        // Code that might throw an exception
    } catch (ExceptionType e) {
        // Code to handle the exception
    } finally {
        // Code that will always be executed
    }
    ```

    (The `catch` block(s) are optional, but you must have a `finally` block if you don't have any `catch` blocks.)

*   **Purpose:**

    *   **Resource Cleanup:** The primary purpose of the `finally` block is to ensure that resources are released or cleaned up properly, even if an exception occurs.  This is crucial for preventing resource leaks (e.g., closing files, closing database connections, releasing locks).
    *   **Guaranteed Execution:**  The `finally` block guarantees that the code within it will be executed, no matter what happens in the `try` block. This is essential for ensuring critical cleanup tasks are performed.

*   **Order of Execution in `try-catch-finally`:**

    1.  The code in the `try` block is executed.
    2.  If an exception occurs within the `try` block that matches the type of exception in a `catch` block:
        *   The corresponding `catch` block is executed.
    3.  *Regardless* of whether an exception occurred or was caught, the `finally` block is *always* executed.

*   **Scenarios:**

    *   **No Exception:** If no exception occurs in the `try` block, the code in the `try` block is executed, and then the `finally` block is executed.
    *   **Exception Caught:** If an exception occurs in the `try` block and is caught by a `catch` block, the `catch` block is executed, and then the `finally` block is executed.
    *   **Exception Not Caught:** If an exception occurs in the `try` block and is *not* caught by any `catch` block, the `finally` block is executed, and then the exception is re-thrown and propagated up the call stack.
    *   **`return` Statement in `try` or `catch`:** If a `return` statement is encountered in the `try` or `catch` block, the `finally` block will still be executed *before* the method actually returns.

*   **Example:**

    ```java
    import java.io.FileInputStream;
    import java.io.IOException;

    public class FinallyExample {

        public static void main(String[] args) {
            FileInputStream fis = null;
            try {
                fis = new FileInputStream("myFile.txt");
                int data = fis.read();
                while (data != -1) {
                    System.out.print((char) data);
                    data = fis.read();
                }
            } catch (IOException e) {
                System.err.println("Error reading file: " + e.getMessage());
            } finally {
                try {
                    if (fis != null) {
                        fis.close(); // Always close the file
                    }
                } catch (IOException e) {
                    System.err.println("Error closing file: " + e.getMessage());
                }
                System.out.println("\nFinally block executed.");
            }
        }
    }
    ```

    In this example:

    *   The `FileInputStream` is opened in the `try` block.
    *   If an `IOException` occurs (e.g., the file doesn't exist, or there's a read error), the `catch` block will print an error message.
    *   The `finally` block *always* tries to close the `FileInputStream`, even if an exception occurred or if the file was read successfully. This prevents a resource leak (the file handle remaining open).  It's important to handle any potential exceptions within the `finally` block itself (in this case, the potential `IOException` when closing the file).

*   **Important Points:**

    *   If an exception is thrown in the `finally` block, it can mask the original exception.  Be careful to handle exceptions properly within the `finally` block.
    *   Avoid using `return` statements within the `finally` block unless absolutely necessary, as they can override the return value of the `try` or `catch` block, potentially leading to unexpected behavior.

### 3. Combining `throws` and `finally`

You will often use `throws` and `finally` together.  A method can `throw` an exception that a calling method catches, and the calling method's `finally` block ensures cleanup.

```java
import java.io.*;

public class ThrowsFinallyExample {

    public static String processFile(String filePath) throws IOException {
        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader(filePath));
            return br.readLine(); // Read the first line
        } finally {
            try {
                if (br != null) {
                    br.close(); // Ensure the BufferedReader is closed
                }
            } catch (IOException e) {
                System.err.println("Error closing BufferedReader: " + e.getMessage());
            }
        }
    }

    public static void main(String[] args) {
        try {
            String firstLine = processFile("myFile.txt");
            System.out.println("First line: " + firstLine);
        } catch (IOException e) {
            System.err.println("Error processing file: " + e.getMessage());
        }
    }
}
```

In this example:

*   `processFile` uses `throws IOException` to indicate it *might* throw an `IOException`.
*   The `finally` block in `processFile` *always* closes the `BufferedReader` to prevent a resource leak.
*   The `main` method uses a `try-catch` block to handle the potential `IOException` thrown by `processFile`.

### Practice Questions and Exercises

1.  **Question:** Explain the difference between checked and unchecked exceptions, and how the `throws` keyword relates to them.

    **Answer:** Checked exceptions are exceptions that the compiler forces you to handle (either with `try-catch` or `throws`). Unchecked exceptions are exceptions that the compiler does not force you to handle (subclasses of `RuntimeException`). The `throws` keyword is *required* for checked exceptions in a method declaration to indicate that the method might throw that exception. It is optional for unchecked exceptions but recommended for documentation.

2.  **Question:** Write a method that reads data from a database and uses a `finally` block to ensure the database connection is closed, regardless of whether an exception occurs.  Assume a `DatabaseConnection` class with `connect()` and `close()` methods exists, and `connect()` can throw a `SQLException`.

    **Answer:**

    ```java
    import java.sql.SQLException;

    public class DatabaseExample {

        public static void processData() throws SQLException {
            DatabaseConnection conn = null;
            try {
                conn = new DatabaseConnection();
                conn.connect();
                // Perform database operations here
                System.out.println("Database operations successful.");
            } finally {
                if (conn != null) {
                    try {
                        conn.close();
                    } catch (SQLException e) {
                        System.err.println("Error closing database connection: " + e.getMessage());
                    }
                }
            }
        }

        public static void main(String[] args) {
            try {
                processData();
            } catch (SQLException e) {
                System.err.println("Error processing database data: " + e.getMessage());
            }
        }
    }

    class DatabaseConnection {
        public void connect() throws SQLException {
            // Simulate connecting to a database
            System.out.println("Connecting to database...");
            // throw new SQLException("Connection failed"); // Simulate a connection error
        }

        public void close() throws SQLException {
            // Simulate closing the database connection
            System.out.println("Closing database connection...");
        }
    }
    ```

3.  **Question:**  What is the output of the following code?

    ```java
    public class FinallyReturnExample {
        public static int testFinally() {
            try {
                System.out.println("Try block");
                return 10;
            } finally {
                System.out.println("Finally block");
                return 20;
            }
        }

        public static void main(String[] args) {
            int result = testFinally();
            System.out.println("Result: " + result);
        }
    }
    ```

    **Answer:**

    ```
    Try block
    Finally block
    Result: 20
    ```

    **Explanation:** Even though the `try` block contains a `return` statement, the `finally` block is executed *before* the method actually returns.  The `return` statement in the `finally` block *overrides* the `return` statement in the `try` block.  This is generally bad practice, but it's important to understand how `finally` affects the flow of execution.

4.  **Exercise:** Modify the `ThrowsExample` to include a `finally` block that ensures the `BufferedReader` is closed, even if an `IOException` occurs.

    **Answer:**

    ```java
    import java.io.BufferedReader;
    import java.io.FileReader;
    import java.io.IOException;

    public class ThrowsExample {

        public static String readFile(String filePath) throws IOException {
            BufferedReader br = null;
            try {
                br = new BufferedReader(new FileReader(filePath));
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) {
                    sb.append(line).append("\n");
                }
                return sb.toString();
            } finally {
                try {
                    if (br != null) {
                        br.close();
                    }
                } catch (IOException e) {
                    System.err.println("Error closing BufferedReader: " + e.getMessage());
                }
            }
        }

        public static void main(String[] args) {
            try {
                String fileContent = readFile("myFile.txt"); // Might throw IOException
                System.out.println(fileContent);
            } catch (IOException e) {
                System.err.println("Error reading file: " + e.getMessage());
            }
        }
    }
    ```

---

### Summary - Important Points to Remember

*   `throws` declares that a method *might* throw an exception, pushing the responsibility to the caller.
*   `finally` ensures a block of code *always* executes, typically for resource cleanup.
*   Use `throws` for checked exceptions when you don't want to handle them within the method.
*   Use `finally` to guarantee resource cleanup, even if exceptions occur.
*   Be cautious about `return` statements within `finally` blocks as they can override other `return` values.
*   Handle exceptions within the `finally` block itself to avoid masking the original exception.
*   The `finally` block always executes after the `try` or `catch` blocks, even if they contain `return`, `break`, or `continue` statements.

This module has provided a comprehensive overview of the `throws` and `finally` keywords in Java. Mastering these concepts is essential for writing robust and reliable code that handles exceptions gracefully and prevents resource leaks. Remember to practice writing code that uses these keywords to solidify your understanding. Good luck!
