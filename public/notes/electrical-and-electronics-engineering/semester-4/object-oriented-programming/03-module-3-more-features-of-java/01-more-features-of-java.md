---
title: "More features of Java"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3600e"
status: "completed"
scrapedAt: "2026-05-23T16:17:34.316Z"
---
# Object-Oriented Programming: Module 3 - More Features of Java

This module delves into advanced features of Java, building upon the foundational object-oriented concepts. We will explore crucial mechanisms that enable robust, efficient, and well-structured Java applications.

---

## Module Overview and Learning Outcomes

This module aims to equip you with a deeper understanding of Java's capabilities beyond basic OOP principles. You will learn to write more sophisticated and reliable programs by mastering features that enhance code organization, error handling, and concurrent execution.

**Learning Outcomes:**

*   **LO1: Explain the concept of abstraction and its implementation in Java.**
*   **LO2: Describe the purpose and usage of interfaces and abstract classes.**
*   **LO3: Understand and apply the concept of packages for code organization.**
*   **LO4: Explain and implement exception handling mechanisms in Java.**
*   **LO5: Describe the basics of multithreading in Java and write simple multithreaded programs.**
*   **LO6: Discuss the importance of access control and demonstrate its use.**
*   **LO7: Understand the concept of final keyword and its applications.**

---

## 1. Abstraction and Its Implementation in Java

**Key Concept:** Abstraction is a fundamental principle of OOP that focuses on displaying only essential features of an object while hiding unnecessary details. In Java, abstraction is primarily achieved through **abstract classes** and **interfaces**.

**Why Abstraction?**

*   **Simplification:** Hides complex implementation details, making the code easier to understand and use.
*   **Modularity:** Allows for the separation of concerns, where different parts of the system can be developed independently.
*   **Maintainability:** Changes in implementation details don't affect the users of the abstract concept.

---

### 1.1 Abstract Classes

**Definition:** An abstract class is a class that is declared `abstract`. It can contain abstract methods (methods without an implementation) and concrete methods (methods with an implementation).

*   **`abstract` Keyword:** Used to declare a class as abstract and methods as abstract.
*   **Abstract Methods:** Methods declared with the `abstract` keyword and no body. They must be implemented by concrete subclasses.
*   **Concrete Methods:** Regular methods with a method body.
*   **Cannot Instantiate:** You cannot create an object of an abstract class directly.
*   **Inheritance:** Abstract classes are meant to be extended by other classes.

**Purpose:**

*   To provide a common blueprint for a set of related subclasses.
*   To enforce a contract that subclasses must adhere to by implementing abstract methods.

**Example (Referencing `Java: The Complete Reference` by Herbert Schildt):**

```java
// Abstract class Shape
abstract class Shape {
    String color;

    // Abstract method to calculate area
    abstract double calculateArea();

    // Concrete method
    void displayColor() {
        System.out.println("Color: " + color);
    }

    // Constructor for abstract class
    Shape(String color) {
        this.color = color;
    }
}

// Concrete subclass Circle
class Circle extends Shape {
    double radius;

    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    // Implementing the abstract method
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

// Concrete subclass Rectangle
class Rectangle extends Shape {
    double width;
    double height;

    Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    // Implementing the abstract method
    @Override
    double calculateArea() {
        return width * height;
    }
}

public class AbstractionExample {
    public static void main(String[] args) {
        // Cannot create an object of Shape directly:
        // Shape myShape = new Shape("Red"); // Error!

        Shape circle = new Circle("Red", 5.0);
        Shape rectangle = new Rectangle("Blue", 4.0, 6.0);

        circle.displayColor();
        System.out.println("Circle Area: " + circle.calculateArea());

        rectangle.displayColor();
        System.out.println("Rectangle Area: " + rectangle.calculateArea());
    }
}
```

**Key Takeaway:** Abstract classes can have both abstract and concrete methods, and can also have constructors and instance variables. They are used for "is-a" relationships where a subclass is a specialized version of the abstract class.

---

### 1.2 Interfaces

