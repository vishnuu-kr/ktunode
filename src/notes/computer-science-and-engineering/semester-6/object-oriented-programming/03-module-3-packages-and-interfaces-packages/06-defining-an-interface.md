---
title: "defining an interface"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces  – Packages "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfb3"
status: "completed"
scrapedAt: "2026-05-20T16:56:19.983Z"
---
# Object-Oriented Programming: Module 3 - Packages and Interfaces - Packages

## Topic: Defining an Interface

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the purpose and necessity of interfaces in OOP.
*   Define an interface in Java.
*   Declare abstract methods within an interface.
*   Declare constants (static final variables) within an interface.
*   Understand the concept of default and static methods in interfaces (Java 8+).
*   Understand how to implement an interface.
*   Distinguish between abstract classes and interfaces.

---

### 1. What is an Interface?

An interface is a **contract** that defines a set of methods that a class *must* implement. It specifies *what* a class can do, but not *how* it does it. Think of it as a blueprint or a template for behavior.

**Key Concepts:**

*   **Contract:** An interface dictates a set of methods that implementing classes must provide.
*   **Abstraction:** Interfaces provide a high level of abstraction by hiding the implementation details.
*   **Polymorphism:** Interfaces enable polymorphism, allowing objects of different classes that implement the same interface to be treated uniformly.
*   **Loose Coupling:** Interfaces promote loose coupling between classes, making code more flexible and maintainable.

**Why Use Interfaces?**

*   **Achieve Abstraction:** Define a common set of operations without specifying how they are performed.
*   **Multiple Inheritance of Type:** Java does not support multiple inheritance of classes, but interfaces allow a class to inherit multiple "types" of behavior.
*   **Define APIs (Application Programming Interfaces):** Interfaces define how different parts of a program (or different programs) can interact.
*   **Design for Extensibility:** Allows new implementations to be added without modifying existing code that uses the interface.
*   **Testing:** Interfaces make it easier to mock dependencies for unit testing.

---

### 2. Defining an Interface in Java

An interface is defined using the `interface` keyword. It can contain abstract methods, static final variables (constants), default methods, and static methods.

**Syntax:**

```java
[access_modifier] interface InterfaceName {
    // Declaration of abstract methods
    // Declaration of constants (static final variables)
    // Declaration of default methods (Java 8+)
    // Declaration of static methods (Java 8+)
}
```

**Example:**

Let's define an interface for a `Drawable` object.

```java
// File: Drawable.java
package com.example.graphics; // Example package

public interface Drawable {
    // Abstract method: must be implemented by implementing classes
    void draw();

    // Abstract method: requires parameters
    void resize(int factor);

    // Constant: automatically public, static, and final
    double PI = 3.14159;

    // Default method (Java 8+): provides a default implementation
    default void printInfo() {
        System.out.println("This is a drawable object.");
    }

    // Static method (Java 8+): belongs to the interface itself
    static void showDescription() {
        System.out.println("An interface for objects that can be drawn.");
    }
}
```

---

### 3. Declaring Abstract Methods

*   All methods declared in an interface are implicitly `public` and `abstract`, even if you don't explicitly use these keywords.
*   Abstract methods do not have a body (no implementation). They only declare the method signature.
*   Classes that implement an interface must provide an implementation for all its abstract methods.

**Example within an Interface:**

```java
public interface Flyable {
    void fly(); // Implicitly public abstract void fly();
    int getAltitude(); // Implicitly public abstract int getAltitude();
}
```

---

### 4. Declaring Constants (Static Final Variables)

*   Variables declared in an interface are implicitly `public`, `static`, and `final`, meaning they are constants.
*   They must be initialized when declared.

**Example within an Interface:**

```java
public interface Configurable {
    int MAX_CONNECTIONS = 10; // Implicitly public static final int MAX_CONNECTIONS = 10;
    String DEFAULT_HOST = "localhost"; // Implicitly public static final String DEFAULT_HOST = "localhost";
}
```

**Important Note:** You can access these constants directly using the interface name: `Configurable.MAX_CONNECTIONS`.

---

### 5. Default and Static Methods (Java 8+)

Introduced in Java 8, these methods allow interfaces to provide implementations.

#### a. Default Methods

*   **Purpose:** To add new methods to interfaces without breaking existing implementing classes.
*   **Syntax:** Marked with the `default` keyword.
*   **Implementation:** Can have a method body.
*   **Inheritance:** Implementing classes inherit the default implementation but can override it.

**Example:**

```java
public interface Shape {
    double getArea(); // Abstract method

    // Default method
    default String getColor() {
        return "No color specified";
    }
}
```

**Implementing a Default Method:**

```java
class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    // Optional: Override the default method
    @Override
    public String getColor() {
        return "Blue";
    }
}

class Square implements Shape {
    private double side;

    public Square(double side) {
        this.side = side;
    }

    @Override
    public double getArea() {
        return side * side;
    }
    // Here, Square will use the default getColor() implementation
}
```

#### b. Static Methods

*   **Purpose:** To provide utility methods related to the interface.
*   **Syntax:** Marked with the `static` keyword.
*   **Implementation:** Must have a method body.
*   **Invocation:** Called directly on the interface name, not on an instance of an implementing class.
*   **Cannot be overridden:** Static methods belong to the interface itself.

**Example:**

```java
public interface MathUtils {
    // Abstract method
    double calculate(double a, double b);

    // Static method
    static double add(double a, double b) {
        return a + b;
    }

    // Static method with logic
    static void displaySum(double a, double b) {
        System.out.println("Sum: " + (a + b));
    }
}
```

