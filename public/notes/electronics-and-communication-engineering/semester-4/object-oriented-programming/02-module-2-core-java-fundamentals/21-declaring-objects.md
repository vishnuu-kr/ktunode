---
title: "Declaring Objects"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe68a"
status: "completed"
scrapedAt: "2026-05-23T17:51:32.809Z"
---
## OBJECT ORIENTED PROGRAMMING
### Module 2: Core Java Fundamentals
#### Topic: Declaring Objects

This module delves into the fundamental building blocks of object-oriented programming in Java: **objects**. We will explore how to declare and create objects, which are instances of classes and represent real-world entities or concepts within your programs. Understanding objects is crucial for applying core OOP principles like encapsulation, inheritance, and polymorphism.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the relationship between classes and objects.
*   Declare an object variable in Java.
*   Create an object using the `new` keyword.
*   Initialize an object using a constructor.
*   Access object members (attributes and methods).
*   Differentiate between object declaration and instantiation.

---

### Key Concepts and Definitions

*   **Class:** A blueprint or a template for creating objects. It defines the properties (attributes or data members) and behaviors (methods or member functions) that all objects of that type will have.
    *   *Reference:* Java: The Complete Reference (Schildt, 8/e) emphasizes that a class is a user-defined data type that acts as a blueprint.
    *   *Reference:* Java How to Program (Deitel & Deitel, 11th Ed.) states that a class defines the attributes and behavior of its objects.

*   **Object:** An instance of a class. It is a concrete realization of the blueprint defined by a class. Each object has its own state (values of its attributes) and can perform actions defined by its class's methods.
    *   *Reference:* Fundamentals of Software Engineering (Mall, 4th ed.) describes objects as entities with state and behavior.
    *   *Reference:* Programming JAVA a Primer (Balagurusamy, 5/e) likens objects to real-world entities that can be modeled in software.

*   **Declaration:** The process of telling the Java compiler about the existence of a variable that will hold a reference to an object. This does not create the object itself.
    *   Syntax: `ClassName objectName;`

*   **Instantiation (Creation):** The process of actually creating an object in memory. This involves allocating memory for the object and initializing its state.
    *   The `new` keyword is used for instantiation.
    *   Syntax: `objectName = new ClassName();` (This also calls the constructor)

*   **Constructor:** A special method within a class that has the same name as the class. It is automatically called when an object of that class is created. Constructors are used to initialize the object's attributes.
    *   *Reference:* Java: The Complete Reference (Schildt, 8/e) highlights that constructors are used to set the initial state of an object.
    *   *Reference:* Java How to Program (Deitel & Deitel, 11th Ed.) explains that constructors are invoked implicitly when `new` is used.

*   **Reference Variable:** A variable that stores the memory address of an object. It is through the reference variable that we interact with the object.

---

### Declaring and Creating Objects in Java

In Java, declaring and creating objects involves a two-step process, though these steps are often combined in practice.

#### 1. Declaring an Object Variable

This step declares a variable that can hold a reference to an object of a specific class. At this point, no object is actually created in memory, and the variable holds a `null` value.

**Syntax:**

```java
ClassName objectName;
```

**Example:**

Let's assume we have a simple `Car` class:

```java
class Car {
    String model;
    String color;

    // Constructor
    Car(String model, String color) {
        this.model = model;
        this.color = color;
    }

    // Method to display car details
    void displayDetails() {
        System.out.println("Model: " + model + ", Color: " + color);
    }
}
```

Now, let's declare a variable of type `Car`:

```java
public class CarDemo {
    public static void main(String[] args) {
        Car myCar; // Declares a variable named 'myCar' that can hold a reference to a Car object.
                   // At this point, myCar is null.
        // System.out.println(myCar); // This would cause a NullPointerException if you tried to print it.
    }
}
```

*   **Important Point:** Declaring an object variable does not allocate memory for the object itself. It only allocates memory for the reference variable.

#### 2. Instantiating (Creating) an Object

This step creates an actual object in memory using the `new` keyword and then assigns it to the previously declared reference variable. The `new` keyword is followed by the class name and parentheses `()`, which invokes the class's constructor.

**Syntax:**

