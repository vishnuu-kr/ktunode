---
title: "defining an interface"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acb9"
status: "completed"
scrapedAt: "2026-05-20T16:28:59.366Z"
---
# Object-Oriented Programming: Module 3 - Packages and Interfaces (Packages) - Defining an Interface

## Introduction

This module focuses on packages and interfaces in object-oriented programming, specifically concentrating on the definition and purpose of interfaces. Interfaces are crucial for achieving abstraction and polymorphism in your code.

## Learning Outcomes

Upon completion of this topic, you should be able to:

1.  **Define** the concept of an interface and its purpose.
2.  **Explain** how interfaces achieve abstraction.
3.  **Declare** an interface in Java (or relevant OOP language).
4.  **Implement** an interface in a class.
5.  **Understand** the rules and restrictions related to interfaces.
6.  **Differentiate** between interfaces and abstract classes.
7.  **Explain** how interfaces promote loose coupling.

## 1. Defining an Interface

*   **Definition:** An interface is a blueprint of a class. It defines a set of methods that a class *must* implement if it wants to implement the interface.  An interface specifies *what* a class should do, but not *how* it should do it. It's a contract.

*   **Purpose:**
    *   **Abstraction:**  Hides the implementation details from the user, exposing only the necessary methods (the 'what', not the 'how').
    *   **Polymorphism:** Allows different classes to be treated as the same type based on the interface they implement. This promotes code reusability and flexibility.
    *   **Multiple Inheritance (Indirectly):** A class can implement multiple interfaces, effectively inheriting multiple types without the problems of direct multiple inheritance.
    *   **Contractual Agreement:** Enforces a standard for classes that implement the interface, ensuring they provide certain functionality.

*   **Key Characteristics:**
    *   Contains only method signatures (no method bodies, except for default methods in newer versions of languages like Java 8+).
    *   All methods are implicitly `public` and `abstract` (before Java 8).
    *   Can contain `static final` constants (variables that cannot be changed after initialization).
    *   Cannot be instantiated directly (you cannot create an object of an interface).
    *   A class *implements* an interface (using the `implements` keyword).

## 2. Interfaces and Abstraction

*   **Abstraction Mechanism:** Interfaces provide a powerful mechanism for abstraction.  They allow you to define a common set of behaviors that different classes can exhibit, without specifying *how* those behaviors are implemented.

*   **Hiding Implementation:** The interface only exposes the method signatures.  The actual implementation of those methods is left to the class that implements the interface.  This allows you to change the implementation of a class without affecting other parts of the code that rely on the interface.

*   **Example:** Consider an `Animal` interface with a method `makeSound()`. Different classes like `Dog`, `Cat`, and `Cow` can implement the `Animal` interface, each providing its own specific implementation of the `makeSound()` method (bark, meow, moo). The code that calls `makeSound()` only needs to know that the object is an `Animal` and can call `makeSound()` without knowing the specific type of animal.

## 3. Declaring an Interface (Java Example)

```java
// Defining an interface called "Drawable"
public interface Drawable {
    // Method signature (no body) - implicitly public and abstract
    void draw();

    // Example of a constant
    public static final String DEFAULT_COLOR = "Black";

    // Default method (Java 8+)
    default void fillColor(String color) {
        System.out.println("Filling with color: " + color);
    }

    // Static method (Java 8+)
    static void printInterfaceName() {
        System.out.println("Drawable Interface");
    }
}
```

*   **`public interface Drawable`**: This declares a public interface named `Drawable`.
*   **`void draw();`**: This declares an abstract method named `draw` that takes no arguments and returns nothing (void). Any class that implements `Drawable` must provide a concrete implementation for this method.
*   **`public static final String DEFAULT_COLOR = "Black";`**: This declares a constant `DEFAULT_COLOR` with the value "Black". Constants are implicitly `public static final` even if these keywords are not explicitly stated.
*   **`default void fillColor(String color)`**: This declares a *default method*.  Default methods have a body and are available in interfaces from Java 8 onwards.  Classes that implement the interface can choose to override the default method or use the default implementation.
*   **`static void printInterfaceName()`**:  This declares a *static method*. Static methods belong to the interface itself, not to instances of classes that implement the interface. They can be called directly using the interface name (e.g., `Drawable.printInterfaceName()`).

