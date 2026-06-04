---
title: "Basics of Dart Programming Language."
subject: "MOBILE APPLICATION DEVELOPMENT"
module: "Module 1: Fundamentals of Mobile Application Development:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c97b"
status: "completed"
scrapedAt: "2026-05-20T17:08:32.225Z"
---
# MOBILE APPLICATION DEVELOPMENT

## Module 1: Fundamentals of Mobile Application Development

### Topic: Basics of Dart Programming Language

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

1.  **Understand the role of Dart in mobile app development.**
2.  **Identify and utilize basic Dart syntax and keywords.**
3.  **Declare and manipulate variables of different data types.**
4.  **Perform arithmetic and logical operations using Dart operators.**
5.  **Control program flow using conditional statements and loops.**
6.  **Define and use functions to structure code.**
7.  **Understand the concept of null safety and how to handle null values.**
8.  **Familiarize yourself with basic Dart collections like Lists and Maps.**

---

### **1. Introduction to Dart**

*   **What is Dart?**
    *   Dart is an **open-source, object-oriented programming language** developed by Google.
    *   It is optimized for **client-side development**, meaning it's excellent for building user interfaces on various platforms.
    *   Dart is the **primary language used for Flutter**, Google's UI toolkit for building natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase.

*   **Why Dart for Mobile Development?**
    *   **Single Codebase for Multiple Platforms:** With Flutter and Dart, you can write your app's code once and deploy it on both Android and iOS, significantly reducing development time and effort.
    *   **Fast Development:** Features like hot-reload allow you to see changes instantly without recompiling the entire app, speeding up the development cycle.
    *   **High Performance:** Dart compiles to native machine code, ensuring excellent performance comparable to native apps.
    *   **Rich Ecosystem:** Flutter's extensive set of pre-built widgets and tools, powered by Dart, makes building beautiful and complex UIs easier.
    *   **Strong Community Support:** A growing and active community contributes to Dart's libraries, tools, and resources.

---

### **2. Basic Dart Syntax and Keywords**

*   **Entry Point:**
    *   Every Dart program has a `main()` function, which is the starting point of execution.
    *   The `void` keyword indicates that the function does not return any value.

    ```dart
    void main() {
      // Your code goes here
      print('Hello, Dart!');
    }
    ```

*   **Statements:**
    *   Statements are instructions that perform actions.
    *   Most statements end with a semicolon (`;`).

*   **Comments:**
    *   Used to explain code or to prevent code from executing.
    *   **Single-line comments:** Start with `//`
    *   **Multi-line comments:** Start with `/*` and end with `*/`
    *   **Documentation comments:** Start with `///` (for single-line) or `/** ... */` (for multi-line) and are used to generate API documentation.

    ```dart
    // This is a single-line comment.

    /*
       This is a
       multi-line comment.
    */

    /// This is a documentation comment for the main function.
    void main() {
      print('Comments are useful!'); // Inline comment
    }
    ```

*   **Keywords:**
    *   Reserved words that have special meaning in Dart and cannot be used as identifiers (variable names, function names, etc.).
    *   Examples: `void`, `main`, `print`, `int`, `double`, `String`, `bool`, `var`, `final`, `const`, `if`, `else`, `for`, `while`, `function`, `return`, `class`, `import`.

---

### **3. Variables and Data Types**

*   **Variables:**
    *   Containers for storing data values.
    *   Declared using `var`, `final`, or `const`.

*   **`var` Keyword:**
    *   Used for variables whose type can change or is inferred by the compiler.
    *   The type is determined the first time a value is assigned.

    ```dart
    var name = 'Alice'; // Type is inferred as String
    var age = 30;      // Type is inferred as int
    age = 31;          // Allowed, type is still int
    // name = 123;      // Error! Cannot assign an int to a String variable
    ```

*   **`final` Keyword:**
    *   Used for variables that can be assigned only once.
    *   Their value cannot be changed after initialization.
    *   The type can be explicitly declared or inferred.

    ```dart
    final String city = 'New York';
    final double pi = 3.14159;
    // city = 'London'; // Error! Cannot reassign a final variable.
    ```

*   **`const` Keyword:**
    *   Used for compile-time constants.
    *   Their value must be known at compile time and cannot be changed.
    *   `const` variables are implicitly `final`.

    ```dart
    const int maxLimit = 100;
    const double gravity = 9.81;
    // maxLimit = 50; // Error! Cannot reassign a const variable.
    ```

