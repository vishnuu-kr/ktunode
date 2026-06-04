---
title: "Introduction to design patterns in Java : Singleton and Adaptor."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acc6"
status: "completed"
scrapedAt: "2026-05-20T16:29:10.744Z"
---
## Object-Oriented Programming: Module 3 - Packages and Interfaces

### Topic: Introduction to Design Patterns in Java: Singleton and Adapter

**Description:** This module introduces the concepts of design patterns in Java, specifically focusing on the Singleton and Adapter patterns. We will explore their purpose, implementation, and benefits.

**Learning Outcomes:**

*   Understand the concept and importance of design patterns.
*   Explain the Singleton pattern and its usage.
*   Implement the Singleton pattern in Java.
*   Explain the Adapter pattern and its usage.
*   Implement the Adapter pattern in Java.
*   Recognize scenarios where each pattern is applicable.

---

**1. Introduction to Design Patterns**

*   **Definition:** Design patterns are reusable solutions to commonly occurring problems in software design. They represent best practices developed over time by experienced software developers. They are not code that you can directly copy and paste, but rather templates for solving problems that can be adapted to specific situations.

*   **Importance:**
    *   **Reusability:** Provides proven solutions that can be applied to different projects.
    *   **Communication:** Provides a common vocabulary for discussing design issues.
    *   **Maintainability:** Leads to more organized and understandable code.
    *   **Efficiency:** Reduces development time and effort by avoiding re-inventing the wheel.

*   **Categories:** Design patterns are typically categorized into three main types:
    *   **Creational:** Deals with object creation mechanisms, trying to create objects in a manner suitable to the situation. (e.g., Singleton, Factory, Abstract Factory, Builder, Prototype)
    *   **Structural:** Deals with class and object composition, helping to form large structures from smaller entities. (e.g., Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy)
    *   **Behavioral:** Deals with algorithms and the assignment of responsibilities between objects. (e.g., Chain of Responsibility, Command, Iterator, Mediator, Observer, State, Strategy, Template Method, Visitor)

---

**2. Singleton Pattern**

*   **Definition:** The Singleton pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance.  It restricts the instantiation of a class to a single object.

*   **Purpose:**
    *   To control access to a shared resource.
    *   To avoid creating multiple instances of a costly object.
    *   To provide a global point of access to a single instance.

*   **Key Characteristics:**
    *   A private constructor prevents external instantiation.
    *   A static instance of the class within the class itself.
    *   A public static method (e.g., `getInstance()`) that returns the single instance.

*   **Implementation in Java:**

    ```java
    public class Singleton {
        // 1. Private static instance of the class
        private static Singleton instance;

        // 2. Private constructor to prevent external instantiation
        private Singleton() {
            // Initialization code can go here
        }

        // 3. Public static method to get the instance
        public static Singleton getInstance() {
            // Lazy initialization: creates the instance only when needed
            if (instance == null) {
                instance = new Singleton();
            }
            return instance;
        }

        // Example method of the singleton class
        public void doSomething() {
            System.out.println("Singleton is doing something!");
        }
    }

    // Usage:
    public class Main {
        public static void main(String[] args) {
            Singleton singleton = Singleton.getInstance();
            singleton.doSomething();

            Singleton anotherSingleton = Singleton.getInstance(); // Returns the same instance
            System.out.println(singleton == anotherSingleton); // Output: true
        }
    }
    ```

