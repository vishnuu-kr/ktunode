---
title: "Exception Handling  - Checked Exceptions"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe69b"
status: "completed"
scrapedAt: "2026-05-23T17:51:44.158Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 3: More features of Java

### Topic: Exception Handling - Checked Exceptions

**Learning Outcomes:**

*   Understand the fundamental concept of exception handling in Java.
*   Differentiate between checked and unchecked exceptions.
*   Learn how to declare, throw, and catch checked exceptions.
*   Implement the `try-catch-finally` block for robust error management.
*   Understand the `throws` keyword and its role in propagating exceptions.
*   Apply exception handling techniques to write more reliable Java programs.

**Course Outcomes Alignment:**

*   **CO3 (Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files. - Knowledge Level: K3):** This topic directly addresses the ability to write robust programs by effectively utilizing Java's exception handling mechanisms.

---

### 1. Introduction to Exception Handling

Exceptions are events that occur during the execution of a program that disrupt the normal flow of instructions. In Java, exceptions are objects that represent these runtime errors. Exception handling is a mechanism that allows you to gracefully handle these runtime errors, preventing program crashes and ensuring a more stable application.

**Key Concepts:**

*   **Exception:** An event that disrupts the normal flow of program execution.
*   **Error Handling:** The process of detecting and responding to errors during program execution.
*   **Robustness:** The ability of a program to withstand unexpected situations or invalid inputs without crashing.

**According to Herbert Schildt ("Java: The Complete Reference"),** "An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions. When an exception occurs, the normal flow of the program is interrupted, and the system attempts to find an exception handler to deal with it." (Schildt, 8/e, p. 241).

**According to Paul Deitel and Harvey Deitel ("Java How to Program, Early Objects"),** "Java's exception-handling mechanism allows you to implement robust programs that handle runtime errors gracefully." (Deitel & Deitel, 11th Edition, p. 412).

---

### 2. Types of Exceptions in Java

Java categorizes exceptions into two main types:

*   **Checked Exceptions:** These are exceptions that the Java compiler forces you to handle. If a method can throw a checked exception, you must either catch it or declare that it throws it using the `throws` keyword.
    *   They typically represent errors that are outside the control of the program and are often caused by external factors.
    *   Examples include `IOException`, `FileNotFoundException`, `ClassNotFoundException`, `SQLException`.
    *   These exceptions are subclasses of `Exception` but not subclasses of `RuntimeException`.

*   **Unchecked Exceptions (Runtime Exceptions):** These are exceptions that the Java compiler does not force you to handle. They usually represent programming errors or logical flaws in the code.
    *   Examples include `ArithmeticException` (division by zero), `NullPointerException` (accessing an object that is null), `ArrayIndexOutOfBoundsException` (accessing an array with an invalid index).
    *   These exceptions are subclasses of `RuntimeException` (which itself is a subclass of `Exception`).

**Important Point to Remember:** The primary distinction is that the compiler *checks* for checked exceptions, while it *does not check* for unchecked exceptions.

**Referencing Rajib Mall ("Fundamentals of Software Engineering"):** While not directly about Java's type system, Mall emphasizes the importance of identifying and handling potential failure points in software. Checked exceptions in Java are a language-level mechanism to enforce this by making developers aware of potential failures that need explicit handling.

---

### 3. Checked Exceptions in Detail

**3.1. Characteristics of Checked Exceptions:**

*   Must be either caught using a `try-catch` block or declared using the `throws` keyword in the method signature.
*   Compiler enforces handling.
*   Indicate recoverable errors that are often external to the program's logic.
*   Subclasses of `java.lang.Exception` (excluding `java.lang.RuntimeException`).

**3.2. Handling Checked Exceptions:**

There are two primary ways to handle checked exceptions:

*   **Catching the Exception:** Using a `try-catch` block to intercept and handle the exception.
*   **Declaring the Exception:** Using the `throws` keyword to pass the responsibility of handling the exception to the calling method.

---

### 4. The `try-catch` Block

The `try-catch` block is the fundamental construct for handling exceptions.

**Syntax:**

```java
try {
    // Code that might throw an exception
} catch (ExceptionType1 exceptionVariable1) {
    // Handle exception of type ExceptionType1
} catch (ExceptionType2 exceptionVariable2) {
    // Handle exception of type ExceptionType2
} finally {
    // Optional block that always executes
}
```

**Explanation:**

