---
title: "implementing interfaces"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces  – Packages "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfb4"
status: "completed"
scrapedAt: "2026-05-20T16:56:20.706Z"
---
# Object-Oriented Programming: Module 3 - Packages and Interfaces

## Topic: Implementing Interfaces

This module delves into the crucial concepts of **Packages** and **Interfaces** in Object-Oriented Programming (OOP). While packages help organize code, interfaces define a contract that classes can adhere to. This specific topic focuses on how to **implement** these contracts, enabling flexible and extensible program design.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the purpose and benefits of using interfaces.
*   Declare an interface and its abstract methods.
*   Implement an interface in a class.
*   Understand the concept of multiple interface inheritance.
*   Differentiate between abstract classes and interfaces.
*   Recognize and utilize default and static methods in interfaces (in Java 8+).
*   Apply interfaces for achieving polymorphism and loose coupling.

---

### 1. What are Interfaces?

An **interface** is a blueprint of a class. It defines a **contract** that specifies what methods a class *must* implement. Interfaces do not provide the implementation themselves, only the method signatures (name, return type, and parameters).

**Key Concepts & Definitions:**

*   **Contract:** A set of rules that a class must follow if it "implements" the interface.
*   **Abstract Methods:** Methods declared in an interface without an implementation (no method body). All methods in an interface are implicitly abstract unless they are `default` or `static`.
*   **No Instance Variables (Typically):** Interfaces can contain constants (implicitly `public static final`), but not regular instance variables.
*   **Immutability:** Values declared as constants within an interface are immutable.

**Benefits of Using Interfaces:**

*   **Achieving Abstraction:** Hides the implementation details and exposes only essential functionality.
*   **Loose Coupling:** Reduces the dependency between classes. A class can depend on an interface rather than a concrete class, making it easier to swap implementations.
*   **Polymorphism:** Allows objects of different classes to be treated as objects of a common interface type.
*   **Multiple Inheritance of Type:** While Java doesn't support multiple inheritance of *classes*, it allows a class to implement multiple interfaces, inheriting their "types" or contracts.
*   **Code Reusability and Extensibility:** Facilitates creating frameworks and libraries that can be extended by other developers.

---

### 2. Declaring an Interface

An interface is declared using the `interface` keyword.

**Syntax:**

```java
public interface InterfaceName {
    // Constant declarations (implicitly public static final)
    // public static final int CONSTANT_VALUE = 10;

    // Abstract method declarations (implicitly public abstract)
    // returnType methodName(parameters);

    // Default methods (Java 8+)
    // default returnType methodName(parameters) { ... }

    // Static methods (Java 8+)
    // public static returnType methodName(parameters) { ... }
}
```

**Example: A Simple `Drawable` Interface**

```java
// Declare an interface named Drawable
public interface Drawable {

    // An abstract method declaration
    // This method must be implemented by any class that implements Drawable
    void draw();

    // Another abstract method
    String getColor();

    // A constant (implicitly public static final)
    int MAX_SIZE = 100;
}
```

---

### 3. Implementing an Interface

A class implements an interface using the `implements` keyword. The class must provide concrete implementations for all abstract methods declared in the interface.

**Syntax:**

```java
public class ClassName implements InterfaceName {
    // Implementation of abstract methods from the interface
    @Override
    public returnType methodName(parameters) {
        // Method implementation
    }

    // Other class members (variables, methods, constructors)
}
```

**Example: Implementing the `Drawable` Interface**

```java
// Circle class implements the Drawable interface
public class Circle implements Drawable {

    private String color;
    private int radius;

    public Circle(String color, int radius) {
        this.color = color;
        this.radius = radius;
    }

    // Implementation of the abstract method draw()
    @Override
    public void draw() {
        System.out.println("Drawing a Circle with color: " + this.color + " and radius: " + this.radius);
    }

    // Implementation of the abstract method getColor()
    @Override
    public String getColor() {
        return this.color;
    }

    // We can also access interface constants
    public void printMaxSize() {
        System.out.println("Maximum allowed size: " + Drawable.MAX_SIZE); // Or just MAX_SIZE
    }
}

// Rectangle class implements the Drawable interface
public class Rectangle implements Drawable {

    private String color;
    private int width;
    private int height;

    public Rectangle(String color, int width, int height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }

    // Implementation of the abstract method draw()
    @Override
    public void draw() {
        System.out.println("Drawing a Rectangle with color: " + this.color + ", width: " + this.width + ", and height: " + this.height);
    }

    // Implementation of the abstract method getColor()
    @Override
    public String getColor() {
        return this.color;
    }
}
```

