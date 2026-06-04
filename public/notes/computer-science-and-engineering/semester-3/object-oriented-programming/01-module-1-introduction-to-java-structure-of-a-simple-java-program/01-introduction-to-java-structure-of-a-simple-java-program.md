---
title: "Introduction to Java: Structure of a simple java program"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac88"
status: "completed"
scrapedAt: "2026-05-20T16:26:17.853Z"
---
## Object-Oriented Programming: Module 1 - Introduction to Java: Structure of a Simple Java Program

**Topic:** Introduction to Java: Structure of a Simple Java Program

**Learning Outcomes:**

*   Understand the history and features of Java.
*   Describe the basic structure of a simple Java program.
*   Identify and explain the different parts of a Java program (package declaration, import statements, class definition, main method, statements, comments).
*   Compile and run a simple Java program.
*   Write a simple Java program that prints output to the console.

---

**1.  Introduction to Java: History and Features**

*   **History:**
    *   Java was developed by James Gosling at Sun Microsystems (which was later acquired by Oracle Corporation).
    *   Originally named "Oak" (after an oak tree outside Gosling's office), it was later renamed "Java" in 1995.
    *   It was initially designed for interactive television, but it was too advanced for the digital cable television industry at the time.
    *   Its real breakthrough came with the rise of the World Wide Web.

*   **Key Features:**
    *   **Object-Oriented:** Java is based on the principles of object-oriented programming (OOP). It supports encapsulation, inheritance, and polymorphism.
    *   **Platform Independent:** Java applications can run on any operating system (Windows, macOS, Linux) that has a Java Virtual Machine (JVM).  This "write once, run anywhere" (WORA) capability is a crucial feature.  Java achieves this by compiling code into bytecode (which the JVM understands) rather than directly into machine code.
    *   **Simple and Familiar:** Java syntax is similar to C and C++, making it relatively easy to learn for programmers familiar with these languages. It eliminates many of the complexities of C++, such as manual memory management (pointers).
    *   **Distributed:** Java is designed to support networking and distributed computing. It provides libraries and APIs for creating network applications.
    *   **Multithreaded:** Java supports multithreading, allowing concurrent execution of multiple parts of a program. This can improve performance and responsiveness.
    *   **Robust:** Java incorporates strong type checking and exception handling mechanisms to prevent errors and improve reliability. It has automatic garbage collection which frees up memory as it is no longer in use.
    *   **Secure:** Java provides security features to protect against malicious code and unauthorized access.
    *   **High Performance:** Java bytecode can be compiled "just-in-time" (JIT) into native machine code for faster execution.

**2. Basic Structure of a Simple Java Program**

A basic Java program typically consists of the following components:

*   **Package Declaration (Optional):**
    *   Specifies the package to which the class belongs.
    *   Used to organize classes into logical groups and prevent naming conflicts.
    *   Syntax: `package package_name;`
    *   Example: `package com.example.myapp;`

*   **Import Statements (Optional):**
    *   Used to import classes and interfaces from other packages.
    *   Avoids the need to fully qualify class names in your code.
    *   Syntax: `import package_name.ClassName;` or `import package_name.*;` (imports all classes in the package)
    *   Example: `import java.util.Scanner;`

*   **Class Definition:**
    *   The fundamental building block of a Java program.
    *   Every Java program must have at least one class.
    *   Syntax: `public class ClassName { ... }`
    *   `public` keyword makes the class accessible from other classes.
    *   `class` keyword indicates that it is a class definition.
    *   `ClassName` is the name of the class (should start with a capital letter by convention).
    *   The code within the curly braces `{}` is the body of the class.

*   **Main Method:**
    *   The entry point of the Java program.
    *   Execution begins with the `main` method.
    *   Syntax: `public static void main(String[] args) { ... }`
    *   `public` keyword makes the main method accessible.
    *   `static` keyword allows the method to be called without creating an instance of the class.
    *   `void` keyword indicates that the method does not return any value.
    *   `main` is the name of the method.
    *   `String[] args` is an array of strings that can be used to pass command-line arguments to the program.

*   **Statements:**
    *   Instructions that the Java Virtual Machine (JVM) executes.
    *   Statements are terminated with a semicolon (;).
    *   Examples: variable declarations, assignments, method calls, control flow statements (if, for, while).

*   **Comments:**
    *   Explanatory notes that are ignored by the compiler.
    *   Used to improve code readability and understanding.
    *   Types of comments:
        *   Single-line comments: `// This is a single-line comment`
        *   Multi-line comments: `/* This is a multi-line comment */`
        *   Javadoc comments: `/** This is a Javadoc comment used for generating API documentation */`

**3. Anatomy of a Simple Java Program: Example**

```java
package com.example.hello;  // Package declaration (optional)

// Import statement (optional)
// We don't need any imports for this simple program

public class HelloWorld { // Class definition

    public static void main(String[] args) { // Main method

        // Statement: Prints "Hello, World!" to the console
        System.out.println("Hello, World!");

        // Another Statement
        System.out.println("Welcome to Java!");

        // Single-line comment:  This is an example of a comment
    } // End of main method
} // End of class
```

*   **Explanation:**
    *   `package com.example.hello;`:  Specifies that this class belongs to the `com.example.hello` package.
    *   `public class HelloWorld`: Defines a class named `HelloWorld`.
    *   `public static void main(String[] args)`:  The main method where the program's execution begins.
    *   `System.out.println("Hello, World!");`:  Prints the string "Hello, World!" to the console (standard output). `System.out` is an object that represents the standard output stream, and `println()` is a method of that object that prints a line of text.
    *   `System.out.println("Welcome to Java!");`:  Prints the string "Welcome to Java!" to the console.
    *   `// Single-line comment:  This is an example of a comment`: A comment that's ignored by the compiler.

**4. Compiling and Running a Simple Java Program**

*   **Compilation:**
    *   Use the `javac` command to compile the Java source code (e.g., `HelloWorld.java`) into bytecode (e.g., `HelloWorld.class`).
    *   Open a command prompt or terminal and navigate to the directory where the Java file is located.
    *   Type: `javac HelloWorld.java`
    *   If the compilation is successful, a `HelloWorld.class` file will be created in the same directory.  If there are compilation errors, review them and correct the errors in the source code.

*   **Execution:**
    *   Use the `java` command to run the compiled bytecode.
    *   Type: `java HelloWorld` (note that you do *not* include the `.class` extension when running the program).
    *   The program will execute, and the output "Hello, World!" and "Welcome to Java!" will be printed to the console.

**5.  Writing a Simple Java Program that Prints Output to the Console**

The `System.out.println()` method is used to print output to the console. It takes a string as an argument and prints that string followed by a newline character.  You can also print the values of variables:

```java
public class OutputExample {
    public static void main(String[] args) {
        int age = 30;
        String name = "Alice";

        System.out.println("My name is " + name + " and I am " + age + " years old.");
    }
}
```

*   **Explanation:**
    *   The `+` operator is used to concatenate strings.  When one of the operands of the `+` operator is a string, Java treats the other operand as a string as well.

**6. Practice Questions/Exercises**

1.  **What is the purpose of the `main` method in a Java program?**
    *   **Answer:** The `main` method is the entry point of a Java program. It's where the execution of the program begins.

2.  **What is the difference between `System.out.print()` and `System.out.println()`?**
    *   **Answer:** `System.out.print()` prints the specified output to the console without adding a newline character at the end. `System.out.println()` prints the specified output to the console and adds a newline character at the end.

3.  **Write a Java program that prints your name and your favorite hobby to the console.**

    ```java
    public class MyInfo {
        public static void main(String[] args) {
            System.out.println("My name is [Your Name Here]");
            System.out.println("My favorite hobby is [Your Hobby Here]");
        }
    }
    ```

4.  **What is the purpose of the `javac` command? What is the purpose of the `java` command?**
    *   **Answer:** The `javac` command compiles Java source code into bytecode. The `java` command executes the compiled bytecode.

5.  **What are the three types of comments in Java?**
    *   **Answer:** Single-line comments (`//`), multi-line comments (`/* ... */`), and Javadoc comments (`/** ... */`).

**7. Important Points to Remember**

*   Java is case-sensitive.
*   Every statement must end with a semicolon (;).
*   File names must match the class name (e.g., if the class name is `HelloWorld`, the file name must be `HelloWorld.java`).
*   The `main` method must have the exact signature: `public static void main(String[] args)`.
*   Java programs are executed by the Java Virtual Machine (JVM).
*   Comments are essential for making your code more readable and understandable.
*   Always compile your code before running it.  Make sure you fix any compilation errors.

This comprehensive guide covers the basics of a simple Java program and should help you get started with learning Java. Remember to practice writing and running your own programs to solidify your understanding.
