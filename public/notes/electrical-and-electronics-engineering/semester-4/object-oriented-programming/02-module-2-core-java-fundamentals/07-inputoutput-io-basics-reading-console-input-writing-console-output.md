---
title: "Input/Output - I/O Basics, Reading Console Input, Writing Console Output."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3600c"
status: "completed"
scrapedAt: "2026-05-23T16:17:33.571Z"
---
## Object-Oriented Programming: Module 2: Core Java Fundamentals

### Topic: Input/Output (I/O) Basics, Reading Console Input, Writing Console Output

This module focuses on fundamental Java concepts, and understanding how programs interact with the outside world through Input/Output (I/O) is crucial. This topic covers the basics of I/O operations, specifically how to read data from the console (user input) and write data to the console (program output).

---

### 1. I/O Basics in Java

Input/Output (I/O) operations in Java are handled through the `java.io` package and, more recently, the `java.nio` package (for Non-Blocking I/O). For console I/O, we primarily deal with streams.

**Key Concepts:**

*   **Streams:** A stream is a sequence of data. It's an abstraction that represents the flow of data from a source to a destination.
    *   **Input Stream:** Reads data from a source (e.g., keyboard, file).
    *   **Output Stream:** Writes data to a destination (e.g., console, file).
*   **Byte Streams vs. Character Streams:**
    *   **Byte Streams:** Deal with raw binary data, byte by byte. The primary classes are `InputStream` and `OutputStream`.
    *   **Character Streams:** Deal with textual data, character by character. These are more suitable for text-based I/O. The primary classes are `Reader` and `Writer`.
*   **`java.io` Package:** Contains the classes for traditional I/O operations, including console I/O.
*   **`java.lang.System` Class:** This class provides access to system resources. Key fields related to I/O are:
    *   `System.in`: A standard input stream, typically connected to the keyboard.
    *   `System.out`: A standard output stream, typically connected to the console.
    *   `System.err`: A standard error stream, also typically connected to the console, used for error messages.

**References:**

*   **Java: The Complete Reference (Schildt):** Chapter 15, "Input/Output: Streams, File I/O, and Serializable Objects." This chapter provides a comprehensive overview of Java's I/O system, including streams and their fundamental classes.
*   **Java How to Program (Deitel & Deitel):** Chapter 10, "Files and Exception Handling." While the chapter title focuses on files, it introduces stream-based I/O which is applicable to console I/O as well.
*   **Introduction to Java Programming (Liang):** Chapter 11, "Reading Input from a Console." This chapter is highly relevant to the topic of reading console input.

**Important Points to Remember:**

*   Streams are unidirectional: data flows either into or out of your program.
*   The `System.in`, `System.out`, and `System.err` are pre-defined `InputStream` and `PrintStream` objects.

---

### 2. Reading Console Input

In Java, the most common way to read input from the console is using the `Scanner` class from the `java.util` package. Before the `Scanner` class was introduced, the `DataInputStream` class and the `BufferedReader` class were commonly used.

#### 2.1 Using `java.util.Scanner` (Recommended)

The `Scanner` class is a versatile utility for parsing primitive types and strings using regular expressions. It simplifies reading various data types from input streams.

**Key Concepts:**

*   **`Scanner` Class:** Part of the `java.util` package.
*   **Constructor:** `Scanner(InputStream source)` – creates a `Scanner` object that reads from the specified input stream.
*   **Methods for Reading Input:**
    *   `nextByte()`: Reads the next byte.
    *   `nextShort()`: Reads the next short.
    *   `nextInt()`: Reads the next integer.
    *   `nextLong()`: Reads the next long.
    *   `nextFloat()`: Reads the next float.
    *   `nextDouble()`: Reads the next double.
    *   `nextBoolean()`: Reads the next boolean.
    *   `next()`: Reads the next token (word) separated by whitespace.
    *   `nextLine()`: Reads the entire line of text until a line terminator is encountered.
    *   `hasNextByte()`, `hasNextShort()`, `hasNextInt()`, etc.: Methods to check if the next input token can be interpreted as the corresponding primitive type.
    *   `hasNext()`: Checks if there is another token.
    *   `hasNextLine()`: Checks if there is another line.
