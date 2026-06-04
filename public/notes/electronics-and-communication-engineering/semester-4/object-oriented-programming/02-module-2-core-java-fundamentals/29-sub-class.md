---
title: "Sub Class"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe692"
status: "completed"
scrapedAt: "2026-05-23T17:51:38.525Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Core Java Fundamentals

### Topic: Sub Class

---

### **1. Introduction to Subclasses and Inheritance**

**Learning Outcome:** Understand the fundamental concept of a subclass and its relationship to a superclass.

**Key Concepts:**

*   **Inheritance:** A mechanism in OOP where a new class (subclass or derived class) acquires the properties (fields/attributes) and behaviors (methods) of an existing class (superclass or base class). This promotes code reusability and establishes an "is-a" relationship.
*   **Subclass (Derived Class, Child Class):** The class that inherits from another class. It can access and use the non-private members of its superclass.
*   **Superclass (Base Class, Parent Class):** The class from which another class inherits.
*   **"is-a" Relationship:** A fundamental principle of inheritance. For example, a `Dog` *is a* `Animal`.

**Textbook References:**

*   **Java: The Complete Reference (Schildt, 8/e):** Chapter on Inheritance. Discusses how subclasses extend superclasses and the syntax for doing so.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Chapter on Inheritance. Explains the concept of inheritance, "is-a" relationships, and the `extends` keyword.
*   **Fundamentals of Software Engineering (Mall, 4th ed.):** While not directly about Java syntax, it covers the software engineering principles behind inheritance as a key OOP concept for code organization and reuse.

**Course Outcome Alignment:**

*   **CO1 (K2):** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. This topic directly addresses inheritance.

**Important Points to Remember:**

*   Inheritance allows you to build new classes based on existing ones, avoiding redundant code.
*   A subclass is a specialized version of its superclass.

---

### **2. The `extends` Keyword**

**Learning Outcome:** Apply the `extends` keyword in Java to define a subclass.

**Key Concepts:**

*   **`extends` Keyword:** The reserved keyword in Java used to declare that a class inherits from another class.

**Syntax:**

```java
class SuperclassName {
    // members of the superclass
}

class SubclassName extends SuperclassName {
    // members of the subclass
}
```

**Example:**

```java
// Superclass
class Animal {
    void eat() {
        System.out.println("This animal eats.");
    }
}

// Subclass
class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();  // Inherited method from Animal
        myDog.bark(); // Method of Dog
    }
}
```

**Explanation:**

*   The `Dog` class inherits the `eat()` method from the `Animal` class because it uses `extends Animal`.
*   The `Dog` class also has its own method, `bark()`.
*   An object of `Dog` can call both `eat()` and `bark()`.

**Textbook References:**

*   **Java: The Complete Reference (Schildt, 8/e):** Demonstrates the syntax and usage of `extends`.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Provides clear examples of using `extends` to create subclasses.

**Course Outcome Alignment:**

*   **CO2 (K3):** Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. This involves using `extends` to create classes.

---

### **3. Accessing Superclass Members**

**Learning Outcome:** Explain how subclasses can access members (fields and methods) of their superclass, considering access modifiers.

**Key Concepts:**

*   **Access Modifiers:** `public`, `protected`, `default` (package-private), and `private`.
*   **Accessibility:**
    *   `public` members are accessible from anywhere.
    *   `protected` members are accessible within the same package and by subclasses in different packages.
    *   `default` members are accessible only within the same package.
    *   `private` members are not accessible by subclasses.

**Example:**

