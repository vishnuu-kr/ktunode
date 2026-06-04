---
title: "Characters"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe679"
status: "completed"
scrapedAt: "2026-05-23T17:51:20.859Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Core Java Fundamentals

### Topic: Characters

**Learning Outcomes:**

*   Understand the concept of characters in Java.
*   Learn about the `char` data type and its usage.
*   Explore character literals and escape sequences.
*   Understand the relationship between characters and Unicode.
*   Learn to perform operations on characters.
*   Introduce basic string manipulation relevant to characters.

**Course Outcomes Alignment:**

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.** (This topic directly contributes by covering the `char` datatype and its operations, which are fundamental to data representation and manipulation in Java programs.)

---

### 1. Introduction to Characters in Java

Characters are fundamental data types used to represent single textual elements. In Java, characters are represented using the `char` data type. Unlike C/C++, Java uses Unicode for character representation, which supports a much wider range of characters from various languages and symbols.

**Key Concept:**

*   **Character:** A single letter, digit, punctuation mark, or symbol.

**Textbook References:**

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011.):** Chapter 4, "Data Types, Variables, and Arrays" will cover primitive data types, including `char`.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.):** Chapter 3, "Introduction to Classes, Objects, Methods, Instance Variables, Strings and Characters" is highly relevant.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013.):** Chapter 2, "Java Fundamentals" will introduce basic data types.

---

### 2. The `char` Data Type

The `char` data type in Java is a 16-bit unsigned integer that can hold a single Unicode character. It is used to store characters like letters, numbers, and symbols.

**Key Concepts & Definitions:**

*   **`char` Data Type:** A primitive data type in Java used to represent a single character.
*   **16-bit Unsigned Integer:** A `char` variable occupies 16 bits (2 bytes) of memory and can hold values from 0 to 65,535.
*   **Unicode:** An international standard that assigns a unique number to every character, regardless of the platform, program, or language. Java's `char` type is based on Unicode.

**Textbook References:**

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011.):** Page 52 discusses the `char` type and its size.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.):** Section 3.2.3 "Characters and Strings" explains the `char` type.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013.):** Section 2.4 "Primitive Data Types" covers `char`.

**Example:**

```java
public class CharExample {
    public static void main(String[] args) {
        char myChar1 = 'A';       // Storing an uppercase letter
        char myChar2 = 'b';       // Storing a lowercase letter
        char myChar3 = '7';       // Storing a digit as a character
        char myChar4 = '$';       // Storing a symbol
        char myChar5 = '\u0041';  // Storing 'A' using its Unicode value

        System.out.println("Character 1: " + myChar1);
        System.out.println("Character 2: " + myChar2);
        System.out.println("Character 3: " + myChar3);
        System.out.println("Character 4: " + myChar4);
        System.out.println("Character 5 (Unicode): " + myChar5);
    }
}
```

---

### 3. Character Literals

Character literals are how we represent characters directly in Java code. They are enclosed in single quotes (`'`).

**Key Concepts & Definitions:**

*   **Character Literal:** A sequence of characters enclosed in single quotes. For example, `'a'`, `'1'`, `'$'`.
*   **Escape Sequences:** Special sequences that represent characters that are difficult or impossible to type directly or have special meaning within Java. They begin with a backslash (`\`).

**Common Escape Sequences:**

| Escape Sequence | Description                             |
| :-------------- | :-------------------------------------- |
| `\b`            | Backspace                               |
| `\t`            | Horizontal Tab                          |
| `\n`            | Newline                                 |
| `\r`            | Carriage Return                         |
| `\f`            | Form Feed                               |
| `\'`            | Single Quote                            |
| `\"`            | Double Quote                            |
| `\\`            | Backslash                               |
| `\ooo`          | Octal value (where `ooo` is an octal number) |
| `\uxxxx`       | Hexadecimal Unicode character (where `xxxx` is a 4-digit hex number) |

**Textbook References:**

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011.):** Page 53 discusses character literals and escape sequences.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.):** Section 3.2.3 "Characters and Strings" covers character literals and escape sequences.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013.):** Section 2.4.1 "Characters" covers character literals and escape sequences.
*   **Programming JAVA a Primer by Balagurusamy E (5/e, 2014.):** Chapter 3, "Data Types and Operators" likely discusses character literals.

**Example:**