*   **`try` block:** Contains the code that could potentially throw an exception.
*   **`catch` block:** This block is executed if an exception of the specified `ExceptionType` occurs within the `try` block. You can have multiple `catch` blocks to handle different types of exceptions. The order of `catch` blocks matters; more specific exceptions should be caught before more general ones.
*   **`finally` block (Optional):** This block always executes, regardless of whether an exception occurred or was caught. It is typically used for cleanup operations, such as closing files or releasing resources.

**Example: Reading from a file (demonstrating `FileNotFoundException`)**

`FileNotFoundException` is a checked exception.

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReadExample {

    public static void main(String[] args) {
        BufferedReader reader = null; // Declare reader outside try to access in finally
        try {
            reader = new BufferedReader(new FileReader("nonexistent_file.txt"));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (FileNotFoundException e) { // Catching the specific checked exception
            System.err.println("Error: The file was not found. " + e.getMessage());
        } catch (IOException e) { // Catching a more general checked exception
            System.err.println("An I/O error occurred: " + e.getMessage());
        } finally {
            // Ensure the reader is closed even if an exception occurs
            if (reader != null) {
                try {
                    reader.close();
                    System.out.println("FileReader closed.");
                } catch (IOException e) {
                    System.err.println("Error closing FileReader: " + e.getMessage());
                }
            }
        }
    }
}
```

**Explanation of Example:**

1.  The `try` block attempts to open and read from a file named `"nonexistent_file.txt"`.
2.  If the file doesn't exist, a `FileNotFoundException` is thrown.
3.  The first `catch` block specifically handles `FileNotFoundException`, printing an informative error message.
4.  The second `catch` block handles `IOException`, which is a superclass of `FileNotFoundException`, catching other potential I/O errors.
5.  The `finally` block ensures that if the `BufferedReader` was successfully opened (i.e., `reader` is not `null`), it is closed. Closing a `BufferedReader` can also throw an `IOException`, so it's placed within another `try-catch` inside the `finally` block for robust resource management.

**Referencing Herbert Schildt ("Java: The Complete Reference"):** "The `try` statement asserts that you want to attempt a sequence of operations that might generate an exception. The `catch` statement allows you to intercept and handle an exception... The `finally` block contains code that you want to execute regardless of whether an exception is thrown." (Schildt, 8/e, p. 243).

---

### 5. The `throws` Keyword

The `throws` keyword is used in a method signature to declare that the method might throw one or more checked exceptions. This effectively tells the compiler that the calling method is responsible for handling these exceptions.

**Syntax:**

```java
returnType methodName(parameters) throws ExceptionType1, ExceptionType2 {
    // Method body
    // ... might throw ExceptionType1 or ExceptionType2
}
```

**Example: A method that reads a file and declares it throws `IOException`**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileProcessor {

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
            if (reader != null) {
                reader.close(); // Closing can also throw IOException
            }
        }
    }

    public static void main(String[] args) {
        FileProcessor processor = new FileProcessor();
        String filename = "my_data.txt"; // Assume this file exists or not

        try {
            processor.readFileContent(filename);
            System.out.println("File read successfully.");
        } catch (IOException e) {
            // The calling method (main) handles the IOException
            System.err.println("An error occurred while reading the file: " + e.getMessage());
        }
    }
}
```

**Explanation of Example:**

1.  The `readFileContent` method is declared with `throws IOException`. This means it can potentially throw an `IOException` (or any subclass of `IOException`, like `FileNotFoundException`, if it occurred and wasn't caught internally).
2.  The `main` method calls `readFileContent`. Since `readFileContent` declares `throws IOException`, the `main` method *must* either catch this exception or also declare that it `throws IOException`.
3.  In this case, the `main` method uses a `try-catch` block to handle the `IOException` that might be thrown by `readFileContent`.

**When to use `throws`:**

*   When you want to propagate an exception to the caller, allowing them to decide how to handle it.
*   When your method performs an operation that can throw a checked exception, and you don't want to handle it directly within that method.

**Referencing Deitel & Deitel ("Java How to Program, Early Objects"):** "Methods that cannot recover from an exception they can throw can propagate the exception to their callers. When a method propagates an exception, it uses the `throws` clause to indicate that it can throw the exception." (Deitel & Deitel, 11th Edition, p. 420).

---

### 6. The `throw` Keyword

The `throw` keyword is used to explicitly throw an exception from your code. You can throw either an exception object that you create yourself or an exception object that you catch.

**Syntax:**

```java
throw new ExceptionType(optionalMessage);
```

**Example:**

```java
public class AgeValidator {

    public void validateAge(int age) {
        if (age < 0) {
            // Explicitly throwing a checked exception
            throw new IllegalArgumentException("Age cannot be negative.");
        } else if (age > 120) {
            // Explicitly throwing another checked exception
            throw new IllegalArgumentException("Age seems unusually high.");
        } else {
            System.out.println("Age is valid.");
        }
    }

    public static void main(String[] args) {
        AgeValidator validator = new AgeValidator();
        try {
            validator.validateAge(-5);
        } catch (IllegalArgumentException e) { // IllegalArgumentException is an unchecked exception
            System.err.println("Validation Error: " + e.getMessage());
        }

        try {
            validator.validateAge(150);
        } catch (IllegalArgumentException e) {
            System.err.println("Validation Error: " + e.getMessage());
        }
    }
}
```

**Note on the `throw` example:** `IllegalArgumentException` is an *unchecked* exception. To demonstrate `throw` with a *checked* exception, you would need to create a custom checked exception or throw an existing one like `IOException`.

**Example with a custom checked exception and `throw`:**

First, define a custom checked exception:

```java
// CustomCheckedException.java
public class CustomCheckedException extends Exception { // Extends Exception makes it checked
    public CustomCheckedException(String message) {
        super(message);
    }
}
```

Then, use `throw` with it:

```java
public class CustomErrorThrower {

    // Method that throws our custom checked exception
    public void processData(int value) throws CustomCheckedException {
        if (value < 0) {
            throw new CustomCheckedException("Negative values are not allowed for processing.");
        }
        System.out.println("Processing value: " + value);
    }

    public static void main(String[] args) {
        CustomErrorThrower errorThrower = new CustomErrorThrower();
        try {
            errorThrower.processData(10);
            errorThrower.processData(-20); // This will throw the exception
        } catch (CustomCheckedException e) {
            System.err.println("Caught custom exception: " + e.getMessage());
        }
    }
}
```

**Referencing Y. Daniel Liang ("Introduction to Java Programming"):** "The `throw` statement is used to explicitly throw an exception object. When an exception is thrown, the Java runtime system searches for an appropriate exception handler." (Liang, 7/e, p. 332).

---

### 7. The `try-with-resources` Statement (Java 7+)

This is a more modern and concise way to handle resources that need to be closed (like files, streams, sockets). Any object that implements the `AutoCloseable` interface can be used in a `try-with-resources` statement.

**Syntax:**

```java
try (ResourceType resource1 = initializer1; ResourceType resource2 = initializer2; ...) {
    // Code that uses the resources
} catch (ExceptionType e) {
    // Handle exceptions
}
```

**Example (rewriting the file reading example):**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReadTryWithResources {

    public static void main(String[] args) {
        // The BufferedReader is automatically closed when exiting the try block
        try (BufferedReader reader = new BufferedReader(new FileReader("my_data.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) { // Catches exceptions from FileReader or readLine()
            System.err.println("An I/O error occurred: " + e.getMessage());
        }
        // No need for a finally block to close the reader!
        System.out.println("FileReader is automatically closed.");
    }
}
```

**Benefits of `try-with-resources`:**

*   Automatically closes resources.
*   Eliminates the need for explicit `finally` blocks for resource management, making code cleaner and less error-prone.
*   Handles exceptions thrown during resource closure gracefully.

**Important Point to Remember:** If you are working with Java 7 or later, `try-with-resources` is the preferred way to manage resources that implement `AutoCloseable`.

**Referencing Flanagan D ("Java in A Nutshell"):** "The `try-with-resources` statement is a language feature introduced in Java SE 7 that simplifies the management of resources such as streams, files, and network connections. It ensures that resources are properly closed, even if exceptions occur." (Flanagan, 5/e, p. 215).

---

### 8. Best Practices for Exception Handling

*   **Be Specific:** Catch specific exceptions rather than a generic `Exception`. This allows you to handle different error conditions appropriately.
*   **Don't Swallow Exceptions:** Avoid empty `catch` blocks (`catch(Exception e) {}`) as they hide errors and make debugging very difficult. Always at least log the exception or provide a user-friendly error message.
*   **Use `finally` for Cleanup:** Ensure that resources like file streams, network connections, and database connections are closed in the `finally` block, or use `try-with-resources`.
*   **Propagate When Necessary:** If a method cannot reasonably handle an exception, use `throws` to propagate it to a higher-level caller.
*   **Create Custom Exceptions:** For application-specific errors, create custom exception classes that extend `Exception` (for checked) or `RuntimeException` (for unchecked).
*   **Keep `try` Blocks Small:** Limit the code within a `try` block to only the operations that might throw specific exceptions you intend to catch.
*   **Understand Checked vs. Unchecked:** Know when to expect and handle checked exceptions, and when unchecked exceptions indicate a bug in your code.

---

### Practice Questions and Exercises

**Question 1:**

What is the primary difference between checked and unchecked exceptions in Java?

**Answer:**
Checked exceptions are exceptions that the Java compiler forces you to handle, either by catching them with a `try-catch` block or by declaring them using the `throws` keyword. Unchecked exceptions, on the other hand, are not enforced by the compiler and typically indicate programming errors.

---

**Question 2:**

Which of the following is a checked exception?
a) `NullPointerException`
b) `ArithmeticException`
c) `FileNotFoundException`
d) `ArrayIndexOutOfBoundsException`

**Answer:**
c) `FileNotFoundException`

---

**Question 3:**

Explain the purpose of the `finally` block in exception handling.

**Answer:**
The `finally` block contains code that will always be executed, regardless of whether an exception occurred in the `try` block or if it was caught. It is commonly used for cleanup operations, such as closing files or releasing system resources, to ensure they are properly managed.

---

**Question 4:**

Write a Java program that attempts to divide a number by zero. Use a `try-catch` block to handle the `ArithmeticException` and print an appropriate message.

**Answer:**

```java
public class DivisionExample {
    public static void main(String[] args) {
        int numerator = 10;
        int denominator = 0;

        try {
            int result = numerator / denominator;
            System.out.println("Result: " + result); // This line won't be reached
        } catch (ArithmeticException e) {
            System.err.println("Error: Cannot divide by zero. " + e.getMessage());
        } finally {
            System.out.println("Division attempt finished.");
        }
    }
}
```

---

**Question 5:**

Consider a method that reads data from a file. If the file doesn't exist, it throws `FileNotFoundException`. How would you write this method so that it declares that it might throw this exception, and then show how a calling method would handle it?

**Answer:**

**Method that declares throwing `FileNotFoundException`:**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileReaderService {
    public String readFirstLine(String filePath) throws FileNotFoundException, IOException {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(filePath));
            return reader.readLine();
        } finally {
            if (reader != null) {
                reader.close(); // Note: Closing can also throw IOException
            }
        }
    }
}
```

**Calling method that handles the exception:**

```java
public class FileReaderClient {
    public static void main(String[] args) {
        FileReaderService service = new FileReaderService();
        String filename = "nonexistent_file.txt";

        try {
            String firstLine = service.readFirstLine(filename);
            System.out.println("First line: " + firstLine);
        } catch (FileNotFoundException e) {
            System.err.println("Error: File not found at " + filename);
        } catch (IOException e) {
            System.err.println("An I/O error occurred while reading the file: " + e.getMessage());
        }
    }
}
```

---

**Question 6:**

Using `try-with-resources`, rewrite the following code snippet to ensure the `FileWriter` is properly closed:

```java
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterExample {
    public static void main(String[] args) {
        FileWriter writer = null;
        try {
            writer = new FileWriter("output.txt");
            writer.write("Hello, Java Exception Handling!");
        } catch (IOException e) {
            System.err.println("An I/O error occurred: " + e.getMessage());
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    System.err.println("Error closing writer: " + e.getMessage());
                }
            }
        }
    }
}
```

**Answer:**

```java
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterTryWithResources {
    public static void main(String[] args) {
        // Using try-with-resources to automatically close FileWriter
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello, Java Exception Handling!");
            System.out.println("Data written to output.txt");
        } catch (IOException e) {
            System.err.println("An I/O error occurred: " + e.getMessage());
        }
        // No need for a finally block to close the writer.
        System.out.println("FileWriter automatically closed.");
    }
}
```

---

### Important Points to Remember

*   Checked exceptions are subclasses of `java.lang.Exception` but not `java.lang.RuntimeException`.
*   The compiler enforces the handling of checked exceptions.
*   `try-catch-finally` is the core mechanism for exception handling.
*   `throws` is used to declare that a method might throw an exception, passing the responsibility to the caller.
*   `throw` is used to explicitly raise an exception.
*   `try-with-resources` simplifies resource management by automatically closing `AutoCloseable` objects.
*   Always handle exceptions thoughtfully; avoid "swallowing" them.

---
This comprehensive study note covers the key aspects of checked exceptions in Java, aligning with the learning outcomes and course objectives. The references to textbooks provide a basis for further exploration.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
