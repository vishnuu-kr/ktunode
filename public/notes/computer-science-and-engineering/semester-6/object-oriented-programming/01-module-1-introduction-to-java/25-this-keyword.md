---
title: "this keyword"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf9b"
status: "completed"
scrapedAt: "2026-05-20T16:56:03.993Z"
---
# Object-Oriented Programming: Introduction to Java

## Module 1: Introduction to Java

### Topic: The `this` Keyword

---

### Learning Outcomes Covered:

*   Understanding the purpose of the `this` keyword in Java.
*   Using `this` to differentiate between instance variables and local variables/parameters.
*   Using `this` to invoke constructors from other constructors (constructor chaining).
*   Using `this` to refer to the current object in method calls.
*   Understanding the context-dependent nature of `this`.

---

### 1. Key Concepts and Definitions

*   **Instance Variables:** Variables declared within a class but outside of any method or constructor. They belong to each individual object of the class.
*   **Local Variables:** Variables declared within a method, constructor, or block. They are temporary and exist only during the execution of that block.
*   **Parameters:** Variables declared in the method or constructor signature, used to pass values into the method or constructor.
*   **Constructor:** A special method used to initialize objects. It has the same name as the class and no return type.
*   **Object:** An instance of a class. It represents a real-world entity or concept with its own state (data) and behavior (methods).
*   **`this` Keyword:** A reference variable that refers to the **current object** within an instance method or constructor. It's implicitly passed as an argument to all non-static methods.

---

### 2. Purpose of the `this` Keyword

The `this` keyword in Java serves several crucial purposes:

*   **Distinguishing Instance Variables from Local Variables/Parameters:** When a local variable or parameter has the same name as an instance variable, `this` is used to explicitly refer to the instance variable.
*   **Invoking Other Constructors (Constructor Chaining):** Within a constructor, `this(...)` can be used to call another constructor of the same class. This is useful for code reusability and avoiding redundant initialization.
*   **Referring to the Current Object:** It can be used to pass the current object as an argument to a method of another object or to return the current object from a method.

---

### 3. Using `this` to Differentiate Instance Variables and Local Variables/Parameters

This is the most common use of `this`. When you have a parameter or local variable with the same name as an instance variable, `this` clarifies which one you are referring to.

**Example:**

```java
class Person {
    String name; // Instance variable

    // Constructor
    public Person(String name) {
        // 'this.name' refers to the instance variable 'name'
        // 'name' refers to the parameter 'name'
        this.name = name;
    }

    public void setName(String name) {
        // 'this.name' refers to the instance variable 'name'
        // 'name' refers to the parameter 'name'
        this.name = name;
    }

    public String getName() {
        return this.name; // 'this.name' refers to the instance variable
    }

    public static void main(String[] args) {
        Person person1 = new Person("Alice");
        System.out.println("Person 1's name: " + person1.getName()); // Output: Person 1's name: Alice

        person1.setName("Bob");
        System.out.println("Person 1's updated name: " + person1.getName()); // Output: Person 1's updated name: Bob
    }
}
```

**Explanation:**

*   In the `Person` constructor, `this.name = name;` means "assign the value of the parameter `name` to the instance variable `name` of the current `Person` object."
*   Similarly, in the `setName` method, `this.name = name;` distinguishes the instance variable from the parameter.
*   In the `getName` method, `return this.name;` explicitly returns the value of the instance variable `name`. While `return name;` would also work here if there's no local variable named `name`, using `this.name` is more explicit and often preferred for clarity, especially in larger classes.

---

### 4. Using `this` to Invoke Constructors (Constructor Chaining)

You can use `this(...)` within a constructor to call another constructor of the same class. This is known as constructor chaining and helps in reducing code duplication when you have multiple constructors with similar initialization logic.

**Important Rule:** The `this(...)` call **must** be the **first statement** in the constructor.

**Example:**

