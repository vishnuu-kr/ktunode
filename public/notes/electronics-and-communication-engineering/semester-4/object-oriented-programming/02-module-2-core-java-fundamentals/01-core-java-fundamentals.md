---
title: "Core Java Fundamentals:"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe676"
status: "completed"
scrapedAt: "2026-05-23T17:51:18.834Z"
---
# Object Oriented Programming: Module 2 - Core Java Fundamentals

## Module Overview

This module delves into the fundamental building blocks of Java programming, laying the groundwork for developing robust and efficient applications. We will explore core Java concepts, including data types, operators, control flow, and the foundational elements of object-oriented programming as implemented in Java: classes and objects.

## Learning Outcomes Covered in this Module:

*   **Understanding Java Basics:** Variables, data types, operators, and expressions.
*   **Control Flow:** Conditional statements (if, else, switch) and looping constructs (for, while, do-while).
*   **Classes and Objects:** Defining classes, creating objects, constructors, and accessing members.
*   **Basic Object-Oriented Concepts in Java:** Data hiding (encapsulation) and method invocation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## Textbook References:

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011.)** - Excellent resource for in-depth explanations of core Java syntax and concepts.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.)** - Focuses on early object-oriented principles and provides many practical examples.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013.)** - Provides a clear and structured approach to learning Java fundamentals.

## Course Outcomes Addressed:

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.** (Knowledge Level: K3)

---

## 1. Java Basics: Variables, Data Types, Operators, and Expressions

Java is a statically-typed language, meaning that the type of a variable must be declared before it can be used. This helps in catching errors at compile time.

### 1.1. Variables

A variable is a named location in memory that can store a value. It acts as a container for data.

*   **Declaration:** You must declare a variable before using it, specifying its type and name.
    ```java
    int age; // Declares an integer variable named 'age'
    String name; // Declares a string variable named 'name'
    ```
*   **Initialization:** Assigning an initial value to a variable.
    ```java
    age = 25; // Initializes 'age' with the value 25
    name = "Alice"; // Initializes 'name' with the string "Alice"
    ```
*   **Declaration and Initialization:** Often done in a single step.
    ```java
    int count = 100;
    double price = 19.99;
    ```

### 1.2. Data Types

Java has two categories of data types: primitive and reference.

#### 1.2.1. Primitive Data Types

These are the most basic data types in Java. They store actual values, not references.

| Data Type | Size (bits) | Description                               | Range                                                                    |
| :-------- | :---------- | :---------------------------------------- | :----------------------------------------------------------------------- |
| `byte`    | 8           | Smallest integer type                     | -128 to 127                                                              |
| `short`   | 16          | Smaller integer type                      | -32,768 to 32,767                                                        |
| `int`     | 32          | Standard integer type                     | -2,147,483,648 to 2,147,483,647                                          |
| `long`    | 64          | Larger integer type                       | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807                    |
| `float`   | 32          | Single-precision floating-point number    | Approximately ±3.40282347E+38                                            |
| `double`  | 64          | Double-precision floating-point number    | Approximately ±1.7976931348623157E+308                                   |
| `char`    | 16          | Single character (Unicode)                | \u0000 to \uffff (0 to 65,535)                                            |
| `boolean` | Varies      | Represents true or false                  | `true` or `false`                                                        |

**Example (Schildt, Ch 3):**

```java
public class DataTypesDemo {
    public static void main(String[] args) {
        byte b = 10;
        short s = 20;
        int i = 30;
        long l = 40L; // 'L' suffix for long literals
        float f = 50.5f; // 'f' suffix for float literals
        double d = 60.6;
        char c = 'A';
        boolean bool = true;

        System.out.println("Byte: " + b);
        System.out.println("Short: " + s);
        System.out.println("Int: " + i);
        System.out.println("Long: " + l);
        System.out.println("Float: " + f);
        System.out.println("Double: " + d);
        System.out.println("Char: " + c);
        System.out.println("Boolean: " + bool);
    }
}
```

#### 1.2.2. Reference Data Types

These data types store references (memory addresses) to objects. The most common reference type is `String`.

*   **String:** Represents a sequence of characters.
    ```java
    String greeting = "Hello, World!";
    ```

