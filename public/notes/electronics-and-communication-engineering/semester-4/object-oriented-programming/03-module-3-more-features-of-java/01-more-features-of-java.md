---
title: "More features of Java:"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: More features of Java:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe697"
status: "completed"
scrapedAt: "2026-05-23T17:51:41.312Z"
---
# Module 3: More Features of Java

## Introduction

Module 3 delves into the advanced features of Java, building upon the foundational object-oriented concepts introduced previously. This module aims to equip you with the knowledge and skills to write more robust, efficient, and well-structured Java programs. We will explore concepts such as abstract classes and interfaces, exception handling, multithreading, and the Java Collections Framework.

**Key Textbooks:**

*   *Java: The Complete Reference* by Herbert Schildt (8/e, 2011.)
*   *Java How to Program, Early Objects* by Paul Deitel, Harvey Deitel (11th Edition, 2018.)

**Reference Books:**

*   *Introduction to Java Programming* by Y. Daniel Liang (7/e, 2013.)
*   *Head First Java* by Sierra K. (2/e, 2005.)

---

## 1. Abstract Classes and Interfaces

This section covers advanced ways to achieve abstraction and define contracts in Java, contributing to CO1 and CO2.

### 1.1. Abstract Classes

**Key Concepts:**

*   **Abstract Class:** A class that cannot be instantiated (you cannot create an object of an abstract class). It is declared using the `abstract` keyword.
*   **Purpose:** To serve as a base class for other classes and to define a common interface for a group of related subclasses.
*   **Abstract Methods:** Methods declared without an implementation. They must be implemented by concrete (non-abstract) subclasses. An abstract class can have both abstract and concrete methods.
*   **Inheritance:** Subclasses inherit abstract methods and must provide an implementation for them.

**Syntax:**

```java
abstract class ClassName {
    // abstract methods
    abstract void methodName();

    // concrete methods
    void concreteMethod() {
        // implementation
    }
}
```

**Example (Schildt, 8/e, Chapter 7):**

```java
// Abstract class
abstract class Shape {
    // Abstract method
    abstract double area();

    // Concrete method
    void display() {
        System.out.println("This is a shape.");
    }
}

// Concrete subclass
class Circle extends Shape {
    double radius;

    Circle(double r) {
        radius = r;
    }

    // Implementing the abstract method
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

// Concrete subclass
class Rectangle extends Shape {
    double width, height;

    Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    // Implementing the abstract method
    @Override
    double area() {
        return width * height;
    }
}

public class AbstractDemo {
    public static void main(String[] args) {
        // Cannot instantiate abstract class:
        // Shape myShape = new Shape(); // Error

        Shape circle = new Circle(5.0);
        Shape rectangle = new Rectangle(4.0, 6.0);

        System.out.println("Circle Area: " + circle.area());
        circle.display();

        System.out.println("Rectangle Area: " + rectangle.area());
        rectangle.display();
    }
}
```

**Important Points:**

*   An abstract class can have constructors, but they can only be called from subclasses.
*   You cannot declare an abstract method as `static` or `final`.

### 1.2. Interfaces

**Key Concepts:**

*   **Interface:** A blueprint that defines a contract. It contains only abstract methods and constants. Since Java 8, interfaces can also contain default and static methods with implementations.
*   **Purpose:** To achieve pure abstraction and multiple inheritance of type. A class can implement multiple interfaces.
*   **Implementation:** A concrete class `implements` an interface and must provide an implementation for all its abstract methods.
*   **Keywords:** `interface` (to declare), `implements` (to implement).

**Syntax:**

```java
interface InterfaceName {
    // constants (implicitly public static final)
    int MAX_VALUE = 100;

    // abstract methods (implicitly public abstract)
    void method1();
    int method2(int x);

    // default method (Java 8+)
    default void defaultMethod() {
        System.out.println("Default implementation.");
    }

    // static method (Java 8+)
    static void staticMethod() {
        System.out.println("Static method.");
    }
}
```

**Example (Deitel & Deitel, 11th Ed., Chapter 9):**

