---
title: "Strings- String Handling functions."
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe67f"
status: "completed"
scrapedAt: "2026-05-23T17:51:25.088Z"
---
This is a comprehensive study guide for **Strings - String Handling Functions** within **Module 2: Core Java Fundamentals** of **Object Oriented Programming**.

---

## Module 2: Core Java Fundamentals: Strings - String Handling Functions

### 1. Introduction to Strings in Java

**Key Concepts:**

*   **Strings are Objects:** In Java, strings are not primitive data types. They are objects of the `String` class. This is a fundamental aspect of Object-Oriented Programming (OOP) as it allows strings to have methods (behaviors) associated with them.
*   **Immutability:** `String` objects in Java are immutable. This means that once a `String` object is created, its value cannot be changed. Any operation that appears to modify a string actually creates a new `String` object with the modified value.
*   **String Literals:** Strings can be created using string literals enclosed in double quotes (`"`). For example: `"Hello Java"`.
*   **String Objects via `new` keyword:** Strings can also be created using the `new` keyword and the `String` class constructor. For example: `new String("Hello Java")`.

**Important Points to Remember:**

*   The immutability of strings is a crucial concept for understanding string manipulation and for potential performance optimizations (e.g., string interning).
*   Understanding that strings are objects allows us to leverage the numerous methods provided by the `String` class, which is central to string handling.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Chapter on Strings emphasizes their object-oriented nature and immutability. (K2)
*   **Java How to Program (Deitel & Deitel):** Introduces strings as objects and explores basic string manipulation through methods. (K2)
*   **Introduction to Java Programming (Liang):** Provides a thorough explanation of string classes and their properties. (K2)

---

### 2. Creating and Manipulating Strings

**Key Concepts:**

*   **String Literals vs. `new String()`:**
    *   **String Literals:** When you use string literals, Java's string interning mechanism can create a single instance of a string if the same literal is used multiple times. This can save memory.
        ```java
        String s1 = "Hello";
        String s2 = "Hello";
        // s1 and s2 refer to the same String object in memory (due to interning)
        ```
    *   **`new String()`:** Using the `new` keyword explicitly creates a new `String` object each time, even if the content is the same. This bypasses interning.
        ```java
        String s3 = new String("Hello");
        String s4 = new String("Hello");
        // s3 and s4 refer to different String objects in memory
        ```
*   **`+` Operator for Concatenation:** The `+` operator can be used to concatenate strings. When used with other data types, they are converted to strings before concatenation.
    ```java
    String greeting = "Hello";
    String name = "World";
    String message = greeting + " " + name; // "Hello World"
    int year = 2023;
    String yearString = "The year is: " + year; // "The year is: 2023"
    ```
*   **`concat()` Method:** The `concat()` method also concatenates strings, but it only works with other `String` objects.
    ```java
    String str1 = "Java";
    String str2 = " Programming";
    String combined = str1.concat(str2); // "Java Programming"
    ```

**Important Points to Remember:**

*   Prefer string literals for efficiency when possible.
*   The `+` operator is convenient for concatenation, but for extensive string building, `StringBuilder` or `StringBuffer` are more efficient.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Details string creation and concatenation using the `+` operator and `concat()` method. (K2)
*   **Java How to Program (Deitel & Deitel):** Provides numerous examples of string concatenation. (K2)
*   **Core Java: An Integrated Approach (Nageswararao):** Discusses string interning and its implications. (K2)

---

### 3. Essential String Handling Functions (Methods)

**Key Concepts:**

The `String` class provides a rich set of methods for manipulating and querying string objects. Here are some of the most important ones:

#### 3.1. Obtaining String Length

*   **`length()`:** Returns the number of characters in the string.
    ```java
    String text = "Programming";
    int len = text.length(); // len will be 11
    ```

#### 3.2. Character Access

*   **`charAt(int index)`:** Returns the character at the specified index. Indices are 0-based.
    ```java
    String word = "Example";
    char firstChar = word.charAt(0);  // 'E'
    char lastChar = word.charAt(word.length() - 1); // 'e'
    ```