---

### 4. Multiple Interface Inheritance

A class can implement multiple interfaces. This allows a class to inherit multiple "types" or contracts.

**Example: Implementing Multiple Interfaces**

Let's define another interface:

```java
public interface Resizable {
    void resize(int factor);
}
```

Now, a class can implement both `Drawable` and `Resizable`:

```java
public class Square implements Drawable, Resizable {

    private String color;
    private int sideLength;

    public Square(String color, int sideLength) {
        this.color = color;
        this.sideLength = sideLength;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a Square with color: " + this.color + " and side length: " + this.sideLength);
    }

    @Override
    public String getColor() {
        return this.color;
    }

    @Override
    public void resize(int factor) {
        this.sideLength *= factor;
        System.out.println("Resized Square. New side length: " + this.sideLength);
    }
}
```

---

### 5. Default and Static Methods in Interfaces (Java 8+)

Before Java 8, interfaces could only contain abstract methods and constants. Java 8 introduced `default` and `static` methods, providing more flexibility.

*   **Default Methods:**
    *   Have a default implementation within the interface.
    *   Classes implementing the interface can use the default implementation or override it.
    *   Declared using the `default` keyword.

*   **Static Methods:**
    *   Belong to the interface itself, not to any specific implementing class instance.
    *   Can be called directly using the interface name.
    *   Cannot be overridden by implementing classes.
    *   Declared using the `static` keyword.

**Example with Default and Static Methods:**

```java
public interface Flyable {

    // Abstract method
    void fly();

    // Default method
    default void takeOff() {
        System.out.println("Taking off.");
    }

    // Default method that can be overridden
    default void land() {
        System.out.println("Landing normally.");
    }

    // Static method
    static void showInfo() {
        System.out.println("This is a Flyable interface. Implementations can fly.");
    }
}
```

**Implementing classes:**

```java
public class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Bird is flying.");
    }

    // Bird uses the default takeOff() and land() methods
}

public class Airplane implements Flyable {
    @Override
    public void fly() {
        System.out.println("Airplane is flying.");
    }

    // Airplane overrides the default land() method
    @Override
    public void land() {
        System.out.println("Airplane performing a controlled landing.");
    }
}
```

**Usage:**

```java
public class InterfaceDemo {
    public static void main(String[] args) {
        Bird sparrow = new Bird();
        sparrow.fly();       // Output: Bird is flying.
        sparrow.takeOff();   // Output: Taking off.
        sparrow.land();      // Output: Landing normally.

        Airplane boeing = new Airplane();
        boeing.fly();        // Output: Airplane is flying.
        boeing.takeOff();    // Output: Taking off.
        boeing.land();       // Output: Airplane performing a controlled landing.

        // Calling a static method
        Flyable.showInfo();  // Output: This is a Flyable interface. Implementations can fly.
    }
}
```

---

### 6. Differentiating Abstract Classes and Interfaces

Both abstract classes and interfaces provide a way to achieve abstraction, but they have key differences:

| Feature                 | Abstract Class                                    | Interface                                         |
| :---------------------- | :------------------------------------------------ | :------------------------------------------------ |
| **Keyword**             | `abstract class`                                  | `interface`                                       |
| **Methods**             | Can have abstract and concrete methods.           | Can have abstract methods, default methods, static methods, and private methods (Java 9+). |
| **Variables**           | Can have instance variables, static variables, constants. | Can only have constants (implicitly `public static final`). |
| **Constructors**        | Can have constructors (used by subclasses).       | Cannot have constructors.                         |
| **Inheritance**         | A class can extend only one abstract class.       | A class can implement multiple interfaces.        |
| **Access Modifiers**    | Methods and variables can have `public`, `protected`, `default`, `private`. | Methods are implicitly `public` (or `private` in Java 9+ for default/static). Fields are implicitly `public static final`. |
| **Purpose**             | Represents an "is-a" relationship (e.g., `Dog` is an `Animal`). Can provide a base implementation. | Represents a "can-do" or "has-a" capability (e.g., `Car` can `Move`, `Bird` can `Fly`). Defines a contract. |
| **Implementation**      | A subclass `extends` an abstract class.           | A class `implements` an interface.                |

---

### 7. Polymorphism and Loose Coupling with Interfaces

Interfaces are fundamental to achieving polymorphism and loose coupling.

**Polymorphism:**

You can create a variable of an interface type and assign an object of any class that implements that interface to it. This allows you to call interface methods on the variable, and the actual method executed will depend on the type of the object currently referenced.