```java
// Interface
interface Payable {
    double getPaymentAmount(); // abstract method
}

// Class implementing the interface
class Invoice implements Payable {
    private String partNumber;
    private String partDescription;
    private int quantity;
    private double pricePerItem;

    public Invoice(String partNumber, String partDescription, int quantity, double pricePerItem) {
        this.partNumber = partNumber;
        this.partDescription = partDescription;
        this.quantity = quantity;
        this.pricePerItem = pricePerItem;
    }

    @Override
    public double getPaymentAmount() {
        return quantity * pricePerItem;
    }

    @Override
    public String toString() {
        return "Invoice{" +
               "partNumber='" + partNumber + '\'' +
               ", partDescription='" + partDescription + '\'' +
               ", quantity=" + quantity +
               ", pricePerItem=" + pricePerItem +
               '}';
    }
}

// Another class implementing the interface
class Employee implements Payable {
    private String firstName;
    private String lastName;
    private String socialSecurityNumber;

    public Employee(String firstName, String lastName, String socialSecurityNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    @Override
    public double getPaymentAmount() {
        // In a real scenario, this would calculate salary, etc.
        return 5000.0; // Example payment
    }

    @Override
    public String toString() {
        return "Employee{" +
               "firstName='" + firstName + '\'' +
               ", lastName='" + lastName + '\'' +
               ", socialSecurityNumber='" + socialSecurityNumber + '\'' +
               '}';
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Payable payable1 = new Invoice("01234", "Screw", 100, 0.5);
        Payable payable2 = new Employee("John", "Doe", "123-456-7890");

        System.out.println(payable1.toString() + " owes $" + payable1.getPaymentAmount());
        System.out.println(payable2.toString() + " is paid $" + payable2.getPaymentAmount());

        // Using default method
        payable1.defaultMethod();
        // Using static method
        Payable.staticMethod();
    }
}
```

**Important Points:**

*   All members of an interface are implicitly `public`.
*   Methods in an interface are implicitly `abstract` unless declared `default` or `static`.
*   Interfaces define a "is-a" relationship in terms of capability, not necessarily in terms of concrete type inheritance. A class *can do* what the interface specifies.

---

## 2. Exception Handling

This section focuses on creating robust programs by gracefully handling runtime errors, aligning with CO3.

### 2.1. Fundamentals of Exception Handling

**Key Concepts:**

*   **Exception:** An event that disrupts the normal flow of a program's instructions. It's an object that describes an error.
*   **Throwable Class:** The superclass of all errors and exceptions in Java.
*   **Error:** Indicates serious problems that applications should not try to catch (e.g., `OutOfMemoryError`).
*   **Exception:** Can be caught and handled by the application.
*   **Checked Exceptions:** Exceptions that the compiler forces you to handle. They typically represent conditions that are outside the control of the program (e.g., `IOException`, `FileNotFoundException`).
*   **Unchecked Exceptions (Runtime Exceptions):** Exceptions that are not checked by the compiler. They typically represent programming errors (e.g., `NullPointerException`, `ArrayIndexOutOfBoundsException`).

**The `try-catch-finally` Mechanism:**

*   **`try` block:** Contains the code that might throw an exception.
*   **`catch` block:** Catches and handles a specific type of exception. You can have multiple `catch` blocks for different exception types.
*   **`finally` block:** Contains code that will always be executed, regardless of whether an exception occurred or not. It's often used for cleanup operations.

**Syntax:**

```java
try {
    // Code that might throw an exception
} catch (ExceptionType1 e1) {
    // Handle ExceptionType1
} catch (ExceptionType2 e2) {
    // Handle ExceptionType2
} finally {
    // Always executed code
}
```

**Example (Schildt, 8/e, Chapter 9):**

