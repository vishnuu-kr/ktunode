---
title: "Interfaces  - Interfaces v/s Abstract classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces  – Packages "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfb2"
status: "completed"
scrapedAt: "2026-05-20T16:56:19.265Z"
---
# Object-Oriented Programming: Module 3 - Packages and Interfaces

## Topic: Interfaces - Interfaces vs. Abstract Classes

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the fundamental purpose and definition of an interface in Java.
*   Distinguish between the functionalities and use cases of interfaces and abstract classes.
*   Identify the key differences in terms of member types, inheritance, and implementation.
*   Appreciate when to choose an interface over an abstract class and vice-versa.
*   Recognize the concept of "programming to an interface" and its benefits.

---

### 1. What is an Interface?

An **interface** in Java is a blueprint of a class. It defines a contract that a class must adhere to. It specifies *what* a class can do, but not *how* it does it.

**Key Characteristics of Interfaces:**

*   **Purely abstract:** By default, all methods declared in an interface are `public` and `abstract`.
*   **No implementation:** Interfaces themselves cannot provide method implementations (prior to Java 8).
*   **Constants:** Variables declared in an interface are implicitly `public`, `static`, and `final`.
*   **Single Inheritance (for classes):** A class can `implement` multiple interfaces.
*   **Multiple Inheritance (for interfaces):** An interface can `extend` multiple other interfaces.
*   **No constructors:** Interfaces cannot have constructors as they cannot be instantiated directly.
*   **No instance variables:** Interfaces cannot have instance variables; only constants.

**Syntax:**

```java
interface InterfaceName {
    // Constants (implicitly public static final)
    int CONSTANT_VALUE = 10;

    // Abstract methods (implicitly public abstract)
    void method1();
    String method2(int parameter);

    // Default methods (introduced in Java 8 - can have implementation)
    default void defaultMethod() {
        System.out.println("Default implementation");
    }

    // Static methods (introduced in Java 8 - can have implementation)
    static void staticMethod() {
        System.out.println("Static method implementation");
    }
}
```

**Example:**

```java
// Interface definition
interface Flyable {
    void fly(); // Abstract method
}

// Class implementing the interface
class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Bird is flying with wings.");
    }
}

class Airplane implements Flyable {
    @Override
    public void fly() {
        System.out.println("Airplane is flying with engines.");
    }
}
```

---

### 2. What is an Abstract Class?

An **abstract class** is a class that cannot be instantiated directly. It can contain both abstract and concrete (implemented) methods, as well as instance variables and constructors. It serves as a base for other classes, providing common functionality and defining a general template.

**Key Characteristics of Abstract Classes:**

*   **Can be abstract or concrete:** An abstract class can have `abstract` methods (without implementation) and concrete methods (with implementation).
*   **Can have constructors:** Abstract classes can have constructors, which are called when a concrete subclass is instantiated.
*   **Can have instance variables:** Abstract classes can have instance variables (fields) just like regular classes.
*   **Single Inheritance:** A class can `extend` only one abstract class.
*   **Multiple Interface Implementation:** An abstract class can implement multiple interfaces.
*   **Keywords:** Uses the `abstract` keyword for class and methods.

**Syntax:**

```java
abstract class AbstractClassName {
    // Instance variables
    int instanceVariable;

    // Constructor
    public AbstractClassName(int value) {
        this.instanceVariable = value;
    }

    // Abstract method (must be implemented by subclasses)
    abstract void abstractMethod();

    // Concrete method (can be overridden or used as is)
    public void concreteMethod() {
        System.out.println("This is a concrete method.");
    }
}
```

**Example:**

```java
// Abstract class definition
abstract class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    // Abstract method
    abstract void makeSound();

    // Concrete method
    public void eat() {
        System.out.println(name + " is eating.");
    }
}

// Concrete subclass extending the abstract class
class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}
```

---

### 3. Interfaces vs. Abstract Classes: Key Differences

| Feature             | Interface                                     | Abstract Class                                      |
| :------------------ | :-------------------------------------------- | :-------------------------------------------------- |
| **Methods**         | All methods are implicitly `public abstract` (before Java 8). Can have `default` and `static` methods with implementation (Java 8+). | Can have both `abstract` and concrete methods.       |
| **Variables**       | Only `public static final` constants.         | Can have instance variables (non-static, non-final), static variables, final variables. |
| **Constructors**    | No constructors.                              | Can have constructors.                              |
| **Inheritance**     | A class can implement multiple interfaces.    | A class can extend only one abstract class (single inheritance). |
| **Implementation**  | A class `implements` an interface.            | A class `extends` an abstract class.                |
| **Purpose**         | Defines a "contract" or "capability." Achieves abstraction and loose coupling. | Provides a "partial implementation" or a "common base" for related classes. |
| **Access Modifiers**| All members are implicitly `public`.          | Members can have any access modifier (`public`, `protected`, `default`, `private`). |
| **Instantiation**   | Cannot be instantiated.                       | Cannot be instantiated.                             |
| **Relationship**    | "Has a capability" or "can do."               | "Is a type of" or "is a specialized version of."  |
| **Java 8+ Additions** | `default` and `static` methods with implementation. | No major changes to the core concept, but can now implement interfaces with default methods without overriding. |

