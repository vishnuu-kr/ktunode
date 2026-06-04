---
title: "Primitive Data types and Wrapper Types"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf86"
status: "completed"
scrapedAt: "2026-05-20T16:55:48.480Z"
---
# Object-Oriented Programming: Module 1 - Introduction to Java

## Topic: Primitive Data Types and Wrapper Types

### 1. Understanding Data Types in Java

Data types are fundamental to programming. They tell the compiler what kind of data a variable can hold and what operations can be performed on it. Java has two main categories of data types:

*   **Primitive Data Types:** These are built-in, basic data types that represent simple values.
*   **Reference Data Types (Non-Primitive):** These refer to objects, which are instances of classes. This includes strings, arrays, and user-defined objects.

This module focuses on **Primitive Data Types** and their corresponding **Wrapper Types**.

### 2. Primitive Data Types in Java

Primitive data types store their actual values directly. They are the building blocks for representing simple pieces of information. Java provides eight primitive data types, categorized by the kind of data they store:

#### 2.1. Integral Types (for whole numbers)

These types are used to store integer values.

*   **`byte`**
    *   **Size:** 8 bits
    *   **Range:** -128 to 127
    *   **Purpose:** Used for saving memory in large arrays where memory is critical.
    *   **Example:** `byte age = 25;`

*   **`short`**
    *   **Size:** 16 bits
    *   **Range:** -32,768 to 32,767
    *   **Purpose:** Similar to `byte`, but for a larger range of integer values.
    *   **Example:** `short year = 2023;`

*   **`int`**
    *   **Size:** 32 bits
    *   **Range:** -2,147,483,648 to 2,147,483,647
    *   **Purpose:** The most commonly used integral type for general-purpose integer values.
    *   **Example:** `int quantity = 100;`

*   **`long`**
    *   **Size:** 64 bits
    *   **Range:** -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
    *   **Purpose:** Used for storing very large integer values that exceed the range of `int`.
    *   **Example:** `long population = 8000000000L;` (Note the `L` suffix to denote a long literal)

#### 2.2. Floating-Point Types (for numbers with decimal points)

These types are used to store fractional values.

*   **`float`**
    *   **Size:** 32 bits
    *   **Range:** Approximately ±3.40282347E+38f (single-precision)
    *   **Purpose:** Used for storing numbers with decimal points when precision is not extremely critical.
    *   **Example:** `float price = 19.99f;` (Note the `f` suffix to denote a float literal)

*   **`double`**
    *   **Size:** 64 bits
    *   **Range:** Approximately ±1.79769313486231570E+308 (double-precision)
    *   **Purpose:** The most commonly used floating-point type. Offers greater precision than `float` and is suitable for most scientific and engineering calculations.
    *   **Example:** `double pi = 3.1415926535;`

#### 2.3. Character Type

*   **`char`**
    *   **Size:** 16 bits
    *   **Range:** 0 to 65535 (Unicode characters)
    *   **Purpose:** Used to store a single character. Characters are enclosed in single quotes.
    *   **Example:** `char initial = 'J';`

#### 2.4. Boolean Type

*   **`boolean`**
    *   **Size:** Not specified (typically 1 bit conceptually)
    *   **Range:** `true` or `false`
    *   **Purpose:** Used for storing true/false values, often in conditional statements and flags.
    *   **Example:** `boolean isAvailable = true;`

---

### 3. Wrapper Classes

While primitive data types are efficient for storing simple values, they lack methods or behaviors. For instance, you cannot call a `toUpperCase()` method on an `int`. Wrapper classes provide a way to treat primitive data types as objects.

Each primitive data type in Java has a corresponding wrapper class:

| Primitive Type | Wrapper Class |
| :------------- | :------------ |
| `byte`         | `Byte`        |
| `short`        | `Short`       |
| `int`          | `Integer`     |
| `long`         | `Long`        |
| `float`        | `Float`       |
| `double`       | `Double`      |
| `char`         | `Character`   |
| `boolean`      | `Boolean`     |

#### 3.1. Key Features and Uses of Wrapper Classes

*   **Object-Oriented Nature:** Wrapper classes allow you to use primitive values in contexts where objects are required (e.g., storing integers in a `List` which can only hold objects).
*   **Methods and Functionality:** Wrapper classes provide useful methods for converting between strings and primitive types, performing comparisons, and manipulating values.
*   **Nullability:** Unlike primitive types, wrapper class objects can be `null`, indicating the absence of a value. This is a significant difference and can be important for error handling.
*   **Autoboxing and Unboxing:** Java provides automatic conversion between primitive types and their corresponding wrapper classes, making the code more concise.

    *   **Autoboxing:** The automatic conversion of a primitive type to its wrapper class.
        *   **Example:** `Integer num = 10;` (Here, the `int` literal `10` is automatically converted to an `Integer` object).

    *   **Unboxing:** The automatic conversion of a wrapper class object to its primitive type.
        *   **Example:** `int value = num;` (Here, the `Integer` object `num` is automatically converted back to an `int`).

#### 3.2. Common Wrapper Class Methods

Here are some commonly used methods for `Integer` and `String` as examples:

*   **`Integer.parseInt(String s)`:** Converts a String to an `int`.
    *   **Example:** `int number = Integer.parseInt("123");`