```java
import java.io.IOException; // Example of a checked exception

public class ExceptionDemo {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        int divisor = 0;

        try {
            System.out.println("Trying to divide...");
            // This line will cause an ArithmeticException
            int result = 10 / divisor;
            System.out.println("Result: " + result); // This line won't be reached

            // This line will cause an ArrayIndexOutOfBoundsException if uncommented
            // System.out.println(nums[5]);

            // Example of handling a checked exception (requires import and potentially try-catch around file operations)
            // FileReader file = new FileReader("nonexistent.txt");
            // file.read();
            // file.close();

        } catch (ArithmeticException e) {
            System.err.println("Error: Cannot divide by zero.");
            System.err.println(e.getMessage()); // Prints the error message of the exception
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("Error: Array index out of bounds.");
        } catch (Exception e) { // Catching a general Exception
            System.err.println("An unexpected error occurred.");
            e.printStackTrace(); // Prints the full stack trace
        } finally {
            System.out.println("This finally block is always executed.");
        }

        System.out.println("Program continues after exception handling.");
    }
}
```

**Important Points:**

*   The order of `catch` blocks is important: more specific exceptions should come before more general ones.
*   If an exception occurs in the `try` block, the rest of the code in the `try` block is skipped, and control is transferred to the appropriate `catch` block.
*   The `finally` block is guaranteed to execute, making it suitable for releasing resources.

### 2.2. Throwing Exceptions

**Key Concepts:**

*   **`throw` keyword:** Used to explicitly throw an exception object.
*   **`throws` keyword:** Used in a method signature to declare that the method might throw one or more checked exceptions. This forces the caller of the method to handle these exceptions.

**Syntax:**

```java
// Throwing an exception
throw new ExceptionType("Error message");

// Declaring exceptions in a method signature
void methodName() throws ExceptionType1, ExceptionType2 {
    // ...
}
```

**Example:**

```java
public class ThrowDemo {

    // Method that might throw a custom exception
    public static void validateAge(int age) throws IllegalArgumentException {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative.");
        } else if (age < 18) {
            throw new IllegalArgumentException("User must be 18 or older.");
        } else {
            System.out.println("Age is valid.");
        }
    }

    public static void main(String[] args) {
        try {
            validateAge(25);
            validateAge(-5); // This will throw an exception
        } catch (IllegalArgumentException e) {
            System.err.println("Validation Error: " + e.getMessage());
        }
    }
}
```

### 2.3. Custom Exceptions

**Key Concepts:**

*   **Custom Exception:** A user-defined exception class created by extending `Exception` (for checked exceptions) or `RuntimeException` (for unchecked exceptions).
*   **Benefits:** Allows for more specific and descriptive error handling tailored to your application's logic.

**Example:**

```java
// Custom Checked Exception
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

// Custom Unchecked Exception
class InvalidAccountStatusException extends RuntimeException {
    public InvalidAccountStatusException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    private static double balance = 1000;

    public static void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("You don't have enough funds. Available: " + balance);
        }
        balance -= amount;
        System.out.println("Withdrawal successful. New balance: " + balance);
    }

    public static void checkAccountStatus(String status) {
        if (!"ACTIVE".equals(status)) {
            throw new InvalidAccountStatusException("Account is not active. Status: " + status);
        }
        System.out.println("Account is active.");
    }

    public static void main(String[] args) {
        try {
            withdraw(500);
            withdraw(700); // This will throw InsufficientFundsException
        } catch (InsufficientFundsException e) {
            System.err.println("Transaction Error: " + e.getMessage());
        }

        try {
            checkAccountStatus("INACTIVE"); // This will throw InvalidAccountStatusException
        } catch (InvalidAccountStatusException e) {
            System.err.println("Account Error: " + e.getMessage());
        }
    }
}
```

---

## 3. Multithreading

This section explores how to execute multiple parts of a program concurrently, improving performance and responsiveness, relevant to CO2 and CO3.

### 3.1. Fundamentals of Multithreading

**Key Concepts:**

*   **Thread:** The smallest unit of execution within a process. A process can have multiple threads.
*   **Concurrency:** The ability to execute multiple tasks seemingly at the same time.
*   **Parallelism:** The actual simultaneous execution of multiple tasks, typically on multiple CPU cores.
*   **Benefits:** Improved performance, responsiveness, and resource utilization.

### 3.2. Creating Threads

There are two primary ways to create threads in Java:

1.  **Extending the `Thread` Class:**
    *   Create a class that extends `java.lang.Thread`.
    *   Override the `run()` method, which contains the code for the thread.
    *   Create an object of your thread class and call its `start()` method.

    **Example (Liang, 7/e, Chapter 16):**

    ```java
    class MyThread extends Thread {
        private String threadName;

        MyThread(String name) {
            threadName = name;
            System.out.println("Creating " + threadName);
        }

        // The code for the thread goes here
        @Override
        public void run() {
            System.out.println("Running " + threadName);
            try {
                for (int i = 5; i > 0; i--) {
                    System.out.println("Thread: " + threadName + ", " + i);
                    // Pause the thread for 50 milliseconds
                    Thread.sleep(50);
                }
            } catch (InterruptedException e) {
                System.out.println("Thread " + threadName + " interrupted.");
            }
            System.out.println("Thread " + threadName + " exiting.");
        }
    }

    public class ThreadExtendsDemo {
        public static void main(String[] args) {
            System.out.println("Main thread starting.");

            MyThread thread1 = new MyThread("Thread-1");
            MyThread thread2 = new MyThread("Thread-2");

            thread1.start(); // Start Thread-1 execution (calls run() internally)
            thread2.start(); // Start Thread-2 execution

            System.out.println("Main thread finished.");
            // Main thread continues its execution
        }
    }
    ```

2.  **Implementing the `Runnable` Interface:**
    *   Create a class that implements `java.lang.Runnable`.
    *   Implement the `run()` method, which contains the code for the thread.
    *   Create an object of your runnable class.
    *   Create a `Thread` object, passing the runnable object to its constructor.
    *   Call the `start()` method on the `Thread` object.

    **Example:**

    ```java
    class MyRunnable implements Runnable {
        private String threadName;

        MyRunnable(String name) {
            threadName = name;
            System.out.println("Creating " + threadName);
        }

        @Override
        public void run() {
            System.out.println("Running " + threadName);
            try {
                for (int i = 4; i > 0; i--) {
                    System.out.println("Thread: " + threadName + ", " + i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                System.out.println("Thread " + threadName + " interrupted.");
            }
            System.out.println("Thread " + threadName + " exiting.");
        }
    }

    public class RunnableDemo {
        public static void main(String[] args) {
            System.out.println("Main thread starting.");

            MyRunnable runnable1 = new MyRunnable("Thread-A");
            Thread threadA = new Thread(runnable1); // Pass runnable to Thread constructor

            MyRunnable runnable2 = new MyRunnable("Thread-B");
            Thread threadB = new Thread(runnable2);

            threadA.start();
            threadB.start();

            System.out.println("Main thread finished.");
        }
    }
    ```

    **Important:** It is generally preferred to implement `Runnable` because it allows your class to extend other classes, thus avoiding the limitation of single inheritance.

### 3.3. Thread Lifecycle

A thread can be in several states:

*   **New:** A thread is in the new state when an instance of `Thread` is created, but before the `start()` method is called.
*   **Runnable:** The thread is ready to run. The thread scheduler will decide when to execute it.
*   **Running:** The thread is currently executing its `run()` method.
*   **Blocked/Waiting:** The thread is temporarily unable to run, usually because it's waiting for an I/O operation to complete, waiting for a lock on a resource, or waiting for another thread to perform an action.
*   **Terminated:** The thread has finished its execution (either completed normally or terminated due to an exception).

### 3.4. Thread Synchronization

**Key Concepts:**

*   **Race Condition:** Occurs when multiple threads access shared data concurrently, and at least one of them modifies the data. The outcome depends on the unpredictable order of execution.
*   **Synchronization:** A mechanism to control access to shared resources by multiple threads, ensuring that only one thread can access a critical section of code at a time.
*   **`synchronized` Keyword:** Can be used to define synchronized methods or blocks.
    *   **Synchronized Method:** Only one thread can execute any synchronized method of the same object at a time.
    *   **Synchronized Block:** Allows you to synchronize only a specific block of code.

**Example (Schildt, 8/e, Chapter 11):**

