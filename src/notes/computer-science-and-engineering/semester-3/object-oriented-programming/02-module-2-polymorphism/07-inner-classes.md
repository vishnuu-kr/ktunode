---
title: "Inner Classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aca9"
status: "completed"
scrapedAt: "2026-05-20T16:28:46.796Z"
---
## Object-Oriented Programming: Module 2 - Polymorphism: Inner Classes

These notes cover the concept of Inner Classes in Object-Oriented Programming.

**Learning Outcomes:**

*   Understand the concept of inner classes and their purpose.
*   Differentiate between regular (member) inner classes, static nested classes, anonymous inner classes, and local inner classes.
*   Explain how inner classes access members of the outer class.
*   Explain when to use inner classes.
*   Write code using different types of inner classes.

**1. Introduction to Inner Classes**

*   **Definition:** An inner class (also called a nested class) is a class that is declared inside another class. The class within which the inner class is defined is known as the outer class or enclosing class.

*   **Purpose:** Inner classes offer a way to logically group classes that are only used in one place, thus increasing encapsulation, readability, and maintainability. They also enable one class to access private members of another.

*   **Encapsulation:** Inner classes help encapsulate related functionality within a single unit, hiding implementation details from the outside world.

*   **Organization:** Inner classes provide a way to structure and organize code by grouping related classes.

**2. Types of Inner Classes**

There are four types of inner classes in Java:

*   **Regular (Member) Inner Classes:** Declared inside a class but outside any method.
*   **Static Nested Classes:** Declared inside a class with the `static` keyword.
*   **Anonymous Inner Classes:** Declared and instantiated at the same time, typically used for short implementations of interfaces or abstract classes.
*   **Local Inner Classes:** Declared inside a method.

**2.1. Regular (Member) Inner Classes**

*   **Declaration:** Defined inside a class and outside any method or constructor.

*   **Instantiation:**  An instance of a regular inner class can only be created in the context of an instance of its outer class. You must first create an instance of the outer class, and then use that instance to create an instance of the inner class.

*   **Access to Outer Class Members:** A regular inner class has access to all members (including private members) of its outer class. This access is possible because an inner class instance implicitly holds a reference to the outer class instance that created it.

*   **Example:**

    ```java
    class OuterClass {
        private int outerData = 10;

        class InnerClass {
            public void display() {
                System.out.println("Outer data from InnerClass: " + outerData);
            }
        }

        public void createInner() {
            InnerClass inner = new InnerClass();
            inner.display();
        }

        public static void main(String[] args) {
            OuterClass outer = new OuterClass();
            outer.createInner(); // Accessing inner class through the outer class

            // Another way to instantiate an inner class:
            OuterClass.InnerClass innerInstance = outer.new InnerClass();
            innerInstance.display();
        }
    }
    ```

    **Output:**

    ```
    Outer data from InnerClass: 10
    Outer data from InnerClass: 10
    ```

*   **Important Points:**

    *   Inner classes cannot declare static members (except constant variables `static final`).
    *   To access the outer class's `this` reference from the inner class, use `OuterClass.this`.

**2.2. Static Nested Classes**

*   **Declaration:** Declared inside a class with the `static` keyword.

*   **Instantiation:** A static nested class can be instantiated without needing an instance of the outer class.

*   **Access to Outer Class Members:** A static nested class can only access the *static* members of the outer class.  It does not have access to the non-static (instance) members.

*   **Behavior:**  Static nested classes are similar to regular top-level classes, but are grouped logically with their outer class.

*   **Example:**

    ```java
    class OuterClass {
        private static int outerStaticData = 20;

        static class StaticNestedClass {
            public void display() {
                System.out.println("Outer static data from StaticNestedClass: " + outerStaticData);
            }
        }

        public static void main(String[] args) {
            OuterClass.StaticNestedClass nested = new OuterClass.StaticNestedClass();
            nested.display();
        }
    }
    ```

    **Output:**

    ```
    Outer static data from StaticNestedClass: 20
    ```

*   **Important Points:**

    *   Static nested classes are often used for helper classes that are logically related to the outer class but don't need access to its instance members.
    *   They can declare static members.

**2.3. Anonymous Inner Classes**

*   **Definition:** A class that is declared and instantiated in a single statement. It has no name.

*   **Purpose:** Often used to provide an inline implementation of an interface or abstract class.

*   **Syntax:**

    ```java
    new InterfaceName() {
        // Implementation of the interface methods
    };

    new AbstractClassName() {
        // Implementation of the abstract methods
    };
    ```

*   **Example:**

    ```java
    interface Greeting {
        void greet();
    }

    public class AnonymousInnerClassExample {
        public static void main(String[] args) {
            Greeting greeting = new Greeting() {
                @Override
                public void greet() {
                    System.out.println("Hello from anonymous inner class!");
                }
            };

            greeting.greet();
        }
    }
    ```

    **Output:**

    ```
    Hello from anonymous inner class!
    ```

*   **Important Points:**

    *   Anonymous inner classes are commonly used with event listeners in GUI programming.
    *   They cannot have constructors (since they have no name).
    *   They can access `final` or effectively `final` local variables of the enclosing scope.  "Effectively final" means a variable whose value is never changed after it's initialized, even if it's not explicitly declared `final`.

