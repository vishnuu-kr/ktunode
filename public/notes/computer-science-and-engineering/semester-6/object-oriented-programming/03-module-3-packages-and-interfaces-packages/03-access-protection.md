---
title: "Access Protection"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces  – Packages "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfb0"
status: "completed"
scrapedAt: "2026-05-20T16:56:17.817Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 3: Packages and Interfaces – Packages

## Topic: Access Protection

This module delves into how Java controls the visibility and accessibility of classes, variables, methods, and constructors. Understanding access protection is crucial for building modular, maintainable, and secure applications.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the concept of access protection in Java.
*   Identify and explain the four access specifiers in Java: `public`, `protected`, `default` (package-private), and `private`.
*   Describe the scope and accessibility rules associated with each access specifier.
*   Explain how access protection applies to different program elements (classes, interfaces, variables, methods, constructors).
*   Understand the role of packages in conjunction with access specifiers for controlling visibility.
*   Apply access protection effectively to design well-encapsulated and secure Java programs.

---

### Key Concepts and Definitions

**Access Protection:** In Java, access protection refers to the mechanism that controls which parts of a program can access which other parts. It's about enforcing encapsulation and defining boundaries for data and functionality.

**Access Specifiers (Access Modifiers):** Keywords used in Java to define the visibility of classes, methods, variables, and constructors. These specifiers dictate where these elements can be accessed from.

**Encapsulation:** A fundamental OOP principle that bundles data (variables) and the methods that operate on that data within a single unit (class). Access protection is a key enabler of encapsulation, as it allows you to hide implementation details and expose only necessary interfaces.

**Package:** A namespace that organizes related classes and interfaces. Packages play a vital role in access protection by providing a grouping mechanism.

---

### The Four Access Specifiers

Java provides four access specifiers:

1.  **`public`**
2.  **`protected`**
3.  **`default` (package-private)**
4.  **`private`**

Let's explore each one in detail.

---

#### 1. `public`

*   **Visibility:** The most accessible. `public` members can be accessed from **anywhere**, both within the same package and from other packages.
*   **Scope:** Global.
*   **Use Cases:**
    *   Public APIs of a library or framework.
    *   Entry points of an application (e.g., `main` method).
    *   Constants that are meant to be universally accessible.

**Example:**

Let's say we have a `Calculator` class in a package named `com.example.math`.

```java
// File: com/example/math/Calculator.java
package com.example.math;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

Now, from a different package, say `com.example.app`:

```java
// File: com/example/app/MainApp.java
package com.example.app;

import com.example.math.Calculator; // Import the public class

public class MainApp {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int sum = calc.add(5, 3); // Accessible because both class and method are public
        System.out.println("Sum: " + sum);
    }
}
```

**Key Points for `public`:**

*   Classes declared as `public` can only have one `public` top-level class per file.
*   `public` methods and variables are freely available.

---

#### 2. `protected`

*   **Visibility:** Accessible within the **same package** and by **subclasses** (even if those subclasses are in different packages).
*   **Scope:** Package-level and inheritance-level.
*   **Use Cases:**
    *   Methods or variables that should be accessible by subclasses for extension or modification.
    *   Members that are part of a package's internal API but can be leveraged by derived classes.

**Example:**

Consider a `Shape` class and a `Circle` subclass.

```java
// File: com/example/shapes/Shape.java
package com.example.shapes;

public class Shape {
    protected int sideLength; // Accessible within com.example.shapes and by subclasses

    protected void displaySideLength() {
        System.out.println("Side length: " + sideLength);
    }
}
```

```java
// File: com/example/shapes/Circle.java
package com.example.shapes;

public class Circle extends Shape { // Circle is a subclass of Shape
    public void printInfo() {
        // Accessing protected member from subclass in the same package
        this.sideLength = 10; // Valid
        displaySideLength();  // Valid
    }
}
```

Now, let's consider a subclass in a *different* package.

```java
// File: com/example/drawing/DrawingApp.java
package com.example.drawing;

import com.example.shapes.Shape; // Import the class from another package

