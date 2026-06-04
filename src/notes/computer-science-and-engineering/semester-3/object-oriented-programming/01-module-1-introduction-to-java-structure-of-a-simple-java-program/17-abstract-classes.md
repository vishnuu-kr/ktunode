---
title: "Abstract Classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac98"
status: "completed"
scrapedAt: "2026-05-20T16:27:07.985Z"
---
## Object-Oriented Programming: Abstract Classes (Module 1: Introduction to Java)

**Introduction:**

This module introduces the concept of abstract classes in Java. Abstract classes are a fundamental building block in object-oriented programming, allowing you to define common interfaces and behaviors without providing a complete implementation. They promote code reusability and enable a more flexible and extensible design.

**Learning Outcomes:**

*   Understand the concept of abstract classes and abstract methods.
*   Know when to use abstract classes versus concrete classes.
*   Be able to define and implement abstract classes and abstract methods.
*   Understand the rules for inheritance involving abstract classes.
*   Appreciate the role of abstract classes in achieving abstraction and polymorphism.

**1. Key Concepts and Definitions:**

*   **Abstract Class:** A class that cannot be instantiated.  You cannot create objects directly from an abstract class.  Its purpose is to define a common interface and potentially implement some common behavior for its subclasses. It may contain both abstract and concrete (non-abstract) methods.

*   **Abstract Method:** A method declared without an implementation. It's declared using the `abstract` keyword.  An abstract method has no body (no curly braces `{}`).  Its purpose is to define a method signature that *must* be implemented by any concrete subclass.

*   **Concrete Class:** A class that *can* be instantiated. It provides a complete implementation for all of its methods.

*   **Abstraction:** The process of hiding complex implementation details and exposing only essential information to the user. Abstract classes contribute to abstraction by defining what a class *does* (its interface) without specifying *how* it does it (its implementation).

*   **Inheritance:**  The mechanism by which a class (the subclass or derived class) inherits properties and methods from another class (the superclass or base class). Abstract classes are primarily useful through inheritance.

*   **Polymorphism:** The ability of an object to take on many forms. In the context of abstract classes, polymorphism allows you to treat objects of different concrete subclasses uniformly through a common abstract superclass interface.

**2. When to Use Abstract Classes:**

*   **Defining a Common Interface:**  Use an abstract class when you want to define a general template or blueprint for a set of related classes. This template specifies methods that all subclasses *must* implement.

*   **Enforcing a Specific Structure:**  Use an abstract class to ensure that all subclasses adhere to a specific structure or contract.

*   **Partial Implementation:** Use an abstract class when you want to provide a partial implementation of a class, leaving some methods to be implemented by subclasses. This allows for code reuse while still allowing subclasses to customize specific behaviors.

*   **Representing Abstract Concepts:**  Use an abstract class to represent a concept that is inherently abstract and cannot be instantiated directly. For example, `Shape` could be an abstract class, with concrete subclasses like `Circle`, `Rectangle`, and `Triangle`.

**3. Defining and Implementing Abstract Classes and Methods:**

*   **Declaring an Abstract Class:**

    ```java
    abstract class Animal {
        // Abstract method (no implementation)
        public abstract void makeSound();

        // Concrete method (with implementation)
        public void eat() {
            System.out.println("Animal is eating.");
        }
    }
    ```

    *   The `abstract` keyword is used before the `class` keyword.
    *   The class can contain both abstract and concrete methods.

*   **Declaring an Abstract Method:**

    ```java
    public abstract void makeSound();
    ```

    *   The `abstract` keyword is used before the return type.
    *   The method has no body (no curly braces `{}`). It ends with a semicolon.

*   **Implementing an Abstract Class:**

    ```java
    class Dog extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Woof!");
        }
    }

    class Cat extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Meow!");
        }
    }

    public class Main {
        public static void main(String[] args) {
            //Animal myAnimal = new Animal(); //This will produce error cannot instantiate an abstract class
            Dog myDog = new Dog();
            Cat myCat = new Cat();

            myDog.makeSound(); // Output: Woof!
            myCat.makeSound(); // Output: Meow!

            myDog.eat(); // Output: Animal is eating. (Inherited from Animal)
        }
    }
    ```

    *   A concrete subclass *must* implement all abstract methods of its abstract superclass.
    *   The `@Override` annotation is used to indicate that a method is overriding a method from the superclass.  While not strictly required, it's good practice as it helps the compiler catch errors if the method signature doesn't match the superclass's abstract method.
    *   If a subclass does not implement *all* abstract methods, it *must* also be declared as abstract.

**4. Rules for Inheritance Involving Abstract Classes:**

