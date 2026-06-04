---
title: "Primitive Data types - Integers"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe677"
status: "completed"
scrapedAt: "2026-05-23T17:51:19.471Z"
---
# OBJECT ORIENTED PROGRAMMING: Module 2: Core Java Fundamentals

## Topic: Primitive Data Types - Integers

This module focuses on the fundamental building blocks of Java programming, starting with the primitive data types. Specifically, this section will delve into **Integer primitive data types** in Java. Understanding these types is crucial for building robust and efficient programs, directly contributing to **CO2** (Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs).

---

### 1. Introduction to Primitive Data Types

Primitive data types are the most basic data types available in Java. They are not objects and do not have any associated methods. They represent single values. In Java, there are eight primitive data types:

*   **Integral types:** `byte`, `short`, `int`, `long`
*   **Floating-point types:** `float`, `double`
*   **Character type:** `char`
*   **Boolean type:** `boolean`

This section will focus on the **integral types**, which are used to represent whole numbers.

**Key Concept:** Primitive types are **statically typed**, meaning their data type is fixed at compile time.

---

### 2. Integer Primitive Data Types

Java provides four integer primitive data types, each differing in the amount of memory they occupy and the range of values they can hold. All integer types are **signed**, meaning they can represent both positive and negative values.

#### 2.1. `byte`

*   **Size:** 8 bits
*   **Range:** -128 to 127
*   **Purpose:** Useful for saving memory in large arrays when you know that the values will be limited to this range.

**Example:**
```java
byte age = 25;
byte minimumMarks = -10;
```

**From Herbert Schildt's "Java: The Complete Reference":**
Schildt emphasizes that `byte` is a space-saving type, ideal for situations where memory is at a premium, such as when working with large arrays of numbers. (Chapter 4: Data Types and Literals)

---

#### 2.2. `short`

*   **Size:** 16 bits
*   **Range:** -32,768 to 32,767
*   **Purpose:** Similar to `byte`, it can also be used to save memory compared to `int`, especially in situations where `int`'s range is not needed.

**Example:**
```java
short year = 2023;
short temperature = -5;
```

**From Deitel & Deitel's "Java How to Program, Early Objects":**
The Deitels highlight `short` as a more general-purpose integer type than `byte`, offering a wider range while still being more memory-efficient than `int` in specific scenarios. (Chapter 3: Introduction to Classes, Objects, Methods, Instance Variables, Strings, and System.out)

---

#### 2.3. `int`

*   **Size:** 32 bits
*   **Range:** -2,147,483,648 to 2,147,483,647
*   **Purpose:** This is the most commonly used integer type in Java. It is the default integer type for literals.

**Example:**
```java
int numberOfStudents = 1500;
int balance = 100000;
```

**Key Point:** If you don't specify a type for an integer literal (e.g., `100`), Java treats it as an `int`.

**From Balagurusamy's "Programming JAVA a Primer":**
Balagurusamy describes `int` as the "workhorse" of Java's integral types, suitable for most general-purpose integer calculations due to its balanced range and performance. (Chapter 2: Java Fundamentals)

---

#### 2.4. `long`

*   **Size:** 64 bits
*   **Range:** -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
*   **Purpose:** Used when you need to store very large integer values that exceed the range of `int`. To specify a `long` literal, append an 'L' or 'l' to the number.

**Example:**
```java
long population = 8000000000L; // 'L' is mandatory for long literals
long bigNumber = -50000000000L;
```

**Key Point:** When assigning a literal value to a `long` variable, you **must** append 'L' (uppercase is preferred to avoid confusion with the digit '1').

**From Y. Daniel Liang's "Introduction to Java Programming":**
Liang explains that `long` is necessary for handling calculations that might result in numbers exceeding the capacity of `int`, providing examples like financial calculations or large scientific data. (Chapter 2: Java Fundamentals)

---

### 3. Integer Literals

An integer literal is a sequence of digits that represents an integer value. By default, integer literals in Java are of type `int`.

*   **Decimal:** Base 10 (e.g., `10`, `255`, `-12`)
*   **Binary:** Base 2, prefixed with `0b` or `0B` (e.g., `0b1010`, `0b11111111`) - Available from Java 7 onwards.
*   **Octal:** Base 8, prefixed with `0` (e.g., `012`, `0377`) - Note the leading zero.
*   **Hexadecimal:** Base 16, prefixed with `0x` or `0X` (e.g., `0xA`, `0xFF`)

**Example:**
```java
int decimalValue = 100;
int binaryValue = 0b1010;     // Represents 10 in decimal
int octalValue = 012;         // Represents 10 in decimal
int hexValue = 0xA;           // Represents 10 in decimal

// Long literals
long veryBigNumber = 1234567890123L;
long anotherBigNumber = 0x100000000L; // Represents 2^32 in decimal
```

**Important Note on Octal:** Be cautious with octal literals, as a leading zero can be easily mistaken for a decimal number, leading to unexpected results.

**From Flanagan's "Java in A Nutshell":**
Flanagan discusses the importance of understanding integer literals and their bases, especially in contexts where low-level bit manipulation or compatibility with other systems might be required. (Chapter 3: Data Types and Values)

---

### 4. Type Casting for Integers

Type casting is the process of converting one data type to another. For integers, you can perform:

*   **Widening Conversion (Implicit/Automatic):** When converting from a smaller integer type to a larger integer type, the conversion happens automatically. No explicit cast is needed.
    *   `byte` -> `short` -> `int` -> `long`

*   **Narrowing Conversion (Explicit):** When converting from a larger integer type to a smaller integer type, you **must** use an explicit cast. This can lead to data loss or overflow if the value is outside the range of the target type.

