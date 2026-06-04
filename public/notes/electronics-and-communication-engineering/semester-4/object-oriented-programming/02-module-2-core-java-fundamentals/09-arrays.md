---
title: "Arrays"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe67e"
status: "completed"
scrapedAt: "2026-05-23T17:51:24.393Z"
---
# Object-Oriented Programming: Module 2 - Core Java Fundamentals: Arrays

## 1. Introduction to Arrays

### 1.1 What is an Array?

An array is a **fixed-size, sequential collection of elements of the same data type**. It allows you to store multiple values of the same type under a single variable name. Think of it as a row of mailboxes, where each mailbox is an index and holds a specific type of item (data).

**Key Concepts:**

*   **Element:** An individual item stored in an array.
*   **Index:** The position of an element within an array. In Java, array indices are **zero-based**, meaning the first element is at index 0, the second at index 1, and so on.
*   **Data Type:** All elements in an array must be of the same data type (e.g., `int`, `double`, `String`, `char`, custom objects).
*   **Size:** Arrays have a fixed size, meaning you must specify the number of elements the array can hold when you declare it. Once created, the size cannot be changed.

**Referenced Textbooks:**

*   **Java: The Complete Reference (Schildt, 8/e):** Explains arrays as contiguous blocks of memory, emphasizing their efficiency for random access.
*   **Java How to Program (Deitel & Deitel, 11th ed.):** Introduces arrays as a fundamental data structure for organizing and accessing related data.

### 1.2 Why Use Arrays?

*   **Efficiency:** Arrays provide efficient access to elements through their index (random access).
*   **Organization:** They help organize and manage related data more effectively than individual variables.
*   **Data Processing:** Arrays are essential for tasks like sorting, searching, and processing collections of data.

**Aligns with CO2 (Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs):** Arrays are a fundamental datatype and control structure for developing programs.

## 2. Declaring and Initializing Arrays

### 2.1 Declaring an Array

In Java, you declare an array by specifying its data type and name, followed by square brackets `[]`. There are two common ways to declare an array:

**Syntax 1: `dataType[] arrayRefVar;`**

```java
int[] numbers; // Declares a reference to an array of integers
String[] names; // Declares a reference to an array of strings
```

**Syntax 2: `dataType arrayRefVar[];`** (Less common, but valid)

```java
int numbers[]; // Declares a reference to an array of integers
```

**Important Note:** Declaring an array only creates a **reference variable**. It does not allocate memory for the array elements themselves.

### 2.2 Creating (Allocating Memory for) an Array

After declaring a reference variable, you must create the array object and allocate memory for its elements using the `new` keyword.

**Syntax:** `arrayRefVar = new dataType[arraySize];`

```java
// Declare and create an integer array of size 5
int[] numbers = new int[5];

// Declare and create a String array of size 10
String[] names = new String[10];
```

**Explanation:**

*   `new int[5]` creates an array object capable of holding 5 integers.
*   The `numbers` reference variable now points to this newly created array object.
*   When you create an array of primitive types, all elements are automatically initialized to their default values:
    *   `0` for numeric types (`int`, `byte`, `short`, `long`, `float`, `double`)
    *   `'\u0000'` for `char`
    *   `false` for `boolean`
*   When you create an array of object types, all elements are initialized to `null`.

### 2.3 Initializing an Array

You can initialize an array either at the time of declaration or after its creation.

#### 2.3.1 Initialization During Declaration

You can provide an initializer list within curly braces `{}`. The size of the array is implicitly determined by the number of elements in the initializer list.

**Syntax:** `dataType[] arrayRefVar = {element1, element2, ..., elementN};`

```java
// Integer array initialized during declaration
int[] ages = {25, 30, 22, 28, 35};

// String array initialized during declaration
String[] fruits = {"Apple", "Banana", "Cherry"};
```

**Important Note:** You cannot declare and then initialize using the initializer list syntax if you've already created the array using `new`.

**Incorrect:**

```java
int[] scores;
scores = {90, 85, 92}; // Error: Array creation must be separate
```

**Correct:**

```java
int[] scores;
scores = new int[]{90, 85, 92}; // Correct way to initialize after declaration
```

#### 2.3.2 Initialization After Creation

You can assign values to individual array elements using their index.

```java
int[] marks = new int[4]; // Create an array of size 4

marks[0] = 80;
marks[1] = 95;
marks[2] = 78;
marks[3] = 88;

// You can also use a loop for initialization
double[] prices = new double[3];
for (int i = 0; i < prices.length; i++) {
    prices[i] = (i + 1) * 10.5; // Example initialization
}
```

**Referenced Textbooks:**

