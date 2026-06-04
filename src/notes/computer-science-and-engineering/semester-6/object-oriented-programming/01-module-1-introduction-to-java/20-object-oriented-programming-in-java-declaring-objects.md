---
title: "Object Oriented Programming in Java  - Declaring Objects"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf96"
status: "completed"
scrapedAt: "2026-05-20T16:56:00.176Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 1: Introduction to Java

### Topic: Object Oriented Programming in Java - Declaring Objects

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concept of an object in Object-Oriented Programming (OOP).
*   Differentiate between a class and an object.
*   Declare object reference variables in Java.
*   Create instances of objects using the `new` keyword.
*   Access members (attributes/fields and methods) of an object using the dot operator.
*   Understand the concept of object instantiation and its significance.

---

### 2. Key Concepts and Definitions

#### 2.1 What is an Object?

In the real world, everything is an object. An object is a tangible entity that has:

*   **State (Attributes/Properties):** Characteristics or data that describe an object. These are typically represented by variables (fields or instance variables) within the object.
*   **Behavior (Methods/Functions):** Actions or operations that an object can perform. These are typically represented by methods within the object.

**Real-world examples:**

*   **Car:**
    *   **State:** Color (red), Make (Toyota), Model (Camry), Year (2022), CurrentSpeed (0)
    *   **Behavior:** StartEngine(), Accelerate(), Brake(), Turn()
*   **Dog:**
    *   **State:** Breed (Labrador), Age (3), Color (Golden), Name ("Buddy")
    *   **Behavior:** Bark(), WagTail(), Eat(), Sleep()
*   **Student:**
    *   **State:** Name ("Alice"), StudentID (12345), Major ("Computer Science"), GPA (3.8)
    *   **Behavior:** Study(), AttendClass(), TakeExam(), GetGPA()

#### 2.2 What is a Class?

A **class** is a blueprint or a template for creating objects. It defines the common properties (attributes) and behaviors (methods) that all objects of that type will have. An object is an instance of a class.

**Analogy:**

*   **Class:** The blueprint for a house. It defines the number of rooms, the layout, the materials, etc.
*   **Object:** An actual house built from that blueprint. Each house built from the same blueprint will have the same structure but can have different colors, furniture, or occupants.

#### 2.3 Object Declaration in Java

In Java, declaring an object involves two main steps:

1.  **Declaring a Reference Variable:** This creates a variable that can hold a reference (memory address) to an object of a specific class. The variable itself does not contain the object's data.
2.  **Creating the Object Instance:** This actually allocates memory for the object and initializes its state. This is done using the `new` keyword.

**Syntax for Declaration:**

```java
ClassName objectReferenceName;
```

**Explanation:**

*   `ClassName`: The name of the class from which you want to create an object.
*   `objectReferenceName`: The name you give to the variable that will refer to the object. This name follows Java's variable naming conventions (starts with a lowercase letter, camelCase is common).

**Example:**

Let's assume we have a `Car` class.

```java
Car myCar; // Declares a reference variable named 'myCar' that can hold a reference to a Car object.
```

**Important Note:** At this point, `myCar` is a reference variable but it doesn't point to any actual `Car` object. It holds a `null` value. If you try to access members of `myCar` at this stage, you will get a `NullPointerException`.

#### 2.4 Creating an Object Instance (Instantiation)

To create an actual object, you use the `new` keyword followed by the class constructor (which is a special method with the same name as the class and is used to initialize the object). The `new` keyword allocates memory for the object and returns a reference to it.

**Syntax for Instantiation:**

```java
objectReferenceName = new ClassName();
```

**Combining Declaration and Instantiation:**

You can often combine these two steps into a single line for convenience:

```java
ClassName objectReferenceName = new ClassName();
```

**Example:**

Continuing with the `Car` class:

```java
// Declaring and creating a Car object
Car myCar = new Car();
```

This line does the following:
1.  `Car myCar`: Declares a reference variable named `myCar` of type `Car`.
2.  `new Car()`: Creates a new `Car` object in memory using the default constructor of the `Car` class.
3.  `=`: Assigns the memory address (reference) of the newly created `Car` object to the `myCar` reference variable.

#### 2.5 Accessing Object Members (Attributes and Methods)

Once an object has been created and its reference is stored in a variable, you can access its attributes (fields) and methods using the **dot operator (`.`)**.

**Syntax:**

*   **Accessing Attributes:** `objectReferenceName.attributeName`
*   **Calling Methods:** `objectReferenceName.methodName()`

**Example (assuming `Car` class has attributes like `color` and methods like `startEngine()`):**

```java
// Assuming Car class has:
// String color;
// void startEngine() { ... }

Car myCar = new Car(); // Create a Car object

// Accessing an attribute
myCar.color = "Red"; // Assign a value to the color attribute

// Calling a method
myCar.startEngine(); // Execute the startEngine method
```

**Important Considerations:**

