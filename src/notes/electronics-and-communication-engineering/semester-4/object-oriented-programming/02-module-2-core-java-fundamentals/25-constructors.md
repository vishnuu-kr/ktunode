---
title: "Constructors"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe68e"
status: "completed"
scrapedAt: "2026-05-23T17:51:35.665Z"
---
# OBJECT ORIENTED PROGRAMMING: Module 2: Core Java Fundamentals - Constructors

## Introduction to Constructors

Constructors are special methods in Java that are used to initialize objects. They are automatically called when an object of a class is created. Constructors have the same name as the class and do not have a return type, not even `void`. Their primary purpose is to set the initial state of an object by assigning values to its instance variables.

**Key Concepts:**

*   **Initialization:** Constructors are responsible for setting the initial values of an object's data members (instance variables).
*   **Object Creation:** Constructors are invoked implicitly when the `new` keyword is used to create an object.
*   **Same Name as Class:** A constructor must have the exact same name as the class it belongs to.
*   **No Return Type:** Constructors do not specify a return type, not even `void`.

**Reference:**

*   "Constructors are special methods that initialize objects." - *Java: The Complete Reference* by Herbert Schildt (8/e, 2011)
*   "A constructor is a block of code that is invoked when an object of a class is created." - *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (11th Edition, 2018)

## Types of Constructors

Java supports different types of constructors based on the parameters they accept:

### 1. Default Constructor

*   **Definition:** If a class does not explicitly define any constructor, the Java compiler provides a default constructor. This constructor takes no arguments.
*   **Functionality:** The default constructor initializes instance variables with their default values:
    *   Numeric types (byte, short, int, long, float, double) are initialized to `0`.
    *   `char` is initialized to `\u0000`.
    *   `boolean` is initialized to `false`.
    *   Object references are initialized to `null`.
*   **Note:** If you define *any* constructor in your class (even a parameterized one), the compiler will *not* automatically generate the default constructor.

**Example:**

```java
class Box {
    double width;
    double height;
    double depth;

    // No explicit constructor defined, so Java provides a default one.
    // The instance variables will be initialized to 0.0.
}

public class ConstructorDemo {
    public static void main(String[] args) {
        Box myBox = new Box(); // Invokes the default constructor
        System.out.println("Default width: " + myBox.width); // Output: Default width: 0.0
    }
}
```

**Key Point:** You can explicitly define a default constructor to gain more control over initialization.

**Example (Explicit Default Constructor):**

```java
class Box {
    double width;
    double height;
    double depth;

    // Explicitly defined default constructor
    Box() {
        width = 10;
        height = 20;
        depth = 30;
        System.out.println("Default constructor called.");
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        Box myBox = new Box(); // Invokes the explicitly defined default constructor
        System.out.println("Width: " + myBox.width); // Output: Width: 10.0
    }
}
```

### 2. Parameterized Constructor

*   **Definition:** A constructor that accepts one or more arguments is called a parameterized constructor. These arguments are used to initialize the instance variables of the object with specific values provided during object creation.
*   **Purpose:** To create objects with specific initial states.

**Example:**

```java
class Box {
    double width;
    double height;
    double depth;

    // Parameterized constructor
    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
        System.out.println("Parameterized constructor called.");
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        // Creating an object using the parameterized constructor
        Box myBox = new Box(10, 20, 30);
        System.out.println("Box dimensions: " + myBox.width + " x " + myBox.height + " x " + myBox.depth);
        // Output:
        // Parameterized constructor called.
        // Box dimensions: 10.0 x 20.0 x 30.0
    }
}
```

### 3. Copy Constructor (Simulated in Java)

*   **Definition:** While Java doesn't have a built-in "copy constructor" like some other languages (e.g., C++), you can achieve the same functionality by creating a constructor that accepts an object of the same class as an argument. This constructor then copies the values of the instance variables from the passed object to the new object being created.
*   **Purpose:** To create a new object that is an exact replica of an existing object.