*   **Closing the Scanner:** It's good practice to close the `Scanner` when you are finished with it using the `close()` method to release system resources.

**Example:**

```java
import java.util.Scanner; // Import the Scanner class

public class ConsoleInputExample {

    public static void main(String[] args) {

        // Create a Scanner object to read input from the console (System.in)
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your name:");
        String name = scanner.nextLine(); // Reads the entire line

        System.out.println("Enter your age:");
        int age = scanner.nextInt(); // Reads the next integer

        System.out.println("Enter your favorite decimal number:");
        double decimalValue = scanner.nextDouble(); // Reads the next double

        System.out.println("\n--- Your Input ---");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Favorite Decimal: " + decimalValue);

        // Close the scanner to release resources
        scanner.close();
    }
}
```

**Explanation of Example:**

1.  We import the `Scanner` class.
2.  We create a `Scanner` object named `scanner` and pass `System.in` to its constructor.
3.  `scanner.nextLine()` reads the entire line entered by the user and stores it in the `name` variable.
4.  `scanner.nextInt()` reads the next integer entered by the user and stores it in the `age` variable.
5.  `scanner.nextDouble()` reads the next double entered by the user and stores it in the `decimalValue` variable.
6.  Finally, we print the collected information and close the scanner.

**Important Note on `nextInt()`, `nextDouble()`, etc. followed by `nextLine()`:**

When you read an integer or double using `nextInt()` or `nextDouble()`, the newline character (`\n`) that the user presses after entering the number remains in the input buffer. If you then call `nextLine()` immediately after, it will read this leftover newline character as an empty string.

**Solution:** Call `scanner.nextLine()` after reading a number to consume the leftover newline character.

**Example demonstrating the issue and solution:**

```java
import java.util.Scanner;

public class ScannerIssueExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter an integer:");
        int number = scanner.nextInt();

        // Problem: The newline character after the integer is still in the buffer.
        // If we call nextLine() now, it will read that newline.
        // System.out.println("Enter a string:");
        // String text = scanner.nextLine(); // This would read an empty string

        // Solution: Consume the leftover newline
        scanner.nextLine(); // Consume the newline character

        System.out.println("Enter a string:");
        String text = scanner.nextLine(); // Now this will read the user's input correctly

        System.out.println("Number entered: " + number);
        System.out.println("String entered: " + text);

        scanner.close();
    }
}
```

**References:**

*   **Java How to Program (Deitel & Deitel):** Chapter 10, "Files and Exception Handling" often covers `Scanner` as a modern way to handle input.
*   **Introduction to Java Programming (Liang):** Chapter 11 explicitly details the usage of `Scanner` for console input.
*   **Head First Java (Sierra):** May offer a more intuitive explanation of `Scanner` in its "input and output" sections.

#### 2.2 Using `BufferedReader` (Older but still relevant)

The `BufferedReader` class is an efficient character-reading utility. It reads text from a character-input stream, buffering characters so as to provide for the efficient reading of characters, arrays, and lines.

**Key Concepts:**

*   **`BufferedReader` Class:** Part of the `java.io` package.
*   **Constructor:** `BufferedReader(Reader in)` – creates a `BufferedReader` that buffers characters from the specified `Reader`.
*   **`InputStreamReader`:** This class bridges byte streams to character streams. It reads bytes from an input stream and translates them into characters using a specified charset.
*   **Methods for Reading Input:**
    *   `readLine()`: Reads a line of text. Returns `null` if the end of the stream has been reached.
    *   `read()`: Reads a single character.
*   **Exception Handling:** `readLine()` and `read()` methods can throw `IOException`. Therefore, you need to handle this exception using `try-catch` blocks.
*   **Closing:** `BufferedReader` should also be closed.