```java
public class EscapeSequenceExample {
    public static void main(String[] args) {
        char newline = '\n';
        char tab = '\t';
        char quote = '\'';
        char backslash = '\\';

        System.out.println("This is line 1." + newline + "This is line 2.");
        System.out.println("Column 1" + tab + "Column 2");
        System.out.println("He said, " + quote + "Hello!" + quote);
        System.out.println("The path is C:\\Program Files\\Java");

        // Unicode example using escape sequence
        char euroSymbol = '\u20AC'; // Unicode for Euro symbol
        System.out.println("The price is " + euroSymbol + "100");
    }
}
```

---

### 4. Characters and Unicode

Java's use of Unicode is a significant advantage, allowing it to handle characters from virtually any writing system. Each `char` value represents a specific Unicode code point.

**Key Concepts & Definitions:**

*   **Unicode Code Point:** A numerical value assigned to a character in the Unicode standard.
*   **UTF-16:** Java internally uses UTF-16 encoding, where most common characters are represented by a single 16-bit `char`. Some characters, particularly those outside the Basic Multilingual Plane (BMP), might require surrogate pairs (two `char` values) to represent. For this module, understanding that `char` holds a single Unicode value is sufficient.

**Textbook References:**

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011.):** Page 52 mentions Unicode.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.):** Section 3.2.3 "Characters and Strings" explains Unicode.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013.):** Section 2.4.1 "Characters" discusses Unicode support.

**Example:**

```java
public class UnicodeExample {
    public static void main(String[] args) {
        // Characters from different scripts
        char greekAlpha = '\u03B1'; // Greek lowercase alpha
        char japaneseHiragana = '\u3042'; // Japanese hiragana 'a'
        char emoji = '\uD83D'; // Part of a surrogate pair for an emoji (needs another char)

        System.out.println("Greek Alpha: " + greekAlpha);
        System.out.println("Japanese Hiragana 'a': " + japaneseHiragana);
        // Note: Emojis often require surrogate pairs and are better handled by String in modern Java.
    }
}
```

**Important Point to Remember:**

*   While `char` can hold Unicode values, when dealing with characters that require surrogate pairs (like many emojis), it's generally safer and more convenient to use `String` objects.

---

### 5. Operations on Characters

Characters can be treated as integers for arithmetic operations because they are internally represented by their Unicode values. This allows for conversions and manipulations.

**Key Concepts & Definitions:**

*   **Type Casting:** Explicitly converting a value from one data type to another. For `char`, we can cast it to `int` to get its Unicode value, or cast an `int` (within the `char` range) to a `char`.
*   **Arithmetic Operations:** Although `char` is a character type, it can participate in arithmetic operations after being cast to an integral type (`int`, `short`, `byte`).

**Textbook References:**

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011.):** Chapter 4 might touch upon implicit conversions between `char` and `int`.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.):** Section 3.2.3 "Characters and Strings" will likely demonstrate character arithmetic.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013.):** Section 2.4.1 "Characters" and Section 2.6 "Expressions" might cover character arithmetic.
*   **Programming JAVA a Primer by Balagurusamy E (5/e, 2014.):** Chapter 3, "Data Types and Operators" will cover character arithmetic.

**Example:**

```java
public class CharArithmeticExample {
    public static void main(String[] args) {
        char letterA = 'A';
        char letterB = 'B';
        char digit5 = '5';

        // Getting the integer (Unicode) value of a character
        int unicodeA = (int) letterA;
        System.out.println("Unicode value of 'A': " + unicodeA); // Output: 65

        // Incrementing a character (treats it as its integer value)
        char nextLetter = (char) (letterA + 1);
        System.out.println("Character after 'A': " + nextLetter); // Output: B

        // Performing arithmetic with characters
        int diff = letterB - letterA;
        System.out.println("Difference between 'B' and 'A': " + diff); // Output: 1

        // Converting a digit character to an integer
        int digitValue = digit5 - '0'; // '5' - '0' = 53 - 48 = 5
        System.out.println("Integer value of '5': " + digitValue); // Output: 5

        // Converting an integer back to a character
        char charFromInt = (char) 70; // Unicode for 'F'
        System.out.println("Character from integer 70: " + charFromInt); // Output: F
    }
}
```

**Important Point to Remember:**

*   When performing arithmetic operations that result in a value outside the `char` range, or when the operation is not a simple increment/decrement, explicit casting is crucial to avoid data loss or unexpected behavior. For example, `letterA + 1` results in an `int`, so `(char)(letterA + 1)` is needed to store it back into a `char`.

