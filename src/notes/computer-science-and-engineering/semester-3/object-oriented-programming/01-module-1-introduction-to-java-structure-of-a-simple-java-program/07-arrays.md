---
title: "Arrays"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac8e"
status: "completed"
scrapedAt: "2026-05-20T16:26:22.186Z"
---
# Object Oriented Programming: Module 1 - Introduction to Java: Arrays

**Topic:** Arrays

**Description:** Introduction to arrays in Java, covering declaration, initialization, accessing elements, and common operations.

**Learning Outcomes:**

*   Understand the concept of an array.
*   Declare and initialize arrays in Java.
*   Access and modify array elements using their index.
*   Iterate through arrays using loops.
*   Understand the limitations of arrays (fixed size).
*   Use arrays in simple Java programs.

## 1. What is an Array?

*   **Definition:** An array is a data structure that stores a fixed-size sequential collection of elements of the *same* data type.
*   **Key Characteristics:**
    *   **Homogeneous:** All elements in an array must be of the same data type (e.g., all integers, all strings, all booleans).
    *   **Contiguous Memory Allocation:** Array elements are stored in consecutive memory locations. This allows for efficient access to elements using their index.
    *   **Fixed Size:** Once an array is created, its size cannot be changed.  (For dynamic resizing, use `ArrayList` or other dynamic data structures.)
    *   **Indexed Access:** Each element in the array is accessed using its index, which starts from 0.

## 2. Declaring Arrays in Java

*   **Syntax:** `dataType[] arrayName;`
*   **Explanation:**
    *   `dataType`:  Specifies the data type of the elements that the array will store (e.g., `int`, `String`, `double`).
    *   `[]`: Indicates that you are declaring an array.
    *   `arrayName`:  The name you choose for your array variable.
*   **Examples:**

    ```java
    int[] numbers;        // Declares an array of integers
    String[] names;         // Declares an array of Strings
    double[] prices;        // Declares an array of doubles
    boolean[] flags;       // Declares an array of booleans
    ```

*   **Note:** Declaration only creates a reference variable.  No memory is allocated at this point.

## 3. Initializing Arrays in Java

*   **Method 1: Using `new` keyword**
    *   **Syntax:** `arrayName = new dataType[arraySize];`
    *   **Explanation:**
        *   `new`:  Allocates memory space for the array based on the specified `arraySize`.
        *   `dataType`:  The data type of the elements.
        *   `arraySize`: The number of elements the array can hold.
    *   **Examples:**

        ```java
        numbers = new int[5];      // Creates an array of 5 integers (initialized to 0 by default)
        names = new String[3];      // Creates an array of 3 Strings (initialized to null by default)
        prices = new double[10];    // Creates an array of 10 doubles (initialized to 0.0 by default)
        flags = new boolean[2];     // Creates an array of 2 booleans (initialized to false by default)
        ```

*   **Method 2: Initializing with Values (Array Literal)**
    *   **Syntax:** `dataType[] arrayName = {value1, value2, value3, ...};`
    *   **Explanation:**
        *   Values are enclosed in curly braces `{}` and separated by commas.
        *   The array size is automatically determined by the number of values provided.
    *   **Examples:**

        ```java
        int[] numbers = {1, 2, 3, 4, 5};  // Creates an array of 5 integers with the specified values
        String[] names = {"Alice", "Bob", "Charlie"}; // Creates an array of 3 Strings
        double[] prices = {10.50, 20.75, 5.20};  // Creates an array of 3 doubles
        boolean[] flags = {true, false, true}; // Creates an array of 3 booleans
        ```

*   **Combined Declaration and Initialization:**

    ```java
    int[] numbers = new int[5];  // Separate declaration and initialization (size given)
    String[] names = {"Alice", "Bob", "Charlie"}; // Declaration and initialization using array literal
    ```

## 4. Accessing Array Elements

*   **Syntax:** `arrayName[index]`
*   **Explanation:**
    *   `arrayName`: The name of the array.
    *   `index`: The position of the element you want to access.  Indices start at 0 and go up to `arraySize - 1`.
