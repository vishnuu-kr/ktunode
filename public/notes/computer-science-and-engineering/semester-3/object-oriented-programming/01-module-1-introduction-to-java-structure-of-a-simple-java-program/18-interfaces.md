---
title: "Interfaces"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac99"
status: "completed"
scrapedAt: "2026-05-20T16:27:09.101Z"
---
# Object Oriented Programming - Module 1: Introduction to Java - Interfaces

## Topic: Interfaces

### Introduction

This module delves into the concept of Interfaces in Java, a crucial element of Object-Oriented Programming (OOP).  Interfaces are a key mechanism for achieving abstraction and defining contracts in Java programs.  They allow for flexible and extensible designs, promoting loose coupling and code reusability.

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   Define what an interface is and its purpose in Java.
*   Explain the differences between interfaces and classes.
*   Declare and implement interfaces.
*   Understand and apply the concept of multiple interface implementation.
*   Recognize the use of default and static methods in interfaces (Java 8+).
*   Comprehend functional interfaces and lambda expressions (Java 8+).
*   Utilize interfaces to achieve abstraction and polymorphism.
*   Understand the concept of marker interfaces.

### Key Concepts and Definitions

*   **Interface:** An interface is a completely abstract class. It's a blueprint for a class that specifies what the class must do. It defines a set of methods that a class implementing the interface *must* implement.  It's a contract defining behavior.

*   **Abstract Method:** A method declared without an implementation (no body). In an interface, all methods are implicitly abstract and public.  (Prior to Java 8).

*   **`implements` Keyword:**  A keyword used to indicate that a class is implementing an interface.  A class *implements* an interface, thereby agreeing to provide concrete implementations for all abstract methods defined in the interface.

*   **Multiple Inheritance (through interfaces):**  Java does not support multiple inheritance of classes.  However, a class *can* implement multiple interfaces. This allows a class to inherit multiple behaviors (contracts).

*   **`default` Methods (Java 8+):** Interfaces can contain default methods, which are methods that *do* have an implementation.  This allows interfaces to evolve without breaking existing implementations.  Default methods provide a default implementation which an implementing class can choose to override or use as-is.

*   **`static` Methods (Java 8+):** Interfaces can also contain static methods, which are associated with the interface itself rather than with any particular instance of a class that implements the interface.  These methods are invoked using the interface name (e.g., `InterfaceName.staticMethod()`).

*   **Functional Interface (Java 8+):** An interface that contains only *one* abstract method. They are also known as Single Abstract Method (SAM) interfaces.  Functional interfaces can be used with lambda expressions and method references.

*   **Lambda Expression (Java 8+):** A short, anonymous function that can be used to implement a functional interface.  It provides a concise way to define a method.

*   **Marker Interface:** An interface that does not contain any methods or fields.  It serves as a marker or tag, providing runtime type information about objects. Examples include `Serializable` and `Cloneable`.

*   **Abstraction:** Hiding the complex implementation details and exposing only essential features to the user. Interfaces are a way to achieve full abstraction.

*   **Polymorphism:** The ability of an object to take on many forms. An interface type variable can refer to any object of a class that implements that interface.

### Differences between Interfaces and Classes

| Feature          | Interface                                                                | Class                                                                   |
| ---------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Instantiation   | Cannot be instantiated (you cannot create an object of an interface).      | Can be instantiated (you can create an object of a class).           |
| Inheritance      | A class can implement multiple interfaces.                               | A class can extend only one class (single inheritance).                   |
| Methods          | All methods are implicitly abstract (prior to Java 8). Default and static methods are allowed in Java 8+.  | Methods can be abstract or concrete.                                    |
| Variables        | Variables are implicitly `public static final` (constants).               | Variables can have different access modifiers and can be mutable.     |
| Purpose          | Defines a contract for classes to adhere to, specifying behavior.        | Represents a blueprint for creating objects with state and behavior.      |

### Declaring and Implementing Interfaces

**Declaration:**

