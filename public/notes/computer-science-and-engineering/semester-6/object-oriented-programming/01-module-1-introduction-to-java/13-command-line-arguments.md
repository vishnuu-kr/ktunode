---
title: "Command Line Arguments"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf8f"
status: "completed"
scrapedAt: "2026-05-20T16:55:55.020Z"
---
# Module 1: Introduction to Java - Command Line Arguments

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand what command line arguments are in Java.
*   Identify how Java programs receive command line arguments.
*   Access and process command line arguments within a Java program.
*   Handle different data types of command line arguments.
*   Write Java programs that utilize command line arguments for dynamic behavior.

## 1. What are Command Line Arguments?

Command line arguments are **values passed to a Java program when it is executed from the command line (or terminal)**. These arguments allow you to provide input or configuration information to your program without modifying its source code.

Think of them as **external inputs** that shape how your program runs for a specific execution.

### Analogy:

Imagine you're ordering food at a restaurant. You tell the waiter what dish you want (the program name) and then specify any modifications or special requests like "no onions" or "extra spice" (the command line arguments).

## 2. How Java Programs Receive Command Line Arguments

In Java, command line arguments are automatically passed to the `main` method of your program. The `main` method signature is crucial here:

```java
public static void main(String[] args) {
    // Program code here
}
```

The `String[] args` parameter is an **array of strings**. Each element in this array represents one command line argument passed to the program.

*   `String[]`: This indicates that `args` is an array, and each element within it will be a `String`.
*   `args`: This is the conventional name for the parameter holding the command line arguments, but you can technically use any valid variable name (e.g., `String[] arguments`, `String[] params`).

### How it works under the hood:

When you run a Java program from the command line like this:

```bash
java YourProgramName arg1 arg2 arg3
```

The Java Virtual Machine (JVM) takes the strings `arg1`, `arg2`, and `arg3` and places them into the `args` array in the `main` method.

*   `args[0]` will be "arg1"
*   `args[1]` will be "arg2"
*   `args[2]` will be "arg3"

**Important Note:** Even if no arguments are provided, the `args` array will exist, but it will be an **empty array** (length 0), not `null`.

## 3. Accessing and Processing Command Line Arguments

You can access individual command line arguments using their index in the `args` array.

### Key Operations:

*   **Getting the number of arguments:** Use `args.length` to find out how many arguments were passed.
*   **Accessing a specific argument:** Use `args[index]`, where `index` is the position of the argument (starting from 0).
*   **Iterating through all arguments:** Use a loop (e.g., `for` loop, enhanced `for` loop) to process all arguments.

### Example 1: Displaying all arguments

```java
public class DisplayArguments {
    public static void main(String[] args) {
        System.out.println("Total number of arguments: " + args.length);

        if (args.length > 0) {
            System.out.println("Arguments passed:");
            for (int i = 0; i < args.length; i++) {
                System.out.println("args[" + i + "]: " + args[i]);
            }
        } else {
            System.out.println("No arguments were passed.");
        }
    }
}
```

**How to compile and run:**

1.  **Save:** Save the code as `DisplayArguments.java`.
2.  **Compile:** Open a terminal/command prompt, navigate to the directory where you saved the file, and compile:
    ```bash
    javac DisplayArguments.java
    ```
3.  **Run (with arguments):**
    ```bash
    java DisplayArguments Hello World 123
    ```

**Expected Output:**

```
Total number of arguments: 3
Arguments passed:
args[0]: Hello
args[1]: World
args[2]: 123
```

**Run (without arguments):**

```bash
java DisplayArguments
```

**Expected Output:**

```
Total number of arguments: 0
No arguments were passed.
```

### Example 2: Using arguments for a simple calculation

```java
public class Calculator {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.out.println("Usage: java Calculator <number1> <number2>");
            return; // Exit the program if arguments are incorrect
        }

        try {
            // Convert string arguments to integers
            int num1 = Integer.parseInt(args[0]);
            int num2 = Integer.parseInt(args[1]);

            int sum = num1 + num2;
            System.out.println("The sum of " + num1 + " and " + num2 + " is: " + sum);

        } catch (NumberFormatException e) {
            System.out.println("Error: Please provide valid integers as arguments.");
        }
    }
}
```

