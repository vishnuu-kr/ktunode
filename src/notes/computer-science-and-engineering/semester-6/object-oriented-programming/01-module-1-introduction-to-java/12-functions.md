---
title: "Functions"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf8e"
status: "completed"
scrapedAt: "2026-05-20T16:55:54.295Z"
---
# Object-Oriented Programming: Module 1: Introduction to Java

## Topic: Functions (Methods in Java)

### 1. Introduction to Functions (Methods)

In programming, a function (or a method in Java's context) is a block of organized, reusable code that is used to perform a single, related action. Functions provide a way to break down a program into smaller, modular pieces, making it easier to manage, debug, and understand.

**Key Concepts:**

*   **Modularity:** Functions help divide a large program into smaller, manageable units.
*   **Reusability:** Once a function is written, it can be called multiple times from different parts of the program, avoiding code duplication.
*   **Abstraction:** Functions hide the complex implementation details, allowing users to focus on what the function does rather than how it does it.
*   **Maintainability:** Changes or bug fixes can be made to a specific function without affecting other parts of the program as much.

### 2. Purpose and Benefits of Using Functions

Functions are fundamental to writing efficient and well-structured programs. Their primary purposes and benefits include:

*   **Breaking Down Complex Problems:** Large, complex tasks can be decomposed into smaller, more manageable sub-tasks, each handled by a separate function.
*   **Reducing Redundancy (DRY - Don't Repeat Yourself):** Instead of writing the same code multiple times, you can encapsulate it within a function and call it whenever needed.
*   **Improving Readability and Understanding:** Well-named functions make the code's purpose clear, leading to easier comprehension.
*   **Facilitating Collaboration:** Different developers can work on different functions concurrently.
*   **Simplifying Testing and Debugging:** Individual functions can be tested in isolation, making it easier to identify and fix errors.

### 3. Defining a Function (Method) in Java

In Java, functions are called **methods**. A method definition in Java typically includes the following components:

```java
access_modifier return_type method_name(parameter_list) {
    // Method body - statements to perform the task
    return value; // if return_type is not void
}
```

Let's break down each part:

*   **`access_modifier` (Optional):**
    *   Specifies the visibility of the method. Common modifiers include:
        *   `public`: Accessible from any other class.
        *   `private`: Accessible only within the same class.
        *   `protected`: Accessible within the same package and by subclasses in other packages.
        *   (Default/Package-private): Accessible only within the same package.
    *   If omitted, it defaults to package-private.

*   **`return_type`:**
    *   Specifies the data type of the value that the method returns.
    *   If the method does not return any value, the `return_type` is `void`.
    *   Examples: `int`, `double`, `String`, `boolean`, `void`, `MyCustomClass`.

*   **`method_name`:**
    *   A unique identifier for the method.
    *   Should follow Java naming conventions (camelCase, starting with a lowercase letter, descriptive).

*   **`parameter_list` (Optional):**
    *   A list of parameters enclosed in parentheses. Parameters are variables that receive input values when the method is called.
    *   Each parameter consists of a data type and a parameter name.
    *   Multiple parameters are separated by commas.
    *   Example: `(int num1, int num2)`, `(String message)`.
    *   If a method takes no input, the parentheses are empty: `()`.

*   **Method Body `{}`:**
    *   Contains the statements that perform the method's action.
    *   This is where the logic of the function resides.
    *   It can include variable declarations, calculations, control flow statements (if, loops), and other method calls.

*   **`return value;` (Conditional):**
    *   If the `return_type` is not `void`, the method must return a value of the specified `return_type` using the `return` keyword.
    *   The `return` statement also terminates the execution of the method.

**Example of Method Definition:**

```java
// A method that adds two integers and returns their sum
public int addNumbers(int num1, int num2) {
    int sum = num1 + num2;
    return sum; // Returns an integer value
}

// A method that prints a greeting and returns nothing
public void displayGreeting(String name) {
    System.out.println("Hello, " + name + "!");
    // No return statement needed as the return type is void
}
```

### 4. Calling a Function (Method) in Java

To use a method, you need to **call** it. Method calls are made using the method name followed by parentheses, and providing the required arguments if the method expects any.

*   **Syntax:** `object_name.method_name(arguments)` (if calling an instance method)
    *   `object_name`: An instance of the class where the method is defined.
    *   `arguments`: Values passed to the method's parameters. The number and types of arguments must match the parameter list.

*   **Syntax:** `ClassName.method_name(arguments)` (if calling a static method)
    *   `ClassName`: The name of the class where the static method is defined.
    *   Static methods belong to the class itself, not to any specific object.

**Example of Method Calling:**

```java
public class Calculator {

    // Method to add two numbers
    public int add(int a, int b) {
        return a + b;
    }

    // Method to display a message
    public void printMessage(String msg) {
        System.out.println(msg);
    }

    public static void main(String[] args) {
        // Create an object of the Calculator class
        Calculator myCalculator = new Calculator();

        // Call the add method
        int result = myCalculator.add(5, 10); // Arguments 5 and 10 are passed
        System.out.println("The sum is: " + result); // Output: The sum is: 15

        // Call the printMessage method
        myCalculator.printMessage("Java Functions are cool!"); // Argument "Java Functions are cool!" is passed
        // Output: Java Functions are cool!
    }
}
```

### 5. Parameters and Arguments

*   **Parameters:** Variables declared in the method signature (within the parentheses). They act as placeholders for the values that will be passed to the method.
*   **Arguments:** The actual values that are passed to the method when it is called. The number, order, and data type of arguments must match the corresponding parameters in the method definition.

**Types of Arguments/Parameters:**

1.  **Pass by Value:**
    *   Java primarily uses "pass by value" for primitive data types (like `int`, `double`, `boolean`).
    *   When you pass a primitive variable to a method, a copy of the variable's value is created and passed to the method's parameter.
    *   Any changes made to the parameter inside the method do not affect the original variable outside the method.

    ```java
    public class PassByValueExample {
        public void modifyValue(int number) {
            number = number * 2; // Modifies the local copy
            System.out.println("Inside method: " + number); // Output: Inside method: 20
        }

        public static void main(String[] args) {
            PassByValueExample obj = new PassByValueExample();
            int originalNumber = 10;
            System.out.println("Before method call: " + originalNumber); // Output: Before method call: 10

            obj.modifyValue(originalNumber);

            System.out.println("After method call: " + originalNumber); // Output: After method call: 10 (original remains unchanged)
        }
    }
    ```

2.  **Pass by Reference (for Objects):**
    *   For object types (like `String`, arrays, custom class objects), Java uses "pass by value" where the *value* being passed is the **reference** to the object.
    *   This means the method receives a copy of the memory address of the object.
    *   If you modify the *contents* of the object (e.g., change a field of an object), these changes will be reflected in the original object outside the method.
    *   However, if you reassign the parameter to a *completely new* object, it will not affect the original object reference.

    ```java
    class MyObject {
        int value;
        MyObject(int value) { this.value = value; }
    }

    public class PassByReferenceExample {
        public void modifyObject(MyObject obj) {
            obj.value = obj.value * 2; // Modifies the object's state
            System.out.println("Inside method (obj.value): " + obj.value); // Output: Inside method (obj.value): 20
        }

        public void reassignObject(MyObject obj) {
            obj = new MyObject(100); // Reassigns the parameter to a new object
            System.out.println("Inside method (reassign, obj.value): " + obj.value); // Output: Inside method (reassign, obj.value): 100
        }

        public static void main(String[] args) {
            PassByReferenceExample objRef = new PassByReferenceExample();

            MyObject myObj = new MyObject(10);
            System.out.println("Before modifyObject call: " + myObj.value); // Output: Before modifyObject call: 10

            objRef.modifyObject(myObj);
            System.out.println("After modifyObject call: " + myObj.value); // Output: After modifyObject call: 20 (original object modified)

            System.out.println("\nBefore reassignObject call: " + myObj.value); // Output: Before reassignObject call: 20
            objRef.reassignObject(myObj);
            System.out.println("After reassignObject call: " + myObj.value); // Output: After reassignObject call: 20 (original object not affected by reassignment)
        }
    }
    ```

### 6. Return Types and the `return` Statement

*   **`void` Return Type:**
    *   Methods with a `void` return type do not return any value.
    *   They perform an action, like printing output or modifying object state, but don't produce a result that can be directly used in an expression.
    *   A `return;` statement can be used to exit a `void` method early, but it's not mandatory if the method completes normally.

*   **Non-`void` Return Types:**
    *   Methods with a non-`void` return type (e.g., `int`, `String`, `boolean`) **must** return a value of that specified type.
    *   The `return` statement is used to specify the value to be returned.
    *   Once a `return` statement is executed, the method terminates immediately.

**Important Points:**

*   A method can have only one `return` statement that actually returns a value. However, you can have multiple `return` statements if they are within different conditional blocks (e.g., `if` statements).
*   If a method is declared with a non-`void` return type but does not have a `return` statement that executes for all possible code paths, the compiler will produce an error.

**Example:**

```java
public class ReturnExample {

    // Returns the larger of two numbers
    public int findMax(int x, int y) {
        if (x > y) {
            return x; // Returns x if x is greater
        } else {
            return y; // Returns y if y is greater or equal
        }
        // If we didn't have an else, and x was not > y, this method would compile error
    }

    // Returns a formatted string
    public String formatName(String firstName, String lastName) {
        if (firstName == null || lastName == null) {
            return "Invalid input"; // Return error string
        }
        return lastName.toUpperCase() + ", " + firstName.toUpperCase();
    }

    public static void main(String[] args) {
        ReturnExample obj = new ReturnExample();

        int maxVal = obj.findMax(25, 15);
        System.out.println("Maximum value: " + maxVal); // Output: Maximum value: 25

        String formatted = obj.formatName("John", "Doe");
        System.out.println("Formatted name: " + formatted); // Output: Formatted name: DOE, JOHN
    }
}
```

### 7. Types of Methods

Methods can be categorized based on whether they belong to an instance of a class or to the class itself.

1.  **Instance Methods (Non-Static Methods):**
    *   These methods are associated with an object (an instance) of a class.
    *   They operate on the data (instance variables) of that specific object.
    *   To call an instance method, you need to create an object of the class first.
    *   They can access both instance variables and static variables/methods.

    ```java
    class Dog {
        String name; // Instance variable

        // Constructor to initialize the object
        public Dog(String name) {
            this.name = name;
        }

        // Instance method
        public void bark() {
            System.out.println(name + " says Woof!");
        }
    }

    // In main method:
    // Dog myDog = new Dog("Buddy");
    // myDog.bark(); // Calling instance method
    ```

2.  **Static Methods:**
    *   These methods belong to the class itself, not to any specific object instance.
    *   They are declared using the `static` keyword.
    *   You can call a static method directly using the class name without creating an object.
    *   Static methods can **only** access static variables and call other static methods. They cannot access instance variables or instance methods directly because they don't operate on a specific object.
    *   Common uses include utility functions (like `Math.sqrt()`) or methods that operate on class-level data.

    ```java
    class MathUtils {
        // Static method
        public static int add(int a, int b) {
            return a + b;
        }

        // Static variable
        public static final double PI = 3.14159;
    }

    // In main method:
    // int sum = MathUtils.add(10, 20); // Calling static method using class name
    // System.out.println("Sum: " + sum);
    // System.out.println("PI: " + MathUtils.PI);
    ```

### 8. Method Overloading

*   **Definition:** Method overloading is a feature that allows multiple methods to have the same name within the same class, provided they have different **parameter lists**.
*   **Purpose:** It improves code readability and allows you to create methods that perform similar operations but on different types or numbers of data.
*   **How it works:** The compiler differentiates between overloaded methods based on the number of parameters, the data types of the parameters, and the order of the parameters. The return type alone is **not** enough to distinguish overloaded methods.

**Example of Method Overloading:**

```java
public class OverloadingExample {

    // Method to add two integers
    public int add(int a, int b) {
        System.out.println("Adding two integers");
        return a + b;
    }

    // Method to add three integers (overloaded add)
    public int add(int a, int b, int c) {
        System.out.println("Adding three integers");
        return a + b + c;
    }

    // Method to add two doubles (overloaded add)
    public double add(double a, double b) {
        System.out.println("Adding two doubles");
        return a + b;
    }

    public static void main(String[] args) {
        OverloadingExample obj = new OverloadingExample();

        int sum1 = obj.add(5, 10); // Calls the first add method
        System.out.println("Result: " + sum1); // Output: Adding two integers \n Result: 15

        int sum2 = obj.add(5, 10, 15); // Calls the second add method
        System.out.println("Result: " + sum2); // Output: Adding three integers \n Result: 30

        double sum3 = obj.add(5.5, 10.2); // Calls the third add method
        System.out.println("Result: " + sum3); // Output: Adding two doubles \n Result: 15.7
    }
}
```

**What constitutes a different parameter list for overloading:**

*   **Different number of parameters:** `add(int, int)` vs. `add(int, int, int)`
*   **Different data types of parameters:** `add(int, int)` vs. `add(double, double)`
*   **Different order of data types of parameters:** `process(int, String)` vs. `process(String, int)`

**Important Note:** Methods cannot be overloaded solely by their return type.

### 9. Practice Questions and Exercises

**Question 1:**
Write a Java method called `greet` that takes a `String` parameter representing a person's name and prints a greeting message like "Hello, [name]!".

**Question 2:**
Write a Java method called `calculateArea` that takes two `double` parameters, `radius` and `height`, and returns the volume of a cylinder. The formula for the volume of a cylinder is `π * radius² * height`. Use `Math.PI` for π and `Math.pow()` for exponentiation.

**Question 3:**
Write a Java method called `isEven` that takes an `int` parameter and returns `true` if the number is even, and `false` otherwise.

**Question 4:**
Consider the following code snippet. What will be the output? Explain why.

```java
public class Test {
    public void changeValue(int x) {
        x = x + 10;
    }

    public static void main(String[] args) {
        Test obj = new Test();
        int num = 5;
        obj.changeValue(num);
        System.out.println(num);
    }
}
```

**Question 5:**
Explain the difference between method overloading and method overriding (briefly). Which one is discussed in this module?

---

### Answers to Practice Questions

**Answer 1:**

```java
public class Greeting {
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        Greeting greeter = new Greeting();
        greeter.greet("Alice"); // Output: Hello, Alice!
    }
}
```

**Answer 2:**

```java
public class CylinderCalculator {
    public double calculateArea(double radius, double height) {
        // Volume = pi * r^2 * h
        double volume = Math.PI * Math.pow(radius, 2) * height;
        return volume;
    }

    public static void main(String[] args) {
        CylinderCalculator calc = new CylinderCalculator();
        double cylVolume = calc.calculateArea(5.0, 10.0);
        System.out.println("Volume of cylinder: " + cylVolume);
        // Expected output will be close to 785.398...
    }
}
```

**Answer 3:**

```java
public class NumberChecker {
    public boolean isEven(int number) {
        // An even number is perfectly divisible by 2 (remainder is 0)
        return number % 2 == 0;
    }

    public static void main(String[] args) {
        NumberChecker checker = new NumberChecker();
        System.out.println("Is 4 even? " + checker.isEven(4));   // Output: Is 4 even? true
        System.out.println("Is 7 even? " + checker.isEven(7));   // Output: Is 7 even? false
    }
}
```

**Answer 4:**
The output will be:
`5`

**Explanation:**
Java uses "pass by value" for primitive types like `int`. When `obj.changeValue(num)` is called, a *copy* of the value of `num` (which is 5) is passed to the `x` parameter inside the `changeValue` method. The `x = x + 10;` statement modifies this local copy of `x` to 15. However, the original `num` variable in the `main` method remains unchanged because the method only worked with a copy.

**Answer 5:**
*   **Method Overloading:** Occurs within the same class, where multiple methods share the same name but have different parameter lists (number, type, or order of parameters). The return type can be the same or different.
*   **Method Overriding:** Occurs in inheritance. A subclass provides a specific implementation for a method that is already defined in its superclass. The method signature (name, return type, and parameters) must be the same as the superclass method (with some exceptions for return type).

This module discusses **method overloading**.