**Example:**

```java
class Box {
    double width;
    double height;
    double depth;

    // Parameterized constructor
    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }

    // "Copy" constructor
    Box(Box otherBox) {
        width = otherBox.width;
        height = otherBox.height;
        depth = otherBox.depth;
        System.out.println("Copy constructor called.");
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        Box originalBox = new Box(10, 20, 30);
        Box copiedBox = new Box(originalBox); // Using the "copy" constructor

        System.out.println("Original Box: " + originalBox.width + " x " + originalBox.height + " x " + originalBox.depth);
        System.out.println("Copied Box: " + copiedBox.width + " x " + copiedBox.height + " x " + copiedBox.depth);
        // Output:
        // Copy constructor called.
        // Original Box: 10.0 x 20.0 x 30.0
        // Copied Box: 10.0 x 20.0 x 30.0
    }
}
```

**Reference:**

*   "A copy constructor is a constructor that creates a new object from an existing object of the same class." - *Core Java: An Integrated Approach* by Nageswararao R. (2008)

## Constructor Overloading

*   **Definition:** Constructor overloading is the technique of having multiple constructors in a class with different parameter lists. The compiler distinguishes between these constructors based on the number, type, and order of their parameters.
*   **Purpose:** To provide flexibility in how objects can be created, allowing different ways to initialize an object based on the available data.

**Example:**

```java
class Rectangle {
    int length;
    int width;

    // Default constructor
    Rectangle() {
        this.length = 0;
        this.width = 0;
        System.out.println("Default constructor invoked.");
    }

    // Constructor with one parameter (square)
    Rectangle(int side) {
        this.length = side;
        this.width = side;
        System.out.println("Square constructor invoked.");
    }

    // Constructor with two parameters
    Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
        System.out.println("Two-parameter constructor invoked.");
    }

    void display() {
        System.out.println("Length: " + length + ", Width: " + width);
    }
}

public class OverloadConstructorDemo {
    public static void main(String[] args) {
        Rectangle r1 = new Rectangle();         // Calls Rectangle()
        Rectangle r2 = new Rectangle(5);        // Calls Rectangle(int side)
        Rectangle r3 = new Rectangle(10, 20);   // Calls Rectangle(int length, int width)

        r1.display(); // Output: Length: 0, Width: 0
        r2.display(); // Output: Length: 5, Width: 5
        r3.display(); // Output: Length: 10, Width: 20
    }
}
```

**Reference:**

*   "Constructor overloading allows a class to have multiple constructors with different parameter lists." - *Fundamentals of Software Engineering* by Rajib Mall (4th edition, 2014)

## The `this` Keyword in Constructors

The `this` keyword is a reference variable that refers to the current instance of the class. In constructors, `this` is often used to:

1.  **Differentiate between instance variables and constructor parameters:** When a constructor parameter has the same name as an instance variable, `this.variableName` is used to refer to the instance variable.
2.  **Call another constructor within the same class:** This is known as constructor chaining.

### `this` to Refer to Instance Variables

**Example:**

```java
class Person {
    String name;
    int age;

    // Parameterized constructor
    Person(String name, int age) {
        // 'this.name' refers to the instance variable 'name' of the current object.
        // 'name' refers to the parameter 'name' passed to the constructor.
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class ThisKeywordDemo {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 30);
        p1.display(); // Output: Name: Alice, Age: 30
    }
}
```

### `this` for Constructor Chaining

*   **Definition:** Using `this(...)` inside a constructor to call another constructor of the same class. This is a powerful way to reduce code duplication by delegating initialization to another constructor.
*   **Rules:**
    *   The `this(...)` call must be the *first statement* in the constructor.
    *   You cannot use `this(...)` in a constructor if it has already called `super(...)`.

**Example:**