*   **Fundamentals of Software Engineering (Mall, 4th ed.):** Discusses array declarations and initializations as foundational steps in data structure implementation.
*   **Core Java: An Integrated Approach (Nageswararao R.):** Provides practical examples of array declaration and initialization, covering both static and dynamic initialization.

## 3. Accessing Array Elements

You can access individual array elements using their index within square brackets.

**Syntax:** `arrayRefVar[index]`

```java
int[] numbers = {10, 20, 30, 40, 50};

// Accessing the element at index 2
int thirdElement = numbers[2]; // thirdElement will be 30

// Accessing the first element
int firstElement = numbers[0]; // firstElement will be 10

// Modifying an element
numbers[1] = 25; // The element at index 1 is now 25
```

**Important Point:** Accessing an array element outside its valid index range (i.e., an index less than 0 or greater than or equal to the array's length) will result in an `ArrayIndexOutOfBoundsException`.

## 4. Array Length

Every array in Java has a `length` **public final field** that returns the number of elements in the array.

**Syntax:** `arrayRefVar.length`

```java
int[] data = new int[7];
System.out.println("The length of the data array is: " + data.length); // Output: 7

String[] cities = {"New York", "London", "Paris"};
System.out.println("Number of cities: " + cities.length); // Output: 3
```

**Important Note:** `length` is a `final` variable, meaning its value cannot be changed after the array is created.

## 5. Iterating Through Arrays

Arrays are commonly traversed using loops, such as `for` loops and enhanced `for` loops (for-each loops).

### 5.1 Using a `for` Loop

This is the most common way to iterate through an array, especially when you need to access the index.

```java
int[] scores = {88, 92, 75, 90, 85};

System.out.println("Scores:");
for (int i = 0; i < scores.length; i++) {
    System.out.println("Score at index " + i + ": " + scores[i]);
}
```

### 5.2 Using the Enhanced `for` Loop (for-each loop)

This loop provides a simpler syntax for iterating through elements when you don't need the index.

```java
String[] colors = {"Red", "Green", "Blue"};

System.out.println("Colors:");
for (String color : colors) {
    System.out.println(color);
}
```

**Referenced Textbooks:**

*   **Java: The Complete Reference (Schildt, 8/e):** Covers array traversal using both traditional `for` loops and the enhanced `for` loop, highlighting their use cases.
*   **Head First Java (Sierra K.):** Uses engaging examples to illustrate array iteration and manipulation, making the concepts easy to grasp.

**Aligns with CO2 (Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs):** Loops are essential control statements for working with arrays.

## 6. Types of Arrays

Java supports arrays of primitive data types and arrays of objects.

### 6.1 Arrays of Primitive Types

These arrays store the actual primitive values.

```java
int[] integerArray = {1, 2, 3, 4, 5};
double[] doubleArray = {1.1, 2.2, 3.3};
boolean[] booleanArray = {true, false, true};
```

### 6.2 Arrays of Objects

These arrays store references to objects.

```java
String[] stringArray = {"Hello", "World"}; // Stores references to String objects
Scanner[] scannerArray = new Scanner[3]; // Stores references to Scanner objects (initially null)
```

When you create an array of objects, the array itself is an object, and its elements are references to other objects.

## 7. Multidimensional Arrays

A multidimensional array is an array of arrays. The most common is a two-dimensional array, which can be visualized as a table or a grid.

### 7.1 Two-Dimensional Arrays

#### 7.1.1 Declaration and Initialization

**Syntax:** `dataType[][] arrayRefVar = new dataType[rows][columns];`

```java
// Declare and create a 3x4 integer array
int[][] matrix = new int[3][4];

// Initialize elements
matrix[0][0] = 1;
matrix[1][2] = 5;
```

**Initialization during declaration:**

```java
int[][] board = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

#### 7.1.2 Accessing Elements

Accessing elements requires specifying both row and column indices.

```java
int element = matrix[row][column];
```

#### 7.1.3 Iterating Through a 2D Array

You typically use nested loops to iterate through a 2D array.

```java
int[][] table = {
    {10, 20, 30},
    {40, 50, 60}
};

for (int i = 0; i < table.length; i++) { // Iterate through rows
    for (int j = 0; j < table[i].length; j++) { // Iterate through columns in the current row
        System.out.print(table[i][j] + " ");
    }
    System.out.println(); // Move to the next line for the next row
}
```

**Ragged Arrays:** In Java, 2D arrays don't have to be rectangular. Each row can have a different number of columns. These are called ragged arrays.

```java
int[][] raggedArray = new int[3][]; // Rows are declared, but columns for each row are not
raggedArray[0] = new int[2]; // Row 0 has 2 columns
raggedArray[1] = new int[4]; // Row 1 has 4 columns
raggedArray[2] = new int[1]; // Row 2 has 1 column
```

**Referenced Textbooks:**

*   **Java How to Program (Deitel & Deitel, 11th ed.):** Dedicates a significant section to multidimensional arrays, with clear illustrations of their structure and manipulation.
*   **Introduction to Java Programming (Liang, 7/e):** Explains multidimensional arrays as an extension of one-dimensional arrays and provides examples for common applications like matrices.

**Aligns with CO2 (Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs):** Multidimensional arrays are an advanced use of datatypes and control statements.

## 8. Array Manipulation Methods (from `java.util.Arrays`)

The `java.util.Arrays` class provides several useful static methods for manipulating arrays. You need to `import java.util.Arrays;` to use them.

### 8.1 `sort()`

Sorts the specified array into ascending order. It works for arrays of primitive types and arrays of objects that implement `Comparable`.

```java
import java.util.Arrays;

int[] numbers = {5, 1, 4, 2, 8};
Arrays.sort(numbers);
System.out.println("Sorted array: " + Arrays.toString(numbers)); // Output: [1, 2, 4, 5, 8]

String[] names = {"Charlie", "Alice", "Bob"};
Arrays.sort(names);
System.out.println("Sorted names: " + Arrays.toString(names)); // Output: [Alice, Bob, Charlie]
```

### 8.2 `toString()`

Returns a string representation of the contents of the specified array. This is very useful for printing arrays.

```java
import java.util.Arrays;

int[] data = {10, 20, 30};
System.out.println("Array contents: " + Arrays.toString(data)); // Output: [10, 20, 30]
```

### 8.3 `fill()`

Assigns the specified value to each element of the specified array.

```java
import java.util.Arrays;

int[] arrayToFill = new int[5];
Arrays.fill(arrayToFill, 7);
System.out.println("Filled array: " + Arrays.toString(arrayToFill)); // Output: [7, 7, 7, 7, 7]
```

### 8.4 `binarySearch()`

Searches a sorted array for the specified value using a binary search algorithm. Returns the index of the search key if it is contained in the array; otherwise, `(-(insertion point) - 1)`.

**Precondition:** The array must be sorted.

```java
import java.util.Arrays;

int[] sortedNumbers = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
int key = 23;

int index = Arrays.binarySearch(sortedNumbers, key);

if (index >= 0) {
    System.out.println("Element " + key + " found at index: " + index); // Output: Element 23 found at index: 5
} else {
    System.out.println("Element " + key + " not found.");
}

key = 25;
index = Arrays.binarySearch(sortedNumbers, key);
System.out.println("Index for 25: " + index); // Output: Index for 25: -7 (insertion point is after 23 at index 5, so -(5+1)-1 = -7)
```

### 8.5 `copyOf()` and `copyOfRange()`

*   **`copyOf(originalArray, newLength)`:** Copies the contents of the original array into a new array of the specified `newLength`.
    *   If `newLength` is greater than the original length, the extra elements are initialized to their default values.
    *   If `newLength` is less than the original length, the array is truncated.
*   **`copyOfRange(originalArray, from, to)`:** Copies the specified range of the specified array into a new array. The `from` index is inclusive, and the `to` index is exclusive.

```java
import java.util.Arrays;

int[] original = {1, 2, 3, 4, 5};

// Copying the entire array
int[] copy1 = Arrays.copyOf(original, original.length);
System.out.println("copy1: " + Arrays.toString(copy1)); // Output: [1, 2, 3, 4, 5]

// Copying with a larger size (padding with zeros)
int[] copy2 = Arrays.copyOf(original, 7);
System.out.println("copy2: " + Arrays.toString(copy2)); // Output: [1, 2, 3, 4, 5, 0, 0]

// Copying a range (elements from index 1 up to, but not including, index 4)
int[] copyRange = Arrays.copyOfRange(original, 1, 4);
System.out.println("copyRange: " + Arrays.toString(copyRange)); // Output: [2, 3, 4]
```

**Referenced Textbooks:**

*   **Java: The Complete Reference (Schildt, 8/e):** Discusses the utility classes like `Arrays` and their methods for efficient array manipulation.
*   **Java in A Nutshell (Flanagan D):** Provides detailed descriptions of the `Arrays` class methods and their behavior.

**Aligns with CO2 (Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs):** These utility methods are essential for efficient program development.

## 9. Passing Arrays to Methods

You can pass arrays to methods, and methods can also return arrays.

### 9.1 Passing Arrays as Arguments

When you pass an array to a method, you are actually passing a **copy of the reference** to the array. This means that if the method modifies the array elements, the original array outside the method will also be modified.

```java
public class ArrayMethods {

    public static void modifyArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] *= 2; // Double each element
        }
    }

    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("Original array: " + Arrays.toString(numbers));

        modifyArray(numbers); // Pass the array to the method

        System.out.println("Array after modification: " + Arrays.toString(numbers));
        // Output: Array after modification: [2, 4, 6, 8, 10]
    }
}
```

### 9.2 Returning Arrays from Methods

A method can return an array.

```java
import java.util.Arrays;

