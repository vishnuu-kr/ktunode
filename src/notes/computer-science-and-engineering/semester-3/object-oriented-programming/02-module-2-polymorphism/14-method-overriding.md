---
title: "Method Overriding"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acb0"
status: "completed"
scrapedAt: "2026-05-20T16:28:52.111Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 2: Polymorphism - Method Overriding

## Introduction

This module delves into Method Overriding, a core concept within Polymorphism in Object-Oriented Programming (OOP). Method Overriding enables subclasses to provide specific implementations of methods already defined in their superclasses.

## Learning Outcomes

By the end of this topic, you will be able to:

*   Define method overriding.
*   Explain the difference between method overriding and method overloading.
*   Implement method overriding in various scenarios.
*   Understand the role of method overriding in achieving polymorphism.
*   Recognize the uses and benefits of method overriding in software development.
*   Identify situations where method overriding is appropriate.

## 1. Key Concepts and Definitions

*   **Method Overriding:**  A feature in OOP where a subclass provides a specific implementation for a method that is already defined in its superclass. The subclass's method has the *same name, same parameters (number and type), and same return type* as the superclass's method.

*   **Superclass (Parent Class):** The class whose properties and methods are inherited by another class (subclass).

*   **Subclass (Child Class):** The class that inherits properties and methods from a superclass. It can add its own attributes and methods, and also override methods inherited from the superclass.

*   **Inheritance:** The mechanism by which a subclass acquires the properties and behaviors (methods) of a superclass.

*   **Polymorphism:** The ability of an object to take on many forms. In the context of method overriding, polymorphism allows different classes to implement the same method name in their own way.

*   **`@Override` Annotation (in languages like Java):** An optional annotation that explicitly declares that a method is meant to override a method in its superclass.  Using this annotation enables the compiler to check if the method is indeed overriding a method in the superclass and catch errors if it doesn't.

## 2. Method Overriding vs. Method Overloading

It's crucial to distinguish between method overriding and method overloading:

| Feature         | Method Overriding                                   | Method Overloading                                      |
|-----------------|----------------------------------------------------|-------------------------------------------------------|
| **Definition**  | Providing a new implementation in a subclass for a method inherited from the superclass. | Defining multiple methods in the same class with the same name but different parameters. |
| **Class Scope** | Occurs across different classes (superclass and subclass). | Occurs within the same class.                         |
| **Parameters**  | Must have the same method signature (name, parameters, return type). | Must have different method signatures (different number or type of parameters, or both). |
| **Purpose**     | To provide specific behavior in a subclass for a method that already exists in the superclass. | To provide multiple ways to call the same method with different inputs. |
| **Relationship**| Requires inheritance.                            | Does not require inheritance.                          |

**Example (Java):**

```java
class Animal {
    public void makeSound() {
        System.out.println("Generic animal sound");
    }
}

class Dog extends Animal {
    @Override // Indicates that this method is overriding the makeSound() method in Animal
    public void makeSound() {
        System.out.println("Woof!"); // Overriding the makeSound method
    }

    //Method Overloading - same method name with different parameters.
    public void makeSound(String sound) {
        System.out.println(sound);
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Dog dog = new Dog();

        animal.makeSound(); // Output: Generic animal sound
        dog.makeSound();    // Output: Woof! (Overridden)
        dog.makeSound("Bark!"); // Output: Bark! (Overloaded)

    }
}
```

## 3. Implementing Method Overriding

Here's a breakdown of implementing method overriding:

1.  **Define a Superclass:** Create a class with methods that you want to potentially override in subclasses.
2.  **Create a Subclass:** Define a class that inherits from the superclass.
3.  **Override the Method:** In the subclass, define a method with the exact same name, parameters (number and type), and return type as the method in the superclass you wish to override.
4.  **Provide a New Implementation:**  Within the subclass's method, write the code that provides the specific behavior for that subclass.

**Example (Python):**

```python
class Shape:
    def area(self):
        return "Area not defined for this shape"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self): # Overriding the area() method
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):  # Overriding the area() method
        return 3.14159 * self.radius * self.radius

# Example usage
shape = Shape()
rectangle = Rectangle(5, 10)
circle = Circle(7)

print(shape.area())     # Output: Area not defined for this shape
print(rectangle.area()) # Output: 50
print(circle.area())    # Output: 153.93791
```

## 4. Role of Method Overriding in Polymorphism

Method overriding is a key enabler of polymorphism. It allows you to treat objects of different classes uniformly while still executing the specific behavior defined in each class. This is achieved through **dynamic binding (or late binding)**, where the method call is resolved at runtime based on the actual object type.

**Example (Java - demonstrating polymorphism):**

```java
class Animal {
    public void makeSound() {
        System.out.println("Generic animal sound");
    }
}

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
        Animal[] animals = new Animal[3];
        animals[0] = new Animal();
        animals[1] = new Dog();
        animals[2] = new Cat();

        for (Animal animal : animals) {
            animal.makeSound(); // Polymorphism in action!  The appropriate makeSound() method is called based on the object's type.
        }
    }
}
```

**Output:**