```java
objectName = new ClassName(); // Using the default constructor (if available)
// OR
objectName = new ClassName(arguments); // Using a parameterized constructor
```

**Example (Continuing from above):**

```java
public class CarDemo {
    public static void main(String[] args) {
        Car myCar; // Declaration

        // Instantiation and assignment
        myCar = new Car("Sedan", "Blue"); // Creates a Car object and assigns its reference to myCar.
                                        // This also calls the Car constructor.

        // Now myCar refers to a valid Car object.
        System.out.println(myCar); // This will print the memory address of the object (or its default toString representation).
    }
}
```

*   **Reference:** Head First Java (Sierra, 2/e) strongly emphasizes the "new" keyword for creating objects, likening it to building a new house from a blueprint.

#### 3. Combining Declaration and Instantiation

It's common practice to combine the declaration and instantiation steps into a single statement for conciseness.

**Syntax:**

```java
ClassName objectName = new ClassName(); // Using the default constructor
// OR
ClassName objectName = new ClassName(arguments); // Using a parameterized constructor
```

**Example:**

```java
public class CarDemo {
    public static void main(String[] args) {
        // Declaring and instantiating in one step
        Car myCar = new Car("SUV", "Red"); // Creates a Car object and assigns its reference to myCar.
                                           // Calls the constructor with arguments.

        // We can now use the object's members
        myCar.displayDetails(); // Output: Model: SUV, Color: Red
    }
}
```

*   **Important Point:** `new ClassName()` is the expression that actually creates the object. The assignment (`=`) stores the reference to this newly created object in the `objectName` variable.

#### 4. Initializing an Object with Constructors

Constructors are vital for setting the initial state of an object. When you use `new ClassName()`, a constructor is automatically invoked.

*   **Default Constructor:** If you don't explicitly define any constructors in your class, Java provides a default no-argument constructor. This constructor initializes instance variables to their default values (0 for numeric types, `false` for booleans, `null` for object references).
*   **Parameterized Constructors:** You can define constructors that accept arguments. These allow you to pass initial values to the object's attributes during creation.

**Example with a Constructor:**

```java
class Dog {
    String name;
    String breed;

    // Parameterized constructor
    Dog(String name, String breed) {
        this.name = name; // 'this' refers to the current object's instance variable
        this.breed = breed;
    }

    void bark() {
        System.out.println(name + " says Woof!");
    }
}

public class DogDemo {
    public static void main(String[] args) {
        // Creating Dog objects
        Dog myDog = new Dog("Buddy", "Golden Retriever");
        Dog anotherDog = new Dog("Lucy", "Beagle");

        myDog.bark();     // Output: Buddy says Woof!
        anotherDog.bark(); // Output: Lucy says Woof!

        System.out.println("My dog's name is " + myDog.name + " and is a " + myDog.breed);
        // Output: My dog's name is Buddy and is a Golden Retriever
    }
}
```

*   **Reference:** Java in A Nutshell (Flanagan, 5/e) provides detailed explanations of constructors and their role in object initialization.
*   **Reference:** Object Oriented Systems Development using the Unified Modeling Language (Bahrami, 2017) discusses constructors as key to object creation and initialization within the broader context of system design.

#### 5. Accessing Object Members (Attributes and Methods)

Once an object has been created and its reference is stored in a variable, you can access its attributes and call its methods using the **dot operator (.)**.

**Syntax:**

*   To access an attribute: `objectName.attributeName`
*   To call a method: `objectName.methodName()`

**Example (Continuing with `Car`):**

```java
public class CarDemo {
    public static void main(String[] args) {
        Car myCar = new Car("Sedan", "Blue");

        // Accessing attributes
        System.out.println("Car Model: " + myCar.model); // Output: Car Model: Sedan
        System.out.println("Car Color: " + myCar.color); // Output: Car Color: Blue

        // Modifying attributes (if they are not private)
        myCar.color = "Black";
        System.out.println("Updated Color: " + myCar.color); // Output: Updated Color: Black

        // Calling a method
        myCar.displayDetails(); // Output: Model: Sedan, Color: Black
    }
}
```

*   **Important Point:** You can only access members of an object through its reference variable.

---

### Relationship Between Class and Object (CO1)