*   **Basic Data Types:**
    *   **`int`:** Whole numbers (e.g., 10, -5, 0).
    *   **`double`:** Floating-point numbers (e.g., 3.14, -0.5, 2.0).
    *   **`String`:** Sequence of characters (e.g., 'Hello', "World"). Strings are immutable.
    *   **`bool`:** Boolean values, either `true` or `false`.
    *   **`dynamic`:** A special type that can hold values of any type. Use with caution as it bypasses type checking.

    ```dart
    int count = 15;
    double temperature = 98.6;
    String message = "Welcome to Dart!";
    bool isComplete = false;
    dynamic anything = "I can be anything";
    anything = 100; // Allowed
    ```

*   **Type Casting/Conversion:**
    *   Converting a value from one type to another.

    ```dart
    String numberString = '123';
    int numberInt = int.parse(numberString); // Convert String to int
    print(numberInt * 2); // Output: 246

    double price = 19.99;
    String priceString = price.toString(); // Convert double to String
    print('The price is: $priceString'); // Output: The price is: 19.99
    ```

---

### **4. Operators**

Operators are symbols that perform operations on variables and values.

*   **Arithmetic Operators:**
    *   `+` (Addition)
    *   `-` (Subtraction)
    *   `*` (Multiplication)
    *   `/` (Division - returns a `double`)
    *   `~/` (Integer Division - returns an `int`)
    *   `%` (Modulo/Remainder)

    ```dart
    int a = 10;
    int b = 3;
    print(a + b);  // Output: 13
    print(a - b);  // Output: 7
    print(a * b);  // Output: 30
    print(a / b);  // Output: 3.3333333333333335
    print(a ~/ b); // Output: 3
    print(a % b);  // Output: 1
    ```

*   **Comparison Operators:**
    *   `==` (Equal to)
    *   `!=` (Not equal to)
    *   `>` (Greater than)
    *   `<` (Less than)
    *   `>=` (Greater than or equal to)
    *   `<=` (Less than or equal to)

    ```dart
    int x = 5;
    int y = 10;
    print(x == y); // Output: false
    print(x < y);  // Output: true
    ```

*   **Logical Operators:**
    *   `&&` (Logical AND)
    *   `||` (Logical OR)
    *   `!` (Logical NOT)

    ```dart
    bool isSunny = true;
    bool isWarm = false;
    print(isSunny && isWarm); // Output: false
    print(isSunny || isWarm); // Output: true
    print(!isSunny);          // Output: false
    ```

*   **Assignment Operators:**
    *   `=` (Assign)
    *   `+=`, `-=`, `*=`, `/=`, `~/=`, `%=` (Shorthand assignment)

    ```dart
    int score = 0;
    score += 10; // Equivalent to score = score + 10;
    print(score); // Output: 10
    ```

*   **Type Test Operators:**
    *   `is` (Checks if an object has a specific type)
    *   `is!` (Checks if an object does NOT have a specific type)

    ```dart
    dynamic data = 'Hello';
    print(data is String); // Output: true
    print(data is int);    // Output: false
    ```

---

### **5. Control Flow Statements**

Control flow statements determine the order in which code is executed.

*   **Conditional Statements:**
    *   **`if` statement:** Executes a block of code if a condition is true.
    *   **`if-else` statement:** Executes one block of code if a condition is true, and another block if it's false.
    *   **`if-else if-else` statement:** Allows for multiple conditions.
    *   **`switch` statement:** Evaluates an expression and executes code based on the matching `case`.

    ```dart
    int age = 20;

    if (age >= 18) {
      print('You are an adult.');
    } else {
      print('You are a minor.');
    }

    int score = 85;
    if (score >= 90) {
      print('Grade: A');
    } else if (score >= 80) {
      print('Grade: B');
    } else {
      print('Grade: C');
    }

    String day = 'Monday';
    switch (day) {
      case 'Monday':
        print('Start of the week.');
        break;
      case 'Friday':
        print('End of the week.');
        break;
      default:
        print('Midweek.');
    }
    ```

*   **Loops:**
    *   **`for` loop:** Executes a block of code a specified number of times.
    *   **`while` loop:** Executes a block of code as long as a condition is true.
    *   **`do-while` loop:** Executes a block of code at least once, then continues as long as a condition is true.
    *   **`for-in` loop:** Iterates over elements in a collection (like Lists).

    ```dart
    // for loop
    for (int i = 0; i < 5; i++) {
      print('Iteration: $i');
    }

    // while loop
    int count = 0;
    while (count < 3) {
      print('Count: $count');
      count++;
    }

    // do-while loop
    int j = 0;
    do {
      print('Do-while iteration: $j');
      j++;
    } while (j < 2);

    // for-in loop (for Lists)
    List<String> fruits = ['Apple', 'Banana', 'Cherry'];
    for (String fruit in fruits) {
      print('Fruit: $fruit');
    }
    ```

---

