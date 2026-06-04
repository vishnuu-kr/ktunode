---
title: "Object Oriented Programming in Java  - Class Fundamentals"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe689"
status: "completed"
scrapedAt: "2026-05-23T17:51:32.086Z"
---
# OBJECT ORIENTED PROGRAMMING: Module 2: Core Java Fundamentals

## Topic: Object Oriented Programming in Java - Class Fundamentals

### 1. Introduction to Classes and Objects

**Learning Outcome:** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (CO1, K2)

**Key Concepts:**

*   **Object-Oriented Programming (OOP):** A programming paradigm that organizes software design around data, or objects, rather than functions and logic. It aims to model real-world entities and their interactions.
*   **Class:** A blueprint or template for creating objects. It defines the properties (data members or attributes) and behaviors (methods or functions) that objects of that class will have.
    *   **Analogy:** A blueprint for a house. It defines the number of rooms, their layout, etc., but it's not the actual house.
*   **Object:** An instance of a class. It's a concrete entity created from the class blueprint, possessing the defined properties and behaviors.
    *   **Analogy:** An actual house built according to the blueprint. Each house is an independent entity.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Emphasizes classes as the fundamental building blocks of Java programs, encapsulating data and behavior.
*   **Java How to Program (Deitel & Deitel):** Introduces classes as user-defined types, highlighting their role in creating self-contained software components.

**Content:**

*   **Classes as Blueprints:** Classes define the structure and behavior of objects. They don't occupy memory themselves; rather, they act as templates.
*   **Objects as Instances:** Objects are runtime entities that have state (values of their attributes) and behavior (methods they can perform).
*   **Real-world Modeling:** Classes are used to represent real-world entities (e.g., `Car`, `Student`, `Account`) and their characteristics.

**Example:**

```java
// Class definition for a simple Car
class Car {
    // Data members (attributes)
    String color;
    String model;
    int year;

    // Methods (behaviors)
    void startEngine() {
        System.out.println("Engine started!");
    }

    void displayCarInfo() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
    }
}

// Main class to demonstrate creating Car objects
public class CarDemo {
    public static void main(String[] args) {
        // Creating objects (instances) of the Car class
        Car myCar = new Car();
        Car anotherCar = new Car();

        // Assigning values to the attributes of myCar
        myCar.color = "Red";
        myCar.model = "Sedan";
        myCar.year = 2023;

        // Assigning values to the attributes of anotherCar
        anotherCar.color = "Blue";
        anotherCar.model = "SUV";
        anotherCar.year = 2022;

        // Calling methods on the objects
        myCar.startEngine();
        myCar.displayCarInfo();

        anotherCar.displayCarInfo();
    }
}
```

**Important Points to Remember:**

*   Every Java program requires at least one class.
*   Objects are created using the `new` keyword.
*   An object is an instance of a class.

---

### 2. Declaring a Class

**Learning Outcome:** Utilize datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (CO2, K3)

**Key Concepts:**

*   **Class Declaration:** The syntax used to define a class in Java.
*   **Access Modifiers:** Keywords like `public`, `private`, `protected`, and default (no keyword) that control the visibility of class members.
*   **Instance Variables (Data Members/Attributes):** Variables declared within a class but outside of any method. They define the state of an object.
*   **Methods (Behaviors/Functions):** Blocks of code that perform specific actions. They define the behavior of an object.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Details the syntax for class declaration, including access modifiers and member declarations.
*   **Fundamentals of Software Engineering (Mall):** Discusses classes as fundamental software modules and the importance of encapsulation.

**Content:**

*   **Syntax:**
    ```java
    [access_modifier] class ClassName {
        // Instance variables (attributes)
        [access_modifier] data_type variable_name;

        // Methods (behaviors)
        [access_modifier] return_type method_name([parameters]) {
            // Method body
        }
    }
    ```
*   **`class` Keyword:** Used to declare a class.
*   **`ClassName`:** The identifier for the class, typically starting with an uppercase letter (CamelCase convention).
*   **Instance Variables:**
    *   Should be declared with appropriate data types (e.g., `int`, `String`, `double`).
    *   Can be declared with access modifiers to control their visibility.
