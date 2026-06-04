---
title: "Structural Design Pattern and its types – Adapter"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c8a0"
status: "completed"
scrapedAt: "2026-05-20T17:11:16.748Z"
---
# SOFTWARE ENGINEERING - MODULE 2: SOFTWARE DESIGN - STRUCTURAL DESIGN PATTERN: ADAPTER

## Introduction

This module delves into structural design patterns, focusing specifically on the Adapter pattern.  Structural design patterns are concerned with how classes and objects are composed to form larger structures. The Adapter pattern is a particularly useful pattern for integrating disparate systems and promoting code reusability.

## Learning Outcomes

Upon completion of this section, you will be able to:

1.  Understand the purpose and intent of the Adapter design pattern.
2.  Identify situations where the Adapter pattern is applicable.
3.  Implement the Adapter pattern using different approaches (Object Adapter and Class Adapter).
4.  Explain the advantages and disadvantages of using the Adapter pattern.
5.  Distinguish between Adapter and other related design patterns like Bridge and Decorator.

## Key Concepts and Definitions

*   **Design Pattern:** A reusable solution to a commonly occurring problem in software design.  It is a description or template for how to solve a problem that can be used in many different situations.
*   **Structural Design Pattern:** Deals with relationships between classes and objects. They focus on how to assemble objects and classes into larger structures while keeping the structures flexible and efficient.
*   **Adapter Pattern:** Converts the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces. It acts as a wrapper to make the existing class reusable and compatible.

## 1. Purpose and Intent of the Adapter Design Pattern

*   **Problem:** Imagine you have an existing class (the "Adaptee") with an interface that doesn't match what your client code expects (the "Target").  You can't directly use the Adaptee without modifying either the Adaptee (which you might not be able to do) or the client code (which might be undesirable).
*   **Solution:** The Adapter pattern solves this problem by creating an intermediary class (the "Adapter") that implements the Target interface. The Adapter holds an instance of the Adaptee and translates requests from the Target interface into requests that the Adaptee can handle.
*   **Intent (as defined by the Gang of Four):** Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

## 2. Applicability of the Adapter Pattern

The Adapter pattern should be used when:

*   You want to use an existing class, and its interface does not match the one you need.
*   You want to create a reusable class that cooperates with unrelated or unforeseen classes, that is, classes that don't necessarily have compatible interfaces.
*   You need to use several existing subclasses, but it's impractical to adapt their interface by subclassing every one.  An object adapter can adapt the interface of its parent class.
*   (Object Adapter only) You want to let subclasses override the adaptee's behavior.

## 3. Implementation of the Adapter Pattern

There are two main types of Adapter implementations:

### 3.1 Object Adapter

*   **Structure:** The Adapter holds an instance of the Adaptee as a member variable. It then implements the Target interface by delegating calls to the Adaptee's methods.
*   **Advantages:**
    *   Allows the Adapter to work with multiple Adaptees simultaneously.
    *   Supports overriding of Adaptee behavior by subclasses.
*   **Disadvantages:**
    *   Requires object composition which can introduce a slight performance overhead.
    *   Adaptee needs to be accessible to the Adapter (via interfaces or inheritance)

**Example (Java):**

```java
// Target Interface
interface Target {
    void request();
}

// Adaptee Class (Existing class with an incompatible interface)
class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee's specific request");
    }
}

// Adapter Class (Object Adapter)
class ObjectAdapter implements Target {
    private Adaptee adaptee;

    public ObjectAdapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void request() {
        System.out.println("Adapter converts request to specificRequest");
        adaptee.specificRequest();
    }
}

// Client Code
public class Client {
    public static void main(String[] args) {
        Adaptee adaptee = new Adaptee();
        Target target = new ObjectAdapter(adaptee);
        target.request();
    }
}
```

**Explanation:**

*   `Target` defines the interface the client expects.
*   `Adaptee` is the existing class with an incompatible interface (`specificRequest`).
*   `ObjectAdapter` implements the `Target` interface.  It holds a reference to an `Adaptee` object and translates the `request()` call into a call to `adaptee.specificRequest()`.

### 3.2 Class Adapter

*   **Structure:** The Adapter inherits from both the Target interface and the Adaptee class. This allows the Adapter to directly use the Adaptee's methods as if they were part of its own interface.
*   **Advantages:**
    *   Simpler implementation compared to Object Adapter.
*   **Disadvantages:**
    *   Less flexible as it only works with one specific Adaptee class.
    *   Impossible in languages like Java where multiple inheritance of classes is not allowed.
    *   Less reusable - tightly coupled to the adaptee.

**Example (Java - using interface inheritance):**

While true class adapter using multiple class inheritance is not possible directly in Java, we can simulate it using interface inheritance:

```java
// Target Interface
interface Target {
    void request();
}

// Adaptee Class (Existing class with an incompatible interface)
class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee's specific request");
    }
}

// Adapter Class (Class Adapter - using Interface Inheritance)
class ClassAdapter extends Adaptee implements Target {

    @Override
    public void request() {
        System.out.println("Adapter converts request to specificRequest");
        specificRequest(); // Directly use Adaptee's method
    }
}

// Client Code
public class Client {
    public static void main(String[] args) {
        Target target = new ClassAdapter();
        target.request();
    }
}
```

**Explanation:**

*   `Target` defines the interface the client expects.
*   `Adaptee` is the existing class with an incompatible interface (`specificRequest`).
*   `ClassAdapter` extends `Adaptee` and implements `Target`. The `request()` method directly calls the `specificRequest()` method inherited from `Adaptee`.

