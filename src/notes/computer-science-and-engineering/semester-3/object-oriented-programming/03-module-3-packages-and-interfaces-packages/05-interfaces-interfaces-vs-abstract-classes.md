---
title: "Interfaces - Interfaces v/s Abstract classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acb8"
status: "completed"
scrapedAt: "2026-05-20T16:28:58.652Z"
---
## Object-Oriented Programming: Module 3 - Packages and Interfaces

### Topic: Interfaces - Interfaces vs. Abstract Classes

**Learning Outcomes:**

*   Understand the concept and purpose of interfaces in OOP.
*   Differentiate between interfaces and abstract classes.
*   Identify the key characteristics and use cases of interfaces.
*   Identify the key characteristics and use cases of abstract classes.
*   Analyze scenarios to determine when to use an interface or an abstract class.
*   Implement interfaces in code.

---

**1. Interfaces: Concept and Purpose**

*   **Definition:** An interface is a completely "abstract class" that is used to specify a contract that classes must adhere to. It defines a set of methods that a class *must* implement.

*   **Purpose:**
    *   **Achieving Abstraction:** Hides implementation details and exposes only the necessary functionality.
    *   **Multiple Inheritance (Behavioral):** Allows a class to implement multiple interfaces, inheriting multiple behaviors.  This overcomes the limitations of single inheritance in languages like Java.
    *   **Loose Coupling:** Promotes separation of concerns, making code more modular and maintainable.
    *   **Defining Contracts:** Establishes a clear contract between classes, ensuring consistent behavior across different implementations.

*   **Key Characteristics:**
    *   Contains only abstract methods (methods without implementation).  Prior to Java 8, interfaces could only contain abstract methods.  Later versions introduced the ability to include default and static methods.
    *   Methods are implicitly `public abstract` (prior to Java 9).
    *   Can contain constant variables (fields declared as `public static final`).
    *   A class `implements` an interface.
    *   Interfaces cannot be instantiated (you cannot create objects directly from an interface).

*   **Example (Java):**

    ```java
    interface Drawable {
        void draw(); // Abstract method
        default void printDetails(){ //Default method
            System.out.println("Drawable Shape");
        }
        static void printStatic(){ //Static Method
            System.out.println("This is a Drawable shape.");
        }
    }

    class Circle implements Drawable {
        @Override
        public void draw() {
            System.out.println("Drawing a circle.");
        }
    }

    class Rectangle implements Drawable {
        @Override
        public void draw() {
            System.out.println("Drawing a rectangle.");
        }
    }

    public class InterfaceExample {
        public static void main(String[] args) {
            Drawable circle = new Circle();
            Drawable rectangle = new Rectangle();

            circle.draw();      // Output: Drawing a circle.
            rectangle.draw();   // Output: Drawing a rectangle.
            circle.printDetails(); // Output: Drawable Shape
            Drawable.printStatic(); // Output: This is a Drawable shape.
        }
    }
    ```

**2. Abstract Classes: Concept and Purpose**

*   **Definition:** An abstract class is a class that cannot be instantiated directly. It serves as a blueprint for other classes.

*   **Purpose:**
    *   **Partial Implementation:** Provides a base implementation that can be reused by subclasses.
    *   **Forcing Implementation of Specific Methods:** Defines abstract methods that *must* be implemented by subclasses.
    *   **Code Reusability:** Reduces code duplication by providing common functionality in the base class.
    *   **Polymorphism:** Enables polymorphism through the use of abstract methods.

*   **Key Characteristics:**
    *   Can contain both abstract methods (methods without implementation) and concrete methods (methods with implementation).
    *   Can contain instance variables (fields).
    *   A class `extends` an abstract class.
    *   Cannot be instantiated directly.  You must create an object of a *concrete* subclass.

*   **Example (Java):**

    ```java
    abstract class Shape {
        // Instance Variable
        protected String color;

        // Constructor (Abstract classes can have constructors)
        public Shape(String color) {
            this.color = color;
        }

        // Abstract method (must be implemented by subclasses)
        public abstract double calculateArea();

        // Concrete method (can be inherited as-is)
        public void displayColor() {
            System.out.println("Color: " + this.color);
        }
    }

    class Circle extends Shape {
        private double radius;

        public Circle(String color, double radius) {
            super(color);
            this.radius = radius;
        }

        @Override
        public double calculateArea() {
            return Math.PI * radius * radius;
        }
    }

    public class AbstractClassExample {
        public static void main(String[] args) {
            Circle circle = new Circle("Red", 5.0);
            circle.displayColor();                 // Output: Color: Red
            System.out.println("Area: " + circle.calculateArea()); // Output: Area: 78.53981633974483
        }
    }
    ```

**3. Interfaces vs. Abstract Classes: Key Differences**

