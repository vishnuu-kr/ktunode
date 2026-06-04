---
title: "Object Oriented Programming in Java :- Declaring Objects"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac9c"
status: "completed"
scrapedAt: "2026-05-20T16:27:14.709Z"
---
# Object Oriented Programming (OOP) in Java: Declaring Objects

**Subject:** Object Oriented Programming
**Module:** Module 1: Introduction to Java: Structure of a Simple Java Program
**Topic:** Object Oriented Programming in Java: Declaring Objects

**Introduction:**

This module focuses on declaring objects in Java, a fundamental concept in Object-Oriented Programming. Understanding how to declare objects is crucial for utilizing the power and flexibility of OOP in Java.

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Define a class as a blueprint for creating objects.
*   Declare objects (instances) of a class.
*   Understand the relationship between classes and objects.
*   Differentiate between declaration and initialization of objects.
*   Access object members (attributes and methods) using the dot operator.

## 1. Key Concepts and Definitions

*   **Object-Oriented Programming (OOP):** A programming paradigm that revolves around the concept of "objects," which are self-contained entities containing data (attributes) and code to manipulate that data (methods).
*   **Class:** A blueprint or template for creating objects.  It defines the attributes (data) and behaviors (methods) that objects of that class will have.
*   **Object:** An instance of a class.  It's a concrete realization of the blueprint defined by the class.  Each object has its own unique set of data values for the attributes defined in the class.
*   **Declaration:** The process of stating the type of an object (its class) and giving it a name.  This allocates memory for a reference to the object.
*   **Initialization:** The process of actually creating the object in memory using the `new` keyword and assigning the object's address (reference) to the declared variable.
*   **Attribute (Instance Variable):** A data member of a class that holds information about the object.  Also known as fields or properties.
*   **Method:** A function associated with a class that defines the behavior of objects of that class.
*   **Dot Operator (.):** Used to access the members (attributes and methods) of an object.

## 2. Defining a Class (The Blueprint)

Before you can declare objects, you need to define a class.  Here's a simple example:

```java
public class Dog {
    // Attributes (Instance Variables)
    String breed;
    String name;
    int age;

    // Method (Behavior)
    public void bark() {
        System.out.println("Woof!");
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Breed: " + breed);
        System.out.println("Age: " + age);
    }
}
```

**Explanation:**

*   `public class Dog { ... }`: Defines a class named `Dog`.  The `public` keyword makes the class accessible from other classes.
*   `String breed;`, `String name;`, `int age;`: These are the attributes (instance variables) of the `Dog` class. Each `Dog` object will have its own values for these attributes.
*   `public void bark() { ... }`: This is a method that defines what a `Dog` object can do (in this case, bark).
*   `public void displayInfo() { ... }`: This is a method that displays the details of the dog.

## 3. Declaring Objects

Declaring an object involves specifying its class (data type) and giving it a name (variable). This creates a reference to the object.

**Syntax:**

```java
ClassName objectName;
```

**Example:**

```java
Dog myDog; // Declares an object named 'myDog' of type 'Dog'
```

**Explanation:**

*   `Dog`: The class (blueprint) of the object.
*   `myDog`: The name of the object (variable).  It's a reference variable that can hold the memory address of a `Dog` object.

**Important Note:**  The declaration only creates a *reference* to an object. It *doesn't* create the object itself in memory.  At this point, `myDog` holds `null` (meaning it doesn't point to any object).

## 4. Initialization of Objects

Initialization involves creating an actual object in memory using the `new` keyword and assigning its reference (memory address) to the declared object variable.

**Syntax:**

```java
objectName = new ClassName();
```

**Example:**

```java
myDog = new Dog(); // Creates a new Dog object and assigns its reference to 'myDog'
```

**Explanation:**

*   `new Dog()`: Creates a new `Dog` object in memory.
*   `=`: The assignment operator assigns the reference of the newly created `Dog` object to the `myDog` variable.

**Combining Declaration and Initialization:**

You can declare and initialize an object in a single line:

