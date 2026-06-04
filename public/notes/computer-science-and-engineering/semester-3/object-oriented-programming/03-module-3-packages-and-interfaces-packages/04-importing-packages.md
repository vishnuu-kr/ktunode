---
title: "Importing Packages"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acb7"
status: "completed"
scrapedAt: "2026-05-20T16:28:57.934Z"
---
# Object-Oriented Programming: Module 3 - Packages & Interfaces (Packages)

## Topic: Importing Packages

**Description:** This topic focuses on the mechanisms and syntax involved in importing packages into your Java code. We'll cover different ways to import packages, their implications on code readability and potential conflicts, and best practices for using import statements.

**Learning Outcomes:**

*   Understand the purpose of importing packages.
*   Differentiate between the `import` statement and the fully qualified name.
*   Use the `import` statement to make classes from other packages available in your code.
*   Utilize wildcard imports (`*`) and understand their implications.
*   Recognize and resolve naming conflicts when importing classes with the same name from different packages.
*   Apply `static import` to directly access static members of classes.
*   Understand the concept of package visibility.

---

### 1. Purpose of Importing Packages

*   **Code Reusability:** Packages allow you to organize and reuse code across different projects. Importing packages allows your code to access classes and interfaces defined in those packages.
*   **Namespace Management:** Packages prevent naming collisions by providing a hierarchical namespace for classes. Importing enables you to refer to classes by their simple name without ambiguity.
*   **Organization:** Packages promote modularity by grouping related classes and interfaces together, improving code maintainability and understanding.
*   **Encapsulation:** While importing makes classes accessible, package-private access modifiers still restrict access to classes and members within the same package.

### 2. `import` Statement vs. Fully Qualified Name

*   **Fully Qualified Name (FQN):**  The full name of a class, including the package hierarchy (e.g., `java.util.ArrayList`). Using the FQN directly avoids the need for an `import` statement.
*   **`import` Statement:**  A declaration that informs the compiler that you intend to use a class or interface from a specific package within your code.  After importing, you can refer to the class or interface using its simple name (e.g., `ArrayList`).

**Example:**

```java
// Without import statement (using fully qualified name)
public class ExampleWithoutImport {
    public static void main(String[] args) {
        java.util.ArrayList<String> list = new java.util.ArrayList<>();
        System.out.println("List created using FQN");
    }
}

// With import statement
import java.util.ArrayList;

public class ExampleWithImport {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        System.out.println("List created using import");
    }
}
```

**Key Difference:** The `import` statement simplifies code by allowing you to use simple names, improving readability. Using FQN everywhere makes the code verbose.

### 3. Using the `import` Statement

*   **Syntax:** `import <package_name>.<class_name>;`
*   The `import` statement must appear at the beginning of your Java source file, *after* the package declaration (if any) and *before* any class declarations.

**Example:**

```java
package mypackage;

import java.util.Scanner;
import java.io.IOException;

public class MyClass {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter some text: ");
        String input = scanner.nextLine();
        System.out.println("You entered: " + input);

        try {
            throw new IOException("Example exception");
        } catch (IOException e) {
            System.err.println("Caught exception: " + e.getMessage());
        }
    }
}
```

### 4. Wildcard Imports (`*`)

*   **Syntax:** `import <package_name>.*;`
*   The `*` imports *all* classes and interfaces within the specified package.
*   **Advantages:**  Convenient for importing many classes from the same package.
*   **Disadvantages:**
    *   **Performance:**  Slightly slower compilation time (though typically negligible).  The compiler still resolves only the used classes.
    *   **Naming Conflicts:** Increases the risk of naming conflicts if two packages contain classes with the same name.
    *   **Readability:** Can make it harder to understand which classes are actually being used.

**Example:**

```java
import java.util.*; // Imports all classes in the java.util package

public class WildcardImportExample {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        Random random = new Random();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Using ArrayList, Random, and Scanner from java.util");
    }
}
```

**Best Practice:**  Generally, it's recommended to import specific classes rather than using wildcards, especially in larger projects, to improve code clarity and reduce the risk of naming conflicts.

### 5. Resolving Naming Conflicts

*   **Problem:** Occurs when two classes with the same name are imported from different packages.
*   **Solution:**  Use the fully qualified name to refer to the class you intend to use.
*   **Note:** You *cannot* import two classes with the same name from different packages using simple `import` statements.

**Example:**

