---
title: "Writing Console Output"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe6a4"
status: "completed"
scrapedAt: "2026-05-23T17:51:50.679Z"
---
# Module 3: More Features of Java - Writing Console Output

## 1. Introduction to Console Output in Java

Console output is the primary way to display information from a Java program to the user or to a command-line interface. It's crucial for debugging, user interaction, and presenting program results.

**Key Concepts:**

*   **Standard Output Stream:** A predefined stream in Java that directs output to the console.
*   **`System.out`:** A static member of the `System` class that represents the standard output stream.
*   **`print()` and `println()` methods:** Methods of the `PrintStream` class (which `System.out` is an instance of) used to display output.

**Reference:**

*   **Java: The Complete Reference (Schildt, 8/e):** Chapter 10, "The `System` Class". This chapter details the `System` class and its members, including `out`.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Chapter 3, "Introduction to Classes, Objects, Methods, Instance-Variables, Strings and Software Technologies". While not solely about output, it introduces basic output using `System.out.println`.

## 2. The `System.out` Object and its Methods

The `System.out` object is an instance of the `PrintStream` class. This class provides methods for writing various data types to the output stream.

**Key Concepts:**

*   **`System.out.print(data)`:** Writes the specified `data` to the console without appending a newline character at the end. The cursor remains on the same line.
*   **`System.out.println(data)`:** Writes the specified `data` to the console and then appends a newline character. The cursor moves to the beginning of the next line.
*   **Overloaded Methods:** `print()` and `println()` are overloaded to accept various data types like `String`, `int`, `double`, `boolean`, `char`, and `Object`.

**Examples:**

```java
public class ConsoleOutputDemo {
    public static void main(String[] args) {
        // Using System.out.print
        System.out.print("Hello");
        System.out.print(" ");
        System.out.print("World!");

        // Output so far: Hello World! (cursor is after !)

        System.out.println(); // Move to the next line

        // Using System.out.println
        System.out.println("This is line one.");
        System.out.println("This is line two.");

        // Output:
        // This is line one.
        // This is line two.

        // Printing different data types
        String name = "Alice";
        int age = 30;
        double salary = 50000.50;
        boolean isActive = true;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        System.out.println("Is Active: " + isActive);

        // Output:
        // Name: Alice
        // Age: 30
        // Salary: 50000.5
        // Is Active: true
    }
}
```

**Important Points to Remember:**

*   The `+` operator is used for string concatenation when combining strings with other data types for printing.
*   `println()` is generally preferred for readability as it automatically handles line breaks.

**Reference:**

*   **Java: The Complete Reference (Schildt, 8/e):** Chapter 10 reiterates the usage of `print()` and `println()`.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Chapter 3 continues to build on this foundation with examples of formatted output.
*   **Introduction to Java Programming (Liang, 7/e):** Chapter 2, "Java Fundamentals", covers basic output statements.

## 3. Formatting Console Output (`printf` and `format`)

For more sophisticated control over the output's appearance (e.g., specifying decimal places, aligning text, padding with spaces), Java provides the `printf()` and `format()` methods.

**Key Concepts:**

*   **`System.out.printf(formatString, arg1, arg2, ...)`:** Allows formatted output using format specifiers.
*   **`System.out.format(formatString, arg1, arg2, ...)`:** Identical to `printf()`.
*   **Format Specifiers:** Special character sequences that define how an argument should be formatted. Common specifiers include:
    *   `%s`: String
    *   `%d`: Decimal integer
    *   `%f`: Floating-point number (decimal)
    *   `%c`: Character
    *   `%b`: Boolean
    *   `%n`: Platform-specific newline character (preferred over `\n` for portability).
*   **Format Flags, Width, Precision:** These can be used to control alignment, padding, and the number of digits displayed.
    *   **Width:** Minimum number of characters to print.
    *   **Precision:** For floating-point numbers, the number of digits after the decimal point. For strings, the maximum number of characters to print.
    *   **Flags:**
        *   `-`: Left-align the output within the specified width.
        *   `+`: Always include a sign (+ or -) for numeric values.
        *   `0`: Pad numeric values with leading zeros instead of spaces.
        *   `,`: Use the locale's grouping separator for numbers (e.g., commas).

