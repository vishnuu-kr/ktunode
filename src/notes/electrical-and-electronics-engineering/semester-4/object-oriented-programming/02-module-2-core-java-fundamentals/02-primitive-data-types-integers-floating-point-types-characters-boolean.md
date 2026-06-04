---
title: "Primitive Data types - Integers, Floating Point Types, Characters, Boolean."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36007"
status: "completed"
scrapedAt: "2026-05-23T16:17:29.691Z"
---
# Object-Oriented Programming: Module 2 - Core Java Fundamentals

## Topic: Primitive Data Types

This module introduces the fundamental building blocks of Java programming: its primitive data types. Understanding these types is crucial for representing and manipulating data effectively within your Java programs. We will explore the different categories of primitive types, their characteristics, and how they are used in programming.

---

### 1. Introduction to Data Types

*   **Definition:** A data type specifies the kind of value a variable can hold and the operations that can be performed on it. In Java, data types are divided into two main categories:
    *   **Primitive Data Types:** These are the most basic data types in Java. They represent simple values and are not objects. Java defines eight primitive data types.
    *   **Reference Data Types:** These refer to objects, arrays, and strings. They are not directly stored in memory but rather point to the location of the object in memory.

*   **Importance:** Choosing the correct data type is essential for:
    *   **Memory Efficiency:** Different data types occupy different amounts of memory.
    *   **Data Integrity:** Ensures that the data stored is of the expected type, preventing errors.
    *   **Performance:** Certain operations might be more efficient with specific data types.

---

### 2. Primitive Data Types in Java

Java provides eight primitive data types, categorized as follows:

#### 2.1. Integral Types (Integers)

These types are used to store whole numbers.

| Data Type | Size (bits) | Range (Approximate)                                                              | Description                                                              |
| :-------- | :---------- | :------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| `byte`    | 8           | -128 to 127                                                                      | Smallest integer type. Useful for saving memory in large arrays.         |
| `short`   | 16          | -32,768 to 32,767                                                                | Half the size of an `int`.                                               |
| `int`     | 32          | -2,147,483,648 to 2,147,483,647                                                  | Most commonly used integer type. Default for integer literals.         |
| `long`    | 64          | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807                          | Used for larger integer values. Appends 'L' or 'l' to literals.          |

**Key Concepts and Definitions:**

*   **Integer Literals:** A sequence of digits representing an integer value. By default, Java treats integer literals as `int` unless suffixed with 'L' or 'l' (for `long`).
*   **Signed:** All integer types in Java are signed, meaning they can represent both positive and negative values, as well as zero.
*   **Default Value:** The default value for all numeric primitive types (including integers) is `0`.

**Examples:**

```java
byte smallNumber = 100;
short mediumNumber = 30000;
int standardNumber = 500000;
long largeNumber = 10000000000L; // 'L' suffix indicates a long literal

// Integer literals
int decimalLiteral = 100;      // Decimal
int octalLiteral = 0144;       // Octal (equivalent to 100 in decimal)
int hexadecimalLiteral = 0x64; // Hexadecimal (equivalent to 100 in decimal)
int binaryLiteral = 0b1100100; // Binary (equivalent to 100 in decimal) - Java 7+

// Potential issues: Overflow
// int maxInt = 2147483647;
// int overflowInt = maxInt + 1; // This will wrap around to a negative value
```

**Referencing Textbooks:**

*   **Java: The Complete Reference (Schildt):** Discusses integer types, their ranges, and the use of integer literals. Emphasizes default types and the importance of suffixes for `long`.
*   **Java How to Program (Deitel & Deitel):** Provides clear explanations of integer types, bitwise operations (though not covered in detail here, they relate to integer manipulation), and showcases examples of integer variable declarations and assignments.

**Alignment with Course Outcomes:**

*   **CO1 (Knowledge Level: K2):** Understanding how to declare and use integer variables as part of defining class members (attributes).
*   **CO2 (Knowledge Level: K3):** Utilising integer data types for calculations and storing numerical data, which is fundamental for many programming tasks.

