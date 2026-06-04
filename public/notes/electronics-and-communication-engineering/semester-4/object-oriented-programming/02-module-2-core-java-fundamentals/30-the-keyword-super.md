---
title: "The Keyword super"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe693"
status: "completed"
scrapedAt: "2026-05-23T17:51:39.236Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Core Java Fundamentals

### Topic: The Keyword `super`

---

### **Learning Outcomes:**

*   Understand the purpose and usage of the `super` keyword in Java.
*   Differentiate between `super` used to refer to parent class members and `super` used to invoke parent class constructors.
*   Apply `super` effectively in the context of inheritance for method overriding and constructor chaining.
*   Recognize potential issues and best practices when using the `super` keyword.

---

### **1. Introduction to `super`**

The `super` keyword in Java is a reference variable that is used to refer to the **immediate parent class object**. It plays a crucial role in inheritance, allowing a subclass to access members (methods and constructors) of its superclass.

**Key Concepts:**

*   **Inheritance:** The mechanism where a new class (subclass or derived class) acquires the properties and behaviors of an existing class (superclass or base class).
*   **Method Overriding:** When a subclass provides a specific implementation for a method that is already defined in its superclass.
*   **Constructor Chaining:** The process of calling one constructor from another constructor within the same class or in the parent class.

**References:**

*   **Schildt, Java: The Complete Reference:** Emphasizes `super` as a means to access inherited members, particularly in method overriding scenarios. (Chapter on Inheritance)
*   **Deitel & Deitel, Java How to Program, Early Objects:** Explains `super` for invoking superclass constructors, crucial for initializing inherited members. (Chapter on Inheritance)

---

### **2. `super` for Referring to Parent Class Members**

When a subclass has a method with the same name as a method in its superclass (method overriding), the `super` keyword can be used to explicitly call the method of the superclass.

**Purpose:**

*   To access a superclass's method when the subclass has overridden it.
*   To extend the functionality of a superclass's method rather than completely replacing it.

**Syntax:**

```java
super.method_name();
```

**Example:**

Let's consider a `Vehicle` class and a `Car` class that inherits from `Vehicle`.

```java
// Superclass
class Vehicle {
    void displayInfo() {
        System.out.println("This is a generic vehicle.");
    }
}

// Subclass
class Car extends Vehicle {
    @Override // Good practice to use @Override annotation
    void displayInfo() {
        // Call the displayInfo() method of the superclass (Vehicle)
        super.displayInfo();
        System.out.println("This is a car.");
    }
}

public class SuperMethodExample {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.displayInfo();
    }
}
```

**Output:**

```
This is a generic vehicle.
This is a car.
```

**Explanation:**

In this example, the `Car` class overrides the `displayInfo()` method. Inside the overridden `displayInfo()` method of `Car`, `super.displayInfo();` is used to call the `displayInfo()` method of its immediate superclass, `Vehicle`. This allows the `Car`'s `displayInfo()` to first execute the `Vehicle`'s version and then add its own specific information.

**Accessing Parent Class Variables:**

You can also use `super` to access public or protected instance variables of the superclass, although this is generally discouraged in favor of using getter methods.

```java
class Parent {
    int x = 10;
}

class Child extends Parent {
    int x = 20;

    void printX() {
        System.out.println("Child's x: " + this.x); // Refers to Child's x
        System.out.println("Parent's x: " + super.x); // Refers to Parent's x
    }
}

public class SuperVariableExample {
    public static void main(String[] args) {
        Child child = new Child();
        child.printX();
    }
}
```

**Output:**

```
Child's x: 20
Parent's x: 10
```

**Important Point to Remember:**

*   `super.member_name` can be used to access both methods and public/protected instance variables of the superclass.
*   You cannot use `super` to access private members of the superclass.

**References:**

*   **Balagurusamy, Programming JAVA a Primer:** Illustrates `super` for method overriding, showing how to extend functionality. (Chapter on Inheritance)
*   **Liang, Introduction to Java Programming:** Provides clear examples of `super` for method calls in subclasses. (Chapter on Inheritance)

---

### **3. `super` for Invoking Parent Class Constructors**

A subclass constructor must call a superclass constructor. If a subclass constructor does not explicitly call a superclass constructor, the Java compiler automatically inserts a call to the default (no-argument) constructor of the superclass as the first statement.

**Purpose:**

*   To ensure that the inherited members of the superclass are properly initialized by the superclass's constructor.
*   To control which superclass constructor is called when creating an object of the subclass.

**Syntax:**

```java
super(argument_list);
```

**Rules for using `super()`:**

1.  `super()` **must** be the first statement in a subclass constructor.
2.  You can call only one superclass constructor from a subclass constructor.
3.  If the superclass has no default constructor, then the subclass **must** explicitly call one of the superclass's parameterized constructors using `super(arguments)`.