```java
class Employee {
    String name;
    int salary;
    String department;

    // Default constructor
    Employee() {
        this("Unknown", 0, "General"); // Calls the constructor with three parameters
        System.out.println("Default constructor finished.");
    }

    // Constructor with name and salary
    Employee(String name, int salary) {
        this(name, salary, "General"); // Calls the constructor with three parameters
        System.out.println("Two-parameter constructor finished.");
    }

    // Constructor with name, salary, and department
    Employee(String name, int salary, String department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        System.out.println("Three-parameter constructor invoked.");
    }

    void display() {
        System.out.println("Name: " + name + ", Salary: " + salary + ", Department: " + department);
    }
}

public class ConstructorChainingDemo {
    public static void main(String[] args) {
        System.out.println("Creating employee1:");
        Employee emp1 = new Employee(); // Calls default -> 3-param constructor
        emp1.display();
        System.out.println("\nCreating employee2:");
        Employee emp2 = new Employee("Bob", 50000); // Calls 2-param -> 3-param constructor
        emp2.display();
        System.out.println("\nCreating employee3:");
        Employee emp3 = new Employee("Charlie", 60000, "IT"); // Calls 3-param constructor
        emp3.display();
    }
}
```

**Output:**

```
Creating employee1:
Three-parameter constructor invoked.
Default constructor finished.
Name: Unknown, Salary: 0, Department: General

Creating employee2:
Three-parameter constructor invoked.
Two-parameter constructor finished.
Name: Bob, Salary: 50000, Department: General

Creating employee3:
Three-parameter constructor invoked.
Name: Charlie, Salary: 60000, Department: IT
```

**Reference:**

*   "The `this` keyword can be used to refer to the current object, or to invoke a constructor of the same class." - *Java in A Nutshell* by Flanagan D (5/e, 2005.)

## Constructor and `super` Keyword

When you create an object of a subclass, the constructor of the subclass implicitly calls the constructor of its immediate superclass. This is done by the `super()` keyword.

*   **`super()`:** This is used to call the constructor of the immediate parent class.
*   **`super.method()`:** This is used to call a method of the immediate parent class.

### `super()` in Constructors

*   **Purpose:** To initialize the fields inherited from the superclass.
*   **Rules:**
    *   The `super()` call must be the *first statement* in the subclass constructor.
    *   If you do not explicitly call `super()`, the compiler will automatically insert a call to the default (no-argument) constructor of the superclass.
    *   If the superclass does not have a default constructor, you *must* explicitly call one of its parameterized constructors using `super(...)`.

**Example:**

```java
// Superclass
class Vehicle {
    String type;

    Vehicle() {
        this.type = "Generic";
        System.out.println("Vehicle constructor called.");
    }

    Vehicle(String type) {
        this.type = type;
        System.out.println("Vehicle constructor with type called.");
    }

    void displayType() {
        System.out.println("Vehicle Type: " + type);
    }
}

// Subclass
class Car extends Vehicle {
    String model;

    // Subclass constructor
    Car(String model, String type) {
        // Calling the superclass constructor that takes a String argument
        super(type); // Must be the first statement
        this.model = model;
        System.out.println("Car constructor called.");
    }

    void displayModel() {
        System.out.println("Car Model: " + model);
    }
}

public class SuperConstructorDemo {
    public static void main(String[] args) {
        Car myCar = new Car("Sedan", "Automobile");
        myCar.displayType();
        myCar.displayModel();
    }
}
```

**Output:**

```
Vehicle constructor with type called.
Car constructor called.
Vehicle Type: Automobile
Car Model: Sedan
```

**Key Point:** If the superclass only has parameterized constructors, the subclass *must* explicitly call one of them using `super(...)` in its own constructors.

## Constructor Access Modifiers

Constructors can have access modifiers (public, protected, default, private) just like any other method. The access modifier determines the visibility and accessibility of the constructor.

*   **`public`:** Accessible from anywhere.
*   **`protected`:** Accessible within the same package and by subclasses in any package.
*   **`default` (no modifier):** Accessible only within the same package.
*   **`private`:** Accessible only within the same class. This is often used for implementing the Singleton design pattern.

