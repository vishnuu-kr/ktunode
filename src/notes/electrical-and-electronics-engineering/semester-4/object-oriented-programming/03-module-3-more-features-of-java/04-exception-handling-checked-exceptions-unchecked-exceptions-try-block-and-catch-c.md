---
title: "Exception Handling - Checked Exceptions, Unchecked Exceptions, try Block and catch Clause, Multiple catch Clauses, Nested try Statements, throw, throws and finally."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36011"
status: "completed"
scrapedAt: "2026-05-23T16:17:36.829Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 3: More Features of Java

## Topic: Exception Handling

**Course Outcome Alignment:**

*   **CO3: Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Multithreaded programming. (Knowledge Level: K3)**
    *   This entire module directly contributes to CO3 by focusing on how to write robust Java programs through effective exception handling.

**Learning Outcomes Covered:**

*   Understanding the concept of exceptions and their types.
*   Differentiating between checked and unchecked exceptions.
*   Implementing `try`, `catch`, and `finally` blocks for exception handling.
*   Handling multiple exceptions using multiple `catch` clauses.
*   Utilizing nested `try` statements.
*   Understanding and using `throw` and `throws` keywords.

---

### 1. Introduction to Exception Handling

**Key Concept:** Exception handling is a mechanism in Java that allows you to handle runtime errors gracefully, preventing your program from crashing and providing a structured way to respond to unexpected situations.

**Definition:** An **exception** is an event that occurs during the execution of a program that disrupts the normal flow of the program's instructions. It's typically an error condition that the program can catch and handle.

**Why is Exception Handling Important?**

*   **Robustness:** Makes your program more resilient to errors.
*   **Graceful Termination:** Allows your program to terminate in a controlled manner rather than abruptly.
*   **Error Reporting:** Provides a way to report errors to the user or log them for debugging.
*   **Separation of Concerns:** Separates the normal program logic from the error-handling logic.

**Reference (Schildt, 8th ed., Chapter 11):** Schildt emphasizes that exception handling is a powerful mechanism that enables you to "handle runtime errors" and "prevent your program from terminating abruptly." He also highlights that it "adds robustness to your code."

---

### 2. Types of Exceptions

Java categorizes exceptions into two main types: Checked Exceptions and Unchecked Exceptions.

#### 2.1. Checked Exceptions

*   **Definition:** These are exceptions that the Java compiler forces you to handle. If a method can throw a checked exception, it must either catch it or declare that it throws it using the `throws` keyword.
*   **When they occur:** Typically occur due to conditions outside the program's control, such as I/O errors, network issues, or database connectivity problems.
*   **Inheritance:** Inherit from `java.lang.Exception` but not from `java.lang.RuntimeException`.
*   **Examples:**
    *   `IOException`: Occurs when an input/output operation fails.
    *   `FileNotFoundException`: A subclass of `IOException` for when a file cannot be found.
    *   `SQLException`: Occurs during database operations.
    *   `ClassNotFoundException`: Occurs when a class cannot be found by the class loader.

