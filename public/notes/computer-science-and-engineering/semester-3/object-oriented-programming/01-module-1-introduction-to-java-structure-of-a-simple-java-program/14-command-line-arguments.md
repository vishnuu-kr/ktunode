---
title: "Command Line Arguments"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac95"
status: "completed"
scrapedAt: "2026-05-20T16:27:03.318Z"
---
## Object Oriented Programming: Module 1 - Introduction to Java: Command Line Arguments

These notes cover command-line arguments in Java, focusing on their structure, usage, and importance.

**Learning Outcomes:**

*   Understand the concept of command-line arguments in Java.
*   Learn how to pass arguments to a Java program from the command line.
*   Learn how to access and process these arguments within the Java program.
*   Understand the significance of command-line arguments in application configuration.

**1. Introduction to Command Line Arguments**

*   **Definition:** Command-line arguments are parameters passed to a Java program when it is executed from the command line (e.g., using the terminal or command prompt).
*   **Purpose:** They provide a way to customize the program's behavior without modifying the source code. This makes the program more flexible and adaptable to different scenarios.
*   **Analogy:** Think of it like providing instructions to a program *before* it starts running, similar to how you might tell a chef (the program) which ingredients (arguments) to use *before* they start cooking (executing).

**2. Structure and Syntax**

*   **Passing Arguments:** When running a Java program from the command line, arguments are provided after the program's name, separated by spaces.

    ```bash
    java MyProgram arg1 arg2 arg3
    ```

*   **Accessing Arguments in Java:** Inside the `main` method of a Java program, command-line arguments are accessible through the `String[] args` parameter.

    *   `String[] args`: This is an array of strings. Each element in the array represents a single command-line argument.
    *   `args[0]` : The first argument passed from the command line.
    *   `args[1]` : The second argument passed from the command line, and so on.
    *   `args.length` :  The number of arguments passed from the command line.

*   **Important Note:** All command-line arguments are treated as strings by default.  If you need to use them as numbers or other data types, you'll need to convert them explicitly.

**3.  A Simple Example**

```java
public class CommandLineExample {
    public static void main(String[] args) {
        System.out.println("Number of arguments: " + args.length);

        for (int i = 0; i < args.length; i++) {
            System.out.println("Argument " + i + ": " + args[i]);
        }
    }
}
```

**Explanation:**

1.  **`public static void main(String[] args)`:** This is the main method, the entry point of the Java program.  The `String[] args` parameter is an array that holds the command-line arguments.
2.  **`System.out.println("Number of arguments: " + args.length);`:** This line prints the total number of arguments passed.
3.  **`for (int i = 0; i < args.length; i++) { ... }`:**  This loop iterates through each argument in the `args` array.
4.  **`System.out.println("Argument " + i + ": " + args[i]);`:** This line prints the index and value of each argument.

**How to Run:**

1.  Save the code as `CommandLineExample.java`.
2.  Compile the code: `javac CommandLineExample.java`
3.  Run the code with arguments: `java CommandLineExample hello world 123`

**Output:**

```
Number of arguments: 3
Argument 0: hello
Argument 1: world
Argument 2: 123
```

**4. Converting Arguments to Other Data Types**

Since all command-line arguments are initially strings, you'll often need to convert them to other data types like integers or doubles.

*   **`Integer.parseInt(String s)`:** Converts a string `s` to an integer.  Throws a `NumberFormatException` if the string cannot be parsed as an integer.
*   **`Double.parseDouble(String s)`:** Converts a string `s` to a double. Throws a `NumberFormatException` if the string cannot be parsed as a double.

```java
public class ArgumentConverter {
    public static void main(String[] args) {
        if (args.length == 2) {
            try {
                int num1 = Integer.parseInt(args[0]);
                double num2 = Double.parseDouble(args[1]);

                double sum = num1 + num2;
                System.out.println("Sum: " + sum);

            } catch (NumberFormatException e) {
                System.out.println("Error: Invalid number format.  Please provide numbers as arguments.");
            }
        } else {
            System.out.println("Usage: java ArgumentConverter <integer> <double>");
        }
    }
}
```

**Explanation:**

1.  **`if (args.length == 2)`:**  This checks if exactly two arguments were provided.
2.  **`try { ... } catch (NumberFormatException e) { ... }`:** This `try-catch` block handles potential errors when converting the arguments to numbers.
3.  **`Integer.parseInt(args[0]);`** and **`Double.parseDouble(args[1]);`:**  These lines convert the first argument to an integer and the second argument to a double.
4.  **`System.out.println("Error: Invalid number format.  Please provide numbers as arguments.");`:**  This line is printed if the user provides non-numeric arguments.
5.  **`System.out.println("Usage: java ArgumentConverter <integer> <double>");`:** This line provides usage instructions if the wrong number of arguments is provided.

