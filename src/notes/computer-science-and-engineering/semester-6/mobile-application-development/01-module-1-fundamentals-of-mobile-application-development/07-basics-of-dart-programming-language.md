---
title: "Basics of Dart Programming Language"
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 1: Fundamentals of Mobile Application Development:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bdcf"
status: "completed"
scrapedAt: "2026-05-20T16:55:19.188Z"
---
# Mobile Application Development: Module 1 - Fundamentals of Mobile Application Development
## Topic: Basics of Dart Programming Language

**Description:** Introduction to the Dart programming language, focusing on fundamental concepts necessary for mobile application development using frameworks like Flutter.

**Learning Outcomes:**

*   Understand the history and purpose of the Dart programming language.
*   Define and use variables, data types, and operators in Dart.
*   Implement control flow statements (if-else, for loops, while loops) in Dart.
*   Define and use functions in Dart, including named and optional parameters.
*   Understand and utilize Dart's object-oriented programming (OOP) concepts, including classes, objects, inheritance, polymorphism, and abstraction.
*   Learn about Dart's null safety features and how to handle potentially null values.

---

### 1. Introduction to Dart

*   **History and Purpose:**
    *   Dart was created by Google and unveiled in 2011.
    *   Initially designed as a replacement for JavaScript in web browsers.
    *   Evolved to become the primary language for Flutter, Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.
    *   Dart is designed for client-optimized, fast development.

*   **Key Features:**
    *   **Object-oriented:** Supports classes, inheritance, and interfaces.
    *   **Strongly-typed (optionally):** Can be statically typed for compile-time error checking, or dynamically typed for rapid prototyping.
    *   **Garbage collected:** Automatic memory management.
    *   **Supports asynchronous programming:** Facilitates writing responsive applications.
    *   **AOT (Ahead-of-Time) and JIT (Just-in-Time) compilation:** AOT for fast startup and predictable performance; JIT for hot reload during development.
    *   **Null safety:** Prevents null reference errors, making code more reliable.

### 2. Variables, Data Types, and Operators

*   **Variables:**
    *   Used to store data values.
    *   Declared using `var`, `dynamic`, `Object`, or specific data types (e.g., `int`, `String`).
    *   `var`: Dart infers the type from the initial value.
    *   `dynamic`: Type checking is done at runtime.  Allows any type to be assigned.
    *   `Object`: Base class of all Dart objects.
    *   `final`: Value can only be set once.
    *   `const`: Value must be known at compile time.

    ```dart
    void main() {
      var name = 'John Doe'; // String
      dynamic age = 30;      // int
      age = "Thirty";        // No error, dynamic allows type change
      final pi = 3.14159;    // double, can only be assigned once
      const gravity = 9.8;   // double, must be known at compile time
    }
    ```

*   **Data Types:**
    *   **Numbers:**
        *   `int`: Integers (e.g., 1, -5, 100).
        *   `double`: Floating-point numbers (e.g., 3.14, -2.5, 0.0).
    *   **Strings:**
        *   `String`: Sequence of characters (e.g., "Hello", 'Dart').  Can be enclosed in single or double quotes.
    *   **Booleans:**
        *   `bool`: Represents true or false values.
    *   **Lists (Arrays):**
        *   `List`: Ordered collection of items (e.g., `[1, 2, 3]`, `['a', 'b', 'c']`).
    *   **Sets:**
        *   `Set`: Unordered collection of unique items (e.g., `{1, 2, 3}`).
    *   **Maps (Dictionaries):**
        *   `Map`: Key-value pairs (e.g., `{'name': 'John', 'age': 30}`).  Keys and values can be of different types.
    *   **Runes:**
        *   `Runes`: Represent Unicode code points, used for handling characters beyond basic ASCII.
    *   **Symbols:**
        *   `Symbol`: Compile-time constants that represent identifiers.  Less commonly used.

    ```dart
    void main() {
      int quantity = 10;
      double price = 9.99;
      String message = "Welcome!";
      bool isTrue = true;
      List<int> numbers = [1, 2, 3, 4, 5];
      Set<String> colors = {"red", "green", "blue"};
      Map<String, dynamic> person = {"name": "Alice", "age": 25};
    }
    ```

