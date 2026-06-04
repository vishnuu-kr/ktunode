---
title: "Packages - Defining Package, Importing Packages."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3600f"
status: "completed"
scrapedAt: "2026-05-23T16:17:35.195Z"
---
## OBJECT ORIENTED PROGRAMMING

### Module 3: More features of Java

#### Topic: Packages - Defining Packages, Importing Packages

---

### 1. Introduction to Packages

Packages are a fundamental mechanism in Java for organizing and structuring your code. They help in:

*   **Namespace Management:** Preventing naming conflicts between different classes.
*   **Access Control:** Controlling the visibility of classes, interfaces, variables, and methods.
*   **Code Reusability:** Bundling related classes and interfaces together for easy reuse.
*   **Modularity:** Breaking down large programs into smaller, manageable units.

**Key Concept:** A package is a collection of related Java classes and interfaces.

**Reference (Herbert Schildt, "Java: The Complete Reference"):** Schildt emphasizes that packages provide a way to group related classes and interfaces. He highlights that packages are the primary mechanism for code organization and access control in Java.

**Reference (Y. Daniel Liang, "Introduction to Java Programming"):** Liang explains packages as namespaces, preventing naming conflicts and facilitating code reuse by grouping related classes.

---

### 2. Defining a Package

To define a package, you use the `package` keyword at the beginning of your Java source file.

#### 2.1 Syntax

```java
package package_name;
```

*   `package_name`: This is an identifier that specifies the name of the package.
*   The `package` declaration, if present, must be the very first statement in the Java source file.
*   There can be only one `package` declaration per file.

#### 2.2 Naming Conventions

Package names should be:

*   Lowercase letters.
*   Follow a reverse domain name convention (e.g., `com.example.mypackage`). This is a convention and not strictly enforced by the compiler, but it's good practice for uniqueness.
*   Separated by dots (`.`). Each dot represents a subdirectory in the file system.

**Example:**

```java
// File: com/example/math/Calculator.java
package com.example.math;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

In this example, the `Calculator` class belongs to the `com.example.math` package. This implies a directory structure: `com/example/math/Calculator.java`.

**Important Point:** The package name directly corresponds to the directory structure where the compiled `.class` file will reside.

#### 2.3 No Package Declaration (Default Package)

If a Java source file does not have a `package` declaration, its classes are placed in the **default package**.

*   Classes in the default package can be accessed from any other class, but they cannot be accessed by classes in any other package.
*   It's generally not recommended to use the default package for larger projects as it hinders organization and can lead to issues.

---

### 3. Importing Packages

To use classes and interfaces defined in other packages, you need to import them into your current class. This is done using the `import` keyword.

#### 3.1 Syntax

There are two main ways to import classes:

**a) Importing a specific class:**

```java
import package_name.ClassName;
```

This imports a single, specific class from a package.

**b) Importing all classes from a package:**

```java
import package_name.*;
```

This imports all public classes and interfaces within the specified package.

**Reference (Paul Deitel & Harvey Deitel, "Java How to Program, Early Objects"):** The Deitels explain that `import` statements make it unnecessary to specify the full package name and class name for every type used from another package. They highlight the efficiency and readability gained by using imports.

#### 3.2 Examples

**Scenario:** We have a `Calculator` class in the `com.example.math` package, and we want to use it in another class.

**File: `com/example/myapp/MainApp.java`**

**Option 1: Importing a specific class**

```java
// File: com/example/myapp/MainApp.java
package com.example.myapp;

import com.example.math.Calculator; // Import the specific Calculator class

public class MainApp {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int sum = calc.add(5, 10);
        System.out.println("The sum is: " + sum);
    }
}
```

**Option 2: Importing all classes from the package**

```java
// File: com/example/myapp/MainApp.java
package com.example.myapp;

import com.example.math.*; // Import all classes from the com.example.math package

public class MainApp {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int sum = calc.add(5, 10);
        System.out.println("The sum is: " + sum);
    }
}
```

#### 3.3 Importing Static Members (Java 5 and later)

You can also import static members (fields and methods) of a class, allowing you to use them directly without qualifying them with the class name.

**Syntax:**

```java
import static package_name.ClassName.memberName; // Import a specific static member
import static package_name.ClassName.*;      // Import all static members
```

**Example:**

Let's assume `Calculator` has a static method `multiply`:

```java
// File: com/example/math/Calculator.java
package com.example.math;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public static int multiply(int a, int b) { // Static method
        return a * b;
    }
}
```

**Using static import in `MainApp.java`:**

```java
// File: com/example/myapp/MainApp.java
package com.example.myapp;

import static com.example.math.Calculator.multiply; // Import the static multiply method

