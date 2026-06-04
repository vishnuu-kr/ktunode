---
title: "Vector class"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac90"
status: "completed"
scrapedAt: "2026-05-20T16:26:55.021Z"
---
## Object-Oriented Programming: Module 1 - Vector Class

**Module:** Module 1: Introduction to Java: Structure of a simple java program
**Topic:** Vector Class

**Description:** This module covers the Vector class, an important part of the Java Collections Framework, focusing on its functionality and usage within the context of introductory Java programming.

**Learning Outcomes:**

*   Understand the purpose and benefits of using the `Vector` class.
*   Learn how to create and initialize `Vector` objects.
*   Master adding, accessing, modifying, and removing elements from a `Vector`.
*   Understand the concept of capacity and size in a `Vector`.
*   Differentiate `Vector` from other similar collection classes like `ArrayList`.
*   Understand the concept of generics and how to use them with `Vector` for type safety.

---

### 1. Introduction to the Vector Class

*   **Definition:** The `Vector` class is a dynamic array implementation in Java. It is part of the `java.util` package and implements the `List` interface. Unlike a fixed-size array, a `Vector` can grow or shrink dynamically as needed.

*   **Key Concepts:**
    *   **Dynamic Array:** Automatically resizes itself when elements are added or removed.
    *   **Legacy Class:** Introduced in Java 1.0.
    *   **Synchronized:** Methods in the `Vector` class are synchronized, meaning they are thread-safe.  This synchronization can lead to performance overhead.
    *   **Ordered Collection:** Elements are stored in the order they are added.
    *   **Allows Duplicates:** `Vector` can contain duplicate elements.
    *   **`List` Interface Implementation:**  Inherits methods like `add()`, `remove()`, `get()`, `set()`, `size()`, etc. from the `List` interface.

*   **Benefits of using Vector:**
    *   **Dynamic Size:**  Handles changes in data size without manual resizing.
    *   **Thread Safety:**  Built-in synchronization makes it suitable for multi-threaded environments (though `ArrayList` with explicit synchronization mechanisms might be preferred for better performance in most modern applications).
    *   **Convenient Methods:** Offers methods for easily manipulating elements.

### 2. Creating and Initializing Vector Objects

*   **Importing the Vector Class:**
    ```java
    import java.util.Vector;
    ```

*   **Constructors:**

    *   **`Vector()`:** Creates an empty vector with the default initial capacity (usually 10) and a capacity increment of 0.
        ```java
        Vector<String> myVector = new Vector<>();
        ```

    *   **`Vector(int initialCapacity)`:** Creates an empty vector with the specified initial capacity and a capacity increment of 0.
        ```java
        Vector<Integer> myVector = new Vector<>(20); // Initial capacity of 20
        ```

    *   **`Vector(int initialCapacity, int capacityIncrement)`:** Creates an empty vector with the specified initial capacity and capacity increment. The capacity increment specifies how much the vector's capacity should increase when it needs to grow.
        ```java
        Vector<Double> myVector = new Vector<>(10, 5); // Initial capacity of 10, increment of 5
        ```

    *   **`Vector(Collection<? extends E> c)`:** Creates a vector containing the elements of the specified collection, in the order they are returned by the collection's iterator.
        ```java
        import java.util.ArrayList;
        import java.util.Vector;

        public class VectorInitialization {
            public static void main(String[] args) {
                // Initialize an ArrayList
                ArrayList<String> arrayList = new ArrayList<>();
                arrayList.add("Apple");
                arrayList.add("Banana");
                arrayList.add("Cherry");

                // Create a Vector from the ArrayList
                Vector<String> vectorFromArrayList = new Vector<>(arrayList);

                // Print the contents of the Vector
                System.out.println("Vector from ArrayList: " + vectorFromArrayList);
            }
        }

        ```

### 3. Adding, Accessing, Modifying, and Removing Elements

*   **Adding Elements:**

    *   **`add(E e)`:** Appends the specified element to the end of this vector.
        ```java
        Vector<String> myVector = new Vector<>();
        myVector.add("Java");
        myVector.add("Python");
        ```

    *   **`add(int index, E element)`:** Inserts the specified element at the specified position in this vector.
        ```java
        myVector.add(1, "C++"); // Inserts "C++" at index 1
        ```

    *   **`addElement(E obj)`:** Same as `add(E e)`, but more commonly used in older code.
        ```java
        myVector.addElement("JavaScript");
        ```

