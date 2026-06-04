---
title: "Final Variables"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa2"
status: "completed"
scrapedAt: "2026-05-20T16:56:08.407Z"
---
# Object-Oriented Programming: Module 2: Polymorphism

## Topic: Final Variables

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the purpose and usage of `final` variables in Java.
*   Distinguish between `final` variables initialized at declaration, in a constructor, and in an initializer block.
*   Explain the implications of `final` on primitive types and reference types.
*   Apply `final` variables effectively in your programs.

---

### 1. Introduction to `final` Variables

The `final` keyword in Java is a modifier that can be applied to variables, methods, and classes. When applied to a variable, it signifies that the variable's value, once assigned, **cannot be changed**. This makes `final` variables behave like constants.

**Key Concepts & Definitions:**

*   **Constant:** A value that does not change during the execution of a program.
*   **Immutability:** The property of an object whose state cannot be modified after it is created. `final` variables contribute to immutability.

**Purpose of `final` Variables:**

*   **Ensuring Data Integrity:** Prevents accidental modification of critical values.
*   **Readability and Maintainability:** Clearly signals that a variable is intended to be a constant, making code easier to understand.
*   **Performance Optimization:** The JVM *might* perform certain optimizations when dealing with `final` variables, as their values are known at compile time.

---

### 2. Types of `final` Variables and Initialization

A `final` variable must be initialized exactly once. The initialization can occur at different stages:

#### 2.1. `final` Variables Initialized at Declaration

This is the most straightforward way to declare and initialize a `final` variable.

**Key Concept:** The `final` variable is assigned a value at the moment of its declaration.

**Example:**

```java
public class FinalVariableExamples {

    public static final int MAX_USERS = 100; // Initialized at declaration (static final)
    public final String APP_NAME = "MyAwesomeApp"; // Initialized at declaration (instance final)

    public static void main(String[] args) {
        // MAX_USERS = 150; // ERROR: Cannot assign a value to final variable MAX_USERS
        // APP_NAME = "NewAppName"; // ERROR: Cannot assign a value to final variable APP_NAME

        System.out.println("Maximum Users: " + MAX_USERS);
        System.out.println("Application Name: " + APP_NAME);
    }
}
```

**Important Points to Remember:**

*   **`static final` variables (Constants):** These are class-level constants. They are initialized when the class is loaded by the JVM and can be accessed directly using the class name. Conventionally, they are named in uppercase with underscores.
*   **Instance `final` variables:** These belong to an object. Each object of the class will have its own copy of the `final` instance variable. They must be initialized either at declaration or within the constructor.

#### 2.2. `final` Variables Initialized in a Constructor

Instance `final` variables that are not initialized at declaration *must* be initialized within the class constructor.

**Key Concept:** Each object must provide a value for its `final` instance variables before the object is fully constructed.

**Example:**

```java
public class Student {
    private final int studentId;
    private final String studentName;

    // Constructor
    public Student(int studentId, String studentName) {
        this.studentId = studentId; // Initialized in constructor
        this.studentName = studentName; // Initialized in constructor
    }

    public void displayStudentInfo() {
        System.out.println("Student ID: " + studentId);
        System.out.println("Student Name: " + studentName);
        // studentId = 101; // ERROR: Cannot assign a value to final variable studentId
    }

    public static void main(String[] args) {
        Student s1 = new Student(101, "Alice");
        Student s2 = new Student(102, "Bob");

        s1.displayStudentInfo();
        s2.displayStudentInfo();
    }
}
```

**Important Points to Remember:**

*   All `final` instance variables must be initialized before the constructor completes its execution.
*   If a class has multiple constructors, each constructor must initialize all `final` instance variables.

#### 2.3. `final` Variables Initialized in an Initializer Block

An initializer block (also known as a static initializer block or instance initializer block) can also be used to initialize `final` variables.

**Key Concepts:**

*   **Static Initializer Block:** Executed once when the class is loaded. Used to initialize `static final` variables.
*   **Instance Initializer Block:** Executed for each object creation, before the constructor. Used to initialize instance `final` variables.

**Example (Instance Initializer Block):**

```java
public class GameConfig {
    private final int screenWidth;
    private final int screenHeight;

    // Instance Initializer Block
    {
        screenWidth = 1920; // Initialized in instance initializer
        screenHeight = 1080; // Initialized in instance initializer
        System.out.println("Instance initializer block executed.");
    }

    public GameConfig() {
        System.out.println("Constructor executed.");
    }

    public void displayResolution() {
        System.out.println("Resolution: " + screenWidth + "x" + screenHeight);
    }

    public static void main(String[] args) {
        GameConfig config = new GameConfig();
        config.displayResolution();
    }
}
```

**Example (Static Initializer Block):**

```java
public class MathConstants {
    public static final double PI;
    public static final double E;

    // Static Initializer Block
    static {
        PI = 3.141592653589793; // Initialized in static initializer
        E = 2.718281828459045;   // Initialized in static initializer
        System.out.println("Static initializer block executed.");
    }

    public static void main(String[] args) {
        System.out.println("PI: " + PI);
        System.out.println("E: " + E);
    }
}
```

**Important Points to Remember:**

*   An initializer block can only be used to initialize `final` variables.
*   An instance initializer block is executed *before* the constructor.
*   A static initializer block is executed *when the class is loaded*.

---
