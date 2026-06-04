---
title: "Core Java Fundamentals"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36006"
status: "completed"
scrapedAt: "2026-05-23T16:17:28.996Z"
---
# Module 2: Core Java Fundamentals

This module provides a foundational understanding of Java programming, covering essential concepts and constructs required to write basic Java applications. We will explore data types, operators, control flow, and the fundamental building blocks of object-oriented programming in Java, laying the groundwork for more advanced topics.

## Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   Understand the basic structure of a Java program.
*   Work with primitive data types and their corresponding wrapper classes.
*   Utilize operators for various operations.
*   Control program flow using conditional statements and loops.
*   Understand the concept of arrays and work with them.
*   Write simple Java programs that demonstrate these fundamentals.

## Key Concepts and Definitions:

### 1. Java Program Structure

A Java program is a collection of classes. Each class can contain variables and methods.

**Basic Structure of a Java Program:**

```java
// A simple Java program
public class HelloWorld {
    // main method - the entry point of the program
    public static void main(String[] args) {
        System.out.println("Hello, World!"); // Prints output to the console
    }
}
```

*   **`public class HelloWorld`**: Declares a public class named `HelloWorld`. In Java, every program must have at least one class. The `public` keyword means this class is accessible from anywhere.
*   **`public static void main(String[] args)`**: This is the main method.
    *   `public`: Accessible from anywhere.
    *   `static`: The method belongs to the `HelloWorld` class itself, not to any specific object of the class. This allows the JVM to call it without creating an object.
    *   `void`: The method does not return any value.
    *   `main`: This is the special name that the Java Virtual Machine (JVM) looks for to start program execution.
    *   `(String[] args)`: This parameter is an array of strings that can receive command-line arguments.

**Important Point:** Every executable Java program must have a `main` method.

### 2. Java Development Kit (JDK), Java Runtime Environment (JRE), and Java Virtual Machine (JVM)

*   **JVM (Java Virtual Machine):** An abstract computing machine that enables a computer to run a Java program. It interprets the compiled bytecode (`.class` files).
*   **JRE (Java Runtime Environment):** Consists of the JVM and the core Java libraries. It provides the environment to execute Java applications. You need JRE to run Java programs.
*   **JDK (Java Development Kit):** Includes the JRE and development tools like the compiler (`javac`), debugger (`jdb`), and archiver (`jar`). You need JDK to develop and compile Java programs.

**Hierarchy:** JDK contains JRE, and JRE contains JVM.

### 3. Data Types

Java is a statically-typed language, meaning all variables must have a declared type. Java supports two categories of data types:

**a) Primitive Data Types:** These are built-in types that store simple values.

| Data Type | Size (Bytes) | Description                                     | Range                                                                 | Default Value |
| :-------- | :----------- | :---------------------------------------------- | :-------------------------------------------------------------------- | :------------ |
| `byte`    | 1            | Smallest signed integer type                    | -128 to 127                                                           | 0             |
| `short`   | 2            | Signed 16-bit integer type                      | -32,768 to 32,767                                                     | 0             |
| `int`     | 4            | Signed 32-bit integer type (most common)        | -2,147,483,648 to 2,147,483,647                                       | 0             |
| `long`    | 8            | Signed 64-bit integer type                      | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807                | 0L            |
| `float`   | 4            | Single-precision 32-bit IEEE 754 floating point | Approximately ±3.40282347E+38                                         | 0.0f          |
| `double`  | 8            | Double-precision 64-bit IEEE 754 floating point | Approximately ±1.79769313486231570E+308                                | 0.0d          |
| `char`    | 2            | Unsigned 16-bit Unicode character               | '\u0000' (0) to '\uffff' (65,535)                                     | '\u0000'      |
| `boolean` | N/A          | Represents true or false                        | `true` or `false`                                                     | `false`       |

**Example:**

```java
public class DataTypesExample {
    public static void main(String[] args) {
        int age = 30;
        float salary = 55000.75f; // 'f' suffix for float literal
        char grade = 'A';
        boolean isEmployed = true;
        double pi = 3.1415926535;

        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        System.out.println("Grade: " + grade);
        System.out.println("Is Employed: " + isEmployed);
        System.out.println("Pi: " + pi);
    }
}
```