### 1.3. Operators

Operators perform operations on variables and values.

#### 1.3.1. Arithmetic Operators

Used for mathematical operations.

| Operator | Description     | Example     |
| :------- | :-------------- | :---------- |
| `+`      | Addition        | `a + b`     |
| `-`      | Subtraction     | `a - b`     |
| `*`      | Multiplication  | `a * b`     |
| `/`      | Division        | `a / b`     |
| `%`      | Modulus (remainder) | `a % b`     |

#### 1.3.2. Relational Operators

Used for comparing two values.

| Operator | Description       | Example     |
| :------- | :---------------- | :---------- |
| `==`     | Equal to          | `a == b`    |
| `!=`     | Not equal to      | `a != b`    |
| `>`      | Greater than      | `a > b`     |
| `<`      | Less than         | `a < b`     |
| `>=`     | Greater than or equal to | `a >= b`    |
| `<=`     | Less than or equal to  | `a <= b`    |

#### 1.3.3. Logical Operators

Used to combine conditional statements.

| Operator | Description        | Example     |
| :------- | :----------------- | :---------- |
| `&&`     | Logical AND        | `a && b`    |
| `||`     | Logical OR         | `a || b`    |
| `!`      | Logical NOT        | `!a`        |

#### 1.3.4. Assignment Operators

Used to assign values to variables.

| Operator | Example     | Equivalent to |
| :------- | :---------- | :------------ |
| `=`      | `a = 10`    | -             |
| `+=`     | `a += 5`    | `a = a + 5`   |
| `-=`     | `a -= 5`    | `a = a - 5`   |
| `*=`     | `a *= 5`    | `a = a * 5`   |
| `/=`     | `a /= 5`    | `a = a / 5`   |
| `%=`     | `a %= 5`    | `a = a % 5`   |

#### 1.3.5. Increment and Decrement Operators

Used to increase or decrease a variable's value by one.

| Operator | Description     | Example     |
| :------- | :-------------- | :---------- |
| `++`     | Increment       | `a++` or `++a` |
| `--`     | Decrement       | `a--` or `--a` |

*   **Prefix (`++a`, `--a`):** The operation is performed *before* the value is used in the expression.
*   **Postfix (`a++`, `a--`):** The operation is performed *after* the value is used in the expression.

**Example (Deitel & Deitel, Ch 4):**

```java
public class OperatorDemo {
    public static void main(String[] args) {
        int x = 10;
        int y = 5;
        int z;

        z = x + y * 2; // Order of operations: multiplication first
        System.out.println("z = x + y * 2: " + z); // Output: z = x + y * 2: 20

        int a = 10;
        int b = a++; // Postfix increment: b gets 10, then a becomes 11
        System.out.println("b = a++: b=" + b + ", a=" + a); // Output: b = a++: b=10, a=11

        int c = 10;
        int d = ++c; // Prefix increment: c becomes 11, then d gets 11
        System.out.println("d = ++c: d=" + d + ", c=" + c); // Output: d = ++c: d=11, c=11
    }
}
```

### 1.4. Expressions

An expression is a combination of one or more operands (variables, literals) and zero or more operators that evaluate to a single value.

*   **Arithmetic Expressions:**
    ```java
    int sum = 10 + 5;
    double average = (double) (sum) / 2; // Type casting is important for accurate division
    ```
*   **Relational Expressions:**
    ```java
    boolean isGreater = (15 > 10); // true
    ```
*   **Logical Expressions:**
    ```java
    boolean isValid = (age > 18) && (name != null);
    ```

---

## 2. Control Flow Statements

Control flow statements dictate the order in which statements are executed in a program.

### 2.1. Conditional Statements

Used to execute different blocks of code based on whether a condition is true or false.

#### 2.1.1. `if` Statement

Executes a block of code if a specified condition is true.

```java
if (condition) {
    // Code to execute if condition is true
}
```

#### 2.1.2. `if-else` Statement

Executes one block of code if the condition is true, and another block if it's false.

