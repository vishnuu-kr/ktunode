---
title: "Importing Packages."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe69a"
status: "completed"
scrapedAt: "2026-05-23T17:51:43.447Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 3: More Features of Java

## Topic: Importing Packages

### Learning Outcomes:

*   Understand the concept of packages in Java and their importance for code organization and reusability.
*   Learn how to import packages and their members into a Java program.
*   Differentiate between importing specific classes and importing all classes within a package.
*   Understand the role of the `import` statement and its syntax.
*   Explore commonly used Java packages and their functionalities.
*   Explain the concept of package visibility and its implications.

### Introduction to Packages

Packages are fundamental to Java's organization and reusability of code. They act as containers for classes, interfaces, enumerations, and annotations, similar to how folders organize files on your computer.

**Key Concepts & Definitions:**

*   **Package:** A namespace that organizes related classes and interfaces. It helps prevent naming conflicts and provides a mechanism for controlling access to classes.
*   **Namespace:** A declaration that provides a scope for identifiers used within it.
*   **Naming Conventions:** Package names are typically written in reverse domain name order (e.g., `com.example.utilities`). This ensures uniqueness and avoids naming collisions.
*   **Access Control:** Packages play a crucial role in Java's access control mechanism. Members declared with `protected` or package-private (default) access are only accessible within the same package.

**Why use Packages?**

*   **Code Organization:** Group related classes and interfaces logically, making the codebase easier to manage and navigate.
*   **Reusability:** Facilitates sharing of code across different projects.
*   **Namespace Management:** Prevents naming conflicts between classes with the same name in different packages.
*   **Access Control:** Provides a way to control the visibility and accessibility of classes and their members.

**(Referenced from: Java: The Complete Reference by Herbert Schildt, Chapter 7: Packages and Interfaces)**

### Creating Packages

To create a package, you declare the package at the beginning of your Java source file using the `package` keyword.

**Syntax:**

```java
package package_name;
```

**Example:**

Let's say you want to create a package named `com.mycompany.utils` for utility classes.

**File: `Calculator.java`**

```java
package com.mycompany.utils;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }
}
```

**File Structure:**

To maintain the package structure, you need to create corresponding directories:

```
your_project_root/
└── com/
    └── mycompany/
        └── utils/
            └── Calculator.java
```

When compiling and running, the JVM expects this directory structure.

**(Referenced from: Java How to Program, Early Objects by Paul Deitel, Harvey Deitel, Chapter 8: Arrays, Strings, and StringBuilders)**

### Importing Packages

To use classes or interfaces defined in other packages, you must import them into your current program. Java provides the `import` statement for this purpose.

**Syntax:**

There are two primary ways to import:

1.  **Importing a specific class:**
    ```java
    import package_name.ClassName;
    ```
2.  **Importing all classes from a package:**
    ```java
    import package_name.*;
    ```

**Key Concepts & Definitions:**

*   **`import` Statement:** A declaration that makes classes and interfaces from other packages available in the current class without needing to use their fully qualified names.
*   **Fully Qualified Name:** The complete name of a class, including its package name (e.g., `java.util.ArrayList`).

**Examples:**

**Using a specific class import:**

Let's assume we have the `Calculator` class from the `com.mycompany.utils` package.

**File: `MainApp.java`**

```java
import com.mycompany.utils.Calculator;

public class MainApp {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int sum = calc.add(5, 3);
        System.out.println("Sum: " + sum);
    }
}
```

In this example, we directly import the `Calculator` class. We can then use `Calculator` without its package prefix.

**Using a wildcard import:**

```java
import com.mycompany.utils.*;

public class MainApp {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int difference = calc.subtract(10, 4);
        System.out.println("Difference: " + difference);
    }
}
```

This imports all public classes from the `com.mycompany.utils` package.

**Important Note on Wildcard Imports:** While convenient, importing all classes (`*`) can sometimes lead to ambiguity if multiple packages contain classes with the same name. In such cases, explicitly importing the specific class is preferred.

**(Referenced from: Java: The Complete Reference by Herbert Schildt, Chapter 7: Packages and Interfaces)**

### The `java.lang` Package

The `java.lang` package is special because it is **automatically imported** into every Java program. You do not need to explicitly import classes from `java.lang`.

**Commonly used classes in `java.lang`:**

*   `Object`: The root of the class hierarchy.
*   `String`: Represents character strings.
*   `System`: Provides access to system-specific functionality (e.g., `System.out.println`).
*   `Integer`, `Double`, `Float` (wrapper classes for primitive types).
*   `Math`: Provides mathematical functions.
*   `Exception`: The superclass of all exceptions.