**Example:**

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class BufferedReaderInputExample {

    public static void main(String[] args) {

        // Create an InputStreamReader to read from System.in
        InputStreamReader isr = new InputStreamReader(System.in);

        // Wrap InputStreamReader with BufferedReader for efficient reading
        BufferedReader reader = new BufferedReader(isr);

        try {
            System.out.println("Enter your name:");
            String name = reader.readLine(); // Reads the entire line

            System.out.println("Enter your age:");
            // readLine() returns a String, so we need to convert it to an int
            int age = Integer.parseInt(reader.readLine());

            System.out.println("\n--- Your Input ---");
            System.out.println("Name: " + name);
            System.out.println("Age: " + age);

        } catch (IOException e) {
            System.err.println("An error occurred during input: " + e.getMessage());
        } finally {
            try {
                // Close the reader (and implicitly the underlying InputStreamReader)
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
                System.err.println("Error closing the reader: " + e.getMessage());
            }
        }
    }
}
```

**Explanation of Example:**

1.  We import necessary classes: `BufferedReader`, `InputStreamReader`, and `IOException`.
2.  We create an `InputStreamReader` that reads from `System.in`.
3.  We wrap the `InputStreamReader` with a `BufferedReader` for efficiency.
4.  `reader.readLine()` reads the user's input as a `String`.
5.  Since `readLine()` always returns a String, we use `Integer.parseInt()` to convert the string representation of the age into an `int`. This method can throw a `NumberFormatException` if the input is not a valid integer.
6.  We use a `try-catch` block to handle potential `IOException` during reading and `NumberFormatException` during parsing.
7.  The `finally` block ensures the `reader` is closed, releasing resources.

**References:**

*   **Java: The Complete Reference (Schildt):** Chapter 15 covers `BufferedReader` in detail.
*   **Core Java: An Integrated Approach (Nageswararao):** Likely covers `BufferedReader` as a standard I/O mechanism.

#### 2.3 Reading Primitive Data Types with `BufferedReader`

To read primitive types (like `int`, `double`, etc.) using `BufferedReader`, you must read them as `String` using `readLine()` and then convert them using wrapper classes (e.g., `Integer.parseInt()`, `Double.parseDouble()`).

**Common Conversion Methods:**

*   `Integer.parseInt(String s)`
*   `Double.parseDouble(String s)`
*   `Float.parseFloat(String s)`
*   `Long.parseLong(String s)`
*   `Boolean.parseBoolean(String s)`
*   `Short.parseShort(String s)`
*   `Byte.parseByte(String s)`

**Important Points to Remember:**

*   `Scanner` is generally preferred for its convenience and flexibility in reading various data types directly.
*   `BufferedReader` is more efficient for reading large amounts of text, as it uses an internal buffer.
*   Always handle `IOException` when using `BufferedReader` or `InputStreamReader`.
*   Be mindful of the newline character issue when mixing `nextInt()`, `nextDouble()`, etc., with `nextLine()` when using `Scanner`.

---

### 3. Writing Console Output

Writing to the console in Java is primarily done using `System.out`, which is an instance of `PrintStream`. `PrintStream` provides a convenient way to print formatted data to various output destinations, including the console.

**Key Concepts:**

*   **`System.out`:** A `PrintStream` object connected to the standard output stream (console).
*   **`PrintStream` Class:** Provides methods for printing formatted data.
*   **Methods for Writing Output:**
    *   `print(data)`: Prints the specified data to the console without adding a newline character at the end.
    *   `println(data)`: Prints the specified data to the console and then adds a newline character at the end. This is the most commonly used method for displaying output.
    *   `printf(format, args...)`: Prints formatted output according to a specified format string. This is similar to C's `printf`.
    *   `format(format, args...)`: Similar to `printf`, but returns the formatted string.

**Example:**

```java
public class ConsoleOutputExample {

