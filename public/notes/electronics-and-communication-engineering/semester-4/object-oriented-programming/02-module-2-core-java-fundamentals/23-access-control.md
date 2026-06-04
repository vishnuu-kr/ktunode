---
title: "Access Control"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe68c"
status: "completed"
scrapedAt: "2026-05-23T17:51:34.238Z"
---
# OBJECT ORIENTED PROGRAMMING: Module 2: Core Java Fundamentals

## Topic: Access Control

### 1. Introduction to Access Control

Access control is a fundamental concept in Object-Oriented Programming (OOP) that dictates the visibility and accessibility of classes, members (fields and methods), and constructors to other parts of the program. It plays a crucial role in **encapsulation**, one of the core OOP principles, by allowing developers to hide implementation details and expose only the necessary interfaces. This leads to more robust, maintainable, and secure code.

**Key Concepts:**

*   **Encapsulation:** Bundling data (fields) and methods that operate on the data within a single unit (a class), and controlling access to that data.
*   **Information Hiding:** A direct consequence of encapsulation, where internal implementation details of a class are hidden from external access, preventing unintended modifications and promoting modularity.
*   **Visibility Modifiers:** Keywords used in Java to define the level of access granted to classes, members, and constructors.

**Reference (Schildt, 8/e, p. 212):** "Access control is a fundamental aspect of OOP. It enables you to hide the internal implementation of a class from the outside world."

### 2. Access Modifiers in Java

Java provides four access specifiers that control the visibility of classes, interfaces, variables, methods, and constructors. These specifiers determine from where these program elements can be accessed.

#### 2.1. `public`

*   **Visibility:** Accessible from anywhere. This is the broadest access level.
*   **Usage:**
    *   **Classes:** `public class MyClass { ... }` - The class can be accessed by any other class.
    *   **Members (fields, methods, constructors):** `public int myVariable; public void myMethod() { ... }` - These can be accessed by any other class, regardless of package.
*   **Purpose:** To expose functionality or data that is intended for general use by any part of the application.
*   **Example:**
    ```java
    // Package: com.example.utilities
    package com.example.utilities;

    public class Calculator {
        public int add(int a, int b) {
            return a + b;
        }
    }

    // Package: com.example.app
    package com.example.app;

    import com.example.utilities.Calculator;

    public class MainApp {
        public static void main(String[] args) {
            Calculator calc = new Calculator();
            int sum = calc.add(5, 10); // Accessible because add() is public
            System.out.println("Sum: " + sum);
        }
    }
    ```

#### 2.2. `protected`

*   **Visibility:** Accessible within its own package and by subclasses (even if they are in different packages).
*   **Usage:**
    *   **Members (fields, methods, constructors):** `protected int myProtectedVar; protected void myProtectedMethod() { ... }`
*   **Purpose:** To allow derived classes to access members of their superclasses, while still restricting access to other unrelated classes.
*   **Example:**
    ```java
    // Package: com.example.base
    package com.example.base;

    public class Vehicle {
        protected String model;

        protected Vehicle(String model) {
            this.model = model;
        }

        protected void displayModel() {
            System.out.println("Model: " + this.model);
        }
    }

    // Package: com.example.base
    package com.example.base;

    public class Car extends Vehicle {
        public Car(String model) {
            super(model);
        }

        public void showModel() {
            // Accessible because model and displayModel() are protected
            displayModel();
            System.out.println("Car's model is: " + this.model);
        }
    }

    // Package: com.example.another
    package com.example.another;

    import com.example.base.Vehicle;

    public class AnotherCar extends Vehicle {
        public AnotherCar(String model) {
            super(model);
        }

        public void showModelFromAnotherPackage() {
            // Accessible because model and displayModel() are protected
            displayModel();
            System.out.println("AnotherCar's model is: " + this.model);
        }
    }

    // Package: com.example.app
    package com.example.app;

    import com.example.base.Car;
    import com.example.base.Vehicle; // Import Vehicle to try accessing it

    public class MainApp {
        public static void main(String[] args) {
            Car myCar = new Car("Sedan");
            myCar.showModel();

            // Attempting to access protected members directly from MainApp
            // System.out.println(myCar.model); // Error: model has protected access in Vehicle
            // myCar.displayModel(); // Error: displayModel() has protected access in Vehicle
        }
    }
    ```

#### 2.3. `default` (No Explicit Modifier)

*   **Visibility:** Accessible only within its own package. This is also known as package-private.
*   **Usage:**
    *   **Classes:** `class MyClass { ... }` - The class can only be accessed by other classes within the same package.
    *   **Members (fields, methods, constructors):** `int myDefaultVar; void myDefaultMethod() { ... }` - These can only be accessed by other classes within the same package.