*   **Operators:**
    *   **Arithmetic Operators:** `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `~/` (integer division), `%` (modulo).
    *   **Relational Operators:** `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to).
    *   **Logical Operators:** `&&` (logical AND), `||` (logical OR), `!` (logical NOT).
    *   **Assignment Operators:** `=` (assignment), `+=` (add and assign), `-=` (subtract and assign), `*=` (multiply and assign), `/=` (divide and assign).
    *   **Increment/Decrement Operators:** `++` (increment), `--` (decrement).
    *   **Conditional Operator (Ternary Operator):** `condition ? expr1 : expr2` (If `condition` is true, evaluate `expr1`; otherwise, evaluate `expr2`).
    *   **Type Test Operators:** `is` (true if the object has the specified type), `is!` (true if the object does not have the specified type).
    *   **Cascade Notation:** `..` (Allows you to make a sequence of operations on the same object, returning that object).

    ```dart
    void main() {
      int a = 10;
      int b = 5;

      print(a + b);   // 15
      print(a - b);   // 5
      print(a * b);   // 50
      print(a / b);   // 2.0
      print(a ~/ b);  // 2
      print(a % b);   // 0

      print(a > b);   // true
      print(a == b);  // false

      bool condition1 = true;
      bool condition2 = false;

      print(condition1 && condition2); // false
      print(condition1 || condition2); // true
      print(!condition1);             // false

      a += b;        // a = a + b (a becomes 15)
      print(a);      // 15

      a++;           // a = a + 1 (a becomes 16)
      print(a);      // 16

      String status = (a > 10) ? "Valid" : "Invalid";
      print(status); // Valid

      var number = 5;
      print(number is int); // true
      print(number is! String); // true

      var sb = StringBuffer();
      sb..write('Dart is ')
        ..write('awesome!');
      print(sb.toString()); // Dart is awesome!
    }
    ```

### 3. Control Flow Statements

*   **`if-else` Statements:**
    *   Used to execute different blocks of code based on a condition.

    ```dart
    void main() {
      int age = 20;

      if (age >= 18) {
        print("Eligible to vote");
      } else {
        print("Not eligible to vote");
      }

      //Example of else if
      int marks = 75;
      if (marks >= 80){
          print("Distinction");
      } else if (marks >= 60){
          print("First Class");
      } else {
          print("Pass");
      }
    }
    ```

*   **`for` Loops:**
    *   Used to iterate over a sequence of values or execute a block of code a specific number of times.

    ```dart
    void main() {
      for (int i = 0; i < 5; i++) {
        print("Iteration: ${i}");
      }

      List<String> fruits = ["apple", "banana", "orange"];
      for (String fruit in fruits) {
        print(fruit);
      }
    }
    ```

*   **`while` Loops:**
    *   Used to execute a block of code repeatedly as long as a condition is true.

    ```dart
    void main() {
      int count = 0;
      while (count < 3) {
        print("Count: ${count}");
        count++;
      }

      int number = 1;
      do{
          print("Number: ${number}");
          number++;
      } while (number <=3);

    }
    ```

*   **`break` and `continue`:**
    *   `break`: Exits the current loop.
    *   `continue`: Skips the rest of the current iteration and continues with the next iteration.

    ```dart
    void main() {
      for (int i = 0; i < 10; i++) {
        if (i == 5) {
          break; // Exit the loop when i is 5
        }
        print("Value (break): ${i}");
      }

      for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) {
          continue; // Skip even numbers
        }
        print("Value (continue): ${i}");
      }
    }
    ```

### 4. Functions

*   **Defining Functions:**
    *   A function is a block of code that performs a specific task.
    *   Defined using the `returnType functionName(parameters) { // Function body }` syntax.
    *   `void` return type indicates the function doesn't return a value.

    ```dart
    void main() {
      String greeting = greet("World");
      print(greeting); // Hello, World!

      int sum = add(5, 3);
      print("Sum: ${sum}"); // Sum: 8

      print(greetPerson(name: "Bob", greeting: "Hi")); // Hi, Bob!
    }

    String greet(String name) {
      return "Hello, ${name}!";
    }

    int add(int a, int b) {
      return a + b;
    }

    // Named Parameters
    String greetPerson({String? greeting, String? name}) { // '?' indicates nullable String
      return "${greeting ?? 'Hello'}, ${name}!"; // '??' is the null-aware operator
    }
    ```

