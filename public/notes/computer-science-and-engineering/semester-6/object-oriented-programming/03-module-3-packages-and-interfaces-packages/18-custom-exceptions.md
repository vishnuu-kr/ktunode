---
title: "Custom Exceptions"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces  – Packages "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfbf"
status: "completed"
scrapedAt: "2026-05-20T16:56:28.778Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 3: Packages and Interfaces

## Topic: Custom Exceptions

---

### Learning Outcomes:

*   Understand the purpose and necessity of custom exceptions.
*   Learn how to create custom exception classes in Java.
*   Explore different types of custom exceptions (checked and unchecked).
*   Understand how to throw and catch custom exceptions.
*   Learn best practices for designing and using custom exceptions.

---

### 1. Introduction to Custom Exceptions

In object-oriented programming, particularly in Java, exceptions are a mechanism to handle runtime errors gracefully. While Java provides a rich set of predefined exception classes (like `NullPointerException`, `ArrayIndexOutOfBoundsException`, `IOException`), there are often scenarios where these built-in exceptions don't accurately represent the specific error conditions in your application.

**Custom exceptions** allow you to define your own exception classes, tailored to the unique error conditions of your program. This leads to more readable, maintainable, and robust code.

#### 1.1 Why Use Custom Exceptions?

*   **Improved Readability:** Custom exception names can clearly indicate the nature of the error, making code easier to understand.
*   **Specific Error Handling:** You can catch and handle specific application errors precisely, rather than relying on generic exceptions.
*   **Information Richness:** Custom exceptions can carry additional information (e.g., error codes, specific data related to the error) beyond what standard exceptions offer.
*   **Better Organization:** Grouping related errors under custom exception types enhances code organization.
*   **Enforcing Business Rules:** Custom exceptions can be used to signal violations of specific business logic or constraints.

#### 1.2 Exception Hierarchy in Java

All exceptions in Java inherit from the `Throwable` class. However, for practical purposes, we usually focus on two main branches:

*   **`Error`:** Represents serious problems that applications should not try to catch (e.g., `OutOfMemoryError`, `StackOverflowError`). These are typically unrecoverable.
*   **`Exception`:** Represents conditions that an application might want to catch and handle.
    *   **Checked Exceptions:** Subclasses of `Exception` (excluding `RuntimeException`) that the compiler forces you to handle (either by catching or declaring `throws`). These typically represent predictable external issues (e.g., file not found).
    *   **Unchecked Exceptions (Runtime Exceptions):** Subclasses of `RuntimeException`. The compiler does not force you to handle these. They usually represent programming errors or unexpected runtime conditions (e.g., `NullPointerException`, `ArithmeticException`).

---

### 2. Creating Custom Exception Classes

To create a custom exception, you need to define a new class that extends either `Exception` (for checked exceptions) or `RuntimeException` (for unchecked exceptions).

#### 2.1 Creating a Checked Custom Exception

Checked custom exceptions are used for recoverable errors that a calling method should be aware of and handle.

**Syntax:**

```java
public class MyCustomCheckedException extends Exception {
    // Constructors
    public MyCustomCheckedException() {
        super();
    }

    public MyCustomCheckedException(String message) {
        super(message);
    }

    public MyCustomCheckedException(String message, Throwable cause) {
        super(message, cause);
    }

    public MyCustomCheckedException(Throwable cause) {
        super(cause);
    }
}
```

**Explanation:**

*   We extend `java.lang.Exception`.
*   It's good practice to provide multiple constructors:
    *   A default constructor.
    *   A constructor that accepts a `String` message to describe the error.
    *   A constructor that accepts a `String` message and a `Throwable` cause (for exception chaining).
    *   A constructor that accepts only a `Throwable` cause.

**Example: `InsufficientFundsException` (Checked)**

```java
// File: InsufficientFundsException.java
public class InsufficientFundsException extends Exception {
    private double currentBalance;
    private double amountRequested;

    public InsufficientFundsException(String message, double currentBalance, double amountRequested) {
        super(message);
        this.currentBalance = currentBalance;
        this.amountRequested = amountRequested;
    }

    public double getCurrentBalance() {
        return currentBalance;
    }

    public double getAmountRequested() {
        return amountRequested;
    }
}
```