*   A **class** is a conceptual blueprint. It defines the structure and behavior.
*   An **object** is a concrete instance of that blueprint. It has its own unique state (values for its attributes) and can perform the behaviors defined by the class.
*   You can create multiple objects from a single class. Each object is independent of the others, though they share the same structure and behaviors.

**Analogy:**
*   **Class:** The architectural blueprint for a house.
*   **Objects:** The actual houses built from that blueprint. Each house has its own address, paint color, and furniture (state), but they all have rooms, doors, and windows (structure and behavior).

---

### Aligning with Course Outcomes

*   **CO1: Summarize the object-oriented concepts - classes, objects...**
    *   This topic directly addresses the distinction and relationship between classes and objects, fundamental OOP concepts.
*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**
    *   Declaring and creating objects is a core skill for developing programs using object-oriented concepts in Java. We are using class types (which are data types), the `new` operator, and the dot operator for member access.

---

### Important Points to Remember

*   **Declaration vs. Instantiation:** Declaring a variable reserves space for a reference; instantiating creates the actual object in memory.
*   **`new` Keyword:** Always use the `new` keyword to create objects.
*   **Constructors:** They are special methods for initializing objects. If no constructor is defined, Java provides a default no-argument constructor.
*   **Dot Operator (`.`):** Used to access an object's attributes and call its methods.
*   **`null`:** An object reference variable that does not point to any object has the value `null`. Attempting to access members through a `null` reference will result in a `NullPointerException`.

---

### Practice Questions and Exercises

**Question 1:**

What is the difference between declaring a variable and instantiating an object in Java?

**Answer:**
Declaring a variable reserves memory for a reference to an object of a specific type. Instantiating an object actually creates the object in memory using the `new` keyword and initializes it. A declared variable initially holds `null` until it is assigned a reference to an instantiated object.

---

**Question 2:**

Consider the following Java code:

```java
class Book {
    String title;
    String author;

    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    void display() {
        System.out.println("Title: " + title + ", Author: " + author);
    }
}

public class Library {
    public static void main(String[] args) {
        Book book1; // Line A
        book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien"); // Line B
        book1.display(); // Line C
    }
}
```

Identify the line where the `Book` object is instantiated.

**Answer:**
Line B is where the `Book` object is instantiated (`new Book("The Lord of the Rings", "J.R.R. Tolkien")`). Line A is the declaration.

---

**Question 3:**

Write a Java program that defines a `Student` class with attributes `name` (String) and `studentId` (int). Include a constructor to initialize these attributes and a method `printDetails()` that displays the student's name and ID. Then, create two `Student` objects in the `main` method, initialize them with different values, and call their `printDetails()` methods.

**Solution:**

```java
class Student {
    String name;
    int studentId;

    // Constructor to initialize name and studentId
    Student(String name, int studentId) {
        this.name = name;
        this.studentId = studentId;
    }

    // Method to print student details
    void printDetails() {
        System.out.println("Student Name: " + name + ", Student ID: " + studentId);
    }
}

public class StudentManagement {
    public static void main(String[] args) {
        // Create the first Student object
        Student student1 = new Student("Alice Wonderland", 101);

        // Create the second Student object
        Student student2 = new Student("Bob The Builder", 102);

        // Print details of both students
        student1.printDetails(); // Output: Student Name: Alice Wonderland, Student ID: 101
        student2.printDetails(); // Output: Student Name: Bob The Builder, Student ID: 102
    }
}
```

---

**Question 4:**

What will be the output of the following code snippet?

```java
class Counter {
    int count = 0;

    Counter() {
        count = 1;
    }

    Counter(int initialCount) {
        count = initialCount;
    }
}

public class CounterDemo {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter(5);

        System.out.println("c1.count: " + c1.count);
        System.out.println("c2.count: " + c2.count);
    }
}
```

**Answer:**

```
c1.count: 1
c2.count: 5
```
**Explanation:**
*   `Counter c1 = new Counter();` calls the no-argument constructor `Counter()`, which sets `c1.count` to 1.
*   `Counter c2 = new Counter(5);` calls the parameterized constructor `Counter(int initialCount)`, passing 5, which sets `c2.count` to 5.

---

This concludes our study of declaring objects in Java. Mastering this fundamental concept is key to building robust and well-structured object-oriented applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