*   **`toCharArray()`:** Converts the string into an array of characters.
    ```java
    String message = "Hi!";
    char[] charArray = message.toCharArray(); // charArray will be {'H', 'i', '!'}
    ```

#### 3.3. String Comparison

*   **`equals(Object anObject)`:** Compares this string to the specified object. Returns `true` if and only if the argument is not `null` and is a `String` object that represents the same sequence of characters as this object. **This is case-sensitive.**
    ```java
    String s1 = "apple";
    String s2 = "Apple";
    String s3 = "apple";

    s1.equals(s3)  // true
    s1.equals(s2)  // false (case difference)
    ```
*   **`equalsIgnoreCase(String anotherString)`:** Compares this `String` to another `String`, ignoring case considerations.
    ```java
    s1.equalsIgnoreCase(s2) // true
    ```
*   **`compareTo(String anotherString)`:** Compares two strings lexicographically. Returns a negative integer, zero, or a positive integer as the first string is less than, equal to, or greater than the second string. **This is case-sensitive.**
    ```java
    String strA = "banana";
    String strB = "apple";
    String strC = "banana";

    strA.compareTo(strB) // returns a positive value (banana > apple)
    strA.compareTo(strC) // returns 0 (banana == banana)
    strB.compareTo(strA) // returns a negative value (apple < banana)
    ```
*   **`compareToIgnoreCase(String str)`:** Compares two strings lexicographically, ignoring case differences.

#### 3.4. Searching Within Strings

*   **`indexOf(String str)`:** Returns the index within this string of the first occurrence of the specified substring. Returns `-1` if the substring is not found.
    ```java
    String sentence = "The quick brown fox jumps over the lazy dog.";
    int index = sentence.indexOf("fox"); // index will be 16
    int notFound = sentence.indexOf("cat"); // notFound will be -1
    ```
*   **`indexOf(String str, int fromIndex)`:** Returns the index within this string of the first occurrence of the specified substring, starting the search at the specified index.
    ```java
    int secondThe = sentence.indexOf("the", 20); // searches for "the" from index 20 onwards, will find it at index 31
    ```
*   **`lastIndexOf(String str)`:** Returns the index within this string of the last occurrence of the specified substring. Returns `-1` if the substring is not found.
    ```java
    int lastThe = sentence.lastIndexOf("the"); // lastThe will be 31
    ```
*   **`contains(CharSequence s)`:** Returns `true` if and only if this string contains the specified sequence of char values.
    ```java
    sentence.contains("quick") // true
    sentence.contains("cat")   // false
    ```

#### 3.5. Extracting Substrings

*   **`substring(int beginIndex)`:** Returns a new String that is a substring of this string. The substring begins with the character at the specified index and extends to the end of this string.
    ```java
    String original = "Programming";
    String sub1 = original.substring(3); // "gramming"
    ```
*   **`substring(int beginIndex, int endIndex)`:** Returns a new String that is a substring of this string. The substring begins at the specified `beginIndex` and extends to the character at index `endIndex - 1`.
    ```java
    String original = "Programming";
    String sub2 = original.substring(0, 3); // "Pro"
    String sub3 = original.substring(3, 7); // "gram"
    ```

#### 3.6. Modifying Strings (Creating New Strings)

*   **`toLowerCase()`:** Converts all of the characters in this `String` to lower case.
    ```java
    String mixedCase = "JaVaExAmPlE";
    String lowerCase = mixedCase.toLowerCase(); // "javaexample"
    ```
*   **`toUpperCase()`:** Converts all of the characters in this `String` to upper case.
    ```java
    String upperCase = mixedCase.toUpperCase(); // "JAVAEXAMPLE"
    ```
*   **`trim()`:** Returns a copy of this string, with leading and trailing whitespace removed.
    ```java
    String spaced = "   Hello World   ";
    String trimmed = spaced.trim(); // "Hello World"
    ```