**Example Scenario:** Reading from a file. The compiler knows that the file might not exist, leading to a potential `FileNotFoundException`.

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            File file = new File("nonexistent.txt");
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            System.err.println("Error: The file was not found!");
            e.printStackTrace(); // Prints the stack trace
        }
    }
}
```

**Important Point to Remember:** If a method can throw a checked exception, you **must** address it (either catch or declare `throws`). Failure to do so will result in a compile-time error.

#### 2.2. Unchecked Exceptions (Runtime Exceptions)

*   **Definition:** These are exceptions that the Java compiler does not force you to handle. They typically occur due to programming errors.
*   **When they occur:** Usually indicate bugs in the code, such as trying to access an array element out of bounds, performing division by zero, or using a null reference.
*   **Inheritance:** Inherit from `java.lang.RuntimeException`.
*   **Examples:**
    *   `ArithmeticException`: Occurs when an arithmetic operation is invalid, like division by zero.
    *   `ArrayIndexOutOfBoundsException`: Occurs when an array is accessed with an invalid index.
    *   `NullPointerException`: Occurs when you try to access a member of a null object.
    *   `IllegalArgumentException`: Indicates that a method has been passed an illegal or inappropriate argument.
    *   `NumberFormatException`: Occurs when trying to convert a string to a numeric type but the string doesn't have the appropriate format.

**Example Scenario:** Dividing an integer by zero.

```java
public class UncheckedExceptionExample {
    public static void main(String[] args) {
        try {
            int numerator = 10;
            int denominator = 0;
            int result = numerator / denominator; // This line will cause an ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.err.println("Error: Cannot divide by zero!");
            e.printStackTrace();
        }
    }
}
```

**Important Point to Remember:** While you *can* catch unchecked exceptions, it's often better to fix the underlying programming error that causes them rather than relying solely on catching them.

#### 2.3. Errors

*   **Definition:** Errors are serious problems that are usually outside the control of the application and typically cannot be recovered from. They represent more severe conditions than exceptions.
*   **Inheritance:** Inherit from `java.lang.Error`.
*   **Examples:**
    *   `OutOfMemoryError`: Occurs when the Java Virtual Machine (JVM) runs out of memory.
    *   `StackOverflowError`: Occurs when the call stack is exhausted, often due to infinite recursion.

**Note:** You generally do not catch `Error` subclasses.

---

### 3. The `try`, `catch`, and `finally` Blocks

This is the core of Java's exception handling mechanism.

#### 3.1. The `try` Block

*   **Purpose:** Contains the code that might potentially throw an exception.
*   **Syntax:**
    ```java
    try {
        // Code that might throw an exception
    }
    ```

#### 3.2. The `catch` Clause

*   **Purpose:** Follows a `try` block and contains the code to execute if a specific type of exception occurs within the `try` block.
*   **Syntax:**
    ```java
    catch (ExceptionType variableName) {
        // Code to handle the exception
    }
    ```
*   **`ExceptionType`:** Specifies the type of exception this `catch` block can handle.
*   **`variableName`:** A variable of the specified `ExceptionType` that holds the exception object. This allows you to access information about the exception (e.g., its message, stack trace).

**How it Works:**
1.  The code inside the `try` block is executed.
2.  If an exception occurs within the `try` block, the normal execution flow is immediately interrupted.
3.  The JVM looks for a `catch` block that matches the type of the thrown exception.
4.  If a matching `catch` block is found, it's executed.
5.  If no matching `catch` block is found, the exception propagates up the call stack. If it reaches the top level and is still not handled, the program terminates with an error message.

**Example:**

```java
public class TryCatchExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // This will throw ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("Caught an exception: " + e.getMessage());
        }
        System.out.println("Program continues after exception handling.");
    }
}
```

**Output:**
```
Caught an exception: Index 5 out of bounds for length 3
Program continues after exception handling.
```

**Reference (Deitel & Deitel, 11th ed., Chapter 9):** Deitel and Deitel explain that the `try` block "delimit[s] a section of code where an exception might occur," and the `catch` block "handles the exception." They emphasize the importance of the `catch` block's parameter, which "specifies the type of exception that the `catch` block can handle."

#### 3.3. The `finally` Block

*   **Purpose:** Contains code that **always** executes, regardless of whether an exception occurred or was caught. It's typically used for cleanup operations, like closing files, network connections, or releasing resources.
*   **Syntax:**
    ```java
    try {
        // Code that might throw an exception
    } catch (ExceptionType variableName) {
        // Code to handle the exception
    } finally {
        // Code that will always execute
    }
    ```
*   **Execution Scenarios:**
    *   **No exception:** `try` executes, `catch` is skipped, `finally` executes.
    *   **Exception caught:** `try` executes until the exception, the matching `catch` executes, `finally` executes.
    *   **Exception not caught (propagated):** `try` executes until the exception, `catch` blocks are checked, if none match, `finally` executes, then the exception propagates.
    *   **`return`, `break`, `continue` in `try` or `catch`:** `finally` block will still execute *before* the control flow statement takes effect.

**Example:**

```java
public class FinallyExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        try {
            System.out.println("Accessing array element...");
            System.out.println(numbers[1]); // No exception here
            System.out.println(numbers[5]); // This will throw ArrayIndexOutOfBoundsException
            System.out.println("This line will not be printed.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("Caught an exception: " + e.getMessage());
        } finally {
            System.out.println("This finally block always executes.");
        }
        System.out.println("Program continues after finally.");
    }
}
```

**Output:**
```
Accessing array element...
2
Caught an exception: Index 5 out of bounds for length 3
This finally block always executes.
Program continues after finally.
```

**Important Point to Remember:** The `finally` block is guaranteed to execute, making it the ideal place for releasing system resources to prevent leaks.

---

### 4. Multiple `catch` Clauses

*   **Purpose:** Allows you to handle different types of exceptions that might occur within a single `try` block.
*   **Rule:** The `catch` clauses must be ordered from the most specific exception type to the most general exception type. If a general `catch` clause appears before a specific one, the compiler will report an error because the specific exception would never be reached.
*   **Syntax:**
    ```java
    try {
        // Code that might throw multiple types of exceptions
    } catch (SpecificExceptionType1 e1) {
        // Handle SpecificExceptionType1
    } catch (SpecificExceptionType2 e2) {
        // Handle SpecificExceptionType2
    } catch (GeneralExceptionType e3) {
        // Handle any other exceptions inheriting from GeneralExceptionType
    }
    ```

**Example:**

```java
public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            String str = "abc";
            int num = Integer.parseInt(str); // Throws NumberFormatException
            // int result = num / 0; // Throws ArithmeticException
            // System.out.println(str.charAt(5)); // Throws StringIndexOutOfBoundsException
        } catch (NumberFormatException e) {
            System.err.println("Error: Invalid number format!");
            e.printStackTrace();
        } catch (ArithmeticException e) {
            System.err.println("Error: Division by zero!");
            e.printStackTrace();
        } catch (Exception e) { // Catches any other exceptions
            System.err.println("An unexpected error occurred.");
            e.printStackTrace();
        } finally {
            System.out.println("Cleanup in finally block.");
        }
        System.out.println("Program continues.");
    }
}
```

**Output (if `str = "abc"`):**
```
Error: Invalid number format!
java.lang.NumberFormatException: For input string: "abc"
	at java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)
	at java.lang.Integer.parseInt(Integer.java:627)
	at MultipleCatchExample.main(MultipleCatchExample.java:7)