```java
interface MyInterface {
    // Abstract methods
    void method1();
    int method2(String str);

    // Constants (implicitly public static final)
    int MY_CONSTANT = 10;

    // Default method (Java 8+)
    default void defaultMethod() {
        System.out.println("Default method implementation");
    }

    // Static method (Java 8+)
    static void staticMethod() {
        System.out.println("Static method in interface");
    }
}
```

**Implementation:**

```java
class MyClass implements MyInterface {
    @Override
    public void method1() {
        System.out.println("Implementation of method1");
    }

    @Override
    public int method2(String str) {
        System.out.println("Implementation of method2 with string: " + str);
        return str.length();
    }

    // Can override the default method (optional)
    @Override
    public void defaultMethod() {
        System.out.println("Overridden default method");
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.method1();
        int result = obj.method2("Hello");
        System.out.println("Result: " + result);
        obj.defaultMethod();
        MyInterface.staticMethod(); // Calling the static method
    }
}
```

**Explanation:**

*   The `implements` keyword is used to specify that `MyClass` implements the `MyInterface`.
*   `MyClass` must provide concrete implementations for all abstract methods declared in `MyInterface`.  The `@Override` annotation is good practice to ensure you're correctly implementing the interface methods.
*   `MyClass` can choose to override the default method, providing its own implementation.
*   The static method is called using the interface name: `MyInterface.staticMethod()`.

### Multiple Interface Implementation

```java
interface InterfaceA {
    void methodA();
}

interface InterfaceB {
    void methodB();
}

class MyClass implements InterfaceA, InterfaceB {
    @Override
    public void methodA() {
        System.out.println("Implementation of methodA");
    }

    @Override
    public void methodB() {
        System.out.println("Implementation of methodB");
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.methodA();
        obj.methodB();
    }
}
```

**Explanation:**

*   `MyClass` implements both `InterfaceA` and `InterfaceB`.
*   It must provide implementations for all abstract methods declared in *both* interfaces.

### Default and Static Methods in Interfaces (Java 8+)

*   **Default Methods:** Allow adding new functionality to an interface without breaking existing implementations.  Provide a default implementation.

*   **Static Methods:** Associated with the interface itself, not with any particular instance.  Used for utility functions.

See the "Declaring and Implementing Interfaces" section above for examples of default and static methods.

### Functional Interfaces and Lambda Expressions (Java 8+)

```java
@FunctionalInterface
interface MyFunctionalInterface {
    int operation(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        // Lambda expression implementing MyFunctionalInterface
        MyFunctionalInterface adder = (x, y) -> x + y;
        MyFunctionalInterface multiplier = (x,y) -> x * y;

        int sum = adder.operation(5, 3);
        int product = multiplier.operation(5,3);

        System.out.println("Sum: " + sum); // Output: Sum: 8
        System.out.println("Product: " + product); //Output: Product: 15
    }
}
```

**Explanation:**

*   `@FunctionalInterface` annotation is optional, but recommended. It ensures that the interface has only one abstract method.
*   The lambda expression `(x, y) -> x + y` provides an implementation for the `operation` method of `MyFunctionalInterface`.  It takes two integer arguments (`x` and `y`) and returns their sum.
*   This allows a concise way to define behavior without explicitly creating a class.

### Utilizing Interfaces for Abstraction and Polymorphism

```java
interface Animal {
    void makeSound();
}

class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound(); // Output: Woof!
        myCat.makeSound(); // Output: Meow!
    }
}
```

**Explanation:**

*   The `Animal` interface defines a common behavior: `makeSound()`.
*   `Dog` and `Cat` classes implement the `Animal` interface, providing their own specific implementations of `makeSound()`.
*   This demonstrates *polymorphism*. The `Animal` interface type variable can hold objects of different classes (`Dog` and `Cat`).

### Marker Interfaces

```java
import java.io.Serializable;

class MyObject implements Serializable {
    private String data;

    public MyObject(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }
}

public class Main {
    public static void main(String[] args) {
        MyObject obj = new MyObject("Some data");

        // The Serializable interface doesn't have methods.  Its presence
        // simply tells the serialization mechanism that this object can be serialized.

        // In a real application, you would serialize the object to a file
        // or transmit it over a network.
        System.out.println("Object created and marked as Serializable");
    }
}
```

