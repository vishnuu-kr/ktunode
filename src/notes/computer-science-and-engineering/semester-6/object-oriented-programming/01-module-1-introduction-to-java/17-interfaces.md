---
title: "Interfaces"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf93"
status: "completed"
scrapedAt: "2026-05-20T16:55:57.927Z"
---
# Object-Oriented Programming: Module 1 - Introduction to Java

## Topic: Interfaces

### Learning Outcomes:

*   **Understand the concept of an interface in Java.**
*   **Differentiate between abstract classes and interfaces.**
*   **Declare and implement interfaces.**
*   **Understand the benefits of using interfaces.**
*   **Explore advanced concepts related to interfaces such as default methods, static methods, and functional interfaces.**
*   **Understand the concept of marker interfaces.**

---

### 1. Understanding the Concept of an Interface

**Definition:**
An **interface** in Java is a blueprint of a class. It specifies **what** a class can do, but not **how** it does it. It's a completely abstract type that contains abstract methods and constants.

*   **Contract:** An interface defines a contract that a class must adhere to. If a class implements an interface, it must provide concrete implementations for all abstract methods declared in that interface.
*   **Abstraction:** Interfaces provide a high level of abstraction, allowing us to define common behaviors without exposing the implementation details.
*   **No State:** Interfaces cannot have instance variables (non-static fields). They can only have `public static final` constants.
*   **No Constructors:** Interfaces cannot have constructors because they cannot be instantiated directly.
*   **No Concrete Methods (before Java 8):** Prior to Java 8, interfaces could only contain abstract methods (methods without a body).

---

### 2. Differentiating Between Abstract Classes and Interfaces

Both abstract classes and interfaces are used for achieving abstraction in Java. However, they have key differences:

| Feature               | Abstract Class                                     | Interface                                       |
| :-------------------- | :------------------------------------------------- | :---------------------------------------------- |
| **Methods**           | Can have abstract methods, concrete methods, and static methods. | Can have abstract methods, `default` methods, `static` methods, and `private` methods (since Java 9). |
| **Variables**         | Can have instance variables (state), static variables, final variables. | Can only have `public static final` constants. |
| **Constructors**      | Can have constructors.                             | Cannot have constructors.                       |
| **Inheritance**       | A class can **extend** only one abstract class (single inheritance). | A class can **implement** multiple interfaces (multiple inheritance of type). |
| **Access Modifiers**  | Methods and variables can have various access modifiers (public, protected, default, private). | All methods are implicitly `public` (before Java 8, all methods were implicitly `abstract public`). Constants are implicitly `public static final`. |
| **Purpose**           | To provide a common base class with some pre-defined implementation, and some methods that subclasses must implement. | To define a contract of behavior that a class must adhere to, enabling polymorphism and achieving multiple inheritance of type. |
| **Keyword**           | `abstract class`                                   | `interface`                                     |

**Analogy:**

*   **Abstract Class:** Think of a "Vehicle" abstract class. It might have a `startEngine()` method (abstract) and a `stopEngine()` method (concrete, maybe with a default behavior). Specific vehicles like "Car" or "Motorcycle" would extend this class and provide their own implementation for `startEngine()`.
*   **Interface:** Think of a "Flyable" interface. It might declare a `fly()` method. Any class that implements "Flyable" (like "Airplane", "Bird") promises to provide a way to fly, regardless of their underlying structure.

---

### 3. Declaring and Implementing Interfaces

**Declaring an Interface:**

You use the `interface` keyword followed by the interface name. Methods within an interface are implicitly `public` and `abstract` (before Java 8). Constants are implicitly `public static final`.

```java
// Declaration of an interface
public interface Printable {
    // Abstract method (implicitly public abstract)
    void print();

    // Constant (implicitly public static final)
    String DEFAULT_MESSAGE = "This is a default message.";
}
```

**Implementing an Interface:**