```java
class Rectangle {
    int width;
    int height;

    // Constructor 1: Initializes with width and height
    public Rectangle(int width, int height) {
        System.out.println("Constructor with width and height called.");
        this.width = width;
        this.height = height;
    }

    // Constructor 2: Initializes with only width, assuming height is equal to width (a square)
    public Rectangle(int width) {
        // Calls the first constructor to initialize width and height
        this(width, width); // 'this(width, width)' invokes the Rectangle(int, int) constructor
        System.out.println("Constructor with only width called (square).");
    }

    // Constructor 3: Default constructor, initializes with 0 for both
    public Rectangle() {
        // Calls the first constructor with default values
        this(0, 0);
        System.out.println("Default constructor called.");
    }

    public void display() {
        System.out.println("Rectangle: Width = " + width + ", Height = " + height);
    }

    public static void main(String[] args) {
        Rectangle r1 = new Rectangle(10, 5); // Calls Rectangle(int, int)
        r1.display();
        // Output:
        // Constructor with width and height called.
        // Rectangle: Width = 10, Height = 5

        Rectangle r2 = new Rectangle(7); // Calls Rectangle(int) which calls Rectangle(int, int)
        r2.display();
        // Output:
        // Constructor with width and height called.
        // Constructor with only width called (square).
        // Rectangle: Width = 7, Height = 7

        Rectangle r3 = new Rectangle(); // Calls Rectangle() which calls Rectangle(int, int)
        r3.display();
        // Output:
        // Constructor with width and height called.
        // Default constructor called.
        // Rectangle: Width = 0, Height = 0
    }
}
```

**Explanation:**

*   `Rectangle r2 = new Rectangle(7);` calls the `Rectangle(int width)` constructor.
*   Inside `Rectangle(int width)`, `this(width, width);` calls the `Rectangle(int width, int height)` constructor, passing the provided `width` for both parameters. The rest of the `Rectangle(int width)` constructor then executes.
*   `Rectangle r3 = new Rectangle();` calls the `Rectangle()` constructor.
*   Inside `Rectangle()`, `this(0, 0);` calls the `Rectangle(int width, int height)` constructor with default values.

---

### 5. Using `this` to Refer to the Current Object

You can use `this` to refer to the current object itself, allowing you to pass it as an argument to another method or return it from a method.

**Example 1: Passing `this` as an Argument**

```java
class Calculator {
    public void performOperation(Operation op, int value) {
        op.execute(value);
    }
}

interface Operation {
    void execute(int num);
}

class AddTenOperation implements Operation {
    private Calculator owner; // To store the object that initiated the operation

    public AddTenOperation(Calculator owner) {
        this.owner = owner; // Using 'this' to assign the owner object
    }

    @Override
    public void execute(int num) {
        System.out.println("Performing addition: " + num + " + 10 = " + (num + 10));
    }
}

class MainApp {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        AddTenOperation addOp = new AddTenOperation(calc); // Passing 'calc' object

        calc.performOperation(addOp, 5);
        // Output: Performing addition: 5 + 10 = 15
    }
}
```

**Explanation:**

*   In the `AddTenOperation` constructor, `this.owner = owner;` assigns the `Calculator` object (passed as `owner`) to the `owner` instance variable of `AddTenOperation`.
*   While this example doesn't directly pass `this` *from* `Calculator` to `AddTenOperation`, a common scenario is where a method in `Calculator` might need to provide a reference to itself to another object. For example, if `AddTenOperation` needed to call back to `calc`.

**Example 2: Returning `this` from a Method**

```java
class Book {
    String title;
    int pages;

    public Book(String title, int pages) {
        this.title = title;
        this.pages = pages;
    }

    // Method that returns the current object
    public Book getBookDetails() {
        System.out.println("Book Title: " + this.title + ", Pages: " + this.pages);
        return this; // Returning a reference to the current Book object
    }

    public static void main(String[] args) {
        Book book1 = new Book("The Great Gatsby", 180);

        // Calling the method and getting the reference back
        Book returnedBook = book1.getBookDetails();

        // We can check if the returned object is the same as the original
        if (returnedBook == book1) {
            System.out.println("Returned object is the same as the original book object.");
        }
        // Output:
        // Book Title: The Great Gatsby, Pages: 180
        // Returned object is the same as the original book object.
    }
}
```

**Explanation:**

*   The `getBookDetails` method prints the book's details and then `return this;` returns a reference to the `book1` object itself.

---

### 6. Context-Dependent Nature of `this`

