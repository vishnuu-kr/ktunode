---
title: "throw"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6a0"
status: "completed"
scrapedAt: "2026-05-23T17:51:47.717Z"
---
# Object Oriented Programming: Module 3 - More Features of Java: The `throw` Keyword

## 1. Introduction to Exception Handling in Java

Exception handling is a crucial mechanism in Java for dealing with runtime errors or exceptional conditions that disrupt the normal flow of program execution. It allows you to gracefully manage these situations, preventing your program from crashing and providing a more robust and user-friendly experience.

**Key Concepts:**

*   **Exception:** An event that occurs during the execution of a program that disrupts the normal flow of the program's instructions. Examples include dividing by zero, trying to access an array element out of bounds, or attempting to open a file that doesn't exist.
*   **Error:** A more serious problem that indicates a condition that a reasonable application should not try to catch. Errors are typically caused by external factors or severe programming mistakes. Examples include `OutOfMemoryError` or `StackOverflowError`.
*   **Checked Exceptions:** Exceptions that the Java compiler forces you to handle. If a method can potentially throw a checked exception, it must either catch it or declare that it throws it. Examples include `IOException`, `FileNotFoundException`. (Refer to Deitel & Deitel, 11th Ed., Chapter 13)
*   **Unchecked Exceptions (Runtime Exceptions):** Exceptions that are not required to be handled by the compiler. These typically arise from programming errors. Examples include `ArithmeticException`, `NullPointerException`, `ArrayIndexOutOfBoundsException`. (Refer to Deitel & Deitel, 11th Ed., Chapter 13)
*   **Error Handling:** The process of anticipating and responding to runtime errors.

**Course Outcome Alignment:**

*   **CO3:** Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files. (Knowledge Level: K3) - This module directly addresses the exception handling aspect of CO3.

## 2. The `throw` Keyword: Manually Throwing Exceptions

The `throw` keyword in Java is used to **explicitly throw an exception from a method or a block of code**. It allows you to signal that an exceptional condition has occurred, even if the Java runtime wouldn't normally throw that specific exception at that point.

**Purpose of `throw`:**

*   **Custom Error Reporting:** You can create your own exception objects or throw existing ones to indicate specific error conditions tailored to your application's logic.
*   **Enforcing Business Rules:** If certain conditions are violated (e.g., invalid input, data inconsistency), you can use `throw` to signal these violations.
*   **Delegating Exception Handling:** A method can throw an exception to its caller, allowing the caller to decide how to handle the exceptional situation.

**Syntax:**

```java
throw new ExceptionType("Optional error message");
```

*   `throw`: The keyword itself.
*   `new`: Used to create a new instance of an exception class.
*   `ExceptionType`: The class of the exception you want to throw (e.g., `IllegalArgumentException`, `NullPointerException`, or a custom exception class).
*   `"Optional error message"`: A descriptive string that explains the reason for the exception. This message can be retrieved using the `getMessage()` method of the exception object.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011):** Chapter 14, "Exception Handling," discusses `throw` as a fundamental part of the exception handling mechanism.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018):** Chapter 13, "Exception Handling," provides detailed examples and explanations of `throw`.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013):** Chapter 11, "Exception Handling," also covers the `throw` statement.

## 3. How `throw` Works

When `throw` is executed:

1.  **Exception Object Creation:** A new instance of the specified exception class is created.
2.  **Exception Propagation:** The JVM searches for an appropriate exception handler to catch the thrown exception.
3.  **Stack Unwinding:** If no handler is found in the current method, the exception is propagated up the call stack to the calling method. This process continues until a suitable handler is found or the program terminates.

**Important Point:**

*   When an exception is thrown using `throw`, the execution of the current method is immediately halted at that point.

## 4. Examples of Using `throw`

### Example 1: Throwing a Built-in Unchecked Exception

Let's consider a scenario where we want to throw an `IllegalArgumentException` if a given number is negative, as negative values are not allowed in our context.

```java
public class NegativeNumberExceptionExample {

    public static void processPositiveNumber(int number) {
        if (number < 0) {
            // Manually throw an IllegalArgumentException
            throw new IllegalArgumentException("Number cannot be negative: " + number);
        }
        System.out.println("Processing number: " + number);
        // ... further processing
    }

    public static void main(String[] args) {
        try {
            processPositiveNumber(10);
            processPositiveNumber(-5); // This will throw an exception
            processPositiveNumber(20); // This line will not be reached
        } catch (IllegalArgumentException e) {
            System.err.println("Caught an exception: " + e.getMessage());
        }
        System.out.println("Program continues after exception handling.");
    }
}
```