public class ArrayReturn {

    public static int[] createArray(int size) {
        int[] newArray = new int[size];
        for (int i = 0; i < size; i++) {
            newArray[i] = i * 5;
        }
        return newArray; // Return the newly created array
    }

    public static void main(String[] args) {
        int[] generatedArray = createArray(6);
        System.out.println("Generated array: " + Arrays.toString(generatedArray));
        // Output: Generated array: [0, 5, 10, 15, 20, 25]
    }
}
```

**Referenced Textbooks:**

*   **Core Java: An Integrated Approach (Nageswararao R.):** Demonstrates how to pass arrays to methods and retrieve array results, emphasizing the pass-by-reference behavior for arrays.
*   **Programming JAVA a Primer (Balagurusamy E):** Explains the concept of passing arrays to functions (methods) and how modifications within the function affect the original array.

**Aligns with CO2 (Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs):** This demonstrates the use of arrays as data types in method signatures and return types.

## 10. Array of Objects

Arrays can also hold objects.

```java
class Student {
    String name;
    int rollNo;

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    @Override
    public String toString() {
        return "Student{" +
               "name='" + name + '\'' +
               ", rollNo=" + rollNo +
               '}';
    }
}

public class ArrayOfObjects {
    public static void main(String[] args) {
        // Declare and create an array of Student objects
        Student[] students = new Student[3];

        // Initialize each element with a new Student object
        students[0] = new Student("Alice", 101);
        students[1] = new Student("Bob", 102);
        students[2] = new Student("Charlie", 103);

        // Accessing and printing object properties
        for (Student s : students) {
            System.out.println(s.name + " - Roll No: " + s.rollNo);
        }

        // Using toString() for a cleaner output
        System.out.println("\nStudent details:");
        for (Student s : students) {
            System.out.println(s);
        }
    }
}
```

**Referenced Textbooks:**

*   **Head First Java (Sierra K.):** Provides an intuitive approach to understanding arrays of objects, relating them to collections of related items.
*   **Object Oriented Systems Development using the Unified Modeling Language (Bahrami Ali):** While focusing on UML, it implicitly touches upon how objects are managed and can be collected in structures like arrays within object-oriented systems.

**Aligns with CO1 (Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism and to illustrate it using UML diagrams) and CO2:** Arrays of objects combine the concept of objects with array data structures.

## 11. Important Points to Remember

*   **Zero-based indexing:** Array indices start from 0.
*   **Fixed size:** The size of an array is determined at creation and cannot be changed. If you need a dynamically sized collection, consider using `ArrayList`.
*   **Homogeneous data:** All elements in an array must be of the same data type.
*   **`ArrayIndexOutOfBoundsException`:** Occurs when you try to access an array element using an invalid index.
*   **`length` field:** Use `arrayName.length` to get the number of elements.
*   **`java.util.Arrays` class:** Provides essential utility methods for array manipulation.
*   **Pass by reference (for array references):** When passing arrays to methods, changes to the array's contents within the method affect the original array.

## 12. Practice Questions and Exercises

**Multiple Choice Questions:**

1.  What is the default value of an `int` element in a newly created array in Java?
    a) `null`
    b) `0`
    c) `false`
    d) `0.0`

2.  Which of the following is the correct way to declare an array of strings?
    a) `String arr[];`
    b) `String[] arr;`
    c) `arr String[];`
    d) Both a and b

3.  If an array is declared as `int[][] matrix = new int[3][4];`, how many elements does it contain?
    a) 7
    b) 12
    c) 3
    d) 4

4.  What exception will be thrown if you try to access `myArray[myArray.length]`?
    a) `NullPointerException`
    b) `IndexOutOfBoundsException`
    c) `ArrayStoreException`
    d) No exception, it's valid.

5.  Which method from `java.util.Arrays` can be used to sort an array?
    a) `sortArray()`
    b) `arrange()`
    c) `sort()`
    d) `order()`

**Short Answer Questions:**

1.  Explain the concept of zero-based indexing in Java arrays.
2.  What is the difference between declaring an array and creating an array in Java?
3.  How can you initialize an array with values during its declaration?
4.  What is a ragged array in Java? Provide a small example.
5.  Describe the behavior when passing an array to a method in Java.

**Programming Exercises:**

1.  **Sum and Average:** Write a Java program that declares an integer array, initializes it with 5 numbers, and then calculates and prints the sum and average of its elements.
2.  **Find Maximum:** Write a Java program that declares a double array, initializes it, and finds and prints the largest element in the array.
3.  **Reverse Array:** Write a Java program that takes an array of integers and prints the elements in reverse order.
4.  **Matrix Multiplication (Conceptual):** Write a Java program that declares two 2x2 integer matrices and prints their sum (element-wise addition). *This is a simplified version of matrix multiplication for practice.*
5.  **Search Element:** Write a Java program that searches for a specific integer within an array using a `for` loop. If the element is found, print its index; otherwise, print a "not found" message.

---

## Answers

**Multiple Choice Questions:**

1.  b) `0`
2.  d) Both a and b
3.  b) 12
4.  b) `IndexOutOfBoundsException`
5.  c) `sort()`

**Short Answer Questions:**

1.  **Zero-based indexing:** In Java arrays, the first element is located at index 0, the second at index 1, and so on. The last element is at index `length - 1`.
2.  **Declaring vs. Creating:** Declaring an array (`int[] myArray;`) only creates a reference variable that can hold an array. Creating an array (`myArray = new int[10];`) allocates memory for the array elements and assigns the reference.
3.  **Initialization during declaration:** You can use an initializer list within curly braces: `int[] numbers = {10, 20, 30};`.
4.  **Ragged array:** A ragged array is a multidimensional array where each row can have a different number of columns. Example: `int[][] ragged = { {1, 2}, {3, 4, 5}, {6} };`
5.  **Passing arrays to methods:** When an array is passed to a method, a copy of the reference to the array is passed. This means that modifications made to the array's elements within the method will be reflected in the original array outside the method.

**Programming Exercises (Conceptual Code Snippets):**

1.  **Sum and Average:**
    ```java
    import java.util.Arrays;

    public class ArraySumAverage {
        public static void main(String[] args) {
            int[] numbers = {10, 20, 30, 40, 50};
            int sum = 0;
            for (int num : numbers) {
                sum += num;
            }
            double average = (double) sum / numbers.length;
            System.out.println("Sum: " + sum);
            System.out.println("Average: " + average);
        }
    }
    ```
2.  **Find Maximum:**
    ```java
    import java.util.Arrays;

    public class ArrayMax {
        public static void main(String[] args) {
            double[] data = {1.5, 3.2, 0.9, 4.1, 2.8};
            double max = data[0]; // Assume first element is max initially
            for (int i = 1; i < data.length; i++) {
                if (data[i] > max) {
                    max = data[i];
                }
            }
            System.out.println("Maximum element: " + max);
        }
    }
    ```
3.  **Reverse Array:**
    ```java
    import java.util.Arrays;

    public class ReverseArray {
        public static void main(String[] args) {
            int[] original = {1, 2, 3, 4, 5};
            System.out.println("Original array: " + Arrays.toString(original));
            System.out.print("Reversed array: ");
            for (int i = original.length - 1; i >= 0; i--) {
                System.out.print(original[i] + " ");
            }
            System.out.println();
        }
    }
    ```
4.  **Matrix Sum (Conceptual):**
    ```java
    import java.util.Arrays;

    public class MatrixSum {
        public static void main(String[] args) {
            int[][] matrix1 = {{1, 2}, {3, 4}};
            int[][] matrix2 = {{5, 6}, {7, 8}};
            int[][] sumMatrix = new int[2][2];

            for (int i = 0; i < 2; i++) {
                for (int j = 0; j < 2; j++) {
                    sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
                }
            }

            System.out.println("Sum Matrix:");
            for (int i = 0; i < 2; i++) {
                System.out.println(Arrays.toString(sumMatrix[i]));
            }
        }
    }
    ```
5.  **Search Element:**
    ```java
    import java.util.Arrays;

    public class SearchElement {
        public static void main(String[] args) {
            int[] numbers = {15, 22, 8, 45, 19};
            int target = 45;
            boolean found = false;
            int foundIndex = -1;

            for (int i = 0; i < numbers.length; i++) {
                if (numbers[i] == target) {
                    found = true;
                    foundIndex = i;
                    break; // Stop searching once found
                }
            }

            if (found) {
                System.out.println("Element " + target + " found at index: " + foundIndex);
            } else {
                System.out.println("Element " + target + " not found.");
            }
        }
    }

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