**Important Note:**  The Class Adapter pattern is less frequently used in modern object-oriented programming, especially in languages like Java and C# due to limitations around multiple class inheritance. Object Adapter is generally the preferred approach.

## 4. Advantages and Disadvantages of Using the Adapter Pattern

**Advantages:**

*   **Reusability:** Allows you to reuse existing classes with incompatible interfaces.
*   **Flexibility:** Enables different classes to work together without modifying their original code.
*   **Maintainability:** Decouples the client from the specific implementation of the Adaptee, making it easier to change or replace the Adaptee without affecting the client code.
*   **Open/Closed Principle:** Allows you to add new adapters to work with new Adaptees without modifying existing client code or the Adaptee.

**Disadvantages:**

*   **Complexity:** Can introduce additional classes and complexity to the design, especially with Object Adapters.
*   **Performance Overhead:** Object Adapters can incur a slight performance overhead due to the delegation of calls.
*   **Visibility Issues:**  Adaptee might not be fully accessible to the Adapter (especially with Class Adapters).

## 5. Distinguishing Adapter from Other Related Design Patterns

*   **Adapter vs. Bridge:** Both deal with separating an abstraction from its implementation. However, Adapter is used *after* the fact to make two existing classes work together, while Bridge is designed *upfront* to allow the abstraction and implementation to vary independently. Adapter adapts the *interface* of an existing class, while Bridge *decouples* an abstraction from its implementation.

*   **Adapter vs. Decorator:** Both provide a wrapper around an object.  However, Adapter changes the *interface* of the wrapped object to match the client's expectations, whereas Decorator *adds responsibilities* to the object without changing its interface.  Decorator adds functionality, while Adapter changes the interface.

## 6. Important Points to Remember

*   The Adapter pattern is a structural design pattern used to make incompatible interfaces work together.
*   There are two main types of Adapters: Object Adapter and Class Adapter.
*   Object Adapter is generally preferred due to its greater flexibility and reusability.
*   The Adapter pattern promotes code reusability, flexibility, and maintainability.
*   Carefully consider the trade-offs between complexity and benefits before applying the Adapter pattern.

## Practice Questions/Exercises

**1. Scenario:** You have a legacy billing system that uses a custom XML format. You need to integrate this system with a new e-commerce platform that expects billing data in JSON format.  How would you use the Adapter pattern to solve this problem?

**Answer:**

You would create an Adapter class that:

*   Implements the interface expected by the e-commerce platform (e.g., an interface with a `getBillingData()` method that returns a JSON object).
*   Holds an instance of the legacy billing system's XML parsing class (the Adaptee).
*   In the `getBillingData()` method, it would:
    *   Use the Adaptee to parse the XML data from the legacy system.
    *   Transform the XML data into a JSON object.
    *   Return the JSON object.

This approach allows the e-commerce platform to receive billing data in the expected JSON format without requiring any changes to the legacy billing system.  An Object Adapter would be the suitable approach here.

**2. What are the key differences between Object Adapter and Class Adapter? In which situations would you prefer one over the other?**

**Answer:**

| Feature           | Object Adapter                                       | Class Adapter                                                |
|--------------------|-------------------------------------------------------|--------------------------------------------------------------|
| Implementation   | Uses object composition (holds an instance of Adaptee) | Uses inheritance (inherits from both Target and Adaptee)      |
| Flexibility       | More flexible, can work with multiple Adaptees        | Less flexible, tightly coupled to a single Adaptee           |
| Reusability       | More reusable                                        | Less reusable                                                |
| Multiple Inheritance| Not required                                         | Requires multiple class inheritance (problematic in some languages)|
| Complexity        | Slightly more complex                                  | Simpler                                                      |

**When to Prefer Object Adapter:**

*   When you need to work with multiple Adaptees.
*   When you want to avoid multiple inheritance.
*   When you want greater flexibility and reusability.

**When to Prefer Class Adapter:** (Use with Caution due to limitations)

*   When you need a very simple adapter and multiple inheritance is not an issue in your chosen language.  Rare in modern OOP.

**3.  Explain how the Adapter pattern adheres to the Open/Closed Principle.**

**Answer:**

The Open/Closed Principle states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. The Adapter pattern allows you to *extend* the functionality of your system by adding new adapters for different Adaptees without having to *modify* the existing client code or the Adaptees themselves.

For example, imagine you have a client class that uses a `Target` interface. You can add new Adapters to work with different Adaptees without changing the client class or the existing Adapters. The client class remains closed to modification, while the system remains open for extension.

**4.  Provide an example where using the Adapter Pattern could lead to increased complexity.**

**Answer:**

While the Adapter pattern aims for cleaner code, it can sometimes introduce unnecessary complexity, especially if overused or applied incorrectly.

*   **Scenario:** You have a small, simple library with only a few classes. If you create Adapter classes for every class to conform to a particular interface standard, you might end up with more Adapter classes than original classes. The increased number of classes can make the codebase harder to understand and navigate, even if each individual class is relatively simple. This is an example where the added complexity of the Adapter pattern outweighs its benefits.  It's important to consider the overall design and maintainability when deciding whether to use the Adapter pattern.

These notes and practice questions provide a comprehensive understanding of the Adapter design pattern. Remember to focus on understanding the core concepts, the different implementation approaches, and the trade-offs involved in using the pattern. Good luck!
