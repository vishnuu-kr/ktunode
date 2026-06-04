---
title: "Java program structure"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe66f"
status: "completed"
scrapedAt: "2026-05-23T17:51:14.464Z"
---
# Object Oriented Programming: Module 1 - Introduction: Java Program Structure

---

## 1. Overview and Learning Objectives

This module introduces the fundamental structure of a Java program. Understanding this structure is crucial for building any Java application. We will explore the basic building blocks and how they fit together.

**Learning Outcomes for this Topic:**

*   **Understand the basic building blocks of a Java program.**
*   **Recognize the role of key Java keywords and syntax.**
*   **Learn how to compile and run a simple Java program.**
*   **Appreciate the platform independence of Java.**

**Alignment with Course Outcomes:**

*   This topic directly supports **CO1** by laying the foundation for understanding classes and objects, which are central to OOP.
*   It also contributes to **CO2** by introducing the basic syntax and structure necessary for writing simple Java programs.

---

## 2. Key Concepts and Definitions

### 2.1. What is a Java Program?

A Java program is a sequence of instructions written in the Java programming language that can be executed on a Java Virtual Machine (JVM). Java is a high-level, object-oriented, and platform-independent programming language.

*   **Object-Oriented:** Java is fundamentally an object-oriented language. Everything in Java is an object or related to objects. This aligns with **CO1**.
*   **Platform Independent:** Java code can run on any platform (Windows, macOS, Linux) without modification, thanks to the JVM. This is achieved through the "Write Once, Run Anywhere" (WORA) principle.

### 2.2. The Basic Structure of a Java Program

A typical Java program consists of one or more classes. Each class typically encapsulates data (variables) and methods (functions) that operate on that data.

**A Simple Java Program Example:**

```java
// This is a single-line comment

/*
This is a
multi-line comment
*/

// Package declaration (optional, but good practice)
package com.example.myapp;

// Importing necessary classes (if any)
import java.lang.System; // Explicitly importing, though java.lang is imported by default

// Class declaration
public class HelloWorld {

    // Main method - the entry point of the program
    public static void main(String[] args) {
        // Statement - performs an action
        System.out.println("Hello, World!");
    }
}
```

Let's break down the components:

#### 2.2.1. Comments

*   **Purpose:** Comments are non-executable statements used to explain the code. They improve code readability and maintainability.
*   **Types:**
    *   **Single-line comments:** Start with `//` and extend to the end of the line.
    *   **Multi-line comments:** Start with `/*` and end with `*/`.
    *   **Documentation comments (Javadoc):** Start with `/**` and end with `*/`. These are used to generate API documentation. (Referenced in Herbert Schildt, 8/e, Chapter 1).

#### 2.2.2. Package Declaration (`package`)

*   **Purpose:** Organizes classes into logical groups and helps prevent naming conflicts. Classes within the same package can access each other directly.
*   **Syntax:** `package packageName;`
*   **Example:** `package com.example.myapp;`
*   **Note:** If a class is not part of any package, it belongs to the default (unnamed) package. Package declarations must be the first non-comment statement in a Java file. (Referenced in Herbert Schildt, 8/e, Chapter 1).

#### 2.2.3. Import Statement (`import`)

*   **Purpose:** Makes classes from other packages available for use in the current program.
*   **Syntax:**
    *   `import packageName.ClassName;` (imports a specific class)
    *   `import packageName.*;` (imports all classes from a package)
*   **Example:** `import java.util.Scanner;`
*   **`java.lang` Package:** Classes in the `java.lang` package (like `String`, `System`, `Integer`) are automatically imported and don't require an explicit `import` statement.

#### 2.2.4. Class Declaration (`class`)

*   **Purpose:** A class is a blueprint or template for creating objects. It defines the properties (data/attributes) and behaviors (methods/functions) that objects of that class will have.
*   **Syntax:** `[access_modifier] class ClassName { ... }`
*   **`public` Keyword:** An access modifier indicating that the class is accessible from any other class.
*   **`class` Keyword:** Used to declare a class.
*   **`ClassName`:** Conventionally starts with an uppercase letter.
*   **Curly Braces (`{}`):** Enclose the body of the class, containing its members (variables and methods).
*   **Important Point:** Every standalone Java program must contain at least one `public` class. The name of the `public` class must match the name of the Java source file (e.g., `HelloWorld.java` for the `HelloWorld` class). (Referenced in Herbert Schildt, 8/e, Chapter 1).