**Definition:** An interface is a reference type in Java that is similar to a class. It is a collection of abstract methods and constants. A class implements an interface, thereby inheriting its abstract methods.

*   **`interface` Keyword:** Used to declare an interface.
*   **All Methods Abstract (by default):** Methods declared in an interface are implicitly `public abstract`.
*   **Constants:** Variables declared in an interface are implicitly `public static final`.
*   **No Instance Variables:** Interfaces cannot have instance variables.
*   **No Constructors:** Interfaces cannot have constructors.
*   **Multiple Inheritance:** A class can implement multiple interfaces, allowing for a form of multiple inheritance.

**Purpose:**

*   To define a contract that classes must follow.
*   To achieve abstraction and enable polymorphism.
*   To decouple implementation from definition.

**Example (Referencing `Java How to Program` by Deitel & Deitel):**

```java
// Interface for printable items
interface Printable {
    void printDetails(); // Implicitly public abstract
}

// Interface for comparable items
interface ComparableItem {
    int compareTo(ComparableItem other); // Implicitly public abstract
}

// Class implementing multiple interfaces
class Book implements Printable, ComparableItem {
    String title;
    String author;
    int pages;

    Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    @Override
    public void printDetails() {
        System.out.println("Title: " + title + ", Author: " + author + ", Pages: " + pages);
    }

    @Override
    public int compareTo(ComparableItem other) {
        if (!(other instanceof Book)) {
            throw new IllegalArgumentException("Can only compare with another Book");
        }
        Book otherBook = (Book) other;
        return Integer.compare(this.pages, otherBook.pages); // Compare by number of pages
    }
}

public class InterfaceExample {
    public static void main(String[] args) {
        Book book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178);
        Book book2 = new Book("Pride and Prejudice", "Jane Austen", 432);

        book1.printDetails();
        book2.printDetails();

        int comparisonResult = book1.compareTo(book2);

        if (comparisonResult > 0) {
            System.out.println("Book 1 has more pages than Book 2.");
        } else if (comparisonResult < 0) {
            System.out.println("Book 1 has fewer pages than Book 2.");
        } else {
            System.out.println("Book 1 and Book 2 have the same number of pages.");
        }
    }
}
```

**Key Takeaway:** Interfaces define a contract of what a class *can do*. They are pure abstraction, focusing solely on method signatures and constants.

---

### 1.3 Abstract Class vs. Interface

| Feature               | Abstract Class                                         | Interface                                              |
| :-------------------- | :----------------------------------------------------- | :----------------------------------------------------- |
| **Methods**           | Can have abstract and concrete methods.                | All methods are implicitly `public abstract` (pre-Java 8). |
| **Variables**         | Can have instance variables, static variables, constants. | Only `public static final` constants.                  |
| **Constructors**      | Can have constructors.                                 | Cannot have constructors.                              |
| **Inheritance**       | Single inheritance (a class can extend only one abstract class). | Multiple inheritance (a class can implement multiple interfaces). |
| **Purpose**           | To provide a common base for related classes ("is-a" relationship). | To define a contract, specifying behavior ("can-do" relationship). |
| **Instantiation**     | Cannot be instantiated directly.                       | Cannot be instantiated directly.                       |
| **Access Modifiers**  | Methods can have `public`, `protected`, `default`, `private`. | All methods are implicitly `public`. Constants are `public static final`. |

**When to Use Which (Referencing `Head First Java` by Sierra):**

*   **Use an Abstract Class when:**
    *   You want to share code among several closely related classes.
    *   You expect that classes that extend your abstract class have many common methods or fields, or require access modifiers other than public.
    *   You want to declare non-static or non-final fields. This allows you to define methods that operate on an object’s state.
*   **Use an Interface when:**
    *   You expect that unrelated classes will implement your interface. For example, the `Runnable` and `Comparable` interfaces are implemented by many unrelated classes.
    *   You want to specify the behavior of a particular data type, but you are not concerned about who implements its behavior.
    *   You want to take advantage of multiple inheritance of type.

---

## 2. Packages for Code Organization

