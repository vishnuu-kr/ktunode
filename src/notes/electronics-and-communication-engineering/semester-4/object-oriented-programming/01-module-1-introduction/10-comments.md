---
title: "Comments"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe673"
status: "completed"
scrapedAt: "2026-05-23T17:51:17.154Z"
---
# Object-Oriented Programming: Module 1 - Introduction: Comments

## Topic: Comments in Object-Oriented Programming

### Learning Outcomes Covered:
This module focuses on understanding the fundamental role of comments in writing clear, maintainable, and understandable code, which is crucial for all aspects of Object-Oriented Programming. While comments don't directly map to specific COs in terms of technical implementation, they are foundational for achieving the goals of all COs by facilitating code comprehension and collaboration.

*   **Implicitly supports CO1, CO2, CO3, CO4:** Well-commented code makes it easier to understand classes, objects, data types, operators, control statements, packages, exception handling, and Swing controls, thereby supporting the learning of these concepts.

### 1. What are Comments?

*   **Definition:** Comments are explanatory statements within a program's source code that are ignored by the compiler or interpreter. They are used to provide human-readable explanations about the code's purpose, functionality, design decisions, and potential issues.

*   **Purpose:**
    *   **Explain the "Why":** To clarify the intent and logic behind a piece of code, especially for complex algorithms or non-obvious operations.
    *   **Improve Readability:** Make the code easier for other developers (and your future self) to understand.
    *   **Aid in Debugging:** Temporarily disable code sections during testing without deleting them.
    *   **Document Functionality:** Provide information about how to use a particular method or class.
    *   **Maintainability:** Facilitate future modifications and updates by making the code's purpose clear.

### 2. Types of Comments in Java

Java supports three main types of comments. Understanding these is crucial for effective documentation.

#### 2.1. Single-Line Comments

*   **Syntax:** Starts with `//` and continues to the end of the line.
*   **Usage:** Ideal for short explanations or commenting out a single line of code.

*   **Example (as seen in Deitel & Deitel, Java How to Program):**

    ```java
    public class Welcome {
        public static void main(String[] args) {
            // This program prints a welcome message.
            System.out.println("Welcome to Object-Oriented Programming!"); // Output the message to the console.
            // System.out.println("Another message."); // This line is commented out.
        }
    }
    ```

*   **Key Points:**
    *   Anything after `//` on that line is ignored.
    *   Efficient for explaining individual lines of code.

#### 2.2. Multi-Line Comments (Block Comments)

*   **Syntax:** Starts with `/*` and ends with `*/`. The text between these delimiters is considered a comment.
*   **Usage:** Suitable for longer explanations, commenting out multiple lines of code, or describing the purpose of a class or method.

*   **Example (as seen in Herbert Schildt, Java: The Complete Reference):**

    ```java
    /*
     * This is a multi-line comment.
     * It can span across several lines.
     * Used for more extensive explanations.
     */
    public class Calculator {
        /*
         * This method adds two integers.
         * @param a The first integer.
         * @param b The second integer.
         * @return The sum of a and b.
         */
        public int add(int a, int b) {
            return a + b;
        }
    }
    ```

*   **Key Points:**
    *   Must have a closing `*/`.
    *   Can be used to comment out large blocks of code.
    *   Can be used for documentation purposes, though Javadoc is preferred for API documentation.

#### 2.3. Javadoc Comments

*   **Syntax:** Starts with `/**` and ends with `*/`.
*   **Usage:** Specifically designed for generating API documentation. The `javadoc` tool processes these comments to create HTML pages.
*   **Special Tags:** Javadoc comments use special tags (starting with `@`) to provide structured information about classes, methods, parameters, return values, etc.

*   **Common Javadoc Tags:**
    *   `@author`: Specifies the author of the code.
    *   `@version`: Indicates the version of the code.
    *   `@param`: Describes a method parameter.
    *   `@return`: Describes the return value of a method.
    *   `@see`: Provides a link to another class, method, or URL.
    *   `@since`: Indicates when a feature was introduced.
    *   `@deprecated`: Marks a method or class as deprecated, meaning it should no longer be used.

*   **Example (as seen in Y. Daniel Liang, Introduction to Java Programming):**

    ```java
    /**
     * The {@code Circle} class represents a circle.
     * This class is part of the geometry package.
     * It provides methods for calculating area and circumference.
     *
     * @author  [Your Name]
     * @version 1.0
     * @since   2023-10-27
     */
    public class Circle {
        private double radius;

        /**
         * Constructs a new Circle object with a specified radius.
         *
         * @param radius The radius of the circle. Must be non-negative.
         */
        public Circle(double radius) {
            if (radius < 0) {
                throw new IllegalArgumentException("Radius cannot be negative.");
            }
            this.radius = radius;
        }

        /**
         * Calculates and returns the area of the circle.
         * The formula used is PI * radius * radius.
         *
         * @return The area of the circle.
         */
        public double getArea() {
            return Math.PI * radius * radius;
        }

        /**
         * Calculates and returns the circumference of the circle.
         * The formula used is 2 * PI * radius.
         *
         * @return The circumference of the circle.
         */
        public double getCircumference() {
            return 2 * Math.PI * radius;
        }

        /**
         * Gets the current radius of the circle.
         *
         * @return The current radius.
         * @see #setRadius(double)
         */
        public double getRadius() {
            return radius;
        }

        /**
         * Sets a new radius for the circle.
         *
         * @param radius The new radius to set. Must be non-negative.
         * @deprecated Use {@link #Circle(double)} to create a new circle with a specific radius.
         */
        @Deprecated
        public void setRadius(double radius) {
            if (radius < 0) {
                throw new IllegalArgumentException("Radius cannot be negative.");
            }
            this.radius = radius;
        }
    }
    ```