**How to Run:**

1.  Save the code as `ArgumentConverter.java`.
2.  Compile the code: `javac ArgumentConverter.java`
3.  Run the code with valid arguments: `java ArgumentConverter 10 3.14`
4.  Run the code with invalid arguments: `java ArgumentConverter hello world`
5.  Run the code with the wrong number of arguments: `java ArgumentConverter 10`

**5. Real-World Applications of Command Line Arguments**

*   **File Processing:** Specifying input and output file paths:

    ```bash
    java FileProcessor input.txt output.txt
    ```

*   **Configuration:**  Setting program options or flags:

    ```bash
    java MyProgram -debug -verbose
    ```

*   **Database Connections:** Providing database credentials (username, password, hostname):

    ```bash
    java DatabaseConnector -user myuser -password mypassword -host localhost
    ```

*   **Scripting:**  Passing parameters to scripts for automated tasks.

**6. Best Practices and Considerations**

*   **Error Handling:** Always validate the number and type of arguments provided.  Use `try-catch` blocks to handle potential exceptions.
*   **Usage Instructions:** Provide clear usage instructions to the user, explaining how to use the program and what arguments are expected.
*   **Argument Parsing Libraries:** For more complex applications with many arguments, consider using a dedicated argument parsing library (e.g., Apache Commons CLI, JCommander) to simplify argument handling.  These libraries handle parsing, validation, and displaying usage information.
*   **Security:**  Be cautious when using command-line arguments to handle sensitive information (e.g., passwords).  Consider alternative approaches like configuration files or environment variables for enhanced security.
*   **Clarity:** Choose meaningful argument names that clearly indicate their purpose.

**7. Important Points to Remember**

*   Command-line arguments are strings by default. You *must* convert them to the desired data type.
*   Always check the `args.length` to ensure the correct number of arguments is provided.
*   Use `try-catch` blocks for robust error handling when parsing arguments.
*   Provide helpful usage instructions to the user.
*   Consider using argument parsing libraries for complex applications.
*   Be mindful of security when dealing with sensitive information through command-line arguments.

**8. Practice Questions/Exercises:**

1.  **Write a Java program that takes two integer arguments from the command line and prints their sum, difference, product, and quotient.**

    ```java
    public class Calculator {
        public static void main(String[] args) {
            if (args.length == 2) {
                try {
                    int num1 = Integer.parseInt(args[0]);
                    int num2 = Integer.parseInt(args[1]);

                    System.out.println("Sum: " + (num1 + num2));
                    System.out.println("Difference: " + (num1 - num2));
                    System.out.println("Product: " + (num1 * num2));
                    if (num2 != 0) {
                        System.out.println("Quotient: " + (double)num1 / num2); // Cast to double for accurate result
                    } else {
                        System.out.println("Quotient: Division by zero is not allowed.");
                    }

                } catch (NumberFormatException e) {
                    System.out.println("Error: Invalid number format. Please provide integers as arguments.");
                }
            } else {
                System.out.println("Usage: java Calculator <integer1> <integer2>");
            }
        }
    }
    ```

2.  **Modify the previous program to handle potential `ArithmeticException` (division by zero).**  (See solution in the code above)

3.  **Write a Java program that takes a filename as a command-line argument and prints the number of characters in that file.** (This exercise requires file I/O, which might be beyond the scope of *just* command line arguments, but it's a good extension).

    ```java
    import java.io.File;
    import java.io.FileReader;
    import java.io.IOException;

    public class FileCharacterCounter {
        public static void main(String[] args) {
            if (args.length == 1) {
                String filename = args[0];
                File file = new File(filename);

                if (file.exists()) {
                    try (FileReader reader = new FileReader(file)) { //try-with-resources, auto-closes reader
                        long charCount = 0;
                        while (reader.read() != -1) {
                            charCount++;
                        }
                        System.out.println("Number of characters in " + filename + ": " + charCount);

                    } catch (IOException e) {
                        System.out.println("Error: Could not read file: " + e.getMessage());
                    }
                } else {
                    System.out.println("Error: File not found: " + filename);
                }
            } else {
                System.out.println("Usage: java FileCharacterCounter <filename>");
            }
        }
    }
    ```

These notes provide a comprehensive introduction to command-line arguments in Java, covering their purpose, syntax, usage, and important considerations.  Practice these examples and exercises to solidify your understanding. Remember to always handle errors gracefully and provide clear instructions to the user.