**Key Concept:** Packages are a mechanism for organizing Java classes into namespaces. They help prevent naming conflicts and promote modularity by grouping related classes, interfaces, enumerations, and annotations.

**Purpose:**

*   **Namespace Management:** Prevents naming conflicts between classes from different libraries or projects.
*   **Access Control:** Packages work with access modifiers (`public`, `protected`, `default`, `private`) to control the visibility of classes and members.
*   **Modularity:** Groups related functionalities together, making code easier to manage and reuse.
*   **Organization:** Provides a hierarchical structure for Java code.

**How Packages Work:**

1.  **Declaration:** The `package` statement must be the first non-comment statement in a Java source file.
    ```java
    package com.example.utilities;
    ```
2.  **Importing:** To use classes from another package, you need to import them using the `import` statement.
    ```java
    import com.example.math.Calculator; // Import a specific class
    import com.example.math.*;          // Import all classes from a package
    ```
3.  **Access Control:**
    *   `public`: Accessible from any other package.
    *   `protected`: Accessible within its own package and by subclasses in other packages.
    *   `default` (no keyword): Accessible only within its own package.
    *   `private`: Accessible only within its own class.

**Example (Referencing `Core Java: An Integrated Approach` by Nageswararao):**

Let's create two packages: `com.example.shapes` and `com.example.geometry`.

**File: `com/example/shapes/Circle.java`**

```java
package com.example.shapes;

public class Circle {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }

    public double getRadius() {
        return radius;
    }
}
```

**File: `com/example/geometry/GeometryUtils.java`**

```java
package com.example.geometry;

import com.example.shapes.Circle; // Importing Circle from another package

public class GeometryUtils {
    public static double calculateCircleArea(Circle circle) {
        // Accessing public method of Circle
        return circle.getArea();
    }

    public static void main(String[] args) {
        Circle myCircle = new Circle(7.5); // Creating an object of Circle
        System.out.println("Circle Radius: " + myCircle.getRadius()); // Accessing public method
        System.out.println("Circle Area (from GeometryUtils): " + calculateCircleArea(myCircle));
    }
}
```

**File: `MainApp.java` (in the default package or a different package)**

```java
// To run GeometryUtils.main, assuming this is compiled correctly.
// Alternatively, we can use the Circle class directly.

import com.example.shapes.Circle; // Import Circle
import com.example.geometry.GeometryUtils; // Import GeometryUtils

public class MainApp {
    public static void main(String[] args) {
        Circle c = new Circle(10.0);
        System.out.println("Circle Area: " + c.getArea());

        // Using a utility from another package
        double areaFromUtils = GeometryUtils.calculateCircleArea(c);
        System.out.println("Area calculated by GeometryUtils: " + areaFromUtils);
    }
}
```

**Important Points:**

*   **Classpath:** The Java compiler and runtime need to know where to find your packages. This is managed by the classpath.
*   **Naming Convention:** Package names are typically written in reverse domain name order (e.g., `com.example.myapp`).
*   **Access Modifiers and Packages:** Understanding how `public`, `protected`, and `default` access modifiers interact with packages is crucial for controlling data access.

---

## 3. Exception Handling Mechanism in Java

**Key Concept:** Exception handling is a robust mechanism in Java to deal with runtime errors or exceptional conditions that disrupt the normal flow of program execution. It allows programs to gracefully handle errors, preventing crashes and providing a way to recover or report the issue.

**Purpose:**

*   **Error Detection and Handling:** Identifies and manages errors that occur during program execution.
*   **Program Stability:** Prevents abnormal program termination by providing a structured way to handle errors.
*   **Code Clarity:** Separates error-handling code from normal program logic.

**Key Keywords:**

*   `try`: Encloses the code that might throw an exception.
*   `catch`: Catches a specific type of exception and handles it.
*   `finally`: Contains code that will always be executed, regardless of whether an exception occurred or not.
*   `throw`: Used to explicitly throw an exception.
*   `throws`: Used in method signatures to declare that a method might throw certain exceptions.

**Exception Hierarchy:**