```java
class Parent {
    public String publicVar = "Public variable";
    protected String protectedVar = "Protected variable";
    String defaultVar = "Default variable"; // package-private
    private String privateVar = "Private variable";

    public void publicMethod() {
        System.out.println("Public method");
    }

    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    void defaultMethod() {
        System.out.println("Default method");
    }

    private void privateMethod() {
        System.out.println("Private method");
    }

    public void accessPrivate() {
        privateMethod(); // Superclass can access its own private members
        System.out.println("Accessing private from parent: " + privateVar);
    }
}

class Child extends Parent {
    void accessParentMembers() {
        System.out.println("Accessing from Child:");
        System.out.println(publicVar);      // Accessible
        System.out.println(protectedVar);   // Accessible
        System.out.println(defaultVar);     // Accessible (if in same package)
        // System.out.println(privateVar);  // ERROR: privateVar has private access in Parent

        publicMethod();      // Accessible
        protectedMethod();   // Accessible
        defaultMethod();     // Accessible (if in same package)
        // privateMethod();  // ERROR: privateMethod() has private access in Parent

        // To access private members, we need a public/protected method in the superclass
        // accessPrivate(); // Can call the superclass's method that accesses its private members
    }
}

public class AccessModifiersDemo {
    public static void main(String[] args) {
        Child childObj = new Child();
        childObj.accessParentMembers();
        // childObj.privateMethod(); // Error
        // childObj.accessPrivate(); // Can call this if accessParentMembers calls it or directly
    }
}
```

**Textbook References:**

*   **Java: The Complete Reference (Schildt, 8/e):** Detailed explanation of access modifiers and their impact on inheritance.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Covers how access modifiers affect member visibility in subclasses.

**Course Outcome Alignment:**

*   **CO1 (K2):** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. Data hiding (related to `private` members) is crucial here.

**Important Points to Remember:**

*   Subclasses inherit only non-private members.
*   The `protected` modifier is specifically designed for use in inheritance across packages.

---

### **4. The `super` Keyword**

**Learning Outcome:** Utilize the `super` keyword to refer to members of the superclass.

**Key Concepts:**

*   **`super` Keyword:** A reference variable that refers to the immediate superclass of the class it is used in.
*   **Uses of `super`:**
    1.  **Calling Superclass Constructors:** To explicitly call a constructor of the superclass. This is crucial when the superclass has no default constructor or when you need to initialize inherited fields with specific values from the subclass.
    2.  **Accessing Superclass Methods:** To call a method of the superclass that has been overridden in the subclass.
    3.  **Accessing Superclass Fields:** To access a field of the superclass that has the same name as a field in the subclass.

**Syntax:**

```java
// Calling Superclass Constructor
super(arguments);

// Calling Superclass Method
super.method_name(arguments);

// Accessing Superclass Field
super.field_name;
```

**Example:**

```java
class Vehicle {
    String brand;

    Vehicle(String brand) {
        this.brand = brand;
        System.out.println("Vehicle constructor called.");
    }

    void displayInfo() {
        System.out.println("Brand: " + brand);
    }
}

class Car extends Vehicle {
    String model;

    Car(String brand, String model) {
        super(brand); // Call the superclass constructor
        this.model = model;
        System.out.println("Car constructor called.");
    }

    @Override // Good practice to indicate overriding
    void displayInfo() {
        super.displayInfo(); // Call superclass method to display brand
        System.out.println("Model: " + model);
    }

    void honk() {
        System.out.println("The car honks!");
    }
}

public class SuperKeywordDemo {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Camry");
        myCar.displayInfo(); // Calls the overridden displayInfo() in Car
        myCar.honk();
    }
}
```

**Explanation:**

*   In the `Car` constructor, `super(brand)` calls the `Vehicle` constructor to initialize the `brand` field.
*   In `Car`'s `displayInfo()`, `super.displayInfo()` calls `Vehicle`'s `displayInfo()` to print the brand before printing the model.

**Textbook References:**

*   **Java: The Complete Reference (Schildt, 8/e):** Provides a comprehensive section on `super`, explaining its various uses with code examples.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Offers clear illustrations of how to use `super` for constructors and methods, especially in scenarios involving method overriding.
*   **Introduction to Java Programming (Liang, 7/e):** Explains the importance of `super` for constructor chaining.

**Course Outcome Alignment:**

*   **CO1 (K2):** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. This directly relates to constructors and polymorphism (via method overriding).
*   **CO2 (K3):** Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. This involves practical application of `super`.

**Important Points to Remember:**

