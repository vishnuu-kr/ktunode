---
title: "implementing interfaces"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acba"
status: "completed"
scrapedAt: "2026-05-20T16:29:00.239Z"
---
## Module 3: Packages and Interfaces – Packages: Implementing Interfaces

**Subject:** Object-Oriented Programming (OOP)
**Module:** 3. Packages and Interfaces
**Topic:** Implementing Interfaces

**Learning Outcomes:**

*   Understand the purpose and definition of interfaces.
*   Learn how to declare and implement interfaces in Java (or your chosen OOP language).
*   Understand the "is-a" relationship and its relation to interface implementation.
*   Know the rules and restrictions of implementing interfaces (e.g., implementing all methods).
*   Explain the benefits of using interfaces (e.g., multiple inheritance behavior, loose coupling).
*   Differentiate between abstract classes and interfaces.
*   Understand how interfaces can be used with polymorphism.

---

### 1. Introduction to Interfaces

*   **Definition:** An interface is a completely abstract class. It defines a contract that classes can choose to implement.  It contains only abstract methods (methods without a body) and constant variables (implicitly `public static final`).

*   **Purpose:**
    *   To define a common set of methods that multiple classes *must* implement, enforcing a specific behavior or "contract".
    *   To achieve multiple inheritance-like behavior, which is not directly supported in some OOP languages like Java.
    *   To promote loose coupling between classes.  Classes that implement the same interface can be treated interchangeably, reducing dependencies.
    *   To facilitate polymorphism, allowing objects of different classes to be treated as objects of the interface type.

*   **Analogy:** Think of an interface as a job description.  Any candidate (class) that applies for the job (implements the interface) must fulfill all the requirements listed in the job description (implement all the methods defined in the interface).

### 2. Declaring Interfaces

*   **Syntax (Java):**

    ```java
    public interface MyInterface {
        // Constant variables (implicitly public static final)
        int MY_CONSTANT = 10;

        // Abstract methods (implicitly public abstract)
        void method1();
        String method2(int x);
    }
    ```

*   **Key Points:**
    *   Use the `interface` keyword.
    *   Methods are implicitly `public abstract`. You don't need to explicitly declare them as such (though it's good practice to explicitly declare them as `public` for readability).
    *   Variables are implicitly `public static final` (constants).
    *   Interfaces cannot be instantiated.  You cannot create an object directly from an interface.
    *   An interface can extend multiple other interfaces (unlike classes, which can only extend one class).

### 3. Implementing Interfaces

*   **Syntax (Java):**

    ```java
    public class MyClass implements MyInterface {
        // Implement all methods defined in MyInterface
        @Override
        public void method1() {
            // Implementation of method1
            System.out.println("Method 1 implementation in MyClass");
        }

        @Override
        public String method2(int x) {
            // Implementation of method2
            return "Method 2 implementation in MyClass, x = " + x;
        }
    }
    ```

*   **Key Points:**
    *   Use the `implements` keyword to specify which interface(s) a class is implementing.
    *   A class *must* implement *all* methods defined in the interface (unless the class is declared as abstract).
    *   The implementing method must have the *exact* same signature (name, parameters, return type) as the method in the interface.
    *   The implementing method must be declared `public` to maintain the accessibility defined in the interface.
    *   The `@Override` annotation is good practice to ensure that you are correctly implementing the interface method and to catch potential errors during compilation.
    *   A class can implement multiple interfaces, separated by commas: `public class MyClass implements Interface1, Interface2, Interface3 { ... }`

### 4. The "Is-A" Relationship

*   When a class implements an interface, it establishes an "is-a" relationship.  For example:

    ```java
    public interface Flyable {
        void fly();
    }

    public class Bird implements Flyable {
        @Override
        public void fly() {
            System.out.println("Bird is flying.");
        }
    }

    public class Airplane implements Flyable {
        @Override
        public void fly() {
            System.out.println("Airplane is flying.");
        }
    }
    ```

*   In this case, a `Bird` *is-a* `Flyable`, and an `Airplane` *is-a* `Flyable`. This allows you to treat both `Bird` and `Airplane` objects as `Flyable` objects.

### 5. Rules and Restrictions

*   **Method Implementation:** As mentioned earlier, all methods declared in an interface *must* be implemented by any class that implements the interface (unless the class is declared abstract).
*   **Method Signature:** The implementing method must have the *exact* same signature (name, parameters, return type) as the method defined in the interface.
*   **Access Modifier:** The implementing method must have at least the same access modifier as the interface method (usually `public`).  It cannot be more restrictive.
*   **Multiple Interfaces:** A class can implement multiple interfaces.
*   **Constants:**  Constants defined in an interface can be accessed directly using the interface name (e.g., `MyInterface.MY_CONSTANT`).

### 6. Benefits of Using Interfaces