```java
class Counter {
    private int count = 0;

    // Synchronized method
    public synchronized void increment() {
        count++;
        System.out.println(Thread.currentThread().getName() + " incremented to: " + count);
    }

    public int getCount() {
        return count;
    }
}

class CounterThread extends Thread {
    private Counter counter;
    private int iterations;

    CounterThread(String name, Counter counter, int iterations) {
        super(name);
        this.counter = counter;
        this.iterations = iterations;
    }

    @Override
    public void run() {
        System.out.println(getName() + " starting.");
        for (int i = 0; i < iterations; i++) {
            counter.increment();
            try {
                Thread.sleep(10); // Simulate some work
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt(); // Restore interrupt status
            }
        }
        System.out.println(getName() + " finishing.");
    }
}

public class SynchronizationDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter sharedCounter = new Counter();

        CounterThread t1 = new CounterThread("Thread-1", sharedCounter, 5);
        CounterThread t2 = new CounterThread("Thread-2", sharedCounter, 5);

        t1.start();
        t2.start();

        // Wait for both threads to complete
        t1.join();
        t2.join();

        System.out.println("Final counter value: " + sharedCounter.getCount());
    }
}
```

**Important Points:**

*   `Thread.sleep(milliseconds)`: Causes the currently executing thread to sleep for the specified amount of time.
*   `thread.join()`: Causes the calling thread to wait until the thread represented by `thread` terminates.
*   `Thread.currentThread().interrupt()`: Used to signal an interrupt to a thread. The `sleep()` method will throw `InterruptedException` if the thread is interrupted while sleeping.

---

## 4. Java Collections Framework (JCF)

The JCF provides a powerful and flexible way to store and manage groups of objects, contributing to CO2 and CO3.

### 4.1. Introduction to JCF

**Key Concepts:**

*   **Collection:** An object that represents a group of objects.
*   **Interfaces:** The core of JCF, defining the contract for collections (e.g., `Collection`, `List`, `Set`, `Map`).
*   **Implementations:** Concrete classes that implement these interfaces (e.g., `ArrayList`, `LinkedList`, `HashSet`, `HashMap`).
*   **Iterators:** An interface used to traverse collections.

### 4.2. Key Interfaces and Implementations

#### 4.2.1. `List` Interface

*   **Characteristics:** Ordered collection (maintains insertion order), allows duplicate elements.
*   **Key Implementations:**
    *   `ArrayList`: Dynamic array, good for random access, but slow for insertions/deletions in the middle.
    *   `LinkedList`: Doubly-linked list, good for insertions/deletions, but slower for random access.

**Example (Liang, 7/e, Chapter 11):**

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;