## 4. Implementing an Interface (Java Example)

```java
// Creating a class that implements the "Drawable" interface
public class Circle implements Drawable {

    private int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    // Implementing the abstract method "draw()" from the Drawable interface
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius: " + this.radius);
    }

    //Overriding the default method, optional
    @Override
    public void fillColor(String color){
        System.out.println("Filling Circle with: " + color);
    }
}

//Another class implementing the same interface
public class Rectangle implements Drawable {
    private int length;
    private int width;

    public Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a rectangle with length: " + this.length + " and width: " + this.width);
    }
}

public class Main {
    public static void main(String[] args) {
        Drawable circle = new Circle(5);
        Drawable rectangle = new Rectangle(10, 5);

        circle.draw();      // Output: Drawing a circle with radius: 5
        rectangle.draw();   // Output: Drawing a rectangle with length: 10 and width: 5

        circle.fillColor("Red");  //Output: Filling Circle with: Red
        rectangle.fillColor("Blue"); //Output: Filling with color: Blue (default implementation)

        Drawable.printInterfaceName(); //Output: Drawable Interface
    }
}
```

*   **`public class Circle implements Drawable`**: This indicates that the `Circle` class is implementing the `Drawable` interface.
*   **`@Override`**:  This annotation is optional but highly recommended. It tells the compiler that you are intentionally overriding a method from the interface. This helps catch errors if you misspell the method name or use the wrong parameters.
*   **Implementing all abstract methods:** The `Circle` class *must* provide an implementation for the `draw()` method defined in the `Drawable` interface.  If it doesn't, the class must be declared `abstract`.
*   **Using the Interface:**  In the `Main` class, we can create objects of both `Circle` and `Rectangle` and assign them to variables of type `Drawable`.  This demonstrates polymorphism.  We can then call the `draw()` method on these objects, and the correct implementation for each object will be executed.

## 5. Rules and Restrictions Regarding Interfaces

*   **Cannot be instantiated:** You cannot create an instance (object) of an interface directly.  For example: `Drawable myDrawable = new Drawable();` would result in a compilation error.
*   **Implementing classes must implement all abstract methods:**  A class that implements an interface *must* provide an implementation for *all* the abstract methods declared in the interface. If it doesn't, the class must be declared as `abstract`.
*   **Method visibility:** Methods in an interface are implicitly `public`. When implementing the interface, the implementing class *must* declare the implemented methods as `public`.  Reducing the visibility to `protected` or `private` will result in a compilation error.
*   **Constants:** All variables declared in an interface are implicitly `public static final` (constants).
*   **Multiple interface implementation:** A class can implement multiple interfaces (e.g., `class MyClass implements Interface1, Interface2, Interface3`).

## 6. Interfaces vs. Abstract Classes

| Feature           | Interface                                    | Abstract Class                               |
|--------------------|----------------------------------------------|-----------------------------------------------|
| Methods           | Abstract (no implementation) before Java 8.  Can have default and static methods (Java 8+). | Can have both abstract and concrete (implemented) methods. |
| Variables         | Only `public static final` constants.        | Can have any type of variables.              |
| Instantiation    | Cannot be instantiated.                      | Cannot be instantiated.                      |
| Implementation     | A class *implements* an interface.            | A class *extends* an abstract class.         |
| Multiple Inheritance| A class can implement multiple interfaces.   | A class can extend only one abstract class. |
| Purpose           | Defines a contract.                          | Provides a partial implementation hierarchy.  |
| Keyword            | `interface`, `implements`                  | `abstract`, `extends`                        |