*   **Purpose:** To limit access to members of a class to other classes within the same package. This is often used for helper classes or methods that are not meant to be exposed outside their package.
*   **Example:**
    ```java
    // Package: com.example.data
    package com.example.data;

    class DataProcessor { // default access
        String data;

        DataProcessor(String data) { // default access constructor
            this.data = data;
        }

        void process() { // default access method
            System.out.println("Processing: " + this.data);
        }
    }

    // Package: com.example.data
    package com.example.data;

    public class DataManager {
        public static void main(String[] args) {
            DataProcessor processor = new DataProcessor("Sample Data"); // Accessible within the same package
            processor.process(); // Accessible within the same package
        }
    }

    // Package: com.example.app
    package com.example.app;

    // import com.example.data.DataProcessor; // Cannot import DataProcessor here as it's default and in a different package

    public class MainApp {
        public static void main(String[] args) {
            // DataProcessor processor = new DataProcessor("External Data"); // Error: DataProcessor is not public in com.example.data; cannot be accessed from outside package
        }
    }
    ```
    **Important:** A `public` class can have `default` members, but a `default` class cannot have `public` members.

#### 2.4. `private`

*   **Visibility:** Accessible only within the declaring class itself. This is the most restrictive access level.
*   **Usage:**
    *   **Members (fields, methods, constructors):** `private int myPrivateVar; private void myPrivateMethod() { ... }`
*   **Purpose:** To enforce strong encapsulation and hide internal implementation details that should not be directly accessed or modified from outside the class. This is a cornerstone of data hiding.
*   **Example:**
    ```java
    // Package: com.example.model
    package com.example.model;

    public class BankAccount {
        private double balance; // Private field to hide the balance

        public BankAccount(double initialBalance) {
            if (initialBalance >= 0) {
                this.balance = initialBalance;
            } else {
                this.balance = 0; // Default to 0 if negative
            }
        }

        // Public getter to provide controlled access to the balance
        public double getBalance() {
            return balance;
        }

        // Public method to modify the balance
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
                System.out.println("Deposited: " + amount + ", New Balance: " + balance);
            } else {
                System.out.println("Deposit amount must be positive.");
            }
        }

        // Public method to modify the balance
        public void withdraw(double amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                System.out.println("Withdrew: " + amount + ", New Balance: " + balance);
            } else if (amount <= 0) {
                System.out.println("Withdrawal amount must be positive.");
            } else {
                System.out.println("Insufficient funds.");
            }
        }

        // Private helper method (not accessible from outside)
        private void logTransaction(String type, double amount) {
            System.out.println("Transaction logged: " + type + " of " + amount);
        }
    }

    // Package: com.example.app
    package com.example.app;

    import com.example.model.BankAccount;

    public class MainApp {
        public static void main(String[] args) {
            BankAccount account = new BankAccount(1000.0);

            System.out.println("Current Balance: " + account.getBalance()); // OK to access via getter

            account.deposit(500.0);
            account.withdraw(200.0);
            account.withdraw(1500.0); // Insufficient funds

            // Attempting to access private members directly:
            // System.out.println(account.balance); // Error: balance has private access in BankAccount
            // account.logTransaction("check", 100); // Error: logTransaction() has private access in BankAccount
        }
    }
    ```

### 3. Access Control for Classes

*   **`public` classes:** Can be accessed from any other class in any package. A Java file can contain at most one `public` class, and its name must match the file name.
*   **`default` (package-private) classes:** Can be accessed only by other classes within the same package. A file can contain multiple `default` classes.

**Reference (Deitel & Deitel, 11th Ed., p. 221):** "The `public` and `default` access specifiers are used to control access to top-level classes. Top-level classes can be `public` or `default`."

### 4. Access Control Hierarchies

The access levels form a hierarchy from most restrictive to most permissive:

`private` < `default` < `protected` < `public`

**Important Point:** When you declare a member with a higher level of access (e.g., `public`), it can be accessed at all the levels where a lower level of access (`protected`, `default`, `private`) could be accessed, plus more.

### 5. Access Control for Members (Fields, Methods, Constructors)

The `private`, `default`, `protected`, and `public` modifiers apply to members of a class:

| Modifier    | Same Class | Same Package | Subclass (Different Package) | World (Any Package) |
| :---------- | :--------- | :----------- | :--------------------------- | :------------------ |
| `public`    | Yes        | Yes          | Yes                          | Yes                 |
| `protected` | Yes        | Yes          | Yes                          | No                  |
| `default`   | Yes        | Yes          | No                           | No                  |
| `private`   | Yes        | No           | No                           | No                  |

**Reference (Liang, 7/e, p. 261):** "The access level of a member is determined by the access modifier used for the member."

### 6. Best Practices for Access Control

*   **Use `private` whenever possible:** This is the principle of least privilege. Make fields `private` and provide `public` getter and setter methods only when necessary. This promotes encapsulation and prevents direct manipulation of internal state.
*   **Use `protected` for inheritance:** If you intend for a class to be extended and its members to be used by subclasses, use `protected`.
*   **Use `default` for package-specific helpers:** If a method or field is only relevant to other classes within the same package, use `default` access.
*   **Use `public` sparingly:** Expose only the methods and fields that form the public API of your class.
*   **Consider immutability:** For fields that should not be changed after initialization, make them `final` and `private`. Provide a `public` getter.
*   **Constructors:** Constructors can also have access modifiers. `private` constructors are used for implementing design patterns like Singleton. `public` constructors are standard for creating objects.