**Important Point:** Integer literals (like `100`) are `int` by default. For `long`, you need to append `L` or `l` (e.g., `100L`). Floating-point literals (like `3.14`) are `double` by default. For `float`, you need to append `f` or `F` (e.g., `3.14f`).

**b) Non-Primitive (Reference) Data Types:** These types refer to objects. Examples include `String`, arrays, and user-defined classes. They are not stored directly but rather their memory address.

*   **`String`**: Represents a sequence of characters.

    ```java
    String name = "Java";
    ```

*   **Arrays**: A collection of elements of the same data type.

    ```java
    int[] numbers = {1, 2, 3, 4, 5};
    ```

### 4. Variables and Constants

*   **Variable:** A named storage location that holds a value. The value can be changed during program execution.
    *   **Declaration:** `dataType variableName;`
    *   **Initialization:** `dataType variableName = value;`

    ```java
    int count;        // Declaration
    count = 10;       // Initialization
    int quantity = 5; // Declaration and Initialization
    ```

*   **Constant:** A named storage location whose value cannot be changed after it has been assigned. In Java, constants are declared using the `final` keyword.

    ```java
    final int MAX_VALUE = 100;
    // MAX_VALUE = 200; // This would cause a compile-time error
    ```

**Reference from Textbooks:**
*   Schildt, Chapter 4: "Variables, Types, and Literals" provides a detailed explanation of primitive and reference types, variable declaration, and initialization.
*   Deitel & Deitel, Chapter 2: "Introduction to Object-Oriented Programming" also covers fundamental concepts like data types and variables.

### 5. Operators

Operators are symbols that perform operations on variables and values.

**a) Arithmetic Operators:**

| Operator | Description           | Example |
| :------- | :-------------------- | :------ |
| `+`      | Addition              | `a + b` |
| `-`      | Subtraction           | `a - b` |
| `*`      | Multiplication        | `a * b` |
| `/`      | Division              | `a / b` |
| `%`      | Modulus (Remainder)   | `a % b` |

**b) Relational Operators:** Used for comparison. Return `boolean` values (`true` or `false`).

| Operator | Description            | Example |
| :------- | :--------------------- | :------ |
| `==`     | Equal to               | `a == b`|
| `!=`     | Not equal to           | `a != b`|
| `>`      | Greater than           | `a > b` |
| `<`      | Less than              | `a < b` |
| `>=`     | Greater than or equal to| `a >= b`|
| `<=`     | Less than or equal to  | `a <= b`|

**c) Logical Operators:** Used to combine conditional statements.

| Operator | Description        | Example |
| :------- | :----------------- | :------ |
| `&&`     | Logical AND        | `(a > b) && (b > c)` |
| `||`     | Logical OR         | `(a > b) || (a < c)` |
| `!`      | Logical NOT        | `!(a == b)`          |

**d) Assignment Operators:** Used to assign values to variables.

| Operator | Example | Equivalent to |
| :------- | :------ | :------------ |
| `=`      | `a = b` | `a = b`       |
| `+=`     | `a += b`| `a = a + b`   |
| `-=`     | `a -= b`| `a = a - b`   |
| `*=`     | `a *= b`| `a = a * b`   |
| `/=`     | `a /= b`| `a = a / b`   |
| `%=`     | `a %= b`| `a = a % b`   |

**e) Increment/Decrement Operators:**

| Operator | Description       | Example |
| :------- | :---------------- | :------ |
| `++`     | Increment by 1    | `a++` or `++a` |
| `--`     | Decrement by 1    | `a--` or `--a` |

**Precedence:**
*   **Prefix (e.g., `++a`)**: Increments/decrements the variable *first*, then uses its value in the expression.
*   **Postfix (e.g., `a++`)**: Uses the variable's value in the expression *first*, then increments/decrements the variable.

**Example:**

