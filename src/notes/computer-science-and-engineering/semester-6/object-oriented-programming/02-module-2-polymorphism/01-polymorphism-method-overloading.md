---
title: "Polymorphism  - Method Overloading"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf9d"
status: "completed"
scrapedAt: "2026-05-20T16:56:04.719Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism

## Topic: Polymorphism - Method Overloading

---

### Introduction to Polymorphism

**Polymorphism**, a core concept in Object-Oriented Programming (OOP), means "many forms." It allows objects of different classes to be treated as objects of a common superclass. This enables writing flexible and reusable code.

There are two main types of polymorphism:

*   **Compile-time Polymorphism (Static Polymorphism)**: Determined during compilation.
*   **Runtime Polymorphism (Dynamic Polymorphism)**: Determined during program execution.

**Method overloading** is a mechanism that supports **compile-time polymorphism**.

---

### Method Overloading

#### Key Concepts and Definitions

*   **Method Overloading**: The ability to define multiple methods with the same name but different parameter lists within the same class. The compiler differentiates between these methods based on their **signature**.

*   **Method Signature**: The combination of the method name and the types and order of its parameters. The return type of a method is **NOT** part of its signature for overloading purposes.

#### How Method Overloading Works

1.  **Same Method Name**: All overloaded methods must share the same name.
2.  **Different Parameter Lists**: The compiler uses the number, type, and order of parameters to identify which specific overloaded method to call.
3.  **Return Type is Irrelevant**: Changing only the return type of a method while keeping the parameter list the same does **NOT** constitute overloading. This will result in a compilation error.

#### Benefits of Method Overloading

*   **Code Readability**: Makes code more understandable by using a single, descriptive name for related operations.
*   **Code Reusability**: Reduces the need for multiple, similarly named methods that perform the same basic action with different data types.
*   **Flexibility**: Allows a class to perform the same operation in different ways depending on the input provided.

#### Types of Differences in Parameter Lists for Overloading

To successfully overload a method, its parameter list must differ in at least one of the following ways:

1.  **Number of Parameters**:
    *   Methods with the same name but different counts of parameters.

2.  **Type of Parameters**:
    *   Methods with the same name and number of parameters, but with different data types for those parameters.

3.  **Order of Parameters**:
    *   Methods with the same name and number of parameters, but with a different sequence of data types for those parameters.

---

### Examples

Let's illustrate method overloading with examples in a hypothetical programming language (similar to Java or C#).

#### Example 1: Overloading by Number of Parameters

```
class Calculator {
    // Method to add two integers
    int add(int a, int b) {
        return a + b;
    }

    // Method to add three integers
    int add(int a, int b, int c) {
        return a + b + c;
    }
}

// Usage:
calculator = new Calculator();
result1 = calculator.add(5, 10);       // Calls add(int, int)
result2 = calculator.add(5, 10, 15);   // Calls add(int, int, int)
```

**Explanation:**
Both methods are named `add`. The first takes two `int` parameters, while the second takes three `int` parameters. The compiler correctly identifies which `add` method to call based on the number of arguments provided.

#### Example 2: Overloading by Type of Parameters

```
class Printer {
    // Method to print an integer
    void print(int value) {
        print("Integer: " + value);
    }

    // Method to print a string
    void print(String text) {
        print("String: " + text);
    }

    // Method to print a double
    void print(double value) {
        print("Double: " + value);
    }
}

// Usage:
printer = new Printer();
printer.print(100);          // Calls print(int)
printer.print("Hello");      // Calls print(String)
printer.print(25.75);        // Calls print(double)
```

**Explanation:**
All methods are named `print`, but they accept parameters of different data types (`int`, `String`, `double`). The compiler chooses the appropriate `print` method based on the type of data passed to it.

#### Example 3: Overloading by Order of Parameters

```
class DataProcessor {
    // Method to process a string and an integer
    void process(String data, int count) {
        print("Processing String: " + data + ", Count: " + count);
    }

    // Method to process an integer and a string
    void process(int count, String data) {
        print("Processing Count: " + count + ", String: " + data);
    }
}

// Usage:
processor = new DataProcessor();
processor.process("sample", 5);    // Calls process(String, int)
processor.process(10, "another");  // Calls process(int, String)
```