*   **Methods:**
    *   Define the actions an object can perform.
    *   Have a return type (or `void` if they don't return a value).
    *   Can accept parameters to pass data into the method.

**Example:**

```java
// Declaring a class for a Student
public class Student { // public access modifier for the class
    // Instance variables (attributes)
    public String name;      // public access for name
    private int studentId; // private access for studentId (data hiding)
    double gpa;            // default access for gpa

    // Constructor (will be covered in detail later)
    public Student(String name, int studentId, double gpa) {
        this.name = name;
        this.studentId = studentId;
        this.gpa = gpa;
    }

    // Method to display student information
    public void displayDetails() {
        System.out.println("Student Name: " + name);
        System.out.println("Student ID: " + studentId);
        System.out.println("GPA: " + gpa);
    }

    // Getter method for private studentId
    public int getStudentId() {
        return studentId;
    }

    // Setter method for private studentId
    public void setStudentId(int studentId) {
        // Basic validation can be added here
        if (studentId > 0) {
            this.studentId = studentId;
        } else {
            System.out.println("Invalid student ID.");
        }
    }
}
```

**Important Points to Remember:**

*   Choose meaningful names for classes, variables, and methods.
*   Use access modifiers to enforce encapsulation.
*   The `public` access modifier means the class can be accessed from any other class.
*   The `private` access modifier means the member can only be accessed within the same class.

---

### 3. Creating Objects (Instantiation)

**Learning Outcome:** Utilize datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (CO2, K3)

**Key Concepts:**

*   **Instantiation:** The process of creating an object from a class.
*   **`new` Keyword:** Used to allocate memory for a new object and call its constructor.
*   **Constructor:** A special method that is automatically called when an object is created. It's used to initialize the object's state.
*   **Object Reference:** A variable that holds the memory address of an object.

**Textbook References:**

*   **Java How to Program (Deitel & Deitel):** Explains the `new` operator and constructors in detail, emphasizing their role in object initialization.
*   **Java in A Nutshell (Flanagan):** Provides concise explanations of object creation and the lifecycle of an object.

**Content:**

*   **Syntax:**
    ```java
    ClassName objectName = new ClassName(); // Default constructor call
    ClassName objectName = new ClassName(arguments); // Constructor with arguments
    ```
*   **`new` Operator:** Allocates memory on the heap for the object.
*   **Constructor Call:** Invokes the constructor of the class to initialize the object's instance variables. If no constructor is explicitly defined, Java provides a default no-argument constructor.
*   **Object Reference:** The `objectName` is a reference variable that points to the newly created object in memory.

**Example (Continuing from the `Student` class):**

```java
public class StudentDemo {
    public static void main(String[] args) {
        // Creating an object of the Student class using the constructor
        Student student1 = new Student("Alice", 101, 3.8);
        Student student2 = new Student("Bob", 102, 3.5);

        // Accessing members through the object reference
        System.out.println("Student 1's Name: " + student1.name); // Accessing public attribute
        // System.out.println(student1.studentId); // Error: studentId is private

        // Using getter to access private member
        System.out.println("Student 1's ID: " + student1.getStudentId());

        // Using setter to modify private member
        student1.setStudentId(105);
        System.out.println("Student 1's Updated ID: " + student1.getStudentId());

        // Displaying details using a method
        System.out.println("\nDetails for Student 2:");
        student2.displayDetails();
    }
}
```

**Important Points to Remember:**

*   Objects are always created on the heap.
*   References are stored on the stack.
*   The `new` keyword is essential for object creation.
*   Constructors are crucial for initializing objects.

---

### 4. Constructors

**Learning Outcome:** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (CO1, K2)
**Learning Outcome:** Utilize datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (CO2, K3)

**Key Concepts:**

*   **Constructor:** A special block of code that gets executed automatically when an object of the class is created.
*   **Purpose:** To initialize the object's state (instance variables).
*   **Rules:**
    *   Must have the same name as the class.
    *   Does not have a return type, not even `void`.
    *   Can be overloaded (multiple constructors with different parameter lists).
    *   If you don't define any constructor, Java provides a default no-argument constructor.
    *   If you define any constructor (even a parameterized one), the default no-argument constructor is NOT provided automatically.
*   **`this` Keyword:** Used within a constructor or method to refer to the current object's instance variables or to call another constructor in the same class.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Provides a thorough explanation of constructor overloading and the `this` keyword.
*   **Java How to Program (Deitel & Deitel):** Highlights the critical role of constructors in object initialization and the concept of constructor chaining.
*   **Programming JAVA a Primer (Balagurusamy):** Introduces constructors as a mechanism for object initialization.

**Content:**

*   **Default Constructor:** Provided by Java if no constructor is defined in the class. It initializes instance variables to their default values (0 for numeric types, `null` for object references, `false` for booleans).
*   **Parameterized Constructor:** A constructor that accepts arguments. These arguments are used to initialize the object's instance variables.
*   **Constructor Overloading:** Defining multiple constructors within a class, each with a different signature (number and types of parameters). This allows for flexibility in object creation.
*   **`this` Keyword Usage:**
    *   `this.variableName = variableName;`: To differentiate between instance variables and constructor parameters when they have the same name.
    *   `this(arguments);`: To call another constructor within the same class (constructor chaining). This must be the first statement in the constructor.

**Example (Using `Student` class with constructors):**

```java
public class Student {
    public String name;
    private int studentId;
    double gpa;

    // Default Constructor (provided if no other constructors are defined)
    // If we define any constructor below, this one is not automatically provided.
    // public Student() {
    //     this.name = "Unknown";
    //     this.studentId = 0;
    //     this.gpa = 0.0;
    //     System.out.println("Default Student object created.");
    // }

    // Parameterized Constructor
    public Student(String name, int studentId, double gpa) {
        // Using 'this' to refer to instance variables
        this.name = name;
        this.studentId = studentId;
        this.gpa = gpa;
        System.out.println("Parameterized Student object created for " + this.name);
    }

    // Another Overloaded Constructor (e.g., for a student with no initial GPA)
    public Student(String name, int studentId) {
        // Using 'this' to call another constructor in the same class (constructor chaining)
        this(name, studentId, 0.0); // Calls the parameterized constructor
        System.out.println("Student object created with name and ID only.");
    }

    public void displayDetails() {
        System.out.println("Student Name: " + name);
        System.out.println("Student ID: " + studentId);
        System.out.println("GPA: " + gpa);
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        if (studentId > 0) {
            this.studentId = studentId;
        } else {
            System.out.println("Invalid student ID.");
        }
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        // Using the parameterized constructor
        Student s1 = new Student("Alice", 101, 3.8);
        s1.displayDetails();

        System.out.println("--------------------");

        // Using the overloaded constructor
        Student s2 = new Student("Bob", 102);
        s2.displayDetails();

        System.out.println("--------------------");

        // If we had a default constructor defined:
        // Student s3 = new Student();
        // s3.displayDetails();
    }
}
```

**Important Points to Remember:**

*   Constructors are fundamental for proper object initialization.
*   Always consider the `this` keyword when parameter names match instance variable names or for constructor chaining.
*   Be mindful of the default constructor's availability when you define other constructors.

---

### 5. `this` Keyword

**Learning Outcome:** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (CO1, K2)
**Learning Outcome:** Utilize datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (CO2, K3)

**Key Concepts:**

*   **`this` Keyword:** A reference variable that refers to the current object.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Explains `this` as a reference to the current instance of a class.
*   **Java How to Program (Deitel & Deitel):** Dedicates a section to the `this` keyword and its various applications.

**Content:**

The `this` keyword can be used in Java in the following ways:

1.  **Referring to Instance Variables:** To distinguish between an instance variable and a local variable (or parameter) when they have the same name.
    ```java
    class Box {
        double width;

        // Constructor
        public Box(double width) {
            // 'this.width' refers to the instance variable
            // 'width' refers to the parameter
            this.width = width;
        }
    }
    ```

2.  **Calling Another Constructor:** To invoke a constructor from the same class. This is known as constructor chaining. The `this` call must be the first statement in the constructor.
    ```java
    class Rectangle {
        int length;
        int width;

        // Constructor 1
        public Rectangle(int length, int width) {
            this.length = length;
            this.width = width;
        }

        // Constructor 2 (calls Constructor 1)
        public Rectangle(int size) {
            // Calls the first constructor, passing 'size' for both length and width
            this(size, size);
        }
    }
    ```

3.  **Passing the Current Object as an Argument:** To pass the current object as a parameter to another method, possibly in another object or a static method.
    ```java
    class Person {
        String name;

        public Person(String name) {
            this.name = name;
        }

        // Method that accepts a Person object
        public void greet(Person otherPerson) {
            System.out.println(this.name + " says hello to " + otherPerson.name);
        }

        // Method to initiate greeting
        public void sayHelloTo(Person personToGreet) {
            personToGreet.greet(this); // Passing the current Person object (this)
        }
    }

    // Usage:
    // Person alice = new Person("Alice");
    // Person bob = new Person("Bob");
    // alice.sayHelloTo(bob); // Bob says hello to Alice
    ```

4.  **Returning the Current Object:** A method can return the current object using `return this;`. This is often used in method chaining.
    ```java
    class Counter {
        int count = 0;

        public Counter increment() {
            count++;
            return this; // Return the current object
        }

        public void printCount() {
            System.out.println("Count: " + count);
        }
    }

    // Usage:
    // Counter c = new Counter();
    // c.increment().increment().printCount(); // Output: Count: 2 (method chaining)
    ```

**Important Points to Remember:**

*   `this` always refers to the instance of the class where it is used.
*   It's crucial for avoiding naming conflicts between instance variables and parameters/local variables.
*   Essential for constructor chaining.

---

### 6. Methods

**Learning Outcome:** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (CO1, K2)
**Learning Outcome:** Utilize datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (CO2, K3)

**Key Concepts:**

*   **Method:** A block of code that performs a specific task. It represents the behavior of an object.
*   **Method Signature:** Consists of the method name and its parameter list.
*   **Return Type:** Specifies the type of value the method returns. `void` indicates that the method does not return any value.
*   **Parameters:** Input values passed to a method.
*   **Method Body:** The code that executes when the method is called.
*   **Method Overloading:** Defining multiple methods with the same name but different parameter lists.
*   **`return` Statement:** Used to exit a method and optionally return a value.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Provides a comprehensive guide to defining and calling methods, including overloading.
*   **Java How to Program (Deitel & Deitel):** Explains method definition, invocation, parameter passing, and return values thoroughly.

**Content:**

*   **Method Declaration Syntax:**
    ```java
    [access_modifier] [static] [final] [abstract] return_type method_name([parameter_list]) [throws exception_list] {
        // Method body
        // return statement (if return_type is not void)
    }
    ```
    *   **`access_modifier`:** `public`, `private`, `protected`, or default.
    *   **`static`:** If present, the method belongs to the class itself, not to any specific object.
    *   **`return_type`:** The data type of the value returned by the method.
    *   **`method_name`:** The name of the method.
    *   **`parameter_list`:** A comma-separated list of parameters.

*   **Calling a Method:**
    *   For instance methods: `objectName.methodName(arguments);`
    *   For static methods: `ClassName.methodName(arguments);`

*   **Method Overloading:** Allows a class to have multiple methods with the same name but different parameter lists (number of parameters, types of parameters, or order of parameters). This is a form of compile-time polymorphism.

**Example:**

```java
class Calculator {
    // Method to add two integers
    int add(int a, int b) {
        return a + b;
    }

    // Overloaded method to add three integers
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method to add two double values
    double add(double a, double b) {
        return a + b;
    }

    // Method that doesn't return a value (void)
    void displayMessage() {
        System.out.println("This is a calculator.");
    }
}

public class MethodDemo {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        // Calling overloaded methods
        int sum1 = calc.add(5, 10);
        System.out.println("Sum of 5 and 10: " + sum1); // Output: 15

        int sum2 = calc.add(5, 10, 15);
        System.out.println("Sum of 5, 10, and 15: " + sum2); // Output: 30

        double sum3 = calc.add(5.5, 10.2);
        System.out.println("Sum of 5.5 and 10.2: " + sum3); // Output: 15.7

        // Calling a void method
        calc.displayMessage(); // Output: This is a calculator.
    }
}
```

**Important Points to Remember:**

*   Methods encapsulate behavior, making code reusable and organized.
*   Method overloading improves code readability and flexibility.
*   Understand the difference between instance methods and static methods.

---

### 7. Access Modifiers and Encapsulation

**Learning Outcome:** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (CO1, K2)
**Learning Outcome:** Utilize datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (CO2, K3)

**Key Concepts:**

*   **Encapsulation:** The bundling of data (attributes) and methods that operate on the data into a single unit (a class). It also involves restricting direct access to some of the object's components, which is known as data hiding.
*   **Data Hiding:** The process of hiding the internal state of an object from the outside world and allowing access only through methods provided by the object (getters and setters). This protects the data from accidental corruption and allows the developer to control how the data is accessed and modified.
*   **Access Modifiers:** Keywords that define the accessibility of classes, variables, methods, and constructors.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Provides an excellent overview of encapsulation and the role of access modifiers in achieving it.
*   **Fundamentals of Software Engineering (Mall):** Discusses encapsulation as a key principle for module design and information hiding.
*   **Object Oriented Systems Development using the Unified Modeling Language (Bahrami):** Explains encapsulation as a core OOP concept for managing complexity.

**Content:**

*   **Access Modifiers in Java:**
    1.  **`public`:** Accessible from anywhere.
        *   Class: Any other class can access it.
        *   Member (variable/method): Any other class can access it.
    2.  **`protected`:** Accessible within the same package and by subclasses (even if they are in different packages).
        *   Class: Must be `public` or default.
        *   Member: Accessible within the same package and by subclasses.
    3.  **`private`:** Accessible only within the same class. This is the strictest level and is key to data hiding.
        *   Class: Cannot be `private` (unless it's an inner class).
        *   Member: Accessible only within the same class.
    4.  **Default (no keyword):** Accessible only within the same package.
        *   Class: Default or `public`.
        *   Member: Accessible within the same package.

*   **Achieving Encapsulation:**
    1.  **Declare instance variables as `private`:** This prevents direct access from outside the class.
    2.  **Provide `public` getter and setter methods:**
        *   **Getter methods (e.g., `getVariableName()`):** Return the value of a private variable.
        *   **Setter methods (e.g., `setVariableName(DataType value)`):** Modify the value of a private variable. Setters can also include validation logic.

**Example (Using `BankAccount` class):**

```java
class BankAccount {
    // Private instance variables for data hiding
    private String accountNumber;
    private double balance;

    // Constructor
    public BankAccount(String accountNumber, double initialDeposit) {
        this.accountNumber = accountNumber;
        // Validate initial deposit before setting
        if (initialDeposit >= 0) {
            this.balance = initialDeposit;
        } else {
            this.balance = 0.0;
            System.out.println("Initial deposit cannot be negative. Balance set to 0.");
        }
    }

    // Public getter for accountNumber
    public String getAccountNumber() {
        return accountNumber;
    }

    // Public getter for balance
    public double getBalance() {
        return balance;
    }

    // Public method to deposit funds (performs validation)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount + ". New balance: " + balance);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw funds (performs validation)
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount + ". New balance: " + balance);
            return true; // Successful withdrawal
        } else if (amount <= 0) {
            System.out.println("Withdrawal amount must be positive.");
            return false;
        } else {
            System.out.println("Insufficient funds. Current balance: " + balance);
            return false; // Failed withdrawal
        }
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("123456789", 1000.0);

        // Accessing through public methods (encapsulated access)
        System.out.println("Account Number: " + account.getAccountNumber());
        System.out.println("Current Balance: " + account.getBalance());

        account.deposit(500.0);
        account.withdraw(200.0);
        account.withdraw(1500.0); // Insufficient funds

        // Trying to access private members directly (will cause a compile-time error)
        // System.out.println(account.balance); // Error: balance has private access
        // account.balance = 5000.0; // Error: balance has private access
    }
}
```

**Important Points to Remember:**

*   Encapsulation is a core principle for building robust and maintainable OOP systems.
*   `private` access modifier is the cornerstone of data hiding.
*   Getters and setters provide controlled access to an object's state.

---

### 8. Static Members

**Learning Outcome:** Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (CO1, K2)
**Learning Outcome:** Utilize datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (CO2, K3)

**Key Concepts:**

*   **`static` Keyword:** When applied to variables or methods within a class, it means that the member belongs to the class itself, not to any specific instance (object) of the class.
*   **Static Variables (Class Variables):** A single copy of the variable is shared among all instances of the class. Changes made to a static variable are visible to all objects.
*   **Static Methods (Class Methods):** Can be called directly on the class name without creating an object. They can only access static members of the class. They cannot access instance variables or instance methods directly.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Explains `static` members and their scope and lifetime.
*   **Java How to Program (Deitel & Deitel):** Discusses static members, emphasizing their use for class-level data and utility functions.

**Content:**

*   **Static Variables:**
    *   Declared using the `static` keyword.
    *   Initialized only once when the class is loaded into memory.
    *   Useful for constants (`static final`) or counters that need to be shared across all objects.
*   **Static Methods:**
    *   Declared using the `static` keyword.
    *   Can be called using `ClassName.methodName()`.
    *   Cannot use the `this` keyword because they are not associated with a specific object.
    *   Cannot directly access non-static (instance) variables or methods. If they need to access instance members, they must do so through an object reference.
*   **Use Cases:**
    *   Constants (e.g., `Math.PI`).
    *   Counters to track the number of objects created.
    *   Utility methods that don't depend on the state of a specific object (e.g., `Math.sqrt()`).
    *   The `main()` method is always static because it needs to be called to start the program without creating an object of the main class.

**Example:**

```java
class Circle {
    double radius;
    static int count = 0; // Static variable to count the number of Circle objects

    // Constructor
    public Circle(double radius) {
        this.radius = radius;
        count++; // Increment the static counter when a new object is created
        System.out.println("Circle created with radius: " + radius);
    }

    // Instance method to calculate area
    double calculateArea() {
        return Math.PI * radius * radius;
    }

    // Static method to get the count of circles
    public static int getCircleCount() {
        // Can only access static members directly
        return count;
    }
}

public class StaticDemo {
    public static void main(String[] args) {
        // Calling static method before creating any objects
        System.out.println("Initial circle count: " + Circle.getCircleCount()); // Output: 0

        Circle c1 = new Circle(5.0);
        Circle c2 = new Circle(10.0);
        Circle c3 = new Circle(2.5);

        // Accessing instance members through objects
        System.out.println("Area of c1: " + c1.calculateArea());
        System.out.println("Area of c2: " + c2.calculateArea());

        // Accessing static variable through class name
        System.out.println("Total circles created: " + Circle.count); // Output: 3
        // Or through an object (though class name is preferred for static)
        System.out.println("Total circles created (via c1): " + c1.count); // Output: 3

        // Calling static method to get count
        System.out.println("Total circles created (using getCircleCount): " + Circle.getCircleCount()); // Output: 3

        // The main method is static
        // System.out.println(this.radius); // Error: cannot use 'this' in a static context
    }
}
```

**Important Points to Remember:**

*   `static` members belong to the class, not the object.
*   Static methods can only access static members.
*   Use `static` for shared data or utility functions.

---

### 9. Package & Importing

**Learning Outcome:** Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files. (CO3, K3)

**Key Concepts:**

*   **Package:** A mechanism for organizing Java classes and interfaces into groups. It helps in preventing naming conflicts and providing a namespace. Packages are similar to directories in a file system.
*   **`package` Declaration:** Placed at the beginning of a Java source file to specify which package the class belongs to.
*   **`import` Statement:** Used to make classes from other packages available in the current package without having to use their fully qualified names.
*   **Fully Qualified Name:** The complete name of a class, including its package name (e.g., `java.util.ArrayList`).

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Provides a comprehensive explanation of packages and the `import` statement.
*   **Java How to Program (Deitel & Deitel):** Covers package organization and the benefits of using packages for code management.

**Content:**

*   **Declaring a Package:**
    ```java
    package mypackage.subpackage; // Declares the package name

    public class MyClass {
        // ... class members ...
    }
    ```
    *   The `package` declaration must be the first non-comment statement in the source file.
    *   Package names are typically in lowercase and use dot notation for subpackages.

*   **Importing Packages:**
    *   **Importing a specific class:**
        ```java
        import java.util.Scanner; // Makes Scanner class from java.util available
        ```
    *   **Importing all classes from a package:**
        ```java
        import java.util.*; // Makes all classes from java.util available (e.g., Scanner, ArrayList)
        ```
    *   **Importing static members:**
        ```java
        import static java.lang.Math.PI; // Makes PI directly accessible without Math.PI
        ```

*   **Benefits of Packages:**
    *   **Organization:** Groups related classes together.
    *   **Namespace Management:** Prevents naming conflicts between classes from different packages.
    *   **Access Control:** `protected` and default access levels operate within package boundaries.

**Example:**

Let's create a simple example with two packages: `com.example.shapes` and `com.example.geometry`.

**File Structure:**

```
src/
├── com/
│   └── example/
│       ├── shapes/
│       │   └── Circle.java
│       └── geometry/
│           └── GeometryCalculator.java
└── MainApp.java
```

**`src/com/example/shapes/Circle.java`:**

```java
package com.example.shapes;

public class Circle {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}
```

**`src/com/example/geometry/GeometryCalculator.java`:**

```java
package com.example.geometry;

import com.example.shapes.Circle; // Importing the Circle class

public class GeometryCalculator {
    public static double calculateCircleArea(Circle circle) {
        if (circle != null) {
            return circle.calculateArea();
        }
        return 0.0;
    }
}
```

**`src/MainApp.java`:**

```java
// No package declaration here means it belongs to the default package
// or you would specify a different package for the main application.

import com.example.geometry.GeometryCalculator; // Import the calculator
import com.example.shapes.Circle;            // Import the Circle class

public class MainApp {
    public static void main(String[] args) {
        // Create a Circle object from the shapes package
        Circle myCircle = new Circle(7.5);

        // Use the GeometryCalculator from the geometry package
        double area = GeometryCalculator.calculateCircleArea(myCircle);

        System.out.println("The area of the circle is: " + area);
    }
}
```

To compile and run this:
1.  Set your classpath to include the `src` directory.
2.  Compile: `javac src/MainApp.java`
3.  Run: `java MainApp`

**Important Points to Remember:**

*   Packages are crucial for code organization and reusability.
*   Use `import` to access classes from other packages.
*   The `java.lang` package is imported automatically.

---

### 10. Practice Questions & Exercises

**1. Quiz Questions:**

*   **Q1:** What is the primary purpose of a class in Java?
    *   A) To hold data values.
    *   B) To define blueprints for creating objects.
    *   C) To execute program logic.
    *   D) To manage memory.
    *   **Answer: B**