A class implements an interface using the `implements` keyword. The class must provide a concrete implementation for all abstract methods declared in the interface.

```java
// Class implementing the Printable interface
public class Document implements Printable {

    private String content;

    public Document(String content) {
        this.content = content;
    }

    // Implementing the abstract method from Printable
    @Override
    public void print() {
        System.out.println("Printing document: " + content);
        System.out.println("Message: " + DEFAULT_MESSAGE); // Accessing the constant
    }

    public static void main(String[] args) {
        Document doc = new Document("Important Report");
        doc.print();
    }
}
```

**Output:**

```
Printing document: Important Report
Message: This is a default message.
```

---

### 4. Benefits of Using Interfaces

*   **Achieve Abstraction:** Hide implementation details and focus on what an object can do.
*   **Multiple Inheritance of Type:** A class can implement multiple interfaces, allowing it to inherit different behaviors from different contracts. This is a key mechanism to overcome the limitations of single inheritance of classes.
*   **Polymorphism:** Interfaces enable polymorphism. You can refer to an object of a class that implements an interface through a variable of the interface type. This allows you to write code that can work with any object that adheres to the interface's contract.
*   **Loose Coupling:** Interfaces promote loose coupling between classes. A class depends on the interface (the contract), not on the concrete implementation. This makes the code more flexible and easier to maintain. If you change the implementation of a class, other classes that use the interface through polymorphism won't be affected, as long as the interface contract remains the same.
*   **Testability:** Interfaces make code easier to test. You can create mock implementations of interfaces for testing purposes, isolating the code you want to test.

**Example of Polymorphism and Loose Coupling:**

```java
// Interface
interface Animal {
    void makeSound();
}

// Concrete implementations
class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

// A class that uses the Animal interface
class PettingZoo {
    public void interactWithAnimal(Animal animal) {
        animal.makeSound();
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        PettingZoo zoo = new PettingZoo();
        zoo.interactWithAnimal(myDog); // Output: Woof!
        zoo.interactWithAnimal(myCat); // Output: Meow!
    }
}
```

In this example, `PettingZoo` only knows about the `Animal` interface. It doesn't care if it's a `Dog` or a `Cat`. This demonstrates polymorphism and loose coupling.

---

### 5. Advanced Concepts Related to Interfaces

#### 5.1. Default Methods (Since Java 8)

**Concept:**
Default methods allow you to add new methods to interfaces without breaking existing code that implements them. These methods have a default implementation provided within the interface itself.

**Syntax:**
Use the `default` keyword before the method signature.

```java
public interface Drivable {
    void drive(); // Abstract method

    // Default method
    default void displaySpeed() {
        System.out.println("Current speed is not available.");
    }
}

class Car implements Drivable {
    @Override
    public void drive() {
        System.out.println("Driving the car.");
    }
    // No need to implement displaySpeed() here unless overriding
}

public class DefaultMethodDemo {
    public static void main(String[] args) {
        Drivable myCar = new Car();
        myCar.drive();         // Calls the overridden method
        myCar.displaySpeed();  // Calls the default method from the interface
    }
}
```

**Output:**

```
Driving the car.
Current speed is not available.
```

**Key Points for Default Methods:**

*   Classes implementing the interface can use the default method directly.
*   A class can override a default method if it needs to provide its own specific implementation.
*   If a class implements multiple interfaces, and they have default methods with the same signature, the class **must** override that method to resolve the ambiguity.

#### 5.2. Static Methods (Since Java 8)

**Concept:**
Static methods in interfaces are utility methods that belong to the interface itself, not to any specific implementation. They are called using the interface name.

**Syntax:**
Use the `static` keyword before the method signature.

