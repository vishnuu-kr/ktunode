---
title: "Packages  - Defining Package"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe698"
status: "completed"
scrapedAt: "2026-05-23T17:51:42.020Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 3: More Features of Java

## Topic: Packages - Defining Packages

---

### **Introduction to Packages**

Packages are a fundamental mechanism in Java for organizing classes, interfaces, enumerations, and annotations. They provide a way to group related code together, which helps in:

*   **Namespace Management:** Preventing naming conflicts between classes with the same name but different functionalities.
*   **Access Control:** Controlling the visibility and accessibility of classes and their members.
*   **Code Organization:** Structuring large projects into manageable and logical units.

This topic focuses on how to *define* your own packages in Java.

---

### **1. What is a Package?**

A package is a collection of related classes and interfaces. It's analogous to a folder or directory in a file system, where related files are stored together.

**Key Concepts:**

*   **Namespace:** A package creates a unique namespace for its members. This means a class `MyClass` in package `com.example.utils` is distinct from a class `MyClass` in package `org.another.util`.
*   **Encapsulation:** Packages help in encapsulating related code, hiding implementation details and exposing only the necessary components.
*   **Reusability:** Well-defined packages make it easier to reuse code across different projects.

**Reference:**

*   **Java: The Complete Reference by Herbert Schildt (8/e):** Chapter 9, "Packages and Interface," provides a comprehensive overview of packages, their purpose, and how to create and use them.
*   **Java How to Program by Deitel & Deitel (11th Edition):** Chapter 7, "Class Accounts, Strings and Characters," briefly touches upon packages as a means of organizing classes, and later chapters will delve deeper into their usage.

---

### **2. Defining Your Own Package**

To define a package, you use the `package` keyword at the very beginning of a Java source file, before any class or interface declarations.

**Syntax:**

```java
package package_name;
```

**Rules for Package Names:**

1.  **Lowercase:** Package names should generally be in lowercase. This is a convention to avoid conflicts with class names, which often use PascalCase.
2.  **Hierarchical:** Package names can be hierarchical, separated by dots (`.`). For example, `com.example.myapp`. This hierarchy mirrors the directory structure on the file system.
3.  **Valid Identifiers:** Package names must be valid Java identifiers. They cannot start with a digit and should only contain letters, numbers, and the underscore (`_`).
4.  **No Keywords:** Package names cannot be Java keywords (e.g., `public`, `class`, `int`).

**Directory Structure:**

The directory structure of your Java files must match the package name. If you define a package `com.example.myapp`, your source file `MyClass.java` should reside in a directory structure like:

```
<project_root>/
  com/
    example/
      myapp/
        MyClass.java
```

**Example:**

Let's create a package named `com.mycompany.utilities`.

**`utilities/com/mycompany/utilities/StringUtils.java`**

```java
package com.mycompany.utilities;

public class StringUtils {
    public static String reverseString(String str) {
        if (str == null) {
            return null;
        }
        return new StringBuilder(str).reverse().toString();
    }
}
```

**Important Point to Remember:**

*   **First Statement:** The `package` declaration *must* be the very first statement in the Java source file. There can be no whitespace or comments before it.

---

### **3. How Java Finds Packages**

The Java compiler and runtime environment need to know where to find the compiled `.class` files corresponding to a package. This is achieved through the **classpath**.

**Classpath:**

The classpath is an environment variable or a command-line argument that tells the Java Virtual Machine (JVM) where to look for user-defined classes and packages, as well as third-party libraries.

*   **Default Classpath:** If not explicitly set, the classpath usually includes the current directory (`.`).
*   **Setting the Classpath:**
    *   **Environment Variable:** You can set the `CLASSPATH` environment variable.
    *   **Command-Line Argument:** Use the `-cp` or `-classpath` option when running `javac` or `java`.

**Example:**

Assuming your `utilities` directory (which contains `com/mycompany/utilities/StringUtils.java`) is at the root of your project:

1.  **Compile:** Navigate to the `utilities` directory in your terminal.
    ```bash
    cd path/to/your/project/utilities
    javac com/mycompany/utilities/StringUtils.java
    ```
    This will create `StringUtils.class` inside `utilities/com/mycompany/utilities/`.

2.  **Use the Package (from outside):** Create another Java file (e.g., `MainApp.java`) in a directory *outside* of `utilities`.

    **`MainApp.java`** (located in a directory like `path/to/your/project/`)

    ```java
    // Import the specific class from the package
    import com.mycompany.utilities.StringUtils;

    public class MainApp {
        public static void main(String[] args) {
            String original = "Java";
            String reversed = StringUtils.reverseString(original);
            System.out.println("Original: " + original);
            System.out.println("Reversed: " + reversed);
        }
    }
    ```

3.  **Compile `MainApp.java`:**
    ```bash
    cd path/to/your/project/
    javac -cp . MainApp.java
    ```
    Here, `-cp .` tells the compiler to look for classes in the current directory. The `com` directory (containing your `StringUtils.class`) is accessible because the current directory is one level above it.

4.  **Run `MainApp`:**
    ```bash
    java -cp . MainApp
    ```
    This will execute `MainApp`, which uses the `StringUtils` class from the `com.mycompany.utilities` package.

**Important Point to Remember:**

*   When compiling or running a program that uses a custom package, the classpath must include the root directory of the package structure (the directory that *contains* the top-level package directory, e.g., `com/` in our example).

---

### **4. Benefits of Using Packages**

*   **Organizing Large Projects:** As projects grow, packages help manage complexity by grouping related files.
*   **Preventing Naming Collisions:** Imagine two different libraries providing a `Logger` class. Packages ensure that `com.logginglib.Logger` is distinct from `org.anotherlib.Logger`.
*   **Access Control:** Packages work with access modifiers (`public`, `protected`, `default`, `private`) to control visibility. Classes within the same package have broader access to each other's members than classes in different packages. (This will be explored further in subsequent topics).
*   **Code Reusability:** Packages encourage modular design, making it easier to share and reuse components.

**Reference:**

*   **Fundamentals of Software Engineering by Rajib Mall (4th edition):** While not directly about Java syntax, this book emphasizes the importance of modularity and organization in software development, which packages directly support.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e):** Liang's book often uses packages extensively to organize examples and demonstrate good programming practices.

---

### **5. Pre-defined Java Packages (Brief Mention)**

Java comes with a rich set of pre-defined packages that provide essential functionalities. You'll frequently use classes from these packages. Some common examples include:

*   `java.lang`: Contains fundamental classes like `Object`, `String`, `System`, `Math`, etc. This package is automatically imported.
*   `java.util`: Contains utility classes like `ArrayList`, `HashMap`, `Scanner`, `Date`, etc.
*   `java.io`: For input and output operations.
*   `java.net`: For networking.
*   `java.awt`: For abstract window toolkit (GUI programming).
*   `javax.swing`: For Swing GUI components.

You don't define these, but you will use the `import` statement to access classes within them.

---

### **Learning Outcomes Addressed:**

*   **CO3:** Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files.
    *   This topic directly addresses the "using packages" aspect of CO3 by explaining their definition and purpose in program organization. The ability to group related classes is a key step towards writing robust and maintainable programs.

---

### **Practice Questions/Exercises**

**Question 1:**

What is the primary purpose of using packages in Java?
a) To improve program execution speed.
b) To manage namespaces and organize classes.
c) To define graphical user interfaces.
d) To handle exceptions.

**Answer:** b) To manage namespaces and organize classes.

---

**Question 2:**

Consider the following code snippet:

```java
// This is my first class
import java.util.*;

public class MyClass {
    public static void main(String[] args) {
        // ...
    }
}
```

If you wanted to declare that `MyClass` belongs to the package `com.example.utilities`, where should the `package` statement be placed?

a) After the `import` statement.
b) Before the `import` statement.
c) After the class declaration.
d) It's not possible to place it in this file.

**Answer:** b) Before the `import` statement.

---

**Question 3:**

You have a Java file `MyUtil.java` located at `src/com/myproject/utils/MyUtil.java`.
What should be the first line of the `MyUtil.java` file?