```java
Dog myDog = new Dog();
```

## 5. Accessing Object Members (Attributes and Methods)

Once you have created an object, you can access its attributes and methods using the dot operator (`.`).

**Accessing Attributes:**

```java
myDog.name = "Buddy";
myDog.breed = "Golden Retriever";
myDog.age = 3;
```

**Accessing Methods:**

```java
myDog.bark(); // Calls the bark() method of the myDog object.  Output: Woof!
myDog.displayInfo(); // Calls the displayInfo() method
```

**Example with complete code:**

```java
public class Dog {
    // Attributes (Instance Variables)
    String breed;
    String name;
    int age;

    // Method (Behavior)
    public void bark() {
        System.out.println("Woof!");
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Breed: " + breed);
        System.out.println("Age: " + age);
    }

    public static void main(String[] args) {
        // Declaring and initializing a Dog object
        Dog myDog = new Dog();

        // Accessing and setting attribute values
        myDog.name = "Buddy";
        myDog.breed = "Golden Retriever";
        myDog.age = 3;

        // Accessing methods
        myDog.bark();
        myDog.displayInfo();

        // Creating another Dog object
        Dog anotherDog = new Dog();
        anotherDog.name = "Lucy";
        anotherDog.breed = "Labrador";
        anotherDog.age = 5;

        anotherDog.displayInfo();
    }
}
```

**Output:**

```
Woof!
Name: Buddy
Breed: Golden Retriever
Age: 3
Name: Lucy
Breed: Labrador
Age: 5
```

## 6. Multiple Objects of the Same Class

You can create multiple objects (instances) of the same class. Each object will have its own set of attribute values. In the above example, `myDog` and `anotherDog` are both `Dog` objects, but they have different names, breeds, and ages.

## 7. Important Points to Remember

*   A class is a blueprint; an object is a concrete instance of that blueprint.
*   Declaration creates a reference; initialization creates the actual object in memory.
*   The `new` keyword is essential for creating objects.
*   Use the dot operator (`.`) to access object members (attributes and methods).
*   Each object has its own unique set of attribute values.
*   Declaring an object without initializing it will result in a `NullPointerException` if you try to access its members.

## 8. Practice Questions/Exercises

**Question 1:**

What is the difference between a class and an object?

**Answer:** A class is a blueprint or template for creating objects, while an object is a concrete instance of that class.

**Question 2:**

What does the `new` keyword do in Java when working with objects?

**Answer:** The `new` keyword creates a new object in memory and returns a reference (memory address) to that object.

**Question 3:**

How do you access the attributes and methods of an object?

**Answer:** You use the dot operator (`.`). For example: `myObject.attributeName` or `myObject.methodName()`.

**Question 4:**

Write a Java code snippet to declare and initialize an object of a class named `Car` and set its color to "Red". Assume the `Car` class has a `color` attribute.

**Answer:**

```java
Car myCar = new Car();
myCar.color = "Red";
```

**Question 5:**

What happens if you try to access a member of an object that has been declared but not initialized?

**Answer:** You will get a `NullPointerException` because the object reference variable is pointing to `null` (no object).

**Question 6:**

Create a `Rectangle` class with attributes `width` and `height`.  Write code to create two `Rectangle` objects, set their dimensions, and print their areas.

**Answer:**

```java
class Rectangle {
    double width;
    double height;

    public double calculateArea() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle rect1 = new Rectangle();
        rect1.width = 5.0;
        rect1.height = 10.0;

        Rectangle rect2 = new Rectangle();
        rect2.width = 3.0;
        rect2.height = 7.0;

        System.out.println("Area of rect1: " + rect1.calculateArea()); // Output: Area of rect1: 50.0
        System.out.println("Area of rect2: " + rect2.calculateArea()); // Output: Area of rect2: 21.0
    }
}
```

This comprehensive guide covers the essential concepts of declaring objects in Java, providing clear explanations, examples, and practice questions to solidify your understanding.  Remember to practice declaring and initializing objects to become proficient in Java OOP.
