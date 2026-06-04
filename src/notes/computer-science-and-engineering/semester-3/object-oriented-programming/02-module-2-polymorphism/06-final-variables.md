---
title: "Final Variables"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aca8"
status: "completed"
scrapedAt: "2026-05-20T16:28:46.074Z"
---
## Object-Oriented Programming: Module 2 - Polymorphism: Final Variables

These notes cover the topic of `final` variables in Object-Oriented Programming (OOP), focusing on their role and impact in the context of Polymorphism.

**Learning Outcomes:**

*   Understand the purpose and meaning of `final` variables.
*   Differentiate between `final` variables and constant variables.
*   Explain the implications of using `final` variables for inheritance and polymorphism.
*   Apply `final` variables effectively in Java (or your chosen OOP language).
*   Recognize scenarios where using `final` variables is beneficial for code clarity and safety.

**1. Key Concepts and Definitions**

*   **`final` Keyword:** The `final` keyword in Java (and similar keywords in other OOP languages) is a non-access modifier that can be applied to variables, methods, and classes.  When applied to a variable, it has a specific and important meaning.

*   **`final` Variable:** A `final` variable is a variable whose value cannot be changed after it has been initialized.  It is essentially a constant *after* initialization.

*   **Initialization:**  A `final` variable *must* be initialized before the object containing it is completely constructed. There are three ways to initialize a `final` variable:
    *   **Declaration:**  Initialize the variable at the point of its declaration.
        ```java
        final int myFinalVariable = 10;
        ```
    *   **Instance Initializer Block (for Instance Variables):** Initialize the variable within an instance initializer block.
        ```java
        class MyClass {
            final int myFinalVariable;

            {
                myFinalVariable = 20;
            }
        }
        ```
    *   **Constructor:**  Initialize the variable within a constructor (or constructors).  If there are multiple constructors, the `final` variable *must* be initialized in *all* of them.
        ```java
        class MyClass {
            final int myFinalVariable;

            public MyClass(int value) {
                myFinalVariable = value;
            }

            public MyClass() {
                myFinalVariable = 30; //Must be initialized here too
            }
        }
        ```
*   **Blank Final Variable:**  A `final` variable that is not initialized at the point of declaration is called a blank final variable.  As mentioned above, it *must* be initialized in a constructor or initializer block.

*   **Mutability vs. Immutability:** A `final` variable does *not* necessarily mean the *object* it references is immutable. If the `final` variable references a mutable object (e.g., an `ArrayList`), the object itself can still be modified; only the *reference* stored in the `final` variable cannot be changed to point to a different object.

*   **Constant Variables (with `static final`):** A `static final` variable represents a class-level constant.  It is initialized only once, when the class is loaded, and its value is shared by all instances of the class. It is typically written in `UPPER_SNAKE_CASE`.  `static final` variables are often considered true constants.

**2. Purpose and Meaning of `final` Variables**

*   **Prevent Accidental Modification:**  The primary purpose of a `final` variable is to prevent accidental modification of its value after initialization. This adds a layer of safety and helps maintain the integrity of the code.

*   **Code Clarity and Readability:** Declaring a variable `final` explicitly signals to other developers (and the compiler) that the value is intended to be constant, improving code clarity and making it easier to reason about the program's behavior.

*   **Performance Optimization (Potential):** In some cases, the compiler can make certain optimizations if it knows that a variable's value will never change.

**3. Differentiating `final` Variables and Constant Variables**

| Feature         | `final` Variable                                 | `static final` Variable (Constant)                               |
|-----------------|---------------------------------------------------|--------------------------------------------------------------------|
| Scope           | Instance or Local                                 | Class-level                                                      |
| Initialization   | Must be initialized before object is fully constructed | Initialized when the class is loaded                               |
| Value           | Can be different for each instance                | Same for all instances of the class                                 |
| Typical Usage   | Protecting instance-specific values from modification | Defining global constants (e.g., Math.PI)                         |
| Naming Convention | Lower camel case                                  | `UPPER_SNAKE_CASE`                                                  |

**Example:**

```java
class Circle {
    final double radius;      // Instance-specific, can vary for each Circle
    static final double PI = 3.14159; // Shared by all Circle instances

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return PI * radius * radius;
    }
}
```

**4. Implications of `final` Variables for Inheritance and Polymorphism**

*   **No Direct Impact on Polymorphism:**  `final` variables, unlike `final` methods, do not directly affect polymorphism in the sense that they prevent overriding. Polymorphism primarily concerns methods.

*   **Implications for Mutable Objects:**  If a `final` variable references a *mutable* object, the contents of that object can still be modified. This is crucial to understand. Polymorphism relies on behavior being able to change based on the object's *actual* type at runtime.  A `final` reference to a mutable object doesn't prevent the *behavior* of that object from changing through its own methods.

