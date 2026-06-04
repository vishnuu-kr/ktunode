---
title: "Constructors"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf99"
status: "completed"
scrapedAt: "2026-05-20T16:56:02.525Z"
---
# Object-Oriented Programming: Module 1 - Introduction to Java

## Topic: Constructors

### 1. Understanding Constructors

*   **Definition:** A constructor is a special type of method that is used to initialize the state of an object. It's automatically called when an object of a class is created.
*   **Purpose:**
    *   To set initial values for the instance variables (fields) of an object.
    *   To allocate resources or perform any setup required for the object.
*   **Key Characteristics:**
    *   **Name:** The constructor name *must* be the same as the class name.
    *   **Return Type:** Constructors do not have a return type, not even `void`.
    *   **Access Modifiers:** Constructors can have access modifiers (e.g., `public`, `private`, `protected`, default) to control their accessibility.
    *   **Invocation:** Constructors are invoked using the `new` keyword.

### 2. Types of Constructors

Java supports different types of constructors based on how they are defined and used:

#### 2.1. Default Constructor

*   **Definition:** If you do not explicitly define any constructor in your class, the Java compiler automatically provides a **no-argument constructor**. This is known as the default constructor.
*   **Purpose:** It initializes instance variables with their default values (0 for numeric types, `\0` for characters, `false` for booleans, and `null` for object references).
*   **Example:**

    ```java
    class Dog {
        String name;
        int age;

        // No explicit constructor defined, so Java provides a default one:
        // public Dog() {
        //     // Initializes name to null and age to 0
        // }
    }

    public class Main {
        public static void main(String[] args) {
            Dog myDog = new Dog(); // Invokes the default constructor
            System.out.println("Dog's name: " + myDog.name); // Output: Dog's name: null
            System.out.println("Dog's age: " + myDog.age);   // Output: Dog's age: 0
        }
    }
    ```

#### 2.2. Parameterized Constructor

*   **Definition:** A constructor that accepts one or more parameters is called a parameterized constructor. These parameters are used to initialize the instance variables with specific values provided during object creation.
*   **Purpose:** To create objects with pre-defined initial states.
*   **Example:**

    ```java
    class Cat {
        String name;
        int age;

        // Parameterized constructor
        public Cat(String catName, int catAge) {
            name = catName; // 'this.name' can also be used here
            age = catAge;   // 'this.age' can also be used here
        }
    }

    public class Main {
        public static void main(String[] args) {
            Cat myCat = new Cat("Whiskers", 3); // Invokes the parameterized constructor
            System.out.println("Cat's name: " + myCat.name); // Output: Cat's name: Whiskers
            System.out.println("Cat's age: " + myCat.age);   // Output: Cat's age: 3
        }
    }
    ```

#### 2.3. Constructor Overloading

*   **Definition:** Constructor overloading occurs when a class has multiple constructors with different parameter lists (different number of parameters, different types of parameters, or both).
*   **Purpose:** To provide flexibility in creating objects with different initial configurations.
*   **Example:**

    ```java
    class Car {
        String model;
        String color;
        int year;

        // Default constructor (if no explicit constructors are defined, Java provides one)
        // However, if you define any constructor, Java won't provide the default one.
        // So, if you want both, you must define the default constructor explicitly.
        public Car() {
            this.model = "Unknown";
            this.color = "Black";
            this.year = 2023;
        }

        // Parameterized constructor (model and color)
        public Car(String model, String color) {
            this.model = model;
            this.color = color;
            this.year = 2023; // Default year
        }

        // Parameterized constructor (model, color, and year)
        public Car(String model, String color, int year) {
            this.model = model;
            this.color = color;
            this.year = year;
        }
    }

    public class Main {
        public static void main(String[] args) {
            Car car1 = new Car(); // Calls the default constructor
            System.out.println("Car 1: " + car1.model + " " + car1.color + " " + car1.year);

            Car car2 = new Car("Sedan", "Blue"); // Calls the constructor with String, String
            System.out.println("Car 2: " + car2.model + " " + car2.color + " " + car2.year);

            Car car3 = new Car("SUV", "Red", 2022); // Calls the constructor with String, String, int
            System.out.println("Car 3: " + car3.model + " " + car3.color + " " + car3.year);
        }
    }
    ```

#### 2.4. `this` Keyword in Constructors