Cleanup in finally block.
Program continues.
```

**Important Point to Remember:** The order of `catch` blocks is crucial. Always put more specific exceptions before more general ones. A common practice is to catch `Exception` as the last `catch` block to handle any unforeseen exceptions.

---

### 5. Nested `try` Statements

*   **Purpose:** You can place a `try` block inside another `try` block. This is useful when you have different levels of exception handling requirements for different parts of your code.
*   **How it works:** If an exception occurs in the inner `try` block, the inner `catch` blocks are checked first. If none of them handle the exception, it's then propagated to the outer `catch` blocks.
*   **Syntax:**
    ```java
    try {
        // Outer try block
        try {
            // Inner try block
        } catch (InnerExceptionType e) {
            // Handle inner exception
        }
        // Code after inner try-catch
    } catch (OuterExceptionType e) {
        // Handle outer exception
    }
    ```

**Example:**

```java
public class NestedTryExample {
    public static void main(String[] args) {
        try {
            System.out.println("Outer try block started.");
            try {
                System.out.println("Inner try block started.");
                int[] numbers = {1, 2, 3};
                System.out.println(numbers[5]); // This will throw ArrayIndexOutOfBoundsException
                System.out.println("Inner try block finished."); // Not printed
            } catch (ArrayIndexOutOfBoundsException e) {
                System.err.println("Caught exception in inner catch: " + e.getMessage());
                // Optionally re-throw or handle differently
                // throw e;
            }
            System.out.println("Outer try block continues.");
            int num = 10 / 0; // This will throw ArithmeticException
            System.out.println("Outer try block finished."); // Not printed
        } catch (ArithmeticException e) {
            System.err.println("Caught exception in outer catch: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Caught a general exception in outer catch.");
        } finally {
            System.out.println("Finally block executed.");
        }
        System.out.println("Program finished.");
    }
}
```

**Output:**
```
Outer try block started.
Inner try block started.
Caught exception in inner catch: Index 5 out of bounds for length 3
Outer try block continues.
Caught exception in outer catch: / by zero
Finally block executed.
Program finished.
```

**Important Point to Remember:** Nested `try` statements can make code harder to read and debug. Use them judiciously when the logic clearly benefits from layered exception handling. Often, multiple `catch` blocks are a cleaner alternative.

---

### 6. The `throw` Keyword

*   **Purpose:** Used to explicitly throw an exception from a method or a block of code. This is useful when you detect an error condition and want to signal it to the calling code.
*   **Syntax:**
    ```java
    throw new ExceptionType("Error message");
    ```
*   **Usage:** You can `throw` instances of `Exception` (checked) or `RuntimeException` (unchecked).
*   **Note:** After `throw`, the method execution stops immediately, and the exception propagates up the call stack.

**Example:**

```java
public class ThrowExample {

