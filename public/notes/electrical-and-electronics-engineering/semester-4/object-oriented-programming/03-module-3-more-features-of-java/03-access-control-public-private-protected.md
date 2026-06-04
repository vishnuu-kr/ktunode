---
title: "Access Control -public, private, protected."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36010"
status: "completed"
scrapedAt: "2026-05-23T16:17:35.993Z"
---
# Object Oriented Programming: Access Control (public, private, protected)

## Module 3: More Features of Java

### Topic: Access Control - public, private, protected

---

### Learning Outcomes:

*   Understand the purpose and importance of access control in Java.
*   Differentiate between `public`, `private`, and `protected` access modifiers.
*   Apply access modifiers appropriately to enhance encapsulation and data security.
*   Understand the default (package-private) access level.

---

### Introduction:

In Object-Oriented Programming (OOP), **encapsulation** is a fundamental principle that bundles data (attributes or fields) and methods (behavior) that operate on the data within a single unit, called a class. A crucial aspect of encapsulation is **data hiding**, which restricts direct access to an object's internal state from outside the object. Java provides **access modifiers** to control the visibility and accessibility of classes, variables, methods, and constructors. This control is vital for:

*   **Data Security:** Preventing unintended modification or corruption of an object's data.
*   **Modularity:** Allowing internal implementation details of a class to be changed without affecting other parts of the program.
*   **Maintainability:** Making code easier to understand, debug, and modify.

This module focuses on the three primary access modifiers in Java: `public`, `private`, and `protected`. We will also briefly touch upon the default (package-private) access level.

---

### Key Concepts and Definitions:

*   **Access Modifier:** Keywords in Java that specify the scope or visibility of a class member (variable, method, constructor) or a class itself.
*   **Encapsulation:** The bundling of data and methods that operate on the data within a single unit (class), and restricting direct access to some of the object's components.
*   **Data Hiding:** The principle of making an object's internal state inaccessible from outside the object. This is achieved using access modifiers, primarily `private`.
*   **Scope:** The region of a program where a declared identifier (like a variable or method) is valid and can be accessed.

---

### Access Modifiers in Java:

Java defines four levels of access:

1.  **public:** Accessible from anywhere.
2.  **protected:** Accessible within its own package and by subclasses (even if they are in different packages).
3.  **private:** Accessible only within its own class.
4.  **Default (Package-Private):** Accessible only within its own package (no explicit keyword is used).

Let's delve into each of these.

---

#### 1. `public`

*   **Description:** Members (variables, methods, constructors) and classes declared as `public` are accessible from any other class in any package. It provides the widest scope.
*   **Purpose:** Used for members that are intended to be part of the class's public interface, allowing external code to interact with the object's functionality.
*   **Syntax:**
    ```java
    public class MyPublicClass {
        public int publicVariable;

        public void publicMethod() {
            System.out.println("This is a public method.");
        }
    }
    ```
*   **Example:**
    Consider a `Car` class with a `startEngine()` method that should be callable by anyone who has a `Car` object.

    ```java
    // Car.java (in package com.example.vehicles)
    package com.example.vehicles;

    public class Car {
        public String model; // Public attribute

        public Car(String model) {
            this.model = model;
        }

        public void startEngine() { // Public method
            System.out.println(model + "'s engine started.");
        }
    }

    // Main.java (in a different package, e.g., com.example.main)
    package com.example.main;

    import com.example.vehicles.Car; // Importing the Car class

    public class Main {
        public static void main(String[] args) {
            Car myCar = new Car("Sedan");
            System.out.println("Car model: " + myCar.model); // Accessible
            myCar.startEngine(); // Accessible
        }
    }
    ```
*   **Reference (Schildt, 8th ed., p. 228):** "The `public` access specifier allows members of a class to be accessed by any other code, inside or outside their package."

---

#### 2. `private`

*   **Description:** Members declared as `private` are accessible **only** within the declaring class itself. They cannot be accessed by subclasses or any other class, even if they are in the same package. This is the strictest level of access.
*   **Purpose:** This is the cornerstone of data hiding. It protects the internal state of an object from direct external manipulation, ensuring data integrity and allowing the class designer to control how the data is accessed and modified (usually through public getter and setter methods).
*   **Syntax:**
    ```java
    public class MyPrivateClass {
        private int privateVariable; // Private attribute

        private void privateMethod() { // Private method
            System.out.println("This is a private method.");
        }

        public void accessPrivateMembers() {
            this.privateVariable = 10; // Accessible within the class
            this.privateMethod();      // Accessible within the class
            System.out.println("Private variable accessed from within: " + this.privateVariable);
        }
    }
    ```
