---
title: "Method Overriding."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe695"
status: "completed"
scrapedAt: "2026-05-23T17:51:40.590Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Core Java Fundamentals

### Topic: Method Overriding

---

### 1. Introduction to Method Overriding

Method overriding is a fundamental concept in Object-Oriented Programming (OOP) that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. It's a key mechanism for achieving polymorphism.

**Key Concepts:**

*   **Polymorphism:** The ability of an object to take on many forms. In the context of method overriding, it means that a method call can behave differently depending on the actual type of the object it's invoked upon. (Related to CO1)
*   **Inheritance:** Method overriding is only possible when a class inherits from another class (a subclass inherits from a superclass).
*   **Runtime Polymorphism (Dynamic Method Dispatch):** The process by which the JVM determines at runtime which method to call based on the actual object type.

**Definition:**

**Method Overriding:** When a subclass has a method with the same name, same parameter list, and same return type as a method in its superclass, it's called method overriding. The subclass provides its own specific implementation for that method.

---

### 2. Rules for Method Overriding

To successfully override a method, the following rules must be followed:

*   **Same Method Name:** The overriding method in the subclass must have the same name as the overridden method in the superclass.
*   **Same Parameter List:** The overriding method must have the same number and types of parameters as the overridden method.
*   **Same Return Type:** The return type of the overriding method must be the same as, or a covariant return type of, the overridden method.
    *   **Covariant Return Type:** If the superclass method returns a reference to a class type, the subclass method can return a reference to a subclass of that class type.
*   **Same Exception Types (or Narrower):** The overriding method cannot throw checked exceptions that are broader than those declared by the overridden method. It can:
    *   Throw the same checked exceptions.
    *   Throw a subclass of those checked exceptions.
    *   Not throw any checked exceptions if the superclass method doesn't.
    *   Throw any unchecked exceptions (like `RuntimeException` or `Error`).
*   **Access Modifiers:** The access modifier of the overriding method cannot be more restrictive than the access modifier of the overridden method.
    *   If the superclass method is `public`, the subclass method can be `public`.
    *   If the superclass method is `protected`, the subclass method can be `protected` or `public`.
    *   If the superclass method is `default` (package-private), the subclass method can be `default` or `public`.
    *   A subclass method cannot be `private` or `protected` if the superclass method is `public` or `protected` respectively.
*   **`static` and `private` Methods:** You **cannot** override `static` or `private` methods.
    *   `static` methods belong to the class, not to any specific object, so they cannot be overridden. Instead, they can be hidden (method hiding).
    *   `private` methods are not inherited, so they cannot be overridden.
*   **`final` Methods:** Methods declared as `final` in the superclass cannot be overridden.

**(Referenced from: Java: The Complete Reference by Herbert Schildt, Chapter 8: Inheritance; Java How to Program by Deitel & Deitel, Chapter 9: Inheritance)**

---

### 3. Why Use Method Overriding?

Method overriding is used to:

*   **Customize Behavior:** Provide a specific implementation for a method in a subclass, tailoring it to the subclass's unique characteristics.
*   **Achieve Polymorphism:** Allow objects of different subclasses to respond to the same method call in their own way. This is crucial for writing flexible and extensible code. (Related to CO1)
*   **Extend Functionality:** Add new behavior to an inherited method without altering the original implementation in the superclass.

---

### 4. Examples of Method Overriding

Let's consider a simple example:

**Scenario:** Representing different types of animals and their sounds.

**Example 1: Basic Method Overriding**

```java
// Superclass
class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

// Subclass 1
class Dog extends Animal {
    @Override // Optional but recommended annotation
    public void makeSound() {
        System.out.println("The dog barks");
    }
}

// Subclass 2
class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows");
    }
}

// Main class to demonstrate
public class AnimalDemo {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myDog = new Dog(); // Dog object referred by Animal reference
        Animal myCat = new Cat(); // Cat object referred by Animal reference

        myAnimal.makeSound(); // Output: The animal makes a sound
        myDog.makeSound();    // Output: The dog barks (Overridden method called)
        myCat.makeSound();    // Output: The cat meows (Overridden method called)
    }
}
```

**Explanation:**