```java
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

#### 2.1.3. `if-else if-else` Ladder

Allows for multiple conditions to be checked sequentially.

```java
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition1 is false and condition2 is true
} else {
    // Code if all previous conditions are false
}
```

#### 2.1.4. `switch` Statement

Provides a way to select one of many code blocks to be executed based on the value of an expression.

```java
switch (expression) {
    case value1:
        // Code for value1
        break; // Exits the switch statement
    case value2:
        // Code for value2
        break;
    default: // Optional
        // Code if no case matches
}
```
**Important:** The `break` statement is crucial in a `switch` statement to prevent "fall-through" (executing subsequent `case` blocks).

**Example (Liang, Ch 5):**

```java
public class ConditionalDemo {
    public static void main(String[] args) {
        int score = 75;
        char grade;

        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B';
        } else if (score >= 70) {
            grade = 'C';
        } else if (score >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        System.out.println("Grade: " + grade); // Output: Grade: C

        int dayOfWeek = 3;
        String dayName;

        switch (dayOfWeek) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
        }
        System.out.println("Day of week: " + dayName); // Output: Day of week: Wednesday
    }
}
```

### 2.2. Looping Constructs

Used to execute a block of code repeatedly.

#### 2.2.1. `for` Loop

Ideal when the number of iterations is known beforehand.

```java
for (initialization; condition; update) {
    // Code to be executed repeatedly
}
```
*   **Initialization:** Executed once before the loop starts.
*   **Condition:** Checked before each iteration. If true, the loop continues; otherwise, it terminates.
*   **Update:** Executed after each iteration.

#### 2.2.2. `while` Loop

Executes a block of code as long as a specified condition is true. Use when the number of iterations is not known in advance.

```java
while (condition) {
    // Code to be executed repeatedly
}
```
The condition is checked *before* each iteration.

#### 2.2.3. `do-while` Loop

Similar to `while`, but the condition is checked *after* the loop body has been executed. This guarantees that the loop body executes at least once.

```java
do {
    // Code to be executed repeatedly
} while (condition);
```

#### 2.2.4. `break` and `continue` Statements

*   **`break`:** Terminates the current loop or `switch` statement.
*   **`continue`:** Skips the rest of the current iteration and proceeds to the next iteration of the loop.

**Example (Schildt, Ch 6):**

```java
public class LoopDemo {
    public static void main(String[] args) {
        // for loop
        System.out.println("Printing numbers 1 to 5 using for loop:");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

        // while loop
        System.out.println("\nPrinting even numbers up to 10 using while loop:");
        int count = 0;
        while (count <= 10) {
            if (count % 2 == 0) {
                System.out.println(count);
            }
            count++;
        }

        // do-while loop
        System.out.println("\nPrinting numbers 1 to 3 using do-while loop:");
        int j = 1;
        do {
            System.out.println(j);
            j++;
        } while (j <= 3);

        // break and continue example
        System.out.println("\nExample of break and continue:");
        for (int k = 1; k <= 10; k++) {
            if (k == 4) {
                continue; // Skip the rest of this iteration when k is 4
            }
            if (k == 8) {
                break; // Terminate the loop when k is 8
            }
            System.out.println(k);
        }
        // Output will be: 1, 2, 3, 5, 6, 7
    }
}
```

---

## 3. Classes and Objects (Core OOP Concepts in Java)

This section introduces the fundamental concepts of object-oriented programming in Java.

### 3.1. Classes

A class is a blueprint or a template for creating objects. It defines the properties (data members or attributes) and behaviors (methods or functions) that objects of that class will have.

**Syntax:**

```java
class ClassName {
    // Data members (variables)
    dataType variableName1;
    dataType variableName2;

    // Methods (behaviors)
    returnType methodName1(parameters) {
        // Method body
    }

    returnType methodName2(parameters) {
        // Method body
    }
}
```

**Example (Deitel & Deitel, Ch 7):**

```java
// Blueprint for a Dog
class Dog {
    // Data members (attributes)
    String breed;
    int age;
    String color;

    // Behavior (method)
    void bark() {
        System.out.println("Woof!");
    }