    public static void main(String[] args) {

        String message = "Hello, Java!";
        int number = 123;
        double pi = 3.14159;

        // Using println() - adds a newline after each print
        System.out.println("This is a message: " + message);
        System.out.println("This is a number: " + number);
        System.out.println("This is pi: " + pi);

        System.out.println("\n--------------------\n"); // Separator

        // Using print() - does NOT add a newline
        System.out.print("This is message using print: ");
        System.out.print(message);
        System.out.print(" "); // Add a space
        System.out.print("And this is a number using print: ");
        System.out.print(number);
        System.out.println(); // Add a newline manually

        System.out.println("\n--------------------\n"); // Separator

        // Using printf() - for formatted output
        System.out.printf("Formatted String: %s\n", message); // %s for string
        System.out.printf("Formatted Integer: %d\n", number);  // %d for integer
        System.out.printf("Formatted Double (2 decimal places): %.2f\n", pi); // %.2f for double with 2 decimal places
        System.out.printf("Formatted Double (5 decimal places): %.5f\n", pi); // %.5f for double with 5 decimal places
        System.out.printf("Multiple values: Name: %s, Age: %d\n", "Alice", 30);
    }
}
```

**Explanation of Example:**

1.  `System.out.println()` is used to display strings, integers, and doubles, each on a new line.
2.  `System.out.print()` is used to display output without a newline. Notice how subsequent `print()` calls appear on the same line. A manual `System.out.println()` is used at the end to move to the next line.
3.  `System.out.printf()` demonstrates formatted output:
    *   `%s` is a format specifier for strings.
    *   `%d` is a format specifier for integers.
    *   `%.2f` is a format specifier for floating-point numbers, displaying exactly two digits after the decimal point.
    *   `\n` is used within the format string to explicitly add a newline character.

**References:**

*   **Java: The Complete Reference (Schildt):** Chapter 15 covers `PrintStream` and its methods like `print`, `println`, and `printf`.
*   **Java How to Program (Deitel & Deitel):** Likely covers `System.out.println` and `printf` in early chapters related to basic output.
*   **Introduction to Java Programming (Liang):** Chapter 3 or 4 usually covers basic output statements.

**Important Points to Remember:**

*   `println()` is generally preferred for displaying output that should be on separate lines for readability.
*   Use `print()` when you want to build a line of output across multiple `print()` calls.
*   `printf()` is powerful for creating neatly formatted output, especially when dealing with numbers and precise formatting.

---

### Practice Questions and Exercises

**Objective Questions:**

1.  Which package contains the `Scanner` class?
    a) `java.io`
    b) `java.lang`
    c) `java.util`
    d) `java.nio`

2.  What is the primary method in `Scanner` to read an entire line of text?
    a) `next()`
    b) `nextLine()`
    c) `read()`
    d) `getString()`

3.  Which of the following is used to read from `System.in` using `BufferedReader`?
    a) `new BufferedReader(System.in)`
    b) `new InputStreamReader(System.in)`
    c) `new BufferedReader(new InputStreamReader(System.in))`
    d) `new Scanner(System.in)`

4.  Which `System.out` method prints data without adding a newline at the end?
    a) `println()`
    b) `print()`
    c) `printf()`
    d) `output()`

5.  What is the format specifier for printing a floating-point number with 3 decimal places using `printf`?
    a) `%f`
    b) `%.3f`
    c) `%3.f`
    d) `%d`

**Subjective Questions:**

1.  Explain the concept of streams in Java I/O. Differentiate between byte streams and character streams.
2.  Describe the advantages of using the `Scanner` class for console input compared to older methods.
3.  How would you read an integer and then a string from the console using `Scanner`, and what is a potential pitfall to avoid?
4.  Explain the process of reading an integer from the console using `BufferedReader` and `Integer.parseInt()`. What exceptions might be encountered?
5.  Demonstrate how to print a formatted string, an integer, and a double with two decimal places to the console using `System.out.printf()`.

**Programming Exercises:**

1.  **Simple Calculator:** Write a Java program that prompts the user to enter two numbers (integers) and an operator (+, -, \*, /). Based on the operator, perform the calculation and display the result to the console. Use `Scanner` for input. Handle potential `ArithmeticException` for division by zero.

2.  **User Information:** Create a program that asks the user for their full name, age, and city. Then, print this information back to the console in a formatted way. For example:
    ```
    --- User Profile ---
    Name: John Doe
    Age: 25
    City: New York
    ```

3.  **Input Validation (Basic):** Write a program that asks the user to enter a positive integer. If the user enters a non-positive integer or non-numeric input, prompt them to try again. Use `Scanner` and a loop for re-prompting.

---

### Answers to Practice Questions

**Objective Questions Answers:**

1.  **c) `java.util`**
2.  **b) `nextLine()`**
3.  **c) `new BufferedReader(new InputStreamReader(System.in))`**
4.  **b) `print()`**
5.  **b) `%.3f`**

**Subjective Questions Answers (Key Points):**

1.  **Streams:** Sequence of data, flow from source to destination.
    *   **Byte Streams:** Raw binary data (e.g., `InputStream`, `OutputStream`).
    *   **Character Streams:** Textual data (e.g., `Reader`, `Writer`). `System.in` is a byte stream, but typically wrapped to handle characters.
2.  **`Scanner` Advantages:** Easier parsing of primitive types and strings, methods like `hasNextXxx()` for validation, handles different delimiters.
3.  **Reading Integer then String with `Scanner`:**
    *   Use `scanner.nextInt()` to read the integer.
    *   **Pitfall:** `nextInt()` leaves the newline character in the buffer.
    *   **Solution:** Call `scanner.nextLine()` after `nextInt()` to consume the newline before calling `scanner.nextLine()` again for the string input.
4.  **Reading Integer with `BufferedReader`:**
    *   Wrap `System.in` with `InputStreamReader`.
    *   Wrap `InputStreamReader` with `BufferedReader`.
    *   Use `reader.readLine()` to get the input as a String.
    *   Use `Integer.parseInt(reader.readLine())` to convert the String to an int.
    *   **Exceptions:** `IOException` (for reading) and `NumberFormatException` (if input is not a valid integer).
5.  **Formatted Output with `printf`:**
    ```java
    String name = "Bob";
    int count = 5;
    double price = 19.995;

    System.out.printf("Name: %s\n", name);
    System.out.printf("Count: %d\n", count);
    System.out.printf("Price: %.2f\n", price); // Outputs 20.00
    ```

**Programming Exercises Answers (Conceptual Outline):**

1.  **Simple Calculator:**
    *   Use `Scanner` to read two `double` numbers (for generality) and a `char` for the operator.
    *   Use a `switch` statement or `if-else if` to handle the operator.
    *   Inside the division case, check if the divisor is 0.
    *   Use `try-catch` for `ArithmeticException`.
    *   Print the result using `System.out.println()`.

2.  **User Information:**
    *   Use `Scanner` to read `nextLine()` for name and city, and `nextInt()` for age.
    *   Remember to consume the newline after `nextInt()` if reading a string afterward.
    *   Use `System.out.printf()` or concatenated `System.out.println()` to display the formatted output.

3.  **Input Validation (Basic):**
    *   Use a `while(true)` loop for continuous prompting.
    *   Inside the loop, prompt for input.
    *   Use `hasNextInt()` to check if the next token is an integer.
    *   If `hasNextInt()` is true, read the integer with `nextInt()`. Check if it's positive. If yes, break the loop.
    *   If `hasNextInt()` is false or the number is not positive, print an error message and consume the invalid input (e.g., `scanner.next()`).

---

This comprehensive set of notes covers the fundamental aspects of console input and output in Java, aligning with the learning outcomes and providing practical examples and exercises. Remember to practice these concepts to solidify your understanding.
