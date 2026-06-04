---
title: "Inheritance 
- Super Class"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe691"
status: "completed"
scrapedAt: "2026-05-23T17:51:37.807Z"
---
# Object-Oriented Programming: Module 2 - Core Java Fundamentals

## Topic: Inheritance - The Superclass

### 1. Introduction to Inheritance

Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a new class to inherit properties and behaviors from an existing class. This promotes code reusability, reduces redundancy, and establishes a hierarchical relationship between classes, often referred to as an "is-a" relationship.

**Key Concepts:**

*   **Superclass (Parent Class/Base Class):** The existing class from which properties and behaviors are inherited.
*   **Subclass (Child Class/Derived Class):** The new class that inherits from the superclass.

**Why use Inheritance?**

*   **Code Reusability:** Avoid writing the same code multiple times. Common attributes and methods can be defined in a superclass and reused by multiple subclasses.
*   **Extensibility:** Easily add new features or modify existing ones in subclasses without altering the superclass.
*   **Maintainability:** Changes made to the superclass are automatically reflected in its subclasses, simplifying maintenance.
*   **Polymorphism:** Inheritance is a prerequisite for achieving polymorphism, a key OOP principle. (Related to CO1)

**Reference:**

*   **Java: The Complete Reference (Herbert Schildt):** Emphasizes inheritance as a mechanism for building robust and extensible class hierarchies.
*   **Java How to Program (Deitel & Deitel):** Highlights inheritance as a powerful tool for code sharing and creating specialized versions of classes.

### 2. The `super` Keyword

In Java, the `super` keyword is used within a subclass to refer to members (fields and methods) of its immediate superclass. It's crucial for managing inherited members and for invoking superclass constructors.

**Key Concepts:**

*   **`super.member`:** Used to access a field or call a method of the superclass.
*   **`super()`:** Used to call a constructor of the superclass. This must be the first statement in a subclass constructor.

**When to use `super`:**

*   **Accessing Superclass Members:** When a subclass defines a member with the same name as a superclass member, `super.memberName` is used to access the superclass's member. This is often called **shadowing**.
*   **Calling Superclass Constructors:** Every subclass constructor *must* implicitly or explicitly call a superclass constructor. If not explicitly called, the default no-argument constructor of the superclass is called automatically. However, if the superclass only has parameterized constructors, the subclass *must* explicitly call one using `super()`.

**Example:**

```java
// Superclass
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
        System.out.println("Animal constructor called: " + name);
    }

    void displayInfo() {
        System.out.println("Name: " + name);
    }
}

// Subclass
class Dog extends Animal {
    String breed;

    // Constructor using super() to call the superclass constructor
    Dog(String name, String breed) {
        super(name); // Calls the Animal constructor
        this.breed = breed;
        System.out.println("Dog constructor called: " + breed);
    }

    // Overriding a method (for demonstration, though not strictly needed for super keyword use here)
    // void displayInfo() {
    //     super.displayInfo(); // Call superclass method
    //     System.out.println("Breed: " + breed);
    // }

    void displayDogInfo() {
        super.displayInfo(); // Accessing superclass method explicitly
        System.out.println("Breed: " + breed);
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", "Golden Retriever");
        System.out.println("---");
        myDog.displayDogInfo();
    }
}
```

**Output:**

```
Animal constructor called: Buddy
Dog constructor called: Golden Retriever
---
Name: Buddy
Breed: Golden Retriever
```

**Explanation:**

1.  The `Dog` constructor `Dog(String name, String breed)` calls `super(name)`. This explicitly invokes the `Animal` constructor, initializing the `name` field inherited from `Animal`.
2.  The `displayDogInfo()` method calls `super.displayInfo()` to first print the animal's name (from the superclass) before printing the dog's specific breed.

**Important Points to Remember:**

*   `super()` must be the first statement in a constructor.
*   You can only call one superclass constructor from a subclass constructor.
*   If a superclass has no explicit constructors, a default no-argument constructor is provided by Java. If you define any constructor in the superclass, the default constructor is *not* automatically provided.

### 3. Access Modifiers and Inheritance

Access modifiers (like `public`, `protected`, `private`, default/package-private) play a significant role in how members are inherited and accessed by subclasses.

**Key Concepts:**