**When to Use Which:**

*   **Interface:** Use an interface when you want to define a contract that multiple unrelated classes can implement.  Focus on defining *what* a class should do, without providing any implementation details. Good when forcing a class to have certain methods.
*   **Abstract Class:** Use an abstract class when you want to provide a partial implementation that subclasses can inherit and extend. Focus on providing a common base class with some shared functionality.

## 7. Interfaces and Loose Coupling

*   **Coupling:**  Coupling refers to the degree of interdependence between different parts of your code.
*   **Loose Coupling:** Loose coupling means that the different parts of your code are relatively independent of each other.  Changes to one part of the code are less likely to affect other parts.
*   **How Interfaces Promote Loose Coupling:** Interfaces promote loose coupling by allowing you to program to an interface, rather than to a specific implementation.  This means that your code only depends on the interface definition, not on the specific classes that implement the interface.

*   **Example:** In the `Drawable` example, the `Main` class works with `Drawable` objects. It doesn't need to know whether it's working with a `Circle`, a `Rectangle`, or some other class that implements `Drawable`.  This makes the code more flexible and easier to maintain. If you add a new class that implements `Drawable` (e.g., `Triangle`), you can use it in the `Main` class without modifying any of the existing code.

## Important Points to Remember

*   Interfaces define a contract that implementing classes must adhere to.
*   Interfaces promote abstraction, polymorphism, and loose coupling.
*   Interfaces are a powerful tool for designing flexible and maintainable software.
*   Understand the difference between interfaces and abstract classes and choose the appropriate one for your needs.
*   From Java 8 onwards, interfaces can include default and static methods.

## Practice Questions/Exercises

1.  **Question:** What is an interface in object-oriented programming? Explain its purpose.
    **Answer:** An interface is a blueprint for a class. It defines a set of methods that a class *must* implement. The purpose is to achieve abstraction, polymorphism, and enforce a standard for classes.

2.  **Question:** How does an interface achieve abstraction?
    **Answer:** An interface hides the implementation details from the user, exposing only the necessary methods (the 'what', not the 'how').

3.  **Exercise:** Create an interface called `Vehicle` with the following methods: `start()`, `stop()`, and `accelerate()`. Then, create two classes, `Car` and `Bicycle`, that implement the `Vehicle` interface. Provide different implementations for each method in each class.

    **Answer:**

    ```java
    //Vehicle Interface
    interface Vehicle {
        void start();
        void stop();
        void accelerate();
    }

    //Car Class
    class Car implements Vehicle {
        @Override
        public void start() {
            System.out.println("Car starting...");
        }

        @Override
        public void stop() {
            System.out.println("Car stopping...");
        }

        @Override
        public void accelerate() {
            System.out.println("Car accelerating...");
        }
    }

    //Bicycle Class
    class Bicycle implements Vehicle {
        @Override
        public void start() {
            System.out.println("Bicycle starting...");
        }

        @Override
        public void stop() {
            System.out.println("Bicycle stopping...");
        }

        @Override
        public void accelerate() {
            System.out.println("Bicycle accelerating...");
        }
    }

    public class VehicleTest {
        public static void main(String[] args) {
            Vehicle car = new Car();
            Vehicle bicycle = new Bicycle();

            car.start();       // Output: Car starting...
            bicycle.start();   // Output: Bicycle starting...
        }
    }

    ```

4.  **Question:** What is the difference between `implements` and `extends` keywords in Java?
    **Answer:** `implements` is used when a class implements an interface, while `extends` is used when a class inherits from another class (either a regular class or an abstract class).

5.  **Question:** Explain the concept of loose coupling and how interfaces help to achieve it.
    **Answer:** Loose coupling means that different parts of the code are relatively independent of each other. Interfaces promote loose coupling by allowing you to program to an interface, rather than to a specific implementation. Changes to one part of the code are less likely to affect other parts.