**Examples:**

```java
public class FormattedOutputDemo {
    public static void main(String[] args) {
        String product = "Laptop";
        double price = 1250.75;
        int quantity = 3;
        double totalCost = price * quantity;

        // Basic formatting
        System.out.printf("Product: %s%n", product);
        System.out.printf("Price: $%.2f%n", price); // %.2f formats to 2 decimal places
        System.out.printf("Quantity: %d%n", quantity);
        System.out.printf("Total Cost: $%.2f%n", totalCost);

        // Output:
        // Product: Laptop
        // Price: $1250.75
        // Quantity: 3
        // Total Cost: $3752.25

        // Using width and alignment
        System.out.printf("%-10s | %10.2f%n", "Item", "Price"); // Left-align Item, Right-align Price
        System.out.printf("---------------------%n");
        System.out.printf("%-10s | $%10.2f%n", "Keyboard", 75.99);
        System.out.printf("%-10s | $%10.2f%n", "Mouse", 25.50);

        // Output:
        // Item       |      Price
        // ---------------------
        // Keyboard   | $     75.99
        // Mouse      | $     25.50

        // Using zero padding and sign
        int accountNumber = 123;
        double balance = -450.67;

        System.out.printf("Account Number (padded): %010d%n", accountNumber); // Pad with 10 digits, leading zeros
        System.out.printf("Balance with sign: %+f%n", balance); // Always show sign

        // Output:
        // Account Number (padded): 0000000123
        // Balance with sign: -450.670000
    }
}
```

**Important Points to Remember:**

*   `%n` is preferred over `\n` for platform-independent newline characters.
*   The order of flags, width, and precision matters in the format specifier (e.g., `%[flags][width][.precision]conversion`).
*   Familiarize yourself with the various conversion characters and their options for comprehensive formatting.

**Reference:**

*   **Java: The Complete Reference (Schildt, 8/e):** Chapter 10, "The `System` Class", provides details on `printf()` and `format()`.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Chapter 6, "Arrays", might include examples of formatted output for displaying array elements.
*   **Introduction to Java Programming (Liang, 7/e):** Chapter 4, "Control Statements: Selection", might show basic formatted output. Chapter 9, "Strings", could also have relevant examples.

## 4. Printing Objects and String Representation

When you use `System.out.println()` with an object, Java calls the object's `toString()` method to get its string representation.

**Key Concepts:**

*   **`toString()` method:** A method inherited from the `Object` class. By default, it returns a string consisting of the object's class name, followed by `@`, followed by the object's hash code.
*   **Overriding `toString()`:** It's a common and good practice to override the `toString()` method in your custom classes to provide a meaningful string representation of the object's state.

**Examples:**

```java
class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Default toString() behavior (if not overridden)
    // Would output something like: Person@15db9742

    // Overriding toString() for a meaningful representation
    @Override
    public String toString() {
        return "Person{" +
               "name='" + name + '\'' +
               ", age=" + age +
               '}';
    }
}

public class ObjectOutputDemo {
    public static void main(String[] args) {
        Person person1 = new Person("Bob", 25);
        Person person2 = new Person("Charlie", 40);

        System.out.println(person1); // Calls person1.toString()
        System.out.println(person2); // Calls person2.toString()

        // Output:
        // Person{name='Bob', age=25}
        // Person{name='Charlie', age=40}

        String greeting = "Hello";
        System.out.println(greeting); // String's toString() returns the string itself

        // Output:
        // Hello
    }
}
```

**Important Points to Remember:**

*   Always override `toString()` for your custom classes to make debugging and displaying object information easier and more informative.
*   The `toString()` method should return a concise and readable representation of the object.

**Reference:**

*   **Java: The Complete Reference (Schildt, 8/e):** Chapter 9, "Classes", discusses the `Object` class and overriding methods like `toString()`.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Chapter 4, "Control Statements: Iteration", might show examples of printing objects within loops. Chapter 5, "Methods", reinforces the concept of method calls, including `toString()`.
*   **Programming JAVA a Primer (Balagurusamy, 5/e):** Chapter 6, "Methods and Data Abstraction", likely covers method overriding, including `toString()`.