public class MainApp {
    public static void main(String[] args) {
        int product = multiply(4, 6); // Directly use multiply()
        System.out.println("The product is: " + product);
    }
}
```

**Important Point:** Using `import static` can make code more concise but can also reduce readability if overused or if names are ambiguous.

#### 3.4 The `java.lang` Package

The `java.lang` package is automatically imported into every Java program. You do not need to explicitly import classes like `String`, `System`, `Integer`, `Math`, etc., as they are readily available.

**Reference (Balagurusamy E., "Programming JAVA a Primer"):** Balagurusamy notes that `java.lang` is an exception to the general rule of importing packages; its contents are implicitly available to all Java programs.

---

### 4. Access Control and Packages

Packages play a crucial role in Java's access control mechanism. The access modifiers (`public`, `protected`, `private`, and default/package-private) determine the visibility of members.

| Modifier          | Within the Same Class | Within the Same Package | Within a Subclass (Different Package) | Outside the Package (Non-Subclass) |
| :---------------- | :-------------------- | :---------------------- | :------------------------------------ | :--------------------------------- |
| `public`          | Yes                   | Yes                     | Yes                                   | Yes                                |
| `protected`       | Yes                   | Yes                     | Yes                                   | No                                 |
| `private`         | Yes                   | No                      | No                                    | No                                 |
| **Default (no modifier)** | Yes                   | Yes                     | No                                    | No                                 |

**Key Concept:** Members declared with no explicit access modifier are accessible only within their own package.

**Reference (Flanagan D, "Java in A Nutshell"):** Flanagan highlights that package-private (default) access is a powerful tool for encapsulation, allowing classes within the same package to interact freely while restricting access from outside.

**Example:**

Consider two classes in the same package:

```java
// File: com/example/utils/Helper.java
package com.example.utils;

public class Helper {
    String message = "Hello from Helper!"; // Default access

    void displayMessage() { // Default access method
        System.out.println(message);
    }
}

// File: com/example/utils/Utility.java
package com.example.utils;

public class Utility {
    public static void main(String[] args) {
        Helper h = new Helper();
        h.displayMessage(); // Accessible within the same package
    }
}
```

Now consider a class in a different package trying to access `Helper`:

```java
// File: com/example/myapp/AnotherApp.java
package com.example.myapp;

import com.example.utils.Helper; // Assuming Helper is public

public class AnotherApp {
    public static void main(String[] args) {
        Helper h = new Helper();
        // h.displayMessage(); // Compile-time error: displayMessage() has default access and is not visible from another package
        // System.out.println(h.message); // Compile-time error: message has default access and is not visible from another package
    }
}
```

To make `Helper` and its members accessible from `AnotherApp`, they would need to be declared `public`.

---

### 5. The `protected` Modifier

The `protected` modifier allows access:
*   Within the same class.
*   Within the same package.
*   By subclasses, even if they are in different packages.

**Example:**

```java
// File: com/example/base/BaseClass.java
package com.example.base;

public class BaseClass {
    protected String protectedData = "Protected Value";

    protected void protectedMethod() {
        System.out.println("Protected method called.");
    }
}

// File: com/example/derived/DerivedClass.java
package com.example.derived;

import com.example.base.BaseClass;

public class DerivedClass extends BaseClass {
    public void accessProtectedMembers() {
        System.out.println(this.protectedData); // Accessible in subclass
        this.protectedMethod();                 // Accessible in subclass
    }
}

// File: com/example/myapp/TestApp.java
package com.example.myapp;

import com.example.derived.DerivedClass;