**2.4. Local Inner Classes**

*   **Definition:**  A class that is declared inside a method.

*   **Scope:**  Its scope is limited to the method in which it is defined.

*   **Access to Outer Class Members:**  A local inner class has access to all members (including private members) of the outer class, similar to regular inner classes.

*   **Access to Local Variables:**  A local inner class can access `final` or effectively `final` local variables of the method in which it is defined.

*   **Example:**

    ```java
    class OuterClass {
        private int outerData = 30;

        public void createLocalInner() {
            final int localVar = 40; // Effectively final variable

            class LocalInnerClass {
                public void display() {
                    System.out.println("Outer data from LocalInnerClass: " + outerData);
                    System.out.println("Local variable from LocalInnerClass: " + localVar);
                }
            }

            LocalInnerClass localInner = new LocalInnerClass();
            localInner.display();
        }

        public static void main(String[] args) {
            OuterClass outer = new OuterClass();
            outer.createLocalInner();
        }
    }
    ```

    **Output:**

    ```
    Outer data from LocalInnerClass: 30
    Local variable from LocalInnerClass: 40
    ```

*   **Important Points:**

    *   Local inner classes are useful for creating small, helper classes that are only needed within a specific method.
    *   They cannot be declared `private`, `protected`, or `public`. Their visibility is limited to the method in which they are defined.

**3. When to Use Inner Classes**

*   **Encapsulation and Code Organization:**  Use inner classes when you want to group classes that are logically related and hide implementation details.

*   **Accessing Private Members:** Use inner classes when you need one class to access the private members of another class.

*   **Event Handling (GUI Programming):** Anonymous inner classes are commonly used in event handling to define short, inline implementations of event listeners.

*   **Helper Classes:**  Use local inner classes for small helper classes that are only needed within a specific method.

*   **Code Clarity:** Improves readability and maintainability when properly used.

**4.  Key Differences Summary**

| Feature             | Regular Inner Class | Static Nested Class | Anonymous Inner Class | Local Inner Class |
| ------------------- | ------------------- | -------------------- | ---------------------- | ----------------- |
| Instance Required  | Yes                 | No                  | No (Implicit)           | Yes                |
| Access to Outer Instance | Yes                 | No                  | Yes                   | Yes                |
| Static Members      | No (except constants) | Yes                 | No                     | No                |
| Name                | Yes                 | Yes                 | No                     | Yes                |
| Scope               | Class-level         | Class-level          | Expression-level       | Method-level      |
| Visibility Modifiers | `private`, `protected`, `public` | `private`, `protected`, `public` | N/A                  | Default (package private) |

**5. Practice Questions/Exercises**

1.  **Question:** Explain the difference between a regular inner class and a static nested class. Give an example of when you might use each.
    *   **Answer:** A regular inner class requires an instance of the outer class to be created, and it has access to all members (including private) of the outer class. A static nested class does not require an instance of the outer class, and it can only access the static members of the outer class.  Use a regular inner class when the inner class needs to operate on the state of the outer class object.  Use a static nested class for utility classes that are logically grouped with the outer class but don't need access to the outer class's instance data.

2.  **Question:** Why are anonymous inner classes often used with interfaces?
    *   **Answer:** Anonymous inner classes allow you to provide an inline implementation of an interface without having to explicitly define a separate class. This is particularly useful when you only need to implement the interface once and the implementation is short.

3.  **Question:** What variables can a local inner class access from its enclosing method?
    *   **Answer:** A local inner class can access `final` or *effectively final* local variables of the method in which it is defined, as well as all members (including private members) of the outer class.

4.  **Exercise:**  Create an outer class `Car` with a `private` instance variable `engineType` (String). Create a regular inner class `Engine` with a method `startEngine()` that prints the `engineType` of the `Car`. Instantiate the `Engine` class from within the `Car` class and call the `startEngine()` method.

    *   **Solution:**

        ```java
        class Car {
            private String engineType = "V8";

            class Engine {
                public void startEngine() {
                    System.out.println("Engine Type: " + engineType);
                }
            }

            public void runCar() {
                Engine engine = new Engine();
                engine.startEngine();
            }

            public static void main(String[] args) {
                Car myCar = new Car();
                myCar.runCar();
            }
        }
        ```

5.  **Exercise:** Create an interface `Shape` with a method `draw()`. Use an anonymous inner class to implement the `Shape` interface and draw a "Circle".

    *   **Solution:**

        ```java
        interface Shape {
            void draw();
        }

        public class AnonymousShapeExample {
            public static void main(String[] args) {
                Shape circle = new Shape() {
                    @Override
                    public void draw() {
                        System.out.println("Drawing a Circle");
                    }
                };

                circle.draw();
            }
        }
        ```

**6. Important Points to Remember:**

*   Inner classes provide a powerful mechanism for code organization and encapsulation.
*   Understand the different types of inner classes and their access restrictions.
*   Use inner classes judiciously to improve code readability and maintainability.
*   Be mindful of the scope and lifetime of inner class instances.
*   The use of `final` or effectively `final` variables is crucial when working with local and anonymous inner classes.