**Reference (Sierra & Bates, Head First Java, 2/e, p. 189):** "Make everything private unless you have a good reason to make it otherwise. This is the key to encapsulation."

**Connecting to Course Outcomes:**

*   **CO1 (Summarize OOP concepts):** Access control is directly related to data hiding and encapsulation, allowing for a deeper understanding of how classes manage their internal state.
*   **CO2 (Utilize datatypes, operators, control statements, OOP concepts):** This topic directly addresses the OOP concept of access control, enabling the development of well-structured and encapsulated programs.
*   **CO3 (Illustrate robust programs using packages, exception handling):** Access control is intrinsically linked with packages, as default access is package-specific. Understanding access control helps in designing modular and robust applications using packages.

### 7. Practice Questions and Exercises

**Question 1:**
Which access modifier provides the most restrictive access in Java?
a) `public`
b) `protected`
c) `default`
d) `private`

**Question 2:**
If a member variable is declared as `protected`, from where can it be accessed?
a) Only within the same class.
b) Within the same class and within the same package.
c) Within the same class, within the same package, and by subclasses in different packages.
d) From anywhere.

**Question 3:**
What is the access level of a class that is declared without any access modifier keyword (e.g., `class MyClass { ... }`)?
a) `public`
b) `protected`
c) `default` (package-private)
d) `private`

**Question 4:**
Consider the following code:

```java
// File: com/example/base/BaseClass.java
package com.example.base;

public class BaseClass {
    private int privateVar = 10;
    int defaultVar = 20;
    protected int protectedVar = 30;
    public int publicVar = 40;
}

// File: com/example/derived/DerivedClass.java
package com.example.derived;

import com.example.base.BaseClass;

public class DerivedClass extends BaseClass {
    public void accessVars() {
        // Which of the following lines will cause a compilation error?
        // System.out.println(privateVar); // Line A
        // System.out.println(defaultVar); // Line B
        System.out.println(protectedVar); // Line C
        System.out.println(publicVar);    // Line D
    }
}

// File: com/example/app/MainApp.java
package com.example.app;

import com.example.base.BaseClass; // Assuming BaseClass is accessible

public class MainApp {
    public static void main(String[] args) {
        BaseClass obj = new BaseClass();
        // Which of the following lines will cause a compilation error?
        // System.out.println(obj.privateVar); // Line E
        // System.out.println(obj.defaultVar); // Line F
        // System.out.println(obj.protectedVar); // Line G
        System.out.println(obj.publicVar);    // Line H
    }
}
```
Identify the lines that will cause a compilation error and explain why.

**Answers:**

**Answer 1:**
d) `private`

**Answer 2:**
c) Within the same class, within the same package, and by subclasses in different packages.

**Answer 3:**
c) `default` (package-private)

**Answer 4:**
*   **Line A:** `System.out.println(privateVar);` will cause a compilation error. `privateVar` is `private` to `BaseClass` and cannot be accessed directly by a subclass (`DerivedClass`) or any other class.
*   **Line B:** `System.out.println(defaultVar);` will cause a compilation error. `defaultVar` has default (package-private) access. `DerivedClass` is in a different package (`com.example.derived`) than `BaseClass` (`com.example.base`), so it cannot access `defaultVar`.
*   **Line E:** `System.out.println(obj.privateVar);` will cause a compilation error. `privateVar` is `private` to `BaseClass` and cannot be accessed from outside the `BaseClass` itself, even by an instance of `BaseClass` in `MainApp`.
*   **Line F:** `System.out.println(obj.defaultVar);` will cause a compilation error. `defaultVar` has default (package-private) access. `MainApp` is in a different package (`com.example.app`) than `BaseClass` (`com.example.base`), so it cannot access `defaultVar`.
*   **Line G:** `System.out.println(obj.protectedVar);` will cause a compilation error. `protectedVar` has protected access. `MainApp` is not a subclass of `BaseClass` and is in a different package, so it cannot access `protectedVar` directly through an instance of `BaseClass`.

**Lines C, D, and H are valid because:**
*   Line C: `protectedVar` is accessible to subclasses.
*   Line D: `publicVar` is accessible to subclasses.
*   Line H: `publicVar` is accessible from anywhere.

### 8. Summary of Access Control

| Modifier    | Class (Top-Level) | Class Members | Notes                                                                 |
| :---------- | :---------------- | :------------ | :-------------------------------------------------------------------- |
| `public`    | Yes               | Yes           | Accessible from everywhere.                                           |
| `protected` | No                | Yes           | Accessible within the same package and by subclasses (even in diff. pkg). |
| `default`   | Yes               | Yes           | Accessible only within the same package.                              |
| `private`   | No                | Yes           | Accessible only within the declaring class.                           |

**Key Takeaway:** Effective use of access modifiers is crucial for building well-encapsulated, maintainable, and secure Java applications. Always strive to restrict access to the minimum required level.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
