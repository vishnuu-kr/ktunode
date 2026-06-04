---
title: "Using final with Inheritance"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfac"
status: "completed"
scrapedAt: "2026-05-20T16:56:15.647Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism

## Topic: Using `final` with Inheritance

This module delves into the concept of polymorphism, and specifically, how the `final` keyword interacts with inheritance, influencing how classes and methods can be extended and overridden.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the purpose and effect of the `final` keyword when applied to classes.
*   Understand the purpose and effect of the `final` keyword when applied to methods.
*   Explain how `final` classes and `final` methods impact inheritance and method overriding.
*   Apply the `final` keyword appropriately to achieve desired design constraints in your programs.
*   Identify scenarios where using `final` with inheritance is beneficial.

---

### Key Concepts and Definitions

#### 1. The `final` Keyword

The `final` keyword in Object-Oriented Programming (OOP) is a **modifier** that signifies that a variable, method, or class cannot be changed or overridden. Its behavior depends on what it's applied to.

#### 2. `final` Classes

*   **Definition:** A `final` class is a class that **cannot be inherited from**.
*   **Purpose:** To prevent other classes from extending it. This is useful when you want to ensure the integrity of a class's design and prevent any modifications or extensions by subclasses.
*   **Impact on Inheritance:** If a class is declared `final`, no other class can extend it. Attempting to do so will result in a **compile-time error**.
*   **Immutability Guarantee:** A `final` class implicitly provides a degree of immutability for its instances, as its behavior cannot be altered through subclassing.

#### 3. `final` Methods

*   **Definition:** A `final` method is a method that **cannot be overridden by subclasses**.
*   **Purpose:** To prevent subclasses from changing the implementation of a specific method inherited from a parent class. This ensures that a particular behavior remains consistent across all its descendants.
*   **Impact on Inheritance:** If a method in a parent class is declared `final`, any subclass attempting to override that method will encounter a **compile-time error**.
*   **Polymorphic Behavior:** While `final` methods cannot be overridden, they can still be invoked polymorphically. This means that if a `final` method is called on a reference of a superclass type that points to a subclass object, the *superclass's* implementation of that `final` method will be executed.

---

### Using `final` with Inheritance: Detailed Explanation and Examples

#### 1. `final` Classes and Inheritance

When you declare a class as `final`, you are essentially saying, "This is the complete implementation, and no one should extend it."

**Example (Java):**

```java
// A final class that cannot be inherited
final class ImmutableData {
    private final String data;

    public ImmutableData(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }

    // Methods in a final class can be public, private, protected, or default
    // and are not affected by the 'final' keyword on the class itself.
}

// Attempting to inherit from a final class will cause a compile-time error
/*
class ExtendedImmutableData extends ImmutableData { // COMPILE-TIME ERROR
    // ...
}
*/

public class FinalClassExample {
    public static void main(String[] args) {
        ImmutableData obj = new ImmutableData("Important Information");
        System.out.println(obj.getData());
    }
}
```

**Explanation:**

*   The `ImmutableData` class is declared `final`.
*   The `ExtendedImmutableData` class attempts to extend `ImmutableData`.
*   This will result in a compile-time error because `ImmutableData` is `final`.

**Use Cases for `final` Classes:**

*   **String class:** In Java, the `String` class is `final`. This is a crucial design decision that ensures the immutability of strings, preventing unexpected modifications and allowing for efficient string pooling.
*   **Utility classes:** Classes containing only static methods (utility classes) can sometimes be made `final` to prevent instantiation and subclassing, as their functionality is meant to be accessed directly.
*   **Security-sensitive classes:** To prevent malicious subclasses from altering critical behavior.

#### 2. `final` Methods and Inheritance

When you declare a method as `final` in a superclass, you are asserting that the implementation of this method is complete and should not be modified by any subclass.

**Example (Java):**

```java
class Base {
    public void display() {
        System.out.println("Display method in Base class.");
    }

    // This method cannot be overridden by subclasses
    public final void process() {
        System.out.println("Processing in Base class (final method).");
    }
}

class Derived extends Base {
    @Override
    public void display() {
        System.out.println("Display method in Derived class.");
    }

    // Attempting to override a final method will cause a compile-time error
    /*
    @Override
    public void process() { // COMPILE-TIME ERROR
        System.out.println("Attempting to process in Derived class.");
    }
    */
}

public class FinalMethodExample {
    public static void main(String[] args) {
        Base baseObj = new Derived(); // Polymorphism in action
        baseObj.display(); // Calls Derived's display()
        baseObj.process(); // Calls Base's process() because it's final

        System.out.println("---");

        Derived derivedObj = new Derived();
        derivedObj.display(); // Calls Derived's display()
        derivedObj.process(); // Calls Base's process() because it's final
    }
}
```

**Explanation:**

*   The `Base` class has a `display()` method (non-final) and a `process()` method (final).
*   The `Derived` class overrides `display()`.
*   The `Derived` class attempts to override `process()`. This will cause a compile-time error because `process()` is declared `final` in `Base`.
*   When `baseObj` (a `Base` reference pointing to a `Derived` object) calls `process()`, the `Base` class's `process()` method is executed. This demonstrates that even though polymorphism is involved, the `final` keyword prevents overriding.

**Use Cases for `final` Methods:**

