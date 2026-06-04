---
title: "Abstract Classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf92"
status: "completed"
scrapedAt: "2026-05-20T16:55:57.198Z"
---
# Object-Oriented Programming: Module 1 - Introduction to Java

## Topic: Abstract Classes

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of abstraction in programming.
*   Define what an abstract class is in Java.
*   Differentiate between abstract classes and regular (concrete) classes.
*   Identify the purpose and use cases of abstract classes.
*   Declare and use abstract classes and abstract methods.
*   Understand the rules for extending abstract classes.
*   Explain the relationship between abstract classes and inheritance.
*   Recognize how abstract classes contribute to polymorphism.

---

### 2. Key Concepts and Definitions

#### 2.1. Abstraction

*   **Definition:** Abstraction is a fundamental principle of Object-Oriented Programming (OOP) that focuses on **hiding complex implementation details** and exposing only the essential features or functionalities of an object.
*   **Analogy:** Think of a remote control for your TV. You press buttons like "power," "volume up," or "channel down." You don't need to know *how* the TV receives these signals, what electronic components are involved, or the internal workings. You only interact with the essential interface (the buttons).
*   **Purpose:**
    *   **Simplification:** Makes complex systems easier to understand and manage.
    *   **Modularity:** Breaks down a system into smaller, manageable parts.
    *   **Reusability:** Allows common functionalities to be defined once and reused across multiple contexts.
    *   **Flexibility:** Enables changes to the underlying implementation without affecting users of the abstraction.

#### 2.2. Abstract Class

*   **Definition:** An abstract class is a class that is **declared with the `abstract` keyword**. It serves as a blueprint for other classes and **cannot be instantiated directly**.
*   **Purpose:**
    *   To provide a **common interface** for a group of related subclasses.
    *   To define **common behaviors** that subclasses are expected to implement.
    *   To enforce a **contract** on subclasses, ensuring they provide specific functionalities.
    *   To share common code among subclasses, promoting code reuse.

#### 2.3. Abstract Method

*   **Definition:** An abstract method is a method declared with the `abstract` keyword and **without an implementation (body)**. It only declares the method signature (return type, method name, and parameters).
*   **Purpose:**
    *   To define a method that **must be implemented** by any concrete (non-abstract) subclass.
    *   To force subclasses to provide their own specific implementation for a particular behavior.
*   **Rule:** An abstract method *must* be declared within an abstract class.

#### 2.4. Concrete Class (Non-Abstract Class)

*   **Definition:** A regular class that is not declared as `abstract`.
*   **Instantiation:** Concrete classes can be instantiated to create objects.
*   **Abstract Method Implementation:** A concrete class that extends an abstract class **must provide an implementation for all abstract methods** inherited from the abstract class.

---

### 3. Declaring and Using Abstract Classes and Methods

#### 3.1. Syntax for Abstract Class Declaration

```java
abstract class ClassName {
    // ... class members (variables, methods) ...
}
```

#### 3.2. Syntax for Abstract Method Declaration

```java
abstract returnType methodName(parameters);
```

#### 3.3. Example: Shape Hierarchy

Let's consider a hierarchy of shapes. We can have a general `Shape` concept, but a "shape" itself doesn't have a specific area or perimeter. These properties are specific to subclasses like `Circle` and `Rectangle`.

