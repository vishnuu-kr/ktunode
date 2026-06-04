---
title: "Dynamic Method Dispatch"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfab"
status: "completed"
scrapedAt: "2026-05-20T16:56:14.924Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Polymorphism

### Topic: Dynamic Method Dispatch

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of dynamic method dispatch:** Explain what it means for a method call to be resolved at runtime.
*   **Identify the role of runtime type in method invocation:** Recognize how the actual type of an object determines which method implementation is executed.
*   **Differentiate between static and dynamic method dispatch:** Contrast the mechanisms and timing of method calls in each scenario.
*   **Explain how inheritance and method overriding enable dynamic method dispatch:** Understand the fundamental principles that make this feature possible.
*   **Appreciate the benefits and use cases of dynamic method dispatch:** Recognize its importance in building flexible and extensible OOP systems.

---

### 1. Introduction to Dynamic Method Dispatch

Dynamic Method Dispatch (DMD), also known as runtime method dispatch or late binding, is a core concept in Object-Oriented Programming (OOP) that allows the specific method implementation to be determined at **runtime** rather than at compile time.

**Key Concept:** The decision of which method to execute is made based on the **actual type of the object** that the method is being called on, not the type of the reference variable that points to the object.

---

### 2. The Role of Runtime Type

The "runtime type" refers to the actual class of the object that an instance variable is currently holding.

*   **Compile-time:** The compiler only knows the type of the reference variable. It might see `Animal myAnimal = new Dog();` and only knows that `myAnimal` is of type `Animal`.
*   **Runtime:** When the program executes `myAnimal.makeSound();`, the system looks at the actual object `myAnimal` is pointing to. If it's a `Dog` object, the `Dog`'s `makeSound()` method will be called. If it were a `Cat` object, the `Cat`'s `makeSound()` method would be called.

---

### 3. Static vs. Dynamic Method Dispatch

Understanding the difference between these two is crucial for grasping DMD.

#### 3.1. Static Method Dispatch (Early Binding)

*   **Mechanism:** The method call is resolved at **compile time**.
*   **Basis:** The decision is based on the **declared type of the reference variable**.
*   **Examples:**
    *   Calling **static methods**: Static methods belong to the class itself, not to any specific instance. Their invocation is always resolved at compile time.
    *   Calling **private methods**: Private methods are not accessible outside the class, so their calls are also resolved at compile time within the class.
    *   Calling **final methods** (in Java): Final methods cannot be overridden, so their calls are also bound at compile time.
    *   **Method overloading**: When multiple methods have the same name but different parameter lists, the compiler determines which method to call based on the arguments provided at compile time.

#### 3.2. Dynamic Method Dispatch (Late Binding)

*   **Mechanism:** The method call is resolved at **runtime**.
*   **Basis:** The decision is based on the **actual type (runtime type) of the object** being referenced.
*   **Prerequisites:**
    *   **Inheritance:** A subclass inherits methods from its superclass.
    *   **Method Overriding:** A subclass provides its own specific implementation of a method that is already defined in its superclass.
*   **Key Feature:** This is the foundation of **polymorphism** in action.

---

### 4. How Inheritance and Method Overriding Enable DMD

**Inheritance** provides the mechanism for creating a hierarchy of classes, where a subclass can inherit properties and behaviors from a superclass. **Method Overriding** allows a subclass to provide a specialized implementation for a method inherited from its superclass.

**The Connection:**

1.  A superclass defines a method.
2.  A subclass inherits this method.
3.  The subclass *overrides* this method, providing its unique implementation.
4.  When a reference of the superclass type points to an object of the subclass type, and the overridden method is called through that reference, DMD ensures that the subclass's version of the method is executed.

---

### 5. Example Scenario: Shapes

Let's illustrate DMD with a common example: Shapes.

**Code Structure (Conceptual - Java-like syntax for clarity):**

```java
// Superclass
class Shape {
    void draw() {
        System.out.println("Drawing a generic shape");
    }
}

// Subclass 1
class Circle extends Shape {
    @Override // Annotation indicating overriding (optional but good practice)
    void draw() {
        System.out.println("Drawing a circle");
    }
}

// Subclass 2
class Square extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a square");
    }
}

// Main program
public class Main {
    public static void main(String[] args) {
        // Reference of superclass type
        Shape myShape;

        // Assigning a Circle object
        myShape = new Circle();
        myShape.draw(); // Output: Drawing a circle (DMD in action)

        // Assigning a Square object
        myShape = new Square();
        myShape.draw(); // Output: Drawing a square (DMD in action)

        // Assigning a generic Shape object (if not abstract)
        // myShape = new Shape();
        // myShape.draw(); // Output: Drawing a generic shape
    }
}
```

