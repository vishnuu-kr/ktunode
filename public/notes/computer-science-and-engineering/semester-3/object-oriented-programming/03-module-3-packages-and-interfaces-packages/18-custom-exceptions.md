---
title: "Custom Exceptions"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acc5"
status: "completed"
scrapedAt: "2026-05-20T16:29:10.026Z"
---
# Object-Oriented Programming: Module 3 - Packages and Interfaces – Packages: Custom Exceptions

## Introduction

This module focuses on custom exceptions in Java, a crucial aspect of robust and maintainable object-oriented programming. Custom exceptions allow you to handle specific error conditions in your application more effectively than relying solely on built-in exceptions.

## Learning Outcomes

By the end of this topic, you will be able to:

*   Define custom exception classes.
*   Explain the need for custom exceptions.
*   Throw and catch custom exceptions.
*   Implement custom exceptions that extend existing exception classes.
*   Utilize custom exceptions to improve error handling in your programs.

## Key Concepts and Definitions

*   **Exception:** An event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions.
*   **Custom Exception:** An exception class that you define yourself to handle specific error scenarios in your application. This allows you to handle errors in a more meaningful and specific way than using generic exceptions.
*   **`Throwable` Class:** The root class of the Java exception hierarchy. All exceptions and errors are subclasses of `Throwable`.
*   **`Exception` Class:** A direct subclass of `Throwable`. Represents conditions that a reasonable application might want to catch.
*   **`RuntimeException` Class:** A subclass of `Exception`. Represents exceptions that can occur during runtime. These are unchecked exceptions. Examples include `NullPointerException` and `ArrayIndexOutOfBoundsException`.
*   **Checked Exception:** Exceptions that are checked at compile-time. If a method throws a checked exception, it must be either caught within the method or declared in the method's `throws` clause.  `IOException` is a common example.
*   **Unchecked Exception:** Exceptions that are not checked at compile-time. They are subclasses of `RuntimeException`.
*   **`try-catch` Block:** A block of code that is used to handle exceptions. The `try` block contains the code that may throw an exception, and the `catch` block contains the code that will handle the exception if it is thrown.
*   **`throws` Clause:** A clause in a method declaration that specifies the exceptions that the method might throw.
*   **`throw` Keyword:** Used to explicitly throw an exception in Java.

## Why Use Custom Exceptions?

*   **Specificity:** Custom exceptions allow you to define exceptions that are specific to your application domain. This makes it easier to understand what went wrong and how to handle the error.
*   **Clarity:** They improve the readability and maintainability of your code by providing meaningful names for error conditions.
*   **Error Handling:** They enable more precise and tailored error handling strategies. You can catch and handle different custom exceptions in different ways, depending on the specific error condition.
*   **Improved Debugging:** Custom exceptions provide more detailed information about the error, making debugging easier.
*   **Domain-Specific Semantics:** By using custom exceptions, you can enforce constraints and business rules within your application logic.

## Defining Custom Exception Classes

To create a custom exception, you create a new class that extends the `Exception` class (for checked exceptions) or the `RuntimeException` class (for unchecked exceptions).

**Example (Checked Exception):**

```java
public class InsufficientFundsException extends Exception {

    public InsufficientFundsException(String message) {
        super(message); // Call the constructor of the Exception class
    }

    public InsufficientFundsException() {
        super("Insufficient Funds"); // default message
    }
}
```

**Example (Unchecked Exception):**

```java
public class InvalidInputException extends IllegalArgumentException {

    public InvalidInputException(String message) {
        super(message); // Call the constructor of the IllegalArgumentException class
    }

     public InvalidInputException() {
        super("Invalid Input"); // default message
    }
}
```

**Explanation:**

*   **`public class InsufficientFundsException extends Exception`**:  This declares a new class named `InsufficientFundsException` that inherits from the `Exception` class, making it a checked exception. If this were a `RuntimeException`, the compiler would not force the user of the method to catch or declare that it throws the exception.
*   **`public InsufficientFundsException(String message)`**: This is a constructor that takes a message string as input.
*   **`super(message)`**: This calls the constructor of the `Exception` class, passing the message.  The message will be displayed when the exception is printed to the console.

## Throwing and Catching Custom Exceptions

You can throw a custom exception using the `throw` keyword.  You must handle or declare checked exceptions.

**Example:**

```java
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Withdrawal amount exceeds balance. Current balance: " + balance);
        }
        balance -= amount;
        System.out.println("Withdrawal successful. New balance: " + balance);
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(100.0);
        try {
            account.withdraw(150.0);
        } catch (InsufficientFundsException e) {
            System.out.println("Exception caught: " + e.getMessage());
            e.printStackTrace(); // Prints the call stack, useful for debugging.
        }

        try {
          account.withdraw(50); //this withdrawal should work
        }
        catch(InsufficientFundsException e){
          //this should not get called
        }
    }
}
```

**Explanation:**