**How to compile and run:**

1.  **Save:** Save the code as `Calculator.java`.
2.  **Compile:**
    ```bash
    javac Calculator.java
    ```
3.  **Run (with valid arguments):**
    ```bash
    java Calculator 50 75
    ```
    **Expected Output:**
    ```
    The sum of 50 and 75 is: 125
    ```

4.  **Run (with incorrect number of arguments):**
    ```bash
    java Calculator 10
    ```
    **Expected Output:**
    ```
    Usage: java Calculator <number1> <number2>
    ```

5.  **Run (with non-numeric arguments):**
    ```bash
    java Calculator ten twenty
    ```
    **Expected Output:**
    ```
    Error: Please provide valid integers as arguments.
    ```

## 4. Handling Different Data Types

Command line arguments are always passed as **strings**. If you need to use them as other data types (integers, doubles, booleans, etc.), you must **convert them** using the appropriate wrapper classes.

### Common Type Conversions:

*   **String to Integer:** `Integer.parseInt(String s)`
*   **String to Double:** `Double.parseDouble(String s)`
*   **String to Boolean:** `Boolean.parseBoolean(String s)` (returns `true` for "true", case-insensitive; otherwise `false`)
*   **String to Long:** `Long.parseLong(String s)`
*   **String to Float:** `Float.parseFloat(String s)`

### **Error Handling:**

It's crucial to include **error handling** (like `try-catch` blocks) when performing type conversions. If a user provides an argument that cannot be converted to the expected data type (e.g., passing "abc" when an integer is expected), a `NumberFormatException` (or similar) will occur.

**Best Practice:** Always validate the number of arguments and the format of each argument before attempting to use them.

## 5. Writing Java Programs that Utilize Command Line Arguments

Command line arguments are excellent for:

*   **Configuration:** Setting parameters like file paths, database connection details, or operational modes.
*   **Input Data:** Providing initial values or data for calculations.
*   **Controlling Behavior:** Enabling or disabling features, specifying output formats.
*   **Testing:** Passing specific test cases or data.

### Example 3: Simple file processing flag

```java
public class FileProcessor {
    public static void main(String[] args) {
        boolean verboseMode = false;
        String inputFileName = null;
        String outputFileName = null;

        // Process arguments
        for (String arg : args) {
            if (arg.equals("-v") || arg.equals("--verbose")) {
                verboseMode = true;
            } else if (arg.startsWith("-i=")) {
                inputFileName = arg.substring(3); // Get the part after "-i="
            } else if (arg.startsWith("-o=")) {
                outputFileName = arg.substring(3); // Get the part after "-o="
            } else {
                System.out.println("Ignoring unknown argument: " + arg);
            }
        }

        // Program logic based on arguments
        if (inputFileName == null) {
            System.out.println("Error: Input file name is required.");
            System.out.println("Usage: java FileProcessor -i=<inputFile> [-o=<outputFile>] [--verbose]");
            return;
        }

        System.out.println("Processing file: " + inputFileName);
        if (outputFileName != null) {
            System.out.println("Output will be written to: " + outputFileName);
        }
        if (verboseMode) {
            System.out.println("Verbose mode enabled.");
        }

        // --- Actual file processing logic would go here ---
        System.out.println("File processing simulation complete.");
    }
}
```

**How to compile and run:**

1.  **Save:** Save the code as `FileProcessor.java`.
2.  **Compile:**
    ```bash
    javac FileProcessor.java
    ```
3.  **Run (various combinations):**

    *   `java FileProcessor -i=data.txt`
    *   `java FileProcessor -i=report.csv -o=summary.txt`
    *   `java FileProcessor -i=config.json --verbose`
    *   `java FileProcessor -i=input.log -o=output.log -v`
    *   `java FileProcessor` (to see usage error)