*   The first statement in a subclass constructor **must** be a call to a superclass constructor (`super(...)` or `this(...)`), if no explicit call is made, Java inserts `super()` implicitly (if a default superclass constructor exists).
*   `super` is used to differentiate between members of the superclass and the subclass when they have the same name.

---

### **5. Constructor Chaining**

**Learning Outcome:** Understand and implement constructor chaining in Java, particularly with multiple levels of inheritance.

**Key Concepts:**

*   **Constructor Chaining:** The process of calling one constructor from another constructor within the same class or from a subclass constructor to a superclass constructor.
*   **`this()`:** Used to call another constructor in the *same* class.
*   **`super()`:** Used to call a constructor in the *immediate superclass*.

**Example with Multiple Inheritance Levels:**

```java
class Grandparent {
    Grandparent(String msg) {
        System.out.println("Grandparent constructor: " + msg);
    }
}

class Parent extends Grandparent {
    Parent(String msg) {
        super(msg); // Calls Grandparent constructor
        System.out.println("Parent constructor: " + msg);
    }
}

class Child extends Parent {
    Child(String msg) {
        super(msg); // Calls Parent constructor, which in turn calls Grandparent
        System.out.println("Child constructor: " + msg);
    }
}

public class ConstructorChainingDemo {
    public static void main(String[] args) {
        Child myChild = new Child("Initializing...");
    }
}
```

**Output:**

```
Grandparent constructor: Initializing...
Parent constructor: Initializing...
Child constructor: Initializing...
```

**Explanation:**

*   When `myChild` is created, `Child`'s constructor calls `Parent`'s constructor using `super("Initializing...")`.
*   `Parent`'s constructor then calls `Grandparent`'s constructor using `super(msg)`.
*   This ensures that all constructors in the inheritance hierarchy are executed in the correct order (from top to bottom).

**Textbook References:**

*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Explains constructor chaining thoroughly with examples.
*   **Introduction to Java Programming (Liang, 7/e):** Dedicates a section to constructor chaining and its importance for object initialization.

**Course Outcome Alignment:**

*   **CO1 (K2):** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. This reinforces the concept of constructors within the context of inheritance.

**Important Points to Remember:**

*   The first statement in a constructor must be a call to another constructor (`this()` or `super()`) or the default `super()` call if no other constructor is called.
*   If a superclass does not have a no-argument constructor, you *must* explicitly call a superclass constructor using `super()` from the subclass constructor.

---

### **6. Method Overriding**

**Learning Outcome:** Implement method overriding in subclasses to provide specific implementations of methods inherited from the superclass.

**Key Concepts:**