*   **Example demonstrating final reference and object mutability**

    ```java
    import java.util.ArrayList;
    import java.util.List;

    public class FinalListExample {
        public static void main(String[] args) {
            final List<String> myList = new ArrayList<>(); // myList is final, but the ArrayList is mutable

            myList.add("Apple");
            myList.add("Banana");

            System.out.println(myList); // Output: [Apple, Banana]

            myList.remove("Apple"); // Modifying the ArrayList contents

            System.out.println(myList); // Output: [Banana]

            // myList = new ArrayList<>(); // This would cause a compile-time error because myList is final.
        }
    }
    ```

    In this example, `myList` is a `final` reference to an `ArrayList`.  We can still add and remove elements from the `ArrayList` because the `ArrayList` itself is mutable.  However, we *cannot* reassign `myList` to a *new* `ArrayList` object.

**5. Applying `final` Variables Effectively**

*   **Protecting Configuration Values:** Use `final` for configuration values that should not be changed during the program's execution.

*   **Ensuring Immutability (Partial):** Using `final` for object references helps create immutable data structures.  To achieve full immutability, the referenced object's fields must also be `final` and the object itself must not provide any methods that modify its internal state.

*   **Defining Constants:** Use `static final` for defining constants that are shared across all instances of a class.

*   **Example scenario:**
    ```java
    class Order {
        final int orderId; // generated once and immutable
        final String customerName;
        final double orderAmount;

        public Order(int orderId, String customerName, double orderAmount) {
            this.orderId = orderId;
            this.customerName = customerName;
            this.orderAmount = orderAmount;
        }

        // Getters for orderId, customerName, orderAmount
        public int getOrderId() { return orderId; }
        public String getCustomerName() { return customerName; }
        public double getOrderAmount() {return orderAmount;}
    }
    ```

    In this example, `orderId`, `customerName`, and `orderAmount` are `final`.  Once an `Order` object is created, these values cannot be changed.

**6. Benefits of Using `final` Variables**

*   **Improved Code Safety:**  Reduces the risk of accidental modification of critical values.
*   **Enhanced Code Readability:**  Clearly indicates the intended immutability of a variable.
*   **Increased Maintainability:**  Easier to understand and maintain code when you know that certain values will not change.
*   **Potential Performance Benefits:**  Allows the compiler to perform optimizations.

**7. Important Points to Remember**

*   `final` means "cannot be reassigned," not necessarily "immutable."
*   `final` variables *must* be initialized before object construction is complete.
*   `static final` variables are class-level constants.
*   Use `final` to protect configuration values and ensure the immutability of variables wherever appropriate.
*   Consider `final` as a tool to improve code clarity and safety.

**8. Practice Questions/Exercises**

1.  **Question:** What is the difference between a `final` variable and a `static final` variable? Provide code examples for both.

    **Answer:**
    *   A `final` variable is an instance-specific constant.  Its value cannot be changed *after* initialization but may be different for different instances of the class.
    *   A `static final` variable is a class-level constant.  It is initialized only once when the class is loaded, and its value is the same for all instances of the class.

    ```java
    class Example {
        final int instanceConstant;
        static final String CLASS_CONSTANT = "Hello"; // Constant - same for all Example objects

        public Example(int value) {
            this.instanceConstant = value; // Instance-specific constant
        }
    }
    ```

2.  **Question:** Explain why the following code might not compile and how to fix it:

    ```java
    class MyClass {
        final int x;

        public static void main(String[] args) {
            MyClass obj = new MyClass();
            System.out.println(obj.x);
        }
    }
    ```

    **Answer:** The code will not compile because the `final` variable `x` is not initialized. To fix it, you need to initialize `x` either at the point of declaration, in an instance initializer block, or in a constructor.  Here's a corrected version:

    ```java
    class MyClass {
        final int x;

        public MyClass() {
            this.x = 10; // Initialize in constructor
        }

        public static void main(String[] args) {
            MyClass obj = new MyClass();
            System.out.println(obj.x);
        }
    }
    ```

3.  **Question:** Can you modify the contents of an `ArrayList` referenced by a `final` variable? Explain your answer.

    **Answer:** Yes, you can modify the contents of an `ArrayList` referenced by a `final` variable.  The `final` keyword means that the *reference* to the `ArrayList` object cannot be changed to point to a different `ArrayList` object. However, the `ArrayList` object itself is mutable, so you can add, remove, or modify its elements.

4.  **Question:** Write a Java class `ImmutablePoint` that represents a point (x, y) where x and y are `final` double values. Provide getter methods for x and y.

    ```java
    class ImmutablePoint {
        private final double x;
        private final double y;

        public ImmutablePoint(double x, double y) {
            this.x = x;
            this.y = y;
        }

        public double getX() {
            return x;
        }

        public double getY() {
            return y;
        }
    }
    ```

5.  **Question:**  Why would you want to declare a reference to a collection (`List`, `Set`, `Map`) as `final`?

    **Answer:** Declaring the *reference* to a collection as `final` prevents you from reassigning the variable to a *different* collection instance. It doesn't make the collection itself immutable, but it guarantees that you'll always be working with the same collection object throughout its lifetime. This can be useful for maintaining data integrity, especially in multi-threaded environments or when you want to ensure that different parts of your code are operating on the same collection instance.  You would likely want to use other methods to make the actual collection *content* immutable if that was your intent.

These notes provide a comprehensive overview of `final` variables in OOP. Understanding the concepts and applying them correctly will lead to more robust, maintainable, and easier-to-understand code. Remember to practice using `final` variables in different scenarios to solidify your knowledge.