*   The `Animal` class has a `makeSound()` method.
*   The `Dog` and `Cat` classes inherit from `Animal`.
*   Both `Dog` and `Cat` override the `makeSound()` method to provide their specific sounds.
*   In `AnimalDemo`, even though `myDog` and `myCat` are declared as `Animal` references, the JVM calls the `makeSound()` method of the *actual object type* at runtime (Dog or Cat), demonstrating runtime polymorphism.

---

**Example 2: Covariant Return Type**

```java
class Base {
    public Number createObject() {
        return new Integer(10);
    }
}

class Derived extends Base {
    @Override
    public Integer createObject() { // Integer is a subclass of Number
        return new Integer(20);
    }
}

public class CovariantDemo {
    public static void main(String[] args) {
        Base b = new Derived();
        System.out.println(b.createObject()); // Output: 20
    }
}
```

**Explanation:**

*   The `Base` class's `createObject()` returns a `Number`.
*   The `Derived` class's `createObject()` returns an `Integer`. Since `Integer` is a subclass of `Number`, this is a valid covariant return type.

---

**Example 3: Method Overriding with `super` keyword**

The `super` keyword can be used to call the overridden method of the superclass from within the subclass's overriding method. This is useful when you want to extend the functionality of the superclass method rather than completely replacing it.

```java
class Vehicle {
    public void displayInfo() {
        System.out.println("This is a generic vehicle.");
    }
}

class Car extends Vehicle {
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call the superclass's displayInfo()
        System.out.println("This is specifically a car.");
    }
}

public class SuperDemo {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.displayInfo();
    }
}
```

**Output:**

```
This is a generic vehicle.
This is specifically a car.
```

---

### 5. Method Overriding vs. Method Overloading

It's important to distinguish method overriding from method overloading.

| Feature          | Method Overriding                                     | Method Overloading                                         |
| :--------------- | :---------------------------------------------------- | :--------------------------------------------------------- |
| **Relationship** | Subclass provides a different implementation of a method inherited from a superclass. | Multiple methods with the same name within the same class. |
| **Method Signature** | Same method name, same parameter list, same return type (or covariant). | Same method name, **different** parameter list. Return type can be the same or different. |
| **Inheritance**  | Requires inheritance.                                 | Does not require inheritance.                              |
| **Polymorphism** | Achieves runtime polymorphism (dynamic method dispatch). | Achieves compile-time polymorphism (static polymorphism).  |
| **Access Modifier** | Cannot be more restrictive than the superclass method. | No restrictions related to access modifiers.               |
| **`static` Methods** | Cannot override `static` methods.                   | `static` methods can be overloaded.                        |
| **`private` Methods** | Cannot override `private` methods.                  | `private` methods can be overloaded.                       |
| **`final` Methods** | Cannot override `final` methods.                    | `final` methods can be overloaded.                         |

**(Referenced from: Fundamentals of Software Engineering by Rajib Mall, Chapter on Object-Oriented Programming; Java in A Nutshell by David Flanagan, Chapter 3: Classes and Objects)**

---

### 6. `instanceof` Operator

The `instanceof` operator is often used in conjunction with method overriding to check the actual type of an object at runtime, especially when dealing with polymorphic references.

**Syntax:** `object instanceof ClassName`

It returns `true` if the `object` is an instance of `ClassName` or an instance of a subclass of `ClassName`.

```java
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

public class InstanceofDemo {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        Animal myAnimal = new Animal();

        System.out.println(myDog instanceof Dog);     // true
        System.out.println(myDog instanceof Animal);  // true (because Dog IS-A Animal)
        System.out.println(myCat instanceof Dog);     // false
        System.out.println(myAnimal instanceof Dog);  // false

        if (myDog instanceof Dog) {
            Dog d = (Dog) myDog; // Type casting
            System.out.println("It's a Dog!");
        }
    }
}
```

**(Related to CO1, CO2)**

---

### 7. `@Override` Annotation

The `@Override` annotation is a directive that indicates that a method declaration is intended to override a method declaration from a superclass.

**Benefits:**

*   **Compile-time Error Checking:** The compiler will generate an error if the method does not actually override a superclass method (e.g., due to a typo in the method name or parameter list). This helps catch potential bugs early.
*   **Readability:** Makes the code more readable by clearly indicating the intention to override.

```java
class Parent {
    public void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    @Override // If Parent.display() did not exist or signature was different, compiler error would occur
    public void display() {
        System.out.println("Child display");
    }
}
```

**(Related to CO1, CO2)**

---