The `this` keyword is always used to refer to the **current object**. Its exact meaning depends on the context in which it is used:

*   **Inside an instance method:** `this` refers to the object on which the method was invoked.
*   **Inside a constructor:** `this` refers to the object being constructed.
*   **Cannot be used in static methods:** Static methods belong to the class itself, not to any specific object. Therefore, there is no "current object" in a static context, and `this` cannot be used.

**Example of `this` not being allowed in a static context:**

```java
class Example {
    int instanceVar = 10;

    public static void staticMethod() {
        // System.out.println(this.instanceVar); // ERROR: Non-static variable this cannot be referenced from a static context
        // this.instanceVar = 20;             // ERROR: Non-static variable this cannot be referenced from a static context
    }

    public void instanceMethod() {
        System.out.println(this.instanceVar); // OK: 'this' refers to the current object
    }
}
```

---

### 7. Important Points to Remember

*   `this` refers to the **current object** itself.
*   It's a keyword, not a variable you declare.
*   It's automatically passed as an argument to all non-static methods.
*   It is used to differentiate between instance variables and local variables/parameters with the same name.
*   `this(...)` can be used to call other constructors of the same class, and it **must** be the first statement.
*   `this` **cannot** be used in static methods or static blocks because they belong to the class, not to an object.
*   Using `this` for clarity, even when not strictly necessary (e.g., `this.name` vs `name` in a getter when no local variable conflicts), is often good practice.

---

### 8. Practice Questions and Exercises

**Question 1:**

What is the primary purpose of the `this` keyword in Java?

**Answer 1:**
The primary purpose of the `this` keyword is to refer to the current object. It is most commonly used to differentiate between instance variables and local variables/parameters with the same name, and to invoke constructors from other constructors (constructor chaining).

---

**Question 2:**

Consider the following Java code. What will be the output of `person1.getName()`?

```java
class Person {
    String name;

    public Person(String name) {
        name = name; // Problematic assignment
    }

    public String getName() {
        return name;
    }

    public static void main(String[] args) {
        Person person1 = new Person("Alice");
        System.out.println(person1.getName());
    }
}
```

**Answer 2:**
The output will be `null`.
**Explanation:** In the constructor `name = name;`, both `name` keywords refer to the parameter `name`. The instance variable `this.name` is never assigned a value. Therefore, `person1.name` remains `null`.

---

**Question 3:**

Rewrite the constructor in Question 2 to correctly initialize the `name` instance variable using the `this` keyword.

**Answer 3:**
```java
class Person {
    String name;

    public Person(String name) {
        this.name = name; // Correctly uses 'this' to assign to the instance variable
    }

    public String getName() {
        return name;
    }

    public static void main(String[] args) {
        Person person1 = new Person("Alice");
        System.out.println(person1.getName()); // Output: Alice
    }
}
```

---

**Question 4:**

Explain constructor chaining and provide a small code example using `this(...)`.

**Answer 4:**
Constructor chaining is the technique of calling one constructor from another constructor within the same class using the `this(...)` syntax. This helps in reusing constructor logic and avoiding redundancy. The `this(...)` call must be the first statement in the constructor.

**Example:**

```java
class Car {
    String model;
    String color;
    int year;

    public Car(String model, String color, int year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }

    public Car(String model, String color) {
        this(model, color, 2023); // Calls the first constructor, assuming default year
    }

    public void display() {
        System.out.println("Model: " + model + ", Color: " + color + ", Year: " + year);
    }

    public static void main(String[] args) {
        Car c1 = new Car("Sedan", "Blue", 2022);
        c1.display(); // Output: Model: Sedan, Color: Blue, Year: 2022

        Car c2 = new Car("SUV", "Red");
        c2.display(); // Output: Model: SUV, Color: Red, Year: 2023
    }
}
```

---

**Question 5:**

Can the `this` keyword be used in a `static` method? Justify your answer.

**Answer 5:**
No, the `this` keyword **cannot** be used in a `static` method.
**Justification:** Static methods belong to the class itself, not to any specific instance (object) of the class. The `this` keyword is a reference to the current object. Since there is no current object associated with a static method, `this` cannot be used within it. Attempting to do so will result in a compile-time error.