*   **Access Modifiers:** The ability to access attributes and methods directly depends on their access modifiers (e.g., `public`, `private`, `protected`). `public` members are accessible from anywhere.
*   **`null` Reference:** If `objectReferenceName` is `null`, attempting to access its members will result in a `NullPointerException`.

---

### 3. Examples

Let's illustrate with a concrete Java example.

**`Dog.java` (The Class Blueprint)**

```java
public class Dog {
    // Attributes (Instance Variables)
    String breed;
    int age;
    String color;

    // Behavior (Methods)
    void bark() {
        System.out.println("Woof! Woof!");
    }

    void wagTail() {
        System.out.println("The dog is wagging its tail.");
    }

    void displayInfo() {
        System.out.println("Breed: " + breed);
        System.out.println("Age: " + age);
        System.out.println("Color: " + color);
    }
}
```

**`DogPark.java` (Where we use the Dog objects)**

```java
public class DogPark {
    public static void main(String[] args) {
        // 1. Declaring reference variables
        Dog dog1;
        Dog dog2;

        // 2. Creating object instances (instantiation) and assigning to references
        dog1 = new Dog(); // Creates the first Dog object
        dog2 = new Dog(); // Creates the second Dog object

        // --- Alternatively, combine declaration and instantiation ---
        // Dog dog1 = new Dog();
        // Dog dog2 = new Dog();

        // 3. Accessing attributes and setting values
        dog1.breed = "Labrador";
        dog1.age = 5;
        dog1.color = "Golden";

        dog2.breed = "German Shepherd";
        dog2.age = 3;
        dog2.color = "Black and Tan";

        // 4. Calling methods on the objects
        System.out.println("--- Dog 1 ---");
        dog1.bark();       // Output: Woof! Woof!
        dog1.wagTail();    // Output: The dog is wagging its tail.
        dog1.displayInfo(); // Output: Breed: Labrador, Age: 5, Color: Golden

        System.out.println("\n--- Dog 2 ---");
        dog2.bark();       // Output: Woof! Woof!
        dog2.displayInfo(); // Output: Breed: German Shepherd, Age: 3, Color: Black and Tan
        // dog2.wagTail(); // Can call any available method
    }
}
```

---

### 4. Practice Questions and Exercises

**Question 1:**
What are the two fundamental components that define an object in OOP?
a) Methods and Constructors
b) State and Behavior
c) Attributes and References
d) Classes and Objects

**Question 2:**
Which keyword is used in Java to create an instance of an object?
a) `create`
b) `new`
c) `object`
d) `instance`

**Question 3:**
Consider the following code snippet:

```java
String message;
message = new String("Hello");
```

What is `message` in this context?
a) An object
b) A class
c) A reference variable
d) A constructor

**Question 4:**
What is the primary difference between a class and an object?

**Question 5:**
Write a Java code snippet that declares a reference variable named `bookTitle` of type `String`, creates a `String` object with the value "The Lord of the Rings", and assigns it to `bookTitle`. Then, print the value of `bookTitle`.

---

### 5. Answers to Practice Questions

**Answer 1:**
b) State and Behavior

**Answer 2:**
b) `new`

**Answer 3:**
c) A reference variable. `message` is a variable that refers to the `String` object created by `new String("Hello")`.

**Answer 4:**
A **class** is a blueprint or template that defines the properties (attributes) and behaviors (methods) common to all objects of a certain type. An **object** is an actual instance of a class, created from that blueprint, and it has its own unique state (values for its attributes) and can perform the behaviors defined by its class.

**Answer 5:**

```java
public class StringExample {
    public static void main(String[] args) {
        // Declare a reference variable of type String
        String bookTitle;

        // Create a String object and assign its reference to bookTitle
        bookTitle = new String("The Lord of the Rings");

        // Alternatively, combine declaration and instantiation:
        // String bookTitle = new String("The Lord of the Rings");

        // Print the value of bookTitle (the String object's content)
        System.out.println("The book title is: " + bookTitle);
    }
}
```

---

### 6. Important Points to Remember

*   **Class vs. Object:** A class is a blueprint; an object is an instance of that blueprint.
*   **Declaration vs. Instantiation:** Declaring a variable (`ClassName obj;`) only creates a placeholder for a reference. Instantiating (`obj = new ClassName();`) actually creates the object in memory.
*   **The `new` Keyword:** This is crucial for creating objects in Java. It allocates memory and calls the constructor.
*   **The Dot Operator (`.`)**: Used to access attributes and call methods of an object.
*   **`NullPointerException`**: Occurs when you try to access members of a reference variable that is currently `null` (i.e., it doesn't point to any object). Always ensure an object has been instantiated before accessing its members.
*   **Constructors:** Special methods used to initialize objects. The `new ClassName()` syntax implicitly calls the class's constructor.
*   **Reference Variables:** They hold the memory address of an object, not the object itself. Think of them as pointers.

---
