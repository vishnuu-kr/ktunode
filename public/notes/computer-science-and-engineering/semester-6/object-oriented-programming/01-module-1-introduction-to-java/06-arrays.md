---
title: "Arrays"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf88"
status: "completed"
scrapedAt: "2026-05-20T16:55:49.931Z"
---
# Module 1: Introduction to Java - Arrays

## 1. Introduction to Arrays

### 1.1 What is an Array?

*   An **array** is a **fixed-size, contiguous memory location** that stores elements of the **same data type**.
*   It's a **collection of variables** of the same type, accessed using an **index**.
*   Think of it like a row of mailboxes, each with a number (index) and holding letters (elements) of the same kind (data type).

### 1.2 Why Use Arrays?

*   **Efficient Storage:** Store multiple values of the same type in a single variable.
*   **Easy Access:** Access elements directly using their index.
*   **Data Organization:** Provides a structured way to manage related data.
*   **Iterative Processing:** Facilitates looping through and processing collections of data.

## 2. Declaring and Initializing Arrays

### 2.1 Declaring an Array

*   You need to specify the **data type** of the elements and the **name** of the array.
*   There are two common syntaxes for declaration:

    *   **Syntax 1 (Recommended):** `dataType[] arrayName;`
        ```java
        int[] numbers; // Declares an array named 'numbers' that will hold integers.
        String[] names; // Declares an array named 'names' that will hold Strings.
        double[] prices; // Declares an array named 'prices' that will hold double-precision floating-point numbers.
        ```

    *   **Syntax 2:** `dataType arrayName[];`
        ```java
        int numbers[];
        String names[];
        double prices[];
        ```
        *Note: While valid, Syntax 1 is generally preferred for clarity as it clearly indicates that `numbers`, `names`, and `prices` are arrays.*

### 2.2 Creating (Allocating Memory) an Array

*   After declaration, you need to **create** the array to allocate memory for its elements.
*   This is done using the `new` keyword, specifying the **data type** and the **size** of the array.

    ```java
    arrayName = new dataType[size];
    ```

    *   `size` is the number of elements the array can hold. It must be a non-negative integer.
    *   The size of an array is fixed once it's created.

    **Example:**
    ```java
    int[] numbers = new int[5]; // Creates an array of 5 integers.
    String[] names = new String[10]; // Creates an array of 10 Strings.
    ```

### 2.3 Initializing an Array

*   Initialization means assigning values to the elements of the array.

    *   **Direct Initialization (with values):** You can initialize an array with specific values at the time of creation.
        ```java
        // Syntax 1
        dataType[] arrayName = {value1, value2, value3, ...};

        // Syntax 2
        dataType arrayName[] = {value1, value2, value3, ...};
        ```
        **Examples:**
        ```java
        int[] scores = {90, 85, 78, 92, 88}; // Initializes with 5 integer values.
        String[] fruits = {"Apple", "Banana", "Orange"}; // Initializes with 3 String values.
        ```

    *   **Initialization after Creation:** You can assign values to individual elements using their index.
        ```java
        dataType[] arrayName = new dataType[size];
        arrayName[0] = value1;
        arrayName[1] = value2;
        // ...
        ```
        **Example:**
        ```java
        int[] ages = new int[4];
        ages[0] = 25;
        ages[1] = 30;
        ages[2] = 22;
        ages[3] = 28;
        ```

    *   **Default Values:** If you create an array without explicit initialization, Java assigns default values to its elements:
        *   `0` for numeric types (byte, short, int, long, float, double)
        *   `'\u0000'` (null character) for `char`
        *   `false` for `boolean`
        *   `null` for object types (like `String`)

        **Example:**
        ```java
        int[] defaultNumbers = new int[3]; // defaultNumbers will be {0, 0, 0}
        String[] defaultNames = new String[2]; // defaultNames will be {null, null}
        ```

## 3. Accessing Array Elements

*   Array elements are accessed using their **index**, which starts from **0**.
*   The syntax is: `arrayName[index]`

    **Example:**
    ```java
    int[] numbers = {10, 20, 30, 40, 50};

    System.out.println(numbers[0]); // Output: 10 (first element)
    System.out.println(numbers[2]); // Output: 30 (third element)
    System.out.println(numbers[4]); // Output: 50 (last element)
    ```

*   **Index Out of Bounds Exception:**
    *   Attempting to access an element outside the valid index range (0 to `size - 1`) will result in an `ArrayIndexOutOfBoundsException`.

    **Example:**
    ```java
    int[] data = new int[3]; // Valid indices are 0, 1, 2
    // data[3] = 5; // This will cause an ArrayIndexOutOfBoundsException
    ```