*   `Throwable`: The superclass of all exceptions and errors.
*   `Error`: Represents serious problems that are usually unrecoverable (e.g., `OutOfMemoryError`). These are typically not caught.
*   `Exception`: Represents conditions that a Java application might want to catch.
    *   **Checked Exceptions:** Exceptions that the compiler forces you to handle (e.g., `IOException`, `FileNotFoundException`). They typically occur due to external factors.
    *   **Unchecked Exceptions (Runtime Exceptions):** Exceptions that don't need explicit handling, but are good practice to consider (e.g., `ArithmeticException`, `NullPointerException`, `ArrayIndexOutOfBoundsException`). They usually arise from programming errors.

**Example (Referencing `Java: The Complete Reference` by Herbert Schildt):**

```java
class DivisionExample {
    public static double divide(int numerator, int denominator) throws ArithmeticException {
        if (denominator == 0) {
            // Explicitly throw an exception
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        return (double) numerator / denominator;
    }

    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 0;

        try {
            // Code that might cause an exception
            double result = divide(num1, num2);
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            // Handling the exception
            System.err.println("Error: " + e.getMessage());
            // e.printStackTrace(); // For more detailed error information
        } finally {
            // This block always executes
            System.out.println("This is the finally block.");
        }

        System.out.println("Program continues after exception handling.");
    }
}
```

**Explanation of the Example:**

1.  The `divide` method is declared with `throws ArithmeticException` to indicate it might throw this checked exception.
2.  Inside the `try` block, we call `divide`. If `denominator` is 0, the `throw new ArithmeticException(...)` statement is executed.
3.  The `catch (ArithmeticException e)` block catches the thrown exception. The error message is printed to the standard error stream.
4.  The `finally` block executes regardless of whether an exception occurred or was caught.
5.  The program continues execution after the `try-catch-finally` block.

**Types of Exceptions and Handling:**

*   **Single `catch` block:** Catches a specific exception type.
*   **Multiple `catch` blocks:** Allows handling different types of exceptions. The order of `catch` blocks matters – more specific exceptions should come before more general ones.
    ```java
    try {
        // ... code ...
    } catch (FileNotFoundException e) {
        // Handle file not found
    } catch (IOException e) {
        // Handle other IO errors
    } catch (Exception e) {
        // Handle any other general exceptions
    }
    ```
*   **`finally` Block:** Essential for releasing resources like file streams or network connections, as it guarantees execution.
*   **`try-with-resources` (Java 7+):** A more concise way to handle resources that implement `AutoCloseable`.

    ```java
    try (Scanner scanner = new Scanner(System.in)) {
        // Use the scanner here
        int value = scanner.nextInt();
        System.out.println("You entered: " + value);
    } // Scanner is automatically closed here
    ```

---

## 4. Multithreaded Programming in Java

**Key Concept:** Multithreading allows a program to perform multiple tasks concurrently. A thread is a lightweight process, and a Java application can have multiple threads running simultaneously, improving performance and responsiveness.

**Purpose:**

*   **Concurrency:** Enables simultaneous execution of tasks.
*   **Responsiveness:** Keeps applications responsive, especially in GUI applications where one thread can handle UI updates while another performs background tasks.
*   **Resource Utilization:** Better utilization of CPU resources.

**Ways to Create Threads:**

1.  **Extending the `Thread` Class:**
    *   Create a class that extends `java.lang.Thread`.
    *   Override the `run()` method, which contains the code to be executed by the thread.
    *   Create an instance of the thread class and call its `start()` method.

2.  **Implementing the `Runnable` Interface:**
    *   Create a class that implements `java.lang.Runnable`.
    *   Implement the `run()` method.
    *   Create an instance of the class.
    *   Create a `Thread` object, passing the `Runnable` instance to its constructor.
    *   Call the `start()` method on the `Thread` object.

**`Thread` Class vs. `Runnable` Interface:**

*   **Extending `Thread`:** Less flexible because Java does not support multiple inheritance of classes. If your class already extends another class, you cannot extend `Thread`.
*   **Implementing `Runnable`:** Generally preferred because it separates the task (the `Runnable`) from the thread execution mechanism. Your class can still extend another class.