**Observe how the program's output changes based on the provided arguments.**

## Key Concepts & Definitions Summary

*   **Command Line Arguments:** Values passed to a Java program at runtime via the command line.
*   **`String[] args`:** The parameter in the `main` method that holds command line arguments as an array of strings.
*   **`args.length`:** Property to get the number of command line arguments.
*   **`args[index]`:** Accessing a specific argument by its zero-based index.
*   **Type Conversion:** Converting string arguments to other data types (int, double, etc.) using wrapper class methods like `Integer.parseInt()`.
*   **Error Handling:** Using `try-catch` blocks to manage potential `NumberFormatException` or other errors during conversion.
*   **Standard Input/Output Streams:** `System.out.println()` is used to display program output and feedback.

## Practice Questions/Exercises

1.  **Question:** Write a Java program that accepts your name as a command line argument and prints a greeting message.
    *   **Example Execution:** `java GreetMe Alice`
    *   **Expected Output:** `Hello, Alice!`

2.  **Question:** Create a Java program that takes two numbers as command line arguments and prints their product. Handle cases where non-numeric arguments are provided or the wrong number of arguments are passed.
    *   **Example Execution:** `java MultiplyNumbers 6 7`
    *   **Expected Output:** `The product is: 42`

3.  **Question:** Develop a Java program that takes a filename and a number `N` as command line arguments. The program should simulate reading `N` lines from the specified file.
    *   **Example Execution:** `java FileReader mydata.txt 5`
    *   **Expected Output (simulated):**
        ```
        Reading from file: mydata.txt
        Simulating reading 5 lines...
        Line 1 simulated.
        Line 2 simulated.
        Line 3 simulated.
        Line 4 simulated.
        Line 5 simulated.
        ```

## Practice Questions & Answers

**Answer to Question 1:**

```java
public class GreetMe {
    public static void main(String[] args) {
        if (args.length == 1) {
            System.out.println("Hello, " + args[0] + "!");
        } else {
            System.out.println("Usage: java GreetMe <yourName>");
        }
    }
}
```

**Answer to Question 2:**

```java
public class MultiplyNumbers {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.out.println("Usage: java MultiplyNumbers <number1> <number2>");
            return;
        }

        try {
            int num1 = Integer.parseInt(args[0]);
            int num2 = Integer.parseInt(args[1]);

            int product = num1 * num2;
            System.out.println("The product is: " + product);

        } catch (NumberFormatException e) {
            System.out.println("Error: Both arguments must be valid integers.");
        }
    }
}
```

**Answer to Question 3:**

```java
public class FileReader {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.out.println("Usage: java FileReader <filename> <numberOfLines>");
            return;
        }

        String filename = args[0];
        int numberOfLines = 0;

        try {
            numberOfLines = Integer.parseInt(args[1]);
        } catch (NumberFormatException e) {
            System.out.println("Error: The second argument (number of lines) must be a valid integer.");
            return;
        }

        if (numberOfLines <= 0) {
            System.out.println("Error: The number of lines must be a positive integer.");
            return;
        }

        System.out.println("Reading from file: " + filename);
        System.out.println("Simulating reading " + numberOfLines + " lines...");

        for (int i = 1; i <= numberOfLines; i++) {
            System.out.println("Line " + i + " simulated.");
            // In a real program, you would open the file and read line i here.
        }
        System.out.println("Simulation complete.");
    }
}
```

## Important Points to Remember

*   **Arguments are always strings:** You must convert them for arithmetic or other operations.
*   **`args` is an array:** Access elements using `args[index]`.
*   **Index starts at 0:** The first argument is `args[0]`.
*   **No arguments means an empty array:** `args.length` will be `0`, not `null`.
*   **Robust programs validate arguments:** Always check the number and format of arguments before using them.
*   **Use `try-catch` for conversions:** Prevent your program from crashing due to invalid input.
*   **Provide usage messages:** Guide users on how to correctly run your program with arguments.