public class TestApp {
    public static void main(String[] args) {
        DerivedClass dc = new DerivedClass();
        dc.accessProtectedMembers();
    }
}
```

---

### 6. Package Access Specifier (Default)

When no access specifier is used (i.e., `public`, `protected`, or `private`), the member has **package access**.

*   It's accessible only within the same package.
*   This is often referred to as "friendly" access.

**Reference (Sierra K., "Head First Java"):** Sierra explains that package-private is like having a "package-private" door – only those within the same package can get in. It's a key concept for building robust, well-encapsulated components.

---

### 7. Creating Your Own Packages

**Steps:**

1.  **Choose a Package Name:** Decide on a unique and descriptive package name (e.g., `com.mycompany.utilities`).
2.  **Create Directories:** Create the corresponding directory structure on your file system (e.g., `com/mycompany/utilities`).
3.  **Add `package` Declaration:** At the top of your Java source files, add the `package` declaration (e.g., `package com.mycompany.utilities;`).
4.  **Compile:** When compiling, ensure the compiler knows about the package structure. You typically compile from the root directory of your project.

    ```bash
    # Assuming your source files are in a 'src' directory
    # And the package structure is src/com/mycompany/utilities
    cd src
    javac com/mycompany/utilities/*.java
    ```
5.  **Run:** When running, you also need to specify the package and class name.

    ```bash
    # Assuming your compiled .class files are in a 'bin' directory
    # And your main class is in 'com.mycompany.app.MainApp'
    java -classpath bin com.mycompany.app.MainApp
    ```

---

### 8. Java API Packages

Java provides a rich set of built-in packages (the Java API) for various functionalities. Some common ones include:

*   `java.lang`: Core language classes.
*   `java.util`: Utility classes (Collections, Date, Time, etc.).
*   `java.io`: Input/Output operations.
*   `java.net`: Networking functionalities.
*   `java.awt`: Abstract Window Toolkit (GUI elements).
*   `javax.swing`: Swing GUI components (a more advanced GUI toolkit).
*   `java.sql`: Database connectivity (JDBC).

**Reference (Rajib Mall, "Fundamentals of Software Engineering"):** Mall might discuss how the use of well-defined API packages contributes to the modularity and maintainability of software systems, a key aspect of software engineering principles.

---

### 9. Important Points to Remember

*   A `package` declaration must be the first statement in a Java source file.
*   If no `package` declaration is present, the class belongs to the default package.
*   The directory structure must match the package name.
*   Classes in the default package cannot be imported by classes in named packages.
*   `import java.lang.*` is implicit.
*   Use `import` statements to make classes from other packages accessible.
*   Packages are essential for code organization, namespace management, and access control.
*   `public` members are accessible from anywhere.
*   `protected` members are accessible within the package and by subclasses.
*   Default (package-private) members are accessible only within the same package.
*   `private` members are accessible only within the same class.

---

### 10. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of using packages in Java?
a) To improve program performance
b) To organize classes and interfaces and prevent naming conflicts
c) To enforce strict memory management
d) To allow direct access to hardware resources

**Question 2:**
Which keyword is used to declare that a class belongs to a specific package?
a) `import`
b) `class`
c) `package`
d) `public`

**Question 3:**
If a Java source file does not contain a `package` declaration, in which package do its classes reside?
a) `java.lang`
b) `com.default`
c) The default package
d) The main package

**Question 4:**
What is the correct syntax to import all classes from a package named `com.example.utilities`?
a) `import com.example.utilities;`
b) `import com.example.utilities.*`
c) `import com.example.utilities.all`
d) `import utilities.*`

**Question 5:**
Consider the following code structure:

```
myproject/
├── src/
│   ├── com/
│   │   └── mycompany/
│   │       ├── utils/
│   │       │   └── Calculator.java
│   │       └── app/
│   │           └── MainApp.java
└── bin/
```

And `Calculator.java` contains:
```java
// Calculator.java
package com.mycompany.utils;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

What `import` statement is needed in `MainApp.java` to use the `Calculator` class?

**Answers:**

**Answer 1:**
b) To organize classes and interfaces and prevent naming conflicts

**Answer 2:**
c) `package`

**Answer 3:**
c) The default package

**Answer 4:**
b) `import com.example.utilities.*`

**Answer 5:**
```java
// MainApp.java
package com.mycompany.app;

import com.mycompany.utils.Calculator; // Or import com.mycompany.utils.*;

public class MainApp {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Result: " + calc.add(10, 20));
    }
}
```

**Explanation for Answer 5:** The `MainApp.java` file is in the `com.mycompany.app` package. To access the `Calculator` class, which is in the `com.mycompany.utils` package, you need to import it. The correct import statement explicitly names the class or uses the wildcard to import all classes from the `utils` package.

---

### Alignment with Course Outcomes:

*   **CO1 (Classes, objects, constructors, data hiding, inheritance, polymorphism):** Packages provide the structure to organize these fundamental OOP concepts. Understanding packages helps in designing larger systems where these concepts are applied across different modules.
*   **CO2 (Datatypes, operators, control statements, object-oriented class concepts, I/O basics):** Packages are used to group classes that utilize these core Java features. For example, a `util` package might contain utility classes with various methods.
*   **CO3 (Packages, exception handling, Multithreaded programming):** This topic directly addresses the use of packages. Packages are often used in conjunction with exception handling (e.g., custom exception classes in a `exceptions` package) and multithreading (e.g., thread-safe utility classes in a `concurrency` package).
*   **CO4 (GUI applications, database connectivity):** Packages are crucial for organizing Swing components (e.g., `javax.swing`) and database connectivity classes (`java.sql`). Developers create their own packages for UI elements or data access layers.

---

This comprehensive study note covers the definition and usage of packages in Java, emphasizing their role in code organization and access control, and aligning with the provided learning and course outcomes.