---

### 4. When to Use Which?

#### Use Interfaces When:

*   **You want to specify a contract or capability:** For example, `Runnable`, `Serializable`, `Comparable`. Any class that implements `Runnable` can be run in a thread.
*   **You need multiple inheritance of type:** A class can inherit the *type* from multiple interfaces, allowing it to be treated as different kinds of objects.
*   **You want to achieve loose coupling:** Objects interact through interfaces, making it easier to swap implementations without affecting the client code. This is the core of "programming to an interface."
*   **You are designing API or framework:** Interfaces define the public contract for your library.

**Example Scenario:**
Designing a system for different types of media players. You can have an `AudioPlayer` and a `VideoPlayer`. Both might implement a `MediaPlayer` interface with methods like `play()`, `pause()`, `stop()`.

```java
interface MediaPlayer {
    void play();
    void pause();
    void stop();
}

class MP3Player implements MediaPlayer {
    @Override
    public void play() { System.out.println("Playing MP3..."); }
    @Override
    public void pause() { System.out.println("Pausing MP3..."); }
    @Override
    public void stop() { System.out.println("Stopping MP3..."); }
}

class VLCPlayer implements MediaPlayer {
    @Override
    public void play() { System.out.println("Playing VLC video..."); }
    @Override
    public void pause() { System.out.println("Pausing VLC video..."); }
    @Override
    public void stop() { System.out.println("Stopping VLC video..."); }
}

public class MediaSystem {
    public static void main(String[] args) {
        MediaPlayer player1 = new MP3Player();
        MediaPlayer player2 = new VLCPlayer();

        playMedia(player1);
        playMedia(player2);
    }

    public static void playMedia(MediaPlayer player) {
        player.play();
        player.pause();
        player.stop();
    }
}
```
In `playMedia`, we use the `MediaPlayer` interface, so we don't need to know if it's an `MP3Player` or `VLCPlayer`.

#### Use Abstract Classes When:

*   **You want to share common code or state among closely related classes:** If many classes share certain properties or methods that have a default implementation, an abstract class is suitable.
*   **You want to define a template for a class hierarchy:** The abstract class provides a basic structure that subclasses can extend and specialize.
*   **You need to add non-public, non-static, non-final fields or methods:** Abstract classes allow for more flexibility in member declarations.
*   **You want to provide a base class with some default behavior:** Abstract classes can offer concrete methods that subclasses can inherit and optionally override.

**Example Scenario:**
Creating a hierarchy of shapes. You can have an abstract `Shape` class with common properties like `color` and an abstract method `calculateArea()`. Then, subclasses like `Circle`, `Rectangle`, `Triangle` would extend `Shape` and provide their specific area calculations.

```java
abstract class Shape {
    String color;

    public Shape(String color) {
        this.color = color;
    }

    abstract double calculateArea(); // Abstract method

    public void displayColor() { // Concrete method
        System.out.println("Color: " + color);
    }
}

class Circle extends Shape {
    double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width;
    double height;

    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    @Override
    double calculateArea() {
        return width * height;
    }
}

public class ShapeCalculator {
    public static void main(String[] args) {
        Shape circle = new Circle("Red", 5.0);
        Shape rectangle = new Rectangle("Blue", 4.0, 6.0);

        circle.displayColor();
        System.out.println("Circle Area: " + circle.calculateArea());

        rectangle.displayColor();
        System.out.println("Rectangle Area: " + rectangle.calculateArea());
    }
}
```
Here, `Shape` provides common state (`color`) and behavior (`displayColor`), and forces subclasses to implement `calculateArea()`.

---

### 5. Practice Questions

1.  What is the primary purpose of an interface in Java?
2.  Can a class implement multiple interfaces? Explain.
3.  Can an interface extend multiple other interfaces? Explain.
4.  What is the difference between a `default` method in an interface and a concrete method in an abstract class?
5.  When would you choose to use an abstract class instead of an interface? Provide a scenario.
6.  Consider a scenario where you have classes `Car` and `Bicycle`. Both can `move()`. `Car` has an `engineType` and `Bicycle` has `numberOfGears`.
    *   How would you model this using interfaces?
    *   How would you model this using an abstract class?
    *   Which approach is generally preferred and why?
