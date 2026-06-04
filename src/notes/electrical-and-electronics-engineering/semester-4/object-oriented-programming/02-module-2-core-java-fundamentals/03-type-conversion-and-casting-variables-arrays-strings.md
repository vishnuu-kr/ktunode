---
title: "Type Conversion and Casting, Variables, Arrays, Strings."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36008"
status: "completed"
scrapedAt: "2026-05-23T16:17:30.386Z"
---
# Object Oriented Programming: Module 2: Core Java Fundamentals

## Topic: Type Conversion and Casting, Variables, Arrays, Strings

This module delves into the fundamental building blocks of Java programming, focusing on how data is stored, manipulated, and represented. We will explore the essential concepts of type conversion and casting, the declaration and use of variables, the organization of data into arrays, and the manipulation of textual data using Strings.

### Learning Outcomes:

*   Understand the differences between primitive and reference types.
*   Explain the mechanisms of implicit (widening) and explicit (narrowing) type conversion.
*   Apply type casting correctly to convert data between compatible types.
*   Declare and initialize variables of various data types.
*   Understand the scope and lifetime of variables.
*   Define and use arrays to store collections of data of the same type.
*   Iterate through arrays and perform common operations.
*   Understand the nature of Strings in Java as immutable objects.
*   Utilize common String methods for manipulation and comparison.
*   Differentiate between String literals and String objects created using `new`.

---

## 1. Variables

### 1.1. What are Variables?

Variables are named memory locations that store data. In Java, every variable has a specific data type, which determines the kind of values it can hold and the operations that can be performed on it.

*   **Definition:** A variable is a symbolic name given to a memory location that holds a value.
*   **Purpose:** To store and retrieve data during program execution.
*   **Declaration:** A variable must be declared before it can be used. This involves specifying its data type and its name.

### 1.2. Variable Declaration Syntax

```java
dataType variableName;
```

**Example:**

```java
int age;       // Declares an integer variable named 'age'
double salary; // Declares a double variable named 'salary'
char initial;  // Declares a character variable named 'initial'
```

### 1.3. Variable Initialization

Initialization is the process of assigning an initial value to a variable.

```java
dataType variableName = initialValue;
```

**Example:**

```java
int age = 30;
double salary = 50000.50;
char initial = 'J';
```

### 1.4. Data Types in Java

Java has two main categories of data types:

#### 1.4.1. Primitive Data Types

These are the basic data types directly supported by the Java language. They store actual values.

| Data Type | Size (bits) | Range                                    | Default Value | Description                                 |
| :-------- | :---------- | :--------------------------------------- | :------------ | :------------------------------------------ |
| `byte`    | 8           | -128 to 127                              | 0             | Smallest integer type                       |
| `short`   | 16          | -32,768 to 32,767                        | 0             | Smaller integer type                        |
| `int`     | 32          | -2,147,483,648 to 2,147,483,647          | 0             | Most common integer type                    |
| `long`    | 64          | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | 0L            | For large integer values (note the 'L' suffix) |
| `float`   | 32          | Approximately ±3.4e+38 (7 decimal digits) | 0.0f          | Single-precision floating-point (note the 'f' suffix) |
| `double`  | 64          | Approximately ±1.7e+308 (15 decimal digits) | 0.0           | Double-precision floating-point (default for decimals) |
| `char`    | 16          | '\u0000' to '\uffff' (0 to 65,535)       | '\u0000'      | Represents a single character (Unicode)     |
| `boolean` | N/A         | `true` or `false`                        | `false`       | Represents logical values                   |

**Reference from Textbooks:**
*   **Java: The Complete Reference (Schildt):** Chapter 4 covers primitive types and variables in detail, including their ranges and default values.
*   **Java How to Program (Deitel & Deitel):** Chapter 3 introduces primitive types, declaring variables, and assigning values.