```java
// Abstract Class: Shape
abstract class Shape {
    private String color;

    // Constructor
    public Shape(String color) {
        this.color = color;
    }

    // Getter for color (common functionality)
    public String getColor() {
        return color;
    }

    // Abstract method: Must be implemented by subclasses
    public abstract double calculateArea();

    // Abstract method: Must be implemented by subclasses
    public abstract double calculatePerimeter();

    // Concrete method: Can be overridden or used as is
    public void displayColor() {
        System.out.println("Color: " + color);
    }
}

// Concrete Subclass: Circle
class Circle extends Shape {
    private double radius;

    // Constructor
    public Circle(String color, double radius) {
        super(color); // Call superclass constructor
        this.radius = radius;
    }

    // Implementation of abstract method calculateArea()
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    // Implementation of abstract method calculatePerimeter()
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }

    // Specific method for Circle
    public double getRadius() {
        return radius;
    }
}

// Concrete Subclass: Rectangle
class Rectangle extends Shape {
    private double length;
    private double width;

    // Constructor
    public Rectangle(String color, double length, double width) {
        super(color); // Call superclass constructor
        this.length = length;
        this.width = width;
    }

    // Implementation of abstract method calculateArea()
    @Override
    public double calculateArea() {
        return length * width;
    }

    // Implementation of abstract method calculatePerimeter()
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }

    // Specific methods for Rectangle
    public double getLength() {
        return length;
    }

    public double getWidth() {
        return width;
    }
}

// Main class to demonstrate
public class AbstractClassDemo {
    public static void main(String[] args) {
        // Cannot instantiate an abstract class directly:
        // Shape myShape = new Shape("Red"); // Compile-time error

        // Create objects of concrete subclasses
        Circle myCircle = new Circle("Red", 5.0);
        Rectangle myRectangle = new Rectangle("Blue", 4.0, 6.0);

        // Polymorphism in action: Using Shape reference to refer to Circle and Rectangle objects
        Shape shape1 = myCircle;
        Shape shape2 = myRectangle;

        // Calling methods through the abstract reference
        System.out.println("Circle Details:");
        shape1.displayColor(); // Uses concrete method from Shape
        System.out.println("Area: " + shape1.calculateArea()); // Calls Circle's implementation
        System.out.println("Perimeter: " + shape1.calculatePerimeter()); // Calls Circle's implementation

        System.out.println("\nRectangle Details:");
        shape2.displayColor(); // Uses concrete method from Shape
        System.out.println("Area: " + shape2.calculateArea()); // Calls Rectangle's implementation
        System.out.println("Perimeter: " + shape2.calculatePerimeter()); // Calls Rectangle's implementation

        // Accessing subclass specific methods (requires casting if using Shape reference)
        // System.out.println("Circle Radius: " + ((Circle)shape1).getRadius()); // Example of casting
    }
}
```

---

### 4. Rules for Abstract Classes and Methods

*   **Abstract Class Instantiation:** You **cannot create an object** of an abstract class using the `new` keyword.
*   **Abstract Method Declaration:** An abstract class can contain both abstract methods and concrete methods.
*   **Abstract Method Implementation:** An abstract method **does not have a body** (no `{}` block). It ends with a semicolon `;`.
*   **Concrete Subclasses:** A concrete (non-abstract) class that extends an abstract class **must implement all abstract methods** inherited from the abstract class.
*   **Abstract Subclasses:** An abstract class that extends another abstract class **is not required to implement** the abstract methods of its parent. It can choose to implement some, all, or none. If it doesn't implement all abstract methods, it must itself be declared as abstract.
*   **`abstract` keyword:** The `abstract` keyword can be applied to classes and methods.
*   **Constructor in Abstract Classes:** Abstract classes can have constructors. These constructors are called when a concrete subclass is instantiated, using the `super()` keyword. They are used to initialize the state inherited from the abstract class.
*   **`abstract` method in concrete class:** You **cannot declare an abstract method inside a concrete class**.

---

### 5. Purpose and Use Cases of Abstract Classes

*   **Framework Development:** Abstract classes are often used to define the structure of a framework, providing common functionalities and defining abstract methods that framework users must implement.
*   **Template Method Pattern:** An abstract class can define a skeleton of an algorithm in an abstract method, deferring some steps to subclasses. This is known as the Template Method pattern.
*   **Code Reusability:** Common methods or variables that are shared by multiple related classes can be placed in an abstract class.
*   **Enforcing a Contract:** Abstract classes ensure that subclasses provide specific functionalities by requiring them to implement abstract methods. This guarantees a certain level of behavior from derived classes.
*   **Polymorphism:** Abstract classes are crucial for achieving polymorphism. You can use a reference of the abstract class type to refer to objects of any of its concrete subclasses, and the appropriate method implementation will be invoked at runtime.

---

### 6. Relationship with Inheritance and Polymorphism