*   **`replace(char oldChar, char newChar)`:** Returns a new string resulting from replacing all occurrences of `oldChar` in this string with `newChar`.
    ```java
    String oldString = "Mississippi";
    String newString = oldString.replace('s', 'z'); // "Mizzizzippi"
    ```
*   **`replace(CharSequence target, CharSequence replacement)`:** Returns a new string resulting from replacing all occurrences of `target` in this string with `replacement`.
    ```java
    String sentence = "The quick brown fox.";
    String replacedSentence = sentence.replace("fox", "dog"); // "The quick brown dog."
    ```
*   **`replaceAll(String regex, String replacement)`:** Replaces each substring of this string that matches the given regular expression with the given replacement.
    ```java
    String data = "123-456-7890";
    String cleaned = data.replaceAll("-", ""); // "1234567890"
    ```
*   **`replaceFirst(String regex, String replacement)`:** Replaces the first substring of this string that matches the given regular expression with the given replacement.

#### 3.7. String Manipulation and Conversion

*   **`split(String regex)`:** Splits this string around matches of the given regular expression.
    ```java
    String csvLine = "apple,banana,cherry";
    String[] fruits = csvLine.split(","); // fruits will be {"apple", "banana", "cherry"}

    String sentence = "The quick brown fox";
    String[] words = sentence.split(" "); // words will be {"The", "quick", "brown", "fox"}
    ```
*   **`startsWith(String prefix)`:** Tests if this string starts with the specified prefix.
    ```java
    String fileName = "document.txt";
    fileName.startsWith("doc") // true
    ```
*   **`endsWith(String suffix)`:** Tests if this string ends with the specified suffix.
    ```java
    fileName.endsWith(".txt") // true
    ```

**Important Points to Remember:**

*   All these methods return *new* `String` objects. They do not modify the original string because strings are immutable.
*   Understand the difference between `equals()` and `==` when comparing strings. `==` compares object references, while `equals()` compares string content.
*   Be mindful of case sensitivity in methods like `equals()` and `compareTo()`.
*   `indexOf()` and `lastIndexOf()` are essential for finding the positions of characters or substrings.
*   `substring()` is powerful for extracting parts of a string.
*   `replace()`, `replaceAll()`, and `split()` are commonly used for text processing and data transformation.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Covers most of these methods in detail with examples. (K3)
*   **Java How to Program (Deitel & Deitel):** Extensive coverage of string manipulation methods, often with practical examples. (K3)
*   **Introduction to Java Programming (Liang):** Provides clear explanations and code samples for various `String` methods. (K3)
*   **Java in A Nutshell (Flanagan):** Offers concise explanations and covers advanced string handling. (K3)

---

### 4. StringBuffer and StringBuilder

**Key Concepts:**

*   **Mutability:** Unlike `String` objects, `StringBuffer` and `StringBuilder` objects are mutable. This means their content can be modified without creating new objects.
*   **`StringBuffer`:** Is synchronized and thread-safe. This makes it suitable for use in multi-threaded environments where multiple threads might access and modify the same string buffer. However, synchronization adds overhead, making it slower than `StringBuilder`.
*   **`StringBuilder`:** Is not synchronized and therefore not thread-safe. It is generally faster than `StringBuffer` and is preferred for single-threaded applications or when thread safety is managed externally.
*   **Common Methods:** Both `StringBuffer` and `StringBuilder` share many common methods, including:
    *   `append(String str)`: Appends the specified string to the end of the buffer.
    *   `insert(int offset, String str)`: Inserts the specified string at the specified offset.
    *   `delete(int start, int end)`: Deletes the characters in a substring.
    *   `replace(int start, int end, String str)`: Replaces the characters in a substring with another string.
    *   `reverse()`: Reverses the sequence of characters.
    *   `setLength(int newLength)`: Sets the length of the character sequence.
    *   `toString()`: Converts the buffer to a `String` object.

**When to Use:**