*   **Definition:** The `this` keyword refers to the current instance of the class.
*   **Usage in Constructors:**
    1.  **Referring to Instance Variables:** When a constructor parameter has the same name as an instance variable, `this.variableName` is used to distinguish between the instance variable and the parameter.
    2.  **Calling Other Constructors (Constructor Chaining):** The `this()` keyword can be used to call another constructor within the same class. This is known as constructor chaining.
*   **Rules for `this()`:**
    *   `this()` must be the **first statement** in the constructor.
    *   You can only have one `this()` call per constructor.
    *   This helps in code reusability and avoids code duplication.

*   **Example:**

    ```java
    class Student {
        String name;
        int rollNo;
        String department;

        // Constructor 1: Initializes name and rollNo
        public Student(String name, int rollNo) {
            this.name = name; // 'this.name' refers to instance variable, 'name' refers to parameter
            this.rollNo = rollNo;
        }

        // Constructor 2: Initializes name, rollNo, and department
        public Student(String name, int rollNo, String department) {
            this(name, rollNo); // Calls the constructor above (Constructor 1)
            this.department = department;
        }

        public void displayInfo() {
            System.out.println("Name: " + name + ", Roll No: " + rollNo + ", Department: " + department);
        }
    }

    public class Main {
        public static void main(String[] args) {
            Student s1 = new Student("Alice", 101); // Calls constructor 1
            s1.department = "Computer Science"; // Manually setting department for s1
            s1.displayInfo(); // Output: Name: Alice, Roll No: 101, Department: Computer Science

            Student s2 = new Student("Bob", 102, "Electrical Engineering"); // Calls constructor 2
            s2.displayInfo(); // Output: Name: Bob, Roll No: 102, Department: Electrical Engineering
        }
    }
    ```

#### 2.5. `super` Keyword in Constructors

*   **Definition:** The `super` keyword refers to the immediate parent class of a class.
*   **Usage in Constructors:**
    *   **Calling Parent Class Constructors:** When a subclass is created, the constructor of its superclass is automatically called first. If the superclass doesn't have a no-argument constructor, or if you want to explicitly call a specific superclass constructor, you must use `super()`.
*   **Rules for `super()`:**
    *   `super()` must be the **first statement** in the subclass constructor.
    *   It's used to call a constructor of the parent class.
*   **Example:**

    ```java
    class Animal {
        String type;

        public Animal(String type) {
            this.type = type;
            System.out.println("Animal constructor called.");
        }
    }

    class Mammal extends Animal {
        String habitat;

        // Subclass constructor
        public Mammal(String type, String habitat) {
            super(type); // Calls the Animal constructor to initialize 'type'
            this.habitat = habitat;
            System.out.println("Mammal constructor called.");
        }

        public void displayHabitat() {
            System.out.println("Type: " + type + ", Habitat: " + habitat);
        }
    }

    public class Main {
        public static void main(String[] args) {
            Mammal lion = new Mammal("Lion", "Savanna");
            lion.displayHabitat();
            // Output:
            // Animal constructor called.
            // Mammal constructor called.
            // Type: Lion, Habitat: Savanna
        }
    }
    ```

#### 2.6. Private Constructors

*   **Definition:** A constructor declared with the `private` access modifier.
*   **Purpose:**
    *   **Singleton Pattern:** To ensure that a class can have only one instance.
    *   **Utility Classes:** To prevent instantiation of classes that only contain static methods.
*   **Example (Singleton Pattern):**

    ```java
    class ConfigurationManager {
        private static ConfigurationManager instance; // The single instance
        private String setting;

        // Private constructor
        private ConfigurationManager() {
            setting = "DefaultSetting"; // Initialize setting
            System.out.println("ConfigurationManager instance created.");
        }

        // Public method to get the instance
        public static ConfigurationManager getInstance() {
            if (instance == null) {
                instance = new ConfigurationManager(); // Create instance only if it doesn't exist
            }
            return instance;
        }

        public String getSetting() {
            return setting;
        }

        public void setSetting(String setting) {
            this.setting = setting;
        }
    }

    public class Main {
        public static void main(String[] args) {
            // Cannot create an instance directly:
            // ConfigurationManager cm1 = new ConfigurationManager(); // Compile-time error

            ConfigurationManager cm1 = ConfigurationManager.getInstance();
            ConfigurationManager cm2 = ConfigurationManager.getInstance();

            System.out.println("CM1 setting: " + cm1.getSetting());
            cm1.setSetting("CustomSetting");
            System.out.println("CM2 setting: " + cm2.getSetting()); // Will reflect the change made by cm1

            // Both cm1 and cm2 refer to the same object
            System.out.println("Are cm1 and cm2 the same instance? " + (cm1 == cm2)); // Output: true
        }
    }
    ```