public class DrawingApp {
    public static void main(String[] args) {
        // Cannot directly create Shape object unless it's public (which it is)
        // But let's create a Circle (assuming Circle is public)
        // com.example.shapes.Circle circle = new com.example.shapes.Circle();
        // circle.printInfo(); // If Circle is public

        // To demonstrate access to protected members *from a subclass*,
        // we need to create an instance of a subclass and access through it.
        // Let's assume we have another subclass, Square, in com.example.shapes
        // If we had a class Square extends Shape, and we create a Square object here:
        // Square sq = new Square();
        // sq.sideLength = 5; // Valid if Square is public
        // sq.displaySideLength(); // Valid if Square is public

        // The key is that 'protected' allows access to 'sideLength' and 'displaySideLength'
        // if 'DrawingApp' itself inherited from 'Shape', or if we had a subclass
        // of Shape defined within 'DrawingApp' (which is less common for top-level classes).
        // The primary use case is within the same package or through inherited instances.
    }
}
```

**Important Note on `protected` and Subclasses in Different Packages:**
A `protected` member can be accessed by a subclass in a different package **only through an instance of that subclass itself** (or its descendant classes). It cannot be accessed using an instance of a superclass in that different package.

**Key Points for `protected`:**

*   Consider `protected` when you want to allow subclasses to access or modify certain members but restrict access from unrelated classes.

---

#### 3. `default` (package-private)

*   **Visibility:** Accessible only within the **same package**. No explicit keyword is used; it's the absence of any access specifier.
*   **Scope:** Package-level.
*   **Use Cases:**
    *   Members that are part of the package's internal implementation and should not be exposed to other packages.
    *   Utility classes or helper methods that are only relevant within a specific package.

**Example:**

```java
// File: com/example/utils/StringUtils.java
package com.example.utils;

class StringUtils { // Default (package-private) class
    String appendDollar(String str) { // Default (package-private) method
        return str + "$";
    }
}
```

```java
// File: com/example/utils/Helper.java
package com.example.utils;

public class Helper {
    public void processString(String input) {
        // Within the same package (com.example.utils), we can access default members
        StringUtils util = new StringUtils();
        String result = util.appendDollar(input); // Valid
        System.out.println("Processed: " + result);
    }
}
```

Now, from a different package:

```java
// File: com/example/app/MainApp.java
package com.example.app;

// import com.example.utils.StringUtils; // Cannot import default class directly
// import com.example.utils.Helper;

public class MainApp {
    public static void main(String[] args) {
        // Helper helper = new Helper();
        // helper.processString("Hello"); // This would work IF Helper was public

        // Trying to access StringUtils from a different package:
        // StringUtils util = new StringUtils(); // ERROR: StringUtils is not public
        // String result = util.appendDollar("Test"); // ERROR: appendDollar() is not public
    }
}
```

**Key Points for `default`:**

*   If you don't specify an access modifier, `default` is used.
*   It's the most restrictive when dealing with cross-package access.

---

#### 4. `private`

*   **Visibility:** The most restrictive. `private` members can only be accessed **within the same class**.
*   **Scope:** Class-level only.
*   **Use Cases:**
    *   Hiding implementation details (e.g., helper methods used internally).
    *   Protecting instance variables from direct modification outside the class.
    *   Ensuring data integrity by controlling access through getter and setter methods.

**Example:**

```java
// File: com/example/bank/Account.java
package com.example.bank;

public class Account {
    private double balance; // Private instance variable

    public Account(double initialBalance) {
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            this.balance = 0;
            System.out.println("Initial balance cannot be negative. Set to 0.");
        }
    }

    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            System.out.println("Withdrew: " + amount);
        } else {
            System.out.println("Withdrawal failed. Insufficient funds or invalid amount.");
        }
    }

    public double getBalance() { // Public getter to access private balance
        return this.balance;
    }

    // Private helper method
    private void logTransaction(String type, double amount) {
        System.out.println("Transaction Log: " + type + " - " + amount);
    }

    // Method to demonstrate calling private method from within the class
    public void performDepositAndLog(double amount) {
        deposit(amount);
        logTransaction("Deposit", amount); // Valid call
    }
}
```

Trying to access `private` members from outside:

```java
// File: com/example/app/BankApp.java
package com.example.app;

import com.example.bank.Account;