---

#### 2.2. Floating-Point Types

These types are used to store numbers with decimal points (real numbers).

| Data Type | Size (bits) | Precision (Approximate) | Range (Approximate)                                          | Description                                                                                                         |
| :-------- | :---------- | :---------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| `float`   | 32          | Single Precision        | ±3.40282347E+38                                              | Single-precision floating-point number. Appends 'f' or 'F' to literals.                                           |
| `double`  | 64          | Double Precision        | ±1.79769313486231570E+308                                    | Double-precision floating-point number. Default for floating-point literals. Recommended for most general use. |

**Key Concepts and Definitions:**

*   **Floating-Point Literals:** By default, Java treats floating-point literals as `double`. To specify a `float` literal, you must append 'f' or 'F'.
*   **Precision:** Refers to the number of digits that can be accurately represented. `double` offers greater precision than `float`.
*   **IEEE 754 Standard:** Both `float` and `double` adhere to the IEEE 754 standard for floating-point arithmetic, which defines how these numbers are represented and manipulated.
*   **Special Values:** Floating-point types can also represent special values like:
    *   `POSITIVE_INFINITY`
    *   `NEGATIVE_INFINITY`
    *   `NaN` (Not a Number)

**Examples:**

```java
float piFloat = 3.14159f; // 'f' suffix is necessary for float literals
double standardDouble = 3.141592653589793; // Default is double
double scientificDouble = 6.022e23; // Scientific notation

// Division resulting in floating-point
int numerator = 10;
int denominator = 3;
double result = (double) numerator / denominator; // Cast to double to get floating-point division
System.out.println("Result: " + result); // Output: Result: 3.3333333333333335

// Special values
double infinity = Double.POSITIVE_INFINITY;
double notANumber = Double.NaN;
```

**Referencing Textbooks:**

*   **Java: The Complete Reference (Schildt):** Explains the `float` and `double` types, their precision, and the IEEE 754 standard. Highlights the requirement for 'f' suffix for `float` literals and the default behavior for `double`.
*   **Introduction to Java Programming (Liang):** Covers floating-point types, their storage mechanisms, and the potential for precision issues in calculations. Demonstrates type casting for obtaining floating-point results from integer division.

**Alignment with Course Outcomes:**

*   **CO1 (Knowledge Level: K2):** Declaring and using `float` and `double` variables as class attributes for storing decimal values.
*   **CO2 (Knowledge Level: K3):** Utilising floating-point types for calculations involving decimal numbers, which is a common requirement in software development.

---

#### 2.3. Character Type

This type is used to store single characters.

| Data Type | Size (bits) | Description                                                                 |
| :-------- | :---------- | :-------------------------------------------------------------------------- |
| `char`    | 16          | Represents a single Unicode character. Can also store integer values.       |

**Key Concepts and Definitions:**

*   **Unicode:** Java uses the Unicode character set, which supports a vast range of characters from different languages and symbols. Each character is represented by a 16-bit unsigned integer.
*   **Character Literals:** Enclosed in single quotes (`' '`).
*   **Conversion:** `char` can be treated as an integer type, allowing arithmetic operations.

**Examples:**

```java
char grade = 'A';
char currencySymbol = '$';
char unicodeChar = '\u0041'; // Unicode for 'A'

// Character as integer
char initial = 'J';
int asciiValue = initial; // ASCII/Unicode value of 'J'
System.out.println("ASCII value of 'J': " + asciiValue); // Output: ASCII value of 'J': 74

// Arithmetic operations on char
char nextChar = (char) (initial + 1); // Adding 1 to the ASCII value and casting back to char
System.out.println("Next character: " + nextChar); // Output: Next character: K
```

**Referencing Textbooks:**

*   **Java: The Complete Reference (Schildt):** Details the `char` type, its 16-bit Unicode representation, and character literals. Explains how `char` can be manipulated arithmetically.
*   **Java How to Program (Deitel & Deitel):** Illustrates the use of `char` variables, character literals, and provides examples of converting characters to their integer representations and vice-versa.