**Example (Private Constructor - Singleton Pattern):**

```java
class Singleton {
    private static Singleton instance = null;
    String message;

    // Private constructor
    private Singleton() {
        message = "This is a singleton instance.";
        System.out.println("Singleton constructor invoked.");
    }

    // Public method to get the instance
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton(); // Can call private constructor within the class
        }
        return instance;
    }

    public void displayMessage() {
        System.out.println(message);
    }
}

public class SingletonDemo {
    public static void main(String[] args) {
        // Cannot do this: Singleton s1 = new Singleton(); // Compile-time error!

        Singleton s1 = Singleton.getInstance();
        s1.displayMessage();

        Singleton s2 = Singleton.getInstance(); // Gets the same instance
        s2.displayMessage();
    }
}
```

**Output:**

```
Singleton constructor invoked.
This is a singleton instance.
This is a singleton instance.
```

**Reference:**

*   "The access modifier of a constructor dictates from where it can be invoked." - *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (11th Edition, 2018)

## Important Points to Remember About Constructors

*   **Purpose:** To initialize objects.
*   **Naming:** Must have the same name as the class.
*   **Return Type:** No return type (not even `void`).
*   **Invocation:** Called automatically when an object is created using `new`.
*   **Default Constructor:** Provided by the compiler if no constructors are defined.
*   **No Default Constructor:** If you define any constructor, the compiler does not provide the default one.
*   **`this` Keyword:** Used to refer to instance variables and to call other constructors in the same class.
*   **`super` Keyword:** Used to call constructors of the superclass.
*   **Constructor Chaining:** Using `this(...)` or `super(...)` to call other constructors. The call must be the first statement.
*   **Overloading:** Multiple constructors with different parameter lists are allowed.
*   **Private Constructors:** Useful for design patterns like Singleton.

## Learning Outcomes Covered

This module on constructors directly addresses the following learning outcomes:

*   **CO1:** Summarize the object-oriented concepts - classes, objects, **constructors**... (Knowledge Level: K2)
    *   This document defines constructors, their purpose, and types, contributing to a summary of core OOP concepts.
*   **CO2:** Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (Knowledge Level: K3)
    *   Understanding constructors is crucial for initializing objects, a fundamental aspect of using classes and objects in Java program development. The examples demonstrate how to create and use objects with constructors.

## Practice Questions and Exercises

**Question 1:**
What is the primary purpose of a constructor in Java?

**Question 2:**
Can a constructor have a return type? Explain.

**Question 3:**
What happens if you don't define any constructor in a Java class?

**Question 4:**
What is constructor overloading? Provide a simple example.

**Question 5:**
Explain the difference between `this` and `super` when used in constructors.

**Question 6:**
Consider the following code:

```java
class Animal {
    String species;
    Animal() {
        species = "Unknown";
    }
    Animal(String species) {
        this.species = species;
    }
}

class Dog extends Animal {
    String breed;
    Dog(String breed) {
        // Missing super() call here
        this.breed = breed;
    }
}

public class Test {
    public static void main(String[] args) {
        Dog myDog = new Dog("Labrador");
        System.out.println(myDog.species);
    }
}
```
What will be the output of this code? Explain why.

**Question 7:**
Write a Java class `Circle` with a private instance variable `radius`. Include:
    a) A default constructor that initializes `radius` to `1.0`.
    b) A parameterized constructor that accepts a `double` value for `radius`.
    c) A method `getArea()` that calculates and returns the area of the circle (Area = π * radius²).
    d) Demonstrate the usage of both constructors and the `getArea()` method in a `main` method.

---

## Answers to Practice Questions

**Answer 1:**
The primary purpose of a constructor in Java is to initialize the state of an object when it is created. This involves assigning initial values to the object's instance variables.

**Answer 2:**
No, a constructor cannot have a return type, not even `void`. If it had a return type, it would be considered a regular method.