## 4. Array Length

*   The **length** of an array is the number of elements it can hold.
*   You can get the length of an array using the `length` **instance variable** (not a method).

    ```java
    arrayName.length
    ```

    **Example:**
    ```java
    String[] colors = {"Red", "Green", "Blue"};
    System.out.println(colors.length); // Output: 3

    int[] values = new int[7];
    System.out.println(values.length); // Output: 7
    ```
*   The valid indices for an array of length `n` are from `0` to `n-1`.

## 5. Iterating Through Arrays

*   Arrays are commonly traversed using loops.

    ### 5.1 Using a `for` Loop

    *   This is the most common way to iterate when you need the index of the element.

        ```java
        for (int i = 0; i < arrayName.length; i++) {
            // Access element using arrayName[i]
            System.out.println(arrayName[i]);
        }
        ```

        **Example:**
        ```java
        int[] numbers = {5, 10, 15, 20};
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Element at index " + i + ": " + numbers[i]);
        }
        ```
        **Output:**
        ```
        Element at index 0: 5
        Element at index 1: 10
        Element at index 2: 15
        Element at index 3: 20
        ```

    ### 5.2 Using an Enhanced `for` Loop (for-each loop)

    *   This loop is useful when you only need to access the elements themselves, not their indices. It's often more concise.

        ```java
        for (dataType variable : arrayName) {
            // Access element using 'variable'
            System.out.println(variable);
        }
        ```

        **Example:**
        ```java
        String[] names = {"Alice", "Bob", "Charlie"};
        for (String name : names) {
            System.out.println("Name: " + name);
        }
        ```
        **Output:**
        ```
        Name: Alice
        Name: Bob
        Name: Charlie
        ```

## 6. Multidimensional Arrays

*   A **multidimensional array** is an array of arrays. The most common is a two-dimensional array, often visualized as a table or a matrix.

### 6.1 Declaring and Creating Two-Dimensional Arrays

*   **Syntax:** `dataType[][] arrayName = new dataType[rows][columns];`

    **Example:**
    ```java
    int[][] matrix = new int[3][4]; // Creates a 3x4 matrix (3 rows, 4 columns)
    String[][] board = new String[5][5]; // Creates a 5x5 board
    ```

### 6.2 Initializing Two-Dimensional Arrays

*   **Direct Initialization:**
    ```java
    int[][] grid = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    ```

*   **Initialization after Creation:**
    ```java
    int[][] myMatrix = new int[2][3];
    myMatrix[0][0] = 10;
    myMatrix[0][1] = 20;
    myMatrix[0][2] = 30;
    myMatrix[1][0] = 40;
    myMatrix[1][1] = 50;
    myMatrix[1][2] = 60;
    ```

### 6.3 Accessing Elements in Two-Dimensional Arrays

*   Use two indices: `arrayName[rowIndex][columnIndex]`

    **Example:**
    ```java
    int[][] numbers = {
        {1, 2, 3},
        {4, 5, 6}
    };

    System.out.println(numbers[0][1]); // Output: 2 (first row, second column)
    System.out.println(numbers[1][0]); // Output: 4 (second row, first column)
    ```

### 6.4 Iterating Through Two-Dimensional Arrays

*   You typically use nested `for` loops.

    ```java
    for (int i = 0; i < arrayName.length; i++) { // Loop through rows
        for (int j = 0; j < arrayName[i].length; j++) { // Loop through columns in the current row
            System.out.print(arrayName[i][j] + " ");
        }
        System.out.println(); // Move to the next line after printing a row
    }
    ```

    **Example:**
    ```java
    int[][] data = {
        {11, 12},
        {13, 14},
        {15, 16}
    };

    for (int i = 0; i < data.length; i++) {
        for (int j = 0; j < data[i].length; j++) {
            System.out.print(data[i][j] + "\t"); // "\t" for tab separation
        }
        System.out.println();
    }
    ```
    **Output:**
    ```
    11	12
    13	14
    15	16
    ```

### 6.5 Jagged Arrays (Optional but good to know)