*   **Named Parameters:**
    *   Parameters can be passed by name, improving readability.
    *   Enclosed in curly braces `{}` in the function definition.
    *   Can be made required using the `required` keyword.

    ```dart
    void main() {
      print(describePerson(age: 30, name: "Charlie", city: "London"));
    }

    String describePerson({required String name, required int age, String city = "Unknown"}) {
      return "Name: ${name}, Age: ${age}, City: ${city}";
    }
    ```

*   **Optional Parameters:**
    *   Parameters can be made optional by enclosing them in square brackets `[]` (positional optional) or curly braces `{}` (named optional) and providing a default value.
    *   If a default value isn't provided, the parameter is nullable.

*   **Arrow Syntax (Fat Arrow Notation):**
    *   A shorthand syntax for simple functions that return a single expression.
    *   `returnType functionName(parameters) => expression;`

    ```dart
    int multiply(int a, int b) => a * b;
    ```

### 5. Object-Oriented Programming (OOP)

*   **Classes and Objects:**
    *   A class is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) of objects of that class.
    *   An object is an instance of a class.

    ```dart
    class Dog {
      String name;
      String breed;

      // Constructor
      Dog(this.name, this.breed);

      // Method
      void bark() {
        print("Woof!");
      }
    }

    void main() {
      // Creating an object
      Dog myDog = Dog("Buddy", "Golden Retriever");

      print(myDog.name);   // Buddy
      print(myDog.breed);  // Golden Retriever
      myDog.bark();          // Woof!
    }
    ```

*   **Constructors:**
    *   Special methods used to create and initialize objects of a class.
    *   The primary constructor can be defined directly in the class declaration.  Other constructors are named constructors.
    *   Can have parameters to initialize the object's properties.

    ```dart
    class Rectangle {
      double width;
      double height;

      // Primary constructor
      Rectangle(this.width, this.height);

      // Named constructor
      Rectangle.square(double side) : width = side, height = side;

      double area() {
        return width * height;
      }
    }

    void main() {
      Rectangle rect1 = Rectangle(5.0, 10.0);
      print("Area of rect1: ${rect1.area()}"); // Area of rect1: 50.0

      Rectangle rect2 = Rectangle.square(7.0);
      print("Area of rect2: ${rect2.area()}"); // Area of rect2: 49.0
    }
    ```

*   **Inheritance:**
    *   A mechanism that allows a class (subclass or derived class) to inherit properties and methods from another class (superclass or base class).
    *   Promotes code reuse and establishes an "is-a" relationship.
    *   Uses the `extends` keyword.

    ```dart
    class Animal {
      String name;

      Animal(this.name);

      void eat() {
        print("${name} is eating.");
      }
    }

    class Cat extends Animal {
      String breed;

      Cat(String name, this.breed) : super(name); // Call the superclass constructor

      void meow() {
        print("Meow!");
      }

      // Override the eat method
      @override
      void eat() {
        super.eat(); // Call the superclass eat method
        print("${name} is eating fish.");
      }
    }

    void main() {
      Cat myCat = Cat("Whiskers", "Siamese");
      myCat.eat();   // Whiskers is eating.  Whiskers is eating fish.
      myCat.meow();  // Meow!
    }
    ```

*   **Polymorphism:**
    *   The ability of an object to take on many forms.
    *   Achieved through inheritance and interfaces.
    *   Allows treating objects of different classes in a uniform way.

    ```dart
    abstract class Shape {
      double area();
    }

    class Circle implements Shape {
      double radius;

      Circle(this.radius);

      @override
      double area() => 3.14159 * radius * radius;
    }

    class Square implements Shape {
      double side;

      Square(this.side);

      @override
      double area() => side * side;
    }

    void main() {
      List<Shape> shapes = [Circle(5), Square(4)];

      for (Shape shape in shapes) {
        print("Area: ${shape.area()}"); // Area: 78.53975  Area: 16.0
      }
    }
    ```