**Output:**

```
Processing number: 10
Caught an exception: Number cannot be negative: -5
Program continues after exception handling.
```

**Explanation:**

*   The `processPositiveNumber` method checks if the input `number` is negative.
*   If it is, `throw new IllegalArgumentException("Number cannot be negative: " + number);` creates and throws an `IllegalArgumentException` with a custom message.
*   The `main` method uses a `try-catch` block to handle this potential exception. When `processPositiveNumber(-5)` is called, the exception is caught, and the error message is printed.

### Example 2: Throwing a Built-in Checked Exception (Requires `throws` clause)

If you throw a checked exception, the method that throws it must declare that it might throw that exception using the `throws` keyword.

```java
import java.io.IOException;

public class CustomFileProcessor {

    public void readFileContent(String filePath) throws IOException {
        // Simulate a condition where file access might fail
        if (filePath == null || filePath.isEmpty()) {
            // Throwing a checked exception (IOException)
            throw new IOException("Invalid file path provided.");
        }
        System.out.println("Attempting to read from: " + filePath);
        // In a real scenario, you would use file I/O operations here
        // which themselves can throw IOException.
    }

    public static void main(String[] args) {
        CustomFileProcessor processor = new CustomFileProcessor();
        try {
            processor.readFileContent("mydata.txt");
            processor.readFileContent(""); // This will throw an exception
        } catch (IOException e) {
            System.err.println("An I/O error occurred: " + e.getMessage());
        }
    }
}
```

**Output:**

```
Attempting to read from: mydata.txt
An I/O error occurred: Invalid file path provided.
```

**Explanation:**

*   The `readFileContent` method declares `throws IOException` because it explicitly throws an `IOException`.
*   Inside the method, if the `filePath` is invalid, an `IOException` is instantiated and thrown.
*   The `main` method's `try-catch` block handles the `IOException`.

### Example 3: Throwing a Custom Exception

Creating your own exception classes provides more specific error reporting and allows for finer-grained control over exception handling.

First, define a custom exception class (e.g., `InsufficientFundsException`):

```java
// Custom Exception Class
class InsufficientFundsException extends Exception {
    private double amountShort;

    public InsufficientFundsException(String message, double amountShort) {
        super(message);
        this.amountShort = amountShort;
    }

    public double getAmountShort() {
        return amountShort;
    }
}
```

Now, use it in a banking application scenario:

```java
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            double shortfall = amount - balance;
            // Throw our custom exception
            throw new InsufficientFundsException("Insufficient funds for withdrawal.", shortfall);
        }
        balance -= amount;
        System.out.println("Withdrawal successful. Remaining balance: " + balance);
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000.0);

        try {
            account.withdraw(500.0);
            account.withdraw(700.0); // This will throw InsufficientFundsException
        } catch (InsufficientFundsException e) {
            System.err.println("Transaction failed: " + e.getMessage());
            System.err.println("Short by: $" + e.getAmountShort());
        }

        System.out.println("Current balance: $" + account.getBalance());
    }
}
```

**Output:**

```
Withdrawal successful. Remaining balance: 500.0
Transaction failed: Insufficient funds for withdrawal.
Short by: $200.0
Current balance: $500.0
```

**Explanation:**

*   `InsufficientFundsException` extends `Exception`, making it a checked exception. It also includes a custom field `amountShort` to provide more information.
*   The `withdraw` method declares `throws InsufficientFundsException`.
*   If the withdrawal amount exceeds the balance, a new `InsufficientFundsException` is created with a specific message and the calculated shortfall, and then `throw`n.
*   The `main` method catches `InsufficientFundsException`, prints the error message, and retrieves the `amountShort` using the custom getter.

## 5. `throw` vs. `throws`

It's crucial to distinguish between `throw` and `throws`:

| Feature      | `throw`                                          | `throws`                                           |
| :----------- | :----------------------------------------------- | :------------------------------------------------- |
| **Purpose**  | Used to **explicitly throw** an exception.       | Used in a method signature to **declare** that the method might throw one or more exceptions. |
| **Usage**    | Inside a method body or a block.                 | In the method signature (after parameters).        |
| **Action**   | Throws an exception object.                      | Declares potential exceptions.                     |
| **Keyword**  | `throw` (used with `new`)                        | `throws` (followed by exception type(s))           |
| **Example**  | `throw new MyException("Error");`                | `public void myMethod() throws MyException;`      |
| **Mandatory**| When you want to signal an exception manually.   | When your method throws checked exceptions and you don't want to catch them within the method. |

**Important Point:**

*   `throw` is an executable statement, while `throws` is a declarative keyword.