## 5. Aligning with Course Outcomes

This module's topic, "Writing Console Output," directly contributes to several course outcomes:

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**
    *   **Contribution:** Understanding `System.out.print`/`println` and `printf` is fundamental to displaying results and intermediate values of data types and variables within programs developed using control statements and object-oriented concepts. The `toString()` method bridges the gap between object concepts and console output.
    *   **Knowledge Level (K3):** Applying these output methods to display program states and results requires understanding and using them in practical programming scenarios.

*   **CO3: Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files.**
    *   **Contribution:** While this topic focuses on console output (an output stream), it lays the groundwork for understanding more complex I/O operations, including file I/O. The principles of streams and writing data are shared. Also, useful output formatting can contribute to program robustness by presenting information clearly.
    *   **Knowledge Level (K3):** Understanding console output is a stepping stone to understanding the broader I/O stream concept required for file handling.

## 6. Practice Questions and Exercises

**Question 1:**
What is the difference between `System.out.print()` and `System.out.println()`?

**Answer 1:**
`System.out.print()` displays output without moving the cursor to the next line. `System.out.println()` displays output and then moves the cursor to the beginning of the next line.

**Question 2:**
Write a Java program that prints your name and age on separate lines using `println()`. Then, print the same information on a single line using `print()` and string concatenation.

**Answer 2:**

```java
public class NameAgePrinter {
    public static void main(String[] args) {
        String name = "Java Learner";
        int age = 20;

        // Using println()
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);

        // Using print()
        System.out.print("My name is " + name + " and I am " + age + " years old.");
    }
}
```

**Question 3:**
Format the following data to be displayed as a table row, aligning the product name to the left in a 15-character space and the price to the right in an 8-character space with 2 decimal places for the price.

`product = "Monitor"`
`price = 299.99`

**Answer 3:**

```java
public class TableFormatter {
    public static void main(String[] args) {
        String product = "Monitor";
        double price = 299.99;

        System.out.printf("%-15s | %8.2f%n", product, price);
    }
}
```
**Output:**
```
Monitor         |   299.99
```

**Question 4:**
Explain the default behavior of `System.out.println()` when passed an object of a custom class that has not overridden the `toString()` method.

**Answer 4:**
When `System.out.println()` is given an object without an overridden `toString()` method, it defaults to printing the object's class name, followed by an '@' symbol, and then the object's hash code (a unique numerical representation). For example, `com.example.MyClass@1b6d3576`.

**Question 5:**
Create a `Book` class with `title` and `author` fields. Override the `toString()` method to return a string in the format: `"Title by Author"`. Then, create a `Book` object and print it to the console.

**Answer 5:**

```java
class Book {
    String title;
    String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    @Override
    public String toString() {
        return "\"" + this.title + "\" by " + this.author;
    }
}

public class BookPrinter {
    public static void main(String[] args) {
        Book book1 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams");
        System.out.println(book1);
    }
}
```
**Output:**
```
"The Hitchhiker's Guide to the Galaxy" by Douglas Adams
```

## 7. Summary and Key Takeaways

*   **Core Output Methods:** `System.out.print()` and `System.out.println()` are fundamental for displaying data on the console.
*   **`println()` vs. `print()`:** `println()` adds a newline, `print()` does not.
*   **Data Types:** `print()` and `println()` are overloaded to handle various primitive data types and objects. String concatenation (`+`) is often used.
*   **Formatted Output:** `System.out.printf()` and `System.out.format()` offer precise control over output appearance using format specifiers, flags, width, and precision.
*   **Object Representation:** Overriding the `toString()` method in custom classes is essential for providing meaningful string representations of objects, which are then used by `System.out.println()`.
*   **Connection to Course Outcomes:** Console output is a basic but vital skill for demonstrating and debugging programs developed using various Java constructs, aligning with CO2 and laying the groundwork for CO3.

This comprehensive study of writing console output in Java is crucial for understanding program flow, debugging, and presenting information effectively.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