**Example of Widening Conversion:**
```java
byte b = 10;
short s = b; // Implicit conversion from byte to short
int i = s;   // Implicit conversion from short to int
long l = i;  // Implicit conversion from int to long
```

**Example of Narrowing Conversion:**
```java
int bigInt = 130;
byte smallByte = (byte) bigInt; // Explicit cast needed. 130 is out of byte range.

System.out.println(smallByte); // Output will be -126 (due to overflow)

long bigLong = 3000000000L;
int limitedInt = (int) bigLong; // Explicit cast needed. Value will be truncated.

System.out.println(limitedInt); // Output will be -1294967296 (due to overflow)
```

**Key Concept:** Narrowing conversions can lead to **loss of information** or **overflow**, so they should be used with caution.

**From Sierra & Bates' "Head First Java":**
The "Head First" approach often uses analogies to explain concepts like widening and narrowing. They might compare widening to pouring a liquid into a larger container (no loss) and narrowing to trying to pour a large amount of liquid into a small cup (spillage/loss). (Chapter 7: More About Primitive Types)

---

### 5. Integer Overflow

Integer overflow occurs when an arithmetic operation attempts to create a numeric value that is too large to be represented in the range of the given data type. For signed integers, this can wrap around to negative values.

**Example:**
```java
int maxIntValue = Integer.MAX_VALUE; // Maximum value for int
System.out.println("Max Int: " + maxIntValue); // 2147483647

int overflowInt = maxIntValue + 1; // This will cause overflow
System.out.println("Overflow Int: " + overflowInt); // -2147483648 (wraps around to minimum int value)

int minIntValue = Integer.MIN_VALUE; // Minimum value for int
System.out.println("Min Int: " + minIntValue); // -2147483648

int underflowInt = minIntValue - 1; // This will cause underflow
System.out.println("Underflow Int: " + underflowInt); // 2147483647 (wraps around to maximum int value)
```

**Important Point:** Java **does not** throw an exception when an integer overflow or underflow occurs. The operation silently wraps around. This is a common source of bugs if not handled carefully. For calculations that might exceed the `int` range, use `long` or `BigInteger`.

**Relating to CO2:** Understanding overflow is crucial for "utilizing datatypes... to develop programs" accurately. Incorrectly using `int` when `long` is needed can lead to faulty program logic.

---

### 6. Constants with `final`

The `final` keyword can be used to declare constants, which are variables whose values cannot be changed after they are initialized. This is good practice for representing fixed values.

**Example:**
```java
final int DAYS_IN_WEEK = 7;
final long EARTHS_CIRCUMFERENCE_KM = 40075000L;

// DAYS_IN_WEEK = 8; // This would cause a compile-time error
```

**Key Concept:** Constants are typically written in all uppercase letters with underscores separating words for readability.

---

### 7. Practice Questions

**Question 1:** Which primitive integer type in Java occupies 64 bits of memory?
    a) `int`
    b) `short`
    c) `long`
    d) `byte`

**Question 2:** What is the range of the `byte` data type in Java?
    a) -128 to 127
    b) -32768 to 32767
    c) -2147483648 to 2147483647
    d) -9223372036854775808 to 9223372036854775807

**Question 3:** What will be the output of the following code snippet?
```java
int a = 5;
long b = a;
System.out.println(b);
```
    a) 5
    b) 5L
    c) Compile-time error
    d) Runtime error

**Question 4:** What is the output of this code?
```java
byte num = (byte) 257;
System.out.println(num);
```
    a) 257
    b) 1
    c) 0
    d) -127

**Question 5:** Write a Java statement to declare a constant named `MAX_USERS` and initialize it with the value 1000, using the appropriate primitive integer type.

---

### 8. Answers to Practice Questions

**Answer 1:** c) `long`
    *   **Explanation:** `long` is a 64-bit signed integer type.

**Answer 2:** a) -128 to 127
    *   **Explanation:** `byte` is an 8-bit signed integer type with a range from -128 to 127.

**Answer 3:** a) 5
    *   **Explanation:** This is a widening conversion (from `int` to `long`), which is done implicitly. The `long` variable `b` will hold the value 5.

**Answer 4:** b) 1
    *   **Explanation:** This involves a narrowing conversion from `int` to `byte`. 257 when cast to `byte` overflows. 257 is 256 + 1. Since 256 is $2^8$, it wraps around. The value 257 in binary is `100000001`. When truncated to 8 bits, it becomes `00000001`, which is 1.

**Answer 5:**
```java
final int MAX_USERS = 1000;
```
    *   **Explanation:** `final` declares it as a constant. `int` is appropriate for the value 1000. All uppercase with underscore is standard practice for constants.

---

### 9. Important Points to Remember

*   Java has eight primitive data types: `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`.
*   The integer types are `byte` (8-bit), `short` (16-bit), `int` (32-bit), and `long` (64-bit).
*   Integer literals are `int` by default unless a suffix ('L' or 'l') is used.
*   Integer literals can be represented in decimal, binary (`0b`), octal (`0`), and hexadecimal (`0x`).
*   Widening conversions (e.g., `byte` to `int`) are automatic.
*   Narrowing conversions (e.g., `int` to `byte`) require explicit casting and can cause data loss or overflow.
*   Integer overflow/underflow in Java does not throw exceptions; values wrap around.
*   Use `final` to declare constants.

---

### 10. Relevance to Course Outcomes

*   **CO2:** This entire topic directly addresses **CO2** by focusing on the fundamental data types (`datatypes`) used in Java. Understanding the range and behavior of integers is essential for writing correct programs, which involves utilizing these datatypes effectively. The concept of overflow also highlights the need for careful selection of datatypes for accurate calculations.

---

This concludes the study notes on Primitive Data Types - Integers. This foundational knowledge is critical for progressing in Java programming and mastering object-oriented concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