**Example (Referencing `Java How to Program` by Deitel & Deitel):**

**Method 1: Extending `Thread`**

```java
class MyThread extends Thread {
    private String threadName;

    MyThread(String name) {
        threadName = name;
        System.out.println("Creating " + threadName);
    }

    @Override
    public void run() {
        System.out.println("Running " + threadName);
        try {
            for (int i = 4; i > 0; i--) {
                System.out.println("Thread: " + threadName + ", Count: " + i);
                // Pause the thread for a short duration
                Thread.sleep(50);
            }
        } catch (InterruptedException e) {
            System.out.println("Thread " + threadName + " interrupted.");
        }
        System.out.println("Thread " + threadName + " exiting.");
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");

        MyThread thread1 = new MyThread("Thread-1");
        thread1.start(); // Starts the execution of run() method

        MyThread thread2 = new MyThread("Thread-2");
        thread2.start(); // Starts the execution of run() method

        System.out.println("Main thread finished.");
    }
}
```

**Method 2: Implementing `Runnable`**

```java
class MyRunnable implements Runnable {
    private String threadName;
    private Thread thread; // Reference to the thread object

    MyRunnable(String name) {
        threadName = name;
        System.out.println("Creating " + threadName);
    }

    @Override
    public void run() {
        System.out.println("Running " + threadName);
        try {
            for (int i = 4; i > 0; i--) {
                System.out.println("Thread: " + threadName + ", Count: " + i);
                Thread.sleep(50);
            }
        } catch (InterruptedException e) {
            System.out.println("Thread " + threadName + " interrupted.");
        }
        System.out.println("Thread " + threadName + " exiting.");
    }

    public void start() {
        System.out.println("Starting " + threadName);
        if (thread == null) {
            thread = new Thread(this, threadName); // Pass 'this' (the Runnable) to the Thread constructor
            thread.start();
        }
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");

        MyRunnable runnable1 = new MyRunnable("Runnable-1");
        runnable1.start(); // Calls the start method defined in MyRunnable

        MyRunnable runnable2 = new MyRunnable("Runnable-2");
        runnable2.start(); // Calls the start method defined in MyRunnable

        System.out.println("Main thread finished.");
    }
}
```

**Important Thread Concepts:**

*   **`start()`:** Initiates the thread's activity by calling its `run()` method.
*   **`run()`:** Contains the code that the thread will execute.
*   **`sleep(long millis)`:** Pauses the current thread for a specified time.
*   **`join()`:** Waits for a thread to die.
*   **Synchronization:** Mechanisms like `synchronized` keyword and locks are used to prevent data corruption when multiple threads access shared resources. (More on this in later modules or advanced topics).

---

## 5. Access Control and the `final` Keyword

### 5.1 Access Control

**Key Concept:** Access control (or encapsulation) in Java restricts the visibility of classes, methods, and variables. It is implemented using access modifiers.

**Access Modifiers:**

*   **`public`:** Members are accessible from any other class in any package.
*   **`protected`:** Members are accessible within their own package and by subclasses in other packages.
*   **`default` (no keyword):** Members are accessible only within their own package.
*   **`private`:** Members are accessible only within their own class.

**Purpose:**

*   **Encapsulation:** Hides internal implementation details, protecting data from unauthorized access or modification.
*   **Control:** Allows developers to control which parts of their code are accessible to other parts of the program or to external users.

**Example (Referencing `Java in A Nutshell` by Flanagan):**

```java
package com.example.access;

// Class in the same package
class DefaultAccessible {
    void showMessage() {
        System.out.println("This is a default accessible method.");
    }
}

// Class in the same package
class ProtectedAccessible {
    protected void showMessage() {
        System.out.println("This is a protected accessible method.");
    }
}

// Class in the same package
public class AccessControlDemo {
    public static void main(String[] args) {
        DefaultAccessible da = new DefaultAccessible();
        da.showMessage(); // Accessible within the same package

        ProtectedAccessible pa = new ProtectedAccessible();
        pa.showMessage(); // Accessible within the same package
    }
}
```