*   **`Integer.toString(int i)`:** Converts an `int` to a String.
    *   **Example:** `String strNumber = Integer.toString(456);`

*   **`Double.parseDouble(String s)`:** Converts a String to a `double`.
    *   **Example:** `double doubleValue = Double.parseDouble("3.14");`

*   **`Character.isDigit(char ch)`:** Checks if a character is a digit.
    *   **Example:** `boolean isADigit = Character.isDigit('7'); // true`

*   **`Boolean.parseBoolean(String s)`:** Converts a String to a `boolean`.
    *   **Example:** `boolean isTrue = Boolean.parseBoolean("true"); // true`

---

### 4. Type Casting

Type casting is the process of converting one data type to another. Java allows for two types of casting:

*   **Widening Conversion (Automatic/Implicit Casting):** This happens when a smaller data type is converted to a larger data type. Java does this automatically because there is no loss of information.
    *   **Order:** `byte` -> `short` -> `int` -> `long` -> `float` -> `double`
    *   **Example:**
        ```java
        int myInt = 100;
        long myLong = myInt; // Implicit widening conversion from int to long
        float myFloat = myLong; // Implicit widening conversion from long to float

        System.out.println("Int: " + myInt);
        System.out.println("Long: " + myLong);
        System.out.println("Float: " + myFloat);
        ```

*   **Narrowing Conversion (Manual/Explicit Casting):** This happens when a larger data type is converted to a smaller data type. You must explicitly cast the value, as there might be a loss of precision or data.
    *   **Order:** `double` -> `float` -> `long` -> `int` -> `short` -> `byte`
    *   **Example:**
        ```java
        double myDouble = 9.78d;
        int myIntCast = (int) myDouble; // Explicit narrowing conversion from double to int

        System.out.println("Double: " + myDouble);
        System.out.println("Int (after cast): " + myIntCast); // Output will be 9 (decimal part is lost)
        ```
    *   **Important:** Be cautious with narrowing conversions, especially when converting floating-point types to integer types, as the fractional part will be truncated.

---

### 5. Practice Questions & Exercises

**Question 1:**
Which primitive data type in Java is used to store the largest possible integer value?
a) `int`
b) `long`
c) `short`
d) `byte`

**Question 2:**
What is the default value of a `boolean` primitive type if it is not explicitly initialized?
a) `1`
b) `0`
c) `true`
d) `false`

**Question 3:**
What is the output of the following code snippet?
```java
int x = 50;
long y = x;
System.out.println(y);
```
a) 50.0
b) 50
c) Error
d) 50L

**Question 4:**
Which of the following statements correctly demonstrates autoboxing?
a) `int a = 20; Integer b = a;`
b) `Integer a = new Integer(20);`
c) `Integer b = 20;`
d) `int a = Integer.valueOf(20);`

**Question 5:**
Write a Java code snippet that converts the String `"42.7"` into a `double` and then prints its value.

**Question 6:**
Explain the difference between `float` and `double` in terms of precision and memory usage.

---

### 6. Answers to Practice Questions

**Answer 1:**
b) `long`
*   **Explanation:** The `long` data type has the largest range among all integral types in Java.

**Answer 2:**
d) `false`
*   **Explanation:** The default value for a `boolean` primitive type in Java is `false`.

**Answer 3:**
b) 50
*   **Explanation:** The `int` variable `x` is implicitly converted to a `long` variable `y` (widening conversion), and the value `50` is printed.

**Answer 4:**
c) `Integer b = 20;`
*   **Explanation:** Autoboxing is the automatic conversion of a primitive type to its corresponding wrapper class. In this case, the `int` literal `20` is automatically converted to an `Integer` object.

**Answer 5:**
```java
public class StringToDouble {
    public static void main(String[] args) {
        String doubleString = "42.7";
        double value = Double.parseDouble(doubleString);
        System.out.println(value); // Output: 42.7
    }
}
```

**Answer 6:**
*   **`float`:** Uses 32 bits of memory and provides single-precision floating-point representation. It can accurately represent approximately 6-7 decimal digits.
*   **`double`:** Uses 64 bits of memory and provides double-precision floating-point representation. It offers a much wider range and can accurately represent approximately 15-16 decimal digits, making it more suitable for calculations requiring higher precision.

---

### 7. Important Points to Remember

*   **Primitive vs. Wrapper:** Primitives store actual values; wrappers store object references.
*   **Nullability:** Primitives cannot be `null`; wrapper objects can.
*   **Autoboxing/Unboxing:** Java automatically converts between primitives and their wrappers.
*   **Literals:** Use `L` for `long` literals (e.g., `1000L`) and `f` for `float` literals (e.g., `2.5f`).
*   **Casting:** Widening conversions (small to large) are automatic. Narrowing conversions (large to small) require explicit casting and can lead to data loss.
*   **`Integer.parseInt()` and `Double.parseDouble()`:** Essential for converting String representations of numbers into their numeric primitive types.
*   **`Integer.toString()` and `Double.toString()`:** Essential for converting numeric primitive types into their String representations.
*   **Default Values:** Remember the default values for instance variables (0 for numeric types, `false` for boolean, `\u0000` for char, `null` for object references). Local variables must be initialized before use.
