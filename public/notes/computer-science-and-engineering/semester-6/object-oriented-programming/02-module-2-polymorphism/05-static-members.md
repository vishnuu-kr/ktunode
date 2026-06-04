---
title: "Static Members"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa1"
status: "completed"
scrapedAt: "2026-05-20T16:56:07.678Z"
---
# Object-Oriented Programming: Module 2: Polymorphism - Static Members

## Introduction to Static Members

In Object-Oriented Programming (OOP), **static members** (also known as class members) are attributes or methods that belong to the class itself, rather than to any specific instance (object) of the class. This means that all objects of a class share the same static members.

### Key Concepts and Definitions

*   **Static Variable (Class Variable):**
    *   A variable declared with the `static` keyword.
    *   It is associated with the class, not with individual objects.
    *   There is only one copy of a static variable for the entire class, regardless of how many objects are created.
    *   It is initialized when the class is loaded into memory.
    *   Can be accessed using the class name directly (e.g., `ClassName.staticVariable`) or through an object of the class (e.g., `objectName.staticVariable`), though accessing via the class name is preferred for clarity.

*   **Static Method (Class Method):**
    *   A method declared with the `static` keyword.
    *   It is associated with the class and can be called directly using the class name (e.g., `ClassName.staticMethod()`).
    *   Static methods can only access other static members (variables and methods) of the same class. They **cannot** access instance variables or instance methods directly because they don't operate on a specific object.
    *   They cannot use `this` or `super` keywords.
    *   They are often used for utility functions or operations that don't require an object's state.

*   **Static Initialization Block (Static Block):**
    *   A block of code enclosed in curly braces `{}` and preceded by the `static` keyword.
    *   It is executed only once when the class is loaded into memory, before any static methods are called or any objects are created.
    *   Primarily used for initializing static variables or performing complex initialization logic.

### Purpose and Use Cases of Static Members

Static members are useful in several scenarios:

1.  **Shared Data:** When you need a variable that is shared among all objects of a class. Examples include:
    *   Counting the number of objects created for a class.
    *   Storing constants that are relevant to the class.
    *   Holding configuration settings for the class.

2.  **Utility Functions:** For methods that perform operations related to the class but do not depend on the state of any particular object. Examples include:
    *   Math utility functions (e.g., `Math.sqrt()` in Java, `math.ceil()` in Python).
    *   Factory methods that create objects of the class.
    *   Helper methods for class-level operations.

3.  **Constants:** Defining constants that belong to a class. In many languages, `static final` (or similar constructs) is used for this purpose.

4.  **Singleton Pattern:** Implementing the Singleton design pattern, where only one instance of a class can exist.

5.  **Accessing Class Information:** Methods that provide information about the class itself, rather than its instances.

---

## Learning Outcomes Covered

### 1. Understanding the Concept of Static Members

*   **Definition:** Static members are members of a class that are shared by all instances of that class. They belong to the class itself, not to any specific object.
*   **Keywords:** The `static` keyword is used to declare static variables, methods, and blocks.

### 2. Differentiating Between Static and Instance Members

| Feature           | Static Member                                     | Instance Member                                       |
| :---------------- | :------------------------------------------------ | :---------------------------------------------------- |
| **Belongs to**    | Class                                             | Object (Instance)                                     |
| **Storage**       | Allocated in a separate memory area (e.g., heap or stack depending on language, often associated with the class definition). | Allocated on the heap when an object is created.    |
| **Accessibility** | Accessed via Class Name (preferred) or Object.    | Accessed via Object only.                             |
| **`this` Keyword**| Cannot use `this` keyword.                        | Can use `this` keyword to refer to the current object.|
| **Initialization**| Initialized when the class is loaded.             | Initialized when an object is created.                |
| **Scope**         | Class-wide                                        | Object-specific                                       |
| **Access Rules**  | Static methods can only access static members.    | Instance methods can access both instance and static members. |

### 3. Declaring and Using Static Variables

*   **Declaration:** `static <data_type> <variable_name>;`
*   **Initialization:** Can be initialized at the point of declaration or within a static initialization block.
*   **Access:** `ClassName.staticVariableName` or `objectName.staticVariableName`.

**Example (Java):**