*   **Jagged arrays** are arrays where each inner array can have a different length.
*   Declaration and creation are similar, but the inner array sizes are specified later.

    **Example:**
    ```java
    int[][] jaggedArray = new int[3][]; // Declare an array of arrays
    jaggedArray[0] = new int[2]; // First inner array has 2 elements
    jaggedArray[1] = new int[4]; // Second inner array has 4 elements
    jaggedArray[2] = new int[3]; // Third inner array has 3 elements

    // Initialization
    jaggedArray[0][0] = 1;
    jaggedArray[0][1] = 2;
    jaggedArray[1][0] = 3;
    jaggedArray[1][1] = 4;
    jaggedArray[1][2] = 5;
    jaggedArray[1][3] = 6;
    jaggedArray[2][0] = 7;
    jaggedArray[2][1] = 8;
    jaggedArray[2][2] = 9;
    ```

## 7. Useful Array Operations

### 7.1 Copying Arrays

*   **Shallow Copy:** Copying primitive arrays using assignment (`=`) or `System.arraycopy()` creates a shallow copy. Both the original and copied array will point to the same memory location for primitive types. For objects, it copies the reference.
*   **Deep Copy:** For object arrays or when you need completely independent copies, you need to create a new array and copy elements one by one, or use `Arrays.copyOf()` or `Arrays.copyOfRange()`.

    *   **`System.arraycopy(sourceArray, sourceStartIndex, destinationArray, destinationStartIndex, length)`:**
        ```java
        char[] src = {'a', 'b', 'c', 'd', 'e'};
        char[] dest = new char[3];

        // Copies 3 elements from src starting from index 0 to dest starting at index 0
        System.arraycopy(src, 0, dest, 0, 3);
        // dest will contain {'a', 'b', 'c'}
        ```

    *   **`Arrays.copyOf(originalArray, newLength)`:** Creates a new array of the specified length and copies elements from the original array. If `newLength` is larger, the extra elements are filled with default values. If `newLength` is smaller, only the first `newLength` elements are copied.
        ```java
        int[] original = {10, 20, 30, 40, 50};
        int[] copied = Arrays.copyOf(original, 3); // copied will be {10, 20, 30}
        int[] extended = Arrays.copyOf(original, 7); // extended will be {10, 20, 30, 40, 50, 0, 0}
        ```

    *   **`Arrays.copyOfRange(originalArray, fromIndex, toIndex)`:** Copies a range of elements from the original array. `toIndex` is exclusive.
        ```java
        int[] numbers = {1, 2, 3, 4, 5};
        int[] subArray = Arrays.copyOfRange(numbers, 1, 4); // subArray will be {2, 3, 4}
        ```

### 7.2 Filling Arrays

*   **`Arrays.fill(array, value)`:** Fills the entire array with the specified value.
    ```java
    int[] fillArray = new int[5];
    Arrays.fill(fillArray, 7); // fillArray will be {7, 7, 7, 7, 7}
    ```
*   **`Arrays.fill(array, fromIndex, toIndex, value)`:** Fills a specific range of the array.
    ```java
    String[] names = {"A", "B", "C", "D", "E"};
    Arrays.fill(names, 1, 4, "X"); // names will be {"A", "X", "X", "X", "E"}
    ```

### 7.3 Sorting Arrays

*   **`Arrays.sort(array)`:** Sorts the array elements in ascending order (for primitive types) or in natural order (for objects that implement `Comparable`).
    ```java
    int[] unsorted = {5, 2, 8, 1, 9};
    Arrays.sort(unsorted); // unsorted will be {1, 2, 5, 8, 9}

    String[] words = {"banana", "apple", "cherry"};
    Arrays.sort(words); // words will be {"apple", "banana", "cherry"}
    ```

### 7.4 Searching Arrays

*   **`Arrays.binarySearch(array, key)`:** Searches for a specified key in a sorted array.
    *   Returns the index of the key if found.
    *   Returns a negative value if the key is not found, which indicates the position where the key would be inserted.
    *   **Requirement:** The array **must be sorted** before using `binarySearch`.

    ```java
    int[] sortedNumbers = {10, 20, 30, 40, 50};
    int index = Arrays.binarySearch(sortedNumbers, 30); // index will be 2
    int notFoundIndex = Arrays.binarySearch(sortedNumbers, 25); // notFoundIndex will be negative (e.g., -3)
    ```

### 7.5 Comparing Arrays

*   **`Arrays.equals(array1, array2)`:** Compares two arrays for equality.
    *   Returns `true` if both arrays are of the same length and contain the same elements in the same order.
    *   Returns `false` otherwise.

    ```java
    int[] arr1 = {1, 2, 3};
    int[] arr2 = {1, 2, 3};
    int[] arr3 = {1, 2, 4};

    System.out.println(Arrays.equals(arr1, arr2)); // Output: true
    System.out.println(Arrays.equals(arr1, arr3)); // Output: false
    ```
    *Note: This is a shallow comparison. For object arrays, it checks if the references are the same, not if the objects they refer to are equal.*