*   **`public`:** Accessible from anywhere. Subclasses can always access public members.
*   **`protected`:** Accessible within the same package and by subclasses (even outside the package).
*   **`private`:** Accessible only within the defining class. Subclasses cannot directly access private members. They can be accessed indirectly through public or protected methods of the superclass.
*   **Default (Package-private):** Accessible only within the same package. Subclasses in the same package can access them. Subclasses in different packages cannot.

**Table: Access to Inherited Members**

| Modifier in Superclass | Accessible in Subclass (same package) | Accessible in Subclass (different package) |
| :--------------------- | :-------------------------------------- | :----------------------------------------- |
| `public`               | Yes                                     | Yes                                        |
| `protected`            | Yes                                     | Yes                                        |
| Default                | Yes                                     | No                                         |
| `private`              | No (directly)                           | No (directly)                              |

**Example:**

```java
// Superclass
class Base {
    public String publicVar = "Public";
    protected String protectedVar = "Protected";
    String defaultVar = "Default";
    private String privateVar = "Private";

    public void displayPublic() { System.out.println(publicVar); }
    protected void displayProtected() { System.out.println(protectedVar); }
    void displayDefault() { System.out.println(defaultVar); }
    private void displayPrivate() { System.out.println(privateVar); }

    public void accessAllFromBase() {
        System.out.println("--- Accessing from Base methods ---");
        displayPublic();
        displayProtected();
        displayDefault();
        displayPrivate(); // Private members are accessible within the class
    }
}

// Subclass in the same package
class DerivedSamePackage extends Base {
    void accessFromDerivedSamePackage() {
        System.out.println("\n--- Accessing from DerivedSamePackage ---");
        System.out.println(publicVar);     // Accessible
        System.out.println(protectedVar);  // Accessible
        System.out.println(defaultVar);    // Accessible (same package)
        // System.out.println(privateVar); // Error: privateVar has private access in Base

        displayPublic();     // Accessible
        displayProtected();  // Accessible
        displayDefault();    // Accessible (same package)
        // displayPrivate(); // Error: displayPrivate() has private access in Base

        // To access private members, use public/protected methods of the superclass
        accessAllFromBase(); // Calling a public method of Base
    }
}

// Assume another file for DerivedDifferentPackage in a different package

public class AccessModifierDemo {
    public static void main(String[] args) {
        DerivedSamePackage obj1 = new DerivedSamePackage();
        obj1.accessFromDerivedSamePackage();

        // Accessing Base members directly from main (same package)
        Base baseObj = new Base();
        System.out.println("\n--- Accessing Base members directly from main ---");
        System.out.println(baseObj.publicVar);
        System.out.println(baseObj.protectedVar);
        System.out.println(baseObj.defaultVar);
        // System.out.println(baseObj.privateVar); // Error

        baseObj.accessAllFromBase(); // Public method call is fine
    }
}
```

**Output (for DerivedSamePackage execution):**

```
--- Accessing from Base methods ---
Public
Protected
Default
Private
--- Accessing from DerivedSamePackage ---
Public
Protected
Default
Public
Protected
Default
--- Accessing from Base methods ---
Public
Protected
Default
Private

--- Accessing Base members directly from main ---
Public
Protected
Default
--- Accessing from Base methods ---
Public
Protected
Default
Private
```

**Important Points to Remember:**

*   Private members are not inherited in the sense of direct access. They remain encapsulated within the superclass.
*   `protected` is the most relevant modifier for inheritance across packages, allowing subclasses to access members that are not public but should be available to specialized versions.

### 4. Inheritance and Polymorphism

Inheritance is the foundation for **polymorphism** (many forms) in OOP. Polymorphism allows you to treat objects of derived classes as objects of their superclass type.

**Key Concepts:**

*   **Method Overriding:** A subclass can provide a specific implementation for a method that is already defined in its superclass. The method signature (name, return type, and parameters) must be the same.
*   **Upcasting:** A reference of a superclass type can refer to an object of a subclass.
*   **Runtime Polymorphism (Dynamic Dispatch):** The decision about which method implementation to execute is made at runtime based on the actual type of the object being referred to, not the type of the reference variable.

**Example (Building on the `Animal` and `Dog` classes):**