**Answer:** `package com.myproject.utils;`

---

**Question 4:**

Assume you have the following directory structure and files:

```
my_project/
  com/
    example/
      shapes/
        Circle.java
  MainApp.java
```

And `Circle.java` contains:

```java
package com.example.shapes;

public class Circle {
    public double radius;

    public Circle(double r) {
        this.radius = r;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }
}
```

And `MainApp.java` contains:

```java
// Write the import statement and main method to use Circle
```

Fill in the missing parts of `MainApp.java` to use the `Circle` class. Also, provide the commands to compile and run `MainApp.java` assuming you are in the `my_project` directory.

**Answer:**

**`MainApp.java`:**

```java
package com.example.shapes; // Optional, but good practice if MainApp is also part of the package
// Or if MainApp is NOT part of the shapes package, it would be:
// import com.example.shapes.Circle;

public class MainApp { // If MainApp is NOT in com.example.shapes, it should not have a package statement or be in its own package
    public static void main(String[] args) {
        // To use Circle, we need to import it if MainApp is NOT in com.example.shapes
        // If MainApp IS in com.example.shapes, no import is needed.
        // Let's assume MainApp is in the root of my_project for this example.
        // So, we need to move MainApp.java to my_project/MainApp.java and ensure no package statement at top.

        // Corrected MainApp.java (assuming it's in my_project/MainApp.java)
        // import com.example.shapes.Circle; // This line is crucial if MainApp is NOT in com.example.shapes

        // If MainApp is in my_project/, and Circle is in my_project/com/example/shapes/, we need the import.

        // Let's revise the scenario for clarity:
        // Project Structure:
        // my_project/
        //   com/
        //     example/
        //       shapes/
        //         Circle.java
        //   app/
        //     MainApp.java

        // Circle.java (in my_project/com/example/shapes/):
        /*
        package com.example.shapes;
        public class Circle { ... }
        */

        // MainApp.java (in my_project/app/):
        // package app; // Optional
        import com.example.shapes.Circle; // This is necessary

        public class MainApp {
            public static void main(String[] args) {
                Circle myCircle = new Circle(5.0);
                System.out.println("Area of circle: " + myCircle.getArea());
            }
        }
    }
}
```
*(Self-correction for clarity in example structure and import necessity)*

**Revised Answer for Question 4:**

**Scenario:**
Project Structure:
```
my_project/
  com/
    example/
      shapes/
        Circle.java
  app/
    MainApp.java
```

**`my_project/com/example/shapes/Circle.java`:**
```java
package com.example.shapes;

public class Circle {
    public double radius;

    public Circle(double r) {
        this.radius = r;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }
}
```

**`my_project/app/MainApp.java`:**
```java
// No package statement here if it's in a separate 'app' directory not part of com.example.shapes
import com.example.shapes.Circle;

public class MainApp {
    public static void main(String[] args) {
        Circle myCircle = new Circle(5.0);
        System.out.println("Area of circle: " + myCircle.getArea());
    }
}
```

**Commands (executed from `my_project` directory):**

1.  **Compile:**
    ```bash
    javac app/MainApp.java com/example/shapes/Circle.java -d bin
    ```
    *(Explanation: `javac` is run from the root. We compile both source files and direct the output to a `bin` directory. The `-d bin` option creates the necessary package directories within `bin` automatically.)*

2.  **Run:**
    ```bash
    java -cp bin app.MainApp
    ```
    *(Explanation: We tell Java to look for classes in the `bin` directory, and then execute the `MainApp` class, which is now located within the `bin/app/` structure.)*

---

### **Key Takeaways**

*   Packages are crucial for organizing Java code.
*   The `package` keyword must be the first statement in a source file.
*   The directory structure must mirror the package name.
*   The classpath is essential for the JVM to locate package classes.
*   The root of the package directory structure must be included in the classpath when compiling/running.

---

This concludes the notes on defining packages in Java. The next steps will involve understanding how to *use* packages (importing) and how packages interact with access control modifiers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
