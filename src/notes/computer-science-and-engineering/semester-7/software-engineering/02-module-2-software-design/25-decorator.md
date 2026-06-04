---
title: "Decorator"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c8a4"
status: "completed"
scrapedAt: "2026-05-20T17:11:19.914Z"
---
# Software Engineering: Module 2 - Software Design

## Topic: Decorator Design Pattern

### 1. Learning Outcomes Covered:

*   **Understanding the Purpose and Applicability of the Decorator Pattern:** Comprehend why and when the Decorator pattern is a suitable choice for solving design problems.
*   **Identifying Core Components of the Decorator Pattern:** Recognize the essential classes and interfaces that constitute the Decorator pattern.
*   **Implementing the Decorator Pattern:** Gain practical knowledge of how to apply the Decorator pattern in code.
*   **Analyzing the Benefits and Drawbacks of the Decorator Pattern:** Evaluate the advantages and disadvantages of using the Decorator pattern in software development.
*   **Distinguishing the Decorator Pattern from Similar Patterns:** Understand how the Decorator pattern differs from other design patterns, such as Adapter and Composite.

### 2. Key Concepts and Definitions:

The **Decorator pattern** is a **structural design pattern** that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects in the class. It's an alternative to sub-classing for extending functionality, promoting flexibility and avoiding the explosion of subclasses that often arises when trying to add multiple functionalities.

*   **Core Idea:** Wrap an object with another object that adds new responsibilities. The wrapper object, known as a "decorator," typically has the same interface as the object it decorates, allowing it to be used interchangeably.

*   **Purpose:**
    *   To add responsibilities to objects dynamically and transparently.
    *   To provide a flexible alternative to subclassing for extending functionality.
    *   To avoid a combinatorial explosion of classes when extending functionality in multiple ways.

*   **When to Use:**
    *   When you want to add responsibilities to individual objects dynamically and transparently, without affecting other objects.
    *   When you want to extend functionality by subclassing to be impractical or to avoid a large number of subclasses.
    *   When a class defines an immense number of independent features that should be enabled or disabled.

### 3. Core Components of the Decorator Pattern:

The Decorator pattern typically involves the following key components:

*   **Component:**
    *   An interface or abstract class that defines the operations that can be decorated.
    *   It declares the common interface for both the concrete objects and the decorators.
    *   **Example:** An `ICoffee` interface with a `getCost()` and `getDescription()` method.

*   **ConcreteComponent:**
    *   The core object to which additional responsibilities are added.
    *   It implements the Component interface.
    *   It is the simplest version of the component.
    *   **Example:** `SimpleCoffee` class implementing `ICoffee`, returning a base cost and description.

*   **Decorator:**
    *   An abstract class that also implements the Component interface.
    *   It **has a reference to a Component object**. This is the key to the pattern's ability to wrap other components.
    *   It forwards requests to its Component object.
    *   This class can be abstract if we don't want to define behavior for all decorators.
    *   **Example:** An abstract `CoffeeDecorator` class that takes an `ICoffee` in its constructor and delegates `getCost()` and `getDescription()` calls to the wrapped `ICoffee`.

*   **ConcreteDecorator:**
    *   Adds specific responsibilities to the component.
    *   It implements the Decorator class (or directly implements Component and delegates).
    *   It extends the functionality of the wrapped component.
    *   **Example:** `MilkDecorator`, `SugarDecorator`, `WhipDecorator`. Each of these classes would inherit from `CoffeeDecorator` and add their specific cost and description to the base coffee's details.

### 4. Implementation Example (Conceptual - Java-like pseudocode):

Let's illustrate with a coffee shop example:

```java
// 1. Component Interface
interface ICoffee {
    double getCost();
    String getDescription();
}

// 2. ConcreteComponent
class SimpleCoffee implements ICoffee {
    @Override
    public double getCost() {
        return 2.0; // Base cost of a simple coffee
    }

    @Override
    public String getDescription() {
        return "Simple Coffee";
    }
}

// 3. Decorator (Abstract)
abstract class CoffeeDecorator implements ICoffee {
    protected ICoffee wrappedCoffee; // Reference to the Component

    public CoffeeDecorator(ICoffee coffee) {
        this.wrappedCoffee = coffee;
    }

    // Default delegation
    @Override
    public double getCost() {
        return wrappedCoffee.getCost();
    }

    @Override
    public String getDescription() {
        return wrappedCoffee.getDescription();
    }
}

// 4. ConcreteDecorators
class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(ICoffee coffee) {
        super(coffee);
    }

    @Override
    public double getCost() {
        return super.getCost() + 0.5; // Add cost of milk
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", Milk"; // Add milk to description
    }
}

class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(ICoffee coffee) {
        super(coffee);
    }

    @Override
    public double getCost() {
        return super.getCost() + 0.2; // Add cost of sugar
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", Sugar"; // Add sugar to description
    }
}

// Client Code Usage:
public class CoffeeShop {
    public static void main(String[] args) {
        // A simple coffee
        ICoffee myCoffee = new SimpleCoffee();
        System.out.println(myCoffee.getDescription() + ": $" + myCoffee.getCost()); // Output: Simple Coffee: $2.0

        // Decorate with milk
        myCoffee = new MilkDecorator(myCoffee);
        System.out.println(myCoffee.getDescription() + ": $" + myCoffee.getCost()); // Output: Simple Coffee, Milk: $2.5

        // Decorate with sugar as well
        myCoffee = new SugarDecorator(myCoffee);
        System.out.println(myCoffee.getDescription() + ": $" + myCoffee.getCost()); // Output: Simple Coffee, Milk, Sugar: $2.7
    }
}
```

### 5. Practice Questions/Exercises:

1.  **Scenario:** You are building a GUI framework where you want to add different border styles (e.g., `DashedBorder`, `SolidBorder`) and scrollbars (e.g., `HorizontalScrollBar`, `VerticalScrollBar`) to various UI components like `Window` or `TextField`.
    *   **Question:** How would you apply the Decorator pattern to achieve this? Identify the key components (Component, ConcreteComponent, Decorator, ConcreteDecorator) in this scenario.

2.  **Scenario:** You have a `Character` class representing a game character with base attributes (like `attack` and `defense`). You want to add magical enchantments (like `FireEnchantment`, `IceEnchantment`) that modify these attributes.
    *   **Question:** Design a solution using the Decorator pattern. What would the `Component`, `ConcreteComponent`, `Decorator`, and `ConcreteDecorator` classes be? How would you stack multiple enchantments?

3.  **Scenario:** Consider a logging system where you might want to log messages to the console, a file, or both, and also potentially encrypt or compress the log messages.
    *   **Question:** Explain how the Decorator pattern can be used to add these multiple logging and processing functionalities to a base logger.

4.  **True or False:** The Decorator pattern creates a new class for every combination of features.

5.  **Which of the following is a primary benefit of the Decorator pattern?**
    *   a) Reduces the number of classes significantly by using inheritance.
    *   b) Allows for the addition of responsibilities to individual objects dynamically.
    *   c) Enforces a single responsibility principle on all components.
    *   d) Simplifies the client code by hiding all implementation details.

### Answers to Practice Questions:

1.  **Answer:**
    *   **Component:** An interface like `UIComponent` with methods like `draw()` and `getBounds()`.
    *   **ConcreteComponent:** Classes like `Window` and `TextField` implementing `UIComponent`.
    *   **Decorator (Abstract):** An abstract class `UIComponentDecorator` that implements `UIComponent` and holds a reference to another `UIComponent`. It would delegate calls to the wrapped component.
    *   **ConcreteDecorators:**
        *   Border Decorators: `DashedBorder` (extends `UIComponentDecorator`), `SolidBorder` (extends `UIComponentDecorator`). These would add their drawing logic before or after calling the wrapped component's `draw()`.
        *   Scrollbar Decorators: `HorizontalScrollBar` (extends `UIComponentDecorator`), `VerticalScrollBar` (extends `UIComponentDecorator`). These would add scrollbar functionality.
    The client could then instantiate a `Window`, and wrap it with a `DashedBorder`, and then wrap that with a `HorizontalScrollBar`.