#### 2.2.5. The `main` Method

*   **Purpose:** This is the **entry point** for any executable Java application. The JVM starts program execution by calling the `main` method.
*   **Signature:** `public static void main(String[] args)`
    *   `public`: Ensures the method can be called from outside the class.
    *   `static`: Allows the `main` method to be called without creating an object of the class.
    *   `void`: Indicates that the method does not return any value.
    *   `main`: The specific name the JVM looks for.
    *   `String[] args`: An array of strings that can receive command-line arguments when the program is run.

#### 2.2.6. Statements

*   **Purpose:** Individual instructions that perform an action.
*   **Syntax:** A Java statement typically ends with a semicolon (`;`).
*   **Example:** `System.out.println("Hello, World!");` is a statement that prints the string "Hello, World!" to the console.

### 2.3. Compiling and Running a Java Program

1.  **Write the code:** Save the code in a file with the `.java` extension (e.g., `HelloWorld.java`).
2.  **Compile:** Use the Java compiler (`javac`) to translate the source code into bytecode.
    *   Command: `javac HelloWorld.java`
    *   This creates a `HelloWorld.class` file containing the bytecode.
3.  **Run:** Use the Java Virtual Machine (`java`) to execute the bytecode.
    *   Command: `java HelloWorld` (Note: no `.class` extension)

**Important Point:** The Java compiler (`javac`) and the Java runtime environment (`java`) are part of the Java Development Kit (JDK).

---

## 3. Important Points to Remember

*   **Case Sensitivity:** Java is case-sensitive. `HelloWorld` is different from `helloworld`.
*   **File Naming:** A public Java source file must have the same name as the public class within it, followed by the `.java` extension.
*   **`main` Method Signature:** The `main` method must be exactly `public static void main(String[] args)`.
*   **Semicolons:** Most Java statements must end with a semicolon.
*   **Curly Braces:** Define code blocks (classes, methods, control structures).
*   **Platform Independence:** Java bytecode runs on any system with a compatible JVM.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 4. Examples from Textbooks and Reference Books

**Example from Herbert Schildt (8/e):**
Chapter 1 often presents a "Hello, World!" program, similar to the one above, to introduce the basic syntax, compilation, and execution. It emphasizes the role of the `public` class and the `main` method as the starting point.

**Example from Deitel & Deitel (11th Edition):**
Deitel and Deitel also typically start with a "Hello, World!" program. They often emphasize the separation of code into classes and the role of `System.out.println` as a method call to the standard output stream. They might also introduce the concept of an "applet" as an alternative entry point, though for typical applications, `main` is the focus.

**Example from Y. Daniel Liang (7/e):**
Liang's "Introduction to Java Programming" would also cover the basic program structure. Liang often provides clear, step-by-step instructions for compiling and running, and might introduce basic input/output operations early on, building upon the "Hello, World!" example.

---

## 5. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of the `main` method in a Java program?

**Answer:** The `main` method serves as the entry point for the execution of a Java application. The Java Virtual Machine (JVM) starts running the program by invoking the `main` method.

**Question 2:**
Which of the following is **NOT** a correct Java comment?
    a) `// This is a comment`
    b) `/* This is also a comment */`
    c) `<!-- This is an HTML comment -->`
    d) `/** This is a Javadoc comment */`

**Answer:** c) `<!-- This is an HTML comment -->` is not a valid Java comment. Java uses `//`, `/* */`, and `/** */` for comments.

**Question 3:**
If you have a public class named `MyProgram` in a file, what should the file be named?

**Answer:** The file should be named `MyProgram.java`.

**Question 4:**
Write a simple Java program that prints your name to the console.

**Answer:**

```java
public class PrintName {
    public static void main(String[] args) {
        System.out.println("My Name"); // Replace "My Name" with your actual name
    }
}
```

**Question 5:**
Explain the significance of `static` in the `main` method signature (`public static void main(String[] args)`).

**Answer:** The `static` keyword means that the `main` method belongs to the class itself, not to any specific instance (object) of the class. This allows the JVM to call the `main` method without having to create an object of the class first, which is essential for starting program execution.

---

This concludes Module 1, Topic: Java Program Structure. Understanding these fundamentals is key to progressing in your Java programming journey.