**Example in a Different Package:**

Assume the following classes are in `com.example.access.subpackage`:

```java
package com.example.access.subpackage;

import com.example.access.AccessControlDemo; // Importing from another package
import com.example.access.ProtectedAccessible; // Importing ProtectedAccessible

public class SubClassDemo extends ProtectedAccessible {
    public static void main(String[] args) {
        // Cannot access DefaultAccessible from a different package directly
        // DefaultAccessible da = new DefaultAccessible(); // Error!

        // Can access ProtectedAccessible from a different package if it's public
        // The method showMessage() in ProtectedAccessible is protected.
        // We need to create an instance and call it.
        ProtectedAccessible pa = new ProtectedAccessible();
        pa.showMessage(); // Accessible because ProtectedAccessible is public and method is protected

        // Also accessible through inheritance from subclass
        SubClassDemo scd = new SubClassDemo();
        scd.showMessage(); // Accessible via inheritance
    }
}
```

**Key Points:**

*   **Class Access:** A top-level class can be either `public` or `default`. Inner classes can have any access modifier.
*   **Method/Variable Access:** Can be `public`, `protected`, `default`, or `private`.

### 5.2 The `final` Keyword

**Key Concept:** The `final` keyword is a modifier that can be applied to variables, methods, and classes to indicate that they cannot be changed.

**Uses of `final`:**

1.  **`final` Variables:**
    *   **Constants:** Once a `final` variable is assigned a value, it cannot be reassigned.
    *   **Initialization:** Can be initialized at declaration, in a constructor, or in an instance initializer block.
    *   **`static final`:** Represents a true constant (e.g., `Math.PI`).

2.  **`final` Methods:**
    *   **Prevent Overriding:** A `final` method cannot be overridden by subclasses. This is useful for ensuring that a specific implementation of a method is used.

3.  **`final` Classes:**
    *   **Prevent Inheritance:** A `final` class cannot be extended by any other class. This is used for security or to prevent modification of a class's behavior.

**Example (Referencing `Fundamentals of Software Engineering` by Rajib Mall):**

```java
// Final class: cannot be inherited
final class ImmutableData {
    private final int value; // Final instance variable

    // Constructor for final variable initialization
    ImmutableData(int value) {
        this.value = value;
    }

    // Final method: cannot be overridden
    public final int getValue() {
        return value;
    }

    // Method to demonstrate immutability (attempts to change are not allowed)
    // If we tried to add a setter here, it would cause a compile-time error.
}

// Trying to extend a final class will cause a compile error:
// class AnotherClass extends ImmutableData { ... }

public class FinalKeywordDemo {
    public static void main(String[] args) {
        // Final variable: cannot be reassigned
        final int MAX_COUNT = 100;
        // MAX_COUNT = 101; // Error! Cannot reassign a final variable.

        ImmutableData data = new ImmutableData(42);
        System.out.println("Immutable Data Value: " + data.getValue());

        // data.value = 50; // Error! Cannot modify final instance variable from outside.
    }
}
```

**Important Points:**

*   **Primitive Types and `final`:** When `final` is applied to primitive types, it means the value cannot be changed.
*   **Object References and `final`:** When `final` is applied to an object reference, it means the reference cannot be changed to point to another object. However, the internal state of the object itself *can* be modified if the object's fields are not `final`.

---

## Summary and Key Takeaways

*   **Abstraction:** Essential for simplifying complex systems and managing dependencies. Use `abstract classes` for "is-a" relationships with shared code and `interfaces` for defining contracts and enabling multiple inheritance.
*   **Packages:** Crucial for organizing Java code, preventing naming conflicts, and managing access control.
*   **Exception Handling:** Provides a robust way to manage runtime errors, preventing program crashes and improving reliability. Use `try-catch-finally` to handle exceptions gracefully.
*   **Multithreading:** Enables concurrent execution of tasks, improving performance and responsiveness. Implement threads by extending `Thread` or implementing `Runnable`.
*   **Access Modifiers:** Control visibility and enforce encapsulation.
*   **`final` Keyword:** Used to create constants, prevent method overriding, and disallow class inheritance.