*   **Inheritance:** Abstract classes are a core part of the inheritance mechanism in Java. They define a base class that subclasses inherit from. The `extends` keyword is used to inherit from an abstract class.
*   **Polymorphism:**
    *   When you use a reference of the abstract class type (e.g., `Shape myShape = new Circle(...)`), you can call methods defined in the abstract class.
    *   If a method is abstract, the implementation provided by the *actual object's class* (e.g., `Circle`'s `calculateArea()`) is executed.
    *   If a method is concrete (not abstract) in the abstract class, it can be called directly. Subclasses can also override concrete methods to provide their own specialized behavior.

---

### 7. Important Points to Remember

*   **You cannot instantiate an abstract class.**
*   An abstract class can have both **abstract and concrete methods**.
*   A concrete class that extends an abstract class **must implement ALL inherited abstract methods**.
*   Abstract classes are designed to be **extended**.
*   They are a powerful tool for **code reuse, abstraction, and enforcing contracts**.
*   They are fundamental for achieving **polymorphism**.
*   If a class has even **one abstract method**, it **must be declared abstract**.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of an abstract class in Java?

**Question 2:**
Can you create an object of an abstract class directly? Explain why or why not.

**Question 3:**
What is an abstract method? What are the key characteristics of an abstract method?

**Question 4:**
Consider the following code snippet. What will happen when you try to compile and run it?

```java
abstract class Vehicle {
    public abstract void startEngine();
    public void displayType() {
        System.out.println("This is a vehicle.");
    }
}

class Car extends Vehicle {
    // Missing implementation for startEngine()
}

public class Test {
    public static void main(String[] args) {
        // Car myCar = new Car(); // What happens here?
    }
}
```

**Question 5:**
Write a Java program that defines an abstract class `Animal` with an abstract method `makeSound()` and a concrete method `eat()`. Then, create two concrete subclasses, `Dog` and `Cat`, that extend `Animal` and provide implementations for `makeSound()`. Demonstrate polymorphism by creating an array of `Animal` references holding `Dog` and `Cat` objects and calling their respective methods.

---

### 9. Answers to Practice Questions

**Answer 1:**
The primary purpose of an abstract class is to serve as a blueprint or a base class for other classes. It defines a common interface and can provide common implementations for shared functionalities, while abstract methods define behaviors that must be implemented by its subclasses. It helps in achieving abstraction and code reusability.

**Answer 2:**
No, you cannot create an object of an abstract class directly using the `new` keyword. This is because abstract classes are incomplete by design; they might contain abstract methods without implementation, making them unable to be fully instantiated. They are meant to be extended by concrete subclasses.

**Answer 3:**
An abstract method is a method declared with the `abstract` keyword and has no implementation (no method body). It only specifies the method signature (return type, name, and parameters). Its key characteristics are:
*   Declared using the `abstract` keyword.
*   Does not have a method body (`{}`).
*   Must be declared within an abstract class.
*   Must be implemented by any concrete subclass that inherits it.

**Answer 4:**
When you try to compile this code, you will get a **compile-time error**. The error message will indicate that `Car` is not abstract and does not override abstract method `startEngine()` in `Vehicle`. A concrete class (`Car` in this case) must provide implementations for all abstract methods inherited from its abstract superclass.

**Answer 5:**

```java
// Abstract Class: Animal
abstract class Animal {
    // Abstract method
    public abstract void makeSound();

    // Concrete method
    public void eat() {
        System.out.println("This animal eats food.");
    }
}

// Concrete Subclass: Dog
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof woof!");
    }
}

// Concrete Subclass: Cat
class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

// Main class to demonstrate polymorphism
public class AnimalDemo {
    public static void main(String[] args) {
        // Create an array of Animal references
        Animal[] animals = new Animal[2];

        // Add Dog and Cat objects to the array
        animals[0] = new Dog();
        animals[1] = new Cat();

        // Iterate through the array and call methods
        System.out.println("Demonstrating Polymorphism:");
        for (Animal animal : animals) {
            animal.makeSound(); // Calls the specific makeSound() of Dog or Cat
            animal.eat();       // Calls the common eat() method from Animal
            System.out.println("---");
        }
    }
}
```

---