*   **Accessing Elements:**

    *   **`get(int index)`:** Returns the element at the specified position in this vector.
        ```java
        String element = myVector.get(0); // Returns "Java"
        System.out.println(element);
        ```

    *   **`elementAt(int index)`:** Same as `get(int index)`, but more commonly used in older code.
        ```java
        String elementAt = myVector.elementAt(0);
        System.out.println(elementAt);
        ```

    *   **`firstElement()`:** Returns the first component (item) of this vector.
        ```java
        String firstElement = myVector.firstElement();
        System.out.println(firstElement);
        ```

    *   **`lastElement()`:** Returns the last component (item) of this vector.
        ```java
        String lastElement = myVector.lastElement();
        System.out.println(lastElement);
        ```

*   **Modifying Elements:**

    *   **`set(int index, E element)`:** Replaces the element at the specified position in this vector with the specified element.
        ```java
        myVector.set(0, "Kotlin"); // Replaces "Java" with "Kotlin"
        ```

    *   **`setElementAt(E obj, int index)`:**  Same as `set(int index, E element)`, but more commonly used in older code.
        ```java
        myVector.setElementAt("Ruby", 1);
        ```

*   **Removing Elements:**

    *   **`remove(int index)`:** Removes the element at the specified position in this vector.
        ```java
        myVector.remove(1); // Removes the element at index 1
        ```

    *   **`remove(Object o)`:** Removes the first occurrence of the specified element from this vector, if it is present.
        ```java
        myVector.remove("Python");
        ```

    *   **`removeElementAt(int index)`:** Same as `remove(int index)`, but more commonly used in older code.
        ```java
        myVector.removeElementAt(0);
        ```

    *   **`removeAllElements()`:** Removes all components from this vector and sets its size to zero.
        ```java
        myVector.removeAllElements();
        ```

### 4. Capacity and Size

*   **Size:** The number of elements currently stored in the `Vector`. Obtained using the `size()` method.
    ```java
    int size = myVector.size(); // Returns the number of elements
    ```

*   **Capacity:** The total number of elements that the `Vector` can hold before it needs to allocate more memory.  Obtained using the `capacity()` method.
    ```java
    int capacity = myVector.capacity(); // Returns the current capacity
    ```

*   **Capacity Increment:** The amount by which the capacity of the vector is automatically incremented when its size becomes greater than its capacity. If the capacity increment is less than or equal to zero, the capacity of the vector is doubled each time it needs to grow.

*   **Ensuring Capacity:**
    *   **`ensureCapacity(int minCapacity)`:** Increases the capacity of this vector, if necessary, to ensure that it can hold at least the number of components specified by the minimum capacity argument.
        ```java
        myVector.ensureCapacity(50); // Ensures capacity is at least 50
        ```

*   **Trimming to Size:**
    *   **`trimToSize()`:** Trims the capacity of this vector to be the vector's current size. An application can use this operation to minimize the storage of a vector.
        ```java
        myVector.trimToSize(); // Reduces capacity to match the size
        ```

*   **Example:**
    ```java
    import java.util.Vector;

    public class VectorCapacity {
        public static void main(String[] args) {
            Vector<Integer> myVector = new Vector<>(5, 2); // Initial capacity 5, increment 2

            System.out.println("Initial Size: " + myVector.size());
            System.out.println("Initial Capacity: " + myVector.capacity());

            myVector.add(1);
            myVector.add(2);
            myVector.add(3);
            myVector.add(4);
            myVector.add(5);

            System.out.println("Size after adding 5 elements: " + myVector.size());
            System.out.println("Capacity after adding 5 elements: " + myVector.capacity());

            myVector.add(6); // This will trigger capacity increase

            System.out.println("Size after adding 6th element: " + myVector.size());
            System.out.println("Capacity after adding 6th element: " + myVector.capacity());

            myVector.trimToSize();
            System.out.println("Capacity after trimToSize(): " + myVector.capacity());

        }
    }
    ```

### 5. Vector vs. ArrayList