### 8. Important Points to Remember

*   Method overriding is a core mechanism for achieving **runtime polymorphism**.
*   The method signature (name and parameters) must be the same in the overriding and overridden methods.
*   Return types must be the same or covariant.
*   Checked exceptions thrown by the overriding method cannot be broader than those declared by the overridden method.
*   Access modifiers cannot be more restrictive in the overriding method.
*   `static` and `private` methods cannot be overridden.
*   `final` methods cannot be overridden.
*   Use the `@Override` annotation for better code clarity and compile-time error checking.
*   The `super` keyword is used to call the superclass's version of an overridden method.

---

### 9. Practice Questions and Exercises

**Question 1:**

What is method overriding, and what is its primary purpose in OOP?

**Answer:** Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass. Its primary purpose is to achieve runtime polymorphism, enabling objects of different subclasses to respond to the same method call in their own distinct ways.

**Question 2:**

Identify the correct statements regarding method overriding:
a) The overriding method must have the same name and return type as the overridden method.
b) The overriding method can throw any checked exception.
c) The overriding method must have the same parameter list as the overridden method.
d) The overriding method can have a more restrictive access modifier than the overridden method.

**Answer:** c) The overriding method must have the same parameter list as the overridden method.

*   **Explanation:**
    *   a) is partially incorrect; return types can be covariant.
    *   b) is incorrect; it can only throw the same or narrower checked exceptions.
    *   d) is incorrect; it cannot have a more restrictive access modifier.

**Question 3:**

Can you override a `static` method in Java? Explain why or why not.

**Answer:** No, you cannot override a `static` method in Java. `static` methods are associated with the class itself, not with individual objects. When you declare a `static` method in a subclass with the same signature as a `static` method in the superclass, it's known as "method hiding," not overriding. The method called depends on the reference type at compile time, not the object type at runtime.

**Question 4:**

Write a Java code snippet demonstrating method overriding where a subclass uses the `super` keyword to call the superclass's method.

**Answer:**

```java
class Shape {
    public void draw() {
        System.out.println("Drawing a generic shape.");
    }
}

class Circle extends Shape {
    @Override
    public void draw() {
        super.draw(); // Call the draw() method of the Shape class
        System.out.println("Drawing a circle.");
    }
}

public class OverrideSuperDemo {
    public static void main(String[] args) {
        Circle c = new Circle();
        c.draw();
    }
}
```

**Question 5:**

Explain the difference between method overriding and method overloading with a simple example for each.

**Answer:**

**Method Overriding:**
*   **Concept:** Subclass provides its own implementation of a method already present in its superclass.
*   **Example:**
    ```java
    class Vehicle {
        public void move() { System.out.println("Vehicle moves."); }
    }
    class Car extends Vehicle {
        @Override
        public void move() { System.out.println("Car drives."); } // Overriding
    }
    ```

**Method Overloading:**
*   **Concept:** Multiple methods with the same name in the same class, but with different parameter lists.
*   **Example:**
    ```java
    class Calculator {
        public int add(int a, int b) { return a + b; }
        public double add(double a, double b) { return a + b; } // Overloading
    }
    ```

**Question 6:**

What is the significance of the `@Override` annotation?

**Answer:** The `@Override` annotation tells the compiler that the method is intended to override a method from a superclass. This allows the compiler to catch errors if the method signature doesn't match any superclass method (e.g., due to typos), preventing potential bugs and improving code maintainability.

---

### 10. Alignment with Course Outcomes

*   **CO1:** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism and to illustrate it using UML diagrams.
    *   Method overriding is a direct application of **inheritance** and **polymorphism**. Understanding overriding helps in illustrating how different object types can respond to the same method call (polymorphism) inherited from a common superclass. (K2)
*   **CO2:** Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.
    *   Method overriding involves understanding method signatures, return types, parameters, and how to use the `super` keyword and `instanceof` operator. This directly relates to utilizing class and object concepts to develop programs. (K3)
*   **CO3:** Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files.
    *   While not the primary focus, method overriding needs to consider how exceptions are handled and propagated. The rules regarding throwing exceptions in overridden methods contribute to writing robust programs. (K3 - indirectly)

---

This study guide covers the essential aspects of method overriding within Module 2 of Object-Oriented Programming, focusing on its definition, rules, purpose, examples, and its relationship with other OOP concepts and Java language features.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