#### 2.2 Creating an Unchecked Custom Exception

Unchecked custom exceptions are used for programming errors or unexpected conditions that the developer should fix rather than expect the calling code to handle.

**Syntax:**

```java
public class MyCustomUncheckedException extends RuntimeException {
    // Constructors (similar to checked exceptions)
    public MyCustomUncheckedException() {
        super();
    }

    public MyCustomUncheckedException(String message) {
        super(message);
    }

    public MyCustomUncheckedException(String message, Throwable cause) {
        super(message, cause);
    }

    public MyCustomUncheckedException(Throwable cause) {
        super(cause);
    }
}
```

**Explanation:**

*   We extend `java.lang.RuntimeException`.
*   The constructors are similar to those for checked exceptions.

**Example: `InvalidInputFormatException` (Unchecked)**

```java
// File: InvalidInputFormatException.java
public class InvalidInputFormatException extends RuntimeException {
    public InvalidInputFormatException(String message) {
        super(message);
    }

    public InvalidInputFormatException(String message, Throwable cause) {
        super(message, cause);
    }
}
```

---

### 3. Throwing Custom Exceptions

You use the `throw` keyword to raise an exception.

**Syntax:**

```java
throw new MyCustomException("An error occurred.");
```

When you throw a **checked exception**, the method signature must declare that it `throws` that exception type.

**Example: Using `InsufficientFundsException`**

```java
// File: BankAccount.java
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void withdraw(double amount) throws InsufficientFundsException { // Declares it throws checked exception
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive."); // Built-in unchecked
        }
        if (amount > balance) {
            // Throwing our custom checked exception
            throw new InsufficientFundsException("Insufficient funds for withdrawal.", balance, amount);
        }
        balance -= amount;
        System.out.println("Successfully withdrew: " + amount);
    }

    public double getBalance() {
        return balance;
    }
}
```

When you throw an **unchecked exception**, you are not required to declare it in the method signature.

**Example: Using `InvalidInputFormatException`**

```java
// File: DataProcessor.java
public class DataProcessor {
    public int processNumericString(String input) {
        if (input == null || input.isEmpty()) {
            // Throwing our custom unchecked exception
            throw new InvalidInputFormatException("Input string cannot be null or empty.");
        }
        try {
            return Integer.parseInt(input);
        } catch (NumberFormatException e) {
            // Rethrowing as our custom unchecked exception with cause
            throw new InvalidInputFormatException("Invalid number format: " + input, e);
        }
    }
}
```

---

### 4. Catching Custom Exceptions

You use `try-catch` blocks to handle exceptions.

**Syntax:**

```java
try {
    // Code that might throw an exception
} catch (MyCustomException e) {
    // Handle the custom exception
} catch (AnotherException ae) {
    // Handle another exception
} finally {
    // Optional block for cleanup code
}
```

**Example: Catching `InsufficientFundsException`**

```java
// File: BankingApp.java
public class BankingApp {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(100.0);

        try {
            System.out.println("Current balance: " + account.getBalance());
            account.withdraw(50.0);
            System.out.println("Balance after withdrawal: " + account.getBalance());
            account.withdraw(75.0); // This will throw InsufficientFundsException
        } catch (InsufficientFundsException e) {
            System.err.println("Transaction failed: " + e.getMessage());
            System.err.println("Details: Current Balance=" + e.getCurrentBalance() + ", Amount Requested=" + e.getAmountRequested());
        } catch (IllegalArgumentException e) {
            System.err.println("Invalid operation: " + e.getMessage());
        }

        System.out.println("Program continues execution...");
    }
}
```

**Example: Catching `InvalidInputFormatException`**