*   **Abstraction:**
    *   The process of simplifying complex systems by modeling classes appropriate to the problem.
    *   Hides unnecessary implementation details and exposes only essential information.
    *   Achieved through abstract classes and interfaces.
    *   An abstract class cannot be instantiated.  It acts as a blueprint for other classes.

    ```dart
    abstract class Vehicle {
      String model;

      Vehicle(this.model);

      void startEngine(); // Abstract method (no implementation)
    }

    class Car extends Vehicle {
      Car(String model) : super(model);

      @override
      void startEngine() {
        print("Car engine started (model: ${model}).");
      }
    }

    void main() {
      Car myCar = Car("Toyota");
      myCar.startEngine(); // Car engine started (model: Toyota).
    }
    ```

### 6. Null Safety

*   **Introduction:**
    *   Dart's null safety feature helps prevent null reference errors at runtime.
    *   By default, variables cannot be assigned `null` unless explicitly declared as nullable.

*   **Nullable Types:**
    *   To declare a variable as nullable, add a `?` after the data type.
    *   Example: `String? name;`

*   **Null-Aware Operators:**
    *   `?.` (Null-aware access): Access a property or method only if the object is not null.
    *   `??` (Null-coalescing operator):  Returns the expression on the left if it is not null; otherwise, returns the expression on the right.
    *   `??=` (Null-aware assignment): Assigns a value to a variable only if it is currently null.
    *   `!` (Non-null assertion operator):  Tells Dart that you are sure a variable is not null.  Use with caution!

    ```dart
    void main() {
      String? message; // Nullable String

      print(message?.length); // null (no error)

      String greeting = message ?? "Hello, World!"; // Hello, World!
      print(greeting);

      message ??= "Default Message"; // Assign if message is null
      print(message);

      String? name = "Alice";
      print(name!.length);  // 5 (using non-null assertion, be careful!)

      String? address;
      String city = address?.split(',')[0] ?? 'Unknown';  //Combines null-aware access and null coalescing
      print(city); // Unknown
    }
    ```

---

### Practice Questions and Exercises

1.  **Write a Dart program to calculate the area of a circle, given its radius.**

    ```dart
    import 'dart:math';

    void main() {
      double radius = 5.0;
      double area = pi * radius * radius;
      print("Area of the circle: ${area}");
    }
    ```

2.  **Write a function that takes a list of integers as input and returns the sum of all even numbers in the list.**

    ```dart
    int sumOfEvenNumbers(List<int> numbers) {
      int sum = 0;
      for (int number in numbers) {
        if (number % 2 == 0) {
          sum += number;
        }
      }
      return sum;
    }

    void main() {
      List<int> numbers = [1, 2, 3, 4, 5, 6];
      int evenSum = sumOfEvenNumbers(numbers);
      print("Sum of even numbers: ${evenSum}");
    }
    ```

3.  **Create a class called `BankAccount` with properties `accountNumber` (String), `accountHolder` (String), and `balance` (double).  Include methods for `deposit` and `withdraw`.  Ensure that the `withdraw` method does not allow the balance to become negative.**

    ```dart
    class BankAccount {
      String accountNumber;
      String accountHolder;
      double balance;

      BankAccount(this.accountNumber, this.accountHolder, this.balance);

      void deposit(double amount) {
        balance += amount;
        print("Deposit of ${amount} successful. New balance: ${balance}");
      }

      void withdraw(double amount) {
        if (balance >= amount) {
          balance -= amount;
          print("Withdrawal of ${amount} successful. New balance: ${balance}");
        } else {
          print("Insufficient funds.");
        }
      }
    }

    void main() {
      BankAccount account = BankAccount("123456789", "John Doe", 100.0);
      account.deposit(50.0);
      account.withdraw(200.0);
      account.withdraw(20.0);
    }
    ```

4.  **Using null safety, write a function that takes a String? as input and returns its length. If the String is null, return 0.**

    ```dart
    int getStringLength(String? str) {
      return str?.length ?? 0;
    }

    void main() {
      String? text = "Hello";
      String? nullText = null;

      print("Length of 'Hello': ${getStringLength(text)}");
      print("Length of null: ${getStringLength(nullText)}");
    }
    ```

### Important Points to Remember:

*   Dart is a versatile language suitable for various applications, but it shines in mobile development with Flutter.
*   Understanding data types and control flow is essential for writing any Dart program.
*   Leverage OOP principles to create well-structured and maintainable code.
*   Embrace null safety to prevent common errors and improve code reliability.
*   Practice consistently to become proficient in Dart programming.