---

## Practice Questions

1.  **Distinguish between an abstract class and an interface in Java. Provide a scenario where you would prefer using an interface over an abstract class.**
2.  **What is the purpose of the `package` keyword in Java? How do you import classes from another package?**
3.  **Explain the difference between checked and unchecked exceptions in Java. Give examples of each.**
4.  **Describe the two primary ways to create a thread in Java. Which method is generally preferred and why?**
5.  **What is the role of the `finally` block in exception handling?**
6.  **How does the `final` keyword affect variables, methods, and classes?**
7.  **Write a Java program that demonstrates the use of `try-with-resources` for handling a file resource.**
8.  **Create a scenario with two packages. In one package, define a `public` class with `public`, `protected`, and `default` members. In the second package, create a class that attempts to access these members and explain the outcome.**

---

## Practice Questions with Answers

**1. Distinguish between an abstract class and an interface in Java. Provide a scenario where you would prefer using an interface over an abstract class.**

*   **Abstract Class:**
    *   Can have abstract and concrete methods.
    *   Can have instance variables, constructors, and static members.
    *   Supports single inheritance.
    *   Used to define a common base for closely related classes.
*   **Interface:**
    *   All methods are implicitly `public abstract` (pre-Java 8, can have default/static methods in later versions).
    *   Can only have `public static final` constants.
    *   Supports multiple inheritance.
    *   Used to define a contract for behavior, applicable to unrelated classes.

*   **Scenario for Interface:** Imagine you are building a software system where different types of devices (e.g., `SmartTV`, `SmartPhone`, `SmartRefrigerator`) need to be able to be controlled remotely. You can define an `Controllable` interface with a `remoteControl()` method. Many unrelated classes can then implement this interface, allowing them to be controlled remotely, without sharing any common "is-a" relationship beyond their ability to be controlled.

**2. What is the purpose of the `package` keyword in Java? How do you import classes from another package?**

*   **Purpose of `package`:** The `package` keyword organizes Java classes into namespaces, preventing naming conflicts and managing access control. It creates a hierarchical structure for code.
*   **Importing:** You use the `import` statement.
    *   To import a specific class: `import com.example.mylib.MyClass;`
    *   To import all classes from a package: `import com.example.mylib.*;`

**3. Explain the difference between checked and unchecked exceptions in Java. Give examples of each.**

*   **Checked Exceptions:**
    *   Must be declared in a method's `throws` clause or handled in a `try-catch` block.
    *   Occur due to external factors the program cannot control.
    *   **Examples:** `IOException`, `FileNotFoundException`, `ClassNotFoundException`.
*   **Unchecked Exceptions (Runtime Exceptions):**
    *   Do not need to be explicitly declared or caught, but it's good practice to handle them.
    *   Typically arise from programming errors.
    *   **Examples:** `NullPointerException`, `ArithmeticException`, `ArrayIndexOutOfBoundsException`, `IllegalArgumentException`.

**4. Describe the two primary ways to create a thread in Java. Which method is generally preferred and why?**

*   **Methods:**
    1.  **Extending `Thread` class:** Create a class that `extends Thread` and override the `run()` method.
    2.  **Implementing `Runnable` interface:** Create a class that `implements Runnable` and implement the `run()` method. Then, create a `Thread` object, passing the `Runnable` instance to its constructor.
*   **Preferred Method:** Implementing the `Runnable` interface is generally preferred because it promotes better code design. It separates the task logic (`Runnable`) from the thread execution mechanism (`Thread`). This allows your class to extend another class if necessary, avoiding the limitations of single inheritance.

**5. What is the role of the `finally` block in exception handling?**

*   The `finally` block contains code that **always executes**, regardless of whether an exception was thrown, caught, or not caught. It is typically used for cleanup operations, such as closing files, releasing network connections, or freeing system resources, ensuring that these actions are performed even if errors occur.