**Explanation:**

*   `Serializable` is a marker interface. It doesn't have any methods.
*   Implementing `Serializable` indicates that an object of `MyObject` can be serialized (converted into a byte stream for storage or transmission). The Java runtime uses reflection to determine the serializability of the object.

### Important Points to Remember

*   Interfaces define a contract; classes that implement interfaces *must* adhere to that contract.
*   Interfaces promote loose coupling, making code more modular and easier to maintain.
*   Interfaces enable multiple inheritance of *behavior* (through multiple interface implementation).
*   `default` and `static` methods (Java 8+) add flexibility to interfaces without breaking existing implementations.
*   Functional interfaces and lambda expressions (Java 8+) provide a concise way to represent single-method interfaces.
*   Marker interfaces provide metadata about objects.

### Practice Questions/Exercises with Answers

**1. What is an interface in Java and what is its purpose?**

*   **Answer:** An interface is a completely abstract class that defines a contract for classes to adhere to. It specifies a set of methods that a class implementing the interface must implement. It's used to achieve abstraction, define behavior, and enable multiple inheritance of behavior.

**2. How do you declare and implement an interface in Java?**

*   **Answer:**
    *   **Declaration:** Use the `interface` keyword to define the interface.
    *   **Implementation:** Use the `implements` keyword in a class to indicate that it implements the interface. The class must provide implementations for all abstract methods declared in the interface.

**3. Can a class implement multiple interfaces? If so, explain how.**

*   **Answer:** Yes, a class can implement multiple interfaces. To do this, list the interfaces separated by commas after the `implements` keyword in the class declaration. The class must provide implementations for all abstract methods declared in all the implemented interfaces.

**4. What are default methods in interfaces (Java 8+) and why are they useful?**

*   **Answer:** Default methods are methods in an interface that have a default implementation. They are useful because they allow you to add new functionality to an interface without breaking existing implementations. Implementing classes can choose to use the default implementation or override it with their own.

**5. What is a functional interface (Java 8+) and how is it related to lambda expressions?**

*   **Answer:** A functional interface is an interface with only one abstract method (SAM - Single Abstract Method). Functional interfaces are used with lambda expressions, providing a concise way to define the implementation of the single abstract method.  A lambda expression can be assigned to a variable of a functional interface type.

**6. Write an interface called `Shape` with an abstract method `calculateArea()`. Create two classes, `Circle` and `Rectangle`, that implement the `Shape` interface and provide implementations for the `calculateArea()` method.**

*   **Answer:**

```java
interface Shape {
    double calculateArea();
}

class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle implements Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double calculateArea() {
        return length * width;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape circle = new Circle(5);
        Shape rectangle = new Rectangle(4, 6);

        System.out.println("Circle area: " + circle.calculateArea());
        System.out.println("Rectangle area: " + rectangle.calculateArea());
    }
}
```

**7. Explain the purpose of marker interfaces and provide an example.**

*   **Answer:**  Marker interfaces are interfaces that do not contain any methods or fields. Their purpose is to provide runtime type information about objects. They act as a marker or tag, indicating that a class possesses a particular characteristic. An example is the `Serializable` interface. Implementing it indicates that the object can be serialized.

**8. (Advanced) What is the difference between `abstract class` and `interface`?**
*   **Answer:**
    *   **Abstraction Level:** Interfaces are *completely* abstract.  Prior to Java 8, they could only contain abstract methods (and constants).  Abstract classes can have both abstract and concrete methods.
    *   **Multiple Inheritance:**  Java does *not* support multiple inheritance of classes.  However, a class can implement multiple interfaces.  This allows for inheritance of multiple behaviors.
    *   **Variables:** Interface variables are implicitly `public static final`.  Abstract classes can have variables with different access modifiers.
    *   **Implementation:** A class *extends* an abstract class.  A class *implements* an interface.
    *   **When to Use:** Use an abstract class when there is a common base implementation for multiple classes. Use an interface when you want to define a contract and enforce that classes implement specific behaviors, even if they don't share a common base implementation.  Interfaces are also appropriate when you want to achieve multiple inheritance of behavior.