*   **Q2:** Which keyword is used to create an instance of a class?
    *   A) `class`
    *   B) `static`
    *   C) `new`
    *   D) `this`
    *   **Answer: C**
*   **Q3:** A constructor in Java:
    *   A) Must have a return type.
    *   B) Can have any name.
    *   C) Is automatically called when an object is created.
    *   D) Is used to define reusable code blocks.
    *   **Answer: C**
*   **Q4:** The `private` access modifier ensures:
    *   A) Accessibility from all classes.
    *   B) Accessibility within the same package.
    *   C) Accessibility only within the same class.
    *   D) Accessibility by subclasses in different packages.
    *   **Answer: C**
*   **Q5:** A `static` variable:
    *   A) Belongs to each object of the class.
    *   B) Is shared among all objects of the class.
    *   C) Can only be accessed by instance methods.
    *   D) Is created when the object is destroyed.
    *   **Answer: B**

**2. Programming Exercises:**

*   **Exercise 1: `Book` Class**
    *   Create a `Book` class with private instance variables for `title`, `author`, and `isbn`.
    *   Include a constructor to initialize these variables.
    *   Provide public getter methods for all instance variables.
    *   Implement a method `displayBookInfo()` that prints the book's details.
    *   Write a `main` method in a separate class (`BookDemo`) to create `Book` objects and test the methods.

    ```java
    // Book.java
    package com.example.library; // Example package

    public class Book {
        private String title;
        private String author;
        private String isbn;

        public Book(String title, String author, String isbn) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
        }

        public String getTitle() {
            return title;
        }

        public String getAuthor() {
            return author;
        }

        public String getIsbn() {
            return isbn;
        }

        public void displayBookInfo() {
            System.out.println("Title: " + title);
            System.out.println("Author: " + author);
            System.out.println("ISBN: " + isbn);
        }
    }

    // BookDemo.java (in the same package or imported)
    package com.example.library;

    public class BookDemo {
        public static void main(String[] args) {
            Book book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien", "978-0618260270");
            book1.displayBookInfo();

            System.out.println("\nBook Title: " + book1.getTitle());
        }
    }
    ```