    void displayInfo() {
        System.out.println("Breed: " + breed + ", Age: " + age + ", Color: " + color);
    }
}
```

### 3.2. Objects

An object is an instance of a class. It is a concrete entity created from the class blueprint, possessing its own state (values of data members) and behavior (methods).

**Creating Objects (Instantiation):**

You use the `new` keyword to create an object.

```java
ClassName objectName = new ClassName();
```

**Accessing Members:**

You use the dot operator (`.`) to access the data members and methods of an object.

```java
objectName.dataMember;
objectName.methodName(arguments);
```

**Example (Continuing from `Dog` class):**

```java
public class ObjectDemo {
    public static void main(String[] args) {
        // Creating an object of the Dog class
        Dog myDog = new Dog();

        // Accessing data members and assigning values
        myDog.breed = "Labrador";
        myDog.age = 3;
        myDog.color = "Golden";

        // Accessing methods
        myDog.bark(); // Output: Woof!
        myDog.displayInfo(); // Output: Breed: Labrador, Age: 3, Color: Golden

        // Creating another object
        Dog anotherDog = new Dog();
        anotherDog.breed = "German Shepherd";
        anotherDog.age = 5;
        anotherDog.color = "Black and Tan";

        anotherDog.bark(); // Output: Woof!
        anotherDog.displayInfo(); // Output: Breed: German Shepherd, Age: 5, Color: Black and Tan
    }
}
```

### 3.3. Constructors

A constructor is a special type of method that has the same name as the class. It is automatically called when an object of the class is created. Constructors are used to initialize the data members of an object.

*   **Default Constructor:** If you don't explicitly define a constructor, Java provides a default constructor that takes no arguments.
*   **Parameterized Constructor:** A constructor that accepts parameters, allowing you to initialize the object with specific values upon creation.

**Syntax:**

```java
ClassName(parameters) {
    // Constructor body to initialize members
}
```

**Example (Schildt, Ch 7):**

```java
class Box {
    double width;
    double height;
    double depth;

    // Constructor
    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }

    // Method to calculate volume
    double volume() {
        return width * height * depth;
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        // Creating objects using the parameterized constructor
        Box myBox1 = new Box(10, 20, 15);
        Box myBox2 = new Box(5, 8, 12);

        System.out.println("Volume of myBox1: " + myBox1.volume()); // Output: 3000.0
        System.out.println("Volume of myBox2: " + myBox2.volume()); // Output: 480.0
    }
}
```

### 3.4. Data Hiding (Encapsulation)

Data hiding is a core OOP principle where the data members of a class are kept private and accessed only through public methods (getters and setters). This protects the data from direct modification and ensures data integrity.

*   **Access Modifiers:** `public`, `private`, `protected`, default (package-private).
    *   `private`: Accessible only within the same class.
    *   `public`: Accessible from anywhere.
*   **Getters:** Methods that return the value of a private data member.
*   **Setters:** Methods that modify the value of a private data member.

**Example (Liang, Ch 8):**

```java
class Circle {
    private double radius; // Data member is private

    // Constructor
    public Circle(double radius) {
        this.radius = radius; // 'this' refers to the current object
    }

    // Getter for radius
    public double getRadius() {
        return radius;
    }

    // Setter for radius
    public void setRadius(double radius) {
        if (radius >= 0) { // Validation in setter
            this.radius = radius;
        } else {
            System.out.println("Radius cannot be negative.");
        }
    }

    // Method to calculate area
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        Circle c1 = new Circle(5.0);
        System.out.println("Radius: " + c1.getRadius()); // Output: Radius: 5.0
        System.out.println("Area: " + c1.getArea());     // Output: Area: 78.5398...

        // Trying to set an invalid radius
        c1.setRadius(-2.0); // Output: Radius cannot be negative.
        System.out.println("Radius after invalid set: " + c1.getRadius()); // Output: Radius after invalid set: 5.0