```java
public interface MathOperations {
    // Abstract method
    int add(int a, int b);

    // Static method
    static int multiply(int a, int b) {
        return a * b;
    }
}

class Calculator implements MathOperations {
    @Override
    public int add(int a, int b) {
        return a + b;
    }
}

public class StaticMethodDemo {
    public static void main(String[] args) {
        MathOperations calc = new Calculator();
        System.out.println("Sum: " + calc.add(5, 3)); // Output: Sum: 8

        // Calling the static method directly from the interface
        int product = MathOperations.multiply(5, 3);
        System.out.println("Product: " + product);     // Output: Product: 15
    }
}
```

**Key Points for Static Methods:**

*   They are not inherited by implementing classes.
*   They are called using the interface name (e.g., `InterfaceName.staticMethod()`).
*   They are useful for helper methods or factory methods related to the interface.

#### 5.3. Private Methods (Since Java 9)

**Concept:**
Private methods in interfaces are helper methods used by default methods or other private methods within the same interface. They are not accessible from implementing classes.

**Syntax:**
Use the `private` keyword.

```java
public interface AdvancedCalculator {
    int calculate(int a, int b);

    default int performOperation(int x, int y) {
        // Using a private helper method
        return performAddition(x, y) + performSubtraction(x, y);
    }

    private int performAddition(int a, int b) {
        return a + b;
    }

    private int performSubtraction(int a, int b) {
        return a - b;
    }
}

class ScientificCalculator implements AdvancedCalculator {
    @Override
    public int calculate(int a, int b) {
        // Using the default method which in turn uses private methods
        return performOperation(a, b);
    }
}

public class PrivateMethodDemo {
    public static void main(String[] args) {
        AdvancedCalculator sciCalc = new ScientificCalculator();
        int result = sciCalc.calculate(10, 5);
        System.out.println("Result: " + result); // Output: Result: 25 (15 + 10)
    }
}
```

**Key Points for Private Methods:**

*   They can only be called from within the interface itself.
*   They are designed to support the functionality of default and static methods within the interface.
*   They help in code organization and reusability within the interface.

#### 5.4. Functional Interfaces (Since Java 8)

**Concept:**
A functional interface (or single-abstract-method interface) is an interface that has only one abstract method. They are the basis for lambda expressions and the Stream API in Java.

**Annotation:**
The `@FunctionalInterface` annotation is optional but recommended. The compiler will enforce that the interface has only one abstract method.

```java
@FunctionalInterface
interface Greeter {
    String greet(String name); // The single abstract method
}

public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        // Using a lambda expression to implement the functional interface
        Greeter morningGreeter = (name) -> "Good morning, " + name;
        Greeter eveningGreeter = (name) -> "Good evening, " + name;

        System.out.println(morningGreeter.greet("Alice")); // Output: Good morning, Alice
        System.out.println(eveningGreeter.greet("Bob"));   // Output: Good evening, Bob
    }
}
```

**Built-in Functional Interfaces:**
Java provides many functional interfaces in the `java.util.function` package, such as:

*   `Consumer<T>`: Represents an operation that accepts a single input argument and returns no result. (`void accept(T t)`)
*   `Supplier<T>`: Represents a supplier of results. (`T get()`)
*   `Function<T, R>`: Represents a function that accepts one argument and produces a result. (`R apply(T t)`)
*   `Predicate<T>`: Represents a predicate (boolean-valued function) of one argument. (`boolean test(T t)`)

---

### 6. Marker Interfaces

**Concept:**
A marker interface is an interface that has no methods or constants. It's used solely to mark a class as having a certain property or characteristic. The presence of the marker interface itself signifies something about the class.

**Example:**
The `Serializable` interface in Java is a classic example of a marker interface.

```java
import java.io.Serializable;

// MyData class is marked as serializable
public class MyData implements Serializable {
    private static final long serialVersionUID = 1L; // Recommended for Serializable
    private String message;

    public MyData(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
```

**How it works:**
When you declare a class to implement `Serializable`, the Java runtime knows that objects of this class can be serialized (converted into a byte stream) and deserialized. The actual serialization mechanism is provided by the Java Development Kit (JDK) itself; the `Serializable` interface acts as a signal.