*   **Method Overriding:** A feature where a subclass provides a specific implementation for a method that is already defined in its superclass.
*   **Rules for Method Overriding:**
    *   The method in the subclass must have the same name as the method in the superclass.
    *   The method in the subclass must have the same parameter list as the method in the superclass.
    *   The method in the subclass must have the same return type or a covariant return type (a return type that is a subtype of the superclass method's return type).
    *   The method in the subclass cannot have stricter access modifiers than the superclass method (e.g., if the superclass method is `protected`, the subclass method can be `public` or `protected`, but not `private` or `default`).
    *   If a superclass method is declared `final`, it cannot be overridden.
    *   If a superclass method is declared `static`, it cannot be overridden (it can be hidden, which is different).
    *   If a superclass method is declared `private`, it cannot be overridden.
*   **`@Override` Annotation:** A recommended annotation to indicate that a method is intended to override a method from the superclass. It helps the compiler detect errors if the method signature doesn't match the superclass.

**Example (Revisiting `Car` and `Vehicle`):**

```java
class Vehicle {
    void startEngine() {
        System.out.println("Vehicle engine starts generically.");
    }
}

class ElectricCar extends Vehicle {
    @Override
    void startEngine() {
        System.out.println("Electric car engine starts silently.");
    }
}

class PetrolCar extends Vehicle {
    @Override
    void startEngine() {
        System.out.println("Petrol car engine starts with a roar.");
    }
}

public class MethodOverridingDemo {
    public static void main(String[] args) {
        Vehicle myElectricCar = new ElectricCar(); // Polymorphism
        Vehicle myPetrolCar = new PetrolCar();     // Polymorphism

        myElectricCar.startEngine(); // Calls ElectricCar's version
        myPetrolCar.startEngine();   // Calls PetrolCar's version
    }
}
```

**Explanation:**

*   Both `ElectricCar` and `PetrolCar` provide their own specific implementations for the `startEngine()` method inherited from `Vehicle`.
*   When these methods are called on objects of the subclass, the subclass's version is executed.
*   The use of `Vehicle` as the reference type for `myElectricCar` and `myPetrolCar` demonstrates polymorphism, where the actual method called depends on the object's runtime type.

**Textbook References:**

*   **Java: The Complete Reference (Schildt, 8/e):** Thoroughly explains method overriding, including the rules and the `@Override` annotation.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Provides excellent examples and emphasizes the relationship between method overriding and polymorphism.
*   **Head First Java (Sierra, 2/e):** Uses engaging examples to illustrate how subclasses can change the behavior of inherited methods.

**Course Outcome Alignment:**

*   **CO1 (K2):** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. Method overriding is a key mechanism for achieving polymorphism.

**Important Points to Remember:**

*   Method overriding allows for *runtime polymorphism*.
*   The `@Override` annotation is crucial for catching signature mismatches.

---

### **7. Polymorphism (Runtime Polymorphism)**

**Learning Outcome:** Understand how method overriding enables runtime polymorphism.

**Key Concepts:**

*   **Polymorphism:** The ability of an object to take on many forms. In Java, it's primarily achieved through method overriding.
*   **Runtime Polymorphism (Dynamic Method Dispatch):** The process of selecting which overridden method to call at *runtime* rather than at compile time. This is based on the actual type of the object being referred to by a reference variable.

**Example (Building on Method Overriding):**

```java
class Shape {
    void draw() {
        System.out.println("Drawing a generic shape.");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle.");
    }
}

class Square extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a square.");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Shape myShape; // Reference of type Shape

        myShape = new Circle(); // myShape now refers to a Circle object
        myShape.draw();       // Calls Circle's draw()

        myShape = new Square(); // myShape now refers to a Square object
        myShape.draw();       // Calls Square's draw()

        // Example with an array of shapes
        Shape[] shapes = new Shape[2];
        shapes[0] = new Circle();
        shapes[1] = new Square();

        System.out.println("\nDrawing shapes from an array:");
        for (Shape s : shapes) {
            s.draw(); // Polymorphic call
        }
    }
}
```

**Explanation:**

*   A `Shape` reference variable (`myShape`) can point to objects of its subclasses (`Circle`, `Square`).
*   When `myShape.draw()` is called, the JVM determines at runtime which `draw()` method to execute based on the actual object `myShape` is referencing.
*   This allows for writing flexible code that can operate on a collection of objects of different but related types.

**Textbook References:**

*   **Java: The Complete Reference (Schildt, 8/e):** Extensive coverage of polymorphism and dynamic method dispatch.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Explains polymorphism as a fundamental OOP pillar, linking it directly to inheritance and method overriding.
*   **Head First Java (Sierra, 2/e):** Uses relatable analogies to explain the concept of polymorphism.

**Course Outcome Alignment:**

*   **CO1 (K2):** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. This is the core of this outcome.

**Important Points to Remember:**

*   Polymorphism allows treating objects of different classes in a uniform way through a common superclass reference.
*   The decision of which method to call is made at runtime, making the program more dynamic.

---

### **8. Restrictions on Overriding**

**Learning Outcome:** Understand the limitations and rules that govern method overriding in Java.

**Key Concepts:**

*   **`final` methods:** Methods declared with the `final` keyword cannot be overridden.
*   **`static` methods:** Methods declared with the `static` keyword are associated with the class, not the object. They cannot be overridden; instead, they are *hidden*. This means a subclass can declare a `static` method with the same signature, but it's a separate method, not an override.
*   **`private` methods:** Methods declared with the `private` keyword are only accessible within their own class and therefore cannot be overridden by subclasses.

**Example of Hiding vs. Overriding:**

```java
class ParentStatic {
    static void show() {
        System.out.println("Static method in ParentStatic");
    }
}

class ChildStatic extends ParentStatic {
    // Hiding the static method (not overriding)
    static void show() {
        System.out.println("Static method in ChildStatic");
    }

    // This is an override of a non-static method
    void display() {
        System.out.println("Non-static method in ChildStatic");
    }
}

public class StaticHidingDemo {
    public static void main(String[] args) {
        // Calling static methods using class names
        ParentStatic.show();
        ChildStatic.show();

        // Demonstrating that it's not true overriding:
        ParentStatic psRef = new ChildStatic(); // Refers to ChildStatic object
        psRef.show(); // Calls ParentStatic.show() because psRef is of type ParentStatic

        ChildStatic csRef = new ChildStatic();
        csRef.show(); // Calls ChildStatic.show() because csRef is of type ChildStatic
    }
}
```

**Explanation:**

*   `ParentStatic.show()` and `ChildStatic.show()` are separate methods.
*   When using a `ParentStatic` reference (`psRef`), the `show()` method called is determined by the reference type (compile-time binding), not the actual object type.

**Textbook References:**

*   **Java: The Complete Reference (Schildt, 8/e):** Details the restrictions on overriding, including `final`, `static`, and `private` members.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Explicitly contrasts method overriding with static method hiding.

**Course Outcome Alignment:**

*   **CO1 (K2):** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. Understanding these restrictions is key to grasping polymorphism correctly.

**Important Points to Remember:**

*   `static` methods are bound at compile time based on the reference type.
*   `final` methods promote code stability by preventing modification.

---

### **9. Extending a Class**

**Learning Outcome:** Apply inheritance to extend existing classes, creating new classes with added functionality.

**Key Concepts:**

*   **Class Extension:** The process of creating a new class that inherits features from an existing class. This is the fundamental application of the `extends` keyword.
*   **Code Reusability:** A primary benefit, as common attributes and behaviors don't need to be rewritten.
*   **Specialization:** Subclasses can add new members or modify existing ones (through overriding) to create more specialized versions of the superclass.

**Example:**

Consider a `Person` class and an `Employee` class that extends it.

```java
class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void displayBasicInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Employee extends Person {
    String employeeId;
    String jobTitle;

    Employee(String name, int age, String employeeId, String jobTitle) {
        super(name, age); // Initialize Person part
        this.employeeId = employeeId;
        this.jobTitle = jobTitle;
    }

    void displayEmployeeInfo() {
        displayBasicInfo(); // Call inherited method
        System.out.println("Employee ID: " + employeeId + ", Job Title: " + jobTitle);
    }
}

public class ClassExtensionDemo {
    public static void main(String[] args) {
        Employee emp1 = new Employee("Alice", 30, "E123", "Software Engineer");
        emp1.displayEmployeeInfo();
    }
}
```

**Explanation:**

*   The `Employee` class inherits `name` and `age` from `Person`.
*   The `Employee` constructor uses `super(name, age)` to properly initialize the inherited fields.
*   `Employee` adds its own specific fields (`employeeId`, `jobTitle`) and a new method (`displayEmployeeInfo`).
*   `displayEmployeeInfo` also calls the inherited `displayBasicInfo()` method.

**Textbook References:**

*   **Java: The Complete Reference (Schildt, 8/e):** Provides numerous examples of extending classes.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Demonstrates class extension with practical scenarios.
*   **Programming JAVA a Primer (Balagurusamy, 5/e):** Covers the fundamentals of class extension and its benefits.

**Course Outcome Alignment:**

*   **CO1 (K2):** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. This is a direct application of inheritance.
*   **CO2 (K3):** Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. Building programs using extended classes is a key skill.

**Important Points to Remember:**

*   Inheritance is the primary mechanism for code reuse and building specialized classes.
*   Always ensure that the superclass part of the object is properly initialized in the subclass constructor.

---

### **10. Practice Questions and Exercises**

**Course Outcome Alignment:** All COs are reinforced through these questions.

**Question 1 (CO1, CO2):**

What is the primary benefit of inheritance in Object-Oriented Programming?

**Answer:** The primary benefit is code reusability. It allows you to create new classes based on existing ones, avoiding redundant code. It also promotes a hierarchical structure and easier maintenance.

---

**Question 2 (CO1, CO2):**

Consider the following code:

```java
class A {
    void msg() {
        System.out.println("Hello from A");
    }
}

class B extends A {
    void msg() {
        System.out.println("Hello from B");
    }
}

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.msg();
    }
}
```

What will be the output of this program? Explain why.

**Answer:**
Output:
```
Hello from B
```
**Explanation:** This demonstrates method overriding and runtime polymorphism. The reference variable `obj` is of type `A`, but it points to an object of type `B`. When `obj.msg()` is called, the JVM determines at runtime that the actual object is of type `B` and executes the `msg()` method defined in class `B`.

---

**Question 3 (CO1, CO2):**

Explain the role of the `super` keyword in Java. Provide a scenario where it is essential.

**Answer:** The `super` keyword is used to refer to the immediate superclass of a class. Its essential roles include:
1.  **Calling Superclass Constructors:** This is critical when the superclass doesn't have a default constructor or when you need to pass arguments to the superclass constructor.
2.  **Accessing Superclass Methods:** Used when a subclass overrides a superclass method and still needs to call the superclass's version.
3.  **Accessing Superclass Fields:** Used when a subclass field has the same name as a superclass field.

**Scenario where it's essential:** When a superclass has a constructor that takes arguments, and the subclass needs to initialize those inherited fields, `super(arguments)` is essential in the subclass constructor.

```java
class SuperClass {
    int value;
    SuperClass(int value) {
        this.value = value;
    }
}

class SubClass extends SuperClass {
    SubClass(int value) {
        super(value); // Essential: Calls the SuperClass constructor
    }
}
```

---

**Question 4 (CO1, CO2):**

What is the difference between method overriding and method overloading?

**Answer:**
*   **Method Overriding:**
    *   Occurs in the context of inheritance.
    *   The subclass provides a specific implementation for a method defined in its superclass.
    *   Requires the same method name, same parameter list, and same return type (or covariant return type).
    *   Achieves runtime polymorphism.
*   **Method Overloading:**
    *   Occurs within the same class.
    *   Multiple methods have the same name but different parameter lists (number, type, or order of parameters).
    *   Return type can be different, but it's not sufficient for overloading.
    *   Achieves compile-time polymorphism.

---

**Question 5 (CO1, CO2):**

Can a subclass inherit `private` members from its superclass? Explain.

**Answer:** No, a subclass cannot directly inherit or access `private` members from its superclass. `private` members are strictly confined to the class in which they are declared. However, the `private` members are still part of the object's memory; they just can't be accessed directly from outside the class. They can be accessed indirectly via public or protected methods in the superclass.

---

**Question 6 (CO1, CO2):**

Write a simple Java program demonstrating the "is-a" relationship using inheritance.

**Answer:**

```java
// Superclass
class Vehicle {
    void move() {
        System.out.println("This vehicle moves.");
    }
}

// Subclass
class Car extends Vehicle {
    void drive() {
        System.out.println("This car is driven.");
    }
}

public class IsADemo {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.move(); // Inherited method
        myCar.drive(); // Subclass method
    }
}
```
**Explanation:** A `Car` *is a* `Vehicle`. This is shown by `Car` extending `Vehicle`.

---

**Question 7 (CO1, CO2):**

What happens if you try to override a `static` method from the superclass in the subclass?

**Answer:** You don't truly override it. Instead, you *hide* the superclass's `static` method. The subclass's `static` method is a separate method associated with the subclass itself. When you call the `static` method using a reference variable, the method executed is determined by the type of the reference variable (compile-time binding), not the actual type of the object.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