**Explanation:**
Both `process` methods have the same parameter types (`String` and `int`), but their order is different. The compiler distinguishes them based on the order of arguments provided.

#### Example 4: What is NOT Overloading (Return Type Difference)

```
class Shape {
    // Method to calculate area (returns int)
    int calculateArea(int side) {
        return side * side; // For a square
    }

    // This would cause a compilation error if uncommented
    // double calculateArea(int side) {
    //     return (double)side * side;
    // }
}
```

**Explanation:**
If you try to have two methods with the same name and the same parameter list but different return types, the compiler will report an error because it cannot distinguish between them for the purpose of method invocation.

---

### Important Points to Remember

*   **Method Signature is Key**: Always remember that the method signature (name + parameter list) is what matters for overloading. Return types are **NOT** part of the signature for overloading.
*   **Compile-Time Resolution**: Method overloading is resolved by the compiler at compile time. This is why it's also known as **compile-time polymorphism**.
*   **Ambiguity**: Be careful not to create ambiguous overloaded methods. If the compiler cannot definitively determine which overloaded method to call based on the provided arguments, it will result in a compilation error. This can happen with type promotions (e.g., passing an `int` to a method expecting `long` vs. a method expecting `double` if both are overloaded).
*   **Private Methods Can Be Overloaded**: You can overload private methods within the same class.
*   **Static Methods Can Be Overloaded**: Static methods can also be overloaded in the same way as instance methods.

---

### Practice Questions and Exercises

**Question 1:**
Which of the following would be a valid method overloading scenario within the same class?

a)
```java
void display(int x) { ... }
void display(double x) { ... }
```

b)
```java
int calculate(int a, int b) { ... }
double calculate(int a, int b) { ... }
```

c)
```java
void process(String s) { ... }
String process(String s) { ... }
```

d)
```java
void print(int num) { ... }
void print(int num, String msg) { ... }
```

**Question 2:**
Consider the following code snippet:

```java
class Example {
    void perform(int value) {
        System.out.println("Int: " + value);
    }

    void perform(long value) {
        System.out.println("Long: " + value);
    }

    void perform(double value) {
        System.out.println("Double: " + value);
    }
}

Example obj = new Example();
obj.perform(10);
```
Which `perform` method will be called? Explain why.

**Question 3:**
Write a class named `Converter` with overloaded methods named `convert` that can perform the following conversions:
1.  Convert Celsius to Fahrenheit (double input, double output).
2.  Convert inches to centimeters (double input, double output).
3.  Convert kilograms to pounds (double input, double output).

**Question 4:**
Identify the error in the following code snippet:

```java
class MyMath {
    int add(int x, int y) {
        return x + y;
    }

    // What's wrong here?
    // int add(int y, int x) {
    //     return y + x;
    // }
}
```

---

### Answers to Practice Questions

**Answer 1:**
The correct options are **a)** and **d)**.

*   **a)** is valid because the parameter types are different (`int` vs. `double`).
*   **b)** is invalid because both methods have the same name and the same parameter list (`int a, int b`). The return type difference is not sufficient for overloading.
*   **c)** is invalid for the same reason as b); the return type difference is not enough.
*   **d)** is valid because the number of parameters is different (one `int` vs. one `int` and one `String`).

**Answer 2:**
The `perform(int value)` method will be called.

**Explanation:**
When you call `obj.perform(10)`, the argument `10` is an integer literal. The compiler looks for an overloaded `perform` method that best matches this argument.

*   `perform(int value)` is a direct match.
*   `perform(long value)` would involve an implicit type promotion from `int` to `long`, which is a valid conversion but not a direct match.
*   `perform(double value)` would involve an implicit type promotion from `int` to `double`, also a valid conversion but not a direct match.

The compiler prefers the most specific match, which is the `perform(int value)` method.