```java
// Assume we have two classes:
// package com.example.shapes;  class Circle { ... }
// package com.example.geometry; class Circle { ... }

public class ConflictExample {
    public static void main(String[] args) {
        // Import one of the circles
        import com.example.shapes.Circle;

        // Use the imported circle class
        Circle myCircle = new Circle();

        // To use the other circle class, use its fully qualified name
        com.example.geometry.Circle otherCircle = new com.example.geometry.Circle();
    }
}
```

### 6. Static Import

*   **Purpose:** Allows you to directly access static members (fields and methods) of a class without qualifying them with the class name.
*   **Syntax:** `import static <package_name>.<class_name>.<static_member_name>;`  or  `import static <package_name>.<class_name>.*;`
*   **Use Cases:** Useful for accessing constants (e.g., `Math.PI`) or utility methods frequently.
*   **Caution:**  Overuse of static import can reduce code readability, making it difficult to determine the origin of static members.

**Example:**

```java
import static java.lang.Math.PI;
import static java.lang.System.out; // Import System.out for shorter output

public class StaticImportExample {
    public static void main(String[] args) {
        double radius = 5.0;
        double area = PI * radius * radius;
        out.println("Area of the circle: " + area); // Using out instead of System.out
    }
}
```

### 7. Package Visibility (Review)

*   `import` statements control which *classes* are accessible from other *packages*. However, *access modifiers* (public, protected, default/package-private, private) on classes, interfaces, fields, and methods control the visibility within a package and from other packages.
*   Even if you `import` a class, you can only access the `public` members directly from outside the package.
*   `protected` members are accessible within the same package and by subclasses in other packages.
*   Package-private members (no access modifier) are only accessible within the same package.
*   `private` members are only accessible within the same class.

### Important Points to Remember:

*   `import` statements simplify code by allowing you to use simple class names.
*   Use fully qualified names to resolve naming conflicts.
*   Wildcard imports should be used cautiously. Specific imports are generally preferred.
*   Static import can improve readability in specific cases but should not be overused.
*   `import` statements don't affect the visibility of members within a class.  Access modifiers still govern the access to fields and methods.
*   The `java.lang` package is implicitly imported into every Java program.

---

### Practice Questions/Exercises:

**1.  Explain the difference between using an `import` statement and the fully qualified name when referring to a class from another package.**

**Answer:** Using an `import` statement allows you to refer to a class using its simple name, making the code more readable. The fully qualified name (FQN) explicitly specifies the class's package, avoiding the need for an `import` statement. FQN is necessary when naming conflicts arise.

**2.  What are the advantages and disadvantages of using wildcard imports (`*`)?**

**Answer:**
*   **Advantages:** Convenience when importing many classes from the same package.
*   **Disadvantages:** Increased risk of naming conflicts, potential slight slowdown in compilation, and reduced code readability (less clear which classes are used).

**3.  How do you resolve a naming conflict when you need to use two classes with the same name from different packages in your code? Provide an example.**

**Answer:** You can resolve the conflict by using the fully qualified name (FQN) to refer to the specific class you intend to use. For example:

```java
// Two classes with the same name:
// package com.example.data; class Date { ... }
// package com.example.events; class Date { ... }

public class ConflictResolutionExample {
    public static void main(String[] args) {
        import com.example.data.Date;

        // Use com.example.data.Date through shortname "Date"
        Date myDate = new Date();

        // Use com.example.events.Date with fully qualified name
        com.example.events.Date eventDate = new com.example.events.Date();
    }
}
```

**4.  What is the purpose of static import? Give an example.**

**Answer:** Static import allows you to directly access static members (fields and methods) of a class without qualifying them with the class name. This can improve code readability in certain cases, especially when dealing with constants or frequently used utility methods.

Example:

```java
import static java.lang.Math.PI;

public class StaticImportQuestion {
    public static void main(String[] args) {
        double radius = 3.0;
        double area = PI * radius * radius;  // No need to write Math.PI
        System.out.println("Area: " + area);
    }
}
```

**5.  Write a code snippet that demonstrates the use of `import`, wildcard import, and static import.**

```java
package exercise;

import java.util.ArrayList; // Specific import
import java.util.*;            // Wildcard import
import static java.lang.Math.*; // Static import

public class ImportExample {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add((int)round(random() * 100)); // static import Math methods
        numbers.add((int)floor(random() * 100));

        System.out.println("Numbers: " + numbers);

        Scanner scanner = new Scanner(System.in);  //Access with wildcard import.

        scanner.close();

    }
}
```
---
This comprehensive set of notes covers the core aspects of importing packages in Java, providing explanations, examples, and practice questions to solidify your understanding of the topic. Remember to review and practice these concepts to master package management in your Java programming journey.