| Feature          | `Vector`                                 | `ArrayList`                               |
| ---------------- | ---------------------------------------- | ------------------------------------------ |
| Synchronization  | Synchronized (thread-safe)                | Not synchronized (not thread-safe)         |
| Performance      | Generally slower due to synchronization | Generally faster                            |
| Growth           | Doubles capacity when full or increments based on capacityIncrement | Increases capacity by about 50% when full |
| Legacy           | Yes (Java 1.0)                           | Introduced in Java 1.2                     |

*   **Important Note:** In most modern applications, `ArrayList` is preferred over `Vector` due to its better performance.  If thread safety is required, use `ArrayList` with explicit synchronization mechanisms (e.g., `Collections.synchronizedList()`) or `CopyOnWriteArrayList`.

### 6. Generics and Type Safety

*   **Generics:**  Using generics with `Vector` allows you to specify the type of elements that the `Vector` will store, providing compile-time type safety.
    ```java
    Vector<String> stringVector = new Vector<>(); // Vector to hold only Strings
    stringVector.add("Hello");
    // stringVector.add(123); // Compile-time error: Cannot add an Integer to a String Vector
    ```

*   **Benefits of using Generics:**
    *   **Compile-time Type Safety:** Prevents storing elements of incorrect types.
    *   **No Need for Casting:**  You don't need to cast elements when retrieving them from the `Vector`.
        ```java
        String str = stringVector.get(0); // No casting needed
        ```

### 7.  Important Points to Remember

*   `Vector` is a legacy class and is generally less efficient than `ArrayList`.
*   `Vector` is synchronized, making it thread-safe but slower.
*   Use generics to enforce type safety and avoid casting.
*   Understand the difference between size and capacity.
*   Consider `ArrayList` with explicit synchronization mechanisms or `CopyOnWriteArrayList` if thread safety is needed with better performance.

### Practice Questions/Exercises

**Question 1:** Write a Java program to create a `Vector` of integers, add the numbers 10, 20, 30, 40, and 50, and then print the size and capacity of the `Vector`.

**Answer:**

```java
import java.util.Vector;

public class VectorExercise1 {
    public static void main(String[] args) {
        Vector<Integer> myVector = new Vector<>();
        myVector.add(10);
        myVector.add(20);
        myVector.add(30);
        myVector.add(40);
        myVector.add(50);

        System.out.println("Size: " + myVector.size());
        System.out.println("Capacity: " + myVector.capacity());
    }
}
```

**Question 2:**  Write a Java program to create a `Vector` of strings, add three names, and then remove the name at index 1. Print the remaining names.

**Answer:**

```java
import java.util.Vector;

public class VectorExercise2 {
    public static void main(String[] args) {
        Vector<String> names = new Vector<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        names.remove(1); // Remove Bob

        for (String name : names) {
            System.out.println(name);
        }
    }
}
```

**Question 3:**  Explain the difference between the `size()` and `capacity()` methods of the `Vector` class.

**Answer:**

*   `size()` returns the number of elements currently stored in the `Vector`.
*   `capacity()` returns the total number of elements the `Vector` can hold before it needs to allocate more memory. The capacity is always greater than or equal to the size.

**Question 4:** When would you choose to use a `Vector` over an `ArrayList`? Explain your reasoning.

**Answer:**

Historically, `Vector` was chosen primarily when built-in thread safety was a necessity and one was working in Java 1.0 timeframe. Now, a more appropriate answer would be "rarely."
While `Vector` provides built-in synchronization, `ArrayList` with explicit synchronization mechanisms (`Collections.synchronizedList()`) or `CopyOnWriteArrayList` are preferred due to their potential for better performance. So, using `Vector` would almost always be a suboptimal choice.
One potential edge case might be dealing with some legacy code which makes heavy use of the `Vector` class that requires thread-safety. But, even in that case, one should consider refactoring toward more modern techniques.

**Question 5:**  Write a Java program to create a `Vector` of doubles with initial capacity 5 and a capacity increment of 2. Add 7 numbers to the vector, and then output the capacity.

**Answer:**

```java
import java.util.Vector;

public class VectorExercise5 {
    public static void main(String[] args) {
        Vector<Double> numbers = new Vector<>(5, 2);
        numbers.add(1.1);
        numbers.add(2.2);
        numbers.add(3.3);
        numbers.add(4.4);
        numbers.add(5.5);
        numbers.add(6.6);
        numbers.add(7.7);

        System.out.println("Capacity: " + numbers.capacity()); //Expected capacity is 9
    }
}
