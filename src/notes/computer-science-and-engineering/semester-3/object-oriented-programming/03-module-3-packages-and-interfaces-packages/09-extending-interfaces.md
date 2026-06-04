---
title: "extending interface(s)"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acbc"
status: "completed"
scrapedAt: "2026-05-20T16:29:03.525Z"
---
## Object-Oriented Programming: Module 3 - Packages and Interfaces - Extending Interfaces

**Subject:** Object-Oriented Programming
**Module:** Module 3: Packages and Interfaces
**Topic:** Extending Interfaces

**Learning Outcomes:**

*   Understand the concept of interface extension.
*   Be able to create new interfaces that inherit from existing interfaces.
*   Explain the benefits of interface extension (code reusability, polymorphism, and abstraction).
*   Implement classes that implement extended interfaces.
*   Differentiate between interface extension and class inheritance.

---

### 1. Introduction to Extending Interfaces

*   **What is Interface Extension?**
    *   Interface extension (also known as interface inheritance) allows you to create a new interface based on an existing interface(s). The new interface *inherits* all the abstract methods declared in the *parent* interface(s) and can declare additional abstract methods of its own.
    *   This promotes code reuse and establishes a "is-a" relationship between interfaces. A derived interface *is-a* specialized version of the base interface.

*   **Key Concept:** An interface can extend one or more interfaces.  This is called multiple interface inheritance.  (Note: Classes in many languages like Java and C# only allow inheritance from one class, but they can implement multiple interfaces.)

### 2. Syntax for Extending Interfaces

*   **General Form:**

    ```java
    interface ParentInterface {
        // Abstract methods
    }

    interface ChildInterface extends ParentInterface {
        // Abstract methods specific to ChildInterface
    }
    ```

    *   The `extends` keyword is used to indicate that `ChildInterface` is extending `ParentInterface`.
    *   `ChildInterface` now contains all the abstract methods declared in `ParentInterface` in addition to any methods declared in `ChildInterface` itself.

*   **Multiple Interface Inheritance:**

    ```java
    interface InterfaceA {
        // Abstract methods
    }

    interface InterfaceB {
        // Abstract methods
    }

    interface InterfaceC extends InterfaceA, InterfaceB {
        // Abstract methods
    }
    ```

    *   `InterfaceC` now contains all the abstract methods declared in both `InterfaceA` and `InterfaceB`, as well as its own.

*   **Important Note:** If multiple interfaces have methods with the same name and signature, the extending interface must handle this situation either by ignoring it (if it serves the purpose of both interfaces), or by potentially overriding the method (effectively implementing it in the extending interface, although the concept of "overriding" isn't exactly the right term for interfaces as they don't have implementations themselves).  In many languages, if methods conflict, the extending interface would have to resolve the naming conflict.

### 3. Benefits of Interface Extension

*   **Code Reusability:**
    *   Avoids duplicating common method signatures in multiple interfaces.  Define common functionality in a parent interface and reuse it in several child interfaces.
*   **Polymorphism:**
    *   Allows objects of classes that implement child interfaces to be treated as objects of the parent interface type.  This enables flexibility and generic programming.
*   **Abstraction:**
    *   Provides a higher level of abstraction by defining a common set of behaviors that are guaranteed to be implemented by all classes that implement the child interface.  The specific details of implementation are left to the implementing classes.
*   **Improved Design and Maintainability:**
    *   Facilitates better organization and modularization of code. Changes to the parent interface are automatically reflected in child interfaces, simplifying maintenance.

### 4. Implementing Extended Interfaces

*   **Key Concept:** A class implementing an extended interface must provide implementations for *all* abstract methods defined in the extended interface, including those inherited from parent interfaces.

*   **Example:**

    ```java
    interface Animal {
        void eat();
    }

    interface Pet extends Animal {
        void play();
    }

    class Dog implements Pet {
        @Override
        public void eat() {
            System.out.println("Dog is eating.");
        }

        @Override
        public void play() {
            System.out.println("Dog is playing.");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Dog myDog = new Dog();
            myDog.eat();  // Output: Dog is eating.
            myDog.play(); // Output: Dog is playing.

            Animal myAnimal = myDog; // Polymorphism - Dog can be treated as Animal
            myAnimal.eat(); // Output: Dog is eating.
        }
    }
    ```

    *   In this example, `Dog` implements `Pet`.  Because `Pet` extends `Animal`, `Dog` *must* implement both `eat()` (from `Animal`) and `play()` (from `Pet`).

### 5. Interface Extension vs. Class Inheritance

| Feature           | Interface Extension                                  | Class Inheritance                                     |
| ----------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Purpose           | Defines a contract of methods to be implemented.  | Inherits implementation and state (fields and methods). |
| Implementation    | Only defines abstract methods (no implementation). | Can inherit concrete and abstract methods.           |
| Multiple          | Can extend multiple interfaces (multiple inheritance). | Can inherit from only one class (single inheritance).   |
| "is-a" relationship | Defines a "is-a" relationship at the interface level. | Defines a "is-a" relationship based on implementation.  |
| Flexibility      | More flexible due to multiple inheritance.         | Less flexible due to single inheritance.            |

*   **Key Differences:**

    *   **Implementation:** Interfaces only declare method signatures; classes provide the actual implementation.
    *   **Multiple Inheritance:** Interfaces support multiple inheritance (extending multiple interfaces), whereas many languages (like Java and C#) restrict class inheritance to a single parent class.
    *   **Purpose:**  Interfaces are about defining *what* a class *should* do; classes are about *how* a class *does* it.

### 6. Important Points to Remember

*   Interfaces can extend multiple interfaces.
*   A class implementing an extended interface must implement *all* methods defined in the interface hierarchy.
*   Interface extension promotes code reuse, polymorphism, and abstraction.
*   Interface extension is distinct from class inheritance in terms of implementation and multiple inheritance support.
*   Interfaces provide contracts; classes provide concrete implementations.

### 7. Practice Questions/Exercises

**Question 1:**

Create an interface called `Shape` with a method `double getArea()`.  Then, create interfaces `Resizable` with method `void resize(double factor)` and `Rotatable` with `void rotate(double angle)`. Create a `ResizableShape` interface that extends `Shape` and `Resizable`.  Finally, create a class `Circle` that implements `ResizableShape`. Provide implementations for all required methods.

**Answer:**

```java
interface Shape {
    double getArea();
}

interface Resizable {
    void resize(double factor);
}

interface Rotatable {
    void rotate(double angle);
}

interface ResizableShape extends Shape, Resizable {}

class Circle implements ResizableShape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public void resize(double factor) {
        radius *= factor;
    }

    public double getRadius() {
        return radius;
    }

    public static void main(String[] args) {
        Circle circle = new Circle(5);
        System.out.println("Area: " + circle.getArea()); // Output: Area: 78.53981633974483
        circle.resize(2);
        System.out.println("New Area: " + circle.getArea()); // Output: New Area: 314.1592653589793
    }
}
```

**Question 2:**

Why is interface extension useful in object-oriented programming? Give three benefits.

**Answer:**

1.  **Code Reusability:** It avoids code duplication by inheriting common method signatures.
2.  **Polymorphism:**  It allows treating objects of implementing classes as instances of parent interfaces, enabling flexible and generic code.
3.  **Abstraction:**  It provides a higher level of abstraction, specifying *what* needs to be done without dictating *how* it's implemented.

**Question 3:**

What is the key difference between interface extension and class inheritance regarding multiple inheritance?

**Answer:**

Interfaces can extend multiple interfaces (multiple inheritance), while many languages restrict class inheritance to a single parent class (single inheritance).

**Question 4:**

Consider the following code:

```java
interface Printable {
    void print();
}

interface Scannable {
    void scan();
}

interface Multifunctional extends Printable, Scannable {
    void fax();
}

// Assume a class Printer exists that implements Multifunctional.

//Is the following valid?
Multifunctional multi = new Printer();
Printable printObj = multi;

// If so, what methods are available on printObj?
```

**Answer:**

Yes, the code is valid. Because `Multifunctional extends Printable`, any object implementing `Multifunctional` is also an instance of `Printable`.

On `printObj`, only the `print()` method is directly available without casting. Although `printObj` is *actually* a `Printer` object, it is treated *as* a `Printable` object in this context. To access `scan()` or `fax()`, you'd need to cast `printObj` back to a `Multifunctional` object. For example: `((Multifunctional)printObj).scan();`

---

These notes provide a comprehensive overview of extending interfaces in object-oriented programming.  By understanding the concepts and examples, you should be well-equipped to apply this knowledge in your own projects. Remember to practice implementing extended interfaces to solidify your understanding.