*   **Inheritance Requirement:**  A concrete class must implement all abstract methods of its abstract superclass (or inherit implementations from its own superclasses).
*   **Abstract Subclasses:** If a subclass does not implement all abstract methods of its abstract superclass, the subclass *must* also be declared as abstract.
*   **Instantiation Prohibition:** You cannot directly instantiate an abstract class using the `new` keyword.  You can only create instances of concrete subclasses.
*   **Reference Variables:** You *can* create reference variables of an abstract class type.  These references can point to instances of concrete subclasses.  This is crucial for polymorphism.

    ```java
    Animal animal1 = new Dog(); // Valid - Animal is abstract, Dog is concrete.
    Animal animal2 = new Cat(); // Valid
    ```

**5. Role of Abstract Classes in Abstraction and Polymorphism:**

*   **Abstraction:** Abstract classes promote abstraction by hiding the specific implementation details of subclasses and exposing only a common interface through abstract methods. The client code interacts with objects through the abstract superclass, without needing to know the specific class of the object.

*   **Polymorphism:** Abstract classes enable polymorphism by allowing you to treat objects of different concrete subclasses uniformly through a common abstract superclass interface.  You can invoke the same method (e.g., `makeSound()`) on different objects (e.g., `Dog` and `Cat`) and get different results, depending on the actual object's class.

    ```java
    public class Main {
        public static void main(String[] args) {
            Animal[] animals = new Animal[2];
            animals[0] = new Dog();
            animals[1] = new Cat();

            for (Animal animal : animals) {
                animal.makeSound(); // Polymorphic call - different output depending on the object
            }
        }
    }

    // Output:
    // Woof!
    // Meow!
    ```

**6. Example Scenario:  A Shape Hierarchy**

Imagine you're building a graphics library. You have different kinds of shapes: circles, rectangles, triangles, etc.

```java
abstract class Shape {
    // Abstract method to calculate area
    public abstract double calculateArea();

    // Concrete method (common to all shapes)
    public void displayColor(String color) {
        System.out.println("The shape is colored: " + color);
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
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

        System.out.println("Circle Area: " + circle.calculateArea());
        System.out.println("Rectangle Area: " + rectangle.calculateArea());

        circle.displayColor("Red");
        rectangle.displayColor("Blue");
    }
}
```

In this example:

*   `Shape` is an abstract class that defines the `calculateArea()` method as abstract (since the area calculation depends on the specific shape).
*   `Shape` also defines the `displayColor()` method as concrete (since displaying the color is a common behavior for all shapes).
*   `Circle` and `Rectangle` are concrete subclasses that implement the `calculateArea()` method.

**7. Important Points to Remember:**

*   Abstract classes cannot be instantiated directly.
*   Abstract methods have no implementation (no body).
*   A concrete subclass must implement all abstract methods of its abstract superclass.
*   If a subclass doesn't implement all abstract methods, it must also be declared abstract.
*   Abstract classes promote abstraction and polymorphism.

**8. Practice Questions/Exercises:**

**Question 1:**

Which of the following statements is true about abstract classes in Java?

a)  Abstract classes can be instantiated directly.
b)  Abstract classes must contain only abstract methods.
c)  Abstract classes can contain both abstract and concrete methods.
d)  Abstract classes are automatically final.

**Answer:** c)

**Question 2:**

Consider the following abstract class:

```java
abstract class Vehicle {
    public abstract void startEngine();
    public abstract void stopEngine();
    public void honk() {
        System.out.println("Honk! Honk!");
    }
}
```

Create a concrete class `Car` that extends `Vehicle` and implements the abstract methods.  The `startEngine()` method should print "Car engine started" and the `stopEngine()` method should print "Car engine stopped".

**Answer:**

```java
class Car extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("Car engine started");
    }

    @Override
    public void stopEngine() {
        System.out.println("Car engine stopped");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.startEngine();
        myCar.honk();
        myCar.stopEngine();
    }
}
```

**Question 3:**

What happens if a subclass of an abstract class does not implement all of the abstract methods inherited from the superclass?

a)  The program will compile and run without errors.
b)  The program will compile, but a runtime error will occur when the subclass is instantiated.
c)  The program will not compile unless the subclass is also declared as abstract.
d)  The program will automatically create default implementations for the missing abstract methods.

**Answer:** c)

**Question 4:**

Explain the role of abstract classes in achieving abstraction and polymorphism. Give an example to illustrate your explanation.

**Answer:**

Abstract classes contribute to abstraction by defining a common interface without providing a complete implementation. Subclasses implement the abstract methods according to their specific needs, hiding the implementation details from the client code. This allows clients to interact with objects through a common abstract superclass, promoting code reusability and flexibility.

Abstract classes enable polymorphism by allowing you to treat objects of different concrete subclasses uniformly. For example, in the `Shape` example, you can have an array of `Shape` objects containing `Circle` and `Rectangle` instances. You can call the `calculateArea()` method on each element of the array, and the correct area calculation will be performed based on the actual type of the object. This ability to treat objects of different types uniformly is a key aspect of polymorphism.

**Conclusion:**

Abstract classes are a powerful tool in object-oriented programming for defining common interfaces, enforcing structure, and achieving abstraction and polymorphism. Understanding abstract classes is essential for designing flexible, reusable, and maintainable code.