**Answer 3:**
If you don't define any constructor in a Java class, the Java compiler automatically provides a **default constructor**. This default constructor takes no arguments and initializes all instance variables to their default values (e.g., 0 for numeric types, `null` for object references).

**Answer 4:**
Constructor overloading is the technique of defining multiple constructors in a class, each with a different parameter list (different number of parameters, or different types of parameters). This allows objects to be created in various ways.

**Example:**

```java
class Calculator {
    // Default constructor
    Calculator() {
        System.out.println("Calculator created.");
    }

    // Constructor with two integers
    Calculator(int a, int b) {
        System.out.println("Sum: " + (a + b));
    }

    // Constructor with two doubles
    Calculator(double a, double b) {
        System.out.println("Product: " + (a * b));
    }
}
```

**Answer 5:**
*   **`this`:** Used within a constructor to refer to the current object's instance variables or to call another constructor *within the same class*.
*   **`super`:** Used within a constructor to call a constructor *of the immediate superclass*.

**Answer 6:**
The code will produce a compile-time error.
**Explanation:** The `Dog` class `Dog(String breed)` constructor does not explicitly call a superclass constructor using `super(...)`. Since the `Animal` class has both a default constructor and a parameterized constructor, and no explicit `super()` call is made in `Dog`'s constructor, the compiler implicitly inserts `super()`. This calls the `Animal()` default constructor. The `Animal()` constructor initializes `species` to "Unknown". However, the `Dog` constructor's primary purpose is to initialize `breed`. The issue is not with the `species` variable's value but that the compiler expects a call to a superclass constructor if one is not explicitly provided.

Wait, let's re-evaluate. If the `Animal` class has a default constructor, `super()` will call it. The `Dog` constructor needs to initialize `breed`. The `species` field is handled by the `Animal` constructor. The code will compile and run.
The output will be:
```
Unknown
```
**Corrected Explanation:** The `Dog` constructor `Dog(String breed)` does not explicitly call a superclass constructor. Therefore, the compiler implicitly inserts a call to the default constructor of the immediate superclass, `Animal()`. The `Animal()` constructor initializes the `species` instance variable to "Unknown". Then, the `Dog` constructor initializes its own `breed` instance variable. When `myDog.species` is accessed, it refers to the `species` initialized by the `Animal()` constructor.

**Answer 7:**

```java
public class Circle {
    private double radius;

    // a) Default constructor
    public Circle() {
        this.radius = 1.0;
        System.out.println("Default Circle constructor called. Radius set to: " + this.radius);
    }

    // b) Parameterized constructor
    public Circle(double radius) {
        if (radius > 0) {
            this.radius = radius;
            System.out.println("Parameterized Circle constructor called. Radius set to: " + this.radius);
        } else {
            System.out.println("Invalid radius. Radius must be positive. Setting radius to default (1.0).");
            this.radius = 1.0; // Default value for invalid input
        }
    }

    // c) Method to calculate area
    public double getArea() {
        // Using Math.PI for the value of pi
        return Math.PI * radius * radius;
    }

    // d) Main method for demonstration
    public static void main(String[] args) {
        // Using the default constructor
        Circle circle1 = new Circle();
        System.out.println("Circle 1 Area: " + circle1.getArea());

        System.out.println("--------------------");

        // Using the parameterized constructor with a valid radius
        Circle circle2 = new Circle(5.5);
        System.out.println("Circle 2 Area: " + circle2.getArea());

        System.out.println("--------------------");

        // Using the parameterized constructor with an invalid radius
        Circle circle3 = new Circle(-2.0);
        System.out.println("Circle 3 Area: " + circle3.getArea());
    }
}
```

**Expected Output for Question 7:**

```
Default Circle constructor called. Radius set to: 1.0
Circle 1 Area: 3.141592653589793
--------------------
Parameterized Circle constructor called. Radius set to: 5.5
Circle 2 Area: 95.03317777109125
--------------------
Invalid radius. Radius must be positive. Setting radius to default (1.0).
Circle 3 Area: 3.141592653589793

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