*   **Examples:**

    ```java
    int[] numbers = {10, 20, 30, 40, 50};

    int firstElement = numbers[0];  // firstElement will be 10
    int thirdElement = numbers[2];  // thirdElement will be 30
    numbers[1] = 25;              // Changes the value of the second element to 25

    System.out.println("First Element: " + firstElement);
    System.out.println("Third Element: " + thirdElement);
    System.out.println("Second Element (after modification): " + numbers[1]);
    ```

*   **Important:** Accessing an element outside the valid index range (0 to `arraySize - 1`) will result in an `ArrayIndexOutOfBoundsException`.

## 5. Iterating Through Arrays Using Loops

*   **Using a `for` loop:**

    ```java
    int[] numbers = {1, 2, 3, 4, 5};

    for (int i = 0; i < numbers.length; i++) {
        System.out.println("Element at index " + i + ": " + numbers[i]);
    }
    ```

    *   `numbers.length`: Returns the number of elements in the array.  This is the standard way to iterate safely through the entire array.

*   **Using an Enhanced `for` loop (for-each loop):**

    ```java
    String[] names = {"Alice", "Bob", "Charlie"};

    for (String name : names) {
        System.out.println("Name: " + name);
    }
    ```

    *   The enhanced `for` loop simplifies iteration when you need to access each element but don't need the index.  It reads as "for each `String name` in `names`".

## 6. Limitations of Arrays (Fixed Size)

*   Arrays have a fixed size. Once an array is created, its size cannot be changed dynamically. If you need a data structure that can grow or shrink as needed, consider using `ArrayList` or other dynamic data structures.

## 7. Example Java Program Using Arrays

```java
public class ArrayExample {
    public static void main(String[] args) {
        // Declare and initialize an array of integers
        int[] scores = {85, 90, 78, 92, 88};

        // Calculate the sum of the scores
        int sum = 0;
        for (int score : scores) {
            sum += score;
        }

        // Calculate the average score
        double average = (double) sum / scores.length;

        // Print the average score
        System.out.println("Average score: " + average);

        //Find the highest score
        int highestScore = scores[0];
        for(int i = 1; i < scores.length; i++){
            if(scores[i] > highestScore){
                highestScore = scores[i];
            }
        }

        System.out.println("Highest score: " + highestScore);
    }
}
```

## 8. Important Points to Remember

*   Array indices start at 0.
*   Accessing an element outside the valid index range will throw an `ArrayIndexOutOfBoundsException`.
*   Arrays have a fixed size. Use `ArrayList` for dynamic resizing.
*   `arrayName.length` returns the number of elements in the array.
*   Arrays can store primitive data types (e.g., `int`, `double`, `boolean`) and objects (e.g., `String`).
*   When you create an array using `new`, the elements are initialized with default values (0 for numeric types, `false` for `boolean`, `null` for objects).

## 9. Practice Questions/Exercises

**Question 1:**

Write a Java program that takes an array of integers as input and prints the array in reverse order.

**Answer:**

```java
public class ReverseArray {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};

        System.out.println("Array in reverse order:");
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println(); // Add a newline at the end.
    }
}
```

**Question 2:**

Write a Java program that finds the minimum value in an array of integers.

**Answer:**

```java
public class FindMinimum {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 9};

        int min = numbers[0];  // Assume the first element is the minimum

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];  // Update min if a smaller element is found
            }
        }

        System.out.println("Minimum value: " + min);
    }
}
```

**Question 3:**

Write a Java program to check if a given number is present in an array.

**Answer:**

```java
public class CheckNumberPresent {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int numberToCheck = 30;
        boolean isPresent = false;

        for (int number : numbers) {
            if (number == numberToCheck) {
                isPresent = true;
                break;  // Exit the loop as soon as the number is found
            }
        }

        if (isPresent) {
            System.out.println(numberToCheck + " is present in the array.");
        } else {
            System.out.println(numberToCheck + " is not present in the array.");
        }
    }
}