*   **Critical business logic:** Methods containing essential business rules that must be applied uniformly across all instances, regardless of subclassing.
*   **Security:** To prevent subclasses from introducing vulnerabilities by altering sensitive operations.
*   **Performance optimization:** In some languages, the compiler might be able to perform optimizations on `final` methods because it knows their implementation won't change.
*   **Ensuring a consistent API:** If a particular method's behavior is a key part of your class's contract, marking it `final` guarantees that contract is upheld.

---

### Important Points to Remember

*   **`final` Class:** **Cannot be inherited.**
*   **`final` Method:** **Cannot be overridden** by subclasses.
*   The `final` keyword acts as a **restriction** on inheritance and method overriding.
*   Applying `final` to a class prevents **any form of extension**.
*   Applying `final` to a method prevents **specific implementation changes** in subclasses.
*   `final` methods can still be called polymorphically, but the **original implementation** from the superclass will always be executed.
*   Choose `final` judiciously: Overuse can lead to less flexible and harder-to-maintain code. Use it when you have a clear reason to enforce immutability or prevent specific overrides.
*   `final` methods in a `final` class are redundant in terms of preventing overriding, but they do enforce that the method implementation cannot be changed even if the class itself were somehow mutable (which a `final` class inherently is not, in terms of its structure).

---

### Practice Questions/Exercises

1.  **Question:** What is the primary purpose of declaring a class as `final`?
    *   A) To make its methods non-overridable.
    *   B) To prevent it from being inherited by other classes.
    *   C) To make its variables immutable.
    *   D) To ensure its objects are immutable.

2.  **Question:** If a method in a superclass is declared `final`, what will happen if a subclass attempts to override it?
    *   A) The subclass method will execute along with the superclass method.
    *   B) A compile-time error will occur.
    *   C) A runtime error will occur.
    *   D) The superclass method will be ignored.

3.  **Question:** Consider the following Java code. What is the output of `obj.greet()`?

    ```java
    class Greeting {
        public void greet() {
            System.out.println("Hello from Greeting!");
        }

        public final void farewell() {
            System.out.println("Goodbye from Greeting!");
        }
    }

    class PoliteGreeting extends Greeting {
        @Override
        public void greet() {
            System.out.println("Hello politely from PoliteGreeting!");
        }

        // public void farewell() { // This line would cause a compile-time error
        //     System.out.println("Farewell politely!");
        // }
    }

    public class Main {
        public static void main(String[] args) {
            Greeting obj = new PoliteGreeting();
            obj.greet();
            obj.farewell();
        }
    }
    ```
    *   A) `Hello from Greeting!`
        `Goodbye from Greeting!`
    *   B) `Hello politely from PoliteGreeting!`
        `Goodbye from Greeting!`
    *   C) `Hello from Greeting!`
        `Farewell politely!`
    *   D) `Hello politely from PoliteGreeting!`
        `Farewell politely!`

4.  **Question:** Is it possible for a class to be `final` and also have `final` methods? If so, what is the effect of the `final` modifier on the methods in this scenario?

5.  **Question:** You are designing a payment processing system. You have a `PaymentProcessor` class with a `calculateFees()` method. You want to ensure that no subclass can alter the fee calculation logic, as it's a critical part of your financial system. How would you use the `final` keyword to achieve this?

---

### Answers to Practice Questions

1.  **Answer:** **B) To prevent it from being inherited by other classes.**
    *   *Explanation:* The `final` keyword applied to a class specifically prevents any other class from extending it. While it contributes to immutability and prevents method overriding, its direct purpose is to disallow inheritance.

2.  **Answer:** **B) A compile-time error will occur.**
    *   *Explanation:* The `final` keyword on a method explicitly prohibits subclasses from providing their own implementation (overriding). The compiler enforces this rule.

3.  **Answer:** **B) Hello politely from PoliteGreeting!
    Goodbye from Greeting!**
    *   *Explanation:*
        *   `obj` is a `Greeting` reference pointing to a `PoliteGreeting` object.
        *   `obj.greet()` invokes the overridden `greet()` method in the `PoliteGreeting` class.
        *   `obj.farewell()` invokes the `farewell()` method from the `Greeting` class because it is `final` and cannot be overridden in `PoliteGreeting`.

4.  **Answer:** Yes, it is possible for a class to be `final` and also have `final` methods. In this scenario, the `final` keyword on the class already prevents inheritance, meaning no subclasses can be created to override any methods. The `final` modifier on the methods within a `final` class is **redundant** in terms of preventing overriding, as there are no subclasses to perform the overriding. However, it still signifies that the implementation of that specific method within that class is considered final and should not be changed even if the class were mutable.

5.  **Answer:** You would declare the `calculateFees()` method in the `PaymentProcessor` class as `final`:

    ```java
    class PaymentProcessor {
        // ... other methods and variables

        public final double calculateFees(double amount) {
            // Critical fee calculation logic here
            // This logic cannot be altered by any subclass
            return amount * 0.05; // Example: 5% fee
        }

        // ...
    }

    // A subclass attempting to override calculateFees would fail
    /*
    class SpecialPaymentProcessor extends PaymentProcessor {
        @Override
        public double calculateFees(double amount) { // COMPILE-TIME ERROR
            return amount * 0.04; // Attempting to change fee to 4%
        }
    }
    */
    ```
    By marking `calculateFees()` as `final`, you ensure that its implementation remains exactly as defined in `PaymentProcessor`, preventing any subclasses from modifying the fee calculation logic.

---