```java
public class OperatorsExample {
    public static void main(String[] args) {
        int x = 10, y = 5;

        // Arithmetic
        System.out.println("x + y = " + (x + y));   // 15
        System.out.println("x / y = " + (x / y));   // 2 (integer division)
        System.out.println("x % y = " + (x % y));   // 0

        // Relational
        System.out.println("x == y: " + (x == y)); // false

        // Logical
        boolean condition1 = (x > y); // true
        boolean condition2 = (y > 0); // true
        System.out.println("condition1 && condition2: " + (condition1 && condition2)); // true

        // Assignment
        x += 5; // x is now 15
        System.out.println("x after += 5: " + x);

        // Increment/Decrement
        int a = 5;
        int b = a++; // b = 5, a becomes 6
        System.out.println("a: " + a + ", b: " + b); // a: 6, b: 5

        int c = 5;
        int d = ++c; // c becomes 6, d = 6
        System.out.println("c: " + c + ", d: " + d); // c: 6, d: 6
    }
}
```

**Reference from Textbooks:**
*   Schildt, Chapter 5: "Operators" comprehensively covers all operator types, precedence, and associativity.
*   Liang, Chapter 2: "Java Chươngming" details basic programming constructs including operators.

### 6. Control Flow Statements

Control flow statements alter the sequential execution of instructions.

**a) Conditional Statements:**

*   **`if` statement:** Executes a block of code if a specified condition is true.

    ```java
    if (condition) {
        // code to execute if condition is true
    }
    ```

*   **`if-else` statement:** Executes one block of code if the condition is true, and another block if it's false.

    ```java
    if (condition) {
        // code for true
    } else {
        // code for false
    }
    ```

*   **`if-else if-else` statement:** Checks multiple conditions sequentially.

    ```java
    if (condition1) {
        // code for condition1
    } else if (condition2) {
        // code for condition2
    } else {
        // code if no conditions are met
    }
    ```

*   **`switch` statement:** Selects one of many code blocks to be executed based on the value of an expression.

    ```java
    switch (expression) {
        case value1:
            // code for value1
            break; // Important: exits the switch
        case value2:
            // code for value2
            break;
        default:
            // code if no case matches
    }
    ```

    **Important Point:** The `break` statement is crucial in `switch` to prevent fall-through (executing subsequent `case` blocks). The `default` case is optional. The `switch` statement can be used with `byte`, `short`, `char`, `int`, `enum` types, and `String` (since Java 7).

**b) Looping Statements:**

*   **`for` loop:** Executes a block of code a specified number of times.

    ```java
    for (initialization; condition; update) {
        // code to execute
    }
    ```

    **Example:**
    ```java
    for (int i = 0; i < 5; i++) {
        System.out.println("Iteration: " + i);
    }
    ```

*   **`while` loop:** Executes a block of code as long as a specified condition is true.

    ```java
    while (condition) {
        // code to execute
    }
    ```

    **Example:**
    ```java
    int count = 0;
    while (count < 3) {
        System.out.println("While loop count: " + count);
        count++;
    }
    ```

*   **`do-while` loop:** Executes a block of code at least once, and then continues as long as a specified condition is true.

    ```java
    do {
        // code to execute
    } while (condition);
    ```

    **Example:**
    ```java
    int num = 0;
    do {
        System.out.println("Do-while iteration: " + num);
        num++;
    } while (num < 2);
    ```

    **Important Point:** The `do-while` loop guarantees execution at least once because the condition is checked at the end.

*   **Enhanced `for` loop (for-each loop):** Used to iterate over arrays or collections.

    ```java
    for (dataType element : collection) {
        // code to execute for each element
    }
    ```

    **Example:**
    ```java
    int[] numbers = {10, 20, 30};
    for (int num : numbers) {
        System.out.println(num);
    }
    ```

**c) Jump Statements:**

*   **`break`:** Terminates the current loop or `switch` statement.
*   **`continue`:** Skips the current iteration of a loop and proceeds to the next iteration.

**Example:**

```java
public class JumpStatementsExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // Skip iteration when i is 3
            }
            if (i == 5) {
                break;    // Exit loop when i is 5
            }
            System.out.println("Processing: " + i);
        }
    }
}
// Output:
// Processing: 1
// Processing: 2
// Processing: 4
```