**Example 1: Calling the Default Constructor**

```java
// Superclass with a default constructor
class Animal {
    Animal() {
        System.out.println("Animal constructor called.");
    }
}

// Subclass
class Dog extends Animal {
    Dog() {
        // Compiler automatically inserts super(); here if not present
        System.out.println("Dog constructor called.");
    }
}

public class SuperConstructorDefault {
    public static void main(String[] args) {
        Dog myDog = new Dog();
    }
}
```

**Output:**

```
Animal constructor called.
Dog constructor called.
```

**Example 2: Calling a Parameterized Constructor**

```java
// Superclass with a parameterized constructor
class Employee {
    String name;

    Employee(String name) {
        this.name = name;
        System.out.println("Employee constructor called with name: " + this.name);
    }
}

// Subclass
class Manager extends Employee {
    String department;

    Manager(String name, String department) {
        // Call the superclass constructor
        super(name);
        this.department = department;
        System.out.println("Manager constructor called for department: " + this.department);
    }
}

public class SuperConstructorParameterized {
    public static void main(String[] args) {
        Manager mgr = new Manager("Alice", "Sales");
    }
}
```

**Output:**

```
Employee constructor called with name: Alice
Manager constructor called for department: Sales
```

**Example 3: Superclass without a Default Constructor**

If a superclass does not have a default constructor, it is mandatory for the subclass to call one of its parameterized constructors.

```java
// Superclass without a default constructor
class Product {
    int id;

    Product(int id) {
        this.id = id;
        System.out.println("Product constructor called with id: " + this.id);
    }
}

// Subclass
class Book extends Product {
    String title;

    Book(int id, String title) {
        // Must call a superclass constructor
        super(id); // Calling the parameterized constructor of Product
        this.title = title;
        System.out.println("Book constructor called with title: " + this.title);
    }
}

public class SuperConstructorNoDefault {
    public static void main(String[] args) {
        Book myBook = new Book(101, "The Hitchhiker's Guide to the Galaxy");
    }
}
```

**Output:**

```
Product constructor called with id: 101
Book constructor called with title: The Hitchhiker's Guide to the Galaxy
```

**Important Point to Remember:**

*   The call to `super()` (for constructors) must be the very first executable statement in the subclass constructor. This ensures that the superclass part of the object is fully initialized before the subclass part is initialized.

**References:**

*   **Deitel & Deitel, Java How to Program, Early Objects:** Dedicates significant coverage to `super()` for constructor chaining and initialization. (Chapter on Inheritance)
*   **Sierra & Bates, Head First Java:** Uses intuitive analogies to explain how `super()` ensures proper object construction. (Chapter on Inheritance)

---

### **4. `super` Keyword and Constructors with `this` Keyword**

It's important to understand how `super()` and `this()` (used to call constructors within the same class) interact.

*   In a constructor, you can call **either** `super()` **or** `this()`, but **not both**.
*   If neither `super()` nor `this()` is explicitly called, the compiler inserts `super()` by default.

**Example:**

```java
class Base {
    Base(int val) {
        System.out.println("Base constructor with value: " + val);
    }
}

class Derived extends Base {
    String name;

    Derived(int val, String name) {
        super(val); // Call Base constructor
        this.name = name;
        System.out.println("Derived constructor with name: " + name);
    }

    Derived(String name) {
        this(100, name); // Call the other Derived constructor (which calls super)
        System.out.println("Derived constructor called with name only.");
    }
}

public class SuperThisInteraction {
    public static void main(String[] args) {
        Derived d1 = new Derived(50, "Test");
        System.out.println("---");
        Derived d2 = new Derived("Another Test");
    }
}
```

**Output:**

```
Base constructor with value: 50
Derived constructor with name: Test
---
Base constructor with value: 100
Derived constructor with name: Another Test
Derived constructor called with name only.
```

**Explanation:**

*   `Derived(int val, String name)` explicitly calls `super(val)`.
*   `Derived(String name)` calls `this(100, name)`, which then calls `super(100)`. This demonstrates constructor chaining, where `super()` is ultimately invoked.

**Important Point to Remember:**

*   The primary rule: A constructor can invoke either `super()` or `this()`, but not both, and the call must be the first statement.

---

### **5. Common Pitfalls and Best Practices**

**Pitfalls:**

*   **Forgetting to call `super()`:** If the superclass has no default constructor, forgetting to call a parameterized `super()` will lead to a compilation error.
*   **Calling `super()` after other statements:** Violating the "first statement" rule will cause a compilation error.
*   **Attempting to access private members:** `super` cannot bypass encapsulation.
*   **Infinite recursion in constructors:** Incorrectly using `this()` and `super()` can lead to infinite loops.