### 3. Important Points to Remember

*   **Constructor Name:** Must match the class name exactly.
*   **No Return Type:** Constructors do not have a return type, not even `void`.
*   **Automatic Invocation:** Constructors are called automatically when an object is created using the `new` keyword.
*   **Default Constructor:** Provided by the compiler only if no constructors are explicitly defined by the programmer.
*   **`this` vs. `super`:**
    *   `this()` calls another constructor in the *same* class.
    *   `super()` calls a constructor in the *parent* class.
    *   Both `this()` and `super()` must be the first statement in a constructor.
*   **Constructor Overloading:** Allows multiple constructors with different parameter lists in a single class.
*   **Private Constructors:** Used for specific design patterns like Singleton and to create utility classes that cannot be instantiated.
*   **Constructor Chaining (`this()` and `super()`):** Crucial for ensuring proper initialization across inheritance hierarchies and for code reuse.
*   **Instance Initialization Block:** While not a constructor, an instance initialization block `{}` runs *before* the constructor body. It's another way to initialize instance variables, but constructors are generally preferred for explicit object setup.

### 4. Practice Questions & Exercises

1.  **Question:** What is the primary purpose of a constructor in Java?
    *   **Answer:** To initialize the state of an object when it is created.

2.  **Question:** Can a constructor have a return type? If yes, what is it? If no, why?
    *   **Answer:** No, a constructor does not have a return type, not even `void`. This is because a constructor's job is to create and initialize an object, and the `new` keyword itself is responsible for returning the object reference.

3.  **Question:** What happens if you define a parameterized constructor in a class and forget to define a no-argument constructor?
    *   **Answer:** The default constructor will not be provided by the compiler. If you need to create objects without arguments, you must explicitly define a no-argument constructor.

4.  **Question:** Explain the difference between `this()` and `super()` when used in constructors.
    *   **Answer:**
        *   `this()` is used to call another constructor within the *same* class.
        *   `super()` is used to call a constructor of the *immediate parent* class.

5.  **Question:** Write a Java class `Book` with instance variables `title` (String) and `pages` (int). Include:
    *   A default constructor that initializes `title` to "Untitled" and `pages` to 0.
    *   A parameterized constructor that accepts `title` and `pages`.
    *   A method `displayBookInfo()` that prints the title and number of pages.

    ```java
    class Book {
        String title;
        int pages;

        // Default constructor
        public Book() {
            this.title = "Untitled";
            this.pages = 0;
        }

        // Parameterized constructor
        public Book(String title, int pages) {
            this.title = title;
            this.pages = pages;
        }

        public void displayBookInfo() {
            System.out.println("Title: " + title + ", Pages: " + pages);
        }
    }

    public class Main {
        public static void main(String[] args) {
            Book book1 = new Book();
            book1.displayBookInfo(); // Expected: Title: Untitled, Pages: 0

            Book book2 = new Book("The Lord of the Rings", 1178);
            book2.displayBookInfo(); // Expected: Title: The Lord of the Rings, Pages: 1178
        }
    }
    ```

6.  **Question:** Consider the following code. What will be the output?

    ```java
    class Parent {
        Parent() {
            System.out.print("A");
        }
    }

    class Child extends Parent {
        Child() {
            super(); // Calls Parent constructor
            System.out.print("B");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Child obj = new Child();
        }
    }
    ```
    *   **Answer:** `AB`
        *   When `new Child()` is called, the `Child` constructor is invoked.
        *   The first statement in `Child`'s constructor is `super()`, which calls the `Parent` constructor.
        *   The `Parent` constructor prints "A".
        *   Control returns to the `Child` constructor, and `System.out.print("B");` is executed, printing "B".

7.  **Question:** What is the purpose of using a private constructor in the Singleton design pattern?
    *   **Answer:** To prevent the class from being instantiated directly by other classes, ensuring that only one instance of the class is created and managed internally by the class itself (typically through a static `getInstance()` method).