*   **Exercise 2: `Counter` Class with Static Count**
    *   Create a `Counter` class with a private `count` variable.
    *   Implement a constructor that increments a `static` variable `objectCount` every time a `Counter` object is created.
    *   Provide a `public static` method `getObjectCount()` that returns the value of `objectCount`.
    *   Provide an instance method `incrementCount()` that increments the instance `count` variable.
    *   Write a `main` method to create multiple `Counter` objects and demonstrate the `getObjectCount()` method.

    ```java
    public class Counter {
        private int count = 0;
        private static int objectCount = 0; // Static variable

        public Counter() {
            objectCount++; // Increment static count on object creation
            System.out.println("Counter object created. Total objects: " + objectCount);
        }

        public void incrementCount() {
            count++;
            System.out.println("Instance count: " + count);
        }

        public static int getObjectCount() {
            return objectCount; // Return static count
        }
    }

    public class CounterDemo {
        public static void main(String[] args) {
            System.out.println("Creating counters...");
            Counter c1 = new Counter();
            Counter c2 = new Counter();
            Counter c3 = new Counter();

            c1.incrementCount();
            c2.incrementCount();

            System.out.println("\nTotal number of Counter objects: " + Counter.getObjectCount());
        }
    }
    ```

---

### 11. Summary and Key Takeaways

*   **Classes** are blueprints, and **Objects** are instances created from these blueprints.
*   Classes define **attributes** (data members) and **behaviors** (methods).
*   **Constructors** are special methods used for object initialization. They have the same name as the class and no return type.
*   The **`new` keyword** is used to create objects.
*   **`this` keyword** refers to the current object and is vital for distinguishing instance members and for constructor chaining.
*   **Methods** define the actions an object can perform. They can be overloaded.
*   **Encapsulation** (bundling data and methods, data hiding) is achieved using `private` access modifiers for data members and `public` getter/setter methods.
*   **Access Modifiers** (`public`, `protected`, `private`, default) control visibility.
*   **`static` members** belong to the class, not individual objects, and are shared among all instances.
*   **Packages** organize classes into logical groups, preventing naming conflicts and improving code management.
*   The **`import` statement** makes classes from other packages accessible.

This module provides the foundational understanding of classes and objects in Java, which are the cornerstones of object-oriented programming. Mastering these concepts is crucial for developing any Java application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