```java
Drawable myShape1 = new Circle("Red", 5);
Drawable myShape2 = new Rectangle("Blue", 10, 20);

myShape1.draw(); // Calls Circle's draw() method
myShape2.draw(); // Calls Rectangle's draw() method
```

**Loose Coupling:**

By depending on an interface rather than a concrete class, your code becomes less brittle. If you need to change the underlying implementation of a class that implements an interface, you can do so without affecting the code that uses the interface, as long as the interface contract is maintained.

**Example:**

Imagine a `ShapeProcessor` that needs to draw various shapes:

```java
public class ShapeProcessor {
    public void processShape(Drawable shape) {
        System.out.println("Processing shape:");
        shape.draw();
        System.out.println("Shape color: " + shape.getColor());
    }
}

// Usage:
public class Main {
    public static void main(String[] args) {
        ShapeProcessor processor = new ShapeProcessor();
        Circle myCircle = new Circle("Green", 7);
        Rectangle myRectangle = new Rectangle("Yellow", 15, 8);

        processor.processShape(myCircle);
        processor.processShape(myRectangle);
    }
}
```
The `ShapeProcessor` doesn't need to know if it's dealing with a `Circle`, `Rectangle`, or any other `Drawable` object. It only needs to know that it has a `draw()` and `getColor()` method.

---

### 8. Key Points to Remember:

*   **Interfaces define contracts, not implementations.**
*   All members of an interface are implicitly `public`.
*   Interface fields are implicitly `public static final` (constants).
*   Interface methods are implicitly `public abstract` (unless `default` or `static`).
*   Classes use the `implements` keyword to fulfill an interface contract.
*   A class must provide implementations for all abstract methods of an interface it implements.
*   A class can implement multiple interfaces.
*   `default` methods provide a default implementation that can be overridden.
*   `static` methods belong to the interface and cannot be overridden.
*   Interfaces are crucial for achieving polymorphism and loose coupling.
*   Interfaces are a form of "is-a" relationship (or more accurately, "can-do").

---

### Practice Questions/Exercises:

**Question 1:**
What is the primary purpose of an interface in Java?
a) To provide complete method implementations.
b) To define a contract of methods that a class must implement.
c) To declare instance variables for subclasses.
d) To prevent multiple inheritance of classes.

**Question 2:**
Consider the following code snippet:

```java
public interface Printable {
    void printDocument();
    String getTitle();
}

public class Report implements Printable {
    private String reportTitle;

    public Report(String title) {
        this.reportTitle = title;
    }

    // Which keyword is missing here for the implementation?
    // public ??? void printDocument() { ... }

    @Override
    public String getTitle() {
        return reportTitle;
    }
}
```
What keyword should replace the `???` to correctly implement the `printDocument` method from the `Printable` interface?

**Question 3:**
Can a class implement multiple interfaces in Java? If yes, provide an example of how a class declaration would look.

**Question 4:**
Explain the difference between a `default` method and a `static` method in an interface.

**Question 5:**
Why are interfaces important for achieving loose coupling in object-oriented programming?

---

### Answers to Practice Questions:

**Answer 1:**
b) To define a contract of methods that a class must implement.

**Answer 2:**
The missing keyword is `public`. All methods in an interface are implicitly `public`. When a class implements an interface, its implementing methods must also be `public` to match the interface's accessibility.

**Answer 3:**
Yes, a class can implement multiple interfaces. The class declaration would look like this:

```java
public class MyClass implements InterfaceA, InterfaceB, InterfaceC {
    // Implementations for all abstract methods from InterfaceA, InterfaceB, and InterfaceC
}
```

**Answer 4:**
*   **Default Method:** A `default` method has a default implementation within the interface itself. Classes that implement the interface can either use this default implementation or provide their own overridden version. It's declared using the `default` keyword.
*   **Static Method:** A `static` method belongs to the interface itself and can be called directly using the interface name (e.g., `InterfaceName.staticMethodName()`). It cannot be overridden by implementing classes. It's declared using the `static` keyword.

**Answer 5:**
Interfaces promote loose coupling by allowing code to depend on an abstract contract (the interface) rather than a concrete implementation (a specific class). This means you can swap out different implementations of the interface without changing the code that uses it. For example, if a `PrinterService` depends on a `DataSource` interface, you can switch from a `DatabaseDataSource` to a `FileDataSource` without modifying `PrinterService`, as long as both implementations adhere to the `DataSource` interface contract. This makes the system more flexible, maintainable, and testable.