```
Generic animal sound
Woof!
Meow!
```

In this example, the `makeSound()` method is called on each element of the `animals` array.  Even though they are all declared as `Animal`, the correct `makeSound()` method for each object (`Animal`, `Dog`, `Cat`) is executed. This is polymorphism in action, made possible by method overriding.

## 5. Uses and Benefits of Method Overriding

*   **Code Reusability:**  Subclasses inherit the superclass's functionality, reducing code duplication. Overriding allows customization without rewriting the entire method.
*   **Extensibility:**  Easily extend existing functionality in new subclasses.
*   **Abstraction:**  The superclass defines a general interface (the method signature), while subclasses provide specific implementations, hiding complexity.
*   **Flexibility:**  Allows you to tailor the behavior of inherited methods to suit the specific needs of each subclass.
*   **Maintainability:** Code is more organized and easier to maintain. Changes to the superclass method signature will require corresponding changes in the subclasses that override it, preventing unexpected behavior.

## 6. When to Use Method Overriding

Consider using method overriding when:

*   You want a subclass to provide a specialized implementation of a method already defined in its superclass.
*   The default behavior of a method in the superclass is not suitable for the subclass.
*   You need to add additional functionality to a method while still maintaining some of the core logic from the superclass (you can call the superclass's method within the overriding method using `super` keyword where available).
*   You are designing an abstract class or interface that defines a common set of methods, which subclasses must implement.

## 7. Important Points to Remember

*   The method signature (name, parameters, return type) *must* be identical in both the superclass and subclass for overriding to occur.  If they are different, it's overloading, not overriding.
*   The access modifier of the overriding method in the subclass *cannot* be more restrictive than the access modifier of the method in the superclass. For example, if the superclass method is `protected`, the overriding method in the subclass can be `protected` or `public`, but not `private`.
*   The `@Override` annotation (in languages like Java) is *optional* but *highly recommended*.  It helps prevent errors and improves code readability.
*   Method overriding only applies to instance methods (methods that operate on objects). Static methods cannot be overridden; they can only be hidden (shadowed).
*   A subclass can override methods from multiple levels of inheritance (e.g., a class inheriting from a class that inherits from another class).
*   The `super` keyword (in languages like Java, C#, and Python) allows you to call the overridden method from the superclass within the subclass's method.  This can be useful when you want to extend the functionality of the superclass method without completely replacing it.

## 8. Practice Questions/Exercises

1.  **Question:** What is method overriding?
    *   **Answer:** Method overriding is the process where a subclass provides a specific implementation for a method that is already defined in its superclass.  The method signature (name, parameters, return type) must be the same.

2.  **Question:**  What is the key difference between method overriding and method overloading?
    *   **Answer:** Method overriding occurs across different classes (superclass and subclass) and requires the same method signature. Method overloading occurs within the same class and requires different method signatures (different parameters).

3.  **Exercise:** Create a class `Vehicle` with a method `startEngine()` that prints "Generic vehicle engine starting." Create two subclasses, `Car` and `Motorcycle`, and override the `startEngine()` method in each subclass to print "Car engine starting" and "Motorcycle engine starting," respectively.

    **Answer (Java):**

    ```java
    class Vehicle {
        public void startEngine() {
            System.out.println("Generic vehicle engine starting.");
        }
    }

    class Car extends Vehicle {
        @Override
        public void startEngine() {
            System.out.println("Car engine starting.");
        }
    }

    class Motorcycle extends Vehicle {
        @Override
        public void startEngine() {
            System.out.println("Motorcycle engine starting.");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Vehicle vehicle = new Vehicle();
            Car car = new Car();
            Motorcycle motorcycle = new Motorcycle();

            vehicle.startEngine();    // Output: Generic vehicle engine starting.
            car.startEngine();        // Output: Car engine starting.
            motorcycle.startEngine(); // Output: Motorcycle engine starting.
        }
    }
    ```

4.  **Exercise:** Why is the `@Override` annotation useful?

    *   **Answer:** The `@Override` annotation is useful because it tells the compiler that a method is intended to override a method in the superclass.  The compiler can then check if the method signature is indeed correct (matches a method in the superclass) and generate an error if it isn't.  This helps prevent errors and improve code maintainability.

5. **Question:** Can static methods be overridden? Explain.
    * **Answer:** No, static methods cannot be overridden. They can be hidden (shadowed) in a subclass, but that is different from overriding. Overriding is about providing a different implementation for an *inherited* method. Static methods belong to the class itself, not to instances of the class, so they aren't inherited in the same way. Hiding a static method means that the subclass defines a static method with the same signature, but it doesn't change the behavior of the original static method in the superclass.  When the static method is called using the superclass name, the superclass's method is executed, and when it's called using the subclass name, the subclass's method is executed.

These notes provide a comprehensive overview of method overriding, covering its definition, comparison to overloading, implementation, role in polymorphism, benefits, appropriate use cases, and important considerations.  The examples and practice questions will help solidify your understanding of this crucial OOP concept. Remember to practice implementing method overriding in your own code to fully grasp its power and flexibility.
