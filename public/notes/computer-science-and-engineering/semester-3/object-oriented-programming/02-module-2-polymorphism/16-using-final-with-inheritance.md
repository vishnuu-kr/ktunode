---
title: "Using final with Inheritance."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acb2"
status: "completed"
scrapedAt: "2026-05-20T16:28:55.037Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 2: Polymorphism - Using final with Inheritance

## Introduction

This module focuses on using the `final` keyword in the context of inheritance in Object-Oriented Programming (OOP). `final` provides a way to restrict inheritance, preventing unintended modifications or extensions of classes and methods. Understanding how to use `final` effectively is crucial for creating robust and maintainable code.

## Learning Outcomes

By the end of this module, you will be able to:

*   Define the purpose of the `final` keyword.
*   Explain how `final` is used with classes, methods, and variables.
*   Describe the implications of using `final` with inheritance.
*   Provide examples of how `final` can improve code reliability and security.
*   Identify situations where using `final` is appropriate or not.

## 1. Purpose of the `final` Keyword

The `final` keyword in Java (and similar concepts in other OOP languages) serves the purpose of preventing modification or overriding. It's a way to declare something as *immutable* or *unchangeable*. When applied to different elements, it has different effects:

*   **`final` variable:** The variable's value cannot be changed after initialization. It's a constant.
*   **`final` method:** The method cannot be overridden by subclasses.
*   **`final` class:** The class cannot be subclassed (inherited from).

## 2. Using `final` with Variables

A `final` variable must be initialized at the time of declaration or within the constructor.

*   **Example:**

    ```java
    class Example {
        final int x = 10; // Initialized at declaration

        final int y; // needs to be initialized in the constructor

        public Example(int value) {
            this.y = value; // Initialized in the constructor
        }

        public void printValues() {
            System.out.println("x: " + x);
            System.out.println("y: " + y);
        }

        public static void main(String[] args) {
            Example example = new Example(20);
            example.printValues(); // Output: x: 10, y: 20

            //example.x = 30; // Compilation error: Cannot assign a value to final variable 'x'
            //example.y = 40; // Compilation error: Cannot assign a value to final variable 'y'
        }
    }
    ```

*   **Key Points:**

    *   Once a `final` variable is assigned a value, it cannot be changed.
    *   `final` variables are often used for constants or values that should not be altered during the program's execution.
    *   If a `final` variable is an object reference, the reference itself cannot be changed, but the *state* of the object it refers to *can* be changed (unless the object itself is immutable).

## 3. Using `final` with Methods

A `final` method cannot be overridden by any subclass. This prevents subclasses from changing the behavior of the method.

*   **Example:**

    ```java
    class Parent {
        public final void display() {
            System.out.println("This is a final method in the Parent class.");
        }
    }

    class Child extends Parent {
        // @Override // This would cause a compilation error
        // public void display() {
        //     System.out.println("This is an overridden method in the Child class.");
        // }

        public void show() {
            System.out.println("This is a method in the Child class.");
        }

        public static void main(String[] args) {
            Parent parent = new Parent();
            parent.display();  // Output: This is a final method in the Parent class.

            Child child = new Child();
            child.display();  // Output: This is a final method in the Parent class.
            child.show();     // Output: This is a method in the Child class.
        }
    }
    ```

*   **Key Points:**

    *   `final` methods ensure that a specific behavior is maintained across all subclasses.
    *   This is useful when a particular method implementation is critical and must not be changed.
    *   It can be used for security-sensitive methods or those that are essential for maintaining the integrity of the class.

## 4. Using `final` with Classes

A `final` class cannot be extended (subclassed). This prevents other classes from inheriting from it.

*   **Example:**

    ```java
    final class ImmutableClass {
        private final int value;

        public ImmutableClass(int value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }
    }

    // class Subclass extends ImmutableClass { // Compilation error: Cannot inherit from final 'ImmutableClass'
    //
    // }

    public class Main {
        public static void main(String[] args) {
            ImmutableClass obj = new ImmutableClass(10);
            System.out.println(obj.getValue()); // Output: 10
        }
    }
    ```

*   **Key Points:**

    *   `final` classes prevent inheritance, ensuring that the class's implementation remains fixed.
    *   This is often used to create immutable classes, where the state of an object cannot be changed after creation.
    *   `final` classes can also be used to prevent unintended modifications or extensions of a class.

## 5. Implications of Using `final` with Inheritance

Using `final` has significant implications for inheritance:

*   **Classes:** It restricts the creation of subclasses, controlling the class hierarchy and preventing unwanted extensions.
*   **Methods:** It prevents subclasses from modifying the behavior of specific methods, ensuring consistency and preventing unexpected side effects.  This also has performance implications; a `final` method can sometimes be inlined by the compiler because the compiler knows for sure that the method can't be overridden.
*   **Variables:** It makes variables constant, ensuring that their values remain unchanged, which can be important for maintaining data integrity and program correctness.

## 6. Examples of How `final` Improves Code Reliability and Security

*   **Immutable Classes:** Creating immutable classes with `final` can significantly improve code reliability by preventing accidental modification of object state.  This is especially useful in multi-threaded environments, as immutable objects are inherently thread-safe.

    ```java
    final class ImmutableString {
        private final String data;

        public ImmutableString(String data) {
            this.data = data;
        }

        public String getData() {
            return data;
        }
    }

    // Any modification to the data will require a new ImmutableString object.
    ```