### **6. Functions**

Functions are blocks of reusable code that perform a specific task.

*   **Defining a Function:**
    *   Syntax: `returnType functionName(parameters) { // function body }`
    *   `returnType`: The type of value the function returns (e.g., `int`, `String`, `void`).
    *   `functionName`: A descriptive name for the function.
    *   `parameters`: Input values the function accepts (optional).
    *   `void`: Used when a function does not return any value.

*   **Calling a Function:**
    *   `functionName(arguments);`

    ```dart
    // Function that takes two integers and returns their sum
    int addNumbers(int a, int b) {
      return a + b;
    }

    // Function that prints a greeting and returns nothing (void)
    void greet(String name) {
      print('Hello, $name!');
    }

    void main() {
      int sum = addNumbers(5, 10); // Calling addNumbers
      print('The sum is: $sum');   // Output: The sum is: 15

      greet('Bob');                // Calling greet
      // Output: Hello, Bob!
    }
    ```

*   **Optional Parameters:**
    *   **Positional Optional Parameters:** Enclosed in square brackets `[]`. Can have default values.
    *   **Named Optional Parameters:** Enclosed in curly braces `{}`. Can have default values.

    ```dart
    // Positional Optional Parameter
    void sayHello(String name, [String greeting = 'Hi']) {
      print('$greeting, $name!');
    }

    // Named Optional Parameters
    void displayInfo({String name, int age = 0}) {
      print('Name: $name, Age: $age');
    }

    void main() {
      sayHello('Charlie');         // Output: Hi, Charlie!
      sayHello('David', 'Hey');    // Output: Hey, David!

      displayInfo(name: 'Eve');    // Output: Name: Eve, Age: 0
      displayInfo(name: 'Frank', age: 25); // Output: Name: Frank, Age: 25
    }
    ```

---

### **7. Null Safety**

Dart has built-in null safety to help prevent null pointer exceptions at runtime.

*   **Non-Nullable Types (Default):**
    *   By default, variables cannot hold `null` unless explicitly allowed.

    ```dart
    // String name = null; // Error: A value of type 'Null' can't be assigned to a variable of type 'String'.
    ```

*   **Nullable Types:**
    *   Use the question mark `?` after the type to make it nullable.

    ```dart
    String? nullableName; // Can hold a String or null
    nullableName = 'Grace';
    print(nullableName); // Output: Grace
    nullableName = null;
    print(nullableName); // Output: null
    ```

*   **Handling Nullable Types:**
    *   **Conditional Access (`?.`):** Access members (methods, properties) only if the object is not null.
    *   **Null Coalescing Operator (`??`):** Provide a default value if the variable is null.
    *   **Assertion Operator (`!`):** Asserts that the value is not null (use with extreme caution).

    ```dart
    String? maybeName;

    // Conditional Access
    print(maybeName?.length); // Output: null (since maybeName is null)
    maybeName = 'Alice';
    print(maybeName?.length); // Output: 5

    // Null Coalescing Operator
    String displayName = maybeName ?? 'Guest';
    print(displayName); // Output: Alice (since maybeName is not null)

    String? anotherName;
    String anotherDisplayName = anotherName ?? 'Guest User';
    print(anotherDisplayName); // Output: Guest User (since anotherName is null)

    // Assertion Operator (use carefully!)
    String? definitelyName = 'Bob';
    // String nameLength = definitelyName!.length; // If definitelyName were null, this would crash!
    // print(nameLength);
    ```

---

### **8. Basic Collections**

Collections are used to store groups of values.

*   **Lists:**
    *   Ordered collection of elements.
    *   Can contain elements of the same type or mixed types (if using `List<dynamic>`).
    *   Use `[]` to create a List.

    ```dart
    // List of strings
    List<String> fruits = ['Apple', 'Banana', 'Cherry'];
    print(fruits);          // Output: [Apple, Banana, Cherry]
    print(fruits[0]);       // Output: Apple (access by index)
    print(fruits.length);   // Output: 3

    fruits.add('Date');     // Add an element
    print(fruits);          // Output: [Apple, Banana, Cherry, Date]

    fruits.remove('Banana'); // Remove an element
    print(fruits);          // Output: [Apple, Cherry, Date]

    // List of integers
    List<int> numbers = [1, 2, 3, 4, 5];
    print(numbers.first);   // Output: 1
    print(numbers.last);    // Output: 5
    ```