```java
// File: MainApp.java
public class MainApp {
    public static void main(String[] args) {
        DataProcessor processor = new DataProcessor();

        // Case 1: Valid input
        try {
            int number = processor.processNumericString("123");
            System.out.println("Processed number: " + number);
        } catch (InvalidInputFormatException e) {
            System.err.println("Error processing valid input: " + e.getMessage());
        }

        // Case 2: Invalid format
        try {
            int number = processor.processNumericString("abc");
            System.out.println("Processed number: " + number);
        } catch (InvalidInputFormatException e) {
            System.err.println("Error processing invalid format: " + e.getMessage());
            if (e.getCause() != null) {
                System.err.println("Caused by: " + e.getCause().getMessage());
            }
        }

        // Case 3: Null input
        try {
            int number = processor.processNumericString(null);
            System.out.println("Processed number: " + number);
        } catch (InvalidInputFormatException e) {
            System.err.println("Error processing null input: " + e.getMessage());
        }
    }
}
```

---

### 5. Best Practices for Custom Exceptions

*   **Choose the Right Superclass:** Extend `Exception` for checked exceptions and `RuntimeException` for unchecked exceptions based on whether the error is expected to be handled by the caller or is a programming error.
*   **Descriptive Names:** Use clear and concise names for your exception classes that accurately reflect the error condition.
*   **Meaningful Messages:** Provide informative error messages in the constructors to help diagnose the problem.
*   **Include Relevant Data:** If specific data is crucial for understanding or handling the error, include it as fields in your custom exception class and provide accessor methods.
*   **Exception Chaining:** Use the constructors that accept a `Throwable cause` to preserve the original exception's context when rethrowing or wrapping exceptions. This helps in debugging by showing the complete stack trace.
*   **Avoid Overuse:** Don't create custom exceptions for every minor error. Leverage built-in exceptions when they fit the scenario.
*   **Document Your Exceptions:** Clearly document the purpose of your custom exceptions and when they might be thrown.
*   **Keep Exceptions Focused:** Design exceptions to represent a single, specific error condition.
*   **Consider Package Structure:** Place custom exceptions logically within your package structure, often in a dedicated `exceptions` package.

---

### 6. Practice Questions & Exercises

**Question 1:**

Which of the following is the correct way to declare a custom exception that should be checked by the compiler?

a) `public class MyException extends RuntimeException {}`
b) `public class MyException extends Error {}`
c) `public class MyException extends Exception {}`
d) `public class MyException {}`

**Answer:** c) `public class MyException extends Exception {}`

---

**Question 2:**

When creating a custom exception that represents a programming error (like a null pointer encountered in your logic), which base class should you typically extend?

a) `Exception`
b) `Error`
c) `RuntimeException`
d) `Throwable`

**Answer:** c) `RuntimeException`

---

**Question 3:**

Consider the following custom exception:

```java
public class ProductNotFoundException extends Exception {
    private String productId;

    public ProductNotFoundException(String message, String productId) {
        super(message);
        this.productId = productId;
    }

    public String getProductId() {
        return productId;
    }
}
```

And the following method:

```java
public void displayProductDetails(String id) {
    // ... some logic to find product ...
    if (productFound == false) {
        // What should happen here?
    }
    // ... display details ...
}
```

How should `displayProductDetails` be modified to properly handle the case where the product is not found using `ProductNotFoundException`?

a) `throw new ProductNotFoundException("Product not found", id);`
b) `throw new ProductNotFoundException("Product not found", id);` **and** `public void displayProductDetails(String id) throws ProductNotFoundException { ... }`
c) `throw new ProductNotFoundException("Product not found", id);` **and** `public void displayProductDetails(String id) { ... }`
d) `return new ProductNotFoundException("Product not found", id);`

**Answer:** b) `throw new ProductNotFoundException("Product not found", id);` **and** `public void displayProductDetails(String id) throws ProductNotFoundException { ... }`

*Reasoning:* `ProductNotFoundException` extends `Exception`, making it a checked exception. Therefore, the method throwing it must declare it using `throws`, and any caller of this method must either catch it or declare it themselves.

---

**Exercise 1: Create and Use a Custom Unchecked Exception**