**Alignment with Course Outcomes:**

*   **CO1 (Knowledge Level: K2):** Using `char` variables as class attributes for storing individual characters.
*   **CO2 (Knowledge Level: K3):** Employing `char` data type for handling textual data, especially for single characters, and understanding its relationship with integer values.

---

#### 2.4. Boolean Type

This type is used for logical operations and conditional statements.

| Data Type | Size (bits) | Possible Values | Description                                                                 |
| :-------- | :---------- | :-------------- | :-------------------------------------------------------------------------- |
| `boolean` | Not fixed   | `true` or `false` | Represents logical truth values. Cannot be converted to or from any other type. |

**Key Concepts and Definitions:**

*   **Boolean Literals:** The only possible values for a `boolean` variable are `true` and `false`.
*   **Truth Tables:** `boolean` values are fundamental to understanding logical operators (AND, OR, NOT), which form the basis of control flow statements.
*   **No Implicit Conversion:** Unlike other primitive types, `boolean` values cannot be implicitly or explicitly converted to any other primitive type (or vice-versa).

**Examples:**

```java
boolean isJavaFun = true;
boolean isItraining = false;

// Using boolean in conditional statements
if (isJavaFun) {
    System.out.println("Yes, Java is fun!");
} else {
    System.out.println("Java might not be for everyone.");
}

// Boolean expressions
int a = 10;
int b = 5;
boolean isAGreaterThanB = (a > b); // The result of a comparison is a boolean
System.out.println("Is a > b? " + isAGreaterThanB); // Output: Is a > b? true
```

**Referencing Textbooks:**

*   **Java: The Complete Reference (Schildt):** Explains the `boolean` type, its two possible values (`true`, `false`), and its critical role in conditional statements and control flow.
*   **Java How to Program (Deitel & Deitel):** Provides detailed examples of using `boolean` variables in `if` statements, `while` loops, and other control structures, emphasizing its use in evaluating conditions.

**Alignment with Course Outcomes:**

*   **CO1 (Knowledge Level: K2):** Utilizing `boolean` variables as class attributes for flags or state indicators.
*   **CO2 (Knowledge Level: K3):** Crucially, `boolean` types are fundamental for using control statements (`if`, `while`, `for`, `switch`), which are essential for developing programs with conditional logic and program flow.

---

### 3. Type Casting

*   **Definition:** Type casting is the process of converting a value of one data type to another.
*   **Implicit Type Casting (Widening Conversion):** Occurs automatically when a smaller data type is converted to a larger data type. No data is lost.
    *   `byte` -> `short` -> `int` -> `long` -> `float` -> `double`
*   **Explicit Type Casting (Narrowing Conversion):** Occurs when a larger data type is converted to a smaller data type. This must be done manually using a cast operator (`(target_type)`). There is a risk of data loss or precision loss.

**Examples:**

```java
// Implicit Casting
byte b = 10;
int i = b; // byte to int (widening, no data loss)
System.out.println("int value: " + i); // Output: int value: 10

float f = 10.5f;
double d = f; // float to double (widening, no data loss)
System.out.println("double value: " + d); // Output: double value: 10.5

// Explicit Casting
double piDouble = 3.14159;
float piFloat = (float) piDouble; // double to float (narrowing, potential precision loss)
System.out.println("float value: " + piFloat); // Output: float value: 3.14159

int intValue = 130;
byte byteValue = (byte) intValue; // int to byte (narrowing, data loss)
System.out.println("byte value: " + byteValue); // Output: byte value: -126 (due to overflow)
```

**Referencing Textbooks:**

*   **Java: The Complete Reference (Schildt):** Dedicates a section to type conversion, explaining implicit (widening) and explicit (narrowing) conversions with clear examples and warnings about data loss in narrowing conversions.
*   **Introduction to Java Programming (Liang):** Provides a comprehensive overview of type casting, including the hierarchy of numeric types and the necessity of explicit casting when moving from a wider type to a narrower type.