*   **Multiple Inheritance-like Behavior:** Interfaces allow a class to implement multiple interfaces, effectively inheriting multiple sets of behavior without the complexities and ambiguities of true multiple inheritance.
*   **Loose Coupling:**  Interfaces promote loose coupling between classes.  Classes that implement the same interface can be used interchangeably, reducing dependencies and making the code more flexible and maintainable.
*   **Polymorphism:** Interfaces enable polymorphism.  You can create collections of objects that implement the same interface and treat them uniformly through the interface reference.
*   **Abstraction:**  Interfaces provide a high level of abstraction, focusing on *what* a class should do rather than *how* it should do it.  This allows for greater flexibility in implementation.

### 7. Abstract Classes vs. Interfaces

| Feature          | Abstract Class                                   | Interface                                          |
|-------------------|---------------------------------------------------|---------------------------------------------------|
| Members          | Can have abstract and non-abstract methods, fields | Abstract methods (until Java 8), constant fields  |
| `implements`/`extends` | Can `extend` only one class, `implements` many interfaces | Can `extend` many interfaces                       |
| Instantiation    | Cannot be instantiated                             | Cannot be instantiated                             |
| Default Methods   | Not allowed (until Java 8 and later)            | Allowed (Java 8 and later)                      |
| Purpose           | Provide a common base class and shared implementation | Define a contract and enable multiple inheritance-like behavior |

*   **When to use Abstract Class:** When you have a common base implementation that you want subclasses to inherit.
*   **When to use Interface:** When you want to define a contract that unrelated classes can implement to achieve polymorphism and loose coupling.

### 8. Interfaces and Polymorphism

```java
public interface Animal {
    void makeSound();
}

public class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

public class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog();
        Animal cat = new Cat();

        Animal[] animals = {dog, cat}; // Polymorphic array

        for (Animal animal : animals) {
            animal.makeSound(); // Each object behaves according to its own implementation
        }
    }
}
```

*   In this example, `Dog` and `Cat` are treated as `Animal` objects. This demonstrates polymorphism, where a single interface reference can refer to objects of different classes that implement the interface.

### 9. Important Points to Remember

*   An interface defines a contract.
*   Classes *must* implement all methods of an interface.
*   Interfaces promote loose coupling and polymorphism.
*   Interfaces provide a form of multiple inheritance.
*   Interfaces cannot be instantiated.
*   Interfaces contain constant variables (implicitly `public static final`).
*   Interfaces and abstract classes both achieve abstraction, but interfaces focus on *what* to do, while abstract classes can also provide a base implementation of *how* to do it.

---

### Practice Questions/Exercises

**1.  Interface Definition:**

    Create an interface called `Drawable` with a method `draw()`. The `draw()` method should not take any arguments and should not return any value.

    **Answer:**

    ```java
    public interface Drawable {
        void draw();
    }
    ```

**2.  Implementing the Interface:**

    Create two classes, `Circle` and `Square`, that implement the `Drawable` interface. Implement the `draw()` method in each class to print a different message (e.g., "Drawing a circle" for `Circle` and "Drawing a square" for `Square`).

    **Answer:**

    ```java
    public class Circle implements Drawable {
        @Override
        public void draw() {
            System.out.println("Drawing a circle");
        }
    }

    public class Square implements Drawable {
        @Override
        public void draw() {
            System.out.println("Drawing a square");
        }
    }
    ```

**3. Polymorphic Usage:**

   Create an array of `Drawable` objects containing instances of `Circle` and `Square`. Iterate through the array and call the `draw()` method on each object.

    **Answer:**

    ```java
    public class Main {
        public static void main(String[] args) {
            Drawable circle = new Circle();
            Drawable square = new Square();

            Drawable[] drawables = {circle, square};

            for (Drawable drawable : drawables) {
                drawable.draw();
            }
        }
    }
    ```

**4.  Multiple Interfaces:**

    Create an interface called `Resizable` with a method `resize(double factor)`. Modify the `Square` class to implement both `Drawable` and `Resizable`. Implement the `resize()` method in `Square` to print a message indicating the resizing.

    **Answer:**

    ```java
    public interface Resizable {
        void resize(double factor);
    }

    public class Square implements Drawable, Resizable {
        @Override
        public void draw() {
            System.out.println("Drawing a square");
        }

        @Override
        public void resize(double factor) {
            System.out.println("Resizing square by a factor of " + factor);
        }
    }
    ```

**5.  Interface Constants:**

    Add a constant `DEFAULT_COLOR` to the `Drawable` interface and assign it a value of "black". Access this constant in the `Circle` class and print it to the console when drawing the circle.

    **Answer:**

    ```java
    public interface Drawable {
        String DEFAULT_COLOR = "black";
        void draw();
    }

    public class Circle implements Drawable {
        @Override
        public void draw() {
            System.out.println("Drawing a circle with color: " + DEFAULT_COLOR);
        }
    }
    ```

**Key Takeaways Recap:**

*   Interfaces define a contract.  Classes agree to fulfill the contract by implementing all the methods.
*   Interfaces promote loose coupling, allowing different classes to be used interchangeably as long as they implement the same interface.
*   Polymorphism is a powerful concept enabled by interfaces, allowing you to treat objects of different classes uniformly through a common interface reference.
*   Understanding the differences between interfaces and abstract classes helps you choose the right tool for the job.