**6. How does the `final` keyword affect variables, methods, and classes?**

*   **Variables:** Once assigned a value, a `final` variable's reference cannot be changed (for objects) or its value cannot be changed (for primitives). It effectively becomes a constant.
*   **Methods:** A `final` method cannot be overridden by subclasses. This enforces a specific implementation and prevents changes to that behavior.
*   **Classes:** A `final` class cannot be extended by any subclass. This prevents inheritance and ensures that the class's behavior cannot be modified through extension.

**7. Write a Java program that demonstrates the use of `try-with-resources` for handling a file resource.**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesDemo {
    public static void main(String[] args) {
        String fileName = "sample.txt"; // Assuming sample.txt exists

        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            System.out.println("Reading from " + fileName + ":");
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
        // The BufferedReader 'br' is automatically closed here, even if an exception occurs.
        System.out.println("File processing finished.");
    }
}
```

**8. Create a scenario with two packages. In one package, define a `public` class with `public`, `protected`, and `default` members. In the second package, create a class that attempts to access these members and explain the outcome.**

**Package 1: `com.example.packaging.source`**

```java
// File: com/example/packaging/source/ExampleClass.java
package com.example.packaging.source;

public class ExampleClass {
    // Public member: Accessible everywhere
    public String publicVar = "I am public";

    // Protected member: Accessible within its package and by subclasses in other packages
    protected String protectedVar = "I am protected";

    // Default member: Accessible only within its package
    String defaultVar = "I am default";

    // Private member: Accessible only within this class
    private String privateVar = "I am private";

    public void displayAll() {
        System.out.println("--- Inside ExampleClass ---");
        System.out.println("Public: " + publicVar);
        System.out.println("Protected: " + protectedVar);
        System.out.println("Default: " + defaultVar);
        System.out.println("Private: " + privateVar); // Accessible within the class
    }
}
```

**Package 2: `com.example.packaging.target`**

```java
// File: com/example/packaging/target/AccessDemo.java
package com.example.packaging.target;

// Import the class from the other package
import com.example.packaging.source.ExampleClass;

public class AccessDemo extends ExampleClass { // Extends to test protected access

    public void accessMembers() {
        System.out.println("\n--- Accessing from AccessDemo (Package 2) ---");

        // Accessing public member: Allowed
        System.out.println("Accessing publicVar: " + publicVar);

        // Accessing protected member: Allowed via inheritance
        System.out.println("Accessing protectedVar: " + protectedVar);

        // Accessing default member: NOT ALLOWED from a different package
        // System.out.println("Accessing defaultVar: " + defaultVar); // Compile-time error!

        // Accessing private member: NOT ALLOWED from outside the class
        // System.out.println("Accessing privateVar: " + privateVar); // Compile-time error!

        // To access defaultVar directly, we would need to create an instance:
        ExampleClass instance = new ExampleClass();
        // instance.defaultVar; // Still not allowed from different package.
        // instance.protectedVar; // Allowed if ExampleClass is public.
    }

    public static void main(String[] args) {
        AccessDemo demo = new AccessDemo();
        demo.accessMembers();

        // Demonstrating direct access to public member of ExampleClass from another package
        ExampleClass externalInstance = new ExampleClass();
        System.out.println("Directly accessing publicVar from externalInstance: " + externalInstance.publicVar);

        // Trying to access default member from an instance of ExampleClass in a different package:
        // externalInstance.defaultVar; // Compile-time error!
    }
}
```

*   **Outcome Explanation:**
    *   `publicVar` is accessible from `AccessDemo` because it's `public`.
    *   `protectedVar` is accessible from `AccessDemo` because `AccessDemo` extends `ExampleClass`, and `protected` members are accessible by subclasses in other packages.
    *   `defaultVar` is *not* accessible from `AccessDemo`. Even though it's in the same package hierarchy (conceptually), `default` access is strictly limited to members within the *same* package.
    *   `privateVar` is *not* accessible from `AccessDemo` because `private` members are only accessible within their own class (`ExampleClass`).