*   **Key Points:**
    *   Crucial for creating professional documentation for your APIs.
    *   Allows for linking between different parts of your documentation.
    *   The `javadoc` command-line tool generates HTML documentation from these comments.

### 3. Best Practices for Writing Comments

Effective comments are as important as well-written code. Here are some best practices to follow:

*   **Comment the "Why," Not the "What":** The code itself explains *what* it does. Comments should explain *why* it does it, especially if the logic is complex or non-obvious.

    *   **Bad:** `i++; // Increment i` (The code itself shows this.)
    *   **Good:** `// Increment count to track the number of attempts.`

*   **Keep Comments Up-to-Date:** Outdated comments are worse than no comments because they can mislead developers. If you change the code, update the corresponding comments.

*   **Be Concise and Clear:** Avoid overly long or verbose comments. Get straight to the point.

*   **Use Consistent Formatting:** Maintain a consistent style for your comments throughout the project.

*   **Avoid Redundant Comments:** Don't comment on code that is self-explanatory.

    *   **Bad:** `int age = 30; // Assign 30 to age`
    *   **Good:** (No comment needed here.)

*   **Use Comments for Intentions and Logic:**
    *   Explain the purpose of a class or method.
    *   Clarify complex algorithms or tricky logic.
    *   Document assumptions made.
    *   Explain design decisions.

*   **Use Javadoc for Public APIs:** For classes and methods intended for use by other developers or in larger projects, Javadoc comments are essential.

*   **Use Comments for Temporary Disabling (but remove them later):** When debugging, you might comment out code. Remember to remove these temporary comments once they are no longer needed.

*   **Avoid Commenting Out Large Blocks of Code Permanently:** If you remove functionality, it's better to use version control (like Git) to track changes rather than leaving large commented-out sections in the code.

### 4. Comments and Course Outcomes Alignment

While comments are not directly taught as a technical feature to be implemented, they are integral to achieving the course outcomes:

*   **CO1 (Summarize OOP concepts):** Comments help explain the design and purpose of classes, objects, and their relationships, making it easier to understand and document them using UML.
*   **CO2 (Utilize datatypes, operators, control statements, OOP concepts):** Comments clarify the logic behind using specific data types, operators, control flow statements, and how they are applied within classes and objects.
*   **CO3 (Robust programs with packages, exception handling, I/O):** Comments are crucial for explaining the structure of packages, the rationale behind exception handling, and the steps involved in file I/O operations, contributing to robust code.
*   **CO4 (Identify and utilize Swing controls):** Comments can explain the purpose and behavior of Swing components, making GUI development more understandable and maintainable.

**Reference:** As highlighted in "Fundamentals of Software Engineering" by Rajib Mall, clear documentation, including comments, is a cornerstone of good software engineering practices, directly impacting the maintainability and understandability of code. Herbert Schildt's "Java: The Complete Reference" and Deitel & Deitel's "Java How to Program" consistently emphasize the importance of well-commented code throughout their examples.

### 5. Practice Questions and Exercises

1.  **Question:** What is the primary purpose of comments in a programming language?
    **Answer:** The primary purpose of comments is to provide human-readable explanations within the source code that are ignored by the compiler or interpreter. They help explain the code's logic, intent, and usage, improving readability and maintainability.

2.  **Question:** Differentiate between single-line comments and multi-line comments in Java. Provide an example of each.
    **Answer:**
    *   **Single-line comments:** Start with `//` and extend to the end of the line. They are used for short explanations on a single line.
        ```java
        // This line calculates the average.
        double average = sum / count;
        ```
    *   **Multi-line comments:** Start with `/*` and end with `*/`. They can span multiple lines and are used for longer explanations or commenting out blocks of code.
        ```java
        /*
         * This method is responsible for
         * processing user input and
         * validating its format.
         */
        public void processInput(String input) { ... }
        ```

3.  **Question:** When would you use Javadoc comments over single-line or multi-line comments?
    **Answer:** Javadoc comments (`/** ... */`) are used specifically for generating API documentation. They are preferred for documenting public classes, methods, and interfaces, as they allow for the inclusion of structured information using tags like `@param`, `@return`, and `@author`, which can be processed by the `javadoc` tool to create professional documentation.

4.  **Question:** Write a Javadoc comment for a simple Java method that calculates the square of an integer.

    **Code Snippet:**
    ```java
    public int square(int number) {
        return number * number;
    }
    ```

    **Answer:**
    ```java
    /**
     * Calculates the square of an integer.
     * This method multiplies the input number by itself.
     *
     * @param number The integer whose square is to be calculated.
     * @return The square of the input number.
     */
    public int square(int number) {
        return number * number;
    }
    ```

5.  **Question:** Identify a potential problem with using comments to disable code during debugging and suggest a better alternative.
    **Answer:** A potential problem is that comments can be forgotten, leaving dead code in the program. Furthermore, large commented-out blocks can clutter the codebase. A better alternative is to use version control systems (like Git) to manage code changes and revert to previous versions if needed. For temporary disabling, IDEs often provide specific features or shortcuts that are clearer than manual commenting.

### 6. Important Points to Remember

*   **Comments are for humans, not machines.** They are ignored by the compiler.
*   **Clarity and conciseness** are key to effective comments.
*   **Comment the "why," not the "what."**
*   **Keep comments up-to-date** to avoid misleading developers.
*   **Javadoc is essential for public APIs.**
*   **Avoid redundant comments.**
*   **Use version control** for managing code changes instead of relying heavily on commented-out code.
*   **Good commenting practices** contribute significantly to the maintainability and understandability of Object-Oriented programs, supporting all Course Outcomes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
