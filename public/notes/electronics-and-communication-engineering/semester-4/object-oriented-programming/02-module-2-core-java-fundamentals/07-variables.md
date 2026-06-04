---
title: "Variables"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe67c"
status: "completed"
scrapedAt: "2026-05-23T17:51:23.003Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Core Java Fundamentals: Variables

This module delves into the fundamental building blocks of Java programs: variables. Understanding variables is crucial for storing and manipulating data, which is essential for any programming task, including developing object-oriented applications.

### Learning Outcomes:

*   **Understanding the Role of Variables:** Explain what variables are and their purpose in storing data within a Java program.
*   **Variable Declaration and Initialization:** Learn how to declare variables with appropriate data types and how to assign initial values to them.
*   **Data Types in Java:** Differentiate between primitive data types (int, float, boolean, char, etc.) and reference data types (objects, arrays).
*   **Scope of Variables:** Comprehend the different scopes of variables (local, instance, static) and how their accessibility is determined.
*   **Type Casting:** Understand the concept of type casting, including implicit and explicit casting, and when to use them.
*   **Constants:** Learn how to declare and use constants to represent fixed values.

---

### 1. What are Variables?

*   **Definition:** A variable is a named location in memory that can hold a value. This value can change during the execution of a program. Think of a variable as a container for data.
*   **Purpose:**
    *   **Storing Data:** Variables are used to store data that your program needs to process.
    *   **Representing Information:** They represent pieces of information like a user's name, a calculated result, or a status flag.
    *   **Enabling Dynamic Behavior:** By allowing values to change, variables enable programs to behave dynamically and respond to different inputs or conditions.

**Reference:**
*   **Herbert Schildt (Java: The Complete Reference, 8/e):** Emphasizes that variables are fundamental to storing and manipulating data, acting as symbolic names for memory locations.
*   **Paul Deitel, Harvey Deitel (Java How to Program, Early Objects, 11th Edition):** Describes variables as named memory locations that hold values of a specific type.

---

### 2. Variable Declaration and Initialization

#### 2.1. Declaration

*   **Syntax:** `dataType variableName;`
    *   `dataType`: Specifies the type of data the variable will hold (e.g., `int`, `String`, `boolean`).
    *   `variableName`: A unique identifier for the variable.
*   **Naming Rules:**
    *   Must start with a letter, an underscore (`_`), or a dollar sign (`$`).
    *   Can contain letters, numbers, underscores, and dollar signs.
    *   Case-sensitive (e.g., `myVar` is different from `MyVar`).
    *   Cannot be a Java reserved keyword (e.g., `public`, `class`, `int`).
    *   Conventionally, variable names start with a lowercase letter and use camelCase for subsequent words (e.g., `firstName`, `totalAmount`).

**Example:**
```java
int age;          // Declares an integer variable named 'age'
String name;      // Declares a String variable named 'name'
boolean isStudent; // Declares a boolean variable named 'isStudent'
```

#### 2.2. Initialization

*   **Definition:** Assigning an initial value to a variable when it is declared.
*   **Syntax:** `dataType variableName = initialValue;`

**Example:**
```java
int age = 25;           // Declares and initializes 'age' to 25
String name = "Alice";  // Declares and initializes 'name' to "Alice"
boolean isStudent = true; // Declares and initializes 'isStudent' to true
```

#### 2.3. Declaration and Initialization Separately

You can also declare a variable and initialize it later.

**Example:**
```java
int count;       // Declaration
count = 10;      // Initialization

String message;
message = "Hello, Java!";
```

**Important Point:** A variable must be initialized before it can be used. Attempting to use an uninitialized variable will result in a compile-time error.

---

### 3. Data Types in Java

Java has a rich set of data types to represent different kinds of information. These are broadly categorized into primitive and reference data types.

#### 3.1. Primitive Data Types

These are the basic building blocks for storing simple values. They are not objects and do not have methods.