| Feature           | Interface                                                                           | Abstract Class                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Keyword         | `interface`                                                                        | `abstract class`                                                                       |
| Inheritance       | A class `implements` an interface. A class can implement multiple interfaces.      | A class `extends` an abstract class.  A class can extend only one abstract class.       |
| Methods           | Primarily abstract methods (before Java 8).  Can include default and static methods. | Can contain both abstract and concrete methods.                                        |
| Variables/Fields  | Can only contain constants (`public static final`).                                 | Can contain any type of instance variables.                                            |
| Constructors      | Cannot have constructors.                                                             | Can have constructors (but cannot be called to instantiate the abstract class itself). |
| Instantiation     | Cannot be instantiated.                                                             | Cannot be instantiated.                                                                 |
| Multiple Inheritance | Supported (behavioral). A class can implement multiple interfaces.                  | Not directly supported (single inheritance).                                         |
| Purpose           | Defines a contract of what a class should *do*.                                     | Defines what a class *is* and provides a base implementation.                      |

**4. When to Use Interfaces vs. Abstract Classes**

*   **Use Interfaces When:**
    *   You want to define a contract that multiple unrelated classes can adhere to.
    *   You want to achieve multiple inheritance of behavior.
    *   You want to enforce a specific set of methods that classes *must* implement.
    *   You only need to specify *what* a class should do, without providing any implementation details.

*   **Use Abstract Classes When:**
    *   You want to provide a base implementation that can be reused by subclasses.
    *   You want to define a hierarchy of related classes.
    *   You want to have both abstract and concrete methods.
    *   You want to define the *is-a* relationship (e.g., a Circle *is-a* Shape).
    *   You want to define common state (instance variables) among subclasses.

**5. Implementing Interfaces in Code**

1.  **Declare the interface:** Use the `interface` keyword followed by the interface name.
2.  **Define abstract methods:** Declare the methods that classes implementing the interface must implement.
3.  **Implement the interface:** Use the `implements` keyword in the class declaration.
4.  **Provide implementations:** Implement all the abstract methods defined in the interface.

**Example (Java - Expanded):**

```java
interface Engine {
    void start();
    void stop();
}

interface Vehicle {
    void accelerate();
    void brake();
}

class Car implements Engine, Vehicle {  //Implementing two interfaces

    @Override
    public void start() {
        System.out.println("Car engine started.");
    }

    @Override
    public void stop() {
        System.out.println("Car engine stopped.");
    }

    @Override
    public void accelerate() {
        System.out.println("Car accelerating.");
    }

    @Override
    public void brake() {
        System.out.println("Car braking.");
    }
}

public class InterfaceImplementationExample {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start();
        myCar.accelerate();
        myCar.brake();
        myCar.stop();
    }
}
```

**6. Practice Questions/Exercises**

1.  **Question:**  What is the main difference between an interface and an abstract class regarding multiple inheritance?

    **Answer:**  A class can implement multiple interfaces, achieving multiple inheritance of behavior. However, a class can only extend one abstract class (single inheritance).

2.  **Question:**  When would you choose to use an interface over an abstract class? Provide an example scenario.

    **Answer:** You would choose an interface when you want to define a contract for multiple unrelated classes.  Example:  Consider different types of storage systems (local file system, cloud storage, database). Each storage system can implement an `Storable` interface defining methods like `store()`, `retrieve()`, and `delete()`. These storage systems are not necessarily related by inheritance but share common storage operations.

3.  **Question:**  Can an interface contain instance variables?  If not, what kind of variables can it contain?

    **Answer:** No, an interface cannot contain instance variables. It can only contain constants (declared as `public static final`).

4.  **Exercise:** Design an interface called `Loggable` with methods `logInfo(String message)` and `logError(String message)`. Then create two classes, `FileLogger` and `DatabaseLogger`, that implement the `Loggable` interface and provide their own implementations for logging messages.

    **Solution (Java):**

    ```java
    interface Loggable {
        void logInfo(String message);
        void logError(String message);
    }

    class FileLogger implements Loggable {
        @Override
        public void logInfo(String message) {
            System.out.println("File Logger: INFO: " + message);
            // Code to write to a file
        }

        @Override
        public void logError(String message) {
            System.err.println("File Logger: ERROR: " + message);
            // Code to write error to a file
        }
    }

    class DatabaseLogger implements Loggable {
        @Override
        public void logInfo(String message) {
            System.out.println("Database Logger: INFO: " + message);
            // Code to insert into database
        }

        @Override
        public void logError(String message) {
            System.err.println("Database Logger: ERROR: " + message);
            // Code to insert error into database
        }
    }

    public class LoggingExample {
        public static void main(String[] args) {
            Loggable fileLogger = new FileLogger();
            Loggable databaseLogger = new DatabaseLogger();

            fileLogger.logInfo("Application started.");
            databaseLogger.logError("Database connection failed.");
        }
    }
    ```

**7. Important Points to Remember**

*   Interfaces define *what* a class should do, while abstract classes define *what* a class *is* and can provide partial implementation.
*   Interfaces promote loose coupling and allow multiple inheritance of behavior.
*   Abstract classes are used for code reuse and defining a hierarchy of related classes.
*   Choose the appropriate approach (interface or abstract class) based on the specific requirements of your design.  Consider whether you need to define a contract, provide a base implementation, or support multiple inheritance.
*   Be aware of language-specific features. For example, default methods and static methods in interfaces (available in Java 8 and later) blur the lines somewhat, but the core principles remain.
---