        // Setting a valid radius
        c1.setRadius(7.5);
        System.out.println("New Radius: " + c1.getRadius()); // Output: New Radius: 7.5
        System.out.println("New Area: " + c1.getArea());     // Output: New Area: 176.7145...
    }
}
```

**Important Point to Remember:** Encapsulation bundles data and methods that operate on the data within a single unit (the class) and restricts direct access to the data.

### 3.5. Method Invocation

Calling a method on an object to perform a specific action.

```java
objectName.methodName(arguments);
```

**Example:**
In the `Dog` class example, `myDog.bark()` and `myDog.displayInfo()` are method invocations.

---

## Practice Questions

**Section 1: Java Basics**

1.  What are the two categories of data types in Java?
2.  Declare an integer variable named `count` and initialize it to 50.
3.  Write an expression to calculate the remainder when `17` is divided by `5`.
4.  What is the difference between `++x` and `x++`?
5.  What is the output of the following code snippet?
    ```java
    int a = 10;
    int b = a * 2 + 5;
    System.out.println(b);
    ```

**Section 2: Control Flow**

6.  When would you choose a `while` loop over a `for` loop?
7.  What is the purpose of the `break` statement in a `switch` statement?
8.  Write a `for` loop that prints the square of numbers from 1 to 5.
9.  What will be printed by the following code?
    ```java
    int x = 1;
    while (x < 5) {
        if (x % 2 == 0) {
            System.out.print("E");
        } else {
            System.out.print("O");
        }
        x++;
    }
    ```
10. Write an `if-else if-else` statement that checks if a number is positive, negative, or zero.

**Section 3: Classes and Objects**

11. Define a class named `Car` with data members `make`, `model`, and `year`.
12. Create an object of the `Car` class and assign values to its data members.
13. What is a constructor, and what is its primary purpose?
14. Explain the concept of data hiding (encapsulation) in Java.
15. Write a simple getter method for the `year` data member of the `Car` class.

---

## Answers to Practice Questions

**Section 1: Java Basics**

1.  Primitive data types and Reference data types.
2.  `int count = 50;`
3.  `17 % 5`
4.  `++x` (prefix) increments `x` first and then uses its value. `x++` (postfix) uses the value of `x` first and then increments it.
5.  `a * 2 + 5` evaluates to `10 * 2 + 5 = 20 + 5 = 25`. So, the output is `25`.

**Section 2: Control Flow**

6.  A `while` loop is preferred when the number of iterations is not known beforehand, and the loop continues as long as a condition remains true. A `for` loop is ideal when the number of iterations is predetermined.
7.  The `break` statement prevents "fall-through" in a `switch` statement, exiting the `switch` block after a `case` matches.
8.  ```java
    for (int i = 1; i <= 5; i++) {
        System.out.println(i * i);
    }
    ```
9.  The loop will execute for `x = 1, 2, 3, 4`.
    *   `x = 1` (odd): prints "O"
    *   `x = 2` (even): prints "E"
    *   `x = 3` (odd): prints "O"
    *   `x = 4` (even): prints "E"
    The output will be: `OEOE`
10. ```java
    int number = 0; // Example number

    if (number > 0) {
        System.out.println("Positive");
    } else if (number < 0) {
        System.out.println("Negative");
    } else {
        System.out.println("Zero");
    }
    ```

**Section 3: Classes and Objects**

11. ```java
    class Car {
        String make;
        String model;
        int year;
    }
    ```
12. ```java
    Car myCar = new Car();
    myCar.make = "Toyota";
    myCar.model = "Camry";
    myCar.year = 2022;
    ```
13. A constructor is a special method with the same name as the class. Its primary purpose is to initialize the state (data members) of an object when it is created.
14. Data hiding is the principle of restricting direct access to an object's data members by making them `private` and providing controlled access through public methods (getters and setters). This protects the data and maintains its integrity.
15. ```java
    public int getYear() {
        return year;
    }
    ```

---

## Important Points to Remember:

*   **Primitive vs. Reference Types:** Understand the distinction between storing actual values (`int`, `char`, `boolean`) and storing memory addresses (`String`, custom objects).
*   **Operator Precedence:** Be mindful of the order in which operations are performed to avoid unexpected results.
*   **`break` and `continue` in Loops:** Use these judiciously to control loop execution flow.
*   **`this` Keyword:** Use `this` within a class to refer to the current object, especially in constructors and methods to differentiate between local variables and instance variables.
*   **Encapsulation:** Aim to encapsulate your data to create more robust and maintainable code.
*   **Class as Blueprint, Object as Instance:** Clearly differentiate between the template (class) and the actual entity created from it (object).
*   **Constructors:** Ensure every object is properly initialized using constructors.

This module provides the foundational knowledge for all subsequent Java programming. Mastering these concepts is crucial for building any Java application.