    public static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative.");
        } else if (age < 18) {
            throw new ArithmeticException("User is a minor."); // Using ArithmeticException for example
        } else {
            System.out.println("Age is valid.");
        }
    }

    public static void main(String[] args) {
        try {
            validateAge(25);
            validateAge(-5); // This will throw IllegalArgumentException
        } catch (IllegalArgumentException e) {
            System.err.println("Caught: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.err.println("Caught: " + e.getMessage());
        }

        try {
            validateAge(10); // This will throw ArithmeticException
        } catch (IllegalArgumentException e) {
            System.err.println("Caught: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.err.println("Caught: " + e.getMessage());
        }
    }
}
```

**Output:**
```
Age is valid.
Caught: Age cannot be negative.
Caught: User is a minor.
```

**Reference (Balagurusamy, 5/e, Chapter 8):** Balagurusamy states that `throw` is used to "explicitly throw an exception object" and that it allows "programmers to create custom exceptions or to signal particular error conditions."

---

### 7. The `throws` Keyword

*   **Purpose:** Used in a method signature to declare that the method might throw one or more checked exceptions. This informs the caller of the method that they need to handle these exceptions.
*   **Syntax:**
    ```java
    returnType methodName(parameters) throws ExceptionType1, ExceptionType2 {
        // Method body
    }
    ```
*   **Usage:** Primarily used for checked exceptions. If a method calls another method that declares `throws`, the calling method must either catch the declared exception or also declare `throws` for it.
*   **Important:** `throws` is a declaration, not an actual throw. It does not generate an exception; it simply states that the method might throw one.

**Example:**

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ThrowsExample {

    // This method declares that it might throw FileNotFoundException
    public static void readFileContent(String filePath) throws FileNotFoundException {
        File file = new File(filePath);
        Scanner scanner = new Scanner(file);
        while (scanner.hasNextLine()) {
            System.out.println(scanner.nextLine());
        }
        scanner.close();
        System.out.println("File reading complete.");
    }

    public static void main(String[] args) {
        // Since readFileContent declares FileNotFoundException,
        // we must either catch it or declare it here.
        try {
            readFileContent("my_data.txt"); // Assuming this file doesn't exist
        } catch (FileNotFoundException e) {
            System.err.println("Error: Could not find the file. Please check the path.");
            e.printStackTrace();
        }
        System.out.println("Program continues after attempting to read file.");
    }
}
```

**Reference (Liang, 7/e, Chapter 9):** Liang explains that `throws` is used "to declare that a method might throw an exception of a specified type." He highlights that it "transfers the responsibility of handling the exception to the caller."

---

### 8. `try-with-resources` Statement (Java 7+)

This is a more modern and cleaner way to handle resources that need to be closed, such as streams, file handlers, etc. It ensures that the resources are automatically closed at the end of the statement.

*   **Purpose:** To automatically close resources that implement the `java.lang.AutoCloseable` interface.
*   **Syntax:**
    ```java
    try (ResourceType resource = new ResourceType(...); ...) {
        // Code that uses the resource
    } catch (ExceptionType e) {
        // Handle exceptions
    }
    ```
*   **How it works:** Any resource declared within the parentheses of the `try` statement is automatically closed when the `try` block finishes execution, whether normally or due to an exception. The `finally` block is often no longer needed for resource cleanup.

**Example:**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        String filePath = "my_file.txt"; // Replace with an actual file path for testing

        // Using try-with-resources to automatically close BufferedReader
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            System.out.println("Finished reading file.");
        } catch (IOException e) {
            System.err.println("An error occurred while reading the file: " + e.getMessage());
            e.printStackTrace();
        }
        // No need for a finally block to close the reader
        System.out.println("Program continues.");
    }
}
```

**Important Point to Remember:** `try-with-resources` is the preferred way to manage resources that implement `AutoCloseable` in modern Java development.

---

### 9. Custom Exceptions

*   **Purpose:** To create your own exception types that are specific to your application's domain. This makes error handling more descriptive and tailored to your needs.
*   **How to create:**
    1.  Create a class that inherits from `Exception` (for checked exceptions) or `RuntimeException` (for unchecked exceptions).
    2.  It's good practice to include constructors that accept a message string and optionally a cause `Throwable`.

**Example:**

```java
// Custom Checked Exception
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