*   **Variations:**
    *   **Eager Initialization:** The instance is created at the time of class loading.
        ```java
        private static final Singleton instance = new Singleton(); // Eager initialization
        private Singleton() {}
        public static Singleton getInstance() { return instance; }
        ```
        *   **Pros:** Simpler to implement, thread-safe by default.
        *   **Cons:** Instance is created even if it's not used.
    *   **Thread-Safe Singleton:** Using `synchronized` keyword in the `getInstance()` method or using double-checked locking to prevent race conditions in multi-threaded environments.
        ```java
        public static synchronized Singleton getInstance() { //Thread-safe (but inefficient)
            if (instance == null) {
                instance = new Singleton();
            }
            return instance;
        }
        ```
        ```java
        //Double-checked locking (more efficient)
        private static volatile Singleton instance; //volatile keyword is important

        public static Singleton getInstance() {
            if (instance == null) {
                synchronized (Singleton.class) {
                    if (instance == null) {
                        instance = new Singleton();
                    }
                }
            }
            return instance;
        }
        ```
        *   **Important**: The `volatile` keyword is critical for the double-checked locking implementation.  It ensures that changes to the `instance` variable are immediately visible to other threads.  Without `volatile`, a thread could potentially see a partially constructed instance, leading to errors.

*   **When to Use:**
    *   When you need exactly one instance of a class.
    *   When you need a global point of access to that instance.
    *   Examples: Logger, Configuration Manager, Database Connection Pool.

*   **Important Points to Remember:**
    *   The constructor must be private.
    *   The `getInstance()` method must be static.
    *   Consider thread safety if used in a multi-threaded environment.
    *   Be mindful of the potential for over-use.  Singleton can make testing more difficult.

---

**3. Adapter Pattern**

*   **Definition:** The Adapter pattern is a structural design pattern that allows incompatible interfaces to work together. It acts as a translator between two interfaces. An adapter allows classes with incompatible interfaces to collaborate.

*   **Purpose:**
    *   To allow existing classes with incompatible interfaces to work together.
    *   To reuse existing classes.
    *   To simplify the interface of a class.

*   **Key Components:**
    *   **Target (Interface):** The interface that the client expects.
    *   **Adaptee:** The class with the incompatible interface that needs to be adapted.
    *   **Adapter:** The class that implements the Target interface and uses the Adaptee.

*   **Types of Adapter:**
    *   **Object Adapter:** The adapter contains an instance of the adaptee and delegates calls to it.  This is generally the preferred method.
    *   **Class Adapter:** The adapter inherits from both the target and the adaptee (using multiple inheritance, which is not directly supported in Java for classes, but possible for interfaces).

*   **Implementation in Java (Object Adapter):**

    ```java
    // Target Interface: What the client expects
    interface Target {
        String request();
    }

    // Adaptee:  Class with an incompatible interface
    class Adaptee {
        public String specificRequest() {
            return "Adaptee's specific request.";
        }
    }

    // Adapter:  Implements Target and uses Adaptee
    class Adapter implements Target {
        private Adaptee adaptee;

        public Adapter(Adaptee adaptee) {
            this.adaptee = adaptee;
        }

        @Override
        public String request() {
            return "Adapter translates to: " + adaptee.specificRequest();
        }
    }

    // Client: Uses the Target interface
    public class Main {
        public static void main(String[] args) {
            Adaptee adaptee = new Adaptee();
            Target target = new Adapter(adaptee);

            System.out.println(target.request()); // Output: Adapter translates to: Adaptee's specific request.
        }
    }
    ```

*   **Implementation in Java (Class Adapter using Interface):**  Since Java doesn't allow multiple inheritance of classes, we can use interfaces.

    ```java
    // Target Interface: What the client expects
    interface Target {
        String request();
    }

    // Adaptee:  Class with an incompatible interface
    class Adaptee {
        public String specificRequest() {
            return "Adaptee's specific request.";
        }
    }

    // Helper Interface
    interface AdapteeInterface {
        String specificRequest();
    }

    // Implement the interface for the Adaptee
    class AdapteeWrapper extends Adaptee implements AdapteeInterface {}


    // Adapter:  Implements Target and uses Adaptee via inheritance (emulating Class Adapter)
    class AdapterClass extends AdapteeWrapper implements Target {

        @Override
        public String request() {
            return "Adapter translates to: " + this.specificRequest();
        }
    }

    // Client: Uses the Target interface
    public class Main {
        public static void main(String[] args) {
            Target target = new AdapterClass();

            System.out.println(target.request()); // Output: Adapter translates to: Adaptee's specific request.
        }
    }
    ```
    Note:  This approach relies on a wrapper class and is less common than the Object Adapter because it introduces more complexity.  Object Adapter is generally preferred in Java.