public class BankApp {
    public static void main(String[] args) {
        Account myAccount = new Account(1000.0);

        // myAccount.balance = 2000.0; // ERROR: balance has private access in Account
        // myAccount.logTransaction("Failed", 50); // ERROR: logTransaction() has private access in Account

        myAccount.deposit(500.0); // Valid
        System.out.println("Current Balance: " + myAccount.getBalance()); // Valid (using public getter)
        myAccount.performDepositAndLog(200.0); // Valid
        System.out.println("Final Balance: " + myAccount.getBalance());
    }
}
```

**Key Points for `private`:**

*   Essential for data hiding and maintaining the integrity of an object's state.
*   Always preferred unless you specifically need broader access.

---

### Table Summary of Access Protection

| Access Specifier | Within Same Class | Within Same Package | Subclass (Different Package) | World (Any Package) |
| :--------------- | :---------------- | :------------------ | :--------------------------- | :------------------ |
| `public`         | Yes               | Yes                 | Yes                          | Yes                 |
| `protected`      | Yes               | Yes                 | Yes (via inheritance)        | No                  |
| `default`        | Yes               | Yes                 | No                           | No                  |
| `private`        | Yes               | No                  | No                           | No                  |

---

### Access Protection for Different Program Elements

*   **Top-Level Classes/Interfaces:** Can only be `public` or `default`. A `.java` file can contain at most one `public` top-level class or interface. If a top-level class/interface is not `public`, it has `default` access.
*   **Nested Classes (Inner Classes):** Can have all four access specifiers (`public`, `protected`, `default`, `private`), as well as `static`.
*   **Methods:** Can have all four access specifiers.
*   **Constructors:** Can have all four access specifiers.
*   **Instance Variables (Fields):** Can have all four access specifiers.

---

### Role of Packages in Access Protection

Packages are fundamental to Java's access control system:

*   **Encapsulation and Organization:** Packages group related classes, interfaces, enumerations, and annotations. This organization aids in managing large projects.
*   **Namespace Isolation:** Packages prevent naming conflicts. Classes with the same name can exist in different packages.
*   **Access Control Boundaries:** The `default` (package-private) access specifier directly leverages packages. Members declared `default` are only visible within their own package, enforcing a strong boundary between different package groups.
*   **`import` Statement:** The `import` statement allows classes from one package to be accessible (based on their access specifiers) in another package. Without `import`, you'd have to use fully qualified names (e.g., `com.example.math.Calculator`).

---

### Best Practices for Access Protection

*   **Default to `private`:** Start with `private` for all members unless there's a clear reason to make them more accessible. This is the core of encapsulation.
*   **Use Getters and Setters:** For instance variables that need to be accessed or modified from outside the class, provide `public` getter and setter methods. This allows you to add validation or logic within these methods.
*   **Prefer `protected` for Inheritance:** If a member is intended to be used by subclasses but not by unrelated classes, `protected` is the appropriate choice.
*   **Use `default` for Package-Internal Utilities:** If a class, method, or variable is only meant to be used within its own package, declare it with `default` access.
*   **Use `public` for the API:** Only members that form the public interface of your class or package should be `public`.
*   **Be Mindful of Package Structure:** Your package structure should reflect logical groupings of functionality, which directly influences how access protection works.

---

### Practice Questions

1.  What are the four access specifiers in Java?
2.  Explain the visibility of a `public` member.
3.  Under what conditions can a `protected` member be accessed?
4.  What is the difference between `default` and `private` access?
5.  Can a top-level class be declared as `private`? Explain why or why not.
6.  If a class is declared with `default` access, from where can it be accessed?
7.  Consider the following code snippets. What will be the output or compilation error?

    ```java
    // Package A: com.example.a
    package com.example.a;

    class Base {
        protected void show() {
            System.out.println("Base show");
        }
    }
    ```

    ```java
    // Package B: com.example.b
    package com.example.b;

    import com.example.a.Base;

    class Derived extends Base {
        void display() {
            show(); // Can it access show()?
        }
    }

    public class Main {
        public static void main(String[] args) {
            Derived d = new Derived();
            d.display();
        }
    }
    ```
8.  What access specifier should you use for a method that is only intended to be called by other methods within the same class?

---

### Answers to Practice Questions

1.  The four access specifiers in Java are `public`, `protected`, `default` (package-private), and `private`.
2.  A `public` member can be accessed from anywhere – within the same class, same package, subclasses, and any other package.
3.  A `protected` member can be accessed within the same package, and by subclasses (even if they are in different packages), but only through an instance of the subclass itself.
4.  `default` members are accessible only within the same package. `private` members are accessible only within the same class. `private` is more restrictive than `default`.
5.  No, a top-level class (a class not nested within another class) cannot be declared as `private`. Top-level classes can only be `public` or `default`. The reason is that `private` access is class-level, and for a top-level class to be useful, it needs to be accessible at least within its package.
6.  A class declared with `default` access can only be accessed from other classes within the **same package**.
7.  This code will compile and run successfully.
    *   `com.example.a.Base` is a `default` class, so it's accessible within the `com.example.a` package.
    *   The `show()` method in `Base` is `protected`.
    *   In `com.example.b.Derived`, which extends `Base`, `show()` can be accessed because `Derived` is a subclass and `show()` is `protected`.
    *   The `Main` class in `com.example.b` can create an instance of `Derived` and call `display()`, which in turn calls `show()`.

    Output:
    ```
    Base show
    ```
8.  You should use the `private` access specifier for a method that is only intended to be called by other methods within the same class.

---

### Important Points to Remember

*   **Encapsulation is Key:** Access protection is the mechanism that enables encapsulation. Aim to hide as much as possible.
*   **`public` for API, `private` for Implementation:** This is a good rule of thumb.
*   **Packages Define Boundaries:** `default` access enforces boundaries between different packages.
*   **`protected` is for Inheritance and Package:** Understand its dual nature.
*   **No Access Specifier = `default`:** Always remember this.
*   **Use getters/setters:** Protect your data and control its modification.