*   **Example:**
    Consider a `BankAccount` class where the `balance` should not be directly changed from outside.

    ```java
    // BankAccount.java
    public class BankAccount {
        private double balance; // Private attribute

        public BankAccount(double initialBalance) {
            if (initialBalance >= 0) {
                this.balance = initialBalance;
            } else {
                this.balance = 0;
                System.out.println("Initial balance cannot be negative. Set to 0.");
            }
        }

        // Public getter method to access the balance
        public double getBalance() {
            return this.balance;
        }

        // Public method to deposit money
        public void deposit(double amount) {
            if (amount > 0) {
                this.balance += amount;
                System.out.println("Deposited: " + amount + ". New balance: " + this.balance);
            } else {
                System.out.println("Deposit amount must be positive.");
            }
        }

        // Public method to withdraw money
        public void withdraw(double amount) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                System.out.println("Withdrew: " + amount + ". New balance: " + this.balance);
            } else if (amount > this.balance) {
                System.out.println("Insufficient funds.");
            } else {
                System.out.println("Withdrawal amount must be positive.");
            }
        }

        // Private method (demonstration, not typically used for external interaction)
        private void logTransaction(String type) {
            System.out.println("Transaction logged: " + type);
        }

        public void performTransaction(String type, double amount) {
            if (type.equals("deposit")) {
                deposit(amount);
                logTransaction("Deposit");
            } else if (type.equals("withdraw")) {
                withdraw(amount);
                logTransaction("Withdrawal");
            }
        }
    }

    // Main.java
    public class Main {
        public static void main(String[] args) {
            BankAccount myAccount = new BankAccount(1000.0);

            System.out.println("Current balance: " + myAccount.getBalance()); // Accessible via getter

            myAccount.deposit(500);
            myAccount.withdraw(200);
            myAccount.performTransaction("deposit", 100);

            // The following lines would cause compilation errors:
            // System.out.println(myAccount.balance); // Error: balance has private access
            // myAccount.balance = 5000;            // Error: balance has private access
            // myAccount.logTransaction("Failed");  // Error: logTransaction has private access
        }
    }
    ```
*   **Reference (Deitel & Deitel, 11th ed., p. 178):** "Members declared `private` are accessible only within the class in which they are declared. This is the most restrictive access level."

---

#### 3. `protected`

*   **Description:** Members declared as `protected` are accessible:
    *   Within the same package.
    *   By subclasses (child classes) of the declaring class, regardless of the package they are in.
*   **Purpose:** This modifier is useful when you want to allow subclasses to access and potentially override members, but prevent other unrelated classes from doing so. It provides a middle ground between `public` and `private`.
*   **Syntax:**
    ```java
    package com.example.base;

    public class BaseClass {
        protected int protectedVariable;

        protected void protectedMethod() {
            System.out.println("This is a protected method.");
        }

        public void accessProtectedFromBase() {
            this.protectedVariable = 20; // Accessible within the class
            this.protectedMethod();      // Accessible within the class
            System.out.println("Protected variable accessed from within BaseClass: " + this.protectedVariable);
        }
    }
    ```
    ```java
    // DerivedClass.java (in a different package, e.g., com.example.derived)
    package com.example.derived;

    import com.example.base.BaseClass; // Importing from another package

    public class DerivedClass extends BaseClass {
        public void accessProtectedFromDerived() {
            // Accessing protected members from the superclass
            this.protectedVariable = 30; // Accessible because it's a subclass
            this.protectedMethod();      // Accessible because it's a subclass
            System.out.println("Protected variable accessed from DerivedClass: " + this.protectedVariable);
        }
    }

    // AnotherClassInSamePackage.java (in com.example.base)
    package com.example.base;

    public class AnotherClassInSamePackage {
        public void accessProtectedFromSamePackage() {
            BaseClass baseObj = new BaseClass();
            baseObj.protectedVariable = 40; // Accessible because it's in the same package
            baseObj.protectedMethod();      // Accessible because it's in the same package
            System.out.println("Protected variable accessed from AnotherClassInSamePackage: " + baseObj.protectedVariable);
        }
    }

    // AnotherClassInDifferentPackage.java (in a different package, e.g., com.example.other)
    package com.example.other;

    import com.example.base.BaseClass;

    public class AnotherClassInDifferentPackage {
        public void accessProtectedFromDifferentPackage() {
            BaseClass baseObj = new BaseClass();
            // The following lines would cause compilation errors:
            // System.out.println(baseObj.protectedVariable); // Error: protectedVariable has protected access in BaseClass
            // baseObj.protectedMethod();                     // Error: protectedMethod() has protected access in BaseClass
        }
    }
    ```