*   **When to Use:**
    *   When you want to use an existing class, but its interface is not compatible with your needs.
    *   When you want to create a reusable component that can work with different interfaces.
    *   Examples: Adapting legacy code to a new system, converting data formats.

*   **Important Points to Remember:**
    *   The Adapter pattern focuses on converting one interface to another.
    *   Object Adapter is generally preferred in Java due to its flexibility.
    *   The Target interface defines what the client expects.
    *   The Adaptee is the class that needs to be adapted.

---

**4. Practice Questions/Exercises**

1.  **Singleton:**  Modify the Singleton implementation to be thread-safe using double-checked locking. Explain the purpose of the `volatile` keyword in this context.

    *   **Answer:** See the "Thread-Safe Singleton" section above for the double-checked locking implementation. The `volatile` keyword ensures that changes to the `instance` variable are immediately visible to other threads, preventing a thread from seeing a partially constructed instance.

2.  **Singleton:** Why is the constructor of a Singleton class typically made private?

    *   **Answer:** To prevent external instantiation of the class.  The purpose of Singleton is to ensure that only one instance exists, and a private constructor enforces this restriction.

3.  **Adapter:**  You have a legacy system that uses a `LegacyDataProcessor` with a method `processOldData(String data)`.  You want to integrate it with a new system that expects a `NewDataProcessor` interface with a method `processNewData(List<String> data)`.  Implement an Adapter to bridge the gap.

    *   **Answer:**

        ```java
        import java.util.Arrays;
        import java.util.List;

        // Legacy System
        class LegacyDataProcessor {
            public void processOldData(String data) {
                System.out.println("Processing legacy data: " + data);
            }
        }

        // New System Interface
        interface NewDataProcessor {
            void processNewData(List<String> data);
        }

        // Adapter
        class DataProcessorAdapter implements NewDataProcessor {
            private LegacyDataProcessor legacyProcessor;

            public DataProcessorAdapter(LegacyDataProcessor legacyProcessor) {
                this.legacyProcessor = legacyProcessor;
            }

            @Override
            public void processNewData(List<String> data) {
                for (String item : data) {
                    legacyProcessor.processOldData(item); // Adapting the new format to the old
                }
            }
        }

        // Client Code
        public class Main {
            public static void main(String[] args) {
                LegacyDataProcessor legacyProcessor = new LegacyDataProcessor();
                NewDataProcessor newDataProcessor = new DataProcessorAdapter(legacyProcessor);

                List<String> newData = Arrays.asList("data1", "data2", "data3");
                newDataProcessor.processNewData(newData);
            }
        }
        ```

4.  **Adapter:**  Explain the difference between the Object Adapter and the Class Adapter patterns. Why is Object Adapter generally preferred in Java?

    *   **Answer:** In Object Adapter, the adapter contains an instance of the adaptee. In Class Adapter, the adapter inherits from both the target and the adaptee. Object Adapter is preferred in Java because Java does not support multiple inheritance of classes directly, making Class Adapter more difficult to implement. Object Adapter provides more flexibility and avoids the complexities of inheritance hierarchies.

5.  **General:** What is the primary benefit of using design patterns in software development?

    *   **Answer:**  The primary benefit is increased reusability, maintainability, and readability of code.  Design patterns provide proven solutions to common design problems, allowing developers to build more robust and understandable systems.

---

**5. Important Points to Remember (Overall)**

*   Design patterns are reusable solutions to common design problems.
*   They are not code snippets, but templates that can be adapted.
*   The Singleton pattern ensures only one instance of a class exists. Consider thread safety when implementing it.
*   The Adapter pattern allows incompatible interfaces to work together. Object Adapter is preferred in Java.
*   Understanding design patterns leads to better software design and development practices.
