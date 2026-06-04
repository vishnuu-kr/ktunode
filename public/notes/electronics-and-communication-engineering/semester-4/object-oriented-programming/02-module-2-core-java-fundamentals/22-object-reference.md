---
title: "Object Reference"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe68b"
status: "completed"
scrapedAt: "2026-05-23T17:51:33.524Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Core Java Fundamentals:

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Topic: Object Reference

---

### 1. Learning Outcomes Covered:

This topic primarily contributes to the following learning outcomes:

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.** (Knowledge Level: K3) - Understanding object references is fundamental to working with objects, manipulating their data, and invoking their methods in Java programs.

---

### 2. Key Concepts and Definitions:

#### 2.1 What is an Object Reference?

*   In Java, when you create an object using the `new` keyword, you don't directly hold the object itself. Instead, you get a *reference* to that object.
*   Think of it like a nickname or a pointer to a specific location in memory where the actual object is stored.
*   A reference variable doesn't contain the object's data directly; it holds the memory address of the object.

#### 2.2 Object vs. Reference Variable

*   **Object:** The actual instance of a class, residing in the heap memory. It contains the data (instance variables) and behavior (methods) defined by the class.
*   **Reference Variable:** A variable that stores the memory address of an object. It is declared with the name of a class and points to an object of that class.

**Example (Conceptual):**

```
// Class declaration (Blueprint)
class Dog {
    String name;
    // ... other attributes and methods
}

// Creating an object and getting a reference
Dog myDog = new Dog(); // myDog is the reference variable, pointing to a Dog object in memory.
```

#### 2.3 Creating Objects and References

*   The `new` keyword is used to create an object.
*   The `new` keyword allocates memory for the object on the heap and returns a reference to that newly created object.
*   This reference is then typically assigned to a reference variable of the same class type.

**Syntax:**

```java
ClassName variableName = new ClassName();
```

**Example:**

```java
// Creating a String object and assigning its reference to the 'message' variable
String message = new String("Hello, Java!");

// Creating an Integer object (wrapper class)
Integer count = new Integer(10);
```

#### 2.4 Assigning References

*   You can assign the reference of one object to another reference variable of the same type.
*   When you do this, both reference variables will point to the *same* object in memory.

**Example:**

```java
Dog dog1 = new Dog();
dog1.name = "Buddy";

Dog dog2 = dog1; // dog2 now refers to the same Dog object as dog1

System.out.println(dog1.name); // Output: Buddy
System.out.println(dog2.name); // Output: Buddy

// Modifying through one reference affects the other
dog2.name = "Max";
System.out.println(dog1.name); // Output: Max
```

**Important Point:** This is assignment of references, not a "deep copy" of the object. Both `dog1` and `dog2` point to the identical object.

#### 2.5 `null` Reference

*   A reference variable can be set to `null`, indicating that it does not currently refer to any object.
*   If you try to access a member (field or method) of a `null` reference, a `NullPointerException` will be thrown.

**Example:**

```java
Dog myDog = null;

// The following line will cause a NullPointerException
// System.out.println(myDog.name);

if (myDog == null) {
    System.out.println("myDog is not pointing to any object.");
}
```

#### 2.6 The `this` Keyword

*   The `this` keyword is a reference that refers to the current object within an instance method or constructor.
*   It's used to differentiate between instance variables and local variables or parameters with the same name.

**Example:**

```java
class Car {
    String color;

    // Constructor
    public Car(String color) {
        this.color = color; // 'this.color' refers to the instance variable, 'color' refers to the parameter
    }

    // Method
    public void displayColor() {
        System.out.println("Car color is: " + this.color); // 'this.color' refers to the instance variable
    }
}

Car myCar = new Car("Red");
myCar.displayColor(); // Output: Car color is: Red
```

#### 2.7 The `==` Operator with References

*   When used with reference variables, the `==` operator checks if two references point to the *same object* in memory (i.e., if they have the same memory address).
*   It does **not** compare the contents or values of the objects themselves.

**Example:**

