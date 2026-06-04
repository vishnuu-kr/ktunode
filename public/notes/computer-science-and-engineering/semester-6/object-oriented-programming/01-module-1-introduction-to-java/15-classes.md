---
title: "Classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf91"
status: "completed"
scrapedAt: "2026-05-20T16:55:56.467Z"
---
# OBJECT-ORIENTED PROGRAMMING

## Module 1: Introduction to Java

### Topic: Classes

---

This module introduces the fundamental concept of **Classes** in Java, a cornerstone of Object-Oriented Programming (OOP). Understanding classes is crucial for building any non-trivial Java application.

---

## Learning Outcomes:

By the end of this topic, you should be able to:

*   **Define what a class is in Java.**
*   **Explain the relationship between a class and an object.**
*   **Identify the components of a Java class (fields, constructors, methods).**
*   **Declare and instantiate objects from a class.**
*   **Understand the concept of instance variables and methods.**
*   **Recognize the purpose of constructors.**
*   **Write simple Java classes with fields, constructors, and methods.**
*   **Access class members (fields and methods) using objects.**

---

## 1. What is a Class in Java?

A **class** in Java is a blueprint or a template for creating **objects**. It defines the properties (data) and behaviors (methods) that objects of that class will possess. Think of it as a cookie cutter: the cookie cutter itself is the class, and the cookies you make with it are the objects.

*   **Blueprint:** Defines the structure and behavior.
*   **Template:** Used to create instances (objects).
*   **Encapsulation:** Bundles data (fields) and the methods that operate on that data together.

---

## 2. The Relationship Between a Class and an Object

*   **Class:** The abstract definition, the blueprint. It doesn't occupy memory itself in terms of instance data.
*   **Object:** An instance of a class. Each object is a concrete realization of the class. Objects have their own unique state (values for their fields) and can perform the behaviors defined by the class.

**Analogy:**

*   **Class:** `Car` (defines that a car has color, model, speed, and can start, stop, accelerate)
*   **Object:**
    *   `myRedFerrari` (a specific `Car` object that is red, model Ferrari, current speed 0)
    *   `myBlueHonda` (another specific `Car` object that is blue, model Honda, current speed 0)

---

## 3. Components of a Java Class

A Java class typically consists of the following components:

### 3.1 Fields (Instance Variables)

*   **Definition:** Variables declared within a class, but outside of any method. They represent the **state** or **attributes** of an object.
*   Each object of a class has its own copy of its instance variables.
*   **Syntax:** `[access_modifier] [data_type] [variable_name];`

**Example:**

```java
public class Dog {
    String breed; // field
    int age;      // field
    String color; // field
}
```

### 3.2 Constructors

*   **Definition:** Special methods that are automatically called when an object of a class is created. They are used to **initialize** the fields of an object.
*   **Key Characteristics:**
    *   Have the same name as the class.
    *   Do not have a return type (not even `void`).
    *   Can have zero or more parameters.
    *   If you don't explicitly define a constructor, Java provides a **default constructor** (a no-argument constructor) that initializes fields to their default values (0 for numeric types, `null` for object references, `false` for booleans).
*   **Syntax:** `[access_modifier] [ClassName]([parameters]) { // initialization code }`

**Example (adding a constructor to the `Dog` class):**

```java
public class Dog {
    String breed;
    int age;
    String color;

    // Constructor
    public Dog(String breed, int age, String color) {
        this.breed = breed; // 'this' refers to the current object's field
        this.age = age;
        this.color = color;
    }

    // Another constructor (e.g., for creating a dog with just a breed)
    public Dog(String breed) {
        this.breed = breed;
        this.age = 0; // Default age
        this.color = "Unknown"; // Default color
    }
}
```

### 3.3 Methods (Instance Methods)

*   **Definition:** Blocks of code that define the **behaviors** or **actions** that an object can perform.
*   **Syntax:** `[access_modifier] [return_type] [methodName]([parameters]) { // method body }`
*   Methods can access and modify the object's fields.

**Example (adding methods to the `Dog` class):**

```java
public class Dog {
    String breed;
    int age;
    String color;

    public Dog(String breed, int age, String color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    // Method to display dog's information
    public void displayInfo() {
        System.out.println("Breed: " + breed);
        System.out.println("Age: " + age);
        System.out.println("Color: " + color);
    }

    // Method to make the dog bark
    public void bark() {
        System.out.println("Woof! Woof!");
    }

    // Method to set the age
    public void setAge(int newAge) {
        if (newAge > 0) { // Basic validation
            this.age = newAge;
        } else {
            System.out.println("Age cannot be negative.");
        }
    }
}
```

---

## 4. Declaring and Instantiating Objects

### 4.1 Declaring a Class

We declare a class using the `class` keyword, followed by the class name.

```java
public class MyClass {
    // Class members (fields, constructors, methods) go here
}
```

### 4.2 Instantiating an Object

**Instantiation** is the process of creating an object from a class. This is done using the `new` keyword followed by a call to the class's constructor.

*   **Syntax:** `ClassName objectName = new ClassName([arguments]);`