// Custom Unchecked Exception
class InvalidAccountStateException extends RuntimeException {
    public InvalidAccountStateException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    private double balance = 1000;

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount <= 0) {
            throw new InvalidAccountStateException("Withdrawal amount must be positive.");
        }
        if (amount > balance) {
            double shortBy = amount - balance;
            throw new InsufficientFundsException("Insufficient funds. You need " + shortBy + " more.", shortBy);
        }
        balance -= amount;
        System.out.println("Withdrawal successful. Remaining balance: " + balance);
    }

    public static void main(String[] args) {
        CustomExceptionDemo account = new CustomExceptionDemo();

        try {
            account.withdraw(1200);
        } catch (InsufficientFundsException e) {
            System.err.println("Transaction failed: " + e.getMessage());
            System.err.println("Short by: " + e.getAmountShort());
        }

        try {
            account.withdraw(-50);
        } catch (InsufficientFundsException e) {
            System.err.println("Transaction failed: " + e.getMessage());
        } catch (RuntimeException e) { // Catching our custom unchecked exception
            System.err.println("Invalid operation: " + e.getMessage());
        }
    }
}
```

**Output:**
```
Transaction failed: Insufficient funds. You need 200.0 more.
Short by: 200.0
Invalid operation: Withdrawal amount must be positive.
```

**Reference (Sierra & Bates, 2/e, Chapter 10):** Head First Java emphasizes creating custom exceptions to make your code "say what it means" and make the intent of your error handling clearer.

---

### Practice Questions

1.  **Identify:** What is the primary difference between a checked exception and an unchecked exception in Java? Provide one example of each.
2.  **Explain:** When would you use the `finally` block? Give a scenario where it's essential.
3.  **Analyze:** Consider the following code. What will be printed, and why?
    ```java
    public class TestException {
        public static void main(String[] args) {
            try {
                System.out.println("1");
                int result = 10 / 0; // Line A
                System.out.println("2"); // Line B
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("3");
            } finally {
                System.out.println("4");
            }
            System.out.println("5");
        }
    }
    ```
4.  **Apply:** Write a Java method that takes a string as input. If the string is empty, the method should `throw` a custom checked exception named `EmptyStringException`.
5.  **Differentiate:** What is the difference in purpose between `throw` and `throws`?

---

### Answers to Practice Questions

1.  **Identify:**
    *   **Checked Exception:** The Java compiler forces you to handle it (either by catching it or declaring `throws`). They represent external error conditions. Example: `FileNotFoundException`.
    *   **Unchecked Exception:** The compiler does not enforce handling. They usually indicate programming errors. Example: `NullPointerException`.

2.  **Explain:**
    The `finally` block is used for code that must execute regardless of whether an exception was thrown or caught. It's essential for resource cleanup, such as closing files, network connections, or releasing locks, to prevent resource leaks. For example, if you open a file to read it, the `finally` block ensures the file is closed even if an error occurs during reading.

3.  **Analyze:**
    The output will be:
    ```
    1
    4
    5
    ```
    *   The `try` block starts, and "1" is printed.
    *   `10 / 0` causes an `ArithmeticException`. Execution of the `try` block stops immediately at Line A. Line B is never reached.
    *   The JVM searches for a `catch` block that can handle `ArithmeticException`. The `ArrayIndexOutOfBoundsException` catch block does not match.
    *   The `finally` block is always executed, so "4" is printed.
    *   Since no `catch` block handled the `ArithmeticException`, it propagates up. In `main`, there is no further handler, so the program would normally terminate. However, the question asks what will be printed from the code given. The statement after the `try-catch-finally` block (printing "5") is outside of the immediate error handling context. Assuming the program continues after the exception is effectively unhandled at the top level (which would lead to termination if not caught by an outer handler), the code structure leads to "1", "4", and then "5" being the last printed output before termination. *Correction:* If the exception is truly unhandled, "5" would not be printed. The correct output considering the exception is unhandled by `main` is: `1\n4\nArithmeticException / by zero`. Let's re-evaluate with the assumption that the question implies the standard flow.
    *   **Corrected Analysis:** The `ArithmeticException` occurs. The `try` block stops. "1" is printed. The `catch (ArrayIndexOutOfBoundsException e)` does not match. The `finally` block executes, printing "4". The `ArithmeticException` is not caught by any handler within `main`. Therefore, the program will terminate with an `ArithmeticException` stack trace, and "5" will **not** be printed.

    *Let's refine the answer for clarity, assuming the question implies output *from the provided code segments*. The correct interpretation is that an uncaught exception causes termination after the `finally` block.*

    **Final Answer for Q3:**
    ```
    1
    4
    ```
    (Followed by an `ArithmeticException` termination message, and "5" is not printed).

4.  **Apply:**
    ```java
    // Define the custom checked exception
    class EmptyStringException extends Exception {
        public EmptyStringException(String message) {
            super(message);
        }
    }

    public class StringValidator {

        public static void processString(String input) throws EmptyStringException {
            if (input == null || input.isEmpty()) {
                throw new EmptyStringException("Input string cannot be null or empty.");
            }
            System.out.println("Processing: " + input);
        }

        public static void main(String[] args) {
            try {
                processString("Hello");
                processString(""); // This will throw the exception
            } catch (EmptyStringException e) {
                System.err.println("Error caught: " + e.getMessage());
            }
        }
    }
    ```

5.  **Differentiate:**
    *   `throw`: Used within a method to explicitly create and signal an exception object. It *throws* an exception.
    *   `throws`: Used in a method signature to declare that the method *might* throw one or more specified (usually checked) exceptions. It informs the caller about potential exceptions.

---

This comprehensive set of notes covers the essential aspects of exception handling in Java as per the module's topic and learning outcomes, referencing the provided textbooks and aligning with course outcomes.