*   Use `String` for static text or when the string value will not change.
*   Use `StringBuilder` for building strings within a single thread (most common scenario).
*   Use `StringBuffer` when multiple threads might be modifying the same string buffer concurrently.

**Example:**

```java
// Using StringBuilder for efficient string concatenation
StringBuilder sb = new StringBuilder("Hello");
sb.append(" ");
sb.append("World");
sb.append("!");
System.out.println(sb.toString()); // Output: Hello World!

// Reversing a string using StringBuilder
String original = "Java";
StringBuilder revBuilder = new StringBuilder(original);
revBuilder.reverse();
System.out.println(revBuilder.toString()); // Output: avaJ

// Using StringBuffer (thread-safe)
StringBuffer sbf = new StringBuffer("Thread");
sbf.append(" ");
sbf.append("Safe");
System.out.println(sbf.toString()); // Output: Thread Safe
```

**Important Points to Remember:**

*   For performance-critical string manipulation, especially in loops, prefer `StringBuilder` over repeated use of the `+` operator for `String` concatenation.
*   Understand the thread-safety implications of `StringBuffer` vs. `StringBuilder`.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Dedicates a section to `StringBuffer` and `StringBuilder`, highlighting their mutability and performance benefits. (K3)
*   **Java How to Program (Deitel & Deitel):** Explains the need for mutable string classes and demonstrates their usage. (K3)
*   **Introduction to Java Programming (Liang):** Compares `String`, `StringBuffer`, and `StringBuilder` clearly. (K3)
*   **Java in A Nutshell (Flanagan):** Provides a concise overview of mutable string classes. (K3)

---

### 5. String Formatting

**Key Concepts:**

*   **`String.format(String format, Object... args)`:** A static method that returns a formatted string using the specified format string and arguments. This is similar to `printf` in C.
*   **Format Specifiers:** Use format specifiers to define how arguments should be converted to strings. Common specifiers include:
    *   `%s`: String
    *   `%d`: Decimal integer
    *   `%f`: Floating-point number
    *   `%c`: Character
    *   `%b`: Boolean
    *   `%n`: Platform-specific line separator

**Example:**

```java
String name = "Alice";
int age = 30;
double salary = 50000.75;

String formattedString = String.format("Name: %s, Age: %d, Salary: %.2f", name, age, salary);
System.out.println(formattedString);
// Output: Name: Alice, Age: 30, Salary: 50000.75

// Using line separator
String message = String.format("First line.%nSecond line.");
System.out.println(message);
// Output (on most systems):
// First line.
// Second line.
```

**Important Points to Remember:**

*   `String.format()` is useful for creating readable output, especially when dealing with numbers and specific formatting requirements.
*   It's a more controlled way to build strings compared to simple concatenation.

**Textbook References:**

*   **Java: The Complete Reference (Schildt):** Covers `String.format()` and its usage. (K3)
*   **Java How to Program (Deitel & Deitel):** Includes examples of formatted output using `String.format()`. (K3)

---

### 6. Practical Application and Course Outcome Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**
    *   **How it aligns:** Strings are objects in Java, and understanding their methods allows you to write programs that process and manipulate textual data. This directly involves using object-oriented concepts (methods of the `String` class) to perform tasks. You'll use `String` objects as variables (datatypes), employ operators like `+`, and use control statements (`if`, `for`) to work with strings.
*   **CO3: Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files.**
    *   **How it aligns:** String handling is fundamental when working with input/output. Data read from files or user input is often in the form of strings. Robust programs need to parse, validate, and manipulate these strings effectively. For instance, reading a number from a file will require converting a `String` to an `int` (e.g., using `Integer.parseInt()`), which can throw `NumberFormatException` (an exception).

---

### 7. Practice Questions

**Question 1:**
Write a Java program that takes a sentence as input from the user and prints:
a) The total number of characters in the sentence.
b) The number of words in the sentence (assume words are separated by spaces).
c) The sentence in reverse order.

**Question 2:**
Create a Java program that checks if a given string is a palindrome (reads the same forwards and backward, ignoring case).