```java
class Counter {
    static int count = 0; // Static variable

    Counter() {
        count++; // Increment count for each object created
    }

    public static void showCount() {
        System.out.println("Number of objects created: " + count);
    }
}

public class StaticExample {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();

        // Accessing static variable using class name
        System.out.println("Current count: " + Counter.count); // Output: 3

        // Accessing static method using class name
        Counter.showCount(); // Output: Number of objects created: 3

        // Accessing static variable through an object (less preferred)
        System.out.println("Count via c1: " + c1.count); // Output: 3
    }
}
```

**Example (Python):**

```python
class Counter:
    count = 0  # Static variable (class attribute)

    def __init__(self):
        Counter.count += 1 # Increment count using class name

    @classmethod
    def show_count(cls): # Class method
        print(f"Number of objects created: {cls.count}")

c1 = Counter()
c2 = Counter()
c3 = Counter()

# Accessing static variable using class name
print(f"Current count: {Counter.count}") # Output: 3

# Accessing class method using class name
Counter.show_count() # Output: Number of objects created: 3

# Accessing static variable through an object (less preferred)
print(f"Count via c1: {c1.count}") # Output: 3
```

### 4. Declaring and Using Static Methods

*   **Declaration:** `static <return_type> <method_name>(<parameters>) { ... }` (Java) or `@classmethod` decorator (Python).
*   **Calling:** `ClassName.staticMethodName()`
*   **Restrictions:**
    *   Can only access other static members directly.
    *   Cannot access instance variables or instance methods directly.
    *   Cannot use `this` or `super`.

**Example (Java - continued from above):**

The `showCount()` method in the `Counter` class is a static method. It can directly access the `static int count` variable.

**Example (Python - continued from above):**

The `show_count()` method, decorated with `@classmethod`, is a class method. It receives the class itself as the first argument (`cls`) and can access class attributes like `cls.count`.

### 5. Understanding Static Initialization Blocks

*   **Purpose:** Used for complex initialization of static variables.
*   **Execution:** Executes once when the class is loaded.
*   **Declaration (Java):**
    ```java
    static {
        // Initialization code here
        // Can initialize static variables
    }
    ```

**Example (Java):**

```java
class Config {
    static String databaseUrl;
    static int maxConnections;

    static {
        System.out.println("Initializing Config class...");
        databaseUrl = "jdbc:mysql://localhost:3306/mydb";
        maxConnections = 50;
        System.out.println("Config initialized.");
    }

    public static void displayConfig() {
        System.out.println("Database URL: " + databaseUrl);
        System.out.println("Max Connections: " + maxConnections);
    }
}

public class StaticBlockExample {
    public static void main(String[] args) {
        // The static block executes automatically when Config is loaded.
        Config.displayConfig();
        // Output:
        // Initializing Config class...
        // Config initialized.
        // Database URL: jdbc:mysql://localhost:3306/mydb
        // Max Connections: 50
    }
}
```

**Example (Python):**
Python doesn't have a direct equivalent to static initialization blocks. Initialization of class attributes happens directly in the class definition.

### 6. Static Members in Relation to Polymorphism

While static members themselves don't directly participate in runtime polymorphism (method overriding), they can influence how classes are structured and how certain behaviors are managed.

*   **Static Factory Methods:** Static methods can be used as factory methods to create objects. These factory methods can return different subclasses of a base class, effectively achieving a form of polymorphism at the object creation stage.
*   **Static Utility Methods:** Static utility methods can be used to perform operations that might vary based on a configuration or a shared state managed by static variables.

**Example of Static Factory Method (Java):**

```java
abstract class Shape {
    abstract void draw();

    // Static factory method
    public static Shape getShape(String type) {
        if ("circle".equalsIgnoreCase(type)) {
            return new Circle();
        } else if ("square".equalsIgnoreCase(type)) {
            return new Square();
        } else {
            return new DefaultShape(); // Or throw an exception
        }
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Circle.");
    }
}

class Square extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Square.");
    }
}

class DefaultShape extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a default shape.");
    }
}

public class PolymorphismStaticExample {
    public static void main(String[] args) {
        Shape myCircle = Shape.getShape("circle"); // Polymorphic reference
        myCircle.draw(); // Output: Drawing a Circle.

        Shape mySquare = Shape.getShape("square"); // Polymorphic reference
        mySquare.draw(); // Output: Drawing a Square.
    }
}
```
In this example, `Shape.getShape()` is a static factory method that returns different types of `Shape` objects based on the input string. The `myCircle` and `mySquare` variables are declared as `Shape` (a superclass), and the `draw()` method is called polymorphically.