```java
// Superclass
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    void makeSound() {
        System.out.println("Animal makes a sound.");
    }
}

// Subclass 1
class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    // Method overriding
    @Override // Optional, but good practice to indicate overriding
    void makeSound() {
        System.out.println("Dog barks: Woof!");
    }
}

// Subclass 2
class Cat extends Animal {
    Cat(String name) {
        super(name);
    }

    // Method overriding
    @Override
    void makeSound() {
        System.out.println("Cat meows: Meow!");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        // Using upcasting
        Animal myAnimal1;
        Animal myAnimal2;

        myAnimal1 = new Dog("Buddy");   // Upcasting: Dog object referred by Animal reference
        myAnimal2 = new Cat("Whiskers"); // Upcasting: Cat object referred by Animal reference

        // At runtime, the appropriate makeSound() method is called
        myAnimal1.makeSound(); // Output: Dog barks: Woof!
        myAnimal2.makeSound(); // Output: Cat meows: Meow!

        // Demonstrating overriding with 'super'
        Dog myDog = new Dog("Rex");
        myDog.makeSound(); // Dog specific implementation: Dog barks: Woof!

        // If we wanted to call superclass method within overridden method:
        // In Dog class:
        // @Override
        // void makeSound() {
        //     super.makeSound(); // Calls Animal's makeSound()
        //     System.out.println("It's a happy dog.");
        // }
        // myDog.makeSound(); // Would output: Animal makes a sound. \n It's a happy dog.
    }
}
```

**Explanation:**

1.  `myAnimal1` and `myAnimal2` are declared as `Animal` type references.
2.  They are assigned objects of `Dog` and `Cat` respectively. This is valid because both `Dog` and `Cat` "are" `Animals`.
3.  When `myAnimal1.makeSound()` is called, Java looks at the actual object `myAnimal1` refers to (which is a `Dog`). It finds the overridden `makeSound()` in `Dog` and executes that.
4.  Similarly, `myAnimal2.makeSound()` executes the `Cat`'s `makeSound()`.

**Relation to Course Outcomes:**

*   **CO1:** This directly illustrates the concept of inheritance and polymorphism (K2) and how objects of derived classes can be treated as objects of their superclass. UML diagrams can represent these relationships (e.g., generalization arrows).
*   **CO2:** Utilizes class and object concepts in Java to develop programs demonstrating inheritance.

### 5. Types of Inheritance (Java Perspective)

While OOP languages support various inheritance models, Java primarily supports **Single Inheritance** for classes and **Multiple Inheritance** for interfaces.

*   **Single Inheritance:** A class can inherit from only one superclass.
    *   `class SubClass extends SuperClass { ... }`
*   **Multilevel Inheritance:** A class inherits from another class, which in turn inherits from another class (forming a chain).
    *   `class Grandparent { ... }`
    *   `class Parent extends Grandparent { ... }`
    *   `class Child extends Parent { ... }`
*   **Hierarchical Inheritance:** One superclass can have multiple subclasses.
    *   `class Parent { ... }`
    *   `class Child1 extends Parent { ... }`
    *   `class Child2 extends Parent { ... }`

**Java does NOT support Multiple Inheritance for classes to avoid the "Diamond Problem."**

**The Diamond Problem:**

Consider a scenario where `Class D` inherits from `Class B` and `Class C`, and both `B` and `C` inherit from `Class A`. If `A` has a method `m()`, and both `B` and `C` override `m()`, which version of `m()` should `D` inherit if it calls `m()` without specifying `B.m()` or `C.m()`? This ambiguity is the Diamond Problem.

**Workaround for Multiple Inheritance Features:** Java allows implementing multiple **interfaces**, which can provide a way to achieve similar results without the ambiguity of inheriting concrete implementations. (This will likely be covered in later modules related to Interfaces).

**Reference:**

*   **Fundamentals of Software Engineering (Rajib Mall):** Discusses software design principles including inheritance and its implications on system complexity.
*   **Core Java: An Integrated Approach (Nageswararao R.):** Covers Java's approach to inheritance, including the single inheritance model and the use of interfaces to bridge the gap for multiple inheritance needs.

### 6. Key Takeaways and Best Practices