**Example:**

```java
// No import needed for String, System, Integer, Math
public class AutoImportExample {
    public static void main(String[] args) {
        String message = "Hello";
        System.out.println(message.toUpperCase()); // Using String method
        int num = 10;
        Integer wrappedNum = Integer.valueOf(num); // Using Integer wrapper class
        double pi = Math.PI; // Using Math class constant
        System.out.println("Pi: " + pi);
    }
}
```

**(Referenced from: Java How to Program, Early Objects by Paul Deitel, Harvey Deitel, Chapter 8: Arrays, Strings, and StringBuilders)**

### Other Important Built-in Java Packages

Java provides a rich set of pre-defined packages that offer extensive functionalities. Some of the most commonly used ones include:

*   **`java.util`:** Contains utility classes for data structures, date/time handling, and more.
    *   `ArrayList`: Dynamic array.
    *   `HashMap`: Hash table implementation.
    *   `Scanner`: For reading input from various sources.
    *   `Date`, `Calendar`: For date and time manipulation.
*   **`java.io`:** Provides classes for input and output operations, including file handling.
    *   `FileInputStream`, `FileOutputStream`: For reading from and writing to files.
    *   `BufferedReader`, `BufferedWriter`: For efficient buffered I/O.
*   **`java.net`:** Contains classes for network programming.
*   **`java.awt` / `javax.swing`:** For creating graphical user interfaces (GUIs).

**Example using `java.util.Scanner`:**

```java
import java.util.Scanner; // Import the Scanner class

public class InputExample {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); // Create a Scanner object

        System.out.print("Enter your name: ");
        String name = input.nextLine(); // Read user input

        System.out.print("Enter your age: ");
        int age = input.nextInt(); // Read integer input

        System.out.println("Hello, " + name + "! You are " + age + " years old.");

        input.close(); // Close the scanner to release resources
    }
}
```

**(Referenced from: Java: The Complete Reference by Herbert Schildt, Chapter 7: Packages and Interfaces)**
**(Referenced from: Introduction to Java Programming by Y. Daniel Liang, Chapter 13: Lists, Stacks, Queues, and Priority Queues)**

### Package Visibility (Access Modifiers) and Importing

When you import a package, you can access its public members. However, members declared with `private`, `protected`, or default (package-private) access are not directly accessible from outside the package.

*   **`public`:** Accessible from any other class, in any package.
*   **`protected`:** Accessible from other classes in the same package, and by subclasses in different packages.
*   **Default (package-private):** Accessible only from other classes within the same package.
*   **`private`:** Accessible only within the declaring class.

When you use `import package_name.ClassName;` or `import package_name.*;`, you are making the `public` members of the imported classes available.

**Example illustrating package visibility:**

Consider two packages: `com.company.pack1` and `com.company.pack2`.

**File: `com.company.pack1/MyClass.java`**

```java
package com.company.pack1;

public class MyClass {
    public String publicField = "Public";
    protected String protectedField = "Protected";
    String defaultField = "Default"; // package-private
    private String privateField = "Private";

    public void display() {
        System.out.println("Inside MyClass:");
        System.out.println(publicField);
        System.out.println(protectedField);
        System.out.println(defaultField);
        System.out.println(privateField); // Accessible within the class
    }
}
```

**File: `com.company.pack2/AnotherClass.java`**

```java
package com.company.pack2;

import com.company.pack1.MyClass; // Importing the class

public class AnotherClass {
    public static void main(String[] args) {
        MyClass obj = new MyClass();

        System.out.println("Accessing from AnotherClass:");
        System.out.println(obj.publicField); // Accessible (public)

        // The following lines will cause compilation errors:
        // System.out.println(obj.protectedField); // Error: protected access in MyClass
        // System.out.println(obj.defaultField);   // Error: default access in MyClass
        // System.out.println(obj.privateField);   // Error: private access in MyClass

        // You can call public methods:
        obj.display(); // This will print fields accessible within MyClass itself.
                       // But fields with protected/default access are not accessible here directly.
    }
}
```

**Important Point to Remember:** The `import` statement does not bypass access modifiers. It only makes types available for use. You still need to respect the access control rules.