## 6. Best Practices for Using `throw`

*   **Throw Specific Exceptions:** Whenever possible, throw exceptions that accurately describe the error condition. Avoid using generic `Exception` unless it's a last resort.
*   **Provide Informative Messages:** Include clear and concise error messages with your exceptions to help developers diagnose and fix problems.
*   **Use Custom Exceptions:** For application-specific error conditions, create custom exception classes to enhance clarity and maintainability. This aligns with CO3.
*   **Consider Checked vs. Unchecked:** Decide whether your custom exception should be checked or unchecked based on whether you want to force callers to handle it. For most application logic errors, unchecked exceptions are often preferred to avoid excessive `try-catch` blocks.
*   **Don't Swallow Exceptions:** If you catch an exception, ensure you either handle it properly, log it, or re-throw it (potentially as a different exception type) if it needs to be propagated.

**Referenced Textbooks:**

*   **Fundamentals of Software Engineering by Rajib Mall (4th edition, 2014):** While not directly about Java syntax, this book emphasizes the importance of robust error handling and exception management in software design, which informs the best practices for `throw`.

## 7. Practice Questions

**Question 1:**
What is the primary purpose of the `throw` keyword in Java?
a) To declare that a method might throw an exception.
b) To catch and handle an exception.
c) To explicitly create and throw an exception object.
d) To define a new exception class.

**Question 2:**
Which of the following is a checked exception that you might need to explicitly `throw` and handle?
a) `NullPointerException`
b) `ArrayIndexOutOfBoundsException`
c) `IOException`
d) `ArithmeticException`

**Question 3:**
Consider the following code snippet:

```java
public void checkAge(int age) {
    if (age < 0) {
        // Line X
    }
}
```

What statement should be placed at Line X to throw an exception indicating that the age is invalid?
a) `catch (IllegalArgumentException e)`
b) `throw new RuntimeException("Age cannot be negative");`
c) `throws new IllegalArgumentException("Age cannot be negative");`
d) `print("Invalid age");`

**Question 4:**
Explain the difference between the `throw` keyword and the `throws` keyword in Java. Provide a small code example for each.

**Question 5:**
Create a custom exception class called `InvalidInputException` that extends `Exception`. This exception should have a constructor that accepts a message. Then, write a method `validateInput` that throws this custom exception if the input string is empty. Demonstrate how to call this method and catch the exception.

## 8. Answers to Practice Questions

**Answer 1:**
c) To explicitly create and throw an exception object.

**Answer 2:**
c) `IOException` (This is a common example of a checked exception.)

**Answer 3:**
b) `throw new RuntimeException("Age cannot be negative");`
*   `throw` is used to throw an exception.
*   `new RuntimeException(...)` creates an instance of `RuntimeException` (an unchecked exception).
*   Option a) is for catching.
*   Option c) uses `throws` incorrectly inside a method body.
*   Option d) is not a standard Java exception handling mechanism.

**Answer 4:**

The **`throw`** keyword is used **inside a method** to explicitly throw an instance of an exception. It immediately transfers control to the nearest enclosing `catch` block or propagates the exception up the call stack.

**Example of `throw`:**

```java
public void divide(int numerator, int denominator) {
    if (denominator == 0) {
        throw new ArithmeticException("Division by zero is not allowed.");
    }
    System.out.println(numerator / denominator);
}
```

The **`throws`** keyword is used in the **method signature** to declare that the method *might* throw one or more specific types of checked exceptions. It informs the caller of the method about the potential exceptions they need to handle.

**Example of `throws`:**

```java
import java.io.FileReader;
import java.io.IOException;

public class FileHandler {
    public void readFile(String filePath) throws IOException { // Declares that IOException might be thrown
        FileReader reader = new FileReader(filePath);
        // ... read file content ...
        reader.close();
    }
}
```

**Answer 5:**

**Custom Exception Class:**

```java
class InvalidInputException extends Exception {
    public InvalidInputException(String message) {
        super(message);
    }
}
```

**Method and Demonstration:**

```java
public class InputValidator {

    public void validateInput(String input) throws InvalidInputException {
        if (input == null || input.isEmpty()) {
            throw new InvalidInputException("Input string cannot be empty.");
        }
        System.out.println("Input is valid: " + input);
    }

    public static void main(String[] args) {
        InputValidator validator = new InputValidator();

        try {
            validator.validateInput("Hello Java");
            validator.validateInput(""); // This will throw InvalidInputException
        } catch (InvalidInputException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
```

**Output of the demonstration:**

```
Input is valid: Hello Java
Error: Input string cannot be empty.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