**Key Points for Marker Interfaces:**

*   Declare a class to implement it.
*   No methods or fields are declared within the interface.
*   Used to add metadata or capability to a class.
*   The compiler doesn't enforce any methods to be implemented, as there are none.

---

### Important Points to Remember

*   **Interfaces are contracts:** They define a set of methods that implementing classes must provide.
*   **Multiple inheritance of type:** A class can implement multiple interfaces.
*   **Achieve polymorphism:** Use interface references to refer to objects of implementing classes.
*   **`default` methods:** Add behavior to interfaces without breaking backward compatibility.
*   **`static` methods:** Utility methods belonging to the interface itself.
*   **`private` methods (Java 9+):** Helper methods for default/static methods within the interface.
*   **Functional interfaces:** Single-abstract-method interfaces, used with lambda expressions.
*   **Marker interfaces:** Signal a property or capability of a class.
*   **`public static final`:** All variables declared in an interface are implicitly `public static final`.
*   **`public abstract`:** All methods declared in an interface (before Java 8) are implicitly `public abstract`.

---

### Practice Questions / Exercises

1.  **What is the primary purpose of an interface in Java?**
    *   A) To define concrete implementations of methods.
    *   B) To establish a contract of behavior for classes.
    *   C) To provide instance variables for subclasses.
    *   D) To allow multiple inheritance of class members.

2.  **Can a class implement multiple interfaces in Java? Explain why or why not.**

3.  **Write a simple Java interface named `Shape` with an abstract method `getArea()` that returns a `double`.**

4.  **Create a `Circle` class that implements the `Shape` interface. The `Circle` class should have a `radius` instance variable and its `getArea()` method should calculate and return the area of the circle (π * radius²). Assume `Math.PI` is available.**

5.  **Explain the difference between a `default` method and a `static` method in an interface.**

6.  **What is a functional interface, and what annotation is used to indicate it?**

7.  **What is the purpose of the `Serializable` interface?**

---

### Answers

1.  **Answer:** B) To establish a contract of behavior for classes.
    *   *Explanation:* Interfaces define what a class *can* do, not how it does it. Abstract classes can provide concrete implementations.

2.  **Answer:** Yes, a class can implement multiple interfaces in Java. This is a key feature that allows Java to achieve multiple inheritance of *type* (or contract). A class must provide implementations for all abstract methods declared in all the interfaces it implements.

3.  **Interface `Shape`:**
    ```java
    public interface Shape {
        double getArea(); // Implicitly public abstract
    }
    ```

4.  **`Circle` class:**
    ```java
    public class Circle implements Shape {
        private double radius;

        public Circle(double radius) {
            this.radius = radius;
        }

        @Override
        public double getArea() {
            return Math.PI * radius * radius;
        }

        public static void main(String[] args) {
            Circle myCircle = new Circle(5.0);
            System.out.println("Area of the circle: " + myCircle.getArea());
        }
    }
    ```

5.  **Difference between `default` and `static` methods in an interface:**
    *   **`default` methods:**
        *   Provide a default implementation that can be inherited and used by implementing classes.
        *   Implementing classes can optionally override them.
        *   Are instance methods, called on an instance of the implementing class.
    *   **`static` methods:**
        *   Belong to the interface itself, not to any specific implementation.
        *   Cannot be overridden by implementing classes.
        *   Are called using the interface name (e.g., `InterfaceName.staticMethod()`).
        *   Often used for utility functions related to the interface.

6.  **Answer:** A functional interface is an interface that has exactly one abstract method. The `@FunctionalInterface` annotation is used to indicate this, though it's not strictly mandatory (the compiler will infer it). This type of interface is crucial for lambda expressions.

7.  **Answer:** The `Serializable` interface is a marker interface. Its purpose is to indicate that objects of a class can be converted into a byte stream (serialized) and later reconstructed from that byte stream (deserialized). The Java runtime uses the presence of this interface to enable serialization mechanisms.