| Data Type | Size (bits) | Description                                          | Range                                           | Example Value |
| :-------- | :---------- | :--------------------------------------------------- | :---------------------------------------------- | :------------ |
| `byte`    | 8           | Smallest integer type                                | -128 to 127                                     | `10`          |
| `short`   | 16          | Smaller integer type                                 | -32,768 to 32,767                               | `1000`        |
| `int`     | 32          | Standard integer type                                | -2,147,483,648 to 2,147,483,647                 | `100000`      |
| `long`    | 64          | Larger integer type                                  | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | `10000000000L` (L suffix for long) |
| `float`   | 32          | Single-precision floating-point number               | Approximately ±3.4e+38                          | `3.14f` (f suffix for float) |
| `double`  | 64          | Double-precision floating-point number (default for decimals) | Approximately ±1.8e+308                         | `3.14159`     |
| `boolean` | 1 (logical) | Represents true or false                             | `true` or `false`                               | `true`        |
| `char`    | 16          | Single character                                     | Unicode characters (e.g., 'A', 'z', '!')        | `'A'`         |

**Important Points:**
*   Integer literals are `int` by default. To specify a `long` literal, append `L` or `l`.
*   Floating-point literals are `double` by default. To specify a `float` literal, append `F` or `f`.
*   `char` literals are enclosed in single quotes.

**Reference:**
*   **Herbert Schildt (Java: The Complete Reference, 8/e):** Provides a detailed table of primitive data types, their sizes, and ranges.
*   **Y. Daniel Liang (Introduction to Java Programming, 7/e):** Clearly explains the storage and use of primitive types with illustrative examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


#### 3.2. Reference Data Types

These data types store references (addresses) to objects. They include:

*   **Class Types:** Variables of a class type refer to objects of that class.
    ```java
    String myString = new String("Hello"); // String is an object
    Scanner input = new Scanner(System.in); // Scanner is a class
    ```
*   **Interface Types:** Variables of an interface type refer to objects of classes that implement that interface.
*   **Array Types:** Variables of an array type refer to arrays.
    ```java
    int[] numbers = {1, 2, 3}; // An array of integers
    ```

**Key Difference:** Primitive types store the actual value, while reference types store the memory address of the object.

---

### 4. Scope of Variables

The scope of a variable determines where in the program it can be accessed and used.

#### 4.1. Local Variables

*   **Definition:** Declared inside a method, constructor, or block of code.
*   **Scope:** Accessible only within the method, constructor, or block where they are declared.
*   **Lifetime:** Created when the block is entered and destroyed when the block is exited.
*   **Initialization:** Must be explicitly initialized before use.

**Example:**
```java
public class ScopeExample {
    public void myMethod() {
        int localVar = 10; // Local variable
        System.out.println("Inside method: " + localVar);
        // System.out.println(instanceVar); // Error: instanceVar is not visible here
    }

    public static void main(String[] args) {
        // System.out.println(localVar); // Error: localVar is not visible here
        ScopeExample obj = new ScopeExample();
        obj.myMethod();
    }
}
```

#### 4.2. Instance Variables (Non-static Fields)

*   **Definition:** Declared inside a class but outside any method, constructor, or block.
*   **Scope:** Accessible from anywhere within the class. Each object of the class has its own copy of instance variables.
*   **Lifetime:** Created when an object of the class is created and destroyed when the object is garbage collected.
*   **Initialization:** Have default values if not explicitly initialized (e.g., `0` for numeric types, `false` for `boolean`, `null` for reference types).

**Example:**
```java
public class InstanceVariableExample {
    String instanceVar = "I am an instance variable"; // Instance variable

    public void display() {
        System.out.println(instanceVar);
    }

    public static void main(String[] args) {
        InstanceVariableExample obj1 = new InstanceVariableExample();
        InstanceVariableExample obj2 = new InstanceVariableExample();

        obj1.instanceVar = "Value for obj1";
        obj2.instanceVar = "Value for obj2";

        obj1.display(); // Output: Value for obj1
        obj2.display(); // Output: Value for obj2
    }
}
```

#### 4.3. Static Variables (Class Variables)

*   **Definition:** Declared using the `static` keyword inside a class but outside any method.
*   **Scope:** Accessible from anywhere within the class. There is only one copy of a static variable, shared among all instances (objects) of the class.
*   **Lifetime:** Created when the class is loaded by the JVM and destroyed when the class is unloaded.
*   **Initialization:** Have default values if not explicitly initialized. They are initialized once when the class is loaded.