*   **Maps:**
    *   Unordered collections of key-value pairs.
    *   Keys are unique.
    *   Use `{}` to create a Map.

    ```dart
    // Map with String keys and String values
    Map<String, String> capitals = {
      'USA': 'Washington D.C.',
      'France': 'Paris',
      'Japan': 'Tokyo',
    };
    print(capitals);
    // Output: {USA: Washington D.C., France: Paris, Japan: Tokyo}

    print(capitals['France']); // Output: Paris (access by key)

    capitals['Germany'] = 'Berlin'; // Add a new key-value pair
    print(capitals);
    // Output: {USA: Washington D.C., France: Paris, Japan: Tokyo, Germany: Berlin}

    capitals.remove('Japan'); // Remove a key-value pair
    print(capitals);
    // Output: {USA: Washington D.C., France: Paris, Germany: Berlin}

    print(capitals.keys);   // Output: (USA, France, Germany)
    print(capitals.values); // Output: (Washington D.C., Paris, Berlin)
    ```

---

### **Important Points to Remember:**

*   Dart is the language of Flutter, making it crucial for mobile development.
*   `main()` is the entry point of any Dart program.
*   Statements end with a semicolon `;`.
*   Use `var`, `final`, or `const` to declare variables. `final` for values that won't change, `const` for compile-time constants.
*   Dart is strongly typed, but `var` allows type inference.
*   Understand the basic data types: `int`, `double`, `String`, `bool`.
*   Be mindful of null safety (`?` for nullable types, `??` for default values).
*   Familiarize yourself with common operators (`+`, `-`, `*`, `/`, `~/`, `%`, `&&`, `||`, `!`, `==`, `!=`, `is`).
*   Control program flow using `if`, `else`, `switch`, `for`, `while`, `do-while`, and `for-in` loops.
*   Functions are essential for code organization and reusability.
*   Lists and Maps are fundamental collection types.

---

### **Practice Questions/Exercises:**

1.  **Variable Declaration:**
    Declare a variable named `userName` of type `String` and assign it your name. Then, declare a `final` variable `appVersion` and assign it the value `1.0`.
    ```dart
    // Your solution here
    ```
    **Answer:**
    ```dart
    String userName = 'Your Name';
    final double appVersion = 1.0;
    ```

2.  **Arithmetic Operations:**
    Given two integer variables `num1 = 15` and `num2 = 4`, calculate and print:
    *   The sum (`num1 + num2`)
    *   The result of integer division (`num1 ~/ num2`)
    *   The remainder of the division (`num1 % num2`)
    ```dart
    // Your solution here
    ```
    **Answer:**
    ```dart
    int num1 = 15;
    int num2 = 4;
    print(num1 + num2); // Output: 19
    print(num1 ~/ num2); // Output: 3
    print(num1 % num2); // Output: 3
    ```

3.  **Conditional Statements:**
    Write an `if-else` statement that checks if a variable `temperature` (e.g., `double temperature = 25.5;`) is greater than or equal to 30. If it is, print "It's hot!"; otherwise, print "It's pleasant.".
    ```dart
    // Your solution here
    ```
    **Answer:**
    ```dart
    double temperature = 25.5;
    if (temperature >= 30) {
      print('It\'s hot!');
    } else {
      print('It\'s pleasant.');
    }
    // Output: It's pleasant.
    ```

4.  **Loops:**
    Use a `for` loop to print the numbers from 1 to 5, each on a new line.
    ```dart
    // Your solution here
    ```
    **Answer:**
    ```dart
    for (int i = 1; i <= 5; i++) {
      print(i);
    }
    /*
    Output:
    1
    2
    3
    4
    5
    */
    ```

5.  **Functions:**
    Create a function called `multiply` that takes two `int` arguments and returns their product. Then, call this function with arguments 6 and 7 and print the result.
    ```dart
    // Your solution here
    ```
    **Answer:**
    ```dart
    int multiply(int a, int b) {
      return a * b;
    }

    void main() {
      int result = multiply(6, 7);
      print('The product is: $result'); // Output: The product is: 42
    }
    ```

6.  **Null Safety:**
    Declare a nullable `String` variable `optionalGreeting` and initialize it to `null`. Then, use the null-coalescing operator (`??`) to create a non-nullable `String` variable `finalGreeting` that defaults to "Hello" if `optionalGreeting` is null. Print `finalGreeting`.
    ```dart
    // Your solution here
    ```
    **Answer:**
    ```dart
    String? optionalGreeting;
    String finalGreeting = optionalGreeting ?? 'Hello';
    print(finalGreeting); // Output: Hello
    ```

7.  **Collections:**
    Create a List named `colors` containing the strings "Red", "Green", and "Blue". Add "Yellow" to the end of the list and then print the second element of the list.
    ```dart
    // Your solution here
    ```
    **Answer:**
    ```dart
    List<String> colors = ['Red', 'Green', 'Blue'];
    colors.add('Yellow');
    print(colors[1]); // Output: Green