*   **Reference (Y. Daniel Liang, 7/e, p. 269):** "A protected member is accessible from any subclass and from any class in the same package."
*   **Reference (Balagurusamy, 5/e, p. 175):** "`protected` members are accessible within their package and by subclasses in any package."

---

#### 4. Default (Package-Private)

*   **Description:** When no explicit access modifier is used for a class member (variable, method, constructor) or a class, it defaults to `package-private` (or package access).
*   **Scope:** Accessible only within the same package. It is not accessible by subclasses in different packages or by any class outside its package.
*   **Purpose:** Useful for members that are meant to be used only by other classes within the same package, promoting encapsulation at the package level.
*   **Syntax:** (No keyword)
    ```java
    package com.example.utils;

    class DefaultClass { // Default access for the class
        int defaultVariable; // Default access for the variable

        void defaultMethod() { // Default access for the method
            System.out.println("This is a default method.");
        }
    }
    ```
*   **Example:**

    ```java
    // Package: com.example.utils
    package com.example.utils;

    class UtilityHelper { // Class with default access
        String helperData; // Variable with default access

        void performOperation() { // Method with default access
            System.out.println("Performing operation with data: " + helperData);
        }
    }

    // Package: com.example.utils (same package)
    package com.example.utils;

    public class MainInSamePackage {
        public static void main(String[] args) {
            UtilityHelper helper = new UtilityHelper();
            helper.helperData = "Sample Data"; // Accessible
            helper.performOperation();       // Accessible
        }
    }

    // Package: com.example.app (different package)
    package com.example.app;

    // import com.example.utils.UtilityHelper; // Cannot import default class directly

    public class MainInDifferentPackage {
        public static void main(String[] args) {
            // The following lines would cause compilation errors:
            // UtilityHelper helper = new UtilityHelper(); // Error: UtilityHelper is not public in com.example.utils; cannot be accessed from outside package
            // System.out.println(helper.helperData);      // Error: helperData has private access in UtilityHelper (if it were private) OR cannot be accessed outside package if default
            // helper.performOperation();                 // Error: performOperation() has private access in UtilityHelper OR cannot be accessed outside package if default
        }
    }
    ```
*   **Reference (Sierra, 2/e, p. 201):** "If you don't specify an access modifier, it's package-private. That means that the member is accessible only to classes within the same package."

---

### Summary of Access Levels:

| Modifier      | Within Class | Within Subclass (Same Package) | Within Subclass (Different Package) | Within Different Package (Same Package) | Within Different Package (Different Package) |
| :------------ | :----------- | :----------------------------- | :---------------------------------- | :-------------------------------------- | :------------------------------------------- |
| `public`      | Yes          | Yes                            | Yes                                 | Yes                                     | Yes                                          |
| `protected`   | Yes          | Yes                            | Yes                                 | Yes                                     | No                                           |
| `default`     | Yes          | Yes                            | No                                  | Yes                                     | No                                           |
| `private`     | Yes          | No                             | No                                  | No                                      | No                                           |

**Note:** The "Within Subclass (Different Package)" column for `protected` is True because the access is through an instance of the subclass, and the member is accessible to the subclass itself. Direct access to `protected` members of a superclass instance from unrelated classes in different packages is not allowed.

---

### Best Practices for Access Control:

1.  **Use `private` whenever possible:** This is the most important principle of encapsulation. Make fields `private` and provide `public` getter and setter methods if external access is needed.
2.  **Use `protected` sparingly:** Only use `protected` when you intend for subclasses to have direct access to members, often for extending functionality.
3.  **Use `public` for the interface:** Expose only the necessary functionality to the outside world through `public` methods.
4.  **Use `default` for package-internal helpers:** If a class or member is only intended for use by other classes within the same package, use `default` access.
5.  **Classes can be `public` or `default`:** A `.java` file can contain at most one `public` class, which must match the filename. Other classes within the file can have `default` access.

---

### Relation to Course Outcomes:

*   **CO1: Write Java programs using the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (Knowledge Level: K2)**
    *   This topic directly addresses **data hiding** and its implementation through access modifiers. Understanding `private` is crucial for implementing encapsulation. `protected` is relevant to **inheritance**.
*   **CO2: Utilise datatypes, operators, control statements, object-oriented class, concepts, I/O basics in Java to develop programs. (Knowledge Level: K3)**
    *   Applying access modifiers correctly is a core OOP concept that influences how classes interact, impacting program structure and maintainability.
*   **CO3: Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Multithreaded programming. (Knowledge Level: K3)**
    *   Access control, especially `default` and `protected` modifiers in conjunction with packages, is key to building robust and well-organized code within larger projects.

---

### Practice Questions:

1.  What is the primary purpose of using `private` access modifier in Java?
    a) To allow access from anywhere.
    b) To restrict access to only the subclass.
    c) To restrict access to only the declaring class.
    d) To allow access within the same package.

2.  A member declared as `protected` can be accessed by:
    a) Any class in any package.
    b) Only classes within the same package.
    c) Subclasses in any package and classes within the same package.
    d) Only within the declaring class.

3.  If no access modifier is specified for a method, what is its default access level?
    a) `public`
    b) `private`
    c) `protected`
    d) `default` (package-private)

4.  Consider the following code snippet:

    ```java
    package com.example.a;

    public class ClassA {
        protected int x = 10;
    }
    ```

    ```java
    package com.example.b;

    import com.example.a.ClassA;

    public class ClassB extends ClassA {
        public void display() {
            System.out.println(x); // Will this compile?
        }
    }
    ```
    Will `ClassB` be able to access `x` from `ClassA`? Explain why or why not.

5.  Explain the difference between `protected` and `default` access modifiers in Java, especially concerning subclass access from different packages.

---

### Answers to Practice Questions:

1.  **Answer:** c) To restrict access to only the declaring class.
    *   **Explanation:** `private` is the most restrictive modifier, limiting access strictly to the class where the member is declared.

2.  **Answer:** c) Subclasses in any package and classes within the same package.
    *   **Explanation:** `protected` members are accessible to subclasses (even in different packages) and any other class within the same package.

3.  **Answer:** d) `default` (package-private)
    *   **Explanation:** When no explicit modifier is used, the member has package-private access, meaning it's accessible only within its package.

4.  **Answer:** Yes, this will compile.
    *   **Explanation:** `x` is declared as `protected` in `ClassA`. `ClassB` is a subclass of `ClassA` and is in a different package. `protected` members are accessible by subclasses even if they are in a different package.

5.  **Answer:**
    *   **Default (package-private):** Accessible only within the same package. It is **not** accessible by subclasses in different packages.
    *   **Protected:** Accessible within the same package AND by subclasses in different packages.
    *   **Key Difference for Subclasses in Different Packages:** A subclass in a different package can access `protected` members of its superclass, but it cannot access `default` members of its superclass.

---

### Important Points to Remember:

*   **Encapsulation is key:** Use access modifiers to enforce encapsulation and data hiding.
*   **`private` is your default for fields:** Make variables `private` and use `public` getters/setters.
*   **`public` for the API:** Methods that form the class's interface should be `public`.
*   **`protected` for inheritance:** Use `protected` when you want subclasses to have direct access.
*   **`default` for package boundaries:** Use `default` for members that are only meant for use within the same package.
*   **Class access:** Classes can only be `public` or `default`. A `public` class must be in its own file matching its name.

---

This comprehensive set of notes covers the core concepts of `public`, `private`, and `protected` access control in Java, aligning with the provided learning outcomes and course objectives. The examples and explanations are drawn from common Java programming practices and are supported by references to authoritative Java textbooks.