**Alignment with Course Outcomes:**

*   **CO2 (Knowledge Level: K3):** Understanding type casting is crucial for performing calculations correctly, especially when mixing different numeric types, ensuring that data is handled as intended.

---

### 4. Important Points to Remember

*   **Java is Statically Typed:** You must declare the data type of a variable before you can use it.
*   **Default Values:** All primitive types have default values if not explicitly initialized.
    *   Numeric types (`byte`, `short`, `int`, `long`, `float`, `double`): `0` or `0.0`.
    *   `char`: `\u0000` (null character).
    *   `boolean`: `false`.
*   **Integer Literals:** Default to `int`. Use `L` or `l` for `long` literals.
*   **Floating-Point Literals:** Default to `double`. Use `F` or `f` for `float` literals.
*   **`boolean` Type:** Can only hold `true` or `false`. It's not convertible to other primitive types.
*   **Type Casting:** Be cautious with explicit (narrowing) casting, as it can lead to data loss.
*   **Understanding Ranges:** Always consider the range of each data type to prevent overflow or unexpected results.

---

### 5. Practice Questions and Exercises

**Question 1:**
Which primitive data type in Java would you use to store the population of a country?
(a) `byte`
(b) `short`
(c) `int`
(d) `long`

**Question 2:**
What is the default value of a `float` variable in Java?
(a) `0`
(b) `0.0`
(c) `null`
(d) `false`

**Question 3:**
Consider the following code snippet:
```java
char myChar = 'X';
int asciiVal = myChar + 1;
System.out.println(asciiVal);
```
What will be printed?

**Question 4:**
Explain the difference between `float` and `double` in terms of memory usage and precision.

**Question 5:**
Write a Java program that declares a `double` variable, assigns it a value, and then explicitly casts it to an `int`. Print both the original `double` value and the cast `int` value. Observe and explain any data loss.

---

### 6. Answers to Practice Questions

**Answer 1:**
(d) `long`. The population of a country can be very large, exceeding the capacity of `int`. `long` provides a much wider range for such values.

**Answer 2:**
(b) `0.0`. The default value for all floating-point primitive types (`float` and `double`) in Java is `0.0`.

**Answer 3:**
The ASCII/Unicode value of 'X' is 88. Adding 1 gives 89. Since `asciiVal` is an `int`, the output will be `89`.

**Answer 4:**
*   **Memory Usage:** `float` uses 32 bits (4 bytes) of memory, while `double` uses 64 bits (8 bytes) of memory.
*   **Precision:** `float` provides single precision, which means it can accurately represent about 6-7 decimal digits. `double` provides double precision, accurately representing about 15-16 decimal digits. Therefore, `double` is more precise and is generally preferred for most applications where accuracy is important.

**Answer 5:**
```java
public class CastingExample {
    public static void main(String[] args) {
        double originalDouble = 123.789;
        System.out.println("Original double value: " + originalDouble);

        // Explicitly cast double to int
        int castedInt = (int) originalDouble;
        System.out.println("Casted int value: " + castedInt);

        System.out.println("\nExplanation of Data Loss:");
        System.out.println("When casting from double to int, the decimal part is truncated (chopped off), not rounded.");
        System.out.println("The precision of the double value is lost, and only the whole number part is retained.");
    }
}
```
**Expected Output:**
```
Original double value: 123.789
Casted int value: 123

Explanation of Data Loss:
When casting from double to int, the decimal part is truncated (chopped off), not rounded.
The precision of the double value is lost, and only the whole number part is retained.
```
**Explanation:** As shown in the output, casting `123.789` to an `int` results in `123`. The fractional part (`.789`) is discarded because `int` cannot store decimal values. This demonstrates data loss due to narrowing conversion.

---
This concludes our exploration of primitive data types in Java. Mastering these fundamental types is the first step towards building robust and efficient Java applications.