---

## Important Points to Remember

*   **Belongs to Class, Not Object:** This is the fundamental principle of static members.
*   **Single Copy:** There's only one copy of a static variable shared by all objects.
*   **Access via Class Name:** Always prefer accessing static members using the class name for clarity and to emphasize their class-level nature.
*   **Static Method Limitations:** Remember that static methods cannot access instance members or use `this`/`super`.
*   **Initialization Order:** Static initialization blocks execute before any instance creation or static method calls.
*   **Utility and Constants:** Static members are ideal for utility functions and constants.
*   **No Polymorphic Behavior for Static Methods:** Static methods cannot be overridden in subclasses. If a subclass defines a method with the same signature as a static method in its superclass, it's considered method hiding, not overriding.

---

## Practice Questions and Exercises

**Question 1: Multiple Choice**

Which of the following statements about static members is FALSE?

a) Static variables are shared by all instances of a class.
b) Static methods can access instance variables directly.
c) Static members can be accessed using the class name.
d) Static initialization blocks execute only once when the class is loaded.

**Question 2: Fill in the Blanks**

1.  A variable declared with the `static` keyword is called a _________ variable.
2.  A method declared with the `static` keyword is called a _________ method.
3.  Static methods cannot use the _________ keyword.
4.  Static members are associated with the _________ rather than individual objects.

**Question 3: Code Analysis (Java)**

Consider the following Java code:

```java
class Test {
    static int x = 10;
    int y = 20;

    static void show() {
        System.out.println("x = " + x);
        // System.out.println("y = " + y); // Uncommenting this line will cause an error
    }

    void display() {
        System.out.println("x = " + x);
        System.out.println("y = " + y);
    }
}

public class Main {
    public static void main(String[] args) {
        Test.show();
        Test t1 = new Test();
        t1.display();
        System.out.println(Test.x); // Accessing static variable
        System.out.println(t1.y);   // Accessing instance variable
    }
}
```

What will be the output of this code?

**Question 4: Code Explanation (Python)**

Explain the role of `count` and `show_count` in the following Python code snippet:

```python
class Employee:
    count = 0  # Class attribute (static variable)

    def __init__(self, name):
        self.name = name
        Employee.count += 1

    @classmethod
    def get_employee_count(cls):
        return cls.count

emp1 = Employee("Alice")
emp2 = Employee("Bob")

print(f"Total employees: {Employee.get_employee_count()}")
print(f"Total employees: {emp1.get_employee_count()}")
```

---

## Answers to Practice Questions

**Answer 1:**

b) Static methods can access instance variables directly.
*   **Explanation:** Static methods can only access other static members. Accessing instance variables requires an object reference.

**Answer 2:**

1.  static
2.  static
3.  this
4.  class

**Answer 3:**

```
x = 10
x = 10
y = 20
10
20
```

*   **Explanation:**
    *   `Test.show();` calls the static method `show`, which prints the static variable `x`.
    *   `t1 = new Test();` creates an object.
    *   `t1.display();` calls the instance method `display`, which can access both static (`x`) and instance (`y`) variables of `t1`.
    *   `Test.x` accesses the static variable directly using the class name.
    *   `t1.y` accesses the instance variable of the `t1` object.
    *   The commented line `// System.out.println("y = " + y);` inside `show()` would cause a compile-time error because `show()` is a static method and cannot directly access the instance variable `y`.

**Answer 4:**

*   `count`: This is a **class attribute** (equivalent to a static variable in other languages). It is shared among all instances of the `Employee` class. It is initialized to `0` and is incremented every time a new `Employee` object is created (in the `__init__` method). This allows us to keep track of the total number of employees.
*   `get_employee_count`: This is a **class method** (decorated with `@classmethod`). It takes the class itself as the first argument (`cls`). This method allows us to access and return the value of the class attribute `count` using the class name (`cls.count`). It can be called either on the class itself (`Employee.get_employee_count()`) or on an instance of the class (`emp1.get_employee_count()`), but in both cases, it operates on the class-level `count`.

---

This concludes the study notes for Static Members within the Polymorphism module. Remember to practice implementing these concepts in your own code to solidify your understanding.