1.  Create a custom unchecked exception called `InvalidAgeException` that extends `RuntimeException`. It should accept a `String` message in its constructor.
2.  Create a `Person` class with a `setAge(int age)` method.
3.  In `setAge`, if the provided `age` is less than 0 or greater than 120, throw an `InvalidAgeException` with an appropriate message.
4.  In a `main` method, create a `Person` object and try to set an invalid age (e.g., -5 or 150). Use a `try-catch` block to catch and print the error message.

**Solution Snippet:**

**InvalidAgeException.java:**
```java
public class InvalidAgeException extends RuntimeException {
    public InvalidAgeException(String message) {
        super(message);
    }
}
```

**Person.java:**
```java
public class Person {
    private int age;

    public void setAge(int age) {
        if (age < 0 || age > 120) {
            throw new InvalidAgeException("Age must be between 0 and 120. Provided: " + age);
        }
        this.age = age;
        System.out.println("Age set successfully to: " + this.age);
    }

    public int getAge() {
        return age;
    }
}
```

**Main.java:**
```java
public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        try {
            person.setAge(30);
            person.setAge(-10); // This will throw the exception
        } catch (InvalidAgeException e) {
            System.err.println("Error: " + e.getMessage());
        }
        try {
            person.setAge(150); // This will also throw the exception
        } catch (InvalidAgeException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
```

---

**Exercise 2: Create and Use a Custom Checked Exception with Additional Data**

1.  Create a custom checked exception called `FileProcessingException` that extends `Exception`.
2.  This exception should store the `fileName` that caused the issue and the `lineNumber` where the error occurred.
3.  Provide constructors to initialize these fields along with a message.
4.  Create a simple method `processFile(String fileName, int lineNumber)` that simulates reading a line from a file.
5.  Inside `processFile`, if `lineNumber` is negative, throw a `FileProcessingException` indicating the invalid line number and the filename.
6.  In a `main` method, call `processFile` with valid and invalid parameters within a `try-catch` block to handle the `FileProcessingException`.

**Solution Snippet:**

**FileProcessingException.java:**
```java
public class FileProcessingException extends Exception {
    private String fileName;
    private int lineNumber;

    public FileProcessingException(String message, String fileName, int lineNumber) {
        super(message);
        this.fileName = fileName;
        this.lineNumber = lineNumber;
    }

    public String getFileName() {
        return fileName;
    }

    public int getLineNumber() {
        return lineNumber;
    }
}
```

**FileProcessor.java:**
```java
public class FileProcessor {
    public void processFile(String fileName, int lineNumber) throws FileProcessingException {
        if (lineNumber < 0) {
            throw new FileProcessingException("Invalid line number encountered", fileName, lineNumber);
        }
        System.out.println("Processing line " + lineNumber + " from file: " + fileName);
        // Simulate file reading logic
    }
}
```

**Main.java:**
```java
public class Main {
    public static void main(String[] args) {
        FileProcessor processor = new FileProcessor();
        String testFile = "data.txt";

        try {
            processor.processFile(testFile, 10); // Valid
            processor.processFile(testFile, -5); // Invalid
        } catch (FileProcessingException e) {
            System.err.println("File processing error: " + e.getMessage());
            System.err.println("File: " + e.getFileName());
            System.err.println("Line: " + e.getLineNumber());
        }
    }
}
```

---

### 7. Important Points to Remember

*   **Checked vs. Unchecked:** The primary distinction is whether the compiler forces you to handle it. `Exception` is for checked, `RuntimeException` is for unchecked.
*   **Purpose:** Custom exceptions provide specificity and context for your application's error handling.
*   **`throw` vs. `throws`:** `throw` is used inside a method to raise an exception. `throws` is used in a method signature to declare that the method might throw an exception (of a specific type).
*   **Exception Chaining:** Essential for preserving the original cause of an error when rethrowing or wrapping exceptions.
*   **Constructors:** Always provide appropriate constructors, especially `(String message)` and `(String message, Throwable cause)`.
*   **Readability:** Aim for descriptive names and clear messages.

---