**Invoking Static Methods:**

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(MathUtils.add(5, 3)); // Output: 8
        MathUtils.displaySum(10, 20); // Output: Sum: 30
    }
}
```

---

### 6. Implementing an Interface

A class uses the `implements` keyword to indicate that it is providing the functionality for an interface.

**Syntax:**

```java
[access_modifier] class ClassName implements InterfaceName1, InterfaceName2, ... {
    // Implementation of abstract methods from interfaces
    // Can also include its own methods and fields
}
```

**Example:**

Let's implement the `Drawable` interface.

```java
// File: Circle.java
package com.example.graphics;

// Assuming Drawable interface is in com.example.graphics package

public class Circle implements Drawable {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    // Implementing the abstract method 'draw'
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius: " + radius);
    }

    // Implementing the abstract method 'resize'
    @Override
    public void resize(int factor) {
        this.radius *= (factor / 100.0); // Resize by a percentage
        System.out.println("Resized circle. New radius: " + radius);
    }

    // We can choose to override the default method
    @Override
    public void printInfo() {
        System.out.println("This is a Circle, a type of Drawable object.");
    }

    // We can also call static methods from the interface
    public void describe() {
        Drawable.showDescription();
    }

    public static void main(String[] args) {
        Circle myCircle = new Circle(5.0);
        myCircle.draw();       // Calls implemented draw()
        myCircle.resize(120);  // Calls implemented resize()
        myCircle.printInfo();  // Calls overridden printInfo()
        myCircle.describe();   // Calls static method from interface

        System.out.println("Value of PI from Drawable: " + Drawable.PI); // Accessing constant
    }
}
```

---

### 7. Abstract Classes vs. Interfaces

| Feature            | Abstract Class                                      | Interface                                           |
| :----------------- | :-------------------------------------------------- | :-------------------------------------------------- |
| **Keyword**        | `abstract class`                                    | `interface`                                         |
| **Methods**        | Can have abstract methods, concrete methods, static methods, final methods. | Can have abstract methods, default methods, static methods. (Pre-Java 8: only abstract methods and constants). |
| **Variables**      | Can have instance variables, static variables, final variables. | Can only have `public static final` variables (constants). |
| **Constructors**   | Can have constructors.                              | Cannot have constructors.                           |
| **Inheritance**    | A class can extend only **one** abstract class.     | A class can implement **multiple** interfaces.      |
| **Access Modifiers** | Methods and variables can have `public`, `protected`, `private`, default access. | All methods are implicitly `public` (abstract, default, static). All variables are implicitly `public static final`. |
| **Purpose**        | Represents an "is-a" relationship. Provides a base for related classes with shared implementation. | Represents a "can-do" or "has-a" capability. Defines a contract for behavior. |
| **State**          | Can maintain state (instance variables).            | Cannot maintain state (no instance variables).      |

**Key Difference:** An abstract class represents an *is-a* relationship (e.g., a `Dog` *is a* `Animal`). An interface represents a *can-do* capability (e.g., a `Bird` *can* `Fly`).

---

### Practice Questions/Exercises

1.  **Question:** What is the primary purpose of an interface in Java?
    **Answer:** To define a contract of methods that implementing classes must provide, enabling abstraction and polymorphism.

2.  **Question:** If you declare a variable inside an interface without any modifiers, what modifiers are implicitly applied?
    **Answer:** `public`, `static`, and `final`.

3.  **Question:** Can a class extend an abstract class and implement an interface simultaneously? If so, how?
    **Answer:** Yes. A class can `extend` only one abstract class and `implements` multiple interfaces.
    ```java
    class MyClass extends AbstractBaseClass implements Interface1, Interface2 {
        // ... implementation
    }
    ```

4.  **Question:** What is the difference between a default method and a static method in an interface?
    **Answer:**
    *   **Default methods:** Provide a default implementation that can be overridden by implementing classes. They are associated with instances of implementing classes.
    *   **Static methods:** Belong to the interface itself and cannot be overridden. They are called directly on the interface name.

5.  **Question:** Create an interface named `Logger` with an abstract method `logMessage(String message)` and a default method `logError(String error)`. Then, create a class `ConsoleLogger` that implements `Logger` and provides an implementation for `logMessage`.

    **Expected Output for `ConsoleLogger`:**
    *   `logMessage("Info: System started.")` should print "Logging: Info: System started."
    *   `logError("Error: File not found.")` should print "Error: File not found." (using the default implementation).

    **Solution:**

    ```java
    // Logger.java
    public interface Logger {
        void logMessage(String message); // Abstract method

        default void logError(String error) { // Default method
            System.out.println("Error: " + error);
        }
    }

    // ConsoleLogger.java
    public class ConsoleLogger implements Logger {
        @Override
        public void logMessage(String message) {
            System.out.println("Logging: " + message);
        }
    }

    // Main class to test
    public class MainLogger {
        public static void main(String[] args) {
            ConsoleLogger logger = new ConsoleLogger();
            logger.logMessage("Info: System started.");
            logger.logError("Error: File not found.");
        }
    }
    ```

---

### Important Points to Remember:

*   Interfaces define **what** a class can do, not **how**.
*   All methods in an interface are implicitly `public` and `abstract` (unless they are `default` or `static`).
*   All variables in an interface are implicitly `public`, `static`, and `final` (constants).
*   A class `implements` an interface.
*   A class must provide implementations for all abstract methods inherited from interfaces.
*   Interfaces are crucial for achieving abstraction, multiple inheritance of type, and loose coupling.
*   Default methods (Java 8+) allow adding new methods to interfaces without breaking existing implementations.
*   Static methods (Java 8+) are utility methods associated with the interface itself.
*   Interfaces cannot be instantiated directly.

---