**Explanation of the Example:**

*   We have a `Shape` superclass with a `draw()` method.
*   `Circle` and `Square` are subclasses that **override** the `draw()` method.
*   The `myShape` variable is declared as type `Shape`.
*   When `myShape` points to a `Circle` object, calling `myShape.draw()` executes the `draw()` method of `Circle`.
*   When `myShape` points to a `Square` object, calling `myShape.draw()` executes the `draw()` method of `Square`.

**This demonstrates that the `draw()` method call is resolved at runtime based on the actual object type stored in `myShape`.**

---

### 6. Benefits and Use Cases of Dynamic Method Dispatch

DMD is a cornerstone of modern OOP, providing significant advantages:

*   **Flexibility and Extensibility:**
    *   New subclasses can be added without modifying the code that uses the superclass references. For example, if we add a `Triangle` class, the existing `main` method using `Shape` references will automatically work with `Triangle` objects without any code changes in the `main` method.
*   **Code Reusability:**
    *   Generic code can be written that operates on the superclass type, and it will automatically adapt to the specific behaviors of subclasses.
*   **Polymorphism:**
    *   It allows objects of different classes to be treated uniformly through a common interface (the superclass or abstract class).
*   **Framework Development:**
    *   Frameworks often rely heavily on DMD to allow developers to plug in their custom implementations of abstract methods or interfaces.
*   **Event Handling:**
    *   In GUI programming, event handlers are often invoked using DMD. Different components might have different event handling logic, and the correct handler is dispatched at runtime.
*   **Design Patterns:**
    *   Many design patterns, such as Strategy, Template Method, and Visitor, extensively use DMD.

---

### 7. Important Points to Remember:

*   **DMD is about runtime resolution.** This is its defining characteristic.
*   **It applies to instance methods, not static methods.**
*   **Method overriding is essential for DMD.** Without overriding, the superclass's method would always be called.
*   **The type of the reference variable *can* limit what methods are available.** For instance, if `Shape` doesn't have a `getArea()` method, you cannot call `myShape.getArea()` even if `myShape` refers to a `Circle` that *does* have a `getArea()` method (unless you explicitly cast `myShape` to `Circle`).
*   **DMD enables polymorphism.** It's the mechanism that makes "many forms" a reality in OOP.
*   **Performance:** While generally efficient, there's a slight overhead compared to static dispatch due to the runtime lookup. However, this overhead is usually negligible and far outweighed by the flexibility gained.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary characteristic that distinguishes dynamic method dispatch from static method dispatch?

**Question 2:**
List the two key OOP features that are prerequisites for dynamic method dispatch to occur.

**Question 3:**
Consider the following code snippets. Which output would you expect for the `myAnimal.makeSound()` call, and why?

```java
class Animal {
    void makeSound() {
        System.out.println("Generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}

public class Zoo {
    public static void main(String[] args) {
        Animal myAnimal;
        myAnimal = new Dog();
        myAnimal.makeSound();
    }
}
```

**Question 4:**
True or False: Dynamic method dispatch is resolved at compile time.

**Question 5:**
In the context of polymorphism, what role does dynamic method dispatch play?

---

### Answers to Practice Questions

**Answer 1:**
The primary characteristic is that dynamic method dispatch resolves the method call at **runtime** based on the actual type of the object, whereas static method dispatch resolves it at **compile time** based on the declared type of the reference variable.

**Answer 2:**
The two key OOP features are:
1.  **Inheritance**
2.  **Method Overriding**

**Answer 3:**
The expected output is:
```
Woof!
```
**Explanation:**
The `myAnimal` variable is declared as type `Animal`, but it actually holds a `Dog` object at runtime. Since the `Dog` class has overridden the `makeSound()` method, dynamic method dispatch ensures that the `Dog`'s `makeSound()` implementation is executed.

**Answer 4:**
False. Dynamic method dispatch is resolved at **runtime**.

**Answer 5:**
Dynamic method dispatch is the **mechanism** that enables polymorphism. It allows a single interface (defined by the superclass or interface) to represent different underlying behaviors (provided by the subclasses) that are chosen at runtime. This allows code to interact with objects in a generic way, without needing to know their specific types in advance.

---