**Reference from Textbooks:**
*   Schildt, Chapter 6: "Control Flow Statements" covers `if`, `switch`, `for`, `while`, `do-while`, `break`, and `continue`.
*   Deitel & Deitel, Chapter 4: "Control Flow: Selection Statements" and Chapter 5: "Control Flow: Repetition Statements" provide comprehensive coverage.

### 7. Arrays

An array is a fixed-size, ordered collection of elements of the same data type.

**Declaration and Initialization:**

```java
// Declaration
dataType[] arrayRefVar;

// Creation
arrayRefVar = new dataType[arraySize];

// Initialization
arrayRefVar = {value1, value2, ..., valueN};
```

**Combined Declaration, Creation, and Initialization:**

```java
dataType[] arrayRefVar = new dataType[arraySize];
// or
dataType[] arrayRefVar = {value1, value2, ..., valueN};
// or
dataType arrayRefVar[] = {value1, value2, ..., valueN}; // Less common style
```

**Accessing Array Elements:**

Elements are accessed using their index, starting from 0.

`arrayRefVar[index]`

**Example:**

```java
public class ArrayExample {
    public static void main(String[] args) {
        // Declaration, creation, and initialization
        int[] numbers = new int[5]; // Array of 5 integers, initialized to 0 by default

        // Assigning values
        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        numbers[3] = 40;
        numbers[4] = 50;

        // Accessing and printing
        System.out.println("Element at index 0: " + numbers[0]); // Output: 10

        // Using a loop to print all elements
        System.out.println("All elements:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }

        // Another way of declaration and initialization
        String[] names = {"Alice", "Bob", "Charlie"};
        System.out.println("Second name: " + names[1]); // Output: Bob

        // Get array length
        System.out.println("Length of names array: " + names.length);
    }
}
```

**Important Points:**
*   The `length` attribute of an array provides its size.
*   Accessing an index outside the bounds of the array (e.g., `numbers[5]` in the example above) will result in an `ArrayIndexOutOfBoundsException`.
*   Arrays have a fixed size once created.

**Reference from Textbooks:**
*   Schildt, Chapter 7: "Arrays" provides an in-depth look at array declaration, initialization, and usage.
*   Deitel & Deitel, Chapter 6: "Arrays and Strings" covers arrays thoroughly.

## Practice Questions:

1.  **Data Types:**
    *   Declare variables for the following:
        *   The number of students in a class (an integer).
        *   The average marks of a student (a floating-point number).
        *   The initial of a student's name (a character).
        *   Whether a student has passed or failed (a boolean).
    *   Write a Java program to print the binary representation of the number 25.
    *   What is the default value of a `double` variable?

2.  **Operators:**
    *   Given `int a = 10;` and `int b = 3;`, what will be the output of `a / b` and `a % b`?
    *   Explain the difference between `++x` and `x++` with an example.
    *   Write a statement that checks if a number `num` is between 10 and 50 (inclusive).

3.  **Control Flow:**
    *   Write a program that takes an integer as input and prints whether it is even or odd.
    *   Write a `for` loop that prints numbers from 10 down to 1.
    *   Write a `switch` statement that prints the name of the day of the week given a number from 1 (Monday) to 7 (Sunday). Handle invalid input with the `default` case.

4.  **Arrays:**
    *   Declare an array of 10 `String` elements and initialize it with the names of fruits.
    *   Write a program to find the sum of all elements in an integer array.
    *   Write a program to search for a specific element in an array. If found, print its index; otherwise, print "Element not found."

## Answers to Practice Questions:

1.  **Data Types:**
    *   `int numberOfStudents;`
    *   `float averageMarks;`
    *   `char studentInitial;`
    *   `boolean hasPassed;`
    *   **Program to print binary representation of 25:**
        ```java
        public class BinaryRepresentation {
            public static void main(String[] args) {
                int number = 25;
                System.out.println("Binary representation of " + number + " is: " + Integer.toBinaryString(number));
            }
        }
        // Output: Binary representation of 25 is: 11001
        ```
    *   The default value of a `double` variable is `0.0d`.