**Example (using the `Dog` class):**

```java
public class Main {
    public static void main(String[] args) {
        // Instantiating a Dog object using the parameterized constructor
        Dog myDog = new Dog("Labrador", 3, "Golden");

        // Instantiating another Dog object
        Dog anotherDog = new Dog("Beagle", 5, "Tricolor");

        // Creating a Dog with the other constructor
        Dog strayDog = new Dog("Poodle");
    }
}
```

---

## 5. Accessing Class Members

Once an object is created, you can access its fields and call its methods using the **dot operator** (`.`).

*   **Accessing Fields:** `objectName.fieldName`
*   **Calling Methods:** `objectName.methodName(arguments)`

**Example (continuing from above):**

```java
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Labrador", 3, "Golden");

        // Accessing fields
        System.out.println("My dog's breed is: " + myDog.breed);
        System.out.println("My dog's age is: " + myDog.age);

        // Calling methods
        myDog.bark();
        myDog.displayInfo();

        // Modifying a field using a setter method
        myDog.setAge(4);
        myDog.displayInfo(); // Display updated information
    }
}
```

---

## 6. Key Concepts and Definitions Summary

| Term                | Definition                                                                    |
| :------------------ | :---------------------------------------------------------------------------- |
| **Class**           | A blueprint or template for creating objects. Defines data and behavior.      |
| **Object**          | An instance of a class. A concrete realization with its own state and behavior. |
| **Field (Instance Variable)** | A variable declared within a class, representing an object's state.       |
| **Constructor**     | A special method used to initialize objects. Has the same name as the class.  |
| **Method (Instance Method)** | A block of code defining an object's behavior or action.                  |
| **Instantiation**   | The process of creating an object from a class using the `new` keyword.       |
| **`this` keyword**  | Refers to the current object within a class. Used to differentiate between instance variables and method parameters/local variables with the same name. |
| **Dot Operator (`.`)** | Used to access members (fields and methods) of an object.                     |

---

## 7. Practice Questions and Exercises

### Question 1: Understanding the Basics

What is the primary purpose of a Java class?
a) To store global variables
b) To define a structure for creating objects
c) To execute a single program
d) To manage memory allocation

### Question 2: Identifying Components

Consider the following Java code snippet:

```java
public class Car {
    String color; // Line A
    int speed;    // Line B

    public Car(String carColor) { // Line C
        color = carColor;       // Line D
    }

    public void accelerate() {  // Line E
        speed += 10;            // Line F
    }
}
```

Identify which lines represent:
*   Fields:
*   Constructor:
*   Methods:

### Question 3: Object Instantiation and Access

Write a Java class called `Book` with the following:
*   Fields: `title` (String), `author` (String), `pages` (int)
*   A constructor that initializes all three fields.
*   A method called `displayBookInfo()` that prints the book's title, author, and number of pages.

Then, in a `main` method (you can create a separate `Main` class or add it to `Book` for simplicity in this exercise), create two `Book` objects and call their `displayBookInfo()` methods.

### Question 4: The `this` Keyword

Explain the role of the `this` keyword in the context of constructors and methods.

---

## 8. Answers to Practice Questions

### Answer 1:

The primary purpose of a Java class is:
**b) To define a structure for creating objects**

### Answer 2:

*   **Fields:** Line A (`color`), Line B (`speed`)
*   **Constructor:** Line C (`public Car(String carColor)` - the entire method signature and body)
*   **Methods:** Line E (`public void accelerate()`)

### Answer 3:

**Book.java**

```java
public class Book {
    String title;
    String author;
    int pages;

    // Constructor
    public Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // Method to display book information
    public void displayBookInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
        System.out.println("--------------------"); // Separator for clarity
    }

    // Main method for testing
    public static void main(String[] args) {
        // Create the first Book object
        Book book1 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224);

        // Create the second Book object
        Book book2 = new Book("Pride and Prejudice", "Jane Austen", 432);

        // Call the displayBookInfo method for each object
        book1.displayBookInfo();
        book2.displayBookInfo();
    }
}
```

---

### Answer 4:

The `this` keyword is a **reference to the current object** in which a method is being invoked or within which fields are being accessed.

*   **In Constructors:** It's primarily used to distinguish between the class's instance variables and the constructor's parameters when they have the same name. For example, `this.title = title;` means "assign the value of the `title` parameter to the `title` instance variable of the current object."
*   **In Methods:** It's used to explicitly refer to the current object's members (fields or other methods). This is particularly useful when you have local variables or parameters with the same name as instance variables, or when you want to call another method of the same object.

---

## 9. Important Points to Remember:

*   A **class** is a blueprint; an **object** is an instance created from that blueprint.
*   Classes encapsulate data (fields) and behavior (methods).
*   Each object has its own independent copy of instance variables.
*   Constructors are used for **initialization** and have the same name as the class.
*   The `new` keyword is used to **instantiate** an object.
*   The dot operator (`.`) is used to **access** an object's fields and methods.
*   Java provides a **default constructor** if you don't define any constructors yourself.

---