**Question 3:**
Write a Java program that counts the occurrences of a specific character within a given string. For example, count the number of 'a's in "Programming is amazing".

**Question 4:**
Given two strings, `str1` and `str2`, write a Java program to check if `str2` is a substring of `str1` using the `contains()` method and then again using `indexOf()`.

**Question 5:**
Explain the difference between `String`, `StringBuffer`, and `StringBuilder` in Java and when you would choose each one.

---

### 8. Answers to Practice Questions

**Answer 1:**

```java
import java.util.Scanner;

public class SentenceAnalyzer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        // a) Total number of characters
        System.out.println("Total characters: " + sentence.length());

        // b) Number of words
        // Splitting by one or more spaces to handle multiple spaces between words
        String[] words = sentence.trim().split("\\s+");
        System.out.println("Number of words: " + words.length);

        // c) Sentence in reverse order
        StringBuilder reversedSentence = new StringBuilder(sentence);
        System.out.println("Reversed sentence: " + reversedSentence.reverse().toString());

        scanner.close();
    }
}
```

**Answer 2:**

```java
import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string to check if it's a palindrome: ");
        String original = scanner.nextLine();

        String cleanedString = original.replaceAll("\\s+", "").toLowerCase(); // Remove spaces and convert to lowercase
        StringBuilder reversedString = new StringBuilder(cleanedString).reverse();

        if (cleanedString.equals(reversedString.toString())) {
            System.out.println("'" + original + "' is a palindrome.");
        } else {
            System.out.println("'" + original + "' is not a palindrome.");
        }

        scanner.close();
    }
}
```

**Answer 3:**

```java
import java.util.Scanner;

public class CharCounter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String text = scanner.nextLine();
        System.out.print("Enter the character to count: ");
        char charToCount = scanner.next().charAt(0);

        int count = 0;
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) == charToCount) {
                count++;
            }
        }

        System.out.println("The character '" + charToCount + "' appears " + count + " times.");

        scanner.close();
    }
}
```

**Answer 4:**

```java
import java.util.Scanner;

public class SubstringChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the main string (str1): ");
        String str1 = scanner.nextLine();
        System.out.print("Enter the substring to check (str2): ");
        String str2 = scanner.nextLine();

        // Using contains()
        if (str1.contains(str2)) {
            System.out.println("Using contains(): '" + str2 + "' is a substring of '" + str1 + "'.");
        } else {
            System.out.println("Using contains(): '" + str2 + "' is NOT a substring of '" + str1 + "'.");
        }

        // Using indexOf()
        if (str1.indexOf(str2) != -1) {
            System.out.println("Using indexOf(): '" + str2 + "' is a substring of '" + str1 + "' starting at index " + str1.indexOf(str2) + ".");
        } else {
            System.out.println("Using indexOf(): '" + str2 + "' is NOT a substring of '" + str1 + "'.");
        }

        scanner.close();
    }
}
```

**Answer 5:**

*   **`String`:**
    *   **Nature:** Immutable sequence of characters.
    *   **Thread Safety:** Thread-safe due to immutability. Any operation creates a new `String` object.
    *   **Performance:** Less efficient for repeated modifications (e.g., in loops) because new objects are created each time.
    *   **Use Case:** For storing data that doesn't change, literals, configuration values.

*   **`StringBuffer`:**
    *   **Nature:** Mutable sequence of characters.
    *   **Thread Safety:** Thread-safe because its methods are synchronized.
    *   **Performance:** Slower than `StringBuilder` due to synchronization overhead.
    *   **Use Case:** When multiple threads need to access and modify the same string buffer concurrently.

*   **`StringBuilder`:**
    *   **Nature:** Mutable sequence of characters.
    *   **Thread Safety:** Not thread-safe as its methods are not synchronized.
    *   **Performance:** Faster than `StringBuffer` for single-threaded applications due to lack of synchronization.
    *   **Use Case:** For building strings dynamically in single-threaded applications, especially in loops or complex string manipulations. This is the most commonly used mutable string class.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