*   **"Is-A" Relationship:** Ensure that inheritance correctly models an "is-a" relationship between the subclass and superclass. If a subclass is *not* a type of its superclass, consider composition instead.
*   **Favor Composition over Inheritance:** While powerful, overuse of inheritance can lead to tightly coupled code that is difficult to change. Composition (where a class "has-a" relationship with another class) often offers more flexibility.
*   **Use `super` Explicitly:** When calling superclass constructors or accessing shadowed members, use `super` for clarity.
*   **Understand Access Modifiers:** Be mindful of how access modifiers affect inheritance.
*   **Method Overriding:** Use `@Override` annotation to clearly indicate method overriding and help the compiler catch errors.
*   **Design for Extensibility:** Think about how your superclass might be extended in the future.

### 7. Practice Questions and Exercises

**Question 1:**

Consider the following Java code:

```java
class A {
    void display() {
        System.out.println("A");
    }
}

class B extends A {
    void display() {
        System.out.println("B");
    }
}

class C extends B {
    void display() {
        System.out.println("C");
    }
}

public class TestInheritance {
    public static void main(String[] args) {
        A obj = new C(); // What will be printed?
        obj.display();
    }
}
```

**Answer:**

The output will be:
```
C
```
**Explanation:** `obj` is an object of type `C`, even though it's referred to by a reference of type `A`. Due to runtime polymorphism (dynamic dispatch), the `display()` method of the most derived class (`C`) is invoked.

---

**Question 2:**

Write a Java program that demonstrates the use of the `super` keyword to call a superclass constructor and a superclass method.

**Scenario:**
Create a `Vehicle` superclass with a `String model` field and a `displayModel()` method.
Create a `Car` subclass that inherits from `Vehicle`. The `Car` class should have an additional `int year` field. Its constructor should accept `model` and `year`, call the `Vehicle` constructor using `super`, and its `displayDetails()` method should call `super.displayModel()` and then print the `year`.

**Sample Solution:**

```java
// Superclass
class Vehicle {
    String model;

    Vehicle(String model) {
        this.model = model;
        System.out.println("Vehicle constructor called with model: " + model);
    }

    void displayModel() {
        System.out.println("Model: " + model);
    }
}

// Subclass
class Car extends Vehicle {
    int year;

    Car(String model, int year) {
        super(model); // Call Vehicle's constructor
        this.year = year;
        System.out.println("Car constructor called with year: " + year);
    }

    void displayDetails() {
        super.displayModel(); // Call Vehicle's displayModel()
        System.out.println("Year: " + year);
    }
}

public class VehicleDemo {
    public static void main(String[] args) {
        Car myCar = new Car("Sedan", 2023);
        System.out.println("---");
        myCar.displayDetails();
    }
}
```

**Expected Output:**

```
Vehicle constructor called with model: Sedan
Car constructor called with year: 2023
---
Model: Sedan
Year: 2023
```

---

**Question 3:**

Explain the "Diamond Problem" in inheritance and how Java addresses it for classes.

**Answer:**

The Diamond Problem arises in languages that support multiple inheritance of implementation (i.e., inheriting concrete methods from multiple parent classes). If a class `D` inherits from two classes `B` and `C`, and both `B` and `C` inherit from a common superclass `A` which has a method `m()`, there's ambiguity for `D` when it needs to call `m()`. Should it use `B`'s version or `C`'s version?

Java avoids this problem for classes by enforcing **single inheritance** for classes. A Java class can only extend one direct superclass. This means a class cannot inherit implementation from multiple sources directly, eliminating the possibility of the diamond problem for classes. Java provides **interfaces** as a mechanism to achieve similar benefits (like multiple type inheritance and shared contracts), but interfaces by default only declare method signatures, not implementations, thus avoiding the ambiguity.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Knowledge Level K2):** The notes explain the core concepts of inheritance, superclasses, subclasses, and the `super` keyword, providing definitions and examples. The demonstration of polymorphism through inheritance directly supports understanding these OOP concepts.
*   **CO2 (Knowledge Level K3):** The practical Java code examples demonstrate the utilization of data types, object concepts, and class relationships in Java programs that implement inheritance. Students can use these examples as a basis for developing their own programs.

This module lays the groundwork for understanding more advanced OOP concepts like polymorphism and abstract classes, which are crucial for building well-structured and maintainable Java applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