public class ListDemo {
    public static void main(String[] args) {
        // ArrayList of Strings
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Mango");
        fruits.add("Banana"); // Duplicate allowed

        System.out.println("Initial list: " + fruits);

        // Accessing elements
        System.out.println("Second fruit: " + fruits.get(1)); // Banana

        // Removing elements
        fruits.remove("Orange");
        System.out.println("After removing Orange: " + fruits);

        // Iterating using an Iterator
        System.out.println("Iterating through the list:");
        Iterator<String> iterator = fruits.iterator();
        while (iterator.hasNext()) {
            String fruit = iterator.next();
            System.out.println(fruit);
        }

        // Enhanced for loop (for-each loop)
        System.out.println("Using enhanced for loop:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

#### 4.2.2. `Set` Interface

*   **Characteristics:** Unordered collection (in general, except for `LinkedHashSet` and `TreeSet`), does not allow duplicate elements.
*   **Key Implementations:**
    *   `HashSet`: Unordered, uses hashing for efficient add/remove/contains.
    *   `LinkedHashSet`: Maintains insertion order, uses hashing and linked list.
    *   `TreeSet`: Stores elements in sorted order, uses a tree structure.

**Example:**

```java
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetDemo {
    public static void main(String[] args) {
        // HashSet
        Set<Integer> numbers = new HashSet<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(20); // Duplicate, will be ignored

        System.out.println("HashSet: " + numbers); // Order may vary

        // TreeSet
        Set<String> sortedNames = new TreeSet<>();
        sortedNames.add("Charlie");
        sortedNames.add("Alice");
        sortedNames.add("Bob");
        sortedNames.add("Alice"); // Duplicate, will be ignored

        System.out.println("TreeSet: " + sortedNames); // Sorted alphabetically
    }
}
```

#### 4.2.3. `Map` Interface

*   **Characteristics:** Stores key-value pairs. Keys must be unique.
*   **Key Implementations:**
    *   `HashMap`: Unordered, uses hashing for efficient operations.
    *   `LinkedHashMap`: Maintains insertion order.
    *   `TreeMap`: Stores entries in sorted order based on keys.

**Example:**

```java
import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {
        // HashMap to store student names and their IDs
        Map<String, Integer> studentIds = new HashMap<>();
        studentIds.put("Alice", 101);
        studentIds.put("Bob", 102);
        studentIds.put("Charlie", 103);
        studentIds.put("Alice", 104); // Key "Alice" already exists, value will be updated

        System.out.println("Student IDs: " + studentIds);

        // Accessing values
        System.out.println("Bob's ID: " + studentIds.get("Bob"));

        // Checking for key existence
        System.out.println("Does David exist? " + studentIds.containsKey("David"));

        // Iterating through the map
        System.out.println("Iterating through entries:");
        for (Map.Entry<String, Integer> entry : studentIds.entrySet()) {
            System.out.println("Name: " + entry.getKey() + ", ID: " + entry.getValue());
        }
    }
}
```

**Important Points about JCF:**

*   Generics (`<Type>`) are crucial for type safety when using collections.
*   Use the appropriate collection based on your requirements (ordering, uniqueness, performance needs).

---

## 5. Input/Output (I/O) Streams with Files

This section covers how to read from and write to files, a crucial aspect of robust program development, aligning with CO3.

### 5.1. Streams Overview

**Key Concepts:**

*   **Stream:** A sequence of data. Java streams are used to read from or write to various sources (files, network connections, memory).
*   **Input Stream:** Reads data from a source.
*   **Output Stream:** Writes data to a destination.
*   **Byte Streams:** Handle data byte by byte (e.g., `InputStream`, `OutputStream`, `FileInputStream`, `FileOutputStream`).
*   **Character Streams:** Handle data character by character (e.g., `Reader`, `Writer`, `FileReader`, `FileWriter`).

### 5.2. File I/O Operations

#### 5.2.1. Reading from Files

*   **`FileReader`:** Reads text files character by character.
*   **`BufferedReader`:** Wraps `FileReader` for efficient reading of text, providing methods like `readLine()`.

**Example (Schildt, 8/e, Chapter 16):**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReaderDemo {
    public static void main(String[] args) {
        String filePath = "myFile.txt"; // Ensure this file exists in your project directory

        // Create a dummy file for demonstration if it doesn't exist
        try {
            java.io.File file = new java.io.File(filePath);
            if (!file.exists()) {
                java.io.FileWriter writer = new java.io.FileWriter(filePath);
                writer.write("This is line 1.\n");
                writer.write("This is line 2.\n");
                writer.write("End of file.\n");
                writer.close();
                System.out.println("Created dummy file: " + filePath);
            }
        } catch (IOException e) {
            System.err.println("Error creating dummy file: " + e.getMessage());
        }

        // Reading the file
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            System.out.println("Reading from file: " + filePath);
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }
}
```

#### 5.2.2. Writing to Files

*   **`FileWriter`:** Writes text files character by character.
*   **`BufferedWriter`:** Wraps `FileWriter` for efficient writing.

**Example:**

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterDemo {
    public static void main(String[] args) {
        String filePath = "output.txt";

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            writer.write("Hello from Java I/O!\n");
            writer.write("Writing this to a file.\n");
            writer.write("Line number 3.\n");
            System.out.println("Successfully wrote to " + filePath);
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }
}
```

**Important Points:**

*   Always close streams when you are finished with them to release system resources. The `try-with-resources` statement (used in the examples above) automatically closes resources that implement `AutoCloseable`.
*   Handle `IOException` for file operations.
*   `FileInputStream` and `FileOutputStream` are used for binary data.

---

## 6. Practice Questions and Exercises

### Questions:

1.  **Abstract Classes vs. Interfaces:** Explain the key differences between abstract classes and interfaces in Java. When would you choose one over the other? (CO1)
2.  **Exception Handling:** What is the purpose of the `finally` block in exception handling? Provide an example where it is essential. (CO3)
3.  **Multithreading:** Differentiate between implementing the `Runnable` interface and extending the `Thread` class for creating threads. Which approach is generally preferred and why? (CO2)
4.  **Collections:** You need to store a list of student names where each name must be unique and stored in alphabetical order. Which Java Collection would be the most appropriate? Justify your answer. (CO2)
5.  **File I/O:** Write a Java program that reads a text file line by line and prints each line to the console, preceded by its line number. Handle potential `IOException`. (CO3)
6.  **Polymorphism:** Consider a scenario with `Shape` abstract class and `Circle`, `Rectangle` subclasses. How can you use polymorphism to process a collection of different shapes and calculate their areas without knowing the specific type of shape at compile time? (CO1, CO2)
7.  **Synchronization:** Explain a scenario where thread synchronization is necessary. How can the `synchronized` keyword help prevent race conditions? (CO2)

### Exercises:

1.  **Create an interface `Shape` with an abstract method `calculateArea()`.** Create concrete classes `Circle` and `Rectangle` that implement this interface. Write a `main` method that creates instances of `Circle` and `Rectangle`, adds them to a `List<Shape>`, and then iterates through the list to print the area of each shape.
2.  **Write a program that simulates a simple bank account.** Implement methods for `deposit` and `withdraw`. The `withdraw` method should throw a custom checked exception `InsufficientFundsException` if the withdrawal amount exceeds the balance. The `deposit` method should throw a custom unchecked exception `InvalidDepositAmountException` if the amount is negative. Ensure proper exception handling in the `main` method.
3.  **Create two threads:** one that prints even numbers from 1 to 20, and another that prints odd numbers from 1 to 20. Use `Thread.sleep()` to pause between printing numbers.

---

### Answers to Practice Questions:

1.  **Abstract Classes vs. Interfaces:**
    *   **Abstract Class:** Can have abstract and concrete methods, instance variables, constructors. Achieves partial abstraction. A class can extend only one abstract class. Represents an "is-a" relationship with shared implementation.
    *   **Interface:** Traditionally only abstract methods and constants (implicitly `public static final`). Since Java 8, can have `default` and `static` methods. Achieves pure abstraction. A class can implement multiple interfaces. Represents a "can-do" capability.
    *   **Choose Abstract Class when:** You want to share code (implementation, fields) among closely related classes.
    *   **Choose Interface when:** You want to define a contract that unrelated classes can implement, or when you need multiple inheritance of type.

2.  **Purpose of `finally` block:**
    *   The `finally` block is used to contain code that **must be executed** regardless of whether an exception occurred or was caught. It's crucial for releasing resources like file streams, network connections, or database connections, ensuring they are properly closed even if errors happen.
    *   **Example:**
        ```java
        FileReader reader = null;
        try {
            reader = new FileReader("myFile.txt");
            // ... read from file ...
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        } finally {
            if (reader != null) {
                try {
                    reader.close(); // Ensure the file is closed
                } catch (IOException e) {
                    System.err.println("Error closing file: " + e.getMessage());
                }
            }
        }
        ```
        *(Note: `try-with-resources` is a more modern and concise way to handle this.)*

3.  **`Runnable` vs. `Thread`:**
    *   **Extending `Thread`:** You create a class that inherits from `Thread` and overrides `run()`.
        *   **Pro:** Simple for basic cases.
        *   **Con:** Prevents your class from extending any other class (single inheritance limitation).
    *   **Implementing `Runnable`:** You create a class that implements `Runnable` and defines the `run()` method. Then, you create a `Thread` object, passing your `Runnable` instance to its constructor.
        *   **Pro:** More flexible. Allows your class to extend other classes. Separates the task (`Runnable`) from the thread execution mechanism (`Thread`). This is the preferred approach.
        *   **Con:** Slightly more verbose initially (requires creating a `Thread` object).

4.  **Appropriate Collection:**
    *   You need: unique elements, ordered storage (alphabetical).
    *   **`TreeSet<String>`** is the most appropriate.
        *   `Set` interface guarantees uniqueness.
        *   `TreeSet` implementation specifically maintains elements in their natural sorted order (alphabetical for Strings).
    *   `ArrayList` allows duplicates and insertion order. `HashSet` ensures uniqueness but doesn't guarantee order.

5.  **File Reading Program:**
    ```java
    import java.io.BufferedReader;
    import java.io.FileReader;
    import java.io.IOException;

    public class ReadFileWithLineNumbers {
        public static void main(String[] args) {
            String filePath = "myFile.txt"; // Make sure this file exists

            try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
                String line;
                int lineNumber = 1;
                System.out.println("Reading " + filePath + ":");
                while ((line = reader.readLine()) != null) {
                    System.out.println(lineNumber + ": " + line);
                    lineNumber++;
                }
            } catch (IOException e) {
                System.err.println("Error reading file: " + e.getMessage());
            }
        }
    }
    ```

6.  **Polymorphism Example:**
    ```java
    import java.util.ArrayList;
    import java.util.List;

    abstract class Shape {
        abstract double calculateArea();
        void displayType() { System.out.println("This is a generic shape."); }
    }

    class Circle extends Shape {
        double radius;
        Circle(double r) { this.radius = r; }
        @Override
        double calculateArea() { return Math.PI * radius * radius; }
        @Override
        void displayType() { System.out.println("This is a Circle."); }
    }

    class Rectangle extends Shape {
        double width, height;
        Rectangle(double w, double h) { this.width = w; this.height = h; }
        @Override
        double calculateArea() { return width * height; }
        @Override
        void displayType() { System.out.println("This is a Rectangle."); }
    }

    public class PolymorphicShapes {
        public static void main(String[] args) {
            List<Shape> shapes = new ArrayList<>();
            shapes.add(new Circle(5.0));
            shapes.add(new Rectangle(4.0, 6.0));
            shapes.add(new Circle(3.0));

            System.out.println("Processing shapes using polymorphism:");
            for (Shape shape : shapes) {
                shape.displayType(); // Calls the specific implementation
                System.out.println("Area: " + shape.calculateArea()); // Calls the specific implementation
                System.out.println("---");
            }
        }
    }
    ```
    This demonstrates that you can treat objects of different subclasses (`Circle`, `Rectangle`) uniformly as their base type (`Shape`). When you call `shape.calculateArea()`, the JVM determines at runtime which specific version of `calculateArea` to execute based on the actual object's type.

7.  **Synchronization Scenario:**
    *   **Scenario:** Imagine multiple threads trying to deposit money into the same bank account concurrently. If the `deposit` method is not synchronized, two threads might read the current balance simultaneously, calculate the new balance incorrectly (based on the old balance), and update it, leading to lost transactions.
    *   **How `synchronized` helps:** By marking the `deposit` method (or a block within it) as `synchronized`, you ensure that only one thread can execute that critical section of code at a time. When one thread enters the synchronized method, it acquires a lock on the object. Other threads attempting to enter any synchronized method on the same object will be blocked until the first thread exits the synchronized method and releases the lock. This guarantees that operations like reading balance, adding amount, and updating balance happen atomically, preventing race conditions.

---

## Module Summary and Key Takeaways

This module provided a deep dive into essential advanced Java features:

*   **Abstraction:** Mastered abstract classes and interfaces for designing flexible and extensible code.
*   **Exception Handling:** Learned to build robust applications by anticipating and managing runtime errors using `try-catch-finally`, `throw`, `throws`, and custom exceptions.
*   **Multithreading:** Understood the principles of concurrency and how to create and manage threads using `Thread` and `Runnable`, along with the importance of synchronization (`synchronized`) to prevent race conditions.
*   **Collections Framework:** Explored the power of the Java Collections Framework for efficient data management, focusing on `List`, `Set`, and `Map` interfaces and their common implementations.
*   **File I/O:** Gained proficiency in reading from and writing to files using streams, essential for persistent data storage and retrieval.

By understanding and applying these concepts, you are well-equipped to develop more sophisticated and reliable Java applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