**(Referenced from: Object Oriented Design with UML and Java by Barclay K.J. Savage, Chapter 4: Java's Object-Oriented Features)**

### Practice Questions & Exercises

**1. Multiple Choice Questions:**

a) Which of the following is **automatically** imported into every Java program?
    i) `java.util`
    ii) `java.io`
    iii) `java.lang`
    iv) `javax.swing`

b) To import a specific class named `ArrayList` from the `java.util` package, which statement would you use?
    i) `import java.util.*;`
    ii) `import java.util.ArrayList;`
    iii) `import ArrayList from java.util;`
    iv) `import util.ArrayList;`

c) Which access modifier allows a member to be accessed from anywhere?
    i) `private`
    ii) `protected`
    iii) Default (package-private)
    iv) `public`

**2. Fill in the Blanks:**

a) Packages are used to organize related ____ and ____.
b) The `import` statement makes classes and interfaces from other packages available without needing to use their ____ names.
c) If you want to use all classes within the `java.util` package, you can use the ____ import statement.

**3. Short Answer Questions:**

a) Explain the purpose of packages in Java.
b) What is the difference between `import java.util.Scanner;` and `import java.util.*;`? When might you prefer one over the other?
c) Why is the `java.lang` package special? Give two examples of classes from this package.

**4. Programming Exercise:**

Create a new package named `com.example.shapes`. Inside this package, create a class called `Circle` with a public method `getArea(double radius)` that calculates and returns the area of a circle (Area = π * r²).

Then, in a separate file outside this package, write a Java program that imports the `Circle` class and uses it to calculate and print the area of a circle with a radius of 7.5.

---

### Answers to Practice Questions

**1. Multiple Choice Questions:**

a) **iii) `java.lang`**
b) **ii) `import java.util.ArrayList;`**
c) **iv) `public`**

**2. Fill in the Blanks:**

a) classes, interfaces
b) fully qualified
c) wildcard (`*`)

**3. Short Answer Questions:**

a) Packages are used to group related classes and interfaces, providing a namespace to prevent naming conflicts and control access. They promote code organization and reusability.

b)
    *   `import java.util.Scanner;` imports only the `Scanner` class. This is good practice for clarity and can sometimes improve compile times slightly as the compiler only needs to consider one specific class.
    *   `import java.util.*;` imports all public classes from the `java.util` package. This is convenient when you need to use many classes from a package. However, it can lead to naming conflicts if different imported packages have classes with the same name, and it might import classes you don't actually need, potentially impacting performance subtly.

c) The `java.lang` package is special because it is automatically imported into every Java program. You do not need to use an `import` statement to access its classes.
    *   Examples: `String`, `System`, `Integer`, `Double`, `Math`, `Object`.

**4. Programming Exercise:**

**File Structure:**

```
your_project_root/
└── com/
    └── example/
        └── shapes/
            └── Circle.java
└── MainCircle.java
```

**File: `com/example/shapes/Circle.java`**

```java
package com.example.shapes;

public class Circle {
    /**
     * Calculates the area of a circle.
     * @param radius The radius of the circle.
     * @return The area of the circle.
     */
    public double getArea(double radius) {
        return Math.PI * radius * radius;
    }
}
```

**File: `MainCircle.java`**

```java
// Import the specific Circle class from the com.example.shapes package
import com.example.shapes.Circle;

public class MainCircle {
    public static void main(String[] args) {
        // Create an instance of the Circle class
        Circle myCircle = new Circle();

        // Define the radius
        double radius = 7.5;

        // Calculate and print the area
        double area = myCircle.getArea(radius);
        System.out.println("The area of the circle with radius " + radius + " is: " + area);
    }
}
```

**How to Compile and Run (from `your_project_root` directory):**

1.  **Compile:**
    ```bash
    javac com/example/shapes/Circle.java MainCircle.java
    ```
    or if using an IDE, it usually handles this.

2.  **Run:**
    ```bash
    java MainCircle
    ```

**Expected Output:**

```
The area of the circle with radius 7.5 is: 176.71458676442586
```

### Summary of Key Takeaways

*   Packages are crucial for organizing Java code, preventing naming conflicts, and controlling access.
*   The `package` keyword declares the package a class belongs to.
*   The `import` statement makes classes from other packages accessible.
*   You can import specific classes (`import com.package.ClassName;`) or all classes (`import com.package.*;`).
*   The `java.lang` package is automatically imported.
*   Importing does not bypass access modifiers (`public`, `protected`, default, `private`). Only `public` members are generally accessible outside their defining package.
*   Understanding common built-in packages like `java.util` and `java.io` is essential for practical Java programming.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