**Answer 3:**
```java
class Converter {
    // Convert Celsius to Fahrenheit
    double convert(double celsius) {
        return (celsius * 9.0 / 5.0) + 32.0;
    }

    // Convert inches to centimeters
    double convert(double inches) {
        return inches * 2.54;
    }

    // Convert kilograms to pounds
    double convert(double kilograms) {
        return kilograms * 2.20462;
    }
}

// Example Usage:
converter = new Converter();
fahrenheit = converter.convert(25.0);       // Calls convert(double celsius)
cm = converter.convert(10.0);               // Calls convert(double inches)
pounds = converter.convert(5.0);            // Calls convert(double kilograms)

// Note: In this specific example, all methods have the same parameter list (double).
// This would cause a compilation error because the compiler cannot distinguish them.
// To make this valid, we need to differentiate parameter types or number of parameters.
// A better approach would be:

// --- Revised Example for Valid Overloading ---
class ConverterRevised {
    // Convert Celsius to Fahrenheit
    double celsiusToFahrenheit(double celsius) {
        return (celsius * 9.0 / 5.0) + 32.0;
    }

    // Convert inches to centimeters
    double inchesToCentimeters(double inches) {
        return inches * 2.54;
    }

    // Convert kilograms to pounds
    double kilogramsToPounds(double kilograms) {
        return kilograms * 2.20462;
    }
}
// In this revised version, the method names are different, which is not overloading,
// but it achieves the desired functionality without ambiguity.

// To truly demonstrate overloading for conversion with different parameter *types* or *counts*:

class ConverterOverload {
    // Convert Celsius to Fahrenheit (using double)
    double convert(double celsius) {
        return (celsius * 9.0 / 5.0) + 32.0;
    }

    // Convert inches to centimeters (using double)
    // STILL AMBIGUOUS WITH THE ABOVE convert(double)

    // Let's reconsider the requirement. Method overloading requires *different* signatures.
    // If the goal is to have multiple "convert" functions, they should likely have
    // different parameter lists or context.

    // Option 1: Different return types (NOT overloading)
    // Option 2: Different parameter types
    // Option 3: Different number of parameters

    // A more practical demonstration of overloading for "convert" might look like:
    // Convert Celsius to Fahrenheit
    double convertToFahrenheit(double celsius) { // Different name
        return (celsius * 9.0 / 5.0) + 32.0;
    }

    // Convert inches to centimeters
    double convertToCentimeters(double inches) { // Different name
        return inches * 2.54;
    }

    // Convert kilograms to pounds
    double convertToPounds(double kilograms) { // Different name
        return kilograms * 2.20462;
    }

    // To actually demonstrate overloading with the name 'convert', we'd need to
    // change parameter types or add more parameters, e.g.:

    // Convert value with unit type
    String convert(double value, String unit) {
        if (unit.equalsIgnoreCase("C_to_F")) {
            return value + " C is " + ((value * 9.0 / 5.0) + 32.0) + " F";
        } else if (unit.equalsIgnoreCase("in_to_cm")) {
            return value + " inches is " + (value * 2.54) + " cm";
        } else {
            return "Unknown conversion";
        }
    }

    // Convert value with unit type and another value
    String convert(double value1, double value2, String unit) {
        if (unit.equalsIgnoreCase("add")) {
            return "Sum: " + (value1 + value2);
        } else {
            return "Unknown conversion";
        }
    }
}

// The original interpretation of "overloaded methods named convert" implies
// multiple methods with the same name but different parameter lists.
// Given the task description, the most direct interpretation is to have methods
// like this, IF the compiler allowed it. Since it doesn't, it highlights the
// limitation. The most common way to achieve this is by using different method names
// or adding differentiating parameters.
```

**Answer 4:**
The error is that the two `add` methods have the exact same method signature: `add(int, int)`. Changing only the order of parameters with the same types (e.g., `add(int x, int y)` vs. `add(int y, int x)`) does not create a different signature for overloading purposes. The compiler cannot distinguish between these two methods.

---

This concludes the notes on Method Overloading for Module 2: Polymorphism. Remember to practice these concepts with your chosen programming language.