**Best Practices:**

*   **Use `@Override` annotation:** This helps the compiler verify that you are indeed overriding a superclass method, preventing subtle bugs.
*   **Initialize inherited members in the superclass constructor:** The subclass constructor should call the appropriate superclass constructor to ensure all inherited state is correctly initialized.
*   **Extend, don't just replace:** When overriding methods, consider using `super.method()` to leverage the existing superclass behavior and then add or modify it.
*   **Favor methods over direct variable access:** While `super.variable` is possible for public/protected variables, using `super.getVariable()` is generally better for encapsulation.

---

### **6. Relevance to Course Outcomes**

*   **CO1 (Summarize OO concepts):** Understanding `super` is fundamental to grasping inheritance and polymorphism, as it directly relates to how subclasses interact with their parent classes. `super` is key to explaining how method overriding works and how constructors in a hierarchy are invoked. (Knowledge Level: K2)
*   **CO2 (Utilize Java concepts):** This topic directly addresses how to use `super` in Java code to achieve correct inheritance and constructor chaining when developing programs. Practical application of `super` is essential for building object hierarchies. (Knowledge Level: K3)
*   **CO3 (Robust programs):** Proper use of `super` contributes to writing more robust and maintainable code by ensuring correct initialization and leveraging superclass functionality effectively. (Knowledge Level: K3)

---

### **7. Practice Questions and Exercises**

**Question 1:**

What is the primary purpose of the `super` keyword in Java?

a) To refer to the current object's members.
b) To refer to the immediate parent class object's members.
c) To call a method in a sibling class.
d) To access static members of a class.

**Answer:** b) To refer to the immediate parent class object's members.

---

**Question 2:**

When is it mandatory for a subclass constructor to explicitly call a superclass constructor using `super()`?

a) Always, regardless of whether the superclass has a default constructor.
b) Only when the subclass needs to pass arguments to the superclass constructor.
c) When the superclass does **not** have a default (no-argument) constructor.
d) Never, the compiler always handles it.

**Answer:** c) When the superclass does **not** have a default (no-argument) constructor.

---

**Question 3:**

Consider the following code:

```java
class A {
    void show() {
        System.out.println("Show from A");
    }
}

class B extends A {
    @Override
    void show() {
        System.out.println("Show from B");
        super.show(); // Line X
    }
}

public class Test {
    public static void main(String[] args) {
        B objB = new B();
        objB.show();
    }
}
```

What will be the output of this code?

a)
Show from B

b)
Show from A
Show from B

c)
Show from B
Show from A

d) Compilation Error

**Answer:** c)
Show from B
Show from A

**Explanation:** The `show()` method in `B` is called. It first prints "Show from B". Then, `super.show()` is called, which executes the `show()` method of the superclass `A`, printing "Show from A".

---

**Question 4:**

Can the `super()` constructor call be placed anywhere within the subclass constructor?

a) Yes, it can be anywhere.
b) No, it must be the first executable statement.
c) Yes, but only after variable declarations.
d) No, it can only be called from the `main` method.

**Answer:** b) No, it must be the first executable statement.

---

**Question 5 (Coding Exercise):**

Create two classes, `Shape` and `Circle`.
`Shape` should have a constructor that accepts a `String` representing the name of the shape and prints "Shape constructor called."
`Circle` should inherit from `Shape`, have its own constructor that accepts a `double` for the radius, and call the `Shape` constructor.
The `Circle` constructor should print "Circle constructor called with radius: [radius_value]".

**Solution:**

```java
// Superclass
class Shape {
    String name;

    Shape(String name) {
        this.name = name;
        System.out.println("Shape constructor called.");
    }
}

// Subclass
class Circle extends Shape {
    double radius;

    Circle(double radius) {
        // Call the superclass constructor, passing a name for the shape
        super("Circle");
        this.radius = radius;
        System.out.println("Circle constructor called with radius: " + this.radius);
    }
}

public class ShapeCircleExample {
    public static void main(String[] args) {
        Circle myCircle = new Circle(5.0);
    }
}
```

**Expected Output:**

```
Shape constructor called.
Circle constructor called with radius: 5.0
```

---

### **8. Key Takeaways**

*   `super` is a reference to the immediate parent class object.
*   **Two main uses:**
    *   `super.method()`: To invoke an overridden method of the superclass.
    *   `super(arguments)`: To invoke a constructor of the superclass.
*   `super()` (for constructors) **must** be the first statement in a subclass constructor.
*   You can call either `super()` or `this()` in a constructor, but not both.
*   `super` allows for extending functionality and ensuring proper initialization in inheritance hierarchies.

---
This concludes the study notes for the `super` keyword in Object-Oriented Programming. Remember to practice these concepts by writing your own code examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