**Example:**
```java
public class StaticVariableExample {
    static int count = 0; // Static variable

    StaticVariableExample() {
        count++; // Increment count for each object created
    }

    public static void main(String[] args) {
        StaticVariableExample obj1 = new StaticVariableExample();
        StaticVariableExample obj2 = new StaticVariableExample();
        StaticVariableExample obj3 = new StaticVariableExample();

        System.out.println("Number of objects created: " + StaticVariableExample.count); // Access using class name
        // Or access via an object (though class name is preferred)
        // System.out.println("Number of objects created: " + obj1.count);
    }
}
```

**Reference:**
*   **Rajib Mall (Fundamentals of Software Engineering, 4th edition):** Discusses variable scope in the context of program structure and modularity.
*   **Balagurusamy E (Programming JAVA a Primer, 5/e):** Clearly distinguishes between local, instance, and static variables with practical coding examples.

---

### 5. Type Casting

Type casting is the process of converting a value from one data type to another.

#### 5.1. Implicit Casting (Widening Conversion)

*   **Definition:** Automatically performed by the compiler when converting a smaller data type to a larger data type. No data loss occurs.
*   **Rule:** Smaller type to larger type.
    *   `byte` -> `short` -> `int` -> `long` -> `float` -> `double`
    *   `char` -> `int` -> `long` -> `float` -> `double`

**Example:**
```java
int myInt = 100;
long myLong = myInt;   // Implicitly converts int to long
float myFloat = myLong; // Implicitly converts long to float

System.out.println("Int: " + myInt);     // Output: Int: 100
System.out.println("Long: " + myLong);   // Output: Long: 100
System.out.println("Float: " + myFloat); // Output: Float: 100.0
```

#### 5.2. Explicit Casting (Narrowing Conversion)

*   **Definition:** Manually performed by the programmer when converting a larger data type to a smaller data type. Data loss can occur.
*   **Syntax:** `(targetDataType) value;`
*   **Rule:** Larger type to smaller type.
    *   `double` -> `float` -> `long` -> `int` -> `short` -> `byte`
    *   `int` -> `char`

**Example:**
```java
double myDouble = 9.78;
int myInt = (int) myDouble; // Explicitly casts double to int

System.out.println("Double: " + myDouble); // Output: Double: 9.78
System.out.println("Int: " + myInt);       // Output: Int: 9 (decimal part is truncated)

int largeInt = 500;
byte myByte = (byte) largeInt; // Explicitly casts int to byte

System.out.println("Large Int: " + largeInt); // Output: Large Int: 500
System.out.println("Byte: " + myByte);       // Output: Byte: -12 (value wraps around due to data loss)
```

**Important Point:** Be cautious with explicit casting as it can lead to data loss or unexpected results if the value cannot be represented in the target data type.

**Reference:**
*   **Herbert Schildt (Java: The Complete Reference, 8/e):** Dedicates a section to type conversions, explaining both implicit and explicit casting with clear illustrations.
*   **Jerry D. Gibson, Andrew W. Gibson (Object-Oriented Systems Development using the Unified Modeling Language):** While focused on UML, the foundational programming concepts like type casting are implicitly understood as part of Java's syntax.

---

### 6. Constants

*   **Definition:** A variable whose value cannot be changed after it has been assigned.
*   **Declaration:** Declared using the `final` keyword.
*   **Convention:** Constant names are typically written in all uppercase letters, with words separated by underscores.

**Example:**
```java
public class ConstantsExample {
    public static final double PI = 3.14159;
    public static final int MAX_USERS = 100;

    public static void main(String[] args) {
        double radius = 5.0;
        double area = PI * radius * radius;
        System.out.println("The area of the circle is: " + area);

        if (MAX_USERS > 50) {
            System.out.println("Welcome, we have plenty of space.");
        }
    }
}
```

**Benefits of Constants:**
*   **Readability:** Makes code easier to understand by using meaningful names for fixed values.
*   **Maintainability:** If a constant value needs to be changed, you only need to modify it in one place.
*   **Prevents Errors:** Ensures that important values are not accidentally modified.

**Reference:**
*   **Paul Deitel, Harvey Deitel (Java How to Program, Early Objects, 11th Edition):** Highlights the use of `final` for constants and their importance in defining fixed program parameters.

---

### Alignment with Course Outcomes:

*   **CO1 (Summarize OO concepts):** While this module focuses on fundamentals, understanding variables is a prerequisite for defining class attributes (instance variables) which are core to object-oriented programming. Variables are the data members of objects.
*   **CO2 (Utilize datatypes, operators, control statements, OO class, object concepts):** This module directly addresses the use of **datatypes** and **variables**, which are fundamental to constructing any Java program, including those that utilize class and object concepts.
*   **CO3 (Illustrate robust programs using packages, exception handling, I/O):** The concepts of variables, their types, and their scope are foundational for writing any kind of program, including robust ones. Proper variable management is key to avoiding runtime errors.
*   **CO4 (Identify and utilize Swing controls):** GUI programming with Swing involves variables to store and manipulate data displayed in components and containers. Understanding variable types and initialization is essential for working with Swing.

---

### Practice Questions/Exercises:

1.  **Declaration and Initialization:** Declare a variable of type `float` named `temperature` and initialize it with the value `25.5f`. Then, declare an `int` variable named `year` and initialize it with `2023`.

    **Answer:**
    ```java
    float temperature = 25.5f;
    int year = 2023;
    ```

2.  **Data Type Selection:** Which data type would you use to store:
    a) The number of students in a class (maximum 100)?
    b) The price of a product (e.g., $19.99)?
    c) Whether a user is logged in (`true` or `false`)?
    d) A single character, like a letter grade ('A', 'B', 'C')?

    **Answer:**
    a) `int` (or `byte` if you are sure it won't exceed 127)
    b) `double`
    c) `boolean`
    d) `char`

3.  **Scope Example:** Write a short Java code snippet that demonstrates the difference between a local variable and an instance variable.

    **Answer:**
    ```java
    public class ScopeDemo {
        int instanceVar = 10; // Instance variable

        public void demonstrateScope() {
            int localVar = 20; // Local variable
            System.out.println("Instance variable: " + instanceVar);
            System.out.println("Local variable: " + localVar);
        }

        public static void main(String[] args) {
            ScopeDemo demo = new ScopeDemo();
            demo.demonstrateScope();
            // System.out.println(localVar); // This would cause a compile error
        }
    }
    ```

4.  **Type Casting:** Convert a `double` value `150.75` to an `int` and print the result. What do you observe? Then, convert an `int` value `250` to a `byte` and print it. What do you observe?

    **Answer:**
    ```java
    double doubleValue = 150.75;
    int intValue = (int) doubleValue; // Explicit cast
    System.out.println("Double to Int: " + intValue); // Output: Double to Int: 150 (decimal part truncated)

    int largeIntValue = 250;
    byte byteValue = (byte) largeIntValue; // Explicit cast
    System.out.println("Int to Byte: " + byteValue); // Output: Int to Byte: -6 (value wrapped around)
    ```
    *Observation:* When casting `double` to `int`, the fractional part is lost. When casting a value larger than the target type's range (like 250 to `byte`), the value wraps around, leading to an unexpected result.

5.  **Constants:** Declare a constant named `DAYS_IN_WEEK` and initialize it to `7`. Then, use this constant in a simple calculation, like calculating the total days in `5` weeks.

    **Answer:**
    ```java
    public class ConstantCalculation {
        public static final int DAYS_IN_WEEK = 7;

        public static void main(String[] args) {
            int numberOfWeeks = 5;
            int totalDays = numberOfWeeks * DAYS_IN_WEEK;
            System.out.println("Total days in " + numberOfWeeks + " weeks: " + totalDays);
            // DAYS_IN_WEEK = 8; // This would cause a compile error because it's a constant
        }
    }
    ```

---

### Important Points to Remember:

*   **Variables are named memory locations** that hold data.
*   **Declaration** defines the variable's name and type.
*   **Initialization** assigns an initial value to a variable.
*   **Primitive types** store actual values; **reference types** store addresses of objects.
*   Understand the **ranges and sizes of primitive data types** to choose the most appropriate one.
*   **Scope** dictates where a variable can be accessed (local, instance, static).
*   **Implicit casting** is safe (widening); **explicit casting** requires care (narrowing) as it can lead to data loss.
*   Use the `final` keyword to declare **constants** for values that should not change, improving code readability and maintainability.
*   Always initialize variables before using them to avoid compile-time errors.

---
This comprehensive set of notes covers the fundamental concepts of variables in Java, aligning with the learning outcomes and course objectives of Module 2. The references to textbooks provide further depth for advanced study.