*   **`throw new InsufficientFundsException("Withdrawal amount exceeds balance.");`**: This creates a new instance of the `InsufficientFundsException` and throws it.
*   **`try { ... } catch (InsufficientFundsException e) { ... }`**: This is a `try-catch` block that catches the `InsufficientFundsException`. The code inside the `try` block may throw the exception.  If the exception is thrown, the code inside the `catch` block will be executed.
*   **`e.getMessage()`**: This gets the message associated with the exception, which was set in the `InsufficientFundsException` constructor.
*   **`throws InsufficientFundsException`**: The `withdraw` method declaration includes a `throws` clause, indicating that it might throw an `InsufficientFundsException`. This is required because `InsufficientFundsException` is a checked exception.

## Implementing Custom Exceptions that Extend Existing Exception Classes

You can also extend existing exception classes like `IllegalArgumentException` or `IOException` to create more specific exceptions.

**Example (Extending `IllegalArgumentException`):**

```java
public class NegativeAmountException extends IllegalArgumentException {

    public NegativeAmountException(String message) {
        super(message);
    }

    public NegativeAmountException() {
      super("Negative amount not allowed");
    }
}

// Usage example:
public class Product {
    private double price;

    public Product(double price) {
        setPrice(price);
    }

    public void setPrice(double price) {
        if (price < 0) {
            throw new NegativeAmountException("Price cannot be negative.");
        }
        this.price = price;
    }

    public static void main(String[] args) {
      try {
          Product p = new Product(-10.0);
      } catch(NegativeAmountException e){
          System.out.println("Exception: " + e.getMessage());
      }
    }
}
```

## Utilizing Custom Exceptions to Improve Error Handling

Using custom exceptions enhances error handling in your programs by:

*   **Providing context:** Custom exceptions can carry additional information about the error (e.g., the invalid value, the expected range).
*   **Enabling specific recovery strategies:**  You can handle different custom exceptions in different ways, allowing you to implement specific recovery or fallback mechanisms for each error scenario.
*   **Improving code maintainability:** By centralizing error handling logic for specific error conditions in the exception classes, you reduce code duplication and improve maintainability.

## Important Points to Remember

*   Choose whether to create a checked or unchecked exception. Checked exceptions must be handled or declared in the `throws` clause, while unchecked exceptions do not. Use checked exceptions for conditions that the caller can reasonably be expected to recover from. Use unchecked exceptions for programming errors or conditions that are generally unrecoverable.
*   Provide a meaningful message in the exception constructor. This message will help developers understand the error.
*   Consider adding fields to your custom exception classes to store additional information about the error (e.g., the invalid value).
*   Document your custom exceptions thoroughly so that other developers understand their purpose and how to handle them.
*   Use custom exceptions to enforce constraints and business rules within your application logic.

## Practice Questions and Exercises

**Question 1:**

What is the purpose of custom exceptions in Java?

**Answer:**

Custom exceptions provide a way to handle specific error conditions in your application, offering more specificity, clarity, and control over error handling than using generic exceptions.

**Question 2:**

How do you create a custom exception class in Java? Provide an example.

**Answer:**

You create a custom exception class by extending the `Exception` class (for checked exceptions) or the `RuntimeException` class (for unchecked exceptions).

```java
public class InvalidAgeException extends Exception {

    public InvalidAgeException(String message) {
        super(message);
    }
}
```

**Question 3:**

Explain the difference between checked and unchecked exceptions and when to use each.

**Answer:**

Checked exceptions are checked at compile time and must be handled or declared in the `throws` clause. Unchecked exceptions are not checked at compile time and are subclasses of `RuntimeException`. Use checked exceptions for recoverable errors that the caller can reasonably handle. Use unchecked exceptions for programming errors or unrecoverable conditions.

**Question 4:**

Write a program that defines a custom exception called `DivideByZeroException` and throws it when attempting to divide a number by zero.

**Answer:**

```java
public class DivideByZeroException extends Exception {
    public DivideByZeroException(String message) {
        super(message);
    }
}

public class Calculator {
    public static double divide(double numerator, double denominator) throws DivideByZeroException {
        if (denominator == 0) {
            throw new DivideByZeroException("Cannot divide by zero.");
        }
        return numerator / denominator;
    }

    public static void main(String[] args) {
        try {
            double result = divide(10, 0);
            System.out.println("Result: " + result);
        } catch (DivideByZeroException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
    }
}
```

**Exercise 1:**

Create a custom exception called `InvalidEmailException` that extends `Exception`.  Write a method that validates an email address and throws the exception if the email is invalid (e.g., missing "@" symbol, missing domain name).

**Exercise 2:**

Create a custom exception called `NegativePriceException` that extends `IllegalArgumentException`. Write a `Product` class with a `price` field. The constructor should throw the `NegativePriceException` if the price is negative.  Write a main method that demonstrates catching this exception.

These exercises provide practical experience in creating and using custom exceptions to improve error handling in your Java programs. Good luck!