## 8. Important Points to Remember

*   **Arrays are zero-indexed:** The first element is at index 0.
*   **Fixed Size:** The size of an array cannot be changed after it's created. If you need a dynamic size, consider using `ArrayList`.
*   **Same Data Type:** All elements in an array must be of the same data type.
*   **`ArrayIndexOutOfBoundsException`:** Be careful not to access elements beyond the array's bounds.
*   **`length` variable:** Use `arrayName.length` to get the size, not `.length()`.
*   **`java.util.Arrays` class:** This class provides many useful utility methods for array manipulation (sorting, searching, copying, filling, etc.). You'll need to `import java.util.Arrays;` to use these methods.
*   **Pass by Value (for primitives) vs. Pass by Reference (for objects):** When passing an array to a method, a copy of the reference to the array is passed. This means modifications made to the array elements inside the method will affect the original array.

## 9. Practice Questions and Exercises

**Question 1:**
Declare an integer array named `studentMarks` of size 10.

**Question 2:**
Initialize the `studentMarks` array with the following values: 75, 88, 92, 65, 78, 80, 95, 72, 85, 90.

**Question 3:**
Print the mark of the 5th student in the `studentMarks` array.

**Question 4:**
Calculate and print the sum of all elements in the `studentMarks` array using a `for` loop.

**Question 5:**
Write a Java program that declares a String array `fruits` and initializes it with "Apple", "Banana", "Cherry". Then, use an enhanced `for` loop to print each fruit.

**Question 6:**
Declare and initialize a 2D integer array named `gameBoard` with 3 rows and 3 columns. Populate it with numbers from 1 to 9.

**Question 7:**
Write a program to iterate through the `gameBoard` and print its elements.

**Question 8:**
Given an integer array `numbers = {5, 2, 9, 1, 7}`, sort it and then print the sorted array.

**Question 9:**
Using the `java.util.Arrays` class, create a copy of the `numbers` array from Question 8 but with a size of 3. Print the copied array.

**Question 10:**
Write a program to find the largest element in an integer array.

---

### Answers to Practice Questions

**Answer 1:**
```java
int[] studentMarks = new int[10];
```

**Answer 2:**
```java
int[] studentMarks = {75, 88, 92, 65, 78, 80, 95, 72, 85, 90};
```
*(Or you could declare first, then initialize each element individually as shown in section 2.3)*

**Answer 3:**
The 5th student is at index 4 (since arrays are 0-indexed).
```java
System.out.println(studentMarks[4]);
```

**Answer 4:**
```java
int[] studentMarks = {75, 88, 92, 65, 78, 80, 95, 72, 85, 90};
int sum = 0;
for (int i = 0; i < studentMarks.length; i++) {
    sum += studentMarks[i];
}
System.out.println("Sum of marks: " + sum);
```

**Answer 5:**
```java
public class FruitPrinter {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Cherry"};
        System.out.println("Fruits:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

**Answer 6:**
```java
int[][] gameBoard = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

**Answer 7:**
```java
int[][] gameBoard = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println("Game Board:");
for (int i = 0; i < gameBoard.length; i++) {
    for (int j = 0; j < gameBoard[i].length; j++) {
        System.out.print(gameBoard[i][j] + "\t");
    }
    System.out.println();
}
```

**Answer 8:**
```java
import java.util.Arrays;

public class ArraySorter {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 9, 1, 7};
        System.out.println("Unsorted array: " + Arrays.toString(numbers)); // toString is useful for printing arrays

        Arrays.sort(numbers);
        System.out.println("Sorted array: " + Arrays.toString(numbers));
    }
}
```

**Answer 9:**
```java
import java.util.Arrays;

public class ArrayCopier {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 9, 1, 7};
        int[] copiedArray = Arrays.copyOf(numbers, 3);
        System.out.println("Copied array (size 3): " + Arrays.toString(copiedArray));
    }
}
```

**Answer 10:**
```java
public class FindLargest {
    public static void main(String[] args) {
        int[] arr = {12, 34, 5, 78, 23, 90, 45};
        int max = arr[0]; // Assume the first element is the largest

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]; // Update max if current element is larger
            }
        }
        System.out.println("The largest element is: " + max);
    }
}