```java
Dog dog1 = new Dog();
dog1.name = "Buddy";

Dog dog2 = new Dog();
dog2.name = "Buddy"; // dog2 is a different object, even if its name is the same

Dog dog3 = dog1; // dog3 refers to the same object as dog1

System.out.println(dog1 == dog2); // Output: false (different objects)
System.out.println(dog1 == dog3); // Output: true (same object)
```

**Contrast with String `equals()` method:** For `String` objects, the `equals()` method is used to compare the *content* of the strings.

```java
String s1 = new String("hello");
String s2 = new String("hello");

System.out.println(s1 == s2);      // Output: false (different String objects)
System.out.println(s1.equals(s2)); // Output: true (same content)
```

#### 2.8 Pass-by-Value vs. Pass-by-Reference (Java's Approach)

*   Java is strictly **pass-by-value**.
*   When you pass an object to a method, a *copy of the reference* to that object is passed, not the object itself.
*   This means the method can modify the *state* of the original object by using the copied reference, but it cannot change which object the original reference points to.

**Example:**

```java
class ValueChanger {
    int value;

    ValueChanger(int value) {
        this.value = value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}

public class ReferencePassing {
    public static void modifyObject(ValueChanger obj) {
        obj.setValue(100); // Modifies the object that obj refers to
    }

    public static void reassignObject(ValueChanger obj) {
        obj = new ValueChanger(200); // Reassigns the local reference 'obj', not the original reference
        System.out.println("Inside reassignObject: " + obj.value);
    }

    public static void main(String[] args) {
        ValueChanger vc = new ValueChanger(50);

        System.out.println("Before modifyObject: " + vc.value); // Output: 50
        modifyObject(vc);
        System.out.println("After modifyObject: " + vc.value);  // Output: 100 (object state changed)

        System.out.println("\nBefore reassignObject: " + vc.value); // Output: 100
        reassignObject(vc);
        System.out.println("After reassignObject: " + vc.value);   // Output: 100 (original reference unchanged)
    }
}
```

**Explanation:**

*   In `modifyObject`, the `obj` parameter receives a copy of the reference to the `vc` object. When `obj.setValue(100)` is called, it modifies the `value` field of the original `vc` object because both references point to the same memory location.
*   In `reassignObject`, `obj = new ValueChanger(200)` creates a *new* `ValueChanger` object and makes the *local* `obj` reference point to it. This does not affect the original `vc` reference in `main`, which still points to the object with `value = 100`.

#### 2.9 Garbage Collection and References

*   When a reference to an object is no longer held by any active variable (or if the program terminates), the object becomes eligible for garbage collection.
*   The Java Virtual Machine (JVM) has a garbage collector that automatically reclaims the memory occupied by unreferenced objects.

---

### 3. Examples:

The examples provided in the "Key Concepts and Definitions" section illustrate various aspects of object references, including creation, assignment, the `null` state, the `this` keyword, comparison with `==`, and passing references to methods.

---

### 4. Practice Questions/Exercises:

**Question 1:**

Consider the following Java code snippet:

```java
class Counter {
    int count = 0;

    public void increment() {
        count++;
    }
}

public class ReferenceExample {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = c1; // Assignment of reference
        Counter c3 = new Counter();

        c1.increment();
        c2.increment();
        c3.increment();

        System.out.println("c1.count: " + c1.count);
        System.out.println("c2.count: " + c2.count);
        System.out.println("c3.count: " + c3.count);

        System.out.println("c1 == c2: " + (c1 == c2));
        System.out.println("c1 == c3: " + (c1 == c3));
    }
}
```

What will be the output of this program? Explain your reasoning.

**Answer 1:**

```
c1.count: 2
c2.count: 2
c3.count: 1
c1 == c2: true
c1 == c3: false
```

**Explanation:**

*   `c1` and `c2` are assigned the same reference, meaning they both point to the *same* `Counter` object. Therefore, incrementing through `c1` or `c2` affects the same object, resulting in `count` becoming 2 for both.
*   `c3` is a *new* `Counter` object. Incrementing `c3` only affects this separate object, so its `count` becomes 1.
*   `c1 == c2` evaluates to `true` because both references point to the identical object in memory.
*   `c1 == c3` evaluates to `false` because `c1` and `c3` refer to two distinct `Counter` objects.