---

### 6. Basic String Manipulation (as it relates to Characters)

While `String` is a separate class, it's built upon characters. Understanding how to access individual characters within a string is a common task.

**Key Concepts & Definitions:**

*   **String:** A sequence of characters. In Java, `String` is an object.
*   **`charAt(int index)` Method:** A method of the `String` class that returns the `char` value at the specified index. Indices are zero-based.

**Textbook References:**

*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.):** Chapter 3.2.3 "Characters and Strings" covers `charAt()`.
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013.):** Chapter 3, "Control Statements" or Chapter 4, "Methods" might introduce string methods.
*   **Java in A Nutshell by Flanagan D (5/e, 2005.):** Chapter 9, "Strings" provides a deep dive into `String` operations.

**Example:**

```java
public class StringCharAccess {
    public static void main(String[] args) {
        String message = "Hello, Java!";

        // Accessing individual characters
        char firstChar = message.charAt(0);  // 'H'
        char fifthChar = message.charAt(4);  // 'o'
        char lastChar = message.charAt(message.length() - 1); // '!'

        System.out.println("First character: " + firstChar);
        System.out.println("Fifth character: " + fifthChar);
        System.out.println("Last character: " + lastChar);
    }
}
```

---

### 7. Practical Considerations and Best Practices

*   **Use Single Quotes for `char`, Double Quotes for `String`:** Always remember to enclose single characters in single quotes (`'a'`) and strings in double quotes (`"hello"`).
*   **Unicode Awareness:** Understand that Java uses Unicode, which is beneficial for internationalization but can be a slight learning curve if coming from ASCII-only backgrounds.
*   **Character Arithmetic:** Be mindful of type casting when performing arithmetic operations to ensure the result is correctly stored or interpreted.
*   **String vs. `char`:** Use `char` for single characters and `String` for sequences of characters.

---

### Practice Questions/Exercises

**Question 1:**
What is the size of the `char` data type in Java?
a) 8 bits
b) 16 bits
c) 32 bits
d) 64 bits

**Question 2:**
Which of the following is a valid character literal in Java?
a) `"a"`
b) `'a'`
c) `a`
d) `"\a"`

**Question 3:**
What will be the output of the following code snippet?
```java
char c1 = 'X';
char c2 = (char)(c1 + 1);
System.out.println(c2);
```
a) X
b) Y
c) 89
d) Error

**Question 4:**
Write a Java program that declares a character variable, assigns it the character 'Z', and then prints its Unicode value.

**Question 5:**
Given the string `String greeting = "Good Morning";`, how would you access the character 'M' using the `charAt()` method?

---

### Answers to Practice Questions

**Answer 1:**
b) 16 bits
*   **Explanation:** The `char` data type in Java is 16 bits (2 bytes).

**Answer 2:**
b) `'a'`
*   **Explanation:** Character literals in Java must be enclosed in single quotes. `"a"` is a string literal, `a` is an identifier (variable name), and `"\a"` is an escape sequence that is not standardly defined for a printable character (it's typically invalid or represents an alert sound in some contexts, but not a character literal).

**Answer 3:**
b) Y
*   **Explanation:** `c1` holds 'X'. When `c1 + 1` is performed, 'X' is treated as its integer Unicode value (88). Adding 1 gives 89. This integer value is then cast back to a `char` using `(char)`. The character with Unicode value 89 is 'Y'.

**Answer 4:**
```java
public class PrintUnicode {
    public static void main(String[] args) {
        char myChar = 'Z';
        int unicodeValue = (int) myChar;
        System.out.println("The Unicode value of '" + myChar + "' is: " + unicodeValue);
    }
}
```
*   **Explanation:** This program declares a `char` variable `myChar` and initializes it with 'Z'. It then explicitly casts `myChar` to an `int` to get its Unicode value and prints it. The Unicode value for 'Z' is 90.

**Answer 5:**
```java
String greeting = "Good Morning";
char mChar = greeting.charAt(5); // Accesses the character at index 5
System.out.println(mChar); // This will print 'M'
```
*   **Explanation:** The string `greeting` is "Good Morning". The indices are:
    *   G - 0
    *   o - 1
    *   o - 2
    *   d - 3
    *   (space) - 4
    *   M - 5
    Therefore, `greeting.charAt(5)` correctly retrieves the character 'M'.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