7.  What are the implicit modifiers for variables declared in an interface?
8.  What are the implicit modifiers for methods declared in an interface (before Java 8)?

---

### 6. Answers to Practice Questions

1.  The primary purpose of an interface is to define a contract or a blueprint of a class. It specifies what a class can do (methods) without dictating how it should do it. It promotes abstraction and loose coupling.
2.  Yes, a class can implement multiple interfaces. This is Java's way of achieving a form of multiple inheritance of *type* and *behavior specification*.
3.  Yes, an interface can extend multiple other interfaces. This allows for composing behaviors from different interface contracts.
4.  A `default` method in an interface (introduced in Java 8) provides a default implementation that implementing classes can inherit and optionally override. A concrete method in an abstract class also provides an implementation that subclasses can inherit and optionally override. The key difference is that interfaces *traditionally* could not have any implementation, while abstract classes always could. `default` methods were added to interfaces to allow them to evolve without breaking existing implementations.
5.  You would choose an abstract class when:
    *   You need to share common code (concrete methods) or common state (instance variables) among closely related classes.
    *   You are designing a class hierarchy where subclasses are closely related and share a "is-a" relationship.
    *   You need to define non-public, non-static, or non-final members.
    *   You want to provide a base class with some default behavior that subclasses can rely on.
    **Scenario Example:** Designing an abstract `Employee` class with properties like `employeeId`, `name`, and concrete methods like `getBasicSalary()`. Subclasses like `Manager` and `Developer` would extend `Employee` and might override `getBasicSalary()` or add specific methods like `calculateBonus()`.
6.  **Using Interfaces:**
    *   You could have a `Movable` interface with a `move()` method.
    *   `Car` and `Bicycle` would implement `Movable`.
    *   `Car` would have `engineType` and `Bicycle` would have `numberOfGears` as its own members.

    ```java
    interface Movable {
        void move();
    }

    class Car implements Movable {
        String engineType;
        Car(String engineType) { this.engineType = engineType; }
        @Override
        public void move() { System.out.println("Car moves using " + engineType); }
    }

    class Bicycle implements Movable {
        int numberOfGears;
        Bicycle(int numberOfGears) { this.numberOfGears = numberOfGears; }
        @Override
        public void move() { System.out.println("Bicycle moves with " + numberOfGears + " gears"); }
    }
    ```

    **Using an Abstract Class:**
    *   You could have an abstract `Vehicle` class with a `move()` method.
    *   `Car` and `Bicycle` would extend `Vehicle`.
    *   `Car` and `Bicycle` would need to define their specific properties (`engineType`, `numberOfGears`). The `move()` method could be abstract or concrete depending on whether the basic movement logic is shared.

    ```java
    abstract class Vehicle {
        abstract void move(); // Abstract method - requires implementation
        // OR:
        // void move() { System.out.println("Vehicle is moving."); } // Concrete method
    }

    class Car extends Vehicle {
        String engineType;
        Car(String engineType) { this.engineType = engineType; }
        @Override
        void move() { System.out.println("Car moves using " + engineType); }
    }

    class Bicycle extends Vehicle {
        int numberOfGears;
        Bicycle(int numberOfGears) { this.numberOfGears = numberOfGears; }
        @Override
        void move() { System.out.println("Bicycle moves with " + numberOfGears + " gears"); }
    }
    ```

    **Preferred Approach:** The interface approach is generally preferred here for the `move()` capability. This is because "moving" is a capability that can be implemented in vastly different ways (engine vs. pedals). Using an interface (`Movable`) promotes loose coupling and allows objects that aren't even vehicles to be `Movable` (e.g., a `Robot`). The specific attributes (`engineType`, `numberOfGears`) are distinct to each class and don't represent a shared, general state for all vehicles.

7.  The implicit modifiers for variables declared in an interface are `public`, `static`, and `final`.
8.  The implicit modifiers for methods declared in an interface (before Java 8) are `public` and `abstract`.

---

### 8. Important Points to Remember

*   **Interfaces define contracts, abstract classes provide partial implementations.**
*   **"Programming to an interface" is a design principle that promotes flexibility and loose coupling.** Always try to use interface types for variables, method parameters, and return types whenever possible.
*   **A class can implement multiple interfaces, but extend only one class (abstract or concrete).**
*   **Interfaces cannot have instance variables or constructors.**
*   **Abstract classes can have constructors and instance variables.**
*   **Java 8 introduced `default` and `static` methods in interfaces, allowing for method implementations.** This blurs the lines slightly but doesn't change the fundamental purpose of interfaces as contracts.
*   **Use interfaces for unrelated classes that share a common behavior or capability.**
*   **Use abstract classes for closely related classes that share common state and behavior (an "is-a" relationship).**