**Question 2:**

What is the primary difference between the `==` operator when used with primitive types and when used with reference types in Java?

**Answer 2:**

*   **Primitive Types (e.g., `int`, `char`, `boolean`):** The `==` operator compares the actual values of the primitives.
*   **Reference Types (e.g., `String`, custom objects):** The `==` operator compares the memory addresses stored in the reference variables. It checks if both references point to the exact same object in memory.

**Question 3:**

Write a short Java program that demonstrates the effect of passing a reference to an object into a method and modifying the object's state.

**Answer 3:**

```java
class Book {
    String title;

    Book(String title) {
        this.title = title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }
}

public class MethodReferenceDemo {

    // Method that modifies the object passed as a reference
    public static void changeBookTitle(Book bookRef, String newTitle) {
        if (bookRef != null) {
            bookRef.setTitle(newTitle); // Modifies the original Book object
        }
    }

    public static void main(String[] args) {
        Book myBook = new Book("The Hitchhiker's Guide");
        System.out.println("Original Book Title: " + myBook.getTitle());

        changeBookTitle(myBook, "The Restaurant at the End of the Universe");
        System.out.println("Modified Book Title: " + myBook.getTitle());
    }
}
```

**Explanation:**

The `changeBookTitle` method receives a copy of the reference to the `myBook` object. By calling `bookRef.setTitle(newTitle)`, the `title` of the original `myBook` object is successfully changed because `bookRef` and `myBook` point to the same `Book` instance.

---

### 5. Important Points to Remember:

*   **Objects live on the heap; references live on the stack (or within other objects).**
*   A reference variable holds the *memory address* of an object, not the object's data itself.
*   The `new` keyword is used to create an object and returns a reference.
*   Assigning one reference variable to another (`ref2 = ref1;`) makes both variables point to the *same* object.
*   A `null` reference means the variable is not pointing to any object. Dereferencing a `null` reference causes a `NullPointerException`.
*   The `==` operator compares references for equality (same object), not object content. Use `equals()` for content comparison (especially for `String` and other objects that override it).
*   Java uses **pass-by-value** for all arguments, including object references. When you pass an object to a method, a copy of the reference is passed, allowing modification of the object's state but not reassignment of the original reference within the method.

---

### 6. References and Content Incorporation:

This study material draws upon foundational concepts explained in the provided textbooks.

*   **Java: The Complete Reference (Herbert Schildt):** Provides detailed explanations of object creation, references, memory management, and the `new` operator. Chapter 4 (Variables, Arrays, and Expressions) and Chapter 5 (Control Flow Statements) often touch upon how variables (including references) are used. The core object-oriented chapters are also relevant.
*   **Java How to Program (Deitel & Deitel):** Offers comprehensive coverage of classes, objects, and references, often using clear analogies. Their discussion on pass-by-value versus pass-by-reference (and Java's unique approach) is particularly insightful.
*   **Fundamentals of Software Engineering (Rajib Mall):** While broader, it establishes the context of object-oriented principles, where understanding how objects interact via references is a prerequisite.
*   **Programming JAVA a Primer (Balagurusamy E):** Focuses on the practical aspects of Java, including detailed examples of object instantiation and reference manipulation.
*   **Introduction to Java Programming (Y. Daniel Liang):** Often presents concepts like references, `null`, and the `this` keyword with practical code examples.

The material synthesizes these explanations to provide a clear understanding of object references as a core concept in Java's object-oriented paradigm.

---

### 7. Alignment with Course Outcomes:

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (Knowledge Level: K3)**
    *   This topic directly addresses the "object concepts in Java." Understanding object references is crucial for declaring variables of class types, creating objects, assigning them, passing them to methods, and interacting with their members. This knowledge is foundational for developing functional Java programs that utilize OOP principles, thus aligning with K3 (Utilization).

---