2.  **Answer:**
    *   **Component:** An interface `GameCharacter` with methods like `getAttack()` and `getDefense()`.
    *   **ConcreteComponent:** A `Warrior` class implementing `GameCharacter` with base attack and defense values.
    *   **Decorator (Abstract):** An abstract class `CharacterDecorator` implementing `GameCharacter` and holding a `GameCharacter` reference.
    *   **ConcreteDecorators:**
        *   `FireEnchantment` (extends `CharacterDecorator`): Overrides `getAttack()` to add fire damage bonus.
        *   `IceEnchantment` (extends `CharacterDecorator`): Overrides `getDefense()` to add ice resistance bonus.
    Stacking: `GameCharacter myCharacter = new Warrior();`
    `myCharacter = new FireEnchantment(myCharacter);`
    `myCharacter = new IceEnchantment(myCharacter);`
    Calling `myCharacter.getAttack()` would first go to `IceEnchantment` (which delegates to `FireEnchantment`), which then delegates to `Warrior`, and finally, `FireEnchantment` adds its bonus.

3.  **Answer:**
    *   **Component:** An interface `ILogger` with a `log(String message)` method.
    *   **ConcreteComponent:** A `ConsoleLogger` class implementing `ILogger`.
    *   **Decorator (Abstract):** An abstract class `LoggerDecorator` implementing `ILogger` and holding an `ILogger` reference.
    *   **ConcreteDecorators:**
        *   `FileLogger` (extends `LoggerDecorator`): Adds logic to write messages to a file.
        *   `EncryptionLogger` (extends `LoggerDecorator`): Adds logic to encrypt messages before logging.
        *   `CompressionLogger` (extends `LoggerDecorator`): Adds logic to compress messages before logging.
    A client could create `ILogger myLogger = new ConsoleLogger();`
    `myLogger = new FileLogger(myLogger);`
    `myLogger = new EncryptionLogger(myLogger);`
    Now, `myLogger.log("Important data")` would encrypt the message, then write it to a file, and finally, the `ConsoleLogger` would receive the encrypted message and log it to the console.

4.  **Answer:** False. The Decorator pattern avoids creating a new class for *every* combination. Instead, it allows combinations to be built dynamically at runtime by wrapping objects with multiple decorators.

5.  **Answer:** b) Allows for the addition of responsibilities to individual objects dynamically.

### 6. Important Points to Remember:

*   **Composition over Inheritance:** The Decorator pattern heavily relies on composition (has-a relationship) rather than inheritance (is-a relationship) to add functionality. This is its primary advantage over subclassing.
*   **Transparency:** Decorators should be transparent. The client should not need to know that it's interacting with a decorator rather than the original component. They share the same interface.
*   **Order Matters:** The order in which decorators are applied can affect the final outcome, especially if the added behavior depends on the order (e.g., encrypting before or after compressing).
*   **Base Case:** Always ensure you have a `ConcreteComponent` that provides the fundamental functionality without any decorations.
*   **Avoid the "Wrapper Hell":** While flexible, overusing decorators or nesting them too deeply can lead to complex code that is difficult to understand and debug.
*   **Comparison with Adapter:** An Adapter pattern changes the interface of an object, while a Decorator pattern adds responsibilities to an object *without* changing its interface.
*   **Comparison with Composite:** Composite pattern deals with tree structures of objects, where objects in the structure can be either leaf nodes or composite nodes. Decorator can be used to add functionality to individual objects within a Composite structure, but its primary focus is on adding responsibilities, not on structuring objects into hierarchies.

This comprehensive set of notes should provide a strong foundation for understanding the Decorator design pattern in Software Engineering.