2.  **Operators:**
    *   `a / b` will be `3` (integer division).
    *   `a % b` will be `1` (remainder).
    *   **Difference between `++x` and `x++`:**
        ```java
        int x = 5;
        int y = ++x; // Prefix increment: x becomes 6, then y is assigned 6.
        System.out.println("x: " + x + ", y: " + y); // Output: x: 6, y: 6

        int a = 5;
        int b = a++; // Postfix increment: b is assigned 5 (current value of a), then a becomes 6.
        System.out.println("a: " + a + ", b: " + b); // Output: a: 6, b: 5
        ```
    *   `boolean isBetween = (num >= 10) && (num <= 50);`

3.  **Control Flow:**
    *   **Even or Odd Program:**
        ```java
        import java.util.Scanner;

        public class EvenOdd {
            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
                System.out.print("Enter an integer: ");
                int number = scanner.nextInt();

                if (number % 2 == 0) {
                    System.out.println(number + " is even.");
                } else {
                    System.out.println(number + " is odd.");
                }
                scanner.close();
            }
        }
        ```
    *   **`for` loop printing 10 down to 1:**
        ```java
        for (int i = 10; i >= 1; i--) {
            System.out.println(i);
        }
        ```
    *   **`switch` statement for days of the week:**
        ```java
        import java.util.Scanner;

        public class DayOfWeek {
            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
                System.out.print("Enter a number (1-7): ");
                int dayNum = scanner.nextInt();

                String dayName;
                switch (dayNum) {
                    case 1: dayName = "Monday"; break;
                    case 2: dayName = "Tuesday"; break;
                    case 3: dayName = "Wednesday"; break;
                    case 4: dayName = "Thursday"; break;
                    case 5: dayName = "Friday"; break;
                    case 6: dayName = "Saturday"; break;
                    case 7: dayName = "Sunday"; break;
                    default: dayName = "Invalid day number";
                }
                System.out.println("The day is: " + dayName);
                scanner.close();
            }
        }
        ```

4.  **Arrays:**
    *   `String[] fruits = new String[10];`
    *   `fruits[0] = "Apple"; fruits[1] = "Banana"; // ... and so on`
    *   **Sum of array elements:**
        ```java
        public class ArraySum {
            public static void main(String[] args) {
                int[] arr = {1, 5, 3, 8, 2};
                int sum = 0;
                for (int num : arr) {
                    sum += num;
                }
                System.out.println("Sum of array elements: " + sum); // Output: 19
            }
        }
        ```
    *   **Search element in array:**
        ```java
        public class ArraySearch {
            public static void main(String[] args) {
                int[] arr = {10, 25, 5, 40, 15};
                int elementToFind = 40;
                int foundIndex = -1; // Initialize with a value indicating not found

                for (int i = 0; i < arr.length; i++) {
                    if (arr[i] == elementToFind) {
                        foundIndex = i;
                        break; // Exit loop once found
                    }
                }

                if (foundIndex != -1) {
                    System.out.println("Element " + elementToFind + " found at index: " + foundIndex);
                } else {
                    System.out.println("Element " + elementToFind + " not found.");
                }
            }
        }
        ```

## Important Points to Remember:

*   **Case Sensitivity:** Java is case-sensitive. `myVariable` is different from `myvariable`.
*   **Semicolons:** Every Java statement must end with a semicolon (;).
*   **Blocks of Code:** Statements enclosed in curly braces `{}` form a block.
*   **Comments:** Use `//` for single-line comments and `/* ... */` for multi-line comments.
*   **`main` Method Signature:** The `main` method must have the exact signature `public static void main(String[] args)`.
*   **Data Type Suffixes:** Remember the `f` for `float` and `L` for `long` literals.
*   **Array Indexing:** Arrays are zero-indexed.
*   **`ArrayIndexOutOfBoundsException`:** Occurs when you try to access an array element using an invalid index.

This module covers the fundamental building blocks of Java. Mastering these concepts is crucial for progressing to more advanced topics in object-oriented programming with Java. Refer to the specified textbooks for further details and examples.