*   **Security-Sensitive Methods:** Preventing overriding of security-sensitive methods with `final` can enhance security by ensuring that the intended behavior is always executed.

    ```java
    class AuthenticationService {
        public final boolean authenticate(String username, String password) {
            // Complex authentication logic
            // Prevent subclasses from bypassing or altering authentication
            return username.equals("admin") && password.equals("password");
        }
    }
    ```

*   **Ensuring Algorithm Integrity:** If a class implements a critical algorithm, marking the corresponding method as `final` prevents subclasses from changing the algorithm's behavior, guaranteeing its integrity.

    ```java
    class Encryption {
        public final byte[] encrypt(byte[] data) {
            // Encryption logic that must not be altered
            return data; // in reality, encrypt data based on algorithm
        }
    }
    ```

## 7. Identifying Appropriate and Inappropriate Situations

*   **Appropriate situations:**

    *   When you want to create immutable objects.
    *   When you want to prevent subclasses from modifying critical methods.
    *   When you want to restrict inheritance to control the class hierarchy.
    *   When performance optimization can be achieved by compiler inlining.
    *   When dealing with security-sensitive code.

*   **Inappropriate situations:**

    *   When you need to allow subclasses to extend or modify the behavior of a class or method.
    *   When using `final` excessively can reduce flexibility and make code harder to maintain. Consider other design patterns (like composition) as alternatives.
    *   Using `final` for all variables is not recommended, because it can increase complexity where mutability is acceptable.

## Important Points to Remember

*   `final` restricts modification at different levels (variable, method, class).
*   `final` enhances code reliability and security.
*   Immutability is a key benefit of using `final`.
*   Carefully consider when to use `final` to balance restriction and flexibility.
*   A final variable can only be assigned once.
*   A final method cannot be overridden.
*   A final class cannot be subclassed.

## Practice Questions and Exercises

**Question 1:**

Explain the difference between a `final` variable, a `final` method, and a `final` class.

**Answer:**

*   **`final` variable:**  The value of the variable cannot be changed after it's been initialized. It becomes a constant.
*   **`final` method:** The method cannot be overridden by any subclass. It ensures a specific implementation is always used.
*   **`final` class:**  The class cannot be subclassed or extended. It prevents any other class from inheriting its properties and behavior.

**Question 2:**

Why might you want to use a `final` class?  Give an example scenario.

**Answer:**

You might want to use a `final` class for several reasons:

*   **Immutability:** To create an immutable class, where the object's state cannot be changed after creation.
*   **Security:**  To prevent unintended extensions or modifications to the class, particularly if it handles sensitive data or operations.
*   **Design control:** To maintain complete control over the class's behavior and prevent subclasses from introducing unexpected functionality.

**Example Scenario:**  Consider a class representing a credit card number.  You might make this class `final` to prevent subclasses from modifying the number or adding methods that could compromise security.

**Question 3:**

Write a Java code snippet that demonstrates a `final` method and explain why it is beneficial in that specific context.

**Answer:**

```java
class Calculator {
    public final int add(int a, int b) {
        // Critical addition logic
        return a + b;
    }
}

class AdvancedCalculator extends Calculator {
    // Attempting to override add() will result in a compilation error
    // @Override
    // public int add(int a, int b) {
    //     return a + b + 1; // Attempt to modify the core addition logic
    // }

    public int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        AdvancedCalculator calc = new AdvancedCalculator();
        System.out.println(calc.add(5, 3)); // Output: 8 (unmodified addition)
    }
}
```

**Explanation:** In this example, the `add()` method in the `Calculator` class is declared as `final`. This is beneficial because it ensures that the core addition logic is never altered by subclasses. Even if a subclass like `AdvancedCalculator` attempts to override `add()`, it will result in a compilation error. This guarantees that the fundamental addition operation remains consistent and predictable. This can be crucial in financial or scientific calculations where the integrity of the arithmetic operations is paramount.

**Question 4:**

Can a `final` variable be initialized later after declaration?  If so, explain how.

**Answer:**

Yes, a `final` variable can be initialized later *if* it is a blank `final` variable. A blank `final` variable is a `final` variable that is declared but not initialized at the time of declaration. It *must* be initialized in the constructor of the class.

**Example:**

```java
class MyClass {
    private final int x;

    public MyClass(int value) {
        x = value; // Initializing the blank final variable in the constructor
    }

    public int getX() {
        return x;
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass(10);
        System.out.println(obj.getX()); // Output: 10
    }
}
```

In this case, 'x' is a blank final variable and initialized through constructor.

**Question 5:**

Explain a real-world scenario where using a `final` class would be beneficial for security reasons.

**Answer:**

Consider a class that handles encryption keys in a security system. Making this class `final` would prevent attackers from creating subclasses that could potentially bypass security checks or alter the encryption key management logic.  For example, an attacker might try to create a subclass that exposes the encryption key or weakens the encryption algorithm. By declaring the encryption key management class as `final`, the system can ensure that the key management process remains secure and uncompromised. This reduces the risk of unauthorized access to sensitive data.
