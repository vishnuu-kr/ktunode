---
title: "Static Members"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aca7"
status: "completed"
scrapedAt: "2026-05-20T16:28:45.355Z"
---
## Object-Oriented Programming: Module 2 - Polymorphism: Static Members

These notes cover the concept of Static Members within the context of Polymorphism in Object-Oriented Programming.

**Learning Outcomes:**

*   Understand the concept of static members (variables and methods).
*   Explain the difference between static and instance members.
*   Demonstrate how to declare and access static members.
*   Understand the purpose and use cases of static members.
*   Understand the concept of static constructors.
*   Recognize the limitations and potential pitfalls of using static members.

**1. Introduction to Static Members**

*   **Definition:** Static members (variables and methods) belong to the *class* itself, rather than to any specific *instance* (object) of the class.  This means there's only one copy of a static member shared by all instances of the class.
*   **Contrast with Instance Members:**
    *   **Instance Members:** Belong to each *object* of the class.  Each object has its own copy of instance variables. Instance methods are called on a specific object.
    *   **Static Members:**  Belong to the *class* itself. There is only one copy, shared by all instances (or if no instances exist).
*   **Keyword:**  The `static` keyword is used to declare static members in most object-oriented languages (e.g., Java, C#, C++).

**2. Static Variables (Class Variables)**

*   **Declaration:**
    ```java
    public class MyClass {
        public static int count = 0; // Static variable
        public int instanceVar;       // Instance variable

        public MyClass() {
            count++;                   // Increment static variable on object creation
            instanceVar = count;
        }
    }
    ```
*   **Scope and Lifetime:**
    *   Static variables have a scope that extends from their declaration to the end of the class definition.
    *   They are created when the class is loaded into memory and destroyed when the class is unloaded (which usually happens when the program terminates).
*   **Accessing Static Variables:**
    *   **Using the Class Name:**  The preferred and clearest way is to use the class name, followed by the dot operator, and then the variable name: `MyClass.count`
    *   **Using an Object (Less Recommended):** While possible, avoid accessing static variables through an object.  It can be misleading. `MyClass obj = new MyClass(); System.out.println(obj.count);`  This accesses the static `count` but reads like an instance member access.
*   **Use Cases:**
    *   **Counters:** Keeping track of the number of objects created from a class.
    *   **Constants:**  Defining values that are shared across all instances (e.g., `Math.PI`). Static variables used as constants are often declared `final` (Java) or `const` (C++) to prevent modification.
    *   **Global Configuration:** Storing configuration settings that apply to the class as a whole.
*   **Example:** Counting the number of times a function is called.

    ```java
    public class FunctionCallCounter {
        private static int callCount = 0;

        public static void myMethod() {
            callCount++;
            System.out.println("Method called. Count: " + callCount);
        }

        public static int getCallCount() {
            return callCount;
        }

        public static void main(String[] args) {
            FunctionCallCounter.myMethod();
            FunctionCallCounter.myMethod();
            FunctionCallCounter.myMethod();
            System.out.println("Total calls: " + FunctionCallCounter.getCallCount()); // Output: 3
        }
    }
    ```

**3. Static Methods (Class Methods)**

*   **Declaration:**
    ```java
    public class MyClass {
        public static void myStaticMethod() {
            System.out.println("This is a static method.");
        }

        public void myInstanceMethod() {
            System.out.println("This is an instance method.");
        }
    }
    ```
*   **Accessing Static Methods:**
    *   **Using the Class Name:**  `MyClass.myStaticMethod();`
    *   **Using an Object (Less Recommended):** `MyClass obj = new MyClass(); obj.myStaticMethod();` (Similar to static variables, this should be avoided if possible.)
*   **Key Restrictions:**
    *   Static methods can only directly access *static* variables of the class. They cannot directly access instance variables because they are not associated with a specific object instance.
    *   `this` keyword cannot be used inside a static method because `this` refers to the current instance of the class. Static methods operate on the class itself, not on any specific instance.
*   **Use Cases:**
    *   **Utility Functions:** Providing helper functions that don't depend on the state of any particular object (e.g., `Math.sqrt()`, `Arrays.sort()`).
    *   **Factory Methods:** Creating instances of a class (often used in design patterns).
    *   **Accessing or Modifying Static Variables:** Providing controlled access to static variables.

*   **Example:** Converting Celsius to Fahrenheit

    ```java
    public class TemperatureConverter {

        public static double celsiusToFahrenheit(double celsius) {
            return (celsius * 9 / 5) + 32;
        }

        public static double fahrenheitToCelsius(double fahrenheit) {
            return (fahrenheit - 32) * 5 / 9;
        }

        public static void main(String[] args) {
            double celsiusTemp = 25.0;
            double fahrenheitTemp = TemperatureConverter.celsiusToFahrenheit(celsiusTemp);
            System.out.println(celsiusTemp + " Celsius is " + fahrenheitTemp + " Fahrenheit");

            double fahrenheitTemp2 = 77.0;
            double celsiusTemp2 = TemperatureConverter.fahrenheitToCelsius(fahrenheitTemp2);
            System.out.println(fahrenheitTemp2 + " Fahrenheit is " + celsiusTemp2 + " Celsius");
        }
    }
    ```

**4. Static Constructors (or Static Initializers)**

*   **Purpose:**  Used to initialize static variables of a class. They are executed *only once*, when the class is first loaded into memory.
*   **Characteristics:**
    *   Have no parameters.
    *   Have no access modifiers (e.g., `public`, `private`).
    *   Cannot be called directly.  The runtime automatically calls them.
    *   There can be only one static constructor per class.
*   **Syntax (C# Example):**
    ```csharp
    public class MyClass {
        public static int staticVar;

        static MyClass() {
            // Initialization of staticVar happens here
            staticVar = CalculateInitialValue(); // Can call other static methods
            Console.WriteLine("Static constructor called."); //Prints only once
        }

        private static int CalculateInitialValue() {
            return 100;
        }
    }
    ```

*   **Syntax (Java Example - Static Initialization Block):**
      Java does not have static constructors as C# does, but it provides Static Initialization Blocks
        ```java
            public class MyClass {
                public static int staticVar;

                static {
                    staticVar = 100;
                    System.out.println("Static initialization block called.");
                }
            }
        ```

*   **Use Cases:**
    *   Complex initialization of static variables that cannot be done directly in the declaration.
    *   Loading configuration from files or databases that will be used by static members.
*   **Example:** Initializing a static lookup table.

    ```java
    public class ConfigLoader {
        private static final Map<String, String> configMap = new HashMap<>();

        static {
            // Simulate loading configuration from a file
            configMap.put("database.url", "jdbc:mysql://localhost:3306/mydb");
            configMap.put("api.key", "YOUR_API_KEY");
            System.out.println("Configuration loaded during class initialization.");
        }

        public static String getConfigValue(String key) {
            return configMap.get(key);
        }

        public static void main(String[] args) {
            System.out.println("Database URL: " + ConfigLoader.getConfigValue("database.url"));
            System.out.println("API Key: " + ConfigLoader.getConfigValue("api.key"));
        }
    }
    ```

**5. Important Considerations and Potential Pitfalls**

*   **Overuse:**  Avoid using static members unnecessarily.  Excessive use can lead to:
    *   **Global State:**  Static variables effectively create global state, which can make code harder to reason about, test, and maintain.
    *   **Tight Coupling:** Classes become tightly coupled if they rely heavily on static members of other classes.
*   **Thread Safety:**  Static variables are shared across all threads. If multiple threads access and modify a static variable concurrently, you need to ensure thread safety using synchronization mechanisms (e.g., locks, atomic operations) to prevent race conditions and data corruption.
*   **Initialization Order:** The order in which static variables are initialized can be complex, especially across multiple classes. Be careful about dependencies between static initializers.  Circular dependencies can lead to unexpected behavior.
*   **Testing:** Code that heavily relies on static members can be difficult to unit test because you cannot easily isolate components and mock dependencies.

**6.  Key Differences: Static vs. Instance Members (Summary)**

| Feature          | Static Member                     | Instance Member                      |
| ---------------- | ----------------------------------- | ------------------------------------ |
| Ownership        | Class                             | Object                               |
| Number of Copies | One per class                     | One per object                       |
| Access           | ClassName.member                    | object.member                        |
| Scope            | Class scope                        | Object scope                         |
| `this` keyword    | Not available                     | Available (refers to current object) |
| Memory Allocation | When the class is loaded          | When the object is created           |
| Garbage Collection| When the class is unloaded (usually on program termination) | When the object is no longer referenced |

**7. Practice Questions/Exercises**

1.  **Counter Class:** Create a class called `Counter` with a static variable `count` initialized to 0.  The class should have a constructor that increments the `count` variable each time a new `Counter` object is created.  Include a static method `getCount()` that returns the current value of the `count` variable. Write a `main` method to create three `Counter` objects and print the value returned by `getCount()`.

    ```java
    public class Counter {
        private static int count = 0;

        public Counter() {
            count++;
        }

        public static int getCount() {
            return count;
        }

        public static void main(String[] args) {
            Counter c1 = new Counter();
            Counter c2 = new Counter();
            Counter c3 = new Counter();
            System.out.println("Count: " + Counter.getCount()); // Output: Count: 3
        }
    }
    ```

2.  **Utility Class:** Create a utility class called `StringUtil` with a static method `reverseString(String str)` that reverses the input string and returns the reversed string. The class should have no instance variables or constructors.

    ```java
    public class StringUtil {

        public static String reverseString(String str) {
            StringBuilder sb = new StringBuilder(str);
            return sb.reverse().toString();
        }

        public static void main(String[] args) {
            String originalString = "hello";
            String reversedString = StringUtil.reverseString(originalString);
            System.out.println("Original: " + originalString);
            System.out.println("Reversed: " + reversedString);  // Output: olleh
        }
    }
    ```

3.  **Static Initialization Block:** Create a class `DatabaseConnection` that has a static block that loads database driver. The block should print "Loading database driver..." only once when the class is loaded.

    ```java
    public class DatabaseConnection {

        static {
            System.out.println("Loading database driver...");
            // Simulate loading a driver
            try {
                Class.forName("com.mysql.cj.jdbc.Driver"); // Replace with actual driver class
            } catch (ClassNotFoundException e) {
                System.err.println("Database driver not found: " + e.getMessage());
            }
        }

        public static void connect() {
            System.out.println("Connecting to the database...");
            // Database connection logic would go here
        }

        public static void main(String[] args) {
            DatabaseConnection.connect(); // The static block is executed before this.
        }
    }
    ```

4.  **Static variables and methods:** Create a Class Car with static int numberOfCars and static method  int getNumberOfCars(). Every time a car object is created number of cars increments. Test the class with creating different objects.

```java
public class Car {
    private static int numberOfCars = 0;

    public Car() {
        numberOfCars++;
    }

    public static int getNumberOfCars() {
        return numberOfCars;
    }

    public static void main(String[] args) {
        Car car1 = new Car();
        Car car2 = new Car();
        Car car3 = new Car();

        System.out.println("Number of cars created: " + Car.getNumberOfCars());
    }
}
```

**8. Important Points to Remember**

*   Static members belong to the *class*, not to instances of the class.
*   Static variables are shared by all instances.
*   Static methods cannot access instance variables directly.
*   Use static members judiciously to avoid global state and tight coupling.
*   Be mindful of thread safety when using static variables in multi-threaded environments.
*   Static constructors are executed only once when the class is loaded.
*   Understand the difference between static initialization blocks and constructors.

These comprehensive notes should provide a good foundation for understanding static members in object-oriented programming. Remember to practice with examples to solidify your understanding.
